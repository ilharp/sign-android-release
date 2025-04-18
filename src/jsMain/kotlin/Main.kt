@file:OptIn(DelicateCoroutinesApi::class)

import actions.core.debug
import actions.core.error
import actions.core.exportVariable
import actions.core.getInput
import actions.core.group
import actions.core.info
import actions.core.setFailed
import actions.core.setOutput
import actions.core.setSecret
import actions.core.summary
import actions.core.toPosixPath
import actions.exec.exec
import actions.io.which
import chalk.Instance
import chalk.Options
import js.coroutines.asPromise
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import node.fs.existsSync
import node.fs.writeFileSync
import node.path.path
import node.process.Platform
import node.process.process

suspend fun main() =
    try {
        mainIntl()
    } catch (e: dynamic) {
        e.toString().let {
            error(it)
            setFailed(it)
        }
    }

suspend fun mainIntl() {
    // Create chalk instance
    val chalk =
        Instance(
            object : Options {
                override var level: Any? = 1
            },
        )
    // Collect variables
    val inputs = collectInputs()
    val buildTools = collectBuildTools(inputs)

    info(chalk.blue("Signing file(s) in ${inputs.releaseDir.dropLast(1)} with key ${inputs.keyAlias}...\n"))

    // Find release files
    val globPatterns =
        "${inputs.releaseDir}**/*.apk\n${inputs.releaseDir}**/*.aab"
            .apply { debug("Glob patterns:\n$this") }
    // Use @action/glob to glob files
    val sourceFiles =
        actions.glob
            .create(globPatterns)
            .glob()
            .await()
            // Map path of files to relative
            .map { path.relative(process.cwd(), it) }
            .map { path.relative(inputs.releaseDir, it) }
            .map { toPosixPath(it) }
            .apply {
                // Check if there's any file
                if (!any()) throw Exception("Cannot find any apk/aab file.")
            }
    val sourceFilesCount = sourceFiles.count()

    info(
        "${chalk.blue("Now sign $sourceFilesCount file(s):")}\n${
            sourceFiles.joinToString(
                "\n",
                transform = { "- $it" },
            )
        }\n",
    )

    // Sign files
    val signResult =
        sourceFiles.mapIndexed { index, sourceFile ->
            var signedFile = ""
            group("[${index + 1}/$sourceFilesCount] $sourceFile") {
                if (sourceFile.endsWith(".apk")) {
                    GlobalScope
                        .async {
                            signedFile = signApk(chalk, sourceFile, inputs, buildTools)
                        }.asPromise()
                } else {
                    GlobalScope
                        .async {
                            signedFile = signAab(chalk, sourceFile, inputs, buildTools)
                        }.asPromise()
                }
            }
            Pair(sourceFile, signedFile)
        }

    info(chalk.green("Successfully signed $sourceFilesCount file(s).\n"))

    // Set output
    signResult
        .map { it.second }
        .map { path.join(process.cwd(), inputs.releaseDir, it) }
        .apply {
            singleOrNull()?.let {
                setOutput("signedFile", it)
                exportVariable("ANDROID_SIGNED_FILE", it)
            }

            joinToString(":").let {
                setOutput("signedFiles", it)
                exportVariable("ANDROID_SIGNED_FILES", it)
            }

            count().let {
                setOutput("signedFilesCount", it)
                exportVariable("ANDROID_SIGNED_FILES_COUNT", it)
            }
        }

    // Write summary
    summary
        .addHeading("Signed Release Files", 3)
        .addRaw("Successfully signed $sourceFilesCount file(s).\n\n")
        .addTable(
            mutableListOf(
                arrayOf(
                    object {
                        var data = "Index"
                        var header: Boolean? = true
                    },
                    object {
                        var data = "Source File"
                        var header: Boolean? = true
                    },
                    object {
                        var data = "Signed File"
                        var header: Boolean? = true
                    },
                ),
            ).apply {
                signResult.forEachIndexed { index, (sourceFile, signedFile) ->
                    add(
                        arrayOf(
                            object {
                                var data = (index + 1).toString()
                            },
                            object {
                                var data = sourceFile
                            },
                            object {
                                var data = signedFile
                            },
                        ),
                    )
                }
            }.toTypedArray(),
        ).write()
        .await()
}

/**
 * Sign APK file.
 *
 * Sign process:
 *
 * zipalign -> apksigner
 *
 * See also: [Build your app from the command line](https://developer.android.com/studio/build/building-cmdline#sign_manually)
 */
suspend fun signApk(
    chalk: Instance,
    sourceFile: String,
    inputs: ActionInputs,
    buildTools: BuildTools,
): String {
    val sourceFilePath = inputs.releaseDir + sourceFile
    val alignedFile = sourceFilePath.dropLast(4) + "-temp.apk"
    val signedFile = sourceFilePath.dropLast(4) + "-signed.apk"

    info(chalk.blue("Aligning APK file."))
    exec(
        buildTools.zipalign,
        arrayOf("-p", "-f", "-v", "4", sourceFilePath, alignedFile),
    )

    info(chalk.blue("Signing APK file."))
    exec(
        buildTools.apksigner,
        mutableListOf(
            "sign",
            "--ks",
            inputs.signingKey,
            "--ks-key-alias",
            inputs.keyAlias,
            "--ks-pass",
            "pass:${inputs.keyStorePassword}",
            "--out",
            signedFile,
        ).apply {
            if (!inputs.keyPassword.isNullOrBlank()) {
                add("--key-pass")
                add("pass:${inputs.keyPassword}")
            }

            add(alignedFile)
        }.toTypedArray(),
    )

    return sourceFile.dropLast(4) + "-signed.apk"
}

/**
 * Sign AAB file.
 *
 * Sign process:
 *
 * jarsigner -> zipalign
 *
 * See also: [zipalign](https://developer.android.com/studio/command-line/zipalign)
 */
suspend fun signAab(
    chalk: Instance,
    sourceFile: String,
    inputs: ActionInputs,
    buildTools: BuildTools,
): String {
    val sourceFilePath = inputs.releaseDir + sourceFile
    val signedFile = sourceFilePath.dropLast(4) + "-temp.aab"
    val alignedFile = sourceFilePath.dropLast(4) + "-signed.aab"

    info(chalk.blue("Signing AAB file."))
    exec(
        buildTools.jarsigner,
        mutableListOf(
            "-keystore",
            inputs.signingKey,
            "-storepass",
            inputs.keyStorePassword,
            "-signedjar",
            signedFile,
        ).apply {
            if (!inputs.keyPassword.isNullOrBlank()) {
                add("-keypass")
                add(inputs.keyPassword!!)
            }

            add(sourceFilePath)
            add(inputs.keyAlias)
        }.toTypedArray(),
    )

    info(chalk.blue("Aligning AAB file."))
    exec(
        buildTools.zipalign,
        arrayOf("-p", "-f", "-v", "4", signedFile, alignedFile),
    )

    return sourceFile.dropLast(4) + "-signed.aab"
}

fun collectInputs(): ActionInputs {
    val releaseDir =
        getInput("releaseDir")
            .run { ifBlank { process.env["ANDROID_RELEASE_DIR"] } }
            .run { if (isNullOrBlank()) "app/build/outputs/apk/release" else this }
            .let { toPosixPath(it) }
            .run {
                if (this.endsWith('/')) {
                    this
                } else {
                    "$this/"
                }
            }

    val signingKeyB64 =
        getInput("signingKey")
            .run { ifBlank { process.env["ANDROID_SIGNING_KEY"] } }
            .run {
                if (isNullOrBlank()) {
                    throw Exception("Cannot find signingKey/ANDROID_SIGNING_KEY. Check your input in workflow.")
                } else {
                    this
                }
            }.run { trim() }

    // Write key to file
    val signingKey = path.join(releaseDir, "key.jks")
    writeFileSync(signingKey, signingKeyB64, "base64")

    val keyAlias =
        getInput("keyAlias")
            .run { ifBlank { process.env["ANDROID_KEY_ALIAS"] } }
            .run {
                if (isNullOrBlank()) {
                    throw Exception("Cannot find keyAlias/ANDROID_KEY_ALIAS. Check your input in workflow.")
                } else {
                    this
                }
            }

    val keyStorePassword =
        getInput("keyStorePassword")
            .run { ifBlank { process.env["ANDROID_KEYSTORE_PASSWORD"] } }
            .run {
                if (isNullOrBlank()) {
                    throw Exception("Cannot find keyStorePassword/ANDROID_KEYSTORE_PASSWORD. Check your input in workflow.")
                } else {
                    this
                }
            }

    val keyPassword =
        getInput("keyPassword")
            .run { ifBlank { process.env["ANDROID_KEY_PASSWORD"] } }

    val buildToolsVersion =
        getInput("buildToolsVersion")
            .run { ifBlank { process.env["ANDROID_BUILD_TOOLS_VERSION"] } }
            .run { if (isNullOrBlank()) "36.0.0" else this }

    // Mask inputs.
    // In general, inputs read from secrets is automatically masked.
    // But in some special cases, inputs are parsed through functions such as `fromJson`.
    // In these cases, inputs are not masked. We need to mask manually.
    for (input in arrayOf(signingKey, keyStorePassword, keyPassword)) {
        input?.let { setSecret(it) }
    }

    return object : ActionInputs {
        override val releaseDir = releaseDir
        override val signingKey = signingKey
        override val keyAlias = keyAlias
        override val keyStorePassword = keyStorePassword
        override val keyPassword = keyPassword
        override val buildToolsVersion = buildToolsVersion
    }
}

interface ActionInputs {
    val releaseDir: String
    val signingKey: String
    val keyAlias: String
    val keyStorePassword: String
    val keyPassword: String?
    val buildToolsVersion: String
}

suspend fun collectBuildTools(inputs: ActionInputs): BuildTools {
    val isWin = process.platform == Platform.win32

    val androidHome =
        process.env["ANDROID_HOME"]
            .run {
                if (isNullOrBlank()) {
                    throw Exception(
                        "Cannot find Android SDK installation. Please setup Android before this action.",
                    )
                } else {
                    this
                }
            }.apply { debug("Found Android SDK: $this") }

    val buildTools =
        path
            .join(androidHome, "build-tools", inputs.buildToolsVersion)
            .run {
                if (!existsSync(
                        this,
                    )
                ) {
                    throw Exception("Cannot find Android build tools. Please setup Android before this action.")
                } else {
                    this
                }
            }.apply { debug("Found Android build-tools: $this") }

    val zipalign =
        path
            .join(buildTools, if (isWin) "zipalign.exe" else "zipalign")
            .run { if (!existsSync(this)) throw Exception("Cannot find zipalign. Please setup Android before this action.") else this }
            .apply { debug("Found zipalign: $this") }

    val apksigner =
        path
            .join(buildTools, if (isWin) "apksigner.bat" else "apksigner")
            .run { if (!existsSync(this)) throw Exception("Cannot find apksigner. Please setup Android before this action.") else this }
            .apply { debug("Found apksigner: $this") }

    val jarsigner =
        which(if (isWin) "jarsigner.exe" else "jarsigner", false)
            .run { if (!existsSync(this)) throw Exception("Cannot find jarsigner. Please setup JDK before this action.") else this }
            .apply { debug("Found jarsigner: $this") }

    return object : BuildTools {
        override val zipalign = zipalign
        override val apksigner = apksigner
        override val jarsigner = jarsigner
    }
}

interface BuildTools {
    val zipalign: String
    val apksigner: String
    val jarsigner: String
}
