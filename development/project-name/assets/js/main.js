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
	
	var _Main = __webpack_require__(54);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import DisplayTop from './Display/DisplayTop.js';
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Common
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	// import Pjax from '../Func/Pjax.js';
	
	
	// import Menu from '../Display/UI/_compornents/Menu.js';
	// import Nav from '../Display/UI/Nav.js';
	
	
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
	
	var _JudgeEnvironment = __webpack_require__(18);
	
	var _JudgeEnvironment2 = _interopRequireDefault(_JudgeEnvironment);
	
	var _ResponsiveSwitchImg = __webpack_require__(19);
	
	var _ResponsiveSwitchImg2 = _interopRequireDefault(_ResponsiveSwitchImg);
	
	var _SwipeTransition = __webpack_require__(20);
	
	var _SwipeTransition2 = _interopRequireDefault(_SwipeTransition);
	
	var _Alert = __webpack_require__(21);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _SideR = __webpack_require__(22);
	
	var _SideR2 = _interopRequireDefault(_SideR);
	
	var _Time = __webpack_require__(25);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _ScrollTransition = __webpack_require__(26);
	
	var _ScrollTransition2 = _interopRequireDefault(_ScrollTransition);
	
	var _PageTop = __webpack_require__(27);
	
	var _PageTop2 = _interopRequireDefault(_PageTop);
	
	var _Sec01Video = __webpack_require__(14);
	
	var _Sec01Video2 = _interopRequireDefault(_Sec01Video);
	
	var _Sns = __webpack_require__(28);
	
	var _Sns2 = _interopRequireDefault(_Sns);
	
	var _SliderTop = __webpack_require__(30);
	
	var _SliderTop2 = _interopRequireDefault(_SliderTop);
	
	var _Layout = __webpack_require__(31);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _DisplayOpening = __webpack_require__(35);
	
	var _DisplayOpening2 = _interopRequireDefault(_DisplayOpening);
	
	var _CVContents = __webpack_require__(36);
	
	var _CVContents2 = _interopRequireDefault(_CVContents);
	
	var _PageTransitionController = __webpack_require__(42);
	
	var _PageTransitionController2 = _interopRequireDefault(_PageTransitionController);
	
	var _HoverEffectSVG = __webpack_require__(48);
	
	var _HoverEffectSVG2 = _interopRequireDefault(_HoverEffectSVG);
	
	var _HoverEffectSVGLogo = __webpack_require__(49);
	
	var _HoverEffectSVGLogo2 = _interopRequireDefault(_HoverEffectSVGLogo);
	
	var _HoverEffectMenuBtn = __webpack_require__(50);
	
	var _HoverEffectMenuBtn2 = _interopRequireDefault(_HoverEffectMenuBtn);
	
	var _HoverEffectSVGArrow = __webpack_require__(51);
	
	var _HoverEffectSVGArrow2 = _interopRequireDefault(_HoverEffectSVGArrow);
	
	var _HoverEffectSNSPCFooter = __webpack_require__(52);
	
	var _HoverEffectSNSPCFooter2 = _interopRequireDefault(_HoverEffectSNSPCFooter);
	
	var _HoverEffectSVGArrowSideR = __webpack_require__(53);
	
	var _HoverEffectSVGArrowSideR2 = _interopRequireDefault(_HoverEffectSVGArrowSideR);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import HoverEffectMenuItem from '../Display/Effects/03_effects/HoverEffectMenuItem.js';
	
	
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
	      // gb.in.pjax = new Pjax();
	
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
	      // gb.in.menu = new Menu();
	      // gb.in.nav = new Nav();
	      // gb.in.sideR = new SideR();
	      // gb.in.alert = new Alert();
	      // gb.in.pagetop = new PageTop();
	
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
	      // TweenMax.to($('#header .logo'), 2.2, {opacity: 1, ease: Power2.easeInOut})
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Conf
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
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
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Util
	 * Date:
	 * Author:
	 */
	
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
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Func
	 * Date:
	 * Author:
	 */
	
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
	
	      // yt.player��load����Ƥ��ʤ����Ϥ򿼑]����
	      if (typeof YT !== "undefined" && YT && YT.Player) {
	
	        // create
	        this.player = new YT.Player(id, {
	          width: '100%', // �ץ�`��`�η�
	          height: '100%', // �ץ�`��`�θߤ�
	          videoId: videoID, // YouTube��ID
	          events: {
	            'onReady': this.onReady.bind(this), // �ץ�`��`�Μʂ䤬�Ǥ����Ȥ��ˌg��
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
	
	      // �߽���Ȥ�
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
	
	      // // �Хåե�����ФΤȤ� 3
	      // if (status == window.YT.PlayerState.BUFFERING) {
	      //     console.log('�Хåե������');
	      // }
	
	      // // �^�����g�ߤΤȤ� 5 5��ֹ�ޤ�Ȥ����뤫�顢�����Ǥ�play
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
	
	var _HoverEffectBack = __webpack_require__(23);
	
	var _HoverEffectBack2 = _interopRequireDefault(_HoverEffectBack);
	
	var _PageScroll = __webpack_require__(24);
	
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
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview: ページ内のアンカースクロールイベント系
	 * Project:
	 * File: PageScroll
	 * Date:
	 * Author:
	 */
	
	var PageScroll = function () {
	  function PageScroll($target) {
	    _classCallCheck(this, PageScroll);
	
	    this.cb = function () {};
	    this.onComplete = function () {};
	
	    this.testAlert = this._testAlert.bind(this);
	
	    this.setEvents();
	    this.setup();
	  }
	
	  _createClass(PageScroll, [{
	    key: 'setup',
	    value: function setup() {
	
	      this.testAlert();
	    }
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
	    key: '_testAlert',
	    value: function _testAlert() {
	      // window.console.log('testAlert!!!');
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
	
	var _metaData = __webpack_require__(29);
	
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
	
	var _Size = __webpack_require__(32);
	
	var _Size2 = _interopRequireDefault(_Size);
	
	var _Position = __webpack_require__(34);
	
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
/* 32 */
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
	
	var _Scale = __webpack_require__(33);
	
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
/* 34 */
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
/* 36 */
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
	
	
	var _CVContentsLoop = __webpack_require__(37);
	
	var _CVContentsLoop2 = _interopRequireDefault(_CVContentsLoop);
	
	var _CVContentsTimeline = __webpack_require__(38);
	
	var _CVContentsTimeline2 = _interopRequireDefault(_CVContentsTimeline);
	
	var _CreateCanvas = __webpack_require__(39);
	
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
/* 39 */
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
	
	
	var _Canvas = __webpack_require__(40);
	
	var _Canvas2 = _interopRequireDefault(_Canvas);
	
	var _Plane = __webpack_require__(41);
	
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
	
	var _PageTransition = __webpack_require__(43);
	
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
/* 43 */
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
	
	var _Point = __webpack_require__(44);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _TopOpening = __webpack_require__(45);
	
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
/* 44 */
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
/* 45 */
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
	
	var _DomMotionLibs = __webpack_require__(46);
	
	var _DomMotionLibs2 = _interopRequireDefault(_DomMotionLibs);
	
	var _HoverEffectSVGArrowTop = __webpack_require__(47);
	
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Main
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _DisplayTop = __webpack_require__(55);
	
	var _DisplayTop2 = _interopRequireDefault(_DisplayTop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import DisplayMovie from '../Display/DisplayMovie.js';
	// import DisplayInterview from '../Display/DisplayInterview.js';
	// import DisplayInterviewDetail from '../Display/DisplayInterviewDetail.js';
	// import DisplayHistory from '../Display/DisplayHistory.js';
	
	'use strict';
	
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
	
	      //pageのIDごとに発火するクラスの振り分け
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

/***/ },
/* 55 */
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
	
	
	var _Effects = __webpack_require__(56);
	
	var _Effects2 = _interopRequireDefault(_Effects);
	
	var _ScaleTop = __webpack_require__(64);
	
	var _ScaleTop2 = _interopRequireDefault(_ScaleTop);
	
	var _HoverEffectSNSSPFooter = __webpack_require__(65);
	
	var _HoverEffectSNSSPFooter2 = _interopRequireDefault(_HoverEffectSNSSPFooter);
	
	var _HoverEffectSVGArrowTop = __webpack_require__(47);
	
	var _HoverEffectSVGArrowTop2 = _interopRequireDefault(_HoverEffectSVGArrowTop);
	
	var _TopTime = __webpack_require__(17);
	
	var _TopTime2 = _interopRequireDefault(_TopTime);
	
	var _Position = __webpack_require__(34);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	var _WebGLinit = __webpack_require__(66);
	
	var _WebGLinit2 = _interopRequireDefault(_WebGLinit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var DisplayTop = function () {
	  function DisplayTop() {
	    _classCallCheck(this, DisplayTop);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(DisplayTop, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // アニメーションループスタート
	      gb.in.up.loop();
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // gb.in.webGLinit = new WebGLinit();
	
	      // ------------------------------------------------------------
	      //  UI / Layout
	      // ------------------------------------------------------------
	      // sp
	      // gb.in.scaleTop = new ScaleTop();
	      // gb.in.pos = new Position();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	
	      // sp
	      // gb.in.sliderTop.setEvents();
	      // gb.in.snsSPHoverEf = new HoverEffectSNSSPFooter($('#sideL'));
	
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
	
	      window.console.log('static_Run');
	
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
/* 56 */
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
	
	
	var _CVContents = __webpack_require__(36);
	
	var _CVContents2 = _interopRequireDefault(_CVContents);
	
	var _GlContents = __webpack_require__(57);
	
	var _GlContents2 = _interopRequireDefault(_GlContents);
	
	var _Profiler = __webpack_require__(63);
	
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
/* 57 */
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
	
	
	var _GlContentsLoop = __webpack_require__(58);
	
	var _GlContentsLoop2 = _interopRequireDefault(_GlContentsLoop);
	
	var _GlContentsTimeline = __webpack_require__(59);
	
	var _GlContentsTimeline2 = _interopRequireDefault(_GlContentsTimeline);
	
	var _Plane = __webpack_require__(61);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	var _Param = __webpack_require__(62);
	
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
/* 59 */
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
	
	var _SometimesMgr = __webpack_require__(60);
	
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
	//  Display
	//
	//--------------------------------------------------
	
	var WebGLinit = function () {
		function WebGLinit() {
			_classCallCheck(this, WebGLinit);
	
			this.gl = null;
	
			this.webglInit = this._webglInit.bind(this);
	
			this.create_shader = this._create_shader.bind(this);
			this.create_program = this._create_program.bind(this);
			this.create_vbo = this._create_vbo.bind(this);
	
			this.onImmediate();
			this.setEvents();
		}
	
		_createClass(WebGLinit, [{
			key: 'onImmediate',
			value: function onImmediate() {
	
				// ループスタート
				gb.in.up.loop();
	
				this.webglInit();
			}
		}, {
			key: 'onLoad',
			value: function onLoad() {
	
				window.console.log('onLoad');
			}
		}, {
			key: '_webglInit',
			value: function _webglInit() {
	
				// canvasエレメントを取得
				var c = document.getElementById('canvas');
				c.width = 300;
				c.height = 300;
	
				// webglコンテキストを取得
				this.gl = c.getContext('webgl') || c.getContext('experimental-webgl');
	
				// canvasを初期化する色を設定する
				this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	
				// canvasを初期化する際の深度を設定する
				this.gl.clearDepth(1.0);
	
				// canvasを初期化
				this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	
				// 頂点シェーダとフラグメントシェーダの生成
				var v_shader = this.create_shader('vs');
				var f_shader = this.create_shader('fs');
	
				// プログラムオブジェクトの生成とリンク
				var prg = this.create_program(v_shader, f_shader);
	
				// attributeLocationの取得
				var attLocation = this.gl.getAttribLocation(prg, 'position');
	
				// attributeの要素数(この場合は xyz の3要素)
				var attStride = 3;
	
				// モデル(頂点)データ
				var vertex_position = [0.0, 1.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0];
	
				// VBOの生成
				var vbo = this.create_vbo(vertex_position);
	
				// VBOをバインド
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vbo);
	
				// attribute属性を有効にする
				this.gl.enableVertexAttribArray(attLocation);
	
				// attribute属性を登録
				this.gl.vertexAttribPointer(attLocation, attStride, this.gl.FLOAT, false, 0, 0);
	
				// minMatrix.js を用いた行列関連処理
				// matIVオブジェクトを生成
				var m = new matIV();
	
				// 各種行列の生成と初期化
				var mMatrix = m.identity(m.create());
				var vMatrix = m.identity(m.create());
				var pMatrix = m.identity(m.create());
				var mvpMatrix = m.identity(m.create());
	
				// ビュー座標変換行列
				m.lookAt([0.0, 1.0, 3.0], [0, 0, 0], [0, 1, 0], vMatrix);
	
				// プロジェクション座標変換行列
				m.perspective(90, c.width / c.height, 0.1, 100, pMatrix);
	
				// 各行列を掛け合わせ座標変換行列を完成させる
				m.multiply(pMatrix, vMatrix, mvpMatrix);
				m.multiply(mvpMatrix, mMatrix, mvpMatrix);
	
				// uniformLocationの取得
				var uniLocation = this.gl.getUniformLocation(prg, 'mvpMatrix');
	
				// uniformLocationへ座標変換行列を登録
				this.gl.uniformMatrix4fv(uniLocation, false, mvpMatrix);
	
				// モデルの描画
				this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
	
				// コンテキストの再描画
				this.gl.flush();
			}
		}, {
			key: '_create_shader',
			value: function _create_shader(id) {
				// シェーダを格納する変数
				var shader;
	
				// HTMLからscriptタグへの参照を取得
				var scriptElement = document.getElementById(id);
	
				// scriptタグが存在しない場合は抜ける
				if (!scriptElement) {
					return;
				}
	
				// scriptタグのtype属性をチェック
				switch (scriptElement.type) {
	
					// 頂点シェーダの場合
					case 'x-shader/x-vertex':
						shader = this.gl.createShader(this.gl.VERTEX_SHADER);
						break;
	
					// フラグメントシェーダの場合
					case 'x-shader/x-fragment':
						shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
						break;
					default:
						return;
				}
	
				// 生成されたシェーダにソースを割り当てる
				this.gl.shaderSource(shader, scriptElement.text);
	
				// シェーダをコンパイルする
				this.gl.compileShader(shader);
	
				// シェーダが正しくコンパイルされたかチェック
				if (this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
	
					// 成功していたらシェーダを返して終了
					return shader;
				} else {
	
					// 失敗していたらエラーログをアラートする
					alert(this.gl.getShaderInfoLog(shader));
				}
			}
		}, {
			key: '_create_program',
			value: function _create_program(vs, fs) {
				// プログラムオブジェクトの生成
				var program = this.gl.createProgram();
	
				// プログラムオブジェクトにシェーダを割り当てる
				this.gl.attachShader(program, vs);
				this.gl.attachShader(program, fs);
	
				// シェーダをリンク
				this.gl.linkProgram(program);
	
				// シェーダのリンクが正しく行なわれたかチェック
				if (this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
	
					// 成功していたらプログラムオブジェクトを有効にする
					this.gl.useProgram(program);
	
					// プログラムオブジェクトを返して終了
					return program;
				} else {
	
					// 失敗していたらエラーログをアラートする
					alert(this.gl.getProgramInfoLog(program));
				}
			}
	
			// VBOを生成する関数
	
		}, {
			key: '_create_vbo',
			value: function _create_vbo(data) {
				// バッファオブジェクトの生成
				var vbo = this.gl.createBuffer();
	
				// バッファをバインドする
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vbo);
	
				// バッファにデータをセット
				this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.STATIC_DRAW);
	
				// バッファのバインドを無効化
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
	
				// 生成した VBO を返して終了
				return vbo;
			}
		}, {
			key: 'setEvents',
			value: function setEvents() {
	
				$(window).on('load', this.onLoad.bind(this));
			}
		}], [{
			key: 'run',
			value: function run() {}
		}]);
	
		return WebGLinit;
	}();
	
	exports.default = WebGLinit;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTM4NGJhMDM3MjM5MTA0NjZmMjEiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1RvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvbmYuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0RhdGEvU291bmQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9VdGlsLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRnVuYy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1JlYWR5UGVyY2VudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Jlc2l6ZU1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Njcm9sbE1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL01vdXNlTWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0xvYWRNZ3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvWW91dHViZUZvclNlYzAxLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRGlzcGxheS9MYXlvdXQvRnVsbFNpemUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9KdWRnZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL19ldmVudHMvUmVzcG9uc2l2ZVN3aXRjaEltZy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Td2lwZVRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvU2lkZVIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0QmFjay5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9fcGFydHMvUGFnZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9UaW1lLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1Njcm9sbFRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvX3BhcnRzL1BhZ2VUb3AuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU25zLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvZWpzL2luYy9tZXRhRGF0YS5qc29uIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1NsaWRlclRvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9TaXplL1NpemUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1Bvc3Rpb24vUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheU9wZW5pbmcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNMb29wLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvX2RldGFpbHMvQ2FudmFzLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvUGFnZVRyYW5zaXRpb24vUGFnZVRyYW5zaXRpb25Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9QYWdlVHJhbnNpdGlvbi9QYWdlVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvUGFnZVRyYW5zaXRpb24vUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1RvcE9wZW5pbmcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9EaXNwbGF5L01vdGlvbi9Eb21Nb3Rpb25MaWJzLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0Fycm93VG9wLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWRy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdMb2dvLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdE1lbnVCdG4uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U05TUENGb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dTaWRlUi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9NYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9FZmZlY3RzLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c0xvb3AuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c1RpbWVsaW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvU29tZXRpbWVzTWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L19kZXRhaWxzL1BsYW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvUGFyYW0uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9Qcm9maWxlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TY2FsZVRvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9XZWJHTGluaXQuanMiXSwibmFtZXMiOlsid2luZG93IiwiZ2IiLCJ1bmRlZmluZWQiLCJpbiIsImNvbW1vbiIsIm1haW4iLCJDb21tb24iLCJvbkltbWVkaWF0ZSIsInNldEV2ZW50cyIsImNvbmYiLCJ1IiwiZiIsInVwIiwiciIsInMiLCJtIiwicm0iLCJsb2FkTWdyIiwic2N0IiwiTGF5b3V0Iiwib25Db21wbGV0ZWRGdW5jIiwiamUiLCJyZXNJbWciLCJzbnMiLCIkIiwic3d0IiwiY2hlY2tDc3NCbGVuZCIsInNsaWRlclRvcCIsInBhZ2VUcmFuc2l0aW9uRWZmZWN0Iiwic2VjMDFWaWRlbyIsIlNlYzAyQmciLCJoZTAxIiwiaGUwMiIsImhlMDMiLCJoZTA0IiwiaGUwNiIsImhlMDgiLCJzdGFydCIsImRvY3VtZW50Iiwib24iLCJvblJlYWR5IiwiYmluZCIsIm9uTG9hZCIsIkNvbmYiLCJSRUxFQVNFIiwiRkxHIiwiTE9HIiwiUEFSQU0iLCJTVEFUUyIsImRlZlciLCJkZWZIIiwiVyIsIkgiLCJzcFciLCJzcEgiLCJicCIsIm1vZGUiLCJrZXlzIiwic3dpdGNoTW9kZSIsInNvdW5kRGF0YSIsInNlYzAySW1nTnVtIiwieW91dHViZUlEMDEiLCJ5b3V0dWJlSUQwMiIsIndlYkZvbnRMb2FkZWQiLCJpIiwia2V5IiwibGVuIiwicGFyYW0iLCJyZWYiLCJyZWYxIiwidmFsdWUiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJzcGxpdCIsImxlbmd0aCIsImoiLCJvYmoiLCJrIiwidmFsIiwiU291bmREYXRhIiwiVXRpbCIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJhcHBWIiwiYXBwVmVyc2lvbiIsImlzUmVzU1AiLCJpc1Jlc1BDIiwiaXNQQyIsImlzU1AiLCJpc1RBQiIsImlzTUIiLCJpc0lFIiwiaXNTZXRTUFNpemUiLCJzdGFydFRpbWUiLCJlbGFwc2VkVGltZSIsIm5vdyIsIkRhdGUiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtaW4xIiwibWF4MSIsIm1pbjIiLCJtYXgyIiwiaGl0IiwicmFuZ2UiLCJudW0iLCJyZXNNaW4iLCJyZXNNYXgiLCJiYXNlTWluIiwiYmFzZU1heCIsInAiLCJuIiwicG9zIiwiU3RyaW5nIiwiaW5kZXhPZiIsInN1YnN0ciIsIm51bWVyYXRvciIsImRlbm9taW5hdG9yIiwicmFkaWFucyIsIlBJIiwiYW5nbGUiLCJwMSIsInAyIiwic3FydCIsInBvdyIsIngiLCJ5IiwiYXJyIiwic29ydCIsImEiLCJiIiwiYXJ5Iiwic2xpY2UiLCJ0IiwiQXJyYXkiLCJwdXNoIiwic2h1ZmZsZUFyeSIsImwiLCJsZW4xIiwibmV3QXJyIiwicGFyYSIsImRlc2MiLCJsaXN0IiwicmV0dXJuS2V5IiwiZ2V0VGltZSIsImZsZyIsImNzcyIsIm1lZGlhIiwicGF0dGVybiIsIlJlZ0V4cCIsImpvaW4iLCJ0ZXN0IiwiYWRkQ2xhc3MiLCJpc0lwYWQiLCJpc0FuZHJvaWQiLCJwbGF0Zm9ybSIsImlzSW9zIiwibXNpZSIsInBhcnNlSW50IiwibWF0Y2giLCJpc0llMTBVbmRlciIsImxvZyIsImlzSUUxMSIsInJlbW92ZUNsYXNzIiwidmVyc2lvbiIsInBhcnNlRmxvYXQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ1cmwiLCJocmVmIiwicGFyYW1JdGVtcyIsInBhcmFtSXRlbSIsImhhc2giLCJjb29raWUiLCJpc0NvbnRhaW4iLCJnIiwic3RyIiwidG9TdHJpbmciLCJjb250YWluIiwibnVtYmVyIiwiX3BvdyIsInJvdW5kIiwicmVzIiwib3JnIiwiZGVzdCIsImJlZm9yZSIsImFmdGVyIiwiZ2V0Tm93IiwiaG91ciIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJtaWxsU2Vjb25kIiwiZ2V0TWlsbGlzZWNvbmRzIiwiZ2V0RGF0ZSIsIm1vbnRoZGF5cyIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ3ZWVrRGF5SlAiLCJ3REoiLCJnZXREYXkiLCJ3ZWVrRGF5RU4iLCJ3REUiLCJkYXRlIiwiTnVtYmVyIiwiaWdub3JlQXJyYXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwiJHRhcmdldCIsIiRpbWciLCJlYWNoIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImF0dHIiLCJ0cmlnZ2VyIiwic2VsZiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9mZiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aG5hbWUiLCJldmVudCIsInJldHVyblZhbHVlIiwia2V5Q29kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbndoZWVsIiwib25tb3VzZXdoZWVsIiwib250b3VjaG1vdmUiLCJvbmtleWRvd24iLCJwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRnVuYyIsImJsYW5rIiwiZGVidWdnZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJleHBhbmRqUXVlcnkiLCJtZXRob2RzIiwiY29uc29sZSIsInByZXBlbmQiLCJGUFMiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsImpRdWVyeSIsImZuIiwiZXh0ZW5kIiwiYWRqdXN0IiwiYWRqdXN0VyIsImFkanVzdEgiLCJDU1MiLCJzdXBwb3J0cyIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInYiLCJpc0FuZHJvaWRWZXJzaW9uIiwiYWxlcnQiLCJSZWFkeU1nciIsImNvbXBsZXRlZCIsInRvdGFsIiwiY3VycmVudCIsInJlYWR5UGVyY2VudCIsInJlbW92ZSIsInVwZGF0ZSIsInNldHVwIiwiUmVhZHlQZXJjZW50IiwiJGxvYWRpbmciLCIkYmFyIiwiJHBlcmNlbnQiLCJpc0xvY2siLCJzZXRUaW1lb3V0TG9jayIsInRhcmdldCIsInRleHQiLCJvbkNvbXBsZXRlIiwiVHdlZW5NYXgiLCJ0byIsInNjYWxlIiwib3BhY2l0eSIsImVhc2UiLCJQb3dlcjMiLCJlYXNlSW5PdXQiLCJVcGRhdGVNZ3IiLCJjbnQiLCJ1cGRhdGVMaXN0IiwiVGltZXIiLCJpc1N0b3AiLCJmdW5jIiwibG9vcCIsIm5hbWUiLCJhcnJSZW1vdmUiLCJjaGVjayIsInNwbGljZSIsIlJlc2l6ZU1nciIsInJlc2l6ZUxpc3QiLCJ3cyIsIm9sZFciLCJvbGRIIiwib25SZXNpemUiLCJnZXRXaW5kb3dTaXplIiwiU2Nyb2xsTWdyIiwic2Nyb2xsTGlzdCIsInNjcm9sbEVuZExpc3QiLCJzdCIsInNiIiwic3YiLCJTVEFtb3VudCIsIm9mZnNldCIsImlzU3RhcnQiLCJlbmQiLCJzY3JvbGxUb3AiLCJkZWx0YSIsImRlbHRhWCIsImRlbHRhWSIsImlzV2luIiwiaXNGRiIsInNjcm9sbExlZnQiLCJvblNjcm9sbCIsIm9uTW91c2VXaGVlbCIsIk1vdXNlTWdyIiwiY3giLCJjeSIsIm1vdXNlTW92ZUxpc3QiLCJtb3VzZU1vdmVTdGFydExpc3QiLCJtb3VzZU1vdmVFbmRMaXN0IiwiZW5kVGltZSIsIm9uRW5kIiwib3JpZ2luYWxFdmVudCIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIm9mZnNldFgiLCJsZWZ0IiwidG9wIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNobW92ZSIsIm9uTW91c2Vtb3ZlIiwiTG9hZE1nciIsImxvYWRlciIsImNiIiwieW91dHViZUlmcmFtZVNjcmlwdCIsImxvYWRTZWMwMkltZyIsInBhdGgiLCJjYjAyIiwiaW1nIiwic2hhZGVycyIsInNoYWRlckxvYWRMaXN0IiwiWm9vbUJsdXIiLCJUcmFuc2l0aW9uMDIiLCJzaGFkZXJTZXJpYWxMb2FkIiwic2hhZGVyIiwibG9hZCIsImNvbXAiLCJzZWN0aW9uMDRQcm9kdWN0SW1nIiwidGV4dHVyZUxpc3QiLCJ0ZXh0dXJlcyIsInRleHR1cmVTZXJpYWxMb2FkIiwidGV4dHVyZSIsIlRIUkVFIiwiSW1hZ2VVdGlscyIsImxvYWRUZXh0dXJlIiwiY29uZmlnIiwiY3VzdG9tIiwiZmFtaWxpZXMiLCJ1cmxzIiwiYWN0aXZlIiwid2ViRm9udCIsIkxvYWRlciIsInNyYyIsImdldEpTT04iLCJkYXRhIiwibnRoIiwiSW1hZ2UiLCJhZGQwIiwib25sb2FkIiwiaW1nTnVtIiwiZWxtIiwiaXNMb2FkIiwidmlkZW8iLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInN1cHBvcnRWaWRlb0V4dCIsInBsYXkiLCJ0YWciLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm9uWW91VHViZUlmcmFtZVJlYWR5IiwiZXh0IiwiY2FuUGxheVR5cGUiLCJ3ZiIsImFzeW5jIiwiYWdhaW4iLCJXZWJGb250Iiwib25Mb2FkZWQiLCJTZWMwMVZpZGVvIiwiWW91dHViZUZvclNlYzAxIiwiaWQiLCJ2aWRlb0lEIiwidmlkZW9MaXN0IiwicGxheWVyIiwiaXNGaXJzdCIsImlzU2Vla0xvY2siLCJpc1NlZWtMb2NrMDIiLCJZVCIsIlBsYXllciIsInZpZGVvSWQiLCJldmVudHMiLCJvblBsYXllclN0YXRlQ2hhbmdlIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwiY29udHJvbHMiLCJzaG93aW5mbyIsImF1dG9oaWRlIiwicmVsIiwiZW5hYmxlanNhcGkiLCJpdl9sb2FkX3BvbGljeSIsImRpc2FibGVrYiIsIm1vZGVzdGJyYW5kaW5nIiwidGFyZ2V0RGVmVyIsInRhcmdldERlZkgiLCJydW4iLCJzZXRQbGF5YmFja1F1YWxpdHkiLCJ0aW1lIiwicGxheUJ5TllUaW1lIiwic3RhdHVzIiwiUGxheWVyU3RhdGUiLCJFTkRFRCIsInBsYXlWaWRlbyIsIlBMQVlJTkciLCJDVUVEIiwiaXNTYWZhcmkiLCJCVUZGRVJJTkciLCJzZWVrVG8iLCJnZXRDdXJyZW50VGltZSIsIm55SCIsIm9uU2VlayIsIkZ1bGxTaXplIiwiJFdyYXAiLCIkVGFyZ2V0IiwiJHdyYXAiLCJ0YXJnZXRXIiwidGFyZ2V0SCIsInJhdGlvVyIsInJhdGlvIiwibWwiLCJtdCIsImdldCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0RGVmIiwic2V0U3R5bGUiLCJnZXRTaXplIiwic2V0UG9zIiwiVG9wVGltZSIsIiRoMDEiLCJmaW5kIiwiJGgwMiIsIiRtMDEiLCIkbTAyIiwiaXNBbGVydCIsImRpcyIsInRsIiwiVGltZWxpbmVNYXgiLCJyZXBlYXQiLCJzZXQiLCJQb3dlcjIiLCJKdWRnZUVudmlyb25tZW50IiwiaXNEZXZpY2VTUCIsImlzRGV2aWNlVEFCIiwiaXNEZXZpY2VNQiIsImlzRGV2aWNlUEMiLCJpc0lFVmVyc2lvbiIsImlzRGlyZWN0aW9uIiwiaXNSZXNwb25zaXZlIiwiUmVzcG9uc2l2ZVN3aXRjaEltZyIsImlzUENMb2NrIiwiaXNTUExvY2siLCJpbmRleCIsImVsIiwic3RyUmVwbGFjZSIsImhhc0NsYXNzIiwic2V0SW1nU1BTaXplIiwibm90IiwiU3dpcGVUcmFuc2l0aW9uIiwiJHN0YXJ0V3JhcCIsIiRlbmRXcmFwIiwicGFnZUxpc3QiLCJvbGQiLCJuZXh0IiwicHJldiIsInNYIiwibVgiLCJlWCIsIm1pbkRpcyIsInNUIiwiZVQiLCJtaW5UIiwib25Ub3VjaExvbmciLCJvblRvdWNoU3RhcnRDQiIsIm9uVG91Y2hFbmRDQiIsInNZIiwibVkiLCJlWSIsImFic0RpcyIsImFicyIsInBqYXgiLCJzaXplIiwicmF0ZSIsImNhbGN1bGF0ZU9yZGVyIiwicGFnZU5hbWUiLCJmaWx0ZXIiLCJpc05vdFRvdWNoIiwiZGlyIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIkFsZXJ0Iiwic2hvdyIsImtpbGxUd2VlbnNPZiIsImhpZGUiLCJTaWRlUiIsImN1ciIsIiRjdXIiLCIkcGFnZU5hbWUiLCIkbmV4dCIsIiRiYWNrIiwiY2hhbmdlQ3VyIiwiY2hhbmdlUGFnZU5hbWUiLCJjaGFuZ2VOZXh0IiwiUG93ZXI0IiwiZWFzZU91dCIsImNoYW5nZU51bSIsIkV4cG8iLCJyb3RhdGlvbloiLCJkZWxheSIsInBhcmVudCIsIkhvdmVyRWZmZWN0QmFjayIsInRoYXQiLCJ0bDAyIiwia2lsbCIsInRsMDEiLCJvbkVudGVyIiwib25MZWF2ZSIsIlBhZ2VTY3JvbGwiLCJ0ZXN0QWxlcnQiLCJfdGVzdEFsZXJ0IiwiZGlmIiwicGFnZXRvcCIsInBhZ2VTY3JvbGxUbyIsInBhZ2VTY3JvbGxUbzAyIiwiVGltZSIsImlzU3RhdGUiLCJzdGF0ZUxpc3QiLCJqdWRnZVN0YXRlIiwiZ2V0Tm93QXROWSIsIlNjcm9sbFRyYW5zaXRpb24iLCJpc1N3aXRjaCIsImlzUGpheExvY2siLCJtZW51IiwiaXNPcGVuIiwic3dpdGNoIiwiUGFnZVRvcCIsInJlYWR5IiwiU25zIiwiJGZiIiwiJHR3IiwiJGxpbmUiLCIkbWFpbCIsImZiIiwidGl0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaHRtbCIsImRlcyIsInR3IiwibGluZSIsImQiLCJkZXNjcmlwdGlvbiIsImtleXdvcmQiLCJvcGVuV2luZG93IiwiYWRkcmVzcyIsInN1YiIsImJvZHkiLCJzY3JlZW4iLCJvcGVuIiwianVtcEZCIiwianVtcFRXIiwianVtcExJTkUiLCJvblNlbmRNYWlsIiwiU2xpZGVyIiwiJG92ZXJsYXkiLCJlcSIsIiRhcnJvd1IiLCIkYXJyb3dMIiwidGV4dExpc3QiLCJwcmljZUxpc3QiLCIkdGV4dCIsIiRwcmljZSIsIiRpbmRpY2F0b3IiLCJyaWdodCIsImF1dG9Td2ljdGgiLCJwb3NpdGlvbiIsIlNpemUiLCJTY2FsZSIsIlNQQmFzZVciLCJQQ0Jhc2VXIiwiJHRhcmdldExpc3QiLCJpVyIsIndyYXAiLCJQb3NpdGlvbiIsInNldENlbnRlciIsIkRpc3BsYXlPcGVuaW5nIiwic2hvd1BhZ2UiLCJlZmZlY3QiLCJzaWRlUiIsImluTnVtIiwiaW5QYWdlTmFtZSIsImluTmV4dCIsIm5hdiIsImluUGFnZSIsImNyZWF0ZSIsInN3aXRjaEFjdGl2ZSIsImRpc3BsYXkiLCJvcGVuaW5nRWZmZWN0IiwiQ1ZDb250ZW50cyIsInRpbWVsaW5lIiwiY2FudmFzIiwidGxNYWluIiwicGF1c2UiLCJDVkNvbnRlbnRzTG9vcCIsImlzQWx3YXlzIiwiaXNSdW5TdGF0dXMiLCJpc0FkanVzdFBhcmFtIiwic3RhdGUiLCJzb21ldGltZXNTdGF0ZSIsImxvb3BMaXN0IiwibG9vcFN0YXJ0IiwicnVuQWx3YXlzIiwicnVuU3RhdHVzIiwicnVuQWRqdXN0UGFyYW0iLCJkcmF3IiwiQ1ZDb250ZW50c1RpbWVsaW5lIiwiYmVnaW5uaW5nIiwic3RlcDAxIiwic3RlcDAyIiwic3RlcDAzIiwic3RhbmRCeSIsInNvbWV0aW1lcyIsIkNyZWF0ZUNhbnZhcyIsImMiLCJjdyIsImNoIiwiZmlsbFN0eWxlIiwiaXNSZXNpemUiLCJzZXRDYW52YXNTaXplIiwiYXBwZW5kIiwidngiLCJvZmZzZXRGcmFtZSIsIm9mZnNldFZ4IiwieE51bSIsInlOdW0iLCJ0aWxlTGlzdCIsInRpbGUiLCJjdHgiLCJmaWxsUmVjdCIsImFkZE9iamVjdHMiLCJjbnRTdG9wIiwiQ2FudmFzIiwiZ2V0Q29udGV4dCIsIlBsYW5lIiwic3Ryb2tlU3R5bGUiLCJvcCIsImZyYW1lU3RhcnQiLCJpbWdMaXN0IiwiZHJhd0ltYWdlIiwiUGFnZVRyYW5zaXRpb25Db250cm9sbGVyIiwic2V0UGFyYW1JbkVmIiwiYmFja2dyb3VuZENvbG9yIiwiaW5FZmZlY3QiLCJvdXRFZmZlY3QiLCJQYWdlVHJhbnNpdGlvbkVmZmVjdCIsInJlbmRlcmVyIiwic3RhZ2UiLCJteCIsIm15IiwicmFkaXVzIiwicG9pbnRzIiwiY291bnQiLCJpc0NVcGRhdGUiLCJzZWNvbmRQIiwic2Vjb25kU3VtIiwic2Vjb25kQ250Iiwic2Vjb25kRmxhZyIsInRhcmdldFJhZGl1cyIsImhSYWRpdXMiLCJtUmFkaXVzIiwic1JhZGl1cyIsImhIYW5kWCIsIm1IYW5kWCIsInNIYW5kWCIsImhIYW5kWSIsIm1IYW5kWSIsInNIYW5kWSIsImhIYW5kRmxhZyIsIm1IYW5kRmxhZyIsInNIYW5kRmxhZyIsImhSYWQiLCJtUmFkIiwic1JhZCIsImxpbmVXaWR0aCIsInN0YXJ0UmFkMDEiLCJzdGFydFJhZDAyIiwic3RhcnRSYWQwMyIsInN0YXJ0UmFkMDQiLCJzdGFydFJhZDA1Iiwic3RhcnRSYWQwNiIsImVuZFJhZDAxIiwiZW5kUmFkMDIiLCJlbmRSYWQwMyIsImVuZFJhZDA0IiwiZW5kUmFkMDUiLCJlbmRSYWQwNiIsImZpbGxCbGFjayIsImZpbGxUaWZmYW55Qmx1ZSIsIlBJWEkiLCJhdXRvRGV0ZWN0UmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJ0cmFuc3BhcmVudCIsInZpZXciLCJDb250YWluZXIiLCJpbnRlcmFjdGl2ZSIsImFkZE9iamVjdCIsImNvbnRhaW5lciIsImNvbnRhaW5lcjAxIiwiY29udGFpbmVyMDIiLCJjb250YWluZXIwMyIsIm1hc2siLCJHcmFwaGljcyIsImNvbG9yIiwiaEhhbmQiLCJtSGFuZCIsInNIYW5kIiwiYmxlbmRNb2RlIiwiQkxFTkRfTU9ERVMiLCJBREQiLCJhZGRDaGlsZCIsImhvdXJUb3RhbCIsIm1pbnV0ZVRvdGFsIiwic2Vjb25kVG90YWwiLCJob3VyUCIsIm1pbnV0ZVAiLCJ1cGRhdGVUaW1lIiwiY2xlYXIiLCJkcmF3UmVjdCIsImRyYXdDaXJjbGUiLCJkcmF3Q2lyY2xlMDEiLCJkcmF3Q2lyY2xlMDIiLCJkcmF3Q2lyY2xlMDMiLCJkcmF3Q2lyY2xlMDQiLCJkcmF3Q2lyY2xlMDUiLCJkcmF3Q2lyY2xlMDYiLCJyZW5kZXIiLCJ0bDAzIiwiYWxwaGEiLCJvblN0YXJ0IiwicnVuVG9wIiwicnVuT3RoZXIiLCJzZXRQYXJhbU91dEVmIiwicmFkIiwiY29zIiwic2luIiwibGluZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwiZW5kRmlsbCIsImdldFNIYW5kTGVuZ3RoIiwidGFyZ2V0UmFkIiwicmlnaHRCdG1BbmciLCJhdGFuMiIsImxlZnRCdG1BbmciLCJsZWZ0VG9wQW5nIiwicmlnaHRUb3BBbmciLCJzdGFydFJhZCIsImVuZFJhZCIsImJlZ2luRmlsbCIsImFyYyIsInJlc2l6ZSIsIlBvaW50Iiwic3giLCJzeSIsImV4IiwidnkiLCJkZWZYIiwiZGVmWSIsInB4IiwicHkiLCJpc1JlbW92ZSIsIkdSQVZJVFkiLCJTUFJJTkciLCJGUklDVElPTiIsIk1BWF9ESVMiLCJUb3BPcGVuaW5nIiwibGlicyIsImh0Iiwic2V0dXBGaXJzdCIsIiRuYXYiLCIkbmF2SXRlbSIsIiRzaWRlUiIsIiRmb290ZXJUZXh0IiwiJGFycm93IiwiJGNvcHkiLCIkdGltZSIsIiRzaWRlTCIsIiR0aXQwMSIsIiR0aXQwMiIsIiR0aXQwMyIsIm9wdCIsImR1ciIsImJsdXIiLCJibHVyVGFyZ2V0IiwiZWFzZUluIiwieiIsInJ1bkZpcnN0IiwiYXV0b0Fycm93IiwiRG9tTW90aW9uTGlicyIsImZpcnN0IiwiZGVmIiwib25VcGRhdGUiLCJvblVwZGF0ZVBhcmFtcyIsImdyYXlzY2FsZSIsImdyYXlzY2FsZVRhcmdldCIsImJyaWdodG5lc3MiLCJicmlnaHRuZXNzVGFyZ2V0Iiwib3BhY2l0eVRhcmdldCIsIm1hZyIsImxhZyIsImRvbSIsImNsb25lIiwiZHVyMDIiLCJkdXIwMyIsInNjYWxlVGFyZ2V0IiwiUG93ZXIwIiwiZWFzZU5vbmUiLCJzY2FsZVgiLCJzY2FsZVkiLCJFbGFzdGljIiwiZnJvbVRvIiwicmVwZWF0RGVsYXkiLCJIb3ZlckVmZmVjdFNWR0Fycm93VG9wIiwiaXNIb3ZlciIsImF1dG9UTCIsIkhvdmVyRWZmZWN0U1ZHIiwiaG92ZXJDb2xvciIsImRlZkNvbG9yIiwiZmlsbCIsIkhvdmVyRWZmZWN0U1ZHTG9nbyIsIkhvdmVyRWZmZWN0TWVudUJ0biIsIiRiYXIwMSIsIiRiYXIwMiIsIiRiYXIwMyIsIkhvdmVyRWZmZWN0U1ZHQXJyb3ciLCJkcmF3U1ZHIiwic3Ryb2tlIiwiSG92ZXJFZmZlY3RTTlNQQ0Zvb3RlciIsIiRpbm5lciIsIiRsaXN0IiwiJGl0ZW0iLCJIb3ZlckVmZmVjdFNWR0Fycm93U2lkZVIiLCJNYWluIiwicGFnZSIsIkRpc3BsYXlUb3AiLCJzY2FsZVRvcCIsInNuc1NQSG92ZXJFZiIsIkVmZmVjdHMiLCJnbCIsImRlYnVnIiwiR2xDb250ZW50cyIsImNhbWVyYSIsInNjZW5lIiwibGlnaHQiLCJhZGp1c3RQYXJhbSIsInN0YXRlTGluZVJvdGF0ZSIsImlzQ29udHJvbCIsIldlYkdMUmVuZGVyZXIiLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsImRvbUVsZW1lbnQiLCJTY2VuZSIsIkNhbWVyYSIsIkRpcmVjdGlvbmFsTGlnaHQiLCJzZWN0aW9uMDRQcm9kdWN0U2hhZGVyIiwicGxhbmUiLCJUcmFja2JhbGxDb250cm9scyIsInpvb21TcGVlZCIsInJvdGF0ZVNwZWVkIiwiUHJvZmlsZXIiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4Iiwib25DaGFuZ2VGdW5jTGlzdCIsIm9uU2VjdGlvbjA0IiwiR2xDb250ZW50c0xvb3AiLCJTZWN0aW9uMDRQcm9kdWN0IiwidXBkYXRlQ29udHJvbGwiLCJHbENvbnRlbnRzVGltZWxpbmUiLCJ1bmlmb3JtcyIsInN0cmVuZ3RoIiwiZnJvbSIsInBsYW5lMDIiLCJtYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwidnMiLCJmcmFnbWVudFNoYWRlciIsImZzIiwicHJvZ3Jlc3MiLCJvblJlc2l6c2UiLCJTb21lVGltZXMiLCJjYkxpc3QiLCJvcmRlciIsImxhdGVyIiwiZ2VvbWV0cnkiLCJkZWZXVyIsImRlZkhIIiwicmF0ZVciLCJsYiIsImltYWdlIiwiUGxhbmVHZW9tZXRyeSIsIk1lc2giLCJ0ZXh0dXJlMDEiLCJQYXJhbSIsImd1aSIsImpzb24iLCJpc0ZsYWciLCJjbG9jayIsInpvb21ibHVyIiwidHJhbnNpdGlvbiIsInpvb20iLCJjb2xvclNlcGFyYXRpb24iLCJ0d2VlbiIsInNldHVwRGF0YSIsImRhdCIsIkdVSSIsInJlbWVtYmVyIiwiekluZGV4IiwiZjEiLCJhZGRGb2xkZXIiLCJzdGVwIiwibGlzdGVuIiwib25DaGFuZ2UiLCJuRnJhZyIsIlN0YXRzIiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsIkhvdmVyRWZmZWN0U05TU1BGb290ZXIiLCJjbG9zZSIsInRvZ2dsZUNsYXNzIiwiJGJveCIsInRvZ2dsZSIsIldlYkdMaW5pdCIsIndlYmdsSW5pdCIsIl93ZWJnbEluaXQiLCJjcmVhdGVfc2hhZGVyIiwiX2NyZWF0ZV9zaGFkZXIiLCJjcmVhdGVfcHJvZ3JhbSIsIl9jcmVhdGVfcHJvZ3JhbSIsImNyZWF0ZV92Ym8iLCJfY3JlYXRlX3ZibyIsImdldEVsZW1lbnRCeUlkIiwiY2xlYXJDb2xvciIsImNsZWFyRGVwdGgiLCJDT0xPUl9CVUZGRVJfQklUIiwiREVQVEhfQlVGRkVSX0JJVCIsInZfc2hhZGVyIiwiZl9zaGFkZXIiLCJwcmciLCJhdHRMb2NhdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwiYXR0U3RyaWRlIiwidmVydGV4X3Bvc2l0aW9uIiwidmJvIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwibWF0SVYiLCJtTWF0cml4IiwiaWRlbnRpdHkiLCJ2TWF0cml4IiwicE1hdHJpeCIsIm12cE1hdHJpeCIsImxvb2tBdCIsInBlcnNwZWN0aXZlIiwibXVsdGlwbHkiLCJ1bmlMb2NhdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInVuaWZvcm1NYXRyaXg0ZnYiLCJkcmF3QXJyYXlzIiwiVFJJQU5HTEVTIiwiZmx1c2giLCJzY3JpcHRFbGVtZW50IiwiY3JlYXRlU2hhZGVyIiwiVkVSVEVYX1NIQURFUiIsIkZSQUdNRU5UX1NIQURFUiIsInNoYWRlclNvdXJjZSIsImNvbXBpbGVTaGFkZXIiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJDT01QSUxFX1NUQVRVUyIsImdldFNoYWRlckluZm9Mb2ciLCJwcm9ncmFtIiwiY3JlYXRlUHJvZ3JhbSIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwidXNlUHJvZ3JhbSIsImdldFByb2dyYW1JbmZvTG9nIiwiY3JlYXRlQnVmZmVyIiwiYnVmZmVyRGF0YSIsIkZsb2F0MzJBcnJheSIsIlNUQVRJQ19EUkFXIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDakNBOzs7O0FBQ0E7Ozs7OztBQUNBOztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxFQUFDLFlBQUk7O0FBRUg7QUFDQSxPQUFJQSxPQUFPQyxFQUFQLEtBQVlDLFNBQWhCLEVBQTJCRixPQUFPQyxFQUFQLEdBQVksRUFBWjtBQUMzQkQsVUFBT0MsRUFBUCxDQUFVRSxFQUFWLEdBQWUsRUFBZixDQUpHLENBSWdCOztBQUVuQkYsTUFBR0UsRUFBSCxDQUFNQyxNQUFOLEdBQWUsc0JBQWY7QUFDQTtBQUNBSCxNQUFHRSxFQUFILENBQU1FLElBQU4sR0FBYSxvQkFBYjtBQUVELEVBVkQsSTs7Ozs7Ozs7Ozs7O3NqQkNUQTs7Ozs7Ozs7QUFtQkE7OztBQUtBO0FBQ0E7OztBQWpCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7OztLQUdxQkMsTTtBQUVuQixxQkFBYztBQUFBOztBQUVaLFVBQUtDLFdBQUw7QUFDQSxVQUFLQyxTQUFMO0FBRUQ7Ozs7bUNBRWE7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBUCxVQUFHRSxFQUFILENBQU1NLElBQU4sR0FBYSxvQkFBYjtBQUNBUixVQUFHRSxFQUFILENBQU1PLENBQU4sR0FBVSxvQkFBVjtBQUNBVCxVQUFHRSxFQUFILENBQU1RLENBQU4sR0FBVSxvQkFBVjtBQUNBVixVQUFHRSxFQUFILENBQU1TLEVBQU4sR0FBVyx5QkFBWDtBQUNBWCxVQUFHRSxFQUFILENBQU1VLENBQU4sR0FBVSx5QkFBVjtBQUNBWixVQUFHRSxFQUFILENBQU1XLENBQU4sR0FBVSx5QkFBVjtBQUNBYixVQUFHRSxFQUFILENBQU1ZLENBQU4sR0FBVSx3QkFBVjtBQUNBZCxVQUFHRSxFQUFILENBQU1hLEVBQU4sR0FBVyx3QkFBWDtBQUNBZixVQUFHRSxFQUFILENBQU1jLE9BQU4sR0FBZ0IsdUJBQWhCO0FBQ0FoQixVQUFHRSxFQUFILENBQU1lLEdBQU4sR0FBWSxnQ0FBWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQWpCLFVBQUdFLEVBQUgsQ0FBTWdCLE1BQU4sR0FBZSxzQkFBZjs7QUFHQTtBQUNBbEIsVUFBR0UsRUFBSCxDQUFNYSxFQUFOLENBQVNJLGVBQVQsR0FBMkIsWUFBSTtBQUFDO0FBQXNCLFFBQXREO0FBRUQ7OzsrQkFFUzs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FuQixVQUFHRSxFQUFILENBQU1rQixFQUFOLEdBQVcsZ0NBQVg7QUFDQXBCLFVBQUdFLEVBQUgsQ0FBTW1CLE1BQU4sR0FBZSxtQ0FBZjtBQUNBckIsVUFBR0UsRUFBSCxDQUFNb0IsR0FBTixHQUFZLGtCQUFRQyxFQUFFLFVBQUYsQ0FBUixFQUFzQkEsRUFBRSxVQUFGLENBQXRCLEVBQW9DQSxFQUFFLFlBQUYsQ0FBcEMsRUFBb0RBLEVBQUUsU0FBRixDQUFwRCxDQUFaO0FBQ0F2QixVQUFHRSxFQUFILENBQU1zQixHQUFOLEdBQVksK0JBQVo7O0FBRUF4QixVQUFHRSxFQUFILENBQU1RLENBQU4sQ0FBUWUsYUFBUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0F6QixVQUFHRSxFQUFILENBQU13QixTQUFOLEdBQWtCLHdCQUFjSCxFQUFFLGdCQUFGLENBQWQsQ0FBbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0F2QixVQUFHRSxFQUFILENBQU15QixvQkFBTixHQUE2Qix1Q0FBeUJKLEVBQUUsc0JBQUYsQ0FBekIsQ0FBN0I7QUFDQXZCLFVBQUdFLEVBQUgsQ0FBTTBCLFVBQU4sR0FBbUIsMEJBQW5CO0FBQ0E1QixVQUFHRSxFQUFILENBQU0yQixPQUFOLEdBQWdCLDBCQUFoQjs7QUFFQTdCLFVBQUdFLEVBQUgsQ0FBTTRCLElBQU4sR0FBYSw2QkFBbUJQLEVBQUUsV0FBRixDQUFuQixFQUFrQyxNQUFsQyxFQUF5QyxNQUF6QyxDQUFiO0FBQ0F2QixVQUFHRSxFQUFILENBQU02QixJQUFOLEdBQWEsNkJBQW1CUixFQUFFLFlBQUYsQ0FBbkIsRUFBbUMsU0FBbkMsRUFBNkMsTUFBN0MsQ0FBYjtBQUNBdkIsVUFBR0UsRUFBSCxDQUFNOEIsSUFBTixHQUFhLDZCQUFtQlQsRUFBRSxjQUFGLENBQW5CLEVBQXFDLFNBQXJDLEVBQStDLE1BQS9DLENBQWI7QUFDQXZCLFVBQUdFLEVBQUgsQ0FBTStCLElBQU4sR0FBYSxpQ0FBdUJWLEVBQUUsZ0NBQUYsQ0FBdkIsQ0FBYjtBQUNBO0FBQ0F2QixVQUFHRSxFQUFILENBQU1nQyxJQUFOLEdBQWEsdUNBQTZCWCxFQUFFLGNBQUYsQ0FBN0IsQ0FBYjtBQUNBO0FBQ0F2QixVQUFHRSxFQUFILENBQU1pQyxJQUFOLEdBQWEscUNBQTJCWixFQUFFLGdCQUFGLENBQTNCLENBQWI7O0FBRUE7QUFDQTs7QUFFQXZCLFVBQUdFLEVBQUgsQ0FBTWMsT0FBTixDQUFjb0IsS0FBZDtBQUVEOzs7OEJBRVE7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUQ7OztpQ0FFVzs7QUFFVmIsU0FBRWMsUUFBRixFQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixLQUFLQyxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBeEI7QUFDQWpCLFNBQUV4QixNQUFGLEVBQVV1QyxFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLRyxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7Ozs7O21CQWpJa0JuQyxNOzs7Ozs7Ozs7Ozs7c2pCQ2xEckI7Ozs7Ozs7O0FBUUE7Ozs7Ozs7O0tBRXFCcUMsSTtBQUVuQixtQkFBYztBQUFBOztBQUVaO0FBQ0E7QUFDQTtBQUNBLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBS0MsR0FBTCxHQUFXO0FBQ1RDLFlBQUksSUFESyxFQUNFO0FBQ1hDLGNBQU0sSUFGRyxFQUVHO0FBQ1pDLGNBQU0sSUFIRyxDQUdHO0FBSEgsTUFBWDtBQUtBLFNBQUksQ0FBQyxLQUFLSixPQUFWLEVBQW1CO0FBQ2pCLFlBQUtDLEdBQUwsR0FBVztBQUNUQyxjQUFJLEtBREs7QUFFVEMsZ0JBQU0sS0FGRztBQUdUQyxnQkFBTTtBQUhHLFFBQVg7QUFLRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxVQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLFVBQUtDLElBQUwsR0FBWSxHQUFaOztBQUVBLFVBQUtDLENBQUwsR0FBUyxJQUFUO0FBQ0EsVUFBS0MsQ0FBTCxHQUFTLEdBQVQ7O0FBRUEsVUFBS0MsR0FBTCxHQUFXLEdBQVg7QUFDQSxVQUFLQyxHQUFMLEdBQVcsR0FBWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFLQyxFQUFMLEdBQVUsR0FBVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLFVBQUtDLElBQUwsR0FBWSxDQUNWO0FBQ0ksY0FBTyxPQURYO0FBRUksZ0JBQVMsQ0FBQyxTQUFELEVBQVcsV0FBWCxFQUF1QixPQUF2QjtBQUZiLE1BRFUsRUFLVjtBQUNJLGNBQU8sTUFEWDtBQUVJLGdCQUFTLENBQUMsUUFBRCxFQUFVLFFBQVYsRUFBbUIsUUFBbkI7QUFGYixNQUxVLEVBU1Y7QUFDSSxjQUFPLFNBRFg7QUFFSSxnQkFBUyxDQUFDLElBQUQ7QUFGYixNQVRVLENBQVo7QUFjQSxVQUFLQyxVQUFMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQUtDLFNBQUwsR0FBaUIscUJBQWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsR0FBbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixhQUFuQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsYUFBbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixLQUFyQjtBQUVEOzs7O2tDQUdXOztBQUVWLFdBQUlDLENBQUosRUFBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxLQUFqQixFQUF3QkMsR0FBeEIsRUFBNkJDLElBQTdCLEVBQW1DQyxLQUFuQzs7QUFFQUYsYUFBTUcsU0FBU0MsTUFBVCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEIsRUFBNkIsRUFBN0IsRUFBaUNDLEtBQWpDLENBQXVDLEdBQXZDLENBQU47O0FBRUEsWUFBS1YsSUFBSSxDQUFKLEVBQU9FLE1BQU1FLElBQUlPLE1BQXRCLEVBQThCWCxJQUFJRSxHQUFsQyxFQUF1Q0YsR0FBdkMsRUFBNEM7QUFDMUNHLGlCQUFRQyxJQUFJSixDQUFKLENBQVI7QUFDQUssZ0JBQU9GLE1BQU1PLEtBQU4sQ0FBWSxHQUFaLENBQVAsRUFBeUJULE1BQU1JLEtBQUssQ0FBTCxDQUEvQixFQUF3Q0MsUUFBUUQsS0FBSyxDQUFMLENBQWhEOztBQUVBLGNBQUssSUFBSU8sSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtuQixJQUFMLENBQVVrQixNQUE5QixFQUFzQ0MsR0FBdEMsRUFBMkM7O0FBRXpDLGVBQUlDLE1BQU0sS0FBS3BCLElBQUwsQ0FBVW1CLENBQVYsQ0FBVjs7QUFFQTtBQUNBLGVBQUlDLElBQUlaLEdBQUosS0FBWUEsR0FBaEIsRUFBcUI7O0FBRW5CO0FBQ0Esa0JBQUssSUFBSWEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxJQUFJUCxLQUFKLENBQVVLLE1BQTlCLEVBQXNDRyxHQUF0QyxFQUEyQzs7QUFFekMsbUJBQUlDLE1BQU1GLElBQUlQLEtBQUosQ0FBVVEsQ0FBVixDQUFWOztBQUVBO0FBQ0EsbUJBQUlDLFFBQVFULEtBQVosRUFBbUIsS0FBS08sSUFBSVosR0FBVCxJQUFnQmMsR0FBaEI7QUFFcEI7QUFHRjtBQUdGO0FBRUY7QUFFRjs7Ozs7O21CQTFIa0JwQyxJOzs7Ozs7Ozs7Ozs7OztBQ1ZyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQUVxQnFDLFMsR0FFbkIscUJBQWM7O0FBRVo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQTNCWTtBQTZCYixFOzttQkEvQmtCQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7Ozs7O0tBUXFCQyxJO0FBRW5CLG1CQUFjO0FBQUE7O0FBRVosVUFBS0MsRUFBTCxHQUFVbEYsT0FBT21GLFNBQVAsQ0FBaUJDLFNBQWpCLENBQTJCQyxXQUEzQixFQUFWLENBRlksQ0FFd0M7QUFDcEQsVUFBS0MsSUFBTCxHQUFZdEYsT0FBT21GLFNBQVAsQ0FBaUJJLFVBQWpCLENBQTRCRixXQUE1QixFQUFaLENBSFksQ0FHMkM7QUFDdkQsVUFBS0csT0FBTCxHQUFlLElBQWYsQ0FKWSxDQUlTO0FBQ3JCLFVBQUtDLE9BQUwsR0FBZSxJQUFmLENBTFksQ0FLUzs7QUFFckIsVUFBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxVQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLElBQVo7O0FBRUEsVUFBS0MsSUFBTCxHQUFZLElBQVo7O0FBRUEsVUFBS0MsV0FBTCxHQUFtQixLQUFuQjs7QUFHQSxVQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFVBQUtDLEdBQUwsR0FBVyxJQUFJQyxJQUFKLEVBQVg7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzRCQUNPQyxHLEVBQUtDLEcsRUFBSzs7QUFFZixjQUFPQyxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsTUFBa0JILE1BQU0sQ0FBUCxHQUFZRCxHQUE3QixJQUFvQ0EsR0FBaEQsQ0FBUDtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7NkJBQ1FLLEksRUFBTUMsSSxFQUFNQyxJLEVBQU1DLEksRUFBTTs7QUFFOUIsV0FBSSxLQUFLQyxHQUFMLENBQVMsQ0FBVCxDQUFKLEVBQWlCO0FBQ2YsZ0JBQU8sS0FBS0wsTUFBTCxDQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixDQUFQO0FBQ0QsUUFGRCxNQUVPO0FBQ0wsZ0JBQU8sS0FBS0YsTUFBTCxDQUFZRyxJQUFaLEVBQWtCQyxJQUFsQixDQUFQO0FBQ0Q7QUFFRjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O3lCQUNJRSxLLEVBQU87O0FBRVQsY0FBTyxLQUFLTixNQUFMLENBQVksQ0FBWixFQUFlTSxRQUFRLENBQXZCLE1BQThCLENBQXJDO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsyQkFDTS9CLEcsRUFBSzs7QUFFVCxjQUFPLEtBQUt5QixNQUFMLENBQVksQ0FBQ3pCLEdBQWIsRUFBa0JBLEdBQWxCLENBQVA7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7eUJBQ0lnQyxHLEVBQUtDLE0sRUFBUUMsTSxFQUFRQyxPLEVBQVNDLE8sRUFBUzs7QUFFekMsV0FBSUMsQ0FBSjtBQUNBLFdBQUlMLE1BQU1HLE9BQVYsRUFBbUI7QUFDakIsZ0JBQU9GLE1BQVA7QUFDRDtBQUNELFdBQUlELE1BQU1JLE9BQVYsRUFBbUI7QUFDakIsZ0JBQU9GLE1BQVA7QUFDRDtBQUNERyxXQUFJLENBQUNILFNBQVNELE1BQVYsS0FBcUJHLFVBQVVELE9BQS9CLENBQUo7O0FBRUEsY0FBUSxDQUFDSCxNQUFNRyxPQUFQLElBQWtCRSxDQUFuQixHQUF3QkosTUFBL0I7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7NkJBQ1FELEcsRUFBS00sQyxFQUFHO0FBQ2QsV0FBSXJELENBQUosRUFBT3NELEdBQVA7QUFDQVAsYUFBTVEsT0FBT1IsR0FBUCxDQUFOO0FBQ0FPLGFBQU1QLElBQUlTLE9BQUosQ0FBWSxHQUFaLENBQU47QUFDQSxXQUFJSCxNQUFNLENBQVYsRUFBYTtBQUNYLGdCQUFPTixJQUFJckMsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLENBQVA7QUFDRDtBQUNELFdBQUk0QyxRQUFRLENBQUMsQ0FBYixFQUFnQjtBQUNkUCxnQkFBTyxHQUFQO0FBQ0EvQyxhQUFJLENBQUo7QUFDQSxnQkFBT0EsSUFBSXFELENBQVgsRUFBYztBQUNaTixrQkFBTyxHQUFQO0FBQ0EvQztBQUNEO0FBQ0QsZ0JBQU8rQyxHQUFQO0FBQ0Q7QUFDREEsYUFBTUEsSUFBSVUsTUFBSixDQUFXLENBQVgsRUFBY0gsR0FBZCxJQUFxQlAsSUFBSVUsTUFBSixDQUFXSCxHQUFYLEVBQWdCRCxJQUFJLENBQXBCLENBQTNCO0FBQ0EsY0FBT04sR0FBUDtBQUNEOzs7MkJBRUtXLFMsRUFBVUMsVyxFQUFZNUMsRyxFQUFLOztBQUUvQixjQUFPQSxPQUFPMkMsWUFBWUMsV0FBbkIsQ0FBUDtBQUVEOzs7NEJBRU1DLE8sRUFBUzs7QUFFZCxjQUFPQSxVQUFVLEdBQVYsR0FBZ0J0QixLQUFLdUIsRUFBNUIsQ0FGYyxDQUVrQjtBQUVqQzs7QUFFRDs7Ozs0QkFDT0MsSyxFQUFPOztBQUVaLGNBQU9BLFFBQVF4QixLQUFLdUIsRUFBYixHQUFrQixHQUF6QixDQUZZLENBRWtCO0FBRS9COzs7MEJBRUlFLEUsRUFBSUMsRSxFQUFJOztBQUVYLGNBQU8xQixLQUFLMkIsSUFBTCxDQUFVM0IsS0FBSzRCLEdBQUwsQ0FBU0YsR0FBR0csQ0FBSCxHQUFPSixHQUFHSSxDQUFuQixFQUFzQixDQUF0QixJQUEyQjdCLEtBQUs0QixHQUFMLENBQVNGLEdBQUdJLENBQUgsR0FBT0wsR0FBR0ssQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBckMsQ0FBUDtBQUVEOzs7NEJBRU1DLEcsRUFBSzs7QUFFVkEsV0FBSUMsSUFBSixDQUFTLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQ3BCLGFBQUlELElBQUlDLENBQVIsRUFBWSxPQUFPLENBQUMsQ0FBUjtBQUNaLGFBQUlELElBQUlDLENBQVIsRUFBWSxPQUFPLENBQVA7QUFDWixnQkFBTyxDQUFQO0FBQ0QsUUFKRDtBQUtBO0FBQ0E7QUFFRDs7OzZCQUVPSCxHLEVBQUs7O0FBRVhBLFdBQUlDLElBQUosQ0FBUyxVQUFTQyxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUNwQixhQUFJRCxJQUFJQyxDQUFSLEVBQVksT0FBTyxDQUFDLENBQVI7QUFDWixhQUFJRCxJQUFJQyxDQUFSLEVBQVksT0FBTyxDQUFQO0FBQ1osZ0JBQU8sQ0FBUDtBQUNELFFBSkQ7O0FBTUE7QUFDQTtBQUVEOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7OzsrQkFFVWxFLEssRUFBTzhCLEcsRUFBS0MsRyxFQUFLOztBQUV6QixjQUFPQyxLQUFLRixHQUFMLENBQVNDLEdBQVQsRUFBY0MsS0FBS0QsR0FBTCxDQUFTL0IsS0FBVCxFQUFnQjhCLEdBQWhCLENBQWQsQ0FBUDs7QUFFQTtBQUNBO0FBQ0E7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7NkJBQ1FpQyxHLEVBQUs7O0FBRVgsY0FBT0EsSUFBSSxLQUFLN0IsTUFBTCxDQUFZLENBQVosRUFBZTZCLElBQUkxRCxNQUFKLEdBQWEsQ0FBNUIsQ0FBSixDQUFQO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7NkJBQ1E4RCxHLEVBQUs7O0FBRVgsV0FBSUosTUFBTSxFQUFWO0FBQ0FBLGFBQU1JLElBQUlDLEtBQUosRUFBTjtBQUNBLFdBQUkxRSxJQUFJcUUsSUFBSTFELE1BQVo7QUFDQSxjQUFNWCxDQUFOLEVBQVE7QUFDTixhQUFJWSxJQUFJMEIsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWN4QyxDQUF6QixDQUFSO0FBQ0EsYUFBSTJFLElBQUlOLElBQUksRUFBRXJFLENBQU4sQ0FBUjtBQUNBcUUsYUFBSXJFLENBQUosSUFBU3FFLElBQUl6RCxDQUFKLENBQVQ7QUFDQXlELGFBQUl6RCxDQUFKLElBQVMrRCxDQUFUO0FBQ0Q7QUFDRCxjQUFPTixHQUFQO0FBRUQ7O0FBRUQ7Ozs7K0JBQ1duRSxHLEVBQUs7O0FBRWQsV0FBSW1FLE1BQU0sSUFBSU8sS0FBSixFQUFWOztBQUVBLFlBQUssSUFBSTVFLElBQUksQ0FBYixFQUFnQkEsSUFBSUUsR0FBcEIsRUFBeUJGLEdBQXpCO0FBQThCcUUsYUFBSVEsSUFBSixDQUFTN0UsQ0FBVDtBQUE5QixRQUVBcUUsTUFBTSxLQUFLUyxVQUFMLENBQWdCVCxHQUFoQixDQUFOOztBQUVBLGNBQU9BLEdBQVA7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OytCQUNVQSxHLEVBQUs7O0FBRWIsV0FBSXJFLENBQUosRUFBTytFLENBQVAsRUFBVUMsSUFBVixFQUFnQkMsTUFBaEIsRUFBd0JsRSxHQUF4QjtBQUNBa0UsZ0JBQVMsRUFBVDtBQUNBLFlBQUtqRixJQUFJK0UsSUFBSSxDQUFSLEVBQVdDLE9BQU9YLElBQUkxRCxNQUEzQixFQUFtQ29FLElBQUlDLElBQXZDLEVBQTZDaEYsSUFBSSxFQUFFK0UsQ0FBbkQsRUFBc0Q7QUFDcERoRSxlQUFNc0QsSUFBSXJFLENBQUosQ0FBTjtBQUNBLGFBQUllLFFBQVEsSUFBWixFQUFrQjtBQUNoQmtFLGtCQUFPSixJQUFQLENBQVk5RCxHQUFaO0FBQ0Q7QUFDRjtBQUNELGNBQU9rRSxNQUFQO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzBCQUNLWixHLEVBQUthLEksRUFBTUMsSSxFQUFNO0FBQ3BCLFdBQUlBLFNBQVMsS0FBSyxDQUFsQixFQUFxQjtBQUNuQkEsZ0JBQU8sS0FBUDtBQUNEO0FBQ0QsV0FBSUEsSUFBSixFQUFVO0FBQ1IsZ0JBQU9kLElBQUlDLElBQUosQ0FBUyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUM3QixrQkFBT0EsRUFBRVUsSUFBRixJQUFVWCxFQUFFVyxJQUFGLENBQWpCO0FBQ0QsVUFGTSxDQUFQO0FBR0QsUUFKRCxNQUlPO0FBQ0wsZ0JBQU9iLElBQUlDLElBQUosQ0FBUyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUM3QixrQkFBT0QsRUFBRVcsSUFBRixJQUFVVixFQUFFVSxJQUFGLENBQWpCO0FBQ0QsVUFGTSxDQUFQO0FBR0Q7QUFDRjs7OzRCQUVNRSxJLEVBQUs5RSxLLEVBQU87QUFDZixXQUFJK0UsWUFBWSxFQUFoQjtBQUNBLFlBQUksSUFBSXBGLEdBQVIsSUFBZW1GLElBQWYsRUFBb0I7QUFDaEIsYUFBSUEsS0FBS25GLEdBQUwsS0FBYUssS0FBakIsRUFBd0I7QUFDcEIrRSxxQkFBVVIsSUFBVixDQUFlNUUsR0FBZjtBQUNIO0FBQ0o7QUFDRCxjQUFPb0YsU0FBUDtBQUNIOztBQUVEO0FBQ0E7Ozs7OEJBQ1M7O0FBRVAsY0FBTyxJQUFJbEQsSUFBSixHQUFXbUQsT0FBWCxFQUFQO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Z0NBQ1dDLEcsRUFBSzs7QUFFZCxXQUFJQSxHQUFKLEVBQVM7QUFDUCxnQkFBTy9ILEVBQUUsTUFBRixFQUFVZ0ksR0FBVixDQUFjLFFBQWQsRUFBd0IsU0FBeEIsQ0FBUDtBQUNELFFBRkQsTUFFTztBQUNMLGdCQUFPaEksRUFBRSxNQUFGLEVBQVVnSSxHQUFWLENBQWMsUUFBZCxFQUF3QixTQUF4QixDQUFQO0FBQ0Q7QUFFRjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2tDQUVZOztBQUVWLFdBQUlDLFFBQVEsQ0FBQyxRQUFELEVBQVUsTUFBVixFQUFpQixNQUFqQixFQUF3QixTQUF4QixFQUFrQyxPQUFsQyxFQUEwQyxTQUExQyxFQUFvRCxnQkFBcEQsRUFBcUUsZ0JBQXJFLEVBQXNGLGdCQUF0RixFQUF1RyxnQkFBdkcsRUFBd0gsZ0JBQXhILEVBQXlJLE9BQXpJLEVBQWlKLFdBQWpKLEVBQTZKLFNBQTdKLENBQVo7QUFDQSxXQUFJQyxVQUFVLElBQUlDLE1BQUosQ0FBV0YsTUFBTUcsSUFBTixDQUFXLEdBQVgsQ0FBWCxFQUEyQixHQUEzQixDQUFkOztBQUVBLFdBQUlwQixJQUFJa0IsUUFBUUcsSUFBUixDQUFhLEtBQUszRSxFQUFsQixDQUFSO0FBQ0EsV0FBSXNELENBQUosRUFBT2hILEVBQUUsTUFBRixFQUFVc0ksUUFBVixDQUFtQixZQUFuQjs7QUFFUCxZQUFLbkUsSUFBTCxHQUFZNkMsQ0FBWjtBQUVEOzs7bUNBQ1k7O0FBRVgsV0FBSUEsSUFBSyxLQUFLdEQsRUFBTCxDQUFRc0MsT0FBUixDQUFnQixTQUFoQixLQUE4QixDQUFDLENBQS9CLElBQW9DLEtBQUt0QyxFQUFMLENBQVFzQyxPQUFSLENBQWdCLE9BQWhCLEtBQTRCLENBQUMsQ0FBbEUsSUFDSCxLQUFLdEMsRUFBTCxDQUFRc0MsT0FBUixDQUFnQixNQUFoQixLQUEyQixDQUFDLENBRHpCLElBRUYsS0FBS3RDLEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsU0FBaEIsS0FBOEIsQ0FBQyxDQUEvQixJQUFvQyxLQUFLdEMsRUFBTCxDQUFRc0MsT0FBUixDQUFnQixRQUFoQixLQUE2QixDQUFDLENBRmhFLElBR0YsS0FBS3RDLEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsU0FBaEIsS0FBOEIsQ0FBQyxDQUEvQixJQUFvQyxLQUFLdEMsRUFBTCxDQUFRc0MsT0FBUixDQUFnQixRQUFoQixLQUE2QixDQUFDLENBSGhFLElBSUgsS0FBS3RDLEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsUUFBaEIsS0FBNkIsQ0FBQyxDQUozQixJQUtILEtBQUt0QyxFQUFMLENBQVFzQyxPQUFSLENBQWdCLE1BQWhCLEtBQTJCLENBQUMsQ0FMekIsSUFNSCxLQUFLdEMsRUFBTCxDQUFRc0MsT0FBUixDQUFnQixVQUFoQixLQUErQixDQUFDLENBTnJDO0FBT0EsV0FBSWdCLENBQUosRUFBT2hILEVBQUUsTUFBRixFQUFVc0ksUUFBVixDQUFtQixhQUFuQjs7QUFFUCxZQUFLbEUsS0FBTCxHQUFhNEMsQ0FBYjtBQUVEOzs7a0NBRVc7O0FBRVYsV0FBSUEsSUFBSyxLQUFLdEQsRUFBTCxDQUFRc0MsT0FBUixDQUFnQixTQUFoQixLQUE4QixDQUFDLENBQS9CLElBQW9DLEtBQUt0QyxFQUFMLENBQVFzQyxPQUFSLENBQWdCLE9BQWhCLEtBQTRCLENBQUMsQ0FBbEUsSUFDSCxLQUFLdEMsRUFBTCxDQUFRc0MsT0FBUixDQUFnQixRQUFoQixLQUE2QixDQUFDLENBRDNCLElBRUgsS0FBS3RDLEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsTUFBaEIsS0FBMkIsQ0FBQyxDQUZ6QixJQUdGLEtBQUt0QyxFQUFMLENBQVFzQyxPQUFSLENBQWdCLFNBQWhCLEtBQThCLENBQUMsQ0FBL0IsSUFBb0MsS0FBS3RDLEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsUUFBaEIsS0FBNkIsQ0FBQyxDQUhoRSxJQUlGLEtBQUt0QyxFQUFMLENBQVFzQyxPQUFSLENBQWdCLFNBQWhCLEtBQThCLENBQUMsQ0FBL0IsSUFBb0MsS0FBS3RDLEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsUUFBaEIsS0FBNkIsQ0FBQyxDQUpoRSxJQUtILEtBQUt0QyxFQUFMLENBQVFzQyxPQUFSLENBQWdCLFlBQWhCLEtBQWlDLENBQUMsQ0FMdkM7QUFNQSxXQUFJZ0IsQ0FBSixFQUFPaEgsRUFBRSxNQUFGLEVBQVVzSSxRQUFWLENBQW1CLFlBQW5COztBQUVQLFlBQUtqRSxJQUFMLEdBQVkyQyxDQUFaO0FBRUQ7OztrQ0FFVzs7QUFFVixXQUFJLEVBQUUsS0FBSzdDLElBQUwsSUFBYSxLQUFLQyxLQUFsQixJQUEyQixLQUFLQyxJQUFsQyxDQUFKLEVBQTZDOztBQUUzQ3JFLFdBQUUsTUFBRixFQUFVc0ksUUFBVixDQUFtQixZQUFuQjtBQUNBLGNBQUtwRSxJQUFMLEdBQVksSUFBWjtBQUNBO0FBRUQ7O0FBRUQsWUFBS0EsSUFBTCxHQUFZLEtBQVo7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7Ozs2QkFDUTs7QUFFTixjQUFPUCxVQUFVQyxTQUFWLENBQW9Cb0MsT0FBcEIsQ0FBNEIsTUFBNUIsSUFBc0MsQ0FBdEMsSUFBMkNyQyxVQUFVQyxTQUFWLENBQW9Cb0MsT0FBcEIsQ0FBNEIsUUFBNUIsSUFBd0MsQ0FBbkYsSUFBd0ZyQyxVQUFVQyxTQUFWLENBQW9Cb0MsT0FBcEIsQ0FBNEIsTUFBNUIsSUFBc0MsQ0FBOUgsSUFBbUlyQyxVQUFVQyxTQUFWLENBQW9Cb0MsT0FBcEIsQ0FBNEIsU0FBNUIsSUFBeUMsQ0FBbkw7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7OztnQ0FDVzs7QUFFVCxjQUFPLEtBQUt1QyxNQUFMLE1BQWtCLEtBQUtDLFNBQUwsTUFBb0I3RSxVQUFVQyxTQUFWLENBQW9Cb0MsT0FBcEIsQ0FBNEIsUUFBNUIsTUFBMEMsQ0FBQyxDQUF4RjtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7OzhCQUNTOztBQUVQLGNBQU9yQyxVQUFVQyxTQUFWLENBQW9Cb0MsT0FBcEIsQ0FBNEIsTUFBNUIsSUFBc0MsQ0FBN0M7QUFFRDs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O2lDQUNZOztBQUVWLFdBQUk5RyxDQUFKO0FBQ0FBLFdBQUl5RSxVQUFVQyxTQUFkO0FBQ0EsY0FBTzFFLEVBQUU4RyxPQUFGLENBQVUsWUFBVixJQUEwQixDQUExQixJQUErQjlHLEVBQUU4RyxPQUFGLENBQVUsU0FBVixJQUF1QixDQUF0RCxJQUEyRDlHLEVBQUU4RyxPQUFGLENBQVUsZUFBVixJQUE2QixDQUEvRjtBQUVEOzs7Z0NBRVM7QUFDUixXQUFJa0MsVUFBVSxJQUFJQyxNQUFKLENBQVcsUUFBWCxFQUFvQixHQUFwQixDQUFkO0FBQ0EsY0FBT0QsUUFBUUcsSUFBUixDQUFhLEtBQUszRSxFQUFsQixDQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7NkJBQ1E7O0FBRU4sY0FBT0MsVUFBVUMsU0FBVixDQUFvQm9DLE9BQXBCLENBQTRCLE1BQTVCLElBQXNDLENBQXRDLElBQTJDckMsVUFBVUMsU0FBVixDQUFvQm9DLE9BQXBCLENBQTRCLFFBQTVCLElBQXdDLENBQW5GLElBQXdGckMsVUFBVUMsU0FBVixDQUFvQm9DLE9BQXBCLENBQTRCLE1BQTVCLElBQXNDLENBQXJJO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7NkJBQ1E7O0FBRU4sV0FBSTlHLENBQUo7QUFDQUEsV0FBSXlFLFVBQVVDLFNBQWQ7QUFDQSxjQUFPMUUsRUFBRThHLE9BQUYsQ0FBVSxlQUFWLElBQTZCLENBQXBDO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7OEJBQ1M7O0FBRVAsV0FBSTlHLENBQUo7QUFDQUEsV0FBSXlFLFVBQVVDLFNBQWQ7QUFDQSxjQUFPMUUsRUFBRThHLE9BQUYsQ0FBVSxrQkFBVixJQUFnQyxDQUF2QztBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs0QkFDTzs7QUFFTCxXQUFJdEMsRUFBSjtBQUNBQSxZQUFLbEYsT0FBT21GLFNBQVAsQ0FBaUJDLFNBQWpCLENBQTJCQyxXQUEzQixFQUFMO0FBQ0EsY0FBT0gsR0FBR3NDLE9BQUgsQ0FBVyxNQUFYLE1BQXVCLENBQUMsQ0FBeEIsSUFBNkJ0QyxHQUFHc0MsT0FBSCxDQUFXLFdBQVgsTUFBNEIsQ0FBQyxDQUFqRTtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7OzZCQUNROztBQUVOLGNBQU9yQyxVQUFVOEUsUUFBVixDQUFtQnpDLE9BQW5CLENBQTJCLEtBQTNCLE1BQXNDLENBQUMsQ0FBOUM7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7OztnQ0FDVzs7QUFFVCxjQUFPckMsVUFBVUMsU0FBVixDQUFvQm9DLE9BQXBCLENBQTRCLFFBQTVCLElBQXdDLENBQS9DO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7NEJBQ087O0FBRUwsY0FBT3hILE9BQU9tRixTQUFQLENBQWlCQyxTQUFqQixDQUEyQkMsV0FBM0IsR0FBeUNtQyxPQUF6QyxDQUFpRCxTQUFqRCxNQUFnRSxDQUFDLENBQXhFO0FBRUQ7OztnQ0FFUzs7QUFFUixXQUFHLEtBQUt0QyxFQUFMLENBQVFzQyxPQUFSLENBQWdCLFFBQWhCLEtBQTZCLENBQUMsQ0FBakMsRUFBb0MsT0FBTyxLQUFQO0FBQ3BDLFdBQUcsS0FBS3RDLEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsV0FBaEIsS0FBZ0MsQ0FBQyxDQUFwQyxFQUF1QyxPQUFPLEtBQVA7QUFDdkMsV0FBSWtDLFVBQVUsSUFBSUMsTUFBSixDQUFXLFFBQVgsRUFBb0IsR0FBcEIsQ0FBZDtBQUNBLGNBQU9ELFFBQVFHLElBQVIsQ0FBYSxLQUFLM0UsRUFBbEIsQ0FBUDtBQUVEOzs7K0JBRVE7O0FBRUwsV0FBSXdFLFVBQVUsSUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBbUIsR0FBbkIsQ0FBZDtBQUNBLGNBQU9ELFFBQVFHLElBQVIsQ0FBYSxLQUFLM0UsRUFBbEIsQ0FBUDtBQUVIOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7O21DQUNjOztBQUVaLFdBQUlxRCxDQUFKO0FBQ0FBLFdBQUl2SSxPQUFPbUYsU0FBUCxDQUFpQkMsU0FBakIsQ0FBMkJDLFdBQTNCLEVBQUo7QUFDQSxjQUFRLEtBQUs2RSxLQUFMLE1BQWdCM0IsRUFBRWYsT0FBRixDQUFVLFFBQVYsTUFBd0IsQ0FBQyxDQUExQyxJQUFpRCxLQUFLMEMsS0FBTCxNQUFnQjNCLEVBQUVmLE9BQUYsQ0FBVSxPQUFWLElBQXFCLENBQXRGLElBQTZGLEtBQUswQyxLQUFMLE1BQWdCM0IsRUFBRWYsT0FBRixDQUFVLEtBQVYsSUFBbUIsQ0FBdkk7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7a0NBQ2E7O0FBRVgsV0FBSTJDLElBQUo7QUFDQUEsY0FBT2hGLFVBQVVJLFVBQVYsQ0FBcUJGLFdBQXJCLEVBQVA7QUFDQThFLGNBQU9BLEtBQUszQyxPQUFMLENBQWEsTUFBYixJQUF1QixDQUFDLENBQXhCLEdBQTRCNEMsU0FBU0QsS0FBSzFGLE9BQUwsQ0FBYSxXQUFiLEVBQTBCLEVBQTFCLEVBQThCNEYsS0FBOUIsQ0FBb0MsU0FBcEMsQ0FBVCxDQUE1QixHQUF1RixDQUE5RjtBQUNBLGNBQU9GLFFBQVEsQ0FBUixJQUFhQSxTQUFTLENBQTdCO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7a0NBQ2E7O0FBRVgsV0FBSUEsSUFBSjtBQUNBQSxjQUFPaEYsVUFBVUksVUFBVixDQUFxQkYsV0FBckIsRUFBUDtBQUNBOEUsY0FBT0EsS0FBSzNDLE9BQUwsQ0FBYSxNQUFiLElBQXVCLENBQUMsQ0FBeEIsR0FBNEI0QyxTQUFTRCxLQUFLMUYsT0FBTCxDQUFhLFdBQWIsRUFBMEIsRUFBMUIsRUFBOEI0RixLQUE5QixDQUFvQyxTQUFwQyxDQUFULENBQTVCLEdBQXVGLENBQTlGO0FBQ0EsY0FBT0YsUUFBUSxDQUFSLElBQWFBLFNBQVMsQ0FBN0I7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7OzttQ0FDYzs7QUFFWixXQUFJQSxJQUFKO0FBQ0FBLGNBQU9oRixVQUFVSSxVQUFWLENBQXFCRixXQUFyQixFQUFQO0FBQ0E4RSxjQUFPQSxLQUFLM0MsT0FBTCxDQUFhLE1BQWIsSUFBdUIsQ0FBQyxDQUF4QixHQUE0QjRDLFNBQVNELEtBQUsxRixPQUFMLENBQWEsV0FBYixFQUEwQixFQUExQixFQUE4QjRGLEtBQTlCLENBQW9DLFNBQXBDLENBQVQsQ0FBNUIsR0FBdUYsQ0FBOUY7QUFDQSxjQUFPRixRQUFRLEVBQVIsSUFBY0EsU0FBUyxDQUE5QjtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7O21DQUNjOztBQUVaLFdBQUkzQixJQUFJLEtBQUs4QixXQUFMLE1BQXVCLEtBQUtwRixFQUFMLENBQVFzQyxPQUFSLENBQWdCLFNBQWhCLEtBQThCLENBQUMsQ0FBOUQ7QUFDQSxjQUFPZ0IsQ0FBUDtBQUNBO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7OEJBQ1M7O0FBRVArQixXQUFJLEtBQUtyRixFQUFMLENBQVFzQyxPQUFSLENBQWdCLGFBQWhCLENBQUosRUFBbUMsS0FBS3RDLEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsTUFBaEIsQ0FBbkMsRUFBMkQsS0FBS3RDLEVBQWhFLEVBQW1FLEtBQUtJLElBQXhFO0FBQ0EsV0FBSWtELElBQUssS0FBS3RELEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsYUFBaEIsS0FBa0MsQ0FBbEMsSUFBdUMsS0FBS3RDLEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsTUFBaEIsS0FBMkIsQ0FBQyxDQUE1RTtBQUNBLGNBQU9nQixDQUFQO0FBQ0E7QUFFRDs7O21DQUVZOztBQUVYaEgsU0FBRSxNQUFGLEVBQVVzSSxRQUFWLENBQW1CLElBQW5CO0FBQ0EsWUFBS2hFLElBQUwsR0FBWSxJQUFaOztBQUVBLFdBQUksS0FBS1IsSUFBTCxDQUFVa0MsT0FBVixDQUFrQixVQUFsQixLQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDaEcsV0FBRSxNQUFGLEVBQVVzSSxRQUFWLENBQW1CLE1BQW5CO0FBQ0EsZ0JBQU8sTUFBUDtBQUNELFFBSEQsTUFHTyxJQUFJLEtBQUt4RSxJQUFMLENBQVVrQyxPQUFWLENBQWtCLFNBQWxCLEtBQWdDLENBQUMsQ0FBckMsRUFBd0M7QUFDN0NoRyxXQUFFLE1BQUYsRUFBVXNJLFFBQVYsQ0FBbUIsS0FBbkI7QUFDQSxnQkFBTyxLQUFQO0FBQ0QsUUFITSxNQUdBLElBQUksS0FBS3hFLElBQUwsQ0FBVWtDLE9BQVYsQ0FBa0IsU0FBbEIsS0FBZ0MsQ0FBQyxDQUFyQyxFQUF3QztBQUM3Q2hHLFdBQUUsTUFBRixFQUFVc0ksUUFBVixDQUFtQixLQUFuQjtBQUNBLGdCQUFPLEtBQVA7QUFDRCxRQUhNLE1BR0EsSUFBSSxLQUFLeEUsSUFBTCxDQUFVa0MsT0FBVixDQUFrQixTQUFsQixLQUFnQyxDQUFDLENBQXJDLEVBQXdDO0FBQzdDaEcsV0FBRSxNQUFGLEVBQVVzSSxRQUFWLENBQW1CLEtBQW5CO0FBQ0EsZ0JBQU8sS0FBUDtBQUNELFFBSE0sTUFHQSxJQUFJLEtBQUt4RSxJQUFMLENBQVVrQyxPQUFWLENBQWtCLFNBQWxCLEtBQWdDLENBQUMsQ0FBckMsRUFBd0M7QUFDN0NoRyxXQUFFLE1BQUYsRUFBVXNJLFFBQVYsQ0FBbUIsS0FBbkI7QUFDQSxnQkFBTyxLQUFQO0FBQ0QsUUFITSxNQUdBLElBQUksS0FBS3hFLElBQUwsQ0FBVWtDLE9BQVYsQ0FBa0IsU0FBbEIsS0FBZ0MsQ0FBQyxDQUFyQyxFQUF3QztBQUM3Q2hHLFdBQUUsTUFBRixFQUFVc0ksUUFBVixDQUFtQixNQUFuQjtBQUNBLGNBQUtVLE1BQUwsR0FBYyxJQUFkO0FBQ0EsZ0JBQU8sTUFBUDtBQUNELFFBSk0sTUFJQSxJQUFJLEtBQUt0RixFQUFMLENBQVFzQyxPQUFSLENBQWdCLGFBQWhCLEtBQWtDLENBQWxDLElBQXVDLEtBQUt0QyxFQUFMLENBQVFzQyxPQUFSLENBQWdCLE1BQWhCLEtBQTJCLENBQUMsQ0FBdkUsRUFBMEU7QUFDL0VoRyxXQUFFLE1BQUYsRUFBVXNJLFFBQVYsQ0FBbUIsUUFBbkI7QUFDQSxnQkFBTyxNQUFQO0FBQ0Q7O0FBR0R0SSxTQUFFLE1BQUYsRUFBVWlKLFdBQVYsQ0FBc0IsSUFBdEI7QUFDQSxZQUFLM0UsSUFBTCxHQUFZLEtBQVo7QUFFRDs7O3dDQUVrQjs7QUFFakIsV0FBSSxLQUFLWixFQUFMLENBQVFzQyxPQUFSLENBQWdCLFNBQWhCLElBQTZCLENBQWpDLEVBQXFDOztBQUVqQyxhQUFJa0QsVUFBVUMsV0FBVyxLQUFLekYsRUFBTCxDQUFRd0QsS0FBUixDQUFjLEtBQUt4RCxFQUFMLENBQVFzQyxPQUFSLENBQWdCLFNBQWhCLElBQTJCLENBQXpDLENBQVgsQ0FBZDtBQUNBLGdCQUFPa0QsT0FBUDtBQUVIO0FBRUY7Ozt1Q0FFaUI7O0FBRWhCLFdBQUksS0FBS3hGLEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsV0FBaEIsSUFBK0IsQ0FBbkMsRUFBdUM7O0FBRW5DLGFBQUlrRCxVQUFVQyxXQUFXLEtBQUt6RixFQUFMLENBQVF3RCxLQUFSLENBQWMsS0FBS3hELEVBQUwsQ0FBUXNDLE9BQVIsQ0FBZ0IsV0FBaEIsSUFBNkIsRUFBM0MsQ0FBWCxDQUFkO0FBQ0EsZ0JBQU9rRCxPQUFQO0FBRUg7QUFFRjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O21DQUNlOztBQUViLFdBQUl2SCxJQUFJbkQsT0FBTzRLLFVBQWY7QUFBQSxXQUNJeEgsSUFBSXBELE9BQU82SyxXQURmOztBQUdBLFdBQUl6SCxJQUFJRCxDQUFSLEVBQVc7QUFDVDNCLFdBQUUsTUFBRixFQUFVc0ksUUFBVixDQUFtQixVQUFuQjtBQUNBdEksV0FBRSxNQUFGLEVBQVVpSixXQUFWLENBQXNCLFdBQXRCO0FBQ0QsUUFIRCxNQUdLO0FBQ0hqSixXQUFFLE1BQUYsRUFBVXNJLFFBQVYsQ0FBbUIsV0FBbkI7QUFDQXRJLFdBQUUsTUFBRixFQUFVaUosV0FBVixDQUFzQixVQUF0QjtBQUNEO0FBRUY7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztrQ0FDY2xILEUsRUFBSTs7QUFFaEIsV0FBSUEsTUFBSXJELFNBQVIsRUFBbUJxRCxLQUFHLEdBQUg7O0FBRW5CLFdBQUlKLElBQUluRCxPQUFPNEssVUFBZjtBQUFBLFdBQ0l4SCxJQUFJcEQsT0FBTzZLLFdBRGY7O0FBR0EsV0FBSTFILElBQUlJLEVBQVIsRUFBWTtBQUNWLGNBQUtpQyxPQUFMLEdBQWUsS0FBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0FqRSxXQUFFLE1BQUYsRUFBVWlKLFdBQVYsQ0FBc0IsZ0JBQXRCO0FBQ0FqSixXQUFFLE1BQUYsRUFBVXNJLFFBQVYsQ0FBbUIsZ0JBQW5CO0FBQ0QsUUFMRCxNQUtPO0FBQ0wsY0FBS3RFLE9BQUwsR0FBZSxJQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQWpFLFdBQUUsTUFBRixFQUFVc0ksUUFBVixDQUFtQixnQkFBbkI7QUFDQXRJLFdBQUUsTUFBRixFQUFVaUosV0FBVixDQUFzQixnQkFBdEI7QUFDRDtBQUVGOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Z0NBRVc7O0FBRVQsV0FBSUssTUFBTXZHLFNBQVN3RyxJQUFuQjtBQUNBLFdBQUk1RyxRQUFRMkcsSUFBSXBHLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFaO0FBQ0EsV0FBSVAsU0FBT2pFLFNBQVgsRUFBc0IsT0FBT0EsU0FBUDtBQUN0QixXQUFJOEssYUFBYTdHLE1BQU1PLEtBQU4sQ0FBWSxHQUFaLENBQWpCO0FBQ0EsV0FBSTBFLE9BQU8sRUFBWDs7QUFFQSxZQUFLLElBQUlwRixJQUFJLENBQWIsRUFBZ0JBLElBQUVnSCxXQUFXckcsTUFBN0IsRUFBcUNYLEdBQXJDLEVBQTBDOztBQUV0Q2lILHFCQUFZRCxXQUFXaEgsQ0FBWCxFQUFjVSxLQUFkLENBQW9CLEdBQXBCLENBQVo7QUFDQTBFLGNBQUs2QixVQUFVLENBQVYsQ0FBTCxJQUFxQkEsVUFBVSxDQUFWLENBQXJCO0FBRUg7O0FBRUQsY0FBTzdCLElBQVA7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7Ozs0QkFDTzs7QUFFTCxjQUFPN0UsU0FBUzJHLElBQVQsQ0FBY3pHLE9BQWQsQ0FBc0IsR0FBdEIsRUFBMkIsRUFBM0IsQ0FBUDtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7OytCQUNVUixHLEVBQUs7O0FBRWIsV0FBSXNFLENBQUosRUFBT0YsR0FBUCxFQUFZckUsQ0FBWixFQUFlK0UsQ0FBZixFQUFrQkMsSUFBbEIsRUFBd0JqRSxHQUF4QjtBQUNBLFdBQUl6QyxTQUFTNkksTUFBVCxLQUFvQixLQUFLLENBQXpCLElBQThCN0ksU0FBUzZJLE1BQVQsS0FBb0IsSUFBdEQsRUFBNEQ7QUFDMUQsZ0JBQU8sSUFBUDtBQUNEO0FBQ0Q5QyxhQUFNL0YsU0FBUzZJLE1BQVQsQ0FBZ0J6RyxLQUFoQixDQUFzQixJQUF0QixDQUFOO0FBQ0EsWUFBS1YsSUFBSStFLElBQUksQ0FBUixFQUFXQyxPQUFPWCxJQUFJMUQsTUFBM0IsRUFBbUNvRSxJQUFJQyxJQUF2QyxFQUE2Q2hGLElBQUksRUFBRStFLENBQW5ELEVBQXNEO0FBQ3BEaEUsZUFBTXNELElBQUlyRSxDQUFKLENBQU47QUFDQXVFLGFBQUl4RCxJQUFJTCxLQUFKLENBQVUsR0FBVixDQUFKO0FBQ0EsYUFBSTZELEVBQUUsQ0FBRixNQUFTdEUsR0FBYixFQUFrQjtBQUNoQixrQkFBT3NFLEVBQUUsQ0FBRixDQUFQO0FBQ0Q7QUFDRjtBQUNELGNBQU8sSUFBUDtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7K0JBQ1V0RSxHLEVBQUtjLEcsRUFBSzs7QUFFbEIsY0FBT3pDLFNBQVM2SSxNQUFULEdBQWtCbEgsTUFBTSxHQUFOLEdBQVljLEdBQXJDO0FBRUQ7Ozs4QkFFUTs7QUFFUCxXQUFJK0YsTUFBTXZHLFNBQVN3RyxJQUFuQjs7QUFFQSxXQUFJLENBQUMsS0FBS3JGLElBQU4sSUFBYyxDQUFDLEtBQUtFLEtBQXBCLElBQThCa0YsSUFBSXRELE9BQUosQ0FBWSxJQUFaLEtBQXFCLENBQUMsQ0FBeEQsRUFBNEQ7O0FBRTFEakQsa0JBQVN3RyxJQUFULEdBQWdCLFlBQWhCO0FBRUQ7O0FBRUQsV0FBSSxLQUFLckYsSUFBTCxJQUFhb0YsSUFBSXRELE9BQUosQ0FBWSxJQUFaLEtBQXFCLENBQUMsQ0FBdkMsRUFBMEM7O0FBRXhDakQsa0JBQVN3RyxJQUFULEdBQWdCLGdCQUFoQjtBQUVEOztBQUVELFdBQUksS0FBS25GLEtBQUwsSUFBY2tGLElBQUl0RCxPQUFKLENBQVksSUFBWixLQUFxQixDQUFDLENBQXhDLEVBQTJDOztBQUV6Q2pELGtCQUFTd0csSUFBVCxHQUFnQixnQkFBaEI7QUFFRDs7QUFFRCxXQUFJLEtBQUtLLFNBQUwsQ0FBZU4sR0FBZixFQUFtQixVQUFuQixDQUFKLEVBQW9DdkcsU0FBU3dHLElBQVQsR0FBZ0IsWUFBaEI7QUFDcEMsV0FBSSxLQUFLSyxTQUFMLENBQWVOLEdBQWYsRUFBbUIsUUFBbkIsQ0FBSixFQUFrQ3ZHLFNBQVN3RyxJQUFULEdBQWdCLFlBQWhCO0FBRW5DOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7aUNBQ1lsSyxDLEVBQUV3SyxDLEVBQUU3QyxDLEVBQUc7QUFDZixXQUFJOEMsR0FBSjtBQUNBQSxhQUFNLENBQUN6SyxLQUFLLEVBQUwsR0FBVXdLLEtBQUssQ0FBZixHQUFtQjdDLENBQXBCLEVBQXVCK0MsUUFBdkIsQ0FBZ0MsRUFBaEMsQ0FBTjtBQUNBLGNBQU8sTUFBTSxJQUFJM0MsS0FBSixDQUFVLElBQUkwQyxJQUFJM0csTUFBbEIsRUFBMEJpRixJQUExQixDQUErQixHQUEvQixDQUFOLEdBQTRDMEIsR0FBbkQ7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OytCQUVVQSxHLEVBQUlFLE8sRUFBUzs7QUFFckI7QUFDQSxXQUFLRixJQUFJOUQsT0FBSixDQUFZZ0UsT0FBWixLQUF3QixDQUFDLENBQTlCLEVBQWtDO0FBQ2hDLGdCQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFPLEtBQVA7QUFFRDs7QUFFRDs7OzswQkFDS0YsRyxFQUFXO0FBQUEsV0FBUHZFLEdBQU8sdUVBQUgsQ0FBQyxDQUFFOzs7QUFFZCxjQUFPLENBQUUsaUJBQWlCdUUsR0FBbkIsRUFBeUI3RCxNQUF6QixDQUFpQ1YsR0FBakMsQ0FBUDtBQUVEOzs7aUNBRVkwRSxNLEVBQVFwRSxDLEVBQUk7O0FBRXZCLFdBQUlxRSxPQUFPcEYsS0FBSzRCLEdBQUwsQ0FBVSxFQUFWLEVBQWViLENBQWYsQ0FBWDtBQUNBLGNBQU9mLEtBQUtxRixLQUFMLENBQVlGLFNBQVNDLElBQXJCLElBQThCQSxJQUFyQztBQUVEOztBQUVEO0FBQ0E7Ozs7MkJBQ00zRSxHLEVBQUs7O0FBRVQsY0FBT1EsT0FBT1IsR0FBUCxFQUFZdEMsT0FBWixDQUFvQiwwQkFBcEIsRUFBZ0QsS0FBaEQsQ0FBUDtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Z0NBQ1c2RyxHLEVBQUs7O0FBRWQsV0FBSXRILENBQUosRUFBT0UsR0FBUCxFQUFZMEgsR0FBWjtBQUNBQSxhQUFNLEVBQU47QUFDQTFILGFBQU1vSCxJQUFJM0csTUFBVjtBQUNBWCxXQUFJLENBQUo7QUFDQSxjQUFPQSxLQUFLRSxHQUFaLEVBQWlCO0FBQ2YwSCxnQkFBT04sSUFBSTdELE1BQUosQ0FBVyxDQUFDekQsQ0FBWixFQUFlLENBQWYsQ0FBUDtBQUNBQTtBQUNEO0FBQ0QsY0FBTzRILEdBQVA7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Z0NBQ1c3RyxHLEVBQUs4RyxHLEVBQUtDLEksRUFBTTs7QUFFekIsY0FBTy9HLElBQUlMLEtBQUosQ0FBVW1ILEdBQVYsRUFBZWpDLElBQWYsQ0FBb0JrQyxJQUFwQixDQUFQO0FBRUQ7OztnQ0FFVVIsRyxFQUFLUyxNLEVBQVFDLEssRUFBTzs7QUFFN0IsV0FBSW5MLElBQUksSUFBSThJLE1BQUosQ0FBWW9DLE1BQVosRUFBb0IsR0FBcEIsQ0FBUjs7QUFFQSxjQUFPVCxJQUFJN0csT0FBSixDQUFhNUQsQ0FBYixFQUFpQm1MLEtBQWpCLENBQVA7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzhCQUVTOztBQUVQLFlBQUs5RixHQUFMLEdBQVcsSUFBSUMsSUFBSixFQUFYO0FBRUQ7Ozs2QkFFTzs7QUFFTixZQUFLSCxTQUFMLEdBQWlCLEtBQUtFLEdBQUwsQ0FBU29ELE9BQVQsRUFBakI7QUFFRDs7OytCQUVTOztBQUVSLFlBQUtyRCxXQUFMLEdBQW1CLEtBQUtDLEdBQUwsQ0FBU29ELE9BQVQsS0FBcUIsS0FBS3RELFNBQTdDO0FBRUQ7Ozt5QkFFRzs7QUFFRixjQUFPTSxLQUFLQyxLQUFMLENBQVksS0FBS04sV0FBTCxHQUFtQixNQUFNLEVBQXJDLENBQVA7QUFFRDs7O3lCQUVHOztBQUVGLGNBQU9LLEtBQUtDLEtBQUwsQ0FBVyxLQUFLTixXQUFMLEdBQW1CLElBQTlCLENBQVA7QUFFRDs7OzBCQUVJOztBQUVILGNBQU8sS0FBS0EsV0FBWjtBQUVEOzs7NEJBRU07O0FBRUwsWUFBS2dHLE1BQUw7O0FBRUEsWUFBS0MsSUFBTCxHQUFZLEtBQUtoRyxHQUFMLENBQVNpRyxRQUFULEVBQVosQ0FKSyxDQUlxQztBQUMxQyxZQUFLQyxNQUFMLEdBQWMsS0FBS2xHLEdBQUwsQ0FBU21HLFVBQVQsRUFBZCxDQUxLLENBS3FDO0FBQzFDLFlBQUtDLE1BQUwsR0FBYyxLQUFLcEcsR0FBTCxDQUFTcUcsVUFBVCxFQUFkO0FBQ0EsWUFBS0MsVUFBTCxHQUFrQixLQUFLdEcsR0FBTCxDQUFTdUcsZUFBVCxFQUFsQjtBQUVEOzs7NEJBRU07O0FBRUwsY0FBTyxLQUFLdkcsR0FBTCxDQUFTd0csT0FBVCxFQUFQO0FBRUQ7Ozs4QkFFUTs7QUFFUCxXQUFJQyxZQUFZLElBQUkvRCxLQUFKLENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsRUFBa0MsRUFBbEMsRUFBc0MsRUFBdEMsRUFBMEMsRUFBMUMsRUFBOEMsRUFBOUMsRUFBa0QsRUFBbEQsRUFBc0QsRUFBdEQsQ0FBaEI7O0FBRUEsY0FBTyxLQUFLMUMsR0FBTCxDQUFTMEcsUUFBVCxLQUFzQixDQUE3QjtBQUVEOzs7NEJBRU07O0FBRUwsY0FBTyxLQUFLMUcsR0FBTCxDQUFTMkcsV0FBVCxFQUFQO0FBRUQ7OzsyQkFFSzs7QUFFSjtBQUNBLFdBQUlDLFlBQVksQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLENBQWhCO0FBQ0EsV0FBSUMsTUFBTUQsVUFBVSxLQUFLNUcsR0FBTCxDQUFTOEcsTUFBVCxFQUFWLENBQVY7O0FBRUE7QUFDQSxXQUFJQyxZQUFZLENBQUMsS0FBRCxFQUFPLEtBQVAsRUFBYSxLQUFiLEVBQW1CLEtBQW5CLEVBQXlCLEtBQXpCLEVBQStCLEtBQS9CLEVBQXFDLEtBQXJDLENBQWhCO0FBQ0EsV0FBSUMsTUFBTUQsVUFBVSxLQUFLL0csR0FBTCxDQUFTOEcsTUFBVCxFQUFWLENBQVY7QUFFRDs7QUFFRDtBQUNBOzs7OzhCQUNTRyxJLEVBQU1wRyxHLEVBQUs7O0FBRWxCLGNBQU8sSUFBSVosSUFBSixDQUFTZ0gsS0FBSzdELE9BQUwsS0FBaUI4RCxPQUFPckcsR0FBUCxJQUFjLEVBQWQsR0FBbUIsRUFBbkIsR0FBd0IsRUFBeEIsR0FBNkIsSUFBdkQsQ0FBUDtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OEJBRVN6QyxLLEVBQU8rSSxXLEVBQWE7QUFDekIsY0FBTyxRQUFPL0ksS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFqQixJQUE2QkEsVUFBVSxJQUE5QztBQUNIOzs7OEJBRVFBLEssRUFBTztBQUNaLGNBQU8sT0FBT0EsS0FBUCxLQUFpQixRQUF4QjtBQUNIOzs7OEJBRVFBLEssRUFBTztBQUNaLGNBQU8sT0FBT0EsS0FBUCxLQUFpQixRQUF4QjtBQUNIOzs7Z0NBRVVBLEssRUFBTztBQUNkLGNBQU8sT0FBT0EsS0FBUCxLQUFpQixVQUF4QjtBQUNIOzs7NkJBRU9BLEssRUFBTztBQUNYLGNBQU9nSixPQUFPQyxTQUFQLENBQWlCaEMsUUFBakIsQ0FBMEJpQyxJQUExQixDQUErQmxKLEtBQS9CLE1BQTBDLGdCQUFqRDtBQUNIOzs7NEJBRU1BLEssRUFBTztBQUNWLGNBQU9BLFVBQVUsSUFBakI7QUFDSDs7O2lDQUVXQSxLLEVBQU87QUFDZixjQUFPLE9BQU9BLEtBQVAsS0FBaUIsV0FBeEI7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2tDQUNjbUosTyxFQUFROztBQUVwQjtBQUNBLFdBQUksQ0FBQyxLQUFLakksT0FBVixFQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUEsV0FBSWtJLE9BQU9ELE9BQVg7QUFBQSxXQUNJdkosTUFBTXdKLEtBQUsvSSxNQURmOztBQUdBK0ksWUFBS0MsSUFBTCxDQUFVLFVBQVMzSixDQUFULEVBQVk7O0FBRWxCLGFBQUk0SixJQUFJdEgsS0FBS0MsS0FBTCxDQUFXL0UsRUFBRSxJQUFGLEVBQVFxTSxLQUFSLEtBQWtCLENBQTdCLENBQVI7QUFBQSxhQUNJQyxJQUFJeEgsS0FBS0MsS0FBTCxDQUFXL0UsRUFBRSxJQUFGLEVBQVF1TSxNQUFSLEtBQW1CLENBQTlCLENBRFI7O0FBR0F2TSxXQUFFLElBQUYsRUFBUXdNLElBQVIsQ0FBYTtBQUNULG9CQUFTSixDQURBO0FBRVQscUJBQVVFO0FBRkQsVUFBYjs7QUFLQSxhQUFJNUosT0FBT0YsSUFBSSxDQUFmLEVBQWtCeEMsRUFBRXhCLE1BQUYsRUFBVWlPLE9BQVYsQ0FBa0IsYUFBbEI7QUFFckIsUUFaRDtBQWNEOztBQUVEO0FBQ0E7QUFDQTs7OztrQ0FDYTs7QUFFWCxXQUFJQyxPQUFPLElBQVg7O0FBRUExTSxTQUFFeEIsTUFBRixFQUFVdUMsRUFBVixDQUFhLHFCQUFiLEVBQW9DLFVBQVM0TCxDQUFULEVBQVc7QUFBQ0EsV0FBRUMsY0FBRjtBQUFvQixRQUFwRTtBQUVEOzs7cUNBRWU7O0FBRWQ1TSxTQUFFeEIsTUFBRixFQUFVcU8sR0FBVixDQUFjLHFCQUFkO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBOzs7O2dDQUNXOztBQUVULGNBQU85SixTQUFTK0osUUFBaEI7QUFFRDs7OzRCQUVNOztBQUVMLGNBQU8vSixTQUFTZ0ssUUFBaEI7QUFDQTtBQUVEOzs7NEJBRU07O0FBRUwsY0FBT2hLLFNBQVNpSyxJQUFoQjtBQUVEOzs7NEJBRU07O0FBRUwsY0FBT2pLLFNBQVNrSyxRQUFoQjtBQUVEOzs7b0NBRWNOLEMsRUFBRzs7QUFFaEJBLFdBQUlBLEtBQUtuTyxPQUFPME8sS0FBaEI7QUFDQSxXQUFJUCxFQUFFQyxjQUFOLEVBQ0lELEVBQUVDLGNBQUY7QUFDSkQsU0FBRVEsV0FBRixHQUFnQixLQUFoQjtBQUVEOzs7aURBRTJCUixDLEVBQUc7O0FBRTdCLFdBQUkxSyxLQUFLMEssRUFBRVMsT0FBUCxDQUFKLEVBQXFCO0FBQ2pCUix3QkFBZUQsQ0FBZjtBQUNBLGdCQUFPLEtBQVA7QUFDSDtBQUVGOzs7cUNBRWU7O0FBRWQsV0FBSW5PLE9BQU82TyxnQkFBWCxFQUE2QjtBQUN6QjdPLGdCQUFPNk8sZ0JBQVAsQ0FBd0IsZ0JBQXhCLEVBQTBDLEtBQUtULGNBQS9DLEVBQStELEtBQS9EO0FBQ0pwTyxjQUFPOE8sT0FBUCxHQUFpQixLQUFLVixjQUF0QixDQUpjLENBSXdCO0FBQ3RDcE8sY0FBTytPLFlBQVAsR0FBc0J6TSxTQUFTeU0sWUFBVCxHQUF3QixLQUFLWCxjQUFuRCxDQUxjLENBS3FEO0FBQ25FcE8sY0FBT2dQLFdBQVAsR0FBc0IsS0FBS1osY0FBM0IsQ0FOYyxDQU02QjtBQUMzQzlMLGdCQUFTMk0sU0FBVCxHQUFzQixLQUFLQywyQkFBM0I7QUFFRDs7O29DQUVjOztBQUViLFdBQUlsUCxPQUFPbVAsbUJBQVgsRUFDSW5QLE9BQU9tUCxtQkFBUCxDQUEyQixnQkFBM0IsRUFBNkMsS0FBS2YsY0FBbEQsRUFBa0UsS0FBbEU7QUFDSnBPLGNBQU8rTyxZQUFQLEdBQXNCek0sU0FBU3lNLFlBQVQsR0FBd0IsSUFBOUM7QUFDQS9PLGNBQU84TyxPQUFQLEdBQWlCLElBQWpCO0FBQ0E5TyxjQUFPZ1AsV0FBUCxHQUFxQixJQUFyQjtBQUNBMU0sZ0JBQVMyTSxTQUFULEdBQXFCLElBQXJCO0FBRUQ7Ozs7OzttQkF6cENrQmhLLEk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7Ozs7O0tBUXFCbUssSTtBQUVuQixtQkFBYztBQUFBOztBQUVaLFVBQUtDLEtBQUw7QUFDQSxVQUFLQyxRQUFMO0FBQ0EsVUFBS0MscUJBQUw7QUFDQSxVQUFLQyxZQUFMO0FBRUQ7Ozs7NkJBRU87O0FBRU5oTyxTQUFFLFlBQUk7QUFBQ0EsV0FBRSxRQUFGLEVBQVl3TSxJQUFaLENBQWlCLFFBQWpCLEVBQTJCLFFBQTNCO0FBQXNDLFFBQTdDO0FBRUQ7OztpQ0FFVTs7QUFFVDtBQUNBLFdBQUlwTCxVQUFVM0MsR0FBR0UsRUFBSCxDQUFNTSxJQUFOLENBQVdtQyxPQUF6Qjs7QUFFQTtBQUNBLFdBQUk2TSxVQUFVLENBQ1osS0FEWSxFQUVaLE9BRlksRUFHWixNQUhZLEVBSVosTUFKWSxFQUtaLE9BTFksRUFNWixLQU5ZLEVBT1osT0FQWSxFQVFaLFFBUlksRUFTWixRQVRZLEVBVVosT0FWWSxFQVdaLFVBWFksRUFZWixNQVpZLEVBYVosU0FiWSxFQWNaLE9BZFksRUFlWixTQWZZLEVBZ0JaLFlBaEJZLENBQWQ7O0FBbUJBO0FBQ0EsV0FBSSxPQUFPelAsT0FBTzBQLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekMxUCxnQkFBTzBQLE9BQVAsR0FBaUIsRUFBakI7QUFDRDs7QUFFRDtBQUNBLFlBQUssSUFBSTFMLENBQVQsSUFBY3lMLE9BQWQsRUFBdUI7QUFDckIsVUFBQyxVQUFVMU8sQ0FBVixFQUFhOztBQUViO0FBQ0EsZUFBSTJPLFFBQVEzTyxDQUFSLEtBQWMsQ0FBQzZCLE9BQWYsSUFBMEIsT0FBTzhNLFFBQVEzTyxDQUFSLENBQVAsS0FBc0IsVUFBcEQsRUFBZ0U7QUFDL0RmLG9CQUFPZSxDQUFQLElBQVkyTyxRQUFRM08sQ0FBUixFQUFXMEIsSUFBWCxDQUFnQmlOLE9BQWhCLENBQVo7QUFDQSxZQUZELE1BRU87QUFBRTtBQUNSMVAsb0JBQU9lLENBQVAsSUFBWSxZQUFVLENBQUUsQ0FBeEI7QUFDQTtBQUVELFVBVEQsRUFTSTBPLFFBQVF6TCxDQUFSLENBVEo7QUFVRDtBQUVGOzs7NkJBRU9HLEssRUFBTzs7QUFFYjNDLFNBQUUsTUFBRixFQUFVbU8sT0FBVixDQUFrQnhMLEtBQWxCO0FBRUQ7Ozs2Q0FFdUI7O0FBRXRCLFdBQUl5TCxNQUFNLE9BQUssRUFBZjs7QUFFQTVQLGNBQU91UCxxQkFBUCxHQUErQnZQLE9BQU91UCxxQkFBUCxJQUFnQztBQUNoQ3ZQLGNBQU82UCx3QkFEUCxJQUNtQztBQUNuQzdQLGNBQU84UCwyQkFGUCxJQUV1QztBQUN2QyxpQkFBVUMsUUFBVixFQUFxQjtBQUNuQi9QLGdCQUFPZ1EsVUFBUCxDQUFrQkQsUUFBbEIsRUFBNEJILEdBQTVCO0FBQ0QsUUFMaEM7O0FBT0E1UCxjQUFPaVEsb0JBQVAsR0FBOEJqUSxPQUFPaVEsb0JBQVAsSUFDQWpRLE9BQU9rUSx1QkFEUCxJQUVBbFEsT0FBT21RLDBCQUZQLElBR0EsVUFBVUMsS0FBVixFQUFrQjtBQUNoQnBRLGdCQUFPcVEsWUFBUCxDQUFvQkQsS0FBcEI7QUFDRCxRQUwvQjtBQU9EOzs7b0NBRWM7O0FBRWJFLGNBQU9DLEVBQVAsQ0FBVUMsTUFBVixDQUFpQjtBQUNmNUMsWUFBRSxDQURhO0FBRWZFLFlBQUUsQ0FGYTtBQUdmMkMsaUJBQVEsa0JBQVc7QUFDZixlQUFJN0MsSUFBSXBNLEVBQUUsSUFBRixFQUFRb0osVUFBUixFQUFSO0FBQ0EsZUFBSWtELElBQUl0TSxFQUFFLElBQUYsRUFBUXFKLFdBQVIsRUFBUjtBQUNBckosYUFBRSxJQUFGLEVBQVFnSSxHQUFSLENBQVk7QUFDVix5QkFBVyxVQUREO0FBRVYscUJBQU8sS0FGRztBQUdWLG9CQUFNLEtBSEk7QUFJViw0QkFBYyxNQUFPb0UsSUFBSSxDQUFYLEdBQWdCLElBSnBCO0FBS1YsMkJBQWEsTUFBT0UsSUFBSSxDQUFYLEdBQWdCO0FBTG5CLFlBQVo7QUFPSCxVQWJjO0FBY2Y0QyxrQkFBUyxtQkFBVztBQUNoQixlQUFJOUMsSUFBSXBNLEVBQUUsSUFBRixFQUFRb0osVUFBUixFQUFSO0FBQ0EsZUFBSWtELElBQUl0TSxFQUFFLElBQUYsRUFBUXFKLFdBQVIsRUFBUjtBQUNBckosYUFBRSxJQUFGLEVBQVFnSSxHQUFSLENBQVk7QUFDVix5QkFBVyxVQUREO0FBRVYscUJBQU8sS0FGRztBQUdWLDRCQUFjLE1BQU9vRSxJQUFJLENBQVgsR0FBZ0I7QUFIcEIsWUFBWjtBQUtILFVBdEJjO0FBdUJmK0Msa0JBQVMsbUJBQVc7QUFDaEIsZUFBSS9DLElBQUlwTSxFQUFFLElBQUYsRUFBUW9KLFVBQVIsRUFBUjtBQUNBLGVBQUlrRCxJQUFJdE0sRUFBRSxJQUFGLEVBQVFxSixXQUFSLEVBQVI7QUFDQXJKLGFBQUUsSUFBRixFQUFRZ0ksR0FBUixDQUFZO0FBQ1YseUJBQVcsVUFERDtBQUVWLG9CQUFNLEtBRkk7QUFHViwyQkFBYSxNQUFPc0UsSUFBSSxDQUFYLEdBQWdCO0FBSG5CLFlBQVo7QUFLSDtBQS9CYyxRQUFqQjtBQWtDRDs7O3FDQUVlOztBQUVkLFdBQUksU0FBUzlOLE1BQVQsSUFBbUIsY0FBY0EsT0FBTzRRLEdBQTVDLEVBQWlEO0FBQy9DLGFBQUksQ0FBQzVRLE9BQU80USxHQUFQLENBQVdDLFFBQVgsQ0FBb0IsZ0JBQXBCLEVBQXNDLFlBQXRDLENBQUwsRUFBMEQ7QUFDeER2TyxvQkFBU3dPLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1QyxvQkFBdkM7QUFDRDtBQUNGOztBQUVEekcsV0FBSXRLLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRb0YsSUFBWjs7QUFFQSxXQUFJN0YsR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVFvRixJQUFaLEVBQWtCOztBQUVoQnhELGtCQUFTd08sZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNDLEdBQW5DLENBQXVDLG9CQUF2QztBQUVEO0FBRUY7OztrQ0FFWTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQUkvUSxHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUWdGLElBQVosRUFBa0I7O0FBRWhCbEUsV0FBRSxZQUFJO0FBQ0pBLGFBQUUsS0FBRixFQUFTZSxFQUFULENBQVksYUFBWixFQUEwQixZQUFJO0FBQzVCLG9CQUFPLEtBQVA7QUFDRCxZQUZEO0FBR0QsVUFKRDtBQU1EOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFJME8sSUFBSWhSLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRd1EsZ0JBQVIsRUFBUjs7QUFFQSxXQUFJRCxLQUFHL1EsU0FBUCxFQUFrQjtBQUNsQixXQUFJK1EsSUFBRSxDQUFOLEVBQVM7O0FBRVAsYUFBSWIsS0FBSjtBQUNBNU8sV0FBRSxLQUFGLEVBQVNlLEVBQVQsQ0FBWSxZQUFaLEVBQXlCLFlBQUk7QUFDM0I2TixtQkFBUUosV0FBVyxZQUFJO0FBQ3JCbUIsbUJBQU0sWUFBTjtBQUNELFlBRk8sRUFFTixHQUZNLENBQVI7QUFHQSxrQkFBTyxLQUFQO0FBQ0QsVUFMRDtBQU1BM1AsV0FBRSxLQUFGLEVBQVNlLEVBQVQsQ0FBWSxVQUFaLEVBQXVCLFlBQUk7QUFDekI4Tix3QkFBYUQsS0FBYjtBQUNBLGtCQUFPLEtBQVA7QUFDRCxVQUhEO0FBS0Q7QUFFRjs7Ozs7O21CQTVMa0JoQixJOzs7Ozs7Ozs7Ozs7c2pCQ1JyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztLQUVxQmdDLFE7QUFFbkIsdUJBQWM7QUFBQTs7QUFFWixVQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsQ0FBZjs7QUFHQSxVQUFLblEsZUFBTCxHQUF1QixZQUFJLENBQUUsQ0FBN0I7O0FBRUEsVUFBS1osU0FBTDtBQUVEOzs7OzZCQUVPOztBQUVOLFlBQUtnUixZQUFMLEdBQW9CLDRCQUFwQjtBQUVEOzs7a0NBRVk7O0FBRVg7QUFDQXZSLFVBQUdFLEVBQUgsQ0FBTVMsRUFBTixDQUFTNlEsTUFBVCxDQUFnQixjQUFoQixFQUFnQyxLQUFLRCxZQUFMLENBQWtCRSxNQUFsQixDQUF5QmpQLElBQXpCLENBQThCLElBQTlCLENBQWhDOztBQUVBO0FBQ0EsWUFBS3JCLGVBQUw7QUFFRDs7OytCQUVTOztBQUVSLFlBQUt1USxLQUFMO0FBRUQ7OztpQ0FFVzs7QUFFVm5RLFNBQUVjLFFBQUYsRUFBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsS0FBS0MsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQXhCO0FBRUQ7Ozs7OzttQkF6Q2tCMk8sUTs7Ozs7Ozs7Ozs7Ozs7OztBQ1JyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQUVxQlEsWTtBQUVuQiwyQkFBYztBQUFBOztBQUVaLFVBQUtDLFFBQUwsR0FBZ0JyUSxFQUFFLFVBQUYsQ0FBaEI7QUFDQSxVQUFLc1EsSUFBTCxHQUFZdFEsRUFBRSxhQUFGLENBQVo7QUFDQSxVQUFLdVEsUUFBTCxHQUFnQnZRLEVBQUUsaUJBQUYsQ0FBaEI7O0FBRUEsVUFBS3dRLE1BQUwsR0FBYyxLQUFkO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixLQUF0Qjs7QUFFQSxVQUFLelIsU0FBTDtBQUVEOzs7OzhCQUVROztBQUVQLFdBQUksQ0FBQ1AsR0FBR0UsRUFBSCxDQUFNTSxJQUFOLENBQVdzRCxhQUFoQixFQUErQjs7QUFFL0IsV0FBSW1PLFNBQVVqUyxHQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU3FRLFNBQVQsR0FBcUJwUixHQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU3NRLEtBQS9CLEdBQXdDLEdBQXJEOztBQUVBclIsVUFBR0UsRUFBSCxDQUFNYSxFQUFOLENBQVN1USxPQUFULElBQW9CLENBQUNXLFNBQVNqUyxHQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU3VRLE9BQW5CLElBQThCLEdBQWxEO0FBQ0E7QUFDQSxZQUFLUSxRQUFMLENBQWNJLElBQWQsQ0FBb0I3TCxLQUFLQyxLQUFMLENBQVd0RyxHQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU3VRLE9BQXBCLElBQStCLEdBQW5EOztBQUVBO0FBQ0EsV0FBSXRSLEdBQUdFLEVBQUgsQ0FBTWEsRUFBTixDQUFTdVEsT0FBVCxJQUFvQixHQUFwQixJQUEyQixDQUFDLEtBQUtTLE1BQXJDLEVBQTZDO0FBQzNDLGNBQUtBLE1BQUwsR0FBYyxJQUFkO0FBQ0EvUixZQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU29SLFVBQVQ7QUFDRDs7QUFFRDtBQUNBLFdBQUluUyxHQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU3VRLE9BQVQsR0FBbUIsSUFBdkIsRUFBNkI7QUFDM0J0UixZQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU3VRLE9BQVQsR0FBbUIsR0FBbkI7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsV0FBSXRSLEdBQUdFLEVBQUgsQ0FBTWEsRUFBTixDQUFTdVEsT0FBVCxHQUFtQixFQUFuQixJQUF5QixDQUFDLEtBQUtVLGNBQW5DLEVBQW1EO0FBQ25ELGNBQUtBLGNBQUwsR0FBc0IsSUFBdEI7O0FBRUExSCxhQUFJLFFBQUo7QUFDRTs7QUFFQXlGLG9CQUFXLFlBQUk7O0FBRWJ6RixlQUFJLE1BQUo7O0FBRUEsZUFBSXRLLEdBQUdFLEVBQUgsQ0FBTWEsRUFBTixDQUFTdVEsT0FBVCxLQUFxQixHQUF6QixFQUE4Qjs7QUFFNUJ0UixnQkFBR0UsRUFBSCxDQUFNYSxFQUFOLENBQVNxUSxTQUFUO0FBQ0E3UCxlQUFFLGVBQUYsRUFBbUJzSSxRQUFuQixDQUE0QixVQUE1Qjs7QUFFQVMsaUJBQUksTUFBSjtBQUVEO0FBR0YsVUFkRCxFQWNFLElBZEY7QUFnQkQ7O0FBRUQ7QUFFRDs7OzhCQUVRO0FBQUE7O0FBR1A4SCxnQkFDR0MsRUFESCxDQUNNLEtBQUtULFFBRFgsRUFDcUIsR0FEckIsRUFDMEI7QUFDdEJVLGdCQUFPLEdBRGU7QUFFdEJDLGtCQUFTLENBRmE7QUFHdEJDLGVBQU1DLE9BQU9DLFNBSFM7QUFJdEJQLHFCQUFXLHNCQUFJO0FBQ2IsaUJBQUtQLFFBQUwsQ0FBY0osTUFBZDtBQUNEO0FBTnFCLFFBRDFCO0FBVUQ7OztpQ0FFVzs7QUFFVnhSLFVBQUdFLEVBQUgsQ0FBTVMsRUFBTixDQUFTb1EsR0FBVCxDQUFhLGNBQWIsRUFBNEIsS0FBS1UsTUFBTCxDQUFZalAsSUFBWixDQUFpQixJQUFqQixDQUE1QjtBQUVEOzs7Ozs7bUJBdkZrQm1QLFk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FFcUJnQixTO0FBRW5CLHdCQUFjO0FBQUE7O0FBRVosVUFBS0MsR0FBTCxHQUFXLENBQVg7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsVUFBSzVPLEdBQUwsR0FBVyxDQUFYO0FBQ0EsVUFBSzZPLEtBQUwsR0FBYSxJQUFiO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLEtBQWQ7QUFFRDs7Ozs2QkFFTyxDQUdQOzs7OEJBRVE7O0FBRVAsWUFBSyxJQUFJaFAsQ0FBVCxJQUFjLEtBQUs4TyxVQUFuQjtBQUErQixjQUFLQSxVQUFMLENBQWdCOU8sQ0FBaEIsRUFBbUJpUCxJQUFuQjtBQUEvQjtBQUVEOzs7NEJBRU07O0FBRUwsWUFBS3ZCLE1BQUw7QUFDQSxZQUFLbUIsR0FBTDs7QUFFQSxZQUFLRSxLQUFMLEdBQWF4RCxzQkFBc0IsS0FBSzJELElBQUwsQ0FBVXpRLElBQVYsQ0FBZSxJQUFmLENBQXRCLENBQWI7QUFDQSxXQUFJLEtBQUt1USxNQUFULEVBQWlCL0MscUJBQXFCLEtBQUs4QyxLQUExQjtBQUdsQjs7OzRCQUVNOztBQUVMLFlBQUtDLE1BQUwsR0FBYyxJQUFkO0FBRUQ7Ozs4QkFFUTs7QUFFUCxZQUFLQSxNQUFMLEdBQWMsS0FBZDtBQUNBLFlBQUtFLElBQUw7QUFFRDs7O3lCQUVHQyxJLEVBQU1GLEksRUFBTTs7QUFFZCxXQUFJcE8sTUFBTSxFQUFDc08sTUFBS0EsSUFBTixFQUFXRixNQUFLQSxJQUFoQixFQUFWOztBQUVBLFlBQUtILFVBQUwsQ0FBZ0JqSyxJQUFoQixDQUFxQmhFLEdBQXJCO0FBRUQ7Ozs0QkFFTXNPLEksRUFBTTs7QUFFWCxXQUFJakIsU0FBUyxFQUFDaUIsTUFBS0EsSUFBTixFQUFXRixNQUFLLGdCQUFJLENBQUUsQ0FBdEIsRUFBYjs7QUFFQUwsaUJBQVVRLFNBQVYsQ0FBb0IsS0FBS04sVUFBekIsRUFBcUNaLE1BQXJDO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsrQkFDaUI3SixHLEVBQU02SixNLEVBQVE7O0FBRTdCLFdBQUloTyxNQUFNbUUsSUFBSTFELE1BQWQ7QUFDQSxXQUFJME8sS0FBSjtBQUNBLFlBQUssSUFBSXJQLElBQUksQ0FBYixFQUFpQkEsSUFBSUUsR0FBckIsRUFBMEJGLEdBQTFCLEVBQWdDO0FBQzlCcVAsaUJBQVFoTCxJQUFLckUsQ0FBTCxDQUFSOztBQUVBLGFBQUlxUCxNQUFNRixJQUFOLElBQWNqQixPQUFPaUIsSUFBekIsRUFBOEI7QUFDNUI5SyxlQUFJaUwsTUFBSixDQUFZdFAsQ0FBWixFQUFnQixDQUFoQjtBQUNBQTtBQUNBRTtBQUNEO0FBQ0Y7O0FBRUQsY0FBT21FLEdBQVA7QUFFRDs7Ozs7O21CQXBGa0J1SyxTOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBRXFCVyxTO0FBRW5CLHdCQUFjO0FBQUE7O0FBRVosVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLEVBQUwsR0FBVSxFQUFDN0YsR0FBRSxDQUFILEVBQU1FLEdBQUUsQ0FBUixFQUFXNEYsTUFBSyxDQUFDLENBQWpCLEVBQW9CQyxNQUFLLENBQUMsQ0FBMUIsRUFBVjs7QUFFQSxVQUFLaEMsS0FBTDtBQUVEOzs7OzZCQUVPOztBQUVOLFdBQUl6RCxPQUFPLElBQVg7O0FBRUExTSxTQUFFeEIsTUFBRixFQUFVdUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsVUFBUzRMLENBQVQsRUFBVztBQUFDRCxjQUFLMEYsUUFBTCxDQUFjcEcsSUFBZCxDQUFtQlUsSUFBbkIsRUFBd0JDLENBQXhCO0FBQTRCLFFBQS9EO0FBQ0EsWUFBSzBGLGFBQUw7QUFFRDs7OzhCQUVRMUYsQyxFQUFHOztBQUVWLFlBQUswRixhQUFMOztBQUVBLFlBQUssSUFBSTdQLENBQVQsSUFBYyxLQUFLd1AsVUFBbkI7QUFBK0IsY0FBS0EsVUFBTCxDQUFnQnhQLENBQWhCLEVBQW1CaVAsSUFBbkI7QUFBL0I7QUFFRDs7O3lCQUVHOztBQUVBLGNBQU8sS0FBS1EsRUFBTCxDQUFRN0YsQ0FBZjtBQUVIOzs7eUJBRUc7O0FBRUEsY0FBTyxLQUFLNkYsRUFBTCxDQUFRM0YsQ0FBZjtBQUVIOzs7cUNBRWM7O0FBRWIsV0FBSUYsSUFBSTVOLE9BQU80SyxVQUFmO0FBQUEsV0FDSWtELElBQUk5TixPQUFPNkssV0FEZjs7QUFHQSxZQUFLNEksRUFBTCxDQUFRQyxJQUFSLEdBQWUsS0FBS0QsRUFBTCxDQUFRN0YsQ0FBdkI7QUFDQSxZQUFLNkYsRUFBTCxDQUFRRSxJQUFSLEdBQWUsS0FBS0YsRUFBTCxDQUFRM0YsQ0FBdkI7QUFDQSxZQUFLMkYsRUFBTCxDQUFRN0YsQ0FBUixHQUFZQSxDQUFaO0FBQ0EsWUFBSzZGLEVBQUwsQ0FBUTNGLENBQVIsR0FBWUEsQ0FBWjtBQUVEOzs7eUJBRUdxRixJLEVBQU1GLEksRUFBTTs7QUFFZCxXQUFJcE8sTUFBTSxFQUFDc08sTUFBS0EsSUFBTixFQUFXRixNQUFLQSxJQUFoQixFQUFWOztBQUVBLFlBQUtPLFVBQUwsQ0FBZ0IzSyxJQUFoQixDQUFxQmhFLEdBQXJCO0FBRUQ7Ozs0QkFFTXNPLEksRUFBTTs7QUFFWEksaUJBQVVILFNBQVYsQ0FBb0IsS0FBS0ksVUFBekIsRUFBcUNMLElBQXJDO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsrQkFDaUI5SyxHLEVBQU04SyxJLEVBQU07O0FBRTNCLFdBQUlqUCxNQUFNbUUsSUFBSTFELE1BQWQ7QUFDQSxXQUFJME8sS0FBSjtBQUNBLFlBQUssSUFBSXJQLElBQUksQ0FBYixFQUFpQkEsSUFBSUUsR0FBckIsRUFBMEJGLEdBQTFCLEVBQWdDO0FBQzlCcVAsaUJBQVFoTCxJQUFLckUsQ0FBTCxDQUFSOztBQUVBLGFBQUlxUCxNQUFNRixJQUFOLElBQWNBLElBQWxCLEVBQXVCO0FBQ3JCOUssZUFBSWlMLE1BQUosQ0FBWXRQLENBQVosRUFBZ0IsQ0FBaEI7QUFDQUE7QUFDQUU7QUFDRDtBQUNGOztBQUVELGNBQU9tRSxHQUFQO0FBRUQ7Ozs7OzttQkF2RmtCa0wsUzs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQUVxQk8sUztBQUVuQix3QkFBYztBQUFBOztBQUVaLFVBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsVUFBS3BHLENBQUwsR0FBUyxDQUFULENBQVcsS0FBS0UsQ0FBTCxHQUFTLENBQVQ7QUFDWCxVQUFLbUcsRUFBTCxHQUFVLENBQVYsQ0FMWSxDQUtDO0FBQ2IsVUFBS0MsRUFBTCxHQUFVLENBQVYsQ0FOWSxDQU1DO0FBQ2IsVUFBS0MsRUFBTCxHQUFVLENBQVYsQ0FQWSxDQU9DOztBQUViLFVBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxVQUFLQyxNQUFMLEdBQWMsQ0FBZDs7QUFFQSxVQUFLQyxPQUFMLEdBQWUsSUFBZjs7QUFFQSxVQUFLOVQsU0FBTDtBQUVEOzs7OzZCQUVPOztBQUVOLFdBQUkwTixPQUFPLElBQVg7O0FBRUEsWUFBSzJGLGFBQUw7QUFDQSxZQUFLN0MsR0FBTCxDQUFTLEtBQVQsRUFBZSxLQUFLdUQsR0FBTCxDQUFTOVIsSUFBVCxDQUFjLElBQWQsQ0FBZjtBQUVEOzs7eUJBRUcwUSxJLEVBQU1GLEksRUFBTTs7QUFFZCxXQUFJcE8sTUFBTSxFQUFDc08sTUFBS0EsSUFBTixFQUFXRixNQUFLQSxJQUFoQixFQUFWOztBQUVBLFlBQUtjLFVBQUwsQ0FBZ0JsTCxJQUFoQixDQUFxQmhFLEdBQXJCO0FBRUQ7Ozs0QkFFTXNPLEksRUFBTTs7QUFFWFcsaUJBQVVWLFNBQVYsQ0FBb0IsS0FBS1csVUFBekIsRUFBcUNaLElBQXJDO0FBRUQ7Ozs0QkFFTWpCLE0sRUFBUTs7QUFFYjRCLGlCQUFVVixTQUFWLENBQW9CLEtBQUtXLFVBQXpCLEVBQXFDN0IsTUFBckM7QUFFRDs7OzhCQUVRL0QsQyxFQUFHOztBQUVWLFlBQUswRixhQUFMO0FBRUQ7Ozs4QkFFUTFGLEMsRUFBRzs7QUFFVixXQUFJLEtBQUttRyxPQUFULEVBQWtCO0FBQ2hCLGNBQUtBLE9BQUwsR0FBZSxLQUFmO0FBQ0E7QUFDQTtBQUNEOztBQUVELFlBQUtMLEVBQUwsR0FBVXpTLEVBQUV4QixNQUFGLEVBQVV3VSxTQUFWLEVBQVY7QUFDQSxZQUFLTixFQUFMLEdBQVUsS0FBS0QsRUFBTCxHQUFVLEtBQUtuRyxDQUF6Qjs7QUFFQSxZQUFLLElBQUk5SixDQUFULElBQWMsS0FBSytQLFVBQW5CO0FBQStCLGNBQUtBLFVBQUwsQ0FBZ0IvUCxDQUFoQixFQUFtQmlQLElBQW5CO0FBQS9CO0FBRUQ7OztrQ0FFWTlFLEMsRUFBRXNHLEssRUFBTUMsTSxFQUFPQyxNLEVBQVE7O0FBRWxDLFlBQUtQLFFBQUwsR0FBZ0JPLE1BQWhCO0FBQ0EsV0FBSTFVLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRa1UsS0FBUixFQUFKLEVBQXFCLEtBQUtSLFFBQUwsSUFBaUIsRUFBakI7QUFDckIsV0FBSW5VLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRbVUsSUFBUixNQUFrQixDQUFDNVUsR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVFrVSxLQUFSLEVBQXZCLEVBQXdDLEtBQUtSLFFBQUwsSUFBaUIsRUFBakI7QUFDeEM7QUFDQSxZQUFLQyxNQUFMLElBQWUsS0FBS0QsUUFBcEI7O0FBRUEsWUFBSyxJQUFJcFEsQ0FBVCxJQUFjLEtBQUsrUCxVQUFuQjtBQUErQixjQUFLQSxVQUFMLENBQWdCL1AsQ0FBaEIsRUFBbUJpUCxJQUFuQjtBQUEvQjtBQUVEOzs7cUNBRWM7O0FBRWIsWUFBS3JGLENBQUwsR0FBUzVOLE9BQU80SyxVQUFoQjtBQUNBLFlBQUtrRCxDQUFMLEdBQVM5TixPQUFPNkssV0FBaEI7QUFFRDs7O3lCQUVHc0QsQyxFQUFHOztBQUVMLFdBQUlELE9BQU8sSUFBWDs7QUFFQSxXQUFJLEtBQUs2RSxLQUFULEVBQWdCMUMsYUFBYSxLQUFLMEMsS0FBbEI7QUFDaEIsWUFBS0EsS0FBTCxHQUFhL0MsV0FBVyxZQUFXO0FBQ2pDOUIsY0FBS29HLE9BQUwsR0FBZSxJQUFmO0FBQ0E7O0FBRUEsY0FBSyxJQUFJdFEsQ0FBVCxJQUFja0ssS0FBSzhGLGFBQW5CO0FBQWtDOUYsZ0JBQUs4RixhQUFMLENBQW1CaFEsQ0FBbkI7QUFBbEM7QUFFRCxRQU5ZLEVBTVYsR0FOVSxDQUFiO0FBUUQ7OzswQ0FFb0J5SixPLEVBQVM7O0FBRTVCLFlBQUtzRyxVQUFMLENBQWdCbEwsSUFBaEIsQ0FBcUIsWUFBVTs7QUFFN0I0RSxpQkFBUWpFLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLENBQUNoSSxFQUFFeEIsTUFBRixFQUFVOFUsVUFBVixFQUFyQjtBQUVELFFBSkQ7QUFNRDs7OytCQUVTO0FBQUE7O0FBRVIsWUFBS25ELEtBQUw7O0FBRUFuUSxTQUFFeEIsTUFBRixFQUFVdUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsVUFBQzRMLENBQUQsRUFBSztBQUFDLGVBQUt5RixRQUFMLENBQWN6RixDQUFkO0FBQWtCLFFBQS9DO0FBQ0EzTSxTQUFFeEIsTUFBRixFQUFVdUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsVUFBQzRMLENBQUQsRUFBSztBQUFDLGVBQUs0RyxRQUFMLENBQWM1RyxDQUFkO0FBQWtCLFFBQS9DO0FBQ0EzTSxTQUFFYyxRQUFGLEVBQVlDLEVBQVosQ0FBZSxZQUFmLEVBQTZCLFVBQUM0TCxDQUFELEVBQUdzRyxLQUFILEVBQVNDLE1BQVQsRUFBZ0JDLE1BQWhCLEVBQXlCO0FBQUMsZUFBS0ssWUFBTCxDQUFrQjdHLENBQWxCLEVBQW9Cc0csS0FBcEIsRUFBMEJDLE1BQTFCLEVBQWlDQyxNQUFqQztBQUEwQyxRQUFqRztBQUVEOzs7aUNBRVc7O0FBRVZuVCxTQUFFYyxRQUFGLEVBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLEtBQUtDLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQUF4QjtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7K0JBQ2lCNEYsRyxFQUFNOEssSSxFQUFNOztBQUUzQixXQUFJalAsTUFBTW1FLElBQUkxRCxNQUFkO0FBQ0EsV0FBSTBPLEtBQUo7QUFDQSxZQUFLLElBQUlyUCxJQUFJLENBQWIsRUFBaUJBLElBQUlFLEdBQXJCLEVBQTBCRixHQUExQixFQUFnQztBQUM5QnFQLGlCQUFRaEwsSUFBS3JFLENBQUwsQ0FBUjs7QUFFQSxhQUFJcVAsTUFBTUYsSUFBTixJQUFjQSxJQUFsQixFQUF1QjtBQUNyQjlLLGVBQUlpTCxNQUFKLENBQVl0UCxDQUFaLEVBQWdCLENBQWhCO0FBQ0FBO0FBQ0FFO0FBQ0Q7QUFDRjs7QUFFRCxjQUFPbUUsR0FBUDtBQUVEOzs7Ozs7bUJBdkprQnlMLFM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FFcUJtQixRO0FBRW5CLHVCQUFtQztBQUFBLFNBQXZCeEgsT0FBdUIsdUVBQWJqTSxFQUFFYyxRQUFGLENBQWE7O0FBQUE7O0FBRWpDLFVBQUttTCxPQUFMLEdBQWVBLE9BQWY7O0FBRUEsVUFBS3RGLENBQUwsR0FBUyxDQUFUO0FBQ0EsVUFBS0MsQ0FBTCxHQUFTLENBQVQ7O0FBRUEsVUFBSzhNLEVBQUwsR0FBVSxDQUFWO0FBQ0EsVUFBS0MsRUFBTCxHQUFVLENBQVY7O0FBRUEsVUFBS0MsYUFBTCxHQUFxQixDQUFDLEVBQUNqQyxNQUFLLEtBQU4sRUFBWUYsTUFBSyxnQkFBSSxDQUFFLENBQXZCLEVBQUQsQ0FBckI7QUFDQSxVQUFLb0Msa0JBQUwsR0FBMEIsQ0FBQyxFQUFDbEMsTUFBSyxLQUFOLEVBQVlGLE1BQUssZ0JBQUksQ0FBRSxDQUF2QixFQUFELENBQTFCO0FBQ0EsVUFBS3FDLGdCQUFMLEdBQXdCLENBQUMsRUFBQ25DLE1BQUssS0FBTixFQUFZRixNQUFLLGdCQUFJLENBQUUsQ0FBdkIsRUFBRCxDQUF4Qjs7QUFFQSxVQUFLcUIsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLdkIsS0FBTCxHQUFhLElBQWI7QUFDQSxVQUFLd0MsT0FBTCxHQUFlLEVBQWY7O0FBRUEsVUFBSzVELEtBQUw7QUFDQSxVQUFLblIsU0FBTDtBQUVEOzs7OzZCQUVPOztBQUVOLFlBQUt3USxHQUFMLENBQVMsT0FBVCxFQUFrQixLQUFLd0UsS0FBTCxDQUFXL1MsSUFBWCxDQUFnQixJQUFoQixDQUFsQjtBQUVEOzs7aUNBRVcwTCxDLEVBQUc7O0FBRWI7O0FBRUEsWUFBS2hHLENBQUwsR0FBU2dHLEVBQUVzSCxhQUFGLENBQWdCQyxjQUFoQixDQUErQixDQUEvQixFQUFrQ0MsS0FBM0M7QUFDQSxZQUFLdk4sQ0FBTCxHQUFTK0YsRUFBRXNILGFBQUYsQ0FBZ0JDLGNBQWhCLENBQStCLENBQS9CLEVBQWtDRSxLQUEzQztBQUVEOzs7aUNBRVd6SCxDLEVBQUc7O0FBRWI7O0FBRUEsV0FBSSxLQUFLbUcsT0FBVCxFQUFrQjtBQUNoQixjQUFLQSxPQUFMLEdBQWUsS0FBZjs7QUFFQTtBQUNBOztBQUVBLGNBQUssSUFBSXRRLENBQVQsSUFBYyxLQUFLcVIsa0JBQW5CO0FBQXVDLGdCQUFLQSxrQkFBTCxDQUF3QnJSLENBQXhCLEVBQTJCaVAsSUFBM0I7QUFBdkM7QUFFRDs7QUFFRCxXQUFJOUUsRUFBRTBILE9BQUYsSUFBVzNWLFNBQWYsRUFBMEI7QUFBRTtBQUN6QixjQUFLaUksQ0FBTCxHQUFTZ0csRUFBRXdILEtBQUYsR0FBVSxLQUFLbEksT0FBTCxDQUFhNEcsTUFBYixHQUFzQnlCLElBQXpDO0FBQ0EsY0FBSzFOLENBQUwsR0FBUytGLEVBQUV5SCxLQUFGLEdBQVUsS0FBS25JLE9BQUwsQ0FBYTRHLE1BQWIsR0FBc0IwQixHQUF6QztBQUNELFFBSEYsTUFHUTtBQUFFO0FBQ1AsY0FBSzVOLENBQUwsR0FBU2dHLEVBQUV3SCxLQUFGLEdBQVVuVSxFQUFFeEIsTUFBRixFQUFVOFUsVUFBVixFQUFuQjtBQUNBLGNBQUsxTSxDQUFMLEdBQVMrRixFQUFFeUgsS0FBRixHQUFVcFUsRUFBRXhCLE1BQUYsRUFBVXdVLFNBQVYsRUFBbkI7QUFDRDs7QUFFRixZQUFLVSxFQUFMLEdBQVkvRyxFQUFFNkgsT0FBRixHQUFZL1YsR0FBR0UsRUFBSCxDQUFNVSxDQUFOLENBQVFzQyxDQUFSLEtBQVksQ0FBcEM7QUFDQSxZQUFLZ1MsRUFBTCxHQUFZaEgsRUFBRThILE9BQUYsR0FBWWhXLEdBQUdFLEVBQUgsQ0FBTVUsQ0FBTixDQUFRdUMsQ0FBUixLQUFZLENBQXBDOztBQUVBLFlBQUssSUFBSVksQ0FBVCxJQUFjLEtBQUtvUixhQUFuQjtBQUFrQyxjQUFLQSxhQUFMLENBQW1CcFIsQ0FBbkIsRUFBc0JpUCxJQUF0QjtBQUFsQztBQUVEOzs7MkJBRUs5RSxDLEVBQUc7QUFBQTs7QUFFUCxXQUFJLEtBQUs0RSxLQUFULEVBQWdCMUMsYUFBYSxLQUFLMEMsS0FBbEI7QUFDaEIsWUFBS0EsS0FBTCxHQUFhL0MsV0FBVyxZQUFJO0FBQzFCLGVBQUtzRSxPQUFMLEdBQWUsSUFBZjs7QUFFQTs7QUFFQSxjQUFLLElBQUl0USxDQUFULElBQWMsTUFBS3NSLGdCQUFuQjtBQUFxQyxpQkFBS0EsZ0JBQUwsQ0FBc0J0UixDQUF0QixFQUF5QmlQLElBQXpCO0FBQXJDO0FBRUQsUUFQWSxFQU9WLEtBQUtzQyxPQVBLLENBQWI7QUFTRDs7O3lCQUVHcEMsSSxFQUFNRixJLEVBQU07O0FBRWQsV0FBSXBPLE1BQU0sRUFBQ3NPLE1BQUtBLElBQU4sRUFBV0YsTUFBS0EsSUFBaEIsRUFBVjs7QUFFQSxZQUFLbUMsYUFBTCxDQUFtQnZNLElBQW5CLENBQXdCaEUsR0FBeEI7QUFFRDs7OzhCQUVTc08sSSxFQUFNRixJLEVBQU07O0FBRXBCLFdBQUlwTyxNQUFNLEVBQUNzTyxNQUFLQSxJQUFOLEVBQVdGLE1BQUtBLElBQWhCLEVBQVY7O0FBRUEsWUFBS29DLGtCQUFMLENBQXdCeE0sSUFBeEIsQ0FBNkJoRSxHQUE3QjtBQUVEOzs7NEJBRU9zTyxJLEVBQU1GLEksRUFBTTs7QUFFbEIsV0FBSXBPLE1BQU0sRUFBQ3NPLE1BQUtBLElBQU4sRUFBV0YsTUFBS0EsSUFBaEIsRUFBVjs7QUFFQSxZQUFLcUMsZ0JBQUwsQ0FBc0J6TSxJQUF0QixDQUEyQmhFLEdBQTNCO0FBRUQ7Ozs0QkFFTXNPLEksRUFBTTs7QUFFWDhCLGdCQUFTN0IsU0FBVCxDQUFtQixLQUFLZ0MsYUFBeEIsRUFBdUNqQyxJQUF2QztBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7b0NBbUJjOztBQUVaLFlBQUsxRixPQUFMLENBQWFZLEdBQWIsQ0FBaUIsb0JBQWpCO0FBQ0EsWUFBS1osT0FBTCxDQUFhWSxHQUFiLENBQWlCLG9CQUFqQjtBQUVEOzs7aUNBRVU7QUFBQTs7QUFFVCxZQUFLWixPQUFMLENBQWFsTCxFQUFiLENBQWdCLG9CQUFoQixFQUFzQyxVQUFDNEwsQ0FBRCxFQUFLO0FBQUMsZ0JBQUsrSCxXQUFMLENBQWlCL0gsQ0FBakI7QUFBcUIsUUFBakU7QUFDQSxZQUFLVixPQUFMLENBQWFsTCxFQUFiLENBQWdCLG9CQUFoQixFQUFzQyxVQUFDNEwsQ0FBRCxFQUFLO0FBQUMsZ0JBQUtnSSxXQUFMLENBQWlCaEksQ0FBakI7QUFBcUIsUUFBakU7QUFFRDs7OytCQTlCZ0I5RixHLEVBQU04SyxJLEVBQU07O0FBRTNCLFdBQUlqUCxNQUFNbUUsSUFBSTFELE1BQWQ7QUFDQSxXQUFJME8sS0FBSjtBQUNBLFlBQUssSUFBSXJQLElBQUksQ0FBYixFQUFpQkEsSUFBSUUsR0FBckIsRUFBMEJGLEdBQTFCLEVBQWdDO0FBQzlCcVAsaUJBQVFoTCxJQUFLckUsQ0FBTCxDQUFSOztBQUVBLGFBQUlxUCxNQUFNRixJQUFOLElBQWNBLElBQWxCLEVBQXVCO0FBQ3JCOUssZUFBSWlMLE1BQUosQ0FBWXRQLENBQVosRUFBZ0IsQ0FBaEI7QUFDQUE7QUFDQUU7QUFDRDtBQUNGOztBQUVELGNBQU9tRSxHQUFQO0FBRUQ7Ozs7OzttQkF0SWtCNE0sUTs7Ozs7Ozs7Ozs7O3NqQkNOckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztLQUVxQm1CLE87QUFFbkIsc0JBQWM7QUFBQTtBQUViOzs7OzZCQUVPOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVEOzs7eUNBRW1COztBQUVsQixXQUFJQyxTQUFTLHNCQUFiOztBQUVBLFdBQUluUyxNQUFNLENBQVY7QUFDQWpFLFVBQUdFLEVBQUgsQ0FBTWEsRUFBTixDQUFTc1EsS0FBVCxJQUFrQnBOLEdBQWxCLENBTGtCLENBS0s7QUFDdkIsV0FBSWpFLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRaUYsSUFBWixFQUFrQjFGLEdBQUdFLEVBQUgsQ0FBTWEsRUFBTixDQUFTcVEsU0FBVDs7QUFFbEIsV0FBSWlGLEtBQUssU0FBTEEsRUFBSyxHQUFJOztBQUVYclcsWUFBR0UsRUFBSCxDQUFNYSxFQUFOLENBQVNxUSxTQUFUO0FBRUQsUUFKRDs7QUFNQWdGLGNBQU9FLG1CQUFQLENBQTJCRCxFQUEzQjtBQUVEOzs7Z0NBRVU7O0FBRVQ7QUFDQXJXLFVBQUdFLEVBQUgsQ0FBTXFXLFlBQU4sR0FBcUIsS0FBS0gsTUFBTCxHQUFjLHNCQUFuQzs7QUFFQSxXQUFJcFcsR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVFnRixJQUFaLEVBQWtCO0FBQ2hCLGFBQUl4QixNQUFNakUsR0FBR0UsRUFBSCxDQUFNTSxJQUFOLENBQVdtRCxXQUFyQjtBQUNBM0QsWUFBR0UsRUFBSCxDQUFNYSxFQUFOLENBQVNzUSxLQUFULElBQWtCcE4sR0FBbEIsQ0FGZ0IsQ0FFTztBQUN2QixhQUFJdVMsT0FBTyxnREFBWDtBQUNELFFBSkQsTUFJTztBQUNMLGFBQUl2UyxNQUFNLEVBQVY7QUFDQWpFLFlBQUdFLEVBQUgsQ0FBTWEsRUFBTixDQUFTc1EsS0FBVCxJQUFrQnBOLEdBQWxCLENBRkssQ0FFa0I7QUFDdkIsYUFBSXVTLE9BQU8sa0RBQVg7QUFDRDs7QUFFRCxXQUFJSCxLQUFLLFNBQUxBLEVBQUssR0FBSTtBQUNYO0FBQ0QsUUFGRDtBQUdBLFdBQUlJLE9BQU8sU0FBUEEsSUFBTyxHQUFJO0FBQ2J6VyxZQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU3FRLFNBQVQ7QUFDRCxRQUZEOztBQUlBO0FBQ0EsWUFBS2dGLE1BQUwsQ0FBWU0sR0FBWixDQUFnQnpTLE1BQUksQ0FBcEIsRUFBc0J1UyxJQUF0QixFQUEyQixPQUEzQixFQUFtQ0gsRUFBbkMsRUFBc0NJLElBQXRDO0FBRUQ7Ozs4Q0FFd0I7QUFBQTs7QUFFdkIsV0FBSUUsVUFBVSxFQUFkO0FBQ0EsV0FBSUMsaUJBQWlCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBNVcsVUFBRzZXLFFBTkQsRUFPRjdXLEdBQUc2VyxRQVBELEVBUUY3VyxHQUFHOFcsWUFSRCxDQUFyQjs7QUFXQSxXQUFJN1MsTUFBTTJTLGVBQWVsUyxNQUF6QjtBQUNBMUUsVUFBR0UsRUFBSCxDQUFNYSxFQUFOLENBQVNzUSxLQUFULElBQWtCcE4sR0FBbEIsQ0FmdUIsQ0FlQTs7QUFFdkIsV0FBSThTLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUM5UyxHQUFELEVBQU1vUyxFQUFOLEVBQVc7O0FBRTlCLGFBQUlXLE1BQUo7QUFBQSxhQUFXcEUsTUFBSSxDQUFmOztBQUVBLGFBQUlxRSxPQUFPLFNBQVBBLElBQU8sQ0FBQ2xULENBQUQsRUFBSztBQUNkaVQsb0JBQVMsSUFBSUosZUFBZTdTLENBQWYsQ0FBSixDQUFzQm1ULElBQXRCLENBQVQ7QUFDQVAsbUJBQVEvTixJQUFSLENBQWFvTyxNQUFiO0FBQ0QsVUFIRDs7QUFLQSxhQUFJRSxPQUFPLFNBQVBBLElBQU8sR0FBVTtBQUNuQnRFO0FBQ0E1UyxjQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU3FRLFNBQVQ7QUFDQSxlQUFHd0IsT0FBTzNPLEdBQVYsRUFBZW9TLEdBQUdNLE9BQUgsRUFBZixLQUNLTSxLQUFLckUsR0FBTDtBQUNOLFVBTEQ7O0FBT0FxRSxjQUFLckUsR0FBTDtBQUVILFFBbEJEOztBQW9CQW1FLHdCQUFpQkgsZUFBZWxTLE1BQWhDLEVBQXVDLFVBQUNpUyxPQUFELEVBQVc7O0FBRWhELGVBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGVBQUtRLG1CQUFMO0FBRUQsUUFMRDtBQU9EOzs7MkNBRXFCO0FBQUE7O0FBRXBCLFdBQUlDLGNBQWMsQ0FDaEIsNkRBRGdCLEVBRWhCLHFEQUZnQixFQUdoQixvREFIZ0IsRUFJaEIscURBSmdCLEVBS2hCLDJEQUxnQixFQU1oQixvREFOZ0IsQ0FBbEI7QUFRQSxZQUFLQyxRQUFMLEdBQWdCLEVBQWhCOztBQUVBLFdBQUlwVCxNQUFNbVQsWUFBWTFTLE1BQXRCO0FBQ0ExRSxVQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU3NRLEtBQVQsSUFBa0JwTixHQUFsQixDQWJvQixDQWFHOztBQUV2QixXQUFJcVQsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ3JULEdBQUQsRUFBTW9TLEVBQU4sRUFBVzs7QUFFakMsYUFBSWtCLE9BQUo7QUFBQSxhQUFZM0UsTUFBSSxDQUFoQjs7QUFFQSxhQUFJcUUsT0FBTyxTQUFQQSxJQUFPLENBQUNsVCxDQUFELEVBQUs7QUFDZHdULHFCQUFVQyxNQUFNQyxVQUFOLENBQWlCQyxXQUFqQixDQUE2Qk4sWUFBWXJULENBQVosQ0FBN0IsRUFBNkMsSUFBN0MsRUFBbURtVCxJQUFuRCxDQUFWO0FBQ0Esa0JBQUtHLFFBQUwsQ0FBY3pPLElBQWQsQ0FBbUIyTyxPQUFuQjtBQUNELFVBSEQ7O0FBS0EsYUFBSUwsT0FBTyxTQUFQQSxJQUFPLEdBQVU7QUFDbkJ0RTtBQUNBNVMsY0FBR0UsRUFBSCxDQUFNYSxFQUFOLENBQVNxUSxTQUFUO0FBQ0EsZUFBR3dCLE9BQU8zTyxHQUFWLEVBQWVvUyxLQUFmLEtBQ0tZLEtBQUtyRSxHQUFMO0FBQ04sVUFMRDs7QUFPQXFFLGNBQUtyRSxHQUFMO0FBRUQsUUFsQkQ7O0FBb0JBMEUseUJBQWtCRixZQUFZMVMsTUFBOUIsRUFBc0MsWUFBSTtBQUFDbkQsV0FBRXhCLE1BQUYsRUFBVWlPLE9BQVYsQ0FBa0IsdUJBQWxCO0FBQTRDLFFBQXZGO0FBRUQ7OzsrQkFFUzs7QUFFUjtBQUNBLFdBQUkySixTQUFTO0FBQ1hDLGlCQUFRO0FBQ05DLHFCQUFVLENBQ1IsV0FEUSxFQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOUSxZQURKO0FBU05DLGlCQUFNLENBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxJO0FBVEEsVUFERztBQWtCWEMsaUJBQVEsa0JBQVc7O0FBRWZ6TixlQUFJLGFBQUo7QUFDQXRLLGNBQUdFLEVBQUgsQ0FBTU0sSUFBTixDQUFXc0QsYUFBWCxHQUEyQixJQUEzQjtBQUVIO0FBdkJVLFFBQWI7O0FBMEJBLFdBQUlzUyxTQUFTLHNCQUFiO0FBQ0FBLGNBQU80QixPQUFQLENBQWVMLE1BQWY7QUFFRDs7OzZCQUVPLENBR1A7OztpQ0FFVyxDQUlYOzs7Ozs7bUJBbE1rQnhCLE87Ozs7Ozs7Ozs7Ozs7Ozs7QUNUckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FFcUI4QixNO0FBRW5CLHFCQUFjO0FBQUE7O0FBRVosVUFBSzlPLElBQUwsR0FBWSxFQUFaO0FBQ0EsVUFBS3lKLEdBQUwsR0FBVyxDQUFYO0FBRUQ7Ozs7MEJBRUlzRixHLEVBQUk3QixFLEVBQUk7O0FBRVg5VSxTQUFFNFcsT0FBRixDQUFVRCxHQUFWLEVBQWUsVUFBQ0UsSUFBRCxFQUFROztBQUVyQi9CLFlBQUcrQixJQUFIO0FBRUQsUUFKRDtBQU1EOzs7eUJBRUduVSxHLEVBQUt1UyxJLEVBQU10RCxJLEVBQTZCO0FBQUEsV0FBdkJtRCxFQUF1Qix1RUFBcEIsWUFBSSxDQUFFLENBQWM7QUFBQSxXQUFaSSxJQUFZLHVFQUFQLFlBQUksQ0FBRSxDQUFDOzs7QUFFMUMsV0FBSTFTLENBQUo7QUFBQSxXQUFPMlMsR0FBUDtBQUFBLFdBQVkyQixHQUFaO0FBQUEsV0FBaUJ6RixNQUFNLENBQXZCO0FBQUEsV0FBMEJ6SixPQUFPLEVBQWpDOztBQUVBLFlBQUlwRixJQUFJLENBQVIsRUFBVUEsSUFBSUUsR0FBZCxFQUFrQkYsR0FBbEIsRUFBc0I7QUFDcEIyUyxlQUFNLElBQUk0QixLQUFKLEVBQU47QUFDQUQsZUFBTXJZLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFROFgsSUFBUixDQUFheFUsQ0FBYixFQUFlLENBQUMsQ0FBaEIsQ0FBTjtBQUNBLGNBQUtvRixJQUFMLENBQVVQLElBQVYsQ0FBZThOLEdBQWY7QUFDQUEsYUFBSThCLE1BQUosR0FBYSxZQUFJO0FBQ2YvQjtBQUNBN0Q7QUFDQSxlQUFHQSxPQUFPM08sR0FBVixFQUFlb1M7QUFDaEIsVUFKRDtBQUtBSyxhQUFJd0IsR0FBSixHQUFVMUIsT0FBS3RELElBQUwsR0FBVW1GLEdBQVYsR0FBYyxNQUF4QjtBQUNEO0FBRUY7O0FBRUQ7Ozs7bUNBQ2NwVSxHLEVBQUt1UyxJLEVBQU10RCxJLEVBQTRCO0FBQUE7O0FBQUEsV0FBdEJtRCxFQUFzQix1RUFBbkIsWUFBSSxDQUFFLENBQWE7QUFBQSxXQUFaSSxJQUFZLHVFQUFQLFlBQUksQ0FBRSxDQUFDOzs7QUFFbkQsV0FBSTFTLENBQUo7QUFBQSxXQUFPMlMsR0FBUDtBQUFBLFdBQVkyQixHQUFaO0FBQUEsV0FBaUJ6RixNQUFNLENBQXZCO0FBQUEsV0FBMEJ6SixPQUFPLEVBQWpDOztBQUVBLFdBQUk4TixPQUFPLFNBQVBBLElBQU8sQ0FBQ2xULENBQUQsRUFBSztBQUNaMlMsZUFBTSxJQUFJNEIsS0FBSixFQUFOO0FBQ0FELGVBQU1yWSxHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUThYLElBQVIsQ0FBYXhVLENBQWIsRUFBZSxDQUFDLENBQWhCLENBQU47QUFDQSxlQUFLb0YsSUFBTCxDQUFVUCxJQUFWLENBQWU4TixHQUFmO0FBQ0FBLGFBQUk4QixNQUFKLEdBQWEsWUFBSTtBQUNmL0I7QUFDQVM7QUFDRCxVQUhEO0FBSUFSLGFBQUl3QixHQUFKLEdBQVUxQixPQUFLdEQsSUFBTCxHQUFVbUYsR0FBVixHQUFjLE1BQXhCO0FBQ0gsUUFURDs7QUFXQSxXQUFJbkIsT0FBTyxTQUFQQSxJQUFPLEdBQUk7QUFDWHRFO0FBQ0EsYUFBR0EsT0FBTzNPLEdBQVYsRUFBYztBQUNab1M7QUFDRCxVQUZELE1BRUs7QUFDSFksZ0JBQUtyRSxHQUFMO0FBQ0Q7QUFDSixRQVBEOztBQVNBcUUsWUFBS3JFLEdBQUw7QUFDRDs7O2lDQUVXeUQsRSxFQUFHOztBQUViLFdBQUlvQyxTQUFTbFgsRUFBRSxLQUFGLEVBQVNtRCxNQUF0QjtBQUNBLFdBQUlrTyxNQUFNLENBQVY7O0FBRUFyUixTQUFFLEtBQUYsRUFBU21NLElBQVQsQ0FBYyxVQUFTM0osQ0FBVCxFQUFZMlUsR0FBWixFQUFpQjs7QUFFM0IsYUFBSWhDLE1BQU0sSUFBSTRCLEtBQUosRUFBVjtBQUNBNUIsYUFBSThCLE1BQUosR0FBYSxZQUFJO0FBQ2Y1RjtBQUNBLGVBQUlBLE9BQUs2RixTQUFPLENBQWhCLEVBQW1CO0FBQ2pCcEM7QUFDRDtBQUNGLFVBTEQ7QUFNQUssYUFBSXdCLEdBQUosR0FBVVEsSUFBSVIsR0FBZDtBQUVILFFBWEQ7QUFhRDs7OzJCQUVLQSxHLEVBQWdCO0FBQUE7O0FBQUEsV0FBWDdCLEVBQVcsdUVBQVIsWUFBSSxDQUFFLENBQUU7OztBQUVwQixXQUFJc0MsU0FBUyxLQUFiO0FBQ0EsWUFBS0MsS0FBTCxHQUFhdlcsU0FBU3dXLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjs7QUFFQSxXQUFJQyxPQUFPLEtBQUtDLGVBQUwsQ0FBcUIsS0FBS0gsS0FBMUIsQ0FBWDtBQUNBLFdBQUlFLFFBQVEsRUFBWixFQUFnQjtBQUNkO0FBQ0Q7O0FBRUQsWUFBS0YsS0FBTCxDQUFXaEssZ0JBQVgsQ0FBNEIsU0FBNUIsRUFBdUMsWUFBSTs7QUFFekMsYUFBSSxDQUFDLE9BQUsrSixNQUFWLEVBQWtCO0FBQ2hCLGtCQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUNBLGtCQUFLQyxLQUFMLENBQVczRixJQUFYLEdBQWtCLElBQWxCO0FBQ0Esa0JBQUsyRixLQUFMLENBQVdJLElBQVg7QUFDQTNDO0FBQ0Q7QUFFRixRQVRELEVBU0UsS0FURjs7QUFXQTtBQUNBLFlBQUt1QyxLQUFMLENBQVdWLEdBQVgsR0FBaUJBLEdBQWpCO0FBRUQ7Ozt5Q0FFbUI3QixFLEVBQUk7O0FBRXRCO0FBQ0EsV0FBSTRDLE1BQU01VyxTQUFTd1csYUFBVCxDQUF1QixRQUF2QixDQUFWO0FBQ0FJLFdBQUlULE1BQUosR0FBYSxZQUFJOztBQUVmbkM7QUFFRCxRQUpEOztBQU1BO0FBQ0E0QyxXQUFJZixHQUFKLEdBQVUsbUNBQVY7QUFDQSxXQUFJZ0IsaUJBQWlCN1csU0FBUzhXLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQXJCO0FBQ0FELHNCQUFlRSxVQUFmLENBQTBCQyxZQUExQixDQUF1Q0osR0FBdkMsRUFBNENDLGNBQTVDOztBQUdBO0FBQ0FuWixjQUFPdVosb0JBQVAsR0FBOEIsWUFBVzs7QUFFdkNoUCxhQUFJLGNBQUo7QUFHRCxRQUxEO0FBT0Q7Ozt1Q0FFaUI7O0FBRWhCLFdBQUlpUCxNQUFNLEVBQVY7QUFDQSxXQUFJLEtBQUtYLEtBQUwsQ0FBV1ksV0FBWCxDQUF1QixZQUF2QixLQUF3QyxVQUF4QyxJQUFzRCxLQUFLWixLQUFMLENBQVdZLFdBQVgsQ0FBdUIsWUFBdkIsS0FBd0MsT0FBbEcsRUFBMkc7QUFDekdELGVBQU0sTUFBTjtBQUNELFFBRkQsTUFFTyxJQUFHLEtBQUtYLEtBQUwsQ0FBV1ksV0FBWCxDQUF1QixXQUF2QixLQUF1QyxVQUF2QyxJQUFxRCxLQUFLWixLQUFMLENBQVdZLFdBQVgsQ0FBdUIsV0FBdkIsS0FBdUMsT0FBL0YsRUFBd0c7QUFDN0dELGVBQU0sS0FBTjtBQUNELFFBRk0sTUFFQSxJQUFHLEtBQUtYLEtBQUwsQ0FBV1ksV0FBWCxDQUF1QixXQUF2QixLQUF1QyxVQUF2QyxJQUFxRCxLQUFLWixLQUFMLENBQVdZLFdBQVgsQ0FBdUIsV0FBdkIsS0FBdUMsT0FBL0YsRUFBd0c7QUFDN0dELGVBQU0sS0FBTjtBQUNEOztBQUVELGNBQU9BLEdBQVA7QUFFRDs7OzZCQUVPNUIsTSxFQUFROztBQUVkO0FBQ0EsV0FBSThCLEtBQUtwWCxTQUFTd1csYUFBVCxDQUF1QixRQUF2QixDQUFUO0FBQ0FZLFVBQUd2QixHQUFILEdBQVMsQ0FBQyxZQUFZN1YsU0FBU2lDLFFBQVQsQ0FBa0IrSixRQUE5QixHQUF5QyxPQUF6QyxHQUFtRCxNQUFwRCxJQUNQLHVEQURGO0FBRUFvTCxVQUFHWCxJQUFILEdBQVUsaUJBQVY7QUFDQVcsVUFBR0MsS0FBSCxHQUFXLE1BQVg7QUFDQSxXQUFJN1ksSUFBSXdCLFNBQVM4VyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFSO0FBQ0F0WSxTQUFFdVksVUFBRixDQUFhQyxZQUFiLENBQTBCSSxFQUExQixFQUE4QjVZLENBQTlCOztBQUVBLFdBQUk4WSxRQUFRLFNBQVJBLEtBQVEsR0FBSTs7QUFFZDtBQUNBLGFBQUksT0FBT0MsT0FBUCxLQUFtQixXQUFwQixJQUFvQ0EsT0FBdkMsRUFBZ0Q7O0FBRTVDQSxtQkFBUTNDLElBQVIsQ0FBYVUsTUFBYjtBQUVILFVBSkQsTUFJSzs7QUFFRDVILHNCQUFXNEosS0FBWCxFQUFrQixHQUFsQjtBQUVIO0FBRUYsUUFiRDs7QUFlQUE7QUFFRDs7O2dDQUVVOztBQUVUcFksU0FBRSxNQUFGLEVBQVVnSSxHQUFWLENBQWMsU0FBZCxFQUF5QixHQUF6QjtBQUVEOzs7K0JBRVN0RixHLEVBQUs7O0FBRWIsV0FBSWdLLE9BQU8sSUFBWDs7QUFFQTFNLFNBQUV4QixNQUFGLEVBQVV1QyxFQUFWLENBQWEsUUFBYixFQUF1QixVQUFDbU0sS0FBRCxFQUFTOztBQUU5QlIsY0FBSzJFLEdBQUw7QUFDQSxhQUFJM0UsS0FBSzJFLEdBQUwsSUFBWTNPLEdBQWhCLEVBQXFCNFY7QUFFdEIsUUFMRDtBQU9EOzs7Ozs7bUJBdk1rQjVCLE07Ozs7Ozs7Ozs7OztzakJDTnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBOzs7Ozs7OztLQUVxQjZCLFU7QUFFbkIsdUJBQVk1VixLQUFaLEVBQWtCO0FBQUE7O0FBRWhCO0FBQ0FsRSxRQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU3NRLEtBQVQ7QUFDQSxTQUFJclIsR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVFpRixJQUFaLEVBQWtCMUYsR0FBR0UsRUFBSCxDQUFNYSxFQUFOLENBQVNxUSxTQUFUOztBQUVsQixTQUFJcFIsR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVFnRixJQUFaLEVBQWtCLEtBQUtpTSxLQUFMO0FBQ2xCLFVBQUtuUixTQUFMO0FBRUQ7Ozs7NkJBRU87O0FBRU47QUFDQSxZQUFLcVksS0FBTCxHQUFhLDRCQUFvQixZQUFwQixFQUFrQzVZLEdBQUdFLEVBQUgsQ0FBTU0sSUFBTixDQUFXb0QsV0FBN0MsRUFBMEQsSUFBMUQsQ0FBYjtBQUVEOzs7aUNBRVcsQ0FHWDs7Ozs7O21CQXZCa0JrVyxVOzs7Ozs7Ozs7Ozs7c2pCQ1ByQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0tBRXFCQyxlO0FBRW5CLDRCQUFZQyxFQUFaLEVBQWVDLE9BQWYsRUFBdUJDLFNBQXZCLEVBQWtDO0FBQUE7O0FBRWhDLFVBQUtDLE1BQUwsR0FBYyxJQUFkOztBQUVBLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsS0FBcEI7O0FBRUEsVUFBSzVJLEtBQUwsQ0FBV3NJLEVBQVgsRUFBY0MsT0FBZCxFQUFzQkMsU0FBdEI7QUFFRDs7OzsyQkFFS0YsRSxFQUFHQyxPLEVBQVFDLFMsRUFBVzs7QUFFMUI7QUFDQSxXQUFJLE9BQU9LLEVBQVAsS0FBYyxXQUFmLElBQStCQSxFQUEvQixJQUFxQ0EsR0FBR0MsTUFBM0MsRUFBa0Q7O0FBRTlDO0FBQ0EsY0FBS0wsTUFBTCxHQUFjLElBQUlJLEdBQUdDLE1BQVAsQ0FBY1IsRUFBZCxFQUFrQjtBQUM1QnBNLGtCQUFPLE1BRHFCLEVBQ2I7QUFDZkUsbUJBQVEsTUFGb0IsRUFFWjtBQUNoQjJNLG9CQUFTUixPQUhtQixFQUdWO0FBQ2xCUyxtQkFBUTtBQUNOLHdCQUFXLEtBQUtuWSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FETCxFQUM4QjtBQUNwQyw4QkFBaUIsS0FBS21ZLG1CQUFMLENBQXlCblksSUFBekIsQ0FBOEIsSUFBOUI7QUFGWCxZQUpvQjtBQVE1Qm9ZLHVCQUFZO0FBQ1ZDLHVCQUFVLENBREE7QUFFVkMsdUJBQVUsQ0FGQTtBQUdWQyx1QkFBVSxDQUhBO0FBSVZDLHVCQUFVLENBSkE7QUFLVkMsa0JBQUssQ0FMSztBQU1WQywwQkFBYSxDQU5IO0FBT1ZDLDZCQUFnQixDQVBOO0FBUVZDLHdCQUFVLENBUkE7QUFTVkMsNkJBQWdCLENBVE47QUFVVmpaLG9CQUFPLENBVkc7QUFXVjZRLG1CQUFNO0FBWEk7QUFSZ0IsVUFBbEIsQ0FBZDs7QUF3QkE7QUFDQSxhQUFJbkssSUFBSSx1QkFBYXZILEVBQUUsU0FBRixDQUFiLEVBQTBCQSxFQUFFLGFBQUYsQ0FBMUIsRUFBMkMsQ0FBM0MsRUFBNkMsb0JBQTdDLENBQVI7QUFDQXVILFdBQUV3UyxVQUFGLEdBQWUsSUFBZjtBQUNBeFMsV0FBRXlTLFVBQUYsR0FBZSxJQUFmO0FBQ0F6UyxXQUFFMFMsR0FBRjtBQUVILFFBakNELE1BaUNLOztBQUVEekwsb0JBQVcsS0FBSzJCLEtBQUwsQ0FBV2xQLElBQVgsQ0FBZ0IsSUFBaEIsRUFBcUJ3WCxFQUFyQixFQUF3QkMsT0FBeEIsRUFBZ0NDLFNBQWhDLENBQVgsRUFBdUQsR0FBdkQ7QUFFSDtBQUdGOzs7NkJBRVFoTSxDLEVBQUc7O0FBRVY7QUFDQUEsU0FBRStELE1BQUYsQ0FBU3dKLGtCQUFULENBQTRCLFNBQTVCOztBQUVBO0FBQ0EsWUFBS2xiLFNBQUw7O0FBRUE7QUFDQVAsVUFBR0UsRUFBSCxDQUFNd2IsSUFBTixHQUFhLHVCQUFiO0FBQ0ExYixVQUFHRSxFQUFILENBQU0wQixVQUFOLENBQWlCZ1gsS0FBakIsQ0FBdUIrQyxZQUF2QjtBQUVEOzs7eUNBRW9Cek4sQyxFQUFHOztBQUV0QixXQUFJME4sU0FBUzFOLEVBQUVrSyxJQUFmOztBQUVBO0FBQ0EsV0FBSXdELFVBQVU3YixPQUFPd2EsRUFBUCxDQUFVc0IsV0FBVixDQUFzQkMsS0FBcEMsRUFBMkM7O0FBRXZDO0FBQ0EsY0FBSzNCLE1BQUwsQ0FBWTRCLFNBQVo7QUFFSDs7QUFFRDtBQUNBLFdBQUlILFVBQVU3YixPQUFPd2EsRUFBUCxDQUFVc0IsV0FBVixDQUFzQkcsT0FBcEMsRUFBNkM7O0FBRTNDLGFBQUksS0FBSzVCLE9BQVQsRUFBa0I7QUFDaEIsZ0JBQUtBLE9BQUwsR0FBZSxLQUFmO0FBQ0FwYSxjQUFHRSxFQUFILENBQU1hLEVBQU4sQ0FBU3FRLFNBQVQ7QUFDRDs7QUFFRDtBQUVEOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBSXdLLFVBQVU3YixPQUFPd2EsRUFBUCxDQUFVc0IsV0FBVixDQUFzQkksSUFBcEMsRUFBMEM7O0FBRXRDLGNBQUtOLFlBQUw7QUFFSDs7QUFHRDtBQUNBLFdBQUkzYixHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUXliLFFBQVIsTUFBc0JOLFVBQVU3YixPQUFPd2EsRUFBUCxDQUFVc0IsV0FBVixDQUFzQk0sU0FBMUQsRUFBcUUsS0FBS2hDLE1BQUwsQ0FBWWlDLE1BQVosQ0FBbUIsS0FBS2pDLE1BQUwsQ0FBWWtDLGNBQVosS0FBK0IsR0FBbEQ7QUFFdEU7OztvQ0FFYzs7QUFFYixXQUFJeE8sSUFBSTdOLEdBQUdFLEVBQUgsQ0FBTXdiLElBQU4sQ0FBV1ksR0FBbkI7O0FBRUEsV0FBSXpPLEtBQUssQ0FBTCxJQUFVQSxJQUFJLEVBQWxCLEVBQXNCOztBQUVwQixjQUFLc00sTUFBTCxDQUFZaUMsTUFBWixDQUFtQixDQUFuQjtBQUVELFFBSkQsTUFJTyxJQUFJdk8sS0FBSyxFQUFMLElBQVdBLElBQUksRUFBbkIsRUFBdUI7O0FBRTVCLGNBQUtzTSxNQUFMLENBQVlpQyxNQUFaLENBQW1CLEVBQW5CO0FBRUQsUUFKTSxNQUlBOztBQUVMLGNBQUtqQyxNQUFMLENBQVlpQyxNQUFaLENBQW1CLEVBQW5CO0FBRUQ7O0FBRUQsWUFBS2pDLE1BQUwsQ0FBWTRCLFNBQVo7QUFHRDs7OzhCQUVROztBQUVQLFdBQUk5VixNQUFNLEtBQUtrVSxNQUFMLENBQVlrQyxjQUFaLEVBQVY7O0FBRUEsV0FBSXBXLE1BQU0sR0FBVixFQUFlO0FBQ2IsY0FBS29VLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxjQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0Q7O0FBRUQsV0FBSXJVLE1BQU0sRUFBTixJQUFZLENBQUMsS0FBS29VLFVBQXRCLEVBQWtDO0FBQ2xDLGNBQUtBLFVBQUwsR0FBa0IsSUFBbEI7O0FBRUVqSSxrQkFBU0MsRUFBVCxDQUFZOVEsRUFBRSxlQUFGLENBQVosRUFBZ0MsR0FBaEMsRUFBcUM7QUFDakNnUixvQkFBUyxDQUR3QjtBQUVqQ0MsaUJBQUtDLE9BQU9DO0FBRnFCLFVBQXJDO0FBS0Q7O0FBRUQsV0FBSXpNLE1BQU0sR0FBTixJQUFhLENBQUMsS0FBS3FVLFlBQXZCLEVBQXFDO0FBQ3JDLGNBQUtBLFlBQUwsR0FBb0IsSUFBcEI7O0FBRUVsSSxrQkFBU0MsRUFBVCxDQUFZOVEsRUFBRSxlQUFGLENBQVosRUFBZ0MsR0FBaEMsRUFBcUM7QUFDakNnUixvQkFBUyxDQUR3QjtBQUVqQ0MsaUJBQUtDLE9BQU9DO0FBRnFCLFVBQXJDO0FBS0Q7QUFFRjs7O2lDQUVXOztBQUVWMVMsVUFBR0UsRUFBSCxDQUFNUyxFQUFOLENBQVNvUSxHQUFULENBQWEsaUJBQWIsRUFBK0IsS0FBS3dMLE1BQUwsQ0FBWS9aLElBQVosQ0FBaUIsSUFBakIsQ0FBL0I7QUFFRDs7O29DQUVjOztBQUVieEMsVUFBR0UsRUFBSCxDQUFNUyxFQUFOLENBQVM2USxNQUFULENBQWdCLGlCQUFoQjtBQUVEOzs7Ozs7bUJBeExrQnVJLGU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FFcUJ5QyxRO0FBRW5CLHFCQUFZQyxLQUFaLEVBQWtCQyxPQUFsQixFQUEwQm5aLElBQTFCLEVBQWdDMlAsSUFBaEMsRUFBc0M7QUFBQTs7QUFFcEMsVUFBS3lKLEtBQUwsR0FBYUYsS0FBYjtBQUNBLFVBQUtqUCxPQUFMLEdBQWVrUCxPQUFmOztBQUVBLFVBQUt4WixDQUFMLEdBQVMsS0FBS3laLEtBQUwsQ0FBVy9PLEtBQVgsRUFBVDtBQUNBLFVBQUt6SyxDQUFMLEdBQVMsS0FBS3daLEtBQUwsQ0FBVzdPLE1BQVgsRUFBVDtBQUNBLFVBQUs4TyxPQUFMO0FBQ0EsVUFBS0MsT0FBTDtBQUNBLFVBQUt2QixVQUFMO0FBQ0EsVUFBS0MsVUFBTDtBQUNBLFVBQUt1QixNQUFMO0FBQ0EsVUFBS0MsS0FBTDtBQUNBLFVBQUtDLEVBQUw7QUFDQSxVQUFLQyxFQUFMOztBQUVBLFVBQUsxWixJQUFMLEdBQVlBLFFBQVEsQ0FBcEI7QUFDQSxVQUFLMlAsSUFBTCxHQUFZQSxRQUFRLFVBQXBCOztBQUVBO0FBQ0E7QUFDQSxVQUFLM1MsU0FBTDtBQUVEOzs7O2dDQUVVOztBQUVULFlBQUtvYyxLQUFMLENBQVdwVCxHQUFYLENBQWU7QUFDYixxQkFBWTtBQURDLFFBQWY7QUFHQSxZQUFLaUUsT0FBTCxDQUFhakUsR0FBYixDQUFpQixVQUFqQixFQUE2QixVQUE3QjtBQUVEOzs7OEJBRVE7O0FBRVAsWUFBSytSLFVBQUwsR0FBa0IsS0FBSzlOLE9BQUwsQ0FBYTBQLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JDLFdBQXBCLElBQW1DLEtBQUszUCxPQUFMLENBQWEwUCxHQUFiLENBQWlCLENBQWpCLEVBQW9CdFAsS0FBdkQsSUFBZ0UsS0FBS0osT0FBTCxDQUFhSSxLQUFiLEVBQWxGLEVBQ0EsS0FBSzJOLFVBQUwsR0FBa0IsS0FBSy9OLE9BQUwsQ0FBYTBQLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JFLFlBQXBCLElBQW9DLEtBQUs1UCxPQUFMLENBQWEwUCxHQUFiLENBQWlCLENBQWpCLEVBQW9CcFAsTUFBeEQsSUFBbUUsS0FBS04sT0FBTCxDQUFhTSxNQUFiLEVBRHJGO0FBR0Q7OzsrQkFFUzs7QUFFUixZQUFLNUssQ0FBTCxHQUFTLEtBQUt5WixLQUFMLENBQVcvTyxLQUFYLEVBQVQ7QUFDQSxZQUFLekssQ0FBTCxHQUFTLEtBQUt3WixLQUFMLENBQVc3TyxNQUFYLEVBQVQ7O0FBRUEsWUFBS2dQLE1BQUwsR0FBYyxLQUFLM1osQ0FBTCxHQUFTLEtBQUtELENBQTVCO0FBQ0EsWUFBSzZaLEtBQUwsR0FBYSxLQUFLeEIsVUFBTCxHQUFrQixLQUFLRCxVQUFwQyxFQUVBLEtBQUswQixFQUFMLEdBQVUsRUFBRyxLQUFLMUIsVUFBTCxJQUFtQixLQUFLblksQ0FBTCxHQUFTLEtBQUtvWSxVQUFqQyxDQUFILElBQW1ELENBRjdEO0FBR0EsWUFBSzBCLEVBQUwsR0FBVSxFQUFHLEtBQUsxQixVQUFMLElBQW1CLEtBQUtyWSxDQUFMLEdBQVMsS0FBS29ZLFVBQWpDLENBQUgsSUFBbUQsQ0FBN0Q7QUFFRDs7OzhCQUVPOztBQUVKLFdBQUksS0FBSy9YLElBQUwsSUFBYSxPQUFiLElBQXdCLEtBQUtBLElBQUwsSUFBYSxDQUF6QyxFQUE0Qzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBLGFBQUksS0FBS3VaLE1BQUwsR0FBYyxLQUFLQyxLQUF2QixFQUE4Qjs7QUFFNUIsZUFBSXBQLElBQUssS0FBS3hLLENBQUwsR0FBUyxLQUFLb1ksVUFBZixHQUE2QixLQUFLRCxVQUExQzs7QUFFRSxnQkFBSzlOLE9BQUwsQ0FDR2pFLEdBREgsQ0FDTyxFQUFDLFVBQVUsS0FBS3BHLENBQWhCLEVBRFAsRUFFR29HLEdBRkgsQ0FFTyxFQUFDLGNBQWMsQ0FBZixFQUFpQixlQUFlLEtBQUt5VCxFQUFyQyxFQUF3QyxPQUFNLENBQTlDLEVBQWdELFFBQU8sS0FBdkQsRUFBNkQsU0FBUXJQLENBQXJFLEVBRlA7QUFJSCxVQVJELE1BUU8sSUFBSyxLQUFLbVAsTUFBTCxJQUFlLEtBQUtDLEtBQXpCLEVBQWdDOztBQUVuQyxlQUFJbFAsSUFBSyxLQUFLM0ssQ0FBTCxHQUFTLEtBQUtvWSxVQUFmLEdBQTZCLEtBQUtDLFVBQTFDOztBQUVBLGdCQUFLL04sT0FBTCxDQUNHakUsR0FESCxDQUNPLEVBQUMsU0FBUyxLQUFLckcsQ0FBZixFQURQLEVBRUdxRyxHQUZILENBRU8sRUFBQyxjQUFjLEtBQUswVCxFQUFwQixFQUF1QixlQUFlLENBQXRDLEVBQXdDLE9BQU0sS0FBOUMsRUFBb0QsUUFBTyxDQUEzRCxFQUE2RCxVQUFTcFAsQ0FBdEUsRUFGUDtBQUlIO0FBRUYsUUF4QkQsTUF3Qk8sSUFBSSxLQUFLdEssSUFBTCxJQUFhLFNBQWIsSUFBMEIsS0FBS0EsSUFBTCxJQUFhLENBQTNDLEVBQTZDOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUEsYUFBSSxLQUFLdVosTUFBTCxHQUFjLEtBQUtDLEtBQXZCLEVBQThCOztBQUUxQixnQkFBS3ZQLE9BQUwsQ0FDR2pFLEdBREgsQ0FDTyxFQUFDLFVBQVUsS0FBS3BHLENBQWhCLEVBRFAsRUFFR29HLEdBRkgsQ0FFTyxFQUFDLGNBQWMsQ0FBZixFQUFpQixlQUFlLEtBQUt5VCxFQUFyQyxFQUF3QyxPQUFNLENBQTlDLEVBQWdELFFBQU8sS0FBdkQsRUFBNkQsU0FBUSxNQUFyRSxFQUZQO0FBSUgsVUFORCxNQU1PLElBQUssS0FBS0YsTUFBTCxJQUFlLEtBQUtDLEtBQXpCLEVBQWdDOztBQUVuQyxnQkFBS3ZQLE9BQUwsQ0FDR2pFLEdBREgsQ0FDTyxFQUFDLFNBQVMsS0FBS3JHLENBQWYsRUFEUCxFQUVHcUcsR0FGSCxDQUVPLEVBQUMsY0FBYyxLQUFLMFQsRUFBcEIsRUFBdUIsZUFBZSxDQUF0QyxFQUF3QyxPQUFNLEtBQTlDLEVBQW9ELFFBQU8sQ0FBM0QsRUFBNkQsVUFBUyxNQUF0RSxFQUZQO0FBSUg7QUFFRjtBQUVKOzs7NEJBRU07O0FBRUwsWUFBS0ksTUFBTDtBQUVEOzs7MkJBRUs7O0FBRUosWUFBS0MsUUFBTDtBQUNBLFlBQUtDLE9BQUw7QUFDQSxZQUFLQyxNQUFMO0FBRUQ7OztpQ0FFVzs7QUFFVnhkLFVBQUdFLEVBQUgsQ0FBTVUsQ0FBTixDQUFRbVEsR0FBUixDQUFZLEtBQUttQyxJQUFqQixFQUF1QixLQUFLc0ksR0FBTCxDQUFTaFosSUFBVCxDQUFjLElBQWQsQ0FBdkI7QUFFRDs7Ozs7O21CQTVIa0JnYSxROzs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztLQUVxQmlCLE87QUFFbkIsc0JBQWE7QUFBQTs7QUFFWCxVQUFLalEsT0FBTCxHQUFlak0sRUFBRSxXQUFGLENBQWY7QUFDQSxVQUFLbWMsSUFBTCxHQUFZLEtBQUtsUSxPQUFMLENBQWFtUSxJQUFiLENBQWtCLE1BQWxCLENBQVo7QUFDQSxVQUFLQyxJQUFMLEdBQVksS0FBS3BRLE9BQUwsQ0FBYW1RLElBQWIsQ0FBa0IsTUFBbEIsQ0FBWjtBQUNBLFVBQUtFLElBQUwsR0FBWSxLQUFLclEsT0FBTCxDQUFhbVEsSUFBYixDQUFrQixNQUFsQixDQUFaO0FBQ0EsVUFBS0csSUFBTCxHQUFZLEtBQUt0USxPQUFMLENBQWFtUSxJQUFiLENBQWtCLE1BQWxCLENBQVo7O0FBRUEsVUFBS3JCLEdBQUwsR0FBVyxDQUFYOztBQUVBLFVBQUt5QixPQUFMLEdBQWdCL2QsR0FBR0UsRUFBSCxDQUFNVSxDQUFOLENBQVE0UyxFQUFSLENBQVczRixDQUFYLEdBQWUsR0FBaEIsR0FBc0IsSUFBdEIsR0FBNEIsS0FBM0M7O0FBRUEsVUFBS21RLEdBQUwsR0FBVyxFQUFYLENBWlcsQ0FZSTs7QUFFZixVQUFLdE0sS0FBTDtBQUNBLFVBQUs4SixHQUFMO0FBQ0EsVUFBS2piLFNBQUw7QUFFRDs7Ozs2QkFFTzs7QUFFTlAsVUFBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVFpYixJQUFSO0FBQ0EsV0FBSTdOLElBQUk3TixHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUXdMLElBQVIsR0FBZSxLQUFLK1IsR0FBNUI7QUFDQSxXQUFJblEsSUFBRSxDQUFOLEVBQVNBLElBQUksS0FBS0EsQ0FBVDtBQUNULFlBQUt5TyxHQUFMLEdBQVd6TyxDQUFYO0FBRUQ7Ozs4QkFFUTs7QUFFUDtBQUNBLFdBQUk3TixHQUFHRSxFQUFILENBQU1TLEVBQU4sQ0FBU2lTLEdBQVQsR0FBYSxFQUFiLEtBQWtCLENBQXRCLEVBQXlCOztBQUd6QjVTLFVBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRaWIsSUFBUjs7QUFFQSxXQUFJN04sSUFBSTdOLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRd0wsSUFBUixHQUFlLEtBQUsrUixHQUE1QjtBQUNBLFdBQUluUSxJQUFFLENBQU4sRUFBU0EsSUFBSSxLQUFLQSxDQUFUOztBQUVULFlBQUt5TyxHQUFMLEdBQVd6TyxDQUFYOztBQUVBQSxXQUFJN04sR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVE4WCxJQUFSLENBQWExSyxDQUFiLEVBQWdCcEosS0FBaEIsQ0FBc0IsRUFBdEIsQ0FBSjtBQUNBLFdBQUkzRCxJQUFJZCxHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUThYLElBQVIsQ0FBYXZZLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRMEwsTUFBckIsRUFBNkIxSCxLQUE3QixDQUFtQyxFQUFuQyxDQUFSO0FBQ0EsV0FBSTVELElBQUliLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFROFgsSUFBUixDQUFhdlksR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVE0TCxNQUFyQixFQUE2QjVILEtBQTdCLENBQW1DLEVBQW5DLENBQVI7O0FBRUEsWUFBS2laLElBQUwsQ0FBVXhMLElBQVYsQ0FBZXJFLEVBQUUsQ0FBRixDQUFmO0FBQ0EsWUFBSytQLElBQUwsQ0FBVTFMLElBQVYsQ0FBZXJFLEVBQUUsQ0FBRixDQUFmO0FBQ0EsWUFBS2dRLElBQUwsQ0FBVTNMLElBQVYsQ0FBZXBSLEVBQUUsQ0FBRixDQUFmO0FBQ0EsWUFBS2dkLElBQUwsQ0FBVTVMLElBQVYsQ0FBZXBSLEVBQUUsQ0FBRixDQUFmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUQ7OzsyQkFFSzs7QUFFSmQsVUFBR0UsRUFBSCxDQUFNUyxFQUFOLENBQVNvUSxHQUFULENBQWEsU0FBYixFQUF3QixLQUFLVSxNQUFMLENBQVlqUCxJQUFaLENBQWlCLElBQWpCLENBQXhCOztBQUVBO0FBQ0EsV0FBSXliLEtBQUssSUFBSUMsV0FBSixDQUFnQixFQUFDQyxRQUFRLENBQUMsQ0FBVixFQUFoQixDQUFUOztBQUVBRixVQUNHRyxHQURILENBQ08sS0FBSzVRLE9BQUwsQ0FBYW1RLElBQWIsQ0FBa0IsUUFBbEIsQ0FEUCxFQUNvQyxFQUFDcEwsU0FBUyxDQUFWLEVBRHBDLEVBRUdGLEVBRkgsQ0FFTSxLQUFLN0UsT0FBTCxDQUFhbVEsSUFBYixDQUFrQixRQUFsQixDQUZOLEVBRW1DLEdBRm5DLEVBRXdDLEVBQUNwTCxTQUFTLENBQVYsRUFBWUMsTUFBTTZMLE9BQU8zTCxTQUF6QixFQUZ4QyxFQUdHTCxFQUhILENBR00sS0FBSzdFLE9BQUwsQ0FBYW1RLElBQWIsQ0FBa0IsUUFBbEIsQ0FITixFQUdtQyxHQUhuQyxFQUd3QyxFQUFDcEwsU0FBUyxDQUFWLEVBQVlDLE1BQU02TCxPQUFPM0wsU0FBekIsRUFIeEM7QUFLRDs7O2lDQUVXLENBSVg7OztvQ0FFYzs7QUFFYjFTLFVBQUdFLEVBQUgsQ0FBTVMsRUFBTixDQUFTNlEsTUFBVCxDQUFnQixTQUFoQjtBQUVEOzs7Ozs7bUJBcEZrQmlNLE87Ozs7Ozs7Ozs7Ozs7Ozs7QUNWckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FFcUJhLGdCO0FBRW5CLCtCQUFjO0FBQUE7O0FBR1osVUFBSzVNLEtBQUw7QUFDQSxVQUFLblIsU0FBTDtBQUVEOzs7OzZCQUVPOztBQUVOO0FBQ0FQLFVBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFROGQsVUFBUjtBQUNBdmUsVUFBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVErZCxXQUFSO0FBQ0F4ZSxVQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUWdlLFVBQVI7QUFDQXplLFVBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRaWUsVUFBUjs7QUFFQTtBQUNBMWUsVUFBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVFrZSxXQUFSOztBQUVBO0FBQ0EzZSxVQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUW1lLFdBQVI7QUFDQTVlLFVBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRb2UsWUFBUixDQUFxQjdlLEdBQUdFLEVBQUgsQ0FBTU0sSUFBTixDQUFXOEMsRUFBaEM7QUFDQXRELFVBQUdFLEVBQUgsQ0FBTVUsQ0FBTixDQUFRbVEsR0FBUixDQUFZLGFBQVosRUFBMkIvUSxHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUW1lLFdBQVIsQ0FBb0JwYyxJQUFwQixDQUF5QnhDLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBL0IsQ0FBM0I7QUFDQVQsVUFBR0UsRUFBSCxDQUFNVSxDQUFOLENBQVFtUSxHQUFSLENBQVksY0FBWixFQUE0Qi9RLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRb2UsWUFBUixDQUFxQnJjLElBQXJCLENBQTBCeEMsR0FBR0UsRUFBSCxDQUFNTyxDQUFoQyxFQUFtQ1QsR0FBR0UsRUFBSCxDQUFNTSxJQUFOLENBQVc4QyxFQUE5QyxDQUE1QjtBQUVEOzs7K0JBRVM7O0FBRVIsWUFBS29PLEtBQUw7QUFFRDs7O2lDQUVXLENBR1g7Ozs7OzttQkF0Q2tCNE0sZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FFcUJRLG1CO0FBRW5CLGtDQUFjO0FBQUE7O0FBRVosVUFBS3BOLEtBQUw7QUFDQSxVQUFLOEosR0FBTDtBQUNBLFVBQUtqYixTQUFMO0FBRUQ7Ozs7NkJBRU87O0FBRU4sWUFBS3dlLFFBQUwsR0FBaUIvZSxHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUStFLE9BQVQsR0FBbUIsS0FBbkIsR0FBMEIsSUFBMUM7QUFDQSxZQUFLd1osUUFBTCxHQUFpQmhmLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFROEUsT0FBVCxHQUFtQixLQUFuQixHQUEwQixJQUExQzs7QUFFQSxZQUFLaUksT0FBTCxHQUFlak0sRUFBRSxnQkFBRixDQUFmO0FBRUQ7OzsyQkFFTTs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxXQUFJdkIsR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVE4RSxPQUFSLElBQW1CLENBQUMsS0FBS3laLFFBQTdCLEVBQXVDO0FBQ3JDLGNBQUtELFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLElBQWhCOztBQUVBMVUsYUFBSSxFQUFKOztBQUVBLGNBQUtrRCxPQUFMLENBQWFFLElBQWIsQ0FBa0IsVUFBU3VSLEtBQVQsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQUE7O0FBRXBDLGVBQUloSCxNQUFNM1csRUFBRSxJQUFGLEVBQVF3TSxJQUFSLENBQWEsS0FBYixDQUFWO0FBQ0FtSyxpQkFBTWxZLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRMGUsVUFBUixDQUFtQmpILEdBQW5CLEVBQXdCLEtBQXhCLEVBQStCLEtBQS9CLENBQU47QUFDQTNXLGFBQUUsSUFBRixFQUFRNk0sR0FBUixDQUFZLE1BQVo7QUFDQTdNLGFBQUUsSUFBRixFQUFRZSxFQUFSLENBQVcsTUFBWCxFQUFtQixVQUFDbU0sS0FBRCxFQUFTOztBQUUxQixpQkFBSWxOLFNBQVE2ZCxRQUFSLENBQWlCLFFBQWpCLENBQUosRUFBZ0NwZixHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUTRlLFlBQVIsQ0FBcUI5ZCxRQUFyQjtBQUVqQyxZQUpEO0FBS0FBLGFBQUUsSUFBRixFQUFRd00sSUFBUixDQUFhLEtBQWIsRUFBbUJtSyxHQUFuQjs7QUFFQTtBQUNBO0FBRUQsVUFmRDs7QUFpQkE7QUFDQWxZLFlBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRNGUsWUFBUixDQUFxQjlkLEVBQUUsU0FBRixFQUFhK2QsR0FBYixDQUFpQixnQkFBakIsQ0FBckI7QUFFRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxXQUFJdGYsR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVErRSxPQUFSLElBQW1CLENBQUMsS0FBS3VaLFFBQTdCLEVBQXVDO0FBQ3JDLGNBQUtBLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLEtBQWhCOztBQUVBMVUsYUFBSSxFQUFKOztBQUVBLGNBQUtrRCxPQUFMLENBQWFFLElBQWIsQ0FBa0IsVUFBU3VSLEtBQVQsRUFBZ0JDLEVBQWhCLEVBQW9COztBQUVwQyxlQUFJaEgsTUFBTTNXLEVBQUUsSUFBRixFQUFRd00sSUFBUixDQUFhLEtBQWIsQ0FBVjtBQUNBbUssaUJBQU1sWSxHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUTBlLFVBQVIsQ0FBbUJqSCxHQUFuQixFQUF3QixLQUF4QixFQUErQixLQUEvQixDQUFOOztBQUVBM1csYUFBRSxJQUFGLEVBQVF3TSxJQUFSLENBQWEsRUFBQ0gsT0FBTyxNQUFSLEVBQWVFLFFBQVEsTUFBdkIsRUFBYjtBQUNBdk0sYUFBRSxJQUFGLEVBQVF3TSxJQUFSLENBQWEsS0FBYixFQUFtQm1LLEdBQW5CO0FBRUQsVUFSRDs7QUFVQTtBQUNBM1csV0FBRSxTQUFGLEVBQWErZCxHQUFiLENBQWlCLGdCQUFqQixFQUFtQ3ZSLElBQW5DLENBQXdDLEVBQUNILE9BQU8sTUFBUixFQUFlRSxRQUFRLE1BQXZCLEVBQXhDOztBQUVBO0FBQ0E7QUFFRDtBQUVGOzs7OEJBRVE7O0FBRVB4RCxXQUFJLFFBQUo7O0FBRUEsWUFBS29ILEtBQUw7QUFDQSxZQUFLOEosR0FBTDs7QUFFQXhiLFVBQUdFLEVBQUgsQ0FBTVUsQ0FBTixDQUFRNFEsTUFBUixDQUFlLHFCQUFmO0FBQ0F4UixVQUFHRSxFQUFILENBQU1VLENBQU4sQ0FBUW1RLEdBQVIsQ0FBWSxxQkFBWixFQUFtQyxLQUFLeUssR0FBTCxDQUFTaFosSUFBVCxDQUFjLElBQWQsQ0FBbkM7QUFFRDs7O2lDQUVXOztBQUVWeEMsVUFBR0UsRUFBSCxDQUFNVSxDQUFOLENBQVFtUSxHQUFSLENBQVkscUJBQVosRUFBbUMsS0FBS3lLLEdBQUwsQ0FBU2haLElBQVQsQ0FBYyxJQUFkLENBQW5DO0FBRUQ7Ozs7OzttQkFqR2tCc2MsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FFcUJTLGU7QUFFbkIsOEJBQWM7QUFBQTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQmplLEVBQUV4QixNQUFGLENBQWxCO0FBQ0EsVUFBSzBmLFFBQUwsR0FBZ0JsZSxFQUFFeEIsTUFBRixDQUFoQjs7QUFFQSxVQUFLMmYsUUFBTCxHQUFnQjtBQUNkLGNBQU8sQ0FETztBQUVkLGdCQUFTLENBRks7QUFHZCxvQkFBYSxDQUhDO0FBSWQsa0JBQVc7QUFKRyxNQUFoQjs7QUFPQTtBQUNBLFVBQUtwTyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFVBQUtxTyxHQUFMLEdBQVcsSUFBWDtBQUNBLFVBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxVQUFLNWIsR0FBTCxHQUFXLENBQVg7O0FBRUEsVUFBSzhOLE1BQUwsR0FBYyxLQUFkOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQUsrTixFQUFMLEdBQVUsQ0FBVixDQUFZLEtBQUtDLEVBQUwsR0FBVSxDQUFWLENBQVksS0FBS0MsRUFBTCxHQUFVLENBQVYsQ0FoQ1osQ0FnQ3lCO0FBQ3JDLFVBQUtoQyxHQUFMLEdBQVcsQ0FBWCxDQUFhLEtBQUtpQyxNQUFMLEdBQWMsRUFBZDs7QUFFYjtBQUNBLFVBQUtDLEVBQUwsR0FBUSxDQUFSLENBQVUsS0FBS0MsRUFBTCxHQUFRLENBQVIsQ0FBVSxLQUFLQyxJQUFMLEdBQVksR0FBWixDQXBDUixDQW9DeUI7O0FBRXJDLFVBQUtsZCxDQUFMLEdBQVNsRCxHQUFHRSxFQUFILENBQU1VLENBQU4sQ0FBUXNDLENBQVIsRUFBVDs7QUFFQSxVQUFLbWQsV0FBTCxHQUFtQixZQUFJLENBQUUsQ0FBekI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLFlBQUksQ0FBRSxDQUE1QjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsWUFBSSxDQUFFLENBQTFCOztBQUVBLFVBQUs3TyxLQUFMO0FBQ0EsVUFBS25SLFNBQUw7QUFFRDs7Ozs2QkFFTyxDQUVQOzs7a0NBRWEyTixDLEVBQUc7O0FBRWY7QUFDQSxXQUFJL0YsSUFBSStGLEVBQUVzSCxhQUFGLENBQWdCQyxjQUFoQixDQUErQixDQUEvQixFQUFrQ0UsS0FBMUM7QUFDQSxZQUFLNkssRUFBTCxHQUFVclksQ0FBVjs7QUFFQSxZQUFLNkwsRUFBTCxHQUFVaFUsR0FBR0UsRUFBSCxDQUFNVyxDQUFOLENBQVFtVCxFQUFsQjtBQUNBLFlBQUtDLEVBQUwsR0FBVWpVLEdBQUdFLEVBQUgsQ0FBTVcsQ0FBTixDQUFRb1QsRUFBbEI7QUFDQTNKLFdBQUksSUFBSixFQUFTbkMsQ0FBVDtBQUVEOzs7aUNBRVkrRixDLEVBQUc7O0FBRWQ7QUFDQSxXQUFJL0YsSUFBSStGLEVBQUVzSCxhQUFGLENBQWdCQyxjQUFoQixDQUErQixDQUEvQixFQUFrQ0UsS0FBMUM7QUFDQSxZQUFLOEssRUFBTCxHQUFVdFksQ0FBVjtBQUVEOzs7Z0NBRVcrRixDLEVBQUc7QUFBQTs7QUFFYixXQUFJLEtBQUs2RCxNQUFULEVBQWlCOztBQUVqQixXQUFJNUosSUFBSStGLEVBQUVzSCxhQUFGLENBQWdCQyxjQUFoQixDQUErQixDQUEvQixFQUFrQ0UsS0FBMUM7QUFDQSxZQUFLK0ssRUFBTCxHQUFVdlksQ0FBVjs7QUFFQSxXQUFJNlYsTUFBTSxLQUFLd0MsRUFBTCxHQUFVLEtBQUtFLEVBQXpCO0FBQ0EsV0FBSUMsU0FBU3RhLEtBQUt1YSxHQUFMLENBQVM1QyxHQUFULENBQWI7O0FBRUE7QUFDQSxXQUFJLEtBQUtpQyxNQUFMLEdBQWNVLE1BQWxCLEVBQTBCOztBQUV4QjtBQUNBLGNBQUtyUCxPQUFMLEdBQWUsS0FBS29PLFFBQUwsQ0FBYzFmLEdBQUdFLEVBQUgsQ0FBTTJnQixJQUFOLENBQVc3RyxFQUF6QixDQUFmOztBQUVBLGFBQUlnRSxNQUFNLENBQVYsRUFBYTs7QUFFWCxlQUFJblEsSUFBSXRNLEVBQUUsVUFBRixFQUFjdU0sTUFBZCxLQUF1QjlOLEdBQUdFLEVBQUgsQ0FBTWdCLE1BQU4sQ0FBYTRmLElBQWIsQ0FBa0J4TyxLQUFsQixDQUF3QnlPLElBQXZEO0FBQ0F6VyxlQUFJLEtBQUsySixFQUFULEVBQVlwRyxJQUFFLEVBQWQsRUFBaUIsS0FBS29HLEVBQUwsR0FBVXBHLElBQUUsRUFBN0I7O0FBRUEsZUFBSSxLQUFLeUQsT0FBTCxLQUFlLENBQWYsSUFBb0IsS0FBSzJDLEVBQUwsR0FBVXBHLElBQUUsRUFBcEMsRUFBd0M7QUFDeEM7QUFDQSxlQUFJLEtBQUt5RCxPQUFMLElBQWMsQ0FBbEIsRUFBcUI7O0FBRXJCLGdCQUFLMFAsY0FBTCxDQUFvQixNQUFwQjs7QUFFQTtBQUNBLGVBQUlDLFdBQVc1VCxPQUFPN0osSUFBUCxDQUFZLEtBQUtrYyxRQUFqQixFQUEyQndCLE1BQTNCLENBQW1DLFVBQUNsZCxHQUFELEVBQVM7QUFBRSxvQkFBTyxNQUFLMGIsUUFBTCxDQUFjMWIsR0FBZCxNQUF1QixNQUFLc04sT0FBbkM7QUFBNEMsWUFBMUYsRUFBNEYsQ0FBNUYsQ0FBZjtBQUNBL1AsYUFBRSxhQUFXMGYsUUFBYixFQUF1QmpULE9BQXZCLENBQStCLE9BQS9CO0FBRUQsVUFmRCxNQWVPOztBQUVMMUQsZUFBSSxLQUFLMEosRUFBVCxFQUFZLEtBQUtBLEVBQUwsS0FBWSxDQUF4Qjs7QUFFQSxlQUFJLEtBQUtBLEVBQUwsS0FBWSxDQUFoQixFQUFtQjs7QUFFbkI7QUFDQSxnQkFBS2dOLGNBQUwsQ0FBb0IsTUFBcEI7O0FBRUEsZUFBSUMsV0FBVzVULE9BQU83SixJQUFQLENBQVksS0FBS2tjLFFBQWpCLEVBQTJCd0IsTUFBM0IsQ0FBbUMsVUFBQ2xkLEdBQUQsRUFBUztBQUFFLG9CQUFPLE1BQUswYixRQUFMLENBQWMxYixHQUFkLE1BQXVCLE1BQUtzTixPQUFuQztBQUE0QyxZQUExRixFQUE0RixDQUE1RixDQUFmO0FBQ0EvUCxhQUFFLGFBQVcwZixRQUFiLEVBQXVCalQsT0FBdkIsQ0FBK0IsT0FBL0I7QUFFRDtBQUdGOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFlBQUttVCxVQUFMLEdBQWtCLElBQWxCOztBQUVBO0FBQ0EsWUFBS1osWUFBTDtBQUVEOzs7b0NBRWNhLEcsRUFBSzs7QUFFbEIsWUFBS3pCLEdBQUwsR0FBVyxLQUFLck8sT0FBaEI7O0FBRUEsV0FBSThQLE9BQUssTUFBVCxFQUFpQjs7QUFFZixjQUFLOVAsT0FBTDtBQUNBLGFBQUksS0FBS0EsT0FBTCxHQUFhLEtBQUtyTixHQUFMLEdBQVMsQ0FBMUIsRUFBNkIsS0FBS3FOLE9BQUwsR0FBYSxLQUFLck4sR0FBTCxHQUFTLENBQXRCO0FBQzdCLGNBQUsyYixJQUFMLEdBQVksS0FBS3RPLE9BQUwsR0FBYSxDQUF6QjtBQUNBLGNBQUt1TyxJQUFMLEdBQVksS0FBS3ZPLE9BQUwsR0FBYSxDQUF6QjtBQUVELFFBUEQsTUFPTzs7QUFFTCxjQUFLQSxPQUFMO0FBQ0EsYUFBSSxLQUFLQSxPQUFMLEdBQWEsQ0FBakIsRUFBb0IsS0FBS0EsT0FBTCxHQUFhLENBQWI7QUFDcEIsY0FBS3NPLElBQUwsR0FBWSxLQUFLdE8sT0FBTCxHQUFhLENBQXpCO0FBQ0EsY0FBS3VPLElBQUwsR0FBWSxLQUFLdk8sT0FBTCxHQUFhLENBQXpCO0FBRUQ7QUFFRjs7O2lDQUVVO0FBQUE7O0FBRVQsV0FBSXJELE9BQU8sSUFBWDs7QUFFQSxZQUFLdVIsVUFBTCxDQUFnQmxkLEVBQWhCLENBQW1CLDRCQUFuQixFQUFpRCxVQUFDNEwsQ0FBRCxFQUFLO0FBQUMsZ0JBQUttVCxZQUFMLENBQWtCblQsQ0FBbEI7QUFBc0IsUUFBN0U7QUFDQTtBQUNBLFlBQUt1UixRQUFMLENBQWNuZCxFQUFkLENBQWlCLDBCQUFqQixFQUE2QyxVQUFDNEwsQ0FBRCxFQUFLO0FBQUMsZ0JBQUtvVCxVQUFMLENBQWdCcFQsQ0FBaEI7QUFBb0IsUUFBdkU7QUFFRDs7O29DQUVjOztBQUViLFdBQUlELE9BQU8sSUFBWDs7QUFFQSxZQUFLdVIsVUFBTCxDQUFnQnBSLEdBQWhCLENBQW9CLDRCQUFwQjtBQUNBO0FBQ0EsWUFBS3FSLFFBQUwsQ0FBY3JSLEdBQWQsQ0FBa0IsMEJBQWxCO0FBRUQ7Ozs7OzttQkE3S2tCbVIsZTs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7S0FFcUJnQyxLO0FBRW5CLG9CQUFhO0FBQUE7O0FBRVgsVUFBSy9ULE9BQUwsR0FBZWpNLEVBQUUsUUFBRixDQUFmO0FBQ0EsVUFBS21jLElBQUwsR0FBWSxLQUFLbFEsT0FBTCxDQUFhbVEsSUFBYixDQUFrQixNQUFsQixDQUFaO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLEtBQUtwUSxPQUFMLENBQWFtUSxJQUFiLENBQWtCLE1BQWxCLENBQVo7QUFDQSxVQUFLRSxJQUFMLEdBQVksS0FBS3JRLE9BQUwsQ0FBYW1RLElBQWIsQ0FBa0IsTUFBbEIsQ0FBWjtBQUNBLFVBQUtHLElBQUwsR0FBWSxLQUFLdFEsT0FBTCxDQUFhbVEsSUFBYixDQUFrQixNQUFsQixDQUFaOztBQUVBLFVBQUtJLE9BQUwsR0FBZ0IvZCxHQUFHRSxFQUFILENBQU1VLENBQU4sQ0FBUTRTLEVBQVIsQ0FBVzNGLENBQVgsR0FBZSxHQUFoQixHQUFzQixJQUF0QixHQUE0QixLQUEzQzs7QUFFQSxVQUFLNkQsS0FBTDtBQUNBLFNBQUkxUixHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUWdGLElBQVosRUFBa0IsS0FBS2xGLFNBQUw7QUFFbkI7Ozs7NkJBRU8sQ0FHUDs7OzhCQUVROztBQUVQUCxVQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUWliLElBQVI7O0FBRUFwUixXQUFJdEssR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVF3TCxJQUFaLEVBQWlCak0sR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVEwTCxNQUF6QixFQUFnQ25NLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRNEwsTUFBeEM7O0FBRUEsV0FBSXdCLElBQUk3TixHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUThYLElBQVIsQ0FBYXZZLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRd0wsSUFBckIsRUFBMkJ4SCxLQUEzQixDQUFpQyxFQUFqQyxDQUFSO0FBQ0EsV0FBSTNELElBQUlkLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFROFgsSUFBUixDQUFhdlksR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVEwTCxNQUFyQixFQUE2QjFILEtBQTdCLENBQW1DLEVBQW5DLENBQVI7QUFDQSxXQUFJNUQsSUFBSWIsR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVE4WCxJQUFSLENBQWF2WSxHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUTRMLE1BQXJCLEVBQTZCNUgsS0FBN0IsQ0FBbUMsRUFBbkMsQ0FBUjs7QUFFQSxZQUFLaVosSUFBTCxDQUFVeEwsSUFBVixDQUFlckUsRUFBRSxDQUFGLENBQWY7QUFDQSxZQUFLK1AsSUFBTCxDQUFVMUwsSUFBVixDQUFlckUsRUFBRSxDQUFGLENBQWY7QUFDQSxZQUFLZ1EsSUFBTCxDQUFVM0wsSUFBVixDQUFlcFIsRUFBRSxDQUFGLENBQWY7QUFDQSxZQUFLZ2QsSUFBTCxDQUFVNUwsSUFBVixDQUFlcFIsRUFBRSxDQUFGLENBQWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFRDs7OzJCQUVLLENBR0w7OztnQ0FFVTs7QUFFVDtBQUNBLFdBQUlkLEdBQUdFLEVBQUgsQ0FBTVUsQ0FBTixDQUFRNFMsRUFBUixDQUFXM0YsQ0FBWCxJQUFnQixHQUFoQixJQUF1QixLQUFLa1EsT0FBaEMsRUFBeUM7O0FBRXZDLGNBQUtBLE9BQUwsR0FBZSxLQUFmOztBQUVBL2QsWUFBR0UsRUFBSCxDQUFNUyxFQUFOLENBQVNvUSxHQUFULENBQWEsTUFBYixFQUFxQixLQUFLVSxNQUFMLENBQVlqUCxJQUFaLENBQWlCLElBQWpCLENBQXJCOztBQUVBO0FBQ0EsY0FBS2dMLE9BQUwsQ0FBYWdVLElBQWI7O0FBRUE7QUFDQSxhQUFJdkQsS0FBSyxJQUFJQyxXQUFKLENBQWdCLEVBQUNDLFFBQVEsQ0FBQyxDQUFWLEVBQWhCLENBQVQ7O0FBRUFGLFlBQ0dHLEdBREgsQ0FDTyxLQUFLNVEsT0FBTCxDQUFhbVEsSUFBYixDQUFrQixRQUFsQixDQURQLEVBQ29DLEVBQUNwTCxTQUFTLENBQVYsRUFEcEMsRUFFR0YsRUFGSCxDQUVNLEtBQUs3RSxPQUFMLENBQWFtUSxJQUFiLENBQWtCLFFBQWxCLENBRk4sRUFFbUMsR0FGbkMsRUFFd0MsRUFBQ3BMLFNBQVMsQ0FBVixFQUFZQyxNQUFNNkwsT0FBTzNMLFNBQXpCLEVBRnhDLEVBR0dMLEVBSEgsQ0FHTSxLQUFLN0UsT0FBTCxDQUFhbVEsSUFBYixDQUFrQixRQUFsQixDQUhOLEVBR21DLEdBSG5DLEVBR3dDLEVBQUNwTCxTQUFTLENBQVYsRUFBWUMsTUFBTTZMLE9BQU8zTCxTQUF6QixFQUh4QztBQUtEOztBQUVEO0FBQ0EsV0FBSTFTLEdBQUdFLEVBQUgsQ0FBTVUsQ0FBTixDQUFRNFMsRUFBUixDQUFXM0YsQ0FBWCxHQUFlLEdBQWYsSUFBc0IsQ0FBQyxLQUFLa1EsT0FBaEMsRUFBeUM7O0FBRXZDLGNBQUtBLE9BQUwsR0FBZSxJQUFmOztBQUVBL2QsWUFBR0UsRUFBSCxDQUFNUyxFQUFOLENBQVM2USxNQUFULENBQWdCLE1BQWhCOztBQUVBWSxrQkFBU3FQLFlBQVQsQ0FBc0IsS0FBS2pVLE9BQUwsQ0FBYW1RLElBQWIsQ0FBa0IsUUFBbEIsQ0FBdEI7O0FBRUE7QUFDQSxjQUFLblEsT0FBTCxDQUFha1UsSUFBYjtBQUVEO0FBRUY7OztpQ0FHVzs7QUFFVjFoQixVQUFHRSxFQUFILENBQU1VLENBQU4sQ0FBUW1RLEdBQVIsQ0FBWSxPQUFaLEVBQW9CLEtBQUs0QyxRQUFMLENBQWNuUixJQUFkLENBQW1CLElBQW5CLENBQXBCO0FBR0Q7Ozs7OzttQkE3RmtCK2UsSzs7Ozs7Ozs7Ozs7O3NqQkNWckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7S0FFcUJJLEs7QUFFbkIsa0JBQVl6ZCxLQUFaLEVBQWtCO0FBQUE7O0FBRWhCLFVBQUswZCxHQUFMLEdBQVcsQ0FBQyxDQUFaO0FBQ0EsVUFBS0MsSUFBTCxHQUFZdGdCLEVBQUUsNEJBQUYsQ0FBWjs7QUFFQSxVQUFLdWdCLFNBQUwsR0FBaUJ2Z0IsRUFBRSxhQUFGLENBQWpCOztBQUVBLFVBQUt3Z0IsS0FBTCxHQUFheGdCLEVBQUUsY0FBRixDQUFiO0FBQ0EsVUFBS3lnQixLQUFMLEdBQWF6Z0IsRUFBRSxjQUFGLENBQWI7O0FBRUEsVUFBS21RLEtBQUw7QUFDQSxVQUFLblIsU0FBTDtBQUVEOzs7OzZCQUVPOztBQUVOLHFDQUFvQmdCLEVBQUUsY0FBRixDQUFwQjtBQUVEOzs7MkJBRUs7O0FBRUosWUFBSzBnQixTQUFMO0FBQ0EsWUFBS0MsY0FBTDtBQUNBLFlBQUtDLFVBQUw7QUFFRDs7QUFFRDs7Ozs4QkFDUztBQUFBOztBQUVQLFdBQUluaUIsR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVE4RSxPQUFaLEVBQXFCOztBQUVyQjZNLGdCQUFTQyxFQUFULENBQVksS0FBS3dQLElBQWpCLEVBQXVCLEdBQXZCLEVBQTRCLEVBQUMvTCxLQUFLLENBQUMsRUFBUCxFQUFXdkQsU0FBUyxDQUFwQjtBQUMxQkMsZUFBTTRQLE9BQU9DLE9BRGE7QUFFMUJsUSxxQkFBWSxzQkFBSTtBQUNkQyxvQkFBU2dNLEdBQVQsQ0FBYSxNQUFLeUQsSUFBbEIsRUFBd0IsRUFBQy9MLEtBQUssRUFBTixFQUFVdkQsU0FBUyxDQUFuQixFQUF4QjtBQUNEO0FBSnlCLFFBQTVCO0FBT0Q7O0FBRUQ7Ozs7NkJBQ1E7O0FBRU4sV0FBSXZTLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFROEUsT0FBWixFQUFxQjs7QUFFckIsWUFBSytjLFNBQUw7QUFFRDs7O2lDQUVXOztBQUVWLFdBQUl0SSxLQUFLaGEsR0FBR0UsRUFBSCxDQUFNMmdCLElBQU4sQ0FBVzdHLEVBQXBCOztBQUVBLGVBQVFBLEVBQVI7O0FBRUUsY0FBSyxLQUFMOztBQUVFLGdCQUFLNEgsR0FBTCxHQUFXLENBQVg7QUFDQSxnQkFBS0MsSUFBTCxDQUFVM1AsSUFBVixDQUFlLEtBQUswUCxHQUFwQjtBQUNBLGdCQUFLQyxJQUFMLENBQVVMLElBQVY7O0FBRUE7O0FBRUYsY0FBSyxPQUFMOztBQUVFLGdCQUFLSSxHQUFMLEdBQVcsQ0FBWDtBQUNBLGdCQUFLQyxJQUFMLENBQVUzUCxJQUFWLENBQWUsS0FBSzBQLEdBQXBCO0FBQ0EsZ0JBQUtDLElBQUwsQ0FBVUwsSUFBVjs7QUFFQTs7QUFFRixjQUFLLFdBQUw7O0FBRUUsZ0JBQUtJLEdBQUwsR0FBVyxDQUFYO0FBQ0EsZ0JBQUtDLElBQUwsQ0FBVTNQLElBQVYsQ0FBZSxLQUFLMFAsR0FBcEI7QUFDQSxnQkFBS0MsSUFBTCxDQUFVTCxJQUFWOztBQUVBOztBQUVGLGNBQUssa0JBQUw7O0FBRUUsZ0JBQUtLLElBQUwsQ0FBVUgsSUFBVjs7QUFFQTs7QUFFRixjQUFLLFNBQUw7O0FBRUUsZ0JBQUtFLEdBQUwsR0FBVyxDQUFYO0FBQ0EsZ0JBQUtDLElBQUwsQ0FBVTNQLElBQVYsQ0FBZSxLQUFLMFAsR0FBcEI7QUFDQSxnQkFBS0MsSUFBTCxDQUFVTCxJQUFWOztBQUVBOztBQXRDSjs7QUEwQ0FwUCxnQkFBU0MsRUFBVCxDQUFZLEtBQUt3UCxJQUFqQixFQUF1QixHQUF2QixFQUE0QixFQUFDL0wsS0FBSyxDQUFDLENBQVAsRUFBVXZELFNBQVMsQ0FBbkIsRUFBc0JDLE1BQU0rUCxLQUFLRixPQUFqQyxFQUE1QjtBQUVEOztBQUVEOzs7O21DQUNjOztBQUVaalEsZ0JBQVNDLEVBQVQsQ0FBWSxLQUFLeVAsU0FBakIsRUFBNEIsR0FBNUIsRUFBaUMsRUFBQzVaLEdBQUcsR0FBSixFQUFTc2EsV0FBVyxDQUFDLEVBQXJCLEVBQXlCalEsU0FBUyxDQUFsQyxFQUFxQ0MsTUFBTUMsT0FBTzRQLE9BQWxELEVBQWpDO0FBRUQ7O0FBRUQ7Ozs7a0NBQ2E7O0FBRVgsWUFBS0gsY0FBTDtBQUVEOzs7c0NBRWdCOztBQUVmLFdBQUlsSSxLQUFLaGEsR0FBR0UsRUFBSCxDQUFNMmdCLElBQU4sQ0FBVzdHLEVBQXBCOztBQUVBLGVBQVFBLEVBQVI7O0FBRUUsY0FBSyxLQUFMOztBQUVFLGdCQUFLOEgsU0FBTCxDQUFlNVAsSUFBZixDQUFvQixFQUFwQjs7QUFFQTs7QUFFRixjQUFLLE9BQUw7O0FBRUUsZ0JBQUs0UCxTQUFMLENBQWU1UCxJQUFmLENBQW9CLE9BQXBCOztBQUdBOztBQUVGLGNBQUssV0FBTDs7QUFFRSxnQkFBSzRQLFNBQUwsQ0FBZ0I1UCxJQUFoQixDQUFxQixXQUFyQjs7QUFHQTs7QUFFRixjQUFLLGtCQUFMOztBQUVFLGdCQUFLNFAsU0FBTCxDQUFnQjVQLElBQWhCLENBQXFCLFdBQXJCOztBQUdBOztBQUVGLGNBQUssU0FBTDs7QUFFRSxnQkFBSzRQLFNBQUwsQ0FBZ0I1UCxJQUFoQixDQUFxQixpQkFBckI7O0FBR0E7O0FBbENKOztBQXNDQUUsZ0JBQVNDLEVBQVQsQ0FBWSxLQUFLeVAsU0FBakIsRUFBNEIsR0FBNUIsRUFBaUMsRUFBQzVaLEdBQUcsQ0FBSixFQUFPc2EsV0FBVyxDQUFDLEVBQW5CLEVBQXVCalEsU0FBUyxDQUFoQyxFQUFtQ0MsTUFBTUMsT0FBTzRQLE9BQWhELEVBQWpDO0FBRUQ7O0FBRUQ7Ozs7K0JBQ1U7O0FBRVJqUSxnQkFBU0MsRUFBVCxDQUFZLEtBQUswUCxLQUFqQixFQUF3QixHQUF4QixFQUE2QixFQUFDN1osR0FBRyxHQUFKLEVBQVNxSyxTQUFTLENBQWxCLEVBQXFCQyxNQUFNQyxPQUFPNFAsT0FBbEMsRUFBN0IsRUFGUSxDQUVrRTtBQUMxRWpRLGdCQUFTQyxFQUFULENBQVksS0FBSzJQLEtBQWpCLEVBQXdCLEdBQXhCLEVBQTZCLEVBQUM5WixHQUFHLEdBQUosRUFBU3FLLFNBQVMsQ0FBbEIsRUFBcUJDLE1BQU1DLE9BQU80UCxPQUFsQyxFQUE3QixFQUhRLENBR2tFOztBQUUxRWpRLGdCQUFTQyxFQUFULENBQVk5USxFQUFFLGdCQUFGLENBQVosRUFBaUMsR0FBakMsRUFBc0MsRUFBQ3NVLE1BQU0sQ0FBQyxFQUFSLEVBQVl0RCxTQUFTLENBQXJCLEVBQXVCQyxNQUFNQyxPQUFPNFAsT0FBcEMsRUFBdEMsRUFMUSxDQUs0RTtBQUVyRjs7QUFFRDs7Ozs4QkFDUzs7QUFFUCxZQUFLRixVQUFMO0FBRUQ7OztrQ0FFWTs7QUFFWCxXQUFJbkksS0FBS2hhLEdBQUdFLEVBQUgsQ0FBTTJnQixJQUFOLENBQVc3RyxFQUFwQjs7QUFFQSxlQUFRQSxFQUFSOztBQUVFLGNBQUssS0FBTDs7QUFFRSxnQkFBSytILEtBQUwsQ0FBV0wsSUFBWDtBQUNBdFAsb0JBQVNDLEVBQVQsQ0FBWTlRLEVBQUUsZ0JBQUYsQ0FBWixFQUFpQyxHQUFqQyxFQUFzQyxFQUFDc1UsTUFBTSxFQUFQLEVBQVd0RCxTQUFTLENBQXBCLEVBQXNCa1EsT0FBTyxHQUE3QixFQUFrQ2pRLE1BQU1DLE9BQU80UCxPQUEvQyxFQUF0Qzs7QUFFQWpRLG9CQUFTQyxFQUFULENBQVk5USxFQUFFLGlCQUFGLENBQVosRUFBa0MsR0FBbEMsRUFBdUMsRUFBRztBQUN4QzRHLGdCQUFHLENBQUMsRUFEaUM7QUFFckNvSyxzQkFBUSxDQUY2QjtBQUdyQ0MsbUJBQU1DLE9BQU80UCxPQUh3QjtBQUlyQ2xRLHlCQUFXLHNCQUFJO0FBQ2I1USxpQkFBRSxpQkFBRixFQUFxQmdJLEdBQXJCLENBQXlCLFNBQXpCLEVBQW9DLE1BQXBDO0FBQ0Q7QUFOb0MsWUFBdkM7O0FBU0E7O0FBRUYsY0FBSyxPQUFMOztBQUVFLGdCQUFLd1ksS0FBTCxDQUFXcEUsSUFBWCxDQUFnQixPQUFoQixFQUF5QnpMLElBQXpCLENBQThCLFdBQTlCO0FBQ0EsZ0JBQUs2UCxLQUFMLENBQVdXLE1BQVgsR0FBb0IzVSxJQUFwQixDQUF5QixFQUFDLFFBQU8sYUFBUixFQUF6QjtBQUNBLGdCQUFLZ1UsS0FBTCxDQUFXUCxJQUFYOztBQUVBcFAsb0JBQVNDLEVBQVQsQ0FBWTlRLEVBQUUsaUJBQUYsQ0FBWixFQUFrQyxHQUFsQyxFQUF1QyxFQUFHO0FBQ3hDNEcsZ0JBQUcsQ0FBQyxFQURpQztBQUVyQ29LLHNCQUFRLENBRjZCO0FBR3JDQyxtQkFBTUMsT0FBTzRQLE9BSHdCO0FBSXJDbFEseUJBQVcsc0JBQUk7QUFDYjVRLGlCQUFFLGlCQUFGLEVBQXFCZ0ksR0FBckIsQ0FBeUIsU0FBekIsRUFBb0MsTUFBcEM7QUFDRDtBQU5vQyxZQUF2Qzs7QUFTQTs7QUFFRixjQUFLLFdBQUw7O0FBRUUsZ0JBQUt3WSxLQUFMLENBQVdwRSxJQUFYLENBQWdCLE9BQWhCLEVBQXlCekwsSUFBekIsQ0FBOEIsaUJBQTlCO0FBQ0EsZ0JBQUs2UCxLQUFMLENBQVdXLE1BQVgsR0FBb0IzVSxJQUFwQixDQUF5QixFQUFDLFFBQU8sV0FBUixFQUF6QjtBQUNBLGdCQUFLZ1UsS0FBTCxDQUFXUCxJQUFYOztBQUVBcFAsb0JBQVNnTSxHQUFULENBQWE3YyxFQUFFLGlCQUFGLENBQWIsRUFBbUMsRUFBQyxXQUFXLE9BQVosRUFBbkMsRUFORixDQU00RDtBQUMxRDZRLG9CQUFTQyxFQUFULENBQVk5USxFQUFFLGlCQUFGLENBQVosRUFBa0MsR0FBbEMsRUFBc0MsRUFBQzRHLEdBQUcsQ0FBSixFQUFNb0ssU0FBUSxDQUFkLEVBQWdCQyxNQUFNQyxPQUFPNFAsT0FBN0IsRUFBdEMsRUFQRixDQU9nRjs7QUFFOUU7O0FBRUYsY0FBSyxrQkFBTDs7QUFFRSxnQkFBS04sS0FBTCxDQUFXcEUsSUFBWCxDQUFnQixPQUFoQixFQUF5QnpMLElBQXpCLENBQThCLFFBQTlCO0FBQ0EsZ0JBQUs2UCxLQUFMLENBQVdXLE1BQVgsR0FBb0IzVSxJQUFwQixDQUF5QixFQUFDLFFBQU8sZ0JBQVIsRUFBekI7QUFDQSxnQkFBS2dVLEtBQUwsQ0FBV1AsSUFBWDs7QUFFQXBQLG9CQUFTQyxFQUFULENBQVksS0FBSzJQLEtBQWpCLEVBQXdCLEdBQXhCLEVBQTZCLEVBQUM5WixHQUFHLENBQUosRUFBT3FLLFNBQVMsQ0FBaEIsRUFBbUJDLE1BQU1DLE9BQU80UCxPQUFoQyxFQUE3QixFQU5GLENBTTBFOztBQUV4RWpRLG9CQUFTZ00sR0FBVCxDQUFhN2MsRUFBRSxpQkFBRixDQUFiLEVBQW1DLEVBQUMsV0FBVyxPQUFaLEVBQW5DLEVBUkYsQ0FRNEQ7QUFDMUQ2USxvQkFBU0MsRUFBVCxDQUFZOVEsRUFBRSxpQkFBRixDQUFaLEVBQWtDLEdBQWxDLEVBQXNDLEVBQUM0RyxHQUFHLENBQUosRUFBTW9LLFNBQVEsQ0FBZCxFQUFnQkMsTUFBTUMsT0FBTzRQLE9BQTdCLEVBQXRDLEVBVEYsQ0FTZ0Y7O0FBRTlFOztBQUVBOztBQUVGLGNBQUssU0FBTDs7QUFFRSxnQkFBS04sS0FBTCxDQUFXcEUsSUFBWCxDQUFnQixPQUFoQixFQUF5QnpMLElBQXpCLENBQThCLFFBQTlCO0FBQ0EsZ0JBQUs2UCxLQUFMLENBQVdXLE1BQVgsR0FBb0IzVSxJQUFwQixDQUF5QixFQUFDLFFBQU8sZ0JBQVIsRUFBekI7QUFDQSxnQkFBS2dVLEtBQUwsQ0FBV1AsSUFBWDs7QUFFQXBQLG9CQUFTZ00sR0FBVCxDQUFhN2MsRUFBRSxpQkFBRixDQUFiLEVBQW1DLEVBQUMsV0FBVyxPQUFaLEVBQW5DLEVBTkYsQ0FNNEQ7QUFDMUQ2USxvQkFBU0MsRUFBVCxDQUFZOVEsRUFBRSxpQkFBRixDQUFaLEVBQWtDLEdBQWxDLEVBQXNDLEVBQUM0RyxHQUFHLENBQUosRUFBTW9LLFNBQVEsQ0FBZCxFQUFnQkMsTUFBTUMsT0FBTzRQLE9BQTdCLEVBQXRDLEVBUEYsQ0FPZ0Y7O0FBRTlFOztBQUVBOztBQXhFSjs7QUE0RUFqUSxnQkFBU0MsRUFBVCxDQUFZLEtBQUswUCxLQUFqQixFQUF3QixHQUF4QixFQUE2QixFQUFDN1osR0FBRyxDQUFKLEVBQU9xSyxTQUFTLENBQWhCLEVBQW1CQyxNQUFNQyxPQUFPNFAsT0FBaEMsRUFBN0I7QUFFRDs7O2lDQUVXLENBR1g7Ozs7OzttQkE1UWtCVixLOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQUVxQmdCLGU7QUFFbkIsNEJBQVluVixPQUFaLEVBQXFCO0FBQUE7O0FBRW5CLFVBQUtBLE9BQUwsR0FBZUEsT0FBZjs7QUFFQTtBQUNBLFVBQUt5USxFQUFMLEdBQVUsSUFBSUMsV0FBSixFQUFWOztBQUVBO0FBQ0EsU0FBSWxlLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRZ0YsSUFBWixFQUFrQixLQUFLbEYsU0FBTDtBQUVuQjs7Ozs2QkFFTyxDQUVQOzs7MkJBRUssQ0FFTDs7OzZCQUVRcWlCLEksRUFBTTs7QUFFYixXQUFJNWlCLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFROEUsT0FBWixFQUFxQjs7QUFFckIsV0FBSSxLQUFLc2QsSUFBVCxFQUFlLEtBQUtBLElBQUwsQ0FBVUMsSUFBVjtBQUNmLFlBQUtDLElBQUwsR0FBWSxJQUFJN0UsV0FBSixFQUFaOztBQUVBLFlBQUs2RSxJQUFMLENBQ0cxUSxFQURILENBQ005USxFQUFFcWhCLElBQUYsRUFBUWpGLElBQVIsQ0FBYSxNQUFiLENBRE4sRUFDNEIsR0FENUIsRUFDaUM7QUFDN0J6VixZQUFHLEVBRDBCO0FBRTdCc0ssZUFBTTRQLE9BQU9DO0FBRmdCLFFBRGpDLEVBS0doUSxFQUxILENBS005USxFQUFFcWhCLElBQUYsRUFBUWpGLElBQVIsQ0FBYSxNQUFiLENBTE4sRUFLNEIsR0FMNUIsRUFLaUM7QUFDN0IvUCxnQkFBTyxFQURzQjtBQUU3QjRFLGVBQU00UCxPQUFPQztBQUZnQixRQUxqQyxFQVFJLFFBUko7QUFVRDs7OzZCQUVRTyxJLEVBQU07O0FBRWIsV0FBSTVpQixHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUThFLE9BQVosRUFBcUI7O0FBRXJCLFdBQUksS0FBS3dkLElBQVQsRUFBZSxLQUFLQSxJQUFMLENBQVVELElBQVY7QUFDZixZQUFLRCxJQUFMLEdBQVksSUFBSTNFLFdBQUosRUFBWjs7QUFFQSxZQUFLMkUsSUFBTCxDQUNHeFEsRUFESCxDQUNNOVEsRUFBRXFoQixJQUFGLEVBQVFqRixJQUFSLENBQWEsTUFBYixDQUROLEVBQzRCLEdBRDVCLEVBQ2lDO0FBQzdCL1AsZ0JBQU8sRUFEc0I7QUFFN0I0RSxlQUFNNFAsT0FBT0M7QUFGZ0IsUUFEakMsRUFLR2hRLEVBTEgsQ0FLTTlRLEVBQUVxaEIsSUFBRixFQUFRakYsSUFBUixDQUFhLE1BQWIsQ0FMTixFQUs0QixHQUw1QixFQUtpQztBQUM3QnpWLFlBQUcsQ0FEMEI7QUFFN0JzSyxlQUFNNFAsT0FBT0M7QUFGZ0IsUUFMakMsRUFRSSxRQVJKO0FBVUQ7OztpQ0FFVzs7QUFFVixXQUFJcFUsT0FBTyxJQUFYOztBQUVBLFlBQUtULE9BQUwsQ0FBYUUsSUFBYixDQUFrQixVQUFTdVIsS0FBVCxFQUFnQkMsRUFBaEIsRUFBb0I7O0FBRXBDM2QsV0FBRSxJQUFGLEVBQVFlLEVBQVIsQ0FBVyxZQUFYLEVBQXlCLFVBQVM0TCxDQUFULEVBQVk7QUFBQ0QsZ0JBQUsrVSxPQUFMLENBQWF6VixJQUFiLENBQWtCVSxJQUFsQixFQUF1QixJQUF2QjtBQUE2QixVQUFuRTtBQUNBMU0sV0FBRSxJQUFGLEVBQVFlLEVBQVIsQ0FBVyxZQUFYLEVBQXlCLFVBQVM0TCxDQUFULEVBQVk7QUFBQ0QsZ0JBQUtnVixPQUFMLENBQWExVixJQUFiLENBQWtCVSxJQUFsQixFQUF1QixJQUF2QjtBQUE2QixVQUFuRTtBQUVELFFBTEQ7QUFPRDs7O29DQUVjOztBQUViLFdBQUlBLE9BQU8sSUFBWDs7QUFFQSxZQUFLVCxPQUFMLENBQWFFLElBQWIsQ0FBa0IsVUFBU3VSLEtBQVQsRUFBZ0JDLEVBQWhCLEVBQW9COztBQUVwQzNkLFdBQUUsSUFBRixFQUFRNk0sR0FBUixDQUFZLFlBQVo7QUFDQTdNLFdBQUUsSUFBRixFQUFRNk0sR0FBUixDQUFZLFlBQVo7QUFFRCxRQUxEO0FBT0Q7Ozs7OzttQkFwRmtCdVUsZTs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7Ozs7Ozs7S0FRcUJPLFU7QUFFbkIsdUJBQVkxVixPQUFaLEVBQXFCO0FBQUE7O0FBRW5CLFVBQUs2SSxFQUFMLEdBQVUsWUFBVSxDQUFFLENBQXRCO0FBQ0EsVUFBS2xFLFVBQUwsR0FBa0IsWUFBVSxDQUFFLENBQTlCOztBQUVBLFVBQUtnUixTQUFMLEdBQWlCLEtBQUtDLFVBQUwsQ0FBZ0I1Z0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBakI7O0FBRUEsVUFBS2pDLFNBQUw7QUFDQSxVQUFLbVIsS0FBTDtBQUVEOzs7OzZCQUVPOztBQUVOLFlBQUt5UixTQUFMO0FBRUQ7OzsrQkFFUztBQUFBOztBQUVSLFdBQUlsVixPQUFPLElBQVg7O0FBRUE7QUFDQW1FLGdCQUFTQyxFQUFULENBQVk5USxFQUFFLFdBQUYsQ0FBWixFQUE0QixHQUE1QixFQUFpQztBQUMvQmdULG9CQUFXLENBRG9CO0FBRS9CL0IsZUFBTUMsT0FBTzRQLE9BRmtCO0FBRy9CbFEscUJBQVcsc0JBQUk7QUFDYixpQkFBS0EsVUFBTDtBQUNEO0FBTDhCLFFBQWpDOztBQVFBLFlBQUtrRSxFQUFMOztBQUVBLGNBQU8sS0FBUDtBQUVEOzs7a0NBRVk7QUFDWDtBQUNEOzs7a0NBRVl1TSxJLEVBQU07O0FBRWpCO0FBQ0EsV0FBSVMsTUFBTSxDQUFWO0FBQ0EsV0FBSTloQixFQUFFcWhCLElBQUYsRUFBUXhLLElBQVIsQ0FBYSxNQUFiLENBQUosRUFBMEJpTCxNQUFNOWhCLEVBQUVxaEIsSUFBRixFQUFReEssSUFBUixDQUFhLE1BQWIsQ0FBTjs7QUFFMUIsV0FBSTVLLFVBQVVqTSxFQUFFQSxFQUFFcWhCLElBQUYsRUFBUTdVLElBQVIsQ0FBYSxNQUFiLENBQUYsQ0FBZDtBQUNBLFdBQUkxRyxNQUFNbUcsUUFBUTRHLE1BQVIsR0FBaUIwQixHQUEzQjtBQUNBek8sYUFBTUEsTUFBTWdjLEdBQVo7O0FBRUFqUixnQkFBU0MsRUFBVCxDQUFZOVEsRUFBRSxXQUFGLENBQVosRUFBNEIsR0FBNUIsRUFBaUMsRUFBQ2dULFdBQVdsTixHQUFaLEVBQWdCbUwsTUFBTStQLEtBQUtGLE9BQTNCLEVBQWpDOztBQUVBL1gsV0FBSSxJQUFKO0FBRUQ7OztvQ0FFY3NZLEksRUFBTTs7QUFFbkI7QUFDQSxXQUFJUyxNQUFNLENBQVY7QUFDQSxXQUFJOWhCLEVBQUVxaEIsSUFBRixFQUFReEssSUFBUixDQUFhLE1BQWIsQ0FBSixFQUEwQmlMLE1BQU05aEIsRUFBRXFoQixJQUFGLEVBQVF4SyxJQUFSLENBQWEsTUFBYixDQUFOOztBQUUxQixXQUFJNUssVUFBVWpNLEVBQUVBLEVBQUVxaEIsSUFBRixFQUFReEssSUFBUixDQUFhLE1BQWIsQ0FBRixDQUFkO0FBQ0EsV0FBSS9RLE1BQU1tRyxRQUFRNEcsTUFBUixHQUFpQjBCLEdBQTNCO0FBQ0F6TyxhQUFNQSxNQUFNZ2MsR0FBWjs7QUFFQWpSLGdCQUFTQyxFQUFULENBQVk5USxFQUFFLFdBQUYsQ0FBWixFQUE0QixHQUE1QixFQUFpQyxFQUFDZ1QsV0FBV2xOLEdBQVosRUFBZ0JtTCxNQUFNK1AsS0FBS0YsT0FBM0IsRUFBakM7QUFFRDs7O2lDQUVZOztBQUVYLFdBQUlwVSxPQUFPLElBQVg7O0FBRUExTSxTQUFFLFFBQUYsRUFBWWUsRUFBWixDQUFlLGtCQUFmLEVBQW1DLFlBQVU7O0FBRTNDMkwsY0FBS3FWLE9BQUwsQ0FBYS9WLElBQWIsQ0FBa0JVLElBQWxCOztBQUVBLGdCQUFPLEtBQVA7QUFFRCxRQU5EOztBQVNBM0QsV0FBSSxLQUFKOztBQUVBO0FBQ0EvSSxTQUFFLFlBQUYsRUFBZ0IrZCxHQUFoQixDQUFvQixZQUFwQixFQUFrQ2hkLEVBQWxDLENBQXFDLE9BQXJDLEVBQTZDLFlBQVU7QUFDckRnSSxhQUFJLEdBQUo7QUFDQTJELGNBQUtzVixZQUFMLENBQWtCaFcsSUFBbEIsQ0FBdUJVLElBQXZCLEVBQTRCLElBQTVCO0FBQ0EsZ0JBQU8sS0FBUDtBQUNELFFBSkQ7O0FBTUE7QUFDQTFNLFNBQUUsNEJBQUYsRUFBZ0MrZCxHQUFoQyxDQUFvQyxZQUFwQyxFQUFrRGhkLEVBQWxELENBQXFELE9BQXJELEVBQTZELFlBQVU7QUFBQzJMLGNBQUt1VixjQUFMLENBQW9CalcsSUFBcEIsQ0FBeUJVLElBQXpCLEVBQThCLElBQTlCLEVBQW9DLE9BQU8sS0FBUDtBQUFhLFFBQXpIO0FBQ0E7QUFDQTtBQUVEOzs7Ozs7bUJBcEdrQmlWLFU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FFcUJPLEk7QUFFbkIsbUJBQWM7QUFBQTs7QUFFWixVQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsQ0FDZixTQURlLEVBRWYsV0FGZSxFQUdmLE9BSGUsQ0FBakI7O0FBTUEsVUFBS2pTLEtBQUw7QUFDQSxVQUFLblIsU0FBTDs7QUFFQSxVQUFLcWpCLFVBQUw7QUFFRDs7Ozs2QkFFTzs7QUFFTnRaLFdBQUl0SyxHQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUXlNLElBQVIsRUFBSjtBQUVEOzs7OEJBRVE7O0FBRVBsTixVQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUWliLElBQVI7O0FBRUFwUixXQUFJdEssR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVF3TCxJQUFaLEVBQWlCak0sR0FBR0UsRUFBSCxDQUFNTyxDQUFOLENBQVEwTCxNQUF6QixFQUFnQ25NLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRNEwsTUFBeEM7QUFFRDs7OzhCQUVRLENBR1I7O0FBRUQ7Ozs7a0NBQ2E7O0FBRVhyTSxVQUFHRSxFQUFILENBQU1PLENBQU4sQ0FBUWliLElBQVI7QUFDQSxXQUFJelAsT0FBT2pNLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRd0wsSUFBbkI7QUFDQSxXQUFJK1IsTUFBTSxFQUFWLENBSlcsQ0FJRzs7QUFFZC9SLGNBQU9BLE9BQU8rUixHQUFkO0FBQ0EsV0FBSS9SLE9BQU8sQ0FBWCxFQUFjQSxPQUFPLEtBQUtBLElBQVo7O0FBRWQsY0FBT0EsSUFBUDtBQUVEOztBQUVEOzs7O2tDQUNhOztBQUVYLFdBQUk0QixJQUFJLEtBQUtnVyxVQUFMLEVBQVI7O0FBRUE7QUFDQSxXQUFJLEtBQUtoVyxDQUFMLElBQVVBLEtBQUssRUFBbkIsRUFBdUI7O0FBRXJCLGNBQUs2VixPQUFMLEdBQWUsS0FBS0MsU0FBTCxDQUFlLENBQWYsQ0FBZjs7QUFFRjtBQUNDLFFBTEQsTUFLTyxJQUFJLEtBQUs5VixDQUFMLElBQVVBLEtBQUssRUFBbkIsRUFBdUI7O0FBRTVCLGNBQUs2VixPQUFMLEdBQWUsS0FBS0MsU0FBTCxDQUFlLENBQWYsQ0FBZjs7QUFFRjtBQUNDLFFBTE0sTUFLQSxJQUFLLEtBQUs5VixDQUFMLElBQVVBLEtBQUssRUFBaEIsSUFBd0IsS0FBS0EsQ0FBTCxJQUFVQSxLQUFJLENBQTFDLEVBQThDOztBQUVuRCxjQUFLNlYsT0FBTCxHQUFlLEtBQUtDLFNBQUwsQ0FBZSxDQUFmLENBQWY7QUFFRDs7QUFFRDtBQUVEOzs7aUNBRVc7O0FBRVY7O0FBRUQ7Ozs7OzttQkFqRmtCRixJOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBRXFCSyxnQjtBQUVuQiw2QkFBWXRXLE9BQVosRUFBcUI7QUFBQTs7QUFFbkIsVUFBS2tTLFFBQUwsR0FBZ0I7QUFDZCxjQUFPLENBRE87QUFFZCxnQkFBUyxDQUZLO0FBR2Qsb0JBQWEsQ0FIQztBQUlkLGtCQUFXO0FBSkcsTUFBaEI7O0FBT0E7QUFDQSxVQUFLcE8sT0FBTCxHQUFlLENBQWY7QUFDQSxVQUFLcU8sR0FBTCxHQUFXLElBQVg7QUFDQSxVQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFVBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsVUFBSzViLEdBQUwsR0FBVyxDQUFYOztBQUVBLFVBQUs4ZixRQUFMLEdBQWdCLElBQWhCOztBQUdBLFVBQUtyUyxLQUFMO0FBQ0EsVUFBS25SLFNBQUw7QUFFRDs7Ozs2QkFFTyxDQUdQOzs7K0JBRVE7QUFBQTs7QUFFUCxXQUFJLENBQUNQLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFRb0YsSUFBYixFQUFtQixJQUFJZixNQUFNLEVBQVYsQ0FBbkIsS0FDSyxJQUFJQSxNQUFNLENBQVY7O0FBRUw7O0FBRUE7QUFDQSxXQUFJOUUsR0FBR0UsRUFBSCxDQUFNMmdCLElBQU4sQ0FBV21ELFVBQWYsRUFBMkI7O0FBRTNCO0FBQ0EsWUFBSzFTLE9BQUwsR0FBZSxLQUFLb08sUUFBTCxDQUFjMWYsR0FBR0UsRUFBSCxDQUFNMmdCLElBQU4sQ0FBVzdHLEVBQXpCLENBQWY7O0FBRUE7QUFDQSxXQUFJLEtBQUs3RixRQUFMLEdBQWdCclAsR0FBaEIsSUFBdUIsS0FBS3dNLE9BQUwsR0FBZSxDQUF0QyxJQUEyQyxLQUFLeVMsUUFBcEQsRUFBOEQ7O0FBRTVEO0FBQ0EsYUFBSS9qQixHQUFHRSxFQUFILENBQU0yZ0IsSUFBTixDQUFXN0csRUFBWCxJQUFlLFNBQW5CLEVBQThCOztBQUU5QixjQUFLK0osUUFBTCxHQUFnQixLQUFoQjs7QUFFQSxjQUFLL0MsY0FBTCxDQUFvQixNQUFwQjs7QUFFQSxhQUFJQyxXQUFXNVQsT0FBTzdKLElBQVAsQ0FBWSxLQUFLa2MsUUFBakIsRUFBMkJ3QixNQUEzQixDQUFtQyxVQUFDbGQsR0FBRCxFQUFTO0FBQUUsa0JBQU8sTUFBSzBiLFFBQUwsQ0FBYzFiLEdBQWQsTUFBdUIsTUFBS3NOLE9BQW5DO0FBQTRDLFVBQTFGLEVBQTRGLENBQTVGLENBQWY7O0FBRUEvUCxXQUFFLGFBQVcwZixRQUFiLEVBQXVCalQsT0FBdkIsQ0FBK0IsT0FBL0I7O0FBR0Y7QUFDQyxRQWZELE1BZU8sSUFBRyxLQUFLbUcsUUFBTCxHQUFnQixDQUFDclAsR0FBakIsSUFBd0IsS0FBS3dNLE9BQUwsR0FBZSxLQUFLck4sR0FBTCxHQUFTLENBQWhELElBQXFELEtBQUs4ZixRQUE3RCxFQUF1RTs7QUFFNUUsY0FBS0EsUUFBTCxHQUFnQixLQUFoQjs7QUFFQSxjQUFLL0MsY0FBTCxDQUFvQixNQUFwQjs7QUFFQSxhQUFJQyxXQUFXNVQsT0FBTzdKLElBQVAsQ0FBWSxLQUFLa2MsUUFBakIsRUFBMkJ3QixNQUEzQixDQUFtQyxVQUFDbGQsR0FBRCxFQUFTO0FBQUUsa0JBQU8sTUFBSzBiLFFBQUwsQ0FBYzFiLEdBQWQsTUFBdUIsTUFBS3NOLE9BQW5DO0FBQTRDLFVBQTFGLEVBQTRGLENBQTVGLENBQWY7O0FBRUEvUCxXQUFFLGFBQVcwZixRQUFiLEVBQXVCalQsT0FBdkIsQ0FBK0IsT0FBL0I7QUFFRDtBQUdGOzs7b0NBRWNvVCxHLEVBQUs7O0FBRWxCLFlBQUt6QixHQUFMLEdBQVcsS0FBS3JPLE9BQWhCOztBQUVBLFdBQUk4UCxPQUFLLE1BQVQsRUFBaUI7O0FBRWYsY0FBSzlQLE9BQUw7QUFDQSxhQUFJLEtBQUtBLE9BQUwsR0FBYSxLQUFLck4sR0FBTCxHQUFTLENBQTFCLEVBQTZCLEtBQUtxTixPQUFMLEdBQWEsS0FBS3JOLEdBQUwsR0FBUyxDQUF0QjtBQUM3QixjQUFLMmIsSUFBTCxHQUFZLEtBQUt0TyxPQUFMLEdBQWEsQ0FBekI7QUFDQSxjQUFLdU8sSUFBTCxHQUFZLEtBQUt2TyxPQUFMLEdBQWEsQ0FBekI7QUFFRCxRQVBELE1BT087O0FBRUwsY0FBS0EsT0FBTDtBQUNBLGFBQUksS0FBS0EsT0FBTCxHQUFhLENBQWpCLEVBQW9CLEtBQUtBLE9BQUwsR0FBYSxDQUFiO0FBQ3BCLGNBQUtzTyxJQUFMLEdBQVksS0FBS3RPLE9BQUwsR0FBYSxDQUF6QjtBQUNBLGNBQUt1TyxJQUFMLEdBQVksS0FBS3ZPLE9BQUwsR0FBYSxDQUF6QjtBQUVEO0FBRUY7OztrQ0FFWXBELEMsRUFBR3NHLEssRUFBT0MsTSxFQUFRQyxNLEVBQVE7O0FBRXJDO0FBQ0EsV0FBSTFVLEdBQUdFLEVBQUgsQ0FBTStqQixJQUFOLENBQVdDLE1BQWYsRUFBdUI7QUFDdkI7QUFDQSxXQUFJbGtCLEdBQUdFLEVBQUgsQ0FBTU8sQ0FBTixDQUFROEUsT0FBWixFQUFxQjs7QUFFckIsWUFBSzRPLFFBQUwsR0FBZ0JuVSxHQUFHRSxFQUFILENBQU1XLENBQU4sQ0FBUXNULFFBQXhCOztBQUVBLFlBQUtnUSxNQUFMO0FBRUQ7OztpQ0FFVzs7QUFHVm5rQixVQUFHRSxFQUFILENBQU1XLENBQU4sQ0FBUWtRLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxLQUFLZ0UsWUFBTCxDQUFrQnZTLElBQWxCLENBQXVCLElBQXZCLENBQWhDO0FBR0Q7Ozs7OzttQkFwSGtCc2hCLGdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBRXFCTSxPO0FBRW5CLHNCQUFjO0FBQUE7O0FBRVosVUFBSzdqQixTQUFMO0FBQ0EsVUFBSzhqQixLQUFMO0FBRUQ7Ozs7NkJBRU8sQ0FHUDs7OytCQUVTOztBQUVSO0FBQ0FqUyxnQkFBU0MsRUFBVCxDQUFZOVEsRUFBRSxXQUFGLENBQVosRUFBNEIsR0FBNUIsRUFBaUM7QUFDL0JnVCxvQkFBVyxDQURvQjtBQUUvQi9CLGVBQU1DLE9BQU80UCxPQUZrQjtBQUcvQmxRLHFCQUFZLHNCQUFJLENBR2Y7QUFOOEIsUUFBakM7QUFTRDs7O2lDQUVZOztBQUVYLFdBQUlsRSxPQUFPLElBQVg7O0FBRUExTSxTQUFFLFFBQUYsRUFBWWUsRUFBWixDQUFlLE9BQWYsRUFBdUIsS0FBS2doQixPQUFMLENBQWE5Z0IsSUFBYixDQUFrQixJQUFsQixDQUF2QjtBQUVEOzs7Ozs7bUJBbENrQjRoQixPOzs7Ozs7Ozs7Ozs7c2pCQ05yQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztLQUVxQkUsRztBQUVuQixnQkFBWUMsR0FBWixFQUFnQkMsR0FBaEIsRUFBb0JDLEtBQXBCLEVBQTBCQyxLQUExQixFQUFnQztBQUFBOztBQUU5QixVQUFLSCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7O0FBRUEsVUFBS0MsRUFBTCxHQUFVO0FBQ1JuWCxnQkFBUytXLEdBREQ7QUFFUkssWUFBS0MsbUJBQW1CdGpCLEVBQUUsT0FBRixFQUFXdWpCLElBQVgsRUFBbkIsQ0FGRztBQUdSQyxZQUFLRixtQkFBbUJ0akIsRUFBRSxRQUFGLEVBQVl3TSxJQUFaLENBQWlCLFNBQWpCLENBQW5CLENBSEcsRUFHOEM7QUFDdERsRCxZQUFLdkcsU0FBU3dHO0FBSk4sTUFBVjs7QUFPQSxVQUFLa2EsRUFBTCxHQUFVO0FBQ1J4WCxnQkFBU2dYLEdBREQ7QUFFUkksWUFBS0MsbUJBQW1CdGpCLEVBQUUsT0FBRixFQUFXdWpCLElBQVgsRUFBbkIsQ0FGRztBQUdSQyxZQUFLRixtQkFBbUJ0akIsRUFBRSxRQUFGLEVBQVl3TSxJQUFaLENBQWlCLFNBQWpCLENBQW5CLENBSEcsRUFHOEM7QUFDdERsRCxZQUFLdkcsU0FBU3dHLElBSk47QUFLUkcsYUFBTTtBQUxFLE1BQVY7O0FBUUEsVUFBS2dhLElBQUwsR0FBWTtBQUNWelgsZ0JBQVNpWCxLQURDO0FBRVZHLFlBQUtDLG1CQUFtQnRqQixFQUFFLE9BQUYsRUFBV3VqQixJQUFYLEVBQW5CLENBRks7QUFHVkMsWUFBS0YsbUJBQW1CdGpCLEVBQUUsUUFBRixFQUFZd00sSUFBWixDQUFpQixTQUFqQixDQUFuQixDQUhLLEVBRzRDO0FBQ3REbEQsWUFBS3ZHLFNBQVN3RztBQUpKLE1BQVo7O0FBT0EsVUFBS3ZLLFNBQUw7QUFFRDs7OztrQ0FFWTs7QUFFWCxXQUFJNEcsSUFBSW5ILEdBQUdFLEVBQUgsQ0FBTTJnQixJQUFOLENBQVc3RyxFQUFuQjtBQUNBLFdBQUk3UyxLQUFLLGtCQUFULEVBQTZCOztBQUUzQm1ELGFBQUkvSSxFQUFFLFVBQUYsRUFBYzZkLFFBQWQsQ0FBdUIsb0JBQXZCLENBQUo7QUFDQSxhQUFJN2QsRUFBRSxVQUFGLEVBQWM2ZCxRQUFkLENBQXVCLG9CQUF2QixDQUFKLEVBQWtEalksSUFBSSxtQkFBSixDQUFsRCxLQUNLLElBQUk1RixFQUFFLFVBQUYsRUFBYzZkLFFBQWQsQ0FBdUIsb0JBQXZCLENBQUosRUFBa0RqWSxJQUFJLG1CQUFKLENBQWxELEtBQ0EsSUFBSTVGLEVBQUUsVUFBRixFQUFjNmQsUUFBZCxDQUF1QixvQkFBdkIsQ0FBSixFQUFrRGpZLElBQUksbUJBQUo7QUFFeEQ7O0FBRUQ7QUFDQSxXQUFJK2QsSUFBSSxtQkFBUy9kLENBQVQsQ0FBUjs7QUFFQTVGLFNBQUUsT0FBRixFQUFXMlEsSUFBWDtBQUNBM1EsU0FBRSxVQUFGLEVBQWN3TSxJQUFkLENBQW1CLEVBQUMsV0FBV21YLEVBQUVDLFdBQWQsRUFBbkI7QUFDQTVqQixTQUFFLFVBQUYsRUFBY3dNLElBQWQsQ0FBbUIsRUFBQyxXQUFXbVgsRUFBRUUsT0FBZCxFQUFuQjs7QUFFQTdqQixTQUFFLFFBQUYsRUFBWXdNLElBQVosQ0FBaUIsRUFBQyxXQUFXbVgsRUFBRVAsRUFBRixDQUFLQyxHQUFqQixFQUFqQjtBQUNBcmpCLFNBQUUsUUFBRixFQUFZd00sSUFBWixDQUFpQixFQUFDLFdBQVdtWCxFQUFFUCxFQUFGLENBQUtJLEdBQWpCLEVBQWpCO0FBQ0F4akIsU0FBRSxRQUFGLEVBQVl3TSxJQUFaLENBQWlCLEVBQUMsV0FBV21YLEVBQUVQLEVBQUYsQ0FBS2pPLEdBQWpCLEVBQWpCO0FBQ0FuVixTQUFFLFFBQUYsRUFBWXdNLElBQVosQ0FBaUIsRUFBQyxXQUFXbVgsRUFBRVAsRUFBRixDQUFLOVosR0FBakIsRUFBakI7O0FBRUF0SixTQUFFLFFBQUYsRUFBWXdNLElBQVosQ0FBaUIsRUFBQyxXQUFXbVgsRUFBRUYsRUFBRixDQUFLSixHQUFqQixFQUFqQjtBQUNBcmpCLFNBQUUsUUFBRixFQUFZd00sSUFBWixDQUFpQixFQUFDLFdBQVdtWCxFQUFFRixFQUFGLENBQUtELEdBQWpCLEVBQWpCO0FBQ0F4akIsU0FBRSxRQUFGLEVBQVl3TSxJQUFaLENBQWlCLEVBQUMsV0FBV21YLEVBQUVGLEVBQUYsQ0FBS3RPLEdBQWpCLEVBQWpCO0FBQ0FuVixTQUFFLFFBQUYsRUFBWXdNLElBQVosQ0FBaUIsRUFBQyxXQUFXbVgsRUFBRUYsRUFBRixDQUFLbmEsR0FBakIsRUFBakI7QUFHRDs7OytCQUVTOztBQUVSLFlBQUs4WixFQUFMLEdBQVU7QUFDUm5YLGtCQUFTLEtBQUsrVyxHQUROO0FBRVJLLGNBQUtDLG1CQUFtQnRqQixFQUFFLE9BQUYsRUFBV3VqQixJQUFYLEVBQW5CLENBRkc7QUFHUkMsY0FBS0YsbUJBQW1CdGpCLEVBQUUsUUFBRixFQUFZd00sSUFBWixDQUFpQixTQUFqQixDQUFuQixDQUhHLEVBRzhDO0FBQ3REbEQsY0FBS3ZHLFNBQVN3RztBQUpOLFFBQVY7O0FBT0EsWUFBS2thLEVBQUwsR0FBVTtBQUNSeFgsa0JBQVMsS0FBS2dYLEdBRE47QUFFUkksY0FBS0MsbUJBQW1CdGpCLEVBQUUsT0FBRixFQUFXdWpCLElBQVgsRUFBbkIsQ0FGRztBQUdSQyxjQUFLRixtQkFBbUJ0akIsRUFBRSxRQUFGLEVBQVl3TSxJQUFaLENBQWlCLFNBQWpCLENBQW5CLENBSEcsRUFHOEM7QUFDdERsRCxjQUFLdkcsU0FBU3dHLElBSk47QUFLUkcsZUFBTTtBQUxFLFFBQVY7O0FBUUEsWUFBS2dhLElBQUwsR0FBWTtBQUNWelgsa0JBQVMsS0FBS2lYLEtBREo7QUFFVkcsY0FBS0MsbUJBQW1CdGpCLEVBQUUsT0FBRixFQUFXdWpCLElBQVgsRUFBbkIsQ0FGSztBQUdWQyxjQUFLRixtQkFBbUJ0akIsRUFBRSxRQUFGLEVBQVl3TSxJQUFaLENBQWlCLFNBQWpCLENBQW5CLENBSEssRUFHNEM7QUFDdERsRCxjQUFLdkcsU0FBU3dHO0FBSkosUUFBWjtBQU9EOzs7Z0NBRVU7O0FBRVQ7QUFDQTs7QUFFRDs7OzRCQUVNb0QsQyxFQUFHOztBQUVOLFlBQUttWCxVQUFMLENBQWdCLGtEQUFrRCxLQUFLVixFQUFMLENBQVE5WixHQUExRTs7QUFFQSxjQUFPLEtBQVA7QUFFSDs7OzRCQUdNcUQsQyxFQUFHOztBQUVSLFlBQUttWCxVQUFMLENBQWdCLHlDQUF5QyxLQUFLTCxFQUFMLENBQVFuYSxHQUFqRCxHQUF1RCxRQUF2RCxHQUFrRSxLQUFLbWEsRUFBTCxDQUFRRCxHQUExRjtBQUNBOztBQUVBLGNBQU8sS0FBUDtBQUVEOzs7Z0NBRVU7O0FBRVAsWUFBS00sVUFBTCxDQUFnQixnQ0FBZ0MsS0FBS0osSUFBTCxDQUFVTCxHQUExQyxHQUFnRCxLQUFoRCxHQUF3RCxLQUFLSyxJQUFMLENBQVVwYSxHQUFsRjs7QUFFQSxjQUFPLEtBQVA7QUFDSDs7O2tDQUVZOztBQUVYLFdBQUl5YSxVQUFVLEVBQWQ7QUFDQSxXQUFJQyxNQUFNLEVBQVY7QUFDQSxXQUFJQyxPQUFPWCxtQkFBbUJ0akIsRUFBRSxPQUFGLEVBQVd1akIsSUFBWCxLQUFrQixJQUFsQixHQUF1QnhnQixTQUFTd0csSUFBbkQsQ0FBWDs7QUFFQXhHLGdCQUFTd0csSUFBVCxHQUFnQixZQUFZd2EsT0FBWixHQUFzQixXQUF0QixHQUFvQ0MsR0FBcEMsR0FBMEMsUUFBMUMsR0FBcURDLElBQXJFOztBQUVBLGNBQU8sS0FBUDtBQUVEOzs7Z0NBRVUzYSxHLEVBQUs4QyxDLEVBQUdFLEMsRUFBRzs7QUFFbEIsV0FBR0YsTUFBTTFOLFNBQVQsRUFBb0IwTixJQUFJLEdBQUo7QUFDcEIsV0FBR0UsTUFBTTVOLFNBQVQsRUFBb0I0TixJQUFJLEdBQUo7O0FBRXBCLFdBQUkvRSxJQUFJcUUsT0FBTyxDQUFDcE4sT0FBTzBsQixNQUFQLENBQWM3WCxLQUFkLEdBQW9CRCxDQUFyQixJQUF3QixDQUEvQixDQUFSO0FBQ0EsV0FBSWpGLElBQUl5RSxPQUFPLENBQUNwTixPQUFPMGxCLE1BQVAsQ0FBYzNYLE1BQWQsR0FBcUJELENBQXRCLElBQXlCLENBQWhDLENBQVI7O0FBRUE5TixjQUFPMmxCLElBQVAsQ0FBWTdhLEdBQVosRUFBZ0IsWUFBaEIsRUFDVSxnQkFDQSxhQURBLEdBRUEsZ0JBRkEsR0FHQSxpQkFIQSxHQUlBLFNBSkEsR0FJWWdELENBSlosR0FJZ0IsR0FKaEIsR0FLQSxRQUxBLEdBS1dGLENBTFgsR0FLZSxHQUxmLEdBTUEsT0FOQSxHQU1VN0UsQ0FOVixHQU1jLEdBTmQsR0FPQSxNQVBBLEdBT1NKLENBUm5CO0FBV0g7OztpQ0FFVztBQUFBOztBQUVWLFlBQUtpYyxFQUFMLENBQVFuWCxPQUFSLENBQWdCbEwsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsS0FBS3FqQixNQUFMLENBQVluakIsSUFBWixDQUFpQixJQUFqQixDQUE1QjtBQUNBLFlBQUt3aUIsRUFBTCxDQUFReFgsT0FBUixDQUFnQmxMLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLEtBQUtzakIsTUFBTCxDQUFZcGpCLElBQVosQ0FBaUIsSUFBakIsQ0FBNUI7QUFDQSxZQUFLeWlCLElBQUwsQ0FBVXpYLE9BQVYsQ0FBa0JsTCxFQUFsQixDQUFxQixPQUFyQixFQUE4QixLQUFLdWpCLFFBQUwsQ0FBY3JqQixJQUFkLENBQW1CLElBQW5CLENBQTlCO0FBQ0EsV0FBSSxLQUFLa2lCLEtBQVQsRUFBZ0IsS0FBS0EsS0FBTCxDQUFXcGlCLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFlBQUk7QUFBQyxlQUFLd2pCLFVBQUwsR0FBa0IsT0FBTyxLQUFQO0FBQWMsUUFBNUQ7QUFFakI7OztvQ0FFYzs7QUFFYixZQUFLbkIsRUFBTCxDQUFRblgsT0FBUixDQUFnQlksR0FBaEIsQ0FBb0IsT0FBcEI7QUFDQSxZQUFLNFcsRUFBTCxDQUFReFgsT0FBUixDQUFnQlksR0FBaEIsQ0FBb0IsT0FBcEI7QUFDQSxZQUFLNlcsSUFBTCxDQUFVelgsT0FBVixDQUFrQlksR0FBbEIsQ0FBc0IsT0FBdEI7QUFDQSxXQUFJLEtBQUtzVyxLQUFULEVBQWdCLEtBQUtBLEtBQUwsQ0FBV3RXLEdBQVgsQ0FBZSxPQUFmO0FBRWpCOzs7Ozs7bUJBOUtrQmtXLEc7Ozs7OztBQ1JyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FB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LFlBQTNCLEVBQXlDLElBQUlzQyxZQUFKLENBQWlCem9CLElBQWpCLENBQXpDLEVBQWlFLEtBQUt3ZixFQUFMLENBQVFrSixXQUF6RTs7QUFFQTtBQUNBLFNBQUtsSixFQUFMLENBQVEwRyxVQUFSLENBQW1CLEtBQUsxRyxFQUFMLENBQVEyRyxZQUEzQixFQUF5QyxJQUF6Qzs7QUFFQTtBQUNBLFdBQU9GLEdBQVA7QUFDQTs7OytCQU9ZOztBQUVWOThCLE1BQUV4QixNQUFGLEVBQVV1QyxFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLRyxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7O3lCQVRZLENBR1o7Ozs7OzttQkFqTmtCdzZCLFMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEzODRiYTAzNzIzOTEwNDY2ZjIxIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFRvcFxuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IENvbW1vbiBmcm9tICcuL1BhZ2UvQ29tbW9uLmpzJztcbmltcG9ydCBNYWluIGZyb20gJy4vUGFnZS9NYWluLmpzJztcbi8vIGltcG9ydCBEaXNwbGF5VG9wIGZyb20gJy4vRGlzcGxheS9EaXNwbGF5VG9wLmpzJztcblxuKCgpPT57XG5cbiAgLy8gZ2xvYmFs44Kq44OW44K444Kn44Kv44OIXG4gIGlmICh3aW5kb3cuZ2I9PT11bmRlZmluZWQpIHdpbmRvdy5nYiA9IHt9O1xuICB3aW5kb3cuZ2IuaW4gPSB7fTsgLy9pbnN0YW5jZVxuXG4gIGdiLmluLmNvbW1vbiA9IG5ldyBDb21tb24oKTtcbiAgLy8gZ2IuaW4uZGlzcGxheVRvcCA9IG5ldyBEaXNwbGF5VG9wKCk7XG4gIGdiLmluLm1haW4gPSBuZXcgTWFpbigpO1xuXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb21tb25cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IENvbmYgZnJvbSAnLi4vQ29uZi5qcyc7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9NeUxpYnMvVXRpbC5qcyc7XG5pbXBvcnQgRnVuYyBmcm9tICcuLi9NeUxpYnMvRnVuYy5qcyc7XG5cbmltcG9ydCBSZWFkeU1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvUmVhZHlNZ3IuanMnO1xuaW1wb3J0IFVwZGF0ZU1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvVXBkYXRlTWdyLmpzJztcbmltcG9ydCBSZXNpemVNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1Jlc2l6ZU1nci5qcyc7XG5pbXBvcnQgU2Nyb2xsTWdyIGZyb20gJy4uL015TGlicy9FdmVudE1nci9TY3JvbGxNZ3IuanMnO1xuaW1wb3J0IE1vdXNlTWdyIGZyb20gJy4uL015TGlicy9FdmVudE1nci9Nb3VzZU1nci5qcyc7XG5pbXBvcnQgTG9hZE1nciBmcm9tICcuLi9GdW5jL0xvYWRNZ3IuanMnO1xuXG4vLyBpbXBvcnQgUGpheCBmcm9tICcuLi9GdW5jL1BqYXguanMnO1xuaW1wb3J0IEp1ZGdlRW52aXJvbm1lbnQgZnJvbSAnLi4vRnVuYy9KdWRnZUVudmlyb25tZW50LmpzJztcbmltcG9ydCBSZXNwb25zaXZlU3dpdGNoSW1nIGZyb20gJy4uL0Z1bmMvX2V2ZW50cy9SZXNwb25zaXZlU3dpdGNoSW1nLmpzJztcbmltcG9ydCBTd2lwZVRyYW5zaXRpb24gZnJvbSAnLi4vRnVuYy9Td2lwZVRyYW5zaXRpb24uanMnO1xuXG4vLyBpbXBvcnQgTWVudSBmcm9tICcuLi9EaXNwbGF5L1VJL19jb21wb3JuZW50cy9NZW51LmpzJztcbi8vIGltcG9ydCBOYXYgZnJvbSAnLi4vRGlzcGxheS9VSS9OYXYuanMnO1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL0Rpc3BsYXkvVUkvQWxlcnQuanMnO1xuaW1wb3J0IFNpZGVSIGZyb20gJy4uL0Rpc3BsYXkvVUkvU2lkZVIuanMnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi4vRnVuYy9UaW1lLmpzJztcbmltcG9ydCBTY3JvbGxUcmFuc2l0aW9uIGZyb20gJy4uL0Z1bmMvU2Nyb2xsVHJhbnNpdGlvbi5qcyc7XG5pbXBvcnQgUGFnZVRvcCBmcm9tICcuLi9EaXNwbGF5L1VJL19wYXJ0cy9QYWdlVG9wLmpzJztcbmltcG9ydCBTZWMwMVZpZGVvIGZyb20gJy4uL0Rpc3BsYXkvVUkvU2VjMDFWaWRlby5qcyc7XG5pbXBvcnQgU25zIGZyb20gJy4uL0Z1bmMvU25zLmpzJztcbmltcG9ydCBTbGlkZXJUb3AgZnJvbSAnLi4vRGlzcGxheS9VSS9TbGlkZXJUb3AuanMnO1xuXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vRGlzcGxheS9MYXlvdXQvTGF5b3V0LmpzJztcblxuaW1wb3J0IERpc3BsYXlPcGVuaW5nIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheU9wZW5pbmcuanMnO1xuaW1wb3J0IFNlY3Rpb24wMkJnIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHMuanMnO1xuaW1wb3J0IFBhZ2VUcmFuc2l0aW9uRWZmZWN0IGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1BhZ2VUcmFuc2l0aW9uL1BhZ2VUcmFuc2l0aW9uQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgSG92ZXJFZmZlY3RTVkcgZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkcuanMnO1xuaW1wb3J0IEhvdmVyRWZmZWN0U1ZHTG9nbyBmcm9tICcuLi9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0xvZ28uanMnO1xuaW1wb3J0IEhvdmVyRWZmZWN0TWVudUJ0biBmcm9tICcuLi9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdE1lbnVCdG4uanMnO1xuaW1wb3J0IEhvdmVyRWZmZWN0U1ZHQXJyb3cgZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdBcnJvdy5qcyc7XG5pbXBvcnQgSG92ZXJFZmZlY3RTTlNQQ0Zvb3RlciBmcm9tICcuLi9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNOU1BDRm9vdGVyLmpzJztcbmltcG9ydCBIb3ZlckVmZmVjdFNWR0Fycm93U2lkZVIgZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdBcnJvd1NpZGVSLmpzJztcbi8vIGltcG9ydCBIb3ZlckVmZmVjdE1lbnVJdGVtIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0TWVudUl0ZW0uanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLm9uSW1tZWRpYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgb25JbW1lZGlhdGUoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5Yid5pyf5YCk44Gu6Kit5a6a44O744OH44O844K/44Gu6YWN572uXG4gICAgLy8gIHV0aWzplqLmlbDjga7liJ3mnJ/ljJZcbiAgICAvLyAg44Kk44OZ44Oz44OI44Oe44ON44O844K444Oj44O844Gu6Kit572uXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZ2IuaW4uY29uZiA9IG5ldyBDb25mKCk7XG4gICAgZ2IuaW4udSA9IG5ldyBVdGlsKCk7XG4gICAgZ2IuaW4uZiA9IG5ldyBGdW5jKCk7XG4gICAgZ2IuaW4udXAgPSBuZXcgVXBkYXRlTWdyKCk7XG4gICAgZ2IuaW4uciA9IG5ldyBSZXNpemVNZ3IoKTsgICAgXG4gICAgZ2IuaW4ucyA9IG5ldyBTY3JvbGxNZ3IoKTtcbiAgICBnYi5pbi5tID0gbmV3IE1vdXNlTWdyKCk7XG4gICAgZ2IuaW4ucm0gPSBuZXcgUmVhZHlNZ3IoKTtcbiAgICBnYi5pbi5sb2FkTWdyID0gbmV3IExvYWRNZ3IoKTtcbiAgICBnYi5pbi5zY3QgPSBuZXcgU2Nyb2xsVHJhbnNpdGlvbigpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAg44Gd44Gu5LuWXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBwamF444Gu6Kit5a6aXG4gICAgLy8gZ2IuaW4ucGpheCA9IG5ldyBQamF4KCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgTGF5b3V0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZ2IuaW4uTGF5b3V0ID0gbmV3IExheW91dCgpO1xuXG5cbiAgICAvLyDmupblgpnlrozkuoblvozjga7lh6bnkIZcbiAgICBnYi5pbi5ybS5vbkNvbXBsZXRlZEZ1bmMgPSAoKT0+e25ldyBEaXNwbGF5T3BlbmluZygpO31cblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg4fjg5DjgqTjgrnjg7vjg5bjg6njgqbjgrbliKTlrppcbiAgICAvLyAg44K544Oe44Ob44Gu5ZCR44GN5Yik5a6aXG4gICAgLy8gIOODmuODvOOCuOaDheWgseWPluW+l1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdiLmluLmplID0gbmV3IEp1ZGdlRW52aXJvbm1lbnQoKTtcbiAgICBnYi5pbi5yZXNJbWcgPSBuZXcgUmVzcG9uc2l2ZVN3aXRjaEltZygpO1xuICAgIGdiLmluLnNucyA9IG5ldyBTbnMoJCgnLmZiU2hhcmUnKSwkKCcudHdTaGFyZScpLCQoJy5saW5lU2hhcmUnKSwkKCcub25NYWlsJykpXG4gICAgZ2IuaW4uc3d0ID0gbmV3IFN3aXBlVHJhbnNpdGlvbigpO1xuXG4gICAgZ2IuaW4uZi5jaGVja0Nzc0JsZW5kKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgVUlcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBnYi5pbi5tZW51ID0gbmV3IE1lbnUoKTtcbiAgICAvLyBnYi5pbi5uYXYgPSBuZXcgTmF2KCk7XG4gICAgLy8gZ2IuaW4uc2lkZVIgPSBuZXcgU2lkZVIoKTtcbiAgICAvLyBnYi5pbi5hbGVydCA9IG5ldyBBbGVydCgpO1xuICAgIC8vIGdiLmluLnBhZ2V0b3AgPSBuZXcgUGFnZVRvcCgpO1xuXG4gICAgLy8gYmdcbiAgICBnYi5pbi5zbGlkZXJUb3AgPSBuZXcgU2xpZGVyVG9wKCQoJyNiZ1dyYXAgLnNlYzAxJykpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIEVmZmVjdHNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnYi5pbi5wYWdlVHJhbnNpdGlvbkVmZmVjdCA9IG5ldyBQYWdlVHJhbnNpdGlvbkVmZmVjdCgkKCcjcGFnZVRyYW5zaXRpb25MYXllcicpKTtcbiAgICBnYi5pbi5zZWMwMVZpZGVvID0gbmV3IFNlYzAxVmlkZW8oKTtcbiAgICBnYi5pbi5TZWMwMkJnID0gbmV3IFNlY3Rpb24wMkJnKCk7XG5cbiAgICBnYi5pbi5oZTAxID0gbmV3IEhvdmVyRWZmZWN0U1ZHKCQoJy5TVkdIb3ZlcicpLCcjZmZmJywnIzAwMCcpO1xuICAgIGdiLmluLmhlMDIgPSBuZXcgSG92ZXJFZmZlY3RTVkcoJCgnLlNWR0hvdmVyVycpLCcjODFkOGQwJywnI2ZmZicpO1xuICAgIGdiLmluLmhlMDMgPSBuZXcgSG92ZXJFZmZlY3RTVkcoJCgnLlNWR0hvdmVyVzAyJyksJyM4MWQ4ZDAnLCcjMDAwJyk7XG4gICAgZ2IuaW4uaGUwNCA9IG5ldyBIb3ZlckVmZmVjdFNWR0xvZ28oJCgnI2hlYWRlciAubG9nbywgI2hlYWRlciAuc3ViVGl0JykpO1xuICAgIC8vIGdiLmluLmhlMDUgPSBuZXcgSG92ZXJFZmZlY3RNZW51SXRlbSgkKCcjbWVudSAubWVudUxpc3QgLml0ZW0nKSk7XG4gICAgZ2IuaW4uaGUwNiA9IG5ldyBIb3ZlckVmZmVjdFNWR0Fycm93U2lkZVIoJCgnI3NpZGVSIC5uZXh0JykpO1xuICAgIC8vIGdiLmluLmhlMDcgPSBuZXcgSG92ZXJFZmZlY3RNZW51QnRuKCQoJy5tZW51QnRuMDEnKSk7XG4gICAgZ2IuaW4uaGUwOCA9IG5ldyBIb3ZlckVmZmVjdFNOU1BDRm9vdGVyKCQoJyNzaWRlTCAuc25zLnNwJykpO1xuXG4gICAgLy8gbG9nbyDlh7rjgZlcbiAgICAvLyBUd2Vlbk1heC50bygkKCcjaGVhZGVyIC5sb2dvJyksIDIuMiwge29wYWNpdHk6IDEsIGVhc2U6IFBvd2VyMi5lYXNlSW5PdXR9KVxuXG4gICAgZ2IuaW4ubG9hZE1nci5zdGFydCgpO1xuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBGdW5jXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgTGF5b3V0XG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIERpc3BhbHlcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgTW90aW9uXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9QYWdlL0NvbW1vbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbmZcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IFNvdW5kRGF0YSBmcm9tICcuL0RhdGEvU291bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25mIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDmnKznlarjg5Xjg6njgrBcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gICAgdGhpcy5SRUxFQVNFID0gdHJ1ZTtcbiAgICAvLyB0aGlzLlJFTEVBU0UgPSBmYWxzZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5Xjg6njgrDplqLpgKNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLkZMRyA9IHtcbiAgICAgIExPRzp0cnVlLCAgLy8g44Ot44Kw5Ye65YqbXG4gICAgICBQQVJBTTp0cnVlLCAvLyDjg5Hjg6njg6Hjg7zjgr/jg4Hjgqfjg4Pjgq9cbiAgICAgIFNUQVRTOnRydWUgIC8vIFN0YXRz6KGo56S6XG4gICAgfTtcbiAgICBpZiAoIXRoaXMuUkVMRUFTRSkge1xuICAgICAgdGhpcy5GTEcgPSB7XG4gICAgICAgIExPRzpmYWxzZSxcbiAgICAgICAgUEFSQU06ZmFsc2UsXG4gICAgICAgIFNUQVRTOmZhbHNlIFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5Z+65pysIHdpZHRoIGhlaWdodFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZGVmVyA9IDEzMDA7XG4gICAgdGhpcy5kZWZIID0gODUwO1xuXG4gICAgdGhpcy5XID0gMTIwMDtcbiAgICB0aGlzLkggPSA3NTA7XG5cbiAgICB0aGlzLnNwVyA9IDM3NTtcbiAgICB0aGlzLnNwSCA9IDY2NztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4hcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmJwID0gNzY4O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIG1vZGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMua2V5cyA9IFtcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ21vdmllJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ21vcm5pbmcnLCdhZnRlcm5vb24nLCduaWdodCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ2RhdGEnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnZGF0YTAxJywnZGF0YTAyJywnZGF0YTAzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAncHJvZHVjdCcsXG4gICAgICAgICAgJ3ZhbHVlJzogWycwMSddLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5zd2l0Y2hNb2RlKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc291bmQgZGF0YVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc291bmREYXRhID0gbmV3IFNvdW5kRGF0YSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNlYzAyIGJnIEltZyBOdW1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNlYzAySW1nTnVtID0gMzk2O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHlvdXR1YmUgSURcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnlvdXR1YmVJRDAxID0gJ3hXMm9OcE5yS2QwJztcbiAgICB0aGlzLnlvdXR1YmVJRDAyID0gJ3QyV2VSUmRBRmVJJztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB3ZWIgZm9udCBsb2FkZWRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLndlYkZvbnRMb2FkZWQgPSBmYWxzZTtcblxuICB9XG5cblxuICBzd2l0Y2hNb2RlKCl7XG5cbiAgICB2YXIgaSwga2V5LCBsZW4sIHBhcmFtLCByZWYsIHJlZjEsIHZhbHVlO1xuXG4gICAgcmVmID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykuc3BsaXQoJyYnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcGFyYW0gPSByZWZbaV07XG4gICAgICByZWYxID0gcGFyYW0uc3BsaXQoJz0nKSwga2V5ID0gcmVmMVswXSwgdmFsdWUgPSByZWYxWzFdO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMua2V5cy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtleXNbal07XG5cbiAgICAgICAgLy8g44OR44Op44Oh44O844K/44GM44Kt44O844Go5LiA57eS44Gg44Gj44Gf44KJXG4gICAgICAgIGlmIChvYmoua2V5ID09PSBrZXkpIHtcblxuICAgICAgICAgIC8vIOWQhOWApOOBqOavlOi8g1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgb2JqLnZhbHVlLmxlbmd0aDsgaysrKSB7XG5cbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmoudmFsdWVba107XG5cbiAgICAgICAgICAgIC8vIOOCreODvOOCknRoaXMua2V5c+OBrmtleeOBq+OAgXZhbHVl44KS5q+U6LyD44GX44Gm5ZCM5YCk44Gg44Gj44Gf44KC44Gu44GrXG4gICAgICAgICAgICBpZiAodmFsID09PSB2YWx1ZSkgdGhpc1tvYmoua2V5XSA9IHZhbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH07XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgfTtcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29uZi5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBEYXRhXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kRGF0YSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyB0aGlzLkFUQVJJMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvYXRhcmkvQXRhcmlfMDQud2F2JztcbiAgICAvLyB0aGlzLkFUQVJJMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvYXRhcmkvQXRhcmlfMDUud2F2JztcblxuICAgIC8vIHRoaXMuQkFOMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDEud2F2JztcbiAgICAvLyB0aGlzLkJBTjAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CYS1uXzAyLndhdic7XG4gICAgLy8gdGhpcy5CQU4wMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmEtbl8wMy53YXYnO1xuICAgIC8vIHRoaXMuQkFOMDQgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDQud2F2JztcblxuICAgIC8vIHRoaXMuRE9OMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JpZ19Eb25fMDEud2F2JztcbiAgICAvLyB0aGlzLkRPTjAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CaWdfRG9uXzAyLndhdic7XG4gICAgLy8gdGhpcy5ET04wMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmlnX0Rvbl8wMy53YXYnO1xuICAgIC8vIHRoaXMuRE9OMDQgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0Rvbl8wNC53YXYnO1xuXG4gICAgLy8gdGhpcy5ET0ROMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0RvZG9uXzAxLndhdic7XG4gICAgLy8gdGhpcy5ET0ROMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0RvZG9uXzAyLndhdic7XG5cbiAgICAvLyB0aGlzLkdvZ29nbzAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Hb2dvZ29fMDEud2F2JztcbiAgICAvLyB0aGlzLkdvZ29nbzAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Hb2dvZ29fMDIud2F2JztcblxuICAgIC8vIHRoaXMuSUtBUkkgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvaWthcmkvSWthcmlfMDEud2F2JztcblxuICAgIC8vIHRoaXMuUk9VTEVUVEUwMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMS53YXYnO1xuICAgIC8vIHRoaXMuUk9VTEVUVEUwMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMi53YXYnO1xuICAgIC8vIHRoaXMuUk9VTEVUVEUwMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMy53YXYnO1xuXG4gICAgLy8gdGhpcy5TRUEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvc2VhL1NlYSZrYW1vbWVfMDEud2F2JztcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGF0YS9Tb3VuZC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFV0aWxcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTsgLy91c2VyYWdlbnRcbiAgICB0aGlzLmFwcFYgPSB3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTsgLy9hcHBWZXJzaW9uXG4gICAgdGhpcy5pc1Jlc1NQID0gbnVsbDsgLy8gcmVzcG9uc2l2ZSBzcFxuICAgIHRoaXMuaXNSZXNQQyA9IG51bGw7IC8vIHJlc3BvbnNpdmUgcGNcblxuICAgIHRoaXMuaXNQQyA9IG51bGw7XG4gICAgdGhpcy5pc1NQID0gbnVsbDtcbiAgICB0aGlzLmlzVEFCID0gbnVsbDtcbiAgICB0aGlzLmlzTUIgPSBudWxsO1xuXG4gICAgdGhpcy5pc0lFID0gbnVsbDtcblxuICAgIHRoaXMuaXNTZXRTUFNpemUgPSBmYWxzZTtcblxuXG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBudWxsO1xuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBNYXRoXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIFxuICAvLyDjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG1pbiA6IOacgOWwj+WApChpbnQpXG4gIC8vIEBtYXggOiDmnIDlpKflgKQoaW50KVxuICAvLyByZXR1cm4gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByYW5kb20obWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKChtYXggKyAxKSAtIG1pbikgKyBtaW4pKTtcblxuICB9XG4gICAgICBcbiAgLy8g44Op44Oz44OA44Og44Gq5pW05pWw44KSMuOBpOOBruevhOWbsuOBi+OCieWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbWluMSA6IOacgOWwj+WApDEoaW50KVxuICAvLyBAbWF4MSA6IOacgOWkp+WApDEoaW50KVxuICAvLyBAbWluMiA6IOacgOWwj+WApDIoaW50KVxuICAvLyBAbWF4MiA6IOacgOWkp+WApDIoaW50KVxuICAvLyByZXR1cm4gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByYW5kb20yKG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgICBcbiAgICBpZiAodGhpcy5oaXQoMikpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4xLCBtYXgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjIsIG1heDIpO1xuICAgIH1cblxuICB9XG4gICAgICBcbiAgLy8gMS9AcmFuZ2Xjga7norrnjofjgad0cnVl44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEByYW5nZSA6IOavjeaVsChpbnQpXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaGl0KHJhbmdlKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oMCwgcmFuZ2UgLSAxKSA9PT0gMDtcblxuICB9XG4gIFxuICAvLyAw44GL44KJ56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pW05pWw44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgOiDnr4Tlm7IoaW50KVxuICAvLyByZXR1cm4gOiDjg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByYW5nZSh2YWwpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgtdmFsLCB2YWwpO1xuXG4gIH1cbiAgXG4gIC8vIOWApOOCkuODnuODg+ODlOODs+OCsFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog44Oe44OD44OU44Oz44Kw44GZ44KL5YCkKE51bWJlcilcbiAgLy8gQHJlc01pbiA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEByZXNNYXggOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1pbiA6IOWFg+OBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWF4IDog5YWD44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gcmV0dXJuIDog44Oe44OD44OU44Oz44Kw44GV44KM44Gf5YCkKE51bWJlcilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbWFwKG51bSwgcmVzTWluLCByZXNNYXgsIGJhc2VNaW4sIGJhc2VNYXgpIHtcblxuICAgIHZhciBwO1xuICAgIGlmIChudW0gPCBiYXNlTWluKSB7XG4gICAgICByZXR1cm4gcmVzTWluO1xuICAgIH1cbiAgICBpZiAobnVtID4gYmFzZU1heCkge1xuICAgICAgcmV0dXJuIHJlc01heDtcbiAgICB9XG4gICAgcCA9IChyZXNNYXggLSByZXNNaW4pIC8gKGJhc2VNYXggLSBiYXNlTWluKTtcblxuICAgIHJldHVybiAoKG51bSAtIGJhc2VNaW4pICogcCkgKyByZXNNaW47XG5cbiAgfSAgICBcbiAgXG4gIC8vIOaVsOWApOOBq+Wwj+aVsOeCueesrEBu5L2N44G+44Gn44KS44Gk44GR44Gf5paH5a2X5YiX44KS6L+U44GZXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDlgKQoTnVtYmVyKVxuICAvLyBAbiA6IOWwj+aVsOeCueOBruS9jShpbnQpXG4gIC8vIHJldHVybiA6IOWkieaPm+OBleOCjOOBn+WApChTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRlY2ltYWwobnVtLCBuKSB7XG4gICAgdmFyIGksIHBvcztcbiAgICBudW0gPSBTdHJpbmcobnVtKTtcbiAgICBwb3MgPSBudW0uaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBudW0uc3BsaXQoXCIuXCIpWzBdO1xuICAgIH1cbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgbnVtICs9IFwiLlwiO1xuICAgICAgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgbnVtICs9IFwiMFwiO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH1cbiAgICBudW0gPSBudW0uc3Vic3RyKDAsIHBvcykgKyBudW0uc3Vic3RyKHBvcywgbiArIDEpO1xuICAgIHJldHVybiBudW07XG4gIH1cblxuICBjbGFtcChudW1lcmF0b3IsZGVub21pbmF0b3IsdmFsKSB7XG5cbiAgICByZXR1cm4gdmFsICogKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKTtcblxuICB9XG5cbiAgZGVncmVlKHJhZGlhbnMpIHtcblxuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTsgLy8x44Op44K444Ki44Oz44GM5L2V5bqm44GLXG5cbiAgfVxuXG4gIC8vIHRvIHJhZGlhbnNcbiAgcmFkaWFuKGFuZ2xlKSB7IFxuXG4gICAgcmV0dXJuIGFuZ2xlICogTWF0aC5QSSAvIDE4MDsgLy8x5bqm5L2V44Op44K444Ki44Oz44GLXG5cbiAgfVxuXG4gIGRpc3QocDEsIHAyKSB7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XG5cbiAgfVxuXG4gIGFzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEwLDksNSwzLDFcblxuICB9XG5cbiAgZGVzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MSwzLDUsOSwxMFxuXG4gIH1cblxuICAvLyBtYXAodmFsdWUsIG1pbjAxLCBtYXgwMSwgbWluMDIsIG1heDAyKSB7XG5cbiAgLy8gICB2YXIgZGlzMDEgPSBtYXgwMSAtIG1pbjAxO1xuICAvLyAgIHZhciBkaXMwMiA9IG1heDAyIC0gbWluMDJcblxuICAvLyAgIHZhciByYXRlID0gZGlzMDIgLyBkaXMwMTtcblxuICAvLyAgIHZhbHVlID0gdmFsdWUgKiByYXRlO1xuXG4gIC8vICAgcmV0dXJuIHZhbHVlO1xuICAvLyB9XG5cbiAgY29uc3RyYWluKHZhbHVlLCBtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgodmFsdWUsIG1pbikpO1xuXG4gICAgLy8gaWYgKHZhbHVlIDw9IGxvdykgdmFsdWUgPSBsb3c7XG4gICAgLy8gaWYgKHZhbHVlID49IGhpZ2gpIHZhbHVlID0gaGlnaDsgICAgIFxuICAgIC8vIHJldHVybiB2YWx1ZTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBBcnJheVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyDphY3liJflhoXjga7jg6njg7Pjg4Djg6DjgarlgKTjgpLjgbLjgajjgaTlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGFyciA6IOmFjeWIl1xuICAvLyByZXR1cm4gOiDphY3liJflhoXjga7lgKRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXJyUmFuZChhcnIpIHtcblxuICAgIHJldHVybiBhcnJbdGhpcy5yYW5kb20oMCwgYXJyLmxlbmd0aCAtIDEpXTtcblxuICB9ICAgIFxuICAgIFxuICAvLyDphY3liJfjgpLjg6njg7Pjg4Djg6DjgavkuKbjgbnmm7/jgYhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGFyciA6IOmFjeWIlyhBcnJheSlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2h1ZmZsZShhcnkpIHtcblxuICAgIHZhciBhcnIgPSBbXTtcbiAgICBhcnIgPSBhcnkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IGFyci5sZW5ndGg7XG4gICAgd2hpbGUoaSl7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppKTtcbiAgICAgIHZhciB0ID0gYXJyWy0taV07XG4gICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICBhcnJbal0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxuICAvLyDjg6njg7Pjg4Djg6DjgarmlbDlgKTjgpLkvZzjgotcbiAgcmFuZG9tQXJyIChsZW4pIHtcblxuICAgIHZhciBhcnIgPSBuZXcgQXJyYXk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSBhcnIucHVzaChpKTtcblxuICAgIGFyciA9IHRoaXMuc2h1ZmZsZUFyeShhcnIpO1xuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbiAgLy8gbnVsbOOCkuWJiumZpOOBl+OBn+mFjeWIl+OCkui/lOOBmVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAYXJyIDog6YWN5YiXKEFycmF5KVxuICAvLyByZXR1cm4gOiBudWxs5YmK6Zmk44GX44Gf6YWN5YiXKEFycmF5KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzbGljZU51bGwoYXJyKSB7XG5cbiAgICB2YXIgaSwgbCwgbGVuMSwgbmV3QXJyLCB2YWw7XG4gICAgbmV3QXJyID0gW107XG4gICAgZm9yIChpID0gbCA9IDAsIGxlbjEgPSBhcnIubGVuZ3RoOyBsIDwgbGVuMTsgaSA9ICsrbCkge1xuICAgICAgdmFsID0gYXJyW2ldO1xuICAgICAgaWYgKHZhbCAhPT0gbnVsbCkge1xuICAgICAgICBuZXdBcnIucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyO1xuXG4gIH0gICAgXG4gIFxuICAvLyDphY3liJflhoXjga7jg5Hjg6njg6Hjg7zjgr/jgpLmr5TovIPjgZfjgabjgr3jg7zjg4hcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGFyciA6IOmFjeWIlyhBcnJheSlcbiAgLy8gQHBhcmEgOiDjg5Hjg6njg6Hjg7zjgr/jg7zlkI1cbiAgLy8gQGRlc2MgOiDpmY3poIbjgYvjganjgYbjgYsoYm9vbGVhbikg44OH44OV44Kp44Or44OI44Gv5piH6aCGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNvcnQoYXJyLCBwYXJhLCBkZXNjKSB7XG4gICAgaWYgKGRlc2MgPT09IHZvaWQgMCkge1xuICAgICAgZGVzYyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZGVzYykge1xuICAgICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGJbcGFyYV0gLSBhW3BhcmFdO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBhW3BhcmFdIC0gYltwYXJhXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEtleShsaXN0LHZhbHVlKSB7XG4gICAgICB2YXIgcmV0dXJuS2V5ID0gW107XG4gICAgICBmb3IodmFyIGtleSBpbiBsaXN0KXtcbiAgICAgICAgICBpZiAobGlzdFtrZXldID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybktleS5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVybktleTtcbiAgfVxuXG4gIC8vIOODpuODi+ODvOOCr0lE44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVuaXF1ZSgpIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB9XG4gIFxuICAvLyAqKmpxdWFyeeS9v+eUqFxuICAvLyDjg5zjgr/jg7Pjg6Ljg7zjg4nlpInmm7RcbiAgLy8gdHJ1ZeOBquOCieOCq+ODvOOCveODq+OBjOODneOCpOODs+OCv+ODvOOBruW9ouOBq1xuICAvLyBmYWxzZeOBquOCieODh+ODleOCqeODq+ODiOOBruOCq+ODvOOCveODq+OBq1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAZmxnIDog6YGp55So44GZ44KL44GL44Gp44GG44GLKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJ1dHRvbk1vZGUoZmxnKSB7XG5cbiAgICBpZiAoZmxnKSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcImRlZmF1bHRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIGRldmljZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0RldmljZVNQKCl7XG5cbiAgICB2YXIgbWVkaWEgPSBbXCJpcGhvbmVcIixcImlwb2RcIixcImlwYWRcIixcImFuZHJvaWRcIixcImRyZWFtXCIsXCJjdXBjYWtlXCIsXCJibGFja2JlcnJ5OTUwMFwiLFwiYmxhY2tiZXJyeTk1MzBcIixcImJsYWNrYmVycnk5NTIwXCIsXCJibGFja2JlcnJ5OTU1MFwiLFwiYmxhY2tiZXJyeTk4MDBcIixcIndlYm9zXCIsXCJpbmNvZ25pdG9cIixcIndlYm1hdGVcIl07XG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG1lZGlhLmpvaW4oXCJ8XCIpLFwiaVwiKTtcblxuICAgIHZhciBiID0gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlU1AnKTtcblxuICAgIHRoaXMuaXNTUCA9IGI7XG5cbiAgfVxuICBpc0RldmljZVRBQigpe1xuXG4gICAgdmFyIGIgPSAodGhpcy51YS5pbmRleE9mKFwid2luZG93c1wiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJ0b3VjaFwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImlwYWRcIikgIT0gLTFcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcIm1vYmlsZVwiKSA9PSAtMSlcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJmaXJlZm94XCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcInRhYmxldFwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImtpbmRsZVwiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwic2lsa1wiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwicGxheWJvb2tcIikgIT0gLTE7XG4gICAgaWYgKGIpICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VUQUInKTtcblxuICAgIHRoaXMuaXNUQUIgPSBiO1xuXG4gIH1cblxuICBpc0RldmljZU1CKCl7XG5cbiAgICB2YXIgYiA9ICh0aGlzLnVhLmluZGV4T2YoXCJ3aW5kb3dzXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcInBob25lXCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiaXBob25lXCIpICE9IC0xXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJpcG9kXCIpICE9IC0xXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgIT0gLTEpXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiZmlyZWZveFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJibGFja2JlcnJ5XCIpICE9IC0xO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlTUInKTtcblxuICAgIHRoaXMuaXNNQiA9IGI7XG5cbiAgfVxuXG4gIGlzRGV2aWNlUEMoKXtcblxuICAgIGlmICghKHRoaXMuaXNTUCB8fCB0aGlzLmlzVEFCIHx8IHRoaXMuaXNNQikpIHtcbiAgICAgIFxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZVBDJyk7XG4gICAgICB0aGlzLmlzUEMgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgdGhpcy5pc1BDID0gZmFsc2U7XG5cbiAgfVxuXG4gIC8vIOOCueODnuODleOCqeWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzU210KCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAwO1xuXG4gIH1cblxuICAvLyDjgr/jg5bjg6zjg4Pjg4jnq6/mnKvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1RhYmxldCgpIHtcblxuICAgIHJldHVybiB0aGlzLmlzSXBhZCgpIHx8ICh0aGlzLmlzQW5kcm9pZCgpICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTW9iaWxlJykgPT09IC0xKTtcblxuICB9XG5cbiAgLy8gaVBhZOWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSXBhZCgpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDA7XG5cbiAgfVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBPU1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBBbmRyb2lk5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNBbmRyb2lkKCkge1xuXG4gICAgdmFyIHU7XG4gICAgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgcmV0dXJuIHUuaW5kZXhPZignQmxhY2tCZXJyeScpID4gMCB8fCB1LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDAgfHwgdS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPiAwO1xuXG4gIH1cblxuICBpc2lQaG9uZSgpe1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcImlwaG9uZVwiLFwiaVwiKTtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuICB9XG5cbiAgLy8gaU9T5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJb3MoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBob25lJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBvZCcpID4gMDtcblxuICB9XG5cbiAgLy8gUFMz5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNQczMoKSB7XG5cbiAgICB2YXIgdTtcbiAgICB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICByZXR1cm4gdS5pbmRleE9mKCdQTEFZU1RBVElPTiAzJykgPiAwO1xuXG4gIH1cbiAgICBcbiAgLy8gVklUQeWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzVml0YSgpIHtcblxuICAgIHZhciB1O1xuICAgIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHJldHVybiB1LmluZGV4T2YoJ1BsYXlTdGF0aW9uIFZpdGEnKSA+IDA7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgYnJvd3NlclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSUXjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llKCkge1xuXG4gICAgdmFyIHVhO1xuICAgIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdWEuaW5kZXhPZignbXNpZScpICE9PSAtMSB8fCB1YS5pbmRleE9mKCd0cmlkZW50LzcnKSAhPT0gLTE7XG5cbiAgfVxuXG4gIC8vIFdJTuOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzV2luKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKFwiV2luXCIpICE9PSAtMTtcblxuICB9XG5cbiAgLy8gZ29vZ2xlQ2hyb21l44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNDaHJvbWUoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IDA7XG5cbiAgfSAgICBcbiAgXG4gIC8vIEZpcmVGb3jjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0ZGKCkge1xuXG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcblxuICB9XG5cbiAgaXNTYWZhcmkoKXtcblxuICAgIGlmKHRoaXMudWEuaW5kZXhPZihcImNocm9tZVwiKSAhPSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmKHRoaXMudWEuaW5kZXhPZihcImx1bmFzY2FwZVwiKSAhPSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcInNhZmFyaVwiLFwiaVwiKTtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuXG4gIH1cblxuICBpc09wZXJhKCl7XG5cbiAgICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcIm9wZXJhXCIsXCJpXCIpO1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcblxuICB9XG5cbiAgLy8gaU9T44Guc2FmYXJp5Lul5aSW44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJT1NVaVZpZXcoKSB7XG5cbiAgICB2YXIgYTtcbiAgICBhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ3NhZmFyaScpID09PSAtMSkgfHwgKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ2NyaW9zJykgPiAwKSB8fCAodGhpcy5pc0lvcygpICYmIGEuaW5kZXhPZignZ3NhJykgPiAwKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICB2ZXJzaW9uXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJRTjku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llOFVuZGVyKCkge1xuXG4gICAgdmFyIG1zaWU7XG4gICAgbXNpZSA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgbXNpZSA9IG1zaWUuaW5kZXhPZignbXNpZScpID4gLTEgPyBwYXJzZUludChtc2llLnJlcGxhY2UoLy4qbXNpZVsgXS8sICcnKS5tYXRjaCgvXlswLTldKy8pKSA6IDA7XG4gICAgcmV0dXJuIG1zaWUgPD0gOCAmJiBtc2llICE9PSAwO1xuXG4gIH1cbiAgICBcbiAgLy8gSUU55Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZTlVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDkgJiYgbXNpZSAhPT0gMDtcblxuICB9XG5cbiAgLy8gSUUxMOS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWUxMFVuZGVyKCkge1xuXG4gICAgdmFyIG1zaWU7XG4gICAgbXNpZSA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgbXNpZSA9IG1zaWUuaW5kZXhPZignbXNpZScpID4gLTEgPyBwYXJzZUludChtc2llLnJlcGxhY2UoLy4qbXNpZVsgXS8sICcnKS5tYXRjaCgvXlswLTldKy8pKSA6IDA7XG4gICAgcmV0dXJuIG1zaWUgPD0gMTAgJiYgbXNpZSAhPT0gMDtcblxuICB9XG5cbiAgLy8gSUUxMeS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWUxMVVuZGVyKCkge1xuXG4gICAgdmFyIGIgPSB0aGlzLmlzSWUxMFVuZGVyKCkgfHwgKHRoaXMudWEuaW5kZXhPZihcInRyaWRlbnRcIikgIT0gLTEpO1xuICAgIHJldHVybiBiO1xuICAgIC8vIHJldHVybiB0cnVlO1xuXG4gIH1cblxuICAvLyBlZGdl44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNFZGdlKCkge1xuXG4gICAgbG9nKHRoaXMudWEuaW5kZXhPZihcIkFwcGxlV2Via2l0XCIpLHRoaXMudWEuaW5kZXhPZihcIkVkZ2VcIiksdGhpcy51YSx0aGlzLmFwcFYpO1xuICAgIHZhciBiID0gKHRoaXMudWEuaW5kZXhPZihcImFwcGxld2Via2l0XCIpID49IDAgJiYgdGhpcy51YS5pbmRleE9mKFwiZWRnZVwiKSAhPSAtMSk7XG4gICAgcmV0dXJuIGI7XG4gICAgLy8gcmV0dXJuIHRydWU7XG5cbiAgfVxuXG4gIGlzSUVWZXJzaW9uKCl7XG5cbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llJyk7XG4gICAgdGhpcy5pc0lFID0gdHJ1ZTtcbiAgICAgIFxuICAgIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgMTAuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llMTAnKTtcbiAgICAgIHJldHVybiAnaWUxMCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgOS5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU5Jyk7XG4gICAgICByZXR1cm4gJ2llOSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgOC5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU4Jyk7ICBcbiAgICAgIHJldHVybiAnaWU4JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA3LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTcnKTtcbiAgICAgIHJldHVybiAnaWU3JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA2LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTYnKTtcbiAgICAgIHJldHVybiAnaWU2JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwidHJpZGVudFwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTExJyk7XG4gICAgICB0aGlzLmlzSUUxMSA9IHRydWU7XG4gICAgICByZXR1cm4gJ2llMTEnO1xuICAgIH0gZWxzZSBpZiAodGhpcy51YS5pbmRleE9mKFwiYXBwbGV3ZWJraXRcIikgPj0gMCAmJiB0aGlzLnVhLmluZGV4T2YoXCJlZGdlXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRWRnZScpO1xuICAgICAgcmV0dXJuICdlZGdlJztcbiAgICB9XG5cblxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaWUnKTtcbiAgICB0aGlzLmlzSUUgPSBmYWxzZTtcblxuICB9XG5cbiAgaXNBbmRyb2lkVmVyc2lvbigpIHtcblxuICAgIGlmKCB0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gMCApIHtcblxuICAgICAgICB2YXIgdmVyc2lvbiA9IHBhcnNlRmxvYXQodGhpcy51YS5zbGljZSh0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpKzgpKTtcbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgIFxuICAgIH1cblxuICB9XG5cbiAgaXNpcGhvbmVWZXJzaW9uKCkge1xuXG4gICAgaWYoIHRoaXMudWEuaW5kZXhPZihcImlQaG9uZSBPU1wiKSA+IDAgKSB7XG5cbiAgICAgICAgdmFyIHZlcnNpb24gPSBwYXJzZUZsb2F0KHRoaXMudWEuc2xpY2UodGhpcy51YS5pbmRleE9mKFwiaVBob25lIE9TXCIpKzEwKSk7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHBvcnRyYWl0IC8gbGFuZHNjYXBlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0RpcmVjdGlvbiAoKSB7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKEggPiBXKSB7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgfWVsc2V7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHJlc3BvbnNpdmUg5qiq5bmF44KS6KaL44KLXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1Jlc3BvbnNpdmUgKGJwKSB7XG5cbiAgICBpZiAoYnA9PXVuZGVmaW5lZCkgYnA9Mzc1O1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChXID4gYnApIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gdHJ1ZTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IGZhbHNlO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBVUkxcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8g44Kv44Ko44Oq5oqc44GN5Ye644GXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBrZXkgOiDmipzjgY3lh7rjgZnjg5Hjg6njg6Hjg7zjgr/lkI0oU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnZXRRdWVyeShrZXkpIHtcblxuICAvLyAgIHZhciBxcywgcmVnZXg7XG4gIC8vICAga2V5ID0ga2V5LnJlcGxhY2UoL1vigqxbXS8sIFwi4oKs4oKs4oKsW1wiKS5yZXBsYWNlKC9b4oKsXV0vLCBcIuKCrOKCrOKCrF1cIik7XG4gIC8vICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiW+KCrOKCrD8mXVwiICsga2V5ICsgXCI9KFteJiNdKilcIik7XG4gIC8vICAgcXMgPSByZWdleC5leGVjKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgLy8gICBpZiAocXMgPT09IG51bGwpIHtcbiAgLy8gICAgIHJldHVybiBcIlwiO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICByZXR1cm4gcXNbMV07XG4gIC8vICAgfVxuXG4gIC8vIH1cblxuICBnZXRQYXJhbSgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuICAgIHZhciBwYXJhbSA9IHVybC5zcGxpdCgnPycpWzFdO1xuICAgIGlmIChwYXJhbT09dW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJhbUl0ZW1zID0gcGFyYW0uc3BsaXQoJyYnKTtcbiAgICB2YXIgbGlzdCA9IHt9O1xuICBcbiAgICBmb3IoIHZhciBpID0gMDsgaTxwYXJhbUl0ZW1zLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgcGFyYW1JdGVtID0gcGFyYW1JdGVtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICBsaXN0W3BhcmFtSXRlbVswXV0gPSBwYXJhbUl0ZW1bMV07XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcblxuICB9XG4gIFxuICAvLyDjg4/jg4Pjgrfjg6Xlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogbG9jYXRpb24uaGFzaOOBriPjgpLliYrpmaTjgZfjgZ/jgoTjgaRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaGFzaCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuXG4gIH1cblxuICAvLyBjb29raWXlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRDb29raWUoa2V5KSB7XG5cbiAgICB2YXIgYSwgYXJyLCBpLCBsLCBsZW4xLCB2YWw7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSA9PT0gdm9pZCAwIHx8IGRvY3VtZW50LmNvb2tpZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGEgPSB2YWwuc3BsaXQoXCI9XCIpO1xuICAgICAgaWYgKGFbMF0gPT09IGtleSkge1xuICAgICAgICByZXR1cm4gYVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfSAgICAgIFxuXG4gIC8vIGNvb2tpZeioreWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAa2V5IDog44OR44Op44Oh44O844K/5ZCNXG4gIC8vIEB2YWwgOiDlgKRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0Q29va2llKGtleSwgdmFsKSB7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWw7XG5cbiAgfVxuICBcbiAgaXNQQ1NQKCkge1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWY7XG5cbiAgICBpZiAoIXRoaXMuaXNQQyAmJiAhdGhpcy5pc1RBQiAmJiAodXJsLmluZGV4T2YoJ3BjJykgIT0gLTEpKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbic7XG4gICAgXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlzUEMgJiYgdXJsLmluZGV4T2YoJ3BjJykgPT0gLTEpIHtcblxuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuL3BjLyc7XG4gICAgXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlzVEFCICYmIHVybC5pbmRleE9mKCdwYycpID09IC0xKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbi9wYy8nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc0NvbnRhaW4odXJsLCdyb3VsZXR0ZScpKSBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuICAgIGlmICh0aGlzLmlzQ29udGFpbih1cmwsJ3RvcGljcycpKSBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIENvbG9yXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIHJnYuOBi+OCiUhFWOOCq+ODqeODvOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAciA6IDB+MjU1XG4gIC8vIEBnIDogMH4yNTVcbiAgLy8gQGIgOiAwfjI1NVxuICAvLyByZXR1cm4gOiBleCBcIiNGRkZGRkZcIlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRIZXhDb2xvcihyLGcsYikge1xuICAgICAgdmFyIHN0cjtcbiAgICAgIHN0ciA9IChyIDw8IDE2IHwgZyA8PCA4IHwgYikudG9TdHJpbmcoMTYpO1xuICAgICAgcmV0dXJuIFwiI1wiICsgbmV3IEFycmF5KDcgLSBzdHIubGVuZ3RoKS5qb2luKFwiMFwiKSArIHN0cjtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgU3RyaW5nXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzQ29udGFpbihzdHIsY29udGFpbikge1xuXG4gICAgLy8gc3Ry44Gu5Lit44GrLGNvbnRhaW7jgYzlrZjlnKjjgZfjgZ/jgolcbiAgICBpZiAoIHN0ci5pbmRleE9mKGNvbnRhaW4pICE9IC0xICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICAvLyAw5Z+L44KB44GnMuahgeOBq+OBmeOCi+mWouaVsFxuICBhZGQwKHN0cixudW09LTIpe1xuICAgIFxuICAgIHJldHVybiAoIFwiMDAwMDAwMDAwMDAwXCIgKyBzdHIgKS5zdWJzdHIoIG51bSApO1xuXG4gIH1cblxuICBmbG9hdEZvcm1hdCggbnVtYmVyLCBuICkge1xuXG4gICAgdmFyIF9wb3cgPSBNYXRoLnBvdyggMTAgLCBuICkgO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCBudW1iZXIgKiBfcG93ICkgLyBfcG93IDtcblxuICB9XG4gICAgXG4gIC8vIOWApOauteihqOiomFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcmljZShudW0pIHtcblxuICAgIHJldHVybiBTdHJpbmcobnVtKS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csICckMSwnKTtcblxuICB9XG5cbiAgLy8g5paH5a2X5YiX44KS5Y+N6LuiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBzdHIgOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyByZXR1cm4gOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdHJSZXZlcnNlKHN0cikge1xuXG4gICAgdmFyIGksIGxlbiwgcmVzO1xuICAgIHJlcyA9IFwiXCI7XG4gICAgbGVuID0gc3RyLmxlbmd0aDtcbiAgICBpID0gMTtcbiAgICB3aGlsZSAoaSA8PSBsZW4pIHtcbiAgICAgIHJlcyArPSBzdHIuc3Vic3RyKC1pLCAxKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcblxuICB9XG4gIFxuICAvLyDmloflrZfliJfjga7lhajnva7mj5tcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCAgOiDmloflrZfliJdcbiAgLy8gQG9lZyAgOiDnva7mj5vliY3jga7mloflrZfliJdcbiAgLy8gQGRlc3QgOiDnva7mj5vlvozjga7mloflrZfliJdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVwbGFjZUFsbCh2YWwsIG9yZywgZGVzdCkge1xuXG4gICAgcmV0dXJuIHZhbC5zcGxpdChvcmcpLmpvaW4oZGVzdCk7XG5cbiAgfSAgICBcbiAgXG4gIHN0clJlcGxhY2Uoc3RyLCBiZWZvcmUsIGFmdGVyKSB7XG5cbiAgICB2YXIgciA9IG5ldyBSZWdFeHAoIGJlZm9yZSwgJ2cnKTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZSggciAsIGFmdGVyICk7XG5cbiAgfSAgICBcbiAgXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0ZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXROb3coKSB7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCk7XG5cbiAgfVxuXG4gIGVsYXBzZWQoKSB7XG5cbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWU7XG5cbiAgfVxuXG4gIG0oKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vciggdGhpcy5lbGFwc2VkVGltZSArIDEwMCAvIDYwICk7XG5cbiAgfVxuXG4gIHMoKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmVsYXBzZWRUaW1lIC8gMTAwMCk7XG5cbiAgfVxuXG4gIG1zKCkge1xuXG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZFRpbWU7XG4gICAgXG4gIH1cblxuICB0aW1lKCkge1xuXG4gICAgdGhpcy5nZXROb3coKTtcblxuICAgIHRoaXMuaG91ciA9IHRoaXMubm93LmdldEhvdXJzKCk7ICAgICAgICAgIC8vIOaZglxuICAgIHRoaXMubWludXRlID0gdGhpcy5ub3cuZ2V0TWludXRlcygpOyAgICAgIC8vIOWIhlxuICAgIHRoaXMuc2Vjb25kID0gdGhpcy5ub3cuZ2V0U2Vjb25kcygpO1xuICAgIHRoaXMubWlsbFNlY29uZCA9IHRoaXMubm93LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIH1cblxuICBkYXRlKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldERhdGUoKTtcblxuICB9XG5cbiAgbW9udGhzKCkge1xuXG4gICAgdmFyIG1vbnRoZGF5cyA9IG5ldyBBcnJheSgzMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxKTtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRNb250aCgpICsgMTtcblxuICB9XG5cbiAgeWVhcigpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRGdWxsWWVhcigpO1xuXG4gIH1cblxuICBkYXkoKSB7XG5cbiAgICAvLyDmm5zml6UgKOaXpeacrOiqnilcbiAgICB2YXIgd2Vla0RheUpQID0gW1wi5pelXCIsXCLmnIhcIixcIueBq1wiLFwi5rC0XCIsXCLmnKhcIixcIumHkVwiLFwi5ZyfXCJdIDtcbiAgICB2YXIgd0RKID0gd2Vla0RheUpQW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgICAvLyDmm5zml6UgKOiLseiqnilcbiAgICB2YXIgd2Vla0RheUVOID0gW1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdIDtcbiAgICB2YXIgd0RFID0gd2Vla0RheUVOW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgfVxuICBcbiAgLy8g5pWw5pel5b6M44GuRGF0ZeOCquODluOCuOOCp+OCr+ODiOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhZnRlckRheShkYXRlLCBudW0pIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIE51bWJlcihudW0pICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0YSB0eXBlIGNoZWNrXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzT2JqZWN0KHZhbHVlLCBpZ25vcmVBcnJheSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cblxuICBpc051bWJlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH1cblxuICBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBpc051bGwodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbiAgfVxuXG4gIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgb3RoZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldEltZ1NQU2l6ZSAoJHRhcmdldCl7XG5cbiAgICAvLyByZXNwb25zaXZlIHNw44Gu44Go44GN5Yem55CGXG4gICAgaWYgKCF0aGlzLmlzUmVzU1ApIHJldHVybjtcbiAgICAvLyDkuIDluqbjgaDjgZHlh6bnkIZcbiAgICAvLyBpZiAodGhpcy5pc1NldFNQU2l6ZSkgcmV0dXJuO1xuICAgIC8vIHRoaXMuaXNTZXRTUFNpemUgPSB0cnVlO1xuXG4gICAgdmFyICRpbWcgPSAkdGFyZ2V0LFxuICAgICAgICBsZW4gPSAkaW1nLmxlbmd0aDtcblxuICAgICRpbWcuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgdmFyIHcgPSBNYXRoLmZsb29yKCQodGhpcykud2lkdGgoKSAvIDIpLFxuICAgICAgICAgICAgaCA9IE1hdGguZmxvb3IoJCh0aGlzKS5oZWlnaHQoKSAvIDIpO1xuXG4gICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAnd2lkdGgnOiB3LFxuICAgICAgICAgICAgJ2hlaWdodCc6IGgsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsZW4gPT0gaSArIDEpICQod2luZG93KS50cmlnZ2VyKCdzZXRTcFppZUVuZCcpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAg44K544Oe44Ob5pON5L2c54Sh5Yq5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRQcmV2ZW50KCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCd0b3VjaG1vdmUubm9Db250cm9sJywgZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO30pO1xuXG4gIH1cblxuICByZW1vdmVQcmV2ZW50KCkge1xuXG4gICAgJCh3aW5kb3cpLm9mZigndG91Y2htb3ZlLm5vQ29udHJvbCcpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIGhvc3QscHJvdGNvbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJvdG9jb2woKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgfVxuICAgIFxuICBob3N0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIC8vIHJldHVybiBsb2NhdGlvbi5ob3N0XG5cbiAgfVxuXG4gIHBvcnQoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucG9ydDtcblxuICB9XG4gICAgICAgIFxuICBwYXRoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdChlKSB7XG5cbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG5cbiAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBkaXNhYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ud2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2Rlcm4gc3RhbmRhcmRcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXG4gICAgd2luZG93Lm9udG91Y2htb3ZlICA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vYmlsZVxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biAgPSB0aGlzLnByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cztcblxuICB9XG5cbiAgZW5hYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvVXRpbC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEZ1bmNcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuYyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmJsYW5rKCk7XG4gICAgdGhpcy5kZWJ1Z2dlcigpO1xuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgdGhpcy5leHBhbmRqUXVlcnkoKTtcblxuICB9XG5cbiAgYmxhbmsoKSB7XG5cbiAgICAkKCgpPT57JCgnLmJsYW5rJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpO30pO1xuXG4gIH1cblxuICBkZWJ1Z2dlcigpIHtcblxuICAgIC8vIOODh+ODkOODg+OCsOODouODvOODieWIh+abv1xuICAgIHZhciBSRUxFQVNFID0gZ2IuaW4uY29uZi5SRUxFQVNFO1xuXG4gICAgLy8g572u5o+b5a++6LGh44Gu44Oh44K944OD44OJ44KS6YWN5YiX44Go44GX44Gm5L+d5oyB44GZ44KLXG4gICAgdmFyIG1ldGhvZHMgPSBbXG4gICAgICAnbG9nJyxcbiAgICAgICdkZWJ1ZycsXG4gICAgICAnaW5mbycsXG4gICAgICAnd2FybicsXG4gICAgICAnZXJyb3InLFxuICAgICAgJ2RpcicsXG4gICAgICAndHJhY2UnLFxuICAgICAgJ2Fzc2VydCcsXG4gICAgICAnZGlyeG1sJyxcbiAgICAgICdncm91cCcsXG4gICAgICAnZ3JvdXBFbmQnLFxuICAgICAgJ3RpbWUnLFxuICAgICAgJ3RpbWVFbmQnLFxuICAgICAgJ2NvdW50JyxcbiAgICAgICdwcm9maWxlJyxcbiAgICAgICdwcm9maWxlRW5kJ1xuICAgIF07XG5cbiAgICAvLyBjb25zb2xl44GM5L2/44GI44Gq44GE5aC05ZCI44Gv56m644Gu44Kq44OW44K444Kn44Kv44OI44KS6Kit5a6a44GX44Gm44GK44GPXG4gICAgaWYoIHR5cGVvZiB3aW5kb3cuY29uc29sZSA9PT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgd2luZG93LmNvbnNvbGUgPSB7fTtcbiAgICB9XG5cbiAgICAvLyDlkITjg6Hjgr3jg4Pjg4njgpJ3aW5kb3fjgbjnm7TmjqXov73liqDjgZfjgabooYzjgY9cbiAgICBmb3IoIHZhciBpIGluIG1ldGhvZHMgKXtcbiAgICAgIChmdW5jdGlvbiggbSApe1xuXG4gICAgICAgLy8gY29uc29sZeOBq+OBguOCi++8n+ODh+ODkOODg+OCsOODouODvOODieOBr+acieWKue+8n2NvbnNvbGXjga7jgoLjga7jga/plqLmlbDvvJ9cbiAgICAgICBpZiggY29uc29sZVttXSAmJiAhUkVMRUFTRSAmJiB0eXBlb2YgY29uc29sZVttXSA9PT0gXCJmdW5jdGlvblwiICl7XG4gICAgICAgIHdpbmRvd1ttXSA9IGNvbnNvbGVbbV0uYmluZChjb25zb2xlKTtcbiAgICAgICB9IGVsc2Uge+OAgC8vIGRlYnVnTW9kZeOBjGZhbHNlLOOCguOBl+OBj+OBr+ipsuW9k+ODoeOCveODg+ODieOBjOWtmOWcqOOBl+OBquOBhOWgtOWQiOOBr+OAgeepuuOBruODoeOCveODg+ODieOCkueUqOaEj+OBmeOCi1xuICAgICAgICB3aW5kb3dbbV0gPSBmdW5jdGlvbigpe307XG4gICAgICAgfVxuXG4gICAgICB9KSggbWV0aG9kc1tpXSApO1xuICAgIH1cblxuICB9XG5cbiAgcHJlcGVuZChwYXJhbSkge1xuXG4gICAgJCgnYm9keScpLnByZXBlbmQocGFyYW0pO1xuXG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XG5cbiAgICB2YXIgRlBTID0gMTAwMC82MDtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIGNocm9tZeOChOacgOaWsOOBrlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIOWPpOOBhGZpcmVmb3jnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAgLy8gc2FmYXJpNuS7peWJjeOAgWlPUzYgc2FmYXJp55SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgRlBTKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCB0aW1lciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07ICAgICAgXG5cbiAgfVxuXG4gIGV4cGFuZGpRdWVyeSgpIHtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgdzowLCBcbiAgICAgIGg6MCwgXG4gICAgICBhZGp1c3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0VzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0SDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBjaGVja0Nzc0JsZW5kKCkge1xuXG4gICAgaWYgKCdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1MpIHtcbiAgICAgIGlmICghd2luZG93LkNTUy5zdXBwb3J0cygnbWl4LWJsZW5kLW1vZGUnLCAnc29mdC1saWdodCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvZyhnYi5pbi51LmlzSUUpO1xuXG4gICAgaWYgKGdiLmluLnUuaXNJRSkge1xuICAgICAgXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIFxuICAgIH07XG5cbiAgfVxuXG4gIG5vdFNhdmVJbWcoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBwY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG5cbiAgICAgICQoKCk9PntcbiAgICAgICAgJChcImltZ1wiKS5vbihcImNvbnRleHRtZW51XCIsKCk9PntcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBzcCBhbmRyb2lkXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgdiA9IGdiLmluLnUuaXNBbmRyb2lkVmVyc2lvbigpO1xuXG4gICAgaWYgKHY9PXVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGlmICh2PDUpIHtcblxuICAgICAgdmFyIHRpbWVyO1xuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoc3RhcnRcIiwoKT0+e1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBhbGVydChcIueUu+WDj+OBr+S/neWtmOOBp+OBjeOBvuOBm+OCk1wiKVxuICAgICAgICB9LDUwMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaGVuZFwiLCgpPT57XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pICAgICAgXG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9GdW5jLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBSZWFkeU1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IFJlYWR5UGVyY2VudCBmcm9tICcuLi8uLi9GdW5jL1JlYWR5UGVyY2VudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWR5TWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuY29tcGxldGVkID0gMDtcbiAgICB0aGlzLnRvdGFsID0gMDtcbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuXG5cbiAgICB0aGlzLm9uQ29tcGxldGVkRnVuYyA9ICgpPT57fTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdGhpcy5yZWFkeVBlcmNlbnQgPSBuZXcgUmVhZHlQZXJjZW50KCk7XG5cbiAgfVxuXG4gIG9uQ29tcGxldGUoKSB7XG5cbiAgICAvLyB1cGRhdGXlh6bnkIbjgpLjgoTjgoHjgotcbiAgICBnYi5pbi51cC5yZW1vdmUoJ3JlYWR5UGVyY2VudCcsIHRoaXMucmVhZHlQZXJjZW50LnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIOa6luWCmeWujOS6huW+jOOBruWHpueQhlxuICAgIHRoaXMub25Db21wbGV0ZWRGdW5jKCk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuICAgICAgIFxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9SZWFkeU1nci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUmVhZHlQZXJjZW50XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkeVBlcmNlbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy4kbG9hZGluZyA9ICQoJyNsb2FkaW5nJyk7XG4gICAgdGhpcy4kYmFyID0gJCgnLmxvYWRpbmdCYXInKTtcbiAgICB0aGlzLiRwZXJjZW50ID0gJCgnLmxvYWRpbmdQZXJjZW50Jyk7XG5cbiAgICB0aGlzLmlzTG9jayA9IGZhbHNlO1xuICAgIHRoaXMuc2V0VGltZW91dExvY2sgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIGlmICghZ2IuaW4uY29uZi53ZWJGb250TG9hZGVkKSByZXR1cm47XG5cbiAgICB2YXIgdGFyZ2V0ID0gKGdiLmluLnJtLmNvbXBsZXRlZCAvIGdiLmluLnJtLnRvdGFsKSAqIDEwMDtcblxuICAgIGdiLmluLnJtLmN1cnJlbnQgKz0gKHRhcmdldCAtIGdiLmluLnJtLmN1cnJlbnQpICogMC4xO1xuICAgIC8vIHRoaXMuJGJhci5jc3MoeyB3aWR0aDogZ2IuaW4ucm0uY3VycmVudCArICclJyB9KTsgLy9wZXJjZW50IOS8uOOBsOOBmVxuICAgIHRoaXMuJHBlcmNlbnQudGV4dCggTWF0aC5mbG9vcihnYi5pbi5ybS5jdXJyZW50KSArICclJyk7XG5cbiAgICAvLyDntYLkuoblh6bnkIZcbiAgICBpZiAoZ2IuaW4ucm0uY3VycmVudCA+PSAxMDAgJiYgIXRoaXMuaXNMb2NrKSB7XG4gICAgICB0aGlzLmlzTG9jayA9IHRydWU7XG4gICAgICBnYi5pbi5ybS5vbkNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLy8gY3VycmVudCDjgYwgOTkuOSDjgojjgorlpKfjgY3jgZHjgozjgbAgMTAwIOOBqOimi+OBquOBl+OBpue1guS6huWHpueQhuOBuFxuICAgIGlmIChnYi5pbi5ybS5jdXJyZW50ID4gOTkuOSkge1xuICAgICAgZ2IuaW4ucm0uY3VycmVudCA9IDEwMDtcbiAgICB9XG5cbiAgICAvLyBpZTEx44GvLDk544Gr44Gq44Gj44Gm44CBNeenkue1jOOBo+OBpuOCgjEwMOOBp+OBquOBkeOCjOOBsOOAgeW8t+WItueahOOBq+OAgeihqOekulxuICAgIC8vIOOBneOBrumam+OAgWNvbXBsZXRl44GX44Gm54Sh44GR44KM44Gw6IOM5pmv44Gv6Z2Z5q2i55S744GrXG4gICAgLy8gaWYgKGdiLmluLnUuaXNJRTExKSB7XG5cbiAgICBpZiAoZ2IuaW4ucm0uY3VycmVudCA+IDk5ICYmICF0aGlzLnNldFRpbWVvdXRMb2NrKSB7XG4gICAgdGhpcy5zZXRUaW1lb3V0TG9jayA9IHRydWU7XG5cbiAgICBsb2coJzk5ISEhIScpO1xuICAgICAgLy8gZ2IuaW4ucm0uY3VycmVudCA9IDk5O1xuXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XG5cbiAgICAgICAgbG9nKCc1ISEhJylcblxuICAgICAgICBpZiAoZ2IuaW4ucm0uY3VycmVudCAhPT0gMTAwKSB7XG5cbiAgICAgICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICAgICAgICAkKCcuYmdPdmVybGF5SW1nJykuYWRkQ2xhc3MoJ2lzQWN0aXZlJyk7XG5cbiAgICAgICAgICBsb2coJ+WvvuW/nO+8ge+8gScpXG5cbiAgICAgICAgfTtcblxuICAgICAgICBcbiAgICAgIH0sNTAwMCk7XG5cbiAgICB9O1xuXG4gICAgLy8gfTtcblxuICB9XG5cbiAgcmVtb3ZlKCkge1xuXG5cbiAgICBUd2Vlbk1heFxuICAgICAgLnRvKHRoaXMuJGxvYWRpbmcsIDIuOCwge1xuICAgICAgICBzY2FsZTogMS4yLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZUluT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgdGhpcy4kbG9hZGluZy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSkgICAgXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnVwLmFkZCgncmVhZHlQZXJjZW50Jyx0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvUmVhZHlQZXJjZW50LmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICB1cGRhdGVNYW5hZ2VyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5jbnQgPSAwO1xuICAgIHRoaXMudXBkYXRlTGlzdCA9IFtdO1xuICAgIHRoaXMubGVuID0gMDtcbiAgICB0aGlzLlRpbWVyID0gbnVsbDtcbiAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMudXBkYXRlTGlzdCkgdGhpcy51cGRhdGVMaXN0W2ldLmZ1bmMoKTtcblxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5jbnQrKztcblxuICAgIHRoaXMuVGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIGlmICh0aGlzLmlzU3RvcCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5UaW1lcik7XG4gICAgXG5cbiAgfVxuXG4gIHN0b3AoKSB7XG5cbiAgICB0aGlzLmlzU3RvcCA9IHRydWU7XG5cbiAgfVxuXG4gIHJlc3VtZSgpIHtcblxuICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XG4gICAgdGhpcy5sb29wKCk7XG5cbiAgfVxuXG4gIGFkZChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy51cGRhdGVMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuXG4gIHJlbW92ZShuYW1lKSB7XG5cbiAgICB2YXIgdGFyZ2V0ID0ge25hbWU6bmFtZSxmdW5jOigpPT57fX07XG5cbiAgICBVcGRhdGVNZ3IuYXJyUmVtb3ZlKHRoaXMudXBkYXRlTGlzdCwgdGFyZ2V0KTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICDpnZnnmoTjg6Hjg7Pjg5BcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0YXRpYyBhcnJSZW1vdmUoYXJyICwgdGFyZ2V0KSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSB0YXJnZXQubmFtZSl7XG4gICAgICAgIGFyci5zcGxpY2UoIGkgLCAxICkgO1xuICAgICAgICBpLS07XG4gICAgICAgIGxlbi0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9VcGRhdGVNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFJlc2l6ZU1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzaXplTWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMucmVzaXplTGlzdCA9IFtdO1xuICAgIHRoaXMud3MgPSB7dzowLCBoOjAsIG9sZFc6LTEsIG9sZEg6LTF9O1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oZSl7c2VsZi5vblJlc2l6ZS5jYWxsKHNlbGYsZSk7fSk7XG4gICAgdGhpcy5nZXRXaW5kb3dTaXplKCk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKGUpIHtcblxuICAgIHRoaXMuZ2V0V2luZG93U2l6ZSgpO1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnJlc2l6ZUxpc3QpIHRoaXMucmVzaXplTGlzdFtpXS5mdW5jKCk7XG5cbiAgfVxuXG4gIFcoKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLndzLnc7XG4gICAgXG4gIH1cbiAgXG4gIEgoKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLndzLmg7XG4gIFxuICB9XG5cbiAgZ2V0V2luZG93U2l6ZSgpe1xuXG4gICAgdmFyIHcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHRoaXMud3Mub2xkVyA9IHRoaXMud3MudztcbiAgICB0aGlzLndzLm9sZEggPSB0aGlzLndzLmg7XG4gICAgdGhpcy53cy53ID0gdztcbiAgICB0aGlzLndzLmggPSBoO1xuXG4gIH1cblxuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMucmVzaXplTGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cblxuICByZW1vdmUobmFtZSkge1xuXG4gICAgUmVzaXplTWdyLmFyclJlbW92ZSh0aGlzLnJlc2l6ZUxpc3QsIG5hbWUpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIOmdmeeahOODoeODs+ODkFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGljIGFyclJlbW92ZShhcnIgLCBuYW1lKSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSBuYW1lKXtcbiAgICAgICAgYXJyLnNwbGljZSggaSAsIDEgKSA7XG4gICAgICAgIGktLTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Jlc2l6ZU1nci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU2Nyb2xsTWdyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zY3JvbGxMaXN0ID0gW107XG4gICAgdGhpcy5zY3JvbGxFbmRMaXN0ID0gW107XG4gICAgdGhpcy53ID0gMDt0aGlzLmggPSAwO1xuICAgIHRoaXMuc3QgPSAwOyAvLyDnj77lnKjjga5zY3JvbGwgdG9wXG4gICAgdGhpcy5zYiA9IDA7IC8vIOePvuWcqOOBrnNjcm9sbCBib3R0b21cbiAgICB0aGlzLnN2ID0gMDsgLy8g54++5Zyo44Gu44K544Kv44Ot44O844Or6YePXG5cbiAgICB0aGlzLlNUQW1vdW50ID0gMDtcbiAgICB0aGlzLm9mZnNldCA9IDA7XG5cbiAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmdldFdpbmRvd1NpemUoKTtcbiAgICB0aGlzLmFkZCgnZW5kJyx0aGlzLmVuZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgYWRkKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLnNjcm9sbExpc3QucHVzaChvYmopO1xuICAgIFxuICB9XG5cbiAgcmVtb3ZlKG5hbWUpIHtcblxuICAgIFNjcm9sbE1nci5hcnJSZW1vdmUodGhpcy5zY3JvbGxMaXN0LCBuYW1lKTtcblxuICB9XG5cbiAgcmVtb3ZlKHRhcmdldCkge1xuXG4gICAgU2Nyb2xsTWdyLmFyclJlbW92ZSh0aGlzLnNjcm9sbExpc3QsIHRhcmdldCk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKGUpIHtcblxuICAgIHRoaXMuZ2V0V2luZG93U2l6ZSgpO1xuXG4gIH1cblxuICBvblNjcm9sbChlKSB7XG5cbiAgICBpZiAodGhpcy5pc1N0YXJ0KSB7XG4gICAgICB0aGlzLmlzU3RhcnQgPSBmYWxzZTtcbiAgICAgIC8vIGxvZygncmVzaXplU3RhcnQnKTtcbiAgICAgIC8vIOacgOWIneOBoOOBkeOBruWHpueQhlxuICAgIH07XG5cbiAgICB0aGlzLnN0ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIHRoaXMuc2IgPSB0aGlzLnN0ICsgdGhpcy5oO1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnNjcm9sbExpc3QpIHRoaXMuc2Nyb2xsTGlzdFtpXS5mdW5jKCk7XG5cbiAgfVxuXG4gIG9uTW91c2VXaGVlbChlLGRlbHRhLGRlbHRhWCxkZWx0YVkpIHtcblxuICAgIHRoaXMuU1RBbW91bnQgPSBkZWx0YVk7XG4gICAgaWYgKGdiLmluLnUuaXNXaW4oKSkgdGhpcy5TVEFtb3VudCAqPSA2MDtcbiAgICBpZiAoZ2IuaW4udS5pc0ZGKCkgJiYgIWdiLmluLnUuaXNXaW4oKSkgdGhpcy5TVEFtb3VudCAqPSA2MDtcbiAgICAvLyBpZiAoTWF0aC5hYnModGhpcy5TVEFtb3VudCkgPiAxMCkgdGhpcy5TVEFtb3VudCAqPSAwLjQ7XG4gICAgdGhpcy5vZmZzZXQgKz0gdGhpcy5TVEFtb3VudDtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zY3JvbGxMaXN0KSB0aGlzLnNjcm9sbExpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBnZXRXaW5kb3dTaXplKCl7XG5cbiAgICB0aGlzLncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgfVxuXG4gIGVuZChlKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5UaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuVGltZXIpO1xuICAgIHRoaXMuVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5pc1N0YXJ0ID0gdHJ1ZTtcbiAgICAgIC8vIGxvZygncmVzaXplRW5kJyk7XG5cbiAgICAgIGZvciAodmFyIGkgaW4gc2VsZi5zY3JvbGxFbmRMaXN0KSBzZWxmLnNjcm9sbEVuZExpc3RbaV0oKTtcblxuICAgIH0sIDIwMCk7XG5cbiAgfVxuXG4gIGFkZEZpeGVkT2JqZWN0U2Nyb2xsKCR0YXJnZXQpIHtcblxuICAgIHRoaXMuc2Nyb2xsTGlzdC5wdXNoKGZ1bmN0aW9uKCl7XG5cbiAgICAgICR0YXJnZXQuY3NzKFwibGVmdFwiLCAtJCh3aW5kb3cpLnNjcm9sbExlZnQoKSk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICAgICQod2luZG93KS5vbigncmVzaXplJywgKGUpPT57dGhpcy5vblJlc2l6ZShlKTt9KTtcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIChlKT0+e3RoaXMub25TY3JvbGwoZSk7fSk7XG4gICAgJChkb2N1bWVudCkub24oJ21vdXNld2hlZWwnLCAoZSxkZWx0YSxkZWx0YVgsZGVsdGFZKT0+e3RoaXMub25Nb3VzZVdoZWVsKGUsZGVsdGEsZGVsdGFYLGRlbHRhWSk7fSk7XG5cbiAgfVxuICAgICAgIFxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAg6Z2Z55qE44Oh44Oz44OQXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0aWMgYXJyUmVtb3ZlKGFyciAsIG5hbWUpIHtcblxuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIHZhciBjaGVjaztcbiAgICBmb3IoIHZhciBpID0gMCA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIGNoZWNrID0gYXJyWyBpIF07XG5cbiAgICAgIGlmKCBjaGVjay5uYW1lID09IG5hbWUpe1xuICAgICAgICBhcnIuc3BsaWNlKCBpICwgMSApIDtcbiAgICAgICAgaS0tO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvU2Nyb2xsTWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBNb3VzZU1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCR0YXJnZXQgPSAkKGRvY3VtZW50KSkge1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldDtcblxuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcblxuICAgIHRoaXMuY3ggPSAwO1xuICAgIHRoaXMuY3kgPSAwO1xuXG4gICAgdGhpcy5tb3VzZU1vdmVMaXN0ID0gW3tuYW1lOidkZWYnLGZ1bmM6KCk9Pnt9fV07XG4gICAgdGhpcy5tb3VzZU1vdmVTdGFydExpc3QgPSBbe25hbWU6J2RlZicsZnVuYzooKT0+e319XTtcbiAgICB0aGlzLm1vdXNlTW92ZUVuZExpc3QgPSBbe25hbWU6J2RlZicsZnVuYzooKT0+e319XTtcblxuICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XG4gICAgdGhpcy5UaW1lciA9IG51bGw7XG4gICAgdGhpcy5lbmRUaW1lID0gMTA7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICB0aGlzLmFkZCgnb25FbmQnLCB0aGlzLm9uRW5kLmJpbmQodGhpcykpO1xuXG4gIH1cblxuICBvblRvdWNobW92ZShlKSB7XG5cbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnggPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7IFxuICAgIHRoaXMueSA9IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcblxuICB9XG5cbiAgb25Nb3VzZW1vdmUoZSkge1xuXG4gICAgLy8gbG9nKHRoaXMubW91c2VNb3ZlTGlzdCk7XG5cbiAgICBpZiAodGhpcy5pc1N0YXJ0KSB7XG4gICAgICB0aGlzLmlzU3RhcnQgPSBmYWxzZTtcblxuICAgICAgLy8g5pyA5Yid44Gg44GR44Gu5Yem55CGXG4gICAgICAvLyBsb2coJ21vdmVTdGFydCcpO1xuXG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMubW91c2VNb3ZlU3RhcnRMaXN0KSB0aGlzLm1vdXNlTW92ZVN0YXJ0TGlzdFtpXS5mdW5jKCk7XG5cbiAgICB9O1xuXG4gICAgaWYgKGUub2Zmc2V0WD09dW5kZWZpbmVkKSB7IC8vIHRoaXMgd29ya3MgZm9yIEZpcmVmb3hcbiAgICAgICB0aGlzLnggPSBlLnBhZ2VYIC0gdGhpcy4kdGFyZ2V0Lm9mZnNldCgpLmxlZnQ7XG4gICAgICAgdGhpcy55ID0gZS5wYWdlWSAtIHRoaXMuJHRhcmdldC5vZmZzZXQoKS50b3A7XG4gICAgIH0gZWxzZSB7IC8vIHdvcmtzIGluIEdvb2dsZSBDaHJvbWVcbiAgICAgICB0aGlzLnggPSBlLnBhZ2VYIC0gJCh3aW5kb3cpLnNjcm9sbExlZnQoKTtcbiAgICAgICB0aGlzLnkgPSBlLnBhZ2VZIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICB9XG5cbiAgICB0aGlzLmN4ID0gKCBlLmNsaWVudFggLSBnYi5pbi5yLlcoKS8yICk7XG4gICAgdGhpcy5jeSA9ICggZS5jbGllbnRZIC0gZ2IuaW4uci5IKCkvMiApO1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLm1vdXNlTW92ZUxpc3QpIHRoaXMubW91c2VNb3ZlTGlzdFtpXS5mdW5jKCk7XG5cbiAgfVxuXG4gIG9uRW5kKGUpIHtcblxuICAgIGlmICh0aGlzLlRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5UaW1lcik7XG4gICAgdGhpcy5UaW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XG5cbiAgICAgIC8vIGxvZygnbW92ZUVuZCcpO1xuXG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMubW91c2VNb3ZlRW5kTGlzdCkgdGhpcy5tb3VzZU1vdmVFbmRMaXN0W2ldLmZ1bmMoKTtcblxuICAgIH0sIHRoaXMuZW5kVGltZSk7XG5cbiAgfVxuXG4gIGFkZChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy5tb3VzZU1vdmVMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuIFxuICBhZGRTdGFydCAobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMubW91c2VNb3ZlU3RhcnRMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuXG4gIGFkZEVuZCAobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMubW91c2VNb3ZlRW5kTGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cblxuICByZW1vdmUobmFtZSkge1xuXG4gICAgTW91c2VNZ3IuYXJyUmVtb3ZlKHRoaXMubW91c2VNb3ZlTGlzdCwgbmFtZSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAg6Z2Z55qE44Oh44Oz44OQXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0aWMgYXJyUmVtb3ZlKGFyciAsIG5hbWUpIHtcblxuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIHZhciBjaGVjaztcbiAgICBmb3IoIHZhciBpID0gMCA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIGNoZWNrID0gYXJyWyBpIF07XG5cbiAgICAgIGlmKCBjaGVjay5uYW1lID09IG5hbWUpe1xuICAgICAgICBhcnIuc3BsaWNlKCBpICwgMSApIDtcbiAgICAgICAgaS0tO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxuICByZW1vdmVFdmVudHMoKXtcblxuICAgIHRoaXMuJHRhcmdldC5vZmYoXCJ0b3VjaG1vdmUuTW91c2VNZ3JcIik7XG4gICAgdGhpcy4kdGFyZ2V0Lm9mZihcIm1vdXNlbW92ZS5Nb3VzZU1nclwiKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCl7XG5cbiAgICB0aGlzLiR0YXJnZXQub24oXCJ0b3VjaG1vdmUuTW91c2VNZ3JcIiwgKGUpPT57dGhpcy5vblRvdWNobW92ZShlKTt9KTtcbiAgICB0aGlzLiR0YXJnZXQub24oXCJtb3VzZW1vdmUuTW91c2VNZ3JcIiwgKGUpPT57dGhpcy5vbk1vdXNlbW92ZShlKTt9KTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL01vdXNlTWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMb2FkTWdyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyLmpzJztcbmltcG9ydCBTZWMwMVZpZGVvIGZyb20gJy4uL0Rpc3BsYXkvVUkvU2VjMDFWaWRlby5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIC8vIOOBneOBruS7llxuICAgIC8vIOOCveODvOOCt+ODo+ODq+OCueOCr+ODquODl+ODiOOBquOBqVxuICAgIC8vIHRoaXMuc25zU2NyaXB0KCk7XG5cbiAgICAvLyB0aGlzLmxvYWRZb3V0dWJlU2NyaXB0KCk7XG5cbiAgICAvLyBzZWN0aW9uMDLjgafkvb/jgYblpKfph4/jga7nlLvlg4/jgpLjg63jg7zjg4kgLy8gd2ViIHdvcmtlcuOBquOBqeOCguS9v+OBo+OBplxuICAgIC8vIHRoaXMuc2VjMDJJbWcoKTtcblxuICAgIC8vIHRoaXMud2ViRm9udCgpO1xuXG4gIH1cblxuICBsb2FkWW91dHViZVNjcmlwdCgpIHtcblxuICAgIHZhciBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7XG5cbiAgICB2YXIgbGVuID0gMTtcbiAgICBnYi5pbi5ybS50b3RhbCArPSBsZW47IC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuICAgIGlmIChnYi5pbi51LmlzU1ApIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuXG4gICAgdmFyIGNiID0gKCk9PntcblxuICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG5cbiAgICB9XG5cbiAgICBsb2FkZXIueW91dHViZUlmcmFtZVNjcmlwdChjYik7XG5cbiAgfVxuXG4gIHNlYzAySW1nKCkge1xuXG4gICAgLy8gYmdWaWRlb1RpbGXnlKjjga7pgKPnlarnlLvlg4/jga7oqq3jgb/ovrzjgb9cbiAgICBnYi5pbi5sb2FkU2VjMDJJbWcgPSB0aGlzLmxvYWRlciA9IG5ldyBMb2FkZXIoKTtcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcbiAgICAgIHZhciBsZW4gPSBnYi5pbi5jb25mLnNlYzAySW1nTnVtO1xuICAgICAgZ2IuaW4ucm0udG90YWwgKz0gbGVuO+OAgC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuICAgICAgdmFyIHBhdGggPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL21vdmllL2JnSW1nLyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsZW4gPSAxOTtcbiAgICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjvjgIAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcbiAgICAgIHZhciBwYXRoID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9tb3ZpZS9iZ0ltZ1NQLyc7XG4gICAgfVxuXG4gICAgdmFyIGNiID0gKCk9PntcbiAgICAgIC8vIGdiLmluLlNlYzAyQmcuY3JlYXRlKCk7XG4gICAgfVxuICAgIHZhciBjYjAyID0gKCk9PntcbiAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgIH1cblxuICAgIC8vIHRoaXMubG9hZGVyLmltZ1NlcmlhbExvYWQobGVuLHBhdGgsJ3RmbnlfJyxjYixjYjAyKTtcbiAgICB0aGlzLmxvYWRlci5pbWcobGVuKzEscGF0aCwndGZueV8nLGNiLGNiMDIpO1xuXG4gIH1cblxuICBzZWN0aW9uMDRQcm9kdWN0U2hhZGVyKCkge1xuXG4gICAgdmFyIHNoYWRlcnMgPSBbXTtcbiAgICB2YXIgc2hhZGVyTG9hZExpc3QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGdiLkNsb2NrLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuUGxhc21hLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5TZXBpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuTW9zYWljLFxuICAgICAgICAgICAgICAgICAgICAgICBnYi5ab29tQmx1cixcbiAgICAgICAgICAgICAgICAgICAgICAgZ2IuWm9vbUJsdXIsXG4gICAgICAgICAgICAgICAgICAgICAgIGdiLlRyYW5zaXRpb24wMixcbiAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICB2YXIgbGVuID0gc2hhZGVyTG9hZExpc3QubGVuZ3RoO1xuICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjsgLy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG5cbiAgICB2YXIgc2hhZGVyU2VyaWFsTG9hZCA9IChsZW4sIGNiKT0+e1xuXG4gICAgICAgIHZhciBzaGFkZXIsY250PTA7XG5cbiAgICAgICAgdmFyIGxvYWQgPSAoaSk9PntcbiAgICAgICAgICBzaGFkZXIgPSBuZXcgc2hhZGVyTG9hZExpc3RbaV0oY29tcCk7XG4gICAgICAgICAgc2hhZGVycy5wdXNoKHNoYWRlcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNvbXAgPSBmdW5jdGlvbigpe1xuICAgICAgICAgIGNudCsrO1xuICAgICAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgICAgICAgIGlmKGNudCA9PSBsZW4pIGNiKHNoYWRlcnMpO1xuICAgICAgICAgIGVsc2UgbG9hZChjbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxvYWQoY250KTtcblxuICAgIH1cblxuICAgIHNoYWRlclNlcmlhbExvYWQoc2hhZGVyTG9hZExpc3QubGVuZ3RoLChzaGFkZXJzKT0+e1xuXG4gICAgICB0aGlzLnNoYWRlcnMgPSBzaGFkZXJzO1xuICAgICAgdGhpcy5zZWN0aW9uMDRQcm9kdWN0SW1nKCk7XG5cbiAgICB9KVxuXG4gIH1cblxuICBzZWN0aW9uMDRQcm9kdWN0SW1nKCkge1xuXG4gICAgdmFyIHRleHR1cmVMaXN0ID0gW1xuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L3RpZmZhbnlfaGFuZDEuanBnJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC9icm93bi5wbmcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L2JsdWUucG5nJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC93aGl0ZS5wbmcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L3RpZmZhbnlibHVlLnBuZycsXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3QvcGluay5wbmcnLFxuICAgIF07ICAgICAgXG4gICAgdGhpcy50ZXh0dXJlcyA9IFtdO1xuXG4gICAgdmFyIGxlbiA9IHRleHR1cmVMaXN0Lmxlbmd0aDtcbiAgICBnYi5pbi5ybS50b3RhbCArPSBsZW47IC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuXG4gICAgdmFyIHRleHR1cmVTZXJpYWxMb2FkID0gKGxlbiwgY2IpPT57XG5cbiAgICAgIHZhciB0ZXh0dXJlLGNudD0wO1xuXG4gICAgICB2YXIgbG9hZCA9IChpKT0+e1xuICAgICAgICB0ZXh0dXJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSh0ZXh0dXJlTGlzdFtpXSwgbnVsbCAsY29tcCk7XG4gICAgICAgIHRoaXMudGV4dHVyZXMucHVzaCh0ZXh0dXJlKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBjb21wID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY250Kys7XG4gICAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgICAgICBpZihjbnQgPT0gbGVuKSBjYigpO1xuICAgICAgICBlbHNlIGxvYWQoY250KTtcbiAgICAgIH07XG5cbiAgICAgIGxvYWQoY250KTtcblxuICAgIH1cblxuICAgIHRleHR1cmVTZXJpYWxMb2FkKHRleHR1cmVMaXN0Lmxlbmd0aCwgKCk9PnskKHdpbmRvdykudHJpZ2dlcignb25TZWN0aW9uMDRQcm9kdWN0SW1nJyk7fSk7XG5cbiAgfVxuXG4gIHdlYkZvbnQoKSB7XG5cbiAgICAvLyB3ZWIgZm9udCBsb2FkZXLnlKhwYXJhbVxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBjdXN0b206IHtcbiAgICAgICAgZmFtaWxpZXM6IFtcbiAgICAgICAgICAnQ29ybW9yYW50JyxcbiAgICAgICAgICAnUm9ib3RvIENvbmRlbnNlZCdcbiAgICAgICAgICAvLyAnTm90byBTYW5zIEphcGFuZXNlJyxcbiAgICAgICAgICAvLyAnUm9ib3RvJyxcbiAgICAgICAgICAvLyAnQWxlZ3JleWEgU2FucycsXG4gICAgICAgICAgLy8gJ0FsZWdyZXlhIFNhbnMgU0MnXG4gICAgICAgICAgXSxcbiAgICAgICAgdXJsczogW1xuICAgICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q29ybW9yYW50OjUwMCw1MDBpfFJvYm90bytDb25kZW5zZWQnXG4gICAgICAgICAgLy8gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL2Nzcy9mb250LmNzcycsXG4gICAgICAgICAgLy8gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCwzMDAnLFxuICAgICAgICAgIC8vICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxlZ3JleWErU2Fuczo0MDAsMTAwJyxcbiAgICAgICAgICAvLyAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZWdyZXlhK1NhbnMrU0M6NDAwLDMwMCwxMDAnXG4gICAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGFjdGl2ZTogZnVuY3Rpb24oKSB7IFxuICAgICAgICAgIFxuICAgICAgICAgIGxvZygnd2ViRm9udCEhISEnKTtcbiAgICAgICAgICBnYi5pbi5jb25mLndlYkZvbnRMb2FkZWQgPSB0cnVlO1xuXG4gICAgICB9IFxuICAgIH07XG5cbiAgICB2YXIgbG9hZGVyID0gbmV3IExvYWRlcigpOyAgIFxuICAgIGxvYWRlci53ZWJGb250KGNvbmZpZyk7XG5cbiAgfVxuXG4gIG9uRW5kKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0xvYWRNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIExvYWRlclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIHRoaXMuY250ID0gMDtcblxuICB9XG5cbiAganNvbihzcmMsY2IpIHtcblxuICAgICQuZ2V0SlNPTihzcmMsIChkYXRhKT0+e1xuXG4gICAgICBjYihkYXRhKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICBpbWcobGVuLCBwYXRoLCBuYW1lLCBjYj0oKT0+e30sIGNiMDI9KCk9Pnt9KXtcblxuICAgIHZhciBpLCBpbWcsIG50aCwgY250ID0gMSwgbGlzdCA9IFtdO1xuXG4gICAgZm9yKGkgPSAxO2kgPCBsZW47aSsrKXtcbiAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbnRoID0gZ2IuaW4udS5hZGQwKGksLTUpO1xuICAgICAgdGhpcy5saXN0LnB1c2goaW1nKTtcbiAgICAgIGltZy5vbmxvYWQgPSAoKT0+e1xuICAgICAgICBjYjAyKCk7XG4gICAgICAgIGNudCsrO1xuICAgICAgICBpZihjbnQgPT0gbGVuKSBjYigpO1xuICAgICAgfVxuICAgICAgaW1nLnNyYyA9IHBhdGgrbmFtZStudGgrXCIuanBnXCI7XG4gICAgfVxuXG4gIH1cblxuICAvLyBjYjAyIGxvYWTlrozkuobmmYIg6YO95bqm6YO95bqm55So44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG4gIGltZ1NlcmlhbExvYWQobGVuLCBwYXRoLCBuYW1lLCBjYj0oKT0+e30sY2IwMj0oKT0+e30pe1xuXG4gICAgdmFyIGksIGltZywgbnRoLCBjbnQgPSAwLCBsaXN0ID0gW107XG5cbiAgICB2YXIgbG9hZCA9IChpKT0+e1xuICAgICAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbnRoID0gZ2IuaW4udS5hZGQwKGksLTUpO1xuICAgICAgICB0aGlzLmxpc3QucHVzaChpbWcpO1xuICAgICAgICBpbWcub25sb2FkID0gKCk9PntcbiAgICAgICAgICBjYjAyKCk7XG4gICAgICAgICAgY29tcCgpO1xuICAgICAgICB9XG4gICAgICAgIGltZy5zcmMgPSBwYXRoK25hbWUrbnRoK1wiLmpwZ1wiO1xuICAgIH07XG5cbiAgICB2YXIgY29tcCA9ICgpPT57XG4gICAgICAgIGNudCsrO1xuICAgICAgICBpZihjbnQgPT0gbGVuKXtcbiAgICAgICAgICBjYigpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBsb2FkKGNudCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZChjbnQpO1xuICB9XG5cbiAgYWpheEltZ0xvYWQoY2Ipe1xuXG4gICAgdmFyIGltZ051bSA9ICQoJ2ltZycpLmxlbmd0aDtcbiAgICB2YXIgY250ID0gMDtcblxuICAgICQoJ2ltZycpLmVhY2goZnVuY3Rpb24oaSwgZWxtKSB7XG5cbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gKCk9PntcbiAgICAgICAgICBjbnQrKztcbiAgICAgICAgICBpZiAoY250PT1pbWdOdW0tMSkge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGltZy5zcmMgPSBlbG0uc3JjO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIHZpZGVvKHNyYywgY2I9KCk9Pnt9KSB7XG5cbiAgICB2YXIgaXNMb2FkID0gZmFsc2U7XG4gICAgdGhpcy52aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG5cbiAgICB2YXIgdHlwZSA9IHRoaXMuc3VwcG9ydFZpZGVvRXh0KHRoaXMudmlkZW8pO1xuICAgIGlmICh0eXBlID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5XCIsICgpPT57XG5cbiAgICAgIGlmICghdGhpcy5pc0xvYWQpIHtcbiAgICAgICAgdGhpcy5pc0xvYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZGVvLmxvb3AgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZGVvLnBsYXkoKTtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cblxuICAgIH0sZmFsc2UpO1xuXG4gICAgLy8g44Ot44O844OJXG4gICAgdGhpcy52aWRlby5zcmMgPSBzcmM7XG5cbiAgfVxuXG4gIHlvdXR1YmVJZnJhbWVTY3JpcHQoY2IpIHtcblxuICAgIC8vIElGcmFtZSBQbGF5ZXIgQVBJIOOBruiqreOBv+i+vOOBv1xuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB0YWcub25sb2FkID0gKCk9PntcblxuICAgICAgY2IoKTtcblxuICAgIH07XG5cbiAgICAvLyB0YWcuc3JjID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCI7XG4gICAgdGFnLnNyYyA9IFwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCI7XG4gICAgdmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuXG5cbiAgICAvLyBZb3VUdWJl5YuV55S7XG4gICAgd2luZG93Lm9uWW91VHViZUlmcmFtZVJlYWR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIGxvZygneW91dHViZXJlYWR5Jyk7XG5cblxuICAgIH1cblxuICB9XG5cbiAgc3VwcG9ydFZpZGVvRXh0KCkge1xuXG4gICAgdmFyIGV4dCA9IFwiXCI7XG4gICAgaWYgKHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby93ZWJtXCIpID09IFwicHJvYmFibHlcIiB8fCB0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vd2VibVwiKSA9PSBcIm1heWJlXCIpIHtcbiAgICAgIGV4dCA9IFwid2VibVwiO1xuICAgIH0gZWxzZSBpZih0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vbXA0XCIpID09IFwicHJvYmFibHlcIiB8fCB0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vbXA0XCIpID09IFwibWF5YmVcIikge1xuICAgICAgZXh0ID0gXCJtcDRcIjtcbiAgICB9IGVsc2UgaWYodGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL29nZ1wiKSA9PSBcInByb2JhYmx5XCIgfHwgdGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL29nZ1wiKSA9PSBcIm1heWJlXCIpIHtcbiAgICAgIGV4dCA9IFwib2dnXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4dDtcblxuICB9XG5cbiAgd2ViRm9udChjb25maWcpIHtcblxuICAgIC8vIHdlYiBmb250IGxvYWRlcueUqGpz44GuYXBwZW5kXG4gICAgdmFyIHdmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgd2Yuc3JjID0gKCdodHRwczonID09IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID8gJ2h0dHBzJyA6ICdodHRwJykgK1xuICAgICAgJzovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL3dlYmZvbnQvMS93ZWJmb250LmpzJztcbiAgICB3Zi50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgd2YuYXN5bmMgPSAndHJ1ZSc7XG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3Ziwgcyk7XG5cbiAgICB2YXIgYWdhaW4gPSAoKT0+e1xuXG4gICAgICAvLyB5dC5wbGF5ZXLjgYxsb2Fk44GV44KM44Gm44GE44Gq44GE5aC05ZCI44KS6ICD5oWu44GX44GmXG4gICAgICBpZigodHlwZW9mIFdlYkZvbnQgIT09IFwidW5kZWZpbmVkXCIpICYmIFdlYkZvbnQpIHtcblxuICAgICAgICAgIFdlYkZvbnQubG9hZChjb25maWcpO1xuXG4gICAgICB9ZWxzZXtcblxuICAgICAgICAgIHNldFRpbWVvdXQoYWdhaW4sIDEwMCk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIGFnYWluKCk7ICAgIFxuXG4gIH1cblxuICBvbkxvYWRlZCgpIHtcblxuICAgICQoJ2h0bWwnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuXG4gIH1cblxuICBzZXRFdmVudHMobGVuKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWRlZCcsIChldmVudCk9PntcbiAgICAgIFxuICAgICAgc2VsZi5jbnQrKztcbiAgICAgIGlmIChzZWxmLmNudCA9PSBsZW4pIG9uTG9hZGVkKCk7XG5cbiAgICB9KTtcbiAgICAgIFxuICB9IFxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0xvYWRlci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU2VjMDFWaWRlb1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBZb3V0dWJlRm9yU2VjMDEgZnJvbSAnLi9Zb3V0dWJlRm9yU2VjMDEuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWMwMVZpZGVvIHtcblxuICBjb25zdHJ1Y3RvcihwYXJhbSl7XG5cbiAgICAvLyBzZWMwMXZpZGVv55SoXG4gICAgZ2IuaW4ucm0udG90YWwrKztcbiAgICBpZiAoZ2IuaW4udS5pc1NQKSBnYi5pbi5ybS5jb21wbGV0ZWQrKztcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIGNyZWF0ZVxuICAgIHRoaXMudmlkZW8gPSBuZXcgWW91dHViZUZvclNlYzAxKCdzZWMwMVZpZGVvJywgZ2IuaW4uY29uZi55b3V0dWJlSUQwMSwgbnVsbCk7XG4gICAgXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9TZWMwMVZpZGVvLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBZb3V0dWJlRm9yU2VjMDFcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBGdWxsU2l6ZSBmcm9tICcuLi8uLi9NeUxpYnMvRGlzcGxheS9MYXlvdXQvRnVsbFNpemUuanMnO1xuaW1wb3J0IFRvcFRpbWUgZnJvbSAnLi4vLi4vRGlzcGxheS9VSS9Ub3BUaW1lLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWW91dHViZUZvclNlYzAxIHtcblxuICBjb25zdHJ1Y3RvcihpZCx2aWRlb0lELHZpZGVvTGlzdCkge1xuXG4gICAgdGhpcy5wbGF5ZXIgPSBudWxsO1xuXG4gICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLmlzU2Vla0xvY2sgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2Vla0xvY2swMiA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXR1cChpZCx2aWRlb0lELHZpZGVvTGlzdCk7XG5cbiAgfVxuXG4gIHNldHVwKGlkLHZpZGVvSUQsdmlkZW9MaXN0KSB7XG5cbiAgICAvLyB5dC5wbGF5ZXLvv73vv71sb2Fk77+977+977+977+9xqTvv73vv73KpO+/ve+/ve+/ve+/vc+k8r+8kV3vv73vv73vv73vv71cbiAgICBpZigodHlwZW9mIFlUICE9PSBcInVuZGVmaW5lZFwiKSAmJiBZVCAmJiBZVC5QbGF5ZXIpe1xuXG4gICAgICAgIC8vIGNyZWF0ZVxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBZVC5QbGF5ZXIoaWQsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIC8vIO+/vdel77+9YO+/ve+/vWDvv73Ot++/vVxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsIC8vIO+/vdel77+9YO+/ve+/vWDvv73OuN+k77+9XG4gICAgICAgICAgICB2aWRlb0lkOiB2aWRlb0lELCAvLyBZb3VUdWJl77+977+9SURcbiAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAnb25SZWFkeSc6IHRoaXMub25SZWFkeS5iaW5kKHRoaXMpLCAvLyDvv73Xpe+/vWDvv73vv71g77+9zpzKguSkrO+/vcek77+977+977+977+9yKTvv73vv73LjGfvv73vv71cbiAgICAgICAgICAgICAgJ29uU3RhdGVDaGFuZ2UnOiB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICAgICAgYXV0b3BsYXk6IDEsXG4gICAgICAgICAgICAgIGNvbnRyb2xzOiAwLFxuICAgICAgICAgICAgICBzaG93aW5mbzogMCxcbiAgICAgICAgICAgICAgYXV0b2hpZGU6IDEsXG4gICAgICAgICAgICAgIHJlbDogMCxcbiAgICAgICAgICAgICAgZW5hYmxlanNhcGk6IDEsXG4gICAgICAgICAgICAgIGl2X2xvYWRfcG9saWN5OiAzLFxuICAgICAgICAgICAgICBkaXNhYmxla2I6MSxcbiAgICAgICAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDEsXG4gICAgICAgICAgICAgIHN0YXJ0OiAyLFxuICAgICAgICAgICAgICBsb29wOiAxLFxuICAgICAgICAgICAgICAvLyBwbGF5bGlzdDogdmlkZW9MaXN0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxheW91dFxuICAgICAgICB2YXIgbCA9IG5ldyBGdWxsU2l6ZSgkKCcjYmdXcmFwJyksJCgnI3NlYzAxVmlkZW8nKSwwLCdGdWxsU2l6ZVNlYzAxVmlkZW8nKTtcbiAgICAgICAgbC50YXJnZXREZWZXID0gMTkyMDtcbiAgICAgICAgbC50YXJnZXREZWZIID0gMTA4MDtcbiAgICAgICAgbC5ydW4oKTtcblxuICAgIH1lbHNle1xuXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXR1cC5iaW5kKHRoaXMsaWQsdmlkZW9JRCx2aWRlb0xpc3QpLCAxMDApO1xuXG4gICAgfVxuXG5cbiAgfVxuXG4gIG9uUmVhZHkgKGUpIHtcblxuICAgIC8vIO+/vd+977+977+977+9yKTvv71cbiAgICBlLnRhcmdldC5zZXRQbGF5YmFja1F1YWxpdHkoJ2hpZ2hyZXMnKTtcblxuICAgIC8vIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgICAvLyBwbGF5XG4gICAgZ2IuaW4udGltZSA9IG5ldyBUb3BUaW1lKCk7XG4gICAgZ2IuaW4uc2VjMDFWaWRlby52aWRlby5wbGF5QnlOWVRpbWUoKTtcblxuICB9XG5cbiAgb25QbGF5ZXJTdGF0ZUNoYW5nZSAoZSkge1xuXG4gICAgdmFyIHN0YXR1cyA9IGUuZGF0YTtcblxuICAgIC8vIO+/ve+/ve+/ve+/ve+/vUvvv73LpO+/ve+/ve+/ve+/vcik77+9IDBcbiAgICBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkge1xuICAgICBcbiAgICAgICAgLy8g77+907vvv73vv73vv73vv73vv71cbiAgICAgICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIC8vIO+/ve+/ve+/ve+/ve+/vdCkzqTIpO+/vSAxXG4gICAgaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuUExBWUlORykge1xuXG4gICAgICBpZiAodGhpcy5pc0ZpcnN0KSB7XG4gICAgICAgIHRoaXMuaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICAgIH1cblxuICAgICAgLy8gZS50YXJnZXQucGF1c2VWaWRlbygpO1xuXG4gICAgfVxuXG4gICAgLy8gLy8gzaPWue+/vdCkzqTIpO+/vSAyXG4gICAgLy8gaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCfNo9a577+977+9Jyk7XG4gICAgLy8gfVxuXG4gICAgLy8gLy8g77+90KXDpdWl77+977+977+977+977+90KTOpMik77+9IDNcbiAgICAvLyBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkcpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ++/vdClw6XVpe+/ve+/ve+/ve+/ve+/ve+/vScpO1xuICAgIC8vIH1cblxuICAgIC8vIC8vIO+/vV7vv73vv73vv73vv73vv71n77+936TOpMik77+9IDUgNe+/ve+/vda577+93qTvv73IpO+/ve+/ve+/ve+/veukq++/vemhou+/ve+/ve+/ve+/ve+/vcek77+9cGxheVxuICAgIGlmIChzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLkNVRUQpIHtcblxuICAgICAgICB0aGlzLnBsYXlCeU5ZVGltZSgpO1xuXG4gICAgfVxuXG5cbiAgICAvLyBmb3Igc2FmYXJpIO+/vdWl77+977+977+977+966W177+977+977+977+977+92KTvv73vv73vv71cbiAgICBpZiAoZ2IuaW4udS5pc1NhZmFyaSgpICYmIHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HKSB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSArIDAuMSk7XG5cbiAgfVxuXG4gIHBsYXlCeU5ZVGltZSgpIHtcblxuICAgIHZhciBoID0gZ2IuaW4udGltZS5ueUg7XG5cbiAgICBpZiAoaCA+PSA1ICYmIGggPCAxMykge1xuXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8oMCk7XG5cbiAgICB9IGVsc2UgaWYgKGggPj0gMTMgJiYgaCA8IDE4KSB7XG5cbiAgICAgIHRoaXMucGxheWVyLnNlZWtUbygzNik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8oNjYpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG5cblxuICB9XG5cbiAgb25TZWVrKCkge1xuXG4gICAgdmFyIG5vdyA9IHRoaXMucGxheWVyLmdldEN1cnJlbnRUaW1lKCk7ICAgIFxuXG4gICAgaWYgKG5vdyA8IDEuMCkge1xuICAgICAgdGhpcy5pc1NlZWtMb2NrID0gZmFsc2U7XG4gICAgICB0aGlzLmlzU2Vla0xvY2swMiA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBpZiAobm93ID4gOTAgJiYgIXRoaXMuaXNTZWVrTG9jaykge1xuICAgIHRoaXMuaXNTZWVrTG9jayA9IHRydWU7XG5cbiAgICAgIFR3ZWVuTWF4LnRvKCQoJy5iZ092ZXJsYXlJbWcnKSwgMy4wLCB7XG4gICAgICAgICAgb3BhY2l0eTogMSwgXG4gICAgICAgICAgZWFzZTpQb3dlcjMuZWFzZUluT3V0LFxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIFxuICAgIGlmIChub3cgPiAxLjAgJiYgIXRoaXMuaXNTZWVrTG9jazAyKSB7XG4gICAgdGhpcy5pc1NlZWtMb2NrMDIgPSB0cnVlO1xuXG4gICAgICBUd2Vlbk1heC50bygkKCcuYmdPdmVybGF5SW1nJyksIDMuMCwge1xuICAgICAgICAgIG9wYWNpdHk6IDAsIFxuICAgICAgICAgIGVhc2U6UG93ZXIzLmVhc2VJbk91dCxcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnVwLmFkZCgnWW91dHViZUZvclNlYzAxJyx0aGlzLm9uU2Vlay5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAucmVtb3ZlKCdZb3V0dWJlRm9yU2VjMDEnKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9Zb3V0dWJlRm9yU2VjMDEuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEZ1bGxTaXplXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2l6ZSB7XG5cbiAgY29uc3RydWN0b3IoJFdyYXAsJFRhcmdldCxtb2RlLCBuYW1lKSB7XG5cbiAgICB0aGlzLiR3cmFwID0gJFdyYXA7XG4gICAgdGhpcy4kdGFyZ2V0ID0gJFRhcmdldDtcblxuICAgIHRoaXMuVyA9IHRoaXMuJHdyYXAud2lkdGgoKTtcbiAgICB0aGlzLkggPSB0aGlzLiR3cmFwLmhlaWdodCgpO1xuICAgIHRoaXMudGFyZ2V0VztcbiAgICB0aGlzLnRhcmdldEg7XG4gICAgdGhpcy50YXJnZXREZWZXO1xuICAgIHRoaXMudGFyZ2V0RGVmSDtcbiAgICB0aGlzLnJhdGlvVztcbiAgICB0aGlzLnJhdGlvO1xuICAgIHRoaXMubWw7XG4gICAgdGhpcy5tdDtcblxuICAgIHRoaXMubW9kZSA9IG1vZGUgfHwgMDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lIHx8ICdmdWxsc2l6ZSc7XG5cbiAgICAvLyB0aGlzLmluaXQoKTtcbiAgICAvLyB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldFN0eWxlKCkge1xuXG4gICAgdGhpcy4kd3JhcC5jc3Moe1xuICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gICAgfSk7XG4gICAgdGhpcy4kdGFyZ2V0LmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcblxuICB9XG5cbiAgZ2V0RGVmKCkge1xuXG4gICAgdGhpcy50YXJnZXREZWZXID0gdGhpcy4kdGFyZ2V0LmdldCgwKS5jbGllbnRXaWR0aCB8fCB0aGlzLiR0YXJnZXQuZ2V0KDApLndpZHRoIHx8IHRoaXMuJHRhcmdldC53aWR0aCgpLFxuICAgIHRoaXMudGFyZ2V0RGVmSCA9IHRoaXMuJHRhcmdldC5nZXQoMCkuY2xpZW50SGVpZ2h0IHx8IHRoaXMuJHRhcmdldC5nZXQoMCkuaGVpZ2h0ICB8fCB0aGlzLiR0YXJnZXQuaGVpZ2h0KCk7XG5cbiAgfVxuXG4gIGdldFNpemUoKSB7XG5cbiAgICB0aGlzLlcgPSB0aGlzLiR3cmFwLndpZHRoKCk7XG4gICAgdGhpcy5IID0gdGhpcy4kd3JhcC5oZWlnaHQoKTsgXG5cbiAgICB0aGlzLnJhdGlvVyA9IHRoaXMuSCAvIHRoaXMuVztcbiAgICB0aGlzLnJhdGlvID0gdGhpcy50YXJnZXREZWZIIC8gdGhpcy50YXJnZXREZWZXLFxuXG4gICAgdGhpcy5tbCA9IC0gKHRoaXMudGFyZ2V0RGVmVyAqICh0aGlzLkggLyB0aGlzLnRhcmdldERlZkgpKSAvIDI7XG4gICAgdGhpcy5tdCA9IC0gKHRoaXMudGFyZ2V0RGVmSCAqICh0aGlzLlcgLyB0aGlzLnRhcmdldERlZlcpKSAvIDI7XG5cbiAgfVxuXG4gIHNldFBvcygpe1xuXG4gICAgICBpZiAodGhpcy5tb2RlID09ICdjb3ZlcicgfHwgdGhpcy5tb2RlID09IDApIHtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vICDmnqDjgavjg5Tjg4Pjgr/jg6rjgavjgarjgovjgojjgYbjgasgYmFja2dyb3VuZC1zaXplIGNvdmVyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBpZiAodGhpcy5yYXRpb1cgPiB0aGlzLnJhdGlvKSB7XG5cbiAgICAgICAgICB2YXIgdyA9ICh0aGlzLkggLyB0aGlzLnRhcmdldERlZkgpICogdGhpcy50YXJnZXREZWZXO1xuXG4gICAgICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgICAgLmNzcyh7J2hlaWdodCc6IHRoaXMuSH0pXG4gICAgICAgICAgICAgIC5jc3MoeydtYXJnaW4tdG9wJzogMCwnbWFyZ2luLWxlZnQnOiB0aGlzLm1sLCd0b3AnOjAsJ2xlZnQnOic1MCUnLCd3aWR0aCc6d30pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMucmF0aW9XIDw9IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgICAgdmFyIGggPSAodGhpcy5XIC8gdGhpcy50YXJnZXREZWZXKSAqIHRoaXMudGFyZ2V0RGVmSDtcblxuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAgIC5jc3Moeyd3aWR0aCc6IHRoaXMuV30pXG4gICAgICAgICAgICAgIC5jc3MoeydtYXJnaW4tdG9wJzogdGhpcy5tdCwnbWFyZ2luLWxlZnQnOiAwLCd0b3AnOic1MCUnLCdsZWZ0JzowLCdoZWlnaHQnOmh9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09ICdjb250YWluJyB8fCB0aGlzLm1vZGUgPT0gMSl7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyAg5p6g5YaF44Gr44OU44OD44K/44Oq5Y+O44G+44KL44KI44GG44GrIGJhY2tncm91bmQtc2l6ZSBjb250YWluXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBpZiAodGhpcy5yYXRpb1cgPCB0aGlzLnJhdGlvKSB7XG5cbiAgICAgICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgICAuY3NzKHsnaGVpZ2h0JzogdGhpcy5IfSlcbiAgICAgICAgICAgICAgLmNzcyh7J21hcmdpbi10b3AnOiAwLCdtYXJnaW4tbGVmdCc6IHRoaXMubWwsJ3RvcCc6MCwnbGVmdCc6JzUwJScsJ3dpZHRoJzonYXV0byd9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLnJhdGlvVyA+PSB0aGlzLnJhdGlvKSB7XG5cbiAgICAgICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgICAuY3NzKHsnd2lkdGgnOiB0aGlzLld9KVxuICAgICAgICAgICAgICAuY3NzKHsnbWFyZ2luLXRvcCc6IHRoaXMubXQsJ21hcmdpbi1sZWZ0JzogMCwndG9wJzonNTAlJywnbGVmdCc6MCwnaGVpZ2h0JzonYXV0byd9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0gXG5cbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgICB0aGlzLmdldERlZigpO1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgdGhpcy5nZXRTaXplKCk7XG4gICAgdGhpcy5zZXRQb3MoKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQodGhpcy5uYW1lLCB0aGlzLnJ1bi5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0Rpc3BsYXkvTGF5b3V0L0Z1bGxTaXplLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBUb3BUaW1lXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyA1MDBweOS7peS4i+OBq+OBquOBo+OBn+OCieihqOekulxuLy8gICDmmYLoqIhjb3VudFxuLy8gICBjYW52YXPooajnpLpcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVGltZSB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuJHRhcmdldCA9ICQoJy50aW1lV3JhcCcpO1xuICAgIHRoaXMuJGgwMSA9IHRoaXMuJHRhcmdldC5maW5kKCcuaDAxJyk7XG4gICAgdGhpcy4kaDAyID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5oMDInKTtcbiAgICB0aGlzLiRtMDEgPSB0aGlzLiR0YXJnZXQuZmluZCgnLm0wMScpO1xuICAgIHRoaXMuJG0wMiA9IHRoaXMuJHRhcmdldC5maW5kKCcubTAyJyk7XG5cbiAgICB0aGlzLm55SCA9IDA7XG5cbiAgICB0aGlzLmlzQWxlcnQgPSAoZ2IuaW4uci53cy5oIDwgNTAwKT8gdHJ1ZTogZmFsc2U7XG5cbiAgICB0aGlzLmRpcyA9IDE0OyAvL+aZguW3rlxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICBnYi5pbi51LnRpbWUoKTtcbiAgICB2YXIgaCA9IGdiLmluLnUuaG91ciAtIHRoaXMuZGlzO1xuICAgIGlmIChoPDApIGggPSAyNCArIGg7XG4gICAgdGhpcy5ueUggPSBoO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICAvLyDplpPlvJXjgY1cbiAgICBpZiAoZ2IuaW4udXAuY250JTYwIT09MCkgcmV0dXJuO1xuXG5cbiAgICBnYi5pbi51LnRpbWUoKTtcblxuICAgIHZhciBoID0gZ2IuaW4udS5ob3VyIC0gdGhpcy5kaXM7XG4gICAgaWYgKGg8MCkgaCA9IDI0ICsgaDtcblxuICAgIHRoaXMubnlIID0gaDtcblxuICAgIGggPSBnYi5pbi51LmFkZDAoaCkuc3BsaXQoJycpO1xuICAgIHZhciBtID0gZ2IuaW4udS5hZGQwKGdiLmluLnUubWludXRlKS5zcGxpdCgnJyk7XG4gICAgdmFyIHMgPSBnYi5pbi51LmFkZDAoZ2IuaW4udS5zZWNvbmQpLnNwbGl0KCcnKTtcblxuICAgIHRoaXMuJGgwMS50ZXh0KGhbMF0pXG4gICAgdGhpcy4kaDAyLnRleHQoaFsxXSlcbiAgICB0aGlzLiRtMDEudGV4dChtWzBdKVxuICAgIHRoaXMuJG0wMi50ZXh0KG1bMV0pXG5cbiAgICAvLyB0aGlzLiRoMDEudGV4dChzWzBdKVxuICAgIC8vIHRoaXMuJGgwMi50ZXh0KHNbMV0pXG4gICAgLy8gdGhpcy4kbTAxLnRleHQoc1swXSk7XG4gICAgLy8gdGhpcy4kbTAyLnRleHQoc1sxXSk7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIGdiLmluLnVwLmFkZCgnVG9wVGltZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgLy8g44Kz44Oz44Oe44Gu6KGo56S66Z2e6KGo56S6XG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHtyZXBlYXQ6IC0xfSk7XG5cbiAgICB0bFxuICAgICAgLnNldCh0aGlzLiR0YXJnZXQuZmluZCgnLmNvbG9uJyksIHtvcGFjaXR5OiAwfSlcbiAgICAgIC50byh0aGlzLiR0YXJnZXQuZmluZCgnLmNvbG9uJyksIDAuNSwge29wYWNpdHk6IDEsZWFzZTogUG93ZXIyLmVhc2VJbk91dH0pXG4gICAgICAudG8odGhpcy4kdGFyZ2V0LmZpbmQoJy5jb2xvbicpLCAwLjUsIHtvcGFjaXR5OiAwLGVhc2U6IFBvd2VyMi5lYXNlSW5PdXR9KVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cblxuXG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG5cbiAgICBnYi5pbi51cC5yZW1vdmUoJ1RvcFRpbWUnKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9Ub3BUaW1lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBKdWRnZUVudmlyb25tZW50XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKdWRnZUVudmlyb25tZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOODh+ODkOOCpOOCueWIpOWumlxuICAgIGdiLmluLnUuaXNEZXZpY2VTUCgpO1xuICAgIGdiLmluLnUuaXNEZXZpY2VUQUIoKTtcbiAgICBnYi5pbi51LmlzRGV2aWNlTUIoKTtcbiAgICBnYi5pbi51LmlzRGV2aWNlUEMoKTtcblxuICAgIC8vIOODluODqeOCpuOCtuODkOODvOOCuOODp+ODs+WIpOWumlxuICAgIGdiLmluLnUuaXNJRVZlcnNpb24oKTtcblxuICAgIC8vIHJlc3BvbnNpdmUgLyBwb3J0cmFpdCAvIGxhbmRzY2FwZVxuICAgIGdiLmluLnUuaXNEaXJlY3Rpb24oKTtcbiAgICBnYi5pbi51LmlzUmVzcG9uc2l2ZShnYi5pbi5jb25mLmJwKTtcbiAgICBnYi5pbi5yLmFkZCgnaXNEaXJlY3Rpb24nLCBnYi5pbi51LmlzRGlyZWN0aW9uLmJpbmQoZ2IuaW4udSkpO1xuICAgIGdiLmluLnIuYWRkKCdpc1Jlc3BvbnNpdmUnLCBnYi5pbi51LmlzUmVzcG9uc2l2ZS5iaW5kKGdiLmluLnUsIGdiLmluLmNvbmYuYnApKTtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG4gICAgICAgXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvSnVkZ2VFbnZpcm9ubWVudC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUmVzcG9uc2l2ZVN3aXRjaEltZ1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZVN3aXRjaEltZyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5ydW4oKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIHRoaXMuaXNQQ0xvY2sgPSAoZ2IuaW4udS5pc1Jlc1BDKT8gZmFsc2U6IHRydWU7XG4gICAgdGhpcy5pc1NQTG9jayA9IChnYi5pbi51LmlzUmVzU1ApPyBmYWxzZTogdHJ1ZTtcblxuICAgIHRoaXMuJHRhcmdldCA9ICQoJy5yZXNwb25zaXZlSW1nJyk7XG5cbiAgfVxuXG4gIHJ1biAoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OW44Os44Kk44Kv44Od44Kk44Oz44OI44KI44KK44KCc3DlgbRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQICYmICF0aGlzLmlzU1BMb2NrKSB7XG4gICAgICB0aGlzLmlzUENMb2NrID0gZmFsc2U7XG4gICAgICB0aGlzLmlzU1BMb2NrID0gdHJ1ZTtcblxuICAgICAgbG9nKDExKTtcblxuICAgICAgdGhpcy4kdGFyZ2V0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcbiAgICAgICAgc3JjID0gZ2IuaW4udS5zdHJSZXBsYWNlKHNyYywgJ19wYycsICdfc3AnKTtcbiAgICAgICAgJCh0aGlzKS5vZmYoJ2xvYWQnKTtcbiAgICAgICAgJCh0aGlzKS5vbignbG9hZCcsIChldmVudCk9PntcblxuICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzcFNpemUnKSkgZ2IuaW4udS5zZXRJbWdTUFNpemUoJCh0aGlzKSk7XG5cbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcykuYXR0cignc3JjJyxzcmMpO1xuXG4gICAgICAgIC8vICQodGhpcykuYXR0cignc3JjJyxzcmMpO1xuICAgICAgICAvLyBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc3BTaXplJykpIGdiLmluLnUuc2V0SW1nU1BTaXplKCQodGhpcykpO1xuXG4gICAgICB9KTtcblxuICAgICAgLy8gcmVzcG9uc2l2ZWltZ+OBjOOBpOOBhOOBpuOBquOBhOOCguOBruOBp+OAgXNwU2l6ZeOBjOOBpOOBhOOBpuOCi+OCguOBruOBrzEvMlxuICAgICAgZ2IuaW4udS5zZXRJbWdTUFNpemUoJCgnLnNwU2l6ZScpLm5vdCgnLnJlc3BvbnNpdmVJbWcnKSk7XG5cbiAgICB9IFxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODluODrOOCpOOCr+ODneOCpOODs+ODiOOCiOOCiuOCgnBj5YG0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKGdiLmluLnUuaXNSZXNQQyAmJiAhdGhpcy5pc1BDTG9jaykge1xuICAgICAgdGhpcy5pc1BDTG9jayA9IHRydWU7XG4gICAgICB0aGlzLmlzU1BMb2NrID0gZmFsc2U7XG5cbiAgICAgIGxvZygyMik7XG5cbiAgICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XG4gICAgICAgIHNyYyA9IGdiLmluLnUuc3RyUmVwbGFjZShzcmMsICdfc3AnLCAnX3BjJyk7XG5cbiAgICAgICAgJCh0aGlzKS5hdHRyKHt3aWR0aDogJ2F1dG8nLGhlaWdodDogJ2F1dG8nfSk7XG4gICAgICAgICQodGhpcykuYXR0cignc3JjJyxzcmMpO1xuXG4gICAgICB9KTtcblxuICAgICAgLy8gcmVzcG9uc2l2ZWltZ+OBjOOBpOOBhOOBpuOBquOBhOOCguOBruOBp+OAgXNwU2l6ZeOBjOOBpOOBhOOBpuOCi+OCguOBruOBr2F1dG/jgatcbiAgICAgICQoJy5zcFNpemUnKS5ub3QoJy5yZXNwb25zaXZlSW1nJykuYXR0cih7d2lkdGg6ICdhdXRvJyxoZWlnaHQ6ICdhdXRvJ30pO1xuXG4gICAgICAvLyBzcOOBr+OBquOBnOOBi2xvYWTjgqTjg5njg7Pjg4jjgYzlkbzjgbDjgozjgarjgYTjga7jgafjgIHjgZPjgaPjgaHjgaflh6bnkIZcbiAgICAgIC8vIGlmIChnYi5pbi51LmlzU1ApICQoJy5yZXNwb25zaXZlSW1nJykuYXR0cih7d2lkdGg6ICdhdXRvJyxoZWlnaHQ6ICdhdXRvJ30pO1xuXG4gICAgfVxuXG4gIH1cbiAgICAgICBcbiAgcmVzdW1lKCkge1xuXG4gICAgbG9nKCdyZXN1bWUnKTtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnJ1bigpO1xuXG4gICAgZ2IuaW4uci5yZW1vdmUoJ3Jlc3BvbnNpdmVTd2l0Y2hJbWcnKTtcbiAgICBnYi5pbi5yLmFkZCgncmVzcG9uc2l2ZVN3aXRjaEltZycsIHRoaXMucnVuLmJpbmQodGhpcykpO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQoJ3Jlc3BvbnNpdmVTd2l0Y2hJbWcnLCB0aGlzLnJ1bi5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9fZXZlbnRzL1Jlc3BvbnNpdmVTd2l0Y2hJbWcuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU3dpcGVUcmFuc2l0aW9uIHNzc1xuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2lwZVRyYW5zaXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIGRvbVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoaXMuJHN0YXJ0V3JhcCA9ICQoJy5zZWN0aW9uMDEsIC5zZWN0aW9uMDIgLm5leHQsIC5zZWN0aW9uMDMgLmJveDA1Jyk7XG4gICAgLy8gdGhpcy4kc3RhcnRXcmFwID0gJCgnLnNlY3Rpb24wMicpO1xuICAgIHRoaXMuJHN0YXJ0V3JhcCA9ICQod2luZG93KTtcbiAgICB0aGlzLiRlbmRXcmFwID0gJCh3aW5kb3cpO1xuXG4gICAgdGhpcy5wYWdlTGlzdCA9IHtcbiAgICAgICd0b3AnOiAwLFxuICAgICAgJ21vdmllJzogMSxcbiAgICAgICdpbnRlcnZpZXcnOiAyLFxuICAgICAgJ2hpc3RvcnknOiAzLFxuICAgIH1cblxuICAgIC8vIHZhcmlhYmxlXG4gICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICB0aGlzLm9sZCA9IG51bGw7XG4gICAgdGhpcy5uZXh0ID0gMTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGVuID0gNDtcblxuICAgIHRoaXMuaXNMb2NrID0gZmFsc2U7XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB2YXJpYWJsZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gcG9zaXRpb25cbiAgICB0aGlzLnNYID0gMDt0aGlzLm1YID0gMDt0aGlzLmVYID0gMDsgLy9zdGFydFgsbW92ZVgsZW5kWFxuICAgIHRoaXMuZGlzID0gMDt0aGlzLm1pbkRpcyA9IDE1O1xuXG4gICAgLy8gdGltZVxuICAgIHRoaXMuc1Q9MDt0aGlzLmVUPTA7dGhpcy5taW5UID0gMzAwOyAvL3N0YXJ0VGltZSxlbGxhcHNlZFRpbWUsXG5cbiAgICB0aGlzLlcgPSBnYi5pbi5yLlcoKTtcblxuICAgIHRoaXMub25Ub3VjaExvbmcgPSAoKT0+e307XG4gICAgdGhpcy5vblRvdWNoU3RhcnRDQiA9ICgpPT57fTtcbiAgICB0aGlzLm9uVG91Y2hFbmRDQiA9ICgpPT57fTtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgb25Ub3VjaFN0YXJ0IChlKSB7XG5cbiAgICAvLyB0YXJnZXRYXG4gICAgdmFyIHkgPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgdGhpcy5zWSA9IHk7XG5cbiAgICB0aGlzLnN0ID0gZ2IuaW4ucy5zdDtcbiAgICB0aGlzLnNiID0gZ2IuaW4ucy5zYjtcbiAgICBsb2coJ3N5Jyx5KVxuXG4gIH1cblxuICBvblRvdWNoTW92ZSAoZSkge1xuXG4gICAgLy8gdGFyZ2V0WFxuICAgIHZhciB5ID0gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgIHRoaXMubVkgPSB5O1xuXG4gIH1cblxuICBvblRvdWNoRW5kIChlKSB7XG5cbiAgICBpZiAodGhpcy5pc0xvY2spIHJldHVybjsgICAgXG5cbiAgICB2YXIgeSA9IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICB0aGlzLmVZID0geTtcblxuICAgIHZhciBkaXMgPSB0aGlzLnNZIC0gdGhpcy5lWTtcbiAgICB2YXIgYWJzRGlzID0gTWF0aC5hYnMoZGlzKTtcblxuICAgIC8vIOacgOWwj+i3nembouOCiOOCiumVt+OBi+OBo+OBn+OCieOAgeWHpueQhlxuICAgIGlmKCB0aGlzLm1pbkRpcyA8IGFic0Rpcykge1xuXG4gICAgICAvLyDjg5rjg7zjgrjnlarlj7fjgpLlj5blvpdcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucGFnZUxpc3RbZ2IuaW4ucGpheC5pZF07XG5cbiAgICAgIGlmIChkaXMgPiAwKSB7XG5cbiAgICAgICAgdmFyIGggPSAkKCcuc2VjdGlvbicpLmhlaWdodCgpKmdiLmluLkxheW91dC5zaXplLnNjYWxlLnJhdGU7XG4gICAgICAgIGxvZyh0aGlzLnNiLGgtMTAsdGhpcy5zYiA8IGgtMTApO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQhPT0wICYmIHRoaXMuc2IgPCBoLTEwKSByZXR1cm47XG4gICAgICAgIC8vIGhpc3Rvcnnjg5rjg7zjgrjjga7loLTlkIjjga/lh6bnkIbjgZfjgarjgYRcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudD09MykgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ25leHQnKTtcblxuICAgICAgICAvLyDjgZfjgZ/jgbhcbiAgICAgICAgdmFyIHBhZ2VOYW1lID0gT2JqZWN0LmtleXModGhpcy5wYWdlTGlzdCkuZmlsdGVyKCAoa2V5KSA9PiB7IHJldHVybiB0aGlzLnBhZ2VMaXN0W2tleV0gPT09IHRoaXMuY3VycmVudCB9KVswXTtcbiAgICAgICAgJCgnLnBqYXhUb18nK3BhZ2VOYW1lKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGxvZyh0aGlzLnN0LHRoaXMuc3QgIT09IDApO1xuXG4gICAgICAgIGlmICh0aGlzLnN0ICE9PSAwKSByZXR1cm47XG5cbiAgICAgICAgLy8g5LiK44G4XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ3ByZXYnKTtcblxuICAgICAgICB2YXIgcGFnZU5hbWUgPSBPYmplY3Qua2V5cyh0aGlzLnBhZ2VMaXN0KS5maWx0ZXIoIChrZXkpID0+IHsgcmV0dXJuIHRoaXMucGFnZUxpc3Rba2V5XSA9PT0gdGhpcy5jdXJyZW50IH0pWzBdO1xuICAgICAgICAkKCcucGpheFRvXycrcGFnZU5hbWUpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cbiAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBibHVy6Kej6ZmkXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaXNOb3RUb3VjaCA9IHRydWU7XG5cbiAgICAvLyDjgrPjg7zjg6vjg5Djg4Pjgq9cbiAgICB0aGlzLm9uVG91Y2hFbmRDQigpO1xuXG4gIH1cblxuICBjYWxjdWxhdGVPcmRlcihkaXIpIHtcblxuICAgIHRoaXMub2xkID0gdGhpcy5jdXJyZW50O1xuXG4gICAgaWYgKGRpcj09J25leHQnKSB7XG5cbiAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgaWYgKHRoaXMuY3VycmVudD50aGlzLmxlbi0xKSB0aGlzLmN1cnJlbnQ9dGhpcy5sZW4tMTtcbiAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLmN1cnJlbnQtLTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQ8MCkgdGhpcy5jdXJyZW50PTA7ICBcbiAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICB9ICAgICBcblxuICB9XG5cbiAgc2V0RXZlbnRzKCl7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiRzdGFydFdyYXAub24oJ3RvdWNoc3RhcnQuU3dpcGVUcmFuc2l0aW9uJywgKGUpPT57dGhpcy5vblRvdWNoU3RhcnQoZSk7fSk7XG4gICAgLy8gdGhpcy4kd3JhcC5vbigndG91Y2htb3ZlLlN3aXBlVHJhbnNpdGlvbicsIChlKT0+e3RoaXMub25Ub3VjaE1vdmUoZSk7fSk7XG4gICAgdGhpcy4kZW5kV3JhcC5vbigndG91Y2hlbmQuU3dpcGVUcmFuc2l0aW9uJywgKGUpPT57dGhpcy5vblRvdWNoRW5kKGUpO30pO1xuXG4gIH1cblxuICAgcmVtb3ZlRXZlbnRzKCl7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiRzdGFydFdyYXAub2ZmKCd0b3VjaHN0YXJ0LlN3aXBlVHJhbnNpdGlvbicpO1xuICAgIC8vIHRoaXMuJHdyYXAub2ZmKCd0b3VjaG1vdmUuU3dpcGVUcmFuc2l0aW9uJyk7XG4gICAgdGhpcy4kZW5kV3JhcC5vZmYoJ3RvdWNoZW5kLlN3aXBlVHJhbnNpdGlvbicpO1xuXG4gIH1cblxuXG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU3dpcGVUcmFuc2l0aW9uLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBBbGVydFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gNTAwcHjku6XkuIvjgavjgarjgaPjgZ/jgonooajnpLpcbi8vICAg5pmC6KiIY291bnRcbi8vICAgY2FudmFz6KGo56S6XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0IHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJCgnI2FsZXJ0Jyk7XG4gICAgdGhpcy4kaDAxID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5oMDEnKTtcbiAgICB0aGlzLiRoMDIgPSB0aGlzLiR0YXJnZXQuZmluZCgnLmgwMicpO1xuICAgIHRoaXMuJG0wMSA9IHRoaXMuJHRhcmdldC5maW5kKCcubTAxJyk7XG4gICAgdGhpcy4kbTAyID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5tMDInKTtcblxuICAgIHRoaXMuaXNBbGVydCA9IChnYi5pbi5yLndzLmggPCA1MDApPyB0cnVlOiBmYWxzZTtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBnYi5pbi51LnRpbWUoKTtcblxuICAgIGxvZyhnYi5pbi51LmhvdXIsZ2IuaW4udS5taW51dGUsZ2IuaW4udS5zZWNvbmQpO1xuXG4gICAgdmFyIGggPSBnYi5pbi51LmFkZDAoZ2IuaW4udS5ob3VyKS5zcGxpdCgnJyk7XG4gICAgdmFyIG0gPSBnYi5pbi51LmFkZDAoZ2IuaW4udS5taW51dGUpLnNwbGl0KCcnKTtcbiAgICB2YXIgcyA9IGdiLmluLnUuYWRkMChnYi5pbi51LnNlY29uZCkuc3BsaXQoJycpO1xuXG4gICAgdGhpcy4kaDAxLnRleHQoaFswXSlcbiAgICB0aGlzLiRoMDIudGV4dChoWzFdKVxuICAgIHRoaXMuJG0wMS50ZXh0KG1bMF0pXG4gICAgdGhpcy4kbTAyLnRleHQobVsxXSlcblxuICAgIC8vIHRoaXMuJGgwMS50ZXh0KHNbMF0pXG4gICAgLy8gdGhpcy4kaDAyLnRleHQoc1sxXSlcbiAgICAvLyB0aGlzLiRtMDEudGV4dChzWzBdKTtcbiAgICAvLyB0aGlzLiRtMDIudGV4dChzWzFdKTtcblxuICB9XG5cbiAgcnVuKCkge1xuXG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgLy8gYWxlcnTnlLvpnaLooajnpLpcbiAgICBpZiAoZ2IuaW4uci53cy5oIDw9IDUwMCAmJiB0aGlzLmlzQWxlcnQpIHtcbiAgXG4gICAgICB0aGlzLmlzQWxlcnQgPSBmYWxzZTtcblxuICAgICAgZ2IuaW4udXAuYWRkKCd0aW1lJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAgIC8vIGFsZXJ0IFVJ6KGo56S6XG4gICAgICB0aGlzLiR0YXJnZXQuc2hvdygpO1xuXG4gICAgICAvLyDjgrPjg7Pjg57jga7ooajnpLrpnZ7ooajnpLpcbiAgICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OiAtMX0pO1xuXG4gICAgICB0bFxuICAgICAgICAuc2V0KHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSwge29wYWNpdHk6IDB9KVxuICAgICAgICAudG8odGhpcy4kdGFyZ2V0LmZpbmQoJy5jb2xvbicpLCAwLjUsIHtvcGFjaXR5OiAxLGVhc2U6IFBvd2VyMi5lYXNlSW5PdXR9KVxuICAgICAgICAudG8odGhpcy4kdGFyZ2V0LmZpbmQoJy5jb2xvbicpLCAwLjUsIHtvcGFjaXR5OiAwLGVhc2U6IFBvd2VyMi5lYXNlSW5PdXR9KVxuXG4gICAgfVxuXG4gICAgLy8gYWxlcnTnlLvpnaLpnZ7ooajnpLpcbiAgICBpZiAoZ2IuaW4uci53cy5oID4gNTAwICYmICF0aGlzLmlzQWxlcnQpIHtcbiAgXG4gICAgICB0aGlzLmlzQWxlcnQgPSB0cnVlO1xuXG4gICAgICBnYi5pbi51cC5yZW1vdmUoJ3RpbWUnKTtcblxuICAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSk7XG5cbiAgICAgIC8vIGFsZXJ0IFVJ6Z2e6KGo56S6XG4gICAgICB0aGlzLiR0YXJnZXQuaGlkZSgpO1xuXG4gICAgfVxuXG4gIH1cblxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdhbGVydCcsdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL0FsZXJ0LmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTaWRlUlxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8g44Oa44O844K4IOaMh+aomeOCkuaMgeOBpCBnYi5pbi51LnBhZ2Vcbi8vICAgIOODmuODvOOCuOODquOCueODiOOBrumFjeWIl+OBi+OBqiBsaXN0ID0gW3RvcCxtb3ZpZSwsLFxuLy8g55Wq5Y+35aSJ5pu0XG4vLyDjg5rjg7zjgrjlkI3lpInmm7Rcbi8vIOOCueOCr+ODreODvOODq+ihqOekuuODu+mdnuihqOekulxuLy8gICAgIGJsdXLjgafmtojjgYjjgovjgarjganjga/jgYLjgopcblxuaW1wb3J0IEhvdmVyRWZmZWN0QmFjayBmcm9tICcuLi9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RCYWNrLmpzJztcbmltcG9ydCBQYWdlU2Nyb2xsIGZyb20gJy4vX3BhcnRzL1BhZ2VTY3JvbGwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlUiB7XG5cbiAgY29uc3RydWN0b3IocGFyYW0pe1xuXG4gICAgdGhpcy5jdXIgPSAtMTtcbiAgICB0aGlzLiRjdXIgPSAkKCcjc2lkZVIgLmluZGljYXRvciAuY3VycmVudCcpO1xuXG4gICAgdGhpcy4kcGFnZU5hbWUgPSAkKCcjc2lkZVIgLnRpdCcpXG5cbiAgICB0aGlzLiRuZXh0ID0gJCgnI3NpZGVSIC5uZXh0Jyk7XG4gICAgdGhpcy4kYmFjayA9ICQoJyNzaWRlUiAuYmFjaycpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgbmV3IEhvdmVyRWZmZWN0QmFjaygkKCcjc2lkZVIgLmJhY2snKSk7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIHRoaXMuY2hhbmdlQ3VyKCk7XG4gICAgdGhpcy5jaGFuZ2VQYWdlTmFtZSgpO1xuICAgIHRoaXMuY2hhbmdlTmV4dCgpO1xuXG4gIH1cblxuICAvLyDjg5rjg7zjgrjjgYvjgonpm6LjgozjgovjgajjgY1cbiAgb3V0TnVtKCkge1xuXG4gICAgaWYgKGdiLmluLnUuaXNSZXNTUCkgcmV0dXJuO1xuXG4gICAgVHdlZW5NYXgudG8odGhpcy4kY3VyLCAwLjksIHt0b3A6IC0yMCwgb3BhY2l0eTogMCxcbiAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgb25Db21wbGV0ZTogKCk9PntcbiAgICAgICAgVHdlZW5NYXguc2V0KHRoaXMuJGN1ciwge3RvcDogMTAsIG9wYWNpdHk6IDB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgLy8g44Oa44O844K444G45YWl44KL44Go44GNXG4gIGluTnVtKCkge1xuXG4gICAgaWYgKGdiLmluLnUuaXNSZXNTUCkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuY2hhbmdlTnVtKCk7XG5cbiAgfVxuXG4gIGNoYW5nZU51bSgpIHtcblxuICAgIHZhciBpZCA9IGdiLmluLnBqYXguaWQ7XG5cbiAgICBzd2l0Y2ggKGlkKSB7XG5cbiAgICAgIGNhc2UgJ3RvcCc6XG5cbiAgICAgICAgdGhpcy5jdXIgPSAxO1xuICAgICAgICB0aGlzLiRjdXIudGV4dCh0aGlzLmN1cik7XG4gICAgICAgIHRoaXMuJGN1ci5zaG93KCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21vdmllJzpcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VyID0gMjtcbiAgICAgICAgdGhpcy4kY3VyLnRleHQodGhpcy5jdXIpO1xuICAgICAgICB0aGlzLiRjdXIuc2hvdygpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdpbnRlcnZpZXcnOlxuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXIgPSAzO1xuICAgICAgICB0aGlzLiRjdXIudGV4dCh0aGlzLmN1cik7XG4gICAgICAgIHRoaXMuJGN1ci5zaG93KCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ludGVydmlld19kZXRhaWwnOlxuICAgICAgICBcbiAgICAgICAgdGhpcy4kY3VyLmhpZGUoKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaGlzdG9yeSc6XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN1ciA9IDQ7XG4gICAgICAgIHRoaXMuJGN1ci50ZXh0KHRoaXMuY3VyKTtcbiAgICAgICAgdGhpcy4kY3VyLnNob3coKTtcblxuICAgICAgICBicmVhaztcblxuICAgIH1cblxuICAgIFR3ZWVuTWF4LnRvKHRoaXMuJGN1ciwgMC42LCB7dG9wOiAtNywgb3BhY2l0eTogMSwgZWFzZTogRXhwby5lYXNlT3V0fSk7XG4gICAgXG4gIH1cblxuICAvLyDjg5rjg7zjgrjjgYvjgonpm6LjgozjgovjgajjgY1cbiAgb3V0UGFnZU5hbWUoKSB7XG5cbiAgICBUd2Vlbk1heC50byh0aGlzLiRwYWdlTmFtZSwgMC45LCB7eDogMTAwLCByb3RhdGlvblo6IC05MCwgb3BhY2l0eTogMCwgZWFzZTogUG93ZXIzLmVhc2VPdXR9KTtcblxuICB9XG5cbiAgLy8g44Oa44O844K444G45YWl44KL44Go44GNXG4gIGluUGFnZU5hbWUoKSB7XG5cbiAgICB0aGlzLmNoYW5nZVBhZ2VOYW1lKCk7XG5cbiAgfVxuXG4gIGNoYW5nZVBhZ2VOYW1lKCkge1xuXG4gICAgdmFyIGlkID0gZ2IuaW4ucGpheC5pZDtcblxuICAgIHN3aXRjaCAoaWQpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICB0aGlzLiRwYWdlTmFtZS50ZXh0KCcnKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbW92aWUnOlxuICAgICAgICBcbiAgICAgICAgdGhpcy4kcGFnZU5hbWUudGV4dCgnTW92aWUnKTtcbiAgICAgICAgXG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ludGVydmlldyc6XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRwYWdlTmFtZSAudGV4dCgnSW50ZXJ2aWV3Jyk7XG4gICAgICAgIFxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdpbnRlcnZpZXdfZGV0YWlsJzpcbiAgICAgICAgXG4gICAgICAgIHRoaXMuJHBhZ2VOYW1lIC50ZXh0KCdJbnRlcnZpZXcnKTtcbiAgICAgICAgXG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2hpc3RvcnknOlxuICAgICAgICBcbiAgICAgICAgdGhpcy4kcGFnZU5hbWUgLnRleHQoJ1dhdGNoICYgSGlzdG9yeScpO1xuICAgICAgICBcblxuICAgICAgICBicmVhaztcblxuICAgIH1cblxuICAgIFR3ZWVuTWF4LnRvKHRoaXMuJHBhZ2VOYW1lLCAwLjYsIHt4OiAwLCByb3RhdGlvblo6IC05MCwgb3BhY2l0eTogMSwgZWFzZTogUG93ZXIzLmVhc2VPdXR9KTtcblxuICB9XG5cbiAgLy8g44Oa44O844K444GL44KJ6Zui44KM44KL44Go44GNIGJhY2vjgoJcbiAgb3V0TmV4dCgpIHtcblxuICAgIFR3ZWVuTWF4LnRvKHRoaXMuJG5leHQsIDAuOSwge3g6IDEwMCwgb3BhY2l0eTogMCwgZWFzZTogUG93ZXIzLmVhc2VPdXR9KTsgLy9zaWRlUiBuZXh0XG4gICAgVHdlZW5NYXgudG8odGhpcy4kYmFjaywgMC45LCB7eDogMTIwLCBvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjMuZWFzZU91dH0pOyAvL3NpZGVSIGJhY2tcblxuICAgIFR3ZWVuTWF4LnRvKCQoJyNzaWRlTCAuc25zLnBjJyksIDAuOSwge2xlZnQ6IC0xMCwgb3BhY2l0eTogMCxlYXNlOiBQb3dlcjMuZWFzZU91dH0pIC8vIHNpZGVMIHNucyBwY1xuICAgIFxuICB9XG5cbiAgLy8g44Oa44O844K444G45YWl44KL44Go44GNXG4gIGluTmV4dCgpIHtcblxuICAgIHRoaXMuY2hhbmdlTmV4dCgpO1xuXG4gIH1cblxuICBjaGFuZ2VOZXh0KCkge1xuXG4gICAgdmFyIGlkID0gZ2IuaW4ucGpheC5pZDtcblxuICAgIHN3aXRjaCAoaWQpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICB0aGlzLiRuZXh0LmhpZGUoKTtcbiAgICAgICAgVHdlZW5NYXgudG8oJCgnI3NpZGVMIC5zbnMucGMnKSwgMC42LCB7bGVmdDogNDAsIG9wYWNpdHk6IDEsZGVsYXk6IDEuMywgZWFzZTogUG93ZXIzLmVhc2VPdXR9KVxuXG4gICAgICAgIFR3ZWVuTWF4LnRvKCQoJyNoZWFkZXIgLnN1YlRpdCcpLCAwLjYsIHsgIC8vIGhlYWRlciBzdWJUaXQg6Zqg44GZXG4gICAgICAgICAgeTogLTYwLFxuICAgICAgICAgIG9wYWNpdHk6MCxcbiAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcbiAgICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgICAkKCcjaGVhZGVyIC5zdWJUaXQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbW92aWUnOlxuICAgICAgICBcbiAgICAgICAgdGhpcy4kbmV4dC5maW5kKCcudGV4dCcpLnRleHQoJ0ludGVydmlldycpO1xuICAgICAgICB0aGlzLiRuZXh0LnBhcmVudCgpLmF0dHIoeydocmVmJzonL2ludGVydmlldy8nfSk7XG4gICAgICAgIHRoaXMuJG5leHQuc2hvdygpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKCQoJyNoZWFkZXIgLnN1YlRpdCcpLCAwLjYsIHsgIC8vIGhlYWRlciBzdWJUaXQg6Zqg44GZXG4gICAgICAgICAgeTogLTYwLFxuICAgICAgICAgIG9wYWNpdHk6MCxcbiAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcbiAgICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgICAkKCcjaGVhZGVyIC5zdWJUaXQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW50ZXJ2aWV3JzpcbiAgICAgICAgXG4gICAgICAgIHRoaXMuJG5leHQuZmluZCgnLnRleHQnKS50ZXh0KCdXYXRjaCAmIEhpc3RvcnknKTtcbiAgICAgICAgdGhpcy4kbmV4dC5wYXJlbnQoKS5hdHRyKHsnaHJlZic6Jy9oaXN0b3J5Lyd9KTtcbiAgICAgICAgdGhpcy4kbmV4dC5zaG93KCk7XG5cbiAgICAgICAgVHdlZW5NYXguc2V0KCQoJyNoZWFkZXIgLnN1YlRpdCcpLCB7J2Rpc3BsYXknOiAnYmxvY2snfSk7IC8vIGhlYWRlciBzdWJUaXRcbiAgICAgICAgVHdlZW5NYXgudG8oJCgnI2hlYWRlciAuc3ViVGl0JyksIDAuNix7eTogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIzLmVhc2VPdXR9KTsgLy8gaGVhZGVyIHN1YlRpdFxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdpbnRlcnZpZXdfZGV0YWlsJzpcbiAgICAgICAgXG4gICAgICAgIHRoaXMuJG5leHQuZmluZCgnLnRleHQnKS50ZXh0KCdTQ1JPTEwnKTtcbiAgICAgICAgdGhpcy4kbmV4dC5wYXJlbnQoKS5hdHRyKHsnaHJlZic6JyNjb250ZW50c1N0YXJ0J30pO1xuICAgICAgICB0aGlzLiRuZXh0LnNob3coKTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLiRiYWNrLCAwLjYsIHt4OiAwLCBvcGFjaXR5OiAxLCBlYXNlOiBQb3dlcjMuZWFzZU91dH0pOyAvLyBiYWNrXG5cbiAgICAgICAgVHdlZW5NYXguc2V0KCQoJyNoZWFkZXIgLnN1YlRpdCcpLCB7J2Rpc3BsYXknOiAnYmxvY2snfSk7IC8vIGhlYWRlciBzdWJUaXRcbiAgICAgICAgVHdlZW5NYXgudG8oJCgnI2hlYWRlciAuc3ViVGl0JyksIDAuNix7eTogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIzLmVhc2VPdXR9KTsgLy8gaGVhZGVyIHN1YlRpdFxuXG4gICAgICAgIG5ldyBQYWdlU2Nyb2xsKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2hpc3RvcnknOlxuICAgICAgICBcbiAgICAgICAgdGhpcy4kbmV4dC5maW5kKCcudGV4dCcpLnRleHQoJ1NDUk9MTCcpO1xuICAgICAgICB0aGlzLiRuZXh0LnBhcmVudCgpLmF0dHIoeydocmVmJzonI2NvbnRlbnRzU3RhcnQnfSk7XG4gICAgICAgIHRoaXMuJG5leHQuc2hvdygpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnNldCgkKCcjaGVhZGVyIC5zdWJUaXQnKSwgeydkaXNwbGF5JzogJ2Jsb2NrJ30pOyAvLyBoZWFkZXIgc3ViVGl0XG4gICAgICAgIFR3ZWVuTWF4LnRvKCQoJyNoZWFkZXIgLnN1YlRpdCcpLCAwLjYse3k6IDAsb3BhY2l0eToxLGVhc2U6IFBvd2VyMy5lYXNlT3V0fSk7IC8vIGhlYWRlciBzdWJUaXRcblxuICAgICAgICBuZXcgUGFnZVNjcm9sbCgpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gICAgVHdlZW5NYXgudG8odGhpcy4kbmV4dCwgMC42LCB7eDogMCwgb3BhY2l0eTogMSwgZWFzZTogUG93ZXIzLmVhc2VPdXR9KTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvU2lkZVIuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEhvdmVyRWZmZWN0QmFja1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RCYWNrIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkdGFyZ2V0XG5cbiAgICAvLyBtb3Rpb25cbiAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAvLyDjgrnjg57jg5vjga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgcnVuKCkge1xuXG4gIH1cblxuICBvbkVudGVyICh0aGF0KSB7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQKSByZXR1cm5cblxuICAgIGlmICh0aGlzLnRsMDIpIHRoaXMudGwwMi5raWxsKCk7XG4gICAgdGhpcy50bDAxID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnRsMDFcbiAgICAgIC50bygkKHRoYXQpLmZpbmQoJ3NwYW4nKSwgMC40LCB7XG4gICAgICAgIHg6IDIwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSlcbiAgICAgIC50bygkKHRoYXQpLmZpbmQoJy5iYXInKSwgMC40LCB7XG4gICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4zNycpXG4gICAgICAgIFxuICB9XG5cbiAgb25MZWF2ZSAodGhhdCkge1xuXG4gICAgaWYgKGdiLmluLnUuaXNSZXNTUCkgcmV0dXJuXG5cbiAgICBpZiAodGhpcy50bDAxKSB0aGlzLnRsMDEua2lsbCgpO1xuICAgIHRoaXMudGwwMiA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy50bDAyXG4gICAgICAudG8oJCh0aGF0KS5maW5kKCcuYmFyJyksIDAuNSwge1xuICAgICAgICB3aWR0aDogNzAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9KVxuICAgICAgLnRvKCQodGhhdCkuZmluZCgnc3BhbicpLCAwLjUsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC40NScpXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge3NlbGYub25FbnRlci5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgICQodGhpcykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7c2VsZi5vbkxlYXZlLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLm9mZignbW91c2VlbnRlcicpO1xuICAgICAgJCh0aGlzKS5vZmYoJ21vdXNlbGVhdmUnKTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdEJhY2suanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog44Oa44O844K45YaF44Gu44Ki44Oz44Kr44O844K544Kv44Ot44O844Or44Kk44OZ44Oz44OI57O7XG4gKiBQcm9qZWN0OlxuICogRmlsZTogUGFnZVNjcm9sbFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlU2Nyb2xsIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLmNiID0gZnVuY3Rpb24oKXt9O1xuICAgIHRoaXMub25Db21wbGV0ZSA9IGZ1bmN0aW9uKCl7fTtcblxuICAgIHRoaXMudGVzdEFsZXJ0ID0gdGhpcy5fdGVzdEFsZXJ0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG4gICAgXG4gICAgdGhpcy50ZXN0QWxlcnQoKTtcblxuICB9XG5cbiAgcGFnZXRvcCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIOOCueOCr+ODreODvOODq1xuICAgIFR3ZWVuTWF4LnRvKCQoJ2JvZHksaHRtbCcpLCAwLjgsIHtcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgb25Db21wbGV0ZTooKT0+e1xuICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY2IoKTtcblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG4gIFxuICBfdGVzdEFsZXJ0ICgpe1xuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygndGVzdEFsZXJ0ISEhJyk7XG4gIH1cblxuICBwYWdlU2Nyb2xsVG8odGhhdCkge1xuXG4gICAgLy8g5beu5YiG5Y+W5b6XXG4gICAgdmFyIGRpZiA9IDA7XG4gICAgaWYgKCQodGhhdCkuZGF0YSgnZGlmZicpKSBkaWYgPSAkKHRoYXQpLmRhdGEoJ2RpZmYnKTtcblxuICAgIHZhciAkdGFyZ2V0ID0gJCgkKHRoYXQpLmF0dHIoXCJocmVmXCIpKTtcbiAgICB2YXIgcG9zID0gJHRhcmdldC5vZmZzZXQoKS50b3A7XG4gICAgcG9zID0gcG9zIC0gZGlmO1xuXG4gICAgVHdlZW5NYXgudG8oJCgnYm9keSxodG1sJyksIDAuOSwge3Njcm9sbFRvcDogcG9zLGVhc2U6IEV4cG8uZWFzZU91dH0pO1xuXG4gICAgbG9nKDEyMzQpO1xuXG4gIH1cblxuICBwYWdlU2Nyb2xsVG8wMih0aGF0KSB7XG5cbiAgICAvLyDlt67liIblj5blvpdcbiAgICB2YXIgZGlmID0gMDtcbiAgICBpZiAoJCh0aGF0KS5kYXRhKCdkaWZmJykpIGRpZiA9ICQodGhhdCkuZGF0YSgnZGlmZicpO1xuXG4gICAgdmFyICR0YXJnZXQgPSAkKCQodGhhdCkuZGF0YShcImxpbmtcIikpO1xuICAgIHZhciBwb3MgPSAkdGFyZ2V0Lm9mZnNldCgpLnRvcDtcbiAgICBwb3MgPSBwb3MgLSBkaWY7XG5cbiAgICBUd2Vlbk1heC50bygkKCdib2R5LGh0bWwnKSwgMC45LCB7c2Nyb2xsVG9wOiBwb3MsZWFzZTogRXhwby5lYXNlT3V0fSk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cyAoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKCcudG9Ub3AnKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGZ1bmN0aW9uKCl7XG5cbiAgICAgIHNlbGYucGFnZXRvcC5jYWxsKHNlbGYpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9KTtcblxuXG4gICAgbG9nKCcxMTEnKVxuXG4gICAgLy8gaHJlZuOBjCPjgaflp4vjgb7jgaPjgabjgYTjgovjgIFh44K/44Kw44KS44Kv44Oq44OD44Kv44GX44Gf6ZqbXG4gICAgJCgnYVtocmVmXj0jXScpLm5vdCgnLm5vdFNjcm9sbCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgIGxvZygxMjMpO1xuICAgICAgc2VsZi5wYWdlU2Nyb2xsVG8uY2FsbChzZWxmLHRoaXMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gaGlzdG9yeeOBrnBhc3QscHJlc2VudFxuICAgICQoJy5ibG9jazAxIC50ZXh0V3JhcDAyIC5pdGVtJykubm90KCcubm90U2Nyb2xsJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe3NlbGYucGFnZVNjcm9sbFRvMDIuY2FsbChzZWxmLHRoaXMpO3JldHVybiBmYWxzZX0pO1xuICAgIC8vIGhyZWbjgYwj44Gn5aeL44G+44Gj44Gm44GE44KL44CBdG9TY3JvbGzjgajjgYTjgYbjgq/jg6njgrnjgYzku5jliqDjgZXjgozjgZ/jgr/jgrDjgpLjgq/jg6rjg4Pjgq/jgZfjgZ/pmptcbiAgICAvLyAkKCdbaHJlZl49I10udG9TY3JvbGwnKS5ub3QoJy5ub3RTY3JvbGwnKS5vbignY2xpY2snLHRvU2Nyb2xsKTtcblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL19wYXJ0cy9QYWdlU2Nyb2xsLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBUaW1lXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuaXNTdGF0ZSA9ICcnO1xuICAgIHRoaXMuc3RhdGVMaXN0ID0gW1xuICAgICAgJ21vcm5pbmcnLFxuICAgICAgJ2FmdGVybm9vbicsXG4gICAgICAnbmlnaHQnXG4gICAgXVxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgICB0aGlzLmp1ZGdlU3RhdGUoKTtcbiBcbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgbG9nKGdiLmluLnUuZGF0ZSgpKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgZ2IuaW4udS50aW1lKCk7XG5cbiAgICBsb2coZ2IuaW4udS5ob3VyLGdiLmluLnUubWludXRlLGdiLmluLnUuc2Vjb25kKTtcblxuICB9XG5cbiAgZ2V0Tm93KCkge1xuXG5cbiAgfVxuICAgICAgIFxuICAvLyDjg4vjg6Xjg7zjg6jjg7zjgq/mmYLplpPjga7lj5blvpdcbiAgZ2V0Tm93QXROWSgpIHtcblxuICAgIGdiLmluLnUudGltZSgpO1xuICAgIHZhciBob3VyID0gZ2IuaW4udS5ob3VyXG4gICAgdmFyIGRpcyA9IDEzOyAvLyDjg4vjg6Xjg7zjg6jjg7zjgq/jgajjga7mmYLlt65cblxuICAgIGhvdXIgPSBob3VyIC0gZGlzO1xuICAgIGlmIChob3VyIDwgMCkgaG91ciA9IDI0ICsgaG91cjtcblxuICAgIHJldHVybiBob3VyO1xuXG4gIH1cblxuICAvLyDmnJ3lpJXlpJzliKTlrppcbiAganVkZ2VTdGF0ZSgpIHtcblxuICAgIHZhciBoID0gdGhpcy5nZXROb3dBdE5ZKCk7XG5cbiAgICAvLyDmnJ0gNuOAnDE1XG4gICAgaWYgKDYgPD0gaCAmJiBoIDw9IDE1KSB7XG5cbiAgICAgIHRoaXMuaXNTdGF0ZSA9IHRoaXMuc3RhdGVMaXN0WzBdO1xuXG4gICAgLy8g5aSVIDE244CcMjBcbiAgICB9IGVsc2UgaWYgKDE1IDwgaCAmJiBoIDw9IDIwKSB7XG5cbiAgICAgIHRoaXMuaXNTdGF0ZSA9IHRoaXMuc3RhdGVMaXN0WzFdO1xuXG4gICAgLy8g5aScIDIx44CcNVxuICAgIH0gZWxzZSBpZiAoKDIwIDwgaCAmJiBoIDw9IDIzKSB8fCAoMCA8PSBoICYmIGggPD01KSkge1xuXG4gICAgICB0aGlzLmlzU3RhdGUgPSB0aGlzLnN0YXRlTGlzdFsyXTtcblxuICAgIH1cblxuICAgIC8vIGxvZyh0aGlzLmlzU3RhdGUpO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgLy8gZ2IuaW4udXAuYWRkKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvVGltZS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU2Nyb2xsVHJhbnNpdGlvblxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVHJhbnNpdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCkge1xuXG4gICAgdGhpcy5wYWdlTGlzdCA9IHtcbiAgICAgICd0b3AnOiAwLFxuICAgICAgJ21vdmllJzogMSxcbiAgICAgICdpbnRlcnZpZXcnOiAyLFxuICAgICAgJ2hpc3RvcnknOiAzLFxuICAgIH1cblxuICAgIC8vIHZhcmlhYmxlXG4gICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICB0aGlzLm9sZCA9IG51bGw7XG4gICAgdGhpcy5uZXh0ID0gMTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGVuID0gNDtcblxuICAgIHRoaXMuaXNTd2l0Y2ggPSB0cnVlO1xuXG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgc3dpdGNoKCkge1xuXG4gICAgaWYgKCFnYi5pbi51LmlzSUUpIHZhciB2YWwgPSAzMDtcbiAgICBlbHNlIHZhciB2YWwgPSAwO1xuXG4gICAgLy8gbG9nKGdiLmluLnBqYXguaXNQamF4TG9jayx0aGlzLlNUQW1vdW50LHRoaXMuY3VycmVudCx0aGlzLmlzU3dpdGNoKTtcblxuICAgIC8vIHBqYXhsb2Nr5pmC44Gv5Yem55CG44GX44Gq44GEXG4gICAgaWYgKGdiLmluLnBqYXguaXNQamF4TG9jaykgcmV0dXJuO1xuXG4gICAgLy8g44Oa44O844K455Wq5Y+344KS5Y+W5b6XXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wYWdlTGlzdFtnYi5pbi5wamF4LmlkXTtcblxuICAgIC8v44Ob44Kk44O844Or44GMMOS7peS4iiDjgYvjgaQgY3VycmVudOOBjOS4gOeVquacgOWIneOBp+OBquOBhCDjgYvjgaQgc3dpdGNo5Y+v6IO954q25oWL44Gn44GC44KM44GwXG4gICAgaWYgKHRoaXMuU1RBbW91bnQgPiB2YWwgJiYgdGhpcy5jdXJyZW50ID4gMCAmJiB0aGlzLmlzU3dpdGNoKSB7XG5cbiAgICAgIC8vIGhpc3Rvcnnjg5rjg7zjgrjjga7jgajjgY3jga/kuIrjgrnjgq/jg63jg7zjg6vjgZfjgabjgoJpbnRlcnZpZXcgaW5kZXjjgavpo5vjgbDjgZXjgarjgYRcbiAgICAgIGlmIChnYi5pbi5wamF4LmlkPT0naGlzdG9yeScpIHJldHVybjtcblxuICAgICAgdGhpcy5pc1N3aXRjaCA9IGZhbHNlO1xuICBcbiAgICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ3ByZXYnKTtcblxuICAgICAgdmFyIHBhZ2VOYW1lID0gT2JqZWN0LmtleXModGhpcy5wYWdlTGlzdCkuZmlsdGVyKCAoa2V5KSA9PiB7IHJldHVybiB0aGlzLnBhZ2VMaXN0W2tleV0gPT09IHRoaXMuY3VycmVudCB9KVswXTtcblxuICAgICAgJCgnLnBqYXhUb18nK3BhZ2VOYW1lKS50cmlnZ2VyKCdjbGljaycpO1xuXG5cbiAgICAvL+ODm+OCpOODvOODq+OBjDDku6XkuIsg44GL44GkIGN1cnJlbnTjgYzkuIDnlarmnIDlvozjgafjgarjgYQg44GL44GkIHN3aXRjaOWPr+iDveeKtuaFi+OBp+OBguOCjOOBsFxuICAgIH0gZWxzZSBpZih0aGlzLlNUQW1vdW50IDwgLXZhbCAmJiB0aGlzLmN1cnJlbnQgPCB0aGlzLmxlbi0xICYmIHRoaXMuaXNTd2l0Y2gpIHtcblxuICAgICAgdGhpcy5pc1N3aXRjaCA9IGZhbHNlO1xuICAgICAgXG4gICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCduZXh0Jyk7XG5cbiAgICAgIHZhciBwYWdlTmFtZSA9IE9iamVjdC5rZXlzKHRoaXMucGFnZUxpc3QpLmZpbHRlciggKGtleSkgPT4geyByZXR1cm4gdGhpcy5wYWdlTGlzdFtrZXldID09PSB0aGlzLmN1cnJlbnQgfSlbMF07XG5cbiAgICAgICQoJy5wamF4VG9fJytwYWdlTmFtZSkudHJpZ2dlcignY2xpY2snKTtcblxuICAgIH07XG5cblxuICB9XG5cbiAgY2FsY3VsYXRlT3JkZXIoZGlyKSB7XG5cbiAgICB0aGlzLm9sZCA9IHRoaXMuY3VycmVudDtcblxuICAgIGlmIChkaXI9PSduZXh0Jykge1xuXG4gICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQ+dGhpcy5sZW4tMSkgdGhpcy5jdXJyZW50PXRoaXMubGVuLTE7XG4gICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5jdXJyZW50LS07XG4gICAgICBpZiAodGhpcy5jdXJyZW50PDApIHRoaXMuY3VycmVudD0wOyAgXG4gICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgfSAgICAgXG5cbiAgfVxuXG4gIG9uTW91c2VXaGVlbChlLCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpIHtcblxuICAgIC8vIG1lbnXjgYzplovjgYTjgabjgYTjgovjgajjgY3jga/jgrnjgq/jg63jg7zjg6vpgbfnp7vjgZXjgZvjgarjgYRcbiAgICBpZiAoZ2IuaW4ubWVudS5pc09wZW4pIHJldHVybjtcbiAgICAvLyByZXMgc3Djga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQKSByZXR1cm5cblxuICAgIHRoaXMuU1RBbW91bnQgPSBnYi5pbi5zLlNUQW1vdW50O1xuICAgIFxuICAgIHRoaXMuc3dpdGNoKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gICAgZ2IuaW4ucy5hZGQoJ1Njcm9sbFRyYW5zaXRpb24nLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpKTtcblxuXG4gIH1cbiAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU2Nyb2xsVHJhbnNpdGlvbi5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGFnZVRvcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuICAgIHRoaXMucmVhZHkoKTtcblxuICB9XG5cbiAgcmVhZHkoKSB7XG5cblxuICB9XG5cbiAgcGFnZXRvcCgpIHtcblxuICAgIC8vIOOCueOCr+ODreODvOODq1xuICAgIFR3ZWVuTWF4LnRvKCQoJ2JvZHksaHRtbCcpLCAwLjgsIHtcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cyAoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKCcudG9Ub3AnKS5vbignY2xpY2snLHRoaXMucGFnZXRvcC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9fcGFydHMvUGFnZVRvcC5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTbnNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IG1ldGFEYXRhIGZyb20gXCJqc29uLWxvYWRlciEuLi8uLi8uLi8uLi9lanMvaW5jL21ldGFEYXRhLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25zIHtcblxuICBjb25zdHJ1Y3RvcigkZmIsJHR3LCRsaW5lLCRtYWlsKXtcblxuICAgIHRoaXMuJGZiID0gJGZiO1xuICAgIHRoaXMuJHR3ID0gJHR3O1xuICAgIHRoaXMuJGxpbmUgPSAkbGluZTtcbiAgICB0aGlzLiRtYWlsID0gJG1haWw7XG5cbiAgICB0aGlzLmZiID0ge1xuICAgICAgJHRhcmdldDogJGZiLFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICB9XG5cbiAgICB0aGlzLnR3ID0ge1xuICAgICAgJHRhcmdldDogJHR3LFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICAgIGhhc2g6ICdoYXNoJyxcbiAgICB9XG5cbiAgICB0aGlzLmxpbmUgPSB7XG4gICAgICAkdGFyZ2V0OiAkbGluZSxcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc3dpdGNoTWV0YSgpIHtcblxuICAgIHZhciBwID0gZ2IuaW4ucGpheC5pZDtcbiAgICBpZiAocCA9PSAnaW50ZXJ2aWV3X2RldGFpbCcpIHtcblxuICAgICAgbG9nKCQoJy5zZWN0aW9uJykuaGFzQ2xhc3MoJ3NlY3Rpb24wM19kZXRhaWwwMScpKTtcbiAgICAgIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDEnKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMSc7XG4gICAgICBlbHNlIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDInKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMic7XG4gICAgICBlbHNlIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDMnKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMyc7XG4gIFxuICAgIH1cblxuICAgIC8vIHZhciBkID0gZ2IuaW4uY29uZi5tZXRhW3BdO1xuICAgIHZhciBkID0gbWV0YURhdGFbcF07XG5cbiAgICAkKCd0aXRsZScpLnRleHQoKTtcbiAgICAkKCcubWV0YURlcycpLmF0dHIoeydjb250ZW50JzogZC5kZXNjcmlwdGlvbn0pO1xuICAgICQoJy5tZXRhS2V5JykuYXR0cih7J2NvbnRlbnQnOiBkLmtleXdvcmR9KTtcblxuICAgICQoJy5mYlRpdCcpLmF0dHIoeydjb250ZW50JzogZC5mYi50aXR9KTtcbiAgICAkKCcuZmJEZXMnKS5hdHRyKHsnY29udGVudCc6IGQuZmIuZGVzfSk7XG4gICAgJCgnLmZiSW1nJykuYXR0cih7J2NvbnRlbnQnOiBkLmZiLmltZ30pO1xuICAgICQoJy5mYlVybCcpLmF0dHIoeydjb250ZW50JzogZC5mYi51cmx9KTtcblxuICAgICQoJy50d1RpdCcpLmF0dHIoeydjb250ZW50JzogZC50dy50aXR9KTtcbiAgICAkKCcudHdEZXMnKS5hdHRyKHsnY29udGVudCc6IGQudHcuZGVzfSk7XG4gICAgJCgnLnR3SW1nJykuYXR0cih7J2NvbnRlbnQnOiBkLnR3LmltZ30pO1xuICAgICQoJy50d1VybCcpLmF0dHIoeydjb250ZW50JzogZC50dy51cmx9KTtcblxuXG4gIH1cblxuICBzZXR0aW5nKCkge1xuXG4gICAgdGhpcy5mYiA9IHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuJGZiLFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICB9XG5cbiAgICB0aGlzLnR3ID0ge1xuICAgICAgJHRhcmdldDogdGhpcy4kdHcsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgaGFzaDogJ2hhc2gnLFxuICAgIH1cblxuICAgIHRoaXMubGluZSA9IHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuJGxpbmUsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgIH1cblxuICB9XG5cbiAgc2V0T2dJbWcoKSB7XG5cbiAgICAvLyAkKCcub2dJbWdfZmInKS5hdHRyKCdjb250ZW50JywgdGhpcy5mYi5pbWcpO1xuICAgIC8vICQoJy5vZ0ltZ190dycpLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnR3LmltZyk7XG5cbiAgfVxuXG4gIGp1bXBGQihlKSB7XG5cbiAgICAgIHRoaXMub3BlbldpbmRvdygnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JyArIHRoaXMuZmIudXJsKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuXG4gIGp1bXBUVyhlKSB7XG5cbiAgICB0aGlzLm9wZW5XaW5kb3coJ2h0dHA6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPScgKyB0aGlzLnR3LnVybCArICcmdGV4dD0nICsgdGhpcy50dy5kZXMpO1xuICAgIC8vIHRoaXMub3BlbldpbmRvdygnaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9JyArIHRoaXMudHcudXJsICsgJyZ0ZXh0PScgKyB0aGlzLnR3LnRleHQgKyAnJmhhc2h0YWdzPScgKyB0aGlzLnR3Lmhhc2gpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICBqdW1wTElORSgpIHtcblxuICAgICAgdGhpcy5vcGVuV2luZG93KCdodHRwOi8vbGluZS5tZS9SL21zZy90ZXh0Lz8nICsgdGhpcy5saW5lLnRpdCArICclMEEnICsgdGhpcy5saW5lLnVybCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU2VuZE1haWwoKSB7XG5cbiAgICB2YXIgYWRkcmVzcyA9ICcnO1xuICAgIHZhciBzdWIgPSAnJztcbiAgICB2YXIgYm9keSA9IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSsnXFxuJytsb2NhdGlvbi5ocmVmKTtcblxuICAgIGxvY2F0aW9uLmhyZWYgPSAnbWFpbHRvOicgKyBhZGRyZXNzICsgJz9zdWJqZWN0PScgKyBzdWIgKyAnJmJvZHk9JyArIGJvZHk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIG9wZW5XaW5kb3codXJsLCB3LCBoKSB7XG5cbiAgICAgIGlmKHcgPT09IHVuZGVmaW5lZCkgdyA9IDYwMDtcbiAgICAgIGlmKGggPT09IHVuZGVmaW5lZCkgaCA9IDYwMDtcblxuICAgICAgdmFyIGwgPSBOdW1iZXIoKHdpbmRvdy5zY3JlZW4ud2lkdGgtdykvMik7XG4gICAgICB2YXIgdCA9IE51bWJlcigod2luZG93LnNjcmVlbi5oZWlnaHQtaCkvMik7XG5cbiAgICAgIHdpbmRvdy5vcGVuKHVybCwnbmV3X3dpbmRvdycsXG4gICAgICAgICAgICAgICAgJ21lbnViYXI9bm8sJyArXG4gICAgICAgICAgICAgICAgJ3Rvb2xiYXI9bm8sJyArXG4gICAgICAgICAgICAgICAgJ3Jlc2l6YWJsZT15ZXMsJyArXG4gICAgICAgICAgICAgICAgJ3Njcm9sbGJhcnM9eWVzLCcgK1xuICAgICAgICAgICAgICAgICdoZWlnaHQ9JyArIGggKyAnLCcgK1xuICAgICAgICAgICAgICAgICd3aWR0aD0nICsgdyArICcsJyArXG4gICAgICAgICAgICAgICAgJ2xlZnQ9JyArIGwgKyAnLCcgK1xuICAgICAgICAgICAgICAgICd0b3A9JyArIHRcbiAgICAgICAgICAgICAgKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdGhpcy5mYi4kdGFyZ2V0Lm9uKCdjbGljaycsIHRoaXMuanVtcEZCLmJpbmQodGhpcykpO1xuICAgIHRoaXMudHcuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLmp1bXBUVy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmxpbmUuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLmp1bXBMSU5FLmJpbmQodGhpcykpO1xuICAgIGlmICh0aGlzLiRtYWlsKSB0aGlzLiRtYWlsLm9uKCdjbGljaycsICgpPT57dGhpcy5vblNlbmRNYWlsKCk7cmV0dXJuIGZhbHNlO30pO1xuXG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG5cbiAgICB0aGlzLmZiLiR0YXJnZXQub2ZmKCdjbGljaycpO1xuICAgIHRoaXMudHcuJHRhcmdldC5vZmYoJ2NsaWNrJyk7XG4gICAgdGhpcy5saW5lLiR0YXJnZXQub2ZmKCdjbGljaycpO1xuICAgIGlmICh0aGlzLiRtYWlsKSB0aGlzLiRtYWlsLm9mZignY2xpY2snKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9TbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZXNjcmlwdGlvblwiOiBcImRlc2N0aXB0aW9uXCIsXG5cdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcIm9ncEltZ1BhdGhcIjogXCJcIixcblx0XCJ0b3BcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwibW92aWVcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaW50ZXJ2aWV3XCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAxXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAyXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAzXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImhpc3RvcnlcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2pzb24tbG9hZGVyIS9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9lanMvaW5jL21ldGFEYXRhLmpzb25cbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU2xpZGVyIHNzc1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIHtcblxuICBjb25zdHJ1Y3Rvcigkd3JhcCkge1xuXG4gICAgLy8gZG9tXG4gICAgdGhpcy4kaW1nID0gJHdyYXAuZmluZCgnLnNsaWRlciAuaXRlbScpO1xuICAgIHRoaXMuJG92ZXJsYXkgPSAkd3JhcC5maW5kKCcub3ZlcmxheScpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICB0aGlzLm9sZCA9IG51bGw7XG4gICAgdGhpcy5uZXh0ID0gMTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGVuID0gdGhpcy4kaW1nLmxlbmd0aDtcblxuICAgIHRoaXMuVGltZXIgPSBudWxsO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIC8vIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gdGhpcy5zd2l0Y2hEZXRhaWxzKCk7XG5cbiAgICAvLyB0aGlzLnMgPSBuZXcgU3dpcGUoKTtcbiAgICAvLyB0aGlzLnMub25OZXh0ID0gdGhpcy5yaWdodC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMucy5vblByZXYgPSB0aGlzLmxlZnQuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgLy8g5Y+z44G4XG4gIHJpZ2h0KCkge1xuXG4gICAgLy8gaWYgKHRoaXMuY3VycmVudCA9PSB0aGlzLmxlbiAtIDEpIHJldHVybjtcblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgLy8gZmxhc2hcbiAgICAvLyB0bFxuICAgIC8vICAgLy8g55m944GPXG4gICAgLy8gICAuc2V0KHRoaXMuJG92ZXJsYXksIHtvcGFjaXR5OiAxfSlcbiAgICAvLyAgIC50byh0aGlzLiRvdmVybGF5LCAxLjAsIHtcbiAgICAvLyAgICAgb3BhY2l0eTogMCxcbiAgICAvLyAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgLy8gICAgIG9uU3RhcnQ6ICgpPT57XG5cbiAgICAvLyAgICAgICAvLyBuZXh0XG4gICAgLy8gICAgICAgVHdlZW5NYXguc2V0KHRoaXMuJGltZy5lcSh0aGlzLm5leHQpLCB7b3BhY2l0eTogMX0pO1xuXG4gICAgLy8gICAgICAgLy8gY3VycmVudFxuICAgIC8vICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRpbWcuZXEodGhpcy5jdXJyZW50KSwge29wYWNpdHk6IDB9KTtcbiAgICAgICAgICBcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSlcblxuICAgIHRsXG4gICAgICAuc2V0KHRoaXMuJGltZy5lcSh0aGlzLm5leHQpLCB7eDogNjB9KVxuICAgICAgLnRvKHRoaXMuJGltZy5lcSh0aGlzLm5leHQpLCAwLjYsIHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgeDogMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICB9KVxuICAgICAgLnRvKHRoaXMuJGltZy5lcSh0aGlzLmN1cnJlbnQpLCAwLjYsIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeDogLTYwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcbiAgICAgIH0sJy09MC4zJylcblxuICAgIC8vIGN1cnJlbnTjga7oqIjnrpdcbiAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCdyaWdodCcpO1xuXG4gICAgLy8gdGV4dOOBruWkieabtFxuICAgIC8vIHRoaXMuc3dpdGNoRGV0YWlscygpO1xuXG4gICAgLy8gaW5kaWNhdG9y44Gu5aSJ5pu0XG4gICAgLy8gdGhpcy5zd2l0Y2hJbmRpY2F0b3IoKTtcblxuICB9XG5cbiAgLy8g5bem44G4XG4gIGxlZnQoKSB7XG5cbiAgICAvLyBpZiAodGhpcy5jdXJyZW50ID09IDApIHJldHVybjtcblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgLy8gdGxcbiAgICAvLyAgIC8vIOeZveOBj1xuICAgIC8vICAgLnNldCh0aGlzLiRvdmVybGF5LCB7b3BhY2l0eTogMX0pXG4gICAgLy8gICAudG8odGhpcy4kb3ZlcmxheSwgMC42LCB7XG4gICAgLy8gICAgIG9wYWNpdHk6IDAsXG4gICAgLy8gICAgIG9uU3RhcnQ6ICgpPT57XG5cbiAgICAvLyAgICAgICAvLyBuZXh0XG4gICAgLy8gICAgICAgVHdlZW5NYXguc2V0KHRoaXMuJGltZy5lcSh0aGlzLnByZXYpLCB7b3BhY2l0eTogMX0pO1xuXG4gICAgLy8gICAgICAgLy8gY3VycmVudFxuICAgIC8vICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRpbWcuZXEodGhpcy5jdXJyZW50KSwge29wYWNpdHk6IDB9KTtcbiAgICAgICAgICBcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSlcbiAgICBcbiAgICB0bFxuICAgICAgLnNldCh0aGlzLiRpbWcuZXEodGhpcy5wcmV2KSwge3g6IC02MH0pXG4gICAgICAudG8odGhpcy4kaW1nLmVxKHRoaXMucHJldiksIDAuNiwge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB4OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcbiAgICAgIH0pXG4gICAgICAudG8odGhpcy4kaW1nLmVxKHRoaXMuY3VycmVudCksIDAuNiwge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB4OiA2MCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICB9LCctPTAuMycpXG5cbiAgICAvLyBjdXJyZW5044Gu6KiI566XXG4gICAgdGhpcy5jYWxjdWxhdGVPcmRlcignbGVmdCcpO1xuXG4gICAgLy8gdGV4dOOBruWkieabtFxuICAgIC8vIHRoaXMuc3dpdGNoRGV0YWlscygpO1xuXG4gICAgLy8gaW5kaWNhdG9y44Gu5aSJ5pu0XG4gICAgLy8gdGhpcy5zd2l0Y2hJbmRpY2F0b3IoKTtcblxuICB9XG5cbiAgc3dpY3RoQXJyb3coKSB7XG5cbiAgICAvLyDlj7Pnq69cbiAgICBpZiAodGhpcy5jdXJyZW50ID09IHRoaXMubGVuIC0gMSkge1xuXG4gICAgICB2YXIgc3JjID0gdGhpcy4kYXJyb3dSLmF0dHIoJ3NyYycpO1xuICAgICAgc3JjID0gZ2IuaW4udS5zdHJSZXBsYWNlKHNyYywgJ19vbicsICdfb2ZmJyk7XG4gICAgICB0aGlzLiRhcnJvd1IuYXR0cignc3JjJyxzcmMpO1xuXG4gICAgLy8g5bem56uvXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnQgPT0gMCkge1xuXG4gICAgICB2YXIgc3JjID0gdGhpcy4kYXJyb3dMLmF0dHIoJ3NyYycpO1xuICAgICAgc3JjID0gZ2IuaW4udS5zdHJSZXBsYWNlKHNyYywgJ19vbicsICdfb2ZmJyk7XG4gICAgICB0aGlzLiRhcnJvd0wuYXR0cignc3JjJyxzcmMpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdmFyIHNyYyA9IHRoaXMuJGFycm93TC5hdHRyKCdzcmMnKTtcbiAgICAgIHNyYyA9IGdiLmluLnUuc3RyUmVwbGFjZShzcmMsICdfb2ZmJywgJ19vbicpO1xuICAgICAgdGhpcy4kYXJyb3dMLmF0dHIoJ3NyYycsc3JjKTtcblxuICAgICAgdmFyIHNyYyA9IHRoaXMuJGFycm93Ui5hdHRyKCdzcmMnKTtcbiAgICAgIHNyYyA9IGdiLmluLnUuc3RyUmVwbGFjZShzcmMsICdfb2ZmJywgJ19vbicpO1xuICAgICAgdGhpcy4kYXJyb3dSLmF0dHIoJ3NyYycsc3JjKTtcblxuICAgIH1cblxuICB9XG5cbiAgc3dpdGNoRGV0YWlscygpIHtcblxuICAgIHZhciB0ID0gdGhpcy50ZXh0TGlzdFt0aGlzLmN1cnJlbnRdO1xuICAgIHZhciBwID0gdGhpcy5wcmljZUxpc3RbdGhpcy5jdXJyZW50XTtcblxuICAgIHRoaXMuJHRleHQuaHRtbCh0KTtcbiAgICB0aGlzLiRwcmljZS50ZXh0KHApO1xuXG4gIH1cblxuICBzd2l0Y2hJbmRpY2F0b3IoKSB7XG5cbiAgICB0aGlzLiRpbmRpY2F0b3JcbiAgICAgIC5yZW1vdmVDbGFzcygnaXNBY3RpdmUnKVxuICAgICAgLmVxKHRoaXMuY3VycmVudCkuYWRkQ2xhc3MoJ2lzQWN0aXZlJyk7XG5cbiAgfVxuXG4gIGNhbGN1bGF0ZU9yZGVyKGRpcikge1xuXG4gICAgdGhpcy5vbGQgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICAvLyDnq6/jgafmraLjgoHjgotcbiAgICAvLyBpZiAoZGlyPT0ncmlnaHQnKSB7XG5cbiAgICAvLyAgIHRoaXMuY3VycmVudCsrO1xuICAgIC8vICAgaWYgKHRoaXMuY3VycmVudD50aGlzLmxlbi0xKSB0aGlzLmN1cnJlbnQ9dGhpcy5sZW4tMTtcbiAgICAvLyAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgIC8vICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICAvLyB9IGVsc2Uge1xuXG4gICAgLy8gICB0aGlzLmN1cnJlbnQtLTtcbiAgICAvLyAgIGlmICh0aGlzLmN1cnJlbnQ8MCkgdGhpcy5jdXJyZW50PTA7ICBcbiAgICAvLyAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgIC8vICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICAvLyB9XG5cbiAgICAvLyDjg6vjg7zjg5dcbiAgICBpZiAoZGlyPT0ncmlnaHQnKSB7XG5cbiAgICAgIHRoaXMuY3VycmVudCsrO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50PnRoaXMubGVuLTEpIHtcblxuICAgICAgICB0aGlzLmN1cnJlbnQ9MDtcbiAgICAgICAgdGhpcy5uZXh0PXRoaXMuY3VycmVudCsxO1xuICAgICAgICB0aGlzLnByZXY9dGhpcy5sZW4tMTtcbiAgICAgICAgbG9nKHRoaXMuY3VycmVudCk7XG4gICAgICAgIGxvZyh0aGlzLm5leHQpO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQtMTtcblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50PT10aGlzLmxlbi0xKSB7XG5cbiAgICAgICAgdGhpcy5uZXh0PTA7XG4gICAgICAgIHRoaXMucHJldj10aGlzLmN1cnJlbnQtMTtcblxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5jdXJyZW50LS07XG4gICAgICBpZiAodGhpcy5jdXJyZW50PDApIHtcblxuICAgICAgICB0aGlzLmN1cnJlbnQ9dGhpcy5sZW4tMTtcbiAgICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jdXJyZW50KzE7XG4gICAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBhdnRpdmXjgavjgZnjgovjgYvjgZfjgarjgYTjgYvjga7lh6bnkIYgICAgXG4gICAgLy8gYXJyb3dcbiAgICAvLyB0aGlzLnN3aWN0aEFycm93KCk7XG5cbiAgfVxuXG4gIGF1dG9Td2ljdGgoKSB7XG5cbiAgICB0aGlzLnJpZ2h0KCk7XG5cbiAgICB0aGlzLlRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuXG4gICAgICB0aGlzLmF1dG9Td2ljdGgoKTtcblxuICAgIH0sNTAwMClcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgLy8gdGhpcy4kYXJyb3dMLm9uKCdjbGljaycsIHRoaXMubGVmdC5iaW5kKHRoaXMpKTtcbiAgICAvLyB0aGlzLiRhcnJvd1Iub24oJ2NsaWNrJywgdGhpcy5yaWdodC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmF1dG9Td2ljdGgoKTtcblxuICB9XG4gIFxuICByZW1vdmVFdmVudHMoKSB7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5UaW1lcik7XG4gICAgdGhpcy5yaWdodCgpO1xuXG4gIH1cbiAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvU2xpZGVyVG9wLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMYXlvdXRcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBTaXplIGZyb20gJy4vU2l6ZS9TaXplLmpzJztcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL1Bvc3Rpb24vUG9zaXRpb24uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgICB0aGlzLnNpemUgPSBuZXcgU2l6ZSgpOyAvLyBhZGp1c3Qgc2l6ZVxuXG4gICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKCk7IC8vIGFkanVzdCBwb3NpdGlvblxuICAgICAgXG4gIH1cblxuICBzdGF0aWMgcmVzZXQoKSB7XG5cbiAgICAvLyBzY2FsZeOBp+Wkp+OBjeOBj+OBl+OBpuOBhOOCi+mWouS/guS4iuOAgemrmOOBleOCkjEwMCXjgavjgZfjgabjga/jgYTjgZHjgarjgYRcbiAgICBpZiAoZ2IuaW4ucGpheC5pZCA9PSAnaGlzdG9yeScgfHwgZ2IuaW4ucGpheC5pZCA9PSAnaW50ZXJ2aWV3X2RldGFpbCcpIHtcblxuICAgICAgVHdlZW5NYXguc2V0KCQoJyNpbm5lcicpLCB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgfSk7XG4gICAgICBUd2Vlbk1heC5zZXQoJCgnI2JnV3JhcCcpLCB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgfSk7XG5cbiAgICAgIFR3ZWVuTWF4LnNldCgkKCcjd3JhcHBlcicpLCB7XG4gICAgICAgICdvdmVyZmxvdyc6J3Zpc2libGUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBUd2Vlbk1heC5zZXQoJCgnI2lubmVyLCAjYmdXcmFwJyksIHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nOicwIDAnXG4gICAgICB9KTtcblxuICAgICAgVHdlZW5NYXguc2V0KCQoJyN3cmFwcGVyJyksIHtcbiAgICAgICAgJ292ZXJmbG93JzondmlzaWJsZScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICB9KTtcblxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuICAgICAgIFxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvTGF5b3V0LmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTaXplXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgU2NhbGUgZnJvbSAnLi9TY2FsZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpemUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuICAgIFxuICAgIC8vIGdiLmluLnUuc2V0SW1nU1BTaXplKCQoJ2ltZycpKTsgLy8gZm9yIHNwIGltZ1xuXG4gICAgLy8gbmV3IGdiLlJlc3BvbnNpdmVGb250U2l6ZSgkKCcuZm9udFJlc3BvbnNpdmUnKSk7IC8v44Os44K544Od44Oz44K344OW5pmC44OV44Kp44Oz44OI44K144Kk44K644Gu5aSJ5pu0XG5cbiAgICB0aGlzLnNjYWxlID0gbmV3IFNjYWxlKCk7IC8vIHJlc2l6ZVxuXG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgLy8gZ2IuaW4udS5zZXRJbWdTUFNpemUoJCgnaW1nJykpOyAvLyBmb3Igc3AgaW1nXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIC8vIGdiLmluLnIuYWRkKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TaXplLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMYXlvdXRcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FsZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLlNQQmFzZVcgPSAzNzU7XG4gICAgdGhpcy5QQ0Jhc2VXID0gMTMwMDtcblxuICAgIHRoaXMucmF0ZSA9IDE7XG4gICAgdGhpcy5XID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLiR0YXJnZXRMaXN0ID0gW1xuICAgICAge1xuICAgICAgICAnJHRhcmdldCc6ICQoJy5tZW51SW5uZXInKSxcbiAgICAgICAgJ3NjYWxlJzogJ3NwT25seScgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAnJHRhcmdldCc6ICQoJy5zZWN0aW9uMDNfZGV0YWlsJyksXG4gICAgICAvLyAgICdzY2FsZSc6ICdib3RoJyAvLyBzcE9ubHkgcGNPbmx5IGJvdGhcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgICckdGFyZ2V0JzogJCgnLnNlY3Rpb24wNCcpLFxuICAgICAgLy8gICAnc2NhbGUnOiAnYm90aCcgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICAvLyB9LFxuICAgIF1cblxuICAgIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgXG4gIH1cblxuICBydW4oKSB7XG5cbiAgICB0aGlzLlcgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB0aGlzLmlXID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLnNjYWxlKCk7XG4gICAgdGhpcy53cmFwKCk7XG5cbiAgfVxuXG4gIC8vIOaLoeWkp1xuICBzY2FsZSgpIHtcblxuICAgIC8vIGJw44Gu5aC05ZCI44Guc2NhbGVcbiAgICBpZiAodGhpcy5pVyA8PSBnYi5pbi5jb25mLmJwKSB7XG5cbiAgICAgIC8vIHdpZHRo44GL44KJcmF0ZeOCkuioiOeul1xuICAgICAgLy8gdGhpcy5yYXRlID0gZ2IuaW4udS5mbG9hdEZvcm1hdCh0aGlzLlcgLyB0aGlzLlNQQmFzZVcgLCAyKTtcbiAgICAgIHRoaXMucmF0ZSA9IHRoaXMuVyAvIHRoaXMuU1BCYXNlVztcblxuICAgICAgLy8gc2NhbGXjgZnjgovjg6rjgrnjg4jjgpLjg6vjg7zjg5dcbiAgICAgICQuZWFjaCh0aGlzLiR0YXJnZXRMaXN0LCAoaW5kZXgsIHZhbCk9PntcblxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdib3RoJyB8fCB2YWwuc2NhbGUgPT0gJ3NwT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuU1BCYXNlVyxcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLnJhdGUsXG4gICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyB3aWR0aOOBi+OCiXJhdGXjgpLoqIjnrpdcbiAgICAgIC8vIHRoaXMucmF0ZSA9IGdiLmluLnUuZmxvYXRGb3JtYXQodGhpcy5XIC8gdGhpcy5QQ0Jhc2VXICwgMik7XG4gICAgICBpZiAodGhpcy5XID4gMTMwMCkgdGhpcy5XID0gMTMwMDtcbiAgICAgIHRoaXMucmF0ZSA9IHRoaXMuVyAvIHRoaXMuUENCYXNlVztcblxuICAgICAgLy8gc2NhbGXjgZnjgovjg6rjgrnjg4jjgpLjg6vjg7zjg5dcbiAgICAgICQuZWFjaCh0aGlzLiR0YXJnZXRMaXN0LCAoaW5kZXgsIHZhbCk9PntcblxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdib3RoJyB8fCB2YWwuc2NhbGUgPT0gJ3BjT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuUENCYXNlVyxcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLnJhdGUsXG4gICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g44GT44Gh44KJ44Gu5aC05ZCI44Gv44CBc2NhbGXjgpLmiLvjgZlcbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnc3BPbmx5Jykge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KHZhbC4kdGFyZ2V0LCB7XG4gICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgfSk7ICBcblxuICAgIH1cblxuICB9XG5cbiAgLy8gc2NhbGXjgZfjgZ/jgonjgIHlhYPjga7lpKfjgY3jgZXliIbkvZnnmb3jgYzjgafjgY3jgovjga7jgadvdmVyZmxvdyBoaWRkZW7jgafmtojjgZlcbiAgd3JhcCgpIHtcblxuXG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgdGhpcy5ydW4oKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQoJ3NjYWxlJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGUuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBvc2l0aW9uXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDkuIrkuIvkuK3lpK7lr4TjgZtcbiAgICB0aGlzLnNldENlbnRlcigpO1xuXG4gIH1cblxuICBzZXRDZW50ZXIoKSB7XG5cbiAgICAkKCcucG9zQ2VudGVyJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5hZGp1c3QoKTtcbiAgICAgIFxuICAgIH0pO1xuICAgICQoJy5wb3NDZW50ZXJXJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5hZGp1c3RXKCk7XG4gICAgICBcbiAgICB9KTtcbiAgICAkKCcucG9zQ2VudGVySCcpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykuYWRqdXN0SCgpO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgdGhpcy5zZXRDZW50ZXIoKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQoJ3NldENlbnRlcicsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1Bvc3Rpb24vUG9zaXRpb24uanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIERpc3BsYXlPcGVuaW5nXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5T3BlbmluZyB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNob3dQYWdlKCk7XG4gICAgdGhpcy5lZmZlY3QoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyBnYi5pbi5MYXlvdXQuc2l6ZS5zY2FsZS5ydW4oKTtcbiAgICBnYi5pbi5ybS5yZWFkeVBlcmNlbnQucmVtb3ZlKCk7XG5cbiAgICAvLyBzaWRlUuWkieabtFxuICAgIGdiLmluLnNpZGVSLmluTnVtKCk7XG4gICAgZ2IuaW4uc2lkZVIuaW5QYWdlTmFtZSgpO1xuICAgIGdiLmluLnNpZGVSLmluTmV4dCgpO1xuICAgIGdiLmluLm5hdi5pblBhZ2UoKTtcblxuICAgIC8vIOS6iOOCgea8lOWHumNhbnZhc+OBrnNldHVw44KS44GX44Gm44GK44GPXG4gICAgZ2IuaW4uU2VjMDJCZy5jcmVhdGUoKTtcblxuICB9XG5cbiAgc2hvd1BhZ2UoKSB7XG5cbiAgICAvLyDlkITjg5rjg7zjgrhvcGVuaW5nXG4gICAgdmFyIGlkID0gZ2IuaW4ucGpheC5pZDtcblxuICAgIHN3aXRjaCAoaWQpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICBnYi5pbi5tZW51LnN3aXRjaEFjdGl2ZSgwKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21vdmllJzpcblxuICAgICAgICBnYi5pbi5TZWMwMkJnLnBsYXkoKTtcbiAgICAgICAgZ2IuaW4ubWVudS5zd2l0Y2hBY3RpdmUoMSk7XG5cbiAgICAgICAgLy8gc2lkZUxcbiAgICAgICAgdmFyIHRsMDIgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAgICAgdGwwMlxuICAgICAgICAgIC5zZXQoJCgnI3NpZGVMIC5zbnMuc3AnKSwge2Rpc3BsYXk6ICdibG9jayd9KVxuICAgICAgICAgIC50bygkKCcjc2lkZUwgLnNucy5zcCcpLCAxLjIsIHtvcGFjaXR5OiAxfSlcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW50ZXJ2aWV3JzpcbiAgICAgICAgXG4gICAgICAgIGdiLmluLm1lbnUuc3dpdGNoQWN0aXZlKDIpO1xuICAgICAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAgICAgdGxcbiAgICAgICAgICAuc2V0KCQoJyNoZWFkZXIgLnN1YlRpdCcpLCB7ZGlzcGxheTogJ2Jsb2NrJ30pXG4gICAgICAgICAgLnRvKCQoJyNoZWFkZXIgLnN1YlRpdCcpLCAwLjUsIHtvcGFjaXR5OiAxfSlcblxuICAgICAgICAvLyBzaWRlTFxuICAgICAgICB2YXIgdGwwMiA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgICAgICB0bDAyXG4gICAgICAgICAgLnNldCgkKCcjc2lkZUwgLnNucy5zcCcpLCB7ZGlzcGxheTogJ2Jsb2NrJ30pXG4gICAgICAgICAgLnRvKCQoJyNzaWRlTCAuc25zLnNwJyksIDEuMiwge29wYWNpdHk6IDF9KVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdpbnRlcnZpZXdfZGV0YWlsJzpcbiAgICAgICAgXG4gICAgICAgIGdiLmluLm1lbnUuc3dpdGNoQWN0aXZlKC0xKTtcbiAgICAgICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgICAgIHRsXG4gICAgICAgICAgLnNldCgkKCcjaGVhZGVyIC5zdWJUaXQnKSwge2Rpc3BsYXk6ICdibG9jayd9KVxuICAgICAgICAgIC50bygkKCcjaGVhZGVyIC5zdWJUaXQnKSwgMC41LCB7b3BhY2l0eTogMX0pXG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2hpc3RvcnknOlxuICAgICAgICBcbiAgICAgICAgZ2IuaW4ubWVudS5zd2l0Y2hBY3RpdmUoMyk7XG4gICAgICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgICAgICB0bFxuICAgICAgICAgIC5zZXQoJCgnI2hlYWRlciAuc3ViVGl0JyksIHtkaXNwbGF5OiAnYmxvY2snfSlcbiAgICAgICAgICAudG8oJCgnI2hlYWRlciAuc3ViVGl0JyksIDAuNSwge29wYWNpdHk6IDF9KVxuXG4gICAgICAgIC8vIHNpZGVMXG4gICAgICAgIHZhciB0bDAyID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgICAgIHRsMDJcbiAgICAgICAgICAuc2V0KCQoJyNzaWRlTCAuc25zLnNwJyksIHtkaXNwbGF5OiAnYmxvY2snfSlcbiAgICAgICAgICAudG8oJCgnI3NpZGVMIC5zbnMuc3AnKSwgMS4yLCB7b3BhY2l0eTogMX0pXG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgfVxuXG4gIGVmZmVjdCgpIHsgICAgXG5cbiAgICAvLyDmmYLoqIjjgqjjg5Xjgqfjgq/jg4jjgafooajnpLogICBcbiAgICBnYi5pbi5wYWdlVHJhbnNpdGlvbkVmZmVjdC5vcGVuaW5nRWZmZWN0KCk7XG4gXG4gIH1cblxuICBzZXRFdmVudHMoKSB7ICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlPcGVuaW5nLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IExvb3AgZnJvbSAnLi9DVkNvbnRlbnRzTG9vcC5qcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9DVkNvbnRlbnRzVGltZWxpbmUuanMnO1xuaW1wb3J0IENyZWF0ZUNhbnZhcyBmcm9tICcuL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5qcyc7XG5pbXBvcnQgRnVsbFNpemUgZnJvbSAnLi4vLi4vLi4vLi4vTXlMaWJzL0Rpc3BsYXkvTGF5b3V0L0Z1bGxTaXplLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1ZDb250ZW50cyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7IFxuICAgIC8vIHRoaXMuY3JlYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgICAvLyBsb29wXG4gICAgdGhpcy5sb29wID0gbmV3IExvb3AoKTtcbiAgICAvLyB0aW1lbGluZVxuICAgIHRoaXMudGltZWxpbmUgPSBuZXcgVGltZWxpbmUoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjga7jg63jg7zjg4lcbiAgICAvLyBnYi5pbi5sb2FkTWdyLnNlYzAySW1nKCk7XG4gICAgXG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICAgIC8vIGdiLmluLnJtLnRvdGFsICs9IDE7XG4gICAgLy8gY2FudmFz44Gu55Sf5oiQXG4gICAgLy8g44Os44OG44Kj44O844OK55So44GrMuWAjVxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDcmVhdGVDYW52YXMoJCgnI2JnV3JhcCAuc2VjMDJCZ0NhbnZhcycpLGdiLmluLmNvbmYuZGVmVyxnYi5pbi5jb25mLmRlZkgsKCk9PntcblxuICAgICAgdmFyIGwgPSBuZXcgRnVsbFNpemUoJCgnI2JnV3JhcCcpLCQoJy5zZWMwMkJnQ2FudmFzJyksMCwnRnVsbFNpemVTZWMwMkJnQ2FudmFzJyk7XG4gICAgICBsLnRhcmdldERlZlcgPSBnYi5pbi5jb25mLmRlZlc7XG4gICAgICBsLnRhcmdldERlZkggPSBnYi5pbi5jb25mLmRlZkg7XG4gICAgICBsLnJ1bigpO1xuXG4gICAgfSk7XG5cbiAgICAvLyB1aei/veWKoCjjgrPjg7Pjg4jjg63jg7zjg6njg7zjgIFwcm9maWxlcuOBquOBqSlcbiAgICAvLyB0aGlzLmFkZFVJKCk7XG5cblxuICB9XG5cbiAgYWRkVUkoKSB7XG5cbiAgICAvLyBwYXJhbXJ0ZXLoqr/mlbRcbiAgICAvLyBnYi5pbi5wYXJhbSA9IG5ldyBnYi5QYXJhbSgpO1xuXG4gIH1cblxuICBwbGF5KCkge1xuXG4gICAgdGhpcy5sb29wLnN0YXJ0KCk7XG4gICAgdGhpcy50aW1lbGluZS50bE1haW4ucGxheSgpO1xuXG4gIH1cblxuICBwYXVzZSgpIHtcblxuICAgIHRoaXMubG9vcC5wYXVzZSgpO1xuICAgIHRoaXMudGltZWxpbmUudGxNYWluLnBhdXNlKCk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5yLmFkZCgnY3ZDb250ZW50cycsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgLy8gZ2IuaW4uaGFzaC5vbkNoYW5nZUZ1bmNMaXN0LnB1c2godGhpcy5vblNlY3Rpb24wMi5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50cy5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgQ1ZDb250ZW50c0xvb3Bcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENWQ29udGVudHNMb29wIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuaXNBbHdheXMgPSB0cnVlO1xuICAgIHRoaXMuaXNSdW5TdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMuaXNBZGp1c3RQYXJhbSA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZSA9ICdpbml0aWFsJztcbiAgICB0aGlzLnNvbWV0aW1lc1N0YXRlID0gJ2luaXRpYWwnO1xuXG4gICAgdGhpcy5sb29wTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIGlmICh0aGlzLmlzQWx3YXlzKSB0aGlzLnJ1bkFsd2F5cygpO1xuICAgIGlmICh0aGlzLmlzUnVuU3RhdHVzKSB0aGlzLnJ1blN0YXR1cygpO1xuICAgIGlmICh0aGlzLmlzQWRqdXN0UGFyYW0pIHRoaXMucnVuQWRqdXN0UGFyYW0oKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOW4uOOBq+ihjOOBhuWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gIHJ1bkFsd2F5cygpIHtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5sb29wTGlzdCkgdGhpcy5sb29wTGlzdFtpXSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5ZCE54q25oWL44Gu5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBydW5TdGF0dXMoKSB7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PSAnaW5pdGlhbCcpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzdGFydCcpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMScpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMicpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMycpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YW5kYnknKSB7XG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc29tZXRpbWVzJykge1xuXG4gICAgICBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnbGluZVNoYWRvdycpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NwaGVyZScpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NhdGVsbGl0ZScpIHtcblxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDjg5Hjg6njg6Hjg7zjgr/oqr/mlbTnlKjlh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bkFkanVzdFBhcmFtKCkge1xuXG5cblxuICB9XG5cbiAgZHJhdygpIHtcblxuXG5cbiAgfVxuXG4gIGxvb3AoKSB7XG5cbiAgICBpZiAodGhpcy5sb29wU3RhcnQpIHtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5kcmF3KCk7XG5cbiAgICAvLyBsb2coJ3NlY3Rpb24wMicpXG5cbiAgICB9XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSB0cnVlO1xuXG4gIH1cblxuICBwYXVzZSgpIHtcblxuICAgIHRoaXMubG9vcFN0YXJ0ID0gZmFsc2U7XG5cbiAgfVxuXG4gIGFkZChmdW5jKSB7XG5cbiAgICB0aGlzLmxvb3BMaXN0LnB1c2goZnVuYyk7XG4gICAgXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBnYi5pbi51cC5hZGQoJ3NlY3Rpb24wMkJnJyx0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNMb29wLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzVGltZWxpbmVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBDVkNvbnRlbnRzVGltZWxpbmUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy50bE1haW4gPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgr/jgqTjg6Djg6njgqTjg7PjgpLmraLjgoHjgabjgYrjgY9cbiAgICB0aGlzLnRsTWFpbi5wYXVzZSgpO1xuXG4gICAgdGhpcy5iZWdpbm5pbmcoKTtcbiAgICB0aGlzLnN0ZXAwMSgpO1xuICAgIHRoaXMuc3RlcDAyKCk7XG4gICAgdGhpcy5zdGVwMDMoKTtcbiAgICB0aGlzLnN0YW5kQnkoKTtcbiAgICB0aGlzLnNvbWV0aW1lcygpO1xuXG4gIH1cblxuICBiZWdpbm5pbmcoKSB7XG5cbiAgfVxuXG4gIHN0ZXAwMSgpIHtcblxuICB9XG5cbiAgc3RlcDAyKCkge1xuXG5cbiAgfVxuXG4gIHN0ZXAwMygpIHtcblxuICAgIFxuICB9XG5cbiAgc3RhbmRCeSgpIHtcblxuXG4gIH1cblxuICAvLyDmmYLjgIVcbiAgc29tZXRpbWVzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy50bE1haW5cbiAgICAgIC5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgfSwnKz0wLjAnKSAgICBcblxuICB9XG5cbiAgb25SZXNpenNlKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIC8vIGdiLmluLnIuYWRkKCdjdlRpbWVsaW5lJywgdGhpcy5vblJlc2l6c2UuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNUaW1lbGluZS5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDcmVhdGVDYW52YXNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMuanMnO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwLHcsaCxjYj0oKT0+e30pIHtcblxuICAgIHRoaXMuYyA9IG51bGw7XG4gICAgdGhpcy5jdyA9IDA7XG4gICAgdGhpcy5jaCA9IDA7XG4gICAgXG4gICAgdGhpcy5maWxsU3R5bGUgPSAnMCwwLDAnO1xuICAgIHRoaXMuJHdyYXAgPSAkd3JhcDtcblxuICAgIHRoaXMubG9vcExpc3QgPSBbXTtcblxuICAgIC8vIOacgOWIneOCquODluOCuOOCp+OCr+ODiOeUn+aIkOOBmeOCi+OBn+OCgeOBq2Jvb2xlYW4g44GC44GI44Gm6YCG44GrXG4gICAgdGhpcy5pc1Jlc2l6ZSA9IChnYi5pbi51LmlzUmVzUEMpPyBmYWxzZTogdHJ1ZTtcblxuICAgIHRoaXMuY2IgPSBjYjtcblxuICAgIHRoaXMudyA9IDI2MDtcbiAgICB0aGlzLmggPSAxNDY7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgICB0aGlzLnNldENhbnZhc1NpemUodyxoKTtcbiAgICB0aGlzLnRpbWVsaW5lKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkgeyAvL2NhbnZhcyBmaW5nZXIgcG9pbnRcblxuICAgIHRoaXMuYyA9IG5ldyBDYW52YXMoKTtcblxuICAgIC8vIHRoaXMuYWRkT2JqZWN0cygpO1xuICAgIHRoaXMub25SZXNpemUoKTtcbiAgICBcbiAgICB0aGlzLiR3cmFwLmFwcGVuZCh0aGlzLmMuY2FudmFzKTtcblxuICAgIHRoaXMuY2IoKTtcblxuICB9XG5cbiAgYWRkT2JqZWN0cyh2eCkgeyAvL2NhbnZhcyBmaW5nZXIgcG9pbnRcblxuICAgIHRoaXMubG9vcExpc3QgPSBbXTtcblxuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHZhciBvZmZzZXRGcmFtZSA9IDA7XG4gICAgdmFyIG9mZnNldFZ4ID0gMDtcblxuICAgIHRoaXMueE51bSA9IDg7XG4gICAgdGhpcy55TnVtID0gNjtcbiAgICB0aGlzLmxlbiA9IHRoaXMueE51bSAqIHRoaXMueU51bTtcblxuICAgIHRoaXMudGlsZUxpc3QgPSBbXTtcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcbiAgICAgIHZhciB0b3RhbCA9IGdiLmluLmNvbmYuc2VjMDJJbWdOdW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0b3RhbCA9IDE5O1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgIFxuICAgICAgdGhpcy50aWxlID0gbmV3IFBsYW5lKHRoaXMuYy5jdHgsdGhpcy5maWxsU3R5bGUpO1xuXG4gICAgICB2YXIgbnRoID0gaSAlIHRoaXMueE51bTsgXG4gICAgICBpZiAobnRoID09IDApIG9mZnNldCA9IC0gNTAwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKSAtIDI1MDtcbiAgICAgIGlmIChudGggPT0gMCkgb2Zmc2V0RnJhbWUgPSBNYXRoLmZsb29yKHRvdGFsICogTWF0aC5yYW5kb20oKSk7XG4gICAgICBpZiAobnRoID09IDApIG9mZnNldFZ4ID0gdnggKyBNYXRoLmZsb29yKHZ4ICogMiAqIE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICB2YXIgeCA9IG50aCAqIHRoaXMudyArIG9mZnNldDtcbiAgICAgIHZhciB5ID0gTWF0aC5mbG9vcihpIC8gdGhpcy54TnVtKSAqIHRoaXMuaDtcblxuICAgICAgdGhpcy50aWxlLnNldHVwKHgsIHksIHRoaXMudywgdGhpcy5oLCBvZmZzZXRGcmFtZSArIG50aCAqIDMsIG9mZnNldFZ4LCBvZmZzZXQpO1xuICAgICAgdGhpcy50aWxlTGlzdC5wdXNoKHRoaXMudGlsZSk7XG4gICAgICB0aGlzLmFkZCh0aGlzLnRpbGUubG9vcC5iaW5kKHRoaXMudGlsZSkpO1xuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgc2V0Q2FudmFzU2l6ZSh3LGgpIHtcblxuICAgIHRoaXMuY3cgPSB0aGlzLmMuY2FudmFzLndpZHRoID0gdztcbiAgICB0aGlzLmNoID0gdGhpcy5jLmNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gIH1cblxuICBsb29wKCkge1xuXG4gICAgLy8gdGhpcy5jLmN0eC5jbGVhclJlY3QoMCwwLHRoaXMuY3csdGhpcy5jaCk7XG4gICAgLy8gdGhpcy5jLmN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA4KSc7XG5cbiAgICB0aGlzLmMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNiknO1xuICAgIHRoaXMuYy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY3csdGhpcy5jaCk7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMubG9vcExpc3QpIHRoaXMubG9vcExpc3RbaV0oKTtcbiAgICBcbiAgfVxuXG4gIHRpbWVsaW5lKCkge1xuXG5cbiAgfVxuXG4gIGFkZChmdW5jKSB7XG5cbiAgICB0aGlzLmxvb3BMaXN0LnB1c2goZnVuYyk7XG4gICAgXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIGxvZyhnYi5pbi51LmlzUmVzU1AsZ2IuaW4udS5pc1Jlc1BDKTtcblxuICAgIGlmIChnYi5pbi51LmlzUmVzU1AgJiYgdGhpcy5pc1Jlc2l6ZSkge1xuICAgICAgdGhpcy5pc1Jlc2l6ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmFkZE9iamVjdHMoMC41KTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy50aWxlTGlzdFtpXS5jbnRTdG9wID0gdHJ1ZTtcblxuICAgICAgfTtcblxuICAgICAgbG9nKDExMTEpXG5cbiAgICB9IGVsc2UgaWYgKGdiLmluLnUuaXNSZXNQQyAmJiAhdGhpcy5pc1Jlc2l6ZSkge1xuICAgICAgdGhpcy5pc1Jlc2l6ZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuYWRkT2JqZWN0cygwLjUpO1xuXG4gICAgICAvLyDjgrnjg57jg5vjgaDjgaPjgZ/jgonjgIHluoPjgYTooajnpLrjgafjgoLjg5Xjg6zjg7zjg6Djga7li5XjgY3jgpLmraLjgoHjgotcbiAgICAgIGlmIChnYi5pbi51LmlzU1ApIHtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGlsZUxpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgIHRoaXMudGlsZUxpc3RbaV0uY250U3RvcCA9IHRydWU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm47XG5cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy50aWxlTGlzdFtpXS5jbnRTdG9wID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgfTtcblxuXG4gICAgICBsb2coMjIyMik7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLlNlYzAyQmcubG9vcC5hZGQodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIGdiLmluLnIuYWRkKCdDcmVhdGVDYW52YXMnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DcmVhdGVDYW52YXMuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgQ2FudmFzXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgdGhpcy5jdHggPSBudWxsO1xuICAgIHRoaXMudyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIHRoaXMuaCA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXAgKCkge1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgXG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53O1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaDtcbiAgICBcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG5cbiAgICBcbiAgfVxuXG4gIGRyYXcgKCkge1xuXG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DYW52YXMuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGxhbmVcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmUge1xuXG4gIGNvbnN0cnVjdG9yKGN0eCxzdHJva2VTdHlsZSl7XG5cbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICB0aGlzLm9wID0ge3ZhbDoxfTtcblxuICAgIHRoaXMuY250ID0gMDtcblxuICAgIHRoaXMuY250U3RvcCA9IGZhbHNlO1xuXG4gICAgLy8gdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuY3JlYXRlKCk7XG5cbiAgfVxuXG4gIHNldHVwKHgsIHksIHcsIGgsIGZyYW1lU3RhcnQsIHZ4LCBvZmZzZXQpIHtcblxuICAgIHRoaXMuaW1nTGlzdCA9IGdiLmluLmxvYWRTZWMwMkltZy5saXN0O1xuXG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudyA9IHc7XG4gICAgdGhpcy5oID0gaDtcblxuICAgIHRoaXMudnggPSB2eDtcblxuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuXG4gICAgdGhpcy5jbnQgPSBmcmFtZVN0YXJ0IDtcblxuICB9XG5cbiAgY3JlYXRlKCkge1xuXG5cbiAgfVxuXG4gIC8vIOmggueCueOBp+aPj+OBj1xuICB1cGRhdGUoKSB7XG5cbiAgICB0aGlzLnggLT0gdGhpcy52eDtcbiAgICBpZiAodGhpcy54IDwgLXRoaXMudykgdGhpcy54ID0gZ2IuaW4uY2FudmFzLmN3IC0gMTA7XG5cbiAgfVxuXG4gIGRyYXcoKSB7XG5cbiAgICBpZiAoIXRoaXMuY250U3RvcCkge1xuXG4gICAgICAvLyDplpPlvJXjgY1cbiAgICAgIGlmIChnYi5pbi51cC5jbnQlMz09MCkgdGhpcy5jbnQrKztcbiAgICAgIGVsc2UgO1xuXG4gICAgfTtcbiAgICAvLyB0aGlzLmNudCsrO1xuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuICAgICAgdmFyIHRvdGFsID0gZ2IuaW4uY29uZi5zZWMwMkltZ051bTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRvdGFsID0gMTk7XG4gICAgfVxuICAgIFxuICAgIHZhciBpbWcgPSB0aGlzLmltZ0xpc3RbdGhpcy5jbnQldG90YWxdO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCk7XG4gICAgXG4gIH1cblxuICBsb29wKCkge1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmRyYXcoKTtcbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL1BsYW5lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQYWdlVHJhbnNpdGlvbkNvbnRyb2xsZXJcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBQYWdlVHJhbnNpdGlvbiBmcm9tICcuL1BhZ2VUcmFuc2l0aW9uLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZVRyYW5zaXRpb25Db250cm9sbGVyIHtcblxuICBjb25zdHJ1Y3Rvcigkd3JhcCkge1xuXG4gICAgdGhpcy5jYiA9ICgpPT57fTtcblxuICAgIHRoaXMuJHdyYXAgPSAkd3JhcDtcbiAgICB0aGlzLnNldHVwKCR3cmFwKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgkd3JhcCkge1xuXG4gICAgdGhpcy5lZmZlY3QgPSBuZXcgUGFnZVRyYW5zaXRpb24oJHdyYXApO1xuICAgIC8vIOOCteOCpOOCuuiqv+aVtFxuICAgIHRoaXMuZWZmZWN0Lm9uUmVzaXplKCk7XG5cbiAgICB0aGlzLmVmZmVjdC5jYiA9IHRoaXMuY2I7XG5cbiAgICAvLyB0aGlzLiR3cmFwLmhpZGUoKTtcblxuICAgIC8vIOacgOWIneOBi+OCiWNhbnZhc+OBrum7kuOCkuimi+OBm+OCi1xuICAgIHRoaXMuZWZmZWN0LmlzU3RhcnQgPSB0cnVlO1xuICAgIHRoaXMuZWZmZWN0LnNldFBhcmFtSW5FZigpOyAvLyDmnIDliJ3jgYvjgonpu5LluZXoqK3lrprjga7jgZ/jgoHjga7jg5Hjg6njg6BcblxuICAgIC8vIGNhbnZhc+OBrum7kuOCkuimi+OBm+OBn+OCieOAgWxvYWRpbmfjga7pu5Ljga/nhKHjgY/jgZlcbiAgICBUd2Vlbk1heC50bygkKCcjbG9hZGluZycpLCAwLjMsIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXQsXG4gICAgfSlcblxuICB9XG5cbiAgb3BlbmluZ0VmZmVjdCgpIHtcblxuICAgIHRoaXMuJHdyYXAuc2hvdygpO1xuICAgIHRoaXMuZWZmZWN0LmlzU3RhcnQgPSB0cnVlO1xuICAgIHRoaXMuZWZmZWN0Lm9wZW5pbmdFZmZlY3QoKTtcblxuICB9XG5cbiAgaW5FZmZlY3QoKSB7XG5cbiAgICB0aGlzLiR3cmFwLnNob3coKTtcbiAgICB0aGlzLmVmZmVjdC5pc1N0YXJ0ID0gdHJ1ZTtcbiAgICB0aGlzLmVmZmVjdC5pbkVmZmVjdCgpO1xuXG4gIH1cblxuICBvdXRFZmZlY3QoKSB7XG5cbiAgICB0aGlzLmVmZmVjdC5jYiA9IHRoaXMuY2I7XG4gICAgdGhpcy4kd3JhcC5zaG93KCk7XG4gICAgdGhpcy5lZmZlY3QuaXNTdGFydCA9IHRydWU7XG4gICAgdGhpcy5lZmZlY3Qub3V0RWZmZWN0KCk7XG5cbiAgfVxuXG4gIHBhdXNlKCkge1xuXG4gICAgdGhpcy4kd3JhcC5oaWRlKCk7XG4gICAgdGhpcy5lZmZlY3QuaXNTdGFydCA9IGZhbHNlO1xuICAgIC8vIHRoaXMuZWZmZWN0LnRpbWVsaW5lKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cyAoKSB7XG5cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvUGFnZVRyYW5zaXRpb24vUGFnZVRyYW5zaXRpb25Db250cm9sbGVyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQYWdlVHJhbnNpdGlvbkVmZmVjdFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IFBvaW50IGZyb20gJy4vUG9pbnQuanMnO1xuaW1wb3J0IFRvcE9wZW5pbmcgZnJvbSAnLi4vVG9wT3BlbmluZy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VUcmFuc2l0aW9uRWZmZWN0IHtcblxuICBjb25zdHJ1Y3Rvcigkd3JhcCkge1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7dGhpcy5zdGFnZSA9IG51bGw7XG5cbiAgICB0aGlzLiR3cmFwID0gJHdyYXA7XG4gICAgdGhpcy5teCA9IDA7dGhpcy5teSA9IDA7XG4gICAgXG4gICAgdGhpcy5yYWRpdXMgPSAwO1xuICAgIHRoaXMuY250ID0gMDtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuZyA9IG51bGw7XG5cbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLmlzU3RhcnQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ1VwZGF0ZSA9IHRydWU7XG5cbiAgICB0aGlzLnNlY29uZFAgPSAwO1xuICAgIHRoaXMuc2Vjb25kU3VtID0gMDtcbiAgICB0aGlzLnNlY29uZENudCA9IDA7XG4gICAgdGhpcy5zZWNvbmRGbGFnID0gZmFsc2U7XG5cbiAgICB0aGlzLnRhcmdldFJhZGl1cyA9IE1hdGguc3FydChnYi5pbi5yLndzLncqZ2IuaW4uci53cy53ICsgZ2IuaW4uci53cy5oKmdiLmluLnIud3MuaCk7XG4gICAgdGhpcy5oUmFkaXVzID0gMDtcbiAgICB0aGlzLm1SYWRpdXMgPSAwO1xuICAgIHRoaXMuc1JhZGl1cyA9IHRoaXMudGFyZ2V0UmFkaXVzO1xuXG4gICAgdGhpcy5oSGFuZFggPSAwO1xuICAgIHRoaXMubUhhbmRYID0gMDtcbiAgICB0aGlzLnNIYW5kWCA9IDA7XG4gICAgdGhpcy5oSGFuZFkgPSAwO1xuICAgIHRoaXMubUhhbmRZID0gMDtcbiAgICB0aGlzLnNIYW5kWSA9IDA7XG4gICAgdGhpcy5oSGFuZEZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLm1IYW5kRmxhZyA9IGZhbHNlO1xuICAgIHRoaXMuc0hhbmRGbGFnID0gZmFsc2U7XG5cbiAgICB0aGlzLmhSYWQgPSAwO1xuICAgIHRoaXMubVJhZCA9IDA7XG4gICAgdGhpcy5zUmFkID0gMDtcblxuICAgIHRoaXMubGluZVdpZHRoID0gMTtcblxuICAgIHRoaXMuc3RhcnRSYWQwMSA9IE1hdGguUEkgKiAyIC8gMyAqIDA7XG4gICAgdGhpcy5zdGFydFJhZDAyID0gTWF0aC5QSSAqIDIgLyAzICogMTtcbiAgICB0aGlzLnN0YXJ0UmFkMDMgPSBNYXRoLlBJICogMiAvIDMgKiAyO1xuICAgIHRoaXMuc3RhcnRSYWQwNCA9IE1hdGguUEkgKiAyIC8gMyAqIDA7XG4gICAgdGhpcy5zdGFydFJhZDA1ID0gTWF0aC5QSSAqIDIgLyAzICogMTtcbiAgICB0aGlzLnN0YXJ0UmFkMDYgPSBNYXRoLlBJICogMiAvIDMgKiAyO1xuICAgIHRoaXMuZW5kUmFkMDEgPSBNYXRoLlBJICogMiAvIDMgKiAwOyAvLyBwaXhpLmpz44Gv5L2V44GL5o+P55S744GX44Gq44GE44Go44Oe44K544Kv44GV44KM44Gq44GE77yfIOWwkeaVsOOBruWApOOCkuWFpeOCjOOBpuOBhOOCi1xuICAgIHRoaXMuZW5kUmFkMDIgPSBNYXRoLlBJICogMiAvIDMgKiAxO1xuICAgIHRoaXMuZW5kUmFkMDMgPSBNYXRoLlBJICogMiAvIDMgKiAyO1xuICAgIHRoaXMuZW5kUmFkMDQgPSBNYXRoLlBJICogMiAvIDMgKiAwLjAwMDAxOyAvLyBwaXhpLmpz44Gv5L2V44GL5o+P55S744GX44Gq44GE44Go44Oe44K544Kv44GV44KM44Gq44GE77yfIOWwkeaVsOOBruWApOOCkuWFpeOCjOOBpuOBhOOCi1xuICAgIHRoaXMuZW5kUmFkMDUgPSBNYXRoLlBJICogMiAvIDMgKiAxO1xuICAgIHRoaXMuZW5kUmFkMDYgPSBNYXRoLlBJICogMiAvIDMgKiAyO1xuXG4gICAgdGhpcy5maWxsQmxhY2sgPSAweDAwMDAwMDtcbiAgICB0aGlzLmZpbGxUaWZmYW55Qmx1ZSA9IDB4ODFkOGQwO1xuXG4gICAgLy8g44Kz44O844Or44OQ44OD44KvXG4gICAgdGhpcy5jYiA9ICgpPT57fVxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwICgpIHtcblxuICAgIC8vIGNhbnZhc+imgee0oOi/veWKoFxuICAgIHRoaXMucmVuZGVyZXIgPSBQSVhJLmF1dG9EZXRlY3RSZW5kZXJlcihnYi5pbi5yLndzLncsIGdiLmluLnIud3MuaCwge2FudGlhbGlhczogdHJ1ZSx0cmFuc3BhcmVudDogdHJ1ZX0pO1xuICAgIHRoaXMuJHdyYXAuYXBwZW5kKHRoaXMucmVuZGVyZXIudmlldyk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIHJvb3Qgb2YgdGhlIHNjZW5lIGdyYXBoXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgIHRoaXMuc3RhZ2UuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5hZGRPYmplY3QoKTtcbiAgXG4gIH1cblxuICBhZGRPYmplY3QoKSB7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgIHRoaXMuY29udGFpbmVyMDEgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLmNvbnRhaW5lcjAyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgdGhpcy5jb250YWluZXIwMyA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuXG4gICAgdGhpcy5tYXNrID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICB0aGlzLmNvbG9yID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICB0aGlzLmhIYW5kID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICB0aGlzLm1IYW5kID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICB0aGlzLnNIYW5kID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcblxuICAgIHRoaXMuY29sb3IuYmxlbmRNb2RlID0gUElYSS5CTEVORF9NT0RFUy5BREQ7XG5cbiAgICB0aGlzLm1hc2sucG9zaXRpb24ueCA9IDA7XG4gICAgdGhpcy5tYXNrLnBvc2l0aW9uLnkgPSAwO1xuXG4gICAgLy8gdGhpcy5jb250YWluZXIwMi5tYXNrID0gdGhpcy5tYXNrO1xuXG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLm1hc2spO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb2xvcik7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmhIYW5kKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMubUhhbmQpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zSGFuZCk7XG5cbiAgfVxuXG4gIHVwZGF0ZVRpbWUoKSB7XG5cblxuICAgIGdiLmluLnUudGltZSgpO1xuXG4gICAgdGhpcy5ob3VyID0gZ2IuaW4udS5ob3VyOyAgICAgICAgICAvLyDmmYJcbiAgICB0aGlzLm1pbnV0ZSA9IGdiLmluLnUubWludXRlOyAgICAgIC8vIOWIhlxuICAgIHRoaXMuc2Vjb25kID0gZ2IuaW4udS5zZWNvbmQ7XG4gICAgdGhpcy5taWxsU2Vjb25kID0gZ2IuaW4udS5taWxsU2Vjb25kIC8gMTAwMDtcblxuICAgIGlmICh0aGlzLnNlY29uZCA9PSAwICYmICF0aGlzLnNlY29uZEZsYWcpIHtcbiAgICAgIHRoaXMuc2Vjb25kRmxhZyA9IHRydWVcbiAgICAgIHRoaXMuc2Vjb25kQ250Kys7XG4gICAgfTtcbiAgICBpZiAodGhpcy5zZWNvbmQgPT0gMSAmJiB0aGlzLnNlY29uZEZsYWcpIHtcbiAgICAgIHRoaXMuc2Vjb25kRmxhZyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICB2YXIgaG91clRvdGFsID0gMTI7XG4gICAgdmFyIG1pbnV0ZVRvdGFsID0gNjA7XG4gICAgdmFyIHNlY29uZFRvdGFsID0gNjA7XG5cbiAgICBpZiAodGhpcy5ob3VyPjEyKSB0aGlzLmhvdXIgPSB0aGlzLmhvdXIgLSAxMjtcblxuICAgIC8vIHDjga9wZXJjZW50XG4gICAgdGhpcy5ob3VyUCA9IHRoaXMuaG91ciAvIGhvdXJUb3RhbDtcbiAgICB0aGlzLm1pbnV0ZVAgPSB0aGlzLm1pbnV0ZSAvIG1pbnV0ZVRvdGFsO1xuICAgIC8vIHRoaXMuc2Vjb25kUCArPSAoKCAodGhpcy5zZWNvbmRDbnQgKiA2MCArIHRoaXMuc2Vjb25kICsgdGhpcy5taWxsU2Vjb25kKSAvIHNlY29uZFRvdGFsKSAtIHRoaXMuc2Vjb25kUCkgKiAwLjAzO1xuICAgIHRoaXMuc2Vjb25kUCA9IHRoaXMuc2Vjb25kIC8gc2Vjb25kVG90YWw7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIHRoaXMudXBkYXRlVGltZSgpO1xuXG5cbiAgfVxuXG4gIGRyYXcoKXtcblxuICAgIHRoaXMubWFzay5jbGVhcigpO1xuICAgIHRoaXMuY29sb3IuY2xlYXIoKTtcbiAgICB0aGlzLmhIYW5kLmNsZWFyKCk7XG4gICAgdGhpcy5tSGFuZC5jbGVhcigpO1xuICAgIHRoaXMuc0hhbmQuY2xlYXIoKTtcblxuICAgIC8vIOS9leOBi+aPj+OBi+OBquOBhOOBqOODnuOCueOCr+OBjOWKueOBi+OBquOBhOOBn+OCgeaPj+OBjyDjgYTjgonjgarjgYTjgYvjgoJcbiAgICB0aGlzLm1hc2suZHJhd1JlY3QoMCwgMCwgMSwgMSk7XG5cbiAgICAvLyDmmYLoqIhcbiAgICB0aGlzLmRyYXdDaXJjbGUoKTtcblxuICAgIC8vIOODnuOCueOCr1xuICAgIHRoaXMuZHJhd0NpcmNsZTAxKHRoaXMuc3RhcnRSYWQwMSx0aGlzLmVuZFJhZDAxKTtcbiAgICB0aGlzLmRyYXdDaXJjbGUwMih0aGlzLnN0YXJ0UmFkMDIsdGhpcy5lbmRSYWQwMik7XG4gICAgdGhpcy5kcmF3Q2lyY2xlMDModGhpcy5zdGFydFJhZDAzLHRoaXMuZW5kUmFkMDMpO1xuXG4gICAgdGhpcy5kcmF3Q2lyY2xlMDQodGhpcy5zdGFydFJhZDA0LHRoaXMuZW5kUmFkMDQpO1xuICAgIHRoaXMuZHJhd0NpcmNsZTA1KHRoaXMuc3RhcnRSYWQwNSx0aGlzLmVuZFJhZDA1KTtcbiAgICB0aGlzLmRyYXdDaXJjbGUwNih0aGlzLnN0YXJ0UmFkMDYsdGhpcy5lbmRSYWQwNik7XG5cblxuICAgIC8vIHJlbmRlciB0aGUgc3RhZ2VcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnN0YWdlKTsgICAgXG5cbiAgfVxuXG4gIG9wZW5pbmdFZmZlY3QoKSB7XG5cbiAgICB2YXIgdGxNYWluID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAvLyB0aGlzLnNldFBhcmFtSW5FZigpO1xuXG4gICAgdGxNYWluICAgICAgXG4gICAgICAvLyDnt5rjgYzkvLjjgbPjgotcbiAgICAgIC5hZGQoKCk9PntcblxuICAgICAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgICAgICB0bFxuICAgICAgICAgIC8vIGNvbG9yXG4gICAgICAgICAgLy8gLnRvKHRoaXMsIDEuMywge1xuICAgICAgICAgIC8vICAgaFJhZGl1czogdGhpcy5nZXRTSGFuZExlbmd0aCh0aGlzLmhSYWQpLFxuICAgICAgICAgIC8vICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dFxuICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgLy8gLy8gLnRvKHRoaXMsIDEuMCwge1xuICAgICAgICAgIC8vIC8vICAgbVJhZGl1czogdGhpcy5nZXRTSGFuZExlbmd0aCh0aGlzLm1SYWQpLFxuICAgICAgICAgIC8vIC8vICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dFxuICAgICAgICAgIC8vIC8vIH0sJy09MS4wJylcbiAgICAgICAgICAvLyAudG8odGhpcywgMS4wLCB7XG4gICAgICAgICAgLy8gICBtUmFkaXVzOiB0aGlzLmdldFNIYW5kTGVuZ3RoKHRoaXMubVJhZCksXG4gICAgICAgICAgLy8gICBlYXNlOiBQb3dlcjMuZWFzZUluT3V0XG4gICAgICAgICAgLy8gfSwnPTAuMCcpXG5cblxuICAgICAgICAgIC8vIC5zZXQodGhpcy5tSGFuZCwge2FscGhhOiAwfSlcbiAgICAgICAgICAvLyAuc2V0KHRoaXMuc0hhbmQsIHthbHBoYTogMH0pXG4gICAgICAgICAgLy8gLnNldCh0aGlzLCB7XG4gICAgICAgICAgLy8gICBoUmFkaXVzOiB0aGlzLmdldFNIYW5kTGVuZ3RoKHRoaXMuaFJhZCksXG4gICAgICAgICAgLy8gfSlcbiAgICAgICAgICAvLyAudG8odGhpcywge1xuICAgICAgICAgIC8vICAgbVJhZGl1czogdGhpcy5nZXRTSGFuZExlbmd0aCh0aGlzLm1SYWQpLFxuICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgLy8gLnRvKHRoaXMubUhhbmQsIDEuNSwge1xuICAgICAgICAgIC8vICAgYWxwaGE6IDEsXG4gICAgICAgICAgLy8gICBlYXNlOiBQb3dlcjMuZWFzZUluT3V0XG4gICAgICAgICAgLy8gfSlcbiAgICAgICAgICAvLyAudG8odGhpcy5zSGFuZCwgMS41LCB7XG4gICAgICAgICAgLy8gICBhbHBoYTogMSxcbiAgICAgICAgICAvLyAgIGVhc2U6IFBvd2VyMy5lYXNlSW5PdXRcbiAgICAgICAgICAvLyB9LCctPTEuNScpXG5cblxuICAgICAgfSlcblxuICAgICAgLy8g5a6a5L2N572u44GrXG4gICAgICAuYWRkKCgpPT57XG5cbiAgICAgICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgLy8gdGxcbiAgICAgICAgLy8gICAvLyBjb2xvclxuICAgICAgICAvLyAgIC50byh0aGlzLCAxLjAsIHtcbiAgICAgICAgLy8gICAgIGhSYWQ6IE1hdGguUEkgKiAyIC8gMyAqIDAsXG4gICAgICAgIC8vICAgICBoUmFkOiBNYXRoLlBJICogMiAvIDMgKiAwLFxuICAgICAgICAvLyAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyAgIC50byh0aGlzLCAxLjAsIHtcbiAgICAgICAgLy8gICAgIG1SYWQ6IE1hdGguUEkgKiAyIC8gMyAqIDEsXG4gICAgICAgIC8vICAgICBtUmFkOiBNYXRoLlBJICogMiAvIDMgKiAxLFxuICAgICAgICAvLyAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgICAgLy8gICB9LCctPTEuMCcpXG4gICAgICAgIC8vICAgLnRvKHRoaXMsIDEuMCwge1xuICAgICAgICAvLyAgICAgc1JhZDogTWF0aC5QSSAqIDIgLyAzICogMixcbiAgICAgICAgLy8gICAgIHNSYWQ6IE1hdGguUEkgKiAyIC8gMyAqIDIsXG4gICAgICAgIC8vICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAgICAgLy8gICAgIG9uU3RhcnQ6ICgpPT57XG5cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9LCctPTEuMCcpXG5cbiAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+e1xuXG4gICAgICAgIC8vICAgLy8g5LiL6KiY44Gu5pu05paw44KS5q2i44KB44KLXG4gICAgICAgIC8vICAgdGhpcy5oSGFuZEZsYWc9dHJ1ZTtcbiAgICAgICAgLy8gICB0aGlzLm1IYW5kRmxhZz10cnVlO1xuICAgICAgICAvLyAgIHRoaXMuc0hhbmRGbGFnPXRydWU7XG5cbiAgICAgICAgLy8gfSwwLjMpXG5cblxuICAgICAgfSwnKz0wLjAnKVxuXG4gICAgICAvLyDjgZDjgo9cbiAgICAgLmFkZCgoKT0+e1xuXG4gICAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAgIHZhciB0bDAyID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgICB2YXIgdGwwMyA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAvLyDjgZDjgo/jga7jgb7jgYjjgavnp5Lph53jgpLmtojjgZlcbiAgICAgIHRsXG4gICAgICAgIC8vIGNvbG9yXG4gICAgICAgIC8vIC50byh0aGlzLmhIYW5kLCAxLjUsIHtcbiAgICAgICAgLy8gICBhbHBoYTogMCxcbiAgICAgICAgLy8gICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyAudG8odGhpcy5tSGFuZCwgMS41LCB7XG4gICAgICAgIC8vICAgYWxwaGE6IDAsXG4gICAgICAgIC8vICAgZWFzZTogRXhwby5lYXNlSW5PdXRcbiAgICAgICAgLy8gfSwnLT0xLjUnKVxuICAgICAgICAudG8odGhpcy5zSGFuZCwgMS42LCB7XG4gICAgICAgICAgYWxwaGE6IDAsXG4gICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VJbk91dFxuICAgICAgICB9KVxuXG4gICAgICAvLyDjgZDjgo9cbiAgICAgIHRsMDJcbiAgICAgICAgLy8gY29sb3JcbiAgICAgICAgLnRvKHRoaXMsIDEuOCwge1xuICAgICAgICAgIHN0YXJ0UmFkMDQ6IE1hdGguUEkgKiAyIC8gMyAqIDEsXG4gICAgICAgICAgc3RhcnRSYWQwNTogTWF0aC5QSSAqIDIgLyAzICogMixcbiAgICAgICAgICBzdGFydFJhZDA2OiBNYXRoLlBJICogMiAvIDMgKiAzLFxuICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICAgIG9uU3RhcnQ6ICgpPT57XG5cbiAgICAgICAgICAgIC8vIOWQhFVJ6KGo56S6XG4gICAgICAgICAgICB0aGlzLnRvID0gbmV3IFRvcE9wZW5pbmcoKTtcbiAgICAgICAgICAgIGlmIChnYi5pbi5wamF4LmlkID09ICd0b3AnKSB0aGlzLnRvLnJ1blRvcCgpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnRvLnJ1bk90aGVyKCk7XG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgIHRoaXMuJHdyYXAuaGlkZSgpOyAvLyDjg5rjg7zjgrjpgbfnp7vjgqjjg5Xjgqfjgq/jg4jjg6zjgqTjg6Tjg7zjgpLpmqDjgZlcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydD1mYWxzZTsgLy8g44Or44O844OX44KS5q2i44KB44KLIFxuXG4gICAgICAgICAgICBnYi5pbi5wamF4LmlzUGpheExvY2sgPSBmYWxzZTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgfSwnKz0zLjAnKVxuXG4gIH1cblxuICBpbkVmZmVjdCgpIHtcblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHZhciB0bDAyID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnNldFBhcmFtSW5FZigpO1xuXG4gICAgdGxcbiAgICAgIC8vIGNvbG9yXG4gICAgICAudG8odGhpcywgMS44LCB7XG4gICAgICAgIHN0YXJ0UmFkMDQ6IE1hdGguUEkgKiAyIC8gMyAqIDEsXG4gICAgICAgIHN0YXJ0UmFkMDU6IE1hdGguUEkgKiAyIC8gMyAqIDIsXG4gICAgICAgIHN0YXJ0UmFkMDY6IE1hdGguUEkgKiAyIC8gMyAqIDMsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuICAgICAgICAgIHRoaXMuJHdyYXAuaGlkZSgpOyAvLyDjg5rjg7zjgrjpgbfnp7vjgqjjg5Xjgqfjgq/jg4jjg6zjgqTjg6Tjg7zjgpLpmqDjgZlcbiAgICAgICAgICB0aGlzLmlzU3RhcnQ9ZmFsc2U7IC8vIOODq+ODvOODl+OCkuatouOCgeOCiyAgICAgICAgIFxuICAgICAgICAgIGdiLmluLnBqYXguaXNQamF4TG9jayA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKGdiLmluLnUuaXNSZXNQQykge1xuICAgICAgICAgICAgVHdlZW5NYXgudG8oJCgnI25hdicpLCAxLjIsIHtvcGFjaXR5OiAxLGVhc2U6IFBvd2VyMy5lYXNlT3V0fSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5hdlxuICAgICAgICAgICAgaWYgKGdiLmluLnBqYXguaWQ9PSd0b3AnKSB7XG4gICAgICAgICAgICAgIFR3ZWVuTWF4LnRvKCQoJyNuYXYnKSwgMS4yLCB7b3BhY2l0eTogMSxlYXNlOiBQb3dlcjMuZWFzZU91dH0pO1xuICAgICAgICAgICAgfTsgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgICB9KVxuXG4gIH1cblxuICBvdXRFZmZlY3QoKSB7XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICB2YXIgdGwwMiA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXRQYXJhbU91dEVmKCk7XG5cbiAgICAvLyAvLyDmoYgxXG4gICAgdGxcbiAgICAgIC8vIGNvbG9yXG4gICAgICAvLyAudG8odGhpcywgMS44LCB7XG4gICAgICAvLyAgIGVuZFJhZDAxOiBNYXRoLlBJICogMiAvIDMgKiAwICsgTWF0aC5QSSAqIDAuNyxcbiAgICAgIC8vICAgZW5kUmFkMDI6IE1hdGguUEkgKiAyIC8gMyAqIDEgKyBNYXRoLlBJICogMC43LFxuICAgICAgLy8gICBlbmRSYWQwMzogTWF0aC5QSSAqIDIgLyAzICogMiArIE1hdGguUEkgKiAwLjcsXG4gICAgICAvLyAgIGVhc2U6IEV4cG8uZWFzZUluT3V0XG4gICAgICAvLyB9KVxuICAgICAgLy8gLnRvKHRoaXMsIDEuOCwge1xuICAgICAgLy8gICBzdGFydFJhZDAxOiBNYXRoLlBJICogMiAvIDMgKiAwICsgTWF0aC5QSSAqIDAuMzUsXG4gICAgICAvLyAgIHN0YXJ0UmFkMDI6IE1hdGguUEkgKiAyIC8gMyAqIDEgKyBNYXRoLlBJICogMC4zNSxcbiAgICAgIC8vICAgc3RhcnRSYWQwMzogTWF0aC5QSSAqIDIgLyAzICogMiArIE1hdGguUEkgKiAwLjM1LFxuICAgICAgLy8gICBlYXNlOiBQb3dlcjMuZWFzZU91dFxuICAgICAgLy8gfSwnLT0wLjknKVxuICAgICAgLnRvKHRoaXMsIDEuMCwge1xuICAgICAgICBlbmRSYWQwNDogTWF0aC5QSSAqIDIgLyAzICogMSxcbiAgICAgICAgZW5kUmFkMDU6IE1hdGguUEkgKiAyIC8gMyAqIDIsXG4gICAgICAgIGVuZFJhZDA2OiBNYXRoLlBJICogMiAvIDMgKiAzLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgIHRoaXMuY2IoKTtcblxuICAgICAgICB9XG4gICAgICB9LCctPTAuMCcpXG5cbiAgICB0bDAyXG4gICAgICAvLyAudG8odGhpcywgMS4zNSwge1xuICAgICAgLy8gICBlbmRSYWQwMTogTWF0aC5QSSAqIDIgLyAzICogMSxcbiAgICAgIC8vICAgZW5kUmFkMDI6IE1hdGguUEkgKiAyIC8gMyAqIDIsXG4gICAgICAvLyAgIGVuZFJhZDAzOiBNYXRoLlBJICogMiAvIDMgKiAzLFxuICAgICAgLy8gICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgLy8gfSwnKz0wLjk1JylcbiAgICAgIC8vIC50byh0aGlzLCAxLjM1LCB7XG4gICAgICAvLyAgIHN0YXJ0UmFkMDE6IE1hdGguUEkgKiAyIC8gMyAqIDEsXG4gICAgICAvLyAgIHN0YXJ0UmFkMDI6IE1hdGguUEkgKiAyIC8gMyAqIDIsXG4gICAgICAvLyAgIHN0YXJ0UmFkMDM6IE1hdGguUEkgKiAyIC8gMyAqIDMsXG4gICAgICAvLyAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAvLyB9LCctPTEuMzUnKVxuICAgICAgLy8gLnRvKHRoaXMsIDEuMzUsIHtcbiAgICAgIC8vICAgZW5kUmFkMDQ6IE1hdGguUEkgKiAyIC8gMyAqIDEsXG4gICAgICAvLyAgIGVuZFJhZDA1OiBNYXRoLlBJICogMiAvIDMgKiAyLFxuICAgICAgLy8gICBlbmRSYWQwNjogTWF0aC5QSSAqIDIgLyAzICogMyxcbiAgICAgIC8vICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICAvLyAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgIC8vICAgICB0aGlzLmNiKCk7XG5cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSwnLT0xLjM1JylcblxuICB9XG5cbiAgc2V0UGFyYW1PdXRFZiAoKSB7XG5cbiAgICB0aGlzLnN0YXJ0UmFkMDEgPSBNYXRoLlBJICogMiAvIDMgKiAwO1xuICAgIHRoaXMuc3RhcnRSYWQwMiA9IE1hdGguUEkgKiAyIC8gMyAqIDE7XG4gICAgdGhpcy5zdGFydFJhZDAzID0gTWF0aC5QSSAqIDIgLyAzICogMjtcbiAgICB0aGlzLnN0YXJ0UmFkMDQgPSBNYXRoLlBJICogMiAvIDMgKiAwO1xuICAgIHRoaXMuc3RhcnRSYWQwNSA9IE1hdGguUEkgKiAyIC8gMyAqIDE7XG4gICAgdGhpcy5zdGFydFJhZDA2ID0gTWF0aC5QSSAqIDIgLyAzICogMjtcbiAgICB0aGlzLmVuZFJhZDAxID0gTWF0aC5QSSAqIDIgLyAzICogMDsgLy8gcGl4aS5qc+OBr+S9leOBi+aPj+eUu+OBl+OBquOBhOOBqOODnuOCueOCr+OBleOCjOOBquOBhO+8nyDlsJHmlbDjga7lgKTjgpLlhaXjgozjgabjgYTjgotcbiAgICB0aGlzLmVuZFJhZDAyID0gTWF0aC5QSSAqIDIgLyAzICogMTtcbiAgICB0aGlzLmVuZFJhZDAzID0gTWF0aC5QSSAqIDIgLyAzICogMjtcbiAgICB0aGlzLmVuZFJhZDA0ID0gTWF0aC5QSSAqIDIgLyAzICogMC4wMDAwMTsgLy8gcGl4aS5qc+OBr+S9leOBi+aPj+eUu+OBl+OBquOBhOOBqOODnuOCueOCr+OBleOCjOOBquOBhO+8nyDlsJHmlbDjga7lgKTjgpLlhaXjgozjgabjgYTjgotcbiAgICB0aGlzLmVuZFJhZDA1ID0gTWF0aC5QSSAqIDIgLyAzICogMTtcbiAgICB0aGlzLmVuZFJhZDA2ID0gTWF0aC5QSSAqIDIgLyAzICogMjtcblxuICB9XG5cbiAgc2V0UGFyYW1JbkVmICgpIHtcblxuICAgIHRoaXMuc3RhcnRSYWQwNCA9IE1hdGguUEkgKiAyIC8gMyAqIDA7XG4gICAgdGhpcy5zdGFydFJhZDA1ID0gTWF0aC5QSSAqIDIgLyAzICogMTtcbiAgICB0aGlzLnN0YXJ0UmFkMDYgPSBNYXRoLlBJICogMiAvIDMgKiAyO1xuICAgIHRoaXMuZW5kUmFkMDQgPSBNYXRoLlBJICogMiAvIDMgKiAxOyAvLyBwaXhpLmpz44Gv5L2V44GL5o+P55S744GX44Gq44GE44Go44Oe44K544Kv44GV44KM44Gq44GE77yfIOWwkeaVsOOBruWApOOCkuWFpeOCjOOBpuOBhOOCi1xuICAgIHRoaXMuZW5kUmFkMDUgPSBNYXRoLlBJICogMiAvIDMgKiAyO1xuICAgIHRoaXMuZW5kUmFkMDYgPSBNYXRoLlBJICogMiAvIDMgKiAzO1xuXG4gIH1cblxuICBsb29wICgpIHtcblxuICAgIGlmICh0aGlzLmlzU3RhcnQpIHtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIHRoaXMuZHJhdygpO1xuXG4gICAgfTtcblxuICB9XG5cbiAgZHJhd0NpcmNsZShyYWQpIHtcblxuICAgIHRoaXMuY3ggPSBnYi5pbi5yLndzLncgLyAyO1xuICAgIHRoaXMuY3kgPSBnYi5pbi5yLndzLmggLyAyO1xuXG4gICAgLy8g5pmC6YedXG5cbiAgICAvLyBmbGFn5b6M44GT44Gh44KJ44Gn44Gv5pu05paw44GX44Gq44GEXG4gICAgaWYgKCF0aGlzLmhIYW5kRmxhZykge1xuXG4gICAgICB0aGlzLmhSYWQgPSBNYXRoLlBJICogMiAqIHRoaXMuaG91clAgLSBNYXRoLlBJIC8gMjtcblxuICAgIH0gZWxzZSB7XG5cbiAgICB9XG4gICAgXG4gICAgdGhpcy5oSGFuZFggPSB0aGlzLmN4ICsgTWF0aC5jb3ModGhpcy5oUmFkKSogdGhpcy5oUmFkaXVzO1xuICAgIHRoaXMuaEhhbmRZID0gdGhpcy5jeSArIE1hdGguc2luKHRoaXMuaFJhZCkqIHRoaXMuaFJhZGl1cztcblxuICAgIC8vIHRoaXMuaEhhbmQubGluZVN0eWxlKHRoaXMubGluZVdpZHRoLCB0aGlzLmZpbGxUaWZmYW55Qmx1ZSwgMSk7XG4gICAgdGhpcy5oSGFuZC5saW5lU3R5bGUoNCwgdGhpcy5maWxsVGlmZmFueUJsdWUsIDEpO1xuICAgIHRoaXMuaEhhbmQubW92ZVRvKHRoaXMuY3gsIHRoaXMuY3kpOyAgICBcbiAgICB0aGlzLmhIYW5kLmxpbmVUbyh0aGlzLmhIYW5kWCwgdGhpcy5oSGFuZFkpO1xuXG4gICAgdGhpcy5oSGFuZC5lbmRGaWxsKCk7XG5cblxuICAgIC8vIOWIhumHnVxuICAgIGlmICghdGhpcy5tSGFuZEZsYWcpIHtcblxuICAgICAgdGhpcy5tUmFkID0gTWF0aC5QSSAqIDIgKiB0aGlzLm1pbnV0ZVAgLSBNYXRoLlBJIC8gMjtcblxuICAgIH0gZWxzZSB7XG5cbiAgICB9ICAgICAgXG5cbiAgICB0aGlzLm1IYW5kWCA9IHRoaXMuY3ggKyBNYXRoLmNvcyh0aGlzLm1SYWQpICogdGhpcy5tUmFkaXVzO1xuICAgIHRoaXMubUhhbmRZID0gdGhpcy5jeSArIE1hdGguc2luKHRoaXMubVJhZCkgKiB0aGlzLm1SYWRpdXM7XG5cblxuICAgIC8vIHRoaXMubUhhbmQubGluZVN0eWxlKHRoaXMubGluZVdpZHRoLCAweDgxZDhkMCwgMSk7XG4gICAgdGhpcy5tSGFuZC5saW5lU3R5bGUoMiwgMHg4MWQ4ZDAsIDEpO1xuXG4gICAgdGhpcy5tSGFuZC5tb3ZlVG8odGhpcy5jeCwgdGhpcy5jeSk7ICAgIFxuICAgIHRoaXMubUhhbmQubGluZVRvKHRoaXMubUhhbmRYLCB0aGlzLm1IYW5kWSk7XG5cbiAgICB0aGlzLm1IYW5kLmVuZEZpbGwoKTtcblxuXG4gICAgLy8g56eS6YedXG4gICAgaWYgKCF0aGlzLnNIYW5kRmxhZykge1xuICAgICAgXG4gICAgICB0aGlzLnNSYWQgPSBNYXRoLlBJICogMiAqIHRoaXMuc2Vjb25kUCAtIE1hdGguUEkgLyAyO1xuXG4gICAgfSBlbHNlIHtcblxuXG4gICAgfVxuXG4gICAgdGhpcy5zUmFkaXVzID0gdGhpcy5nZXRTSGFuZExlbmd0aCh0aGlzLnNSYWQpO1xuICAgIC8vIGxvZyh0aGlzLnNSYWRpdXMpO1xuXG4gICAgdGhpcy5zSGFuZFggPSB0aGlzLmN4ICsgTWF0aC5jb3ModGhpcy5zUmFkKSAqIHRoaXMuc1JhZGl1cyAqIChnYi5pbi5ybS5jdXJyZW50IC8gMTAwKTtcbiAgICB0aGlzLnNIYW5kWSA9IHRoaXMuY3kgKyBNYXRoLnNpbih0aGlzLnNSYWQpICogdGhpcy5zUmFkaXVzICogKGdiLmluLnJtLmN1cnJlbnQgLyAxMDApO1xuXG4gICAgLy8gbG9nKHRoaXMuc1JhZCx0aGlzLnNSYWRpdXMsZ2IuaW4ucm0uY3VycmVudCk7XG5cbiAgICAvLyB0aGlzLnNIYW5kLmxpbmVTdHlsZSh0aGlzLmxpbmVXaWR0aCwgMHg4MWQ4ZDAsIDEpO1xuICAgIHRoaXMuc0hhbmQubGluZVN0eWxlKDEsIDB4ODFkOGQwLCAxKTtcblxuICAgIHRoaXMuc0hhbmQubW92ZVRvKHRoaXMuY3gsIHRoaXMuY3kpOyAgICBcbiAgICB0aGlzLnNIYW5kLmxpbmVUbyh0aGlzLnNIYW5kWCwgdGhpcy5zSGFuZFkpO1xuXG4gICAgdGhpcy5zSGFuZC5lbmRGaWxsKCk7XG5cbiAgfVxuXG4gIGdldFNIYW5kTGVuZ3RoKHRhcmdldFJhZCkge1xuXG4gICAgdmFyIGFuZ2xlID0gdGFyZ2V0UmFkICogMTgwIC8gTWF0aC5QSTtcbiAgICBpZiAoYW5nbGUgPCAwKSBhbmdsZSArPSAzNjA7XG4gICAgYW5nbGUgPSBhbmdsZSAlIDM2MDtcbiAgICB2YXIgdGFyZ2V0ID0gMDtcblxuICAgIC8vIOWPs+S4i+OBruinkuW6plxuICAgIHZhciByaWdodEJ0bUFuZyA9IE1hdGguYXRhbjIoZ2IuaW4uci53cy5oIC0gdGhpcy5jeSxnYi5pbi5yLndzLncgLSB0aGlzLmN4KSAqIDE4MCAvIE1hdGguUEk7XG4gICAgdmFyIGxlZnRCdG1BbmcgPSAxODAtcmlnaHRCdG1Bbmc7XG4gICAgdmFyIGxlZnRUb3BBbmcgPSByaWdodEJ0bUFuZyArIDE4MDtcbiAgICB2YXIgcmlnaHRUb3BBbmcgPSAzNjAtcmlnaHRCdG1Bbmc7XG5cbiAgICBpZiAoYW5nbGUgPiByaWdodEJ0bUFuZyAmJiBhbmdsZSA8IDkwKSB7XG5cbiAgICAgIGFuZ2xlID0gOTAgLSBhbmdsZTtcbiAgICAgIHRhcmdldCA9IChnYi5pbi5yLndzLmgvMikgLyBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApXG5cbiAgICB9IGVsc2UgaWYgKGFuZ2xlID49IDkwICYmIGFuZ2xlIDwgbGVmdEJ0bUFuZykge1xuXG4gICAgICBhbmdsZSA9IGFuZ2xlIC0gOTA7XG4gICAgICB0YXJnZXQgPSAoZ2IuaW4uci53cy5oLzIpIC8gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKVxuXG4gICAgfSBlbHNlIGlmIChhbmdsZSA+PSBsZWZ0QnRtQW5nICYmIGFuZ2xlIDwgMTgwKSB7XG5cbiAgICAgIGFuZ2xlID0gMTgwIC0gYW5nbGU7XG4gICAgICB0YXJnZXQgPSAoZ2IuaW4uci53cy53LzIpIC8gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKVxuXG4gICAgfSBlbHNlIGlmIChhbmdsZSA+PSAxODAgJiYgYW5nbGUgPCBsZWZ0VG9wQW5nKSB7XG5cbiAgICAgIGFuZ2xlID0gYW5nbGUgLSAxODA7XG4gICAgICB0YXJnZXQgPSAoZ2IuaW4uci53cy53LzIpIC8gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKVxuXG4gICAgfSBlbHNlIGlmIChhbmdsZSA+PSBsZWZ0VG9wQW5nICYmIGFuZ2xlIDwgMjcwKSB7XG5cbiAgICAgIGFuZ2xlID0gMjcwIC0gYW5nbGU7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbmdsZSk7XG4gICAgICB0YXJnZXQgPSAoZ2IuaW4uci53cy5oLzIpIC8gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKVxuICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKGFuZ2xlID49IDI3MCAmJiBhbmdsZSA8IHJpZ2h0VG9wQW5nKSB7XG5cbiAgICAgIGFuZ2xlID0gYW5nbGUgLSAyNzA7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbmdsZSk7XG4gICAgICB0YXJnZXQgPSAoZ2IuaW4uci53cy5oLzIpIC8gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKVxuICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KTtcblxuICAgIH0gZWxzZSBpZiAoYW5nbGUgPj0gcmlnaHRUb3BBbmcgJiYgYW5nbGUgPCAzNjApIHtcblxuICAgICAgYW5nbGUgPSAzNjAgLSBhbmdsZTtcbiAgICAgIHRhcmdldCA9IChnYi5pbi5yLndzLncvMikgLyBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApXG5cbiAgICB9IGVsc2UgaWYgKGFuZ2xlID49IDAgJiYgYW5nbGUgPCByaWdodEJ0bUFuZykge1xuXG4gICAgICBhbmdsZSA9IGFuZ2xlO1xuICAgICAgdGFyZ2V0ID0gKGdiLmluLnIud3Mudy8yKSAvIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MClcblxuICAgIH07XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuXG4gIH1cblxuICBkcmF3Q2lyY2xlMDEoc3RhcnRSYWQsIGVuZFJhZCkge1xuXG4gICAgdmFyIHJhZGl1cyA9ICQod2luZG93KS5oZWlnaHQoKSAqIDEwOyAvLyDmmqvlrppcbiAgICAvLyB2YXIgcmFkaWFuID0gcmFkICUgTWF0aC5QSSAqIDI7XG5cbiAgICAvLyB2YXIgcnggPSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzO1xuICAgIC8vIHZhciByeSA9IE1hdGguc2luKHJhZGlhbikgKiByYWRpdXM7XG5cbiAgICB0aGlzLmNvbG9yLmJlZ2luRmlsbCh0aGlzLmZpbGxUaWZmYW55Qmx1ZSwgMSk7XG4gICAgLy8gdGhpcy5jb2xvci5saW5lU3R5bGUoMiwgMHhGRjAwRkYsIDEpO1xuXG4gICAgdGhpcy5jb2xvci5tb3ZlVG8odGhpcy5jeCwgdGhpcy5jeSk7XG4gICAgdGhpcy5jb2xvci5hcmModGhpcy5jeCwgdGhpcy5jeSwgcmFkaXVzLCBzdGFydFJhZCwgZW5kUmFkKTtcblxuICAgIHRoaXMuY29sb3IuZW5kRmlsbCgpO1xuXG4gIH1cblxuICBkcmF3Q2lyY2xlMDIoc3RhcnRSYWQsIGVuZFJhZCkge1xuXG4gICAgdmFyIHJhZGl1cyA9ICQod2luZG93KS5oZWlnaHQoKSAqIDEwOyAvLyDmmqvlrppcbiAgICAvLyB2YXIgcmFkaWFuID0gcmFkICUgTWF0aC5QSSAqIDI7XG5cbiAgICAvLyB2YXIgcnggPSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzO1xuICAgIC8vIHZhciByeSA9IE1hdGguc2luKHJhZGlhbikgKiByYWRpdXM7XG5cbiAgICB0aGlzLmNvbG9yLmJlZ2luRmlsbCh0aGlzLmZpbGxUaWZmYW55Qmx1ZSwgMSk7XG4gICAgLy8gdGhpcy5jb2xvci5saW5lU3R5bGUoMiwgMHhGRjAwRkYsIDEpO1xuXG4gICAgdGhpcy5jb2xvci5tb3ZlVG8odGhpcy5jeCwgdGhpcy5jeSk7XG4gICAgdGhpcy5jb2xvci5hcmModGhpcy5jeCwgdGhpcy5jeSwgcmFkaXVzLCBzdGFydFJhZCwgZW5kUmFkKTtcblxuICAgIHRoaXMuY29sb3IuZW5kRmlsbCgpO1xuXG4gIH1cblxuICBkcmF3Q2lyY2xlMDMoc3RhcnRSYWQsIGVuZFJhZCkge1xuXG4gICAgdmFyIHJhZGl1cyA9ICQod2luZG93KS5oZWlnaHQoKSAqIDEwOyAvLyDmmqvlrppcbiAgICAvLyB2YXIgcmFkaWFuID0gcmFkICUgTWF0aC5QSSAqIDI7XG5cbiAgICAvLyB2YXIgcnggPSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzO1xuICAgIC8vIHZhciByeSA9IE1hdGguc2luKHJhZGlhbikgKiByYWRpdXM7XG5cbiAgICB0aGlzLmNvbG9yLmJlZ2luRmlsbCh0aGlzLmZpbGxUaWZmYW55Qmx1ZSwgMSk7XG4gICAgLy8gdGhpcy5jb2xvci5saW5lU3R5bGUoMiwgMHhGRjAwRkYsIDEpO1xuXG4gICAgdGhpcy5jb2xvci5tb3ZlVG8odGhpcy5jeCwgdGhpcy5jeSk7XG4gICAgdGhpcy5jb2xvci5hcmModGhpcy5jeCwgdGhpcy5jeSwgcmFkaXVzLCBzdGFydFJhZCwgZW5kUmFkKTtcblxuICAgIHRoaXMuY29sb3IuZW5kRmlsbCgpO1xuXG4gIH1cblxuICBkcmF3Q2lyY2xlMDQoc3RhcnRSYWQsIGVuZFJhZCkge1xuXG4gICAgdmFyIHJhZGl1cyA9ICQod2luZG93KS5oZWlnaHQoKSAqIDEwOyAvLyDmmqvlrppcbiAgICAvLyB2YXIgcmFkaWFuID0gcmFkICUgTWF0aC5QSSAqIDI7XG5cbiAgICAvLyB2YXIgcnggPSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzO1xuICAgIC8vIHZhciByeSA9IE1hdGguc2luKHJhZGlhbikgKiByYWRpdXM7XG5cbiAgICB0aGlzLm1hc2suYmVnaW5GaWxsKHRoaXMuZmlsbEJsYWNrLCAxKTtcbiAgICAvLyB0aGlzLm1hc2subGluZVN0eWxlKDIsIDB4RkYwMEZGLCAxKTtcblxuICAgIHRoaXMubWFzay5tb3ZlVG8odGhpcy5jeCwgdGhpcy5jeSk7XG4gICAgdGhpcy5tYXNrLmFyYyh0aGlzLmN4LCB0aGlzLmN5LCByYWRpdXMsIHN0YXJ0UmFkLCBlbmRSYWQpO1xuXG4gICAgdGhpcy5tYXNrLmVuZEZpbGwoKTtcblxuICB9XG5cbiAgZHJhd0NpcmNsZTA1KHN0YXJ0UmFkLCBlbmRSYWQpIHtcblxuICAgIHZhciByYWRpdXMgPSAkKHdpbmRvdykuaGVpZ2h0KCkgKiAxMDsgLy8g5pqr5a6aXG4gICAgLy8gdmFyIHJhZGlhbiA9IHJhZCAlIE1hdGguUEkgKiAyO1xuXG4gICAgLy8gdmFyIHJ4ID0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cztcbiAgICAvLyB2YXIgcnkgPSBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzO1xuXG4gICAgdGhpcy5tYXNrLmJlZ2luRmlsbCh0aGlzLmZpbGxCbGFjaywgMSk7XG4gICAgLy8gdGhpcy5tYXNrLmxpbmVTdHlsZSgyLCAweEZGMDBGRiwgMSk7XG5cbiAgICB0aGlzLm1hc2subW92ZVRvKHRoaXMuY3gsIHRoaXMuY3kpO1xuICAgIHRoaXMubWFzay5hcmModGhpcy5jeCwgdGhpcy5jeSwgcmFkaXVzLCBzdGFydFJhZCwgZW5kUmFkKTtcblxuICAgIHRoaXMubWFzay5lbmRGaWxsKCk7XG5cbiAgfVxuXG4gIGRyYXdDaXJjbGUwNihzdGFydFJhZCwgZW5kUmFkKSB7XG5cbiAgICB2YXIgcmFkaXVzID0gJCh3aW5kb3cpLmhlaWdodCgpICogMTA7IC8vIOaaq+WumlxuICAgIC8vIHZhciByYWRpYW4gPSByYWQgJSBNYXRoLlBJICogMjtcblxuICAgIC8vIHZhciByeCA9IE1hdGguY29zKHJhZGlhbikgKiByYWRpdXM7XG4gICAgLy8gdmFyIHJ5ID0gTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cztcblxuICAgIHRoaXMubWFzay5iZWdpbkZpbGwodGhpcy5maWxsQmxhY2ssIDEpO1xuICAgIC8vIHRoaXMubWFzay5saW5lU3R5bGUoMiwgMHhGRjAwRkYsIDEpO1xuXG4gICAgdGhpcy5tYXNrLm1vdmVUbyh0aGlzLmN4LCB0aGlzLmN5KTtcbiAgICB0aGlzLm1hc2suYXJjKHRoaXMuY3gsIHRoaXMuY3ksIHJhZGl1cywgc3RhcnRSYWQsIGVuZFJhZCk7XG5cbiAgICB0aGlzLm1hc2suZW5kRmlsbCgpO1xuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIHRoaXMucmVuZGVyZXIud2lkdGggPSBnYi5pbi5yLndzLnc7XG4gICAgdGhpcy5yZW5kZXJlci5oZWlnaHQgPSBnYi5pbi5yLndzLmg7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlc2l6ZShnYi5pbi5yLndzLncsIGdiLmluLnIud3MuaCk7XG5cbiAgXG5cbiAgICB0aGlzLnNSYWRpdXMgPSB0aGlzLnRhcmdldFJhZGl1cyA9IE1hdGguc3FydChnYi5pbi5yLndzLncqZ2IuaW4uci53cy53ICsgZ2IuaW4uci53cy5oKmdiLmluLnIud3MuaCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cyAoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCgnUGFnZVRyYW5zaXRpb25FZmZlY3QnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICAgIGdiLmluLnVwLmFkZCgnUGFnZVRyYW5zaXRpb25FZmZlY3QnLCB0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1BhZ2VUcmFuc2l0aW9uL1BhZ2VUcmFuc2l0aW9uLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBvaW50XG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcblxuICBjb25zdHJ1Y3Rvcih4LHkpIHtcblxuICAgIHRoaXMuc3ggPSAwO1xuICAgIHRoaXMuc3kgPSAwO1xuXG4gICAgdGhpcy53ID0gMDtcbiAgICB0aGlzLmggPSAwO1xuXG4gICAgdGhpcy5leCA9IDA7XG4gICAgdGhpcy5leCA9IDA7XG5cbiAgICB0aGlzLnggPSB4IHx8IDA7IC8vcHJldmlvdXMgbW91c2UgeFxuICAgIHRoaXMueSA9IHkgfHwgMDsgLy9wcmV2aW91cyBtb3VzZSB5XG4gICAgdGhpcy52eCA9IDA7IC8vY2VudGVyIHhcbiAgICB0aGlzLnZ5ID0gMDsgLy9jZW50ZXIgeVxuXG4gICAgdGhpcy5kZWZYID0geCB8fCAwO1xuICAgIHRoaXMuZGVmWSA9IHkgfHwgMDtcblxuICAgIHRoaXMucHggPSAwOyAvL3ByZXZpb3VzIG1vdXNlIHhcbiAgICB0aGlzLnB5ID0gMDsgLy9wcmV2aW91cyBtb3VzZSB5XG5cbiAgICB0aGlzLnJhZGl1cyA9IDA7ICAgIC8vIOWNiuW+hFxuICAgIHRoaXMuY29sb3IgPSBudWxsOyAgLy8g6ImyXG4gICAgdGhpcy5pc1JlbW92ZSA9IGZhbHNlOy8vIOa2iOWOu+ODleODqeOCsFxuXG4gICAgLy8gdGhpcy5HUkFWSVRZID0gMC40O1xuICAgIHRoaXMuR1JBVklUWSA9IDA7XG4gICAgdGhpcy5TUFJJTkcgPSAwLjA4OyAgLy8g44OQ44ON5L+C5pWwXG4gICAgdGhpcy5GUklDVElPTiA9IDAuOTc7ICAvLyDmkanmk6bkv4LmlbBcbiAgICB0aGlzLk1BWF9ESVMgPSAxMDA7ICAvLyDjg5zjg7zjg6vjgYzjg57jgqbjgrnjgavlj43lv5zjgZnjgovmnIDlpKfot53pm6JcblxuICAgIHRoaXMudG9wID0gMDtcbiAgICB0aGlzLmxlZnQgPSAwO1xuXG4gIH1cblxuICBjcmVhdGUoKSB7XG5cblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG5cbiAgfVxuXG4gIGRyYXcoKSB7XG5cbiAgICBcbiAgICBcbiAgfVxuXG4gIGxvb3AoKSB7XG5cbiAgfVxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvUGFnZVRyYW5zaXRpb24vUG9pbnQuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFRvcE9wZW5pbmdcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBMaWJzIGZyb20gJy4uLy4uLy4uL015TGlicy9EaXNwbGF5L01vdGlvbi9Eb21Nb3Rpb25MaWJzLmpzJztcbmltcG9ydCBIb3ZlckVmZmVjdFNWR0Fycm93VG9wIGZyb20gJy4vSG92ZXJFZmZlY3RTVkdBcnJvd1RvcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcE9wZW5pbmcge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnRsTWFpbiA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIC8vIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICB0aGlzLmxpYnMgPSBuZXcgTGlicygpO1xuICAgIHRoaXMuaHQgPSBuZXcgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCgkKCcuc2VjdGlvbjAxIC5uZXh0JykpO1xuICAgIHRoaXMuaHQuc2V0dXBGaXJzdCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIGRvbeWPluW+l1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuJG5hdiA9ICQoJyNuYXYnKTtcbiAgICB0aGlzLiRuYXZJdGVtID0gdGhpcy4kbmF2LmZpbmQoJy5pdGVtJyk7XG5cbiAgICB0aGlzLiRzaWRlUiA9ICQoJyNzaWRlUicpO1xuXG4gICAgdGhpcy4kZm9vdGVyVGV4dCA9ICQoJyNmb290ZXIgLnRleHQnKTtcblxuICAgIHRoaXMuJHRleHQgPSAkKCcuc2VjdGlvbjAxIC5uZXh0IC50ZXh0Jyk7XG4gICAgdGhpcy4kYXJyb3cgPSAkKCcuc2VjdGlvbjAxIC5uZXh0IHN2ZycpO1xuXG4gICAgdGhpcy4kY29weSA9ICQoJyNmb290ZXIgLmNvcHknKTtcbiAgICB0aGlzLiR0aW1lID0gJCgnLnNlY3Rpb24wMSAudGltZVdyYXAgLnRleHRXcmFwJyk7XG5cbiAgICB0aGlzLiRzaWRlTCA9ICQoJyNzaWRlTCcpO1xuXG4gICAgdGhpcy4kdGl0MDEgPSAkKCcuc2VjdGlvbjAxIC50aXRXcmFwIGltZycpLmVxKDApO1xuICAgIHRoaXMuJHRpdDAyID0gJCgnLnNlY3Rpb24wMSAudGl0V3JhcCBpbWcnKS5lcSgxKTtcbiAgICB0aGlzLiR0aXQwMyA9ICQoJy5zZWN0aW9uMDEgLnRpdFdyYXAgaW1nJykuZXEoMik7XG5cbiAgICAvLyAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAvLyAgc2NlbmUwMSBzZXR1cFxuICAgIC8vIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kbmF2SXRlbSxkdXI6IDAsZGVsYXk6IDAsYmx1cjogMCxibHVyVGFyZ2V0OiAxMCxlYXNlOiBQb3dlcjMuZWFzZUlufTtcbiAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kc2lkZVIsZHVyOiAwLGRlbGF5OiAwLGJsdXI6IDAsYmx1clRhcmdldDogMTAsZWFzZTogUG93ZXIzLmVhc2VJbn07XG4gICAgdGhpcy5saWJzLmJsdXIob3B0KTtcbiAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJGZvb3RlclRleHQsZHVyOiAwLGRlbGF5OiAwLGJsdXI6IDAsYmx1clRhcmdldDogMTAsZWFzZTogUG93ZXIzLmVhc2VJbn07XG4gICAgdGhpcy5saWJzLmJsdXIob3B0KTtcbiAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJGNvcHksZHVyOiAwLGRlbGF5OiAwLGJsdXI6IDAsYmx1clRhcmdldDogMTAsZWFzZTogUG93ZXIzLmVhc2VJbn07XG4gICAgdGhpcy5saWJzLmJsdXIob3B0KTtcbiAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJHRpbWUsZHVyOiAwLGRlbGF5OiAwLGJsdXI6IDAsYmx1clRhcmdldDogMTAsZWFzZTogUG93ZXIzLmVhc2VJbn07XG4gICAgdGhpcy5saWJzLmJsdXIob3B0KTtcbiAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJHNpZGVMLGR1cjogMCxkZWxheTogMCxibHVyOiAwLGJsdXJUYXJnZXQ6IDEwLGVhc2U6IFBvd2VyMy5lYXNlSW59O1xuICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG5cbiAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJHRpdDAxLGR1cjogMCxkZWxheTogMCxibHVyOiAwLGJsdXJUYXJnZXQ6IDIwLGVhc2U6IFBvd2VyMy5lYXNlSW59O1xuICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG4gICAgdmFyIG9wdCA9IHskdGFyZ2V0OiB0aGlzLiR0aXQwMixkdXI6IDAsZGVsYXk6IDAsYmx1cjogMCxibHVyVGFyZ2V0OiAyMCxlYXNlOiBQb3dlcjMuZWFzZUlufTtcbiAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kdGl0MDMsZHVyOiAwLGRlbGF5OiAwLGJsdXI6IDAsYmx1clRhcmdldDogMjAsZWFzZTogUG93ZXIzLmVhc2VJbn07XG4gICAgdGhpcy5saWJzLmJsdXIob3B0KTtcblxuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRuYXZJdGVtLCB7eTogLTQwfSk7XG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJHNpZGVSLCB7eDogNDB9KTtcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kZm9vdGVyVGV4dCwge3k6IDQwfSk7XG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJGNvcHksIHt5OiA0MH0pO1xuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiR0aW1lLCB7eTogNDB9KTtcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kc2lkZUwsIHt4OiAtNDB9KTtcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kdGl0MDEsIHt5OiAtODAsb3BhY2l0eTogMH0pO1xuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiR0aXQwMiwge3k6IC04MCxvcGFjaXR5OiAwfSk7XG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJHRpdDAzLCB7eTogLTgwLG9wYWNpdHk6IDB9KTtcblxuICB9XG5cbiAgcnVuVG9wKCkge1xuXG4gICAgLy8g5Y+z5LiK44GL44KJ6aCG44GrXG5cbiAgICB0aGlzLnRsTWFpblxuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKCQoJy5tZW51QnRuMDEnKSwgMSwge29wYWNpdHk6IDEsZWFzZTogUG93ZXIyLmVhc2VPdXR9KTtcblxuICAgICAgICB0aGlzLiRuYXZJdGVtLmVhY2goKGluZGV4LCBlbCk9PntcblxuICAgICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogJChlbCksZHVyOiAxLGRlbGF5OiAwLjEgKiBpbmRleCxibHVyOiAxMCxibHVyVGFyZ2V0OiAwLGVhc2U6IFBvd2VyMi5lYXNlT3V0fTtcbiAgICAgICAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuXG4gICAgICAgICAgVHdlZW5NYXgudG8oJChlbCksIDEsIHt5OiAwLG9wYWNpdHk6MSx6OiAxLGVhc2U6IFBvd2VyMi5lYXNlT3V0LGRlbGF5OiAwLjEgKiBpbmRleH0pO1xuICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgfSwnKz0xLjInKVxuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kc2lkZVIsZHVyOiAxLGRlbGF5OiAwLGJsdXI6IDEwLGJsdXJUYXJnZXQ6IDAsZWFzZTogUG93ZXIyLmVhc2VPdXR9O1xuICAgICAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJHNpZGVSLCAxLCB7eDogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIyLmVhc2VPdXR9KTtcblxuICAgICAgfSwnKz0wLjYnKVxuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kZm9vdGVyVGV4dCxkdXI6IDEsZGVsYXk6IDAsYmx1cjogMTAsYmx1clRhcmdldDogMCxlYXNlOiBQb3dlcjIuZWFzZU91dH07XG4gICAgICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy4kZm9vdGVyVGV4dCwgMSwge3k6IDAsb3BhY2l0eToxLGVhc2U6IFBvd2VyMi5lYXNlT3V0fSk7XG5cbiAgICAgIH0sJys9MC4xMycpXG4gICAgICAuYWRkKCgpPT57XG5cbiAgICAgICAgdmFyIG9wdCA9IHskdGFyZ2V0OiB0aGlzLiRjb3B5LGR1cjogMSxkZWxheTogMCxibHVyOiAxMCxibHVyVGFyZ2V0OiAwLGVhc2U6IFBvd2VyMi5lYXNlT3V0fTtcbiAgICAgICAgdGhpcy5saWJzLmJsdXIob3B0KTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLiRjb3B5LCAxLCB7eTogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIyLmVhc2VPdXR9KTtcblxuICAgICAgfSwnKz0wLjEzJylcbiAgICAgIC5hZGQoKCk9PntcblxuICAgICAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJHRpbWUsZHVyOiAxLGRlbGF5OiAwLGJsdXI6IDEwLGJsdXJUYXJnZXQ6IDAsZWFzZTogUG93ZXIyLmVhc2VPdXR9O1xuICAgICAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJHRpbWUsIDEsIHt5OiAwLG9wYWNpdHk6MSxlYXNlOiBQb3dlcjIuZWFzZU91dH0pO1xuXG4gICAgICB9LCcrPTAuMTMnKVxuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kc2lkZUwsZHVyOiAxLGRlbGF5OiAwLGJsdXI6IDEwLGJsdXJUYXJnZXQ6IDAsZWFzZTogUG93ZXIyLmVhc2VPdXR9O1xuICAgICAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJHNpZGVMLCAxLCB7eDogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIyLmVhc2VPdXR9KTtcblxuICAgICAgfSwnKz0wLjEzJylcbiAgICAgIC5hZGQoKCk9PntcblxuICAgICAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJHRpdDAxLGR1cjogMi4wLGRlbGF5OiAwLGJsdXI6IDIwLGJsdXJUYXJnZXQ6IDAsZWFzZTogUG93ZXIyLmVhc2VPdXR9O1xuICAgICAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuICAgICAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJHRpdDAyLGR1cjogMS45LGRlbGF5OiAwLjEsYmx1cjogMjAsYmx1clRhcmdldDogMCxlYXNlOiBQb3dlcjIuZWFzZU91dH07XG4gICAgICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG4gICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kdGl0MDMsZHVyOiAxLjgsZGVsYXk6IDAuMixibHVyOiAyMCxibHVyVGFyZ2V0OiAwLGVhc2U6IFBvd2VyMi5lYXNlT3V0fTtcbiAgICAgICAgdGhpcy5saWJzLmJsdXIob3B0KTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLiR0aXQwMSwgMi4wLCB7eTogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIyLmVhc2VPdXQsZGVsYXk6MH0pO1xuICAgICAgICBUd2Vlbk1heC50byh0aGlzLiR0aXQwMiwgMS45LCB7eTogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIyLmVhc2VPdXQsZGVsYXk6MC4xfSk7XG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJHRpdDAzLCAxLjgsIHt5OiAwLG9wYWNpdHk6MSxlYXNlOiBQb3dlcjIuZWFzZU91dCxkZWxheTowLjJ9KTtcblxuICAgICAgfSwnKz0wLjEzJylcbiAgICAgIC5hZGQoKCk9PntcblxuICAgICAgICB0aGlzLmh0LnJ1bkZpcnN0KCk7XG4gICAgICAgIHRoaXMuaHQuYXV0b0Fycm93KCk7XG5cbiAgICAgIH0sJys9MS4xMicpXG5cblxuICB9XG5cbiAgIHJ1bk90aGVyKCkge1xuXG4gICAgdGhpcy50bE1haW5cbiAgICAgIC5hZGQoKCk9PntcblxuICAgICAgICBUd2Vlbk1heC50bygkKCcubWVudUJ0bjAxJyksIDEsIHtvcGFjaXR5OiAxLGVhc2U6IFBvd2VyMi5lYXNlT3V0fSk7XG5cbiAgICAgICAgdGhpcy4kbmF2SXRlbS5lYWNoKChpbmRleCwgZWwpPT57XG5cbiAgICAgICAgICB2YXIgb3B0ID0geyR0YXJnZXQ6ICQoZWwpLGR1cjogMSxkZWxheTogMC4xICogaW5kZXgsYmx1cjogMTAsYmx1clRhcmdldDogMCxlYXNlOiBQb3dlcjIuZWFzZU91dH07XG4gICAgICAgICAgdGhpcy5saWJzLmJsdXIob3B0KTtcblxuICAgICAgICAgIFR3ZWVuTWF4LnRvKCQoZWwpLCAxLCB7eTogMCxvcGFjaXR5OjEsejoxLCBlYXNlOiBQb3dlcjIuZWFzZU91dCxkZWxheTogMC4xICogaW5kZXh9KTtcbiAgICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgIH0sJys9MS4yJylcbiAgICAgIC5hZGQoKCk9PntcblxuICAgICAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJHNpZGVSLGR1cjogMSxkZWxheTogMCxibHVyOiAxMCxibHVyVGFyZ2V0OiAwLGVhc2U6IFBvd2VyMi5lYXNlT3V0fTtcbiAgICAgICAgdGhpcy5saWJzLmJsdXIob3B0KTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLiRzaWRlUiwgMSwge3g6IDAsb3BhY2l0eToxLGVhc2U6IFBvd2VyMi5lYXNlT3V0fSk7XG5cbiAgICAgIH0sJys9MC42JylcbiAgICAgIC5hZGQoKCk9PntcblxuICAgICAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJHNpZGVMLGR1cjogMSxkZWxheTogMCxibHVyOiAxMCxibHVyVGFyZ2V0OiAwLGVhc2U6IFBvd2VyMi5lYXNlT3V0fTtcbiAgICAgICAgdGhpcy5saWJzLmJsdXIob3B0KTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLiRzaWRlTCwgMSwge3g6IDAsb3BhY2l0eToxLGVhc2U6IFBvd2VyMi5lYXNlT3V0fSk7XG5cbiAgICAgIH0sJys9MC4xMycpXG5cbiAgICAgIC8vIOODleODg+OCv+ODvOetieOBr+ihqOekuuOBleOCjOOBquOBhOOBjOOAgeWIneacn+eKtuaFi+OBq+aIu+OBl+OBpuOBiuOBj1xuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kZm9vdGVyVGV4dCxkdXI6IDEsZGVsYXk6IDAsYmx1cjogMTAsYmx1clRhcmdldDogMCxlYXNlOiBQb3dlcjIuZWFzZU91dH07XG4gICAgICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy4kZm9vdGVyVGV4dCwgMSwge3k6IDAsb3BhY2l0eToxLGVhc2U6IFBvd2VyMi5lYXNlT3V0fSk7XG5cbiAgICAgIH0pXG4gICAgICAuYWRkKCgpPT57XG5cbiAgICAgICAgdmFyIG9wdCA9IHskdGFyZ2V0OiB0aGlzLiRjb3B5LGR1cjogMSxkZWxheTogMCxibHVyOiAxMCxibHVyVGFyZ2V0OiAwLGVhc2U6IFBvd2VyMi5lYXNlT3V0fTtcbiAgICAgICAgdGhpcy5saWJzLmJsdXIob3B0KTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLiRjb3B5LCAxLCB7eTogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIyLmVhc2VPdXR9KTtcblxuICAgICAgfSlcblxuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuXG4gIH1cblxuICBvbkxvb3AoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQoJ09wZW5pbmcnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ub3BPcGVuaW5nLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIERvbU1vdGlvbkxpYnNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tTW90aW9uTGlicyB7XG5cbiAgY29uc3RydWN0b3Ioc3JjKSB7XG5cbiAgICB0aGlzLnNyYyA9IHNyYztcblxuICAgIHRoaXMuZmlyc3QgPSB0cnVlO1xuXG4gIH1cblxuICBibHVyKG9wdCl7IFxuXG4gICAgdmFyIGRlZiA9IHtcbiAgICAgICAgICAgICR0YXJnZXQ6IG51bGwsXG4gICAgICAgICAgICBkdXI6IDEsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGJsdXI6IDAsYmx1clRhcmdldDogMTAwLFxuICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJblxuICAgICAgICAgIH07XG4gICAgdmFyIHBhcmFtID0gJC5leHRlbmQoZGVmLG9wdCk7XG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7ICAgICAgXG5cbiAgICB0bFxuICAgICAgLnRvKHBhcmFtLCBwYXJhbS5kdXIsIHtcbiAgICAgICAgYmx1cjogcGFyYW0uYmx1clRhcmdldCxcbiAgICAgICAgZWFzZTogcGFyYW0uZWFzZSxcbiAgICAgICAgZGVsYXk6IHBhcmFtLmRlbGF5LFxuICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24ocCkge1xuICAgICAgICAgIHZhciBiID0gcC50YXJnZXQuYmx1cjtcbiAgICAgICAgICBUd2Vlbk1heC5zZXQocGFyYW0uJHRhcmdldCwge1xuICAgICAgICAgICAgJy13ZWJraXQtZmlsdGVyJzogJ2JsdXIoJyArIGIgKyAncHgpJyxcbiAgICAgICAgICAgICdmaWx0ZXInOiAnYmx1cignICsgYiArICdweCknLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblVwZGF0ZVBhcmFtczogW1wie3NlbGZ9XCJdXG4gICAgICB9KVxuICAgIFxuICB9XG5cbiAgYnJpZ2h0KG9wdCl7XG5cbiAgICB2YXIgZGVmID0ge1xuICAgICAgICAgICAgJHRhcmdldDogbnVsbCxcbiAgICAgICAgICAgIGR1cjogMSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZ3JheXNjYWxlOiAwLGdyYXlzY2FsZVRhcmdldDogMTAwLFxuICAgICAgICAgICAgYnJpZ2h0bmVzczogMTAwLGJyaWdodG5lc3NUYXJnZXQ6IDEwMDAsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLG9wYWNpdHlUYXJnZXQ6IDEsXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZUluLFxuICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXt9XG4gICAgICAgICAgfTtcbiAgICB2YXIgcGFyYW0gPSAkLmV4dGVuZChkZWYsb3B0KTtcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTsgICAgXG5cbiAgICB0bFxuICAgICAgLy8gLnNldChwYXJhbSwge1xuICAgICAgLy8gICBncmF5c2NhbGU6IHBhcmFtLmdyYXlzY2FsZSxcbiAgICAgIC8vICAgYnJpZ2h0bmVzczogcGFyYW0uYnJpZ2h0bmVzcyxcbiAgICAgIC8vICAgb3BhY2l0eTogcGFyYW0ub3BhY2l0eSxcbiAgICAgIC8vIH0pXG4gICAgICAudG8ocGFyYW0sIHBhcmFtLmR1ciwge1xuICAgICAgICBncmF5c2NhbGU6IHBhcmFtLmdyYXlzY2FsZVRhcmdldCxcbiAgICAgICAgYnJpZ2h0bmVzczogcGFyYW0uYnJpZ2h0bmVzc1RhcmdldCxcbiAgICAgICAgZWFzZTogcGFyYW0uZWFzZSxcbiAgICAgICAgZGVsYXk6IHBhcmFtLmRlbGF5LFxuICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24ocCkge1xuICAgICAgICAgIHZhciBnID0gcC50YXJnZXQuZ3JheXNjYWxlO1xuICAgICAgICAgIHZhciBiID0gcC50YXJnZXQuYnJpZ2h0bmVzcztcbiAgICAgICAgICBUd2Vlbk1heC5zZXQocGFyYW0uJHRhcmdldCwge1xuICAgICAgICAgICAgJy13ZWJraXQtZmlsdGVyJzogJ2JyaWdodG5lc3MoJyArIGIgKyAnJSkgZ3JheXNjYWxlKCcgKyBnICsgJyUpJyxcbiAgICAgICAgICAgICdmaWx0ZXInOiAnYnJpZ2h0bmVzcygnICsgYiArICclKSBncmF5c2NhbGUoJyArIGcgKyAnJSknLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblVwZGF0ZVBhcmFtczogW1wie3NlbGZ9XCJdLFxuICAgICAgfSlcbiAgICAgIC50byhwYXJhbS4kdGFyZ2V0LCBwYXJhbS5kdXIsIHtcbiAgICAgICAgb3BhY2l0eTogcGFyYW0ub3BhY2l0eVRhcmdldCxcbiAgICAgICAgZWFzZTogcGFyYW0uZWFzZSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICBwYXJhbS5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIC8vIH0sJy09JytwYXJhbS5kdXItMy4wKTtcbiAgICAgIH0sJy09MS44Jyk7XG5cbiAgfVxuXG4gIHNoYWtlKG9wdCl7XG5cbiAgICB2YXIgZGVmID0ge1xuICAgICAgICAgICAgJHRhcmdldDogbnVsbCxcbiAgICAgICAgICAgIGR1cjogMSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgbWFnOiAxMCxcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW4sXG4gICAgICAgICAgfTtcbiAgICB2YXIgcGFyYW0gPSAkLmV4dGVuZChkZWYsb3B0KTtcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTsgICAgICBcblxuICAgIHRsXG4gICAgICAudG8oe30sIHBhcmFtLmR1ciwge1xuICAgICAgICBkZWxheTogcGFyYW0uZGVsYXksXG4gICAgICAgIGVhc2U6IHBhcmFtLmVhc2UsXG4gICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgdmFyIHggPSAoTWF0aC5yYW5kb20oKSoyLTEpICogcGFyYW0ubWFnO1xuICAgICAgICAgIHZhciB5ID0gKE1hdGgucmFuZG9tKCkqMi0xKSAqIHBhcmFtLm1hZztcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldChwYXJhbS4kdGFyZ2V0LCB7eDp4LHk6eX0pO1xuXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQocGFyYW0uJHRhcmdldCwge3g6MCx5OjB9KTtcblxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgfVxuXG4gIGFmdGVySW1nKG9wdCl7XG5cbiAgICB2YXIgZGVmID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiBudWxsLFxuICAgICAgICAgICAgJHdyYXA6ICQoJ2JvZHknKSxcbiAgICAgICAgICAgIGR1cjogMSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgbnVtOiAzLFxuICAgICAgICAgICAgbGFnOiAwLjA1LFxuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbixcbiAgICAgICAgICB9O1xuICAgIHZhciBwYXJhbSA9ICQuZXh0ZW5kKGRlZixvcHQpO1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRsXG4gICAgICAuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaWYgKHNlbGYuZmlyc3QpIHtcbiAgICAgICAgICBzZWxmLmZpcnN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyDnlLvlg4/opIfoo71cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtLm51bTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZG9tID0gJChwYXJhbS50YXJnZXQpLmNsb25lKCk7XG4gICAgICAgICAgICBwYXJhbS4kd3JhcC5hcHBlbmQoZG9tKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIOeUu+WDj+OCueOCv+OCpOODq3NldFxuICAgICAgICAgIFR3ZWVuTWF4LnNldCgkKHBhcmFtLnRhcmdldCksIHsndHJhbnNmb3JtLW9yaWdpbic6JzUwJSA1MCUnLCdwb3NpdGlvbic6J2Fic29sdXRlJyxzY2FsZToxLjN9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW90aW9uXG4gICAgICAgICQocGFyYW0udGFyZ2V0KS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBUd2Vlbk1heC50bygkKHRoaXMpLCBwYXJhbS5kdXIsIHtcbiAgICAgICAgICAgICAgc2NhbGU6IHBhcmFtLnNjYWxlLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBwYXJhbS5vcGFjaXR5LFxuICAgICAgICAgICAgICBkZWxheTogcGFyYW0ubGFnICogaW5kZXgsXG4gICAgICAgICAgICAgIGVhc2U6IHBhcmFtLmVhc2UsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgfSlcblxuICB9XG5cbiAgc2NhbGVTbG93KG9wdCl7XG5cbiAgICB2YXIgZGVmID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiBudWxsLFxuICAgICAgICAgICAgJHdyYXA6ICQoJ2JvZHknKSxcbiAgICAgICAgICAgIGR1cjogMSxcbiAgICAgICAgICAgIGR1cjAyOiA3LFxuICAgICAgICAgICAgZHVyMDM6IDEuMyxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgc2NhbGU6IDEsc2NhbGVUYXJnZXQ6IDEuMyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsb3BhY2l0eVRhcmdldDogMSxcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW4sXG4gICAgICAgICAgfTtcbiAgICB2YXIgcGFyYW0gPSAkLmV4dGVuZChkZWYsb3B0KTtcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0bFxuICAgICAgLnRvKCQocGFyYW0udGFyZ2V0KSwgMC4wMSwge1xuICAgICAgICBzY2FsZTogcGFyYW0uc2NhbGUsXG4gICAgICAgIG9wYWNpdHk6IHBhcmFtLm9wYWNpdHksXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIFR3ZWVuTWF4LnRvKCQocGFyYW0udGFyZ2V0KSwgcGFyYW0uZHVyMDIsIHtcbiAgICAgICAgICAgIHNjYWxlOiBwYXJhbS5zY2FsZVRhcmdldCxcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMC5lYXNlTm9uZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBUd2Vlbk1heC50bygkKHBhcmFtLnRhcmdldCksIHBhcmFtLmR1cjAzLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiBwYXJhbS5vcGFjaXR5VGFyZ2V0LFxuICAgICAgICAgICAgZWFzZTogcGFyYW0uZWFzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcblxuICB9XG5cbiAgc2NhbGVFbGFzdGljKG9wdCl7XG5cbiAgICB2YXIgZGVmID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiBudWxsLFxuICAgICAgICAgICAgZHVyOiAxLFxuICAgICAgICAgICAgc2NhbGVYOiAyLHNjYWxlWTogMCxzY2FsZVRhcmdldDogMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBlYXNlOiBFbGFzdGljLmVhc2VPdXQuY29uZmlnKDEsIDAuMylcbiAgICAgICAgICB9O1xuICAgIHZhciBwYXJhbSA9ICQuZXh0ZW5kKGRlZixvcHQpO1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRsXG4gICAgICAuZnJvbVRvKHBhcmFtLnRhcmdldCwgcGFyYW0uZHVyLCB7XG4gICAgICAgIHNjYWxlWDogcGFyYW0uc2NhbGVYLFxuICAgICAgICBzY2FsZVk6IHBhcmFtLnNjYWxlWSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNjYWxlOiBwYXJhbS5zY2FsZVRhcmdldCxcbiAgICAgICAgZWFzZTogRWxhc3RpYy5lYXNlT3V0LmNvbmZpZygxLCAwLjMpLFxuICAgICAgfSk7XG5cbiAgfVxuXG4gIC8vIOOCtOODoFxuICBndW0ob3B0KXtcblxuICAgIHZhciBkZWYgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICAgICAgICBkdXI6IDEsXG4gICAgICAgICAgICBzY2FsZVg6IDIsc2NhbGVZOiAwLHNjYWxlVGFyZ2V0OiAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIGVhc2U6IEVsYXN0aWMuZWFzZU91dC5jb25maWcoMSwgMC4zKVxuICAgICAgICAgIH07XG4gICAgdmFyIHBhcmFtID0gJC5leHRlbmQoZGVmLG9wdCk7XG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHtyZXBlYXQ6LTEscmVwZWF0RGVsYXk6IDF9KTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0bFxuICAgICAgLnRvKHBhcmFtLnRhcmdldCwwLjMsIHtcbiAgICAgICAgc2NhbGVZOjEuNCxcbiAgICAgICAgc2NhbGVYIDogMC43LFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgfSlcbiAgICAgLnRvKHBhcmFtLnRhcmdldCwwLjI1LCB7XG4gICAgICAgIHNjYWxlWTowLjcsXG4gICAgICAgIHNjYWxlWCA6IDEuMyxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgIH0pXG4gICAgIC50byhwYXJhbS50YXJnZXQsMC4yLCB7XG4gICAgICAgIHNjYWxlWToxLjMsXG4gICAgICAgIHNjYWxlWCA6IDAuOCxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgIH0pXG4gICAgIC50byhwYXJhbS50YXJnZXQsMC4yLCB7XG4gICAgICAgIHNjYWxlWTowLjgsXG4gICAgICAgIHNjYWxlWCA6IDEuMixcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgIH0pXG4gICAgIC50byhwYXJhbS50YXJnZXQsMC4yLCB7XG4gICAgICAgIHNjYWxlWToxLjEsXG4gICAgICAgIHNjYWxlWCA6IDAuOSxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgIH0pXG4gICAgIC50byhwYXJhbS50YXJnZXQsMC4xMywge1xuICAgICAgICBzY2FsZVk6MC45LFxuICAgICAgICBzY2FsZVggOiAxLjEsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICB9KVxuICAgICAudG8ocGFyYW0udGFyZ2V0LDAuMTMsIHtcbiAgICAgICAgc2NhbGVZOiAxLFxuICAgICAgICBzY2FsZVggOiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgfSlcblxuXG4gIH1cblxuICAvLyDjgrTjg6BcbiAgZG9vb24ob3B0KXtcblxuICAgIHZhciBkZWYgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICAgICAgICB3cmFwOiBudWxsLFxuICAgICAgICAgICAgZHVyOiAxLFxuICAgICAgICAgICAgc2NhbGVYOiAyLHNjYWxlWTogMCxzY2FsZVRhcmdldDogMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBlYXNlOiBFbGFzdGljLmVhc2VPdXQuY29uZmlnKDEsIDAuMylcbiAgICAgICAgICB9O1xuICAgIHZhciBwYXJhbSA9ICQuZXh0ZW5kKGRlZixvcHQpO1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIGxvZ28g44Gh44KH44Gj44Goc2NhbGUsb3BhY2l0eeOBp+WHuuOBpuOAgeOBneOBruOBguOBqOaPuuOCjOOBpuOAgeWwj+OBleOBj+OBquOCi1xuICAgIHRsXG4gICAgICAuZnJvbVRvKHBhcmFtLnRhcmdldCwgMywge1xuICAgICAgICBzY2FsZTogMS41LFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfSx7XG4gICAgICAgIHNjYWxlOiAxLjQ1LFxuICAgICAgICBvcGFjaXR5OiAwLjQsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW4sXG4gICAgICB9KVxuXG4gICAgdGxcbiAgICAgIC50byh7fSwgMC43LCB7XG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlSW4sXG4gICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgLy8g44KG44KMXG4gICAgICAgICAgdmFyIHggPSAoTWF0aC5yYW5kb20oKSoyLTEpICogNTtcbiAgICAgICAgICB2YXIgeSA9IChNYXRoLnJhbmRvbSgpKjItMSkgKiA1O1xuXG4gICAgICAgICAgY29uc29sZS5sb2cocGFyYW0ud3JhcCk7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQocGFyYW0ud3JhcCwge3g6eCx5Onl9KTtcblxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KHBhcmFtLndyYXAsIHt4OjAseTowfSk7XG5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50byhwYXJhbS50YXJnZXQsIDAuNCwge1xuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICB9LCctPTAuNzUnKVxuXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9EaXNwbGF5L01vdGlvbi9Eb21Nb3Rpb25MaWJzLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBIb3ZlckVmZmVjdFNWR0Fycm93VG9wXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3ZlckVmZmVjdFNWR0Fycm93VG9wIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkdGFyZ2V0XG5cbiAgICAvLyBtb3Rpb25cbiAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgICB0aGlzLmlzSG92ZXIgPSBmYWxzZTtcblxuICAgIC8vIOOCueODnuODm+OBruOBqOOBjeOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChnYi5pbi51LmlzUEMpIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICB9XG5cbiAgb25FbnRlciAodGhhdCkge1xuXG4gICAgaWYgKHRoaXMuYXV0b1RMKSB7XG4gICAgICB0aGlzLmF1dG9UTC5raWxsKCk7XG4gICAgICB0aGlzLmF1dG9UTCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnRsMDIpIHRoaXMudGwwMi5raWxsKCk7XG4gICAgdGhpcy50bDAxID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnRsMDFcbiAgICAgICAgLy8g55+i5Y2w44KS5LiL44Gr5LiL44GS44KLXG4gICAgICAgIC50bygkKHRoYXQpLmZpbmQoJy5hcnJvdy5wYycpLCAwLjQsIHtcbiAgICAgICAgICBzY2FsZVk6IDAuNjUsXG4gICAgICAgICAgeTogOCxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHo6IDEsXG4gICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC8vIOaWh+Wtl+OCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCcudGV4dCcpLCAwLjQsIHtcbiAgICAgICAgICB5OiAzMCxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHo6IDEsXG4gICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgICAgfSwnLT0wLjM3JylcbiAgICAgICAgXG4gIH1cblxuICBvbkxlYXZlICh0aGF0KSB7XG5cbiAgICBpZiAodGhpcy50bDAxKSB0aGlzLnRsMDEua2lsbCgpO1xuICAgIHRoaXMudGwwMiA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy50bDAyXG4gICAgICAvLyDmloflrZfjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgIC50bygkKHRoYXQpLmZpbmQoJy50ZXh0JyksIDAuNSwge1xuICAgICAgICB5OiAwLFxuICAgICAgICB6OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0XG4gICAgICB9KVxuICAgICAgLy8g55+i5Y2w44KS5LiL44Gr5LiL44GS44KLXG4gICAgICAudG8oJCh0aGF0KS5maW5kKCcuYXJyb3cucGMnKSwgMC41LCB7XG4gICAgICAgIHNjYWxlWTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAgICAgaWYgKHRoaXMuYXV0b1RMID09IG51bGwpIHRoaXMuYXV0b0Fycm93KCk7ICAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgIH0sJy09MC40NScpXG5cbiAgfVxuXG4gIGF1dG9BcnJvdygpIHtcblxuICAgIHRoaXMuYXV0b1RMID0gbmV3IFRpbWVsaW5lTWF4KHtyZXBlYXQ6IC0xfSk7XG5cbiAgICB0aGlzLmF1dG9UTFxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwgMC42LCB7XG4gICAgICAgIHk6IDYwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBkZWxheTogNS4wLFxuICAgICAgICBzY2FsZVk6IDAuMyxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSlcbiAgICAgIC5zZXQodGhpcy4kdGFyZ2V0LmZpbmQoJy5hcnJvdy5wYycpLCB7c2NhbGVZOiAxLHk6IC02MH0pXG4gICAgICAudG8odGhpcy4kdGFyZ2V0LmZpbmQoJy5hcnJvdy5wYycpLCAwLjUsIHtcbiAgICAgICAgc2NhbGVZOiAxLFxuICAgICAgICB5OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBkZWxheTogMC4zLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgMTAwJScsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9KVxuXG4gIH1cblxuICBzZXR1cEZpcnN0KCkge1xuXG4gICAgVHdlZW5NYXguc2V0KCQoJy5zZWN0aW9uMDEgLm5leHQgLnRleHQnKSwge3k6IC02MCxvcGFjaXR5OjAsejogMSx9KTtcbiAgICBUd2Vlbk1heC5zZXQoJCgnLnNlY3Rpb24wMSAubmV4dCBzdmcnKSwge3k6IC0zMCxvcGFjaXR5OjAsejogMSx9KTtcblxuICB9XG5cbiAgcnVuRmlyc3QoKSB7XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgICAgICAvLyDmloflrZfjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgIHRsLnRvKCQoJy5zZWN0aW9uMDEgLm5leHQgLnRleHQnKSwgMS41LCB7XG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHo6IDEsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKCQoJy5zZWN0aW9uMDEgLm5leHQgc3ZnJyksIDEuMCwge1xuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0sJy09MC44MicpXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge3NlbGYub25FbnRlci5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgICQodGhpcykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7c2VsZi5vbkxlYXZlLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dUb3AuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEhvdmVyRWZmZWN0U1ZHXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3ZlckVmZmVjdFNWRyB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCxob3ZlckNvbG9yLGRlZkNvbG9yKSB7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkdGFyZ2V0XG4gICAgdGhpcy5ob3ZlckNvbG9yID0gaG92ZXJDb2xvciB8fCAnI2ZmZic7XG4gICAgdGhpcy5kZWZDb2xvciA9IGRlZkNvbG9yIHx8ICcjMDAwJztcblxuICAgIC8vIG1vdGlvblxuICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIC8vIOOCueODnuODm+OBruOBqOOBjeOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChnYi5pbi51LmlzUEMpIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIGlmIChnYi5pbi51LmlzUmVzU1ApIHJldHVyblxuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgXG4gICAgdGxcbiAgICAgIC50bygkKHRoYXQpLmZpbmQoJ3BhdGgnKSwgMC40LCB7XG4gICAgICAgIGZpbGw6IHRoaXMuaG92ZXJDb2xvcixcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0pXG4gICAgICAgIFxuICB9XG5cbiAgb25MZWF2ZSAodGhhdCkge1xuXG4gICAgaWYgKGdiLmluLnUuaXNSZXNTUCkgcmV0dXJuXG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICBcbiAgICB0bFxuICAgICAgLnRvKCQodGhhdCkuZmluZCgncGF0aCcpLCAwLjQsIHtcbiAgICAgICAgZmlsbDogdGhpcy5kZWZDb2xvcixcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VJblxuICAgICAgfSlcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGFyZ2V0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKSB7c2VsZi5vbkVudGVyLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgJCh0aGlzKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uTGVhdmUuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICBcbiAgICB9KTtcblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGFyZ2V0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykub2ZmKCdtb3VzZWVudGVyJyk7XG4gICAgICAkKHRoaXMpLm9mZignbW91c2VsZWF2ZScpO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBIb3ZlckVmZmVjdFNWR0xvZ29cbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdmVyRWZmZWN0U1ZHTG9nbyB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCkge1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldFxuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgLy8g44K544Oe44Ob44Gu44Go44GN44Gv5Yem55CG44GX44Gq44GEXG4gICAgaWYgKGdiLmluLnUuaXNQQykgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICB9XG5cbiAgb25FbnRlciAodGhhdCkge1xuXG4gICAgaWYgKGdiLmluLnUuaXNSZXNTUCkgcmV0dXJuXG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgXG4gICAgdGxcbiAgICAgIC50bygkKHRoYXQpLCAwLjUsIHtcbiAgICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSlcbiAgICAgICAgXG4gIH1cblxuICBvbkxlYXZlICh0aGF0KSB7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQKSByZXR1cm5cblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGxcbiAgICAgIC50bygkKHRoYXQpLCAwLjUsIHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXRcbiAgICAgIH0pXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge3NlbGYub25FbnRlci5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgICQodGhpcykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7c2VsZi5vbkxlYXZlLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLm9mZignbW91c2VlbnRlcicpO1xuICAgICAgJCh0aGlzKS5vZmYoJ21vdXNlbGVhdmUnKTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0xvZ28uanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEhvdmVyRWZmZWN0TWVudUJ0blxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RNZW51QnRuIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkdGFyZ2V0XG5cbiAgICAvLyBtb3Rpb25cbiAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgcnVuKCkge1xuXG4gIH1cblxuICBvbkVudGVyICh0aGF0KSB7XG5cbiAgICAvLyDjg6Hjg4vjg6Xjg7zjgYzplovjgYTjgabjgYTjgovjgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4ubWVudS5pc09wZW4pIHJldHVyblxuXG4gICAgdmFyICRiYXIwMSA9ICQodGhhdCkuZmluZCgnLnRvcCcpO1xuICAgIHZhciAkYmFyMDIgPSAkKHRoYXQpLmZpbmQoJy5taWRkbGUnKTtcbiAgICB2YXIgJGJhcjAzID0gJCh0aGF0KS5maW5kKCcuYm90dG9tJyk7XG5cbiAgICAvLyBjb3ZlciDmloflrZdcbiAgICB2YXIgdGwwMSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGwwMVxuICAgICAgLnNldCgkYmFyMDEsIHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICB9KVxuICAgICAgLnRvKCRiYXIwMSwgMC4zLCB7XG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dCxcbiAgICAgICAgZGVsYXk6IDAuMTVcbiAgICAgIH0pXG5cbiAgICB2YXIgdGwwMiA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGwwMlxuICAgICAgLnNldCgkYmFyMDIsIHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICB9KVxuICAgICAgLnRvKCRiYXIwMiwgMC4zLCB7XG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dCxcbiAgICAgICAgZGVsYXk6IDAuMVxuICAgICAgfSlcblxuICAgIHZhciB0bDAzID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0bDAzXG4gICAgICAuc2V0KCRiYXIwMywge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pXG4gICAgICAudG8oJGJhcjAzLCAwLjMsIHtcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0LFxuICAgICAgICBkZWxheTogMC4yXG4gICAgICB9KVxuICAgIFxuICB9XG5cbiAgb25MZWF2ZSAodGhhdCkge1xuXG4gICAgLy8gdmFyICRiYXIwMSA9ICQodGhhdCkuZmluZCgnLnRvcCcpO1xuICAgIC8vIHZhciAkYmFyMDIgPSAkKHRoYXQpLmZpbmQoJy5taWRkbGUnKTtcbiAgICAvLyB2YXIgJGJhcjAzID0gJCh0aGF0KS5maW5kKCcuYm90dG9tJyk7XG5cbiAgICAvLyAvLyBjb3ZlciDmloflrZdcbiAgICAvLyB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIC8vIHRsXG4gICAgLy8gICAudG8oJGJhcjAxLCAwLjUsIHtcbiAgICAvLyAgICAgd2lkdGg6IDMwLFxuICAgIC8vICAgICAnbWFyZ2luLWxlZnQnOiAtMTUsXG4gICAgLy8gICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgIC8vICAgICBkZWxheTogMC4xLFxuICAgIC8vICAgfSlcblxuICAgIC8vIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgLy8gdGxcbiAgICAvLyAgIC50bygkYmFyMDIsIDAuNSwge1xuICAgIC8vICAgICB3aWR0aDogMzAsXG4gICAgLy8gICAgICdtYXJnaW4tbGVmdCc6IC0xNSxcbiAgICAvLyAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgLy8gICB9KVxuXG4gICAgLy8gdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAvLyB0bFxuICAgIC8vICAgLnRvKCRiYXIwMywgMC41LCB7XG4gICAgLy8gICAgIHdpZHRoOiAzMCxcbiAgICAvLyAgICAgJ21hcmdpbi1sZWZ0JzogLTE1LFxuICAgIC8vICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAvLyAgICAgZGVsYXk6IDAuMTUsXG4gICAgLy8gICB9KVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uRW50ZXIuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge3NlbGYub25MZWF2ZS5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdE1lbnVCdG4uanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEhvdmVyRWZmZWN0U1ZHQXJyb3dcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdmVyRWZmZWN0U1ZHQXJyb3cge1xuXG4gIGNvbnN0cnVjdG9yKCR0YXJnZXQpIHtcblxuICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXRcblxuICAgIC8vIG1vdGlvblxuICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICAgIC8vIOOCueODnuODm+OBruOBqOOBjeOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChnYi5pbi51LmlzUEMpIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJHRhcmdldC5maW5kKCdwYXRoJyksIHtkcmF3U1ZHOiAnMCUgMTAwJScsZmlsbDogJ25vbmUnLHN0cm9rZTogJyMwMDAnfSk7ICAgIFxuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHZhciBkaXIgPSAkKHRoYXQpLmRhdGEoJ2RpcicpO1xuXG4gICAgLy8g5LiK5pa55ZCRXG4gICAgaWYgKGRpciA9PSAndG9wJykge1xuXG4gICAgICB0bFxuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCdwYXRoJyksIDAuOSwge1xuICAgICAgICAgIGRyYXdTVkc6ICcwJSAzMCUnLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKHRoYXQpLCAwLjksIHtcbiAgICAgICAgICB5OiAtMjAsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSwnLT0wLjknKVxuXG4gICAgLy8g5Y+z5pa55ZCRXG4gICAgfSBlbHNlIGlmIChkaXIgPT0gJ3JpZ2h0Jykge1xuXG4gICAgICB0bFxuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCdwYXRoJyksIDAuOSwge1xuICAgICAgICAgIGRyYXdTVkc6ICcwJSAzMCUnLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKHRoYXQpLCAwLjksIHtcbiAgICAgICAgICB4OiAyMCxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuOScpXG5cbiAgICAvLyDkuIvmlrnlkJFcbiAgICB9IGVsc2UgaWYgKGRpciA9PSAnYm90dG9tJykge1xuXG4gICAgICB0bFxuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCdwYXRoJyksIDAuOSwge1xuICAgICAgICAgIGRyYXdTVkc6ICcwJSAzMCUnLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKHRoYXQpLCAwLjksIHtcbiAgICAgICAgICB5OiAyMCxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuOScpXG5cbiAgICAvLyDlt6bmlrnlkJFcbiAgICB9IGVsc2UgaWYgKGRpciA9PSAnbGVmdCcpIHtcblxuICAgICAgdGxcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgncGF0aCcpLCAwLjksIHtcbiAgICAgICAgICBkcmF3U1ZHOiAnMCUgMzAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAudG8oJCh0aGF0KSwgMC45LCB7XG4gICAgICAgICAgeDogLTIwLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0sJy09MC45JylcblxuICAgIH0gZWxzZSB7XG5cbiAgICB9XG4gICAgICAgIFxuICB9XG5cbiAgb25MZWF2ZSAodGhhdCkge1xuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgdmFyIGRpciA9ICQodGhhdCkuZGF0YSgnZGlyJyk7XG5cbiAgICAvLyDkuIrmlrnlkJFcbiAgICBpZiAoZGlyID09ICd0b3AnKSB7XG5cbiAgICAgIHRsXG4gICAgICAgIC50bygkKHRoYXQpLmZpbmQoJ3BhdGgnKSwgMC45LCB7XG4gICAgICAgICAgZHJhd1NWRzogJzAlIDEwMCUnLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKHRoYXQpLCAwLjksIHtcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0sJy09MC45JylcblxuICAgIC8vIOWPs+aWueWQkVxuICAgIH0gZWxzZSBpZiAoZGlyID09ICdyaWdodCcpIHtcblxuICAgICAgdGxcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgncGF0aCcpLCAwLjksIHtcbiAgICAgICAgICBkcmF3U1ZHOiAnMCUgMTAwJScsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKCQodGhhdCksIDAuOSwge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSwnLT0wLjknKVxuXG4gICAgLy8g5LiL5pa55ZCRXG4gICAgfSBlbHNlIGlmIChkaXIgPT0gJ2JvdHRvbScpIHtcblxuICAgICAgdGxcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgncGF0aCcpLCAwLjksIHtcbiAgICAgICAgICBkcmF3U1ZHOiAnMCUgMTAwJScsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKCQodGhhdCksIDAuOSwge1xuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSwnLT0wLjknKVxuXG4gICAgLy8g5bem5pa55ZCRXG4gICAgfSBlbHNlIGlmIChkaXIgPT0gJ2xlZnQnKSB7XG5cbiAgICAgIHRsXG4gICAgICAgIC50bygkKHRoYXQpLmZpbmQoJ3BhdGgnKSwgMC45LCB7XG4gICAgICAgICAgZHJhd1NWRzogJzAlIDEwMCUnLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKHRoYXQpLCAwLjksIHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0sJy09MC45JylcblxuICAgIH1cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGFyZ2V0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKSB7c2VsZi5vbkVudGVyLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgJCh0aGlzKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uTGVhdmUuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICBcbiAgICB9KTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdBcnJvdy5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RTTlNQQ0Zvb3RlclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RTTlNQQ0Zvb3RlciB7XG5cbiAgY29uc3RydWN0b3IoJHdyYXAsICR0YXJnZXQpIHtcblxuICAgIHRoaXMuJHdyYXAgPSAkKCcuc25zLnNwJylcbiAgICB0aGlzLiRpbm5lciA9IHRoaXMuJHdyYXAuZmluZCgnLmlubmVyJyk7XG4gICAgdGhpcy4kdGFyZ2V0ID0gdGhpcy4kd3JhcC5maW5kKCcuaWNvblNoYXJlJyk7XG4gICAgdGhpcy4kYmFyID0gdGhpcy4kd3JhcC5maW5kKCcuYmFyJyk7XG4gICAgdGhpcy4kbGlzdCA9IHRoaXMuJHdyYXAuZmluZCgnLmxpc3QnKTtcbiAgICB0aGlzLiRpdGVtID0gdGhpcy4kd3JhcC5maW5kKCcubGlzdCAuaXRlbScpO1xuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIHJlYWR5KCkge1xuXG4gICAgLy8gYmFyXG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJGJhciwge3dpZHRoOiAwfSlcblxuICAgIC8vIHNuc1xuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRpdGVtLCB7eDogLTQwLCBvcGFjaXR5OiAwfSlcblxuICAgIHRoaXMuJGJhci5zaG93KCk7XG4gICAgdGhpcy4kbGlzdC5zaG93KCk7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICB9XG5cbiAgb25FbnRlciAodGhhdCkge1xuXG4gICAgaWYgKCFnYi5pbi51LmlzUmVzUEMpIHJldHVybjtcblxuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRiYXIpO1xuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRpdGVtKTtcblxuICAgIHRoaXMucmVhZHkoKTtcblxuICAgIC8vIGJhcuOBjOS8uOOBs+OCi1xuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0bFxuICAgICAgLnRvKHRoaXMuJGJhciwgMC4zLCB7XG4gICAgICAgIHdpZHRoOiAyNixcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dFxuICAgICAgfSlcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDApLCAwLjMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yJylcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDEpLCAwLjMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgyKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuXG4gICAgLy8g44Ob44OQ44O844Ko44Oq44Ki44KS5ouh5aSnXG4gICAgVHdlZW5NYXgudG8odGhpcy4kaW5uZXIsIDAuMywge3dpZHRoOiAxODB9KTtcbiAgICBcbiAgfVxuXG4gIG9uTGVhdmUgKHRoYXQpIHtcblxuICAgIGlmICghZ2IuaW4udS5pc1Jlc1BDKSByZXR1cm47XG5cbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kYmFyKTtcbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kaXRlbSk7XG5cbiAgICAvLyBiYXJcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRsXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgyKSwgMC4zLCB7XG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VJbk91dCxcbiAgICAgIH0sKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMSksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlSW5PdXRcbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgwKSwgMC4zLCB7XG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTooKT0+e1xuICAgICAgICAgIHRoaXMuJGxpc3QuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGJhciwgMC4yLCB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgdGhpcy4kYmFyLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwnLT0wLjInKVxuXG4gICAgLy8g44Ob44OQ44O844Ko44Oq44Ki44KS5ouh5aSnXG4gICAgVHdlZW5NYXgudG8odGhpcy4kaW5uZXIsIDAuMywge3dpZHRoOiAxNH0pO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiRpbm5lci5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uRW50ZXIuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgdGhpcy4kaW5uZXIub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7c2VsZi5vbkxlYXZlLmNhbGwoc2VsZix0aGlzKX0pO1xuIFxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNQQ0Zvb3Rlci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RTVkdBcnJvd1NpZGVSXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3ZlckVmZmVjdFNWR0Fycm93U2lkZVIge1xuXG4gIGNvbnN0cnVjdG9yKCR0YXJnZXQpIHtcblxuICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXRcblxuICAgIC8vIG1vdGlvblxuICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICAvLyB0aGlzLmF1dG9BcnJvdygpO1xuXG4gICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG5cbiAgICAvLyDjgrnjg57jg5vjga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIHRoaXMuaXNIb3ZlciA9IHRydWU7XG5cbiAgICBpZiAodGhpcy50bDAyKSB0aGlzLnRsMDIua2lsbCgpO1xuICAgIHRoaXMudGwwMSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy50bDAxXG4gICAgICAgIC8vIOefouWNsOOCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCcuYXJyb3cucGMnKSwgMC40LCB7XG4gICAgICAgICAgc2NhbGVZOiAwLjY1LFxuICAgICAgICAgIHk6IDgsXG4gICAgICAgICAgejogMSxcbiAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgMTAwJScsXG4gICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgICAgfSlcbiAgICAgICAgLy8g5paH5a2X44KS5LiL44Gr5LiL44GS44KLXG4gICAgICAgIC50bygkKHRoYXQpLmZpbmQoJy50ZXh0JyksIDAuNCwge1xuICAgICAgICAgIHk6IDMwLFxuICAgICAgICAgIHo6IDEsXG4gICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgICAgfSwnLT0wLjM3JylcbiAgICAgICAgXG4gIH1cblxuICBvbkxlYXZlICh0aGF0KSB7XG5cbiAgICB0aGlzLmlzSG92ZXIgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnRsMDEpIHRoaXMudGwwMS5raWxsKCk7XG4gICAgdGhpcy50bDAyID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnRsMDJcbiAgICAgIC8vIOaWh+Wtl+OCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgLnRvKCQodGhhdCkuZmluZCgnLnRleHQnKSwgMC41LCB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlSW5PdXRcbiAgICAgIH0pXG4gICAgICAvLyDnn6LljbDjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgIC50bygkKHRoYXQpLmZpbmQoJy5hcnJvdy5wYycpLCAwLjUsIHtcbiAgICAgICAgc2NhbGVZOiAxLFxuICAgICAgICB5OiAwLFxuICAgICAgICB6OiAxLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgMTAwJScsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlSW5PdXRcbiAgICAgIH0sJy09MC40NScpXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge3NlbGYub25FbnRlci5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgICQodGhpcykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7c2VsZi5vbkxlYXZlLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dTaWRlUi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IE1haW5cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IERpc3BsYXlUb3AgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VG9wLmpzJztcbi8vIGltcG9ydCBEaXNwbGF5TW92aWUgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5TW92aWUuanMnO1xuLy8gaW1wb3J0IERpc3BsYXlJbnRlcnZpZXcgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5SW50ZXJ2aWV3LmpzJztcbi8vIGltcG9ydCBEaXNwbGF5SW50ZXJ2aWV3RGV0YWlsIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheUludGVydmlld0RldGFpbC5qcyc7XG4vLyBpbXBvcnQgRGlzcGxheUhpc3RvcnkgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5SGlzdG9yeS5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLm9uSW1tZWRpYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgb25JbW1lZGlhdGUoKSB7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIHZhciBwYWdlID0gJCgnYm9keScpLmRhdGEoJ2lkJyk7XG5cblx0XHQvL3BhZ2Xjga5JROOBlOOBqOOBq+eZuueBq+OBmeOCi+OCr+ODqeOCueOBruaMr+OCiuWIhuOBkVxuICAgIHN3aXRjaCAocGFnZSkge1xuXG4gICAgICBjYXNlICd0b3AnOlxuXG4gICAgICAgIG5ldyBEaXNwbGF5VG9wKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIGNhc2UgJ21vdmllJzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5TW92aWUoKTtcblx0XHRcdC8vXG4gICAgICAvLyAgIGJyZWFrO1xuXHRcdFx0Ly9cbiAgICAgIC8vIGNhc2UgJ2ludGVydmlldyc6XG4gICAgICAvL1xuICAgICAgLy8gICBuZXcgRGlzcGxheUludGVydmlldygpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cdFx0XHQvL1xuICAgICAgLy8gY2FzZSAnaW50ZXJ2aWV3X2RldGFpbCc6XG4gICAgICAvL1xuICAgICAgLy8gICBuZXcgRGlzcGxheUludGVydmlld0RldGFpbCgpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cdFx0XHQvL1xuICAgICAgLy8gY2FzZSAnaGlzdG9yeSc6XG4gICAgICAvL1xuICAgICAgLy8gICBuZXcgRGlzcGxheUhpc3RvcnkoKTtcblx0XHRcdC8vXG4gICAgICAvLyAgIGJyZWFrO1xuXG4gICAgfVxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBcbiAgfVxuXG4gIG9uUmVuZGVyKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9QYWdlL01haW4uanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIERpc3BsYXlcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgRWZmZWN0cyBmcm9tICcuL0VmZmVjdHMvRWZmZWN0cy5qcyc7XG5pbXBvcnQgU2NhbGVUb3AgZnJvbSAnLi4vRGlzcGxheS9MYXlvdXQvU2l6ZS9TY2FsZVRvcC5qcyc7XG5pbXBvcnQgSG92ZXJFZmZlY3RTTlNTUEZvb3RlciBmcm9tICcuLi9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNOU1NQRm9vdGVyLmpzJztcbmltcG9ydCBIb3ZlckVmZmVjdFNWR0Fycm93VG9wIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dUb3AuanMnO1xuaW1wb3J0IFRvcFRpbWUgZnJvbSAnLi4vRGlzcGxheS9VSS9Ub3BUaW1lLmpzJztcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL0xheW91dC9Qb3N0aW9uL1Bvc2l0aW9uLmpzJztcbmltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLm9uSW1tZWRpYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgb25JbW1lZGlhdGUoKSB7XG5cblxuICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+OCueOCv+ODvOODiFxuICAgIGdiLmluLnVwLmxvb3AoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIC8vIGdiLmluLndlYkdMaW5pdCA9IG5ldyBXZWJHTGluaXQoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBVSSAvIExheW91dFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHNwXG4gICAgLy8gZ2IuaW4uc2NhbGVUb3AgPSBuZXcgU2NhbGVUb3AoKTtcbiAgICAvLyBnYi5pbi5wb3MgPSBuZXcgUG9zaXRpb24oKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBFZmZlY3RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBzcFxuICAgIC8vIGdiLmluLnNsaWRlclRvcC5zZXRFdmVudHMoKTtcbiAgICAvLyBnYi5pbi5zbnNTUEhvdmVyRWYgPSBuZXcgSG92ZXJFZmZlY3RTTlNTUEZvb3RlcigkKCcjc2lkZUwnKSk7XG5cbiAgICAvLyBwY1xuICAgIC8vIG5ldyBIb3ZlckVmZmVjdFNWR0Fycm93VG9wKCQoJy5zZWN0aW9uMDEgLm5leHQnKSk7IC8vIOKGkiBUb3BPcGVuaW5n44G4XG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHR3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBVSSAvIExheW91dFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHNwXG4gICAgZ2IuaW4uc2NhbGVUb3AgPSBuZXcgU2NhbGVUb3AoKTtcbiAgICBnYi5pbi5wb3MgPSBuZXcgUG9zaXRpb24oKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBFZmZlY3RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBzcFxuICAgIGdiLmluLnNsaWRlclRvcC5zZXRFdmVudHMoKTtcbiAgICBnYi5pbi5zbnNTUEhvdmVyRWYgPSBuZXcgSG92ZXJFZmZlY3RTTlNTUEZvb3RlcigkKCcjc2lkZUwnKSk7XG5cbiAgICAvLyBwY1xuICAgIHRoaXMuaHQgPSBuZXcgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCgkKCcuc2VjdGlvbjAxIC5uZXh0JykpO1xuICAgIHRoaXMuaHQuYXV0b0Fycm93KCk7XG4gICAgZ2IuaW4udGltZSA9IG5ldyBUb3BUaW1lKCk7XG4gICAgaWYgKGdiLmluLnNlYzAxVmlkZW8udmlkZW8pIGdiLmluLnNlYzAxVmlkZW8udmlkZW8ucGxheUJ5TllUaW1lKCk7IC8vIHNw55So44Gr44KCIGdiLmluLnNlYzAxVmlkZW/jgYzlrZjlnKjjgZnjgovjgYvjganjgYbjgYvliKTlrppcbiAgICBpZiAoZ2IuaW4uc2VjMDFWaWRlby52aWRlbykgZ2IuaW4uc2VjMDFWaWRlby52aWRlby5zZXRFdmVudHMoKTsgLy8gc3DnlKjjgavjgoIgZ2IuaW4uc2VjMDFWaWRlb+OBjOWtmOWcqOOBmeOCi+OBi+OBqeOBhuOBi+WIpOWumlxuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRWZmZWN0c1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBTZWN0aW9uMDJCZyBmcm9tICcuLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50cy5qcyc7XG5pbXBvcnQgU2VjdGlvbjA0UHJvZHVjdCBmcm9tICcuLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9HbENvbnRlbnRzLmpzJztcbmltcG9ydCBQcm9maWxlciBmcm9tICcuL1Byb2ZpbGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0cyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmdsID0gbnVsbDtcbiAgICB0aGlzLmRvbSA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9ICcnO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuZGVidWcoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIGJnXG4gICAgLy8gZ2IuaW4uU2VjdGlvbjAyQmcgPSBuZXcgU2VjdGlvbjAyQmcoKTtcblxuICAgIC8vIHByb2R1Y3RcbiAgICAvLyBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0ID0gbmV3IFNlY3Rpb24wNFByb2R1Y3QoJCgnLnNlY3Rpb24wMycpKTtcblxuICB9XG5cbiAgZGVidWcoKSB7XG5cbiAgICAvLyBwcm9maWxlcuioreWumlxuICAgIC8vIG5ldyBQcm9maWxlcigpO1xuXG4gIH1cblxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvRWZmZWN0cy5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgR2xDb250ZW50c1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBMb29wIGZyb20gJy4vR2xDb250ZW50c0xvb3AuanMnO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vR2xDb250ZW50c1RpbWVsaW5lLmpzJztcbmltcG9ydCBQbGFuZSBmcm9tICcuL19kZXRhaWxzL1BsYW5lLmpzJztcbmltcG9ydCBQYXJhbSBmcm9tICcuLi8uLi9QYXJhbS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsQ29udGVudHMge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwID0gJCgnYm9keScpKSB7XG5cbiAgICB0aGlzLnJlbmRlcmVyO1xuICAgIHRoaXMuY2FtZXJhO1xuICAgIHRoaXMuc2NlbmU7XG4gICAgdGhpcy5saWdodDtcblxuICAgIHRoaXMuc3RhdGUgPSAnaW5pdGlhbCc7XG4gICAgdGhpcy5hZGp1c3RQYXJhbSA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZUxpbmVSb3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnNvbWV0aW1lc1N0YXRlID0gJ2luaXRpYWwnO1xuXG4gICAgdGhpcy5pc0NvbnRyb2wgPSBmYWxzZTtcbiAgICB0aGlzLmNvbnRyb2xzO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuY3JlYXRlKCR3cmFwKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuICAgIC8vIGxvb3BcbiAgICB0aGlzLmxvb3AgPSBuZXcgTG9vcCgpO1xuICAgIC8vIHRpbWVsaW5lXG4gICAgdGhpcy50aW1lbGluZSA9IG5ldyBUaW1lbGluZSgpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBjcmVhdGUoJHdyYXApIHtcblxuICAgIC8vIHJlbmRlclxuICAgIGdiLmluLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbnRpYWxpYXM6IHRydWV9KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIGdiLmluLnIuVygpLCBnYi5pbi5yLkgoKSApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweGZmZmZmZiwgMC4wKTtcbiAgICAkd3JhcC5hcHBlbmQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KVxuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoICApO1xuICAgICQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KS5jc3Moe1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsbGVmdDogMCxcbiAgICAgICd6LWluZGV4JzogMSxcbiAgICB9KTtcblxuICAgIC8vIHNjZW5lXG4gICAgZ2IuaW4uc2NlbmUgPSBuZXcgZ2IuU2NlbmUoKTtcbiAgICB0aGlzLnNjZW5lID0gZ2IuaW4uc2NlbmUuc2NlbmU7XG5cbiAgICAvLyBjYW1lcmFcbiAgICBnYi5pbi5jYW1lcmEgPSBuZXcgZ2IuQ2FtZXJhKCk7XG4gICAgdGhpcy5jYW1lcmEgPSBnYi5pbi5jYW1lcmEuY2FtZXJhO1xuXG4gICAgLy8gbGlnaHRcbiAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4ZmZmZmZmLCAzICk7XG4gICAgdGhpcy5saWdodC5wb3NpdGlvbi56ID0gMztcbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcblxuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOi/veWKoFxuICAgIHRoaXMuYWRkT2JqZWN0cygpO1xuXG4gICAgLy8gdWnov73liqAo44Kz44Oz44OI44Ot44O844Op44O844CBcHJvZmlsZXLjgarjgakpXG4gICAgLy8gdGhpcy5hZGRVSSgpO1xuXG4gICAgLy8g44Oq44K944O844K544Gu44Ot44O844OJXG4gICAgZ2IuaW4ubG9hZE1nci5zZWN0aW9uMDRQcm9kdWN0U2hhZGVyKCk7XG5cbiAgfVxuXG4gIGFkZE9iamVjdHMoKSB7XG5cbiAgICB0aGlzLnBsYW5lID0gbmV3IFBsYW5lKCk7XG5cbiAgfVxuXG4gIGFkZFVJKCkge1xuXG4gICAgLy8gY29udHJvbHNcblxuICAgIGlmICh0aGlzLmlzQ29udHJvbCkge1xuXG4gICAgICBnYi5pbi5jb250cm9scyA9IHRoaXMuY29udHJvbHMgPSBuZXcgVEhSRUUuVHJhY2tiYWxsQ29udHJvbHModGhpcy5jYW1lcmEpO1xuICAgICAgdGhpcy5jb250cm9scy56b29tU3BlZWQgPSAwLjg7XG4gICAgICB0aGlzLmNvbnRyb2xzLnJvdGF0ZVNwZWVkID0gMztcblxuICAgIH07XG5cbiAgICAvLyBwcm9maWxlcuioreWumlxuICAgIG5ldyBnYi5Qcm9maWxlcigpO1xuICAgIC8vIHBhcmFtcnRlcuiqv+aVtFxuICAgIGdiLmluLnBhcmFtID0gbmV3IFBhcmFtKCk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgdmFyIHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3LCBoKTtcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3IC8gaDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgfVxuXG4gIG9uU2VjdGlvbjA0KGN1cixwcmV2KSB7XG5cbiAgICBpZiAoY3VyID09ICdwcm9kdWN0Jykge1xuXG4gICAgICB0aGlzLmxvb3Auc3RhcnQoKTtcbiAgICAgIHRoaXMudGltZWxpbmUudGxNYWluLnBsYXkoKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMubG9vcC5wYXVzZSgpO1xuICAgICAgdGhpcy50aW1lbGluZS50bE1haW4ucGF1c2UoKTtcblxuICAgIH1cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICBnYi5pbi5oYXNoLm9uQ2hhbmdlRnVuY0xpc3QucHVzaCh0aGlzLm9uU2VjdGlvbjA0LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignb25TZWN0aW9uMDRQcm9kdWN0SW1nJywgKCk9Pnt0aGlzLnRpbWVsaW5lLnNldHVwKCk7fSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50cy5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgR2xDb250ZW50c0xvb3Bcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsQ29udGVudHNMb29wIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuaXNBbHdheXMgPSB0cnVlO1xuICAgIHRoaXMuaXNSdW5TdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMuaXNBZGp1c3RQYXJhbSA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZSA9ICdpbml0aWFsJztcbiAgICB0aGlzLnNvbWV0aW1lc1N0YXRlID0gJ2luaXRpYWwnO1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSBmYWxzZTtcblxuICAgIHRoaXMubG9vcExpc3QgPSBbXTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIGlmICh0aGlzLmlzQWx3YXlzKSB0aGlzLnJ1bkFsd2F5cygpO1xuICAgIGlmICh0aGlzLmlzUnVuU3RhdHVzKSB0aGlzLnJ1blN0YXR1cygpO1xuICAgIGlmICh0aGlzLmlzQWRqdXN0UGFyYW0pIHRoaXMucnVuQWRqdXN0UGFyYW0oKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOW4uOOBq+ihjOOBhuWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gIHJ1bkFsd2F5cygpIHtcblxuICAgIGlmIChnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LmlzQ29udHJvbCkgZ2IuaW4uY29udHJvbHMudXBkYXRlKCk7XG5cbiAgICAvLyBjYW1lcmFcbiAgICBnYi5pbi5jYW1lcmEudXBkYXRlQ29udHJvbGwoKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOWQhOeKtuaFi+OBruWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnVuU3RhdHVzKCkge1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgPT0gJ2luaXRpYWwnKSB7XG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RhcnQnKSB7XG5cblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzdGVwMDEnKSB7XG5cblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzdGVwMDInKSB7XG5cblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzdGVwMDMnKSB7XG5cblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzdGFuZGJ5Jykge1xuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3NvbWV0aW1lcycpIHtcblxuICAgICAgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ2xpbmVTaGFkb3cnKSB7XG5cblxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNvbWV0aW1lc1N0YXRlID09ICdzcGhlcmUnKSB7XG5cblxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNvbWV0aW1lc1N0YXRlID09ICdzYXRlbGxpdGUnKSB7XG5cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g44OR44Op44Oh44O844K/6Kq/5pW055So5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBydW5BZGp1c3RQYXJhbSgpIHtcblxuXG5cbiAgfVxuXG4gIGRyYXcoKSB7XG5cbiAgICBnYi5pbi5yZW5kZXJlci5yZW5kZXIoIGdiLmluLnNjZW5lLnNjZW5lLCBnYi5pbi5jYW1lcmEuY2FtZXJhICk7XG4gICAgLy8gZ2IuaW4ucG9zdHByb2Nlc3MuY29tcG9zZXIucmVuZGVyKDAuMSk7XG5cbiAgfVxuXG4gIGxvb3AoKSB7XG5cbiAgICBpZiAodGhpcy5sb29wU3RhcnQpIHtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5kcmF3KCk7XG5cbiAgICBsb2coJ3NlY3Rpb24wNCcpXG5cbiAgICB9XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSB0cnVlO1xuXG4gIH1cblxuICBwYXVzZSgpIHtcblxuICAgIHRoaXMubG9vcFN0YXJ0ID0gZmFsc2U7XG5cbiAgfVxuXG4gIGFkZChmdW5jKSB7XG5cbiAgICB0aGlzLmxvb3BMaXN0LnB1c2goZnVuYyk7XG4gICAgXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBnYi5pbi51cC5hZGQoJ3NlY3Rpb24wNFByb2R1Y3QnLHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9HbENvbnRlbnRzTG9vcC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgR2xDb250ZW50c1RpbWVsaW5lXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgU29tZVRpbWVzIGZyb20gJy4uLy4uLy4uLy4uL015TGlicy9FdmVudE1nci9Tb21ldGltZXNNZ3IuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbENvbnRlbnRzVGltZWxpbmUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy50bE1haW4gPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAvLyB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgr/jgqTjg6Djg6njgqTjg7PjgpLmraLjgoHjgabjgYrjgY9cbiAgICB0aGlzLnRsTWFpbi5wYXVzZSgpO1xuICAgIFxuICAgIHRoaXMuYmVnaW5uaW5nKCk7XG4gICAgLy8gdGhpcy5zdGVwMDEoKTtcbiAgICAvLyB0aGlzLnN0ZXAwMigpO1xuICAgIC8vIHRoaXMuc3RlcDAzKCk7XG4gICAgLy8gdGhpcy5zdGFuZEJ5KCk7XG4gICAgdGhpcy5zb21ldGltZXMoKTsgICAgXG5cbiAgfVxuXG4gIGJlZ2lubmluZygpIHtcblxuICAgIHRoaXMudGxNYWluXG4gICAgICAvLyB6b29tIGluXG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnN0cmVuZ3RoLCAxLjMsIHtcbiAgICAgICAgdmFsdWU6IDUwMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgIG9uU3RhcnQ6ICgpPT4ge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5zdHJlbmd0aCwge3ZhbHVlOiA1MDB9KTtcblxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBjYW1lcmHnp7vli5VcbiAgICAgIC50byhnYi5pbi5jYW1lcmEuY2FtZXJhLnBvc2l0aW9uLCAxLjUsIHtcbiAgICAgICAgejogMjAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgfSwnLT0xLjMnKVxuXG4gICAgICAvLyBwbGFuZeenu+WLlVxuICAgICAgLnRvKGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUucG9zaXRpb24sIDEuNSwge1xuICAgICAgICB4OiAtMTAwLFxuICAgICAgICB5OiAyMDAsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0XG4gICAgICB9LCctPTEuNScpXG5cbiAgICAgIC8vIHpvb20gb3V0XG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnN0cmVuZ3RoLCAxLCB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJblxuICAgICAgfSwnLT0wLjQnKVxuXG4gICAgICAvLyBwbGFuZTAx44GMb3BhY2l0eeOBp+a2iOOBiOOCi1xuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy5vcGFjaXR5LCAxLCB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZUluT3V0XG4gICAgICB9LCctPTAuNycpXG5cbiAgICAgIC8vIHBsYW5lMDLjga5ibHVyIG91dFxuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5zdHJlbmd0aCwgMSwge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXRcbiAgICAgIH0sJy09MS4wJylcblxuICAgICAgLy8gcGxhbmUwMuOBjOWHuuOBpuadpeOCi1xuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5vcGFjaXR5LCAxLCB7XG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgfSwnLT0xLjAnKVxuXG4gICAgICAudG8oZ2IuaW4uY2FtZXJhLmNhbWVyYS5wb3NpdGlvbiwgMS41LCB7XG4gICAgICAgIHo6IDQwMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKT0+IHtcblxuICAgICAgICAgIC8vIG1hdGVyaWFs44Gu5aSJ5pu0XG5cbiAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMuZnJvbS52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbMV07XG4gICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1syXTtcblxuICAgICAgICAgIGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUwMi5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS5mcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnBsYW5lMDIuc2NhbGUueCA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUwMi5zY2FsZS55ID0gMTIwMC4wO1xuXG5cbiAgICAgICAgfVxuICAgICAgfSwnLT0xLjAnKVxuXG5cblxuICB9XG5cbiAgc3RlcDAxKCkge1xuXG5cbiAgfVxuXG4gIHN0ZXAwMigpIHtcblxuXG5cbiAgfVxuXG4gIHN0ZXAwMygpIHtcblxuXG5cbiAgfVxuXG4gIHN0YW5kQnkoKSB7XG5cblxuICB9XG5cbiAgLy8g5pmC44CFXG4gIHNvbWV0aW1lcygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMudGxNYWluXG4gICAgICAuYWRkKGZ1bmN0aW9uKCl7XG5cblxuICAgICAgICB2YXIgcyA9IG5ldyBTb21lVGltZXMoKTtcblxuICAgICAgICBzLmFkZChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgVHdlZW5NYXgudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnByb2dyZXNzLCAxLjMsIHtcbiAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAgICAgICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5mcm9tLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1szXTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIFxuICAgICAgICAgIFxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1s0XTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLmZyb20udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzVdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1sxXTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLmZyb20udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzJdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSwgMi4wLCAyLjApO1xuXG4gICAgICAgIHMuc3RhcnQoKTtcblxuICAgICAgfSwnKz0wLjAnKVxuICAgIFxuXG4gIH1cblxuICBvblJlc2l6c2UoKSB7XG5cbiAgfVxuXG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQodGhpcy5vblJlc2l6c2UuYmluZCh0aGlzKSk7XG5cbiAgICAkKHdpbmRvdykub24oJ2NsaWNrJywoKT0+e1xuXG4gICAgICAvLyB0aGlzLnN0YXJ0KCk7XG5cbiAgICB9KTtcblxuICB9XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHNUaW1lbGluZS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU29tZVRpbWVzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb21lVGltZXMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5Tb21lVGltZXM7XG4gICAgdGhpcy5UaW1lciA9IG51bGw7XG4gICAgdGhpcy5jYkxpc3QgPSBbXTtcbiAgICB0aGlzLmxlbiA9IDA7XG4gICAgdGhpcy5vcmRlciA9IDA7XG5cbiAgICB0aGlzLm1pbiA9IFtdO1xuICAgIHRoaXMubWF4ID0gW107XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIHN0YXJ0KG1pbj0wLCBtYXg9MCkge1xuXG4gICAgdGhpcy5sYXRlciA9IGdiLmluLnUucmFuZG9tKG1pbixtYXgpICogMTAwMDtcbiAgICB0aGlzLlRpbWVyID0gc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKHRoaXMpLHRoaXMubGF0ZXIpO1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgICB0aGlzLm9yZGVyID0gdGhpcy5vcmRlciAlIHRoaXMubGVuO1xuXG4gICAgdGhpcy5sYXRlciA9IGdiLmluLnUucmFuZG9tKHRoaXMubWluW3RoaXMub3JkZXJdLHRoaXMubWF4W3RoaXMub3JkZXJdKSAqIDEwMDA7XG5cbiAgICB0aGlzLmNiTGlzdFt0aGlzLm9yZGVyXSgpO1xuXG4gICAgdGhpcy5vcmRlcisrO1xuICAgIHRoaXMuVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMucnVuLmJpbmQodGhpcyksdGhpcy5sYXRlcik7XG5cbiAgfVxuXG4gIHN0b3AoKSB7XG5cbiAgICBsb2codGhpcy5UaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuVGltZXIpO1xuXG4gIH1cblxuICBhZGQoZnVuYyxtaW49OCxtYXg9MTIpIHtcblxuICAgIHRoaXMubWluLnB1c2gobWluKTtcbiAgICB0aGlzLm1heC5wdXNoKG1heCk7XG5cbiAgICB0aGlzLmNiTGlzdC5wdXNoKGZ1bmMpO1xuICAgIHRoaXMubGVuID0gdGhpcy5jYkxpc3QubGVuZ3RoO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1NvbWV0aW1lc01nci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGxhbmVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBudWxsO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBudWxsO1xuXG4gICAgdGhpcy52aWRlbyA9IG51bGw7XG4gICAgdGhpcy5wbGFuZSA9IG51bGw7XG5cbiAgICB0aGlzLmRlZldXID0gMTkyMDtcbiAgICB0aGlzLmRlZkhIID0gMTA4MDtcbiAgICB0aGlzLmRlZlcgPSAzMDU7XG4gICAgdGhpcy5yYXRlID0gMDtcbiAgICB0aGlzLnJhdGVXID0gMDtcblxuICAgIHRoaXMubGIgPSBudWxsOyAvL2xheW91dCBiYWNrZ3JvdW5kXG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgY3JlYXRlKGNiKSB7XG5cbiAgICB2YXIgdGV4dHVyZXMgPSB0aGlzLnRleHR1cmVzICA9IGdiLmluLmxvYWRNZ3IudGV4dHVyZXM7XG5cbiAgICB2YXIgdyA9IHRleHR1cmVzWzBdLmltYWdlLndpZHRoIC8gdGV4dHVyZXNbMF0uaW1hZ2Uud2lkdGg7XG4gICAgdmFyIGggPSB0ZXh0dXJlc1swXS5pbWFnZS5oZWlnaHQgLyB0ZXh0dXJlc1swXS5pbWFnZS53aWR0aDtcblxuICAgIC8vIHBsYW5lMDFcblxuICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHcsIGgsIDEsIDEpO1xuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3JtczogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS52cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS5mcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHRoaXMucGxhbmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIHRoaXMucGxhbmUuc2NhbGUueCA9IHRoaXMucGxhbmUuc2NhbGUueSA9IDIwMDAuMDtcblxuICAgIC8vIHBsYW5lMDJcblxuICAgIHZhciB3ID0gdGV4dHVyZXNbMV0uaW1hZ2Uud2lkdGggLyB0ZXh0dXJlc1sxXS5pbWFnZS53aWR0aDtcbiAgICB2YXIgaCA9IHRleHR1cmVzWzFdLmltYWdlLmhlaWdodCAvIHRleHR1cmVzWzFdLmltYWdlLndpZHRoO1xuXG4gICAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodywgaCwgMSwgMSk7XG4gICAgdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnZzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLmZzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgdGhpcy5wbGFuZTAyID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICB0aGlzLnBsYW5lMDIuc2NhbGUueCA9IHRoaXMucGxhbmUwMi5zY2FsZS55ID0gNjAwLjA7XG5cbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMub3BhY2l0eS52YWx1ZSA9IDE7XG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSAwO1xuXG4gICAgdGhpcy5wbGFuZTAyLnBvc2l0aW9uLnogPSAtMTtcblxuICAgIGdiLmluLnNjZW5lLnNjZW5lLmFkZCggdGhpcy5wbGFuZSApO1xuICAgIGdiLmluLnNjZW5lLnNjZW5lLmFkZCggdGhpcy5wbGFuZTAyICk7XG5cbiAgICAvLyB0aGlzLm9uUmVzaXplKCk7XG4gICAgLy8gdGhpcy5zZXRFdmVudHMoKTtcblxuICAgIC8vIOODhuOCr+OCueODgeODo+OCknVuaWZvcm3lpInmlbDjgavov73liqBcbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMudGV4dHVyZS52YWx1ZSA9IHRleHR1cmVzWzBdO1xuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy50ZXh0dXJlMDEudmFsdWUgPSB0ZXh0dXJlc1sxXTtcblxuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy50ZXh0dXJlLnZhbHVlID0gdGV4dHVyZXNbMV07XG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLnRleHR1cmUwMS52YWx1ZSA9IHRleHR1cmVzWzFdO1xuXG4gICAgY2IoKTtcblxuICB9XG5cbiAgc2V0VmlkZW9TaXplKCkge1xuXG4gICAgLy8gdmlkZW/jga7jgrvjg4Pjg4jjgrXjgqTjgrogICAgICAgICAgXG4gICAgLy8gdGhpcy5sYiA9IG5ldyBnYi5MYXlvdXRCYWNrZ3JvdW5kKCQoJ2JvZHknKSwkKHRoaXMudmlkZW8udmlkZW8pKTtcbiAgICAvLyB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXRUcmFuc3BhcmVudCh2YWwpIHtcblxuICAgIC8vIHRoaXMucGxhbmUubWF0ZXJpYWwub3BhY2l0eSA9IHZhbDtcblxuICB9XG5cbiAgdHdlZW5UcmFuc3BhcmVudCh0aW1lLHZhbCkge1xuXG4gICAgLy8gdmFyIHQgPSB0aW1lIHx8IDEuMDtcbiAgICAvLyB2YXIgdiA9IHZhbC50YXJnZXQgfHwgMS4wO1xuICAgIC8vIHZhciBlID0gdmFsLmVhc2UgfHwgUG93ZXIyLmVhc2VPdXQ7XG5cbiAgICAvLyBUd2Vlbk1heC50byh0aGlzLnBsYW5lLm1hdGVyaWFsLCB0LCB7XG4gICAgLy8gICBvcGFjaXR5OiB2LFxuICAgIC8vICAgZWFzZSA6IGUsXG4gICAgLy8gfSk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuXG5cblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICAvLyB2YXIgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIC8vIHZhciBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgLy8gdmFyIHJhdGVXID0gd2luZG93LmlubmVySGVpZ2h0IC8gd2luZG93LmlubmVyV2lkdGg7XG4gICAgLy8gdmFyIHIgPSB3L2g7XG5cbiAgICAvLyBpZiAocmF0ZVcgPCB0aGlzLnJhdGUpIHtcblxuICAgIC8vICAgdGhpcy5wbGFuZS5zY2FsZS5zZXQociowLjU4LHIqMC41OCxyKjAuNTgpXG5cbiAgICAvLyB9IGVsc2Uge1xuXG4gICAgLy8gICAvLyBsb2coMixzY2FsZVkpO1xuXG4gICAgLy8gICB0aGlzLnBsYW5lLnNjYWxlLnNldCgxLDEsMSk7XG5cbiAgICAvLyB9XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIC8vIGdiLmluLnJtLnRvdGFsICs9IDE7IC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuICAgICQod2luZG93KS5vbignb25TZWN0aW9uMDRQcm9kdWN0SW1nJywgdGhpcy5jcmVhdGUuYmluZCh0aGlzLCgpPT57XG4gICAgICAvL2diLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgIH0pKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9fZGV0YWlscy9QbGFuZS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGFyYW1cbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFtIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuZ3VpO1xuICAgIHRoaXMuanNvbiA9IHt9O1xuICAgIC8vIHRoaXMuYXBwTmFtZSA9IFwicGx1c01WXCI7XG5cbiAgICB2YXIgaXNGbGFnID0gdHJ1ZTtcblxuICAgIHRoaXMuY2xvY2sgPSB7XG4gICAgICBwcm9ncmVzczogMC41LFxuICAgIH1cblxuICAgIHRoaXMuem9vbWJsdXIgPSB7XG4gICAgICBzdHJlbmd0aDogNDYuMCxcbiAgICAgIHNpemU6IDg5LjAsXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2l0aW9uID0ge1xuICAgICAgcHJvZ3Jlc3M6IDAuMCxcbiAgICAgIHNpemU6IDAuMDQsXG4gICAgICB6b29tOiAzMCxcbiAgICAgIGNvbG9yU2VwYXJhdGlvbjogMC4zLFxuICAgICAgc3RyZW5ndGg6IDAuNixcbiAgICAgIHR3ZWVuOiAoKT0+e1xuXG4gICAgICAgIHZhciB2YWw7XG4gICAgICAgIGlmIChpc0ZsYWcpIHZhbCA9IDEuMDtcbiAgICAgICAgZWxzZSB2YWwgPSAwLjBcblxuICAgICAgICBpc0ZsYWcgPSAhaXNGbGFnO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLnBsYW5lMDIuc2hhZGVyLnVuaWZvcm1zLnByb2dyZXNzLCAyLjUsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5zZXR1cERhdGEoKTtcbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuXG4gIHNldHVwRGF0YSgpIHtcblxuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIGlmIChnYi5pbi5jb25mLlBBUkFNKSB7XG5cbiAgICB0aGlzLmd1aSA9IG5ldyBkYXQuR1VJKCk7XG4gICAgLy8gdGhpcy5ndWkgPSBuZXcgZGF0LkdVSSh7bG9hZDogdGhpcy5qc29ufSk7XG4gICAgdGhpcy5ndWkucmVtZW1iZXIodGhpcyk7XG4gICAgJChcIi5kZ1wiKS5jc3Moe3pJbmRleDo5OTk5OX0pO1xuXG4gICAgdmFyIGYxID0gdGhpcy5ndWkuYWRkRm9sZGVyKCd6b29tYmx1cicpO1xuICAgIGYxLmFkZCh0aGlzLnpvb21ibHVyLCAnc3RyZW5ndGgnLCAwLjAsIDIuMCkuc3RlcCgwLjAxKS5saXN0ZW4oKS5vbkNoYW5nZShmdW5jdGlvbih2YWwpe1xuXG4gICAgICBnYi5pbi5wbGFuZS5zaGFkZXJzWzJdLnVuaWZvcm1zLnN0cmVuZ3RoLnZhbHVlID0gdmFsO1xuICAgICAgbG9nKHZhbCk7XG5cbiAgICB9KTtcbiAgICBmMS5hZGQodGhpcy56b29tYmx1ciwgJ3NpemUnLCAwLjAsIDEwMC4wKS5zdGVwKDAuMSkubGlzdGVuKCkub25DaGFuZ2UoZnVuY3Rpb24odmFsKXtcblxuICAgICAgZ2IuaW4ucGxhbmUuc2hhZGVyLnVuaWZvcm1zLm5GcmFnLnZhbHVlID0gMSAvIHZhbDtcblxuICAgIH0pO1xuICAgIGYxLm9wZW4oKTtcblxuICAgIC8vIHRoaXMuZ3VpLmNsb3NlKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvUGFyYW0uanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFByb2ZpbGVyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLlN0YXRzO1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIGlmIChnYi5pbi5jb25mLlNUQVRTKSB7XG5cbiAgICAgIHRoaXMuU3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICAgIHRoaXMuU3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIHRoaXMuU3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ICAgICA9IFwiMHB4XCI7XG4gICAgICB0aGlzLlN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wICAgPSBcIjBweFwiO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLlN0YXRzLmRvbUVsZW1lbnQpO1xuICAgIFxuXG4gICAgLy8gfTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgaWYodGhpcy5TdGF0cykge1xuICAgICAgdGhpcy5TdGF0cy51cGRhdGUoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnVwLmFkZCgncHJvZmlsZXInLHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvUHJvZmlsZXIuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIExheW91dFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYWxlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuU1BCYXNlVyA9IDM3NTtcbiAgICB0aGlzLlBDQmFzZVcgPSAxMzAwO1xuXG4gICAgdGhpcy5yYXRlID0gMTtcbiAgICB0aGlzLlcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIHRoaXMuJHRhcmdldExpc3QgPSBbXG4gICAgICB7XG4gICAgICAgICckdGFyZ2V0JzogJCgnI3NpZGVMLCAjc2lkZVIsICNuYXYnKSxcbiAgICAgICAgJ3NjYWxlJzogJ3NwT25seScgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAnJHRhcmdldCc6ICQoJy5zZWN0aW9uMDNfZGV0YWlsJyksXG4gICAgICAvLyAgICdzY2FsZSc6ICdib3RoJyAvLyBzcE9ubHkgcGNPbmx5IGJvdGhcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgICckdGFyZ2V0JzogJCgnLnNlY3Rpb24wNCcpLFxuICAgICAgLy8gICAnc2NhbGUnOiAnYm90aCcgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICAvLyB9LFxuICAgIF1cblxuICAgIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgXG4gIH1cblxuICBydW4oKSB7XG5cbiAgICB0aGlzLlcgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB0aGlzLmlXID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLnNjYWxlKCk7XG4gICAgdGhpcy53cmFwKCk7XG5cbiAgfVxuXG4gIC8vIOaLoeWkp1xuICBzY2FsZSgpIHtcblxuICAgIC8vIGJw44Gu5aC05ZCI44Guc2NhbGVcbiAgICBpZiAodGhpcy5pVyA8PSBnYi5pbi5jb25mLmJwKSB7XG5cbiAgICAgIC8vIHdpZHRo44GL44KJcmF0ZeOCkuioiOeul1xuICAgICAgLy8gdGhpcy5yYXRlID0gZ2IuaW4udS5mbG9hdEZvcm1hdCh0aGlzLlcgLyB0aGlzLlNQQmFzZVcgLCAyKTtcbiAgICAgIGlmICh0aGlzLlcgPiAzNzUpIHRoaXMuVyA9IDM3NTtcbiAgICAgIGlmICh0aGlzLlcgPCAzMjApIHRoaXMuVyA9IDMyMDtcbiAgICAgIGxvZyh0aGlzLlcpO1xuICAgICAgdGhpcy5yYXRlID0gdGhpcy5XIC8gdGhpcy5TUEJhc2VXO1xuXG4gICAgICAvLyBzY2FsZeOBmeOCi+ODquOCueODiOOCkuODq+ODvOODl1xuICAgICAgJC5lYWNoKHRoaXMuJHRhcmdldExpc3QsIChpbmRleCwgdmFsKT0+e1xuXG4gICAgICAgIGlmICh2YWwuc2NhbGUgPT0gJ2JvdGgnIHx8IHZhbC5zY2FsZSA9PSAnc3BPbmx5Jykge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KHZhbC4kdGFyZ2V0LCB7XG4gICAgICAgICAgICBzY2FsZTogdGhpcy5yYXRlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyB3aWR0aOOBi+OCiXJhdGXjgpLoqIjnrpdcbiAgICAgIC8vIHRoaXMucmF0ZSA9IGdiLmluLnUuZmxvYXRGb3JtYXQodGhpcy5XIC8gdGhpcy5QQ0Jhc2VXICwgMik7XG4gICAgICBpZiAodGhpcy5XID4gMTMwMCkgdGhpcy5XID0gMTMwMDtcbiAgICAgIHRoaXMucmF0ZSA9IHRoaXMuVyAvIHRoaXMuUENCYXNlVztcblxuICAgICAgLy8gc2NhbGXjgZnjgovjg6rjgrnjg4jjgpLjg6vjg7zjg5dcbiAgICAgICQuZWFjaCh0aGlzLiR0YXJnZXRMaXN0LCAoaW5kZXgsIHZhbCk9PntcblxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdib3RoJyB8fCB2YWwuc2NhbGUgPT0gJ3BjT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgc2NhbGU6IHRoaXMucmF0ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOOBk+OBoeOCieOBruWgtOWQiOOBr+OAgXNjYWxl44KS5oi744GZXG4gICAgICAgIGlmICh2YWwuc2NhbGUgPT0gJ3NwT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICB9KTsgIFxuXG4gICAgfVxuXG4gIH1cblxuICAvLyBzY2FsZeOBl+OBn+OCieOAgeWFg+OBruWkp+OBjeOBleWIhuS9meeZveOBjOOBp+OBjeOCi+OBruOBp292ZXJmbG93IGhpZGRlbuOBp+a2iOOBmVxuICB3cmFwKCkge1xuXG5cblxuICB9XG5cbiAgcmVzZXQoKSB7XG5cbiAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgfSk7XG4gICAgICBcbiAgICB9KTtcblxuXG4gICAgLy8g44Kk44OZ44Oz44OI6Kej6ZmkXG4gICAgZ2IuaW4uci5yZW1vdmUoJ3NjYWxlVG9wJyk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgdGhpcy5ydW4oKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQoJ3NjYWxlVG9wJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGVUb3AuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEhvdmVyRWZmZWN0U05TU1BGb290ZXJcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdmVyRWZmZWN0U05TU1BGb290ZXIge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwLCAkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLiR3cmFwID0gJHdyYXA7XG4gICAgdGhpcy4kaW5uZXIgPSB0aGlzLiR3cmFwLmZpbmQoJy5pbm5lcicpO1xuICAgIHRoaXMuJHRhcmdldCA9IHRoaXMuJHdyYXAuZmluZCgnLnNucy5zcCAuaWNvblNoYXJlJyk7XG4gICAgdGhpcy4kYmFyID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5iYXInKTtcbiAgICB0aGlzLiRsaXN0ID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5saXN0Jyk7XG4gICAgdGhpcy4kaXRlbSA9IHRoaXMuJHdyYXAuZmluZCgnLnNucy5zcCAubGlzdCAuaXRlbScpO1xuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIHJlYWR5KCkge1xuXG4gICAgLy8gb3hcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kd3JhcCwge3dpZHRoOiAwfSlcblxuICAgIC8vIGJhclxuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRiYXIsIHt3aWR0aDogMH0pXG5cbiAgICAvLyBzbnNcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kaXRlbSwge3g6IC00MCwgb3BhY2l0eTogMH0pXG5cbiAgICB0aGlzLiRiYXIuc2hvdygpO1xuICAgIHRoaXMuJGxpc3Quc2hvdygpO1xuXG4gIH1cblxuICB0b2dnbGUoKSB7XG5cbiAgICBpZiAodGhpcy4kdGFyZ2V0Lmhhc0NsYXNzKCdvbicpKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgIHRoaXMub3BlbigpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuJHRhcmdldC50b2dnbGVDbGFzcygnb24nKTtcblxuICB9XG5cbiAgb3BlbiAodGhhdCkge1xuXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJveCk7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJhcik7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGl0ZW0pO1xuXG4gICAgdGhpcy5yZWFkeSgpO1xuXG4gICAgLy8gYmFy44GM5Ly444Gz44KLXG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuXG4gICAgdGxcbiAgICAgIC8vIGJveOOBjOS8uOOBs+OCi1xuICAgICAgLnRvKHRoaXMuJHdyYXAsIDAuNCwge1xuICAgICAgICB3aWR0aDogMzMwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dFxuICAgICAgfSlcbiAgICAgIC50byh0aGlzLiRiYXIsIDAuMywge1xuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgfSwnLT0wLjInKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMCksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjInKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMSksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjI1JylcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDIpLCAwLjMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgzKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgIFxuICB9XG5cbiAgY2xvc2UgKHRoYXQpIHtcblxuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRib3gpO1xuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRiYXIpO1xuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRpdGVtKTtcblxuICAgIC8vIGJhclxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGxcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDMpLCAwLjMsIHtcbiAgICAgICAgeDogLTQwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAgIH0pXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgyKSwgMC4zLCB7XG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMSksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMCksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgdGhpcy4kbGlzdC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kYmFyLCAwLjIsIHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgdGhpcy4kYmFyLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwnLT0wLjMnKVxuICAgICAgLnRvKHRoaXMuJHdyYXAsIDAuMywge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICB9LCctPTAuMycpXG5cbiAgfVxuXG4gIHJlc2V0KCkge1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuJHRhcmdldC5vZmYoJ2NsaWNrJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U05TU1BGb290ZXIuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIERpc3BsYXlcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYkdMaW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICBcdHRoaXMuZ2wgPSBudWxsO1xuXG4gIFx0dGhpcy53ZWJnbEluaXQgPSB0aGlzLl93ZWJnbEluaXQuYmluZCh0aGlzKTtcblxuICBcdHRoaXMuY3JlYXRlX3NoYWRlciA9IHRoaXMuX2NyZWF0ZV9zaGFkZXIuYmluZCh0aGlzKTtcbiAgXHR0aGlzLmNyZWF0ZV9wcm9ncmFtID0gdGhpcy5fY3JlYXRlX3Byb2dyYW0uYmluZCh0aGlzKTtcbiAgXHR0aGlzLmNyZWF0ZV92Ym8gPSB0aGlzLl9jcmVhdGVfdmJvLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uSW1tZWRpYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgb25JbW1lZGlhdGUoKSB7XG5cbiAgICAvLyDjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICBnYi5pbi51cC5sb29wKCk7XG5cblx0XHR0aGlzLndlYmdsSW5pdCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG5cdFx0d2luZG93LmNvbnNvbGUubG9nKCdvbkxvYWQnKTtcblxuICB9XG5cbiAgX3dlYmdsSW5pdCgpIHtcblxuXHRcdC8vIGNhbnZhc+OCqOODrOODoeODs+ODiOOCkuWPluW+l1xuXHRcdGxldCBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXHRcdGMud2lkdGggPSAzMDA7XG5cdFx0Yy5oZWlnaHQgPSAzMDA7XG5cblx0XHQvLyB3ZWJnbOOCs+ODs+ODhuOCreOCueODiOOCkuWPluW+l1xuXHRcdHRoaXMuZ2wgPSBjLmdldENvbnRleHQoJ3dlYmdsJykgfHwgYy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKTtcblxuXHRcdC8vIGNhbnZhc+OCkuWIneacn+WMluOBmeOCi+iJsuOCkuioreWumuOBmeOCi1xuXHRcdHRoaXMuZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xuXG5cdFx0Ly8gY2FudmFz44KS5Yid5pyf5YyW44GZ44KL6Zqb44Gu5rex5bqm44KS6Kit5a6a44GZ44KLXG5cdFx0dGhpcy5nbC5jbGVhckRlcHRoKDEuMCk7XG5cblx0XHQvLyBjYW52YXPjgpLliJ3mnJ/ljJZcblx0XHR0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG5cblx0XHQvLyDpoILngrnjgrfjgqfjg7zjg4Djgajjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7nlJ/miJBcblx0XHRsZXQgdl9zaGFkZXIgPSB0aGlzLmNyZWF0ZV9zaGFkZXIoJ3ZzJyk7XG5cdFx0bGV0IGZfc2hhZGVyID0gdGhpcy5jcmVhdGVfc2hhZGVyKCdmcycpO1xuXG5cdFx0Ly8g44OX44Ot44Kw44Op44Og44Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQ44Go44Oq44Oz44KvXG5cdFx0bGV0IHByZyA9IHRoaXMuY3JlYXRlX3Byb2dyYW0odl9zaGFkZXIsIGZfc2hhZGVyKTtcblxuXHRcdC8vIGF0dHJpYnV0ZUxvY2F0aW9u44Gu5Y+W5b6XXG5cdFx0bGV0IGF0dExvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbihwcmcsICdwb3NpdGlvbicpO1xuXG5cdFx0Ly8gYXR0cmlidXRl44Gu6KaB57Sg5pWwKOOBk+OBruWgtOWQiOOBryB4eXog44GuM+imgee0oClcblx0XHRsZXQgYXR0U3RyaWRlID0gMztcblxuXHRcdC8vIOODouODh+ODqyjpoILngrkp44OH44O844K/XG5cdFx0bGV0IHZlcnRleF9wb3NpdGlvbiA9IFtcblx0XHRcdDAuMCwgMS4wLCAwLjAsXG5cdFx0XHQxLjAsIDAuMCwgMC4wLFxuXHRcdFx0LTEuMCwgMC4wLCAwLjBcblx0XHRdO1xuXG5cdFx0Ly8gVkJP44Gu55Sf5oiQXG5cdFx0dmFyIHZibyA9IHRoaXMuY3JlYXRlX3Zibyh2ZXJ0ZXhfcG9zaXRpb24pO1xuXG5cdFx0Ly8gVkJP44KS44OQ44Kk44Oz44OJXG5cdFx0dGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB2Ym8pO1xuXG5cdFx0Ly8gYXR0cmlidXRl5bGe5oCn44KS5pyJ5Yq544Gr44GZ44KLXG5cdFx0dGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRMb2NhdGlvbik7XG5cblx0XHQvLyBhdHRyaWJ1dGXlsZ7mgKfjgpLnmbvpjLJcblx0XHR0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0TG9jYXRpb24sIGF0dFN0cmlkZSwgdGhpcy5nbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG5cdFx0Ly8gbWluTWF0cml4LmpzIOOCkueUqOOBhOOBn+ihjOWIl+mWoumAo+WHpueQhlxuXHRcdC8vIG1hdElW44Kq44OW44K444Kn44Kv44OI44KS55Sf5oiQXG5cdFx0dmFyIG0gPSBuZXcgbWF0SVYoKTtcblxuXHRcdC8vIOWQhOeoruihjOWIl+OBrueUn+aIkOOBqOWIneacn+WMllxuXHRcdHZhciBtTWF0cml4ID0gbS5pZGVudGl0eShtLmNyZWF0ZSgpKTtcblx0XHR2YXIgdk1hdHJpeCA9IG0uaWRlbnRpdHkobS5jcmVhdGUoKSk7XG5cdFx0dmFyIHBNYXRyaXggPSBtLmlkZW50aXR5KG0uY3JlYXRlKCkpO1xuXHRcdHZhciBtdnBNYXRyaXggPSBtLmlkZW50aXR5KG0uY3JlYXRlKCkpO1xuXG5cdFx0Ly8g44OT44Ol44O85bqn5qiZ5aSJ5o+b6KGM5YiXXG5cdFx0bS5sb29rQXQoWzAuMCwgMS4wLCAzLjBdLCBbMCwgMCwgMF0sIFswLCAxLCAwXSwgdk1hdHJpeCk7XG5cblx0XHQvLyDjg5fjg63jgrjjgqfjgq/jgrfjg6fjg7PluqfmqJnlpInmj5vooYzliJdcblx0XHRtLnBlcnNwZWN0aXZlKDkwLCBjLndpZHRoIC8gYy5oZWlnaHQsIDAuMSwgMTAwLCBwTWF0cml4KTtcblxuXHRcdC8vIOWQhOihjOWIl+OCkuaOm+OBkeWQiOOCj+OBm+W6p+aomeWkieaPm+ihjOWIl+OCkuWujOaIkOOBleOBm+OCi1xuXHRcdG0ubXVsdGlwbHkocE1hdHJpeCwgdk1hdHJpeCwgbXZwTWF0cml4KTtcblx0XHRtLm11bHRpcGx5KG12cE1hdHJpeCwgbU1hdHJpeCwgbXZwTWF0cml4KTtcblxuXHRcdC8vIHVuaWZvcm1Mb2NhdGlvbuOBruWPluW+l1xuXHRcdHZhciB1bmlMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgJ212cE1hdHJpeCcpO1xuXG5cdFx0Ly8gdW5pZm9ybUxvY2F0aW9u44G45bqn5qiZ5aSJ5o+b6KGM5YiX44KS55m76YyyXG5cdFx0dGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHVuaUxvY2F0aW9uLCBmYWxzZSwgbXZwTWF0cml4KTtcblxuXHRcdC8vIOODouODh+ODq+OBruaPj+eUu1xuXHRcdHRoaXMuZ2wuZHJhd0FycmF5cyh0aGlzLmdsLlRSSUFOR0xFUywgMCwgMyk7XG5cblx0XHQvLyDjgrPjg7Pjg4bjgq3jgrnjg4jjga7lho3mj4/nlLtcblx0XHR0aGlzLmdsLmZsdXNoKCk7XG5cblxuICB9XG5cblx0X2NyZWF0ZV9zaGFkZXIoaWQpe1xuXHRcdC8vIOOCt+OCp+ODvOODgOOCkuagvOe0jeOBmeOCi+WkieaVsFxuXHRcdHZhciBzaGFkZXI7XG5cblx0XHQvLyBIVE1M44GL44KJc2NyaXB044K/44Kw44G444Gu5Y+C54Wn44KS5Y+W5b6XXG5cdFx0dmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cblx0XHQvLyBzY3JpcHTjgr/jgrDjgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/mipzjgZHjgotcblx0XHRpZighc2NyaXB0RWxlbWVudCl7cmV0dXJuO31cblxuXHRcdC8vIHNjcmlwdOOCv+OCsOOBrnR5cGXlsZ7mgKfjgpLjg4Hjgqfjg4Pjgq9cblx0XHRzd2l0Y2goc2NyaXB0RWxlbWVudC50eXBlKXtcblxuXHRcdFx0Ly8g6aCC54K544K344Kn44O844OA44Gu5aC05ZCIXG5cdFx0XHRjYXNlICd4LXNoYWRlci94LXZlcnRleCc6XG5cdFx0XHRcdHNoYWRlciA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHRoaXMuZ2wuVkVSVEVYX1NIQURFUik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHQvLyDjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7loLTlkIhcblx0XHRcdGNhc2UgJ3gtc2hhZGVyL3gtZnJhZ21lbnQnOlxuXHRcdFx0XHRzaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0aGlzLmdsLkZSQUdNRU5UX1NIQURFUik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdCA6XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyDnlJ/miJDjgZXjgozjgZ/jgrfjgqfjg7zjg4Djgavjgr3jg7zjgrnjgpLlibLjgorlvZPjgabjgotcblx0XHR0aGlzLmdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNjcmlwdEVsZW1lbnQudGV4dCk7XG5cblx0XHQvLyDjgrfjgqfjg7zjg4DjgpLjgrPjg7Pjg5HjgqTjg6vjgZnjgotcblx0XHR0aGlzLmdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuXHRcdC8vIOOCt+OCp+ODvOODgOOBjOato+OBl+OBj+OCs+ODs+ODkeOCpOODq+OBleOCjOOBn+OBi+ODgeOCp+ODg+OCr1xuXHRcdGlmKHRoaXMuZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgdGhpcy5nbC5DT01QSUxFX1NUQVRVUykpe1xuXG5cdFx0XHQvLyDmiJDlip/jgZfjgabjgYTjgZ/jgonjgrfjgqfjg7zjg4DjgpLov5TjgZfjgabntYLkuoZcblx0XHRcdHJldHVybiBzaGFkZXI7XG5cdFx0fWVsc2V7XG5cblx0XHRcdC8vIOWkseaVl+OBl+OBpuOBhOOBn+OCieOCqOODqeODvOODreOCsOOCkuOCouODqeODvOODiOOBmeOCi1xuXHRcdFx0YWxlcnQodGhpcy5nbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xuXHRcdH1cblx0fVxuXG5cdF9jcmVhdGVfcHJvZ3JhbSh2cywgZnMpe1xuXHRcdC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkFxuXHRcdHZhciBwcm9ncmFtID0gdGhpcy5nbC5jcmVhdGVQcm9ncmFtKCk7XG5cblx0XHQvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgavjgrfjgqfjg7zjg4DjgpLlibLjgorlvZPjgabjgotcblx0XHR0aGlzLmdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2cyk7XG5cdFx0dGhpcy5nbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnMpO1xuXG5cdFx0Ly8g44K344Kn44O844OA44KS44Oq44Oz44KvXG5cdFx0dGhpcy5nbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuXHRcdC8vIOOCt+OCp+ODvOODgOOBruODquODs+OCr+OBjOato+OBl+OBj+ihjOOBquOCj+OCjOOBn+OBi+ODgeOCp+ODg+OCr1xuXHRcdGlmKHRoaXMuZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCB0aGlzLmdsLkxJTktfU1RBVFVTKSl7XG5cblx0XHRcdC8vIOaIkOWKn+OBl+OBpuOBhOOBn+OCieODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOCkuacieWKueOBq+OBmeOCi1xuXHRcdFx0dGhpcy5nbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG5cdFx0XHQvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TjgZfjgabntYLkuoZcblx0XHRcdHJldHVybiBwcm9ncmFtO1xuXHRcdH1lbHNle1xuXG5cdFx0XHQvLyDlpLHmlZfjgZfjgabjgYTjgZ/jgonjgqjjg6njg7zjg63jgrDjgpLjgqLjg6njg7zjg4jjgZnjgotcblx0XHRcdGFsZXJ0KHRoaXMuZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFZCT+OCkueUn+aIkOOBmeOCi+mWouaVsFxuXHRfY3JlYXRlX3ZibyhkYXRhKXtcblx0XHQvLyDjg5Djg4Pjg5XjgqHjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcblx0XHR2YXIgdmJvID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcblxuXHRcdC8vIOODkOODg+ODleOCoeOCkuODkOOCpOODs+ODieOBmeOCi1xuXHRcdHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdmJvKTtcblxuXHRcdC8vIOODkOODg+ODleOCoeOBq+ODh+ODvOOCv+OCkuOCu+ODg+ODiFxuXHRcdHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShkYXRhKSwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG5cblx0XHQvLyDjg5Djg4Pjg5XjgqHjga7jg5DjgqTjg7Pjg4njgpLnhKHlirnljJZcblx0XHR0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xuXG5cdFx0Ly8g55Sf5oiQ44GX44GfIFZCTyDjgpLov5TjgZfjgabntYLkuoZcblx0XHRyZXR1cm4gdmJvO1xuXHR9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9XZWJHTGluaXQuanMiXSwic291cmNlUm9vdCI6IiJ9