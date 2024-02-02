(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var constructor = (class IteratorYieldResult {
    static [Symbol.hasInstance](instance) {
        return instance && (typeof instance === 'object') && (instance.done === false)
    }
    }.prototype).constructor;
  var protoOf = kotlin_kotlin.$_$.p2;
  var classMeta = kotlin_kotlin.$_$.g2;
  var setMetadataFor = kotlin_kotlin.$_$.q2;
  var VOID = kotlin_kotlin.$_$.b;
  var iterator = kotlin_kotlin.$_$.t2;
  var CoroutineImpl = kotlin_kotlin.$_$.c2;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var THROW_CCE = kotlin_kotlin.$_$.f3;
  var SequenceScope = kotlin_kotlin.$_$.s2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AsyncIteratorAdapter, 'AsyncIteratorAdapter', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(iteratorFor$slambda, 'iteratorFor$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  //endregion
  function iteratorFor(source) {
    // Inline function 'js.iterable.AsyncIterator.iterator' call
    var this_0 = source[Symbol.asyncIterator]();
    return iteratorFor_0(this_0);
  }
  function iteratorFor_0(source) {
    return new AsyncIteratorAdapter(source);
  }
  function AsyncIteratorAdapter(source) {
    this.ji_1 = source;
    this.ki_1 = null;
  }
  function iteratorFor_1(source) {
    // Inline function 'js.iterable.JsIterator.iterator' call
    var this_0 = source[Symbol.iterator]();
    return iteratorFor_2(this_0);
  }
  function iteratorFor_2(source) {
    return iterator(iteratorFor$slambda_0(source, null));
  }
  function iteratorFor$slambda($source, resultContinuation) {
    this.ti_1 = $source;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(iteratorFor$slambda).yi = function ($this$iterator, $completion) {
    var tmp = this.zi($this$iterator, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  };
  protoOf(iteratorFor$slambda).s6 = function (p1, $completion) {
    return this.yi(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(iteratorFor$slambda).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 5;
            this.v5_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            var tmp_1 = this.ti_1.next();
            tmp_0.vi_1 = tmp_1 instanceof constructor ? tmp_1 : null;
            if (this.vi_1 == null) {
              this.v5_1 = 4;
              var tmp_2 = this;
              continue $sm;
            } else {
              this.wi_1 = this.vi_1;
              this.v5_1 = 2;
              continue $sm;
            }

          case 2:
            this.xi_1 = this.wi_1;
            this.v5_1 = 3;
            suspendResult = this.ui_1.k7(this.xi_1.value, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.v5_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.y5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w5_1 === 5) {
          throw e;
        } else {
          this.v5_1 = this.w5_1;
          this.y5_1 = e;
        }
      }
     while (true);
  };
  protoOf(iteratorFor$slambda).zi = function ($this$iterator, completion) {
    var i = new iteratorFor$slambda(this.ti_1, completion);
    i.ui_1 = $this$iterator;
    return i;
  };
  function iteratorFor$slambda_0($source, resultContinuation) {
    var i = new iteratorFor$slambda($source, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.yi($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js')));

//# sourceMappingURL=kotlin-js.js.map
