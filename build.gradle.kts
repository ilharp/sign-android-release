plugins {
    alias(libs.plugins.jetbrains.kotlin.multiplatform)

    alias(libs.plugins.spotless)
}

group = "com.ilharper"
version = "0.1.0"

kotlin {
    js(IR) {
        nodejs {}
        useCommonJs()
        binaries.executable()
    }

    sourceSets {
        val jsMain by getting {
            dependencies {
                implementation(libs.kotlin.node)
                implementation(libs.kotlinx.coroutines.core.js)
                implementation(libs.kotlin.actions.toolkit)

                implementation(npm("@actions/core", "^1"))
                implementation(npm("@actions/exec", "^1"))
                implementation(npm("@actions/io", "^1"))
                implementation(npm("@actions/glob", "^0.3"))
                implementation(npm("chalk", "^4"))
            }
        }
    }
}

spotless {
    format("misc") {
        target("**/*.md", "**/*.editorconfig", "**/*.gitignore", "**/*.gitattributes")
        trimTrailingWhitespace()
        indentWithSpaces()
        endWithNewline()
    }

    kotlin {
        target("**/*.kt")
        ktlint("1.3.1")
        trimTrailingWhitespace()
        indentWithSpaces()
        endWithNewline()
    }

    kotlinGradle {
        target("**/*.kts")
        ktlint("1.3.1")
        trimTrailingWhitespace()
        indentWithSpaces()
        endWithNewline()
    }
}
