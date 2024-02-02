(function (_, $module$_actions_core_fx0i1v, node_process_process_dcpv5o, node_path_path_1155cy, $module$node_fs_4svwsv, $module$chalk, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_wrappers_kotlin_actions_toolkit) {
  'use strict';
  //region block: imports
  var getInput = $module$_actions_core_fx0i1v.getInput;
  var toPosixPath = $module$_actions_core_fx0i1v.toPosixPath;
  var writeFileSync = $module$node_fs_4svwsv.writeFileSync;
  var setSecret = $module$_actions_core_fx0i1v.setSecret;
  var error = $module$_actions_core_fx0i1v.error;
  var setFailed = $module$_actions_core_fx0i1v.setFailed;
  var Instance = $module$chalk.Instance;
  var info = $module$_actions_core_fx0i1v.info;
  var debug = $module$_actions_core_fx0i1v.debug;
  var setOutput = $module$_actions_core_fx0i1v.setOutput;
  var exportVariable = $module$_actions_core_fx0i1v.exportVariable;
  var summary = $module$_actions_core_fx0i1v.summary;
  var existsSync = $module$node_fs_4svwsv.existsSync;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var isBlank = kotlin_kotlin.$_$.x2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t;
  var endsWith = kotlin_kotlin.$_$.v2;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.k;
  var THROW_CCE = kotlin_kotlin.$_$.f3;
  var isCharSequence = kotlin_kotlin.$_$.m2;
  var trim = kotlin_kotlin.$_$.y2;
  var toString = kotlin_kotlin.$_$.r2;
  var protoOf = kotlin_kotlin.$_$.p2;
  var defineProp = kotlin_kotlin.$_$.h2;
  var classMeta = kotlin_kotlin.$_$.g2;
  var setMetadataFor = kotlin_kotlin.$_$.q2;
  var VOID = kotlin_kotlin.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.c2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var isInterface = kotlin_kotlin.$_$.n2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n1;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var asPromise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var endsWith_0 = kotlin_kotlin.$_$.w2;
  var dropLast = kotlin_kotlin.$_$.u2;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_actions_toolkit.$_$.c;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g1;
  var any = kotlin_kotlin.$_$.e1;
  var joinToString = kotlin_kotlin.$_$.i1;
  var checkIndexOverflow = kotlin_kotlin.$_$.f1;
  var group = kotlin_org_jetbrains_kotlin_wrappers_kotlin_actions_toolkit.$_$.a;
  var Pair = kotlin_kotlin.$_$.d3;
  var singleOrNull = kotlin_kotlin.$_$.l1;
  var mutableListOf = kotlin_kotlin.$_$.j1;
  var copyToArray = kotlin_kotlin.$_$.h1;
  var exec = kotlin_org_jetbrains_kotlin_wrappers_kotlin_actions_toolkit.$_$.b;
  var ensureNotNull = kotlin_kotlin.$_$.j3;
  var equals = kotlin_kotlin.$_$.i2;
  var which = kotlin_org_jetbrains_kotlin_wrappers_kotlin_actions_toolkit.$_$.d;
  var get_EmptyContinuation = kotlin_kotlin.$_$.q1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(mainIntl$chalk$1, VOID, classMeta);
  setMetadataFor(mainIntl$lambda$slambda, 'mainIntl$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(mainIntl$lambda$slambda_1, 'mainIntl$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(mainIntl$8$1$1, VOID, classMeta);
  setMetadataFor(mainIntl$8$1$2, VOID, classMeta);
  setMetadataFor(mainIntl$8$1$3, VOID, classMeta);
  setMetadataFor(mainIntl$5, VOID, classMeta);
  setMetadataFor(mainIntl$6, VOID, classMeta);
  setMetadataFor(mainIntl$7, VOID, classMeta);
  setMetadataFor(collectInputs$2, VOID, classMeta);
  setMetadataFor(collectBuildTools$1, VOID, classMeta);
  setMetadataFor($mainCOROUTINE$0, '$mainCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($mainIntlCOROUTINE$1, '$mainIntlCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($signApkCOROUTINE$2, '$signApkCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($signAabCOROUTINE$3, '$signAabCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor($collectBuildToolsCOROUTINE$4, '$collectBuildToolsCOROUTINE$4', classMeta, CoroutineImpl);
  //endregion
  function main($completion) {
    var tmp = new $mainCOROUTINE$0($completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  }
  function mainIntl($completion) {
    var tmp = new $mainIntlCOROUTINE$1($completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  }
  function signApk(chalk, sourceFile, inputs, buildTools, $completion) {
    var tmp = new $signApkCOROUTINE$2(chalk, sourceFile, inputs, buildTools, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  }
  function signAab(chalk, sourceFile, inputs, buildTools, $completion) {
    var tmp = new $signAabCOROUTINE$3(chalk, sourceFile, inputs, buildTools, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  }
  function collectInputs() {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_0 = getInput('releaseDir');
    var tmp;
    if (isBlank(this_0)) {
      // Inline function 'collectInputs.<anonymous>.<anonymous>' call
      tmp = node_process_process_dcpv5o.env['ANDROID_RELEASE_DIR'];
    } else {
      tmp = this_0;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    var $this$run = tmp;
    var tmp_0;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if ($this$run == null ? true : isBlank($this$run)) {
      tmp_0 = 'app/build/outputs/apk/release';
    } else {
      tmp_0 = $this$run;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    var it = tmp_0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    var $this$run_0 = toPosixPath(it);
    var releaseDir = endsWith($this$run_0, _Char___init__impl__6a9atx(47)) ? $this$run_0 : $this$run_0 + '/';
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_1 = getInput('signingKey');
    var tmp_1;
    if (isBlank(this_1)) {
      // Inline function 'collectInputs.<anonymous>.<anonymous>' call
      tmp_1 = node_process_process_dcpv5o.env['ANDROID_SIGNING_KEY'];
    } else {
      tmp_1 = this_1;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    var $this$run_1 = tmp_1;
    var tmp_2;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if ($this$run_1 == null ? true : isBlank($this$run_1)) {
      throw Exception_init_$Create$('Cannot find signingKey/ANDROID_SIGNING_KEY. Check your input in workflow.');
    } else {
      tmp_2 = $this$run_1;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.trim' call
    var this_2 = tmp_2;
    var signingKeyB64 = toString(trim(isCharSequence(this_2) ? this_2 : THROW_CCE()));
    var signingKey = node_path_path_1155cy.join(releaseDir, 'key.jks');
    writeFileSync(signingKey, signingKeyB64, 'base64');
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_3 = getInput('keyAlias');
    var tmp_3;
    if (isBlank(this_3)) {
      // Inline function 'collectInputs.<anonymous>.<anonymous>' call
      tmp_3 = node_process_process_dcpv5o.env['ANDROID_KEY_ALIAS'];
    } else {
      tmp_3 = this_3;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    var $this$run_2 = tmp_3;
    var tmp_4;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if ($this$run_2 == null ? true : isBlank($this$run_2)) {
      throw Exception_init_$Create$('Cannot find keyAlias/ANDROID_KEY_ALIAS. Check your input in workflow.');
    } else {
      tmp_4 = $this$run_2;
    }
    var keyAlias = tmp_4;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_4 = getInput('keyStorePassword');
    var tmp_5;
    if (isBlank(this_4)) {
      // Inline function 'collectInputs.<anonymous>.<anonymous>' call
      tmp_5 = node_process_process_dcpv5o.env['ANDROID_KEYSTORE_PASSWORD'];
    } else {
      tmp_5 = this_4;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    var $this$run_3 = tmp_5;
    var tmp_6;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if ($this$run_3 == null ? true : isBlank($this$run_3)) {
      throw Exception_init_$Create$('Cannot find keyStorePassword/ANDROID_KEYSTORE_PASSWORD. Check your input in workflow.');
    } else {
      tmp_6 = $this$run_3;
    }
    var keyStorePassword = tmp_6;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_5 = getInput('keyPassword');
    var tmp_7;
    if (isBlank(this_5)) {
      // Inline function 'collectInputs.<anonymous>.<anonymous>' call
      tmp_7 = node_process_process_dcpv5o.env['ANDROID_KEY_PASSWORD'];
    } else {
      tmp_7 = this_5;
    }
    var keyPassword = tmp_7;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_6 = getInput('buildToolsVersion');
    var tmp_8;
    if (isBlank(this_6)) {
      // Inline function 'collectInputs.<anonymous>.<anonymous>' call
      tmp_8 = node_process_process_dcpv5o.env['ANDROID_BUILD_TOOLS_VERSION'];
    } else {
      tmp_8 = this_6;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    var $this$run_4 = tmp_8;
    var tmp_9;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if ($this$run_4 == null ? true : isBlank($this$run_4)) {
      tmp_9 = '33.0.0';
    } else {
      tmp_9 = $this$run_4;
    }
    var buildToolsVersion = tmp_9;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var indexedObject = [signingKey, keyStorePassword, keyPassword];
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var input = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (input == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        setSecret(input);
      }
    }
    return new collectInputs$2(releaseDir, signingKey, keyAlias, keyStorePassword, keyPassword, buildToolsVersion);
  }
  function collectBuildTools(inputs, $completion) {
    var tmp = new $collectBuildToolsCOROUTINE$4(inputs, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  }
  function mainIntl$chalk$1() {
    this.xn_1 = 1;
  }
  protoOf(mainIntl$chalk$1).yn = function (_set____db54di) {
    this.xn_1 = _set____db54di;
  };
  protoOf(mainIntl$chalk$1).zn = function () {
    return this.xn_1;
  };
  function mainIntl$lambda(it) {
    return '- ' + it;
  }
  function mainIntl$lambda$slambda($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation) {
    this.io_1 = $signedFile;
    this.jo_1 = $chalk;
    this.ko_1 = $sourceFile;
    this.lo_1 = $inputs;
    this.mo_1 = $buildTools;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mainIntl$lambda$slambda).oo = function ($this$async, $completion) {
    var tmp = this.po($this$async, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  };
  protoOf(mainIntl$lambda$slambda).s6 = function (p1, $completion) {
    return this.oo((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(mainIntl$lambda$slambda).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 2;
            this.v5_1 = 1;
            suspendResult = signApk(this.jo_1, this.ko_1, this.lo_1, this.mo_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.io_1._v = ARGUMENT;
            return Unit_instance;
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
  protoOf(mainIntl$lambda$slambda).po = function ($this$async, completion) {
    var i = new mainIntl$lambda$slambda(this.io_1, this.jo_1, this.ko_1, this.lo_1, this.mo_1, completion);
    i.no_1 = $this$async;
    return i;
  };
  function mainIntl$lambda$slambda_0($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation) {
    var i = new mainIntl$lambda$slambda($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.oo($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function mainIntl$lambda$slambda_1($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation) {
    this.yo_1 = $signedFile;
    this.zo_1 = $chalk;
    this.ap_1 = $sourceFile;
    this.bp_1 = $inputs;
    this.cp_1 = $buildTools;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mainIntl$lambda$slambda_1).oo = function ($this$async, $completion) {
    var tmp = this.po($this$async, $completion);
    tmp.x5_1 = Unit_instance;
    tmp.y5_1 = null;
    return tmp.g6();
  };
  protoOf(mainIntl$lambda$slambda_1).s6 = function (p1, $completion) {
    return this.oo((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(mainIntl$lambda$slambda_1).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 2;
            this.v5_1 = 1;
            suspendResult = signAab(this.zo_1, this.ap_1, this.bp_1, this.cp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.yo_1._v = ARGUMENT;
            return Unit_instance;
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
  protoOf(mainIntl$lambda$slambda_1).po = function ($this$async, completion) {
    var i = new mainIntl$lambda$slambda_1(this.yo_1, this.zo_1, this.ap_1, this.bp_1, this.cp_1, completion);
    i.dp_1 = $this$async;
    return i;
  };
  function mainIntl$lambda$slambda_2($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation) {
    var i = new mainIntl$lambda$slambda_1($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.oo($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function mainIntl$lambda_0($sourceFile, $signedFile, $chalk, $inputs, $buildTools) {
    return function () {
      var tmp;
      if (endsWith_0($sourceFile, '.apk')) {
        // Inline function 'js.promise.asPromise' call
        var tmp_0 = GlobalScope_instance;
        var this_0 = async(tmp_0, VOID, VOID, mainIntl$lambda$slambda_0($signedFile, $chalk, $sourceFile, $inputs, $buildTools, null));
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = asPromise(this_0);
      } else {
        // Inline function 'js.promise.asPromise' call
        var tmp_1 = GlobalScope_instance;
        var this_1 = async(tmp_1, VOID, VOID, mainIntl$lambda$slambda_2($signedFile, $chalk, $sourceFile, $inputs, $buildTools, null));
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = asPromise(this_1);
      }
      return tmp;
    };
  }
  function mainIntl$8$1$1($index) {
    this.ep_1 = ($index + 1 | 0).toString();
  }
  function mainIntl$8$1$2($sourceFile) {
    this.fp_1 = $sourceFile;
  }
  function mainIntl$8$1$3($signedFile) {
    this.gp_1 = $signedFile;
  }
  function mainIntl$5() {
    this.hp_1 = 'Index';
    this.ip_1 = true;
  }
  function mainIntl$6() {
    this.jp_1 = 'Source File';
    this.kp_1 = true;
  }
  function mainIntl$7() {
    this.lp_1 = 'Signed File';
    this.mp_1 = true;
  }
  function collectInputs$2($releaseDir, $signingKey, $keyAlias, $keyStorePassword, $keyPassword, $buildToolsVersion) {
    this.np_1 = $releaseDir;
    this.op_1 = $signingKey;
    this.pp_1 = $keyAlias;
    this.qp_1 = $keyStorePassword;
    this.rp_1 = $keyPassword;
    this.sp_1 = $buildToolsVersion;
  }
  protoOf(collectInputs$2).tp = function () {
    return this.np_1;
  };
  protoOf(collectInputs$2).up = function () {
    return this.op_1;
  };
  protoOf(collectInputs$2).vp = function () {
    return this.pp_1;
  };
  protoOf(collectInputs$2).wp = function () {
    return this.qp_1;
  };
  protoOf(collectInputs$2).xp = function () {
    return this.rp_1;
  };
  protoOf(collectInputs$2).yp = function () {
    return this.sp_1;
  };
  function collectBuildTools$1($zipalign, $apksigner, $jarsigner) {
    this.zp_1 = $zipalign;
    this.aq_1 = $apksigner;
    this.bq_1 = $jarsigner;
  }
  protoOf(collectBuildTools$1).cq = function () {
    return this.zp_1;
  };
  protoOf(collectBuildTools$1).dq = function () {
    return this.aq_1;
  };
  protoOf(collectBuildTools$1).eq = function () {
    return this.bq_1;
  };
  function $mainCOROUTINE$0(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($mainCOROUTINE$0).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 3;
            this.w5_1 = 2;
            this.v5_1 = 1;
            suspendResult = mainIntl(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w5_1 = 3;
            this.v5_1 = 4;
            continue $sm;
          case 2:
            this.w5_1 = 3;
            var e = this.y5_1;
            var it = toString(e);
            error(it);
            setFailed(it);
            this.v5_1 = 4;
            continue $sm;
          case 3:
            throw this.y5_1;
          case 4:
            this.w5_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.w5_1 === 3) {
          throw e_0;
        } else {
          this.v5_1 = this.w5_1;
          this.y5_1 = e_0;
        }
      }
     while (true);
  };
  function $mainIntlCOROUTINE$1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($mainIntlCOROUTINE$1).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 8;
            var tmp_0 = this;
            tmp_0.hl_1 = new Instance(new mainIntl$chalk$1());
            this.il_1 = collectInputs();
            this.v5_1 = 1;
            suspendResult = collectBuildTools(this.il_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.jl_1 = suspendResult;
            info(this.hl_1.blue(['Signing file(s) in ' + dropLast(this.il_1.tp(), 1) + ' with key ' + this.il_1.vp() + '...\n']));
            var tmp_1 = this;
            var this_0 = this.il_1.tp() + '**/*.apk\n' + this.il_1.tp() + '**/*.aab';
            debug('Glob patterns:\n' + this_0);
            tmp_1.kl_1 = this_0;
            this.v5_1 = 2;
            suspendResult = create(this.kl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ll_1 = suspendResult;
            this.ml_1 = this.ll_1.glob();
            this.v5_1 = 3;
            var this_1 = this.ml_1;
            suspendResult = await_0(this_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.nl_1 = suspendResult;
            var tmp_2 = this;
            var this_2 = this.nl_1;
            var destination = ArrayList_init_$Create$(this.nl_1.length);
            var inductionVariable = 0;
            var last = this_2.length;
            while (inductionVariable < last) {
              var item = this_2[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              destination.j(node_path_path_1155cy.relative(node_process_process_dcpv5o.cwd(), item));
            }

            tmp_2.ol_1 = destination;
            var tmp_3 = this;
            var this_3 = this.ol_1;
            var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this.ol_1, 10));
            var tmp0_iterator = this_3.m();
            while (tmp0_iterator.t()) {
              var item_0 = tmp0_iterator.u();
              destination_0.j(node_path_path_1155cy.relative(this.il_1.tp(), item_0));
            }

            tmp_3.pl_1 = destination_0;
            var tmp_4 = this;
            var this_4 = this.pl_1;
            var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this.pl_1, 10));
            var tmp0_iterator_0 = this_4.m();
            while (tmp0_iterator_0.t()) {
              var item_1 = tmp0_iterator_0.u();
              destination_1.j(toPosixPath(item_1));
            }

            tmp_4.ql_1 = destination_1;
            var $this$apply = this.ql_1;
            if (!any($this$apply))
              throw Exception_init_$Create$('Cannot find any apk/aab file.');
            this.rl_1 = this.ql_1;
            var tmp_5 = this;
            tmp_5.sl_1 = this.rl_1.l();
            var tmp_6 = this.hl_1.blue(['Now sign ' + this.sl_1 + ' file(s):']);
            info(tmp_6 + '\n' + joinToString(this.rl_1, '\n', VOID, VOID, VOID, VOID, mainIntl$lambda) + '\n');
            var tmp_7 = this;
            tmp_7.tl_1 = this.rl_1;
            var tmp_8 = this;
            tmp_8.ul_1 = this.tl_1;
            var tmp_9 = this;
            tmp_9.vl_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this.tl_1, 10));
            this.wl_1 = 0;
            this.xl_1 = this.ul_1.m();
            this.v5_1 = 4;
            continue $sm;
          case 4:
            if (!this.xl_1.t()) {
              this.v5_1 = 6;
              continue $sm;
            }

            this.yl_1 = this.xl_1.u();
            var tmp_10 = this;
            var tmp1 = this.wl_1;
            this.wl_1 = tmp1 + 1 | 0;
            tmp_10.zl_1 = checkIndexOverflow(tmp1);
            var tmp_11 = this;
            tmp_11.am_1 = this.yl_1;
            this.bm_1 = {_v: ''};
            this.v5_1 = 5;
            var tmp_12 = '[' + (this.zl_1 + 1 | 0) + '/' + this.sl_1 + '] ' + this.am_1;
            suspendResult = group(tmp_12, mainIntl$lambda_0(this.am_1, this.bm_1, this.hl_1, this.il_1, this.jl_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.cm_1 = new Pair(this.am_1, this.bm_1._v);
            this.vl_1.j(this.cm_1);
            this.v5_1 = 4;
            continue $sm;
          case 6:
            this.dm_1 = this.vl_1;
            info(this.hl_1.green(['Successfully signed ' + this.sl_1 + ' file(s).\n']));
            var this_5 = this.dm_1;
            var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_5, 10));
            var tmp0_iterator_1 = this_5.m();
            while (tmp0_iterator_1.t()) {
              var item_2 = tmp0_iterator_1.u();
              destination_2.j(item_2.p8_1);
            }

            var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_2, 10));
            var tmp0_iterator_2 = destination_2.m();
            while (tmp0_iterator_2.t()) {
              var item_3 = tmp0_iterator_2.u();
              destination_3.j(node_path_path_1155cy.join(node_process_process_dcpv5o.cwd(), this.il_1.tp(), item_3));
            }

            var tmp0_safe_receiver = singleOrNull(destination_3);
            if (tmp0_safe_receiver == null)
              null;
            else {
              setOutput('signedFile', tmp0_safe_receiver);
              exportVariable('ANDROID_SIGNED_FILE', tmp0_safe_receiver);
            }

            var it = joinToString(destination_3, ':');
            setOutput('signedFiles', it);
            exportVariable('ANDROID_SIGNED_FILES', it);
            var it_0 = destination_3.l();
            setOutput('signedFilesCount', it_0);
            exportVariable('ANDROID_SIGNED_FILES_COUNT', it_0);
            var tmp_13 = this;
            var tmp_14 = summary.addHeading('Signed Release Files', 3).addRaw('Successfully signed ' + this.sl_1 + ' file(s).\n\n');
            var tmp_15 = new mainIntl$5();
            var tmp_16 = new mainIntl$6();
            var this_6 = [tmp_15, tmp_16, new mainIntl$7()];
            var this_7 = mutableListOf([this_6]);
            var index = 0;
            var tmp0_iterator_3 = this.dm_1.m();
            while (tmp0_iterator_3.t()) {
              var item_4 = tmp0_iterator_3.u();
              var tmp1_0 = index;
              index = tmp1_0 + 1 | 0;
              var index_0 = checkIndexOverflow(tmp1_0);
              var sourceFile = item_4.q8();
              var signedFile = item_4.r8();
              var tmp_17 = new mainIntl$8$1$1(index_0);
              var tmp_18 = new mainIntl$8$1$2(sourceFile);
              var this_8 = [tmp_17, tmp_18, new mainIntl$8$1$3(signedFile)];
              this_7.j(this_8);
            }

            tmp_13.em_1 = tmp_14.addTable(copyToArray(this_7)).write();
            this.v5_1 = 7;
            var this_9 = this.em_1;
            suspendResult = await_0(this_9, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.y5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w5_1 === 8) {
          throw e;
        } else {
          this.v5_1 = this.w5_1;
          this.y5_1 = e;
        }
      }
     while (true);
  };
  function $signApkCOROUTINE$2(chalk, sourceFile, inputs, buildTools, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.nm_1 = chalk;
    this.om_1 = sourceFile;
    this.pm_1 = inputs;
    this.qm_1 = buildTools;
  }
  protoOf($signApkCOROUTINE$2).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 3;
            this.rm_1 = this.pm_1.tp() + this.om_1;
            this.sm_1 = dropLast(this.rm_1, 4) + '-temp.apk';
            this.tm_1 = dropLast(this.rm_1, 4) + '-signed.apk';
            info(this.nm_1.blue(['Aligning APK file.']));
            this.v5_1 = 1;
            var tmp_0 = this.qm_1.cq();
            var this_0 = ['-p', '-f', '-v', '4', this.rm_1, this.sm_1];
            suspendResult = exec(tmp_0, this_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            info(this.nm_1.blue(['Signing APK file.']));
            this.v5_1 = 2;
            var tmp_1 = this.qm_1.dq();
            var this_1 = mutableListOf(['sign', '--ks', this.pm_1.up(), '--ks-key-alias', this.pm_1.vp(), '--ks-pass', 'pass:' + this.pm_1.wp(), '--out', this.tm_1]);
            var this_2 = this.pm_1.xp();
            if (!(this_2 == null ? true : isBlank(this_2))) {
              this_1.j('--key-pass');
              this_1.j('pass:' + this.pm_1.xp());
            }

            this_1.j(this.sm_1);
            suspendResult = exec(tmp_1, copyToArray(this_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return dropLast(this.om_1, 4) + '-signed.apk';
          case 3:
            throw this.y5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w5_1 === 3) {
          throw e;
        } else {
          this.v5_1 = this.w5_1;
          this.y5_1 = e;
        }
      }
     while (true);
  };
  function $signAabCOROUTINE$3(chalk, sourceFile, inputs, buildTools, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cn_1 = chalk;
    this.dn_1 = sourceFile;
    this.en_1 = inputs;
    this.fn_1 = buildTools;
  }
  protoOf($signAabCOROUTINE$3).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 3;
            this.gn_1 = this.en_1.tp() + this.dn_1;
            this.hn_1 = dropLast(this.gn_1, 4) + '-temp.aab';
            this.in_1 = dropLast(this.gn_1, 4) + '-signed.aab';
            info(this.cn_1.blue(['Signing AAB file.']));
            this.v5_1 = 1;
            var tmp_0 = this.fn_1.eq();
            var this_0 = mutableListOf(['-keystore', this.en_1.up(), '-storepass', this.en_1.wp(), '-signedjar', this.hn_1]);
            var this_1 = this.en_1.xp();
            if (!(this_1 == null ? true : isBlank(this_1))) {
              this_0.j('-keypass');
              this_0.j(ensureNotNull(this.en_1.xp()));
            }

            this_0.j(this.gn_1);
            this_0.j(this.en_1.vp());
            suspendResult = exec(tmp_0, copyToArray(this_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            info(this.cn_1.blue(['Aligning AAB file.']));
            this.v5_1 = 2;
            var tmp_1 = this.fn_1.cq();
            var this_2 = ['-p', '-f', '-v', '4', this.hn_1, this.in_1];
            suspendResult = exec(tmp_1, this_2, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return dropLast(this.dn_1, 4) + '-signed.aab';
          case 3:
            throw this.y5_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w5_1 === 3) {
          throw e;
        } else {
          this.v5_1 = this.w5_1;
          this.y5_1 = e;
        }
      }
     while (true);
  };
  function $collectBuildToolsCOROUTINE$4(inputs, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rn_1 = inputs;
  }
  protoOf($collectBuildToolsCOROUTINE$4).g6 = function () {
    var suspendResult = this.x5_1;
    $sm: do
      try {
        var tmp = this.v5_1;
        switch (tmp) {
          case 0:
            this.w5_1 = 2;
            var tmp_0 = this;
            var tmp_1 = node_process_process_dcpv5o.platform;
            0;
            tmp_0.sn_1 = equals(tmp_1, 'win32');
            var tmp_2 = this;
            var $this$run = node_process_process_dcpv5o.env['ANDROID_HOME'];
            var tmp_3;
            if ($this$run == null ? true : isBlank($this$run)) {
              throw Exception_init_$Create$('Cannot find Android SDK installation. Please setup Android before this action.');
            } else {
              tmp_3 = $this$run;
            }

            var this_0 = tmp_3;
            debug('Found Android SDK: ' + this_0);
            tmp_2.tn_1 = this_0;
            var tmp_4 = this;
            var $this$run_0 = node_path_path_1155cy.join(this.tn_1, 'build-tools', this.rn_1.yp());
            var tmp_5;
            if (!existsSync($this$run_0)) {
              throw Exception_init_$Create$('Cannot find Android build tools. Please setup Android before this action.');
            } else {
              tmp_5 = $this$run_0;
            }

            var this_1 = tmp_5;
            debug('Found Android build-tools: ' + this_1);
            tmp_4.un_1 = this_1;
            var tmp_6 = this;
            var $this$run_1 = node_path_path_1155cy.join(this.un_1, this.sn_1 ? 'zipalign.exe' : 'zipalign');
            var tmp_7;
            if (!existsSync($this$run_1)) {
              throw Exception_init_$Create$('Cannot find zipalign. Please setup Android before this action.');
            } else {
              tmp_7 = $this$run_1;
            }

            var this_2 = tmp_7;
            debug('Found zipalign: ' + this_2);
            tmp_6.vn_1 = this_2;
            var tmp_8 = this;
            var $this$run_2 = node_path_path_1155cy.join(this.un_1, this.sn_1 ? 'apksigner.bat' : 'apksigner');
            var tmp_9;
            if (!existsSync($this$run_2)) {
              throw Exception_init_$Create$('Cannot find apksigner. Please setup Android before this action.');
            } else {
              tmp_9 = $this$run_2;
            }

            var this_3 = tmp_9;
            debug('Found apksigner: ' + this_3);
            tmp_8.wn_1 = this_3;
            this.v5_1 = 1;
            suspendResult = which(this.sn_1 ? 'jarsigner.exe' : 'jarsigner', false, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var $this$run_3 = suspendResult;
            var tmp_10;
            if (!existsSync($this$run_3)) {
              throw Exception_init_$Create$('Cannot find jarsigner. Please setup JDK before this action.');
            } else {
              tmp_10 = $this$run_3;
            }

            var this_4 = tmp_10;
            debug('Found jarsigner: ' + this_4);
            var jarsigner = this_4;
            return new collectBuildTools$1(this.vn_1, this.wn_1, jarsigner);
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
  //region block: post-declaration
  defineProp(protoOf(mainIntl$chalk$1), 'level', function () {
    return this.zn();
  }, function (value) {
    this.yn(value);
  });
  //endregion
  main(get_EmptyContinuation());
  return _;
}(module.exports, require('@actions/core'), require('node:process'), require('node:path'), require('node:fs'), require('chalk'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-actions-toolkit.js')));

//# sourceMappingURL=sign-android-release.js.map
