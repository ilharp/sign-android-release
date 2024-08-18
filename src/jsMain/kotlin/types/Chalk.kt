@file:Suppress("PackageDirectoryMismatch")

@file:JsModule("chalk")

package chalk

external interface Options {
    var level: Any?
        get() = definedExternally
        set(value) = definedExternally
}

external class Instance(
    options: Options?,
) {
    @Suppress("DEPRECATION")
    @nativeInvoke
    operator fun invoke(vararg text: Any): String

    var level: Any
    var rgb: (red: Number, green: Number, blue: Number) -> Instance
    var hex: (color: String) -> Instance
    var ansi256: (index: Number) -> Instance
    var bgRgb: (red: Number, green: Number, blue: Number) -> Instance
    var bgHex: (color: String) -> Instance
    var bgAnsi256: (index: Number) -> Instance
    var reset: Instance
    var bold: Instance
    var dim: Instance
    var italic: Instance
    var underline: Instance
    var overline: Instance
    var inverse: Instance
    var hidden: Instance
    var strikethrough: Instance
    var visible: Instance
    var black: Instance
    var red: Instance
    var green: Instance
    var yellow: Instance
    var blue: Instance
    var magenta: Instance
    var cyan: Instance
    var white: Instance
    var gray: Instance
    var grey: Instance
    var blackBright: Instance
    var redBright: Instance
    var greenBright: Instance
    var yellowBright: Instance
    var blueBright: Instance
    var magentaBright: Instance
    var cyanBright: Instance
    var whiteBright: Instance
    var bgBlack: Instance
    var bgRed: Instance
    var bgGreen: Instance
    var bgYellow: Instance
    var bgBlue: Instance
    var bgMagenta: Instance
    var bgCyan: Instance
    var bgWhite: Instance
    var bgGray: Instance
    var bgGrey: Instance
    var bgBlackBright: Instance
    var bgRedBright: Instance
    var bgGreenBright: Instance
    var bgYellowBright: Instance
    var bgBlueBright: Instance
    var bgMagentaBright: Instance
    var bgCyanBright: Instance
    var bgWhiteBright: Instance
}

external var level: Any
external var rgb: (red: Number, green: Number, blue: Number) -> Instance
external var hex: (color: String) -> Instance
external var ansi256: (index: Number) -> Instance
external var bgRgb: (red: Number, green: Number, blue: Number) -> Instance
external var bgHex: (color: String) -> Instance
external var bgAnsi256: (index: Number) -> Instance
external var reset: Instance
external var bold: Instance
external var dim: Instance
external var italic: Instance
external var underline: Instance
external var overline: Instance
external var inverse: Instance
external var hidden: Instance
external var strikethrough: Instance
external var visible: Instance
external var black: Instance
external var red: Instance
external var green: Instance
external var yellow: Instance
external var blue: Instance
external var magenta: Instance
external var cyan: Instance
external var white: Instance
external var gray: Instance
external var grey: Instance
external var blackBright: Instance
external var redBright: Instance
external var greenBright: Instance
external var yellowBright: Instance
external var blueBright: Instance
external var magentaBright: Instance
external var cyanBright: Instance
external var whiteBright: Instance
external var bgBlack: Instance
external var bgRed: Instance
external var bgGreen: Instance
external var bgYellow: Instance
external var bgBlue: Instance
external var bgMagenta: Instance
external var bgCyan: Instance
external var bgWhite: Instance
external var bgGray: Instance
external var bgGrey: Instance
external var bgBlackBright: Instance
external var bgRedBright: Instance
external var bgGreenBright: Instance
external var bgYellowBright: Instance
external var bgBlueBright: Instance
external var bgMagentaBright: Instance
external var bgCyanBright: Instance
external var bgWhiteBright: Instance

external var chalkStderr: Any

external var supportsColorStderr: Any
