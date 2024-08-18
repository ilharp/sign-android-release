(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var constructor = (class IteratorYieldResult {
    static [Symbol.hasInstance](instance) {
        return instance && (typeof instance === 'object') && (instance.done === false)
    }
    }.prototype).constructor;
  var protoOf = kotlin_kotlin.$_$.t2;
  var initMetadataForClass = kotlin_kotlin.$_$.m2;
  var VOID = kotlin_kotlin.$_$.b;
  var iterator = kotlin_kotlin.$_$.w2;
  var CoroutineImpl = kotlin_kotlin.$_$.c2;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var THROW_CCE = kotlin_kotlin.$_$.j3;
  var SequenceScope = kotlin_kotlin.$_$.v2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n1;
  var initMetadataForLambda = kotlin_kotlin.$_$.p2;
  var intercepted = kotlin_kotlin.$_$.p1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var resume = kotlin_kotlin.$_$.e2;
  var resumeWithException = kotlin_kotlin.$_$.d2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AsyncIteratorAdapter, 'AsyncIteratorAdapter', VOID, VOID, VOID, [0]);
  initMetadataForLambda(iteratorFromJsIteratorLike$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  function get_POW() {
    _init_properties_BigInt_kt__agomkx();
    return POW;
  }
  var POW;
  function get_n(_this__u8e3s4) {
    _init_properties_BigInt_kt__agomkx();
    return BigInt(_this__u8e3s4);
  }
  var properties_initialized_BigInt_kt_nhzooh;
  function _init_properties_BigInt_kt__agomkx() {
    if (!properties_initialized_BigInt_kt_nhzooh) {
      properties_initialized_BigInt_kt_nhzooh = true;
      POW = Function('base', 'exponent', 'return base ** exponent');
    }
  }
  function invoke(_this__u8e3s4, p1, p2) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4(p1, p2);
  }
  function iteratorFromAsyncIterable(source) {
    // Inline function 'js.iterable.AsyncIterator.iterator' call
    var this_0 = source[Symbol.asyncIterator]();
    return iteratorFromAsyncIteratorLike(this_0);
  }
  function iteratorFromAsyncIteratorLike(source) {
    return new AsyncIteratorAdapter(source);
  }
  function AsyncIteratorAdapter(source) {
    this.th_1 = source;
    this.uh_1 = null;
  }
  function iteratorFromJsIterable(source) {
    // Inline function 'js.iterable.JsIterator.iterator' call
    var this_0 = source[Symbol.iterator]();
    return iteratorFromJsIteratorLike(this_0);
  }
  function iteratorFromJsIteratorLike(source) {
    return iterator(iteratorFromJsIteratorLike$slambda_0(source, null));
  }
  function iteratorFromJsIteratorLike$slambda($source, resultContinuation) {
    this.di_1 = $source;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(iteratorFromJsIteratorLike$slambda).ii = function ($this$iterator, $completion) {
    var tmp = this.ji($this$iterator, $completion);
    tmp.c4_1 = Unit_instance;
    tmp.d4_1 = null;
    return tmp.i4();
  };
  protoOf(iteratorFromJsIteratorLike$slambda).d5 = function (p1, $completion) {
    return this.ii(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(iteratorFromJsIteratorLike$slambda).i4 = function () {
    var suspendResult = this.c4_1;
    $sm: do
      try {
        var tmp = this.a4_1;
        switch (tmp) {
          case 0:
            this.b4_1 = 5;
            this.a4_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            var tmp_1 = this.di_1.next();
            tmp_0.fi_1 = tmp_1 instanceof constructor ? tmp_1 : null;
            if (this.fi_1 == null) {
              this.a4_1 = 4;
              var tmp_2 = this;
              continue $sm;
            } else {
              this.gi_1 = this.fi_1;
              this.a4_1 = 2;
              continue $sm;
            }

          case 2:
            this.hi_1 = this.gi_1;
            this.a4_1 = 3;
            suspendResult = this.ei_1.z6(this.hi_1.value, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.a4_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.d4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.b4_1 === 5) {
          throw e;
        } else {
          this.a4_1 = this.b4_1;
          this.d4_1 = e;
        }
      }
     while (true);
  };
  protoOf(iteratorFromJsIteratorLike$slambda).ji = function ($this$iterator, completion) {
    var i = new iteratorFromJsIteratorLike$slambda(this.di_1, completion);
    i.ei_1 = $this$iterator;
    return i;
  };
  function iteratorFromJsIteratorLike$slambda_0($source, resultContinuation) {
    var i = new iteratorFromJsIteratorLike$slambda($source, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.ii($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function awaitPromiseLike(promise, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.jb();
    // Inline function 'js.promise.PromiseLike.thenTo' call
    thenToContinuation(promise, cancellable);
    return cancellable.tb();
  }
  function thenToContinuation(promise, continuation) {
    var tmp = resume$ref(continuation);
    promise.then(tmp, resumeWithException$ref(continuation));
  }
  function resume$ref($boundThis) {
    var l = function (p0) {
      resume($boundThis, p0);
      return Unit_instance;
    };
    l.callableName = 'resume';
    return l;
  }
  function resumeWithException$ref($boundThis) {
    var l = function (p0) {
      resumeWithException($boundThis, p0);
      return Unit_instance;
    };
    l.callableName = 'resumeWithException';
    return l;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = awaitPromiseLike;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js')));

//# sourceMappingURL=kotlin-js.js.map
