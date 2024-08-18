(function (_, $module$_actions_core_fx0i1v, node_process_process_dcpv5o, node_path_path_1155cy, $module$node_fs_4svwsv, $module$chalk, $module$_actions_glob_fwy0ei, $module$_actions_exec_fwz1pt, $module$_actions_io_79d2l8, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_wrappers_kotlin_js) {
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
  var create = $module$_actions_glob_fwy0ei.create;
  var group = $module$_actions_core_fx0i1v.group;
  var setOutput = $module$_actions_core_fx0i1v.setOutput;
  var exportVariable = $module$_actions_core_fx0i1v.exportVariable;
  var summary = $module$_actions_core_fx0i1v.summary;
  var exec = $module$_actions_exec_fwz1pt.exec;
  var existsSync = $module$node_fs_4svwsv.existsSync;
  var which = $module$_actions_io_79d2l8.which;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var isBlank = kotlin_kotlin.$_$.b3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t;
  var endsWith = kotlin_kotlin.$_$.z2;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.l;
  var THROW_CCE = kotlin_kotlin.$_$.j3;
  var isCharSequence = kotlin_kotlin.$_$.r2;
  var trim = kotlin_kotlin.$_$.c3;
  var toString = kotlin_kotlin.$_$.u2;
  var protoOf = kotlin_kotlin.$_$.t2;
  var defineProp = kotlin_kotlin.$_$.i2;
  var initMetadataForClass = kotlin_kotlin.$_$.m2;
  var CoroutineImpl = kotlin_kotlin.$_$.c2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var isInterface = kotlin_kotlin.$_$.s2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n1;
  var initMetadataForLambda = kotlin_kotlin.$_$.p2;
  var VOID = kotlin_kotlin.$_$.b;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var asPromise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var endsWith_0 = kotlin_kotlin.$_$.a3;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.n2;
  var dropLast = kotlin_kotlin.$_$.y2;
  var awaitPromiseLike = kotlin_org_jetbrains_kotlin_wrappers_kotlin_js.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g1;
  var any = kotlin_kotlin.$_$.e1;
  var joinToString = kotlin_kotlin.$_$.i1;
  var checkIndexOverflow = kotlin_kotlin.$_$.f1;
  var Pair = kotlin_kotlin.$_$.h3;
  var singleOrNull = kotlin_kotlin.$_$.l1;
  var mutableListOf = kotlin_kotlin.$_$.j1;
  var copyToArray = kotlin_kotlin.$_$.h1;
  var ensureNotNull = kotlin_kotlin.$_$.n3;
  var equals = kotlin_kotlin.$_$.j2;
  var get_EmptyContinuation = kotlin_kotlin.$_$.q1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(mainIntl$chalk$1);
  initMetadataForLambda(mainIntl$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(mainIntl$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(mainIntl$8$1$1);
  initMetadataForClass(mainIntl$8$1$2);
  initMetadataForClass(mainIntl$8$1$3);
  initMetadataForClass(mainIntl$5);
  initMetadataForClass(mainIntl$6);
  initMetadataForClass(mainIntl$7);
  initMetadataForClass(collectInputs$2);
  initMetadataForClass(collectBuildTools$1);
  initMetadataForCoroutine($mainCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($mainIntlCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($signApkCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($signAabCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($collectBuildToolsCOROUTINE$4, CoroutineImpl);
  //endregion
  function main($completion) {
    var tmp = new $mainCOROUTINE$0($completion);
    tmp.c4_1 = Unit_instance;
    tmp.d4_1 = null;
    return tmp.i4();
  }
  function mainIntl($completion) {
    var tmp = new $mainIntlCOROUTINE$1($completion);
    tmp.c4_1 = Unit_instance;
    tmp.d4_1 = null;
    return tmp.i4();
  }
  function signApk(chalk, sourceFile, inputs, buildTools, $completion) {
    var tmp = new $signApkCOROUTINE$2(chalk, sourceFile, inputs, buildTools, $completion);
    tmp.c4_1 = Unit_instance;
    tmp.d4_1 = null;
    return tmp.i4();
  }
  function signAab(chalk, sourceFile, inputs, buildTools, $completion) {
    var tmp = new $signAabCOROUTINE$3(chalk, sourceFile, inputs, buildTools, $completion);
    tmp.c4_1 = Unit_instance;
    tmp.d4_1 = null;
    return tmp.i4();
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
    // Inline function 'kotlin.contracts.contract' call
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
    if ($this$run == null || isBlank($this$run)) {
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
    var tmp_1;
    if (endsWith($this$run_0, _Char___init__impl__6a9atx(47))) {
      tmp_1 = $this$run_0;
    } else {
      tmp_1 = $this$run_0 + '/';
    }
    var releaseDir = tmp_1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_1 = getInput('signingKey');
    // Inline function 'kotlin.contracts.contract' call
    var tmp_2;
    if (isBlank(this_1)) {
      // Inline function 'collectInputs.<anonymous>.<anonymous>' call
      tmp_2 = node_process_process_dcpv5o.env['ANDROID_SIGNING_KEY'];
    } else {
      tmp_2 = this_1;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    var $this$run_1 = tmp_2;
    var tmp_3;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if ($this$run_1 == null || isBlank($this$run_1)) {
      throw Exception_init_$Create$('Cannot find signingKey/ANDROID_SIGNING_KEY. Check your input in workflow.');
    } else {
      tmp_3 = $this$run_1;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.trim' call
    var this_2 = tmp_3;
    var signingKeyB64 = toString(trim(isCharSequence(this_2) ? this_2 : THROW_CCE()));
    var signingKey = node_path_path_1155cy.join(releaseDir, 'key.jks');
    writeFileSync(signingKey, signingKeyB64, 'base64');
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_3 = getInput('keyAlias');
    // Inline function 'kotlin.contracts.contract' call
    var tmp_4;
    if (isBlank(this_3)) {
      // Inline function 'collectInputs.<anonymous>.<anonymous>' call
      tmp_4 = node_process_process_dcpv5o.env['ANDROID_KEY_ALIAS'];
    } else {
      tmp_4 = this_3;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    var $this$run_2 = tmp_4;
    var tmp_5;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if ($this$run_2 == null || isBlank($this$run_2)) {
      throw Exception_init_$Create$('Cannot find keyAlias/ANDROID_KEY_ALIAS. Check your input in workflow.');
    } else {
      tmp_5 = $this$run_2;
    }
    var keyAlias = tmp_5;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_4 = getInput('keyStorePassword');
    // Inline function 'kotlin.contracts.contract' call
    var tmp_6;
    if (isBlank(this_4)) {
      // Inline function 'collectInputs.<anonymous>.<anonymous>' call
      tmp_6 = node_process_process_dcpv5o.env['ANDROID_KEYSTORE_PASSWORD'];
    } else {
      tmp_6 = this_4;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    var $this$run_3 = tmp_6;
    var tmp_7;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if ($this$run_3 == null || isBlank($this$run_3)) {
      throw Exception_init_$Create$('Cannot find keyStorePassword/ANDROID_KEYSTORE_PASSWORD. Check your input in workflow.');
    } else {
      tmp_7 = $this$run_3;
    }
    var keyStorePassword = tmp_7;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_5 = getInput('keyPassword');
    // Inline function 'kotlin.contracts.contract' call
    var tmp_8;
    if (isBlank(this_5)) {
      // Inline function 'collectInputs.<anonymous>.<anonymous>' call
      tmp_8 = node_process_process_dcpv5o.env['ANDROID_KEY_PASSWORD'];
    } else {
      tmp_8 = this_5;
    }
    var keyPassword = tmp_8;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_6 = getInput('buildToolsVersion');
    // Inline function 'kotlin.contracts.contract' call
    var tmp_9;
    if (isBlank(this_6)) {
      // Inline function 'collectInputs.<anonymous>.<anonymous>' call
      tmp_9 = node_process_process_dcpv5o.env['ANDROID_BUILD_TOOLS_VERSION'];
    } else {
      tmp_9 = this_6;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'collectInputs.<anonymous>' call
    var $this$run_4 = tmp_9;
    var tmp_10;
    // Inline function 'kotlin.text.isNullOrBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if ($this$run_4 == null || isBlank($this$run_4)) {
      tmp_10 = '33.0.0';
    } else {
      tmp_10 = $this$run_4;
    }
    var buildToolsVersion = tmp_10;
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
    tmp.c4_1 = Unit_instance;
    tmp.d4_1 = null;
    return tmp.i4();
  }
  function mainIntl$chalk$1() {
    this.hm_1 = 1;
  }
  protoOf(mainIntl$chalk$1).im = function (_set____db54di) {
    this.hm_1 = _set____db54di;
  };
  protoOf(mainIntl$chalk$1).jm = function () {
    return this.hm_1;
  };
  function mainIntl$lambda(it) {
    return '- ' + it;
  }
  function mainIntl$lambda$slambda($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation) {
    this.sm_1 = $signedFile;
    this.tm_1 = $chalk;
    this.um_1 = $sourceFile;
    this.vm_1 = $inputs;
    this.wm_1 = $buildTools;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mainIntl$lambda$slambda).ym = function ($this$async, $completion) {
    var tmp = this.zm($this$async, $completion);
    tmp.c4_1 = Unit_instance;
    tmp.d4_1 = null;
    return tmp.i4();
  };
  protoOf(mainIntl$lambda$slambda).d5 = function (p1, $completion) {
    return this.ym((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(mainIntl$lambda$slambda).i4 = function () {
    var suspendResult = this.c4_1;
    $sm: do
      try {
        var tmp = this.a4_1;
        switch (tmp) {
          case 0:
            this.b4_1 = 2;
            this.a4_1 = 1;
            suspendResult = signApk(this.tm_1, this.um_1, this.vm_1, this.wm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.sm_1._v = ARGUMENT;
            return Unit_instance;
          case 2:
            throw this.d4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.b4_1 === 2) {
          throw e;
        } else {
          this.a4_1 = this.b4_1;
          this.d4_1 = e;
        }
      }
     while (true);
  };
  protoOf(mainIntl$lambda$slambda).zm = function ($this$async, completion) {
    var i = new mainIntl$lambda$slambda(this.sm_1, this.tm_1, this.um_1, this.vm_1, this.wm_1, completion);
    i.xm_1 = $this$async;
    return i;
  };
  function mainIntl$lambda$slambda_0($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation) {
    var i = new mainIntl$lambda$slambda($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.ym($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function mainIntl$lambda$slambda_1($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation) {
    this.in_1 = $signedFile;
    this.jn_1 = $chalk;
    this.kn_1 = $sourceFile;
    this.ln_1 = $inputs;
    this.mn_1 = $buildTools;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mainIntl$lambda$slambda_1).ym = function ($this$async, $completion) {
    var tmp = this.zm($this$async, $completion);
    tmp.c4_1 = Unit_instance;
    tmp.d4_1 = null;
    return tmp.i4();
  };
  protoOf(mainIntl$lambda$slambda_1).d5 = function (p1, $completion) {
    return this.ym((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(mainIntl$lambda$slambda_1).i4 = function () {
    var suspendResult = this.c4_1;
    $sm: do
      try {
        var tmp = this.a4_1;
        switch (tmp) {
          case 0:
            this.b4_1 = 2;
            this.a4_1 = 1;
            suspendResult = signAab(this.jn_1, this.kn_1, this.ln_1, this.mn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.in_1._v = ARGUMENT;
            return Unit_instance;
          case 2:
            throw this.d4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.b4_1 === 2) {
          throw e;
        } else {
          this.a4_1 = this.b4_1;
          this.d4_1 = e;
        }
      }
     while (true);
  };
  protoOf(mainIntl$lambda$slambda_1).zm = function ($this$async, completion) {
    var i = new mainIntl$lambda$slambda_1(this.in_1, this.jn_1, this.kn_1, this.ln_1, this.mn_1, completion);
    i.nn_1 = $this$async;
    return i;
  };
  function mainIntl$lambda$slambda_2($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation) {
    var i = new mainIntl$lambda$slambda_1($signedFile, $chalk, $sourceFile, $inputs, $buildTools, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.ym($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function mainIntl$lambda_0($sourceFile, $signedFile, $chalk, $inputs, $buildTools) {
    return function () {
      var tmp;
      if (endsWith_0($sourceFile, '.apk')) {
        // Inline function 'js.coroutines.asPromise' call
        var tmp_0 = GlobalScope_instance;
        var this_0 = async(tmp_0, VOID, VOID, mainIntl$lambda$slambda_0($signedFile, $chalk, $sourceFile, $inputs, $buildTools, null));
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = asPromise(this_0);
      } else {
        // Inline function 'js.coroutines.asPromise' call
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
    this.on_1 = ($index + 1 | 0).toString();
  }
  function mainIntl$8$1$2($sourceFile) {
    this.pn_1 = $sourceFile;
  }
  function mainIntl$8$1$3($signedFile) {
    this.qn_1 = $signedFile;
  }
  function mainIntl$5() {
    this.rn_1 = 'Index';
    this.sn_1 = true;
  }
  function mainIntl$6() {
    this.tn_1 = 'Source File';
    this.un_1 = true;
  }
  function mainIntl$7() {
    this.vn_1 = 'Signed File';
    this.wn_1 = true;
  }
  function collectInputs$2($releaseDir, $signingKey, $keyAlias, $keyStorePassword, $keyPassword, $buildToolsVersion) {
    this.xn_1 = $releaseDir;
    this.yn_1 = $signingKey;
    this.zn_1 = $keyAlias;
    this.ao_1 = $keyStorePassword;
    this.bo_1 = $keyPassword;
    this.co_1 = $buildToolsVersion;
  }
  protoOf(collectInputs$2).do = function () {
    return this.xn_1;
  };
  protoOf(collectInputs$2).eo = function () {
    return this.yn_1;
  };
  protoOf(collectInputs$2).fo = function () {
    return this.zn_1;
  };
  protoOf(collectInputs$2).go = function () {
    return this.ao_1;
  };
  protoOf(collectInputs$2).ho = function () {
    return this.bo_1;
  };
  protoOf(collectInputs$2).io = function () {
    return this.co_1;
  };
  function collectBuildTools$1($zipalign, $apksigner, $jarsigner) {
    this.jo_1 = $zipalign;
    this.ko_1 = $apksigner;
    this.lo_1 = $jarsigner;
  }
  protoOf(collectBuildTools$1).mo = function () {
    return this.jo_1;
  };
  protoOf(collectBuildTools$1).no = function () {
    return this.ko_1;
  };
  protoOf(collectBuildTools$1).oo = function () {
    return this.lo_1;
  };
  function $mainCOROUTINE$0(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($mainCOROUTINE$0).i4 = function () {
    var suspendResult = this.c4_1;
    $sm: do
      try {
        var tmp = this.a4_1;
        switch (tmp) {
          case 0:
            this.b4_1 = 3;
            this.b4_1 = 2;
            this.a4_1 = 1;
            suspendResult = mainIntl(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b4_1 = 3;
            this.a4_1 = 4;
            continue $sm;
          case 2:
            this.b4_1 = 3;
            var e = this.d4_1;
            var it = toString(e);
            error(it);
            setFailed(it);
            this.a4_1 = 4;
            continue $sm;
          case 3:
            throw this.d4_1;
          case 4:
            this.b4_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.b4_1 === 3) {
          throw e_0;
        } else {
          this.a4_1 = this.b4_1;
          this.d4_1 = e_0;
        }
      }
     while (true);
  };
  function $mainIntlCOROUTINE$1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($mainIntlCOROUTINE$1).i4 = function () {
    var suspendResult = this.c4_1;
    $sm: do
      try {
        var tmp = this.a4_1;
        switch (tmp) {
          case 0:
            this.b4_1 = 8;
            var tmp_0 = this;
            tmp_0.aj_1 = new Instance(new mainIntl$chalk$1());
            this.bj_1 = collectInputs();
            this.a4_1 = 1;
            suspendResult = collectBuildTools(this.bj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.cj_1 = suspendResult;
            info(this.aj_1.blue(['Signing file(s) in ' + dropLast(this.bj_1.do(), 1) + ' with key ' + this.bj_1.fo() + '...\n']));
            var tmp_1 = this;
            var this_0 = this.bj_1.do() + '**/*.apk\n' + this.bj_1.do() + '**/*.aab';
            debug('Glob patterns:\n' + this_0);
            tmp_1.dj_1 = this_0;
            var tmp_2 = this;
            tmp_2.ej_1 = this.dj_1;
            var tmp_3 = this;
            tmp_3.fj_1 = undefined;
            this.a4_1 = 2;
            suspendResult = awaitPromiseLike(create(this.ej_1, this.fj_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.gj_1 = suspendResult;
            this.hj_1 = this.gj_1.glob();
            this.a4_1 = 3;
            suspendResult = awaitPromiseLike(this.hj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.ij_1 = suspendResult;
            var tmp_4 = this;
            var this_1 = this.ij_1;
            var destination = ArrayList_init_$Create$(this.ij_1.length);
            var inductionVariable = 0;
            var last = this_1.length;
            while (inductionVariable < last) {
              var item = this_1[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              destination.k1(node_path_path_1155cy.relative(node_process_process_dcpv5o.cwd(), item));
            }

            tmp_4.jj_1 = destination;
            var tmp_5 = this;
            var this_2 = this.jj_1;
            var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this.jj_1, 10));
            var tmp0_iterator = this_2.f();
            while (tmp0_iterator.g()) {
              var item_0 = tmp0_iterator.h();
              destination_0.k1(node_path_path_1155cy.relative(this.bj_1.do(), item_0));
            }

            tmp_5.kj_1 = destination_0;
            var tmp_6 = this;
            var this_3 = this.kj_1;
            var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this.kj_1, 10));
            var tmp0_iterator_0 = this_3.f();
            while (tmp0_iterator_0.g()) {
              var item_1 = tmp0_iterator_0.h();
              destination_1.k1(toPosixPath(item_1));
            }

            tmp_6.lj_1 = destination_1;
            var $this$apply = this.lj_1;
            if (!any($this$apply))
              throw Exception_init_$Create$('Cannot find any apk/aab file.');
            this.mj_1 = this.lj_1;
            var tmp_7 = this;
            tmp_7.nj_1 = this.mj_1.k();
            var tmp_8 = this.aj_1.blue(['Now sign ' + this.nj_1 + ' file(s):']);
            info(tmp_8 + '\n' + joinToString(this.mj_1, '\n', VOID, VOID, VOID, VOID, mainIntl$lambda) + '\n');
            var tmp_9 = this;
            tmp_9.oj_1 = this.mj_1;
            var tmp_10 = this;
            tmp_10.pj_1 = this.oj_1;
            var tmp_11 = this;
            tmp_11.qj_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this.oj_1, 10));
            this.rj_1 = 0;
            this.sj_1 = this.pj_1.f();
            this.a4_1 = 4;
            continue $sm;
          case 4:
            if (!this.sj_1.g()) {
              this.a4_1 = 6;
              continue $sm;
            }

            this.tj_1 = this.sj_1.h();
            var tmp_12 = this;
            var tmp1 = this.rj_1;
            this.rj_1 = tmp1 + 1 | 0;
            tmp_12.uj_1 = checkIndexOverflow(tmp1);
            var tmp_13 = this;
            tmp_13.vj_1 = this.tj_1;
            this.wj_1 = {_v: ''};
            var tmp_14 = this;
            tmp_14.xj_1 = '[' + (this.uj_1 + 1 | 0) + '/' + this.nj_1 + '] ' + this.vj_1;
            this.a4_1 = 5;
            suspendResult = awaitPromiseLike(group(this.xj_1, mainIntl$lambda_0(this.vj_1, this.wj_1, this.aj_1, this.bj_1, this.cj_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.yj_1 = new Pair(this.vj_1, this.wj_1._v);
            this.qj_1.k1(this.yj_1);
            this.a4_1 = 4;
            continue $sm;
          case 6:
            this.zj_1 = this.qj_1;
            info(this.aj_1.green(['Successfully signed ' + this.nj_1 + ' file(s).\n']));
            var this_4 = this.zj_1;
            var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
            var tmp0_iterator_1 = this_4.f();
            while (tmp0_iterator_1.g()) {
              var item_2 = tmp0_iterator_1.h();
              destination_2.k1(item_2.t7_1);
            }

            var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_2, 10));
            var tmp0_iterator_2 = destination_2.f();
            while (tmp0_iterator_2.g()) {
              var item_3 = tmp0_iterator_2.h();
              destination_3.k1(node_path_path_1155cy.join(node_process_process_dcpv5o.cwd(), this.bj_1.do(), item_3));
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
            var it_0 = destination_3.k();
            setOutput('signedFilesCount', it_0);
            exportVariable('ANDROID_SIGNED_FILES_COUNT', it_0);
            var tmp_15 = this;
            var tmp_16 = summary.addHeading('Signed Release Files', 3).addRaw('Successfully signed ' + this.nj_1 + ' file(s).\n\n');
            var tmp_17 = new mainIntl$5();
            var tmp_18 = new mainIntl$6();
            var this_5 = [tmp_17, tmp_18, new mainIntl$7()];
            var this_6 = mutableListOf([this_5]);
            var index = 0;
            var tmp0_iterator_3 = this.zj_1.f();
            while (tmp0_iterator_3.g()) {
              var item_4 = tmp0_iterator_3.h();
              var tmp1_0 = index;
              index = tmp1_0 + 1 | 0;
              var index_0 = checkIndexOverflow(tmp1_0);
              var sourceFile = item_4.u7();
              var signedFile = item_4.v7();
              var tmp_19 = new mainIntl$8$1$1(index_0);
              var tmp_20 = new mainIntl$8$1$2(sourceFile);
              var this_7 = [tmp_19, tmp_20, new mainIntl$8$1$3(signedFile)];
              this_6.k1(this_7);
            }

            tmp_15.ak_1 = tmp_16.addTable(copyToArray(this_6)).write();
            this.a4_1 = 7;
            suspendResult = awaitPromiseLike(this.ak_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.d4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.b4_1 === 8) {
          throw e;
        } else {
          this.a4_1 = this.b4_1;
          this.d4_1 = e;
        }
      }
     while (true);
  };
  function $signApkCOROUTINE$2(chalk, sourceFile, inputs, buildTools, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jk_1 = chalk;
    this.kk_1 = sourceFile;
    this.lk_1 = inputs;
    this.mk_1 = buildTools;
  }
  protoOf($signApkCOROUTINE$2).i4 = function () {
    var suspendResult = this.c4_1;
    $sm: do
      try {
        var tmp = this.a4_1;
        switch (tmp) {
          case 0:
            this.b4_1 = 3;
            this.nk_1 = this.lk_1.do() + this.kk_1;
            this.ok_1 = dropLast(this.nk_1, 4) + '-temp.apk';
            this.pk_1 = dropLast(this.nk_1, 4) + '-signed.apk';
            info(this.jk_1.blue(['Aligning APK file.']));
            var tmp_0 = this;
            tmp_0.qk_1 = this.mk_1.mo();
            var tmp_1 = this;
            tmp_1.rk_1 = ['-p', '-f', '-v', '4', this.nk_1, this.ok_1];
            var tmp_2 = this;
            tmp_2.sk_1 = undefined;
            this.a4_1 = 1;
            suspendResult = awaitPromiseLike(exec(this.qk_1, this.rk_1, this.sk_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            info(this.jk_1.blue(['Signing APK file.']));
            var tmp_3 = this;
            tmp_3.tk_1 = this.mk_1.no();
            var tmp_4 = this;
            var this_0 = mutableListOf(['sign', '--ks', this.lk_1.eo(), '--ks-key-alias', this.lk_1.fo(), '--ks-pass', 'pass:' + this.lk_1.go(), '--out', this.pk_1]);
            var this_1 = this.lk_1.ho();
            if (!(this_1 == null || isBlank(this_1))) {
              this_0.k1('--key-pass');
              this_0.k1('pass:' + this.lk_1.ho());
            }

            this_0.k1(this.ok_1);
            tmp_4.uk_1 = copyToArray(this_0);
            var tmp_5 = this;
            tmp_5.vk_1 = undefined;
            this.a4_1 = 2;
            suspendResult = awaitPromiseLike(exec(this.tk_1, this.uk_1, this.vk_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return dropLast(this.kk_1, 4) + '-signed.apk';
          case 3:
            throw this.d4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.b4_1 === 3) {
          throw e;
        } else {
          this.a4_1 = this.b4_1;
          this.d4_1 = e;
        }
      }
     while (true);
  };
  function $signAabCOROUTINE$3(chalk, sourceFile, inputs, buildTools, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.el_1 = chalk;
    this.fl_1 = sourceFile;
    this.gl_1 = inputs;
    this.hl_1 = buildTools;
  }
  protoOf($signAabCOROUTINE$3).i4 = function () {
    var suspendResult = this.c4_1;
    $sm: do
      try {
        var tmp = this.a4_1;
        switch (tmp) {
          case 0:
            this.b4_1 = 3;
            this.il_1 = this.gl_1.do() + this.fl_1;
            this.jl_1 = dropLast(this.il_1, 4) + '-temp.aab';
            this.kl_1 = dropLast(this.il_1, 4) + '-signed.aab';
            info(this.el_1.blue(['Signing AAB file.']));
            var tmp_0 = this;
            tmp_0.ll_1 = this.hl_1.oo();
            var tmp_1 = this;
            var this_0 = mutableListOf(['-keystore', this.gl_1.eo(), '-storepass', this.gl_1.go(), '-signedjar', this.jl_1]);
            var this_1 = this.gl_1.ho();
            if (!(this_1 == null || isBlank(this_1))) {
              this_0.k1('-keypass');
              this_0.k1(ensureNotNull(this.gl_1.ho()));
            }

            this_0.k1(this.il_1);
            this_0.k1(this.gl_1.fo());
            tmp_1.ml_1 = copyToArray(this_0);
            var tmp_2 = this;
            tmp_2.nl_1 = undefined;
            this.a4_1 = 1;
            suspendResult = awaitPromiseLike(exec(this.ll_1, this.ml_1, this.nl_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            info(this.el_1.blue(['Aligning AAB file.']));
            var tmp_3 = this;
            tmp_3.ol_1 = this.hl_1.mo();
            var tmp_4 = this;
            tmp_4.pl_1 = ['-p', '-f', '-v', '4', this.jl_1, this.kl_1];
            var tmp_5 = this;
            tmp_5.ql_1 = undefined;
            this.a4_1 = 2;
            suspendResult = awaitPromiseLike(exec(this.ol_1, this.pl_1, this.ql_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return dropLast(this.fl_1, 4) + '-signed.aab';
          case 3:
            throw this.d4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.b4_1 === 3) {
          throw e;
        } else {
          this.a4_1 = this.b4_1;
          this.d4_1 = e;
        }
      }
     while (true);
  };
  function $collectBuildToolsCOROUTINE$4(inputs, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zl_1 = inputs;
  }
  protoOf($collectBuildToolsCOROUTINE$4).i4 = function () {
    var suspendResult = this.c4_1;
    $sm: do
      try {
        var tmp = this.a4_1;
        switch (tmp) {
          case 0:
            this.b4_1 = 2;
            var tmp_0 = this;
            var tmp_1 = node_process_process_dcpv5o.platform;
            tmp_0.am_1 = equals(tmp_1, 'win32');
            var tmp_2 = this;
            var $this$run = node_process_process_dcpv5o.env['ANDROID_HOME'];
            var tmp_3;
            if ($this$run == null || isBlank($this$run)) {
              throw Exception_init_$Create$('Cannot find Android SDK installation. Please setup Android before this action.');
            } else {
              tmp_3 = $this$run;
            }

            var this_0 = tmp_3;
            debug('Found Android SDK: ' + this_0);
            tmp_2.bm_1 = this_0;
            var tmp_4 = this;
            var $this$run_0 = node_path_path_1155cy.join(this.bm_1, 'build-tools', this.zl_1.io());
            var tmp_5;
            if (!existsSync($this$run_0)) {
              throw Exception_init_$Create$('Cannot find Android build tools. Please setup Android before this action.');
            } else {
              tmp_5 = $this$run_0;
            }

            var this_1 = tmp_5;
            debug('Found Android build-tools: ' + this_1);
            tmp_4.cm_1 = this_1;
            var tmp_6 = this;
            var $this$run_1 = node_path_path_1155cy.join(this.cm_1, this.am_1 ? 'zipalign.exe' : 'zipalign');
            var tmp_7;
            if (!existsSync($this$run_1)) {
              throw Exception_init_$Create$('Cannot find zipalign. Please setup Android before this action.');
            } else {
              tmp_7 = $this$run_1;
            }

            var this_2 = tmp_7;
            debug('Found zipalign: ' + this_2);
            tmp_6.dm_1 = this_2;
            var tmp_8 = this;
            var $this$run_2 = node_path_path_1155cy.join(this.cm_1, this.am_1 ? 'apksigner.bat' : 'apksigner');
            var tmp_9;
            if (!existsSync($this$run_2)) {
              throw Exception_init_$Create$('Cannot find apksigner. Please setup Android before this action.');
            } else {
              tmp_9 = $this$run_2;
            }

            var this_3 = tmp_9;
            debug('Found apksigner: ' + this_3);
            tmp_8.em_1 = this_3;
            var tmp_10 = this;
            tmp_10.fm_1 = this.am_1 ? 'jarsigner.exe' : 'jarsigner';
            var tmp_11 = this;
            tmp_11.gm_1 = false;
            this.a4_1 = 1;
            suspendResult = awaitPromiseLike(which(this.fm_1, this.gm_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var $this$run_3 = suspendResult;
            var tmp_12;
            if (!existsSync($this$run_3)) {
              throw Exception_init_$Create$('Cannot find jarsigner. Please setup JDK before this action.');
            } else {
              tmp_12 = $this$run_3;
            }

            var this_4 = tmp_12;
            debug('Found jarsigner: ' + this_4);
            var jarsigner = this_4;
            return new collectBuildTools$1(this.dm_1, this.em_1, jarsigner);
          case 2:
            throw this.d4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.b4_1 === 2) {
          throw e;
        } else {
          this.a4_1 = this.b4_1;
          this.d4_1 = e;
        }
      }
     while (true);
  };
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  //region block: post-declaration
  defineProp(protoOf(mainIntl$chalk$1), 'level', function () {
    return this.jm();
  }, function (value) {
    this.im(value);
  });
  //endregion
  mainWrapper();
  return _;
}(module.exports, require('@actions/core'), require('node:process'), require('node:path'), require('node:fs'), require('chalk'), require('@actions/glob'), require('@actions/exec'), require('@actions/io'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin-js.js')));

//# sourceMappingURL=sign-android-release.js.map
