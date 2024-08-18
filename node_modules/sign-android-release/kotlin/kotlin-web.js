(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var sequenceOf = kotlin_kotlin.$_$.x2;
  //endregion
  //region block: pre-declaration
  //endregion
  function copy(_this__u8e3s4, signal) {
    signal = signal === VOID ? VOID : signal;
    return Object.assign({}, _this__u8e3s4, {signal: signal});
  }
  function invoke(_this__u8e3s4, signal) {
    signal = signal === VOID ? VOID : signal;
    return {signal: signal};
  }
  function copy_0(_this__u8e3s4, endings, type) {
    endings = endings === VOID ? VOID : endings;
    type = type === VOID ? VOID : type;
    return Object.assign({}, _this__u8e3s4, {endings: endings, type: type});
  }
  function invoke_0(_this__u8e3s4, endings, type) {
    endings = endings === VOID ? VOID : endings;
    type = type === VOID ? VOID : type;
    return {endings: endings, type: type};
  }
  function copy_1(_this__u8e3s4, capture, signal, once, signal_0, passive) {
    capture = capture === VOID ? VOID : capture;
    signal = signal === VOID ? VOID : signal;
    once = once === VOID ? VOID : once;
    signal_0 = signal_0 === VOID ? VOID : signal_0;
    passive = passive === VOID ? VOID : passive;
    return Object.assign({}, _this__u8e3s4, {capture: capture, signal: signal_0, once: once, signal: signal_0, passive: passive});
  }
  function invoke_1(_this__u8e3s4, capture, signal, once, signal_0, passive) {
    capture = capture === VOID ? VOID : capture;
    signal = signal === VOID ? VOID : signal;
    once = once === VOID ? VOID : once;
    signal_0 = signal_0 === VOID ? VOID : signal_0;
    passive = passive === VOID ? VOID : passive;
    return {capture: capture, signal: signal_0, once: once, signal: signal_0, passive: passive};
  }
  function copy_2(_this__u8e3s4, bubbles, cancelable, composed) {
    bubbles = bubbles === VOID ? VOID : bubbles;
    cancelable = cancelable === VOID ? VOID : cancelable;
    composed = composed === VOID ? VOID : composed;
    return Object.assign({}, _this__u8e3s4, {bubbles: bubbles, cancelable: cancelable, composed: composed});
  }
  function invoke_2(_this__u8e3s4, bubbles, cancelable, composed) {
    bubbles = bubbles === VOID ? VOID : bubbles;
    cancelable = cancelable === VOID ? VOID : cancelable;
    composed = composed === VOID ? VOID : composed;
    return {bubbles: bubbles, cancelable: cancelable, composed: composed};
  }
  function copy_3(_this__u8e3s4, capture) {
    capture = capture === VOID ? VOID : capture;
    return Object.assign({}, _this__u8e3s4, {capture: capture});
  }
  function invoke_3(_this__u8e3s4, capture) {
    capture = capture === VOID ? VOID : capture;
    return {capture: capture};
  }
  function addEventHandler(_this__u8e3s4, type, handler) {
    return addEventHandler_0(_this__u8e3s4, type, undefined, handler);
  }
  function addEventHandler_0(_this__u8e3s4, type, options, handler) {
    _this__u8e3s4.addEventListener(type, handler, options);
    return addEventHandler$lambda(_this__u8e3s4, type, handler, options);
  }
  function addEventHandler$lambda($this_addEventHandler, $type, $handler, $options) {
    return function () {
      $this_addEventHandler.removeEventListener($type, $handler, $options);
      return Unit_instance;
    };
  }
  function copy_4(_this__u8e3s4, mode) {
    mode = mode === VOID ? VOID : mode;
    return Object.assign({}, _this__u8e3s4, {mode: mode});
  }
  function invoke_4(_this__u8e3s4, mode) {
    mode = mode === VOID ? VOID : mode;
    return {mode: mode};
  }
  function copy_5(_this__u8e3s4, signal, signal_0, preventCancel, preventClose, preventAbort) {
    signal = signal === VOID ? VOID : signal;
    signal_0 = signal_0 === VOID ? VOID : signal_0;
    preventCancel = preventCancel === VOID ? VOID : preventCancel;
    preventClose = preventClose === VOID ? VOID : preventClose;
    preventAbort = preventAbort === VOID ? VOID : preventAbort;
    return Object.assign({}, _this__u8e3s4, {signal: signal_0, signal: signal_0, preventCancel: preventCancel, preventClose: preventClose, preventAbort: preventAbort});
  }
  function invoke_5(_this__u8e3s4, signal, signal_0, preventCancel, preventClose, preventAbort) {
    signal = signal === VOID ? VOID : signal;
    signal_0 = signal_0 === VOID ? VOID : signal_0;
    preventCancel = preventCancel === VOID ? VOID : preventCancel;
    preventClose = preventClose === VOID ? VOID : preventClose;
    preventAbort = preventAbort === VOID ? VOID : preventAbort;
    return {signal: signal_0, signal: signal_0, preventCancel: preventCancel, preventClose: preventClose, preventAbort: preventAbort};
  }
  function safeAny(signal1, signal2) {
    if (signal1 == null)
      return signal2;
    if (signal1.aborted)
      return signal1;
    if (signal2.aborted)
      return signal2;
    var controller = new AbortController();
    // Inline function 'kotlin.collections.mutableListOf' call
    var handlers = ArrayList_init_$Create$();
    // Inline function 'web.events.EventHandler' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var abortHandler = safeAny$lambda(handlers, controller);
    // Inline function 'kotlin.sequences.mapTo' call
    var tmp0_iterator = sequenceOf([signal1, signal2]).f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      // Inline function 'web.abort.internal.safeAny.<anonymous>' call
      // Inline function 'web.events.EventTypes.abort' call
      var tmp$ret$5 = addEventHandler(item, 'abort', abortHandler);
      handlers.k1(tmp$ret$5);
    }
    return controller.signal;
  }
  function safeAny$lambda($handlers, $controller) {
    return function (event) {
      var tmp0_iterator = $handlers.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'web.abort.internal.safeAny.<anonymous>.<anonymous>' call
        element();
      }
      $controller.abort(event.currentTarget.reason);
      return Unit_instance;
    };
  }
  function patchAbortOptions(options, controller) {
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'web.abort.internal.patchAbortOptions.<anonymous>' call
    this_0.signal = safeAny(options == null ? null : options.signal, controller.signal);
    var abortOptions = this_0;
    var tmp = Object;
    // Inline function 'js.objects.jso' call
    var tmp$ret$3 = {};
    return tmp.assign(tmp$ret$3, options, abortOptions);
  }
  function awaitPromiseLike$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_instance;
    };
  }
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js')));

//# sourceMappingURL=kotlin-web.js.map
