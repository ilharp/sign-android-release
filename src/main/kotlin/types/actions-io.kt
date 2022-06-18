@file:Suppress(
    "PackageDirectoryMismatch"
)

@file:JsModule("@actions/io")

package actions.io

import kotlin.js.Promise


external interface CopyOptions {
    var recursive: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var force: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var copySourceDirectory: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface MoveOptions {
    var force: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external fun cp(source: String, dest: String, options: CopyOptions = definedExternally): Promise<Unit>

external fun mv(source: String, dest: String, options: MoveOptions = definedExternally): Promise<Unit>

external fun rmRF(inputPath: String): Promise<Unit>

external fun mkdirP(fsPath: String): Promise<Unit>

external fun which(tool: String, check: Boolean = definedExternally): Promise<String>

external fun findInPath(tool: String): Promise<Array<String>>

external var chmod: Any

external var IS_WINDOWS: Boolean

external fun exists(fsPath: String): Promise<Boolean>

external fun isDirectory(fsPath: String, useStat: Boolean = definedExternally): Promise<Boolean>

external fun isRooted(p: String): Boolean

external fun tryGetExecutablePath(filePath: String, extensions: Array<String>): Promise<String>

external fun getCmdPath(): String
