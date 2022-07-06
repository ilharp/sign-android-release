@file:Suppress("PackageDirectoryMismatch")

@file:JsModule("chalk")

package chalk

external interface Options {
    var level: Any?
        get() = definedExternally
        set(value) = definedExternally
}

external class Chalk(options: Options?) {
    @Suppress("DEPRECATION")
    @nativeInvoke
    operator fun invoke(vararg text: Any): String
    var level: Any
    var rgb: (red: Number, green: Number, blue: Number) -> Chalk
    var hex: (color: String) -> Chalk
    var ansi256: (index: Number) -> Chalk
    var bgRgb: (red: Number, green: Number, blue: Number) -> Chalk
    var bgHex: (color: String) -> Chalk
    var bgAnsi256: (index: Number) -> Chalk
    var reset: Chalk
    var bold: Chalk
    var dim: Chalk
    var italic: Chalk
    var underline: Chalk
    var overline: Chalk
    var inverse: Chalk
    var hidden: Chalk
    var strikethrough: Chalk
    var visible: Chalk
    var black: Chalk
    var red: Chalk
    var green: Chalk
    var yellow: Chalk
    var blue: Chalk
    var magenta: Chalk
    var cyan: Chalk
    var white: Chalk
    var gray: Chalk
    var grey: Chalk
    var blackBright: Chalk
    var redBright: Chalk
    var greenBright: Chalk
    var yellowBright: Chalk
    var blueBright: Chalk
    var magentaBright: Chalk
    var cyanBright: Chalk
    var whiteBright: Chalk
    var bgBlack: Chalk
    var bgRed: Chalk
    var bgGreen: Chalk
    var bgYellow: Chalk
    var bgBlue: Chalk
    var bgMagenta: Chalk
    var bgCyan: Chalk
    var bgWhite: Chalk
    var bgGray: Chalk
    var bgGrey: Chalk
    var bgBlackBright: Chalk
    var bgRedBright: Chalk
    var bgGreenBright: Chalk
    var bgYellowBright: Chalk
    var bgBlueBright: Chalk
    var bgMagentaBright: Chalk
    var bgCyanBright: Chalk
    var bgWhiteBright: Chalk
}

external var level: Any
external var rgb: (red: Number, green: Number, blue: Number) -> Chalk
external var hex: (color: String) -> Chalk
external var ansi256: (index: Number) -> Chalk
external var bgRgb: (red: Number, green: Number, blue: Number) -> Chalk
external var bgHex: (color: String) -> Chalk
external var bgAnsi256: (index: Number) -> Chalk
external var reset: Chalk
external var bold: Chalk
external var dim: Chalk
external var italic: Chalk
external var underline: Chalk
external var overline: Chalk
external var inverse: Chalk
external var hidden: Chalk
external var strikethrough: Chalk
external var visible: Chalk
external var black: Chalk
external var red: Chalk
external var green: Chalk
external var yellow: Chalk
external var blue: Chalk
external var magenta: Chalk
external var cyan: Chalk
external var white: Chalk
external var gray: Chalk
external var grey: Chalk
external var blackBright: Chalk
external var redBright: Chalk
external var greenBright: Chalk
external var yellowBright: Chalk
external var blueBright: Chalk
external var magentaBright: Chalk
external var cyanBright: Chalk
external var whiteBright: Chalk
external var bgBlack: Chalk
external var bgRed: Chalk
external var bgGreen: Chalk
external var bgYellow: Chalk
external var bgBlue: Chalk
external var bgMagenta: Chalk
external var bgCyan: Chalk
external var bgWhite: Chalk
external var bgGray: Chalk
external var bgGrey: Chalk
external var bgBlackBright: Chalk
external var bgRedBright: Chalk
external var bgGreenBright: Chalk
external var bgYellowBright: Chalk
external var bgBlueBright: Chalk
external var bgMagentaBright: Chalk
external var bgCyanBright: Chalk
external var bgWhiteBright: Chalk

external var chalkStderr: Any

external var supportsColorStderr: Any
