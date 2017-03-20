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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Common
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	// import Pjax from '../Func/Pjax.es6';
	
	
	// import Menu from '../Display/UI/_compornents/Menu.es6';
	// import Nav from '../Display/UI/Nav.es6';
	
	
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
	
	// import HoverEffectMenuItem from '../Display/Effects/03_effects/HoverEffectMenuItem.es6';
	
	
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
	
	// import DisplayMovie from '../Display/DisplayMovie.es6';
	// import DisplayInterview from '../Display/DisplayInterview.es6';
	// import DisplayInterviewDetail from '../Display/DisplayInterviewDetail.es6';
	// import DisplayHistory from '../Display/DisplayHistory.es6';
	
	'use strict';
	
	var Main = function () {
	  function Main() {
	    _classCallCheck(this, Main);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(Main, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // window.console.log('test');
	    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzAyZmY5NDc2ZDAxOGQ2MTg1MmQiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9QYWdlL0NvbW1vbi5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29uZi5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGF0YS9Tb3VuZC5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL1V0aWwuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9GdW5jLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvUmVhZHlNZ3IuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvUmVhZHlQZXJjZW50LmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvVXBkYXRlTWdyLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvUmVzaXplTWdyLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvU2Nyb2xsTWdyLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvTW91c2VNZ3IuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZE1nci5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Mb2FkZXIuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvU2VjMDFWaWRlby5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9Zb3V0dWJlRm9yU2VjMDEuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9EaXNwbGF5L0xheW91dC9GdWxsU2l6ZS5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9Ub3BUaW1lLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0p1ZGdlRW52aXJvbm1lbnQuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvX2V2ZW50cy9SZXNwb25zaXZlU3dpdGNoSW1nLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1N3aXBlVHJhbnNpdGlvbi5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9BbGVydC5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9TaWRlUi5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RCYWNrLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL19wYXJ0cy9QYWdlU2Nyb2xsLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1RpbWUuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU2Nyb2xsVHJhbnNpdGlvbi5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9fcGFydHMvUGFnZVRvcC5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9TbnMuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9lanMvaW5jL21ldGFEYXRhLmpzb24iLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9TbGlkZXJUb3AuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L0xheW91dC5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TaXplLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9TaXplL1NjYWxlLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9Qb3N0aW9uL1Bvc2l0aW9uLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlPcGVuaW5nLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzTG9vcC5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50c1RpbWVsaW5lLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DcmVhdGVDYW52YXMuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL0NhbnZhcy5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvX2RldGFpbHMvUGxhbmUuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1BhZ2VUcmFuc2l0aW9uL1BhZ2VUcmFuc2l0aW9uQ29udHJvbGxlci5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvUGFnZVRyYW5zaXRpb24vUGFnZVRyYW5zaXRpb24uZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1BhZ2VUcmFuc2l0aW9uL1BvaW50LmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ub3BPcGVuaW5nLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRGlzcGxheS9Nb3Rpb24vRG9tTW90aW9uTGlicy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0Fycm93VG9wLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWRy5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdMb2dvLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdE1lbnVCdG4uZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3cuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U05TUENGb290ZXIuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dTaWRlUi5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9NYWluLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9FZmZlY3RzLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHMuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c0xvb3AuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c1RpbWVsaW5lLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvU29tZXRpbWVzTWdyLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L19kZXRhaWxzL1BsYW5lLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvUGFyYW0uZXM2Iiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9Qcm9maWxlci5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TY2FsZVRvcC5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9XZWJHTGluaXQuZXM2Il0sIm5hbWVzIjpbIndpbmRvdyIsImdiIiwidW5kZWZpbmVkIiwiaW4iLCJjb21tb24iLCJtYWluIiwiQ29tbW9uIiwib25JbW1lZGlhdGUiLCJzZXRFdmVudHMiLCJjb25mIiwidSIsImYiLCJ1cCIsInIiLCJzIiwibSIsInJtIiwibG9hZE1nciIsInNjdCIsIkxheW91dCIsIm9uQ29tcGxldGVkRnVuYyIsImplIiwicmVzSW1nIiwic25zIiwiJCIsInN3dCIsImNoZWNrQ3NzQmxlbmQiLCJzbGlkZXJUb3AiLCJwYWdlVHJhbnNpdGlvbkVmZmVjdCIsInNlYzAxVmlkZW8iLCJTZWMwMkJnIiwiaGUwMSIsImhlMDIiLCJoZTAzIiwiaGUwNCIsImhlMDYiLCJoZTA4Iiwic3RhcnQiLCJkb2N1bWVudCIsIm9uIiwib25SZWFkeSIsImJpbmQiLCJvbkxvYWQiLCJDb25mIiwiUkVMRUFTRSIsIkZMRyIsIkxPRyIsIlBBUkFNIiwiU1RBVFMiLCJkZWZXIiwiZGVmSCIsIlciLCJIIiwic3BXIiwic3BIIiwiYnAiLCJtb2RlIiwia2V5cyIsInN3aXRjaE1vZGUiLCJzb3VuZERhdGEiLCJzZWMwMkltZ051bSIsInlvdXR1YmVJRDAxIiwieW91dHViZUlEMDIiLCJ3ZWJGb250TG9hZGVkIiwiaSIsImtleSIsImxlbiIsInBhcmFtIiwicmVmIiwicmVmMSIsInZhbHVlIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJqIiwib2JqIiwiayIsInZhbCIsIlNvdW5kRGF0YSIsIlV0aWwiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiYXBwViIsImFwcFZlcnNpb24iLCJpc1Jlc1NQIiwiaXNSZXNQQyIsImlzUEMiLCJpc1NQIiwiaXNUQUIiLCJpc01CIiwiaXNJRSIsImlzU2V0U1BTaXplIiwic3RhcnRUaW1lIiwiZWxhcHNlZFRpbWUiLCJub3ciLCJEYXRlIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImhpdCIsInJhbmdlIiwibnVtIiwicmVzTWluIiwicmVzTWF4IiwiYmFzZU1pbiIsImJhc2VNYXgiLCJwIiwibiIsInBvcyIsIlN0cmluZyIsImluZGV4T2YiLCJzdWJzdHIiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInJhZGlhbnMiLCJQSSIsImFuZ2xlIiwicDEiLCJwMiIsInNxcnQiLCJwb3ciLCJ4IiwieSIsImFyciIsInNvcnQiLCJhIiwiYiIsImFyeSIsInNsaWNlIiwidCIsIkFycmF5IiwicHVzaCIsInNodWZmbGVBcnkiLCJsIiwibGVuMSIsIm5ld0FyciIsInBhcmEiLCJkZXNjIiwibGlzdCIsInJldHVybktleSIsImdldFRpbWUiLCJmbGciLCJjc3MiLCJtZWRpYSIsInBhdHRlcm4iLCJSZWdFeHAiLCJqb2luIiwidGVzdCIsImFkZENsYXNzIiwiaXNJcGFkIiwiaXNBbmRyb2lkIiwicGxhdGZvcm0iLCJpc0lvcyIsIm1zaWUiLCJwYXJzZUludCIsIm1hdGNoIiwiaXNJZTEwVW5kZXIiLCJsb2ciLCJpc0lFMTEiLCJyZW1vdmVDbGFzcyIsInZlcnNpb24iLCJwYXJzZUZsb2F0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidXJsIiwiaHJlZiIsInBhcmFtSXRlbXMiLCJwYXJhbUl0ZW0iLCJoYXNoIiwiY29va2llIiwiaXNDb250YWluIiwiZyIsInN0ciIsInRvU3RyaW5nIiwiY29udGFpbiIsIm51bWJlciIsIl9wb3ciLCJyb3VuZCIsInJlcyIsIm9yZyIsImRlc3QiLCJiZWZvcmUiLCJhZnRlciIsImdldE5vdyIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWlsbFNlY29uZCIsImdldE1pbGxpc2Vjb25kcyIsImdldERhdGUiLCJtb250aGRheXMiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwid2Vla0RheUpQIiwid0RKIiwiZ2V0RGF5Iiwid2Vla0RheUVOIiwid0RFIiwiZGF0ZSIsIk51bWJlciIsImlnbm9yZUFycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIiR0YXJnZXQiLCIkaW1nIiwiZWFjaCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJhdHRyIiwidHJpZ2dlciIsInNlbGYiLCJlIiwicHJldmVudERlZmF1bHQiLCJvZmYiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsImtleUNvZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsIm9udG91Y2htb3ZlIiwib25rZXlkb3duIiwicHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZ1bmMiLCJibGFuayIsImRlYnVnZ2VyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZXhwYW5kalF1ZXJ5IiwibWV0aG9kcyIsImNvbnNvbGUiLCJwcmVwZW5kIiwiRlBTIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJqUXVlcnkiLCJmbiIsImV4dGVuZCIsImFkanVzdCIsImFkanVzdFciLCJhZGp1c3RIIiwiQ1NTIiwic3VwcG9ydHMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ2IiwiaXNBbmRyb2lkVmVyc2lvbiIsImFsZXJ0IiwiUmVhZHlNZ3IiLCJjb21wbGV0ZWQiLCJ0b3RhbCIsImN1cnJlbnQiLCJyZWFkeVBlcmNlbnQiLCJyZW1vdmUiLCJ1cGRhdGUiLCJzZXR1cCIsIlJlYWR5UGVyY2VudCIsIiRsb2FkaW5nIiwiJGJhciIsIiRwZXJjZW50IiwiaXNMb2NrIiwic2V0VGltZW91dExvY2siLCJ0YXJnZXQiLCJ0ZXh0Iiwib25Db21wbGV0ZSIsIlR3ZWVuTWF4IiwidG8iLCJzY2FsZSIsIm9wYWNpdHkiLCJlYXNlIiwiUG93ZXIzIiwiZWFzZUluT3V0IiwiVXBkYXRlTWdyIiwiY250IiwidXBkYXRlTGlzdCIsIlRpbWVyIiwiaXNTdG9wIiwiZnVuYyIsImxvb3AiLCJuYW1lIiwiYXJyUmVtb3ZlIiwiY2hlY2siLCJzcGxpY2UiLCJSZXNpemVNZ3IiLCJyZXNpemVMaXN0Iiwid3MiLCJvbGRXIiwib2xkSCIsIm9uUmVzaXplIiwiZ2V0V2luZG93U2l6ZSIsIlNjcm9sbE1nciIsInNjcm9sbExpc3QiLCJzY3JvbGxFbmRMaXN0Iiwic3QiLCJzYiIsInN2IiwiU1RBbW91bnQiLCJvZmZzZXQiLCJpc1N0YXJ0IiwiZW5kIiwic2Nyb2xsVG9wIiwiZGVsdGEiLCJkZWx0YVgiLCJkZWx0YVkiLCJpc1dpbiIsImlzRkYiLCJzY3JvbGxMZWZ0Iiwib25TY3JvbGwiLCJvbk1vdXNlV2hlZWwiLCJNb3VzZU1nciIsImN4IiwiY3kiLCJtb3VzZU1vdmVMaXN0IiwibW91c2VNb3ZlU3RhcnRMaXN0IiwibW91c2VNb3ZlRW5kTGlzdCIsImVuZFRpbWUiLCJvbkVuZCIsIm9yaWdpbmFsRXZlbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJvZmZzZXRYIiwibGVmdCIsInRvcCIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaG1vdmUiLCJvbk1vdXNlbW92ZSIsIkxvYWRNZ3IiLCJsb2FkZXIiLCJjYiIsInlvdXR1YmVJZnJhbWVTY3JpcHQiLCJsb2FkU2VjMDJJbWciLCJwYXRoIiwiY2IwMiIsImltZyIsInNoYWRlcnMiLCJzaGFkZXJMb2FkTGlzdCIsIlpvb21CbHVyIiwiVHJhbnNpdGlvbjAyIiwic2hhZGVyU2VyaWFsTG9hZCIsInNoYWRlciIsImxvYWQiLCJjb21wIiwic2VjdGlvbjA0UHJvZHVjdEltZyIsInRleHR1cmVMaXN0IiwidGV4dHVyZXMiLCJ0ZXh0dXJlU2VyaWFsTG9hZCIsInRleHR1cmUiLCJUSFJFRSIsIkltYWdlVXRpbHMiLCJsb2FkVGV4dHVyZSIsImNvbmZpZyIsImN1c3RvbSIsImZhbWlsaWVzIiwidXJscyIsImFjdGl2ZSIsIndlYkZvbnQiLCJMb2FkZXIiLCJzcmMiLCJnZXRKU09OIiwiZGF0YSIsIm50aCIsIkltYWdlIiwiYWRkMCIsIm9ubG9hZCIsImltZ051bSIsImVsbSIsImlzTG9hZCIsInZpZGVvIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJzdXBwb3J0VmlkZW9FeHQiLCJwbGF5IiwidGFnIiwiZmlyc3RTY3JpcHRUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJvbllvdVR1YmVJZnJhbWVSZWFkeSIsImV4dCIsImNhblBsYXlUeXBlIiwid2YiLCJhc3luYyIsImFnYWluIiwiV2ViRm9udCIsIm9uTG9hZGVkIiwiU2VjMDFWaWRlbyIsIllvdXR1YmVGb3JTZWMwMSIsImlkIiwidmlkZW9JRCIsInZpZGVvTGlzdCIsInBsYXllciIsImlzRmlyc3QiLCJpc1NlZWtMb2NrIiwiaXNTZWVrTG9jazAyIiwiWVQiLCJQbGF5ZXIiLCJ2aWRlb0lkIiwiZXZlbnRzIiwib25QbGF5ZXJTdGF0ZUNoYW5nZSIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwic2hvd2luZm8iLCJhdXRvaGlkZSIsInJlbCIsImVuYWJsZWpzYXBpIiwiaXZfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJtb2Rlc3RicmFuZGluZyIsInRhcmdldERlZlciLCJ0YXJnZXREZWZIIiwicnVuIiwic2V0UGxheWJhY2tRdWFsaXR5IiwidGltZSIsInBsYXlCeU5ZVGltZSIsInN0YXR1cyIsIlBsYXllclN0YXRlIiwiRU5ERUQiLCJwbGF5VmlkZW8iLCJQTEFZSU5HIiwiQ1VFRCIsImlzU2FmYXJpIiwiQlVGRkVSSU5HIiwic2Vla1RvIiwiZ2V0Q3VycmVudFRpbWUiLCJueUgiLCJvblNlZWsiLCJGdWxsU2l6ZSIsIiRXcmFwIiwiJFRhcmdldCIsIiR3cmFwIiwidGFyZ2V0VyIsInRhcmdldEgiLCJyYXRpb1ciLCJyYXRpbyIsIm1sIiwibXQiLCJnZXQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldERlZiIsInNldFN0eWxlIiwiZ2V0U2l6ZSIsInNldFBvcyIsIlRvcFRpbWUiLCIkaDAxIiwiZmluZCIsIiRoMDIiLCIkbTAxIiwiJG0wMiIsImlzQWxlcnQiLCJkaXMiLCJ0bCIsIlRpbWVsaW5lTWF4IiwicmVwZWF0Iiwic2V0IiwiUG93ZXIyIiwiSnVkZ2VFbnZpcm9ubWVudCIsImlzRGV2aWNlU1AiLCJpc0RldmljZVRBQiIsImlzRGV2aWNlTUIiLCJpc0RldmljZVBDIiwiaXNJRVZlcnNpb24iLCJpc0RpcmVjdGlvbiIsImlzUmVzcG9uc2l2ZSIsIlJlc3BvbnNpdmVTd2l0Y2hJbWciLCJpc1BDTG9jayIsImlzU1BMb2NrIiwiaW5kZXgiLCJlbCIsInN0clJlcGxhY2UiLCJoYXNDbGFzcyIsInNldEltZ1NQU2l6ZSIsIm5vdCIsIlN3aXBlVHJhbnNpdGlvbiIsIiRzdGFydFdyYXAiLCIkZW5kV3JhcCIsInBhZ2VMaXN0Iiwib2xkIiwibmV4dCIsInByZXYiLCJzWCIsIm1YIiwiZVgiLCJtaW5EaXMiLCJzVCIsImVUIiwibWluVCIsIm9uVG91Y2hMb25nIiwib25Ub3VjaFN0YXJ0Q0IiLCJvblRvdWNoRW5kQ0IiLCJzWSIsIm1ZIiwiZVkiLCJhYnNEaXMiLCJhYnMiLCJwamF4Iiwic2l6ZSIsInJhdGUiLCJjYWxjdWxhdGVPcmRlciIsInBhZ2VOYW1lIiwiZmlsdGVyIiwiaXNOb3RUb3VjaCIsImRpciIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJBbGVydCIsInNob3ciLCJraWxsVHdlZW5zT2YiLCJoaWRlIiwiU2lkZVIiLCJjdXIiLCIkY3VyIiwiJHBhZ2VOYW1lIiwiJG5leHQiLCIkYmFjayIsImNoYW5nZUN1ciIsImNoYW5nZVBhZ2VOYW1lIiwiY2hhbmdlTmV4dCIsIlBvd2VyNCIsImVhc2VPdXQiLCJjaGFuZ2VOdW0iLCJFeHBvIiwicm90YXRpb25aIiwiZGVsYXkiLCJwYXJlbnQiLCJIb3ZlckVmZmVjdEJhY2siLCJ0aGF0IiwidGwwMiIsImtpbGwiLCJ0bDAxIiwib25FbnRlciIsIm9uTGVhdmUiLCJQYWdlU2Nyb2xsIiwidGVzdEFsZXJ0IiwiX3Rlc3RBbGVydCIsImRpZiIsInBhZ2V0b3AiLCJwYWdlU2Nyb2xsVG8iLCJwYWdlU2Nyb2xsVG8wMiIsIlRpbWUiLCJpc1N0YXRlIiwic3RhdGVMaXN0IiwianVkZ2VTdGF0ZSIsImdldE5vd0F0TlkiLCJTY3JvbGxUcmFuc2l0aW9uIiwiaXNTd2l0Y2giLCJpc1BqYXhMb2NrIiwibWVudSIsImlzT3BlbiIsInN3aXRjaCIsIlBhZ2VUb3AiLCJyZWFkeSIsIlNucyIsIiRmYiIsIiR0dyIsIiRsaW5lIiwiJG1haWwiLCJmYiIsInRpdCIsImVuY29kZVVSSUNvbXBvbmVudCIsImh0bWwiLCJkZXMiLCJ0dyIsImxpbmUiLCJkIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkIiwib3BlbldpbmRvdyIsImFkZHJlc3MiLCJzdWIiLCJib2R5Iiwic2NyZWVuIiwib3BlbiIsImp1bXBGQiIsImp1bXBUVyIsImp1bXBMSU5FIiwib25TZW5kTWFpbCIsIlNsaWRlciIsIiRvdmVybGF5IiwiZXEiLCIkYXJyb3dSIiwiJGFycm93TCIsInRleHRMaXN0IiwicHJpY2VMaXN0IiwiJHRleHQiLCIkcHJpY2UiLCIkaW5kaWNhdG9yIiwicmlnaHQiLCJhdXRvU3dpY3RoIiwicG9zaXRpb24iLCJTaXplIiwiU2NhbGUiLCJTUEJhc2VXIiwiUENCYXNlVyIsIiR0YXJnZXRMaXN0IiwiaVciLCJ3cmFwIiwiUG9zaXRpb24iLCJzZXRDZW50ZXIiLCJEaXNwbGF5T3BlbmluZyIsInNob3dQYWdlIiwiZWZmZWN0Iiwic2lkZVIiLCJpbk51bSIsImluUGFnZU5hbWUiLCJpbk5leHQiLCJuYXYiLCJpblBhZ2UiLCJjcmVhdGUiLCJzd2l0Y2hBY3RpdmUiLCJkaXNwbGF5Iiwib3BlbmluZ0VmZmVjdCIsIkNWQ29udGVudHMiLCJ0aW1lbGluZSIsImNhbnZhcyIsInRsTWFpbiIsInBhdXNlIiwiQ1ZDb250ZW50c0xvb3AiLCJpc0Fsd2F5cyIsImlzUnVuU3RhdHVzIiwiaXNBZGp1c3RQYXJhbSIsInN0YXRlIiwic29tZXRpbWVzU3RhdGUiLCJsb29wTGlzdCIsImxvb3BTdGFydCIsInJ1bkFsd2F5cyIsInJ1blN0YXR1cyIsInJ1bkFkanVzdFBhcmFtIiwiZHJhdyIsIkNWQ29udGVudHNUaW1lbGluZSIsImJlZ2lubmluZyIsInN0ZXAwMSIsInN0ZXAwMiIsInN0ZXAwMyIsInN0YW5kQnkiLCJzb21ldGltZXMiLCJDcmVhdGVDYW52YXMiLCJjIiwiY3ciLCJjaCIsImZpbGxTdHlsZSIsImlzUmVzaXplIiwic2V0Q2FudmFzU2l6ZSIsImFwcGVuZCIsInZ4Iiwib2Zmc2V0RnJhbWUiLCJvZmZzZXRWeCIsInhOdW0iLCJ5TnVtIiwidGlsZUxpc3QiLCJ0aWxlIiwiY3R4IiwiZmlsbFJlY3QiLCJhZGRPYmplY3RzIiwiY250U3RvcCIsIkNhbnZhcyIsImdldENvbnRleHQiLCJQbGFuZSIsInN0cm9rZVN0eWxlIiwib3AiLCJmcmFtZVN0YXJ0IiwiaW1nTGlzdCIsImRyYXdJbWFnZSIsIlBhZ2VUcmFuc2l0aW9uQ29udHJvbGxlciIsInNldFBhcmFtSW5FZiIsImJhY2tncm91bmRDb2xvciIsImluRWZmZWN0Iiwib3V0RWZmZWN0IiwiUGFnZVRyYW5zaXRpb25FZmZlY3QiLCJyZW5kZXJlciIsInN0YWdlIiwibXgiLCJteSIsInJhZGl1cyIsInBvaW50cyIsImNvdW50IiwiaXNDVXBkYXRlIiwic2Vjb25kUCIsInNlY29uZFN1bSIsInNlY29uZENudCIsInNlY29uZEZsYWciLCJ0YXJnZXRSYWRpdXMiLCJoUmFkaXVzIiwibVJhZGl1cyIsInNSYWRpdXMiLCJoSGFuZFgiLCJtSGFuZFgiLCJzSGFuZFgiLCJoSGFuZFkiLCJtSGFuZFkiLCJzSGFuZFkiLCJoSGFuZEZsYWciLCJtSGFuZEZsYWciLCJzSGFuZEZsYWciLCJoUmFkIiwibVJhZCIsInNSYWQiLCJsaW5lV2lkdGgiLCJzdGFydFJhZDAxIiwic3RhcnRSYWQwMiIsInN0YXJ0UmFkMDMiLCJzdGFydFJhZDA0Iiwic3RhcnRSYWQwNSIsInN0YXJ0UmFkMDYiLCJlbmRSYWQwMSIsImVuZFJhZDAyIiwiZW5kUmFkMDMiLCJlbmRSYWQwNCIsImVuZFJhZDA1IiwiZW5kUmFkMDYiLCJmaWxsQmxhY2siLCJmaWxsVGlmZmFueUJsdWUiLCJQSVhJIiwiYXV0b0RldGVjdFJlbmRlcmVyIiwiYW50aWFsaWFzIiwidHJhbnNwYXJlbnQiLCJ2aWV3IiwiQ29udGFpbmVyIiwiaW50ZXJhY3RpdmUiLCJhZGRPYmplY3QiLCJjb250YWluZXIiLCJjb250YWluZXIwMSIsImNvbnRhaW5lcjAyIiwiY29udGFpbmVyMDMiLCJtYXNrIiwiR3JhcGhpY3MiLCJjb2xvciIsImhIYW5kIiwibUhhbmQiLCJzSGFuZCIsImJsZW5kTW9kZSIsIkJMRU5EX01PREVTIiwiQUREIiwiYWRkQ2hpbGQiLCJob3VyVG90YWwiLCJtaW51dGVUb3RhbCIsInNlY29uZFRvdGFsIiwiaG91clAiLCJtaW51dGVQIiwidXBkYXRlVGltZSIsImNsZWFyIiwiZHJhd1JlY3QiLCJkcmF3Q2lyY2xlIiwiZHJhd0NpcmNsZTAxIiwiZHJhd0NpcmNsZTAyIiwiZHJhd0NpcmNsZTAzIiwiZHJhd0NpcmNsZTA0IiwiZHJhd0NpcmNsZTA1IiwiZHJhd0NpcmNsZTA2IiwicmVuZGVyIiwidGwwMyIsImFscGhhIiwib25TdGFydCIsInJ1blRvcCIsInJ1bk90aGVyIiwic2V0UGFyYW1PdXRFZiIsInJhZCIsImNvcyIsInNpbiIsImxpbmVTdHlsZSIsIm1vdmVUbyIsImxpbmVUbyIsImVuZEZpbGwiLCJnZXRTSGFuZExlbmd0aCIsInRhcmdldFJhZCIsInJpZ2h0QnRtQW5nIiwiYXRhbjIiLCJsZWZ0QnRtQW5nIiwibGVmdFRvcEFuZyIsInJpZ2h0VG9wQW5nIiwic3RhcnRSYWQiLCJlbmRSYWQiLCJiZWdpbkZpbGwiLCJhcmMiLCJyZXNpemUiLCJQb2ludCIsInN4Iiwic3kiLCJleCIsInZ5IiwiZGVmWCIsImRlZlkiLCJweCIsInB5IiwiaXNSZW1vdmUiLCJHUkFWSVRZIiwiU1BSSU5HIiwiRlJJQ1RJT04iLCJNQVhfRElTIiwiVG9wT3BlbmluZyIsImxpYnMiLCJodCIsInNldHVwRmlyc3QiLCIkbmF2IiwiJG5hdkl0ZW0iLCIkc2lkZVIiLCIkZm9vdGVyVGV4dCIsIiRhcnJvdyIsIiRjb3B5IiwiJHRpbWUiLCIkc2lkZUwiLCIkdGl0MDEiLCIkdGl0MDIiLCIkdGl0MDMiLCJvcHQiLCJkdXIiLCJibHVyIiwiYmx1clRhcmdldCIsImVhc2VJbiIsInoiLCJydW5GaXJzdCIsImF1dG9BcnJvdyIsIkRvbU1vdGlvbkxpYnMiLCJmaXJzdCIsImRlZiIsIm9uVXBkYXRlIiwib25VcGRhdGVQYXJhbXMiLCJncmF5c2NhbGUiLCJncmF5c2NhbGVUYXJnZXQiLCJicmlnaHRuZXNzIiwiYnJpZ2h0bmVzc1RhcmdldCIsIm9wYWNpdHlUYXJnZXQiLCJtYWciLCJsYWciLCJkb20iLCJjbG9uZSIsImR1cjAyIiwiZHVyMDMiLCJzY2FsZVRhcmdldCIsIlBvd2VyMCIsImVhc2VOb25lIiwic2NhbGVYIiwic2NhbGVZIiwiRWxhc3RpYyIsImZyb21UbyIsInJlcGVhdERlbGF5IiwiSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCIsImlzSG92ZXIiLCJhdXRvVEwiLCJIb3ZlckVmZmVjdFNWRyIsImhvdmVyQ29sb3IiLCJkZWZDb2xvciIsImZpbGwiLCJIb3ZlckVmZmVjdFNWR0xvZ28iLCJIb3ZlckVmZmVjdE1lbnVCdG4iLCIkYmFyMDEiLCIkYmFyMDIiLCIkYmFyMDMiLCJIb3ZlckVmZmVjdFNWR0Fycm93IiwiZHJhd1NWRyIsInN0cm9rZSIsIkhvdmVyRWZmZWN0U05TUENGb290ZXIiLCIkaW5uZXIiLCIkbGlzdCIsIiRpdGVtIiwiSG92ZXJFZmZlY3RTVkdBcnJvd1NpZGVSIiwiTWFpbiIsInBhZ2UiLCJEaXNwbGF5VG9wIiwic2NhbGVUb3AiLCJzbnNTUEhvdmVyRWYiLCJFZmZlY3RzIiwiZ2wiLCJkZWJ1ZyIsIkdsQ29udGVudHMiLCJjYW1lcmEiLCJzY2VuZSIsImxpZ2h0IiwiYWRqdXN0UGFyYW0iLCJzdGF0ZUxpbmVSb3RhdGUiLCJpc0NvbnRyb2wiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsInNldENsZWFyQ29sb3IiLCJkb21FbGVtZW50IiwiU2NlbmUiLCJDYW1lcmEiLCJEaXJlY3Rpb25hbExpZ2h0Iiwic2VjdGlvbjA0UHJvZHVjdFNoYWRlciIsInBsYW5lIiwiVHJhY2tiYWxsQ29udHJvbHMiLCJ6b29tU3BlZWQiLCJyb3RhdGVTcGVlZCIsIlByb2ZpbGVyIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIm9uQ2hhbmdlRnVuY0xpc3QiLCJvblNlY3Rpb24wNCIsIkdsQ29udGVudHNMb29wIiwiU2VjdGlvbjA0UHJvZHVjdCIsInVwZGF0ZUNvbnRyb2xsIiwiR2xDb250ZW50c1RpbWVsaW5lIiwidW5pZm9ybXMiLCJzdHJlbmd0aCIsImZyb20iLCJwbGFuZTAyIiwibWF0ZXJpYWwiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsInZzIiwiZnJhZ21lbnRTaGFkZXIiLCJmcyIsInByb2dyZXNzIiwib25SZXNpenNlIiwiU29tZVRpbWVzIiwiY2JMaXN0Iiwib3JkZXIiLCJsYXRlciIsImdlb21ldHJ5IiwiZGVmV1ciLCJkZWZISCIsInJhdGVXIiwibGIiLCJpbWFnZSIsIlBsYW5lR2VvbWV0cnkiLCJNZXNoIiwidGV4dHVyZTAxIiwiUGFyYW0iLCJndWkiLCJqc29uIiwiaXNGbGFnIiwiY2xvY2siLCJ6b29tYmx1ciIsInRyYW5zaXRpb24iLCJ6b29tIiwiY29sb3JTZXBhcmF0aW9uIiwidHdlZW4iLCJzZXR1cERhdGEiLCJkYXQiLCJHVUkiLCJyZW1lbWJlciIsInpJbmRleCIsImYxIiwiYWRkRm9sZGVyIiwic3RlcCIsImxpc3RlbiIsIm9uQ2hhbmdlIiwibkZyYWciLCJTdGF0cyIsInN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJIb3ZlckVmZmVjdFNOU1NQRm9vdGVyIiwiY2xvc2UiLCJ0b2dnbGVDbGFzcyIsIiRib3giLCJ0b2dnbGUiLCJXZWJHTGluaXQiLCJ3ZWJnbEluaXQiLCJfd2ViZ2xJbml0IiwiY3JlYXRlX3NoYWRlciIsIl9jcmVhdGVfc2hhZGVyIiwiY3JlYXRlX3Byb2dyYW0iLCJfY3JlYXRlX3Byb2dyYW0iLCJjcmVhdGVfdmJvIiwiX2NyZWF0ZV92Ym8iLCJnZXRFbGVtZW50QnlJZCIsImNsZWFyQ29sb3IiLCJjbGVhckRlcHRoIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJ2X3NoYWRlciIsImZfc2hhZGVyIiwicHJnIiwiYXR0TG9jYXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsImF0dFN0cmlkZSIsInZlcnRleF9wb3NpdGlvbiIsInZibyIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsIm1hdElWIiwibU1hdHJpeCIsImlkZW50aXR5Iiwidk1hdHJpeCIsInBNYXRyaXgiLCJtdnBNYXRyaXgiLCJsb29rQXQiLCJwZXJzcGVjdGl2ZSIsIm11bHRpcGx5IiwidW5pTG9jYXRpb24iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ1bmlmb3JtTWF0cml4NGZ2IiwiZHJhd0FycmF5cyIsIlRSSUFOR0xFUyIsImZsdXNoIiwic2NyaXB0RWxlbWVudCIsImNyZWF0ZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJGUkFHTUVOVF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJnZXRTaGFkZXJJbmZvTG9nIiwicHJvZ3JhbSIsImNyZWF0ZVByb2dyYW0iLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJMSU5LX1NUQVRVUyIsInVzZVByb2dyYW0iLCJnZXRQcm9ncmFtSW5mb0xvZyIsImNyZWF0ZUJ1ZmZlciIsImJ1ZmZlckRhdGEiLCJGbG9hdDMyQXJyYXkiLCJTVEFUSUNfRFJBVyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ2pDQTs7OztBQUNBOzs7Ozs7QUFDQTs7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsRUFBQyxZQUFJOztBQUVIO0FBQ0EsT0FBSUEsT0FBT0MsRUFBUCxLQUFZQyxTQUFoQixFQUEyQkYsT0FBT0MsRUFBUCxHQUFZLEVBQVo7QUFDM0JELFVBQU9DLEVBQVAsQ0FBVUUsRUFBVixHQUFlLEVBQWYsQ0FKRyxDQUlnQjs7QUFFbkJGLE1BQUdFLEVBQUgsQ0FBTUMsTUFBTixHQUFlLHNCQUFmO0FBQ0E7QUFDQUgsTUFBR0UsRUFBSCxDQUFNRSxJQUFOLEdBQWEsb0JBQWI7QUFFRCxFQVZELEk7Ozs7Ozs7Ozs7OztzakJDVEE7Ozs7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QUdaOzs7Ozs7bUJBak5rQnc2QixTIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMDJmZjk0NzZkMDE4ZDYxODUyZCIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBUb3Bcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBDb21tb24gZnJvbSAnLi9QYWdlL0NvbW1vbi5lczYnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9QYWdlL01haW4uZXM2Jztcbi8vIGltcG9ydCBEaXNwbGF5VG9wIGZyb20gJy4vRGlzcGxheS9EaXNwbGF5VG9wLmVzNic7XG5cbigoKT0+e1xuXG4gIC8vIGdsb2JhbOOCquODluOCuOOCp+OCr+ODiFxuICBpZiAod2luZG93LmdiPT09dW5kZWZpbmVkKSB3aW5kb3cuZ2IgPSB7fTtcbiAgd2luZG93LmdiLmluID0ge307IC8vaW5zdGFuY2VcblxuICBnYi5pbi5jb21tb24gPSBuZXcgQ29tbW9uKCk7XG4gIC8vIGdiLmluLmRpc3BsYXlUb3AgPSBuZXcgRGlzcGxheVRvcCgpO1xuICBnYi5pbi5tYWluID0gbmV3IE1haW4oKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuZXM2IiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb25mIGZyb20gJy4uL0NvbmYuZXM2JztcbmltcG9ydCBVdGlsIGZyb20gJy4uL015TGlicy9VdGlsLmVzNic7XG5pbXBvcnQgRnVuYyBmcm9tICcuLi9NeUxpYnMvRnVuYy5lczYnO1xuXG5pbXBvcnQgUmVhZHlNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmVzNic7XG5pbXBvcnQgVXBkYXRlTWdyIGZyb20gJy4uL015TGlicy9FdmVudE1nci9VcGRhdGVNZ3IuZXM2JztcbmltcG9ydCBSZXNpemVNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1Jlc2l6ZU1nci5lczYnO1xuaW1wb3J0IFNjcm9sbE1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvU2Nyb2xsTWdyLmVzNic7XG5pbXBvcnQgTW91c2VNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL01vdXNlTWdyLmVzNic7XG5pbXBvcnQgTG9hZE1nciBmcm9tICcuLi9GdW5jL0xvYWRNZ3IuZXM2JztcblxuLy8gaW1wb3J0IFBqYXggZnJvbSAnLi4vRnVuYy9QamF4LmVzNic7XG5pbXBvcnQgSnVkZ2VFbnZpcm9ubWVudCBmcm9tICcuLi9GdW5jL0p1ZGdlRW52aXJvbm1lbnQuZXM2JztcbmltcG9ydCBSZXNwb25zaXZlU3dpdGNoSW1nIGZyb20gJy4uL0Z1bmMvX2V2ZW50cy9SZXNwb25zaXZlU3dpdGNoSW1nLmVzNic7XG5pbXBvcnQgU3dpcGVUcmFuc2l0aW9uIGZyb20gJy4uL0Z1bmMvU3dpcGVUcmFuc2l0aW9uLmVzNic7XG5cbi8vIGltcG9ydCBNZW51IGZyb20gJy4uL0Rpc3BsYXkvVUkvX2NvbXBvcm5lbnRzL01lbnUuZXM2Jztcbi8vIGltcG9ydCBOYXYgZnJvbSAnLi4vRGlzcGxheS9VSS9OYXYuZXM2JztcbmltcG9ydCBBbGVydCBmcm9tICcuLi9EaXNwbGF5L1VJL0FsZXJ0LmVzNic7XG5pbXBvcnQgU2lkZVIgZnJvbSAnLi4vRGlzcGxheS9VSS9TaWRlUi5lczYnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi4vRnVuYy9UaW1lLmVzNic7XG5pbXBvcnQgU2Nyb2xsVHJhbnNpdGlvbiBmcm9tICcuLi9GdW5jL1Njcm9sbFRyYW5zaXRpb24uZXM2JztcbmltcG9ydCBQYWdlVG9wIGZyb20gJy4uL0Rpc3BsYXkvVUkvX3BhcnRzL1BhZ2VUb3AuZXM2JztcbmltcG9ydCBTZWMwMVZpZGVvIGZyb20gJy4uL0Rpc3BsYXkvVUkvU2VjMDFWaWRlby5lczYnO1xuaW1wb3J0IFNucyBmcm9tICcuLi9GdW5jL1Nucy5lczYnO1xuaW1wb3J0IFNsaWRlclRvcCBmcm9tICcuLi9EaXNwbGF5L1VJL1NsaWRlclRvcC5lczYnO1xuXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vRGlzcGxheS9MYXlvdXQvTGF5b3V0LmVzNic7XG5cbmltcG9ydCBEaXNwbGF5T3BlbmluZyBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlPcGVuaW5nLmVzNic7XG5pbXBvcnQgU2VjdGlvbjAyQmcgZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50cy5lczYnO1xuaW1wb3J0IFBhZ2VUcmFuc2l0aW9uRWZmZWN0IGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1BhZ2VUcmFuc2l0aW9uL1BhZ2VUcmFuc2l0aW9uQ29udHJvbGxlci5lczYnO1xuaW1wb3J0IEhvdmVyRWZmZWN0U1ZHIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHLmVzNic7XG5pbXBvcnQgSG92ZXJFZmZlY3RTVkdMb2dvIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHTG9nby5lczYnO1xuaW1wb3J0IEhvdmVyRWZmZWN0TWVudUJ0biBmcm9tICcuLi9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdE1lbnVCdG4uZXM2JztcbmltcG9ydCBIb3ZlckVmZmVjdFNWR0Fycm93IGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3cuZXM2JztcbmltcG9ydCBIb3ZlckVmZmVjdFNOU1BDRm9vdGVyIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U05TUENGb290ZXIuZXM2JztcbmltcG9ydCBIb3ZlckVmZmVjdFNWR0Fycm93U2lkZVIgZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdBcnJvd1NpZGVSLmVzNic7XG4vLyBpbXBvcnQgSG92ZXJFZmZlY3RNZW51SXRlbSBmcm9tICcuLi9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdE1lbnVJdGVtLmVzNic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDliJ3mnJ/lgKTjga7oqK3lrprjg7vjg4fjg7zjgr/jga7phY3nva5cbiAgICAvLyAgdXRpbOmWouaVsOOBruWIneacn+WMllxuICAgIC8vICDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcbiAgICBnYi5pbi51cCA9IG5ldyBVcGRhdGVNZ3IoKTtcbiAgICBnYi5pbi5yID0gbmV3IFJlc2l6ZU1ncigpOyAgICBcbiAgICBnYi5pbi5zID0gbmV3IFNjcm9sbE1ncigpO1xuICAgIGdiLmluLm0gPSBuZXcgTW91c2VNZ3IoKTtcbiAgICBnYi5pbi5ybSA9IG5ldyBSZWFkeU1ncigpO1xuICAgIGdiLmluLmxvYWRNZ3IgPSBuZXcgTG9hZE1ncigpO1xuICAgIGdiLmluLnNjdCA9IG5ldyBTY3JvbGxUcmFuc2l0aW9uKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICDjgZ3jga7ku5ZcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHBqYXjjga7oqK3lrppcbiAgICAvLyBnYi5pbi5wamF4ID0gbmV3IFBqYXgoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBMYXlvdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnYi5pbi5MYXlvdXQgPSBuZXcgTGF5b3V0KCk7XG5cblxuICAgIC8vIOa6luWCmeWujOS6huW+jOOBruWHpueQhlxuICAgIGdiLmluLnJtLm9uQ29tcGxldGVkRnVuYyA9ICgpPT57bmV3IERpc3BsYXlPcGVuaW5nKCk7fVxuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODh+ODkOOCpOOCueODu+ODluODqeOCpuOCtuWIpOWumlxuICAgIC8vICDjgrnjg57jg5vjga7lkJHjgY3liKTlrppcbiAgICAvLyAg44Oa44O844K45oOF5aCx5Y+W5b6XXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZ2IuaW4uamUgPSBuZXcgSnVkZ2VFbnZpcm9ubWVudCgpO1xuICAgIGdiLmluLnJlc0ltZyA9IG5ldyBSZXNwb25zaXZlU3dpdGNoSW1nKCk7XG4gICAgZ2IuaW4uc25zID0gbmV3IFNucygkKCcuZmJTaGFyZScpLCQoJy50d1NoYXJlJyksJCgnLmxpbmVTaGFyZScpLCQoJy5vbk1haWwnKSlcbiAgICBnYi5pbi5zd3QgPSBuZXcgU3dpcGVUcmFuc2l0aW9uKCk7XG5cbiAgICBnYi5pbi5mLmNoZWNrQ3NzQmxlbmQoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBVSVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIGdiLmluLm1lbnUgPSBuZXcgTWVudSgpO1xuICAgIC8vIGdiLmluLm5hdiA9IG5ldyBOYXYoKTtcbiAgICAvLyBnYi5pbi5zaWRlUiA9IG5ldyBTaWRlUigpO1xuICAgIC8vIGdiLmluLmFsZXJ0ID0gbmV3IEFsZXJ0KCk7XG4gICAgLy8gZ2IuaW4ucGFnZXRvcCA9IG5ldyBQYWdlVG9wKCk7XG5cbiAgICAvLyBiZ1xuICAgIGdiLmluLnNsaWRlclRvcCA9IG5ldyBTbGlkZXJUb3AoJCgnI2JnV3JhcCAuc2VjMDEnKSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgRWZmZWN0c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdiLmluLnBhZ2VUcmFuc2l0aW9uRWZmZWN0ID0gbmV3IFBhZ2VUcmFuc2l0aW9uRWZmZWN0KCQoJyNwYWdlVHJhbnNpdGlvbkxheWVyJykpO1xuICAgIGdiLmluLnNlYzAxVmlkZW8gPSBuZXcgU2VjMDFWaWRlbygpO1xuICAgIGdiLmluLlNlYzAyQmcgPSBuZXcgU2VjdGlvbjAyQmcoKTtcblxuICAgIGdiLmluLmhlMDEgPSBuZXcgSG92ZXJFZmZlY3RTVkcoJCgnLlNWR0hvdmVyJyksJyNmZmYnLCcjMDAwJyk7XG4gICAgZ2IuaW4uaGUwMiA9IG5ldyBIb3ZlckVmZmVjdFNWRygkKCcuU1ZHSG92ZXJXJyksJyM4MWQ4ZDAnLCcjZmZmJyk7XG4gICAgZ2IuaW4uaGUwMyA9IG5ldyBIb3ZlckVmZmVjdFNWRygkKCcuU1ZHSG92ZXJXMDInKSwnIzgxZDhkMCcsJyMwMDAnKTtcbiAgICBnYi5pbi5oZTA0ID0gbmV3IEhvdmVyRWZmZWN0U1ZHTG9nbygkKCcjaGVhZGVyIC5sb2dvLCAjaGVhZGVyIC5zdWJUaXQnKSk7XG4gICAgLy8gZ2IuaW4uaGUwNSA9IG5ldyBIb3ZlckVmZmVjdE1lbnVJdGVtKCQoJyNtZW51IC5tZW51TGlzdCAuaXRlbScpKTtcbiAgICBnYi5pbi5oZTA2ID0gbmV3IEhvdmVyRWZmZWN0U1ZHQXJyb3dTaWRlUigkKCcjc2lkZVIgLm5leHQnKSk7XG4gICAgLy8gZ2IuaW4uaGUwNyA9IG5ldyBIb3ZlckVmZmVjdE1lbnVCdG4oJCgnLm1lbnVCdG4wMScpKTtcbiAgICBnYi5pbi5oZTA4ID0gbmV3IEhvdmVyRWZmZWN0U05TUENGb290ZXIoJCgnI3NpZGVMIC5zbnMuc3AnKSk7XG5cbiAgICAvLyBsb2dvIOWHuuOBmVxuICAgIC8vIFR3ZWVuTWF4LnRvKCQoJyNoZWFkZXIgLmxvZ28nKSwgMi4yLCB7b3BhY2l0eTogMSwgZWFzZTogUG93ZXIyLmVhc2VJbk91dH0pXG5cbiAgICBnYi5pbi5sb2FkTWdyLnN0YXJ0KCk7XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIEZ1bmNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBMYXlvdXRcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgRGlzcGFseVxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBNb3Rpb25cbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9Db21tb24uZXM2IiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29uZlxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgU291bmREYXRhIGZyb20gJy4vRGF0YS9Tb3VuZC5lczYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25mIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDmnKznlarjg5Xjg6njgrBcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gICAgdGhpcy5SRUxFQVNFID0gdHJ1ZTtcbiAgICAvLyB0aGlzLlJFTEVBU0UgPSBmYWxzZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5Xjg6njgrDplqLpgKNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLkZMRyA9IHtcbiAgICAgIExPRzp0cnVlLCAgLy8g44Ot44Kw5Ye65YqbXG4gICAgICBQQVJBTTp0cnVlLCAvLyDjg5Hjg6njg6Hjg7zjgr/jg4Hjgqfjg4Pjgq9cbiAgICAgIFNUQVRTOnRydWUgIC8vIFN0YXRz6KGo56S6XG4gICAgfTtcbiAgICBpZiAoIXRoaXMuUkVMRUFTRSkge1xuICAgICAgdGhpcy5GTEcgPSB7XG4gICAgICAgIExPRzpmYWxzZSxcbiAgICAgICAgUEFSQU06ZmFsc2UsXG4gICAgICAgIFNUQVRTOmZhbHNlIFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5Z+65pysIHdpZHRoIGhlaWdodFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZGVmVyA9IDEzMDA7XG4gICAgdGhpcy5kZWZIID0gODUwO1xuXG4gICAgdGhpcy5XID0gMTIwMDtcbiAgICB0aGlzLkggPSA3NTA7XG5cbiAgICB0aGlzLnNwVyA9IDM3NTtcbiAgICB0aGlzLnNwSCA9IDY2NztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4hcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmJwID0gNzY4O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIG1vZGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMua2V5cyA9IFtcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ21vdmllJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ21vcm5pbmcnLCdhZnRlcm5vb24nLCduaWdodCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ2RhdGEnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnZGF0YTAxJywnZGF0YTAyJywnZGF0YTAzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAncHJvZHVjdCcsXG4gICAgICAgICAgJ3ZhbHVlJzogWycwMSddLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5zd2l0Y2hNb2RlKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc291bmQgZGF0YVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc291bmREYXRhID0gbmV3IFNvdW5kRGF0YSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNlYzAyIGJnIEltZyBOdW1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNlYzAySW1nTnVtID0gMzk2O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHlvdXR1YmUgSURcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnlvdXR1YmVJRDAxID0gJ3hXMm9OcE5yS2QwJztcbiAgICB0aGlzLnlvdXR1YmVJRDAyID0gJ3QyV2VSUmRBRmVJJztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB3ZWIgZm9udCBsb2FkZWRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLndlYkZvbnRMb2FkZWQgPSBmYWxzZTtcblxuICB9XG5cblxuICBzd2l0Y2hNb2RlKCl7XG5cbiAgICB2YXIgaSwga2V5LCBsZW4sIHBhcmFtLCByZWYsIHJlZjEsIHZhbHVlO1xuXG4gICAgcmVmID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykuc3BsaXQoJyYnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcGFyYW0gPSByZWZbaV07XG4gICAgICByZWYxID0gcGFyYW0uc3BsaXQoJz0nKSwga2V5ID0gcmVmMVswXSwgdmFsdWUgPSByZWYxWzFdO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMua2V5cy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtleXNbal07XG5cbiAgICAgICAgLy8g44OR44Op44Oh44O844K/44GM44Kt44O844Go5LiA57eS44Gg44Gj44Gf44KJXG4gICAgICAgIGlmIChvYmoua2V5ID09PSBrZXkpIHtcblxuICAgICAgICAgIC8vIOWQhOWApOOBqOavlOi8g1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgb2JqLnZhbHVlLmxlbmd0aDsgaysrKSB7XG5cbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmoudmFsdWVba107XG5cbiAgICAgICAgICAgIC8vIOOCreODvOOCknRoaXMua2V5c+OBrmtleeOBq+OAgXZhbHVl44KS5q+U6LyD44GX44Gm5ZCM5YCk44Gg44Gj44Gf44KC44Gu44GrXG4gICAgICAgICAgICBpZiAodmFsID09PSB2YWx1ZSkgdGhpc1tvYmoua2V5XSA9IHZhbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH07XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgfTtcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9Db25mLmVzNiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBEYXRhXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kRGF0YSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyB0aGlzLkFUQVJJMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvYXRhcmkvQXRhcmlfMDQud2F2JztcbiAgICAvLyB0aGlzLkFUQVJJMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvYXRhcmkvQXRhcmlfMDUud2F2JztcblxuICAgIC8vIHRoaXMuQkFOMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDEud2F2JztcbiAgICAvLyB0aGlzLkJBTjAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CYS1uXzAyLndhdic7XG4gICAgLy8gdGhpcy5CQU4wMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmEtbl8wMy53YXYnO1xuICAgIC8vIHRoaXMuQkFOMDQgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDQud2F2JztcblxuICAgIC8vIHRoaXMuRE9OMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JpZ19Eb25fMDEud2F2JztcbiAgICAvLyB0aGlzLkRPTjAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CaWdfRG9uXzAyLndhdic7XG4gICAgLy8gdGhpcy5ET04wMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmlnX0Rvbl8wMy53YXYnO1xuICAgIC8vIHRoaXMuRE9OMDQgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0Rvbl8wNC53YXYnO1xuXG4gICAgLy8gdGhpcy5ET0ROMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0RvZG9uXzAxLndhdic7XG4gICAgLy8gdGhpcy5ET0ROMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0RvZG9uXzAyLndhdic7XG5cbiAgICAvLyB0aGlzLkdvZ29nbzAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Hb2dvZ29fMDEud2F2JztcbiAgICAvLyB0aGlzLkdvZ29nbzAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Hb2dvZ29fMDIud2F2JztcblxuICAgIC8vIHRoaXMuSUtBUkkgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvaWthcmkvSWthcmlfMDEud2F2JztcblxuICAgIC8vIHRoaXMuUk9VTEVUVEUwMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMS53YXYnO1xuICAgIC8vIHRoaXMuUk9VTEVUVEUwMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMi53YXYnO1xuICAgIC8vIHRoaXMuUk9VTEVUVEUwMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMy53YXYnO1xuXG4gICAgLy8gdGhpcy5TRUEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvc2VhL1NlYSZrYW1vbWVfMDEud2F2JztcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EYXRhL1NvdW5kLmVzNiIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFV0aWxcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTsgLy91c2VyYWdlbnRcbiAgICB0aGlzLmFwcFYgPSB3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTsgLy9hcHBWZXJzaW9uXG4gICAgdGhpcy5pc1Jlc1NQID0gbnVsbDsgLy8gcmVzcG9uc2l2ZSBzcFxuICAgIHRoaXMuaXNSZXNQQyA9IG51bGw7IC8vIHJlc3BvbnNpdmUgcGNcblxuICAgIHRoaXMuaXNQQyA9IG51bGw7XG4gICAgdGhpcy5pc1NQID0gbnVsbDtcbiAgICB0aGlzLmlzVEFCID0gbnVsbDtcbiAgICB0aGlzLmlzTUIgPSBudWxsO1xuXG4gICAgdGhpcy5pc0lFID0gbnVsbDtcblxuICAgIHRoaXMuaXNTZXRTUFNpemUgPSBmYWxzZTtcblxuXG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBudWxsO1xuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBNYXRoXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIFxuICAvLyDjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG1pbiA6IOacgOWwj+WApChpbnQpXG4gIC8vIEBtYXggOiDmnIDlpKflgKQoaW50KVxuICAvLyByZXR1cm4gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByYW5kb20obWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKChtYXggKyAxKSAtIG1pbikgKyBtaW4pKTtcblxuICB9XG4gICAgICBcbiAgLy8g44Op44Oz44OA44Og44Gq5pW05pWw44KSMuOBpOOBruevhOWbsuOBi+OCieWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbWluMSA6IOacgOWwj+WApDEoaW50KVxuICAvLyBAbWF4MSA6IOacgOWkp+WApDEoaW50KVxuICAvLyBAbWluMiA6IOacgOWwj+WApDIoaW50KVxuICAvLyBAbWF4MiA6IOacgOWkp+WApDIoaW50KVxuICAvLyByZXR1cm4gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByYW5kb20yKG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgICBcbiAgICBpZiAodGhpcy5oaXQoMikpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4xLCBtYXgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjIsIG1heDIpO1xuICAgIH1cblxuICB9XG4gICAgICBcbiAgLy8gMS9AcmFuZ2Xjga7norrnjofjgad0cnVl44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEByYW5nZSA6IOavjeaVsChpbnQpXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaGl0KHJhbmdlKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oMCwgcmFuZ2UgLSAxKSA9PT0gMDtcblxuICB9XG4gIFxuICAvLyAw44GL44KJ56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pW05pWw44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgOiDnr4Tlm7IoaW50KVxuICAvLyByZXR1cm4gOiDjg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByYW5nZSh2YWwpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgtdmFsLCB2YWwpO1xuXG4gIH1cbiAgXG4gIC8vIOWApOOCkuODnuODg+ODlOODs+OCsFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog44Oe44OD44OU44Oz44Kw44GZ44KL5YCkKE51bWJlcilcbiAgLy8gQHJlc01pbiA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEByZXNNYXggOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1pbiA6IOWFg+OBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWF4IDog5YWD44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gcmV0dXJuIDog44Oe44OD44OU44Oz44Kw44GV44KM44Gf5YCkKE51bWJlcilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbWFwKG51bSwgcmVzTWluLCByZXNNYXgsIGJhc2VNaW4sIGJhc2VNYXgpIHtcblxuICAgIHZhciBwO1xuICAgIGlmIChudW0gPCBiYXNlTWluKSB7XG4gICAgICByZXR1cm4gcmVzTWluO1xuICAgIH1cbiAgICBpZiAobnVtID4gYmFzZU1heCkge1xuICAgICAgcmV0dXJuIHJlc01heDtcbiAgICB9XG4gICAgcCA9IChyZXNNYXggLSByZXNNaW4pIC8gKGJhc2VNYXggLSBiYXNlTWluKTtcblxuICAgIHJldHVybiAoKG51bSAtIGJhc2VNaW4pICogcCkgKyByZXNNaW47XG5cbiAgfSAgICBcbiAgXG4gIC8vIOaVsOWApOOBq+Wwj+aVsOeCueesrEBu5L2N44G+44Gn44KS44Gk44GR44Gf5paH5a2X5YiX44KS6L+U44GZXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDlgKQoTnVtYmVyKVxuICAvLyBAbiA6IOWwj+aVsOeCueOBruS9jShpbnQpXG4gIC8vIHJldHVybiA6IOWkieaPm+OBleOCjOOBn+WApChTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRlY2ltYWwobnVtLCBuKSB7XG4gICAgdmFyIGksIHBvcztcbiAgICBudW0gPSBTdHJpbmcobnVtKTtcbiAgICBwb3MgPSBudW0uaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBudW0uc3BsaXQoXCIuXCIpWzBdO1xuICAgIH1cbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgbnVtICs9IFwiLlwiO1xuICAgICAgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgbnVtICs9IFwiMFwiO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH1cbiAgICBudW0gPSBudW0uc3Vic3RyKDAsIHBvcykgKyBudW0uc3Vic3RyKHBvcywgbiArIDEpO1xuICAgIHJldHVybiBudW07XG4gIH1cblxuICBjbGFtcChudW1lcmF0b3IsZGVub21pbmF0b3IsdmFsKSB7XG5cbiAgICByZXR1cm4gdmFsICogKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKTtcblxuICB9XG5cbiAgZGVncmVlKHJhZGlhbnMpIHtcblxuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTsgLy8x44Op44K444Ki44Oz44GM5L2V5bqm44GLXG5cbiAgfVxuXG4gIC8vIHRvIHJhZGlhbnNcbiAgcmFkaWFuKGFuZ2xlKSB7IFxuXG4gICAgcmV0dXJuIGFuZ2xlICogTWF0aC5QSSAvIDE4MDsgLy8x5bqm5L2V44Op44K444Ki44Oz44GLXG5cbiAgfVxuXG4gIGRpc3QocDEsIHAyKSB7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XG5cbiAgfVxuXG4gIGFzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEwLDksNSwzLDFcblxuICB9XG5cbiAgZGVzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MSwzLDUsOSwxMFxuXG4gIH1cblxuICAvLyBtYXAodmFsdWUsIG1pbjAxLCBtYXgwMSwgbWluMDIsIG1heDAyKSB7XG5cbiAgLy8gICB2YXIgZGlzMDEgPSBtYXgwMSAtIG1pbjAxO1xuICAvLyAgIHZhciBkaXMwMiA9IG1heDAyIC0gbWluMDJcblxuICAvLyAgIHZhciByYXRlID0gZGlzMDIgLyBkaXMwMTtcblxuICAvLyAgIHZhbHVlID0gdmFsdWUgKiByYXRlO1xuXG4gIC8vICAgcmV0dXJuIHZhbHVlO1xuICAvLyB9XG5cbiAgY29uc3RyYWluKHZhbHVlLCBtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgodmFsdWUsIG1pbikpO1xuXG4gICAgLy8gaWYgKHZhbHVlIDw9IGxvdykgdmFsdWUgPSBsb3c7XG4gICAgLy8gaWYgKHZhbHVlID49IGhpZ2gpIHZhbHVlID0gaGlnaDsgICAgIFxuICAgIC8vIHJldHVybiB2YWx1ZTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBBcnJheVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyDphY3liJflhoXjga7jg6njg7Pjg4Djg6DjgarlgKTjgpLjgbLjgajjgaTlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGFyciA6IOmFjeWIl1xuICAvLyByZXR1cm4gOiDphY3liJflhoXjga7lgKRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXJyUmFuZChhcnIpIHtcblxuICAgIHJldHVybiBhcnJbdGhpcy5yYW5kb20oMCwgYXJyLmxlbmd0aCAtIDEpXTtcblxuICB9ICAgIFxuICAgIFxuICAvLyDphY3liJfjgpLjg6njg7Pjg4Djg6DjgavkuKbjgbnmm7/jgYhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGFyciA6IOmFjeWIlyhBcnJheSlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2h1ZmZsZShhcnkpIHtcblxuICAgIHZhciBhcnIgPSBbXTtcbiAgICBhcnIgPSBhcnkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IGFyci5sZW5ndGg7XG4gICAgd2hpbGUoaSl7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppKTtcbiAgICAgIHZhciB0ID0gYXJyWy0taV07XG4gICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICBhcnJbal0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxuICAvLyDjg6njg7Pjg4Djg6DjgarmlbDlgKTjgpLkvZzjgotcbiAgcmFuZG9tQXJyIChsZW4pIHtcblxuICAgIHZhciBhcnIgPSBuZXcgQXJyYXk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSBhcnIucHVzaChpKTtcblxuICAgIGFyciA9IHRoaXMuc2h1ZmZsZUFyeShhcnIpO1xuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbiAgLy8gbnVsbOOCkuWJiumZpOOBl+OBn+mFjeWIl+OCkui/lOOBmVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAYXJyIDog6YWN5YiXKEFycmF5KVxuICAvLyByZXR1cm4gOiBudWxs5YmK6Zmk44GX44Gf6YWN5YiXKEFycmF5KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzbGljZU51bGwoYXJyKSB7XG5cbiAgICB2YXIgaSwgbCwgbGVuMSwgbmV3QXJyLCB2YWw7XG4gICAgbmV3QXJyID0gW107XG4gICAgZm9yIChpID0gbCA9IDAsIGxlbjEgPSBhcnIubGVuZ3RoOyBsIDwgbGVuMTsgaSA9ICsrbCkge1xuICAgICAgdmFsID0gYXJyW2ldO1xuICAgICAgaWYgKHZhbCAhPT0gbnVsbCkge1xuICAgICAgICBuZXdBcnIucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyO1xuXG4gIH0gICAgXG4gIFxuICAvLyDphY3liJflhoXjga7jg5Hjg6njg6Hjg7zjgr/jgpLmr5TovIPjgZfjgabjgr3jg7zjg4hcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGFyciA6IOmFjeWIlyhBcnJheSlcbiAgLy8gQHBhcmEgOiDjg5Hjg6njg6Hjg7zjgr/jg7zlkI1cbiAgLy8gQGRlc2MgOiDpmY3poIbjgYvjganjgYbjgYsoYm9vbGVhbikg44OH44OV44Kp44Or44OI44Gv5piH6aCGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNvcnQoYXJyLCBwYXJhLCBkZXNjKSB7XG4gICAgaWYgKGRlc2MgPT09IHZvaWQgMCkge1xuICAgICAgZGVzYyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZGVzYykge1xuICAgICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGJbcGFyYV0gLSBhW3BhcmFdO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBhW3BhcmFdIC0gYltwYXJhXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEtleShsaXN0LHZhbHVlKSB7XG4gICAgICB2YXIgcmV0dXJuS2V5ID0gW107XG4gICAgICBmb3IodmFyIGtleSBpbiBsaXN0KXtcbiAgICAgICAgICBpZiAobGlzdFtrZXldID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybktleS5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVybktleTtcbiAgfVxuXG4gIC8vIOODpuODi+ODvOOCr0lE44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVuaXF1ZSgpIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB9XG4gIFxuICAvLyAqKmpxdWFyeeS9v+eUqFxuICAvLyDjg5zjgr/jg7Pjg6Ljg7zjg4nlpInmm7RcbiAgLy8gdHJ1ZeOBquOCieOCq+ODvOOCveODq+OBjOODneOCpOODs+OCv+ODvOOBruW9ouOBq1xuICAvLyBmYWxzZeOBquOCieODh+ODleOCqeODq+ODiOOBruOCq+ODvOOCveODq+OBq1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAZmxnIDog6YGp55So44GZ44KL44GL44Gp44GG44GLKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJ1dHRvbk1vZGUoZmxnKSB7XG5cbiAgICBpZiAoZmxnKSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcImRlZmF1bHRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIGRldmljZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0RldmljZVNQKCl7XG5cbiAgICB2YXIgbWVkaWEgPSBbXCJpcGhvbmVcIixcImlwb2RcIixcImlwYWRcIixcImFuZHJvaWRcIixcImRyZWFtXCIsXCJjdXBjYWtlXCIsXCJibGFja2JlcnJ5OTUwMFwiLFwiYmxhY2tiZXJyeTk1MzBcIixcImJsYWNrYmVycnk5NTIwXCIsXCJibGFja2JlcnJ5OTU1MFwiLFwiYmxhY2tiZXJyeTk4MDBcIixcIndlYm9zXCIsXCJpbmNvZ25pdG9cIixcIndlYm1hdGVcIl07XG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG1lZGlhLmpvaW4oXCJ8XCIpLFwiaVwiKTtcblxuICAgIHZhciBiID0gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlU1AnKTtcblxuICAgIHRoaXMuaXNTUCA9IGI7XG5cbiAgfVxuICBpc0RldmljZVRBQigpe1xuXG4gICAgdmFyIGIgPSAodGhpcy51YS5pbmRleE9mKFwid2luZG93c1wiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJ0b3VjaFwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImlwYWRcIikgIT0gLTFcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcIm1vYmlsZVwiKSA9PSAtMSlcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJmaXJlZm94XCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcInRhYmxldFwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImtpbmRsZVwiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwic2lsa1wiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwicGxheWJvb2tcIikgIT0gLTE7XG4gICAgaWYgKGIpICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VUQUInKTtcblxuICAgIHRoaXMuaXNUQUIgPSBiO1xuXG4gIH1cblxuICBpc0RldmljZU1CKCl7XG5cbiAgICB2YXIgYiA9ICh0aGlzLnVhLmluZGV4T2YoXCJ3aW5kb3dzXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcInBob25lXCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiaXBob25lXCIpICE9IC0xXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJpcG9kXCIpICE9IC0xXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgIT0gLTEpXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiZmlyZWZveFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJibGFja2JlcnJ5XCIpICE9IC0xO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlTUInKTtcblxuICAgIHRoaXMuaXNNQiA9IGI7XG5cbiAgfVxuXG4gIGlzRGV2aWNlUEMoKXtcblxuICAgIGlmICghKHRoaXMuaXNTUCB8fCB0aGlzLmlzVEFCIHx8IHRoaXMuaXNNQikpIHtcbiAgICAgIFxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZVBDJyk7XG4gICAgICB0aGlzLmlzUEMgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgdGhpcy5pc1BDID0gZmFsc2U7XG5cbiAgfVxuXG4gIC8vIOOCueODnuODleOCqeWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzU210KCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAwO1xuXG4gIH1cblxuICAvLyDjgr/jg5bjg6zjg4Pjg4jnq6/mnKvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1RhYmxldCgpIHtcblxuICAgIHJldHVybiB0aGlzLmlzSXBhZCgpIHx8ICh0aGlzLmlzQW5kcm9pZCgpICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTW9iaWxlJykgPT09IC0xKTtcblxuICB9XG5cbiAgLy8gaVBhZOWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSXBhZCgpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDA7XG5cbiAgfVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBPU1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBBbmRyb2lk5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNBbmRyb2lkKCkge1xuXG4gICAgdmFyIHU7XG4gICAgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgcmV0dXJuIHUuaW5kZXhPZignQmxhY2tCZXJyeScpID4gMCB8fCB1LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDAgfHwgdS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPiAwO1xuXG4gIH1cblxuICBpc2lQaG9uZSgpe1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcImlwaG9uZVwiLFwiaVwiKTtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuICB9XG5cbiAgLy8gaU9T5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJb3MoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBob25lJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBvZCcpID4gMDtcblxuICB9XG5cbiAgLy8gUFMz5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNQczMoKSB7XG5cbiAgICB2YXIgdTtcbiAgICB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICByZXR1cm4gdS5pbmRleE9mKCdQTEFZU1RBVElPTiAzJykgPiAwO1xuXG4gIH1cbiAgICBcbiAgLy8gVklUQeWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzVml0YSgpIHtcblxuICAgIHZhciB1O1xuICAgIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHJldHVybiB1LmluZGV4T2YoJ1BsYXlTdGF0aW9uIFZpdGEnKSA+IDA7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgYnJvd3NlclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSUXjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llKCkge1xuXG4gICAgdmFyIHVhO1xuICAgIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdWEuaW5kZXhPZignbXNpZScpICE9PSAtMSB8fCB1YS5pbmRleE9mKCd0cmlkZW50LzcnKSAhPT0gLTE7XG5cbiAgfVxuXG4gIC8vIFdJTuOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzV2luKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKFwiV2luXCIpICE9PSAtMTtcblxuICB9XG5cbiAgLy8gZ29vZ2xlQ2hyb21l44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNDaHJvbWUoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IDA7XG5cbiAgfSAgICBcbiAgXG4gIC8vIEZpcmVGb3jjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0ZGKCkge1xuXG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcblxuICB9XG5cbiAgaXNTYWZhcmkoKXtcblxuICAgIGlmKHRoaXMudWEuaW5kZXhPZihcImNocm9tZVwiKSAhPSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmKHRoaXMudWEuaW5kZXhPZihcImx1bmFzY2FwZVwiKSAhPSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcInNhZmFyaVwiLFwiaVwiKTtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuXG4gIH1cblxuICBpc09wZXJhKCl7XG5cbiAgICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcIm9wZXJhXCIsXCJpXCIpO1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcblxuICB9XG5cbiAgLy8gaU9T44Guc2FmYXJp5Lul5aSW44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJT1NVaVZpZXcoKSB7XG5cbiAgICB2YXIgYTtcbiAgICBhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ3NhZmFyaScpID09PSAtMSkgfHwgKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ2NyaW9zJykgPiAwKSB8fCAodGhpcy5pc0lvcygpICYmIGEuaW5kZXhPZignZ3NhJykgPiAwKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICB2ZXJzaW9uXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJRTjku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llOFVuZGVyKCkge1xuXG4gICAgdmFyIG1zaWU7XG4gICAgbXNpZSA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgbXNpZSA9IG1zaWUuaW5kZXhPZignbXNpZScpID4gLTEgPyBwYXJzZUludChtc2llLnJlcGxhY2UoLy4qbXNpZVsgXS8sICcnKS5tYXRjaCgvXlswLTldKy8pKSA6IDA7XG4gICAgcmV0dXJuIG1zaWUgPD0gOCAmJiBtc2llICE9PSAwO1xuXG4gIH1cbiAgICBcbiAgLy8gSUU55Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZTlVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDkgJiYgbXNpZSAhPT0gMDtcblxuICB9XG5cbiAgLy8gSUUxMOS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWUxMFVuZGVyKCkge1xuXG4gICAgdmFyIG1zaWU7XG4gICAgbXNpZSA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgbXNpZSA9IG1zaWUuaW5kZXhPZignbXNpZScpID4gLTEgPyBwYXJzZUludChtc2llLnJlcGxhY2UoLy4qbXNpZVsgXS8sICcnKS5tYXRjaCgvXlswLTldKy8pKSA6IDA7XG4gICAgcmV0dXJuIG1zaWUgPD0gMTAgJiYgbXNpZSAhPT0gMDtcblxuICB9XG5cbiAgLy8gSUUxMeS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWUxMVVuZGVyKCkge1xuXG4gICAgdmFyIGIgPSB0aGlzLmlzSWUxMFVuZGVyKCkgfHwgKHRoaXMudWEuaW5kZXhPZihcInRyaWRlbnRcIikgIT0gLTEpO1xuICAgIHJldHVybiBiO1xuICAgIC8vIHJldHVybiB0cnVlO1xuXG4gIH1cblxuICAvLyBlZGdl44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNFZGdlKCkge1xuXG4gICAgbG9nKHRoaXMudWEuaW5kZXhPZihcIkFwcGxlV2Via2l0XCIpLHRoaXMudWEuaW5kZXhPZihcIkVkZ2VcIiksdGhpcy51YSx0aGlzLmFwcFYpO1xuICAgIHZhciBiID0gKHRoaXMudWEuaW5kZXhPZihcImFwcGxld2Via2l0XCIpID49IDAgJiYgdGhpcy51YS5pbmRleE9mKFwiZWRnZVwiKSAhPSAtMSk7XG4gICAgcmV0dXJuIGI7XG4gICAgLy8gcmV0dXJuIHRydWU7XG5cbiAgfVxuXG4gIGlzSUVWZXJzaW9uKCl7XG5cbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llJyk7XG4gICAgdGhpcy5pc0lFID0gdHJ1ZTtcbiAgICAgIFxuICAgIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgMTAuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llMTAnKTtcbiAgICAgIHJldHVybiAnaWUxMCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgOS5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU5Jyk7XG4gICAgICByZXR1cm4gJ2llOSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgOC5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU4Jyk7ICBcbiAgICAgIHJldHVybiAnaWU4JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA3LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTcnKTtcbiAgICAgIHJldHVybiAnaWU3JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA2LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTYnKTtcbiAgICAgIHJldHVybiAnaWU2JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwidHJpZGVudFwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTExJyk7XG4gICAgICB0aGlzLmlzSUUxMSA9IHRydWU7XG4gICAgICByZXR1cm4gJ2llMTEnO1xuICAgIH0gZWxzZSBpZiAodGhpcy51YS5pbmRleE9mKFwiYXBwbGV3ZWJraXRcIikgPj0gMCAmJiB0aGlzLnVhLmluZGV4T2YoXCJlZGdlXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRWRnZScpO1xuICAgICAgcmV0dXJuICdlZGdlJztcbiAgICB9XG5cblxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaWUnKTtcbiAgICB0aGlzLmlzSUUgPSBmYWxzZTtcblxuICB9XG5cbiAgaXNBbmRyb2lkVmVyc2lvbigpIHtcblxuICAgIGlmKCB0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gMCApIHtcblxuICAgICAgICB2YXIgdmVyc2lvbiA9IHBhcnNlRmxvYXQodGhpcy51YS5zbGljZSh0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpKzgpKTtcbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgIFxuICAgIH1cblxuICB9XG5cbiAgaXNpcGhvbmVWZXJzaW9uKCkge1xuXG4gICAgaWYoIHRoaXMudWEuaW5kZXhPZihcImlQaG9uZSBPU1wiKSA+IDAgKSB7XG5cbiAgICAgICAgdmFyIHZlcnNpb24gPSBwYXJzZUZsb2F0KHRoaXMudWEuc2xpY2UodGhpcy51YS5pbmRleE9mKFwiaVBob25lIE9TXCIpKzEwKSk7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHBvcnRyYWl0IC8gbGFuZHNjYXBlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0RpcmVjdGlvbiAoKSB7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKEggPiBXKSB7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgfWVsc2V7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHJlc3BvbnNpdmUg5qiq5bmF44KS6KaL44KLXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1Jlc3BvbnNpdmUgKGJwKSB7XG5cbiAgICBpZiAoYnA9PXVuZGVmaW5lZCkgYnA9Mzc1O1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChXID4gYnApIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gdHJ1ZTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IGZhbHNlO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBVUkxcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8g44Kv44Ko44Oq5oqc44GN5Ye644GXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBrZXkgOiDmipzjgY3lh7rjgZnjg5Hjg6njg6Hjg7zjgr/lkI0oU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnZXRRdWVyeShrZXkpIHtcblxuICAvLyAgIHZhciBxcywgcmVnZXg7XG4gIC8vICAga2V5ID0ga2V5LnJlcGxhY2UoL1vigqxbXS8sIFwi4oKs4oKs4oKsW1wiKS5yZXBsYWNlKC9b4oKsXV0vLCBcIuKCrOKCrOKCrF1cIik7XG4gIC8vICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiW+KCrOKCrD8mXVwiICsga2V5ICsgXCI9KFteJiNdKilcIik7XG4gIC8vICAgcXMgPSByZWdleC5leGVjKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgLy8gICBpZiAocXMgPT09IG51bGwpIHtcbiAgLy8gICAgIHJldHVybiBcIlwiO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICByZXR1cm4gcXNbMV07XG4gIC8vICAgfVxuXG4gIC8vIH1cblxuICBnZXRQYXJhbSgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuICAgIHZhciBwYXJhbSA9IHVybC5zcGxpdCgnPycpWzFdO1xuICAgIGlmIChwYXJhbT09dW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJhbUl0ZW1zID0gcGFyYW0uc3BsaXQoJyYnKTtcbiAgICB2YXIgbGlzdCA9IHt9O1xuICBcbiAgICBmb3IoIHZhciBpID0gMDsgaTxwYXJhbUl0ZW1zLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgcGFyYW1JdGVtID0gcGFyYW1JdGVtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICBsaXN0W3BhcmFtSXRlbVswXV0gPSBwYXJhbUl0ZW1bMV07XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcblxuICB9XG4gIFxuICAvLyDjg4/jg4Pjgrfjg6Xlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogbG9jYXRpb24uaGFzaOOBriPjgpLliYrpmaTjgZfjgZ/jgoTjgaRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaGFzaCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuXG4gIH1cblxuICAvLyBjb29raWXlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRDb29raWUoa2V5KSB7XG5cbiAgICB2YXIgYSwgYXJyLCBpLCBsLCBsZW4xLCB2YWw7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSA9PT0gdm9pZCAwIHx8IGRvY3VtZW50LmNvb2tpZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGEgPSB2YWwuc3BsaXQoXCI9XCIpO1xuICAgICAgaWYgKGFbMF0gPT09IGtleSkge1xuICAgICAgICByZXR1cm4gYVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfSAgICAgIFxuXG4gIC8vIGNvb2tpZeioreWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAa2V5IDog44OR44Op44Oh44O844K/5ZCNXG4gIC8vIEB2YWwgOiDlgKRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0Q29va2llKGtleSwgdmFsKSB7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWw7XG5cbiAgfVxuICBcbiAgaXNQQ1NQKCkge1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWY7XG5cbiAgICBpZiAoIXRoaXMuaXNQQyAmJiAhdGhpcy5pc1RBQiAmJiAodXJsLmluZGV4T2YoJ3BjJykgIT0gLTEpKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbic7XG4gICAgXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlzUEMgJiYgdXJsLmluZGV4T2YoJ3BjJykgPT0gLTEpIHtcblxuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuL3BjLyc7XG4gICAgXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlzVEFCICYmIHVybC5pbmRleE9mKCdwYycpID09IC0xKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbi9wYy8nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc0NvbnRhaW4odXJsLCdyb3VsZXR0ZScpKSBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuICAgIGlmICh0aGlzLmlzQ29udGFpbih1cmwsJ3RvcGljcycpKSBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIENvbG9yXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIHJnYuOBi+OCiUhFWOOCq+ODqeODvOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAciA6IDB+MjU1XG4gIC8vIEBnIDogMH4yNTVcbiAgLy8gQGIgOiAwfjI1NVxuICAvLyByZXR1cm4gOiBleCBcIiNGRkZGRkZcIlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRIZXhDb2xvcihyLGcsYikge1xuICAgICAgdmFyIHN0cjtcbiAgICAgIHN0ciA9IChyIDw8IDE2IHwgZyA8PCA4IHwgYikudG9TdHJpbmcoMTYpO1xuICAgICAgcmV0dXJuIFwiI1wiICsgbmV3IEFycmF5KDcgLSBzdHIubGVuZ3RoKS5qb2luKFwiMFwiKSArIHN0cjtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgU3RyaW5nXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzQ29udGFpbihzdHIsY29udGFpbikge1xuXG4gICAgLy8gc3Ry44Gu5Lit44GrLGNvbnRhaW7jgYzlrZjlnKjjgZfjgZ/jgolcbiAgICBpZiAoIHN0ci5pbmRleE9mKGNvbnRhaW4pICE9IC0xICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICAvLyAw5Z+L44KB44GnMuahgeOBq+OBmeOCi+mWouaVsFxuICBhZGQwKHN0cixudW09LTIpe1xuICAgIFxuICAgIHJldHVybiAoIFwiMDAwMDAwMDAwMDAwXCIgKyBzdHIgKS5zdWJzdHIoIG51bSApO1xuXG4gIH1cblxuICBmbG9hdEZvcm1hdCggbnVtYmVyLCBuICkge1xuXG4gICAgdmFyIF9wb3cgPSBNYXRoLnBvdyggMTAgLCBuICkgO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCBudW1iZXIgKiBfcG93ICkgLyBfcG93IDtcblxuICB9XG4gICAgXG4gIC8vIOWApOauteihqOiomFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcmljZShudW0pIHtcblxuICAgIHJldHVybiBTdHJpbmcobnVtKS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csICckMSwnKTtcblxuICB9XG5cbiAgLy8g5paH5a2X5YiX44KS5Y+N6LuiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBzdHIgOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyByZXR1cm4gOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdHJSZXZlcnNlKHN0cikge1xuXG4gICAgdmFyIGksIGxlbiwgcmVzO1xuICAgIHJlcyA9IFwiXCI7XG4gICAgbGVuID0gc3RyLmxlbmd0aDtcbiAgICBpID0gMTtcbiAgICB3aGlsZSAoaSA8PSBsZW4pIHtcbiAgICAgIHJlcyArPSBzdHIuc3Vic3RyKC1pLCAxKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcblxuICB9XG4gIFxuICAvLyDmloflrZfliJfjga7lhajnva7mj5tcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCAgOiDmloflrZfliJdcbiAgLy8gQG9lZyAgOiDnva7mj5vliY3jga7mloflrZfliJdcbiAgLy8gQGRlc3QgOiDnva7mj5vlvozjga7mloflrZfliJdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVwbGFjZUFsbCh2YWwsIG9yZywgZGVzdCkge1xuXG4gICAgcmV0dXJuIHZhbC5zcGxpdChvcmcpLmpvaW4oZGVzdCk7XG5cbiAgfSAgICBcbiAgXG4gIHN0clJlcGxhY2Uoc3RyLCBiZWZvcmUsIGFmdGVyKSB7XG5cbiAgICB2YXIgciA9IG5ldyBSZWdFeHAoIGJlZm9yZSwgJ2cnKTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZSggciAsIGFmdGVyICk7XG5cbiAgfSAgICBcbiAgXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0ZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXROb3coKSB7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCk7XG5cbiAgfVxuXG4gIGVsYXBzZWQoKSB7XG5cbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWU7XG5cbiAgfVxuXG4gIG0oKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vciggdGhpcy5lbGFwc2VkVGltZSArIDEwMCAvIDYwICk7XG5cbiAgfVxuXG4gIHMoKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmVsYXBzZWRUaW1lIC8gMTAwMCk7XG5cbiAgfVxuXG4gIG1zKCkge1xuXG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZFRpbWU7XG4gICAgXG4gIH1cblxuICB0aW1lKCkge1xuXG4gICAgdGhpcy5nZXROb3coKTtcblxuICAgIHRoaXMuaG91ciA9IHRoaXMubm93LmdldEhvdXJzKCk7ICAgICAgICAgIC8vIOaZglxuICAgIHRoaXMubWludXRlID0gdGhpcy5ub3cuZ2V0TWludXRlcygpOyAgICAgIC8vIOWIhlxuICAgIHRoaXMuc2Vjb25kID0gdGhpcy5ub3cuZ2V0U2Vjb25kcygpO1xuICAgIHRoaXMubWlsbFNlY29uZCA9IHRoaXMubm93LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIH1cblxuICBkYXRlKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldERhdGUoKTtcblxuICB9XG5cbiAgbW9udGhzKCkge1xuXG4gICAgdmFyIG1vbnRoZGF5cyA9IG5ldyBBcnJheSgzMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxKTtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRNb250aCgpICsgMTtcblxuICB9XG5cbiAgeWVhcigpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRGdWxsWWVhcigpO1xuXG4gIH1cblxuICBkYXkoKSB7XG5cbiAgICAvLyDmm5zml6UgKOaXpeacrOiqnilcbiAgICB2YXIgd2Vla0RheUpQID0gW1wi5pelXCIsXCLmnIhcIixcIueBq1wiLFwi5rC0XCIsXCLmnKhcIixcIumHkVwiLFwi5ZyfXCJdIDtcbiAgICB2YXIgd0RKID0gd2Vla0RheUpQW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgICAvLyDmm5zml6UgKOiLseiqnilcbiAgICB2YXIgd2Vla0RheUVOID0gW1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdIDtcbiAgICB2YXIgd0RFID0gd2Vla0RheUVOW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgfVxuICBcbiAgLy8g5pWw5pel5b6M44GuRGF0ZeOCquODluOCuOOCp+OCr+ODiOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhZnRlckRheShkYXRlLCBudW0pIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIE51bWJlcihudW0pICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0YSB0eXBlIGNoZWNrXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzT2JqZWN0KHZhbHVlLCBpZ25vcmVBcnJheSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cblxuICBpc051bWJlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH1cblxuICBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBpc051bGwodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbiAgfVxuXG4gIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgb3RoZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldEltZ1NQU2l6ZSAoJHRhcmdldCl7XG5cbiAgICAvLyByZXNwb25zaXZlIHNw44Gu44Go44GN5Yem55CGXG4gICAgaWYgKCF0aGlzLmlzUmVzU1ApIHJldHVybjtcbiAgICAvLyDkuIDluqbjgaDjgZHlh6bnkIZcbiAgICAvLyBpZiAodGhpcy5pc1NldFNQU2l6ZSkgcmV0dXJuO1xuICAgIC8vIHRoaXMuaXNTZXRTUFNpemUgPSB0cnVlO1xuXG4gICAgdmFyICRpbWcgPSAkdGFyZ2V0LFxuICAgICAgICBsZW4gPSAkaW1nLmxlbmd0aDtcblxuICAgICRpbWcuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgdmFyIHcgPSBNYXRoLmZsb29yKCQodGhpcykud2lkdGgoKSAvIDIpLFxuICAgICAgICAgICAgaCA9IE1hdGguZmxvb3IoJCh0aGlzKS5oZWlnaHQoKSAvIDIpO1xuXG4gICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAnd2lkdGgnOiB3LFxuICAgICAgICAgICAgJ2hlaWdodCc6IGgsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsZW4gPT0gaSArIDEpICQod2luZG93KS50cmlnZ2VyKCdzZXRTcFppZUVuZCcpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAg44K544Oe44Ob5pON5L2c54Sh5Yq5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRQcmV2ZW50KCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCd0b3VjaG1vdmUubm9Db250cm9sJywgZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO30pO1xuXG4gIH1cblxuICByZW1vdmVQcmV2ZW50KCkge1xuXG4gICAgJCh3aW5kb3cpLm9mZigndG91Y2htb3ZlLm5vQ29udHJvbCcpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIGhvc3QscHJvdGNvbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJvdG9jb2woKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgfVxuICAgIFxuICBob3N0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIC8vIHJldHVybiBsb2NhdGlvbi5ob3N0XG5cbiAgfVxuXG4gIHBvcnQoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucG9ydDtcblxuICB9XG4gICAgICAgIFxuICBwYXRoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdChlKSB7XG5cbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG5cbiAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBkaXNhYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ud2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2Rlcm4gc3RhbmRhcmRcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXG4gICAgd2luZG93Lm9udG91Y2htb3ZlICA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vYmlsZVxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biAgPSB0aGlzLnByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cztcblxuICB9XG5cbiAgZW5hYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9VdGlsLmVzNiIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEZ1bmNcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuYyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmJsYW5rKCk7XG4gICAgdGhpcy5kZWJ1Z2dlcigpO1xuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgdGhpcy5leHBhbmRqUXVlcnkoKTtcblxuICB9XG5cbiAgYmxhbmsoKSB7XG5cbiAgICAkKCgpPT57JCgnLmJsYW5rJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpO30pO1xuXG4gIH1cblxuICBkZWJ1Z2dlcigpIHtcblxuICAgIC8vIOODh+ODkOODg+OCsOODouODvOODieWIh+abv1xuICAgIHZhciBSRUxFQVNFID0gZ2IuaW4uY29uZi5SRUxFQVNFO1xuXG4gICAgLy8g572u5o+b5a++6LGh44Gu44Oh44K944OD44OJ44KS6YWN5YiX44Go44GX44Gm5L+d5oyB44GZ44KLXG4gICAgdmFyIG1ldGhvZHMgPSBbXG4gICAgICAnbG9nJyxcbiAgICAgICdkZWJ1ZycsXG4gICAgICAnaW5mbycsXG4gICAgICAnd2FybicsXG4gICAgICAnZXJyb3InLFxuICAgICAgJ2RpcicsXG4gICAgICAndHJhY2UnLFxuICAgICAgJ2Fzc2VydCcsXG4gICAgICAnZGlyeG1sJyxcbiAgICAgICdncm91cCcsXG4gICAgICAnZ3JvdXBFbmQnLFxuICAgICAgJ3RpbWUnLFxuICAgICAgJ3RpbWVFbmQnLFxuICAgICAgJ2NvdW50JyxcbiAgICAgICdwcm9maWxlJyxcbiAgICAgICdwcm9maWxlRW5kJ1xuICAgIF07XG5cbiAgICAvLyBjb25zb2xl44GM5L2/44GI44Gq44GE5aC05ZCI44Gv56m644Gu44Kq44OW44K444Kn44Kv44OI44KS6Kit5a6a44GX44Gm44GK44GPXG4gICAgaWYoIHR5cGVvZiB3aW5kb3cuY29uc29sZSA9PT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgd2luZG93LmNvbnNvbGUgPSB7fTtcbiAgICB9XG5cbiAgICAvLyDlkITjg6Hjgr3jg4Pjg4njgpJ3aW5kb3fjgbjnm7TmjqXov73liqDjgZfjgabooYzjgY9cbiAgICBmb3IoIHZhciBpIGluIG1ldGhvZHMgKXtcbiAgICAgIChmdW5jdGlvbiggbSApe1xuXG4gICAgICAgLy8gY29uc29sZeOBq+OBguOCi++8n+ODh+ODkOODg+OCsOODouODvOODieOBr+acieWKue+8n2NvbnNvbGXjga7jgoLjga7jga/plqLmlbDvvJ9cbiAgICAgICBpZiggY29uc29sZVttXSAmJiAhUkVMRUFTRSAmJiB0eXBlb2YgY29uc29sZVttXSA9PT0gXCJmdW5jdGlvblwiICl7XG4gICAgICAgIHdpbmRvd1ttXSA9IGNvbnNvbGVbbV0uYmluZChjb25zb2xlKTtcbiAgICAgICB9IGVsc2Uge+OAgC8vIGRlYnVnTW9kZeOBjGZhbHNlLOOCguOBl+OBj+OBr+ipsuW9k+ODoeOCveODg+ODieOBjOWtmOWcqOOBl+OBquOBhOWgtOWQiOOBr+OAgeepuuOBruODoeOCveODg+ODieOCkueUqOaEj+OBmeOCi1xuICAgICAgICB3aW5kb3dbbV0gPSBmdW5jdGlvbigpe307XG4gICAgICAgfVxuXG4gICAgICB9KSggbWV0aG9kc1tpXSApO1xuICAgIH1cblxuICB9XG5cbiAgcHJlcGVuZChwYXJhbSkge1xuXG4gICAgJCgnYm9keScpLnByZXBlbmQocGFyYW0pO1xuXG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XG5cbiAgICB2YXIgRlBTID0gMTAwMC82MDtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIGNocm9tZeOChOacgOaWsOOBrlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIOWPpOOBhGZpcmVmb3jnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAgLy8gc2FmYXJpNuS7peWJjeOAgWlPUzYgc2FmYXJp55SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgRlBTKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCB0aW1lciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07ICAgICAgXG5cbiAgfVxuXG4gIGV4cGFuZGpRdWVyeSgpIHtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgdzowLCBcbiAgICAgIGg6MCwgXG4gICAgICBhZGp1c3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0VzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0SDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBjaGVja0Nzc0JsZW5kKCkge1xuXG4gICAgaWYgKCdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1MpIHtcbiAgICAgIGlmICghd2luZG93LkNTUy5zdXBwb3J0cygnbWl4LWJsZW5kLW1vZGUnLCAnc29mdC1saWdodCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvZyhnYi5pbi51LmlzSUUpO1xuXG4gICAgaWYgKGdiLmluLnUuaXNJRSkge1xuICAgICAgXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIFxuICAgIH07XG5cbiAgfVxuXG4gIG5vdFNhdmVJbWcoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBwY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG5cbiAgICAgICQoKCk9PntcbiAgICAgICAgJChcImltZ1wiKS5vbihcImNvbnRleHRtZW51XCIsKCk9PntcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBzcCBhbmRyb2lkXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgdiA9IGdiLmluLnUuaXNBbmRyb2lkVmVyc2lvbigpO1xuXG4gICAgaWYgKHY9PXVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGlmICh2PDUpIHtcblxuICAgICAgdmFyIHRpbWVyO1xuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoc3RhcnRcIiwoKT0+e1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBhbGVydChcIueUu+WDj+OBr+S/neWtmOOBp+OBjeOBvuOBm+OCk1wiKVxuICAgICAgICB9LDUwMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaGVuZFwiLCgpPT57XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pICAgICAgXG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0Z1bmMuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBSZWFkeU1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IFJlYWR5UGVyY2VudCBmcm9tICcuLi8uLi9GdW5jL1JlYWR5UGVyY2VudC5lczYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkeU1nciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmNvbXBsZXRlZCA9IDA7XG4gICAgdGhpcy50b3RhbCA9IDA7XG4gICAgdGhpcy5jdXJyZW50ID0gMDtcblxuXG4gICAgdGhpcy5vbkNvbXBsZXRlZEZ1bmMgPSAoKT0+e307XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIHRoaXMucmVhZHlQZXJjZW50ID0gbmV3IFJlYWR5UGVyY2VudCgpO1xuXG4gIH1cblxuICBvbkNvbXBsZXRlKCkge1xuXG4gICAgLy8gdXBkYXRl5Yem55CG44KS44KE44KB44KLXG4gICAgZ2IuaW4udXAucmVtb3ZlKCdyZWFkeVBlcmNlbnQnLCB0aGlzLnJlYWR5UGVyY2VudC51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyDmupblgpnlrozkuoblvozjga7lh6bnkIZcbiAgICB0aGlzLm9uQ29tcGxldGVkRnVuYygpO1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9SZWFkeU1nci5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFJlYWR5UGVyY2VudFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHlQZXJjZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuJGxvYWRpbmcgPSAkKCcjbG9hZGluZycpO1xuICAgIHRoaXMuJGJhciA9ICQoJy5sb2FkaW5nQmFyJyk7XG4gICAgdGhpcy4kcGVyY2VudCA9ICQoJy5sb2FkaW5nUGVyY2VudCcpO1xuXG4gICAgdGhpcy5pc0xvY2sgPSBmYWxzZTtcbiAgICB0aGlzLnNldFRpbWVvdXRMb2NrID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBpZiAoIWdiLmluLmNvbmYud2ViRm9udExvYWRlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHRhcmdldCA9IChnYi5pbi5ybS5jb21wbGV0ZWQgLyBnYi5pbi5ybS50b3RhbCkgKiAxMDA7XG5cbiAgICBnYi5pbi5ybS5jdXJyZW50ICs9ICh0YXJnZXQgLSBnYi5pbi5ybS5jdXJyZW50KSAqIDAuMTtcbiAgICAvLyB0aGlzLiRiYXIuY3NzKHsgd2lkdGg6IGdiLmluLnJtLmN1cnJlbnQgKyAnJScgfSk7IC8vcGVyY2VudCDkvLjjgbDjgZlcbiAgICB0aGlzLiRwZXJjZW50LnRleHQoIE1hdGguZmxvb3IoZ2IuaW4ucm0uY3VycmVudCkgKyAnJScpO1xuXG4gICAgLy8g57WC5LqG5Yem55CGXG4gICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgPj0gMTAwICYmICF0aGlzLmlzTG9jaykge1xuICAgICAgdGhpcy5pc0xvY2sgPSB0cnVlO1xuICAgICAgZ2IuaW4ucm0ub25Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8vIGN1cnJlbnQg44GMIDk5Ljkg44KI44KK5aSn44GN44GR44KM44GwIDEwMCDjgajopovjgarjgZfjgabntYLkuoblh6bnkIbjgbhcbiAgICBpZiAoZ2IuaW4ucm0uY3VycmVudCA+IDk5LjkpIHtcbiAgICAgIGdiLmluLnJtLmN1cnJlbnQgPSAxMDA7XG4gICAgfVxuXG4gICAgLy8gaWUxMeOBryw5OeOBq+OBquOBo+OBpuOAgTXnp5LntYzjgaPjgabjgoIxMDDjgafjgarjgZHjgozjgbDjgIHlvLfliLbnmoTjgavjgIHooajnpLpcbiAgICAvLyDjgZ3jga7pmpvjgIFjb21wbGV0ZeOBl+OBpueEoeOBkeOCjOOBsOiDjOaZr+OBr+mdmeatoueUu+OBq1xuICAgIC8vIGlmIChnYi5pbi51LmlzSUUxMSkge1xuXG4gICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgPiA5OSAmJiAhdGhpcy5zZXRUaW1lb3V0TG9jaykge1xuICAgIHRoaXMuc2V0VGltZW91dExvY2sgPSB0cnVlO1xuXG4gICAgbG9nKCc5OSEhISEnKTtcbiAgICAgIC8vIGdiLmluLnJtLmN1cnJlbnQgPSA5OTtcblxuICAgICAgc2V0VGltZW91dCgoKT0+e1xuXG4gICAgICAgIGxvZygnNSEhIScpXG5cbiAgICAgICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgIT09IDEwMCkge1xuXG4gICAgICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgICAgICAgJCgnLmJnT3ZlcmxheUltZycpLmFkZENsYXNzKCdpc0FjdGl2ZScpO1xuXG4gICAgICAgICAgbG9nKCflr77lv5zvvIHvvIEnKVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gICAgICB9LDUwMDApO1xuXG4gICAgfTtcblxuICAgIC8vIH07XG5cbiAgfVxuXG4gIHJlbW92ZSgpIHtcblxuXG4gICAgVHdlZW5NYXhcbiAgICAgIC50byh0aGlzLiRsb2FkaW5nLCAyLjgsIHtcbiAgICAgICAgc2NhbGU6IDEuMixcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTooKT0+e1xuICAgICAgICAgIHRoaXMuJGxvYWRpbmcucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pICAgIFxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi51cC5hZGQoJ3JlYWR5UGVyY2VudCcsdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvUmVhZHlQZXJjZW50LmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgdXBkYXRlTWFuYWdlclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBkYXRlTWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuY250ID0gMDtcbiAgICB0aGlzLnVwZGF0ZUxpc3QgPSBbXTtcbiAgICB0aGlzLmxlbiA9IDA7XG4gICAgdGhpcy5UaW1lciA9IG51bGw7XG4gICAgdGhpcy5pc1N0b3AgPSBmYWxzZTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnVwZGF0ZUxpc3QpIHRoaXMudXBkYXRlTGlzdFtpXS5mdW5jKCk7XG5cbiAgfVxuXG4gIGxvb3AoKSB7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuY250Kys7XG5cbiAgICB0aGlzLlRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICBpZiAodGhpcy5pc1N0b3ApIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuVGltZXIpO1xuICAgIFxuXG4gIH1cblxuICBzdG9wKCkge1xuXG4gICAgdGhpcy5pc1N0b3AgPSB0cnVlO1xuXG4gIH1cblxuICByZXN1bWUoKSB7XG5cbiAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgIHRoaXMubG9vcCgpO1xuXG4gIH1cblxuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMudXBkYXRlTGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cblxuICByZW1vdmUobmFtZSkge1xuXG4gICAgdmFyIHRhcmdldCA9IHtuYW1lOm5hbWUsZnVuYzooKT0+e319O1xuXG4gICAgVXBkYXRlTWdyLmFyclJlbW92ZSh0aGlzLnVwZGF0ZUxpc3QsIHRhcmdldCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAg6Z2Z55qE44Oh44Oz44OQXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0aWMgYXJyUmVtb3ZlKGFyciAsIHRhcmdldCkge1xuXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGNoZWNrO1xuICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgY2hlY2sgPSBhcnJbIGkgXTtcblxuICAgICAgaWYoIGNoZWNrLm5hbWUgPT0gdGFyZ2V0Lm5hbWUpe1xuICAgICAgICBhcnIuc3BsaWNlKCBpICwgMSApIDtcbiAgICAgICAgaS0tO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9VcGRhdGVNZ3IuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBSZXNpemVNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc2l6ZU1nciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnJlc2l6ZUxpc3QgPSBbXTtcbiAgICB0aGlzLndzID0ge3c6MCwgaDowLCBvbGRXOi0xLCBvbGRIOi0xfTtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKGUpe3NlbGYub25SZXNpemUuY2FsbChzZWxmLGUpO30pO1xuICAgIHRoaXMuZ2V0V2luZG93U2l6ZSgpO1xuXG4gIH1cblxuICBvblJlc2l6ZShlKSB7XG5cbiAgICB0aGlzLmdldFdpbmRvd1NpemUoKTtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5yZXNpemVMaXN0KSB0aGlzLnJlc2l6ZUxpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBXKCkge1xuXG4gICAgICByZXR1cm4gdGhpcy53cy53O1xuICAgIFxuICB9XG4gIFxuICBIKCkge1xuXG4gICAgICByZXR1cm4gdGhpcy53cy5oO1xuICBcbiAgfVxuXG4gIGdldFdpbmRvd1NpemUoKXtcblxuICAgIHZhciB3ID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLndzLm9sZFcgPSB0aGlzLndzLnc7XG4gICAgdGhpcy53cy5vbGRIID0gdGhpcy53cy5oO1xuICAgIHRoaXMud3MudyA9IHc7XG4gICAgdGhpcy53cy5oID0gaDtcblxuICB9XG5cbiAgYWRkKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLnJlc2l6ZUxpc3QucHVzaChvYmopO1xuICAgIFxuICB9XG5cbiAgcmVtb3ZlKG5hbWUpIHtcblxuICAgIFJlc2l6ZU1nci5hcnJSZW1vdmUodGhpcy5yZXNpemVMaXN0LCBuYW1lKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICDpnZnnmoTjg6Hjg7Pjg5BcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0YXRpYyBhcnJSZW1vdmUoYXJyICwgbmFtZSkge1xuXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGNoZWNrO1xuICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgY2hlY2sgPSBhcnJbIGkgXTtcblxuICAgICAgaWYoIGNoZWNrLm5hbWUgPT0gbmFtZSl7XG4gICAgICAgIGFyci5zcGxpY2UoIGkgLCAxICkgO1xuICAgICAgICBpLS07XG4gICAgICAgIGxlbi0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Jlc2l6ZU1nci5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNjcm9sbE1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsTWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2Nyb2xsTGlzdCA9IFtdO1xuICAgIHRoaXMuc2Nyb2xsRW5kTGlzdCA9IFtdO1xuICAgIHRoaXMudyA9IDA7dGhpcy5oID0gMDtcbiAgICB0aGlzLnN0ID0gMDsgLy8g54++5Zyo44Guc2Nyb2xsIHRvcFxuICAgIHRoaXMuc2IgPSAwOyAvLyDnj77lnKjjga5zY3JvbGwgYm90dG9tXG4gICAgdGhpcy5zdiA9IDA7IC8vIOePvuWcqOOBruOCueOCr+ODreODvOODq+mHj1xuXG4gICAgdGhpcy5TVEFtb3VudCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuXG4gICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5nZXRXaW5kb3dTaXplKCk7XG4gICAgdGhpcy5hZGQoJ2VuZCcsdGhpcy5lbmQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG4gIGFkZChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy5zY3JvbGxMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuXG4gIHJlbW92ZShuYW1lKSB7XG5cbiAgICBTY3JvbGxNZ3IuYXJyUmVtb3ZlKHRoaXMuc2Nyb2xsTGlzdCwgbmFtZSk7XG5cbiAgfVxuXG4gIHJlbW92ZSh0YXJnZXQpIHtcblxuICAgIFNjcm9sbE1nci5hcnJSZW1vdmUodGhpcy5zY3JvbGxMaXN0LCB0YXJnZXQpO1xuXG4gIH1cblxuICBvblJlc2l6ZShlKSB7XG5cbiAgICB0aGlzLmdldFdpbmRvd1NpemUoKTtcblxuICB9XG5cbiAgb25TY3JvbGwoZSkge1xuXG4gICAgaWYgKHRoaXMuaXNTdGFydCkge1xuICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG4gICAgICAvLyBsb2coJ3Jlc2l6ZVN0YXJ0Jyk7XG4gICAgICAvLyDmnIDliJ3jgaDjgZHjga7lh6bnkIZcbiAgICB9O1xuXG4gICAgdGhpcy5zdCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB0aGlzLnNiID0gdGhpcy5zdCArIHRoaXMuaDtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zY3JvbGxMaXN0KSB0aGlzLnNjcm9sbExpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBvbk1vdXNlV2hlZWwoZSxkZWx0YSxkZWx0YVgsZGVsdGFZKSB7XG5cbiAgICB0aGlzLlNUQW1vdW50ID0gZGVsdGFZO1xuICAgIGlmIChnYi5pbi51LmlzV2luKCkpIHRoaXMuU1RBbW91bnQgKj0gNjA7XG4gICAgaWYgKGdiLmluLnUuaXNGRigpICYmICFnYi5pbi51LmlzV2luKCkpIHRoaXMuU1RBbW91bnQgKj0gNjA7XG4gICAgLy8gaWYgKE1hdGguYWJzKHRoaXMuU1RBbW91bnQpID4gMTApIHRoaXMuU1RBbW91bnQgKj0gMC40O1xuICAgIHRoaXMub2Zmc2V0ICs9IHRoaXMuU1RBbW91bnQ7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2Nyb2xsTGlzdCkgdGhpcy5zY3JvbGxMaXN0W2ldLmZ1bmMoKTtcblxuICB9XG5cbiAgZ2V0V2luZG93U2l6ZSgpe1xuXG4gICAgdGhpcy53ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIH1cblxuICBlbmQoZSkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLlRpbWVyKTtcbiAgICB0aGlzLlRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuaXNTdGFydCA9IHRydWU7XG4gICAgICAvLyBsb2coJ3Jlc2l6ZUVuZCcpO1xuXG4gICAgICBmb3IgKHZhciBpIGluIHNlbGYuc2Nyb2xsRW5kTGlzdCkgc2VsZi5zY3JvbGxFbmRMaXN0W2ldKCk7XG5cbiAgICB9LCAyMDApO1xuXG4gIH1cblxuICBhZGRGaXhlZE9iamVjdFNjcm9sbCgkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLnNjcm9sbExpc3QucHVzaChmdW5jdGlvbigpe1xuXG4gICAgICAkdGFyZ2V0LmNzcyhcImxlZnRcIiwgLSQod2luZG93KS5zY3JvbGxMZWZ0KCkpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIChlKT0+e3RoaXMub25SZXNpemUoZSk7fSk7XG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCAoZSk9Pnt0aGlzLm9uU2Nyb2xsKGUpO30pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZXdoZWVsJywgKGUsZGVsdGEsZGVsdGFYLGRlbHRhWSk9Pnt0aGlzLm9uTW91c2VXaGVlbChlLGRlbHRhLGRlbHRhWCxkZWx0YVkpO30pO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIOmdmeeahOODoeODs+ODkFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGljIGFyclJlbW92ZShhcnIgLCBuYW1lKSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSBuYW1lKXtcbiAgICAgICAgYXJyLnNwbGljZSggaSAsIDEgKSA7XG4gICAgICAgIGktLTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvU2Nyb2xsTWdyLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTW91c2VNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlTWdyIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0ID0gJChkb2N1bWVudCkpIHtcblxuICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXQ7XG5cbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG5cbiAgICB0aGlzLmN4ID0gMDtcbiAgICB0aGlzLmN5ID0gMDtcblxuICAgIHRoaXMubW91c2VNb3ZlTGlzdCA9IFt7bmFtZTonZGVmJyxmdW5jOigpPT57fX1dO1xuICAgIHRoaXMubW91c2VNb3ZlU3RhcnRMaXN0ID0gW3tuYW1lOidkZWYnLGZ1bmM6KCk9Pnt9fV07XG4gICAgdGhpcy5tb3VzZU1vdmVFbmRMaXN0ID0gW3tuYW1lOidkZWYnLGZ1bmM6KCk9Pnt9fV07XG5cbiAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xuICAgIHRoaXMuVGltZXIgPSBudWxsO1xuICAgIHRoaXMuZW5kVGltZSA9IDEwO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdGhpcy5hZGQoJ29uRW5kJywgdGhpcy5vbkVuZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgb25Ub3VjaG1vdmUoZSkge1xuXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy54ID0gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYOyBcbiAgICB0aGlzLnkgPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgfVxuXG4gIG9uTW91c2Vtb3ZlKGUpIHtcblxuICAgIC8vIGxvZyh0aGlzLm1vdXNlTW92ZUxpc3QpO1xuXG4gICAgaWYgKHRoaXMuaXNTdGFydCkge1xuICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG5cbiAgICAgIC8vIOacgOWIneOBoOOBkeOBruWHpueQhlxuICAgICAgLy8gbG9nKCdtb3ZlU3RhcnQnKTtcblxuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLm1vdXNlTW92ZVN0YXJ0TGlzdCkgdGhpcy5tb3VzZU1vdmVTdGFydExpc3RbaV0uZnVuYygpO1xuXG4gICAgfTtcblxuICAgIGlmIChlLm9mZnNldFg9PXVuZGVmaW5lZCkgeyAvLyB0aGlzIHdvcmtzIGZvciBGaXJlZm94XG4gICAgICAgdGhpcy54ID0gZS5wYWdlWCAtIHRoaXMuJHRhcmdldC5vZmZzZXQoKS5sZWZ0O1xuICAgICAgIHRoaXMueSA9IGUucGFnZVkgLSB0aGlzLiR0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAgICB9IGVsc2UgeyAvLyB3b3JrcyBpbiBHb29nbGUgQ2hyb21lXG4gICAgICAgdGhpcy54ID0gZS5wYWdlWCAtICQod2luZG93KS5zY3JvbGxMZWZ0KCk7XG4gICAgICAgdGhpcy55ID0gZS5wYWdlWSAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgfVxuXG4gICAgdGhpcy5jeCA9ICggZS5jbGllbnRYIC0gZ2IuaW4uci5XKCkvMiApO1xuICAgIHRoaXMuY3kgPSAoIGUuY2xpZW50WSAtIGdiLmluLnIuSCgpLzIgKTtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5tb3VzZU1vdmVMaXN0KSB0aGlzLm1vdXNlTW92ZUxpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBvbkVuZChlKSB7XG5cbiAgICBpZiAodGhpcy5UaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuVGltZXIpO1xuICAgIHRoaXMuVGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xuXG4gICAgICAvLyBsb2coJ21vdmVFbmQnKTtcblxuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLm1vdXNlTW92ZUVuZExpc3QpIHRoaXMubW91c2VNb3ZlRW5kTGlzdFtpXS5mdW5jKCk7XG5cbiAgICB9LCB0aGlzLmVuZFRpbWUpO1xuXG4gIH1cblxuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMubW91c2VNb3ZlTGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cbiBcbiAgYWRkU3RhcnQgKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLm1vdXNlTW92ZVN0YXJ0TGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cblxuICBhZGRFbmQgKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLm1vdXNlTW92ZUVuZExpc3QucHVzaChvYmopO1xuICAgIFxuICB9XG5cbiAgcmVtb3ZlKG5hbWUpIHtcblxuICAgIE1vdXNlTWdyLmFyclJlbW92ZSh0aGlzLm1vdXNlTW92ZUxpc3QsIG5hbWUpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIOmdmeeahOODoeODs+ODkFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGljIGFyclJlbW92ZShhcnIgLCBuYW1lKSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSBuYW1lKXtcbiAgICAgICAgYXJyLnNwbGljZSggaSAsIDEgKSA7XG4gICAgICAgIGktLTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCl7XG5cbiAgICB0aGlzLiR0YXJnZXQub2ZmKFwidG91Y2htb3ZlLk1vdXNlTWdyXCIpO1xuICAgIHRoaXMuJHRhcmdldC5vZmYoXCJtb3VzZW1vdmUuTW91c2VNZ3JcIik7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpe1xuXG4gICAgdGhpcy4kdGFyZ2V0Lm9uKFwidG91Y2htb3ZlLk1vdXNlTWdyXCIsIChlKT0+e3RoaXMub25Ub3VjaG1vdmUoZSk7fSk7XG4gICAgdGhpcy4kdGFyZ2V0Lm9uKFwibW91c2Vtb3ZlLk1vdXNlTWdyXCIsIChlKT0+e3RoaXMub25Nb3VzZW1vdmUoZSk7fSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL01vdXNlTWdyLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTG9hZE1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlci5lczYnO1xuaW1wb3J0IFNlYzAxVmlkZW8gZnJvbSAnLi4vRGlzcGxheS9VSS9TZWMwMVZpZGVvLmVzNic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIC8vIOOBneOBruS7llxuICAgIC8vIOOCveODvOOCt+ODo+ODq+OCueOCr+ODquODl+ODiOOBquOBqVxuICAgIC8vIHRoaXMuc25zU2NyaXB0KCk7XG5cbiAgICAvLyB0aGlzLmxvYWRZb3V0dWJlU2NyaXB0KCk7XG5cbiAgICAvLyBzZWN0aW9uMDLjgafkvb/jgYblpKfph4/jga7nlLvlg4/jgpLjg63jg7zjg4kgLy8gd2ViIHdvcmtlcuOBquOBqeOCguS9v+OBo+OBplxuICAgIC8vIHRoaXMuc2VjMDJJbWcoKTtcblxuICAgIC8vIHRoaXMud2ViRm9udCgpO1xuXG4gIH1cblxuICBsb2FkWW91dHViZVNjcmlwdCgpIHtcblxuICAgIHZhciBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7XG5cbiAgICB2YXIgbGVuID0gMTtcbiAgICBnYi5pbi5ybS50b3RhbCArPSBsZW47IC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuICAgIGlmIChnYi5pbi51LmlzU1ApIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuXG4gICAgdmFyIGNiID0gKCk9PntcblxuICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG5cbiAgICB9XG5cbiAgICBsb2FkZXIueW91dHViZUlmcmFtZVNjcmlwdChjYik7XG5cbiAgfVxuXG4gIHNlYzAySW1nKCkge1xuXG4gICAgLy8gYmdWaWRlb1RpbGXnlKjjga7pgKPnlarnlLvlg4/jga7oqq3jgb/ovrzjgb9cbiAgICBnYi5pbi5sb2FkU2VjMDJJbWcgPSB0aGlzLmxvYWRlciA9IG5ldyBMb2FkZXIoKTtcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcbiAgICAgIHZhciBsZW4gPSBnYi5pbi5jb25mLnNlYzAySW1nTnVtO1xuICAgICAgZ2IuaW4ucm0udG90YWwgKz0gbGVuO+OAgC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuICAgICAgdmFyIHBhdGggPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL21vdmllL2JnSW1nLyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsZW4gPSAxOTtcbiAgICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjvjgIAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcbiAgICAgIHZhciBwYXRoID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9tb3ZpZS9iZ0ltZ1NQLyc7XG4gICAgfVxuXG4gICAgdmFyIGNiID0gKCk9PntcbiAgICAgIC8vIGdiLmluLlNlYzAyQmcuY3JlYXRlKCk7XG4gICAgfVxuICAgIHZhciBjYjAyID0gKCk9PntcbiAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgIH1cblxuICAgIC8vIHRoaXMubG9hZGVyLmltZ1NlcmlhbExvYWQobGVuLHBhdGgsJ3RmbnlfJyxjYixjYjAyKTtcbiAgICB0aGlzLmxvYWRlci5pbWcobGVuKzEscGF0aCwndGZueV8nLGNiLGNiMDIpO1xuXG4gIH1cblxuICBzZWN0aW9uMDRQcm9kdWN0U2hhZGVyKCkge1xuXG4gICAgdmFyIHNoYWRlcnMgPSBbXTtcbiAgICB2YXIgc2hhZGVyTG9hZExpc3QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGdiLkNsb2NrLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuUGxhc21hLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5TZXBpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuTW9zYWljLFxuICAgICAgICAgICAgICAgICAgICAgICBnYi5ab29tQmx1cixcbiAgICAgICAgICAgICAgICAgICAgICAgZ2IuWm9vbUJsdXIsXG4gICAgICAgICAgICAgICAgICAgICAgIGdiLlRyYW5zaXRpb24wMixcbiAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICB2YXIgbGVuID0gc2hhZGVyTG9hZExpc3QubGVuZ3RoO1xuICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjsgLy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG5cbiAgICB2YXIgc2hhZGVyU2VyaWFsTG9hZCA9IChsZW4sIGNiKT0+e1xuXG4gICAgICAgIHZhciBzaGFkZXIsY250PTA7XG5cbiAgICAgICAgdmFyIGxvYWQgPSAoaSk9PntcbiAgICAgICAgICBzaGFkZXIgPSBuZXcgc2hhZGVyTG9hZExpc3RbaV0oY29tcCk7XG4gICAgICAgICAgc2hhZGVycy5wdXNoKHNoYWRlcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNvbXAgPSBmdW5jdGlvbigpe1xuICAgICAgICAgIGNudCsrO1xuICAgICAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgICAgICAgIGlmKGNudCA9PSBsZW4pIGNiKHNoYWRlcnMpO1xuICAgICAgICAgIGVsc2UgbG9hZChjbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxvYWQoY250KTtcblxuICAgIH1cblxuICAgIHNoYWRlclNlcmlhbExvYWQoc2hhZGVyTG9hZExpc3QubGVuZ3RoLChzaGFkZXJzKT0+e1xuXG4gICAgICB0aGlzLnNoYWRlcnMgPSBzaGFkZXJzO1xuICAgICAgdGhpcy5zZWN0aW9uMDRQcm9kdWN0SW1nKCk7XG5cbiAgICB9KVxuXG4gIH1cblxuICBzZWN0aW9uMDRQcm9kdWN0SW1nKCkge1xuXG4gICAgdmFyIHRleHR1cmVMaXN0ID0gW1xuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L3RpZmZhbnlfaGFuZDEuanBnJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC9icm93bi5wbmcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L2JsdWUucG5nJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC93aGl0ZS5wbmcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L3RpZmZhbnlibHVlLnBuZycsXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3QvcGluay5wbmcnLFxuICAgIF07ICAgICAgXG4gICAgdGhpcy50ZXh0dXJlcyA9IFtdO1xuXG4gICAgdmFyIGxlbiA9IHRleHR1cmVMaXN0Lmxlbmd0aDtcbiAgICBnYi5pbi5ybS50b3RhbCArPSBsZW47IC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuXG4gICAgdmFyIHRleHR1cmVTZXJpYWxMb2FkID0gKGxlbiwgY2IpPT57XG5cbiAgICAgIHZhciB0ZXh0dXJlLGNudD0wO1xuXG4gICAgICB2YXIgbG9hZCA9IChpKT0+e1xuICAgICAgICB0ZXh0dXJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSh0ZXh0dXJlTGlzdFtpXSwgbnVsbCAsY29tcCk7XG4gICAgICAgIHRoaXMudGV4dHVyZXMucHVzaCh0ZXh0dXJlKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBjb21wID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY250Kys7XG4gICAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgICAgICBpZihjbnQgPT0gbGVuKSBjYigpO1xuICAgICAgICBlbHNlIGxvYWQoY250KTtcbiAgICAgIH07XG5cbiAgICAgIGxvYWQoY250KTtcblxuICAgIH1cblxuICAgIHRleHR1cmVTZXJpYWxMb2FkKHRleHR1cmVMaXN0Lmxlbmd0aCwgKCk9PnskKHdpbmRvdykudHJpZ2dlcignb25TZWN0aW9uMDRQcm9kdWN0SW1nJyk7fSk7XG5cbiAgfVxuXG4gIHdlYkZvbnQoKSB7XG5cbiAgICAvLyB3ZWIgZm9udCBsb2FkZXLnlKhwYXJhbVxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBjdXN0b206IHtcbiAgICAgICAgZmFtaWxpZXM6IFtcbiAgICAgICAgICAnQ29ybW9yYW50JyxcbiAgICAgICAgICAnUm9ib3RvIENvbmRlbnNlZCdcbiAgICAgICAgICAvLyAnTm90byBTYW5zIEphcGFuZXNlJyxcbiAgICAgICAgICAvLyAnUm9ib3RvJyxcbiAgICAgICAgICAvLyAnQWxlZ3JleWEgU2FucycsXG4gICAgICAgICAgLy8gJ0FsZWdyZXlhIFNhbnMgU0MnXG4gICAgICAgICAgXSxcbiAgICAgICAgdXJsczogW1xuICAgICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q29ybW9yYW50OjUwMCw1MDBpfFJvYm90bytDb25kZW5zZWQnXG4gICAgICAgICAgLy8gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL2Nzcy9mb250LmNzcycsXG4gICAgICAgICAgLy8gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCwzMDAnLFxuICAgICAgICAgIC8vICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxlZ3JleWErU2Fuczo0MDAsMTAwJyxcbiAgICAgICAgICAvLyAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZWdyZXlhK1NhbnMrU0M6NDAwLDMwMCwxMDAnXG4gICAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGFjdGl2ZTogZnVuY3Rpb24oKSB7IFxuICAgICAgICAgIFxuICAgICAgICAgIGxvZygnd2ViRm9udCEhISEnKTtcbiAgICAgICAgICBnYi5pbi5jb25mLndlYkZvbnRMb2FkZWQgPSB0cnVlO1xuXG4gICAgICB9IFxuICAgIH07XG5cbiAgICB2YXIgbG9hZGVyID0gbmV3IExvYWRlcigpOyAgIFxuICAgIGxvYWRlci53ZWJGb250KGNvbmZpZyk7XG5cbiAgfVxuXG4gIG9uRW5kKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZE1nci5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIExvYWRlclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIHRoaXMuY250ID0gMDtcblxuICB9XG5cbiAganNvbihzcmMsY2IpIHtcblxuICAgICQuZ2V0SlNPTihzcmMsIChkYXRhKT0+e1xuXG4gICAgICBjYihkYXRhKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICBpbWcobGVuLCBwYXRoLCBuYW1lLCBjYj0oKT0+e30sIGNiMDI9KCk9Pnt9KXtcblxuICAgIHZhciBpLCBpbWcsIG50aCwgY250ID0gMSwgbGlzdCA9IFtdO1xuXG4gICAgZm9yKGkgPSAxO2kgPCBsZW47aSsrKXtcbiAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbnRoID0gZ2IuaW4udS5hZGQwKGksLTUpO1xuICAgICAgdGhpcy5saXN0LnB1c2goaW1nKTtcbiAgICAgIGltZy5vbmxvYWQgPSAoKT0+e1xuICAgICAgICBjYjAyKCk7XG4gICAgICAgIGNudCsrO1xuICAgICAgICBpZihjbnQgPT0gbGVuKSBjYigpO1xuICAgICAgfVxuICAgICAgaW1nLnNyYyA9IHBhdGgrbmFtZStudGgrXCIuanBnXCI7XG4gICAgfVxuXG4gIH1cblxuICAvLyBjYjAyIGxvYWTlrozkuobmmYIg6YO95bqm6YO95bqm55So44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG4gIGltZ1NlcmlhbExvYWQobGVuLCBwYXRoLCBuYW1lLCBjYj0oKT0+e30sY2IwMj0oKT0+e30pe1xuXG4gICAgdmFyIGksIGltZywgbnRoLCBjbnQgPSAwLCBsaXN0ID0gW107XG5cbiAgICB2YXIgbG9hZCA9IChpKT0+e1xuICAgICAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbnRoID0gZ2IuaW4udS5hZGQwKGksLTUpO1xuICAgICAgICB0aGlzLmxpc3QucHVzaChpbWcpO1xuICAgICAgICBpbWcub25sb2FkID0gKCk9PntcbiAgICAgICAgICBjYjAyKCk7XG4gICAgICAgICAgY29tcCgpO1xuICAgICAgICB9XG4gICAgICAgIGltZy5zcmMgPSBwYXRoK25hbWUrbnRoK1wiLmpwZ1wiO1xuICAgIH07XG5cbiAgICB2YXIgY29tcCA9ICgpPT57XG4gICAgICAgIGNudCsrO1xuICAgICAgICBpZihjbnQgPT0gbGVuKXtcbiAgICAgICAgICBjYigpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBsb2FkKGNudCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZChjbnQpO1xuICB9XG5cbiAgYWpheEltZ0xvYWQoY2Ipe1xuXG4gICAgdmFyIGltZ051bSA9ICQoJ2ltZycpLmxlbmd0aDtcbiAgICB2YXIgY250ID0gMDtcblxuICAgICQoJ2ltZycpLmVhY2goZnVuY3Rpb24oaSwgZWxtKSB7XG5cbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gKCk9PntcbiAgICAgICAgICBjbnQrKztcbiAgICAgICAgICBpZiAoY250PT1pbWdOdW0tMSkge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGltZy5zcmMgPSBlbG0uc3JjO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIHZpZGVvKHNyYywgY2I9KCk9Pnt9KSB7XG5cbiAgICB2YXIgaXNMb2FkID0gZmFsc2U7XG4gICAgdGhpcy52aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG5cbiAgICB2YXIgdHlwZSA9IHRoaXMuc3VwcG9ydFZpZGVvRXh0KHRoaXMudmlkZW8pO1xuICAgIGlmICh0eXBlID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5XCIsICgpPT57XG5cbiAgICAgIGlmICghdGhpcy5pc0xvYWQpIHtcbiAgICAgICAgdGhpcy5pc0xvYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZGVvLmxvb3AgPSB0cnVlO1xuICAgICAgICB0aGlzLnZpZGVvLnBsYXkoKTtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cblxuICAgIH0sZmFsc2UpO1xuXG4gICAgLy8g44Ot44O844OJXG4gICAgdGhpcy52aWRlby5zcmMgPSBzcmM7XG5cbiAgfVxuXG4gIHlvdXR1YmVJZnJhbWVTY3JpcHQoY2IpIHtcblxuICAgIC8vIElGcmFtZSBQbGF5ZXIgQVBJIOOBruiqreOBv+i+vOOBv1xuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB0YWcub25sb2FkID0gKCk9PntcblxuICAgICAgY2IoKTtcblxuICAgIH07XG5cbiAgICAvLyB0YWcuc3JjID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCI7XG4gICAgdGFnLnNyYyA9IFwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCI7XG4gICAgdmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuXG5cbiAgICAvLyBZb3VUdWJl5YuV55S7XG4gICAgd2luZG93Lm9uWW91VHViZUlmcmFtZVJlYWR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIGxvZygneW91dHViZXJlYWR5Jyk7XG5cblxuICAgIH1cblxuICB9XG5cbiAgc3VwcG9ydFZpZGVvRXh0KCkge1xuXG4gICAgdmFyIGV4dCA9IFwiXCI7XG4gICAgaWYgKHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby93ZWJtXCIpID09IFwicHJvYmFibHlcIiB8fCB0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vd2VibVwiKSA9PSBcIm1heWJlXCIpIHtcbiAgICAgIGV4dCA9IFwid2VibVwiO1xuICAgIH0gZWxzZSBpZih0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vbXA0XCIpID09IFwicHJvYmFibHlcIiB8fCB0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vbXA0XCIpID09IFwibWF5YmVcIikge1xuICAgICAgZXh0ID0gXCJtcDRcIjtcbiAgICB9IGVsc2UgaWYodGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL29nZ1wiKSA9PSBcInByb2JhYmx5XCIgfHwgdGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL29nZ1wiKSA9PSBcIm1heWJlXCIpIHtcbiAgICAgIGV4dCA9IFwib2dnXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4dDtcblxuICB9XG5cbiAgd2ViRm9udChjb25maWcpIHtcblxuICAgIC8vIHdlYiBmb250IGxvYWRlcueUqGpz44GuYXBwZW5kXG4gICAgdmFyIHdmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgd2Yuc3JjID0gKCdodHRwczonID09IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID8gJ2h0dHBzJyA6ICdodHRwJykgK1xuICAgICAgJzovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL3dlYmZvbnQvMS93ZWJmb250LmpzJztcbiAgICB3Zi50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgd2YuYXN5bmMgPSAndHJ1ZSc7XG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3Ziwgcyk7XG5cbiAgICB2YXIgYWdhaW4gPSAoKT0+e1xuXG4gICAgICAvLyB5dC5wbGF5ZXLjgYxsb2Fk44GV44KM44Gm44GE44Gq44GE5aC05ZCI44KS6ICD5oWu44GX44GmXG4gICAgICBpZigodHlwZW9mIFdlYkZvbnQgIT09IFwidW5kZWZpbmVkXCIpICYmIFdlYkZvbnQpIHtcblxuICAgICAgICAgIFdlYkZvbnQubG9hZChjb25maWcpO1xuXG4gICAgICB9ZWxzZXtcblxuICAgICAgICAgIHNldFRpbWVvdXQoYWdhaW4sIDEwMCk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIGFnYWluKCk7ICAgIFxuXG4gIH1cblxuICBvbkxvYWRlZCgpIHtcblxuICAgICQoJ2h0bWwnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuXG4gIH1cblxuICBzZXRFdmVudHMobGVuKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWRlZCcsIChldmVudCk9PntcbiAgICAgIFxuICAgICAgc2VsZi5jbnQrKztcbiAgICAgIGlmIChzZWxmLmNudCA9PSBsZW4pIG9uTG9hZGVkKCk7XG5cbiAgICB9KTtcbiAgICAgIFxuICB9IFxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZGVyLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU2VjMDFWaWRlb1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBZb3V0dWJlRm9yU2VjMDEgZnJvbSAnLi9Zb3V0dWJlRm9yU2VjMDEuZXM2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjMDFWaWRlbyB7XG5cbiAgY29uc3RydWN0b3IocGFyYW0pe1xuXG4gICAgLy8gc2VjMDF2aWRlb+eUqFxuICAgIGdiLmluLnJtLnRvdGFsKys7XG4gICAgaWYgKGdiLmluLnUuaXNTUCkgZ2IuaW4ucm0uY29tcGxldGVkKys7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyBjcmVhdGVcbiAgICB0aGlzLnZpZGVvID0gbmV3IFlvdXR1YmVGb3JTZWMwMSgnc2VjMDFWaWRlbycsIGdiLmluLmNvbmYueW91dHViZUlEMDEsIG51bGwpO1xuICAgIFxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9TZWMwMVZpZGVvLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgWW91dHViZUZvclNlYzAxXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgRnVsbFNpemUgZnJvbSAnLi4vLi4vTXlMaWJzL0Rpc3BsYXkvTGF5b3V0L0Z1bGxTaXplLmVzNic7XG5pbXBvcnQgVG9wVGltZSBmcm9tICcuLi8uLi9EaXNwbGF5L1VJL1RvcFRpbWUuZXM2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWW91dHViZUZvclNlYzAxIHtcblxuICBjb25zdHJ1Y3RvcihpZCx2aWRlb0lELHZpZGVvTGlzdCkge1xuXG4gICAgdGhpcy5wbGF5ZXIgPSBudWxsO1xuXG4gICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLmlzU2Vla0xvY2sgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2Vla0xvY2swMiA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXR1cChpZCx2aWRlb0lELHZpZGVvTGlzdCk7XG5cbiAgfVxuXG4gIHNldHVwKGlkLHZpZGVvSUQsdmlkZW9MaXN0KSB7XG5cbiAgICAvLyB5dC5wbGF5ZXLvv73vv71sb2Fk77+977+977+977+977+9xqTvv73vv73KpO+/ve+/ve+/ve+/vc+k8r+8kV3vv73vv73vv73vv71cbiAgICBpZigodHlwZW9mIFlUICE9PSBcInVuZGVmaW5lZFwiKSAmJiBZVCAmJiBZVC5QbGF5ZXIpe1xuXG4gICAgICAgIC8vIGNyZWF0ZVxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBZVC5QbGF5ZXIoaWQsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIC8vIO+/vdel77+977+9YO+/ve+/ve+/vWDvv73Ot++/vVxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsIC8vIO+/vdel77+977+9YO+/ve+/ve+/vWDvv73OuN+k77+9XG4gICAgICAgICAgICB2aWRlb0lkOiB2aWRlb0lELCAvLyBZb3VUdWJl77+977+9SURcbiAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAnb25SZWFkeSc6IHRoaXMub25SZWFkeS5iaW5kKHRoaXMpLCAvLyDvv73Xpe+/ve+/vWDvv73vv73vv71g77+9zpzKguSkrO+/vcek77+977+977+977+9yKTvv73vv73LjGfvv73vv71cbiAgICAgICAgICAgICAgJ29uU3RhdGVDaGFuZ2UnOiB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICAgICAgYXV0b3BsYXk6IDEsXG4gICAgICAgICAgICAgIGNvbnRyb2xzOiAwLFxuICAgICAgICAgICAgICBzaG93aW5mbzogMCxcbiAgICAgICAgICAgICAgYXV0b2hpZGU6IDEsXG4gICAgICAgICAgICAgIHJlbDogMCxcbiAgICAgICAgICAgICAgZW5hYmxlanNhcGk6IDEsXG4gICAgICAgICAgICAgIGl2X2xvYWRfcG9saWN5OiAzLFxuICAgICAgICAgICAgICBkaXNhYmxla2I6MSxcbiAgICAgICAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDEsXG4gICAgICAgICAgICAgIHN0YXJ0OiAyLFxuICAgICAgICAgICAgICBsb29wOiAxLFxuICAgICAgICAgICAgICAvLyBwbGF5bGlzdDogdmlkZW9MaXN0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxheW91dFxuICAgICAgICB2YXIgbCA9IG5ldyBGdWxsU2l6ZSgkKCcjYmdXcmFwJyksJCgnI3NlYzAxVmlkZW8nKSwwLCdGdWxsU2l6ZVNlYzAxVmlkZW8nKTtcbiAgICAgICAgbC50YXJnZXREZWZXID0gMTkyMDtcbiAgICAgICAgbC50YXJnZXREZWZIID0gMTA4MDtcbiAgICAgICAgbC5ydW4oKTtcblxuICAgIH1lbHNle1xuXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXR1cC5iaW5kKHRoaXMsaWQsdmlkZW9JRCx2aWRlb0xpc3QpLCAxMDApO1xuXG4gICAgfVxuXG5cbiAgfVxuXG4gIG9uUmVhZHkgKGUpIHtcblxuICAgIC8vIO+/vd+977+977+977+977+9yKTvv71cbiAgICBlLnRhcmdldC5zZXRQbGF5YmFja1F1YWxpdHkoJ2hpZ2hyZXMnKTtcblxuICAgIC8vIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgICAvLyBwbGF5XG4gICAgZ2IuaW4udGltZSA9IG5ldyBUb3BUaW1lKCk7XG4gICAgZ2IuaW4uc2VjMDFWaWRlby52aWRlby5wbGF5QnlOWVRpbWUoKTtcblxuICB9XG5cbiAgb25QbGF5ZXJTdGF0ZUNoYW5nZSAoZSkge1xuXG4gICAgdmFyIHN0YXR1cyA9IGUuZGF0YTtcblxuICAgIC8vIO+/ve+/ve+/ve+/ve+/vUvvv73LpO+/ve+/ve+/ve+/vcik77+9IDBcbiAgICBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkge1xuICAgICBcbiAgICAgICAgLy8g77+907vvv73vv73vv73vv73vv71cbiAgICAgICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIC8vIO+/ve+/ve+/ve+/ve+/vdCkzqTIpO+/vSAxXG4gICAgaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuUExBWUlORykge1xuXG4gICAgICBpZiAodGhpcy5pc0ZpcnN0KSB7XG4gICAgICAgIHRoaXMuaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICAgIH1cblxuICAgICAgLy8gZS50YXJnZXQucGF1c2VWaWRlbygpO1xuXG4gICAgfVxuXG4gICAgLy8gLy8gzaPWue+/vdCkzqTIpO+/vSAyXG4gICAgLy8gaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCfNo9a577+977+9Jyk7XG4gICAgLy8gfVxuXG4gICAgLy8gLy8g77+90KXDpdWl77+977+977+977+977+977+977+977+90KTOpMik77+9IDNcbiAgICAvLyBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkcpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ++/vdClw6XVpe+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vScpO1xuICAgIC8vIH1cblxuICAgIC8vIC8vIO+/vV7vv73vv73vv73vv73vv71n77+936TOpMik77+9IDUgNe+/ve+/vda577+93qTvv73vv73IpO+/ve+/ve+/ve+/veukq++/vemhou+/ve+/ve+/ve+/ve+/vcek77+9cGxheVxuICAgIGlmIChzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLkNVRUQpIHtcblxuICAgICAgICB0aGlzLnBsYXlCeU5ZVGltZSgpO1xuXG4gICAgfVxuXG5cbiAgICAvLyBmb3Igc2FmYXJpIO+/vdWl77+977+977+977+966W177+977+977+977+977+92KTvv73vv73vv71cbiAgICBpZiAoZ2IuaW4udS5pc1NhZmFyaSgpICYmIHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HKSB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSArIDAuMSk7XG5cbiAgfVxuXG4gIHBsYXlCeU5ZVGltZSgpIHtcblxuICAgIHZhciBoID0gZ2IuaW4udGltZS5ueUg7XG5cbiAgICBpZiAoaCA+PSA1ICYmIGggPCAxMykge1xuXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8oMCk7XG5cbiAgICB9IGVsc2UgaWYgKGggPj0gMTMgJiYgaCA8IDE4KSB7XG5cbiAgICAgIHRoaXMucGxheWVyLnNlZWtUbygzNik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8oNjYpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG5cblxuICB9XG5cbiAgb25TZWVrKCkge1xuXG4gICAgdmFyIG5vdyA9IHRoaXMucGxheWVyLmdldEN1cnJlbnRUaW1lKCk7ICAgIFxuXG4gICAgaWYgKG5vdyA8IDEuMCkge1xuICAgICAgdGhpcy5pc1NlZWtMb2NrID0gZmFsc2U7XG4gICAgICB0aGlzLmlzU2Vla0xvY2swMiA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBpZiAobm93ID4gOTAgJiYgIXRoaXMuaXNTZWVrTG9jaykge1xuICAgIHRoaXMuaXNTZWVrTG9jayA9IHRydWU7XG5cbiAgICAgIFR3ZWVuTWF4LnRvKCQoJy5iZ092ZXJsYXlJbWcnKSwgMy4wLCB7XG4gICAgICAgICAgb3BhY2l0eTogMSwgXG4gICAgICAgICAgZWFzZTpQb3dlcjMuZWFzZUluT3V0LFxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIFxuICAgIGlmIChub3cgPiAxLjAgJiYgIXRoaXMuaXNTZWVrTG9jazAyKSB7XG4gICAgdGhpcy5pc1NlZWtMb2NrMDIgPSB0cnVlO1xuXG4gICAgICBUd2Vlbk1heC50bygkKCcuYmdPdmVybGF5SW1nJyksIDMuMCwge1xuICAgICAgICAgIG9wYWNpdHk6IDAsIFxuICAgICAgICAgIGVhc2U6UG93ZXIzLmVhc2VJbk91dCxcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnVwLmFkZCgnWW91dHViZUZvclNlYzAxJyx0aGlzLm9uU2Vlay5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAucmVtb3ZlKCdZb3V0dWJlRm9yU2VjMDEnKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1lvdXR1YmVGb3JTZWMwMS5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEZ1bGxTaXplXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2l6ZSB7XG5cbiAgY29uc3RydWN0b3IoJFdyYXAsJFRhcmdldCxtb2RlLCBuYW1lKSB7XG5cbiAgICB0aGlzLiR3cmFwID0gJFdyYXA7XG4gICAgdGhpcy4kdGFyZ2V0ID0gJFRhcmdldDtcblxuICAgIHRoaXMuVyA9IHRoaXMuJHdyYXAud2lkdGgoKTtcbiAgICB0aGlzLkggPSB0aGlzLiR3cmFwLmhlaWdodCgpO1xuICAgIHRoaXMudGFyZ2V0VztcbiAgICB0aGlzLnRhcmdldEg7XG4gICAgdGhpcy50YXJnZXREZWZXO1xuICAgIHRoaXMudGFyZ2V0RGVmSDtcbiAgICB0aGlzLnJhdGlvVztcbiAgICB0aGlzLnJhdGlvO1xuICAgIHRoaXMubWw7XG4gICAgdGhpcy5tdDtcblxuICAgIHRoaXMubW9kZSA9IG1vZGUgfHwgMDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lIHx8ICdmdWxsc2l6ZSc7XG5cbiAgICAvLyB0aGlzLmluaXQoKTtcbiAgICAvLyB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldFN0eWxlKCkge1xuXG4gICAgdGhpcy4kd3JhcC5jc3Moe1xuICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gICAgfSk7XG4gICAgdGhpcy4kdGFyZ2V0LmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcblxuICB9XG5cbiAgZ2V0RGVmKCkge1xuXG4gICAgdGhpcy50YXJnZXREZWZXID0gdGhpcy4kdGFyZ2V0LmdldCgwKS5jbGllbnRXaWR0aCB8fCB0aGlzLiR0YXJnZXQuZ2V0KDApLndpZHRoIHx8IHRoaXMuJHRhcmdldC53aWR0aCgpLFxuICAgIHRoaXMudGFyZ2V0RGVmSCA9IHRoaXMuJHRhcmdldC5nZXQoMCkuY2xpZW50SGVpZ2h0IHx8IHRoaXMuJHRhcmdldC5nZXQoMCkuaGVpZ2h0ICB8fCB0aGlzLiR0YXJnZXQuaGVpZ2h0KCk7XG5cbiAgfVxuXG4gIGdldFNpemUoKSB7XG5cbiAgICB0aGlzLlcgPSB0aGlzLiR3cmFwLndpZHRoKCk7XG4gICAgdGhpcy5IID0gdGhpcy4kd3JhcC5oZWlnaHQoKTsgXG5cbiAgICB0aGlzLnJhdGlvVyA9IHRoaXMuSCAvIHRoaXMuVztcbiAgICB0aGlzLnJhdGlvID0gdGhpcy50YXJnZXREZWZIIC8gdGhpcy50YXJnZXREZWZXLFxuXG4gICAgdGhpcy5tbCA9IC0gKHRoaXMudGFyZ2V0RGVmVyAqICh0aGlzLkggLyB0aGlzLnRhcmdldERlZkgpKSAvIDI7XG4gICAgdGhpcy5tdCA9IC0gKHRoaXMudGFyZ2V0RGVmSCAqICh0aGlzLlcgLyB0aGlzLnRhcmdldERlZlcpKSAvIDI7XG5cbiAgfVxuXG4gIHNldFBvcygpe1xuXG4gICAgICBpZiAodGhpcy5tb2RlID09ICdjb3ZlcicgfHwgdGhpcy5tb2RlID09IDApIHtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vICDmnqDjgavjg5Tjg4Pjgr/jg6rjgavjgarjgovjgojjgYbjgasgYmFja2dyb3VuZC1zaXplIGNvdmVyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBpZiAodGhpcy5yYXRpb1cgPiB0aGlzLnJhdGlvKSB7XG5cbiAgICAgICAgICB2YXIgdyA9ICh0aGlzLkggLyB0aGlzLnRhcmdldERlZkgpICogdGhpcy50YXJnZXREZWZXO1xuXG4gICAgICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgICAgLmNzcyh7J2hlaWdodCc6IHRoaXMuSH0pXG4gICAgICAgICAgICAgIC5jc3MoeydtYXJnaW4tdG9wJzogMCwnbWFyZ2luLWxlZnQnOiB0aGlzLm1sLCd0b3AnOjAsJ2xlZnQnOic1MCUnLCd3aWR0aCc6d30pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMucmF0aW9XIDw9IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgICAgdmFyIGggPSAodGhpcy5XIC8gdGhpcy50YXJnZXREZWZXKSAqIHRoaXMudGFyZ2V0RGVmSDtcblxuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAgIC5jc3Moeyd3aWR0aCc6IHRoaXMuV30pXG4gICAgICAgICAgICAgIC5jc3MoeydtYXJnaW4tdG9wJzogdGhpcy5tdCwnbWFyZ2luLWxlZnQnOiAwLCd0b3AnOic1MCUnLCdsZWZ0JzowLCdoZWlnaHQnOmh9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09ICdjb250YWluJyB8fCB0aGlzLm1vZGUgPT0gMSl7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyAg5p6g5YaF44Gr44OU44OD44K/44Oq5Y+O44G+44KL44KI44GG44GrIGJhY2tncm91bmQtc2l6ZSBjb250YWluXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBpZiAodGhpcy5yYXRpb1cgPCB0aGlzLnJhdGlvKSB7XG5cbiAgICAgICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgICAuY3NzKHsnaGVpZ2h0JzogdGhpcy5IfSlcbiAgICAgICAgICAgICAgLmNzcyh7J21hcmdpbi10b3AnOiAwLCdtYXJnaW4tbGVmdCc6IHRoaXMubWwsJ3RvcCc6MCwnbGVmdCc6JzUwJScsJ3dpZHRoJzonYXV0byd9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLnJhdGlvVyA+PSB0aGlzLnJhdGlvKSB7XG5cbiAgICAgICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgICAuY3NzKHsnd2lkdGgnOiB0aGlzLld9KVxuICAgICAgICAgICAgICAuY3NzKHsnbWFyZ2luLXRvcCc6IHRoaXMubXQsJ21hcmdpbi1sZWZ0JzogMCwndG9wJzonNTAlJywnbGVmdCc6MCwnaGVpZ2h0JzonYXV0byd9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0gXG5cbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgICB0aGlzLmdldERlZigpO1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgdGhpcy5nZXRTaXplKCk7XG4gICAgdGhpcy5zZXRQb3MoKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQodGhpcy5uYW1lLCB0aGlzLnJ1bi5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRGlzcGxheS9MYXlvdXQvRnVsbFNpemUuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBUb3BUaW1lXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyA1MDBweOS7peS4i+OBq+OBquOBo+OBn+OCieihqOekulxuLy8gICDmmYLoqIhjb3VudFxuLy8gICBjYW52YXPooajnpLpcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVGltZSB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuJHRhcmdldCA9ICQoJy50aW1lV3JhcCcpO1xuICAgIHRoaXMuJGgwMSA9IHRoaXMuJHRhcmdldC5maW5kKCcuaDAxJyk7XG4gICAgdGhpcy4kaDAyID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5oMDInKTtcbiAgICB0aGlzLiRtMDEgPSB0aGlzLiR0YXJnZXQuZmluZCgnLm0wMScpO1xuICAgIHRoaXMuJG0wMiA9IHRoaXMuJHRhcmdldC5maW5kKCcubTAyJyk7XG5cbiAgICB0aGlzLm55SCA9IDA7XG5cbiAgICB0aGlzLmlzQWxlcnQgPSAoZ2IuaW4uci53cy5oIDwgNTAwKT8gdHJ1ZTogZmFsc2U7XG5cbiAgICB0aGlzLmRpcyA9IDE0OyAvL+aZguW3rlxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICBnYi5pbi51LnRpbWUoKTtcbiAgICB2YXIgaCA9IGdiLmluLnUuaG91ciAtIHRoaXMuZGlzO1xuICAgIGlmIChoPDApIGggPSAyNCArIGg7XG4gICAgdGhpcy5ueUggPSBoO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICAvLyDplpPlvJXjgY1cbiAgICBpZiAoZ2IuaW4udXAuY250JTYwIT09MCkgcmV0dXJuO1xuXG5cbiAgICBnYi5pbi51LnRpbWUoKTtcblxuICAgIHZhciBoID0gZ2IuaW4udS5ob3VyIC0gdGhpcy5kaXM7XG4gICAgaWYgKGg8MCkgaCA9IDI0ICsgaDtcblxuICAgIHRoaXMubnlIID0gaDtcblxuICAgIGggPSBnYi5pbi51LmFkZDAoaCkuc3BsaXQoJycpO1xuICAgIHZhciBtID0gZ2IuaW4udS5hZGQwKGdiLmluLnUubWludXRlKS5zcGxpdCgnJyk7XG4gICAgdmFyIHMgPSBnYi5pbi51LmFkZDAoZ2IuaW4udS5zZWNvbmQpLnNwbGl0KCcnKTtcblxuICAgIHRoaXMuJGgwMS50ZXh0KGhbMF0pXG4gICAgdGhpcy4kaDAyLnRleHQoaFsxXSlcbiAgICB0aGlzLiRtMDEudGV4dChtWzBdKVxuICAgIHRoaXMuJG0wMi50ZXh0KG1bMV0pXG5cbiAgICAvLyB0aGlzLiRoMDEudGV4dChzWzBdKVxuICAgIC8vIHRoaXMuJGgwMi50ZXh0KHNbMV0pXG4gICAgLy8gdGhpcy4kbTAxLnRleHQoc1swXSk7XG4gICAgLy8gdGhpcy4kbTAyLnRleHQoc1sxXSk7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIGdiLmluLnVwLmFkZCgnVG9wVGltZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgLy8g44Kz44Oz44Oe44Gu6KGo56S66Z2e6KGo56S6XG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHtyZXBlYXQ6IC0xfSk7XG5cbiAgICB0bFxuICAgICAgLnNldCh0aGlzLiR0YXJnZXQuZmluZCgnLmNvbG9uJyksIHtvcGFjaXR5OiAwfSlcbiAgICAgIC50byh0aGlzLiR0YXJnZXQuZmluZCgnLmNvbG9uJyksIDAuNSwge29wYWNpdHk6IDEsZWFzZTogUG93ZXIyLmVhc2VJbk91dH0pXG4gICAgICAudG8odGhpcy4kdGFyZ2V0LmZpbmQoJy5jb2xvbicpLCAwLjUsIHtvcGFjaXR5OiAwLGVhc2U6IFBvd2VyMi5lYXNlSW5PdXR9KVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cblxuXG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG5cbiAgICBnYi5pbi51cC5yZW1vdmUoJ1RvcFRpbWUnKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1RvcFRpbWUuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBKdWRnZUVudmlyb25tZW50XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKdWRnZUVudmlyb25tZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOODh+ODkOOCpOOCueWIpOWumlxuICAgIGdiLmluLnUuaXNEZXZpY2VTUCgpO1xuICAgIGdiLmluLnUuaXNEZXZpY2VUQUIoKTtcbiAgICBnYi5pbi51LmlzRGV2aWNlTUIoKTtcbiAgICBnYi5pbi51LmlzRGV2aWNlUEMoKTtcblxuICAgIC8vIOODluODqeOCpuOCtuODkOODvOOCuOODp+ODs+WIpOWumlxuICAgIGdiLmluLnUuaXNJRVZlcnNpb24oKTtcblxuICAgIC8vIHJlc3BvbnNpdmUgLyBwb3J0cmFpdCAvIGxhbmRzY2FwZVxuICAgIGdiLmluLnUuaXNEaXJlY3Rpb24oKTtcbiAgICBnYi5pbi51LmlzUmVzcG9uc2l2ZShnYi5pbi5jb25mLmJwKTtcbiAgICBnYi5pbi5yLmFkZCgnaXNEaXJlY3Rpb24nLCBnYi5pbi51LmlzRGlyZWN0aW9uLmJpbmQoZ2IuaW4udSkpO1xuICAgIGdiLmluLnIuYWRkKCdpc1Jlc3BvbnNpdmUnLCBnYi5pbi51LmlzUmVzcG9uc2l2ZS5iaW5kKGdiLmluLnUsIGdiLmluLmNvbmYuYnApKTtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG4gICAgICAgXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9KdWRnZUVudmlyb25tZW50LmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUmVzcG9uc2l2ZVN3aXRjaEltZ1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZVN3aXRjaEltZyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5ydW4oKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIHRoaXMuaXNQQ0xvY2sgPSAoZ2IuaW4udS5pc1Jlc1BDKT8gZmFsc2U6IHRydWU7XG4gICAgdGhpcy5pc1NQTG9jayA9IChnYi5pbi51LmlzUmVzU1ApPyBmYWxzZTogdHJ1ZTtcblxuICAgIHRoaXMuJHRhcmdldCA9ICQoJy5yZXNwb25zaXZlSW1nJyk7XG5cbiAgfVxuXG4gIHJ1biAoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OW44Os44Kk44Kv44Od44Kk44Oz44OI44KI44KK44KCc3DlgbRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQICYmICF0aGlzLmlzU1BMb2NrKSB7XG4gICAgICB0aGlzLmlzUENMb2NrID0gZmFsc2U7XG4gICAgICB0aGlzLmlzU1BMb2NrID0gdHJ1ZTtcblxuICAgICAgbG9nKDExKTtcblxuICAgICAgdGhpcy4kdGFyZ2V0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcbiAgICAgICAgc3JjID0gZ2IuaW4udS5zdHJSZXBsYWNlKHNyYywgJ19wYycsICdfc3AnKTtcbiAgICAgICAgJCh0aGlzKS5vZmYoJ2xvYWQnKTtcbiAgICAgICAgJCh0aGlzKS5vbignbG9hZCcsIChldmVudCk9PntcblxuICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzcFNpemUnKSkgZ2IuaW4udS5zZXRJbWdTUFNpemUoJCh0aGlzKSk7XG5cbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcykuYXR0cignc3JjJyxzcmMpO1xuXG4gICAgICAgIC8vICQodGhpcykuYXR0cignc3JjJyxzcmMpO1xuICAgICAgICAvLyBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc3BTaXplJykpIGdiLmluLnUuc2V0SW1nU1BTaXplKCQodGhpcykpO1xuXG4gICAgICB9KTtcblxuICAgICAgLy8gcmVzcG9uc2l2ZWltZ+OBjOOBpOOBhOOBpuOBquOBhOOCguOBruOBp+OAgXNwU2l6ZeOBjOOBpOOBhOOBpuOCi+OCguOBruOBrzEvMlxuICAgICAgZ2IuaW4udS5zZXRJbWdTUFNpemUoJCgnLnNwU2l6ZScpLm5vdCgnLnJlc3BvbnNpdmVJbWcnKSk7XG5cbiAgICB9IFxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODluODrOOCpOOCr+ODneOCpOODs+ODiOOCiOOCiuOCgnBj5YG0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKGdiLmluLnUuaXNSZXNQQyAmJiAhdGhpcy5pc1BDTG9jaykge1xuICAgICAgdGhpcy5pc1BDTG9jayA9IHRydWU7XG4gICAgICB0aGlzLmlzU1BMb2NrID0gZmFsc2U7XG5cbiAgICAgIGxvZygyMik7XG5cbiAgICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XG4gICAgICAgIHNyYyA9IGdiLmluLnUuc3RyUmVwbGFjZShzcmMsICdfc3AnLCAnX3BjJyk7XG5cbiAgICAgICAgJCh0aGlzKS5hdHRyKHt3aWR0aDogJ2F1dG8nLGhlaWdodDogJ2F1dG8nfSk7XG4gICAgICAgICQodGhpcykuYXR0cignc3JjJyxzcmMpO1xuXG4gICAgICB9KTtcblxuICAgICAgLy8gcmVzcG9uc2l2ZWltZ+OBjOOBpOOBhOOBpuOBquOBhOOCguOBruOBp+OAgXNwU2l6ZeOBjOOBpOOBhOOBpuOCi+OCguOBruOBr2F1dG/jgatcbiAgICAgICQoJy5zcFNpemUnKS5ub3QoJy5yZXNwb25zaXZlSW1nJykuYXR0cih7d2lkdGg6ICdhdXRvJyxoZWlnaHQ6ICdhdXRvJ30pO1xuXG4gICAgICAvLyBzcOOBr+OBquOBnOOBi2xvYWTjgqTjg5njg7Pjg4jjgYzlkbzjgbDjgozjgarjgYTjga7jgafjgIHjgZPjgaPjgaHjgaflh6bnkIZcbiAgICAgIC8vIGlmIChnYi5pbi51LmlzU1ApICQoJy5yZXNwb25zaXZlSW1nJykuYXR0cih7d2lkdGg6ICdhdXRvJyxoZWlnaHQ6ICdhdXRvJ30pO1xuXG4gICAgfVxuXG4gIH1cbiAgICAgICBcbiAgcmVzdW1lKCkge1xuXG4gICAgbG9nKCdyZXN1bWUnKTtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnJ1bigpO1xuXG4gICAgZ2IuaW4uci5yZW1vdmUoJ3Jlc3BvbnNpdmVTd2l0Y2hJbWcnKTtcbiAgICBnYi5pbi5yLmFkZCgncmVzcG9uc2l2ZVN3aXRjaEltZycsIHRoaXMucnVuLmJpbmQodGhpcykpO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQoJ3Jlc3BvbnNpdmVTd2l0Y2hJbWcnLCB0aGlzLnJ1bi5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL19ldmVudHMvUmVzcG9uc2l2ZVN3aXRjaEltZy5lczYiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU3dpcGVUcmFuc2l0aW9uIHNzc1xuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2lwZVRyYW5zaXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIGRvbVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoaXMuJHN0YXJ0V3JhcCA9ICQoJy5zZWN0aW9uMDEsIC5zZWN0aW9uMDIgLm5leHQsIC5zZWN0aW9uMDMgLmJveDA1Jyk7XG4gICAgLy8gdGhpcy4kc3RhcnRXcmFwID0gJCgnLnNlY3Rpb24wMicpO1xuICAgIHRoaXMuJHN0YXJ0V3JhcCA9ICQod2luZG93KTtcbiAgICB0aGlzLiRlbmRXcmFwID0gJCh3aW5kb3cpO1xuXG4gICAgdGhpcy5wYWdlTGlzdCA9IHtcbiAgICAgICd0b3AnOiAwLFxuICAgICAgJ21vdmllJzogMSxcbiAgICAgICdpbnRlcnZpZXcnOiAyLFxuICAgICAgJ2hpc3RvcnknOiAzLFxuICAgIH1cblxuICAgIC8vIHZhcmlhYmxlXG4gICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICB0aGlzLm9sZCA9IG51bGw7XG4gICAgdGhpcy5uZXh0ID0gMTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGVuID0gNDtcblxuICAgIHRoaXMuaXNMb2NrID0gZmFsc2U7XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB2YXJpYWJsZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gcG9zaXRpb25cbiAgICB0aGlzLnNYID0gMDt0aGlzLm1YID0gMDt0aGlzLmVYID0gMDsgLy9zdGFydFgsbW92ZVgsZW5kWFxuICAgIHRoaXMuZGlzID0gMDt0aGlzLm1pbkRpcyA9IDE1O1xuXG4gICAgLy8gdGltZVxuICAgIHRoaXMuc1Q9MDt0aGlzLmVUPTA7dGhpcy5taW5UID0gMzAwOyAvL3N0YXJ0VGltZSxlbGxhcHNlZFRpbWUsXG5cbiAgICB0aGlzLlcgPSBnYi5pbi5yLlcoKTtcblxuICAgIHRoaXMub25Ub3VjaExvbmcgPSAoKT0+e307XG4gICAgdGhpcy5vblRvdWNoU3RhcnRDQiA9ICgpPT57fTtcbiAgICB0aGlzLm9uVG91Y2hFbmRDQiA9ICgpPT57fTtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgb25Ub3VjaFN0YXJ0IChlKSB7XG5cbiAgICAvLyB0YXJnZXRYXG4gICAgdmFyIHkgPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgdGhpcy5zWSA9IHk7XG5cbiAgICB0aGlzLnN0ID0gZ2IuaW4ucy5zdDtcbiAgICB0aGlzLnNiID0gZ2IuaW4ucy5zYjtcbiAgICBsb2coJ3N5Jyx5KVxuXG4gIH1cblxuICBvblRvdWNoTW92ZSAoZSkge1xuXG4gICAgLy8gdGFyZ2V0WFxuICAgIHZhciB5ID0gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgIHRoaXMubVkgPSB5O1xuXG4gIH1cblxuICBvblRvdWNoRW5kIChlKSB7XG5cbiAgICBpZiAodGhpcy5pc0xvY2spIHJldHVybjsgICAgXG5cbiAgICB2YXIgeSA9IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICB0aGlzLmVZID0geTtcblxuICAgIHZhciBkaXMgPSB0aGlzLnNZIC0gdGhpcy5lWTtcbiAgICB2YXIgYWJzRGlzID0gTWF0aC5hYnMoZGlzKTtcblxuICAgIC8vIOacgOWwj+i3nembouOCiOOCiumVt+OBi+OBo+OBn+OCieOAgeWHpueQhlxuICAgIGlmKCB0aGlzLm1pbkRpcyA8IGFic0Rpcykge1xuXG4gICAgICAvLyDjg5rjg7zjgrjnlarlj7fjgpLlj5blvpdcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucGFnZUxpc3RbZ2IuaW4ucGpheC5pZF07XG5cbiAgICAgIGlmIChkaXMgPiAwKSB7XG5cbiAgICAgICAgdmFyIGggPSAkKCcuc2VjdGlvbicpLmhlaWdodCgpKmdiLmluLkxheW91dC5zaXplLnNjYWxlLnJhdGU7XG4gICAgICAgIGxvZyh0aGlzLnNiLGgtMTAsdGhpcy5zYiA8IGgtMTApO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQhPT0wICYmIHRoaXMuc2IgPCBoLTEwKSByZXR1cm47XG4gICAgICAgIC8vIGhpc3Rvcnnjg5rjg7zjgrjjga7loLTlkIjjga/lh6bnkIbjgZfjgarjgYRcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudD09MykgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ25leHQnKTtcblxuICAgICAgICAvLyDjgZfjgZ/jgbhcbiAgICAgICAgdmFyIHBhZ2VOYW1lID0gT2JqZWN0LmtleXModGhpcy5wYWdlTGlzdCkuZmlsdGVyKCAoa2V5KSA9PiB7IHJldHVybiB0aGlzLnBhZ2VMaXN0W2tleV0gPT09IHRoaXMuY3VycmVudCB9KVswXTtcbiAgICAgICAgJCgnLnBqYXhUb18nK3BhZ2VOYW1lKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGxvZyh0aGlzLnN0LHRoaXMuc3QgIT09IDApO1xuXG4gICAgICAgIGlmICh0aGlzLnN0ICE9PSAwKSByZXR1cm47XG5cbiAgICAgICAgLy8g5LiK44G4XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ3ByZXYnKTtcblxuICAgICAgICB2YXIgcGFnZU5hbWUgPSBPYmplY3Qua2V5cyh0aGlzLnBhZ2VMaXN0KS5maWx0ZXIoIChrZXkpID0+IHsgcmV0dXJuIHRoaXMucGFnZUxpc3Rba2V5XSA9PT0gdGhpcy5jdXJyZW50IH0pWzBdO1xuICAgICAgICAkKCcucGpheFRvXycrcGFnZU5hbWUpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cbiAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBibHVy6Kej6ZmkXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaXNOb3RUb3VjaCA9IHRydWU7XG5cbiAgICAvLyDjgrPjg7zjg6vjg5Djg4Pjgq9cbiAgICB0aGlzLm9uVG91Y2hFbmRDQigpO1xuXG4gIH1cblxuICBjYWxjdWxhdGVPcmRlcihkaXIpIHtcblxuICAgIHRoaXMub2xkID0gdGhpcy5jdXJyZW50O1xuXG4gICAgaWYgKGRpcj09J25leHQnKSB7XG5cbiAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgaWYgKHRoaXMuY3VycmVudD50aGlzLmxlbi0xKSB0aGlzLmN1cnJlbnQ9dGhpcy5sZW4tMTtcbiAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLmN1cnJlbnQtLTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQ8MCkgdGhpcy5jdXJyZW50PTA7ICBcbiAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICB9ICAgICBcblxuICB9XG5cbiAgc2V0RXZlbnRzKCl7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiRzdGFydFdyYXAub24oJ3RvdWNoc3RhcnQuU3dpcGVUcmFuc2l0aW9uJywgKGUpPT57dGhpcy5vblRvdWNoU3RhcnQoZSk7fSk7XG4gICAgLy8gdGhpcy4kd3JhcC5vbigndG91Y2htb3ZlLlN3aXBlVHJhbnNpdGlvbicsIChlKT0+e3RoaXMub25Ub3VjaE1vdmUoZSk7fSk7XG4gICAgdGhpcy4kZW5kV3JhcC5vbigndG91Y2hlbmQuU3dpcGVUcmFuc2l0aW9uJywgKGUpPT57dGhpcy5vblRvdWNoRW5kKGUpO30pO1xuXG4gIH1cblxuICAgcmVtb3ZlRXZlbnRzKCl7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiRzdGFydFdyYXAub2ZmKCd0b3VjaHN0YXJ0LlN3aXBlVHJhbnNpdGlvbicpO1xuICAgIC8vIHRoaXMuJHdyYXAub2ZmKCd0b3VjaG1vdmUuU3dpcGVUcmFuc2l0aW9uJyk7XG4gICAgdGhpcy4kZW5kV3JhcC5vZmYoJ3RvdWNoZW5kLlN3aXBlVHJhbnNpdGlvbicpO1xuXG4gIH1cblxuXG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Td2lwZVRyYW5zaXRpb24uZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBBbGVydFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gNTAwcHjku6XkuIvjgavjgarjgaPjgZ/jgonooajnpLpcbi8vICAg5pmC6KiIY291bnRcbi8vICAgY2FudmFz6KGo56S6XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0IHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJCgnI2FsZXJ0Jyk7XG4gICAgdGhpcy4kaDAxID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5oMDEnKTtcbiAgICB0aGlzLiRoMDIgPSB0aGlzLiR0YXJnZXQuZmluZCgnLmgwMicpO1xuICAgIHRoaXMuJG0wMSA9IHRoaXMuJHRhcmdldC5maW5kKCcubTAxJyk7XG4gICAgdGhpcy4kbTAyID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5tMDInKTtcblxuICAgIHRoaXMuaXNBbGVydCA9IChnYi5pbi5yLndzLmggPCA1MDApPyB0cnVlOiBmYWxzZTtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBnYi5pbi51LnRpbWUoKTtcblxuICAgIGxvZyhnYi5pbi51LmhvdXIsZ2IuaW4udS5taW51dGUsZ2IuaW4udS5zZWNvbmQpO1xuXG4gICAgdmFyIGggPSBnYi5pbi51LmFkZDAoZ2IuaW4udS5ob3VyKS5zcGxpdCgnJyk7XG4gICAgdmFyIG0gPSBnYi5pbi51LmFkZDAoZ2IuaW4udS5taW51dGUpLnNwbGl0KCcnKTtcbiAgICB2YXIgcyA9IGdiLmluLnUuYWRkMChnYi5pbi51LnNlY29uZCkuc3BsaXQoJycpO1xuXG4gICAgdGhpcy4kaDAxLnRleHQoaFswXSlcbiAgICB0aGlzLiRoMDIudGV4dChoWzFdKVxuICAgIHRoaXMuJG0wMS50ZXh0KG1bMF0pXG4gICAgdGhpcy4kbTAyLnRleHQobVsxXSlcblxuICAgIC8vIHRoaXMuJGgwMS50ZXh0KHNbMF0pXG4gICAgLy8gdGhpcy4kaDAyLnRleHQoc1sxXSlcbiAgICAvLyB0aGlzLiRtMDEudGV4dChzWzBdKTtcbiAgICAvLyB0aGlzLiRtMDIudGV4dChzWzFdKTtcblxuICB9XG5cbiAgcnVuKCkge1xuXG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgLy8gYWxlcnTnlLvpnaLooajnpLpcbiAgICBpZiAoZ2IuaW4uci53cy5oIDw9IDUwMCAmJiB0aGlzLmlzQWxlcnQpIHtcbiAgXG4gICAgICB0aGlzLmlzQWxlcnQgPSBmYWxzZTtcblxuICAgICAgZ2IuaW4udXAuYWRkKCd0aW1lJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAgIC8vIGFsZXJ0IFVJ6KGo56S6XG4gICAgICB0aGlzLiR0YXJnZXQuc2hvdygpO1xuXG4gICAgICAvLyDjgrPjg7Pjg57jga7ooajnpLrpnZ7ooajnpLpcbiAgICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OiAtMX0pO1xuXG4gICAgICB0bFxuICAgICAgICAuc2V0KHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSwge29wYWNpdHk6IDB9KVxuICAgICAgICAudG8odGhpcy4kdGFyZ2V0LmZpbmQoJy5jb2xvbicpLCAwLjUsIHtvcGFjaXR5OiAxLGVhc2U6IFBvd2VyMi5lYXNlSW5PdXR9KVxuICAgICAgICAudG8odGhpcy4kdGFyZ2V0LmZpbmQoJy5jb2xvbicpLCAwLjUsIHtvcGFjaXR5OiAwLGVhc2U6IFBvd2VyMi5lYXNlSW5PdXR9KVxuXG4gICAgfVxuXG4gICAgLy8gYWxlcnTnlLvpnaLpnZ7ooajnpLpcbiAgICBpZiAoZ2IuaW4uci53cy5oID4gNTAwICYmICF0aGlzLmlzQWxlcnQpIHtcbiAgXG4gICAgICB0aGlzLmlzQWxlcnQgPSB0cnVlO1xuXG4gICAgICBnYi5pbi51cC5yZW1vdmUoJ3RpbWUnKTtcblxuICAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSk7XG5cbiAgICAgIC8vIGFsZXJ0IFVJ6Z2e6KGo56S6XG4gICAgICB0aGlzLiR0YXJnZXQuaGlkZSgpO1xuXG4gICAgfVxuXG4gIH1cblxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdhbGVydCcsdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvQWxlcnQuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTaWRlUlxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8g44Oa44O844K4IOaMh+aomeOCkuaMgeOBpCBnYi5pbi51LnBhZ2Vcbi8vICAgIOODmuODvOOCuOODquOCueODiOOBrumFjeWIl+OBi+OBqiBsaXN0ID0gW3RvcCxtb3ZpZSwsLFxuLy8g55Wq5Y+35aSJ5pu0XG4vLyDjg5rjg7zjgrjlkI3lpInmm7Rcbi8vIOOCueOCr+ODreODvOODq+ihqOekuuODu+mdnuihqOekulxuLy8gICAgIGJsdXLjgafmtojjgYjjgovjgarjganjga/jgYLjgopcblxuaW1wb3J0IEhvdmVyRWZmZWN0QmFjayBmcm9tICcuLi9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RCYWNrLmVzNic7XG5pbXBvcnQgUGFnZVNjcm9sbCBmcm9tICcuL19wYXJ0cy9QYWdlU2Nyb2xsLmVzNic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVSIHtcblxuICBjb25zdHJ1Y3RvcihwYXJhbSl7XG5cbiAgICB0aGlzLmN1ciA9IC0xO1xuICAgIHRoaXMuJGN1ciA9ICQoJyNzaWRlUiAuaW5kaWNhdG9yIC5jdXJyZW50Jyk7XG5cbiAgICB0aGlzLiRwYWdlTmFtZSA9ICQoJyNzaWRlUiAudGl0JylcblxuICAgIHRoaXMuJG5leHQgPSAkKCcjc2lkZVIgLm5leHQnKTtcbiAgICB0aGlzLiRiYWNrID0gJCgnI3NpZGVSIC5iYWNrJyk7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICBuZXcgSG92ZXJFZmZlY3RCYWNrKCQoJyNzaWRlUiAuYmFjaycpKTtcblxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgdGhpcy5jaGFuZ2VDdXIoKTtcbiAgICB0aGlzLmNoYW5nZVBhZ2VOYW1lKCk7XG4gICAgdGhpcy5jaGFuZ2VOZXh0KCk7XG5cbiAgfVxuXG4gIC8vIOODmuODvOOCuOOBi+OCiembouOCjOOCi+OBqOOBjVxuICBvdXROdW0oKSB7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQKSByZXR1cm47XG5cbiAgICBUd2Vlbk1heC50byh0aGlzLiRjdXIsIDAuOSwge3RvcDogLTIwLCBvcGFjaXR5OiAwLFxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuICAgICAgICBUd2Vlbk1heC5zZXQodGhpcy4kY3VyLCB7dG9wOiAxMCwgb3BhY2l0eTogMH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICAvLyDjg5rjg7zjgrjjgbjlhaXjgovjgajjgY1cbiAgaW5OdW0oKSB7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQKSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5jaGFuZ2VOdW0oKTtcblxuICB9XG5cbiAgY2hhbmdlTnVtKCkge1xuXG4gICAgdmFyIGlkID0gZ2IuaW4ucGpheC5pZDtcblxuICAgIHN3aXRjaCAoaWQpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICB0aGlzLmN1ciA9IDE7XG4gICAgICAgIHRoaXMuJGN1ci50ZXh0KHRoaXMuY3VyKTtcbiAgICAgICAgdGhpcy4kY3VyLnNob3coKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbW92aWUnOlxuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXIgPSAyO1xuICAgICAgICB0aGlzLiRjdXIudGV4dCh0aGlzLmN1cik7XG4gICAgICAgIHRoaXMuJGN1ci5zaG93KCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ludGVydmlldyc6XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN1ciA9IDM7XG4gICAgICAgIHRoaXMuJGN1ci50ZXh0KHRoaXMuY3VyKTtcbiAgICAgICAgdGhpcy4kY3VyLnNob3coKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW50ZXJ2aWV3X2RldGFpbCc6XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRjdXIuaGlkZSgpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdoaXN0b3J5JzpcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VyID0gNDtcbiAgICAgICAgdGhpcy4kY3VyLnRleHQodGhpcy5jdXIpO1xuICAgICAgICB0aGlzLiRjdXIuc2hvdygpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gICAgVHdlZW5NYXgudG8odGhpcy4kY3VyLCAwLjYsIHt0b3A6IC03LCBvcGFjaXR5OiAxLCBlYXNlOiBFeHBvLmVhc2VPdXR9KTtcbiAgICBcbiAgfVxuXG4gIC8vIOODmuODvOOCuOOBi+OCiembouOCjOOCi+OBqOOBjVxuICBvdXRQYWdlTmFtZSgpIHtcblxuICAgIFR3ZWVuTWF4LnRvKHRoaXMuJHBhZ2VOYW1lLCAwLjksIHt4OiAxMDAsIHJvdGF0aW9uWjogLTkwLCBvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjMuZWFzZU91dH0pO1xuXG4gIH1cblxuICAvLyDjg5rjg7zjgrjjgbjlhaXjgovjgajjgY1cbiAgaW5QYWdlTmFtZSgpIHtcblxuICAgIHRoaXMuY2hhbmdlUGFnZU5hbWUoKTtcblxuICB9XG5cbiAgY2hhbmdlUGFnZU5hbWUoKSB7XG5cbiAgICB2YXIgaWQgPSBnYi5pbi5wamF4LmlkO1xuXG4gICAgc3dpdGNoIChpZCkge1xuXG4gICAgICBjYXNlICd0b3AnOlxuXG4gICAgICAgIHRoaXMuJHBhZ2VOYW1lLnRleHQoJycpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtb3ZpZSc6XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRwYWdlTmFtZS50ZXh0KCdNb3ZpZScpO1xuICAgICAgICBcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW50ZXJ2aWV3JzpcbiAgICAgICAgXG4gICAgICAgIHRoaXMuJHBhZ2VOYW1lIC50ZXh0KCdJbnRlcnZpZXcnKTtcbiAgICAgICAgXG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ludGVydmlld19kZXRhaWwnOlxuICAgICAgICBcbiAgICAgICAgdGhpcy4kcGFnZU5hbWUgLnRleHQoJ0ludGVydmlldycpO1xuICAgICAgICBcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaGlzdG9yeSc6XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRwYWdlTmFtZSAudGV4dCgnV2F0Y2ggJiBIaXN0b3J5Jyk7XG4gICAgICAgIFxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gICAgVHdlZW5NYXgudG8odGhpcy4kcGFnZU5hbWUsIDAuNiwge3g6IDAsIHJvdGF0aW9uWjogLTkwLCBvcGFjaXR5OiAxLCBlYXNlOiBQb3dlcjMuZWFzZU91dH0pO1xuXG4gIH1cblxuICAvLyDjg5rjg7zjgrjjgYvjgonpm6LjgozjgovjgajjgY0gYmFja+OCglxuICBvdXROZXh0KCkge1xuXG4gICAgVHdlZW5NYXgudG8odGhpcy4kbmV4dCwgMC45LCB7eDogMTAwLCBvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjMuZWFzZU91dH0pOyAvL3NpZGVSIG5leHRcbiAgICBUd2Vlbk1heC50byh0aGlzLiRiYWNrLCAwLjksIHt4OiAxMjAsIG9wYWNpdHk6IDAsIGVhc2U6IFBvd2VyMy5lYXNlT3V0fSk7IC8vc2lkZVIgYmFja1xuXG4gICAgVHdlZW5NYXgudG8oJCgnI3NpZGVMIC5zbnMucGMnKSwgMC45LCB7bGVmdDogLTEwLCBvcGFjaXR5OiAwLGVhc2U6IFBvd2VyMy5lYXNlT3V0fSkgLy8gc2lkZUwgc25zIHBjXG4gICAgXG4gIH1cblxuICAvLyDjg5rjg7zjgrjjgbjlhaXjgovjgajjgY1cbiAgaW5OZXh0KCkge1xuXG4gICAgdGhpcy5jaGFuZ2VOZXh0KCk7XG5cbiAgfVxuXG4gIGNoYW5nZU5leHQoKSB7XG5cbiAgICB2YXIgaWQgPSBnYi5pbi5wamF4LmlkO1xuXG4gICAgc3dpdGNoIChpZCkge1xuXG4gICAgICBjYXNlICd0b3AnOlxuXG4gICAgICAgIHRoaXMuJG5leHQuaGlkZSgpO1xuICAgICAgICBUd2Vlbk1heC50bygkKCcjc2lkZUwgLnNucy5wYycpLCAwLjYsIHtsZWZ0OiA0MCwgb3BhY2l0eTogMSxkZWxheTogMS4zLCBlYXNlOiBQb3dlcjMuZWFzZU91dH0pXG5cbiAgICAgICAgVHdlZW5NYXgudG8oJCgnI2hlYWRlciAuc3ViVGl0JyksIDAuNiwgeyAgLy8gaGVhZGVyIHN1YlRpdCDpmqDjgZlcbiAgICAgICAgICB5OiAtNjAsXG4gICAgICAgICAgb3BhY2l0eTowLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgICAgIG9uQ29tcGxldGU6KCk9PntcbiAgICAgICAgICAgICQoJyNoZWFkZXIgLnN1YlRpdCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtb3ZpZSc6XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRuZXh0LmZpbmQoJy50ZXh0JykudGV4dCgnSW50ZXJ2aWV3Jyk7XG4gICAgICAgIHRoaXMuJG5leHQucGFyZW50KCkuYXR0cih7J2hyZWYnOicvaW50ZXJ2aWV3Lyd9KTtcbiAgICAgICAgdGhpcy4kbmV4dC5zaG93KCk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8oJCgnI2hlYWRlciAuc3ViVGl0JyksIDAuNiwgeyAgLy8gaGVhZGVyIHN1YlRpdCDpmqDjgZlcbiAgICAgICAgICB5OiAtNjAsXG4gICAgICAgICAgb3BhY2l0eTowLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgICAgIG9uQ29tcGxldGU6KCk9PntcbiAgICAgICAgICAgICQoJyNoZWFkZXIgLnN1YlRpdCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdpbnRlcnZpZXcnOlxuICAgICAgICBcbiAgICAgICAgdGhpcy4kbmV4dC5maW5kKCcudGV4dCcpLnRleHQoJ1dhdGNoICYgSGlzdG9yeScpO1xuICAgICAgICB0aGlzLiRuZXh0LnBhcmVudCgpLmF0dHIoeydocmVmJzonL2hpc3RvcnkvJ30pO1xuICAgICAgICB0aGlzLiRuZXh0LnNob3coKTtcblxuICAgICAgICBUd2Vlbk1heC5zZXQoJCgnI2hlYWRlciAuc3ViVGl0JyksIHsnZGlzcGxheSc6ICdibG9jayd9KTsgLy8gaGVhZGVyIHN1YlRpdFxuICAgICAgICBUd2Vlbk1heC50bygkKCcjaGVhZGVyIC5zdWJUaXQnKSwgMC42LHt5OiAwLG9wYWNpdHk6MSxlYXNlOiBQb3dlcjMuZWFzZU91dH0pOyAvLyBoZWFkZXIgc3ViVGl0XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ludGVydmlld19kZXRhaWwnOlxuICAgICAgICBcbiAgICAgICAgdGhpcy4kbmV4dC5maW5kKCcudGV4dCcpLnRleHQoJ1NDUk9MTCcpO1xuICAgICAgICB0aGlzLiRuZXh0LnBhcmVudCgpLmF0dHIoeydocmVmJzonI2NvbnRlbnRzU3RhcnQnfSk7XG4gICAgICAgIHRoaXMuJG5leHQuc2hvdygpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJGJhY2ssIDAuNiwge3g6IDAsIG9wYWNpdHk6IDEsIGVhc2U6IFBvd2VyMy5lYXNlT3V0fSk7IC8vIGJhY2tcblxuICAgICAgICBUd2Vlbk1heC5zZXQoJCgnI2hlYWRlciAuc3ViVGl0JyksIHsnZGlzcGxheSc6ICdibG9jayd9KTsgLy8gaGVhZGVyIHN1YlRpdFxuICAgICAgICBUd2Vlbk1heC50bygkKCcjaGVhZGVyIC5zdWJUaXQnKSwgMC42LHt5OiAwLG9wYWNpdHk6MSxlYXNlOiBQb3dlcjMuZWFzZU91dH0pOyAvLyBoZWFkZXIgc3ViVGl0XG5cbiAgICAgICAgbmV3IFBhZ2VTY3JvbGwoKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaGlzdG9yeSc6XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRuZXh0LmZpbmQoJy50ZXh0JykudGV4dCgnU0NST0xMJyk7XG4gICAgICAgIHRoaXMuJG5leHQucGFyZW50KCkuYXR0cih7J2hyZWYnOicjY29udGVudHNTdGFydCd9KTtcbiAgICAgICAgdGhpcy4kbmV4dC5zaG93KCk7XG5cbiAgICAgICAgVHdlZW5NYXguc2V0KCQoJyNoZWFkZXIgLnN1YlRpdCcpLCB7J2Rpc3BsYXknOiAnYmxvY2snfSk7IC8vIGhlYWRlciBzdWJUaXRcbiAgICAgICAgVHdlZW5NYXgudG8oJCgnI2hlYWRlciAuc3ViVGl0JyksIDAuNix7eTogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIzLmVhc2VPdXR9KTsgLy8gaGVhZGVyIHN1YlRpdFxuXG4gICAgICAgIG5ldyBQYWdlU2Nyb2xsKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgICBUd2Vlbk1heC50byh0aGlzLiRuZXh0LCAwLjYsIHt4OiAwLCBvcGFjaXR5OiAxLCBlYXNlOiBQb3dlcjMuZWFzZU91dH0pO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1NpZGVSLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RCYWNrXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3ZlckVmZmVjdEJhY2sge1xuXG4gIGNvbnN0cnVjdG9yKCR0YXJnZXQpIHtcblxuICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXRcblxuICAgIC8vIG1vdGlvblxuICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIC8vIOOCueODnuODm+OBruOBqOOBjeOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChnYi5pbi51LmlzUEMpIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIGlmIChnYi5pbi51LmlzUmVzU1ApIHJldHVyblxuXG4gICAgaWYgKHRoaXMudGwwMikgdGhpcy50bDAyLmtpbGwoKTtcbiAgICB0aGlzLnRsMDEgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMudGwwMVxuICAgICAgLnRvKCQodGhhdCkuZmluZCgnc3BhbicpLCAwLjQsIHtcbiAgICAgICAgeDogMjAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9KVxuICAgICAgLnRvKCQodGhhdCkuZmluZCgnLmJhcicpLCAwLjQsIHtcbiAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjM3JylcbiAgICAgICAgXG4gIH1cblxuICBvbkxlYXZlICh0aGF0KSB7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQKSByZXR1cm5cblxuICAgIGlmICh0aGlzLnRsMDEpIHRoaXMudGwwMS5raWxsKCk7XG4gICAgdGhpcy50bDAyID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnRsMDJcbiAgICAgIC50bygkKHRoYXQpLmZpbmQoJy5iYXInKSwgMC41LCB7XG4gICAgICAgIHdpZHRoOiA3MCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0pXG4gICAgICAudG8oJCh0aGF0KS5maW5kKCdzcGFuJyksIDAuNSwge1xuICAgICAgICB4OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjQ1JylcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGFyZ2V0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKSB7c2VsZi5vbkVudGVyLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgJCh0aGlzKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uTGVhdmUuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICBcbiAgICB9KTtcblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGFyZ2V0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykub2ZmKCdtb3VzZWVudGVyJyk7XG4gICAgICAkKHRoaXMpLm9mZignbW91c2VsZWF2ZScpO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RCYWNrLmVzNiIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDjg5rjg7zjgrjlhoXjga7jgqLjg7Pjgqvjg7zjgrnjgq/jg63jg7zjg6vjgqTjg5njg7Pjg4jns7tcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBQYWdlU2Nyb2xsXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VTY3JvbGwge1xuXG4gIGNvbnN0cnVjdG9yKCR0YXJnZXQpIHtcblxuICAgIHRoaXMuY2IgPSBmdW5jdGlvbigpe307XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gZnVuY3Rpb24oKXt9O1xuXG4gICAgdGhpcy50ZXN0QWxlcnQgPSB0aGlzLl90ZXN0QWxlcnQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcbiAgICBcbiAgICB0aGlzLnRlc3RBbGVydCgpO1xuXG4gIH1cblxuICBwYWdldG9wKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8g44K544Kv44Ot44O844OrXG4gICAgVHdlZW5NYXgudG8oJCgnYm9keSxodG1sJyksIDAuOCwge1xuICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jYigpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cbiAgXG4gIF90ZXN0QWxlcnQgKCl7XG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCd0ZXN0QWxlcnQhISEnKTtcbiAgfVxuXG4gIHBhZ2VTY3JvbGxUbyh0aGF0KSB7XG5cbiAgICAvLyDlt67liIblj5blvpdcbiAgICB2YXIgZGlmID0gMDtcbiAgICBpZiAoJCh0aGF0KS5kYXRhKCdkaWZmJykpIGRpZiA9ICQodGhhdCkuZGF0YSgnZGlmZicpO1xuXG4gICAgdmFyICR0YXJnZXQgPSAkKCQodGhhdCkuYXR0cihcImhyZWZcIikpO1xuICAgIHZhciBwb3MgPSAkdGFyZ2V0Lm9mZnNldCgpLnRvcDtcbiAgICBwb3MgPSBwb3MgLSBkaWY7XG5cbiAgICBUd2Vlbk1heC50bygkKCdib2R5LGh0bWwnKSwgMC45LCB7c2Nyb2xsVG9wOiBwb3MsZWFzZTogRXhwby5lYXNlT3V0fSk7XG5cbiAgICBsb2coMTIzNCk7XG5cbiAgfVxuXG4gIHBhZ2VTY3JvbGxUbzAyKHRoYXQpIHtcblxuICAgIC8vIOW3ruWIhuWPluW+l1xuICAgIHZhciBkaWYgPSAwO1xuICAgIGlmICgkKHRoYXQpLmRhdGEoJ2RpZmYnKSkgZGlmID0gJCh0aGF0KS5kYXRhKCdkaWZmJyk7XG5cbiAgICB2YXIgJHRhcmdldCA9ICQoJCh0aGF0KS5kYXRhKFwibGlua1wiKSk7XG4gICAgdmFyIHBvcyA9ICR0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAgIHBvcyA9IHBvcyAtIGRpZjtcblxuICAgIFR3ZWVuTWF4LnRvKCQoJ2JvZHksaHRtbCcpLCAwLjksIHtzY3JvbGxUb3A6IHBvcyxlYXNlOiBFeHBvLmVhc2VPdXR9KTtcblxuICB9XG5cbiAgc2V0RXZlbnRzICgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQoJy50b1RvcCcpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgZnVuY3Rpb24oKXtcblxuICAgICAgc2VsZi5wYWdldG9wLmNhbGwoc2VsZik7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIH0pO1xuXG5cbiAgICBsb2coJzExMScpXG5cbiAgICAvLyBocmVm44GMI+OBp+Wni+OBvuOBo+OBpuOBhOOCi+OAgWHjgr/jgrDjgpLjgq/jg6rjg4Pjgq/jgZfjgZ/pmptcbiAgICAkKCdhW2hyZWZePSNdJykubm90KCcubm90U2Nyb2xsJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgbG9nKDEyMyk7XG4gICAgICBzZWxmLnBhZ2VTY3JvbGxUby5jYWxsKHNlbGYsdGhpcyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBoaXN0b3J544GucGFzdCxwcmVzZW50XG4gICAgJCgnLmJsb2NrMDEgLnRleHRXcmFwMDIgLml0ZW0nKS5ub3QoJy5ub3RTY3JvbGwnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7c2VsZi5wYWdlU2Nyb2xsVG8wMi5jYWxsKHNlbGYsdGhpcyk7cmV0dXJuIGZhbHNlfSk7XG4gICAgLy8gaHJlZuOBjCPjgaflp4vjgb7jgaPjgabjgYTjgovjgIF0b1Njcm9sbOOBqOOBhOOBhuOCr+ODqeOCueOBjOS7mOWKoOOBleOCjOOBn+OCv+OCsOOCkuOCr+ODquODg+OCr+OBl+OBn+mam1xuICAgIC8vICQoJ1tocmVmXj0jXS50b1Njcm9sbCcpLm5vdCgnLm5vdFNjcm9sbCcpLm9uKCdjbGljaycsdG9TY3JvbGwpO1xuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9fcGFydHMvUGFnZVNjcm9sbC5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFRpbWVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc1N0YXRlID0gJyc7XG4gICAgdGhpcy5zdGF0ZUxpc3QgPSBbXG4gICAgICAnbW9ybmluZycsXG4gICAgICAnYWZ0ZXJub29uJyxcbiAgICAgICduaWdodCdcbiAgICBdXG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICAgIHRoaXMuanVkZ2VTdGF0ZSgpO1xuIFxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICBsb2coZ2IuaW4udS5kYXRlKCkpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBnYi5pbi51LnRpbWUoKTtcblxuICAgIGxvZyhnYi5pbi51LmhvdXIsZ2IuaW4udS5taW51dGUsZ2IuaW4udS5zZWNvbmQpO1xuXG4gIH1cblxuICBnZXROb3coKSB7XG5cblxuICB9XG4gICAgICAgXG4gIC8vIOODi+ODpeODvOODqOODvOOCr+aZgumWk+OBruWPluW+l1xuICBnZXROb3dBdE5ZKCkge1xuXG4gICAgZ2IuaW4udS50aW1lKCk7XG4gICAgdmFyIGhvdXIgPSBnYi5pbi51LmhvdXJcbiAgICB2YXIgZGlzID0gMTM7IC8vIOODi+ODpeODvOODqOODvOOCr+OBqOOBruaZguW3rlxuXG4gICAgaG91ciA9IGhvdXIgLSBkaXM7XG4gICAgaWYgKGhvdXIgPCAwKSBob3VyID0gMjQgKyBob3VyO1xuXG4gICAgcmV0dXJuIGhvdXI7XG5cbiAgfVxuXG4gIC8vIOacneWkleWknOWIpOWumlxuICBqdWRnZVN0YXRlKCkge1xuXG4gICAgdmFyIGggPSB0aGlzLmdldE5vd0F0TlkoKTtcblxuICAgIC8vIOacnSA244CcMTVcbiAgICBpZiAoNiA8PSBoICYmIGggPD0gMTUpIHtcblxuICAgICAgdGhpcy5pc1N0YXRlID0gdGhpcy5zdGF0ZUxpc3RbMF07XG5cbiAgICAvLyDlpJUgMTbjgJwyMFxuICAgIH0gZWxzZSBpZiAoMTUgPCBoICYmIGggPD0gMjApIHtcblxuICAgICAgdGhpcy5pc1N0YXRlID0gdGhpcy5zdGF0ZUxpc3RbMV07XG5cbiAgICAvLyDlpJwgMjHjgJw1XG4gICAgfSBlbHNlIGlmICgoMjAgPCBoICYmIGggPD0gMjMpIHx8ICgwIDw9IGggJiYgaCA8PTUpKSB7XG5cbiAgICAgIHRoaXMuaXNTdGF0ZSA9IHRoaXMuc3RhdGVMaXN0WzJdO1xuXG4gICAgfVxuXG4gICAgLy8gbG9nKHRoaXMuaXNTdGF0ZSk7XG5cbiAgfVxuICAgICAgIFxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi51cC5hZGQodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1RpbWUuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTY3JvbGxUcmFuc2l0aW9uXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxUcmFuc2l0aW9uIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLnBhZ2VMaXN0ID0ge1xuICAgICAgJ3RvcCc6IDAsXG4gICAgICAnbW92aWUnOiAxLFxuICAgICAgJ2ludGVydmlldyc6IDIsXG4gICAgICAnaGlzdG9yeSc6IDMsXG4gICAgfVxuXG4gICAgLy8gdmFyaWFibGVcbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgIHRoaXMub2xkID0gbnVsbDtcbiAgICB0aGlzLm5leHQgPSAxO1xuICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgdGhpcy5sZW4gPSA0O1xuXG4gICAgdGhpcy5pc1N3aXRjaCA9IHRydWU7XG5cblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBzd2l0Y2goKSB7XG5cbiAgICBpZiAoIWdiLmluLnUuaXNJRSkgdmFyIHZhbCA9IDMwO1xuICAgIGVsc2UgdmFyIHZhbCA9IDA7XG5cbiAgICAvLyBsb2coZ2IuaW4ucGpheC5pc1BqYXhMb2NrLHRoaXMuU1RBbW91bnQsdGhpcy5jdXJyZW50LHRoaXMuaXNTd2l0Y2gpO1xuXG4gICAgLy8gcGpheGxvY2vmmYLjga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4ucGpheC5pc1BqYXhMb2NrKSByZXR1cm47XG5cbiAgICAvLyDjg5rjg7zjgrjnlarlj7fjgpLlj5blvpdcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnBhZ2VMaXN0W2diLmluLnBqYXguaWRdO1xuXG4gICAgLy/jg5vjgqTjg7zjg6vjgYww5Lul5LiKIOOBi+OBpCBjdXJyZW5044GM5LiA55Wq5pyA5Yid44Gn44Gq44GEIOOBi+OBpCBzd2l0Y2jlj6/og73nirbmhYvjgafjgYLjgozjgbBcbiAgICBpZiAodGhpcy5TVEFtb3VudCA+IHZhbCAmJiB0aGlzLmN1cnJlbnQgPiAwICYmIHRoaXMuaXNTd2l0Y2gpIHtcblxuICAgICAgLy8gaGlzdG9yeeODmuODvOOCuOOBruOBqOOBjeOBr+S4iuOCueOCr+ODreODvOODq+OBl+OBpuOCgmludGVydmlldyBpbmRleOOBq+mjm+OBsOOBleOBquOBhFxuICAgICAgaWYgKGdiLmluLnBqYXguaWQ9PSdoaXN0b3J5JykgcmV0dXJuO1xuXG4gICAgICB0aGlzLmlzU3dpdGNoID0gZmFsc2U7XG4gIFxuICAgICAgdGhpcy5jYWxjdWxhdGVPcmRlcigncHJldicpO1xuXG4gICAgICB2YXIgcGFnZU5hbWUgPSBPYmplY3Qua2V5cyh0aGlzLnBhZ2VMaXN0KS5maWx0ZXIoIChrZXkpID0+IHsgcmV0dXJuIHRoaXMucGFnZUxpc3Rba2V5XSA9PT0gdGhpcy5jdXJyZW50IH0pWzBdO1xuXG4gICAgICAkKCcucGpheFRvXycrcGFnZU5hbWUpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cblxuICAgIC8v44Ob44Kk44O844Or44GMMOS7peS4iyDjgYvjgaQgY3VycmVudOOBjOS4gOeVquacgOW+jOOBp+OBquOBhCDjgYvjgaQgc3dpdGNo5Y+v6IO954q25oWL44Gn44GC44KM44GwXG4gICAgfSBlbHNlIGlmKHRoaXMuU1RBbW91bnQgPCAtdmFsICYmIHRoaXMuY3VycmVudCA8IHRoaXMubGVuLTEgJiYgdGhpcy5pc1N3aXRjaCkge1xuXG4gICAgICB0aGlzLmlzU3dpdGNoID0gZmFsc2U7XG4gICAgICBcbiAgICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ25leHQnKTtcblxuICAgICAgdmFyIHBhZ2VOYW1lID0gT2JqZWN0LmtleXModGhpcy5wYWdlTGlzdCkuZmlsdGVyKCAoa2V5KSA9PiB7IHJldHVybiB0aGlzLnBhZ2VMaXN0W2tleV0gPT09IHRoaXMuY3VycmVudCB9KVswXTtcblxuICAgICAgJCgnLnBqYXhUb18nK3BhZ2VOYW1lKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgfTtcblxuXG4gIH1cblxuICBjYWxjdWxhdGVPcmRlcihkaXIpIHtcblxuICAgIHRoaXMub2xkID0gdGhpcy5jdXJyZW50O1xuXG4gICAgaWYgKGRpcj09J25leHQnKSB7XG5cbiAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgaWYgKHRoaXMuY3VycmVudD50aGlzLmxlbi0xKSB0aGlzLmN1cnJlbnQ9dGhpcy5sZW4tMTtcbiAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLmN1cnJlbnQtLTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQ8MCkgdGhpcy5jdXJyZW50PTA7ICBcbiAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICB9ICAgICBcblxuICB9XG5cbiAgb25Nb3VzZVdoZWVsKGUsIGRlbHRhLCBkZWx0YVgsIGRlbHRhWSkge1xuXG4gICAgLy8gbWVudeOBjOmWi+OBhOOBpuOBhOOCi+OBqOOBjeOBr+OCueOCr+ODreODvOODq+mBt+enu+OBleOBm+OBquOBhFxuICAgIGlmIChnYi5pbi5tZW51LmlzT3BlbikgcmV0dXJuO1xuICAgIC8vIHJlcyBzcOOBruOBqOOBjeOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChnYi5pbi51LmlzUmVzU1ApIHJldHVyblxuXG4gICAgdGhpcy5TVEFtb3VudCA9IGdiLmluLnMuU1RBbW91bnQ7XG4gICAgXG4gICAgdGhpcy5zd2l0Y2goKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgICBnYi5pbi5zLmFkZCgnU2Nyb2xsVHJhbnNpdGlvbicsIHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcykpO1xuXG5cbiAgfVxuICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1Njcm9sbFRyYW5zaXRpb24uZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQYWdlVG9wXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlVG9wIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5yZWFkeSgpO1xuXG4gIH1cblxuICByZWFkeSgpIHtcblxuXG4gIH1cblxuICBwYWdldG9wKCkge1xuXG4gICAgLy8g44K544Kv44Ot44O844OrXG4gICAgVHdlZW5NYXgudG8oJCgnYm9keSxodG1sJyksIDAuOCwge1xuICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG5cbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgc2V0RXZlbnRzICgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQoJy50b1RvcCcpLm9uKCdjbGljaycsdGhpcy5wYWdldG9wLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvX3BhcnRzL1BhZ2VUb3AuZXM2IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNuc1xuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgbWV0YURhdGEgZnJvbSBcImpzb24tbG9hZGVyIS4uLy4uLy4uLy4uL2Vqcy9pbmMvbWV0YURhdGEuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbnMge1xuXG4gIGNvbnN0cnVjdG9yKCRmYiwkdHcsJGxpbmUsJG1haWwpe1xuXG4gICAgdGhpcy4kZmIgPSAkZmI7XG4gICAgdGhpcy4kdHcgPSAkdHc7XG4gICAgdGhpcy4kbGluZSA9ICRsaW5lO1xuICAgIHRoaXMuJG1haWwgPSAkbWFpbDtcblxuICAgIHRoaXMuZmIgPSB7XG4gICAgICAkdGFyZ2V0OiAkZmIsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgIH1cblxuICAgIHRoaXMudHcgPSB7XG4gICAgICAkdGFyZ2V0OiAkdHcsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgaGFzaDogJ2hhc2gnLFxuICAgIH1cblxuICAgIHRoaXMubGluZSA9IHtcbiAgICAgICR0YXJnZXQ6ICRsaW5lLFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICB9XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzd2l0Y2hNZXRhKCkge1xuXG4gICAgdmFyIHAgPSBnYi5pbi5wamF4LmlkO1xuICAgIGlmIChwID09ICdpbnRlcnZpZXdfZGV0YWlsJykge1xuXG4gICAgICBsb2coJCgnLnNlY3Rpb24nKS5oYXNDbGFzcygnc2VjdGlvbjAzX2RldGFpbDAxJykpO1xuICAgICAgaWYgKCQoJy5zZWN0aW9uJykuaGFzQ2xhc3MoJ3NlY3Rpb24wM19kZXRhaWwwMScpKSBwID0gJ2ludGVydmlld0RldGFpbDAxJztcbiAgICAgIGVsc2UgaWYgKCQoJy5zZWN0aW9uJykuaGFzQ2xhc3MoJ3NlY3Rpb24wM19kZXRhaWwwMicpKSBwID0gJ2ludGVydmlld0RldGFpbDAyJztcbiAgICAgIGVsc2UgaWYgKCQoJy5zZWN0aW9uJykuaGFzQ2xhc3MoJ3NlY3Rpb24wM19kZXRhaWwwMycpKSBwID0gJ2ludGVydmlld0RldGFpbDAzJztcbiAgXG4gICAgfVxuXG4gICAgLy8gdmFyIGQgPSBnYi5pbi5jb25mLm1ldGFbcF07XG4gICAgdmFyIGQgPSBtZXRhRGF0YVtwXTtcblxuICAgICQoJ3RpdGxlJykudGV4dCgpO1xuICAgICQoJy5tZXRhRGVzJykuYXR0cih7J2NvbnRlbnQnOiBkLmRlc2NyaXB0aW9ufSk7XG4gICAgJCgnLm1ldGFLZXknKS5hdHRyKHsnY29udGVudCc6IGQua2V5d29yZH0pO1xuXG4gICAgJCgnLmZiVGl0JykuYXR0cih7J2NvbnRlbnQnOiBkLmZiLnRpdH0pO1xuICAgICQoJy5mYkRlcycpLmF0dHIoeydjb250ZW50JzogZC5mYi5kZXN9KTtcbiAgICAkKCcuZmJJbWcnKS5hdHRyKHsnY29udGVudCc6IGQuZmIuaW1nfSk7XG4gICAgJCgnLmZiVXJsJykuYXR0cih7J2NvbnRlbnQnOiBkLmZiLnVybH0pO1xuXG4gICAgJCgnLnR3VGl0JykuYXR0cih7J2NvbnRlbnQnOiBkLnR3LnRpdH0pO1xuICAgICQoJy50d0RlcycpLmF0dHIoeydjb250ZW50JzogZC50dy5kZXN9KTtcbiAgICAkKCcudHdJbWcnKS5hdHRyKHsnY29udGVudCc6IGQudHcuaW1nfSk7XG4gICAgJCgnLnR3VXJsJykuYXR0cih7J2NvbnRlbnQnOiBkLnR3LnVybH0pO1xuXG5cbiAgfVxuXG4gIHNldHRpbmcoKSB7XG5cbiAgICB0aGlzLmZiID0ge1xuICAgICAgJHRhcmdldDogdGhpcy4kZmIsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgIH1cblxuICAgIHRoaXMudHcgPSB7XG4gICAgICAkdGFyZ2V0OiB0aGlzLiR0dyxcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgICBoYXNoOiAnaGFzaCcsXG4gICAgfVxuXG4gICAgdGhpcy5saW5lID0ge1xuICAgICAgJHRhcmdldDogdGhpcy4kbGluZSxcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgfVxuXG4gIH1cblxuICBzZXRPZ0ltZygpIHtcblxuICAgIC8vICQoJy5vZ0ltZ19mYicpLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLmZiLmltZyk7XG4gICAgLy8gJCgnLm9nSW1nX3R3JykuYXR0cignY29udGVudCcsIHRoaXMudHcuaW1nKTtcblxuICB9XG5cbiAganVtcEZCKGUpIHtcblxuICAgICAgdGhpcy5vcGVuV2luZG93KCdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0nICsgdGhpcy5mYi51cmwpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG5cbiAganVtcFRXKGUpIHtcblxuICAgIHRoaXMub3BlbldpbmRvdygnaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9JyArIHRoaXMudHcudXJsICsgJyZ0ZXh0PScgKyB0aGlzLnR3LmRlcyk7XG4gICAgLy8gdGhpcy5vcGVuV2luZG93KCdodHRwOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0nICsgdGhpcy50dy51cmwgKyAnJnRleHQ9JyArIHRoaXMudHcudGV4dCArICcmaGFzaHRhZ3M9JyArIHRoaXMudHcuaGFzaCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIGp1bXBMSU5FKCkge1xuXG4gICAgICB0aGlzLm9wZW5XaW5kb3coJ2h0dHA6Ly9saW5lLm1lL1IvbXNnL3RleHQvPycgKyB0aGlzLmxpbmUudGl0ICsgJyUwQScgKyB0aGlzLmxpbmUudXJsKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25TZW5kTWFpbCgpIHtcblxuICAgIHZhciBhZGRyZXNzID0gJyc7XG4gICAgdmFyIHN1YiA9ICcnO1xuICAgIHZhciBib2R5ID0gZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKydcXG4nK2xvY2F0aW9uLmhyZWYpO1xuXG4gICAgbG9jYXRpb24uaHJlZiA9ICdtYWlsdG86JyArIGFkZHJlc3MgKyAnP3N1YmplY3Q9JyArIHN1YiArICcmYm9keT0nICsgYm9keTtcblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgb3BlbldpbmRvdyh1cmwsIHcsIGgpIHtcblxuICAgICAgaWYodyA9PT0gdW5kZWZpbmVkKSB3ID0gNjAwO1xuICAgICAgaWYoaCA9PT0gdW5kZWZpbmVkKSBoID0gNjAwO1xuXG4gICAgICB2YXIgbCA9IE51bWJlcigod2luZG93LnNjcmVlbi53aWR0aC13KS8yKTtcbiAgICAgIHZhciB0ID0gTnVtYmVyKCh3aW5kb3cuc2NyZWVuLmhlaWdodC1oKS8yKTtcblxuICAgICAgd2luZG93Lm9wZW4odXJsLCduZXdfd2luZG93JyxcbiAgICAgICAgICAgICAgICAnbWVudWJhcj1ubywnICtcbiAgICAgICAgICAgICAgICAndG9vbGJhcj1ubywnICtcbiAgICAgICAgICAgICAgICAncmVzaXphYmxlPXllcywnICtcbiAgICAgICAgICAgICAgICAnc2Nyb2xsYmFycz15ZXMsJyArXG4gICAgICAgICAgICAgICAgJ2hlaWdodD0nICsgaCArICcsJyArXG4gICAgICAgICAgICAgICAgJ3dpZHRoPScgKyB3ICsgJywnICtcbiAgICAgICAgICAgICAgICAnbGVmdD0nICsgbCArICcsJyArXG4gICAgICAgICAgICAgICAgJ3RvcD0nICsgdFxuICAgICAgICAgICAgICApO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB0aGlzLmZiLiR0YXJnZXQub24oJ2NsaWNrJywgdGhpcy5qdW1wRkIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50dy4kdGFyZ2V0Lm9uKCdjbGljaycsIHRoaXMuanVtcFRXLmJpbmQodGhpcykpO1xuICAgIHRoaXMubGluZS4kdGFyZ2V0Lm9uKCdjbGljaycsIHRoaXMuanVtcExJTkUuYmluZCh0aGlzKSk7XG4gICAgaWYgKHRoaXMuJG1haWwpIHRoaXMuJG1haWwub24oJ2NsaWNrJywgKCk9Pnt0aGlzLm9uU2VuZE1haWwoKTtyZXR1cm4gZmFsc2U7fSk7XG5cbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcblxuICAgIHRoaXMuZmIuJHRhcmdldC5vZmYoJ2NsaWNrJyk7XG4gICAgdGhpcy50dy4kdGFyZ2V0Lm9mZignY2xpY2snKTtcbiAgICB0aGlzLmxpbmUuJHRhcmdldC5vZmYoJ2NsaWNrJyk7XG4gICAgaWYgKHRoaXMuJG1haWwpIHRoaXMuJG1haWwub2ZmKCdjbGljaycpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU25zLmVzNiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3RpcHRpb25cIixcblx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFwib2dwSW1nUGF0aFwiOiBcIlwiLFxuXHRcInRvcFwiOiB7XG5cdFx0XCJkZXNjcmlwdGlvblwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwiZmJcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2Vic2l0ZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJsaW5lXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcInR3XCI6IHtcblx0XHRcdFwiY2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcblx0XHRcdFwiY3JlYXRvclwiOiBcIlwiLFxuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIlwiLFxuXHRcdFx0XCJ1cmxcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIlxuXHRcdH1cblx0fSxcblx0XCJtb3ZpZVwiOiB7XG5cdFx0XCJkZXNjcmlwdGlvblwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwiZmJcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2Vic2l0ZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJsaW5lXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcInR3XCI6IHtcblx0XHRcdFwiY2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcblx0XHRcdFwiY3JlYXRvclwiOiBcIlwiLFxuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIlwiLFxuXHRcdFx0XCJ1cmxcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIlxuXHRcdH1cblx0fSxcblx0XCJpbnRlcnZpZXdcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaW50ZXJ2aWV3RGV0YWlsMDFcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaW50ZXJ2aWV3RGV0YWlsMDJcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaW50ZXJ2aWV3RGV0YWlsMDNcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaGlzdG9yeVwiOiB7XG5cdFx0XCJkZXNjcmlwdGlvblwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwiZmJcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2Vic2l0ZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJsaW5lXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcInR3XCI6IHtcblx0XHRcdFwiY2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcblx0XHRcdFwiY3JlYXRvclwiOiBcIlwiLFxuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIlwiLFxuXHRcdFx0XCJ1cmxcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIlxuXHRcdH1cblx0fVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vanNvbi1sb2FkZXIhL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvZWpzL2luYy9tZXRhRGF0YS5qc29uXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNsaWRlciBzc3Ncbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciB7XG5cbiAgY29uc3RydWN0b3IoJHdyYXApIHtcblxuICAgIC8vIGRvbVxuICAgIHRoaXMuJGltZyA9ICR3cmFwLmZpbmQoJy5zbGlkZXIgLml0ZW0nKTtcbiAgICB0aGlzLiRvdmVybGF5ID0gJHdyYXAuZmluZCgnLm92ZXJsYXknKTtcblxuICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgdGhpcy5vbGQgPSBudWxsO1xuICAgIHRoaXMubmV4dCA9IDE7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmxlbiA9IHRoaXMuJGltZy5sZW5ndGg7XG5cbiAgICB0aGlzLlRpbWVyID0gbnVsbDtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICAvLyB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIHRoaXMuc3dpdGNoRGV0YWlscygpO1xuXG4gICAgLy8gdGhpcy5zID0gbmV3IFN3aXBlKCk7XG4gICAgLy8gdGhpcy5zLm9uTmV4dCA9IHRoaXMucmlnaHQuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLnMub25QcmV2ID0gdGhpcy5sZWZ0LmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIC8vIOWPs+OBuFxuICByaWdodCgpIHtcblxuICAgIC8vIGlmICh0aGlzLmN1cnJlbnQgPT0gdGhpcy5sZW4gLSAxKSByZXR1cm47XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIC8vIGZsYXNoXG4gICAgLy8gdGxcbiAgICAvLyAgIC8vIOeZveOBj1xuICAgIC8vICAgLnNldCh0aGlzLiRvdmVybGF5LCB7b3BhY2l0eTogMX0pXG4gICAgLy8gICAudG8odGhpcy4kb3ZlcmxheSwgMS4wLCB7XG4gICAgLy8gICAgIG9wYWNpdHk6IDAsXG4gICAgLy8gICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgIC8vICAgICBvblN0YXJ0OiAoKT0+e1xuXG4gICAgLy8gICAgICAgLy8gbmV4dFxuICAgIC8vICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRpbWcuZXEodGhpcy5uZXh0KSwge29wYWNpdHk6IDF9KTtcblxuICAgIC8vICAgICAgIC8vIGN1cnJlbnRcbiAgICAvLyAgICAgICBUd2Vlbk1heC5zZXQodGhpcy4kaW1nLmVxKHRoaXMuY3VycmVudCksIHtvcGFjaXR5OiAwfSk7XG4gICAgICAgICAgXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG5cbiAgICB0bFxuICAgICAgLnNldCh0aGlzLiRpbWcuZXEodGhpcy5uZXh0KSwge3g6IDYwfSlcbiAgICAgIC50byh0aGlzLiRpbWcuZXEodGhpcy5uZXh0KSwgMC42LCB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgfSlcbiAgICAgIC50byh0aGlzLiRpbWcuZXEodGhpcy5jdXJyZW50KSwgMC42LCB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHg6IC02MCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICB9LCctPTAuMycpXG5cbiAgICAvLyBjdXJyZW5044Gu6KiI566XXG4gICAgdGhpcy5jYWxjdWxhdGVPcmRlcigncmlnaHQnKTtcblxuICAgIC8vIHRleHTjga7lpInmm7RcbiAgICAvLyB0aGlzLnN3aXRjaERldGFpbHMoKTtcblxuICAgIC8vIGluZGljYXRvcuOBruWkieabtFxuICAgIC8vIHRoaXMuc3dpdGNoSW5kaWNhdG9yKCk7XG5cbiAgfVxuXG4gIC8vIOW3puOBuFxuICBsZWZ0KCkge1xuXG4gICAgLy8gaWYgKHRoaXMuY3VycmVudCA9PSAwKSByZXR1cm47XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIC8vIHRsXG4gICAgLy8gICAvLyDnmb3jgY9cbiAgICAvLyAgIC5zZXQodGhpcy4kb3ZlcmxheSwge29wYWNpdHk6IDF9KVxuICAgIC8vICAgLnRvKHRoaXMuJG92ZXJsYXksIDAuNiwge1xuICAgIC8vICAgICBvcGFjaXR5OiAwLFxuICAgIC8vICAgICBvblN0YXJ0OiAoKT0+e1xuXG4gICAgLy8gICAgICAgLy8gbmV4dFxuICAgIC8vICAgICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRpbWcuZXEodGhpcy5wcmV2KSwge29wYWNpdHk6IDF9KTtcblxuICAgIC8vICAgICAgIC8vIGN1cnJlbnRcbiAgICAvLyAgICAgICBUd2Vlbk1heC5zZXQodGhpcy4kaW1nLmVxKHRoaXMuY3VycmVudCksIHtvcGFjaXR5OiAwfSk7XG4gICAgICAgICAgXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG4gICAgXG4gICAgdGxcbiAgICAgIC5zZXQodGhpcy4kaW1nLmVxKHRoaXMucHJldiksIHt4OiAtNjB9KVxuICAgICAgLnRvKHRoaXMuJGltZy5lcSh0aGlzLnByZXYpLCAwLjYsIHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgeDogMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICB9KVxuICAgICAgLnRvKHRoaXMuJGltZy5lcSh0aGlzLmN1cnJlbnQpLCAwLjYsIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeDogNjAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgfSwnLT0wLjMnKVxuXG4gICAgLy8gY3VycmVudOOBruioiOeul1xuICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ2xlZnQnKTtcblxuICAgIC8vIHRleHTjga7lpInmm7RcbiAgICAvLyB0aGlzLnN3aXRjaERldGFpbHMoKTtcblxuICAgIC8vIGluZGljYXRvcuOBruWkieabtFxuICAgIC8vIHRoaXMuc3dpdGNoSW5kaWNhdG9yKCk7XG5cbiAgfVxuXG4gIHN3aWN0aEFycm93KCkge1xuXG4gICAgLy8g5Y+z56uvXG4gICAgaWYgKHRoaXMuY3VycmVudCA9PSB0aGlzLmxlbiAtIDEpIHtcblxuICAgICAgdmFyIHNyYyA9IHRoaXMuJGFycm93Ui5hdHRyKCdzcmMnKTtcbiAgICAgIHNyYyA9IGdiLmluLnUuc3RyUmVwbGFjZShzcmMsICdfb24nLCAnX29mZicpO1xuICAgICAgdGhpcy4kYXJyb3dSLmF0dHIoJ3NyYycsc3JjKTtcblxuICAgIC8vIOW3puerr1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50ID09IDApIHtcblxuICAgICAgdmFyIHNyYyA9IHRoaXMuJGFycm93TC5hdHRyKCdzcmMnKTtcbiAgICAgIHNyYyA9IGdiLmluLnUuc3RyUmVwbGFjZShzcmMsICdfb24nLCAnX29mZicpO1xuICAgICAgdGhpcy4kYXJyb3dMLmF0dHIoJ3NyYycsc3JjKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHZhciBzcmMgPSB0aGlzLiRhcnJvd0wuYXR0cignc3JjJyk7XG4gICAgICBzcmMgPSBnYi5pbi51LnN0clJlcGxhY2Uoc3JjLCAnX29mZicsICdfb24nKTtcbiAgICAgIHRoaXMuJGFycm93TC5hdHRyKCdzcmMnLHNyYyk7XG5cbiAgICAgIHZhciBzcmMgPSB0aGlzLiRhcnJvd1IuYXR0cignc3JjJyk7XG4gICAgICBzcmMgPSBnYi5pbi51LnN0clJlcGxhY2Uoc3JjLCAnX29mZicsICdfb24nKTtcbiAgICAgIHRoaXMuJGFycm93Ui5hdHRyKCdzcmMnLHNyYyk7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHN3aXRjaERldGFpbHMoKSB7XG5cbiAgICB2YXIgdCA9IHRoaXMudGV4dExpc3RbdGhpcy5jdXJyZW50XTtcbiAgICB2YXIgcCA9IHRoaXMucHJpY2VMaXN0W3RoaXMuY3VycmVudF07XG5cbiAgICB0aGlzLiR0ZXh0Lmh0bWwodCk7XG4gICAgdGhpcy4kcHJpY2UudGV4dChwKTtcblxuICB9XG5cbiAgc3dpdGNoSW5kaWNhdG9yKCkge1xuXG4gICAgdGhpcy4kaW5kaWNhdG9yXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2lzQWN0aXZlJylcbiAgICAgIC5lcSh0aGlzLmN1cnJlbnQpLmFkZENsYXNzKCdpc0FjdGl2ZScpO1xuXG4gIH1cblxuICBjYWxjdWxhdGVPcmRlcihkaXIpIHtcblxuICAgIHRoaXMub2xkID0gdGhpcy5jdXJyZW50O1xuXG4gICAgLy8g56uv44Gn5q2i44KB44KLXG4gICAgLy8gaWYgKGRpcj09J3JpZ2h0Jykge1xuXG4gICAgLy8gICB0aGlzLmN1cnJlbnQrKztcbiAgICAvLyAgIGlmICh0aGlzLmN1cnJlbnQ+dGhpcy5sZW4tMSkgdGhpcy5jdXJyZW50PXRoaXMubGVuLTE7XG4gICAgLy8gICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAvLyAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgLy8gfSBlbHNlIHtcblxuICAgIC8vICAgdGhpcy5jdXJyZW50LS07XG4gICAgLy8gICBpZiAodGhpcy5jdXJyZW50PDApIHRoaXMuY3VycmVudD0wOyAgXG4gICAgLy8gICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAvLyAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgLy8gfVxuXG4gICAgLy8g44Or44O844OXXG4gICAgaWYgKGRpcj09J3JpZ2h0Jykge1xuXG4gICAgICB0aGlzLmN1cnJlbnQrKztcblxuICAgICAgaWYgKHRoaXMuY3VycmVudD50aGlzLmxlbi0xKSB7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50PTA7XG4gICAgICAgIHRoaXMubmV4dD10aGlzLmN1cnJlbnQrMTtcbiAgICAgICAgdGhpcy5wcmV2PXRoaXMubGVuLTE7XG4gICAgICAgIGxvZyh0aGlzLmN1cnJlbnQpO1xuICAgICAgICBsb2codGhpcy5uZXh0KTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3VycmVudD09dGhpcy5sZW4tMSkge1xuXG4gICAgICAgIHRoaXMubmV4dD0wO1xuICAgICAgICB0aGlzLnByZXY9dGhpcy5jdXJyZW50LTE7XG5cbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuY3VycmVudC0tO1xuICAgICAgaWYgKHRoaXMuY3VycmVudDwwKSB7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50PXRoaXMubGVuLTE7XG4gICAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQtMTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYXZ0aXZl44Gr44GZ44KL44GL44GX44Gq44GE44GL44Gu5Yem55CGICAgIFxuICAgIC8vIGFycm93XG4gICAgLy8gdGhpcy5zd2ljdGhBcnJvdygpO1xuXG4gIH1cblxuICBhdXRvU3dpY3RoKCkge1xuXG4gICAgdGhpcy5yaWdodCgpO1xuXG4gICAgdGhpcy5UaW1lciA9IHNldFRpbWVvdXQoKCk9PntcblxuICAgICAgdGhpcy5hdXRvU3dpY3RoKCk7XG5cbiAgICB9LDUwMDApXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIC8vIHRoaXMuJGFycm93TC5vbignY2xpY2snLCB0aGlzLmxlZnQuYmluZCh0aGlzKSk7XG4gICAgLy8gdGhpcy4kYXJyb3dSLm9uKCdjbGljaycsIHRoaXMucmlnaHQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hdXRvU3dpY3RoKCk7XG5cbiAgfVxuICBcbiAgcmVtb3ZlRXZlbnRzKCkge1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuVGltZXIpO1xuICAgIHRoaXMucmlnaHQoKTtcblxuICB9XG4gIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvU2xpZGVyVG9wLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTGF5b3V0XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgU2l6ZSBmcm9tICcuL1NpemUvU2l6ZS5lczYnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zdGlvbi9Qb3NpdGlvbi5lczYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgICB0aGlzLnNpemUgPSBuZXcgU2l6ZSgpOyAvLyBhZGp1c3Qgc2l6ZVxuXG4gICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKCk7IC8vIGFkanVzdCBwb3NpdGlvblxuICAgICAgXG4gIH1cblxuICBzdGF0aWMgcmVzZXQoKSB7XG5cbiAgICAvLyBzY2FsZeOBp+Wkp+OBjeOBj+OBl+OBpuOBhOOCi+mWouS/guS4iuOAgemrmOOBleOCkjEwMCXjgavjgZfjgabjga/jgYTjgZHjgarjgYRcbiAgICBpZiAoZ2IuaW4ucGpheC5pZCA9PSAnaGlzdG9yeScgfHwgZ2IuaW4ucGpheC5pZCA9PSAnaW50ZXJ2aWV3X2RldGFpbCcpIHtcblxuICAgICAgVHdlZW5NYXguc2V0KCQoJyNpbm5lcicpLCB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgfSk7XG4gICAgICBUd2Vlbk1heC5zZXQoJCgnI2JnV3JhcCcpLCB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgfSk7XG5cbiAgICAgIFR3ZWVuTWF4LnNldCgkKCcjd3JhcHBlcicpLCB7XG4gICAgICAgICdvdmVyZmxvdyc6J3Zpc2libGUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBUd2Vlbk1heC5zZXQoJCgnI2lubmVyLCAjYmdXcmFwJyksIHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nOicwIDAnXG4gICAgICB9KTtcblxuICAgICAgVHdlZW5NYXguc2V0KCQoJyN3cmFwcGVyJyksIHtcbiAgICAgICAgJ292ZXJmbG93JzondmlzaWJsZScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICB9KTtcblxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuICAgICAgIFxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9MYXlvdXQuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTaXplXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgU2NhbGUgZnJvbSAnLi9TY2FsZS5lczYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaXplIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcbiAgICBcbiAgICAvLyBnYi5pbi51LnNldEltZ1NQU2l6ZSgkKCdpbWcnKSk7IC8vIGZvciBzcCBpbWdcblxuICAgIC8vIG5ldyBnYi5SZXNwb25zaXZlRm9udFNpemUoJCgnLmZvbnRSZXNwb25zaXZlJykpOyAvL+ODrOOCueODneODs+OCt+ODluaZguODleOCqeODs+ODiOOCteOCpOOCuuOBruWkieabtFxuXG4gICAgdGhpcy5zY2FsZSA9IG5ldyBTY2FsZSgpOyAvLyByZXNpemVcblxuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIC8vIGdiLmluLnUuc2V0SW1nU1BTaXplKCQoJ2ltZycpKTsgLy8gZm9yIHNwIGltZ1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5yLmFkZCh0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TaXplLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTGF5b3V0XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5TUEJhc2VXID0gMzc1O1xuICAgIHRoaXMuUENCYXNlVyA9IDEzMDA7XG5cbiAgICB0aGlzLnJhdGUgPSAxO1xuICAgIHRoaXMuVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdGhpcy4kdGFyZ2V0TGlzdCA9IFtcbiAgICAgIHtcbiAgICAgICAgJyR0YXJnZXQnOiAkKCcubWVudUlubmVyJyksXG4gICAgICAgICdzY2FsZSc6ICdzcE9ubHknIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgJyR0YXJnZXQnOiAkKCcuc2VjdGlvbjAzX2RldGFpbCcpLFxuICAgICAgLy8gICAnc2NhbGUnOiAnYm90aCcgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAnJHRhcmdldCc6ICQoJy5zZWN0aW9uMDQnKSxcbiAgICAgIC8vICAgJ3NjYWxlJzogJ2JvdGgnIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgLy8gfSxcbiAgICBdXG5cbiAgICB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIFxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgdGhpcy5XID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5pVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdGhpcy5zY2FsZSgpO1xuICAgIHRoaXMud3JhcCgpO1xuXG4gIH1cblxuICAvLyDmi6HlpKdcbiAgc2NhbGUoKSB7XG5cbiAgICAvLyBicOOBruWgtOWQiOOBrnNjYWxlXG4gICAgaWYgKHRoaXMuaVcgPD0gZ2IuaW4uY29uZi5icCkge1xuXG4gICAgICAvLyB3aWR0aOOBi+OCiXJhdGXjgpLoqIjnrpdcbiAgICAgIC8vIHRoaXMucmF0ZSA9IGdiLmluLnUuZmxvYXRGb3JtYXQodGhpcy5XIC8gdGhpcy5TUEJhc2VXICwgMik7XG4gICAgICB0aGlzLnJhdGUgPSB0aGlzLlcgLyB0aGlzLlNQQmFzZVc7XG5cbiAgICAgIC8vIHNjYWxl44GZ44KL44Oq44K544OI44KS44Or44O844OXXG4gICAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnYm90aCcgfHwgdmFsLnNjYWxlID09ICdzcE9ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLlNQQmFzZVcsXG4gICAgICAgICAgICBzY2FsZTogdGhpcy5yYXRlLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gd2lkdGjjgYvjgolyYXRl44KS6KiI566XXG4gICAgICAvLyB0aGlzLnJhdGUgPSBnYi5pbi51LmZsb2F0Rm9ybWF0KHRoaXMuVyAvIHRoaXMuUENCYXNlVyAsIDIpO1xuICAgICAgaWYgKHRoaXMuVyA+IDEzMDApIHRoaXMuVyA9IDEzMDA7XG4gICAgICB0aGlzLnJhdGUgPSB0aGlzLlcgLyB0aGlzLlBDQmFzZVc7XG5cbiAgICAgIC8vIHNjYWxl44GZ44KL44Oq44K544OI44KS44Or44O844OXXG4gICAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnYm90aCcgfHwgdmFsLnNjYWxlID09ICdwY09ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLlBDQmFzZVcsXG4gICAgICAgICAgICBzY2FsZTogdGhpcy5yYXRlLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOOBk+OBoeOCieOBruWgtOWQiOOBr+OAgXNjYWxl44KS5oi744GZXG4gICAgICAgIGlmICh2YWwuc2NhbGUgPT0gJ3NwT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgIH0pOyAgXG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIHNjYWxl44GX44Gf44KJ44CB5YWD44Gu5aSn44GN44GV5YiG5L2Z55m944GM44Gn44GN44KL44Gu44Gnb3ZlcmZsb3cgaGlkZGVu44Gn5raI44GZXG4gIHdyYXAoKSB7XG5cblxuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIHRoaXMucnVuKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdzY2FsZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGUuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQb3NpdGlvblxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g5LiK5LiL5Lit5aSu5a+E44GbXG4gICAgdGhpcy5zZXRDZW50ZXIoKTtcblxuICB9XG5cbiAgc2V0Q2VudGVyKCkge1xuXG4gICAgJCgnLnBvc0NlbnRlcicpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykuYWRqdXN0KCk7XG4gICAgICBcbiAgICB9KTtcbiAgICAkKCcucG9zQ2VudGVyVycpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykuYWRqdXN0VygpO1xuICAgICAgXG4gICAgfSk7XG4gICAgJCgnLnBvc0NlbnRlckgnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLmFkanVzdEgoKTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIHRoaXMuc2V0Q2VudGVyKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdzZXRDZW50ZXInLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1Bvc3Rpb24vUG9zaXRpb24uZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBEaXNwbGF5T3BlbmluZ1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheU9wZW5pbmcge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zaG93UGFnZSgpO1xuICAgIHRoaXMuZWZmZWN0KCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gZ2IuaW4uTGF5b3V0LnNpemUuc2NhbGUucnVuKCk7XG4gICAgZ2IuaW4ucm0ucmVhZHlQZXJjZW50LnJlbW92ZSgpO1xuXG4gICAgLy8gc2lkZVLlpInmm7RcbiAgICBnYi5pbi5zaWRlUi5pbk51bSgpO1xuICAgIGdiLmluLnNpZGVSLmluUGFnZU5hbWUoKTtcbiAgICBnYi5pbi5zaWRlUi5pbk5leHQoKTtcbiAgICBnYi5pbi5uYXYuaW5QYWdlKCk7XG5cbiAgICAvLyDkuojjgoHmvJTlh7pjYW52YXPjga5zZXR1cOOCkuOBl+OBpuOBiuOBj1xuICAgIGdiLmluLlNlYzAyQmcuY3JlYXRlKCk7XG5cbiAgfVxuXG4gIHNob3dQYWdlKCkge1xuXG4gICAgLy8g5ZCE44Oa44O844K4b3BlbmluZ1xuICAgIHZhciBpZCA9IGdiLmluLnBqYXguaWQ7XG5cbiAgICBzd2l0Y2ggKGlkKSB7XG5cbiAgICAgIGNhc2UgJ3RvcCc6XG5cbiAgICAgICAgZ2IuaW4ubWVudS5zd2l0Y2hBY3RpdmUoMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtb3ZpZSc6XG5cbiAgICAgICAgZ2IuaW4uU2VjMDJCZy5wbGF5KCk7XG4gICAgICAgIGdiLmluLm1lbnUuc3dpdGNoQWN0aXZlKDEpO1xuXG4gICAgICAgIC8vIHNpZGVMXG4gICAgICAgIHZhciB0bDAyID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgICAgIHRsMDJcbiAgICAgICAgICAuc2V0KCQoJyNzaWRlTCAuc25zLnNwJyksIHtkaXNwbGF5OiAnYmxvY2snfSlcbiAgICAgICAgICAudG8oJCgnI3NpZGVMIC5zbnMuc3AnKSwgMS4yLCB7b3BhY2l0eTogMX0pXG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ludGVydmlldyc6XG4gICAgICAgIFxuICAgICAgICBnYi5pbi5tZW51LnN3aXRjaEFjdGl2ZSgyKTtcbiAgICAgICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgICAgIHRsXG4gICAgICAgICAgLnNldCgkKCcjaGVhZGVyIC5zdWJUaXQnKSwge2Rpc3BsYXk6ICdibG9jayd9KVxuICAgICAgICAgIC50bygkKCcjaGVhZGVyIC5zdWJUaXQnKSwgMC41LCB7b3BhY2l0eTogMX0pXG5cbiAgICAgICAgLy8gc2lkZUxcbiAgICAgICAgdmFyIHRsMDIgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAgICAgdGwwMlxuICAgICAgICAgIC5zZXQoJCgnI3NpZGVMIC5zbnMuc3AnKSwge2Rpc3BsYXk6ICdibG9jayd9KVxuICAgICAgICAgIC50bygkKCcjc2lkZUwgLnNucy5zcCcpLCAxLjIsIHtvcGFjaXR5OiAxfSlcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW50ZXJ2aWV3X2RldGFpbCc6XG4gICAgICAgIFxuICAgICAgICBnYi5pbi5tZW51LnN3aXRjaEFjdGl2ZSgtMSk7XG4gICAgICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgICAgICB0bFxuICAgICAgICAgIC5zZXQoJCgnI2hlYWRlciAuc3ViVGl0JyksIHtkaXNwbGF5OiAnYmxvY2snfSlcbiAgICAgICAgICAudG8oJCgnI2hlYWRlciAuc3ViVGl0JyksIDAuNSwge29wYWNpdHk6IDF9KVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdoaXN0b3J5JzpcbiAgICAgICAgXG4gICAgICAgIGdiLmluLm1lbnUuc3dpdGNoQWN0aXZlKDMpO1xuICAgICAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAgICAgdGxcbiAgICAgICAgICAuc2V0KCQoJyNoZWFkZXIgLnN1YlRpdCcpLCB7ZGlzcGxheTogJ2Jsb2NrJ30pXG4gICAgICAgICAgLnRvKCQoJyNoZWFkZXIgLnN1YlRpdCcpLCAwLjUsIHtvcGFjaXR5OiAxfSlcblxuICAgICAgICAvLyBzaWRlTFxuICAgICAgICB2YXIgdGwwMiA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgICAgICB0bDAyXG4gICAgICAgICAgLnNldCgkKCcjc2lkZUwgLnNucy5zcCcpLCB7ZGlzcGxheTogJ2Jsb2NrJ30pXG4gICAgICAgICAgLnRvKCQoJyNzaWRlTCAuc25zLnNwJyksIDEuMiwge29wYWNpdHk6IDF9KVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gIH1cblxuICBlZmZlY3QoKSB7ICAgIFxuXG4gICAgLy8g5pmC6KiI44Ko44OV44Kn44Kv44OI44Gn6KGo56S6ICAgXG4gICAgZ2IuaW4ucGFnZVRyYW5zaXRpb25FZmZlY3Qub3BlbmluZ0VmZmVjdCgpO1xuIFxuICB9XG5cbiAgc2V0RXZlbnRzKCkgeyAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlPcGVuaW5nLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgQ1ZDb250ZW50c1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBMb29wIGZyb20gJy4vQ1ZDb250ZW50c0xvb3AuZXM2JztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuL0NWQ29udGVudHNUaW1lbGluZS5lczYnO1xuaW1wb3J0IENyZWF0ZUNhbnZhcyBmcm9tICcuL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5lczYnO1xuaW1wb3J0IEZ1bGxTaXplIGZyb20gJy4uLy4uLy4uLy4uL015TGlicy9EaXNwbGF5L0xheW91dC9GdWxsU2l6ZS5lczYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDVkNvbnRlbnRzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTsgXG4gICAgLy8gdGhpcy5jcmVhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuICAgIC8vIGxvb3BcbiAgICB0aGlzLmxvb3AgPSBuZXcgTG9vcCgpO1xuICAgIC8vIHRpbWVsaW5lXG4gICAgdGhpcy50aW1lbGluZSA9IG5ldyBUaW1lbGluZSgpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOODquOCveODvOOCueOBruODreODvOODiVxuICAgIC8vIGdiLmluLmxvYWRNZ3Iuc2VjMDJJbWcoKTtcbiAgICBcblxuICB9XG5cbiAgY3JlYXRlKCkge1xuXG4gICAgLy8gZ2IuaW4ucm0udG90YWwgKz0gMTtcbiAgICAvLyBjYW52YXPjga7nlJ/miJBcbiAgICAvLyDjg6zjg4bjgqPjg7zjg4rnlKjjgasy5YCNXG4gICAgZ2IuaW4uY2FudmFzID0gbmV3IENyZWF0ZUNhbnZhcygkKCcjYmdXcmFwIC5zZWMwMkJnQ2FudmFzJyksZ2IuaW4uY29uZi5kZWZXLGdiLmluLmNvbmYuZGVmSCwoKT0+e1xuXG4gICAgICB2YXIgbCA9IG5ldyBGdWxsU2l6ZSgkKCcjYmdXcmFwJyksJCgnLnNlYzAyQmdDYW52YXMnKSwwLCdGdWxsU2l6ZVNlYzAyQmdDYW52YXMnKTtcbiAgICAgIGwudGFyZ2V0RGVmVyA9IGdiLmluLmNvbmYuZGVmVztcbiAgICAgIGwudGFyZ2V0RGVmSCA9IGdiLmluLmNvbmYuZGVmSDtcbiAgICAgIGwucnVuKCk7XG5cbiAgICB9KTtcblxuICAgIC8vIHVp6L+95YqgKOOCs+ODs+ODiOODreODvOODqeODvOOAgXByb2ZpbGVy44Gq44GpKVxuICAgIC8vIHRoaXMuYWRkVUkoKTtcblxuXG4gIH1cblxuICBhZGRVSSgpIHtcblxuICAgIC8vIHBhcmFtcnRlcuiqv+aVtFxuICAgIC8vIGdiLmluLnBhcmFtID0gbmV3IGdiLlBhcmFtKCk7XG5cbiAgfVxuXG4gIHBsYXkoKSB7XG5cbiAgICB0aGlzLmxvb3Auc3RhcnQoKTtcbiAgICB0aGlzLnRpbWVsaW5lLnRsTWFpbi5wbGF5KCk7XG5cbiAgfVxuXG4gIHBhdXNlKCkge1xuXG4gICAgdGhpcy5sb29wLnBhdXNlKCk7XG4gICAgdGhpcy50aW1lbGluZS50bE1haW4ucGF1c2UoKTtcblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIC8vIGdiLmluLnIuYWRkKCdjdkNvbnRlbnRzJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyBnYi5pbi5oYXNoLm9uQ2hhbmdlRnVuY0xpc3QucHVzaCh0aGlzLm9uU2VjdGlvbjAyLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHMuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzTG9vcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1ZDb250ZW50c0xvb3Age1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc0Fsd2F5cyA9IHRydWU7XG4gICAgdGhpcy5pc1J1blN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy5pc0FkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlID0gJ2luaXRpYWwnO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmxvb3BMaXN0ID0gW107XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgaWYgKHRoaXMuaXNBbHdheXMpIHRoaXMucnVuQWx3YXlzKCk7XG4gICAgaWYgKHRoaXMuaXNSdW5TdGF0dXMpIHRoaXMucnVuU3RhdHVzKCk7XG4gICAgaWYgKHRoaXMuaXNBZGp1c3RQYXJhbSkgdGhpcy5ydW5BZGp1c3RQYXJhbSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5bi444Gr6KGM44GG5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgcnVuQWx3YXlzKCkge1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLmxvb3BMaXN0KSB0aGlzLmxvb3BMaXN0W2ldKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDlkITnirbmhYvjga7lh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1blN0YXR1cygpIHtcblxuICAgIGlmICh0aGlzLnN0YXRlID09ICdpbml0aWFsJykge1xuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YXJ0Jykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAxJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAyJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAzJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RhbmRieScpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzb21ldGltZXMnKSB7XG5cbiAgICAgIGlmICh0aGlzLnNvbWV0aW1lc1N0YXRlID09ICdsaW5lU2hhZG93Jykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc3BoZXJlJykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc2F0ZWxsaXRlJykge1xuXG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOODkeODqeODoeODvOOCv+iqv+aVtOeUqOWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnVuQWRqdXN0UGFyYW0oKSB7XG5cblxuXG4gIH1cblxuICBkcmF3KCkge1xuXG5cblxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIGlmICh0aGlzLmxvb3BTdGFydCkge1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmRyYXcoKTtcblxuICAgIC8vIGxvZygnc2VjdGlvbjAyJylcblxuICAgIH1cblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IHRydWU7XG5cbiAgfVxuXG4gIHBhdXNlKCkge1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSBmYWxzZTtcblxuICB9XG5cbiAgYWRkKGZ1bmMpIHtcblxuICAgIHRoaXMubG9vcExpc3QucHVzaChmdW5jKTtcbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGdiLmluLnVwLmFkZCgnc2VjdGlvbjAyQmcnLHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzTG9vcC5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIENWQ29udGVudHNUaW1lbGluZVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgIENWQ29udGVudHNUaW1lbGluZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnRsTWFpbiA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCv+OCpOODoOODqeOCpOODs+OCkuatouOCgeOBpuOBiuOBj1xuICAgIHRoaXMudGxNYWluLnBhdXNlKCk7XG5cbiAgICB0aGlzLmJlZ2lubmluZygpO1xuICAgIHRoaXMuc3RlcDAxKCk7XG4gICAgdGhpcy5zdGVwMDIoKTtcbiAgICB0aGlzLnN0ZXAwMygpO1xuICAgIHRoaXMuc3RhbmRCeSgpO1xuICAgIHRoaXMuc29tZXRpbWVzKCk7XG5cbiAgfVxuXG4gIGJlZ2lubmluZygpIHtcblxuICB9XG5cbiAgc3RlcDAxKCkge1xuXG4gIH1cblxuICBzdGVwMDIoKSB7XG5cblxuICB9XG5cbiAgc3RlcDAzKCkge1xuXG4gICAgXG4gIH1cblxuICBzdGFuZEJ5KCkge1xuXG5cbiAgfVxuXG4gIC8vIOaZguOAhVxuICBzb21ldGltZXMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLnRsTWFpblxuICAgICAgLmFkZChmdW5jdGlvbigpe1xuXG4gICAgICB9LCcrPTAuMCcpICAgIFxuXG4gIH1cblxuICBvblJlc2l6c2UoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgLy8gZ2IuaW4uci5hZGQoJ2N2VGltZWxpbmUnLCB0aGlzLm9uUmVzaXpzZS5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzVGltZWxpbmUuZXM2IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIENyZWF0ZUNhbnZhc1xuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcy5lczYnO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUuZXM2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlQ2FudmFzIHtcblxuICBjb25zdHJ1Y3Rvcigkd3JhcCx3LGgsY2I9KCk9Pnt9KSB7XG5cbiAgICB0aGlzLmMgPSBudWxsO1xuICAgIHRoaXMuY3cgPSAwO1xuICAgIHRoaXMuY2ggPSAwO1xuICAgIFxuICAgIHRoaXMuZmlsbFN0eWxlID0gJzAsMCwwJztcbiAgICB0aGlzLiR3cmFwID0gJHdyYXA7XG5cbiAgICB0aGlzLmxvb3BMaXN0ID0gW107XG5cbiAgICAvLyDmnIDliJ3jgqrjg5bjgrjjgqfjgq/jg4jnlJ/miJDjgZnjgovjgZ/jgoHjgatib29sZWFuIOOBguOBiOOBpumAhuOBq1xuICAgIHRoaXMuaXNSZXNpemUgPSAoZ2IuaW4udS5pc1Jlc1BDKT8gZmFsc2U6IHRydWU7XG5cbiAgICB0aGlzLmNiID0gY2I7XG5cbiAgICB0aGlzLncgPSAyNjA7XG4gICAgdGhpcy5oID0gMTQ2O1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5zZXRDYW52YXNTaXplKHcsaCk7XG4gICAgdGhpcy50aW1lbGluZSgpO1xuXG4gIH1cblxuICBzZXR1cCgpIHsgLy9jYW52YXMgZmluZ2VyIHBvaW50XG5cbiAgICB0aGlzLmMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICAvLyB0aGlzLmFkZE9iamVjdHMoKTtcbiAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgXG4gICAgdGhpcy4kd3JhcC5hcHBlbmQodGhpcy5jLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNiKCk7XG5cbiAgfVxuXG4gIGFkZE9iamVjdHModngpIHsgLy9jYW52YXMgZmluZ2VyIHBvaW50XG5cbiAgICB0aGlzLmxvb3BMaXN0ID0gW107XG5cbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICB2YXIgb2Zmc2V0RnJhbWUgPSAwO1xuICAgIHZhciBvZmZzZXRWeCA9IDA7XG5cbiAgICB0aGlzLnhOdW0gPSA4O1xuICAgIHRoaXMueU51bSA9IDY7XG4gICAgdGhpcy5sZW4gPSB0aGlzLnhOdW0gKiB0aGlzLnlOdW07XG5cbiAgICB0aGlzLnRpbGVMaXN0ID0gW107XG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG4gICAgICB2YXIgdG90YWwgPSBnYi5pbi5jb25mLnNlYzAySW1nTnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdG90YWwgPSAxOTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuOyBpKyspIHtcbiAgICBcbiAgICAgIHRoaXMudGlsZSA9IG5ldyBQbGFuZSh0aGlzLmMuY3R4LHRoaXMuZmlsbFN0eWxlKTtcblxuICAgICAgdmFyIG50aCA9IGkgJSB0aGlzLnhOdW07IFxuICAgICAgaWYgKG50aCA9PSAwKSBvZmZzZXQgPSAtIDUwMCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwMCkgLSAyNTA7XG4gICAgICBpZiAobnRoID09IDApIG9mZnNldEZyYW1lID0gTWF0aC5mbG9vcih0b3RhbCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgaWYgKG50aCA9PSAwKSBvZmZzZXRWeCA9IHZ4ICsgTWF0aC5mbG9vcih2eCAqIDIgKiBNYXRoLnJhbmRvbSgpKTtcblxuICAgICAgdmFyIHggPSBudGggKiB0aGlzLncgKyBvZmZzZXQ7XG4gICAgICB2YXIgeSA9IE1hdGguZmxvb3IoaSAvIHRoaXMueE51bSkgKiB0aGlzLmg7XG5cbiAgICAgIHRoaXMudGlsZS5zZXR1cCh4LCB5LCB0aGlzLncsIHRoaXMuaCwgb2Zmc2V0RnJhbWUgKyBudGggKiAzLCBvZmZzZXRWeCwgb2Zmc2V0KTtcbiAgICAgIHRoaXMudGlsZUxpc3QucHVzaCh0aGlzLnRpbGUpO1xuICAgICAgdGhpcy5hZGQodGhpcy50aWxlLmxvb3AuYmluZCh0aGlzLnRpbGUpKTtcbiAgICAgIFxuICAgIH07XG5cbiAgfVxuXG4gIHNldENhbnZhc1NpemUodyxoKSB7XG5cbiAgICB0aGlzLmN3ID0gdGhpcy5jLmNhbnZhcy53aWR0aCA9IHc7XG4gICAgdGhpcy5jaCA9IHRoaXMuYy5jYW52YXMuaGVpZ2h0ID0gaDtcblxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIC8vIHRoaXMuYy5jdHguY2xlYXJSZWN0KDAsMCx0aGlzLmN3LHRoaXMuY2gpO1xuICAgIC8vIHRoaXMuYy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wOCknO1xuXG4gICAgdGhpcy5jLmN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjYpJztcbiAgICB0aGlzLmMuY3R4LmZpbGxSZWN0KDAsMCx0aGlzLmN3LHRoaXMuY2gpO1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLmxvb3BMaXN0KSB0aGlzLmxvb3BMaXN0W2ldKCk7XG4gICAgXG4gIH1cblxuICB0aW1lbGluZSgpIHtcblxuXG4gIH1cblxuICBhZGQoZnVuYykge1xuXG4gICAgdGhpcy5sb29wTGlzdC5wdXNoKGZ1bmMpO1xuICAgIFxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICBsb2coZ2IuaW4udS5pc1Jlc1NQLGdiLmluLnUuaXNSZXNQQyk7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQICYmIHRoaXMuaXNSZXNpemUpIHtcbiAgICAgIHRoaXMuaXNSZXNpemUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5hZGRPYmplY3RzKDAuNSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50aWxlTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIHRoaXMudGlsZUxpc3RbaV0uY250U3RvcCA9IHRydWU7XG5cbiAgICAgIH07XG5cbiAgICAgIGxvZygxMTExKVxuXG4gICAgfSBlbHNlIGlmIChnYi5pbi51LmlzUmVzUEMgJiYgIXRoaXMuaXNSZXNpemUpIHtcbiAgICAgIHRoaXMuaXNSZXNpemUgPSB0cnVlO1xuXG4gICAgICB0aGlzLmFkZE9iamVjdHMoMC41KTtcblxuICAgICAgLy8g44K544Oe44Ob44Gg44Gj44Gf44KJ44CB5bqD44GE6KGo56S644Gn44KC44OV44Os44O844Og44Gu5YuV44GN44KS5q2i44KB44KLXG4gICAgICBpZiAoZ2IuaW4udS5pc1NQKSB7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICB0aGlzLnRpbGVMaXN0W2ldLmNudFN0b3AgPSB0cnVlO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50aWxlTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIHRoaXMudGlsZUxpc3RbaV0uY250U3RvcCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgIH07XG5cblxuICAgICAgbG9nKDIyMjIpO1xuXG4gICAgfVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5TZWMwMkJnLmxvb3AuYWRkKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICBnYi5pbi5yLmFkZCgnQ3JlYXRlQ2FudmFzJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DcmVhdGVDYW52YXMuZXM2IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIENhbnZhc1xuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB0aGlzLncgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB0aGlzLmggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuXG4gIHNldHVwICgpIHtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IFxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMudztcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmg7XG4gICAgXG4gIH1cblxuICB1cGRhdGUgKCkge1xuXG4gICAgXG4gIH1cblxuICBkcmF3ICgpIHtcblxuICAgIFxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DYW52YXMuZXM2IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBsYW5lXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5lIHtcblxuICBjb25zdHJ1Y3RvcihjdHgsc3Ryb2tlU3R5bGUpe1xuXG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgdGhpcy5vcCA9IHt2YWw6MX07XG5cbiAgICB0aGlzLmNudCA9IDA7XG5cbiAgICB0aGlzLmNudFN0b3AgPSBmYWxzZTtcblxuICAgIC8vIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuXG4gIH1cblxuICBzZXR1cCh4LCB5LCB3LCBoLCBmcmFtZVN0YXJ0LCB2eCwgb2Zmc2V0KSB7XG5cbiAgICB0aGlzLmltZ0xpc3QgPSBnYi5pbi5sb2FkU2VjMDJJbWcubGlzdDtcblxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLncgPSB3O1xuICAgIHRoaXMuaCA9IGg7XG5cbiAgICB0aGlzLnZ4ID0gdng7XG5cbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcblxuICAgIHRoaXMuY250ID0gZnJhbWVTdGFydCA7XG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuXG4gIH1cblxuICAvLyDpoILngrnjgafmj4/jgY9cbiAgdXBkYXRlKCkge1xuXG4gICAgdGhpcy54IC09IHRoaXMudng7XG4gICAgaWYgKHRoaXMueCA8IC10aGlzLncpIHRoaXMueCA9IGdiLmluLmNhbnZhcy5jdyAtIDEwO1xuXG4gIH1cblxuICBkcmF3KCkge1xuXG4gICAgaWYgKCF0aGlzLmNudFN0b3ApIHtcblxuICAgICAgLy8g6ZaT5byV44GNXG4gICAgICBpZiAoZ2IuaW4udXAuY250JTM9PTApIHRoaXMuY250Kys7XG4gICAgICBlbHNlIDtcblxuICAgIH07XG4gICAgLy8gdGhpcy5jbnQrKztcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcbiAgICAgIHZhciB0b3RhbCA9IGdiLmluLmNvbmYuc2VjMDJJbWdOdW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0b3RhbCA9IDE5O1xuICAgIH1cbiAgICBcbiAgICB2YXIgaW1nID0gdGhpcy5pbWdMaXN0W3RoaXMuY250JXRvdGFsXTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xuICAgIFxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL1BsYW5lLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGFnZVRyYW5zaXRpb25Db250cm9sbGVyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgUGFnZVRyYW5zaXRpb24gZnJvbSAnLi9QYWdlVHJhbnNpdGlvbi5lczYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlVHJhbnNpdGlvbkNvbnRyb2xsZXIge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwKSB7XG5cbiAgICB0aGlzLmNiID0gKCk9Pnt9O1xuXG4gICAgdGhpcy4kd3JhcCA9ICR3cmFwO1xuICAgIHRoaXMuc2V0dXAoJHdyYXApO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCR3cmFwKSB7XG5cbiAgICB0aGlzLmVmZmVjdCA9IG5ldyBQYWdlVHJhbnNpdGlvbigkd3JhcCk7XG4gICAgLy8g44K144Kk44K66Kq/5pW0XG4gICAgdGhpcy5lZmZlY3Qub25SZXNpemUoKTtcblxuICAgIHRoaXMuZWZmZWN0LmNiID0gdGhpcy5jYjtcblxuICAgIC8vIHRoaXMuJHdyYXAuaGlkZSgpO1xuXG4gICAgLy8g5pyA5Yid44GL44KJY2FudmFz44Gu6buS44KS6KaL44Gb44KLXG4gICAgdGhpcy5lZmZlY3QuaXNTdGFydCA9IHRydWU7XG4gICAgdGhpcy5lZmZlY3Quc2V0UGFyYW1JbkVmKCk7IC8vIOacgOWIneOBi+OCiem7kuW5leioreWumuOBruOBn+OCgeOBruODkeODqeODoFxuXG4gICAgLy8gY2FudmFz44Gu6buS44KS6KaL44Gb44Gf44KJ44CBbG9hZGluZ+OBrum7kuOBr+eEoeOBj+OBmVxuICAgIFR3ZWVuTWF4LnRvKCQoJyNsb2FkaW5nJyksIDAuMywge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXG4gICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dCxcbiAgICB9KVxuXG4gIH1cblxuICBvcGVuaW5nRWZmZWN0KCkge1xuXG4gICAgdGhpcy4kd3JhcC5zaG93KCk7XG4gICAgdGhpcy5lZmZlY3QuaXNTdGFydCA9IHRydWU7XG4gICAgdGhpcy5lZmZlY3Qub3BlbmluZ0VmZmVjdCgpO1xuXG4gIH1cblxuICBpbkVmZmVjdCgpIHtcblxuICAgIHRoaXMuJHdyYXAuc2hvdygpO1xuICAgIHRoaXMuZWZmZWN0LmlzU3RhcnQgPSB0cnVlO1xuICAgIHRoaXMuZWZmZWN0LmluRWZmZWN0KCk7XG5cbiAgfVxuXG4gIG91dEVmZmVjdCgpIHtcblxuICAgIHRoaXMuZWZmZWN0LmNiID0gdGhpcy5jYjtcbiAgICB0aGlzLiR3cmFwLnNob3coKTtcbiAgICB0aGlzLmVmZmVjdC5pc1N0YXJ0ID0gdHJ1ZTtcbiAgICB0aGlzLmVmZmVjdC5vdXRFZmZlY3QoKTtcblxuICB9XG5cbiAgcGF1c2UoKSB7XG5cbiAgICB0aGlzLiR3cmFwLmhpZGUoKTtcbiAgICB0aGlzLmVmZmVjdC5pc1N0YXJ0ID0gZmFsc2U7XG4gICAgLy8gdGhpcy5lZmZlY3QudGltZWxpbmUoKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzICgpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1BhZ2VUcmFuc2l0aW9uL1BhZ2VUcmFuc2l0aW9uQ29udHJvbGxlci5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBhZ2VUcmFuc2l0aW9uRWZmZWN0XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludC5lczYnO1xuaW1wb3J0IFRvcE9wZW5pbmcgZnJvbSAnLi4vVG9wT3BlbmluZy5lczYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlVHJhbnNpdGlvbkVmZmVjdCB7XG5cbiAgY29uc3RydWN0b3IoJHdyYXApIHtcblxuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO3RoaXMuc3RhZ2UgPSBudWxsO1xuXG4gICAgdGhpcy4kd3JhcCA9ICR3cmFwO1xuICAgIHRoaXMubXggPSAwO3RoaXMubXkgPSAwO1xuICAgIFxuICAgIHRoaXMucmFkaXVzID0gMDtcbiAgICB0aGlzLmNudCA9IDA7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLmcgPSBudWxsO1xuXG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG4gICAgdGhpcy5pc0NVcGRhdGUgPSB0cnVlO1xuXG4gICAgdGhpcy5zZWNvbmRQID0gMDtcbiAgICB0aGlzLnNlY29uZFN1bSA9IDA7XG4gICAgdGhpcy5zZWNvbmRDbnQgPSAwO1xuICAgIHRoaXMuc2Vjb25kRmxhZyA9IGZhbHNlO1xuXG4gICAgdGhpcy50YXJnZXRSYWRpdXMgPSBNYXRoLnNxcnQoZ2IuaW4uci53cy53KmdiLmluLnIud3MudyArIGdiLmluLnIud3MuaCpnYi5pbi5yLndzLmgpO1xuICAgIHRoaXMuaFJhZGl1cyA9IDA7XG4gICAgdGhpcy5tUmFkaXVzID0gMDtcbiAgICB0aGlzLnNSYWRpdXMgPSB0aGlzLnRhcmdldFJhZGl1cztcblxuICAgIHRoaXMuaEhhbmRYID0gMDtcbiAgICB0aGlzLm1IYW5kWCA9IDA7XG4gICAgdGhpcy5zSGFuZFggPSAwO1xuICAgIHRoaXMuaEhhbmRZID0gMDtcbiAgICB0aGlzLm1IYW5kWSA9IDA7XG4gICAgdGhpcy5zSGFuZFkgPSAwO1xuICAgIHRoaXMuaEhhbmRGbGFnID0gZmFsc2U7XG4gICAgdGhpcy5tSGFuZEZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLnNIYW5kRmxhZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oUmFkID0gMDtcbiAgICB0aGlzLm1SYWQgPSAwO1xuICAgIHRoaXMuc1JhZCA9IDA7XG5cbiAgICB0aGlzLmxpbmVXaWR0aCA9IDE7XG5cbiAgICB0aGlzLnN0YXJ0UmFkMDEgPSBNYXRoLlBJICogMiAvIDMgKiAwO1xuICAgIHRoaXMuc3RhcnRSYWQwMiA9IE1hdGguUEkgKiAyIC8gMyAqIDE7XG4gICAgdGhpcy5zdGFydFJhZDAzID0gTWF0aC5QSSAqIDIgLyAzICogMjtcbiAgICB0aGlzLnN0YXJ0UmFkMDQgPSBNYXRoLlBJICogMiAvIDMgKiAwO1xuICAgIHRoaXMuc3RhcnRSYWQwNSA9IE1hdGguUEkgKiAyIC8gMyAqIDE7XG4gICAgdGhpcy5zdGFydFJhZDA2ID0gTWF0aC5QSSAqIDIgLyAzICogMjtcbiAgICB0aGlzLmVuZFJhZDAxID0gTWF0aC5QSSAqIDIgLyAzICogMDsgLy8gcGl4aS5qc+OBr+S9leOBi+aPj+eUu+OBl+OBquOBhOOBqOODnuOCueOCr+OBleOCjOOBquOBhO+8nyDlsJHmlbDjga7lgKTjgpLlhaXjgozjgabjgYTjgotcbiAgICB0aGlzLmVuZFJhZDAyID0gTWF0aC5QSSAqIDIgLyAzICogMTtcbiAgICB0aGlzLmVuZFJhZDAzID0gTWF0aC5QSSAqIDIgLyAzICogMjtcbiAgICB0aGlzLmVuZFJhZDA0ID0gTWF0aC5QSSAqIDIgLyAzICogMC4wMDAwMTsgLy8gcGl4aS5qc+OBr+S9leOBi+aPj+eUu+OBl+OBquOBhOOBqOODnuOCueOCr+OBleOCjOOBquOBhO+8nyDlsJHmlbDjga7lgKTjgpLlhaXjgozjgabjgYTjgotcbiAgICB0aGlzLmVuZFJhZDA1ID0gTWF0aC5QSSAqIDIgLyAzICogMTtcbiAgICB0aGlzLmVuZFJhZDA2ID0gTWF0aC5QSSAqIDIgLyAzICogMjtcblxuICAgIHRoaXMuZmlsbEJsYWNrID0gMHgwMDAwMDA7XG4gICAgdGhpcy5maWxsVGlmZmFueUJsdWUgPSAweDgxZDhkMDtcblxuICAgIC8vIOOCs+ODvOODq+ODkOODg+OCr1xuICAgIHRoaXMuY2IgPSAoKT0+e31cblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCAoKSB7XG5cbiAgICAvLyBjYW52YXPopoHntKDov73liqBcbiAgICB0aGlzLnJlbmRlcmVyID0gUElYSS5hdXRvRGV0ZWN0UmVuZGVyZXIoZ2IuaW4uci53cy53LCBnYi5pbi5yLndzLmgsIHthbnRpYWxpYXM6IHRydWUsdHJhbnNwYXJlbnQ6IHRydWV9KTtcbiAgICB0aGlzLiR3cmFwLmFwcGVuZCh0aGlzLnJlbmRlcmVyLnZpZXcpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSByb290IG9mIHRoZSBzY2VuZSBncmFwaFxuICAgIHRoaXMuc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLnN0YWdlLmludGVyYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMuYWRkT2JqZWN0KCk7XG4gIFxuICB9XG5cbiAgYWRkT2JqZWN0KCkge1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICB0aGlzLmNvbnRhaW5lcjAxID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgdGhpcy5jb250YWluZXIwMiA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgIHRoaXMuY29udGFpbmVyMDMgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblxuICAgIHRoaXMubWFzayA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgdGhpcy5jb2xvciA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgdGhpcy5oSGFuZCA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgdGhpcy5tSGFuZCA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgdGhpcy5zSGFuZCA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG5cbiAgICB0aGlzLmNvbG9yLmJsZW5kTW9kZSA9IFBJWEkuQkxFTkRfTU9ERVMuQUREO1xuXG4gICAgdGhpcy5tYXNrLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMubWFzay5wb3NpdGlvbi55ID0gMDtcblxuICAgIC8vIHRoaXMuY29udGFpbmVyMDIubWFzayA9IHRoaXMubWFzaztcblxuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5tYXNrKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuY29sb3IpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5oSGFuZCk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLm1IYW5kKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuc0hhbmQpO1xuXG4gIH1cblxuICB1cGRhdGVUaW1lKCkge1xuXG5cbiAgICBnYi5pbi51LnRpbWUoKTtcblxuICAgIHRoaXMuaG91ciA9IGdiLmluLnUuaG91cjsgICAgICAgICAgLy8g5pmCXG4gICAgdGhpcy5taW51dGUgPSBnYi5pbi51Lm1pbnV0ZTsgICAgICAvLyDliIZcbiAgICB0aGlzLnNlY29uZCA9IGdiLmluLnUuc2Vjb25kO1xuICAgIHRoaXMubWlsbFNlY29uZCA9IGdiLmluLnUubWlsbFNlY29uZCAvIDEwMDA7XG5cbiAgICBpZiAodGhpcy5zZWNvbmQgPT0gMCAmJiAhdGhpcy5zZWNvbmRGbGFnKSB7XG4gICAgICB0aGlzLnNlY29uZEZsYWcgPSB0cnVlXG4gICAgICB0aGlzLnNlY29uZENudCsrO1xuICAgIH07XG4gICAgaWYgKHRoaXMuc2Vjb25kID09IDEgJiYgdGhpcy5zZWNvbmRGbGFnKSB7XG4gICAgICB0aGlzLnNlY29uZEZsYWcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgdmFyIGhvdXJUb3RhbCA9IDEyO1xuICAgIHZhciBtaW51dGVUb3RhbCA9IDYwO1xuICAgIHZhciBzZWNvbmRUb3RhbCA9IDYwO1xuXG4gICAgaWYgKHRoaXMuaG91cj4xMikgdGhpcy5ob3VyID0gdGhpcy5ob3VyIC0gMTI7XG5cbiAgICAvLyBw44GvcGVyY2VudFxuICAgIHRoaXMuaG91clAgPSB0aGlzLmhvdXIgLyBob3VyVG90YWw7XG4gICAgdGhpcy5taW51dGVQID0gdGhpcy5taW51dGUgLyBtaW51dGVUb3RhbDtcbiAgICAvLyB0aGlzLnNlY29uZFAgKz0gKCggKHRoaXMuc2Vjb25kQ250ICogNjAgKyB0aGlzLnNlY29uZCArIHRoaXMubWlsbFNlY29uZCkgLyBzZWNvbmRUb3RhbCkgLSB0aGlzLnNlY29uZFApICogMC4wMztcbiAgICB0aGlzLnNlY29uZFAgPSB0aGlzLnNlY29uZCAvIHNlY29uZFRvdGFsO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcblxuXG4gIH1cblxuICBkcmF3KCl7XG5cbiAgICB0aGlzLm1hc2suY2xlYXIoKTtcbiAgICB0aGlzLmNvbG9yLmNsZWFyKCk7XG4gICAgdGhpcy5oSGFuZC5jbGVhcigpO1xuICAgIHRoaXMubUhhbmQuY2xlYXIoKTtcbiAgICB0aGlzLnNIYW5kLmNsZWFyKCk7XG5cbiAgICAvLyDkvZXjgYvmj4/jgYvjgarjgYTjgajjg57jgrnjgq/jgYzlirnjgYvjgarjgYTjgZ/jgoHmj4/jgY8g44GE44KJ44Gq44GE44GL44KCXG4gICAgdGhpcy5tYXNrLmRyYXdSZWN0KDAsIDAsIDEsIDEpO1xuXG4gICAgLy8g5pmC6KiIXG4gICAgdGhpcy5kcmF3Q2lyY2xlKCk7XG5cbiAgICAvLyDjg57jgrnjgq9cbiAgICB0aGlzLmRyYXdDaXJjbGUwMSh0aGlzLnN0YXJ0UmFkMDEsdGhpcy5lbmRSYWQwMSk7XG4gICAgdGhpcy5kcmF3Q2lyY2xlMDIodGhpcy5zdGFydFJhZDAyLHRoaXMuZW5kUmFkMDIpO1xuICAgIHRoaXMuZHJhd0NpcmNsZTAzKHRoaXMuc3RhcnRSYWQwMyx0aGlzLmVuZFJhZDAzKTtcblxuICAgIHRoaXMuZHJhd0NpcmNsZTA0KHRoaXMuc3RhcnRSYWQwNCx0aGlzLmVuZFJhZDA0KTtcbiAgICB0aGlzLmRyYXdDaXJjbGUwNSh0aGlzLnN0YXJ0UmFkMDUsdGhpcy5lbmRSYWQwNSk7XG4gICAgdGhpcy5kcmF3Q2lyY2xlMDYodGhpcy5zdGFydFJhZDA2LHRoaXMuZW5kUmFkMDYpO1xuXG5cbiAgICAvLyByZW5kZXIgdGhlIHN0YWdlXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zdGFnZSk7ICAgIFxuXG4gIH1cblxuICBvcGVuaW5nRWZmZWN0KCkge1xuXG4gICAgdmFyIHRsTWFpbiA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgLy8gdGhpcy5zZXRQYXJhbUluRWYoKTtcblxuICAgIHRsTWFpbiAgICAgIFxuICAgICAgLy8g57ea44GM5Ly444Gz44KLXG4gICAgICAuYWRkKCgpPT57XG5cbiAgICAgICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgdGxcbiAgICAgICAgICAvLyBjb2xvclxuICAgICAgICAgIC8vIC50byh0aGlzLCAxLjMsIHtcbiAgICAgICAgICAvLyAgIGhSYWRpdXM6IHRoaXMuZ2V0U0hhbmRMZW5ndGgodGhpcy5oUmFkKSxcbiAgICAgICAgICAvLyAgIGVhc2U6IFBvd2VyMy5lYXNlSW5PdXRcbiAgICAgICAgICAvLyB9KVxuICAgICAgICAgIC8vIC8vIC50byh0aGlzLCAxLjAsIHtcbiAgICAgICAgICAvLyAvLyAgIG1SYWRpdXM6IHRoaXMuZ2V0U0hhbmRMZW5ndGgodGhpcy5tUmFkKSxcbiAgICAgICAgICAvLyAvLyAgIGVhc2U6IFBvd2VyMy5lYXNlSW5PdXRcbiAgICAgICAgICAvLyAvLyB9LCctPTEuMCcpXG4gICAgICAgICAgLy8gLnRvKHRoaXMsIDEuMCwge1xuICAgICAgICAgIC8vICAgbVJhZGl1czogdGhpcy5nZXRTSGFuZExlbmd0aCh0aGlzLm1SYWQpLFxuICAgICAgICAgIC8vICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dFxuICAgICAgICAgIC8vIH0sJz0wLjAnKVxuXG5cbiAgICAgICAgICAvLyAuc2V0KHRoaXMubUhhbmQsIHthbHBoYTogMH0pXG4gICAgICAgICAgLy8gLnNldCh0aGlzLnNIYW5kLCB7YWxwaGE6IDB9KVxuICAgICAgICAgIC8vIC5zZXQodGhpcywge1xuICAgICAgICAgIC8vICAgaFJhZGl1czogdGhpcy5nZXRTSGFuZExlbmd0aCh0aGlzLmhSYWQpLFxuICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgLy8gLnRvKHRoaXMsIHtcbiAgICAgICAgICAvLyAgIG1SYWRpdXM6IHRoaXMuZ2V0U0hhbmRMZW5ndGgodGhpcy5tUmFkKSxcbiAgICAgICAgICAvLyB9KVxuICAgICAgICAgIC8vIC50byh0aGlzLm1IYW5kLCAxLjUsIHtcbiAgICAgICAgICAvLyAgIGFscGhhOiAxLFxuICAgICAgICAgIC8vICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dFxuICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgLy8gLnRvKHRoaXMuc0hhbmQsIDEuNSwge1xuICAgICAgICAgIC8vICAgYWxwaGE6IDEsXG4gICAgICAgICAgLy8gICBlYXNlOiBQb3dlcjMuZWFzZUluT3V0XG4gICAgICAgICAgLy8gfSwnLT0xLjUnKVxuXG5cbiAgICAgIH0pXG5cbiAgICAgIC8vIOWumuS9jee9ruOBq1xuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAgIC8vIHRsXG4gICAgICAgIC8vICAgLy8gY29sb3JcbiAgICAgICAgLy8gICAudG8odGhpcywgMS4wLCB7XG4gICAgICAgIC8vICAgICBoUmFkOiBNYXRoLlBJICogMiAvIDMgKiAwLFxuICAgICAgICAvLyAgICAgaFJhZDogTWF0aC5QSSAqIDIgLyAzICogMCxcbiAgICAgICAgLy8gICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgLy8gICAudG8odGhpcywgMS4wLCB7XG4gICAgICAgIC8vICAgICBtUmFkOiBNYXRoLlBJICogMiAvIDMgKiAxLFxuICAgICAgICAvLyAgICAgbVJhZDogTWF0aC5QSSAqIDIgLyAzICogMSxcbiAgICAgICAgLy8gICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIC8vICAgfSwnLT0xLjAnKVxuICAgICAgICAvLyAgIC50byh0aGlzLCAxLjAsIHtcbiAgICAgICAgLy8gICAgIHNSYWQ6IE1hdGguUEkgKiAyIC8gMyAqIDIsXG4gICAgICAgIC8vICAgICBzUmFkOiBNYXRoLlBJICogMiAvIDMgKiAyLFxuICAgICAgICAvLyAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICAgIC8vICAgICBvblN0YXJ0OiAoKT0+e1xuXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgfSwnLT0xLjAnKVxuXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCk9PntcblxuICAgICAgICAvLyAgIC8vIOS4i+iomOOBruabtOaWsOOCkuatouOCgeOCi1xuICAgICAgICAvLyAgIHRoaXMuaEhhbmRGbGFnPXRydWU7XG4gICAgICAgIC8vICAgdGhpcy5tSGFuZEZsYWc9dHJ1ZTtcbiAgICAgICAgLy8gICB0aGlzLnNIYW5kRmxhZz10cnVlO1xuXG4gICAgICAgIC8vIH0sMC4zKVxuXG5cbiAgICAgIH0sJys9MC4wJylcblxuICAgICAgLy8g44GQ44KPXG4gICAgIC5hZGQoKCk9PntcblxuICAgICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgICB2YXIgdGwwMiA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgICAgdmFyIHRsMDMgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgICAgLy8g44GQ44KP44Gu44G+44GI44Gr56eS6Yed44KS5raI44GZXG4gICAgICB0bFxuICAgICAgICAvLyBjb2xvclxuICAgICAgICAvLyAudG8odGhpcy5oSGFuZCwgMS41LCB7XG4gICAgICAgIC8vICAgYWxwaGE6IDAsXG4gICAgICAgIC8vICAgZWFzZTogRXhwby5lYXNlSW5PdXRcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gLnRvKHRoaXMubUhhbmQsIDEuNSwge1xuICAgICAgICAvLyAgIGFscGhhOiAwLFxuICAgICAgICAvLyAgIGVhc2U6IEV4cG8uZWFzZUluT3V0XG4gICAgICAgIC8vIH0sJy09MS41JylcbiAgICAgICAgLnRvKHRoaXMuc0hhbmQsIDEuNiwge1xuICAgICAgICAgIGFscGhhOiAwLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlSW5PdXRcbiAgICAgICAgfSlcblxuICAgICAgLy8g44GQ44KPXG4gICAgICB0bDAyXG4gICAgICAgIC8vIGNvbG9yXG4gICAgICAgIC50byh0aGlzLCAxLjgsIHtcbiAgICAgICAgICBzdGFydFJhZDA0OiBNYXRoLlBJICogMiAvIDMgKiAxLFxuICAgICAgICAgIHN0YXJ0UmFkMDU6IE1hdGguUEkgKiAyIC8gMyAqIDIsXG4gICAgICAgICAgc3RhcnRSYWQwNjogTWF0aC5QSSAqIDIgLyAzICogMyxcbiAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICBvblN0YXJ0OiAoKT0+e1xuXG4gICAgICAgICAgICAvLyDlkIRVSeihqOekulxuICAgICAgICAgICAgdGhpcy50byA9IG5ldyBUb3BPcGVuaW5nKCk7XG4gICAgICAgICAgICBpZiAoZ2IuaW4ucGpheC5pZCA9PSAndG9wJykgdGhpcy50by5ydW5Ub3AoKTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy50by5ydW5PdGhlcigpO1xuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAgICAgICB0aGlzLiR3cmFwLmhpZGUoKTsgLy8g44Oa44O844K46YG356e744Ko44OV44Kn44Kv44OI44Os44Kk44Ok44O844KS6Zqg44GZXG4gICAgICAgICAgICB0aGlzLmlzU3RhcnQ9ZmFsc2U7IC8vIOODq+ODvOODl+OCkuatouOCgeOCiyBcblxuICAgICAgICAgICAgZ2IuaW4ucGpheC5pc1BqYXhMb2NrID0gZmFsc2U7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgIH0sJys9My4wJylcblxuICB9XG5cbiAgaW5FZmZlY3QoKSB7XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICB2YXIgdGwwMiA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXRQYXJhbUluRWYoKTtcblxuICAgIHRsXG4gICAgICAvLyBjb2xvclxuICAgICAgLnRvKHRoaXMsIDEuOCwge1xuICAgICAgICBzdGFydFJhZDA0OiBNYXRoLlBJICogMiAvIDMgKiAxLFxuICAgICAgICBzdGFydFJhZDA1OiBNYXRoLlBJICogMiAvIDMgKiAyLFxuICAgICAgICBzdGFydFJhZDA2OiBNYXRoLlBJICogMiAvIDMgKiAzLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTogKCk9PntcbiAgICAgICAgICB0aGlzLiR3cmFwLmhpZGUoKTsgLy8g44Oa44O844K46YG356e744Ko44OV44Kn44Kv44OI44Os44Kk44Ok44O844KS6Zqg44GZXG4gICAgICAgICAgdGhpcy5pc1N0YXJ0PWZhbHNlOyAvLyDjg6vjg7zjg5fjgpLmraLjgoHjgosgICAgICAgICBcbiAgICAgICAgICBnYi5pbi5wamF4LmlzUGpheExvY2sgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChnYi5pbi51LmlzUmVzUEMpIHtcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKCQoJyNuYXYnKSwgMS4yLCB7b3BhY2l0eTogMSxlYXNlOiBQb3dlcjMuZWFzZU91dH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBuYXZcbiAgICAgICAgICAgIGlmIChnYi5pbi5wamF4LmlkPT0ndG9wJykge1xuICAgICAgICAgICAgICBUd2Vlbk1heC50bygkKCcjbmF2JyksIDEuMiwge29wYWNpdHk6IDEsZWFzZTogUG93ZXIzLmVhc2VPdXR9KTtcbiAgICAgICAgICAgIH07ICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICAgfSlcblxuICB9XG5cbiAgb3V0RWZmZWN0KCkge1xuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgdmFyIHRsMDIgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMuc2V0UGFyYW1PdXRFZigpO1xuXG4gICAgLy8gLy8g5qGIMVxuICAgIHRsXG4gICAgICAvLyBjb2xvclxuICAgICAgLy8gLnRvKHRoaXMsIDEuOCwge1xuICAgICAgLy8gICBlbmRSYWQwMTogTWF0aC5QSSAqIDIgLyAzICogMCArIE1hdGguUEkgKiAwLjcsXG4gICAgICAvLyAgIGVuZFJhZDAyOiBNYXRoLlBJICogMiAvIDMgKiAxICsgTWF0aC5QSSAqIDAuNyxcbiAgICAgIC8vICAgZW5kUmFkMDM6IE1hdGguUEkgKiAyIC8gMyAqIDIgKyBNYXRoLlBJICogMC43LFxuICAgICAgLy8gICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgLy8gfSlcbiAgICAgIC8vIC50byh0aGlzLCAxLjgsIHtcbiAgICAgIC8vICAgc3RhcnRSYWQwMTogTWF0aC5QSSAqIDIgLyAzICogMCArIE1hdGguUEkgKiAwLjM1LFxuICAgICAgLy8gICBzdGFydFJhZDAyOiBNYXRoLlBJICogMiAvIDMgKiAxICsgTWF0aC5QSSAqIDAuMzUsXG4gICAgICAvLyAgIHN0YXJ0UmFkMDM6IE1hdGguUEkgKiAyIC8gMyAqIDIgKyBNYXRoLlBJICogMC4zNSxcbiAgICAgIC8vICAgZWFzZTogUG93ZXIzLmVhc2VPdXRcbiAgICAgIC8vIH0sJy09MC45JylcbiAgICAgIC50byh0aGlzLCAxLjAsIHtcbiAgICAgICAgZW5kUmFkMDQ6IE1hdGguUEkgKiAyIC8gMyAqIDEsXG4gICAgICAgIGVuZFJhZDA1OiBNYXRoLlBJICogMiAvIDMgKiAyLFxuICAgICAgICBlbmRSYWQwNjogTWF0aC5QSSAqIDIgLyAzICogMyxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICB0aGlzLmNiKCk7XG5cbiAgICAgICAgfVxuICAgICAgfSwnLT0wLjAnKVxuXG4gICAgdGwwMlxuICAgICAgLy8gLnRvKHRoaXMsIDEuMzUsIHtcbiAgICAgIC8vICAgZW5kUmFkMDE6IE1hdGguUEkgKiAyIC8gMyAqIDEsXG4gICAgICAvLyAgIGVuZFJhZDAyOiBNYXRoLlBJICogMiAvIDMgKiAyLFxuICAgICAgLy8gICBlbmRSYWQwMzogTWF0aC5QSSAqIDIgLyAzICogMyxcbiAgICAgIC8vICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIC8vIH0sJys9MC45NScpXG4gICAgICAvLyAudG8odGhpcywgMS4zNSwge1xuICAgICAgLy8gICBzdGFydFJhZDAxOiBNYXRoLlBJICogMiAvIDMgKiAxLFxuICAgICAgLy8gICBzdGFydFJhZDAyOiBNYXRoLlBJICogMiAvIDMgKiAyLFxuICAgICAgLy8gICBzdGFydFJhZDAzOiBNYXRoLlBJICogMiAvIDMgKiAzLFxuICAgICAgLy8gICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgLy8gfSwnLT0xLjM1JylcbiAgICAgIC8vIC50byh0aGlzLCAxLjM1LCB7XG4gICAgICAvLyAgIGVuZFJhZDA0OiBNYXRoLlBJICogMiAvIDMgKiAxLFxuICAgICAgLy8gICBlbmRSYWQwNTogTWF0aC5QSSAqIDIgLyAzICogMixcbiAgICAgIC8vICAgZW5kUmFkMDY6IE1hdGguUEkgKiAyIC8gMyAqIDMsXG4gICAgICAvLyAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgLy8gICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAvLyAgICAgdGhpcy5jYigpO1xuXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0sJy09MS4zNScpXG5cbiAgfVxuXG4gIHNldFBhcmFtT3V0RWYgKCkge1xuXG4gICAgdGhpcy5zdGFydFJhZDAxID0gTWF0aC5QSSAqIDIgLyAzICogMDtcbiAgICB0aGlzLnN0YXJ0UmFkMDIgPSBNYXRoLlBJICogMiAvIDMgKiAxO1xuICAgIHRoaXMuc3RhcnRSYWQwMyA9IE1hdGguUEkgKiAyIC8gMyAqIDI7XG4gICAgdGhpcy5zdGFydFJhZDA0ID0gTWF0aC5QSSAqIDIgLyAzICogMDtcbiAgICB0aGlzLnN0YXJ0UmFkMDUgPSBNYXRoLlBJICogMiAvIDMgKiAxO1xuICAgIHRoaXMuc3RhcnRSYWQwNiA9IE1hdGguUEkgKiAyIC8gMyAqIDI7XG4gICAgdGhpcy5lbmRSYWQwMSA9IE1hdGguUEkgKiAyIC8gMyAqIDA7IC8vIHBpeGkuanPjga/kvZXjgYvmj4/nlLvjgZfjgarjgYTjgajjg57jgrnjgq/jgZXjgozjgarjgYTvvJ8g5bCR5pWw44Gu5YCk44KS5YWl44KM44Gm44GE44KLXG4gICAgdGhpcy5lbmRSYWQwMiA9IE1hdGguUEkgKiAyIC8gMyAqIDE7XG4gICAgdGhpcy5lbmRSYWQwMyA9IE1hdGguUEkgKiAyIC8gMyAqIDI7XG4gICAgdGhpcy5lbmRSYWQwNCA9IE1hdGguUEkgKiAyIC8gMyAqIDAuMDAwMDE7IC8vIHBpeGkuanPjga/kvZXjgYvmj4/nlLvjgZfjgarjgYTjgajjg57jgrnjgq/jgZXjgozjgarjgYTvvJ8g5bCR5pWw44Gu5YCk44KS5YWl44KM44Gm44GE44KLXG4gICAgdGhpcy5lbmRSYWQwNSA9IE1hdGguUEkgKiAyIC8gMyAqIDE7XG4gICAgdGhpcy5lbmRSYWQwNiA9IE1hdGguUEkgKiAyIC8gMyAqIDI7XG5cbiAgfVxuXG4gIHNldFBhcmFtSW5FZiAoKSB7XG5cbiAgICB0aGlzLnN0YXJ0UmFkMDQgPSBNYXRoLlBJICogMiAvIDMgKiAwO1xuICAgIHRoaXMuc3RhcnRSYWQwNSA9IE1hdGguUEkgKiAyIC8gMyAqIDE7XG4gICAgdGhpcy5zdGFydFJhZDA2ID0gTWF0aC5QSSAqIDIgLyAzICogMjtcbiAgICB0aGlzLmVuZFJhZDA0ID0gTWF0aC5QSSAqIDIgLyAzICogMTsgLy8gcGl4aS5qc+OBr+S9leOBi+aPj+eUu+OBl+OBquOBhOOBqOODnuOCueOCr+OBleOCjOOBquOBhO+8nyDlsJHmlbDjga7lgKTjgpLlhaXjgozjgabjgYTjgotcbiAgICB0aGlzLmVuZFJhZDA1ID0gTWF0aC5QSSAqIDIgLyAzICogMjtcbiAgICB0aGlzLmVuZFJhZDA2ID0gTWF0aC5QSSAqIDIgLyAzICogMztcblxuICB9XG5cbiAgbG9vcCAoKSB7XG5cbiAgICBpZiAodGhpcy5pc1N0YXJ0KSB7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB0aGlzLmRyYXcoKTtcblxuICAgIH07XG5cbiAgfVxuXG4gIGRyYXdDaXJjbGUocmFkKSB7XG5cbiAgICB0aGlzLmN4ID0gZ2IuaW4uci53cy53IC8gMjtcbiAgICB0aGlzLmN5ID0gZ2IuaW4uci53cy5oIC8gMjtcblxuICAgIC8vIOaZgumHnVxuXG4gICAgLy8gZmxhZ+W+jOOBk+OBoeOCieOBp+OBr+abtOaWsOOBl+OBquOBhFxuICAgIGlmICghdGhpcy5oSGFuZEZsYWcpIHtcblxuICAgICAgdGhpcy5oUmFkID0gTWF0aC5QSSAqIDIgKiB0aGlzLmhvdXJQIC0gTWF0aC5QSSAvIDI7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgfVxuICAgIFxuICAgIHRoaXMuaEhhbmRYID0gdGhpcy5jeCArIE1hdGguY29zKHRoaXMuaFJhZCkqIHRoaXMuaFJhZGl1cztcbiAgICB0aGlzLmhIYW5kWSA9IHRoaXMuY3kgKyBNYXRoLnNpbih0aGlzLmhSYWQpKiB0aGlzLmhSYWRpdXM7XG5cbiAgICAvLyB0aGlzLmhIYW5kLmxpbmVTdHlsZSh0aGlzLmxpbmVXaWR0aCwgdGhpcy5maWxsVGlmZmFueUJsdWUsIDEpO1xuICAgIHRoaXMuaEhhbmQubGluZVN0eWxlKDQsIHRoaXMuZmlsbFRpZmZhbnlCbHVlLCAxKTtcbiAgICB0aGlzLmhIYW5kLm1vdmVUbyh0aGlzLmN4LCB0aGlzLmN5KTsgICAgXG4gICAgdGhpcy5oSGFuZC5saW5lVG8odGhpcy5oSGFuZFgsIHRoaXMuaEhhbmRZKTtcblxuICAgIHRoaXMuaEhhbmQuZW5kRmlsbCgpO1xuXG5cbiAgICAvLyDliIbph51cbiAgICBpZiAoIXRoaXMubUhhbmRGbGFnKSB7XG5cbiAgICAgIHRoaXMubVJhZCA9IE1hdGguUEkgKiAyICogdGhpcy5taW51dGVQIC0gTWF0aC5QSSAvIDI7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgfSAgICAgIFxuXG4gICAgdGhpcy5tSGFuZFggPSB0aGlzLmN4ICsgTWF0aC5jb3ModGhpcy5tUmFkKSAqIHRoaXMubVJhZGl1cztcbiAgICB0aGlzLm1IYW5kWSA9IHRoaXMuY3kgKyBNYXRoLnNpbih0aGlzLm1SYWQpICogdGhpcy5tUmFkaXVzO1xuXG5cbiAgICAvLyB0aGlzLm1IYW5kLmxpbmVTdHlsZSh0aGlzLmxpbmVXaWR0aCwgMHg4MWQ4ZDAsIDEpO1xuICAgIHRoaXMubUhhbmQubGluZVN0eWxlKDIsIDB4ODFkOGQwLCAxKTtcblxuICAgIHRoaXMubUhhbmQubW92ZVRvKHRoaXMuY3gsIHRoaXMuY3kpOyAgICBcbiAgICB0aGlzLm1IYW5kLmxpbmVUbyh0aGlzLm1IYW5kWCwgdGhpcy5tSGFuZFkpO1xuXG4gICAgdGhpcy5tSGFuZC5lbmRGaWxsKCk7XG5cblxuICAgIC8vIOenkumHnVxuICAgIGlmICghdGhpcy5zSGFuZEZsYWcpIHtcbiAgICAgIFxuICAgICAgdGhpcy5zUmFkID0gTWF0aC5QSSAqIDIgKiB0aGlzLnNlY29uZFAgLSBNYXRoLlBJIC8gMjtcblxuICAgIH0gZWxzZSB7XG5cblxuICAgIH1cblxuICAgIHRoaXMuc1JhZGl1cyA9IHRoaXMuZ2V0U0hhbmRMZW5ndGgodGhpcy5zUmFkKTtcbiAgICAvLyBsb2codGhpcy5zUmFkaXVzKTtcblxuICAgIHRoaXMuc0hhbmRYID0gdGhpcy5jeCArIE1hdGguY29zKHRoaXMuc1JhZCkgKiB0aGlzLnNSYWRpdXMgKiAoZ2IuaW4ucm0uY3VycmVudCAvIDEwMCk7XG4gICAgdGhpcy5zSGFuZFkgPSB0aGlzLmN5ICsgTWF0aC5zaW4odGhpcy5zUmFkKSAqIHRoaXMuc1JhZGl1cyAqIChnYi5pbi5ybS5jdXJyZW50IC8gMTAwKTtcblxuICAgIC8vIGxvZyh0aGlzLnNSYWQsdGhpcy5zUmFkaXVzLGdiLmluLnJtLmN1cnJlbnQpO1xuXG4gICAgLy8gdGhpcy5zSGFuZC5saW5lU3R5bGUodGhpcy5saW5lV2lkdGgsIDB4ODFkOGQwLCAxKTtcbiAgICB0aGlzLnNIYW5kLmxpbmVTdHlsZSgxLCAweDgxZDhkMCwgMSk7XG5cbiAgICB0aGlzLnNIYW5kLm1vdmVUbyh0aGlzLmN4LCB0aGlzLmN5KTsgICAgXG4gICAgdGhpcy5zSGFuZC5saW5lVG8odGhpcy5zSGFuZFgsIHRoaXMuc0hhbmRZKTtcblxuICAgIHRoaXMuc0hhbmQuZW5kRmlsbCgpO1xuXG4gIH1cblxuICBnZXRTSGFuZExlbmd0aCh0YXJnZXRSYWQpIHtcblxuICAgIHZhciBhbmdsZSA9IHRhcmdldFJhZCAqIDE4MCAvIE1hdGguUEk7XG4gICAgaWYgKGFuZ2xlIDwgMCkgYW5nbGUgKz0gMzYwO1xuICAgIGFuZ2xlID0gYW5nbGUgJSAzNjA7XG4gICAgdmFyIHRhcmdldCA9IDA7XG5cbiAgICAvLyDlj7PkuIvjga7op5LluqZcbiAgICB2YXIgcmlnaHRCdG1BbmcgPSBNYXRoLmF0YW4yKGdiLmluLnIud3MuaCAtIHRoaXMuY3ksZ2IuaW4uci53cy53IC0gdGhpcy5jeCkgKiAxODAgLyBNYXRoLlBJO1xuICAgIHZhciBsZWZ0QnRtQW5nID0gMTgwLXJpZ2h0QnRtQW5nO1xuICAgIHZhciBsZWZ0VG9wQW5nID0gcmlnaHRCdG1BbmcgKyAxODA7XG4gICAgdmFyIHJpZ2h0VG9wQW5nID0gMzYwLXJpZ2h0QnRtQW5nO1xuXG4gICAgaWYgKGFuZ2xlID4gcmlnaHRCdG1BbmcgJiYgYW5nbGUgPCA5MCkge1xuXG4gICAgICBhbmdsZSA9IDkwIC0gYW5nbGU7XG4gICAgICB0YXJnZXQgPSAoZ2IuaW4uci53cy5oLzIpIC8gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKVxuXG4gICAgfSBlbHNlIGlmIChhbmdsZSA+PSA5MCAmJiBhbmdsZSA8IGxlZnRCdG1BbmcpIHtcblxuICAgICAgYW5nbGUgPSBhbmdsZSAtIDkwO1xuICAgICAgdGFyZ2V0ID0gKGdiLmluLnIud3MuaC8yKSAvIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MClcblxuICAgIH0gZWxzZSBpZiAoYW5nbGUgPj0gbGVmdEJ0bUFuZyAmJiBhbmdsZSA8IDE4MCkge1xuXG4gICAgICBhbmdsZSA9IDE4MCAtIGFuZ2xlO1xuICAgICAgdGFyZ2V0ID0gKGdiLmluLnIud3Mudy8yKSAvIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MClcblxuICAgIH0gZWxzZSBpZiAoYW5nbGUgPj0gMTgwICYmIGFuZ2xlIDwgbGVmdFRvcEFuZykge1xuXG4gICAgICBhbmdsZSA9IGFuZ2xlIC0gMTgwO1xuICAgICAgdGFyZ2V0ID0gKGdiLmluLnIud3Mudy8yKSAvIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MClcblxuICAgIH0gZWxzZSBpZiAoYW5nbGUgPj0gbGVmdFRvcEFuZyAmJiBhbmdsZSA8IDI3MCkge1xuXG4gICAgICBhbmdsZSA9IDI3MCAtIGFuZ2xlO1xuICAgICAgLy8gY29uc29sZS5sb2coYW5nbGUpO1xuICAgICAgdGFyZ2V0ID0gKGdiLmluLnIud3MuaC8yKSAvIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MClcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgfSBlbHNlIGlmIChhbmdsZSA+PSAyNzAgJiYgYW5nbGUgPCByaWdodFRvcEFuZykge1xuXG4gICAgICBhbmdsZSA9IGFuZ2xlIC0gMjcwO1xuICAgICAgLy8gY29uc29sZS5sb2coYW5nbGUpO1xuICAgICAgdGFyZ2V0ID0gKGdiLmluLnIud3MuaC8yKSAvIE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MClcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XG5cbiAgICB9IGVsc2UgaWYgKGFuZ2xlID49IHJpZ2h0VG9wQW5nICYmIGFuZ2xlIDwgMzYwKSB7XG5cbiAgICAgIGFuZ2xlID0gMzYwIC0gYW5nbGU7XG4gICAgICB0YXJnZXQgPSAoZ2IuaW4uci53cy53LzIpIC8gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKVxuXG4gICAgfSBlbHNlIGlmIChhbmdsZSA+PSAwICYmIGFuZ2xlIDwgcmlnaHRCdG1BbmcpIHtcblxuICAgICAgYW5nbGUgPSBhbmdsZTtcbiAgICAgIHRhcmdldCA9IChnYi5pbi5yLndzLncvMikgLyBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApXG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRhcmdldDtcblxuICB9XG5cbiAgZHJhd0NpcmNsZTAxKHN0YXJ0UmFkLCBlbmRSYWQpIHtcblxuICAgIHZhciByYWRpdXMgPSAkKHdpbmRvdykuaGVpZ2h0KCkgKiAxMDsgLy8g5pqr5a6aXG4gICAgLy8gdmFyIHJhZGlhbiA9IHJhZCAlIE1hdGguUEkgKiAyO1xuXG4gICAgLy8gdmFyIHJ4ID0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cztcbiAgICAvLyB2YXIgcnkgPSBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzO1xuXG4gICAgdGhpcy5jb2xvci5iZWdpbkZpbGwodGhpcy5maWxsVGlmZmFueUJsdWUsIDEpO1xuICAgIC8vIHRoaXMuY29sb3IubGluZVN0eWxlKDIsIDB4RkYwMEZGLCAxKTtcblxuICAgIHRoaXMuY29sb3IubW92ZVRvKHRoaXMuY3gsIHRoaXMuY3kpO1xuICAgIHRoaXMuY29sb3IuYXJjKHRoaXMuY3gsIHRoaXMuY3ksIHJhZGl1cywgc3RhcnRSYWQsIGVuZFJhZCk7XG5cbiAgICB0aGlzLmNvbG9yLmVuZEZpbGwoKTtcblxuICB9XG5cbiAgZHJhd0NpcmNsZTAyKHN0YXJ0UmFkLCBlbmRSYWQpIHtcblxuICAgIHZhciByYWRpdXMgPSAkKHdpbmRvdykuaGVpZ2h0KCkgKiAxMDsgLy8g5pqr5a6aXG4gICAgLy8gdmFyIHJhZGlhbiA9IHJhZCAlIE1hdGguUEkgKiAyO1xuXG4gICAgLy8gdmFyIHJ4ID0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cztcbiAgICAvLyB2YXIgcnkgPSBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzO1xuXG4gICAgdGhpcy5jb2xvci5iZWdpbkZpbGwodGhpcy5maWxsVGlmZmFueUJsdWUsIDEpO1xuICAgIC8vIHRoaXMuY29sb3IubGluZVN0eWxlKDIsIDB4RkYwMEZGLCAxKTtcblxuICAgIHRoaXMuY29sb3IubW92ZVRvKHRoaXMuY3gsIHRoaXMuY3kpO1xuICAgIHRoaXMuY29sb3IuYXJjKHRoaXMuY3gsIHRoaXMuY3ksIHJhZGl1cywgc3RhcnRSYWQsIGVuZFJhZCk7XG5cbiAgICB0aGlzLmNvbG9yLmVuZEZpbGwoKTtcblxuICB9XG5cbiAgZHJhd0NpcmNsZTAzKHN0YXJ0UmFkLCBlbmRSYWQpIHtcblxuICAgIHZhciByYWRpdXMgPSAkKHdpbmRvdykuaGVpZ2h0KCkgKiAxMDsgLy8g5pqr5a6aXG4gICAgLy8gdmFyIHJhZGlhbiA9IHJhZCAlIE1hdGguUEkgKiAyO1xuXG4gICAgLy8gdmFyIHJ4ID0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cztcbiAgICAvLyB2YXIgcnkgPSBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzO1xuXG4gICAgdGhpcy5jb2xvci5iZWdpbkZpbGwodGhpcy5maWxsVGlmZmFueUJsdWUsIDEpO1xuICAgIC8vIHRoaXMuY29sb3IubGluZVN0eWxlKDIsIDB4RkYwMEZGLCAxKTtcblxuICAgIHRoaXMuY29sb3IubW92ZVRvKHRoaXMuY3gsIHRoaXMuY3kpO1xuICAgIHRoaXMuY29sb3IuYXJjKHRoaXMuY3gsIHRoaXMuY3ksIHJhZGl1cywgc3RhcnRSYWQsIGVuZFJhZCk7XG5cbiAgICB0aGlzLmNvbG9yLmVuZEZpbGwoKTtcblxuICB9XG5cbiAgZHJhd0NpcmNsZTA0KHN0YXJ0UmFkLCBlbmRSYWQpIHtcblxuICAgIHZhciByYWRpdXMgPSAkKHdpbmRvdykuaGVpZ2h0KCkgKiAxMDsgLy8g5pqr5a6aXG4gICAgLy8gdmFyIHJhZGlhbiA9IHJhZCAlIE1hdGguUEkgKiAyO1xuXG4gICAgLy8gdmFyIHJ4ID0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cztcbiAgICAvLyB2YXIgcnkgPSBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzO1xuXG4gICAgdGhpcy5tYXNrLmJlZ2luRmlsbCh0aGlzLmZpbGxCbGFjaywgMSk7XG4gICAgLy8gdGhpcy5tYXNrLmxpbmVTdHlsZSgyLCAweEZGMDBGRiwgMSk7XG5cbiAgICB0aGlzLm1hc2subW92ZVRvKHRoaXMuY3gsIHRoaXMuY3kpO1xuICAgIHRoaXMubWFzay5hcmModGhpcy5jeCwgdGhpcy5jeSwgcmFkaXVzLCBzdGFydFJhZCwgZW5kUmFkKTtcblxuICAgIHRoaXMubWFzay5lbmRGaWxsKCk7XG5cbiAgfVxuXG4gIGRyYXdDaXJjbGUwNShzdGFydFJhZCwgZW5kUmFkKSB7XG5cbiAgICB2YXIgcmFkaXVzID0gJCh3aW5kb3cpLmhlaWdodCgpICogMTA7IC8vIOaaq+WumlxuICAgIC8vIHZhciByYWRpYW4gPSByYWQgJSBNYXRoLlBJICogMjtcblxuICAgIC8vIHZhciByeCA9IE1hdGguY29zKHJhZGlhbikgKiByYWRpdXM7XG4gICAgLy8gdmFyIHJ5ID0gTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cztcblxuICAgIHRoaXMubWFzay5iZWdpbkZpbGwodGhpcy5maWxsQmxhY2ssIDEpO1xuICAgIC8vIHRoaXMubWFzay5saW5lU3R5bGUoMiwgMHhGRjAwRkYsIDEpO1xuXG4gICAgdGhpcy5tYXNrLm1vdmVUbyh0aGlzLmN4LCB0aGlzLmN5KTtcbiAgICB0aGlzLm1hc2suYXJjKHRoaXMuY3gsIHRoaXMuY3ksIHJhZGl1cywgc3RhcnRSYWQsIGVuZFJhZCk7XG5cbiAgICB0aGlzLm1hc2suZW5kRmlsbCgpO1xuXG4gIH1cblxuICBkcmF3Q2lyY2xlMDYoc3RhcnRSYWQsIGVuZFJhZCkge1xuXG4gICAgdmFyIHJhZGl1cyA9ICQod2luZG93KS5oZWlnaHQoKSAqIDEwOyAvLyDmmqvlrppcbiAgICAvLyB2YXIgcmFkaWFuID0gcmFkICUgTWF0aC5QSSAqIDI7XG5cbiAgICAvLyB2YXIgcnggPSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzO1xuICAgIC8vIHZhciByeSA9IE1hdGguc2luKHJhZGlhbikgKiByYWRpdXM7XG5cbiAgICB0aGlzLm1hc2suYmVnaW5GaWxsKHRoaXMuZmlsbEJsYWNrLCAxKTtcbiAgICAvLyB0aGlzLm1hc2subGluZVN0eWxlKDIsIDB4RkYwMEZGLCAxKTtcblxuICAgIHRoaXMubWFzay5tb3ZlVG8odGhpcy5jeCwgdGhpcy5jeSk7XG4gICAgdGhpcy5tYXNrLmFyYyh0aGlzLmN4LCB0aGlzLmN5LCByYWRpdXMsIHN0YXJ0UmFkLCBlbmRSYWQpO1xuXG4gICAgdGhpcy5tYXNrLmVuZEZpbGwoKTtcblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICB0aGlzLnJlbmRlcmVyLndpZHRoID0gZ2IuaW4uci53cy53O1xuICAgIHRoaXMucmVuZGVyZXIuaGVpZ2h0ID0gZ2IuaW4uci53cy5oO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZXNpemUoZ2IuaW4uci53cy53LCBnYi5pbi5yLndzLmgpO1xuXG4gIFxuXG4gICAgdGhpcy5zUmFkaXVzID0gdGhpcy50YXJnZXRSYWRpdXMgPSBNYXRoLnNxcnQoZ2IuaW4uci53cy53KmdiLmluLnIud3MudyArIGdiLmluLnIud3MuaCpnYi5pbi5yLndzLmgpO1xuXG4gIH1cblxuICBzZXRFdmVudHMgKCkge1xuXG4gICAgZ2IuaW4uci5hZGQoJ1BhZ2VUcmFuc2l0aW9uRWZmZWN0JywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICBnYi5pbi51cC5hZGQoJ1BhZ2VUcmFuc2l0aW9uRWZmZWN0JywgdGhpcy5sb29wLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1BhZ2VUcmFuc2l0aW9uL1BhZ2VUcmFuc2l0aW9uLmVzNiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQb2ludFxuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG5cbiAgY29uc3RydWN0b3IoeCx5KSB7XG5cbiAgICB0aGlzLnN4ID0gMDtcbiAgICB0aGlzLnN5ID0gMDtcblxuICAgIHRoaXMudyA9IDA7XG4gICAgdGhpcy5oID0gMDtcblxuICAgIHRoaXMuZXggPSAwO1xuICAgIHRoaXMuZXggPSAwO1xuXG4gICAgdGhpcy54ID0geCB8fCAwOyAvL3ByZXZpb3VzIG1vdXNlIHhcbiAgICB0aGlzLnkgPSB5IHx8IDA7IC8vcHJldmlvdXMgbW91c2UgeVxuICAgIHRoaXMudnggPSAwOyAvL2NlbnRlciB4XG4gICAgdGhpcy52eSA9IDA7IC8vY2VudGVyIHlcblxuICAgIHRoaXMuZGVmWCA9IHggfHwgMDtcbiAgICB0aGlzLmRlZlkgPSB5IHx8IDA7XG5cbiAgICB0aGlzLnB4ID0gMDsgLy9wcmV2aW91cyBtb3VzZSB4XG4gICAgdGhpcy5weSA9IDA7IC8vcHJldmlvdXMgbW91c2UgeVxuXG4gICAgdGhpcy5yYWRpdXMgPSAwOyAgICAvLyDljYrlvoRcbiAgICB0aGlzLmNvbG9yID0gbnVsbDsgIC8vIOiJslxuICAgIHRoaXMuaXNSZW1vdmUgPSBmYWxzZTsvLyDmtojljrvjg5Xjg6njgrBcblxuICAgIC8vIHRoaXMuR1JBVklUWSA9IDAuNDtcbiAgICB0aGlzLkdSQVZJVFkgPSAwO1xuICAgIHRoaXMuU1BSSU5HID0gMC4wODsgIC8vIOODkOODjeS/guaVsFxuICAgIHRoaXMuRlJJQ1RJT04gPSAwLjk3OyAgLy8g5pGp5pOm5L+C5pWwXG4gICAgdGhpcy5NQVhfRElTID0gMTAwOyAgLy8g44Oc44O844Or44GM44Oe44Km44K544Gr5Y+N5b+c44GZ44KL5pyA5aSn6Led6ZuiXG5cbiAgICB0aGlzLnRvcCA9IDA7XG4gICAgdGhpcy5sZWZ0ID0gMDtcblxuICB9XG5cbiAgY3JlYXRlKCkge1xuXG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuXG4gIH1cblxuICBkcmF3KCkge1xuXG4gICAgXG4gICAgXG4gIH1cblxuICBsb29wKCkge1xuXG4gIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvUGFnZVRyYW5zaXRpb24vUG9pbnQuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBUb3BPcGVuaW5nXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgTGlicyBmcm9tICcuLi8uLi8uLi9NeUxpYnMvRGlzcGxheS9Nb3Rpb24vRG9tTW90aW9uTGlicy5qcyc7XG5pbXBvcnQgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCBmcm9tICcuL0hvdmVyRWZmZWN0U1ZHQXJyb3dUb3AuZXM2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wT3BlbmluZyB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMudGxNYWluID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgLy8gdGhpcy5ydW4oKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIHRoaXMubGlicyA9IG5ldyBMaWJzKCk7XG4gICAgdGhpcy5odCA9IG5ldyBIb3ZlckVmZmVjdFNWR0Fycm93VG9wKCQoJy5zZWN0aW9uMDEgLm5leHQnKSk7XG4gICAgdGhpcy5odC5zZXR1cEZpcnN0KCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgZG9t5Y+W5b6XXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy4kbmF2ID0gJCgnI25hdicpO1xuICAgIHRoaXMuJG5hdkl0ZW0gPSB0aGlzLiRuYXYuZmluZCgnLml0ZW0nKTtcblxuICAgIHRoaXMuJHNpZGVSID0gJCgnI3NpZGVSJyk7XG5cbiAgICB0aGlzLiRmb290ZXJUZXh0ID0gJCgnI2Zvb3RlciAudGV4dCcpO1xuXG4gICAgdGhpcy4kdGV4dCA9ICQoJy5zZWN0aW9uMDEgLm5leHQgLnRleHQnKTtcbiAgICB0aGlzLiRhcnJvdyA9ICQoJy5zZWN0aW9uMDEgLm5leHQgc3ZnJyk7XG5cbiAgICB0aGlzLiRjb3B5ID0gJCgnI2Zvb3RlciAuY29weScpO1xuICAgIHRoaXMuJHRpbWUgPSAkKCcuc2VjdGlvbjAxIC50aW1lV3JhcCAudGV4dFdyYXAnKTtcblxuICAgIHRoaXMuJHNpZGVMID0gJCgnI3NpZGVMJyk7XG5cbiAgICB0aGlzLiR0aXQwMSA9ICQoJy5zZWN0aW9uMDEgLnRpdFdyYXAgaW1nJykuZXEoMCk7XG4gICAgdGhpcy4kdGl0MDIgPSAkKCcuc2VjdGlvbjAxIC50aXRXcmFwIGltZycpLmVxKDEpO1xuICAgIHRoaXMuJHRpdDAzID0gJCgnLnNlY3Rpb24wMSAudGl0V3JhcCBpbWcnKS5lcSgyKTtcblxuICAgIC8vIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIC8vICBzY2VuZTAxIHNldHVwXG4gICAgLy8gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdmFyIG9wdCA9IHskdGFyZ2V0OiB0aGlzLiRuYXZJdGVtLGR1cjogMCxkZWxheTogMCxibHVyOiAwLGJsdXJUYXJnZXQ6IDEwLGVhc2U6IFBvd2VyMy5lYXNlSW59O1xuICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG4gICAgdmFyIG9wdCA9IHskdGFyZ2V0OiB0aGlzLiRzaWRlUixkdXI6IDAsZGVsYXk6IDAsYmx1cjogMCxibHVyVGFyZ2V0OiAxMCxlYXNlOiBQb3dlcjMuZWFzZUlufTtcbiAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kZm9vdGVyVGV4dCxkdXI6IDAsZGVsYXk6IDAsYmx1cjogMCxibHVyVGFyZ2V0OiAxMCxlYXNlOiBQb3dlcjMuZWFzZUlufTtcbiAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kY29weSxkdXI6IDAsZGVsYXk6IDAsYmx1cjogMCxibHVyVGFyZ2V0OiAxMCxlYXNlOiBQb3dlcjMuZWFzZUlufTtcbiAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kdGltZSxkdXI6IDAsZGVsYXk6IDAsYmx1cjogMCxibHVyVGFyZ2V0OiAxMCxlYXNlOiBQb3dlcjMuZWFzZUlufTtcbiAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kc2lkZUwsZHVyOiAwLGRlbGF5OiAwLGJsdXI6IDAsYmx1clRhcmdldDogMTAsZWFzZTogUG93ZXIzLmVhc2VJbn07XG4gICAgdGhpcy5saWJzLmJsdXIob3B0KTtcblxuICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kdGl0MDEsZHVyOiAwLGRlbGF5OiAwLGJsdXI6IDAsYmx1clRhcmdldDogMjAsZWFzZTogUG93ZXIzLmVhc2VJbn07XG4gICAgdGhpcy5saWJzLmJsdXIob3B0KTtcbiAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJHRpdDAyLGR1cjogMCxkZWxheTogMCxibHVyOiAwLGJsdXJUYXJnZXQ6IDIwLGVhc2U6IFBvd2VyMy5lYXNlSW59O1xuICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG4gICAgdmFyIG9wdCA9IHskdGFyZ2V0OiB0aGlzLiR0aXQwMyxkdXI6IDAsZGVsYXk6IDAsYmx1cjogMCxibHVyVGFyZ2V0OiAyMCxlYXNlOiBQb3dlcjMuZWFzZUlufTtcbiAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuXG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJG5hdkl0ZW0sIHt5OiAtNDB9KTtcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kc2lkZVIsIHt4OiA0MH0pO1xuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRmb290ZXJUZXh0LCB7eTogNDB9KTtcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kY29weSwge3k6IDQwfSk7XG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJHRpbWUsIHt5OiA0MH0pO1xuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRzaWRlTCwge3g6IC00MH0pO1xuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiR0aXQwMSwge3k6IC04MCxvcGFjaXR5OiAwfSk7XG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJHRpdDAyLCB7eTogLTgwLG9wYWNpdHk6IDB9KTtcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kdGl0MDMsIHt5OiAtODAsb3BhY2l0eTogMH0pO1xuXG4gIH1cblxuICBydW5Ub3AoKSB7XG5cbiAgICAvLyDlj7PkuIrjgYvjgonpoIbjgatcblxuICAgIHRoaXMudGxNYWluXG4gICAgICAuYWRkKCgpPT57XG5cbiAgICAgICAgVHdlZW5NYXgudG8oJCgnLm1lbnVCdG4wMScpLCAxLCB7b3BhY2l0eTogMSxlYXNlOiBQb3dlcjIuZWFzZU91dH0pO1xuXG4gICAgICAgIHRoaXMuJG5hdkl0ZW0uZWFjaCgoaW5kZXgsIGVsKT0+e1xuXG4gICAgICAgICAgdmFyIG9wdCA9IHskdGFyZ2V0OiAkKGVsKSxkdXI6IDEsZGVsYXk6IDAuMSAqIGluZGV4LGJsdXI6IDEwLGJsdXJUYXJnZXQ6IDAsZWFzZTogUG93ZXIyLmVhc2VPdXR9O1xuICAgICAgICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG5cbiAgICAgICAgICBUd2Vlbk1heC50bygkKGVsKSwgMSwge3k6IDAsb3BhY2l0eToxLHo6IDEsZWFzZTogUG93ZXIyLmVhc2VPdXQsZGVsYXk6IDAuMSAqIGluZGV4fSk7XG4gICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICB9LCcrPTEuMicpXG4gICAgICAuYWRkKCgpPT57XG5cbiAgICAgICAgdmFyIG9wdCA9IHskdGFyZ2V0OiB0aGlzLiRzaWRlUixkdXI6IDEsZGVsYXk6IDAsYmx1cjogMTAsYmx1clRhcmdldDogMCxlYXNlOiBQb3dlcjIuZWFzZU91dH07XG4gICAgICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy4kc2lkZVIsIDEsIHt4OiAwLG9wYWNpdHk6MSxlYXNlOiBQb3dlcjIuZWFzZU91dH0pO1xuXG4gICAgICB9LCcrPTAuNicpXG4gICAgICAuYWRkKCgpPT57XG5cbiAgICAgICAgdmFyIG9wdCA9IHskdGFyZ2V0OiB0aGlzLiRmb290ZXJUZXh0LGR1cjogMSxkZWxheTogMCxibHVyOiAxMCxibHVyVGFyZ2V0OiAwLGVhc2U6IFBvd2VyMi5lYXNlT3V0fTtcbiAgICAgICAgdGhpcy5saWJzLmJsdXIob3B0KTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLiRmb290ZXJUZXh0LCAxLCB7eTogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIyLmVhc2VPdXR9KTtcblxuICAgICAgfSwnKz0wLjEzJylcbiAgICAgIC5hZGQoKCk9PntcblxuICAgICAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJGNvcHksZHVyOiAxLGRlbGF5OiAwLGJsdXI6IDEwLGJsdXJUYXJnZXQ6IDAsZWFzZTogUG93ZXIyLmVhc2VPdXR9O1xuICAgICAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJGNvcHksIDEsIHt5OiAwLG9wYWNpdHk6MSxlYXNlOiBQb3dlcjIuZWFzZU91dH0pO1xuXG4gICAgICB9LCcrPTAuMTMnKVxuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kdGltZSxkdXI6IDEsZGVsYXk6IDAsYmx1cjogMTAsYmx1clRhcmdldDogMCxlYXNlOiBQb3dlcjIuZWFzZU91dH07XG4gICAgICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy4kdGltZSwgMSwge3k6IDAsb3BhY2l0eToxLGVhc2U6IFBvd2VyMi5lYXNlT3V0fSk7XG5cbiAgICAgIH0sJys9MC4xMycpXG4gICAgICAuYWRkKCgpPT57XG5cbiAgICAgICAgdmFyIG9wdCA9IHskdGFyZ2V0OiB0aGlzLiRzaWRlTCxkdXI6IDEsZGVsYXk6IDAsYmx1cjogMTAsYmx1clRhcmdldDogMCxlYXNlOiBQb3dlcjIuZWFzZU91dH07XG4gICAgICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG5cbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy4kc2lkZUwsIDEsIHt4OiAwLG9wYWNpdHk6MSxlYXNlOiBQb3dlcjIuZWFzZU91dH0pO1xuXG4gICAgICB9LCcrPTAuMTMnKVxuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kdGl0MDEsZHVyOiAyLjAsZGVsYXk6IDAsYmx1cjogMjAsYmx1clRhcmdldDogMCxlYXNlOiBQb3dlcjIuZWFzZU91dH07XG4gICAgICAgIHRoaXMubGlicy5ibHVyKG9wdCk7XG4gICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kdGl0MDIsZHVyOiAxLjksZGVsYXk6IDAuMSxibHVyOiAyMCxibHVyVGFyZ2V0OiAwLGVhc2U6IFBvd2VyMi5lYXNlT3V0fTtcbiAgICAgICAgdGhpcy5saWJzLmJsdXIob3B0KTtcbiAgICAgICAgdmFyIG9wdCA9IHskdGFyZ2V0OiB0aGlzLiR0aXQwMyxkdXI6IDEuOCxkZWxheTogMC4yLGJsdXI6IDIwLGJsdXJUYXJnZXQ6IDAsZWFzZTogUG93ZXIyLmVhc2VPdXR9O1xuICAgICAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJHRpdDAxLCAyLjAsIHt5OiAwLG9wYWNpdHk6MSxlYXNlOiBQb3dlcjIuZWFzZU91dCxkZWxheTowfSk7XG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJHRpdDAyLCAxLjksIHt5OiAwLG9wYWNpdHk6MSxlYXNlOiBQb3dlcjIuZWFzZU91dCxkZWxheTowLjF9KTtcbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy4kdGl0MDMsIDEuOCwge3k6IDAsb3BhY2l0eToxLGVhc2U6IFBvd2VyMi5lYXNlT3V0LGRlbGF5OjAuMn0pO1xuXG4gICAgICB9LCcrPTAuMTMnKVxuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIHRoaXMuaHQucnVuRmlyc3QoKTtcbiAgICAgICAgdGhpcy5odC5hdXRvQXJyb3coKTtcblxuICAgICAgfSwnKz0xLjEyJylcblxuXG4gIH1cblxuICAgcnVuT3RoZXIoKSB7XG5cbiAgICB0aGlzLnRsTWFpblxuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKCQoJy5tZW51QnRuMDEnKSwgMSwge29wYWNpdHk6IDEsZWFzZTogUG93ZXIyLmVhc2VPdXR9KTtcblxuICAgICAgICB0aGlzLiRuYXZJdGVtLmVhY2goKGluZGV4LCBlbCk9PntcblxuICAgICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogJChlbCksZHVyOiAxLGRlbGF5OiAwLjEgKiBpbmRleCxibHVyOiAxMCxibHVyVGFyZ2V0OiAwLGVhc2U6IFBvd2VyMi5lYXNlT3V0fTtcbiAgICAgICAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuXG4gICAgICAgICAgVHdlZW5NYXgudG8oJChlbCksIDEsIHt5OiAwLG9wYWNpdHk6MSx6OjEsIGVhc2U6IFBvd2VyMi5lYXNlT3V0LGRlbGF5OiAwLjEgKiBpbmRleH0pO1xuICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgfSwnKz0xLjInKVxuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kc2lkZVIsZHVyOiAxLGRlbGF5OiAwLGJsdXI6IDEwLGJsdXJUYXJnZXQ6IDAsZWFzZTogUG93ZXIyLmVhc2VPdXR9O1xuICAgICAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJHNpZGVSLCAxLCB7eDogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIyLmVhc2VPdXR9KTtcblxuICAgICAgfSwnKz0wLjYnKVxuICAgICAgLmFkZCgoKT0+e1xuXG4gICAgICAgIHZhciBvcHQgPSB7JHRhcmdldDogdGhpcy4kc2lkZUwsZHVyOiAxLGRlbGF5OiAwLGJsdXI6IDEwLGJsdXJUYXJnZXQ6IDAsZWFzZTogUG93ZXIyLmVhc2VPdXR9O1xuICAgICAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJHNpZGVMLCAxLCB7eDogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIyLmVhc2VPdXR9KTtcblxuICAgICAgfSwnKz0wLjEzJylcblxuICAgICAgLy8g44OV44OD44K/44O8562J44Gv6KGo56S644GV44KM44Gq44GE44GM44CB5Yid5pyf54q25oWL44Gr5oi744GX44Gm44GK44GPXG4gICAgICAuYWRkKCgpPT57XG5cbiAgICAgICAgdmFyIG9wdCA9IHskdGFyZ2V0OiB0aGlzLiRmb290ZXJUZXh0LGR1cjogMSxkZWxheTogMCxibHVyOiAxMCxibHVyVGFyZ2V0OiAwLGVhc2U6IFBvd2VyMi5lYXNlT3V0fTtcbiAgICAgICAgdGhpcy5saWJzLmJsdXIob3B0KTtcblxuICAgICAgICBUd2Vlbk1heC50byh0aGlzLiRmb290ZXJUZXh0LCAxLCB7eTogMCxvcGFjaXR5OjEsZWFzZTogUG93ZXIyLmVhc2VPdXR9KTtcblxuICAgICAgfSlcbiAgICAgIC5hZGQoKCk9PntcblxuICAgICAgICB2YXIgb3B0ID0geyR0YXJnZXQ6IHRoaXMuJGNvcHksZHVyOiAxLGRlbGF5OiAwLGJsdXI6IDEwLGJsdXJUYXJnZXQ6IDAsZWFzZTogUG93ZXIyLmVhc2VPdXR9O1xuICAgICAgICB0aGlzLmxpYnMuYmx1cihvcHQpO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuJGNvcHksIDEsIHt5OiAwLG9wYWNpdHk6MSxlYXNlOiBQb3dlcjIuZWFzZU91dH0pO1xuXG4gICAgICB9KVxuXG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG5cbiAgfVxuXG4gIG9uTG9vcCgpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCgnT3BlbmluZycsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvVG9wT3BlbmluZy5lczYiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRG9tTW90aW9uTGlic1xuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21Nb3Rpb25MaWJzIHtcblxuICBjb25zdHJ1Y3RvcihzcmMpIHtcblxuICAgIHRoaXMuc3JjID0gc3JjO1xuXG4gICAgdGhpcy5maXJzdCA9IHRydWU7XG5cbiAgfVxuXG4gIGJsdXIob3B0KXsgXG5cbiAgICB2YXIgZGVmID0ge1xuICAgICAgICAgICAgJHRhcmdldDogbnVsbCxcbiAgICAgICAgICAgIGR1cjogMSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgYmx1cjogMCxibHVyVGFyZ2V0OiAxMDAsXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZUluXG4gICAgICAgICAgfTtcbiAgICB2YXIgcGFyYW0gPSAkLmV4dGVuZChkZWYsb3B0KTtcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTsgICAgICBcblxuICAgIHRsXG4gICAgICAudG8ocGFyYW0sIHBhcmFtLmR1ciwge1xuICAgICAgICBibHVyOiBwYXJhbS5ibHVyVGFyZ2V0LFxuICAgICAgICBlYXNlOiBwYXJhbS5lYXNlLFxuICAgICAgICBkZWxheTogcGFyYW0uZGVsYXksXG4gICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbihwKSB7XG4gICAgICAgICAgdmFyIGIgPSBwLnRhcmdldC5ibHVyO1xuICAgICAgICAgIFR3ZWVuTWF4LnNldChwYXJhbS4kdGFyZ2V0LCB7XG4gICAgICAgICAgICAnLXdlYmtpdC1maWx0ZXInOiAnYmx1cignICsgYiArICdweCknLFxuICAgICAgICAgICAgJ2ZpbHRlcic6ICdibHVyKCcgKyBiICsgJ3B4KScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVXBkYXRlUGFyYW1zOiBbXCJ7c2VsZn1cIl1cbiAgICAgIH0pXG4gICAgXG4gIH1cblxuICBicmlnaHQob3B0KXtcblxuICAgIHZhciBkZWYgPSB7XG4gICAgICAgICAgICAkdGFyZ2V0OiBudWxsLFxuICAgICAgICAgICAgZHVyOiAxLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBncmF5c2NhbGU6IDAsZ3JheXNjYWxlVGFyZ2V0OiAxMDAsXG4gICAgICAgICAgICBicmlnaHRuZXNzOiAxMDAsYnJpZ2h0bmVzc1RhcmdldDogMTAwMCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsb3BhY2l0eVRhcmdldDogMSxcbiAgICAgICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW4sXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe31cbiAgICAgICAgICB9O1xuICAgIHZhciBwYXJhbSA9ICQuZXh0ZW5kKGRlZixvcHQpO1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpOyAgICBcblxuICAgIHRsXG4gICAgICAvLyAuc2V0KHBhcmFtLCB7XG4gICAgICAvLyAgIGdyYXlzY2FsZTogcGFyYW0uZ3JheXNjYWxlLFxuICAgICAgLy8gICBicmlnaHRuZXNzOiBwYXJhbS5icmlnaHRuZXNzLFxuICAgICAgLy8gICBvcGFjaXR5OiBwYXJhbS5vcGFjaXR5LFxuICAgICAgLy8gfSlcbiAgICAgIC50byhwYXJhbSwgcGFyYW0uZHVyLCB7XG4gICAgICAgIGdyYXlzY2FsZTogcGFyYW0uZ3JheXNjYWxlVGFyZ2V0LFxuICAgICAgICBicmlnaHRuZXNzOiBwYXJhbS5icmlnaHRuZXNzVGFyZ2V0LFxuICAgICAgICBlYXNlOiBwYXJhbS5lYXNlLFxuICAgICAgICBkZWxheTogcGFyYW0uZGVsYXksXG4gICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbihwKSB7XG4gICAgICAgICAgdmFyIGcgPSBwLnRhcmdldC5ncmF5c2NhbGU7XG4gICAgICAgICAgdmFyIGIgPSBwLnRhcmdldC5icmlnaHRuZXNzO1xuICAgICAgICAgIFR3ZWVuTWF4LnNldChwYXJhbS4kdGFyZ2V0LCB7XG4gICAgICAgICAgICAnLXdlYmtpdC1maWx0ZXInOiAnYnJpZ2h0bmVzcygnICsgYiArICclKSBncmF5c2NhbGUoJyArIGcgKyAnJSknLFxuICAgICAgICAgICAgJ2ZpbHRlcic6ICdicmlnaHRuZXNzKCcgKyBiICsgJyUpIGdyYXlzY2FsZSgnICsgZyArICclKScsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVXBkYXRlUGFyYW1zOiBbXCJ7c2VsZn1cIl0sXG4gICAgICB9KVxuICAgICAgLnRvKHBhcmFtLiR0YXJnZXQsIHBhcmFtLmR1ciwge1xuICAgICAgICBvcGFjaXR5OiBwYXJhbS5vcGFjaXR5VGFyZ2V0LFxuICAgICAgICBlYXNlOiBwYXJhbS5lYXNlLFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgIHBhcmFtLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgLy8gfSwnLT0nK3BhcmFtLmR1ci0zLjApO1xuICAgICAgfSwnLT0xLjgnKTtcblxuICB9XG5cbiAgc2hha2Uob3B0KXtcblxuICAgIHZhciBkZWYgPSB7XG4gICAgICAgICAgICAkdGFyZ2V0OiBudWxsLFxuICAgICAgICAgICAgZHVyOiAxLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBtYWc6IDEwLFxuICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbixcbiAgICAgICAgICB9O1xuICAgIHZhciBwYXJhbSA9ICQuZXh0ZW5kKGRlZixvcHQpO1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpOyAgICAgIFxuXG4gICAgdGxcbiAgICAgIC50byh7fSwgcGFyYW0uZHVyLCB7XG4gICAgICAgIGRlbGF5OiBwYXJhbS5kZWxheSxcbiAgICAgICAgZWFzZTogcGFyYW0uZWFzZSxcbiAgICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICB2YXIgeCA9IChNYXRoLnJhbmRvbSgpKjItMSkgKiBwYXJhbS5tYWc7XG4gICAgICAgICAgdmFyIHkgPSAoTWF0aC5yYW5kb20oKSoyLTEpICogcGFyYW0ubWFnO1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KHBhcmFtLiR0YXJnZXQsIHt4OngseTp5fSk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKXtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldChwYXJhbS4kdGFyZ2V0LCB7eDowLHk6MH0pO1xuXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICB9XG5cbiAgYWZ0ZXJJbWcob3B0KXtcblxuICAgIHZhciBkZWYgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICAgICAgICAkd3JhcDogJCgnYm9keScpLFxuICAgICAgICAgICAgZHVyOiAxLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBudW06IDMsXG4gICAgICAgICAgICBsYWc6IDAuMDUsXG4gICAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZUluLFxuICAgICAgICAgIH07XG4gICAgdmFyIHBhcmFtID0gJC5leHRlbmQoZGVmLG9wdCk7XG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGxcbiAgICAgIC5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgICBpZiAoc2VsZi5maXJzdCkge1xuICAgICAgICAgIHNlbGYuZmlyc3QgPSBmYWxzZTtcblxuICAgICAgICAgIC8vIOeUu+WDj+ikh+ijvVxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW0ubnVtOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkb20gPSAkKHBhcmFtLnRhcmdldCkuY2xvbmUoKTtcbiAgICAgICAgICAgIHBhcmFtLiR3cmFwLmFwcGVuZChkb20pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgXG4gICAgICAgICAgLy8g55S75YOP44K544K/44Kk44Orc2V0XG4gICAgICAgICAgVHdlZW5NYXguc2V0KCQocGFyYW0udGFyZ2V0KSwgeyd0cmFuc2Zvcm0tb3JpZ2luJzonNTAlIDUwJScsJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLHNjYWxlOjEuM30pO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3Rpb25cbiAgICAgICAgJChwYXJhbS50YXJnZXQpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFR3ZWVuTWF4LnRvKCQodGhpcyksIHBhcmFtLmR1ciwge1xuICAgICAgICAgICAgICBzY2FsZTogcGFyYW0uc2NhbGUsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IHBhcmFtLm9wYWNpdHksXG4gICAgICAgICAgICAgIGRlbGF5OiBwYXJhbS5sYWcgKiBpbmRleCxcbiAgICAgICAgICAgICAgZWFzZTogcGFyYW0uZWFzZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICB9KVxuXG4gIH1cblxuICBzY2FsZVNsb3cob3B0KXtcblxuICAgIHZhciBkZWYgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICAgICAgICAkd3JhcDogJCgnYm9keScpLFxuICAgICAgICAgICAgZHVyOiAxLFxuICAgICAgICAgICAgZHVyMDI6IDcsXG4gICAgICAgICAgICBkdXIwMzogMS4zLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBzY2FsZTogMSxzY2FsZVRhcmdldDogMS4zLFxuICAgICAgICAgICAgb3BhY2l0eTogMCxvcGFjaXR5VGFyZ2V0OiAxLFxuICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbixcbiAgICAgICAgICB9O1xuICAgIHZhciBwYXJhbSA9ICQuZXh0ZW5kKGRlZixvcHQpO1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRsXG4gICAgICAudG8oJChwYXJhbS50YXJnZXQpLCAwLjAxLCB7XG4gICAgICAgIHNjYWxlOiBwYXJhbS5zY2FsZSxcbiAgICAgICAgb3BhY2l0eTogcGFyYW0ub3BhY2l0eSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgVHdlZW5NYXgudG8oJChwYXJhbS50YXJnZXQpLCBwYXJhbS5kdXIwMiwge1xuICAgICAgICAgICAgc2NhbGU6IHBhcmFtLnNjYWxlVGFyZ2V0LFxuICAgICAgICAgICAgZWFzZTogUG93ZXIwLmVhc2VOb25lLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIFR3ZWVuTWF4LnRvKCQocGFyYW0udGFyZ2V0KSwgcGFyYW0uZHVyMDMsIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IHBhcmFtLm9wYWNpdHlUYXJnZXQsXG4gICAgICAgICAgICBlYXNlOiBwYXJhbS5lYXNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gIH1cblxuICBzY2FsZUVsYXN0aWMob3B0KXtcblxuICAgIHZhciBkZWYgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICAgICAgICBkdXI6IDEsXG4gICAgICAgICAgICBzY2FsZVg6IDIsc2NhbGVZOiAwLHNjYWxlVGFyZ2V0OiAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIGVhc2U6IEVsYXN0aWMuZWFzZU91dC5jb25maWcoMSwgMC4zKVxuICAgICAgICAgIH07XG4gICAgdmFyIHBhcmFtID0gJC5leHRlbmQoZGVmLG9wdCk7XG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGxcbiAgICAgIC5mcm9tVG8ocGFyYW0udGFyZ2V0LCBwYXJhbS5kdXIsIHtcbiAgICAgICAgc2NhbGVYOiBwYXJhbS5zY2FsZVgsXG4gICAgICAgIHNjYWxlWTogcGFyYW0uc2NhbGVZLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2NhbGU6IHBhcmFtLnNjYWxlVGFyZ2V0LFxuICAgICAgICBlYXNlOiBFbGFzdGljLmVhc2VPdXQuY29uZmlnKDEsIDAuMyksXG4gICAgICB9KTtcblxuICB9XG5cbiAgLy8g44K044OgXG4gIGd1bShvcHQpe1xuXG4gICAgdmFyIGRlZiA9IHtcbiAgICAgICAgICAgIHRhcmdldDogbnVsbCxcbiAgICAgICAgICAgIGR1cjogMSxcbiAgICAgICAgICAgIHNjYWxlWDogMixzY2FsZVk6IDAsc2NhbGVUYXJnZXQ6IDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgZWFzZTogRWxhc3RpYy5lYXNlT3V0LmNvbmZpZygxLCAwLjMpXG4gICAgICAgICAgfTtcbiAgICB2YXIgcGFyYW0gPSAkLmV4dGVuZChkZWYsb3B0KTtcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoe3JlcGVhdDotMSxyZXBlYXREZWxheTogMX0pO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRsXG4gICAgICAudG8ocGFyYW0udGFyZ2V0LDAuMywge1xuICAgICAgICBzY2FsZVk6MS40LFxuICAgICAgICBzY2FsZVggOiAwLjcsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICB9KVxuICAgICAudG8ocGFyYW0udGFyZ2V0LDAuMjUsIHtcbiAgICAgICAgc2NhbGVZOjAuNyxcbiAgICAgICAgc2NhbGVYIDogMS4zLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgfSlcbiAgICAgLnRvKHBhcmFtLnRhcmdldCwwLjIsIHtcbiAgICAgICAgc2NhbGVZOjEuMyxcbiAgICAgICAgc2NhbGVYIDogMC44LFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgfSlcbiAgICAgLnRvKHBhcmFtLnRhcmdldCwwLjIsIHtcbiAgICAgICAgc2NhbGVZOjAuOCxcbiAgICAgICAgc2NhbGVYIDogMS4yLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgfSlcbiAgICAgLnRvKHBhcmFtLnRhcmdldCwwLjIsIHtcbiAgICAgICAgc2NhbGVZOjEuMSxcbiAgICAgICAgc2NhbGVYIDogMC45LFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgfSlcbiAgICAgLnRvKHBhcmFtLnRhcmdldCwwLjEzLCB7XG4gICAgICAgIHNjYWxlWTowLjksXG4gICAgICAgIHNjYWxlWCA6IDEuMSxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgIH0pXG4gICAgIC50byhwYXJhbS50YXJnZXQsMC4xMywge1xuICAgICAgICBzY2FsZVk6IDEsXG4gICAgICAgIHNjYWxlWCA6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICB9KVxuXG5cbiAgfVxuXG4gIC8vIOOCtOODoFxuICBkb29vbihvcHQpe1xuXG4gICAgdmFyIGRlZiA9IHtcbiAgICAgICAgICAgIHRhcmdldDogbnVsbCxcbiAgICAgICAgICAgIHdyYXA6IG51bGwsXG4gICAgICAgICAgICBkdXI6IDEsXG4gICAgICAgICAgICBzY2FsZVg6IDIsc2NhbGVZOiAwLHNjYWxlVGFyZ2V0OiAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIGVhc2U6IEVsYXN0aWMuZWFzZU91dC5jb25maWcoMSwgMC4zKVxuICAgICAgICAgIH07XG4gICAgdmFyIHBhcmFtID0gJC5leHRlbmQoZGVmLG9wdCk7XG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gbG9nbyDjgaHjgofjgaPjgahzY2FsZSxvcGFjaXR544Gn5Ye644Gm44CB44Gd44Gu44GC44Go5o+644KM44Gm44CB5bCP44GV44GP44Gq44KLXG4gICAgdGxcbiAgICAgIC5mcm9tVG8ocGFyYW0udGFyZ2V0LCAzLCB7XG4gICAgICAgIHNjYWxlOiAxLjUsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LHtcbiAgICAgICAgc2NhbGU6IDEuNDUsXG4gICAgICAgIG9wYWNpdHk6IDAuNCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbixcbiAgICAgIH0pXG5cbiAgICB0bFxuICAgICAgLnRvKHt9LCAwLjcsIHtcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VJbixcbiAgICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAvLyDjgobjgoxcbiAgICAgICAgICB2YXIgeCA9IChNYXRoLnJhbmRvbSgpKjItMSkgKiA1O1xuICAgICAgICAgIHZhciB5ID0gKE1hdGgucmFuZG9tKCkqMi0xKSAqIDU7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbS53cmFwKTtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldChwYXJhbS53cmFwLCB7eDp4LHk6eX0pO1xuXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQocGFyYW0ud3JhcCwge3g6MCx5OjB9KTtcblxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRvKHBhcmFtLnRhcmdldCwgMC40LCB7XG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAgIH0sJy09MC43NScpXG5cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRGlzcGxheS9Nb3Rpb24vRG9tTW90aW9uTGlicy5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCkge1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldFxuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG5cbiAgICAvLyDjgrnjg57jg5vjga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIGlmICh0aGlzLmF1dG9UTCkge1xuICAgICAgdGhpcy5hdXRvVEwua2lsbCgpO1xuICAgICAgdGhpcy5hdXRvVEwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy50bDAyKSB0aGlzLnRsMDIua2lsbCgpO1xuICAgIHRoaXMudGwwMSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy50bDAxXG4gICAgICAgIC8vIOefouWNsOOCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCcuYXJyb3cucGMnKSwgMC40LCB7XG4gICAgICAgICAgc2NhbGVZOiAwLjY1LFxuICAgICAgICAgIHk6IDgsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAvLyDmloflrZfjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgnLnRleHQnKSwgMC40LCB7XG4gICAgICAgICAgeTogMzAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0sJy09MC4zNycpXG4gICAgICAgIFxuICB9XG5cbiAgb25MZWF2ZSAodGhhdCkge1xuXG4gICAgaWYgKHRoaXMudGwwMSkgdGhpcy50bDAxLmtpbGwoKTtcbiAgICB0aGlzLnRsMDIgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMudGwwMlxuICAgICAgLy8g5paH5a2X44KS5LiL44Gr5LiL44GS44KLXG4gICAgICAudG8oJCh0aGF0KS5maW5kKCcudGV4dCcpLCAwLjUsIHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMSxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dFxuICAgICAgfSlcbiAgICAgIC8vIOefouWNsOOCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgLnRvKCQodGhhdCkuZmluZCgnLmFycm93LnBjJyksIDAuNSwge1xuICAgICAgICBzY2FsZVk6IDEsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDEsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgIGlmICh0aGlzLmF1dG9UTCA9PSBudWxsKSB0aGlzLmF1dG9BcnJvdygpOyAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgICB9LCctPTAuNDUnKVxuXG4gIH1cblxuICBhdXRvQXJyb3coKSB7XG5cbiAgICB0aGlzLmF1dG9UTCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OiAtMX0pO1xuXG4gICAgdGhpcy5hdXRvVExcbiAgICAgIC50byh0aGlzLiR0YXJnZXQuZmluZCgnLmFycm93LnBjJyksIDAuNiwge1xuICAgICAgICB5OiA2MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZGVsYXk6IDUuMCxcbiAgICAgICAgc2NhbGVZOiAwLjMsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0pXG4gICAgICAuc2V0KHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwge3NjYWxlWTogMSx5OiAtNjB9KVxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwgMC41LCB7XG4gICAgICAgIHNjYWxlWTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZGVsYXk6IDAuMyxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSlcblxuICB9XG5cbiAgc2V0dXBGaXJzdCgpIHtcblxuICAgIFR3ZWVuTWF4LnNldCgkKCcuc2VjdGlvbjAxIC5uZXh0IC50ZXh0JyksIHt5OiAtNjAsb3BhY2l0eTowLHo6IDEsfSk7XG4gICAgVHdlZW5NYXguc2V0KCQoJy5zZWN0aW9uMDEgLm5leHQgc3ZnJyksIHt5OiAtMzAsb3BhY2l0eTowLHo6IDEsfSk7XG5cbiAgfVxuXG4gIHJ1bkZpcnN0KCkge1xuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgLy8g5paH5a2X44KS5LiL44Gr5LiL44GS44KLXG4gICAgICB0bC50bygkKCcuc2VjdGlvbjAxIC5uZXh0IC50ZXh0JyksIDEuNSwge1xuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKCcuc2VjdGlvbjAxIC5uZXh0IHN2ZycpLCAxLjAsIHtcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgejogMSxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuODInKVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uRW50ZXIuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge3NlbGYub25MZWF2ZS5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dUb3AuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBIb3ZlckVmZmVjdFNWR1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RTVkcge1xuXG4gIGNvbnN0cnVjdG9yKCR0YXJnZXQsaG92ZXJDb2xvcixkZWZDb2xvcikge1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldFxuICAgIHRoaXMuaG92ZXJDb2xvciA9IGhvdmVyQ29sb3IgfHwgJyNmZmYnO1xuICAgIHRoaXMuZGVmQ29sb3IgPSBkZWZDb2xvciB8fCAnIzAwMCc7XG5cbiAgICAvLyBtb3Rpb25cbiAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAvLyDjgrnjg57jg5vjga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgcnVuKCkge1xuXG4gIH1cblxuICBvbkVudGVyICh0aGF0KSB7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQKSByZXR1cm5cblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIFxuICAgIHRsXG4gICAgICAudG8oJCh0aGF0KS5maW5kKCdwYXRoJyksIDAuNCwge1xuICAgICAgICBmaWxsOiB0aGlzLmhvdmVyQ29sb3IsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9KVxuICAgICAgICBcbiAgfVxuXG4gIG9uTGVhdmUgKHRoYXQpIHtcblxuICAgIGlmIChnYi5pbi51LmlzUmVzU1ApIHJldHVyblxuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgXG4gICAgdGxcbiAgICAgIC50bygkKHRoYXQpLmZpbmQoJ3BhdGgnKSwgMC40LCB7XG4gICAgICAgIGZpbGw6IHRoaXMuZGVmQ29sb3IsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlSW5cbiAgICAgIH0pXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge3NlbGYub25FbnRlci5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgICQodGhpcykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7c2VsZi5vbkxlYXZlLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLm9mZignbW91c2VlbnRlcicpO1xuICAgICAgJCh0aGlzKS5vZmYoJ21vdXNlbGVhdmUnKTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RTVkdMb2dvXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3ZlckVmZmVjdFNWR0xvZ28ge1xuXG4gIGNvbnN0cnVjdG9yKCR0YXJnZXQpIHtcblxuICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXRcblxuICAgIC8vIG1vdGlvblxuICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIC8vIOOCueODnuODm+OBruOBqOOBjeOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChnYi5pbi51LmlzUEMpIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIGlmIChnYi5pbi51LmlzUmVzU1ApIHJldHVyblxuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gIFxuICAgIHRsXG4gICAgICAudG8oJCh0aGF0KSwgMC41LCB7XG4gICAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0pXG4gICAgICAgIFxuICB9XG5cbiAgb25MZWF2ZSAodGhhdCkge1xuXG4gICAgaWYgKGdiLmluLnUuaXNSZXNTUCkgcmV0dXJuXG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRsXG4gICAgICAudG8oJCh0aGF0KSwgMC41LCB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0XG4gICAgICB9KVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uRW50ZXIuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge3NlbGYub25MZWF2ZS5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5vZmYoJ21vdXNlZW50ZXInKTtcbiAgICAgICQodGhpcykub2ZmKCdtb3VzZWxlYXZlJyk7XG4gICAgICBcbiAgICB9KTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0xvZ28uZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBIb3ZlckVmZmVjdE1lbnVCdG5cbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdmVyRWZmZWN0TWVudUJ0biB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCkge1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldFxuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICB9XG5cbiAgb25FbnRlciAodGhhdCkge1xuXG4gICAgLy8g44Oh44OL44Ol44O844GM6ZaL44GE44Gm44GE44KL44Go44GN44Gv5Yem55CG44GX44Gq44GEXG4gICAgaWYgKGdiLmluLm1lbnUuaXNPcGVuKSByZXR1cm5cblxuICAgIHZhciAkYmFyMDEgPSAkKHRoYXQpLmZpbmQoJy50b3AnKTtcbiAgICB2YXIgJGJhcjAyID0gJCh0aGF0KS5maW5kKCcubWlkZGxlJyk7XG4gICAgdmFyICRiYXIwMyA9ICQodGhhdCkuZmluZCgnLmJvdHRvbScpO1xuXG4gICAgLy8gY292ZXIg5paH5a2XXG4gICAgdmFyIHRsMDEgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRsMDFcbiAgICAgIC5zZXQoJGJhcjAxLCB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfSlcbiAgICAgIC50bygkYmFyMDEsIDAuMywge1xuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlSW5PdXQsXG4gICAgICAgIGRlbGF5OiAwLjE1XG4gICAgICB9KVxuXG4gICAgdmFyIHRsMDIgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRsMDJcbiAgICAgIC5zZXQoJGJhcjAyLCB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfSlcbiAgICAgIC50bygkYmFyMDIsIDAuMywge1xuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlSW5PdXQsXG4gICAgICAgIGRlbGF5OiAwLjFcbiAgICAgIH0pXG5cbiAgICB2YXIgdGwwMyA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGwwM1xuICAgICAgLnNldCgkYmFyMDMsIHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICB9KVxuICAgICAgLnRvKCRiYXIwMywgMC4zLCB7XG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dCxcbiAgICAgICAgZGVsYXk6IDAuMlxuICAgICAgfSlcbiAgICBcbiAgfVxuXG4gIG9uTGVhdmUgKHRoYXQpIHtcblxuICAgIC8vIHZhciAkYmFyMDEgPSAkKHRoYXQpLmZpbmQoJy50b3AnKTtcbiAgICAvLyB2YXIgJGJhcjAyID0gJCh0aGF0KS5maW5kKCcubWlkZGxlJyk7XG4gICAgLy8gdmFyICRiYXIwMyA9ICQodGhhdCkuZmluZCgnLmJvdHRvbScpO1xuXG4gICAgLy8gLy8gY292ZXIg5paH5a2XXG4gICAgLy8gdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAvLyB0bFxuICAgIC8vICAgLnRvKCRiYXIwMSwgMC41LCB7XG4gICAgLy8gICAgIHdpZHRoOiAzMCxcbiAgICAvLyAgICAgJ21hcmdpbi1sZWZ0JzogLTE1LFxuICAgIC8vICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAvLyAgICAgZGVsYXk6IDAuMSxcbiAgICAvLyAgIH0pXG5cbiAgICAvLyB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIC8vIHRsXG4gICAgLy8gICAudG8oJGJhcjAyLCAwLjUsIHtcbiAgICAvLyAgICAgd2lkdGg6IDMwLFxuICAgIC8vICAgICAnbWFyZ2luLWxlZnQnOiAtMTUsXG4gICAgLy8gICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgIC8vICAgfSlcblxuICAgIC8vIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgLy8gdGxcbiAgICAvLyAgIC50bygkYmFyMDMsIDAuNSwge1xuICAgIC8vICAgICB3aWR0aDogMzAsXG4gICAgLy8gICAgICdtYXJnaW4tbGVmdCc6IC0xNSxcbiAgICAvLyAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgLy8gICAgIGRlbGF5OiAwLjE1LFxuICAgIC8vICAgfSlcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGFyZ2V0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKSB7c2VsZi5vbkVudGVyLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgJCh0aGlzKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uTGVhdmUuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICBcbiAgICB9KTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdE1lbnVCdG4uZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBIb3ZlckVmZmVjdFNWR0Fycm93XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3ZlckVmZmVjdFNWR0Fycm93IHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkdGFyZ2V0XG5cbiAgICAvLyBtb3Rpb25cbiAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgICAvLyDjgrnjg57jg5vjga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiR0YXJnZXQuZmluZCgncGF0aCcpLCB7ZHJhd1NWRzogJzAlIDEwMCUnLGZpbGw6ICdub25lJyxzdHJva2U6ICcjMDAwJ30pOyAgICBcblxuICB9XG5cbiAgcnVuKCkge1xuXG4gIH1cblxuICBvbkVudGVyICh0aGF0KSB7XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICB2YXIgZGlyID0gJCh0aGF0KS5kYXRhKCdkaXInKTtcblxuICAgIC8vIOS4iuaWueWQkVxuICAgIGlmIChkaXIgPT0gJ3RvcCcpIHtcblxuICAgICAgdGxcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgncGF0aCcpLCAwLjksIHtcbiAgICAgICAgICBkcmF3U1ZHOiAnMCUgMzAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAudG8oJCh0aGF0KSwgMC45LCB7XG4gICAgICAgICAgeTogLTIwLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0sJy09MC45JylcblxuICAgIC8vIOWPs+aWueWQkVxuICAgIH0gZWxzZSBpZiAoZGlyID09ICdyaWdodCcpIHtcblxuICAgICAgdGxcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgncGF0aCcpLCAwLjksIHtcbiAgICAgICAgICBkcmF3U1ZHOiAnMCUgMzAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAudG8oJCh0aGF0KSwgMC45LCB7XG4gICAgICAgICAgeDogMjAsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSwnLT0wLjknKVxuXG4gICAgLy8g5LiL5pa55ZCRXG4gICAgfSBlbHNlIGlmIChkaXIgPT0gJ2JvdHRvbScpIHtcblxuICAgICAgdGxcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgncGF0aCcpLCAwLjksIHtcbiAgICAgICAgICBkcmF3U1ZHOiAnMCUgMzAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAudG8oJCh0aGF0KSwgMC45LCB7XG4gICAgICAgICAgeTogMjAsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSwnLT0wLjknKVxuXG4gICAgLy8g5bem5pa55ZCRXG4gICAgfSBlbHNlIGlmIChkaXIgPT0gJ2xlZnQnKSB7XG5cbiAgICAgIHRsXG4gICAgICAgIC50bygkKHRoYXQpLmZpbmQoJ3BhdGgnKSwgMC45LCB7XG4gICAgICAgICAgZHJhd1NWRzogJzAlIDMwJScsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKCQodGhhdCksIDAuOSwge1xuICAgICAgICAgIHg6IC0yMCxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuOScpXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgfVxuICAgICAgICBcbiAgfVxuXG4gIG9uTGVhdmUgKHRoYXQpIHtcblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHZhciBkaXIgPSAkKHRoYXQpLmRhdGEoJ2RpcicpO1xuXG4gICAgLy8g5LiK5pa55ZCRXG4gICAgaWYgKGRpciA9PSAndG9wJykge1xuXG4gICAgICB0bFxuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCdwYXRoJyksIDAuOSwge1xuICAgICAgICAgIGRyYXdTVkc6ICcwJSAxMDAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAudG8oJCh0aGF0KSwgMC45LCB7XG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuOScpXG5cbiAgICAvLyDlj7PmlrnlkJFcbiAgICB9IGVsc2UgaWYgKGRpciA9PSAncmlnaHQnKSB7XG5cbiAgICAgIHRsXG4gICAgICAgIC50bygkKHRoYXQpLmZpbmQoJ3BhdGgnKSwgMC45LCB7XG4gICAgICAgICAgZHJhd1NWRzogJzAlIDEwMCUnLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKHRoYXQpLCAwLjksIHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0sJy09MC45JylcblxuICAgIC8vIOS4i+aWueWQkVxuICAgIH0gZWxzZSBpZiAoZGlyID09ICdib3R0b20nKSB7XG5cbiAgICAgIHRsXG4gICAgICAgIC50bygkKHRoYXQpLmZpbmQoJ3BhdGgnKSwgMC45LCB7XG4gICAgICAgICAgZHJhd1NWRzogJzAlIDEwMCUnLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKHRoYXQpLCAwLjksIHtcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0sJy09MC45JylcblxuICAgIC8vIOW3puaWueWQkVxuICAgIH0gZWxzZSBpZiAoZGlyID09ICdsZWZ0Jykge1xuXG4gICAgICB0bFxuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCdwYXRoJyksIDAuOSwge1xuICAgICAgICAgIGRyYXdTVkc6ICcwJSAxMDAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAudG8oJCh0aGF0KSwgMC45LCB7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuOScpXG5cbiAgICB9XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge3NlbGYub25FbnRlci5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgICQodGhpcykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7c2VsZi5vbkxlYXZlLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdBcnJvdy5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEhvdmVyRWZmZWN0U05TUENGb290ZXJcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdmVyRWZmZWN0U05TUENGb290ZXIge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwLCAkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLiR3cmFwID0gJCgnLnNucy5zcCcpXG4gICAgdGhpcy4kaW5uZXIgPSB0aGlzLiR3cmFwLmZpbmQoJy5pbm5lcicpO1xuICAgIHRoaXMuJHRhcmdldCA9IHRoaXMuJHdyYXAuZmluZCgnLmljb25TaGFyZScpO1xuICAgIHRoaXMuJGJhciA9IHRoaXMuJHdyYXAuZmluZCgnLmJhcicpO1xuICAgIHRoaXMuJGxpc3QgPSB0aGlzLiR3cmFwLmZpbmQoJy5saXN0Jyk7XG4gICAgdGhpcy4kaXRlbSA9IHRoaXMuJHdyYXAuZmluZCgnLmxpc3QgLml0ZW0nKTtcblxuICAgIC8vIG1vdGlvblxuICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gIH1cblxuICByZWFkeSgpIHtcblxuICAgIC8vIGJhclxuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRiYXIsIHt3aWR0aDogMH0pXG5cbiAgICAvLyBzbnNcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kaXRlbSwge3g6IC00MCwgb3BhY2l0eTogMH0pXG5cbiAgICB0aGlzLiRiYXIuc2hvdygpO1xuICAgIHRoaXMuJGxpc3Quc2hvdygpO1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIGlmICghZ2IuaW4udS5pc1Jlc1BDKSByZXR1cm47XG5cbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kYmFyKTtcbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kaXRlbSk7XG5cbiAgICB0aGlzLnJlYWR5KCk7XG5cbiAgICAvLyBiYXLjgYzkvLjjgbPjgotcblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGxcbiAgICAgIC50byh0aGlzLiRiYXIsIDAuMywge1xuICAgICAgICB3aWR0aDogMjYsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW5PdXRcbiAgICAgIH0pXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgwKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMicpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgxKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMiksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjI1JylcblxuICAgIC8vIOODm+ODkOODvOOCqOODquOCouOCkuaLoeWkp1xuICAgIFR3ZWVuTWF4LnRvKHRoaXMuJGlubmVyLCAwLjMsIHt3aWR0aDogMTgwfSk7XG4gICAgXG4gIH1cblxuICBvbkxlYXZlICh0aGF0KSB7XG5cbiAgICBpZiAoIWdiLmluLnUuaXNSZXNQQykgcmV0dXJuO1xuXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJhcik7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGl0ZW0pO1xuXG4gICAgLy8gYmFyXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0bFxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMiksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlSW5PdXQsXG4gICAgICB9LClcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDEpLCAwLjMsIHtcbiAgICAgICAgeDogLTQwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZUluT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMCksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlSW5PdXQsXG4gICAgICAgIG9uQ29tcGxldGU6KCk9PntcbiAgICAgICAgICB0aGlzLiRsaXN0LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwnLT0wLjI1JylcbiAgICAgIC50byh0aGlzLiRiYXIsIDAuMiwge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTooKT0+e1xuICAgICAgICAgIHRoaXMuJGJhci5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sJy09MC4yJylcblxuICAgIC8vIOODm+ODkOODvOOCqOODquOCouOCkuaLoeWkp1xuICAgIFR3ZWVuTWF4LnRvKHRoaXMuJGlubmVyLCAwLjMsIHt3aWR0aDogMTR9KTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kaW5uZXIub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKSB7c2VsZi5vbkVudGVyLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgIHRoaXMuJGlubmVyLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge3NlbGYub25MZWF2ZS5jYWxsKHNlbGYsdGhpcyl9KTtcbiBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNQQ0Zvb3Rlci5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEhvdmVyRWZmZWN0U1ZHQXJyb3dTaWRlUlxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RTVkdBcnJvd1NpZGVSIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkdGFyZ2V0XG5cbiAgICAvLyBtb3Rpb25cbiAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgLy8gdGhpcy5hdXRvQXJyb3coKTtcblxuICAgIHRoaXMuaXNIb3ZlciA9IGZhbHNlO1xuXG4gICAgLy8g44K544Oe44Ob44Gu44Go44GN44Gv5Yem55CG44GX44Gq44GEXG4gICAgaWYgKGdiLmluLnUuaXNQQykgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgcnVuKCkge1xuXG4gIH1cblxuICBvbkVudGVyICh0aGF0KSB7XG5cbiAgICB0aGlzLmlzSG92ZXIgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMudGwwMikgdGhpcy50bDAyLmtpbGwoKTtcbiAgICB0aGlzLnRsMDEgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMudGwwMVxuICAgICAgICAvLyDnn6LljbDjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgnLmFycm93LnBjJyksIDAuNCwge1xuICAgICAgICAgIHNjYWxlWTogMC42NSxcbiAgICAgICAgICB5OiA4LFxuICAgICAgICAgIHo6IDEsXG4gICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC8vIOaWh+Wtl+OCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCcudGV4dCcpLCAwLjQsIHtcbiAgICAgICAgICB5OiAzMCxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0sJy09MC4zNycpXG4gICAgICAgIFxuICB9XG5cbiAgb25MZWF2ZSAodGhhdCkge1xuXG4gICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50bDAxKSB0aGlzLnRsMDEua2lsbCgpO1xuICAgIHRoaXMudGwwMiA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy50bDAyXG4gICAgICAvLyDmloflrZfjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgIC50bygkKHRoYXQpLmZpbmQoJy50ZXh0JyksIDAuNSwge1xuICAgICAgICB5OiAwLFxuICAgICAgICB6OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0XG4gICAgICB9KVxuICAgICAgLy8g55+i5Y2w44KS5LiL44Gr5LiL44GS44KLXG4gICAgICAudG8oJCh0aGF0KS5maW5kKCcuYXJyb3cucGMnKSwgMC41LCB7XG4gICAgICAgIHNjYWxlWTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0XG4gICAgICB9LCctPTAuNDUnKVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uRW50ZXIuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge3NlbGYub25MZWF2ZS5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dTaWRlUi5lczYiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBNYWluXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBEaXNwbGF5VG9wIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRvcC5lczYnO1xuLy8gaW1wb3J0IERpc3BsYXlNb3ZpZSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlNb3ZpZS5lczYnO1xuLy8gaW1wb3J0IERpc3BsYXlJbnRlcnZpZXcgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5SW50ZXJ2aWV3LmVzNic7XG4vLyBpbXBvcnQgRGlzcGxheUludGVydmlld0RldGFpbCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlJbnRlcnZpZXdEZXRhaWwuZXM2Jztcbi8vIGltcG9ydCBEaXNwbGF5SGlzdG9yeSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlIaXN0b3J5LmVzNic7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLm9uSW1tZWRpYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgb25JbW1lZGlhdGUoKSB7XG5cbiAgICAvLyB3aW5kb3cuY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIHZhciBwYWdlID0gJCgnYm9keScpLmRhdGEoJ2lkJyk7XG5cblx0XHQvL3BhZ2Xjga5JROOBlOOBqOOBq+eZuueBq+OBmeOCi+OCr+ODqeOCueOBruaMr+OCiuWIhuOBkVxuICAgIHN3aXRjaCAocGFnZSkge1xuXG4gICAgICBjYXNlICd0b3AnOlxuXG4gICAgICAgIG5ldyBEaXNwbGF5VG9wKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIGNhc2UgJ21vdmllJzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5TW92aWUoKTtcblx0XHRcdC8vXG4gICAgICAvLyAgIGJyZWFrO1xuXHRcdFx0Ly9cbiAgICAgIC8vIGNhc2UgJ2ludGVydmlldyc6XG4gICAgICAvL1xuICAgICAgLy8gICBuZXcgRGlzcGxheUludGVydmlldygpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cdFx0XHQvL1xuICAgICAgLy8gY2FzZSAnaW50ZXJ2aWV3X2RldGFpbCc6XG4gICAgICAvL1xuICAgICAgLy8gICBuZXcgRGlzcGxheUludGVydmlld0RldGFpbCgpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cdFx0XHQvL1xuICAgICAgLy8gY2FzZSAnaGlzdG9yeSc6XG4gICAgICAvL1xuICAgICAgLy8gICBuZXcgRGlzcGxheUhpc3RvcnkoKTtcblx0XHRcdC8vXG4gICAgICAvLyAgIGJyZWFrO1xuXG4gICAgfVxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBcbiAgfVxuXG4gIG9uUmVuZGVyKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1BhZ2UvTWFpbi5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIERpc3BsYXlcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgRWZmZWN0cyBmcm9tICcuL0VmZmVjdHMvRWZmZWN0cy5lczYnO1xuaW1wb3J0IFNjYWxlVG9wIGZyb20gJy4uL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGVUb3AuZXM2JztcbmltcG9ydCBIb3ZlckVmZmVjdFNOU1NQRm9vdGVyIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U05TU1BGb290ZXIuZXM2JztcbmltcG9ydCBIb3ZlckVmZmVjdFNWR0Fycm93VG9wIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dUb3AuZXM2JztcbmltcG9ydCBUb3BUaW1lIGZyb20gJy4uL0Rpc3BsYXkvVUkvVG9wVGltZS5lczYnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vTGF5b3V0L1Bvc3Rpb24vUG9zaXRpb24uZXM2JztcbmltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuZXM2JztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5vbkltbWVkaWF0ZSgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIG9uSW1tZWRpYXRlKCkge1xuXG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICAvLyBnYi5pbi53ZWJHTGluaXQgPSBuZXcgV2ViR0xpbml0KCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgVUkgLyBMYXlvdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBzcFxuICAgIC8vIGdiLmluLnNjYWxlVG9wID0gbmV3IFNjYWxlVG9wKCk7XG4gICAgLy8gZ2IuaW4ucG9zID0gbmV3IFBvc2l0aW9uKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgRWZmZWN0c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gc3BcbiAgICAvLyBnYi5pbi5zbGlkZXJUb3Auc2V0RXZlbnRzKCk7XG4gICAgLy8gZ2IuaW4uc25zU1BIb3ZlckVmID0gbmV3IEhvdmVyRWZmZWN0U05TU1BGb290ZXIoJCgnI3NpZGVMJykpO1xuXG4gICAgLy8gcGNcbiAgICAvLyBuZXcgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCgkKCcuc2VjdGlvbjAxIC5uZXh0JykpOyAvLyDihpIgVG9wT3BlbmluZ+OBuFxuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG5cdFx0d2luZG93LmNvbnNvbGUubG9nKCdzdGF0aWNfUnVuJyk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgVUkgLyBMYXlvdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBzcFxuICAgIGdiLmluLnNjYWxlVG9wID0gbmV3IFNjYWxlVG9wKCk7XG4gICAgZ2IuaW4ucG9zID0gbmV3IFBvc2l0aW9uKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgRWZmZWN0c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gc3BcbiAgICBnYi5pbi5zbGlkZXJUb3Auc2V0RXZlbnRzKCk7XG4gICAgZ2IuaW4uc25zU1BIb3ZlckVmID0gbmV3IEhvdmVyRWZmZWN0U05TU1BGb290ZXIoJCgnI3NpZGVMJykpO1xuXG4gICAgLy8gcGNcbiAgICB0aGlzLmh0ID0gbmV3IEhvdmVyRWZmZWN0U1ZHQXJyb3dUb3AoJCgnLnNlY3Rpb24wMSAubmV4dCcpKTtcbiAgICB0aGlzLmh0LmF1dG9BcnJvdygpO1xuICAgIGdiLmluLnRpbWUgPSBuZXcgVG9wVGltZSgpO1xuICAgIGlmIChnYi5pbi5zZWMwMVZpZGVvLnZpZGVvKSBnYi5pbi5zZWMwMVZpZGVvLnZpZGVvLnBsYXlCeU5ZVGltZSgpOyAvLyBzcOeUqOOBq+OCgiBnYi5pbi5zZWMwMVZpZGVv44GM5a2Y5Zyo44GZ44KL44GL44Gp44GG44GL5Yik5a6aXG4gICAgaWYgKGdiLmluLnNlYzAxVmlkZW8udmlkZW8pIGdiLmluLnNlYzAxVmlkZW8udmlkZW8uc2V0RXZlbnRzKCk7IC8vIHNw55So44Gr44KCIGdiLmluLnNlYzAxVmlkZW/jgYzlrZjlnKjjgZnjgovjgYvjganjgYbjgYvliKTlrppcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEVmZmVjdHNcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgU2VjdGlvbjAyQmcgZnJvbSAnLi8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHMuZXM2JztcbmltcG9ydCBTZWN0aW9uMDRQcm9kdWN0IGZyb20gJy4vMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHMuZXM2JztcbmltcG9ydCBQcm9maWxlciBmcm9tICcuL1Byb2ZpbGVyLmVzNic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVmZmVjdHMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5nbCA9IG51bGw7XG4gICAgdGhpcy5kb20gPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSAnJztcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLmRlYnVnKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyBiZ1xuICAgIC8vIGdiLmluLlNlY3Rpb24wMkJnID0gbmV3IFNlY3Rpb24wMkJnKCk7XG5cbiAgICAvLyBwcm9kdWN0XG4gICAgLy8gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdCA9IG5ldyBTZWN0aW9uMDRQcm9kdWN0KCQoJy5zZWN0aW9uMDMnKSk7XG5cbiAgfVxuXG4gIGRlYnVnKCkge1xuXG4gICAgLy8gcHJvZmlsZXLoqK3lrppcbiAgICAvLyBuZXcgUHJvZmlsZXIoKTtcblxuICB9XG5cblxuICBzZXRFdmVudHMoKSB7XG5cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvRWZmZWN0cy5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEdsQ29udGVudHNcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgTG9vcCBmcm9tICcuL0dsQ29udGVudHNMb29wLmVzNic7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9HbENvbnRlbnRzVGltZWxpbmUuZXM2JztcbmltcG9ydCBQbGFuZSBmcm9tICcuL19kZXRhaWxzL1BsYW5lLmVzNic7XG5pbXBvcnQgUGFyYW0gZnJvbSAnLi4vLi4vUGFyYW0uZXM2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xDb250ZW50cyB7XG5cbiAgY29uc3RydWN0b3IoJHdyYXAgPSAkKCdib2R5JykpIHtcblxuICAgIHRoaXMucmVuZGVyZXI7XG4gICAgdGhpcy5jYW1lcmE7XG4gICAgdGhpcy5zY2VuZTtcbiAgICB0aGlzLmxpZ2h0O1xuXG4gICAgdGhpcy5zdGF0ZSA9ICdpbml0aWFsJztcbiAgICB0aGlzLmFkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlTGluZVJvdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmlzQ29udHJvbCA9IGZhbHNlO1xuICAgIHRoaXMuY29udHJvbHM7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5jcmVhdGUoJHdyYXApO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gICAgLy8gbG9vcFxuICAgIHRoaXMubG9vcCA9IG5ldyBMb29wKCk7XG4gICAgLy8gdGltZWxpbmVcbiAgICB0aGlzLnRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIGNyZWF0ZSgkd3JhcCkge1xuXG4gICAgLy8gcmVuZGVyXG4gICAgZ2IuaW4ucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczogdHJ1ZX0pO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggZ2IuaW4uci5XKCksIGdiLmluLnIuSCgpICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwLjApO1xuICAgICR3cmFwLmFwcGVuZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggICk7XG4gICAgJCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpLmNzcyh7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxsZWZ0OiAwLFxuICAgICAgJ3otaW5kZXgnOiAxLFxuICAgIH0pO1xuXG4gICAgLy8gc2NlbmVcbiAgICBnYi5pbi5zY2VuZSA9IG5ldyBnYi5TY2VuZSgpO1xuICAgIHRoaXMuc2NlbmUgPSBnYi5pbi5zY2VuZS5zY2VuZTtcblxuICAgIC8vIGNhbWVyYVxuICAgIGdiLmluLmNhbWVyYSA9IG5ldyBnYi5DYW1lcmEoKTtcbiAgICB0aGlzLmNhbWVyYSA9IGdiLmluLmNhbWVyYS5jYW1lcmE7XG5cbiAgICAvLyBsaWdodFxuICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDMgKTtcbiAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnogPSAzO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI6L+95YqgXG4gICAgdGhpcy5hZGRPYmplY3RzKCk7XG5cbiAgICAvLyB1aei/veWKoCjjgrPjg7Pjg4jjg63jg7zjg6njg7zjgIFwcm9maWxlcuOBquOBqSlcbiAgICAvLyB0aGlzLmFkZFVJKCk7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjga7jg63jg7zjg4lcbiAgICBnYi5pbi5sb2FkTWdyLnNlY3Rpb24wNFByb2R1Y3RTaGFkZXIoKTtcblxuICB9XG5cbiAgYWRkT2JqZWN0cygpIHtcblxuICAgIHRoaXMucGxhbmUgPSBuZXcgUGxhbmUoKTtcblxuICB9XG5cbiAgYWRkVUkoKSB7XG5cbiAgICAvLyBjb250cm9sc1xuXG4gICAgaWYgKHRoaXMuaXNDb250cm9sKSB7XG5cbiAgICAgIGdiLmluLmNvbnRyb2xzID0gdGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5UcmFja2JhbGxDb250cm9scyh0aGlzLmNhbWVyYSk7XG4gICAgICB0aGlzLmNvbnRyb2xzLnpvb21TcGVlZCA9IDAuODtcbiAgICAgIHRoaXMuY29udHJvbHMucm90YXRlU3BlZWQgPSAzO1xuXG4gICAgfTtcblxuICAgIC8vIHByb2ZpbGVy6Kit5a6aXG4gICAgbmV3IGdiLlByb2ZpbGVyKCk7XG4gICAgLy8gcGFyYW1ydGVy6Kq/5pW0XG4gICAgZ2IuaW4ucGFyYW0gPSBuZXcgUGFyYW0oKTtcblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICB2YXIgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHZhciBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHcsIGgpO1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHcgLyBoO1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICB9XG5cbiAgb25TZWN0aW9uMDQoY3VyLHByZXYpIHtcblxuICAgIGlmIChjdXIgPT0gJ3Byb2R1Y3QnKSB7XG5cbiAgICAgIHRoaXMubG9vcC5zdGFydCgpO1xuICAgICAgdGhpcy50aW1lbGluZS50bE1haW4ucGxheSgpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5sb29wLnBhdXNlKCk7XG4gICAgICB0aGlzLnRpbWVsaW5lLnRsTWFpbi5wYXVzZSgpO1xuXG4gICAgfVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCh0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICAgIGdiLmluLmhhc2gub25DaGFuZ2VGdW5jTGlzdC5wdXNoKHRoaXMub25TZWN0aW9uMDQuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdvblNlY3Rpb24wNFByb2R1Y3RJbWcnLCAoKT0+e3RoaXMudGltZWxpbmUuc2V0dXAoKTt9KTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHMuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBHbENvbnRlbnRzTG9vcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xDb250ZW50c0xvb3Age1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc0Fsd2F5cyA9IHRydWU7XG4gICAgdGhpcy5pc1J1blN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy5pc0FkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlID0gJ2luaXRpYWwnO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IGZhbHNlO1xuXG4gICAgdGhpcy5sb29wTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgaWYgKHRoaXMuaXNBbHdheXMpIHRoaXMucnVuQWx3YXlzKCk7XG4gICAgaWYgKHRoaXMuaXNSdW5TdGF0dXMpIHRoaXMucnVuU3RhdHVzKCk7XG4gICAgaWYgKHRoaXMuaXNBZGp1c3RQYXJhbSkgdGhpcy5ydW5BZGp1c3RQYXJhbSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5bi444Gr6KGM44GG5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgcnVuQWx3YXlzKCkge1xuXG4gICAgaWYgKGdiLmluLlNlY3Rpb24wNFByb2R1Y3QuaXNDb250cm9sKSBnYi5pbi5jb250cm9scy51cGRhdGUoKTtcblxuICAgIC8vIGNhbWVyYVxuICAgIGdiLmluLmNhbWVyYS51cGRhdGVDb250cm9sbCgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5ZCE54q25oWL44Gu5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBydW5TdGF0dXMoKSB7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PSAnaW5pdGlhbCcpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzdGFydCcpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMScpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMicpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMycpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YW5kYnknKSB7XG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc29tZXRpbWVzJykge1xuXG4gICAgICBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnbGluZVNoYWRvdycpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NwaGVyZScpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NhdGVsbGl0ZScpIHtcblxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDjg5Hjg6njg6Hjg7zjgr/oqr/mlbTnlKjlh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bkFkanVzdFBhcmFtKCkge1xuXG5cblxuICB9XG5cbiAgZHJhdygpIHtcblxuICAgIGdiLmluLnJlbmRlcmVyLnJlbmRlciggZ2IuaW4uc2NlbmUuc2NlbmUsIGdiLmluLmNhbWVyYS5jYW1lcmEgKTtcbiAgICAvLyBnYi5pbi5wb3N0cHJvY2Vzcy5jb21wb3Nlci5yZW5kZXIoMC4xKTtcblxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIGlmICh0aGlzLmxvb3BTdGFydCkge1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmRyYXcoKTtcblxuICAgIGxvZygnc2VjdGlvbjA0JylcblxuICAgIH1cblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IHRydWU7XG5cbiAgfVxuXG4gIHBhdXNlKCkge1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSBmYWxzZTtcblxuICB9XG5cbiAgYWRkKGZ1bmMpIHtcblxuICAgIHRoaXMubG9vcExpc3QucHVzaChmdW5jKTtcbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGdiLmluLnVwLmFkZCgnc2VjdGlvbjA0UHJvZHVjdCcsdGhpcy5sb29wLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c0xvb3AuZXM2IiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBHbENvbnRlbnRzVGltZWxpbmVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBTb21lVGltZXMgZnJvbSAnLi4vLi4vLi4vLi4vTXlMaWJzL0V2ZW50TWdyL1NvbWV0aW1lc01nci5lczYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbENvbnRlbnRzVGltZWxpbmUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy50bE1haW4gPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAvLyB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgr/jgqTjg6Djg6njgqTjg7PjgpLmraLjgoHjgabjgYrjgY9cbiAgICB0aGlzLnRsTWFpbi5wYXVzZSgpO1xuICAgIFxuICAgIHRoaXMuYmVnaW5uaW5nKCk7XG4gICAgLy8gdGhpcy5zdGVwMDEoKTtcbiAgICAvLyB0aGlzLnN0ZXAwMigpO1xuICAgIC8vIHRoaXMuc3RlcDAzKCk7XG4gICAgLy8gdGhpcy5zdGFuZEJ5KCk7XG4gICAgdGhpcy5zb21ldGltZXMoKTsgICAgXG5cbiAgfVxuXG4gIGJlZ2lubmluZygpIHtcblxuICAgIHRoaXMudGxNYWluXG4gICAgICAvLyB6b29tIGluXG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnN0cmVuZ3RoLCAxLjMsIHtcbiAgICAgICAgdmFsdWU6IDUwMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgIG9uU3RhcnQ6ICgpPT4ge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5zdHJlbmd0aCwge3ZhbHVlOiA1MDB9KTtcblxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBjYW1lcmHnp7vli5VcbiAgICAgIC50byhnYi5pbi5jYW1lcmEuY2FtZXJhLnBvc2l0aW9uLCAxLjUsIHtcbiAgICAgICAgejogMjAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgfSwnLT0xLjMnKVxuXG4gICAgICAvLyBwbGFuZeenu+WLlVxuICAgICAgLnRvKGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUucG9zaXRpb24sIDEuNSwge1xuICAgICAgICB4OiAtMTAwLFxuICAgICAgICB5OiAyMDAsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0XG4gICAgICB9LCctPTEuNScpXG5cbiAgICAgIC8vIHpvb20gb3V0XG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnN0cmVuZ3RoLCAxLCB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJblxuICAgICAgfSwnLT0wLjQnKVxuXG4gICAgICAvLyBwbGFuZTAx44GMb3BhY2l0eeOBp+a2iOOBiOOCi1xuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy5vcGFjaXR5LCAxLCB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZUluT3V0XG4gICAgICB9LCctPTAuNycpXG5cbiAgICAgIC8vIHBsYW5lMDLjga5ibHVyIG91dFxuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5zdHJlbmd0aCwgMSwge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXRcbiAgICAgIH0sJy09MS4wJylcblxuICAgICAgLy8gcGxhbmUwMuOBjOWHuuOBpuadpeOCi1xuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5vcGFjaXR5LCAxLCB7XG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgfSwnLT0xLjAnKVxuXG4gICAgICAudG8oZ2IuaW4uY2FtZXJhLmNhbWVyYS5wb3NpdGlvbiwgMS41LCB7XG4gICAgICAgIHo6IDQwMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKT0+IHtcblxuICAgICAgICAgIC8vIG1hdGVyaWFs44Gu5aSJ5pu0XG5cbiAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMuZnJvbS52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbMV07XG4gICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1syXTtcblxuICAgICAgICAgIGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUwMi5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS5mcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnBsYW5lMDIuc2NhbGUueCA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUwMi5zY2FsZS55ID0gMTIwMC4wO1xuXG5cbiAgICAgICAgfVxuICAgICAgfSwnLT0xLjAnKVxuXG5cblxuICB9XG5cbiAgc3RlcDAxKCkge1xuXG5cbiAgfVxuXG4gIHN0ZXAwMigpIHtcblxuXG5cbiAgfVxuXG4gIHN0ZXAwMygpIHtcblxuXG5cbiAgfVxuXG4gIHN0YW5kQnkoKSB7XG5cblxuICB9XG5cbiAgLy8g5pmC44CFXG4gIHNvbWV0aW1lcygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMudGxNYWluXG4gICAgICAuYWRkKGZ1bmN0aW9uKCl7XG5cblxuICAgICAgICB2YXIgcyA9IG5ldyBTb21lVGltZXMoKTtcblxuICAgICAgICBzLmFkZChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgVHdlZW5NYXgudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnByb2dyZXNzLCAxLjMsIHtcbiAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAgICAgICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5mcm9tLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1szXTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIFxuICAgICAgICAgIFxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1s0XTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLmZyb20udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzVdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1sxXTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLmZyb20udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzJdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSwgMi4wLCAyLjApO1xuXG4gICAgICAgIHMuc3RhcnQoKTtcblxuICAgICAgfSwnKz0wLjAnKVxuICAgIFxuXG4gIH1cblxuICBvblJlc2l6c2UoKSB7XG5cbiAgfVxuXG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQodGhpcy5vblJlc2l6c2UuYmluZCh0aGlzKSk7XG5cbiAgICAkKHdpbmRvdykub24oJ2NsaWNrJywoKT0+e1xuXG4gICAgICAvLyB0aGlzLnN0YXJ0KCk7XG5cbiAgICB9KTtcblxuICB9XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c1RpbWVsaW5lLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU29tZVRpbWVzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb21lVGltZXMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5Tb21lVGltZXM7XG4gICAgdGhpcy5UaW1lciA9IG51bGw7XG4gICAgdGhpcy5jYkxpc3QgPSBbXTtcbiAgICB0aGlzLmxlbiA9IDA7XG4gICAgdGhpcy5vcmRlciA9IDA7XG5cbiAgICB0aGlzLm1pbiA9IFtdO1xuICAgIHRoaXMubWF4ID0gW107XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIHN0YXJ0KG1pbj0wLCBtYXg9MCkge1xuXG4gICAgdGhpcy5sYXRlciA9IGdiLmluLnUucmFuZG9tKG1pbixtYXgpICogMTAwMDtcbiAgICB0aGlzLlRpbWVyID0gc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKHRoaXMpLHRoaXMubGF0ZXIpO1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgICB0aGlzLm9yZGVyID0gdGhpcy5vcmRlciAlIHRoaXMubGVuO1xuXG4gICAgdGhpcy5sYXRlciA9IGdiLmluLnUucmFuZG9tKHRoaXMubWluW3RoaXMub3JkZXJdLHRoaXMubWF4W3RoaXMub3JkZXJdKSAqIDEwMDA7XG5cbiAgICB0aGlzLmNiTGlzdFt0aGlzLm9yZGVyXSgpO1xuXG4gICAgdGhpcy5vcmRlcisrO1xuICAgIHRoaXMuVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMucnVuLmJpbmQodGhpcyksdGhpcy5sYXRlcik7XG5cbiAgfVxuXG4gIHN0b3AoKSB7XG5cbiAgICBsb2codGhpcy5UaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuVGltZXIpO1xuXG4gIH1cblxuICBhZGQoZnVuYyxtaW49OCxtYXg9MTIpIHtcblxuICAgIHRoaXMubWluLnB1c2gobWluKTtcbiAgICB0aGlzLm1heC5wdXNoKG1heCk7XG5cbiAgICB0aGlzLmNiTGlzdC5wdXNoKGZ1bmMpO1xuICAgIHRoaXMubGVuID0gdGhpcy5jYkxpc3QubGVuZ3RoO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvU29tZXRpbWVzTWdyLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGxhbmVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBudWxsO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBudWxsO1xuXG4gICAgdGhpcy52aWRlbyA9IG51bGw7XG4gICAgdGhpcy5wbGFuZSA9IG51bGw7XG5cbiAgICB0aGlzLmRlZldXID0gMTkyMDtcbiAgICB0aGlzLmRlZkhIID0gMTA4MDtcbiAgICB0aGlzLmRlZlcgPSAzMDU7XG4gICAgdGhpcy5yYXRlID0gMDtcbiAgICB0aGlzLnJhdGVXID0gMDtcblxuICAgIHRoaXMubGIgPSBudWxsOyAvL2xheW91dCBiYWNrZ3JvdW5kXG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgY3JlYXRlKGNiKSB7XG5cbiAgICB2YXIgdGV4dHVyZXMgPSB0aGlzLnRleHR1cmVzICA9IGdiLmluLmxvYWRNZ3IudGV4dHVyZXM7XG5cbiAgICB2YXIgdyA9IHRleHR1cmVzWzBdLmltYWdlLndpZHRoIC8gdGV4dHVyZXNbMF0uaW1hZ2Uud2lkdGg7XG4gICAgdmFyIGggPSB0ZXh0dXJlc1swXS5pbWFnZS5oZWlnaHQgLyB0ZXh0dXJlc1swXS5pbWFnZS53aWR0aDtcblxuICAgIC8vIHBsYW5lMDFcblxuICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHcsIGgsIDEsIDEpO1xuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3JtczogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS52cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS5mcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHRoaXMucGxhbmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIHRoaXMucGxhbmUuc2NhbGUueCA9IHRoaXMucGxhbmUuc2NhbGUueSA9IDIwMDAuMDtcblxuICAgIC8vIHBsYW5lMDJcblxuICAgIHZhciB3ID0gdGV4dHVyZXNbMV0uaW1hZ2Uud2lkdGggLyB0ZXh0dXJlc1sxXS5pbWFnZS53aWR0aDtcbiAgICB2YXIgaCA9IHRleHR1cmVzWzFdLmltYWdlLmhlaWdodCAvIHRleHR1cmVzWzFdLmltYWdlLndpZHRoO1xuXG4gICAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodywgaCwgMSwgMSk7XG4gICAgdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnZzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLmZzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgdGhpcy5wbGFuZTAyID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICB0aGlzLnBsYW5lMDIuc2NhbGUueCA9IHRoaXMucGxhbmUwMi5zY2FsZS55ID0gNjAwLjA7XG5cbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMub3BhY2l0eS52YWx1ZSA9IDE7XG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSAwO1xuXG4gICAgdGhpcy5wbGFuZTAyLnBvc2l0aW9uLnogPSAtMTtcblxuICAgIGdiLmluLnNjZW5lLnNjZW5lLmFkZCggdGhpcy5wbGFuZSApO1xuICAgIGdiLmluLnNjZW5lLnNjZW5lLmFkZCggdGhpcy5wbGFuZTAyICk7XG5cbiAgICAvLyB0aGlzLm9uUmVzaXplKCk7XG4gICAgLy8gdGhpcy5zZXRFdmVudHMoKTtcblxuICAgIC8vIOODhuOCr+OCueODgeODo+OCknVuaWZvcm3lpInmlbDjgavov73liqBcbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMudGV4dHVyZS52YWx1ZSA9IHRleHR1cmVzWzBdO1xuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy50ZXh0dXJlMDEudmFsdWUgPSB0ZXh0dXJlc1sxXTtcblxuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy50ZXh0dXJlLnZhbHVlID0gdGV4dHVyZXNbMV07XG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLnRleHR1cmUwMS52YWx1ZSA9IHRleHR1cmVzWzFdO1xuXG4gICAgY2IoKTtcblxuICB9XG5cbiAgc2V0VmlkZW9TaXplKCkge1xuXG4gICAgLy8gdmlkZW/jga7jgrvjg4Pjg4jjgrXjgqTjgrogICAgICAgICAgXG4gICAgLy8gdGhpcy5sYiA9IG5ldyBnYi5MYXlvdXRCYWNrZ3JvdW5kKCQoJ2JvZHknKSwkKHRoaXMudmlkZW8udmlkZW8pKTtcbiAgICAvLyB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXRUcmFuc3BhcmVudCh2YWwpIHtcblxuICAgIC8vIHRoaXMucGxhbmUubWF0ZXJpYWwub3BhY2l0eSA9IHZhbDtcblxuICB9XG5cbiAgdHdlZW5UcmFuc3BhcmVudCh0aW1lLHZhbCkge1xuXG4gICAgLy8gdmFyIHQgPSB0aW1lIHx8IDEuMDtcbiAgICAvLyB2YXIgdiA9IHZhbC50YXJnZXQgfHwgMS4wO1xuICAgIC8vIHZhciBlID0gdmFsLmVhc2UgfHwgUG93ZXIyLmVhc2VPdXQ7XG5cbiAgICAvLyBUd2Vlbk1heC50byh0aGlzLnBsYW5lLm1hdGVyaWFsLCB0LCB7XG4gICAgLy8gICBvcGFjaXR5OiB2LFxuICAgIC8vICAgZWFzZSA6IGUsXG4gICAgLy8gfSk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuXG5cblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICAvLyB2YXIgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIC8vIHZhciBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgLy8gdmFyIHJhdGVXID0gd2luZG93LmlubmVySGVpZ2h0IC8gd2luZG93LmlubmVyV2lkdGg7XG4gICAgLy8gdmFyIHIgPSB3L2g7XG5cbiAgICAvLyBpZiAocmF0ZVcgPCB0aGlzLnJhdGUpIHtcblxuICAgIC8vICAgdGhpcy5wbGFuZS5zY2FsZS5zZXQociowLjU4LHIqMC41OCxyKjAuNTgpXG5cbiAgICAvLyB9IGVsc2Uge1xuXG4gICAgLy8gICAvLyBsb2coMixzY2FsZVkpO1xuXG4gICAgLy8gICB0aGlzLnBsYW5lLnNjYWxlLnNldCgxLDEsMSk7XG5cbiAgICAvLyB9XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIC8vIGdiLmluLnJtLnRvdGFsICs9IDE7IC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuICAgICQod2luZG93KS5vbignb25TZWN0aW9uMDRQcm9kdWN0SW1nJywgdGhpcy5jcmVhdGUuYmluZCh0aGlzLCgpPT57XG4gICAgICAvL2diLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgIH0pKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L19kZXRhaWxzL1BsYW5lLmVzNiIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGFyYW1cbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFtIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuZ3VpO1xuICAgIHRoaXMuanNvbiA9IHt9O1xuICAgIC8vIHRoaXMuYXBwTmFtZSA9IFwicGx1c01WXCI7XG5cbiAgICB2YXIgaXNGbGFnID0gdHJ1ZTtcblxuICAgIHRoaXMuY2xvY2sgPSB7XG4gICAgICBwcm9ncmVzczogMC41LFxuICAgIH1cblxuICAgIHRoaXMuem9vbWJsdXIgPSB7XG4gICAgICBzdHJlbmd0aDogNDYuMCxcbiAgICAgIHNpemU6IDg5LjAsXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2l0aW9uID0ge1xuICAgICAgcHJvZ3Jlc3M6IDAuMCxcbiAgICAgIHNpemU6IDAuMDQsXG4gICAgICB6b29tOiAzMCxcbiAgICAgIGNvbG9yU2VwYXJhdGlvbjogMC4zLFxuICAgICAgc3RyZW5ndGg6IDAuNixcbiAgICAgIHR3ZWVuOiAoKT0+e1xuXG4gICAgICAgIHZhciB2YWw7XG4gICAgICAgIGlmIChpc0ZsYWcpIHZhbCA9IDEuMDtcbiAgICAgICAgZWxzZSB2YWwgPSAwLjBcblxuICAgICAgICBpc0ZsYWcgPSAhaXNGbGFnO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLnBsYW5lMDIuc2hhZGVyLnVuaWZvcm1zLnByb2dyZXNzLCAyLjUsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5zZXR1cERhdGEoKTtcbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuXG4gIHNldHVwRGF0YSgpIHtcblxuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIGlmIChnYi5pbi5jb25mLlBBUkFNKSB7XG5cbiAgICB0aGlzLmd1aSA9IG5ldyBkYXQuR1VJKCk7XG4gICAgLy8gdGhpcy5ndWkgPSBuZXcgZGF0LkdVSSh7bG9hZDogdGhpcy5qc29ufSk7XG4gICAgdGhpcy5ndWkucmVtZW1iZXIodGhpcyk7XG4gICAgJChcIi5kZ1wiKS5jc3Moe3pJbmRleDo5OTk5OX0pO1xuXG4gICAgdmFyIGYxID0gdGhpcy5ndWkuYWRkRm9sZGVyKCd6b29tYmx1cicpO1xuICAgIGYxLmFkZCh0aGlzLnpvb21ibHVyLCAnc3RyZW5ndGgnLCAwLjAsIDIuMCkuc3RlcCgwLjAxKS5saXN0ZW4oKS5vbkNoYW5nZShmdW5jdGlvbih2YWwpe1xuXG4gICAgICBnYi5pbi5wbGFuZS5zaGFkZXJzWzJdLnVuaWZvcm1zLnN0cmVuZ3RoLnZhbHVlID0gdmFsO1xuICAgICAgbG9nKHZhbCk7XG5cbiAgICB9KTtcbiAgICBmMS5hZGQodGhpcy56b29tYmx1ciwgJ3NpemUnLCAwLjAsIDEwMC4wKS5zdGVwKDAuMSkubGlzdGVuKCkub25DaGFuZ2UoZnVuY3Rpb24odmFsKXtcblxuICAgICAgZ2IuaW4ucGxhbmUuc2hhZGVyLnVuaWZvcm1zLm5GcmFnLnZhbHVlID0gMSAvIHZhbDtcblxuICAgIH0pO1xuICAgIGYxLm9wZW4oKTtcblxuICAgIC8vIHRoaXMuZ3VpLmNsb3NlKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9QYXJhbS5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFByb2ZpbGVyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLlN0YXRzO1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIGlmIChnYi5pbi5jb25mLlNUQVRTKSB7XG5cbiAgICAgIHRoaXMuU3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICAgIHRoaXMuU3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIHRoaXMuU3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ICAgICA9IFwiMHB4XCI7XG4gICAgICB0aGlzLlN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wICAgPSBcIjBweFwiO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLlN0YXRzLmRvbUVsZW1lbnQpO1xuICAgIFxuXG4gICAgLy8gfTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgaWYodGhpcy5TdGF0cykge1xuICAgICAgdGhpcy5TdGF0cy51cGRhdGUoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnVwLmFkZCgncHJvZmlsZXInLHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9Qcm9maWxlci5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIExheW91dFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYWxlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuU1BCYXNlVyA9IDM3NTtcbiAgICB0aGlzLlBDQmFzZVcgPSAxMzAwO1xuXG4gICAgdGhpcy5yYXRlID0gMTtcbiAgICB0aGlzLlcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIHRoaXMuJHRhcmdldExpc3QgPSBbXG4gICAgICB7XG4gICAgICAgICckdGFyZ2V0JzogJCgnI3NpZGVMLCAjc2lkZVIsICNuYXYnKSxcbiAgICAgICAgJ3NjYWxlJzogJ3NwT25seScgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAnJHRhcmdldCc6ICQoJy5zZWN0aW9uMDNfZGV0YWlsJyksXG4gICAgICAvLyAgICdzY2FsZSc6ICdib3RoJyAvLyBzcE9ubHkgcGNPbmx5IGJvdGhcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgICckdGFyZ2V0JzogJCgnLnNlY3Rpb24wNCcpLFxuICAgICAgLy8gICAnc2NhbGUnOiAnYm90aCcgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICAvLyB9LFxuICAgIF1cblxuICAgIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgXG4gIH1cblxuICBydW4oKSB7XG5cbiAgICB0aGlzLlcgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB0aGlzLmlXID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLnNjYWxlKCk7XG4gICAgdGhpcy53cmFwKCk7XG5cbiAgfVxuXG4gIC8vIOaLoeWkp1xuICBzY2FsZSgpIHtcblxuICAgIC8vIGJw44Gu5aC05ZCI44Guc2NhbGVcbiAgICBpZiAodGhpcy5pVyA8PSBnYi5pbi5jb25mLmJwKSB7XG5cbiAgICAgIC8vIHdpZHRo44GL44KJcmF0ZeOCkuioiOeul1xuICAgICAgLy8gdGhpcy5yYXRlID0gZ2IuaW4udS5mbG9hdEZvcm1hdCh0aGlzLlcgLyB0aGlzLlNQQmFzZVcgLCAyKTtcbiAgICAgIGlmICh0aGlzLlcgPiAzNzUpIHRoaXMuVyA9IDM3NTtcbiAgICAgIGlmICh0aGlzLlcgPCAzMjApIHRoaXMuVyA9IDMyMDtcbiAgICAgIGxvZyh0aGlzLlcpO1xuICAgICAgdGhpcy5yYXRlID0gdGhpcy5XIC8gdGhpcy5TUEJhc2VXO1xuXG4gICAgICAvLyBzY2FsZeOBmeOCi+ODquOCueODiOOCkuODq+ODvOODl1xuICAgICAgJC5lYWNoKHRoaXMuJHRhcmdldExpc3QsIChpbmRleCwgdmFsKT0+e1xuXG4gICAgICAgIGlmICh2YWwuc2NhbGUgPT0gJ2JvdGgnIHx8IHZhbC5zY2FsZSA9PSAnc3BPbmx5Jykge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KHZhbC4kdGFyZ2V0LCB7XG4gICAgICAgICAgICBzY2FsZTogdGhpcy5yYXRlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyB3aWR0aOOBi+OCiXJhdGXjgpLoqIjnrpdcbiAgICAgIC8vIHRoaXMucmF0ZSA9IGdiLmluLnUuZmxvYXRGb3JtYXQodGhpcy5XIC8gdGhpcy5QQ0Jhc2VXICwgMik7XG4gICAgICBpZiAodGhpcy5XID4gMTMwMCkgdGhpcy5XID0gMTMwMDtcbiAgICAgIHRoaXMucmF0ZSA9IHRoaXMuVyAvIHRoaXMuUENCYXNlVztcblxuICAgICAgLy8gc2NhbGXjgZnjgovjg6rjgrnjg4jjgpLjg6vjg7zjg5dcbiAgICAgICQuZWFjaCh0aGlzLiR0YXJnZXRMaXN0LCAoaW5kZXgsIHZhbCk9PntcblxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdib3RoJyB8fCB2YWwuc2NhbGUgPT0gJ3BjT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgc2NhbGU6IHRoaXMucmF0ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOOBk+OBoeOCieOBruWgtOWQiOOBr+OAgXNjYWxl44KS5oi744GZXG4gICAgICAgIGlmICh2YWwuc2NhbGUgPT0gJ3NwT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICB9KTsgIFxuXG4gICAgfVxuXG4gIH1cblxuICAvLyBzY2FsZeOBl+OBn+OCieOAgeWFg+OBruWkp+OBjeOBleWIhuS9meeZveOBjOOBp+OBjeOCi+OBruOBp292ZXJmbG93IGhpZGRlbuOBp+a2iOOBmVxuICB3cmFwKCkge1xuXG5cblxuICB9XG5cbiAgcmVzZXQoKSB7XG5cbiAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgfSk7XG4gICAgICBcbiAgICB9KTtcblxuXG4gICAgLy8g44Kk44OZ44Oz44OI6Kej6ZmkXG4gICAgZ2IuaW4uci5yZW1vdmUoJ3NjYWxlVG9wJyk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgdGhpcy5ydW4oKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQoJ3NjYWxlVG9wJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TY2FsZVRvcC5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEhvdmVyRWZmZWN0U05TU1BGb290ZXJcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdmVyRWZmZWN0U05TU1BGb290ZXIge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwLCAkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLiR3cmFwID0gJHdyYXA7XG4gICAgdGhpcy4kaW5uZXIgPSB0aGlzLiR3cmFwLmZpbmQoJy5pbm5lcicpO1xuICAgIHRoaXMuJHRhcmdldCA9IHRoaXMuJHdyYXAuZmluZCgnLnNucy5zcCAuaWNvblNoYXJlJyk7XG4gICAgdGhpcy4kYmFyID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5iYXInKTtcbiAgICB0aGlzLiRsaXN0ID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5saXN0Jyk7XG4gICAgdGhpcy4kaXRlbSA9IHRoaXMuJHdyYXAuZmluZCgnLnNucy5zcCAubGlzdCAuaXRlbScpO1xuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIHJlYWR5KCkge1xuXG4gICAgLy8gb3hcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kd3JhcCwge3dpZHRoOiAwfSlcblxuICAgIC8vIGJhclxuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRiYXIsIHt3aWR0aDogMH0pXG5cbiAgICAvLyBzbnNcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kaXRlbSwge3g6IC00MCwgb3BhY2l0eTogMH0pXG5cbiAgICB0aGlzLiRiYXIuc2hvdygpO1xuICAgIHRoaXMuJGxpc3Quc2hvdygpO1xuXG4gIH1cblxuICB0b2dnbGUoKSB7XG5cbiAgICBpZiAodGhpcy4kdGFyZ2V0Lmhhc0NsYXNzKCdvbicpKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgIHRoaXMub3BlbigpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuJHRhcmdldC50b2dnbGVDbGFzcygnb24nKTtcblxuICB9XG5cbiAgb3BlbiAodGhhdCkge1xuXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJveCk7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJhcik7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGl0ZW0pO1xuXG4gICAgdGhpcy5yZWFkeSgpO1xuXG4gICAgLy8gYmFy44GM5Ly444Gz44KLXG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuXG4gICAgdGxcbiAgICAgIC8vIGJveOOBjOS8uOOBs+OCi1xuICAgICAgLnRvKHRoaXMuJHdyYXAsIDAuNCwge1xuICAgICAgICB3aWR0aDogMzMwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dFxuICAgICAgfSlcbiAgICAgIC50byh0aGlzLiRiYXIsIDAuMywge1xuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgfSwnLT0wLjInKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMCksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjInKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMSksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjI1JylcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDIpLCAwLjMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgzKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgIFxuICB9XG5cbiAgY2xvc2UgKHRoYXQpIHtcblxuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRib3gpO1xuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRiYXIpO1xuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRpdGVtKTtcblxuICAgIC8vIGJhclxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGxcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDMpLCAwLjMsIHtcbiAgICAgICAgeDogLTQwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAgIH0pXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgyKSwgMC4zLCB7XG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMSksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMCksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgdGhpcy4kbGlzdC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kYmFyLCAwLjIsIHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgdGhpcy4kYmFyLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwnLT0wLjMnKVxuICAgICAgLnRvKHRoaXMuJHdyYXAsIDAuMywge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICB9LCctPTAuMycpXG5cbiAgfVxuXG4gIHJlc2V0KCkge1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuJHRhcmdldC5vZmYoJ2NsaWNrJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5lczYiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIERpc3BsYXlcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYkdMaW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICBcdHRoaXMuZ2wgPSBudWxsO1xuXG4gIFx0dGhpcy53ZWJnbEluaXQgPSB0aGlzLl93ZWJnbEluaXQuYmluZCh0aGlzKTtcblxuICBcdHRoaXMuY3JlYXRlX3NoYWRlciA9IHRoaXMuX2NyZWF0ZV9zaGFkZXIuYmluZCh0aGlzKTtcbiAgXHR0aGlzLmNyZWF0ZV9wcm9ncmFtID0gdGhpcy5fY3JlYXRlX3Byb2dyYW0uYmluZCh0aGlzKTtcbiAgXHR0aGlzLmNyZWF0ZV92Ym8gPSB0aGlzLl9jcmVhdGVfdmJvLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uSW1tZWRpYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgb25JbW1lZGlhdGUoKSB7XG5cbiAgICAvLyDjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICBnYi5pbi51cC5sb29wKCk7XG5cblx0XHR0aGlzLndlYmdsSW5pdCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG5cdFx0d2luZG93LmNvbnNvbGUubG9nKCdvbkxvYWQnKTtcblxuICB9XG5cbiAgX3dlYmdsSW5pdCgpIHtcblxuXHRcdC8vIGNhbnZhc+OCqOODrOODoeODs+ODiOOCkuWPluW+l1xuXHRcdGxldCBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXHRcdGMud2lkdGggPSAzMDA7XG5cdFx0Yy5oZWlnaHQgPSAzMDA7XG5cblx0XHQvLyB3ZWJnbOOCs+ODs+ODhuOCreOCueODiOOCkuWPluW+l1xuXHRcdHRoaXMuZ2wgPSBjLmdldENvbnRleHQoJ3dlYmdsJykgfHwgYy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKTtcblxuXHRcdC8vIGNhbnZhc+OCkuWIneacn+WMluOBmeOCi+iJsuOCkuioreWumuOBmeOCi1xuXHRcdHRoaXMuZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xuXG5cdFx0Ly8gY2FudmFz44KS5Yid5pyf5YyW44GZ44KL6Zqb44Gu5rex5bqm44KS6Kit5a6a44GZ44KLXG5cdFx0dGhpcy5nbC5jbGVhckRlcHRoKDEuMCk7XG5cblx0XHQvLyBjYW52YXPjgpLliJ3mnJ/ljJZcblx0XHR0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG5cblx0XHQvLyDpoILngrnjgrfjgqfjg7zjg4Djgajjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7nlJ/miJBcblx0XHRsZXQgdl9zaGFkZXIgPSB0aGlzLmNyZWF0ZV9zaGFkZXIoJ3ZzJyk7XG5cdFx0bGV0IGZfc2hhZGVyID0gdGhpcy5jcmVhdGVfc2hhZGVyKCdmcycpO1xuXG5cdFx0Ly8g44OX44Ot44Kw44Op44Og44Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQ44Go44Oq44Oz44KvXG5cdFx0bGV0IHByZyA9IHRoaXMuY3JlYXRlX3Byb2dyYW0odl9zaGFkZXIsIGZfc2hhZGVyKTtcblxuXHRcdC8vIGF0dHJpYnV0ZUxvY2F0aW9u44Gu5Y+W5b6XXG5cdFx0bGV0IGF0dExvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbihwcmcsICdwb3NpdGlvbicpO1xuXG5cdFx0Ly8gYXR0cmlidXRl44Gu6KaB57Sg5pWwKOOBk+OBruWgtOWQiOOBryB4eXog44GuM+imgee0oClcblx0XHRsZXQgYXR0U3RyaWRlID0gMztcblxuXHRcdC8vIOODouODh+ODqyjpoILngrkp44OH44O844K/XG5cdFx0bGV0IHZlcnRleF9wb3NpdGlvbiA9IFtcblx0XHRcdDAuMCwgMS4wLCAwLjAsXG5cdFx0XHQxLjAsIDAuMCwgMC4wLFxuXHRcdFx0LTEuMCwgMC4wLCAwLjBcblx0XHRdO1xuXG5cdFx0Ly8gVkJP44Gu55Sf5oiQXG5cdFx0dmFyIHZibyA9IHRoaXMuY3JlYXRlX3Zibyh2ZXJ0ZXhfcG9zaXRpb24pO1xuXG5cdFx0Ly8gVkJP44KS44OQ44Kk44Oz44OJXG5cdFx0dGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB2Ym8pO1xuXG5cdFx0Ly8gYXR0cmlidXRl5bGe5oCn44KS5pyJ5Yq544Gr44GZ44KLXG5cdFx0dGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRMb2NhdGlvbik7XG5cblx0XHQvLyBhdHRyaWJ1dGXlsZ7mgKfjgpLnmbvpjLJcblx0XHR0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0TG9jYXRpb24sIGF0dFN0cmlkZSwgdGhpcy5nbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG5cdFx0Ly8gbWluTWF0cml4LmpzIOOCkueUqOOBhOOBn+ihjOWIl+mWoumAo+WHpueQhlxuXHRcdC8vIG1hdElW44Kq44OW44K444Kn44Kv44OI44KS55Sf5oiQXG5cdFx0dmFyIG0gPSBuZXcgbWF0SVYoKTtcblxuXHRcdC8vIOWQhOeoruihjOWIl+OBrueUn+aIkOOBqOWIneacn+WMllxuXHRcdHZhciBtTWF0cml4ID0gbS5pZGVudGl0eShtLmNyZWF0ZSgpKTtcblx0XHR2YXIgdk1hdHJpeCA9IG0uaWRlbnRpdHkobS5jcmVhdGUoKSk7XG5cdFx0dmFyIHBNYXRyaXggPSBtLmlkZW50aXR5KG0uY3JlYXRlKCkpO1xuXHRcdHZhciBtdnBNYXRyaXggPSBtLmlkZW50aXR5KG0uY3JlYXRlKCkpO1xuXG5cdFx0Ly8g44OT44Ol44O85bqn5qiZ5aSJ5o+b6KGM5YiXXG5cdFx0bS5sb29rQXQoWzAuMCwgMS4wLCAzLjBdLCBbMCwgMCwgMF0sIFswLCAxLCAwXSwgdk1hdHJpeCk7XG5cblx0XHQvLyDjg5fjg63jgrjjgqfjgq/jgrfjg6fjg7PluqfmqJnlpInmj5vooYzliJdcblx0XHRtLnBlcnNwZWN0aXZlKDkwLCBjLndpZHRoIC8gYy5oZWlnaHQsIDAuMSwgMTAwLCBwTWF0cml4KTtcblxuXHRcdC8vIOWQhOihjOWIl+OCkuaOm+OBkeWQiOOCj+OBm+W6p+aomeWkieaPm+ihjOWIl+OCkuWujOaIkOOBleOBm+OCi1xuXHRcdG0ubXVsdGlwbHkocE1hdHJpeCwgdk1hdHJpeCwgbXZwTWF0cml4KTtcblx0XHRtLm11bHRpcGx5KG12cE1hdHJpeCwgbU1hdHJpeCwgbXZwTWF0cml4KTtcblxuXHRcdC8vIHVuaWZvcm1Mb2NhdGlvbuOBruWPluW+l1xuXHRcdHZhciB1bmlMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgJ212cE1hdHJpeCcpO1xuXG5cdFx0Ly8gdW5pZm9ybUxvY2F0aW9u44G45bqn5qiZ5aSJ5o+b6KGM5YiX44KS55m76YyyXG5cdFx0dGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHVuaUxvY2F0aW9uLCBmYWxzZSwgbXZwTWF0cml4KTtcblxuXHRcdC8vIOODouODh+ODq+OBruaPj+eUu1xuXHRcdHRoaXMuZ2wuZHJhd0FycmF5cyh0aGlzLmdsLlRSSUFOR0xFUywgMCwgMyk7XG5cblx0XHQvLyDjgrPjg7Pjg4bjgq3jgrnjg4jjga7lho3mj4/nlLtcblx0XHR0aGlzLmdsLmZsdXNoKCk7XG5cblxuICB9XG5cblx0X2NyZWF0ZV9zaGFkZXIoaWQpe1xuXHRcdC8vIOOCt+OCp+ODvOODgOOCkuagvOe0jeOBmeOCi+WkieaVsFxuXHRcdHZhciBzaGFkZXI7XG5cblx0XHQvLyBIVE1M44GL44KJc2NyaXB044K/44Kw44G444Gu5Y+C54Wn44KS5Y+W5b6XXG5cdFx0dmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cblx0XHQvLyBzY3JpcHTjgr/jgrDjgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/mipzjgZHjgotcblx0XHRpZighc2NyaXB0RWxlbWVudCl7cmV0dXJuO31cblxuXHRcdC8vIHNjcmlwdOOCv+OCsOOBrnR5cGXlsZ7mgKfjgpLjg4Hjgqfjg4Pjgq9cblx0XHRzd2l0Y2goc2NyaXB0RWxlbWVudC50eXBlKXtcblxuXHRcdFx0Ly8g6aCC54K544K344Kn44O844OA44Gu5aC05ZCIXG5cdFx0XHRjYXNlICd4LXNoYWRlci94LXZlcnRleCc6XG5cdFx0XHRcdHNoYWRlciA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHRoaXMuZ2wuVkVSVEVYX1NIQURFUik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHQvLyDjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7loLTlkIhcblx0XHRcdGNhc2UgJ3gtc2hhZGVyL3gtZnJhZ21lbnQnOlxuXHRcdFx0XHRzaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0aGlzLmdsLkZSQUdNRU5UX1NIQURFUik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdCA6XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyDnlJ/miJDjgZXjgozjgZ/jgrfjgqfjg7zjg4Djgavjgr3jg7zjgrnjgpLlibLjgorlvZPjgabjgotcblx0XHR0aGlzLmdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNjcmlwdEVsZW1lbnQudGV4dCk7XG5cblx0XHQvLyDjgrfjgqfjg7zjg4DjgpLjgrPjg7Pjg5HjgqTjg6vjgZnjgotcblx0XHR0aGlzLmdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuXHRcdC8vIOOCt+OCp+ODvOODgOOBjOato+OBl+OBj+OCs+ODs+ODkeOCpOODq+OBleOCjOOBn+OBi+ODgeOCp+ODg+OCr1xuXHRcdGlmKHRoaXMuZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgdGhpcy5nbC5DT01QSUxFX1NUQVRVUykpe1xuXG5cdFx0XHQvLyDmiJDlip/jgZfjgabjgYTjgZ/jgonjgrfjgqfjg7zjg4DjgpLov5TjgZfjgabntYLkuoZcblx0XHRcdHJldHVybiBzaGFkZXI7XG5cdFx0fWVsc2V7XG5cblx0XHRcdC8vIOWkseaVl+OBl+OBpuOBhOOBn+OCieOCqOODqeODvOODreOCsOOCkuOCouODqeODvOODiOOBmeOCi1xuXHRcdFx0YWxlcnQodGhpcy5nbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xuXHRcdH1cblx0fVxuXG5cdF9jcmVhdGVfcHJvZ3JhbSh2cywgZnMpe1xuXHRcdC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkFxuXHRcdHZhciBwcm9ncmFtID0gdGhpcy5nbC5jcmVhdGVQcm9ncmFtKCk7XG5cblx0XHQvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgavjgrfjgqfjg7zjg4DjgpLlibLjgorlvZPjgabjgotcblx0XHR0aGlzLmdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2cyk7XG5cdFx0dGhpcy5nbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnMpO1xuXG5cdFx0Ly8g44K344Kn44O844OA44KS44Oq44Oz44KvXG5cdFx0dGhpcy5nbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuXHRcdC8vIOOCt+OCp+ODvOODgOOBruODquODs+OCr+OBjOato+OBl+OBj+ihjOOBquOCj+OCjOOBn+OBi+ODgeOCp+ODg+OCr1xuXHRcdGlmKHRoaXMuZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCB0aGlzLmdsLkxJTktfU1RBVFVTKSl7XG5cblx0XHRcdC8vIOaIkOWKn+OBl+OBpuOBhOOBn+OCieODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOCkuacieWKueOBq+OBmeOCi1xuXHRcdFx0dGhpcy5nbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG5cdFx0XHQvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TjgZfjgabntYLkuoZcblx0XHRcdHJldHVybiBwcm9ncmFtO1xuXHRcdH1lbHNle1xuXG5cdFx0XHQvLyDlpLHmlZfjgZfjgabjgYTjgZ/jgonjgqjjg6njg7zjg63jgrDjgpLjgqLjg6njg7zjg4jjgZnjgotcblx0XHRcdGFsZXJ0KHRoaXMuZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFZCT+OCkueUn+aIkOOBmeOCi+mWouaVsFxuXHRfY3JlYXRlX3ZibyhkYXRhKXtcblx0XHQvLyDjg5Djg4Pjg5XjgqHjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcblx0XHR2YXIgdmJvID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcblxuXHRcdC8vIOODkOODg+ODleOCoeOCkuODkOOCpOODs+ODieOBmeOCi1xuXHRcdHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdmJvKTtcblxuXHRcdC8vIOODkOODg+ODleOCoeOBq+ODh+ODvOOCv+OCkuOCu+ODg+ODiFxuXHRcdHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShkYXRhKSwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG5cblx0XHQvLyDjg5Djg4Pjg5XjgqHjga7jg5DjgqTjg7Pjg4njgpLnhKHlirnljJZcblx0XHR0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xuXG5cdFx0Ly8g55Sf5oiQ44GX44GfIFZCTyDjgpLov5TjgZfjgabntYLkuoZcblx0XHRyZXR1cm4gdmJvO1xuXHR9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1dlYkdMaW5pdC5lczYiXSwic291cmNlUm9vdCI6IiJ9