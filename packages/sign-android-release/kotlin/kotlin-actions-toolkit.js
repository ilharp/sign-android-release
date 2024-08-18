(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function copy(_this__u8e3s4, startColumn, startLine, endColumn, title, endLine, file) {
    startColumn = startColumn === VOID ? VOID : startColumn;
    startLine = startLine === VOID ? VOID : startLine;
    endColumn = endColumn === VOID ? VOID : endColumn;
    title = title === VOID ? VOID : title;
    endLine = endLine === VOID ? VOID : endLine;
    file = file === VOID ? VOID : file;
    return Object.assign({}, _this__u8e3s4, {startColumn: startColumn, startLine: startLine, endColumn: endColumn, title: title, endLine: endLine, file: file});
  }
  function invoke(_this__u8e3s4, startColumn, startLine, endColumn, title, endLine, file) {
    startColumn = startColumn === VOID ? VOID : startColumn;
    startLine = startLine === VOID ? VOID : startLine;
    endColumn = endColumn === VOID ? VOID : endColumn;
    title = title === VOID ? VOID : title;
    endLine = endLine === VOID ? VOID : endLine;
    file = file === VOID ? VOID : file;
    return {startColumn: startColumn, startLine: startLine, endColumn: endColumn, title: title, endLine: endLine, file: file};
  }
  function copy_0(_this__u8e3s4, required, trimWhitespace) {
    required = required === VOID ? VOID : required;
    trimWhitespace = trimWhitespace === VOID ? VOID : trimWhitespace;
    return Object.assign({}, _this__u8e3s4, {required: required, trimWhitespace: trimWhitespace});
  }
  function invoke_0(_this__u8e3s4, required, trimWhitespace) {
    required = required === VOID ? VOID : required;
    trimWhitespace = trimWhitespace === VOID ? VOID : trimWhitespace;
    return {required: required, trimWhitespace: trimWhitespace};
  }
  function copy_1(_this__u8e3s4, height, width) {
    height = height === VOID ? VOID : height;
    width = width === VOID ? VOID : width;
    return Object.assign({}, _this__u8e3s4, {height: height, width: width});
  }
  function invoke_1(_this__u8e3s4, height, width) {
    height = height === VOID ? VOID : height;
    width = width === VOID ? VOID : width;
    return {height: height, width: width};
  }
  function copy_2(_this__u8e3s4, overwrite) {
    overwrite = overwrite === VOID ? VOID : overwrite;
    return Object.assign({}, _this__u8e3s4, {overwrite: overwrite});
  }
  function invoke_2(_this__u8e3s4, overwrite) {
    overwrite = overwrite === VOID ? VOID : overwrite;
    return {overwrite: overwrite};
  }
  function copy_3(_this__u8e3s4, stdout, stderr, stdline, errline, debug) {
    stdout = stdout === VOID ? VOID : stdout;
    stderr = stderr === VOID ? VOID : stderr;
    stdline = stdline === VOID ? VOID : stdline;
    errline = errline === VOID ? VOID : errline;
    debug = debug === VOID ? VOID : debug;
    return Object.assign({}, _this__u8e3s4, {stdout: stdout, stderr: stderr, stdline: stdline, errline: errline, debug: debug});
  }
  function invoke_3(_this__u8e3s4, stdout, stderr, stdline, errline, debug) {
    stdout = stdout === VOID ? VOID : stdout;
    stderr = stderr === VOID ? VOID : stderr;
    stdline = stdline === VOID ? VOID : stdline;
    errline = errline === VOID ? VOID : errline;
    debug = debug === VOID ? VOID : debug;
    return {stdout: stdout, stderr: stderr, stdline: stdline, errline: errline, debug: debug};
  }
  function copy_4(_this__u8e3s4, silent, ignoreReturnCode, outStream, failOnStdErr, input, delay, env, windowsVerbatimArguments, errStream, cwd, listeners) {
    silent = silent === VOID ? VOID : silent;
    ignoreReturnCode = ignoreReturnCode === VOID ? VOID : ignoreReturnCode;
    outStream = outStream === VOID ? VOID : outStream;
    failOnStdErr = failOnStdErr === VOID ? VOID : failOnStdErr;
    input = input === VOID ? VOID : input;
    delay = delay === VOID ? VOID : delay;
    env = env === VOID ? VOID : env;
    windowsVerbatimArguments = windowsVerbatimArguments === VOID ? VOID : windowsVerbatimArguments;
    errStream = errStream === VOID ? VOID : errStream;
    cwd = cwd === VOID ? VOID : cwd;
    listeners = listeners === VOID ? VOID : listeners;
    return Object.assign({}, _this__u8e3s4, {silent: silent, ignoreReturnCode: ignoreReturnCode, outStream: outStream, failOnStdErr: failOnStdErr, input: input, delay: delay, env: env, windowsVerbatimArguments: windowsVerbatimArguments, errStream: errStream, cwd: cwd, listeners: listeners});
  }
  function invoke_4(_this__u8e3s4, silent, ignoreReturnCode, outStream, failOnStdErr, input, delay, env, windowsVerbatimArguments, errStream, cwd, listeners) {
    silent = silent === VOID ? VOID : silent;
    ignoreReturnCode = ignoreReturnCode === VOID ? VOID : ignoreReturnCode;
    outStream = outStream === VOID ? VOID : outStream;
    failOnStdErr = failOnStdErr === VOID ? VOID : failOnStdErr;
    input = input === VOID ? VOID : input;
    delay = delay === VOID ? VOID : delay;
    env = env === VOID ? VOID : env;
    windowsVerbatimArguments = windowsVerbatimArguments === VOID ? VOID : windowsVerbatimArguments;
    errStream = errStream === VOID ? VOID : errStream;
    cwd = cwd === VOID ? VOID : cwd;
    listeners = listeners === VOID ? VOID : listeners;
    return {silent: silent, ignoreReturnCode: ignoreReturnCode, outStream: outStream, failOnStdErr: failOnStdErr, input: input, delay: delay, env: env, windowsVerbatimArguments: windowsVerbatimArguments, errStream: errStream, cwd: cwd, listeners: listeners};
  }
  function copy_5(_this__u8e3s4, followSymbolicLinks, matchDirectories, omitBrokenSymbolicLinks, implicitDescendants) {
    followSymbolicLinks = followSymbolicLinks === VOID ? VOID : followSymbolicLinks;
    matchDirectories = matchDirectories === VOID ? VOID : matchDirectories;
    omitBrokenSymbolicLinks = omitBrokenSymbolicLinks === VOID ? VOID : omitBrokenSymbolicLinks;
    implicitDescendants = implicitDescendants === VOID ? VOID : implicitDescendants;
    return Object.assign({}, _this__u8e3s4, {followSymbolicLinks: followSymbolicLinks, matchDirectories: matchDirectories, omitBrokenSymbolicLinks: omitBrokenSymbolicLinks, implicitDescendants: implicitDescendants});
  }
  function invoke_5(_this__u8e3s4, followSymbolicLinks, matchDirectories, omitBrokenSymbolicLinks, implicitDescendants) {
    followSymbolicLinks = followSymbolicLinks === VOID ? VOID : followSymbolicLinks;
    matchDirectories = matchDirectories === VOID ? VOID : matchDirectories;
    omitBrokenSymbolicLinks = omitBrokenSymbolicLinks === VOID ? VOID : omitBrokenSymbolicLinks;
    implicitDescendants = implicitDescendants === VOID ? VOID : implicitDescendants;
    return {followSymbolicLinks: followSymbolicLinks, matchDirectories: matchDirectories, omitBrokenSymbolicLinks: omitBrokenSymbolicLinks, implicitDescendants: implicitDescendants};
  }
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js')));

//# sourceMappingURL=kotlin-actions-toolkit.js.map
