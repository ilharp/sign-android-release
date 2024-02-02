(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.a1;
  //endregion
  //region block: pre-declaration
  //endregion
  function addEventHandler(target, type, handler) {
    return addEventHandler_0(target, type, handler, undefined);
  }
  function addEventHandler_0(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    return addEventHandler$lambda(target, type, handler, options);
  }
  function addEventHandler$lambda($target, $type, $handler, $options) {
    return function () {
      $target.removeEventListener($type, $handler, $options);
      return Unit_instance;
    };
  }
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js')));

//# sourceMappingURL=kotlin-web.js.map
