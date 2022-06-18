@file:Suppress(
    "PackageDirectoryMismatch"
)

package types.actions.core

import kotlin.js.Promise

@JsModule("@actions/core")
@JsNonModule
external interface InputOptions {
    var required: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var trimWhitespace: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

@JsModule("@actions/core")
@JsNonModule
external enum class ExitCode {
    Success /* = 0 */,
    Failure /* = 1 */
}

@JsModule("@actions/core")
@JsNonModule
external interface AnnotationProperties {
    var title: String?
        get() = definedExternally
        set(value) = definedExternally
    var file: String?
        get() = definedExternally
        set(value) = definedExternally
    var startLine: Number?
        get() = definedExternally
        set(value) = definedExternally
    var endLine: Number?
        get() = definedExternally
        set(value) = definedExternally
    var startColumn: Number?
        get() = definedExternally
        set(value) = definedExternally
    var endColumn: Number?
        get() = definedExternally
        set(value) = definedExternally
}

@JsModule("@actions/core")
@JsNonModule
external fun exportVariable(name: String, param_val: Any)

@JsModule("@actions/core")
@JsNonModule
external fun setSecret(secret: String)

@JsModule("@actions/core")
@JsNonModule
external fun addPath(inputPath: String)

@JsModule("@actions/core")
@JsNonModule
external fun getInput(name: String, options: InputOptions = definedExternally): String

@JsModule("@actions/core")
@JsNonModule
external fun getMultilineInput(name: String, options: InputOptions = definedExternally): Array<String>

@JsModule("@actions/core")
@JsNonModule
external fun getBooleanInput(name: String, options: InputOptions = definedExternally): Boolean

@JsModule("@actions/core")
@JsNonModule
external fun setOutput(name: String, value: Any)

@JsModule("@actions/core")
@JsNonModule
external fun setCommandEcho(enabled: Boolean)

@JsModule("@actions/core")
@JsNonModule
external fun setFailed(message: String)

@JsModule("@actions/core")
@JsNonModule
external fun setFailed(message: Error)

@JsModule("@actions/core")
@JsNonModule
external fun isDebug(): Boolean

@JsModule("@actions/core")
@JsNonModule
external fun debug(message: String)

@JsModule("@actions/core")
@JsNonModule
external fun error(message: String, properties: AnnotationProperties = definedExternally)

@JsModule("@actions/core")
@JsNonModule
external fun error(message: String)

@JsModule("@actions/core")
@JsNonModule
external fun error(message: Error, properties: AnnotationProperties = definedExternally)

@JsModule("@actions/core")
@JsNonModule
external fun error(message: Error)

@JsModule("@actions/core")
@JsNonModule
external fun warning(message: String, properties: AnnotationProperties = definedExternally)

@JsModule("@actions/core")
@JsNonModule
external fun warning(message: String)

@JsModule("@actions/core")
@JsNonModule
external fun warning(message: Error, properties: AnnotationProperties = definedExternally)

@JsModule("@actions/core")
@JsNonModule
external fun warning(message: Error)

@JsModule("@actions/core")
@JsNonModule
external fun notice(message: String, properties: AnnotationProperties = definedExternally)

@JsModule("@actions/core")
@JsNonModule
external fun notice(message: String)

@JsModule("@actions/core")
@JsNonModule
external fun notice(message: Error, properties: AnnotationProperties = definedExternally)

@JsModule("@actions/core")
@JsNonModule
external fun notice(message: Error)

@JsModule("@actions/core")
@JsNonModule
external fun info(message: String)

@JsModule("@actions/core")
@JsNonModule
external fun startGroup(name: String)

@JsModule("@actions/core")
@JsNonModule
external fun endGroup()

@JsModule("@actions/core")
@JsNonModule
external fun <T> group(name: String, fn: () -> Promise<T>): Promise<T>

@JsModule("@actions/core")
@JsNonModule
external fun saveState(name: String, value: Any)

@JsModule("@actions/core")
@JsNonModule
external fun getState(name: String): String

@JsModule("@actions/core")
@JsNonModule
external fun getIDToken(aud: String = definedExternally): Promise<String>

@JsModule("@actions/core")
@JsNonModule
external interface CommandProperties {
    @nativeGetter
    operator fun get(key: String): Any?

    @nativeSetter
    operator fun set(key: String, value: Any)
}

@JsModule("@actions/core")
@JsNonModule
external fun issueCommand(command: String, properties: CommandProperties, message: Any)

@JsModule("@actions/core")
@JsNonModule
external fun issue(name: String, message: String = definedExternally)

@JsModule("@actions/core")
@JsNonModule
external fun issueCommand(command: String, message: Any)

@JsModule("@actions/core")
@JsNonModule
open external class OidcClient {
    companion object {
        var createHttpClient: Any
        var getRequestToken: Any
        var getIDTokenUrl: Any
        var getCall: Any
        fun getIDToken(audience: String = definedExternally): Promise<String>
    }
}

@JsModule("@actions/core")
@JsNonModule
external fun toPosixPath(pth: String): String

@JsModule("@actions/core")
@JsNonModule
external fun toWin32Path(pth: String): String

@JsModule("@actions/core")
@JsNonModule
external fun toPlatformPath(pth: String): String

external var SUMMARY_ENV_VAR: Any

external var SUMMARY_DOCS_URL: Any

typealias SummaryTableRow = Array<dynamic /* SummaryTableCell | String */>

@JsModule("@actions/core")
@JsNonModule
external interface SummaryTableCell {
    var data: String
    var header: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var colspan: String?
        get() = definedExternally
        set(value) = definedExternally
    var rowspan: String?
        get() = definedExternally
        set(value) = definedExternally
}

@JsModule("@actions/core")
@JsNonModule
external interface SummaryImageOptions {
    var width: String?
        get() = definedExternally
        set(value) = definedExternally
    var height: String?
        get() = definedExternally
        set(value) = definedExternally
}

@JsModule("@actions/core")
@JsNonModule
external interface SummaryWriteOptions {
    var overwrite: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

@JsModule("@actions/core")
@JsNonModule
open external class Summary {
    open var _buffer: Any
    open var _filePath: Any
    open var filePath: Any
    open var wrap: Any
    open fun write(options: SummaryWriteOptions = definedExternally): Promise<Summary>
    open fun clear(): Promise<Summary>
    open fun stringify(): String
    open fun isEmptyBuffer(): Boolean
    open fun emptyBuffer(): Summary
    open fun addRaw(text: String, addEOL: Boolean = definedExternally): Summary
    open fun addEOL(): Summary
    open fun addCodeBlock(code: String, lang: String = definedExternally): Summary
    open fun addList(items: Array<String>, ordered: Boolean = definedExternally): Summary
    open fun addTable(rows: Array<SummaryTableRow>): Summary
    open fun addDetails(label: String, content: String): Summary
    open fun addImage(src: String, alt: String, options: SummaryImageOptions = definedExternally): Summary
    open fun addHeading(text: String, level: Number = definedExternally): Summary
    open fun addHeading(text: String): Summary
    open fun addHeading(text: String, level: String = definedExternally): Summary
    open fun addSeparator(): Summary
    open fun addBreak(): Summary
    open fun addQuote(text: String, cite: String = definedExternally): Summary
    open fun addLink(text: String, href: String): Summary
}

external var markdownSummary: Summary

external var summary: Summary

@JsModule("@actions/core")
@JsNonModule
external fun toCommandValue(input: Any): String

@JsModule("@actions/core")
@JsNonModule
external fun toCommandProperties(annotationProperties: AnnotationProperties): CommandProperties
