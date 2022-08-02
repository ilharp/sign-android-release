(function (_, Kotlin, $module$_actions_core, $module$chalk, $module$_actions_glob, $module$kotlinx_coroutines_core, $module$path, $module$process, $module$_actions_exec, $module$_17def1782b5ee417_kotlinx_nodejs_jsLegacy, $module$fs, $module$_actions_io) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var error = $module$_actions_core.error;
  var setFailed = $module$_actions_core.setFailed;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Instance = $module$chalk.Instance;
  var dropLast = Kotlin.kotlin.text.dropLast_6ic1pp$;
  var info = $module$_actions_core.info;
  var debug = $module$_actions_core.debug;
  var create = $module$_actions_glob.create;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var toPosixPath = $module$_actions_core.toPosixPath;
  var any = Kotlin.kotlin.collections.any_7wnvza$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var promise = $module$kotlinx_coroutines_core.kotlinx.coroutines.promise_pda6u4$;
  var group = $module$_actions_core.group;
  var Pair = Kotlin.kotlin.Pair;
  var singleOrNull = Kotlin.kotlin.collections.singleOrNull_2p1efm$;
  var setOutput = $module$_actions_core.setOutput;
  var exportVariable = $module$_actions_core.exportVariable;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var exec = $module$_actions_exec.exec;
  var toString = Kotlin.toString;
  var ensureNotNull = Kotlin.ensureNotNull;
  var getInput = $module$_actions_core.getInput;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_sgbm27$;
  var writeFileSync = $module$fs.writeFileSync;
  var setSecret = $module$_actions_core.setSecret;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var equals = Kotlin.equals;
  var existsSync = $module$fs.existsSync;
  var which = $module$_actions_io.which;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function Coroutine$main(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
  }
  Coroutine$main.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main.prototype.constructor = Coroutine$main;
  Coroutine$main.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = mainIntl(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            var it = e.toString();
            error(it);
            setFailed(it);
            return Unit;
          case 3:
            return;
          case 4:
            throw this.exception_0;
          default:
            this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main(continuation_0, suspended) {
    var instance = new Coroutine$main(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function mainIntl$ObjectLiteral() {
    this.level_paoiw3$_0 = 1;
  }
  Object.defineProperty(mainIntl$ObjectLiteral.prototype, 'level', {
    configurable: true,
    get: function () {
      return this.level_paoiw3$_0;
    },
    set: function (level) {
      this.level_paoiw3$_0 = level;
    }
  });
  mainIntl$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function mainIntl$lambda(it) {
    return '- ' + it;
  }
  function Coroutine$mainIntl$lambda$lambda$lambda(closure$chalk_0, closure$sourceFile_0, closure$inputs_0, closure$buildTools_0, closure$signedFile_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$chalk = closure$chalk_0;
    this.local$closure$sourceFile = closure$sourceFile_0;
    this.local$closure$inputs = closure$inputs_0;
    this.local$closure$buildTools = closure$buildTools_0;
    this.local$closure$signedFile = closure$signedFile_0;
  }
  Coroutine$mainIntl$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainIntl$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainIntl$lambda$lambda$lambda.prototype.constructor = Coroutine$mainIntl$lambda$lambda$lambda;
  Coroutine$mainIntl$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = signApk(this.local$closure$chalk, this.local$closure$sourceFile, this.local$closure$inputs, this.local$closure$buildTools, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$signedFile.v = this.result_0, Unit;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function mainIntl$lambda$lambda$lambda(closure$chalk_0, closure$sourceFile_0, closure$inputs_0, closure$buildTools_0, closure$signedFile_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mainIntl$lambda$lambda$lambda(closure$chalk_0, closure$sourceFile_0, closure$inputs_0, closure$buildTools_0, closure$signedFile_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mainIntl$lambda$lambda$lambda_0(closure$chalk_0, closure$sourceFile_0, closure$inputs_0, closure$buildTools_0, closure$signedFile_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$chalk = closure$chalk_0;
    this.local$closure$sourceFile = closure$sourceFile_0;
    this.local$closure$inputs = closure$inputs_0;
    this.local$closure$buildTools = closure$buildTools_0;
    this.local$closure$signedFile = closure$signedFile_0;
  }
  Coroutine$mainIntl$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainIntl$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainIntl$lambda$lambda$lambda_0.prototype.constructor = Coroutine$mainIntl$lambda$lambda$lambda_0;
  Coroutine$mainIntl$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = signAab(this.local$closure$chalk, this.local$closure$sourceFile, this.local$closure$inputs, this.local$closure$buildTools, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$signedFile.v = this.result_0, Unit;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function mainIntl$lambda$lambda$lambda_0(closure$chalk_0, closure$sourceFile_0, closure$inputs_0, closure$buildTools_0, closure$signedFile_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mainIntl$lambda$lambda$lambda_0(closure$chalk_0, closure$sourceFile_0, closure$inputs_0, closure$buildTools_0, closure$signedFile_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mainIntl$lambda$lambda(closure$sourceFile, closure$chalk, closure$inputs, closure$buildTools, closure$signedFile) {
    return function () {
      return endsWith(closure$sourceFile, '.apk') ? promise(coroutines.GlobalScope, void 0, void 0, mainIntl$lambda$lambda$lambda(closure$chalk, closure$sourceFile, closure$inputs, closure$buildTools, closure$signedFile)) : promise(coroutines.GlobalScope, void 0, void 0, mainIntl$lambda$lambda$lambda_0(closure$chalk, closure$sourceFile, closure$inputs, closure$buildTools, closure$signedFile));
    };
  }
  function mainIntl$ObjectLiteral_0() {
    this.data_s6r7pf$_0 = 'Index';
    this.header_euu5q8$_0 = true;
  }
  Object.defineProperty(mainIntl$ObjectLiteral_0.prototype, 'data', {
    configurable: true,
    get: function () {
      return this.data_s6r7pf$_0;
    },
    set: function (data) {
      this.data_s6r7pf$_0 = data;
    }
  });
  Object.defineProperty(mainIntl$ObjectLiteral_0.prototype, 'header', {
    configurable: true,
    get: function () {
      return this.header_euu5q8$_0;
    },
    set: function (header) {
      this.header_euu5q8$_0 = header;
    }
  });
  mainIntl$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function mainIntl$ObjectLiteral_1() {
    this.data_s6r7pf$_0 = 'Source File';
    this.header_euu5q8$_0 = true;
  }
  Object.defineProperty(mainIntl$ObjectLiteral_1.prototype, 'data', {
    configurable: true,
    get: function () {
      return this.data_s6r7pf$_0;
    },
    set: function (data) {
      this.data_s6r7pf$_0 = data;
    }
  });
  Object.defineProperty(mainIntl$ObjectLiteral_1.prototype, 'header', {
    configurable: true,
    get: function () {
      return this.header_euu5q8$_0;
    },
    set: function (header) {
      this.header_euu5q8$_0 = header;
    }
  });
  mainIntl$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function mainIntl$ObjectLiteral_2() {
    this.data_s6r7pf$_0 = 'Signed File';
    this.header_euu5q8$_0 = true;
  }
  Object.defineProperty(mainIntl$ObjectLiteral_2.prototype, 'data', {
    configurable: true,
    get: function () {
      return this.data_s6r7pf$_0;
    },
    set: function (data) {
      this.data_s6r7pf$_0 = data;
    }
  });
  Object.defineProperty(mainIntl$ObjectLiteral_2.prototype, 'header', {
    configurable: true,
    get: function () {
      return this.header_euu5q8$_0;
    },
    set: function (header) {
      this.header_euu5q8$_0 = header;
    }
  });
  mainIntl$ObjectLiteral_2.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function mainIntl$lambda$lambda$ObjectLiteral(closure$index) {
    this.data_v5at8b$_0 = (closure$index + 1 | 0).toString();
  }
  Object.defineProperty(mainIntl$lambda$lambda$ObjectLiteral.prototype, 'data', {
    configurable: true,
    get: function () {
      return this.data_v5at8b$_0;
    },
    set: function (data) {
      this.data_v5at8b$_0 = data;
    }
  });
  mainIntl$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function mainIntl$lambda$lambda$ObjectLiteral_0(closure$sourceFile) {
    this.data_v5at8b$_0 = closure$sourceFile;
  }
  Object.defineProperty(mainIntl$lambda$lambda$ObjectLiteral_0.prototype, 'data', {
    configurable: true,
    get: function () {
      return this.data_v5at8b$_0;
    },
    set: function (data) {
      this.data_v5at8b$_0 = data;
    }
  });
  mainIntl$lambda$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function mainIntl$lambda$lambda$ObjectLiteral_1(closure$signedFile) {
    this.data_v5at8b$_0 = closure$signedFile.v;
  }
  Object.defineProperty(mainIntl$lambda$lambda$ObjectLiteral_1.prototype, 'data', {
    configurable: true,
    get: function () {
      return this.data_v5at8b$_0;
    },
    set: function (data) {
      this.data_v5at8b$_0 = data;
    }
  });
  mainIntl$lambda$lambda$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Coroutine$mainIntl(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$chalk = void 0;
    this.local$inputs = void 0;
    this.local$buildTools = void 0;
    this.local$sourceFilesCount = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$index = void 0;
    this.local$item = void 0;
    this.local$tmp$_1 = void 0;
    this.local$signedFile = void 0;
  }
  Coroutine$mainIntl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainIntl.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainIntl.prototype.constructor = Coroutine$mainIntl;
  Coroutine$mainIntl.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$chalk = new Instance(new mainIntl$ObjectLiteral());
            this.local$inputs = collectInputs();
            this.state_0 = 2;
            this.result_0 = collectBuildTools(this.local$inputs, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$buildTools = this.result_0;
            info(this.local$chalk.blue('Signing file(s) in ' + dropLast(this.local$inputs.releaseDir, 1) + ' with key ' + this.local$inputs.keyAlias + '...' + '\n'));
            var $receiver = this.local$inputs.releaseDir + '**/*.apk' + '\n' + this.local$inputs.releaseDir + '**/*.aab';
            debug('Glob patterns:' + '\n' + $receiver);
            var globPatterns = $receiver;
            this.state_0 = 3;
            this.result_0 = await_0(create(globPatterns), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = await_0(this.result_0.glob(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $receiver_0 = this.result_0;
            var destination = ArrayList_init($receiver_0.length);
            var tmp$;
            for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
              var item = $receiver_0[tmp$];
              destination.add_11rb$($module$path.relative($module$process.cwd(), item));
            }

            var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
            var tmp$_0;
            tmp$_0 = destination.iterator();
            while (tmp$_0.hasNext()) {
              var item_0 = tmp$_0.next();
              destination_0.add_11rb$($module$path.relative(this.local$inputs.releaseDir, item_0));
            }

            var destination_1 = ArrayList_init(collectionSizeOrDefault(destination_0, 10));
            var tmp$_1;
            tmp$_1 = destination_0.iterator();
            while (tmp$_1.hasNext()) {
              var item_1 = tmp$_1.next();
              destination_1.add_11rb$(toPosixPath(item_1));
            }

            if (!any(destination_1))
              throw Exception_init('Cannot find any apk/aab file.');
            var sourceFiles = destination_1;
            this.local$sourceFilesCount = sourceFiles.size;
            info(this.local$chalk.blue('Now sign ' + this.local$sourceFilesCount + ' file(s):') + '\n' + joinToString(sourceFiles, '\n', void 0, void 0, void 0, void 0, mainIntl$lambda) + '\n');
            this.local$destination = ArrayList_init(collectionSizeOrDefault(sourceFiles, 10));
            var tmp$_0_0;
            this.local$index = 0;
            this.local$tmp$ = sourceFiles.iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            this.local$item = this.local$tmp$.next();
            this.local$tmp$_1 = this.local$destination.add_11rb$;
            var index = checkIndexOverflow((tmp$_0_0 = this.local$index, this.local$index = tmp$_0_0 + 1 | 0, tmp$_0_0));
            this.local$signedFile = {v: ''};
            this.state_0 = 6;
            this.result_0 = await_0(group('[' + (index + 1 | 0) + '/' + this.local$sourceFilesCount + '] ' + this.local$item, mainIntl$lambda$lambda(this.local$item, this.local$chalk, this.local$inputs, this.local$buildTools, this.local$signedFile)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_1.call(this.local$destination, new Pair(this.local$item, this.local$signedFile.v));
            this.state_0 = 5;
            continue;
          case 7:
            var signResult = this.local$destination;
            info(this.local$chalk.green('Successfully signed ' + this.local$sourceFilesCount + ' file(s).' + '\n'));
            var destination_2 = ArrayList_init(collectionSizeOrDefault(signResult, 10));
            var tmp$_2;
            tmp$_2 = signResult.iterator();
            while (tmp$_2.hasNext()) {
              var item_2 = tmp$_2.next();
              destination_2.add_11rb$(item_2.second);
            }

            var destination_3 = ArrayList_init(collectionSizeOrDefault(destination_2, 10));
            var tmp$_3;
            tmp$_3 = destination_2.iterator();
            while (tmp$_3.hasNext()) {
              var item_3 = tmp$_3.next();
              destination_3.add_11rb$($module$path.join($module$process.cwd(), this.local$inputs.releaseDir, item_3));
            }

            var tmp$_4;
            if ((tmp$_4 = singleOrNull(destination_3)) != null) {
              setOutput('signedFile', tmp$_4);
              exportVariable('ANDROID_SIGNED_FILE', tmp$_4);
            }

            var it = joinToString(destination_3, ':');
            setOutput('signedFiles', it);
            exportVariable('ANDROID_SIGNED_FILES', it);
            var it_0 = destination_3.size;
            setOutput('signedFilesCount', it_0);
            exportVariable('ANDROID_SIGNED_FILES_COUNT', it_0);
            var tmp$_5 = $module$_actions_core.summary.addHeading('Signed Release Files', 3).addRaw('Successfully signed ' + this.local$sourceFilesCount + ' file(s).' + '\n' + '\n');
            var $receiver_1 = mutableListOf([[new mainIntl$ObjectLiteral_0(), new mainIntl$ObjectLiteral_1(), new mainIntl$ObjectLiteral_2()]]);
            var tmp$_6, tmp$_0_1;
            var index_0 = 0;
            tmp$_6 = signResult.iterator();
            while (tmp$_6.hasNext()) {
              var item_4 = tmp$_6.next();
              var index_1 = checkIndexOverflow((tmp$_0_1 = index_0, index_0 = tmp$_0_1 + 1 | 0, tmp$_0_1));
              var sourceFile = item_4.component1()
              , signedFile = item_4.component2();
              $receiver_1.add_11rb$([new mainIntl$lambda$lambda$ObjectLiteral(index_1), new mainIntl$lambda$lambda$ObjectLiteral_0(sourceFile), new mainIntl$lambda$lambda$ObjectLiteral_1(signedFile)]);
            }

            this.state_0 = 8;
            this.result_0 = await_0(tmp$_5.addTable(copyToArray($receiver_1)).write(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            return;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function mainIntl(continuation_0, suspended) {
    var instance = new Coroutine$mainIntl(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$signApk(chalk_0, sourceFile_0, inputs_0, buildTools_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$alignedFile = void 0;
    this.local$signedFile = void 0;
    this.local$chalk = chalk_0;
    this.local$sourceFile = sourceFile_0;
    this.local$inputs = inputs_0;
    this.local$buildTools = buildTools_0;
  }
  Coroutine$signApk.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$signApk.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$signApk.prototype.constructor = Coroutine$signApk;
  Coroutine$signApk.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var sourceFilePath = this.local$inputs.releaseDir + this.local$sourceFile;
            this.local$alignedFile = dropLast(sourceFilePath, 4) + '-temp.apk';
            this.local$signedFile = dropLast(sourceFilePath, 4) + '-signed.apk';
            info(this.local$chalk.blue('Aligning APK file.'));
            this.state_0 = 2;
            this.result_0 = await_0(exec(this.local$buildTools.zipalign, ['-p', '-f', '-v', '4', sourceFilePath, this.local$alignedFile]), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            info(this.local$chalk.blue('Signing APK file.'));
            var tmp$ = this.local$buildTools.apksigner;
            var $receiver = mutableListOf(['sign', '--ks', this.local$inputs.signingKey, '--ks-key-alias', this.local$inputs.keyAlias, '--ks-pass', 'pass:' + this.local$inputs.keyStorePassword, '--out', this.local$signedFile]);
            var $receiver_0 = this.local$inputs.keyPassword;
            if (!($receiver_0 == null || isBlank($receiver_0))) {
              $receiver.add_11rb$('--key-pass');
              $receiver.add_11rb$('pass:' + toString(this.local$inputs.keyPassword));
            }

            $receiver.add_11rb$(this.local$alignedFile);
            this.state_0 = 3;
            this.result_0 = await_0(exec(tmp$, copyToArray($receiver)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return dropLast(this.local$sourceFile, 4) + '-signed.apk';
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function signApk(chalk_0, sourceFile_0, inputs_0, buildTools_0, continuation_0, suspended) {
    var instance = new Coroutine$signApk(chalk_0, sourceFile_0, inputs_0, buildTools_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$signAab(chalk_0, sourceFile_0, inputs_0, buildTools_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$signedFile = void 0;
    this.local$alignedFile = void 0;
    this.local$chalk = chalk_0;
    this.local$sourceFile = sourceFile_0;
    this.local$inputs = inputs_0;
    this.local$buildTools = buildTools_0;
  }
  Coroutine$signAab.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$signAab.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$signAab.prototype.constructor = Coroutine$signAab;
  Coroutine$signAab.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var sourceFilePath = this.local$inputs.releaseDir + this.local$sourceFile;
            this.local$signedFile = dropLast(sourceFilePath, 4) + '-temp.aab';
            this.local$alignedFile = dropLast(sourceFilePath, 4) + '-signed.aab';
            info(this.local$chalk.blue('Signing AAB file.'));
            var tmp$ = this.local$buildTools.jarsigner;
            var $receiver = mutableListOf(['-keystore', this.local$inputs.signingKey, '-storepass', this.local$inputs.keyStorePassword, '-signedjar', this.local$signedFile]);
            var $receiver_0 = this.local$inputs.keyPassword;
            if (!($receiver_0 == null || isBlank($receiver_0))) {
              $receiver.add_11rb$('-keypass');
              $receiver.add_11rb$(ensureNotNull(this.local$inputs.keyPassword));
            }

            $receiver.add_11rb$(sourceFilePath);
            $receiver.add_11rb$(this.local$inputs.keyAlias);
            this.state_0 = 2;
            this.result_0 = await_0(exec(tmp$, copyToArray($receiver)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            info(this.local$chalk.blue('Aligning AAB file.'));
            this.state_0 = 3;
            this.result_0 = await_0(exec(this.local$buildTools.zipalign, ['-p', '-f', '-v', '4', this.local$signedFile, this.local$alignedFile]), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return dropLast(this.local$sourceFile, 4) + '-signed.aab';
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function signAab(chalk_0, sourceFile_0, inputs_0, buildTools_0, continuation_0, suspended) {
    var instance = new Coroutine$signAab(chalk_0, sourceFile_0, inputs_0, buildTools_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function collectInputs$ObjectLiteral(closure$releaseDir, closure$signingKey, closure$keyAlias, closure$keyStorePassword, closure$keyPassword, closure$buildToolsVersion) {
    this.releaseDir_armpze$_0 = closure$releaseDir;
    this.signingKey_57nwy2$_0 = closure$signingKey;
    this.keyAlias_boyz7j$_0 = closure$keyAlias;
    this.keyStorePassword_eh80s3$_0 = closure$keyStorePassword;
    this.keyPassword_bnq77a$_0 = closure$keyPassword;
    this.buildToolsVersion_27xubd$_0 = closure$buildToolsVersion;
  }
  Object.defineProperty(collectInputs$ObjectLiteral.prototype, 'releaseDir', {
    configurable: true,
    get: function () {
      return this.releaseDir_armpze$_0;
    }
  });
  Object.defineProperty(collectInputs$ObjectLiteral.prototype, 'signingKey', {
    configurable: true,
    get: function () {
      return this.signingKey_57nwy2$_0;
    }
  });
  Object.defineProperty(collectInputs$ObjectLiteral.prototype, 'keyAlias', {
    configurable: true,
    get: function () {
      return this.keyAlias_boyz7j$_0;
    }
  });
  Object.defineProperty(collectInputs$ObjectLiteral.prototype, 'keyStorePassword', {
    configurable: true,
    get: function () {
      return this.keyStorePassword_eh80s3$_0;
    }
  });
  Object.defineProperty(collectInputs$ObjectLiteral.prototype, 'keyPassword', {
    configurable: true,
    get: function () {
      return this.keyPassword_bnq77a$_0;
    }
  });
  Object.defineProperty(collectInputs$ObjectLiteral.prototype, 'buildToolsVersion', {
    configurable: true,
    get: function () {
      return this.buildToolsVersion_27xubd$_0;
    }
  });
  collectInputs$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ActionInputs]
  };
  function collectInputs() {
    var tmp$, tmp$_0;
    var $receiver = getInput('releaseDir');
    var $receiver_0 = isBlank($receiver) ? $module$process.env['ANDROID_RELEASE_DIR'] : $receiver;
    var $receiver_1 = toPosixPath($receiver_0 == null || isBlank($receiver_0) ? 'app/build/outputs/apk/release' : $receiver_0);
    var releaseDir = endsWith_0($receiver_1, 47) ? $receiver_1 : $receiver_1 + '/';
    var $receiver_2 = getInput('signingKey');
    var $receiver_3 = isBlank($receiver_2) ? $module$process.env['ANDROID_SIGNING_KEY'] : $receiver_2;
    var block$result;
    if ($receiver_3 == null || isBlank($receiver_3))
      throw Exception_init('Cannot find signingKey/ANDROID_SIGNING_KEY. Check your input in workflow.');
    else {
      block$result = $receiver_3;
    }
    var $receiver_4 = block$result;
    var tmp$_1;
    var signingKeyB64 = trim(Kotlin.isCharSequence(tmp$_1 = $receiver_4) ? tmp$_1 : throwCCE()).toString();
    var signingKey = $module$path.join(releaseDir, 'key.jks');
    writeFileSync(signingKey, signingKeyB64, 'base64');
    var $receiver_5 = getInput('keyAlias');
    var $receiver_6 = isBlank($receiver_5) ? $module$process.env['ANDROID_KEY_ALIAS'] : $receiver_5;
    var block$result_0;
    if ($receiver_6 == null || isBlank($receiver_6))
      throw Exception_init('Cannot find keyAlias/ANDROID_KEY_ALIAS. Check your input in workflow.');
    else {
      block$result_0 = $receiver_6;
    }
    var keyAlias = block$result_0;
    var $receiver_7 = getInput('keyStorePassword');
    var $receiver_8 = isBlank($receiver_7) ? $module$process.env['ANDROID_KEYSTORE_PASSWORD'] : $receiver_7;
    var block$result_1;
    if ($receiver_8 == null || isBlank($receiver_8))
      throw Exception_init('Cannot find keyStorePassword/ANDROID_KEYSTORE_PASSWORD. Check your input in workflow.');
    else {
      block$result_1 = $receiver_8;
    }
    var keyStorePassword = block$result_1;
    var $receiver_9 = getInput('keyPassword');
    var keyPassword = isBlank($receiver_9) ? $module$process.env['ANDROID_KEY_PASSWORD'] : $receiver_9;
    var $receiver_10 = getInput('buildToolsVersion');
    var $receiver_11 = isBlank($receiver_10) ? $module$process.env['ANDROID_BUILD_TOOLS_VERSION'] : $receiver_10;
    var buildToolsVersion = $receiver_11 == null || isBlank($receiver_11) ? '33.0.0' : $receiver_11;
    tmp$ = [signingKey, keyStorePassword, keyPassword];
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var input = tmp$[tmp$_0];
      if (input != null) {
        setSecret(input);
      }
    }
    return new collectInputs$ObjectLiteral(releaseDir, signingKey, keyAlias, keyStorePassword, keyPassword, buildToolsVersion);
  }
  function ActionInputs() {
  }
  ActionInputs.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ActionInputs',
    interfaces: []
  };
  function collectBuildTools$ObjectLiteral(closure$zipalign, closure$apksigner, closure$jarsigner) {
    this.zipalign_1xm8rc$_0 = closure$zipalign;
    this.apksigner_1q24n6$_0 = closure$apksigner;
    this.jarsigner_gnwezh$_0 = closure$jarsigner;
  }
  Object.defineProperty(collectBuildTools$ObjectLiteral.prototype, 'zipalign', {
    configurable: true,
    get: function () {
      return this.zipalign_1xm8rc$_0;
    }
  });
  Object.defineProperty(collectBuildTools$ObjectLiteral.prototype, 'apksigner', {
    configurable: true,
    get: function () {
      return this.apksigner_1q24n6$_0;
    }
  });
  Object.defineProperty(collectBuildTools$ObjectLiteral.prototype, 'jarsigner', {
    configurable: true,
    get: function () {
      return this.jarsigner_gnwezh$_0;
    }
  });
  collectBuildTools$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [BuildTools]
  };
  function Coroutine$collectBuildTools(inputs_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$zipalign = void 0;
    this.local$apksigner = void 0;
    this.local$inputs = inputs_0;
  }
  Coroutine$collectBuildTools.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$collectBuildTools.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$collectBuildTools.prototype.constructor = Coroutine$collectBuildTools;
  Coroutine$collectBuildTools.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var isWin = equals($module$process.platform, 'win32');
            var $receiver = $module$process.env['ANDROID_HOME'];
            var block$result;
            if ($receiver == null || isBlank($receiver))
              throw Exception_init('Cannot find Android SDK installation. Please setup Android before this action.');
            else {
              block$result = $receiver;
            }

            var $receiver_0 = block$result;
            debug('Found Android SDK: ' + $receiver_0);
            var androidHome = $receiver_0;
            var $receiver_1 = $module$path.join(androidHome, 'build-tools', this.local$inputs.buildToolsVersion);
            var block$result_0;
            if (!existsSync($receiver_1))
              throw Exception_init('Cannot find Android build tools. Please setup Android before this action.');
            else {
              block$result_0 = $receiver_1;
            }

            var $receiver_2 = block$result_0;
            debug('Found Android build-tools: ' + $receiver_2);
            var buildTools = $receiver_2;
            var $receiver_3 = $module$path.join(buildTools, isWin ? 'zipalign.exe' : 'zipalign');
            var block$result_1;
            if (!existsSync($receiver_3))
              throw Exception_init('Cannot find zipalign. Please setup Android before this action.');
            else {
              block$result_1 = $receiver_3;
            }

            var $receiver_4 = block$result_1;
            debug('Found zipalign: ' + $receiver_4);
            this.local$zipalign = $receiver_4;
            var $receiver_5 = $module$path.join(buildTools, isWin ? 'apksigner.bat' : 'apksigner');
            var block$result_2;
            if (!existsSync($receiver_5))
              throw Exception_init('Cannot find apksigner. Please setup Android before this action.');
            else {
              block$result_2 = $receiver_5;
            }

            var $receiver_6 = block$result_2;
            debug('Found apksigner: ' + $receiver_6);
            this.local$apksigner = $receiver_6;
            this.state_0 = 2;
            this.result_0 = await_0(which(isWin ? 'jarsigner.exe' : 'jarsigner', false), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver_7 = this.result_0;
            var block$result_3;
            if (!existsSync($receiver_7))
              throw Exception_init('Cannot find jarsigner. Please setup JDK before this action.');
            else {
              block$result_3 = $receiver_7;
            }

            var $receiver_8 = block$result_3;
            debug('Found jarsigner: ' + $receiver_8);
            var jarsigner = $receiver_8;
            return new collectBuildTools$ObjectLiteral(this.local$zipalign, this.local$apksigner, jarsigner);
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function collectBuildTools(inputs_0, continuation_0, suspended) {
    var instance = new Coroutine$collectBuildTools(inputs_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function BuildTools() {
  }
  BuildTools.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BuildTools',
    interfaces: []
  };
  _.main = main;
  _.mainIntl = mainIntl;
  _.signApk_vbqj4o$ = signApk;
  _.signAab_vbqj4o$ = signAab;
  $$importsForInline$$['17def1782b5ee417-kotlinx-nodejs-jsLegacy'] = $module$_17def1782b5ee417_kotlinx_nodejs_jsLegacy;
  _.collectInputs = collectInputs;
  _.ActionInputs = ActionInputs;
  _.collectBuildTools_mtxrrz$ = collectBuildTools;
  _.BuildTools = BuildTools;
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('sign-android-release', _);
  return _;
}(module.exports, require('kotlin'), require('@actions/core'), require('chalk'), require('@actions/glob'), require('kotlinx-coroutines-core'), require('path'), require('process'), require('@actions/exec'), require('17def1782b5ee417-kotlinx-nodejs-jsLegacy'), require('fs'), require('@actions/io')));

//# sourceMappingURL=sign-android-release.js.map
