/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Common = __webpack_require__(1);
	
	var _Common2 = _interopRequireDefault(_Common);
	
	var _Main = __webpack_require__(112);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import DisplayTop from './Display/DisplayTop.es6';
	
	// ------------------------------------------------------------
	//
	//  Top
	//
	// ------------------------------------------------------------
	(function () {
	
	  // globalオブジェクト
	  if (window.gb === undefined) window.gb = {};
	  window.gb.in = {}; //instance
	
	  gb.in.common = new _Common2.default();
	  // gb.in.displayTop = new DisplayTop();
	  gb.in.main = new _Main2.default();
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Conf = __webpack_require__(2);
	
	var _Conf2 = _interopRequireDefault(_Conf);
	
	var _Util = __webpack_require__(4);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Func = __webpack_require__(5);
	
	var _Func2 = _interopRequireDefault(_Func);
	
	var _ReadyMgr = __webpack_require__(6);
	
	var _ReadyMgr2 = _interopRequireDefault(_ReadyMgr);
	
	var _UpdateMgr = __webpack_require__(8);
	
	var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);
	
	var _ResizeMgr = __webpack_require__(9);
	
	var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);
	
	var _ScrollMgr = __webpack_require__(10);
	
	var _ScrollMgr2 = _interopRequireDefault(_ScrollMgr);
	
	var _MouseMgr = __webpack_require__(11);
	
	var _MouseMgr2 = _interopRequireDefault(_MouseMgr);
	
	var _LoadMgr = __webpack_require__(12);
	
	var _LoadMgr2 = _interopRequireDefault(_LoadMgr);
	
	var _Pjax = __webpack_require__(18);
	
	var _Pjax2 = _interopRequireDefault(_Pjax);
	
	var _JudgeEnvironment = __webpack_require__(90);
	
	var _JudgeEnvironment2 = _interopRequireDefault(_JudgeEnvironment);
	
	var _ResponsiveSwitchImg = __webpack_require__(91);
	
	var _ResponsiveSwitchImg2 = _interopRequireDefault(_ResponsiveSwitchImg);
	
	var _SwipeTransition = __webpack_require__(92);
	
	var _SwipeTransition2 = _interopRequireDefault(_SwipeTransition);
	
	var _Menu = __webpack_require__(93);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Alert = __webpack_require__(95);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _SideR = __webpack_require__(96);
	
	var _SideR2 = _interopRequireDefault(_SideR);
	
	var _Time = __webpack_require__(98);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _ScrollTransition = __webpack_require__(99);
	
	var _ScrollTransition2 = _interopRequireDefault(_ScrollTransition);
	
	var _PageTop = __webpack_require__(87);
	
	var _PageTop2 = _interopRequireDefault(_PageTop);
	
	var _Sec01Video = __webpack_require__(14);
	
	var _Sec01Video2 = _interopRequireDefault(_Sec01Video);
	
	var _Sns = __webpack_require__(88);
	
	var _Sns2 = _interopRequireDefault(_Sns);
	
	var _SliderTop = __webpack_require__(100);
	
	var _SliderTop2 = _interopRequireDefault(_SliderTop);
	
	var _Nav = __webpack_require__(101);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var _Layout = __webpack_require__(83);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _DisplayOpening = __webpack_require__(102);
	
	var _DisplayOpening2 = _interopRequireDefault(_DisplayOpening);
	
	var _CVContents = __webpack_require__(22);
	
	var _CVContents2 = _interopRequireDefault(_CVContents);
	
	var _PageTransitionController = __webpack_require__(103);
	
	var _PageTransitionController2 = _interopRequireDefault(_PageTransitionController);
	
	var _HoverEffectSVG = __webpack_require__(86);
	
	var _HoverEffectSVG2 = _interopRequireDefault(_HoverEffectSVG);
	
	var _HoverEffectSVGLogo = __webpack_require__(107);
	
	var _HoverEffectSVGLogo2 = _interopRequireDefault(_HoverEffectSVGLogo);
	
	var _HoverEffectMenuBtn = __webpack_require__(108);
	
	var _HoverEffectMenuBtn2 = _interopRequireDefault(_HoverEffectMenuBtn);
	
	var _HoverEffectSVGArrow = __webpack_require__(109);
	
	var _HoverEffectSVGArrow2 = _interopRequireDefault(_HoverEffectSVGArrow);
	
	var _HoverEffectSNSPCFooter = __webpack_require__(110);
	
	var _HoverEffectSNSPCFooter2 = _interopRequireDefault(_HoverEffectSNSPCFooter);
	
	var _HoverEffectSVGArrowSideR = __webpack_require__(111);
	
	var _HoverEffectSVGArrowSideR2 = _interopRequireDefault(_HoverEffectSVGArrowSideR);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import HoverEffectMenuItem from '../Display/Effects/03_effects/HoverEffectMenuItem.es6';
	
	//--------------------------------------------------
	//
	//  main
	//
	//--------------------------------------------------
	var Common = function () {
	  function Common() {
	    _classCallCheck(this, Common);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(Common, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // ------------------------------------------------------------
	      //  初期値の設定・データの配置
	      //  util関数の初期化
	      //  イベントマネージャーの設置
	      // ------------------------------------------------------------
	      gb.in.conf = new _Conf2.default();
	      gb.in.u = new _Util2.default();
	      gb.in.f = new _Func2.default();
	      gb.in.up = new _UpdateMgr2.default();
	      gb.in.r = new _ResizeMgr2.default();
	      gb.in.s = new _ScrollMgr2.default();
	      gb.in.m = new _MouseMgr2.default();
	      gb.in.rm = new _ReadyMgr2.default();
	      gb.in.loadMgr = new _LoadMgr2.default();
	      gb.in.sct = new _ScrollTransition2.default();
	
	      // ------------------------------------------------------------
	      //
	      //  その他
	      //
	      // ------------------------------------------------------------
	      // pjaxの設定
	      gb.in.pjax = new _Pjax2.default();
	
	      // ------------------------------------------------------------
	      //  Layout
	      // ------------------------------------------------------------
	      gb.in.Layout = new _Layout2.default();
	
	      // 準備完了後の処理
	      gb.in.rm.onCompletedFunc = function () {
	        new _DisplayOpening2.default();
	      };
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      // ------------------------------------------------------------
	      //  デバイス・ブラウザ判定
	      //  スマホの向き判定
	      //  ページ情報取得
	      // ------------------------------------------------------------
	      gb.in.je = new _JudgeEnvironment2.default();
	      gb.in.resImg = new _ResponsiveSwitchImg2.default();
	      gb.in.sns = new _Sns2.default($('.fbShare'), $('.twShare'), $('.lineShare'), $('.onMail'));
	      gb.in.swt = new _SwipeTransition2.default();
	
	      gb.in.f.checkCssBlend();
	
	      // ------------------------------------------------------------
	      //  UI
	      // ------------------------------------------------------------
	      gb.in.menu = new _Menu2.default();
	      gb.in.nav = new _Nav2.default();
	      gb.in.sideR = new _SideR2.default();
	      gb.in.alert = new _Alert2.default();
	      gb.in.pagetop = new _PageTop2.default();
	
	      // bg
	      gb.in.sliderTop = new _SliderTop2.default($('#bgWrap .sec01'));
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	      gb.in.pageTransitionEffect = new _PageTransitionController2.default($('#pageTransitionLayer'));
	      gb.in.sec01Video = new _Sec01Video2.default();
	      gb.in.Sec02Bg = new _CVContents2.default();
	
	      gb.in.he01 = new _HoverEffectSVG2.default($('.SVGHover'), '#fff', '#000');
	      gb.in.he02 = new _HoverEffectSVG2.default($('.SVGHoverW'), '#81d8d0', '#fff');
	      gb.in.he03 = new _HoverEffectSVG2.default($('.SVGHoverW02'), '#81d8d0', '#000');
	      gb.in.he04 = new _HoverEffectSVGLogo2.default($('#header .logo, #header .subTit'));
	      // gb.in.he05 = new HoverEffectMenuItem($('#menu .menuList .item'));
	      gb.in.he06 = new _HoverEffectSVGArrowSideR2.default($('#sideR .next'));
	      // gb.in.he07 = new HoverEffectMenuBtn($('.menuBtn01'));
	      gb.in.he08 = new _HoverEffectSNSPCFooter2.default($('#sideL .sns.sp'));
	
	      // logo 出す
	      TweenMax.to($('#header .logo'), 2.2, { opacity: 1, ease: Power2.easeInOut });
	
	      gb.in.loadMgr.start();
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //
	      //  Func
	      //
	      // ------------------------------------------------------------
	
	
	      // ------------------------------------------------------------
	      //
	      //  Layout
	      //
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //
	      //  Dispaly
	      //
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //
	      //  Motion
	      //
	      // ------------------------------------------------------------
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Common;
	}();
	
	exports.default = Common;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // ------------------------------------------------------------
	//
	//  Config
	//
	// ------------------------------------------------------------
	
	var _Sound = __webpack_require__(3);
	
	var _Sound2 = _interopRequireDefault(_Sound);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Conf = function () {
	  function Conf() {
	    _classCallCheck(this, Conf);
	
	    // ------------------------------------------------------------
	    //  本番フラグ
	    // ------------------------------------------------------------    
	    this.RELEASE = true;
	    // this.RELEASE = false;
	
	    // ------------------------------------------------------------
	    //  フラグ関連
	    // ------------------------------------------------------------
	    this.FLG = {
	      LOG: true, // ログ出力
	      PARAM: true, // パラメータチェック
	      STATS: true // Stats表示
	    };
	    if (!this.RELEASE) {
	      this.FLG = {
	        LOG: false,
	        PARAM: false,
	        STATS: false
	      };
	    }
	
	    // ------------------------------------------------------------
	    //  基本 width height
	    // ------------------------------------------------------------
	    this.defW = 1300;
	    this.defH = 850;
	
	    this.W = 1200;
	    this.H = 750;
	
	    this.spW = 375;
	    this.spH = 667;
	
	    // ------------------------------------------------------------
	    //  ブレイクポイント
	    // ------------------------------------------------------------
	    this.bp = 768;
	
	    // ------------------------------------------------------------
	    //  mode
	    // ------------------------------------------------------------
	    this.mode = null;
	    this.keys = [{
	      'key': 'movie',
	      'value': ['morning', 'afternoon', 'night']
	    }, {
	      'key': 'data',
	      'value': ['data01', 'data02', 'data03']
	    }, {
	      'key': 'product',
	      'value': ['01']
	    }];
	    this.switchMode();
	
	    // ------------------------------------------------------------
	    //  sound data
	    // ------------------------------------------------------------
	    this.soundData = new _Sound2.default();
	
	    // ------------------------------------------------------------
	    //  sec02 bg Img Num
	    // ------------------------------------------------------------
	    this.sec02ImgNum = 396;
	
	    // ------------------------------------------------------------
	    //  youtube ID
	    // ------------------------------------------------------------
	    this.youtubeID01 = 'xW2oNpNrKd0';
	    this.youtubeID02 = 't2WeRRdAFeI';
	
	    // ------------------------------------------------------------
	    //  web font loaded
	    // ------------------------------------------------------------
	    this.webFontLoaded = false;
	  }
	
	  _createClass(Conf, [{
	    key: 'switchMode',
	    value: function switchMode() {
	
	      var i, key, len, param, ref, ref1, value;
	
	      ref = location.search.replace('?', '').split('&');
	
	      for (i = 0, len = ref.length; i < len; i++) {
	        param = ref[i];
	        ref1 = param.split('='), key = ref1[0], value = ref1[1];
	
	        for (var j = 0; j < this.keys.length; j++) {
	
	          var obj = this.keys[j];
	
	          // パラメータがキーと一緒だったら
	          if (obj.key === key) {
	
	            // 各値と比較
	            for (var k = 0; k < obj.value.length; k++) {
	
	              var val = obj.value[k];
	
	              // キーをthis.keysのkeyに、valueを比較して同値だったものに
	              if (val === value) this[obj.key] = val;
	            };
	          };
	        };
	      }
	    }
	  }]);
	
	  return Conf;
	}();
	
	exports.default = Conf;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Data
	//
	// ------------------------------------------------------------
	
	var SoundData = function SoundData() {
	
	  // this.ATARI01 = '/project-name/assets/sound/atari/Atari_04.wav';
	  // this.ATARI02 = '/project-name/assets/sound/atari/Atari_05.wav';
	
	  // this.BAN01 = '/project-name/assets/sound/don/Ba-n_01.wav';
	  // this.BAN02 = '/project-name/assets/sound/don/Ba-n_02.wav';
	  // this.BAN03 = '/project-name/assets/sound/don/Ba-n_03.wav';
	  // this.BAN04 = '/project-name/assets/sound/don/Ba-n_04.wav';
	
	  // this.DON01 = '/project-name/assets/sound/don/Big_Don_01.wav';
	  // this.DON02 = '/project-name/assets/sound/don/Big_Don_02.wav';
	  // this.DON03 = '/project-name/assets/sound/don/Big_Don_03.wav';
	  // this.DON04 = '/project-name/assets/sound/don/Don_04.wav';
	
	  // this.DODN01 = '/project-name/assets/sound/don/Dodon_01.wav';
	  // this.DODN02 = '/project-name/assets/sound/don/Dodon_02.wav';
	
	  // this.Gogogo01 = '/project-name/assets/sound/don/Gogogo_01.wav';
	  // this.Gogogo02 = '/project-name/assets/sound/don/Gogogo_02.wav';
	
	  // this.IKARI = '/project-name/assets/sound/ikari/Ikari_01.wav';
	
	  // this.ROULETTE01 = '/project-name/assets/sound/roulette/Roulette_01.wav';
	  // this.ROULETTE02 = '/project-name/assets/sound/roulette/Roulette_02.wav';
	  // this.ROULETTE03 = '/project-name/assets/sound/roulette/Roulette_03.wav';
	
	  // this.SEA = '/project-name/assets/sound/sea/Sea&kamome_01.wav';
	
	  _classCallCheck(this, SoundData);
	};
	
	exports.default = SoundData;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Util
	//
	// ------------------------------------------------------------
	
	var Util = function () {
	  function Util() {
	    _classCallCheck(this, Util);
	
	    this.ua = window.navigator.userAgent.toLowerCase(); //useragent
	    this.appV = window.navigator.appVersion.toLowerCase(); //appVersion
	    this.isResSP = null; // responsive sp
	    this.isResPC = null; // responsive pc
	
	    this.isPC = null;
	    this.isSP = null;
	    this.isTAB = null;
	    this.isMB = null;
	
	    this.isIE = null;
	
	    this.isSetSPSize = false;
	
	    this.startTime = null;
	    this.elapsedTime = null;
	    this.now = new Date();
	  }
	
	  // ------------------------------------------------------------
	  //
	  //  Math
	  //
	  // ------------------------------------------------------------
	
	
	  // ランダムな整数を取得
	  // -----------------------------------
	  // @min : 最小値(int)
	  // @max : 最大値(int)
	  // return : minからmaxまでのランダムな整数(int)
	  // -----------------------------------
	
	
	  _createClass(Util, [{
	    key: "random",
	    value: function random(min, max) {
	
	      return Math.floor(Math.random() * (max + 1 - min) + min);
	    }
	
	    // ランダムな整数を2つの範囲から取得
	    // -----------------------------------
	    // @min1 : 最小値1(int)
	    // @max1 : 最大値1(int)
	    // @min2 : 最小値2(int)
	    // @max2 : 最大値2(int)
	    // return : minからmaxまでのランダムな整数(int)
	    // -----------------------------------
	
	  }, {
	    key: "random2",
	    value: function random2(min1, max1, min2, max2) {
	
	      if (this.hit(2)) {
	        return this.random(min1, max1);
	      } else {
	        return this.random(min2, max2);
	      }
	    }
	
	    // 1/@rangeの確率でtrueを取得
	    // -----------------------------------
	    // @range : 母数(int)
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "hit",
	    value: function hit(range) {
	
	      return this.random(0, range - 1) === 0;
	    }
	
	    // 0から範囲内でランダムな整数を取得
	    // -----------------------------------
	    // @val : 範囲(int)
	    // return : ランダムな整数(int)
	    // -----------------------------------
	
	  }, {
	    key: "range",
	    value: function range(val) {
	
	      return this.random(-val, val);
	    }
	
	    // 値をマッピング
	    // -----------------------------------
	    // @num : マッピングする値(Number)
	    // @resMin : 結果となる値の最小値(Number)
	    // @resMax : 結果となる値の最大値(Number)
	    // @baseMin : 元となる値の最小値(Number)
	    // @baseMax : 元となる値の最大値(Number)
	    // return : マッピングされた値(Number)
	    // -----------------------------------
	
	  }, {
	    key: "map",
	    value: function map(num, resMin, resMax, baseMin, baseMax) {
	
	      var p;
	      if (num < baseMin) {
	        return resMin;
	      }
	      if (num > baseMax) {
	        return resMax;
	      }
	      p = (resMax - resMin) / (baseMax - baseMin);
	
	      return (num - baseMin) * p + resMin;
	    }
	
	    // 数値に小数点第@n位までをつけた文字列を返す
	    // -----------------------------------
	    // @num : 値(Number)
	    // @n : 小数点の位(int)
	    // return : 変換された値(String)
	    // -----------------------------------
	
	  }, {
	    key: "decimal",
	    value: function decimal(num, n) {
	      var i, pos;
	      num = String(num);
	      pos = num.indexOf(".");
	      if (n === 0) {
	        return num.split(".")[0];
	      }
	      if (pos === -1) {
	        num += ".";
	        i = 0;
	        while (i < n) {
	          num += "0";
	          i++;
	        }
	        return num;
	      }
	      num = num.substr(0, pos) + num.substr(pos, n + 1);
	      return num;
	    }
	  }, {
	    key: "clamp",
	    value: function clamp(numerator, denominator, val) {
	
	      return val * (numerator / denominator);
	    }
	  }, {
	    key: "degree",
	    value: function degree(radians) {
	
	      return radians * 180 / Math.PI; //1ラジアンが何度か
	    }
	
	    // to radians
	
	  }, {
	    key: "radian",
	    value: function radian(angle) {
	
	      return angle * Math.PI / 180; //1度何ラジアンか
	    }
	  }, {
	    key: "dist",
	    value: function dist(p1, p2) {
	
	      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	    }
	  }, {
	    key: "ascend",
	    value: function ascend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a > b) return -1;
	        if (a < b) return 1;
	        return 0;
	      });
	      // var a = [5,3,9,1,10]
	      // 結果:10,9,5,3,1
	    }
	  }, {
	    key: "descend",
	    value: function descend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a < b) return -1;
	        if (a > b) return 1;
	        return 0;
	      });
	
	      // var a = [5,3,9,1,10]
	      // 結果:1,3,5,9,10
	    }
	
	    // map(value, min01, max01, min02, max02) {
	
	    //   var dis01 = max01 - min01;
	    //   var dis02 = max02 - min02
	
	    //   var rate = dis02 / dis01;
	
	    //   value = value * rate;
	
	    //   return value;
	    // }
	
	  }, {
	    key: "constrain",
	    value: function constrain(value, min, max) {
	
	      return Math.min(max, Math.max(value, min));
	
	      // if (value <= low) value = low;
	      // if (value >= high) value = high;     
	      // return value;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Array
	    //
	    // ------------------------------------------------------------
	
	    // 配列内のランダムな値をひとつ取得
	    // -----------------------------------
	    // @arr : 配列
	    // return : 配列内の値
	    // -----------------------------------
	
	  }, {
	    key: "arrRand",
	    value: function arrRand(arr) {
	
	      return arr[this.random(0, arr.length - 1)];
	    }
	
	    // 配列をランダムに並べ替え
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // -----------------------------------
	
	  }, {
	    key: "shuffle",
	    value: function shuffle(ary) {
	
	      var arr = [];
	      arr = ary.slice();
	      var i = arr.length;
	      while (i) {
	        var j = Math.floor(Math.random() * i);
	        var t = arr[--i];
	        arr[i] = arr[j];
	        arr[j] = t;
	      }
	      return arr;
	    }
	
	    // ランダムな数値を作る
	
	  }, {
	    key: "randomArr",
	    value: function randomArr(len) {
	
	      var arr = new Array();
	
	      for (var i = 0; i < len; i++) {
	        arr.push(i);
	      }arr = this.shuffleAry(arr);
	
	      return arr;
	    }
	
	    // nullを削除した配列を返す
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // return : null削除した配列(Array)
	    // -----------------------------------
	
	  }, {
	    key: "sliceNull",
	    value: function sliceNull(arr) {
	
	      var i, l, len1, newArr, val;
	      newArr = [];
	      for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
	        val = arr[i];
	        if (val !== null) {
	          newArr.push(val);
	        }
	      }
	      return newArr;
	    }
	
	    // 配列内のパラメータを比較してソート
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // @para : パラメーター名
	    // @desc : 降順かどうか(boolean) デフォルトは昇順
	    // -----------------------------------
	
	  }, {
	    key: "sort",
	    value: function sort(arr, para, desc) {
	      if (desc === void 0) {
	        desc = false;
	      }
	      if (desc) {
	        return arr.sort(function (a, b) {
	          return b[para] - a[para];
	        });
	      } else {
	        return arr.sort(function (a, b) {
	          return a[para] - b[para];
	        });
	      }
	    }
	  }, {
	    key: "getKey",
	    value: function getKey(list, value) {
	      var returnKey = [];
	      for (var key in list) {
	        if (list[key] == value) {
	          returnKey.push(key);
	        }
	      }
	      return returnKey;
	    }
	
	    // ユニークIDを取得
	    // -----------------------------------
	
	  }, {
	    key: "unique",
	    value: function unique() {
	
	      return new Date().getTime();
	    }
	
	    // **jquary使用
	    // ボタンモード変更
	    // trueならカーソルがポインターの形に
	    // falseならデフォルトのカーソルに
	    // -----------------------------------
	    // @flg : 適用するかどうか(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "buttonMode",
	    value: function buttonMode(flg) {
	
	      if (flg) {
	        return $("body").css("cursor", "pointer");
	      } else {
	        return $("body").css("cursor", "default");
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  device
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isDeviceSP",
	    value: function isDeviceSP() {
	
	      var media = ["iphone", "ipod", "ipad", "android", "dream", "cupcake", "blackberry9500", "blackberry9530", "blackberry9520", "blackberry9550", "blackberry9800", "webos", "incognito", "webmate"];
	      var pattern = new RegExp(media.join("|"), "i");
	
	      var b = pattern.test(this.ua);
	      if (b) $('body').addClass('isDeviceSP');
	
	      this.isSP = b;
	    }
	  }, {
	    key: "isDeviceTAB",
	    value: function isDeviceTAB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("touch") != -1 || this.ua.indexOf("ipad") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") == -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("tablet") != -1 || this.ua.indexOf("kindle") != -1 || this.ua.indexOf("silk") != -1 || this.ua.indexOf("playbook") != -1;
	      if (b) $('body').addClass('isDeviceTAB');
	
	      this.isTAB = b;
	    }
	  }, {
	    key: "isDeviceMB",
	    value: function isDeviceMB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("phone") != -1 || this.ua.indexOf("iphone") != -1 || this.ua.indexOf("ipod") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("blackberry") != -1;
	      if (b) $('body').addClass('isDeviceMB');
	
	      this.isMB = b;
	    }
	  }, {
	    key: "isDevicePC",
	    value: function isDevicePC() {
	
	      if (!(this.isSP || this.isTAB || this.isMB)) {
	
	        $('body').addClass('isDevicePC');
	        this.isPC = true;
	        return;
	      }
	
	      this.isPC = false;
	    }
	
	    // スマフォ判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isSmt",
	    value: function isSmt() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;
	    }
	
	    // タブレット端末かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isTablet",
	    value: function isTablet() {
	
	      return this.isIpad() || this.isAndroid() && navigator.userAgent.indexOf('Mobile') === -1;
	    }
	
	    // iPad判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIpad",
	    value: function isIpad() {
	
	      return navigator.userAgent.indexOf('iPad') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  OS
	    //
	    // ------------------------------------------------------------
	
	    // Android判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isAndroid",
	    value: function isAndroid() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('BlackBerry') > 0 || u.indexOf('Android') > 0 || u.indexOf('Windows Phone') > 0;
	    }
	  }, {
	    key: "isiPhone",
	    value: function isiPhone() {
	      var pattern = new RegExp("iphone", "i");
	      return pattern.test(this.ua);
	    }
	
	    // iOS判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIos",
	    value: function isIos() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0;
	    }
	
	    // PS3判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isPs3",
	    value: function isPs3() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PLAYSTATION 3') > 0;
	    }
	
	    // VITA判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isVita",
	    value: function isVita() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PlayStation Vita') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  browser
	    //
	    // ------------------------------------------------------------
	    // IEかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe",
	    value: function isIe() {
	
	      var ua;
	      ua = window.navigator.userAgent.toLowerCase();
	      return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;
	    }
	
	    // WINかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isWin",
	    value: function isWin() {
	
	      return navigator.platform.indexOf("Win") !== -1;
	    }
	
	    // googleChromeかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isChrome",
	    value: function isChrome() {
	
	      return navigator.userAgent.indexOf('Chrome') > 0;
	    }
	
	    // FireFoxかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isFF",
	    value: function isFF() {
	
	      return window.navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
	    }
	  }, {
	    key: "isSafari",
	    value: function isSafari() {
	
	      if (this.ua.indexOf("chrome") != -1) return false;
	      if (this.ua.indexOf("lunascape") != -1) return false;
	      var pattern = new RegExp("safari", "i");
	      return pattern.test(this.ua);
	    }
	  }, {
	    key: "isOpera",
	    value: function isOpera() {
	
	      var pattern = new RegExp("opera", "i");
	      return pattern.test(this.ua);
	    }
	
	    // iOSのsafari以外かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIOSUiView",
	    value: function isIOSUiView() {
	
	      var a;
	      a = window.navigator.userAgent.toLowerCase();
	      return this.isIos() && a.indexOf('safari') === -1 || this.isIos() && a.indexOf('crios') > 0 || this.isIos() && a.indexOf('gsa') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  version
	    //
	    // ------------------------------------------------------------
	    // IE8以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe8Under",
	    value: function isIe8Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 8 && msie !== 0;
	    }
	
	    // IE9以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe9Under",
	    value: function isIe9Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 9 && msie !== 0;
	    }
	
	    // IE10以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe10Under",
	    value: function isIe10Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 10 && msie !== 0;
	    }
	
	    // IE11以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe11Under",
	    value: function isIe11Under() {
	
	      var b = this.isIe10Under() || this.ua.indexOf("trident") != -1;
	      return b;
	      // return true;
	    }
	
	    // edgeかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isEdge",
	    value: function isEdge() {
	
	      log(this.ua.indexOf("AppleWebkit"), this.ua.indexOf("Edge"), this.ua, this.appV);
	      var b = this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1;
	      return b;
	      // return true;
	    }
	  }, {
	    key: "isIEVersion",
	    value: function isIEVersion() {
	
	      $('body').addClass('ie');
	      this.isIE = true;
	
	      if (this.appV.indexOf("msie 10.") != -1) {
	        $('body').addClass('ie10');
	        return 'ie10';
	      } else if (this.appV.indexOf("msie 9.") != -1) {
	        $('body').addClass('ie9');
	        return 'ie9';
	      } else if (this.appV.indexOf("msie 8.") != -1) {
	        $('body').addClass('ie8');
	        return 'ie8';
	      } else if (this.appV.indexOf("msie 7.") != -1) {
	        $('body').addClass('ie7');
	        return 'ie7';
	      } else if (this.appV.indexOf("msie 6.") != -1) {
	        $('body').addClass('ie6');
	        return 'ie6';
	      } else if (this.appV.indexOf("trident") != -1) {
	        $('body').addClass('ie11');
	        this.isIE11 = true;
	        return 'ie11';
	      } else if (this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1) {
	        $('body').addClass('isEdge');
	        return 'edge';
	      }
	
	      $('body').removeClass('ie');
	      this.isIE = false;
	    }
	  }, {
	    key: "isAndroidVersion",
	    value: function isAndroidVersion() {
	
	      if (this.ua.indexOf("android") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("android") + 8));
	        return version;
	      }
	    }
	  }, {
	    key: "isiphoneVersion",
	    value: function isiphoneVersion() {
	
	      if (this.ua.indexOf("iPhone OS") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("iPhone OS") + 10));
	        return version;
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  portrait / landscape
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isDirection",
	    value: function isDirection() {
	
	      var W = window.innerWidth,
	          H = window.innerHeight;
	
	      if (H > W) {
	        $("body").addClass("portrait");
	        $("body").removeClass("landscape");
	      } else {
	        $("body").addClass("landscape");
	        $("body").removeClass("portrait");
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  responsive 横幅を見る
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isResponsive",
	    value: function isResponsive(bp) {
	
	      if (bp == undefined) bp = 375;
	
	      var W = window.innerWidth,
	          H = window.innerHeight;
	
	      if (W > bp) {
	        this.isResSP = false;
	        this.isResPC = true;
	        $('body').removeClass('isResponsiveSP');
	        $('body').addClass('isResponsivePC');
	      } else {
	        this.isResSP = true;
	        this.isResPC = false;
	        $('body').addClass('isResponsiveSP');
	        $('body').removeClass('isResponsivePC');
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  URL
	    //
	    // ------------------------------------------------------------
	
	    // クエリ抜き出し
	    // -----------------------------------
	    // @key : 抜き出すパラメータ名(String)
	    // -----------------------------------
	    // getQuery(key) {
	
	    //   var qs, regex;
	    //   key = key.replace(/[€[]/, "€€€[").replace(/[€]]/, "€€€]");
	    //   regex = new RegExp("[€€?&]" + key + "=([^&#]*)");
	    //   qs = regex.exec(window.location.href);
	    //   if (qs === null) {
	    //     return "";
	    //   } else {
	    //     return qs[1];
	    //   }
	
	    // }
	
	  }, {
	    key: "getParam",
	    value: function getParam() {
	
	      var url = location.href;
	      var param = url.split('?')[1];
	      if (param == undefined) return undefined;
	      var paramItems = param.split('&');
	      var list = {};
	
	      for (var i = 0; i < paramItems.length; i++) {
	
	        paramItem = paramItems[i].split('=');
	        list[paramItem[0]] = paramItem[1];
	      }
	
	      return list;
	    }
	
	    // ハッシュ取得
	    // -----------------------------------
	    // return : location.hashの#を削除したやつ
	    // -----------------------------------
	
	  }, {
	    key: "hash",
	    value: function hash() {
	
	      return location.hash.replace("#", "");
	    }
	
	    // cookie取得
	    // -----------------------------------
	    // @key : パラメータ名
	    // -----------------------------------
	
	  }, {
	    key: "getCookie",
	    value: function getCookie(key) {
	
	      var a, arr, i, l, len1, val;
	      if (document.cookie === void 0 || document.cookie === null) {
	        return null;
	      }
	      arr = document.cookie.split("; ");
	      for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
	        val = arr[i];
	        a = val.split("=");
	        if (a[0] === key) {
	          return a[1];
	        }
	      }
	      return null;
	    }
	
	    // cookie設定
	    // -----------------------------------
	    // @key : パラメータ名
	    // @val : 値
	    // -----------------------------------
	
	  }, {
	    key: "setCookie",
	    value: function setCookie(key, val) {
	
	      return document.cookie = key + "=" + val;
	    }
	  }, {
	    key: "isPCSP",
	    value: function isPCSP() {
	
	      var url = location.href;
	
	      if (!this.isPC && !this.isTAB && url.indexOf('pc') != -1) {
	
	        location.href = '/op_golden';
	      }
	
	      if (this.isPC && url.indexOf('pc') == -1) {
	
	        location.href = '/op_golden/pc/';
	      }
	
	      if (this.isTAB && url.indexOf('pc') == -1) {
	
	        location.href = '/op_golden/pc/';
	      }
	
	      if (this.isContain(url, 'roulette')) location.href = '/op_golden';
	      if (this.isContain(url, 'topics')) location.href = '/op_golden';
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Color
	    //
	    // ------------------------------------------------------------
	
	    // rgbからHEXカラー取得
	    // -----------------------------------
	    // @r : 0~255
	    // @g : 0~255
	    // @b : 0~255
	    // return : ex "#FFFFFF"
	    // -----------------------------------
	
	  }, {
	    key: "getHexColor",
	    value: function getHexColor(r, g, b) {
	      var str;
	      str = (r << 16 | g << 8 | b).toString(16);
	      return "#" + new Array(7 - str.length).join("0") + str;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  String
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isContain",
	    value: function isContain(str, contain) {
	
	      // strの中に,containが存在したら
	      if (str.indexOf(contain) != -1) {
	        return true;
	      }
	
	      return false;
	    }
	
	    // 0埋めで2桁にする関数
	
	  }, {
	    key: "add0",
	    value: function add0(str) {
	      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -2;
	
	
	      return ("000000000000" + str).substr(num);
	    }
	  }, {
	    key: "floatFormat",
	    value: function floatFormat(number, n) {
	
	      var _pow = Math.pow(10, n);
	      return Math.round(number * _pow) / _pow;
	    }
	
	    // 値段表記
	    // -----------------------------------
	
	  }, {
	    key: "price",
	    value: function price(num) {
	
	      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
	    }
	
	    // 文字列を反転
	    // -----------------------------------
	    // @str : 文字列(String)
	    // return : 文字列(String)
	    // -----------------------------------
	
	  }, {
	    key: "strReverse",
	    value: function strReverse(str) {
	
	      var i, len, res;
	      res = "";
	      len = str.length;
	      i = 1;
	      while (i <= len) {
	        res += str.substr(-i, 1);
	        i++;
	      }
	      return res;
	    }
	
	    // 文字列の全置換
	    // -----------------------------------
	    // @val  : 文字列
	    // @oeg  : 置換前の文字列
	    // @dest : 置換後の文字列
	    // -----------------------------------
	
	  }, {
	    key: "replaceAll",
	    value: function replaceAll(val, org, dest) {
	
	      return val.split(org).join(dest);
	    }
	  }, {
	    key: "strReplace",
	    value: function strReplace(str, before, after) {
	
	      var r = new RegExp(before, 'g');
	
	      return str.replace(r, after);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Date
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "getNow",
	    value: function getNow() {
	
	      this.now = new Date();
	    }
	  }, {
	    key: "start",
	    value: function start() {
	
	      this.startTime = this.now.getTime();
	    }
	  }, {
	    key: "elapsed",
	    value: function elapsed() {
	
	      this.elapsedTime = this.now.getTime() - this.startTime;
	    }
	  }, {
	    key: "m",
	    value: function m() {
	
	      return Math.floor(this.elapsedTime + 100 / 60);
	    }
	  }, {
	    key: "s",
	    value: function s() {
	
	      return Math.floor(this.elapsedTime / 1000);
	    }
	  }, {
	    key: "ms",
	    value: function ms() {
	
	      return this.elapsedTime;
	    }
	  }, {
	    key: "time",
	    value: function time() {
	
	      this.getNow();
	
	      this.hour = this.now.getHours(); // 時
	      this.minute = this.now.getMinutes(); // 分
	      this.second = this.now.getSeconds();
	      this.millSecond = this.now.getMilliseconds();
	    }
	  }, {
	    key: "date",
	    value: function date() {
	
	      return this.now.getDate();
	    }
	  }, {
	    key: "months",
	    value: function months() {
	
	      var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	
	      return this.now.getMonth() + 1;
	    }
	  }, {
	    key: "year",
	    value: function year() {
	
	      return this.now.getFullYear();
	    }
	  }, {
	    key: "day",
	    value: function day() {
	
	      // 曜日 (日本語)
	      var weekDayJP = ["日", "月", "火", "水", "木", "金", "土"];
	      var wDJ = weekDayJP[this.now.getDay()];
	
	      // 曜日 (英語)
	      var weekDayEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	      var wDE = weekDayEN[this.now.getDay()];
	    }
	
	    // 数日後のDateオブジェクト取得
	    // -----------------------------------
	
	  }, {
	    key: "afterDay",
	    value: function afterDay(date, num) {
	
	      return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Data type check
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isObject",
	    value: function isObject(value, ignoreArray) {
	      return (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && value !== null;
	    }
	  }, {
	    key: "isNumber",
	    value: function isNumber(value) {
	      return typeof value === 'number';
	    }
	  }, {
	    key: "isString",
	    value: function isString(value) {
	      return typeof value === 'string';
	    }
	  }, {
	    key: "isFunction",
	    value: function isFunction(value) {
	      return typeof value === 'function';
	    }
	  }, {
	    key: "isArray",
	    value: function isArray(value) {
	      return Object.prototype.toString.call(value) === '[object Array]';
	    }
	  }, {
	    key: "isNull",
	    value: function isNull(value) {
	      return value === null;
	    }
	  }, {
	    key: "isUndefined",
	    value: function isUndefined(value) {
	      return typeof value === 'undefined';
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  other
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "setImgSPSize",
	    value: function setImgSPSize($target) {
	
	      // responsive spのとき処理
	      if (!this.isResSP) return;
	      // 一度だけ処理
	      // if (this.isSetSPSize) return;
	      // this.isSetSPSize = true;
	
	      var $img = $target,
	          len = $img.length;
	
	      $img.each(function (i) {
	
	        var w = Math.floor($(this).width() / 2),
	            h = Math.floor($(this).height() / 2);
	
	        $(this).attr({
	          'width': w,
	          'height': h
	        });
	
	        if (len == i + 1) $(window).trigger('setSpZieEnd');
	      });
	    }
	
	    // ------------------------------------------------------------
	    //  スマホ操作無効
	    // ------------------------------------------------------------
	
	  }, {
	    key: "setPrevent",
	    value: function setPrevent() {
	
	      var self = this;
	
	      $(window).on('touchmove.noControl', function (e) {
	        e.preventDefault();
	      });
	    }
	  }, {
	    key: "removePrevent",
	    value: function removePrevent() {
	
	      $(window).off('touchmove.noControl');
	    }
	
	    // ------------------------------------------------------------
	    //  host,protcol
	    // ------------------------------------------------------------
	
	  }, {
	    key: "protocol",
	    value: function protocol() {
	
	      return location.protocol;
	    }
	  }, {
	    key: "host",
	    value: function host() {
	
	      return location.hostname;
	      // return location.host
	    }
	  }, {
	    key: "port",
	    value: function port() {
	
	      return location.port;
	    }
	  }, {
	    key: "path",
	    value: function path() {
	
	      return location.pathname;
	    }
	  }, {
	    key: "preventDefault",
	    value: function preventDefault(e) {
	
	      e = e || window.event;
	      if (e.preventDefault) e.preventDefault();
	      e.returnValue = false;
	    }
	  }, {
	    key: "preventDefaultForScrollKeys",
	    value: function preventDefaultForScrollKeys(e) {
	
	      if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	      }
	    }
	  }, {
	    key: "disableScroll",
	    value: function disableScroll() {
	
	      if (window.addEventListener) // older FF
	        window.addEventListener('DOMMouseScroll', this.preventDefault, false);
	      window.onwheel = this.preventDefault; // modern standard
	      window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
	      window.ontouchmove = this.preventDefault; // mobile
	      document.onkeydown = this.preventDefaultForScrollKeys;
	    }
	  }, {
	    key: "enableScroll",
	    value: function enableScroll() {
	
	      if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
	      window.onmousewheel = document.onmousewheel = null;
	      window.onwheel = null;
	      window.ontouchmove = null;
	      document.onkeydown = null;
	    }
	  }]);
	
	  return Util;
	}();
	
	exports.default = Util;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Func
	//
	// ------------------------------------------------------------
	
	var Func = function () {
	  function Func() {
	    _classCallCheck(this, Func);
	
	    this.blank();
	    this.debugger();
	    this.requestAnimationFrame();
	    this.expandjQuery();
	  }
	
	  _createClass(Func, [{
	    key: 'blank',
	    value: function blank() {
	
	      $(function () {
	        $('.blank').attr('target', '_blank');
	      });
	    }
	  }, {
	    key: 'debugger',
	    value: function _debugger() {
	
	      // デバッグモード切替
	      var RELEASE = gb.in.conf.RELEASE;
	
	      // 置換対象のメソッドを配列として保持する
	      var methods = ['log', 'debug', 'info', 'warn', 'error', 'dir', 'trace', 'assert', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'profile', 'profileEnd'];
	
	      // consoleが使えない場合は空のオブジェクトを設定しておく
	      if (typeof window.console === "undefined") {
	        window.console = {};
	      }
	
	      // 各メソッドをwindowへ直接追加して行く
	      for (var i in methods) {
	        (function (m) {
	
	          // consoleにある？デバッグモードは有効？consoleのものは関数？
	          if (console[m] && !RELEASE && typeof console[m] === "function") {
	            window[m] = console[m].bind(console);
	          } else {
	            // debugModeがfalse,もしくは該当メソッドが存在しない場合は、空のメソッドを用意する
	            window[m] = function () {};
	          }
	        })(methods[i]);
	      }
	    }
	  }, {
	    key: 'prepend',
	    value: function prepend(param) {
	
	      $('body').prepend(param);
	    }
	  }, {
	    key: 'requestAnimationFrame',
	    value: function requestAnimationFrame() {
	
	      var FPS = 1000 / 60;
	
	      window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
	      window.mozRequestAnimationFrame || // 古いfirefox用
	      window.webkitRequestAnimationFrame || // safari6以前、iOS6 safari用
	      function (callback) {
	        window.setTimeout(callback, FPS);
	      };
	
	      window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function (timer) {
	        window.clearTimeout(timer);
	      };
	    }
	  }, {
	    key: 'expandjQuery',
	    value: function expandjQuery() {
	
	      jQuery.fn.extend({
	        w: 0,
	        h: 0,
	        adjust: function adjust() {
	          var w = $(this).innerWidth();
	          var h = $(this).innerHeight();
	          $(this).css({
	            'position': 'absolute',
	            'left': '50%',
	            'top': '50%',
	            'margin-left': '-' + w / 2 + 'px',
	            'margin-top': '-' + h / 2 + 'px'
	          });
	        },
	        adjustW: function adjustW() {
	          var w = $(this).innerWidth();
	          var h = $(this).innerHeight();
	          $(this).css({
	            'position': 'absolute',
	            'left': '50%',
	            'margin-left': '-' + w / 2 + 'px'
	          });
	        },
	        adjustH: function adjustH() {
	          var w = $(this).innerWidth();
	          var h = $(this).innerHeight();
	          $(this).css({
	            'position': 'absolute',
	            'top': '50%',
	            'margin-top': '-' + h / 2 + 'px'
	          });
	        }
	      });
	    }
	  }, {
	    key: 'checkCssBlend',
	    value: function checkCssBlend() {
	
	      if ('CSS' in window && 'supports' in window.CSS) {
	        if (!window.CSS.supports('mix-blend-mode', 'soft-light')) {
	          document.documentElement.classList.add('not-mix-blend-mode');
	        }
	      }
	
	      log(gb.in.u.isIE);
	
	      if (gb.in.u.isIE) {
	
	        document.documentElement.classList.add('not-mix-blend-mode');
	      };
	    }
	  }, {
	    key: 'notSaveImg',
	    value: function notSaveImg() {
	
	      // ------------------------------------------------------------
	      //
	      //  pc
	      //
	      // ------------------------------------------------------------
	
	      if (gb.in.u.isPC) {
	
	        $(function () {
	          $("img").on("contextmenu", function () {
	            return false;
	          });
	        });
	      }
	
	      // ------------------------------------------------------------
	      //
	      //  sp android
	      //
	      // ------------------------------------------------------------
	      var v = gb.in.u.isAndroidVersion();
	
	      if (v == undefined) return;
	      if (v < 5) {
	
	        var timer;
	        $("img").on("touchstart", function () {
	          timer = setTimeout(function () {
	            alert("画像は保存できません");
	          }, 500);
	          return false;
	        });
	        $("img").on("touchend", function () {
	          clearTimeout(timer);
	          return false;
	        });
	      }
	    }
	  }]);
	
	  return Func;
	}();
	
	exports.default = Func;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  ReadyMgr
	//
	//--------------------------------------------------
	
	var _ReadyPercent = __webpack_require__(7);
	
	var _ReadyPercent2 = _interopRequireDefault(_ReadyPercent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ReadyMgr = function () {
	  function ReadyMgr() {
	    _classCallCheck(this, ReadyMgr);
	
	    this.completed = 0;
	    this.total = 0;
	    this.current = 0;
	
	    this.onCompletedFunc = function () {};
	
	    this.setEvents();
	  }
	
	  _createClass(ReadyMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.readyPercent = new _ReadyPercent2.default();
	    }
	  }, {
	    key: 'onComplete',
	    value: function onComplete() {
	
	      // update処理をやめる
	      gb.in.up.remove('readyPercent', this.readyPercent.update.bind(this));
	
	      // 準備完了後の処理
	      this.onCompletedFunc();
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      this.setup();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	    }
	  }]);
	
	  return ReadyMgr;
	}();
	
	exports.default = ReadyMgr;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ReadyPercent
	//
	//--------------------------------------------------
	
	var ReadyPercent = function () {
	  function ReadyPercent() {
	    _classCallCheck(this, ReadyPercent);
	
	    this.$loading = $('#loading');
	    this.$bar = $('.loadingBar');
	    this.$percent = $('.loadingPercent');
	
	    this.isLock = false;
	    this.setTimeoutLock = false;
	
	    this.setEvents();
	  }
	
	  _createClass(ReadyPercent, [{
	    key: 'update',
	    value: function update() {
	
	      if (!gb.in.conf.webFontLoaded) return;
	
	      var target = gb.in.rm.completed / gb.in.rm.total * 100;
	
	      gb.in.rm.current += (target - gb.in.rm.current) * 0.1;
	      // this.$bar.css({ width: gb.in.rm.current + '%' }); //percent 伸ばす
	      this.$percent.text(Math.floor(gb.in.rm.current) + '%');
	
	      // 終了処理
	      if (gb.in.rm.current >= 100 && !this.isLock) {
	        this.isLock = true;
	        gb.in.rm.onComplete();
	      }
	
	      // current が 99.9 より大きければ 100 と見なして終了処理へ
	      if (gb.in.rm.current > 99.9) {
	        gb.in.rm.current = 100;
	      }
	
	      // ie11は,99になって、5秒経っても100でなければ、強制的に、表示
	      // その際、completeして無ければ背景は静止画に
	      // if (gb.in.u.isIE11) {
	
	      if (gb.in.rm.current > 99 && !this.setTimeoutLock) {
	        this.setTimeoutLock = true;
	
	        log('99!!!!');
	        // gb.in.rm.current = 99;
	
	        setTimeout(function () {
	
	          log('5!!!');
	
	          if (gb.in.rm.current !== 100) {
	
	            gb.in.rm.completed++;
	            $('.bgOverlayImg').addClass('isActive');
	
	            log('対応！！');
	          };
	        }, 5000);
	      };
	
	      // };
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this = this;
	
	      TweenMax.to(this.$loading, 2.8, {
	        scale: 1.2,
	        opacity: 0,
	        ease: Power3.easeInOut,
	        onComplete: function onComplete() {
	          _this.$loading.remove();
	        }
	      });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.up.add('readyPercent', this.update.bind(this));
	    }
	  }]);
	
	  return ReadyPercent;
	}();
	
	exports.default = ReadyPercent;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  updateManager
	//
	//--------------------------------------------------
	
	var UpdateMgr = function () {
	  function UpdateMgr() {
	    _classCallCheck(this, UpdateMgr);
	
	    this.cnt = 0;
	    this.updateList = [];
	    this.len = 0;
	    this.Timer = null;
	    this.isStop = false;
	  }
	
	  _createClass(UpdateMgr, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "update",
	    value: function update() {
	
	      for (var i in this.updateList) {
	        this.updateList[i].func();
	      }
	    }
	  }, {
	    key: "loop",
	    value: function loop() {
	
	      this.update();
	      this.cnt++;
	
	      this.Timer = requestAnimationFrame(this.loop.bind(this));
	      if (this.isStop) cancelAnimationFrame(this.Timer);
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	
	      this.isStop = true;
	    }
	  }, {
	    key: "resume",
	    value: function resume() {
	
	      this.isStop = false;
	      this.loop();
	    }
	  }, {
	    key: "add",
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.updateList.push(obj);
	    }
	  }, {
	    key: "remove",
	    value: function remove(name) {
	
	      var target = { name: name, func: function func() {} };
	
	      UpdateMgr.arrRemove(this.updateList, target);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }], [{
	    key: "arrRemove",
	    value: function arrRemove(arr, target) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == target.name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return UpdateMgr;
	}();
	
	exports.default = UpdateMgr;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ResizeMgr
	//
	//--------------------------------------------------
	
	var ResizeMgr = function () {
	  function ResizeMgr() {
	    _classCallCheck(this, ResizeMgr);
	
	    this.resizeList = [];
	    this.ws = { w: 0, h: 0, oldW: -1, oldH: -1 };
	
	    this.setup();
	  }
	
	  _createClass(ResizeMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      var self = this;
	
	      $(window).on('resize', function (e) {
	        self.onResize.call(self, e);
	      });
	      this.getWindowSize();
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize(e) {
	
	      this.getWindowSize();
	
	      for (var i in this.resizeList) {
	        this.resizeList[i].func();
	      }
	    }
	  }, {
	    key: 'W',
	    value: function W() {
	
	      return this.ws.w;
	    }
	  }, {
	    key: 'H',
	    value: function H() {
	
	      return this.ws.h;
	    }
	  }, {
	    key: 'getWindowSize',
	    value: function getWindowSize() {
	
	      var w = window.innerWidth,
	          h = window.innerHeight;
	
	      this.ws.oldW = this.ws.w;
	      this.ws.oldH = this.ws.h;
	      this.ws.w = w;
	      this.ws.h = h;
	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.resizeList.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      ResizeMgr.arrRemove(this.resizeList, name);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }], [{
	    key: 'arrRemove',
	    value: function arrRemove(arr, name) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return ResizeMgr;
	}();
	
	exports.default = ResizeMgr;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ScrollMgr
	//
	//--------------------------------------------------
	
	var ScrollMgr = function () {
	  function ScrollMgr() {
	    _classCallCheck(this, ScrollMgr);
	
	    this.scrollList = [];
	    this.scrollEndList = [];
	    this.w = 0;this.h = 0;
	    this.st = 0; // 現在のscroll top
	    this.sb = 0; // 現在のscroll bottom
	    this.sv = 0; // 現在のスクロール量
	
	    this.STAmount = 0;
	    this.offset = 0;
	
	    this.isStart = true;
	
	    this.setEvents();
	  }
	
	  _createClass(ScrollMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      var self = this;
	
	      this.getWindowSize();
	      this.add('end', this.end.bind(this));
	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.scrollList.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      ScrollMgr.arrRemove(this.scrollList, name);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(target) {
	
	      ScrollMgr.arrRemove(this.scrollList, target);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize(e) {
	
	      this.getWindowSize();
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll(e) {
	
	      if (this.isStart) {
	        this.isStart = false;
	        // log('resizeStart');
	        // 最初だけの処理
	      };
	
	      this.st = $(window).scrollTop();
	      this.sb = this.st + this.h;
	
	      for (var i in this.scrollList) {
	        this.scrollList[i].func();
	      }
	    }
	  }, {
	    key: 'onMouseWheel',
	    value: function onMouseWheel(e, delta, deltaX, deltaY) {
	
	      this.STAmount = deltaY;
	      if (gb.in.u.isWin()) this.STAmount *= 60;
	      if (gb.in.u.isFF() && !gb.in.u.isWin()) this.STAmount *= 60;
	      // if (Math.abs(this.STAmount) > 10) this.STAmount *= 0.4;
	      this.offset += this.STAmount;
	
	      for (var i in this.scrollList) {
	        this.scrollList[i].func();
	      }
	    }
	  }, {
	    key: 'getWindowSize',
	    value: function getWindowSize() {
	
	      this.w = window.innerWidth;
	      this.h = window.innerHeight;
	    }
	  }, {
	    key: 'end',
	    value: function end(e) {
	
	      var self = this;
	
	      if (this.Timer) clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        self.isStart = true;
	        // log('resizeEnd');
	
	        for (var i in self.scrollEndList) {
	          self.scrollEndList[i]();
	        }
	      }, 200);
	    }
	  }, {
	    key: 'addFixedObjectScroll',
	    value: function addFixedObjectScroll($target) {
	
	      this.scrollList.push(function () {
	
	        $target.css("left", -$(window).scrollLeft());
	      });
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	      var _this = this;
	
	      this.setup();
	
	      $(window).on('resize', function (e) {
	        _this.onResize(e);
	      });
	      $(window).on('scroll', function (e) {
	        _this.onScroll(e);
	      });
	      $(document).on('mousewheel', function (e, delta, deltaX, deltaY) {
	        _this.onMouseWheel(e, delta, deltaX, deltaY);
	      });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }], [{
	    key: 'arrRemove',
	    value: function arrRemove(arr, name) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return ScrollMgr;
	}();
	
	exports.default = ScrollMgr;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  MouseMgr
	//
	//--------------------------------------------------
	
	var MouseMgr = function () {
	  function MouseMgr() {
	    var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $(document);
	
	    _classCallCheck(this, MouseMgr);
	
	    this.$target = $target;
	
	    this.x = 0;
	    this.y = 0;
	
	    this.cx = 0;
	    this.cy = 0;
	
	    this.mouseMoveList = [{ name: 'def', func: function func() {} }];
	    this.mouseMoveStartList = [{ name: 'def', func: function func() {} }];
	    this.mouseMoveEndList = [{ name: 'def', func: function func() {} }];
	
	    this.isStart = true;
	    this.Timer = null;
	    this.endTime = 10;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(MouseMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.add('onEnd', this.onEnd.bind(this));
	    }
	  }, {
	    key: 'onTouchmove',
	    value: function onTouchmove(e) {
	
	      // e.preventDefault();
	
	      this.x = e.originalEvent.changedTouches[0].pageX;
	      this.y = e.originalEvent.changedTouches[0].pageY;
	    }
	  }, {
	    key: 'onMousemove',
	    value: function onMousemove(e) {
	
	      // log(this.mouseMoveList);
	
	      if (this.isStart) {
	        this.isStart = false;
	
	        // 最初だけの処理
	        // log('moveStart');
	
	        for (var i in this.mouseMoveStartList) {
	          this.mouseMoveStartList[i].func();
	        }
	      };
	
	      if (e.offsetX == undefined) {
	        // this works for Firefox
	        this.x = e.pageX - this.$target.offset().left;
	        this.y = e.pageY - this.$target.offset().top;
	      } else {
	        // works in Google Chrome
	        this.x = e.pageX - $(window).scrollLeft();
	        this.y = e.pageY - $(window).scrollTop();
	      }
	
	      this.cx = e.clientX - gb.in.r.W() / 2;
	      this.cy = e.clientY - gb.in.r.H() / 2;
	
	      for (var i in this.mouseMoveList) {
	        this.mouseMoveList[i].func();
	      }
	    }
	  }, {
	    key: 'onEnd',
	    value: function onEnd(e) {
	      var _this = this;
	
	      if (this.Timer) clearTimeout(this.Timer);
	      this.Timer = setTimeout(function () {
	        _this.isStart = true;
	
	        // log('moveEnd');
	
	        for (var i in _this.mouseMoveEndList) {
	          _this.mouseMoveEndList[i].func();
	        }
	      }, this.endTime);
	    }
	  }, {
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.mouseMoveList.push(obj);
	    }
	  }, {
	    key: 'addStart',
	    value: function addStart(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.mouseMoveStartList.push(obj);
	    }
	  }, {
	    key: 'addEnd',
	    value: function addEnd(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.mouseMoveEndList.push(obj);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      MouseMgr.arrRemove(this.mouseMoveList, name);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  静的メンバ
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      this.$target.off("touchmove.MouseMgr");
	      this.$target.off("mousemove.MouseMgr");
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this2 = this;
	
	      this.$target.on("touchmove.MouseMgr", function (e) {
	        _this2.onTouchmove(e);
	      });
	      this.$target.on("mousemove.MouseMgr", function (e) {
	        _this2.onMousemove(e);
	      });
	    }
	  }], [{
	    key: 'arrRemove',
	    value: function arrRemove(arr, name) {
	
	      var len = arr.length;
	      var check;
	      for (var i = 0; i < len; i++) {
	        check = arr[i];
	
	        if (check.name == name) {
	          arr.splice(i, 1);
	          i--;
	          len--;
	        }
	      }
	
	      return arr;
	    }
	  }]);
	
	  return MouseMgr;
	}();
	
	exports.default = MouseMgr;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  LoadMgr
	//
	//--------------------------------------------------
	
	var _Loader = __webpack_require__(13);
	
	var _Loader2 = _interopRequireDefault(_Loader);
	
	var _Sec01Video = __webpack_require__(14);
	
	var _Sec01Video2 = _interopRequireDefault(_Sec01Video);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoadMgr = function () {
	  function LoadMgr() {
	    _classCallCheck(this, LoadMgr);
	  }
	
	  _createClass(LoadMgr, [{
	    key: 'start',
	    value: function start() {
	
	      // その他
	      // ソーシャルスクリプトなど
	      // this.snsScript();
	
	      // this.loadYoutubeScript();
	
	      // section02で使う大量の画像をロード // web workerなども使って
	      // this.sec02Img();
	
	      // this.webFont();
	
	    }
	  }, {
	    key: 'loadYoutubeScript',
	    value: function loadYoutubeScript() {
	
	      var loader = new _Loader2.default();
	
	      var len = 1;
	      gb.in.rm.total += len; // load数のtotalを計算
	      if (gb.in.u.isSP) gb.in.rm.completed++;
	
	      var cb = function cb() {
	
	        gb.in.rm.completed++;
	      };
	
	      loader.youtubeIframeScript(cb);
	    }
	  }, {
	    key: 'sec02Img',
	    value: function sec02Img() {
	
	      // bgVideoTile用の連番画像の読み込み
	      gb.in.loadSec02Img = this.loader = new _Loader2.default();
	
	      if (gb.in.u.isPC) {
	        var len = gb.in.conf.sec02ImgNum;
	        gb.in.rm.total += len; // load数のtotalを計算
	        var path = '/project-name/assets/resource/img/movie/bgImg/';
	      } else {
	        var len = 19;
	        gb.in.rm.total += len; // load数のtotalを計算
	        var path = '/project-name/assets/resource/img/movie/bgImgSP/';
	      }
	
	      var cb = function cb() {
	        // gb.in.Sec02Bg.create();
	      };
	      var cb02 = function cb02() {
	        gb.in.rm.completed++;
	      };
	
	      // this.loader.imgSerialLoad(len,path,'tfny_',cb,cb02);
	      this.loader.img(len + 1, path, 'tfny_', cb, cb02);
	    }
	  }, {
	    key: 'section04ProductShader',
	    value: function section04ProductShader() {
	      var _this = this;
	
	      var shaders = [];
	      var shaderLoadList = [
	      // gb.Clock,
	      // gb.Color,
	      // gb.Plasma,
	      // gb.Sepia,
	      // gb.Mosaic,
	      gb.ZoomBlur, gb.ZoomBlur, gb.Transition02];
	
	      var len = shaderLoadList.length;
	      gb.in.rm.total += len; // load数のtotalを計算
	
	      var shaderSerialLoad = function shaderSerialLoad(len, cb) {
	
	        var shader,
	            cnt = 0;
	
	        var load = function load(i) {
	          shader = new shaderLoadList[i](comp);
	          shaders.push(shader);
	        };
	
	        var comp = function comp() {
	          cnt++;
	          gb.in.rm.completed++;
	          if (cnt == len) cb(shaders);else load(cnt);
	        };
	
	        load(cnt);
	      };
	
	      shaderSerialLoad(shaderLoadList.length, function (shaders) {
	
	        _this.shaders = shaders;
	        _this.section04ProductImg();
	      });
	    }
	  }, {
	    key: 'section04ProductImg',
	    value: function section04ProductImg() {
	      var _this2 = this;
	
	      var textureList = ['/project-name/assets/resource/img/product/tiffany_hand1.jpg', '/project-name/assets/resource/img/product/brown.png', '/project-name/assets/resource/img/product/blue.png', '/project-name/assets/resource/img/product/white.png', '/project-name/assets/resource/img/product/tiffanyblue.png', '/project-name/assets/resource/img/product/pink.png'];
	      this.textures = [];
	
	      var len = textureList.length;
	      gb.in.rm.total += len; // load数のtotalを計算
	
	      var textureSerialLoad = function textureSerialLoad(len, cb) {
	
	        var texture,
	            cnt = 0;
	
	        var load = function load(i) {
	          texture = THREE.ImageUtils.loadTexture(textureList[i], null, comp);
	          _this2.textures.push(texture);
	        };
	
	        var comp = function comp() {
	          cnt++;
	          gb.in.rm.completed++;
	          if (cnt == len) cb();else load(cnt);
	        };
	
	        load(cnt);
	      };
	
	      textureSerialLoad(textureList.length, function () {
	        $(window).trigger('onSection04ProductImg');
	      });
	    }
	  }, {
	    key: 'webFont',
	    value: function webFont() {
	
	      // web font loader用param
	      var config = {
	        custom: {
	          families: ['Cormorant', 'Roboto Condensed'
	          // 'Noto Sans Japanese',
	          // 'Roboto',
	          // 'Alegreya Sans',
	          // 'Alegreya Sans SC'
	          ],
	          urls: ['https://fonts.googleapis.com/css?family=Cormorant:500,500i|Roboto+Condensed'
	          // '/project-name/assets/css/font.css',
	          // 'https://fonts.googleapis.com/css?family=Roboto:400,500,300',
	          // 'https://fonts.googleapis.com/css?family=Alegreya+Sans:400,100',
	          // 'https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,300,100'
	          ]
	        },
	        active: function active() {
	
	          log('webFont!!!!');
	          gb.in.conf.webFontLoaded = true;
	        }
	      };
	
	      var loader = new _Loader2.default();
	      loader.webFont(config);
	    }
	  }, {
	    key: 'onEnd',
	    value: function onEnd() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return LoadMgr;
	}();
	
	exports.default = LoadMgr;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Loader
	//
	//--------------------------------------------------
	
	var Loader = function () {
	  function Loader() {
	    _classCallCheck(this, Loader);
	
	    this.list = [];
	    this.cnt = 0;
	  }
	
	  _createClass(Loader, [{
	    key: "json",
	    value: function json(src, cb) {
	
	      $.getJSON(src, function (data) {
	
	        cb(data);
	      });
	    }
	  }, {
	    key: "img",
	    value: function img(len, path, name) {
	      var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
	      var cb02 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
	
	
	      var i,
	          img,
	          nth,
	          cnt = 1,
	          list = [];
	
	      for (i = 1; i < len; i++) {
	        img = new Image();
	        nth = gb.in.u.add0(i, -5);
	        this.list.push(img);
	        img.onload = function () {
	          cb02();
	          cnt++;
	          if (cnt == len) cb();
	        };
	        img.src = path + name + nth + ".jpg";
	      }
	    }
	
	    // cb02 load完了時 都度都度用コールバック関数
	
	  }, {
	    key: "imgSerialLoad",
	    value: function imgSerialLoad(len, path, name) {
	      var _this = this;
	
	      var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
	      var cb02 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
	
	
	      var i,
	          img,
	          nth,
	          cnt = 0,
	          list = [];
	
	      var load = function load(i) {
	        img = new Image();
	        nth = gb.in.u.add0(i, -5);
	        _this.list.push(img);
	        img.onload = function () {
	          cb02();
	          comp();
	        };
	        img.src = path + name + nth + ".jpg";
	      };
	
	      var comp = function comp() {
	        cnt++;
	        if (cnt == len) {
	          cb();
	        } else {
	          load(cnt);
	        }
	      };
	
	      load(cnt);
	    }
	  }, {
	    key: "ajaxImgLoad",
	    value: function ajaxImgLoad(cb) {
	
	      var imgNum = $('img').length;
	      var cnt = 0;
	
	      $('img').each(function (i, elm) {
	
	        var img = new Image();
	        img.onload = function () {
	          cnt++;
	          if (cnt == imgNum - 1) {
	            cb();
	          };
	        };
	        img.src = elm.src;
	      });
	    }
	  }, {
	    key: "video",
	    value: function video(src) {
	      var _this2 = this;
	
	      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	
	      var isLoad = false;
	      this.video = document.createElement('video');
	
	      var type = this.supportVideoExt(this.video);
	      if (type == "") {
	        return;
	      }
	
	      this.video.addEventListener("canplay", function () {
	
	        if (!_this2.isLoad) {
	          _this2.isLoad = true;
	          _this2.video.loop = true;
	          _this2.video.play();
	          cb();
	        }
	      }, false);
	
	      // ロード
	      this.video.src = src;
	    }
	  }, {
	    key: "youtubeIframeScript",
	    value: function youtubeIframeScript(cb) {
	
	      // IFrame Player API の読み込み
	      var tag = document.createElement('script');
	      tag.onload = function () {
	
	        cb();
	      };
	
	      // tag.src = "https://www.youtube.com/iframe_api";
	      tag.src = "http://www.youtube.com/iframe_api";
	      var firstScriptTag = document.getElementsByTagName('script')[0];
	      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	
	      // YouTube動画
	      window.onYouTubeIframeReady = function () {
	
	        log('youtubeready');
	      };
	    }
	  }, {
	    key: "supportVideoExt",
	    value: function supportVideoExt() {
	
	      var ext = "";
	      if (this.video.canPlayType("video/webm") == "probably" || this.video.canPlayType("video/webm") == "maybe") {
	        ext = "webm";
	      } else if (this.video.canPlayType("video/mp4") == "probably" || this.video.canPlayType("video/mp4") == "maybe") {
	        ext = "mp4";
	      } else if (this.video.canPlayType("video/ogg") == "probably" || this.video.canPlayType("video/ogg") == "maybe") {
	        ext = "ogg";
	      }
	
	      return ext;
	    }
	  }, {
	    key: "webFont",
	    value: function webFont(config) {
	
	      // web font loader用jsのappend
	      var wf = document.createElement('script');
	      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	      wf.type = 'text/javascript';
	      wf.async = 'true';
	      var s = document.getElementsByTagName('script')[0];
	      s.parentNode.insertBefore(wf, s);
	
	      var again = function again() {
	
	        // yt.playerがloadされていない場合を考慮して
	        if (typeof WebFont !== "undefined" && WebFont) {
	
	          WebFont.load(config);
	        } else {
	
	          setTimeout(again, 100);
	        }
	      };
	
	      again();
	    }
	  }, {
	    key: "onLoaded",
	    value: function onLoaded() {
	
	      $('html').css('opacity', '1');
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents(len) {
	
	      var self = this;
	
	      $(window).on('loaded', function (event) {
	
	        self.cnt++;
	        if (self.cnt == len) onLoaded();
	      });
	    }
	  }]);
	
	  return Loader;
	}();
	
	exports.default = Loader;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Sec01Video
	//
	//--------------------------------------------------
	
	
	var _YoutubeForSec = __webpack_require__(15);
	
	var _YoutubeForSec2 = _interopRequireDefault(_YoutubeForSec);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Sec01Video = function () {
	  function Sec01Video(param) {
	    _classCallCheck(this, Sec01Video);
	
	    // sec01video用
	    gb.in.rm.total++;
	    if (gb.in.u.isSP) gb.in.rm.completed++;
	
	    if (gb.in.u.isPC) this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Sec01Video, [{
	    key: 'setup',
	    value: function setup() {
	
	      // create
	      this.video = new _YoutubeForSec2.default('sec01Video', gb.in.conf.youtubeID01, null);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Sec01Video;
	}();
	
	exports.default = Sec01Video;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  YoutubeForSec01
	//
	//--------------------------------------------------
	
	var _FullSize = __webpack_require__(16);
	
	var _FullSize2 = _interopRequireDefault(_FullSize);
	
	var _TopTime = __webpack_require__(17);
	
	var _TopTime2 = _interopRequireDefault(_TopTime);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var YoutubeForSec01 = function () {
	  function YoutubeForSec01(id, videoID, videoList) {
	    _classCallCheck(this, YoutubeForSec01);
	
	    this.player = null;
	
	    this.isFirst = true;
	    this.isSeekLock = false;
	    this.isSeekLock02 = false;
	
	    this.setup(id, videoID, videoList);
	  }
	
	  _createClass(YoutubeForSec01, [{
	    key: 'setup',
	    value: function setup(id, videoID, videoList) {
	
	      // yt.player��load�����Ƥ��ʤ����Ϥ򿼑]����
	      if (typeof YT !== "undefined" && YT && YT.Player) {
	
	        // create
	        this.player = new YT.Player(id, {
	          width: '100%', // �ץ��`���`�η�
	          height: '100%', // �ץ��`���`�θߤ�
	          videoId: videoID, // YouTube��ID
	          events: {
	            'onReady': this.onReady.bind(this), // �ץ��`���`�Μʂ䤬�Ǥ����Ȥ��ˌg��
	            'onStateChange': this.onPlayerStateChange.bind(this)
	          },
	          playerVars: {
	            autoplay: 1,
	            controls: 0,
	            showinfo: 0,
	            autohide: 1,
	            rel: 0,
	            enablejsapi: 1,
	            iv_load_policy: 3,
	            disablekb: 1,
	            modestbranding: 1,
	            start: 2,
	            loop: 1
	          }
	        });
	
	        // layout
	        var l = new _FullSize2.default($('#bgWrap'), $('#sec01Video'), 0, 'FullSizeSec01Video');
	        l.targetDefW = 1920;
	        l.targetDefH = 1080;
	        l.run();
	      } else {
	
	        setTimeout(this.setup.bind(this, id, videoID, videoList), 100);
	      }
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady(e) {
	
	      // �߽����Ȥ�
	      e.target.setPlaybackQuality('highres');
	
	      // this.player.playVideo();
	      this.setEvents();
	
	      // play
	      gb.in.time = new _TopTime2.default();
	      gb.in.sec01Video.video.playByNYTime();
	    }
	  }, {
	    key: 'onPlayerStateChange',
	    value: function onPlayerStateChange(e) {
	
	      var status = e.data;
	
	      // �����K�ˤ����Ȥ� 0
	      if (status == window.YT.PlayerState.ENDED) {
	
	        // �ӻ�����
	        this.player.playVideo();
	      }
	
	      // // �����ФΤȤ� 1
	      if (status == window.YT.PlayerState.PLAYING) {
	
	        if (this.isFirst) {
	          this.isFirst = false;
	          gb.in.rm.completed++;
	        }
	
	        // e.target.pauseVideo();
	      }
	
	      // // ֹͣ�ФΤȤ� 2
	      // if (status == window.YT.PlayerState.PAUSED) {
	      //     console.log('ֹͣ��');
	      // }
	
	      // // �Хåե��������ФΤȤ� 3
	      // if (status == window.YT.PlayerState.BUFFERING) {
	      //     console.log('�Хåե���������');
	      // }
	
	      // // �^�����g�ߤΤȤ� 5 5��ֹ�ޤ��Ȥ����뤫�顢�����Ǥ�play
	      if (status == window.YT.PlayerState.CUED) {
	
	        this.playByNYTime();
	      }
	
	      // for safari �ե����륵�����ؤ���
	      if (gb.in.u.isSafari() && status == window.YT.PlayerState.BUFFERING) this.player.seekTo(this.player.getCurrentTime() + 0.1);
	    }
	  }, {
	    key: 'playByNYTime',
	    value: function playByNYTime() {
	
	      var h = gb.in.time.nyH;
	
	      if (h >= 5 && h < 13) {
	
	        this.player.seekTo(0);
	      } else if (h >= 13 && h < 18) {
	
	        this.player.seekTo(36);
	      } else {
	
	        this.player.seekTo(66);
	      }
	
	      this.player.playVideo();
	    }
	  }, {
	    key: 'onSeek',
	    value: function onSeek() {
	
	      var now = this.player.getCurrentTime();
	
	      if (now < 1.0) {
	        this.isSeekLock = false;
	        this.isSeekLock02 = false;
	      };
	
	      if (now > 90 && !this.isSeekLock) {
	        this.isSeekLock = true;
	
	        TweenMax.to($('.bgOverlayImg'), 3.0, {
	          opacity: 1,
	          ease: Power3.easeInOut
	        });
	      }
	
	      if (now > 1.0 && !this.isSeekLock02) {
	        this.isSeekLock02 = true;
	
	        TweenMax.to($('.bgOverlayImg'), 3.0, {
	          opacity: 0,
	          ease: Power3.easeInOut
	        });
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.up.add('YoutubeForSec01', this.onSeek.bind(this));
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      gb.in.up.remove('YoutubeForSec01');
	    }
	  }]);
	
	  return YoutubeForSec01;
	}();
	
	exports.default = YoutubeForSec01;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  FullSize
	//
	//--------------------------------------------------
	
	var FullSize = function () {
	  function FullSize($Wrap, $Target, mode, name) {
	    _classCallCheck(this, FullSize);
	
	    this.$wrap = $Wrap;
	    this.$target = $Target;
	
	    this.W = this.$wrap.width();
	    this.H = this.$wrap.height();
	    this.targetW;
	    this.targetH;
	    this.targetDefW;
	    this.targetDefH;
	    this.ratioW;
	    this.ratio;
	    this.ml;
	    this.mt;
	
	    this.mode = mode || 0;
	    this.name = name || 'fullsize';
	
	    // this.init();
	    // this.run();
	    this.setEvents();
	  }
	
	  _createClass(FullSize, [{
	    key: 'setStyle',
	    value: function setStyle() {
	
	      this.$wrap.css({
	        'overflow': 'hidden'
	      });
	      this.$target.css('position', 'absolute');
	    }
	  }, {
	    key: 'getDef',
	    value: function getDef() {
	
	      this.targetDefW = this.$target.get(0).clientWidth || this.$target.get(0).width || this.$target.width(), this.targetDefH = this.$target.get(0).clientHeight || this.$target.get(0).height || this.$target.height();
	    }
	  }, {
	    key: 'getSize',
	    value: function getSize() {
	
	      this.W = this.$wrap.width();
	      this.H = this.$wrap.height();
	
	      this.ratioW = this.H / this.W;
	      this.ratio = this.targetDefH / this.targetDefW, this.ml = -(this.targetDefW * (this.H / this.targetDefH)) / 2;
	      this.mt = -(this.targetDefH * (this.W / this.targetDefW)) / 2;
	    }
	  }, {
	    key: 'setPos',
	    value: function setPos() {
	
	      if (this.mode == 'cover' || this.mode == 0) {
	
	        //--------------------------------------------------
	        //  枠にピッタリになるように background-size cover
	        //--------------------------------------------------
	
	        if (this.ratioW > this.ratio) {
	
	          var w = this.H / this.targetDefH * this.targetDefW;
	
	          this.$target.css({ 'height': this.H }).css({ 'margin-top': 0, 'margin-left': this.ml, 'top': 0, 'left': '50%', 'width': w });
	        } else if (this.ratioW <= this.ratio) {
	
	          var h = this.W / this.targetDefW * this.targetDefH;
	
	          this.$target.css({ 'width': this.W }).css({ 'margin-top': this.mt, 'margin-left': 0, 'top': '50%', 'left': 0, 'height': h });
	        }
	      } else if (this.mode == 'contain' || this.mode == 1) {
	
	        //--------------------------------------------------
	        //  枠内にピッタリ収まるように background-size contain
	        //--------------------------------------------------
	
	        if (this.ratioW < this.ratio) {
	
	          this.$target.css({ 'height': this.H }).css({ 'margin-top': 0, 'margin-left': this.ml, 'top': 0, 'left': '50%', 'width': 'auto' });
	        } else if (this.ratioW >= this.ratio) {
	
	          this.$target.css({ 'width': this.W }).css({ 'margin-top': this.mt, 'margin-left': 0, 'top': '50%', 'left': 0, 'height': 'auto' });
	        }
	      }
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	
	      this.getDef();
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      this.setStyle();
	      this.getSize();
	      this.setPos();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add(this.name, this.run.bind(this));
	    }
	  }]);
	
	  return FullSize;
	}();
	
	exports.default = FullSize;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  TopTime
	//
	//--------------------------------------------------
	
	// 500px以下になったら表示
	//   時計count
	//   canvas表示
	
	var TopTime = function () {
	  function TopTime() {
	    _classCallCheck(this, TopTime);
	
	    this.$target = $('.timeWrap');
	    this.$h01 = this.$target.find('.h01');
	    this.$h02 = this.$target.find('.h02');
	    this.$m01 = this.$target.find('.m01');
	    this.$m02 = this.$target.find('.m02');
	
	    this.nyH = 0;
	
	    this.isAlert = gb.in.r.ws.h < 500 ? true : false;
	
	    this.dis = 14; //時差
	
	    this.setup();
	    this.run();
	    this.setEvents();
	  }
	
	  _createClass(TopTime, [{
	    key: 'setup',
	    value: function setup() {
	
	      gb.in.u.time();
	      var h = gb.in.u.hour - this.dis;
	      if (h < 0) h = 24 + h;
	      this.nyH = h;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      // 間引き
	      if (gb.in.up.cnt % 60 !== 0) return;
	
	      gb.in.u.time();
	
	      var h = gb.in.u.hour - this.dis;
	      if (h < 0) h = 24 + h;
	
	      this.nyH = h;
	
	      h = gb.in.u.add0(h).split('');
	      var m = gb.in.u.add0(gb.in.u.minute).split('');
	      var s = gb.in.u.add0(gb.in.u.second).split('');
	
	      this.$h01.text(h[0]);
	      this.$h02.text(h[1]);
	      this.$m01.text(m[0]);
	      this.$m02.text(m[1]);
	
	      // this.$h01.text(s[0])
	      // this.$h02.text(s[1])
	      // this.$m01.text(s[0]);
	      // this.$m02.text(s[1]);
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      gb.in.up.add('TopTime', this.update.bind(this));
	
	      // コンマの表示非表示
	      var tl = new TimelineMax({ repeat: -1 });
	
	      tl.set(this.$target.find('.colon'), { opacity: 0 }).to(this.$target.find('.colon'), 0.5, { opacity: 1, ease: Power2.easeInOut }).to(this.$target.find('.colon'), 0.5, { opacity: 0, ease: Power2.easeInOut });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      gb.in.up.remove('TopTime');
	    }
	  }]);
	
	  return TopTime;
	}();
	
	exports.default = TopTime;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  pjax sss
	//
	//--------------------------------------------------
	
	var _Loader = __webpack_require__(13);
	
	var _Loader2 = _interopRequireDefault(_Loader);
	
	var _DisplayPjaxPage = __webpack_require__(19);
	
	var _DisplayPjaxPage2 = _interopRequireDefault(_DisplayPjaxPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Pjax = function () {
	  function Pjax() {
	    _classCallCheck(this, Pjax);
	
	    this.id = null;
	    this.e = null;
	    // this.nextLink = null;
	    // this.prevLink = this.getLink();
	
	    this.isPjaxLock = true;
	
	    this.setEvents();
	  }
	
	  _createClass(Pjax, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.id = $('.section').data('id');
	
	      // 背景色の変更
	      if (this.id == 'interview_detail' || this.id == 'history') $('html').css('background-color', '#fff');else $('html').css('background-color', '#000');
	    }
	  }, {
	    key: 'getLink',
	    value: function getLink(url) {
	
	      if (url.indexOf('movie') !== -1) {
	        return 'movie';
	      } else if (url.indexOf('interview/01') !== -1) {
	        return 'interview_detail';
	      } else if (url.indexOf('interview/02') !== -1) {
	        return 'interview_detail';
	      } else if (url.indexOf('interview') !== -1) {
	        return 'interview';
	      } else if (url.indexOf('history') !== -1) {
	        return 'history';
	      } else {
	        return 'top';
	      }
	    }
	  }, {
	    key: 'setID',
	    value: function setID() {
	
	      this.id = $('.section').data('id');
	
	      // bodyのpageクラスを削除
	      $('body').removeClass('top movie interview interview_detail history');
	
	      // 新しいページのクラスをつける
	      $('body').addClass(this.id);
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	
	      var href = $(e.currentTarget).attr('href');
	      this.e = e;
	      this.nextLink = href;
	
	      $(document).trigger('fetch');
	    }
	  }, {
	    key: 'onStart',
	    value: function onStart(e, that) {
	
	      if (this.isPjaxLock) return;
	      this.isPjaxLock = true;
	
	      // クリック無効
	      e.preventDefault();
	      var href = $(that).attr('href');
	
	      log('fecth');
	
	      _DisplayPjaxPage2.default.outPageBeforeEf(href);
	
	      // ページ遷移エフェクト コールバック登録
	      gb.in.pageTransitionEffect.cb = function () {
	
	        _DisplayPjaxPage2.default.outPageAfterEf();
	
	        // pjaxリクエスト
	        $.pjax({
	          url: href,
	          container: '#inner',
	          fragment: '#inner',
	          timeout: 5000
	        });
	      };
	
	      // ページ遷移エフェクト開始
	      gb.in.pageTransitionEffect.outEffect();
	    }
	  }, {
	    key: 'onEnd',
	    value: function onEnd() {
	
	      log('End');
	      this.setID();
	
	      _DisplayPjaxPage2.default.inPageBeforeImgLoaded();
	
	      // 動画のロード確認
	      var l = new _Loader2.default();
	      l.ajaxImgLoad(function () {
	        //画像が完全にロードされたらページ表示処理を始める
	
	        _DisplayPjaxPage2.default.inPageAfterImgLoaded();
	      });
	    }
	  }, {
	    key: 'onSend',
	    value: function onSend() {}
	  }, {
	    key: 'onComplete',
	    value: function onComplete() {}
	  }, {
	    key: 'onPopState',
	    value: function onPopState(e) {
	
	      if (this.isPjaxLock) return;
	      this.isPjaxLock = true;
	
	      var href = e.target.baseURI;
	
	      log('fecth');
	
	      _DisplayPjaxPage2.default.outPageBeforeEf(href);
	
	      // ページ遷移エフェクト開始
	      gb.in.pageTransitionEffect.cb = function () {
	
	        _DisplayPjaxPage2.default.outPageAfterEf();
	
	        // pjaxリクエスト
	        $.pjax({
	          push: false,
	          url: href,
	          container: '#inner',
	          fragment: '#inner',
	          timeout: 5000
	        });
	      };
	
	      // ページ遷移エフェクト開始
	      gb.in.pageTransitionEffect.outEffect();
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	      var _this = this;
	
	      var self = this;
	
	      this.setup();
	
	      $(document).on('click', 'a.pjax', function (e) {
	        self.onStart.call(self, e, this);return false;
	      });
	      // $(document).on('pjax:start', (e)=>{this.onStart02(e);}); // ブラウザ back / forward用
	      $(document).on('pjax:end', this.onEnd.bind(this));
	      // $(document).on('pjax:send', this.onSend.bind(this));
	      // $(document).on('pjax:complete', this.onComplete.bind(this));
	
	      // ブラウザバックイベント
	      $(document).on('pjax:popstate', function (e) {
	        _this.onPopState(e);
	      });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	    }
	  }]);
	
	  return Pjax;
	}();
	
	exports.default = Pjax;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  DisplayPjaxPage
	//
	//--------------------------------------------------
	
	
	var _DisplayTop = __webpack_require__(20);
	
	var _DisplayTop2 = _interopRequireDefault(_DisplayTop);
	
	var _DisplayMovie = __webpack_require__(39);
	
	var _DisplayMovie2 = _interopRequireDefault(_DisplayMovie);
	
	var _DisplayInterview = __webpack_require__(51);
	
	var _DisplayInterview2 = _interopRequireDefault(_DisplayInterview);
	
	var _DisplayInterviewDetail = __webpack_require__(60);
	
	var _DisplayInterviewDetail2 = _interopRequireDefault(_DisplayInterviewDetail);
	
	var _DisplayHistory = __webpack_require__(73);
	
	var _DisplayHistory2 = _interopRequireDefault(_DisplayHistory);
	
	var _ScaleInterviewDetail = __webpack_require__(63);
	
	var _ScaleInterviewDetail2 = _interopRequireDefault(_ScaleInterviewDetail);
	
	var _Layout = __webpack_require__(83);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _HoverEffectSVG = __webpack_require__(86);
	
	var _HoverEffectSVG2 = _interopRequireDefault(_HoverEffectSVG);
	
	var _PageTop = __webpack_require__(87);
	
	var _PageTop2 = _interopRequireDefault(_PageTop);
	
	var _Sns = __webpack_require__(88);
	
	var _Sns2 = _interopRequireDefault(_Sns);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DisplayPjaxPage = function () {
	  function DisplayPjaxPage() {
	    _classCallCheck(this, DisplayPjaxPage);
	
	    this.setup();
	  }
	
	  _createClass(DisplayPjaxPage, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }], [{
	    key: 'outPageBeforeEf',
	    value: function outPageBeforeEf(url) {
	
	      // sideLを消す 早めの段階で
	      var nextUrl = gb.in.pjax.getLink(url);
	      if (nextUrl == 'top' || nextUrl == 'interview_detail') {
	        // sideL
	        var tl02 = new TimelineMax();
	        tl02.to($('#sideL .sns.sp'), 0.4, {
	          opacity: 0,
	          onComplete: function onComplete() {
	            $('#sideL .sns.sp').hide();
	          }
	        });
	      };
	
	      // topかつスマホだったらside消す
	      if (gb.in.pjax.id == 'top' && gb.in.u.isResSP) {
	
	        var tl02 = new TimelineMax();
	        tl02.to($('#sideL .sns.sp, #sideR .indicator'), 0.4, {
	          opacity: 0
	        });
	      };
	
	      // menu閉じる 開いていたら
	      if (gb.in.menu.isOpen) {
	        gb.in.menu.toggle();
	        gb.in.menuBtn01.toggle();
	      }
	
	      // sideR変更
	      gb.in.sideR.outNum();
	      gb.in.sideR.outPageName();
	      gb.in.sideR.outNext();
	      gb.in.nav.outPage();
	
	      // nav
	      if (gb.in.u.isResSP) TweenMax.to($('#nav'), 0.4, { opacity: 0, ease: Power3.easeOut });
	    }
	  }, {
	    key: 'outPageAfterEf',
	    value: function outPageAfterEf() {
	
	      if (gb.in.sec01Video.video) gb.in.sec01Video.video.removeEvents();
	
	      if (gb.in.time) gb.in.time.removeEvents();
	
	      // if (gb.in.swt) gb.in.swt.removeEvents();
	
	      if (gb.in.headerColor) gb.in.headerColor.removeEvents();
	
	      // sec01 動画止める
	      if (gb.in.sec01Video.video) gb.in.sec01Video.video.player.pauseVideo();
	      if (gb.in.sliderTop) gb.in.sliderTop.removeEvents();
	
	      // ココらへんでいろいろ止める
	      gb.in.Sec02Bg.pause();
	      if (gb.in.Sec02Video) gb.in.Sec02Video.removeEvents();
	      if (gb.in.sec02Video) gb.in.sec02Video.onStop();
	      if (gb.in.sec02Video) gb.in.sec02Video.video.isPlay = true;
	
	      gb.in.menu.reset();
	
	      // トップホバーエフェクト解除
	      if (gb.in.snsSPHoverEf) gb.in.snsSPHoverEf.reset();
	
	      gb.in.r.remove('fullsize'); //仮書き、あとでどこかにまとめる
	      gb.in.r.remove('fullsizeByScale'); //仮書き、あとでどこかにまとめる
	      gb.in.r.remove('scaleTop'); //仮書き、あとでどこかにまとめる
	      gb.in.r.remove('scaleMovie'); //仮書き、あとでどこかにまとめる
	      gb.in.r.remove('setCenter'); //仮書き、あとでどこかにまとめる
	      _ScaleInterviewDetail2.default.reset();
	      gb.in.r.remove('scaleInterview');
	      gb.in.r.remove('scaleInterviewDetail');
	      gb.in.r.remove('w');
	      gb.in.r.remove('h');
	      gb.in.r.remove('yearW');
	      gb.in.r.remove('fullSizeByScaleMovie');
	      gb.in.r.remove('fullSizeByScaleInterviewIndex');
	      gb.in.r.remove('sec02Video');
	      gb.in.s.remove('YearBig'); //仮書き、あとでどこかにまとめる
	      gb.in.r.remove('InertiaScroll');
	
	      gb.in.up.remove('InertiaScroll');
	
	      if (gb.in.move2DList) {
	        for (var i = 0; i < gb.in.move2DList.length; i++) {
	          gb.in.move2DList[i].removeEvents();
	        };
	      };
	
	      // ホバーの解除
	      gb.in.he01.removeEvents();
	      gb.in.he02.removeEvents();
	      gb.in.he03.removeEvents();
	
	      // sns機能の解除
	      gb.in.sns.removeEvents();
	
	      // トップだった場合、スケールの解除
	      if (gb.in.scaleTop) gb.in.scaleTop.reset();
	
	      if (gb.in.inertia01) gb.in.inertia01.resetInertia();
	      if (gb.in.inertia02) gb.in.inertia02.resetInertia();
	      if (gb.in.inertia03) gb.in.inertia03.resetInertia();
	      if (gb.in.inertia04) gb.in.inertia04.resetInertia();
	    }
	  }, {
	    key: 'inPageBeforeImgLoaded',
	    value: function inPageBeforeImgLoaded() {
	
	      _Layout2.default.reset();
	
	      gb.in.resImg.resume();
	
	      // ホバーの設定
	      gb.in.he01 = new _HoverEffectSVG2.default($('.SVGHover'), '#fff', '#000');
	      gb.in.he02 = new _HoverEffectSVG2.default($('.SVGHoverW'), '#81d8d0', '#fff');
	      gb.in.he03 = new _HoverEffectSVG2.default($('.SVGHoverW02'), '#81d8d0', '#000');
	
	      // sns機能の設定
	      gb.in.sns = new _Sns2.default($('.fbShare'), $('.twShare'), $('.lineShare'), $('.onMail'));
	      gb.in.sns.switchMeta();
	      gb.in.sns.setting();
	
	      // 背景色の変更
	      if (gb.in.pjax.id == 'interview_detail' || gb.in.pjax.id == 'history') $('html').css('background-color', '#fff');else $('html').css('background-color', '#000');
	    }
	  }, {
	    key: 'inPageAfterImgLoaded',
	    value: function inPageAfterImgLoaded() {
	
	      // スクロールトランジションを可能に
	      gb.in.sct.isSwitch = true;
	
	      setTimeout(function () {
	        // sideR変更
	        gb.in.sideR.inNum();
	        gb.in.sideR.inPageName();
	        gb.in.sideR.inNext();
	        gb.in.nav.inPage();
	      }, 600);
	
	      // 共通でイベント設定
	      new _PageTop2.default();
	
	      switch (gb.in.pjax.id) {
	
	        case 'top':
	
	          _DisplayTop2.default.run();
	          gb.in.menu.switchActive(0);
	
	          // スマホだったらside消す
	          if (gb.in.u.isResSP) {
	
	            var tl02 = new TimelineMax();
	            tl02.to($('#sideL .sns.sp, #sideR .indicator'), 1.2, {
	              opacity: 1
	            });
	          };
	
	          setTimeout(function () {
	            gb.in.pageTransitionEffect.inEffect();
	          }, 800);
	
	          break;
	
	        case 'movie':
	
	          _DisplayMovie2.default.run();
	          gb.in.menu.switchActive(1);
	
	          var tl02 = new TimelineMax();
	          tl02.set($('#sideL .sns.sp'), { display: 'block' }).to($('#sideL .sns.sp'), 1.2, { opacity: 1 });
	
	          gb.in.pageTransitionEffect.inEffect();
	
	          break;
	
	        case 'interview':
	
	          _DisplayInterview2.default.run();
	          gb.in.menu.switchActive(2);
	
	          // myminute 出す
	          var tl02 = new TimelineMax();
	          tl02.set($('#sideL .sns.sp'), { display: 'block' }).to($('#sideL .sns.sp'), 1.2, { opacity: 1 });
	
	          gb.in.pageTransitionEffect.inEffect();
	
	          break;
	
	        case 'interview_detail':
	
	          _DisplayInterviewDetail2.default.run();
	          gb.in.menu.switchActive(-1);
	
	          setTimeout(function () {
	            gb.in.pageTransitionEffect.inEffect();
	          }, 100);
	
	          break;
	
	        case 'history':
	
	          _DisplayHistory2.default.run();
	          gb.in.menu.switchActive(3);
	
	          var tl02 = new TimelineMax();
	          tl02.set($('#sideL .sns.sp'), { display: 'block' }).to($('#sideL .sns.sp'), 1.2, { opacity: 1 });
	
	          gb.in.pageTransitionEffect.inEffect();
	
	          break;
	
	      }
	    }
	  }]);
	
	  return DisplayPjaxPage;
	}();
	
	exports.default = DisplayPjaxPage;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Display
	//
	//--------------------------------------------------
	
	
	var _Effects = __webpack_require__(21);
	
	var _Effects2 = _interopRequireDefault(_Effects);
	
	var _ScaleTop = __webpack_require__(35);
	
	var _ScaleTop2 = _interopRequireDefault(_ScaleTop);
	
	var _HoverEffectSNSSPFooter = __webpack_require__(36);
	
	var _HoverEffectSNSSPFooter2 = _interopRequireDefault(_HoverEffectSNSSPFooter);
	
	var _HoverEffectSVGArrowTop = __webpack_require__(37);
	
	var _HoverEffectSVGArrowTop2 = _interopRequireDefault(_HoverEffectSVGArrowTop);
	
	var _TopTime = __webpack_require__(17);
	
	var _TopTime2 = _interopRequireDefault(_TopTime);
	
	var _Position = __webpack_require__(38);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DisplayTop = function () {
	  function DisplayTop() {
	    _classCallCheck(this, DisplayTop);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(DisplayTop, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // ループスタート
	      gb.in.up.loop();
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //  UI / Layout
	      // ------------------------------------------------------------
	      // sp
	      gb.in.scaleTop = new _ScaleTop2.default();
	      gb.in.pos = new _Position2.default();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	
	      // sp
	      gb.in.sliderTop.setEvents();
	      gb.in.snsSPHoverEf = new _HoverEffectSNSSPFooter2.default($('#sideL'));
	
	      // pc
	      // new HoverEffectSVGArrowTop($('.section01 .next')); // → TopOpeningへ
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'run',
	    value: function run() {
	
	      // ------------------------------------------------------------
	      //  UI / Layout
	      // ------------------------------------------------------------
	      // sp
	      gb.in.scaleTop = new _ScaleTop2.default();
	      gb.in.pos = new _Position2.default();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	
	      // sp
	      gb.in.sliderTop.setEvents();
	      gb.in.snsSPHoverEf = new _HoverEffectSNSSPFooter2.default($('#sideL'));
	
	      // pc
	      this.ht = new _HoverEffectSVGArrowTop2.default($('.section01 .next'));
	      this.ht.autoArrow();
	      gb.in.time = new _TopTime2.default();
	      if (gb.in.sec01Video.video) gb.in.sec01Video.video.playByNYTime(); // sp用にも gb.in.sec01Videoが存在するかどうか判定
	      if (gb.in.sec01Video.video) gb.in.sec01Video.video.setEvents(); // sp用にも gb.in.sec01Videoが存在するかどうか判定
	
	    }
	  }]);
	
	  return DisplayTop;
	}();
	
	exports.default = DisplayTop;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Effects
	//
	//--------------------------------------------------
	
	
	var _CVContents = __webpack_require__(22);
	
	var _CVContents2 = _interopRequireDefault(_CVContents);
	
	var _GlContents = __webpack_require__(28);
	
	var _GlContents2 = _interopRequireDefault(_GlContents);
	
	var _Profiler = __webpack_require__(34);
	
	var _Profiler2 = _interopRequireDefault(_Profiler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Effects = function () {
	  function Effects() {
	    _classCallCheck(this, Effects);
	
	    this.gl = null;
	    this.dom = null;
	    this.state = '';
	
	    this.setup();
	    this.debug();
	    this.setEvents();
	  }
	
	  _createClass(Effects, [{
	    key: 'setup',
	    value: function setup() {
	
	      // bg
	      // gb.in.Section02Bg = new Section02Bg();
	
	      // product
	      // gb.in.Section04Product = new Section04Product($('.section03'));
	
	    }
	  }, {
	    key: 'debug',
	    value: function debug() {
	
	      // profiler設定
	      // new Profiler();
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Effects;
	}();
	
	exports.default = Effects;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  CVContents
	//
	//--------------------------------------------------
	
	
	var _CVContentsLoop = __webpack_require__(23);
	
	var _CVContentsLoop2 = _interopRequireDefault(_CVContentsLoop);
	
	var _CVContentsTimeline = __webpack_require__(24);
	
	var _CVContentsTimeline2 = _interopRequireDefault(_CVContentsTimeline);
	
	var _CreateCanvas = __webpack_require__(25);
	
	var _CreateCanvas2 = _interopRequireDefault(_CreateCanvas);
	
	var _FullSize = __webpack_require__(16);
	
	var _FullSize2 = _interopRequireDefault(_FullSize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CVContents = function () {
	  function CVContents() {
	    _classCallCheck(this, CVContents);
	
	    this.setup();
	    // this.create();
	    this.setEvents();
	    // loop
	    this.loop = new _CVContentsLoop2.default();
	    // timeline
	    this.timeline = new _CVContentsTimeline2.default();
	  }
	
	  _createClass(CVContents, [{
	    key: 'setup',
	    value: function setup() {
	
	      // リソースのロード
	      // gb.in.loadMgr.sec02Img();
	
	
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	
	      // gb.in.rm.total += 1;
	      // canvasの生成
	      // レティーナ用に2倍
	      gb.in.canvas = new _CreateCanvas2.default($('#bgWrap .sec02BgCanvas'), gb.in.conf.defW, gb.in.conf.defH, function () {
	
	        var l = new _FullSize2.default($('#bgWrap'), $('.sec02BgCanvas'), 0, 'FullSizeSec02BgCanvas');
	        l.targetDefW = gb.in.conf.defW;
	        l.targetDefH = gb.in.conf.defH;
	        l.run();
	      });
	
	      // ui追加(コントローラー、profilerなど)
	      // this.addUI();
	
	    }
	  }, {
	    key: 'addUI',
	    value: function addUI() {
	
	      // paramrter調整
	      // gb.in.param = new gb.Param();
	
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	
	      this.loop.start();
	      this.timeline.tlMain.play();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	
	      this.loop.pause();
	      this.timeline.tlMain.pause();
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // gb.in.r.add('cvContents', this.onResize.bind(this));
	      // gb.in.hash.onChangeFuncList.push(this.onSection02.bind(this));
	
	    }
	  }]);
	
	  return CVContents;
	}();
	
	exports.default = CVContents;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  CVContentsLoop
	//
	//--------------------------------------------------
	
	var CVContentsLoop = function () {
	  function CVContentsLoop() {
	    _classCallCheck(this, CVContentsLoop);
	
	    this.isAlways = true;
	    this.isRunStatus = true;
	    this.isAdjustParam = true;
	    this.state = 'initial';
	    this.sometimesState = 'initial';
	
	    this.loopList = [];
	
	    this.loopStart = false;
	
	    this.setEvents();
	  }
	
	  _createClass(CVContentsLoop, [{
	    key: 'update',
	    value: function update() {
	
	      if (this.isAlways) this.runAlways();
	      if (this.isRunStatus) this.runStatus();
	      if (this.isAdjustParam) this.runAdjustParam();
	    }
	
	    // ------------------------------------------------------------
	    // 常に行う処理
	    // ------------------------------------------------------------    
	
	  }, {
	    key: 'runAlways',
	    value: function runAlways() {
	
	      for (var i in this.loopList) {
	        this.loopList[i]();
	      }
	    }
	
	    // ------------------------------------------------------------
	    // 各状態の処理
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'runStatus',
	    value: function runStatus() {
	
	      if (this.state == 'initial') {} else if (this.state == 'start') {} else if (this.state == 'step01') {} else if (this.state == 'step02') {} else if (this.state == 'step03') {} else if (this.state == 'standby') {} else if (this.state == 'sometimes') {
	
	        if (this.sometimesState == 'lineShadow') {} else if (this.sometimesState == 'sphere') {} else if (this.sometimesState == 'satellite') {}
	      }
	    }
	
	    // ------------------------------------------------------------
	    // パラメータ調整用処理
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'runAdjustParam',
	    value: function runAdjustParam() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'loop',
	    value: function loop() {
	
	      if (this.loopStart) {
	
	        this.update();
	        this.draw();
	
	        // log('section02')
	      }
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	
	      this.loopStart = true;
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	
	      this.loopStart = false;
	    }
	  }, {
	    key: 'add',
	    value: function add(func) {
	
	      this.loopList.push(func);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      gb.in.up.add('section02Bg', this.loop.bind(this));
	    }
	  }]);
	
	  return CVContentsLoop;
	}();
	
	exports.default = CVContentsLoop;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  CVContentsTimeline
	//
	//--------------------------------------------------
	
	var CVContentsTimeline = function () {
	  function CVContentsTimeline() {
	    _classCallCheck(this, CVContentsTimeline);
	
	    this.tlMain = new TimelineMax();
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(CVContentsTimeline, [{
	    key: 'setup',
	    value: function setup() {
	
	      // タイムラインを止めておく
	      this.tlMain.pause();
	
	      this.beginning();
	      this.step01();
	      this.step02();
	      this.step03();
	      this.standBy();
	      this.sometimes();
	    }
	  }, {
	    key: 'beginning',
	    value: function beginning() {}
	  }, {
	    key: 'step01',
	    value: function step01() {}
	  }, {
	    key: 'step02',
	    value: function step02() {}
	  }, {
	    key: 'step03',
	    value: function step03() {}
	  }, {
	    key: 'standBy',
	    value: function standBy() {}
	
	    // 時々
	
	  }, {
	    key: 'sometimes',
	    value: function sometimes() {
	
	      var self = this;
	
	      this.tlMain.add(function () {}, '+=0.0');
	    }
	  }, {
	    key: 'onResizse',
	    value: function onResizse() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // gb.in.r.add('cvTimeline', this.onResizse.bind(this));
	
	    }
	  }]);
	
	  return CVContentsTimeline;
	}();
	
	exports.default = CVContentsTimeline;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // ------------------------------------------------------------
	//
	//  CreateCanvas
	//
	// ------------------------------------------------------------
	
	
	var _Canvas = __webpack_require__(26);
	
	var _Canvas2 = _interopRequireDefault(_Canvas);
	
	var _Plane = __webpack_require__(27);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CreateCanvas = function () {
	  function CreateCanvas($wrap, w, h) {
	    var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
	
	    _classCallCheck(this, CreateCanvas);
	
	    this.c = null;
	    this.cw = 0;
	    this.ch = 0;
	
	    this.fillStyle = '0,0,0';
	    this.$wrap = $wrap;
	
	    this.loopList = [];
	
	    // 最初オブジェクト生成するためにboolean あえて逆に
	    this.isResize = gb.in.u.isResPC ? false : true;
	
	    this.cb = cb;
	
	    this.w = 260;
	    this.h = 146;
	
	    this.setup();
	    this.setEvents();
	    this.setCanvasSize(w, h);
	    this.timeline();
	  }
	
	  _createClass(CreateCanvas, [{
	    key: 'setup',
	    value: function setup() {
	      //canvas finger point
	
	      this.c = new _Canvas2.default();
	
	      // this.addObjects();
	      this.onResize();
	
	      this.$wrap.append(this.c.canvas);
	
	      this.cb();
	    }
	  }, {
	    key: 'addObjects',
	    value: function addObjects(vx) {
	      //canvas finger point
	
	      this.loopList = [];
	
	      var offset = 0;
	      var offsetFrame = 0;
	      var offsetVx = 0;
	
	      this.xNum = 8;
	      this.yNum = 6;
	      this.len = this.xNum * this.yNum;
	
	      this.tileList = [];
	
	      if (gb.in.u.isPC) {
	        var total = gb.in.conf.sec02ImgNum;
	      } else {
	        var total = 19;
	      }
	
	      for (var i = 0; i < this.len; i++) {
	
	        this.tile = new _Plane2.default(this.c.ctx, this.fillStyle);
	
	        var nth = i % this.xNum;
	        if (nth == 0) offset = -500 + Math.floor(Math.random() * 500) - 250;
	        if (nth == 0) offsetFrame = Math.floor(total * Math.random());
	        if (nth == 0) offsetVx = vx + Math.floor(vx * 2 * Math.random());
	
	        var x = nth * this.w + offset;
	        var y = Math.floor(i / this.xNum) * this.h;
	
	        this.tile.setup(x, y, this.w, this.h, offsetFrame + nth * 3, offsetVx, offset);
	        this.tileList.push(this.tile);
	        this.add(this.tile.loop.bind(this.tile));
	      };
	    }
	  }, {
	    key: 'setCanvasSize',
	    value: function setCanvasSize(w, h) {
	
	      this.cw = this.c.canvas.width = w;
	      this.ch = this.c.canvas.height = h;
	    }
	  }, {
	    key: 'loop',
	    value: function loop() {
	
	      // this.c.ctx.clearRect(0,0,this.cw,this.ch);
	      // this.c.ctx.fillStyle = 'rgba(255,255,255,0.08)';
	
	      this.c.ctx.fillStyle = 'rgba(255,255,255,0.6)';
	      this.c.ctx.fillRect(0, 0, this.cw, this.ch);
	
	      for (var i in this.loopList) {
	        this.loopList[i]();
	      }
	    }
	  }, {
	    key: 'timeline',
	    value: function timeline() {}
	  }, {
	    key: 'add',
	    value: function add(func) {
	
	      this.loopList.push(func);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      log(gb.in.u.isResSP, gb.in.u.isResPC);
	
	      if (gb.in.u.isResSP && this.isResize) {
	        this.isResize = false;
	
	        this.addObjects(0.5);
	
	        for (var i = 0; i < this.tileList.length; i++) {
	
	          this.tileList[i].cntStop = true;
	        };
	
	        log(1111);
	      } else if (gb.in.u.isResPC && !this.isResize) {
	        this.isResize = true;
	
	        this.addObjects(0.5);
	
	        // スマホだったら、広い表示でもフレームの動きを止める
	        if (gb.in.u.isSP) {
	
	          for (var i = 0; i < this.tileList.length; i++) {
	
	            this.tileList[i].cntStop = true;
	          };
	
	          return;
	        }
	
	        for (var i = 0; i < this.tileList.length; i++) {
	
	          this.tileList[i].cntStop = false;
	        };
	
	        log(2222);
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.Sec02Bg.loop.add(this.loop.bind(this));
	      gb.in.r.add('CreateCanvas', this.onResize.bind(this));
	    }
	  }]);
	
	  return CreateCanvas;
	}();
	
	exports.default = CreateCanvas;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Canvas
	//
	// ------------------------------------------------------------
	
	var Canvas = function () {
	  function Canvas() {
	    _classCallCheck(this, Canvas);
	
	    this.canvas = null;
	    this.ctx = null;
	    this.w = $(window).width();
	    this.h = $(window).height();
	
	    this.setup();
	  }
	
	  _createClass(Canvas, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.canvas = document.createElement('canvas');
	      this.ctx = this.canvas.getContext('2d');
	      this.canvas.width = this.w;
	      this.canvas.height = this.h;
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }]);
	
	  return Canvas;
	}();
	
	exports.default = Canvas;

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Plane
	//
	// ------------------------------------------------------------
	
	var Plane = function () {
	  function Plane(ctx, strokeStyle) {
	    _classCallCheck(this, Plane);
	
	    this.ctx = ctx;
	
	    this.strokeStyle = strokeStyle;
	    this.op = { val: 1 };
	
	    this.cnt = 0;
	
	    this.cntStop = false;
	
	    // this.setup();
	    this.create();
	  }
	
	  _createClass(Plane, [{
	    key: "setup",
	    value: function setup(x, y, w, h, frameStart, vx, offset) {
	
	      this.imgList = gb.in.loadSec02Img.list;
	
	      this.x = x;
	      this.y = y;
	      this.w = w;
	      this.h = h;
	
	      this.vx = vx;
	
	      this.offset = offset;
	
	      this.cnt = frameStart;
	    }
	  }, {
	    key: "create",
	    value: function create() {}
	
	    // 頂点で描く
	
	  }, {
	    key: "update",
	    value: function update() {
	
	      this.x -= this.vx;
	      if (this.x < -this.w) this.x = gb.in.canvas.cw - 10;
	    }
	  }, {
	    key: "draw",
	    value: function draw() {
	
	      if (!this.cntStop) {
	
	        // 間引き
	        if (gb.in.up.cnt % 3 == 0) this.cnt++;else ;
	      };
	      // this.cnt++;
	
	      if (gb.in.u.isPC) {
	        var total = gb.in.conf.sec02ImgNum;
	      } else {
	        var total = 19;
	      }
	
	      var img = this.imgList[this.cnt % total];
	      this.ctx.drawImage(img, this.x, this.y, this.w, this.h);
	    }
	  }, {
	    key: "loop",
	    value: function loop() {
	
	      this.update();
	      this.draw();
	    }
	  }]);
	
	  return Plane;
	}();
	
	exports.default = Plane;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  GlContents
	//
	//--------------------------------------------------
	
	
	var _GlContentsLoop = __webpack_require__(29);
	
	var _GlContentsLoop2 = _interopRequireDefault(_GlContentsLoop);
	
	var _GlContentsTimeline = __webpack_require__(30);
	
	var _GlContentsTimeline2 = _interopRequireDefault(_GlContentsTimeline);
	
	var _Plane = __webpack_require__(32);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	var _Param = __webpack_require__(33);
	
	var _Param2 = _interopRequireDefault(_Param);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GlContents = function () {
	  function GlContents() {
	    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('body');
	
	    _classCallCheck(this, GlContents);
	
	    this.renderer;
	    this.camera;
	    this.scene;
	    this.light;
	
	    this.state = 'initial';
	    this.adjustParam = true;
	    this.stateLineRotate = false;
	    this.sometimesState = 'initial';
	
	    this.isControl = false;
	    this.controls;
	
	    this.setup();
	    this.create($wrap);
	    this.setEvents();
	    // loop
	    this.loop = new _GlContentsLoop2.default();
	    // timeline
	    this.timeline = new _GlContentsTimeline2.default();
	  }
	
	  _createClass(GlContents, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'create',
	    value: function create($wrap) {
	
	      // render
	      gb.in.renderer = this.renderer = new THREE.WebGLRenderer({ antialias: true });
	      this.renderer.setSize(gb.in.r.W(), gb.in.r.H());
	      this.renderer.setClearColor(0xffffff, 0.0);
	      $wrap.append(this.renderer.domElement);
	      // document.body.appendChild(  );
	      $(this.renderer.domElement).css({
	        position: 'absolute',
	        top: 0, left: 0,
	        'z-index': 1
	      });
	
	      // scene
	      gb.in.scene = new gb.Scene();
	      this.scene = gb.in.scene.scene;
	
	      // camera
	      gb.in.camera = new gb.Camera();
	      this.camera = gb.in.camera.camera;
	
	      // light
	      this.light = new THREE.DirectionalLight(0xffffff, 3);
	      this.light.position.z = 3;
	      this.scene.add(this.light);
	
	      // オブジェクト追加
	      this.addObjects();
	
	      // ui追加(コントローラー、profilerなど)
	      // this.addUI();
	
	      // リソースのロード
	      gb.in.loadMgr.section04ProductShader();
	    }
	  }, {
	    key: 'addObjects',
	    value: function addObjects() {
	
	      this.plane = new _Plane2.default();
	    }
	  }, {
	    key: 'addUI',
	    value: function addUI() {
	
	      // controls
	
	      if (this.isControl) {
	
	        gb.in.controls = this.controls = new THREE.TrackballControls(this.camera);
	        this.controls.zoomSpeed = 0.8;
	        this.controls.rotateSpeed = 3;
	      };
	
	      // profiler設定
	      new gb.Profiler();
	      // paramrter調整
	      gb.in.param = new _Param2.default();
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      var w = window.innerWidth;
	      var h = window.innerHeight;
	
	      this.renderer.setSize(w, h);
	      this.camera.aspect = w / h;
	      this.camera.updateProjectionMatrix();
	    }
	  }, {
	    key: 'onSection04',
	    value: function onSection04(cur, prev) {
	
	      if (cur == 'product') {
	
	        this.loop.start();
	        this.timeline.tlMain.play();
	      } else {
	
	        this.loop.pause();
	        this.timeline.tlMain.pause();
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      gb.in.r.add(this.onResize.bind(this));
	      gb.in.hash.onChangeFuncList.push(this.onSection04.bind(this));
	      $(window).on('onSection04ProductImg', function () {
	        _this.timeline.setup();
	      });
	    }
	  }]);
	
	  return GlContents;
	}();
	
	exports.default = GlContents;

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  GlContentsLoop
	//
	//--------------------------------------------------
	
	var GlContentsLoop = function () {
	  function GlContentsLoop() {
	    _classCallCheck(this, GlContentsLoop);
	
	    this.isAlways = true;
	    this.isRunStatus = true;
	    this.isAdjustParam = true;
	    this.state = 'initial';
	    this.sometimesState = 'initial';
	
	    this.loopStart = false;
	
	    this.loopList = [];
	
	    this.setEvents();
	  }
	
	  _createClass(GlContentsLoop, [{
	    key: 'update',
	    value: function update() {
	
	      if (this.isAlways) this.runAlways();
	      if (this.isRunStatus) this.runStatus();
	      if (this.isAdjustParam) this.runAdjustParam();
	    }
	
	    // ------------------------------------------------------------
	    // 常に行う処理
	    // ------------------------------------------------------------    
	
	  }, {
	    key: 'runAlways',
	    value: function runAlways() {
	
	      if (gb.in.Section04Product.isControl) gb.in.controls.update();
	
	      // camera
	      gb.in.camera.updateControll();
	    }
	
	    // ------------------------------------------------------------
	    // 各状態の処理
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'runStatus',
	    value: function runStatus() {
	
	      if (this.state == 'initial') {} else if (this.state == 'start') {} else if (this.state == 'step01') {} else if (this.state == 'step02') {} else if (this.state == 'step03') {} else if (this.state == 'standby') {} else if (this.state == 'sometimes') {
	
	        if (this.sometimesState == 'lineShadow') {} else if (this.sometimesState == 'sphere') {} else if (this.sometimesState == 'satellite') {}
	      }
	    }
	
	    // ------------------------------------------------------------
	    // パラメータ調整用処理
	    // ------------------------------------------------------------
	
	  }, {
	    key: 'runAdjustParam',
	    value: function runAdjustParam() {}
	  }, {
	    key: 'draw',
	    value: function draw() {
	
	      gb.in.renderer.render(gb.in.scene.scene, gb.in.camera.camera);
	      // gb.in.postprocess.composer.render(0.1);
	    }
	  }, {
	    key: 'loop',
	    value: function loop() {
	
	      if (this.loopStart) {
	
	        this.update();
	        this.draw();
	
	        log('section04');
	      }
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	
	      this.loopStart = true;
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	
	      this.loopStart = false;
	    }
	  }, {
	    key: 'add',
	    value: function add(func) {
	
	      this.loopList.push(func);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      gb.in.up.add('section04Product', this.loop.bind(this));
	    }
	  }]);
	
	  return GlContentsLoop;
	}();
	
	exports.default = GlContentsLoop;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  GlContentsTimeline
	//
	//--------------------------------------------------
	
	var _SometimesMgr = __webpack_require__(31);
	
	var _SometimesMgr2 = _interopRequireDefault(_SometimesMgr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GlContentsTimeline = function () {
	  function GlContentsTimeline() {
	    _classCallCheck(this, GlContentsTimeline);
	
	    this.tlMain = new TimelineMax();
	    // this.setup();
	    this.setEvents();
	  }
	
	  _createClass(GlContentsTimeline, [{
	    key: 'setup',
	    value: function setup() {
	
	      // タイムラインを止めておく
	      this.tlMain.pause();
	
	      this.beginning();
	      // this.step01();
	      // this.step02();
	      // this.step03();
	      // this.standBy();
	      this.sometimes();
	    }
	  }, {
	    key: 'beginning',
	    value: function beginning() {
	
	      this.tlMain
	      // zoom in
	      .to(gb.in.loadMgr.shaders[0].uniforms.strength, 1.3, {
	        value: 500,
	        ease: Expo.easeInOut,
	        onStart: function onStart() {
	
	          TweenMax.set(gb.in.loadMgr.shaders[1].uniforms.strength, { value: 500 });
	        }
	      })
	
	      // camera移動
	      .to(gb.in.camera.camera.position, 1.5, {
	        z: 200,
	        ease: Expo.easeInOut
	      }, '-=1.3')
	
	      // plane移動
	      .to(gb.in.Section04Product.plane.plane.position, 1.5, {
	        x: -100,
	        y: 200,
	        ease: Expo.easeInOut
	      }, '-=1.5')
	
	      // zoom out
	      .to(gb.in.loadMgr.shaders[0].uniforms.strength, 1, {
	        value: 0,
	        ease: Expo.easeIn
	      }, '-=0.4')
	
	      // plane01がopacityで消える
	      .to(gb.in.loadMgr.shaders[0].uniforms.opacity, 1, {
	        value: 0,
	        ease: Power3.easeInOut
	      }, '-=0.7')
	
	      // plane02のblur out
	      .to(gb.in.loadMgr.shaders[1].uniforms.strength, 1, {
	        value: 0,
	        ease: Expo.easeInOut
	      }, '-=1.0')
	
	      // plane02が出て来る
	      .to(gb.in.loadMgr.shaders[1].uniforms.opacity, 1, {
	        value: 1,
	        ease: Expo.easeInOut
	      }, '-=1.0').to(gb.in.camera.camera.position, 1.5, {
	        z: 400,
	        ease: Expo.easeOut,
	        onComplete: function onComplete() {
	
	          // materialの変更
	
	          gb.in.loadMgr.shaders[2].uniforms.from.value = gb.in.Section04Product.plane.textures[1];
	          gb.in.loadMgr.shaders[2].uniforms.to.value = gb.in.Section04Product.plane.textures[2];
	
	          gb.in.Section04Product.plane.plane02.material = new THREE.ShaderMaterial({
	            uniforms: gb.in.loadMgr.shaders[2].uniforms,
	            vertexShader: gb.in.loadMgr.shaders[2].vs,
	            fragmentShader: gb.in.loadMgr.shaders[2].fs,
	            transparent: true
	          });
	
	          gb.in.Section04Product.plane.plane02.scale.x = gb.in.Section04Product.plane.plane02.scale.y = 1200.0;
	        }
	      }, '-=1.0');
	    }
	  }, {
	    key: 'step01',
	    value: function step01() {}
	  }, {
	    key: 'step02',
	    value: function step02() {}
	  }, {
	    key: 'step03',
	    value: function step03() {}
	  }, {
	    key: 'standBy',
	    value: function standBy() {}
	
	    // 時々
	
	  }, {
	    key: 'sometimes',
	    value: function sometimes() {
	
	      var self = this;
	
	      this.tlMain.add(function () {
	
	        var s = new _SometimesMgr2.default();
	
	        s.add(function () {
	
	          TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
	            value: 1,
	            ease: Expo.easeInOut,
	            onComplete: function onComplete() {
	
	              gb.in.loadMgr.shaders[2].uniforms.from.value = gb.in.Section04Product.plane.textures[3];
	            }
	
	          });
	        }, 2.0, 2.0);
	
	        s.add(function () {
	
	          TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
	            value: 0,
	            ease: Expo.easeInOut,
	            onComplete: function onComplete() {
	
	              gb.in.loadMgr.shaders[2].uniforms.to.value = gb.in.Section04Product.plane.textures[4];
	            }
	
	          });
	        }, 2.0, 2.0);
	
	        s.add(function () {
	
	          TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
	            value: 1,
	            ease: Expo.easeInOut,
	            onComplete: function onComplete() {
	
	              gb.in.loadMgr.shaders[2].uniforms.from.value = gb.in.Section04Product.plane.textures[5];
	            }
	
	          });
	        }, 2.0, 2.0);
	
	        s.add(function () {
	
	          TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
	            value: 0,
	            ease: Expo.easeInOut,
	            onComplete: function onComplete() {
	
	              gb.in.loadMgr.shaders[2].uniforms.to.value = gb.in.Section04Product.plane.textures[1];
	            }
	
	          });
	        }, 2.0, 2.0);
	
	        s.add(function () {
	
	          TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
	            value: 1,
	            ease: Expo.easeInOut,
	            onComplete: function onComplete() {
	
	              gb.in.loadMgr.shaders[2].uniforms.from.value = gb.in.Section04Product.plane.textures[2];
	            }
	
	          });
	        }, 2.0, 2.0);
	
	        s.start();
	      }, '+=0.0');
	    }
	  }, {
	    key: 'onResizse',
	    value: function onResizse() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add(this.onResizse.bind(this));
	
	      $(window).on('click', function () {
	
	        // this.start();
	
	      });
	    }
	  }]);
	
	  return GlContentsTimeline;
	}();
	
	exports.default = GlContentsTimeline;

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  SomeTimes
	//
	//--------------------------------------------------
	
	var SomeTimes = function () {
	  function SomeTimes() {
	    _classCallCheck(this, SomeTimes);
	
	    this.SomeTimes;
	    this.Timer = null;
	    this.cbList = [];
	    this.len = 0;
	    this.order = 0;
	
	    this.min = [];
	    this.max = [];
	
	    this.setup();
	  }
	
	  _createClass(SomeTimes, [{
	    key: "setup",
	    value: function setup() {}
	  }, {
	    key: "start",
	    value: function start() {
	      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	
	      this.later = gb.in.u.random(min, max) * 1000;
	      this.Timer = setTimeout(this.run.bind(this), this.later);
	    }
	  }, {
	    key: "run",
	    value: function run() {
	
	      this.order = this.order % this.len;
	
	      this.later = gb.in.u.random(this.min[this.order], this.max[this.order]) * 1000;
	
	      this.cbList[this.order]();
	
	      this.order++;
	      this.Timer = setTimeout(this.run.bind(this), this.later);
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	
	      log(this.Timer);
	      clearTimeout(this.Timer);
	    }
	  }, {
	    key: "add",
	    value: function add(func) {
	      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
	      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
	
	
	      this.min.push(min);
	      this.max.push(max);
	
	      this.cbList.push(func);
	      this.len = this.cbList.length;
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {}
	  }]);
	
	  return SomeTimes;
	}();
	
	exports.default = SomeTimes;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Plane
	//
	//--------------------------------------------------
	
	var Plane = function () {
	  function Plane() {
	    _classCallCheck(this, Plane);
	
	    this.geometry = null;
	    this.material = null;
	
	    this.video = null;
	    this.plane = null;
	
	    this.defWW = 1920;
	    this.defHH = 1080;
	    this.defW = 305;
	    this.rate = 0;
	    this.rateW = 0;
	
	    this.lb = null; //layout background
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Plane, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'create',
	    value: function create(cb) {
	
	      var textures = this.textures = gb.in.loadMgr.textures;
	
	      var w = textures[0].image.width / textures[0].image.width;
	      var h = textures[0].image.height / textures[0].image.width;
	
	      // plane01
	
	      var geometry = new THREE.PlaneGeometry(w, h, 1, 1);
	      var material = new THREE.ShaderMaterial({
	        uniforms: gb.in.loadMgr.shaders[0].uniforms,
	        vertexShader: gb.in.loadMgr.shaders[0].vs,
	        fragmentShader: gb.in.loadMgr.shaders[0].fs,
	        transparent: true
	      });
	
	      this.plane = new THREE.Mesh(geometry, material);
	      this.plane.scale.x = this.plane.scale.y = 2000.0;
	
	      // plane02
	
	      var w = textures[1].image.width / textures[1].image.width;
	      var h = textures[1].image.height / textures[1].image.width;
	
	      var geometry = new THREE.PlaneGeometry(w, h, 1, 1);
	      var material = new THREE.ShaderMaterial({
	        uniforms: gb.in.loadMgr.shaders[1].uniforms,
	        vertexShader: gb.in.loadMgr.shaders[1].vs,
	        fragmentShader: gb.in.loadMgr.shaders[1].fs,
	        transparent: true
	      });
	
	      this.plane02 = new THREE.Mesh(geometry, material);
	      this.plane02.scale.x = this.plane02.scale.y = 600.0;
	
	      gb.in.loadMgr.shaders[0].uniforms.opacity.value = 1;
	      gb.in.loadMgr.shaders[1].uniforms.opacity.value = 0;
	
	      this.plane02.position.z = -1;
	
	      gb.in.scene.scene.add(this.plane);
	      gb.in.scene.scene.add(this.plane02);
	
	      // this.onResize();
	      // this.setEvents();
	
	      // テクスチャをuniform変数に追加
	      gb.in.loadMgr.shaders[0].uniforms.texture.value = textures[0];
	      gb.in.loadMgr.shaders[0].uniforms.texture01.value = textures[1];
	
	      gb.in.loadMgr.shaders[1].uniforms.texture.value = textures[1];
	      gb.in.loadMgr.shaders[1].uniforms.texture01.value = textures[1];
	
	      cb();
	    }
	  }, {
	    key: 'setVideoSize',
	    value: function setVideoSize() {
	
	      // videoのセットサイズ          
	      // this.lb = new gb.LayoutBackground($('body'),$(this.video.video));
	      // this.setEvents();
	
	    }
	  }, {
	    key: 'setTransparent',
	    value: function setTransparent(val) {
	
	      // this.plane.material.opacity = val;
	
	    }
	  }, {
	    key: 'tweenTransparent',
	    value: function tweenTransparent(time, val) {
	
	      // var t = time || 1.0;
	      // var v = val.target || 1.0;
	      // var e = val.ease || Power2.easeOut;
	
	      // TweenMax.to(this.plane.material, t, {
	      //   opacity: v,
	      //   ease : e,
	      // });
	
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // var w = window.innerWidth;
	      // var h = window.innerHeight;
	
	      // var rateW = window.innerHeight / window.innerWidth;
	      // var r = w/h;
	
	      // if (rateW < this.rate) {
	
	      //   this.plane.scale.set(r*0.58,r*0.58,r*0.58)
	
	      // } else {
	
	      //   // log(2,scaleY);
	
	      //   this.plane.scale.set(1,1,1);
	
	      // }
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // gb.in.rm.total += 1; // load数のtotalを計算
	      $(window).on('onSection04ProductImg', this.create.bind(this, function () {
	        //gb.in.rm.completed++;
	      }));
	    }
	  }]);
	
	  return Plane;
	}();
	
	exports.default = Plane;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Param
	//
	//--------------------------------------------------
	
	var Param = function () {
	  function Param() {
	    _classCallCheck(this, Param);
	
	    this.gui;
	    this.json = {};
	    // this.appName = "plusMV";
	
	    var isFlag = true;
	
	    this.clock = {
	      progress: 0.5
	    };
	
	    this.zoomblur = {
	      strength: 46.0,
	      size: 89.0
	    };
	
	    this.transition = {
	      progress: 0.0,
	      size: 0.04,
	      zoom: 30,
	      colorSeparation: 0.3,
	      strength: 0.6,
	      tween: function tween() {
	
	        var val;
	        if (isFlag) val = 1.0;else val = 0.0;
	
	        isFlag = !isFlag;
	
	        TweenMax.to(gb.in.plane02.shader.uniforms.progress, 2.5, {
	          value: val,
	          ease: Power4.easeOut
	        });
	      }
	    };
	
	    this.setupData();
	    this.setup();
	  }
	
	  _createClass(Param, [{
	    key: 'setupData',
	    value: function setupData() {}
	  }, {
	    key: 'setup',
	    value: function setup() {
	
	      // if (gb.in.conf.PARAM) {
	
	      this.gui = new dat.GUI();
	      // this.gui = new dat.GUI({load: this.json});
	      this.gui.remember(this);
	      $(".dg").css({ zIndex: 99999 });
	
	      var f1 = this.gui.addFolder('zoomblur');
	      f1.add(this.zoomblur, 'strength', 0.0, 2.0).step(0.01).listen().onChange(function (val) {
	
	        gb.in.plane.shaders[2].uniforms.strength.value = val;
	        log(val);
	      });
	      f1.add(this.zoomblur, 'size', 0.0, 100.0).step(0.1).listen().onChange(function (val) {
	
	        gb.in.plane.shader.uniforms.nFrag.value = 1 / val;
	      });
	      f1.open();
	
	      // this.gui.close();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return Param;
	}();
	
	exports.default = Param;

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Profiler
	//
	//--------------------------------------------------
	
	var Profiler = function () {
	  function Profiler() {
	    _classCallCheck(this, Profiler);
	
	    this.Stats;
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Profiler, [{
	    key: "setup",
	    value: function setup() {
	
	      // if (gb.in.conf.STATS) {
	
	      this.Stats = new Stats();
	      this.Stats.domElement.style.position = "fixed";
	      this.Stats.domElement.style.left = "0px";
	      this.Stats.domElement.style.top = "0px";
	      document.body.appendChild(this.Stats.domElement);
	
	      // };
	    }
	  }, {
	    key: "update",
	    value: function update() {
	
	      if (this.Stats) {
	        this.Stats.update();
	      }
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	
	      gb.in.up.add('profiler', this.update.bind(this));
	    }
	  }]);
	
	  return Profiler;
	}();
	
	exports.default = Profiler;

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Layout
	//
	//--------------------------------------------------
	var Scale = function () {
	  function Scale() {
	    _classCallCheck(this, Scale);
	
	    this.SPBaseW = 375;
	    this.PCBaseW = 1300;
	
	    this.rate = 1;
	    this.W = window.innerWidth;
	
	    this.$targetList = [{
	      '$target': $('#sideL, #sideR, #nav'),
	      'scale': 'spOnly' // spOnly pcOnly both
	    }];
	
	    this.run();
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Scale, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {
	
	      this.W = $(window).width();
	      this.iW = window.innerWidth;
	
	      this.scale();
	      this.wrap();
	    }
	
	    // 拡大
	
	  }, {
	    key: 'scale',
	    value: function scale() {
	      var _this = this;
	
	      // bpの場合のscale
	      if (this.iW <= gb.in.conf.bp) {
	
	        // widthからrateを計算
	        // this.rate = gb.in.u.floatFormat(this.W / this.SPBaseW , 2);
	        if (this.W > 375) this.W = 375;
	        if (this.W < 320) this.W = 320;
	        log(this.W);
	        this.rate = this.W / this.SPBaseW;
	
	        // scaleするリストをループ
	        $.each(this.$targetList, function (index, val) {
	
	          if (val.scale == 'both' || val.scale == 'spOnly') {
	
	            TweenMax.set(val.$target, {
	              scale: _this.rate
	            });
	          };
	        });
	      } else {
	
	        // widthからrateを計算
	        // this.rate = gb.in.u.floatFormat(this.W / this.PCBaseW , 2);
	        if (this.W > 1300) this.W = 1300;
	        this.rate = this.W / this.PCBaseW;
	
	        // scaleするリストをループ
	        $.each(this.$targetList, function (index, val) {
	
	          if (val.scale == 'both' || val.scale == 'pcOnly') {
	
	            TweenMax.set(val.$target, {
	              scale: _this.rate
	            });
	          };
	
	          // こちらの場合は、scaleを戻す
	          if (val.scale == 'spOnly') {
	
	            TweenMax.set(val.$target, {
	              scale: 1
	            });
	          };
	        });
	      }
	    }
	
	    // scaleしたら、元の大きさ分余白ができるのでoverflow hiddenで消す
	
	  }, {
	    key: 'wrap',
	    value: function wrap() {}
	  }, {
	    key: 'reset',
	    value: function reset() {
	
	      $.each(this.$targetList, function (index, val) {
	
	        TweenMax.set(val.$target, {
	          scale: 1,
	          'transform-origin': '0 0',
	          '-webkit-transform-origin': '0 0'
	        });
	      });
	
	      // イベント解除
	      gb.in.r.remove('scaleTop');
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.run();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('scaleTop', this.onResize.bind(this));
	    }
	  }]);
	
	  return Scale;
	}();
	
	exports.default = Scale;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectSNSSPFooter
	//
	//--------------------------------------------------
	
	var HoverEffectSNSSPFooter = function () {
	  function HoverEffectSNSSPFooter($wrap, $target) {
	    _classCallCheck(this, HoverEffectSNSSPFooter);
	
	    this.$wrap = $wrap;
	    this.$inner = this.$wrap.find('.inner');
	    this.$target = this.$wrap.find('.sns.sp .iconShare');
	    this.$bar = this.$wrap.find('.sns.sp .bar');
	    this.$list = this.$wrap.find('.sns.sp .list');
	    this.$item = this.$wrap.find('.sns.sp .list .item');
	
	    // motion
	    this.tl = new TimelineMax();
	
	    this.setEvents();
	  }
	
	  _createClass(HoverEffectSNSSPFooter, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // ox
	      TweenMax.set(this.$wrap, { width: 0 });
	
	      // bar
	      TweenMax.set(this.$bar, { width: 0 });
	
	      // sns
	      TweenMax.set(this.$item, { x: -40, opacity: 0 });
	
	      this.$bar.show();
	      this.$list.show();
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	
	      if (this.$target.hasClass('on')) {
	        this.isOpen = false;
	
	        this.close();
	      } else {
	        this.isOpen = true;
	
	        this.open();
	      };
	
	      this.$target.toggleClass('on');
	    }
	  }, {
	    key: 'open',
	    value: function open(that) {
	
	      TweenMax.killTweensOf(this.$box);
	      TweenMax.killTweensOf(this.$bar);
	      TweenMax.killTweensOf(this.$item);
	
	      this.ready();
	
	      // barが伸びる
	
	      var tl = new TimelineMax();
	
	      tl
	      // boxが伸びる
	      .to(this.$wrap, 0.4, {
	        width: 330,
	        ease: Power3.easeOut
	      }).to(this.$bar, 0.3, {
	        width: 30,
	        ease: Power3.easeOut
	      }, '-=0.2').to(this.$item.eq(0), 0.3, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeOut
	      }, '-=0.2').to(this.$item.eq(1), 0.3, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeOut
	      }, '-=0.25').to(this.$item.eq(2), 0.3, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeOut
	      }, '-=0.25').to(this.$item.eq(3), 0.3, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeOut
	      }, '-=0.25');
	    }
	  }, {
	    key: 'close',
	    value: function close(that) {
	      var _this = this;
	
	      TweenMax.killTweensOf(this.$box);
	      TweenMax.killTweensOf(this.$bar);
	      TweenMax.killTweensOf(this.$item);
	
	      // bar
	      var tl = new TimelineMax();
	
	      tl.to(this.$item.eq(3), 0.3, {
	        x: -40,
	        opacity: 0,
	        ease: Power4.easeOut
	      }).to(this.$item.eq(2), 0.3, {
	        x: -40,
	        opacity: 0,
	        ease: Power4.easeOut
	      }, '-=0.25').to(this.$item.eq(1), 0.3, {
	        x: -40,
	        opacity: 0,
	        ease: Power4.easeOut
	      }, '-=0.25').to(this.$item.eq(0), 0.3, {
	        x: -40,
	        opacity: 0,
	        ease: Power4.easeOut,
	        onComplete: function onComplete() {
	          _this.$list.hide();
	        }
	      }, '-=0.25').to(this.$bar, 0.2, {
	        width: 0,
	        ease: Power2.easeOut,
	        onComplete: function onComplete() {
	          _this.$bar.hide();
	        }
	      }, '-=0.3').to(this.$wrap, 0.3, {
	        width: 0,
	        ease: Power3.easeOut
	      }, '-=0.3');
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	
	      this.close();
	      this.$target.off('click');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.on('click', this.toggle.bind(this));
	    }
	  }]);
	
	  return HoverEffectSNSSPFooter;
	}();
	
	exports.default = HoverEffectSNSSPFooter;

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectSVGArrowTop
	//
	//--------------------------------------------------
	
	var HoverEffectSVGArrowTop = function () {
	  function HoverEffectSVGArrowTop($target) {
	    _classCallCheck(this, HoverEffectSVGArrowTop);
	
	    this.$target = $target;
	
	    // motion
	    this.tl = new TimelineMax();
	
	    this.setup();
	
	    this.isHover = false;
	
	    // スマホのときは処理しない
	    if (gb.in.u.isPC) this.setEvents();
	  }
	
	  _createClass(HoverEffectSVGArrowTop, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      if (this.autoTL) {
	        this.autoTL.kill();
	        this.autoTL = null;
	      }
	      if (this.tl02) this.tl02.kill();
	      this.tl01 = new TimelineMax();
	
	      this.tl01
	      // 矢印を下に下げる
	      .to($(that).find('.arrow.pc'), 0.4, {
	        scaleY: 0.65,
	        y: 8,
	        opacity: 1,
	        z: 1,
	        'transform-origin': '50% 100%',
	        ease: Power4.easeOut
	      })
	      // 文字を下に下げる
	      .to($(that).find('.text'), 0.4, {
	        y: 30,
	        opacity: 1,
	        z: 1,
	        ease: Power4.easeOut
	      }, '-=0.37');
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	      var _this = this;
	
	      if (this.tl01) this.tl01.kill();
	      this.tl02 = new TimelineMax();
	
	      this.tl02
	      // 文字を下に下げる
	      .to($(that).find('.text'), 0.5, {
	        y: 0,
	        z: 1,
	        ease: Power2.easeInOut
	      })
	      // 矢印を下に下げる
	      .to($(that).find('.arrow.pc'), 0.5, {
	        scaleY: 1,
	        y: 0,
	        z: 1,
	        'transform-origin': '50% 100%',
	        ease: Power2.easeInOut,
	        onComplete: function onComplete() {
	
	          if (_this.autoTL == null) _this.autoArrow();
	        }
	      }, '-=0.45');
	    }
	  }, {
	    key: 'autoArrow',
	    value: function autoArrow() {
	
	      this.autoTL = new TimelineMax({ repeat: -1 });
	
	      this.autoTL.to(this.$target.find('.arrow.pc'), 0.6, {
	        y: 60,
	        opacity: 0,
	        delay: 5.0,
	        scaleY: 0.3,
	        'transform-origin': '50% 100%',
	        ease: Power4.easeOut
	      }).set(this.$target.find('.arrow.pc'), { scaleY: 1, y: -60 }).to(this.$target.find('.arrow.pc'), 0.5, {
	        scaleY: 1,
	        y: 0,
	        opacity: 1,
	        delay: 0.3,
	        'transform-origin': '50% 100%',
	        ease: Power4.easeOut
	      });
	    }
	  }, {
	    key: 'setupFirst',
	    value: function setupFirst() {
	
	      TweenMax.set($('.section01 .next .text'), { y: -60, opacity: 0, z: 1 });
	      TweenMax.set($('.section01 .next svg'), { y: -30, opacity: 0, z: 1 });
	    }
	  }, {
	    key: 'runFirst',
	    value: function runFirst() {
	
	      var tl = new TimelineMax();
	
	      // 文字を下に下げる
	      tl.to($('.section01 .next .text'), 1.5, {
	        y: 0,
	        opacity: 1,
	        z: 1,
	        ease: Power2.easeOut
	      }).to($('.section01 .next svg'), 1.0, {
	        y: 0,
	        opacity: 1,
	        z: 1,
	        ease: Power2.easeOut
	      }, '-=0.82');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).on('mouseenter', function (e) {
	          self.onEnter.call(self, this);
	        });
	        $(this).on('mouseleave', function (e) {
	          self.onLeave.call(self, this);
	        });
	      });
	    }
	  }]);
	
	  return HoverEffectSVGArrowTop;
	}();
	
	exports.default = HoverEffectSVGArrowTop;

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Position
	//
	//--------------------------------------------------
	
	var Position = function () {
	  function Position() {
	    _classCallCheck(this, Position);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Position, [{
	    key: 'setup',
	    value: function setup() {
	
	      // 上下中央寄せ
	      this.setCenter();
	    }
	  }, {
	    key: 'setCenter',
	    value: function setCenter() {
	
	      $('.posCenter').each(function (index, el) {
	
	        $(this).adjust();
	      });
	      $('.posCenterW').each(function (index, el) {
	
	        $(this).adjustW();
	      });
	      $('.posCenterH').each(function (index, el) {
	
	        $(this).adjustH();
	      });
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.setCenter();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('setCenter', this.onResize.bind(this));
	    }
	  }]);
	
	  return Position;
	}();
	
	exports.default = Position;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Display
	//
	//--------------------------------------------------
	
	
	var _Effects = __webpack_require__(21);
	
	var _Effects2 = _interopRequireDefault(_Effects);
	
	var _BgVideoTile = __webpack_require__(40);
	
	var _BgVideoTile2 = _interopRequireDefault(_BgVideoTile);
	
	var _Sec02Video = __webpack_require__(41);
	
	var _Sec02Video2 = _interopRequireDefault(_Sec02Video);
	
	var _LayoutMovie = __webpack_require__(47);
	
	var _LayoutMovie2 = _interopRequireDefault(_LayoutMovie);
	
	var _HoverEffectSNSSPFooter = __webpack_require__(36);
	
	var _HoverEffectSNSSPFooter2 = _interopRequireDefault(_HoverEffectSNSSPFooter);
	
	var _HoverEffectMoviePlay = __webpack_require__(50);
	
	var _HoverEffectMoviePlay2 = _interopRequireDefault(_HoverEffectMoviePlay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DisplayTop = function () {
	  function DisplayTop() {
	    _classCallCheck(this, DisplayTop);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(DisplayTop, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // Sec02Video(); youtube頭出しまで
	      gb.in.rm.total++;
	
	      // ループスタート
	      gb.in.up.loop();
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //  UI / Layout
	      // ------------------------------------------------------------
	      // 高さを合わせた後に、レイアウト
	      _LayoutMovie2.default.run();
	
	      gb.in.sec02Video = new _Sec02Video2.default();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	
	      // sp
	      gb.in.snsSPHoverEf = new _HoverEffectSNSSPFooter2.default($('.snsWrap'));
	
	      // pc
	      new _HoverEffectMoviePlay2.default($('.play .bg'));
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'run',
	    value: function run() {
	
	      // ------------------------------------------------------------
	      //  UI / Layout
	      // ------------------------------------------------------------
	      // 高さを合わせた後に、レイアウト
	      _LayoutMovie2.default.run();
	
	      gb.in.sec02Video = new _Sec02Video2.default();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	
	      // sp
	      gb.in.snsSPHoverEf = new _HoverEffectSNSSPFooter2.default($('.snsWrap'));
	
	      // pc
	      new _HoverEffectMoviePlay2.default($('.play .bg'));
	
	      // common
	      // 既にリソースのロード,canvasのsetupされているのでplayのみ
	      gb.in.Sec02Bg.play();
	    }
	  }]);
	
	  return DisplayTop;
	}();
	
	exports.default = DisplayTop;

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  BgVideoTile
	//
	//--------------------------------------------------
	
	var BgVideoTile = function () {
	  function BgVideoTile(param) {
	    _classCallCheck(this, BgVideoTile);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(BgVideoTile, [{
	    key: 'setup',
	    value: function setup() {
	
	      var id = 'UAWcs5H-qgQ';
	
	      $('.videoTile').each(function (index, el) {
	
	        var i = gb.in.u.add0(index + 1);
	        // if (index > 8) return;
	
	        gb.in.youtube.createIframe('videoTile' + i, id);
	      });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return BgVideoTile;
	}();
	
	exports.default = BgVideoTile;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Sec02Video
	//
	//--------------------------------------------------
	
	var _YoutubeForSec = __webpack_require__(42);
	
	var _YoutubeForSec2 = _interopRequireDefault(_YoutubeForSec);
	
	var _StaffCredit = __webpack_require__(43);
	
	var _StaffCredit2 = _interopRequireDefault(_StaffCredit);
	
	var _MenuBtnClose = __webpack_require__(44);
	
	var _MenuBtnClose2 = _interopRequireDefault(_MenuBtnClose);
	
	var _VolumeBar = __webpack_require__(45);
	
	var _VolumeBar2 = _interopRequireDefault(_VolumeBar);
	
	var _Sec02VideoSPModal = __webpack_require__(46);
	
	var _Sec02VideoSPModal2 = _interopRequireDefault(_Sec02VideoSPModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Sec02Video = function () {
	  function Sec02Video(id, videoID) {
	    _classCallCheck(this, Sec02Video);
	
	    this.isPlaying = false;
	    this.defZindex = 0;
	
	    this.isResize = gb.in.u.isResPC ? true : false;
	
	    this.setup(id, videoID);
	    this.setEvents();
	  }
	
	  _createClass(Sec02Video, [{
	    key: 'setup',
	    value: function setup() {
	
	      // video UI���󥹥��󥹻�
	      // pc�ΤȤ��ȡ�sp�ΤȤ��������������䤨��
	      if (gb.in.u.isPC) {
	        this.video = new _YoutubeForSec2.default('sec02Video', gb.in.conf.youtubeID02);
	      } else {
	        this.video = new _YoutubeForSec2.default('sec02VideoForSP', gb.in.conf.youtubeID02);
	        new _Sec02VideoSPModal2.default($('.play'), $('.sec02VideoForSPWrap'), $('.sec02VideoForSPWrap'));
	      }
	
	      // staff creditUI ���󥹥��󥹻�
	      this.staffCredit = new _StaffCredit2.default($('.videoUI .credit'), $('.videoUI .menuBtn'), $('.videoUI .creditWrap'));
	      this.menuBtn = new _MenuBtnClose2.default($('.videoUI .menuBtn'), '02');
	
	      gb.in.volumeBar = new _VolumeBar2.default();
	    }
	  }, {
	    key: 'onPlay',
	    value: function onPlay() {
	
	      // ���ޥۤ��ä����I�����ʤ�
	      if (gb.in.u.isSP) return;
	
	      this.isPlaying = true;
	      gb.in.m.endTime = 2000;
	      gb.in.Sec02Bg.pause();
	
	      // UI wrap����ʾ
	      $('.videoUI').show();
	
	      // subTit
	      TweenMax.set($('#header .subTit'), { 'display': 'block' }); // header subTit
	      TweenMax.to($('#header .subTit'), 0.6, { y: 0, opacity: 1, ease: Power3.easeOut }); // header subTit
	
	      // sideR scroll������
	      $('#sideR .next').hide();
	
	      // sideL sns���¤�
	      this.defZindex = $('#sideL').css('z-index');
	      $('#sideL').css('z-index', $('#wrapper').css('z-index'));
	
	      // staff credit��ʾ
	
	
	      // frame���Ǳ�ʾ
	      $('.frame').hide();
	
	      // ����UI��ʾ
	      gb.in.volumeBar.on();
	
	      // youtube iframe�α�ʾ
	      TweenMax.set($('#sec02VideoWrap'), { width: '100%', opacity: 0, scale: 1.2 });
	      TweenMax.to($('#sec02VideoWrap'), 1.2, { scale: 1, opacity: 1, ease: Power4.easeOut });
	      // ����
	      this.video.player.playVideo();
	
	      // ���`���Щ` �����`��
	      gb.in.up.add('Sec02Video', this.video.seek.bind(this.video));
	      // close �ޥ��������`��
	      gb.in.up.add('Sec02VideoMouse', this.video.mouse.bind(this.video));
	
	      // �ޥ�����λ��
	      this.video.isMouseShow = gb.in.m.y < gb.in.r.ws.h / 5 * 4 ? true : false;
	      this.video.isPlay = true;
	      this.video.isClickLock = false;
	    }
	  }, {
	    key: 'onStop',
	    value: function onStop() {
	
	      if (!this.isPlaying) return;
	      this.isPlaying = false;
	
	      // UI wrap����ʾ
	      $('.videoUI').hide();
	
	      // myminute ����
	      TweenMax.to($('#header .subTit'), 0.6, { // header subTit �L��
	        y: -60,
	        opacity: 0,
	        ease: Power3.easeOut,
	        onComplete: function onComplete() {
	          $('#header .subTit').css('display', 'none');
	        }
	      });
	
	      // sideR scroll������
	      $('#sideR .next').show();
	
	      $('#sideL').css('z-index', this.defZindex);
	
	      $('.frame').show();
	
	      gb.in.up.remove('Sec02Video');
	      gb.in.up.remove('Sec02VideoMouse');
	
	      this.video.player.pauseVideo();
	
	      gb.in.m.endTime = 10;
	
	      // ����UI��ʾ
	      gb.in.volumeBar.off();
	
	      // youtube iframe�α�ʾ
	      TweenMax.to($('#sec02VideoWrap'), 1.2, {
	        opacity: 0,
	        scale: 0.9,
	        ease: Power4.easeOut,
	        onComplete: function onComplete() {
	          TweenMax.set($('#sec02VideoWrap'), { width: '0%' });
	        }
	      });
	
	      gb.in.Sec02Bg.play();
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      if (gb.in.u.isResSP && this.isResize) {
	        this.isResize = false;
	
	        // UI wrap����ʾ
	        $('.videoUI').hide();
	        // myminute ����
	        $('#header .subTit').hide();
	
	        // this.onStop();
	        // this.video.onMouseMoveEnd(true);
	      } else if (gb.in.u.isResPC && !this.isResize && this.isPlaying) {
	
	        this.isResize = true;
	
	        // UI wrap����ʾ
	        $('.videoUI').show();
	        // myminute ����
	        $('#header .subTit').show();
	      }
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      // play�ܥ�����Ѻ������
	      $('.section02 .play').off('click');
	      // �ӻ�stop�ܥ��� ���٥���
	      $('.section02 .stopWrap').off('click');
	      gb.in.r.remove('sec02Video');
	
	      gb.in.up.remove('Sec02Video');
	      gb.in.up.remove('Sec02VideoMouse');
	
	      this.video.removeEvents();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // play�ܥ�����Ѻ������
	      $('.section02 .play').on('click', this.onPlay.bind(this));
	
	      // �ӻ�stop�ܥ��� ���٥���
	      $('.section02 .stopWrap').on('click', this.onStop.bind(this));
	
	      gb.in.r.add('sec02Video', this.onResize.bind(this));
	    }
	  }]);
	
	  return Sec02Video;
	}();
	
	exports.default = Sec02Video;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  YoutubeForSec02
	//
	//--------------------------------------------------
	
	var _FullSize = __webpack_require__(16);
	
	var _FullSize2 = _interopRequireDefault(_FullSize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var YoutubeForSec02 = function () {
	  function YoutubeForSec02(id, videoID) {
	    _classCallCheck(this, YoutubeForSec02);
	
	    this.player = null;
	    this.isFirst = true;
	
	    this.volume = { def: 0, val: 0 };
	    this.isMute = false;
	
	    this.isMouseShow = false;
	    this.cur = 0;
	
	    this.mx = 0;
	    this.my = 0;
	
	    this.status = null;
	    this.isFirstTouch = false;
	
	    this.isPlay = true;
	    this.isClickLock = false;
	    this.isClickLock02 = false;
	
	    this.easing = 0.12;
	
	    this.setup(id, videoID);
	    this.setEvents();
	  }
	
	  _createClass(YoutubeForSec02, [{
	    key: 'setup',
	    value: function setup(id, videoID) {
	
	      if (gb.in.u.isAndroid) {
	
	        var param = {
	          autoplay: 0,
	          controls: 1,
	          showinfo: 1,
	          autohide: 1,
	          rel: 0,
	          fs: 1,
	          enablejsapi: 1,
	          iv_load_policy: 3,
	          disablekb: 1,
	          modestbranding: 0,
	          start: 2
	        };
	      } else {
	
	        var param = {
	          autoplay: 0,
	          controls: 0,
	          showinfo: 0,
	          autohide: 1,
	          rel: 0,
	          fs: 1,
	          enablejsapi: 1,
	          iv_load_policy: 3,
	          disablekb: 1,
	          modestbranding: 0,
	          start: 2
	        };
	      }
	
	      if (gb.in.u.isPC) {
	
	        var param = {
	          autoplay: 0,
	          controls: 0,
	          showinfo: 0,
	          autohide: 1,
	          rel: 0,
	          fs: 1,
	          enablejsapi: 1,
	          iv_load_policy: 3,
	          disablekb: 1,
	          modestbranding: 0,
	          start: 2
	        };
	      };
	
	      this.player = new YT.Player(id, {
	        width: '100%', // �ץ��`���`�η�
	        height: '100%', // �ץ��`���`�θߤ�
	        videoId: videoID, // YouTube��ID
	        events: {
	          'onReady': this.onReady.bind(this), // �ץ��`���`�Μʂ䤬�Ǥ����Ȥ��ˌg��
	          'onStateChange': this.onPlayerStateChange.bind(this)
	        },
	        playerVars: param
	      });
	
	      var l = new _FullSize2.default($('#bgWrap'), $('#sec02Video'), 0, 'FullSizeSec02Video');
	      l.targetDefW = 1920;
	      l.targetDefH = 1080;
	      l.run();
	    }
	  }, {
	    key: 'tweenVolume',
	    value: function tweenVolume(e) {
	      var _this = this;
	
	      var dur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.6;
	      var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Power2.easeInOut;
	
	
	      // �����Ϥ��¤�
	
	      var val = 0;
	
	      if (this.isMute) val = this.volume.def;else val = 0;
	
	      TweenMax.to(this.volume, dur, {
	        val: val,
	        ease: ease,
	        onUpdate: function onUpdate(e) {
	
	          var v = e.target.val;
	          _this.player.setVolume(v);
	        },
	        onUpdateParams: ["{self}"]
	      });
	
	      // UI����
	      if (this.isMute) gb.in.volumeBar.on();else gb.in.volumeBar.off();
	
	      // mute�ե饰����
	      this.isMute = !this.isMute;
	    }
	  }, {
	    key: 'seek',
	    value: function seek() {
	
	      // if (this.status !== window.YT.PlayerState.PLAYING) return;
	
	      var now = this.player.getCurrentTime();
	      var rate = now / this.dur;
	      var goal = gb.in.r.ws.w * rate;
	
	      this.cur += (goal - this.cur) * 0.1;
	
	      // TweenMax.set($('.videoUI .indicator'), {width: gb.in.r.ws.w * rate});
	      TweenMax.set($('.videoUI .indicator'), { width: this.cur });
	    }
	  }, {
	    key: 'mouse',
	    value: function mouse() {
	
	      var gx = gb.in.m.x + 30;
	      var gy = gb.in.m.y + -30;
	
	      this.mx += (gx - this.mx) * this.easing;
	      this.my += (gy - this.my) * this.easing;
	
	      TweenMax.set($('.ui_close'), { x: this.mx, y: this.my });
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      // this.player.playVideo();
	      // this.player.pauseVideo();
	
	      gb.in.rm.completed++;
	
	      this.volume.def = this.player.getVolume();
	      this.volume.val = this.volume.def;
	      this.dur = this.player.getDuration();
	    }
	  }, {
	    key: 'onPlayerStateChange',
	    value: function onPlayerStateChange(e) {
	
	      this.status = e.data;
	      // �����K�ˤ����Ȥ�
	      if (this.status == window.YT.PlayerState.ENDED) {
	        console.log('�����K��');
	        // �ӻ�����
	        if (gb.in.u.isPC) e.target.playVideo();
	      }
	      // // �����ФΤȤ�
	      if (this.status == window.YT.PlayerState.PLAYING) {
	        this.isFirstTouch = true;
	      }
	      // // ֹͣ�ФΤȤ�
	      // if (status == window.YT.PlayerState.PAUSED) {
	      //     console.log('ֹͣ��');
	      // }
	      // �Хåե��������ФΤȤ�
	      if (this.status == window.YT.PlayerState.BUFFERING) {
	        this.isFirstTouch = true;
	      }
	      // // �^�����g�ߤΤȤ�
	      // if (status == window.YT.PlayerState.CUED) {
	      //     console.log('�^�����g��');
	      // }
	    }
	  }, {
	    key: 'onMouseMoveStart',
	    value: function onMouseMoveStart() {
	
	      log(gb.in.m.y < gb.in.r.ws.h / 5 * 4, this.isMouseShow);
	
	      // ���������Ƥ������I������
	      if (!gb.in.sec02Video.isPlaying) return;
	
	      // �������ɥ��I����4/5���¤˥ޥ������֤äƤ��ä����τI��
	      if (gb.in.m.y < gb.in.r.ws.h / 5 * 4 || this.isMouseShow) return;
	      this.isMouseShow = true;
	
	      // bgovelry����ʾ
	      TweenMax.to($('.videoUI .bgOverlay'), 0.6, { opacity: 1, ease: Power3.easeOut });
	
	      // stop����ʾ
	      this.showStop();
	
	      // bar�θߤ����ߤ�
	      TweenMax.to($('.videoUI .indicator'), 0.3, { height: 5, ease: Power3.easeOut });
	
	      $('.bgOverlay').off('click');
	      TweenMax.to($('.ui_close'), 0.5, { opacity: 0, ease: Power3.easeOut });
	    }
	  }, {
	    key: 'onMouseMoveEnd',
	    value: function onMouseMoveEnd() {
	      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	
	      if (!flag) {
	
	        // ���������Ƥ������I������
	        if (!gb.in.sec02Video.isPlaying) return;
	
	        if (gb.in.m.y >= gb.in.r.ws.h / 5 * 4 || !this.isMouseShow) return;
	        this.isMouseShow = false;
	      };
	
	      // bgovelry����ʾ
	      TweenMax.to($('.videoUI .bgOverlay'), 0.6, { opacity: 0, ease: Power3.easeOut });
	
	      // stop���Ǳ�ʾ
	      this.hideStop();
	
	      // bar�θߤ����ߤ�
	      TweenMax.to($('.videoUI .indicator'), 0.3, { height: 1, ease: Power3.easeOut });
	
	      $('.bgOverlay').on('click', gb.in.sec02Video.onStop.bind(gb.in.sec02Video));
	      TweenMax.to($('.ui_close'), 0.5, { opacity: 1, ease: Power3.easeOut });
	    }
	  }, {
	    key: 'showStop',
	    value: function showStop() {
	
	      TweenMax.killTweensOf($('.ui_stop'));
	
	      if (!this.isPlay) {
	
	        $('.ui_play').css({ opacity: 0, display: 'block' });
	        TweenMax.to($('.ui_play'), 1, {
	          opacity: 1,
	          scale: 1,
	          ease: Power3.easeOut
	        });
	      } else {
	
	        $('.ui_stop').css({ opacity: 0, display: 'block' });
	        TweenMax.to($('.ui_stop'), 1, {
	          opacity: 1,
	          scale: 1,
	          ease: Power3.easeOut
	        });
	      }
	    }
	  }, {
	    key: 'hideStop',
	    value: function hideStop() {
	
	      TweenMax.killTweensOf($('.ui_stop'));
	
	      if (!this.isPlay) {
	
	        TweenMax.to($('.ui_play'), 0.6, {
	          opacity: 0,
	          ease: Power3.easeOut,
	          onComplete: function onComplete() {
	            $('.ui_play').hide();
	          }
	        });
	      } else {
	
	        TweenMax.to($('.ui_stop'), 1, {
	          opacity: 0,
	          ease: Power3.easeOut,
	          onComplete: function onComplete() {
	            $('.ui_stop').hide();
	          }
	        });
	      }
	    }
	  }, {
	    key: 'btnToPlay',
	    value: function btnToPlay() {
	      var _this2 = this;
	
	      if (this.isClickLock) return;
	      this.isClickLock = true;
	
	      this.isPlay = false;
	
	      var tl = new TimelineMax();
	
	      // �ܥ������䤨��
	      TweenMax.to($('.ui_stop'), 0.5, {
	        opacity: 0,
	        scale: 1.5,
	        ease: Power3.easeOut,
	        onComplete: function onComplete() {
	          $('.ui_stop').hide();
	          _this2.isClickLock02 = false;
	        }
	      });
	
	      tl.set($('.ui_play'), { display: 'block', scale: 1.5 }).to($('.ui_play'), 0.5, {
	        opacity: 1,
	        scale: 1,
	        delay: 0.2,
	        ease: Power3.easeOut
	      });
	
	      // �ӻ���ֹ����
	      this.player.pauseVideo();
	    }
	  }, {
	    key: 'btnToStop',
	    value: function btnToStop() {
	      var _this3 = this;
	
	      if (this.isClickLock02) return;
	      this.isClickLock02 = true;
	
	      this.isPlay = true;
	
	      var tl = new TimelineMax();
	
	      // �ܥ������䤨��
	      tl.set($('.ui_stop'), { display: 'block', scale: 1.5 }).to($('.ui_stop'), 0.5, {
	        opacity: 1,
	        scale: 1,
	        ease: Power3.easeOut
	      });
	
	      TweenMax.to($('.ui_play'), 0.5, {
	        opacity: 0,
	        scale: 1.5,
	        delay: 0.2,
	        ease: Power3.easeOut,
	        onComplete: function onComplete() {
	          $('.ui_play').hide();
	          _this3.isClickLock = false;
	        }
	      });
	
	      // �ӻ��򥹥��`��
	      this.player.playVideo();
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      gb.in.m.remove('onMouseMoveStart');
	      gb.in.m.remove('onMouseMoveEn');
	
	      // �����֤Ȥ᤿�ꡢС����������
	      $('.volume').off('click');
	
	      // play�ܥ������Ф��椨
	      $('.ui_stop').off('click');
	      $('.ui_play').off('click');
	
	      $('.bgOverlay').off('click');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // �ޥ����Ӥ�ʼ�ᥤ�٥���
	      //   ui�󤭤��ʤ�
	      //   stop��������
	      gb.in.m.add('onMouseMoveStart', this.onMouseMoveStart.bind(this));
	      gb.in.m.add('onMouseMoveEnd', this.onMouseMoveEnd.bind(this));
	
	      // �����֤Ȥ᤿�ꡢС����������
	      $('.volume').on('click', this.tweenVolume.bind(this));
	
	      // play�ܥ������Ф��椨
	      $('.ui_stop').on('click', this.btnToPlay.bind(this));
	      $('.ui_play').on('click', this.btnToStop.bind(this));
	    }
	  }]);
	
	  return YoutubeForSec02;
	}();
	
	exports.default = YoutubeForSec02;

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  StaffCredit
	//
	//--------------------------------------------------
	var StaffCredit = function () {
	  function StaffCredit($btn, $close, $contents) {
	    _classCallCheck(this, StaffCredit);
	
	    this.$btn = $btn;
	    this.$close = $close;
	    this.$contents = $contents;
	
	    this.setEvents();
	    this.setup();
	  }
	
	  _createClass(StaffCredit, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	
	      if (this.$btn.hasClass('on')) {
	
	        this.close();
	      } else {
	
	        this.open();
	      };
	
	      this.$btn.toggleClass('on');
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	
	      $('#sideR').css('z-index', 3);
	
	      // モーダル表示
	      this.$contents.show();
	
	      gb.in.sec02Video.video.player.pauseVideo();
	      gb.in.sec02Video.isPlaying = false;
	      TweenMax.to($('.ui_close'), 0.3, { opacity: 0 });
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	
	      $('#sideR').css('z-index', 7);
	
	      // モーダル非表示
	      this.$contents.hide();
	
	      gb.in.sec02Video.video.player.playVideo();
	      gb.in.sec02Video.isPlaying = true;
	      TweenMax.to($('.ui_close'), 0.3, { opacity: 1 });
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // this.getWindowSize();
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      this.$btn.on('click', this.open.bind(this));
	      this.$close.on('click', this.close.bind(this));
	    }
	  }]);
	
	  return StaffCredit;
	}();
	
	exports.default = StaffCredit;

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  MenuBtnClose
	//
	//--------------------------------------------------
	
	var MenuBtnClose = function () {
	  function MenuBtnClose($wrap, id) {
	    _classCallCheck(this, MenuBtnClose);
	
	    this.$wrap = $wrap;
	    this.id = id;
	
	    this.isStop = true;
	    this.isOpen = false;
	
	    this.onClose = function () {};
	
	    this.setup();
	  }
	
	  _createClass(MenuBtnClose, [{
	    key: 'setup',
	    value: function setup(param) {
	
	      this.dom = '<div class="icon-animation type-4 menuBtn' + this.id + ' is-open">' + '<span class="top"></span>' + '<span class="middle"></span>' + '<span class="bottom"></span>' + '</div>';
	
	      this.$wrap.append(this.dom);
	      this.$target = $('.menuBtn' + this.id);
	
	      this.setEvents();
	    }
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return MenuBtnClose;
	}();
	
	exports.default = MenuBtnClose;

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  VolumeBar
	//
	//--------------------------------------------------
	
	var VolumeBar = function () {
	  function VolumeBar() {
	    _classCallCheck(this, VolumeBar);
	
	    this.$target = $('.volume .bar');
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(VolumeBar, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'on',
	    value: function on() {
	
	      this.$target.each(function (index, el) {
	        var _this = this;
	
	        // 2にセット
	        TweenMax.set($(this), {
	          height: 2,
	          ease: Power3.easeInOut
	        });
	
	        // 動き
	        TweenMax.delayedCall(0.12 * index, function () {
	
	          var tl = new TimelineMax({ repeat: -1 });
	
	          tl.to($(_this), 0.8, {
	            height: 18,
	            ease: Power2.easeInOut
	          }).to($(_this), 0.7, {
	            height: 2,
	            ease: Power3.easeOut
	          });
	        });
	
	        // 透明だったら、表示
	        TweenMax.to($(this), 0.6, {
	          opacity: 1,
	          ease: Power3.easeInOut
	        });
	      });
	    }
	  }, {
	    key: 'off',
	    value: function off() {
	
	      this.$target.each(function (index, el) {
	
	        // 動きの停止
	        TweenMax.killTweensOf(this);
	
	        TweenMax.to($(this), 0.6, {
	          height: 2,
	          // opacity: 0,
	          ease: Power3.easeInOut
	        });
	      });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return VolumeBar;
	}();
	
	exports.default = VolumeBar;

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Modal
	//
	//--------------------------------------------------
	
	var Modal = function () {
	  function Modal($btn, $close, $contents) {
	    _classCallCheck(this, Modal);
	
	    this.$btn = $btn;
	    this.$close = $close;
	    this.$contents = $contents;
	
	    this.setEvents();
	    this.setup();
	  }
	
	  _createClass(Modal, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	
	      if (this.$btn.hasClass('on')) {
	
	        this.hide();
	      } else {
	
	        this.show();
	      };
	
	      this.$btn.toggleClass('on');
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	
	      var H = $('.section02').height();
	      this.$contents.css('height', H);
	      this.$contents.find('.inner').css('height', gb.in.r.ws.h / gb.in.Layout.size.scale.rate);
	
	      // ??????ʾ
	      this.$contents.show();
	
	      this.$contents.find('#sec02VideoForSP').adjustH();
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	
	      // ?????????
	      this.$contents.hide();
	
	      if (gb.in.sec02Video.video.isFirstTouch) {
	        gb.in.sec02Video.video.player.pauseVideo();
	      }
	
	      log(gb.in.sec02Video.video.status, window.YT.PlayerState.PLAYING, gb.in.sec02Video.video.status == window.YT.PlayerState.PLAYING, gb.in.sec02Video.video.isFirstTouch);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      this.$btn.on('click', this.show.bind(this));
	      this.$close.on('click', this.hide.bind(this));
	    }
	  }]);
	
	  return Modal;
	}();
	
	exports.default = Modal;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Layout
	//
	//--------------------------------------------------
	
	var _SizeMovie = __webpack_require__(48);
	
	var _SizeMovie2 = _interopRequireDefault(_SizeMovie);
	
	var _Position = __webpack_require__(38);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Layout = function () {
	  function Layout() {
	    _classCallCheck(this, Layout);
	
	    this.setEvents();
	  }
	
	  _createClass(Layout, [{
	    key: 'setup',
	    value: function setup() {
	
	      // sp
	      // 背景の高さを合わせる
	      var h = function h() {
	
	        var H = $('.section02').height();
	        if (gb.in.u.isResSP) $('#bgWrap').css('height', H);else $('#bgWrap').css('height', '100%');
	      };
	      h();
	      gb.in.r.add('h', h);
	
	      this.size = new _SizeMovie2.default(); // adjust size
	      this.position = new _Position2.default(); // adjust position
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      this.setup();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'run',
	    value: function run() {
	
	      // sp
	      // 背景の高さを合わせる
	      var h = function h() {
	
	        var H = $('.section02').height();
	        if (gb.in.u.isResSP) $('#bgWrap').css('height', H);else $('#bgWrap').css('height', '100%');
	      };
	      h();
	      gb.in.r.add('h', h);
	
	      this.size = new _SizeMovie2.default(); // adjust size
	      this.position = new _Position2.default(); // adjust position
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	
	      this.size.scale.reset();
	    }
	  }]);
	
	  return Layout;
	}();
	
	exports.default = Layout;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Size
	//
	//--------------------------------------------------
	
	var _ScaleMovie = __webpack_require__(49);
	
	var _ScaleMovie2 = _interopRequireDefault(_ScaleMovie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Size = function () {
	  function Size() {
	    _classCallCheck(this, Size);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Size, [{
	    key: 'setup',
	    value: function setup() {
	
	      // gb.in.u.setImgSPSize($('img')); // for sp img
	
	      // new gb.ResponsiveFontSize($('.fontResponsive')); //レスポンシブ時フォントサイズの変更
	
	      this.scale = new _ScaleMovie2.default(); // resize
	
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // gb.in.u.setImgSPSize($('img')); // for sp img
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // gb.in.r.add(this.onResize.bind(this));
	
	    }
	  }]);
	
	  return Size;
	}();
	
	exports.default = Size;

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Layout // historyも兼用
	//
	//--------------------------------------------------
	var Scale = function () {
	  function Scale() {
	    _classCallCheck(this, Scale);
	
	    this.SPBaseW = 375;
	    this.PCBaseW = 1300;
	
	    this.rate = 1;
	    this.W = window.innerWidth;
	
	    this.setup();
	    this.run(); //インスタンス時に実行
	    this.setEvents();
	  }
	
	  _createClass(Scale, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {
	
	      this.W = $(window).width();
	      this.iW = window.innerWidth;
	
	      this.scale();
	      this.wrap();
	    }
	
	    // 拡大
	
	  }, {
	    key: 'scale',
	    value: function scale() {
	
	      // bpの場合のscale
	      if (this.iW <= gb.in.conf.bp) {
	
	        // widthからrateを計算
	        // this.rate = gb.in.u.floatFormat(this.W / this.SPBaseW , 2);
	        this.rate = this.W / this.SPBaseW;
	
	        TweenMax.set($('#inner, #bgWrap'), {
	          width: this.SPBaseW,
	          scale: this.rate,
	          'transform-origin': '0 0',
	          '-webkit-transform-origin': '0 0'
	        });
	      } else {
	
	        // pcは処理しない
	        TweenMax.set($('#inner, #bgWrap'), {
	          width: '100%',
	          scale: 1,
	          'transform-origin': '0 0',
	          '-webkit-transform-origin': '0 0'
	        });
	      }
	    }
	
	    // scaleしたら、元の大きさ分余白ができるのでoverflow hiddenで消す
	
	  }, {
	    key: 'wrap',
	    value: function wrap() {
	
	      if (this.iW <= gb.in.conf.bp) {
	
	        TweenMax.set($('#wrapper'), {
	          'overflow': 'hidden',
	          // width: $('#inner').innerWidth() * this.rate,
	          height: $('.section02').innerHeight() * this.rate
	        });
	      } else {
	
	        TweenMax.set($('#wrapper'), {
	          'overflow': 'visible',
	          height: '100%'
	        });
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.run();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('scaleMovie', this.onResize.bind(this));
	    }
	  }], [{
	    key: 'reset',
	    value: function reset() {
	
	      TweenMax.set($('#inner, #bgWrap'), {
	        width: '100%',
	        scale: 1,
	        'transform-origin': '0 0',
	        '-webkit-transform-origin': '0 0'
	      });
	
	      TweenMax.set($('#wrapper'), {
	        'overflow': 'visible',
	        height: '100%'
	      });
	    }
	  }]);
	
	  return Scale;
	}();
	
	exports.default = Scale;

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectMoviePlay
	//
	//--------------------------------------------------
	
	var HoverEffectMoviePlay = function () {
	  function HoverEffectMoviePlay($target) {
	    _classCallCheck(this, HoverEffectMoviePlay);
	
	    this.$target = $target;
	
	    // motion
	    this.tl = new TimelineMax();
	
	    // スマホのときは処理しない
	    if (gb.in.u.isPC) this.setEvents();
	  }
	
	  _createClass(HoverEffectMoviePlay, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      if (gb.in.u.isResSP) return;
	
	      var tl = new TimelineMax();
	
	      tl.set($(that), { opacity: 1 }).to($(that), 1.0, {
	        opacity: 0,
	        ease: Power4.easeOut
	      });
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      if (gb.in.u.isResSP) return;
	
	      var tl = new TimelineMax();
	
	      // tl
	      //   .set($(that),{opacity: 0})
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).on('mouseenter', function (e) {
	          self.onEnter.call(self, this);
	        });
	        $(this).on('mouseleave', function (e) {
	          self.onLeave.call(self, this);
	        });
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).off('mouseenter');
	        $(this).off('mouseleave');
	      });
	    }
	  }]);
	
	  return HoverEffectMoviePlay;
	}();
	
	exports.default = HoverEffectMoviePlay;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Display
	//
	//--------------------------------------------------
	
	
	var _Effects = __webpack_require__(21);
	
	var _Effects2 = _interopRequireDefault(_Effects);
	
	var _LayoutInterview = __webpack_require__(52);
	
	var _LayoutInterview2 = _interopRequireDefault(_LayoutInterview);
	
	var _HoverEffectSNSSPFooter = __webpack_require__(36);
	
	var _HoverEffectSNSSPFooter2 = _interopRequireDefault(_HoverEffectSNSSPFooter);
	
	var _Move3D = __webpack_require__(55);
	
	var _Move3D2 = _interopRequireDefault(_Move3D);
	
	var _Move2D = __webpack_require__(56);
	
	var _Move2D2 = _interopRequireDefault(_Move2D);
	
	var _InterviewTopEf = __webpack_require__(57);
	
	var _InterviewTopEf2 = _interopRequireDefault(_InterviewTopEf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DisplayTop = function () {
	  function DisplayTop() {
	    _classCallCheck(this, DisplayTop);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(DisplayTop, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // ループスタート
	      gb.in.up.loop();
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //  UI / Layout
	      // ------------------------------------------------------------
	      _LayoutInterview2.default.run();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	      // sp
	      gb.in.snsSPHoverEf = new _HoverEffectSNSSPFooter2.default($('.snsWrap'));
	
	      // pc
	      new _InterviewTopEf2.default();
	
	      // $('.move3D').each(function(index, el) {
	
	      //     new Move3D($(this));
	
	      // });
	      // $('.move2D').each(function(index, el) {
	
	      //     new Move2D($(this));
	
	      // });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'run',
	    value: function run() {
	
	      // ------------------------------------------------------------
	      //  UI / Layout
	      // ------------------------------------------------------------
	      _LayoutInterview2.default.run();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	      // sp
	      gb.in.snsSPHoverEf = new _HoverEffectSNSSPFooter2.default($('.snsWrap'));
	
	      // pc
	      new _InterviewTopEf2.default();
	
	      // $('.move3D').each(function(index, el) {
	
	      //     new Move3D($(this));
	
	      // });
	      // $('.move2D').each(function(index, el) {
	
	      //     new Move2D($(this));
	
	      // });
	    }
	  }]);
	
	  return DisplayTop;
	}();
	
	exports.default = DisplayTop;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Layout
	//
	//--------------------------------------------------
	
	var _SizeInterview = __webpack_require__(53);
	
	var _SizeInterview2 = _interopRequireDefault(_SizeInterview);
	
	var _Position = __webpack_require__(38);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Layout = function () {
	  function Layout() {
	    _classCallCheck(this, Layout);
	
	    this.setEvents();
	  }
	
	  _createClass(Layout, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.size = new _SizeInterview2.default(); // adjust size
	      this.position = new _Position2.default(); // adjust position
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      this.setup();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'run',
	    value: function run() {
	
	      this.size = new _SizeInterview2.default(); // adjust size
	      this.position = new _Position2.default(); // adjust position
	    }
	  }]);
	
	  return Layout;
	}();
	
	exports.default = Layout;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Size
	//
	//--------------------------------------------------
	
	var _ScaleInterview = __webpack_require__(54);
	
	var _ScaleInterview2 = _interopRequireDefault(_ScaleInterview);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Size = function () {
	  function Size() {
	    _classCallCheck(this, Size);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Size, [{
	    key: 'setup',
	    value: function setup() {
	
	      // gb.in.u.setImgSPSize($('img')); // for sp img
	
	      // new gb.ResponsiveFontSize($('.fontResponsive')); //レスポンシブ時フォントサイズの変更
	
	      this.scale = new _ScaleInterview2.default(); // resize
	
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // gb.in.u.setImgSPSize($('img')); // for sp img
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // gb.in.r.add(this.onResize.bind(this));
	
	    }
	  }]);
	
	  return Size;
	}();
	
	exports.default = Size;

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Layout
	//
	//--------------------------------------------------
	var Scale = function () {
	  function Scale() {
	    _classCallCheck(this, Scale);
	
	    this.SPBaseW = 375;
	    this.PCBaseW = 1300;
	
	    this.rate = 1;
	    this.W = window.innerWidth;
	
	    this.$targetList = [{
	      '$target': $('.section03'),
	      'scale': 'spOnly' // spOnly pcOnly both
	    }];
	
	    this.setup();
	    this.run(); //インスタンス時に実行
	    this.setEvents();
	  }
	
	  _createClass(Scale, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {
	
	      this.W = $(window).width();
	      this.iW = window.innerWidth;
	
	      this.scale();
	      this.wrap();
	    }
	
	    // 拡大
	
	  }, {
	    key: 'scale',
	    value: function scale() {
	      var _this = this;
	
	      // bpの場合のscale
	      if (this.iW <= gb.in.conf.bp) {
	
	        // widthからrateを計算
	        // this.rate = gb.in.u.floatFormat(this.W / this.SPBaseW , 2);
	        this.rate = this.W / this.SPBaseW;
	
	        // scaleするリストをループ
	        $.each(this.$targetList, function (index, val) {
	
	          if (val.scale == 'both' || val.scale == 'spOnly') {
	
	            TweenMax.set(val.$target, {
	              width: _this.SPBaseW,
	              scale: _this.rate,
	              'transform-origin': '0 0',
	              '-webkit-transform-origin': '0 0'
	            });
	          };
	        });
	      } else {
	
	        // widthからrateを計算
	        // this.rate = gb.in.u.floatFormat(this.W / this.PCBaseW , 2);
	        this.rate = this.W / this.PCBaseW;
	
	        // scaleするリストをループ
	        $.each(this.$targetList, function (index, val) {
	
	          if (val.scale == 'both' || val.scale == 'pcOnly') {
	
	            TweenMax.set(val.$target, {
	              width: _this.PCBaseW,
	              scale: _this.rate,
	              'transform-origin': '0 0',
	              '-webkit-transform-origin': '0 0'
	            });
	          };
	
	          // こちらの場合は、scaleを戻す
	          if (val.scale == 'spOnly') {
	
	            TweenMax.set(val.$target, {
	              width: 'auto',
	              scale: 1,
	              'transform-origin': '0 0',
	              '-webkit-transform-origin': '0 0'
	            });
	          };
	        });
	      }
	    }
	
	    // scaleしたら、元の大きさ分余白ができるのでoverflow hiddenで消す
	
	  }, {
	    key: 'wrap',
	    value: function wrap() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.run();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('scaleInterview', this.onResize.bind(this));
	    }
	  }]);
	
	  return Scale;
	}();
	
	exports.default = Scale;

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Move3D
	//
	//--------------------------------------------------
	
	var Move3D = function () {
	  function Move3D($target) {
	    _classCallCheck(this, Move3D);
	
	    this.$target = $target;
	
	    this.setup();
	    this.setEvents();
	
	    log('move');
	  }
	
	  _createClass(Move3D, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onMove',
	    value: function onMove() {
	
	      var paramX = 10;
	      var paramY = 10;
	
	      // var mx = gb.in.m.x;
	      // var my = gb.in.m.y;
	      var cx = gb.in.m.cx;
	      var cy = gb.in.m.cy;
	
	      // transform values
	      // var rotX = 2 * paramX / this.$target.height() * mx - paramX;
	      // var rotY = 2 * paramY / this.$target.width() * my - paramY;
	      var rotX = 2 * paramX / this.$target.height() * cx - paramX;
	      var rotY = 2 * paramY / this.$target.width() * cy - paramY;
	
	      TweenMax.set(this.$target, {
	        rotationX: rotY,
	        rotationY: rotX
	      });
	
	      log(rotX, rotY, cx, cy);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.m.add('Move3D', this.onMove.bind(this));
	    }
	  }]);
	
	  return Move3D;
	}();
	
	exports.default = Move3D;

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Move2D
	//
	//--------------------------------------------------
	
	var Move2D = function () {
	  function Move2D($target) {
	    _classCallCheck(this, Move2D);
	
	    this.$target = $target;
	
	    this.target = {
	      $: this.$target,
	      factorX: this.$target.data("x") || 1.0,
	      factorY: this.$target.data("y") || 1.0,
	      factorB: this.$target.data("both") || 1.0,
	      baseX: this.$target.position().left,
	      baseY: this.$target.position().top,
	      x: this.$target.position().left,
	      y: this.$target.position().top
	    };
	
	    this.defX = this.target.baseX;
	    this.defY = this.target.baseY;
	
	    this.baseX = 0;
	    this.baseY = 0;
	
	    this.easing = this.$target.data("ease") || 0.06;
	    this.gx = 0;
	    this.gy = 0;
	
	    this.mx = 0;
	    this.my = 0;
	
	    this.setup();
	    if (gb.in.u.isResPC) this.setEvents();
	  }
	
	  _createClass(Move2D, [{
	    key: "setup",
	    value: function setup() {
	
	      this.baseX = gb.in.r.ws.w / 2;
	      this.baseY = gb.in.r.ws.h / 2;
	      this.mx = this.baseX;
	      this.my = this.baseY;
	    }
	  }, {
	    key: "onMove",
	    value: function onMove(e) {
	
	      this.mx = gb.in.m.x;
	      this.my = gb.in.m.y;
	
	      var baseDisY = this.my - this.baseY;
	      var baseDisX = this.mx - this.baseX;
	
	      var rad = Math.atan2(baseDisY, baseDisX);
	      rad = (rad + Math.PI) % (Math.PI * 2);
	
	      this.mx = this.baseX + Math.cos(rad) * Math.sqrt(baseDisX * baseDisX + baseDisY * baseDisY);
	      this.my = this.baseY + Math.sin(rad) * Math.sqrt(baseDisX * baseDisX + baseDisY * baseDisY);
	
	      var dx = this.mx - this.baseX;
	      var dy = this.my - this.baseY;
	
	      this.gx = this.target.baseX + dx * this.target.factorX * this.target.factorB;
	      this.gy = this.target.baseY + dy * this.target.factorY * this.target.factorB;
	
	      // log(this.target.baseX,dx,this.target.factorX,this.target.factorB);
	    }
	  }, {
	    key: "loop",
	    value: function loop() {
	
	      if (gb.in.u.isSP || gb.in.u.isResSP) return;
	
	      this.target.x += (this.gx - this.target.x) * this.easing;
	      this.target.y += (this.gy - this.target.y) * this.easing;
	
	      TweenMax.set(this.target.$, {
	        left: this.target.x,
	        top: this.target.y
	      });
	    }
	  }, {
	    key: "onResize",
	    value: function onResize() {
	
	      this.baseX = gb.in.r.ws.w / 2;
	      this.baseY = gb.in.r.ws.h / 2;
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	
	      gb.in.m.add('Move2D', this.onMove.bind(this));
	      gb.in.up.add('Move2D', this.loop.bind(this));
	      gb.in.r.add('Move2D', this.onResize.bind(this));
	    }
	  }, {
	    key: "removeEvents",
	    value: function removeEvents() {
	
	      gb.in.m.remove('Move2D');
	      gb.in.up.remove('Move2D');
	      gb.in.r.remove('Move2D');
	
	      TweenMax.set(this.target.$, {
	        left: this.defX,
	        top: this.defY
	      });
	    }
	  }]);
	
	  return Move2D;
	}();
	
	exports.default = Move2D;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  InterviewTopEf
	//
	//--------------------------------------------------
	
	var _FullSizeByScaleInterviewIndex = __webpack_require__(58);
	
	var _FullSizeByScaleInterviewIndex2 = _interopRequireDefault(_FullSizeByScaleInterviewIndex);
	
	var _HoverCardItem = __webpack_require__(59);
	
	var _HoverCardItem2 = _interopRequireDefault(_HoverCardItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var InterviewTopEf = function () {
	  function InterviewTopEf($target) {
	    _classCallCheck(this, InterviewTopEf);
	
	    this.$target = $target;
	
	    gb.in.interviewCardHover = this.isHover = false;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(InterviewTopEf, [{
	    key: 'setup',
	    value: function setup() {
	
	      // layout
	      // topの中央コンテンツを上下中央で小さくする
	      var l = new _FullSizeByScaleInterviewIndex2.default($('#bgWrap'), $('#bgWrap .sec03 .blockWrap'), 1);
	      l.targetDefW = gb.in.conf.W;
	      l.targetDefH = gb.in.conf.H;
	      l.run();
	      l.onResize();
	
	      // effects
	      new _HoverCardItem2.default($('#bgWrap .sec03 .block .item').eq(0));
	      new _HoverCardItem2.default($('#bgWrap .sec03 .block .item').eq(1));
	      new _HoverCardItem2.default($('#bgWrap .sec03 .block .item').eq(2));
	      // new HoverCardItem($('#bgWrap .sec03 .block .item').eq(1))
	    }
	  }, {
	    key: 'onEnter',
	    value: function onEnter() {
	
	      log('enter');
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave() {
	
	      log('leave');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $('#bgWrap .sec03 .block').on('mouseenter', this.onEnter.bind(this));
	      $('#bgWrap .sec03 .block').on('mouseleave', this.onLeave.bind(this));
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {}
	  }]);
	
	  return InterviewTopEf;
	}();
	
	exports.default = InterviewTopEf;

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  FullSize
	//
	//--------------------------------------------------
	
	var FullSize = function () {
	  function FullSize($Wrap, $Target, mode) {
	    _classCallCheck(this, FullSize);
	
	    this.$wrap = $Wrap;
	    this.$target = $Target;
	
	    this.W = this.$wrap.width();
	    this.H = this.$wrap.height();
	    this.targetW;
	    this.targetH;
	    this.targetDefW;
	    this.targetDefH;
	    this.ratioW;
	    this.ratio;
	    this.ml;
	    this.mt;
	
	    this.mode = mode || 0;
	
	    // this.init();
	    // this.run();
	    this.setEvents();
	  }
	
	  _createClass(FullSize, [{
	    key: 'setStyle',
	    value: function setStyle() {
	
	      this.$wrap.css({
	        'overflow': 'hidden'
	      });
	      this.$target.css('position', 'absolute');
	    }
	  }, {
	    key: 'getDef',
	    value: function getDef() {
	
	      this.targetDefW = this.$target.get(0).clientWidth || this.$target.get(0).width || this.$target.width(), this.targetDefH = this.$target.get(0).clientHeight || this.$target.get(0).height || this.$target.height();
	    }
	  }, {
	    key: 'getSize',
	    value: function getSize() {
	
	      this.W = this.$wrap.width();
	      this.H = this.$wrap.height();
	
	      this.ratioW = this.H / this.W;
	      this.ratio = this.targetDefH / this.targetDefW, this.ml = -(this.targetDefW * (this.H / this.targetDefH)) / 2;
	      this.mt = -(this.targetDefH * (this.W / this.targetDefW)) / 2;
	    }
	  }, {
	    key: 'setPos',
	    value: function setPos() {
	
	      if (this.mode == 'cover' || this.mode == 0) {
	
	        //--------------------------------------------------
	        //  枠にピッタリになるように background-size cover
	        //--------------------------------------------------
	
	        if (this.ratioW > this.ratio) {
	
	          var w = this.H / this.targetDefH * this.targetDefW;
	
	          this.$target.css({ 'height': this.H }).css({ 'margin-top': 0, 'margin-left': this.ml, 'top': 0, 'left': '50%', 'width': w });
	        } else if (this.ratioW <= this.ratio) {
	
	          var h = this.W / this.targetDefW * this.targetDefH;
	
	          this.$target.css({ 'width': this.W }).css({ 'margin-top': this.mt, 'margin-left': 0, 'top': '50%', 'left': 0, 'height': h });
	        }
	      } else if (this.mode == 'contain' || this.mode == 1) {
	
	        //--------------------------------------------------
	        //  枠内にピッタリ収まるように background-size contain
	        //--------------------------------------------------
	
	        if (this.ratioW < this.ratio) {
	
	          // var hRate = (this.H - 100) / this.targetDefH;
	          var hRate = this.H / this.targetDefH;
	          if (gb.in.u.isResPC) hRate = Math.min(hRate, 1);
	          // else hRate = Math.min(hRate, 1.5);
	
	          log(hRate);
	
	          if (gb.in.u.isResPC) {
	
	            TweenMax.set(this.$target, { scale: hRate, x: '0%', y: '0%' });
	          } else {
	
	            TweenMax.set(this.$target, { scale: hRate, x: '0%', y: '0%' });
	          }
	        } else if (this.ratioW >= this.ratio) {
	
	          // var wRate = (this.W - 200) / this.targetDefW;
	          var wRate = this.W / this.targetDefW;
	          if (gb.in.u.isResPC) wRate = Math.min(wRate, 1);
	          // else wRate = Math.min(wRate, 1.5);
	
	          log(wRate);
	
	          if (gb.in.u.isResPC) {
	
	            TweenMax.set(this.$target, { scale: wRate, x: '0%', y: '0%' });
	          } else {
	
	            TweenMax.set(this.$target, { scale: wRate, x: '0%', y: '0%' });
	          }
	        }
	      }
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	
	      this.getDef();
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      this.setStyle();
	      this.getSize();
	      this.setPos();
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      if (gb.in.u.isResPC) {
	
	        this.targetDefW = gb.in.conf.W;
	        this.targetDefH = gb.in.conf.H;
	
	        log(1);
	      } else {
	
	        this.targetDefW = gb.in.conf.spW;
	        this.targetDefH = gb.in.conf.spH;
	
	        log(2);
	
	        // TweenMax.set(this.$target, {scale: 1,x: '-50%',y: '-50%'});
	      }
	
	      this.run();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('fullSizeByScaleInterviewIndex', this.onResize.bind(this));
	    }
	  }]);
	
	  return FullSize;
	}();
	
	exports.default = FullSize;

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverCardItem
	//
	//--------------------------------------------------
	
	var HoverCardItem = function () {
	  function HoverCardItem($target) {
	    _classCallCheck(this, HoverCardItem);
	
	    this.$target = $target;
	
	    this.$targets = $('#bgWrap .sec03 .block .item');
	
	    // motion
	    this.tl = new TimelineMax();
	
	    this.tlOnLeave = new TimelineMax();
	
	    this.rectBgOp = gb.in.u.isIE ? 0.35 : 1;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(HoverCardItem, [{
	    key: 'setup',
	    value: function setup() {
	
	      TweenMax.set(this.$target.find('.titWrap02 .innerWrap'), { width: 3, height: 0 });
	      TweenMax.set(this.$target.find('.titWrap02 .readWrap'), { width: 3, height: 0 });
	      TweenMax.set(this.$target.find('.titWrap02 .position, .titWrap02 .name, .titWrap02 span'), { opacity: 0, x: -20 });
	      // TweenMax.set(this.$target.find('.titWrap02 .read path,.titWrap02 .read rect'), {drawSVG: '0% 100%',fill: 'none',stroke: '#fff'});
	      TweenMax.set(this.$target.find('.titWrap02 .read svg'), { opacity: 0, x: -20 });
	    }
	  }, {
	    key: 'onRunReady',
	    value: function onRunReady($that) {
	
	      TweenMax.killTweensOf($that);
	      TweenMax.killTweensOf($that.find('.overlay'));
	      TweenMax.killTweensOf($that.find('.titWrap'));
	      TweenMax.killTweensOf($that.find('.titWrap02 .innerWrap'));
	      TweenMax.killTweensOf($that.find('.titWrap02 .position'));
	      TweenMax.killTweensOf($that.find('.titWrap02 .name'));
	      TweenMax.killTweensOf($that.find('.titWrap02 .readWrap'));
	      TweenMax.killTweensOf($that.find('.titWrap02 span'));
	      TweenMax.killTweensOf($that.find('.titWrap02 rect'));
	      TweenMax.killTweensOf($that.find('.titWrap02 path'));
	      TweenMax.killTweensOf($that.find('.overlay'));
	    }
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      var tl = new TimelineMax();
	      var tl02 = new TimelineMax();
	
	      this.onRunReady($(that));
	
	      gb.in.interviewCardHover = true;
	
	      // �ۥЩ` item
	      tl
	      // ����Ҫ�ؤ�һ���Ϥ�
	      .set($(that), { 'z-index': 2 })
	      // �󤭤�
	      .to($(that), 0.7, {
	        scale: 1.1,
	        ease: Power3.easeOut
	      })
	      // overlay���Ȥ�
	      .to($(that).find('.overlay'), 0.7, {
	        backgroundColor: 'rgba(0, 0, 0, 0)',
	        ease: Expo.easeOut
	      }, '-=0.7')
	      // box�ڤ�tit������
	      .to($(that).find('.titWrap'), 0.7, {
	        opacity: 0,
	        y: -50,
	        ease: Expo.easeOut
	      }, '-=0.7')
	      // rectBg������
	      .to($(that).find('.rectBg'), 0.7, {
	        opacity: 0,
	        ease: Expo.easeOut
	      }, '-=0.7')
	
	      // tit������
	      .to($(that).find('.titWrap02 .innerWrap'), 0.3, {
	        height: 116,
	        ease: Power4.easeIn,
	        onStart: function onStart() {
	          // var tl03 = new TimelineMax();
	          // tl03.to($(that).find('.titWrap02'), .04, {opacity:1, ease:Quad.easeIn})
	          //   .to($(that).find('.titWrap02'), .04, {opacity:0, ease:Quad.easeOut})
	          //   .to($(that).find('.titWrap02'), .04, {opacity:1, ease:Quad.easeOut})
	          //   .to($(that).find('.titWrap02'), .04, {opacity:0, ease:Quad.easeOut})
	          //   .to($(that).find('.titWrap02'), .3, {opacity:1, ease:Quad.easeOut});
	        }
	      }, '-=0.4').to($(that).find('.titWrap02 .innerWrap'), 0.6, {
	        width: 300,
	        ease: Power4.easeOut
	      }, '-=0.1')
	      // tit�����֤�����
	      .to($(that).find('.titWrap02 .position'), 0.4, {
	        x: 0,
	        opacity: 1,
	        z: 1,
	        ease: Power4.easeOut
	      }, '-=0.3').to($(that).find('.titWrap02 .name'), 0.4, {
	        x: 0,
	        opacity: 1,
	        z: 1,
	        ease: Power4.easeOut
	      }, '-=0.3')
	
	      // tit��readme������
	      .to($(that).find('.titWrap02 .readWrap'), 0.3, {
	        height: 50,
	        ease: Power4.easeIn
	      }, '-=0.6').to($(that).find('.titWrap02 .readWrap'), 0.4, {
	        width: 170,
	        ease: Power4.easeOut
	      }, '-=0.2')
	      // readme�ڥƥ����Ȥ�����
	      .to($(that).find('.titWrap02 span'), 0.4, {
	        x: 0,
	        opacity: 1,
	        z: 1,
	        ease: Power4.easeOut
	      }, '-=0.2')
	      // ʸӡ ��
	      .to($(that).find('.titWrap02 .read svg').eq(0), 0.4, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeOut
	      }, '-=0.3')
	      // ʸӡ arw
	      .to($(that).find('.titWrap02 .read svg').eq(1), 0.4, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeOut
	      }, '-=0.3');
	
	      // �ۥЩ`���줿item����
	      // if (this.tlLeave) this.tlLeave.kill();
	      tl02
	      // �󤭤�
	      .to(this.$targets.not($(that)), 0.7, {
	        scale: 0.9,
	        ease: Power3.easeOut
	      })
	      // overlay���Ȥ�
	      .to(this.$targets.not($(that)).find('.overlay'), 0.7, {
	        backgroundColor: 'rgba(0, 0, 0, 0.5)',
	        ease: Power4.easeOut
	      }, '-=0.7')
	      // box�ڤ�tit������
	      .to(this.$targets.not($(that)).find('.titWrap'), 0.7, {
	        opacity: 0,
	        ease: Power4.easeOut
	      }, '-=0.7')
	      // textWrappc���ۥЩ`��аħ�򤷤ʤ��褦���¤���
	      .to($('.textWrap_pc'), 0.7, {
	        opacity: 0.8,
	        top: 'calc(50% + 240px)',
	        ease: Power4.easeOut
	      }, '-=0.7');
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	      var _this = this;
	
	      gb.in.interviewCardHover = false;
	
	      // this.onRunReady($(that));
	
	      // var tl = new TimelineMax();
	      this.tlLeave = new TimelineMax();
	      // �ۥЩ` item
	      this.tlLeave
	      // ʸӡ arw
	      .to($(that).find('.titWrap02 .read svg').eq(0), 0.3, {
	        x: -20,
	        opacity: 0,
	        ease: Power4.easeOut
	      })
	      // ʸӡ ��
	      .to($(that).find('.titWrap02 .read svg').eq(1), 0.3, {
	        x: -20,
	        opacity: 0,
	        ease: Power4.easeOut
	      }, '-=0.3')
	      // readme�ڥƥ����Ȥ�����
	      .to($(that).find('.titWrap02 span'), 0.4, {
	        x: -20,
	        opacity: 0,
	        ease: Power4.easeOut
	      }, '-=0.3')
	
	      // tit��readme������
	      .to($(that).find('.titWrap02 .readWrap'), 0.4, {
	        width: 3,
	        ease: Power4.easeOut
	      }, '-=0.1').to($(that).find('.titWrap02 .readWrap'), 0.4, {
	        height: 0,
	        ease: Power4.easeOut
	      }, '-=0.2')
	
	      // tit�����֤�����
	      .to($(that).find('.titWrap02 .name'), 0.3, {
	        x: -20,
	        opacity: 0,
	        ease: Power4.easeOut
	      }, '-=0.2').to($(that).find('.titWrap02 .position'), 0.3, {
	        x: -20,
	        opacity: 0,
	        ease: Power4.easeOut
	      }, '-=0.3')
	
	      // tit������
	      .to($(that).find('.titWrap02 .innerWrap'), 0.4, {
	        width: 3,
	        ease: Power4.easeOut
	      }, '-=0.4').to($(that).find('.titWrap02 .innerWrap'), 0.3, {
	        height: 0,
	        ease: Power4.easeOut,
	        onStart: function onStart() {
	
	          TweenMax.set(_this.$target, { 'z-index': 1 });
	
	          // // �ۥЩ`�����Ƥ������Ϥϡ������ǄI����ֹ����
	          if (gb.in.interviewCardHover) {
	
	            log(1);
	
	            _this.tlLeave.pause();
	
	            var tl03 = new TimelineMax();
	
	            tl03.to($(that).find('.titWrap02 .innerWrap'), 0.2, {
	              width: 3,
	              ease: Power4.easeOut
	            }).to($(that).find('.titWrap02 .innerWrap'), 0.2, {
	              height: 0,
	              ease: Power4.easeOut,
	              onComplete: function onComplete() {
	                _this.setup();
	              }
	            }, '-=0.1');
	
	            TweenMax.set($(that).find('.titWrap'), {
	              opacity: 0,
	              y: -50
	            });
	
	            // �����Ƥ��ʤ����ϤϤ��Ȥˑ���
	          } else {
	
	            log(2);
	
	            var tl02 = new TimelineMax();
	            // �ۥЩ`���줿item����
	            tl02
	            // �󤭤�
	            .to(_this.$targets, 0.5, {
	              scale: 1,
	              ease: Power4.easeOut
	            })
	            // overlay���Ȥ�
	            .to(_this.$targets.find('.overlay'), 0.5, {
	              backgroundColor: 'rgba(0, 0, 0, 0.2)',
	              ease: Power4.easeOut
	            }, '-=0.5')
	            // box�ڤ�tit������
	            .to(_this.$targets.find('.titWrap'), 0.5, {
	              opacity: 1,
	              y: 0,
	              ease: Power4.easeOut
	            }, '-=0.5')
	            // rectbg����
	            .to(_this.$targets.find('.rectBg'), 0.5, {
	              opacity: _this.rectBgOp,
	              ease: Power4.easeOut,
	              onComplete: function onComplete() {
	                _this.setup();
	              }
	            }, '-=0.5')
	            // textWrappc���ۥЩ`��аħ�򤷤ʤ��褦���¤���
	            .to($('.textWrap_pc'), 0.5, {
	              opacity: 1,
	              top: 'calc(50% + 170px)',
	              ease: Power4.easeOut
	            }, '-=0.5');
	          }
	        }
	      }, '-=0.2');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.on('mouseenter', function (e) {
	        self.onEnter.call(self, this);
	      });
	      this.$target.on('mouseleave', function (e) {
	        self.onLeave.call(self, this);
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      this.$target.off('mouseenter');
	      this.$target.off('mouseleave');
	    }
	  }]);
	
	  return HoverCardItem;
	}();
	
	exports.default = HoverCardItem;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Display
	//
	//--------------------------------------------------
	
	
	var _Effects = __webpack_require__(21);
	
	var _Effects2 = _interopRequireDefault(_Effects);
	
	var _LayoutInterviewDetail = __webpack_require__(61);
	
	var _LayoutInterviewDetail2 = _interopRequireDefault(_LayoutInterviewDetail);
	
	var _PageScroll = __webpack_require__(64);
	
	var _PageScroll2 = _interopRequireDefault(_PageScroll);
	
	var _HoverEffectSNSPCDetails = __webpack_require__(65);
	
	var _HoverEffectSNSPCDetails2 = _interopRequireDefault(_HoverEffectSNSPCDetails);
	
	var _HoverEffectDetailsBtm = __webpack_require__(66);
	
	var _HoverEffectDetailsBtm2 = _interopRequireDefault(_HoverEffectDetailsBtm);
	
	var _HoverEffectPageTop = __webpack_require__(67);
	
	var _HoverEffectPageTop2 = _interopRequireDefault(_HoverEffectPageTop);
	
	var _HeaderColor = __webpack_require__(68);
	
	var _HeaderColor2 = _interopRequireDefault(_HeaderColor);
	
	var _InertiaScroll = __webpack_require__(69);
	
	var _InertiaScroll2 = _interopRequireDefault(_InertiaScroll);
	
	var _InertiaScroll3 = __webpack_require__(71);
	
	var _InertiaScroll4 = _interopRequireDefault(_InertiaScroll3);
	
	var _InertiaScroll5 = __webpack_require__(72);
	
	var _InertiaScroll6 = _interopRequireDefault(_InertiaScroll5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DisplayTop = function () {
	  function DisplayTop() {
	    _classCallCheck(this, DisplayTop);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(DisplayTop, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // ループスタート
	      gb.in.up.loop();
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //  UI
	      // ------------------------------------------------------------
	      _LayoutInterviewDetail2.default.run();
	
	      // bg
	      $('.sec03BgCanvas').removeClass('interview01 interview02 interview03'); // remove
	      if ($('.section').hasClass('section03_detail01')) {
	        // add
	        $('.sec03BgCanvas').addClass('interview01');
	      } else if ($('.section').hasClass('section03_detail02')) {
	        $('.sec03BgCanvas').addClass('interview02');
	      } else if ($('.section').hasClass('section03_detail03')) {
	        $('.sec03BgCanvas').addClass('interview03');
	      }
	
	      gb.in.headerColor = new _HeaderColor2.default();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	      new _HoverEffectSNSPCDetails2.default();
	      new _HoverEffectPageTop2.default($('.pageTop'));
	      new _HoverEffectDetailsBtm2.default($('.block04 .box01'));
	      new _HoverEffectDetailsBtm2.default($('.block04 .box02'));
	      new _HoverEffectDetailsBtm2.default($('.block04 .box03'));
	
	      if ($('.section').hasClass('section03_detail01')) {
	        // add
	        gb.in.inertia01 = new _InertiaScroll2.default();
	      } else if ($('.section').hasClass('section03_detail02')) {
	        gb.in.inertia02 = new _InertiaScroll4.default();
	      } else if ($('.section').hasClass('section03_detail03')) {
	        gb.in.inertia03 = new _InertiaScroll6.default();
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'run',
	    value: function run() {
	
	      // ------------------------------------------------------------
	      //  UI
	      // ------------------------------------------------------------
	      _LayoutInterviewDetail2.default.run();
	
	      // bg
	      $('.sec03BgCanvas').removeClass('interview01 interview02 interview03'); // remove
	      if ($('.section').hasClass('section03_detail01')) {
	        // add
	        $('.sec03BgCanvas').addClass('interview01');
	      } else if ($('.section').hasClass('section03_detail02')) {
	        $('.sec03BgCanvas').addClass('interview02');
	      } else if ($('.section').hasClass('section03_detail03')) {
	        $('.sec03BgCanvas').addClass('interview03');
	      }
	
	      gb.in.headerColor = new _HeaderColor2.default();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	      new _HoverEffectSNSPCDetails2.default();
	      new _HoverEffectPageTop2.default($('.pageTop'));
	      new _HoverEffectDetailsBtm2.default($('.block04 .box01'));
	      new _HoverEffectDetailsBtm2.default($('.block04 .box02'));
	      new _HoverEffectDetailsBtm2.default($('.block04 .box03'));
	
	      if ($('.section').hasClass('section03_detail01')) {
	        // add
	        gb.in.inertia01 = new _InertiaScroll2.default();
	      } else if ($('.section').hasClass('section03_detail02')) {
	        gb.in.inertia02 = new _InertiaScroll4.default();
	      } else if ($('.section').hasClass('section03_detail03')) {
	        gb.in.inertia03 = new _InertiaScroll6.default();
	      }
	    }
	  }]);
	
	  return DisplayTop;
	}();
	
	exports.default = DisplayTop;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Layout
	//
	//--------------------------------------------------
	
	var _SizeInterviewDetail = __webpack_require__(62);
	
	var _SizeInterviewDetail2 = _interopRequireDefault(_SizeInterviewDetail);
	
	var _Position = __webpack_require__(38);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Layout = function () {
	  function Layout() {
	    _classCallCheck(this, Layout);
	
	    this.setEvents();
	  }
	
	  _createClass(Layout, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.size = new _SizeInterviewDetail2.default(); // adjust size
	
	      this.position = new _Position2.default(); // adjust position
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      this.setup();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'run',
	    value: function run() {
	
	      this.size = new _SizeInterviewDetail2.default(); // adjust size
	
	      this.position = new _Position2.default(); // adjust position
	    }
	  }]);
	
	  return Layout;
	}();
	
	exports.default = Layout;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Size
	//
	//--------------------------------------------------
	
	var _ScaleInterviewDetail = __webpack_require__(63);
	
	var _ScaleInterviewDetail2 = _interopRequireDefault(_ScaleInterviewDetail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Size = function () {
	  function Size() {
	    _classCallCheck(this, Size);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Size, [{
	    key: 'setup',
	    value: function setup() {
	
	      // gb.in.u.setImgSPSize($('img')); // for sp img
	
	      // new gb.ResponsiveFontSize($('.fontResponsive')); //レスポンシブ時フォントサイズの変更
	
	      this.scale = new _ScaleInterviewDetail2.default(); // resize
	
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // gb.in.u.setImgSPSize($('img')); // for sp img
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // gb.in.r.add(this.onResize.bind(this));
	
	    }
	  }]);
	
	  return Size;
	}();
	
	exports.default = Size;

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Layout // historyも兼用
	//
	//--------------------------------------------------
	var Scale = function () {
	  function Scale() {
	    _classCallCheck(this, Scale);
	
	    this.SPBaseW = 375;
	    this.PCBaseW = 1300;
	
	    this.rate = 1;
	    this.W = window.innerWidth;
	
	    this.setup();
	    this.run(); //インスタンス時に実行
	    this.setEvents();
	  }
	
	  _createClass(Scale, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {
	
	      this.W = $(window).width();
	      this.iW = window.innerWidth;
	
	      this.scale();
	      this.wrap();
	    }
	
	    // 拡大
	
	  }, {
	    key: 'scale',
	    value: function scale() {
	
	      // bpの場合のscale
	      if (this.iW <= gb.in.conf.bp) {
	
	        // widthからrateを計算
	        // this.rate = gb.in.u.floatFormat(this.W / this.SPBaseW , 2);
	        this.rate = this.W / this.SPBaseW;
	
	        TweenMax.set($('#inner'), {
	          width: this.SPBaseW,
	          scale: this.rate,
	          'transform-origin': '0 0',
	          '-webkit-transform-origin': '0 0'
	        });
	      } else {
	
	        // widthからrateを計算
	        // this.rate = gb.in.u.floatFormat(this.W / this.PCBaseW , 2);
	        this.rate = this.W / this.PCBaseW;
	
	        if (this.W > 1300) {
	
	          this.W = 1300;
	
	          this.rate = this.W / this.PCBaseW;
	          // this.rate = gb.in.u.floatFormat(this.W / this.PCBaseW , 2);
	
	          TweenMax.set($('#inner'), {
	            width: '100%',
	            scale: this.rate,
	            'transform-origin': '0 0',
	            '-webkit-transform-origin': '0 0'
	          });
	        } else {
	
	          TweenMax.set($('#inner'), {
	            width: this.PCBaseW,
	            scale: this.rate,
	            'transform-origin': '0 0',
	            '-webkit-transform-origin': '0 0'
	          });
	        }
	      }
	    }
	
	    // scaleしたら、元の大きさ分余白ができるのでoverflow hiddenで消す
	
	  }, {
	    key: 'wrap',
	    value: function wrap() {
	
	      log($('#inner').innerHeight(), this.rate);
	
	      TweenMax.set($('#wrapper'), {
	        'overflow': 'hidden',
	        // width: $('#inner').innerWidth() * this.rate,
	        height: $('#inner').innerHeight() * this.rate
	      });
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.run();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('scaleInterviewDetail', this.onResize.bind(this));
	    }
	  }], [{
	    key: 'reset',
	    value: function reset() {
	
	      TweenMax.set($('#inner'), {
	        width: 'auto',
	        scale: 1,
	        'transform-origin': '0 0',
	        '-webkit-transform-origin': '0 0'
	      });
	
	      TweenMax.set($('#wrapper'), {
	        'overflow': 'visible',
	        height: '100%'
	      });
	    }
	  }]);
	
	  return Scale;
	}();
	
	exports.default = Scale;

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  PageScroll
	//
	//--------------------------------------------------
	
	var PageScroll = function () {
	  function PageScroll($target) {
	    _classCallCheck(this, PageScroll);
	
	    this.cb = function () {};
	    this.onComplete = function () {};
	
	    this.setEvents();
	    this.ready();
	  }
	
	  _createClass(PageScroll, [{
	    key: 'ready',
	    value: function ready() {}
	  }, {
	    key: 'pagetop',
	    value: function pagetop() {
	      var _this = this;
	
	      var self = this;
	
	      // スクロール
	      TweenMax.to($('body,html'), 0.8, {
	        scrollTop: 0,
	        ease: Power3.easeOut,
	        onComplete: function onComplete() {
	          _this.onComplete();
	        }
	      });
	
	      this.cb();
	
	      return false;
	    }
	  }, {
	    key: 'pageScrollTo',
	    value: function pageScrollTo(that) {
	
	      // 差分取得
	      var dif = 0;
	      if ($(that).data('diff')) dif = $(that).data('diff');
	
	      var $target = $($(that).attr("href"));
	      var pos = $target.offset().top;
	      pos = pos - dif;
	
	      TweenMax.to($('body,html'), 0.9, { scrollTop: pos, ease: Expo.easeOut });
	
	      log(1234);
	    }
	  }, {
	    key: 'pageScrollTo02',
	    value: function pageScrollTo02(that) {
	
	      // 差分取得
	      var dif = 0;
	      if ($(that).data('diff')) dif = $(that).data('diff');
	
	      var $target = $($(that).data("link"));
	      var pos = $target.offset().top;
	      pos = pos - dif;
	
	      TweenMax.to($('body,html'), 0.9, { scrollTop: pos, ease: Expo.easeOut });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      $('.toTop').on('click touchstart', function () {
	
	        self.pagetop.call(self);
	
	        return false;
	      });
	
	      log('111');
	
	      // hrefが#で始まっている、aタグをクリックした際
	      $('a[href^=#]').not('.notScroll').on('click', function () {
	        log(123);
	        self.pageScrollTo.call(self, this);
	        return false;
	      });
	
	      // historyのpast,present
	      $('.block01 .textWrap02 .item').not('.notScroll').on('click', function () {
	        self.pageScrollTo02.call(self, this);return false;
	      });
	      // hrefが#で始まっている、toScrollというクラスが付加されたタグをクリックした際
	      // $('[href^=#].toScroll').not('.notScroll').on('click',toScroll);
	    }
	  }]);
	
	  return PageScroll;
	}();
	
	exports.default = PageScroll;

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectSNSPCDetails
	//
	//--------------------------------------------------
	
	var HoverEffectSNSPCDetails = function () {
	  function HoverEffectSNSPCDetails($wrap, $target) {
	    _classCallCheck(this, HoverEffectSNSPCDetails);
	
	    this.$wrap = $('.block01 .tit');
	    this.$icon = this.$wrap.find('.sns');
	    this.$box = this.$wrap.find('.snsRowWrap');
	    this.$item = this.$wrap.find('.snsRowWrap .item');
	    this.$bb = this.$wrap.find('.bar.bottom');
	    this.$br = this.$wrap.find('.bar.right');
	
	    // motion
	    this.tl = new TimelineMax();
	
	    this.setEvents();
	  }
	
	  _createClass(HoverEffectSNSPCDetails, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // bar
	      TweenMax.set(this.$bb, { height: 0 });
	      TweenMax.set(this.$br, { width: 0 });
	
	      // sns
	      TweenMax.set(this.$item, { x: 30, opacity: 0 });
	
	      this.$box.show();
	    }
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      if (!gb.in.u.isResPC) return;
	
	      TweenMax.killTweensOf(this.$br);
	      TweenMax.killTweensOf(this.$bb);
	      TweenMax.killTweensOf(this.$item);
	
	      this.ready();
	
	      var tl = new TimelineMax();
	      var tl02 = new TimelineMax();
	
	      tl
	      // barが伸びる
	      .to(this.$br, 0.3, {
	        width: '100%',
	        ease: Power3.easeInOut
	      }).to(this.$bb, 0.3, {
	        height: '100%',
	        ease: Power3.easeInOut
	      }, '-=0.2');
	
	      tl02.to(this.$item.eq(0), 0.3, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeInOut
	      }).to(this.$item.eq(1), 0.3, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeInOut
	      }, '-=0.25').to(this.$item.eq(2), 0.3, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeInOut
	      }, '-=0.25');
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	      var _this = this;
	
	      if (!gb.in.u.isResPC) return;
	
	      TweenMax.killTweensOf(this.$br);
	      TweenMax.killTweensOf(this.$bb);
	      TweenMax.killTweensOf(this.$item);
	
	      var tl = new TimelineMax();
	      var tl02 = new TimelineMax();
	
	      tl
	      // barが伸びる
	      .to(this.$bb, 0.3, {
	        height: 0,
	        ease: Power3.easeInOut
	      }).to(this.$br, 0.3, {
	        width: 0,
	        ease: Power3.easeInOut
	      }, '-=0.2');
	
	      tl02.to(this.$item.eq(2), 0.3, {
	        x: 30,
	        opacity: 0,
	        ease: Power4.easeInOut
	      }).to(this.$item.eq(1), 0.3, {
	        x: 30,
	        opacity: 0,
	        ease: Power4.easeInOut
	      }, '-=0.25').to(this.$item.eq(0), 0.3, {
	        x: 30,
	        opacity: 0,
	        ease: Power4.easeInOut,
	        onComplete: function onComplete() {
	          _this.$box.hide();
	        }
	      }, '-=0.2');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$icon.on('mouseenter', function (e) {
	        self.onEnter.call(self, this);
	      });
	      this.$icon.add(this.$box).on('mouseleave', function (e) {
	        self.onLeave.call(self, this);
	      });
	    }
	  }]);
	
	  return HoverEffectSNSPCDetails;
	}();
	
	exports.default = HoverEffectSNSPCDetails;

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectDetailsBtm
	//
	//--------------------------------------------------
	
	var HoverEffectDetailsBtm = function () {
	  function HoverEffectDetailsBtm($wrap) {
	    _classCallCheck(this, HoverEffectDetailsBtm);
	
	    this.$wrap = $wrap;
	
	    // motion
	    this.tl = new TimelineMax();
	
	    this.setEvents();
	  }
	
	  _createClass(HoverEffectDetailsBtm, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      log('enter');
	
	      if (gb.in.u.isResSP) return;
	
	      var tl = new TimelineMax();
	
	      TweenMax.killTweensOf($(that).find('img'));
	      TweenMax.killTweensOf($(that).find('.bgOverlay'));
	
	      // img
	      tl.to($(that).find('.bgOverlay'), 1.2, {
	        opacity: 0,
	        ease: Expo.easeOut
	      });
	
	      // overlay
	      TweenMax.to($(that).find('img'), 1.2, {
	        scale: 1.1,
	        ease: Expo.easeOut
	      });
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      log('leave');
	
	      if (gb.in.u.isResSP) return;
	
	      var tl02 = new TimelineMax();
	
	      // TweenMax.killTweensOf($(that).find('img'));
	      // TweenMax.killTweensOf($(that).find('.bgOverlay'));
	
	      tl02.to($(that).find('img'), 1.0, {
	        scale: 1,
	        ease: Power4.easeOut
	      }).to($(that).find('.bgOverlay'), 1.0, {
	        opacity: 1,
	        ease: Power4.easeOut
	      }, '-=0.8');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$wrap.on('mouseenter', function (e) {
	        self.onEnter.call(self, this);
	      });
	      this.$wrap.on('mouseleave', function (e) {
	        self.onLeave.call(self, this);
	      });
	    }
	  }]);
	
	  return HoverEffectDetailsBtm;
	}();
	
	exports.default = HoverEffectDetailsBtm;

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectSVGArrowSideR
	//
	//--------------------------------------------------
	
	var HoverEffectSVGArrowSideR = function () {
	  function HoverEffectSVGArrowSideR($target) {
	    _classCallCheck(this, HoverEffectSVGArrowSideR);
	
	    this.$target = $target;
	
	    // motion
	    this.tl = new TimelineMax();
	
	    this.setup();
	    // this.autoArrow();
	
	    this.isHover = false;
	
	    // スマホのときは処理しない
	    if (gb.in.u.isPC) this.setEvents();
	  }
	
	  _createClass(HoverEffectSVGArrowSideR, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      this.isHover = true;
	
	      if (this.tl02) this.tl02.kill();
	      this.tl01 = new TimelineMax();
	
	      this.tl01
	      // 矢印を下に下げる
	      .to($(that).find('svg'), 0.4, {
	        scaleY: 0.65,
	        y: -8,
	        z: 1,
	        'transform-origin': '50% 0%',
	        ease: Power4.easeOut
	      })
	      // 文字を下に下げる
	      .to($(that).find('span'), 0.4, {
	        y: -40,
	        z: 1,
	        ease: Power4.easeOut
	      }, '-=0.37');
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      this.isHover = false;
	
	      if (this.tl01) this.tl01.kill();
	      this.tl02 = new TimelineMax();
	
	      this.tl02
	      // 文字を下に下げる
	      .to($(that).find('span'), 0.5, {
	        y: 0,
	        z: 1,
	        ease: Power2.easeInOut
	      })
	      // 矢印を下に下げる
	      .to($(that).find('svg'), 0.5, {
	        scaleY: 1,
	        y: 0,
	        z: 1,
	        'transform-origin': '50% 0%',
	        ease: Power2.easeInOut
	      }, '-=0.45');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).on('mouseenter', function (e) {
	          self.onEnter.call(self, this);
	        });
	        $(this).on('mouseleave', function (e) {
	          self.onLeave.call(self, this);
	        });
	      });
	    }
	  }]);
	
	  return HoverEffectSVGArrowSideR;
	}();
	
	exports.default = HoverEffectSVGArrowSideR;

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HeaderColor
	//
	//--------------------------------------------------
	
	var HeaderColor = function () {
	  function HeaderColor(param) {
	    _classCallCheck(this, HeaderColor);
	
	    this.$logo = $('#header .logo svg path');
	    this.$subTit = $('#header .subTit svg').eq(0).find('path');
	    this.$menu = $('#header .menuBtn01 span');
	
	    this.$nav = $('#nav .link--hover');
	    this.$navBar = $('#nav .bar');
	
	    this.isILock = false;
	    this.isHLock = false;
	
	    this.adjustH = 50;
	
	    this.setup();
	    this.run();
	    this.setEvents();
	  }
	
	  _createClass(HeaderColor, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {
	
	      // インタビュー詳細ページか、
	      if (gb.in.pjax.id == 'interview_detail') {
	
	        // スマホのとき処理を実行しない
	        if (gb.in.u.isResSP) return;
	
	        var targetSt = 800 * gb.in.Layout.size.scale.rate - this.adjustH;
	
	        if (gb.in.s.st > targetSt && !this.isHLock) {
	          this.isHLock = true;
	
	          // 黒に
	          this.setColor();
	        } else if (gb.in.s.st <= targetSt && this.isHLock) {
	          this.isHLock = false;
	
	          // 白に
	          this.removeColor();
	        }
	      }
	
	      // historyの場合下記処理を実行する
	      if (gb.in.pjax.id == 'history') {
	
	        if (gb.in.u.isResPC) {
	          var targetSt = gb.in.r.ws.h - this.adjustH;
	        } else {
	          var targetSt = $('.block01').height() * gb.in.Layout.size.scale.rate - this.adjustH / 2;
	        }
	
	        if (gb.in.s.st > targetSt && !this.isHLock) {
	          this.isHLock = true;
	
	          // 黒に
	          this.setColor();
	        } else if (gb.in.s.st <= targetSt && this.isHLock) {
	          this.isHLock = false;
	
	          // 白に
	          this.removeColor();
	        }
	      }
	    }
	  }, {
	    key: 'setColor',
	    value: function setColor() {
	
	      // logo
	      TweenMax.to(this.$logo, 0.4, {
	        fill: '#000',
	        ease: Power4.easeOut
	      });
	
	      // subTit
	      TweenMax.to(this.$subTit, 0.4, {
	        fill: '#000',
	        ease: Power4.easeOut
	      });
	
	      // menu
	      TweenMax.to(this.$menu, 0.4, {
	        backgroundColor: '#000',
	        ease: Power4.easeOut
	      });
	
	      // nav
	      TweenMax.to(this.$nav, 0.4, {
	        color: '#000',
	        ease: Power4.easeOut
	      });
	
	      // navBar
	      TweenMax.to(this.$navBar, 0.4, {
	        backgroundColor: '#000',
	        ease: Power4.easeOut
	      });
	    }
	  }, {
	    key: 'removeColor',
	    value: function removeColor() {
	
	      // logo
	      TweenMax.to(this.$logo, 0.4, {
	        fill: '#fff',
	        ease: Power4.easeOut
	      });
	
	      // subTit
	      TweenMax.to(this.$subTit, 0.4, {
	        fill: '#fff',
	        ease: Power4.easeOut
	      });
	
	      // menu
	      TweenMax.to(this.$menu, 0.4, {
	        backgroundColor: '#fff',
	        ease: Power4.easeOut
	      });
	
	      // nav
	      TweenMax.to(this.$nav, 0.4, {
	        color: '#fff',
	        ease: Power4.easeOut
	      });
	
	      // navBar
	      TweenMax.to(this.$navBar, 0.4, {
	        backgroundColor: '#fff',
	        ease: Power4.easeOut
	      });
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // インタビュー詳細ページか、
	      if (gb.in.pjax.id == 'interview_detail') {
	
	        if (gb.in.u.isResSP) {
	
	          // logo
	          TweenMax.to(this.$logo, 0.4, {
	            fill: '#fff',
	            ease: Power4.easeOut
	          });
	
	          // menu
	          TweenMax.to(this.$menu, 0.4, {
	            backgroundColor: '#fff',
	            ease: Power4.easeOut
	          });
	        }
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.s.add('HeaderColor', this.run.bind(this));
	      gb.in.r.add('HeaderColor', this.onResize.bind(this));
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      this.removeColor();
	      gb.in.s.remove('HeaderColor');
	      gb.in.r.remove('HeaderColor');
	    }
	  }]);
	
	  return HeaderColor;
	}();
	
	exports.default = HeaderColor;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  InertiaScroll sss
	//
	//--------------------------------------------------
	
	var _DomMotionLibs = __webpack_require__(70);
	
	var _DomMotionLibs2 = _interopRequireDefault(_DomMotionLibs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var InertiaScroll = function () {
	  function InertiaScroll() {
	    var _this = this;
	
	    _classCallCheck(this, InertiaScroll);
	
	    // this.$wrap = $('#wrapper');
	    // this.$inner = $('#inner');
	    this.$wrap = $('body');
	    this.$inner = $('#wrapper');
	    this.$wrapInner = $('#inner');
	    this.$wrapper = this.$inner.add($('#sideR, #bgWrap'));
	    this.$target = $('.inertia');
	    this.$header = $('.header');
	
	    this.wrapST = 0; // ?Ҫ??Υ?????`???
	    this.targetST = 0; // ?Ҫ??Υ?????`???
	    this.st = 0; // ?????????ν????ե??å?    
	    this.wheel = 0;
	
	    this.wrapEase = 0.18;
	    this.wrapTargetDisEase = 0.3;
	    this.targetEase = 0.05;
	
	    this.rateList = []; // ???줾??Ҫ??ΑT??α?????{????    
	    this.marginList = [];
	    this.dirList = [];
	
	    this.isWheel = true;
	    this.FRICTION = 0.6;
	
	    this.isLock = false;
	
	    setTimeout(function () {
	
	      if (gb.in.u.isResSP) return;
	
	      $(window).scrollTop(0);
	      TweenMax.set(_this.$wrapper, { y: 0 });
	      _this.setup();
	      _this.ready();
	      // this.onResize();
	      _this.setEvents();
	    }, 100);
	  }
	
	  _createClass(InertiaScroll, [{
	    key: 'setup',
	    value: function setup() {
	
	      // wrapҪ??Ȥ˜ʂ?    
	      this.$wrapper.addClass('is-fixed');
	      this.H = this.$inner.height();
	      this.$wrap.height(this.H);
	
	      var self = this;
	      this.$target.each(function () {
	
	        var rate = $(this).data('rate');
	        var margin = $(this).data('margin');
	        var dir = $(this).data('dir') || 1;
	        self.rateList.push(rate);
	        self.marginList.push(margin);
	        self.dirList.push(dir);
	      });
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // text
	      this.$tit01 = $('.block02 .blockInner .tit01');
	      this.$tit02 = $('.block02 .blockInner .tit02');
	      this.$text02 = $('.block02 .blockInner .text02');
	      this.$text03 = $('.block02 .blockInner .text03');
	      this.$text04 = $('.block02 .blockInner .text04');
	      this.$text05 = $('.block02 .blockInner .text05');
	      this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h / 8 * 5;this.tit01STLock = false;
	      this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h / 8 * 5;this.tit02STLock = false;
	      this.text02ST = this.$text02.offset().top - gb.in.r.ws.h / 8 * 5;this.text02STLock = false;
	      this.text03ST = this.$text03.offset().top - gb.in.r.ws.h / 8 * 5;this.text03STLock = false;
	      this.text04ST = this.$text04.offset().top - gb.in.r.ws.h / 8 * 5;this.text04STLock = false;
	      this.text05ST = this.$text05.offset().top - gb.in.r.ws.h / 8 * 5;this.text05STLock = false;
	
	      this.libs = new _DomMotionLibs2.default();
	
	      var opt = { $target: this.$tit01, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit02, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text02, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text03, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text04, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text05, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	
	      TweenMax.set(this.$tit01, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$tit02, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text02, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text03, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text04, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text05, { y: 120, opacity: 0 });
	
	      // img
	      this.$img01 = $('.imgWrap01 img');
	      this.$bg01 = $('.imgWrap01 .bg');
	      this.$img02 = $('.imgWrap02 img');
	      this.$img03 = $('.imgWrap03 img');
	      this.$bg02 = $('.imgWrap03 .bg');
	      this.$img04 = $('.imgWrap04 img');
	      this.$bg03 = $('.imgWrap04 .bg');
	
	      TweenMax.set(this.$img01, { x: -30, clip: 'rect(0px 0px 360px 0px)' });
	      TweenMax.set(this.$bg01, { x: 0, clip: 'rect(0px 10px 0px 0px)' });
	      TweenMax.set(this.$img02, { x: -15, clip: 'rect(0px 0px 240px 0px)' });
	      TweenMax.set(this.$img03, { x: -30, clip: 'rect(0px 0px 400px 0px)' }); // w 600 h 400
	      TweenMax.set(this.$bg02, { x: 0, clip: 'rect(0px 10px 0px 0px)' }); // w 600 h 360
	      TweenMax.set(this.$img04, { x: -15, clip: 'rect(0px 0px 360px 0px)' }); // w 540 h 360
	      TweenMax.set(this.$bg03, { x: 0, clip: 'rect(0px 10px 0px 0px)' }); // w 510 h 345
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      if (gb.in.u.isResSP) return;
	      if (!this.isWheel) return;
	
	      if (gb.in.s.offset < -this.H + gb.in.r.ws.h) gb.in.s.offset = -this.H + gb.in.r.ws.h;
	      if (gb.in.s.offset > 0) gb.in.s.offset = 0;
	      this.wheel = gb.in.s.offset;
	
	      // log(this.wrapST);
	      // log(this.wheel);
	
	      // Ӌ?
	      // this.st = -this.wheel;
	      this.st = $(window).scrollTop();
	      this.wrapST += (this.st - this.wrapST) * this.wrapEase;
	      this.targetST += (this.st * this.wrapTargetDisEase - this.targetST) * this.targetEase;
	
	      // ??ӳ
	      // inner
	      TweenMax.set(this.$wrapper, { y: -this.wrapST });
	      // target   
	      var self = this;
	      this.$target.each(function (i) {
	
	        TweenMax.set($(this), { y: self.dirList[i] * (-self.targetST * Number(self.rateList[i]) / gb.in.Layout.size.scale.rate + self.marginList[i]) });
	      });
	
	      this.showContents();
	    }
	  }, {
	    key: 'showContents',
	    value: function showContents() {
	
	      if (this.tit01ST < this.wrapST && !this.tit01STLock) {
	        this.tit01STLock = true;
	
	        // text
	        var opt = { $target: this.$tit01, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$tit01, 1.5, { y: 0, x: '-50%', z: 1, opacity: 1, ease: Power2.easeOut });
	
	        var opt = { $target: this.$text02, dur: 1.35, delay: 0.15, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text02, 1.35, { y: 0, x: '-50%', z: 1, opacity: 1, delay: 0.15, ease: Power2.easeOut });
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg01, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 340px 0px)',
	          ease: Expo.easeOut,
	          delay: 0.45
	        }).to(this.$bg01, 0.7, {
	          z: 1,
	          clip: 'rect(0px 520px 340px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img01, 1.6, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 540px 360px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5').to(this.$img02, 1.6, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 360px 240px 0px)',
	          ease: Expo.easeOut
	        }, '-=1.42');
	      };
	      if (this.tit02ST < this.wrapST && !this.tit02STLock) {
	        this.tit02STLock = true;
	
	        var opt = { $target: this.$tit02, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$tit02, 1.5, { y: 0, x: '-50%', z: 1, opacity: 1, ease: Power2.easeOut });
	
	        var opt = { $target: this.$text04, dur: 1.5, delay: 0.1, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text04, 1.5, { y: 0, x: '-50%', z: 1, opacity: 1, delay: 0.1, ease: Power2.easeOut });
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg03, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 360px 0px)',
	          ease: Expo.easeOut,
	          delay: 0.4
	        }).to(this.$bg03, 0.7, {
	          z: 1,
	          clip: 'rect(0px 600px 360px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img04, 1.5, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 520px 360px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5');
	      };
	      if (this.text03ST < this.wrapST && !this.text03STLock) {
	        this.text03STLock = true;
	
	        var opt = { $target: this.$text03, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text03, 1.5, { y: 0, x: '-50%', z: 1, opacity: 1, ease: Power2.easeOut });
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg02, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 345px 0px)',
	          ease: Expo.easeOut
	        }).to(this.$bg02, 0.7, {
	          z: 1,
	          clip: 'rect(0px 510px 345px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img03, 1.35, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 600px 400px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5');
	      };
	      if (this.text05ST < this.wrapST && !this.text05STLock) {
	        this.text05STLock = true;
	
	        var opt = { $target: this.$text05, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text05, 1.5, { y: 0, z: 1, opacity: 1, ease: Power2.easeOut });
	      };
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.setup();
	
	      this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text02ST = this.$text02.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text03ST = this.$text03.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text04ST = this.$text04.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text05ST = this.$text05.offset().top - gb.in.r.ws.h / 8 * 5;
	
	      if (gb.in.u.isResSP) {
	        this.reset();
	      };
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	
	      gb.in.s.STAmount = 0;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	
	      TweenMax.set(this.$wrapper, { y: 0, x: 0 });
	      // target   
	      var self = this;
	      this.$target.each(function (i) {
	
	        TweenMax.set($(this), { y: 0, x: 0 });
	      });
	
	      var opt = { $target: this.$tit01, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit02, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text02, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text03, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text04, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text05, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	
	      TweenMax.set(this.$tit01, { y: 0, opacity: 1 });
	      TweenMax.set(this.$tit02, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text02, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text03, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text04, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text05, { y: 0, opacity: 1 });
	    }
	  }, {
	    key: 'resetInertia',
	    value: function resetInertia() {
	
	      this.$wrapper.removeClass('is-fixed');
	      TweenMax.set(this.$wrapper, { y: 0, x: 0 });
	      $('body').css('height', '100%');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.up.add('InertiaScroll', this.run.bind(this));
	      gb.in.r.add('InertiaScroll', this.onResize.bind(this));
	      // $(window).on('blur', this.onBlur.bind(this));
	
	    }
	  }]);
	
	  return InertiaScroll;
	}();
	
	exports.default = InertiaScroll;

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  DomMotionLibs
	//
	// ------------------------------------------------------------
	
	var DomMotionLibs = function () {
	  function DomMotionLibs(src) {
	    _classCallCheck(this, DomMotionLibs);
	
	    this.src = src;
	
	    this.first = true;
	  }
	
	  _createClass(DomMotionLibs, [{
	    key: 'blur',
	    value: function blur(opt) {
	
	      var def = {
	        $target: null,
	        dur: 1,
	        delay: 0,
	        blur: 0, blurTarget: 100,
	        ease: Power3.easeIn
	      };
	      var param = $.extend(def, opt);
	      var tl = new TimelineMax();
	
	      tl.to(param, param.dur, {
	        blur: param.blurTarget,
	        ease: param.ease,
	        delay: param.delay,
	        onUpdate: function onUpdate(p) {
	          var b = p.target.blur;
	          TweenMax.set(param.$target, {
	            '-webkit-filter': 'blur(' + b + 'px)',
	            'filter': 'blur(' + b + 'px)'
	          });
	        },
	        onUpdateParams: ["{self}"]
	      });
	    }
	  }, {
	    key: 'bright',
	    value: function bright(opt) {
	
	      var def = {
	        $target: null,
	        dur: 1,
	        delay: 0,
	        grayscale: 0, grayscaleTarget: 100,
	        brightness: 100, brightnessTarget: 1000,
	        opacity: 0, opacityTarget: 1,
	        ease: Power3.easeIn,
	        onComplete: function onComplete() {}
	      };
	      var param = $.extend(def, opt);
	      var tl = new TimelineMax();
	
	      tl
	      // .set(param, {
	      //   grayscale: param.grayscale,
	      //   brightness: param.brightness,
	      //   opacity: param.opacity,
	      // })
	      .to(param, param.dur, {
	        grayscale: param.grayscaleTarget,
	        brightness: param.brightnessTarget,
	        ease: param.ease,
	        delay: param.delay,
	        onUpdate: function onUpdate(p) {
	          var g = p.target.grayscale;
	          var b = p.target.brightness;
	          TweenMax.set(param.$target, {
	            '-webkit-filter': 'brightness(' + b + '%) grayscale(' + g + '%)',
	            'filter': 'brightness(' + b + '%) grayscale(' + g + '%)'
	          });
	        },
	        onUpdateParams: ["{self}"]
	      }).to(param.$target, param.dur, {
	        opacity: param.opacityTarget,
	        ease: param.ease,
	        onComplete: function onComplete() {
	          param.onComplete();
	        }
	        // },'-='+param.dur-3.0);
	      }, '-=1.8');
	    }
	  }, {
	    key: 'shake',
	    value: function shake(opt) {
	
	      var def = {
	        $target: null,
	        dur: 1,
	        delay: 0,
	        mag: 10,
	        ease: Power3.easeIn
	      };
	      var param = $.extend(def, opt);
	      var tl = new TimelineMax();
	
	      tl.to({}, param.dur, {
	        delay: param.delay,
	        ease: param.ease,
	        onUpdate: function onUpdate() {
	
	          var x = (Math.random() * 2 - 1) * param.mag;
	          var y = (Math.random() * 2 - 1) * param.mag;
	
	          TweenMax.set(param.$target, { x: x, y: y });
	        },
	        onComplete: function onComplete() {
	
	          TweenMax.set(param.$target, { x: 0, y: 0 });
	        }
	      });
	    }
	  }, {
	    key: 'afterImg',
	    value: function afterImg(opt) {
	
	      var def = {
	        target: null,
	        $wrap: $('body'),
	        dur: 1,
	        delay: 0,
	        num: 3,
	        lag: 0.05,
	        scale: 1,
	        opacity: 1,
	        ease: Power3.easeIn
	      };
	      var param = $.extend(def, opt);
	      var tl = new TimelineMax();
	      var self = this;
	
	      tl.add(function () {
	
	        if (self.first) {
	          self.first = false;
	
	          // 画像複製
	          for (var i = 0; i < param.num; i++) {
	            var dom = $(param.target).clone();
	            param.$wrap.append(dom);
	          };
	
	          // 画像スタイルset
	          TweenMax.set($(param.target), { 'transform-origin': '50% 50%', 'position': 'absolute', scale: 1.3 });
	        }
	
	        // motion
	        $(param.target).each(function (index, el) {
	
	          TweenMax.to($(this), param.dur, {
	            scale: param.scale,
	            opacity: param.opacity,
	            delay: param.lag * index,
	            ease: param.ease
	          });
	        });
	      });
	    }
	  }, {
	    key: 'scaleSlow',
	    value: function scaleSlow(opt) {
	
	      var def = {
	        target: null,
	        $wrap: $('body'),
	        dur: 1,
	        dur02: 7,
	        dur03: 1.3,
	        delay: 0,
	        scale: 1, scaleTarget: 1.3,
	        opacity: 0, opacityTarget: 1,
	        ease: Power3.easeIn
	      };
	      var param = $.extend(def, opt);
	      var tl = new TimelineMax();
	      var self = this;
	
	      tl.to($(param.target), 0.01, {
	        scale: param.scale,
	        opacity: param.opacity,
	        onComplete: function onComplete() {
	          TweenMax.to($(param.target), param.dur02, {
	            scale: param.scaleTarget,
	            ease: Power0.easeNone
	          });
	          TweenMax.to($(param.target), param.dur03, {
	            opacity: param.opacityTarget,
	            ease: param.ease
	          });
	        }
	      });
	    }
	  }, {
	    key: 'scaleElastic',
	    value: function scaleElastic(opt) {
	
	      var def = {
	        target: null,
	        dur: 1,
	        scaleX: 2, scaleY: 0, scaleTarget: 1,
	        opacity: 0,
	        ease: Elastic.easeOut.config(1, 0.3)
	      };
	      var param = $.extend(def, opt);
	      var tl = new TimelineMax();
	      var self = this;
	
	      tl.fromTo(param.target, param.dur, {
	        scaleX: param.scaleX,
	        scaleY: param.scaleY
	      }, {
	        scale: param.scaleTarget,
	        ease: Elastic.easeOut.config(1, 0.3)
	      });
	    }
	
	    // ゴム
	
	  }, {
	    key: 'gum',
	    value: function gum(opt) {
	
	      var def = {
	        target: null,
	        dur: 1,
	        scaleX: 2, scaleY: 0, scaleTarget: 1,
	        opacity: 0,
	        ease: Elastic.easeOut.config(1, 0.3)
	      };
	      var param = $.extend(def, opt);
	      var tl = new TimelineMax({ repeat: -1, repeatDelay: 1 });
	      var self = this;
	
	      tl.to(param.target, 0.3, {
	        scaleY: 1.4,
	        scaleX: 0.7,
	        ease: Power2.easeOut
	      }).to(param.target, 0.25, {
	        scaleY: 0.7,
	        scaleX: 1.3,
	        ease: Power2.easeOut
	      }).to(param.target, 0.2, {
	        scaleY: 1.3,
	        scaleX: 0.8,
	        ease: Power2.easeOut
	      }).to(param.target, 0.2, {
	        scaleY: 0.8,
	        scaleX: 1.2,
	        ease: Power2.easeOut
	      }).to(param.target, 0.2, {
	        scaleY: 1.1,
	        scaleX: 0.9,
	        ease: Power2.easeOut
	      }).to(param.target, 0.13, {
	        scaleY: 0.9,
	        scaleX: 1.1,
	        ease: Power2.easeOut
	      }).to(param.target, 0.13, {
	        scaleY: 1,
	        scaleX: 1,
	        ease: Power2.easeOut
	      });
	    }
	
	    // ゴム
	
	  }, {
	    key: 'dooon',
	    value: function dooon(opt) {
	
	      var def = {
	        target: null,
	        wrap: null,
	        dur: 1,
	        scaleX: 2, scaleY: 0, scaleTarget: 1,
	        opacity: 0,
	        ease: Elastic.easeOut.config(1, 0.3)
	      };
	      var param = $.extend(def, opt);
	      var tl = new TimelineMax();
	      var self = this;
	
	      // logo ちょっとscale,opacityで出て、そのあと揺れて、小さくなる
	      tl.fromTo(param.target, 3, {
	        scale: 1.5,
	        opacity: 0
	      }, {
	        scale: 1.45,
	        opacity: 0.4,
	        ease: Power3.easeIn
	      });
	
	      tl.to({}, 0.7, {
	        ease: Power4.easeIn,
	        onUpdate: function onUpdate() {
	
	          // ゆれ
	          var x = (Math.random() * 2 - 1) * 5;
	          var y = (Math.random() * 2 - 1) * 5;
	
	          console.log(param.wrap);
	
	          TweenMax.set(param.wrap, { x: x, y: y });
	        },
	        onComplete: function onComplete() {
	
	          TweenMax.set(param.wrap, { x: 0, y: 0 });
	        }
	      }).to(param.target, 0.4, {
	        scale: 1,
	        opacity: 1,
	        ease: Power4.easeOut
	      }, '-=0.75');
	    }
	  }]);
	
	  return DomMotionLibs;
	}();
	
	exports.default = DomMotionLibs;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  InertiaScroll sss
	//
	//--------------------------------------------------
	
	var _DomMotionLibs = __webpack_require__(70);
	
	var _DomMotionLibs2 = _interopRequireDefault(_DomMotionLibs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var InertiaScroll = function () {
	  function InertiaScroll() {
	    var _this = this;
	
	    _classCallCheck(this, InertiaScroll);
	
	    // this.$wrap = $('#wrapper');
	    // this.$inner = $('#inner');
	    this.$wrap = $('body');
	    this.$inner = $('#wrapper');
	    this.$wrapper = this.$inner.add($('#sideR, #bgWrap'));
	    this.$target = $('.inertia');
	    this.$header = $('.header');
	
	    this.wrapST = 0; // ?Ҫ??Υ?????`???
	    this.targetST = 0; // ?Ҫ??Υ?????`???
	    this.st = 0; // ?????????ν????ե??å?    
	    this.wheel = 0;
	
	    this.wrapEase = 0.18;
	    this.wrapTargetDisEase = 0.3;
	    this.targetEase = 0.05;
	
	    this.rateList = []; // ???줾??Ҫ??ΑT??α?????{????    
	    this.marginList = [];
	    this.dirList = [];
	
	    this.isWheel = true;
	    this.FRICTION = 0.6;
	
	    this.isLock = false;
	
	    setTimeout(function () {
	
	      if (gb.in.u.isResSP) return;
	
	      $(window).scrollTop(0);
	      TweenMax.set(_this.$wrapper, { y: 0 });
	      _this.setup();
	      _this.ready();
	      // this.onResize();
	      _this.setEvents();
	    }, 100);
	  }
	
	  _createClass(InertiaScroll, [{
	    key: 'setup',
	    value: function setup() {
	
	      // wrapҪ??Ȥ˜ʂ?    
	      this.$wrapper.addClass('is-fixed');
	      this.H = this.$inner.height();
	      this.$wrap.height(this.H);
	
	      var self = this;
	      this.$target.each(function () {
	
	        var rate = $(this).data('rate');
	        var margin = $(this).data('margin');
	        var dir = $(this).data('dir') || 1;
	        self.rateList.push(rate);
	        self.marginList.push(margin);
	        self.dirList.push(dir);
	      });
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // text
	      this.$tit01 = $('.block02 .blockInner .tit01');
	      this.$tit02 = $('.block02 .blockInner .tit02');
	      this.$text02 = $('.block02 .blockInner .text02');
	      this.$text03 = $('.block02 .blockInner .text03');
	      this.$text04 = $('.block02 .blockInner .text04');
	      this.$text05 = $('.block02 .blockInner .text05');
	      this.$imgWrap05 = $('.block02 .blockInner .imgWrap05');
	      this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h / 8 * 5;this.tit01STLock = false;
	      this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h / 8 * 5;this.tit02STLock = false;
	      this.text02ST = this.$text02.offset().top - gb.in.r.ws.h / 8 * 5;this.text02STLock = false;
	      this.text03ST = this.$text03.offset().top - gb.in.r.ws.h / 8 * 5;this.text03STLock = false;
	      this.text04ST = this.$text04.offset().top - gb.in.r.ws.h / 8 * 5;this.text04STLock = false;
	      this.text05ST = this.$text05.offset().top - gb.in.r.ws.h / 8 * 5;this.text05STLock = false;
	      this.imgWrap05ST = this.$imgWrap05.offset().top - gb.in.r.ws.h / 8 * 5;this.imgWrap05STLock = false;
	
	      this.libs = new _DomMotionLibs2.default();
	
	      var opt = { $target: this.$tit01, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit02, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text02, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text03, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text04, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text05, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	
	      TweenMax.set(this.$tit01, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$tit02, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text02, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text03, { y: 120, opacity: 0 });
	      TweenMax.set(this.$text04, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text05, { y: 120, opacity: 0 });
	
	      // img
	      this.$img01 = $('.imgWrap01 img');
	      this.$bg01 = $('.imgWrap01 .bg');
	      this.$img02 = $('.imgWrap02 img');
	      this.$img03 = $('.imgWrap03 img');
	      this.$bg02 = $('.imgWrap03 .bg');
	      this.$img04 = $('.imgWrap04 img');
	      this.$img05 = $('.imgWrap05 img');
	      this.$bg03 = $('.imgWrap05 .bg');
	
	      TweenMax.set(this.$img01, { x: -30, clip: 'rect(0px 0px 360px 0px)' });
	      TweenMax.set(this.$bg01, { x: 0, clip: 'rect(0px 10px 0px 0px)' });
	      TweenMax.set(this.$img02, { x: -15, clip: 'rect(0px 0px 220px 0px)' });
	      TweenMax.set(this.$img03, { x: -30, clip: 'rect(0px 0px 540px 0px)' }); // w 360 h 540
	      TweenMax.set(this.$bg02, { x: 0, clip: 'rect(0px 10px 0px 0px)' }); // w 280 h 520
	      TweenMax.set(this.$img04, { x: '-50%', clip: 'rect(0px 0px 240px 0px)' }); // w 360 h 240
	      TweenMax.set(this.$img05, { x: -30, clip: 'rect(0px 0px 600px 0px)' }); // w 1010 h 600
	      TweenMax.set(this.$bg03, { x: 0, clip: 'rect(0px 10px 0px 0px)' }); // w 800 h 500
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      if (gb.in.u.isResSP) return;
	      if (!this.isWheel) return;
	
	      if (gb.in.s.offset < -this.H + gb.in.r.ws.h) gb.in.s.offset = -this.H + gb.in.r.ws.h;
	      if (gb.in.s.offset > 0) gb.in.s.offset = 0;
	      this.wheel = gb.in.s.offset;
	
	      // log(this.wrapST);
	      // log(this.wheel);
	
	      // Ӌ?
	      // this.st = -this.wheel;
	      this.st = $(window).scrollTop();
	      this.wrapST += (this.st - this.wrapST) * this.wrapEase;
	      this.targetST += (this.st * this.wrapTargetDisEase - this.targetST) * this.targetEase;
	
	      // ??ӳ
	      // inner
	      TweenMax.set(this.$wrapper, { y: -this.wrapST });
	      // target   
	      var self = this;
	      this.$target.each(function (i) {
	
	        TweenMax.set($(this), { y: self.dirList[i] * (-self.targetST * Number(self.rateList[i]) / gb.in.Layout.size.scale.rate + self.marginList[i]) });
	      });
	
	      this.showContents();
	    }
	  }, {
	    key: 'showContents',
	    value: function showContents() {
	
	      if (this.tit01ST < this.wrapST && !this.tit01STLock) {
	        this.tit01STLock = true;
	
	        // text
	        var opt = { $target: this.$tit01, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$tit01, 1.5, { y: 0, x: '-50%', z: 1, opacity: 1, ease: Power2.easeOut });
	
	        var opt = { $target: this.$text02, dur: 1.35, delay: 0.15, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text02, 1.35, { y: 0, x: '-50%', z: 1, opacity: 1, delay: 0.15, ease: Power2.easeOut });
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg01, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 340px 0px)',
	          ease: Expo.easeOut,
	          delay: 0.45
	        }).to(this.$bg01, 0.7, {
	          z: 1,
	          clip: 'rect(0px 520px 340px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img01, 1.6, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 540px 360px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5').to(this.$img02, 1.6, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 320px 220px 0px)',
	          ease: Expo.easeOut
	        }, '-=1.42');
	      };
	      if (this.tit02ST < this.wrapST && !this.tit02STLock) {
	        this.tit02STLock = true;
	
	        var opt = { $target: this.$tit02, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$tit02, 1.5, { y: 0, x: '-50%', z: 1, opacity: 1, ease: Power2.easeOut });
	
	        var opt = { $target: this.$text04, dur: 1.35, delay: 0.15, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text04, 1.35, { y: 0, x: '-50%', z: 1, opacity: 1, delay: 0.15, ease: Power2.easeOut });
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg02, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 520px 0px)',
	          ease: Expo.easeOut,
	          delay: 0.4
	        }).to(this.$bg02, 0.7, {
	          z: 1,
	          clip: 'rect(0px 280px 520px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img03, 1.35, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 360px 540px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5');
	      };
	      if (this.text03ST < this.wrapST && !this.text03STLock) {
	        this.text03STLock = true;
	
	        var opt = { $target: this.$text03, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text03, 1.5, { y: 0, z: 1, opacity: 1, ease: Power2.easeOut });
	      };
	      if (this.text05ST < this.wrapST && !this.text05STLock) {
	        this.text05STLock = true;
	
	        var opt = { $target: this.$text05, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text05, 1.5, { y: 0, z: 1, opacity: 1, ease: Power2.easeOut });
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$img04, 1.6, {
	          z: 5,
	          x: '-50%',
	          clip: 'rect(0px 360px 240px 0px)',
	          ease: Expo.easeOut,
	          delay: 0.4
	        });
	      };
	      if (this.imgWrap05ST < this.wrapST && !this.imgWrap05STLock) {
	        this.imgWrap05STLock = true;
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg03, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 500px 0px)',
	          ease: Expo.easeOut
	        }).to(this.$bg03, 0.7, {
	          z: 1,
	          clip: 'rect(0px 800px 500px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img05, 1.55, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 1010px 600px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5');
	      };
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.setup();
	
	      this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text02ST = this.$text02.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text03ST = this.$text03.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text04ST = this.$text04.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text05ST = this.$text05.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.imgWrap05ST = this.$imgWrap05.offset().top - gb.in.r.ws.h / 8 * 5;
	
	      if (gb.in.u.isResSP) {
	        this.reset();
	      };
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	
	      gb.in.s.STAmount = 0;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	
	      TweenMax.set(this.$wrapper, { y: 0 });
	      // target   
	      var self = this;
	      this.$target.each(function (i) {
	
	        TweenMax.set($(this), { y: 0, x: 0 });
	      });
	
	      var opt = { $target: this.$tit01, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit02, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text02, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text03, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text04, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text05, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	
	      TweenMax.set(this.$tit01, { y: 0, opacity: 1 });
	      TweenMax.set(this.$tit02, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text02, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text03, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text04, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text05, { y: 0, opacity: 1 });
	    }
	  }, {
	    key: 'resetInertia',
	    value: function resetInertia() {
	
	      this.$wrapper.removeClass('is-fixed');
	      TweenMax.set(this.$wrapper, { y: 0, x: 0 });
	      $('body').css('height', '100%');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.up.add('InertiaScroll', this.run.bind(this));
	      gb.in.r.add('InertiaScroll', this.onResize.bind(this));
	      // $(window).on('blur', this.onBlur.bind(this));
	
	    }
	  }]);
	
	  return InertiaScroll;
	}();
	
	exports.default = InertiaScroll;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  InertiaScroll sss
	//
	//--------------------------------------------------
	
	var _DomMotionLibs = __webpack_require__(70);
	
	var _DomMotionLibs2 = _interopRequireDefault(_DomMotionLibs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var InertiaScroll = function () {
	  function InertiaScroll() {
	    var _this = this;
	
	    _classCallCheck(this, InertiaScroll);
	
	    // this.$wrap = $('#wrapper');
	    // this.$inner = $('#inner');
	    this.$wrap = $('body');
	    this.$inner = $('#wrapper');
	    this.$wrapper = this.$inner.add($('#sideR, #bgWrap'));
	    this.$target = $('.inertia');
	    this.$header = $('.header');
	
	    this.wrapST = 0; // ?Ҫ??Υ?????`???
	    this.targetST = 0; // ?Ҫ??Υ?????`???
	    this.st = 0; // ?????????ν????ե??å?    
	    this.wheel = 0;
	
	    this.wrapEase = 0.18;
	    this.wrapTargetDisEase = 0.3;
	    this.targetEase = 0.05;
	
	    this.rateList = []; // ???줾??Ҫ??ΑT??α?????{????    
	    this.marginList = [];
	    this.dirList = [];
	
	    this.isWheel = true;
	    this.FRICTION = 0.6;
	
	    this.isLock = false;
	
	    setTimeout(function () {
	
	      if (gb.in.u.isResSP) return;
	
	      $(window).scrollTop(0);
	      TweenMax.set(_this.$wrapper, { y: 0 });
	      _this.setup();
	      _this.ready();
	      // this.onResize();
	      _this.setEvents();
	    }, 100);
	  }
	
	  _createClass(InertiaScroll, [{
	    key: 'setup',
	    value: function setup() {
	
	      // wrapҪ??Ȥ˜ʂ?    
	      this.$wrapper.addClass('is-fixed');
	      this.H = this.$inner.height();
	      this.$wrap.height(this.H);
	
	      var self = this;
	      this.$target.each(function () {
	
	        var rate = $(this).data('rate');
	        var margin = $(this).data('margin');
	        var dir = $(this).data('dir') || 1;
	        self.rateList.push(rate);
	        self.marginList.push(margin);
	        self.dirList.push(dir);
	      });
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // text
	      this.$tit01 = $('.block02 .blockInner .tit01');
	      this.$tit02 = $('.block02 .blockInner .tit02');
	      this.$text02 = $('.block02 .blockInner .text02');
	      this.$text03 = $('.block02 .blockInner .text03');
	      this.$text04 = $('.block02 .blockInner .text04');
	      this.$text05 = $('.block02 .blockInner .text05');
	      this.$imgWrap05 = $('.block02 .blockInner .imgWrap05');
	      this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h / 8 * 5;this.tit01STLock = false;
	      this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h / 8 * 5;this.tit02STLock = false;
	      this.text02ST = this.$text02.offset().top - gb.in.r.ws.h / 8 * 5;this.text02STLock = false;
	      this.text03ST = this.$text03.offset().top - gb.in.r.ws.h / 8 * 5;this.text03STLock = false;
	      this.text04ST = this.$text04.offset().top - gb.in.r.ws.h / 8 * 5;this.text04STLock = false;
	      this.text05ST = this.$text05.offset().top - gb.in.r.ws.h / 8 * 5;this.text05STLock = false;
	      this.imgWrap05ST = this.$imgWrap05.offset().top - gb.in.r.ws.h / 8 * 5;this.imgWrap05STLock = false;
	
	      this.libs = new _DomMotionLibs2.default();
	
	      var opt = { $target: this.$tit01, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit02, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text02, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text03, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text04, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text05, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	
	      TweenMax.set(this.$tit01, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$tit02, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text02, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text03, { y: 120, opacity: 0 });
	      TweenMax.set(this.$text04, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text05, { y: 120, opacity: 0 });
	
	      // img
	      this.$img01 = $('.imgWrap01 img');
	      this.$bg01 = $('.imgWrap01 .bg');
	      this.$img02 = $('.imgWrap02 img');
	      this.$img03 = $('.imgWrap03 img');
	      this.$bg02 = $('.imgWrap03 .bg');
	      this.$img04 = $('.imgWrap04 img');
	      this.$img05 = $('.imgWrap05 img');
	      this.$bg03 = $('.imgWrap05 .bg');
	
	      TweenMax.set(this.$img01, { x: -30, clip: 'rect(0px 0px 360px 0px)' });
	      TweenMax.set(this.$bg01, { x: 0, clip: 'rect(0px 10px 0px 0px)' });
	      TweenMax.set(this.$img02, { x: -15, clip: 'rect(0px 0px 240px 0px)' });
	      TweenMax.set(this.$img03, { x: -30, clip: 'rect(0px 0px 540px 0px)' }); // w 360 h 540
	      TweenMax.set(this.$bg02, { x: 0, clip: 'rect(0px 10px 0px 0px)' }); // w 280 h 520
	      TweenMax.set(this.$img04, { x: '-50%', clip: 'rect(0px 0px 240px 0px)' }); // w 360 h 240
	      TweenMax.set(this.$img05, { x: -30, clip: 'rect(0px 0px 620px 0px)' }); // w 1010 h 620
	      TweenMax.set(this.$bg03, { x: 0, clip: 'rect(0px 10px 0px 0px)' }); // w 800 h 500
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      if (gb.in.u.isResSP) return;
	      if (!this.isWheel) return;
	
	      if (gb.in.s.offset < -this.H + gb.in.r.ws.h) gb.in.s.offset = -this.H + gb.in.r.ws.h;
	      if (gb.in.s.offset > 0) gb.in.s.offset = 0;
	      this.wheel = gb.in.s.offset;
	
	      // log(this.wrapST);
	      // log(this.wheel);
	
	      // Ӌ?
	      // this.st = -this.wheel;
	      this.st = $(window).scrollTop();
	      this.wrapST += (this.st - this.wrapST) * this.wrapEase;
	      this.targetST += (this.st * this.wrapTargetDisEase - this.targetST) * this.targetEase;
	
	      // ??ӳ
	      // inner
	      TweenMax.set(this.$wrapper, { y: -this.wrapST });
	      // target   
	      var self = this;
	      this.$target.each(function (i) {
	
	        TweenMax.set($(this), { y: self.dirList[i] * (-self.targetST * Number(self.rateList[i]) / gb.in.Layout.size.scale.rate + self.marginList[i]) });
	      });
	
	      this.showContents();
	    }
	  }, {
	    key: 'showContents',
	    value: function showContents() {
	
	      if (this.tit01ST < this.wrapST && !this.tit01STLock) {
	        this.tit01STLock = true;
	
	        // text
	        var opt = { $target: this.$tit01, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$tit01, 1.5, { y: 0, x: '-50%', z: 1, opacity: 1, ease: Power2.easeOut });
	
	        var opt = { $target: this.$text02, dur: 1.35, delay: 0.15, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text02, 1.35, { y: 0, x: '-50%', z: 1, opacity: 1, delay: 0.15, ease: Power2.easeOut });
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg01, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 340px 0px)',
	          ease: Expo.easeOut,
	          delay: 0.45
	        }).to(this.$bg01, 0.7, {
	          z: 1,
	          clip: 'rect(0px 520px 340px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img01, 1.6, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 540px 360px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5').to(this.$img02, 1.6, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 360px 240px 0px)',
	          ease: Expo.easeOut
	        }, '-=1.42');
	      };
	      if (this.tit02ST < this.wrapST && !this.tit02STLock) {
	        this.tit02STLock = true;
	
	        var opt = { $target: this.$tit02, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$tit02, 1.5, { y: 0, x: '-50%', z: 1, opacity: 1, ease: Power2.easeOut });
	
	        var opt = { $target: this.$text04, dur: 1.35, delay: 0.15, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text04, 1.35, { y: 0, x: '-50%', z: 1, opacity: 1, delay: 0.15, ease: Power2.easeOut });
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg02, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 520px 0px)',
	          ease: Expo.easeOut,
	          delay: 0.4
	        }).to(this.$bg02, 0.7, {
	          z: 1,
	          clip: 'rect(0px 280px 520px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img03, 1.6, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 360px 540px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5');
	      };
	      if (this.text03ST < this.wrapST && !this.text03STLock) {
	        this.text03STLock = true;
	
	        var opt = { $target: this.$text03, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text03, 1.5, { y: 0, z: 1, opacity: 1, ease: Power2.easeOut });
	      };
	      if (this.text05ST < this.wrapST && !this.text05STLock) {
	        this.text05STLock = true;
	
	        var opt = { $target: this.$text05, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text05, 1.5, { y: 0, z: 1, opacity: 1, ease: Power2.easeOut });
	
	        var tl = new TimelineMax();
	
	        tl.to(this.$img04, 1.6, {
	          z: 5,
	          x: '-50%',
	          clip: 'rect(0px 360px 240px 0px)',
	          ease: Expo.easeOut,
	          delay: 0.55
	        });
	      };
	      if (this.imgWrap05ST < this.wrapST && !this.imgWrap05STLock) {
	        this.imgWrap05STLock = true;
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg03, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 500px 0px)',
	          ease: Expo.easeOut
	        }).to(this.$bg03, 0.7, {
	          z: 1,
	          clip: 'rect(0px 800px 500px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img05, 1.6, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 1010px 620px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5');
	      };
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.setup();
	
	      this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text02ST = this.$text02.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text03ST = this.$text03.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text04ST = this.$text04.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text05ST = this.$text05.offset().top - gb.in.r.ws.h / 8 * 5;
	
	      if (gb.in.u.isResSP) {
	        this.reset();
	      };
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	
	      gb.in.s.STAmount = 0;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	
	      TweenMax.set(this.$wrapper, { y: 0 });
	      // target   
	      var self = this;
	      this.$target.each(function (i) {
	
	        TweenMax.set($(this), { y: 0, x: 0 });
	      });
	
	      var opt = { $target: this.$tit01, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit02, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text02, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text03, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text04, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text05, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	
	      TweenMax.set(this.$tit01, { y: 0, opacity: 1 });
	      TweenMax.set(this.$tit02, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text02, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text03, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text04, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text05, { y: 0, opacity: 1 });
	    }
	  }, {
	    key: 'resetInertia',
	    value: function resetInertia() {
	
	      this.$wrapper.removeClass('is-fixed');
	      TweenMax.set(this.$wrapper, { y: 0, x: 0 });
	      $('body').css('height', '100%');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.up.add('InertiaScroll', this.run.bind(this));
	      gb.in.r.add('InertiaScroll', this.onResize.bind(this));
	      // $(window).on('blur', this.onBlur.bind(this));
	
	    }
	  }]);
	
	  return InertiaScroll;
	}();
	
	exports.default = InertiaScroll;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Display
	//
	//--------------------------------------------------
	
	
	var _Effects = __webpack_require__(21);
	
	var _Effects2 = _interopRequireDefault(_Effects);
	
	var _FullSizeByScaleInterviewIndex = __webpack_require__(58);
	
	var _FullSizeByScaleInterviewIndex2 = _interopRequireDefault(_FullSizeByScaleInterviewIndex);
	
	var _LayoutHistory = __webpack_require__(74);
	
	var _LayoutHistory2 = _interopRequireDefault(_LayoutHistory);
	
	var _Slider = __webpack_require__(75);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _PageScroll = __webpack_require__(64);
	
	var _PageScroll2 = _interopRequireDefault(_PageScroll);
	
	var _HoverEffectSNSSPFooter = __webpack_require__(36);
	
	var _HoverEffectSNSSPFooter2 = _interopRequireDefault(_HoverEffectSNSSPFooter);
	
	var _HoverEffectHistoryAnchor = __webpack_require__(78);
	
	var _HoverEffectHistoryAnchor2 = _interopRequireDefault(_HoverEffectHistoryAnchor);
	
	var _HoverEffectPageTop = __webpack_require__(67);
	
	var _HoverEffectPageTop2 = _interopRequireDefault(_HoverEffectPageTop);
	
	var _YearMgr = __webpack_require__(79);
	
	var _YearMgr2 = _interopRequireDefault(_YearMgr);
	
	var _HeaderColor = __webpack_require__(68);
	
	var _HeaderColor2 = _interopRequireDefault(_HeaderColor);
	
	var _InertiaScroll = __webpack_require__(82);
	
	var _InertiaScroll2 = _interopRequireDefault(_InertiaScroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DisplayTop = function () {
	  function DisplayTop() {
	    _classCallCheck(this, DisplayTop);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(DisplayTop, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // ループスタート
	      gb.in.up.loop();
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //  UI / Layout
	      // ------------------------------------------------------------
	      // 高さを合わせた後に、レイアウト
	      _LayoutHistory2.default.run();
	
	      new _Slider2.default();
	
	      gb.in.headerColor = new _HeaderColor2.default();
	
	      new _YearMgr2.default();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	
	      gb.in.snsSPHoverEf = new _HoverEffectSNSSPFooter2.default($('.snsWrap'));
	      new _HoverEffectPageTop2.default($('.pageTop'));
	      new _HoverEffectHistoryAnchor2.default($('.block01 .textWrap02 .item'));
	
	      gb.in.inertia04 = new _InertiaScroll2.default();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'run',
	    value: function run() {
	
	      // ------------------------------------------------------------
	      //  UI / Layout
	      // ------------------------------------------------------------
	
	      // 高さを合わせた後に、レイアウト
	      _LayoutHistory2.default.run();
	
	      new _Slider2.default();
	
	      gb.in.headerColor = new _HeaderColor2.default();
	
	      new _YearMgr2.default();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	      gb.in.snsSPHoverEf = new _HoverEffectSNSSPFooter2.default($('.snsWrap'));
	      new _HoverEffectPageTop2.default($('.pageTop'));
	      new _HoverEffectHistoryAnchor2.default($('.block01 .textWrap02 .item'));
	
	      gb.in.inertia04 = new _InertiaScroll2.default();
	    }
	  }]);
	
	  return DisplayTop;
	}();
	
	exports.default = DisplayTop;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Layout
	//
	//--------------------------------------------------
	
	var _SizeInterviewDetail = __webpack_require__(62);
	
	var _SizeInterviewDetail2 = _interopRequireDefault(_SizeInterviewDetail);
	
	var _Position = __webpack_require__(38);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Layout = function () {
	  function Layout() {
	    _classCallCheck(this, Layout);
	
	    this.setEvents();
	  }
	
	  _createClass(Layout, [{
	    key: 'setup',
	    value: function setup() {
	
	      // メインビジュアルの高さを合わせる
	      var w = function w() {
	        // var rate = gb.in.Layout.size.scale.rate;
	        var rate = $(window).width() / gb.in.conf.defW;
	        if (rate > 1) rate = 1;
	        var h = gb.in.r.ws.h / rate;
	        // var h = gb.in.r.ws.h;
	        $('.section04 .block01').css('padding-top', h);
	
	        if (gb.in.u.isResSP) {
	          $('.section04 .block01').css('padding-top', 0);
	        };
	      };
	      w();
	      gb.in.r.add('w', w);
	
	      this.size = new _SizeInterviewDetail2.default(); // adjust size
	      this.position = new _Position2.default(); // adjust position
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      this.setup();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'run',
	    value: function run() {
	
	      // メインビジュアルの高さを合わせる
	      var w = function w() {
	        // var rate = gb.in.Layout.size.scale.rate;
	        var rate = $(window).width() / gb.in.conf.defW;
	        if (rate > 1) rate = 1;
	        var h = gb.in.r.ws.h / rate;
	        // var h = gb.in.r.ws.h;
	        $('.section04 .block01').css('padding-top', h);
	
	        if (gb.in.u.isResSP) {
	          $('.section04 .block01').css('padding-top', 0);
	        };
	      };
	      w();
	      gb.in.r.add('w', w);
	
	      this.size = new _SizeInterviewDetail2.default(); // adjust size
	      this.position = new _Position2.default(); // adjust position
	    }
	  }]);
	
	  return Layout;
	}();
	
	exports.default = Layout;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Slider
	//
	//--------------------------------------------------
	
	var _SwipeForSlider = __webpack_require__(76);
	
	var _SwipeForSlider2 = _interopRequireDefault(_SwipeForSlider);
	
	var _HoverEffectSliderArrow = __webpack_require__(77);
	
	var _HoverEffectSliderArrow2 = _interopRequireDefault(_HoverEffectSliderArrow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Slider = function () {
	  function Slider($target) {
	    _classCallCheck(this, Slider);
	
	    // dom
	    this.$img = $('.slider img');
	
	    this.$arrowL = $('.sliderWrap .arrowL');
	    this.$arrowR = $('.sliderWrap .arrowR');
	
	    this.$text = $('.product .details .detail');
	    this.$price = $('.product .details .price');
	    this.$indicator = $('.product .indicator .item');
	
	    this.current = 0;
	    this.old = null;
	    this.next = 1;
	    this.prev = null;
	    this.len = this.$img.length;
	
	    this.isAutoStop = false;
	
	    this.textList = ['ライトグレーとペールピンクの組み合わせがフェミニン。<br class="pc">交換可能なシングルストラップ付き。<br>クオーツ式ムーブメント、3気圧防水（30m）、<br class="pc">スイス製。<br class="sp">「ティファニー イーストウエスト ミニ」<br class="pc">ステンレススチール（37×22mm）', 'ブラウンにローズゴールドの組み合わせがトラッド。<br class="pc">交換可能なシングルストラップ付き。<br>クオーツ式ムーブメント、3気圧防水（30m）、<br class="pc">スイス製。<br class="sp">「ティファニー イーストウエスト ミニ」<br class="pc">18KRG×レザー（37×22mm）', 'クリーンな雰囲気が漂う、潔いブルーの組み合わせ。<br class="pc">交換可能なシングルストラップ付き。<br>クオーツ式ムーブメント、３気圧防水（30m），<br class="pc">スイス製。<br class="sp">「ティファニー イーストウエスト ミニ」<br class="pc">ステンレススチール（37×22mm）', '黒と白のシックな配色に、ゴールドのインデックスと<br class="pc">ブルーの針がアクセント。<br class="pc">交換可能なシングルストラップ付き。<br>クオーツ式ムーブメント、3気圧防水（30m）、<br class="pc">スイス製。<br class="sp">「ティファニー イーストウエスト ミニ」<br class="pc">ステンレススチール（37×22mm）', 'グレーのストラップにティファニーブルーのクールな配色。<br class="pc">交換可能なシングルストラップ付き。<br>クオーツ式ムーブメント、3気圧防水（30m）、<br class="pc">スイス製。<br class="sp">「ティファニー イーストウエスト ミニ」<br class="pc">ステンレススチール（37×22mm）'];
	    this.priceList = ['￥469,800', '￥1,020,600', '￥469,800', '￥469,800', '￥469,800'];
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Slider, [{
	    key: 'setup',
	    value: function setup() {
	
	      // this.switchDetails();
	
	      this.s = new _SwipeForSlider2.default();
	      this.s.onNext = this.right.bind(this);
	      this.s.onPrev = this.left.bind(this);
	
	      new _HoverEffectSliderArrow2.default($('.arrowWrap .arrowR.pc'), 'right');
	      this.al = new _HoverEffectSliderArrow2.default($('.arrowWrap .arrowL.pc'), 'left');
	      this.al.onEnter($('.arrowWrap .arrowL.pc'));
	      this.al.onLeave($('.arrowWrap .arrowL.pc'));
	    }
	
	    // 右へ
	
	  }, {
	    key: 'right',
	    value: function right() {
	
	      // if (this.current == this.len - 1) return;
	
	      // img next
	      TweenMax.set(this.$img.eq(this.next), { x: 40 });
	      TweenMax.to(this.$img.eq(this.next), 0.6, { x: 0, opacity: 1 });
	
	      // cur
	      TweenMax.to(this.$img.eq(this.current), 0.6, { x: -40, opacity: 0 });
	
	      // currentの計算
	      this.calculateOrder('right');
	
	      // textの変更
	      this.switchDetails();
	
	      // indicatorの変更
	      this.switchIndicator(this.prev);
	    }
	
	    // 左へ
	
	  }, {
	    key: 'left',
	    value: function left() {
	
	      // if (this.current == 0) return;
	
	      // next
	      TweenMax.set(this.$img.eq(this.prev), { x: -40 });
	      TweenMax.to(this.$img.eq(this.prev), 0.6, { x: 0, opacity: 1 });
	
	      TweenMax.to(this.$img.eq(this.current), 0.6, { x: 40, opacity: 0 });
	
	      // currentの計算
	      this.calculateOrder('left');
	
	      // textの変更
	      this.switchDetails();
	
	      // indicatorの変更
	      this.switchIndicator(this.next);
	    }
	
	    // 右へ
	
	  }, {
	    key: 'rightByIndicator',
	    value: function rightByIndicator() {
	
	      // if (this.current == this.len - 1) return;
	
	      // img next
	      TweenMax.set(this.$img.eq(this.next), { x: 40 });
	      TweenMax.to(this.$img.eq(this.next), 0.6, { x: 0, opacity: 1 });
	
	      // cur
	      TweenMax.to(this.$img.eq(this.old), 0.6, { x: -40, opacity: 0 });
	
	      // currentの計算
	      this.calculateOrder('right');
	
	      // textの変更
	      this.switchDetails();
	
	      // indicatorの変更
	      this.switchIndicator(this.old);
	    }
	
	    // 左へ
	
	  }, {
	    key: 'leftByIndicator',
	    value: function leftByIndicator() {
	
	      // if (this.current == 0) return;
	
	      // next
	      TweenMax.set(this.$img.eq(this.prev), { x: -40 });
	      TweenMax.to(this.$img.eq(this.prev), 0.6, { x: 0, opacity: 1 });
	
	      TweenMax.to(this.$img.eq(this.old), 0.6, { x: 40, opacity: 0 });
	
	      // currentの計算
	      this.calculateOrder('left');
	
	      // textの変更
	      this.switchDetails();
	
	      // indicatorの変更
	      this.switchIndicator(this.old);
	    }
	  }, {
	    key: 'swicthArrow',
	    value: function swicthArrow() {
	
	      // 右端
	      if (this.current == this.len - 1) {
	
	        var src = this.$arrowR.attr('src');
	        src = gb.in.u.strReplace(src, '_on', '_off');
	        this.$arrowR.attr('src', src);
	
	        // 左端
	      } else if (this.current == 0) {
	
	        var src = this.$arrowL.attr('src');
	        src = gb.in.u.strReplace(src, '_on', '_off');
	        this.$arrowL.attr('src', src);
	      } else {
	
	        var src = this.$arrowL.attr('src');
	        src = gb.in.u.strReplace(src, '_off', '_on');
	        this.$arrowL.attr('src', src);
	
	        var src = this.$arrowR.attr('src');
	        src = gb.in.u.strReplace(src, '_off', '_on');
	        this.$arrowR.attr('src', src);
	      }
	    }
	  }, {
	    key: 'switchDetails',
	    value: function switchDetails() {
	
	      var t = this.textList[this.current];
	      var p = this.priceList[this.current];
	
	      this.$text.html(t);
	      this.$price.text(p);
	    }
	  }, {
	    key: 'switchIndicator',
	    value: function switchIndicator(prev) {
	
	      if (this.tl) this.tl.seek(this.tl.duration(), false);
	      if (this.tl02) this.tl02.seek(this.tl02.duration(), false);
	
	      this.tl = new TimelineMax();
	      this.tl02 = new TimelineMax();
	
	      this.tl.to(this.$indicator.eq(prev).find('span'), 0.4, {
	        height: 2,
	        'backgroundColor': '#ccc',
	        ease: Power4.easeOut
	      });
	
	      this.tl02.to(this.$indicator.eq(this.current).find('span'), 0.4, {
	        height: 5,
	        'backgroundColor': '#81d8d0',
	        ease: Power4.easeOut
	      });
	
	      // this.$indicator
	      //   .removeClass('isActive')
	      //   .eq(this.current).addClass('isActive');
	
	    }
	  }, {
	    key: 'calculateOrder',
	    value: function calculateOrder(dir) {
	
	      // 端で止める
	      // if (dir=='right') {
	
	      //   this.current++;
	      //   if (this.current>this.len-1) this.current=this.len-1;
	      //   this.next = this.current+1;
	      //   this.prev = this.current-1;
	
	      // } else {
	
	      //   this.current--;
	      //   if (this.current<0) this.current=0;  
	      //   this.next = this.current+1;
	      //   this.prev = this.current-1;
	
	      // }
	
	      // ループ
	      if (dir == 'right') {
	
	        this.current++;
	
	        if (this.current > this.len - 1) {
	
	          this.current = 0;
	          this.next = this.current + 1;
	          this.prev = this.len - 1;
	        } else {
	
	          this.next = this.current + 1;
	          this.prev = this.current - 1;
	        }
	
	        if (this.current == this.len - 1) {
	
	          this.next = 0;
	          this.prev = this.current - 1;
	        }
	      } else {
	
	        this.current--;
	        if (this.current < 0) {
	
	          this.current = this.len - 1;
	          this.next = 0;
	          this.prev = this.current - 1;
	        } else {
	
	          this.next = this.current + 1;
	          this.prev = this.current - 1;
	        }
	      }
	
	      // this.old = this.current;
	    }
	  }, {
	    key: 'autoSwicth',
	    value: function autoSwicth() {
	      var _this = this;
	
	      if (!this.isAutoStop) this.right();
	
	      setTimeout(function () {
	
	        _this.autoSwicth();
	      }, 5000);
	    }
	  }, {
	    key: 'onIndicator',
	    value: function onIndicator(that) {
	
	      var num = this.$indicator.index(that);
	
	      if (this.current < num) {
	
	        this.old = this.current;
	        this.current = num - 2;
	        this.calculateOrder('right');
	
	        this.rightByIndicator();
	      }
	
	      if (this.current > num) {
	
	        this.old = this.current;
	        this.current = num + 2;
	        this.calculateOrder('left');
	
	        this.leftByIndicator();
	      }
	    }
	  }, {
	    key: 'onEnter',
	    value: function onEnter() {
	
	      this.isAutoStop = true;
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave() {
	
	      this.isAutoStop = false;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$arrowL.on('click', this.left.bind(this));
	      this.$arrowR.on('click', this.right.bind(this));
	      $('.arrowWrap').on('mouseenter', this.onEnter.bind(this));
	      $('.arrowWrap').on('mouseleave', this.onLeave.bind(this));
	      this.$indicator.on('click', function () {
	        self.onIndicator.call(self, this);
	      });
	      this.autoSwicth();
	    }
	  }]);
	
	  return Slider;
	}();
	
	exports.default = Slider;

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  SwipeForSlider sss
	//
	// ------------------------------------------------------------
	
	var SwipeForSlider = function () {
	  function SwipeForSlider() {
	    _classCallCheck(this, SwipeForSlider);
	
	    this.$wrap = $('.sliderWrap');
	
	    // ---------------
	    //  variable
	    // ---------------
	
	    // position
	    this.sX = 0;this.mX = 0;this.eX = 0; //startX,moveX,endX
	    this.dis = 0;this.minDis = 50;
	
	    // time
	    this.sT = 0;this.eT = 0;this.minT = 300; //startTime,ellapsedTime,
	
	    this.onNext = function () {};
	    this.onPrev = function () {};
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(SwipeForSlider, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onTouchStart',
	    value: function onTouchStart(e) {
	
	      // targetX
	      this.sX = e.originalEvent.changedTouches[0].pageX;
	    }
	  }, {
	    key: 'onTouchMove',
	    value: function onTouchMove(e) {
	
	      this.dis = this.sX - e.originalEvent.changedTouches[0].pageX;
	
	      if (this.minDis < Math.abs(this.dis)) gb.in.u.setPrevent();
	    }
	  }, {
	    key: 'onTouchEnd',
	    value: function onTouchEnd(e) {
	
	      gb.in.u.removePrevent();
	
	      this.dis = this.sX - e.originalEvent.changedTouches[0].pageX;
	
	      if (this.minDis > Math.abs(this.dis)) return;
	
	      if (this.dis > 0) {
	
	        this.onNext();
	      } else {
	
	        this.onPrev();
	      }
	
	      // 移動量を初期化
	      this.dis = 0;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      var self = this;
	
	      this.$wrap.on('touchstart.Swipe', function (e) {
	        _this.onTouchStart(e);
	      });
	      this.$wrap.on('touchmove.Swipe', function (e) {
	        _this.onTouchMove(e);
	      });
	      this.$wrap.on('touchend.Swipe', function (e) {
	        _this.onTouchEnd(e);
	      });
	    }
	  }]);
	
	  return SwipeForSlider;
	}();
	
	exports.default = SwipeForSlider;

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectSliderArrow
	//
	//--------------------------------------------------
	
	var HoverEffectSliderArrow = function () {
	  function HoverEffectSliderArrow($target, str) {
	    _classCallCheck(this, HoverEffectSliderArrow);
	
	    this.$target = $target;
	
	    // motion
	    this.tl = new TimelineMax();
	    this.str = str;
	
	    this.setup();
	    // this.autoArrow();
	
	    this.isHover = false;
	
	    // スマホのときは処理しない
	    if (gb.in.u.isPC) this.setEvents();
	  }
	
	  _createClass(HoverEffectSliderArrow, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      this.isHover = true;
	
	      if (this.tl02) this.tl02.kill();
	      this.tl01 = new TimelineMax();
	
	      if (this.str == 'right') {
	
	        this.tl01
	        // 矢印を下に下げる
	        .to($(that), 0.4, {
	          scaleX: 0.78,
	          x: 8,
	          z: 1,
	          'transform-origin': '100% 50%',
	          ease: Power4.easeOut
	        });
	      } else {
	
	        this.tl01
	        // 矢印を下に下げる
	        .to($(that), 0.4, {
	          scaleX: 0.78,
	          x: -8,
	          z: 1,
	          rotationZ: 180,
	          'transform-origin': '100% 50%',
	          ease: Power4.easeOut
	        });
	      }
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      this.isHover = false;
	
	      if (this.tl01) this.tl01.kill();
	      this.tl02 = new TimelineMax();
	
	      if (this.str == 'right') {
	
	        this.tl02
	        // 矢印を下に下げる
	        .to($(that), 0.4, {
	          scaleX: 1,
	          x: 0,
	          z: 1,
	          'transform-origin': '100% 50%',
	          ease: Power4.easeOut
	        });
	      } else {
	
	        this.tl02
	        // 矢印を下に下げる
	        .to($(that), 0.4, {
	          scaleX: 1,
	          x: 0,
	          z: 1,
	          rotationZ: 180,
	          'transform-origin': '100% 50%',
	          ease: Power4.easeOut
	        });
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).on('mouseenter', function (e) {
	          self.onEnter.call(self, this);
	        });
	        $(this).on('mouseleave', function (e) {
	          self.onLeave.call(self, this);
	        });
	      });
	    }
	  }]);
	
	  return HoverEffectSliderArrow;
	}();
	
	exports.default = HoverEffectSliderArrow;

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectHistoryEffect
	//
	//--------------------------------------------------
	
	var HoverEffectHistoryEffect = function () {
	  function HoverEffectHistoryEffect($target) {
	    _classCallCheck(this, HoverEffectHistoryEffect);
	
	    this.$target = $target;
	
	    // motion
	    this.tl = new TimelineMax();
	
	    // スマホのときは処理しない
	    if (gb.in.u.isPC) this.setEvents();
	  }
	
	  _createClass(HoverEffectHistoryEffect, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      if (gb.in.u.isResSP) return;
	
	      $(that).addClass('isHover');
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      if (gb.in.u.isResSP) return;
	
	      $(that).removeClass('isHover');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).on('mouseenter', function (e) {
	          self.onEnter.call(self, this);
	        });
	        $(this).on('mouseleave', function (e) {
	          self.onLeave.call(self, this);
	        });
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).off('mouseenter');
	        $(this).off('mouseleave');
	      });
	    }
	  }]);
	
	  return HoverEffectHistoryEffect;
	}();
	
	exports.default = HoverEffectHistoryEffect;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  YearMgr
	//
	//--------------------------------------------------
	
	var _Year = __webpack_require__(80);
	
	var _Year2 = _interopRequireDefault(_Year);
	
	var _YearBig = __webpack_require__(81);
	
	var _YearBig2 = _interopRequireDefault(_YearBig);
	
	var _Move2D = __webpack_require__(56);
	
	var _Move2D2 = _interopRequireDefault(_Move2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var YearMgr = function () {
	  function YearMgr() {
	    _classCallCheck(this, YearMgr);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(YearMgr, [{
	    key: 'setup',
	    value: function setup() {
	
	      // スクロールトップに
	      setTimeout(function () {
	
	        $(window).scrollTop(0);
	
	        // new Year($('.year01'),1200,2200,2016,1940,'left')
	        // new Year($('.year02'),2500,0,2016,1980,'right')
	        // new Year($('.year03'),4987,0,1940,2016,'left')
	
	        if (gb.in.u.isResSP) new _YearBig2.default($('.year04 span'), 2740 * gb.in.Layout.size.scale.rate, 0, 1914, 2016);else new _YearBig2.default($('.year04 span'), 3100 * gb.in.Layout.size.scale.rate, 0, 1914, 2016);
	
	        // Move2D
	        gb.in.move2DList = [];
	        $('.move2D').each(function (index, el) {
	
	          gb.in.move2DList.push(new _Move2D2.default($(this)));
	        });
	      }, 500);
	
	      // big yearの位置調整
	      var yearW = function yearW() {
	
	        var w = $('.year04 span').width() * gb.in.Layout.size.scale.rate;
	        $('.year04').css('padding-left', (gb.in.r.ws.w - w) / 2 / gb.in.Layout.size.scale.rate);
	      };
	      yearW();
	      gb.in.r.add('yearW', yearW);
	    }
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return YearMgr;
	}();
	
	exports.default = YearMgr;

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Year
	//
	//--------------------------------------------------
	
	var Year = function () {
	  function Year($target, showST, hideST, startDate, targetDate, right) {
	    _classCallCheck(this, Year);
	
	    this.$target = $target;
	
	    this.showST = showST; //1200
	    this.hideST = hideST; //2200
	
	    this.isShow = false;
	    this.isHide = false;
	
	    this.right = right;
	    this.preST = 0;
	
	    this.cnt = 0;
	
	    this.startDate = startDate; //2016
	    this.targetDate = targetDate; //1940
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Year, [{
	    key: 'setup',
	    value: function setup() {
	
	      if (this.right == 'right') {
	
	        TweenMax.set(this.$target, { opacity: 0, x: 200, y: 100 });
	      } else {
	
	        TweenMax.set(this.$target, { opacity: 0, x: -200, y: 100 });
	      }
	    }
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	      var _this = this;
	
	      // log('st',gb.in.s.st);;
	
	      // log(gb.in.s.sb);
	
	      if (gb.in.s.st > this.showST && gb.in.s.st < this.hideST) {
	
	        if (gb.in.s.st % 100 == 0) {
	          this.cnt++;
	        };
	
	        // log(gb.in.s.st % 100);
	        // log(this.cnt);      
	
	      };
	
	      if (gb.in.s.sb > this.showST && !this.isShow) {
	        this.isShow = true;
	
	        log('show!!!');
	
	        var tl = new TimelineMax();
	
	        tl
	        // 横からふわっと
	        .add(function () {
	
	          var tl = new TimelineMax();
	
	          tl.to(_this.$target, 3.0, {
	            opacity: 1,
	            x: 0,
	            y: 0,
	            ease: Power4.easeOut
	          });
	        })
	        // count up
	        .add(function () {
	
	          // TweenMax.to(this, 3, {
	          //   startDate: this.targetDate,
	          //   ease: Power2.easeOut,
	          //   onUpdate: ()=>{
	
	          //     var d = Math.floor(this.startDate)
	          //     this.$target.text(d);
	
	          //   }
	          // });
	
	
	        });
	      };
	
	      // // hide
	      // if (gb.in.s.sb > this.hideST && !this.isHide) {
	      //   this.isHide = true;
	
	      //   log('hide!!!');
	
	      //   // var tl = new TimelineMax();
	
	      //   // tl
	      //   //   // 横からふわっと消える
	      //   //   .add(()=>{
	
	      //   //     var tl = new TimelineMax();
	
	      //   //     tl.to(this.$target, 3.0, {
	      //   //       opacity: 0,
	      //   //       y: -100,
	      //   //       x: -200,
	      //   //       ease: Power2.easeOut
	      //   //     });
	
	      //   //   })
	
	      // };
	
	      this.preST = gb.in.s.st;
	      // log('pre',this.preST);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.s.add('Countup', this.onScroll.bind(this));
	    }
	  }]);
	
	  return Year;
	}();
	
	exports.default = Year;

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  YearBig
	//
	//--------------------------------------------------
	
	var YearBig = function () {
	  function YearBig($target, showST, hideST, startDate, targetDate, right) {
	    _classCallCheck(this, YearBig);
	
	    this.$target = $target;
	
	    this.showST = showST; //1200
	    this.hideST = hideST; //2200
	
	    this.isShow = false;
	    this.isHide = false;
	
	    this.right = right;
	
	    this.startDate = startDate; //2016
	    this.targetDate = targetDate; //1940
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(YearBig, [{
	    key: 'setup',
	    value: function setup() {
	
	      // TweenMax.set(this.$target, {opacity: 0,x: -200,y: 100});
	
	    }
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	      var _this = this;
	
	      // log(gb.in.s.sb);
	      // log(gb.in.s.st);
	
	      if (gb.in.u.isResSP) {
	
	        if (gb.in.s.sb > this.showST && !this.isShow) {
	          this.isShow = true;
	
	          var tl = new TimelineMax();
	
	          tl.add(function () {
	
	            var tl = new TimelineMax();
	
	            tl.to($('.yearMid'), 3.0, {
	              opacity: 1,
	              ease: Power4.easeOut
	            });
	          }, '+=0.0')
	          // },'+=1.5')
	          // count up
	          .add(function () {
	
	            TweenMax.to(_this, 3, {
	              startDate: _this.targetDate,
	              ease: Power2.easeOut,
	              onUpdate: function onUpdate() {
	
	                var d = Math.floor(_this.startDate);
	                _this.$target.text(d);
	              }
	            });
	          }, '+=0.0');
	        };
	      } else {
	
	        log(gb.in.s.st, this.showST);
	        if (gb.in.s.st > this.showST && !this.isShow) {
	          this.isShow = true;
	
	          var tl = new TimelineMax();
	
	          tl
	          // スクロール禁止に
	          // 所定位置に
	          .add(function () {
	
	            // gb.in.u.disableScroll();
	
	            // var $target = $('.year04');
	            // var adjust = 67 / gb.in.Layout.size.scale.rate;
	            // var pos = $target.offset().top + ($target.height()/2) / gb.in.Layout.size.scale.rate - gb.in.r.ws.h/2 / gb.in.Layout.size.scale.rate + adjust;
	            // TweenMax.to($('body,html'), 1.5, {scrollTop: pos,ease: Expo.easeOut});
	
	          })
	          // 横からふわっと
	          .add(function () {
	
	            var tl = new TimelineMax();
	
	            tl.to($('.yearMid'), 3.0, {
	              opacity: 1,
	              ease: Power4.easeOut
	            });
	          }, '+=0.0')
	          // },'+=1.5')
	          // count up
	          .add(function () {
	
	            TweenMax.to(_this, 3, {
	              startDate: _this.targetDate,
	              ease: Power2.easeOut,
	              onUpdate: function onUpdate() {
	
	                var d = Math.floor(_this.startDate);
	                _this.$target.text(d);
	              }
	            });
	          }, '+=0.0');
	          // },'+=0.5')
	          // 下コンテンツに
	          // 下コンテンツ表示
	          // .add(()=>{
	
	          //   // スクロール可能に
	          //   gb.in.u.enableScroll();
	
	          //   // スクロール
	          //   var $target = $('#now');
	          //   var pos = $target.offset().top;
	          //   pos = pos - 100;
	          //   TweenMax.to($('body,html'), 1.5, {scrollTop: pos,ease: Expo.easeOut});
	
	          //   // 表示
	          //   tl.to($('.block02 .blockInner02,.block02 .product, .block03, .block04'), 0.7, {
	          //     opacity: 1,
	          //     ease: Power3.easeOut
	          //   });
	
	          // },'+=3.5')
	        };
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.s.add('YearBig', this.onScroll.bind(this));
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      gb.in.s.remove('YearBig');
	    }
	  }]);
	
	  return YearBig;
	}();
	
	exports.default = YearBig;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  InertiaScroll sss
	//
	//--------------------------------------------------
	
	var _DomMotionLibs = __webpack_require__(70);
	
	var _DomMotionLibs2 = _interopRequireDefault(_DomMotionLibs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var InertiaScroll = function () {
	  function InertiaScroll() {
	    var _this = this;
	
	    _classCallCheck(this, InertiaScroll);
	
	    // this.$wrap = $('#wrapper');
	    // this.$inner = $('#inner');
	    this.$wrap = $('body');
	    this.$inner = $('#wrapper');
	    this.$wrapInner = $('#inner');
	    this.$wrapper = this.$inner.add($('#sideR, #sideL, #bgWrap, .frame'));
	    this.$target = $('.inertia');
	    this.$header = $('.header');
	
	    this.$year01 = $('.year01');
	    this.$year03 = $('.year03');
	    this.isYear01 = true;
	    this.isYear03 = true;
	
	    this.wrapST = 0; // ?Ҫ??Υ?????`???
	    this.targetST = 0; // ?Ҫ??Υ?????`???
	    this.st = 0; // ?????????ν????ե??å?    
	    this.wheel = 0;
	
	    this.wrapEase = 0.18;
	    this.wrapTargetDisEase = 0.3;
	    this.targetEase = 0.05;
	
	    this.rateList = []; // ???줾??Ҫ??ΑT??α?????{????    
	    this.marginList = [];
	    this.dirList = [];
	
	    this.isWheel = true;
	    this.FRICTION = 0.6;
	
	    this.isLock = false;
	
	    setTimeout(function () {
	
	      if (gb.in.u.isResSP) return;
	
	      $(window).scrollTop(0);
	      TweenMax.set(_this.$wrapper, { y: 0 });
	      _this.setup();
	      _this.ready();
	      // this.onResize();
	      _this.setEvents();
	    }, 100);
	  }
	
	  _createClass(InertiaScroll, [{
	    key: 'setup',
	    value: function setup() {
	
	      // wrapҪ??Ȥ˜ʂ?    
	      this.$wrapper.addClass('is-fixed');
	      this.H = this.$inner.height();
	      this.$wrap.height(this.H);
	
	      var self = this;
	      this.$target.each(function () {
	
	        var rate = $(this).data('rate');
	        var margin = $(this).data('margin');
	        var dir = $(this).data('dir') || 1;
	        self.rateList.push(rate);
	        self.marginList.push(margin);
	        self.dirList.push(dir);
	      });
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // text
	      this.$tit01 = $('.block02 .blockInner .tit01 span');
	      this.$tit02 = $('.block02 .blockInner .tit02');
	      this.$tit03 = $('.block02 .blockInner .tit03 span');
	      this.$tit04 = $('.block02 .blockInner .tit04');
	      this.$text01 = $('.block02 .blockInner .textWrap01');
	      this.$text02 = $('.block02 .blockInner .textWrap02');
	      this.$text03 = $('.block02 .blockInner .text05');
	      this.$text04 = $('.block02 .blockInner .textWrap04');
	      this.$imgWrap03 = $('.block02 .blockInner .imgWrap03');
	      this.$imgWrap04 = $('.block02 .blockInner .imgWrap04');
	      this.$imgWrap05 = $('.block02 .blockInner .imgWrap05');
	      this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h / 8 * 5;this.tit01STLock = false;
	      this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h / 8 * 5;this.tit02STLock = false;
	      this.tit03ST = this.$tit03.offset().top - gb.in.r.ws.h / 8 * 5;this.tit03STLock = false;
	      this.text01ST = this.$text01.offset().top - gb.in.r.ws.h / 8 * 5;this.text01STLock = false;
	      this.text02ST = this.$text02.offset().top - gb.in.r.ws.h / 8 * 5;this.text02STLock = false;
	      this.text03ST = this.$text03.offset().top - gb.in.r.ws.h / 8 * 5;this.text03STLock = false;
	      // this.text04ST = this.$text04.offset().top - gb.in.r.ws.h/8*5; this.text04STLock = false;
	      this.imgWrap03ST = this.$imgWrap03.offset().top - gb.in.r.ws.h / 8 * 5;this.imgWrap03STLock = false;
	      this.imgWrap04ST = this.$imgWrap04.offset().top - gb.in.r.ws.h / 8 * 5;this.imgWrap04STLock = false;
	      // this.imgWrap05ST = this.$imgWrap05.offset().top - gb.in.r.ws.h/8*5; this.imgWrap05STLock = false;
	
	      this.libs = new _DomMotionLibs2.default();
	
	      var opt = { $target: this.$tit01, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit02, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit03, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit04, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text01, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text02, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text03, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text04, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	
	      TweenMax.set(this.$tit01, { x: -120, opacity: 0 });
	      TweenMax.set(this.$tit02, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$tit03, { x: -120, opacity: 0 });
	      TweenMax.set(this.$tit04, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text01, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text02, { y: 120, x: '-50%', opacity: 0 });
	      TweenMax.set(this.$text03, { y: 120, opacity: 0 });
	      TweenMax.set(this.$text04, { y: 120, opacity: 0 });
	
	      // img
	      this.$img01 = $('.imgWrap01 .imgHWrap');
	      this.$bg01 = $('.imgWrap01 .bg');
	      this.$img02 = $('.imgWrap02 img');
	      this.$img03 = $('.imgWrap03 img');
	      this.$bg02 = $('.imgWrap03 .bg');
	      this.$img04 = $('.imgWrap04 img');
	      this.$bg03 = $('.imgWrap04 .bg');
	      this.$img05 = $('.imgWrap05 img');
	      this.$bg04 = $('.imgWrap05 .bg');
	
	      TweenMax.set(this.$img01, { x: -30, clip: 'rect(0px 0px 600px 0px)' }); // w 400 h 600
	      TweenMax.set(this.$bg01, { x: 0, clip: 'rect(0px 10px 0px 0px)' }); // w 400 h 540
	      TweenMax.set(this.$img02, { clip: 'rect(0px 0px 300px 0px)' }); // w 450 h 300
	      TweenMax.set(this.$img03, { x: -30, clip: 'rect(0px 0px 260px 0px)' }); // w 390 h 260
	      TweenMax.set(this.$bg02, { x: 0, clip: 'rect(0px 10px 0px 0px)' }); // w 390 h 260
	      TweenMax.set(this.$img04, { clip: 'rect(0px 0px 480px 0px)' }); // w 320 h 480
	      TweenMax.set(this.$bg03, { x: 0, clip: 'rect(0px 10px 0px 0px)' }); // w 250 h 460
	      TweenMax.set(this.$img05, { x: -30, clip: 'rect(0px 0px 630px 0px)' }); // w 420 h 630
	      TweenMax.set(this.$bg04, { x: 0, clip: 'rect(0px 10px 0px 0px)' }); // w 300 h 550
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      if (gb.in.u.isResSP) return;
	      if (!this.isWheel) return;
	
	      if (gb.in.s.offset < -this.H + gb.in.r.ws.h) gb.in.s.offset = -this.H + gb.in.r.ws.h;
	      if (gb.in.s.offset > 0) gb.in.s.offset = 0;
	      this.wheel = gb.in.s.offset;
	
	      // log(this.wrapST);
	      // log(this.wheel);
	
	      // Ӌ?
	      // this.st = -this.wheel;
	      this.st = $(window).scrollTop();
	      this.wrapST += (this.st - this.wrapST) * this.wrapEase;
	      this.targetST += (this.st * this.wrapTargetDisEase - this.targetST) * this.targetEase;
	
	      // ??ӳ
	      // inner
	      TweenMax.set(this.$wrapper, { y: -this.wrapST });
	      // target   
	      var self = this;
	      this.$target.each(function (i) {
	
	        TweenMax.set($(this), { y: self.dirList[i] * (-self.targetST * Number(self.rateList[i]) / gb.in.Layout.size.scale.rate + self.marginList[i]) });
	      });
	
	      this.showContents();
	
	      // this.numContents();
	    }
	  }, {
	    key: 'showContents',
	    value: function showContents() {
	      var _this2 = this;
	
	      if (this.tit01ST < this.wrapST && !this.tit01STLock) {
	        this.tit01STLock = true;
	
	        // text
	        var opt = { $target: this.$tit01, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$tit01, 1.5, { x: 0, z: 1, opacity: 1, ease: Power2.easeOut });
	
	        var opt = { $target: this.$tit02, dur: 1.5, delay: 0.1, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$tit02, 1.5, { y: 0, x: '-50%', z: 1, opacity: 1, delay: 0.1, ease: Power2.easeOut });
	
	        var opt = { $target: this.$text01, dur: 1.35, delay: 0.15, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text01, 1.35, { y: 0, x: '-50%', z: 1, opacity: 1, delay: 0.15, ease: Power2.easeOut });
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg01, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 540px 0px)',
	          ease: Expo.easeOut,
	          delay: 0.45
	        }).to(this.$bg01, 0.7, {
	          z: 1,
	          clip: 'rect(0px 400px 540px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img01, 1.6, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 400px 600px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5');
	      };
	      if (this.text02ST < this.wrapST && !this.text02STLock) {
	        this.text02STLock = true;
	
	        var opt = { $target: this.$text02, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text02, 1.5, { y: 0, x: '-50%', z: 1, opacity: 1, ease: Power2.easeOut });
	
	        var tl = new TimelineMax();
	
	        tl.to(this.$img02, 1.7, {
	          x: '-50%',
	          z: 5,
	          clip: 'rect(0px 450px 300px 0px)',
	          delay: 0.3,
	          ease: Expo.easeOut
	        });
	      };
	      if (this.imgWrap03ST < this.wrapST && !this.imgWrap03STLock) {
	        this.imgWrap03STLock = true;
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg02, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 260px 0px)',
	          ease: Expo.easeOut
	        }).to(this.$bg02, 0.7, {
	          z: 1,
	          clip: 'rect(0px 390px 260px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img03, 1.35, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 390px 260px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5');
	      };
	      if (this.imgWrap04ST < this.wrapST && !this.imgWrap04STLock) {
	        this.imgWrap04STLock = true;
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg03, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 460px 0px)',
	          ease: Expo.easeOut
	        }).to(this.$bg03, 0.7, {
	          z: 1,
	          clip: 'rect(0px 250px 460px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img04, 1.6, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 320px 480px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5').add(function () {
	
	          var opt = { $target: _this2.$text03, dur: 1.6, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	          _this2.libs.blur(opt);
	
	          TweenMax.to(_this2.$text03, 1.6, { y: 0, z: 1, opacity: 1, ease: Power2.easeOut });
	        }, '-=1.7');
	      };
	      if (this.tit03ST < this.wrapST && !this.tit03STLock) {
	        this.tit03STLock = true;
	
	        var opt = { $target: this.$tit03, dur: 1.5, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$tit03, 1.5, { x: 0, z: 1, opacity: 1, ease: Power2.easeOut });
	
	        var opt = { $target: this.$tit04, dur: 1.4, delay: 0.1, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$tit04, 1.4, { y: 0, x: '-50%', z: 1, opacity: 1, delay: 0.1, ease: Power2.easeOut });
	
	        var opt = { $target: this.$text04, dur: 1.3, delay: 0.2, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        this.libs.blur(opt);
	
	        TweenMax.to(this.$text04, 1.3, { y: 0, z: 1, opacity: 1, delay: 0.2, ease: Power2.easeOut });
	
	        // img
	        var tl = new TimelineMax();
	
	        tl.to(this.$bg04, 0.7, {
	          z: 1,
	          clip: 'rect(0px 10px 550px 0px)',
	          ease: Expo.easeOut,
	          delay: 0.45
	        }).to(this.$bg04, 0.7, {
	          z: 1,
	          clip: 'rect(0px 300px 550px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.1').to(this.$img05, 1.6, {
	          x: 0,
	          z: 5,
	          clip: 'rect(0px 420px 630px 0px)',
	          ease: Expo.easeOut
	        }, '-=0.5');
	      };
	    }
	  }, {
	    key: 'numContents',
	    value: function numContents() {
	
	      var rate = this.wrapST / this.H;
	      var adjust = 17;
	      var adjust02 = 87;
	      var result = Math.floor(rate * 100);
	
	      log(Math.floor(rate * 100));
	
	      var year01 = 1935 + Math.floor(result * 1.5) - adjust;
	      if (year01 > 1940 && !this.isYear01 && year01 < 1980) {
	        this.isYear01 = true;
	        TweenMax.to(this.$year01, 1.5, {
	          x: 0,
	          z: 1,
	          opacity: 1,
	          ease: Expo.easeOut
	        });
	      }
	      if ((year01 > 1980 || year01 <= 1940) && this.isYear01) {
	        this.isYear01 = false;
	        TweenMax.to(this.$year01, 1.5, {
	          x: -120,
	          z: 1,
	          opacity: 0,
	          ease: Expo.easeOut
	        });
	      }
	
	      this.$year01.html(year01);
	
	      var year03 = 2000 + Math.floor(result * 1.5) - adjust02;
	
	      if (year03 > 2000 && !this.isYear03 && year03 < 2016) {
	        this.isYear03 = true;
	        TweenMax.to(this.$year03, 1.5, {
	          x: 0,
	          z: 1,
	          opacity: 1,
	          ease: Expo.easeOut
	        });
	      }
	      // if ((year03 > 2016 || year03 <= 2000) && this.isYear03) {
	      if (year03 <= 2000 && this.isYear03) {
	        this.isYear03 = false;
	        TweenMax.to(this.$year03, 1.5, {
	          x: -120,
	          z: 1,
	          opacity: 0,
	          ease: Expo.easeOut
	        });
	      }
	      if (year03 > 2016) year03 = 2016;
	
	      this.$year03.html(year03);
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	
	      this.numContents();
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.setup();
	
	      this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.tit03ST = this.$tit03.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text01ST = this.$text01.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text02ST = this.$text02.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text03ST = this.$text03.offset().top - gb.in.r.ws.h / 8 * 5;
	      this.text04ST = this.$text04.offset().top - gb.in.r.ws.h / 8 * 5;
	
	      if (gb.in.u.isResSP) {
	        this.reset();
	      };
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	
	      gb.in.s.STAmount = 0;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	
	      TweenMax.set(this.$wrapper, { y: 0 });
	      // target   
	      var self = this;
	      this.$target.each(function (i) {
	
	        TweenMax.set($(this), { y: 0, x: 0 });
	      });
	
	      var opt = { $target: this.$tit01, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit02, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit03, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit04, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text01, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text02, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text03, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$text04, dur: 0, delay: 0, blur: 0, blurTarget: 0, ease: Power3.easeIn };
	      this.libs.blur(opt);
	
	      TweenMax.set(this.$tit01, { y: 0, opacity: 1 });
	      TweenMax.set(this.$tit02, { y: 0, opacity: 1 });
	      TweenMax.set(this.$tit03, { y: 0, opacity: 1 });
	      TweenMax.set(this.$tit04, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text01, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text02, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text03, { y: 0, opacity: 1 });
	      TweenMax.set(this.$text04, { y: 0, opacity: 1 });
	    }
	  }, {
	    key: 'resetInertia',
	    value: function resetInertia() {
	
	      this.$wrapper.removeClass('is-fixed');
	      TweenMax.set(this.$wrapper, { y: 0, x: 0 });
	      $('body').css('height', '100%');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.up.add('InertiaScroll', this.run.bind(this));
	      gb.in.r.add('InertiaScroll', this.onResize.bind(this));
	      gb.in.s.add('InertiaScroll', this.onScroll.bind(this));
	    }
	  }]);
	
	  return InertiaScroll;
	}();
	
	exports.default = InertiaScroll;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Layout
	//
	//--------------------------------------------------
	
	var _Size = __webpack_require__(84);
	
	var _Size2 = _interopRequireDefault(_Size);
	
	var _Position = __webpack_require__(38);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Layout = function () {
	  function Layout() {
	    _classCallCheck(this, Layout);
	
	    this.setEvents();
	  }
	
	  _createClass(Layout, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.size = new _Size2.default(); // adjust size
	
	      this.position = new _Position2.default(); // adjust position
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      this.setup();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'reset',
	    value: function reset() {
	
	      // scaleで大きくしている関係上、高さを100%にしてはいけない
	      if (gb.in.pjax.id == 'history' || gb.in.pjax.id == 'interview_detail') {
	
	        TweenMax.set($('#inner'), {
	          width: '100%',
	          height: 'auto',
	          scale: 1,
	          'transform-origin': '0 0',
	          '-webkit-transform-origin': '0 0'
	        });
	        TweenMax.set($('#bgWrap'), {
	          width: '100%',
	          height: '100%',
	          scale: 1,
	          'transform-origin': '0 0',
	          '-webkit-transform-origin': '0 0'
	        });
	
	        TweenMax.set($('#wrapper'), {
	          'overflow': 'visible',
	          height: '100%'
	        });
	      } else {
	
	        TweenMax.set($('#inner, #bgWrap'), {
	          width: '100%',
	          height: '100%',
	          scale: 1,
	          'transform-origin': '0 0',
	          '-webkit-transform-origin': '0 0'
	        });
	
	        TweenMax.set($('#wrapper'), {
	          'overflow': 'visible',
	          height: '100%'
	        });
	      }
	    }
	  }]);
	
	  return Layout;
	}();
	
	exports.default = Layout;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Size
	//
	//--------------------------------------------------
	
	var _Scale = __webpack_require__(85);
	
	var _Scale2 = _interopRequireDefault(_Scale);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Size = function () {
	  function Size() {
	    _classCallCheck(this, Size);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Size, [{
	    key: 'setup',
	    value: function setup() {
	
	      // gb.in.u.setImgSPSize($('img')); // for sp img
	
	      // new gb.ResponsiveFontSize($('.fontResponsive')); //レスポンシブ時フォントサイズの変更
	
	      this.scale = new _Scale2.default(); // resize
	
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // gb.in.u.setImgSPSize($('img')); // for sp img
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // gb.in.r.add(this.onResize.bind(this));
	
	    }
	  }]);
	
	  return Size;
	}();
	
	exports.default = Size;

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Layout
	//
	//--------------------------------------------------
	var Scale = function () {
	  function Scale() {
	    _classCallCheck(this, Scale);
	
	    this.SPBaseW = 375;
	    this.PCBaseW = 1300;
	
	    this.rate = 1;
	    this.W = window.innerWidth;
	
	    this.$targetList = [{
	      '$target': $('.menuInner'),
	      'scale': 'spOnly' // spOnly pcOnly both
	    }];
	
	    this.run();
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Scale, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {
	
	      this.W = $(window).width();
	      this.iW = window.innerWidth;
	
	      this.scale();
	      this.wrap();
	    }
	
	    // 拡大
	
	  }, {
	    key: 'scale',
	    value: function scale() {
	      var _this = this;
	
	      // bpの場合のscale
	      if (this.iW <= gb.in.conf.bp) {
	
	        // widthからrateを計算
	        // this.rate = gb.in.u.floatFormat(this.W / this.SPBaseW , 2);
	        this.rate = this.W / this.SPBaseW;
	
	        // scaleするリストをループ
	        $.each(this.$targetList, function (index, val) {
	
	          if (val.scale == 'both' || val.scale == 'spOnly') {
	
	            TweenMax.set(val.$target, {
	              width: _this.SPBaseW,
	              scale: _this.rate,
	              'transform-origin': '0 0',
	              '-webkit-transform-origin': '0 0'
	            });
	          };
	        });
	      } else {
	
	        // widthからrateを計算
	        // this.rate = gb.in.u.floatFormat(this.W / this.PCBaseW , 2);
	        if (this.W > 1300) this.W = 1300;
	        this.rate = this.W / this.PCBaseW;
	
	        // scaleするリストをループ
	        $.each(this.$targetList, function (index, val) {
	
	          if (val.scale == 'both' || val.scale == 'pcOnly') {
	
	            TweenMax.set(val.$target, {
	              width: _this.PCBaseW,
	              scale: _this.rate,
	              'transform-origin': '0 0',
	              '-webkit-transform-origin': '0 0'
	            });
	          };
	
	          // こちらの場合は、scaleを戻す
	          if (val.scale == 'spOnly') {
	
	            TweenMax.set(val.$target, {
	              width: 'auto',
	              scale: 1,
	              'transform-origin': '0 0',
	              '-webkit-transform-origin': '0 0'
	            });
	          };
	        });
	      }
	    }
	
	    // scaleしたら、元の大きさ分余白ができるのでoverflow hiddenで消す
	
	  }, {
	    key: 'wrap',
	    value: function wrap() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.run();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('scale', this.onResize.bind(this));
	    }
	  }]);
	
	  return Scale;
	}();
	
	exports.default = Scale;

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectSVG
	//
	//--------------------------------------------------
	
	var HoverEffectSVG = function () {
	  function HoverEffectSVG($target, hoverColor, defColor) {
	    _classCallCheck(this, HoverEffectSVG);
	
	    this.$target = $target;
	    this.hoverColor = hoverColor || '#fff';
	    this.defColor = defColor || '#000';
	
	    // motion
	    this.tl = new TimelineMax();
	
	    // スマホのときは処理しない
	    if (gb.in.u.isPC) this.setEvents();
	  }
	
	  _createClass(HoverEffectSVG, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      if (gb.in.u.isResSP) return;
	
	      var tl = new TimelineMax();
	
	      tl.to($(that).find('path'), 0.4, {
	        fill: this.hoverColor,
	        ease: Power4.easeOut
	      });
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      if (gb.in.u.isResSP) return;
	
	      var tl = new TimelineMax();
	
	      tl.to($(that).find('path'), 0.4, {
	        fill: this.defColor,
	        ease: Power4.easeIn
	      });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).on('mouseenter', function (e) {
	          self.onEnter.call(self, this);
	        });
	        $(this).on('mouseleave', function (e) {
	          self.onLeave.call(self, this);
	        });
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).off('mouseenter');
	        $(this).off('mouseleave');
	      });
	    }
	  }]);
	
	  return HoverEffectSVG;
	}();
	
	exports.default = HoverEffectSVG;

/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  PageTop
	//
	//--------------------------------------------------
	
	var PageTop = function () {
	  function PageTop() {
	    _classCallCheck(this, PageTop);
	
	    this.setEvents();
	    this.ready();
	  }
	
	  _createClass(PageTop, [{
	    key: 'ready',
	    value: function ready() {}
	  }, {
	    key: 'pagetop',
	    value: function pagetop() {
	
	      // スクロール
	      TweenMax.to($('body,html'), 0.8, {
	        scrollTop: 0,
	        ease: Power3.easeOut,
	        onComplete: function onComplete() {}
	      });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      $('.toTop').on('click', this.pagetop.bind(this));
	    }
	  }]);
	
	  return PageTop;
	}();
	
	exports.default = PageTop;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // ------------------------------------------------------------
	//
	//  Sns
	//
	// ------------------------------------------------------------
	
	var _metaData = __webpack_require__(89);
	
	var _metaData2 = _interopRequireDefault(_metaData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Sns = function () {
	  function Sns($fb, $tw, $line, $mail) {
	    _classCallCheck(this, Sns);
	
	    this.$fb = $fb;
	    this.$tw = $tw;
	    this.$line = $line;
	    this.$mail = $mail;
	
	    this.fb = {
	      $target: $fb,
	      tit: encodeURIComponent($('title').html()),
	      des: encodeURIComponent($('.fbDes').attr('content')), // desctiption
	      url: location.href
	    };
	
	    this.tw = {
	      $target: $tw,
	      tit: encodeURIComponent($('title').html()),
	      des: encodeURIComponent($('.fbDes').attr('content')), // desctiption
	      url: location.href,
	      hash: 'hash'
	    };
	
	    this.line = {
	      $target: $line,
	      tit: encodeURIComponent($('title').html()),
	      des: encodeURIComponent($('.fbDes').attr('content')), // desctiption
	      url: location.href
	    };
	
	    this.setEvents();
	  }
	
	  _createClass(Sns, [{
	    key: 'switchMeta',
	    value: function switchMeta() {
	
	      var p = gb.in.pjax.id;
	      if (p == 'interview_detail') {
	
	        log($('.section').hasClass('section03_detail01'));
	        if ($('.section').hasClass('section03_detail01')) p = 'interviewDetail01';else if ($('.section').hasClass('section03_detail02')) p = 'interviewDetail02';else if ($('.section').hasClass('section03_detail03')) p = 'interviewDetail03';
	      }
	
	      // var d = gb.in.conf.meta[p];
	      var d = _metaData2.default[p];
	
	      $('title').text();
	      $('.metaDes').attr({ 'content': d.description });
	      $('.metaKey').attr({ 'content': d.keyword });
	
	      $('.fbTit').attr({ 'content': d.fb.tit });
	      $('.fbDes').attr({ 'content': d.fb.des });
	      $('.fbImg').attr({ 'content': d.fb.img });
	      $('.fbUrl').attr({ 'content': d.fb.url });
	
	      $('.twTit').attr({ 'content': d.tw.tit });
	      $('.twDes').attr({ 'content': d.tw.des });
	      $('.twImg').attr({ 'content': d.tw.img });
	      $('.twUrl').attr({ 'content': d.tw.url });
	    }
	  }, {
	    key: 'setting',
	    value: function setting() {
	
	      this.fb = {
	        $target: this.$fb,
	        tit: encodeURIComponent($('title').html()),
	        des: encodeURIComponent($('.fbDes').attr('content')), // desctiption
	        url: location.href
	      };
	
	      this.tw = {
	        $target: this.$tw,
	        tit: encodeURIComponent($('title').html()),
	        des: encodeURIComponent($('.fbDes').attr('content')), // desctiption
	        url: location.href,
	        hash: 'hash'
	      };
	
	      this.line = {
	        $target: this.$line,
	        tit: encodeURIComponent($('title').html()),
	        des: encodeURIComponent($('.fbDes').attr('content')), // desctiption
	        url: location.href
	      };
	    }
	  }, {
	    key: 'setOgImg',
	    value: function setOgImg() {
	
	      // $('.ogImg_fb').attr('content', this.fb.img);
	      // $('.ogImg_tw').attr('content', this.tw.img);
	
	    }
	  }, {
	    key: 'jumpFB',
	    value: function jumpFB(e) {
	
	      this.openWindow('https://www.facebook.com/sharer/sharer.php?u=' + this.fb.url);
	
	      return false;
	    }
	  }, {
	    key: 'jumpTW',
	    value: function jumpTW(e) {
	
	      this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + this.tw.des);
	      // this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + this.tw.text + '&hashtags=' + this.tw.hash);
	
	      return false;
	    }
	  }, {
	    key: 'jumpLINE',
	    value: function jumpLINE() {
	
	      this.openWindow('http://line.me/R/msg/text/?' + this.line.tit + '%0A' + this.line.url);
	
	      return false;
	    }
	  }, {
	    key: 'onSendMail',
	    value: function onSendMail() {
	
	      var address = '';
	      var sub = '';
	      var body = encodeURIComponent($('title').html() + '\n' + location.href);
	
	      location.href = 'mailto:' + address + '?subject=' + sub + '&body=' + body;
	
	      return false;
	    }
	  }, {
	    key: 'openWindow',
	    value: function openWindow(url, w, h) {
	
	      if (w === undefined) w = 600;
	      if (h === undefined) h = 600;
	
	      var l = Number((window.screen.width - w) / 2);
	      var t = Number((window.screen.height - h) / 2);
	
	      window.open(url, 'new_window', 'menubar=no,' + 'toolbar=no,' + 'resizable=yes,' + 'scrollbars=yes,' + 'height=' + h + ',' + 'width=' + w + ',' + 'left=' + l + ',' + 'top=' + t);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this = this;
	
	      this.fb.$target.on('click', this.jumpFB.bind(this));
	      this.tw.$target.on('click', this.jumpTW.bind(this));
	      this.line.$target.on('click', this.jumpLINE.bind(this));
	      if (this.$mail) this.$mail.on('click', function () {
	        _this.onSendMail();return false;
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      this.fb.$target.off('click');
	      this.tw.$target.off('click');
	      this.line.$target.off('click');
	      if (this.$mail) this.$mail.off('click');
	    }
	  }]);
	
	  return Sns;
	}();
	
	exports.default = Sns;

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = {
		"description": "desctiption",
		"keyword": "ダミーダミーダミーダミーダミーダミーダミー",
		"ogpImgPath": "",
		"top": {
			"description": "ダミーダミーダミーダミーダミーダミーダミー",
			"fb": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"type": "website",
				"url": ""
			},
			"keyword": "ダミーダミーダミーダミーダミーダミーダミー",
			"line": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"url": ""
			},
			"title": "",
			"tw": {
				"card": "summary_large_image",
				"creator": "",
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "",
				"url": "ダミーダミーダミーダミーダミーダミーダミー"
			}
		},
		"movie": {
			"description": "ダミーダミーダミーダミーダミーダミーダミー",
			"fb": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"type": "website",
				"url": ""
			},
			"keyword": "ダミーダミーダミーダミーダミーダミーダミー",
			"line": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"url": ""
			},
			"title": "",
			"tw": {
				"card": "summary_large_image",
				"creator": "",
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "",
				"url": "ダミーダミーダミーダミーダミーダミーダミー"
			}
		},
		"interview": {
			"description": "ダミーダミーダミーダミーダミーダミーダミー",
			"fb": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"type": "website",
				"url": ""
			},
			"keyword": "ダミーダミーダミーダミーダミーダミーダミー",
			"line": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"url": ""
			},
			"title": "",
			"tw": {
				"card": "summary_large_image",
				"creator": "",
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "",
				"url": "ダミーダミーダミーダミーダミーダミーダミー"
			}
		},
		"interviewDetail01": {
			"description": "ダミーダミーダミーダミーダミーダミーダミー",
			"fb": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"type": "website",
				"url": ""
			},
			"keyword": "ダミーダミーダミーダミーダミーダミーダミー",
			"line": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"url": ""
			},
			"title": "",
			"tw": {
				"card": "summary_large_image",
				"creator": "",
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "",
				"url": "ダミーダミーダミーダミーダミーダミーダミー"
			}
		},
		"interviewDetail02": {
			"description": "ダミーダミーダミーダミーダミーダミーダミー",
			"fb": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"type": "website",
				"url": ""
			},
			"keyword": "ダミーダミーダミーダミーダミーダミーダミー",
			"line": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"url": ""
			},
			"title": "",
			"tw": {
				"card": "summary_large_image",
				"creator": "",
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "",
				"url": "ダミーダミーダミーダミーダミーダミーダミー"
			}
		},
		"interviewDetail03": {
			"description": "ダミーダミーダミーダミーダミーダミーダミー",
			"fb": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"type": "website",
				"url": ""
			},
			"keyword": "ダミーダミーダミーダミーダミーダミーダミー",
			"line": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"url": ""
			},
			"title": "",
			"tw": {
				"card": "summary_large_image",
				"creator": "",
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "",
				"url": "ダミーダミーダミーダミーダミーダミーダミー"
			}
		},
		"history": {
			"description": "ダミーダミーダミーダミーダミーダミーダミー",
			"fb": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"type": "website",
				"url": ""
			},
			"keyword": "ダミーダミーダミーダミーダミーダミーダミー",
			"line": {
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"tit": "ダミーダミーダミーダミーダミーダミーダミー",
				"url": ""
			},
			"title": "",
			"tw": {
				"card": "summary_large_image",
				"creator": "",
				"des": "ダミーダミーダミーダミーダミーダミーダミー",
				"img": "",
				"siteName": "",
				"tit": "",
				"url": "ダミーダミーダミーダミーダミーダミーダミー"
			}
		}
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  JudgeEnvironment
	//
	//--------------------------------------------------
	
	var JudgeEnvironment = function () {
	  function JudgeEnvironment() {
	    _classCallCheck(this, JudgeEnvironment);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(JudgeEnvironment, [{
	    key: 'setup',
	    value: function setup() {
	
	      // デバイス判定
	      gb.in.u.isDeviceSP();
	      gb.in.u.isDeviceTAB();
	      gb.in.u.isDeviceMB();
	      gb.in.u.isDevicePC();
	
	      // ブラウザバージョン判定
	      gb.in.u.isIEVersion();
	
	      // responsive / portrait / landscape
	      gb.in.u.isDirection();
	      gb.in.u.isResponsive(gb.in.conf.bp);
	      gb.in.r.add('isDirection', gb.in.u.isDirection.bind(gb.in.u));
	      gb.in.r.add('isResponsive', gb.in.u.isResponsive.bind(gb.in.u, gb.in.conf.bp));
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      this.setup();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return JudgeEnvironment;
	}();
	
	exports.default = JudgeEnvironment;

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ResponsiveSwitchImg
	//
	//--------------------------------------------------
	
	var ResponsiveSwitchImg = function () {
	  function ResponsiveSwitchImg() {
	    _classCallCheck(this, ResponsiveSwitchImg);
	
	    this.setup();
	    this.run();
	    this.setEvents();
	  }
	
	  _createClass(ResponsiveSwitchImg, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.isPCLock = gb.in.u.isResPC ? false : true;
	      this.isSPLock = gb.in.u.isResSP ? false : true;
	
	      this.$target = $('.responsiveImg');
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      // ------------------------------------------------------------
	      //  ブレイクポイントよりもsp側
	      // ------------------------------------------------------------
	      if (gb.in.u.isResSP && !this.isSPLock) {
	        this.isPCLock = false;
	        this.isSPLock = true;
	
	        log(11);
	
	        this.$target.each(function (index, el) {
	          var _this = this;
	
	          var src = $(this).attr('src');
	          src = gb.in.u.strReplace(src, '_pc', '_sp');
	          $(this).off('load');
	          $(this).on('load', function (event) {
	
	            if ($(_this).hasClass('spSize')) gb.in.u.setImgSPSize($(_this));
	          });
	          $(this).attr('src', src);
	
	          // $(this).attr('src',src);
	          // if ($(this).hasClass('spSize')) gb.in.u.setImgSPSize($(this));
	        });
	
	        // responsiveimgがついてないもので、spSizeがついてるものは1/2
	        gb.in.u.setImgSPSize($('.spSize').not('.responsiveImg'));
	      }
	
	      // ------------------------------------------------------------
	      //  ブレイクポイントよりもpc側
	      // ------------------------------------------------------------
	      if (gb.in.u.isResPC && !this.isPCLock) {
	        this.isPCLock = true;
	        this.isSPLock = false;
	
	        log(22);
	
	        this.$target.each(function (index, el) {
	
	          var src = $(this).attr('src');
	          src = gb.in.u.strReplace(src, '_sp', '_pc');
	
	          $(this).attr({ width: 'auto', height: 'auto' });
	          $(this).attr('src', src);
	        });
	
	        // responsiveimgがついてないもので、spSizeがついてるものはautoに
	        $('.spSize').not('.responsiveImg').attr({ width: 'auto', height: 'auto' });
	
	        // spはなぜかloadイベントが呼ばれないので、こっちで処理
	        // if (gb.in.u.isSP) $('.responsiveImg').attr({width: 'auto',height: 'auto'});
	      }
	    }
	  }, {
	    key: 'resume',
	    value: function resume() {
	
	      log('resume');
	
	      this.setup();
	      this.run();
	
	      gb.in.r.remove('responsiveSwitchImg');
	      gb.in.r.add('responsiveSwitchImg', this.run.bind(this));
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('responsiveSwitchImg', this.run.bind(this));
	    }
	  }]);
	
	  return ResponsiveSwitchImg;
	}();
	
	exports.default = ResponsiveSwitchImg;

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  SwipeTransition sss
	//
	// ------------------------------------------------------------
	
	var SwipeTransition = function () {
	  function SwipeTransition() {
	    _classCallCheck(this, SwipeTransition);
	
	    // ---------------
	    //  dom
	    // ---------------
	    // this.$startWrap = $('.section01, .section02 .next, .section03 .box05');
	    // this.$startWrap = $('.section02');
	    this.$startWrap = $(window);
	    this.$endWrap = $(window);
	
	    this.pageList = {
	      'top': 0,
	      'movie': 1,
	      'interview': 2,
	      'history': 3
	    };
	
	    // variable
	    this.current = 0;
	    this.old = null;
	    this.next = 1;
	    this.prev = null;
	    this.len = 4;
	
	    this.isLock = false;
	
	    // ---------------
	    //  variable
	    // ---------------
	
	    // position
	    this.sX = 0;this.mX = 0;this.eX = 0; //startX,moveX,endX
	    this.dis = 0;this.minDis = 15;
	
	    // time
	    this.sT = 0;this.eT = 0;this.minT = 300; //startTime,ellapsedTime,
	
	    this.W = gb.in.r.W();
	
	    this.onTouchLong = function () {};
	    this.onTouchStartCB = function () {};
	    this.onTouchEndCB = function () {};
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(SwipeTransition, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onTouchStart',
	    value: function onTouchStart(e) {
	
	      // targetX
	      var y = e.originalEvent.changedTouches[0].pageY;
	      this.sY = y;
	
	      this.st = gb.in.s.st;
	      this.sb = gb.in.s.sb;
	      log('sy', y);
	    }
	  }, {
	    key: 'onTouchMove',
	    value: function onTouchMove(e) {
	
	      // targetX
	      var y = e.originalEvent.changedTouches[0].pageY;
	      this.mY = y;
	    }
	  }, {
	    key: 'onTouchEnd',
	    value: function onTouchEnd(e) {
	      var _this = this;
	
	      if (this.isLock) return;
	
	      var y = e.originalEvent.changedTouches[0].pageY;
	      this.eY = y;
	
	      var dis = this.sY - this.eY;
	      var absDis = Math.abs(dis);
	
	      // 最小距離より長かったら、処理
	      if (this.minDis < absDis) {
	
	        // ページ番号を取得
	        this.current = this.pageList[gb.in.pjax.id];
	
	        if (dis > 0) {
	
	          var h = $('.section').height() * gb.in.Layout.size.scale.rate;
	          log(this.sb, h - 10, this.sb < h - 10);
	
	          if (this.current !== 0 && this.sb < h - 10) return;
	          // historyページの場合は処理しない
	          if (this.current == 3) return;
	
	          this.calculateOrder('next');
	
	          // したへ
	          var pageName = Object.keys(this.pageList).filter(function (key) {
	            return _this.pageList[key] === _this.current;
	          })[0];
	          $('.pjaxTo_' + pageName).trigger('click');
	        } else {
	
	          log(this.st, this.st !== 0);
	
	          if (this.st !== 0) return;
	
	          // 上へ
	          this.calculateOrder('prev');
	
	          var pageName = Object.keys(this.pageList).filter(function (key) {
	            return _this.pageList[key] === _this.current;
	          })[0];
	          $('.pjaxTo_' + pageName).trigger('click');
	        }
	      }
	
	      // ----------------
	      //  blur解除
	      // ----------------
	      this.isNotTouch = true;
	
	      // コールバック
	      this.onTouchEndCB();
	    }
	  }, {
	    key: 'calculateOrder',
	    value: function calculateOrder(dir) {
	
	      this.old = this.current;
	
	      if (dir == 'next') {
	
	        this.current++;
	        if (this.current > this.len - 1) this.current = this.len - 1;
	        this.next = this.current + 1;
	        this.prev = this.current - 1;
	      } else {
	
	        this.current--;
	        if (this.current < 0) this.current = 0;
	        this.next = this.current + 1;
	        this.prev = this.current - 1;
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	      var _this2 = this;
	
	      var self = this;
	
	      this.$startWrap.on('touchstart.SwipeTransition', function (e) {
	        _this2.onTouchStart(e);
	      });
	      // this.$wrap.on('touchmove.SwipeTransition', (e)=>{this.onTouchMove(e);});
	      this.$endWrap.on('touchend.SwipeTransition', function (e) {
	        _this2.onTouchEnd(e);
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      var self = this;
	
	      this.$startWrap.off('touchstart.SwipeTransition');
	      // this.$wrap.off('touchmove.SwipeTransition');
	      this.$endWrap.off('touchend.SwipeTransition');
	    }
	  }]);
	
	  return SwipeTransition;
	}();
	
	exports.default = SwipeTransition;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Menu
	//
	//--------------------------------------------------
	
	var _MenuBtn = __webpack_require__(94);
	
	var _MenuBtn2 = _interopRequireDefault(_MenuBtn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Menu = function () {
	  function Menu($btn, $close, $contents) {
	    _classCallCheck(this, Menu);
	
	    gb.in.menuBtn01 = new _MenuBtn2.default($('#header'), '01');
	
	    this.$btn = $('.menuBtn01');
	    // this.$close = $close;
	    this.$menu = $('#menu');
	
	    this.W = $(window).width(), this.H = $(window).height();
	
	    this.isLock = gb.in.u.isResPC ? true : false;
	
	    this.isOpen = false;
	
	    this.setEvents();
	    this.setup();
	  }
	
	  _createClass(Menu, [{
	    key: 'setup',
	    value: function setup() {
	
	      // スクロールで動ける範囲
	      this.cur = 0;
	      this.min = 0;
	      this.max = 0;
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	
	      if (this.$btn.hasClass('on')) {
	        this.isOpen = false;
	
	        this.close();
	      } else {
	        this.isOpen = true;
	
	        this.open();
	      };
	
	      this.$btn.toggleClass('on');
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	
	      gb.in.swt.isLock = true;
	
	      // menuの横位置
	      this.menuPos = gb.in.r.ws.w / 2 < 650 ? 650 : gb.in.r.ws.w / 2;
	
	      // pc
	      // layout
	      if (gb.in.u.isResPC) {
	
	        var tl = new TimelineMax();
	
	        // overlayを追加
	        $('<div class="menuOverlay"></div>').appendTo('body');
	
	        tl
	        // menu表示
	        .set(this.$menu, {
	          display: 'block',
	          'z-index': Number($('#sideR').css('z-index')) + 1,
	          x: this.menuPos
	        })
	        // overlayの設定
	        .set($('.menuOverlay'), {
	          'z-index': Number($('#sideR').css('z-index')),
	          x: gb.in.r.ws.w
	        })
	        // overlayの移動
	        .to($('.menuOverlay'), 0.4, {
	          x: 0,
	          opacity: 1,
	          ease: Power4.easeOut
	        })
	        // menuを横から移動
	        .to(this.$menu, 0.7, {
	          x: 0,
	          ease: Power3.easeOut
	        }, '-=0.2')
	        // コンテンツを左に移動
	        .to($('#wrapper').add($('#bgWrap')), 0.9, {
	          x: '-40%',
	          ease: Expo.easeOut,
	          onComplete: function onComplete() {}
	        }, '-=0.6');
	
	        this.$menu.css({
	          overflow: 'visible',
	          height: '100%'
	        });
	
	        this.onResize(); //スクロールの上限値、位置調整
	        this.$menu.find('.menuInner').adjustH(); // 開く際、上下中央に
	
	        // pc 背景スクロールさせない
	        $('html').addClass('is-hidden');
	
	        // sp版はスクロールさせるために overflow scrollつける
	      } else {
	
	        // メニューをスクロールできるように
	        this.$menu.css({
	          overflow: 'scroll',
	          height: gb.in.r.ws.h
	        });
	
	        var tl = new TimelineMax();
	
	        tl
	        // menu表示
	        .set(this.$menu, {
	          display: 'block',
	          'z-index': Number($('#sideR').css('z-index')) + 1,
	          x: gb.in.r.ws.w
	        })
	        // menuを横から移動
	        .to(this.$menu, 0.7, {
	          x: 0,
	          ease: Power3.easeOut,
	          onComplete: function onComplete() {
	
	            // sp 背景スクロールさせない
	            // $('html').addClass('is-fixed');
	            // this.curST = gb.in.s.st;
	            $('html').addClass('is-hidden');
	          }
	        }, '-=0.3')
	        // コンテンツを左に移動
	        .to($('#wrapper').add($('#bgWrap')), 0.9, {
	          x: '-40%',
	          ease: Expo.easeOut
	        }, '-=0.6');
	
	        // headerの帯とlogoを消す
	        TweenMax.to($('#header'), 0.4, {
	          backgroundColor: 'rgba(0,0,0,0)',
	          ease: Power3.easeOut
	        });
	        TweenMax.to($('#header .logo'), 0.4, {
	          opacity: 0,
	          ease: Power3.easeOut
	        });
	      }
	
	      // ボタンの色変更
	      TweenMax.to(this.$btn.find('.top'), 0.5, {
	        backgroundColor: '#000'
	      });
	      TweenMax.to(this.$btn.find('.middle'), 0.5, {
	        backgroundColor: 'rgba(255,255,255,0)'
	      });
	      TweenMax.to(this.$btn.find('.bottom'), 0.5, {
	        backgroundColor: '#000'
	      });
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      var _this = this;
	
	      gb.in.swt.isLock = false;
	
	      // menuの横位置
	      this.menuPos = gb.in.r.ws.w / 2 < 650 ? 650 : gb.in.r.ws.w / 2;
	
	      if (gb.in.u.isResPC) {
	
	        var tl = new TimelineMax();
	
	        // menuを横から移動
	        tl
	        // コンテンツを左に移動
	        .to($('#wrapper').add($('#bgWrap')), 0.7, {
	          x: '0%',
	          ease: Power3.easeOut
	        }).to(this.$menu, 0.8, {
	          x: this.menuPos,
	          ease: Expo.easeOut,
	          onComplete: function onComplete() {
	
	            // menu非表示
	            TweenMax.set(_this.$menu, {
	              display: 'none',
	              'z-index': 1
	            });
	          }
	        }, '-=0.6')
	        // overlayの移動
	        .to($('.menuOverlay'), 0.4, {
	          x: '100%',
	          opacity: 0,
	          ease: Power4.easeOut,
	          onComplete: function onComplete() {
	            $('.menuOverlay').remove();
	          }
	        }, '-=0.7');
	
	        $('html').removeClass('is-hidden');
	      } else {
	
	        var tl = new TimelineMax();
	
	        // menuを横から移動
	        tl
	        // コンテンツを左に移動
	        .to($('#wrapper').add($('#bgWrap')), 0.7, {
	          x: '0%',
	          ease: Power3.easeOut
	        }).to(this.$menu, 0.8, {
	          x: gb.in.r.ws.w,
	          ease: Expo.easeOut,
	          onComplete: function onComplete() {
	
	            // menu非表示
	            TweenMax.set(_this.$menu, {
	              display: 'none',
	              'z-index': 1
	            });
	          }
	        }, '-=0.6');
	
	        // // historyページで、最上部より下の場合は、真ん中だけ黒にする
	        // if (gb.in.headerColor.isHLock) {
	
	        //   // spの場合はlogo色変更
	        //   TweenMax.to($('#header .logo svg path'), 0.5, {
	        //     fill: '#000',
	        //   });
	
	        // } else {
	
	        //   // spの場合はlogo色変更
	        //   TweenMax.to($('#header .logo svg path'), 0.5, {
	        //     fill: '#fff',
	        //   });
	
	        // }
	
	        // headerの帯とlogoを戻す
	        TweenMax.to($('#header'), 0.4, {
	          backgroundColor: 'rgba(0,0,0,.5)',
	          ease: Power3.easeOut
	        });
	        TweenMax.to($('#header .logo'), 0.4, {
	          opacity: 1,
	          ease: Power3.easeOut
	        });
	
	        // sp 背景スクロールさせない 解除
	        // $('html').removeClass('is-fixed');
	        $('html').removeClass('is-hidden');
	        // $(window).scrollTop(this.curST);
	
	      }
	
	      if (gb.in.pjax.id == 'history' || gb.in.pjax.id == 'interview_detail') {
	        // historyページで、最上部より下の場合は、真ん中だけ黒にする
	        if (gb.in.headerColor.isHLock) {
	
	          TweenMax.to(this.$btn.find('.middle'), 0.5, {
	            backgroundColor: 'rgba(0,0,0,1)'
	          });
	        } else {
	
	          // ボタンの色変更
	          TweenMax.to(this.$btn.find('.top'), 0.5, {
	            backgroundColor: '#fff'
	          });
	          TweenMax.to(this.$btn.find('.middle'), 0.5, {
	            backgroundColor: 'rgba(255,255,255,1)'
	          });
	          TweenMax.to(this.$btn.find('.bottom'), 0.5, {
	            backgroundColor: '#fff'
	          });
	        }
	      };
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // pcのときのみ
	      if (gb.in.u.isResPC) {
	
	        // window size850以下の場合は、スクロール出来るように
	        if (gb.in.r.ws.h < 850) {
	
	          // 上に行きすぎないようにする
	          var h = 850 - gb.in.r.ws.h;
	
	          TweenMax.set(this.$menu.find('.menuInner'), { 'padding-top': h + 130 });
	
	          this.min = -h;
	        } else {
	
	          // def数値に戻す
	          TweenMax.set(this.$menu.find('.menuInner'), { 'padding-top': 130 });
	
	          // 上下中央に戻す
	          TweenMax.set(this.$menu.find('.menuInner'), {
	            y: 0
	          });
	        }
	
	        // 上下中央に
	        this.$menu.find('.menuInner').adjustH();
	      } else {
	
	        // 初期値の戻す
	        this.$menu.find('.menuInner').css({
	          'padding-top': 0,
	          'position': 'static',
	          'top': 0,
	          'margin-top': 0
	        });
	      }
	
	      // sp版のときは設定
	      if (gb.in.u.isResSP) {
	
	        this.$menu.css({
	          overflow: 'scroll',
	          height: gb.in.r.ws.h
	        });
	      } else {
	
	        $('html').removeClass('is-fixed');
	
	        this.$menu.css({
	          overflow: 'visible',
	          height: '100%'
	        });
	      }
	
	      // ブレイクポイント切替時は一度しまう
	      if (gb.in.u.isResPC && this.isLock) {
	        this.isLock = false;
	
	        this.close();
	        gb.in.menuBtn01.close();
	      };
	
	      if (gb.in.u.isResSP && !this.isLock) {
	        this.isLock = true;
	
	        this.close();
	        gb.in.menuBtn01.close();
	      };
	    }
	  }, {
	    key: 'onWheel',
	    value: function onWheel(e, delta, deltaX, deltaY) {
	
	      e.stopPropagation();
	
	      if (deltaY < 0) {
	
	        this.cur -= 10;
	        if (this.cur < this.min) this.cur = this.min;
	
	        TweenMax.to(this.$menu.find('.menuInner'), 0.7, {
	          y: this.cur,
	          ease: Power1.easeOut
	        });
	      } else {
	
	        this.cur += 10;
	        if (this.cur > this.max) this.cur = this.max;
	
	        TweenMax.to(this.$menu.find('.menuInner'), 0.7, {
	          y: this.cur,
	          ease: Power1.easeOut
	        });
	      }
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	
	      // logo色戻す
	      TweenMax.to($('#header .logo svg path'), 0.5, {
	        fill: '#fff'
	      });
	
	      // ボタン色戻す
	      TweenMax.to(this.$btn.find('.top'), 0.5, {
	        backgroundColor: '#fff'
	      });
	      TweenMax.to(this.$btn.find('.middle'), 0.5, {
	        backgroundColor: 'rgba(255,255,255,1)'
	      });
	      TweenMax.to(this.$btn.find('.bottom'), 0.5, {
	        backgroundColor: '#fff'
	      });
	    }
	  }, {
	    key: 'switchActive',
	    value: function switchActive(num) {
	
	      $('#menu .menuList .item').removeClass('isActive');
	
	      if (num == -1) return;
	      $('#menu .menuList .item').eq(num).addClass('isActive');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$btn.on('click', this.toggle.bind(this));
	      // this.$close.on('click', this.close.call(self);});
	
	      gb.in.r.add('menu', this.onResize.bind(this));
	
	      // マウスホイールで移動
	      this.$menu.on('mousewheel', function (e, delta, deltaX, deltaY) {
	        self.onWheel.call(self, e, delta, deltaX, deltaY);
	      });
	    }
	  }]);
	
	  return Menu;
	}();
	
	exports.default = Menu;

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  MenuBtn
	//
	//--------------------------------------------------
	
	var MenuBtn = function () {
	  function MenuBtn($wrap, id) {
	    var closeFlag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	    _classCallCheck(this, MenuBtn);
	
	    this.$wrap = $wrap;
	    this.id = id;
	
	    this.closeFlag = closeFlag;
	
	    this.isStop = true;
	    this.isOpen = false;
	
	    this.onClose = function () {};
	
	    this.setup();
	  }
	
	  _createClass(MenuBtn, [{
	    key: 'setup',
	    value: function setup(param) {
	
	      if (!this.closeFlag) {
	
	        this.dom = '<div class="icon-animation type-4 menuBtn' + this.id + '">' + '<span class="top"></span>' + '<span class="middle"></span>' + '<span class="bottom"></span>' + '</div>';
	      } else {
	
	        this.dom = '<div class="icon-animation type-4 menuBtn' + this.id + ' is-open">' + '<span class="top"></span>' + '<span class="middle"></span>' + '<span class="bottom"></span>' + '</div>';
	      }
	
	      this.$wrap.append(this.dom);
	      this.$target = $('.menuBtn' + this.id);
	
	      this.setEvents();
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	
	      // if (this.isStop) return;
	
	      // 閉じる
	      this.$target.toggleClass('is-open');
	
	      // 開いていたらコールバック処理
	      if (this.isOpen) this.onClose();
	
	      // flag変更
	      this.isOpen = !this.isOpen;
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	
	      // 閉じる
	      this.$target.removeClass('is-open');
	
	      // flag変更
	      this.isOpen = false;
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      this.$target.on('click', this.toggle.bind(this));
	    }
	  }]);
	
	  return MenuBtn;
	}();
	
	exports.default = MenuBtn;

/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Alert
	//
	//--------------------------------------------------
	
	// 500px以下になったら表示
	//   時計count
	//   canvas表示
	
	var Alert = function () {
	  function Alert() {
	    _classCallCheck(this, Alert);
	
	    this.$target = $('#alert');
	    this.$h01 = this.$target.find('.h01');
	    this.$h02 = this.$target.find('.h02');
	    this.$m01 = this.$target.find('.m01');
	    this.$m02 = this.$target.find('.m02');
	
	    this.isAlert = gb.in.r.ws.h < 500 ? true : false;
	
	    this.setup();
	    if (gb.in.u.isPC) this.setEvents();
	  }
	
	  _createClass(Alert, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'update',
	    value: function update() {
	
	      gb.in.u.time();
	
	      log(gb.in.u.hour, gb.in.u.minute, gb.in.u.second);
	
	      var h = gb.in.u.add0(gb.in.u.hour).split('');
	      var m = gb.in.u.add0(gb.in.u.minute).split('');
	      var s = gb.in.u.add0(gb.in.u.second).split('');
	
	      this.$h01.text(h[0]);
	      this.$h02.text(h[1]);
	      this.$m01.text(m[0]);
	      this.$m02.text(m[1]);
	
	      // this.$h01.text(s[0])
	      // this.$h02.text(s[1])
	      // this.$m01.text(s[0]);
	      // this.$m02.text(s[1]);
	    }
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      // alert画面表示
	      if (gb.in.r.ws.h <= 500 && this.isAlert) {
	
	        this.isAlert = false;
	
	        gb.in.up.add('time', this.update.bind(this));
	
	        // alert UI表示
	        this.$target.show();
	
	        // コンマの表示非表示
	        var tl = new TimelineMax({ repeat: -1 });
	
	        tl.set(this.$target.find('.colon'), { opacity: 0 }).to(this.$target.find('.colon'), 0.5, { opacity: 1, ease: Power2.easeInOut }).to(this.$target.find('.colon'), 0.5, { opacity: 0, ease: Power2.easeInOut });
	      }
	
	      // alert画面非表示
	      if (gb.in.r.ws.h > 500 && !this.isAlert) {
	
	        this.isAlert = true;
	
	        gb.in.up.remove('time');
	
	        TweenMax.killTweensOf(this.$target.find('.colon'));
	
	        // alert UI非表示
	        this.$target.hide();
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('alert', this.onResize.bind(this));
	    }
	  }]);
	
	  return Alert;
	}();
	
	exports.default = Alert;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  SideR
	//
	//--------------------------------------------------
	
	// ページ 指標を持つ gb.in.u.page
	//    ページリストの配列かな list = [top,movie,,,
	// 番号変更
	// ページ名変更
	// スクロール表示・非表示
	//     blurで消えるなどはあり
	
	var _HoverEffectBack = __webpack_require__(97);
	
	var _HoverEffectBack2 = _interopRequireDefault(_HoverEffectBack);
	
	var _PageScroll = __webpack_require__(64);
	
	var _PageScroll2 = _interopRequireDefault(_PageScroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SideR = function () {
	  function SideR(param) {
	    _classCallCheck(this, SideR);
	
	    this.cur = -1;
	    this.$cur = $('#sideR .indicator .current');
	
	    this.$pageName = $('#sideR .tit');
	
	    this.$next = $('#sideR .next');
	    this.$back = $('#sideR .back');
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(SideR, [{
	    key: 'setup',
	    value: function setup() {
	
	      new _HoverEffectBack2.default($('#sideR .back'));
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	
	      this.changeCur();
	      this.changePageName();
	      this.changeNext();
	    }
	
	    // ページから離れるとき
	
	  }, {
	    key: 'outNum',
	    value: function outNum() {
	      var _this = this;
	
	      if (gb.in.u.isResSP) return;
	
	      TweenMax.to(this.$cur, 0.9, { top: -20, opacity: 0,
	        ease: Power4.easeOut,
	        onComplete: function onComplete() {
	          TweenMax.set(_this.$cur, { top: 10, opacity: 0 });
	        }
	      });
	    }
	
	    // ページへ入るとき
	
	  }, {
	    key: 'inNum',
	    value: function inNum() {
	
	      if (gb.in.u.isResSP) return;
	
	      this.changeNum();
	    }
	  }, {
	    key: 'changeNum',
	    value: function changeNum() {
	
	      var id = gb.in.pjax.id;
	
	      switch (id) {
	
	        case 'top':
	
	          this.cur = 1;
	          this.$cur.text(this.cur);
	          this.$cur.show();
	
	          break;
	
	        case 'movie':
	
	          this.cur = 2;
	          this.$cur.text(this.cur);
	          this.$cur.show();
	
	          break;
	
	        case 'interview':
	
	          this.cur = 3;
	          this.$cur.text(this.cur);
	          this.$cur.show();
	
	          break;
	
	        case 'interview_detail':
	
	          this.$cur.hide();
	
	          break;
	
	        case 'history':
	
	          this.cur = 4;
	          this.$cur.text(this.cur);
	          this.$cur.show();
	
	          break;
	
	      }
	
	      TweenMax.to(this.$cur, 0.6, { top: -7, opacity: 1, ease: Expo.easeOut });
	    }
	
	    // ページから離れるとき
	
	  }, {
	    key: 'outPageName',
	    value: function outPageName() {
	
	      TweenMax.to(this.$pageName, 0.9, { x: 100, rotationZ: -90, opacity: 0, ease: Power3.easeOut });
	    }
	
	    // ページへ入るとき
	
	  }, {
	    key: 'inPageName',
	    value: function inPageName() {
	
	      this.changePageName();
	    }
	  }, {
	    key: 'changePageName',
	    value: function changePageName() {
	
	      var id = gb.in.pjax.id;
	
	      switch (id) {
	
	        case 'top':
	
	          this.$pageName.text('');
	
	          break;
	
	        case 'movie':
	
	          this.$pageName.text('Movie');
	
	          break;
	
	        case 'interview':
	
	          this.$pageName.text('Interview');
	
	          break;
	
	        case 'interview_detail':
	
	          this.$pageName.text('Interview');
	
	          break;
	
	        case 'history':
	
	          this.$pageName.text('Watch & History');
	
	          break;
	
	      }
	
	      TweenMax.to(this.$pageName, 0.6, { x: 0, rotationZ: -90, opacity: 1, ease: Power3.easeOut });
	    }
	
	    // ページから離れるとき backも
	
	  }, {
	    key: 'outNext',
	    value: function outNext() {
	
	      TweenMax.to(this.$next, 0.9, { x: 100, opacity: 0, ease: Power3.easeOut }); //sideR next
	      TweenMax.to(this.$back, 0.9, { x: 120, opacity: 0, ease: Power3.easeOut }); //sideR back
	
	      TweenMax.to($('#sideL .sns.pc'), 0.9, { left: -10, opacity: 0, ease: Power3.easeOut }); // sideL sns pc
	    }
	
	    // ページへ入るとき
	
	  }, {
	    key: 'inNext',
	    value: function inNext() {
	
	      this.changeNext();
	    }
	  }, {
	    key: 'changeNext',
	    value: function changeNext() {
	
	      var id = gb.in.pjax.id;
	
	      switch (id) {
	
	        case 'top':
	
	          this.$next.hide();
	          TweenMax.to($('#sideL .sns.pc'), 0.6, { left: 40, opacity: 1, delay: 1.3, ease: Power3.easeOut });
	
	          TweenMax.to($('#header .subTit'), 0.6, { // header subTit 隠す
	            y: -60,
	            opacity: 0,
	            ease: Power3.easeOut,
	            onComplete: function onComplete() {
	              $('#header .subTit').css('display', 'none');
	            }
	          });
	
	          break;
	
	        case 'movie':
	
	          this.$next.find('.text').text('Interview');
	          this.$next.parent().attr({ 'href': '/interview/' });
	          this.$next.show();
	
	          TweenMax.to($('#header .subTit'), 0.6, { // header subTit 隠す
	            y: -60,
	            opacity: 0,
	            ease: Power3.easeOut,
	            onComplete: function onComplete() {
	              $('#header .subTit').css('display', 'none');
	            }
	          });
	
	          break;
	
	        case 'interview':
	
	          this.$next.find('.text').text('Watch & History');
	          this.$next.parent().attr({ 'href': '/history/' });
	          this.$next.show();
	
	          TweenMax.set($('#header .subTit'), { 'display': 'block' }); // header subTit
	          TweenMax.to($('#header .subTit'), 0.6, { y: 0, opacity: 1, ease: Power3.easeOut }); // header subTit
	
	          break;
	
	        case 'interview_detail':
	
	          this.$next.find('.text').text('SCROLL');
	          this.$next.parent().attr({ 'href': '#contentsStart' });
	          this.$next.show();
	
	          TweenMax.to(this.$back, 0.6, { x: 0, opacity: 1, ease: Power3.easeOut }); // back
	
	          TweenMax.set($('#header .subTit'), { 'display': 'block' }); // header subTit
	          TweenMax.to($('#header .subTit'), 0.6, { y: 0, opacity: 1, ease: Power3.easeOut }); // header subTit
	
	          new _PageScroll2.default();
	
	          break;
	
	        case 'history':
	
	          this.$next.find('.text').text('SCROLL');
	          this.$next.parent().attr({ 'href': '#contentsStart' });
	          this.$next.show();
	
	          TweenMax.set($('#header .subTit'), { 'display': 'block' }); // header subTit
	          TweenMax.to($('#header .subTit'), 0.6, { y: 0, opacity: 1, ease: Power3.easeOut }); // header subTit
	
	          new _PageScroll2.default();
	
	          break;
	
	      }
	
	      TweenMax.to(this.$next, 0.6, { x: 0, opacity: 1, ease: Power3.easeOut });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return SideR;
	}();
	
	exports.default = SideR;

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectBack
	//
	//--------------------------------------------------
	
	var HoverEffectBack = function () {
	  function HoverEffectBack($target) {
	    _classCallCheck(this, HoverEffectBack);
	
	    this.$target = $target;
	
	    // motion
	    this.tl = new TimelineMax();
	
	    // スマホのときは処理しない
	    if (gb.in.u.isPC) this.setEvents();
	  }
	
	  _createClass(HoverEffectBack, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      if (gb.in.u.isResSP) return;
	
	      if (this.tl02) this.tl02.kill();
	      this.tl01 = new TimelineMax();
	
	      this.tl01.to($(that).find('span'), 0.4, {
	        x: 20,
	        ease: Power4.easeOut
	      }).to($(that).find('.bar'), 0.4, {
	        width: 50,
	        ease: Power4.easeOut
	      }, '-=0.37');
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      if (gb.in.u.isResSP) return;
	
	      if (this.tl01) this.tl01.kill();
	      this.tl02 = new TimelineMax();
	
	      this.tl02.to($(that).find('.bar'), 0.5, {
	        width: 70,
	        ease: Power4.easeOut
	      }).to($(that).find('span'), 0.5, {
	        x: 0,
	        ease: Power4.easeOut
	      }, '-=0.45');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).on('mouseenter', function (e) {
	          self.onEnter.call(self, this);
	        });
	        $(this).on('mouseleave', function (e) {
	          self.onLeave.call(self, this);
	        });
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).off('mouseenter');
	        $(this).off('mouseleave');
	      });
	    }
	  }]);
	
	  return HoverEffectBack;
	}();
	
	exports.default = HoverEffectBack;

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Time
	//
	//--------------------------------------------------
	
	var Time = function () {
	  function Time() {
	    _classCallCheck(this, Time);
	
	    this.isState = '';
	    this.stateList = ['morning', 'afternoon', 'night'];
	
	    this.setup();
	    this.setEvents();
	
	    this.judgeState();
	  }
	
	  _createClass(Time, [{
	    key: 'setup',
	    value: function setup() {
	
	      log(gb.in.u.date());
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      gb.in.u.time();
	
	      log(gb.in.u.hour, gb.in.u.minute, gb.in.u.second);
	    }
	  }, {
	    key: 'getNow',
	    value: function getNow() {}
	
	    // ニューヨーク時間の取得
	
	  }, {
	    key: 'getNowAtNY',
	    value: function getNowAtNY() {
	
	      gb.in.u.time();
	      var hour = gb.in.u.hour;
	      var dis = 13; // ニューヨークとの時差
	
	      hour = hour - dis;
	      if (hour < 0) hour = 24 + hour;
	
	      return hour;
	    }
	
	    // 朝夕夜判定
	
	  }, {
	    key: 'judgeState',
	    value: function judgeState() {
	
	      var h = this.getNowAtNY();
	
	      // 朝 6〜15
	      if (6 <= h && h <= 15) {
	
	        this.isState = this.stateList[0];
	
	        // 夕 16〜20
	      } else if (15 < h && h <= 20) {
	
	        this.isState = this.stateList[1];
	
	        // 夜 21〜5
	      } else if (20 < h && h <= 23 || 0 <= h && h <= 5) {
	
	        this.isState = this.stateList[2];
	      }
	
	      // log(this.isState);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // gb.in.up.add(this.update.bind(this));
	
	    }
	  }]);
	
	  return Time;
	}();
	
	exports.default = Time;

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  ScrollTransition
	//
	//--------------------------------------------------
	
	var ScrollTransition = function () {
	  function ScrollTransition($target) {
	    _classCallCheck(this, ScrollTransition);
	
	    this.pageList = {
	      'top': 0,
	      'movie': 1,
	      'interview': 2,
	      'history': 3
	    };
	
	    // variable
	    this.current = 0;
	    this.old = null;
	    this.next = 1;
	    this.prev = null;
	    this.len = 4;
	
	    this.isSwitch = true;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(ScrollTransition, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'switch',
	    value: function _switch() {
	      var _this = this;
	
	      if (!gb.in.u.isIE) var val = 30;else var val = 0;
	
	      // log(gb.in.pjax.isPjaxLock,this.STAmount,this.current,this.isSwitch);
	
	      // pjaxlock時は処理しない
	      if (gb.in.pjax.isPjaxLock) return;
	
	      // ページ番号を取得
	      this.current = this.pageList[gb.in.pjax.id];
	
	      //ホイールが0以上 かつ currentが一番最初でない かつ switch可能状態であれば
	      if (this.STAmount > val && this.current > 0 && this.isSwitch) {
	
	        // historyページのときは上スクロールしてもinterview indexに飛ばさない
	        if (gb.in.pjax.id == 'history') return;
	
	        this.isSwitch = false;
	
	        this.calculateOrder('prev');
	
	        var pageName = Object.keys(this.pageList).filter(function (key) {
	          return _this.pageList[key] === _this.current;
	        })[0];
	
	        $('.pjaxTo_' + pageName).trigger('click');
	
	        //ホイールが0以下 かつ currentが一番最後でない かつ switch可能状態であれば
	      } else if (this.STAmount < -val && this.current < this.len - 1 && this.isSwitch) {
	
	        this.isSwitch = false;
	
	        this.calculateOrder('next');
	
	        var pageName = Object.keys(this.pageList).filter(function (key) {
	          return _this.pageList[key] === _this.current;
	        })[0];
	
	        $('.pjaxTo_' + pageName).trigger('click');
	      };
	    }
	  }, {
	    key: 'calculateOrder',
	    value: function calculateOrder(dir) {
	
	      this.old = this.current;
	
	      if (dir == 'next') {
	
	        this.current++;
	        if (this.current > this.len - 1) this.current = this.len - 1;
	        this.next = this.current + 1;
	        this.prev = this.current - 1;
	      } else {
	
	        this.current--;
	        if (this.current < 0) this.current = 0;
	        this.next = this.current + 1;
	        this.prev = this.current - 1;
	      }
	    }
	  }, {
	    key: 'onMouseWheel',
	    value: function onMouseWheel(e, delta, deltaX, deltaY) {
	
	      // menuが開いているときはスクロール遷移させない
	      if (gb.in.menu.isOpen) return;
	      // res spのときは処理しない
	      if (gb.in.u.isResSP) return;
	
	      this.STAmount = gb.in.s.STAmount;
	
	      this.switch();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.s.add('ScrollTransition', this.onMouseWheel.bind(this));
	    }
	  }]);
	
	  return ScrollTransition;
	}();
	
	exports.default = ScrollTransition;

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Slider sss
	//
	//--------------------------------------------------
	
	var Slider = function () {
	  function Slider($wrap) {
	    _classCallCheck(this, Slider);
	
	    // dom
	    this.$img = $wrap.find('.slider .item');
	    this.$overlay = $wrap.find('.overlay');
	
	    this.current = 0;
	    this.old = null;
	    this.next = 1;
	    this.prev = null;
	    this.len = this.$img.length;
	
	    this.Timer = null;
	
	    this.setup();
	    // this.setEvents();
	  }
	
	  _createClass(Slider, [{
	    key: 'setup',
	    value: function setup() {}
	
	    // this.switchDetails();
	
	    // this.s = new Swipe();
	    // this.s.onNext = this.right.bind(this);
	    // this.s.onPrev = this.left.bind(this);
	
	    // 右へ
	
	  }, {
	    key: 'right',
	    value: function right() {
	
	      // if (this.current == this.len - 1) return;
	
	      var tl = new TimelineMax();
	
	      // flash
	      // tl
	      //   // 白く
	      //   .set(this.$overlay, {opacity: 1})
	      //   .to(this.$overlay, 1.0, {
	      //     opacity: 0,
	      //     ease: Power3.easeOut,
	      //     onStart: ()=>{
	
	      //       // next
	      //       TweenMax.set(this.$img.eq(this.next), {opacity: 1});
	
	      //       // current
	      //       TweenMax.set(this.$img.eq(this.current), {opacity: 0});
	
	      //     }
	      //   })
	
	      tl.set(this.$img.eq(this.next), { x: 60 }).to(this.$img.eq(this.next), 0.6, {
	        opacity: 1,
	        x: 0,
	        ease: Power3.easeOut
	      }).to(this.$img.eq(this.current), 0.6, {
	        opacity: 0,
	        x: -60,
	        ease: Power3.easeOut
	      }, '-=0.3');
	
	      // currentの計算
	      this.calculateOrder('right');
	
	      // textの変更
	      // this.switchDetails();
	
	      // indicatorの変更
	      // this.switchIndicator();
	    }
	
	    // 左へ
	
	  }, {
	    key: 'left',
	    value: function left() {
	
	      // if (this.current == 0) return;
	
	      var tl = new TimelineMax();
	
	      // tl
	      //   // 白く
	      //   .set(this.$overlay, {opacity: 1})
	      //   .to(this.$overlay, 0.6, {
	      //     opacity: 0,
	      //     onStart: ()=>{
	
	      //       // next
	      //       TweenMax.set(this.$img.eq(this.prev), {opacity: 1});
	
	      //       // current
	      //       TweenMax.set(this.$img.eq(this.current), {opacity: 0});
	
	      //     }
	      //   })
	
	      tl.set(this.$img.eq(this.prev), { x: -60 }).to(this.$img.eq(this.prev), 0.6, {
	        opacity: 1,
	        x: 0,
	        ease: Power3.easeOut
	      }).to(this.$img.eq(this.current), 0.6, {
	        opacity: 0,
	        x: 60,
	        ease: Power3.easeOut
	      }, '-=0.3');
	
	      // currentの計算
	      this.calculateOrder('left');
	
	      // textの変更
	      // this.switchDetails();
	
	      // indicatorの変更
	      // this.switchIndicator();
	    }
	  }, {
	    key: 'swicthArrow',
	    value: function swicthArrow() {
	
	      // 右端
	      if (this.current == this.len - 1) {
	
	        var src = this.$arrowR.attr('src');
	        src = gb.in.u.strReplace(src, '_on', '_off');
	        this.$arrowR.attr('src', src);
	
	        // 左端
	      } else if (this.current == 0) {
	
	        var src = this.$arrowL.attr('src');
	        src = gb.in.u.strReplace(src, '_on', '_off');
	        this.$arrowL.attr('src', src);
	      } else {
	
	        var src = this.$arrowL.attr('src');
	        src = gb.in.u.strReplace(src, '_off', '_on');
	        this.$arrowL.attr('src', src);
	
	        var src = this.$arrowR.attr('src');
	        src = gb.in.u.strReplace(src, '_off', '_on');
	        this.$arrowR.attr('src', src);
	      }
	    }
	  }, {
	    key: 'switchDetails',
	    value: function switchDetails() {
	
	      var t = this.textList[this.current];
	      var p = this.priceList[this.current];
	
	      this.$text.html(t);
	      this.$price.text(p);
	    }
	  }, {
	    key: 'switchIndicator',
	    value: function switchIndicator() {
	
	      this.$indicator.removeClass('isActive').eq(this.current).addClass('isActive');
	    }
	  }, {
	    key: 'calculateOrder',
	    value: function calculateOrder(dir) {
	
	      this.old = this.current;
	
	      // 端で止める
	      // if (dir=='right') {
	
	      //   this.current++;
	      //   if (this.current>this.len-1) this.current=this.len-1;
	      //   this.next = this.current+1;
	      //   this.prev = this.current-1;
	
	      // } else {
	
	      //   this.current--;
	      //   if (this.current<0) this.current=0;  
	      //   this.next = this.current+1;
	      //   this.prev = this.current-1;
	
	      // }
	
	      // ループ
	      if (dir == 'right') {
	
	        this.current++;
	
	        if (this.current > this.len - 1) {
	
	          this.current = 0;
	          this.next = this.current + 1;
	          this.prev = this.len - 1;
	          log(this.current);
	          log(this.next);
	        } else {
	
	          this.next = this.current + 1;
	          this.prev = this.current - 1;
	        }
	
	        if (this.current == this.len - 1) {
	
	          this.next = 0;
	          this.prev = this.current - 1;
	        }
	      } else {
	
	        this.current--;
	        if (this.current < 0) {
	
	          this.current = this.len - 1;
	          this.next = 0;
	          this.prev = this.current - 1;
	        } else {
	
	          this.next = this.current + 1;
	          this.prev = this.current - 1;
	        }
	      }
	
	      // avtiveにするかしないかの処理    
	      // arrow
	      // this.swicthArrow();
	    }
	  }, {
	    key: 'autoSwicth',
	    value: function autoSwicth() {
	      var _this = this;
	
	      this.right();
	
	      this.Timer = setTimeout(function () {
	
	        _this.autoSwicth();
	      }, 5000);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      // this.$arrowL.on('click', this.left.bind(this));
	      // this.$arrowR.on('click', this.right.bind(this));
	      this.autoSwicth();
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      clearTimeout(this.Timer);
	      this.right();
	    }
	  }]);
	
	  return Slider;
	}();
	
	exports.default = Slider;

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  Nav
	//
	//--------------------------------------------------
	
	var Nav = function () {
	  function Nav(param) {
	    _classCallCheck(this, Nav);
	
	    this.isLock = gb.in.u.isResSP ? false : true;
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Nav, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	
	    // ページから離れるとき
	
	  }, {
	    key: 'outPage',
	    value: function outPage() {
	
	      if (gb.in.u.isResPC) {
	
	        // nav barも
	        TweenMax.to($('#nav .bar'), 0.75, { x: 120, ease: Expo.easeInOut });
	      }
	    }
	  }, {
	    key: 'inPage',
	    value: function inPage() {
	
	      // nav barの変更
	      if (gb.in.u.isResPC) {
	
	        var id = gb.in.pjax.id;
	
	        switch (id) {
	          case 'top':
	            this.cur = 1;
	            break;
	          case 'movie':
	            this.cur = 2;
	            break;
	          case 'interview':
	            this.cur = 3;
	            break;
	          case 'interview_detail':
	            this.cur = 3;
	            break;
	          case 'history':
	            this.cur = 4;
	            break;
	        }
	
	        if (this.cur == 1) var w = 40;
	        if (this.cur == 2) var w = 42;
	        if (this.cur == 3) var w = 64;
	        if (this.cur == 4) var w = 112;
	
	        // nav barも
	        var tl = new TimelineMax();
	
	        // active変更
	        $('#nav .item').removeClass('isActive').eq(this.cur - 1).addClass('isActive');
	
	        tl.set($('#nav .isActive .bar'), { x: 0, width: 0, ease: Expo.easeInOut }).to($('#nav .isActive .bar'), 0.75, { width: w, ease: Expo.easeInOut });
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      if (gb.in.u.isResSP && !this.isLock) {
	        this.isLock = true;
	
	        var id = gb.in.pjax.id;
	
	        switch (id) {
	
	          case 'top':
	
	            var op = 1;
	
	            break;
	
	          case 'movie':
	
	            var op = 0;
	
	            break;
	
	          case 'interview':
	
	            var op = 0;
	
	            break;
	
	          case 'interview_detail':
	
	            var op = 0;
	
	            break;
	
	          case 'history':
	
	            var op = 0;
	
	            break;
	
	        }
	
	        TweenMax.set($('#nav'), { opacity: op });
	      };
	
	      if (gb.in.u.isResPC && this.isLock) {
	        this.isLock = false;
	
	        var id = gb.in.pjax.id;
	
	        switch (id) {
	
	          case 'top':
	
	            var op = 1;
	
	            break;
	
	          case 'movie':
	
	            var op = 1;
	
	            break;
	
	          case 'interview':
	
	            var op = 1;
	
	            break;
	
	          case 'interview_detail':
	
	            var op = 1;
	
	            break;
	
	          case 'history':
	
	            var op = 1;
	
	            break;
	
	        }
	
	        TweenMax.set($('#nav'), { opacity: op });
	      };
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('Nav', this.onResize.bind(this));
	    }
	  }]);
	
	  return Nav;
	}();
	
	exports.default = Nav;

/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  DisplayOpening
	//
	//--------------------------------------------------
	
	var DisplayOpening = function () {
	  function DisplayOpening() {
	    _classCallCheck(this, DisplayOpening);
	
	    this.setup();
	    this.showPage();
	    this.effect();
	  }
	
	  _createClass(DisplayOpening, [{
	    key: 'setup',
	    value: function setup() {
	
	      // gb.in.Layout.size.scale.run();
	      gb.in.rm.readyPercent.remove();
	
	      // sideR変更
	      gb.in.sideR.inNum();
	      gb.in.sideR.inPageName();
	      gb.in.sideR.inNext();
	      gb.in.nav.inPage();
	
	      // 予め演出canvasのsetupをしておく
	      gb.in.Sec02Bg.create();
	    }
	  }, {
	    key: 'showPage',
	    value: function showPage() {
	
	      // 各ページopening
	      var id = gb.in.pjax.id;
	
	      switch (id) {
	
	        case 'top':
	
	          gb.in.menu.switchActive(0);
	          break;
	
	        case 'movie':
	
	          gb.in.Sec02Bg.play();
	          gb.in.menu.switchActive(1);
	
	          // sideL
	          var tl02 = new TimelineMax();
	          tl02.set($('#sideL .sns.sp'), { display: 'block' }).to($('#sideL .sns.sp'), 1.2, { opacity: 1 });
	
	          break;
	
	        case 'interview':
	
	          gb.in.menu.switchActive(2);
	          var tl = new TimelineMax();
	          tl.set($('#header .subTit'), { display: 'block' }).to($('#header .subTit'), 0.5, { opacity: 1 });
	
	          // sideL
	          var tl02 = new TimelineMax();
	          tl02.set($('#sideL .sns.sp'), { display: 'block' }).to($('#sideL .sns.sp'), 1.2, { opacity: 1 });
	
	          break;
	
	        case 'interview_detail':
	
	          gb.in.menu.switchActive(-1);
	          var tl = new TimelineMax();
	          tl.set($('#header .subTit'), { display: 'block' }).to($('#header .subTit'), 0.5, { opacity: 1 });
	
	          break;
	
	        case 'history':
	
	          gb.in.menu.switchActive(3);
	          var tl = new TimelineMax();
	          tl.set($('#header .subTit'), { display: 'block' }).to($('#header .subTit'), 0.5, { opacity: 1 });
	
	          // sideL
	          var tl02 = new TimelineMax();
	          tl02.set($('#sideL .sns.sp'), { display: 'block' }).to($('#sideL .sns.sp'), 1.2, { opacity: 1 });
	
	          break;
	
	      }
	    }
	  }, {
	    key: 'effect',
	    value: function effect() {
	
	      // 時計エフェクトで表示   
	      gb.in.pageTransitionEffect.openingEffect();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return DisplayOpening;
	}();
	
	exports.default = DisplayOpening;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  PageTransitionController
	//
	//--------------------------------------------------
	
	var _PageTransition = __webpack_require__(104);
	
	var _PageTransition2 = _interopRequireDefault(_PageTransition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PageTransitionController = function () {
	  function PageTransitionController($wrap) {
	    _classCallCheck(this, PageTransitionController);
	
	    this.cb = function () {};
	
	    this.$wrap = $wrap;
	    this.setup($wrap);
	    this.setEvents();
	  }
	
	  _createClass(PageTransitionController, [{
	    key: 'setup',
	    value: function setup($wrap) {
	
	      this.effect = new _PageTransition2.default($wrap);
	      // サイズ調整
	      this.effect.onResize();
	
	      this.effect.cb = this.cb;
	
	      // this.$wrap.hide();
	
	      // 最初からcanvasの黒を見せる
	      this.effect.isStart = true;
	      this.effect.setParamInEf(); // 最初から黒幕設定のためのパラム
	
	      // canvasの黒を見せたら、loadingの黒は無くす
	      TweenMax.to($('#loading'), 0.3, {
	        backgroundColor: 'rgba(0,0,0,0)',
	        ease: Power2.easeOut
	      });
	    }
	  }, {
	    key: 'openingEffect',
	    value: function openingEffect() {
	
	      this.$wrap.show();
	      this.effect.isStart = true;
	      this.effect.openingEffect();
	    }
	  }, {
	    key: 'inEffect',
	    value: function inEffect() {
	
	      this.$wrap.show();
	      this.effect.isStart = true;
	      this.effect.inEffect();
	    }
	  }, {
	    key: 'outEffect',
	    value: function outEffect() {
	
	      this.effect.cb = this.cb;
	      this.$wrap.show();
	      this.effect.isStart = true;
	      this.effect.outEffect();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	
	      this.$wrap.hide();
	      this.effect.isStart = false;
	      // this.effect.timeline();
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {}
	  }]);
	
	  return PageTransitionController;
	}();
	
	exports.default = PageTransitionController;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  PageTransitionEffect
	//
	//--------------------------------------------------
	
	var _Point = __webpack_require__(105);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _TopOpening = __webpack_require__(106);
	
	var _TopOpening2 = _interopRequireDefault(_TopOpening);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PageTransitionEffect = function () {
	  function PageTransitionEffect($wrap) {
	    _classCallCheck(this, PageTransitionEffect);
	
	    this.renderer = null;this.stage = null;
	
	    this.$wrap = $wrap;
	    this.mx = 0;this.my = 0;
	
	    this.radius = 0;
	    this.cnt = 0;
	    this.points = [];
	    this.g = null;
	
	    this.count = 0;
	    this.isStart = false;
	    this.isCUpdate = true;
	
	    this.secondP = 0;
	    this.secondSum = 0;
	    this.secondCnt = 0;
	    this.secondFlag = false;
	
	    this.targetRadius = Math.sqrt(gb.in.r.ws.w * gb.in.r.ws.w + gb.in.r.ws.h * gb.in.r.ws.h);
	    this.hRadius = 0;
	    this.mRadius = 0;
	    this.sRadius = this.targetRadius;
	
	    this.hHandX = 0;
	    this.mHandX = 0;
	    this.sHandX = 0;
	    this.hHandY = 0;
	    this.mHandY = 0;
	    this.sHandY = 0;
	    this.hHandFlag = false;
	    this.mHandFlag = false;
	    this.sHandFlag = false;
	
	    this.hRad = 0;
	    this.mRad = 0;
	    this.sRad = 0;
	
	    this.lineWidth = 1;
	
	    this.startRad01 = Math.PI * 2 / 3 * 0;
	    this.startRad02 = Math.PI * 2 / 3 * 1;
	    this.startRad03 = Math.PI * 2 / 3 * 2;
	    this.startRad04 = Math.PI * 2 / 3 * 0;
	    this.startRad05 = Math.PI * 2 / 3 * 1;
	    this.startRad06 = Math.PI * 2 / 3 * 2;
	    this.endRad01 = Math.PI * 2 / 3 * 0; // pixi.jsは何か描画しないとマスクされない？ 少数の値を入れている
	    this.endRad02 = Math.PI * 2 / 3 * 1;
	    this.endRad03 = Math.PI * 2 / 3 * 2;
	    this.endRad04 = Math.PI * 2 / 3 * 0.00001; // pixi.jsは何か描画しないとマスクされない？ 少数の値を入れている
	    this.endRad05 = Math.PI * 2 / 3 * 1;
	    this.endRad06 = Math.PI * 2 / 3 * 2;
	
	    this.fillBlack = 0x000000;
	    this.fillTiffanyBlue = 0x81d8d0;
	
	    // コールバック
	    this.cb = function () {};
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(PageTransitionEffect, [{
	    key: 'setup',
	    value: function setup() {
	
	      // canvas要素追加
	      this.renderer = PIXI.autoDetectRenderer(gb.in.r.ws.w, gb.in.r.ws.h, { antialias: true, transparent: true });
	      this.$wrap.append(this.renderer.view);
	
	      // create the root of the scene graph
	      this.stage = new PIXI.Container();
	      this.stage.interactive = true;
	
	      this.addObject();
	    }
	  }, {
	    key: 'addObject',
	    value: function addObject() {
	
	      this.container = new PIXI.Container();
	      this.container01 = new PIXI.Container();
	      this.container02 = new PIXI.Container();
	      this.container03 = new PIXI.Container();
	
	      this.mask = new PIXI.Graphics();
	      this.color = new PIXI.Graphics();
	      this.hHand = new PIXI.Graphics();
	      this.mHand = new PIXI.Graphics();
	      this.sHand = new PIXI.Graphics();
	
	      this.color.blendMode = PIXI.BLEND_MODES.ADD;
	
	      this.mask.position.x = 0;
	      this.mask.position.y = 0;
	
	      // this.container02.mask = this.mask;
	
	      this.stage.addChild(this.mask);
	      this.stage.addChild(this.color);
	      this.stage.addChild(this.hHand);
	      this.stage.addChild(this.mHand);
	      this.stage.addChild(this.sHand);
	    }
	  }, {
	    key: 'updateTime',
	    value: function updateTime() {
	
	      gb.in.u.time();
	
	      this.hour = gb.in.u.hour; // 時
	      this.minute = gb.in.u.minute; // 分
	      this.second = gb.in.u.second;
	      this.millSecond = gb.in.u.millSecond / 1000;
	
	      if (this.second == 0 && !this.secondFlag) {
	        this.secondFlag = true;
	        this.secondCnt++;
	      };
	      if (this.second == 1 && this.secondFlag) {
	        this.secondFlag = false;
	      };
	
	      var hourTotal = 12;
	      var minuteTotal = 60;
	      var secondTotal = 60;
	
	      if (this.hour > 12) this.hour = this.hour - 12;
	
	      // pはpercent
	      this.hourP = this.hour / hourTotal;
	      this.minuteP = this.minute / minuteTotal;
	      // this.secondP += (( (this.secondCnt * 60 + this.second + this.millSecond) / secondTotal) - this.secondP) * 0.03;
	      this.secondP = this.second / secondTotal;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.updateTime();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	
	      this.mask.clear();
	      this.color.clear();
	      this.hHand.clear();
	      this.mHand.clear();
	      this.sHand.clear();
	
	      // 何か描かないとマスクが効かないため描く いらないかも
	      this.mask.drawRect(0, 0, 1, 1);
	
	      // 時計
	      this.drawCircle();
	
	      // マスク
	      this.drawCircle01(this.startRad01, this.endRad01);
	      this.drawCircle02(this.startRad02, this.endRad02);
	      this.drawCircle03(this.startRad03, this.endRad03);
	
	      this.drawCircle04(this.startRad04, this.endRad04);
	      this.drawCircle05(this.startRad05, this.endRad05);
	      this.drawCircle06(this.startRad06, this.endRad06);
	
	      // render the stage
	      this.renderer.render(this.stage);
	    }
	  }, {
	    key: 'openingEffect',
	    value: function openingEffect() {
	      var _this = this;
	
	      var tlMain = new TimelineMax();
	
	      // this.setParamInEf();
	
	      tlMain
	      // 線が伸びる
	      .add(function () {
	
	        var tl = new TimelineMax();
	
	        tl;
	        // color
	        // .to(this, 1.3, {
	        //   hRadius: this.getSHandLength(this.hRad),
	        //   ease: Power3.easeInOut
	        // })
	        // // .to(this, 1.0, {
	        // //   mRadius: this.getSHandLength(this.mRad),
	        // //   ease: Power3.easeInOut
	        // // },'-=1.0')
	        // .to(this, 1.0, {
	        //   mRadius: this.getSHandLength(this.mRad),
	        //   ease: Power3.easeInOut
	        // },'=0.0')
	
	
	        // .set(this.mHand, {alpha: 0})
	        // .set(this.sHand, {alpha: 0})
	        // .set(this, {
	        //   hRadius: this.getSHandLength(this.hRad),
	        // })
	        // .to(this, {
	        //   mRadius: this.getSHandLength(this.mRad),
	        // })
	        // .to(this.mHand, 1.5, {
	        //   alpha: 1,
	        //   ease: Power3.easeInOut
	        // })
	        // .to(this.sHand, 1.5, {
	        //   alpha: 1,
	        //   ease: Power3.easeInOut
	        // },'-=1.5')
	
	      })
	
	      // 定位置に
	      .add(function () {
	
	        var tl = new TimelineMax();
	
	        // tl
	        //   // color
	        //   .to(this, 1.0, {
	        //     hRad: Math.PI * 2 / 3 * 0,
	        //     hRad: Math.PI * 2 / 3 * 0,
	        //     ease: Power4.easeOut
	        //   })
	        //   .to(this, 1.0, {
	        //     mRad: Math.PI * 2 / 3 * 1,
	        //     mRad: Math.PI * 2 / 3 * 1,
	        //     ease: Power4.easeOut
	        //   },'-=1.0')
	        //   .to(this, 1.0, {
	        //     sRad: Math.PI * 2 / 3 * 2,
	        //     sRad: Math.PI * 2 / 3 * 2,
	        //     ease: Power4.easeOut,
	        //     onStart: ()=>{
	
	        //     }
	        //   },'-=1.0')
	
	        // setTimeout(()=>{
	
	        //   // 下記の更新を止める
	        //   this.hHandFlag=true;
	        //   this.mHandFlag=true;
	        //   this.sHandFlag=true;
	
	        // },0.3)
	
	      }, '+=0.0')
	
	      // ぐわ
	      .add(function () {
	
	        var tl = new TimelineMax();
	        var tl02 = new TimelineMax();
	        var tl03 = new TimelineMax();
	
	        // ぐわのまえに秒針を消す
	        tl
	        // color
	        // .to(this.hHand, 1.5, {
	        //   alpha: 0,
	        //   ease: Expo.easeInOut
	        // })
	        // .to(this.mHand, 1.5, {
	        //   alpha: 0,
	        //   ease: Expo.easeInOut
	        // },'-=1.5')
	        .to(_this.sHand, 1.6, {
	          alpha: 0,
	          ease: Power4.easeInOut
	        });
	
	        // ぐわ
	        tl02
	        // color
	        .to(_this, 1.8, {
	          startRad04: Math.PI * 2 / 3 * 1,
	          startRad05: Math.PI * 2 / 3 * 2,
	          startRad06: Math.PI * 2 / 3 * 3,
	          ease: Expo.easeInOut,
	          onStart: function onStart() {
	
	            // 各UI表示
	            _this.to = new _TopOpening2.default();
	            if (gb.in.pjax.id == 'top') _this.to.runTop();else _this.to.runOther();
	          },
	          onComplete: function onComplete() {
	
	            _this.$wrap.hide(); // ページ遷移エフェクトレイヤーを隠す
	            _this.isStart = false; // ループを止める 
	
	            gb.in.pjax.isPjaxLock = false;
	          }
	        });
	      }, '+=3.0');
	    }
	  }, {
	    key: 'inEffect',
	    value: function inEffect() {
	      var _this2 = this;
	
	      var tl = new TimelineMax();
	      var tl02 = new TimelineMax();
	
	      this.setParamInEf();
	
	      tl
	      // color
	      .to(this, 1.8, {
	        startRad04: Math.PI * 2 / 3 * 1,
	        startRad05: Math.PI * 2 / 3 * 2,
	        startRad06: Math.PI * 2 / 3 * 3,
	        ease: Expo.easeInOut,
	        onComplete: function onComplete() {
	          _this2.$wrap.hide(); // ページ遷移エフェクトレイヤーを隠す
	          _this2.isStart = false; // ループを止める         
	          gb.in.pjax.isPjaxLock = false;
	
	          if (gb.in.u.isResPC) {
	            TweenMax.to($('#nav'), 1.2, { opacity: 1, ease: Power3.easeOut });
	          } else {
	            // nav
	            if (gb.in.pjax.id == 'top') {
	              TweenMax.to($('#nav'), 1.2, { opacity: 1, ease: Power3.easeOut });
	            };
	          }
	        }
	      });
	    }
	  }, {
	    key: 'outEffect',
	    value: function outEffect() {
	      var _this3 = this;
	
	      var tl = new TimelineMax();
	      var tl02 = new TimelineMax();
	
	      this.setParamOutEf();
	
	      // // 案1
	      tl
	      // color
	      // .to(this, 1.8, {
	      //   endRad01: Math.PI * 2 / 3 * 0 + Math.PI * 0.7,
	      //   endRad02: Math.PI * 2 / 3 * 1 + Math.PI * 0.7,
	      //   endRad03: Math.PI * 2 / 3 * 2 + Math.PI * 0.7,
	      //   ease: Expo.easeInOut
	      // })
	      // .to(this, 1.8, {
	      //   startRad01: Math.PI * 2 / 3 * 0 + Math.PI * 0.35,
	      //   startRad02: Math.PI * 2 / 3 * 1 + Math.PI * 0.35,
	      //   startRad03: Math.PI * 2 / 3 * 2 + Math.PI * 0.35,
	      //   ease: Power3.easeOut
	      // },'-=0.9')
	      .to(this, 1.0, {
	        endRad04: Math.PI * 2 / 3 * 1,
	        endRad05: Math.PI * 2 / 3 * 2,
	        endRad06: Math.PI * 2 / 3 * 3,
	        ease: Expo.easeInOut,
	        onComplete: function onComplete() {
	
	          _this3.cb();
	        }
	      }, '-=0.0');
	
	      tl02;
	      // .to(this, 1.35, {
	      //   endRad01: Math.PI * 2 / 3 * 1,
	      //   endRad02: Math.PI * 2 / 3 * 2,
	      //   endRad03: Math.PI * 2 / 3 * 3,
	      //   ease: Power4.easeOut
	      // },'+=0.95')
	      // .to(this, 1.35, {
	      //   startRad01: Math.PI * 2 / 3 * 1,
	      //   startRad02: Math.PI * 2 / 3 * 2,
	      //   startRad03: Math.PI * 2 / 3 * 3,
	      //   ease: Power4.easeOut
	      // },'-=1.35')
	      // .to(this, 1.35, {
	      //   endRad04: Math.PI * 2 / 3 * 1,
	      //   endRad05: Math.PI * 2 / 3 * 2,
	      //   endRad06: Math.PI * 2 / 3 * 3,
	      //   ease: Power4.easeOut,
	      //   onComplete: ()=>{
	
	      //     this.cb();
	
	      //   }
	      // },'-=1.35')
	    }
	  }, {
	    key: 'setParamOutEf',
	    value: function setParamOutEf() {
	
	      this.startRad01 = Math.PI * 2 / 3 * 0;
	      this.startRad02 = Math.PI * 2 / 3 * 1;
	      this.startRad03 = Math.PI * 2 / 3 * 2;
	      this.startRad04 = Math.PI * 2 / 3 * 0;
	      this.startRad05 = Math.PI * 2 / 3 * 1;
	      this.startRad06 = Math.PI * 2 / 3 * 2;
	      this.endRad01 = Math.PI * 2 / 3 * 0; // pixi.jsは何か描画しないとマスクされない？ 少数の値を入れている
	      this.endRad02 = Math.PI * 2 / 3 * 1;
	      this.endRad03 = Math.PI * 2 / 3 * 2;
	      this.endRad04 = Math.PI * 2 / 3 * 0.00001; // pixi.jsは何か描画しないとマスクされない？ 少数の値を入れている
	      this.endRad05 = Math.PI * 2 / 3 * 1;
	      this.endRad06 = Math.PI * 2 / 3 * 2;
	    }
	  }, {
	    key: 'setParamInEf',
	    value: function setParamInEf() {
	
	      this.startRad04 = Math.PI * 2 / 3 * 0;
	      this.startRad05 = Math.PI * 2 / 3 * 1;
	      this.startRad06 = Math.PI * 2 / 3 * 2;
	      this.endRad04 = Math.PI * 2 / 3 * 1; // pixi.jsは何か描画しないとマスクされない？ 少数の値を入れている
	      this.endRad05 = Math.PI * 2 / 3 * 2;
	      this.endRad06 = Math.PI * 2 / 3 * 3;
	    }
	  }, {
	    key: 'loop',
	    value: function loop() {
	
	      if (this.isStart) {
	
	        this.update();
	        this.draw();
	      };
	    }
	  }, {
	    key: 'drawCircle',
	    value: function drawCircle(rad) {
	
	      this.cx = gb.in.r.ws.w / 2;
	      this.cy = gb.in.r.ws.h / 2;
	
	      // 時針
	
	      // flag後こちらでは更新しない
	      if (!this.hHandFlag) {
	
	        this.hRad = Math.PI * 2 * this.hourP - Math.PI / 2;
	      } else {}
	
	      this.hHandX = this.cx + Math.cos(this.hRad) * this.hRadius;
	      this.hHandY = this.cy + Math.sin(this.hRad) * this.hRadius;
	
	      // this.hHand.lineStyle(this.lineWidth, this.fillTiffanyBlue, 1);
	      this.hHand.lineStyle(4, this.fillTiffanyBlue, 1);
	      this.hHand.moveTo(this.cx, this.cy);
	      this.hHand.lineTo(this.hHandX, this.hHandY);
	
	      this.hHand.endFill();
	
	      // 分針
	      if (!this.mHandFlag) {
	
	        this.mRad = Math.PI * 2 * this.minuteP - Math.PI / 2;
	      } else {}
	
	      this.mHandX = this.cx + Math.cos(this.mRad) * this.mRadius;
	      this.mHandY = this.cy + Math.sin(this.mRad) * this.mRadius;
	
	      // this.mHand.lineStyle(this.lineWidth, 0x81d8d0, 1);
	      this.mHand.lineStyle(2, 0x81d8d0, 1);
	
	      this.mHand.moveTo(this.cx, this.cy);
	      this.mHand.lineTo(this.mHandX, this.mHandY);
	
	      this.mHand.endFill();
	
	      // 秒針
	      if (!this.sHandFlag) {
	
	        this.sRad = Math.PI * 2 * this.secondP - Math.PI / 2;
	      } else {}
	
	      this.sRadius = this.getSHandLength(this.sRad);
	      // log(this.sRadius);
	
	      this.sHandX = this.cx + Math.cos(this.sRad) * this.sRadius * (gb.in.rm.current / 100);
	      this.sHandY = this.cy + Math.sin(this.sRad) * this.sRadius * (gb.in.rm.current / 100);
	
	      // log(this.sRad,this.sRadius,gb.in.rm.current);
	
	      // this.sHand.lineStyle(this.lineWidth, 0x81d8d0, 1);
	      this.sHand.lineStyle(1, 0x81d8d0, 1);
	
	      this.sHand.moveTo(this.cx, this.cy);
	      this.sHand.lineTo(this.sHandX, this.sHandY);
	
	      this.sHand.endFill();
	    }
	  }, {
	    key: 'getSHandLength',
	    value: function getSHandLength(targetRad) {
	
	      var angle = targetRad * 180 / Math.PI;
	      if (angle < 0) angle += 360;
	      angle = angle % 360;
	      var target = 0;
	
	      // 右下の角度
	      var rightBtmAng = Math.atan2(gb.in.r.ws.h - this.cy, gb.in.r.ws.w - this.cx) * 180 / Math.PI;
	      var leftBtmAng = 180 - rightBtmAng;
	      var leftTopAng = rightBtmAng + 180;
	      var rightTopAng = 360 - rightBtmAng;
	
	      if (angle > rightBtmAng && angle < 90) {
	
	        angle = 90 - angle;
	        target = gb.in.r.ws.h / 2 / Math.cos(angle * Math.PI / 180);
	      } else if (angle >= 90 && angle < leftBtmAng) {
	
	        angle = angle - 90;
	        target = gb.in.r.ws.h / 2 / Math.cos(angle * Math.PI / 180);
	      } else if (angle >= leftBtmAng && angle < 180) {
	
	        angle = 180 - angle;
	        target = gb.in.r.ws.w / 2 / Math.cos(angle * Math.PI / 180);
	      } else if (angle >= 180 && angle < leftTopAng) {
	
	        angle = angle - 180;
	        target = gb.in.r.ws.w / 2 / Math.cos(angle * Math.PI / 180);
	      } else if (angle >= leftTopAng && angle < 270) {
	
	        angle = 270 - angle;
	        // console.log(angle);
	        target = gb.in.r.ws.h / 2 / Math.cos(angle * Math.PI / 180);
	        // console.log(target);
	      } else if (angle >= 270 && angle < rightTopAng) {
	
	        angle = angle - 270;
	        // console.log(angle);
	        target = gb.in.r.ws.h / 2 / Math.cos(angle * Math.PI / 180);
	        // console.log(target);
	      } else if (angle >= rightTopAng && angle < 360) {
	
	        angle = 360 - angle;
	        target = gb.in.r.ws.w / 2 / Math.cos(angle * Math.PI / 180);
	      } else if (angle >= 0 && angle < rightBtmAng) {
	
	        angle = angle;
	        target = gb.in.r.ws.w / 2 / Math.cos(angle * Math.PI / 180);
	      };
	
	      return target;
	    }
	  }, {
	    key: 'drawCircle01',
	    value: function drawCircle01(startRad, endRad) {
	
	      var radius = $(window).height() * 10; // 暫定
	      // var radian = rad % Math.PI * 2;
	
	      // var rx = Math.cos(radian) * radius;
	      // var ry = Math.sin(radian) * radius;
	
	      this.color.beginFill(this.fillTiffanyBlue, 1);
	      // this.color.lineStyle(2, 0xFF00FF, 1);
	
	      this.color.moveTo(this.cx, this.cy);
	      this.color.arc(this.cx, this.cy, radius, startRad, endRad);
	
	      this.color.endFill();
	    }
	  }, {
	    key: 'drawCircle02',
	    value: function drawCircle02(startRad, endRad) {
	
	      var radius = $(window).height() * 10; // 暫定
	      // var radian = rad % Math.PI * 2;
	
	      // var rx = Math.cos(radian) * radius;
	      // var ry = Math.sin(radian) * radius;
	
	      this.color.beginFill(this.fillTiffanyBlue, 1);
	      // this.color.lineStyle(2, 0xFF00FF, 1);
	
	      this.color.moveTo(this.cx, this.cy);
	      this.color.arc(this.cx, this.cy, radius, startRad, endRad);
	
	      this.color.endFill();
	    }
	  }, {
	    key: 'drawCircle03',
	    value: function drawCircle03(startRad, endRad) {
	
	      var radius = $(window).height() * 10; // 暫定
	      // var radian = rad % Math.PI * 2;
	
	      // var rx = Math.cos(radian) * radius;
	      // var ry = Math.sin(radian) * radius;
	
	      this.color.beginFill(this.fillTiffanyBlue, 1);
	      // this.color.lineStyle(2, 0xFF00FF, 1);
	
	      this.color.moveTo(this.cx, this.cy);
	      this.color.arc(this.cx, this.cy, radius, startRad, endRad);
	
	      this.color.endFill();
	    }
	  }, {
	    key: 'drawCircle04',
	    value: function drawCircle04(startRad, endRad) {
	
	      var radius = $(window).height() * 10; // 暫定
	      // var radian = rad % Math.PI * 2;
	
	      // var rx = Math.cos(radian) * radius;
	      // var ry = Math.sin(radian) * radius;
	
	      this.mask.beginFill(this.fillBlack, 1);
	      // this.mask.lineStyle(2, 0xFF00FF, 1);
	
	      this.mask.moveTo(this.cx, this.cy);
	      this.mask.arc(this.cx, this.cy, radius, startRad, endRad);
	
	      this.mask.endFill();
	    }
	  }, {
	    key: 'drawCircle05',
	    value: function drawCircle05(startRad, endRad) {
	
	      var radius = $(window).height() * 10; // 暫定
	      // var radian = rad % Math.PI * 2;
	
	      // var rx = Math.cos(radian) * radius;
	      // var ry = Math.sin(radian) * radius;
	
	      this.mask.beginFill(this.fillBlack, 1);
	      // this.mask.lineStyle(2, 0xFF00FF, 1);
	
	      this.mask.moveTo(this.cx, this.cy);
	      this.mask.arc(this.cx, this.cy, radius, startRad, endRad);
	
	      this.mask.endFill();
	    }
	  }, {
	    key: 'drawCircle06',
	    value: function drawCircle06(startRad, endRad) {
	
	      var radius = $(window).height() * 10; // 暫定
	      // var radian = rad % Math.PI * 2;
	
	      // var rx = Math.cos(radian) * radius;
	      // var ry = Math.sin(radian) * radius;
	
	      this.mask.beginFill(this.fillBlack, 1);
	      // this.mask.lineStyle(2, 0xFF00FF, 1);
	
	      this.mask.moveTo(this.cx, this.cy);
	      this.mask.arc(this.cx, this.cy, radius, startRad, endRad);
	
	      this.mask.endFill();
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	
	      this.renderer.width = gb.in.r.ws.w;
	      this.renderer.height = gb.in.r.ws.h;
	
	      this.renderer.resize(gb.in.r.ws.w, gb.in.r.ws.h);
	
	      this.sRadius = this.targetRadius = Math.sqrt(gb.in.r.ws.w * gb.in.r.ws.w + gb.in.r.ws.h * gb.in.r.ws.h);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('PageTransitionEffect', this.onResize.bind(this));
	      gb.in.up.add('PageTransitionEffect', this.loop.bind(this));
	    }
	  }]);
	
	  return PageTransitionEffect;
	}();
	
	exports.default = PageTransitionEffect;

/***/ },
/* 105 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Point
	//
	// ------------------------------------------------------------
	
	var Point = function () {
	  function Point(x, y) {
	    _classCallCheck(this, Point);
	
	    this.sx = 0;
	    this.sy = 0;
	
	    this.w = 0;
	    this.h = 0;
	
	    this.ex = 0;
	    this.ex = 0;
	
	    this.x = x || 0; //previous mouse x
	    this.y = y || 0; //previous mouse y
	    this.vx = 0; //center x
	    this.vy = 0; //center y
	
	    this.defX = x || 0;
	    this.defY = y || 0;
	
	    this.px = 0; //previous mouse x
	    this.py = 0; //previous mouse y
	
	    this.radius = 0; // 半径
	    this.color = null; // 色
	    this.isRemove = false; // 消去フラグ
	
	    // this.GRAVITY = 0.4;
	    this.GRAVITY = 0;
	    this.SPRING = 0.08; // バネ係数
	    this.FRICTION = 0.97; // 摩擦係数
	    this.MAX_DIS = 100; // ボールがマウスに反応する最大距離
	
	    this.top = 0;
	    this.left = 0;
	  }
	
	  _createClass(Point, [{
	    key: "create",
	    value: function create() {}
	  }, {
	    key: "update",
	    value: function update() {}
	  }, {
	    key: "draw",
	    value: function draw() {}
	  }, {
	    key: "loop",
	    value: function loop() {}
	  }]);
	
	  return Point;
	}();
	
	exports.default = Point;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  TopOpening
	//
	//--------------------------------------------------
	
	var _DomMotionLibs = __webpack_require__(70);
	
	var _DomMotionLibs2 = _interopRequireDefault(_DomMotionLibs);
	
	var _HoverEffectSVGArrowTop = __webpack_require__(37);
	
	var _HoverEffectSVGArrowTop2 = _interopRequireDefault(_HoverEffectSVGArrowTop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TopOpening = function () {
	  function TopOpening() {
	    _classCallCheck(this, TopOpening);
	
	    this.tlMain = new TimelineMax();
	
	    this.setup();
	    // this.run();
	    this.setEvents();
	  }
	
	  _createClass(TopOpening, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.libs = new _DomMotionLibs2.default();
	      this.ht = new _HoverEffectSVGArrowTop2.default($('.section01 .next'));
	      this.ht.setupFirst();
	
	      // ------------------------------------------------------------
	      //  dom取得
	      // ------------------------------------------------------------
	      this.$nav = $('#nav');
	      this.$navItem = this.$nav.find('.item');
	
	      this.$sideR = $('#sideR');
	
	      this.$footerText = $('#footer .text');
	
	      this.$text = $('.section01 .next .text');
	      this.$arrow = $('.section01 .next svg');
	
	      this.$copy = $('#footer .copy');
	      this.$time = $('.section01 .timeWrap .textWrap');
	
	      this.$sideL = $('#sideL');
	
	      this.$tit01 = $('.section01 .titWrap img').eq(0);
	      this.$tit02 = $('.section01 .titWrap img').eq(1);
	      this.$tit03 = $('.section01 .titWrap img').eq(2);
	
	      // // ------------------------------------------------------------
	      // //  scene01 setup
	      // // ------------------------------------------------------------
	      var opt = { $target: this.$navItem, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$sideR, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$footerText, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$copy, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$time, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$sideL, dur: 0, delay: 0, blur: 0, blurTarget: 10, ease: Power3.easeIn };
	      this.libs.blur(opt);
	
	      var opt = { $target: this.$tit01, dur: 0, delay: 0, blur: 0, blurTarget: 20, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit02, dur: 0, delay: 0, blur: 0, blurTarget: 20, ease: Power3.easeIn };
	      this.libs.blur(opt);
	      var opt = { $target: this.$tit03, dur: 0, delay: 0, blur: 0, blurTarget: 20, ease: Power3.easeIn };
	      this.libs.blur(opt);
	
	      TweenMax.set(this.$navItem, { y: -40 });
	      TweenMax.set(this.$sideR, { x: 40 });
	      TweenMax.set(this.$footerText, { y: 40 });
	      TweenMax.set(this.$copy, { y: 40 });
	      TweenMax.set(this.$time, { y: 40 });
	      TweenMax.set(this.$sideL, { x: -40 });
	      TweenMax.set(this.$tit01, { y: -80, opacity: 0 });
	      TweenMax.set(this.$tit02, { y: -80, opacity: 0 });
	      TweenMax.set(this.$tit03, { y: -80, opacity: 0 });
	    }
	  }, {
	    key: 'runTop',
	    value: function runTop() {
	      var _this = this;
	
	      // 右上から順に
	
	      this.tlMain.add(function () {
	
	        TweenMax.to($('.menuBtn01'), 1, { opacity: 1, ease: Power2.easeOut });
	
	        _this.$navItem.each(function (index, el) {
	
	          var opt = { $target: $(el), dur: 1, delay: 0.1 * index, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	          _this.libs.blur(opt);
	
	          TweenMax.to($(el), 1, { y: 0, opacity: 1, z: 1, ease: Power2.easeOut, delay: 0.1 * index });
	        });
	      }, '+=1.2').add(function () {
	
	        var opt = { $target: _this.$sideR, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        _this.libs.blur(opt);
	
	        TweenMax.to(_this.$sideR, 1, { x: 0, opacity: 1, ease: Power2.easeOut });
	      }, '+=0.6').add(function () {
	
	        var opt = { $target: _this.$footerText, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        _this.libs.blur(opt);
	
	        TweenMax.to(_this.$footerText, 1, { y: 0, opacity: 1, ease: Power2.easeOut });
	      }, '+=0.13').add(function () {
	
	        var opt = { $target: _this.$copy, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        _this.libs.blur(opt);
	
	        TweenMax.to(_this.$copy, 1, { y: 0, opacity: 1, ease: Power2.easeOut });
	      }, '+=0.13').add(function () {
	
	        var opt = { $target: _this.$time, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        _this.libs.blur(opt);
	
	        TweenMax.to(_this.$time, 1, { y: 0, opacity: 1, ease: Power2.easeOut });
	      }, '+=0.13').add(function () {
	
	        var opt = { $target: _this.$sideL, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        _this.libs.blur(opt);
	
	        TweenMax.to(_this.$sideL, 1, { x: 0, opacity: 1, ease: Power2.easeOut });
	      }, '+=0.13').add(function () {
	
	        var opt = { $target: _this.$tit01, dur: 2.0, delay: 0, blur: 20, blurTarget: 0, ease: Power2.easeOut };
	        _this.libs.blur(opt);
	        var opt = { $target: _this.$tit02, dur: 1.9, delay: 0.1, blur: 20, blurTarget: 0, ease: Power2.easeOut };
	        _this.libs.blur(opt);
	        var opt = { $target: _this.$tit03, dur: 1.8, delay: 0.2, blur: 20, blurTarget: 0, ease: Power2.easeOut };
	        _this.libs.blur(opt);
	
	        TweenMax.to(_this.$tit01, 2.0, { y: 0, opacity: 1, ease: Power2.easeOut, delay: 0 });
	        TweenMax.to(_this.$tit02, 1.9, { y: 0, opacity: 1, ease: Power2.easeOut, delay: 0.1 });
	        TweenMax.to(_this.$tit03, 1.8, { y: 0, opacity: 1, ease: Power2.easeOut, delay: 0.2 });
	      }, '+=0.13').add(function () {
	
	        _this.ht.runFirst();
	        _this.ht.autoArrow();
	      }, '+=1.12');
	    }
	  }, {
	    key: 'runOther',
	    value: function runOther() {
	      var _this2 = this;
	
	      this.tlMain.add(function () {
	
	        TweenMax.to($('.menuBtn01'), 1, { opacity: 1, ease: Power2.easeOut });
	
	        _this2.$navItem.each(function (index, el) {
	
	          var opt = { $target: $(el), dur: 1, delay: 0.1 * index, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	          _this2.libs.blur(opt);
	
	          TweenMax.to($(el), 1, { y: 0, opacity: 1, z: 1, ease: Power2.easeOut, delay: 0.1 * index });
	        });
	      }, '+=1.2').add(function () {
	
	        var opt = { $target: _this2.$sideR, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        _this2.libs.blur(opt);
	
	        TweenMax.to(_this2.$sideR, 1, { x: 0, opacity: 1, ease: Power2.easeOut });
	      }, '+=0.6').add(function () {
	
	        var opt = { $target: _this2.$sideL, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        _this2.libs.blur(opt);
	
	        TweenMax.to(_this2.$sideL, 1, { x: 0, opacity: 1, ease: Power2.easeOut });
	      }, '+=0.13')
	
	      // フッター等は表示されないが、初期状態に戻しておく
	      .add(function () {
	
	        var opt = { $target: _this2.$footerText, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        _this2.libs.blur(opt);
	
	        TweenMax.to(_this2.$footerText, 1, { y: 0, opacity: 1, ease: Power2.easeOut });
	      }).add(function () {
	
	        var opt = { $target: _this2.$copy, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
	        _this2.libs.blur(opt);
	
	        TweenMax.to(_this2.$copy, 1, { y: 0, opacity: 1, ease: Power2.easeOut });
	      });
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {}
	  }, {
	    key: 'onLoop',
	    value: function onLoop() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      gb.in.r.add('Opening', this.onResize.bind(this));
	    }
	  }]);
	
	  return TopOpening;
	}();
	
	exports.default = TopOpening;

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectSVGLogo
	//
	//--------------------------------------------------
	
	var HoverEffectSVGLogo = function () {
	  function HoverEffectSVGLogo($target) {
	    _classCallCheck(this, HoverEffectSVGLogo);
	
	    this.$target = $target;
	
	    // motion
	    this.tl = new TimelineMax();
	
	    // スマホのときは処理しない
	    if (gb.in.u.isPC) this.setEvents();
	  }
	
	  _createClass(HoverEffectSVGLogo, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      if (gb.in.u.isResSP) return;
	
	      var tl = new TimelineMax();
	
	      tl.to($(that), 0.5, {
	        opacity: 0.3,
	        ease: Power4.easeOut
	      });
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      if (gb.in.u.isResSP) return;
	
	      var tl = new TimelineMax();
	
	      tl.to($(that), 0.5, {
	        opacity: 1,
	        ease: Power3.easeOut
	      });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).on('mouseenter', function (e) {
	          self.onEnter.call(self, this);
	        });
	        $(this).on('mouseleave', function (e) {
	          self.onLeave.call(self, this);
	        });
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).off('mouseenter');
	        $(this).off('mouseleave');
	      });
	    }
	  }]);
	
	  return HoverEffectSVGLogo;
	}();
	
	exports.default = HoverEffectSVGLogo;

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectMenuBtn
	//
	//--------------------------------------------------
	
	var HoverEffectMenuBtn = function () {
	  function HoverEffectMenuBtn($target) {
	    _classCallCheck(this, HoverEffectMenuBtn);
	
	    this.$target = $target;
	
	    // motion
	    this.tl = new TimelineMax();
	
	    this.setEvents();
	  }
	
	  _createClass(HoverEffectMenuBtn, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      // メニューが開いているときは処理しない
	      if (gb.in.menu.isOpen) return;
	
	      var $bar01 = $(that).find('.top');
	      var $bar02 = $(that).find('.middle');
	      var $bar03 = $(that).find('.bottom');
	
	      // cover 文字
	      var tl01 = new TimelineMax();
	
	      tl01.set($bar01, {
	        width: 0
	      }).to($bar01, 0.3, {
	        width: 30,
	        ease: Power2.easeInOut,
	        delay: 0.15
	      });
	
	      var tl02 = new TimelineMax();
	
	      tl02.set($bar02, {
	        width: 0
	      }).to($bar02, 0.3, {
	        width: 30,
	        ease: Power2.easeInOut,
	        delay: 0.1
	      });
	
	      var tl03 = new TimelineMax();
	
	      tl03.set($bar03, {
	        width: 0
	      }).to($bar03, 0.3, {
	        width: 30,
	        ease: Power2.easeInOut,
	        delay: 0.2
	      });
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      // var $bar01 = $(that).find('.top');
	      // var $bar02 = $(that).find('.middle');
	      // var $bar03 = $(that).find('.bottom');
	
	      // // cover 文字
	      // var tl = new TimelineMax();
	
	      // tl
	      //   .to($bar01, 0.5, {
	      //     width: 30,
	      //     'margin-left': -15,
	      //     ease: Power4.easeOut,
	      //     delay: 0.1,
	      //   })
	
	      // var tl = new TimelineMax();
	
	      // tl
	      //   .to($bar02, 0.5, {
	      //     width: 30,
	      //     'margin-left': -15,
	      //     ease: Power4.easeOut,
	      //   })
	
	      // var tl = new TimelineMax();
	
	      // tl
	      //   .to($bar03, 0.5, {
	      //     width: 30,
	      //     'margin-left': -15,
	      //     ease: Power4.easeOut,
	      //     delay: 0.15,
	      //   })
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).on('mouseenter', function (e) {
	          self.onEnter.call(self, this);
	        });
	        $(this).on('mouseleave', function (e) {
	          self.onLeave.call(self, this);
	        });
	      });
	    }
	  }]);
	
	  return HoverEffectMenuBtn;
	}();
	
	exports.default = HoverEffectMenuBtn;

/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectSVGArrow
	//
	//--------------------------------------------------
	
	var HoverEffectSVGArrow = function () {
	  function HoverEffectSVGArrow($target) {
	    _classCallCheck(this, HoverEffectSVGArrow);
	
	    this.$target = $target;
	
	    // motion
	    this.tl = new TimelineMax();
	
	    this.setup();
	
	    // スマホのときは処理しない
	    if (gb.in.u.isPC) this.setEvents();
	  }
	
	  _createClass(HoverEffectSVGArrow, [{
	    key: 'setup',
	    value: function setup() {
	
	      TweenMax.set(this.$target.find('path'), { drawSVG: '0% 100%', fill: 'none', stroke: '#000' });
	    }
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      var tl = new TimelineMax();
	      var dir = $(that).data('dir');
	
	      // 上方向
	      if (dir == 'top') {
	
	        tl.to($(that).find('path'), 0.9, {
	          drawSVG: '0% 30%',
	          ease: Power2.easeOut
	        }).to($(that), 0.9, {
	          y: -20,
	          ease: Power2.easeOut
	        }, '-=0.9');
	
	        // 右方向
	      } else if (dir == 'right') {
	
	        tl.to($(that).find('path'), 0.9, {
	          drawSVG: '0% 30%',
	          ease: Power2.easeOut
	        }).to($(that), 0.9, {
	          x: 20,
	          ease: Power2.easeOut
	        }, '-=0.9');
	
	        // 下方向
	      } else if (dir == 'bottom') {
	
	        tl.to($(that).find('path'), 0.9, {
	          drawSVG: '0% 30%',
	          ease: Power2.easeOut
	        }).to($(that), 0.9, {
	          y: 20,
	          ease: Power2.easeOut
	        }, '-=0.9');
	
	        // 左方向
	      } else if (dir == 'left') {
	
	        tl.to($(that).find('path'), 0.9, {
	          drawSVG: '0% 30%',
	          ease: Power2.easeOut
	        }).to($(that), 0.9, {
	          x: -20,
	          ease: Power2.easeOut
	        }, '-=0.9');
	      } else {}
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      var tl = new TimelineMax();
	      var dir = $(that).data('dir');
	
	      // 上方向
	      if (dir == 'top') {
	
	        tl.to($(that).find('path'), 0.9, {
	          drawSVG: '0% 100%',
	          ease: Power2.easeOut
	        }).to($(that), 0.9, {
	          y: 0,
	          ease: Power2.easeOut
	        }, '-=0.9');
	
	        // 右方向
	      } else if (dir == 'right') {
	
	        tl.to($(that).find('path'), 0.9, {
	          drawSVG: '0% 100%',
	          ease: Power2.easeOut
	        }).to($(that), 0.9, {
	          x: 0,
	          ease: Power2.easeOut
	        }, '-=0.9');
	
	        // 下方向
	      } else if (dir == 'bottom') {
	
	        tl.to($(that).find('path'), 0.9, {
	          drawSVG: '0% 100%',
	          ease: Power2.easeOut
	        }).to($(that), 0.9, {
	          y: 0,
	          ease: Power2.easeOut
	        }, '-=0.9');
	
	        // 左方向
	      } else if (dir == 'left') {
	
	        tl.to($(that).find('path'), 0.9, {
	          drawSVG: '0% 100%',
	          ease: Power2.easeOut
	        }).to($(that), 0.9, {
	          x: 0,
	          ease: Power2.easeOut
	        }, '-=0.9');
	      }
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).on('mouseenter', function (e) {
	          self.onEnter.call(self, this);
	        });
	        $(this).on('mouseleave', function (e) {
	          self.onLeave.call(self, this);
	        });
	      });
	    }
	  }]);
	
	  return HoverEffectSVGArrow;
	}();
	
	exports.default = HoverEffectSVGArrow;

/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectSNSPCFooter
	//
	//--------------------------------------------------
	
	var HoverEffectSNSPCFooter = function () {
	  function HoverEffectSNSPCFooter($wrap, $target) {
	    _classCallCheck(this, HoverEffectSNSPCFooter);
	
	    this.$wrap = $('.sns.sp');
	    this.$inner = this.$wrap.find('.inner');
	    this.$target = this.$wrap.find('.iconShare');
	    this.$bar = this.$wrap.find('.bar');
	    this.$list = this.$wrap.find('.list');
	    this.$item = this.$wrap.find('.list .item');
	
	    // motion
	    this.tl = new TimelineMax();
	
	    this.setEvents();
	  }
	
	  _createClass(HoverEffectSNSPCFooter, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'ready',
	    value: function ready() {
	
	      // bar
	      TweenMax.set(this.$bar, { width: 0 });
	
	      // sns
	      TweenMax.set(this.$item, { x: -40, opacity: 0 });
	
	      this.$bar.show();
	      this.$list.show();
	    }
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      if (!gb.in.u.isResPC) return;
	
	      TweenMax.killTweensOf(this.$bar);
	      TweenMax.killTweensOf(this.$item);
	
	      this.ready();
	
	      // barが伸びる
	
	      var tl = new TimelineMax();
	
	      tl.to(this.$bar, 0.3, {
	        width: 26,
	        ease: Power3.easeInOut
	      }).to(this.$item.eq(0), 0.3, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeOut
	      }, '-=0.2').to(this.$item.eq(1), 0.3, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeOut
	      }, '-=0.25').to(this.$item.eq(2), 0.3, {
	        x: 0,
	        opacity: 1,
	        ease: Power4.easeOut
	      }, '-=0.25');
	
	      // ホバーエリアを拡大
	      TweenMax.to(this.$inner, 0.3, { width: 180 });
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	      var _this = this;
	
	      if (!gb.in.u.isResPC) return;
	
	      TweenMax.killTweensOf(this.$bar);
	      TweenMax.killTweensOf(this.$item);
	
	      // bar
	      var tl = new TimelineMax();
	
	      tl.to(this.$item.eq(2), 0.3, {
	        x: -40,
	        opacity: 0,
	        ease: Power4.easeInOut
	      }).to(this.$item.eq(1), 0.3, {
	        x: -40,
	        opacity: 0,
	        ease: Power4.easeInOut
	      }, '-=0.25').to(this.$item.eq(0), 0.3, {
	        x: -40,
	        opacity: 0,
	        ease: Power4.easeInOut,
	        onComplete: function onComplete() {
	          _this.$list.hide();
	        }
	      }, '-=0.25').to(this.$bar, 0.2, {
	        width: 0,
	        ease: Power2.easeInOut,
	        onComplete: function onComplete() {
	          _this.$bar.hide();
	        }
	      }, '-=0.2');
	
	      // ホバーエリアを拡大
	      TweenMax.to(this.$inner, 0.3, { width: 14 });
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$inner.on('mouseenter', function (e) {
	        self.onEnter.call(self, this);
	      });
	      this.$inner.on('mouseleave', function (e) {
	        self.onLeave.call(self, this);
	      });
	    }
	  }]);
	
	  return HoverEffectSNSPCFooter;
	}();
	
	exports.default = HoverEffectSNSPCFooter;

/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//--------------------------------------------------
	//
	//  HoverEffectSVGArrowSideR
	//
	//--------------------------------------------------
	
	var HoverEffectSVGArrowSideR = function () {
	  function HoverEffectSVGArrowSideR($target) {
	    _classCallCheck(this, HoverEffectSVGArrowSideR);
	
	    this.$target = $target;
	
	    // motion
	    this.tl = new TimelineMax();
	
	    this.setup();
	    // this.autoArrow();
	
	    this.isHover = false;
	
	    // スマホのときは処理しない
	    if (gb.in.u.isPC) this.setEvents();
	  }
	
	  _createClass(HoverEffectSVGArrowSideR, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'run',
	    value: function run() {}
	  }, {
	    key: 'onEnter',
	    value: function onEnter(that) {
	
	      this.isHover = true;
	
	      if (this.tl02) this.tl02.kill();
	      this.tl01 = new TimelineMax();
	
	      this.tl01
	      // 矢印を下に下げる
	      .to($(that).find('.arrow.pc'), 0.4, {
	        scaleY: 0.65,
	        y: 8,
	        z: 1,
	        'transform-origin': '50% 100%',
	        ease: Power4.easeOut
	      })
	      // 文字を下に下げる
	      .to($(that).find('.text'), 0.4, {
	        y: 30,
	        z: 1,
	        ease: Power4.easeOut
	      }, '-=0.37');
	    }
	  }, {
	    key: 'onLeave',
	    value: function onLeave(that) {
	
	      this.isHover = false;
	
	      if (this.tl01) this.tl01.kill();
	      this.tl02 = new TimelineMax();
	
	      this.tl02
	      // 文字を下に下げる
	      .to($(that).find('.text'), 0.5, {
	        y: 0,
	        z: 1,
	        ease: Power2.easeInOut
	      })
	      // 矢印を下に下げる
	      .to($(that).find('.arrow.pc'), 0.5, {
	        scaleY: 1,
	        y: 0,
	        z: 1,
	        'transform-origin': '50% 100%',
	        ease: Power2.easeInOut
	      }, '-=0.45');
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      var self = this;
	
	      this.$target.each(function (index, el) {
	
	        $(this).on('mouseenter', function (e) {
	          self.onEnter.call(self, this);
	        });
	        $(this).on('mouseleave', function (e) {
	          self.onLeave.call(self, this);
	        });
	      });
	    }
	  }]);
	
	  return HoverEffectSVGArrowSideR;
	}();
	
	exports.default = HoverEffectSVGArrowSideR;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  main
	//
	//--------------------------------------------------
	
	var _DisplayTop = __webpack_require__(20);
	
	var _DisplayTop2 = _interopRequireDefault(_DisplayTop);
	
	var _DisplayMovie = __webpack_require__(39);
	
	var _DisplayMovie2 = _interopRequireDefault(_DisplayMovie);
	
	var _DisplayInterview = __webpack_require__(51);
	
	var _DisplayInterview2 = _interopRequireDefault(_DisplayInterview);
	
	var _DisplayInterviewDetail = __webpack_require__(60);
	
	var _DisplayInterviewDetail2 = _interopRequireDefault(_DisplayInterviewDetail);
	
	var _DisplayHistory = __webpack_require__(73);
	
	var _DisplayHistory2 = _interopRequireDefault(_DisplayHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Main = function () {
	  function Main() {
	    _classCallCheck(this, Main);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(Main, [{
	    key: 'onImmediate',
	    value: function onImmediate() {}
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      //pageページ別のIDを取得
	      var page = $('body').data('id');
	
	      switch (page) {
	
	        case 'top':
	
	          new _DisplayTop2.default();
	
	          break;
	
	        // case 'movie':
	        //
	        //   new DisplayMovie();
	        //
	        //   break;
	        //
	        // case 'interview':
	        //
	        //   new DisplayInterview();
	        //
	        //   break;
	        //
	        // case 'interview_detail':
	        //
	        //   new DisplayInterviewDetail();
	        //
	        //   break;
	        //
	        // case 'history':
	        //
	        //   new DisplayHistory();
	        //
	        //   break;
	
	      }
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {}
	  }, {
	    key: 'onRender',
	    value: function onRender() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Main;
	}();
	
	exports.default = Main;

/***/ }
/******/ ]);