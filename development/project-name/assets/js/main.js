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
	
	
	// import Menu from '../Display/UI/_compornents/Menu.js';
	// import Nav from '../Display/UI/Nav.js';
	// import Alert from '../Display/UI/Alert.js';
	// import SideR from '../Display/UI/SideR.js';
	// import Time from '../Func/Time.js';
	
	// import PageTop from '../Display/UI/_parts/PageTop.js';
	// import Sec01Video from '../Display/UI/Sec01Video.js';
	
	
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
	
	var _ScrollTransition = __webpack_require__(21);
	
	var _ScrollTransition2 = _interopRequireDefault(_ScrollTransition);
	
	var _Sns = __webpack_require__(22);
	
	var _Sns2 = _interopRequireDefault(_Sns);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import SliderTop from '../Display/UI/SliderTop.js';
	
	
	// import Layout from '../Display/Layout/Layout.js';
	
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
	
	/**
	 * fileOverview: 環境判定クラス(デバイス、ブラウザ)、各判定メソッド詳細はDevice.jsを参照
	 * Project:
	 * File: JudgeEnvironment
	 * Date:
	 * Author:
	 */s;
	
	'use strict';
	
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
	
	      // log('resume');
	
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
/* 22 */
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
	
	var _metaData = __webpack_require__(23);
	
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
/* 23 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjkyNmUwMzkzNDNhOWQ3ZDkxMzkiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1RvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvbmYuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0RhdGEvU291bmQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9VdGlsLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRnVuYy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1JlYWR5UGVyY2VudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Jlc2l6ZU1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Njcm9sbE1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL01vdXNlTWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0xvYWRNZ3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvWW91dHViZUZvclNlYzAxLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRGlzcGxheS9MYXlvdXQvRnVsbFNpemUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9KdWRnZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL19ldmVudHMvUmVzcG9uc2l2ZVN3aXRjaEltZy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Td2lwZVRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU2Nyb2xsVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9TbnMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9lanMvaW5jL21ldGFEYXRhLmpzb24iLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1BhZ2UvTWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvRWZmZWN0cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50c0xvb3AuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvX2RldGFpbHMvQ3JlYXRlQ2FudmFzLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL1BsYW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c0xvb3AuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c1RpbWVsaW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvU29tZXRpbWVzTWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L19kZXRhaWxzL1BsYW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvUGFyYW0uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9Qcm9maWxlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TY2FsZVRvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdBcnJvd1RvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvUG9zdGlvbi9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9XZWJHTGluaXQuanMiXSwibmFtZXMiOlsid2luZG93IiwiZ2IiLCJ1bmRlZmluZWQiLCJpbiIsImNvbW1vbiIsIm1haW4iLCJDb21tb24iLCJvbkltbWVkaWF0ZSIsInNldEV2ZW50cyIsImNvbmYiLCJ1IiwiZiIsInVwIiwiciIsInMiLCJtIiwicm0iLCJsb2FkTWdyIiwic2N0IiwiTGF5b3V0Iiwib25Db21wbGV0ZWRGdW5jIiwiRGlzcGxheU9wZW5pbmciLCJqZSIsInJlc0ltZyIsInNucyIsIiQiLCJzd3QiLCJjaGVja0Nzc0JsZW5kIiwic3RhcnQiLCJkb2N1bWVudCIsIm9uIiwib25SZWFkeSIsImJpbmQiLCJvbkxvYWQiLCJDb25mIiwiUkVMRUFTRSIsIkZMRyIsIkxPRyIsIlBBUkFNIiwiU1RBVFMiLCJkZWZXIiwiZGVmSCIsIlciLCJIIiwic3BXIiwic3BIIiwiYnAiLCJtb2RlIiwia2V5cyIsInN3aXRjaE1vZGUiLCJzb3VuZERhdGEiLCJzZWMwMkltZ051bSIsInlvdXR1YmVJRDAxIiwieW91dHViZUlEMDIiLCJ3ZWJGb250TG9hZGVkIiwiaSIsImtleSIsImxlbiIsInBhcmFtIiwicmVmIiwicmVmMSIsInZhbHVlIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJqIiwib2JqIiwiayIsInZhbCIsIlNvdW5kRGF0YSIsIlV0aWwiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiYXBwViIsImFwcFZlcnNpb24iLCJpc1Jlc1NQIiwiaXNSZXNQQyIsImlzUEMiLCJpc1NQIiwiaXNUQUIiLCJpc01CIiwiaXNJRSIsImlzU2V0U1BTaXplIiwic3RhcnRUaW1lIiwiZWxhcHNlZFRpbWUiLCJub3ciLCJEYXRlIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImhpdCIsInJhbmdlIiwibnVtIiwicmVzTWluIiwicmVzTWF4IiwiYmFzZU1pbiIsImJhc2VNYXgiLCJwIiwibiIsInBvcyIsIlN0cmluZyIsImluZGV4T2YiLCJzdWJzdHIiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInJhZGlhbnMiLCJQSSIsImFuZ2xlIiwicDEiLCJwMiIsInNxcnQiLCJwb3ciLCJ4IiwieSIsImFyciIsInNvcnQiLCJhIiwiYiIsImFyeSIsInNsaWNlIiwidCIsIkFycmF5IiwicHVzaCIsInNodWZmbGVBcnkiLCJsIiwibGVuMSIsIm5ld0FyciIsInBhcmEiLCJkZXNjIiwibGlzdCIsInJldHVybktleSIsImdldFRpbWUiLCJmbGciLCJjc3MiLCJtZWRpYSIsInBhdHRlcm4iLCJSZWdFeHAiLCJqb2luIiwidGVzdCIsImFkZENsYXNzIiwiaXNJcGFkIiwiaXNBbmRyb2lkIiwicGxhdGZvcm0iLCJpc0lvcyIsIm1zaWUiLCJwYXJzZUludCIsIm1hdGNoIiwiaXNJZTEwVW5kZXIiLCJsb2ciLCJpc0lFMTEiLCJyZW1vdmVDbGFzcyIsInZlcnNpb24iLCJwYXJzZUZsb2F0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidXJsIiwiaHJlZiIsInBhcmFtSXRlbXMiLCJwYXJhbUl0ZW0iLCJoYXNoIiwiY29va2llIiwiaXNDb250YWluIiwiZyIsInN0ciIsInRvU3RyaW5nIiwiY29udGFpbiIsIm51bWJlciIsIl9wb3ciLCJyb3VuZCIsInJlcyIsIm9yZyIsImRlc3QiLCJiZWZvcmUiLCJhZnRlciIsImdldE5vdyIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWlsbFNlY29uZCIsImdldE1pbGxpc2Vjb25kcyIsImdldERhdGUiLCJtb250aGRheXMiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwid2Vla0RheUpQIiwid0RKIiwiZ2V0RGF5Iiwid2Vla0RheUVOIiwid0RFIiwiZGF0ZSIsIk51bWJlciIsImlnbm9yZUFycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIiR0YXJnZXQiLCIkaW1nIiwiZWFjaCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJhdHRyIiwidHJpZ2dlciIsInNlbGYiLCJlIiwicHJldmVudERlZmF1bHQiLCJvZmYiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsImtleUNvZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsIm9udG91Y2htb3ZlIiwib25rZXlkb3duIiwicHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZ1bmMiLCJibGFuayIsImRlYnVnZ2VyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZXhwYW5kalF1ZXJ5IiwibWV0aG9kcyIsImNvbnNvbGUiLCJwcmVwZW5kIiwiRlBTIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJqUXVlcnkiLCJmbiIsImV4dGVuZCIsImFkanVzdCIsImFkanVzdFciLCJhZGp1c3RIIiwiQ1NTIiwic3VwcG9ydHMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ2IiwiaXNBbmRyb2lkVmVyc2lvbiIsImFsZXJ0IiwiUmVhZHlNZ3IiLCJjb21wbGV0ZWQiLCJ0b3RhbCIsImN1cnJlbnQiLCJyZWFkeVBlcmNlbnQiLCJyZW1vdmUiLCJ1cGRhdGUiLCJzZXR1cCIsIlJlYWR5UGVyY2VudCIsIiRsb2FkaW5nIiwiJGJhciIsIiRwZXJjZW50IiwiaXNMb2NrIiwic2V0VGltZW91dExvY2siLCJ0YXJnZXQiLCJ0ZXh0Iiwib25Db21wbGV0ZSIsIlR3ZWVuTWF4IiwidG8iLCJzY2FsZSIsIm9wYWNpdHkiLCJlYXNlIiwiUG93ZXIzIiwiZWFzZUluT3V0IiwiVXBkYXRlTWdyIiwiY250IiwidXBkYXRlTGlzdCIsIlRpbWVyIiwiaXNTdG9wIiwibmFtZSIsImZ1bmMiLCJhcnJSZW1vdmUiLCJsb29wIiwiY2hlY2siLCJzcGxpY2UiLCJSZXNpemVNZ3IiLCJyZXNpemVMaXN0Iiwid3MiLCJvbGRXIiwib2xkSCIsIm9uUmVzaXplIiwiZ2V0V2luZG93U2l6ZSIsIlNjcm9sbE1nciIsInNjcm9sbExpc3QiLCJzY3JvbGxFbmRMaXN0Iiwic3QiLCJzYiIsInN2IiwiU1RBbW91bnQiLCJvZmZzZXQiLCJpc1N0YXJ0IiwiZW5kIiwic2Nyb2xsVG9wIiwiZGVsdGEiLCJkZWx0YVgiLCJkZWx0YVkiLCJpc1dpbiIsImlzRkYiLCJzY3JvbGxMZWZ0Iiwib25TY3JvbGwiLCJvbk1vdXNlV2hlZWwiLCJNb3VzZU1nciIsImN4IiwiY3kiLCJtb3VzZU1vdmVMaXN0IiwibW91c2VNb3ZlU3RhcnRMaXN0IiwibW91c2VNb3ZlRW5kTGlzdCIsImVuZFRpbWUiLCJvbkVuZCIsIm9yaWdpbmFsRXZlbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJvZmZzZXRYIiwibGVmdCIsInRvcCIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaG1vdmUiLCJvbk1vdXNlbW92ZSIsIkxvYWRNZ3IiLCJsb2FkZXIiLCJjYiIsInlvdXR1YmVJZnJhbWVTY3JpcHQiLCJsb2FkU2VjMDJJbWciLCJwYXRoIiwiY2IwMiIsImltZyIsInNoYWRlcnMiLCJzaGFkZXJMb2FkTGlzdCIsIlpvb21CbHVyIiwiVHJhbnNpdGlvbjAyIiwic2hhZGVyU2VyaWFsTG9hZCIsInNoYWRlciIsImxvYWQiLCJjb21wIiwic2VjdGlvbjA0UHJvZHVjdEltZyIsInRleHR1cmVMaXN0IiwidGV4dHVyZXMiLCJ0ZXh0dXJlU2VyaWFsTG9hZCIsInRleHR1cmUiLCJUSFJFRSIsIkltYWdlVXRpbHMiLCJsb2FkVGV4dHVyZSIsImNvbmZpZyIsImN1c3RvbSIsImZhbWlsaWVzIiwidXJscyIsImFjdGl2ZSIsIndlYkZvbnQiLCJMb2FkZXIiLCJzcmMiLCJnZXRKU09OIiwiZGF0YSIsIm50aCIsIkltYWdlIiwiYWRkMCIsIm9ubG9hZCIsImltZ051bSIsImVsbSIsImlzTG9hZCIsInZpZGVvIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJzdXBwb3J0VmlkZW9FeHQiLCJwbGF5IiwidGFnIiwiZmlyc3RTY3JpcHRUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJvbllvdVR1YmVJZnJhbWVSZWFkeSIsImV4dCIsImNhblBsYXlUeXBlIiwid2YiLCJhc3luYyIsImFnYWluIiwiV2ViRm9udCIsIm9uTG9hZGVkIiwiU2VjMDFWaWRlbyIsIllvdXR1YmVGb3JTZWMwMSIsImlkIiwidmlkZW9JRCIsInZpZGVvTGlzdCIsInBsYXllciIsImlzRmlyc3QiLCJpc1NlZWtMb2NrIiwiaXNTZWVrTG9jazAyIiwiWVQiLCJQbGF5ZXIiLCJ2aWRlb0lkIiwiZXZlbnRzIiwib25QbGF5ZXJTdGF0ZUNoYW5nZSIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwic2hvd2luZm8iLCJhdXRvaGlkZSIsInJlbCIsImVuYWJsZWpzYXBpIiwiaXZfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJtb2Rlc3RicmFuZGluZyIsInRhcmdldERlZlciLCJ0YXJnZXREZWZIIiwicnVuIiwic2V0UGxheWJhY2tRdWFsaXR5IiwidGltZSIsInNlYzAxVmlkZW8iLCJwbGF5QnlOWVRpbWUiLCJzdGF0dXMiLCJQbGF5ZXJTdGF0ZSIsIkVOREVEIiwicGxheVZpZGVvIiwiUExBWUlORyIsIkNVRUQiLCJpc1NhZmFyaSIsIkJVRkZFUklORyIsInNlZWtUbyIsImdldEN1cnJlbnRUaW1lIiwibnlIIiwib25TZWVrIiwiRnVsbFNpemUiLCIkV3JhcCIsIiRUYXJnZXQiLCIkd3JhcCIsInRhcmdldFciLCJ0YXJnZXRIIiwicmF0aW9XIiwicmF0aW8iLCJtbCIsIm10IiwiZ2V0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXREZWYiLCJzZXRTdHlsZSIsImdldFNpemUiLCJzZXRQb3MiLCJUb3BUaW1lIiwiJGgwMSIsImZpbmQiLCIkaDAyIiwiJG0wMSIsIiRtMDIiLCJpc0FsZXJ0IiwiZGlzIiwidGwiLCJUaW1lbGluZU1heCIsInJlcGVhdCIsInNldCIsIlBvd2VyMiIsIkp1ZGdlRW52aXJvbm1lbnQiLCJpc0RldmljZVNQIiwiaXNEZXZpY2VUQUIiLCJpc0RldmljZU1CIiwiaXNEZXZpY2VQQyIsImlzSUVWZXJzaW9uIiwiaXNEaXJlY3Rpb24iLCJpc1Jlc3BvbnNpdmUiLCJSZXNwb25zaXZlU3dpdGNoSW1nIiwiaXNQQ0xvY2siLCJpc1NQTG9jayIsImluZGV4IiwiZWwiLCJzdHJSZXBsYWNlIiwiaGFzQ2xhc3MiLCJzZXRJbWdTUFNpemUiLCJub3QiLCJTd2lwZVRyYW5zaXRpb24iLCIkc3RhcnRXcmFwIiwiJGVuZFdyYXAiLCJwYWdlTGlzdCIsIm9sZCIsIm5leHQiLCJwcmV2Iiwic1giLCJtWCIsImVYIiwibWluRGlzIiwic1QiLCJlVCIsIm1pblQiLCJvblRvdWNoTG9uZyIsIm9uVG91Y2hTdGFydENCIiwib25Ub3VjaEVuZENCIiwic1kiLCJtWSIsImVZIiwiYWJzRGlzIiwiYWJzIiwicGpheCIsInNpemUiLCJyYXRlIiwiY2FsY3VsYXRlT3JkZXIiLCJwYWdlTmFtZSIsImZpbHRlciIsImlzTm90VG91Y2giLCJkaXIiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoRW5kIiwiU2Nyb2xsVHJhbnNpdGlvbiIsImlzU3dpdGNoIiwiaXNQamF4TG9jayIsIm1lbnUiLCJpc09wZW4iLCJzd2l0Y2giLCJTbnMiLCIkZmIiLCIkdHciLCIkbGluZSIsIiRtYWlsIiwiZmIiLCJ0aXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJodG1sIiwiZGVzIiwidHciLCJsaW5lIiwiZCIsImRlc2NyaXB0aW9uIiwia2V5d29yZCIsIm9wZW5XaW5kb3ciLCJhZGRyZXNzIiwic3ViIiwiYm9keSIsInNjcmVlbiIsIm9wZW4iLCJqdW1wRkIiLCJqdW1wVFciLCJqdW1wTElORSIsIm9uU2VuZE1haWwiLCJNYWluIiwicGFnZSIsIkRpc3BsYXlUb3AiLCJzY2FsZVRvcCIsInNsaWRlclRvcCIsInNuc1NQSG92ZXJFZiIsImh0IiwiYXV0b0Fycm93IiwiRWZmZWN0cyIsImdsIiwiZG9tIiwic3RhdGUiLCJkZWJ1ZyIsIkNWQ29udGVudHMiLCJ0aW1lbGluZSIsImNhbnZhcyIsInRsTWFpbiIsInBhdXNlIiwiQ1ZDb250ZW50c0xvb3AiLCJpc0Fsd2F5cyIsImlzUnVuU3RhdHVzIiwiaXNBZGp1c3RQYXJhbSIsInNvbWV0aW1lc1N0YXRlIiwibG9vcExpc3QiLCJsb29wU3RhcnQiLCJydW5BbHdheXMiLCJydW5TdGF0dXMiLCJydW5BZGp1c3RQYXJhbSIsImRyYXciLCJDVkNvbnRlbnRzVGltZWxpbmUiLCJiZWdpbm5pbmciLCJzdGVwMDEiLCJzdGVwMDIiLCJzdGVwMDMiLCJzdGFuZEJ5Iiwic29tZXRpbWVzIiwiQ3JlYXRlQ2FudmFzIiwiYyIsImN3IiwiY2giLCJmaWxsU3R5bGUiLCJpc1Jlc2l6ZSIsInNldENhbnZhc1NpemUiLCJhcHBlbmQiLCJ2eCIsIm9mZnNldEZyYW1lIiwib2Zmc2V0VngiLCJ4TnVtIiwieU51bSIsInRpbGVMaXN0IiwidGlsZSIsImN0eCIsImZpbGxSZWN0IiwiYWRkT2JqZWN0cyIsImNudFN0b3AiLCJTZWMwMkJnIiwiQ2FudmFzIiwiZ2V0Q29udGV4dCIsIlBsYW5lIiwic3Ryb2tlU3R5bGUiLCJvcCIsImNyZWF0ZSIsImZyYW1lU3RhcnQiLCJpbWdMaXN0IiwiZHJhd0ltYWdlIiwiR2xDb250ZW50cyIsInJlbmRlcmVyIiwiY2FtZXJhIiwic2NlbmUiLCJsaWdodCIsImFkanVzdFBhcmFtIiwic3RhdGVMaW5lUm90YXRlIiwiaXNDb250cm9sIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiZG9tRWxlbWVudCIsInBvc2l0aW9uIiwiU2NlbmUiLCJDYW1lcmEiLCJEaXJlY3Rpb25hbExpZ2h0IiwieiIsInNlY3Rpb24wNFByb2R1Y3RTaGFkZXIiLCJwbGFuZSIsIlRyYWNrYmFsbENvbnRyb2xzIiwiem9vbVNwZWVkIiwicm90YXRlU3BlZWQiLCJQcm9maWxlciIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjdXIiLCJvbkNoYW5nZUZ1bmNMaXN0Iiwib25TZWN0aW9uMDQiLCJHbENvbnRlbnRzTG9vcCIsIlNlY3Rpb24wNFByb2R1Y3QiLCJ1cGRhdGVDb250cm9sbCIsInJlbmRlciIsIkdsQ29udGVudHNUaW1lbGluZSIsInVuaWZvcm1zIiwic3RyZW5ndGgiLCJFeHBvIiwib25TdGFydCIsImVhc2VJbiIsImVhc2VPdXQiLCJmcm9tIiwicGxhbmUwMiIsIm1hdGVyaWFsIiwiU2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXhTaGFkZXIiLCJ2cyIsImZyYWdtZW50U2hhZGVyIiwiZnMiLCJ0cmFuc3BhcmVudCIsInByb2dyZXNzIiwib25SZXNpenNlIiwiU29tZVRpbWVzIiwiY2JMaXN0Iiwib3JkZXIiLCJsYXRlciIsImdlb21ldHJ5IiwiZGVmV1ciLCJkZWZISCIsInJhdGVXIiwibGIiLCJpbWFnZSIsIlBsYW5lR2VvbWV0cnkiLCJNZXNoIiwidGV4dHVyZTAxIiwiUGFyYW0iLCJndWkiLCJqc29uIiwiaXNGbGFnIiwiY2xvY2siLCJ6b29tYmx1ciIsInRyYW5zaXRpb24iLCJ6b29tIiwiY29sb3JTZXBhcmF0aW9uIiwidHdlZW4iLCJQb3dlcjQiLCJzZXR1cERhdGEiLCJkYXQiLCJHVUkiLCJyZW1lbWJlciIsInpJbmRleCIsImYxIiwiYWRkRm9sZGVyIiwic3RlcCIsImxpc3RlbiIsIm9uQ2hhbmdlIiwibkZyYWciLCJTdGF0cyIsInN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJTY2FsZSIsIlNQQmFzZVciLCJQQ0Jhc2VXIiwiJHRhcmdldExpc3QiLCJpVyIsIndyYXAiLCJIb3ZlckVmZmVjdFNOU1NQRm9vdGVyIiwiJGlubmVyIiwiJGxpc3QiLCIkaXRlbSIsInNob3ciLCJjbG9zZSIsInRvZ2dsZUNsYXNzIiwidGhhdCIsImtpbGxUd2VlbnNPZiIsIiRib3giLCJyZWFkeSIsImVxIiwiaGlkZSIsInRvZ2dsZSIsIkhvdmVyRWZmZWN0U1ZHQXJyb3dUb3AiLCJpc0hvdmVyIiwiYXV0b1RMIiwia2lsbCIsInRsMDIiLCJ0bDAxIiwic2NhbGVZIiwiZGVsYXkiLCJvbkVudGVyIiwib25MZWF2ZSIsIlBvc2l0aW9uIiwic2V0Q2VudGVyIiwiV2ViR0xpbml0Iiwid2ViZ2xJbml0IiwiX3dlYmdsSW5pdCIsImNyZWF0ZV9zaGFkZXIiLCJfY3JlYXRlX3NoYWRlciIsImNyZWF0ZV9wcm9ncmFtIiwiX2NyZWF0ZV9wcm9ncmFtIiwiY3JlYXRlX3ZibyIsIl9jcmVhdGVfdmJvIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGVhckNvbG9yIiwiY2xlYXJEZXB0aCIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJ2X3NoYWRlciIsImZfc2hhZGVyIiwicHJnIiwiYXR0TG9jYXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsImF0dFN0cmlkZSIsInZlcnRleF9wb3NpdGlvbiIsInZibyIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsIm1hdElWIiwibU1hdHJpeCIsImlkZW50aXR5Iiwidk1hdHJpeCIsInBNYXRyaXgiLCJtdnBNYXRyaXgiLCJsb29rQXQiLCJwZXJzcGVjdGl2ZSIsIm11bHRpcGx5IiwidW5pTG9jYXRpb24iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ1bmlmb3JtTWF0cml4NGZ2IiwiZHJhd0FycmF5cyIsIlRSSUFOR0xFUyIsImZsdXNoIiwic2NyaXB0RWxlbWVudCIsImNyZWF0ZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJGUkFHTUVOVF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJnZXRTaGFkZXJJbmZvTG9nIiwicHJvZ3JhbSIsImNyZWF0ZVByb2dyYW0iLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJMSU5LX1NUQVRVUyIsInVzZVByb2dyYW0iLCJnZXRQcm9ncmFtSW5mb0xvZyIsImNyZWF0ZUJ1ZmZlciIsImJ1ZmZlckRhdGEiLCJGbG9hdDMyQXJyYXkiLCJTVEFUSUNfRFJBVyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzlCQTs7OztBQUNBOzs7Ozs7QUFUQTs7Ozs7Ozs7QUFXQSxFQUFDLFlBQUk7O0FBRUg7QUFDQSxPQUFJQSxPQUFPQyxFQUFQLEtBQVlDLFNBQWhCLEVBQTJCRixPQUFPQyxFQUFQLEdBQVksRUFBWjtBQUMzQkQsVUFBT0MsRUFBUCxDQUFVRSxFQUFWLEdBQWUsRUFBZixDQUpHLENBSWdCOztBQUVuQkYsTUFBR0UsRUFBSCxDQUFNQyxNQUFOLEdBQWUsc0JBQWY7QUFDQUgsTUFBR0UsRUFBSCxDQUFNRSxJQUFOLEdBQWEsb0JBQWI7QUFFRCxFQVRELEk7Ozs7Ozs7Ozs7OztzakJDWEE7Ozs7Ozs7O0FBbUJBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQXZCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFPQTs7OztBQUdBOzs7Ozs7OztBQUNBOzs7QUFHQTs7QUFFQTs7S0FFcUJDLE07QUFFbkIscUJBQWM7QUFBQTs7QUFFWixVQUFLQyxXQUFMO0FBQ0EsVUFBS0MsU0FBTDtBQUVEOzs7O21DQUVhOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVAsVUFBR0UsRUFBSCxDQUFNTSxJQUFOLEdBQWEsb0JBQWI7QUFDQVIsVUFBR0UsRUFBSCxDQUFNTyxDQUFOLEdBQVUsb0JBQVY7QUFDQVQsVUFBR0UsRUFB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QTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7O3NqQkN4TUE7Ozs7Ozs7O0FBUUE7Ozs7Ozs7O0FBQ0E7QUFD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amEsSSxFQUFLO0FBQ2hCO0FBQ0EsUUFBSW1ZLE1BQU0sS0FBS3ZNLEVBQUwsQ0FBUTZPLFlBQVIsRUFBVjs7QUFFQTtBQUNBLFNBQUs3TyxFQUFMLENBQVF3TSxVQUFSLENBQW1CLEtBQUt4TSxFQUFMLENBQVF5TSxZQUEzQixFQUF5Q0YsR0FBekM7O0FBRUE7QUFDQSxTQUFLdk0sRUFBTCxDQUFROE8sVUFBUixDQUFtQixLQUFLOU8sRUFBTCxDQUFReU0sWUFBM0IsRUFBeUMsSUFBSXNDLFlBQUosQ0FBaUIzYSxJQUFqQixDQUF6QyxFQUFpRSxLQUFLNEwsRUFBTCxDQUFRZ1AsV0FBekU7O0FBRUE7QUFDQSxTQUFLaFAsRUFBTCxDQUFRd00sVUFBUixDQUFtQixLQUFLeE0sRUFBTCxDQUFReU0sWUFBM0IsRUFBeUMsSUFBekM7O0FBRUE7QUFDQSxXQUFPRixHQUFQO0FBQ0E7OzsrQkFPWTs7QUFFVnR1QixNQUFFekIsTUFBRixFQUFVOEIsRUFBVixDQUFhLE1BQWIsRUFBcUIsS0FBS0csTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQXJCO0FBRUQ7Ozt5QkFUWSxDQUdaOzs7Ozs7bUJBak5rQnlzQixTIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2OTI2ZTAzOTM0M2E5ZDdkOTEzOSIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRvcFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29tbW9uIGZyb20gJy4vUGFnZS9Db21tb24uanMnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9QYWdlL01haW4uanMnO1xuXG4oKCk9PntcblxuICAvLyBnbG9iYWzjgqrjg5bjgrjjgqfjgq/jg4hcbiAgaWYgKHdpbmRvdy5nYj09PXVuZGVmaW5lZCkgd2luZG93LmdiID0ge307XG4gIHdpbmRvdy5nYi5pbiA9IHt9OyAvL2luc3RhbmNlXG5cbiAgZ2IuaW4uY29tbW9uID0gbmV3IENvbW1vbigpO1xuICBnYi5pbi5tYWluID0gbmV3IE1haW4oKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb25mIGZyb20gJy4uL0NvbmYuanMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vTXlMaWJzL1V0aWwuanMnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vTXlMaWJzL0Z1bmMuanMnO1xuXG5pbXBvcnQgUmVhZHlNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzJztcbmltcG9ydCBVcGRhdGVNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyc7XG5pbXBvcnQgUmVzaXplTWdyIGZyb20gJy4uL015TGlicy9FdmVudE1nci9SZXNpemVNZ3IuanMnO1xuaW1wb3J0IFNjcm9sbE1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvU2Nyb2xsTWdyLmpzJztcbmltcG9ydCBNb3VzZU1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvTW91c2VNZ3IuanMnO1xuaW1wb3J0IExvYWRNZ3IgZnJvbSAnLi4vRnVuYy9Mb2FkTWdyLmpzJztcblxuLy8gaW1wb3J0IFBqYXggZnJvbSAnLi4vRnVuYy9QamF4LmpzJztcbmltcG9ydCBKdWRnZUVudmlyb25tZW50IGZyb20gJy4uL0Z1bmMvSnVkZ2VFbnZpcm9ubWVudC5qcyc7XG5pbXBvcnQgUmVzcG9uc2l2ZVN3aXRjaEltZyBmcm9tICcuLi9GdW5jL19ldmVudHMvUmVzcG9uc2l2ZVN3aXRjaEltZy5qcyc7XG5pbXBvcnQgU3dpcGVUcmFuc2l0aW9uIGZyb20gJy4uL0Z1bmMvU3dpcGVUcmFuc2l0aW9uLmpzJztcblxuLy8gaW1wb3J0IE1lbnUgZnJvbSAnLi4vRGlzcGxheS9VSS9fY29tcG9ybmVudHMvTWVudS5qcyc7XG4vLyBpbXBvcnQgTmF2IGZyb20gJy4uL0Rpc3BsYXkvVUkvTmF2LmpzJztcbi8vIGltcG9ydCBBbGVydCBmcm9tICcuLi9EaXNwbGF5L1VJL0FsZXJ0LmpzJztcbi8vIGltcG9ydCBTaWRlUiBmcm9tICcuLi9EaXNwbGF5L1VJL1NpZGVSLmpzJztcbi8vIGltcG9ydCBUaW1lIGZyb20gJy4uL0Z1bmMvVGltZS5qcyc7XG5pbXBvcnQgU2Nyb2xsVHJhbnNpdGlvbiBmcm9tICcuLi9GdW5jL1Njcm9sbFRyYW5zaXRpb24uanMnO1xuLy8gaW1wb3J0IFBhZ2VUb3AgZnJvbSAnLi4vRGlzcGxheS9VSS9fcGFydHMvUGFnZVRvcC5qcyc7XG4vLyBpbXBvcnQgU2VjMDFWaWRlbyBmcm9tICcuLi9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMnO1xuaW1wb3J0IFNucyBmcm9tICcuLi9GdW5jL1Nucy5qcyc7XG4vLyBpbXBvcnQgU2xpZGVyVG9wIGZyb20gJy4uL0Rpc3BsYXkvVUkvU2xpZGVyVG9wLmpzJztcblxuXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL0Rpc3BsYXkvTGF5b3V0L0xheW91dC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDliJ3mnJ/lgKTjga7oqK3lrprjg7vjg4fjg7zjgr/jga7phY3nva5cbiAgICAvLyAgdXRpbOmWouaVsOOBruWIneacn+WMllxuICAgIC8vICDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcbiAgICBnYi5pbi51cCA9IG5ldyBVcGRhdGVNZ3IoKTtcbiAgICBnYi5pbi5yID0gbmV3IFJlc2l6ZU1ncigpOyAgICBcbiAgICBnYi5pbi5zID0gbmV3IFNjcm9sbE1ncigpO1xuICAgIGdiLmluLm0gPSBuZXcgTW91c2VNZ3IoKTtcbiAgICBnYi5pbi5ybSA9IG5ldyBSZWFkeU1ncigpO1xuICAgIGdiLmluLmxvYWRNZ3IgPSBuZXcgTG9hZE1ncigpO1xuICAgIGdiLmluLnNjdCA9IG5ldyBTY3JvbGxUcmFuc2l0aW9uKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICDjgZ3jga7ku5ZcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHBqYXjjga7oqK3lrppcbiAgICAvLyBnYi5pbi5wamF4ID0gbmV3IFBqYXgoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBMYXlvdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnYi5pbi5MYXlvdXQgPSBuZXcgTGF5b3V0KCk7XG5cblxuICAgIC8vIOa6luWCmeWujOS6huW+jOOBruWHpueQhlxuICAgIGdiLmluLnJtLm9uQ29tcGxldGVkRnVuYyA9ICgpPT57bmV3IERpc3BsYXlPcGVuaW5nKCk7fVxuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODh+ODkOOCpOOCueODu+ODluODqeOCpuOCtuWIpOWumlxuICAgIC8vICDjgrnjg57jg5vjga7lkJHjgY3liKTlrppcbiAgICAvLyAg44Oa44O844K45oOF5aCx5Y+W5b6XXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZ2IuaW4uamUgPSBuZXcgSnVkZ2VFbnZpcm9ubWVudCgpO1xuICAgIGdiLmluLnJlc0ltZyA9IG5ldyBSZXNwb25zaXZlU3dpdGNoSW1nKCk7XG4gICAgZ2IuaW4uc25zID0gbmV3IFNucygkKCcuZmJTaGFyZScpLCQoJy50d1NoYXJlJyksJCgnLmxpbmVTaGFyZScpLCQoJy5vbk1haWwnKSlcbiAgICBnYi5pbi5zd3QgPSBuZXcgU3dpcGVUcmFuc2l0aW9uKCk7XG5cbiAgICBnYi5pbi5mLmNoZWNrQ3NzQmxlbmQoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBVSVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIGdiLmluLm1lbnUgPSBuZXcgTWVudSgpO1xuICAgIC8vIGdiLmluLm5hdiA9IG5ldyBOYXYoKTtcbiAgICAvLyBnYi5pbi5zaWRlUiA9IG5ldyBTaWRlUigpO1xuICAgIC8vIGdiLmluLmFsZXJ0ID0gbmV3IEFsZXJ0KCk7XG4gICAgLy8gZ2IuaW4ucGFnZXRvcCA9IG5ldyBQYWdlVG9wKCk7XG5cbiAgICAvLyBiZ1xuICAgIC8vIGdiLmluLnNsaWRlclRvcCA9IG5ldyBTbGlkZXJUb3AoJCgnI2JnV3JhcCAuc2VjMDEnKSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgRWZmZWN0c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIGdiLmluLnBhZ2VUcmFuc2l0aW9uRWZmZWN0ID0gbmV3IFBhZ2VUcmFuc2l0aW9uRWZmZWN0KCQoJyNwYWdlVHJhbnNpdGlvbkxheWVyJykpO1xuICAgIC8vIGdiLmluLnNlYzAxVmlkZW8gPSBuZXcgU2VjMDFWaWRlbygpO1xuICAgIC8vIGdiLmluLlNlYzAyQmcgPSBuZXcgU2VjdGlvbjAyQmcoKTtcblxuICAgIC8vIGdiLmluLmhlMDEgPSBuZXcgSG92ZXJFZmZlY3RTVkcoJCgnLlNWR0hvdmVyJyksJyNmZmYnLCcjMDAwJyk7XG4gICAgLy8gZ2IuaW4uaGUwMiA9IG5ldyBIb3ZlckVmZmVjdFNWRygkKCcuU1ZHSG92ZXJXJyksJyM4MWQ4ZDAnLCcjZmZmJyk7XG4gICAgLy8gZ2IuaW4uaGUwMyA9IG5ldyBIb3ZlckVmZmVjdFNWRygkKCcuU1ZHSG92ZXJXMDInKSwnIzgxZDhkMCcsJyMwMDAnKTtcbiAgICAvLyBnYi5pbi5oZTA0ID0gbmV3IEhvdmVyRWZmZWN0U1ZHTG9nbygkKCcjaGVhZGVyIC5sb2dvLCAjaGVhZGVyIC5zdWJUaXQnKSk7XG4gICAgLy8gZ2IuaW4uaGUwNSA9IG5ldyBIb3ZlckVmZmVjdE1lbnVJdGVtKCQoJyNtZW51IC5tZW51TGlzdCAuaXRlbScpKTtcbiAgICAvLyBnYi5pbi5oZTA2ID0gbmV3IEhvdmVyRWZmZWN0U1ZHQXJyb3dTaWRlUigkKCcjc2lkZVIgLm5leHQnKSk7XG4gICAgLy8gZ2IuaW4uaGUwNyA9IG5ldyBIb3ZlckVmZmVjdE1lbnVCdG4oJCgnLm1lbnVCdG4wMScpKTtcbiAgICAvLyBnYi5pbi5oZTA4ID0gbmV3IEhvdmVyRWZmZWN0U05TUENGb290ZXIoJCgnI3NpZGVMIC5zbnMuc3AnKSk7XG5cbiAgICAvLyBsb2dvIOWHuuOBmVxuICAgIC8vIFR3ZWVuTWF4LnRvKCQoJyNoZWFkZXIgLmxvZ28nKSwgMi4yLCB7b3BhY2l0eTogMSwgZWFzZTogUG93ZXIyLmVhc2VJbk91dH0pXG5cbiAgICBnYi5pbi5sb2FkTWdyLnN0YXJ0KCk7XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIEZ1bmNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBMYXlvdXRcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgRGlzcGFseVxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBNb3Rpb25cbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1BhZ2UvQ29tbW9uLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29uZlxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgU291bmREYXRhIGZyb20gJy4vRGF0YS9Tb3VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmYge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOacrOeVquODleODqeOCsFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgICB0aGlzLlJFTEVBU0UgPSB0cnVlO1xuICAgIC8vIHRoaXMuUkVMRUFTRSA9IGZhbHNlO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODleODqeOCsOmWoumAo1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuRkxHID0ge1xuICAgICAgTE9HOnRydWUsICAvLyDjg63jgrDlh7rliptcbiAgICAgIFBBUkFNOnRydWUsIC8vIOODkeODqeODoeODvOOCv+ODgeOCp+ODg+OCr1xuICAgICAgU1RBVFM6dHJ1ZSAgLy8gU3RhdHPooajnpLpcbiAgICB9O1xuICAgIGlmICghdGhpcy5SRUxFQVNFKSB7XG4gICAgICB0aGlzLkZMRyA9IHtcbiAgICAgICAgTE9HOmZhbHNlLFxuICAgICAgICBQQVJBTTpmYWxzZSxcbiAgICAgICAgU1RBVFM6ZmFsc2UgXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDln7rmnKwgd2lkdGggaGVpZ2h0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5kZWZXID0gMTMwMDtcbiAgICB0aGlzLmRlZkggPSA4NTA7XG5cbiAgICB0aGlzLlcgPSAxMjAwO1xuICAgIHRoaXMuSCA9IDc1MDtcblxuICAgIHRoaXMuc3BXID0gMzc1O1xuICAgIHRoaXMuc3BIID0gNjY3O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODluODrOOCpOOCr+ODneOCpOODs+ODiFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuYnAgPSA3Njg7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgbW9kZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5rZXlzID0gW1xuICAgICAge1xuICAgICAgICAgICdrZXknOiAnbW92aWUnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnbW9ybmluZycsJ2FmdGVybm9vbicsJ25pZ2h0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAnZGF0YScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydkYXRhMDEnLCdkYXRhMDInLCdkYXRhMDMnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdwcm9kdWN0JyxcbiAgICAgICAgICAndmFsdWUnOiBbJzAxJ10sXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnN3aXRjaE1vZGUoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzb3VuZCBkYXRhXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zb3VuZERhdGEgPSBuZXcgU291bmREYXRhKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc2VjMDIgYmcgSW1nIE51bVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc2VjMDJJbWdOdW0gPSAzOTY7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgeW91dHViZSBJRFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMueW91dHViZUlEMDEgPSAneFcyb05wTnJLZDAnO1xuICAgIHRoaXMueW91dHViZUlEMDIgPSAndDJXZVJSZEFGZUknO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHdlYiBmb250IGxvYWRlZFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMud2ViRm9udExvYWRlZCA9IGZhbHNlO1xuXG4gIH1cblxuXG4gIHN3aXRjaE1vZGUoKXtcblxuICAgIHZhciBpLCBrZXksIGxlbiwgcGFyYW0sIHJlZiwgcmVmMSwgdmFsdWU7XG5cbiAgICByZWYgPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKS5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBwYXJhbSA9IHJlZltpXTtcbiAgICAgIHJlZjEgPSBwYXJhbS5zcGxpdCgnPScpLCBrZXkgPSByZWYxWzBdLCB2YWx1ZSA9IHJlZjFbMV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5rZXlzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgdmFyIG9iaiA9IHRoaXMua2V5c1tqXTtcblxuICAgICAgICAvLyDjg5Hjg6njg6Hjg7zjgr/jgYzjgq3jg7zjgajkuIDnt5LjgaDjgaPjgZ/jgolcbiAgICAgICAgaWYgKG9iai5rZXkgPT09IGtleSkge1xuXG4gICAgICAgICAgLy8g5ZCE5YCk44Go5q+U6LyDXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBvYmoudmFsdWUubGVuZ3RoOyBrKyspIHtcblxuICAgICAgICAgICAgdmFyIHZhbCA9IG9iai52YWx1ZVtrXTtcblxuICAgICAgICAgICAgLy8g44Kt44O844KSdGhpcy5rZXlz44Gua2V544Gr44CBdmFsdWXjgpLmr5TovIPjgZfjgablkIzlgKTjgaDjgaPjgZ/jgoLjga7jgatcbiAgICAgICAgICAgIGlmICh2YWwgPT09IHZhbHVlKSB0aGlzW29iai5rZXldID0gdmFsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfTtcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gICAgICB9O1xuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9Db25mLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIERhdGFcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmREYXRhIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIHRoaXMuQVRBUkkwMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9hdGFyaS9BdGFyaV8wNC53YXYnO1xuICAgIC8vIHRoaXMuQVRBUkkwMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9hdGFyaS9BdGFyaV8wNS53YXYnO1xuXG4gICAgLy8gdGhpcy5CQU4wMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmEtbl8wMS53YXYnO1xuICAgIC8vIHRoaXMuQkFOMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDIud2F2JztcbiAgICAvLyB0aGlzLkJBTjAzID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CYS1uXzAzLndhdic7XG4gICAgLy8gdGhpcy5CQU4wNCA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmEtbl8wNC53YXYnO1xuXG4gICAgLy8gdGhpcy5ET04wMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmlnX0Rvbl8wMS53YXYnO1xuICAgIC8vIHRoaXMuRE9OMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JpZ19Eb25fMDIud2F2JztcbiAgICAvLyB0aGlzLkRPTjAzID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CaWdfRG9uXzAzLndhdic7XG4gICAgLy8gdGhpcy5ET04wNCA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vRG9uXzA0Lndhdic7XG5cbiAgICAvLyB0aGlzLkRPRE4wMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vRG9kb25fMDEud2F2JztcbiAgICAvLyB0aGlzLkRPRE4wMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vRG9kb25fMDIud2F2JztcblxuICAgIC8vIHRoaXMuR29nb2dvMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0dvZ29nb18wMS53YXYnO1xuICAgIC8vIHRoaXMuR29nb2dvMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0dvZ29nb18wMi53YXYnO1xuXG4gICAgLy8gdGhpcy5JS0FSSSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9pa2FyaS9Ja2FyaV8wMS53YXYnO1xuXG4gICAgLy8gdGhpcy5ST1VMRVRURTAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL3JvdWxldHRlL1JvdWxldHRlXzAxLndhdic7XG4gICAgLy8gdGhpcy5ST1VMRVRURTAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL3JvdWxldHRlL1JvdWxldHRlXzAyLndhdic7XG4gICAgLy8gdGhpcy5ST1VMRVRURTAzID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL3JvdWxldHRlL1JvdWxldHRlXzAzLndhdic7XG5cbiAgICAvLyB0aGlzLlNFQSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9zZWEvU2VhJmthbW9tZV8wMS53YXYnO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EYXRhL1NvdW5kLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVXRpbFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMudWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpOyAvL3VzZXJhZ2VudFxuICAgIHRoaXMuYXBwViA9IHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpOyAvL2FwcFZlcnNpb25cbiAgICB0aGlzLmlzUmVzU1AgPSBudWxsOyAvLyByZXNwb25zaXZlIHNwXG4gICAgdGhpcy5pc1Jlc1BDID0gbnVsbDsgLy8gcmVzcG9uc2l2ZSBwY1xuXG4gICAgdGhpcy5pc1BDID0gbnVsbDtcbiAgICB0aGlzLmlzU1AgPSBudWxsO1xuICAgIHRoaXMuaXNUQUIgPSBudWxsO1xuICAgIHRoaXMuaXNNQiA9IG51bGw7XG5cbiAgICB0aGlzLmlzSUUgPSBudWxsO1xuXG4gICAgdGhpcy5pc1NldFNQU2l6ZSA9IGZhbHNlO1xuXG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IG51bGw7XG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE1hdGhcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgXG4gIC8vIOODqeODs+ODgOODoOOBquaVtOaVsOOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbWluIDog5pyA5bCP5YCkKGludClcbiAgLy8gQG1heCA6IOacgOWkp+WApChpbnQpXG4gIC8vIHJldHVybiA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmRvbShtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoKG1heCArIDEpIC0gbWluKSArIG1pbikpO1xuXG4gIH1cbiAgICAgIFxuICAvLyDjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpIy44Gk44Gu56+E5Zuy44GL44KJ5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBtaW4xIDog5pyA5bCP5YCkMShpbnQpXG4gIC8vIEBtYXgxIDog5pyA5aSn5YCkMShpbnQpXG4gIC8vIEBtaW4yIDog5pyA5bCP5YCkMihpbnQpXG4gIC8vIEBtYXgyIDog5pyA5aSn5YCkMihpbnQpXG4gIC8vIHJldHVybiA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmRvbTIobWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICAgIFxuICAgIGlmICh0aGlzLmhpdCgyKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjEsIG1heDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMiwgbWF4Mik7XG4gICAgfVxuXG4gIH1cbiAgICAgIFxuICAvLyAxL0ByYW5nZeOBrueiuueOh+OBp3RydWXjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHJhbmdlIDog5q+N5pWwKGludClcbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoaXQocmFuZ2UpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgwLCByYW5nZSAtIDEpID09PSAwO1xuXG4gIH1cbiAgXG4gIC8vIDDjgYvjgonnr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCA6IOevhOWbsihpbnQpXG4gIC8vIHJldHVybiA6IOODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmdlKHZhbCkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKC12YWwsIHZhbCk7XG5cbiAgfVxuICBcbiAgLy8g5YCk44KS44Oe44OD44OU44Oz44KwXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDjg57jg4Pjg5Tjg7PjgrDjgZnjgovlgKQoTnVtYmVyKVxuICAvLyBAcmVzTWluIDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQHJlc01heCA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWluIDog5YWD44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNYXggOiDlhYPjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyByZXR1cm4gOiDjg57jg4Pjg5Tjg7PjgrDjgZXjgozjgZ/lgKQoTnVtYmVyKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBtYXAobnVtLCByZXNNaW4sIHJlc01heCwgYmFzZU1pbiwgYmFzZU1heCkge1xuXG4gICAgdmFyIHA7XG4gICAgaWYgKG51bSA8IGJhc2VNaW4pIHtcbiAgICAgIHJldHVybiByZXNNaW47XG4gICAgfVxuICAgIGlmIChudW0gPiBiYXNlTWF4KSB7XG4gICAgICByZXR1cm4gcmVzTWF4O1xuICAgIH1cbiAgICBwID0gKHJlc01heCAtIHJlc01pbikgLyAoYmFzZU1heCAtIGJhc2VNaW4pO1xuXG4gICAgcmV0dXJuICgobnVtIC0gYmFzZU1pbikgKiBwKSArIHJlc01pbjtcblxuICB9ICAgIFxuICBcbiAgLy8g5pWw5YCk44Gr5bCP5pWw54K556ysQG7kvY3jgb7jgafjgpLjgaTjgZHjgZ/mloflrZfliJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOWApChOdW1iZXIpXG4gIC8vIEBuIDog5bCP5pWw54K544Gu5L2NKGludClcbiAgLy8gcmV0dXJuIDog5aSJ5o+b44GV44KM44Gf5YCkKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGVjaW1hbChudW0sIG4pIHtcbiAgICB2YXIgaSwgcG9zO1xuICAgIG51bSA9IFN0cmluZyhudW0pO1xuICAgIHBvcyA9IG51bS5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bS5zcGxpdChcIi5cIilbMF07XG4gICAgfVxuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBudW0gKz0gXCIuXCI7XG4gICAgICBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgICBudW0gKz0gXCIwXCI7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuICAgIG51bSA9IG51bS5zdWJzdHIoMCwgcG9zKSArIG51bS5zdWJzdHIocG9zLCBuICsgMSk7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIGNsYW1wKG51bWVyYXRvcixkZW5vbWluYXRvcix2YWwpIHtcblxuICAgIHJldHVybiB2YWwgKiAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuXG4gIH1cblxuICBkZWdyZWUocmFkaWFucykge1xuXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJOyAvLzHjg6njgrjjgqLjg7PjgYzkvZXluqbjgYtcblxuICB9XG5cbiAgLy8gdG8gcmFkaWFuc1xuICByYWRpYW4oYW5nbGUpIHsgXG5cbiAgICByZXR1cm4gYW5nbGUgKiBNYXRoLlBJIC8gMTgwOyAvLzHluqbkvZXjg6njgrjjgqLjg7PjgYtcblxuICB9XG5cbiAgZGlzdChwMSwgcDIpIHtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcblxuICB9XG5cbiAgYXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MTAsOSw1LDMsMVxuXG4gIH1cblxuICBkZXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxLDMsNSw5LDEwXG5cbiAgfVxuXG4gIC8vIG1hcCh2YWx1ZSwgbWluMDEsIG1heDAxLCBtaW4wMiwgbWF4MDIpIHtcblxuICAvLyAgIHZhciBkaXMwMSA9IG1heDAxIC0gbWluMDE7XG4gIC8vICAgdmFyIGRpczAyID0gbWF4MDIgLSBtaW4wMlxuXG4gIC8vICAgdmFyIHJhdGUgPSBkaXMwMiAvIGRpczAxO1xuXG4gIC8vICAgdmFsdWUgPSB2YWx1ZSAqIHJhdGU7XG5cbiAgLy8gICByZXR1cm4gdmFsdWU7XG4gIC8vIH1cblxuICBjb25zdHJhaW4odmFsdWUsIG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heCh2YWx1ZSwgbWluKSk7XG5cbiAgICAvLyBpZiAodmFsdWUgPD0gbG93KSB2YWx1ZSA9IGxvdztcbiAgICAvLyBpZiAodmFsdWUgPj0gaGlnaCkgdmFsdWUgPSBoaWdoOyAgICAgXG4gICAgLy8gcmV0dXJuIHZhbHVlO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEFycmF5XG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIOmFjeWIl+WGheOBruODqeODs+ODgOODoOOBquWApOOCkuOBsuOBqOOBpOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAYXJyIDog6YWN5YiXXG4gIC8vIHJldHVybiA6IOmFjeWIl+WGheOBruWApFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhcnJSYW5kKGFycikge1xuXG4gICAgcmV0dXJuIGFyclt0aGlzLnJhbmRvbSgwLCBhcnIubGVuZ3RoIC0gMSldO1xuXG4gIH0gICAgXG4gICAgXG4gIC8vIOmFjeWIl+OCkuODqeODs+ODgOODoOOBq+S4puOBueabv+OBiFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAYXJyIDog6YWN5YiXKEFycmF5KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaHVmZmxlKGFyeSkge1xuXG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGFyciA9IGFyeS5zbGljZSgpO1xuICAgIHZhciBpID0gYXJyLmxlbmd0aDtcbiAgICB3aGlsZShpKXtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmkpO1xuICAgICAgdmFyIHQgPSBhcnJbLS1pXTtcbiAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgIGFycltqXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG4gIC8vIOODqeODs+ODgOODoOOBquaVsOWApOOCkuS9nOOCi1xuICByYW5kb21BcnIgKGxlbikge1xuXG4gICAgdmFyIGFyciA9IG5ldyBBcnJheTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIGFyci5wdXNoKGkpO1xuXG4gICAgYXJyID0gdGhpcy5zaHVmZmxlQXJ5KGFycik7XG5cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxuICAvLyBudWxs44KS5YmK6Zmk44GX44Gf6YWN5YiX44KS6L+U44GZXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJcoQXJyYXkpXG4gIC8vIHJldHVybiA6IG51bGzliYrpmaTjgZfjgZ/phY3liJcoQXJyYXkpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNsaWNlTnVsbChhcnIpIHtcblxuICAgIHZhciBpLCBsLCBsZW4xLCBuZXdBcnIsIHZhbDtcbiAgICBuZXdBcnIgPSBbXTtcbiAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGFyci5sZW5ndGg7IGwgPCBsZW4xOyBpID0gKytsKSB7XG4gICAgICB2YWwgPSBhcnJbaV07XG4gICAgICBpZiAodmFsICE9PSBudWxsKSB7XG4gICAgICAgIG5ld0Fyci5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnI7XG5cbiAgfSAgICBcbiAgXG4gIC8vIOmFjeWIl+WGheOBruODkeODqeODoeODvOOCv+OCkuavlOi8g+OBl+OBpuOCveODvOODiFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAYXJyIDog6YWN5YiXKEFycmF5KVxuICAvLyBAcGFyYSA6IOODkeODqeODoeODvOOCv+ODvOWQjVxuICAvLyBAZGVzYyA6IOmZjemghuOBi+OBqeOBhuOBiyhib29sZWFuKSDjg4fjg5Xjgqnjg6vjg4jjga/mmIfpoIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc29ydChhcnIsIHBhcmEsIGRlc2MpIHtcbiAgICBpZiAoZGVzYyA9PT0gdm9pZCAwKSB7XG4gICAgICBkZXNjID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkZXNjKSB7XG4gICAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYltwYXJhXSAtIGFbcGFyYV07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbcGFyYV0gLSBiW3BhcmFdO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0S2V5KGxpc3QsdmFsdWUpIHtcbiAgICAgIHZhciByZXR1cm5LZXkgPSBbXTtcbiAgICAgIGZvcih2YXIga2V5IGluIGxpc3Qpe1xuICAgICAgICAgIGlmIChsaXN0W2tleV0gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuS2V5LnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuS2V5O1xuICB9XG5cbiAgLy8g44Om44OL44O844KvSUTjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdW5pcXVlKCkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIH1cbiAgXG4gIC8vICoqanF1YXJ55L2/55SoXG4gIC8vIOODnOOCv+ODs+ODouODvOODieWkieabtFxuICAvLyB0cnVl44Gq44KJ44Kr44O844K944Or44GM44Od44Kk44Oz44K/44O844Gu5b2i44GrXG4gIC8vIGZhbHNl44Gq44KJ44OH44OV44Kp44Or44OI44Gu44Kr44O844K944Or44GrXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBmbGcgOiDpgannlKjjgZnjgovjgYvjganjgYbjgYsoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYnV0dG9uTW9kZShmbGcpIHtcblxuICAgIGlmIChmbGcpIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgZGV2aWNlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzRGV2aWNlU1AoKXtcblxuICAgIHZhciBtZWRpYSA9IFtcImlwaG9uZVwiLFwiaXBvZFwiLFwiaXBhZFwiLFwiYW5kcm9pZFwiLFwiZHJlYW1cIixcImN1cGNha2VcIixcImJsYWNrYmVycnk5NTAwXCIsXCJibGFja2JlcnJ5OTUzMFwiLFwiYmxhY2tiZXJyeTk1MjBcIixcImJsYWNrYmVycnk5NTUwXCIsXCJibGFja2JlcnJ5OTgwMFwiLFwid2Vib3NcIixcImluY29nbml0b1wiLFwid2VibWF0ZVwiXTtcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAobWVkaWEuam9pbihcInxcIiksXCJpXCIpO1xuXG4gICAgdmFyIGIgPSBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG4gICAgaWYgKGIpICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VTUCcpO1xuXG4gICAgdGhpcy5pc1NQID0gYjtcblxuICB9XG4gIGlzRGV2aWNlVEFCKCl7XG5cbiAgICB2YXIgYiA9ICh0aGlzLnVhLmluZGV4T2YoXCJ3aW5kb3dzXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcInRvdWNoXCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiaXBhZFwiKSAhPSAtMVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwibW9iaWxlXCIpID09IC0xKVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImZpcmVmb3hcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwidGFibGV0XCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwia2luZGxlXCIpICE9IC0xXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJzaWxrXCIpICE9IC0xXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJwbGF5Ym9va1wiKSAhPSAtMTtcbiAgICBpZiAoYikgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZVRBQicpO1xuXG4gICAgdGhpcy5pc1RBQiA9IGI7XG5cbiAgfVxuXG4gIGlzRGV2aWNlTUIoKXtcblxuICAgIHZhciBiID0gKHRoaXMudWEuaW5kZXhPZihcIndpbmRvd3NcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwicGhvbmVcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJpcGhvbmVcIikgIT0gLTFcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImlwb2RcIikgIT0gLTFcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcIm1vYmlsZVwiKSAhPSAtMSlcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJmaXJlZm94XCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcIm1vYmlsZVwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImJsYWNrYmVycnlcIikgIT0gLTE7XG4gICAgaWYgKGIpICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VNQicpO1xuXG4gICAgdGhpcy5pc01CID0gYjtcblxuICB9XG5cbiAgaXNEZXZpY2VQQygpe1xuXG4gICAgaWYgKCEodGhpcy5pc1NQIHx8IHRoaXMuaXNUQUIgfHwgdGhpcy5pc01CKSkge1xuICAgICAgXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlUEMnKTtcbiAgICAgIHRoaXMuaXNQQyA9IHRydWU7XG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB0aGlzLmlzUEMgPSBmYWxzZTtcblxuICB9XG5cbiAgLy8g44K544Oe44OV44Kp5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNTbXQoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBob25lJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBvZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDA7XG5cbiAgfVxuXG4gIC8vIOOCv+ODluODrOODg+ODiOerr+acq+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzVGFibGV0KCkge1xuXG4gICAgcmV0dXJuIHRoaXMuaXNJcGFkKCkgfHwgKHRoaXMuaXNBbmRyb2lkKCkgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNb2JpbGUnKSA9PT0gLTEpO1xuXG4gIH1cblxuICAvLyBpUGFk5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJcGFkKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMDtcblxuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE9TXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEFuZHJvaWTliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0FuZHJvaWQoKSB7XG5cbiAgICB2YXIgdTtcbiAgICB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICByZXR1cm4gdS5pbmRleE9mKCdCbGFja0JlcnJ5JykgPiAwIHx8IHUuaW5kZXhPZignQW5kcm9pZCcpID4gMCB8fCB1LmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA+IDA7XG5cbiAgfVxuXG4gIGlzaVBob25lKCl7XG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwiaXBob25lXCIsXCJpXCIpO1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG4gIH1cblxuICAvLyBpT1PliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0lvcygpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUG9kJykgPiAwO1xuXG4gIH1cblxuICAvLyBQUzPliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1BzMygpIHtcblxuICAgIHZhciB1O1xuICAgIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHJldHVybiB1LmluZGV4T2YoJ1BMQVlTVEFUSU9OIDMnKSA+IDA7XG5cbiAgfVxuICAgIFxuICAvLyBWSVRB5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNWaXRhKCkge1xuXG4gICAgdmFyIHU7XG4gICAgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgcmV0dXJuIHUuaW5kZXhPZignUGxheVN0YXRpb24gVml0YScpID4gMDtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBicm93c2VyXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJReOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWUoKSB7XG5cbiAgICB2YXIgdWE7XG4gICAgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB1YS5pbmRleE9mKCdtc2llJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ3RyaWRlbnQvNycpICE9PSAtMTtcblxuICB9XG5cbiAgLy8gV0lO44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNXaW4oKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoXCJXaW5cIikgIT09IC0xO1xuXG4gIH1cblxuICAvLyBnb29nbGVDaHJvbWXjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0Nocm9tZSgpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpID4gMDtcblxuICB9ICAgIFxuICBcbiAgLy8gRmlyZUZveOOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRkYoKSB7XG5cbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuXG4gIH1cblxuICBpc1NhZmFyaSgpe1xuXG4gICAgaWYodGhpcy51YS5pbmRleE9mKFwiY2hyb21lXCIpICE9IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgaWYodGhpcy51YS5pbmRleE9mKFwibHVuYXNjYXBlXCIpICE9IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwic2FmYXJpXCIsXCJpXCIpO1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG5cbiAgfVxuXG4gIGlzT3BlcmEoKXtcblxuICAgICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwib3BlcmFcIixcImlcIik7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuXG4gIH1cblxuICAvLyBpT1Pjga5zYWZhcmnku6XlpJbjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0lPU1VpVmlldygpIHtcblxuICAgIHZhciBhO1xuICAgIGEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAodGhpcy5pc0lvcygpICYmIGEuaW5kZXhPZignc2FmYXJpJykgPT09IC0xKSB8fCAodGhpcy5pc0lvcygpICYmIGEuaW5kZXhPZignY3Jpb3MnKSA+IDApIHx8ICh0aGlzLmlzSW9zKCkgJiYgYS5pbmRleE9mKCdnc2EnKSA+IDApO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHZlcnNpb25cbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElFOOS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWU4VW5kZXIoKSB7XG5cbiAgICB2YXIgbXNpZTtcbiAgICBtc2llID0gbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICBtc2llID0gbXNpZS5pbmRleE9mKCdtc2llJykgPiAtMSA/IHBhcnNlSW50KG1zaWUucmVwbGFjZSgvLiptc2llWyBdLywgJycpLm1hdGNoKC9eWzAtOV0rLykpIDogMDtcbiAgICByZXR1cm4gbXNpZSA8PSA4ICYmIG1zaWUgIT09IDA7XG5cbiAgfVxuICAgIFxuICAvLyBJRTnku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llOVVuZGVyKCkge1xuXG4gICAgdmFyIG1zaWU7XG4gICAgbXNpZSA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgbXNpZSA9IG1zaWUuaW5kZXhPZignbXNpZScpID4gLTEgPyBwYXJzZUludChtc2llLnJlcGxhY2UoLy4qbXNpZVsgXS8sICcnKS5tYXRjaCgvXlswLTldKy8pKSA6IDA7XG4gICAgcmV0dXJuIG1zaWUgPD0gOSAmJiBtc2llICE9PSAwO1xuXG4gIH1cblxuICAvLyBJRTEw5Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZTEwVW5kZXIoKSB7XG5cbiAgICB2YXIgbXNpZTtcbiAgICBtc2llID0gbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICBtc2llID0gbXNpZS5pbmRleE9mKCdtc2llJykgPiAtMSA/IHBhcnNlSW50KG1zaWUucmVwbGFjZSgvLiptc2llWyBdLywgJycpLm1hdGNoKC9eWzAtOV0rLykpIDogMDtcbiAgICByZXR1cm4gbXNpZSA8PSAxMCAmJiBtc2llICE9PSAwO1xuXG4gIH1cblxuICAvLyBJRTEx5Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZTExVW5kZXIoKSB7XG5cbiAgICB2YXIgYiA9IHRoaXMuaXNJZTEwVW5kZXIoKSB8fCAodGhpcy51YS5pbmRleE9mKFwidHJpZGVudFwiKSAhPSAtMSk7XG4gICAgcmV0dXJuIGI7XG4gICAgLy8gcmV0dXJuIHRydWU7XG5cbiAgfVxuXG4gIC8vIGVkZ2XjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0VkZ2UoKSB7XG5cbiAgICBsb2codGhpcy51YS5pbmRleE9mKFwiQXBwbGVXZWJraXRcIiksdGhpcy51YS5pbmRleE9mKFwiRWRnZVwiKSx0aGlzLnVhLHRoaXMuYXBwVik7XG4gICAgdmFyIGIgPSAodGhpcy51YS5pbmRleE9mKFwiYXBwbGV3ZWJraXRcIikgPj0gMCAmJiB0aGlzLnVhLmluZGV4T2YoXCJlZGdlXCIpICE9IC0xKTtcbiAgICByZXR1cm4gYjtcbiAgICAvLyByZXR1cm4gdHJ1ZTtcblxuICB9XG5cbiAgaXNJRVZlcnNpb24oKXtcblxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWUnKTtcbiAgICB0aGlzLmlzSUUgPSB0cnVlO1xuICAgICAgXG4gICAgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSAxMC5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWUxMCcpO1xuICAgICAgcmV0dXJuICdpZTEwJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA5LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTknKTtcbiAgICAgIHJldHVybiAnaWU5JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA4LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTgnKTsgIFxuICAgICAgcmV0dXJuICdpZTgnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDcuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llNycpO1xuICAgICAgcmV0dXJuICdpZTcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDYuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llNicpO1xuICAgICAgcmV0dXJuICdpZTYnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJ0cmlkZW50XCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llMTEnKTtcbiAgICAgIHRoaXMuaXNJRTExID0gdHJ1ZTtcbiAgICAgIHJldHVybiAnaWUxMSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVhLmluZGV4T2YoXCJhcHBsZXdlYmtpdFwiKSA+PSAwICYmIHRoaXMudWEuaW5kZXhPZihcImVkZ2VcIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNFZGdlJyk7XG4gICAgICByZXR1cm4gJ2VkZ2UnO1xuICAgIH1cblxuXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpZScpO1xuICAgIHRoaXMuaXNJRSA9IGZhbHNlO1xuXG4gIH1cblxuICBpc0FuZHJvaWRWZXJzaW9uKCkge1xuXG4gICAgaWYoIHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikgPiAwICkge1xuXG4gICAgICAgIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdCh0aGlzLnVhLnNsaWNlKHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikrOCkpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICAgICAgXG4gICAgfVxuXG4gIH1cblxuICBpc2lwaG9uZVZlcnNpb24oKSB7XG5cbiAgICBpZiggdGhpcy51YS5pbmRleE9mKFwiaVBob25lIE9TXCIpID4gMCApIHtcblxuICAgICAgICB2YXIgdmVyc2lvbiA9IHBhcnNlRmxvYXQodGhpcy51YS5zbGljZSh0aGlzLnVhLmluZGV4T2YoXCJpUGhvbmUgT1NcIikrMTApKTtcbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcG9ydHJhaXQgLyBsYW5kc2NhcGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRGlyZWN0aW9uICgpIHtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoSCA+IFcpIHtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcmVzcG9uc2l2ZSDmqKrluYXjgpLopovjgotcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzUmVzcG9uc2l2ZSAoYnApIHtcblxuICAgIGlmIChicD09dW5kZWZpbmVkKSBicD0zNzU7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKFcgPiBicCkge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gZmFsc2U7XG4gICAgICB0aGlzLmlzUmVzUEMgPSB0cnVlO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSB0cnVlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gZmFsc2U7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFVSTFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyDjgq/jgqjjg6rmipzjgY3lh7rjgZdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGtleSA6IOaKnOOBjeWHuuOBmeODkeODqeODoeODvOOCv+WQjShTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldFF1ZXJ5KGtleSkge1xuXG4gIC8vICAgdmFyIHFzLCByZWdleDtcbiAgLy8gICBrZXkgPSBrZXkucmVwbGFjZSgvW+KCrFtdLywgXCLigqzigqzigqxbXCIpLnJlcGxhY2UoL1vigqxdXS8sIFwi4oKs4oKs4oKsXVwiKTtcbiAgLy8gICByZWdleCA9IG5ldyBSZWdFeHAoXCJb4oKs4oKsPyZdXCIgKyBrZXkgKyBcIj0oW14mI10qKVwiKTtcbiAgLy8gICBxcyA9IHJlZ2V4LmV4ZWMod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAvLyAgIGlmIChxcyA9PT0gbnVsbCkge1xuICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHJldHVybiBxc1sxXTtcbiAgLy8gICB9XG5cbiAgLy8gfVxuXG4gIGdldFBhcmFtKCkge1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIHBhcmFtID0gdXJsLnNwbGl0KCc/JylbMV07XG4gICAgaWYgKHBhcmFtPT11bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcmFtSXRlbXMgPSBwYXJhbS5zcGxpdCgnJicpO1xuICAgIHZhciBsaXN0ID0ge307XG4gIFxuICAgIGZvciggdmFyIGkgPSAwOyBpPHBhcmFtSXRlbXMubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICBwYXJhbUl0ZW0gPSBwYXJhbUl0ZW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIGxpc3RbcGFyYW1JdGVtWzBdXSA9IHBhcmFtSXRlbVsxXTtcblxuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuXG4gIH1cbiAgXG4gIC8vIOODj+ODg+OCt+ODpeWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiBsb2NhdGlvbi5oYXNo44GuI+OCkuWJiumZpOOBl+OBn+OChOOBpFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoYXNoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG5cbiAgfVxuXG4gIC8vIGNvb2tpZeWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAa2V5IDog44OR44Op44Oh44O844K/5ZCNXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldENvb2tpZShrZXkpIHtcblxuICAgIHZhciBhLCBhcnIsIGksIGwsIGxlbjEsIHZhbDtcbiAgICBpZiAoZG9jdW1lbnQuY29va2llID09PSB2b2lkIDAgfHwgZG9jdW1lbnQuY29va2llID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XG4gICAgZm9yIChpID0gbCA9IDAsIGxlbjEgPSBhcnIubGVuZ3RoOyBsIDwgbGVuMTsgaSA9ICsrbCkge1xuICAgICAgdmFsID0gYXJyW2ldO1xuICAgICAgYSA9IHZhbC5zcGxpdChcIj1cIik7XG4gICAgICBpZiAoYVswXSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBhWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxuICB9ICAgICAgXG5cbiAgLy8gY29va2ll6Kit5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBrZXkgOiDjg5Hjg6njg6Hjg7zjgr/lkI1cbiAgLy8gQHZhbCA6IOWApFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRDb29raWUoa2V5LCB2YWwpIHtcblxuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUgPSBrZXkgKyBcIj1cIiArIHZhbDtcblxuICB9XG4gIFxuICBpc1BDU1AoKSB7XG5cbiAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZjtcblxuICAgIGlmICghdGhpcy5pc1BDICYmICF0aGlzLmlzVEFCICYmICh1cmwuaW5kZXhPZigncGMnKSAhPSAtMSkpIHtcblxuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuJztcbiAgICBcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaXNQQyAmJiB1cmwuaW5kZXhPZigncGMnKSA9PSAtMSkge1xuXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4vcGMvJztcbiAgICBcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaXNUQUIgJiYgdXJsLmluZGV4T2YoJ3BjJykgPT0gLTEpIHtcblxuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuL3BjLyc7XG4gICAgXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlzQ29udGFpbih1cmwsJ3JvdWxldHRlJykpIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbic7XG4gICAgaWYgKHRoaXMuaXNDb250YWluKHVybCwndG9waWNzJykpIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbic7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgQ29sb3JcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gcmdi44GL44KJSEVY44Kr44Op44O85Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEByIDogMH4yNTVcbiAgLy8gQGcgOiAwfjI1NVxuICAvLyBAYiA6IDB+MjU1XG4gIC8vIHJldHVybiA6IGV4IFwiI0ZGRkZGRlwiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldEhleENvbG9yKHIsZyxiKSB7XG4gICAgICB2YXIgc3RyO1xuICAgICAgc3RyID0gKHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNik7XG4gICAgICByZXR1cm4gXCIjXCIgKyBuZXcgQXJyYXkoNyAtIHN0ci5sZW5ndGgpLmpvaW4oXCIwXCIpICsgc3RyO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBTdHJpbmdcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNDb250YWluKHN0cixjb250YWluKSB7XG5cbiAgICAvLyBzdHLjga7kuK3jgassY29udGFpbuOBjOWtmOWcqOOBl+OBn+OCiVxuICAgIGlmICggc3RyLmluZGV4T2YoY29udGFpbikgIT0gLTEgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIC8vIDDln4vjgoHjgacy5qGB44Gr44GZ44KL6Zai5pWwXG4gIGFkZDAoc3RyLG51bT0tMil7XG4gICAgXG4gICAgcmV0dXJuICggXCIwMDAwMDAwMDAwMDBcIiArIHN0ciApLnN1YnN0ciggbnVtICk7XG5cbiAgfVxuXG4gIGZsb2F0Rm9ybWF0KCBudW1iZXIsIG4gKSB7XG5cbiAgICB2YXIgX3BvdyA9IE1hdGgucG93KCAxMCAsIG4gKSA7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoIG51bWJlciAqIF9wb3cgKSAvIF9wb3cgO1xuXG4gIH1cbiAgICBcbiAgLy8g5YCk5q616KGo6KiYXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByaWNlKG51bSkge1xuXG4gICAgcmV0dXJuIFN0cmluZyhudW0pLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgJyQxLCcpO1xuXG4gIH1cblxuICAvLyDmloflrZfliJfjgpLlj43ou6JcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHN0ciA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIHJldHVybiA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0clJldmVyc2Uoc3RyKSB7XG5cbiAgICB2YXIgaSwgbGVuLCByZXM7XG4gICAgcmVzID0gXCJcIjtcbiAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgIGkgPSAxO1xuICAgIHdoaWxlIChpIDw9IGxlbikge1xuICAgICAgcmVzICs9IHN0ci5zdWJzdHIoLWksIDEpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuXG4gIH1cbiAgXG4gIC8vIOaWh+Wtl+WIl+OBruWFqOe9ruaPm1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsICA6IOaWh+Wtl+WIl1xuICAvLyBAb2VnICA6IOe9ruaPm+WJjeOBruaWh+Wtl+WIl1xuICAvLyBAZGVzdCA6IOe9ruaPm+W+jOOBruaWh+Wtl+WIl1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXBsYWNlQWxsKHZhbCwgb3JnLCBkZXN0KSB7XG5cbiAgICByZXR1cm4gdmFsLnNwbGl0KG9yZykuam9pbihkZXN0KTtcblxuICB9ICAgIFxuICBcbiAgc3RyUmVwbGFjZShzdHIsIGJlZm9yZSwgYWZ0ZXIpIHtcblxuICAgIHZhciByID0gbmV3IFJlZ0V4cCggYmVmb3JlLCAnZycpO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCByICwgYWZ0ZXIgKTtcblxuICB9ICAgIFxuICBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldE5vdygpIHtcblxuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMubm93LmdldFRpbWUoKTtcblxuICB9XG5cbiAgZWxhcHNlZCgpIHtcblxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZTtcblxuICB9XG5cbiAgbSgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKCB0aGlzLmVsYXBzZWRUaW1lICsgMTAwIC8gNjAgKTtcblxuICB9XG5cbiAgcygpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZWxhcHNlZFRpbWUgLyAxMDAwKTtcblxuICB9XG5cbiAgbXMoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkVGltZTtcbiAgICBcbiAgfVxuXG4gIHRpbWUoKSB7XG5cbiAgICB0aGlzLmdldE5vdygpO1xuXG4gICAgdGhpcy5ob3VyID0gdGhpcy5ub3cuZ2V0SG91cnMoKTsgICAgICAgICAgLy8g5pmCXG4gICAgdGhpcy5taW51dGUgPSB0aGlzLm5vdy5nZXRNaW51dGVzKCk7ICAgICAgLy8g5YiGXG4gICAgdGhpcy5zZWNvbmQgPSB0aGlzLm5vdy5nZXRTZWNvbmRzKCk7XG4gICAgdGhpcy5taWxsU2Vjb25kID0gdGhpcy5ub3cuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgfVxuXG4gIGRhdGUoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RGF0ZSgpO1xuXG4gIH1cblxuICBtb250aHMoKSB7XG5cbiAgICB2YXIgbW9udGhkYXlzID0gbmV3IEFycmF5KDMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEpO1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldE1vbnRoKCkgKyAxO1xuXG4gIH1cblxuICB5ZWFyKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgfVxuXG4gIGRheSgpIHtcblxuICAgIC8vIOabnOaXpSAo5pel5pys6KqeKVxuICAgIHZhciB3ZWVrRGF5SlAgPSBbXCLml6VcIixcIuaciFwiLFwi54GrXCIsXCLmsLRcIixcIuacqFwiLFwi6YeRXCIsXCLlnJ9cIl0gO1xuICAgIHZhciB3REogPSB3ZWVrRGF5SlBbdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICAgIC8vIOabnOaXpSAo6Iux6KqeKVxuICAgIHZhciB3ZWVrRGF5RU4gPSBbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0gO1xuICAgIHZhciB3REUgPSB3ZWVrRGF5RU5bdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICB9XG4gIFxuICAvLyDmlbDml6Xlvozjga5EYXRl44Kq44OW44K444Kn44Kv44OI5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFmdGVyRGF5KGRhdGUsIG51bSkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgTnVtYmVyKG51bSkgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRhIHR5cGUgY2hlY2tcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNPYmplY3QodmFsdWUsIGlnbm9yZUFycmF5KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgfVxuXG4gIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgfVxuXG4gIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBpc0FycmF5KHZhbHVlKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGlzTnVsbCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xuICB9XG5cbiAgaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBvdGhlclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0SW1nU1BTaXplICgkdGFyZ2V0KXtcblxuICAgIC8vIHJlc3BvbnNpdmUgc3Djga7jgajjgY3lh6bnkIZcbiAgICBpZiAoIXRoaXMuaXNSZXNTUCkgcmV0dXJuO1xuICAgIC8vIOS4gOW6puOBoOOBkeWHpueQhlxuICAgIC8vIGlmICh0aGlzLmlzU2V0U1BTaXplKSByZXR1cm47XG4gICAgLy8gdGhpcy5pc1NldFNQU2l6ZSA9IHRydWU7XG5cbiAgICB2YXIgJGltZyA9ICR0YXJnZXQsXG4gICAgICAgIGxlbiA9ICRpbWcubGVuZ3RoO1xuXG4gICAgJGltZy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICB2YXIgdyA9IE1hdGguZmxvb3IoJCh0aGlzKS53aWR0aCgpIC8gMiksXG4gICAgICAgICAgICBoID0gTWF0aC5mbG9vcigkKHRoaXMpLmhlaWdodCgpIC8gMik7XG5cbiAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICd3aWR0aCc6IHcsXG4gICAgICAgICAgICAnaGVpZ2h0JzogaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxlbiA9PSBpICsgMSkgJCh3aW5kb3cpLnRyaWdnZXIoJ3NldFNwWmllRW5kJyk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICDjgrnjg57jg5vmk43kvZznhKHlirlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldFByZXZlbnQoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ3RvdWNobW92ZS5ub0NvbnRyb2wnLCBmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7fSk7XG5cbiAgfVxuXG4gIHJlbW92ZVByZXZlbnQoKSB7XG5cbiAgICAkKHdpbmRvdykub2ZmKCd0b3VjaG1vdmUubm9Db250cm9sJyk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAgaG9zdCxwcm90Y29sXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcm90b2NvbCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbDtcblxuICB9XG4gICAgXG4gIGhvc3QoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgLy8gcmV0dXJuIGxvY2F0aW9uLmhvc3RcblxuICB9XG5cbiAgcG9ydCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wb3J0O1xuXG4gIH1cbiAgICAgICAgXG4gIHBhdGgoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcblxuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzKGUpIHtcblxuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIGRpc2FibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIC8vIG9sZGVyIEZGXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub253aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vZGVybiBzdGFuZGFyZFxuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBvbGRlciBicm93c2VycywgSUVcbiAgICB3aW5kb3cub250b3VjaG1vdmUgID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9iaWxlXG4gICAgZG9jdW1lbnQub25rZXlkb3duICA9IHRoaXMucHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzO1xuXG4gIH1cblxuICBlbmFibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9ud2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9VdGlsLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRnVuY1xuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuYmxhbmsoKTtcbiAgICB0aGlzLmRlYnVnZ2VyKCk7XG4gICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgICB0aGlzLmV4cGFuZGpRdWVyeSgpO1xuXG4gIH1cblxuICBibGFuaygpIHtcblxuICAgICQoKCk9PnskKCcuYmxhbmsnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJyk7fSk7XG5cbiAgfVxuXG4gIGRlYnVnZ2VyKCkge1xuXG4gICAgLy8g44OH44OQ44OD44Kw44Oi44O844OJ5YiH5pu/XG4gICAgdmFyIFJFTEVBU0UgPSBnYi5pbi5jb25mLlJFTEVBU0U7XG5cbiAgICAvLyDnva7mj5vlr77osaHjga7jg6Hjgr3jg4Pjg4njgpLphY3liJfjgajjgZfjgabkv53mjIHjgZnjgotcbiAgICB2YXIgbWV0aG9kcyA9IFtcbiAgICAgICdsb2cnLFxuICAgICAgJ2RlYnVnJyxcbiAgICAgICdpbmZvJyxcbiAgICAgICd3YXJuJyxcbiAgICAgICdlcnJvcicsXG4gICAgICAnZGlyJyxcbiAgICAgICd0cmFjZScsXG4gICAgICAnYXNzZXJ0JyxcbiAgICAgICdkaXJ4bWwnLFxuICAgICAgJ2dyb3VwJyxcbiAgICAgICdncm91cEVuZCcsXG4gICAgICAndGltZScsXG4gICAgICAndGltZUVuZCcsXG4gICAgICAnY291bnQnLFxuICAgICAgJ3Byb2ZpbGUnLFxuICAgICAgJ3Byb2ZpbGVFbmQnXG4gICAgXTtcblxuICAgIC8vIGNvbnNvbGXjgYzkvb/jgYjjgarjgYTloLTlkIjjga/nqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgpLoqK3lrprjgZfjgabjgYrjgY9cbiAgICBpZiggdHlwZW9mIHdpbmRvdy5jb25zb2xlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xuICAgIH1cblxuICAgIC8vIOWQhOODoeOCveODg+ODieOCkndpbmRvd+OBuOebtOaOpei/veWKoOOBl+OBpuihjOOBj1xuICAgIGZvciggdmFyIGkgaW4gbWV0aG9kcyApe1xuICAgICAgKGZ1bmN0aW9uKCBtICl7XG5cbiAgICAgICAvLyBjb25zb2xl44Gr44GC44KL77yf44OH44OQ44OD44Kw44Oi44O844OJ44Gv5pyJ5Yq577yfY29uc29sZeOBruOCguOBruOBr+mWouaVsO+8n1xuICAgICAgIGlmKCBjb25zb2xlW21dICYmICFSRUxFQVNFICYmIHR5cGVvZiBjb25zb2xlW21dID09PSBcImZ1bmN0aW9uXCIgKXtcbiAgICAgICAgd2luZG93W21dID0gY29uc29sZVttXS5iaW5kKGNvbnNvbGUpO1xuICAgICAgIH0gZWxzZSB744CALy8gZGVidWdNb2Rl44GMZmFsc2Us44KC44GX44GP44Gv6Kmy5b2T44Oh44K944OD44OJ44GM5a2Y5Zyo44GX44Gq44GE5aC05ZCI44Gv44CB56m644Gu44Oh44K944OD44OJ44KS55So5oSP44GZ44KLXG4gICAgICAgIHdpbmRvd1ttXSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICB9XG5cbiAgICAgIH0pKCBtZXRob2RzW2ldICk7XG4gICAgfVxuXG4gIH1cblxuICBwcmVwZW5kKHBhcmFtKSB7XG5cbiAgICAkKCdib2R5JykucHJlcGVuZChwYXJhbSk7XG5cbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcblxuICAgIHZhciBGUFMgPSAxMDAwLzYwO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8gY2hyb21l44KE5pyA5paw44GuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8g5Y+k44GEZmlyZWZveOeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICAvLyBzYWZhcmk25Lul5YmN44CBaU9TNiBzYWZhcmnnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCBGUFMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIHRpbWVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTsgICAgICBcblxuICB9XG5cbiAgZXhwYW5kalF1ZXJ5KCkge1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICB3OjAsIFxuICAgICAgaDowLCBcbiAgICAgIGFkanVzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCcsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RXOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RIOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNoZWNrQ3NzQmxlbmQoKSB7XG5cbiAgICBpZiAoJ0NTUycgaW4gd2luZG93ICYmICdzdXBwb3J0cycgaW4gd2luZG93LkNTUykge1xuICAgICAgaWYgKCF3aW5kb3cuQ1NTLnN1cHBvcnRzKCdtaXgtYmxlbmQtbW9kZScsICdzb2Z0LWxpZ2h0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nKGdiLmluLnUuaXNJRSk7XG5cbiAgICBpZiAoZ2IuaW4udS5pc0lFKSB7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgbm90U2F2ZUltZygpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHBjXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcblxuICAgICAgJCgoKT0+e1xuICAgICAgICAkKFwiaW1nXCIpLm9uKFwiY29udGV4dG1lbnVcIiwoKT0+e1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHNwIGFuZHJvaWRcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciB2ID0gZ2IuaW4udS5pc0FuZHJvaWRWZXJzaW9uKCk7XG5cbiAgICBpZiAodj09dW5kZWZpbmVkKSByZXR1cm47XG4gICAgaWYgKHY8NSkge1xuXG4gICAgICB2YXIgdGltZXI7XG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hzdGFydFwiLCgpPT57XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIGFsZXJ0KFwi55S75YOP44Gv5L+d5a2Y44Gn44GN44G+44Gb44KTXCIpXG4gICAgICAgIH0sNTAwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoZW5kXCIsKCk9PntcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkgICAgICBcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0Z1bmMuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFJlYWR5TWdyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgUmVhZHlQZXJjZW50IGZyb20gJy4uLy4uL0Z1bmMvUmVhZHlQZXJjZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHlNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5jb21wbGV0ZWQgPSAwO1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMuY3VycmVudCA9IDA7XG5cblxuICAgIHRoaXMub25Db21wbGV0ZWRGdW5jID0gKCk9Pnt9O1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICB0aGlzLnJlYWR5UGVyY2VudCA9IG5ldyBSZWFkeVBlcmNlbnQoKTtcblxuICB9XG5cbiAgb25Db21wbGV0ZSgpIHtcblxuICAgIC8vIHVwZGF0ZeWHpueQhuOCkuOChOOCgeOCi1xuICAgIGdiLmluLnVwLnJlbW92ZSgncmVhZHlQZXJjZW50JywgdGhpcy5yZWFkeVBlcmNlbnQudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgLy8g5rqW5YKZ5a6M5LqG5b6M44Gu5Yem55CGXG4gICAgdGhpcy5vbkNvbXBsZXRlZEZ1bmMoKTtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG4gICAgICAgXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBSZWFkeVBlcmNlbnRcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWR5UGVyY2VudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLiRsb2FkaW5nID0gJCgnI2xvYWRpbmcnKTtcbiAgICB0aGlzLiRiYXIgPSAkKCcubG9hZGluZ0JhcicpO1xuICAgIHRoaXMuJHBlcmNlbnQgPSAkKCcubG9hZGluZ1BlcmNlbnQnKTtcblxuICAgIHRoaXMuaXNMb2NrID0gZmFsc2U7XG4gICAgdGhpcy5zZXRUaW1lb3V0TG9jayA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgaWYgKCFnYi5pbi5jb25mLndlYkZvbnRMb2FkZWQpIHJldHVybjtcblxuICAgIHZhciB0YXJnZXQgPSAoZ2IuaW4ucm0uY29tcGxldGVkIC8gZ2IuaW4ucm0udG90YWwpICogMTAwO1xuXG4gICAgZ2IuaW4ucm0uY3VycmVudCArPSAodGFyZ2V0IC0gZ2IuaW4ucm0uY3VycmVudCkgKiAwLjE7XG4gICAgLy8gdGhpcy4kYmFyLmNzcyh7IHdpZHRoOiBnYi5pbi5ybS5jdXJyZW50ICsgJyUnIH0pOyAvL3BlcmNlbnQg5Ly444Gw44GZXG4gICAgdGhpcy4kcGVyY2VudC50ZXh0KCBNYXRoLmZsb29yKGdiLmluLnJtLmN1cnJlbnQpICsgJyUnKTtcblxuICAgIC8vIOe1guS6huWHpueQhlxuICAgIGlmIChnYi5pbi5ybS5jdXJyZW50ID49IDEwMCAmJiAhdGhpcy5pc0xvY2spIHtcbiAgICAgIHRoaXMuaXNMb2NrID0gdHJ1ZTtcbiAgICAgIGdiLmluLnJtLm9uQ29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvLyBjdXJyZW50IOOBjCA5OS45IOOCiOOCiuWkp+OBjeOBkeOCjOOBsCAxMDAg44Go6KaL44Gq44GX44Gm57WC5LqG5Yem55CG44G4XG4gICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgPiA5OS45KSB7XG4gICAgICBnYi5pbi5ybS5jdXJyZW50ID0gMTAwO1xuICAgIH1cblxuICAgIC8vIGllMTHjga8sOTnjgavjgarjgaPjgabjgIE156eS57WM44Gj44Gm44KCMTAw44Gn44Gq44GR44KM44Gw44CB5by35Yi255qE44Gr44CB6KGo56S6XG4gICAgLy8g44Gd44Gu6Zqb44CBY29tcGxldGXjgZfjgabnhKHjgZHjgozjgbDog4zmma/jga/pnZnmraLnlLvjgatcbiAgICAvLyBpZiAoZ2IuaW4udS5pc0lFMTEpIHtcblxuICAgIGlmIChnYi5pbi5ybS5jdXJyZW50ID4gOTkgJiYgIXRoaXMuc2V0VGltZW91dExvY2spIHtcbiAgICB0aGlzLnNldFRpbWVvdXRMb2NrID0gdHJ1ZTtcblxuICAgIGxvZygnOTkhISEhJyk7XG4gICAgICAvLyBnYi5pbi5ybS5jdXJyZW50ID0gOTk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCk9PntcblxuICAgICAgICBsb2coJzUhISEnKVxuXG4gICAgICAgIGlmIChnYi5pbi5ybS5jdXJyZW50ICE9PSAxMDApIHtcblxuICAgICAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgICAgICAgICQoJy5iZ092ZXJsYXlJbWcnKS5hZGRDbGFzcygnaXNBY3RpdmUnKTtcblxuICAgICAgICAgIGxvZygn5a++5b+c77yB77yBJylcblxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgfSw1MDAwKTtcblxuICAgIH07XG5cbiAgICAvLyB9O1xuXG4gIH1cblxuICByZW1vdmUoKSB7XG5cblxuICAgIFR3ZWVuTWF4XG4gICAgICAudG8odGhpcy4kbG9hZGluZywgMi44LCB7XG4gICAgICAgIHNjYWxlOiAxLjIsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW5PdXQsXG4gICAgICAgIG9uQ29tcGxldGU6KCk9PntcbiAgICAgICAgICB0aGlzLiRsb2FkaW5nLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KSAgICBcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAuYWRkKCdyZWFkeVBlcmNlbnQnLHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgIFxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9SZWFkeVBlcmNlbnQuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog55S76Z2i5pu05paw44Kv44Op44K5XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVXBkYXRlTWdyXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBkYXRlTWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8v5pu05paw5Zue5pWwXG4gICAgdGhpcy5jbnQgPSAwO1xuXG4gICAgLy/mr47jg5Xjg6zjg7zjg6Dlrp/ooYzjgZXjgZvjgovplqLmlbDjgpLkv53mjIFcbiAgICB0aGlzLnVwZGF0ZUxpc3QgPSBbXTtcblxuICAgIHRoaXMubGVuID0gMDtcbiAgICB0aGlzLlRpbWVyID0gbnVsbDtcbiAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuXG4gIH1cblxuICAvKipcbiAgICogIOWun+ihjOOBl+OBn+OBhOmWouaVsOOCkueZu+mMslxuICAgKiAgZnVuYyA6IOmWouaVsFxuICAgKi9cbiAgYWRkKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLnVwZGF0ZUxpc3QucHVzaChvYmopO1xuXG4gIH1cblxuICAvKipcbiAgICogIOWun+ihjOOBl+OBn+OBhOmWouaVsOOCkuWJiumZpFxuICAgKiAgZnVuYyA6IOmWouaVsFxuICAgKi9cbiAgcmVtb3ZlKG5hbWUpIHtcblxuICAgIHZhciB0YXJnZXQgPSB7bmFtZTpuYW1lLGZ1bmM6KCk9Pnt9fTtcblxuICAgIFVwZGF0ZU1nci5hcnJSZW1vdmUodGhpcy51cGRhdGVMaXN0LCB0YXJnZXQpO1xuXG4gIH1cblxuICAvKipcbiAgICogIOabtOaWsCjnmbvpjLLjgZXjgozjgZ/plqLmlbDjga7nt4/mlbDliIblrp/ooYzjgZnjgospXG4gICAqL1xuICB1cGRhdGUoKSB7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMudXBkYXRlTGlzdCkgdGhpcy51cGRhdGVMaXN0W2ldLmZ1bmMoKTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA5pu05paw44Gu5a6f6KGM6Zai5pWw44Gu5YaF5a65XG4gICAqL1xuICBsb29wKCkge1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmNudCsrO1xuXG4gICAgdGhpcy5UaW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG4gICAgaWYgKHRoaXMuaXNTdG9wKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLlRpbWVyKTtcbiAgICBcblxuICB9XG5cbiAgLyoqXG4gICAq44CA5pu05paw5YGc5q2iXG4gICAqL1xuICBzdG9wKCkge1xuXG4gICAgdGhpcy5pc1N0b3AgPSB0cnVlO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDmm7TmlrDlho3plotcbiAgICovXG4gIHJlc3VtZSgpIHtcblxuICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XG4gICAgdGhpcy5sb29wKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOmdmeeahOODoeODs+ODkOmWouaVsFxuICAgKi9cbiAgc3RhdGljIGFyclJlbW92ZShhcnIgLCB0YXJnZXQpIHtcblxuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIHZhciBjaGVjaztcbiAgICBmb3IoIHZhciBpID0gMCA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIGNoZWNrID0gYXJyWyBpIF07XG5cbiAgICAgIGlmKCBjaGVjay5uYW1lID09IHRhcmdldC5uYW1lKXtcbiAgICAgICAgYXJyLnNwbGljZSggaSAsIDEgKSA7XG4gICAgICAgIGktLTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUmVzaXplTWdyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNpemVNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5yZXNpemVMaXN0ID0gW107XG4gICAgdGhpcy53cyA9IHt3OjAsIGg6MCwgb2xkVzotMSwgb2xkSDotMX07XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbihlKXtzZWxmLm9uUmVzaXplLmNhbGwoc2VsZixlKTt9KTtcbiAgICB0aGlzLmdldFdpbmRvd1NpemUoKTtcblxuICB9XG5cbiAgb25SZXNpemUoZSkge1xuXG4gICAgdGhpcy5nZXRXaW5kb3dTaXplKCk7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMucmVzaXplTGlzdCkgdGhpcy5yZXNpemVMaXN0W2ldLmZ1bmMoKTtcblxuICB9XG5cbiAgVygpIHtcblxuICAgICAgcmV0dXJuIHRoaXMud3MudztcbiAgICBcbiAgfVxuICBcbiAgSCgpIHtcblxuICAgICAgcmV0dXJuIHRoaXMud3MuaDtcbiAgXG4gIH1cblxuICBnZXRXaW5kb3dTaXplKCl7XG5cbiAgICB2YXIgdyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdGhpcy53cy5vbGRXID0gdGhpcy53cy53O1xuICAgIHRoaXMud3Mub2xkSCA9IHRoaXMud3MuaDtcbiAgICB0aGlzLndzLncgPSB3O1xuICAgIHRoaXMud3MuaCA9IGg7XG5cbiAgfVxuXG4gIGFkZChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy5yZXNpemVMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuXG4gIHJlbW92ZShuYW1lKSB7XG5cbiAgICBSZXNpemVNZ3IuYXJyUmVtb3ZlKHRoaXMucmVzaXplTGlzdCwgbmFtZSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAg6Z2Z55qE44Oh44Oz44OQXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0aWMgYXJyUmVtb3ZlKGFyciAsIG5hbWUpIHtcblxuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIHZhciBjaGVjaztcbiAgICBmb3IoIHZhciBpID0gMCA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIGNoZWNrID0gYXJyWyBpIF07XG5cbiAgICAgIGlmKCBjaGVjay5uYW1lID09IG5hbWUpe1xuICAgICAgICBhcnIuc3BsaWNlKCBpICwgMSApIDtcbiAgICAgICAgaS0tO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvUmVzaXplTWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTY3JvbGxNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbE1nciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNjcm9sbExpc3QgPSBbXTtcbiAgICB0aGlzLnNjcm9sbEVuZExpc3QgPSBbXTtcbiAgICB0aGlzLncgPSAwO3RoaXMuaCA9IDA7XG4gICAgdGhpcy5zdCA9IDA7IC8vIOePvuWcqOOBrnNjcm9sbCB0b3BcbiAgICB0aGlzLnNiID0gMDsgLy8g54++5Zyo44Guc2Nyb2xsIGJvdHRvbVxuICAgIHRoaXMuc3YgPSAwOyAvLyDnj77lnKjjga7jgrnjgq/jg63jg7zjg6vph49cblxuICAgIHRoaXMuU1RBbW91bnQgPSAwO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcblxuICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZ2V0V2luZG93U2l6ZSgpO1xuICAgIHRoaXMuYWRkKCdlbmQnLHRoaXMuZW5kLmJpbmQodGhpcykpO1xuXG4gIH1cblxuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMuc2Nyb2xsTGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cblxuICByZW1vdmUobmFtZSkge1xuXG4gICAgU2Nyb2xsTWdyLmFyclJlbW92ZSh0aGlzLnNjcm9sbExpc3QsIG5hbWUpO1xuXG4gIH1cblxuICByZW1vdmUodGFyZ2V0KSB7XG5cbiAgICBTY3JvbGxNZ3IuYXJyUmVtb3ZlKHRoaXMuc2Nyb2xsTGlzdCwgdGFyZ2V0KTtcblxuICB9XG5cbiAgb25SZXNpemUoZSkge1xuXG4gICAgdGhpcy5nZXRXaW5kb3dTaXplKCk7XG5cbiAgfVxuXG4gIG9uU2Nyb2xsKGUpIHtcblxuICAgIGlmICh0aGlzLmlzU3RhcnQpIHtcbiAgICAgIHRoaXMuaXNTdGFydCA9IGZhbHNlO1xuICAgICAgLy8gbG9nKCdyZXNpemVTdGFydCcpO1xuICAgICAgLy8g5pyA5Yid44Gg44GR44Gu5Yem55CGXG4gICAgfTtcblxuICAgIHRoaXMuc3QgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgdGhpcy5zYiA9IHRoaXMuc3QgKyB0aGlzLmg7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2Nyb2xsTGlzdCkgdGhpcy5zY3JvbGxMaXN0W2ldLmZ1bmMoKTtcblxuICB9XG5cbiAgb25Nb3VzZVdoZWVsKGUsZGVsdGEsZGVsdGFYLGRlbHRhWSkge1xuXG4gICAgdGhpcy5TVEFtb3VudCA9IGRlbHRhWTtcbiAgICBpZiAoZ2IuaW4udS5pc1dpbigpKSB0aGlzLlNUQW1vdW50ICo9IDYwO1xuICAgIGlmIChnYi5pbi51LmlzRkYoKSAmJiAhZ2IuaW4udS5pc1dpbigpKSB0aGlzLlNUQW1vdW50ICo9IDYwO1xuICAgIC8vIGlmIChNYXRoLmFicyh0aGlzLlNUQW1vdW50KSA+IDEwKSB0aGlzLlNUQW1vdW50ICo9IDAuNDtcbiAgICB0aGlzLm9mZnNldCArPSB0aGlzLlNUQW1vdW50O1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnNjcm9sbExpc3QpIHRoaXMuc2Nyb2xsTGlzdFtpXS5mdW5jKCk7XG5cbiAgfVxuXG4gIGdldFdpbmRvd1NpemUoKXtcblxuICAgIHRoaXMudyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICB9XG5cbiAgZW5kKGUpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh0aGlzLlRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5UaW1lcik7XG4gICAgdGhpcy5UaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmlzU3RhcnQgPSB0cnVlO1xuICAgICAgLy8gbG9nKCdyZXNpemVFbmQnKTtcblxuICAgICAgZm9yICh2YXIgaSBpbiBzZWxmLnNjcm9sbEVuZExpc3QpIHNlbGYuc2Nyb2xsRW5kTGlzdFtpXSgpO1xuXG4gICAgfSwgMjAwKTtcblxuICB9XG5cbiAgYWRkRml4ZWRPYmplY3RTY3JvbGwoJHRhcmdldCkge1xuXG4gICAgdGhpcy5zY3JvbGxMaXN0LnB1c2goZnVuY3Rpb24oKXtcblxuICAgICAgJHRhcmdldC5jc3MoXCJsZWZ0XCIsIC0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoZSk9Pnt0aGlzLm9uUmVzaXplKGUpO30pO1xuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgKGUpPT57dGhpcy5vblNjcm9sbChlKTt9KTtcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2V3aGVlbCcsIChlLGRlbHRhLGRlbHRhWCxkZWx0YVkpPT57dGhpcy5vbk1vdXNlV2hlZWwoZSxkZWx0YSxkZWx0YVgsZGVsdGFZKTt9KTtcblxuICB9XG4gICAgICAgXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICDpnZnnmoTjg6Hjg7Pjg5BcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0YXRpYyBhcnJSZW1vdmUoYXJyICwgbmFtZSkge1xuXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGNoZWNrO1xuICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgY2hlY2sgPSBhcnJbIGkgXTtcblxuICAgICAgaWYoIGNoZWNrLm5hbWUgPT0gbmFtZSl7XG4gICAgICAgIGFyci5zcGxpY2UoIGkgLCAxICkgO1xuICAgICAgICBpLS07XG4gICAgICAgIGxlbi0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9TY3JvbGxNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIE1vdXNlTWdyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZU1nciB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCA9ICQoZG9jdW1lbnQpKSB7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkdGFyZ2V0O1xuXG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuXG4gICAgdGhpcy5jeCA9IDA7XG4gICAgdGhpcy5jeSA9IDA7XG5cbiAgICB0aGlzLm1vdXNlTW92ZUxpc3QgPSBbe25hbWU6J2RlZicsZnVuYzooKT0+e319XTtcbiAgICB0aGlzLm1vdXNlTW92ZVN0YXJ0TGlzdCA9IFt7bmFtZTonZGVmJyxmdW5jOigpPT57fX1dO1xuICAgIHRoaXMubW91c2VNb3ZlRW5kTGlzdCA9IFt7bmFtZTonZGVmJyxmdW5jOigpPT57fX1dO1xuXG4gICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcbiAgICB0aGlzLlRpbWVyID0gbnVsbDtcbiAgICB0aGlzLmVuZFRpbWUgPSAxMDtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIHRoaXMuYWRkKCdvbkVuZCcsIHRoaXMub25FbmQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG4gIG9uVG91Y2htb3ZlKGUpIHtcblxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMueCA9IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDsgXG4gICAgdGhpcy55ID0gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuXG4gIH1cblxuICBvbk1vdXNlbW92ZShlKSB7XG5cbiAgICAvLyBsb2codGhpcy5tb3VzZU1vdmVMaXN0KTtcblxuICAgIGlmICh0aGlzLmlzU3RhcnQpIHtcbiAgICAgIHRoaXMuaXNTdGFydCA9IGZhbHNlO1xuXG4gICAgICAvLyDmnIDliJ3jgaDjgZHjga7lh6bnkIZcbiAgICAgIC8vIGxvZygnbW92ZVN0YXJ0Jyk7XG5cbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5tb3VzZU1vdmVTdGFydExpc3QpIHRoaXMubW91c2VNb3ZlU3RhcnRMaXN0W2ldLmZ1bmMoKTtcblxuICAgIH07XG5cbiAgICBpZiAoZS5vZmZzZXRYPT11bmRlZmluZWQpIHsgLy8gdGhpcyB3b3JrcyBmb3IgRmlyZWZveFxuICAgICAgIHRoaXMueCA9IGUucGFnZVggLSB0aGlzLiR0YXJnZXQub2Zmc2V0KCkubGVmdDtcbiAgICAgICB0aGlzLnkgPSBlLnBhZ2VZIC0gdGhpcy4kdGFyZ2V0Lm9mZnNldCgpLnRvcDtcbiAgICAgfSBlbHNlIHsgLy8gd29ya3MgaW4gR29vZ2xlIENocm9tZVxuICAgICAgIHRoaXMueCA9IGUucGFnZVggLSAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpO1xuICAgICAgIHRoaXMueSA9IGUucGFnZVkgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgIH1cblxuICAgIHRoaXMuY3ggPSAoIGUuY2xpZW50WCAtIGdiLmluLnIuVygpLzIgKTtcbiAgICB0aGlzLmN5ID0gKCBlLmNsaWVudFkgLSBnYi5pbi5yLkgoKS8yICk7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMubW91c2VNb3ZlTGlzdCkgdGhpcy5tb3VzZU1vdmVMaXN0W2ldLmZ1bmMoKTtcblxuICB9XG5cbiAgb25FbmQoZSkge1xuXG4gICAgaWYgKHRoaXMuVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLlRpbWVyKTtcbiAgICB0aGlzLlRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcblxuICAgICAgLy8gbG9nKCdtb3ZlRW5kJyk7XG5cbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5tb3VzZU1vdmVFbmRMaXN0KSB0aGlzLm1vdXNlTW92ZUVuZExpc3RbaV0uZnVuYygpO1xuXG4gICAgfSwgdGhpcy5lbmRUaW1lKTtcblxuICB9XG5cbiAgYWRkKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLm1vdXNlTW92ZUxpc3QucHVzaChvYmopO1xuICAgIFxuICB9XG4gXG4gIGFkZFN0YXJ0IChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy5tb3VzZU1vdmVTdGFydExpc3QucHVzaChvYmopO1xuICAgIFxuICB9XG5cbiAgYWRkRW5kIChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy5tb3VzZU1vdmVFbmRMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuXG4gIHJlbW92ZShuYW1lKSB7XG5cbiAgICBNb3VzZU1nci5hcnJSZW1vdmUodGhpcy5tb3VzZU1vdmVMaXN0LCBuYW1lKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICDpnZnnmoTjg6Hjg7Pjg5BcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0YXRpYyBhcnJSZW1vdmUoYXJyICwgbmFtZSkge1xuXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGNoZWNrO1xuICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgY2hlY2sgPSBhcnJbIGkgXTtcblxuICAgICAgaWYoIGNoZWNrLm5hbWUgPT0gbmFtZSl7XG4gICAgICAgIGFyci5zcGxpY2UoIGkgLCAxICkgO1xuICAgICAgICBpLS07XG4gICAgICAgIGxlbi0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpe1xuXG4gICAgdGhpcy4kdGFyZ2V0Lm9mZihcInRvdWNobW92ZS5Nb3VzZU1nclwiKTtcbiAgICB0aGlzLiR0YXJnZXQub2ZmKFwibW91c2Vtb3ZlLk1vdXNlTWdyXCIpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKXtcblxuICAgIHRoaXMuJHRhcmdldC5vbihcInRvdWNobW92ZS5Nb3VzZU1nclwiLCAoZSk9Pnt0aGlzLm9uVG91Y2htb3ZlKGUpO30pO1xuICAgIHRoaXMuJHRhcmdldC5vbihcIm1vdXNlbW92ZS5Nb3VzZU1nclwiLCAoZSk9Pnt0aGlzLm9uTW91c2Vtb3ZlKGUpO30pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvTW91c2VNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIExvYWRNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXIuanMnO1xuaW1wb3J0IFNlYzAxVmlkZW8gZnJvbSAnLi4vRGlzcGxheS9VSS9TZWMwMVZpZGVvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZE1nciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgLy8g44Gd44Gu5LuWXG4gICAgLy8g44K944O844K344Oj44Or44K544Kv44Oq44OX44OI44Gq44GpXG4gICAgLy8gdGhpcy5zbnNTY3JpcHQoKTtcblxuICAgIC8vIHRoaXMubG9hZFlvdXR1YmVTY3JpcHQoKTtcblxuICAgIC8vIHNlY3Rpb24wMuOBp+S9v+OBhuWkp+mHj+OBrueUu+WDj+OCkuODreODvOODiSAvLyB3ZWIgd29ya2Vy44Gq44Gp44KC5L2/44Gj44GmXG4gICAgLy8gdGhpcy5zZWMwMkltZygpO1xuXG4gICAgLy8gdGhpcy53ZWJGb250KCk7XG5cbiAgfVxuXG4gIGxvYWRZb3V0dWJlU2NyaXB0KCkge1xuXG4gICAgdmFyIGxvYWRlciA9IG5ldyBMb2FkZXIoKTtcblxuICAgIHZhciBsZW4gPSAxO1xuICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjsgLy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG4gICAgaWYgKGdiLmluLnUuaXNTUCkgZ2IuaW4ucm0uY29tcGxldGVkKys7XG5cbiAgICB2YXIgY2IgPSAoKT0+e1xuXG4gICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcblxuICAgIH1cblxuICAgIGxvYWRlci55b3V0dWJlSWZyYW1lU2NyaXB0KGNiKTtcblxuICB9XG5cbiAgc2VjMDJJbWcoKSB7XG5cbiAgICAvLyBiZ1ZpZGVvVGlsZeeUqOOBrumAo+eVqueUu+WDj+OBruiqreOBv+i+vOOBv1xuICAgIGdiLmluLmxvYWRTZWMwMkltZyA9IHRoaXMubG9hZGVyID0gbmV3IExvYWRlcigpO1xuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuICAgICAgdmFyIGxlbiA9IGdiLmluLmNvbmYuc2VjMDJJbWdOdW07XG4gICAgICBnYi5pbi5ybS50b3RhbCArPSBsZW4744CALy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG4gICAgICB2YXIgcGF0aCA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvbW92aWUvYmdJbWcvJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxlbiA9IDE5O1xuICAgICAgZ2IuaW4ucm0udG90YWwgKz0gbGVuO+OAgC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuICAgICAgdmFyIHBhdGggPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL21vdmllL2JnSW1nU1AvJztcbiAgICB9XG5cbiAgICB2YXIgY2IgPSAoKT0+e1xuICAgICAgLy8gZ2IuaW4uU2VjMDJCZy5jcmVhdGUoKTtcbiAgICB9XG4gICAgdmFyIGNiMDIgPSAoKT0+e1xuICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5sb2FkZXIuaW1nU2VyaWFsTG9hZChsZW4scGF0aCwndGZueV8nLGNiLGNiMDIpO1xuICAgIHRoaXMubG9hZGVyLmltZyhsZW4rMSxwYXRoLCd0Zm55XycsY2IsY2IwMik7XG5cbiAgfVxuXG4gIHNlY3Rpb24wNFByb2R1Y3RTaGFkZXIoKSB7XG5cbiAgICB2YXIgc2hhZGVycyA9IFtdO1xuICAgIHZhciBzaGFkZXJMb2FkTGlzdCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuQ2xvY2ssXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGdiLkNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5QbGFzbWEsXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGdiLlNlcGlhLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5Nb3NhaWMsXG4gICAgICAgICAgICAgICAgICAgICAgIGdiLlpvb21CbHVyLFxuICAgICAgICAgICAgICAgICAgICAgICBnYi5ab29tQmx1cixcbiAgICAgICAgICAgICAgICAgICAgICAgZ2IuVHJhbnNpdGlvbjAyLFxuICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgIHZhciBsZW4gPSBzaGFkZXJMb2FkTGlzdC5sZW5ndGg7XG4gICAgZ2IuaW4ucm0udG90YWwgKz0gbGVuOyAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcblxuICAgIHZhciBzaGFkZXJTZXJpYWxMb2FkID0gKGxlbiwgY2IpPT57XG5cbiAgICAgICAgdmFyIHNoYWRlcixjbnQ9MDtcblxuICAgICAgICB2YXIgbG9hZCA9IChpKT0+e1xuICAgICAgICAgIHNoYWRlciA9IG5ldyBzaGFkZXJMb2FkTGlzdFtpXShjb21wKTtcbiAgICAgICAgICBzaGFkZXJzLnB1c2goc2hhZGVyKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY29tcCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgY250Kys7XG4gICAgICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgICAgICAgaWYoY250ID09IGxlbikgY2Ioc2hhZGVycyk7XG4gICAgICAgICAgZWxzZSBsb2FkKGNudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbG9hZChjbnQpO1xuXG4gICAgfVxuXG4gICAgc2hhZGVyU2VyaWFsTG9hZChzaGFkZXJMb2FkTGlzdC5sZW5ndGgsKHNoYWRlcnMpPT57XG5cbiAgICAgIHRoaXMuc2hhZGVycyA9IHNoYWRlcnM7XG4gICAgICB0aGlzLnNlY3Rpb24wNFByb2R1Y3RJbWcoKTtcblxuICAgIH0pXG5cbiAgfVxuXG4gIHNlY3Rpb24wNFByb2R1Y3RJbWcoKSB7XG5cbiAgICB2YXIgdGV4dHVyZUxpc3QgPSBbXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3QvdGlmZmFueV9oYW5kMS5qcGcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L2Jyb3duLnBuZycsXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3QvYmx1ZS5wbmcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L3doaXRlLnBuZycsXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3QvdGlmZmFueWJsdWUucG5nJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC9waW5rLnBuZycsXG4gICAgXTsgICAgICBcbiAgICB0aGlzLnRleHR1cmVzID0gW107XG5cbiAgICB2YXIgbGVuID0gdGV4dHVyZUxpc3QubGVuZ3RoO1xuICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjsgLy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG5cbiAgICB2YXIgdGV4dHVyZVNlcmlhbExvYWQgPSAobGVuLCBjYik9PntcblxuICAgICAgdmFyIHRleHR1cmUsY250PTA7XG5cbiAgICAgIHZhciBsb2FkID0gKGkpPT57XG4gICAgICAgIHRleHR1cmUgPSBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKHRleHR1cmVMaXN0W2ldLCBudWxsICxjb21wKTtcbiAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKHRleHR1cmUpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGNvbXAgPSBmdW5jdGlvbigpe1xuICAgICAgICBjbnQrKztcbiAgICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgICAgIGlmKGNudCA9PSBsZW4pIGNiKCk7XG4gICAgICAgIGVsc2UgbG9hZChjbnQpO1xuICAgICAgfTtcblxuICAgICAgbG9hZChjbnQpO1xuXG4gICAgfVxuXG4gICAgdGV4dHVyZVNlcmlhbExvYWQodGV4dHVyZUxpc3QubGVuZ3RoLCAoKT0+eyQod2luZG93KS50cmlnZ2VyKCdvblNlY3Rpb24wNFByb2R1Y3RJbWcnKTt9KTtcblxuICB9XG5cbiAgd2ViRm9udCgpIHtcblxuICAgIC8vIHdlYiBmb250IGxvYWRlcueUqHBhcmFtXG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIGN1c3RvbToge1xuICAgICAgICBmYW1pbGllczogW1xuICAgICAgICAgICdDb3Jtb3JhbnQnLFxuICAgICAgICAgICdSb2JvdG8gQ29uZGVuc2VkJ1xuICAgICAgICAgIC8vICdOb3RvIFNhbnMgSmFwYW5lc2UnLFxuICAgICAgICAgIC8vICdSb2JvdG8nLFxuICAgICAgICAgIC8vICdBbGVncmV5YSBTYW5zJyxcbiAgICAgICAgICAvLyAnQWxlZ3JleWEgU2FucyBTQydcbiAgICAgICAgICBdLFxuICAgICAgICB1cmxzOiBbXG4gICAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db3Jtb3JhbnQ6NTAwLDUwMGl8Um9ib3RvK0NvbmRlbnNlZCdcbiAgICAgICAgICAvLyAnL3Byb2plY3QtbmFtZS9hc3NldHMvY3NzL2ZvbnQuY3NzJyxcbiAgICAgICAgICAvLyAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDMwMCcsXG4gICAgICAgICAgLy8gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGVncmV5YStTYW5zOjQwMCwxMDAnLFxuICAgICAgICAgIC8vICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxlZ3JleWErU2FucytTQzo0MDAsMzAwLDEwMCdcbiAgICAgICAgICBdXG4gICAgICB9LFxuICAgICAgYWN0aXZlOiBmdW5jdGlvbigpIHsgXG4gICAgICAgICAgXG4gICAgICAgICAgbG9nKCd3ZWJGb250ISEhIScpO1xuICAgICAgICAgIGdiLmluLmNvbmYud2ViRm9udExvYWRlZCA9IHRydWU7XG5cbiAgICAgIH0gXG4gICAgfTtcblxuICAgIHZhciBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7ICAgXG4gICAgbG9hZGVyLndlYkZvbnQoY29uZmlnKTtcblxuICB9XG5cbiAgb25FbmQoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZE1nci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTG9hZGVyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5saXN0ID0gW107XG4gICAgdGhpcy5jbnQgPSAwO1xuXG4gIH1cblxuICBqc29uKHNyYyxjYikge1xuXG4gICAgJC5nZXRKU09OKHNyYywgKGRhdGEpPT57XG5cbiAgICAgIGNiKGRhdGEpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIGltZyhsZW4sIHBhdGgsIG5hbWUsIGNiPSgpPT57fSwgY2IwMj0oKT0+e30pe1xuXG4gICAgdmFyIGksIGltZywgbnRoLCBjbnQgPSAxLCBsaXN0ID0gW107XG5cbiAgICBmb3IoaSA9IDE7aSA8IGxlbjtpKyspe1xuICAgICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBudGggPSBnYi5pbi51LmFkZDAoaSwtNSk7XG4gICAgICB0aGlzLmxpc3QucHVzaChpbWcpO1xuICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XG4gICAgICAgIGNiMDIoKTtcbiAgICAgICAgY250Kys7XG4gICAgICAgIGlmKGNudCA9PSBsZW4pIGNiKCk7XG4gICAgICB9XG4gICAgICBpbWcuc3JjID0gcGF0aCtuYW1lK250aCtcIi5qcGdcIjtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIGNiMDIgbG9hZOWujOS6huaZgiDpg73luqbpg73luqbnlKjjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcbiAgaW1nU2VyaWFsTG9hZChsZW4sIHBhdGgsIG5hbWUsIGNiPSgpPT57fSxjYjAyPSgpPT57fSl7XG5cbiAgICB2YXIgaSwgaW1nLCBudGgsIGNudCA9IDAsIGxpc3QgPSBbXTtcblxuICAgIHZhciBsb2FkID0gKGkpPT57XG4gICAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBudGggPSBnYi5pbi51LmFkZDAoaSwtNSk7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKGltZyk7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKT0+e1xuICAgICAgICAgIGNiMDIoKTtcbiAgICAgICAgICBjb21wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1nLnNyYyA9IHBhdGgrbmFtZStudGgrXCIuanBnXCI7XG4gICAgfTtcblxuICAgIHZhciBjb21wID0gKCk9PntcbiAgICAgICAgY250Kys7XG4gICAgICAgIGlmKGNudCA9PSBsZW4pe1xuICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGxvYWQoY250KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkKGNudCk7XG4gIH1cblxuICBhamF4SW1nTG9hZChjYil7XG5cbiAgICB2YXIgaW1nTnVtID0gJCgnaW1nJykubGVuZ3RoO1xuICAgIHZhciBjbnQgPSAwO1xuXG4gICAgJCgnaW1nJykuZWFjaChmdW5jdGlvbihpLCBlbG0pIHtcblxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKT0+e1xuICAgICAgICAgIGNudCsrO1xuICAgICAgICAgIGlmIChjbnQ9PWltZ051bS0xKSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaW1nLnNyYyA9IGVsbS5zcmM7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgdmlkZW8oc3JjLCBjYj0oKT0+e30pIHtcblxuICAgIHZhciBpc0xvYWQgPSBmYWxzZTtcbiAgICB0aGlzLnZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcblxuICAgIHZhciB0eXBlID0gdGhpcy5zdXBwb3J0VmlkZW9FeHQodGhpcy52aWRlbyk7XG4gICAgaWYgKHR5cGUgPT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgKCk9PntcblxuICAgICAgaWYgKCF0aGlzLmlzTG9hZCkge1xuICAgICAgICB0aGlzLmlzTG9hZCA9IHRydWU7XG4gICAgICAgIHRoaXMudmlkZW8ubG9vcCA9IHRydWU7XG4gICAgICAgIHRoaXMudmlkZW8ucGxheSgpO1xuICAgICAgICBjYigpO1xuICAgICAgfVxuXG4gICAgfSxmYWxzZSk7XG5cbiAgICAvLyDjg63jg7zjg4lcbiAgICB0aGlzLnZpZGVvLnNyYyA9IHNyYztcblxuICB9XG5cbiAgeW91dHViZUlmcmFtZVNjcmlwdChjYikge1xuXG4gICAgLy8gSUZyYW1lIFBsYXllciBBUEkg44Gu6Kqt44G/6L6844G/XG4gICAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHRhZy5vbmxvYWQgPSAoKT0+e1xuXG4gICAgICBjYigpO1xuXG4gICAgfTtcblxuICAgIC8vIHRhZy5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcbiAgICB0YWcuc3JjID0gXCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcbiAgICB2YXIgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgZmlyc3RTY3JpcHRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFnLCBmaXJzdFNjcmlwdFRhZyk7XG5cblxuICAgIC8vIFlvdVR1YmXli5XnlLtcbiAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lUmVhZHkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgbG9nKCd5b3V0dWJlcmVhZHknKTtcblxuXG4gICAgfVxuXG4gIH1cblxuICBzdXBwb3J0VmlkZW9FeHQoKSB7XG5cbiAgICB2YXIgZXh0ID0gXCJcIjtcbiAgICBpZiAodGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL3dlYm1cIikgPT0gXCJwcm9iYWJseVwiIHx8IHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby93ZWJtXCIpID09IFwibWF5YmVcIikge1xuICAgICAgZXh0ID0gXCJ3ZWJtXCI7XG4gICAgfSBlbHNlIGlmKHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby9tcDRcIikgPT0gXCJwcm9iYWJseVwiIHx8IHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby9tcDRcIikgPT0gXCJtYXliZVwiKSB7XG4gICAgICBleHQgPSBcIm1wNFwiO1xuICAgIH0gZWxzZSBpZih0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vb2dnXCIpID09IFwicHJvYmFibHlcIiB8fCB0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vb2dnXCIpID09IFwibWF5YmVcIikge1xuICAgICAgZXh0ID0gXCJvZ2dcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gZXh0O1xuXG4gIH1cblxuICB3ZWJGb250KGNvbmZpZykge1xuXG4gICAgLy8gd2ViIGZvbnQgbG9hZGVy55SoanPjga5hcHBlbmRcbiAgICB2YXIgd2YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB3Zi5zcmMgPSAoJ2h0dHBzOicgPT0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPyAnaHR0cHMnIDogJ2h0dHAnKSArXG4gICAgICAnOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvd2ViZm9udC8xL3dlYmZvbnQuanMnO1xuICAgIHdmLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICB3Zi5hc3luYyA9ICd0cnVlJztcbiAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdmLCBzKTtcblxuICAgIHZhciBhZ2FpbiA9ICgpPT57XG5cbiAgICAgIC8vIHl0LnBsYXllcuOBjGxvYWTjgZXjgozjgabjgYTjgarjgYTloLTlkIjjgpLogIPmha7jgZfjgaZcbiAgICAgIGlmKCh0eXBlb2YgV2ViRm9udCAhPT0gXCJ1bmRlZmluZWRcIikgJiYgV2ViRm9udCkge1xuXG4gICAgICAgICAgV2ViRm9udC5sb2FkKGNvbmZpZyk7XG5cbiAgICAgIH1lbHNle1xuXG4gICAgICAgICAgc2V0VGltZW91dChhZ2FpbiwgMTAwKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgYWdhaW4oKTsgICAgXG5cbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuXG4gICAgJCgnaHRtbCcpLmNzcygnb3BhY2l0eScsICcxJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cyhsZW4pIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbignbG9hZGVkJywgKGV2ZW50KT0+e1xuICAgICAgXG4gICAgICBzZWxmLmNudCsrO1xuICAgICAgaWYgKHNlbGYuY250ID09IGxlbikgb25Mb2FkZWQoKTtcblxuICAgIH0pO1xuICAgICAgXG4gIH0gXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZGVyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTZWMwMVZpZGVvXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFlvdXR1YmVGb3JTZWMwMSBmcm9tICcuL1lvdXR1YmVGb3JTZWMwMS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYzAxVmlkZW8ge1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtKXtcblxuICAgIC8vIHNlYzAxdmlkZW/nlKhcbiAgICBnYi5pbi5ybS50b3RhbCsrO1xuICAgIGlmIChnYi5pbi51LmlzU1ApIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuXG4gICAgaWYgKGdiLmluLnUuaXNQQykgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gY3JlYXRlXG4gICAgdGhpcy52aWRlbyA9IG5ldyBZb3V0dWJlRm9yU2VjMDEoJ3NlYzAxVmlkZW8nLCBnYi5pbi5jb25mLnlvdXR1YmVJRDAxLCBudWxsKTtcbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFlvdXR1YmVGb3JTZWMwMVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IEZ1bGxTaXplIGZyb20gJy4uLy4uL015TGlicy9EaXNwbGF5L0xheW91dC9GdWxsU2l6ZS5qcyc7XG5pbXBvcnQgVG9wVGltZSBmcm9tICcuLi8uLi9EaXNwbGF5L1VJL1RvcFRpbWUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZb3V0dWJlRm9yU2VjMDEge1xuXG4gIGNvbnN0cnVjdG9yKGlkLHZpZGVvSUQsdmlkZW9MaXN0KSB7XG5cbiAgICB0aGlzLnBsYXllciA9IG51bGw7XG5cbiAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xuICAgIHRoaXMuaXNTZWVrTG9jayA9IGZhbHNlO1xuICAgIHRoaXMuaXNTZWVrTG9jazAyID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldHVwKGlkLHZpZGVvSUQsdmlkZW9MaXN0KTtcblxuICB9XG5cbiAgc2V0dXAoaWQsdmlkZW9JRCx2aWRlb0xpc3QpIHtcblxuICAgIC8vIHl0LnBsYXllcu+/ve+/vWxvYWTvv73vv73vv73vv73GpO+/ve+/vcqk77+977+977+977+9z6Tyv7yRXe+/ve+/ve+/ve+/vVxuICAgIGlmKCh0eXBlb2YgWVQgIT09IFwidW5kZWZpbmVkXCIpICYmIFlUICYmIFlULlBsYXllcil7XG5cbiAgICAgICAgLy8gY3JlYXRlXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFlULlBsYXllcihpZCwge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgLy8g77+916Xvv71g77+977+9YO+/vc6377+9XG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJywgLy8g77+916Xvv71g77+977+9YO+/vc6436Tvv71cbiAgICAgICAgICAgIHZpZGVvSWQ6IHZpZGVvSUQsIC8vIFlvdVR1YmXvv73vv71JRFxuICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICdvblJlYWR5JzogdGhpcy5vblJlYWR5LmJpbmQodGhpcyksIC8vIO+/vdel77+9YO+/ve+/vWDvv73OnMqC5KSs77+9x6Tvv73vv73vv73vv73IpO+/ve+/vcuMZ++/ve+/vVxuICAgICAgICAgICAgICAnb25TdGF0ZUNoYW5nZSc6IHRoaXMub25QbGF5ZXJTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgICBhdXRvcGxheTogMSxcbiAgICAgICAgICAgICAgY29udHJvbHM6IDAsXG4gICAgICAgICAgICAgIHNob3dpbmZvOiAwLFxuICAgICAgICAgICAgICBhdXRvaGlkZTogMSxcbiAgICAgICAgICAgICAgcmVsOiAwLFxuICAgICAgICAgICAgICBlbmFibGVqc2FwaTogMSxcbiAgICAgICAgICAgICAgaXZfbG9hZF9wb2xpY3k6IDMsXG4gICAgICAgICAgICAgIGRpc2FibGVrYjoxLFxuICAgICAgICAgICAgICBtb2Rlc3RicmFuZGluZzogMSxcbiAgICAgICAgICAgICAgc3RhcnQ6IDIsXG4gICAgICAgICAgICAgIGxvb3A6IDEsXG4gICAgICAgICAgICAgIC8vIHBsYXlsaXN0OiB2aWRlb0xpc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGF5b3V0XG4gICAgICAgIHZhciBsID0gbmV3IEZ1bGxTaXplKCQoJyNiZ1dyYXAnKSwkKCcjc2VjMDFWaWRlbycpLDAsJ0Z1bGxTaXplU2VjMDFWaWRlbycpO1xuICAgICAgICBsLnRhcmdldERlZlcgPSAxOTIwO1xuICAgICAgICBsLnRhcmdldERlZkggPSAxMDgwO1xuICAgICAgICBsLnJ1bigpO1xuXG4gICAgfWVsc2V7XG5cbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnNldHVwLmJpbmQodGhpcyxpZCx2aWRlb0lELHZpZGVvTGlzdCksIDEwMCk7XG5cbiAgICB9XG5cblxuICB9XG5cbiAgb25SZWFkeSAoZSkge1xuXG4gICAgLy8g77+9373vv73vv73vv73IpO+/vVxuICAgIGUudGFyZ2V0LnNldFBsYXliYWNrUXVhbGl0eSgnaGlnaHJlcycpO1xuXG4gICAgLy8gdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICAgIC8vIHBsYXlcbiAgICBnYi5pbi50aW1lID0gbmV3IFRvcFRpbWUoKTtcbiAgICBnYi5pbi5zZWMwMVZpZGVvLnZpZGVvLnBsYXlCeU5ZVGltZSgpO1xuXG4gIH1cblxuICBvblBsYXllclN0YXRlQ2hhbmdlIChlKSB7XG5cbiAgICB2YXIgc3RhdHVzID0gZS5kYXRhO1xuXG4gICAgLy8g77+977+977+977+977+9S++/vcuk77+977+977+977+9yKTvv70gMFxuICAgIGlmIChzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLkVOREVEKSB7XG4gICAgIFxuICAgICAgICAvLyDvv73Tu++/ve+/ve+/ve+/ve+/vVxuICAgICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gLy8g77+977+977+977+977+90KTOpMik77+9IDFcbiAgICBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XG5cbiAgICAgIGlmICh0aGlzLmlzRmlyc3QpIHtcbiAgICAgICAgdGhpcy5pc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgICAgfVxuXG4gICAgICAvLyBlLnRhcmdldC5wYXVzZVZpZGVvKCk7XG5cbiAgICB9XG5cbiAgICAvLyAvLyDNo9a577+90KTOpMik77+9IDJcbiAgICAvLyBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ82j1rnvv73vv70nKTtcbiAgICAvLyB9XG5cbiAgICAvLyAvLyDvv73QpcOl1aXvv73vv73vv73vv73vv73QpM6kyKTvv70gM1xuICAgIC8vIGlmIChzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLkJVRkZFUklORykge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygn77+90KXDpdWl77+977+977+977+977+977+9Jyk7XG4gICAgLy8gfVxuXG4gICAgLy8gLy8g77+9Xu+/ve+/ve+/ve+/ve+/vWfvv73fpM6kyKTvv70gNSA177+977+91rnvv73epO+/vcik77+977+977+977+966Sr77+96aGi77+977+977+977+977+9x6Tvv71wbGF5XG4gICAgaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuQ1VFRCkge1xuXG4gICAgICAgIHRoaXMucGxheUJ5TllUaW1lKCk7XG5cbiAgICB9XG5cblxuICAgIC8vIGZvciBzYWZhcmkg77+91aXvv73vv73vv73vv73rpbXvv73vv73vv73vv73vv73YpO+/ve+/ve+/vVxuICAgIGlmIChnYi5pbi51LmlzU2FmYXJpKCkgJiYgc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkcpIHRoaXMucGxheWVyLnNlZWtUbyh0aGlzLnBsYXllci5nZXRDdXJyZW50VGltZSgpICsgMC4xKTtcblxuICB9XG5cbiAgcGxheUJ5TllUaW1lKCkge1xuXG4gICAgdmFyIGggPSBnYi5pbi50aW1lLm55SDtcblxuICAgIGlmIChoID49IDUgJiYgaCA8IDEzKSB7XG5cbiAgICAgIHRoaXMucGxheWVyLnNlZWtUbygwKTtcblxuICAgIH0gZWxzZSBpZiAoaCA+PSAxMyAmJiBoIDwgMTgpIHtcblxuICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKDM2KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMucGxheWVyLnNlZWtUbyg2Nik7XG5cbiAgICB9XG5cbiAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcblxuXG4gIH1cblxuICBvblNlZWsoKSB7XG5cbiAgICB2YXIgbm93ID0gdGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKTsgICAgXG5cbiAgICBpZiAobm93IDwgMS4wKSB7XG4gICAgICB0aGlzLmlzU2Vla0xvY2sgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTZWVrTG9jazAyID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGlmIChub3cgPiA5MCAmJiAhdGhpcy5pc1NlZWtMb2NrKSB7XG4gICAgdGhpcy5pc1NlZWtMb2NrID0gdHJ1ZTtcblxuICAgICAgVHdlZW5NYXgudG8oJCgnLmJnT3ZlcmxheUltZycpLCAzLjAsIHtcbiAgICAgICAgICBvcGFjaXR5OiAxLCBcbiAgICAgICAgICBlYXNlOlBvd2VyMy5lYXNlSW5PdXQsXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgXG4gICAgaWYgKG5vdyA+IDEuMCAmJiAhdGhpcy5pc1NlZWtMb2NrMDIpIHtcbiAgICB0aGlzLmlzU2Vla0xvY2swMiA9IHRydWU7XG5cbiAgICAgIFR3ZWVuTWF4LnRvKCQoJy5iZ092ZXJsYXlJbWcnKSwgMy4wLCB7XG4gICAgICAgICAgb3BhY2l0eTogMCwgXG4gICAgICAgICAgZWFzZTpQb3dlcjMuZWFzZUluT3V0LFxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIFxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAuYWRkKCdZb3V0dWJlRm9yU2VjMDEnLHRoaXMub25TZWVrLmJpbmQodGhpcykpO1xuXG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG5cbiAgICBnYi5pbi51cC5yZW1vdmUoJ1lvdXR1YmVGb3JTZWMwMScpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1lvdXR1YmVGb3JTZWMwMS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRnVsbFNpemVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxTaXplIHtcblxuICBjb25zdHJ1Y3RvcigkV3JhcCwkVGFyZ2V0LG1vZGUsIG5hbWUpIHtcblxuICAgIHRoaXMuJHdyYXAgPSAkV3JhcDtcbiAgICB0aGlzLiR0YXJnZXQgPSAkVGFyZ2V0O1xuXG4gICAgdGhpcy5XID0gdGhpcy4kd3JhcC53aWR0aCgpO1xuICAgIHRoaXMuSCA9IHRoaXMuJHdyYXAuaGVpZ2h0KCk7XG4gICAgdGhpcy50YXJnZXRXO1xuICAgIHRoaXMudGFyZ2V0SDtcbiAgICB0aGlzLnRhcmdldERlZlc7XG4gICAgdGhpcy50YXJnZXREZWZIO1xuICAgIHRoaXMucmF0aW9XO1xuICAgIHRoaXMucmF0aW87XG4gICAgdGhpcy5tbDtcbiAgICB0aGlzLm10O1xuXG4gICAgdGhpcy5tb2RlID0gbW9kZSB8fCAwO1xuICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgJ2Z1bGxzaXplJztcblxuICAgIC8vIHRoaXMuaW5pdCgpO1xuICAgIC8vIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0U3R5bGUoKSB7XG5cbiAgICB0aGlzLiR3cmFwLmNzcyh7XG4gICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAgICB9KTtcbiAgICB0aGlzLiR0YXJnZXQuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuXG4gIH1cblxuICBnZXREZWYoKSB7XG5cbiAgICB0aGlzLnRhcmdldERlZlcgPSB0aGlzLiR0YXJnZXQuZ2V0KDApLmNsaWVudFdpZHRoIHx8IHRoaXMuJHRhcmdldC5nZXQoMCkud2lkdGggfHwgdGhpcy4kdGFyZ2V0LndpZHRoKCksXG4gICAgdGhpcy50YXJnZXREZWZIID0gdGhpcy4kdGFyZ2V0LmdldCgwKS5jbGllbnRIZWlnaHQgfHwgdGhpcy4kdGFyZ2V0LmdldCgwKS5oZWlnaHQgIHx8IHRoaXMuJHRhcmdldC5oZWlnaHQoKTtcblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcblxuICAgIHRoaXMuVyA9IHRoaXMuJHdyYXAud2lkdGgoKTtcbiAgICB0aGlzLkggPSB0aGlzLiR3cmFwLmhlaWdodCgpOyBcblxuICAgIHRoaXMucmF0aW9XID0gdGhpcy5IIC8gdGhpcy5XO1xuICAgIHRoaXMucmF0aW8gPSB0aGlzLnRhcmdldERlZkggLyB0aGlzLnRhcmdldERlZlcsXG5cbiAgICB0aGlzLm1sID0gLSAodGhpcy50YXJnZXREZWZXICogKHRoaXMuSCAvIHRoaXMudGFyZ2V0RGVmSCkpIC8gMjtcbiAgICB0aGlzLm10ID0gLSAodGhpcy50YXJnZXREZWZIICogKHRoaXMuVyAvIHRoaXMudGFyZ2V0RGVmVykpIC8gMjtcblxuICB9XG5cbiAgc2V0UG9zKCl7XG5cbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2NvdmVyJyB8fCB0aGlzLm1vZGUgPT0gMCkge1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gIOaeoOOBq+ODlOODg+OCv+ODquOBq+OBquOCi+OCiOOBhuOBqyBiYWNrZ3JvdW5kLXNpemUgY292ZXJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGlmICh0aGlzLnJhdGlvVyA+IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgIHZhciB3ID0gKHRoaXMuSCAvIHRoaXMudGFyZ2V0RGVmSCkgKiB0aGlzLnRhcmdldERlZlc7XG5cbiAgICAgICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgICAuY3NzKHsnaGVpZ2h0JzogdGhpcy5IfSlcbiAgICAgICAgICAgICAgLmNzcyh7J21hcmdpbi10b3AnOiAwLCdtYXJnaW4tbGVmdCc6IHRoaXMubWwsJ3RvcCc6MCwnbGVmdCc6JzUwJScsJ3dpZHRoJzp3fSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5yYXRpb1cgPD0gdGhpcy5yYXRpbykge1xuXG4gICAgICAgICAgICB2YXIgaCA9ICh0aGlzLlcgLyB0aGlzLnRhcmdldERlZlcpICogdGhpcy50YXJnZXREZWZIO1xuXG4gICAgICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgICAgLmNzcyh7J3dpZHRoJzogdGhpcy5XfSlcbiAgICAgICAgICAgICAgLmNzcyh7J21hcmdpbi10b3AnOiB0aGlzLm10LCdtYXJnaW4tbGVmdCc6IDAsJ3RvcCc6JzUwJScsJ2xlZnQnOjAsJ2hlaWdodCc6aH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ2NvbnRhaW4nIHx8IHRoaXMubW9kZSA9PSAxKXtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vICDmnqDlhoXjgavjg5Tjg4Pjgr/jg6rlj47jgb7jgovjgojjgYbjgasgYmFja2dyb3VuZC1zaXplIGNvbnRhaW5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGlmICh0aGlzLnJhdGlvVyA8IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAgIC5jc3MoeydoZWlnaHQnOiB0aGlzLkh9KVxuICAgICAgICAgICAgICAuY3NzKHsnbWFyZ2luLXRvcCc6IDAsJ21hcmdpbi1sZWZ0JzogdGhpcy5tbCwndG9wJzowLCdsZWZ0JzonNTAlJywnd2lkdGgnOidhdXRvJ30pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMucmF0aW9XID49IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAgIC5jc3Moeyd3aWR0aCc6IHRoaXMuV30pXG4gICAgICAgICAgICAgIC5jc3MoeydtYXJnaW4tdG9wJzogdGhpcy5tdCwnbWFyZ2luLWxlZnQnOiAwLCd0b3AnOic1MCUnLCdsZWZ0JzowLCdoZWlnaHQnOidhdXRvJ30pO1xuXG4gICAgICAgIH1cblxuICAgICAgfSBcblxuICB9XG5cbiAgaW5pdCgpIHtcblxuICAgIHRoaXMuZ2V0RGVmKCk7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgICB0aGlzLmdldFNpemUoKTtcbiAgICB0aGlzLnNldFBvcygpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCh0aGlzLm5hbWUsIHRoaXMucnVuLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRGlzcGxheS9MYXlvdXQvRnVsbFNpemUuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFRvcFRpbWVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIDUwMHB45Lul5LiL44Gr44Gq44Gj44Gf44KJ6KGo56S6XG4vLyAgIOaZguioiGNvdW50XG4vLyAgIGNhbnZhc+ihqOekulxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BUaW1lIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJCgnLnRpbWVXcmFwJyk7XG4gICAgdGhpcy4kaDAxID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5oMDEnKTtcbiAgICB0aGlzLiRoMDIgPSB0aGlzLiR0YXJnZXQuZmluZCgnLmgwMicpO1xuICAgIHRoaXMuJG0wMSA9IHRoaXMuJHRhcmdldC5maW5kKCcubTAxJyk7XG4gICAgdGhpcy4kbTAyID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5tMDInKTtcblxuICAgIHRoaXMubnlIID0gMDtcblxuICAgIHRoaXMuaXNBbGVydCA9IChnYi5pbi5yLndzLmggPCA1MDApPyB0cnVlOiBmYWxzZTtcblxuICAgIHRoaXMuZGlzID0gMTQ7IC8v5pmC5beuXG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5ydW4oKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIGdiLmluLnUudGltZSgpO1xuICAgIHZhciBoID0gZ2IuaW4udS5ob3VyIC0gdGhpcy5kaXM7XG4gICAgaWYgKGg8MCkgaCA9IDI0ICsgaDtcbiAgICB0aGlzLm55SCA9IGg7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIC8vIOmWk+W8leOBjVxuICAgIGlmIChnYi5pbi51cC5jbnQlNjAhPT0wKSByZXR1cm47XG5cblxuICAgIGdiLmluLnUudGltZSgpO1xuXG4gICAgdmFyIGggPSBnYi5pbi51LmhvdXIgLSB0aGlzLmRpcztcbiAgICBpZiAoaDwwKSBoID0gMjQgKyBoO1xuXG4gICAgdGhpcy5ueUggPSBoO1xuXG4gICAgaCA9IGdiLmluLnUuYWRkMChoKS5zcGxpdCgnJyk7XG4gICAgdmFyIG0gPSBnYi5pbi51LmFkZDAoZ2IuaW4udS5taW51dGUpLnNwbGl0KCcnKTtcbiAgICB2YXIgcyA9IGdiLmluLnUuYWRkMChnYi5pbi51LnNlY29uZCkuc3BsaXQoJycpO1xuXG4gICAgdGhpcy4kaDAxLnRleHQoaFswXSlcbiAgICB0aGlzLiRoMDIudGV4dChoWzFdKVxuICAgIHRoaXMuJG0wMS50ZXh0KG1bMF0pXG4gICAgdGhpcy4kbTAyLnRleHQobVsxXSlcblxuICAgIC8vIHRoaXMuJGgwMS50ZXh0KHNbMF0pXG4gICAgLy8gdGhpcy4kaDAyLnRleHQoc1sxXSlcbiAgICAvLyB0aGlzLiRtMDEudGV4dChzWzBdKTtcbiAgICAvLyB0aGlzLiRtMDIudGV4dChzWzFdKTtcblxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgZ2IuaW4udXAuYWRkKCdUb3BUaW1lJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyDjgrPjg7Pjg57jga7ooajnpLrpnZ7ooajnpLpcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoe3JlcGVhdDogLTF9KTtcblxuICAgIHRsXG4gICAgICAuc2V0KHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSwge29wYWNpdHk6IDB9KVxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSwgMC41LCB7b3BhY2l0eTogMSxlYXNlOiBQb3dlcjIuZWFzZUluT3V0fSlcbiAgICAgIC50byh0aGlzLiR0YXJnZXQuZmluZCgnLmNvbG9uJyksIDAuNSwge29wYWNpdHk6IDAsZWFzZTogUG93ZXIyLmVhc2VJbk91dH0pXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG5cbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcblxuICAgIGdiLmluLnVwLnJlbW92ZSgnVG9wVGltZScpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1RvcFRpbWUuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog55Kw5aKD5Yik5a6a44Kv44Op44K5KOODh+ODkOOCpOOCueOAgeODluODqeOCpuOCtinjgIHlkITliKTlrprjg6Hjgr3jg4Pjg4noqbPntLDjga9EZXZpY2UuanPjgpLlj4LnhadcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBKdWRnZUVudmlyb25tZW50XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovc1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1ZGdlRW52aXJvbm1lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiBcbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44OH44OQ44Kk44K55Yik5a6aXG4gICAgZ2IuaW4udS5pc0RldmljZVNQKCk7XG4gICAgZ2IuaW4udS5pc0RldmljZVRBQigpO1xuICAgIGdiLmluLnUuaXNEZXZpY2VNQigpO1xuICAgIGdiLmluLnUuaXNEZXZpY2VQQygpO1xuXG4gICAgLy8g44OW44Op44Km44K244OQ44O844K444On44Oz5Yik5a6aXG4gICAgZ2IuaW4udS5pc0lFVmVyc2lvbigpO1xuXG4gICAgLy8gcmVzcG9uc2l2ZSAvIHBvcnRyYWl0IC8gbGFuZHNjYXBlXG4gICAgZ2IuaW4udS5pc0RpcmVjdGlvbigpO1xuICAgIGdiLmluLnUuaXNSZXNwb25zaXZlKGdiLmluLmNvbmYuYnApO1xuICAgIGdiLmluLnIuYWRkKCdpc0RpcmVjdGlvbicsIGdiLmluLnUuaXNEaXJlY3Rpb24uYmluZChnYi5pbi51KSk7XG4gICAgZ2IuaW4uci5hZGQoJ2lzUmVzcG9uc2l2ZScsIGdiLmluLnUuaXNSZXNwb25zaXZlLmJpbmQoZ2IuaW4udSwgZ2IuaW4uY29uZi5icCkpO1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9KdWRnZUVudmlyb25tZW50LmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBSZXNwb25zaXZlU3dpdGNoSW1nXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlU3dpdGNoSW1nIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdGhpcy5pc1BDTG9jayA9IChnYi5pbi51LmlzUmVzUEMpPyBmYWxzZTogdHJ1ZTtcbiAgICB0aGlzLmlzU1BMb2NrID0gKGdiLmluLnUuaXNSZXNTUCk/IGZhbHNlOiB0cnVlO1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJCgnLnJlc3BvbnNpdmVJbWcnKTtcblxuICB9XG5cbiAgcnVuICgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4jjgojjgorjgoJzcOWBtFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChnYi5pbi51LmlzUmVzU1AgJiYgIXRoaXMuaXNTUExvY2spIHtcbiAgICAgIHRoaXMuaXNQQ0xvY2sgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTUExvY2sgPSB0cnVlO1xuXG4gICAgICBsb2coMTEpO1xuXG4gICAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuICAgICAgICBzcmMgPSBnYi5pbi51LnN0clJlcGxhY2Uoc3JjLCAnX3BjJywgJ19zcCcpO1xuICAgICAgICAkKHRoaXMpLm9mZignbG9hZCcpO1xuICAgICAgICAkKHRoaXMpLm9uKCdsb2FkJywgKGV2ZW50KT0+e1xuXG4gICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NwU2l6ZScpKSBnYi5pbi51LnNldEltZ1NQU2l6ZSgkKHRoaXMpKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLHNyYyk7XG5cbiAgICAgICAgLy8gJCh0aGlzKS5hdHRyKCdzcmMnLHNyYyk7XG4gICAgICAgIC8vIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzcFNpemUnKSkgZ2IuaW4udS5zZXRJbWdTUFNpemUoJCh0aGlzKSk7XG5cbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXNwb25zaXZlaW1n44GM44Gk44GE44Gm44Gq44GE44KC44Gu44Gn44CBc3BTaXpl44GM44Gk44GE44Gm44KL44KC44Gu44GvMS8yXG4gICAgICBnYi5pbi51LnNldEltZ1NQU2l6ZSgkKCcuc3BTaXplJykubm90KCcucmVzcG9uc2l2ZUltZycpKTtcblxuICAgIH0gXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OW44Os44Kk44Kv44Od44Kk44Oz44OI44KI44KK44KCcGPlgbRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1BDICYmICF0aGlzLmlzUENMb2NrKSB7XG4gICAgICB0aGlzLmlzUENMb2NrID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNTUExvY2sgPSBmYWxzZTtcblxuICAgICAgbG9nKDIyKTtcblxuICAgICAgdGhpcy4kdGFyZ2V0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcbiAgICAgICAgc3JjID0gZ2IuaW4udS5zdHJSZXBsYWNlKHNyYywgJ19zcCcsICdfcGMnKTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoe3dpZHRoOiAnYXV0bycsaGVpZ2h0OiAnYXV0byd9KTtcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLHNyYyk7XG5cbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXNwb25zaXZlaW1n44GM44Gk44GE44Gm44Gq44GE44KC44Gu44Gn44CBc3BTaXpl44GM44Gk44GE44Gm44KL44KC44Gu44GvYXV0b+OBq1xuICAgICAgJCgnLnNwU2l6ZScpLm5vdCgnLnJlc3BvbnNpdmVJbWcnKS5hdHRyKHt3aWR0aDogJ2F1dG8nLGhlaWdodDogJ2F1dG8nfSk7XG5cbiAgICAgIC8vIHNw44Gv44Gq44Gc44GLbG9hZOOCpOODmeODs+ODiOOBjOWRvOOBsOOCjOOBquOBhOOBruOBp+OAgeOBk+OBo+OBoeOBp+WHpueQhlxuICAgICAgLy8gaWYgKGdiLmluLnUuaXNTUCkgJCgnLnJlc3BvbnNpdmVJbWcnKS5hdHRyKHt3aWR0aDogJ2F1dG8nLGhlaWdodDogJ2F1dG8nfSk7XG5cbiAgICB9XG5cbiAgfVxuICAgICAgIFxuICByZXN1bWUoKSB7XG5cbiAgICAvLyBsb2coJ3Jlc3VtZScpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMucnVuKCk7XG5cbiAgICBnYi5pbi5yLnJlbW92ZSgncmVzcG9uc2l2ZVN3aXRjaEltZycpO1xuICAgIGdiLmluLnIuYWRkKCdyZXNwb25zaXZlU3dpdGNoSW1nJywgdGhpcy5ydW4uYmluZCh0aGlzKSk7XG5cbiAgfVxuICAgICAgIFxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCgncmVzcG9uc2l2ZVN3aXRjaEltZycsIHRoaXMucnVuLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL19ldmVudHMvUmVzcG9uc2l2ZVN3aXRjaEltZy5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTd2lwZVRyYW5zaXRpb24gc3NzXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXBlVHJhbnNpdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgZG9tXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdGhpcy4kc3RhcnRXcmFwID0gJCgnLnNlY3Rpb24wMSwgLnNlY3Rpb24wMiAubmV4dCwgLnNlY3Rpb24wMyAuYm94MDUnKTtcbiAgICAvLyB0aGlzLiRzdGFydFdyYXAgPSAkKCcuc2VjdGlvbjAyJyk7XG4gICAgdGhpcy4kc3RhcnRXcmFwID0gJCh3aW5kb3cpO1xuICAgIHRoaXMuJGVuZFdyYXAgPSAkKHdpbmRvdyk7XG5cbiAgICB0aGlzLnBhZ2VMaXN0ID0ge1xuICAgICAgJ3RvcCc6IDAsXG4gICAgICAnbW92aWUnOiAxLFxuICAgICAgJ2ludGVydmlldyc6IDIsXG4gICAgICAnaGlzdG9yeSc6IDMsXG4gICAgfVxuXG4gICAgLy8gdmFyaWFibGVcbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgIHRoaXMub2xkID0gbnVsbDtcbiAgICB0aGlzLm5leHQgPSAxO1xuICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgdGhpcy5sZW4gPSA0O1xuXG4gICAgdGhpcy5pc0xvY2sgPSBmYWxzZTtcblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHZhcmlhYmxlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBwb3NpdGlvblxuICAgIHRoaXMuc1ggPSAwO3RoaXMubVggPSAwO3RoaXMuZVggPSAwOyAvL3N0YXJ0WCxtb3ZlWCxlbmRYXG4gICAgdGhpcy5kaXMgPSAwO3RoaXMubWluRGlzID0gMTU7XG5cbiAgICAvLyB0aW1lXG4gICAgdGhpcy5zVD0wO3RoaXMuZVQ9MDt0aGlzLm1pblQgPSAzMDA7IC8vc3RhcnRUaW1lLGVsbGFwc2VkVGltZSxcblxuICAgIHRoaXMuVyA9IGdiLmluLnIuVygpO1xuXG4gICAgdGhpcy5vblRvdWNoTG9uZyA9ICgpPT57fTtcbiAgICB0aGlzLm9uVG91Y2hTdGFydENCID0gKCk9Pnt9O1xuICAgIHRoaXMub25Ub3VjaEVuZENCID0gKCk9Pnt9O1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gIH1cblxuICBvblRvdWNoU3RhcnQgKGUpIHtcblxuICAgIC8vIHRhcmdldFhcbiAgICB2YXIgeSA9IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICB0aGlzLnNZID0geTtcblxuICAgIHRoaXMuc3QgPSBnYi5pbi5zLnN0O1xuICAgIHRoaXMuc2IgPSBnYi5pbi5zLnNiO1xuICAgIGxvZygnc3knLHkpXG5cbiAgfVxuXG4gIG9uVG91Y2hNb3ZlIChlKSB7XG5cbiAgICAvLyB0YXJnZXRYXG4gICAgdmFyIHkgPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgdGhpcy5tWSA9IHk7XG5cbiAgfVxuXG4gIG9uVG91Y2hFbmQgKGUpIHtcblxuICAgIGlmICh0aGlzLmlzTG9jaykgcmV0dXJuOyAgICBcblxuICAgIHZhciB5ID0gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgIHRoaXMuZVkgPSB5O1xuXG4gICAgdmFyIGRpcyA9IHRoaXMuc1kgLSB0aGlzLmVZO1xuICAgIHZhciBhYnNEaXMgPSBNYXRoLmFicyhkaXMpO1xuXG4gICAgLy8g5pyA5bCP6Led6Zui44KI44KK6ZW344GL44Gj44Gf44KJ44CB5Yem55CGXG4gICAgaWYoIHRoaXMubWluRGlzIDwgYWJzRGlzKSB7XG5cbiAgICAgIC8vIOODmuODvOOCuOeVquWPt+OCkuWPluW+l1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wYWdlTGlzdFtnYi5pbi5wamF4LmlkXTtcblxuICAgICAgaWYgKGRpcyA+IDApIHtcblxuICAgICAgICB2YXIgaCA9ICQoJy5zZWN0aW9uJykuaGVpZ2h0KCkqZ2IuaW4uTGF5b3V0LnNpemUuc2NhbGUucmF0ZTtcbiAgICAgICAgbG9nKHRoaXMuc2IsaC0xMCx0aGlzLnNiIDwgaC0xMCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCE9PTAgJiYgdGhpcy5zYiA8IGgtMTApIHJldHVybjtcbiAgICAgICAgLy8gaGlzdG9yeeODmuODvOOCuOOBruWgtOWQiOOBr+WHpueQhuOBl+OBquOBhFxuICAgICAgICBpZiAodGhpcy5jdXJyZW50PT0zKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jYWxjdWxhdGVPcmRlcignbmV4dCcpO1xuXG4gICAgICAgIC8vIOOBl+OBn+OBuFxuICAgICAgICB2YXIgcGFnZU5hbWUgPSBPYmplY3Qua2V5cyh0aGlzLnBhZ2VMaXN0KS5maWx0ZXIoIChrZXkpID0+IHsgcmV0dXJuIHRoaXMucGFnZUxpc3Rba2V5XSA9PT0gdGhpcy5jdXJyZW50IH0pWzBdO1xuICAgICAgICAkKCcucGpheFRvXycrcGFnZU5hbWUpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgbG9nKHRoaXMuc3QsdGhpcy5zdCAhPT0gMCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3QgIT09IDApIHJldHVybjtcblxuICAgICAgICAvLyDkuIrjgbhcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVPcmRlcigncHJldicpO1xuXG4gICAgICAgIHZhciBwYWdlTmFtZSA9IE9iamVjdC5rZXlzKHRoaXMucGFnZUxpc3QpLmZpbHRlciggKGtleSkgPT4geyByZXR1cm4gdGhpcy5wYWdlTGlzdFtrZXldID09PSB0aGlzLmN1cnJlbnQgfSlbMF07XG4gICAgICAgICQoJy5wamF4VG9fJytwYWdlTmFtZSkudHJpZ2dlcignY2xpY2snKTtcblxuICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIGJsdXLop6PpmaRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5pc05vdFRvdWNoID0gdHJ1ZTtcblxuICAgIC8vIOOCs+ODvOODq+ODkOODg+OCr1xuICAgIHRoaXMub25Ub3VjaEVuZENCKCk7XG5cbiAgfVxuXG4gIGNhbGN1bGF0ZU9yZGVyKGRpcikge1xuXG4gICAgdGhpcy5vbGQgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICBpZiAoZGlyPT0nbmV4dCcpIHtcblxuICAgICAgdGhpcy5jdXJyZW50Kys7XG4gICAgICBpZiAodGhpcy5jdXJyZW50PnRoaXMubGVuLTEpIHRoaXMuY3VycmVudD10aGlzLmxlbi0xO1xuICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jdXJyZW50KzE7XG4gICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQtMTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuY3VycmVudC0tO1xuICAgICAgaWYgKHRoaXMuY3VycmVudDwwKSB0aGlzLmN1cnJlbnQ9MDsgIFxuICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jdXJyZW50KzE7XG4gICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQtMTtcblxuICAgIH0gICAgIFxuXG4gIH1cblxuICBzZXRFdmVudHMoKXtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHN0YXJ0V3JhcC5vbigndG91Y2hzdGFydC5Td2lwZVRyYW5zaXRpb24nLCAoZSk9Pnt0aGlzLm9uVG91Y2hTdGFydChlKTt9KTtcbiAgICAvLyB0aGlzLiR3cmFwLm9uKCd0b3VjaG1vdmUuU3dpcGVUcmFuc2l0aW9uJywgKGUpPT57dGhpcy5vblRvdWNoTW92ZShlKTt9KTtcbiAgICB0aGlzLiRlbmRXcmFwLm9uKCd0b3VjaGVuZC5Td2lwZVRyYW5zaXRpb24nLCAoZSk9Pnt0aGlzLm9uVG91Y2hFbmQoZSk7fSk7XG5cbiAgfVxuXG4gICByZW1vdmVFdmVudHMoKXtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHN0YXJ0V3JhcC5vZmYoJ3RvdWNoc3RhcnQuU3dpcGVUcmFuc2l0aW9uJyk7XG4gICAgLy8gdGhpcy4kd3JhcC5vZmYoJ3RvdWNobW92ZS5Td2lwZVRyYW5zaXRpb24nKTtcbiAgICB0aGlzLiRlbmRXcmFwLm9mZigndG91Y2hlbmQuU3dpcGVUcmFuc2l0aW9uJyk7XG5cbiAgfVxuXG5cbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Td2lwZVRyYW5zaXRpb24uanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNjcm9sbFRyYW5zaXRpb25cbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRyYW5zaXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCR0YXJnZXQpIHtcblxuICAgIHRoaXMucGFnZUxpc3QgPSB7XG4gICAgICAndG9wJzogMCxcbiAgICAgICdtb3ZpZSc6IDEsXG4gICAgICAnaW50ZXJ2aWV3JzogMixcbiAgICAgICdoaXN0b3J5JzogMyxcbiAgICB9XG5cbiAgICAvLyB2YXJpYWJsZVxuICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgdGhpcy5vbGQgPSBudWxsO1xuICAgIHRoaXMubmV4dCA9IDE7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmxlbiA9IDQ7XG5cbiAgICB0aGlzLmlzU3dpdGNoID0gdHJ1ZTtcblxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIHN3aXRjaCgpIHtcblxuICAgIGlmICghZ2IuaW4udS5pc0lFKSB2YXIgdmFsID0gMzA7XG4gICAgZWxzZSB2YXIgdmFsID0gMDtcblxuICAgIC8vIGxvZyhnYi5pbi5wamF4LmlzUGpheExvY2ssdGhpcy5TVEFtb3VudCx0aGlzLmN1cnJlbnQsdGhpcy5pc1N3aXRjaCk7XG5cbiAgICAvLyBwamF4bG9ja+aZguOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChnYi5pbi5wamF4LmlzUGpheExvY2spIHJldHVybjtcblxuICAgIC8vIOODmuODvOOCuOeVquWPt+OCkuWPluW+l1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMucGFnZUxpc3RbZ2IuaW4ucGpheC5pZF07XG5cbiAgICAvL+ODm+OCpOODvOODq+OBjDDku6XkuIog44GL44GkIGN1cnJlbnTjgYzkuIDnlarmnIDliJ3jgafjgarjgYQg44GL44GkIHN3aXRjaOWPr+iDveeKtuaFi+OBp+OBguOCjOOBsFxuICAgIGlmICh0aGlzLlNUQW1vdW50ID4gdmFsICYmIHRoaXMuY3VycmVudCA+IDAgJiYgdGhpcy5pc1N3aXRjaCkge1xuXG4gICAgICAvLyBoaXN0b3J544Oa44O844K444Gu44Go44GN44Gv5LiK44K544Kv44Ot44O844Or44GX44Gm44KCaW50ZXJ2aWV3IGluZGV444Gr6aOb44Gw44GV44Gq44GEXG4gICAgICBpZiAoZ2IuaW4ucGpheC5pZD09J2hpc3RvcnknKSByZXR1cm47XG5cbiAgICAgIHRoaXMuaXNTd2l0Y2ggPSBmYWxzZTtcbiAgXG4gICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCdwcmV2Jyk7XG5cbiAgICAgIHZhciBwYWdlTmFtZSA9IE9iamVjdC5rZXlzKHRoaXMucGFnZUxpc3QpLmZpbHRlciggKGtleSkgPT4geyByZXR1cm4gdGhpcy5wYWdlTGlzdFtrZXldID09PSB0aGlzLmN1cnJlbnQgfSlbMF07XG5cbiAgICAgICQoJy5wamF4VG9fJytwYWdlTmFtZSkudHJpZ2dlcignY2xpY2snKTtcblxuXG4gICAgLy/jg5vjgqTjg7zjg6vjgYww5Lul5LiLIOOBi+OBpCBjdXJyZW5044GM5LiA55Wq5pyA5b6M44Gn44Gq44GEIOOBi+OBpCBzd2l0Y2jlj6/og73nirbmhYvjgafjgYLjgozjgbBcbiAgICB9IGVsc2UgaWYodGhpcy5TVEFtb3VudCA8IC12YWwgJiYgdGhpcy5jdXJyZW50IDwgdGhpcy5sZW4tMSAmJiB0aGlzLmlzU3dpdGNoKSB7XG5cbiAgICAgIHRoaXMuaXNTd2l0Y2ggPSBmYWxzZTtcbiAgICAgIFxuICAgICAgdGhpcy5jYWxjdWxhdGVPcmRlcignbmV4dCcpO1xuXG4gICAgICB2YXIgcGFnZU5hbWUgPSBPYmplY3Qua2V5cyh0aGlzLnBhZ2VMaXN0KS5maWx0ZXIoIChrZXkpID0+IHsgcmV0dXJuIHRoaXMucGFnZUxpc3Rba2V5XSA9PT0gdGhpcy5jdXJyZW50IH0pWzBdO1xuXG4gICAgICAkKCcucGpheFRvXycrcGFnZU5hbWUpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cbiAgICB9O1xuXG5cbiAgfVxuXG4gIGNhbGN1bGF0ZU9yZGVyKGRpcikge1xuXG4gICAgdGhpcy5vbGQgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICBpZiAoZGlyPT0nbmV4dCcpIHtcblxuICAgICAgdGhpcy5jdXJyZW50Kys7XG4gICAgICBpZiAodGhpcy5jdXJyZW50PnRoaXMubGVuLTEpIHRoaXMuY3VycmVudD10aGlzLmxlbi0xO1xuICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jdXJyZW50KzE7XG4gICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQtMTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuY3VycmVudC0tO1xuICAgICAgaWYgKHRoaXMuY3VycmVudDwwKSB0aGlzLmN1cnJlbnQ9MDsgIFxuICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jdXJyZW50KzE7XG4gICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQtMTtcblxuICAgIH0gICAgIFxuXG4gIH1cblxuICBvbk1vdXNlV2hlZWwoZSwgZGVsdGEsIGRlbHRhWCwgZGVsdGFZKSB7XG5cbiAgICAvLyBtZW5144GM6ZaL44GE44Gm44GE44KL44Go44GN44Gv44K544Kv44Ot44O844Or6YG356e744GV44Gb44Gq44GEXG4gICAgaWYgKGdiLmluLm1lbnUuaXNPcGVuKSByZXR1cm47XG4gICAgLy8gcmVzIHNw44Gu44Go44GN44Gv5Yem55CG44GX44Gq44GEXG4gICAgaWYgKGdiLmluLnUuaXNSZXNTUCkgcmV0dXJuXG5cbiAgICB0aGlzLlNUQW1vdW50ID0gZ2IuaW4ucy5TVEFtb3VudDtcbiAgICBcbiAgICB0aGlzLnN3aXRjaCgpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cblxuICAgIGdiLmluLnMuYWRkKCdTY3JvbGxUcmFuc2l0aW9uJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKSk7XG5cblxuICB9XG4gIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1Njcm9sbFRyYW5zaXRpb24uanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU25zXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBtZXRhRGF0YSBmcm9tIFwianNvbi1sb2FkZXIhLi4vLi4vLi4vLi4vZWpzL2luYy9tZXRhRGF0YS5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNucyB7XG5cbiAgY29uc3RydWN0b3IoJGZiLCR0dywkbGluZSwkbWFpbCl7XG5cbiAgICB0aGlzLiRmYiA9ICRmYjtcbiAgICB0aGlzLiR0dyA9ICR0dztcbiAgICB0aGlzLiRsaW5lID0gJGxpbmU7XG4gICAgdGhpcy4kbWFpbCA9ICRtYWlsO1xuXG4gICAgdGhpcy5mYiA9IHtcbiAgICAgICR0YXJnZXQ6ICRmYixcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgfVxuXG4gICAgdGhpcy50dyA9IHtcbiAgICAgICR0YXJnZXQ6ICR0dyxcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgICBoYXNoOiAnaGFzaCcsXG4gICAgfVxuXG4gICAgdGhpcy5saW5lID0ge1xuICAgICAgJHRhcmdldDogJGxpbmUsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgIH1cblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHN3aXRjaE1ldGEoKSB7XG5cbiAgICB2YXIgcCA9IGdiLmluLnBqYXguaWQ7XG4gICAgaWYgKHAgPT0gJ2ludGVydmlld19kZXRhaWwnKSB7XG5cbiAgICAgIGxvZygkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDEnKSk7XG4gICAgICBpZiAoJCgnLnNlY3Rpb24nKS5oYXNDbGFzcygnc2VjdGlvbjAzX2RldGFpbDAxJykpIHAgPSAnaW50ZXJ2aWV3RGV0YWlsMDEnO1xuICAgICAgZWxzZSBpZiAoJCgnLnNlY3Rpb24nKS5oYXNDbGFzcygnc2VjdGlvbjAzX2RldGFpbDAyJykpIHAgPSAnaW50ZXJ2aWV3RGV0YWlsMDInO1xuICAgICAgZWxzZSBpZiAoJCgnLnNlY3Rpb24nKS5oYXNDbGFzcygnc2VjdGlvbjAzX2RldGFpbDAzJykpIHAgPSAnaW50ZXJ2aWV3RGV0YWlsMDMnO1xuICBcbiAgICB9XG5cbiAgICAvLyB2YXIgZCA9IGdiLmluLmNvbmYubWV0YVtwXTtcbiAgICB2YXIgZCA9IG1ldGFEYXRhW3BdO1xuXG4gICAgJCgndGl0bGUnKS50ZXh0KCk7XG4gICAgJCgnLm1ldGFEZXMnKS5hdHRyKHsnY29udGVudCc6IGQuZGVzY3JpcHRpb259KTtcbiAgICAkKCcubWV0YUtleScpLmF0dHIoeydjb250ZW50JzogZC5rZXl3b3JkfSk7XG5cbiAgICAkKCcuZmJUaXQnKS5hdHRyKHsnY29udGVudCc6IGQuZmIudGl0fSk7XG4gICAgJCgnLmZiRGVzJykuYXR0cih7J2NvbnRlbnQnOiBkLmZiLmRlc30pO1xuICAgICQoJy5mYkltZycpLmF0dHIoeydjb250ZW50JzogZC5mYi5pbWd9KTtcbiAgICAkKCcuZmJVcmwnKS5hdHRyKHsnY29udGVudCc6IGQuZmIudXJsfSk7XG5cbiAgICAkKCcudHdUaXQnKS5hdHRyKHsnY29udGVudCc6IGQudHcudGl0fSk7XG4gICAgJCgnLnR3RGVzJykuYXR0cih7J2NvbnRlbnQnOiBkLnR3LmRlc30pO1xuICAgICQoJy50d0ltZycpLmF0dHIoeydjb250ZW50JzogZC50dy5pbWd9KTtcbiAgICAkKCcudHdVcmwnKS5hdHRyKHsnY29udGVudCc6IGQudHcudXJsfSk7XG5cblxuICB9XG5cbiAgc2V0dGluZygpIHtcblxuICAgIHRoaXMuZmIgPSB7XG4gICAgICAkdGFyZ2V0OiB0aGlzLiRmYixcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgfVxuXG4gICAgdGhpcy50dyA9IHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuJHR3LFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICAgIGhhc2g6ICdoYXNoJyxcbiAgICB9XG5cbiAgICB0aGlzLmxpbmUgPSB7XG4gICAgICAkdGFyZ2V0OiB0aGlzLiRsaW5lLFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICB9XG5cbiAgfVxuXG4gIHNldE9nSW1nKCkge1xuXG4gICAgLy8gJCgnLm9nSW1nX2ZiJykuYXR0cignY29udGVudCcsIHRoaXMuZmIuaW1nKTtcbiAgICAvLyAkKCcub2dJbWdfdHcnKS5hdHRyKCdjb250ZW50JywgdGhpcy50dy5pbWcpO1xuXG4gIH1cblxuICBqdW1wRkIoZSkge1xuXG4gICAgICB0aGlzLm9wZW5XaW5kb3coJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PScgKyB0aGlzLmZiLnVybCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cblxuICBqdW1wVFcoZSkge1xuXG4gICAgdGhpcy5vcGVuV2luZG93KCdodHRwOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0nICsgdGhpcy50dy51cmwgKyAnJnRleHQ9JyArIHRoaXMudHcuZGVzKTtcbiAgICAvLyB0aGlzLm9wZW5XaW5kb3coJ2h0dHA6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPScgKyB0aGlzLnR3LnVybCArICcmdGV4dD0nICsgdGhpcy50dy50ZXh0ICsgJyZoYXNodGFncz0nICsgdGhpcy50dy5oYXNoKTtcblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAganVtcExJTkUoKSB7XG5cbiAgICAgIHRoaXMub3BlbldpbmRvdygnaHR0cDovL2xpbmUubWUvUi9tc2cvdGV4dC8/JyArIHRoaXMubGluZS50aXQgKyAnJTBBJyArIHRoaXMubGluZS51cmwpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvblNlbmRNYWlsKCkge1xuXG4gICAgdmFyIGFkZHJlc3MgPSAnJztcbiAgICB2YXIgc3ViID0gJyc7XG4gICAgdmFyIGJvZHkgPSBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkrJ1xcbicrbG9jYXRpb24uaHJlZik7XG5cbiAgICBsb2NhdGlvbi5ocmVmID0gJ21haWx0bzonICsgYWRkcmVzcyArICc/c3ViamVjdD0nICsgc3ViICsgJyZib2R5PScgKyBib2R5O1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICBvcGVuV2luZG93KHVybCwgdywgaCkge1xuXG4gICAgICBpZih3ID09PSB1bmRlZmluZWQpIHcgPSA2MDA7XG4gICAgICBpZihoID09PSB1bmRlZmluZWQpIGggPSA2MDA7XG5cbiAgICAgIHZhciBsID0gTnVtYmVyKCh3aW5kb3cuc2NyZWVuLndpZHRoLXcpLzIpO1xuICAgICAgdmFyIHQgPSBOdW1iZXIoKHdpbmRvdy5zY3JlZW4uaGVpZ2h0LWgpLzIpO1xuXG4gICAgICB3aW5kb3cub3Blbih1cmwsJ25ld193aW5kb3cnLFxuICAgICAgICAgICAgICAgICdtZW51YmFyPW5vLCcgK1xuICAgICAgICAgICAgICAgICd0b29sYmFyPW5vLCcgK1xuICAgICAgICAgICAgICAgICdyZXNpemFibGU9eWVzLCcgK1xuICAgICAgICAgICAgICAgICdzY3JvbGxiYXJzPXllcywnICtcbiAgICAgICAgICAgICAgICAnaGVpZ2h0PScgKyBoICsgJywnICtcbiAgICAgICAgICAgICAgICAnd2lkdGg9JyArIHcgKyAnLCcgK1xuICAgICAgICAgICAgICAgICdsZWZ0PScgKyBsICsgJywnICtcbiAgICAgICAgICAgICAgICAndG9wPScgKyB0XG4gICAgICAgICAgICAgICk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHRoaXMuZmIuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLmp1bXBGQi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnR3LiR0YXJnZXQub24oJ2NsaWNrJywgdGhpcy5qdW1wVFcuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5saW5lLiR0YXJnZXQub24oJ2NsaWNrJywgdGhpcy5qdW1wTElORS5iaW5kKHRoaXMpKTtcbiAgICBpZiAodGhpcy4kbWFpbCkgdGhpcy4kbWFpbC5vbignY2xpY2snLCAoKT0+e3RoaXMub25TZW5kTWFpbCgpO3JldHVybiBmYWxzZTt9KTtcblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuXG4gICAgdGhpcy5mYi4kdGFyZ2V0Lm9mZignY2xpY2snKTtcbiAgICB0aGlzLnR3LiR0YXJnZXQub2ZmKCdjbGljaycpO1xuICAgIHRoaXMubGluZS4kdGFyZ2V0Lm9mZignY2xpY2snKTtcbiAgICBpZiAodGhpcy4kbWFpbCkgdGhpcy4kbWFpbC5vZmYoJ2NsaWNrJyk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGVzY3JpcHRpb25cIjogXCJkZXNjdGlwdGlvblwiLFxuXHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XCJvZ3BJbWdQYXRoXCI6IFwiXCIsXG5cdFwidG9wXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcIm1vdmllXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld1wiOiB7XG5cdFx0XCJkZXNjcmlwdGlvblwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwiZmJcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2Vic2l0ZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJsaW5lXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcInR3XCI6IHtcblx0XHRcdFwiY2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcblx0XHRcdFwiY3JlYXRvclwiOiBcIlwiLFxuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIlwiLFxuXHRcdFx0XCJ1cmxcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIlxuXHRcdH1cblx0fSxcblx0XCJpbnRlcnZpZXdEZXRhaWwwMVwiOiB7XG5cdFx0XCJkZXNjcmlwdGlvblwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwiZmJcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2Vic2l0ZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJsaW5lXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcInR3XCI6IHtcblx0XHRcdFwiY2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcblx0XHRcdFwiY3JlYXRvclwiOiBcIlwiLFxuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIlwiLFxuXHRcdFx0XCJ1cmxcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIlxuXHRcdH1cblx0fSxcblx0XCJpbnRlcnZpZXdEZXRhaWwwMlwiOiB7XG5cdFx0XCJkZXNjcmlwdGlvblwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwiZmJcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2Vic2l0ZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJsaW5lXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcInR3XCI6IHtcblx0XHRcdFwiY2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcblx0XHRcdFwiY3JlYXRvclwiOiBcIlwiLFxuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIlwiLFxuXHRcdFx0XCJ1cmxcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIlxuXHRcdH1cblx0fSxcblx0XCJpbnRlcnZpZXdEZXRhaWwwM1wiOiB7XG5cdFx0XCJkZXNjcmlwdGlvblwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwiZmJcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2Vic2l0ZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJsaW5lXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcInR3XCI6IHtcblx0XHRcdFwiY2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcblx0XHRcdFwiY3JlYXRvclwiOiBcIlwiLFxuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIlwiLFxuXHRcdFx0XCJ1cmxcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIlxuXHRcdH1cblx0fSxcblx0XCJoaXN0b3J5XCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9qc29uLWxvYWRlciEvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvZWpzL2luYy9tZXRhRGF0YS5qc29uXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBNYWluXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBEaXNwbGF5VG9wIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyc7XG4vLyBpbXBvcnQgRGlzcGxheU1vdmllIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheU1vdmllLmpzJztcbi8vIGltcG9ydCBEaXNwbGF5SW50ZXJ2aWV3IGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheUludGVydmlldy5qcyc7XG4vLyBpbXBvcnQgRGlzcGxheUludGVydmlld0RldGFpbCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlJbnRlcnZpZXdEZXRhaWwuanMnO1xuLy8gaW1wb3J0IERpc3BsYXlIaXN0b3J5IGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheUhpc3RvcnkuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5vbkltbWVkaWF0ZSgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIG9uSW1tZWRpYXRlKCkge1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgLy9wYWdl44Oa44O844K45Yil44GuSUTjgpLlj5blvpdcbiAgICB2YXIgcGFnZSA9ICQoJ2JvZHknKS5kYXRhKCdpZCcpO1xuXG5cdFx0Ly9wYWdl44GuSUTjgZTjgajjgavnmbrngavjgZnjgovjgq/jg6njgrnjga7mjK/jgorliIbjgZFcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICBuZXcgRGlzcGxheVRvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBjYXNlICdtb3ZpZSc6XG4gICAgICAvL1xuICAgICAgLy8gICBuZXcgRGlzcGxheU1vdmllKCk7XG5cdFx0XHQvL1xuICAgICAgLy8gICBicmVhaztcblx0XHRcdC8vXG4gICAgICAvLyBjYXNlICdpbnRlcnZpZXcnOlxuICAgICAgLy9cbiAgICAgIC8vICAgbmV3IERpc3BsYXlJbnRlcnZpZXcoKTtcblx0XHRcdC8vXG4gICAgICAvLyAgIGJyZWFrO1xuXHRcdFx0Ly9cbiAgICAgIC8vIGNhc2UgJ2ludGVydmlld19kZXRhaWwnOlxuICAgICAgLy9cbiAgICAgIC8vICAgbmV3IERpc3BsYXlJbnRlcnZpZXdEZXRhaWwoKTtcblx0XHRcdC8vXG4gICAgICAvLyAgIGJyZWFrO1xuXHRcdFx0Ly9cbiAgICAgIC8vIGNhc2UgJ2hpc3RvcnknOlxuICAgICAgLy9cbiAgICAgIC8vICAgbmV3IERpc3BsYXlIaXN0b3J5KCk7XG5cdFx0XHQvL1xuICAgICAgLy8gICBicmVhaztcblxuICAgIH1cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgXG4gIH1cblxuICBvblJlbmRlcigpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9NYWluLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBEaXNwbGF5XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IEVmZmVjdHMgZnJvbSAnLi9FZmZlY3RzL0VmZmVjdHMuanMnO1xuaW1wb3J0IFNjYWxlVG9wIGZyb20gJy4uL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGVUb3AuanMnO1xuaW1wb3J0IEhvdmVyRWZmZWN0U05TU1BGb290ZXIgZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5qcyc7XG5pbXBvcnQgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCBmcm9tICcuLi9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0Fycm93VG9wLmpzJztcbmltcG9ydCBUb3BUaW1lIGZyb20gJy4uL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9MYXlvdXQvUG9zdGlvbi9Qb3NpdGlvbi5qcyc7XG5pbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5vbkltbWVkaWF0ZSgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIG9uSW1tZWRpYXRlKCkge1xuXG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICAvLyBnYi5pbi53ZWJHTGluaXQgPSBuZXcgV2ViR0xpbml0KCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgVUkgLyBMYXlvdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBzcFxuICAgIC8vIGdiLmluLnNjYWxlVG9wID0gbmV3IFNjYWxlVG9wKCk7XG4gICAgLy8gZ2IuaW4ucG9zID0gbmV3IFBvc2l0aW9uKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgRWZmZWN0c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gc3BcbiAgICAvLyBnYi5pbi5zbGlkZXJUb3Auc2V0RXZlbnRzKCk7XG4gICAgLy8gZ2IuaW4uc25zU1BIb3ZlckVmID0gbmV3IEhvdmVyRWZmZWN0U05TU1BGb290ZXIoJCgnI3NpZGVMJykpO1xuXG4gICAgLy8gcGNcbiAgICAvLyBuZXcgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCgkKCcuc2VjdGlvbjAxIC5uZXh0JykpOyAvLyDihpIgVG9wT3BlbmluZ+OBuFxuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG5cdFx0d2luZG93LmNvbnNvbGUubG9nKCdzdGF0aWNfUnVuJyk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgVUkgLyBMYXlvdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBzcFxuICAgIGdiLmluLnNjYWxlVG9wID0gbmV3IFNjYWxlVG9wKCk7XG4gICAgZ2IuaW4ucG9zID0gbmV3IFBvc2l0aW9uKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgRWZmZWN0c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gc3BcbiAgICBnYi5pbi5zbGlkZXJUb3Auc2V0RXZlbnRzKCk7XG4gICAgZ2IuaW4uc25zU1BIb3ZlckVmID0gbmV3IEhvdmVyRWZmZWN0U05TU1BGb290ZXIoJCgnI3NpZGVMJykpO1xuXG4gICAgLy8gcGNcbiAgICB0aGlzLmh0ID0gbmV3IEhvdmVyRWZmZWN0U1ZHQXJyb3dUb3AoJCgnLnNlY3Rpb24wMSAubmV4dCcpKTtcbiAgICB0aGlzLmh0LmF1dG9BcnJvdygpO1xuICAgIGdiLmluLnRpbWUgPSBuZXcgVG9wVGltZSgpO1xuICAgIGlmIChnYi5pbi5zZWMwMVZpZGVvLnZpZGVvKSBnYi5pbi5zZWMwMVZpZGVvLnZpZGVvLnBsYXlCeU5ZVGltZSgpOyAvLyBzcOeUqOOBq+OCgiBnYi5pbi5zZWMwMVZpZGVv44GM5a2Y5Zyo44GZ44KL44GL44Gp44GG44GL5Yik5a6aXG4gICAgaWYgKGdiLmluLnNlYzAxVmlkZW8udmlkZW8pIGdiLmluLnNlYzAxVmlkZW8udmlkZW8uc2V0RXZlbnRzKCk7IC8vIHNw55So44Gr44KCIGdiLmluLnNlYzAxVmlkZW/jgYzlrZjlnKjjgZnjgovjgYvjganjgYbjgYvliKTlrppcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEVmZmVjdHNcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgU2VjdGlvbjAyQmcgZnJvbSAnLi8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHMuanMnO1xuaW1wb3J0IFNlY3Rpb24wNFByb2R1Y3QgZnJvbSAnLi8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50cy5qcyc7XG5pbXBvcnQgUHJvZmlsZXIgZnJvbSAnLi9Qcm9maWxlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVmZmVjdHMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5nbCA9IG51bGw7XG4gICAgdGhpcy5kb20gPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSAnJztcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLmRlYnVnKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyBiZ1xuICAgIC8vIGdiLmluLlNlY3Rpb24wMkJnID0gbmV3IFNlY3Rpb24wMkJnKCk7XG5cbiAgICAvLyBwcm9kdWN0XG4gICAgLy8gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdCA9IG5ldyBTZWN0aW9uMDRQcm9kdWN0KCQoJy5zZWN0aW9uMDMnKSk7XG5cbiAgfVxuXG4gIGRlYnVnKCkge1xuXG4gICAgLy8gcHJvZmlsZXLoqK3lrppcbiAgICAvLyBuZXcgUHJvZmlsZXIoKTtcblxuICB9XG5cblxuICBzZXRFdmVudHMoKSB7XG5cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzL0VmZmVjdHMuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIENWQ29udGVudHNcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgTG9vcCBmcm9tICcuL0NWQ29udGVudHNMb29wLmpzJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuL0NWQ29udGVudHNUaW1lbGluZS5qcyc7XG5pbXBvcnQgQ3JlYXRlQ2FudmFzIGZyb20gJy4vX2RldGFpbHMvQ3JlYXRlQ2FudmFzLmpzJztcbmltcG9ydCBGdWxsU2l6ZSBmcm9tICcuLi8uLi8uLi8uLi9NeUxpYnMvRGlzcGxheS9MYXlvdXQvRnVsbFNpemUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDVkNvbnRlbnRzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTsgXG4gICAgLy8gdGhpcy5jcmVhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuICAgIC8vIGxvb3BcbiAgICB0aGlzLmxvb3AgPSBuZXcgTG9vcCgpO1xuICAgIC8vIHRpbWVsaW5lXG4gICAgdGhpcy50aW1lbGluZSA9IG5ldyBUaW1lbGluZSgpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOODquOCveODvOOCueOBruODreODvOODiVxuICAgIC8vIGdiLmluLmxvYWRNZ3Iuc2VjMDJJbWcoKTtcbiAgICBcblxuICB9XG5cbiAgY3JlYXRlKCkge1xuXG4gICAgLy8gZ2IuaW4ucm0udG90YWwgKz0gMTtcbiAgICAvLyBjYW52YXPjga7nlJ/miJBcbiAgICAvLyDjg6zjg4bjgqPjg7zjg4rnlKjjgasy5YCNXG4gICAgZ2IuaW4uY2FudmFzID0gbmV3IENyZWF0ZUNhbnZhcygkKCcjYmdXcmFwIC5zZWMwMkJnQ2FudmFzJyksZ2IuaW4uY29uZi5kZWZXLGdiLmluLmNvbmYuZGVmSCwoKT0+e1xuXG4gICAgICB2YXIgbCA9IG5ldyBGdWxsU2l6ZSgkKCcjYmdXcmFwJyksJCgnLnNlYzAyQmdDYW52YXMnKSwwLCdGdWxsU2l6ZVNlYzAyQmdDYW52YXMnKTtcbiAgICAgIGwudGFyZ2V0RGVmVyA9IGdiLmluLmNvbmYuZGVmVztcbiAgICAgIGwudGFyZ2V0RGVmSCA9IGdiLmluLmNvbmYuZGVmSDtcbiAgICAgIGwucnVuKCk7XG5cbiAgICB9KTtcblxuICAgIC8vIHVp6L+95YqgKOOCs+ODs+ODiOODreODvOODqeODvOOAgXByb2ZpbGVy44Gq44GpKVxuICAgIC8vIHRoaXMuYWRkVUkoKTtcblxuXG4gIH1cblxuICBhZGRVSSgpIHtcblxuICAgIC8vIHBhcmFtcnRlcuiqv+aVtFxuICAgIC8vIGdiLmluLnBhcmFtID0gbmV3IGdiLlBhcmFtKCk7XG5cbiAgfVxuXG4gIHBsYXkoKSB7XG5cbiAgICB0aGlzLmxvb3Auc3RhcnQoKTtcbiAgICB0aGlzLnRpbWVsaW5lLnRsTWFpbi5wbGF5KCk7XG5cbiAgfVxuXG4gIHBhdXNlKCkge1xuXG4gICAgdGhpcy5sb29wLnBhdXNlKCk7XG4gICAgdGhpcy50aW1lbGluZS50bE1haW4ucGF1c2UoKTtcblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIC8vIGdiLmluLnIuYWRkKCdjdkNvbnRlbnRzJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyBnYi5pbi5oYXNoLm9uQ2hhbmdlRnVuY0xpc3QucHVzaCh0aGlzLm9uU2VjdGlvbjAyLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzTG9vcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1ZDb250ZW50c0xvb3Age1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc0Fsd2F5cyA9IHRydWU7XG4gICAgdGhpcy5pc1J1blN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy5pc0FkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlID0gJ2luaXRpYWwnO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmxvb3BMaXN0ID0gW107XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgaWYgKHRoaXMuaXNBbHdheXMpIHRoaXMucnVuQWx3YXlzKCk7XG4gICAgaWYgKHRoaXMuaXNSdW5TdGF0dXMpIHRoaXMucnVuU3RhdHVzKCk7XG4gICAgaWYgKHRoaXMuaXNBZGp1c3RQYXJhbSkgdGhpcy5ydW5BZGp1c3RQYXJhbSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5bi444Gr6KGM44GG5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgcnVuQWx3YXlzKCkge1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLmxvb3BMaXN0KSB0aGlzLmxvb3BMaXN0W2ldKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDlkITnirbmhYvjga7lh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1blN0YXR1cygpIHtcblxuICAgIGlmICh0aGlzLnN0YXRlID09ICdpbml0aWFsJykge1xuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YXJ0Jykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAxJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAyJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAzJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RhbmRieScpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzb21ldGltZXMnKSB7XG5cbiAgICAgIGlmICh0aGlzLnNvbWV0aW1lc1N0YXRlID09ICdsaW5lU2hhZG93Jykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc3BoZXJlJykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc2F0ZWxsaXRlJykge1xuXG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOODkeODqeODoeODvOOCv+iqv+aVtOeUqOWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnVuQWRqdXN0UGFyYW0oKSB7XG5cblxuXG4gIH1cblxuICBkcmF3KCkge1xuXG5cblxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIGlmICh0aGlzLmxvb3BTdGFydCkge1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmRyYXcoKTtcblxuICAgIC8vIGxvZygnc2VjdGlvbjAyJylcblxuICAgIH1cblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IHRydWU7XG5cbiAgfVxuXG4gIHBhdXNlKCkge1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSBmYWxzZTtcblxuICB9XG5cbiAgYWRkKGZ1bmMpIHtcblxuICAgIHRoaXMubG9vcExpc3QucHVzaChmdW5jKTtcbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGdiLmluLnVwLmFkZCgnc2VjdGlvbjAyQmcnLHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50c0xvb3AuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIENWQ29udGVudHNUaW1lbGluZVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgIENWQ29udGVudHNUaW1lbGluZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnRsTWFpbiA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCv+OCpOODoOODqeOCpOODs+OCkuatouOCgeOBpuOBiuOBj1xuICAgIHRoaXMudGxNYWluLnBhdXNlKCk7XG5cbiAgICB0aGlzLmJlZ2lubmluZygpO1xuICAgIHRoaXMuc3RlcDAxKCk7XG4gICAgdGhpcy5zdGVwMDIoKTtcbiAgICB0aGlzLnN0ZXAwMygpO1xuICAgIHRoaXMuc3RhbmRCeSgpO1xuICAgIHRoaXMuc29tZXRpbWVzKCk7XG5cbiAgfVxuXG4gIGJlZ2lubmluZygpIHtcblxuICB9XG5cbiAgc3RlcDAxKCkge1xuXG4gIH1cblxuICBzdGVwMDIoKSB7XG5cblxuICB9XG5cbiAgc3RlcDAzKCkge1xuXG4gICAgXG4gIH1cblxuICBzdGFuZEJ5KCkge1xuXG5cbiAgfVxuXG4gIC8vIOaZguOAhVxuICBzb21ldGltZXMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLnRsTWFpblxuICAgICAgLmFkZChmdW5jdGlvbigpe1xuXG4gICAgICB9LCcrPTAuMCcpICAgIFxuXG4gIH1cblxuICBvblJlc2l6c2UoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgLy8gZ2IuaW4uci5hZGQoJ2N2VGltZWxpbmUnLCB0aGlzLm9uUmVzaXpzZS5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50c1RpbWVsaW5lLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIENyZWF0ZUNhbnZhc1xuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcy5qcyc7XG5pbXBvcnQgUGxhbmUgZnJvbSAnLi9QbGFuZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZUNhbnZhcyB7XG5cbiAgY29uc3RydWN0b3IoJHdyYXAsdyxoLGNiPSgpPT57fSkge1xuXG4gICAgdGhpcy5jID0gbnVsbDtcbiAgICB0aGlzLmN3ID0gMDtcbiAgICB0aGlzLmNoID0gMDtcbiAgICBcbiAgICB0aGlzLmZpbGxTdHlsZSA9ICcwLDAsMCc7XG4gICAgdGhpcy4kd3JhcCA9ICR3cmFwO1xuXG4gICAgdGhpcy5sb29wTGlzdCA9IFtdO1xuXG4gICAgLy8g5pyA5Yid44Kq44OW44K444Kn44Kv44OI55Sf5oiQ44GZ44KL44Gf44KB44GrYm9vbGVhbiDjgYLjgYjjgabpgIbjgatcbiAgICB0aGlzLmlzUmVzaXplID0gKGdiLmluLnUuaXNSZXNQQyk/IGZhbHNlOiB0cnVlO1xuXG4gICAgdGhpcy5jYiA9IGNiO1xuXG4gICAgdGhpcy53ID0gMjYwO1xuICAgIHRoaXMuaCA9IDE0NjtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuICAgIHRoaXMuc2V0Q2FudmFzU2l6ZSh3LGgpO1xuICAgIHRoaXMudGltZWxpbmUoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7IC8vY2FudmFzIGZpbmdlciBwb2ludFxuXG4gICAgdGhpcy5jID0gbmV3IENhbnZhcygpO1xuXG4gICAgLy8gdGhpcy5hZGRPYmplY3RzKCk7XG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIFxuICAgIHRoaXMuJHdyYXAuYXBwZW5kKHRoaXMuYy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYigpO1xuXG4gIH1cblxuICBhZGRPYmplY3RzKHZ4KSB7IC8vY2FudmFzIGZpbmdlciBwb2ludFxuXG4gICAgdGhpcy5sb29wTGlzdCA9IFtdO1xuXG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgdmFyIG9mZnNldEZyYW1lID0gMDtcbiAgICB2YXIgb2Zmc2V0VnggPSAwO1xuXG4gICAgdGhpcy54TnVtID0gODtcbiAgICB0aGlzLnlOdW0gPSA2O1xuICAgIHRoaXMubGVuID0gdGhpcy54TnVtICogdGhpcy55TnVtO1xuXG4gICAgdGhpcy50aWxlTGlzdCA9IFtdO1xuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuICAgICAgdmFyIHRvdGFsID0gZ2IuaW4uY29uZi5zZWMwMkltZ051bTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRvdGFsID0gMTk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbjsgaSsrKSB7XG4gICAgXG4gICAgICB0aGlzLnRpbGUgPSBuZXcgUGxhbmUodGhpcy5jLmN0eCx0aGlzLmZpbGxTdHlsZSk7XG5cbiAgICAgIHZhciBudGggPSBpICUgdGhpcy54TnVtOyBcbiAgICAgIGlmIChudGggPT0gMCkgb2Zmc2V0ID0gLSA1MDAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MDApIC0gMjUwO1xuICAgICAgaWYgKG50aCA9PSAwKSBvZmZzZXRGcmFtZSA9IE1hdGguZmxvb3IodG90YWwgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgIGlmIChudGggPT0gMCkgb2Zmc2V0VnggPSB2eCArIE1hdGguZmxvb3IodnggKiAyICogTWF0aC5yYW5kb20oKSk7XG5cbiAgICAgIHZhciB4ID0gbnRoICogdGhpcy53ICsgb2Zmc2V0O1xuICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKGkgLyB0aGlzLnhOdW0pICogdGhpcy5oO1xuXG4gICAgICB0aGlzLnRpbGUuc2V0dXAoeCwgeSwgdGhpcy53LCB0aGlzLmgsIG9mZnNldEZyYW1lICsgbnRoICogMywgb2Zmc2V0VngsIG9mZnNldCk7XG4gICAgICB0aGlzLnRpbGVMaXN0LnB1c2godGhpcy50aWxlKTtcbiAgICAgIHRoaXMuYWRkKHRoaXMudGlsZS5sb29wLmJpbmQodGhpcy50aWxlKSk7XG4gICAgICBcbiAgICB9O1xuXG4gIH1cblxuICBzZXRDYW52YXNTaXplKHcsaCkge1xuXG4gICAgdGhpcy5jdyA9IHRoaXMuYy5jYW52YXMud2lkdGggPSB3O1xuICAgIHRoaXMuY2ggPSB0aGlzLmMuY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgfVxuXG4gIGxvb3AoKSB7XG5cbiAgICAvLyB0aGlzLmMuY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy5jdyx0aGlzLmNoKTtcbiAgICAvLyB0aGlzLmMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpJztcblxuICAgIHRoaXMuYy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC42KSc7XG4gICAgdGhpcy5jLmN0eC5maWxsUmVjdCgwLDAsdGhpcy5jdyx0aGlzLmNoKTtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5sb29wTGlzdCkgdGhpcy5sb29wTGlzdFtpXSgpO1xuICAgIFxuICB9XG5cbiAgdGltZWxpbmUoKSB7XG5cblxuICB9XG5cbiAgYWRkKGZ1bmMpIHtcblxuICAgIHRoaXMubG9vcExpc3QucHVzaChmdW5jKTtcbiAgICBcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgbG9nKGdiLmluLnUuaXNSZXNTUCxnYi5pbi51LmlzUmVzUEMpO1xuXG4gICAgaWYgKGdiLmluLnUuaXNSZXNTUCAmJiB0aGlzLmlzUmVzaXplKSB7XG4gICAgICB0aGlzLmlzUmVzaXplID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuYWRkT2JqZWN0cygwLjUpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGlsZUxpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICB0aGlzLnRpbGVMaXN0W2ldLmNudFN0b3AgPSB0cnVlO1xuXG4gICAgICB9O1xuXG4gICAgICBsb2coMTExMSlcblxuICAgIH0gZWxzZSBpZiAoZ2IuaW4udS5pc1Jlc1BDICYmICF0aGlzLmlzUmVzaXplKSB7XG4gICAgICB0aGlzLmlzUmVzaXplID0gdHJ1ZTtcblxuICAgICAgdGhpcy5hZGRPYmplY3RzKDAuNSk7XG5cbiAgICAgIC8vIOOCueODnuODm+OBoOOBo+OBn+OCieOAgeW6g+OBhOihqOekuuOBp+OCguODleODrOODvOODoOOBruWLleOBjeOCkuatouOCgeOCi1xuICAgICAgaWYgKGdiLmluLnUuaXNTUCkge1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50aWxlTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgdGhpcy50aWxlTGlzdFtpXS5jbnRTdG9wID0gdHJ1ZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybjtcblxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGlsZUxpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICB0aGlzLnRpbGVMaXN0W2ldLmNudFN0b3AgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICB9O1xuXG5cbiAgICAgIGxvZygyMjIyKTtcblxuICAgIH1cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uU2VjMDJCZy5sb29wLmFkZCh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG4gICAgZ2IuaW4uci5hZGQoJ0NyZWF0ZUNhbnZhcycsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDYW52YXNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgdGhpcy53ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5oID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cblxuICBzZXR1cCAoKSB7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyBcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnc7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oO1xuICAgIFxuICB9XG5cbiAgdXBkYXRlICgpIHtcblxuICAgIFxuICB9XG5cbiAgZHJhdyAoKSB7XG5cbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL0NhbnZhcy5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQbGFuZVxuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZSB7XG5cbiAgY29uc3RydWN0b3IoY3R4LHN0cm9rZVN0eWxlKXtcblxuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xuICAgIHRoaXMub3AgPSB7dmFsOjF9O1xuXG4gICAgdGhpcy5jbnQgPSAwO1xuXG4gICAgdGhpcy5jbnRTdG9wID0gZmFsc2U7XG5cbiAgICAvLyB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5jcmVhdGUoKTtcblxuICB9XG5cbiAgc2V0dXAoeCwgeSwgdywgaCwgZnJhbWVTdGFydCwgdngsIG9mZnNldCkge1xuXG4gICAgdGhpcy5pbWdMaXN0ID0gZ2IuaW4ubG9hZFNlYzAySW1nLmxpc3Q7XG5cbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53ID0gdztcbiAgICB0aGlzLmggPSBoO1xuXG4gICAgdGhpcy52eCA9IHZ4O1xuXG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG5cbiAgICB0aGlzLmNudCA9IGZyYW1lU3RhcnQgO1xuXG4gIH1cblxuICBjcmVhdGUoKSB7XG5cblxuICB9XG5cbiAgLy8g6aCC54K544Gn5o+P44GPXG4gIHVwZGF0ZSgpIHtcblxuICAgIHRoaXMueCAtPSB0aGlzLnZ4O1xuICAgIGlmICh0aGlzLnggPCAtdGhpcy53KSB0aGlzLnggPSBnYi5pbi5jYW52YXMuY3cgLSAxMDtcblxuICB9XG5cbiAgZHJhdygpIHtcblxuICAgIGlmICghdGhpcy5jbnRTdG9wKSB7XG5cbiAgICAgIC8vIOmWk+W8leOBjVxuICAgICAgaWYgKGdiLmluLnVwLmNudCUzPT0wKSB0aGlzLmNudCsrO1xuICAgICAgZWxzZSA7XG5cbiAgICB9O1xuICAgIC8vIHRoaXMuY250Kys7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG4gICAgICB2YXIgdG90YWwgPSBnYi5pbi5jb25mLnNlYzAySW1nTnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdG90YWwgPSAxOTtcbiAgICB9XG4gICAgXG4gICAgdmFyIGltZyA9IHRoaXMuaW1nTGlzdFt0aGlzLmNudCV0b3RhbF07XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKTtcbiAgICBcbiAgfVxuXG4gIGxvb3AoKSB7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuZHJhdygpO1xuICAgIFxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvX2RldGFpbHMvUGxhbmUuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEdsQ29udGVudHNcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgTG9vcCBmcm9tICcuL0dsQ29udGVudHNMb29wLmpzJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuL0dsQ29udGVudHNUaW1lbGluZS5qcyc7XG5pbXBvcnQgUGxhbmUgZnJvbSAnLi9fZGV0YWlscy9QbGFuZS5qcyc7XG5pbXBvcnQgUGFyYW0gZnJvbSAnLi4vLi4vUGFyYW0uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbENvbnRlbnRzIHtcblxuICBjb25zdHJ1Y3Rvcigkd3JhcCA9ICQoJ2JvZHknKSkge1xuXG4gICAgdGhpcy5yZW5kZXJlcjtcbiAgICB0aGlzLmNhbWVyYTtcbiAgICB0aGlzLnNjZW5lO1xuICAgIHRoaXMubGlnaHQ7XG5cbiAgICB0aGlzLnN0YXRlID0gJ2luaXRpYWwnO1xuICAgIHRoaXMuYWRqdXN0UGFyYW0gPSB0cnVlO1xuICAgIHRoaXMuc3RhdGVMaW5lUm90YXRlID0gZmFsc2U7XG4gICAgdGhpcy5zb21ldGltZXNTdGF0ZSA9ICdpbml0aWFsJztcblxuICAgIHRoaXMuaXNDb250cm9sID0gZmFsc2U7XG4gICAgdGhpcy5jb250cm9scztcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLmNyZWF0ZSgkd3JhcCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgICAvLyBsb29wXG4gICAgdGhpcy5sb29wID0gbmV3IExvb3AoKTtcbiAgICAvLyB0aW1lbGluZVxuICAgIHRoaXMudGltZWxpbmUgPSBuZXcgVGltZWxpbmUoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgY3JlYXRlKCR3cmFwKSB7XG5cbiAgICAvLyByZW5kZXJcbiAgICBnYi5pbi5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YW50aWFsaWFzOiB0cnVlfSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKCBnYi5pbi5yLlcoKSwgZ2IuaW4uci5IKCkgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYsIDAuMCk7XG4gICAgJHdyYXAuYXBwZW5kKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCAgKTtcbiAgICAkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCkuY3NzKHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLGxlZnQ6IDAsXG4gICAgICAnei1pbmRleCc6IDEsXG4gICAgfSk7XG5cbiAgICAvLyBzY2VuZVxuICAgIGdiLmluLnNjZW5lID0gbmV3IGdiLlNjZW5lKCk7XG4gICAgdGhpcy5zY2VuZSA9IGdiLmluLnNjZW5lLnNjZW5lO1xuXG4gICAgLy8gY2FtZXJhXG4gICAgZ2IuaW4uY2FtZXJhID0gbmV3IGdiLkNhbWVyYSgpO1xuICAgIHRoaXMuY2FtZXJhID0gZ2IuaW4uY2FtZXJhLmNhbWVyYTtcblxuICAgIC8vIGxpZ2h0XG4gICAgdGhpcy5saWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCAweGZmZmZmZiwgMyApO1xuICAgIHRoaXMubGlnaHQucG9zaXRpb24ueiA9IDM7XG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodCk7XG5cbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jov73liqBcbiAgICB0aGlzLmFkZE9iamVjdHMoKTtcblxuICAgIC8vIHVp6L+95YqgKOOCs+ODs+ODiOODreODvOODqeODvOOAgXByb2ZpbGVy44Gq44GpKVxuICAgIC8vIHRoaXMuYWRkVUkoKTtcblxuICAgIC8vIOODquOCveODvOOCueOBruODreODvOODiVxuICAgIGdiLmluLmxvYWRNZ3Iuc2VjdGlvbjA0UHJvZHVjdFNoYWRlcigpO1xuXG4gIH1cblxuICBhZGRPYmplY3RzKCkge1xuXG4gICAgdGhpcy5wbGFuZSA9IG5ldyBQbGFuZSgpO1xuXG4gIH1cblxuICBhZGRVSSgpIHtcblxuICAgIC8vIGNvbnRyb2xzXG5cbiAgICBpZiAodGhpcy5pc0NvbnRyb2wpIHtcblxuICAgICAgZ2IuaW4uY29udHJvbHMgPSB0aGlzLmNvbnRyb2xzID0gbmV3IFRIUkVFLlRyYWNrYmFsbENvbnRyb2xzKHRoaXMuY2FtZXJhKTtcbiAgICAgIHRoaXMuY29udHJvbHMuem9vbVNwZWVkID0gMC44O1xuICAgICAgdGhpcy5jb250cm9scy5yb3RhdGVTcGVlZCA9IDM7XG5cbiAgICB9O1xuXG4gICAgLy8gcHJvZmlsZXLoqK3lrppcbiAgICBuZXcgZ2IuUHJvZmlsZXIoKTtcbiAgICAvLyBwYXJhbXJ0ZXLoqr/mlbRcbiAgICBnYi5pbi5wYXJhbSA9IG5ldyBQYXJhbSgpO1xuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIHZhciB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdmFyIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodywgaCk7XG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gdyAvIGg7XG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gIH1cblxuICBvblNlY3Rpb24wNChjdXIscHJldikge1xuXG4gICAgaWYgKGN1ciA9PSAncHJvZHVjdCcpIHtcblxuICAgICAgdGhpcy5sb29wLnN0YXJ0KCk7XG4gICAgICB0aGlzLnRpbWVsaW5lLnRsTWFpbi5wbGF5KCk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLmxvb3AucGF1c2UoKTtcbiAgICAgIHRoaXMudGltZWxpbmUudGxNYWluLnBhdXNlKCk7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgZ2IuaW4uaGFzaC5vbkNoYW5nZUZ1bmNMaXN0LnB1c2godGhpcy5vblNlY3Rpb24wNC5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ29uU2VjdGlvbjA0UHJvZHVjdEltZycsICgpPT57dGhpcy50aW1lbGluZS5zZXR1cCgpO30pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHMuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEdsQ29udGVudHNMb29wXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbENvbnRlbnRzTG9vcCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmlzQWx3YXlzID0gdHJ1ZTtcbiAgICB0aGlzLmlzUnVuU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLmlzQWRqdXN0UGFyYW0gPSB0cnVlO1xuICAgIHRoaXMuc3RhdGUgPSAnaW5pdGlhbCc7XG4gICAgdGhpcy5zb21ldGltZXNTdGF0ZSA9ICdpbml0aWFsJztcblxuICAgIHRoaXMubG9vcFN0YXJ0ID0gZmFsc2U7XG5cbiAgICB0aGlzLmxvb3BMaXN0ID0gW107XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBpZiAodGhpcy5pc0Fsd2F5cykgdGhpcy5ydW5BbHdheXMoKTtcbiAgICBpZiAodGhpcy5pc1J1blN0YXR1cykgdGhpcy5ydW5TdGF0dXMoKTtcbiAgICBpZiAodGhpcy5pc0FkanVzdFBhcmFtKSB0aGlzLnJ1bkFkanVzdFBhcmFtKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDluLjjgavooYzjgYblh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICBydW5BbHdheXMoKSB7XG5cbiAgICBpZiAoZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5pc0NvbnRyb2wpIGdiLmluLmNvbnRyb2xzLnVwZGF0ZSgpO1xuXG4gICAgLy8gY2FtZXJhXG4gICAgZ2IuaW4uY2FtZXJhLnVwZGF0ZUNvbnRyb2xsKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDlkITnirbmhYvjga7lh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1blN0YXR1cygpIHtcblxuICAgIGlmICh0aGlzLnN0YXRlID09ICdpbml0aWFsJykge1xuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YXJ0Jykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAxJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAyJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAzJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RhbmRieScpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzb21ldGltZXMnKSB7XG5cbiAgICAgIGlmICh0aGlzLnNvbWV0aW1lc1N0YXRlID09ICdsaW5lU2hhZG93Jykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc3BoZXJlJykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc2F0ZWxsaXRlJykge1xuXG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOODkeODqeODoeODvOOCv+iqv+aVtOeUqOWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnVuQWRqdXN0UGFyYW0oKSB7XG5cblxuXG4gIH1cblxuICBkcmF3KCkge1xuXG4gICAgZ2IuaW4ucmVuZGVyZXIucmVuZGVyKCBnYi5pbi5zY2VuZS5zY2VuZSwgZ2IuaW4uY2FtZXJhLmNhbWVyYSApO1xuICAgIC8vIGdiLmluLnBvc3Rwcm9jZXNzLmNvbXBvc2VyLnJlbmRlcigwLjEpO1xuXG4gIH1cblxuICBsb29wKCkge1xuXG4gICAgaWYgKHRoaXMubG9vcFN0YXJ0KSB7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuZHJhdygpO1xuXG4gICAgbG9nKCdzZWN0aW9uMDQnKVxuXG4gICAgfVxuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIHRoaXMubG9vcFN0YXJ0ID0gdHJ1ZTtcblxuICB9XG5cbiAgcGF1c2UoKSB7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IGZhbHNlO1xuXG4gIH1cblxuICBhZGQoZnVuYykge1xuXG4gICAgdGhpcy5sb29wTGlzdC5wdXNoKGZ1bmMpO1xuICAgIFxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZ2IuaW4udXAuYWRkKCdzZWN0aW9uMDRQcm9kdWN0Jyx0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c0xvb3AuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEdsQ29udGVudHNUaW1lbGluZVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IFNvbWVUaW1lcyBmcm9tICcuLi8uLi8uLi8uLi9NeUxpYnMvRXZlbnRNZ3IvU29tZXRpbWVzTWdyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xDb250ZW50c1RpbWVsaW5lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMudGxNYWluID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgLy8gdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44K/44Kk44Og44Op44Kk44Oz44KS5q2i44KB44Gm44GK44GPXG4gICAgdGhpcy50bE1haW4ucGF1c2UoKTtcbiAgICBcbiAgICB0aGlzLmJlZ2lubmluZygpO1xuICAgIC8vIHRoaXMuc3RlcDAxKCk7XG4gICAgLy8gdGhpcy5zdGVwMDIoKTtcbiAgICAvLyB0aGlzLnN0ZXAwMygpO1xuICAgIC8vIHRoaXMuc3RhbmRCeSgpO1xuICAgIHRoaXMuc29tZXRpbWVzKCk7ICAgIFxuXG4gIH1cblxuICBiZWdpbm5pbmcoKSB7XG5cbiAgICB0aGlzLnRsTWFpblxuICAgICAgLy8gem9vbSBpblxuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy5zdHJlbmd0aCwgMS4zLCB7XG4gICAgICAgIHZhbHVlOiA1MDAsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICBvblN0YXJ0OiAoKT0+IHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldChnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMuc3RyZW5ndGgsIHt2YWx1ZTogNTAwfSk7XG5cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gY2FtZXJh56e75YuVXG4gICAgICAudG8oZ2IuaW4uY2FtZXJhLmNhbWVyYS5wb3NpdGlvbiwgMS41LCB7XG4gICAgICAgIHo6IDIwMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXRcbiAgICAgIH0sJy09MS4zJylcblxuICAgICAgLy8gcGxhbmXnp7vli5VcbiAgICAgIC50byhnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnBsYW5lLnBvc2l0aW9uLCAxLjUsIHtcbiAgICAgICAgeDogLTEwMCxcbiAgICAgICAgeTogMjAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgfSwnLT0xLjUnKVxuXG4gICAgICAvLyB6b29tIG91dFxuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy5zdHJlbmd0aCwgMSwge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5cbiAgICAgIH0sJy09MC40JylcblxuICAgICAgLy8gcGxhbmUwMeOBjG9wYWNpdHnjgafmtojjgYjjgotcbiAgICAgIC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMub3BhY2l0eSwgMSwge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dFxuICAgICAgfSwnLT0wLjcnKVxuXG4gICAgICAvLyBwbGFuZTAy44GuYmx1ciBvdXRcbiAgICAgIC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMuc3RyZW5ndGgsIDEsIHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0XG4gICAgICB9LCctPTEuMCcpXG5cbiAgICAgIC8vIHBsYW5lMDLjgYzlh7rjgabmnaXjgotcbiAgICAgIC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMub3BhY2l0eSwgMSwge1xuICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXRcbiAgICAgIH0sJy09MS4wJylcblxuICAgICAgLnRvKGdiLmluLmNhbWVyYS5jYW1lcmEucG9zaXRpb24sIDEuNSwge1xuICAgICAgICB6OiA0MDAsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZU91dCxcbiAgICAgICAgb25Db21wbGV0ZTogKCk9PiB7XG5cbiAgICAgICAgICAvLyBtYXRlcmlhbOOBruWkieabtFxuXG4gICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLmZyb20udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzFdO1xuICAgICAgICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy50by52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbMl07XG5cbiAgICAgICAgICBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnBsYW5lMDIubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3JtczogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnZzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0uZnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS5wbGFuZTAyLnNjYWxlLnggPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnBsYW5lMDIuc2NhbGUueSA9IDEyMDAuMDtcblxuXG4gICAgICAgIH1cbiAgICAgIH0sJy09MS4wJylcblxuXG5cbiAgfVxuXG4gIHN0ZXAwMSgpIHtcblxuXG4gIH1cblxuICBzdGVwMDIoKSB7XG5cblxuXG4gIH1cblxuICBzdGVwMDMoKSB7XG5cblxuXG4gIH1cblxuICBzdGFuZEJ5KCkge1xuXG5cbiAgfVxuXG4gIC8vIOaZguOAhVxuICBzb21ldGltZXMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLnRsTWFpblxuICAgICAgLmFkZChmdW5jdGlvbigpe1xuXG5cbiAgICAgICAgdmFyIHMgPSBuZXcgU29tZVRpbWVzKCk7XG5cbiAgICAgICAgcy5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5wcm9ncmVzcywgMS4zLCB7XG4gICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMuZnJvbS52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbM107XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBcbiAgICAgICAgICBcblxuICAgICAgICB9LCAyLjAsIDIuMClcblxuICAgICAgICBzLmFkZChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgVHdlZW5NYXgudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnByb2dyZXNzLCAxLjMsIHtcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAgICAgICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy50by52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbNF07XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG5cblxuICAgICAgICB9LCAyLjAsIDIuMClcblxuICAgICAgICBzLmFkZChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgVHdlZW5NYXgudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnByb2dyZXNzLCAxLjMsIHtcbiAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAgICAgICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5mcm9tLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1s1XTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuICAgICAgICB9LCAyLjAsIDIuMClcblxuICAgICAgICBzLmFkZChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgVHdlZW5NYXgudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnByb2dyZXNzLCAxLjMsIHtcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAgICAgICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy50by52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbMV07XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG5cblxuICAgICAgICB9LCAyLjAsIDIuMClcblxuICAgICAgICBzLmFkZChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgVHdlZW5NYXgudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnByb2dyZXNzLCAxLjMsIHtcbiAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAgICAgICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5mcm9tLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1syXTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIH0sIDIuMCwgMi4wKTtcblxuICAgICAgICBzLnN0YXJ0KCk7XG5cbiAgICAgIH0sJys9MC4wJylcbiAgICBcblxuICB9XG5cbiAgb25SZXNpenNlKCkge1xuXG4gIH1cblxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKHRoaXMub25SZXNpenNlLmJpbmQodGhpcykpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdjbGljaycsKCk9PntcblxuICAgICAgLy8gdGhpcy5zdGFydCgpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9HbENvbnRlbnRzVGltZWxpbmUuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNvbWVUaW1lc1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29tZVRpbWVzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuU29tZVRpbWVzO1xuICAgIHRoaXMuVGltZXIgPSBudWxsO1xuICAgIHRoaXMuY2JMaXN0ID0gW107XG4gICAgdGhpcy5sZW4gPSAwO1xuICAgIHRoaXMub3JkZXIgPSAwO1xuXG4gICAgdGhpcy5taW4gPSBbXTtcbiAgICB0aGlzLm1heCA9IFtdO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBzdGFydChtaW49MCwgbWF4PTApIHtcblxuICAgIHRoaXMubGF0ZXIgPSBnYi5pbi51LnJhbmRvbShtaW4sbWF4KSAqIDEwMDA7XG4gICAgdGhpcy5UaW1lciA9IHNldFRpbWVvdXQodGhpcy5ydW4uYmluZCh0aGlzKSx0aGlzLmxhdGVyKTtcblxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgdGhpcy5vcmRlciA9IHRoaXMub3JkZXIgJSB0aGlzLmxlbjtcblxuICAgIHRoaXMubGF0ZXIgPSBnYi5pbi51LnJhbmRvbSh0aGlzLm1pblt0aGlzLm9yZGVyXSx0aGlzLm1heFt0aGlzLm9yZGVyXSkgKiAxMDAwO1xuXG4gICAgdGhpcy5jYkxpc3RbdGhpcy5vcmRlcl0oKTtcblxuICAgIHRoaXMub3JkZXIrKztcbiAgICB0aGlzLlRpbWVyID0gc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKHRoaXMpLHRoaXMubGF0ZXIpO1xuXG4gIH1cblxuICBzdG9wKCkge1xuXG4gICAgbG9nKHRoaXMuVGltZXIpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLlRpbWVyKTtcblxuICB9XG5cbiAgYWRkKGZ1bmMsbWluPTgsbWF4PTEyKSB7XG5cbiAgICB0aGlzLm1pbi5wdXNoKG1pbik7XG4gICAgdGhpcy5tYXgucHVzaChtYXgpO1xuXG4gICAgdGhpcy5jYkxpc3QucHVzaChmdW5jKTtcbiAgICB0aGlzLmxlbiA9IHRoaXMuY2JMaXN0Lmxlbmd0aDtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9Tb21ldGltZXNNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBsYW5lXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbnVsbDtcbiAgICB0aGlzLm1hdGVyaWFsID0gbnVsbDtcblxuICAgIHRoaXMudmlkZW8gPSBudWxsO1xuICAgIHRoaXMucGxhbmUgPSBudWxsO1xuXG4gICAgdGhpcy5kZWZXVyA9IDE5MjA7XG4gICAgdGhpcy5kZWZISCA9IDEwODA7XG4gICAgdGhpcy5kZWZXID0gMzA1O1xuICAgIHRoaXMucmF0ZSA9IDA7XG4gICAgdGhpcy5yYXRlVyA9IDA7XG5cbiAgICB0aGlzLmxiID0gbnVsbDsgLy9sYXlvdXQgYmFja2dyb3VuZFxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIGNyZWF0ZShjYikge1xuXG4gICAgdmFyIHRleHR1cmVzID0gdGhpcy50ZXh0dXJlcyAgPSBnYi5pbi5sb2FkTWdyLnRleHR1cmVzO1xuXG4gICAgdmFyIHcgPSB0ZXh0dXJlc1swXS5pbWFnZS53aWR0aCAvIHRleHR1cmVzWzBdLmltYWdlLndpZHRoO1xuICAgIHZhciBoID0gdGV4dHVyZXNbMF0uaW1hZ2UuaGVpZ2h0IC8gdGV4dHVyZXNbMF0uaW1hZ2Uud2lkdGg7XG5cbiAgICAvLyBwbGFuZTAxXG5cbiAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh3LCBoLCAxLCAxKTtcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3JtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0uZnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLnBsYW5lID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICB0aGlzLnBsYW5lLnNjYWxlLnggPSB0aGlzLnBsYW5lLnNjYWxlLnkgPSAyMDAwLjA7XG5cbiAgICAvLyBwbGFuZTAyXG5cbiAgICB2YXIgdyA9IHRleHR1cmVzWzFdLmltYWdlLndpZHRoIC8gdGV4dHVyZXNbMV0uaW1hZ2Uud2lkdGg7XG4gICAgdmFyIGggPSB0ZXh0dXJlc1sxXS5pbWFnZS5oZWlnaHQgLyB0ZXh0dXJlc1sxXS5pbWFnZS53aWR0aDtcblxuICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHcsIGgsIDEsIDEpO1xuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3JtczogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS52cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS5mcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHRoaXMucGxhbmUwMiA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgdGhpcy5wbGFuZTAyLnNjYWxlLnggPSB0aGlzLnBsYW5lMDIuc2NhbGUueSA9IDYwMC4wO1xuXG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSAxO1xuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5vcGFjaXR5LnZhbHVlID0gMDtcblxuICAgIHRoaXMucGxhbmUwMi5wb3NpdGlvbi56ID0gLTE7XG5cbiAgICBnYi5pbi5zY2VuZS5zY2VuZS5hZGQoIHRoaXMucGxhbmUgKTtcbiAgICBnYi5pbi5zY2VuZS5zY2VuZS5hZGQoIHRoaXMucGxhbmUwMiApO1xuXG4gICAgLy8gdGhpcy5vblJlc2l6ZSgpO1xuICAgIC8vIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgICAvLyDjg4bjgq/jgrnjg4Hjg6PjgpJ1bmlmb3Jt5aSJ5pWw44Gr6L+95YqgXG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnRleHR1cmUudmFsdWUgPSB0ZXh0dXJlc1swXTtcbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMudGV4dHVyZTAxLnZhbHVlID0gdGV4dHVyZXNbMV07XG5cbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMudGV4dHVyZS52YWx1ZSA9IHRleHR1cmVzWzFdO1xuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy50ZXh0dXJlMDEudmFsdWUgPSB0ZXh0dXJlc1sxXTtcblxuICAgIGNiKCk7XG5cbiAgfVxuXG4gIHNldFZpZGVvU2l6ZSgpIHtcblxuICAgIC8vIHZpZGVv44Gu44K744OD44OI44K144Kk44K6ICAgICAgICAgIFxuICAgIC8vIHRoaXMubGIgPSBuZXcgZ2IuTGF5b3V0QmFja2dyb3VuZCgkKCdib2R5JyksJCh0aGlzLnZpZGVvLnZpZGVvKSk7XG4gICAgLy8gdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0VHJhbnNwYXJlbnQodmFsKSB7XG5cbiAgICAvLyB0aGlzLnBsYW5lLm1hdGVyaWFsLm9wYWNpdHkgPSB2YWw7XG5cbiAgfVxuXG4gIHR3ZWVuVHJhbnNwYXJlbnQodGltZSx2YWwpIHtcblxuICAgIC8vIHZhciB0ID0gdGltZSB8fCAxLjA7XG4gICAgLy8gdmFyIHYgPSB2YWwudGFyZ2V0IHx8IDEuMDtcbiAgICAvLyB2YXIgZSA9IHZhbC5lYXNlIHx8IFBvd2VyMi5lYXNlT3V0O1xuXG4gICAgLy8gVHdlZW5NYXgudG8odGhpcy5wbGFuZS5tYXRlcmlhbCwgdCwge1xuICAgIC8vICAgb3BhY2l0eTogdixcbiAgICAvLyAgIGVhc2UgOiBlLFxuICAgIC8vIH0pO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cblxuXG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgLy8gdmFyIHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAvLyB2YXIgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIC8vIHZhciByYXRlVyA9IHdpbmRvdy5pbm5lckhlaWdodCAvIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIC8vIHZhciByID0gdy9oO1xuXG4gICAgLy8gaWYgKHJhdGVXIDwgdGhpcy5yYXRlKSB7XG5cbiAgICAvLyAgIHRoaXMucGxhbmUuc2NhbGUuc2V0KHIqMC41OCxyKjAuNTgsciowLjU4KVxuXG4gICAgLy8gfSBlbHNlIHtcblxuICAgIC8vICAgLy8gbG9nKDIsc2NhbGVZKTtcblxuICAgIC8vICAgdGhpcy5wbGFuZS5zY2FsZS5zZXQoMSwxLDEpO1xuXG4gICAgLy8gfVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5ybS50b3RhbCArPSAxOyAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcbiAgICAkKHdpbmRvdykub24oJ29uU2VjdGlvbjA0UHJvZHVjdEltZycsIHRoaXMuY3JlYXRlLmJpbmQodGhpcywoKT0+e1xuICAgICAgLy9nYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICB9KSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvX2RldGFpbHMvUGxhbmUuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBhcmFtXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhbSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmd1aTtcbiAgICB0aGlzLmpzb24gPSB7fTtcbiAgICAvLyB0aGlzLmFwcE5hbWUgPSBcInBsdXNNVlwiO1xuXG4gICAgdmFyIGlzRmxhZyA9IHRydWU7XG5cbiAgICB0aGlzLmNsb2NrID0ge1xuICAgICAgcHJvZ3Jlc3M6IDAuNSxcbiAgICB9XG5cbiAgICB0aGlzLnpvb21ibHVyID0ge1xuICAgICAgc3RyZW5ndGg6IDQ2LjAsXG4gICAgICBzaXplOiA4OS4wLFxuICAgIH1cblxuICAgIHRoaXMudHJhbnNpdGlvbiA9IHtcbiAgICAgIHByb2dyZXNzOiAwLjAsXG4gICAgICBzaXplOiAwLjA0LFxuICAgICAgem9vbTogMzAsXG4gICAgICBjb2xvclNlcGFyYXRpb246IDAuMyxcbiAgICAgIHN0cmVuZ3RoOiAwLjYsXG4gICAgICB0d2VlbjogKCk9PntcblxuICAgICAgICB2YXIgdmFsO1xuICAgICAgICBpZiAoaXNGbGFnKSB2YWwgPSAxLjA7XG4gICAgICAgIGVsc2UgdmFsID0gMC4wXG5cbiAgICAgICAgaXNGbGFnID0gIWlzRmxhZztcblxuICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5wbGFuZTAyLnNoYWRlci51bmlmb3Jtcy5wcm9ncmVzcywgMi41LCB7XG4gICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgICB9KVxuXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRoaXMuc2V0dXBEYXRhKCk7XG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cblxuICBzZXR1cERhdGEoKSB7XG5cblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyBpZiAoZ2IuaW4uY29uZi5QQVJBTSkge1xuXG4gICAgdGhpcy5ndWkgPSBuZXcgZGF0LkdVSSgpO1xuICAgIC8vIHRoaXMuZ3VpID0gbmV3IGRhdC5HVUkoe2xvYWQ6IHRoaXMuanNvbn0pO1xuICAgIHRoaXMuZ3VpLnJlbWVtYmVyKHRoaXMpO1xuICAgICQoXCIuZGdcIikuY3NzKHt6SW5kZXg6OTk5OTl9KTtcblxuICAgIHZhciBmMSA9IHRoaXMuZ3VpLmFkZEZvbGRlcignem9vbWJsdXInKTtcbiAgICBmMS5hZGQodGhpcy56b29tYmx1ciwgJ3N0cmVuZ3RoJywgMC4wLCAyLjApLnN0ZXAoMC4wMSkubGlzdGVuKCkub25DaGFuZ2UoZnVuY3Rpb24odmFsKXtcblxuICAgICAgZ2IuaW4ucGxhbmUuc2hhZGVyc1syXS51bmlmb3Jtcy5zdHJlbmd0aC52YWx1ZSA9IHZhbDtcbiAgICAgIGxvZyh2YWwpO1xuXG4gICAgfSk7XG4gICAgZjEuYWRkKHRoaXMuem9vbWJsdXIsICdzaXplJywgMC4wLCAxMDAuMCkuc3RlcCgwLjEpLmxpc3RlbigpLm9uQ2hhbmdlKGZ1bmN0aW9uKHZhbCl7XG5cbiAgICAgIGdiLmluLnBsYW5lLnNoYWRlci51bmlmb3Jtcy5uRnJhZy52YWx1ZSA9IDEgLyB2YWw7XG5cbiAgICB9KTtcbiAgICBmMS5vcGVuKCk7XG5cbiAgICAvLyB0aGlzLmd1aS5jbG9zZSgpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzL1BhcmFtLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQcm9maWxlclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5TdGF0cztcbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyBpZiAoZ2IuaW4uY29uZi5TVEFUUykge1xuXG4gICAgICB0aGlzLlN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgICB0aGlzLlN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICB0aGlzLlN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCAgICAgPSBcIjBweFwiO1xuICAgICAgdGhpcy5TdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCAgID0gXCIwcHhcIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5TdGF0cy5kb21FbGVtZW50KTtcbiAgICBcblxuICAgIC8vIH07XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIGlmKHRoaXMuU3RhdHMpIHtcbiAgICAgIHRoaXMuU3RhdHMudXBkYXRlKCk7XG4gICAgfVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi51cC5hZGQoJ3Byb2ZpbGVyJyx0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzL1Byb2ZpbGVyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMYXlvdXRcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FsZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLlNQQmFzZVcgPSAzNzU7XG4gICAgdGhpcy5QQ0Jhc2VXID0gMTMwMDtcblxuICAgIHRoaXMucmF0ZSA9IDE7XG4gICAgdGhpcy5XID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLiR0YXJnZXRMaXN0ID0gW1xuICAgICAge1xuICAgICAgICAnJHRhcmdldCc6ICQoJyNzaWRlTCwgI3NpZGVSLCAjbmF2JyksXG4gICAgICAgICdzY2FsZSc6ICdzcE9ubHknIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgJyR0YXJnZXQnOiAkKCcuc2VjdGlvbjAzX2RldGFpbCcpLFxuICAgICAgLy8gICAnc2NhbGUnOiAnYm90aCcgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAnJHRhcmdldCc6ICQoJy5zZWN0aW9uMDQnKSxcbiAgICAgIC8vICAgJ3NjYWxlJzogJ2JvdGgnIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgLy8gfSxcbiAgICBdXG5cbiAgICB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIFxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgdGhpcy5XID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5pVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdGhpcy5zY2FsZSgpO1xuICAgIHRoaXMud3JhcCgpO1xuXG4gIH1cblxuICAvLyDmi6HlpKdcbiAgc2NhbGUoKSB7XG5cbiAgICAvLyBicOOBruWgtOWQiOOBrnNjYWxlXG4gICAgaWYgKHRoaXMuaVcgPD0gZ2IuaW4uY29uZi5icCkge1xuXG4gICAgICAvLyB3aWR0aOOBi+OCiXJhdGXjgpLoqIjnrpdcbiAgICAgIC8vIHRoaXMucmF0ZSA9IGdiLmluLnUuZmxvYXRGb3JtYXQodGhpcy5XIC8gdGhpcy5TUEJhc2VXICwgMik7XG4gICAgICBpZiAodGhpcy5XID4gMzc1KSB0aGlzLlcgPSAzNzU7XG4gICAgICBpZiAodGhpcy5XIDwgMzIwKSB0aGlzLlcgPSAzMjA7XG4gICAgICBsb2codGhpcy5XKTtcbiAgICAgIHRoaXMucmF0ZSA9IHRoaXMuVyAvIHRoaXMuU1BCYXNlVztcblxuICAgICAgLy8gc2NhbGXjgZnjgovjg6rjgrnjg4jjgpLjg6vjg7zjg5dcbiAgICAgICQuZWFjaCh0aGlzLiR0YXJnZXRMaXN0LCAoaW5kZXgsIHZhbCk9PntcblxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdib3RoJyB8fCB2YWwuc2NhbGUgPT0gJ3NwT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgc2NhbGU6IHRoaXMucmF0ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gd2lkdGjjgYvjgolyYXRl44KS6KiI566XXG4gICAgICAvLyB0aGlzLnJhdGUgPSBnYi5pbi51LmZsb2F0Rm9ybWF0KHRoaXMuVyAvIHRoaXMuUENCYXNlVyAsIDIpO1xuICAgICAgaWYgKHRoaXMuVyA+IDEzMDApIHRoaXMuVyA9IDEzMDA7XG4gICAgICB0aGlzLnJhdGUgPSB0aGlzLlcgLyB0aGlzLlBDQmFzZVc7XG5cbiAgICAgIC8vIHNjYWxl44GZ44KL44Oq44K544OI44KS44Or44O844OXXG4gICAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnYm90aCcgfHwgdmFsLnNjYWxlID09ICdwY09ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLnJhdGUsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyDjgZPjgaHjgonjga7loLTlkIjjga/jgIFzY2FsZeOCkuaIu+OBmVxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdzcE9ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgfSk7ICBcblxuICAgIH1cblxuICB9XG5cbiAgLy8gc2NhbGXjgZfjgZ/jgonjgIHlhYPjga7lpKfjgY3jgZXliIbkvZnnmb3jgYzjgafjgY3jgovjga7jgadvdmVyZmxvdyBoaWRkZW7jgafmtojjgZlcbiAgd3JhcCgpIHtcblxuXG5cbiAgfVxuXG4gIHJlc2V0KCkge1xuXG4gICAgJC5lYWNoKHRoaXMuJHRhcmdldExpc3QsIChpbmRleCwgdmFsKT0+e1xuXG4gICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzonMCAwJyxcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfSk7XG5cblxuICAgIC8vIOOCpOODmeODs+ODiOino+mZpFxuICAgIGdiLmluLnIucmVtb3ZlKCdzY2FsZVRvcCcpO1xuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIHRoaXMucnVuKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdzY2FsZVRvcCcsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9TaXplL1NjYWxlVG9wLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBIb3ZlckVmZmVjdFNOU1NQRm9vdGVyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3ZlckVmZmVjdFNOU1NQRm9vdGVyIHtcblxuICBjb25zdHJ1Y3Rvcigkd3JhcCwgJHRhcmdldCkge1xuXG4gICAgdGhpcy4kd3JhcCA9ICR3cmFwO1xuICAgIHRoaXMuJGlubmVyID0gdGhpcy4kd3JhcC5maW5kKCcuaW5uZXInKTtcbiAgICB0aGlzLiR0YXJnZXQgPSB0aGlzLiR3cmFwLmZpbmQoJy5zbnMuc3AgLmljb25TaGFyZScpO1xuICAgIHRoaXMuJGJhciA9IHRoaXMuJHdyYXAuZmluZCgnLnNucy5zcCAuYmFyJyk7XG4gICAgdGhpcy4kbGlzdCA9IHRoaXMuJHdyYXAuZmluZCgnLnNucy5zcCAubGlzdCcpO1xuICAgIHRoaXMuJGl0ZW0gPSB0aGlzLiR3cmFwLmZpbmQoJy5zbnMuc3AgLmxpc3QgLml0ZW0nKTtcblxuICAgIC8vIG1vdGlvblxuICAgIHRoaXMudGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gIH1cblxuICByZWFkeSgpIHtcblxuICAgIC8vIG94XG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJHdyYXAsIHt3aWR0aDogMH0pXG5cbiAgICAvLyBiYXJcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kYmFyLCB7d2lkdGg6IDB9KVxuXG4gICAgLy8gc25zXG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJGl0ZW0sIHt4OiAtNDAsIG9wYWNpdHk6IDB9KVxuXG4gICAgdGhpcy4kYmFyLnNob3coKTtcbiAgICB0aGlzLiRsaXN0LnNob3coKTtcblxuICB9XG5cbiAgdG9nZ2xlKCkge1xuXG4gICAgaWYgKHRoaXMuJHRhcmdldC5oYXNDbGFzcygnb24nKSkge1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuY2xvc2UoKTtcblxuICAgIH0gZWxzZSB7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICB0aGlzLm9wZW4oKTtcblxuICAgIH07XG5cbiAgICB0aGlzLiR0YXJnZXQudG9nZ2xlQ2xhc3MoJ29uJyk7XG5cbiAgfVxuXG4gIG9wZW4gKHRoYXQpIHtcblxuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRib3gpO1xuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRiYXIpO1xuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRpdGVtKTtcblxuICAgIHRoaXMucmVhZHkoKTtcblxuICAgIC8vIGJhcuOBjOS8uOOBs+OCi1xuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cblxuICAgIHRsXG4gICAgICAvLyBib3jjgYzkvLjjgbPjgotcbiAgICAgIC50byh0aGlzLiR3cmFwLCAwLjQsIHtcbiAgICAgICAgd2lkdGg6IDMzMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXRcbiAgICAgIH0pXG4gICAgICAudG8odGhpcy4kYmFyLCAwLjMsIHtcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcbiAgICAgIH0sJy09MC4yJylcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDApLCAwLjMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yJylcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDEpLCAwLjMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgyKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMyksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjI1JylcbiAgICBcbiAgfVxuXG4gIGNsb3NlICh0aGF0KSB7XG5cbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kYm94KTtcbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kYmFyKTtcbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kaXRlbSk7XG5cbiAgICAvLyBiYXJcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRsXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgzKSwgMC4zLCB7XG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICB9KVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMiksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgfSwnLT0wLjI1JylcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDEpLCAwLjMsIHtcbiAgICAgICAgeDogLTQwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjI1JylcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDApLCAwLjMsIHtcbiAgICAgICAgeDogLTQwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAgICAgb25Db21wbGV0ZTooKT0+e1xuICAgICAgICAgIHRoaXMuJGxpc3QuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGJhciwgMC4yLCB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dCxcbiAgICAgICAgb25Db21wbGV0ZTooKT0+e1xuICAgICAgICAgIHRoaXMuJGJhci5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sJy09MC4zJylcbiAgICAgIC50byh0aGlzLiR3cmFwLCAwLjMsIHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgfSwnLT0wLjMnKVxuXG4gIH1cblxuICByZXNldCgpIHtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLiR0YXJnZXQub2ZmKCdjbGljaycpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiR0YXJnZXQub24oJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNOU1NQRm9vdGVyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBIb3ZlckVmZmVjdFNWR0Fycm93VG9wXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3ZlckVmZmVjdFNWR0Fycm93VG9wIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkdGFyZ2V0XG5cbiAgICAvLyBtb3Rpb25cbiAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgICB0aGlzLmlzSG92ZXIgPSBmYWxzZTtcblxuICAgIC8vIOOCueODnuODm+OBruOBqOOBjeOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChnYi5pbi51LmlzUEMpIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICB9XG5cbiAgb25FbnRlciAodGhhdCkge1xuXG4gICAgaWYgKHRoaXMuYXV0b1RMKSB7XG4gICAgICB0aGlzLmF1dG9UTC5raWxsKCk7XG4gICAgICB0aGlzLmF1dG9UTCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnRsMDIpIHRoaXMudGwwMi5raWxsKCk7XG4gICAgdGhpcy50bDAxID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnRsMDFcbiAgICAgICAgLy8g55+i5Y2w44KS5LiL44Gr5LiL44GS44KLXG4gICAgICAgIC50bygkKHRoYXQpLmZpbmQoJy5hcnJvdy5wYycpLCAwLjQsIHtcbiAgICAgICAgICBzY2FsZVk6IDAuNjUsXG4gICAgICAgICAgeTogOCxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHo6IDEsXG4gICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC8vIOaWh+Wtl+OCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCcudGV4dCcpLCAwLjQsIHtcbiAgICAgICAgICB5OiAzMCxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHo6IDEsXG4gICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgICAgfSwnLT0wLjM3JylcbiAgICAgICAgXG4gIH1cblxuICBvbkxlYXZlICh0aGF0KSB7XG5cbiAgICBpZiAodGhpcy50bDAxKSB0aGlzLnRsMDEua2lsbCgpO1xuICAgIHRoaXMudGwwMiA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy50bDAyXG4gICAgICAvLyDmloflrZfjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgIC50bygkKHRoYXQpLmZpbmQoJy50ZXh0JyksIDAuNSwge1xuICAgICAgICB5OiAwLFxuICAgICAgICB6OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0XG4gICAgICB9KVxuICAgICAgLy8g55+i5Y2w44KS5LiL44Gr5LiL44GS44KLXG4gICAgICAudG8oJCh0aGF0KS5maW5kKCcuYXJyb3cucGMnKSwgMC41LCB7XG4gICAgICAgIHNjYWxlWTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZUluT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAgICAgaWYgKHRoaXMuYXV0b1RMID09IG51bGwpIHRoaXMuYXV0b0Fycm93KCk7ICAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgIH0sJy09MC40NScpXG5cbiAgfVxuXG4gIGF1dG9BcnJvdygpIHtcblxuICAgIHRoaXMuYXV0b1RMID0gbmV3IFRpbWVsaW5lTWF4KHtyZXBlYXQ6IC0xfSk7XG5cbiAgICB0aGlzLmF1dG9UTFxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwgMC42LCB7XG4gICAgICAgIHk6IDYwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBkZWxheTogNS4wLFxuICAgICAgICBzY2FsZVk6IDAuMyxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSlcbiAgICAgIC5zZXQodGhpcy4kdGFyZ2V0LmZpbmQoJy5hcnJvdy5wYycpLCB7c2NhbGVZOiAxLHk6IC02MH0pXG4gICAgICAudG8odGhpcy4kdGFyZ2V0LmZpbmQoJy5hcnJvdy5wYycpLCAwLjUsIHtcbiAgICAgICAgc2NhbGVZOiAxLFxuICAgICAgICB5OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBkZWxheTogMC4zLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgMTAwJScsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9KVxuXG4gIH1cblxuICBzZXR1cEZpcnN0KCkge1xuXG4gICAgVHdlZW5NYXguc2V0KCQoJy5zZWN0aW9uMDEgLm5leHQgLnRleHQnKSwge3k6IC02MCxvcGFjaXR5OjAsejogMSx9KTtcbiAgICBUd2Vlbk1heC5zZXQoJCgnLnNlY3Rpb24wMSAubmV4dCBzdmcnKSwge3k6IC0zMCxvcGFjaXR5OjAsejogMSx9KTtcblxuICB9XG5cbiAgcnVuRmlyc3QoKSB7XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgICAgICAvLyDmloflrZfjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgIHRsLnRvKCQoJy5zZWN0aW9uMDEgLm5leHQgLnRleHQnKSwgMS41LCB7XG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHo6IDEsXG4gICAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXRcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKCQoJy5zZWN0aW9uMDEgLm5leHQgc3ZnJyksIDEuMCwge1xuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0sJy09MC44MicpXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge3NlbGYub25FbnRlci5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgICQodGhpcykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7c2VsZi5vbkxlYXZlLmNhbGwoc2VsZix0aGlzKX0pO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dUb3AuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBvc2l0aW9uXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDkuIrkuIvkuK3lpK7lr4TjgZtcbiAgICB0aGlzLnNldENlbnRlcigpO1xuXG4gIH1cblxuICBzZXRDZW50ZXIoKSB7XG5cbiAgICAkKCcucG9zQ2VudGVyJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5hZGp1c3QoKTtcbiAgICAgIFxuICAgIH0pO1xuICAgICQoJy5wb3NDZW50ZXJXJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5hZGp1c3RXKCk7XG4gICAgICBcbiAgICB9KTtcbiAgICAkKCcucG9zQ2VudGVySCcpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykuYWRqdXN0SCgpO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgdGhpcy5zZXRDZW50ZXIoKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQoJ3NldENlbnRlcicsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1Bvc3Rpb24vUG9zaXRpb24uanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIERpc3BsYXlcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYkdMaW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICBcdHRoaXMuZ2wgPSBudWxsO1xuXG4gIFx0dGhpcy53ZWJnbEluaXQgPSB0aGlzLl93ZWJnbEluaXQuYmluZCh0aGlzKTtcblxuICBcdHRoaXMuY3JlYXRlX3NoYWRlciA9IHRoaXMuX2NyZWF0ZV9zaGFkZXIuYmluZCh0aGlzKTtcbiAgXHR0aGlzLmNyZWF0ZV9wcm9ncmFtID0gdGhpcy5fY3JlYXRlX3Byb2dyYW0uYmluZCh0aGlzKTtcbiAgXHR0aGlzLmNyZWF0ZV92Ym8gPSB0aGlzLl9jcmVhdGVfdmJvLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uSW1tZWRpYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgb25JbW1lZGlhdGUoKSB7XG5cbiAgICAvLyDjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICBnYi5pbi51cC5sb29wKCk7XG5cblx0XHR0aGlzLndlYmdsSW5pdCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG5cdFx0d2luZG93LmNvbnNvbGUubG9nKCdvbkxvYWQnKTtcblxuICB9XG5cbiAgX3dlYmdsSW5pdCgpIHtcblxuXHRcdC8vIGNhbnZhc+OCqOODrOODoeODs+ODiOOCkuWPluW+l1xuXHRcdGxldCBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXHRcdGMud2lkdGggPSAzMDA7XG5cdFx0Yy5oZWlnaHQgPSAzMDA7XG5cblx0XHQvLyB3ZWJnbOOCs+ODs+ODhuOCreOCueODiOOCkuWPluW+l1xuXHRcdHRoaXMuZ2wgPSBjLmdldENvbnRleHQoJ3dlYmdsJykgfHwgYy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKTtcblxuXHRcdC8vIGNhbnZhc+OCkuWIneacn+WMluOBmeOCi+iJsuOCkuioreWumuOBmeOCi1xuXHRcdHRoaXMuZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xuXG5cdFx0Ly8gY2FudmFz44KS5Yid5pyf5YyW44GZ44KL6Zqb44Gu5rex5bqm44KS6Kit5a6a44GZ44KLXG5cdFx0dGhpcy5nbC5jbGVhckRlcHRoKDEuMCk7XG5cblx0XHQvLyBjYW52YXPjgpLliJ3mnJ/ljJZcblx0XHR0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG5cblx0XHQvLyDpoILngrnjgrfjgqfjg7zjg4Djgajjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7nlJ/miJBcblx0XHRsZXQgdl9zaGFkZXIgPSB0aGlzLmNyZWF0ZV9zaGFkZXIoJ3ZzJyk7XG5cdFx0bGV0IGZfc2hhZGVyID0gdGhpcy5jcmVhdGVfc2hhZGVyKCdmcycpO1xuXG5cdFx0Ly8g44OX44Ot44Kw44Op44Og44Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQ44Go44Oq44Oz44KvXG5cdFx0bGV0IHByZyA9IHRoaXMuY3JlYXRlX3Byb2dyYW0odl9zaGFkZXIsIGZfc2hhZGVyKTtcblxuXHRcdC8vIGF0dHJpYnV0ZUxvY2F0aW9u44Gu5Y+W5b6XXG5cdFx0bGV0IGF0dExvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbihwcmcsICdwb3NpdGlvbicpO1xuXG5cdFx0Ly8gYXR0cmlidXRl44Gu6KaB57Sg5pWwKOOBk+OBruWgtOWQiOOBryB4eXog44GuM+imgee0oClcblx0XHRsZXQgYXR0U3RyaWRlID0gMztcblxuXHRcdC8vIOODouODh+ODqyjpoILngrkp44OH44O844K/XG5cdFx0bGV0IHZlcnRleF9wb3NpdGlvbiA9IFtcblx0XHRcdDAuMCwgMS4wLCAwLjAsXG5cdFx0XHQxLjAsIDAuMCwgMC4wLFxuXHRcdFx0LTEuMCwgMC4wLCAwLjBcblx0XHRdO1xuXG5cdFx0Ly8gVkJP44Gu55Sf5oiQXG5cdFx0dmFyIHZibyA9IHRoaXMuY3JlYXRlX3Zibyh2ZXJ0ZXhfcG9zaXRpb24pO1xuXG5cdFx0Ly8gVkJP44KS44OQ44Kk44Oz44OJXG5cdFx0dGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB2Ym8pO1xuXG5cdFx0Ly8gYXR0cmlidXRl5bGe5oCn44KS5pyJ5Yq544Gr44GZ44KLXG5cdFx0dGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRMb2NhdGlvbik7XG5cblx0XHQvLyBhdHRyaWJ1dGXlsZ7mgKfjgpLnmbvpjLJcblx0XHR0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0TG9jYXRpb24sIGF0dFN0cmlkZSwgdGhpcy5nbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG5cdFx0Ly8gbWluTWF0cml4LmpzIOOCkueUqOOBhOOBn+ihjOWIl+mWoumAo+WHpueQhlxuXHRcdC8vIG1hdElW44Kq44OW44K444Kn44Kv44OI44KS55Sf5oiQXG5cdFx0dmFyIG0gPSBuZXcgbWF0SVYoKTtcblxuXHRcdC8vIOWQhOeoruihjOWIl+OBrueUn+aIkOOBqOWIneacn+WMllxuXHRcdHZhciBtTWF0cml4ID0gbS5pZGVudGl0eShtLmNyZWF0ZSgpKTtcblx0XHR2YXIgdk1hdHJpeCA9IG0uaWRlbnRpdHkobS5jcmVhdGUoKSk7XG5cdFx0dmFyIHBNYXRyaXggPSBtLmlkZW50aXR5KG0uY3JlYXRlKCkpO1xuXHRcdHZhciBtdnBNYXRyaXggPSBtLmlkZW50aXR5KG0uY3JlYXRlKCkpO1xuXG5cdFx0Ly8g44OT44Ol44O85bqn5qiZ5aSJ5o+b6KGM5YiXXG5cdFx0bS5sb29rQXQoWzAuMCwgMS4wLCAzLjBdLCBbMCwgMCwgMF0sIFswLCAxLCAwXSwgdk1hdHJpeCk7XG5cblx0XHQvLyDjg5fjg63jgrjjgqfjgq/jgrfjg6fjg7PluqfmqJnlpInmj5vooYzliJdcblx0XHRtLnBlcnNwZWN0aXZlKDkwLCBjLndpZHRoIC8gYy5oZWlnaHQsIDAuMSwgMTAwLCBwTWF0cml4KTtcblxuXHRcdC8vIOWQhOihjOWIl+OCkuaOm+OBkeWQiOOCj+OBm+W6p+aomeWkieaPm+ihjOWIl+OCkuWujOaIkOOBleOBm+OCi1xuXHRcdG0ubXVsdGlwbHkocE1hdHJpeCwgdk1hdHJpeCwgbXZwTWF0cml4KTtcblx0XHRtLm11bHRpcGx5KG12cE1hdHJpeCwgbU1hdHJpeCwgbXZwTWF0cml4KTtcblxuXHRcdC8vIHVuaWZvcm1Mb2NhdGlvbuOBruWPluW+l1xuXHRcdHZhciB1bmlMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgJ212cE1hdHJpeCcpO1xuXG5cdFx0Ly8gdW5pZm9ybUxvY2F0aW9u44G45bqn5qiZ5aSJ5o+b6KGM5YiX44KS55m76YyyXG5cdFx0dGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHVuaUxvY2F0aW9uLCBmYWxzZSwgbXZwTWF0cml4KTtcblxuXHRcdC8vIOODouODh+ODq+OBruaPj+eUu1xuXHRcdHRoaXMuZ2wuZHJhd0FycmF5cyh0aGlzLmdsLlRSSUFOR0xFUywgMCwgMyk7XG5cblx0XHQvLyDjgrPjg7Pjg4bjgq3jgrnjg4jjga7lho3mj4/nlLtcblx0XHR0aGlzLmdsLmZsdXNoKCk7XG5cblxuICB9XG5cblx0X2NyZWF0ZV9zaGFkZXIoaWQpe1xuXHRcdC8vIOOCt+OCp+ODvOODgOOCkuagvOe0jeOBmeOCi+WkieaVsFxuXHRcdHZhciBzaGFkZXI7XG5cblx0XHQvLyBIVE1M44GL44KJc2NyaXB044K/44Kw44G444Gu5Y+C54Wn44KS5Y+W5b6XXG5cdFx0dmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cblx0XHQvLyBzY3JpcHTjgr/jgrDjgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/mipzjgZHjgotcblx0XHRpZighc2NyaXB0RWxlbWVudCl7cmV0dXJuO31cblxuXHRcdC8vIHNjcmlwdOOCv+OCsOOBrnR5cGXlsZ7mgKfjgpLjg4Hjgqfjg4Pjgq9cblx0XHRzd2l0Y2goc2NyaXB0RWxlbWVudC50eXBlKXtcblxuXHRcdFx0Ly8g6aCC54K544K344Kn44O844OA44Gu5aC05ZCIXG5cdFx0XHRjYXNlICd4LXNoYWRlci94LXZlcnRleCc6XG5cdFx0XHRcdHNoYWRlciA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHRoaXMuZ2wuVkVSVEVYX1NIQURFUik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHQvLyDjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7loLTlkIhcblx0XHRcdGNhc2UgJ3gtc2hhZGVyL3gtZnJhZ21lbnQnOlxuXHRcdFx0XHRzaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0aGlzLmdsLkZSQUdNRU5UX1NIQURFUik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdCA6XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyDnlJ/miJDjgZXjgozjgZ/jgrfjgqfjg7zjg4Djgavjgr3jg7zjgrnjgpLlibLjgorlvZPjgabjgotcblx0XHR0aGlzLmdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNjcmlwdEVsZW1lbnQudGV4dCk7XG5cblx0XHQvLyDjgrfjgqfjg7zjg4DjgpLjgrPjg7Pjg5HjgqTjg6vjgZnjgotcblx0XHR0aGlzLmdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuXHRcdC8vIOOCt+OCp+ODvOODgOOBjOato+OBl+OBj+OCs+ODs+ODkeOCpOODq+OBleOCjOOBn+OBi+ODgeOCp+ODg+OCr1xuXHRcdGlmKHRoaXMuZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgdGhpcy5nbC5DT01QSUxFX1NUQVRVUykpe1xuXG5cdFx0XHQvLyDmiJDlip/jgZfjgabjgYTjgZ/jgonjgrfjgqfjg7zjg4DjgpLov5TjgZfjgabntYLkuoZcblx0XHRcdHJldHVybiBzaGFkZXI7XG5cdFx0fWVsc2V7XG5cblx0XHRcdC8vIOWkseaVl+OBl+OBpuOBhOOBn+OCieOCqOODqeODvOODreOCsOOCkuOCouODqeODvOODiOOBmeOCi1xuXHRcdFx0YWxlcnQodGhpcy5nbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xuXHRcdH1cblx0fVxuXG5cdF9jcmVhdGVfcHJvZ3JhbSh2cywgZnMpe1xuXHRcdC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkFxuXHRcdHZhciBwcm9ncmFtID0gdGhpcy5nbC5jcmVhdGVQcm9ncmFtKCk7XG5cblx0XHQvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgavjgrfjgqfjg7zjg4DjgpLlibLjgorlvZPjgabjgotcblx0XHR0aGlzLmdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2cyk7XG5cdFx0dGhpcy5nbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnMpO1xuXG5cdFx0Ly8g44K344Kn44O844OA44KS44Oq44Oz44KvXG5cdFx0dGhpcy5nbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuXHRcdC8vIOOCt+OCp+ODvOODgOOBruODquODs+OCr+OBjOato+OBl+OBj+ihjOOBquOCj+OCjOOBn+OBi+ODgeOCp+ODg+OCr1xuXHRcdGlmKHRoaXMuZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCB0aGlzLmdsLkxJTktfU1RBVFVTKSl7XG5cblx0XHRcdC8vIOaIkOWKn+OBl+OBpuOBhOOBn+OCieODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOCkuacieWKueOBq+OBmeOCi1xuXHRcdFx0dGhpcy5nbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG5cdFx0XHQvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TjgZfjgabntYLkuoZcblx0XHRcdHJldHVybiBwcm9ncmFtO1xuXHRcdH1lbHNle1xuXG5cdFx0XHQvLyDlpLHmlZfjgZfjgabjgYTjgZ/jgonjgqjjg6njg7zjg63jgrDjgpLjgqLjg6njg7zjg4jjgZnjgotcblx0XHRcdGFsZXJ0KHRoaXMuZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFZCT+OCkueUn+aIkOOBmeOCi+mWouaVsFxuXHRfY3JlYXRlX3ZibyhkYXRhKXtcblx0XHQvLyDjg5Djg4Pjg5XjgqHjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcblx0XHR2YXIgdmJvID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcblxuXHRcdC8vIOODkOODg+ODleOCoeOCkuODkOOCpOODs+ODieOBmeOCi1xuXHRcdHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdmJvKTtcblxuXHRcdC8vIOODkOODg+ODleOCoeOBq+ODh+ODvOOCv+OCkuOCu+ODg+ODiFxuXHRcdHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShkYXRhKSwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG5cblx0XHQvLyDjg5Djg4Pjg5XjgqHjga7jg5DjgqTjg7Pjg4njgpLnhKHlirnljJZcblx0XHR0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xuXG5cdFx0Ly8g55Sf5oiQ44GX44GfIFZCTyDjgpLov5TjgZfjgabntYLkuoZcblx0XHRyZXR1cm4gdmJvO1xuXHR9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9XZWJHTGluaXQuanMiXSwic291cmNlUm9vdCI6IiJ9