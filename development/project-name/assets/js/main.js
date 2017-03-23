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
	
	var _Main = __webpack_require__(24);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Top
	 * Date:
	 * Author:
	 */
	
	(function () {
	
	  // globalオブジェクト
	  if (window.gb === undefined) window.gb = {};
	  window.gb.in = {}; //instance
	
	  gb.in.common = new _Common2.default();
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
	// import JudgeEnvironment from '../Func/JudgeEnvironment.js';
	// import ResponsiveSwitchImg from '../Func/_events/ResponsiveSwitchImg.js';
	// import SwipeTransition from '../Func/SwipeTransition.js';
	
	// import Menu from '../Display/UI/_compornents/Menu.js';
	// import Nav from '../Display/UI/Nav.js';
	// import Alert from '../Display/UI/Alert.js';
	// import SideR from '../Display/UI/SideR.js';
	// import Time from '../Func/Time.js';
	
	// import Sec01Video from '../Display/UI/Sec01Video.js';
	
	// import SliderTop from '../Display/UI/SliderTop.js';
	
	
	// import Layout from '../Display/Layout/Layout.js';
	
	// import DisplayOpening from '../Display/DisplayOpening.js';
	// import Section02Bg from '../Display/Effects/03_effects/Section02Bg/CVContents.js';
	// import PageTransitionEffect from '../Display/Effects/03_effects/PageTransition/PageTransitionController.js';
	// import HoverEffectSVG from '../Display/Effects/03_effects/HoverEffectSVG.js';
	// import HoverEffectSVGLogo from '../Display/Effects/03_effects/HoverEffectSVGLogo.js';
	
	
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
	
	var _ScrollTransition = __webpack_require__(18);
	
	var _ScrollTransition2 = _interopRequireDefault(_ScrollTransition);
	
	var _PageTop = __webpack_require__(19);
	
	var _PageTop2 = _interopRequireDefault(_PageTop);
	
	var _Sns = __webpack_require__(20);
	
	var _Sns2 = _interopRequireDefault(_Sns);
	
	var _HoverEffectMenuBtn = __webpack_require__(22);
	
	var _HoverEffectMenuBtn2 = _interopRequireDefault(_HoverEffectMenuBtn);
	
	var _HoverEffectSVGArrow = __webpack_require__(23);
	
	var _HoverEffectSVGArrow2 = _interopRequireDefault(_HoverEffectSVGArrow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import HoverEffectSNSPCFooter from '../Display/Effects/03_effects/HoverEffectSNSPCFooter.js';
	// import HoverEffectSVGArrowSideR from '../Display/Effects/03_effects/HoverEffectSVGArrowSideR.js';
	// import HoverEffectMenuItem from '../Display/Effects/03_effects/HoverEffectMenuItem.js';
	
	'use strict';
	
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
	      gb.in.Layout = new Layout();
	
	      // 準備完了後の処理
	      gb.in.rm.onCompletedFunc = function () {
	        new DisplayOpening();
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
	      gb.in.je = new JudgeEnvironment();
	      gb.in.resImg = new ResponsiveSwitchImg();
	      gb.in.sns = new _Sns2.default($('.fbShare'), $('.twShare'), $('.lineShare'), $('.onMail'));
	      gb.in.swt = new SwipeTransition();
	
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
	      // gb.in.sliderTop = new SliderTop($('#bgWrap .sec01'));
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	      // gb.in.pageTransitionEffect = new PageTransitionEffect($('#pageTransitionLayer'));
	      // gb.in.sec01Video = new Sec01Video();
	      // gb.in.Sec02Bg = new Section02Bg();
	
	      // gb.in.he01 = new HoverEffectSVG($('.SVGHover'),'#fff','#000');
	      // gb.in.he02 = new HoverEffectSVG($('.SVGHoverW'),'#81d8d0','#fff');
	      // gb.in.he03 = new HoverEffectSVG($('.SVGHoverW02'),'#81d8d0','#000');
	      // gb.in.he04 = new HoverEffectSVGLogo($('#header .logo, #header .subTit'));
	      // gb.in.he05 = new HoverEffectMenuItem($('#menu .menuList .item'));
	      // gb.in.he06 = new HoverEffectSVGArrowSideR($('#sideR .next'));
	      // gb.in.he07 = new HoverEffectMenuBtn($('.menuBtn01'));
	      // gb.in.he08 = new HoverEffectSNSPCFooter($('#sideL .sns.sp'));
	
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

	/**
	 * fileOverview: 画面更新クラス
	 * Project:
	 * File: UpdateMgr
	 * Date:
	 * Author:
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UpdateMgr = function () {
	  function UpdateMgr() {
	    _classCallCheck(this, UpdateMgr);
	
	    //更新回数
	    this.cnt = 0;
	
	    //毎フレーム実行させる関数を保持
	    this.updateList = [];
	
	    this.len = 0;
	    this.Timer = null;
	    this.isStop = false;
	  }
	
	  /**
	   *  実行したい関数を登録
	   *  func : 関数
	   */
	
	
	  _createClass(UpdateMgr, [{
	    key: 'add',
	    value: function add(name, func) {
	
	      var obj = { name: name, func: func };
	
	      this.updateList.push(obj);
	    }
	
	    /**
	     *  実行したい関数を削除
	     *  func : 関数
	     */
	
	  }, {
	    key: 'remove',
	    value: function remove(name) {
	
	      var target = { name: name, func: function func() {} };
	
	      UpdateMgr.arrRemove(this.updateList, target);
	    }
	
	    /**
	     *  更新(登録された関数の総数分実行する)
	     */
	
	  }, {
	    key: 'update',
	    value: function update() {
	
	      for (var i in this.updateList) {
	        this.updateList[i].func();
	      }
	    }
	
	    /**
	     *　更新の実行関数の内容
	     */
	
	  }, {
	    key: 'loop',
	    value: function loop() {
	
	      this.update();
	      this.cnt++;
	
	      this.Timer = requestAnimationFrame(this.loop.bind(this));
	      if (this.isStop) cancelAnimationFrame(this.Timer);
	    }
	
	    /**
	     *　更新停止
	     */
	
	  }, {
	    key: 'stop',
	    value: function stop() {
	
	      this.isStop = true;
	    }
	
	    /**
	     *　更新再開
	     */
	
	  }, {
	    key: 'resume',
	    value: function resume() {
	
	      this.isStop = false;
	      this.loop();
	    }
	
	    /**
	     *　静的メンバ関数
	     */
	
	  }], [{
	    key: 'arrRemove',
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
/* 20 */
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
	
	var _metaData = __webpack_require__(21);
	
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
/* 21 */
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
/* 22 */
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
/* 24 */
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
	
	var _DisplayTop = __webpack_require__(25);
	
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
/* 25 */
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
	
	
	var _Effects = __webpack_require__(26);
	
	var _Effects2 = _interopRequireDefault(_Effects);
	
	var _ScaleTop = __webpack_require__(40);
	
	var _ScaleTop2 = _interopRequireDefault(_ScaleTop);
	
	var _HoverEffectSNSSPFooter = __webpack_require__(41);
	
	var _HoverEffectSNSSPFooter2 = _interopRequireDefault(_HoverEffectSNSSPFooter);
	
	var _HoverEffectSVGArrowTop = __webpack_require__(42);
	
	var _HoverEffectSVGArrowTop2 = _interopRequireDefault(_HoverEffectSVGArrowTop);
	
	var _TopTime = __webpack_require__(17);
	
	var _TopTime2 = _interopRequireDefault(_TopTime);
	
	var _Position = __webpack_require__(43);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	var _WebGLinit = __webpack_require__(44);
	
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
/* 26 */
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
	
	
	var _CVContents = __webpack_require__(27);
	
	var _CVContents2 = _interopRequireDefault(_CVContents);
	
	var _GlContents = __webpack_require__(33);
	
	var _GlContents2 = _interopRequireDefault(_GlContents);
	
	var _Profiler = __webpack_require__(39);
	
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
/* 27 */
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
	
	
	var _CVContentsLoop = __webpack_require__(28);
	
	var _CVContentsLoop2 = _interopRequireDefault(_CVContentsLoop);
	
	var _CVContentsTimeline = __webpack_require__(29);
	
	var _CVContentsTimeline2 = _interopRequireDefault(_CVContentsTimeline);
	
	var _CreateCanvas = __webpack_require__(30);
	
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
/* 28 */
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
/* 30 */
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
	
	
	var _Canvas = __webpack_require__(31);
	
	var _Canvas2 = _interopRequireDefault(_Canvas);
	
	var _Plane = __webpack_require__(32);
	
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
	
	
	var _GlContentsLoop = __webpack_require__(34);
	
	var _GlContentsLoop2 = _interopRequireDefault(_GlContentsLoop);
	
	var _GlContentsTimeline = __webpack_require__(35);
	
	var _GlContentsTimeline2 = _interopRequireDefault(_GlContentsTimeline);
	
	var _Plane = __webpack_require__(37);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	var _Param = __webpack_require__(38);
	
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
/* 35 */
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
	
	var _SometimesMgr = __webpack_require__(36);
	
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
/* 36 */
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
/* 39 */
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
/* 41 */
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
/* 42 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzY2NDNiZjY4N2Q5ZDMxOTYzMzIiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1RvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvbmYuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0RhdGEvU291bmQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9VdGlsLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRnVuYy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1JlYWR5UGVyY2VudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Jlc2l6ZU1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Njcm9sbE1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL01vdXNlTWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0xvYWRNZ3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvWW91dHViZUZvclNlYzAxLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRGlzcGxheS9MYXlvdXQvRnVsbFNpemUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9TY3JvbGxUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL19wYXJ0cy9QYWdlVG9wLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1Nucy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2Vqcy9pbmMvbWV0YURhdGEuanNvbiIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RNZW51QnRuLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0Fycm93LmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9QYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzL0VmZmVjdHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNMb29wLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvX2RldGFpbHMvQ2FudmFzLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9HbENvbnRlbnRzLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHNMb29wLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHNUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1NvbWV0aW1lc01nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9fZGV0YWlscy9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzL1BhcmFtLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvUHJvZmlsZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGVUb3AuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U05TU1BGb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dUb3AuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1Bvc3Rpb24vUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvV2ViR0xpbml0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImdiIiwidW5kZWZpbmVkIiwiaW4iLCJjb21tb24iLCJtYWluIiwiQ29tbW9uIiwib25JbW1lZGlhdGUiLCJzZXRFdmVudHMiLCJjb25mIiwidSIsImYiLCJ1cCIsInIiLCJzIiwibSIsInJtIiwibG9hZE1nciIsInNjdCIsIkxheW91dCIsIm9uQ29tcGxldGVkRnVuYyIsIkRpc3BsYXlPcGVuaW5nIiwiamUiLCJKdWRnZUVudmlyb25tZW50IiwicmVzSW1nIiwiUmVzcG9uc2l2ZVN3aXRjaEltZyIsInNucyIsIiQiLCJzd3QiLCJTd2lwZVRyYW5zaXRpb24iLCJjaGVja0Nzc0JsZW5kIiwic3RhcnQiLCJkb2N1bWVudCIsIm9uIiwib25SZWFkeSIsImJpbmQiLCJvbkxvYWQiLCJDb25mIiwiUkVMRUFTRSIsIkZMRyIsIkxPRyIsIlBBUkFNIiwiU1RBVFMiLCJkZWZXIiwiZGVmSCIsIlciLCJIIiwic3BXIiwic3BIIiwiYnAiLCJtb2RlIiwia2V5cyIsInN3aXRjaE1vZGUiLCJzb3VuZERhdGEiLCJzZWMwMkltZ051bSIsInlvdXR1YmVJRDAxIiwieW91dHViZUlEMDIiLCJ3ZWJGb250TG9hZGVkIiwiaSIsImtleSIsImxlbiIsInBhcmFtIiwicmVmIiwicmVmMSIsInZhbHVlIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJqIiwib2JqIiwiayIsInZhbCIsIlNvdW5kRGF0YSIsIlV0aWwiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiYXBwViIsImFwcFZlcnNpb24iLCJpc1Jlc1NQIiwiaXNSZXNQQyIsImlzUEMiLCJpc1NQIiwiaXNUQUIiLCJpc01CIiwiaXNJRSIsImlzU2V0U1BTaXplIiwic3RhcnRUaW1lIiwiZWxhcHNlZFRpbWUiLCJub3ciLCJEYXRlIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImhpdCIsInJhbmdlIiwibnVtIiwicmVzTWluIiwicmVzTWF4IiwiYmFzZU1pbiIsImJhc2VNYXgiLCJwIiwibiIsInBvcyIsIlN0cmluZyIsImluZGV4T2YiLCJzdWJzdHIiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInJhZGlhbnMiLCJQSSIsImFuZ2xlIiwicDEiLCJwMiIsInNxcnQiLCJwb3ciLCJ4IiwieSIsImFyciIsInNvcnQiLCJhIiwiYiIsImFyeSIsInNsaWNlIiwidCIsIkFycmF5IiwicHVzaCIsInNodWZmbGVBcnkiLCJsIiwibGVuMSIsIm5ld0FyciIsInBhcmEiLCJkZXNjIiwibGlzdCIsInJldHVybktleSIsImdldFRpbWUiLCJmbGciLCJjc3MiLCJtZWRpYSIsInBhdHRlcm4iLCJSZWdFeHAiLCJqb2luIiwidGVzdCIsImFkZENsYXNzIiwiaXNJcGFkIiwiaXNBbmRyb2lkIiwicGxhdGZvcm0iLCJpc0lvcyIsIm1zaWUiLCJwYXJzZUludCIsIm1hdGNoIiwiaXNJZTEwVW5kZXIiLCJsb2ciLCJpc0lFMTEiLCJyZW1vdmVDbGFzcyIsInZlcnNpb24iLCJwYXJzZUZsb2F0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidXJsIiwiaHJlZiIsInBhcmFtSXRlbXMiLCJwYXJhbUl0ZW0iLCJoYXNoIiwiY29va2llIiwiaXNDb250YWluIiwiZyIsInN0ciIsInRvU3RyaW5nIiwiY29udGFpbiIsIm51bWJlciIsIl9wb3ciLCJyb3VuZCIsInJlcyIsIm9yZyIsImRlc3QiLCJiZWZvcmUiLCJhZnRlciIsImdldE5vdyIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWlsbFNlY29uZCIsImdldE1pbGxpc2Vjb25kcyIsImdldERhdGUiLCJtb250aGRheXMiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwid2Vla0RheUpQIiwid0RKIiwiZ2V0RGF5Iiwid2Vla0RheUVOIiwid0RFIiwiZGF0ZSIsIk51bWJlciIsImlnbm9yZUFycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIiR0YXJnZXQiLCIkaW1nIiwiZWFjaCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJhdHRyIiwidHJpZ2dlciIsInNlbGYiLCJlIiwicHJldmVudERlZmF1bHQiLCJvZmYiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsImtleUNvZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsIm9udG91Y2htb3ZlIiwib25rZXlkb3duIiwicHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZ1bmMiLCJibGFuayIsImRlYnVnZ2VyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZXhwYW5kalF1ZXJ5IiwibWV0aG9kcyIsImNvbnNvbGUiLCJwcmVwZW5kIiwiRlBTIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJqUXVlcnkiLCJmbiIsImV4dGVuZCIsImFkanVzdCIsImFkanVzdFciLCJhZGp1c3RIIiwiQ1NTIiwic3VwcG9ydHMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ2IiwiaXNBbmRyb2lkVmVyc2lvbiIsImFsZXJ0IiwiUmVhZHlNZ3IiLCJjb21wbGV0ZWQiLCJ0b3RhbCIsImN1cnJlbnQiLCJyZWFkeVBlcmNlbnQiLCJyZW1vdmUiLCJ1cGRhdGUiLCJzZXR1cCIsIlJlYWR5UGVyY2VudCIsIiRsb2FkaW5nIiwiJGJhciIsIiRwZXJjZW50IiwiaXNMb2NrIiwic2V0VGltZW91dExvY2siLCJ0YXJnZXQiLCJ0ZXh0Iiwib25Db21wbGV0ZSIsIlR3ZWVuTWF4IiwidG8iLCJzY2FsZSIsIm9wYWNpdHkiLCJlYXNlIiwiUG93ZXIzIiwiZWFzZUluT3V0IiwiVXBkYXRlTWdyIiwiY250IiwidXBkYXRlTGlzdCIsIlRpbWVyIiwiaXNTdG9wIiwibmFtZSIsImZ1bmMiLCJhcnJSZW1vdmUiLCJsb29wIiwiY2hlY2siLCJzcGxpY2UiLCJSZXNpemVNZ3IiLCJyZXNpemVMaXN0Iiwid3MiLCJvbGRXIiwib2xkSCIsIm9uUmVzaXplIiwiZ2V0V2luZG93U2l6ZSIsIlNjcm9sbE1nciIsInNjcm9sbExpc3QiLCJzY3JvbGxFbmRMaXN0Iiwic3QiLCJzYiIsInN2IiwiU1RBbW91bnQiLCJvZmZzZXQiLCJpc1N0YXJ0IiwiZW5kIiwic2Nyb2xsVG9wIiwiZGVsdGEiLCJkZWx0YVgiLCJkZWx0YVkiLCJpc1dpbiIsImlzRkYiLCJzY3JvbGxMZWZ0Iiwib25TY3JvbGwiLCJvbk1vdXNlV2hlZWwiLCJNb3VzZU1nciIsImN4IiwiY3kiLCJtb3VzZU1vdmVMaXN0IiwibW91c2VNb3ZlU3RhcnRMaXN0IiwibW91c2VNb3ZlRW5kTGlzdCIsImVuZFRpbWUiLCJvbkVuZCIsIm9yaWdpbmFsRXZlbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJvZmZzZXRYIiwibGVmdCIsInRvcCIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaG1vdmUiLCJvbk1vdXNlbW92ZSIsIkxvYWRNZ3IiLCJsb2FkZXIiLCJjYiIsInlvdXR1YmVJZnJhbWVTY3JpcHQiLCJsb2FkU2VjMDJJbWciLCJwYXRoIiwiY2IwMiIsImltZyIsInNoYWRlcnMiLCJzaGFkZXJMb2FkTGlzdCIsIlpvb21CbHVyIiwiVHJhbnNpdGlvbjAyIiwic2hhZGVyU2VyaWFsTG9hZCIsInNoYWRlciIsImxvYWQiLCJjb21wIiwic2VjdGlvbjA0UHJvZHVjdEltZyIsInRleHR1cmVMaXN0IiwidGV4dHVyZXMiLCJ0ZXh0dXJlU2VyaWFsTG9hZCIsInRleHR1cmUiLCJUSFJFRSIsIkltYWdlVXRpbHMiLCJsb2FkVGV4dHVyZSIsImNvbmZpZyIsImN1c3RvbSIsImZhbWlsaWVzIiwidXJscyIsImFjdGl2ZSIsIndlYkZvbnQiLCJMb2FkZXIiLCJzcmMiLCJnZXRKU09OIiwiZGF0YSIsIm50aCIsIkltYWdlIiwiYWRkMCIsIm9ubG9hZCIsImltZ051bSIsImVsbSIsImlzTG9hZCIsInZpZGVvIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJzdXBwb3J0VmlkZW9FeHQiLCJwbGF5IiwidGFnIiwiZmlyc3RTY3JpcHRUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJvbllvdVR1YmVJZnJhbWVSZWFkeSIsImV4dCIsImNhblBsYXlUeXBlIiwid2YiLCJhc3luYyIsImFnYWluIiwiV2ViRm9udCIsIm9uTG9hZGVkIiwiU2VjMDFWaWRlbyIsIllvdXR1YmVGb3JTZWMwMSIsImlkIiwidmlkZW9JRCIsInZpZGVvTGlzdCIsInBsYXllciIsImlzRmlyc3QiLCJpc1NlZWtMb2NrIiwiaXNTZWVrTG9jazAyIiwiWVQiLCJQbGF5ZXIiLCJ2aWRlb0lkIiwiZXZlbnRzIiwib25QbGF5ZXJTdGF0ZUNoYW5nZSIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwic2hvd2luZm8iLCJhdXRvaGlkZSIsInJlbCIsImVuYWJsZWpzYXBpIiwiaXZfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJtb2Rlc3RicmFuZGluZyIsInRhcmdldERlZlciLCJ0YXJnZXREZWZIIiwicnVuIiwic2V0UGxheWJhY2tRdWFsaXR5IiwidGltZSIsInNlYzAxVmlkZW8iLCJwbGF5QnlOWVRpbWUiLCJzdGF0dXMiLCJQbGF5ZXJTdGF0ZSIsIkVOREVEIiwicGxheVZpZGVvIiwiUExBWUlORyIsIkNVRUQiLCJpc1NhZmFyaSIsIkJVRkZFUklORyIsInNlZWtUbyIsImdldEN1cnJlbnRUaW1lIiwibnlIIiwib25TZWVrIiwiRnVsbFNpemUiLCIkV3JhcCIsIiRUYXJnZXQiLCIkd3JhcCIsInRhcmdldFciLCJ0YXJnZXRIIiwicmF0aW9XIiwicmF0aW8iLCJtbCIsIm10IiwiZ2V0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXREZWYiLCJzZXRTdHlsZSIsImdldFNpemUiLCJzZXRQb3MiLCJUb3BUaW1lIiwiJGgwMSIsImZpbmQiLCIkaDAyIiwiJG0wMSIsIiRtMDIiLCJpc0FsZXJ0IiwiZGlzIiwidGwiLCJUaW1lbGluZU1heCIsInJlcGVhdCIsInNldCIsIlBvd2VyMiIsIlNjcm9sbFRyYW5zaXRpb24iLCJwYWdlTGlzdCIsIm9sZCIsIm5leHQiLCJwcmV2IiwiaXNTd2l0Y2giLCJwamF4IiwiaXNQamF4TG9jayIsImNhbGN1bGF0ZU9yZGVyIiwicGFnZU5hbWUiLCJmaWx0ZXIiLCJkaXIiLCJtZW51IiwiaXNPcGVuIiwic3dpdGNoIiwiUGFnZVRvcCIsInJlYWR5IiwiZWFzZU91dCIsInBhZ2V0b3AiLCJTbnMiLCIkZmIiLCIkdHciLCIkbGluZSIsIiRtYWlsIiwiZmIiLCJ0aXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJodG1sIiwiZGVzIiwidHciLCJsaW5lIiwiaGFzQ2xhc3MiLCJkIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkIiwib3BlbldpbmRvdyIsImFkZHJlc3MiLCJzdWIiLCJib2R5Iiwic2NyZWVuIiwib3BlbiIsImp1bXBGQiIsImp1bXBUVyIsImp1bXBMSU5FIiwib25TZW5kTWFpbCIsIkhvdmVyRWZmZWN0TWVudUJ0biIsInRoYXQiLCIkYmFyMDEiLCIkYmFyMDIiLCIkYmFyMDMiLCJ0bDAxIiwiZGVsYXkiLCJ0bDAyIiwidGwwMyIsImluZGV4IiwiZWwiLCJvbkVudGVyIiwib25MZWF2ZSIsIkhvdmVyRWZmZWN0U1ZHQXJyb3ciLCJkcmF3U1ZHIiwiZmlsbCIsInN0cm9rZSIsIk1haW4iLCJwYWdlIiwiRGlzcGxheVRvcCIsInNjYWxlVG9wIiwic2xpZGVyVG9wIiwic25zU1BIb3ZlckVmIiwiaHQiLCJhdXRvQXJyb3ciLCJFZmZlY3RzIiwiZ2wiLCJkb20iLCJzdGF0ZSIsImRlYnVnIiwiQ1ZDb250ZW50cyIsInRpbWVsaW5lIiwiY2FudmFzIiwidGxNYWluIiwicGF1c2UiLCJDVkNvbnRlbnRzTG9vcCIsImlzQWx3YXlzIiwiaXNSdW5TdGF0dXMiLCJpc0FkanVzdFBhcmFtIiwic29tZXRpbWVzU3RhdGUiLCJsb29wTGlzdCIsImxvb3BTdGFydCIsInJ1bkFsd2F5cyIsInJ1blN0YXR1cyIsInJ1bkFkanVzdFBhcmFtIiwiZHJhdyIsIkNWQ29udGVudHNUaW1lbGluZSIsImJlZ2lubmluZyIsInN0ZXAwMSIsInN0ZXAwMiIsInN0ZXAwMyIsInN0YW5kQnkiLCJzb21ldGltZXMiLCJDcmVhdGVDYW52YXMiLCJjIiwiY3ciLCJjaCIsImZpbGxTdHlsZSIsImlzUmVzaXplIiwic2V0Q2FudmFzU2l6ZSIsImFwcGVuZCIsInZ4Iiwib2Zmc2V0RnJhbWUiLCJvZmZzZXRWeCIsInhOdW0iLCJ5TnVtIiwidGlsZUxpc3QiLCJ0aWxlIiwiY3R4IiwiZmlsbFJlY3QiLCJhZGRPYmplY3RzIiwiY250U3RvcCIsIlNlYzAyQmciLCJDYW52YXMiLCJnZXRDb250ZXh0IiwiUGxhbmUiLCJzdHJva2VTdHlsZSIsIm9wIiwiY3JlYXRlIiwiZnJhbWVTdGFydCIsImltZ0xpc3QiLCJkcmF3SW1hZ2UiLCJHbENvbnRlbnRzIiwicmVuZGVyZXIiLCJjYW1lcmEiLCJzY2VuZSIsImxpZ2h0IiwiYWRqdXN0UGFyYW0iLCJzdGF0ZUxpbmVSb3RhdGUiLCJpc0NvbnRyb2wiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwic2V0U2l6ZSIsInNldENsZWFyQ29sb3IiLCJkb21FbGVtZW50IiwicG9zaXRpb24iLCJTY2VuZSIsIkNhbWVyYSIsIkRpcmVjdGlvbmFsTGlnaHQiLCJ6Iiwic2VjdGlvbjA0UHJvZHVjdFNoYWRlciIsInBsYW5lIiwiVHJhY2tiYWxsQ29udHJvbHMiLCJ6b29tU3BlZWQiLCJyb3RhdGVTcGVlZCIsIlByb2ZpbGVyIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImN1ciIsIm9uQ2hhbmdlRnVuY0xpc3QiLCJvblNlY3Rpb24wNCIsIkdsQ29udGVudHNMb29wIiwiU2VjdGlvbjA0UHJvZHVjdCIsInVwZGF0ZUNvbnRyb2xsIiwicmVuZGVyIiwiR2xDb250ZW50c1RpbWVsaW5lIiwidW5pZm9ybXMiLCJzdHJlbmd0aCIsIkV4cG8iLCJvblN0YXJ0IiwiZWFzZUluIiwiZnJvbSIsInBsYW5lMDIiLCJtYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwidnMiLCJmcmFnbWVudFNoYWRlciIsImZzIiwidHJhbnNwYXJlbnQiLCJwcm9ncmVzcyIsIm9uUmVzaXpzZSIsIlNvbWVUaW1lcyIsImNiTGlzdCIsIm9yZGVyIiwibGF0ZXIiLCJnZW9tZXRyeSIsImRlZldXIiwiZGVmSEgiLCJyYXRlIiwicmF0ZVciLCJsYiIsImltYWdlIiwiUGxhbmVHZW9tZXRyeSIsIk1lc2giLCJ0ZXh0dXJlMDEiLCJQYXJhbSIsImd1aSIsImpzb24iLCJpc0ZsYWciLCJjbG9jayIsInpvb21ibHVyIiwic2l6ZSIsInRyYW5zaXRpb24iLCJ6b29tIiwiY29sb3JTZXBhcmF0aW9uIiwidHdlZW4iLCJQb3dlcjQiLCJzZXR1cERhdGEiLCJkYXQiLCJHVUkiLCJyZW1lbWJlciIsInpJbmRleCIsImYxIiwiYWRkRm9sZGVyIiwic3RlcCIsImxpc3RlbiIsIm9uQ2hhbmdlIiwibkZyYWciLCJTdGF0cyIsInN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJTY2FsZSIsIlNQQmFzZVciLCJQQ0Jhc2VXIiwiJHRhcmdldExpc3QiLCJpVyIsIndyYXAiLCJIb3ZlckVmZmVjdFNOU1NQRm9vdGVyIiwiJGlubmVyIiwiJGxpc3QiLCIkaXRlbSIsInNob3ciLCJjbG9zZSIsInRvZ2dsZUNsYXNzIiwia2lsbFR3ZWVuc09mIiwiJGJveCIsImVxIiwiaGlkZSIsInRvZ2dsZSIsIkhvdmVyRWZmZWN0U1ZHQXJyb3dUb3AiLCJpc0hvdmVyIiwiYXV0b1RMIiwia2lsbCIsInNjYWxlWSIsIlBvc2l0aW9uIiwic2V0Q2VudGVyIiwiV2ViR0xpbml0Iiwid2ViZ2xJbml0IiwiX3dlYmdsSW5pdCIsImNyZWF0ZV9zaGFkZXIiLCJfY3JlYXRlX3NoYWRlciIsImNyZWF0ZV9wcm9ncmFtIiwiX2NyZWF0ZV9wcm9ncmFtIiwiY3JlYXRlX3ZibyIsIl9jcmVhdGVfdmJvIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGVhckNvbG9yIiwiY2xlYXJEZXB0aCIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJ2X3NoYWRlciIsImZfc2hhZGVyIiwicHJnIiwiYXR0TG9jYXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsImF0dFN0cmlkZSIsInZlcnRleF9wb3NpdGlvbiIsInZibyIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsIm1hdElWIiwibU1hdHJpeCIsImlkZW50aXR5Iiwidk1hdHJpeCIsInBNYXRyaXgiLCJtdnBNYXRyaXgiLCJsb29rQXQiLCJwZXJzcGVjdGl2ZSIsIm11bHRpcGx5IiwidW5pTG9jYXRpb24iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ1bmlmb3JtTWF0cml4NGZ2IiwiZHJhd0FycmF5cyIsIlRSSUFOR0xFUyIsImZsdXNoIiwic2NyaXB0RWxlbWVudCIsImNyZWF0ZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJGUkFHTUVOVF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJnZXRTaGFkZXJJbmZvTG9nIiwicHJvZ3JhbSIsImNyZWF0ZVByb2dyYW0iLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJMSU5LX1NUQVRVUyIsInVzZVByb2dyYW0iLCJnZXRQcm9ncmFtSW5mb0xvZyIsImNyZWF0ZUJ1ZmZlciIsImJ1ZmZlckRhdGEiLCJGbG9hdDMyQXJyYXkiLCJTVEFUSUNfRFJBVyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FFcUIwQixrQjtBQUVuQiwrQkFBWTVULE9BQVos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QixNQUFFM0IsTUFBRixFQUFVaUMsRUFBVixDQUFhLE1BQWIsRUFBcUIsS0FBS0csTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQXJCO0FBRUQ7Ozt5QkFUWSxDQUdaOzs7Ozs7bUJBak5rQmlyQixTIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNjY0M2JmNjg3ZDlkMzE5NjMzMiIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRvcFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29tbW9uIGZyb20gJy4vUGFnZS9Db21tb24uanMnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9QYWdlL01haW4uanMnO1xuXG4oKCk9PntcblxuICAvLyBnbG9iYWzjgqrjg5bjgrjjgqfjgq/jg4hcbiAgaWYgKHdpbmRvdy5nYj09PXVuZGVmaW5lZCkgd2luZG93LmdiID0ge307XG4gIHdpbmRvdy5nYi5pbiA9IHt9OyAvL2luc3RhbmNlXG5cbiAgZ2IuaW4uY29tbW9uID0gbmV3IENvbW1vbigpO1xuICBnYi5pbi5tYWluID0gbmV3IE1haW4oKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb25mIGZyb20gJy4uL0NvbmYuanMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vTXlMaWJzL1V0aWwuanMnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vTXlMaWJzL0Z1bmMuanMnO1xuXG5pbXBvcnQgUmVhZHlNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzJztcbmltcG9ydCBVcGRhdGVNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyc7XG5pbXBvcnQgUmVzaXplTWdyIGZyb20gJy4uL015TGlicy9FdmVudE1nci9SZXNpemVNZ3IuanMnO1xuaW1wb3J0IFNjcm9sbE1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvU2Nyb2xsTWdyLmpzJztcbmltcG9ydCBNb3VzZU1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvTW91c2VNZ3IuanMnO1xuaW1wb3J0IExvYWRNZ3IgZnJvbSAnLi4vRnVuYy9Mb2FkTWdyLmpzJztcblxuLy8gaW1wb3J0IFBqYXggZnJvbSAnLi4vRnVuYy9QamF4LmpzJztcbi8vIGltcG9ydCBKdWRnZUVudmlyb25tZW50IGZyb20gJy4uL0Z1bmMvSnVkZ2VFbnZpcm9ubWVudC5qcyc7XG4vLyBpbXBvcnQgUmVzcG9uc2l2ZVN3aXRjaEltZyBmcm9tICcuLi9GdW5jL19ldmVudHMvUmVzcG9uc2l2ZVN3aXRjaEltZy5qcyc7XG4vLyBpbXBvcnQgU3dpcGVUcmFuc2l0aW9uIGZyb20gJy4uL0Z1bmMvU3dpcGVUcmFuc2l0aW9uLmpzJztcblxuLy8gaW1wb3J0IE1lbnUgZnJvbSAnLi4vRGlzcGxheS9VSS9fY29tcG9ybmVudHMvTWVudS5qcyc7XG4vLyBpbXBvcnQgTmF2IGZyb20gJy4uL0Rpc3BsYXkvVUkvTmF2LmpzJztcbi8vIGltcG9ydCBBbGVydCBmcm9tICcuLi9EaXNwbGF5L1VJL0FsZXJ0LmpzJztcbi8vIGltcG9ydCBTaWRlUiBmcm9tICcuLi9EaXNwbGF5L1VJL1NpZGVSLmpzJztcbi8vIGltcG9ydCBUaW1lIGZyb20gJy4uL0Z1bmMvVGltZS5qcyc7XG5pbXBvcnQgU2Nyb2xsVHJhbnNpdGlvbiBmcm9tICcuLi9GdW5jL1Njcm9sbFRyYW5zaXRpb24uanMnO1xuaW1wb3J0IFBhZ2VUb3AgZnJvbSAnLi4vRGlzcGxheS9VSS9fcGFydHMvUGFnZVRvcC5qcyc7XG4vLyBpbXBvcnQgU2VjMDFWaWRlbyBmcm9tICcuLi9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMnO1xuaW1wb3J0IFNucyBmcm9tICcuLi9GdW5jL1Nucy5qcyc7XG4vLyBpbXBvcnQgU2xpZGVyVG9wIGZyb20gJy4uL0Rpc3BsYXkvVUkvU2xpZGVyVG9wLmpzJztcblxuXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL0Rpc3BsYXkvTGF5b3V0L0xheW91dC5qcyc7XG5cbi8vIGltcG9ydCBEaXNwbGF5T3BlbmluZyBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlPcGVuaW5nLmpzJztcbi8vIGltcG9ydCBTZWN0aW9uMDJCZyBmcm9tICcuLi9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzLmpzJztcbi8vIGltcG9ydCBQYWdlVHJhbnNpdGlvbkVmZmVjdCBmcm9tICcuLi9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9QYWdlVHJhbnNpdGlvbi9QYWdlVHJhbnNpdGlvbkNvbnRyb2xsZXIuanMnO1xuLy8gaW1wb3J0IEhvdmVyRWZmZWN0U1ZHIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHLmpzJztcbi8vIGltcG9ydCBIb3ZlckVmZmVjdFNWR0xvZ28gZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdMb2dvLmpzJztcbmltcG9ydCBIb3ZlckVmZmVjdE1lbnVCdG4gZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RNZW51QnRuLmpzJztcbmltcG9ydCBIb3ZlckVmZmVjdFNWR0Fycm93IGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3cuanMnO1xuLy8gaW1wb3J0IEhvdmVyRWZmZWN0U05TUENGb290ZXIgZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNQQ0Zvb3Rlci5qcyc7XG4vLyBpbXBvcnQgSG92ZXJFZmZlY3RTVkdBcnJvd1NpZGVSIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dTaWRlUi5qcyc7XG4vLyBpbXBvcnQgSG92ZXJFZmZlY3RNZW51SXRlbSBmcm9tICcuLi9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdE1lbnVJdGVtLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5vbkltbWVkaWF0ZSgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIG9uSW1tZWRpYXRlKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOWIneacn+WApOOBruioreWumuODu+ODh+ODvOOCv+OBrumFjee9rlxuICAgIC8vICB1dGls6Zai5pWw44Gu5Yid5pyf5YyWXG4gICAgLy8gIOOCpOODmeODs+ODiOODnuODjeODvOOCuOODo+ODvOOBruioree9rlxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdiLmluLmNvbmYgPSBuZXcgQ29uZigpO1xuICAgIGdiLmluLnUgPSBuZXcgVXRpbCgpO1xuICAgIGdiLmluLmYgPSBuZXcgRnVuYygpO1xuICAgIGdiLmluLnVwID0gbmV3IFVwZGF0ZU1ncigpO1xuICAgIGdiLmluLnIgPSBuZXcgUmVzaXplTWdyKCk7ICAgIFxuICAgIGdiLmluLnMgPSBuZXcgU2Nyb2xsTWdyKCk7XG4gICAgZ2IuaW4ubSA9IG5ldyBNb3VzZU1ncigpO1xuICAgIGdiLmluLnJtID0gbmV3IFJlYWR5TWdyKCk7XG4gICAgZ2IuaW4ubG9hZE1nciA9IG5ldyBMb2FkTWdyKCk7XG4gICAgZ2IuaW4uc2N0ID0gbmV3IFNjcm9sbFRyYW5zaXRpb24oKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIOOBneOBruS7llxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gcGpheOOBruioreWumlxuICAgIC8vIGdiLmluLnBqYXggPSBuZXcgUGpheCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIExheW91dFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdiLmluLkxheW91dCA9IG5ldyBMYXlvdXQoKTtcblxuXG4gICAgLy8g5rqW5YKZ5a6M5LqG5b6M44Gu5Yem55CGXG4gICAgZ2IuaW4ucm0ub25Db21wbGV0ZWRGdW5jID0gKCk9PntuZXcgRGlzcGxheU9wZW5pbmcoKTt9XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OH44OQ44Kk44K544O744OW44Op44Km44K25Yik5a6aXG4gICAgLy8gIOOCueODnuODm+OBruWQkeOBjeWIpOWumlxuICAgIC8vICDjg5rjg7zjgrjmg4XloLHlj5blvpdcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnYi5pbi5qZSA9IG5ldyBKdWRnZUVudmlyb25tZW50KCk7XG4gICAgZ2IuaW4ucmVzSW1nID0gbmV3IFJlc3BvbnNpdmVTd2l0Y2hJbWcoKTtcbiAgICBnYi5pbi5zbnMgPSBuZXcgU25zKCQoJy5mYlNoYXJlJyksJCgnLnR3U2hhcmUnKSwkKCcubGluZVNoYXJlJyksJCgnLm9uTWFpbCcpKVxuICAgIGdiLmluLnN3dCA9IG5ldyBTd2lwZVRyYW5zaXRpb24oKTtcblxuICAgIGdiLmluLmYuY2hlY2tDc3NCbGVuZCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIFVJXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gZ2IuaW4ubWVudSA9IG5ldyBNZW51KCk7XG4gICAgLy8gZ2IuaW4ubmF2ID0gbmV3IE5hdigpO1xuICAgIC8vIGdiLmluLnNpZGVSID0gbmV3IFNpZGVSKCk7XG4gICAgLy8gZ2IuaW4uYWxlcnQgPSBuZXcgQWxlcnQoKTtcbiAgICAvLyBnYi5pbi5wYWdldG9wID0gbmV3IFBhZ2VUb3AoKTtcblxuICAgIC8vIGJnXG4gICAgLy8gZ2IuaW4uc2xpZGVyVG9wID0gbmV3IFNsaWRlclRvcCgkKCcjYmdXcmFwIC5zZWMwMScpKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBFZmZlY3RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gZ2IuaW4ucGFnZVRyYW5zaXRpb25FZmZlY3QgPSBuZXcgUGFnZVRyYW5zaXRpb25FZmZlY3QoJCgnI3BhZ2VUcmFuc2l0aW9uTGF5ZXInKSk7XG4gICAgLy8gZ2IuaW4uc2VjMDFWaWRlbyA9IG5ldyBTZWMwMVZpZGVvKCk7XG4gICAgLy8gZ2IuaW4uU2VjMDJCZyA9IG5ldyBTZWN0aW9uMDJCZygpO1xuXG4gICAgLy8gZ2IuaW4uaGUwMSA9IG5ldyBIb3ZlckVmZmVjdFNWRygkKCcuU1ZHSG92ZXInKSwnI2ZmZicsJyMwMDAnKTtcbiAgICAvLyBnYi5pbi5oZTAyID0gbmV3IEhvdmVyRWZmZWN0U1ZHKCQoJy5TVkdIb3ZlclcnKSwnIzgxZDhkMCcsJyNmZmYnKTtcbiAgICAvLyBnYi5pbi5oZTAzID0gbmV3IEhvdmVyRWZmZWN0U1ZHKCQoJy5TVkdIb3ZlclcwMicpLCcjODFkOGQwJywnIzAwMCcpO1xuICAgIC8vIGdiLmluLmhlMDQgPSBuZXcgSG92ZXJFZmZlY3RTVkdMb2dvKCQoJyNoZWFkZXIgLmxvZ28sICNoZWFkZXIgLnN1YlRpdCcpKTtcbiAgICAvLyBnYi5pbi5oZTA1ID0gbmV3IEhvdmVyRWZmZWN0TWVudUl0ZW0oJCgnI21lbnUgLm1lbnVMaXN0IC5pdGVtJykpO1xuICAgIC8vIGdiLmluLmhlMDYgPSBuZXcgSG92ZXJFZmZlY3RTVkdBcnJvd1NpZGVSKCQoJyNzaWRlUiAubmV4dCcpKTtcbiAgICAvLyBnYi5pbi5oZTA3ID0gbmV3IEhvdmVyRWZmZWN0TWVudUJ0bigkKCcubWVudUJ0bjAxJykpO1xuICAgIC8vIGdiLmluLmhlMDggPSBuZXcgSG92ZXJFZmZlY3RTTlNQQ0Zvb3RlcigkKCcjc2lkZUwgLnNucy5zcCcpKTtcblxuICAgIC8vIGxvZ28g5Ye644GZXG4gICAgLy8gVHdlZW5NYXgudG8oJCgnI2hlYWRlciAubG9nbycpLCAyLjIsIHtvcGFjaXR5OiAxLCBlYXNlOiBQb3dlcjIuZWFzZUluT3V0fSlcblxuICAgIGdiLmluLmxvYWRNZ3Iuc3RhcnQoKTtcblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgRnVuY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIExheW91dFxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBEaXNwYWx5XG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIE1vdGlvblxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9Db21tb24uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb25mXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBTb3VuZERhdGEgZnJvbSAnLi9EYXRhL1NvdW5kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5pys55Wq44OV44Op44KwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICAgIHRoaXMuUkVMRUFTRSA9IHRydWU7XG4gICAgLy8gdGhpcy5SRUxFQVNFID0gZmFsc2U7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OV44Op44Kw6Zai6YCjXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5GTEcgPSB7XG4gICAgICBMT0c6dHJ1ZSwgIC8vIOODreOCsOWHuuWKm1xuICAgICAgUEFSQU06dHJ1ZSwgLy8g44OR44Op44Oh44O844K/44OB44Kn44OD44KvXG4gICAgICBTVEFUUzp0cnVlICAvLyBTdGF0c+ihqOekulxuICAgIH07XG4gICAgaWYgKCF0aGlzLlJFTEVBU0UpIHtcbiAgICAgIHRoaXMuRkxHID0ge1xuICAgICAgICBMT0c6ZmFsc2UsXG4gICAgICAgIFBBUkFNOmZhbHNlLFxuICAgICAgICBTVEFUUzpmYWxzZSBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOWfuuacrCB3aWR0aCBoZWlnaHRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmRlZlcgPSAxMzAwO1xuICAgIHRoaXMuZGVmSCA9IDg1MDtcblxuICAgIHRoaXMuVyA9IDEyMDA7XG4gICAgdGhpcy5IID0gNzUwO1xuXG4gICAgdGhpcy5zcFcgPSAzNzU7XG4gICAgdGhpcy5zcEggPSA2Njc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OW44Os44Kk44Kv44Od44Kk44Oz44OIXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5icCA9IDc2ODtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBtb2RlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLmtleXMgPSBbXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdtb3ZpZScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydtb3JuaW5nJywnYWZ0ZXJub29uJywnbmlnaHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdkYXRhJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ2RhdGEwMScsJ2RhdGEwMicsJ2RhdGEwMyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ3Byb2R1Y3QnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnMDEnXSxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMuc3dpdGNoTW9kZSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNvdW5kIGRhdGFcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNvdW5kRGF0YSA9IG5ldyBTb3VuZERhdGEoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzZWMwMiBiZyBJbWcgTnVtXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZWMwMkltZ051bSA9IDM5NjtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB5b3V0dWJlIElEXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy55b3V0dWJlSUQwMSA9ICd4VzJvTnBOcktkMCc7XG4gICAgdGhpcy55b3V0dWJlSUQwMiA9ICd0MldlUlJkQUZlSSc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgd2ViIGZvbnQgbG9hZGVkXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy53ZWJGb250TG9hZGVkID0gZmFsc2U7XG5cbiAgfVxuXG5cbiAgc3dpdGNoTW9kZSgpe1xuXG4gICAgdmFyIGksIGtleSwgbGVuLCBwYXJhbSwgcmVmLCByZWYxLCB2YWx1ZTtcblxuICAgIHJlZiA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHBhcmFtID0gcmVmW2ldO1xuICAgICAgcmVmMSA9IHBhcmFtLnNwbGl0KCc9JyksIGtleSA9IHJlZjFbMF0sIHZhbHVlID0gcmVmMVsxXTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmtleXMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICB2YXIgb2JqID0gdGhpcy5rZXlzW2pdO1xuXG4gICAgICAgIC8vIOODkeODqeODoeODvOOCv+OBjOOCreODvOOBqOS4gOe3kuOBoOOBo+OBn+OCiVxuICAgICAgICBpZiAob2JqLmtleSA9PT0ga2V5KSB7XG5cbiAgICAgICAgICAvLyDlkITlgKTjgajmr5TovINcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IG9iai52YWx1ZS5sZW5ndGg7IGsrKykge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqLnZhbHVlW2tdO1xuXG4gICAgICAgICAgICAvLyDjgq3jg7zjgpJ0aGlzLmtleXPjga5rZXnjgavjgIF2YWx1ZeOCkuavlOi8g+OBl+OBpuWQjOWApOOBoOOBo+OBn+OCguOBruOBq1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gdmFsdWUpIHRoaXNbb2JqLmtleV0gPSB2YWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9O1xuXG5cbiAgICAgICAgfTtcblxuICAgICAgICBcbiAgICAgIH07XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvbmYuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRGF0YVxuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZERhdGEge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gdGhpcy5BVEFSSTAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2F0YXJpL0F0YXJpXzA0Lndhdic7XG4gICAgLy8gdGhpcy5BVEFSSTAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2F0YXJpL0F0YXJpXzA1Lndhdic7XG5cbiAgICAvLyB0aGlzLkJBTjAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CYS1uXzAxLndhdic7XG4gICAgLy8gdGhpcy5CQU4wMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmEtbl8wMi53YXYnO1xuICAgIC8vIHRoaXMuQkFOMDMgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDMud2F2JztcbiAgICAvLyB0aGlzLkJBTjA0ID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CYS1uXzA0Lndhdic7XG5cbiAgICAvLyB0aGlzLkRPTjAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CaWdfRG9uXzAxLndhdic7XG4gICAgLy8gdGhpcy5ET04wMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmlnX0Rvbl8wMi53YXYnO1xuICAgIC8vIHRoaXMuRE9OMDMgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JpZ19Eb25fMDMud2F2JztcbiAgICAvLyB0aGlzLkRPTjA0ID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Eb25fMDQud2F2JztcblxuICAgIC8vIHRoaXMuRE9ETjAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Eb2Rvbl8wMS53YXYnO1xuICAgIC8vIHRoaXMuRE9ETjAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Eb2Rvbl8wMi53YXYnO1xuXG4gICAgLy8gdGhpcy5Hb2dvZ28wMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vR29nb2dvXzAxLndhdic7XG4gICAgLy8gdGhpcy5Hb2dvZ28wMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vR29nb2dvXzAyLndhdic7XG5cbiAgICAvLyB0aGlzLklLQVJJID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2lrYXJpL0lrYXJpXzAxLndhdic7XG5cbiAgICAvLyB0aGlzLlJPVUxFVFRFMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvcm91bGV0dGUvUm91bGV0dGVfMDEud2F2JztcbiAgICAvLyB0aGlzLlJPVUxFVFRFMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvcm91bGV0dGUvUm91bGV0dGVfMDIud2F2JztcbiAgICAvLyB0aGlzLlJPVUxFVFRFMDMgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvcm91bGV0dGUvUm91bGV0dGVfMDMud2F2JztcblxuICAgIC8vIHRoaXMuU0VBID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL3NlYS9TZWEma2Ftb21lXzAxLndhdic7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0RhdGEvU291bmQuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy51YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7IC8vdXNlcmFnZW50XG4gICAgdGhpcy5hcHBWID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7IC8vYXBwVmVyc2lvblxuICAgIHRoaXMuaXNSZXNTUCA9IG51bGw7IC8vIHJlc3BvbnNpdmUgc3BcbiAgICB0aGlzLmlzUmVzUEMgPSBudWxsOyAvLyByZXNwb25zaXZlIHBjXG5cbiAgICB0aGlzLmlzUEMgPSBudWxsO1xuICAgIHRoaXMuaXNTUCA9IG51bGw7XG4gICAgdGhpcy5pc1RBQiA9IG51bGw7XG4gICAgdGhpcy5pc01CID0gbnVsbDtcblxuICAgIHRoaXMuaXNJRSA9IG51bGw7XG5cbiAgICB0aGlzLmlzU2V0U1BTaXplID0gZmFsc2U7XG5cblxuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbnVsbDtcbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWF0aFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBcbiAgLy8g44Op44Oz44OA44Og44Gq5pW05pWw44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBtaW4gOiDmnIDlsI/lgKQoaW50KVxuICAvLyBAbWF4IDog5pyA5aSn5YCkKGludClcbiAgLy8gcmV0dXJuIDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tKG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSkgLSBtaW4pICsgbWluKSk7XG5cbiAgfVxuICAgICAgXG4gIC8vIOODqeODs+ODgOODoOOBquaVtOaVsOOCkjLjgaTjga7nr4Tlm7LjgYvjgonlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG1pbjEgOiDmnIDlsI/lgKQxKGludClcbiAgLy8gQG1heDEgOiDmnIDlpKflgKQxKGludClcbiAgLy8gQG1pbjIgOiDmnIDlsI/lgKQyKGludClcbiAgLy8gQG1heDIgOiDmnIDlpKflgKQyKGludClcbiAgLy8gcmV0dXJuIDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tMihtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gICAgXG4gICAgaWYgKHRoaXMuaGl0KDIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMSwgbWF4MSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4yLCBtYXgyKTtcbiAgICB9XG5cbiAgfVxuICAgICAgXG4gIC8vIDEvQHJhbmdl44Gu56K6546H44GndHJ1ZeOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAcmFuZ2UgOiDmr43mlbAoaW50KVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhpdChyYW5nZSkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKDAsIHJhbmdlIC0gMSkgPT09IDA7XG5cbiAgfVxuICBcbiAgLy8gMOOBi+OCieevhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVtOaVsOOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsIDog56+E5ZuyKGludClcbiAgLy8gcmV0dXJuIDog44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZ2UodmFsKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oLXZhbCwgdmFsKTtcblxuICB9XG4gIFxuICAvLyDlgKTjgpLjg57jg4Pjg5Tjg7PjgrBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOODnuODg+ODlOODs+OCsOOBmeOCi+WApChOdW1iZXIpXG4gIC8vIEByZXNNaW4gOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAcmVzTWF4IDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNaW4gOiDlhYPjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1heCA6IOWFg+OBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIHJldHVybiA6IOODnuODg+ODlOODs+OCsOOBleOCjOOBn+WApChOdW1iZXIpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1hcChudW0sIHJlc01pbiwgcmVzTWF4LCBiYXNlTWluLCBiYXNlTWF4KSB7XG5cbiAgICB2YXIgcDtcbiAgICBpZiAobnVtIDwgYmFzZU1pbikge1xuICAgICAgcmV0dXJuIHJlc01pbjtcbiAgICB9XG4gICAgaWYgKG51bSA+IGJhc2VNYXgpIHtcbiAgICAgIHJldHVybiByZXNNYXg7XG4gICAgfVxuICAgIHAgPSAocmVzTWF4IC0gcmVzTWluKSAvIChiYXNlTWF4IC0gYmFzZU1pbik7XG5cbiAgICByZXR1cm4gKChudW0gLSBiYXNlTWluKSAqIHApICsgcmVzTWluO1xuXG4gIH0gICAgXG4gIFxuICAvLyDmlbDlgKTjgavlsI/mlbDngrnnrKxAbuS9jeOBvuOBp+OCkuOBpOOBkeOBn+aWh+Wtl+WIl+OCkui/lOOBmVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog5YCkKE51bWJlcilcbiAgLy8gQG4gOiDlsI/mlbDngrnjga7kvY0oaW50KVxuICAvLyByZXR1cm4gOiDlpInmj5vjgZXjgozjgZ/lgKQoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWNpbWFsKG51bSwgbikge1xuICAgIHZhciBpLCBwb3M7XG4gICAgbnVtID0gU3RyaW5nKG51bSk7XG4gICAgcG9zID0gbnVtLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtLnNwbGl0KFwiLlwiKVswXTtcbiAgICB9XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIG51bSArPSBcIi5cIjtcbiAgICAgIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIG51bSArPSBcIjBcIjtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gICAgbnVtID0gbnVtLnN1YnN0cigwLCBwb3MpICsgbnVtLnN1YnN0cihwb3MsIG4gKyAxKTtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgY2xhbXAobnVtZXJhdG9yLGRlbm9taW5hdG9yLHZhbCkge1xuXG4gICAgcmV0dXJuIHZhbCAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG5cbiAgfVxuXG4gIGRlZ3JlZShyYWRpYW5zKSB7XG5cbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7IC8vMeODqeOCuOOCouODs+OBjOS9leW6puOBi1xuXG4gIH1cblxuICAvLyB0byByYWRpYW5zXG4gIHJhZGlhbihhbmdsZSkgeyBcblxuICAgIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7IC8vMeW6puS9leODqeOCuOOCouODs+OBi1xuXG4gIH1cblxuICBkaXN0KHAxLCBwMikge1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xuXG4gIH1cblxuICBhc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxMCw5LDUsMywxXG5cbiAgfVxuXG4gIGRlc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEsMyw1LDksMTBcblxuICB9XG5cbiAgLy8gbWFwKHZhbHVlLCBtaW4wMSwgbWF4MDEsIG1pbjAyLCBtYXgwMikge1xuXG4gIC8vICAgdmFyIGRpczAxID0gbWF4MDEgLSBtaW4wMTtcbiAgLy8gICB2YXIgZGlzMDIgPSBtYXgwMiAtIG1pbjAyXG5cbiAgLy8gICB2YXIgcmF0ZSA9IGRpczAyIC8gZGlzMDE7XG5cbiAgLy8gICB2YWx1ZSA9IHZhbHVlICogcmF0ZTtcblxuICAvLyAgIHJldHVybiB2YWx1ZTtcbiAgLy8gfVxuXG4gIGNvbnN0cmFpbih2YWx1ZSwgbWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KHZhbHVlLCBtaW4pKTtcblxuICAgIC8vIGlmICh2YWx1ZSA8PSBsb3cpIHZhbHVlID0gbG93O1xuICAgIC8vIGlmICh2YWx1ZSA+PSBoaWdoKSB2YWx1ZSA9IGhpZ2g7ICAgICBcbiAgICAvLyByZXR1cm4gdmFsdWU7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgQXJyYXlcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8g6YWN5YiX5YaF44Gu44Op44Oz44OA44Og44Gq5YCk44KS44Gy44Go44Gk5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJdcbiAgLy8gcmV0dXJuIDog6YWN5YiX5YaF44Gu5YCkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFyclJhbmQoYXJyKSB7XG5cbiAgICByZXR1cm4gYXJyW3RoaXMucmFuZG9tKDAsIGFyci5sZW5ndGggLSAxKV07XG5cbiAgfSAgICBcbiAgICBcbiAgLy8g6YWN5YiX44KS44Op44Oz44OA44Og44Gr5Lim44G55pu/44GIXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJcoQXJyYXkpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNodWZmbGUoYXJ5KSB7XG5cbiAgICB2YXIgYXJyID0gW107XG4gICAgYXJyID0gYXJ5LnNsaWNlKCk7XG4gICAgdmFyIGkgPSBhcnIubGVuZ3RoO1xuICAgIHdoaWxlKGkpe1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaSk7XG4gICAgICB2YXIgdCA9IGFyclstLWldO1xuICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgYXJyW2pdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbiAgLy8g44Op44Oz44OA44Og44Gq5pWw5YCk44KS5L2c44KLXG4gIHJhbmRvbUFyciAobGVuKSB7XG5cbiAgICB2YXIgYXJyID0gbmV3IEFycmF5O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgYXJyLnB1c2goaSk7XG5cbiAgICBhcnIgPSB0aGlzLnNodWZmbGVBcnkoYXJyKTtcblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG4gIC8vIG51bGzjgpLliYrpmaTjgZfjgZ/phY3liJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGFyciA6IOmFjeWIlyhBcnJheSlcbiAgLy8gcmV0dXJuIDogbnVsbOWJiumZpOOBl+OBn+mFjeWIlyhBcnJheSlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2xpY2VOdWxsKGFycikge1xuXG4gICAgdmFyIGksIGwsIGxlbjEsIG5ld0FyciwgdmFsO1xuICAgIG5ld0FyciA9IFtdO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGlmICh2YWwgIT09IG51bGwpIHtcbiAgICAgICAgbmV3QXJyLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycjtcblxuICB9ICAgIFxuICBcbiAgLy8g6YWN5YiX5YaF44Gu44OR44Op44Oh44O844K/44KS5q+U6LyD44GX44Gm44K944O844OIXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJcoQXJyYXkpXG4gIC8vIEBwYXJhIDog44OR44Op44Oh44O844K/44O85ZCNXG4gIC8vIEBkZXNjIDog6ZmN6aCG44GL44Gp44GG44GLKGJvb2xlYW4pIOODh+ODleOCqeODq+ODiOOBr+aYh+mghlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzb3J0KGFyciwgcGFyYSwgZGVzYykge1xuICAgIGlmIChkZXNjID09PSB2b2lkIDApIHtcbiAgICAgIGRlc2MgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRlc2MpIHtcbiAgICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiW3BhcmFdIC0gYVtwYXJhXTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYVtwYXJhXSAtIGJbcGFyYV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRLZXkobGlzdCx2YWx1ZSkge1xuICAgICAgdmFyIHJldHVybktleSA9IFtdO1xuICAgICAgZm9yKHZhciBrZXkgaW4gbGlzdCl7XG4gICAgICAgICAgaWYgKGxpc3Rba2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm5LZXkucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5LZXk7XG4gIH1cblxuICAvLyDjg6bjg4vjg7zjgq9JROOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1bmlxdWUoKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgfVxuICBcbiAgLy8gKipqcXVhcnnkvb/nlKhcbiAgLy8g44Oc44K/44Oz44Oi44O844OJ5aSJ5pu0XG4gIC8vIHRydWXjgarjgonjgqvjg7zjgr3jg6vjgYzjg53jgqTjg7Pjgr/jg7zjga7lvaLjgatcbiAgLy8gZmFsc2Xjgarjgonjg4fjg5Xjgqnjg6vjg4jjga7jgqvjg7zjgr3jg6vjgatcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGZsZyA6IOmBqeeUqOOBmeOCi+OBi+OBqeOBhuOBiyhib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBidXR0b25Nb2RlKGZsZykge1xuXG4gICAgaWYgKGZsZykge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBkZXZpY2VcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNEZXZpY2VTUCgpe1xuXG4gICAgdmFyIG1lZGlhID0gW1wiaXBob25lXCIsXCJpcG9kXCIsXCJpcGFkXCIsXCJhbmRyb2lkXCIsXCJkcmVhbVwiLFwiY3VwY2FrZVwiLFwiYmxhY2tiZXJyeTk1MDBcIixcImJsYWNrYmVycnk5NTMwXCIsXCJibGFja2JlcnJ5OTUyMFwiLFwiYmxhY2tiZXJyeTk1NTBcIixcImJsYWNrYmVycnk5ODAwXCIsXCJ3ZWJvc1wiLFwiaW5jb2duaXRvXCIsXCJ3ZWJtYXRlXCJdO1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChtZWRpYS5qb2luKFwifFwiKSxcImlcIik7XG5cbiAgICB2YXIgYiA9IHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcbiAgICBpZiAoYikgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZVNQJyk7XG5cbiAgICB0aGlzLmlzU1AgPSBiO1xuXG4gIH1cbiAgaXNEZXZpY2VUQUIoKXtcblxuICAgIHZhciBiID0gKHRoaXMudWEuaW5kZXhPZihcIndpbmRvd3NcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwidG91Y2hcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJpcGFkXCIpICE9IC0xXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgPT0gLTEpXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiZmlyZWZveFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJ0YWJsZXRcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJraW5kbGVcIikgIT0gLTFcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcInNpbGtcIikgIT0gLTFcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcInBsYXlib29rXCIpICE9IC0xO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlVEFCJyk7XG5cbiAgICB0aGlzLmlzVEFCID0gYjtcblxuICB9XG5cbiAgaXNEZXZpY2VNQigpe1xuXG4gICAgdmFyIGIgPSAodGhpcy51YS5pbmRleE9mKFwid2luZG93c1wiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJwaG9uZVwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImlwaG9uZVwiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiaXBvZFwiKSAhPSAtMVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwibW9iaWxlXCIpICE9IC0xKVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImZpcmVmb3hcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwibW9iaWxlXCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiYmxhY2tiZXJyeVwiKSAhPSAtMTtcbiAgICBpZiAoYikgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZU1CJyk7XG5cbiAgICB0aGlzLmlzTUIgPSBiO1xuXG4gIH1cblxuICBpc0RldmljZVBDKCl7XG5cbiAgICBpZiAoISh0aGlzLmlzU1AgfHwgdGhpcy5pc1RBQiB8fCB0aGlzLmlzTUIpKSB7XG4gICAgICBcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VQQycpO1xuICAgICAgdGhpcy5pc1BDID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcblxuICAgIH1cblxuICAgIHRoaXMuaXNQQyA9IGZhbHNlO1xuXG4gIH1cblxuICAvLyDjgrnjg57jg5XjgqnliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1NtdCgpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUG9kJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMDtcblxuICB9XG5cbiAgLy8g44K/44OW44Os44OD44OI56uv5pyr44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNUYWJsZXQoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5pc0lwYWQoKSB8fCAodGhpcy5pc0FuZHJvaWQoKSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01vYmlsZScpID09PSAtMSk7XG5cbiAgfVxuXG4gIC8vIGlQYWTliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0lwYWQoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwO1xuXG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgT1NcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gQW5kcm9pZOWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzQW5kcm9pZCgpIHtcblxuICAgIHZhciB1O1xuICAgIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHJldHVybiB1LmluZGV4T2YoJ0JsYWNrQmVycnknKSA+IDAgfHwgdS5pbmRleE9mKCdBbmRyb2lkJykgPiAwIHx8IHUuaW5kZXhPZignV2luZG93cyBQaG9uZScpID4gMDtcblxuICB9XG5cbiAgaXNpUGhvbmUoKXtcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJpcGhvbmVcIixcImlcIik7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcbiAgfVxuXG4gIC8vIGlPU+WIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSW9zKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDA7XG5cbiAgfVxuXG4gIC8vIFBTM+WIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzUHMzKCkge1xuXG4gICAgdmFyIHU7XG4gICAgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgcmV0dXJuIHUuaW5kZXhPZignUExBWVNUQVRJT04gMycpID4gMDtcblxuICB9XG4gICAgXG4gIC8vIFZJVEHliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1ZpdGEoKSB7XG5cbiAgICB2YXIgdTtcbiAgICB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICByZXR1cm4gdS5pbmRleE9mKCdQbGF5U3RhdGlvbiBWaXRhJykgPiAwO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIGJyb3dzZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElF44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZSgpIHtcblxuICAgIHZhciB1YTtcbiAgICB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ21zaWUnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZigndHJpZGVudC83JykgIT09IC0xO1xuXG4gIH1cblxuICAvLyBXSU7jgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1dpbigpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZihcIldpblwiKSAhPT0gLTE7XG5cbiAgfVxuXG4gIC8vIGdvb2dsZUNocm9tZeOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzQ2hyb21lKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAwO1xuXG4gIH0gICAgXG4gIFxuICAvLyBGaXJlRm9444GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNGRigpIHtcblxuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG5cbiAgfVxuXG4gIGlzU2FmYXJpKCl7XG5cbiAgICBpZih0aGlzLnVhLmluZGV4T2YoXCJjaHJvbWVcIikgIT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBpZih0aGlzLnVhLmluZGV4T2YoXCJsdW5hc2NhcGVcIikgIT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJzYWZhcmlcIixcImlcIik7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcblxuICB9XG5cbiAgaXNPcGVyYSgpe1xuXG4gICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJvcGVyYVwiLFwiaVwiKTtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG5cbiAgfVxuXG4gIC8vIGlPU+OBrnNhZmFyaeS7peWkluOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSU9TVWlWaWV3KCkge1xuXG4gICAgdmFyIGE7XG4gICAgYSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuICh0aGlzLmlzSW9zKCkgJiYgYS5pbmRleE9mKCdzYWZhcmknKSA9PT0gLTEpIHx8ICh0aGlzLmlzSW9zKCkgJiYgYS5pbmRleE9mKCdjcmlvcycpID4gMCkgfHwgKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ2dzYScpID4gMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgdmVyc2lvblxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSUU45Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZThVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDggJiYgbXNpZSAhPT0gMDtcblxuICB9XG4gICAgXG4gIC8vIElFOeS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWU5VW5kZXIoKSB7XG5cbiAgICB2YXIgbXNpZTtcbiAgICBtc2llID0gbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICBtc2llID0gbXNpZS5pbmRleE9mKCdtc2llJykgPiAtMSA/IHBhcnNlSW50KG1zaWUucmVwbGFjZSgvLiptc2llWyBdLywgJycpLm1hdGNoKC9eWzAtOV0rLykpIDogMDtcbiAgICByZXR1cm4gbXNpZSA8PSA5ICYmIG1zaWUgIT09IDA7XG5cbiAgfVxuXG4gIC8vIElFMTDku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llMTBVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDEwICYmIG1zaWUgIT09IDA7XG5cbiAgfVxuXG4gIC8vIElFMTHku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llMTFVbmRlcigpIHtcblxuICAgIHZhciBiID0gdGhpcy5pc0llMTBVbmRlcigpIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJ0cmlkZW50XCIpICE9IC0xKTtcbiAgICByZXR1cm4gYjtcbiAgICAvLyByZXR1cm4gdHJ1ZTtcblxuICB9XG5cbiAgLy8gZWRnZeOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRWRnZSgpIHtcblxuICAgIGxvZyh0aGlzLnVhLmluZGV4T2YoXCJBcHBsZVdlYmtpdFwiKSx0aGlzLnVhLmluZGV4T2YoXCJFZGdlXCIpLHRoaXMudWEsdGhpcy5hcHBWKTtcbiAgICB2YXIgYiA9ICh0aGlzLnVhLmluZGV4T2YoXCJhcHBsZXdlYmtpdFwiKSA+PSAwICYmIHRoaXMudWEuaW5kZXhPZihcImVkZ2VcIikgIT0gLTEpO1xuICAgIHJldHVybiBiO1xuICAgIC8vIHJldHVybiB0cnVlO1xuXG4gIH1cblxuICBpc0lFVmVyc2lvbigpe1xuXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdpZScpO1xuICAgIHRoaXMuaXNJRSA9IHRydWU7XG4gICAgICBcbiAgICBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDEwLlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTEwJyk7XG4gICAgICByZXR1cm4gJ2llMTAnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDkuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llOScpO1xuICAgICAgcmV0dXJuICdpZTknO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDguXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llOCcpOyAgXG4gICAgICByZXR1cm4gJ2llOCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgNy5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU3Jyk7XG4gICAgICByZXR1cm4gJ2llNyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgNi5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU2Jyk7XG4gICAgICByZXR1cm4gJ2llNic7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcInRyaWRlbnRcIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWUxMScpO1xuICAgICAgdGhpcy5pc0lFMTEgPSB0cnVlO1xuICAgICAgcmV0dXJuICdpZTExJztcbiAgICB9IGVsc2UgaWYgKHRoaXMudWEuaW5kZXhPZihcImFwcGxld2Via2l0XCIpID49IDAgJiYgdGhpcy51YS5pbmRleE9mKFwiZWRnZVwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc0VkZ2UnKTtcbiAgICAgIHJldHVybiAnZWRnZSc7XG4gICAgfVxuXG5cbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2llJyk7XG4gICAgdGhpcy5pc0lFID0gZmFsc2U7XG5cbiAgfVxuXG4gIGlzQW5kcm9pZFZlcnNpb24oKSB7XG5cbiAgICBpZiggdGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSA+IDAgKSB7XG5cbiAgICAgICAgdmFyIHZlcnNpb24gPSBwYXJzZUZsb2F0KHRoaXMudWEuc2xpY2UodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSs4KSk7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgICAgICBcbiAgICB9XG5cbiAgfVxuXG4gIGlzaXBob25lVmVyc2lvbigpIHtcblxuICAgIGlmKCB0aGlzLnVhLmluZGV4T2YoXCJpUGhvbmUgT1NcIikgPiAwICkge1xuXG4gICAgICAgIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdCh0aGlzLnVhLnNsaWNlKHRoaXMudWEuaW5kZXhPZihcImlQaG9uZSBPU1wiKSsxMCkpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbjtcblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBwb3J0cmFpdCAvIGxhbmRzY2FwZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNEaXJlY3Rpb24gKCkge1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChIID4gVykge1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgIH1lbHNle1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICByZXNwb25zaXZlIOaoquW5heOCkuimi+OCi1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNSZXNwb25zaXZlIChicCkge1xuXG4gICAgaWYgKGJwPT11bmRlZmluZWQpIGJwPTM3NTtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoVyA+IGJwKSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IHRydWU7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IHRydWU7XG4gICAgICB0aGlzLmlzUmVzUEMgPSBmYWxzZTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgVVJMXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIOOCr+OCqOODquaKnOOBjeWHuuOBl1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAa2V5IDog5oqc44GN5Ye644GZ44OR44Op44Oh44O844K/5ZCNKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZ2V0UXVlcnkoa2V5KSB7XG5cbiAgLy8gICB2YXIgcXMsIHJlZ2V4O1xuICAvLyAgIGtleSA9IGtleS5yZXBsYWNlKC9b4oKsW10vLCBcIuKCrOKCrOKCrFtcIikucmVwbGFjZSgvW+KCrF1dLywgXCLigqzigqzigqxdXCIpO1xuICAvLyAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIlvigqzigqw/Jl1cIiArIGtleSArIFwiPShbXiYjXSopXCIpO1xuICAvLyAgIHFzID0gcmVnZXguZXhlYyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIC8vICAgaWYgKHFzID09PSBudWxsKSB7XG4gIC8vICAgICByZXR1cm4gXCJcIjtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgcmV0dXJuIHFzWzFdO1xuICAvLyAgIH1cblxuICAvLyB9XG5cbiAgZ2V0UGFyYW0oKSB7XG5cbiAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZjtcbiAgICB2YXIgcGFyYW0gPSB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICBpZiAocGFyYW09PXVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgcGFyYW1JdGVtcyA9IHBhcmFtLnNwbGl0KCcmJyk7XG4gICAgdmFyIGxpc3QgPSB7fTtcbiAgXG4gICAgZm9yKCB2YXIgaSA9IDA7IGk8cGFyYW1JdGVtcy5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgIHBhcmFtSXRlbSA9IHBhcmFtSXRlbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgbGlzdFtwYXJhbUl0ZW1bMF1dID0gcGFyYW1JdGVtWzFdO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG5cbiAgfVxuICBcbiAgLy8g44OP44OD44K344Ol5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IGxvY2F0aW9uLmhhc2jjga4j44KS5YmK6Zmk44GX44Gf44KE44GkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhhc2goKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcblxuICB9XG5cbiAgLy8gY29va2ll5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBrZXkgOiDjg5Hjg6njg6Hjg7zjgr/lkI1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0Q29va2llKGtleSkge1xuXG4gICAgdmFyIGEsIGFyciwgaSwgbCwgbGVuMSwgdmFsO1xuICAgIGlmIChkb2N1bWVudC5jb29raWUgPT09IHZvaWQgMCB8fCBkb2N1bWVudC5jb29raWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcbiAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGFyci5sZW5ndGg7IGwgPCBsZW4xOyBpID0gKytsKSB7XG4gICAgICB2YWwgPSBhcnJbaV07XG4gICAgICBhID0gdmFsLnNwbGl0KFwiPVwiKTtcbiAgICAgIGlmIChhWzBdID09PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGFbMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG4gIH0gICAgICBcblxuICAvLyBjb29raWXoqK3lrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAvLyBAdmFsIDog5YCkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldENvb2tpZShrZXksIHZhbCkge1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgdmFsO1xuXG4gIH1cbiAgXG4gIGlzUENTUCgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuXG4gICAgaWYgKCF0aGlzLmlzUEMgJiYgIXRoaXMuaXNUQUIgJiYgKHVybC5pbmRleE9mKCdwYycpICE9IC0xKSkge1xuXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc1BDICYmIHVybC5pbmRleE9mKCdwYycpID09IC0xKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbi9wYy8nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc1RBQiAmJiB1cmwuaW5kZXhPZigncGMnKSA9PSAtMSkge1xuXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4vcGMvJztcbiAgICBcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaXNDb250YWluKHVybCwncm91bGV0dGUnKSkgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuJztcbiAgICBpZiAodGhpcy5pc0NvbnRhaW4odXJsLCd0b3BpY3MnKSkgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuJztcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb2xvclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyByZ2LjgYvjgolIRVjjgqvjg6njg7zlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHIgOiAwfjI1NVxuICAvLyBAZyA6IDB+MjU1XG4gIC8vIEBiIDogMH4yNTVcbiAgLy8gcmV0dXJuIDogZXggXCIjRkZGRkZGXCJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SGV4Q29sb3IocixnLGIpIHtcbiAgICAgIHZhciBzdHI7XG4gICAgICBzdHIgPSAociA8PCAxNiB8IGcgPDwgOCB8IGIpLnRvU3RyaW5nKDE2KTtcbiAgICAgIHJldHVybiBcIiNcIiArIG5ldyBBcnJheSg3IC0gc3RyLmxlbmd0aCkuam9pbihcIjBcIikgKyBzdHI7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFN0cmluZ1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0NvbnRhaW4oc3RyLGNvbnRhaW4pIHtcblxuICAgIC8vIHN0cuOBruS4reOBqyxjb250YWlu44GM5a2Y5Zyo44GX44Gf44KJXG4gICAgaWYgKCBzdHIuaW5kZXhPZihjb250YWluKSAhPSAtMSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgLy8gMOWfi+OCgeOBpzLmoYHjgavjgZnjgovplqLmlbBcbiAgYWRkMChzdHIsbnVtPS0yKXtcbiAgICBcbiAgICByZXR1cm4gKCBcIjAwMDAwMDAwMDAwMFwiICsgc3RyICkuc3Vic3RyKCBudW0gKTtcblxuICB9XG5cbiAgZmxvYXRGb3JtYXQoIG51bWJlciwgbiApIHtcblxuICAgIHZhciBfcG93ID0gTWF0aC5wb3coIDEwICwgbiApIDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCggbnVtYmVyICogX3BvdyApIC8gX3BvdyA7XG5cbiAgfVxuICAgIFxuICAvLyDlgKTmrrXooajoqJhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJpY2UobnVtKSB7XG5cbiAgICByZXR1cm4gU3RyaW5nKG51bSkucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoPyFcXGQpKS9nLCAnJDEsJyk7XG5cbiAgfVxuXG4gIC8vIOaWh+Wtl+WIl+OCkuWPjei7olxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAc3RyIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gcmV0dXJuIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RyUmV2ZXJzZShzdHIpIHtcblxuICAgIHZhciBpLCBsZW4sIHJlcztcbiAgICByZXMgPSBcIlwiO1xuICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgaSA9IDE7XG4gICAgd2hpbGUgKGkgPD0gbGVuKSB7XG4gICAgICByZXMgKz0gc3RyLnN1YnN0cigtaSwgMSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG5cbiAgfVxuICBcbiAgLy8g5paH5a2X5YiX44Gu5YWo572u5o+bXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgIDog5paH5a2X5YiXXG4gIC8vIEBvZWcgIDog572u5o+b5YmN44Gu5paH5a2X5YiXXG4gIC8vIEBkZXN0IDog572u5o+b5b6M44Gu5paH5a2X5YiXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcGxhY2VBbGwodmFsLCBvcmcsIGRlc3QpIHtcblxuICAgIHJldHVybiB2YWwuc3BsaXQob3JnKS5qb2luKGRlc3QpO1xuXG4gIH0gICAgXG4gIFxuICBzdHJSZXBsYWNlKHN0ciwgYmVmb3JlLCBhZnRlcikge1xuXG4gICAgdmFyIHIgPSBuZXcgUmVnRXhwKCBiZWZvcmUsICdnJyk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoIHIgLCBhZnRlciApO1xuXG4gIH0gICAgXG4gIFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0Tm93KCkge1xuXG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpO1xuXG4gIH1cblxuICBlbGFwc2VkKCkge1xuXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lO1xuXG4gIH1cblxuICBtKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoIHRoaXMuZWxhcHNlZFRpbWUgKyAxMDAgLyA2MCApO1xuXG4gIH1cblxuICBzKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5lbGFwc2VkVGltZSAvIDEwMDApO1xuXG4gIH1cblxuICBtcygpIHtcblxuICAgIHJldHVybiB0aGlzLmVsYXBzZWRUaW1lO1xuICAgIFxuICB9XG5cbiAgdGltZSgpIHtcblxuICAgIHRoaXMuZ2V0Tm93KCk7XG5cbiAgICB0aGlzLmhvdXIgPSB0aGlzLm5vdy5nZXRIb3VycygpOyAgICAgICAgICAvLyDmmYJcbiAgICB0aGlzLm1pbnV0ZSA9IHRoaXMubm93LmdldE1pbnV0ZXMoKTsgICAgICAvLyDliIZcbiAgICB0aGlzLnNlY29uZCA9IHRoaXMubm93LmdldFNlY29uZHMoKTtcbiAgICB0aGlzLm1pbGxTZWNvbmQgPSB0aGlzLm5vdy5nZXRNaWxsaXNlY29uZHMoKTtcblxuICB9XG5cbiAgZGF0ZSgpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXREYXRlKCk7XG5cbiAgfVxuXG4gIG1vbnRocygpIHtcblxuICAgIHZhciBtb250aGRheXMgPSBuZXcgQXJyYXkoMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMSk7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0TW9udGgoKSArIDE7XG5cbiAgfVxuXG4gIHllYXIoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RnVsbFllYXIoKTtcblxuICB9XG5cbiAgZGF5KCkge1xuXG4gICAgLy8g5puc5pelICjml6XmnKzoqp4pXG4gICAgdmFyIHdlZWtEYXlKUCA9IFtcIuaXpVwiLFwi5pyIXCIsXCLngatcIixcIuawtFwiLFwi5pyoXCIsXCLph5FcIixcIuWcn1wiXSA7XG4gICAgdmFyIHdESiA9IHdlZWtEYXlKUFt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gICAgLy8g5puc5pelICjoi7Hoqp4pXG4gICAgdmFyIHdlZWtEYXlFTiA9IFtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSA7XG4gICAgdmFyIHdERSA9IHdlZWtEYXlFTlt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gIH1cbiAgXG4gIC8vIOaVsOaXpeW+jOOBrkRhdGXjgqrjg5bjgrjjgqfjgq/jg4jlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWZ0ZXJEYXkoZGF0ZSwgbnVtKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBOdW1iZXIobnVtKSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGEgdHlwZSBjaGVja1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc09iamVjdCh2YWx1ZSwgaWdub3JlQXJyYXkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuICB9XG5cbiAgaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9XG5cbiAgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgaXNOdWxsKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gIH1cblxuICBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIG90aGVyXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRJbWdTUFNpemUgKCR0YXJnZXQpe1xuXG4gICAgLy8gcmVzcG9uc2l2ZSBzcOOBruOBqOOBjeWHpueQhlxuICAgIGlmICghdGhpcy5pc1Jlc1NQKSByZXR1cm47XG4gICAgLy8g5LiA5bqm44Gg44GR5Yem55CGXG4gICAgLy8gaWYgKHRoaXMuaXNTZXRTUFNpemUpIHJldHVybjtcbiAgICAvLyB0aGlzLmlzU2V0U1BTaXplID0gdHJ1ZTtcblxuICAgIHZhciAkaW1nID0gJHRhcmdldCxcbiAgICAgICAgbGVuID0gJGltZy5sZW5ndGg7XG5cbiAgICAkaW1nLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgIHZhciB3ID0gTWF0aC5mbG9vcigkKHRoaXMpLndpZHRoKCkgLyAyKSxcbiAgICAgICAgICAgIGggPSBNYXRoLmZsb29yKCQodGhpcykuaGVpZ2h0KCkgLyAyKTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgJ3dpZHRoJzogdyxcbiAgICAgICAgICAgICdoZWlnaHQnOiBoLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobGVuID09IGkgKyAxKSAkKHdpbmRvdykudHJpZ2dlcignc2V0U3BaaWVFbmQnKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIOOCueODnuODm+aTjeS9nOeEoeWKuVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0UHJldmVudCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbigndG91Y2htb3ZlLm5vQ29udHJvbCcsIGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt9KTtcblxuICB9XG5cbiAgcmVtb3ZlUHJldmVudCgpIHtcblxuICAgICQod2luZG93KS5vZmYoJ3RvdWNobW92ZS5ub0NvbnRyb2wnKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICBob3N0LHByb3Rjb2xcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByb3RvY29sKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sO1xuXG4gIH1cbiAgICBcbiAgaG9zdCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAvLyByZXR1cm4gbG9jYXRpb24uaG9zdFxuXG4gIH1cblxuICBwb3J0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBvcnQ7XG5cbiAgfVxuICAgICAgICBcbiAgcGF0aCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHQoZSkge1xuXG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuXG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgZGlzYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbndoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG9sZGVyIGJyb3dzZXJzLCBJRVxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSAgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2JpbGVcbiAgICBkb2N1bWVudC5vbmtleWRvd24gID0gdGhpcy5wcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XG5cbiAgfVxuXG4gIGVuYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub253aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL1V0aWwuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBGdW5jXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5ibGFuaygpO1xuICAgIHRoaXMuZGVidWdnZXIoKTtcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuICAgIHRoaXMuZXhwYW5kalF1ZXJ5KCk7XG5cbiAgfVxuXG4gIGJsYW5rKCkge1xuXG4gICAgJCgoKT0+eyQoJy5ibGFuaycpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTt9KTtcblxuICB9XG5cbiAgZGVidWdnZXIoKSB7XG5cbiAgICAvLyDjg4fjg5Djg4PjgrDjg6Ljg7zjg4nliIfmm79cbiAgICB2YXIgUkVMRUFTRSA9IGdiLmluLmNvbmYuUkVMRUFTRTtcblxuICAgIC8vIOe9ruaPm+WvvuixoeOBruODoeOCveODg+ODieOCkumFjeWIl+OBqOOBl+OBpuS/neaMgeOBmeOCi1xuICAgIHZhciBtZXRob2RzID0gW1xuICAgICAgJ2xvZycsXG4gICAgICAnZGVidWcnLFxuICAgICAgJ2luZm8nLFxuICAgICAgJ3dhcm4nLFxuICAgICAgJ2Vycm9yJyxcbiAgICAgICdkaXInLFxuICAgICAgJ3RyYWNlJyxcbiAgICAgICdhc3NlcnQnLFxuICAgICAgJ2RpcnhtbCcsXG4gICAgICAnZ3JvdXAnLFxuICAgICAgJ2dyb3VwRW5kJyxcbiAgICAgICd0aW1lJyxcbiAgICAgICd0aW1lRW5kJyxcbiAgICAgICdjb3VudCcsXG4gICAgICAncHJvZmlsZScsXG4gICAgICAncHJvZmlsZUVuZCdcbiAgICBdO1xuXG4gICAgLy8gY29uc29sZeOBjOS9v+OBiOOBquOBhOWgtOWQiOOBr+epuuOBruOCquODluOCuOOCp+OCr+ODiOOCkuioreWumuOBl+OBpuOBiuOBj1xuICAgIGlmKCB0eXBlb2Ygd2luZG93LmNvbnNvbGUgPT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgIHdpbmRvdy5jb25zb2xlID0ge307XG4gICAgfVxuXG4gICAgLy8g5ZCE44Oh44K944OD44OJ44KSd2luZG9344G455u05o6l6L+95Yqg44GX44Gm6KGM44GPXG4gICAgZm9yKCB2YXIgaSBpbiBtZXRob2RzICl7XG4gICAgICAoZnVuY3Rpb24oIG0gKXtcblxuICAgICAgIC8vIGNvbnNvbGXjgavjgYLjgovvvJ/jg4fjg5Djg4PjgrDjg6Ljg7zjg4njga/mnInlirnvvJ9jb25zb2xl44Gu44KC44Gu44Gv6Zai5pWw77yfXG4gICAgICAgaWYoIGNvbnNvbGVbbV0gJiYgIVJFTEVBU0UgJiYgdHlwZW9mIGNvbnNvbGVbbV0gPT09IFwiZnVuY3Rpb25cIiApe1xuICAgICAgICB3aW5kb3dbbV0gPSBjb25zb2xlW21dLmJpbmQoY29uc29sZSk7XG4gICAgICAgfSBlbHNlIHvjgIAvLyBkZWJ1Z01vZGXjgYxmYWxzZSzjgoLjgZfjgY/jga/oqbLlvZPjg6Hjgr3jg4Pjg4njgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/jgIHnqbrjga7jg6Hjgr3jg4Pjg4njgpLnlKjmhI/jgZnjgotcbiAgICAgICAgd2luZG93W21dID0gZnVuY3Rpb24oKXt9O1xuICAgICAgIH1cblxuICAgICAgfSkoIG1ldGhvZHNbaV0gKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByZXBlbmQocGFyYW0pIHtcblxuICAgICQoJ2JvZHknKS5wcmVwZW5kKHBhcmFtKTtcblxuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuXG4gICAgdmFyIEZQUyA9IDEwMDAvNjA7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyBjaHJvbWXjgoTmnIDmlrDjga5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyDlj6TjgYRmaXJlZm9455SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIC8vIHNhZmFyaTbku6XliY3jgIFpT1M2IHNhZmFyaeeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIEZQUyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggdGltZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OyAgICAgIFxuXG4gIH1cblxuICBleHBhbmRqUXVlcnkoKSB7XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgIHc6MCwgXG4gICAgICBoOjAsIFxuICAgICAgYWRqdXN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdFc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdEg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgY2hlY2tDc3NCbGVuZCgpIHtcblxuICAgIGlmICgnQ1NTJyBpbiB3aW5kb3cgJiYgJ3N1cHBvcnRzJyBpbiB3aW5kb3cuQ1NTKSB7XG4gICAgICBpZiAoIXdpbmRvdy5DU1Muc3VwcG9ydHMoJ21peC1ibGVuZC1tb2RlJywgJ3NvZnQtbGlnaHQnKSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2coZ2IuaW4udS5pc0lFKTtcblxuICAgIGlmIChnYi5pbi51LmlzSUUpIHtcbiAgICAgIFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICBcbiAgICB9O1xuXG4gIH1cblxuICBub3RTYXZlSW1nKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgcGNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuXG4gICAgICAkKCgpPT57XG4gICAgICAgICQoXCJpbWdcIikub24oXCJjb250ZXh0bWVudVwiLCgpPT57XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgc3AgYW5kcm9pZFxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdmFyIHYgPSBnYi5pbi51LmlzQW5kcm9pZFZlcnNpb24oKTtcblxuICAgIGlmICh2PT11bmRlZmluZWQpIHJldHVybjtcbiAgICBpZiAodjw1KSB7XG5cbiAgICAgIHZhciB0aW1lcjtcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaHN0YXJ0XCIsKCk9PntcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgYWxlcnQoXCLnlLvlg4/jga/kv53lrZjjgafjgY3jgb7jgZvjgpNcIilcbiAgICAgICAgfSw1MDApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hlbmRcIiwoKT0+e1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSAgICAgIFxuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRnVuYy5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUmVhZHlNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBSZWFkeVBlcmNlbnQgZnJvbSAnLi4vLi4vRnVuYy9SZWFkeVBlcmNlbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkeU1nciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmNvbXBsZXRlZCA9IDA7XG4gICAgdGhpcy50b3RhbCA9IDA7XG4gICAgdGhpcy5jdXJyZW50ID0gMDtcblxuXG4gICAgdGhpcy5vbkNvbXBsZXRlZEZ1bmMgPSAoKT0+e307XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIHRoaXMucmVhZHlQZXJjZW50ID0gbmV3IFJlYWR5UGVyY2VudCgpO1xuXG4gIH1cblxuICBvbkNvbXBsZXRlKCkge1xuXG4gICAgLy8gdXBkYXRl5Yem55CG44KS44KE44KB44KLXG4gICAgZ2IuaW4udXAucmVtb3ZlKCdyZWFkeVBlcmNlbnQnLCB0aGlzLnJlYWR5UGVyY2VudC51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyDmupblgpnlrozkuoblvozjga7lh6bnkIZcbiAgICB0aGlzLm9uQ29tcGxldGVkRnVuYygpO1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvUmVhZHlNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFJlYWR5UGVyY2VudFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHlQZXJjZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuJGxvYWRpbmcgPSAkKCcjbG9hZGluZycpO1xuICAgIHRoaXMuJGJhciA9ICQoJy5sb2FkaW5nQmFyJyk7XG4gICAgdGhpcy4kcGVyY2VudCA9ICQoJy5sb2FkaW5nUGVyY2VudCcpO1xuXG4gICAgdGhpcy5pc0xvY2sgPSBmYWxzZTtcbiAgICB0aGlzLnNldFRpbWVvdXRMb2NrID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBpZiAoIWdiLmluLmNvbmYud2ViRm9udExvYWRlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHRhcmdldCA9IChnYi5pbi5ybS5jb21wbGV0ZWQgLyBnYi5pbi5ybS50b3RhbCkgKiAxMDA7XG5cbiAgICBnYi5pbi5ybS5jdXJyZW50ICs9ICh0YXJnZXQgLSBnYi5pbi5ybS5jdXJyZW50KSAqIDAuMTtcbiAgICAvLyB0aGlzLiRiYXIuY3NzKHsgd2lkdGg6IGdiLmluLnJtLmN1cnJlbnQgKyAnJScgfSk7IC8vcGVyY2VudCDkvLjjgbDjgZlcbiAgICB0aGlzLiRwZXJjZW50LnRleHQoIE1hdGguZmxvb3IoZ2IuaW4ucm0uY3VycmVudCkgKyAnJScpO1xuXG4gICAgLy8g57WC5LqG5Yem55CGXG4gICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgPj0gMTAwICYmICF0aGlzLmlzTG9jaykge1xuICAgICAgdGhpcy5pc0xvY2sgPSB0cnVlO1xuICAgICAgZ2IuaW4ucm0ub25Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8vIGN1cnJlbnQg44GMIDk5Ljkg44KI44KK5aSn44GN44GR44KM44GwIDEwMCDjgajopovjgarjgZfjgabntYLkuoblh6bnkIbjgbhcbiAgICBpZiAoZ2IuaW4ucm0uY3VycmVudCA+IDk5LjkpIHtcbiAgICAgIGdiLmluLnJtLmN1cnJlbnQgPSAxMDA7XG4gICAgfVxuXG4gICAgLy8gaWUxMeOBryw5OeOBq+OBquOBo+OBpuOAgTXnp5LntYzjgaPjgabjgoIxMDDjgafjgarjgZHjgozjgbDjgIHlvLfliLbnmoTjgavjgIHooajnpLpcbiAgICAvLyDjgZ3jga7pmpvjgIFjb21wbGV0ZeOBl+OBpueEoeOBkeOCjOOBsOiDjOaZr+OBr+mdmeatoueUu+OBq1xuICAgIC8vIGlmIChnYi5pbi51LmlzSUUxMSkge1xuXG4gICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgPiA5OSAmJiAhdGhpcy5zZXRUaW1lb3V0TG9jaykge1xuICAgIHRoaXMuc2V0VGltZW91dExvY2sgPSB0cnVlO1xuXG4gICAgbG9nKCc5OSEhISEnKTtcbiAgICAgIC8vIGdiLmluLnJtLmN1cnJlbnQgPSA5OTtcblxuICAgICAgc2V0VGltZW91dCgoKT0+e1xuXG4gICAgICAgIGxvZygnNSEhIScpXG5cbiAgICAgICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgIT09IDEwMCkge1xuXG4gICAgICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgICAgICAgJCgnLmJnT3ZlcmxheUltZycpLmFkZENsYXNzKCdpc0FjdGl2ZScpO1xuXG4gICAgICAgICAgbG9nKCflr77lv5zvvIHvvIEnKVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gICAgICB9LDUwMDApO1xuXG4gICAgfTtcblxuICAgIC8vIH07XG5cbiAgfVxuXG4gIHJlbW92ZSgpIHtcblxuXG4gICAgVHdlZW5NYXhcbiAgICAgIC50byh0aGlzLiRsb2FkaW5nLCAyLjgsIHtcbiAgICAgICAgc2NhbGU6IDEuMixcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTooKT0+e1xuICAgICAgICAgIHRoaXMuJGxvYWRpbmcucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pICAgIFxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi51cC5hZGQoJ3JlYWR5UGVyY2VudCcsdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1JlYWR5UGVyY2VudC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDnlLvpnaLmm7TmlrDjgq/jg6njgrlcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVcGRhdGVNZ3JcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy/mm7TmlrDlm57mlbBcbiAgICB0aGlzLmNudCA9IDA7XG5cbiAgICAvL+avjuODleODrOODvOODoOWun+ihjOOBleOBm+OCi+mWouaVsOOCkuS/neaMgVxuICAgIHRoaXMudXBkYXRlTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5sZW4gPSAwO1xuICAgIHRoaXMuVGltZXIgPSBudWxsO1xuICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAg5a6f6KGM44GX44Gf44GE6Zai5pWw44KS55m76YyyXG4gICAqICBmdW5jIDog6Zai5pWwXG4gICAqL1xuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMudXBkYXRlTGlzdC5wdXNoKG9iaik7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAg5a6f6KGM44GX44Gf44GE6Zai5pWw44KS5YmK6ZmkXG4gICAqICBmdW5jIDog6Zai5pWwXG4gICAqL1xuICByZW1vdmUobmFtZSkge1xuXG4gICAgdmFyIHRhcmdldCA9IHtuYW1lOm5hbWUsZnVuYzooKT0+e319O1xuXG4gICAgVXBkYXRlTWdyLmFyclJlbW92ZSh0aGlzLnVwZGF0ZUxpc3QsIHRhcmdldCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAg5pu05pawKOeZu+mMsuOBleOCjOOBn+mWouaVsOOBrue3j+aVsOWIhuWun+ihjOOBmeOCiylcbiAgICovXG4gIHVwZGF0ZSgpIHtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy51cGRhdGVMaXN0KSB0aGlzLnVwZGF0ZUxpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDmm7TmlrDjga7lrp/ooYzplqLmlbDjga7lhoXlrrlcbiAgICovXG4gIGxvb3AoKSB7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuY250Kys7XG5cbiAgICB0aGlzLlRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICBpZiAodGhpcy5pc1N0b3ApIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuVGltZXIpO1xuICAgIFxuXG4gIH1cblxuICAvKipcbiAgICrjgIDmm7TmlrDlgZzmraJcbiAgICovXG4gIHN0b3AoKSB7XG5cbiAgICB0aGlzLmlzU3RvcCA9IHRydWU7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOabtOaWsOWGjemWi1xuICAgKi9cbiAgcmVzdW1lKCkge1xuXG4gICAgdGhpcy5pc1N0b3AgPSBmYWxzZTtcbiAgICB0aGlzLmxvb3AoKTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA6Z2Z55qE44Oh44Oz44OQ6Zai5pWwXG4gICAqL1xuICBzdGF0aWMgYXJyUmVtb3ZlKGFyciAsIHRhcmdldCkge1xuXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGNoZWNrO1xuICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgY2hlY2sgPSBhcnJbIGkgXTtcblxuICAgICAgaWYoIGNoZWNrLm5hbWUgPT0gdGFyZ2V0Lm5hbWUpe1xuICAgICAgICBhcnIuc3BsaWNlKCBpICwgMSApIDtcbiAgICAgICAgaS0tO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvVXBkYXRlTWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBSZXNpemVNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc2l6ZU1nciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnJlc2l6ZUxpc3QgPSBbXTtcbiAgICB0aGlzLndzID0ge3c6MCwgaDowLCBvbGRXOi0xLCBvbGRIOi0xfTtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKGUpe3NlbGYub25SZXNpemUuY2FsbChzZWxmLGUpO30pO1xuICAgIHRoaXMuZ2V0V2luZG93U2l6ZSgpO1xuXG4gIH1cblxuICBvblJlc2l6ZShlKSB7XG5cbiAgICB0aGlzLmdldFdpbmRvd1NpemUoKTtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5yZXNpemVMaXN0KSB0aGlzLnJlc2l6ZUxpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBXKCkge1xuXG4gICAgICByZXR1cm4gdGhpcy53cy53O1xuICAgIFxuICB9XG4gIFxuICBIKCkge1xuXG4gICAgICByZXR1cm4gdGhpcy53cy5oO1xuICBcbiAgfVxuXG4gIGdldFdpbmRvd1NpemUoKXtcblxuICAgIHZhciB3ID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLndzLm9sZFcgPSB0aGlzLndzLnc7XG4gICAgdGhpcy53cy5vbGRIID0gdGhpcy53cy5oO1xuICAgIHRoaXMud3MudyA9IHc7XG4gICAgdGhpcy53cy5oID0gaDtcblxuICB9XG5cbiAgYWRkKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLnJlc2l6ZUxpc3QucHVzaChvYmopO1xuICAgIFxuICB9XG5cbiAgcmVtb3ZlKG5hbWUpIHtcblxuICAgIFJlc2l6ZU1nci5hcnJSZW1vdmUodGhpcy5yZXNpemVMaXN0LCBuYW1lKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICDpnZnnmoTjg6Hjg7Pjg5BcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0YXRpYyBhcnJSZW1vdmUoYXJyICwgbmFtZSkge1xuXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGNoZWNrO1xuICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgY2hlY2sgPSBhcnJbIGkgXTtcblxuICAgICAgaWYoIGNoZWNrLm5hbWUgPT0gbmFtZSl7XG4gICAgICAgIGFyci5zcGxpY2UoIGkgLCAxICkgO1xuICAgICAgICBpLS07XG4gICAgICAgIGxlbi0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9SZXNpemVNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNjcm9sbE1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsTWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2Nyb2xsTGlzdCA9IFtdO1xuICAgIHRoaXMuc2Nyb2xsRW5kTGlzdCA9IFtdO1xuICAgIHRoaXMudyA9IDA7dGhpcy5oID0gMDtcbiAgICB0aGlzLnN0ID0gMDsgLy8g54++5Zyo44Guc2Nyb2xsIHRvcFxuICAgIHRoaXMuc2IgPSAwOyAvLyDnj77lnKjjga5zY3JvbGwgYm90dG9tXG4gICAgdGhpcy5zdiA9IDA7IC8vIOePvuWcqOOBruOCueOCr+ODreODvOODq+mHj1xuXG4gICAgdGhpcy5TVEFtb3VudCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuXG4gICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5nZXRXaW5kb3dTaXplKCk7XG4gICAgdGhpcy5hZGQoJ2VuZCcsdGhpcy5lbmQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG4gIGFkZChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy5zY3JvbGxMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuXG4gIHJlbW92ZShuYW1lKSB7XG5cbiAgICBTY3JvbGxNZ3IuYXJyUmVtb3ZlKHRoaXMuc2Nyb2xsTGlzdCwgbmFtZSk7XG5cbiAgfVxuXG4gIHJlbW92ZSh0YXJnZXQpIHtcblxuICAgIFNjcm9sbE1nci5hcnJSZW1vdmUodGhpcy5zY3JvbGxMaXN0LCB0YXJnZXQpO1xuXG4gIH1cblxuICBvblJlc2l6ZShlKSB7XG5cbiAgICB0aGlzLmdldFdpbmRvd1NpemUoKTtcblxuICB9XG5cbiAgb25TY3JvbGwoZSkge1xuXG4gICAgaWYgKHRoaXMuaXNTdGFydCkge1xuICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG4gICAgICAvLyBsb2coJ3Jlc2l6ZVN0YXJ0Jyk7XG4gICAgICAvLyDmnIDliJ3jgaDjgZHjga7lh6bnkIZcbiAgICB9O1xuXG4gICAgdGhpcy5zdCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB0aGlzLnNiID0gdGhpcy5zdCArIHRoaXMuaDtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zY3JvbGxMaXN0KSB0aGlzLnNjcm9sbExpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBvbk1vdXNlV2hlZWwoZSxkZWx0YSxkZWx0YVgsZGVsdGFZKSB7XG5cbiAgICB0aGlzLlNUQW1vdW50ID0gZGVsdGFZO1xuICAgIGlmIChnYi5pbi51LmlzV2luKCkpIHRoaXMuU1RBbW91bnQgKj0gNjA7XG4gICAgaWYgKGdiLmluLnUuaXNGRigpICYmICFnYi5pbi51LmlzV2luKCkpIHRoaXMuU1RBbW91bnQgKj0gNjA7XG4gICAgLy8gaWYgKE1hdGguYWJzKHRoaXMuU1RBbW91bnQpID4gMTApIHRoaXMuU1RBbW91bnQgKj0gMC40O1xuICAgIHRoaXMub2Zmc2V0ICs9IHRoaXMuU1RBbW91bnQ7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2Nyb2xsTGlzdCkgdGhpcy5zY3JvbGxMaXN0W2ldLmZ1bmMoKTtcblxuICB9XG5cbiAgZ2V0V2luZG93U2l6ZSgpe1xuXG4gICAgdGhpcy53ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIH1cblxuICBlbmQoZSkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLlRpbWVyKTtcbiAgICB0aGlzLlRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuaXNTdGFydCA9IHRydWU7XG4gICAgICAvLyBsb2coJ3Jlc2l6ZUVuZCcpO1xuXG4gICAgICBmb3IgKHZhciBpIGluIHNlbGYuc2Nyb2xsRW5kTGlzdCkgc2VsZi5zY3JvbGxFbmRMaXN0W2ldKCk7XG5cbiAgICB9LCAyMDApO1xuXG4gIH1cblxuICBhZGRGaXhlZE9iamVjdFNjcm9sbCgkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLnNjcm9sbExpc3QucHVzaChmdW5jdGlvbigpe1xuXG4gICAgICAkdGFyZ2V0LmNzcyhcImxlZnRcIiwgLSQod2luZG93KS5zY3JvbGxMZWZ0KCkpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIChlKT0+e3RoaXMub25SZXNpemUoZSk7fSk7XG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCAoZSk9Pnt0aGlzLm9uU2Nyb2xsKGUpO30pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZXdoZWVsJywgKGUsZGVsdGEsZGVsdGFYLGRlbHRhWSk9Pnt0aGlzLm9uTW91c2VXaGVlbChlLGRlbHRhLGRlbHRhWCxkZWx0YVkpO30pO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIOmdmeeahOODoeODs+ODkFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGljIGFyclJlbW92ZShhcnIgLCBuYW1lKSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSBuYW1lKXtcbiAgICAgICAgYXJyLnNwbGljZSggaSAsIDEgKSA7XG4gICAgICAgIGktLTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Njcm9sbE1nci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTW91c2VNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlTWdyIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0ID0gJChkb2N1bWVudCkpIHtcblxuICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXQ7XG5cbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG5cbiAgICB0aGlzLmN4ID0gMDtcbiAgICB0aGlzLmN5ID0gMDtcblxuICAgIHRoaXMubW91c2VNb3ZlTGlzdCA9IFt7bmFtZTonZGVmJyxmdW5jOigpPT57fX1dO1xuICAgIHRoaXMubW91c2VNb3ZlU3RhcnRMaXN0ID0gW3tuYW1lOidkZWYnLGZ1bmM6KCk9Pnt9fV07XG4gICAgdGhpcy5tb3VzZU1vdmVFbmRMaXN0ID0gW3tuYW1lOidkZWYnLGZ1bmM6KCk9Pnt9fV07XG5cbiAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xuICAgIHRoaXMuVGltZXIgPSBudWxsO1xuICAgIHRoaXMuZW5kVGltZSA9IDEwO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdGhpcy5hZGQoJ29uRW5kJywgdGhpcy5vbkVuZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgb25Ub3VjaG1vdmUoZSkge1xuXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy54ID0gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYOyBcbiAgICB0aGlzLnkgPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgfVxuXG4gIG9uTW91c2Vtb3ZlKGUpIHtcblxuICAgIC8vIGxvZyh0aGlzLm1vdXNlTW92ZUxpc3QpO1xuXG4gICAgaWYgKHRoaXMuaXNTdGFydCkge1xuICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG5cbiAgICAgIC8vIOacgOWIneOBoOOBkeOBruWHpueQhlxuICAgICAgLy8gbG9nKCdtb3ZlU3RhcnQnKTtcblxuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLm1vdXNlTW92ZVN0YXJ0TGlzdCkgdGhpcy5tb3VzZU1vdmVTdGFydExpc3RbaV0uZnVuYygpO1xuXG4gICAgfTtcblxuICAgIGlmIChlLm9mZnNldFg9PXVuZGVmaW5lZCkgeyAvLyB0aGlzIHdvcmtzIGZvciBGaXJlZm94XG4gICAgICAgdGhpcy54ID0gZS5wYWdlWCAtIHRoaXMuJHRhcmdldC5vZmZzZXQoKS5sZWZ0O1xuICAgICAgIHRoaXMueSA9IGUucGFnZVkgLSB0aGlzLiR0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAgICB9IGVsc2UgeyAvLyB3b3JrcyBpbiBHb29nbGUgQ2hyb21lXG4gICAgICAgdGhpcy54ID0gZS5wYWdlWCAtICQod2luZG93KS5zY3JvbGxMZWZ0KCk7XG4gICAgICAgdGhpcy55ID0gZS5wYWdlWSAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgfVxuXG4gICAgdGhpcy5jeCA9ICggZS5jbGllbnRYIC0gZ2IuaW4uci5XKCkvMiApO1xuICAgIHRoaXMuY3kgPSAoIGUuY2xpZW50WSAtIGdiLmluLnIuSCgpLzIgKTtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5tb3VzZU1vdmVMaXN0KSB0aGlzLm1vdXNlTW92ZUxpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBvbkVuZChlKSB7XG5cbiAgICBpZiAodGhpcy5UaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuVGltZXIpO1xuICAgIHRoaXMuVGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xuXG4gICAgICAvLyBsb2coJ21vdmVFbmQnKTtcblxuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLm1vdXNlTW92ZUVuZExpc3QpIHRoaXMubW91c2VNb3ZlRW5kTGlzdFtpXS5mdW5jKCk7XG5cbiAgICB9LCB0aGlzLmVuZFRpbWUpO1xuXG4gIH1cblxuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMubW91c2VNb3ZlTGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cbiBcbiAgYWRkU3RhcnQgKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLm1vdXNlTW92ZVN0YXJ0TGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cblxuICBhZGRFbmQgKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLm1vdXNlTW92ZUVuZExpc3QucHVzaChvYmopO1xuICAgIFxuICB9XG5cbiAgcmVtb3ZlKG5hbWUpIHtcblxuICAgIE1vdXNlTWdyLmFyclJlbW92ZSh0aGlzLm1vdXNlTW92ZUxpc3QsIG5hbWUpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIOmdmeeahOODoeODs+ODkFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGljIGFyclJlbW92ZShhcnIgLCBuYW1lKSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSBuYW1lKXtcbiAgICAgICAgYXJyLnNwbGljZSggaSAsIDEgKSA7XG4gICAgICAgIGktLTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCl7XG5cbiAgICB0aGlzLiR0YXJnZXQub2ZmKFwidG91Y2htb3ZlLk1vdXNlTWdyXCIpO1xuICAgIHRoaXMuJHRhcmdldC5vZmYoXCJtb3VzZW1vdmUuTW91c2VNZ3JcIik7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpe1xuXG4gICAgdGhpcy4kdGFyZ2V0Lm9uKFwidG91Y2htb3ZlLk1vdXNlTWdyXCIsIChlKT0+e3RoaXMub25Ub3VjaG1vdmUoZSk7fSk7XG4gICAgdGhpcy4kdGFyZ2V0Lm9uKFwibW91c2Vtb3ZlLk1vdXNlTWdyXCIsIChlKT0+e3RoaXMub25Nb3VzZW1vdmUoZSk7fSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9Nb3VzZU1nci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTG9hZE1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlci5qcyc7XG5pbXBvcnQgU2VjMDFWaWRlbyBmcm9tICcuLi9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkTWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICAvLyDjgZ3jga7ku5ZcbiAgICAvLyDjgr3jg7zjgrfjg6Pjg6vjgrnjgq/jg6rjg5fjg4jjgarjgalcbiAgICAvLyB0aGlzLnNuc1NjcmlwdCgpO1xuXG4gICAgLy8gdGhpcy5sb2FkWW91dHViZVNjcmlwdCgpO1xuXG4gICAgLy8gc2VjdGlvbjAy44Gn5L2/44GG5aSn6YeP44Gu55S75YOP44KS44Ot44O844OJIC8vIHdlYiB3b3JrZXLjgarjganjgoLkvb/jgaPjgaZcbiAgICAvLyB0aGlzLnNlYzAySW1nKCk7XG5cbiAgICAvLyB0aGlzLndlYkZvbnQoKTtcblxuICB9XG5cbiAgbG9hZFlvdXR1YmVTY3JpcHQoKSB7XG5cbiAgICB2YXIgbG9hZGVyID0gbmV3IExvYWRlcigpO1xuXG4gICAgdmFyIGxlbiA9IDE7XG4gICAgZ2IuaW4ucm0udG90YWwgKz0gbGVuOyAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcbiAgICBpZiAoZ2IuaW4udS5pc1NQKSBnYi5pbi5ybS5jb21wbGV0ZWQrKztcblxuICAgIHZhciBjYiA9ICgpPT57XG5cbiAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuXG4gICAgfVxuXG4gICAgbG9hZGVyLnlvdXR1YmVJZnJhbWVTY3JpcHQoY2IpO1xuXG4gIH1cblxuICBzZWMwMkltZygpIHtcblxuICAgIC8vIGJnVmlkZW9UaWxl55So44Gu6YCj55Wq55S75YOP44Gu6Kqt44G/6L6844G/XG4gICAgZ2IuaW4ubG9hZFNlYzAySW1nID0gdGhpcy5sb2FkZXIgPSBuZXcgTG9hZGVyKCk7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG4gICAgICB2YXIgbGVuID0gZ2IuaW4uY29uZi5zZWMwMkltZ051bTtcbiAgICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjvjgIAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcbiAgICAgIHZhciBwYXRoID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9tb3ZpZS9iZ0ltZy8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGVuID0gMTk7XG4gICAgICBnYi5pbi5ybS50b3RhbCArPSBsZW4744CALy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG4gICAgICB2YXIgcGF0aCA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvbW92aWUvYmdJbWdTUC8nO1xuICAgIH1cblxuICAgIHZhciBjYiA9ICgpPT57XG4gICAgICAvLyBnYi5pbi5TZWMwMkJnLmNyZWF0ZSgpO1xuICAgIH1cbiAgICB2YXIgY2IwMiA9ICgpPT57XG4gICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICB9XG5cbiAgICAvLyB0aGlzLmxvYWRlci5pbWdTZXJpYWxMb2FkKGxlbixwYXRoLCd0Zm55XycsY2IsY2IwMik7XG4gICAgdGhpcy5sb2FkZXIuaW1nKGxlbisxLHBhdGgsJ3RmbnlfJyxjYixjYjAyKTtcblxuICB9XG5cbiAgc2VjdGlvbjA0UHJvZHVjdFNoYWRlcigpIHtcblxuICAgIHZhciBzaGFkZXJzID0gW107XG4gICAgdmFyIHNoYWRlckxvYWRMaXN0ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5DbG9jayxcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGdiLlBsYXNtYSxcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuU2VwaWEsXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGdiLk1vc2FpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgZ2IuWm9vbUJsdXIsXG4gICAgICAgICAgICAgICAgICAgICAgIGdiLlpvb21CbHVyLFxuICAgICAgICAgICAgICAgICAgICAgICBnYi5UcmFuc2l0aW9uMDIsXG4gICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgdmFyIGxlbiA9IHNoYWRlckxvYWRMaXN0Lmxlbmd0aDtcbiAgICBnYi5pbi5ybS50b3RhbCArPSBsZW47IC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuXG4gICAgdmFyIHNoYWRlclNlcmlhbExvYWQgPSAobGVuLCBjYik9PntcblxuICAgICAgICB2YXIgc2hhZGVyLGNudD0wO1xuXG4gICAgICAgIHZhciBsb2FkID0gKGkpPT57XG4gICAgICAgICAgc2hhZGVyID0gbmV3IHNoYWRlckxvYWRMaXN0W2ldKGNvbXApO1xuICAgICAgICAgIHNoYWRlcnMucHVzaChzaGFkZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjb21wID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICBjbnQrKztcbiAgICAgICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICAgICAgICBpZihjbnQgPT0gbGVuKSBjYihzaGFkZXJzKTtcbiAgICAgICAgICBlbHNlIGxvYWQoY250KTtcbiAgICAgICAgfTtcblxuICAgICAgICBsb2FkKGNudCk7XG5cbiAgICB9XG5cbiAgICBzaGFkZXJTZXJpYWxMb2FkKHNoYWRlckxvYWRMaXN0Lmxlbmd0aCwoc2hhZGVycyk9PntcblxuICAgICAgdGhpcy5zaGFkZXJzID0gc2hhZGVycztcbiAgICAgIHRoaXMuc2VjdGlvbjA0UHJvZHVjdEltZygpO1xuXG4gICAgfSlcblxuICB9XG5cbiAgc2VjdGlvbjA0UHJvZHVjdEltZygpIHtcblxuICAgIHZhciB0ZXh0dXJlTGlzdCA9IFtcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC90aWZmYW55X2hhbmQxLmpwZycsXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3QvYnJvd24ucG5nJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC9ibHVlLnBuZycsXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3Qvd2hpdGUucG5nJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC90aWZmYW55Ymx1ZS5wbmcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L3BpbmsucG5nJyxcbiAgICBdOyAgICAgIFxuICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcblxuICAgIHZhciBsZW4gPSB0ZXh0dXJlTGlzdC5sZW5ndGg7XG4gICAgZ2IuaW4ucm0udG90YWwgKz0gbGVuOyAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcblxuICAgIHZhciB0ZXh0dXJlU2VyaWFsTG9hZCA9IChsZW4sIGNiKT0+e1xuXG4gICAgICB2YXIgdGV4dHVyZSxjbnQ9MDtcblxuICAgICAgdmFyIGxvYWQgPSAoaSk9PntcbiAgICAgICAgdGV4dHVyZSA9IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUodGV4dHVyZUxpc3RbaV0sIG51bGwgLGNvbXApO1xuICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2godGV4dHVyZSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY29tcCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNudCsrO1xuICAgICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICAgICAgaWYoY250ID09IGxlbikgY2IoKTtcbiAgICAgICAgZWxzZSBsb2FkKGNudCk7XG4gICAgICB9O1xuXG4gICAgICBsb2FkKGNudCk7XG5cbiAgICB9XG5cbiAgICB0ZXh0dXJlU2VyaWFsTG9hZCh0ZXh0dXJlTGlzdC5sZW5ndGgsICgpPT57JCh3aW5kb3cpLnRyaWdnZXIoJ29uU2VjdGlvbjA0UHJvZHVjdEltZycpO30pO1xuXG4gIH1cblxuICB3ZWJGb250KCkge1xuXG4gICAgLy8gd2ViIGZvbnQgbG9hZGVy55SocGFyYW1cbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgY3VzdG9tOiB7XG4gICAgICAgIGZhbWlsaWVzOiBbXG4gICAgICAgICAgJ0Nvcm1vcmFudCcsXG4gICAgICAgICAgJ1JvYm90byBDb25kZW5zZWQnXG4gICAgICAgICAgLy8gJ05vdG8gU2FucyBKYXBhbmVzZScsXG4gICAgICAgICAgLy8gJ1JvYm90bycsXG4gICAgICAgICAgLy8gJ0FsZWdyZXlhIFNhbnMnLFxuICAgICAgICAgIC8vICdBbGVncmV5YSBTYW5zIFNDJ1xuICAgICAgICAgIF0sXG4gICAgICAgIHVybHM6IFtcbiAgICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvcm1vcmFudDo1MDAsNTAwaXxSb2JvdG8rQ29uZGVuc2VkJ1xuICAgICAgICAgIC8vICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9jc3MvZm9udC5jc3MnLFxuICAgICAgICAgIC8vICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsMzAwJyxcbiAgICAgICAgICAvLyAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZWdyZXlhK1NhbnM6NDAwLDEwMCcsXG4gICAgICAgICAgLy8gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGVncmV5YStTYW5zK1NDOjQwMCwzMDAsMTAwJ1xuICAgICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBhY3RpdmU6IGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgICBcbiAgICAgICAgICBsb2coJ3dlYkZvbnQhISEhJyk7XG4gICAgICAgICAgZ2IuaW4uY29uZi53ZWJGb250TG9hZGVkID0gdHJ1ZTtcblxuICAgICAgfSBcbiAgICB9O1xuXG4gICAgdmFyIGxvYWRlciA9IG5ldyBMb2FkZXIoKTsgICBcbiAgICBsb2FkZXIud2ViRm9udChjb25maWcpO1xuXG4gIH1cblxuICBvbkVuZCgpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cblxuICAgIFxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Mb2FkTWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMb2FkZXJcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB0aGlzLmNudCA9IDA7XG5cbiAgfVxuXG4gIGpzb24oc3JjLGNiKSB7XG5cbiAgICAkLmdldEpTT04oc3JjLCAoZGF0YSk9PntcblxuICAgICAgY2IoZGF0YSk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgaW1nKGxlbiwgcGF0aCwgbmFtZSwgY2I9KCk9Pnt9LCBjYjAyPSgpPT57fSl7XG5cbiAgICB2YXIgaSwgaW1nLCBudGgsIGNudCA9IDEsIGxpc3QgPSBbXTtcblxuICAgIGZvcihpID0gMTtpIDwgbGVuO2krKyl7XG4gICAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG50aCA9IGdiLmluLnUuYWRkMChpLC01KTtcbiAgICAgIHRoaXMubGlzdC5wdXNoKGltZyk7XG4gICAgICBpbWcub25sb2FkID0gKCk9PntcbiAgICAgICAgY2IwMigpO1xuICAgICAgICBjbnQrKztcbiAgICAgICAgaWYoY250ID09IGxlbikgY2IoKTtcbiAgICAgIH1cbiAgICAgIGltZy5zcmMgPSBwYXRoK25hbWUrbnRoK1wiLmpwZ1wiO1xuICAgIH1cblxuICB9XG5cbiAgLy8gY2IwMiBsb2Fk5a6M5LqG5pmCIOmDveW6pumDveW6pueUqOOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICBpbWdTZXJpYWxMb2FkKGxlbiwgcGF0aCwgbmFtZSwgY2I9KCk9Pnt9LGNiMDI9KCk9Pnt9KXtcblxuICAgIHZhciBpLCBpbWcsIG50aCwgY250ID0gMCwgbGlzdCA9IFtdO1xuXG4gICAgdmFyIGxvYWQgPSAoaSk9PntcbiAgICAgICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG50aCA9IGdiLmluLnUuYWRkMChpLC01KTtcbiAgICAgICAgdGhpcy5saXN0LnB1c2goaW1nKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XG4gICAgICAgICAgY2IwMigpO1xuICAgICAgICAgIGNvbXAoKTtcbiAgICAgICAgfVxuICAgICAgICBpbWcuc3JjID0gcGF0aCtuYW1lK250aCtcIi5qcGdcIjtcbiAgICB9O1xuXG4gICAgdmFyIGNvbXAgPSAoKT0+e1xuICAgICAgICBjbnQrKztcbiAgICAgICAgaWYoY250ID09IGxlbil7XG4gICAgICAgICAgY2IoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbG9hZChjbnQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGxvYWQoY250KTtcbiAgfVxuXG4gIGFqYXhJbWdMb2FkKGNiKXtcblxuICAgIHZhciBpbWdOdW0gPSAkKCdpbWcnKS5sZW5ndGg7XG4gICAgdmFyIGNudCA9IDA7XG5cbiAgICAkKCdpbWcnKS5lYWNoKGZ1bmN0aW9uKGksIGVsbSkge1xuXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XG4gICAgICAgICAgY250Kys7XG4gICAgICAgICAgaWYgKGNudD09aW1nTnVtLTEpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpbWcuc3JjID0gZWxtLnNyYztcblxuICAgIH0pO1xuXG4gIH1cblxuICB2aWRlbyhzcmMsIGNiPSgpPT57fSkge1xuXG4gICAgdmFyIGlzTG9hZCA9IGZhbHNlO1xuICAgIHRoaXMudmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG4gICAgdmFyIHR5cGUgPSB0aGlzLnN1cHBvcnRWaWRlb0V4dCh0aGlzLnZpZGVvKTtcbiAgICBpZiAodHlwZSA9PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLCAoKT0+e1xuXG4gICAgICBpZiAoIXRoaXMuaXNMb2FkKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWRlby5sb29wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWRlby5wbGF5KCk7XG4gICAgICAgIGNiKCk7XG4gICAgICB9XG5cbiAgICB9LGZhbHNlKTtcblxuICAgIC8vIOODreODvOODiVxuICAgIHRoaXMudmlkZW8uc3JjID0gc3JjO1xuXG4gIH1cblxuICB5b3V0dWJlSWZyYW1lU2NyaXB0KGNiKSB7XG5cbiAgICAvLyBJRnJhbWUgUGxheWVyIEFQSSDjga7oqq3jgb/ovrzjgb9cbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgdGFnLm9ubG9hZCA9ICgpPT57XG5cbiAgICAgIGNiKCk7XG5cbiAgICB9O1xuXG4gICAgLy8gdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xuICAgIHRhZy5zcmMgPSBcImh0dHA6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xuICAgIHZhciBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcblxuXG4gICAgLy8gWW91VHViZeWLleeUu1xuICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVSZWFkeSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICBsb2coJ3lvdXR1YmVyZWFkeScpO1xuXG5cbiAgICB9XG5cbiAgfVxuXG4gIHN1cHBvcnRWaWRlb0V4dCgpIHtcblxuICAgIHZhciBleHQgPSBcIlwiO1xuICAgIGlmICh0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vd2VibVwiKSA9PSBcInByb2JhYmx5XCIgfHwgdGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL3dlYm1cIikgPT0gXCJtYXliZVwiKSB7XG4gICAgICBleHQgPSBcIndlYm1cIjtcbiAgICB9IGVsc2UgaWYodGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL21wNFwiKSA9PSBcInByb2JhYmx5XCIgfHwgdGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL21wNFwiKSA9PSBcIm1heWJlXCIpIHtcbiAgICAgIGV4dCA9IFwibXA0XCI7XG4gICAgfSBlbHNlIGlmKHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby9vZ2dcIikgPT0gXCJwcm9iYWJseVwiIHx8IHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby9vZ2dcIikgPT0gXCJtYXliZVwiKSB7XG4gICAgICBleHQgPSBcIm9nZ1wiO1xuICAgIH1cblxuICAgIHJldHVybiBleHQ7XG5cbiAgfVxuXG4gIHdlYkZvbnQoY29uZmlnKSB7XG5cbiAgICAvLyB3ZWIgZm9udCBsb2FkZXLnlKhqc+OBrmFwcGVuZFxuICAgIHZhciB3ZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHdmLnNyYyA9ICgnaHR0cHM6JyA9PSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA/ICdodHRwcycgOiAnaHR0cCcpICtcbiAgICAgICc6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy93ZWJmb250LzEvd2ViZm9udC5qcyc7XG4gICAgd2YudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHdmLmFzeW5jID0gJ3RydWUnO1xuICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod2YsIHMpO1xuXG4gICAgdmFyIGFnYWluID0gKCk9PntcblxuICAgICAgLy8geXQucGxheWVy44GMbG9hZOOBleOCjOOBpuOBhOOBquOBhOWgtOWQiOOCkuiAg+aFruOBl+OBplxuICAgICAgaWYoKHR5cGVvZiBXZWJGb250ICE9PSBcInVuZGVmaW5lZFwiKSAmJiBXZWJGb250KSB7XG5cbiAgICAgICAgICBXZWJGb250LmxvYWQoY29uZmlnKTtcblxuICAgICAgfWVsc2V7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGFnYWluLCAxMDApO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBhZ2FpbigpOyAgICBcblxuICB9XG5cbiAgb25Mb2FkZWQoKSB7XG5cbiAgICAkKCdodG1sJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKGxlbikge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkZWQnLCAoZXZlbnQpPT57XG4gICAgICBcbiAgICAgIHNlbGYuY250Kys7XG4gICAgICBpZiAoc2VsZi5jbnQgPT0gbGVuKSBvbkxvYWRlZCgpO1xuXG4gICAgfSk7XG4gICAgICBcbiAgfSBcblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Mb2FkZXIuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNlYzAxVmlkZW9cbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgWW91dHViZUZvclNlYzAxIGZyb20gJy4vWW91dHViZUZvclNlYzAxLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjMDFWaWRlbyB7XG5cbiAgY29uc3RydWN0b3IocGFyYW0pe1xuXG4gICAgLy8gc2VjMDF2aWRlb+eUqFxuICAgIGdiLmluLnJtLnRvdGFsKys7XG4gICAgaWYgKGdiLmluLnUuaXNTUCkgZ2IuaW4ucm0uY29tcGxldGVkKys7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyBjcmVhdGVcbiAgICB0aGlzLnZpZGVvID0gbmV3IFlvdXR1YmVGb3JTZWMwMSgnc2VjMDFWaWRlbycsIGdiLmluLmNvbmYueW91dHViZUlEMDEsIG51bGwpO1xuICAgIFxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvU2VjMDFWaWRlby5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgWW91dHViZUZvclNlYzAxXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgRnVsbFNpemUgZnJvbSAnLi4vLi4vTXlMaWJzL0Rpc3BsYXkvTGF5b3V0L0Z1bGxTaXplLmpzJztcbmltcG9ydCBUb3BUaW1lIGZyb20gJy4uLy4uL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFlvdXR1YmVGb3JTZWMwMSB7XG5cbiAgY29uc3RydWN0b3IoaWQsdmlkZW9JRCx2aWRlb0xpc3QpIHtcblxuICAgIHRoaXMucGxheWVyID0gbnVsbDtcblxuICAgIHRoaXMuaXNGaXJzdCA9IHRydWU7XG4gICAgdGhpcy5pc1NlZWtMb2NrID0gZmFsc2U7XG4gICAgdGhpcy5pc1NlZWtMb2NrMDIgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0dXAoaWQsdmlkZW9JRCx2aWRlb0xpc3QpO1xuXG4gIH1cblxuICBzZXR1cChpZCx2aWRlb0lELHZpZGVvTGlzdCkge1xuXG4gICAgLy8geXQucGxheWVy77+977+9bG9hZO+/ve+/ve+/ve+/vcak77+977+9yqTvv73vv73vv73vv73PpPK/vJFd77+977+977+977+9XG4gICAgaWYoKHR5cGVvZiBZVCAhPT0gXCJ1bmRlZmluZWRcIikgJiYgWVQgJiYgWVQuUGxheWVyKXtcblxuICAgICAgICAvLyBjcmVhdGVcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgWVQuUGxheWVyKGlkLCB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLCAvLyDvv73Xpe+/vWDvv73vv71g77+9zrfvv71cbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLCAvLyDvv73Xpe+/vWDvv73vv71g77+9zrjfpO+/vVxuICAgICAgICAgICAgdmlkZW9JZDogdmlkZW9JRCwgLy8gWW91VHViZe+/ve+/vUlEXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgJ29uUmVhZHknOiB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSwgLy8g77+916Xvv71g77+977+9YO+/vc6cyoLkpKzvv73HpO+/ve+/ve+/ve+/vcik77+977+9y4xn77+977+9XG4gICAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogdGhpcy5vblBsYXllclN0YXRlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgICAgICAgIGF1dG9wbGF5OiAxLFxuICAgICAgICAgICAgICBjb250cm9sczogMCxcbiAgICAgICAgICAgICAgc2hvd2luZm86IDAsXG4gICAgICAgICAgICAgIGF1dG9oaWRlOiAxLFxuICAgICAgICAgICAgICByZWw6IDAsXG4gICAgICAgICAgICAgIGVuYWJsZWpzYXBpOiAxLFxuICAgICAgICAgICAgICBpdl9sb2FkX3BvbGljeTogMyxcbiAgICAgICAgICAgICAgZGlzYWJsZWtiOjEsXG4gICAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxuICAgICAgICAgICAgICBzdGFydDogMixcbiAgICAgICAgICAgICAgbG9vcDogMSxcbiAgICAgICAgICAgICAgLy8gcGxheWxpc3Q6IHZpZGVvTGlzdFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsYXlvdXRcbiAgICAgICAgdmFyIGwgPSBuZXcgRnVsbFNpemUoJCgnI2JnV3JhcCcpLCQoJyNzZWMwMVZpZGVvJyksMCwnRnVsbFNpemVTZWMwMVZpZGVvJyk7XG4gICAgICAgIGwudGFyZ2V0RGVmVyA9IDE5MjA7XG4gICAgICAgIGwudGFyZ2V0RGVmSCA9IDEwODA7XG4gICAgICAgIGwucnVuKCk7XG5cbiAgICB9ZWxzZXtcblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2V0dXAuYmluZCh0aGlzLGlkLHZpZGVvSUQsdmlkZW9MaXN0KSwgMTAwKTtcblxuICAgIH1cblxuXG4gIH1cblxuICBvblJlYWR5IChlKSB7XG5cbiAgICAvLyDvv73fve+/ve+/ve+/vcik77+9XG4gICAgZS50YXJnZXQuc2V0UGxheWJhY2tRdWFsaXR5KCdoaWdocmVzJyk7XG5cbiAgICAvLyB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gICAgLy8gcGxheVxuICAgIGdiLmluLnRpbWUgPSBuZXcgVG9wVGltZSgpO1xuICAgIGdiLmluLnNlYzAxVmlkZW8udmlkZW8ucGxheUJ5TllUaW1lKCk7XG5cbiAgfVxuXG4gIG9uUGxheWVyU3RhdGVDaGFuZ2UgKGUpIHtcblxuICAgIHZhciBzdGF0dXMgPSBlLmRhdGE7XG5cbiAgICAvLyDvv73vv73vv73vv73vv71L77+9y6Tvv73vv73vv73vv73IpO+/vSAwXG4gICAgaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuRU5ERUQpIHtcbiAgICAgXG4gICAgICAgIC8vIO+/vdO777+977+977+977+977+9XG4gICAgICAgIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyAvLyDvv73vv73vv73vv73vv73QpM6kyKTvv70gMVxuICAgIGlmIChzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLlBMQVlJTkcpIHtcblxuICAgICAgaWYgKHRoaXMuaXNGaXJzdCkge1xuICAgICAgICB0aGlzLmlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgICB9XG5cbiAgICAgIC8vIGUudGFyZ2V0LnBhdXNlVmlkZW8oKTtcblxuICAgIH1cblxuICAgIC8vIC8vIM2j1rnvv73QpM6kyKTvv70gMlxuICAgIC8vIGlmIChzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLlBBVVNFRCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnzaPWue+/ve+/vScpO1xuICAgIC8vIH1cblxuICAgIC8vIC8vIO+/vdClw6XVpe+/ve+/ve+/ve+/ve+/vdCkzqTIpO+/vSAzXG4gICAgLy8gaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCfvv73QpcOl1aXvv73vv73vv73vv73vv73vv70nKTtcbiAgICAvLyB9XG5cbiAgICAvLyAvLyDvv71e77+977+977+977+977+9Z++/vd+kzqTIpO+/vSA1IDXvv73vv73Wue+/vd6k77+9yKTvv73vv73vv73vv73rpKvvv73poaLvv73vv73vv73vv73vv73HpO+/vXBsYXlcbiAgICBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5DVUVEKSB7XG5cbiAgICAgICAgdGhpcy5wbGF5QnlOWVRpbWUoKTtcblxuICAgIH1cblxuXG4gICAgLy8gZm9yIHNhZmFyaSDvv73Vpe+/ve+/ve+/ve+/veulte+/ve+/ve+/ve+/ve+/vdik77+977+977+9XG4gICAgaWYgKGdiLmluLnUuaXNTYWZhcmkoKSAmJiBzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLkJVRkZFUklORykgdGhpcy5wbGF5ZXIuc2Vla1RvKHRoaXMucGxheWVyLmdldEN1cnJlbnRUaW1lKCkgKyAwLjEpO1xuXG4gIH1cblxuICBwbGF5QnlOWVRpbWUoKSB7XG5cbiAgICB2YXIgaCA9IGdiLmluLnRpbWUubnlIO1xuXG4gICAgaWYgKGggPj0gNSAmJiBoIDwgMTMpIHtcblxuICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKDApO1xuXG4gICAgfSBlbHNlIGlmIChoID49IDEzICYmIGggPCAxOCkge1xuXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8oMzYpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKDY2KTtcblxuICAgIH1cblxuICAgIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuXG5cbiAgfVxuXG4gIG9uU2VlaygpIHtcblxuICAgIHZhciBub3cgPSB0aGlzLnBsYXllci5nZXRDdXJyZW50VGltZSgpOyAgICBcblxuICAgIGlmIChub3cgPCAxLjApIHtcbiAgICAgIHRoaXMuaXNTZWVrTG9jayA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1NlZWtMb2NrMDIgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgaWYgKG5vdyA+IDkwICYmICF0aGlzLmlzU2Vla0xvY2spIHtcbiAgICB0aGlzLmlzU2Vla0xvY2sgPSB0cnVlO1xuXG4gICAgICBUd2Vlbk1heC50bygkKCcuYmdPdmVybGF5SW1nJyksIDMuMCwge1xuICAgICAgICAgIG9wYWNpdHk6IDEsIFxuICAgICAgICAgIGVhc2U6UG93ZXIzLmVhc2VJbk91dCxcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcbiAgICBpZiAobm93ID4gMS4wICYmICF0aGlzLmlzU2Vla0xvY2swMikge1xuICAgIHRoaXMuaXNTZWVrTG9jazAyID0gdHJ1ZTtcblxuICAgICAgVHdlZW5NYXgudG8oJCgnLmJnT3ZlcmxheUltZycpLCAzLjAsIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLCBcbiAgICAgICAgICBlYXNlOlBvd2VyMy5lYXNlSW5PdXQsXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi51cC5hZGQoJ1lvdXR1YmVGb3JTZWMwMScsdGhpcy5vblNlZWsuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcblxuICAgIGdiLmluLnVwLnJlbW92ZSgnWW91dHViZUZvclNlYzAxJyk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvWW91dHViZUZvclNlYzAxLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBGdWxsU2l6ZVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbFNpemUge1xuXG4gIGNvbnN0cnVjdG9yKCRXcmFwLCRUYXJnZXQsbW9kZSwgbmFtZSkge1xuXG4gICAgdGhpcy4kd3JhcCA9ICRXcmFwO1xuICAgIHRoaXMuJHRhcmdldCA9ICRUYXJnZXQ7XG5cbiAgICB0aGlzLlcgPSB0aGlzLiR3cmFwLndpZHRoKCk7XG4gICAgdGhpcy5IID0gdGhpcy4kd3JhcC5oZWlnaHQoKTtcbiAgICB0aGlzLnRhcmdldFc7XG4gICAgdGhpcy50YXJnZXRIO1xuICAgIHRoaXMudGFyZ2V0RGVmVztcbiAgICB0aGlzLnRhcmdldERlZkg7XG4gICAgdGhpcy5yYXRpb1c7XG4gICAgdGhpcy5yYXRpbztcbiAgICB0aGlzLm1sO1xuICAgIHRoaXMubXQ7XG5cbiAgICB0aGlzLm1vZGUgPSBtb2RlIHx8IDA7XG4gICAgdGhpcy5uYW1lID0gbmFtZSB8fCAnZnVsbHNpemUnO1xuXG4gICAgLy8gdGhpcy5pbml0KCk7XG4gICAgLy8gdGhpcy5ydW4oKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXRTdHlsZSgpIHtcblxuICAgIHRoaXMuJHdyYXAuY3NzKHtcbiAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgIH0pO1xuICAgIHRoaXMuJHRhcmdldC5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG5cbiAgfVxuXG4gIGdldERlZigpIHtcblxuICAgIHRoaXMudGFyZ2V0RGVmVyA9IHRoaXMuJHRhcmdldC5nZXQoMCkuY2xpZW50V2lkdGggfHwgdGhpcy4kdGFyZ2V0LmdldCgwKS53aWR0aCB8fCB0aGlzLiR0YXJnZXQud2lkdGgoKSxcbiAgICB0aGlzLnRhcmdldERlZkggPSB0aGlzLiR0YXJnZXQuZ2V0KDApLmNsaWVudEhlaWdodCB8fCB0aGlzLiR0YXJnZXQuZ2V0KDApLmhlaWdodCAgfHwgdGhpcy4kdGFyZ2V0LmhlaWdodCgpO1xuXG4gIH1cblxuICBnZXRTaXplKCkge1xuXG4gICAgdGhpcy5XID0gdGhpcy4kd3JhcC53aWR0aCgpO1xuICAgIHRoaXMuSCA9IHRoaXMuJHdyYXAuaGVpZ2h0KCk7IFxuXG4gICAgdGhpcy5yYXRpb1cgPSB0aGlzLkggLyB0aGlzLlc7XG4gICAgdGhpcy5yYXRpbyA9IHRoaXMudGFyZ2V0RGVmSCAvIHRoaXMudGFyZ2V0RGVmVyxcblxuICAgIHRoaXMubWwgPSAtICh0aGlzLnRhcmdldERlZlcgKiAodGhpcy5IIC8gdGhpcy50YXJnZXREZWZIKSkgLyAyO1xuICAgIHRoaXMubXQgPSAtICh0aGlzLnRhcmdldERlZkggKiAodGhpcy5XIC8gdGhpcy50YXJnZXREZWZXKSkgLyAyO1xuXG4gIH1cblxuICBzZXRQb3MoKXtcblxuICAgICAgaWYgKHRoaXMubW9kZSA9PSAnY292ZXInIHx8IHRoaXMubW9kZSA9PSAwKSB7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyAg5p6g44Gr44OU44OD44K/44Oq44Gr44Gq44KL44KI44GG44GrIGJhY2tncm91bmQtc2l6ZSBjb3ZlclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgaWYgKHRoaXMucmF0aW9XID4gdGhpcy5yYXRpbykge1xuXG4gICAgICAgICAgdmFyIHcgPSAodGhpcy5IIC8gdGhpcy50YXJnZXREZWZIKSAqIHRoaXMudGFyZ2V0RGVmVztcblxuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAgIC5jc3MoeydoZWlnaHQnOiB0aGlzLkh9KVxuICAgICAgICAgICAgICAuY3NzKHsnbWFyZ2luLXRvcCc6IDAsJ21hcmdpbi1sZWZ0JzogdGhpcy5tbCwndG9wJzowLCdsZWZ0JzonNTAlJywnd2lkdGgnOnd9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLnJhdGlvVyA8PSB0aGlzLnJhdGlvKSB7XG5cbiAgICAgICAgICAgIHZhciBoID0gKHRoaXMuVyAvIHRoaXMudGFyZ2V0RGVmVykgKiB0aGlzLnRhcmdldERlZkg7XG5cbiAgICAgICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgICAuY3NzKHsnd2lkdGgnOiB0aGlzLld9KVxuICAgICAgICAgICAgICAuY3NzKHsnbWFyZ2luLXRvcCc6IHRoaXMubXQsJ21hcmdpbi1sZWZ0JzogMCwndG9wJzonNTAlJywnbGVmdCc6MCwnaGVpZ2h0JzpofSk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PSAnY29udGFpbicgfHwgdGhpcy5tb2RlID09IDEpe1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gIOaeoOWGheOBq+ODlOODg+OCv+ODquWPjuOBvuOCi+OCiOOBhuOBqyBiYWNrZ3JvdW5kLXNpemUgY29udGFpblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgaWYgKHRoaXMucmF0aW9XIDwgdGhpcy5yYXRpbykge1xuXG4gICAgICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgICAgLmNzcyh7J2hlaWdodCc6IHRoaXMuSH0pXG4gICAgICAgICAgICAgIC5jc3MoeydtYXJnaW4tdG9wJzogMCwnbWFyZ2luLWxlZnQnOiB0aGlzLm1sLCd0b3AnOjAsJ2xlZnQnOic1MCUnLCd3aWR0aCc6J2F1dG8nfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5yYXRpb1cgPj0gdGhpcy5yYXRpbykge1xuXG4gICAgICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgICAgLmNzcyh7J3dpZHRoJzogdGhpcy5XfSlcbiAgICAgICAgICAgICAgLmNzcyh7J21hcmdpbi10b3AnOiB0aGlzLm10LCdtYXJnaW4tbGVmdCc6IDAsJ3RvcCc6JzUwJScsJ2xlZnQnOjAsJ2hlaWdodCc6J2F1dG8nfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9IFxuXG4gIH1cblxuICBpbml0KCkge1xuXG4gICAgdGhpcy5nZXREZWYoKTtcblxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICAgIHRoaXMuZ2V0U2l6ZSgpO1xuICAgIHRoaXMuc2V0UG9zKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKHRoaXMubmFtZSwgdGhpcy5ydW4uYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9EaXNwbGF5L0xheW91dC9GdWxsU2l6ZS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgVG9wVGltZVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gNTAwcHjku6XkuIvjgavjgarjgaPjgZ/jgonooajnpLpcbi8vICAg5pmC6KiIY291bnRcbi8vICAgY2FudmFz6KGo56S6XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFRpbWUge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkKCcudGltZVdyYXAnKTtcbiAgICB0aGlzLiRoMDEgPSB0aGlzLiR0YXJnZXQuZmluZCgnLmgwMScpO1xuICAgIHRoaXMuJGgwMiA9IHRoaXMuJHRhcmdldC5maW5kKCcuaDAyJyk7XG4gICAgdGhpcy4kbTAxID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5tMDEnKTtcbiAgICB0aGlzLiRtMDIgPSB0aGlzLiR0YXJnZXQuZmluZCgnLm0wMicpO1xuXG4gICAgdGhpcy5ueUggPSAwO1xuXG4gICAgdGhpcy5pc0FsZXJ0ID0gKGdiLmluLnIud3MuaCA8IDUwMCk/IHRydWU6IGZhbHNlO1xuXG4gICAgdGhpcy5kaXMgPSAxNDsgLy/mmYLlt65cblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgZ2IuaW4udS50aW1lKCk7XG4gICAgdmFyIGggPSBnYi5pbi51LmhvdXIgLSB0aGlzLmRpcztcbiAgICBpZiAoaDwwKSBoID0gMjQgKyBoO1xuICAgIHRoaXMubnlIID0gaDtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgLy8g6ZaT5byV44GNXG4gICAgaWYgKGdiLmluLnVwLmNudCU2MCE9PTApIHJldHVybjtcblxuXG4gICAgZ2IuaW4udS50aW1lKCk7XG5cbiAgICB2YXIgaCA9IGdiLmluLnUuaG91ciAtIHRoaXMuZGlzO1xuICAgIGlmIChoPDApIGggPSAyNCArIGg7XG5cbiAgICB0aGlzLm55SCA9IGg7XG5cbiAgICBoID0gZ2IuaW4udS5hZGQwKGgpLnNwbGl0KCcnKTtcbiAgICB2YXIgbSA9IGdiLmluLnUuYWRkMChnYi5pbi51Lm1pbnV0ZSkuc3BsaXQoJycpO1xuICAgIHZhciBzID0gZ2IuaW4udS5hZGQwKGdiLmluLnUuc2Vjb25kKS5zcGxpdCgnJyk7XG5cbiAgICB0aGlzLiRoMDEudGV4dChoWzBdKVxuICAgIHRoaXMuJGgwMi50ZXh0KGhbMV0pXG4gICAgdGhpcy4kbTAxLnRleHQobVswXSlcbiAgICB0aGlzLiRtMDIudGV4dChtWzFdKVxuXG4gICAgLy8gdGhpcy4kaDAxLnRleHQoc1swXSlcbiAgICAvLyB0aGlzLiRoMDIudGV4dChzWzFdKVxuICAgIC8vIHRoaXMuJG0wMS50ZXh0KHNbMF0pO1xuICAgIC8vIHRoaXMuJG0wMi50ZXh0KHNbMV0pO1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgICBnYi5pbi51cC5hZGQoJ1RvcFRpbWUnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIOOCs+ODs+ODnuOBruihqOekuumdnuihqOekulxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OiAtMX0pO1xuXG4gICAgdGxcbiAgICAgIC5zZXQodGhpcy4kdGFyZ2V0LmZpbmQoJy5jb2xvbicpLCB7b3BhY2l0eTogMH0pXG4gICAgICAudG8odGhpcy4kdGFyZ2V0LmZpbmQoJy5jb2xvbicpLCAwLjUsIHtvcGFjaXR5OiAxLGVhc2U6IFBvd2VyMi5lYXNlSW5PdXR9KVxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSwgMC41LCB7b3BhY2l0eTogMCxlYXNlOiBQb3dlcjIuZWFzZUluT3V0fSlcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAucmVtb3ZlKCdUb3BUaW1lJyk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU2Nyb2xsVHJhbnNpdGlvblxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVHJhbnNpdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCkge1xuXG4gICAgdGhpcy5wYWdlTGlzdCA9IHtcbiAgICAgICd0b3AnOiAwLFxuICAgICAgJ21vdmllJzogMSxcbiAgICAgICdpbnRlcnZpZXcnOiAyLFxuICAgICAgJ2hpc3RvcnknOiAzLFxuICAgIH1cblxuICAgIC8vIHZhcmlhYmxlXG4gICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICB0aGlzLm9sZCA9IG51bGw7XG4gICAgdGhpcy5uZXh0ID0gMTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGVuID0gNDtcblxuICAgIHRoaXMuaXNTd2l0Y2ggPSB0cnVlO1xuXG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgc3dpdGNoKCkge1xuXG4gICAgaWYgKCFnYi5pbi51LmlzSUUpIHZhciB2YWwgPSAzMDtcbiAgICBlbHNlIHZhciB2YWwgPSAwO1xuXG4gICAgLy8gbG9nKGdiLmluLnBqYXguaXNQamF4TG9jayx0aGlzLlNUQW1vdW50LHRoaXMuY3VycmVudCx0aGlzLmlzU3dpdGNoKTtcblxuICAgIC8vIHBqYXhsb2Nr5pmC44Gv5Yem55CG44GX44Gq44GEXG4gICAgaWYgKGdiLmluLnBqYXguaXNQamF4TG9jaykgcmV0dXJuO1xuXG4gICAgLy8g44Oa44O844K455Wq5Y+344KS5Y+W5b6XXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wYWdlTGlzdFtnYi5pbi5wamF4LmlkXTtcblxuICAgIC8v44Ob44Kk44O844Or44GMMOS7peS4iiDjgYvjgaQgY3VycmVudOOBjOS4gOeVquacgOWIneOBp+OBquOBhCDjgYvjgaQgc3dpdGNo5Y+v6IO954q25oWL44Gn44GC44KM44GwXG4gICAgaWYgKHRoaXMuU1RBbW91bnQgPiB2YWwgJiYgdGhpcy5jdXJyZW50ID4gMCAmJiB0aGlzLmlzU3dpdGNoKSB7XG5cbiAgICAgIC8vIGhpc3Rvcnnjg5rjg7zjgrjjga7jgajjgY3jga/kuIrjgrnjgq/jg63jg7zjg6vjgZfjgabjgoJpbnRlcnZpZXcgaW5kZXjjgavpo5vjgbDjgZXjgarjgYRcbiAgICAgIGlmIChnYi5pbi5wamF4LmlkPT0naGlzdG9yeScpIHJldHVybjtcblxuICAgICAgdGhpcy5pc1N3aXRjaCA9IGZhbHNlO1xuICBcbiAgICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ3ByZXYnKTtcblxuICAgICAgdmFyIHBhZ2VOYW1lID0gT2JqZWN0LmtleXModGhpcy5wYWdlTGlzdCkuZmlsdGVyKCAoa2V5KSA9PiB7IHJldHVybiB0aGlzLnBhZ2VMaXN0W2tleV0gPT09IHRoaXMuY3VycmVudCB9KVswXTtcblxuICAgICAgJCgnLnBqYXhUb18nK3BhZ2VOYW1lKS50cmlnZ2VyKCdjbGljaycpO1xuXG5cbiAgICAvL+ODm+OCpOODvOODq+OBjDDku6XkuIsg44GL44GkIGN1cnJlbnTjgYzkuIDnlarmnIDlvozjgafjgarjgYQg44GL44GkIHN3aXRjaOWPr+iDveeKtuaFi+OBp+OBguOCjOOBsFxuICAgIH0gZWxzZSBpZih0aGlzLlNUQW1vdW50IDwgLXZhbCAmJiB0aGlzLmN1cnJlbnQgPCB0aGlzLmxlbi0xICYmIHRoaXMuaXNTd2l0Y2gpIHtcblxuICAgICAgdGhpcy5pc1N3aXRjaCA9IGZhbHNlO1xuICAgICAgXG4gICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCduZXh0Jyk7XG5cbiAgICAgIHZhciBwYWdlTmFtZSA9IE9iamVjdC5rZXlzKHRoaXMucGFnZUxpc3QpLmZpbHRlciggKGtleSkgPT4geyByZXR1cm4gdGhpcy5wYWdlTGlzdFtrZXldID09PSB0aGlzLmN1cnJlbnQgfSlbMF07XG5cbiAgICAgICQoJy5wamF4VG9fJytwYWdlTmFtZSkudHJpZ2dlcignY2xpY2snKTtcblxuICAgIH07XG5cblxuICB9XG5cbiAgY2FsY3VsYXRlT3JkZXIoZGlyKSB7XG5cbiAgICB0aGlzLm9sZCA9IHRoaXMuY3VycmVudDtcblxuICAgIGlmIChkaXI9PSduZXh0Jykge1xuXG4gICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQ+dGhpcy5sZW4tMSkgdGhpcy5jdXJyZW50PXRoaXMubGVuLTE7XG4gICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5jdXJyZW50LS07XG4gICAgICBpZiAodGhpcy5jdXJyZW50PDApIHRoaXMuY3VycmVudD0wOyAgXG4gICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgfSAgICAgXG5cbiAgfVxuXG4gIG9uTW91c2VXaGVlbChlLCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpIHtcblxuICAgIC8vIG1lbnXjgYzplovjgYTjgabjgYTjgovjgajjgY3jga/jgrnjgq/jg63jg7zjg6vpgbfnp7vjgZXjgZvjgarjgYRcbiAgICBpZiAoZ2IuaW4ubWVudS5pc09wZW4pIHJldHVybjtcbiAgICAvLyByZXMgc3Djga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQKSByZXR1cm5cblxuICAgIHRoaXMuU1RBbW91bnQgPSBnYi5pbi5zLlNUQW1vdW50O1xuICAgIFxuICAgIHRoaXMuc3dpdGNoKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gICAgZ2IuaW4ucy5hZGQoJ1Njcm9sbFRyYW5zaXRpb24nLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpKTtcblxuXG4gIH1cbiAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU2Nyb2xsVHJhbnNpdGlvbi5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGFnZVRvcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuICAgIHRoaXMucmVhZHkoKTtcblxuICB9XG5cbiAgcmVhZHkoKSB7XG5cblxuICB9XG5cbiAgcGFnZXRvcCgpIHtcblxuICAgIC8vIOOCueOCr+ODreODvOODq1xuICAgIFR3ZWVuTWF4LnRvKCQoJ2JvZHksaHRtbCcpLCAwLjgsIHtcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cyAoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKCcudG9Ub3AnKS5vbignY2xpY2snLHRoaXMucGFnZXRvcC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9fcGFydHMvUGFnZVRvcC5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTbnNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IG1ldGFEYXRhIGZyb20gXCJqc29uLWxvYWRlciEuLi8uLi8uLi8uLi9lanMvaW5jL21ldGFEYXRhLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25zIHtcblxuICBjb25zdHJ1Y3RvcigkZmIsJHR3LCRsaW5lLCRtYWlsKXtcblxuICAgIHRoaXMuJGZiID0gJGZiO1xuICAgIHRoaXMuJHR3ID0gJHR3O1xuICAgIHRoaXMuJGxpbmUgPSAkbGluZTtcbiAgICB0aGlzLiRtYWlsID0gJG1haWw7XG5cbiAgICB0aGlzLmZiID0ge1xuICAgICAgJHRhcmdldDogJGZiLFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICB9XG5cbiAgICB0aGlzLnR3ID0ge1xuICAgICAgJHRhcmdldDogJHR3LFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICAgIGhhc2g6ICdoYXNoJyxcbiAgICB9XG5cbiAgICB0aGlzLmxpbmUgPSB7XG4gICAgICAkdGFyZ2V0OiAkbGluZSxcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc3dpdGNoTWV0YSgpIHtcblxuICAgIHZhciBwID0gZ2IuaW4ucGpheC5pZDtcbiAgICBpZiAocCA9PSAnaW50ZXJ2aWV3X2RldGFpbCcpIHtcblxuICAgICAgbG9nKCQoJy5zZWN0aW9uJykuaGFzQ2xhc3MoJ3NlY3Rpb24wM19kZXRhaWwwMScpKTtcbiAgICAgIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDEnKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMSc7XG4gICAgICBlbHNlIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDInKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMic7XG4gICAgICBlbHNlIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDMnKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMyc7XG4gIFxuICAgIH1cblxuICAgIC8vIHZhciBkID0gZ2IuaW4uY29uZi5tZXRhW3BdO1xuICAgIHZhciBkID0gbWV0YURhdGFbcF07XG5cbiAgICAkKCd0aXRsZScpLnRleHQoKTtcbiAgICAkKCcubWV0YURlcycpLmF0dHIoeydjb250ZW50JzogZC5kZXNjcmlwdGlvbn0pO1xuICAgICQoJy5tZXRhS2V5JykuYXR0cih7J2NvbnRlbnQnOiBkLmtleXdvcmR9KTtcblxuICAgICQoJy5mYlRpdCcpLmF0dHIoeydjb250ZW50JzogZC5mYi50aXR9KTtcbiAgICAkKCcuZmJEZXMnKS5hdHRyKHsnY29udGVudCc6IGQuZmIuZGVzfSk7XG4gICAgJCgnLmZiSW1nJykuYXR0cih7J2NvbnRlbnQnOiBkLmZiLmltZ30pO1xuICAgICQoJy5mYlVybCcpLmF0dHIoeydjb250ZW50JzogZC5mYi51cmx9KTtcblxuICAgICQoJy50d1RpdCcpLmF0dHIoeydjb250ZW50JzogZC50dy50aXR9KTtcbiAgICAkKCcudHdEZXMnKS5hdHRyKHsnY29udGVudCc6IGQudHcuZGVzfSk7XG4gICAgJCgnLnR3SW1nJykuYXR0cih7J2NvbnRlbnQnOiBkLnR3LmltZ30pO1xuICAgICQoJy50d1VybCcpLmF0dHIoeydjb250ZW50JzogZC50dy51cmx9KTtcblxuXG4gIH1cblxuICBzZXR0aW5nKCkge1xuXG4gICAgdGhpcy5mYiA9IHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuJGZiLFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICB9XG5cbiAgICB0aGlzLnR3ID0ge1xuICAgICAgJHRhcmdldDogdGhpcy4kdHcsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgaGFzaDogJ2hhc2gnLFxuICAgIH1cblxuICAgIHRoaXMubGluZSA9IHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuJGxpbmUsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgIH1cblxuICB9XG5cbiAgc2V0T2dJbWcoKSB7XG5cbiAgICAvLyAkKCcub2dJbWdfZmInKS5hdHRyKCdjb250ZW50JywgdGhpcy5mYi5pbWcpO1xuICAgIC8vICQoJy5vZ0ltZ190dycpLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnR3LmltZyk7XG5cbiAgfVxuXG4gIGp1bXBGQihlKSB7XG5cbiAgICAgIHRoaXMub3BlbldpbmRvdygnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JyArIHRoaXMuZmIudXJsKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuXG4gIGp1bXBUVyhlKSB7XG5cbiAgICB0aGlzLm9wZW5XaW5kb3coJ2h0dHA6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPScgKyB0aGlzLnR3LnVybCArICcmdGV4dD0nICsgdGhpcy50dy5kZXMpO1xuICAgIC8vIHRoaXMub3BlbldpbmRvdygnaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9JyArIHRoaXMudHcudXJsICsgJyZ0ZXh0PScgKyB0aGlzLnR3LnRleHQgKyAnJmhhc2h0YWdzPScgKyB0aGlzLnR3Lmhhc2gpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICBqdW1wTElORSgpIHtcblxuICAgICAgdGhpcy5vcGVuV2luZG93KCdodHRwOi8vbGluZS5tZS9SL21zZy90ZXh0Lz8nICsgdGhpcy5saW5lLnRpdCArICclMEEnICsgdGhpcy5saW5lLnVybCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU2VuZE1haWwoKSB7XG5cbiAgICB2YXIgYWRkcmVzcyA9ICcnO1xuICAgIHZhciBzdWIgPSAnJztcbiAgICB2YXIgYm9keSA9IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSsnXFxuJytsb2NhdGlvbi5ocmVmKTtcblxuICAgIGxvY2F0aW9uLmhyZWYgPSAnbWFpbHRvOicgKyBhZGRyZXNzICsgJz9zdWJqZWN0PScgKyBzdWIgKyAnJmJvZHk9JyArIGJvZHk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIG9wZW5XaW5kb3codXJsLCB3LCBoKSB7XG5cbiAgICAgIGlmKHcgPT09IHVuZGVmaW5lZCkgdyA9IDYwMDtcbiAgICAgIGlmKGggPT09IHVuZGVmaW5lZCkgaCA9IDYwMDtcblxuICAgICAgdmFyIGwgPSBOdW1iZXIoKHdpbmRvdy5zY3JlZW4ud2lkdGgtdykvMik7XG4gICAgICB2YXIgdCA9IE51bWJlcigod2luZG93LnNjcmVlbi5oZWlnaHQtaCkvMik7XG5cbiAgICAgIHdpbmRvdy5vcGVuKHVybCwnbmV3X3dpbmRvdycsXG4gICAgICAgICAgICAgICAgJ21lbnViYXI9bm8sJyArXG4gICAgICAgICAgICAgICAgJ3Rvb2xiYXI9bm8sJyArXG4gICAgICAgICAgICAgICAgJ3Jlc2l6YWJsZT15ZXMsJyArXG4gICAgICAgICAgICAgICAgJ3Njcm9sbGJhcnM9eWVzLCcgK1xuICAgICAgICAgICAgICAgICdoZWlnaHQ9JyArIGggKyAnLCcgK1xuICAgICAgICAgICAgICAgICd3aWR0aD0nICsgdyArICcsJyArXG4gICAgICAgICAgICAgICAgJ2xlZnQ9JyArIGwgKyAnLCcgK1xuICAgICAgICAgICAgICAgICd0b3A9JyArIHRcbiAgICAgICAgICAgICAgKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdGhpcy5mYi4kdGFyZ2V0Lm9uKCdjbGljaycsIHRoaXMuanVtcEZCLmJpbmQodGhpcykpO1xuICAgIHRoaXMudHcuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLmp1bXBUVy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmxpbmUuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLmp1bXBMSU5FLmJpbmQodGhpcykpO1xuICAgIGlmICh0aGlzLiRtYWlsKSB0aGlzLiRtYWlsLm9uKCdjbGljaycsICgpPT57dGhpcy5vblNlbmRNYWlsKCk7cmV0dXJuIGZhbHNlO30pO1xuXG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG5cbiAgICB0aGlzLmZiLiR0YXJnZXQub2ZmKCdjbGljaycpO1xuICAgIHRoaXMudHcuJHRhcmdldC5vZmYoJ2NsaWNrJyk7XG4gICAgdGhpcy5saW5lLiR0YXJnZXQub2ZmKCdjbGljaycpO1xuICAgIGlmICh0aGlzLiRtYWlsKSB0aGlzLiRtYWlsLm9mZignY2xpY2snKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9TbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZXNjcmlwdGlvblwiOiBcImRlc2N0aXB0aW9uXCIsXG5cdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcIm9ncEltZ1BhdGhcIjogXCJcIixcblx0XCJ0b3BcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwibW92aWVcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaW50ZXJ2aWV3XCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAxXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAyXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAzXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImhpc3RvcnlcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2pzb24tbG9hZGVyIS9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9lanMvaW5jL21ldGFEYXRhLmpzb25cbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RNZW51QnRuXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3ZlckVmZmVjdE1lbnVCdG4ge1xuXG4gIGNvbnN0cnVjdG9yKCR0YXJnZXQpIHtcblxuICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXRcblxuICAgIC8vIG1vdGlvblxuICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIC8vIOODoeODi+ODpeODvOOBjOmWi+OBhOOBpuOBhOOCi+OBqOOBjeOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChnYi5pbi5tZW51LmlzT3BlbikgcmV0dXJuXG5cbiAgICB2YXIgJGJhcjAxID0gJCh0aGF0KS5maW5kKCcudG9wJyk7XG4gICAgdmFyICRiYXIwMiA9ICQodGhhdCkuZmluZCgnLm1pZGRsZScpO1xuICAgIHZhciAkYmFyMDMgPSAkKHRoYXQpLmZpbmQoJy5ib3R0b20nKTtcblxuICAgIC8vIGNvdmVyIOaWh+Wtl1xuICAgIHZhciB0bDAxID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0bDAxXG4gICAgICAuc2V0KCRiYXIwMSwge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pXG4gICAgICAudG8oJGJhcjAxLCAwLjMsIHtcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0LFxuICAgICAgICBkZWxheTogMC4xNVxuICAgICAgfSlcblxuICAgIHZhciB0bDAyID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0bDAyXG4gICAgICAuc2V0KCRiYXIwMiwge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pXG4gICAgICAudG8oJGJhcjAyLCAwLjMsIHtcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0LFxuICAgICAgICBkZWxheTogMC4xXG4gICAgICB9KVxuXG4gICAgdmFyIHRsMDMgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRsMDNcbiAgICAgIC5zZXQoJGJhcjAzLCB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfSlcbiAgICAgIC50bygkYmFyMDMsIDAuMywge1xuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlSW5PdXQsXG4gICAgICAgIGRlbGF5OiAwLjJcbiAgICAgIH0pXG4gICAgXG4gIH1cblxuICBvbkxlYXZlICh0aGF0KSB7XG5cbiAgICAvLyB2YXIgJGJhcjAxID0gJCh0aGF0KS5maW5kKCcudG9wJyk7XG4gICAgLy8gdmFyICRiYXIwMiA9ICQodGhhdCkuZmluZCgnLm1pZGRsZScpO1xuICAgIC8vIHZhciAkYmFyMDMgPSAkKHRoYXQpLmZpbmQoJy5ib3R0b20nKTtcblxuICAgIC8vIC8vIGNvdmVyIOaWh+Wtl1xuICAgIC8vIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgLy8gdGxcbiAgICAvLyAgIC50bygkYmFyMDEsIDAuNSwge1xuICAgIC8vICAgICB3aWR0aDogMzAsXG4gICAgLy8gICAgICdtYXJnaW4tbGVmdCc6IC0xNSxcbiAgICAvLyAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgLy8gICAgIGRlbGF5OiAwLjEsXG4gICAgLy8gICB9KVxuXG4gICAgLy8gdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAvLyB0bFxuICAgIC8vICAgLnRvKCRiYXIwMiwgMC41LCB7XG4gICAgLy8gICAgIHdpZHRoOiAzMCxcbiAgICAvLyAgICAgJ21hcmdpbi1sZWZ0JzogLTE1LFxuICAgIC8vICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAvLyAgIH0pXG5cbiAgICAvLyB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIC8vIHRsXG4gICAgLy8gICAudG8oJGJhcjAzLCAwLjUsIHtcbiAgICAvLyAgICAgd2lkdGg6IDMwLFxuICAgIC8vICAgICAnbWFyZ2luLWxlZnQnOiAtMTUsXG4gICAgLy8gICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgIC8vICAgICBkZWxheTogMC4xNSxcbiAgICAvLyAgIH0pXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge3NlbGYub25FbnRlci5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgICQodGhpcykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7c2VsZi5vbkxlYXZlLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0TWVudUJ0bi5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RTVkdBcnJvd1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RTVkdBcnJvdyB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCkge1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldFxuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gICAgLy8g44K544Oe44Ob44Gu44Go44GN44Gv5Yem55CG44GX44Gq44GEXG4gICAgaWYgKGdiLmluLnUuaXNQQykgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kdGFyZ2V0LmZpbmQoJ3BhdGgnKSwge2RyYXdTVkc6ICcwJSAxMDAlJyxmaWxsOiAnbm9uZScsc3Ryb2tlOiAnIzAwMCd9KTsgICAgXG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICB9XG5cbiAgb25FbnRlciAodGhhdCkge1xuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgdmFyIGRpciA9ICQodGhhdCkuZGF0YSgnZGlyJyk7XG5cbiAgICAvLyDkuIrmlrnlkJFcbiAgICBpZiAoZGlyID09ICd0b3AnKSB7XG5cbiAgICAgIHRsXG4gICAgICAgIC50bygkKHRoYXQpLmZpbmQoJ3BhdGgnKSwgMC45LCB7XG4gICAgICAgICAgZHJhd1NWRzogJzAlIDMwJScsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKCQodGhhdCksIDAuOSwge1xuICAgICAgICAgIHk6IC0yMCxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuOScpXG5cbiAgICAvLyDlj7PmlrnlkJFcbiAgICB9IGVsc2UgaWYgKGRpciA9PSAncmlnaHQnKSB7XG5cbiAgICAgIHRsXG4gICAgICAgIC50bygkKHRoYXQpLmZpbmQoJ3BhdGgnKSwgMC45LCB7XG4gICAgICAgICAgZHJhd1NWRzogJzAlIDMwJScsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKCQodGhhdCksIDAuOSwge1xuICAgICAgICAgIHg6IDIwLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0sJy09MC45JylcblxuICAgIC8vIOS4i+aWueWQkVxuICAgIH0gZWxzZSBpZiAoZGlyID09ICdib3R0b20nKSB7XG5cbiAgICAgIHRsXG4gICAgICAgIC50bygkKHRoYXQpLmZpbmQoJ3BhdGgnKSwgMC45LCB7XG4gICAgICAgICAgZHJhd1NWRzogJzAlIDMwJScsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKCQodGhhdCksIDAuOSwge1xuICAgICAgICAgIHk6IDIwLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0sJy09MC45JylcblxuICAgIC8vIOW3puaWueWQkVxuICAgIH0gZWxzZSBpZiAoZGlyID09ICdsZWZ0Jykge1xuXG4gICAgICB0bFxuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCdwYXRoJyksIDAuOSwge1xuICAgICAgICAgIGRyYXdTVkc6ICcwJSAzMCUnLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKHRoYXQpLCAwLjksIHtcbiAgICAgICAgICB4OiAtMjAsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSwnLT0wLjknKVxuXG4gICAgfSBlbHNlIHtcblxuICAgIH1cbiAgICAgICAgXG4gIH1cblxuICBvbkxlYXZlICh0aGF0KSB7XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICB2YXIgZGlyID0gJCh0aGF0KS5kYXRhKCdkaXInKTtcblxuICAgIC8vIOS4iuaWueWQkVxuICAgIGlmIChkaXIgPT0gJ3RvcCcpIHtcblxuICAgICAgdGxcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgncGF0aCcpLCAwLjksIHtcbiAgICAgICAgICBkcmF3U1ZHOiAnMCUgMTAwJScsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKCQodGhhdCksIDAuOSwge1xuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSwnLT0wLjknKVxuXG4gICAgLy8g5Y+z5pa55ZCRXG4gICAgfSBlbHNlIGlmIChkaXIgPT0gJ3JpZ2h0Jykge1xuXG4gICAgICB0bFxuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCdwYXRoJyksIDAuOSwge1xuICAgICAgICAgIGRyYXdTVkc6ICcwJSAxMDAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAudG8oJCh0aGF0KSwgMC45LCB7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuOScpXG5cbiAgICAvLyDkuIvmlrnlkJFcbiAgICB9IGVsc2UgaWYgKGRpciA9PSAnYm90dG9tJykge1xuXG4gICAgICB0bFxuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCdwYXRoJyksIDAuOSwge1xuICAgICAgICAgIGRyYXdTVkc6ICcwJSAxMDAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAudG8oJCh0aGF0KSwgMC45LCB7XG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuOScpXG5cbiAgICAvLyDlt6bmlrnlkJFcbiAgICB9IGVsc2UgaWYgKGRpciA9PSAnbGVmdCcpIHtcblxuICAgICAgdGxcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgncGF0aCcpLCAwLjksIHtcbiAgICAgICAgICBkcmF3U1ZHOiAnMCUgMTAwJScsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKCQodGhhdCksIDAuOSwge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSwnLT0wLjknKVxuXG4gICAgfVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uRW50ZXIuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge3NlbGYub25MZWF2ZS5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0Fycm93LmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTWFpblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRGlzcGxheVRvcCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUb3AuanMnO1xuLy8gaW1wb3J0IERpc3BsYXlNb3ZpZSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlNb3ZpZS5qcyc7XG4vLyBpbXBvcnQgRGlzcGxheUludGVydmlldyBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlJbnRlcnZpZXcuanMnO1xuLy8gaW1wb3J0IERpc3BsYXlJbnRlcnZpZXdEZXRhaWwgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5SW50ZXJ2aWV3RGV0YWlsLmpzJztcbi8vIGltcG9ydCBEaXNwbGF5SGlzdG9yeSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlIaXN0b3J5LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vcGFnZeODmuODvOOCuOWIpeOBrklE44KS5Y+W5b6XXG4gICAgdmFyIHBhZ2UgPSAkKCdib2R5JykuZGF0YSgnaWQnKTtcblxuXHRcdC8vcGFnZeOBrklE44GU44Go44Gr55m654Gr44GZ44KL44Kv44Op44K544Gu5oyv44KK5YiG44GRXG4gICAgc3dpdGNoIChwYWdlKSB7XG5cbiAgICAgIGNhc2UgJ3RvcCc6XG5cbiAgICAgICAgbmV3IERpc3BsYXlUb3AoKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgLy8gY2FzZSAnbW92aWUnOlxuICAgICAgLy9cbiAgICAgIC8vICAgbmV3IERpc3BsYXlNb3ZpZSgpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cdFx0XHQvL1xuICAgICAgLy8gY2FzZSAnaW50ZXJ2aWV3JzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SW50ZXJ2aWV3KCk7XG5cdFx0XHQvL1xuICAgICAgLy8gICBicmVhaztcblx0XHRcdC8vXG4gICAgICAvLyBjYXNlICdpbnRlcnZpZXdfZGV0YWlsJzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SW50ZXJ2aWV3RGV0YWlsKCk7XG5cdFx0XHQvL1xuICAgICAgLy8gICBicmVhaztcblx0XHRcdC8vXG4gICAgICAvLyBjYXNlICdoaXN0b3J5JzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SGlzdG9yeSgpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuICB9XG5cbiAgb25SZW5kZXIoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1BhZ2UvTWFpbi5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRGlzcGxheVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBFZmZlY3RzIGZyb20gJy4vRWZmZWN0cy9FZmZlY3RzLmpzJztcbmltcG9ydCBTY2FsZVRvcCBmcm9tICcuLi9EaXNwbGF5L0xheW91dC9TaXplL1NjYWxlVG9wLmpzJztcbmltcG9ydCBIb3ZlckVmZmVjdFNOU1NQRm9vdGVyIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U05TU1BGb290ZXIuanMnO1xuaW1wb3J0IEhvdmVyRWZmZWN0U1ZHQXJyb3dUb3AgZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdBcnJvd1RvcC5qcyc7XG5pbXBvcnQgVG9wVGltZSBmcm9tICcuLi9EaXNwbGF5L1VJL1RvcFRpbWUuanMnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vTGF5b3V0L1Bvc3Rpb24vUG9zaXRpb24uanMnO1xuaW1wb3J0IFdlYkdMaW5pdCBmcm9tICcuL1dlYkdMaW5pdC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuXG4gICAgLy8g44Ki44OL44Oh44O844K344On44Oz44Or44O844OX44K544K/44O844OIXG4gICAgZ2IuaW4udXAubG9vcCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgLy8gZ2IuaW4ud2ViR0xpbml0ID0gbmV3IFdlYkdMaW5pdCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIFVJIC8gTGF5b3V0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gc3BcbiAgICAvLyBnYi5pbi5zY2FsZVRvcCA9IG5ldyBTY2FsZVRvcCgpO1xuICAgIC8vIGdiLmluLnBvcyA9IG5ldyBQb3NpdGlvbigpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIEVmZmVjdHNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIHNwXG4gICAgLy8gZ2IuaW4uc2xpZGVyVG9wLnNldEV2ZW50cygpO1xuICAgIC8vIGdiLmluLnNuc1NQSG92ZXJFZiA9IG5ldyBIb3ZlckVmZmVjdFNOU1NQRm9vdGVyKCQoJyNzaWRlTCcpKTtcblxuICAgIC8vIHBjXG4gICAgLy8gbmV3IEhvdmVyRWZmZWN0U1ZHQXJyb3dUb3AoJCgnLnNlY3Rpb24wMSAubmV4dCcpKTsgLy8g4oaSIFRvcE9wZW5pbmfjgbhcblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXHRcdHdpbmRvdy5jb25zb2xlLmxvZygnc3RhdGljX1J1bicpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIFVJIC8gTGF5b3V0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gc3BcbiAgICBnYi5pbi5zY2FsZVRvcCA9IG5ldyBTY2FsZVRvcCgpO1xuICAgIGdiLmluLnBvcyA9IG5ldyBQb3NpdGlvbigpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIEVmZmVjdHNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIHNwXG4gICAgZ2IuaW4uc2xpZGVyVG9wLnNldEV2ZW50cygpO1xuICAgIGdiLmluLnNuc1NQSG92ZXJFZiA9IG5ldyBIb3ZlckVmZmVjdFNOU1NQRm9vdGVyKCQoJyNzaWRlTCcpKTtcblxuICAgIC8vIHBjXG4gICAgdGhpcy5odCA9IG5ldyBIb3ZlckVmZmVjdFNWR0Fycm93VG9wKCQoJy5zZWN0aW9uMDEgLm5leHQnKSk7XG4gICAgdGhpcy5odC5hdXRvQXJyb3coKTtcbiAgICBnYi5pbi50aW1lID0gbmV3IFRvcFRpbWUoKTtcbiAgICBpZiAoZ2IuaW4uc2VjMDFWaWRlby52aWRlbykgZ2IuaW4uc2VjMDFWaWRlby52aWRlby5wbGF5QnlOWVRpbWUoKTsgLy8gc3DnlKjjgavjgoIgZ2IuaW4uc2VjMDFWaWRlb+OBjOWtmOWcqOOBmeOCi+OBi+OBqeOBhuOBi+WIpOWumlxuICAgIGlmIChnYi5pbi5zZWMwMVZpZGVvLnZpZGVvKSBnYi5pbi5zZWMwMVZpZGVvLnZpZGVvLnNldEV2ZW50cygpOyAvLyBzcOeUqOOBq+OCgiBnYi5pbi5zZWMwMVZpZGVv44GM5a2Y5Zyo44GZ44KL44GL44Gp44GG44GL5Yik5a6aXG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBFZmZlY3RzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFNlY3Rpb24wMkJnIGZyb20gJy4vMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzLmpzJztcbmltcG9ydCBTZWN0aW9uMDRQcm9kdWN0IGZyb20gJy4vMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHMuanMnO1xuaW1wb3J0IFByb2ZpbGVyIGZyb20gJy4vUHJvZmlsZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZmZlY3RzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgIHRoaXMuZG9tID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0gJyc7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5kZWJ1ZygpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gYmdcbiAgICAvLyBnYi5pbi5TZWN0aW9uMDJCZyA9IG5ldyBTZWN0aW9uMDJCZygpO1xuXG4gICAgLy8gcHJvZHVjdFxuICAgIC8vIGdiLmluLlNlY3Rpb24wNFByb2R1Y3QgPSBuZXcgU2VjdGlvbjA0UHJvZHVjdCgkKCcuc2VjdGlvbjAzJykpO1xuXG4gIH1cblxuICBkZWJ1ZygpIHtcblxuICAgIC8vIHByb2ZpbGVy6Kit5a6aXG4gICAgLy8gbmV3IFByb2ZpbGVyKCk7XG5cbiAgfVxuXG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9FZmZlY3RzLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IExvb3AgZnJvbSAnLi9DVkNvbnRlbnRzTG9vcC5qcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9DVkNvbnRlbnRzVGltZWxpbmUuanMnO1xuaW1wb3J0IENyZWF0ZUNhbnZhcyBmcm9tICcuL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5qcyc7XG5pbXBvcnQgRnVsbFNpemUgZnJvbSAnLi4vLi4vLi4vLi4vTXlMaWJzL0Rpc3BsYXkvTGF5b3V0L0Z1bGxTaXplLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1ZDb250ZW50cyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7IFxuICAgIC8vIHRoaXMuY3JlYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgICAvLyBsb29wXG4gICAgdGhpcy5sb29wID0gbmV3IExvb3AoKTtcbiAgICAvLyB0aW1lbGluZVxuICAgIHRoaXMudGltZWxpbmUgPSBuZXcgVGltZWxpbmUoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjga7jg63jg7zjg4lcbiAgICAvLyBnYi5pbi5sb2FkTWdyLnNlYzAySW1nKCk7XG4gICAgXG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICAgIC8vIGdiLmluLnJtLnRvdGFsICs9IDE7XG4gICAgLy8gY2FudmFz44Gu55Sf5oiQXG4gICAgLy8g44Os44OG44Kj44O844OK55So44GrMuWAjVxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDcmVhdGVDYW52YXMoJCgnI2JnV3JhcCAuc2VjMDJCZ0NhbnZhcycpLGdiLmluLmNvbmYuZGVmVyxnYi5pbi5jb25mLmRlZkgsKCk9PntcblxuICAgICAgdmFyIGwgPSBuZXcgRnVsbFNpemUoJCgnI2JnV3JhcCcpLCQoJy5zZWMwMkJnQ2FudmFzJyksMCwnRnVsbFNpemVTZWMwMkJnQ2FudmFzJyk7XG4gICAgICBsLnRhcmdldERlZlcgPSBnYi5pbi5jb25mLmRlZlc7XG4gICAgICBsLnRhcmdldERlZkggPSBnYi5pbi5jb25mLmRlZkg7XG4gICAgICBsLnJ1bigpO1xuXG4gICAgfSk7XG5cbiAgICAvLyB1aei/veWKoCjjgrPjg7Pjg4jjg63jg7zjg6njg7zjgIFwcm9maWxlcuOBquOBqSlcbiAgICAvLyB0aGlzLmFkZFVJKCk7XG5cblxuICB9XG5cbiAgYWRkVUkoKSB7XG5cbiAgICAvLyBwYXJhbXJ0ZXLoqr/mlbRcbiAgICAvLyBnYi5pbi5wYXJhbSA9IG5ldyBnYi5QYXJhbSgpO1xuXG4gIH1cblxuICBwbGF5KCkge1xuXG4gICAgdGhpcy5sb29wLnN0YXJ0KCk7XG4gICAgdGhpcy50aW1lbGluZS50bE1haW4ucGxheSgpO1xuXG4gIH1cblxuICBwYXVzZSgpIHtcblxuICAgIHRoaXMubG9vcC5wYXVzZSgpO1xuICAgIHRoaXMudGltZWxpbmUudGxNYWluLnBhdXNlKCk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5yLmFkZCgnY3ZDb250ZW50cycsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgLy8gZ2IuaW4uaGFzaC5vbkNoYW5nZUZ1bmNMaXN0LnB1c2godGhpcy5vblNlY3Rpb24wMi5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50cy5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgQ1ZDb250ZW50c0xvb3Bcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENWQ29udGVudHNMb29wIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuaXNBbHdheXMgPSB0cnVlO1xuICAgIHRoaXMuaXNSdW5TdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMuaXNBZGp1c3RQYXJhbSA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZSA9ICdpbml0aWFsJztcbiAgICB0aGlzLnNvbWV0aW1lc1N0YXRlID0gJ2luaXRpYWwnO1xuXG4gICAgdGhpcy5sb29wTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIGlmICh0aGlzLmlzQWx3YXlzKSB0aGlzLnJ1bkFsd2F5cygpO1xuICAgIGlmICh0aGlzLmlzUnVuU3RhdHVzKSB0aGlzLnJ1blN0YXR1cygpO1xuICAgIGlmICh0aGlzLmlzQWRqdXN0UGFyYW0pIHRoaXMucnVuQWRqdXN0UGFyYW0oKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOW4uOOBq+ihjOOBhuWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gIHJ1bkFsd2F5cygpIHtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5sb29wTGlzdCkgdGhpcy5sb29wTGlzdFtpXSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5ZCE54q25oWL44Gu5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBydW5TdGF0dXMoKSB7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PSAnaW5pdGlhbCcpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzdGFydCcpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMScpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMicpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMycpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YW5kYnknKSB7XG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc29tZXRpbWVzJykge1xuXG4gICAgICBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnbGluZVNoYWRvdycpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NwaGVyZScpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NhdGVsbGl0ZScpIHtcblxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDjg5Hjg6njg6Hjg7zjgr/oqr/mlbTnlKjlh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bkFkanVzdFBhcmFtKCkge1xuXG5cblxuICB9XG5cbiAgZHJhdygpIHtcblxuXG5cbiAgfVxuXG4gIGxvb3AoKSB7XG5cbiAgICBpZiAodGhpcy5sb29wU3RhcnQpIHtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5kcmF3KCk7XG5cbiAgICAvLyBsb2coJ3NlY3Rpb24wMicpXG5cbiAgICB9XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSB0cnVlO1xuXG4gIH1cblxuICBwYXVzZSgpIHtcblxuICAgIHRoaXMubG9vcFN0YXJ0ID0gZmFsc2U7XG5cbiAgfVxuXG4gIGFkZChmdW5jKSB7XG5cbiAgICB0aGlzLmxvb3BMaXN0LnB1c2goZnVuYyk7XG4gICAgXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBnYi5pbi51cC5hZGQoJ3NlY3Rpb24wMkJnJyx0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNMb29wLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzVGltZWxpbmVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBDVkNvbnRlbnRzVGltZWxpbmUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy50bE1haW4gPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgr/jgqTjg6Djg6njgqTjg7PjgpLmraLjgoHjgabjgYrjgY9cbiAgICB0aGlzLnRsTWFpbi5wYXVzZSgpO1xuXG4gICAgdGhpcy5iZWdpbm5pbmcoKTtcbiAgICB0aGlzLnN0ZXAwMSgpO1xuICAgIHRoaXMuc3RlcDAyKCk7XG4gICAgdGhpcy5zdGVwMDMoKTtcbiAgICB0aGlzLnN0YW5kQnkoKTtcbiAgICB0aGlzLnNvbWV0aW1lcygpO1xuXG4gIH1cblxuICBiZWdpbm5pbmcoKSB7XG5cbiAgfVxuXG4gIHN0ZXAwMSgpIHtcblxuICB9XG5cbiAgc3RlcDAyKCkge1xuXG5cbiAgfVxuXG4gIHN0ZXAwMygpIHtcblxuICAgIFxuICB9XG5cbiAgc3RhbmRCeSgpIHtcblxuXG4gIH1cblxuICAvLyDmmYLjgIVcbiAgc29tZXRpbWVzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy50bE1haW5cbiAgICAgIC5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgfSwnKz0wLjAnKSAgICBcblxuICB9XG5cbiAgb25SZXNpenNlKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIC8vIGdiLmluLnIuYWRkKCdjdlRpbWVsaW5lJywgdGhpcy5vblJlc2l6c2UuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNUaW1lbGluZS5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDcmVhdGVDYW52YXNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMuanMnO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwLHcsaCxjYj0oKT0+e30pIHtcblxuICAgIHRoaXMuYyA9IG51bGw7XG4gICAgdGhpcy5jdyA9IDA7XG4gICAgdGhpcy5jaCA9IDA7XG4gICAgXG4gICAgdGhpcy5maWxsU3R5bGUgPSAnMCwwLDAnO1xuICAgIHRoaXMuJHdyYXAgPSAkd3JhcDtcblxuICAgIHRoaXMubG9vcExpc3QgPSBbXTtcblxuICAgIC8vIOacgOWIneOCquODluOCuOOCp+OCr+ODiOeUn+aIkOOBmeOCi+OBn+OCgeOBq2Jvb2xlYW4g44GC44GI44Gm6YCG44GrXG4gICAgdGhpcy5pc1Jlc2l6ZSA9IChnYi5pbi51LmlzUmVzUEMpPyBmYWxzZTogdHJ1ZTtcblxuICAgIHRoaXMuY2IgPSBjYjtcblxuICAgIHRoaXMudyA9IDI2MDtcbiAgICB0aGlzLmggPSAxNDY7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgICB0aGlzLnNldENhbnZhc1NpemUodyxoKTtcbiAgICB0aGlzLnRpbWVsaW5lKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkgeyAvL2NhbnZhcyBmaW5nZXIgcG9pbnRcblxuICAgIHRoaXMuYyA9IG5ldyBDYW52YXMoKTtcblxuICAgIC8vIHRoaXMuYWRkT2JqZWN0cygpO1xuICAgIHRoaXMub25SZXNpemUoKTtcbiAgICBcbiAgICB0aGlzLiR3cmFwLmFwcGVuZCh0aGlzLmMuY2FudmFzKTtcblxuICAgIHRoaXMuY2IoKTtcblxuICB9XG5cbiAgYWRkT2JqZWN0cyh2eCkgeyAvL2NhbnZhcyBmaW5nZXIgcG9pbnRcblxuICAgIHRoaXMubG9vcExpc3QgPSBbXTtcblxuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHZhciBvZmZzZXRGcmFtZSA9IDA7XG4gICAgdmFyIG9mZnNldFZ4ID0gMDtcblxuICAgIHRoaXMueE51bSA9IDg7XG4gICAgdGhpcy55TnVtID0gNjtcbiAgICB0aGlzLmxlbiA9IHRoaXMueE51bSAqIHRoaXMueU51bTtcblxuICAgIHRoaXMudGlsZUxpc3QgPSBbXTtcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcbiAgICAgIHZhciB0b3RhbCA9IGdiLmluLmNvbmYuc2VjMDJJbWdOdW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0b3RhbCA9IDE5O1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgIFxuICAgICAgdGhpcy50aWxlID0gbmV3IFBsYW5lKHRoaXMuYy5jdHgsdGhpcy5maWxsU3R5bGUpO1xuXG4gICAgICB2YXIgbnRoID0gaSAlIHRoaXMueE51bTsgXG4gICAgICBpZiAobnRoID09IDApIG9mZnNldCA9IC0gNTAwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKSAtIDI1MDtcbiAgICAgIGlmIChudGggPT0gMCkgb2Zmc2V0RnJhbWUgPSBNYXRoLmZsb29yKHRvdGFsICogTWF0aC5yYW5kb20oKSk7XG4gICAgICBpZiAobnRoID09IDApIG9mZnNldFZ4ID0gdnggKyBNYXRoLmZsb29yKHZ4ICogMiAqIE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICB2YXIgeCA9IG50aCAqIHRoaXMudyArIG9mZnNldDtcbiAgICAgIHZhciB5ID0gTWF0aC5mbG9vcihpIC8gdGhpcy54TnVtKSAqIHRoaXMuaDtcblxuICAgICAgdGhpcy50aWxlLnNldHVwKHgsIHksIHRoaXMudywgdGhpcy5oLCBvZmZzZXRGcmFtZSArIG50aCAqIDMsIG9mZnNldFZ4LCBvZmZzZXQpO1xuICAgICAgdGhpcy50aWxlTGlzdC5wdXNoKHRoaXMudGlsZSk7XG4gICAgICB0aGlzLmFkZCh0aGlzLnRpbGUubG9vcC5iaW5kKHRoaXMudGlsZSkpO1xuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgc2V0Q2FudmFzU2l6ZSh3LGgpIHtcblxuICAgIHRoaXMuY3cgPSB0aGlzLmMuY2FudmFzLndpZHRoID0gdztcbiAgICB0aGlzLmNoID0gdGhpcy5jLmNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gIH1cblxuICBsb29wKCkge1xuXG4gICAgLy8gdGhpcy5jLmN0eC5jbGVhclJlY3QoMCwwLHRoaXMuY3csdGhpcy5jaCk7XG4gICAgLy8gdGhpcy5jLmN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA4KSc7XG5cbiAgICB0aGlzLmMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNiknO1xuICAgIHRoaXMuYy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY3csdGhpcy5jaCk7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMubG9vcExpc3QpIHRoaXMubG9vcExpc3RbaV0oKTtcbiAgICBcbiAgfVxuXG4gIHRpbWVsaW5lKCkge1xuXG5cbiAgfVxuXG4gIGFkZChmdW5jKSB7XG5cbiAgICB0aGlzLmxvb3BMaXN0LnB1c2goZnVuYyk7XG4gICAgXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIGxvZyhnYi5pbi51LmlzUmVzU1AsZ2IuaW4udS5pc1Jlc1BDKTtcblxuICAgIGlmIChnYi5pbi51LmlzUmVzU1AgJiYgdGhpcy5pc1Jlc2l6ZSkge1xuICAgICAgdGhpcy5pc1Jlc2l6ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmFkZE9iamVjdHMoMC41KTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy50aWxlTGlzdFtpXS5jbnRTdG9wID0gdHJ1ZTtcblxuICAgICAgfTtcblxuICAgICAgbG9nKDExMTEpXG5cbiAgICB9IGVsc2UgaWYgKGdiLmluLnUuaXNSZXNQQyAmJiAhdGhpcy5pc1Jlc2l6ZSkge1xuICAgICAgdGhpcy5pc1Jlc2l6ZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuYWRkT2JqZWN0cygwLjUpO1xuXG4gICAgICAvLyDjgrnjg57jg5vjgaDjgaPjgZ/jgonjgIHluoPjgYTooajnpLrjgafjgoLjg5Xjg6zjg7zjg6Djga7li5XjgY3jgpLmraLjgoHjgotcbiAgICAgIGlmIChnYi5pbi51LmlzU1ApIHtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGlsZUxpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgIHRoaXMudGlsZUxpc3RbaV0uY250U3RvcCA9IHRydWU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm47XG5cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy50aWxlTGlzdFtpXS5jbnRTdG9wID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgfTtcblxuXG4gICAgICBsb2coMjIyMik7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLlNlYzAyQmcubG9vcC5hZGQodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIGdiLmluLnIuYWRkKCdDcmVhdGVDYW52YXMnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DcmVhdGVDYW52YXMuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgQ2FudmFzXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgdGhpcy5jdHggPSBudWxsO1xuICAgIHRoaXMudyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIHRoaXMuaCA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXAgKCkge1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgXG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53O1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaDtcbiAgICBcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG5cbiAgICBcbiAgfVxuXG4gIGRyYXcgKCkge1xuXG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DYW52YXMuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGxhbmVcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmUge1xuXG4gIGNvbnN0cnVjdG9yKGN0eCxzdHJva2VTdHlsZSl7XG5cbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICB0aGlzLm9wID0ge3ZhbDoxfTtcblxuICAgIHRoaXMuY250ID0gMDtcblxuICAgIHRoaXMuY250U3RvcCA9IGZhbHNlO1xuXG4gICAgLy8gdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuY3JlYXRlKCk7XG5cbiAgfVxuXG4gIHNldHVwKHgsIHksIHcsIGgsIGZyYW1lU3RhcnQsIHZ4LCBvZmZzZXQpIHtcblxuICAgIHRoaXMuaW1nTGlzdCA9IGdiLmluLmxvYWRTZWMwMkltZy5saXN0O1xuXG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudyA9IHc7XG4gICAgdGhpcy5oID0gaDtcblxuICAgIHRoaXMudnggPSB2eDtcblxuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuXG4gICAgdGhpcy5jbnQgPSBmcmFtZVN0YXJ0IDtcblxuICB9XG5cbiAgY3JlYXRlKCkge1xuXG5cbiAgfVxuXG4gIC8vIOmggueCueOBp+aPj+OBj1xuICB1cGRhdGUoKSB7XG5cbiAgICB0aGlzLnggLT0gdGhpcy52eDtcbiAgICBpZiAodGhpcy54IDwgLXRoaXMudykgdGhpcy54ID0gZ2IuaW4uY2FudmFzLmN3IC0gMTA7XG5cbiAgfVxuXG4gIGRyYXcoKSB7XG5cbiAgICBpZiAoIXRoaXMuY250U3RvcCkge1xuXG4gICAgICAvLyDplpPlvJXjgY1cbiAgICAgIGlmIChnYi5pbi51cC5jbnQlMz09MCkgdGhpcy5jbnQrKztcbiAgICAgIGVsc2UgO1xuXG4gICAgfTtcbiAgICAvLyB0aGlzLmNudCsrO1xuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuICAgICAgdmFyIHRvdGFsID0gZ2IuaW4uY29uZi5zZWMwMkltZ051bTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRvdGFsID0gMTk7XG4gICAgfVxuICAgIFxuICAgIHZhciBpbWcgPSB0aGlzLmltZ0xpc3RbdGhpcy5jbnQldG90YWxdO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCk7XG4gICAgXG4gIH1cblxuICBsb29wKCkge1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmRyYXcoKTtcbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL1BsYW5lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBHbENvbnRlbnRzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IExvb3AgZnJvbSAnLi9HbENvbnRlbnRzTG9vcC5qcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9HbENvbnRlbnRzVGltZWxpbmUuanMnO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vX2RldGFpbHMvUGxhbmUuanMnO1xuaW1wb3J0IFBhcmFtIGZyb20gJy4uLy4uL1BhcmFtLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xDb250ZW50cyB7XG5cbiAgY29uc3RydWN0b3IoJHdyYXAgPSAkKCdib2R5JykpIHtcblxuICAgIHRoaXMucmVuZGVyZXI7XG4gICAgdGhpcy5jYW1lcmE7XG4gICAgdGhpcy5zY2VuZTtcbiAgICB0aGlzLmxpZ2h0O1xuXG4gICAgdGhpcy5zdGF0ZSA9ICdpbml0aWFsJztcbiAgICB0aGlzLmFkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlTGluZVJvdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmlzQ29udHJvbCA9IGZhbHNlO1xuICAgIHRoaXMuY29udHJvbHM7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5jcmVhdGUoJHdyYXApO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gICAgLy8gbG9vcFxuICAgIHRoaXMubG9vcCA9IG5ldyBMb29wKCk7XG4gICAgLy8gdGltZWxpbmVcbiAgICB0aGlzLnRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIGNyZWF0ZSgkd3JhcCkge1xuXG4gICAgLy8gcmVuZGVyXG4gICAgZ2IuaW4ucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczogdHJ1ZX0pO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggZ2IuaW4uci5XKCksIGdiLmluLnIuSCgpICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwLjApO1xuICAgICR3cmFwLmFwcGVuZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggICk7XG4gICAgJCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpLmNzcyh7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxsZWZ0OiAwLFxuICAgICAgJ3otaW5kZXgnOiAxLFxuICAgIH0pO1xuXG4gICAgLy8gc2NlbmVcbiAgICBnYi5pbi5zY2VuZSA9IG5ldyBnYi5TY2VuZSgpO1xuICAgIHRoaXMuc2NlbmUgPSBnYi5pbi5zY2VuZS5zY2VuZTtcblxuICAgIC8vIGNhbWVyYVxuICAgIGdiLmluLmNhbWVyYSA9IG5ldyBnYi5DYW1lcmEoKTtcbiAgICB0aGlzLmNhbWVyYSA9IGdiLmluLmNhbWVyYS5jYW1lcmE7XG5cbiAgICAvLyBsaWdodFxuICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDMgKTtcbiAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnogPSAzO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI6L+95YqgXG4gICAgdGhpcy5hZGRPYmplY3RzKCk7XG5cbiAgICAvLyB1aei/veWKoCjjgrPjg7Pjg4jjg63jg7zjg6njg7zjgIFwcm9maWxlcuOBquOBqSlcbiAgICAvLyB0aGlzLmFkZFVJKCk7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjga7jg63jg7zjg4lcbiAgICBnYi5pbi5sb2FkTWdyLnNlY3Rpb24wNFByb2R1Y3RTaGFkZXIoKTtcblxuICB9XG5cbiAgYWRkT2JqZWN0cygpIHtcblxuICAgIHRoaXMucGxhbmUgPSBuZXcgUGxhbmUoKTtcblxuICB9XG5cbiAgYWRkVUkoKSB7XG5cbiAgICAvLyBjb250cm9sc1xuXG4gICAgaWYgKHRoaXMuaXNDb250cm9sKSB7XG5cbiAgICAgIGdiLmluLmNvbnRyb2xzID0gdGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5UcmFja2JhbGxDb250cm9scyh0aGlzLmNhbWVyYSk7XG4gICAgICB0aGlzLmNvbnRyb2xzLnpvb21TcGVlZCA9IDAuODtcbiAgICAgIHRoaXMuY29udHJvbHMucm90YXRlU3BlZWQgPSAzO1xuXG4gICAgfTtcblxuICAgIC8vIHByb2ZpbGVy6Kit5a6aXG4gICAgbmV3IGdiLlByb2ZpbGVyKCk7XG4gICAgLy8gcGFyYW1ydGVy6Kq/5pW0XG4gICAgZ2IuaW4ucGFyYW0gPSBuZXcgUGFyYW0oKTtcblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICB2YXIgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHZhciBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHcsIGgpO1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHcgLyBoO1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICB9XG5cbiAgb25TZWN0aW9uMDQoY3VyLHByZXYpIHtcblxuICAgIGlmIChjdXIgPT0gJ3Byb2R1Y3QnKSB7XG5cbiAgICAgIHRoaXMubG9vcC5zdGFydCgpO1xuICAgICAgdGhpcy50aW1lbGluZS50bE1haW4ucGxheSgpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5sb29wLnBhdXNlKCk7XG4gICAgICB0aGlzLnRpbWVsaW5lLnRsTWFpbi5wYXVzZSgpO1xuXG4gICAgfVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCh0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICAgIGdiLmluLmhhc2gub25DaGFuZ2VGdW5jTGlzdC5wdXNoKHRoaXMub25TZWN0aW9uMDQuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdvblNlY3Rpb24wNFByb2R1Y3RJbWcnLCAoKT0+e3RoaXMudGltZWxpbmUuc2V0dXAoKTt9KTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9HbENvbnRlbnRzLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBHbENvbnRlbnRzTG9vcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xDb250ZW50c0xvb3Age1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc0Fsd2F5cyA9IHRydWU7XG4gICAgdGhpcy5pc1J1blN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy5pc0FkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlID0gJ2luaXRpYWwnO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IGZhbHNlO1xuXG4gICAgdGhpcy5sb29wTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgaWYgKHRoaXMuaXNBbHdheXMpIHRoaXMucnVuQWx3YXlzKCk7XG4gICAgaWYgKHRoaXMuaXNSdW5TdGF0dXMpIHRoaXMucnVuU3RhdHVzKCk7XG4gICAgaWYgKHRoaXMuaXNBZGp1c3RQYXJhbSkgdGhpcy5ydW5BZGp1c3RQYXJhbSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5bi444Gr6KGM44GG5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgcnVuQWx3YXlzKCkge1xuXG4gICAgaWYgKGdiLmluLlNlY3Rpb24wNFByb2R1Y3QuaXNDb250cm9sKSBnYi5pbi5jb250cm9scy51cGRhdGUoKTtcblxuICAgIC8vIGNhbWVyYVxuICAgIGdiLmluLmNhbWVyYS51cGRhdGVDb250cm9sbCgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5ZCE54q25oWL44Gu5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBydW5TdGF0dXMoKSB7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PSAnaW5pdGlhbCcpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzdGFydCcpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMScpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMicpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMycpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YW5kYnknKSB7XG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc29tZXRpbWVzJykge1xuXG4gICAgICBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnbGluZVNoYWRvdycpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NwaGVyZScpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NhdGVsbGl0ZScpIHtcblxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDjg5Hjg6njg6Hjg7zjgr/oqr/mlbTnlKjlh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bkFkanVzdFBhcmFtKCkge1xuXG5cblxuICB9XG5cbiAgZHJhdygpIHtcblxuICAgIGdiLmluLnJlbmRlcmVyLnJlbmRlciggZ2IuaW4uc2NlbmUuc2NlbmUsIGdiLmluLmNhbWVyYS5jYW1lcmEgKTtcbiAgICAvLyBnYi5pbi5wb3N0cHJvY2Vzcy5jb21wb3Nlci5yZW5kZXIoMC4xKTtcblxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIGlmICh0aGlzLmxvb3BTdGFydCkge1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmRyYXcoKTtcblxuICAgIGxvZygnc2VjdGlvbjA0JylcblxuICAgIH1cblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IHRydWU7XG5cbiAgfVxuXG4gIHBhdXNlKCkge1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSBmYWxzZTtcblxuICB9XG5cbiAgYWRkKGZ1bmMpIHtcblxuICAgIHRoaXMubG9vcExpc3QucHVzaChmdW5jKTtcbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGdiLmluLnVwLmFkZCgnc2VjdGlvbjA0UHJvZHVjdCcsdGhpcy5sb29wLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHNMb29wLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBHbENvbnRlbnRzVGltZWxpbmVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBTb21lVGltZXMgZnJvbSAnLi4vLi4vLi4vLi4vTXlMaWJzL0V2ZW50TWdyL1NvbWV0aW1lc01nci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsQ29udGVudHNUaW1lbGluZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnRsTWFpbiA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIC8vIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCv+OCpOODoOODqeOCpOODs+OCkuatouOCgeOBpuOBiuOBj1xuICAgIHRoaXMudGxNYWluLnBhdXNlKCk7XG4gICAgXG4gICAgdGhpcy5iZWdpbm5pbmcoKTtcbiAgICAvLyB0aGlzLnN0ZXAwMSgpO1xuICAgIC8vIHRoaXMuc3RlcDAyKCk7XG4gICAgLy8gdGhpcy5zdGVwMDMoKTtcbiAgICAvLyB0aGlzLnN0YW5kQnkoKTtcbiAgICB0aGlzLnNvbWV0aW1lcygpOyAgICBcblxuICB9XG5cbiAgYmVnaW5uaW5nKCkge1xuXG4gICAgdGhpcy50bE1haW5cbiAgICAgIC8vIHpvb20gaW5cbiAgICAgIC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMuc3RyZW5ndGgsIDEuMywge1xuICAgICAgICB2YWx1ZTogNTAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgb25TdGFydDogKCk9PiB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQoZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLnN0cmVuZ3RoLCB7dmFsdWU6IDUwMH0pO1xuXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIGNhbWVyYeenu+WLlVxuICAgICAgLnRvKGdiLmluLmNhbWVyYS5jYW1lcmEucG9zaXRpb24sIDEuNSwge1xuICAgICAgICB6OiAyMDAsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0XG4gICAgICB9LCctPTEuMycpXG5cbiAgICAgIC8vIHBsYW5l56e75YuVXG4gICAgICAudG8oZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS5wbGFuZS5wb3NpdGlvbiwgMS41LCB7XG4gICAgICAgIHg6IC0xMDAsXG4gICAgICAgIHk6IDIwMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXRcbiAgICAgIH0sJy09MS41JylcblxuICAgICAgLy8gem9vbSBvdXRcbiAgICAgIC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMuc3RyZW5ndGgsIDEsIHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluXG4gICAgICB9LCctPTAuNCcpXG5cbiAgICAgIC8vIHBsYW5lMDHjgYxvcGFjaXR544Gn5raI44GI44KLXG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLm9wYWNpdHksIDEsIHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW5PdXRcbiAgICAgIH0sJy09MC43JylcblxuICAgICAgLy8gcGxhbmUwMuOBrmJsdXIgb3V0XG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLnN0cmVuZ3RoLCAxLCB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgfSwnLT0xLjAnKVxuXG4gICAgICAvLyBwbGFuZTAy44GM5Ye644Gm5p2l44KLXG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLm9wYWNpdHksIDEsIHtcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0XG4gICAgICB9LCctPTEuMCcpXG5cbiAgICAgIC50byhnYi5pbi5jYW1lcmEuY2FtZXJhLnBvc2l0aW9uLCAxLjUsIHtcbiAgICAgICAgejogNDAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VPdXQsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpPT4ge1xuXG4gICAgICAgICAgLy8gbWF0ZXJpYWzjga7lpInmm7RcblxuICAgICAgICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5mcm9tLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1sxXTtcbiAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMudG8udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzJdO1xuXG4gICAgICAgICAgZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS5wbGFuZTAyLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3JtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS52cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLmZzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUwMi5zY2FsZS54ID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS5wbGFuZTAyLnNjYWxlLnkgPSAxMjAwLjA7XG5cblxuICAgICAgICB9XG4gICAgICB9LCctPTEuMCcpXG5cblxuXG4gIH1cblxuICBzdGVwMDEoKSB7XG5cblxuICB9XG5cbiAgc3RlcDAyKCkge1xuXG5cblxuICB9XG5cbiAgc3RlcDAzKCkge1xuXG5cblxuICB9XG5cbiAgc3RhbmRCeSgpIHtcblxuXG4gIH1cblxuICAvLyDmmYLjgIVcbiAgc29tZXRpbWVzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy50bE1haW5cbiAgICAgIC5hZGQoZnVuY3Rpb24oKXtcblxuXG4gICAgICAgIHZhciBzID0gbmV3IFNvbWVUaW1lcygpO1xuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLmZyb20udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzNdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgXG4gICAgICAgICAgXG5cbiAgICAgICAgfSwgMi4wLCAyLjApXG5cbiAgICAgICAgcy5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5wcm9ncmVzcywgMS4zLCB7XG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMudG8udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzRdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSwgMi4wLCAyLjApXG5cbiAgICAgICAgcy5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5wcm9ncmVzcywgMS4zLCB7XG4gICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMuZnJvbS52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbNV07XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSwgMi4wLCAyLjApXG5cbiAgICAgICAgcy5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5wcm9ncmVzcywgMS4zLCB7XG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMudG8udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzFdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSwgMi4wLCAyLjApXG5cbiAgICAgICAgcy5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5wcm9ncmVzcywgMS4zLCB7XG4gICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMuZnJvbS52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbMl07XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG5cblxuICAgICAgICB9LCAyLjAsIDIuMCk7XG5cbiAgICAgICAgcy5zdGFydCgpO1xuXG4gICAgICB9LCcrPTAuMCcpXG4gICAgXG5cbiAgfVxuXG4gIG9uUmVzaXpzZSgpIHtcblxuICB9XG5cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCh0aGlzLm9uUmVzaXpzZS5iaW5kKHRoaXMpKTtcblxuICAgICQod2luZG93KS5vbignY2xpY2snLCgpPT57XG5cbiAgICAgIC8vIHRoaXMuc3RhcnQoKTtcblxuICAgIH0pO1xuXG4gIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c1RpbWVsaW5lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTb21lVGltZXNcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbWVUaW1lcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLlNvbWVUaW1lcztcbiAgICB0aGlzLlRpbWVyID0gbnVsbDtcbiAgICB0aGlzLmNiTGlzdCA9IFtdO1xuICAgIHRoaXMubGVuID0gMDtcbiAgICB0aGlzLm9yZGVyID0gMDtcblxuICAgIHRoaXMubWluID0gW107XG4gICAgdGhpcy5tYXggPSBbXTtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgc3RhcnQobWluPTAsIG1heD0wKSB7XG5cbiAgICB0aGlzLmxhdGVyID0gZ2IuaW4udS5yYW5kb20obWluLG1heCkgKiAxMDAwO1xuICAgIHRoaXMuVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMucnVuLmJpbmQodGhpcyksdGhpcy5sYXRlcik7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIHRoaXMub3JkZXIgPSB0aGlzLm9yZGVyICUgdGhpcy5sZW47XG5cbiAgICB0aGlzLmxhdGVyID0gZ2IuaW4udS5yYW5kb20odGhpcy5taW5bdGhpcy5vcmRlcl0sdGhpcy5tYXhbdGhpcy5vcmRlcl0pICogMTAwMDtcblxuICAgIHRoaXMuY2JMaXN0W3RoaXMub3JkZXJdKCk7XG5cbiAgICB0aGlzLm9yZGVyKys7XG4gICAgdGhpcy5UaW1lciA9IHNldFRpbWVvdXQodGhpcy5ydW4uYmluZCh0aGlzKSx0aGlzLmxhdGVyKTtcblxuICB9XG5cbiAgc3RvcCgpIHtcblxuICAgIGxvZyh0aGlzLlRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5UaW1lcik7XG5cbiAgfVxuXG4gIGFkZChmdW5jLG1pbj04LG1heD0xMikge1xuXG4gICAgdGhpcy5taW4ucHVzaChtaW4pO1xuICAgIHRoaXMubWF4LnB1c2gobWF4KTtcblxuICAgIHRoaXMuY2JMaXN0LnB1c2goZnVuYyk7XG4gICAgdGhpcy5sZW4gPSB0aGlzLmNiTGlzdC5sZW5ndGg7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvU29tZXRpbWVzTWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQbGFuZVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG51bGw7XG4gICAgdGhpcy5tYXRlcmlhbCA9IG51bGw7XG5cbiAgICB0aGlzLnZpZGVvID0gbnVsbDtcbiAgICB0aGlzLnBsYW5lID0gbnVsbDtcblxuICAgIHRoaXMuZGVmV1cgPSAxOTIwO1xuICAgIHRoaXMuZGVmSEggPSAxMDgwO1xuICAgIHRoaXMuZGVmVyA9IDMwNTtcbiAgICB0aGlzLnJhdGUgPSAwO1xuICAgIHRoaXMucmF0ZVcgPSAwO1xuXG4gICAgdGhpcy5sYiA9IG51bGw7IC8vbGF5b3V0IGJhY2tncm91bmRcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBjcmVhdGUoY2IpIHtcblxuICAgIHZhciB0ZXh0dXJlcyA9IHRoaXMudGV4dHVyZXMgID0gZ2IuaW4ubG9hZE1nci50ZXh0dXJlcztcblxuICAgIHZhciB3ID0gdGV4dHVyZXNbMF0uaW1hZ2Uud2lkdGggLyB0ZXh0dXJlc1swXS5pbWFnZS53aWR0aDtcbiAgICB2YXIgaCA9IHRleHR1cmVzWzBdLmltYWdlLmhlaWdodCAvIHRleHR1cmVzWzBdLmltYWdlLndpZHRoO1xuXG4gICAgLy8gcGxhbmUwMVxuXG4gICAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodywgaCwgMSwgMSk7XG4gICAgdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnZzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLmZzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgdGhpcy5wbGFuZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgdGhpcy5wbGFuZS5zY2FsZS54ID0gdGhpcy5wbGFuZS5zY2FsZS55ID0gMjAwMC4wO1xuXG4gICAgLy8gcGxhbmUwMlxuXG4gICAgdmFyIHcgPSB0ZXh0dXJlc1sxXS5pbWFnZS53aWR0aCAvIHRleHR1cmVzWzFdLmltYWdlLndpZHRoO1xuICAgIHZhciBoID0gdGV4dHVyZXNbMV0uaW1hZ2UuaGVpZ2h0IC8gdGV4dHVyZXNbMV0uaW1hZ2Uud2lkdGg7XG5cbiAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh3LCBoLCAxLCAxKTtcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3JtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0uZnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLnBsYW5lMDIgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIHRoaXMucGxhbmUwMi5zY2FsZS54ID0gdGhpcy5wbGFuZTAyLnNjYWxlLnkgPSA2MDAuMDtcblxuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy5vcGFjaXR5LnZhbHVlID0gMTtcbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMub3BhY2l0eS52YWx1ZSA9IDA7XG5cbiAgICB0aGlzLnBsYW5lMDIucG9zaXRpb24ueiA9IC0xO1xuXG4gICAgZ2IuaW4uc2NlbmUuc2NlbmUuYWRkKCB0aGlzLnBsYW5lICk7XG4gICAgZ2IuaW4uc2NlbmUuc2NlbmUuYWRkKCB0aGlzLnBsYW5lMDIgKTtcblxuICAgIC8vIHRoaXMub25SZXNpemUoKTtcbiAgICAvLyB0aGlzLnNldEV2ZW50cygpO1xuXG4gICAgLy8g44OG44Kv44K544OB44Oj44KSdW5pZm9ybeWkieaVsOOBq+i/veWKoFxuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy50ZXh0dXJlLnZhbHVlID0gdGV4dHVyZXNbMF07XG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnRleHR1cmUwMS52YWx1ZSA9IHRleHR1cmVzWzFdO1xuXG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLnRleHR1cmUudmFsdWUgPSB0ZXh0dXJlc1sxXTtcbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMudGV4dHVyZTAxLnZhbHVlID0gdGV4dHVyZXNbMV07XG5cbiAgICBjYigpO1xuXG4gIH1cblxuICBzZXRWaWRlb1NpemUoKSB7XG5cbiAgICAvLyB2aWRlb+OBruOCu+ODg+ODiOOCteOCpOOCuiAgICAgICAgICBcbiAgICAvLyB0aGlzLmxiID0gbmV3IGdiLkxheW91dEJhY2tncm91bmQoJCgnYm9keScpLCQodGhpcy52aWRlby52aWRlbykpO1xuICAgIC8vIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldFRyYW5zcGFyZW50KHZhbCkge1xuXG4gICAgLy8gdGhpcy5wbGFuZS5tYXRlcmlhbC5vcGFjaXR5ID0gdmFsO1xuXG4gIH1cblxuICB0d2VlblRyYW5zcGFyZW50KHRpbWUsdmFsKSB7XG5cbiAgICAvLyB2YXIgdCA9IHRpbWUgfHwgMS4wO1xuICAgIC8vIHZhciB2ID0gdmFsLnRhcmdldCB8fCAxLjA7XG4gICAgLy8gdmFyIGUgPSB2YWwuZWFzZSB8fCBQb3dlcjIuZWFzZU91dDtcblxuICAgIC8vIFR3ZWVuTWF4LnRvKHRoaXMucGxhbmUubWF0ZXJpYWwsIHQsIHtcbiAgICAvLyAgIG9wYWNpdHk6IHYsXG4gICAgLy8gICBlYXNlIDogZSxcbiAgICAvLyB9KTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG5cblxuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIC8vIHZhciB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgLy8gdmFyIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAvLyB2YXIgcmF0ZVcgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAvLyB2YXIgciA9IHcvaDtcblxuICAgIC8vIGlmIChyYXRlVyA8IHRoaXMucmF0ZSkge1xuXG4gICAgLy8gICB0aGlzLnBsYW5lLnNjYWxlLnNldChyKjAuNTgsciowLjU4LHIqMC41OClcblxuICAgIC8vIH0gZWxzZSB7XG5cbiAgICAvLyAgIC8vIGxvZygyLHNjYWxlWSk7XG5cbiAgICAvLyAgIHRoaXMucGxhbmUuc2NhbGUuc2V0KDEsMSwxKTtcblxuICAgIC8vIH1cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgLy8gZ2IuaW4ucm0udG90YWwgKz0gMTsgLy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG4gICAgJCh3aW5kb3cpLm9uKCdvblNlY3Rpb24wNFByb2R1Y3RJbWcnLCB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMsKCk9PntcbiAgICAgIC8vZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgfSkpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L19kZXRhaWxzL1BsYW5lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQYXJhbVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYW0ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5ndWk7XG4gICAgdGhpcy5qc29uID0ge307XG4gICAgLy8gdGhpcy5hcHBOYW1lID0gXCJwbHVzTVZcIjtcblxuICAgIHZhciBpc0ZsYWcgPSB0cnVlO1xuXG4gICAgdGhpcy5jbG9jayA9IHtcbiAgICAgIHByb2dyZXNzOiAwLjUsXG4gICAgfVxuXG4gICAgdGhpcy56b29tYmx1ciA9IHtcbiAgICAgIHN0cmVuZ3RoOiA0Ni4wLFxuICAgICAgc2l6ZTogODkuMCxcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zaXRpb24gPSB7XG4gICAgICBwcm9ncmVzczogMC4wLFxuICAgICAgc2l6ZTogMC4wNCxcbiAgICAgIHpvb206IDMwLFxuICAgICAgY29sb3JTZXBhcmF0aW9uOiAwLjMsXG4gICAgICBzdHJlbmd0aDogMC42LFxuICAgICAgdHdlZW46ICgpPT57XG5cbiAgICAgICAgdmFyIHZhbDtcbiAgICAgICAgaWYgKGlzRmxhZykgdmFsID0gMS4wO1xuICAgICAgICBlbHNlIHZhbCA9IDAuMFxuXG4gICAgICAgIGlzRmxhZyA9ICFpc0ZsYWc7XG5cbiAgICAgICAgVHdlZW5NYXgudG8oZ2IuaW4ucGxhbmUwMi5zaGFkZXIudW5pZm9ybXMucHJvZ3Jlc3MsIDIuNSwge1xuICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgICAgfSlcblxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLnNldHVwRGF0YSgpO1xuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXBEYXRhKCkge1xuXG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gaWYgKGdiLmluLmNvbmYuUEFSQU0pIHtcblxuICAgIHRoaXMuZ3VpID0gbmV3IGRhdC5HVUkoKTtcbiAgICAvLyB0aGlzLmd1aSA9IG5ldyBkYXQuR1VJKHtsb2FkOiB0aGlzLmpzb259KTtcbiAgICB0aGlzLmd1aS5yZW1lbWJlcih0aGlzKTtcbiAgICAkKFwiLmRnXCIpLmNzcyh7ekluZGV4Ojk5OTk5fSk7XG5cbiAgICB2YXIgZjEgPSB0aGlzLmd1aS5hZGRGb2xkZXIoJ3pvb21ibHVyJyk7XG4gICAgZjEuYWRkKHRoaXMuem9vbWJsdXIsICdzdHJlbmd0aCcsIDAuMCwgMi4wKS5zdGVwKDAuMDEpLmxpc3RlbigpLm9uQ2hhbmdlKGZ1bmN0aW9uKHZhbCl7XG5cbiAgICAgIGdiLmluLnBsYW5lLnNoYWRlcnNbMl0udW5pZm9ybXMuc3RyZW5ndGgudmFsdWUgPSB2YWw7XG4gICAgICBsb2codmFsKTtcblxuICAgIH0pO1xuICAgIGYxLmFkZCh0aGlzLnpvb21ibHVyLCAnc2l6ZScsIDAuMCwgMTAwLjApLnN0ZXAoMC4xKS5saXN0ZW4oKS5vbkNoYW5nZShmdW5jdGlvbih2YWwpe1xuXG4gICAgICBnYi5pbi5wbGFuZS5zaGFkZXIudW5pZm9ybXMubkZyYWcudmFsdWUgPSAxIC8gdmFsO1xuXG4gICAgfSk7XG4gICAgZjEub3BlbigpO1xuXG4gICAgLy8gdGhpcy5ndWkuY2xvc2UoKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9QYXJhbS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUHJvZmlsZXJcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuU3RhdHM7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gaWYgKGdiLmluLmNvbmYuU1RBVFMpIHtcblxuICAgICAgdGhpcy5TdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgICAgdGhpcy5TdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgdGhpcy5TdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgICAgID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuU3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgICA9IFwiMHB4XCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuU3RhdHMuZG9tRWxlbWVudCk7XG4gICAgXG5cbiAgICAvLyB9O1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBpZih0aGlzLlN0YXRzKSB7XG4gICAgICB0aGlzLlN0YXRzLnVwZGF0ZSgpO1xuICAgIH1cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAuYWRkKCdwcm9maWxlcicsdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9Qcm9maWxlci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTGF5b3V0XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5TUEJhc2VXID0gMzc1O1xuICAgIHRoaXMuUENCYXNlVyA9IDEzMDA7XG5cbiAgICB0aGlzLnJhdGUgPSAxO1xuICAgIHRoaXMuVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdGhpcy4kdGFyZ2V0TGlzdCA9IFtcbiAgICAgIHtcbiAgICAgICAgJyR0YXJnZXQnOiAkKCcjc2lkZUwsICNzaWRlUiwgI25hdicpLFxuICAgICAgICAnc2NhbGUnOiAnc3BPbmx5JyAvLyBzcE9ubHkgcGNPbmx5IGJvdGhcbiAgICAgIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgICckdGFyZ2V0JzogJCgnLnNlY3Rpb24wM19kZXRhaWwnKSxcbiAgICAgIC8vICAgJ3NjYWxlJzogJ2JvdGgnIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgJyR0YXJnZXQnOiAkKCcuc2VjdGlvbjA0JyksXG4gICAgICAvLyAgICdzY2FsZSc6ICdib3RoJyAvLyBzcE9ubHkgcGNPbmx5IGJvdGhcbiAgICAgIC8vIH0sXG4gICAgXVxuXG4gICAgdGhpcy5ydW4oKTtcbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICBcbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIHRoaXMuVyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIHRoaXMuaVcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIHRoaXMuc2NhbGUoKTtcbiAgICB0aGlzLndyYXAoKTtcblxuICB9XG5cbiAgLy8g5ouh5aSnXG4gIHNjYWxlKCkge1xuXG4gICAgLy8gYnDjga7loLTlkIjjga5zY2FsZVxuICAgIGlmICh0aGlzLmlXIDw9IGdiLmluLmNvbmYuYnApIHtcblxuICAgICAgLy8gd2lkdGjjgYvjgolyYXRl44KS6KiI566XXG4gICAgICAvLyB0aGlzLnJhdGUgPSBnYi5pbi51LmZsb2F0Rm9ybWF0KHRoaXMuVyAvIHRoaXMuU1BCYXNlVyAsIDIpO1xuICAgICAgaWYgKHRoaXMuVyA+IDM3NSkgdGhpcy5XID0gMzc1O1xuICAgICAgaWYgKHRoaXMuVyA8IDMyMCkgdGhpcy5XID0gMzIwO1xuICAgICAgbG9nKHRoaXMuVyk7XG4gICAgICB0aGlzLnJhdGUgPSB0aGlzLlcgLyB0aGlzLlNQQmFzZVc7XG5cbiAgICAgIC8vIHNjYWxl44GZ44KL44Oq44K544OI44KS44Or44O844OXXG4gICAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnYm90aCcgfHwgdmFsLnNjYWxlID09ICdzcE9ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLnJhdGUsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIHdpZHRo44GL44KJcmF0ZeOCkuioiOeul1xuICAgICAgLy8gdGhpcy5yYXRlID0gZ2IuaW4udS5mbG9hdEZvcm1hdCh0aGlzLlcgLyB0aGlzLlBDQmFzZVcgLCAyKTtcbiAgICAgIGlmICh0aGlzLlcgPiAxMzAwKSB0aGlzLlcgPSAxMzAwO1xuICAgICAgdGhpcy5yYXRlID0gdGhpcy5XIC8gdGhpcy5QQ0Jhc2VXO1xuXG4gICAgICAvLyBzY2FsZeOBmeOCi+ODquOCueODiOOCkuODq+ODvOODl1xuICAgICAgJC5lYWNoKHRoaXMuJHRhcmdldExpc3QsIChpbmRleCwgdmFsKT0+e1xuXG4gICAgICAgIGlmICh2YWwuc2NhbGUgPT0gJ2JvdGgnIHx8IHZhbC5zY2FsZSA9PSAncGNPbmx5Jykge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KHZhbC4kdGFyZ2V0LCB7XG4gICAgICAgICAgICBzY2FsZTogdGhpcy5yYXRlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g44GT44Gh44KJ44Gu5aC05ZCI44Gv44CBc2NhbGXjgpLmiLvjgZlcbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnc3BPbmx5Jykge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KHZhbC4kdGFyZ2V0LCB7XG4gICAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgIH0pOyAgXG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIHNjYWxl44GX44Gf44KJ44CB5YWD44Gu5aSn44GN44GV5YiG5L2Z55m944GM44Gn44GN44KL44Gu44Gnb3ZlcmZsb3cgaGlkZGVu44Gn5raI44GZXG4gIHdyYXAoKSB7XG5cblxuXG4gIH1cblxuICByZXNldCgpIHtcblxuICAgICQuZWFjaCh0aGlzLiR0YXJnZXRMaXN0LCAoaW5kZXgsIHZhbCk9PntcblxuICAgICAgVHdlZW5NYXguc2V0KHZhbC4kdGFyZ2V0LCB7XG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nOicwIDAnXG4gICAgICB9KTtcbiAgICAgIFxuICAgIH0pO1xuXG5cbiAgICAvLyDjgqTjg5njg7Pjg4jop6PpmaRcbiAgICBnYi5pbi5yLnJlbW92ZSgnc2NhbGVUb3AnKTtcblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICB0aGlzLnJ1bigpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCgnc2NhbGVUb3AnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICAgIFxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TY2FsZVRvcC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RTTlNTUEZvb3RlclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RTTlNTUEZvb3RlciB7XG5cbiAgY29uc3RydWN0b3IoJHdyYXAsICR0YXJnZXQpIHtcblxuICAgIHRoaXMuJHdyYXAgPSAkd3JhcDtcbiAgICB0aGlzLiRpbm5lciA9IHRoaXMuJHdyYXAuZmluZCgnLmlubmVyJyk7XG4gICAgdGhpcy4kdGFyZ2V0ID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5pY29uU2hhcmUnKTtcbiAgICB0aGlzLiRiYXIgPSB0aGlzLiR3cmFwLmZpbmQoJy5zbnMuc3AgLmJhcicpO1xuICAgIHRoaXMuJGxpc3QgPSB0aGlzLiR3cmFwLmZpbmQoJy5zbnMuc3AgLmxpc3QnKTtcbiAgICB0aGlzLiRpdGVtID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5saXN0IC5pdGVtJyk7XG5cbiAgICAvLyBtb3Rpb25cbiAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgcmVhZHkoKSB7XG5cbiAgICAvLyBveFxuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiR3cmFwLCB7d2lkdGg6IDB9KVxuXG4gICAgLy8gYmFyXG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJGJhciwge3dpZHRoOiAwfSlcblxuICAgIC8vIHNuc1xuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRpdGVtLCB7eDogLTQwLCBvcGFjaXR5OiAwfSlcblxuICAgIHRoaXMuJGJhci5zaG93KCk7XG4gICAgdGhpcy4kbGlzdC5zaG93KCk7XG5cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcblxuICAgIGlmICh0aGlzLiR0YXJnZXQuaGFzQ2xhc3MoJ29uJykpIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmNsb3NlKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgICAgdGhpcy5vcGVuKCk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy4kdGFyZ2V0LnRvZ2dsZUNsYXNzKCdvbicpO1xuXG4gIH1cblxuICBvcGVuICh0aGF0KSB7XG5cbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kYm94KTtcbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kYmFyKTtcbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kaXRlbSk7XG5cbiAgICB0aGlzLnJlYWR5KCk7XG5cbiAgICAvLyBiYXLjgYzkvLjjgbPjgotcblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG5cbiAgICB0bFxuICAgICAgLy8gYm9444GM5Ly444Gz44KLXG4gICAgICAudG8odGhpcy4kd3JhcCwgMC40LCB7XG4gICAgICAgIHdpZHRoOiAzMzAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0XG4gICAgICB9KVxuICAgICAgLnRvKHRoaXMuJGJhciwgMC4zLCB7XG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICB9LCctPTAuMicpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgwKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMicpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgxKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMiksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjI1JylcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDMpLCAwLjMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yNScpXG4gICAgXG4gIH1cblxuICBjbG9zZSAodGhhdCkge1xuXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJveCk7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJhcik7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGl0ZW0pO1xuXG4gICAgLy8gYmFyXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0bFxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMyksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgfSlcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDIpLCAwLjMsIHtcbiAgICAgICAgeDogLTQwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgxKSwgMC4zLCB7XG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgwKSwgMC4zLCB7XG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICAgIG9uQ29tcGxldGU6KCk9PntcbiAgICAgICAgICB0aGlzLiRsaXN0LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwnLT0wLjI1JylcbiAgICAgIC50byh0aGlzLiRiYXIsIDAuMiwge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXQsXG4gICAgICAgIG9uQ29tcGxldGU6KCk9PntcbiAgICAgICAgICB0aGlzLiRiYXIuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCctPTAuMycpXG4gICAgICAudG8odGhpcy4kd3JhcCwgMC4zLCB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcbiAgICAgIH0sJy09MC4zJylcblxuICB9XG5cbiAgcmVzZXQoKSB7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy4kdGFyZ2V0Lm9mZignY2xpY2snKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGFyZ2V0Lm9uKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuIFxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCkge1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldFxuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG5cbiAgICAvLyDjgrnjg57jg5vjga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIGlmICh0aGlzLmF1dG9UTCkge1xuICAgICAgdGhpcy5hdXRvVEwua2lsbCgpO1xuICAgICAgdGhpcy5hdXRvVEwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy50bDAyKSB0aGlzLnRsMDIua2lsbCgpO1xuICAgIHRoaXMudGwwMSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy50bDAxXG4gICAgICAgIC8vIOefouWNsOOCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCcuYXJyb3cucGMnKSwgMC40LCB7XG4gICAgICAgICAgc2NhbGVZOiAwLjY1LFxuICAgICAgICAgIHk6IDgsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAvLyDmloflrZfjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgnLnRleHQnKSwgMC40LCB7XG4gICAgICAgICAgeTogMzAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0sJy09MC4zNycpXG4gICAgICAgIFxuICB9XG5cbiAgb25MZWF2ZSAodGhhdCkge1xuXG4gICAgaWYgKHRoaXMudGwwMSkgdGhpcy50bDAxLmtpbGwoKTtcbiAgICB0aGlzLnRsMDIgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMudGwwMlxuICAgICAgLy8g5paH5a2X44KS5LiL44Gr5LiL44GS44KLXG4gICAgICAudG8oJCh0aGF0KS5maW5kKCcudGV4dCcpLCAwLjUsIHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMSxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dFxuICAgICAgfSlcbiAgICAgIC8vIOefouWNsOOCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgLnRvKCQodGhhdCkuZmluZCgnLmFycm93LnBjJyksIDAuNSwge1xuICAgICAgICBzY2FsZVk6IDEsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDEsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgIGlmICh0aGlzLmF1dG9UTCA9PSBudWxsKSB0aGlzLmF1dG9BcnJvdygpOyAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgICB9LCctPTAuNDUnKVxuXG4gIH1cblxuICBhdXRvQXJyb3coKSB7XG5cbiAgICB0aGlzLmF1dG9UTCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OiAtMX0pO1xuXG4gICAgdGhpcy5hdXRvVExcbiAgICAgIC50byh0aGlzLiR0YXJnZXQuZmluZCgnLmFycm93LnBjJyksIDAuNiwge1xuICAgICAgICB5OiA2MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZGVsYXk6IDUuMCxcbiAgICAgICAgc2NhbGVZOiAwLjMsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0pXG4gICAgICAuc2V0KHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwge3NjYWxlWTogMSx5OiAtNjB9KVxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwgMC41LCB7XG4gICAgICAgIHNjYWxlWTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZGVsYXk6IDAuMyxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSlcblxuICB9XG5cbiAgc2V0dXBGaXJzdCgpIHtcblxuICAgIFR3ZWVuTWF4LnNldCgkKCcuc2VjdGlvbjAxIC5uZXh0IC50ZXh0JyksIHt5OiAtNjAsb3BhY2l0eTowLHo6IDEsfSk7XG4gICAgVHdlZW5NYXguc2V0KCQoJy5zZWN0aW9uMDEgLm5leHQgc3ZnJyksIHt5OiAtMzAsb3BhY2l0eTowLHo6IDEsfSk7XG5cbiAgfVxuXG4gIHJ1bkZpcnN0KCkge1xuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgLy8g5paH5a2X44KS5LiL44Gr5LiL44GS44KLXG4gICAgICB0bC50bygkKCcuc2VjdGlvbjAxIC5uZXh0IC50ZXh0JyksIDEuNSwge1xuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKCcuc2VjdGlvbjAxIC5uZXh0IHN2ZycpLCAxLjAsIHtcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgejogMSxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuODInKVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uRW50ZXIuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge3NlbGYub25MZWF2ZS5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0Fycm93VG9wLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQb3NpdGlvblxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g5LiK5LiL5Lit5aSu5a+E44GbXG4gICAgdGhpcy5zZXRDZW50ZXIoKTtcblxuICB9XG5cbiAgc2V0Q2VudGVyKCkge1xuXG4gICAgJCgnLnBvc0NlbnRlcicpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykuYWRqdXN0KCk7XG4gICAgICBcbiAgICB9KTtcbiAgICAkKCcucG9zQ2VudGVyVycpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykuYWRqdXN0VygpO1xuICAgICAgXG4gICAgfSk7XG4gICAgJCgnLnBvc0NlbnRlckgnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLmFkanVzdEgoKTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIHRoaXMuc2V0Q2VudGVyKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdzZXRDZW50ZXInLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9Qb3N0aW9uL1Bvc2l0aW9uLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBEaXNwbGF5XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJHTGluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgXHR0aGlzLmdsID0gbnVsbDtcblxuICBcdHRoaXMud2ViZ2xJbml0ID0gdGhpcy5fd2ViZ2xJbml0LmJpbmQodGhpcyk7XG5cbiAgXHR0aGlzLmNyZWF0ZV9zaGFkZXIgPSB0aGlzLl9jcmVhdGVfc2hhZGVyLmJpbmQodGhpcyk7XG4gIFx0dGhpcy5jcmVhdGVfcHJvZ3JhbSA9IHRoaXMuX2NyZWF0ZV9wcm9ncmFtLmJpbmQodGhpcyk7XG4gIFx0dGhpcy5jcmVhdGVfdmJvID0gdGhpcy5fY3JlYXRlX3Ziby5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vbkltbWVkaWF0ZSgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIG9uSW1tZWRpYXRlKCkge1xuXG4gICAgLy8g44Or44O844OX44K544K/44O844OIXG4gICAgZ2IuaW4udXAubG9vcCgpO1xuXG5cdFx0dGhpcy53ZWJnbEluaXQoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuXHRcdHdpbmRvdy5jb25zb2xlLmxvZygnb25Mb2FkJyk7XG5cbiAgfVxuXG4gIF93ZWJnbEluaXQoKSB7XG5cblx0XHQvLyBjYW52YXPjgqjjg6zjg6Hjg7Pjg4jjgpLlj5blvpdcblx0XHRsZXQgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblx0XHRjLndpZHRoID0gMzAwO1xuXHRcdGMuaGVpZ2h0ID0gMzAwO1xuXG5cdFx0Ly8gd2ViZ2zjgrPjg7Pjg4bjgq3jgrnjg4jjgpLlj5blvpdcblx0XHR0aGlzLmdsID0gYy5nZXRDb250ZXh0KCd3ZWJnbCcpIHx8IGMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XG5cblx0XHQvLyBjYW52YXPjgpLliJ3mnJ/ljJbjgZnjgovoibLjgpLoqK3lrprjgZnjgotcblx0XHR0aGlzLmdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcblxuXHRcdC8vIGNhbnZhc+OCkuWIneacn+WMluOBmeOCi+mam+OBrua3seW6puOCkuioreWumuOBmeOCi1xuXHRcdHRoaXMuZ2wuY2xlYXJEZXB0aCgxLjApO1xuXG5cdFx0Ly8gY2FudmFz44KS5Yid5pyf5YyWXG5cdFx0dGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQgfCB0aGlzLmdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuXG5cdFx0Ly8g6aCC54K544K344Kn44O844OA44Go44OV44Op44Kw44Oh44Oz44OI44K344Kn44O844OA44Gu55Sf5oiQXG5cdFx0bGV0IHZfc2hhZGVyID0gdGhpcy5jcmVhdGVfc2hhZGVyKCd2cycpO1xuXHRcdGxldCBmX3NoYWRlciA9IHRoaXMuY3JlYXRlX3NoYWRlcignZnMnKTtcblxuXHRcdC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkOOBqOODquODs+OCr1xuXHRcdGxldCBwcmcgPSB0aGlzLmNyZWF0ZV9wcm9ncmFtKHZfc2hhZGVyLCBmX3NoYWRlcik7XG5cblx0XHQvLyBhdHRyaWJ1dGVMb2NhdGlvbuOBruWPluW+l1xuXHRcdGxldCBhdHRMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJnLCAncG9zaXRpb24nKTtcblxuXHRcdC8vIGF0dHJpYnV0ZeOBruimgee0oOaVsCjjgZPjga7loLTlkIjjga8geHl6IOOBrjPopoHntKApXG5cdFx0bGV0IGF0dFN0cmlkZSA9IDM7XG5cblx0XHQvLyDjg6Ljg4fjg6so6aCC54K5KeODh+ODvOOCv1xuXHRcdGxldCB2ZXJ0ZXhfcG9zaXRpb24gPSBbXG5cdFx0XHQwLjAsIDEuMCwgMC4wLFxuXHRcdFx0MS4wLCAwLjAsIDAuMCxcblx0XHRcdC0xLjAsIDAuMCwgMC4wXG5cdFx0XTtcblxuXHRcdC8vIFZCT+OBrueUn+aIkFxuXHRcdHZhciB2Ym8gPSB0aGlzLmNyZWF0ZV92Ym8odmVydGV4X3Bvc2l0aW9uKTtcblxuXHRcdC8vIFZCT+OCkuODkOOCpOODs+ODiVxuXHRcdHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdmJvKTtcblxuXHRcdC8vIGF0dHJpYnV0ZeWxnuaAp+OCkuacieWKueOBq+OBmeOCi1xuXHRcdHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0TG9jYXRpb24pO1xuXG5cdFx0Ly8gYXR0cmlidXRl5bGe5oCn44KS55m76YyyXG5cdFx0dGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dExvY2F0aW9uLCBhdHRTdHJpZGUsIHRoaXMuZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuXHRcdC8vIG1pbk1hdHJpeC5qcyDjgpLnlKjjgYTjgZ/ooYzliJfplqLpgKPlh6bnkIZcblx0XHQvLyBtYXRJVuOCquODluOCuOOCp+OCr+ODiOOCkueUn+aIkFxuXHRcdHZhciBtID0gbmV3IG1hdElWKCk7XG5cblx0XHQvLyDlkITnqK7ooYzliJfjga7nlJ/miJDjgajliJ3mnJ/ljJZcblx0XHR2YXIgbU1hdHJpeCA9IG0uaWRlbnRpdHkobS5jcmVhdGUoKSk7XG5cdFx0dmFyIHZNYXRyaXggPSBtLmlkZW50aXR5KG0uY3JlYXRlKCkpO1xuXHRcdHZhciBwTWF0cml4ID0gbS5pZGVudGl0eShtLmNyZWF0ZSgpKTtcblx0XHR2YXIgbXZwTWF0cml4ID0gbS5pZGVudGl0eShtLmNyZWF0ZSgpKTtcblxuXHRcdC8vIOODk+ODpeODvOW6p+aomeWkieaPm+ihjOWIl1xuXHRcdG0ubG9va0F0KFswLjAsIDEuMCwgMy4wXSwgWzAsIDAsIDBdLCBbMCwgMSwgMF0sIHZNYXRyaXgpO1xuXG5cdFx0Ly8g44OX44Ot44K444Kn44Kv44K344On44Oz5bqn5qiZ5aSJ5o+b6KGM5YiXXG5cdFx0bS5wZXJzcGVjdGl2ZSg5MCwgYy53aWR0aCAvIGMuaGVpZ2h0LCAwLjEsIDEwMCwgcE1hdHJpeCk7XG5cblx0XHQvLyDlkITooYzliJfjgpLmjpvjgZHlkIjjgo/jgZvluqfmqJnlpInmj5vooYzliJfjgpLlrozmiJDjgZXjgZvjgotcblx0XHRtLm11bHRpcGx5KHBNYXRyaXgsIHZNYXRyaXgsIG12cE1hdHJpeCk7XG5cdFx0bS5tdWx0aXBseShtdnBNYXRyaXgsIG1NYXRyaXgsIG12cE1hdHJpeCk7XG5cblx0XHQvLyB1bmlmb3JtTG9jYXRpb27jga7lj5blvpdcblx0XHR2YXIgdW5pTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcmcsICdtdnBNYXRyaXgnKTtcblxuXHRcdC8vIHVuaWZvcm1Mb2NhdGlvbuOBuOW6p+aomeWkieaPm+ihjOWIl+OCkueZu+mMslxuXHRcdHRoaXMuZ2wudW5pZm9ybU1hdHJpeDRmdih1bmlMb2NhdGlvbiwgZmFsc2UsIG12cE1hdHJpeCk7XG5cblx0XHQvLyDjg6Ljg4fjg6vjga7mj4/nlLtcblx0XHR0aGlzLmdsLmRyYXdBcnJheXModGhpcy5nbC5UUklBTkdMRVMsIDAsIDMpO1xuXG5cdFx0Ly8g44Kz44Oz44OG44Kt44K544OI44Gu5YaN5o+P55S7XG5cdFx0dGhpcy5nbC5mbHVzaCgpO1xuXG5cbiAgfVxuXG5cdF9jcmVhdGVfc2hhZGVyKGlkKXtcblx0XHQvLyDjgrfjgqfjg7zjg4DjgpLmoLzntI3jgZnjgovlpInmlbBcblx0XHR2YXIgc2hhZGVyO1xuXG5cdFx0Ly8gSFRNTOOBi+OCiXNjcmlwdOOCv+OCsOOBuOOBruWPgueFp+OCkuWPluW+l1xuXHRcdHZhciBzY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG5cdFx0Ly8gc2NyaXB044K/44Kw44GM5a2Y5Zyo44GX44Gq44GE5aC05ZCI44Gv5oqc44GR44KLXG5cdFx0aWYoIXNjcmlwdEVsZW1lbnQpe3JldHVybjt9XG5cblx0XHQvLyBzY3JpcHTjgr/jgrDjga50eXBl5bGe5oCn44KS44OB44Kn44OD44KvXG5cdFx0c3dpdGNoKHNjcmlwdEVsZW1lbnQudHlwZSl7XG5cblx0XHRcdC8vIOmggueCueOCt+OCp+ODvOODgOOBruWgtOWQiFxuXHRcdFx0Y2FzZSAneC1zaGFkZXIveC12ZXJ0ZXgnOlxuXHRcdFx0XHRzaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0aGlzLmdsLlZFUlRFWF9TSEFERVIpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Ly8g44OV44Op44Kw44Oh44Oz44OI44K344Kn44O844OA44Gu5aC05ZCIXG5cdFx0XHRjYXNlICd4LXNoYWRlci94LWZyYWdtZW50Jzpcblx0XHRcdFx0c2hhZGVyID0gdGhpcy5nbC5jcmVhdGVTaGFkZXIodGhpcy5nbC5GUkFHTUVOVF9TSEFERVIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQgOlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8g55Sf5oiQ44GV44KM44Gf44K344Kn44O844OA44Gr44K944O844K544KS5Ymy44KK5b2T44Gm44KLXG5cdFx0dGhpcy5nbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzY3JpcHRFbGVtZW50LnRleHQpO1xuXG5cdFx0Ly8g44K344Kn44O844OA44KS44Kz44Oz44OR44Kk44Or44GZ44KLXG5cdFx0dGhpcy5nbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cblx0XHQvLyDjgrfjgqfjg7zjg4DjgYzmraPjgZfjgY/jgrPjg7Pjg5HjgqTjg6vjgZXjgozjgZ/jgYvjg4Hjgqfjg4Pjgq9cblx0XHRpZih0aGlzLmdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHRoaXMuZ2wuQ09NUElMRV9TVEFUVVMpKXtcblxuXHRcdFx0Ly8g5oiQ5Yqf44GX44Gm44GE44Gf44KJ44K344Kn44O844OA44KS6L+U44GX44Gm57WC5LqGXG5cdFx0XHRyZXR1cm4gc2hhZGVyO1xuXHRcdH1lbHNle1xuXG5cdFx0XHQvLyDlpLHmlZfjgZfjgabjgYTjgZ/jgonjgqjjg6njg7zjg63jgrDjgpLjgqLjg6njg7zjg4jjgZnjgotcblx0XHRcdGFsZXJ0KHRoaXMuZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcblx0XHR9XG5cdH1cblxuXHRfY3JlYXRlX3Byb2dyYW0odnMsIGZzKXtcblx0XHQvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcblx0XHR2YXIgcHJvZ3JhbSA9IHRoaXMuZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuXG5cdFx0Ly8g44OX44Ot44Kw44Op44Og44Kq44OW44K444Kn44Kv44OI44Gr44K344Kn44O844OA44KS5Ymy44KK5b2T44Gm44KLXG5cdFx0dGhpcy5nbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdnMpO1xuXHRcdHRoaXMuZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZzKTtcblxuXHRcdC8vIOOCt+OCp+ODvOODgOOCkuODquODs+OCr1xuXHRcdHRoaXMuZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cblx0XHQvLyDjgrfjgqfjg7zjg4Djga7jg6rjg7Pjgq/jgYzmraPjgZfjgY/ooYzjgarjgo/jgozjgZ/jgYvjg4Hjgqfjg4Pjgq9cblx0XHRpZih0aGlzLmdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgdGhpcy5nbC5MSU5LX1NUQVRVUykpe1xuXG5cdFx0XHQvLyDmiJDlip/jgZfjgabjgYTjgZ/jgonjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgpLmnInlirnjgavjgZnjgotcblx0XHRcdHRoaXMuZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuXHRcdFx0Ly8g44OX44Ot44Kw44Op44Og44Kq44OW44K444Kn44Kv44OI44KS6L+U44GX44Gm57WC5LqGXG5cdFx0XHRyZXR1cm4gcHJvZ3JhbTtcblx0XHR9ZWxzZXtcblxuXHRcdFx0Ly8g5aSx5pWX44GX44Gm44GE44Gf44KJ44Ko44Op44O844Ot44Kw44KS44Ki44Op44O844OI44GZ44KLXG5cdFx0XHRhbGVydCh0aGlzLmdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKTtcblx0XHR9XG5cdH1cblxuXHQvLyBWQk/jgpLnlJ/miJDjgZnjgovplqLmlbBcblx0X2NyZWF0ZV92Ym8oZGF0YSl7XG5cdFx0Ly8g44OQ44OD44OV44Kh44Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQXG5cdFx0dmFyIHZibyA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XG5cblx0XHQvLyDjg5Djg4Pjg5XjgqHjgpLjg5DjgqTjg7Pjg4njgZnjgotcblx0XHR0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHZibyk7XG5cblx0XHQvLyDjg5Djg4Pjg5XjgqHjgavjg4fjg7zjgr/jgpLjgrvjg4Pjg4hcblx0XHR0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoZGF0YSksIHRoaXMuZ2wuU1RBVElDX0RSQVcpO1xuXG5cdFx0Ly8g44OQ44OD44OV44Kh44Gu44OQ44Kk44Oz44OJ44KS54Sh5Yq55YyWXG5cdFx0dGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcblxuXHRcdC8vIOeUn+aIkOOBl+OBnyBWQk8g44KS6L+U44GX44Gm57WC5LqGXG5cdFx0cmV0dXJuIHZibztcblx0fVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvV2ViR0xpbml0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==