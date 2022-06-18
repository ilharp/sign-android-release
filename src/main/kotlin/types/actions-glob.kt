@file:Suppress(
    "PackageDirectoryMismatch"
)

@file:JsModule("@actions/glob")

package actions.glob

import kotlin.js.Promise

external fun create(patterns: String, options: GlobOptions = definedExternally): Promise<Globber>

external fun hashFiles(
    patterns: String,
    options: HashFileOptions = definedExternally,
    verbose: Boolean = definedExternally
): Promise<String>

external interface GlobOptions {
    var followSymbolicLinks: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var implicitDescendants: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var matchDirectories: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var omitBrokenSymbolicLinks: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface HashFileOptions {
    var followSymbolicLinks: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface Globber {
    fun getSearchPaths(): Array<String>
    fun glob(): Promise<Array<String>>
}

open external class DefaultGlobber : Globber {
    open var options: Any
    open var patterns: Any
    open var searchPaths: Any
    override fun getSearchPaths(): Array<String>
    override fun glob(): Promise<Array<String>>

    companion object {
        fun create(patterns: String, options: GlobOptions = definedExternally): Promise<DefaultGlobber>
        var stat: Any
    }
}
