@file:Suppress(
    "PackageDirectoryMismatch"
)

@file:JsModule("@actions/core")

package actions.core

import kotlin.js.Promise

external interface InputOptions {
    var required: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var trimWhitespace: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external enum class ExitCode {
    Success, // = 0
    Failure // = 1
}

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

external fun exportVariable(name: String, param_val: Any)

external fun setSecret(secret: String)

external fun addPath(inputPath: String)

external fun getInput(name: String, options: InputOptions = definedExternally): String

external fun getMultilineInput(name: String, options: InputOptions = definedExternally): Array<String>

external fun getBooleanInput(name: String, options: InputOptions = definedExternally): Boolean

external fun setOutput(name: String, value: Any)

external fun setCommandEcho(enabled: Boolean)

external fun setFailed(message: String)

external fun setFailed(message: Error)

external fun isDebug(): Boolean

external fun debug(message: String)

external fun error(message: String, properties: AnnotationProperties = definedExternally)

external fun error(message: String)

external fun error(message: Error, properties: AnnotationProperties = definedExternally)

external fun error(message: Error)

external fun warning(message: String, properties: AnnotationProperties = definedExternally)

external fun warning(message: String)

external fun warning(message: Error, properties: AnnotationProperties = definedExternally)

external fun warning(message: Error)

external fun notice(message: String, properties: AnnotationProperties = definedExternally)

external fun notice(message: String)

external fun notice(message: Error, properties: AnnotationProperties = definedExternally)

external fun notice(message: Error)

external fun info(message: String)

external fun startGroup(name: String)

external fun endGroup()

external fun <T> group(name: String, fn: () -> Promise<T>): Promise<T>

external fun saveState(name: String, value: Any)

external fun getState(name: String): String

external fun getIDToken(aud: String = definedExternally): Promise<String>

external interface CommandProperties {
    @nativeGetter
    operator fun get(key: String): Any?

    @nativeSetter
    operator fun set(key: String, value: Any)
}

external fun issueCommand(command: String, properties: CommandProperties, message: Any)

external fun issue(name: String, message: String = definedExternally)

external fun issueCommand(command: String, message: Any)

open external class OidcClient {
    companion object {
        var createHttpClient: Any
        var getRequestToken: Any
        var getIDTokenUrl: Any
        var getCall: Any
        fun getIDToken(audience: String = definedExternally): Promise<String>
    }
}

external fun toPosixPath(pth: String): String

external fun toWin32Path(pth: String): String

external fun toPlatformPath(pth: String): String

external var SUMMARY_ENV_VAR: Any

external var SUMMARY_DOCS_URL: Any

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

external interface SummaryImageOptions {
    var width: String?
        get() = definedExternally
        set(value) = definedExternally
    var height: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface SummaryWriteOptions {
    var overwrite: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

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
    open fun addTable(rows: Array<Array<SummaryTableCell>>): Summary
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

external fun toCommandValue(input: Any): String

external fun toCommandProperties(annotationProperties: AnnotationProperties): CommandProperties
