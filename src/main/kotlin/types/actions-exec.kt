@file:Suppress(
    "PackageDirectoryMismatch"
)

package types.actions.exec

import org.khronos.webgl.*
import org.w3c.dom.*
import org.w3c.dom.events.*
import org.w3c.dom.parsing.*
import org.w3c.dom.svg.*
import org.w3c.dom.url.*
import org.w3c.fetch.*
import org.w3c.files.*
import org.w3c.notifications.*
import org.w3c.performance.*
import org.w3c.workers.*
import org.w3c.xhr.*
import kotlin.js.*


@JsModule("@actions/exec")
@JsNonModule
external fun exec(
    commandLine: String,
    args: Array<String> = definedExternally,
    options: ExecOptions = definedExternally
): Promise<Number>

@JsModule("@actions/exec")
@JsNonModule
external fun getExecOutput(
    commandLine: String,
    args: Array<String> = definedExternally,
    options: ExecOptions = definedExternally
): Promise<ExecOutput>

@JsModule("@actions/exec")
@JsNonModule
external interface `T$0` {
    @nativeGetter
    operator fun get(key: String): String?

    @nativeSetter
    operator fun set(key: String, value: String)
}

@JsModule("@actions/exec")
@JsNonModule
external interface ExecOptions {
    var cwd: String?
        get() = definedExternally
        set(value) = definedExternally
    var env: `T$0`?
        get() = definedExternally
        set(value) = definedExternally
    var silent: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var outStream: Any?
        get() = definedExternally
        set(value) = definedExternally
    var errStream: Any?
        get() = definedExternally
        set(value) = definedExternally
    var windowsVerbatimArguments: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var failOnStdErr: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var ignoreReturnCode: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var delay: Number?
        get() = definedExternally
        set(value) = definedExternally
    var input: Any?
        get() = definedExternally
        set(value) = definedExternally
    var listeners: ExecListeners?
        get() = definedExternally
        set(value) = definedExternally
}

@JsModule("@actions/exec")
@JsNonModule
external interface ExecOutput {
    var exitCode: Number
    var stdout: String
    var stderr: String
}

@JsModule("@actions/exec")
@JsNonModule
external interface ExecListeners {
    var stdout: ((data: Buffer) -> Unit)?
        get() = definedExternally
        set(value) = definedExternally
    var stderr: ((data: Buffer) -> Unit)?
        get() = definedExternally
        set(value) = definedExternally
    var stdline: ((data: String) -> Unit)?
        get() = definedExternally
        set(value) = definedExternally
    var errline: ((data: String) -> Unit)?
        get() = definedExternally
        set(value) = definedExternally
    var debug: ((data: String) -> Unit)?
        get() = definedExternally
        set(value) = definedExternally
}

@JsModule("@actions/exec")
@JsNonModule
external fun argStringToArray(argString: String): Array<String>
