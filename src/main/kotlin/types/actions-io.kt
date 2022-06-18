@file:Suppress(
    "PackageDirectoryMismatch"
)

package types.actions.io

import kotlin.js.Promise


@JsModule("@actions/io")
@JsNonModule
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

@JsModule("@actions/io")
@JsNonModule
external interface MoveOptions {
    var force: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

@JsModule("@actions/io")
@JsNonModule
external fun cp(source: String, dest: String, options: CopyOptions = definedExternally): Promise<Unit>

@JsModule("@actions/io")
@JsNonModule
external fun mv(source: String, dest: String, options: MoveOptions = definedExternally): Promise<Unit>

@JsModule("@actions/io")
@JsNonModule
external fun rmRF(inputPath: String): Promise<Unit>

@JsModule("@actions/io")
@JsNonModule
external fun mkdirP(fsPath: String): Promise<Unit>

@JsModule("@actions/io")
@JsNonModule
external fun which(tool: String, check: Boolean = definedExternally): Promise<String>

@JsModule("@actions/io")
@JsNonModule
external fun findInPath(tool: String): Promise<Array<String>>

external var chmod: Any

external var IS_WINDOWS: Boolean

@JsModule("@actions/io")
@JsNonModule
external fun exists(fsPath: String): Promise<Boolean>

@JsModule("@actions/io")
@JsNonModule
external fun isDirectory(fsPath: String, useStat: Boolean = definedExternally): Promise<Boolean>

@JsModule("@actions/io")
@JsNonModule
external fun isRooted(p: String): Boolean

@JsModule("@actions/io")
@JsNonModule
external fun tryGetExecutablePath(filePath: String, extensions: Array<String>): Promise<String>

@JsModule("@actions/io")
@JsNonModule
external fun getCmdPath(): String
