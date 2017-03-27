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
	
	var _Main = __webpack_require__(28);
	
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
	
	// import SliderTop from '../Display/UI/SliderTop.js';
	
	
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
	
	var _Layout = __webpack_require__(24);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	      gb.in.Layout = new _Layout2.default();
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: LoadMgr
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
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
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Loader
	 * Date:
	 * Author:
	 */
	
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
	
	        window.console.log('youtubeready');
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
	
	    //WebFontのローダー管理
	
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

	/**
	 * fileOverview: 環境判定クラス(デバイス、ブラウザ)、各判定メソッド詳細はDevice.jsを参照
	 * Project:
	 * File: JudgeEnvironment
	 * Date:
	 * Author:
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Layout
	//
	//--------------------------------------------------
	
	var _Size = __webpack_require__(25);
	
	var _Size2 = _interopRequireDefault(_Size);
	
	var _Position = __webpack_require__(27);
	
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
/* 25 */
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
	
	var _Scale = __webpack_require__(26);
	
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
/* 28 */
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
	
	var _DisplayTop = __webpack_require__(29);
	
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
/* 29 */
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
	
	
	var _Effects = __webpack_require__(30);
	
	var _Effects2 = _interopRequireDefault(_Effects);
	
	var _ScaleTop = __webpack_require__(44);
	
	var _ScaleTop2 = _interopRequireDefault(_ScaleTop);
	
	var _HoverEffectSNSSPFooter = __webpack_require__(45);
	
	var _HoverEffectSNSSPFooter2 = _interopRequireDefault(_HoverEffectSNSSPFooter);
	
	var _HoverEffectSVGArrowTop = __webpack_require__(46);
	
	var _HoverEffectSVGArrowTop2 = _interopRequireDefault(_HoverEffectSVGArrowTop);
	
	var _TopTime = __webpack_require__(17);
	
	var _TopTime2 = _interopRequireDefault(_TopTime);
	
	var _Position = __webpack_require__(27);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	var _WebGLinit = __webpack_require__(47);
	
	var _WebGLinit2 = _interopRequireDefault(_WebGLinit);
	
	var _test = __webpack_require__(48);
	
	var _test2 = _interopRequireDefault(_test);
	
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
	
	      // window.console.log('static_Run');
	
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
/* 30 */
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
	
	
	var _CVContents = __webpack_require__(31);
	
	var _CVContents2 = _interopRequireDefault(_CVContents);
	
	var _GlContents = __webpack_require__(37);
	
	var _GlContents2 = _interopRequireDefault(_GlContents);
	
	var _Profiler = __webpack_require__(43);
	
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
/* 31 */
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
	
	
	var _CVContentsLoop = __webpack_require__(32);
	
	var _CVContentsLoop2 = _interopRequireDefault(_CVContentsLoop);
	
	var _CVContentsTimeline = __webpack_require__(33);
	
	var _CVContentsTimeline2 = _interopRequireDefault(_CVContentsTimeline);
	
	var _CreateCanvas = __webpack_require__(34);
	
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
/* 34 */
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
	
	
	var _Canvas = __webpack_require__(35);
	
	var _Canvas2 = _interopRequireDefault(_Canvas);
	
	var _Plane = __webpack_require__(36);
	
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
	
	
	var _GlContentsLoop = __webpack_require__(38);
	
	var _GlContentsLoop2 = _interopRequireDefault(_GlContentsLoop);
	
	var _GlContentsTimeline = __webpack_require__(39);
	
	var _GlContentsTimeline2 = _interopRequireDefault(_GlContentsTimeline);
	
	var _Plane = __webpack_require__(41);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	var _Param = __webpack_require__(42);
	
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
/* 39 */
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
	
	var _SometimesMgr = __webpack_require__(40);
	
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
/* 40 */
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
/* 43 */
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

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "\nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vNormal;\nuniform vec3 color;\n\nconst vec3 Light = vec3(1.0, 2.0, .7);\n\nfloat diffuse(vec3 N, vec3 L) {\n\treturn max(dot(N, normalize(L)), 0.0);\n}\n\n\nvec3 diffuse(vec3 N, vec3 L, vec3 C) {\n\treturn diffuse(N, L) * C;\n}\n\nvoid main(void) {\n\n\tfloat d = diffuse(vNormal, Light) * 0.05;\n\tvec3 final = color;\n\tif(color.r > .5) {\n\t\tfinal -= d;\n\t} else {\n\t\tfinal += d;\n\t}\n    gl_FragColor = vec4(final, 1.0);\n}"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2QxMDMyOTFmOWUzNmRmZTNkNTciLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1BhZ2UvQ29tbW9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvbmYuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGF0YS9Tb3VuZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvVXRpbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRnVuYy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvUmVhZHlNZ3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9SZWFkeVBlcmNlbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvUmVzaXplTWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9TY3JvbGxNZ3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL01vdXNlTWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZE1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9Zb3V0dWJlRm9yU2VjMDEuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0Rpc3BsYXkvTGF5b3V0L0Z1bGxTaXplLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0p1ZGdlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9fZXZlbnRzL1Jlc3BvbnNpdmVTd2l0Y2hJbWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Td2lwZVRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9TY3JvbGxUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU25zLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9lanMvaW5jL21ldGFEYXRhLmpzb24iLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2l6ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9TaXplL1NjYWxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1Bvc3Rpb24vUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9NYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvRWZmZWN0cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNMb29wLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DcmVhdGVDYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvX2RldGFpbHMvQ2FudmFzLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL1BsYW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHNMb29wLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c1RpbWVsaW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9Tb21ldGltZXNNZ3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9fZGV0YWlscy9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvUGFyYW0uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzL1Byb2ZpbGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGVUb3AuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0Fycm93VG9wLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvV2ViR0xpbml0LmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvdGVzdC5mcmFnIl0sIm5hbWVzIjpbIndpbmRvdyIsImdiIiwidW5kZWZpbmVkIiwiaW4iLCJjb21tb24iLCJtYWluIiwiQ29tbW9uIiwib25JbW1lZGlhdGUiLCJzZXRFdmVudHMiLCJjb25mIiwidSIsImYiLCJ1cCIsInIiLCJzIiwibSIsInJtIiwibG9hZE1nciIsInNjdCIsIkxheW91dCIsIm9uQ29tcGxldGVkRnVuYyIsIkRpc3BsYXlPcGVuaW5nIiwiamUiLCJyZXNJbWciLCJzbnMiLCIkIiwic3d0IiwiY2hlY2tDc3NCbGVuZCIsInN0YXJ0IiwiZG9jdW1lbnQiLCJvbiIsIm9uUmVhZHkiLCJiaW5kIiwib25Mb2FkIiwiQ29uZiIsIlJFTEVBU0UiLCJGTEciLCJMT0ciLCJQQVJBTSIsIlNUQVRTIiwiZGVmVyIsImRlZkgiLCJXIiwiSCIsInNwVyIsInNwSCIsImJwIiwibW9kZSIsImtleXMiLCJzd2l0Y2hNb2RlIiwic291bmREYXRhIiwic2VjMDJJbWdOdW0iLCJ5b3V0dWJlSUQwMSIsInlvdXR1YmVJRDAyIiwid2ViRm9udExvYWRlZCIsImkiLCJrZXkiLCJsZW4iLCJwYXJhbSIsInJlZiIsInJlZjEiLCJ2YWx1ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNwbGl0IiwibGVuZ3RoIiwiaiIsIm9iaiIsImsiLCJ2YWwiLCJTb3VuZERhdGEiLCJVdGlsIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFwcFYiLCJhcHBWZXJzaW9uIiwiaXNSZXNTUCIsImlzUmVzUEMiLCJpc1BDIiwiaXNTUCIsImlzVEFCIiwiaXNNQiIsImlzSUUiLCJpc1NldFNQU2l6ZSIsInN0YXJ0VGltZSIsImVsYXBzZWRUaW1lIiwibm93IiwiRGF0ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJoaXQiLCJyYW5nZSIsIm51bSIsInJlc01pbiIsInJlc01heCIsImJhc2VNaW4iLCJiYXNlTWF4IiwicCIsIm4iLCJwb3MiLCJTdHJpbmciLCJpbmRleE9mIiwic3Vic3RyIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJyYWRpYW5zIiwiUEkiLCJhbmdsZSIsInAxIiwicDIiLCJzcXJ0IiwicG93IiwieCIsInkiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJhcnkiLCJzbGljZSIsInQiLCJBcnJheSIsInB1c2giLCJzaHVmZmxlQXJ5IiwibCIsImxlbjEiLCJuZXdBcnIiLCJwYXJhIiwiZGVzYyIsImxpc3QiLCJyZXR1cm5LZXkiLCJnZXRUaW1lIiwiZmxnIiwiY3NzIiwibWVkaWEiLCJwYXR0ZXJuIiwiUmVnRXhwIiwiam9pbiIsInRlc3QiLCJhZGRDbGFzcyIsImlzSXBhZCIsImlzQW5kcm9pZCIsInBsYXRmb3JtIiwiaXNJb3MiLCJtc2llIiwicGFyc2VJbnQiLCJtYXRjaCIsImlzSWUxMFVuZGVyIiwibG9nIiwiaXNJRTExIiwicmVtb3ZlQ2xhc3MiLCJ2ZXJzaW9uIiwicGFyc2VGbG9hdCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVybCIsImhyZWYiLCJwYXJhbUl0ZW1zIiwicGFyYW1JdGVtIiwiaGFzaCIsImNvb2tpZSIsImlzQ29udGFpbiIsImciLCJzdHIiLCJ0b1N0cmluZyIsImNvbnRhaW4iLCJudW1iZXIiLCJfcG93Iiwicm91bmQiLCJyZXMiLCJvcmciLCJkZXN0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJnZXROb3ciLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsIm1pbGxTZWNvbmQiLCJnZXRNaWxsaXNlY29uZHMiLCJnZXREYXRlIiwibW9udGhkYXlzIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIndlZWtEYXlKUCIsIndESiIsImdldERheSIsIndlZWtEYXlFTiIsIndERSIsImRhdGUiLCJOdW1iZXIiLCJpZ25vcmVBcnJheSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCIkdGFyZ2V0IiwiJGltZyIsImVhY2giLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiYXR0ciIsInRyaWdnZXIiLCJzZWxmIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib2ZmIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJwYXRobmFtZSIsImV2ZW50IiwicmV0dXJuVmFsdWUiLCJrZXlDb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ud2hlZWwiLCJvbm1vdXNld2hlZWwiLCJvbnRvdWNobW92ZSIsIm9ua2V5ZG93biIsInByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJGdW5jIiwiYmxhbmsiLCJkZWJ1Z2dlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImV4cGFuZGpRdWVyeSIsIm1ldGhvZHMiLCJjb25zb2xlIiwicHJlcGVuZCIsIkZQUyIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiY2xlYXJUaW1lb3V0IiwialF1ZXJ5IiwiZm4iLCJleHRlbmQiLCJhZGp1c3QiLCJhZGp1c3RXIiwiYWRqdXN0SCIsIkNTUyIsInN1cHBvcnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidiIsImlzQW5kcm9pZFZlcnNpb24iLCJhbGVydCIsIlJlYWR5TWdyIiwiY29tcGxldGVkIiwidG90YWwiLCJjdXJyZW50IiwicmVhZHlQZXJjZW50IiwicmVtb3ZlIiwidXBkYXRlIiwic2V0dXAiLCJSZWFkeVBlcmNlbnQiLCIkbG9hZGluZyIsIiRiYXIiLCIkcGVyY2VudCIsImlzTG9jayIsInNldFRpbWVvdXRMb2NrIiwidGFyZ2V0IiwidGV4dCIsIm9uQ29tcGxldGUiLCJUd2Vlbk1heCIsInRvIiwic2NhbGUiLCJvcGFjaXR5IiwiZWFzZSIsIlBvd2VyMyIsImVhc2VJbk91dCIsIlVwZGF0ZU1nciIsImNudCIsInVwZGF0ZUxpc3QiLCJUaW1lciIsImlzU3RvcCIsIm5hbWUiLCJmdW5jIiwiYXJyUmVtb3ZlIiwibG9vcCIsImNoZWNrIiwic3BsaWNlIiwiUmVzaXplTWdyIiwicmVzaXplTGlzdCIsIndzIiwib2xkVyIsIm9sZEgiLCJvblJlc2l6ZSIsImdldFdpbmRvd1NpemUiLCJTY3JvbGxNZ3IiLCJzY3JvbGxMaXN0Iiwic2Nyb2xsRW5kTGlzdCIsInN0Iiwic2IiLCJzdiIsIlNUQW1vdW50Iiwib2Zmc2V0IiwiaXNTdGFydCIsImVuZCIsInNjcm9sbFRvcCIsImRlbHRhIiwiZGVsdGFYIiwiZGVsdGFZIiwiaXNXaW4iLCJpc0ZGIiwic2Nyb2xsTGVmdCIsIm9uU2Nyb2xsIiwib25Nb3VzZVdoZWVsIiwiTW91c2VNZ3IiLCJjeCIsImN5IiwibW91c2VNb3ZlTGlzdCIsIm1vdXNlTW92ZVN0YXJ0TGlzdCIsIm1vdXNlTW92ZUVuZExpc3QiLCJlbmRUaW1lIiwib25FbmQiLCJvcmlnaW5hbEV2ZW50IiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwib2Zmc2V0WCIsImxlZnQiLCJ0b3AiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2htb3ZlIiwib25Nb3VzZW1vdmUiLCJMb2FkTWdyIiwibG9hZGVyIiwiY2IiLCJ5b3V0dWJlSWZyYW1lU2NyaXB0IiwibG9hZFNlYzAySW1nIiwicGF0aCIsImNiMDIiLCJpbWciLCJzaGFkZXJzIiwic2hhZGVyTG9hZExpc3QiLCJab29tQmx1ciIsIlRyYW5zaXRpb24wMiIsInNoYWRlclNlcmlhbExvYWQiLCJzaGFkZXIiLCJsb2FkIiwiY29tcCIsInNlY3Rpb24wNFByb2R1Y3RJbWciLCJ0ZXh0dXJlTGlzdCIsInRleHR1cmVzIiwidGV4dHVyZVNlcmlhbExvYWQiLCJ0ZXh0dXJlIiwiVEhSRUUiLCJJbWFnZVV0aWxzIiwibG9hZFRleHR1cmUiLCJjb25maWciLCJjdXN0b20iLCJmYW1pbGllcyIsInVybHMiLCJhY3RpdmUiLCJ3ZWJGb250IiwiTG9hZGVyIiwic3JjIiwiZ2V0SlNPTiIsImRhdGEiLCJudGgiLCJJbWFnZSIsImFkZDAiLCJvbmxvYWQiLCJpbWdOdW0iLCJlbG0iLCJpc0xvYWQiLCJ2aWRlbyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwic3VwcG9ydFZpZGVvRXh0IiwicGxheSIsInRhZyIsImZpcnN0U2NyaXB0VGFnIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwib25Zb3VUdWJlSWZyYW1lUmVhZHkiLCJleHQiLCJjYW5QbGF5VHlwZSIsIndmIiwiYXN5bmMiLCJhZ2FpbiIsIldlYkZvbnQiLCJvbkxvYWRlZCIsIlNlYzAxVmlkZW8iLCJZb3V0dWJlRm9yU2VjMDEiLCJpZCIsInZpZGVvSUQiLCJ2aWRlb0xpc3QiLCJwbGF5ZXIiLCJpc0ZpcnN0IiwiaXNTZWVrTG9jayIsImlzU2Vla0xvY2swMiIsIllUIiwiUGxheWVyIiwidmlkZW9JZCIsImV2ZW50cyIsIm9uUGxheWVyU3RhdGVDaGFuZ2UiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJjb250cm9scyIsInNob3dpbmZvIiwiYXV0b2hpZGUiLCJyZWwiLCJlbmFibGVqc2FwaSIsIml2X2xvYWRfcG9saWN5IiwiZGlzYWJsZWtiIiwibW9kZXN0YnJhbmRpbmciLCJ0YXJnZXREZWZXIiwidGFyZ2V0RGVmSCIsInJ1biIsInNldFBsYXliYWNrUXVhbGl0eSIsInRpbWUiLCJzZWMwMVZpZGVvIiwicGxheUJ5TllUaW1lIiwic3RhdHVzIiwiUGxheWVyU3RhdGUiLCJFTkRFRCIsInBsYXlWaWRlbyIsIlBMQVlJTkciLCJDVUVEIiwiaXNTYWZhcmkiLCJCVUZGRVJJTkciLCJzZWVrVG8iLCJnZXRDdXJyZW50VGltZSIsIm55SCIsIm9uU2VlayIsIkZ1bGxTaXplIiwiJFdyYXAiLCIkVGFyZ2V0IiwiJHdyYXAiLCJ0YXJnZXRXIiwidGFyZ2V0SCIsInJhdGlvVyIsInJhdGlvIiwibWwiLCJtdCIsImdldCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0RGVmIiwic2V0U3R5bGUiLCJnZXRTaXplIiwic2V0UG9zIiwiVG9wVGltZSIsIiRoMDEiLCJmaW5kIiwiJGgwMiIsIiRtMDEiLCIkbTAyIiwiaXNBbGVydCIsImRpcyIsInRsIiwiVGltZWxpbmVNYXgiLCJyZXBlYXQiLCJzZXQiLCJQb3dlcjIiLCJKdWRnZUVudmlyb25tZW50IiwiaXNEZXZpY2VTUCIsImlzRGV2aWNlVEFCIiwiaXNEZXZpY2VNQiIsImlzRGV2aWNlUEMiLCJpc0lFVmVyc2lvbiIsImlzRGlyZWN0aW9uIiwiaXNSZXNwb25zaXZlIiwiUmVzcG9uc2l2ZVN3aXRjaEltZyIsImlzUENMb2NrIiwiaXNTUExvY2siLCJpbmRleCIsImVsIiwic3RyUmVwbGFjZSIsImhhc0NsYXNzIiwic2V0SW1nU1BTaXplIiwibm90IiwiU3dpcGVUcmFuc2l0aW9uIiwiJHN0YXJ0V3JhcCIsIiRlbmRXcmFwIiwicGFnZUxpc3QiLCJvbGQiLCJuZXh0IiwicHJldiIsInNYIiwibVgiLCJlWCIsIm1pbkRpcyIsInNUIiwiZVQiLCJtaW5UIiwib25Ub3VjaExvbmciLCJvblRvdWNoU3RhcnRDQiIsIm9uVG91Y2hFbmRDQiIsInNZIiwibVkiLCJlWSIsImFic0RpcyIsImFicyIsInBqYXgiLCJzaXplIiwicmF0ZSIsImNhbGN1bGF0ZU9yZGVyIiwicGFnZU5hbWUiLCJmaWx0ZXIiLCJpc05vdFRvdWNoIiwiZGlyIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIlNjcm9sbFRyYW5zaXRpb24iLCJpc1N3aXRjaCIsImlzUGpheExvY2siLCJtZW51IiwiaXNPcGVuIiwic3dpdGNoIiwiU25zIiwiJGZiIiwiJHR3IiwiJGxpbmUiLCIkbWFpbCIsImZiIiwidGl0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaHRtbCIsImRlcyIsInR3IiwibGluZSIsImQiLCJkZXNjcmlwdGlvbiIsImtleXdvcmQiLCJvcGVuV2luZG93IiwiYWRkcmVzcyIsInN1YiIsImJvZHkiLCJzY3JlZW4iLCJvcGVuIiwianVtcEZCIiwianVtcFRXIiwianVtcExJTkUiLCJvblNlbmRNYWlsIiwicG9zaXRpb24iLCJTaXplIiwiU2NhbGUiLCJTUEJhc2VXIiwiUENCYXNlVyIsIiR0YXJnZXRMaXN0IiwiaVciLCJ3cmFwIiwiUG9zaXRpb24iLCJzZXRDZW50ZXIiLCJNYWluIiwicGFnZSIsIkRpc3BsYXlUb3AiLCJzY2FsZVRvcCIsInNsaWRlclRvcCIsInNuc1NQSG92ZXJFZiIsImh0IiwiYXV0b0Fycm93IiwiRWZmZWN0cyIsImdsIiwiZG9tIiwic3RhdGUiLCJkZWJ1ZyIsIkNWQ29udGVudHMiLCJ0aW1lbGluZSIsImNhbnZhcyIsInRsTWFpbiIsInBhdXNlIiwiQ1ZDb250ZW50c0xvb3AiLCJpc0Fsd2F5cyIsImlzUnVuU3RhdHVzIiwiaXNBZGp1c3RQYXJhbSIsInNvbWV0aW1lc1N0YXRlIiwibG9vcExpc3QiLCJsb29wU3RhcnQiLCJydW5BbHdheXMiLCJydW5TdGF0dXMiLCJydW5BZGp1c3RQYXJhbSIsImRyYXciLCJDVkNvbnRlbnRzVGltZWxpbmUiLCJiZWdpbm5pbmciLCJzdGVwMDEiLCJzdGVwMDIiLCJzdGVwMDMiLCJzdGFuZEJ5Iiwic29tZXRpbWVzIiwiQ3JlYXRlQ2FudmFzIiwiYyIsImN3IiwiY2giLCJmaWxsU3R5bGUiLCJpc1Jlc2l6ZSIsInNldENhbnZhc1NpemUiLCJhcHBlbmQiLCJ2eCIsIm9mZnNldEZyYW1lIiwib2Zmc2V0VngiLCJ4TnVtIiwieU51bSIsInRpbGVMaXN0IiwidGlsZSIsImN0eCIsImZpbGxSZWN0IiwiYWRkT2JqZWN0cyIsImNudFN0b3AiLCJTZWMwMkJnIiwiQ2FudmFzIiwiZ2V0Q29udGV4dCIsIlBsYW5lIiwic3Ryb2tlU3R5bGUiLCJvcCIsImNyZWF0ZSIsImZyYW1lU3RhcnQiLCJpbWdMaXN0IiwiZHJhd0ltYWdlIiwiR2xDb250ZW50cyIsInJlbmRlcmVyIiwiY2FtZXJhIiwic2NlbmUiLCJsaWdodCIsImFkanVzdFBhcmFtIiwic3RhdGVMaW5lUm90YXRlIiwiaXNDb250cm9sIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiZG9tRWxlbWVudCIsIlNjZW5lIiwiQ2FtZXJhIiwiRGlyZWN0aW9uYWxMaWdodCIsInoiLCJzZWN0aW9uMDRQcm9kdWN0U2hhZGVyIiwicGxhbmUiLCJUcmFja2JhbGxDb250cm9scyIsInpvb21TcGVlZCIsInJvdGF0ZVNwZWVkIiwiUHJvZmlsZXIiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiY3VyIiwib25DaGFuZ2VGdW5jTGlzdCIsIm9uU2VjdGlvbjA0IiwiR2xDb250ZW50c0xvb3AiLCJTZWN0aW9uMDRQcm9kdWN0IiwidXBkYXRlQ29udHJvbGwiLCJyZW5kZXIiLCJHbENvbnRlbnRzVGltZWxpbmUiLCJ1bmlmb3JtcyIsInN0cmVuZ3RoIiwiRXhwbyIsIm9uU3RhcnQiLCJlYXNlSW4iLCJlYXNlT3V0IiwiZnJvbSIsInBsYW5lMDIiLCJtYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwidnMiLCJmcmFnbWVudFNoYWRlciIsImZzIiwidHJhbnNwYXJlbnQiLCJwcm9ncmVzcyIsIm9uUmVzaXpzZSIsIlNvbWVUaW1lcyIsImNiTGlzdCIsIm9yZGVyIiwibGF0ZXIiLCJnZW9tZXRyeSIsImRlZldXIiwiZGVmSEgiLCJyYXRlVyIsImxiIiwiaW1hZ2UiLCJQbGFuZUdlb21ldHJ5IiwiTWVzaCIsInRleHR1cmUwMSIsIlBhcmFtIiwiZ3VpIiwianNvbiIsImlzRmxhZyIsImNsb2NrIiwiem9vbWJsdXIiLCJ0cmFuc2l0aW9uIiwiem9vbSIsImNvbG9yU2VwYXJhdGlvbiIsInR3ZWVuIiwiUG93ZXI0Iiwic2V0dXBEYXRhIiwiZGF0IiwiR1VJIiwicmVtZW1iZXIiLCJ6SW5kZXgiLCJmMSIsImFkZEZvbGRlciIsInN0ZXAiLCJsaXN0ZW4iLCJvbkNoYW5nZSIsIm5GcmFnIiwiU3RhdHMiLCJzdHlsZSIsImFwcGVuZENoaWxkIiwiSG92ZXJFZmZlY3RTTlNTUEZvb3RlciIsIiRpbm5lciIsIiRsaXN0IiwiJGl0ZW0iLCJzaG93IiwiY2xvc2UiLCJ0b2dnbGVDbGFzcyIsInRoYXQiLCJraWxsVHdlZW5zT2YiLCIkYm94IiwicmVhZHkiLCJlcSIsImhpZGUiLCJ0b2dnbGUiLCJIb3ZlckVmZmVjdFNWR0Fycm93VG9wIiwiaXNIb3ZlciIsImF1dG9UTCIsImtpbGwiLCJ0bDAyIiwidGwwMSIsInNjYWxlWSIsImRlbGF5Iiwib25FbnRlciIsIm9uTGVhdmUiLCJXZWJHTGluaXQiLCJ3ZWJnbEluaXQiLCJfd2ViZ2xJbml0IiwiY3JlYXRlX3NoYWRlciIsIl9jcmVhdGVfc2hhZGVyIiwiY3JlYXRlX3Byb2dyYW0iLCJfY3JlYXRlX3Byb2dyYW0iLCJjcmVhdGVfdmJvIiwiX2NyZWF0ZV92Ym8iLCJnZXRFbGVtZW50QnlJZCIsImNsZWFyQ29sb3IiLCJjbGVhckRlcHRoIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwiREVQVEhfQlVGRkVSX0JJVCIsInZfc2hhZGVyIiwiZl9zaGFkZXIiLCJwcmciLCJhdHRMb2NhdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwiYXR0U3RyaWRlIiwidmVydGV4X3Bvc2l0aW9uIiwidmJvIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwibWF0SVYiLCJtTWF0cml4IiwiaWRlbnRpdHkiLCJ2TWF0cml4IiwicE1hdHJpeCIsIm12cE1hdHJpeCIsImxvb2tBdCIsInBlcnNwZWN0aXZlIiwibXVsdGlwbHkiLCJ1bmlMb2NhdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInVuaWZvcm1NYXRyaXg0ZnYiLCJkcmF3QXJyYXlzIiwiVFJJQU5HTEVTIiwiZmx1c2giLCJzY3JpcHRFbGVtZW50IiwiY3JlYXRlU2hhZGVyIiwiVkVSVEVYX1NIQURFUiIsIkZSQUdNRU5UX1NIQURFUiIsInNoYWRlclNvdXJjZSIsImNvbXBpbGVTaGFkZXIiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJDT01QSUxFX1NUQVRVUyIsImdldFNoYWRlckluZm9Mb2ciLCJwcm9ncmFtIiwiY3JlYXRlUHJvZ3JhbSIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwidXNlUHJvZ3JhbSIsImdldFByb2dyYW1JbmZvTG9nIiwiY3JlYXRlQnVmZmVyIiwiYnVmZmVyRGF0YSIsIkZsb2F0MzJBcnJheSIsIlNUQVRJQ19EUkFXIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDOUJBOzs7O0FBQ0E7Ozs7OztBQVRBOzs7Ozs7OztBQVdBLEVBQUMsWUFBSTs7QUFFSDtBQUNBLE9BQUlBLE9BQU9DLEVBQVAsS0FBWUMsU0FBaEIsRUFBMkJGLE9BQU9DLEVBQVAsR0FBWSxFQUFaO0FBQzNCRCxVQUFPQyxFQUFQLENBQVVFLEVBQVYsR0FBZSxFQUFmLENBSkcsQ0FJZ0I7O0FBRW5CRixNQUFHRSxFQUFILENBQU1DLE1BQU4sR0FBZSxzQkFBZjtBQUNBSCxNQUFHRSxFQUFILENBQU1FLElBQU4sR0FBYSxvQkFBYjtBQUVELEVBVEQsSTs7Ozs7Ozs7Ozs7O3NqQkNYQTs7Ozs7Ozs7QUFtQkE7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBekJBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQU9BOzs7O0FBR0E7Ozs7QUFJQTs7Ozs7Ozs7QUFFQTs7S0FFcUJDLE07QUFFbkIscUJBQWM7QUFBQTs7QUFFWixVQUFLQyxXQUFMO0FBQ0EsVUFBS0MsU0FBTDtBQUVEOzs7O21DQUVhOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVAsVUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBRUE7QUFDQSxXQUFPRixHQUFQO0FBQ0E7OzsrQkFPWTs7QUFFVnZ1QixNQUFFekIsTUFBRixFQUFVOEIsRUFBVixDQUFhLE1BQWIsRUFBcUIsS0FBS0csTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQXJCO0FBRUQ7Ozt5QkFUWSxDQUdaOzs7Ozs7bUJBak5rQjBzQixTOzs7Ozs7QUNOckIsMkNBQTBDLDRDQUE0QyxxQkFBcUIsMENBQTBDLG1DQUFtQywwQ0FBMEMsR0FBRyw0Q0FBNEMsNkJBQTZCLEdBQUcscUJBQXFCLCtDQUErQyx1QkFBdUIsc0JBQXNCLGlCQUFpQixLQUFLLE9BQU8saUJBQWlCLEtBQUssc0NBQXNDLEdBQUcsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2QxMDMyOTFmOWUzNmRmZTNkNTciLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBUb3BcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IENvbW1vbiBmcm9tICcuL1BhZ2UvQ29tbW9uLmpzJztcbmltcG9ydCBNYWluIGZyb20gJy4vUGFnZS9NYWluLmpzJztcblxuKCgpPT57XG5cbiAgLy8gZ2xvYmFs44Kq44OW44K444Kn44Kv44OIXG4gIGlmICh3aW5kb3cuZ2I9PT11bmRlZmluZWQpIHdpbmRvdy5nYiA9IHt9O1xuICB3aW5kb3cuZ2IuaW4gPSB7fTsgLy9pbnN0YW5jZVxuXG4gIGdiLmluLmNvbW1vbiA9IG5ldyBDb21tb24oKTtcbiAgZ2IuaW4ubWFpbiA9IG5ldyBNYWluKCk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb25mIGZyb20gJy4uL0NvbmYuanMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vTXlMaWJzL1V0aWwuanMnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vTXlMaWJzL0Z1bmMuanMnO1xuXG5pbXBvcnQgUmVhZHlNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzJztcbmltcG9ydCBVcGRhdGVNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyc7XG5pbXBvcnQgUmVzaXplTWdyIGZyb20gJy4uL015TGlicy9FdmVudE1nci9SZXNpemVNZ3IuanMnO1xuaW1wb3J0IFNjcm9sbE1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvU2Nyb2xsTWdyLmpzJztcbmltcG9ydCBNb3VzZU1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvTW91c2VNZ3IuanMnO1xuaW1wb3J0IExvYWRNZ3IgZnJvbSAnLi4vRnVuYy9Mb2FkTWdyLmpzJztcblxuLy8gaW1wb3J0IFBqYXggZnJvbSAnLi4vRnVuYy9QamF4LmpzJztcbmltcG9ydCBKdWRnZUVudmlyb25tZW50IGZyb20gJy4uL0Z1bmMvSnVkZ2VFbnZpcm9ubWVudC5qcyc7XG5pbXBvcnQgUmVzcG9uc2l2ZVN3aXRjaEltZyBmcm9tICcuLi9GdW5jL19ldmVudHMvUmVzcG9uc2l2ZVN3aXRjaEltZy5qcyc7XG5pbXBvcnQgU3dpcGVUcmFuc2l0aW9uIGZyb20gJy4uL0Z1bmMvU3dpcGVUcmFuc2l0aW9uLmpzJztcblxuLy8gaW1wb3J0IE1lbnUgZnJvbSAnLi4vRGlzcGxheS9VSS9fY29tcG9ybmVudHMvTWVudS5qcyc7XG4vLyBpbXBvcnQgTmF2IGZyb20gJy4uL0Rpc3BsYXkvVUkvTmF2LmpzJztcbi8vIGltcG9ydCBBbGVydCBmcm9tICcuLi9EaXNwbGF5L1VJL0FsZXJ0LmpzJztcbi8vIGltcG9ydCBTaWRlUiBmcm9tICcuLi9EaXNwbGF5L1VJL1NpZGVSLmpzJztcbi8vIGltcG9ydCBUaW1lIGZyb20gJy4uL0Z1bmMvVGltZS5qcyc7XG5pbXBvcnQgU2Nyb2xsVHJhbnNpdGlvbiBmcm9tICcuLi9GdW5jL1Njcm9sbFRyYW5zaXRpb24uanMnO1xuLy8gaW1wb3J0IFBhZ2VUb3AgZnJvbSAnLi4vRGlzcGxheS9VSS9fcGFydHMvUGFnZVRvcC5qcyc7XG4vLyBpbXBvcnQgU2VjMDFWaWRlbyBmcm9tICcuLi9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMnO1xuaW1wb3J0IFNucyBmcm9tICcuLi9GdW5jL1Nucy5qcyc7XG4vLyBpbXBvcnQgU2xpZGVyVG9wIGZyb20gJy4uL0Rpc3BsYXkvVUkvU2xpZGVyVG9wLmpzJztcblxuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0Rpc3BsYXkvTGF5b3V0L0xheW91dC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDliJ3mnJ/lgKTjga7oqK3lrprjg7vjg4fjg7zjgr/jga7phY3nva5cbiAgICAvLyAgdXRpbOmWouaVsOOBruWIneacn+WMllxuICAgIC8vICDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcbiAgICBnYi5pbi51cCA9IG5ldyBVcGRhdGVNZ3IoKTtcbiAgICBnYi5pbi5yID0gbmV3IFJlc2l6ZU1ncigpOyAgICBcbiAgICBnYi5pbi5zID0gbmV3IFNjcm9sbE1ncigpO1xuICAgIGdiLmluLm0gPSBuZXcgTW91c2VNZ3IoKTtcbiAgICBnYi5pbi5ybSA9IG5ldyBSZWFkeU1ncigpO1xuICAgIGdiLmluLmxvYWRNZ3IgPSBuZXcgTG9hZE1ncigpO1xuICAgIGdiLmluLnNjdCA9IG5ldyBTY3JvbGxUcmFuc2l0aW9uKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICDjgZ3jga7ku5ZcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHBqYXjjga7oqK3lrppcbiAgICAvLyBnYi5pbi5wamF4ID0gbmV3IFBqYXgoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBMYXlvdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnYi5pbi5MYXlvdXQgPSBuZXcgTGF5b3V0KCk7XG5cblxuICAgIC8vIOa6luWCmeWujOS6huW+jOOBruWHpueQhlxuICAgIGdiLmluLnJtLm9uQ29tcGxldGVkRnVuYyA9ICgpPT57bmV3IERpc3BsYXlPcGVuaW5nKCk7fVxuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODh+ODkOOCpOOCueODu+ODluODqeOCpuOCtuWIpOWumlxuICAgIC8vICDjgrnjg57jg5vjga7lkJHjgY3liKTlrppcbiAgICAvLyAg44Oa44O844K45oOF5aCx5Y+W5b6XXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZ2IuaW4uamUgPSBuZXcgSnVkZ2VFbnZpcm9ubWVudCgpO1xuICAgIGdiLmluLnJlc0ltZyA9IG5ldyBSZXNwb25zaXZlU3dpdGNoSW1nKCk7XG4gICAgZ2IuaW4uc25zID0gbmV3IFNucygkKCcuZmJTaGFyZScpLCQoJy50d1NoYXJlJyksJCgnLmxpbmVTaGFyZScpLCQoJy5vbk1haWwnKSlcbiAgICBnYi5pbi5zd3QgPSBuZXcgU3dpcGVUcmFuc2l0aW9uKCk7XG5cbiAgICBnYi5pbi5mLmNoZWNrQ3NzQmxlbmQoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBVSVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIGdiLmluLm1lbnUgPSBuZXcgTWVudSgpO1xuICAgIC8vIGdiLmluLm5hdiA9IG5ldyBOYXYoKTtcbiAgICAvLyBnYi5pbi5zaWRlUiA9IG5ldyBTaWRlUigpO1xuICAgIC8vIGdiLmluLmFsZXJ0ID0gbmV3IEFsZXJ0KCk7XG4gICAgLy8gZ2IuaW4ucGFnZXRvcCA9IG5ldyBQYWdlVG9wKCk7XG5cbiAgICAvLyBiZ1xuICAgIC8vIGdiLmluLnNsaWRlclRvcCA9IG5ldyBTbGlkZXJUb3AoJCgnI2JnV3JhcCAuc2VjMDEnKSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgRWZmZWN0c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIGdiLmluLnBhZ2VUcmFuc2l0aW9uRWZmZWN0ID0gbmV3IFBhZ2VUcmFuc2l0aW9uRWZmZWN0KCQoJyNwYWdlVHJhbnNpdGlvbkxheWVyJykpO1xuICAgIC8vIGdiLmluLnNlYzAxVmlkZW8gPSBuZXcgU2VjMDFWaWRlbygpO1xuICAgIC8vIGdiLmluLlNlYzAyQmcgPSBuZXcgU2VjdGlvbjAyQmcoKTtcblxuICAgIC8vIGdiLmluLmhlMDEgPSBuZXcgSG92ZXJFZmZlY3RTVkcoJCgnLlNWR0hvdmVyJyksJyNmZmYnLCcjMDAwJyk7XG4gICAgLy8gZ2IuaW4uaGUwMiA9IG5ldyBIb3ZlckVmZmVjdFNWRygkKCcuU1ZHSG92ZXJXJyksJyM4MWQ4ZDAnLCcjZmZmJyk7XG4gICAgLy8gZ2IuaW4uaGUwMyA9IG5ldyBIb3ZlckVmZmVjdFNWRygkKCcuU1ZHSG92ZXJXMDInKSwnIzgxZDhkMCcsJyMwMDAnKTtcbiAgICAvLyBnYi5pbi5oZTA0ID0gbmV3IEhvdmVyRWZmZWN0U1ZHTG9nbygkKCcjaGVhZGVyIC5sb2dvLCAjaGVhZGVyIC5zdWJUaXQnKSk7XG4gICAgLy8gZ2IuaW4uaGUwNSA9IG5ldyBIb3ZlckVmZmVjdE1lbnVJdGVtKCQoJyNtZW51IC5tZW51TGlzdCAuaXRlbScpKTtcbiAgICAvLyBnYi5pbi5oZTA2ID0gbmV3IEhvdmVyRWZmZWN0U1ZHQXJyb3dTaWRlUigkKCcjc2lkZVIgLm5leHQnKSk7XG4gICAgLy8gZ2IuaW4uaGUwNyA9IG5ldyBIb3ZlckVmZmVjdE1lbnVCdG4oJCgnLm1lbnVCdG4wMScpKTtcbiAgICAvLyBnYi5pbi5oZTA4ID0gbmV3IEhvdmVyRWZmZWN0U05TUENGb290ZXIoJCgnI3NpZGVMIC5zbnMuc3AnKSk7XG5cbiAgICAvLyBsb2dvIOWHuuOBmVxuICAgIC8vIFR3ZWVuTWF4LnRvKCQoJyNoZWFkZXIgLmxvZ28nKSwgMi4yLCB7b3BhY2l0eTogMSwgZWFzZTogUG93ZXIyLmVhc2VJbk91dH0pXG5cbiAgICBnYi5pbi5sb2FkTWdyLnN0YXJ0KCk7XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIEZ1bmNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBMYXlvdXRcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgRGlzcGFseVxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBNb3Rpb25cbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9Db21tb24uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb25mXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBTb3VuZERhdGEgZnJvbSAnLi9EYXRhL1NvdW5kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5pys55Wq44OV44Op44KwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICAgIHRoaXMuUkVMRUFTRSA9IHRydWU7XG4gICAgLy8gdGhpcy5SRUxFQVNFID0gZmFsc2U7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OV44Op44Kw6Zai6YCjXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5GTEcgPSB7XG4gICAgICBMT0c6dHJ1ZSwgIC8vIOODreOCsOWHuuWKm1xuICAgICAgUEFSQU06dHJ1ZSwgLy8g44OR44Op44Oh44O844K/44OB44Kn44OD44KvXG4gICAgICBTVEFUUzp0cnVlICAvLyBTdGF0c+ihqOekulxuICAgIH07XG4gICAgaWYgKCF0aGlzLlJFTEVBU0UpIHtcbiAgICAgIHRoaXMuRkxHID0ge1xuICAgICAgICBMT0c6ZmFsc2UsXG4gICAgICAgIFBBUkFNOmZhbHNlLFxuICAgICAgICBTVEFUUzpmYWxzZSBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOWfuuacrCB3aWR0aCBoZWlnaHRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmRlZlcgPSAxMzAwO1xuICAgIHRoaXMuZGVmSCA9IDg1MDtcblxuICAgIHRoaXMuVyA9IDEyMDA7XG4gICAgdGhpcy5IID0gNzUwO1xuXG4gICAgdGhpcy5zcFcgPSAzNzU7XG4gICAgdGhpcy5zcEggPSA2Njc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OW44Os44Kk44Kv44Od44Kk44Oz44OIXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5icCA9IDc2ODtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBtb2RlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLmtleXMgPSBbXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdtb3ZpZScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydtb3JuaW5nJywnYWZ0ZXJub29uJywnbmlnaHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdkYXRhJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ2RhdGEwMScsJ2RhdGEwMicsJ2RhdGEwMyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ3Byb2R1Y3QnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnMDEnXSxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMuc3dpdGNoTW9kZSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNvdW5kIGRhdGFcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNvdW5kRGF0YSA9IG5ldyBTb3VuZERhdGEoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzZWMwMiBiZyBJbWcgTnVtXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZWMwMkltZ051bSA9IDM5NjtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB5b3V0dWJlIElEXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy55b3V0dWJlSUQwMSA9ICd4VzJvTnBOcktkMCc7XG4gICAgdGhpcy55b3V0dWJlSUQwMiA9ICd0MldlUlJkQUZlSSc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgd2ViIGZvbnQgbG9hZGVkXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy53ZWJGb250TG9hZGVkID0gZmFsc2U7XG5cbiAgfVxuXG5cbiAgc3dpdGNoTW9kZSgpe1xuXG4gICAgdmFyIGksIGtleSwgbGVuLCBwYXJhbSwgcmVmLCByZWYxLCB2YWx1ZTtcblxuICAgIHJlZiA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHBhcmFtID0gcmVmW2ldO1xuICAgICAgcmVmMSA9IHBhcmFtLnNwbGl0KCc9JyksIGtleSA9IHJlZjFbMF0sIHZhbHVlID0gcmVmMVsxXTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmtleXMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICB2YXIgb2JqID0gdGhpcy5rZXlzW2pdO1xuXG4gICAgICAgIC8vIOODkeODqeODoeODvOOCv+OBjOOCreODvOOBqOS4gOe3kuOBoOOBo+OBn+OCiVxuICAgICAgICBpZiAob2JqLmtleSA9PT0ga2V5KSB7XG5cbiAgICAgICAgICAvLyDlkITlgKTjgajmr5TovINcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IG9iai52YWx1ZS5sZW5ndGg7IGsrKykge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqLnZhbHVlW2tdO1xuXG4gICAgICAgICAgICAvLyDjgq3jg7zjgpJ0aGlzLmtleXPjga5rZXnjgavjgIF2YWx1ZeOCkuavlOi8g+OBl+OBpuWQjOWApOOBoOOBo+OBn+OCguOBruOBq1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gdmFsdWUpIHRoaXNbb2JqLmtleV0gPSB2YWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9O1xuXG5cbiAgICAgICAgfTtcblxuICAgICAgICBcbiAgICAgIH07XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29uZi5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBEYXRhXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kRGF0YSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyB0aGlzLkFUQVJJMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvYXRhcmkvQXRhcmlfMDQud2F2JztcbiAgICAvLyB0aGlzLkFUQVJJMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvYXRhcmkvQXRhcmlfMDUud2F2JztcblxuICAgIC8vIHRoaXMuQkFOMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDEud2F2JztcbiAgICAvLyB0aGlzLkJBTjAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CYS1uXzAyLndhdic7XG4gICAgLy8gdGhpcy5CQU4wMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmEtbl8wMy53YXYnO1xuICAgIC8vIHRoaXMuQkFOMDQgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDQud2F2JztcblxuICAgIC8vIHRoaXMuRE9OMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JpZ19Eb25fMDEud2F2JztcbiAgICAvLyB0aGlzLkRPTjAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CaWdfRG9uXzAyLndhdic7XG4gICAgLy8gdGhpcy5ET04wMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmlnX0Rvbl8wMy53YXYnO1xuICAgIC8vIHRoaXMuRE9OMDQgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0Rvbl8wNC53YXYnO1xuXG4gICAgLy8gdGhpcy5ET0ROMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0RvZG9uXzAxLndhdic7XG4gICAgLy8gdGhpcy5ET0ROMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0RvZG9uXzAyLndhdic7XG5cbiAgICAvLyB0aGlzLkdvZ29nbzAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Hb2dvZ29fMDEud2F2JztcbiAgICAvLyB0aGlzLkdvZ29nbzAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Hb2dvZ29fMDIud2F2JztcblxuICAgIC8vIHRoaXMuSUtBUkkgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvaWthcmkvSWthcmlfMDEud2F2JztcblxuICAgIC8vIHRoaXMuUk9VTEVUVEUwMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMS53YXYnO1xuICAgIC8vIHRoaXMuUk9VTEVUVEUwMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMi53YXYnO1xuICAgIC8vIHRoaXMuUk9VTEVUVEUwMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMy53YXYnO1xuXG4gICAgLy8gdGhpcy5TRUEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvc2VhL1NlYSZrYW1vbWVfMDEud2F2JztcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EYXRhL1NvdW5kLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVXRpbFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMudWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpOyAvL3VzZXJhZ2VudFxuICAgIHRoaXMuYXBwViA9IHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpOyAvL2FwcFZlcnNpb25cbiAgICB0aGlzLmlzUmVzU1AgPSBudWxsOyAvLyByZXNwb25zaXZlIHNwXG4gICAgdGhpcy5pc1Jlc1BDID0gbnVsbDsgLy8gcmVzcG9uc2l2ZSBwY1xuXG4gICAgdGhpcy5pc1BDID0gbnVsbDtcbiAgICB0aGlzLmlzU1AgPSBudWxsO1xuICAgIHRoaXMuaXNUQUIgPSBudWxsO1xuICAgIHRoaXMuaXNNQiA9IG51bGw7XG5cbiAgICB0aGlzLmlzSUUgPSBudWxsO1xuXG4gICAgdGhpcy5pc1NldFNQU2l6ZSA9IGZhbHNlO1xuXG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IG51bGw7XG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE1hdGhcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgXG4gIC8vIOODqeODs+ODgOODoOOBquaVtOaVsOOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbWluIDog5pyA5bCP5YCkKGludClcbiAgLy8gQG1heCA6IOacgOWkp+WApChpbnQpXG4gIC8vIHJldHVybiA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmRvbShtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoKG1heCArIDEpIC0gbWluKSArIG1pbikpO1xuXG4gIH1cbiAgICAgIFxuICAvLyDjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpIy44Gk44Gu56+E5Zuy44GL44KJ5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBtaW4xIDog5pyA5bCP5YCkMShpbnQpXG4gIC8vIEBtYXgxIDog5pyA5aSn5YCkMShpbnQpXG4gIC8vIEBtaW4yIDog5pyA5bCP5YCkMihpbnQpXG4gIC8vIEBtYXgyIDog5pyA5aSn5YCkMihpbnQpXG4gIC8vIHJldHVybiA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmRvbTIobWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICAgIFxuICAgIGlmICh0aGlzLmhpdCgyKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjEsIG1heDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMiwgbWF4Mik7XG4gICAgfVxuXG4gIH1cbiAgICAgIFxuICAvLyAxL0ByYW5nZeOBrueiuueOh+OBp3RydWXjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHJhbmdlIDog5q+N5pWwKGludClcbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoaXQocmFuZ2UpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgwLCByYW5nZSAtIDEpID09PSAwO1xuXG4gIH1cbiAgXG4gIC8vIDDjgYvjgonnr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCA6IOevhOWbsihpbnQpXG4gIC8vIHJldHVybiA6IOODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmdlKHZhbCkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKC12YWwsIHZhbCk7XG5cbiAgfVxuICBcbiAgLy8g5YCk44KS44Oe44OD44OU44Oz44KwXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDjg57jg4Pjg5Tjg7PjgrDjgZnjgovlgKQoTnVtYmVyKVxuICAvLyBAcmVzTWluIDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQHJlc01heCA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWluIDog5YWD44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNYXggOiDlhYPjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyByZXR1cm4gOiDjg57jg4Pjg5Tjg7PjgrDjgZXjgozjgZ/lgKQoTnVtYmVyKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBtYXAobnVtLCByZXNNaW4sIHJlc01heCwgYmFzZU1pbiwgYmFzZU1heCkge1xuXG4gICAgdmFyIHA7XG4gICAgaWYgKG51bSA8IGJhc2VNaW4pIHtcbiAgICAgIHJldHVybiByZXNNaW47XG4gICAgfVxuICAgIGlmIChudW0gPiBiYXNlTWF4KSB7XG4gICAgICByZXR1cm4gcmVzTWF4O1xuICAgIH1cbiAgICBwID0gKHJlc01heCAtIHJlc01pbikgLyAoYmFzZU1heCAtIGJhc2VNaW4pO1xuXG4gICAgcmV0dXJuICgobnVtIC0gYmFzZU1pbikgKiBwKSArIHJlc01pbjtcblxuICB9ICAgIFxuICBcbiAgLy8g5pWw5YCk44Gr5bCP5pWw54K556ysQG7kvY3jgb7jgafjgpLjgaTjgZHjgZ/mloflrZfliJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOWApChOdW1iZXIpXG4gIC8vIEBuIDog5bCP5pWw54K544Gu5L2NKGludClcbiAgLy8gcmV0dXJuIDog5aSJ5o+b44GV44KM44Gf5YCkKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGVjaW1hbChudW0sIG4pIHtcbiAgICB2YXIgaSwgcG9zO1xuICAgIG51bSA9IFN0cmluZyhudW0pO1xuICAgIHBvcyA9IG51bS5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bS5zcGxpdChcIi5cIilbMF07XG4gICAgfVxuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBudW0gKz0gXCIuXCI7XG4gICAgICBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgICBudW0gKz0gXCIwXCI7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuICAgIG51bSA9IG51bS5zdWJzdHIoMCwgcG9zKSArIG51bS5zdWJzdHIocG9zLCBuICsgMSk7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIGNsYW1wKG51bWVyYXRvcixkZW5vbWluYXRvcix2YWwpIHtcblxuICAgIHJldHVybiB2YWwgKiAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuXG4gIH1cblxuICBkZWdyZWUocmFkaWFucykge1xuXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJOyAvLzHjg6njgrjjgqLjg7PjgYzkvZXluqbjgYtcblxuICB9XG5cbiAgLy8gdG8gcmFkaWFuc1xuICByYWRpYW4oYW5nbGUpIHsgXG5cbiAgICByZXR1cm4gYW5nbGUgKiBNYXRoLlBJIC8gMTgwOyAvLzHluqbkvZXjg6njgrjjgqLjg7PjgYtcblxuICB9XG5cbiAgZGlzdChwMSwgcDIpIHtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcblxuICB9XG5cbiAgYXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MTAsOSw1LDMsMVxuXG4gIH1cblxuICBkZXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxLDMsNSw5LDEwXG5cbiAgfVxuXG4gIC8vIG1hcCh2YWx1ZSwgbWluMDEsIG1heDAxLCBtaW4wMiwgbWF4MDIpIHtcblxuICAvLyAgIHZhciBkaXMwMSA9IG1heDAxIC0gbWluMDE7XG4gIC8vICAgdmFyIGRpczAyID0gbWF4MDIgLSBtaW4wMlxuXG4gIC8vICAgdmFyIHJhdGUgPSBkaXMwMiAvIGRpczAxO1xuXG4gIC8vICAgdmFsdWUgPSB2YWx1ZSAqIHJhdGU7XG5cbiAgLy8gICByZXR1cm4gdmFsdWU7XG4gIC8vIH1cblxuICBjb25zdHJhaW4odmFsdWUsIG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heCh2YWx1ZSwgbWluKSk7XG5cbiAgICAvLyBpZiAodmFsdWUgPD0gbG93KSB2YWx1ZSA9IGxvdztcbiAgICAvLyBpZiAodmFsdWUgPj0gaGlnaCkgdmFsdWUgPSBoaWdoOyAgICAgXG4gICAgLy8gcmV0dXJuIHZhbHVlO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEFycmF5XG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIOmFjeWIl+WGheOBruODqeODs+ODgOODoOOBquWApOOCkuOBsuOBqOOBpOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAYXJyIDog6YWN5YiXXG4gIC8vIHJldHVybiA6IOmFjeWIl+WGheOBruWApFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhcnJSYW5kKGFycikge1xuXG4gICAgcmV0dXJuIGFyclt0aGlzLnJhbmRvbSgwLCBhcnIubGVuZ3RoIC0gMSldO1xuXG4gIH0gICAgXG4gICAgXG4gIC8vIOmFjeWIl+OCkuODqeODs+ODgOODoOOBq+S4puOBueabv+OBiFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAYXJyIDog6YWN5YiXKEFycmF5KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaHVmZmxlKGFyeSkge1xuXG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGFyciA9IGFyeS5zbGljZSgpO1xuICAgIHZhciBpID0gYXJyLmxlbmd0aDtcbiAgICB3aGlsZShpKXtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmkpO1xuICAgICAgdmFyIHQgPSBhcnJbLS1pXTtcbiAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgIGFycltqXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG4gIC8vIOODqeODs+ODgOODoOOBquaVsOWApOOCkuS9nOOCi1xuICByYW5kb21BcnIgKGxlbikge1xuXG4gICAgdmFyIGFyciA9IG5ldyBBcnJheTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIGFyci5wdXNoKGkpO1xuXG4gICAgYXJyID0gdGhpcy5zaHVmZmxlQXJ5KGFycik7XG5cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxuICAvLyBudWxs44KS5YmK6Zmk44GX44Gf6YWN5YiX44KS6L+U44GZXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJcoQXJyYXkpXG4gIC8vIHJldHVybiA6IG51bGzliYrpmaTjgZfjgZ/phY3liJcoQXJyYXkpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNsaWNlTnVsbChhcnIpIHtcblxuICAgIHZhciBpLCBsLCBsZW4xLCBuZXdBcnIsIHZhbDtcbiAgICBuZXdBcnIgPSBbXTtcbiAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGFyci5sZW5ndGg7IGwgPCBsZW4xOyBpID0gKytsKSB7XG4gICAgICB2YWwgPSBhcnJbaV07XG4gICAgICBpZiAodmFsICE9PSBudWxsKSB7XG4gICAgICAgIG5ld0Fyci5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnI7XG5cbiAgfSAgICBcbiAgXG4gIC8vIOmFjeWIl+WGheOBruODkeODqeODoeODvOOCv+OCkuavlOi8g+OBl+OBpuOCveODvOODiFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAYXJyIDog6YWN5YiXKEFycmF5KVxuICAvLyBAcGFyYSA6IOODkeODqeODoeODvOOCv+ODvOWQjVxuICAvLyBAZGVzYyA6IOmZjemghuOBi+OBqeOBhuOBiyhib29sZWFuKSDjg4fjg5Xjgqnjg6vjg4jjga/mmIfpoIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc29ydChhcnIsIHBhcmEsIGRlc2MpIHtcbiAgICBpZiAoZGVzYyA9PT0gdm9pZCAwKSB7XG4gICAgICBkZXNjID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkZXNjKSB7XG4gICAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYltwYXJhXSAtIGFbcGFyYV07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbcGFyYV0gLSBiW3BhcmFdO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0S2V5KGxpc3QsdmFsdWUpIHtcbiAgICAgIHZhciByZXR1cm5LZXkgPSBbXTtcbiAgICAgIGZvcih2YXIga2V5IGluIGxpc3Qpe1xuICAgICAgICAgIGlmIChsaXN0W2tleV0gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuS2V5LnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuS2V5O1xuICB9XG5cbiAgLy8g44Om44OL44O844KvSUTjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdW5pcXVlKCkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIH1cbiAgXG4gIC8vICoqanF1YXJ55L2/55SoXG4gIC8vIOODnOOCv+ODs+ODouODvOODieWkieabtFxuICAvLyB0cnVl44Gq44KJ44Kr44O844K944Or44GM44Od44Kk44Oz44K/44O844Gu5b2i44GrXG4gIC8vIGZhbHNl44Gq44KJ44OH44OV44Kp44Or44OI44Gu44Kr44O844K944Or44GrXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBmbGcgOiDpgannlKjjgZnjgovjgYvjganjgYbjgYsoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYnV0dG9uTW9kZShmbGcpIHtcblxuICAgIGlmIChmbGcpIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgZGV2aWNlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzRGV2aWNlU1AoKXtcblxuICAgIHZhciBtZWRpYSA9IFtcImlwaG9uZVwiLFwiaXBvZFwiLFwiaXBhZFwiLFwiYW5kcm9pZFwiLFwiZHJlYW1cIixcImN1cGNha2VcIixcImJsYWNrYmVycnk5NTAwXCIsXCJibGFja2JlcnJ5OTUzMFwiLFwiYmxhY2tiZXJyeTk1MjBcIixcImJsYWNrYmVycnk5NTUwXCIsXCJibGFja2JlcnJ5OTgwMFwiLFwid2Vib3NcIixcImluY29nbml0b1wiLFwid2VibWF0ZVwiXTtcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAobWVkaWEuam9pbihcInxcIiksXCJpXCIpO1xuXG4gICAgdmFyIGIgPSBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG4gICAgaWYgKGIpICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VTUCcpO1xuXG4gICAgdGhpcy5pc1NQID0gYjtcblxuICB9XG4gIGlzRGV2aWNlVEFCKCl7XG5cbiAgICB2YXIgYiA9ICh0aGlzLnVhLmluZGV4T2YoXCJ3aW5kb3dzXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcInRvdWNoXCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiaXBhZFwiKSAhPSAtMVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwibW9iaWxlXCIpID09IC0xKVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImZpcmVmb3hcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwidGFibGV0XCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwia2luZGxlXCIpICE9IC0xXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJzaWxrXCIpICE9IC0xXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJwbGF5Ym9va1wiKSAhPSAtMTtcbiAgICBpZiAoYikgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZVRBQicpO1xuXG4gICAgdGhpcy5pc1RBQiA9IGI7XG5cbiAgfVxuXG4gIGlzRGV2aWNlTUIoKXtcblxuICAgIHZhciBiID0gKHRoaXMudWEuaW5kZXhPZihcIndpbmRvd3NcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwicGhvbmVcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJpcGhvbmVcIikgIT0gLTFcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImlwb2RcIikgIT0gLTFcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcIm1vYmlsZVwiKSAhPSAtMSlcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJmaXJlZm94XCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcIm1vYmlsZVwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImJsYWNrYmVycnlcIikgIT0gLTE7XG4gICAgaWYgKGIpICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VNQicpO1xuXG4gICAgdGhpcy5pc01CID0gYjtcblxuICB9XG5cbiAgaXNEZXZpY2VQQygpe1xuXG4gICAgaWYgKCEodGhpcy5pc1NQIHx8IHRoaXMuaXNUQUIgfHwgdGhpcy5pc01CKSkge1xuICAgICAgXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlUEMnKTtcbiAgICAgIHRoaXMuaXNQQyA9IHRydWU7XG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB0aGlzLmlzUEMgPSBmYWxzZTtcblxuICB9XG5cbiAgLy8g44K544Oe44OV44Kp5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNTbXQoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBob25lJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBvZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDA7XG5cbiAgfVxuXG4gIC8vIOOCv+ODluODrOODg+ODiOerr+acq+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzVGFibGV0KCkge1xuXG4gICAgcmV0dXJuIHRoaXMuaXNJcGFkKCkgfHwgKHRoaXMuaXNBbmRyb2lkKCkgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNb2JpbGUnKSA9PT0gLTEpO1xuXG4gIH1cblxuICAvLyBpUGFk5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJcGFkKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMDtcblxuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE9TXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEFuZHJvaWTliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0FuZHJvaWQoKSB7XG5cbiAgICB2YXIgdTtcbiAgICB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICByZXR1cm4gdS5pbmRleE9mKCdCbGFja0JlcnJ5JykgPiAwIHx8IHUuaW5kZXhPZignQW5kcm9pZCcpID4gMCB8fCB1LmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA+IDA7XG5cbiAgfVxuXG4gIGlzaVBob25lKCl7XG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwiaXBob25lXCIsXCJpXCIpO1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG4gIH1cblxuICAvLyBpT1PliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0lvcygpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUG9kJykgPiAwO1xuXG4gIH1cblxuICAvLyBQUzPliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1BzMygpIHtcblxuICAgIHZhciB1O1xuICAgIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHJldHVybiB1LmluZGV4T2YoJ1BMQVlTVEFUSU9OIDMnKSA+IDA7XG5cbiAgfVxuICAgIFxuICAvLyBWSVRB5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNWaXRhKCkge1xuXG4gICAgdmFyIHU7XG4gICAgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgcmV0dXJuIHUuaW5kZXhPZignUGxheVN0YXRpb24gVml0YScpID4gMDtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBicm93c2VyXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJReOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWUoKSB7XG5cbiAgICB2YXIgdWE7XG4gICAgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB1YS5pbmRleE9mKCdtc2llJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ3RyaWRlbnQvNycpICE9PSAtMTtcblxuICB9XG5cbiAgLy8gV0lO44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNXaW4oKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoXCJXaW5cIikgIT09IC0xO1xuXG4gIH1cblxuICAvLyBnb29nbGVDaHJvbWXjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0Nocm9tZSgpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpID4gMDtcblxuICB9ICAgIFxuICBcbiAgLy8gRmlyZUZveOOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRkYoKSB7XG5cbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuXG4gIH1cblxuICBpc1NhZmFyaSgpe1xuXG4gICAgaWYodGhpcy51YS5pbmRleE9mKFwiY2hyb21lXCIpICE9IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgaWYodGhpcy51YS5pbmRleE9mKFwibHVuYXNjYXBlXCIpICE9IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwic2FmYXJpXCIsXCJpXCIpO1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG5cbiAgfVxuXG4gIGlzT3BlcmEoKXtcblxuICAgICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwib3BlcmFcIixcImlcIik7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuXG4gIH1cblxuICAvLyBpT1Pjga5zYWZhcmnku6XlpJbjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0lPU1VpVmlldygpIHtcblxuICAgIHZhciBhO1xuICAgIGEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAodGhpcy5pc0lvcygpICYmIGEuaW5kZXhPZignc2FmYXJpJykgPT09IC0xKSB8fCAodGhpcy5pc0lvcygpICYmIGEuaW5kZXhPZignY3Jpb3MnKSA+IDApIHx8ICh0aGlzLmlzSW9zKCkgJiYgYS5pbmRleE9mKCdnc2EnKSA+IDApO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHZlcnNpb25cbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElFOOS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWU4VW5kZXIoKSB7XG5cbiAgICB2YXIgbXNpZTtcbiAgICBtc2llID0gbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICBtc2llID0gbXNpZS5pbmRleE9mKCdtc2llJykgPiAtMSA/IHBhcnNlSW50KG1zaWUucmVwbGFjZSgvLiptc2llWyBdLywgJycpLm1hdGNoKC9eWzAtOV0rLykpIDogMDtcbiAgICByZXR1cm4gbXNpZSA8PSA4ICYmIG1zaWUgIT09IDA7XG5cbiAgfVxuICAgIFxuICAvLyBJRTnku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llOVVuZGVyKCkge1xuXG4gICAgdmFyIG1zaWU7XG4gICAgbXNpZSA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgbXNpZSA9IG1zaWUuaW5kZXhPZignbXNpZScpID4gLTEgPyBwYXJzZUludChtc2llLnJlcGxhY2UoLy4qbXNpZVsgXS8sICcnKS5tYXRjaCgvXlswLTldKy8pKSA6IDA7XG4gICAgcmV0dXJuIG1zaWUgPD0gOSAmJiBtc2llICE9PSAwO1xuXG4gIH1cblxuICAvLyBJRTEw5Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZTEwVW5kZXIoKSB7XG5cbiAgICB2YXIgbXNpZTtcbiAgICBtc2llID0gbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICBtc2llID0gbXNpZS5pbmRleE9mKCdtc2llJykgPiAtMSA/IHBhcnNlSW50KG1zaWUucmVwbGFjZSgvLiptc2llWyBdLywgJycpLm1hdGNoKC9eWzAtOV0rLykpIDogMDtcbiAgICByZXR1cm4gbXNpZSA8PSAxMCAmJiBtc2llICE9PSAwO1xuXG4gIH1cblxuICAvLyBJRTEx5Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZTExVW5kZXIoKSB7XG5cbiAgICB2YXIgYiA9IHRoaXMuaXNJZTEwVW5kZXIoKSB8fCAodGhpcy51YS5pbmRleE9mKFwidHJpZGVudFwiKSAhPSAtMSk7XG4gICAgcmV0dXJuIGI7XG4gICAgLy8gcmV0dXJuIHRydWU7XG5cbiAgfVxuXG4gIC8vIGVkZ2XjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0VkZ2UoKSB7XG5cbiAgICBsb2codGhpcy51YS5pbmRleE9mKFwiQXBwbGVXZWJraXRcIiksdGhpcy51YS5pbmRleE9mKFwiRWRnZVwiKSx0aGlzLnVhLHRoaXMuYXBwVik7XG4gICAgdmFyIGIgPSAodGhpcy51YS5pbmRleE9mKFwiYXBwbGV3ZWJraXRcIikgPj0gMCAmJiB0aGlzLnVhLmluZGV4T2YoXCJlZGdlXCIpICE9IC0xKTtcbiAgICByZXR1cm4gYjtcbiAgICAvLyByZXR1cm4gdHJ1ZTtcblxuICB9XG5cbiAgaXNJRVZlcnNpb24oKXtcblxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWUnKTtcbiAgICB0aGlzLmlzSUUgPSB0cnVlO1xuICAgICAgXG4gICAgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSAxMC5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWUxMCcpO1xuICAgICAgcmV0dXJuICdpZTEwJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA5LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTknKTtcbiAgICAgIHJldHVybiAnaWU5JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA4LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTgnKTsgIFxuICAgICAgcmV0dXJuICdpZTgnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDcuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llNycpO1xuICAgICAgcmV0dXJuICdpZTcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDYuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llNicpO1xuICAgICAgcmV0dXJuICdpZTYnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJ0cmlkZW50XCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llMTEnKTtcbiAgICAgIHRoaXMuaXNJRTExID0gdHJ1ZTtcbiAgICAgIHJldHVybiAnaWUxMSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVhLmluZGV4T2YoXCJhcHBsZXdlYmtpdFwiKSA+PSAwICYmIHRoaXMudWEuaW5kZXhPZihcImVkZ2VcIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNFZGdlJyk7XG4gICAgICByZXR1cm4gJ2VkZ2UnO1xuICAgIH1cblxuXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpZScpO1xuICAgIHRoaXMuaXNJRSA9IGZhbHNlO1xuXG4gIH1cblxuICBpc0FuZHJvaWRWZXJzaW9uKCkge1xuXG4gICAgaWYoIHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikgPiAwICkge1xuXG4gICAgICAgIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdCh0aGlzLnVhLnNsaWNlKHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikrOCkpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICAgICAgXG4gICAgfVxuXG4gIH1cblxuICBpc2lwaG9uZVZlcnNpb24oKSB7XG5cbiAgICBpZiggdGhpcy51YS5pbmRleE9mKFwiaVBob25lIE9TXCIpID4gMCApIHtcblxuICAgICAgICB2YXIgdmVyc2lvbiA9IHBhcnNlRmxvYXQodGhpcy51YS5zbGljZSh0aGlzLnVhLmluZGV4T2YoXCJpUGhvbmUgT1NcIikrMTApKTtcbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcG9ydHJhaXQgLyBsYW5kc2NhcGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRGlyZWN0aW9uICgpIHtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoSCA+IFcpIHtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcmVzcG9uc2l2ZSDmqKrluYXjgpLopovjgotcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzUmVzcG9uc2l2ZSAoYnApIHtcblxuICAgIGlmIChicD09dW5kZWZpbmVkKSBicD0zNzU7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKFcgPiBicCkge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gZmFsc2U7XG4gICAgICB0aGlzLmlzUmVzUEMgPSB0cnVlO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSB0cnVlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gZmFsc2U7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFVSTFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyDjgq/jgqjjg6rmipzjgY3lh7rjgZdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGtleSA6IOaKnOOBjeWHuuOBmeODkeODqeODoeODvOOCv+WQjShTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldFF1ZXJ5KGtleSkge1xuXG4gIC8vICAgdmFyIHFzLCByZWdleDtcbiAgLy8gICBrZXkgPSBrZXkucmVwbGFjZSgvW+KCrFtdLywgXCLigqzigqzigqxbXCIpLnJlcGxhY2UoL1vigqxdXS8sIFwi4oKs4oKs4oKsXVwiKTtcbiAgLy8gICByZWdleCA9IG5ldyBSZWdFeHAoXCJb4oKs4oKsPyZdXCIgKyBrZXkgKyBcIj0oW14mI10qKVwiKTtcbiAgLy8gICBxcyA9IHJlZ2V4LmV4ZWMod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAvLyAgIGlmIChxcyA9PT0gbnVsbCkge1xuICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHJldHVybiBxc1sxXTtcbiAgLy8gICB9XG5cbiAgLy8gfVxuXG4gIGdldFBhcmFtKCkge1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIHBhcmFtID0gdXJsLnNwbGl0KCc/JylbMV07XG4gICAgaWYgKHBhcmFtPT11bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcmFtSXRlbXMgPSBwYXJhbS5zcGxpdCgnJicpO1xuICAgIHZhciBsaXN0ID0ge307XG4gIFxuICAgIGZvciggdmFyIGkgPSAwOyBpPHBhcmFtSXRlbXMubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICBwYXJhbUl0ZW0gPSBwYXJhbUl0ZW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIGxpc3RbcGFyYW1JdGVtWzBdXSA9IHBhcmFtSXRlbVsxXTtcblxuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuXG4gIH1cbiAgXG4gIC8vIOODj+ODg+OCt+ODpeWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiBsb2NhdGlvbi5oYXNo44GuI+OCkuWJiumZpOOBl+OBn+OChOOBpFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoYXNoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG5cbiAgfVxuXG4gIC8vIGNvb2tpZeWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAa2V5IDog44OR44Op44Oh44O844K/5ZCNXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldENvb2tpZShrZXkpIHtcblxuICAgIHZhciBhLCBhcnIsIGksIGwsIGxlbjEsIHZhbDtcbiAgICBpZiAoZG9jdW1lbnQuY29va2llID09PSB2b2lkIDAgfHwgZG9jdW1lbnQuY29va2llID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XG4gICAgZm9yIChpID0gbCA9IDAsIGxlbjEgPSBhcnIubGVuZ3RoOyBsIDwgbGVuMTsgaSA9ICsrbCkge1xuICAgICAgdmFsID0gYXJyW2ldO1xuICAgICAgYSA9IHZhbC5zcGxpdChcIj1cIik7XG4gICAgICBpZiAoYVswXSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBhWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxuICB9ICAgICAgXG5cbiAgLy8gY29va2ll6Kit5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBrZXkgOiDjg5Hjg6njg6Hjg7zjgr/lkI1cbiAgLy8gQHZhbCA6IOWApFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRDb29raWUoa2V5LCB2YWwpIHtcblxuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUgPSBrZXkgKyBcIj1cIiArIHZhbDtcblxuICB9XG4gIFxuICBpc1BDU1AoKSB7XG5cbiAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZjtcblxuICAgIGlmICghdGhpcy5pc1BDICYmICF0aGlzLmlzVEFCICYmICh1cmwuaW5kZXhPZigncGMnKSAhPSAtMSkpIHtcblxuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuJztcbiAgICBcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaXNQQyAmJiB1cmwuaW5kZXhPZigncGMnKSA9PSAtMSkge1xuXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4vcGMvJztcbiAgICBcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaXNUQUIgJiYgdXJsLmluZGV4T2YoJ3BjJykgPT0gLTEpIHtcblxuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuL3BjLyc7XG4gICAgXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlzQ29udGFpbih1cmwsJ3JvdWxldHRlJykpIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbic7XG4gICAgaWYgKHRoaXMuaXNDb250YWluKHVybCwndG9waWNzJykpIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbic7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgQ29sb3JcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gcmdi44GL44KJSEVY44Kr44Op44O85Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEByIDogMH4yNTVcbiAgLy8gQGcgOiAwfjI1NVxuICAvLyBAYiA6IDB+MjU1XG4gIC8vIHJldHVybiA6IGV4IFwiI0ZGRkZGRlwiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldEhleENvbG9yKHIsZyxiKSB7XG4gICAgICB2YXIgc3RyO1xuICAgICAgc3RyID0gKHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNik7XG4gICAgICByZXR1cm4gXCIjXCIgKyBuZXcgQXJyYXkoNyAtIHN0ci5sZW5ndGgpLmpvaW4oXCIwXCIpICsgc3RyO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBTdHJpbmdcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNDb250YWluKHN0cixjb250YWluKSB7XG5cbiAgICAvLyBzdHLjga7kuK3jgassY29udGFpbuOBjOWtmOWcqOOBl+OBn+OCiVxuICAgIGlmICggc3RyLmluZGV4T2YoY29udGFpbikgIT0gLTEgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIC8vIDDln4vjgoHjgacy5qGB44Gr44GZ44KL6Zai5pWwXG4gIGFkZDAoc3RyLG51bT0tMil7XG4gICAgXG4gICAgcmV0dXJuICggXCIwMDAwMDAwMDAwMDBcIiArIHN0ciApLnN1YnN0ciggbnVtICk7XG5cbiAgfVxuXG4gIGZsb2F0Rm9ybWF0KCBudW1iZXIsIG4gKSB7XG5cbiAgICB2YXIgX3BvdyA9IE1hdGgucG93KCAxMCAsIG4gKSA7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoIG51bWJlciAqIF9wb3cgKSAvIF9wb3cgO1xuXG4gIH1cbiAgICBcbiAgLy8g5YCk5q616KGo6KiYXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByaWNlKG51bSkge1xuXG4gICAgcmV0dXJuIFN0cmluZyhudW0pLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgJyQxLCcpO1xuXG4gIH1cblxuICAvLyDmloflrZfliJfjgpLlj43ou6JcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHN0ciA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIHJldHVybiA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0clJldmVyc2Uoc3RyKSB7XG5cbiAgICB2YXIgaSwgbGVuLCByZXM7XG4gICAgcmVzID0gXCJcIjtcbiAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgIGkgPSAxO1xuICAgIHdoaWxlIChpIDw9IGxlbikge1xuICAgICAgcmVzICs9IHN0ci5zdWJzdHIoLWksIDEpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuXG4gIH1cbiAgXG4gIC8vIOaWh+Wtl+WIl+OBruWFqOe9ruaPm1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsICA6IOaWh+Wtl+WIl1xuICAvLyBAb2VnICA6IOe9ruaPm+WJjeOBruaWh+Wtl+WIl1xuICAvLyBAZGVzdCA6IOe9ruaPm+W+jOOBruaWh+Wtl+WIl1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXBsYWNlQWxsKHZhbCwgb3JnLCBkZXN0KSB7XG5cbiAgICByZXR1cm4gdmFsLnNwbGl0KG9yZykuam9pbihkZXN0KTtcblxuICB9ICAgIFxuICBcbiAgc3RyUmVwbGFjZShzdHIsIGJlZm9yZSwgYWZ0ZXIpIHtcblxuICAgIHZhciByID0gbmV3IFJlZ0V4cCggYmVmb3JlLCAnZycpO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCByICwgYWZ0ZXIgKTtcblxuICB9ICAgIFxuICBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldE5vdygpIHtcblxuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMubm93LmdldFRpbWUoKTtcblxuICB9XG5cbiAgZWxhcHNlZCgpIHtcblxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZTtcblxuICB9XG5cbiAgbSgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKCB0aGlzLmVsYXBzZWRUaW1lICsgMTAwIC8gNjAgKTtcblxuICB9XG5cbiAgcygpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZWxhcHNlZFRpbWUgLyAxMDAwKTtcblxuICB9XG5cbiAgbXMoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkVGltZTtcbiAgICBcbiAgfVxuXG4gIHRpbWUoKSB7XG5cbiAgICB0aGlzLmdldE5vdygpO1xuXG4gICAgdGhpcy5ob3VyID0gdGhpcy5ub3cuZ2V0SG91cnMoKTsgICAgICAgICAgLy8g5pmCXG4gICAgdGhpcy5taW51dGUgPSB0aGlzLm5vdy5nZXRNaW51dGVzKCk7ICAgICAgLy8g5YiGXG4gICAgdGhpcy5zZWNvbmQgPSB0aGlzLm5vdy5nZXRTZWNvbmRzKCk7XG4gICAgdGhpcy5taWxsU2Vjb25kID0gdGhpcy5ub3cuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgfVxuXG4gIGRhdGUoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RGF0ZSgpO1xuXG4gIH1cblxuICBtb250aHMoKSB7XG5cbiAgICB2YXIgbW9udGhkYXlzID0gbmV3IEFycmF5KDMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEpO1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldE1vbnRoKCkgKyAxO1xuXG4gIH1cblxuICB5ZWFyKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgfVxuXG4gIGRheSgpIHtcblxuICAgIC8vIOabnOaXpSAo5pel5pys6KqeKVxuICAgIHZhciB3ZWVrRGF5SlAgPSBbXCLml6VcIixcIuaciFwiLFwi54GrXCIsXCLmsLRcIixcIuacqFwiLFwi6YeRXCIsXCLlnJ9cIl0gO1xuICAgIHZhciB3REogPSB3ZWVrRGF5SlBbdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICAgIC8vIOabnOaXpSAo6Iux6KqeKVxuICAgIHZhciB3ZWVrRGF5RU4gPSBbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0gO1xuICAgIHZhciB3REUgPSB3ZWVrRGF5RU5bdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICB9XG4gIFxuICAvLyDmlbDml6Xlvozjga5EYXRl44Kq44OW44K444Kn44Kv44OI5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFmdGVyRGF5KGRhdGUsIG51bSkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgTnVtYmVyKG51bSkgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRhIHR5cGUgY2hlY2tcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNPYmplY3QodmFsdWUsIGlnbm9yZUFycmF5KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgfVxuXG4gIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgfVxuXG4gIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBpc0FycmF5KHZhbHVlKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGlzTnVsbCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xuICB9XG5cbiAgaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBvdGhlclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0SW1nU1BTaXplICgkdGFyZ2V0KXtcblxuICAgIC8vIHJlc3BvbnNpdmUgc3Djga7jgajjgY3lh6bnkIZcbiAgICBpZiAoIXRoaXMuaXNSZXNTUCkgcmV0dXJuO1xuICAgIC8vIOS4gOW6puOBoOOBkeWHpueQhlxuICAgIC8vIGlmICh0aGlzLmlzU2V0U1BTaXplKSByZXR1cm47XG4gICAgLy8gdGhpcy5pc1NldFNQU2l6ZSA9IHRydWU7XG5cbiAgICB2YXIgJGltZyA9ICR0YXJnZXQsXG4gICAgICAgIGxlbiA9ICRpbWcubGVuZ3RoO1xuXG4gICAgJGltZy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICB2YXIgdyA9IE1hdGguZmxvb3IoJCh0aGlzKS53aWR0aCgpIC8gMiksXG4gICAgICAgICAgICBoID0gTWF0aC5mbG9vcigkKHRoaXMpLmhlaWdodCgpIC8gMik7XG5cbiAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICd3aWR0aCc6IHcsXG4gICAgICAgICAgICAnaGVpZ2h0JzogaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxlbiA9PSBpICsgMSkgJCh3aW5kb3cpLnRyaWdnZXIoJ3NldFNwWmllRW5kJyk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICDjgrnjg57jg5vmk43kvZznhKHlirlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldFByZXZlbnQoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ3RvdWNobW92ZS5ub0NvbnRyb2wnLCBmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7fSk7XG5cbiAgfVxuXG4gIHJlbW92ZVByZXZlbnQoKSB7XG5cbiAgICAkKHdpbmRvdykub2ZmKCd0b3VjaG1vdmUubm9Db250cm9sJyk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAgaG9zdCxwcm90Y29sXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcm90b2NvbCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbDtcblxuICB9XG4gICAgXG4gIGhvc3QoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgLy8gcmV0dXJuIGxvY2F0aW9uLmhvc3RcblxuICB9XG5cbiAgcG9ydCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wb3J0O1xuXG4gIH1cbiAgICAgICAgXG4gIHBhdGgoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcblxuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzKGUpIHtcblxuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIGRpc2FibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIC8vIG9sZGVyIEZGXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub253aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vZGVybiBzdGFuZGFyZFxuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBvbGRlciBicm93c2VycywgSUVcbiAgICB3aW5kb3cub250b3VjaG1vdmUgID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9iaWxlXG4gICAgZG9jdW1lbnQub25rZXlkb3duICA9IHRoaXMucHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzO1xuXG4gIH1cblxuICBlbmFibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9ud2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL1V0aWwuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBGdW5jXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5ibGFuaygpO1xuICAgIHRoaXMuZGVidWdnZXIoKTtcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuICAgIHRoaXMuZXhwYW5kalF1ZXJ5KCk7XG5cbiAgfVxuXG4gIGJsYW5rKCkge1xuXG4gICAgJCgoKT0+eyQoJy5ibGFuaycpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTt9KTtcblxuICB9XG5cbiAgZGVidWdnZXIoKSB7XG5cbiAgICAvLyDjg4fjg5Djg4PjgrDjg6Ljg7zjg4nliIfmm79cbiAgICB2YXIgUkVMRUFTRSA9IGdiLmluLmNvbmYuUkVMRUFTRTtcblxuICAgIC8vIOe9ruaPm+WvvuixoeOBruODoeOCveODg+ODieOCkumFjeWIl+OBqOOBl+OBpuS/neaMgeOBmeOCi1xuICAgIHZhciBtZXRob2RzID0gW1xuICAgICAgJ2xvZycsXG4gICAgICAnZGVidWcnLFxuICAgICAgJ2luZm8nLFxuICAgICAgJ3dhcm4nLFxuICAgICAgJ2Vycm9yJyxcbiAgICAgICdkaXInLFxuICAgICAgJ3RyYWNlJyxcbiAgICAgICdhc3NlcnQnLFxuICAgICAgJ2RpcnhtbCcsXG4gICAgICAnZ3JvdXAnLFxuICAgICAgJ2dyb3VwRW5kJyxcbiAgICAgICd0aW1lJyxcbiAgICAgICd0aW1lRW5kJyxcbiAgICAgICdjb3VudCcsXG4gICAgICAncHJvZmlsZScsXG4gICAgICAncHJvZmlsZUVuZCdcbiAgICBdO1xuXG4gICAgLy8gY29uc29sZeOBjOS9v+OBiOOBquOBhOWgtOWQiOOBr+epuuOBruOCquODluOCuOOCp+OCr+ODiOOCkuioreWumuOBl+OBpuOBiuOBj1xuICAgIGlmKCB0eXBlb2Ygd2luZG93LmNvbnNvbGUgPT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgIHdpbmRvdy5jb25zb2xlID0ge307XG4gICAgfVxuXG4gICAgLy8g5ZCE44Oh44K944OD44OJ44KSd2luZG9344G455u05o6l6L+95Yqg44GX44Gm6KGM44GPXG4gICAgZm9yKCB2YXIgaSBpbiBtZXRob2RzICl7XG4gICAgICAoZnVuY3Rpb24oIG0gKXtcblxuICAgICAgIC8vIGNvbnNvbGXjgavjgYLjgovvvJ/jg4fjg5Djg4PjgrDjg6Ljg7zjg4njga/mnInlirnvvJ9jb25zb2xl44Gu44KC44Gu44Gv6Zai5pWw77yfXG4gICAgICAgaWYoIGNvbnNvbGVbbV0gJiYgIVJFTEVBU0UgJiYgdHlwZW9mIGNvbnNvbGVbbV0gPT09IFwiZnVuY3Rpb25cIiApe1xuICAgICAgICB3aW5kb3dbbV0gPSBjb25zb2xlW21dLmJpbmQoY29uc29sZSk7XG4gICAgICAgfSBlbHNlIHvjgIAvLyBkZWJ1Z01vZGXjgYxmYWxzZSzjgoLjgZfjgY/jga/oqbLlvZPjg6Hjgr3jg4Pjg4njgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/jgIHnqbrjga7jg6Hjgr3jg4Pjg4njgpLnlKjmhI/jgZnjgotcbiAgICAgICAgd2luZG93W21dID0gZnVuY3Rpb24oKXt9O1xuICAgICAgIH1cblxuICAgICAgfSkoIG1ldGhvZHNbaV0gKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByZXBlbmQocGFyYW0pIHtcblxuICAgICQoJ2JvZHknKS5wcmVwZW5kKHBhcmFtKTtcblxuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuXG4gICAgdmFyIEZQUyA9IDEwMDAvNjA7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyBjaHJvbWXjgoTmnIDmlrDjga5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyDlj6TjgYRmaXJlZm9455SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIC8vIHNhZmFyaTbku6XliY3jgIFpT1M2IHNhZmFyaeeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIEZQUyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggdGltZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OyAgICAgIFxuXG4gIH1cblxuICBleHBhbmRqUXVlcnkoKSB7XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgIHc6MCwgXG4gICAgICBoOjAsIFxuICAgICAgYWRqdXN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdFc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdEg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgY2hlY2tDc3NCbGVuZCgpIHtcblxuICAgIGlmICgnQ1NTJyBpbiB3aW5kb3cgJiYgJ3N1cHBvcnRzJyBpbiB3aW5kb3cuQ1NTKSB7XG4gICAgICBpZiAoIXdpbmRvdy5DU1Muc3VwcG9ydHMoJ21peC1ibGVuZC1tb2RlJywgJ3NvZnQtbGlnaHQnKSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2coZ2IuaW4udS5pc0lFKTtcblxuICAgIGlmIChnYi5pbi51LmlzSUUpIHtcbiAgICAgIFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICBcbiAgICB9O1xuXG4gIH1cblxuICBub3RTYXZlSW1nKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgcGNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuXG4gICAgICAkKCgpPT57XG4gICAgICAgICQoXCJpbWdcIikub24oXCJjb250ZXh0bWVudVwiLCgpPT57XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgc3AgYW5kcm9pZFxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdmFyIHYgPSBnYi5pbi51LmlzQW5kcm9pZFZlcnNpb24oKTtcblxuICAgIGlmICh2PT11bmRlZmluZWQpIHJldHVybjtcbiAgICBpZiAodjw1KSB7XG5cbiAgICAgIHZhciB0aW1lcjtcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaHN0YXJ0XCIsKCk9PntcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgYWxlcnQoXCLnlLvlg4/jga/kv53lrZjjgafjgY3jgb7jgZvjgpNcIilcbiAgICAgICAgfSw1MDApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hlbmRcIiwoKT0+e1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSAgICAgIFxuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9GdW5jLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBSZWFkeU1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IFJlYWR5UGVyY2VudCBmcm9tICcuLi8uLi9GdW5jL1JlYWR5UGVyY2VudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWR5TWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuY29tcGxldGVkID0gMDtcbiAgICB0aGlzLnRvdGFsID0gMDtcbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuXG5cbiAgICB0aGlzLm9uQ29tcGxldGVkRnVuYyA9ICgpPT57fTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdGhpcy5yZWFkeVBlcmNlbnQgPSBuZXcgUmVhZHlQZXJjZW50KCk7XG5cbiAgfVxuXG4gIG9uQ29tcGxldGUoKSB7XG5cbiAgICAvLyB1cGRhdGXlh6bnkIbjgpLjgoTjgoHjgotcbiAgICBnYi5pbi51cC5yZW1vdmUoJ3JlYWR5UGVyY2VudCcsIHRoaXMucmVhZHlQZXJjZW50LnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIOa6luWCmeWujOS6huW+jOOBruWHpueQhlxuICAgIHRoaXMub25Db21wbGV0ZWRGdW5jKCk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuICAgICAgIFxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBSZWFkeVBlcmNlbnRcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWR5UGVyY2VudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLiRsb2FkaW5nID0gJCgnI2xvYWRpbmcnKTtcbiAgICB0aGlzLiRiYXIgPSAkKCcubG9hZGluZ0JhcicpO1xuICAgIHRoaXMuJHBlcmNlbnQgPSAkKCcubG9hZGluZ1BlcmNlbnQnKTtcblxuICAgIHRoaXMuaXNMb2NrID0gZmFsc2U7XG4gICAgdGhpcy5zZXRUaW1lb3V0TG9jayA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgaWYgKCFnYi5pbi5jb25mLndlYkZvbnRMb2FkZWQpIHJldHVybjtcblxuICAgIHZhciB0YXJnZXQgPSAoZ2IuaW4ucm0uY29tcGxldGVkIC8gZ2IuaW4ucm0udG90YWwpICogMTAwO1xuXG4gICAgZ2IuaW4ucm0uY3VycmVudCArPSAodGFyZ2V0IC0gZ2IuaW4ucm0uY3VycmVudCkgKiAwLjE7XG4gICAgLy8gdGhpcy4kYmFyLmNzcyh7IHdpZHRoOiBnYi5pbi5ybS5jdXJyZW50ICsgJyUnIH0pOyAvL3BlcmNlbnQg5Ly444Gw44GZXG4gICAgdGhpcy4kcGVyY2VudC50ZXh0KCBNYXRoLmZsb29yKGdiLmluLnJtLmN1cnJlbnQpICsgJyUnKTtcblxuICAgIC8vIOe1guS6huWHpueQhlxuICAgIGlmIChnYi5pbi5ybS5jdXJyZW50ID49IDEwMCAmJiAhdGhpcy5pc0xvY2spIHtcbiAgICAgIHRoaXMuaXNMb2NrID0gdHJ1ZTtcbiAgICAgIGdiLmluLnJtLm9uQ29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvLyBjdXJyZW50IOOBjCA5OS45IOOCiOOCiuWkp+OBjeOBkeOCjOOBsCAxMDAg44Go6KaL44Gq44GX44Gm57WC5LqG5Yem55CG44G4XG4gICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgPiA5OS45KSB7XG4gICAgICBnYi5pbi5ybS5jdXJyZW50ID0gMTAwO1xuICAgIH1cblxuICAgIC8vIGllMTHjga8sOTnjgavjgarjgaPjgabjgIE156eS57WM44Gj44Gm44KCMTAw44Gn44Gq44GR44KM44Gw44CB5by35Yi255qE44Gr44CB6KGo56S6XG4gICAgLy8g44Gd44Gu6Zqb44CBY29tcGxldGXjgZfjgabnhKHjgZHjgozjgbDog4zmma/jga/pnZnmraLnlLvjgatcbiAgICAvLyBpZiAoZ2IuaW4udS5pc0lFMTEpIHtcblxuICAgIGlmIChnYi5pbi5ybS5jdXJyZW50ID4gOTkgJiYgIXRoaXMuc2V0VGltZW91dExvY2spIHtcbiAgICB0aGlzLnNldFRpbWVvdXRMb2NrID0gdHJ1ZTtcblxuICAgIGxvZygnOTkhISEhJyk7XG4gICAgICAvLyBnYi5pbi5ybS5jdXJyZW50ID0gOTk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCk9PntcblxuICAgICAgICBsb2coJzUhISEnKVxuXG4gICAgICAgIGlmIChnYi5pbi5ybS5jdXJyZW50ICE9PSAxMDApIHtcblxuICAgICAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgICAgICAgICQoJy5iZ092ZXJsYXlJbWcnKS5hZGRDbGFzcygnaXNBY3RpdmUnKTtcblxuICAgICAgICAgIGxvZygn5a++5b+c77yB77yBJylcblxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgfSw1MDAwKTtcblxuICAgIH07XG5cbiAgICAvLyB9O1xuXG4gIH1cblxuICByZW1vdmUoKSB7XG5cblxuICAgIFR3ZWVuTWF4XG4gICAgICAudG8odGhpcy4kbG9hZGluZywgMi44LCB7XG4gICAgICAgIHNjYWxlOiAxLjIsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW5PdXQsXG4gICAgICAgIG9uQ29tcGxldGU6KCk9PntcbiAgICAgICAgICB0aGlzLiRsb2FkaW5nLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KSAgICBcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAuYWRkKCdyZWFkeVBlcmNlbnQnLHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgIFxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1JlYWR5UGVyY2VudC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDnlLvpnaLmm7TmlrDjgq/jg6njgrlcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVcGRhdGVNZ3JcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy/mm7TmlrDlm57mlbBcbiAgICB0aGlzLmNudCA9IDA7XG5cbiAgICAvL+avjuODleODrOODvOODoOWun+ihjOOBleOBm+OCi+mWouaVsOOCkuS/neaMgVxuICAgIHRoaXMudXBkYXRlTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5sZW4gPSAwO1xuICAgIHRoaXMuVGltZXIgPSBudWxsO1xuICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAg5a6f6KGM44GX44Gf44GE6Zai5pWw44KS55m76YyyXG4gICAqICBmdW5jIDog6Zai5pWwXG4gICAqL1xuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMudXBkYXRlTGlzdC5wdXNoKG9iaik7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAg5a6f6KGM44GX44Gf44GE6Zai5pWw44KS5YmK6ZmkXG4gICAqICBmdW5jIDog6Zai5pWwXG4gICAqL1xuICByZW1vdmUobmFtZSkge1xuXG4gICAgdmFyIHRhcmdldCA9IHtuYW1lOm5hbWUsZnVuYzooKT0+e319O1xuXG4gICAgVXBkYXRlTWdyLmFyclJlbW92ZSh0aGlzLnVwZGF0ZUxpc3QsIHRhcmdldCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAg5pu05pawKOeZu+mMsuOBleOCjOOBn+mWouaVsOOBrue3j+aVsOWIhuWun+ihjOOBmeOCiylcbiAgICovXG4gIHVwZGF0ZSgpIHtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy51cGRhdGVMaXN0KSB0aGlzLnVwZGF0ZUxpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDmm7TmlrDjga7lrp/ooYzplqLmlbDjga7lhoXlrrlcbiAgICovXG4gIGxvb3AoKSB7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuY250Kys7XG5cbiAgICB0aGlzLlRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICBpZiAodGhpcy5pc1N0b3ApIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuVGltZXIpO1xuICAgIFxuXG4gIH1cblxuICAvKipcbiAgICrjgIDmm7TmlrDlgZzmraJcbiAgICovXG4gIHN0b3AoKSB7XG5cbiAgICB0aGlzLmlzU3RvcCA9IHRydWU7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOabtOaWsOWGjemWi1xuICAgKi9cbiAgcmVzdW1lKCkge1xuXG4gICAgdGhpcy5pc1N0b3AgPSBmYWxzZTtcbiAgICB0aGlzLmxvb3AoKTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA6Z2Z55qE44Oh44Oz44OQ6Zai5pWwXG4gICAqL1xuICBzdGF0aWMgYXJyUmVtb3ZlKGFyciAsIHRhcmdldCkge1xuXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGNoZWNrO1xuICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgY2hlY2sgPSBhcnJbIGkgXTtcblxuICAgICAgaWYoIGNoZWNrLm5hbWUgPT0gdGFyZ2V0Lm5hbWUpe1xuICAgICAgICBhcnIuc3BsaWNlKCBpICwgMSApIDtcbiAgICAgICAgaS0tO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9VcGRhdGVNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFJlc2l6ZU1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzaXplTWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMucmVzaXplTGlzdCA9IFtdO1xuICAgIHRoaXMud3MgPSB7dzowLCBoOjAsIG9sZFc6LTEsIG9sZEg6LTF9O1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oZSl7c2VsZi5vblJlc2l6ZS5jYWxsKHNlbGYsZSk7fSk7XG4gICAgdGhpcy5nZXRXaW5kb3dTaXplKCk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKGUpIHtcblxuICAgIHRoaXMuZ2V0V2luZG93U2l6ZSgpO1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnJlc2l6ZUxpc3QpIHRoaXMucmVzaXplTGlzdFtpXS5mdW5jKCk7XG5cbiAgfVxuXG4gIFcoKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLndzLnc7XG4gICAgXG4gIH1cbiAgXG4gIEgoKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLndzLmg7XG4gIFxuICB9XG5cbiAgZ2V0V2luZG93U2l6ZSgpe1xuXG4gICAgdmFyIHcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHRoaXMud3Mub2xkVyA9IHRoaXMud3MudztcbiAgICB0aGlzLndzLm9sZEggPSB0aGlzLndzLmg7XG4gICAgdGhpcy53cy53ID0gdztcbiAgICB0aGlzLndzLmggPSBoO1xuXG4gIH1cblxuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMucmVzaXplTGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cblxuICByZW1vdmUobmFtZSkge1xuXG4gICAgUmVzaXplTWdyLmFyclJlbW92ZSh0aGlzLnJlc2l6ZUxpc3QsIG5hbWUpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIOmdmeeahOODoeODs+ODkFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGljIGFyclJlbW92ZShhcnIgLCBuYW1lKSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSBuYW1lKXtcbiAgICAgICAgYXJyLnNwbGljZSggaSAsIDEgKSA7XG4gICAgICAgIGktLTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvUmVzaXplTWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTY3JvbGxNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbE1nciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNjcm9sbExpc3QgPSBbXTtcbiAgICB0aGlzLnNjcm9sbEVuZExpc3QgPSBbXTtcbiAgICB0aGlzLncgPSAwO3RoaXMuaCA9IDA7XG4gICAgdGhpcy5zdCA9IDA7IC8vIOePvuWcqOOBrnNjcm9sbCB0b3BcbiAgICB0aGlzLnNiID0gMDsgLy8g54++5Zyo44Guc2Nyb2xsIGJvdHRvbVxuICAgIHRoaXMuc3YgPSAwOyAvLyDnj77lnKjjga7jgrnjgq/jg63jg7zjg6vph49cblxuICAgIHRoaXMuU1RBbW91bnQgPSAwO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcblxuICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZ2V0V2luZG93U2l6ZSgpO1xuICAgIHRoaXMuYWRkKCdlbmQnLHRoaXMuZW5kLmJpbmQodGhpcykpO1xuXG4gIH1cblxuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMuc2Nyb2xsTGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cblxuICByZW1vdmUobmFtZSkge1xuXG4gICAgU2Nyb2xsTWdyLmFyclJlbW92ZSh0aGlzLnNjcm9sbExpc3QsIG5hbWUpO1xuXG4gIH1cblxuICByZW1vdmUodGFyZ2V0KSB7XG5cbiAgICBTY3JvbGxNZ3IuYXJyUmVtb3ZlKHRoaXMuc2Nyb2xsTGlzdCwgdGFyZ2V0KTtcblxuICB9XG5cbiAgb25SZXNpemUoZSkge1xuXG4gICAgdGhpcy5nZXRXaW5kb3dTaXplKCk7XG5cbiAgfVxuXG4gIG9uU2Nyb2xsKGUpIHtcblxuICAgIGlmICh0aGlzLmlzU3RhcnQpIHtcbiAgICAgIHRoaXMuaXNTdGFydCA9IGZhbHNlO1xuICAgICAgLy8gbG9nKCdyZXNpemVTdGFydCcpO1xuICAgICAgLy8g5pyA5Yid44Gg44GR44Gu5Yem55CGXG4gICAgfTtcblxuICAgIHRoaXMuc3QgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgdGhpcy5zYiA9IHRoaXMuc3QgKyB0aGlzLmg7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2Nyb2xsTGlzdCkgdGhpcy5zY3JvbGxMaXN0W2ldLmZ1bmMoKTtcblxuICB9XG5cbiAgb25Nb3VzZVdoZWVsKGUsZGVsdGEsZGVsdGFYLGRlbHRhWSkge1xuXG4gICAgdGhpcy5TVEFtb3VudCA9IGRlbHRhWTtcbiAgICBpZiAoZ2IuaW4udS5pc1dpbigpKSB0aGlzLlNUQW1vdW50ICo9IDYwO1xuICAgIGlmIChnYi5pbi51LmlzRkYoKSAmJiAhZ2IuaW4udS5pc1dpbigpKSB0aGlzLlNUQW1vdW50ICo9IDYwO1xuICAgIC8vIGlmIChNYXRoLmFicyh0aGlzLlNUQW1vdW50KSA+IDEwKSB0aGlzLlNUQW1vdW50ICo9IDAuNDtcbiAgICB0aGlzLm9mZnNldCArPSB0aGlzLlNUQW1vdW50O1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnNjcm9sbExpc3QpIHRoaXMuc2Nyb2xsTGlzdFtpXS5mdW5jKCk7XG5cbiAgfVxuXG4gIGdldFdpbmRvd1NpemUoKXtcblxuICAgIHRoaXMudyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICB9XG5cbiAgZW5kKGUpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh0aGlzLlRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5UaW1lcik7XG4gICAgdGhpcy5UaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmlzU3RhcnQgPSB0cnVlO1xuICAgICAgLy8gbG9nKCdyZXNpemVFbmQnKTtcblxuICAgICAgZm9yICh2YXIgaSBpbiBzZWxmLnNjcm9sbEVuZExpc3QpIHNlbGYuc2Nyb2xsRW5kTGlzdFtpXSgpO1xuXG4gICAgfSwgMjAwKTtcblxuICB9XG5cbiAgYWRkRml4ZWRPYmplY3RTY3JvbGwoJHRhcmdldCkge1xuXG4gICAgdGhpcy5zY3JvbGxMaXN0LnB1c2goZnVuY3Rpb24oKXtcblxuICAgICAgJHRhcmdldC5jc3MoXCJsZWZ0XCIsIC0kKHdpbmRvdykuc2Nyb2xsTGVmdCgpKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoZSk9Pnt0aGlzLm9uUmVzaXplKGUpO30pO1xuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgKGUpPT57dGhpcy5vblNjcm9sbChlKTt9KTtcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2V3aGVlbCcsIChlLGRlbHRhLGRlbHRhWCxkZWx0YVkpPT57dGhpcy5vbk1vdXNlV2hlZWwoZSxkZWx0YSxkZWx0YVgsZGVsdGFZKTt9KTtcblxuICB9XG4gICAgICAgXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICDpnZnnmoTjg6Hjg7Pjg5BcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0YXRpYyBhcnJSZW1vdmUoYXJyICwgbmFtZSkge1xuXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGNoZWNrO1xuICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgY2hlY2sgPSBhcnJbIGkgXTtcblxuICAgICAgaWYoIGNoZWNrLm5hbWUgPT0gbmFtZSl7XG4gICAgICAgIGFyci5zcGxpY2UoIGkgLCAxICkgO1xuICAgICAgICBpLS07XG4gICAgICAgIGxlbi0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Njcm9sbE1nci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTW91c2VNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlTWdyIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0ID0gJChkb2N1bWVudCkpIHtcblxuICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXQ7XG5cbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG5cbiAgICB0aGlzLmN4ID0gMDtcbiAgICB0aGlzLmN5ID0gMDtcblxuICAgIHRoaXMubW91c2VNb3ZlTGlzdCA9IFt7bmFtZTonZGVmJyxmdW5jOigpPT57fX1dO1xuICAgIHRoaXMubW91c2VNb3ZlU3RhcnRMaXN0ID0gW3tuYW1lOidkZWYnLGZ1bmM6KCk9Pnt9fV07XG4gICAgdGhpcy5tb3VzZU1vdmVFbmRMaXN0ID0gW3tuYW1lOidkZWYnLGZ1bmM6KCk9Pnt9fV07XG5cbiAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xuICAgIHRoaXMuVGltZXIgPSBudWxsO1xuICAgIHRoaXMuZW5kVGltZSA9IDEwO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdGhpcy5hZGQoJ29uRW5kJywgdGhpcy5vbkVuZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgb25Ub3VjaG1vdmUoZSkge1xuXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy54ID0gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYOyBcbiAgICB0aGlzLnkgPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgfVxuXG4gIG9uTW91c2Vtb3ZlKGUpIHtcblxuICAgIC8vIGxvZyh0aGlzLm1vdXNlTW92ZUxpc3QpO1xuXG4gICAgaWYgKHRoaXMuaXNTdGFydCkge1xuICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG5cbiAgICAgIC8vIOacgOWIneOBoOOBkeOBruWHpueQhlxuICAgICAgLy8gbG9nKCdtb3ZlU3RhcnQnKTtcblxuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLm1vdXNlTW92ZVN0YXJ0TGlzdCkgdGhpcy5tb3VzZU1vdmVTdGFydExpc3RbaV0uZnVuYygpO1xuXG4gICAgfTtcblxuICAgIGlmIChlLm9mZnNldFg9PXVuZGVmaW5lZCkgeyAvLyB0aGlzIHdvcmtzIGZvciBGaXJlZm94XG4gICAgICAgdGhpcy54ID0gZS5wYWdlWCAtIHRoaXMuJHRhcmdldC5vZmZzZXQoKS5sZWZ0O1xuICAgICAgIHRoaXMueSA9IGUucGFnZVkgLSB0aGlzLiR0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAgICB9IGVsc2UgeyAvLyB3b3JrcyBpbiBHb29nbGUgQ2hyb21lXG4gICAgICAgdGhpcy54ID0gZS5wYWdlWCAtICQod2luZG93KS5zY3JvbGxMZWZ0KCk7XG4gICAgICAgdGhpcy55ID0gZS5wYWdlWSAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgfVxuXG4gICAgdGhpcy5jeCA9ICggZS5jbGllbnRYIC0gZ2IuaW4uci5XKCkvMiApO1xuICAgIHRoaXMuY3kgPSAoIGUuY2xpZW50WSAtIGdiLmluLnIuSCgpLzIgKTtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5tb3VzZU1vdmVMaXN0KSB0aGlzLm1vdXNlTW92ZUxpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBvbkVuZChlKSB7XG5cbiAgICBpZiAodGhpcy5UaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuVGltZXIpO1xuICAgIHRoaXMuVGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xuXG4gICAgICAvLyBsb2coJ21vdmVFbmQnKTtcblxuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLm1vdXNlTW92ZUVuZExpc3QpIHRoaXMubW91c2VNb3ZlRW5kTGlzdFtpXS5mdW5jKCk7XG5cbiAgICB9LCB0aGlzLmVuZFRpbWUpO1xuXG4gIH1cblxuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMubW91c2VNb3ZlTGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cbiBcbiAgYWRkU3RhcnQgKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLm1vdXNlTW92ZVN0YXJ0TGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cblxuICBhZGRFbmQgKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLm1vdXNlTW92ZUVuZExpc3QucHVzaChvYmopO1xuICAgIFxuICB9XG5cbiAgcmVtb3ZlKG5hbWUpIHtcblxuICAgIE1vdXNlTWdyLmFyclJlbW92ZSh0aGlzLm1vdXNlTW92ZUxpc3QsIG5hbWUpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIOmdmeeahOODoeODs+ODkFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGljIGFyclJlbW92ZShhcnIgLCBuYW1lKSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSBuYW1lKXtcbiAgICAgICAgYXJyLnNwbGljZSggaSAsIDEgKSA7XG4gICAgICAgIGktLTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCl7XG5cbiAgICB0aGlzLiR0YXJnZXQub2ZmKFwidG91Y2htb3ZlLk1vdXNlTWdyXCIpO1xuICAgIHRoaXMuJHRhcmdldC5vZmYoXCJtb3VzZW1vdmUuTW91c2VNZ3JcIik7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpe1xuXG4gICAgdGhpcy4kdGFyZ2V0Lm9uKFwidG91Y2htb3ZlLk1vdXNlTWdyXCIsIChlKT0+e3RoaXMub25Ub3VjaG1vdmUoZSk7fSk7XG4gICAgdGhpcy4kdGFyZ2V0Lm9uKFwibW91c2Vtb3ZlLk1vdXNlTWdyXCIsIChlKT0+e3RoaXMub25Nb3VzZW1vdmUoZSk7fSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL01vdXNlTWdyLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTG9hZE1nclxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyLmpzJztcbmltcG9ydCBTZWMwMVZpZGVvIGZyb20gJy4uL0Rpc3BsYXkvVUkvU2VjMDFWaWRlby5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIC8vIOOBneOBruS7llxuICAgIC8vIOOCveODvOOCt+ODo+ODq+OCueOCr+ODquODl+ODiOOBquOBqVxuICAgIC8vIHRoaXMuc25zU2NyaXB0KCk7XG5cbiAgICAvLyB0aGlzLmxvYWRZb3V0dWJlU2NyaXB0KCk7XG5cbiAgICAvLyBzZWN0aW9uMDLjgafkvb/jgYblpKfph4/jga7nlLvlg4/jgpLjg63jg7zjg4kgLy8gd2ViIHdvcmtlcuOBquOBqeOCguS9v+OBo+OBplxuICAgIC8vIHRoaXMuc2VjMDJJbWcoKTtcblxuICAgIC8vIHRoaXMud2ViRm9udCgpO1xuXG4gIH1cblxuICBsb2FkWW91dHViZVNjcmlwdCgpIHtcblxuICAgIHZhciBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7XG5cbiAgICB2YXIgbGVuID0gMTtcbiAgICBnYi5pbi5ybS50b3RhbCArPSBsZW47IC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuICAgIGlmIChnYi5pbi51LmlzU1ApIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuXG4gICAgdmFyIGNiID0gKCk9PntcblxuICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG5cbiAgICB9XG5cbiAgICBsb2FkZXIueW91dHViZUlmcmFtZVNjcmlwdChjYik7XG5cbiAgfVxuXG4gIHNlYzAySW1nKCkge1xuXG4gICAgLy8gYmdWaWRlb1RpbGXnlKjjga7pgKPnlarnlLvlg4/jga7oqq3jgb/ovrzjgb9cbiAgICBnYi5pbi5sb2FkU2VjMDJJbWcgPSB0aGlzLmxvYWRlciA9IG5ldyBMb2FkZXIoKTtcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcbiAgICAgIHZhciBsZW4gPSBnYi5pbi5jb25mLnNlYzAySW1nTnVtO1xuICAgICAgZ2IuaW4ucm0udG90YWwgKz0gbGVuO+OAgC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuICAgICAgdmFyIHBhdGggPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL21vdmllL2JnSW1nLyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsZW4gPSAxOTtcbiAgICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjvjgIAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcbiAgICAgIHZhciBwYXRoID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9tb3ZpZS9iZ0ltZ1NQLyc7XG4gICAgfVxuXG4gICAgdmFyIGNiID0gKCk9PntcbiAgICAgIC8vIGdiLmluLlNlYzAyQmcuY3JlYXRlKCk7XG4gICAgfVxuICAgIHZhciBjYjAyID0gKCk9PntcbiAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgIH1cblxuICAgIC8vIHRoaXMubG9hZGVyLmltZ1NlcmlhbExvYWQobGVuLHBhdGgsJ3RmbnlfJyxjYixjYjAyKTtcbiAgICB0aGlzLmxvYWRlci5pbWcobGVuKzEscGF0aCwndGZueV8nLGNiLGNiMDIpO1xuXG4gIH1cblxuICBzZWN0aW9uMDRQcm9kdWN0U2hhZGVyKCkge1xuXG4gICAgdmFyIHNoYWRlcnMgPSBbXTtcbiAgICB2YXIgc2hhZGVyTG9hZExpc3QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGdiLkNsb2NrLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuUGxhc21hLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5TZXBpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuTW9zYWljLFxuICAgICAgICAgICAgICAgICAgICAgICBnYi5ab29tQmx1cixcbiAgICAgICAgICAgICAgICAgICAgICAgZ2IuWm9vbUJsdXIsXG4gICAgICAgICAgICAgICAgICAgICAgIGdiLlRyYW5zaXRpb24wMixcbiAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICB2YXIgbGVuID0gc2hhZGVyTG9hZExpc3QubGVuZ3RoO1xuICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjsgLy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG5cbiAgICB2YXIgc2hhZGVyU2VyaWFsTG9hZCA9IChsZW4sIGNiKT0+e1xuXG4gICAgICAgIHZhciBzaGFkZXIsY250PTA7XG5cbiAgICAgICAgdmFyIGxvYWQgPSAoaSk9PntcbiAgICAgICAgICBzaGFkZXIgPSBuZXcgc2hhZGVyTG9hZExpc3RbaV0oY29tcCk7XG4gICAgICAgICAgc2hhZGVycy5wdXNoKHNoYWRlcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNvbXAgPSBmdW5jdGlvbigpe1xuICAgICAgICAgIGNudCsrO1xuICAgICAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgICAgICAgIGlmKGNudCA9PSBsZW4pIGNiKHNoYWRlcnMpO1xuICAgICAgICAgIGVsc2UgbG9hZChjbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxvYWQoY250KTtcblxuICAgIH1cblxuICAgIHNoYWRlclNlcmlhbExvYWQoc2hhZGVyTG9hZExpc3QubGVuZ3RoLChzaGFkZXJzKT0+e1xuXG4gICAgICB0aGlzLnNoYWRlcnMgPSBzaGFkZXJzO1xuICAgICAgdGhpcy5zZWN0aW9uMDRQcm9kdWN0SW1nKCk7XG5cbiAgICB9KVxuXG4gIH1cblxuICBzZWN0aW9uMDRQcm9kdWN0SW1nKCkge1xuXG4gICAgdmFyIHRleHR1cmVMaXN0ID0gW1xuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L3RpZmZhbnlfaGFuZDEuanBnJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC9icm93bi5wbmcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L2JsdWUucG5nJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC93aGl0ZS5wbmcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L3RpZmZhbnlibHVlLnBuZycsXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3QvcGluay5wbmcnLFxuICAgIF07ICAgICAgXG4gICAgdGhpcy50ZXh0dXJlcyA9IFtdO1xuXG4gICAgdmFyIGxlbiA9IHRleHR1cmVMaXN0Lmxlbmd0aDtcbiAgICBnYi5pbi5ybS50b3RhbCArPSBsZW47IC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuXG4gICAgdmFyIHRleHR1cmVTZXJpYWxMb2FkID0gKGxlbiwgY2IpPT57XG5cbiAgICAgIHZhciB0ZXh0dXJlLGNudD0wO1xuXG4gICAgICB2YXIgbG9hZCA9IChpKT0+e1xuICAgICAgICB0ZXh0dXJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSh0ZXh0dXJlTGlzdFtpXSwgbnVsbCAsY29tcCk7XG4gICAgICAgIHRoaXMudGV4dHVyZXMucHVzaCh0ZXh0dXJlKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBjb21wID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY250Kys7XG4gICAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgICAgICBpZihjbnQgPT0gbGVuKSBjYigpO1xuICAgICAgICBlbHNlIGxvYWQoY250KTtcbiAgICAgIH07XG5cbiAgICAgIGxvYWQoY250KTtcblxuICAgIH1cblxuICAgIHRleHR1cmVTZXJpYWxMb2FkKHRleHR1cmVMaXN0Lmxlbmd0aCwgKCk9PnskKHdpbmRvdykudHJpZ2dlcignb25TZWN0aW9uMDRQcm9kdWN0SW1nJyk7fSk7XG5cbiAgfVxuXG4gIHdlYkZvbnQoKSB7XG5cbiAgICAvLyB3ZWIgZm9udCBsb2FkZXLnlKhwYXJhbVxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBjdXN0b206IHtcbiAgICAgICAgZmFtaWxpZXM6IFtcbiAgICAgICAgICAnQ29ybW9yYW50JyxcbiAgICAgICAgICAnUm9ib3RvIENvbmRlbnNlZCdcbiAgICAgICAgICAvLyAnTm90byBTYW5zIEphcGFuZXNlJyxcbiAgICAgICAgICAvLyAnUm9ib3RvJyxcbiAgICAgICAgICAvLyAnQWxlZ3JleWEgU2FucycsXG4gICAgICAgICAgLy8gJ0FsZWdyZXlhIFNhbnMgU0MnXG4gICAgICAgICAgXSxcbiAgICAgICAgdXJsczogW1xuICAgICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q29ybW9yYW50OjUwMCw1MDBpfFJvYm90bytDb25kZW5zZWQnXG4gICAgICAgICAgLy8gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL2Nzcy9mb250LmNzcycsXG4gICAgICAgICAgLy8gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCwzMDAnLFxuICAgICAgICAgIC8vICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxlZ3JleWErU2Fuczo0MDAsMTAwJyxcbiAgICAgICAgICAvLyAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZWdyZXlhK1NhbnMrU0M6NDAwLDMwMCwxMDAnXG4gICAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGFjdGl2ZTogZnVuY3Rpb24oKSB7IFxuICAgICAgICAgIFxuICAgICAgICAgIGxvZygnd2ViRm9udCEhISEnKTtcbiAgICAgICAgICBnYi5pbi5jb25mLndlYkZvbnRMb2FkZWQgPSB0cnVlO1xuXG4gICAgICB9IFxuICAgIH07XG5cbiAgICB2YXIgbG9hZGVyID0gbmV3IExvYWRlcigpOyAgIFxuICAgIGxvYWRlci53ZWJGb250KGNvbmZpZyk7XG5cbiAgfVxuXG4gIG9uRW5kKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZE1nci5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IExvYWRlclxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5saXN0ID0gW107XG4gICAgdGhpcy5jbnQgPSAwO1xuXG4gIH1cblxuICBqc29uKHNyYyxjYikge1xuXG4gICAgJC5nZXRKU09OKHNyYywgKGRhdGEpPT57XG5cbiAgICAgIGNiKGRhdGEpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIGltZyhsZW4sIHBhdGgsIG5hbWUsIGNiPSgpPT57fSwgY2IwMj0oKT0+e30pe1xuXG4gICAgdmFyIGksIGltZywgbnRoLCBjbnQgPSAxLCBsaXN0ID0gW107XG5cbiAgICBmb3IoaSA9IDE7aSA8IGxlbjtpKyspe1xuICAgICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBudGggPSBnYi5pbi51LmFkZDAoaSwtNSk7XG4gICAgICB0aGlzLmxpc3QucHVzaChpbWcpO1xuICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XG4gICAgICAgIGNiMDIoKTtcbiAgICAgICAgY250Kys7XG4gICAgICAgIGlmKGNudCA9PSBsZW4pIGNiKCk7XG4gICAgICB9XG4gICAgICBpbWcuc3JjID0gcGF0aCtuYW1lK250aCtcIi5qcGdcIjtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIGNiMDIgbG9hZOWujOS6huaZgiDpg73luqbpg73luqbnlKjjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcbiAgaW1nU2VyaWFsTG9hZChsZW4sIHBhdGgsIG5hbWUsIGNiPSgpPT57fSxjYjAyPSgpPT57fSl7XG5cbiAgICB2YXIgaSwgaW1nLCBudGgsIGNudCA9IDAsIGxpc3QgPSBbXTtcblxuICAgIHZhciBsb2FkID0gKGkpPT57XG4gICAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBudGggPSBnYi5pbi51LmFkZDAoaSwtNSk7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKGltZyk7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKT0+e1xuICAgICAgICAgIGNiMDIoKTtcbiAgICAgICAgICBjb21wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1nLnNyYyA9IHBhdGgrbmFtZStudGgrXCIuanBnXCI7XG4gICAgfTtcblxuICAgIHZhciBjb21wID0gKCk9PntcbiAgICAgICAgY250Kys7XG4gICAgICAgIGlmKGNudCA9PSBsZW4pe1xuICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGxvYWQoY250KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkKGNudCk7XG4gIH1cblxuICBhamF4SW1nTG9hZChjYil7XG5cbiAgICB2YXIgaW1nTnVtID0gJCgnaW1nJykubGVuZ3RoO1xuICAgIHZhciBjbnQgPSAwO1xuXG4gICAgJCgnaW1nJykuZWFjaChmdW5jdGlvbihpLCBlbG0pIHtcblxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKT0+e1xuICAgICAgICAgIGNudCsrO1xuICAgICAgICAgIGlmIChjbnQ9PWltZ051bS0xKSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaW1nLnNyYyA9IGVsbS5zcmM7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgdmlkZW8oc3JjLCBjYj0oKT0+e30pIHtcblxuICAgIHZhciBpc0xvYWQgPSBmYWxzZTtcbiAgICB0aGlzLnZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcblxuICAgIHZhciB0eXBlID0gdGhpcy5zdXBwb3J0VmlkZW9FeHQodGhpcy52aWRlbyk7XG4gICAgaWYgKHR5cGUgPT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgKCk9PntcblxuICAgICAgaWYgKCF0aGlzLmlzTG9hZCkge1xuICAgICAgICB0aGlzLmlzTG9hZCA9IHRydWU7XG4gICAgICAgIHRoaXMudmlkZW8ubG9vcCA9IHRydWU7XG4gICAgICAgIHRoaXMudmlkZW8ucGxheSgpO1xuICAgICAgICBjYigpO1xuICAgICAgfVxuXG4gICAgfSxmYWxzZSk7XG5cbiAgICAvLyDjg63jg7zjg4lcbiAgICB0aGlzLnZpZGVvLnNyYyA9IHNyYztcblxuICB9XG5cbiAgeW91dHViZUlmcmFtZVNjcmlwdChjYikge1xuXG4gICAgLy8gSUZyYW1lIFBsYXllciBBUEkg44Gu6Kqt44G/6L6844G/XG4gICAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHRhZy5vbmxvYWQgPSAoKT0+e1xuXG4gICAgICBjYigpO1xuXG4gICAgfTtcblxuICAgIC8vIHRhZy5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcbiAgICB0YWcuc3JjID0gXCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcbiAgICB2YXIgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgZmlyc3RTY3JpcHRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFnLCBmaXJzdFNjcmlwdFRhZyk7XG5cblxuICAgIC8vIFlvdVR1YmXli5XnlLtcbiAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lUmVhZHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIFxuICAgICAgd2luZG93LmNvbnNvbGUubG9nKCd5b3V0dWJlcmVhZHknKTtcblxuXG4gICAgfVxuXG4gIH1cblxuICBzdXBwb3J0VmlkZW9FeHQoKSB7XG5cbiAgICB2YXIgZXh0ID0gXCJcIjtcbiAgICBpZiAodGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL3dlYm1cIikgPT0gXCJwcm9iYWJseVwiIHx8IHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby93ZWJtXCIpID09IFwibWF5YmVcIikge1xuICAgICAgZXh0ID0gXCJ3ZWJtXCI7XG4gICAgfSBlbHNlIGlmKHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby9tcDRcIikgPT0gXCJwcm9iYWJseVwiIHx8IHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby9tcDRcIikgPT0gXCJtYXliZVwiKSB7XG4gICAgICBleHQgPSBcIm1wNFwiO1xuICAgIH0gZWxzZSBpZih0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vb2dnXCIpID09IFwicHJvYmFibHlcIiB8fCB0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vb2dnXCIpID09IFwibWF5YmVcIikge1xuICAgICAgZXh0ID0gXCJvZ2dcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gZXh0O1xuXG4gIH1cblxuICAvL1dlYkZvbnTjga7jg63jg7zjg4Djg7znrqHnkIZcbiAgd2ViRm9udChjb25maWcpIHtcblxuICAgIC8vIHdlYiBmb250IGxvYWRlcueUqGpz44GuYXBwZW5kXG4gICAgdmFyIHdmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgd2Yuc3JjID0gKCdodHRwczonID09IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID8gJ2h0dHBzJyA6ICdodHRwJykgK1xuICAgICAgJzovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL3dlYmZvbnQvMS93ZWJmb250LmpzJztcbiAgICB3Zi50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgd2YuYXN5bmMgPSAndHJ1ZSc7XG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3Ziwgcyk7XG5cbiAgICB2YXIgYWdhaW4gPSAoKT0+e1xuXG4gICAgICAvLyB5dC5wbGF5ZXLjgYxsb2Fk44GV44KM44Gm44GE44Gq44GE5aC05ZCI44KS6ICD5oWu44GX44GmXG4gICAgICBpZigodHlwZW9mIFdlYkZvbnQgIT09IFwidW5kZWZpbmVkXCIpICYmIFdlYkZvbnQpIHtcblxuICAgICAgICAgIFdlYkZvbnQubG9hZChjb25maWcpO1xuXG4gICAgICB9ZWxzZXtcblxuICAgICAgICAgIHNldFRpbWVvdXQoYWdhaW4sIDEwMCk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIGFnYWluKCk7ICAgIFxuXG4gIH1cblxuICBvbkxvYWRlZCgpIHtcblxuICAgICQoJ2h0bWwnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuXG4gIH1cblxuICBzZXRFdmVudHMobGVuKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWRlZCcsIChldmVudCk9PntcbiAgICAgIFxuICAgICAgc2VsZi5jbnQrKztcbiAgICAgIGlmIChzZWxmLmNudCA9PSBsZW4pIG9uTG9hZGVkKCk7XG5cbiAgICB9KTtcbiAgICAgIFxuICB9IFxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZGVyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTZWMwMVZpZGVvXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFlvdXR1YmVGb3JTZWMwMSBmcm9tICcuL1lvdXR1YmVGb3JTZWMwMS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYzAxVmlkZW8ge1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtKXtcblxuICAgIC8vIHNlYzAxdmlkZW/nlKhcbiAgICBnYi5pbi5ybS50b3RhbCsrO1xuICAgIGlmIChnYi5pbi51LmlzU1ApIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuXG4gICAgaWYgKGdiLmluLnUuaXNQQykgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gY3JlYXRlXG4gICAgdGhpcy52aWRlbyA9IG5ldyBZb3V0dWJlRm9yU2VjMDEoJ3NlYzAxVmlkZW8nLCBnYi5pbi5jb25mLnlvdXR1YmVJRDAxLCBudWxsKTtcbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvU2VjMDFWaWRlby5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgWW91dHViZUZvclNlYzAxXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgRnVsbFNpemUgZnJvbSAnLi4vLi4vTXlMaWJzL0Rpc3BsYXkvTGF5b3V0L0Z1bGxTaXplLmpzJztcbmltcG9ydCBUb3BUaW1lIGZyb20gJy4uLy4uL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFlvdXR1YmVGb3JTZWMwMSB7XG5cbiAgY29uc3RydWN0b3IoaWQsdmlkZW9JRCx2aWRlb0xpc3QpIHtcblxuICAgIHRoaXMucGxheWVyID0gbnVsbDtcblxuICAgIHRoaXMuaXNGaXJzdCA9IHRydWU7XG4gICAgdGhpcy5pc1NlZWtMb2NrID0gZmFsc2U7XG4gICAgdGhpcy5pc1NlZWtMb2NrMDIgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0dXAoaWQsdmlkZW9JRCx2aWRlb0xpc3QpO1xuXG4gIH1cblxuICBzZXR1cChpZCx2aWRlb0lELHZpZGVvTGlzdCkge1xuXG4gICAgLy8geXQucGxheWVy77+977+9bG9hZO+/ve+/ve+/ve+/vcak77+977+9yqTvv73vv73vv73vv73PpPK/vJFd77+977+977+977+9XG4gICAgaWYoKHR5cGVvZiBZVCAhPT0gXCJ1bmRlZmluZWRcIikgJiYgWVQgJiYgWVQuUGxheWVyKXtcblxuICAgICAgICAvLyBjcmVhdGVcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgWVQuUGxheWVyKGlkLCB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLCAvLyDvv73Xpe+/vWDvv73vv71g77+9zrfvv71cbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLCAvLyDvv73Xpe+/vWDvv73vv71g77+9zrjfpO+/vVxuICAgICAgICAgICAgdmlkZW9JZDogdmlkZW9JRCwgLy8gWW91VHViZe+/ve+/vUlEXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgJ29uUmVhZHknOiB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSwgLy8g77+916Xvv71g77+977+9YO+/vc6cyoLkpKzvv73HpO+/ve+/ve+/ve+/vcik77+977+9y4xn77+977+9XG4gICAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogdGhpcy5vblBsYXllclN0YXRlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgICAgICAgIGF1dG9wbGF5OiAxLFxuICAgICAgICAgICAgICBjb250cm9sczogMCxcbiAgICAgICAgICAgICAgc2hvd2luZm86IDAsXG4gICAgICAgICAgICAgIGF1dG9oaWRlOiAxLFxuICAgICAgICAgICAgICByZWw6IDAsXG4gICAgICAgICAgICAgIGVuYWJsZWpzYXBpOiAxLFxuICAgICAgICAgICAgICBpdl9sb2FkX3BvbGljeTogMyxcbiAgICAgICAgICAgICAgZGlzYWJsZWtiOjEsXG4gICAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxuICAgICAgICAgICAgICBzdGFydDogMixcbiAgICAgICAgICAgICAgbG9vcDogMSxcbiAgICAgICAgICAgICAgLy8gcGxheWxpc3Q6IHZpZGVvTGlzdFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsYXlvdXRcbiAgICAgICAgdmFyIGwgPSBuZXcgRnVsbFNpemUoJCgnI2JnV3JhcCcpLCQoJyNzZWMwMVZpZGVvJyksMCwnRnVsbFNpemVTZWMwMVZpZGVvJyk7XG4gICAgICAgIGwudGFyZ2V0RGVmVyA9IDE5MjA7XG4gICAgICAgIGwudGFyZ2V0RGVmSCA9IDEwODA7XG4gICAgICAgIGwucnVuKCk7XG5cbiAgICB9ZWxzZXtcblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2V0dXAuYmluZCh0aGlzLGlkLHZpZGVvSUQsdmlkZW9MaXN0KSwgMTAwKTtcblxuICAgIH1cblxuXG4gIH1cblxuICBvblJlYWR5IChlKSB7XG5cbiAgICAvLyDvv73fve+/ve+/ve+/vcik77+9XG4gICAgZS50YXJnZXQuc2V0UGxheWJhY2tRdWFsaXR5KCdoaWdocmVzJyk7XG5cbiAgICAvLyB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gICAgLy8gcGxheVxuICAgIGdiLmluLnRpbWUgPSBuZXcgVG9wVGltZSgpO1xuICAgIGdiLmluLnNlYzAxVmlkZW8udmlkZW8ucGxheUJ5TllUaW1lKCk7XG5cbiAgfVxuXG4gIG9uUGxheWVyU3RhdGVDaGFuZ2UgKGUpIHtcblxuICAgIHZhciBzdGF0dXMgPSBlLmRhdGE7XG5cbiAgICAvLyDvv73vv73vv73vv73vv71L77+9y6Tvv73vv73vv73vv73IpO+/vSAwXG4gICAgaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuRU5ERUQpIHtcbiAgICAgXG4gICAgICAgIC8vIO+/vdO777+977+977+977+977+9XG4gICAgICAgIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyAvLyDvv73vv73vv73vv73vv73QpM6kyKTvv70gMVxuICAgIGlmIChzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLlBMQVlJTkcpIHtcblxuICAgICAgaWYgKHRoaXMuaXNGaXJzdCkge1xuICAgICAgICB0aGlzLmlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgICB9XG5cbiAgICAgIC8vIGUudGFyZ2V0LnBhdXNlVmlkZW8oKTtcblxuICAgIH1cblxuICAgIC8vIC8vIM2j1rnvv73QpM6kyKTvv70gMlxuICAgIC8vIGlmIChzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLlBBVVNFRCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnzaPWue+/ve+/vScpO1xuICAgIC8vIH1cblxuICAgIC8vIC8vIO+/vdClw6XVpe+/ve+/ve+/ve+/ve+/vdCkzqTIpO+/vSAzXG4gICAgLy8gaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCfvv73QpcOl1aXvv73vv73vv73vv73vv73vv70nKTtcbiAgICAvLyB9XG5cbiAgICAvLyAvLyDvv71e77+977+977+977+977+9Z++/vd+kzqTIpO+/vSA1IDXvv73vv73Wue+/vd6k77+9yKTvv73vv73vv73vv73rpKvvv73poaLvv73vv73vv73vv73vv73HpO+/vXBsYXlcbiAgICBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5DVUVEKSB7XG5cbiAgICAgICAgdGhpcy5wbGF5QnlOWVRpbWUoKTtcblxuICAgIH1cblxuXG4gICAgLy8gZm9yIHNhZmFyaSDvv73Vpe+/ve+/ve+/ve+/veulte+/ve+/ve+/ve+/ve+/vdik77+977+977+9XG4gICAgaWYgKGdiLmluLnUuaXNTYWZhcmkoKSAmJiBzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLkJVRkZFUklORykgdGhpcy5wbGF5ZXIuc2Vla1RvKHRoaXMucGxheWVyLmdldEN1cnJlbnRUaW1lKCkgKyAwLjEpO1xuXG4gIH1cblxuICBwbGF5QnlOWVRpbWUoKSB7XG5cbiAgICB2YXIgaCA9IGdiLmluLnRpbWUubnlIO1xuXG4gICAgaWYgKGggPj0gNSAmJiBoIDwgMTMpIHtcblxuICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKDApO1xuXG4gICAgfSBlbHNlIGlmIChoID49IDEzICYmIGggPCAxOCkge1xuXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8oMzYpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKDY2KTtcblxuICAgIH1cblxuICAgIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuXG5cbiAgfVxuXG4gIG9uU2VlaygpIHtcblxuICAgIHZhciBub3cgPSB0aGlzLnBsYXllci5nZXRDdXJyZW50VGltZSgpOyAgICBcblxuICAgIGlmIChub3cgPCAxLjApIHtcbiAgICAgIHRoaXMuaXNTZWVrTG9jayA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1NlZWtMb2NrMDIgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgaWYgKG5vdyA+IDkwICYmICF0aGlzLmlzU2Vla0xvY2spIHtcbiAgICB0aGlzLmlzU2Vla0xvY2sgPSB0cnVlO1xuXG4gICAgICBUd2Vlbk1heC50bygkKCcuYmdPdmVybGF5SW1nJyksIDMuMCwge1xuICAgICAgICAgIG9wYWNpdHk6IDEsIFxuICAgICAgICAgIGVhc2U6UG93ZXIzLmVhc2VJbk91dCxcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcbiAgICBpZiAobm93ID4gMS4wICYmICF0aGlzLmlzU2Vla0xvY2swMikge1xuICAgIHRoaXMuaXNTZWVrTG9jazAyID0gdHJ1ZTtcblxuICAgICAgVHdlZW5NYXgudG8oJCgnLmJnT3ZlcmxheUltZycpLCAzLjAsIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLCBcbiAgICAgICAgICBlYXNlOlBvd2VyMy5lYXNlSW5PdXQsXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi51cC5hZGQoJ1lvdXR1YmVGb3JTZWMwMScsdGhpcy5vblNlZWsuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcblxuICAgIGdiLmluLnVwLnJlbW92ZSgnWW91dHViZUZvclNlYzAxJyk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9Zb3V0dWJlRm9yU2VjMDEuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEZ1bGxTaXplXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2l6ZSB7XG5cbiAgY29uc3RydWN0b3IoJFdyYXAsJFRhcmdldCxtb2RlLCBuYW1lKSB7XG5cbiAgICB0aGlzLiR3cmFwID0gJFdyYXA7XG4gICAgdGhpcy4kdGFyZ2V0ID0gJFRhcmdldDtcblxuICAgIHRoaXMuVyA9IHRoaXMuJHdyYXAud2lkdGgoKTtcbiAgICB0aGlzLkggPSB0aGlzLiR3cmFwLmhlaWdodCgpO1xuICAgIHRoaXMudGFyZ2V0VztcbiAgICB0aGlzLnRhcmdldEg7XG4gICAgdGhpcy50YXJnZXREZWZXO1xuICAgIHRoaXMudGFyZ2V0RGVmSDtcbiAgICB0aGlzLnJhdGlvVztcbiAgICB0aGlzLnJhdGlvO1xuICAgIHRoaXMubWw7XG4gICAgdGhpcy5tdDtcblxuICAgIHRoaXMubW9kZSA9IG1vZGUgfHwgMDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lIHx8ICdmdWxsc2l6ZSc7XG5cbiAgICAvLyB0aGlzLmluaXQoKTtcbiAgICAvLyB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldFN0eWxlKCkge1xuXG4gICAgdGhpcy4kd3JhcC5jc3Moe1xuICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gICAgfSk7XG4gICAgdGhpcy4kdGFyZ2V0LmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcblxuICB9XG5cbiAgZ2V0RGVmKCkge1xuXG4gICAgdGhpcy50YXJnZXREZWZXID0gdGhpcy4kdGFyZ2V0LmdldCgwKS5jbGllbnRXaWR0aCB8fCB0aGlzLiR0YXJnZXQuZ2V0KDApLndpZHRoIHx8IHRoaXMuJHRhcmdldC53aWR0aCgpLFxuICAgIHRoaXMudGFyZ2V0RGVmSCA9IHRoaXMuJHRhcmdldC5nZXQoMCkuY2xpZW50SGVpZ2h0IHx8IHRoaXMuJHRhcmdldC5nZXQoMCkuaGVpZ2h0ICB8fCB0aGlzLiR0YXJnZXQuaGVpZ2h0KCk7XG5cbiAgfVxuXG4gIGdldFNpemUoKSB7XG5cbiAgICB0aGlzLlcgPSB0aGlzLiR3cmFwLndpZHRoKCk7XG4gICAgdGhpcy5IID0gdGhpcy4kd3JhcC5oZWlnaHQoKTsgXG5cbiAgICB0aGlzLnJhdGlvVyA9IHRoaXMuSCAvIHRoaXMuVztcbiAgICB0aGlzLnJhdGlvID0gdGhpcy50YXJnZXREZWZIIC8gdGhpcy50YXJnZXREZWZXLFxuXG4gICAgdGhpcy5tbCA9IC0gKHRoaXMudGFyZ2V0RGVmVyAqICh0aGlzLkggLyB0aGlzLnRhcmdldERlZkgpKSAvIDI7XG4gICAgdGhpcy5tdCA9IC0gKHRoaXMudGFyZ2V0RGVmSCAqICh0aGlzLlcgLyB0aGlzLnRhcmdldERlZlcpKSAvIDI7XG5cbiAgfVxuXG4gIHNldFBvcygpe1xuXG4gICAgICBpZiAodGhpcy5tb2RlID09ICdjb3ZlcicgfHwgdGhpcy5tb2RlID09IDApIHtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vICDmnqDjgavjg5Tjg4Pjgr/jg6rjgavjgarjgovjgojjgYbjgasgYmFja2dyb3VuZC1zaXplIGNvdmVyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBpZiAodGhpcy5yYXRpb1cgPiB0aGlzLnJhdGlvKSB7XG5cbiAgICAgICAgICB2YXIgdyA9ICh0aGlzLkggLyB0aGlzLnRhcmdldERlZkgpICogdGhpcy50YXJnZXREZWZXO1xuXG4gICAgICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgICAgLmNzcyh7J2hlaWdodCc6IHRoaXMuSH0pXG4gICAgICAgICAgICAgIC5jc3MoeydtYXJnaW4tdG9wJzogMCwnbWFyZ2luLWxlZnQnOiB0aGlzLm1sLCd0b3AnOjAsJ2xlZnQnOic1MCUnLCd3aWR0aCc6d30pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMucmF0aW9XIDw9IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgICAgdmFyIGggPSAodGhpcy5XIC8gdGhpcy50YXJnZXREZWZXKSAqIHRoaXMudGFyZ2V0RGVmSDtcblxuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAgIC5jc3Moeyd3aWR0aCc6IHRoaXMuV30pXG4gICAgICAgICAgICAgIC5jc3MoeydtYXJnaW4tdG9wJzogdGhpcy5tdCwnbWFyZ2luLWxlZnQnOiAwLCd0b3AnOic1MCUnLCdsZWZ0JzowLCdoZWlnaHQnOmh9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09ICdjb250YWluJyB8fCB0aGlzLm1vZGUgPT0gMSl7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyAg5p6g5YaF44Gr44OU44OD44K/44Oq5Y+O44G+44KL44KI44GG44GrIGJhY2tncm91bmQtc2l6ZSBjb250YWluXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBpZiAodGhpcy5yYXRpb1cgPCB0aGlzLnJhdGlvKSB7XG5cbiAgICAgICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgICAuY3NzKHsnaGVpZ2h0JzogdGhpcy5IfSlcbiAgICAgICAgICAgICAgLmNzcyh7J21hcmdpbi10b3AnOiAwLCdtYXJnaW4tbGVmdCc6IHRoaXMubWwsJ3RvcCc6MCwnbGVmdCc6JzUwJScsJ3dpZHRoJzonYXV0byd9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLnJhdGlvVyA+PSB0aGlzLnJhdGlvKSB7XG5cbiAgICAgICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgICAuY3NzKHsnd2lkdGgnOiB0aGlzLld9KVxuICAgICAgICAgICAgICAuY3NzKHsnbWFyZ2luLXRvcCc6IHRoaXMubXQsJ21hcmdpbi1sZWZ0JzogMCwndG9wJzonNTAlJywnbGVmdCc6MCwnaGVpZ2h0JzonYXV0byd9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0gXG5cbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgICB0aGlzLmdldERlZigpO1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgdGhpcy5nZXRTaXplKCk7XG4gICAgdGhpcy5zZXRQb3MoKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQodGhpcy5uYW1lLCB0aGlzLnJ1bi5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRGlzcGxheS9MYXlvdXQvRnVsbFNpemUuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFRvcFRpbWVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIDUwMHB45Lul5LiL44Gr44Gq44Gj44Gf44KJ6KGo56S6XG4vLyAgIOaZguioiGNvdW50XG4vLyAgIGNhbnZhc+ihqOekulxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BUaW1lIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJCgnLnRpbWVXcmFwJyk7XG4gICAgdGhpcy4kaDAxID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5oMDEnKTtcbiAgICB0aGlzLiRoMDIgPSB0aGlzLiR0YXJnZXQuZmluZCgnLmgwMicpO1xuICAgIHRoaXMuJG0wMSA9IHRoaXMuJHRhcmdldC5maW5kKCcubTAxJyk7XG4gICAgdGhpcy4kbTAyID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5tMDInKTtcblxuICAgIHRoaXMubnlIID0gMDtcblxuICAgIHRoaXMuaXNBbGVydCA9IChnYi5pbi5yLndzLmggPCA1MDApPyB0cnVlOiBmYWxzZTtcblxuICAgIHRoaXMuZGlzID0gMTQ7IC8v5pmC5beuXG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5ydW4oKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIGdiLmluLnUudGltZSgpO1xuICAgIHZhciBoID0gZ2IuaW4udS5ob3VyIC0gdGhpcy5kaXM7XG4gICAgaWYgKGg8MCkgaCA9IDI0ICsgaDtcbiAgICB0aGlzLm55SCA9IGg7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIC8vIOmWk+W8leOBjVxuICAgIGlmIChnYi5pbi51cC5jbnQlNjAhPT0wKSByZXR1cm47XG5cblxuICAgIGdiLmluLnUudGltZSgpO1xuXG4gICAgdmFyIGggPSBnYi5pbi51LmhvdXIgLSB0aGlzLmRpcztcbiAgICBpZiAoaDwwKSBoID0gMjQgKyBoO1xuXG4gICAgdGhpcy5ueUggPSBoO1xuXG4gICAgaCA9IGdiLmluLnUuYWRkMChoKS5zcGxpdCgnJyk7XG4gICAgdmFyIG0gPSBnYi5pbi51LmFkZDAoZ2IuaW4udS5taW51dGUpLnNwbGl0KCcnKTtcbiAgICB2YXIgcyA9IGdiLmluLnUuYWRkMChnYi5pbi51LnNlY29uZCkuc3BsaXQoJycpO1xuXG4gICAgdGhpcy4kaDAxLnRleHQoaFswXSlcbiAgICB0aGlzLiRoMDIudGV4dChoWzFdKVxuICAgIHRoaXMuJG0wMS50ZXh0KG1bMF0pXG4gICAgdGhpcy4kbTAyLnRleHQobVsxXSlcblxuICAgIC8vIHRoaXMuJGgwMS50ZXh0KHNbMF0pXG4gICAgLy8gdGhpcy4kaDAyLnRleHQoc1sxXSlcbiAgICAvLyB0aGlzLiRtMDEudGV4dChzWzBdKTtcbiAgICAvLyB0aGlzLiRtMDIudGV4dChzWzFdKTtcblxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgZ2IuaW4udXAuYWRkKCdUb3BUaW1lJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyDjgrPjg7Pjg57jga7ooajnpLrpnZ7ooajnpLpcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoe3JlcGVhdDogLTF9KTtcblxuICAgIHRsXG4gICAgICAuc2V0KHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSwge29wYWNpdHk6IDB9KVxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSwgMC41LCB7b3BhY2l0eTogMSxlYXNlOiBQb3dlcjIuZWFzZUluT3V0fSlcbiAgICAgIC50byh0aGlzLiR0YXJnZXQuZmluZCgnLmNvbG9uJyksIDAuNSwge29wYWNpdHk6IDAsZWFzZTogUG93ZXIyLmVhc2VJbk91dH0pXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG5cbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcblxuICAgIGdiLmluLnVwLnJlbW92ZSgnVG9wVGltZScpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDnkrDlooPliKTlrprjgq/jg6njgrko44OH44OQ44Kk44K544CB44OW44Op44Km44K2KeOAgeWQhOWIpOWumuODoeOCveODg+ODieips+e0sOOBr0RldmljZS5qc+OCkuWPgueFp1xuICogUHJvamVjdDpcbiAqIEZpbGU6IEp1ZGdlRW52aXJvbm1lbnRcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKdWRnZUVudmlyb25tZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOODh+ODkOOCpOOCueWIpOWumlxuICAgIGdiLmluLnUuaXNEZXZpY2VTUCgpO1xuICAgIGdiLmluLnUuaXNEZXZpY2VUQUIoKTtcbiAgICBnYi5pbi51LmlzRGV2aWNlTUIoKTtcbiAgICBnYi5pbi51LmlzRGV2aWNlUEMoKTtcblxuICAgIC8vIOODluODqeOCpuOCtuODkOODvOOCuOODp+ODs+WIpOWumlxuICAgIGdiLmluLnUuaXNJRVZlcnNpb24oKTtcblxuICAgIC8vIHJlc3BvbnNpdmUgLyBwb3J0cmFpdCAvIGxhbmRzY2FwZVxuICAgIGdiLmluLnUuaXNEaXJlY3Rpb24oKTtcbiAgICBnYi5pbi51LmlzUmVzcG9uc2l2ZShnYi5pbi5jb25mLmJwKTtcbiAgICBnYi5pbi5yLmFkZCgnaXNEaXJlY3Rpb24nLCBnYi5pbi51LmlzRGlyZWN0aW9uLmJpbmQoZ2IuaW4udSkpO1xuICAgIGdiLmluLnIuYWRkKCdpc1Jlc3BvbnNpdmUnLCBnYi5pbi51LmlzUmVzcG9uc2l2ZS5iaW5kKGdiLmluLnUsIGdiLmluLmNvbmYuYnApKTtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG4gICAgICAgXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9KdWRnZUVudmlyb25tZW50LmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBSZXNwb25zaXZlU3dpdGNoSW1nXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlU3dpdGNoSW1nIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdGhpcy5pc1BDTG9jayA9IChnYi5pbi51LmlzUmVzUEMpPyBmYWxzZTogdHJ1ZTtcbiAgICB0aGlzLmlzU1BMb2NrID0gKGdiLmluLnUuaXNSZXNTUCk/IGZhbHNlOiB0cnVlO1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJCgnLnJlc3BvbnNpdmVJbWcnKTtcblxuICB9XG5cbiAgcnVuICgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4jjgojjgorjgoJzcOWBtFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChnYi5pbi51LmlzUmVzU1AgJiYgIXRoaXMuaXNTUExvY2spIHtcbiAgICAgIHRoaXMuaXNQQ0xvY2sgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTUExvY2sgPSB0cnVlO1xuXG4gICAgICBsb2coMTEpO1xuXG4gICAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuICAgICAgICBzcmMgPSBnYi5pbi51LnN0clJlcGxhY2Uoc3JjLCAnX3BjJywgJ19zcCcpO1xuICAgICAgICAkKHRoaXMpLm9mZignbG9hZCcpO1xuICAgICAgICAkKHRoaXMpLm9uKCdsb2FkJywgKGV2ZW50KT0+e1xuXG4gICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NwU2l6ZScpKSBnYi5pbi51LnNldEltZ1NQU2l6ZSgkKHRoaXMpKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLHNyYyk7XG5cbiAgICAgICAgLy8gJCh0aGlzKS5hdHRyKCdzcmMnLHNyYyk7XG4gICAgICAgIC8vIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzcFNpemUnKSkgZ2IuaW4udS5zZXRJbWdTUFNpemUoJCh0aGlzKSk7XG5cbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXNwb25zaXZlaW1n44GM44Gk44GE44Gm44Gq44GE44KC44Gu44Gn44CBc3BTaXpl44GM44Gk44GE44Gm44KL44KC44Gu44GvMS8yXG4gICAgICBnYi5pbi51LnNldEltZ1NQU2l6ZSgkKCcuc3BTaXplJykubm90KCcucmVzcG9uc2l2ZUltZycpKTtcblxuICAgIH0gXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OW44Os44Kk44Kv44Od44Kk44Oz44OI44KI44KK44KCcGPlgbRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1BDICYmICF0aGlzLmlzUENMb2NrKSB7XG4gICAgICB0aGlzLmlzUENMb2NrID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNTUExvY2sgPSBmYWxzZTtcblxuICAgICAgbG9nKDIyKTtcblxuICAgICAgdGhpcy4kdGFyZ2V0LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcbiAgICAgICAgc3JjID0gZ2IuaW4udS5zdHJSZXBsYWNlKHNyYywgJ19zcCcsICdfcGMnKTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoe3dpZHRoOiAnYXV0bycsaGVpZ2h0OiAnYXV0byd9KTtcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLHNyYyk7XG5cbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXNwb25zaXZlaW1n44GM44Gk44GE44Gm44Gq44GE44KC44Gu44Gn44CBc3BTaXpl44GM44Gk44GE44Gm44KL44KC44Gu44GvYXV0b+OBq1xuICAgICAgJCgnLnNwU2l6ZScpLm5vdCgnLnJlc3BvbnNpdmVJbWcnKS5hdHRyKHt3aWR0aDogJ2F1dG8nLGhlaWdodDogJ2F1dG8nfSk7XG5cbiAgICAgIC8vIHNw44Gv44Gq44Gc44GLbG9hZOOCpOODmeODs+ODiOOBjOWRvOOBsOOCjOOBquOBhOOBruOBp+OAgeOBk+OBo+OBoeOBp+WHpueQhlxuICAgICAgLy8gaWYgKGdiLmluLnUuaXNTUCkgJCgnLnJlc3BvbnNpdmVJbWcnKS5hdHRyKHt3aWR0aDogJ2F1dG8nLGhlaWdodDogJ2F1dG8nfSk7XG5cbiAgICB9XG5cbiAgfVxuICAgICAgIFxuICByZXN1bWUoKSB7XG5cbiAgICAvLyBsb2coJ3Jlc3VtZScpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMucnVuKCk7XG5cbiAgICBnYi5pbi5yLnJlbW92ZSgncmVzcG9uc2l2ZVN3aXRjaEltZycpO1xuICAgIGdiLmluLnIuYWRkKCdyZXNwb25zaXZlU3dpdGNoSW1nJywgdGhpcy5ydW4uYmluZCh0aGlzKSk7XG5cbiAgfVxuICAgICAgIFxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCgncmVzcG9uc2l2ZVN3aXRjaEltZycsIHRoaXMucnVuLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvX2V2ZW50cy9SZXNwb25zaXZlU3dpdGNoSW1nLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFN3aXBlVHJhbnNpdGlvbiBzc3Ncbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVUcmFuc2l0aW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBkb21cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB0aGlzLiRzdGFydFdyYXAgPSAkKCcuc2VjdGlvbjAxLCAuc2VjdGlvbjAyIC5uZXh0LCAuc2VjdGlvbjAzIC5ib3gwNScpO1xuICAgIC8vIHRoaXMuJHN0YXJ0V3JhcCA9ICQoJy5zZWN0aW9uMDInKTtcbiAgICB0aGlzLiRzdGFydFdyYXAgPSAkKHdpbmRvdyk7XG4gICAgdGhpcy4kZW5kV3JhcCA9ICQod2luZG93KTtcblxuICAgIHRoaXMucGFnZUxpc3QgPSB7XG4gICAgICAndG9wJzogMCxcbiAgICAgICdtb3ZpZSc6IDEsXG4gICAgICAnaW50ZXJ2aWV3JzogMixcbiAgICAgICdoaXN0b3J5JzogMyxcbiAgICB9XG5cbiAgICAvLyB2YXJpYWJsZVxuICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgdGhpcy5vbGQgPSBudWxsO1xuICAgIHRoaXMubmV4dCA9IDE7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmxlbiA9IDQ7XG5cbiAgICB0aGlzLmlzTG9jayA9IGZhbHNlO1xuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgdmFyaWFibGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIHBvc2l0aW9uXG4gICAgdGhpcy5zWCA9IDA7dGhpcy5tWCA9IDA7dGhpcy5lWCA9IDA7IC8vc3RhcnRYLG1vdmVYLGVuZFhcbiAgICB0aGlzLmRpcyA9IDA7dGhpcy5taW5EaXMgPSAxNTtcblxuICAgIC8vIHRpbWVcbiAgICB0aGlzLnNUPTA7dGhpcy5lVD0wO3RoaXMubWluVCA9IDMwMDsgLy9zdGFydFRpbWUsZWxsYXBzZWRUaW1lLFxuXG4gICAgdGhpcy5XID0gZ2IuaW4uci5XKCk7XG5cbiAgICB0aGlzLm9uVG91Y2hMb25nID0gKCk9Pnt9O1xuICAgIHRoaXMub25Ub3VjaFN0YXJ0Q0IgPSAoKT0+e307XG4gICAgdGhpcy5vblRvdWNoRW5kQ0IgPSAoKT0+e307XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIG9uVG91Y2hTdGFydCAoZSkge1xuXG4gICAgLy8gdGFyZ2V0WFxuICAgIHZhciB5ID0gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgIHRoaXMuc1kgPSB5O1xuXG4gICAgdGhpcy5zdCA9IGdiLmluLnMuc3Q7XG4gICAgdGhpcy5zYiA9IGdiLmluLnMuc2I7XG4gICAgbG9nKCdzeScseSlcblxuICB9XG5cbiAgb25Ub3VjaE1vdmUgKGUpIHtcblxuICAgIC8vIHRhcmdldFhcbiAgICB2YXIgeSA9IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICB0aGlzLm1ZID0geTtcblxuICB9XG5cbiAgb25Ub3VjaEVuZCAoZSkge1xuXG4gICAgaWYgKHRoaXMuaXNMb2NrKSByZXR1cm47ICAgIFxuXG4gICAgdmFyIHkgPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgdGhpcy5lWSA9IHk7XG5cbiAgICB2YXIgZGlzID0gdGhpcy5zWSAtIHRoaXMuZVk7XG4gICAgdmFyIGFic0RpcyA9IE1hdGguYWJzKGRpcyk7XG5cbiAgICAvLyDmnIDlsI/ot53pm6LjgojjgorplbfjgYvjgaPjgZ/jgonjgIHlh6bnkIZcbiAgICBpZiggdGhpcy5taW5EaXMgPCBhYnNEaXMpIHtcblxuICAgICAgLy8g44Oa44O844K455Wq5Y+344KS5Y+W5b6XXG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnBhZ2VMaXN0W2diLmluLnBqYXguaWRdO1xuXG4gICAgICBpZiAoZGlzID4gMCkge1xuXG4gICAgICAgIHZhciBoID0gJCgnLnNlY3Rpb24nKS5oZWlnaHQoKSpnYi5pbi5MYXlvdXQuc2l6ZS5zY2FsZS5yYXRlO1xuICAgICAgICBsb2codGhpcy5zYixoLTEwLHRoaXMuc2IgPCBoLTEwKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50IT09MCAmJiB0aGlzLnNiIDwgaC0xMCkgcmV0dXJuO1xuICAgICAgICAvLyBoaXN0b3J544Oa44O844K444Gu5aC05ZCI44Gv5Yem55CG44GX44Gq44GEXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQ9PTMpIHJldHVybjtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCduZXh0Jyk7XG5cbiAgICAgICAgLy8g44GX44Gf44G4XG4gICAgICAgIHZhciBwYWdlTmFtZSA9IE9iamVjdC5rZXlzKHRoaXMucGFnZUxpc3QpLmZpbHRlciggKGtleSkgPT4geyByZXR1cm4gdGhpcy5wYWdlTGlzdFtrZXldID09PSB0aGlzLmN1cnJlbnQgfSlbMF07XG4gICAgICAgICQoJy5wamF4VG9fJytwYWdlTmFtZSkudHJpZ2dlcignY2xpY2snKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBsb2codGhpcy5zdCx0aGlzLnN0ICE9PSAwKTtcblxuICAgICAgICBpZiAodGhpcy5zdCAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIOS4iuOBuFxuICAgICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCdwcmV2Jyk7XG5cbiAgICAgICAgdmFyIHBhZ2VOYW1lID0gT2JqZWN0LmtleXModGhpcy5wYWdlTGlzdCkuZmlsdGVyKCAoa2V5KSA9PiB7IHJldHVybiB0aGlzLnBhZ2VMaXN0W2tleV0gPT09IHRoaXMuY3VycmVudCB9KVswXTtcbiAgICAgICAgJCgnLnBqYXhUb18nK3BhZ2VOYW1lKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICB9XG5cblxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgYmx1cuino+mZpFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmlzTm90VG91Y2ggPSB0cnVlO1xuXG4gICAgLy8g44Kz44O844Or44OQ44OD44KvXG4gICAgdGhpcy5vblRvdWNoRW5kQ0IoKTtcblxuICB9XG5cbiAgY2FsY3VsYXRlT3JkZXIoZGlyKSB7XG5cbiAgICB0aGlzLm9sZCA9IHRoaXMuY3VycmVudDtcblxuICAgIGlmIChkaXI9PSduZXh0Jykge1xuXG4gICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQ+dGhpcy5sZW4tMSkgdGhpcy5jdXJyZW50PXRoaXMubGVuLTE7XG4gICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5jdXJyZW50LS07XG4gICAgICBpZiAodGhpcy5jdXJyZW50PDApIHRoaXMuY3VycmVudD0wOyAgXG4gICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgfSAgICAgXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpe1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kc3RhcnRXcmFwLm9uKCd0b3VjaHN0YXJ0LlN3aXBlVHJhbnNpdGlvbicsIChlKT0+e3RoaXMub25Ub3VjaFN0YXJ0KGUpO30pO1xuICAgIC8vIHRoaXMuJHdyYXAub24oJ3RvdWNobW92ZS5Td2lwZVRyYW5zaXRpb24nLCAoZSk9Pnt0aGlzLm9uVG91Y2hNb3ZlKGUpO30pO1xuICAgIHRoaXMuJGVuZFdyYXAub24oJ3RvdWNoZW5kLlN3aXBlVHJhbnNpdGlvbicsIChlKT0+e3RoaXMub25Ub3VjaEVuZChlKTt9KTtcblxuICB9XG5cbiAgIHJlbW92ZUV2ZW50cygpe1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kc3RhcnRXcmFwLm9mZigndG91Y2hzdGFydC5Td2lwZVRyYW5zaXRpb24nKTtcbiAgICAvLyB0aGlzLiR3cmFwLm9mZigndG91Y2htb3ZlLlN3aXBlVHJhbnNpdGlvbicpO1xuICAgIHRoaXMuJGVuZFdyYXAub2ZmKCd0b3VjaGVuZC5Td2lwZVRyYW5zaXRpb24nKTtcblxuICB9XG5cblxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU3dpcGVUcmFuc2l0aW9uLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTY3JvbGxUcmFuc2l0aW9uXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxUcmFuc2l0aW9uIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLnBhZ2VMaXN0ID0ge1xuICAgICAgJ3RvcCc6IDAsXG4gICAgICAnbW92aWUnOiAxLFxuICAgICAgJ2ludGVydmlldyc6IDIsXG4gICAgICAnaGlzdG9yeSc6IDMsXG4gICAgfVxuXG4gICAgLy8gdmFyaWFibGVcbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgIHRoaXMub2xkID0gbnVsbDtcbiAgICB0aGlzLm5leHQgPSAxO1xuICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgdGhpcy5sZW4gPSA0O1xuXG4gICAgdGhpcy5pc1N3aXRjaCA9IHRydWU7XG5cblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBzd2l0Y2goKSB7XG5cbiAgICBpZiAoIWdiLmluLnUuaXNJRSkgdmFyIHZhbCA9IDMwO1xuICAgIGVsc2UgdmFyIHZhbCA9IDA7XG5cbiAgICAvLyBsb2coZ2IuaW4ucGpheC5pc1BqYXhMb2NrLHRoaXMuU1RBbW91bnQsdGhpcy5jdXJyZW50LHRoaXMuaXNTd2l0Y2gpO1xuXG4gICAgLy8gcGpheGxvY2vmmYLjga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4ucGpheC5pc1BqYXhMb2NrKSByZXR1cm47XG5cbiAgICAvLyDjg5rjg7zjgrjnlarlj7fjgpLlj5blvpdcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnBhZ2VMaXN0W2diLmluLnBqYXguaWRdO1xuXG4gICAgLy/jg5vjgqTjg7zjg6vjgYww5Lul5LiKIOOBi+OBpCBjdXJyZW5044GM5LiA55Wq5pyA5Yid44Gn44Gq44GEIOOBi+OBpCBzd2l0Y2jlj6/og73nirbmhYvjgafjgYLjgozjgbBcbiAgICBpZiAodGhpcy5TVEFtb3VudCA+IHZhbCAmJiB0aGlzLmN1cnJlbnQgPiAwICYmIHRoaXMuaXNTd2l0Y2gpIHtcblxuICAgICAgLy8gaGlzdG9yeeODmuODvOOCuOOBruOBqOOBjeOBr+S4iuOCueOCr+ODreODvOODq+OBl+OBpuOCgmludGVydmlldyBpbmRleOOBq+mjm+OBsOOBleOBquOBhFxuICAgICAgaWYgKGdiLmluLnBqYXguaWQ9PSdoaXN0b3J5JykgcmV0dXJuO1xuXG4gICAgICB0aGlzLmlzU3dpdGNoID0gZmFsc2U7XG4gIFxuICAgICAgdGhpcy5jYWxjdWxhdGVPcmRlcigncHJldicpO1xuXG4gICAgICB2YXIgcGFnZU5hbWUgPSBPYmplY3Qua2V5cyh0aGlzLnBhZ2VMaXN0KS5maWx0ZXIoIChrZXkpID0+IHsgcmV0dXJuIHRoaXMucGFnZUxpc3Rba2V5XSA9PT0gdGhpcy5jdXJyZW50IH0pWzBdO1xuXG4gICAgICAkKCcucGpheFRvXycrcGFnZU5hbWUpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cblxuICAgIC8v44Ob44Kk44O844Or44GMMOS7peS4iyDjgYvjgaQgY3VycmVudOOBjOS4gOeVquacgOW+jOOBp+OBquOBhCDjgYvjgaQgc3dpdGNo5Y+v6IO954q25oWL44Gn44GC44KM44GwXG4gICAgfSBlbHNlIGlmKHRoaXMuU1RBbW91bnQgPCAtdmFsICYmIHRoaXMuY3VycmVudCA8IHRoaXMubGVuLTEgJiYgdGhpcy5pc1N3aXRjaCkge1xuXG4gICAgICB0aGlzLmlzU3dpdGNoID0gZmFsc2U7XG4gICAgICBcbiAgICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ25leHQnKTtcblxuICAgICAgdmFyIHBhZ2VOYW1lID0gT2JqZWN0LmtleXModGhpcy5wYWdlTGlzdCkuZmlsdGVyKCAoa2V5KSA9PiB7IHJldHVybiB0aGlzLnBhZ2VMaXN0W2tleV0gPT09IHRoaXMuY3VycmVudCB9KVswXTtcblxuICAgICAgJCgnLnBqYXhUb18nK3BhZ2VOYW1lKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgfTtcblxuXG4gIH1cblxuICBjYWxjdWxhdGVPcmRlcihkaXIpIHtcblxuICAgIHRoaXMub2xkID0gdGhpcy5jdXJyZW50O1xuXG4gICAgaWYgKGRpcj09J25leHQnKSB7XG5cbiAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgaWYgKHRoaXMuY3VycmVudD50aGlzLmxlbi0xKSB0aGlzLmN1cnJlbnQ9dGhpcy5sZW4tMTtcbiAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLmN1cnJlbnQtLTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQ8MCkgdGhpcy5jdXJyZW50PTA7ICBcbiAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICB9ICAgICBcblxuICB9XG5cbiAgb25Nb3VzZVdoZWVsKGUsIGRlbHRhLCBkZWx0YVgsIGRlbHRhWSkge1xuXG4gICAgLy8gbWVudeOBjOmWi+OBhOOBpuOBhOOCi+OBqOOBjeOBr+OCueOCr+ODreODvOODq+mBt+enu+OBleOBm+OBquOBhFxuICAgIGlmIChnYi5pbi5tZW51LmlzT3BlbikgcmV0dXJuO1xuICAgIC8vIHJlcyBzcOOBruOBqOOBjeOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChnYi5pbi51LmlzUmVzU1ApIHJldHVyblxuXG4gICAgdGhpcy5TVEFtb3VudCA9IGdiLmluLnMuU1RBbW91bnQ7XG4gICAgXG4gICAgdGhpcy5zd2l0Y2goKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgICBnYi5pbi5zLmFkZCgnU2Nyb2xsVHJhbnNpdGlvbicsIHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcykpO1xuXG5cbiAgfVxuICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1Njcm9sbFRyYW5zaXRpb24uanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU25zXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBtZXRhRGF0YSBmcm9tIFwianNvbi1sb2FkZXIhLi4vLi4vLi4vLi4vZWpzL2luYy9tZXRhRGF0YS5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNucyB7XG5cbiAgY29uc3RydWN0b3IoJGZiLCR0dywkbGluZSwkbWFpbCl7XG5cbiAgICB0aGlzLiRmYiA9ICRmYjtcbiAgICB0aGlzLiR0dyA9ICR0dztcbiAgICB0aGlzLiRsaW5lID0gJGxpbmU7XG4gICAgdGhpcy4kbWFpbCA9ICRtYWlsO1xuXG4gICAgdGhpcy5mYiA9IHtcbiAgICAgICR0YXJnZXQ6ICRmYixcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgfVxuXG4gICAgdGhpcy50dyA9IHtcbiAgICAgICR0YXJnZXQ6ICR0dyxcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgICBoYXNoOiAnaGFzaCcsXG4gICAgfVxuXG4gICAgdGhpcy5saW5lID0ge1xuICAgICAgJHRhcmdldDogJGxpbmUsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgIH1cblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHN3aXRjaE1ldGEoKSB7XG5cbiAgICB2YXIgcCA9IGdiLmluLnBqYXguaWQ7XG4gICAgaWYgKHAgPT0gJ2ludGVydmlld19kZXRhaWwnKSB7XG5cbiAgICAgIGxvZygkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDEnKSk7XG4gICAgICBpZiAoJCgnLnNlY3Rpb24nKS5oYXNDbGFzcygnc2VjdGlvbjAzX2RldGFpbDAxJykpIHAgPSAnaW50ZXJ2aWV3RGV0YWlsMDEnO1xuICAgICAgZWxzZSBpZiAoJCgnLnNlY3Rpb24nKS5oYXNDbGFzcygnc2VjdGlvbjAzX2RldGFpbDAyJykpIHAgPSAnaW50ZXJ2aWV3RGV0YWlsMDInO1xuICAgICAgZWxzZSBpZiAoJCgnLnNlY3Rpb24nKS5oYXNDbGFzcygnc2VjdGlvbjAzX2RldGFpbDAzJykpIHAgPSAnaW50ZXJ2aWV3RGV0YWlsMDMnO1xuICBcbiAgICB9XG5cbiAgICAvLyB2YXIgZCA9IGdiLmluLmNvbmYubWV0YVtwXTtcbiAgICB2YXIgZCA9IG1ldGFEYXRhW3BdO1xuXG4gICAgJCgndGl0bGUnKS50ZXh0KCk7XG4gICAgJCgnLm1ldGFEZXMnKS5hdHRyKHsnY29udGVudCc6IGQuZGVzY3JpcHRpb259KTtcbiAgICAkKCcubWV0YUtleScpLmF0dHIoeydjb250ZW50JzogZC5rZXl3b3JkfSk7XG5cbiAgICAkKCcuZmJUaXQnKS5hdHRyKHsnY29udGVudCc6IGQuZmIudGl0fSk7XG4gICAgJCgnLmZiRGVzJykuYXR0cih7J2NvbnRlbnQnOiBkLmZiLmRlc30pO1xuICAgICQoJy5mYkltZycpLmF0dHIoeydjb250ZW50JzogZC5mYi5pbWd9KTtcbiAgICAkKCcuZmJVcmwnKS5hdHRyKHsnY29udGVudCc6IGQuZmIudXJsfSk7XG5cbiAgICAkKCcudHdUaXQnKS5hdHRyKHsnY29udGVudCc6IGQudHcudGl0fSk7XG4gICAgJCgnLnR3RGVzJykuYXR0cih7J2NvbnRlbnQnOiBkLnR3LmRlc30pO1xuICAgICQoJy50d0ltZycpLmF0dHIoeydjb250ZW50JzogZC50dy5pbWd9KTtcbiAgICAkKCcudHdVcmwnKS5hdHRyKHsnY29udGVudCc6IGQudHcudXJsfSk7XG5cblxuICB9XG5cbiAgc2V0dGluZygpIHtcblxuICAgIHRoaXMuZmIgPSB7XG4gICAgICAkdGFyZ2V0OiB0aGlzLiRmYixcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgfVxuXG4gICAgdGhpcy50dyA9IHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuJHR3LFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICAgIGhhc2g6ICdoYXNoJyxcbiAgICB9XG5cbiAgICB0aGlzLmxpbmUgPSB7XG4gICAgICAkdGFyZ2V0OiB0aGlzLiRsaW5lLFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICB9XG5cbiAgfVxuXG4gIHNldE9nSW1nKCkge1xuXG4gICAgLy8gJCgnLm9nSW1nX2ZiJykuYXR0cignY29udGVudCcsIHRoaXMuZmIuaW1nKTtcbiAgICAvLyAkKCcub2dJbWdfdHcnKS5hdHRyKCdjb250ZW50JywgdGhpcy50dy5pbWcpO1xuXG4gIH1cblxuICBqdW1wRkIoZSkge1xuXG4gICAgICB0aGlzLm9wZW5XaW5kb3coJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PScgKyB0aGlzLmZiLnVybCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cblxuICBqdW1wVFcoZSkge1xuXG4gICAgdGhpcy5vcGVuV2luZG93KCdodHRwOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0nICsgdGhpcy50dy51cmwgKyAnJnRleHQ9JyArIHRoaXMudHcuZGVzKTtcbiAgICAvLyB0aGlzLm9wZW5XaW5kb3coJ2h0dHA6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPScgKyB0aGlzLnR3LnVybCArICcmdGV4dD0nICsgdGhpcy50dy50ZXh0ICsgJyZoYXNodGFncz0nICsgdGhpcy50dy5oYXNoKTtcblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAganVtcExJTkUoKSB7XG5cbiAgICAgIHRoaXMub3BlbldpbmRvdygnaHR0cDovL2xpbmUubWUvUi9tc2cvdGV4dC8/JyArIHRoaXMubGluZS50aXQgKyAnJTBBJyArIHRoaXMubGluZS51cmwpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvblNlbmRNYWlsKCkge1xuXG4gICAgdmFyIGFkZHJlc3MgPSAnJztcbiAgICB2YXIgc3ViID0gJyc7XG4gICAgdmFyIGJvZHkgPSBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkrJ1xcbicrbG9jYXRpb24uaHJlZik7XG5cbiAgICBsb2NhdGlvbi5ocmVmID0gJ21haWx0bzonICsgYWRkcmVzcyArICc/c3ViamVjdD0nICsgc3ViICsgJyZib2R5PScgKyBib2R5O1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICBvcGVuV2luZG93KHVybCwgdywgaCkge1xuXG4gICAgICBpZih3ID09PSB1bmRlZmluZWQpIHcgPSA2MDA7XG4gICAgICBpZihoID09PSB1bmRlZmluZWQpIGggPSA2MDA7XG5cbiAgICAgIHZhciBsID0gTnVtYmVyKCh3aW5kb3cuc2NyZWVuLndpZHRoLXcpLzIpO1xuICAgICAgdmFyIHQgPSBOdW1iZXIoKHdpbmRvdy5zY3JlZW4uaGVpZ2h0LWgpLzIpO1xuXG4gICAgICB3aW5kb3cub3Blbih1cmwsJ25ld193aW5kb3cnLFxuICAgICAgICAgICAgICAgICdtZW51YmFyPW5vLCcgK1xuICAgICAgICAgICAgICAgICd0b29sYmFyPW5vLCcgK1xuICAgICAgICAgICAgICAgICdyZXNpemFibGU9eWVzLCcgK1xuICAgICAgICAgICAgICAgICdzY3JvbGxiYXJzPXllcywnICtcbiAgICAgICAgICAgICAgICAnaGVpZ2h0PScgKyBoICsgJywnICtcbiAgICAgICAgICAgICAgICAnd2lkdGg9JyArIHcgKyAnLCcgK1xuICAgICAgICAgICAgICAgICdsZWZ0PScgKyBsICsgJywnICtcbiAgICAgICAgICAgICAgICAndG9wPScgKyB0XG4gICAgICAgICAgICAgICk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHRoaXMuZmIuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLmp1bXBGQi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnR3LiR0YXJnZXQub24oJ2NsaWNrJywgdGhpcy5qdW1wVFcuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5saW5lLiR0YXJnZXQub24oJ2NsaWNrJywgdGhpcy5qdW1wTElORS5iaW5kKHRoaXMpKTtcbiAgICBpZiAodGhpcy4kbWFpbCkgdGhpcy4kbWFpbC5vbignY2xpY2snLCAoKT0+e3RoaXMub25TZW5kTWFpbCgpO3JldHVybiBmYWxzZTt9KTtcblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuXG4gICAgdGhpcy5mYi4kdGFyZ2V0Lm9mZignY2xpY2snKTtcbiAgICB0aGlzLnR3LiR0YXJnZXQub2ZmKCdjbGljaycpO1xuICAgIHRoaXMubGluZS4kdGFyZ2V0Lm9mZignY2xpY2snKTtcbiAgICBpZiAodGhpcy4kbWFpbCkgdGhpcy4kbWFpbC5vZmYoJ2NsaWNrJyk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9TbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZXNjcmlwdGlvblwiOiBcImRlc2N0aXB0aW9uXCIsXG5cdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcIm9ncEltZ1BhdGhcIjogXCJcIixcblx0XCJ0b3BcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwibW92aWVcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaW50ZXJ2aWV3XCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAxXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAyXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAzXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImhpc3RvcnlcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2pzb24tbG9hZGVyIS9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2Vqcy9pbmMvbWV0YURhdGEuanNvblxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMYXlvdXRcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBTaXplIGZyb20gJy4vU2l6ZS9TaXplLmpzJztcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL1Bvc3Rpb24vUG9zaXRpb24uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgICB0aGlzLnNpemUgPSBuZXcgU2l6ZSgpOyAvLyBhZGp1c3Qgc2l6ZVxuXG4gICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKCk7IC8vIGFkanVzdCBwb3NpdGlvblxuICAgICAgXG4gIH1cblxuICBzdGF0aWMgcmVzZXQoKSB7XG5cbiAgICAvLyBzY2FsZeOBp+Wkp+OBjeOBj+OBl+OBpuOBhOOCi+mWouS/guS4iuOAgemrmOOBleOCkjEwMCXjgavjgZfjgabjga/jgYTjgZHjgarjgYRcbiAgICBpZiAoZ2IuaW4ucGpheC5pZCA9PSAnaGlzdG9yeScgfHwgZ2IuaW4ucGpheC5pZCA9PSAnaW50ZXJ2aWV3X2RldGFpbCcpIHtcblxuICAgICAgVHdlZW5NYXguc2V0KCQoJyNpbm5lcicpLCB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgfSk7XG4gICAgICBUd2Vlbk1heC5zZXQoJCgnI2JnV3JhcCcpLCB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgfSk7XG5cbiAgICAgIFR3ZWVuTWF4LnNldCgkKCcjd3JhcHBlcicpLCB7XG4gICAgICAgICdvdmVyZmxvdyc6J3Zpc2libGUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBUd2Vlbk1heC5zZXQoJCgnI2lubmVyLCAjYmdXcmFwJyksIHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nOicwIDAnXG4gICAgICB9KTtcblxuICAgICAgVHdlZW5NYXguc2V0KCQoJyN3cmFwcGVyJyksIHtcbiAgICAgICAgJ292ZXJmbG93JzondmlzaWJsZScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICB9KTtcblxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuICAgICAgIFxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9MYXlvdXQuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNpemVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBTY2FsZSBmcm9tICcuL1NjYWxlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2l6ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG4gICAgXG4gICAgLy8gZ2IuaW4udS5zZXRJbWdTUFNpemUoJCgnaW1nJykpOyAvLyBmb3Igc3AgaW1nXG5cbiAgICAvLyBuZXcgZ2IuUmVzcG9uc2l2ZUZvbnRTaXplKCQoJy5mb250UmVzcG9uc2l2ZScpKTsgLy/jg6zjgrnjg53jg7Pjgrfjg5bmmYLjg5Xjgqnjg7Pjg4jjgrXjgqTjgrrjga7lpInmm7RcblxuICAgIHRoaXMuc2NhbGUgPSBuZXcgU2NhbGUoKTsgLy8gcmVzaXplXG5cblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICAvLyBnYi5pbi51LnNldEltZ1NQU2l6ZSgkKCdpbWcnKSk7IC8vIGZvciBzcCBpbWdcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgLy8gZ2IuaW4uci5hZGQodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcblxuICB9XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2l6ZS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTGF5b3V0XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5TUEJhc2VXID0gMzc1O1xuICAgIHRoaXMuUENCYXNlVyA9IDEzMDA7XG5cbiAgICB0aGlzLnJhdGUgPSAxO1xuICAgIHRoaXMuVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdGhpcy4kdGFyZ2V0TGlzdCA9IFtcbiAgICAgIHtcbiAgICAgICAgJyR0YXJnZXQnOiAkKCcubWVudUlubmVyJyksXG4gICAgICAgICdzY2FsZSc6ICdzcE9ubHknIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgJyR0YXJnZXQnOiAkKCcuc2VjdGlvbjAzX2RldGFpbCcpLFxuICAgICAgLy8gICAnc2NhbGUnOiAnYm90aCcgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAnJHRhcmdldCc6ICQoJy5zZWN0aW9uMDQnKSxcbiAgICAgIC8vICAgJ3NjYWxlJzogJ2JvdGgnIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgLy8gfSxcbiAgICBdXG5cbiAgICB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIFxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgdGhpcy5XID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5pVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdGhpcy5zY2FsZSgpO1xuICAgIHRoaXMud3JhcCgpO1xuXG4gIH1cblxuICAvLyDmi6HlpKdcbiAgc2NhbGUoKSB7XG5cbiAgICAvLyBicOOBruWgtOWQiOOBrnNjYWxlXG4gICAgaWYgKHRoaXMuaVcgPD0gZ2IuaW4uY29uZi5icCkge1xuXG4gICAgICAvLyB3aWR0aOOBi+OCiXJhdGXjgpLoqIjnrpdcbiAgICAgIC8vIHRoaXMucmF0ZSA9IGdiLmluLnUuZmxvYXRGb3JtYXQodGhpcy5XIC8gdGhpcy5TUEJhc2VXICwgMik7XG4gICAgICB0aGlzLnJhdGUgPSB0aGlzLlcgLyB0aGlzLlNQQmFzZVc7XG5cbiAgICAgIC8vIHNjYWxl44GZ44KL44Oq44K544OI44KS44Or44O844OXXG4gICAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnYm90aCcgfHwgdmFsLnNjYWxlID09ICdzcE9ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLlNQQmFzZVcsXG4gICAgICAgICAgICBzY2FsZTogdGhpcy5yYXRlLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gd2lkdGjjgYvjgolyYXRl44KS6KiI566XXG4gICAgICAvLyB0aGlzLnJhdGUgPSBnYi5pbi51LmZsb2F0Rm9ybWF0KHRoaXMuVyAvIHRoaXMuUENCYXNlVyAsIDIpO1xuICAgICAgaWYgKHRoaXMuVyA+IDEzMDApIHRoaXMuVyA9IDEzMDA7XG4gICAgICB0aGlzLnJhdGUgPSB0aGlzLlcgLyB0aGlzLlBDQmFzZVc7XG5cbiAgICAgIC8vIHNjYWxl44GZ44KL44Oq44K544OI44KS44Or44O844OXXG4gICAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnYm90aCcgfHwgdmFsLnNjYWxlID09ICdwY09ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLlBDQmFzZVcsXG4gICAgICAgICAgICBzY2FsZTogdGhpcy5yYXRlLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOOBk+OBoeOCieOBruWgtOWQiOOBr+OAgXNjYWxl44KS5oi744GZXG4gICAgICAgIGlmICh2YWwuc2NhbGUgPT0gJ3NwT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgIH0pOyAgXG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIHNjYWxl44GX44Gf44KJ44CB5YWD44Gu5aSn44GN44GV5YiG5L2Z55m944GM44Gn44GN44KL44Gu44Gnb3ZlcmZsb3cgaGlkZGVu44Gn5raI44GZXG4gIHdyYXAoKSB7XG5cblxuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIHRoaXMucnVuKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdzY2FsZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGUuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBvc2l0aW9uXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDkuIrkuIvkuK3lpK7lr4TjgZtcbiAgICB0aGlzLnNldENlbnRlcigpO1xuXG4gIH1cblxuICBzZXRDZW50ZXIoKSB7XG5cbiAgICAkKCcucG9zQ2VudGVyJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5hZGp1c3QoKTtcbiAgICAgIFxuICAgIH0pO1xuICAgICQoJy5wb3NDZW50ZXJXJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5hZGp1c3RXKCk7XG4gICAgICBcbiAgICB9KTtcbiAgICAkKCcucG9zQ2VudGVySCcpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykuYWRqdXN0SCgpO1xuICAgICAgXG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgdGhpcy5zZXRDZW50ZXIoKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQoJ3NldENlbnRlcicsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvUG9zdGlvbi9Qb3NpdGlvbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IE1haW5cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IERpc3BsYXlUb3AgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VG9wLmpzJztcbi8vIGltcG9ydCBEaXNwbGF5TW92aWUgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5TW92aWUuanMnO1xuLy8gaW1wb3J0IERpc3BsYXlJbnRlcnZpZXcgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5SW50ZXJ2aWV3LmpzJztcbi8vIGltcG9ydCBEaXNwbGF5SW50ZXJ2aWV3RGV0YWlsIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheUludGVydmlld0RldGFpbC5qcyc7XG4vLyBpbXBvcnQgRGlzcGxheUhpc3RvcnkgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5SGlzdG9yeS5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLm9uSW1tZWRpYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgb25JbW1lZGlhdGUoKSB7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIHZhciBwYWdlID0gJCgnYm9keScpLmRhdGEoJ2lkJyk7XG5cblx0XHQvL3BhZ2Xjga5JROOBlOOBqOOBq+eZuueBq+OBmeOCi+OCr+ODqeOCueOBruaMr+OCiuWIhuOBkVxuICAgIHN3aXRjaCAocGFnZSkge1xuXG4gICAgICBjYXNlICd0b3AnOlxuXG4gICAgICAgIG5ldyBEaXNwbGF5VG9wKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIGNhc2UgJ21vdmllJzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5TW92aWUoKTtcblx0XHRcdC8vXG4gICAgICAvLyAgIGJyZWFrO1xuXHRcdFx0Ly9cbiAgICAgIC8vIGNhc2UgJ2ludGVydmlldyc6XG4gICAgICAvL1xuICAgICAgLy8gICBuZXcgRGlzcGxheUludGVydmlldygpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cdFx0XHQvL1xuICAgICAgLy8gY2FzZSAnaW50ZXJ2aWV3X2RldGFpbCc6XG4gICAgICAvL1xuICAgICAgLy8gICBuZXcgRGlzcGxheUludGVydmlld0RldGFpbCgpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cdFx0XHQvL1xuICAgICAgLy8gY2FzZSAnaGlzdG9yeSc6XG4gICAgICAvL1xuICAgICAgLy8gICBuZXcgRGlzcGxheUhpc3RvcnkoKTtcblx0XHRcdC8vXG4gICAgICAvLyAgIGJyZWFrO1xuXG4gICAgfVxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBcbiAgfVxuXG4gIG9uUmVuZGVyKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1BhZ2UvTWFpbi5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRGlzcGxheVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBFZmZlY3RzIGZyb20gJy4vRWZmZWN0cy9FZmZlY3RzLmpzJztcbmltcG9ydCBTY2FsZVRvcCBmcm9tICcuLi9EaXNwbGF5L0xheW91dC9TaXplL1NjYWxlVG9wLmpzJztcbmltcG9ydCBIb3ZlckVmZmVjdFNOU1NQRm9vdGVyIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U05TU1BGb290ZXIuanMnO1xuaW1wb3J0IEhvdmVyRWZmZWN0U1ZHQXJyb3dUb3AgZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdBcnJvd1RvcC5qcyc7XG5pbXBvcnQgVG9wVGltZSBmcm9tICcuLi9EaXNwbGF5L1VJL1RvcFRpbWUuanMnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vTGF5b3V0L1Bvc3Rpb24vUG9zaXRpb24uanMnO1xuaW1wb3J0IFdlYkdMaW5pdCBmcm9tICcuL1dlYkdMaW5pdC5qcyc7XG5cbmltcG9ydCB2cyBmcm9tICcuL3Rlc3QuZnJhZyc7XG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5vbkltbWVkaWF0ZSgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIG9uSW1tZWRpYXRlKCkge1xuXG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICAvLyBnYi5pbi53ZWJHTGluaXQgPSBuZXcgV2ViR0xpbml0KCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgVUkgLyBMYXlvdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBzcFxuICAgIC8vIGdiLmluLnNjYWxlVG9wID0gbmV3IFNjYWxlVG9wKCk7XG4gICAgLy8gZ2IuaW4ucG9zID0gbmV3IFBvc2l0aW9uKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgRWZmZWN0c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gc3BcbiAgICAvLyBnYi5pbi5zbGlkZXJUb3Auc2V0RXZlbnRzKCk7XG4gICAgLy8gZ2IuaW4uc25zU1BIb3ZlckVmID0gbmV3IEhvdmVyRWZmZWN0U05TU1BGb290ZXIoJCgnI3NpZGVMJykpO1xuXG4gICAgLy8gcGNcbiAgICAvLyBuZXcgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCgkKCcuc2VjdGlvbjAxIC5uZXh0JykpOyAvLyDihpIgVG9wT3BlbmluZ+OBuFxuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG5cdFx0Ly8gd2luZG93LmNvbnNvbGUubG9nKCdzdGF0aWNfUnVuJyk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgVUkgLyBMYXlvdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBzcFxuICAgIGdiLmluLnNjYWxlVG9wID0gbmV3IFNjYWxlVG9wKCk7XG4gICAgZ2IuaW4ucG9zID0gbmV3IFBvc2l0aW9uKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgRWZmZWN0c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gc3BcbiAgICBnYi5pbi5zbGlkZXJUb3Auc2V0RXZlbnRzKCk7XG4gICAgZ2IuaW4uc25zU1BIb3ZlckVmID0gbmV3IEhvdmVyRWZmZWN0U05TU1BGb290ZXIoJCgnI3NpZGVMJykpO1xuXG4gICAgLy8gcGNcbiAgICB0aGlzLmh0ID0gbmV3IEhvdmVyRWZmZWN0U1ZHQXJyb3dUb3AoJCgnLnNlY3Rpb24wMSAubmV4dCcpKTtcbiAgICB0aGlzLmh0LmF1dG9BcnJvdygpO1xuICAgIGdiLmluLnRpbWUgPSBuZXcgVG9wVGltZSgpO1xuICAgIGlmIChnYi5pbi5zZWMwMVZpZGVvLnZpZGVvKSBnYi5pbi5zZWMwMVZpZGVvLnZpZGVvLnBsYXlCeU5ZVGltZSgpOyAvLyBzcOeUqOOBq+OCgiBnYi5pbi5zZWMwMVZpZGVv44GM5a2Y5Zyo44GZ44KL44GL44Gp44GG44GL5Yik5a6aXG4gICAgaWYgKGdiLmluLnNlYzAxVmlkZW8udmlkZW8pIGdiLmluLnNlYzAxVmlkZW8udmlkZW8uc2V0RXZlbnRzKCk7IC8vIHNw55So44Gr44KCIGdiLmluLnNlYzAxVmlkZW/jgYzlrZjlnKjjgZnjgovjgYvjganjgYbjgYvliKTlrppcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRWZmZWN0c1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBTZWN0aW9uMDJCZyBmcm9tICcuLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50cy5qcyc7XG5pbXBvcnQgU2VjdGlvbjA0UHJvZHVjdCBmcm9tICcuLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9HbENvbnRlbnRzLmpzJztcbmltcG9ydCBQcm9maWxlciBmcm9tICcuL1Byb2ZpbGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0cyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmdsID0gbnVsbDtcbiAgICB0aGlzLmRvbSA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9ICcnO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuZGVidWcoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIGJnXG4gICAgLy8gZ2IuaW4uU2VjdGlvbjAyQmcgPSBuZXcgU2VjdGlvbjAyQmcoKTtcblxuICAgIC8vIHByb2R1Y3RcbiAgICAvLyBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0ID0gbmV3IFNlY3Rpb24wNFByb2R1Y3QoJCgnLnNlY3Rpb24wMycpKTtcblxuICB9XG5cbiAgZGVidWcoKSB7XG5cbiAgICAvLyBwcm9maWxlcuioreWumlxuICAgIC8vIG5ldyBQcm9maWxlcigpO1xuXG4gIH1cblxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9FZmZlY3RzLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IExvb3AgZnJvbSAnLi9DVkNvbnRlbnRzTG9vcC5qcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9DVkNvbnRlbnRzVGltZWxpbmUuanMnO1xuaW1wb3J0IENyZWF0ZUNhbnZhcyBmcm9tICcuL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5qcyc7XG5pbXBvcnQgRnVsbFNpemUgZnJvbSAnLi4vLi4vLi4vLi4vTXlMaWJzL0Rpc3BsYXkvTGF5b3V0L0Z1bGxTaXplLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1ZDb250ZW50cyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7IFxuICAgIC8vIHRoaXMuY3JlYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgICAvLyBsb29wXG4gICAgdGhpcy5sb29wID0gbmV3IExvb3AoKTtcbiAgICAvLyB0aW1lbGluZVxuICAgIHRoaXMudGltZWxpbmUgPSBuZXcgVGltZWxpbmUoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjga7jg63jg7zjg4lcbiAgICAvLyBnYi5pbi5sb2FkTWdyLnNlYzAySW1nKCk7XG4gICAgXG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICAgIC8vIGdiLmluLnJtLnRvdGFsICs9IDE7XG4gICAgLy8gY2FudmFz44Gu55Sf5oiQXG4gICAgLy8g44Os44OG44Kj44O844OK55So44GrMuWAjVxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDcmVhdGVDYW52YXMoJCgnI2JnV3JhcCAuc2VjMDJCZ0NhbnZhcycpLGdiLmluLmNvbmYuZGVmVyxnYi5pbi5jb25mLmRlZkgsKCk9PntcblxuICAgICAgdmFyIGwgPSBuZXcgRnVsbFNpemUoJCgnI2JnV3JhcCcpLCQoJy5zZWMwMkJnQ2FudmFzJyksMCwnRnVsbFNpemVTZWMwMkJnQ2FudmFzJyk7XG4gICAgICBsLnRhcmdldERlZlcgPSBnYi5pbi5jb25mLmRlZlc7XG4gICAgICBsLnRhcmdldERlZkggPSBnYi5pbi5jb25mLmRlZkg7XG4gICAgICBsLnJ1bigpO1xuXG4gICAgfSk7XG5cbiAgICAvLyB1aei/veWKoCjjgrPjg7Pjg4jjg63jg7zjg6njg7zjgIFwcm9maWxlcuOBquOBqSlcbiAgICAvLyB0aGlzLmFkZFVJKCk7XG5cblxuICB9XG5cbiAgYWRkVUkoKSB7XG5cbiAgICAvLyBwYXJhbXJ0ZXLoqr/mlbRcbiAgICAvLyBnYi5pbi5wYXJhbSA9IG5ldyBnYi5QYXJhbSgpO1xuXG4gIH1cblxuICBwbGF5KCkge1xuXG4gICAgdGhpcy5sb29wLnN0YXJ0KCk7XG4gICAgdGhpcy50aW1lbGluZS50bE1haW4ucGxheSgpO1xuXG4gIH1cblxuICBwYXVzZSgpIHtcblxuICAgIHRoaXMubG9vcC5wYXVzZSgpO1xuICAgIHRoaXMudGltZWxpbmUudGxNYWluLnBhdXNlKCk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5yLmFkZCgnY3ZDb250ZW50cycsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgLy8gZ2IuaW4uaGFzaC5vbkNoYW5nZUZ1bmNMaXN0LnB1c2godGhpcy5vblNlY3Rpb24wMi5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzTG9vcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1ZDb250ZW50c0xvb3Age1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc0Fsd2F5cyA9IHRydWU7XG4gICAgdGhpcy5pc1J1blN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy5pc0FkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlID0gJ2luaXRpYWwnO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmxvb3BMaXN0ID0gW107XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgaWYgKHRoaXMuaXNBbHdheXMpIHRoaXMucnVuQWx3YXlzKCk7XG4gICAgaWYgKHRoaXMuaXNSdW5TdGF0dXMpIHRoaXMucnVuU3RhdHVzKCk7XG4gICAgaWYgKHRoaXMuaXNBZGp1c3RQYXJhbSkgdGhpcy5ydW5BZGp1c3RQYXJhbSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5bi444Gr6KGM44GG5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgcnVuQWx3YXlzKCkge1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLmxvb3BMaXN0KSB0aGlzLmxvb3BMaXN0W2ldKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDlkITnirbmhYvjga7lh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1blN0YXR1cygpIHtcblxuICAgIGlmICh0aGlzLnN0YXRlID09ICdpbml0aWFsJykge1xuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YXJ0Jykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAxJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAyJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAzJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RhbmRieScpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzb21ldGltZXMnKSB7XG5cbiAgICAgIGlmICh0aGlzLnNvbWV0aW1lc1N0YXRlID09ICdsaW5lU2hhZG93Jykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc3BoZXJlJykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc2F0ZWxsaXRlJykge1xuXG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOODkeODqeODoeODvOOCv+iqv+aVtOeUqOWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnVuQWRqdXN0UGFyYW0oKSB7XG5cblxuXG4gIH1cblxuICBkcmF3KCkge1xuXG5cblxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIGlmICh0aGlzLmxvb3BTdGFydCkge1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmRyYXcoKTtcblxuICAgIC8vIGxvZygnc2VjdGlvbjAyJylcblxuICAgIH1cblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IHRydWU7XG5cbiAgfVxuXG4gIHBhdXNlKCkge1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSBmYWxzZTtcblxuICB9XG5cbiAgYWRkKGZ1bmMpIHtcblxuICAgIHRoaXMubG9vcExpc3QucHVzaChmdW5jKTtcbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGdiLmluLnVwLmFkZCgnc2VjdGlvbjAyQmcnLHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzTG9vcC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgQ1ZDb250ZW50c1RpbWVsaW5lXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyAgQ1ZDb250ZW50c1RpbWVsaW5lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMudGxNYWluID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44K/44Kk44Og44Op44Kk44Oz44KS5q2i44KB44Gm44GK44GPXG4gICAgdGhpcy50bE1haW4ucGF1c2UoKTtcblxuICAgIHRoaXMuYmVnaW5uaW5nKCk7XG4gICAgdGhpcy5zdGVwMDEoKTtcbiAgICB0aGlzLnN0ZXAwMigpO1xuICAgIHRoaXMuc3RlcDAzKCk7XG4gICAgdGhpcy5zdGFuZEJ5KCk7XG4gICAgdGhpcy5zb21ldGltZXMoKTtcblxuICB9XG5cbiAgYmVnaW5uaW5nKCkge1xuXG4gIH1cblxuICBzdGVwMDEoKSB7XG5cbiAgfVxuXG4gIHN0ZXAwMigpIHtcblxuXG4gIH1cblxuICBzdGVwMDMoKSB7XG5cbiAgICBcbiAgfVxuXG4gIHN0YW5kQnkoKSB7XG5cblxuICB9XG5cbiAgLy8g5pmC44CFXG4gIHNvbWV0aW1lcygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMudGxNYWluXG4gICAgICAuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgIH0sJys9MC4wJykgICAgXG5cbiAgfVxuXG4gIG9uUmVzaXpzZSgpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5yLmFkZCgnY3ZUaW1lbGluZScsIHRoaXMub25SZXNpenNlLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNUaW1lbGluZS5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDcmVhdGVDYW52YXNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMuanMnO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwLHcsaCxjYj0oKT0+e30pIHtcblxuICAgIHRoaXMuYyA9IG51bGw7XG4gICAgdGhpcy5jdyA9IDA7XG4gICAgdGhpcy5jaCA9IDA7XG4gICAgXG4gICAgdGhpcy5maWxsU3R5bGUgPSAnMCwwLDAnO1xuICAgIHRoaXMuJHdyYXAgPSAkd3JhcDtcblxuICAgIHRoaXMubG9vcExpc3QgPSBbXTtcblxuICAgIC8vIOacgOWIneOCquODluOCuOOCp+OCr+ODiOeUn+aIkOOBmeOCi+OBn+OCgeOBq2Jvb2xlYW4g44GC44GI44Gm6YCG44GrXG4gICAgdGhpcy5pc1Jlc2l6ZSA9IChnYi5pbi51LmlzUmVzUEMpPyBmYWxzZTogdHJ1ZTtcblxuICAgIHRoaXMuY2IgPSBjYjtcblxuICAgIHRoaXMudyA9IDI2MDtcbiAgICB0aGlzLmggPSAxNDY7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgICB0aGlzLnNldENhbnZhc1NpemUodyxoKTtcbiAgICB0aGlzLnRpbWVsaW5lKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkgeyAvL2NhbnZhcyBmaW5nZXIgcG9pbnRcblxuICAgIHRoaXMuYyA9IG5ldyBDYW52YXMoKTtcblxuICAgIC8vIHRoaXMuYWRkT2JqZWN0cygpO1xuICAgIHRoaXMub25SZXNpemUoKTtcbiAgICBcbiAgICB0aGlzLiR3cmFwLmFwcGVuZCh0aGlzLmMuY2FudmFzKTtcblxuICAgIHRoaXMuY2IoKTtcblxuICB9XG5cbiAgYWRkT2JqZWN0cyh2eCkgeyAvL2NhbnZhcyBmaW5nZXIgcG9pbnRcblxuICAgIHRoaXMubG9vcExpc3QgPSBbXTtcblxuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHZhciBvZmZzZXRGcmFtZSA9IDA7XG4gICAgdmFyIG9mZnNldFZ4ID0gMDtcblxuICAgIHRoaXMueE51bSA9IDg7XG4gICAgdGhpcy55TnVtID0gNjtcbiAgICB0aGlzLmxlbiA9IHRoaXMueE51bSAqIHRoaXMueU51bTtcblxuICAgIHRoaXMudGlsZUxpc3QgPSBbXTtcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcbiAgICAgIHZhciB0b3RhbCA9IGdiLmluLmNvbmYuc2VjMDJJbWdOdW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0b3RhbCA9IDE5O1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgIFxuICAgICAgdGhpcy50aWxlID0gbmV3IFBsYW5lKHRoaXMuYy5jdHgsdGhpcy5maWxsU3R5bGUpO1xuXG4gICAgICB2YXIgbnRoID0gaSAlIHRoaXMueE51bTsgXG4gICAgICBpZiAobnRoID09IDApIG9mZnNldCA9IC0gNTAwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKSAtIDI1MDtcbiAgICAgIGlmIChudGggPT0gMCkgb2Zmc2V0RnJhbWUgPSBNYXRoLmZsb29yKHRvdGFsICogTWF0aC5yYW5kb20oKSk7XG4gICAgICBpZiAobnRoID09IDApIG9mZnNldFZ4ID0gdnggKyBNYXRoLmZsb29yKHZ4ICogMiAqIE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICB2YXIgeCA9IG50aCAqIHRoaXMudyArIG9mZnNldDtcbiAgICAgIHZhciB5ID0gTWF0aC5mbG9vcihpIC8gdGhpcy54TnVtKSAqIHRoaXMuaDtcblxuICAgICAgdGhpcy50aWxlLnNldHVwKHgsIHksIHRoaXMudywgdGhpcy5oLCBvZmZzZXRGcmFtZSArIG50aCAqIDMsIG9mZnNldFZ4LCBvZmZzZXQpO1xuICAgICAgdGhpcy50aWxlTGlzdC5wdXNoKHRoaXMudGlsZSk7XG4gICAgICB0aGlzLmFkZCh0aGlzLnRpbGUubG9vcC5iaW5kKHRoaXMudGlsZSkpO1xuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgc2V0Q2FudmFzU2l6ZSh3LGgpIHtcblxuICAgIHRoaXMuY3cgPSB0aGlzLmMuY2FudmFzLndpZHRoID0gdztcbiAgICB0aGlzLmNoID0gdGhpcy5jLmNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gIH1cblxuICBsb29wKCkge1xuXG4gICAgLy8gdGhpcy5jLmN0eC5jbGVhclJlY3QoMCwwLHRoaXMuY3csdGhpcy5jaCk7XG4gICAgLy8gdGhpcy5jLmN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA4KSc7XG5cbiAgICB0aGlzLmMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNiknO1xuICAgIHRoaXMuYy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY3csdGhpcy5jaCk7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMubG9vcExpc3QpIHRoaXMubG9vcExpc3RbaV0oKTtcbiAgICBcbiAgfVxuXG4gIHRpbWVsaW5lKCkge1xuXG5cbiAgfVxuXG4gIGFkZChmdW5jKSB7XG5cbiAgICB0aGlzLmxvb3BMaXN0LnB1c2goZnVuYyk7XG4gICAgXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIGxvZyhnYi5pbi51LmlzUmVzU1AsZ2IuaW4udS5pc1Jlc1BDKTtcblxuICAgIGlmIChnYi5pbi51LmlzUmVzU1AgJiYgdGhpcy5pc1Jlc2l6ZSkge1xuICAgICAgdGhpcy5pc1Jlc2l6ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmFkZE9iamVjdHMoMC41KTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy50aWxlTGlzdFtpXS5jbnRTdG9wID0gdHJ1ZTtcblxuICAgICAgfTtcblxuICAgICAgbG9nKDExMTEpXG5cbiAgICB9IGVsc2UgaWYgKGdiLmluLnUuaXNSZXNQQyAmJiAhdGhpcy5pc1Jlc2l6ZSkge1xuICAgICAgdGhpcy5pc1Jlc2l6ZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuYWRkT2JqZWN0cygwLjUpO1xuXG4gICAgICAvLyDjgrnjg57jg5vjgaDjgaPjgZ/jgonjgIHluoPjgYTooajnpLrjgafjgoLjg5Xjg6zjg7zjg6Djga7li5XjgY3jgpLmraLjgoHjgotcbiAgICAgIGlmIChnYi5pbi51LmlzU1ApIHtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGlsZUxpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgIHRoaXMudGlsZUxpc3RbaV0uY250U3RvcCA9IHRydWU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm47XG5cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy50aWxlTGlzdFtpXS5jbnRTdG9wID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgfTtcblxuXG4gICAgICBsb2coMjIyMik7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLlNlYzAyQmcubG9vcC5hZGQodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIGdiLmluLnIuYWRkKCdDcmVhdGVDYW52YXMnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDYW52YXNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgdGhpcy53ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5oID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cblxuICBzZXR1cCAoKSB7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyBcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnc7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oO1xuICAgIFxuICB9XG5cbiAgdXBkYXRlICgpIHtcblxuICAgIFxuICB9XG5cbiAgZHJhdyAoKSB7XG5cbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvX2RldGFpbHMvQ2FudmFzLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBsYW5lXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5lIHtcblxuICBjb25zdHJ1Y3RvcihjdHgsc3Ryb2tlU3R5bGUpe1xuXG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgdGhpcy5vcCA9IHt2YWw6MX07XG5cbiAgICB0aGlzLmNudCA9IDA7XG5cbiAgICB0aGlzLmNudFN0b3AgPSBmYWxzZTtcblxuICAgIC8vIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuXG4gIH1cblxuICBzZXR1cCh4LCB5LCB3LCBoLCBmcmFtZVN0YXJ0LCB2eCwgb2Zmc2V0KSB7XG5cbiAgICB0aGlzLmltZ0xpc3QgPSBnYi5pbi5sb2FkU2VjMDJJbWcubGlzdDtcblxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLncgPSB3O1xuICAgIHRoaXMuaCA9IGg7XG5cbiAgICB0aGlzLnZ4ID0gdng7XG5cbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcblxuICAgIHRoaXMuY250ID0gZnJhbWVTdGFydCA7XG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuXG4gIH1cblxuICAvLyDpoILngrnjgafmj4/jgY9cbiAgdXBkYXRlKCkge1xuXG4gICAgdGhpcy54IC09IHRoaXMudng7XG4gICAgaWYgKHRoaXMueCA8IC10aGlzLncpIHRoaXMueCA9IGdiLmluLmNhbnZhcy5jdyAtIDEwO1xuXG4gIH1cblxuICBkcmF3KCkge1xuXG4gICAgaWYgKCF0aGlzLmNudFN0b3ApIHtcblxuICAgICAgLy8g6ZaT5byV44GNXG4gICAgICBpZiAoZ2IuaW4udXAuY250JTM9PTApIHRoaXMuY250Kys7XG4gICAgICBlbHNlIDtcblxuICAgIH07XG4gICAgLy8gdGhpcy5jbnQrKztcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcbiAgICAgIHZhciB0b3RhbCA9IGdiLmluLmNvbmYuc2VjMDJJbWdOdW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0b3RhbCA9IDE5O1xuICAgIH1cbiAgICBcbiAgICB2YXIgaW1nID0gdGhpcy5pbWdMaXN0W3RoaXMuY250JXRvdGFsXTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xuICAgIFxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL1BsYW5lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBHbENvbnRlbnRzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IExvb3AgZnJvbSAnLi9HbENvbnRlbnRzTG9vcC5qcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9HbENvbnRlbnRzVGltZWxpbmUuanMnO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vX2RldGFpbHMvUGxhbmUuanMnO1xuaW1wb3J0IFBhcmFtIGZyb20gJy4uLy4uL1BhcmFtLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xDb250ZW50cyB7XG5cbiAgY29uc3RydWN0b3IoJHdyYXAgPSAkKCdib2R5JykpIHtcblxuICAgIHRoaXMucmVuZGVyZXI7XG4gICAgdGhpcy5jYW1lcmE7XG4gICAgdGhpcy5zY2VuZTtcbiAgICB0aGlzLmxpZ2h0O1xuXG4gICAgdGhpcy5zdGF0ZSA9ICdpbml0aWFsJztcbiAgICB0aGlzLmFkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlTGluZVJvdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmlzQ29udHJvbCA9IGZhbHNlO1xuICAgIHRoaXMuY29udHJvbHM7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5jcmVhdGUoJHdyYXApO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gICAgLy8gbG9vcFxuICAgIHRoaXMubG9vcCA9IG5ldyBMb29wKCk7XG4gICAgLy8gdGltZWxpbmVcbiAgICB0aGlzLnRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIGNyZWF0ZSgkd3JhcCkge1xuXG4gICAgLy8gcmVuZGVyXG4gICAgZ2IuaW4ucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczogdHJ1ZX0pO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggZ2IuaW4uci5XKCksIGdiLmluLnIuSCgpICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwLjApO1xuICAgICR3cmFwLmFwcGVuZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggICk7XG4gICAgJCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpLmNzcyh7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxsZWZ0OiAwLFxuICAgICAgJ3otaW5kZXgnOiAxLFxuICAgIH0pO1xuXG4gICAgLy8gc2NlbmVcbiAgICBnYi5pbi5zY2VuZSA9IG5ldyBnYi5TY2VuZSgpO1xuICAgIHRoaXMuc2NlbmUgPSBnYi5pbi5zY2VuZS5zY2VuZTtcblxuICAgIC8vIGNhbWVyYVxuICAgIGdiLmluLmNhbWVyYSA9IG5ldyBnYi5DYW1lcmEoKTtcbiAgICB0aGlzLmNhbWVyYSA9IGdiLmluLmNhbWVyYS5jYW1lcmE7XG5cbiAgICAvLyBsaWdodFxuICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDMgKTtcbiAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnogPSAzO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI6L+95YqgXG4gICAgdGhpcy5hZGRPYmplY3RzKCk7XG5cbiAgICAvLyB1aei/veWKoCjjgrPjg7Pjg4jjg63jg7zjg6njg7zjgIFwcm9maWxlcuOBquOBqSlcbiAgICAvLyB0aGlzLmFkZFVJKCk7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjga7jg63jg7zjg4lcbiAgICBnYi5pbi5sb2FkTWdyLnNlY3Rpb24wNFByb2R1Y3RTaGFkZXIoKTtcblxuICB9XG5cbiAgYWRkT2JqZWN0cygpIHtcblxuICAgIHRoaXMucGxhbmUgPSBuZXcgUGxhbmUoKTtcblxuICB9XG5cbiAgYWRkVUkoKSB7XG5cbiAgICAvLyBjb250cm9sc1xuXG4gICAgaWYgKHRoaXMuaXNDb250cm9sKSB7XG5cbiAgICAgIGdiLmluLmNvbnRyb2xzID0gdGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5UcmFja2JhbGxDb250cm9scyh0aGlzLmNhbWVyYSk7XG4gICAgICB0aGlzLmNvbnRyb2xzLnpvb21TcGVlZCA9IDAuODtcbiAgICAgIHRoaXMuY29udHJvbHMucm90YXRlU3BlZWQgPSAzO1xuXG4gICAgfTtcblxuICAgIC8vIHByb2ZpbGVy6Kit5a6aXG4gICAgbmV3IGdiLlByb2ZpbGVyKCk7XG4gICAgLy8gcGFyYW1ydGVy6Kq/5pW0XG4gICAgZ2IuaW4ucGFyYW0gPSBuZXcgUGFyYW0oKTtcblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICB2YXIgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHZhciBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHcsIGgpO1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHcgLyBoO1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICB9XG5cbiAgb25TZWN0aW9uMDQoY3VyLHByZXYpIHtcblxuICAgIGlmIChjdXIgPT0gJ3Byb2R1Y3QnKSB7XG5cbiAgICAgIHRoaXMubG9vcC5zdGFydCgpO1xuICAgICAgdGhpcy50aW1lbGluZS50bE1haW4ucGxheSgpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5sb29wLnBhdXNlKCk7XG4gICAgICB0aGlzLnRpbWVsaW5lLnRsTWFpbi5wYXVzZSgpO1xuXG4gICAgfVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCh0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICAgIGdiLmluLmhhc2gub25DaGFuZ2VGdW5jTGlzdC5wdXNoKHRoaXMub25TZWN0aW9uMDQuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdvblNlY3Rpb24wNFByb2R1Y3RJbWcnLCAoKT0+e3RoaXMudGltZWxpbmUuc2V0dXAoKTt9KTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHMuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEdsQ29udGVudHNMb29wXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbENvbnRlbnRzTG9vcCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmlzQWx3YXlzID0gdHJ1ZTtcbiAgICB0aGlzLmlzUnVuU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLmlzQWRqdXN0UGFyYW0gPSB0cnVlO1xuICAgIHRoaXMuc3RhdGUgPSAnaW5pdGlhbCc7XG4gICAgdGhpcy5zb21ldGltZXNTdGF0ZSA9ICdpbml0aWFsJztcblxuICAgIHRoaXMubG9vcFN0YXJ0ID0gZmFsc2U7XG5cbiAgICB0aGlzLmxvb3BMaXN0ID0gW107XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBpZiAodGhpcy5pc0Fsd2F5cykgdGhpcy5ydW5BbHdheXMoKTtcbiAgICBpZiAodGhpcy5pc1J1blN0YXR1cykgdGhpcy5ydW5TdGF0dXMoKTtcbiAgICBpZiAodGhpcy5pc0FkanVzdFBhcmFtKSB0aGlzLnJ1bkFkanVzdFBhcmFtKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDluLjjgavooYzjgYblh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICBydW5BbHdheXMoKSB7XG5cbiAgICBpZiAoZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5pc0NvbnRyb2wpIGdiLmluLmNvbnRyb2xzLnVwZGF0ZSgpO1xuXG4gICAgLy8gY2FtZXJhXG4gICAgZ2IuaW4uY2FtZXJhLnVwZGF0ZUNvbnRyb2xsKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDlkITnirbmhYvjga7lh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1blN0YXR1cygpIHtcblxuICAgIGlmICh0aGlzLnN0YXRlID09ICdpbml0aWFsJykge1xuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YXJ0Jykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAxJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAyJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAzJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RhbmRieScpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzb21ldGltZXMnKSB7XG5cbiAgICAgIGlmICh0aGlzLnNvbWV0aW1lc1N0YXRlID09ICdsaW5lU2hhZG93Jykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc3BoZXJlJykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc2F0ZWxsaXRlJykge1xuXG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOODkeODqeODoeODvOOCv+iqv+aVtOeUqOWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnVuQWRqdXN0UGFyYW0oKSB7XG5cblxuXG4gIH1cblxuICBkcmF3KCkge1xuXG4gICAgZ2IuaW4ucmVuZGVyZXIucmVuZGVyKCBnYi5pbi5zY2VuZS5zY2VuZSwgZ2IuaW4uY2FtZXJhLmNhbWVyYSApO1xuICAgIC8vIGdiLmluLnBvc3Rwcm9jZXNzLmNvbXBvc2VyLnJlbmRlcigwLjEpO1xuXG4gIH1cblxuICBsb29wKCkge1xuXG4gICAgaWYgKHRoaXMubG9vcFN0YXJ0KSB7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuZHJhdygpO1xuXG4gICAgbG9nKCdzZWN0aW9uMDQnKVxuXG4gICAgfVxuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIHRoaXMubG9vcFN0YXJ0ID0gdHJ1ZTtcblxuICB9XG5cbiAgcGF1c2UoKSB7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IGZhbHNlO1xuXG4gIH1cblxuICBhZGQoZnVuYykge1xuXG4gICAgdGhpcy5sb29wTGlzdC5wdXNoKGZ1bmMpO1xuICAgIFxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZ2IuaW4udXAuYWRkKCdzZWN0aW9uMDRQcm9kdWN0Jyx0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9HbENvbnRlbnRzTG9vcC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgR2xDb250ZW50c1RpbWVsaW5lXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgU29tZVRpbWVzIGZyb20gJy4uLy4uLy4uLy4uL015TGlicy9FdmVudE1nci9Tb21ldGltZXNNZ3IuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbENvbnRlbnRzVGltZWxpbmUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy50bE1haW4gPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAvLyB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgr/jgqTjg6Djg6njgqTjg7PjgpLmraLjgoHjgabjgYrjgY9cbiAgICB0aGlzLnRsTWFpbi5wYXVzZSgpO1xuICAgIFxuICAgIHRoaXMuYmVnaW5uaW5nKCk7XG4gICAgLy8gdGhpcy5zdGVwMDEoKTtcbiAgICAvLyB0aGlzLnN0ZXAwMigpO1xuICAgIC8vIHRoaXMuc3RlcDAzKCk7XG4gICAgLy8gdGhpcy5zdGFuZEJ5KCk7XG4gICAgdGhpcy5zb21ldGltZXMoKTsgICAgXG5cbiAgfVxuXG4gIGJlZ2lubmluZygpIHtcblxuICAgIHRoaXMudGxNYWluXG4gICAgICAvLyB6b29tIGluXG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnN0cmVuZ3RoLCAxLjMsIHtcbiAgICAgICAgdmFsdWU6IDUwMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgIG9uU3RhcnQ6ICgpPT4ge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5zdHJlbmd0aCwge3ZhbHVlOiA1MDB9KTtcblxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBjYW1lcmHnp7vli5VcbiAgICAgIC50byhnYi5pbi5jYW1lcmEuY2FtZXJhLnBvc2l0aW9uLCAxLjUsIHtcbiAgICAgICAgejogMjAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgfSwnLT0xLjMnKVxuXG4gICAgICAvLyBwbGFuZeenu+WLlVxuICAgICAgLnRvKGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUucG9zaXRpb24sIDEuNSwge1xuICAgICAgICB4OiAtMTAwLFxuICAgICAgICB5OiAyMDAsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0XG4gICAgICB9LCctPTEuNScpXG5cbiAgICAgIC8vIHpvb20gb3V0XG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnN0cmVuZ3RoLCAxLCB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJblxuICAgICAgfSwnLT0wLjQnKVxuXG4gICAgICAvLyBwbGFuZTAx44GMb3BhY2l0eeOBp+a2iOOBiOOCi1xuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy5vcGFjaXR5LCAxLCB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZUluT3V0XG4gICAgICB9LCctPTAuNycpXG5cbiAgICAgIC8vIHBsYW5lMDLjga5ibHVyIG91dFxuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5zdHJlbmd0aCwgMSwge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXRcbiAgICAgIH0sJy09MS4wJylcblxuICAgICAgLy8gcGxhbmUwMuOBjOWHuuOBpuadpeOCi1xuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5vcGFjaXR5LCAxLCB7XG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgfSwnLT0xLjAnKVxuXG4gICAgICAudG8oZ2IuaW4uY2FtZXJhLmNhbWVyYS5wb3NpdGlvbiwgMS41LCB7XG4gICAgICAgIHo6IDQwMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKT0+IHtcblxuICAgICAgICAgIC8vIG1hdGVyaWFs44Gu5aSJ5pu0XG5cbiAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMuZnJvbS52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbMV07XG4gICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1syXTtcblxuICAgICAgICAgIGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUwMi5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS5mcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnBsYW5lMDIuc2NhbGUueCA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUwMi5zY2FsZS55ID0gMTIwMC4wO1xuXG5cbiAgICAgICAgfVxuICAgICAgfSwnLT0xLjAnKVxuXG5cblxuICB9XG5cbiAgc3RlcDAxKCkge1xuXG5cbiAgfVxuXG4gIHN0ZXAwMigpIHtcblxuXG5cbiAgfVxuXG4gIHN0ZXAwMygpIHtcblxuXG5cbiAgfVxuXG4gIHN0YW5kQnkoKSB7XG5cblxuICB9XG5cbiAgLy8g5pmC44CFXG4gIHNvbWV0aW1lcygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMudGxNYWluXG4gICAgICAuYWRkKGZ1bmN0aW9uKCl7XG5cblxuICAgICAgICB2YXIgcyA9IG5ldyBTb21lVGltZXMoKTtcblxuICAgICAgICBzLmFkZChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgVHdlZW5NYXgudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnByb2dyZXNzLCAxLjMsIHtcbiAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAgICAgICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5mcm9tLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1szXTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIFxuICAgICAgICAgIFxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1s0XTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLmZyb20udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzVdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1sxXTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLmZyb20udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzJdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSwgMi4wLCAyLjApO1xuXG4gICAgICAgIHMuc3RhcnQoKTtcblxuICAgICAgfSwnKz0wLjAnKVxuICAgIFxuXG4gIH1cblxuICBvblJlc2l6c2UoKSB7XG5cbiAgfVxuXG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQodGhpcy5vblJlc2l6c2UuYmluZCh0aGlzKSk7XG5cbiAgICAkKHdpbmRvdykub24oJ2NsaWNrJywoKT0+e1xuXG4gICAgICAvLyB0aGlzLnN0YXJ0KCk7XG5cbiAgICB9KTtcblxuICB9XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c1RpbWVsaW5lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTb21lVGltZXNcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbWVUaW1lcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLlNvbWVUaW1lcztcbiAgICB0aGlzLlRpbWVyID0gbnVsbDtcbiAgICB0aGlzLmNiTGlzdCA9IFtdO1xuICAgIHRoaXMubGVuID0gMDtcbiAgICB0aGlzLm9yZGVyID0gMDtcblxuICAgIHRoaXMubWluID0gW107XG4gICAgdGhpcy5tYXggPSBbXTtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgc3RhcnQobWluPTAsIG1heD0wKSB7XG5cbiAgICB0aGlzLmxhdGVyID0gZ2IuaW4udS5yYW5kb20obWluLG1heCkgKiAxMDAwO1xuICAgIHRoaXMuVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMucnVuLmJpbmQodGhpcyksdGhpcy5sYXRlcik7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIHRoaXMub3JkZXIgPSB0aGlzLm9yZGVyICUgdGhpcy5sZW47XG5cbiAgICB0aGlzLmxhdGVyID0gZ2IuaW4udS5yYW5kb20odGhpcy5taW5bdGhpcy5vcmRlcl0sdGhpcy5tYXhbdGhpcy5vcmRlcl0pICogMTAwMDtcblxuICAgIHRoaXMuY2JMaXN0W3RoaXMub3JkZXJdKCk7XG5cbiAgICB0aGlzLm9yZGVyKys7XG4gICAgdGhpcy5UaW1lciA9IHNldFRpbWVvdXQodGhpcy5ydW4uYmluZCh0aGlzKSx0aGlzLmxhdGVyKTtcblxuICB9XG5cbiAgc3RvcCgpIHtcblxuICAgIGxvZyh0aGlzLlRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5UaW1lcik7XG5cbiAgfVxuXG4gIGFkZChmdW5jLG1pbj04LG1heD0xMikge1xuXG4gICAgdGhpcy5taW4ucHVzaChtaW4pO1xuICAgIHRoaXMubWF4LnB1c2gobWF4KTtcblxuICAgIHRoaXMuY2JMaXN0LnB1c2goZnVuYyk7XG4gICAgdGhpcy5sZW4gPSB0aGlzLmNiTGlzdC5sZW5ndGg7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9Tb21ldGltZXNNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBsYW5lXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbnVsbDtcbiAgICB0aGlzLm1hdGVyaWFsID0gbnVsbDtcblxuICAgIHRoaXMudmlkZW8gPSBudWxsO1xuICAgIHRoaXMucGxhbmUgPSBudWxsO1xuXG4gICAgdGhpcy5kZWZXVyA9IDE5MjA7XG4gICAgdGhpcy5kZWZISCA9IDEwODA7XG4gICAgdGhpcy5kZWZXID0gMzA1O1xuICAgIHRoaXMucmF0ZSA9IDA7XG4gICAgdGhpcy5yYXRlVyA9IDA7XG5cbiAgICB0aGlzLmxiID0gbnVsbDsgLy9sYXlvdXQgYmFja2dyb3VuZFxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIGNyZWF0ZShjYikge1xuXG4gICAgdmFyIHRleHR1cmVzID0gdGhpcy50ZXh0dXJlcyAgPSBnYi5pbi5sb2FkTWdyLnRleHR1cmVzO1xuXG4gICAgdmFyIHcgPSB0ZXh0dXJlc1swXS5pbWFnZS53aWR0aCAvIHRleHR1cmVzWzBdLmltYWdlLndpZHRoO1xuICAgIHZhciBoID0gdGV4dHVyZXNbMF0uaW1hZ2UuaGVpZ2h0IC8gdGV4dHVyZXNbMF0uaW1hZ2Uud2lkdGg7XG5cbiAgICAvLyBwbGFuZTAxXG5cbiAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh3LCBoLCAxLCAxKTtcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3JtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0uZnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLnBsYW5lID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICB0aGlzLnBsYW5lLnNjYWxlLnggPSB0aGlzLnBsYW5lLnNjYWxlLnkgPSAyMDAwLjA7XG5cbiAgICAvLyBwbGFuZTAyXG5cbiAgICB2YXIgdyA9IHRleHR1cmVzWzFdLmltYWdlLndpZHRoIC8gdGV4dHVyZXNbMV0uaW1hZ2Uud2lkdGg7XG4gICAgdmFyIGggPSB0ZXh0dXJlc1sxXS5pbWFnZS5oZWlnaHQgLyB0ZXh0dXJlc1sxXS5pbWFnZS53aWR0aDtcblxuICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHcsIGgsIDEsIDEpO1xuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3JtczogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS52cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS5mcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHRoaXMucGxhbmUwMiA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgdGhpcy5wbGFuZTAyLnNjYWxlLnggPSB0aGlzLnBsYW5lMDIuc2NhbGUueSA9IDYwMC4wO1xuXG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSAxO1xuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5vcGFjaXR5LnZhbHVlID0gMDtcblxuICAgIHRoaXMucGxhbmUwMi5wb3NpdGlvbi56ID0gLTE7XG5cbiAgICBnYi5pbi5zY2VuZS5zY2VuZS5hZGQoIHRoaXMucGxhbmUgKTtcbiAgICBnYi5pbi5zY2VuZS5zY2VuZS5hZGQoIHRoaXMucGxhbmUwMiApO1xuXG4gICAgLy8gdGhpcy5vblJlc2l6ZSgpO1xuICAgIC8vIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgICAvLyDjg4bjgq/jgrnjg4Hjg6PjgpJ1bmlmb3Jt5aSJ5pWw44Gr6L+95YqgXG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnRleHR1cmUudmFsdWUgPSB0ZXh0dXJlc1swXTtcbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMudGV4dHVyZTAxLnZhbHVlID0gdGV4dHVyZXNbMV07XG5cbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMudGV4dHVyZS52YWx1ZSA9IHRleHR1cmVzWzFdO1xuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy50ZXh0dXJlMDEudmFsdWUgPSB0ZXh0dXJlc1sxXTtcblxuICAgIGNiKCk7XG5cbiAgfVxuXG4gIHNldFZpZGVvU2l6ZSgpIHtcblxuICAgIC8vIHZpZGVv44Gu44K744OD44OI44K144Kk44K6ICAgICAgICAgIFxuICAgIC8vIHRoaXMubGIgPSBuZXcgZ2IuTGF5b3V0QmFja2dyb3VuZCgkKCdib2R5JyksJCh0aGlzLnZpZGVvLnZpZGVvKSk7XG4gICAgLy8gdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0VHJhbnNwYXJlbnQodmFsKSB7XG5cbiAgICAvLyB0aGlzLnBsYW5lLm1hdGVyaWFsLm9wYWNpdHkgPSB2YWw7XG5cbiAgfVxuXG4gIHR3ZWVuVHJhbnNwYXJlbnQodGltZSx2YWwpIHtcblxuICAgIC8vIHZhciB0ID0gdGltZSB8fCAxLjA7XG4gICAgLy8gdmFyIHYgPSB2YWwudGFyZ2V0IHx8IDEuMDtcbiAgICAvLyB2YXIgZSA9IHZhbC5lYXNlIHx8IFBvd2VyMi5lYXNlT3V0O1xuXG4gICAgLy8gVHdlZW5NYXgudG8odGhpcy5wbGFuZS5tYXRlcmlhbCwgdCwge1xuICAgIC8vICAgb3BhY2l0eTogdixcbiAgICAvLyAgIGVhc2UgOiBlLFxuICAgIC8vIH0pO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cblxuXG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgLy8gdmFyIHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAvLyB2YXIgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIC8vIHZhciByYXRlVyA9IHdpbmRvdy5pbm5lckhlaWdodCAvIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIC8vIHZhciByID0gdy9oO1xuXG4gICAgLy8gaWYgKHJhdGVXIDwgdGhpcy5yYXRlKSB7XG5cbiAgICAvLyAgIHRoaXMucGxhbmUuc2NhbGUuc2V0KHIqMC41OCxyKjAuNTgsciowLjU4KVxuXG4gICAgLy8gfSBlbHNlIHtcblxuICAgIC8vICAgLy8gbG9nKDIsc2NhbGVZKTtcblxuICAgIC8vICAgdGhpcy5wbGFuZS5zY2FsZS5zZXQoMSwxLDEpO1xuXG4gICAgLy8gfVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5ybS50b3RhbCArPSAxOyAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcbiAgICAkKHdpbmRvdykub24oJ29uU2VjdGlvbjA0UHJvZHVjdEltZycsIHRoaXMuY3JlYXRlLmJpbmQodGhpcywoKT0+e1xuICAgICAgLy9nYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICB9KSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9fZGV0YWlscy9QbGFuZS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGFyYW1cbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFtIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuZ3VpO1xuICAgIHRoaXMuanNvbiA9IHt9O1xuICAgIC8vIHRoaXMuYXBwTmFtZSA9IFwicGx1c01WXCI7XG5cbiAgICB2YXIgaXNGbGFnID0gdHJ1ZTtcblxuICAgIHRoaXMuY2xvY2sgPSB7XG4gICAgICBwcm9ncmVzczogMC41LFxuICAgIH1cblxuICAgIHRoaXMuem9vbWJsdXIgPSB7XG4gICAgICBzdHJlbmd0aDogNDYuMCxcbiAgICAgIHNpemU6IDg5LjAsXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2l0aW9uID0ge1xuICAgICAgcHJvZ3Jlc3M6IDAuMCxcbiAgICAgIHNpemU6IDAuMDQsXG4gICAgICB6b29tOiAzMCxcbiAgICAgIGNvbG9yU2VwYXJhdGlvbjogMC4zLFxuICAgICAgc3RyZW5ndGg6IDAuNixcbiAgICAgIHR3ZWVuOiAoKT0+e1xuXG4gICAgICAgIHZhciB2YWw7XG4gICAgICAgIGlmIChpc0ZsYWcpIHZhbCA9IDEuMDtcbiAgICAgICAgZWxzZSB2YWwgPSAwLjBcblxuICAgICAgICBpc0ZsYWcgPSAhaXNGbGFnO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLnBsYW5lMDIuc2hhZGVyLnVuaWZvcm1zLnByb2dyZXNzLCAyLjUsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5zZXR1cERhdGEoKTtcbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuXG4gIHNldHVwRGF0YSgpIHtcblxuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIGlmIChnYi5pbi5jb25mLlBBUkFNKSB7XG5cbiAgICB0aGlzLmd1aSA9IG5ldyBkYXQuR1VJKCk7XG4gICAgLy8gdGhpcy5ndWkgPSBuZXcgZGF0LkdVSSh7bG9hZDogdGhpcy5qc29ufSk7XG4gICAgdGhpcy5ndWkucmVtZW1iZXIodGhpcyk7XG4gICAgJChcIi5kZ1wiKS5jc3Moe3pJbmRleDo5OTk5OX0pO1xuXG4gICAgdmFyIGYxID0gdGhpcy5ndWkuYWRkRm9sZGVyKCd6b29tYmx1cicpO1xuICAgIGYxLmFkZCh0aGlzLnpvb21ibHVyLCAnc3RyZW5ndGgnLCAwLjAsIDIuMCkuc3RlcCgwLjAxKS5saXN0ZW4oKS5vbkNoYW5nZShmdW5jdGlvbih2YWwpe1xuXG4gICAgICBnYi5pbi5wbGFuZS5zaGFkZXJzWzJdLnVuaWZvcm1zLnN0cmVuZ3RoLnZhbHVlID0gdmFsO1xuICAgICAgbG9nKHZhbCk7XG5cbiAgICB9KTtcbiAgICBmMS5hZGQodGhpcy56b29tYmx1ciwgJ3NpemUnLCAwLjAsIDEwMC4wKS5zdGVwKDAuMSkubGlzdGVuKCkub25DaGFuZ2UoZnVuY3Rpb24odmFsKXtcblxuICAgICAgZ2IuaW4ucGxhbmUuc2hhZGVyLnVuaWZvcm1zLm5GcmFnLnZhbHVlID0gMSAvIHZhbDtcblxuICAgIH0pO1xuICAgIGYxLm9wZW4oKTtcblxuICAgIC8vIHRoaXMuZ3VpLmNsb3NlKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9QYXJhbS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUHJvZmlsZXJcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuU3RhdHM7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gaWYgKGdiLmluLmNvbmYuU1RBVFMpIHtcblxuICAgICAgdGhpcy5TdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgICAgdGhpcy5TdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgdGhpcy5TdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgICAgID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuU3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgICA9IFwiMHB4XCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuU3RhdHMuZG9tRWxlbWVudCk7XG4gICAgXG5cbiAgICAvLyB9O1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBpZih0aGlzLlN0YXRzKSB7XG4gICAgICB0aGlzLlN0YXRzLnVwZGF0ZSgpO1xuICAgIH1cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAuYWRkKCdwcm9maWxlcicsdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzL1Byb2ZpbGVyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMYXlvdXRcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FsZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLlNQQmFzZVcgPSAzNzU7XG4gICAgdGhpcy5QQ0Jhc2VXID0gMTMwMDtcblxuICAgIHRoaXMucmF0ZSA9IDE7XG4gICAgdGhpcy5XID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLiR0YXJnZXRMaXN0ID0gW1xuICAgICAge1xuICAgICAgICAnJHRhcmdldCc6ICQoJyNzaWRlTCwgI3NpZGVSLCAjbmF2JyksXG4gICAgICAgICdzY2FsZSc6ICdzcE9ubHknIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgJyR0YXJnZXQnOiAkKCcuc2VjdGlvbjAzX2RldGFpbCcpLFxuICAgICAgLy8gICAnc2NhbGUnOiAnYm90aCcgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAnJHRhcmdldCc6ICQoJy5zZWN0aW9uMDQnKSxcbiAgICAgIC8vICAgJ3NjYWxlJzogJ2JvdGgnIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgLy8gfSxcbiAgICBdXG5cbiAgICB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIFxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgdGhpcy5XID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5pVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdGhpcy5zY2FsZSgpO1xuICAgIHRoaXMud3JhcCgpO1xuXG4gIH1cblxuICAvLyDmi6HlpKdcbiAgc2NhbGUoKSB7XG5cbiAgICAvLyBicOOBruWgtOWQiOOBrnNjYWxlXG4gICAgaWYgKHRoaXMuaVcgPD0gZ2IuaW4uY29uZi5icCkge1xuXG4gICAgICAvLyB3aWR0aOOBi+OCiXJhdGXjgpLoqIjnrpdcbiAgICAgIC8vIHRoaXMucmF0ZSA9IGdiLmluLnUuZmxvYXRGb3JtYXQodGhpcy5XIC8gdGhpcy5TUEJhc2VXICwgMik7XG4gICAgICBpZiAodGhpcy5XID4gMzc1KSB0aGlzLlcgPSAzNzU7XG4gICAgICBpZiAodGhpcy5XIDwgMzIwKSB0aGlzLlcgPSAzMjA7XG4gICAgICBsb2codGhpcy5XKTtcbiAgICAgIHRoaXMucmF0ZSA9IHRoaXMuVyAvIHRoaXMuU1BCYXNlVztcblxuICAgICAgLy8gc2NhbGXjgZnjgovjg6rjgrnjg4jjgpLjg6vjg7zjg5dcbiAgICAgICQuZWFjaCh0aGlzLiR0YXJnZXRMaXN0LCAoaW5kZXgsIHZhbCk9PntcblxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdib3RoJyB8fCB2YWwuc2NhbGUgPT0gJ3NwT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgc2NhbGU6IHRoaXMucmF0ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gd2lkdGjjgYvjgolyYXRl44KS6KiI566XXG4gICAgICAvLyB0aGlzLnJhdGUgPSBnYi5pbi51LmZsb2F0Rm9ybWF0KHRoaXMuVyAvIHRoaXMuUENCYXNlVyAsIDIpO1xuICAgICAgaWYgKHRoaXMuVyA+IDEzMDApIHRoaXMuVyA9IDEzMDA7XG4gICAgICB0aGlzLnJhdGUgPSB0aGlzLlcgLyB0aGlzLlBDQmFzZVc7XG5cbiAgICAgIC8vIHNjYWxl44GZ44KL44Oq44K544OI44KS44Or44O844OXXG4gICAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnYm90aCcgfHwgdmFsLnNjYWxlID09ICdwY09ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLnJhdGUsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyDjgZPjgaHjgonjga7loLTlkIjjga/jgIFzY2FsZeOCkuaIu+OBmVxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdzcE9ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgfSk7ICBcblxuICAgIH1cblxuICB9XG5cbiAgLy8gc2NhbGXjgZfjgZ/jgonjgIHlhYPjga7lpKfjgY3jgZXliIbkvZnnmb3jgYzjgafjgY3jgovjga7jgadvdmVyZmxvdyBoaWRkZW7jgafmtojjgZlcbiAgd3JhcCgpIHtcblxuXG5cbiAgfVxuXG4gIHJlc2V0KCkge1xuXG4gICAgJC5lYWNoKHRoaXMuJHRhcmdldExpc3QsIChpbmRleCwgdmFsKT0+e1xuXG4gICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzonMCAwJyxcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfSk7XG5cblxuICAgIC8vIOOCpOODmeODs+ODiOino+mZpFxuICAgIGdiLmluLnIucmVtb3ZlKCdzY2FsZVRvcCcpO1xuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIHRoaXMucnVuKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdzY2FsZVRvcCcsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGVUb3AuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEhvdmVyRWZmZWN0U05TU1BGb290ZXJcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdmVyRWZmZWN0U05TU1BGb290ZXIge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwLCAkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLiR3cmFwID0gJHdyYXA7XG4gICAgdGhpcy4kaW5uZXIgPSB0aGlzLiR3cmFwLmZpbmQoJy5pbm5lcicpO1xuICAgIHRoaXMuJHRhcmdldCA9IHRoaXMuJHdyYXAuZmluZCgnLnNucy5zcCAuaWNvblNoYXJlJyk7XG4gICAgdGhpcy4kYmFyID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5iYXInKTtcbiAgICB0aGlzLiRsaXN0ID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5saXN0Jyk7XG4gICAgdGhpcy4kaXRlbSA9IHRoaXMuJHdyYXAuZmluZCgnLnNucy5zcCAubGlzdCAuaXRlbScpO1xuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIHJlYWR5KCkge1xuXG4gICAgLy8gb3hcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kd3JhcCwge3dpZHRoOiAwfSlcblxuICAgIC8vIGJhclxuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRiYXIsIHt3aWR0aDogMH0pXG5cbiAgICAvLyBzbnNcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kaXRlbSwge3g6IC00MCwgb3BhY2l0eTogMH0pXG5cbiAgICB0aGlzLiRiYXIuc2hvdygpO1xuICAgIHRoaXMuJGxpc3Quc2hvdygpO1xuXG4gIH1cblxuICB0b2dnbGUoKSB7XG5cbiAgICBpZiAodGhpcy4kdGFyZ2V0Lmhhc0NsYXNzKCdvbicpKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgIHRoaXMub3BlbigpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuJHRhcmdldC50b2dnbGVDbGFzcygnb24nKTtcblxuICB9XG5cbiAgb3BlbiAodGhhdCkge1xuXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJveCk7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJhcik7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGl0ZW0pO1xuXG4gICAgdGhpcy5yZWFkeSgpO1xuXG4gICAgLy8gYmFy44GM5Ly444Gz44KLXG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuXG4gICAgdGxcbiAgICAgIC8vIGJveOOBjOS8uOOBs+OCi1xuICAgICAgLnRvKHRoaXMuJHdyYXAsIDAuNCwge1xuICAgICAgICB3aWR0aDogMzMwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dFxuICAgICAgfSlcbiAgICAgIC50byh0aGlzLiRiYXIsIDAuMywge1xuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgfSwnLT0wLjInKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMCksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjInKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMSksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjI1JylcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDIpLCAwLjMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgzKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgIFxuICB9XG5cbiAgY2xvc2UgKHRoYXQpIHtcblxuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRib3gpO1xuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRiYXIpO1xuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRpdGVtKTtcblxuICAgIC8vIGJhclxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGxcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDMpLCAwLjMsIHtcbiAgICAgICAgeDogLTQwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAgIH0pXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgyKSwgMC4zLCB7XG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMSksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMCksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgdGhpcy4kbGlzdC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kYmFyLCAwLjIsIHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgdGhpcy4kYmFyLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwnLT0wLjMnKVxuICAgICAgLnRvKHRoaXMuJHdyYXAsIDAuMywge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICB9LCctPTAuMycpXG5cbiAgfVxuXG4gIHJlc2V0KCkge1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuJHRhcmdldC5vZmYoJ2NsaWNrJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCkge1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldFxuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG5cbiAgICAvLyDjgrnjg57jg5vjga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIGlmICh0aGlzLmF1dG9UTCkge1xuICAgICAgdGhpcy5hdXRvVEwua2lsbCgpO1xuICAgICAgdGhpcy5hdXRvVEwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy50bDAyKSB0aGlzLnRsMDIua2lsbCgpO1xuICAgIHRoaXMudGwwMSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy50bDAxXG4gICAgICAgIC8vIOefouWNsOOCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCcuYXJyb3cucGMnKSwgMC40LCB7XG4gICAgICAgICAgc2NhbGVZOiAwLjY1LFxuICAgICAgICAgIHk6IDgsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAvLyDmloflrZfjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgnLnRleHQnKSwgMC40LCB7XG4gICAgICAgICAgeTogMzAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0sJy09MC4zNycpXG4gICAgICAgIFxuICB9XG5cbiAgb25MZWF2ZSAodGhhdCkge1xuXG4gICAgaWYgKHRoaXMudGwwMSkgdGhpcy50bDAxLmtpbGwoKTtcbiAgICB0aGlzLnRsMDIgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMudGwwMlxuICAgICAgLy8g5paH5a2X44KS5LiL44Gr5LiL44GS44KLXG4gICAgICAudG8oJCh0aGF0KS5maW5kKCcudGV4dCcpLCAwLjUsIHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMSxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dFxuICAgICAgfSlcbiAgICAgIC8vIOefouWNsOOCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgLnRvKCQodGhhdCkuZmluZCgnLmFycm93LnBjJyksIDAuNSwge1xuICAgICAgICBzY2FsZVk6IDEsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDEsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgIGlmICh0aGlzLmF1dG9UTCA9PSBudWxsKSB0aGlzLmF1dG9BcnJvdygpOyAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgICB9LCctPTAuNDUnKVxuXG4gIH1cblxuICBhdXRvQXJyb3coKSB7XG5cbiAgICB0aGlzLmF1dG9UTCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OiAtMX0pO1xuXG4gICAgdGhpcy5hdXRvVExcbiAgICAgIC50byh0aGlzLiR0YXJnZXQuZmluZCgnLmFycm93LnBjJyksIDAuNiwge1xuICAgICAgICB5OiA2MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZGVsYXk6IDUuMCxcbiAgICAgICAgc2NhbGVZOiAwLjMsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0pXG4gICAgICAuc2V0KHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwge3NjYWxlWTogMSx5OiAtNjB9KVxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwgMC41LCB7XG4gICAgICAgIHNjYWxlWTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZGVsYXk6IDAuMyxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSlcblxuICB9XG5cbiAgc2V0dXBGaXJzdCgpIHtcblxuICAgIFR3ZWVuTWF4LnNldCgkKCcuc2VjdGlvbjAxIC5uZXh0IC50ZXh0JyksIHt5OiAtNjAsb3BhY2l0eTowLHo6IDEsfSk7XG4gICAgVHdlZW5NYXguc2V0KCQoJy5zZWN0aW9uMDEgLm5leHQgc3ZnJyksIHt5OiAtMzAsb3BhY2l0eTowLHo6IDEsfSk7XG5cbiAgfVxuXG4gIHJ1bkZpcnN0KCkge1xuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgLy8g5paH5a2X44KS5LiL44Gr5LiL44GS44KLXG4gICAgICB0bC50bygkKCcuc2VjdGlvbjAxIC5uZXh0IC50ZXh0JyksIDEuNSwge1xuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKCcuc2VjdGlvbjAxIC5uZXh0IHN2ZycpLCAxLjAsIHtcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgejogMSxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuODInKVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uRW50ZXIuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge3NlbGYub25MZWF2ZS5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dUb3AuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIERpc3BsYXlcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYkdMaW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICBcdHRoaXMuZ2wgPSBudWxsO1xuXG4gIFx0dGhpcy53ZWJnbEluaXQgPSB0aGlzLl93ZWJnbEluaXQuYmluZCh0aGlzKTtcblxuICBcdHRoaXMuY3JlYXRlX3NoYWRlciA9IHRoaXMuX2NyZWF0ZV9zaGFkZXIuYmluZCh0aGlzKTtcbiAgXHR0aGlzLmNyZWF0ZV9wcm9ncmFtID0gdGhpcy5fY3JlYXRlX3Byb2dyYW0uYmluZCh0aGlzKTtcbiAgXHR0aGlzLmNyZWF0ZV92Ym8gPSB0aGlzLl9jcmVhdGVfdmJvLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uSW1tZWRpYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgb25JbW1lZGlhdGUoKSB7XG5cbiAgICAvLyDjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICBnYi5pbi51cC5sb29wKCk7XG5cblx0XHR0aGlzLndlYmdsSW5pdCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG5cdFx0d2luZG93LmNvbnNvbGUubG9nKCdvbkxvYWQnKTtcblxuICB9XG5cbiAgX3dlYmdsSW5pdCgpIHtcblxuXHRcdC8vIGNhbnZhc+OCqOODrOODoeODs+ODiOOCkuWPluW+l1xuXHRcdGxldCBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXHRcdGMud2lkdGggPSAzMDA7XG5cdFx0Yy5oZWlnaHQgPSAzMDA7XG5cblx0XHQvLyB3ZWJnbOOCs+ODs+ODhuOCreOCueODiOOCkuWPluW+l1xuXHRcdHRoaXMuZ2wgPSBjLmdldENvbnRleHQoJ3dlYmdsJykgfHwgYy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKTtcblxuXHRcdC8vIGNhbnZhc+OCkuWIneacn+WMluOBmeOCi+iJsuOCkuioreWumuOBmeOCi1xuXHRcdHRoaXMuZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xuXG5cdFx0Ly8gY2FudmFz44KS5Yid5pyf5YyW44GZ44KL6Zqb44Gu5rex5bqm44KS6Kit5a6a44GZ44KLXG5cdFx0dGhpcy5nbC5jbGVhckRlcHRoKDEuMCk7XG5cblx0XHQvLyBjYW52YXPjgpLliJ3mnJ/ljJZcblx0XHR0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG5cblx0XHQvLyDpoILngrnjgrfjgqfjg7zjg4Djgajjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7nlJ/miJBcblx0XHRsZXQgdl9zaGFkZXIgPSB0aGlzLmNyZWF0ZV9zaGFkZXIoJ3ZzJyk7XG5cdFx0bGV0IGZfc2hhZGVyID0gdGhpcy5jcmVhdGVfc2hhZGVyKCdmcycpO1xuXG5cdFx0Ly8g44OX44Ot44Kw44Op44Og44Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQ44Go44Oq44Oz44KvXG5cdFx0bGV0IHByZyA9IHRoaXMuY3JlYXRlX3Byb2dyYW0odl9zaGFkZXIsIGZfc2hhZGVyKTtcblxuXHRcdC8vIGF0dHJpYnV0ZUxvY2F0aW9u44Gu5Y+W5b6XXG5cdFx0bGV0IGF0dExvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbihwcmcsICdwb3NpdGlvbicpO1xuXG5cdFx0Ly8gYXR0cmlidXRl44Gu6KaB57Sg5pWwKOOBk+OBruWgtOWQiOOBryB4eXog44GuM+imgee0oClcblx0XHRsZXQgYXR0U3RyaWRlID0gMztcblxuXHRcdC8vIOODouODh+ODqyjpoILngrkp44OH44O844K/XG5cdFx0bGV0IHZlcnRleF9wb3NpdGlvbiA9IFtcblx0XHRcdDAuMCwgMS4wLCAwLjAsXG5cdFx0XHQxLjAsIDAuMCwgMC4wLFxuXHRcdFx0LTEuMCwgMC4wLCAwLjBcblx0XHRdO1xuXG5cdFx0Ly8gVkJP44Gu55Sf5oiQXG5cdFx0dmFyIHZibyA9IHRoaXMuY3JlYXRlX3Zibyh2ZXJ0ZXhfcG9zaXRpb24pO1xuXG5cdFx0Ly8gVkJP44KS44OQ44Kk44Oz44OJXG5cdFx0dGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB2Ym8pO1xuXG5cdFx0Ly8gYXR0cmlidXRl5bGe5oCn44KS5pyJ5Yq544Gr44GZ44KLXG5cdFx0dGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRMb2NhdGlvbik7XG5cblx0XHQvLyBhdHRyaWJ1dGXlsZ7mgKfjgpLnmbvpjLJcblx0XHR0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0TG9jYXRpb24sIGF0dFN0cmlkZSwgdGhpcy5nbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG5cdFx0Ly8gbWluTWF0cml4LmpzIOOCkueUqOOBhOOBn+ihjOWIl+mWoumAo+WHpueQhlxuXHRcdC8vIG1hdElW44Kq44OW44K444Kn44Kv44OI44KS55Sf5oiQXG5cdFx0dmFyIG0gPSBuZXcgbWF0SVYoKTtcblxuXHRcdC8vIOWQhOeoruihjOWIl+OBrueUn+aIkOOBqOWIneacn+WMllxuXHRcdHZhciBtTWF0cml4ID0gbS5pZGVudGl0eShtLmNyZWF0ZSgpKTtcblx0XHR2YXIgdk1hdHJpeCA9IG0uaWRlbnRpdHkobS5jcmVhdGUoKSk7XG5cdFx0dmFyIHBNYXRyaXggPSBtLmlkZW50aXR5KG0uY3JlYXRlKCkpO1xuXHRcdHZhciBtdnBNYXRyaXggPSBtLmlkZW50aXR5KG0uY3JlYXRlKCkpO1xuXG5cdFx0Ly8g44OT44Ol44O85bqn5qiZ5aSJ5o+b6KGM5YiXXG5cdFx0bS5sb29rQXQoWzAuMCwgMS4wLCAzLjBdLCBbMCwgMCwgMF0sIFswLCAxLCAwXSwgdk1hdHJpeCk7XG5cblx0XHQvLyDjg5fjg63jgrjjgqfjgq/jgrfjg6fjg7PluqfmqJnlpInmj5vooYzliJdcblx0XHRtLnBlcnNwZWN0aXZlKDkwLCBjLndpZHRoIC8gYy5oZWlnaHQsIDAuMSwgMTAwLCBwTWF0cml4KTtcblxuXHRcdC8vIOWQhOihjOWIl+OCkuaOm+OBkeWQiOOCj+OBm+W6p+aomeWkieaPm+ihjOWIl+OCkuWujOaIkOOBleOBm+OCi1xuXHRcdG0ubXVsdGlwbHkocE1hdHJpeCwgdk1hdHJpeCwgbXZwTWF0cml4KTtcblx0XHRtLm11bHRpcGx5KG12cE1hdHJpeCwgbU1hdHJpeCwgbXZwTWF0cml4KTtcblxuXHRcdC8vIHVuaWZvcm1Mb2NhdGlvbuOBruWPluW+l1xuXHRcdHZhciB1bmlMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgJ212cE1hdHJpeCcpO1xuXG5cdFx0Ly8gdW5pZm9ybUxvY2F0aW9u44G45bqn5qiZ5aSJ5o+b6KGM5YiX44KS55m76YyyXG5cdFx0dGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHVuaUxvY2F0aW9uLCBmYWxzZSwgbXZwTWF0cml4KTtcblxuXHRcdC8vIOODouODh+ODq+OBruaPj+eUu1xuXHRcdHRoaXMuZ2wuZHJhd0FycmF5cyh0aGlzLmdsLlRSSUFOR0xFUywgMCwgMyk7XG5cblx0XHQvLyDjgrPjg7Pjg4bjgq3jgrnjg4jjga7lho3mj4/nlLtcblx0XHR0aGlzLmdsLmZsdXNoKCk7XG5cblxuICB9XG5cblx0X2NyZWF0ZV9zaGFkZXIoaWQpe1xuXHRcdC8vIOOCt+OCp+ODvOODgOOCkuagvOe0jeOBmeOCi+WkieaVsFxuXHRcdHZhciBzaGFkZXI7XG5cblx0XHQvLyBIVE1M44GL44KJc2NyaXB044K/44Kw44G444Gu5Y+C54Wn44KS5Y+W5b6XXG5cdFx0dmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cblx0XHQvLyBzY3JpcHTjgr/jgrDjgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/mipzjgZHjgotcblx0XHRpZighc2NyaXB0RWxlbWVudCl7cmV0dXJuO31cblxuXHRcdC8vIHNjcmlwdOOCv+OCsOOBrnR5cGXlsZ7mgKfjgpLjg4Hjgqfjg4Pjgq9cblx0XHRzd2l0Y2goc2NyaXB0RWxlbWVudC50eXBlKXtcblxuXHRcdFx0Ly8g6aCC54K544K344Kn44O844OA44Gu5aC05ZCIXG5cdFx0XHRjYXNlICd4LXNoYWRlci94LXZlcnRleCc6XG5cdFx0XHRcdHNoYWRlciA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHRoaXMuZ2wuVkVSVEVYX1NIQURFUik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHQvLyDjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7loLTlkIhcblx0XHRcdGNhc2UgJ3gtc2hhZGVyL3gtZnJhZ21lbnQnOlxuXHRcdFx0XHRzaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0aGlzLmdsLkZSQUdNRU5UX1NIQURFUik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdCA6XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyDnlJ/miJDjgZXjgozjgZ/jgrfjgqfjg7zjg4Djgavjgr3jg7zjgrnjgpLlibLjgorlvZPjgabjgotcblx0XHR0aGlzLmdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNjcmlwdEVsZW1lbnQudGV4dCk7XG5cblx0XHQvLyDjgrfjgqfjg7zjg4DjgpLjgrPjg7Pjg5HjgqTjg6vjgZnjgotcblx0XHR0aGlzLmdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuXHRcdC8vIOOCt+OCp+ODvOODgOOBjOato+OBl+OBj+OCs+ODs+ODkeOCpOODq+OBleOCjOOBn+OBi+ODgeOCp+ODg+OCr1xuXHRcdGlmKHRoaXMuZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgdGhpcy5nbC5DT01QSUxFX1NUQVRVUykpe1xuXG5cdFx0XHQvLyDmiJDlip/jgZfjgabjgYTjgZ/jgonjgrfjgqfjg7zjg4DjgpLov5TjgZfjgabntYLkuoZcblx0XHRcdHJldHVybiBzaGFkZXI7XG5cdFx0fWVsc2V7XG5cblx0XHRcdC8vIOWkseaVl+OBl+OBpuOBhOOBn+OCieOCqOODqeODvOODreOCsOOCkuOCouODqeODvOODiOOBmeOCi1xuXHRcdFx0YWxlcnQodGhpcy5nbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xuXHRcdH1cblx0fVxuXG5cdF9jcmVhdGVfcHJvZ3JhbSh2cywgZnMpe1xuXHRcdC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOBrueUn+aIkFxuXHRcdHZhciBwcm9ncmFtID0gdGhpcy5nbC5jcmVhdGVQcm9ncmFtKCk7XG5cblx0XHQvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgavjgrfjgqfjg7zjg4DjgpLlibLjgorlvZPjgabjgotcblx0XHR0aGlzLmdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2cyk7XG5cdFx0dGhpcy5nbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnMpO1xuXG5cdFx0Ly8g44K344Kn44O844OA44KS44Oq44Oz44KvXG5cdFx0dGhpcy5nbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuXHRcdC8vIOOCt+OCp+ODvOODgOOBruODquODs+OCr+OBjOato+OBl+OBj+ihjOOBquOCj+OCjOOBn+OBi+ODgeOCp+ODg+OCr1xuXHRcdGlmKHRoaXMuZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCB0aGlzLmdsLkxJTktfU1RBVFVTKSl7XG5cblx0XHRcdC8vIOaIkOWKn+OBl+OBpuOBhOOBn+OCieODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOCkuacieWKueOBq+OBmeOCi1xuXHRcdFx0dGhpcy5nbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG5cdFx0XHQvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TjgZfjgabntYLkuoZcblx0XHRcdHJldHVybiBwcm9ncmFtO1xuXHRcdH1lbHNle1xuXG5cdFx0XHQvLyDlpLHmlZfjgZfjgabjgYTjgZ/jgonjgqjjg6njg7zjg63jgrDjgpLjgqLjg6njg7zjg4jjgZnjgotcblx0XHRcdGFsZXJ0KHRoaXMuZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFZCT+OCkueUn+aIkOOBmeOCi+mWouaVsFxuXHRfY3JlYXRlX3ZibyhkYXRhKXtcblx0XHQvLyDjg5Djg4Pjg5XjgqHjgqrjg5bjgrjjgqfjgq/jg4jjga7nlJ/miJBcblx0XHR2YXIgdmJvID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcblxuXHRcdC8vIOODkOODg+ODleOCoeOCkuODkOOCpOODs+ODieOBmeOCi1xuXHRcdHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdmJvKTtcblxuXHRcdC8vIOODkOODg+ODleOCoeOBq+ODh+ODvOOCv+OCkuOCu+ODg+ODiFxuXHRcdHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShkYXRhKSwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG5cblx0XHQvLyDjg5Djg4Pjg5XjgqHjga7jg5DjgqTjg7Pjg4njgpLnhKHlirnljJZcblx0XHR0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xuXG5cdFx0Ly8g55Sf5oiQ44GX44GfIFZCTyDjgpLov5TjgZfjgabntYLkuoZcblx0XHRyZXR1cm4gdmJvO1xuXHR9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1dlYkdMaW5pdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG52YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXG51bmlmb3JtIHZlYzMgY29sb3I7XFxuXFxuY29uc3QgdmVjMyBMaWdodCA9IHZlYzMoMS4wLCAyLjAsIC43KTtcXG5cXG5mbG9hdCBkaWZmdXNlKHZlYzMgTiwgdmVjMyBMKSB7XFxuXFx0cmV0dXJuIG1heChkb3QoTiwgbm9ybWFsaXplKEwpKSwgMC4wKTtcXG59XFxuXFxuXFxudmVjMyBkaWZmdXNlKHZlYzMgTiwgdmVjMyBMLCB2ZWMzIEMpIHtcXG5cXHRyZXR1cm4gZGlmZnVzZShOLCBMKSAqIEM7XFxufVxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuXFx0ZmxvYXQgZCA9IGRpZmZ1c2Uodk5vcm1hbCwgTGlnaHQpICogMC4wNTtcXG5cXHR2ZWMzIGZpbmFsID0gY29sb3I7XFxuXFx0aWYoY29sb3IuciA+IC41KSB7XFxuXFx0XFx0ZmluYWwgLT0gZDtcXG5cXHR9IGVsc2Uge1xcblxcdFxcdGZpbmFsICs9IGQ7XFxuXFx0fVxcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGZpbmFsLCAxLjApO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS90ZXN0LmZyYWdcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=