(function (_, $module$_actions_core_fx0i1v, $module$_actions_exec_fwz1pt, $module$_actions_glob_fwy0ei, $module$_actions_io_79d2l8, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var group = $module$_actions_core_fx0i1v.group;
  var exec = $module$_actions_exec_fwz1pt.exec;
  var create = $module$_actions_glob_fwy0ei.create;
  var which = $module$_actions_io_79d2l8.which;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var CoroutineImpl = kotlin_kotlin.$_$.c2;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n1;
  var protoOf = kotlin_kotlin.$_$.p2;
  var classMeta = kotlin_kotlin.$_$.g2;
  var setMetadataFor = kotlin_kotlin.$_$.q2;
  //endregion
  //region block: pre-declaration
  setMetadataFor($groupCOROUTINE$0, '$groupCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($execCOROUTINE$1, '$execCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($createCOROUTINE$2, '$createCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($whichCOROUTINE$3, '$whichCOROUTINE$3', classMeta, CoroutineImpl);
  //endregion
  function group_0(name, fn, $completion) {
    var tmp = new $groupCOROUTINE$0(name, fn, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  }
  function $groupCOROUTINE$0(name, fn, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ij_1 = name;
    this.jj_1 = fn;
  }
  protoOf($groupCOROUTINE$0).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 2;
            var tmp_0 = this;
            tmp_0.kj_1 = group(this.ij_1, this.jj_1);
            this.v5_1 = 1;
            var this_0 = this.kj_1;
            suspendResult = await_0(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.y5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w5_1 === 2) {
          throw e;
        } else {
          this.v5_1 = this.w5_1;
          this.y5_1 = e;
        }
      }
     while (true);
  };
  function exec_0(commandLine, args, $completion) {
    var tmp = new $execCOROUTINE$1(commandLine, args, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  }
  function $execCOROUTINE$1(commandLine, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tj_1 = commandLine;
    this.uj_1 = args;
  }
  protoOf($execCOROUTINE$1).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 2;
            var tmp_0 = this;
            tmp_0.vj_1 = exec(this.tj_1, this.uj_1);
            this.v5_1 = 1;
            var this_0 = this.vj_1;
            suspendResult = await_0(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.y5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w5_1 === 2) {
          throw e;
        } else {
          this.v5_1 = this.w5_1;
          this.y5_1 = e;
        }
      }
     while (true);
  };
  function create_0(patterns, $completion) {
    var tmp = new $createCOROUTINE$2(patterns, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  }
  function $createCOROUTINE$2(patterns, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ek_1 = patterns;
  }
  protoOf($createCOROUTINE$2).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 2;
            var tmp_0 = this;
            tmp_0.fk_1 = create(this.ek_1);
            this.v5_1 = 1;
            var this_0 = this.fk_1;
            suspendResult = await_0(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.y5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w5_1 === 2) {
          throw e;
        } else {
          this.v5_1 = this.w5_1;
          this.y5_1 = e;
        }
      }
     while (true);
  };
  function which_0(tool, check, $completion) {
    var tmp = new $whichCOROUTINE$3(tool, check, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  }
  function $whichCOROUTINE$3(tool, check, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ok_1 = tool;
    this.pk_1 = check;
  }
  protoOf($whichCOROUTINE$3).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 2;
            var tmp_0 = this;
            tmp_0.qk_1 = which(this.ok_1, this.pk_1);
            this.v5_1 = 1;
            var this_0 = this.qk_1;
            suspendResult = await_0(this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.y5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w5_1 === 2) {
          throw e;
        } else {
          this.v5_1 = this.w5_1;
          this.y5_1 = e;
        }
      }
     while (true);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = group_0;
  _.$_$.b = exec_0;
  _.$_$.c = create_0;
  _.$_$.d = which_0;
  //endregion
  return _;
}(module.exports, require('@actions/core'), require('@actions/exec'), require('@actions/glob'), require('@actions/io'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js')));

//# sourceMappingURL=kotlin-actions-toolkit.js.map
