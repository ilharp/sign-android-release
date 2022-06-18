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

external var level: Any
external var rgb: (red: Number, green: Number, blue: Number) -> ChalkInstance
external var hex: (color: String) -> ChalkInstance
external var ansi256: (index: Number) -> ChalkInstance
external var bgRgb: (red: Number, green: Number, blue: Number) -> ChalkInstance
external var bgHex: (color: String) -> ChalkInstance
external var bgAnsi256: (index: Number) -> ChalkInstance
external var reset: ChalkInstance /* this */
external var bold: ChalkInstance /* this */
external var dim: ChalkInstance /* this */
external var italic: ChalkInstance /* this */
external var underline: ChalkInstance /* this */
external var overline: ChalkInstance /* this */
external var inverse: ChalkInstance /* this */
external var hidden: ChalkInstance /* this */
external var strikethrough: ChalkInstance /* this */
external var visible: ChalkInstance /* this */
external var black: ChalkInstance /* this */
external var red: ChalkInstance /* this */
external var green: ChalkInstance /* this */
external var yellow: ChalkInstance /* this */
external var blue: ChalkInstance /* this */
external var magenta: ChalkInstance /* this */
external var cyan: ChalkInstance /* this */
external var white: ChalkInstance /* this */
external var gray: ChalkInstance /* this */
external var grey: ChalkInstance /* this */
external var blackBright: ChalkInstance /* this */
external var redBright: ChalkInstance /* this */
external var greenBright: ChalkInstance /* this */
external var yellowBright: ChalkInstance /* this */
external var blueBright: ChalkInstance /* this */
external var magentaBright: ChalkInstance /* this */
external var cyanBright: ChalkInstance /* this */
external var whiteBright: ChalkInstance /* this */
external var bgBlack: ChalkInstance /* this */
external var bgRed: ChalkInstance /* this */
external var bgGreen: ChalkInstance /* this */
external var bgYellow: ChalkInstance /* this */
external var bgBlue: ChalkInstance /* this */
external var bgMagenta: ChalkInstance /* this */
external var bgCyan: ChalkInstance /* this */
external var bgWhite: ChalkInstance /* this */
external var bgGray: ChalkInstance /* this */
external var bgGrey: ChalkInstance /* this */
external var bgBlackBright: ChalkInstance /* this */
external var bgRedBright: ChalkInstance /* this */
external var bgGreenBright: ChalkInstance /* this */
external var bgYellowBright: ChalkInstance /* this */
external var bgBlueBright: ChalkInstance /* this */
external var bgMagentaBright: ChalkInstance /* this */
external var bgCyanBright: ChalkInstance /* this */
external var bgWhiteBright: ChalkInstance /* this */

external var chalkStderr: Any

external var supportsColorStderr: Any
