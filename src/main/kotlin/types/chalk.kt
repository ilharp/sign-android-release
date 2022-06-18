@file:Suppress("PackageDirectoryMismatch")

@file:JsModule("chalk")

package chalk

external interface Options {
    var level: Any?
        get() = definedExternally
        set(value) = definedExternally
}

external var Chalk: Any

external interface ChalkInstance {
    @nativeInvoke
    operator fun invoke(vararg text: Any): String
    var level: Any
    var rgb: (red: Number, green: Number, blue: Number) -> ChalkInstance
    var hex: (color: String) -> ChalkInstance
    var ansi256: (index: Number) -> ChalkInstance
    var bgRgb: (red: Number, green: Number, blue: Number) -> ChalkInstance
    var bgHex: (color: String) -> ChalkInstance
    var bgAnsi256: (index: Number) -> ChalkInstance
    var reset: ChalkInstance /* this */
    var bold: ChalkInstance /* this */
    var dim: ChalkInstance /* this */
    var italic: ChalkInstance /* this */
    var underline: ChalkInstance /* this */
    var overline: ChalkInstance /* this */
    var inverse: ChalkInstance /* this */
    var hidden: ChalkInstance /* this */
    var strikethrough: ChalkInstance /* this */
    var visible: ChalkInstance /* this */
    var black: ChalkInstance /* this */
    var red: ChalkInstance /* this */
    var green: ChalkInstance /* this */
    var yellow: ChalkInstance /* this */
    var blue: ChalkInstance /* this */
    var magenta: ChalkInstance /* this */
    var cyan: ChalkInstance /* this */
    var white: ChalkInstance /* this */
    var gray: ChalkInstance /* this */
    var grey: ChalkInstance /* this */
    var blackBright: ChalkInstance /* this */
    var redBright: ChalkInstance /* this */
    var greenBright: ChalkInstance /* this */
    var yellowBright: ChalkInstance /* this */
    var blueBright: ChalkInstance /* this */
    var magentaBright: ChalkInstance /* this */
    var cyanBright: ChalkInstance /* this */
    var whiteBright: ChalkInstance /* this */
    var bgBlack: ChalkInstance /* this */
    var bgRed: ChalkInstance /* this */
    var bgGreen: ChalkInstance /* this */
    var bgYellow: ChalkInstance /* this */
    var bgBlue: ChalkInstance /* this */
    var bgMagenta: ChalkInstance /* this */
    var bgCyan: ChalkInstance /* this */
    var bgWhite: ChalkInstance /* this */
    var bgGray: ChalkInstance /* this */
    var bgGrey: ChalkInstance /* this */
    var bgBlackBright: ChalkInstance /* this */
    var bgRedBright: ChalkInstance /* this */
    var bgGreenBright: ChalkInstance /* this */
    var bgYellowBright: ChalkInstance /* this */
    var bgBlueBright: ChalkInstance /* this */
    var bgMagentaBright: ChalkInstance /* this */
    var bgCyanBright: ChalkInstance /* this */
    var bgWhiteBright: ChalkInstance /* this */
}

@JsName("default")
external var chalk: ChalkInstance

external var chalkStderr: Any

external var supportsColorStderr: Any
