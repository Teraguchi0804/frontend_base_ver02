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
	      // gb.in.up = new UpdateMgr();
	      // gb.in.r = new ResizeMgr();
	      // gb.in.s = new ScrollMgr();
	      // gb.in.m = new MouseMgr();
	      // gb.in.rm = new ReadyMgr();
	      // gb.in.loadMgr = new LoadMgr();
	      // gb.in.sct = new ScrollTransition();
	
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
	      // gb.in.Layout = new Layout();
	
	
	      // 準備完了後の処理
	      // gb.in.rm.onCompletedFunc = ()=>{new DisplayOpening();}
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      // ------------------------------------------------------------
	      //  デバイス・ブラウザ判定
	      //  スマホの向き判定
	      //  ページ情報取得
	      // ------------------------------------------------------------
	      // gb.in.je = new JudgeEnvironment();
	      // gb.in.resImg = new ResponsiveSwitchImg();
	      // gb.in.sns = new Sns($('.fbShare'),$('.twShare'),$('.lineShare'),$('.onMail'))
	      // gb.in.swt = new SwipeTransition();
	
	      // gb.in.f.checkCssBlend();
	
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
	
	      // gb.in.loadMgr.start();
	
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
	
	
	// import WebGLinit from './WebGLinit.js';
	// import Canvas from '../Visual/Canvas.js';
	
	
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
	
	var _Canvas = __webpack_require__(47);
	
	var _Canvas2 = _interopRequireDefault(_Canvas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import vs from './test.frag';
	
	
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
	      // gb.in.up.loop();
	
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // gb.in.canvas = new Canvas();
	      // gb.in.canvas.init();
	
	      gb.in.canvas = new _Canvas2.default({
	        output: document.getElementById('webgl-output')
	      });
	
	      gb.in.canvas.init();
	
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
	      // gb.in.scaleTop = new ScaleTop();
	      // gb.in.pos = new Position();
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	
	      // sp
	      // gb.in.sliderTop.setEvents();
	      // gb.in.snsSPHoverEf = new HoverEffectSNSSPFooter($('#sideL'));
	
	      // pc
	
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Entry2 = __webpack_require__(48);
	
	var _Entry3 = _interopRequireDefault(_Entry2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: Canvas
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	// import Camera from './Utils/Camera.js';
	
	'use strict';
	
	var Canvas = function (_Entry) {
	  _inherits(Canvas, _Entry);
	
	  function Canvas() {
	    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Canvas);
	
	    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this));
	
	    _this.width = window.innerWidth;
	    _this.height = window.innerHeight;
	    _this.output = opts.output || document.createElement('div');
	
	    _this.camera = null;
	    _this.renderer = null;
	    _this.scene = null;
	    _this.cube = null;
	
	    _this.createCamera = _this._createCamera.bind(_this);
	    _this.createRenderer = _this._createRenderer.bind(_this);
	    _this.createScene = _this._createScene.bind(_this);
	    _this.createObject = _this._createObject.bind(_this);
	    _this.orbitControls = _this._orbitControls.bind(_this);
	
	    _this.onResize = _this._onResize.bind(_this);
	
	    _this.Update = _this._Update.bind(_this);
	
	    return _this;
	  }
	
	  /**
	   * 初期化
	   */
	
	
	  _createClass(Canvas, [{
	    key: 'init',
	    value: function init() {
	      var _this2 = this;
	
	      this.createCamera();
	      this.createScene();
	      this.createRenderer();
	
	      this.orbitControls();
	
	      this.createObject();
	
	      this.Update();
	
	      //リサイズイベント発火
	      window.addEventListener('resize', function () {
	        _this2.onResize();
	      }, false);
	    }
	
	    /**
	     * カメラ作成
	     */
	
	  }, {
	    key: '_createCamera',
	    value: function _createCamera() {
	
	      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
	      this.camera.position.x = -30;
	      this.camera.position.y = 40;
	      this.camera.position.z = 30;
	      // window.console.log(this.scene.position);
	      // window.console.log(this.scene);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    }
	
	    /**
	     * レンダラー作成
	     */
	
	  }, {
	    key: '_createRenderer',
	    value: function _createRenderer() {
	
	      this.renderer = new THREE.WebGLRenderer({
	        alpha: false,
	        antialias: false,
	        stencil: false,
	        depth: true,
	        premultipliedAlpha: false
	      });
	
	      this.renderer.setClearColor(0xffffff);
	      this.renderer.setPixelRatio(window.devicePixelRatio || 1);
	      this.renderer.setSize(this.width, this.height);
	      this.output.appendChild(this.renderer.domElement);
	    }
	
	    /**
	     *　シーン作成
	     */
	
	  }, {
	    key: '_createScene',
	    value: function _createScene() {
	
	      this.scene = new THREE.Scene();
	    }
	
	    /**
	     *　Object作成
	     */
	
	  }, {
	    key: '_createObject',
	    value: function _createObject() {
	
	      var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	      var cubeMaterial = new THREE.MeshBasicMaterial({
	        color: 0x000000,
	        wireframe: true
	      });
	
	      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	      this.cube.position.x = 3;
	      this.cube.position.y = 3;
	      this.cube.position.z = 3;
	
	      this.scene.add(this.cube);
	    }
	
	    /**
	     *　更新
	     */
	
	  }, {
	    key: '_Update',
	    value: function _Update() {
	      var _this3 = this;
	
	      requestAnimationFrame(function () {
	        _this3.Update();
	      });
	      // this.controls.update();
	      this.renderer.render(this.scene, this.camera);
	    }
	
	    /**
	     *　画面リサイズ
	     */
	
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      this.camera.aspect = window.innerWidth / window.innerHeight;
	      this.camera.updateProjectionMatrix();
	      this.renderer.setSize(window.innerWidth, window.innerHeight);
	    }
	
	    /**
	      * カメラコントロール
	     */
	
	  }, {
	    key: '_orbitControls',
	    value: function _orbitControls() {
	      this.controls = new THREE.OrbitControls(this.camera);
	      this.controls.autoRotate = true;
	      var clock = new THREE.Clock();
	
	      var delta = clock.getDelta();
	      this.controls.update(delta);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Canvas;
	}(_Entry3.default);
	
	exports.default = Canvas;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Entry
	 * Date:
	 * Author:
	 */
	
	// window.THREE = require('../libs/three.min.js');
	__webpack_require__(49);
	
	'use strict';
	
	var Entry = function () {
		function Entry() {
			_classCallCheck(this, Entry);
		}
	
		/**
	  * 初期化
	  */
	
	
		_createClass(Entry, [{
			key: 'init',
			value: function init() {}
		}]);
	
		return Entry;
	}();
	
	exports.default = Entry;

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @author qiao / https://github.com/qiao
	 * @author mrdoob / http://mrdoob.com
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 * @author erich666 / http://erichaines.com
	 */
	
	// This set of controls performs orbiting, dollying (zooming), and panning.
	// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
	//
	//    Orbit - left mouse / touch: one finger move
	//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
	//    Pan - right mouse, or arrow keys / touch: three finter swipe
	
	THREE.OrbitControls = function (object, domElement) {
	
		this.object = object;
	
		this.domElement = domElement !== undefined ? domElement : document;
	
		// Set to false to disable this control
		this.enabled = true;
	
		// "target" sets the location of focus, where the object orbits around
		this.target = new THREE.Vector3();
	
		// How far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;
	
		// How far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;
	
		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians
	
		// How far you can orbit horizontally, upper and lower limits.
		// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
		this.minAzimuthAngle = -Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians
	
		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.25;
	
		// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;
	
		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;
	
		// Set to false to disable panning
		this.enablePan = true;
		this.keyPanSpeed = 7.0; // pixels moved per arrow key push
	
		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
	
		// Set to false to disable use of the keys
		this.enableKeys = true;
	
		// The four arrow keys
		this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
	
		// Mouse buttons
		this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };
	
		// for reset
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;
	
		//
		// public methods
		//
	
		this.getPolarAngle = function () {
	
			return spherical.phi;
		};
	
		this.getAzimuthalAngle = function () {
	
			return spherical.theta;
		};
	
		this.reset = function () {
	
			scope.target.copy(scope.target0);
			scope.object.position.copy(scope.position0);
			scope.object.zoom = scope.zoom0;
	
			scope.object.updateProjectionMatrix();
			scope.dispatchEvent(changeEvent);
	
			scope.update();
	
			state = STATE.NONE;
		};
	
		// this method is exposed, but perhaps it would be better if we can make it private...
		this.update = function () {
	
			var offset = new THREE.Vector3();
	
			// so camera.up is the orbit axis
			var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
			var quatInverse = quat.clone().inverse();
	
			var lastPosition = new THREE.Vector3();
			var lastQuaternion = new THREE.Quaternion();
	
			return function update() {
	
				var position = scope.object.position;
	
				offset.copy(position).sub(scope.target);
	
				// rotate offset to "y-axis-is-up" space
				offset.applyQuaternion(quat);
	
				// angle from z-axis around y-axis
				spherical.setFromVector3(offset);
	
				if (scope.autoRotate && state === STATE.NONE) {
	
					rotateLeft(getAutoRotationAngle());
				}
	
				spherical.theta += sphericalDelta.theta;
				spherical.phi += sphericalDelta.phi;
	
				// restrict theta to be between desired limits
				spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));
	
				// restrict phi to be between desired limits
				spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
	
				spherical.makeSafe();
	
				spherical.radius *= scale;
	
				// restrict radius to be between desired limits
				spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));
	
				// move target to panned location
				scope.target.add(panOffset);
	
				offset.setFromSpherical(spherical);
	
				// rotate offset back to "camera-up-vector-is-up" space
				offset.applyQuaternion(quatInverse);
	
				position.copy(scope.target).add(offset);
	
				scope.object.lookAt(scope.target);
	
				if (scope.enableDamping === true) {
	
					sphericalDelta.theta *= 1 - scope.dampingFactor;
					sphericalDelta.phi *= 1 - scope.dampingFactor;
				} else {
	
					sphericalDelta.set(0, 0, 0);
				}
	
				scale = 1;
				panOffset.set(0, 0, 0);
	
				// update condition is:
				// min(camera displacement, camera rotation in radians)^2 > EPS
				// using small-angle approximation cos(x/2) = 1 - x^2 / 8
	
				if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
	
					scope.dispatchEvent(changeEvent);
	
					lastPosition.copy(scope.object.position);
					lastQuaternion.copy(scope.object.quaternion);
					zoomChanged = false;
	
					return true;
				}
	
				return false;
			};
		}();
	
		this.dispose = function () {
	
			scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
			scope.domElement.removeEventListener('mousedown', onMouseDown, false);
			scope.domElement.removeEventListener('wheel', onMouseWheel, false);
	
			scope.domElement.removeEventListener('touchstart', onTouchStart, false);
			scope.domElement.removeEventListener('touchend', onTouchEnd, false);
			scope.domElement.removeEventListener('touchmove', onTouchMove, false);
	
			document.removeEventListener('mousemove', onMouseMove, false);
			document.removeEventListener('mouseup', onMouseUp, false);
	
			window.removeEventListener('keydown', onKeyDown, false);
	
			//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
		};
	
		//
		// internals
		//
	
		var scope = this;
	
		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };
	
		var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };
	
		var state = STATE.NONE;
	
		var EPS = 0.000001;
	
		// current position in spherical coordinates
		var spherical = new THREE.Spherical();
		var sphericalDelta = new THREE.Spherical();
	
		var scale = 1;
		var panOffset = new THREE.Vector3();
		var zoomChanged = false;
	
		var rotateStart = new THREE.Vector2();
		var rotateEnd = new THREE.Vector2();
		var rotateDelta = new THREE.Vector2();
	
		var panStart = new THREE.Vector2();
		var panEnd = new THREE.Vector2();
		var panDelta = new THREE.Vector2();
	
		var dollyStart = new THREE.Vector2();
		var dollyEnd = new THREE.Vector2();
		var dollyDelta = new THREE.Vector2();
	
		function getAutoRotationAngle() {
	
			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
		}
	
		function getZoomScale() {
	
			return Math.pow(0.95, scope.zoomSpeed);
		}
	
		function rotateLeft(angle) {
	
			sphericalDelta.theta -= angle;
		}
	
		function rotateUp(angle) {
	
			sphericalDelta.phi -= angle;
		}
	
		var panLeft = function () {
	
			var v = new THREE.Vector3();
	
			return function panLeft(distance, objectMatrix) {
	
				v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
				v.multiplyScalar(-distance);
	
				panOffset.add(v);
			};
		}();
	
		var panUp = function () {
	
			var v = new THREE.Vector3();
	
			return function panUp(distance, objectMatrix) {
	
				v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
				v.multiplyScalar(distance);
	
				panOffset.add(v);
			};
		}();
	
		// deltaX and deltaY are in pixels; right and down are positive
		var pan = function () {
	
			var offset = new THREE.Vector3();
	
			return function pan(deltaX, deltaY) {
	
				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
	
				if (scope.object instanceof THREE.PerspectiveCamera) {
	
					// perspective
					var position = scope.object.position;
					offset.copy(position).sub(scope.target);
					var targetDistance = offset.length();
	
					// half of the fov is center to top of screen
					targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);
	
					// we actually don't use screenWidth, since perspective camera is fixed to screen height
					panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
					panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
				} else if (scope.object instanceof THREE.OrthographicCamera) {
	
					// orthographic
					panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
					panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
				} else {
	
					// camera neither orthographic nor perspective
					console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
					scope.enablePan = false;
				}
			};
		}();
	
		function dollyIn(dollyScale) {
	
			if (scope.object instanceof THREE.PerspectiveCamera) {
	
				scale /= dollyScale;
			} else if (scope.object instanceof THREE.OrthographicCamera) {
	
				scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
				scope.object.updateProjectionMatrix();
				zoomChanged = true;
			} else {
	
				console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
				scope.enableZoom = false;
			}
		}
	
		function dollyOut(dollyScale) {
	
			if (scope.object instanceof THREE.PerspectiveCamera) {
	
				scale *= dollyScale;
			} else if (scope.object instanceof THREE.OrthographicCamera) {
	
				scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
				scope.object.updateProjectionMatrix();
				zoomChanged = true;
			} else {
	
				console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
				scope.enableZoom = false;
			}
		}
	
		//
		// event callbacks - update the object state
		//
	
		function handleMouseDownRotate(event) {
	
			//console.log( 'handleMouseDownRotate' );
	
			rotateStart.set(event.clientX, event.clientY);
		}
	
		function handleMouseDownDolly(event) {
	
			//console.log( 'handleMouseDownDolly' );
	
			dollyStart.set(event.clientX, event.clientY);
		}
	
		function handleMouseDownPan(event) {
	
			//console.log( 'handleMouseDownPan' );
	
			panStart.set(event.clientX, event.clientY);
		}
	
		function handleMouseMoveRotate(event) {
	
			//console.log( 'handleMouseMoveRotate' );
	
			rotateEnd.set(event.clientX, event.clientY);
			rotateDelta.subVectors(rotateEnd, rotateStart);
	
			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
	
			// rotating across whole screen goes 360 degrees around
			rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
	
			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
	
			rotateStart.copy(rotateEnd);
	
			scope.update();
		}
	
		function handleMouseMoveDolly(event) {
	
			//console.log( 'handleMouseMoveDolly' );
	
			dollyEnd.set(event.clientX, event.clientY);
	
			dollyDelta.subVectors(dollyEnd, dollyStart);
	
			if (dollyDelta.y > 0) {
	
				dollyIn(getZoomScale());
			} else if (dollyDelta.y < 0) {
	
				dollyOut(getZoomScale());
			}
	
			dollyStart.copy(dollyEnd);
	
			scope.update();
		}
	
		function handleMouseMovePan(event) {
	
			//console.log( 'handleMouseMovePan' );
	
			panEnd.set(event.clientX, event.clientY);
	
			panDelta.subVectors(panEnd, panStart);
	
			pan(panDelta.x, panDelta.y);
	
			panStart.copy(panEnd);
	
			scope.update();
		}
	
		function handleMouseUp(event) {
	
			//console.log( 'handleMouseUp' );
	
		}
	
		function handleMouseWheel(event) {
	
			//console.log( 'handleMouseWheel' );
	
			if (event.deltaY < 0) {
	
				dollyOut(getZoomScale());
			} else if (event.deltaY > 0) {
	
				dollyIn(getZoomScale());
			}
	
			scope.update();
		}
	
		function handleKeyDown(event) {
	
			//console.log( 'handleKeyDown' );
	
			switch (event.keyCode) {
	
				case scope.keys.UP:
					pan(0, scope.keyPanSpeed);
					scope.update();
					break;
	
				case scope.keys.BOTTOM:
					pan(0, -scope.keyPanSpeed);
					scope.update();
					break;
	
				case scope.keys.LEFT:
					pan(scope.keyPanSpeed, 0);
					scope.update();
					break;
	
				case scope.keys.RIGHT:
					pan(-scope.keyPanSpeed, 0);
					scope.update();
					break;
	
			}
		}
	
		function handleTouchStartRotate(event) {
	
			//console.log( 'handleTouchStartRotate' );
	
			rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
		}
	
		function handleTouchStartDolly(event) {
	
			//console.log( 'handleTouchStartDolly' );
	
			var dx = event.touches[0].pageX - event.touches[1].pageX;
			var dy = event.touches[0].pageY - event.touches[1].pageY;
	
			var distance = Math.sqrt(dx * dx + dy * dy);
	
			dollyStart.set(0, distance);
		}
	
		function handleTouchStartPan(event) {
	
			//console.log( 'handleTouchStartPan' );
	
			panStart.set(event.touches[0].pageX, event.touches[0].pageY);
		}
	
		function handleTouchMoveRotate(event) {
	
			//console.log( 'handleTouchMoveRotate' );
	
			rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
			rotateDelta.subVectors(rotateEnd, rotateStart);
	
			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
	
			// rotating across whole screen goes 360 degrees around
			rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
	
			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
	
			rotateStart.copy(rotateEnd);
	
			scope.update();
		}
	
		function handleTouchMoveDolly(event) {
	
			//console.log( 'handleTouchMoveDolly' );
	
			var dx = event.touches[0].pageX - event.touches[1].pageX;
			var dy = event.touches[0].pageY - event.touches[1].pageY;
	
			var distance = Math.sqrt(dx * dx + dy * dy);
	
			dollyEnd.set(0, distance);
	
			dollyDelta.subVectors(dollyEnd, dollyStart);
	
			if (dollyDelta.y > 0) {
	
				dollyOut(getZoomScale());
			} else if (dollyDelta.y < 0) {
	
				dollyIn(getZoomScale());
			}
	
			dollyStart.copy(dollyEnd);
	
			scope.update();
		}
	
		function handleTouchMovePan(event) {
	
			//console.log( 'handleTouchMovePan' );
	
			panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
	
			panDelta.subVectors(panEnd, panStart);
	
			pan(panDelta.x, panDelta.y);
	
			panStart.copy(panEnd);
	
			scope.update();
		}
	
		function handleTouchEnd(event) {}
	
		//console.log( 'handleTouchEnd' );
	
		//
		// event handlers - FSM: listen for events and reset state
		//
	
		function onMouseDown(event) {
	
			if (scope.enabled === false) return;
	
			event.preventDefault();
	
			if (event.button === scope.mouseButtons.ORBIT) {
	
				if (scope.enableRotate === false) return;
	
				handleMouseDownRotate(event);
	
				state = STATE.ROTATE;
			} else if (event.button === scope.mouseButtons.ZOOM) {
	
				if (scope.enableZoom === false) return;
	
				handleMouseDownDolly(event);
	
				state = STATE.DOLLY;
			} else if (event.button === scope.mouseButtons.PAN) {
	
				if (scope.enablePan === false) return;
	
				handleMouseDownPan(event);
	
				state = STATE.PAN;
			}
	
			if (state !== STATE.NONE) {
	
				document.addEventListener('mousemove', onMouseMove, false);
				document.addEventListener('mouseup', onMouseUp, false);
	
				scope.dispatchEvent(startEvent);
			}
		}
	
		function onMouseMove(event) {
	
			if (scope.enabled === false) return;
	
			event.preventDefault();
	
			if (state === STATE.ROTATE) {
	
				if (scope.enableRotate === false) return;
	
				handleMouseMoveRotate(event);
			} else if (state === STATE.DOLLY) {
	
				if (scope.enableZoom === false) return;
	
				handleMouseMoveDolly(event);
			} else if (state === STATE.PAN) {
	
				if (scope.enablePan === false) return;
	
				handleMouseMovePan(event);
			}
		}
	
		function onMouseUp(event) {
	
			if (scope.enabled === false) return;
	
			handleMouseUp(event);
	
			document.removeEventListener('mousemove', onMouseMove, false);
			document.removeEventListener('mouseup', onMouseUp, false);
	
			scope.dispatchEvent(endEvent);
	
			state = STATE.NONE;
		}
	
		function onMouseWheel(event) {
	
			if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
	
			event.preventDefault();
			event.stopPropagation();
	
			handleMouseWheel(event);
	
			scope.dispatchEvent(startEvent); // not sure why these are here...
			scope.dispatchEvent(endEvent);
		}
	
		function onKeyDown(event) {
	
			if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;
	
			handleKeyDown(event);
		}
	
		function onTouchStart(event) {
	
			if (scope.enabled === false) return;
	
			switch (event.touches.length) {
	
				case 1:
					// one-fingered touch: rotate
	
					if (scope.enableRotate === false) return;
	
					handleTouchStartRotate(event);
	
					state = STATE.TOUCH_ROTATE;
	
					break;
	
				case 2:
					// two-fingered touch: dolly
	
					if (scope.enableZoom === false) return;
	
					handleTouchStartDolly(event);
	
					state = STATE.TOUCH_DOLLY;
	
					break;
	
				case 3:
					// three-fingered touch: pan
	
					if (scope.enablePan === false) return;
	
					handleTouchStartPan(event);
	
					state = STATE.TOUCH_PAN;
	
					break;
	
				default:
	
					state = STATE.NONE;
	
			}
	
			if (state !== STATE.NONE) {
	
				scope.dispatchEvent(startEvent);
			}
		}
	
		function onTouchMove(event) {
	
			if (scope.enabled === false) return;
	
			event.preventDefault();
			event.stopPropagation();
	
			switch (event.touches.length) {
	
				case 1:
					// one-fingered touch: rotate
	
					if (scope.enableRotate === false) return;
					if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...
	
					handleTouchMoveRotate(event);
	
					break;
	
				case 2:
					// two-fingered touch: dolly
	
					if (scope.enableZoom === false) return;
					if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...
	
					handleTouchMoveDolly(event);
	
					break;
	
				case 3:
					// three-fingered touch: pan
	
					if (scope.enablePan === false) return;
					if (state !== STATE.TOUCH_PAN) return; // is this needed?...
	
					handleTouchMovePan(event);
	
					break;
	
				default:
	
					state = STATE.NONE;
	
			}
		}
	
		function onTouchEnd(event) {
	
			if (scope.enabled === false) return;
	
			handleTouchEnd(event);
	
			scope.dispatchEvent(endEvent);
	
			state = STATE.NONE;
		}
	
		function onContextMenu(event) {
	
			event.preventDefault();
		}
	
		//
	
		scope.domElement.addEventListener('contextmenu', onContextMenu, false);
	
		scope.domElement.addEventListener('mousedown', onMouseDown, false);
		scope.domElement.addEventListener('wheel', onMouseWheel, false);
	
		scope.domElement.addEventListener('touchstart', onTouchStart, false);
		scope.domElement.addEventListener('touchend', onTouchEnd, false);
		scope.domElement.addEventListener('touchmove', onTouchMove, false);
	
		window.addEventListener('keydown', onKeyDown, false);
	
		// force an update at start
	
		this.update();
	};
	
	THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
	THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;
	
	Object.defineProperties(THREE.OrbitControls.prototype, {
	
		center: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .center has been renamed to .target');
				return this.target;
			}
	
		},
	
		// backward compatibility
	
		noZoom: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
				return !this.enableZoom;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
				this.enableZoom = !value;
			}
	
		},
	
		noRotate: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
				return !this.enableRotate;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
				this.enableRotate = !value;
			}
	
		},
	
		noPan: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
				return !this.enablePan;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
				this.enablePan = !value;
			}
	
		},
	
		noKeys: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
				return !this.enableKeys;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
				this.enableKeys = !value;
			}
	
		},
	
		staticMoving: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
				return !this.enableDamping;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
				this.enableDamping = !value;
			}
	
		},
	
		dynamicDampingFactor: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
				return this.dampingFactor;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
				this.dampingFactor = value;
			}
	
		}
	
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjllYjE4NzBjZmVhZGQ4OGJlZGEiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1BhZ2UvQ29tbW9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvbmYuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGF0YS9Tb3VuZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvVXRpbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRnVuYy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvUmVhZHlNZ3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9SZWFkeVBlcmNlbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvUmVzaXplTWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9TY3JvbGxNZ3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL01vdXNlTWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZE1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9Zb3V0dWJlRm9yU2VjMDEuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0Rpc3BsYXkvTGF5b3V0L0Z1bGxTaXplLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0p1ZGdlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9fZXZlbnRzL1Jlc3BvbnNpdmVTd2l0Y2hJbWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Td2lwZVRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9TY3JvbGxUcmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU25zLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9lanMvaW5jL21ldGFEYXRhLmpzb24iLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2l6ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9TaXplL1NjYWxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1Bvc3Rpb24vUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9NYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvRWZmZWN0cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNMb29wLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DcmVhdGVDYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvX2RldGFpbHMvQ2FudmFzLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL1BsYW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHNMb29wLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c1RpbWVsaW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9Tb21ldGltZXNNZ3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9fZGV0YWlscy9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvUGFyYW0uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzL1Byb2ZpbGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGVUb3AuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0Fycm93VG9wLmpzIiwid2VicGFjazovLy8vVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1Zpc3VhbC9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiXSwibmFtZXMiOlsid2luZG93IiwiZ2IiLCJ1bmRlZmluZWQiLCJpbiIsImNvbW1vbiIsIm1haW4iLCJDb21tb24iLCJvbkltbWVkaWF0ZSIsInNldEV2ZW50cyIsImNvbmYiLCJ1IiwiZiIsIiQiLCJkb2N1bWVudCIsIm9uIiwib25SZWFkeSIsImJpbmQiLCJvbkxvYWQiLCJDb25mIiwiUkVMRUFTRSIsIkZMRyIsIkxPRyIsIlBBUkFNIiwiU1RBVFMiLCJkZWZXIiwiZGVmSCIsIlciLCJIIiwic3BXIiwic3BIIiwiYnAiLCJtb2RlIiwia2V5cyIsInN3aXRjaE1vZGUiLCJzb3VuZERhdGEiLCJzZWMwMkltZ051bSIsInlvdXR1YmVJRDAxIiwieW91dHViZUlEMDIiLCJ3ZWJGb250TG9hZGVkIiwiaSIsImtleSIsImxlbiIsInBhcmFtIiwicmVmIiwicmVmMSIsInZhbHVlIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJqIiwib2JqIiwiayIsInZhbCIsIlNvdW5kRGF0YSIsIlV0aWwiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiYXBwViIsImFwcFZlcnNpb24iLCJpc1Jlc1NQIiwiaXNSZXNQQyIsImlzUEMiLCJpc1NQIiwiaXNUQUIiLCJpc01CIiwiaXNJRSIsImlzU2V0U1BTaXplIiwic3RhcnRUaW1lIiwiZWxhcHNlZFRpbWUiLCJub3ciLCJEYXRlIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImhpdCIsInJhbmdlIiwibnVtIiwicmVzTWluIiwicmVzTWF4IiwiYmFzZU1pbiIsImJhc2VNYXgiLCJwIiwibiIsInBvcyIsIlN0cmluZyIsImluZGV4T2YiLCJzdWJzdHIiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInJhZGlhbnMiLCJQSSIsImFuZ2xlIiwicDEiLCJwMiIsInNxcnQiLCJwb3ciLCJ4IiwieSIsImFyciIsInNvcnQiLCJhIiwiYiIsImFyeSIsInNsaWNlIiwidCIsIkFycmF5IiwicHVzaCIsInNodWZmbGVBcnkiLCJsIiwibGVuMSIsIm5ld0FyciIsInBhcmEiLCJkZXNjIiwibGlzdCIsInJldHVybktleSIsImdldFRpbWUiLCJmbGciLCJjc3MiLCJtZWRpYSIsInBhdHRlcm4iLCJSZWdFeHAiLCJqb2luIiwidGVzdCIsImFkZENsYXNzIiwiaXNJcGFkIiwiaXNBbmRyb2lkIiwicGxhdGZvcm0iLCJpc0lvcyIsIm1zaWUiLCJwYXJzZUludCIsIm1hdGNoIiwiaXNJZTEwVW5kZXIiLCJsb2ciLCJpc0lFMTEiLCJyZW1vdmVDbGFzcyIsInZlcnNpb24iLCJwYXJzZUZsb2F0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidXJsIiwiaHJlZiIsInBhcmFtSXRlbXMiLCJwYXJhbUl0ZW0iLCJoYXNoIiwiY29va2llIiwiaXNDb250YWluIiwiciIsImciLCJzdHIiLCJ0b1N0cmluZyIsImNvbnRhaW4iLCJudW1iZXIiLCJfcG93Iiwicm91bmQiLCJyZXMiLCJvcmciLCJkZXN0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJnZXROb3ciLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsIm1pbGxTZWNvbmQiLCJnZXRNaWxsaXNlY29uZHMiLCJnZXREYXRlIiwibW9udGhkYXlzIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIndlZWtEYXlKUCIsIndESiIsImdldERheSIsIndlZWtEYXlFTiIsIndERSIsImRhdGUiLCJOdW1iZXIiLCJpZ25vcmVBcnJheSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCIkdGFyZ2V0IiwiJGltZyIsImVhY2giLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiYXR0ciIsInRyaWdnZXIiLCJzZWxmIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib2ZmIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJwYXRobmFtZSIsImV2ZW50IiwicmV0dXJuVmFsdWUiLCJrZXlDb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ud2hlZWwiLCJvbm1vdXNld2hlZWwiLCJvbnRvdWNobW92ZSIsIm9ua2V5ZG93biIsInByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJGdW5jIiwiYmxhbmsiLCJkZWJ1Z2dlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImV4cGFuZGpRdWVyeSIsIm1ldGhvZHMiLCJjb25zb2xlIiwibSIsInByZXBlbmQiLCJGUFMiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsImpRdWVyeSIsImZuIiwiZXh0ZW5kIiwiYWRqdXN0IiwiYWRqdXN0VyIsImFkanVzdEgiLCJDU1MiLCJzdXBwb3J0cyIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInYiLCJpc0FuZHJvaWRWZXJzaW9uIiwiYWxlcnQiLCJSZWFkeU1nciIsImNvbXBsZXRlZCIsInRvdGFsIiwiY3VycmVudCIsIm9uQ29tcGxldGVkRnVuYyIsInJlYWR5UGVyY2VudCIsInVwIiwicmVtb3ZlIiwidXBkYXRlIiwic2V0dXAiLCJSZWFkeVBlcmNlbnQiLCIkbG9hZGluZyIsIiRiYXIiLCIkcGVyY2VudCIsImlzTG9jayIsInNldFRpbWVvdXRMb2NrIiwidGFyZ2V0Iiwicm0iLCJ0ZXh0Iiwib25Db21wbGV0ZSIsIlR3ZWVuTWF4IiwidG8iLCJzY2FsZSIsIm9wYWNpdHkiLCJlYXNlIiwiUG93ZXIzIiwiZWFzZUluT3V0IiwiVXBkYXRlTWdyIiwiY250IiwidXBkYXRlTGlzdCIsIlRpbWVyIiwiaXNTdG9wIiwibmFtZSIsImZ1bmMiLCJhcnJSZW1vdmUiLCJsb29wIiwiY2hlY2siLCJzcGxpY2UiLCJSZXNpemVNZ3IiLCJyZXNpemVMaXN0Iiwid3MiLCJvbGRXIiwib2xkSCIsIm9uUmVzaXplIiwiZ2V0V2luZG93U2l6ZSIsIlNjcm9sbE1nciIsInNjcm9sbExpc3QiLCJzY3JvbGxFbmRMaXN0Iiwic3QiLCJzYiIsInN2IiwiU1RBbW91bnQiLCJvZmZzZXQiLCJpc1N0YXJ0IiwiZW5kIiwic2Nyb2xsVG9wIiwiZGVsdGEiLCJkZWx0YVgiLCJkZWx0YVkiLCJpc1dpbiIsImlzRkYiLCJzY3JvbGxMZWZ0Iiwib25TY3JvbGwiLCJvbk1vdXNlV2hlZWwiLCJNb3VzZU1nciIsImN4IiwiY3kiLCJtb3VzZU1vdmVMaXN0IiwibW91c2VNb3ZlU3RhcnRMaXN0IiwibW91c2VNb3ZlRW5kTGlzdCIsImVuZFRpbWUiLCJvbkVuZCIsIm9yaWdpbmFsRXZlbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJvZmZzZXRYIiwibGVmdCIsInRvcCIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaG1vdmUiLCJvbk1vdXNlbW92ZSIsIkxvYWRNZ3IiLCJsb2FkZXIiLCJjYiIsInlvdXR1YmVJZnJhbWVTY3JpcHQiLCJsb2FkU2VjMDJJbWciLCJwYXRoIiwiY2IwMiIsImltZyIsInNoYWRlcnMiLCJzaGFkZXJMb2FkTGlzdCIsIlpvb21CbHVyIiwiVHJhbnNpdGlvbjAyIiwic2hhZGVyU2VyaWFsTG9hZCIsInNoYWRlciIsImxvYWQiLCJjb21wIiwic2VjdGlvbjA0UHJvZHVjdEltZyIsInRleHR1cmVMaXN0IiwidGV4dHVyZXMiLCJ0ZXh0dXJlU2VyaWFsTG9hZCIsInRleHR1cmUiLCJUSFJFRSIsIkltYWdlVXRpbHMiLCJsb2FkVGV4dHVyZSIsImNvbmZpZyIsImN1c3RvbSIsImZhbWlsaWVzIiwidXJscyIsImFjdGl2ZSIsIndlYkZvbnQiLCJMb2FkZXIiLCJzcmMiLCJnZXRKU09OIiwiZGF0YSIsIm50aCIsIkltYWdlIiwiYWRkMCIsIm9ubG9hZCIsImltZ051bSIsImVsbSIsImlzTG9hZCIsInZpZGVvIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJzdXBwb3J0VmlkZW9FeHQiLCJwbGF5IiwidGFnIiwiZmlyc3RTY3JpcHRUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJvbllvdVR1YmVJZnJhbWVSZWFkeSIsImV4dCIsImNhblBsYXlUeXBlIiwid2YiLCJhc3luYyIsInMiLCJhZ2FpbiIsIldlYkZvbnQiLCJvbkxvYWRlZCIsIlNlYzAxVmlkZW8iLCJZb3V0dWJlRm9yU2VjMDEiLCJpZCIsInZpZGVvSUQiLCJ2aWRlb0xpc3QiLCJwbGF5ZXIiLCJpc0ZpcnN0IiwiaXNTZWVrTG9jayIsImlzU2Vla0xvY2swMiIsIllUIiwiUGxheWVyIiwidmlkZW9JZCIsImV2ZW50cyIsIm9uUGxheWVyU3RhdGVDaGFuZ2UiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJjb250cm9scyIsInNob3dpbmZvIiwiYXV0b2hpZGUiLCJyZWwiLCJlbmFibGVqc2FwaSIsIml2X2xvYWRfcG9saWN5IiwiZGlzYWJsZWtiIiwibW9kZXN0YnJhbmRpbmciLCJzdGFydCIsInRhcmdldERlZlciLCJ0YXJnZXREZWZIIiwicnVuIiwic2V0UGxheWJhY2tRdWFsaXR5IiwidGltZSIsInNlYzAxVmlkZW8iLCJwbGF5QnlOWVRpbWUiLCJzdGF0dXMiLCJQbGF5ZXJTdGF0ZSIsIkVOREVEIiwicGxheVZpZGVvIiwiUExBWUlORyIsIkNVRUQiLCJpc1NhZmFyaSIsIkJVRkZFUklORyIsInNlZWtUbyIsImdldEN1cnJlbnRUaW1lIiwibnlIIiwib25TZWVrIiwiRnVsbFNpemUiLCIkV3JhcCIsIiRUYXJnZXQiLCIkd3JhcCIsInRhcmdldFciLCJ0YXJnZXRIIiwicmF0aW9XIiwicmF0aW8iLCJtbCIsIm10IiwiZ2V0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXREZWYiLCJzZXRTdHlsZSIsImdldFNpemUiLCJzZXRQb3MiLCJUb3BUaW1lIiwiJGgwMSIsImZpbmQiLCIkaDAyIiwiJG0wMSIsIiRtMDIiLCJpc0FsZXJ0IiwiZGlzIiwidGwiLCJUaW1lbGluZU1heCIsInJlcGVhdCIsInNldCIsIlBvd2VyMiIsIkp1ZGdlRW52aXJvbm1lbnQiLCJpc0RldmljZVNQIiwiaXNEZXZpY2VUQUIiLCJpc0RldmljZU1CIiwiaXNEZXZpY2VQQyIsImlzSUVWZXJzaW9uIiwiaXNEaXJlY3Rpb24iLCJpc1Jlc3BvbnNpdmUiLCJSZXNwb25zaXZlU3dpdGNoSW1nIiwiaXNQQ0xvY2siLCJpc1NQTG9jayIsImluZGV4IiwiZWwiLCJzdHJSZXBsYWNlIiwiaGFzQ2xhc3MiLCJzZXRJbWdTUFNpemUiLCJub3QiLCJTd2lwZVRyYW5zaXRpb24iLCIkc3RhcnRXcmFwIiwiJGVuZFdyYXAiLCJwYWdlTGlzdCIsIm9sZCIsIm5leHQiLCJwcmV2Iiwic1giLCJtWCIsImVYIiwibWluRGlzIiwic1QiLCJlVCIsIm1pblQiLCJvblRvdWNoTG9uZyIsIm9uVG91Y2hTdGFydENCIiwib25Ub3VjaEVuZENCIiwic1kiLCJtWSIsImVZIiwiYWJzRGlzIiwiYWJzIiwicGpheCIsIkxheW91dCIsInNpemUiLCJyYXRlIiwiY2FsY3VsYXRlT3JkZXIiLCJwYWdlTmFtZSIsImZpbHRlciIsImlzTm90VG91Y2giLCJkaXIiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoRW5kIiwiU2Nyb2xsVHJhbnNpdGlvbiIsImlzU3dpdGNoIiwiaXNQamF4TG9jayIsIm1lbnUiLCJpc09wZW4iLCJzd2l0Y2giLCJTbnMiLCIkZmIiLCIkdHciLCIkbGluZSIsIiRtYWlsIiwiZmIiLCJ0aXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJodG1sIiwiZGVzIiwidHciLCJsaW5lIiwiZCIsImRlc2NyaXB0aW9uIiwia2V5d29yZCIsIm9wZW5XaW5kb3ciLCJhZGRyZXNzIiwic3ViIiwiYm9keSIsInNjcmVlbiIsIm9wZW4iLCJqdW1wRkIiLCJqdW1wVFciLCJqdW1wTElORSIsIm9uU2VuZE1haWwiLCJwb3NpdGlvbiIsIlNpemUiLCJTY2FsZSIsIlNQQmFzZVciLCJQQ0Jhc2VXIiwiJHRhcmdldExpc3QiLCJpVyIsIndyYXAiLCJQb3NpdGlvbiIsInNldENlbnRlciIsIk1haW4iLCJwYWdlIiwiRGlzcGxheVRvcCIsImNhbnZhcyIsIm91dHB1dCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdCIsIkVmZmVjdHMiLCJnbCIsImRvbSIsInN0YXRlIiwiZGVidWciLCJDVkNvbnRlbnRzIiwidGltZWxpbmUiLCJ0bE1haW4iLCJwYXVzZSIsIkNWQ29udGVudHNMb29wIiwiaXNBbHdheXMiLCJpc1J1blN0YXR1cyIsImlzQWRqdXN0UGFyYW0iLCJzb21ldGltZXNTdGF0ZSIsImxvb3BMaXN0IiwibG9vcFN0YXJ0IiwicnVuQWx3YXlzIiwicnVuU3RhdHVzIiwicnVuQWRqdXN0UGFyYW0iLCJkcmF3IiwiQ1ZDb250ZW50c1RpbWVsaW5lIiwiYmVnaW5uaW5nIiwic3RlcDAxIiwic3RlcDAyIiwic3RlcDAzIiwic3RhbmRCeSIsInNvbWV0aW1lcyIsIkNyZWF0ZUNhbnZhcyIsImMiLCJjdyIsImNoIiwiZmlsbFN0eWxlIiwiaXNSZXNpemUiLCJzZXRDYW52YXNTaXplIiwiYXBwZW5kIiwidngiLCJvZmZzZXRGcmFtZSIsIm9mZnNldFZ4IiwieE51bSIsInlOdW0iLCJ0aWxlTGlzdCIsInRpbGUiLCJjdHgiLCJmaWxsUmVjdCIsImFkZE9iamVjdHMiLCJjbnRTdG9wIiwiU2VjMDJCZyIsIkNhbnZhcyIsImdldENvbnRleHQiLCJQbGFuZSIsInN0cm9rZVN0eWxlIiwib3AiLCJjcmVhdGUiLCJmcmFtZVN0YXJ0IiwiaW1nTGlzdCIsImRyYXdJbWFnZSIsIkdsQ29udGVudHMiLCJyZW5kZXJlciIsImNhbWVyYSIsInNjZW5lIiwibGlnaHQiLCJhZGp1c3RQYXJhbSIsInN0YXRlTGluZVJvdGF0ZSIsImlzQ29udHJvbCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsImRvbUVsZW1lbnQiLCJTY2VuZSIsIkNhbWVyYSIsIkRpcmVjdGlvbmFsTGlnaHQiLCJ6IiwibG9hZE1nciIsInNlY3Rpb24wNFByb2R1Y3RTaGFkZXIiLCJwbGFuZSIsIlRyYWNrYmFsbENvbnRyb2xzIiwiem9vbVNwZWVkIiwicm90YXRlU3BlZWQiLCJQcm9maWxlciIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjdXIiLCJvbkNoYW5nZUZ1bmNMaXN0Iiwib25TZWN0aW9uMDQiLCJHbENvbnRlbnRzTG9vcCIsIlNlY3Rpb24wNFByb2R1Y3QiLCJ1cGRhdGVDb250cm9sbCIsInJlbmRlciIsIkdsQ29udGVudHNUaW1lbGluZSIsInVuaWZvcm1zIiwic3RyZW5ndGgiLCJFeHBvIiwib25TdGFydCIsImVhc2VJbiIsImVhc2VPdXQiLCJmcm9tIiwicGxhbmUwMiIsIm1hdGVyaWFsIiwiU2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXhTaGFkZXIiLCJ2cyIsImZyYWdtZW50U2hhZGVyIiwiZnMiLCJ0cmFuc3BhcmVudCIsInByb2dyZXNzIiwib25SZXNpenNlIiwiU29tZVRpbWVzIiwiY2JMaXN0Iiwib3JkZXIiLCJsYXRlciIsImdlb21ldHJ5IiwiZGVmV1ciLCJkZWZISCIsInJhdGVXIiwibGIiLCJpbWFnZSIsIlBsYW5lR2VvbWV0cnkiLCJNZXNoIiwidGV4dHVyZTAxIiwiUGFyYW0iLCJndWkiLCJqc29uIiwiaXNGbGFnIiwiY2xvY2siLCJ6b29tYmx1ciIsInRyYW5zaXRpb24iLCJ6b29tIiwiY29sb3JTZXBhcmF0aW9uIiwidHdlZW4iLCJQb3dlcjQiLCJzZXR1cERhdGEiLCJkYXQiLCJHVUkiLCJyZW1lbWJlciIsInpJbmRleCIsImYxIiwiYWRkRm9sZGVyIiwic3RlcCIsImxpc3RlbiIsIm9uQ2hhbmdlIiwibkZyYWciLCJTdGF0cyIsInN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJIb3ZlckVmZmVjdFNOU1NQRm9vdGVyIiwiJGlubmVyIiwiJGxpc3QiLCIkaXRlbSIsInNob3ciLCJjbG9zZSIsInRvZ2dsZUNsYXNzIiwidGhhdCIsImtpbGxUd2VlbnNPZiIsIiRib3giLCJyZWFkeSIsImVxIiwiaGlkZSIsInRvZ2dsZSIsIkhvdmVyRWZmZWN0U1ZHQXJyb3dUb3AiLCJpc0hvdmVyIiwiYXV0b1RMIiwia2lsbCIsInRsMDIiLCJ0bDAxIiwic2NhbGVZIiwiYXV0b0Fycm93IiwiZGVsYXkiLCJvbkVudGVyIiwib25MZWF2ZSIsIm9wdHMiLCJjdWJlIiwiY3JlYXRlQ2FtZXJhIiwiX2NyZWF0ZUNhbWVyYSIsImNyZWF0ZVJlbmRlcmVyIiwiX2NyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlU2NlbmUiLCJfY3JlYXRlU2NlbmUiLCJjcmVhdGVPYmplY3QiLCJfY3JlYXRlT2JqZWN0Iiwib3JiaXRDb250cm9scyIsIl9vcmJpdENvbnRyb2xzIiwiX29uUmVzaXplIiwiVXBkYXRlIiwiX1VwZGF0ZSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwibG9va0F0IiwiVmVjdG9yMyIsImFscGhhIiwic3RlbmNpbCIsImRlcHRoIiwicHJlbXVsdGlwbGllZEFscGhhIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJjdWJlR2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsImN1YmVNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwiY29sb3IiLCJ3aXJlZnJhbWUiLCJPcmJpdENvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsIkNsb2NrIiwiZ2V0RGVsdGEiLCJyZXF1aXJlIiwiRW50cnkiLCJvYmplY3QiLCJlbmFibGVkIiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsIkluZmluaXR5IiwibWluWm9vbSIsIm1heFpvb20iLCJtaW5Qb2xhckFuZ2xlIiwibWF4UG9sYXJBbmdsZSIsIm1pbkF6aW11dGhBbmdsZSIsIm1heEF6aW11dGhBbmdsZSIsImVuYWJsZURhbXBpbmciLCJkYW1waW5nRmFjdG9yIiwiZW5hYmxlWm9vbSIsImVuYWJsZVJvdGF0ZSIsImVuYWJsZVBhbiIsImtleVBhblNwZWVkIiwiYXV0b1JvdGF0ZVNwZWVkIiwiZW5hYmxlS2V5cyIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiQk9UVE9NIiwibW91c2VCdXR0b25zIiwiT1JCSVQiLCJNT1VTRSIsIlpPT00iLCJNSURETEUiLCJQQU4iLCJ0YXJnZXQwIiwiY2xvbmUiLCJwb3NpdGlvbjAiLCJ6b29tMCIsImdldFBvbGFyQW5nbGUiLCJzcGhlcmljYWwiLCJwaGkiLCJnZXRBemltdXRoYWxBbmdsZSIsInRoZXRhIiwicmVzZXQiLCJzY29wZSIsImNvcHkiLCJkaXNwYXRjaEV2ZW50IiwiY2hhbmdlRXZlbnQiLCJTVEFURSIsIk5PTkUiLCJxdWF0IiwiUXVhdGVybmlvbiIsInNldEZyb21Vbml0VmVjdG9ycyIsInF1YXRJbnZlcnNlIiwiaW52ZXJzZSIsImxhc3RQb3NpdGlvbiIsImxhc3RRdWF0ZXJuaW9uIiwiYXBwbHlRdWF0ZXJuaW9uIiwic2V0RnJvbVZlY3RvcjMiLCJyb3RhdGVMZWZ0IiwiZ2V0QXV0b1JvdGF0aW9uQW5nbGUiLCJzcGhlcmljYWxEZWx0YSIsIm1ha2VTYWZlIiwicmFkaXVzIiwicGFuT2Zmc2V0Iiwic2V0RnJvbVNwaGVyaWNhbCIsInpvb21DaGFuZ2VkIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJFUFMiLCJkb3QiLCJxdWF0ZXJuaW9uIiwiZGlzcG9zZSIsIm9uQ29udGV4dE1lbnUiLCJvbk1vdXNlRG93biIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbktleURvd24iLCJzdGFydEV2ZW50IiwiZW5kRXZlbnQiLCJST1RBVEUiLCJET0xMWSIsIlRPVUNIX1JPVEFURSIsIlRPVUNIX0RPTExZIiwiVE9VQ0hfUEFOIiwiU3BoZXJpY2FsIiwicm90YXRlU3RhcnQiLCJWZWN0b3IyIiwicm90YXRlRW5kIiwicm90YXRlRGVsdGEiLCJwYW5TdGFydCIsInBhbkVuZCIsInBhbkRlbHRhIiwiZG9sbHlTdGFydCIsImRvbGx5RW5kIiwiZG9sbHlEZWx0YSIsImdldFpvb21TY2FsZSIsInJvdGF0ZVVwIiwicGFuTGVmdCIsImRpc3RhbmNlIiwib2JqZWN0TWF0cml4Iiwic2V0RnJvbU1hdHJpeENvbHVtbiIsIm11bHRpcGx5U2NhbGFyIiwicGFuVXAiLCJwYW4iLCJlbGVtZW50IiwidGFyZ2V0RGlzdGFuY2UiLCJ0YW4iLCJmb3YiLCJtYXRyaXgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJyaWdodCIsImJvdHRvbSIsIndhcm4iLCJkb2xseUluIiwiZG9sbHlTY2FsZSIsImRvbGx5T3V0IiwiaGFuZGxlTW91c2VEb3duUm90YXRlIiwiaGFuZGxlTW91c2VEb3duRG9sbHkiLCJoYW5kbGVNb3VzZURvd25QYW4iLCJoYW5kbGVNb3VzZU1vdmVSb3RhdGUiLCJzdWJWZWN0b3JzIiwiaGFuZGxlTW91c2VNb3ZlRG9sbHkiLCJoYW5kbGVNb3VzZU1vdmVQYW4iLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VXaGVlbCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVUb3VjaFN0YXJ0Um90YXRlIiwidG91Y2hlcyIsImhhbmRsZVRvdWNoU3RhcnREb2xseSIsImR4IiwiZHkiLCJoYW5kbGVUb3VjaFN0YXJ0UGFuIiwiaGFuZGxlVG91Y2hNb3ZlUm90YXRlIiwiaGFuZGxlVG91Y2hNb3ZlRG9sbHkiLCJoYW5kbGVUb3VjaE1vdmVQYW4iLCJoYW5kbGVUb3VjaEVuZCIsImJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIkV2ZW50RGlzcGF0Y2hlciIsImNvbnN0cnVjdG9yIiwiZGVmaW5lUHJvcGVydGllcyIsImNlbnRlciIsIm5vWm9vbSIsIm5vUm90YXRlIiwibm9QYW4iLCJub0tleXMiLCJzdGF0aWNNb3ZpbmciLCJkeW5hbWljRGFtcGluZ0ZhY3RvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7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QUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7OztzakJDeE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QVBNOztBQVNQcFUsUUFBSyxhQUFXdmEsS0FBWCxFQUFtQjs7QUFFdkJxTCxZQUFRZ3BCLElBQVIsQ0FBYyw0RUFBZDtBQUNBLFNBQUsxRixVQUFMLEdBQWtCLENBQUUzdUIsS0FBcEI7QUFFQTs7QUFkTSxHQXJFK0M7O0FBdUZ2RHUyQixnQkFBZTs7QUFFZGxkLFFBQUssZUFBWTs7QUFFaEJoTyxZQUFRZ3BCLElBQVIsQ0FBYyxxRkFBZDtBQUNBLFdBQU8sQ0FBRSxLQUFLakcsYUFBZDtBQUVBLElBUGE7O0FBU2Q3VCxRQUFLLGFBQVd2YSxLQUFYLEVBQW1COztBQUV2QnFMLFlBQVFncEIsSUFBUixDQUFjLHFGQUFkO0FBQ0EsU0FBS2pHLGFBQUwsR0FBcUIsQ0FBRXB1QixLQUF2QjtBQUVBOztBQWRhLEdBdkZ3Qzs7QUF5R3ZEdzJCLHdCQUF1Qjs7QUFFdEJuZCxRQUFLLGVBQVk7O0FBRWhCaE8sWUFBUWdwQixJQUFSLENBQWMsMEZBQWQ7QUFDQSxXQUFPLEtBQUtoRyxhQUFaO0FBRUEsSUFQcUI7O0FBU3RCOVQsUUFBSyxhQUFXdmEsS0FBWCxFQUFtQjs7QUFFdkJxTCxZQUFRZ3BCLElBQVIsQ0FBYywwRkFBZDtBQUNBLFNBQUtoRyxhQUFMLEdBQXFCcnVCLEtBQXJCO0FBRUE7O0FBZHFCOztBQXpHZ0MsRUFBeEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjllYjE4NzBjZmVhZGQ4OGJlZGEiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBUb3BcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IENvbW1vbiBmcm9tICcuL1BhZ2UvQ29tbW9uLmpzJztcbmltcG9ydCBNYWluIGZyb20gJy4vUGFnZS9NYWluLmpzJztcblxuKCgpPT57XG5cbiAgLy8gZ2xvYmFs44Kq44OW44K444Kn44Kv44OIXG4gIGlmICh3aW5kb3cuZ2I9PT11bmRlZmluZWQpIHdpbmRvdy5nYiA9IHt9O1xuICB3aW5kb3cuZ2IuaW4gPSB7fTsgLy9pbnN0YW5jZVxuXG4gIGdiLmluLmNvbW1vbiA9IG5ldyBDb21tb24oKTtcbiAgZ2IuaW4ubWFpbiA9IG5ldyBNYWluKCk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb25mIGZyb20gJy4uL0NvbmYuanMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vTXlMaWJzL1V0aWwuanMnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vTXlMaWJzL0Z1bmMuanMnO1xuXG5pbXBvcnQgUmVhZHlNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzJztcbmltcG9ydCBVcGRhdGVNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyc7XG5pbXBvcnQgUmVzaXplTWdyIGZyb20gJy4uL015TGlicy9FdmVudE1nci9SZXNpemVNZ3IuanMnO1xuaW1wb3J0IFNjcm9sbE1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvU2Nyb2xsTWdyLmpzJztcbmltcG9ydCBNb3VzZU1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvTW91c2VNZ3IuanMnO1xuaW1wb3J0IExvYWRNZ3IgZnJvbSAnLi4vRnVuYy9Mb2FkTWdyLmpzJztcblxuLy8gaW1wb3J0IFBqYXggZnJvbSAnLi4vRnVuYy9QamF4LmpzJztcbmltcG9ydCBKdWRnZUVudmlyb25tZW50IGZyb20gJy4uL0Z1bmMvSnVkZ2VFbnZpcm9ubWVudC5qcyc7XG5pbXBvcnQgUmVzcG9uc2l2ZVN3aXRjaEltZyBmcm9tICcuLi9GdW5jL19ldmVudHMvUmVzcG9uc2l2ZVN3aXRjaEltZy5qcyc7XG5pbXBvcnQgU3dpcGVUcmFuc2l0aW9uIGZyb20gJy4uL0Z1bmMvU3dpcGVUcmFuc2l0aW9uLmpzJztcblxuLy8gaW1wb3J0IE1lbnUgZnJvbSAnLi4vRGlzcGxheS9VSS9fY29tcG9ybmVudHMvTWVudS5qcyc7XG4vLyBpbXBvcnQgTmF2IGZyb20gJy4uL0Rpc3BsYXkvVUkvTmF2LmpzJztcbi8vIGltcG9ydCBBbGVydCBmcm9tICcuLi9EaXNwbGF5L1VJL0FsZXJ0LmpzJztcbi8vIGltcG9ydCBTaWRlUiBmcm9tICcuLi9EaXNwbGF5L1VJL1NpZGVSLmpzJztcbi8vIGltcG9ydCBUaW1lIGZyb20gJy4uL0Z1bmMvVGltZS5qcyc7XG5pbXBvcnQgU2Nyb2xsVHJhbnNpdGlvbiBmcm9tICcuLi9GdW5jL1Njcm9sbFRyYW5zaXRpb24uanMnO1xuLy8gaW1wb3J0IFBhZ2VUb3AgZnJvbSAnLi4vRGlzcGxheS9VSS9fcGFydHMvUGFnZVRvcC5qcyc7XG4vLyBpbXBvcnQgU2VjMDFWaWRlbyBmcm9tICcuLi9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMnO1xuaW1wb3J0IFNucyBmcm9tICcuLi9GdW5jL1Nucy5qcyc7XG4vLyBpbXBvcnQgU2xpZGVyVG9wIGZyb20gJy4uL0Rpc3BsYXkvVUkvU2xpZGVyVG9wLmpzJztcblxuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0Rpc3BsYXkvTGF5b3V0L0xheW91dC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDliJ3mnJ/lgKTjga7oqK3lrprjg7vjg4fjg7zjgr/jga7phY3nva5cbiAgICAvLyAgdXRpbOmWouaVsOOBruWIneacn+WMllxuICAgIC8vICDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcbiAgICAvLyBnYi5pbi51cCA9IG5ldyBVcGRhdGVNZ3IoKTtcbiAgICAvLyBnYi5pbi5yID0gbmV3IFJlc2l6ZU1ncigpO1xuICAgIC8vIGdiLmluLnMgPSBuZXcgU2Nyb2xsTWdyKCk7XG4gICAgLy8gZ2IuaW4ubSA9IG5ldyBNb3VzZU1ncigpO1xuICAgIC8vIGdiLmluLnJtID0gbmV3IFJlYWR5TWdyKCk7XG4gICAgLy8gZ2IuaW4ubG9hZE1nciA9IG5ldyBMb2FkTWdyKCk7XG4gICAgLy8gZ2IuaW4uc2N0ID0gbmV3IFNjcm9sbFRyYW5zaXRpb24oKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIOOBneOBruS7llxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gcGpheOOBruioreWumlxuICAgIC8vIGdiLmluLnBqYXggPSBuZXcgUGpheCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIExheW91dFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIGdiLmluLkxheW91dCA9IG5ldyBMYXlvdXQoKTtcblxuXG4gICAgLy8g5rqW5YKZ5a6M5LqG5b6M44Gu5Yem55CGXG4gICAgLy8gZ2IuaW4ucm0ub25Db21wbGV0ZWRGdW5jID0gKCk9PntuZXcgRGlzcGxheU9wZW5pbmcoKTt9XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OH44OQ44Kk44K544O744OW44Op44Km44K25Yik5a6aXG4gICAgLy8gIOOCueODnuODm+OBruWQkeOBjeWIpOWumlxuICAgIC8vICDjg5rjg7zjgrjmg4XloLHlj5blvpdcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBnYi5pbi5qZSA9IG5ldyBKdWRnZUVudmlyb25tZW50KCk7XG4gICAgLy8gZ2IuaW4ucmVzSW1nID0gbmV3IFJlc3BvbnNpdmVTd2l0Y2hJbWcoKTtcbiAgICAvLyBnYi5pbi5zbnMgPSBuZXcgU25zKCQoJy5mYlNoYXJlJyksJCgnLnR3U2hhcmUnKSwkKCcubGluZVNoYXJlJyksJCgnLm9uTWFpbCcpKVxuICAgIC8vIGdiLmluLnN3dCA9IG5ldyBTd2lwZVRyYW5zaXRpb24oKTtcblxuICAgIC8vIGdiLmluLmYuY2hlY2tDc3NCbGVuZCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIFVJXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gZ2IuaW4ubWVudSA9IG5ldyBNZW51KCk7XG4gICAgLy8gZ2IuaW4ubmF2ID0gbmV3IE5hdigpO1xuICAgIC8vIGdiLmluLnNpZGVSID0gbmV3IFNpZGVSKCk7XG4gICAgLy8gZ2IuaW4uYWxlcnQgPSBuZXcgQWxlcnQoKTtcbiAgICAvLyBnYi5pbi5wYWdldG9wID0gbmV3IFBhZ2VUb3AoKTtcblxuICAgIC8vIGJnXG4gICAgLy8gZ2IuaW4uc2xpZGVyVG9wID0gbmV3IFNsaWRlclRvcCgkKCcjYmdXcmFwIC5zZWMwMScpKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBFZmZlY3RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gZ2IuaW4ucGFnZVRyYW5zaXRpb25FZmZlY3QgPSBuZXcgUGFnZVRyYW5zaXRpb25FZmZlY3QoJCgnI3BhZ2VUcmFuc2l0aW9uTGF5ZXInKSk7XG4gICAgLy8gZ2IuaW4uc2VjMDFWaWRlbyA9IG5ldyBTZWMwMVZpZGVvKCk7XG4gICAgLy8gZ2IuaW4uU2VjMDJCZyA9IG5ldyBTZWN0aW9uMDJCZygpO1xuXG4gICAgLy8gZ2IuaW4uaGUwMSA9IG5ldyBIb3ZlckVmZmVjdFNWRygkKCcuU1ZHSG92ZXInKSwnI2ZmZicsJyMwMDAnKTtcbiAgICAvLyBnYi5pbi5oZTAyID0gbmV3IEhvdmVyRWZmZWN0U1ZHKCQoJy5TVkdIb3ZlclcnKSwnIzgxZDhkMCcsJyNmZmYnKTtcbiAgICAvLyBnYi5pbi5oZTAzID0gbmV3IEhvdmVyRWZmZWN0U1ZHKCQoJy5TVkdIb3ZlclcwMicpLCcjODFkOGQwJywnIzAwMCcpO1xuICAgIC8vIGdiLmluLmhlMDQgPSBuZXcgSG92ZXJFZmZlY3RTVkdMb2dvKCQoJyNoZWFkZXIgLmxvZ28sICNoZWFkZXIgLnN1YlRpdCcpKTtcbiAgICAvLyBnYi5pbi5oZTA1ID0gbmV3IEhvdmVyRWZmZWN0TWVudUl0ZW0oJCgnI21lbnUgLm1lbnVMaXN0IC5pdGVtJykpO1xuICAgIC8vIGdiLmluLmhlMDYgPSBuZXcgSG92ZXJFZmZlY3RTVkdBcnJvd1NpZGVSKCQoJyNzaWRlUiAubmV4dCcpKTtcbiAgICAvLyBnYi5pbi5oZTA3ID0gbmV3IEhvdmVyRWZmZWN0TWVudUJ0bigkKCcubWVudUJ0bjAxJykpO1xuICAgIC8vIGdiLmluLmhlMDggPSBuZXcgSG92ZXJFZmZlY3RTTlNQQ0Zvb3RlcigkKCcjc2lkZUwgLnNucy5zcCcpKTtcblxuICAgIC8vIGxvZ28g5Ye644GZXG4gICAgLy8gVHdlZW5NYXgudG8oJCgnI2hlYWRlciAubG9nbycpLCAyLjIsIHtvcGFjaXR5OiAxLCBlYXNlOiBQb3dlcjIuZWFzZUluT3V0fSlcblxuICAgIC8vIGdiLmluLmxvYWRNZ3Iuc3RhcnQoKTtcblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgRnVuY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIExheW91dFxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBEaXNwYWx5XG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIE1vdGlvblxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9QYWdlL0NvbW1vbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbmZcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IFNvdW5kRGF0YSBmcm9tICcuL0RhdGEvU291bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25mIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDmnKznlarjg5Xjg6njgrBcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gICAgdGhpcy5SRUxFQVNFID0gdHJ1ZTtcbiAgICAvLyB0aGlzLlJFTEVBU0UgPSBmYWxzZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5Xjg6njgrDplqLpgKNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLkZMRyA9IHtcbiAgICAgIExPRzp0cnVlLCAgLy8g44Ot44Kw5Ye65YqbXG4gICAgICBQQVJBTTp0cnVlLCAvLyDjg5Hjg6njg6Hjg7zjgr/jg4Hjgqfjg4Pjgq9cbiAgICAgIFNUQVRTOnRydWUgIC8vIFN0YXRz6KGo56S6XG4gICAgfTtcbiAgICBpZiAoIXRoaXMuUkVMRUFTRSkge1xuICAgICAgdGhpcy5GTEcgPSB7XG4gICAgICAgIExPRzpmYWxzZSxcbiAgICAgICAgUEFSQU06ZmFsc2UsXG4gICAgICAgIFNUQVRTOmZhbHNlIFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5Z+65pysIHdpZHRoIGhlaWdodFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZGVmVyA9IDEzMDA7XG4gICAgdGhpcy5kZWZIID0gODUwO1xuXG4gICAgdGhpcy5XID0gMTIwMDtcbiAgICB0aGlzLkggPSA3NTA7XG5cbiAgICB0aGlzLnNwVyA9IDM3NTtcbiAgICB0aGlzLnNwSCA9IDY2NztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4hcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmJwID0gNzY4O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIG1vZGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMua2V5cyA9IFtcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ21vdmllJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ21vcm5pbmcnLCdhZnRlcm5vb24nLCduaWdodCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ2RhdGEnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnZGF0YTAxJywnZGF0YTAyJywnZGF0YTAzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAncHJvZHVjdCcsXG4gICAgICAgICAgJ3ZhbHVlJzogWycwMSddLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5zd2l0Y2hNb2RlKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc291bmQgZGF0YVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc291bmREYXRhID0gbmV3IFNvdW5kRGF0YSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNlYzAyIGJnIEltZyBOdW1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNlYzAySW1nTnVtID0gMzk2O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHlvdXR1YmUgSURcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnlvdXR1YmVJRDAxID0gJ3hXMm9OcE5yS2QwJztcbiAgICB0aGlzLnlvdXR1YmVJRDAyID0gJ3QyV2VSUmRBRmVJJztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB3ZWIgZm9udCBsb2FkZWRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLndlYkZvbnRMb2FkZWQgPSBmYWxzZTtcblxuICB9XG5cblxuICBzd2l0Y2hNb2RlKCl7XG5cbiAgICB2YXIgaSwga2V5LCBsZW4sIHBhcmFtLCByZWYsIHJlZjEsIHZhbHVlO1xuXG4gICAgcmVmID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykuc3BsaXQoJyYnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcGFyYW0gPSByZWZbaV07XG4gICAgICByZWYxID0gcGFyYW0uc3BsaXQoJz0nKSwga2V5ID0gcmVmMVswXSwgdmFsdWUgPSByZWYxWzFdO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMua2V5cy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtleXNbal07XG5cbiAgICAgICAgLy8g44OR44Op44Oh44O844K/44GM44Kt44O844Go5LiA57eS44Gg44Gj44Gf44KJXG4gICAgICAgIGlmIChvYmoua2V5ID09PSBrZXkpIHtcblxuICAgICAgICAgIC8vIOWQhOWApOOBqOavlOi8g1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgb2JqLnZhbHVlLmxlbmd0aDsgaysrKSB7XG5cbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmoudmFsdWVba107XG5cbiAgICAgICAgICAgIC8vIOOCreODvOOCknRoaXMua2V5c+OBrmtleeOBq+OAgXZhbHVl44KS5q+U6LyD44GX44Gm5ZCM5YCk44Gg44Gj44Gf44KC44Gu44GrXG4gICAgICAgICAgICBpZiAodmFsID09PSB2YWx1ZSkgdGhpc1tvYmoua2V5XSA9IHZhbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH07XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgfTtcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9Db25mLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIERhdGFcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmREYXRhIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIHRoaXMuQVRBUkkwMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9hdGFyaS9BdGFyaV8wNC53YXYnO1xuICAgIC8vIHRoaXMuQVRBUkkwMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9hdGFyaS9BdGFyaV8wNS53YXYnO1xuXG4gICAgLy8gdGhpcy5CQU4wMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmEtbl8wMS53YXYnO1xuICAgIC8vIHRoaXMuQkFOMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDIud2F2JztcbiAgICAvLyB0aGlzLkJBTjAzID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CYS1uXzAzLndhdic7XG4gICAgLy8gdGhpcy5CQU4wNCA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmEtbl8wNC53YXYnO1xuXG4gICAgLy8gdGhpcy5ET04wMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmlnX0Rvbl8wMS53YXYnO1xuICAgIC8vIHRoaXMuRE9OMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JpZ19Eb25fMDIud2F2JztcbiAgICAvLyB0aGlzLkRPTjAzID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CaWdfRG9uXzAzLndhdic7XG4gICAgLy8gdGhpcy5ET04wNCA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vRG9uXzA0Lndhdic7XG5cbiAgICAvLyB0aGlzLkRPRE4wMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vRG9kb25fMDEud2F2JztcbiAgICAvLyB0aGlzLkRPRE4wMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vRG9kb25fMDIud2F2JztcblxuICAgIC8vIHRoaXMuR29nb2dvMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0dvZ29nb18wMS53YXYnO1xuICAgIC8vIHRoaXMuR29nb2dvMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0dvZ29nb18wMi53YXYnO1xuXG4gICAgLy8gdGhpcy5JS0FSSSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9pa2FyaS9Ja2FyaV8wMS53YXYnO1xuXG4gICAgLy8gdGhpcy5ST1VMRVRURTAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL3JvdWxldHRlL1JvdWxldHRlXzAxLndhdic7XG4gICAgLy8gdGhpcy5ST1VMRVRURTAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL3JvdWxldHRlL1JvdWxldHRlXzAyLndhdic7XG4gICAgLy8gdGhpcy5ST1VMRVRURTAzID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL3JvdWxldHRlL1JvdWxldHRlXzAzLndhdic7XG5cbiAgICAvLyB0aGlzLlNFQSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9zZWEvU2VhJmthbW9tZV8wMS53YXYnO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0RhdGEvU291bmQuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy51YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7IC8vdXNlcmFnZW50XG4gICAgdGhpcy5hcHBWID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7IC8vYXBwVmVyc2lvblxuICAgIHRoaXMuaXNSZXNTUCA9IG51bGw7IC8vIHJlc3BvbnNpdmUgc3BcbiAgICB0aGlzLmlzUmVzUEMgPSBudWxsOyAvLyByZXNwb25zaXZlIHBjXG5cbiAgICB0aGlzLmlzUEMgPSBudWxsO1xuICAgIHRoaXMuaXNTUCA9IG51bGw7XG4gICAgdGhpcy5pc1RBQiA9IG51bGw7XG4gICAgdGhpcy5pc01CID0gbnVsbDtcblxuICAgIHRoaXMuaXNJRSA9IG51bGw7XG5cbiAgICB0aGlzLmlzU2V0U1BTaXplID0gZmFsc2U7XG5cblxuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbnVsbDtcbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWF0aFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBcbiAgLy8g44Op44Oz44OA44Og44Gq5pW05pWw44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBtaW4gOiDmnIDlsI/lgKQoaW50KVxuICAvLyBAbWF4IDog5pyA5aSn5YCkKGludClcbiAgLy8gcmV0dXJuIDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tKG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSkgLSBtaW4pICsgbWluKSk7XG5cbiAgfVxuICAgICAgXG4gIC8vIOODqeODs+ODgOODoOOBquaVtOaVsOOCkjLjgaTjga7nr4Tlm7LjgYvjgonlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG1pbjEgOiDmnIDlsI/lgKQxKGludClcbiAgLy8gQG1heDEgOiDmnIDlpKflgKQxKGludClcbiAgLy8gQG1pbjIgOiDmnIDlsI/lgKQyKGludClcbiAgLy8gQG1heDIgOiDmnIDlpKflgKQyKGludClcbiAgLy8gcmV0dXJuIDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tMihtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gICAgXG4gICAgaWYgKHRoaXMuaGl0KDIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMSwgbWF4MSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4yLCBtYXgyKTtcbiAgICB9XG5cbiAgfVxuICAgICAgXG4gIC8vIDEvQHJhbmdl44Gu56K6546H44GndHJ1ZeOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAcmFuZ2UgOiDmr43mlbAoaW50KVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhpdChyYW5nZSkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKDAsIHJhbmdlIC0gMSkgPT09IDA7XG5cbiAgfVxuICBcbiAgLy8gMOOBi+OCieevhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVtOaVsOOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsIDog56+E5ZuyKGludClcbiAgLy8gcmV0dXJuIDog44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZ2UodmFsKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oLXZhbCwgdmFsKTtcblxuICB9XG4gIFxuICAvLyDlgKTjgpLjg57jg4Pjg5Tjg7PjgrBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOODnuODg+ODlOODs+OCsOOBmeOCi+WApChOdW1iZXIpXG4gIC8vIEByZXNNaW4gOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAcmVzTWF4IDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNaW4gOiDlhYPjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1heCA6IOWFg+OBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIHJldHVybiA6IOODnuODg+ODlOODs+OCsOOBleOCjOOBn+WApChOdW1iZXIpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1hcChudW0sIHJlc01pbiwgcmVzTWF4LCBiYXNlTWluLCBiYXNlTWF4KSB7XG5cbiAgICB2YXIgcDtcbiAgICBpZiAobnVtIDwgYmFzZU1pbikge1xuICAgICAgcmV0dXJuIHJlc01pbjtcbiAgICB9XG4gICAgaWYgKG51bSA+IGJhc2VNYXgpIHtcbiAgICAgIHJldHVybiByZXNNYXg7XG4gICAgfVxuICAgIHAgPSAocmVzTWF4IC0gcmVzTWluKSAvIChiYXNlTWF4IC0gYmFzZU1pbik7XG5cbiAgICByZXR1cm4gKChudW0gLSBiYXNlTWluKSAqIHApICsgcmVzTWluO1xuXG4gIH0gICAgXG4gIFxuICAvLyDmlbDlgKTjgavlsI/mlbDngrnnrKxAbuS9jeOBvuOBp+OCkuOBpOOBkeOBn+aWh+Wtl+WIl+OCkui/lOOBmVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog5YCkKE51bWJlcilcbiAgLy8gQG4gOiDlsI/mlbDngrnjga7kvY0oaW50KVxuICAvLyByZXR1cm4gOiDlpInmj5vjgZXjgozjgZ/lgKQoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWNpbWFsKG51bSwgbikge1xuICAgIHZhciBpLCBwb3M7XG4gICAgbnVtID0gU3RyaW5nKG51bSk7XG4gICAgcG9zID0gbnVtLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtLnNwbGl0KFwiLlwiKVswXTtcbiAgICB9XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIG51bSArPSBcIi5cIjtcbiAgICAgIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIG51bSArPSBcIjBcIjtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gICAgbnVtID0gbnVtLnN1YnN0cigwLCBwb3MpICsgbnVtLnN1YnN0cihwb3MsIG4gKyAxKTtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgY2xhbXAobnVtZXJhdG9yLGRlbm9taW5hdG9yLHZhbCkge1xuXG4gICAgcmV0dXJuIHZhbCAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG5cbiAgfVxuXG4gIGRlZ3JlZShyYWRpYW5zKSB7XG5cbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7IC8vMeODqeOCuOOCouODs+OBjOS9leW6puOBi1xuXG4gIH1cblxuICAvLyB0byByYWRpYW5zXG4gIHJhZGlhbihhbmdsZSkgeyBcblxuICAgIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7IC8vMeW6puS9leODqeOCuOOCouODs+OBi1xuXG4gIH1cblxuICBkaXN0KHAxLCBwMikge1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xuXG4gIH1cblxuICBhc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxMCw5LDUsMywxXG5cbiAgfVxuXG4gIGRlc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEsMyw1LDksMTBcblxuICB9XG5cbiAgLy8gbWFwKHZhbHVlLCBtaW4wMSwgbWF4MDEsIG1pbjAyLCBtYXgwMikge1xuXG4gIC8vICAgdmFyIGRpczAxID0gbWF4MDEgLSBtaW4wMTtcbiAgLy8gICB2YXIgZGlzMDIgPSBtYXgwMiAtIG1pbjAyXG5cbiAgLy8gICB2YXIgcmF0ZSA9IGRpczAyIC8gZGlzMDE7XG5cbiAgLy8gICB2YWx1ZSA9IHZhbHVlICogcmF0ZTtcblxuICAvLyAgIHJldHVybiB2YWx1ZTtcbiAgLy8gfVxuXG4gIGNvbnN0cmFpbih2YWx1ZSwgbWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KHZhbHVlLCBtaW4pKTtcblxuICAgIC8vIGlmICh2YWx1ZSA8PSBsb3cpIHZhbHVlID0gbG93O1xuICAgIC8vIGlmICh2YWx1ZSA+PSBoaWdoKSB2YWx1ZSA9IGhpZ2g7ICAgICBcbiAgICAvLyByZXR1cm4gdmFsdWU7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgQXJyYXlcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8g6YWN5YiX5YaF44Gu44Op44Oz44OA44Og44Gq5YCk44KS44Gy44Go44Gk5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJdcbiAgLy8gcmV0dXJuIDog6YWN5YiX5YaF44Gu5YCkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFyclJhbmQoYXJyKSB7XG5cbiAgICByZXR1cm4gYXJyW3RoaXMucmFuZG9tKDAsIGFyci5sZW5ndGggLSAxKV07XG5cbiAgfSAgICBcbiAgICBcbiAgLy8g6YWN5YiX44KS44Op44Oz44OA44Og44Gr5Lim44G55pu/44GIXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJcoQXJyYXkpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNodWZmbGUoYXJ5KSB7XG5cbiAgICB2YXIgYXJyID0gW107XG4gICAgYXJyID0gYXJ5LnNsaWNlKCk7XG4gICAgdmFyIGkgPSBhcnIubGVuZ3RoO1xuICAgIHdoaWxlKGkpe1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaSk7XG4gICAgICB2YXIgdCA9IGFyclstLWldO1xuICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgYXJyW2pdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbiAgLy8g44Op44Oz44OA44Og44Gq5pWw5YCk44KS5L2c44KLXG4gIHJhbmRvbUFyciAobGVuKSB7XG5cbiAgICB2YXIgYXJyID0gbmV3IEFycmF5O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgYXJyLnB1c2goaSk7XG5cbiAgICBhcnIgPSB0aGlzLnNodWZmbGVBcnkoYXJyKTtcblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG4gIC8vIG51bGzjgpLliYrpmaTjgZfjgZ/phY3liJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGFyciA6IOmFjeWIlyhBcnJheSlcbiAgLy8gcmV0dXJuIDogbnVsbOWJiumZpOOBl+OBn+mFjeWIlyhBcnJheSlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2xpY2VOdWxsKGFycikge1xuXG4gICAgdmFyIGksIGwsIGxlbjEsIG5ld0FyciwgdmFsO1xuICAgIG5ld0FyciA9IFtdO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGlmICh2YWwgIT09IG51bGwpIHtcbiAgICAgICAgbmV3QXJyLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycjtcblxuICB9ICAgIFxuICBcbiAgLy8g6YWN5YiX5YaF44Gu44OR44Op44Oh44O844K/44KS5q+U6LyD44GX44Gm44K944O844OIXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJcoQXJyYXkpXG4gIC8vIEBwYXJhIDog44OR44Op44Oh44O844K/44O85ZCNXG4gIC8vIEBkZXNjIDog6ZmN6aCG44GL44Gp44GG44GLKGJvb2xlYW4pIOODh+ODleOCqeODq+ODiOOBr+aYh+mghlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzb3J0KGFyciwgcGFyYSwgZGVzYykge1xuICAgIGlmIChkZXNjID09PSB2b2lkIDApIHtcbiAgICAgIGRlc2MgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRlc2MpIHtcbiAgICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiW3BhcmFdIC0gYVtwYXJhXTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYVtwYXJhXSAtIGJbcGFyYV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRLZXkobGlzdCx2YWx1ZSkge1xuICAgICAgdmFyIHJldHVybktleSA9IFtdO1xuICAgICAgZm9yKHZhciBrZXkgaW4gbGlzdCl7XG4gICAgICAgICAgaWYgKGxpc3Rba2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm5LZXkucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5LZXk7XG4gIH1cblxuICAvLyDjg6bjg4vjg7zjgq9JROOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1bmlxdWUoKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgfVxuICBcbiAgLy8gKipqcXVhcnnkvb/nlKhcbiAgLy8g44Oc44K/44Oz44Oi44O844OJ5aSJ5pu0XG4gIC8vIHRydWXjgarjgonjgqvjg7zjgr3jg6vjgYzjg53jgqTjg7Pjgr/jg7zjga7lvaLjgatcbiAgLy8gZmFsc2Xjgarjgonjg4fjg5Xjgqnjg6vjg4jjga7jgqvjg7zjgr3jg6vjgatcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGZsZyA6IOmBqeeUqOOBmeOCi+OBi+OBqeOBhuOBiyhib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBidXR0b25Nb2RlKGZsZykge1xuXG4gICAgaWYgKGZsZykge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBkZXZpY2VcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNEZXZpY2VTUCgpe1xuXG4gICAgdmFyIG1lZGlhID0gW1wiaXBob25lXCIsXCJpcG9kXCIsXCJpcGFkXCIsXCJhbmRyb2lkXCIsXCJkcmVhbVwiLFwiY3VwY2FrZVwiLFwiYmxhY2tiZXJyeTk1MDBcIixcImJsYWNrYmVycnk5NTMwXCIsXCJibGFja2JlcnJ5OTUyMFwiLFwiYmxhY2tiZXJyeTk1NTBcIixcImJsYWNrYmVycnk5ODAwXCIsXCJ3ZWJvc1wiLFwiaW5jb2duaXRvXCIsXCJ3ZWJtYXRlXCJdO1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChtZWRpYS5qb2luKFwifFwiKSxcImlcIik7XG5cbiAgICB2YXIgYiA9IHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcbiAgICBpZiAoYikgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZVNQJyk7XG5cbiAgICB0aGlzLmlzU1AgPSBiO1xuXG4gIH1cbiAgaXNEZXZpY2VUQUIoKXtcblxuICAgIHZhciBiID0gKHRoaXMudWEuaW5kZXhPZihcIndpbmRvd3NcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwidG91Y2hcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJpcGFkXCIpICE9IC0xXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgPT0gLTEpXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiZmlyZWZveFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJ0YWJsZXRcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJraW5kbGVcIikgIT0gLTFcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcInNpbGtcIikgIT0gLTFcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcInBsYXlib29rXCIpICE9IC0xO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlVEFCJyk7XG5cbiAgICB0aGlzLmlzVEFCID0gYjtcblxuICB9XG5cbiAgaXNEZXZpY2VNQigpe1xuXG4gICAgdmFyIGIgPSAodGhpcy51YS5pbmRleE9mKFwid2luZG93c1wiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJwaG9uZVwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImlwaG9uZVwiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiaXBvZFwiKSAhPSAtMVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwibW9iaWxlXCIpICE9IC0xKVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImZpcmVmb3hcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwibW9iaWxlXCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiYmxhY2tiZXJyeVwiKSAhPSAtMTtcbiAgICBpZiAoYikgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZU1CJyk7XG5cbiAgICB0aGlzLmlzTUIgPSBiO1xuXG4gIH1cblxuICBpc0RldmljZVBDKCl7XG5cbiAgICBpZiAoISh0aGlzLmlzU1AgfHwgdGhpcy5pc1RBQiB8fCB0aGlzLmlzTUIpKSB7XG4gICAgICBcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VQQycpO1xuICAgICAgdGhpcy5pc1BDID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcblxuICAgIH1cblxuICAgIHRoaXMuaXNQQyA9IGZhbHNlO1xuXG4gIH1cblxuICAvLyDjgrnjg57jg5XjgqnliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1NtdCgpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUG9kJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMDtcblxuICB9XG5cbiAgLy8g44K/44OW44Os44OD44OI56uv5pyr44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNUYWJsZXQoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5pc0lwYWQoKSB8fCAodGhpcy5pc0FuZHJvaWQoKSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01vYmlsZScpID09PSAtMSk7XG5cbiAgfVxuXG4gIC8vIGlQYWTliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0lwYWQoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwO1xuXG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgT1NcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gQW5kcm9pZOWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzQW5kcm9pZCgpIHtcblxuICAgIHZhciB1O1xuICAgIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHJldHVybiB1LmluZGV4T2YoJ0JsYWNrQmVycnknKSA+IDAgfHwgdS5pbmRleE9mKCdBbmRyb2lkJykgPiAwIHx8IHUuaW5kZXhPZignV2luZG93cyBQaG9uZScpID4gMDtcblxuICB9XG5cbiAgaXNpUGhvbmUoKXtcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJpcGhvbmVcIixcImlcIik7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcbiAgfVxuXG4gIC8vIGlPU+WIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSW9zKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDA7XG5cbiAgfVxuXG4gIC8vIFBTM+WIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzUHMzKCkge1xuXG4gICAgdmFyIHU7XG4gICAgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgcmV0dXJuIHUuaW5kZXhPZignUExBWVNUQVRJT04gMycpID4gMDtcblxuICB9XG4gICAgXG4gIC8vIFZJVEHliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1ZpdGEoKSB7XG5cbiAgICB2YXIgdTtcbiAgICB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICByZXR1cm4gdS5pbmRleE9mKCdQbGF5U3RhdGlvbiBWaXRhJykgPiAwO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIGJyb3dzZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElF44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZSgpIHtcblxuICAgIHZhciB1YTtcbiAgICB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ21zaWUnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZigndHJpZGVudC83JykgIT09IC0xO1xuXG4gIH1cblxuICAvLyBXSU7jgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1dpbigpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZihcIldpblwiKSAhPT0gLTE7XG5cbiAgfVxuXG4gIC8vIGdvb2dsZUNocm9tZeOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzQ2hyb21lKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAwO1xuXG4gIH0gICAgXG4gIFxuICAvLyBGaXJlRm9444GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNGRigpIHtcblxuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG5cbiAgfVxuXG4gIGlzU2FmYXJpKCl7XG5cbiAgICBpZih0aGlzLnVhLmluZGV4T2YoXCJjaHJvbWVcIikgIT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBpZih0aGlzLnVhLmluZGV4T2YoXCJsdW5hc2NhcGVcIikgIT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJzYWZhcmlcIixcImlcIik7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcblxuICB9XG5cbiAgaXNPcGVyYSgpe1xuXG4gICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJvcGVyYVwiLFwiaVwiKTtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG5cbiAgfVxuXG4gIC8vIGlPU+OBrnNhZmFyaeS7peWkluOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSU9TVWlWaWV3KCkge1xuXG4gICAgdmFyIGE7XG4gICAgYSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuICh0aGlzLmlzSW9zKCkgJiYgYS5pbmRleE9mKCdzYWZhcmknKSA9PT0gLTEpIHx8ICh0aGlzLmlzSW9zKCkgJiYgYS5pbmRleE9mKCdjcmlvcycpID4gMCkgfHwgKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ2dzYScpID4gMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgdmVyc2lvblxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSUU45Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZThVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDggJiYgbXNpZSAhPT0gMDtcblxuICB9XG4gICAgXG4gIC8vIElFOeS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWU5VW5kZXIoKSB7XG5cbiAgICB2YXIgbXNpZTtcbiAgICBtc2llID0gbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICBtc2llID0gbXNpZS5pbmRleE9mKCdtc2llJykgPiAtMSA/IHBhcnNlSW50KG1zaWUucmVwbGFjZSgvLiptc2llWyBdLywgJycpLm1hdGNoKC9eWzAtOV0rLykpIDogMDtcbiAgICByZXR1cm4gbXNpZSA8PSA5ICYmIG1zaWUgIT09IDA7XG5cbiAgfVxuXG4gIC8vIElFMTDku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llMTBVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDEwICYmIG1zaWUgIT09IDA7XG5cbiAgfVxuXG4gIC8vIElFMTHku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llMTFVbmRlcigpIHtcblxuICAgIHZhciBiID0gdGhpcy5pc0llMTBVbmRlcigpIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJ0cmlkZW50XCIpICE9IC0xKTtcbiAgICByZXR1cm4gYjtcbiAgICAvLyByZXR1cm4gdHJ1ZTtcblxuICB9XG5cbiAgLy8gZWRnZeOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRWRnZSgpIHtcblxuICAgIGxvZyh0aGlzLnVhLmluZGV4T2YoXCJBcHBsZVdlYmtpdFwiKSx0aGlzLnVhLmluZGV4T2YoXCJFZGdlXCIpLHRoaXMudWEsdGhpcy5hcHBWKTtcbiAgICB2YXIgYiA9ICh0aGlzLnVhLmluZGV4T2YoXCJhcHBsZXdlYmtpdFwiKSA+PSAwICYmIHRoaXMudWEuaW5kZXhPZihcImVkZ2VcIikgIT0gLTEpO1xuICAgIHJldHVybiBiO1xuICAgIC8vIHJldHVybiB0cnVlO1xuXG4gIH1cblxuICBpc0lFVmVyc2lvbigpe1xuXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdpZScpO1xuICAgIHRoaXMuaXNJRSA9IHRydWU7XG4gICAgICBcbiAgICBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDEwLlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTEwJyk7XG4gICAgICByZXR1cm4gJ2llMTAnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDkuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llOScpO1xuICAgICAgcmV0dXJuICdpZTknO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDguXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llOCcpOyAgXG4gICAgICByZXR1cm4gJ2llOCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgNy5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU3Jyk7XG4gICAgICByZXR1cm4gJ2llNyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgNi5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU2Jyk7XG4gICAgICByZXR1cm4gJ2llNic7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcInRyaWRlbnRcIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWUxMScpO1xuICAgICAgdGhpcy5pc0lFMTEgPSB0cnVlO1xuICAgICAgcmV0dXJuICdpZTExJztcbiAgICB9IGVsc2UgaWYgKHRoaXMudWEuaW5kZXhPZihcImFwcGxld2Via2l0XCIpID49IDAgJiYgdGhpcy51YS5pbmRleE9mKFwiZWRnZVwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc0VkZ2UnKTtcbiAgICAgIHJldHVybiAnZWRnZSc7XG4gICAgfVxuXG5cbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2llJyk7XG4gICAgdGhpcy5pc0lFID0gZmFsc2U7XG5cbiAgfVxuXG4gIGlzQW5kcm9pZFZlcnNpb24oKSB7XG5cbiAgICBpZiggdGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSA+IDAgKSB7XG5cbiAgICAgICAgdmFyIHZlcnNpb24gPSBwYXJzZUZsb2F0KHRoaXMudWEuc2xpY2UodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSs4KSk7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgICAgICBcbiAgICB9XG5cbiAgfVxuXG4gIGlzaXBob25lVmVyc2lvbigpIHtcblxuICAgIGlmKCB0aGlzLnVhLmluZGV4T2YoXCJpUGhvbmUgT1NcIikgPiAwICkge1xuXG4gICAgICAgIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdCh0aGlzLnVhLnNsaWNlKHRoaXMudWEuaW5kZXhPZihcImlQaG9uZSBPU1wiKSsxMCkpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbjtcblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBwb3J0cmFpdCAvIGxhbmRzY2FwZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNEaXJlY3Rpb24gKCkge1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChIID4gVykge1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgIH1lbHNle1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICByZXNwb25zaXZlIOaoquW5heOCkuimi+OCi1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNSZXNwb25zaXZlIChicCkge1xuXG4gICAgaWYgKGJwPT11bmRlZmluZWQpIGJwPTM3NTtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoVyA+IGJwKSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IHRydWU7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IHRydWU7XG4gICAgICB0aGlzLmlzUmVzUEMgPSBmYWxzZTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgVVJMXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIOOCr+OCqOODquaKnOOBjeWHuuOBl1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAa2V5IDog5oqc44GN5Ye644GZ44OR44Op44Oh44O844K/5ZCNKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZ2V0UXVlcnkoa2V5KSB7XG5cbiAgLy8gICB2YXIgcXMsIHJlZ2V4O1xuICAvLyAgIGtleSA9IGtleS5yZXBsYWNlKC9b4oKsW10vLCBcIuKCrOKCrOKCrFtcIikucmVwbGFjZSgvW+KCrF1dLywgXCLigqzigqzigqxdXCIpO1xuICAvLyAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIlvigqzigqw/Jl1cIiArIGtleSArIFwiPShbXiYjXSopXCIpO1xuICAvLyAgIHFzID0gcmVnZXguZXhlYyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIC8vICAgaWYgKHFzID09PSBudWxsKSB7XG4gIC8vICAgICByZXR1cm4gXCJcIjtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgcmV0dXJuIHFzWzFdO1xuICAvLyAgIH1cblxuICAvLyB9XG5cbiAgZ2V0UGFyYW0oKSB7XG5cbiAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZjtcbiAgICB2YXIgcGFyYW0gPSB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICBpZiAocGFyYW09PXVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgcGFyYW1JdGVtcyA9IHBhcmFtLnNwbGl0KCcmJyk7XG4gICAgdmFyIGxpc3QgPSB7fTtcbiAgXG4gICAgZm9yKCB2YXIgaSA9IDA7IGk8cGFyYW1JdGVtcy5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgIHBhcmFtSXRlbSA9IHBhcmFtSXRlbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgbGlzdFtwYXJhbUl0ZW1bMF1dID0gcGFyYW1JdGVtWzFdO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG5cbiAgfVxuICBcbiAgLy8g44OP44OD44K344Ol5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IGxvY2F0aW9uLmhhc2jjga4j44KS5YmK6Zmk44GX44Gf44KE44GkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhhc2goKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcblxuICB9XG5cbiAgLy8gY29va2ll5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBrZXkgOiDjg5Hjg6njg6Hjg7zjgr/lkI1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0Q29va2llKGtleSkge1xuXG4gICAgdmFyIGEsIGFyciwgaSwgbCwgbGVuMSwgdmFsO1xuICAgIGlmIChkb2N1bWVudC5jb29raWUgPT09IHZvaWQgMCB8fCBkb2N1bWVudC5jb29raWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcbiAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGFyci5sZW5ndGg7IGwgPCBsZW4xOyBpID0gKytsKSB7XG4gICAgICB2YWwgPSBhcnJbaV07XG4gICAgICBhID0gdmFsLnNwbGl0KFwiPVwiKTtcbiAgICAgIGlmIChhWzBdID09PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGFbMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG4gIH0gICAgICBcblxuICAvLyBjb29raWXoqK3lrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAvLyBAdmFsIDog5YCkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldENvb2tpZShrZXksIHZhbCkge1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgdmFsO1xuXG4gIH1cbiAgXG4gIGlzUENTUCgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuXG4gICAgaWYgKCF0aGlzLmlzUEMgJiYgIXRoaXMuaXNUQUIgJiYgKHVybC5pbmRleE9mKCdwYycpICE9IC0xKSkge1xuXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc1BDICYmIHVybC5pbmRleE9mKCdwYycpID09IC0xKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbi9wYy8nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc1RBQiAmJiB1cmwuaW5kZXhPZigncGMnKSA9PSAtMSkge1xuXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4vcGMvJztcbiAgICBcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaXNDb250YWluKHVybCwncm91bGV0dGUnKSkgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuJztcbiAgICBpZiAodGhpcy5pc0NvbnRhaW4odXJsLCd0b3BpY3MnKSkgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuJztcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb2xvclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyByZ2LjgYvjgolIRVjjgqvjg6njg7zlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHIgOiAwfjI1NVxuICAvLyBAZyA6IDB+MjU1XG4gIC8vIEBiIDogMH4yNTVcbiAgLy8gcmV0dXJuIDogZXggXCIjRkZGRkZGXCJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SGV4Q29sb3IocixnLGIpIHtcbiAgICAgIHZhciBzdHI7XG4gICAgICBzdHIgPSAociA8PCAxNiB8IGcgPDwgOCB8IGIpLnRvU3RyaW5nKDE2KTtcbiAgICAgIHJldHVybiBcIiNcIiArIG5ldyBBcnJheSg3IC0gc3RyLmxlbmd0aCkuam9pbihcIjBcIikgKyBzdHI7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFN0cmluZ1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0NvbnRhaW4oc3RyLGNvbnRhaW4pIHtcblxuICAgIC8vIHN0cuOBruS4reOBqyxjb250YWlu44GM5a2Y5Zyo44GX44Gf44KJXG4gICAgaWYgKCBzdHIuaW5kZXhPZihjb250YWluKSAhPSAtMSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgLy8gMOWfi+OCgeOBpzLmoYHjgavjgZnjgovplqLmlbBcbiAgYWRkMChzdHIsbnVtPS0yKXtcbiAgICBcbiAgICByZXR1cm4gKCBcIjAwMDAwMDAwMDAwMFwiICsgc3RyICkuc3Vic3RyKCBudW0gKTtcblxuICB9XG5cbiAgZmxvYXRGb3JtYXQoIG51bWJlciwgbiApIHtcblxuICAgIHZhciBfcG93ID0gTWF0aC5wb3coIDEwICwgbiApIDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCggbnVtYmVyICogX3BvdyApIC8gX3BvdyA7XG5cbiAgfVxuICAgIFxuICAvLyDlgKTmrrXooajoqJhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJpY2UobnVtKSB7XG5cbiAgICByZXR1cm4gU3RyaW5nKG51bSkucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoPyFcXGQpKS9nLCAnJDEsJyk7XG5cbiAgfVxuXG4gIC8vIOaWh+Wtl+WIl+OCkuWPjei7olxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAc3RyIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gcmV0dXJuIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RyUmV2ZXJzZShzdHIpIHtcblxuICAgIHZhciBpLCBsZW4sIHJlcztcbiAgICByZXMgPSBcIlwiO1xuICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgaSA9IDE7XG4gICAgd2hpbGUgKGkgPD0gbGVuKSB7XG4gICAgICByZXMgKz0gc3RyLnN1YnN0cigtaSwgMSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG5cbiAgfVxuICBcbiAgLy8g5paH5a2X5YiX44Gu5YWo572u5o+bXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgIDog5paH5a2X5YiXXG4gIC8vIEBvZWcgIDog572u5o+b5YmN44Gu5paH5a2X5YiXXG4gIC8vIEBkZXN0IDog572u5o+b5b6M44Gu5paH5a2X5YiXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcGxhY2VBbGwodmFsLCBvcmcsIGRlc3QpIHtcblxuICAgIHJldHVybiB2YWwuc3BsaXQob3JnKS5qb2luKGRlc3QpO1xuXG4gIH0gICAgXG4gIFxuICBzdHJSZXBsYWNlKHN0ciwgYmVmb3JlLCBhZnRlcikge1xuXG4gICAgdmFyIHIgPSBuZXcgUmVnRXhwKCBiZWZvcmUsICdnJyk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoIHIgLCBhZnRlciApO1xuXG4gIH0gICAgXG4gIFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0Tm93KCkge1xuXG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpO1xuXG4gIH1cblxuICBlbGFwc2VkKCkge1xuXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lO1xuXG4gIH1cblxuICBtKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoIHRoaXMuZWxhcHNlZFRpbWUgKyAxMDAgLyA2MCApO1xuXG4gIH1cblxuICBzKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5lbGFwc2VkVGltZSAvIDEwMDApO1xuXG4gIH1cblxuICBtcygpIHtcblxuICAgIHJldHVybiB0aGlzLmVsYXBzZWRUaW1lO1xuICAgIFxuICB9XG5cbiAgdGltZSgpIHtcblxuICAgIHRoaXMuZ2V0Tm93KCk7XG5cbiAgICB0aGlzLmhvdXIgPSB0aGlzLm5vdy5nZXRIb3VycygpOyAgICAgICAgICAvLyDmmYJcbiAgICB0aGlzLm1pbnV0ZSA9IHRoaXMubm93LmdldE1pbnV0ZXMoKTsgICAgICAvLyDliIZcbiAgICB0aGlzLnNlY29uZCA9IHRoaXMubm93LmdldFNlY29uZHMoKTtcbiAgICB0aGlzLm1pbGxTZWNvbmQgPSB0aGlzLm5vdy5nZXRNaWxsaXNlY29uZHMoKTtcblxuICB9XG5cbiAgZGF0ZSgpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXREYXRlKCk7XG5cbiAgfVxuXG4gIG1vbnRocygpIHtcblxuICAgIHZhciBtb250aGRheXMgPSBuZXcgQXJyYXkoMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMSk7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0TW9udGgoKSArIDE7XG5cbiAgfVxuXG4gIHllYXIoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RnVsbFllYXIoKTtcblxuICB9XG5cbiAgZGF5KCkge1xuXG4gICAgLy8g5puc5pelICjml6XmnKzoqp4pXG4gICAgdmFyIHdlZWtEYXlKUCA9IFtcIuaXpVwiLFwi5pyIXCIsXCLngatcIixcIuawtFwiLFwi5pyoXCIsXCLph5FcIixcIuWcn1wiXSA7XG4gICAgdmFyIHdESiA9IHdlZWtEYXlKUFt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gICAgLy8g5puc5pelICjoi7Hoqp4pXG4gICAgdmFyIHdlZWtEYXlFTiA9IFtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSA7XG4gICAgdmFyIHdERSA9IHdlZWtEYXlFTlt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gIH1cbiAgXG4gIC8vIOaVsOaXpeW+jOOBrkRhdGXjgqrjg5bjgrjjgqfjgq/jg4jlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWZ0ZXJEYXkoZGF0ZSwgbnVtKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBOdW1iZXIobnVtKSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGEgdHlwZSBjaGVja1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc09iamVjdCh2YWx1ZSwgaWdub3JlQXJyYXkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuICB9XG5cbiAgaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9XG5cbiAgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgaXNOdWxsKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gIH1cblxuICBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIG90aGVyXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRJbWdTUFNpemUgKCR0YXJnZXQpe1xuXG4gICAgLy8gcmVzcG9uc2l2ZSBzcOOBruOBqOOBjeWHpueQhlxuICAgIGlmICghdGhpcy5pc1Jlc1NQKSByZXR1cm47XG4gICAgLy8g5LiA5bqm44Gg44GR5Yem55CGXG4gICAgLy8gaWYgKHRoaXMuaXNTZXRTUFNpemUpIHJldHVybjtcbiAgICAvLyB0aGlzLmlzU2V0U1BTaXplID0gdHJ1ZTtcblxuICAgIHZhciAkaW1nID0gJHRhcmdldCxcbiAgICAgICAgbGVuID0gJGltZy5sZW5ndGg7XG5cbiAgICAkaW1nLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgIHZhciB3ID0gTWF0aC5mbG9vcigkKHRoaXMpLndpZHRoKCkgLyAyKSxcbiAgICAgICAgICAgIGggPSBNYXRoLmZsb29yKCQodGhpcykuaGVpZ2h0KCkgLyAyKTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgJ3dpZHRoJzogdyxcbiAgICAgICAgICAgICdoZWlnaHQnOiBoLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobGVuID09IGkgKyAxKSAkKHdpbmRvdykudHJpZ2dlcignc2V0U3BaaWVFbmQnKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIOOCueODnuODm+aTjeS9nOeEoeWKuVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0UHJldmVudCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbigndG91Y2htb3ZlLm5vQ29udHJvbCcsIGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt9KTtcblxuICB9XG5cbiAgcmVtb3ZlUHJldmVudCgpIHtcblxuICAgICQod2luZG93KS5vZmYoJ3RvdWNobW92ZS5ub0NvbnRyb2wnKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICBob3N0LHByb3Rjb2xcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByb3RvY29sKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sO1xuXG4gIH1cbiAgICBcbiAgaG9zdCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAvLyByZXR1cm4gbG9jYXRpb24uaG9zdFxuXG4gIH1cblxuICBwb3J0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBvcnQ7XG5cbiAgfVxuICAgICAgICBcbiAgcGF0aCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHQoZSkge1xuXG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuXG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgZGlzYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbndoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG9sZGVyIGJyb3dzZXJzLCBJRVxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSAgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2JpbGVcbiAgICBkb2N1bWVudC5vbmtleWRvd24gID0gdGhpcy5wcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XG5cbiAgfVxuXG4gIGVuYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub253aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvVXRpbC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEZ1bmNcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuYyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmJsYW5rKCk7XG4gICAgdGhpcy5kZWJ1Z2dlcigpO1xuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgdGhpcy5leHBhbmRqUXVlcnkoKTtcblxuICB9XG5cbiAgYmxhbmsoKSB7XG5cbiAgICAkKCgpPT57JCgnLmJsYW5rJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpO30pO1xuXG4gIH1cblxuICBkZWJ1Z2dlcigpIHtcblxuICAgIC8vIOODh+ODkOODg+OCsOODouODvOODieWIh+abv1xuICAgIHZhciBSRUxFQVNFID0gZ2IuaW4uY29uZi5SRUxFQVNFO1xuXG4gICAgLy8g572u5o+b5a++6LGh44Gu44Oh44K944OD44OJ44KS6YWN5YiX44Go44GX44Gm5L+d5oyB44GZ44KLXG4gICAgdmFyIG1ldGhvZHMgPSBbXG4gICAgICAnbG9nJyxcbiAgICAgICdkZWJ1ZycsXG4gICAgICAnaW5mbycsXG4gICAgICAnd2FybicsXG4gICAgICAnZXJyb3InLFxuICAgICAgJ2RpcicsXG4gICAgICAndHJhY2UnLFxuICAgICAgJ2Fzc2VydCcsXG4gICAgICAnZGlyeG1sJyxcbiAgICAgICdncm91cCcsXG4gICAgICAnZ3JvdXBFbmQnLFxuICAgICAgJ3RpbWUnLFxuICAgICAgJ3RpbWVFbmQnLFxuICAgICAgJ2NvdW50JyxcbiAgICAgICdwcm9maWxlJyxcbiAgICAgICdwcm9maWxlRW5kJ1xuICAgIF07XG5cbiAgICAvLyBjb25zb2xl44GM5L2/44GI44Gq44GE5aC05ZCI44Gv56m644Gu44Kq44OW44K444Kn44Kv44OI44KS6Kit5a6a44GX44Gm44GK44GPXG4gICAgaWYoIHR5cGVvZiB3aW5kb3cuY29uc29sZSA9PT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgd2luZG93LmNvbnNvbGUgPSB7fTtcbiAgICB9XG5cbiAgICAvLyDlkITjg6Hjgr3jg4Pjg4njgpJ3aW5kb3fjgbjnm7TmjqXov73liqDjgZfjgabooYzjgY9cbiAgICBmb3IoIHZhciBpIGluIG1ldGhvZHMgKXtcbiAgICAgIChmdW5jdGlvbiggbSApe1xuXG4gICAgICAgLy8gY29uc29sZeOBq+OBguOCi++8n+ODh+ODkOODg+OCsOODouODvOODieOBr+acieWKue+8n2NvbnNvbGXjga7jgoLjga7jga/plqLmlbDvvJ9cbiAgICAgICBpZiggY29uc29sZVttXSAmJiAhUkVMRUFTRSAmJiB0eXBlb2YgY29uc29sZVttXSA9PT0gXCJmdW5jdGlvblwiICl7XG4gICAgICAgIHdpbmRvd1ttXSA9IGNvbnNvbGVbbV0uYmluZChjb25zb2xlKTtcbiAgICAgICB9IGVsc2Uge+OAgC8vIGRlYnVnTW9kZeOBjGZhbHNlLOOCguOBl+OBj+OBr+ipsuW9k+ODoeOCveODg+ODieOBjOWtmOWcqOOBl+OBquOBhOWgtOWQiOOBr+OAgeepuuOBruODoeOCveODg+ODieOCkueUqOaEj+OBmeOCi1xuICAgICAgICB3aW5kb3dbbV0gPSBmdW5jdGlvbigpe307XG4gICAgICAgfVxuXG4gICAgICB9KSggbWV0aG9kc1tpXSApO1xuICAgIH1cblxuICB9XG5cbiAgcHJlcGVuZChwYXJhbSkge1xuXG4gICAgJCgnYm9keScpLnByZXBlbmQocGFyYW0pO1xuXG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XG5cbiAgICB2YXIgRlBTID0gMTAwMC82MDtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIGNocm9tZeOChOacgOaWsOOBrlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIOWPpOOBhGZpcmVmb3jnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAgLy8gc2FmYXJpNuS7peWJjeOAgWlPUzYgc2FmYXJp55SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgRlBTKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCB0aW1lciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07ICAgICAgXG5cbiAgfVxuXG4gIGV4cGFuZGpRdWVyeSgpIHtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgdzowLCBcbiAgICAgIGg6MCwgXG4gICAgICBhZGp1c3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0VzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0SDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBjaGVja0Nzc0JsZW5kKCkge1xuXG4gICAgaWYgKCdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1MpIHtcbiAgICAgIGlmICghd2luZG93LkNTUy5zdXBwb3J0cygnbWl4LWJsZW5kLW1vZGUnLCAnc29mdC1saWdodCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvZyhnYi5pbi51LmlzSUUpO1xuXG4gICAgaWYgKGdiLmluLnUuaXNJRSkge1xuICAgICAgXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIFxuICAgIH07XG5cbiAgfVxuXG4gIG5vdFNhdmVJbWcoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBwY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG5cbiAgICAgICQoKCk9PntcbiAgICAgICAgJChcImltZ1wiKS5vbihcImNvbnRleHRtZW51XCIsKCk9PntcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBzcCBhbmRyb2lkXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgdiA9IGdiLmluLnUuaXNBbmRyb2lkVmVyc2lvbigpO1xuXG4gICAgaWYgKHY9PXVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGlmICh2PDUpIHtcblxuICAgICAgdmFyIHRpbWVyO1xuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoc3RhcnRcIiwoKT0+e1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBhbGVydChcIueUu+WDj+OBr+S/neWtmOOBp+OBjeOBvuOBm+OCk1wiKVxuICAgICAgICB9LDUwMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaGVuZFwiLCgpPT57XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pICAgICAgXG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0Z1bmMuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFJlYWR5TWdyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgUmVhZHlQZXJjZW50IGZyb20gJy4uLy4uL0Z1bmMvUmVhZHlQZXJjZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHlNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5jb21wbGV0ZWQgPSAwO1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMuY3VycmVudCA9IDA7XG5cblxuICAgIHRoaXMub25Db21wbGV0ZWRGdW5jID0gKCk9Pnt9O1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICB0aGlzLnJlYWR5UGVyY2VudCA9IG5ldyBSZWFkeVBlcmNlbnQoKTtcblxuICB9XG5cbiAgb25Db21wbGV0ZSgpIHtcblxuICAgIC8vIHVwZGF0ZeWHpueQhuOCkuOChOOCgeOCi1xuICAgIGdiLmluLnVwLnJlbW92ZSgncmVhZHlQZXJjZW50JywgdGhpcy5yZWFkeVBlcmNlbnQudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgLy8g5rqW5YKZ5a6M5LqG5b6M44Gu5Yem55CGXG4gICAgdGhpcy5vbkNvbXBsZXRlZEZ1bmMoKTtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG4gICAgICAgXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvUmVhZHlNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFJlYWR5UGVyY2VudFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHlQZXJjZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuJGxvYWRpbmcgPSAkKCcjbG9hZGluZycpO1xuICAgIHRoaXMuJGJhciA9ICQoJy5sb2FkaW5nQmFyJyk7XG4gICAgdGhpcy4kcGVyY2VudCA9ICQoJy5sb2FkaW5nUGVyY2VudCcpO1xuXG4gICAgdGhpcy5pc0xvY2sgPSBmYWxzZTtcbiAgICB0aGlzLnNldFRpbWVvdXRMb2NrID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBpZiAoIWdiLmluLmNvbmYud2ViRm9udExvYWRlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHRhcmdldCA9IChnYi5pbi5ybS5jb21wbGV0ZWQgLyBnYi5pbi5ybS50b3RhbCkgKiAxMDA7XG5cbiAgICBnYi5pbi5ybS5jdXJyZW50ICs9ICh0YXJnZXQgLSBnYi5pbi5ybS5jdXJyZW50KSAqIDAuMTtcbiAgICAvLyB0aGlzLiRiYXIuY3NzKHsgd2lkdGg6IGdiLmluLnJtLmN1cnJlbnQgKyAnJScgfSk7IC8vcGVyY2VudCDkvLjjgbDjgZlcbiAgICB0aGlzLiRwZXJjZW50LnRleHQoIE1hdGguZmxvb3IoZ2IuaW4ucm0uY3VycmVudCkgKyAnJScpO1xuXG4gICAgLy8g57WC5LqG5Yem55CGXG4gICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgPj0gMTAwICYmICF0aGlzLmlzTG9jaykge1xuICAgICAgdGhpcy5pc0xvY2sgPSB0cnVlO1xuICAgICAgZ2IuaW4ucm0ub25Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8vIGN1cnJlbnQg44GMIDk5Ljkg44KI44KK5aSn44GN44GR44KM44GwIDEwMCDjgajopovjgarjgZfjgabntYLkuoblh6bnkIbjgbhcbiAgICBpZiAoZ2IuaW4ucm0uY3VycmVudCA+IDk5LjkpIHtcbiAgICAgIGdiLmluLnJtLmN1cnJlbnQgPSAxMDA7XG4gICAgfVxuXG4gICAgLy8gaWUxMeOBryw5OeOBq+OBquOBo+OBpuOAgTXnp5LntYzjgaPjgabjgoIxMDDjgafjgarjgZHjgozjgbDjgIHlvLfliLbnmoTjgavjgIHooajnpLpcbiAgICAvLyDjgZ3jga7pmpvjgIFjb21wbGV0ZeOBl+OBpueEoeOBkeOCjOOBsOiDjOaZr+OBr+mdmeatoueUu+OBq1xuICAgIC8vIGlmIChnYi5pbi51LmlzSUUxMSkge1xuXG4gICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgPiA5OSAmJiAhdGhpcy5zZXRUaW1lb3V0TG9jaykge1xuICAgIHRoaXMuc2V0VGltZW91dExvY2sgPSB0cnVlO1xuXG4gICAgbG9nKCc5OSEhISEnKTtcbiAgICAgIC8vIGdiLmluLnJtLmN1cnJlbnQgPSA5OTtcblxuICAgICAgc2V0VGltZW91dCgoKT0+e1xuXG4gICAgICAgIGxvZygnNSEhIScpXG5cbiAgICAgICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgIT09IDEwMCkge1xuXG4gICAgICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgICAgICAgJCgnLmJnT3ZlcmxheUltZycpLmFkZENsYXNzKCdpc0FjdGl2ZScpO1xuXG4gICAgICAgICAgbG9nKCflr77lv5zvvIHvvIEnKVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gICAgICB9LDUwMDApO1xuXG4gICAgfTtcblxuICAgIC8vIH07XG5cbiAgfVxuXG4gIHJlbW92ZSgpIHtcblxuXG4gICAgVHdlZW5NYXhcbiAgICAgIC50byh0aGlzLiRsb2FkaW5nLCAyLjgsIHtcbiAgICAgICAgc2NhbGU6IDEuMixcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTooKT0+e1xuICAgICAgICAgIHRoaXMuJGxvYWRpbmcucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pICAgIFxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi51cC5hZGQoJ3JlYWR5UGVyY2VudCcsdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvUmVhZHlQZXJjZW50LmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOeUu+mdouabtOaWsOOCr+ODqeOCuVxuICogUHJvamVjdDpcbiAqIEZpbGU6IFVwZGF0ZU1nclxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwZGF0ZU1nciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvL+abtOaWsOWbnuaVsFxuICAgIHRoaXMuY250ID0gMDtcblxuICAgIC8v5q+O44OV44Os44O844Og5a6f6KGM44GV44Gb44KL6Zai5pWw44KS5L+d5oyBXG4gICAgdGhpcy51cGRhdGVMaXN0ID0gW107XG5cbiAgICB0aGlzLmxlbiA9IDA7XG4gICAgdGhpcy5UaW1lciA9IG51bGw7XG4gICAgdGhpcy5pc1N0b3AgPSBmYWxzZTtcblxuICB9XG5cbiAgLyoqXG4gICAqICDlrp/ooYzjgZfjgZ/jgYTplqLmlbDjgpLnmbvpjLJcbiAgICogIGZ1bmMgOiDplqLmlbBcbiAgICovXG4gIGFkZChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy51cGRhdGVMaXN0LnB1c2gob2JqKTtcblxuICB9XG5cbiAgLyoqXG4gICAqICDlrp/ooYzjgZfjgZ/jgYTplqLmlbDjgpLliYrpmaRcbiAgICogIGZ1bmMgOiDplqLmlbBcbiAgICovXG4gIHJlbW92ZShuYW1lKSB7XG5cbiAgICB2YXIgdGFyZ2V0ID0ge25hbWU6bmFtZSxmdW5jOigpPT57fX07XG5cbiAgICBVcGRhdGVNZ3IuYXJyUmVtb3ZlKHRoaXMudXBkYXRlTGlzdCwgdGFyZ2V0KTtcblxuICB9XG5cbiAgLyoqXG4gICAqICDmm7TmlrAo55m76Yyy44GV44KM44Gf6Zai5pWw44Gu57eP5pWw5YiG5a6f6KGM44GZ44KLKVxuICAgKi9cbiAgdXBkYXRlKCkge1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnVwZGF0ZUxpc3QpIHRoaXMudXBkYXRlTGlzdFtpXS5mdW5jKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOabtOaWsOOBruWun+ihjOmWouaVsOOBruWGheWuuVxuICAgKi9cbiAgbG9vcCgpIHtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5jbnQrKztcblxuICAgIHRoaXMuVGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIGlmICh0aGlzLmlzU3RvcCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5UaW1lcik7XG4gICAgXG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOabtOaWsOWBnOatolxuICAgKi9cbiAgc3RvcCgpIHtcblxuICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA5pu05paw5YaN6ZaLXG4gICAqL1xuICByZXN1bWUoKSB7XG5cbiAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgIHRoaXMubG9vcCgpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDpnZnnmoTjg6Hjg7Pjg5DplqLmlbBcbiAgICovXG4gIHN0YXRpYyBhcnJSZW1vdmUoYXJyICwgdGFyZ2V0KSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSB0YXJnZXQubmFtZSl7XG4gICAgICAgIGFyci5zcGxpY2UoIGkgLCAxICkgO1xuICAgICAgICBpLS07XG4gICAgICAgIGxlbi0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUmVzaXplTWdyXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNpemVNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5yZXNpemVMaXN0ID0gW107XG4gICAgdGhpcy53cyA9IHt3OjAsIGg6MCwgb2xkVzotMSwgb2xkSDotMX07XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbihlKXtzZWxmLm9uUmVzaXplLmNhbGwoc2VsZixlKTt9KTtcbiAgICB0aGlzLmdldFdpbmRvd1NpemUoKTtcblxuICB9XG5cbiAgb25SZXNpemUoZSkge1xuXG4gICAgdGhpcy5nZXRXaW5kb3dTaXplKCk7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMucmVzaXplTGlzdCkgdGhpcy5yZXNpemVMaXN0W2ldLmZ1bmMoKTtcblxuICB9XG5cbiAgVygpIHtcblxuICAgICAgcmV0dXJuIHRoaXMud3MudztcbiAgICBcbiAgfVxuICBcbiAgSCgpIHtcblxuICAgICAgcmV0dXJuIHRoaXMud3MuaDtcbiAgXG4gIH1cblxuICBnZXRXaW5kb3dTaXplKCl7XG5cbiAgICB2YXIgdyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdGhpcy53cy5vbGRXID0gdGhpcy53cy53O1xuICAgIHRoaXMud3Mub2xkSCA9IHRoaXMud3MuaDtcbiAgICB0aGlzLndzLncgPSB3O1xuICAgIHRoaXMud3MuaCA9IGg7XG5cbiAgfVxuXG4gIGFkZChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy5yZXNpemVMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuXG4gIHJlbW92ZShuYW1lKSB7XG5cbiAgICBSZXNpemVNZ3IuYXJyUmVtb3ZlKHRoaXMucmVzaXplTGlzdCwgbmFtZSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAg6Z2Z55qE44Oh44Oz44OQXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0aWMgYXJyUmVtb3ZlKGFyciAsIG5hbWUpIHtcblxuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIHZhciBjaGVjaztcbiAgICBmb3IoIHZhciBpID0gMCA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIGNoZWNrID0gYXJyWyBpIF07XG5cbiAgICAgIGlmKCBjaGVjay5uYW1lID09IG5hbWUpe1xuICAgICAgICBhcnIuc3BsaWNlKCBpICwgMSApIDtcbiAgICAgICAgaS0tO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9SZXNpemVNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNjcm9sbE1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsTWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2Nyb2xsTGlzdCA9IFtdO1xuICAgIHRoaXMuc2Nyb2xsRW5kTGlzdCA9IFtdO1xuICAgIHRoaXMudyA9IDA7dGhpcy5oID0gMDtcbiAgICB0aGlzLnN0ID0gMDsgLy8g54++5Zyo44Guc2Nyb2xsIHRvcFxuICAgIHRoaXMuc2IgPSAwOyAvLyDnj77lnKjjga5zY3JvbGwgYm90dG9tXG4gICAgdGhpcy5zdiA9IDA7IC8vIOePvuWcqOOBruOCueOCr+ODreODvOODq+mHj1xuXG4gICAgdGhpcy5TVEFtb3VudCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuXG4gICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5nZXRXaW5kb3dTaXplKCk7XG4gICAgdGhpcy5hZGQoJ2VuZCcsdGhpcy5lbmQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG4gIGFkZChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy5zY3JvbGxMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuXG4gIHJlbW92ZShuYW1lKSB7XG5cbiAgICBTY3JvbGxNZ3IuYXJyUmVtb3ZlKHRoaXMuc2Nyb2xsTGlzdCwgbmFtZSk7XG5cbiAgfVxuXG4gIHJlbW92ZSh0YXJnZXQpIHtcblxuICAgIFNjcm9sbE1nci5hcnJSZW1vdmUodGhpcy5zY3JvbGxMaXN0LCB0YXJnZXQpO1xuXG4gIH1cblxuICBvblJlc2l6ZShlKSB7XG5cbiAgICB0aGlzLmdldFdpbmRvd1NpemUoKTtcblxuICB9XG5cbiAgb25TY3JvbGwoZSkge1xuXG4gICAgaWYgKHRoaXMuaXNTdGFydCkge1xuICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG4gICAgICAvLyBsb2coJ3Jlc2l6ZVN0YXJ0Jyk7XG4gICAgICAvLyDmnIDliJ3jgaDjgZHjga7lh6bnkIZcbiAgICB9O1xuXG4gICAgdGhpcy5zdCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB0aGlzLnNiID0gdGhpcy5zdCArIHRoaXMuaDtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zY3JvbGxMaXN0KSB0aGlzLnNjcm9sbExpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBvbk1vdXNlV2hlZWwoZSxkZWx0YSxkZWx0YVgsZGVsdGFZKSB7XG5cbiAgICB0aGlzLlNUQW1vdW50ID0gZGVsdGFZO1xuICAgIGlmIChnYi5pbi51LmlzV2luKCkpIHRoaXMuU1RBbW91bnQgKj0gNjA7XG4gICAgaWYgKGdiLmluLnUuaXNGRigpICYmICFnYi5pbi51LmlzV2luKCkpIHRoaXMuU1RBbW91bnQgKj0gNjA7XG4gICAgLy8gaWYgKE1hdGguYWJzKHRoaXMuU1RBbW91bnQpID4gMTApIHRoaXMuU1RBbW91bnQgKj0gMC40O1xuICAgIHRoaXMub2Zmc2V0ICs9IHRoaXMuU1RBbW91bnQ7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2Nyb2xsTGlzdCkgdGhpcy5zY3JvbGxMaXN0W2ldLmZ1bmMoKTtcblxuICB9XG5cbiAgZ2V0V2luZG93U2l6ZSgpe1xuXG4gICAgdGhpcy53ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIH1cblxuICBlbmQoZSkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLlRpbWVyKTtcbiAgICB0aGlzLlRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuaXNTdGFydCA9IHRydWU7XG4gICAgICAvLyBsb2coJ3Jlc2l6ZUVuZCcpO1xuXG4gICAgICBmb3IgKHZhciBpIGluIHNlbGYuc2Nyb2xsRW5kTGlzdCkgc2VsZi5zY3JvbGxFbmRMaXN0W2ldKCk7XG5cbiAgICB9LCAyMDApO1xuXG4gIH1cblxuICBhZGRGaXhlZE9iamVjdFNjcm9sbCgkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLnNjcm9sbExpc3QucHVzaChmdW5jdGlvbigpe1xuXG4gICAgICAkdGFyZ2V0LmNzcyhcImxlZnRcIiwgLSQod2luZG93KS5zY3JvbGxMZWZ0KCkpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIChlKT0+e3RoaXMub25SZXNpemUoZSk7fSk7XG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCAoZSk9Pnt0aGlzLm9uU2Nyb2xsKGUpO30pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZXdoZWVsJywgKGUsZGVsdGEsZGVsdGFYLGRlbHRhWSk9Pnt0aGlzLm9uTW91c2VXaGVlbChlLGRlbHRhLGRlbHRhWCxkZWx0YVkpO30pO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIOmdmeeahOODoeODs+ODkFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGljIGFyclJlbW92ZShhcnIgLCBuYW1lKSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSBuYW1lKXtcbiAgICAgICAgYXJyLnNwbGljZSggaSAsIDEgKSA7XG4gICAgICAgIGktLTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvU2Nyb2xsTWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBNb3VzZU1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCR0YXJnZXQgPSAkKGRvY3VtZW50KSkge1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldDtcblxuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcblxuICAgIHRoaXMuY3ggPSAwO1xuICAgIHRoaXMuY3kgPSAwO1xuXG4gICAgdGhpcy5tb3VzZU1vdmVMaXN0ID0gW3tuYW1lOidkZWYnLGZ1bmM6KCk9Pnt9fV07XG4gICAgdGhpcy5tb3VzZU1vdmVTdGFydExpc3QgPSBbe25hbWU6J2RlZicsZnVuYzooKT0+e319XTtcbiAgICB0aGlzLm1vdXNlTW92ZUVuZExpc3QgPSBbe25hbWU6J2RlZicsZnVuYzooKT0+e319XTtcblxuICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XG4gICAgdGhpcy5UaW1lciA9IG51bGw7XG4gICAgdGhpcy5lbmRUaW1lID0gMTA7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICB0aGlzLmFkZCgnb25FbmQnLCB0aGlzLm9uRW5kLmJpbmQodGhpcykpO1xuXG4gIH1cblxuICBvblRvdWNobW92ZShlKSB7XG5cbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnggPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7IFxuICAgIHRoaXMueSA9IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcblxuICB9XG5cbiAgb25Nb3VzZW1vdmUoZSkge1xuXG4gICAgLy8gbG9nKHRoaXMubW91c2VNb3ZlTGlzdCk7XG5cbiAgICBpZiAodGhpcy5pc1N0YXJ0KSB7XG4gICAgICB0aGlzLmlzU3RhcnQgPSBmYWxzZTtcblxuICAgICAgLy8g5pyA5Yid44Gg44GR44Gu5Yem55CGXG4gICAgICAvLyBsb2coJ21vdmVTdGFydCcpO1xuXG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMubW91c2VNb3ZlU3RhcnRMaXN0KSB0aGlzLm1vdXNlTW92ZVN0YXJ0TGlzdFtpXS5mdW5jKCk7XG5cbiAgICB9O1xuXG4gICAgaWYgKGUub2Zmc2V0WD09dW5kZWZpbmVkKSB7IC8vIHRoaXMgd29ya3MgZm9yIEZpcmVmb3hcbiAgICAgICB0aGlzLnggPSBlLnBhZ2VYIC0gdGhpcy4kdGFyZ2V0Lm9mZnNldCgpLmxlZnQ7XG4gICAgICAgdGhpcy55ID0gZS5wYWdlWSAtIHRoaXMuJHRhcmdldC5vZmZzZXQoKS50b3A7XG4gICAgIH0gZWxzZSB7IC8vIHdvcmtzIGluIEdvb2dsZSBDaHJvbWVcbiAgICAgICB0aGlzLnggPSBlLnBhZ2VYIC0gJCh3aW5kb3cpLnNjcm9sbExlZnQoKTtcbiAgICAgICB0aGlzLnkgPSBlLnBhZ2VZIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICB9XG5cbiAgICB0aGlzLmN4ID0gKCBlLmNsaWVudFggLSBnYi5pbi5yLlcoKS8yICk7XG4gICAgdGhpcy5jeSA9ICggZS5jbGllbnRZIC0gZ2IuaW4uci5IKCkvMiApO1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLm1vdXNlTW92ZUxpc3QpIHRoaXMubW91c2VNb3ZlTGlzdFtpXS5mdW5jKCk7XG5cbiAgfVxuXG4gIG9uRW5kKGUpIHtcblxuICAgIGlmICh0aGlzLlRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5UaW1lcik7XG4gICAgdGhpcy5UaW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XG5cbiAgICAgIC8vIGxvZygnbW92ZUVuZCcpO1xuXG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMubW91c2VNb3ZlRW5kTGlzdCkgdGhpcy5tb3VzZU1vdmVFbmRMaXN0W2ldLmZ1bmMoKTtcblxuICAgIH0sIHRoaXMuZW5kVGltZSk7XG5cbiAgfVxuXG4gIGFkZChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy5tb3VzZU1vdmVMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuIFxuICBhZGRTdGFydCAobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMubW91c2VNb3ZlU3RhcnRMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuXG4gIGFkZEVuZCAobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMubW91c2VNb3ZlRW5kTGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cblxuICByZW1vdmUobmFtZSkge1xuXG4gICAgTW91c2VNZ3IuYXJyUmVtb3ZlKHRoaXMubW91c2VNb3ZlTGlzdCwgbmFtZSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAg6Z2Z55qE44Oh44Oz44OQXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdGF0aWMgYXJyUmVtb3ZlKGFyciAsIG5hbWUpIHtcblxuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIHZhciBjaGVjaztcbiAgICBmb3IoIHZhciBpID0gMCA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIGNoZWNrID0gYXJyWyBpIF07XG5cbiAgICAgIGlmKCBjaGVjay5uYW1lID09IG5hbWUpe1xuICAgICAgICBhcnIuc3BsaWNlKCBpICwgMSApIDtcbiAgICAgICAgaS0tO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxuICByZW1vdmVFdmVudHMoKXtcblxuICAgIHRoaXMuJHRhcmdldC5vZmYoXCJ0b3VjaG1vdmUuTW91c2VNZ3JcIik7XG4gICAgdGhpcy4kdGFyZ2V0Lm9mZihcIm1vdXNlbW92ZS5Nb3VzZU1nclwiKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCl7XG5cbiAgICB0aGlzLiR0YXJnZXQub24oXCJ0b3VjaG1vdmUuTW91c2VNZ3JcIiwgKGUpPT57dGhpcy5vblRvdWNobW92ZShlKTt9KTtcbiAgICB0aGlzLiR0YXJnZXQub24oXCJtb3VzZW1vdmUuTW91c2VNZ3JcIiwgKGUpPT57dGhpcy5vbk1vdXNlbW92ZShlKTt9KTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvTW91c2VNZ3IuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBMb2FkTWdyXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXIuanMnO1xuaW1wb3J0IFNlYzAxVmlkZW8gZnJvbSAnLi4vRGlzcGxheS9VSS9TZWMwMVZpZGVvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZE1nciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgLy8g44Gd44Gu5LuWXG4gICAgLy8g44K944O844K344Oj44Or44K544Kv44Oq44OX44OI44Gq44GpXG4gICAgLy8gdGhpcy5zbnNTY3JpcHQoKTtcblxuICAgIC8vIHRoaXMubG9hZFlvdXR1YmVTY3JpcHQoKTtcblxuICAgIC8vIHNlY3Rpb24wMuOBp+S9v+OBhuWkp+mHj+OBrueUu+WDj+OCkuODreODvOODiSAvLyB3ZWIgd29ya2Vy44Gq44Gp44KC5L2/44Gj44GmXG4gICAgLy8gdGhpcy5zZWMwMkltZygpO1xuXG4gICAgLy8gdGhpcy53ZWJGb250KCk7XG5cbiAgfVxuXG4gIGxvYWRZb3V0dWJlU2NyaXB0KCkge1xuXG4gICAgdmFyIGxvYWRlciA9IG5ldyBMb2FkZXIoKTtcblxuICAgIHZhciBsZW4gPSAxO1xuICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjsgLy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG4gICAgaWYgKGdiLmluLnUuaXNTUCkgZ2IuaW4ucm0uY29tcGxldGVkKys7XG5cbiAgICB2YXIgY2IgPSAoKT0+e1xuXG4gICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcblxuICAgIH1cblxuICAgIGxvYWRlci55b3V0dWJlSWZyYW1lU2NyaXB0KGNiKTtcblxuICB9XG5cbiAgc2VjMDJJbWcoKSB7XG5cbiAgICAvLyBiZ1ZpZGVvVGlsZeeUqOOBrumAo+eVqueUu+WDj+OBruiqreOBv+i+vOOBv1xuICAgIGdiLmluLmxvYWRTZWMwMkltZyA9IHRoaXMubG9hZGVyID0gbmV3IExvYWRlcigpO1xuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuICAgICAgdmFyIGxlbiA9IGdiLmluLmNvbmYuc2VjMDJJbWdOdW07XG4gICAgICBnYi5pbi5ybS50b3RhbCArPSBsZW4744CALy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG4gICAgICB2YXIgcGF0aCA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvbW92aWUvYmdJbWcvJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxlbiA9IDE5O1xuICAgICAgZ2IuaW4ucm0udG90YWwgKz0gbGVuO+OAgC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuICAgICAgdmFyIHBhdGggPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL21vdmllL2JnSW1nU1AvJztcbiAgICB9XG5cbiAgICB2YXIgY2IgPSAoKT0+e1xuICAgICAgLy8gZ2IuaW4uU2VjMDJCZy5jcmVhdGUoKTtcbiAgICB9XG4gICAgdmFyIGNiMDIgPSAoKT0+e1xuICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5sb2FkZXIuaW1nU2VyaWFsTG9hZChsZW4scGF0aCwndGZueV8nLGNiLGNiMDIpO1xuICAgIHRoaXMubG9hZGVyLmltZyhsZW4rMSxwYXRoLCd0Zm55XycsY2IsY2IwMik7XG5cbiAgfVxuXG4gIHNlY3Rpb24wNFByb2R1Y3RTaGFkZXIoKSB7XG5cbiAgICB2YXIgc2hhZGVycyA9IFtdO1xuICAgIHZhciBzaGFkZXJMb2FkTGlzdCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuQ2xvY2ssXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGdiLkNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5QbGFzbWEsXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGdiLlNlcGlhLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5Nb3NhaWMsXG4gICAgICAgICAgICAgICAgICAgICAgIGdiLlpvb21CbHVyLFxuICAgICAgICAgICAgICAgICAgICAgICBnYi5ab29tQmx1cixcbiAgICAgICAgICAgICAgICAgICAgICAgZ2IuVHJhbnNpdGlvbjAyLFxuICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgIHZhciBsZW4gPSBzaGFkZXJMb2FkTGlzdC5sZW5ndGg7XG4gICAgZ2IuaW4ucm0udG90YWwgKz0gbGVuOyAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcblxuICAgIHZhciBzaGFkZXJTZXJpYWxMb2FkID0gKGxlbiwgY2IpPT57XG5cbiAgICAgICAgdmFyIHNoYWRlcixjbnQ9MDtcblxuICAgICAgICB2YXIgbG9hZCA9IChpKT0+e1xuICAgICAgICAgIHNoYWRlciA9IG5ldyBzaGFkZXJMb2FkTGlzdFtpXShjb21wKTtcbiAgICAgICAgICBzaGFkZXJzLnB1c2goc2hhZGVyKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY29tcCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgY250Kys7XG4gICAgICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgICAgICAgaWYoY250ID09IGxlbikgY2Ioc2hhZGVycyk7XG4gICAgICAgICAgZWxzZSBsb2FkKGNudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbG9hZChjbnQpO1xuXG4gICAgfVxuXG4gICAgc2hhZGVyU2VyaWFsTG9hZChzaGFkZXJMb2FkTGlzdC5sZW5ndGgsKHNoYWRlcnMpPT57XG5cbiAgICAgIHRoaXMuc2hhZGVycyA9IHNoYWRlcnM7XG4gICAgICB0aGlzLnNlY3Rpb24wNFByb2R1Y3RJbWcoKTtcblxuICAgIH0pXG5cbiAgfVxuXG4gIHNlY3Rpb24wNFByb2R1Y3RJbWcoKSB7XG5cbiAgICB2YXIgdGV4dHVyZUxpc3QgPSBbXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3QvdGlmZmFueV9oYW5kMS5qcGcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L2Jyb3duLnBuZycsXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3QvYmx1ZS5wbmcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L3doaXRlLnBuZycsXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3QvdGlmZmFueWJsdWUucG5nJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC9waW5rLnBuZycsXG4gICAgXTsgICAgICBcbiAgICB0aGlzLnRleHR1cmVzID0gW107XG5cbiAgICB2YXIgbGVuID0gdGV4dHVyZUxpc3QubGVuZ3RoO1xuICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjsgLy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG5cbiAgICB2YXIgdGV4dHVyZVNlcmlhbExvYWQgPSAobGVuLCBjYik9PntcblxuICAgICAgdmFyIHRleHR1cmUsY250PTA7XG5cbiAgICAgIHZhciBsb2FkID0gKGkpPT57XG4gICAgICAgIHRleHR1cmUgPSBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKHRleHR1cmVMaXN0W2ldLCBudWxsICxjb21wKTtcbiAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKHRleHR1cmUpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGNvbXAgPSBmdW5jdGlvbigpe1xuICAgICAgICBjbnQrKztcbiAgICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgICAgIGlmKGNudCA9PSBsZW4pIGNiKCk7XG4gICAgICAgIGVsc2UgbG9hZChjbnQpO1xuICAgICAgfTtcblxuICAgICAgbG9hZChjbnQpO1xuXG4gICAgfVxuXG4gICAgdGV4dHVyZVNlcmlhbExvYWQodGV4dHVyZUxpc3QubGVuZ3RoLCAoKT0+eyQod2luZG93KS50cmlnZ2VyKCdvblNlY3Rpb24wNFByb2R1Y3RJbWcnKTt9KTtcblxuICB9XG5cbiAgd2ViRm9udCgpIHtcblxuICAgIC8vIHdlYiBmb250IGxvYWRlcueUqHBhcmFtXG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIGN1c3RvbToge1xuICAgICAgICBmYW1pbGllczogW1xuICAgICAgICAgICdDb3Jtb3JhbnQnLFxuICAgICAgICAgICdSb2JvdG8gQ29uZGVuc2VkJ1xuICAgICAgICAgIC8vICdOb3RvIFNhbnMgSmFwYW5lc2UnLFxuICAgICAgICAgIC8vICdSb2JvdG8nLFxuICAgICAgICAgIC8vICdBbGVncmV5YSBTYW5zJyxcbiAgICAgICAgICAvLyAnQWxlZ3JleWEgU2FucyBTQydcbiAgICAgICAgICBdLFxuICAgICAgICB1cmxzOiBbXG4gICAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Db3Jtb3JhbnQ6NTAwLDUwMGl8Um9ib3RvK0NvbmRlbnNlZCdcbiAgICAgICAgICAvLyAnL3Byb2plY3QtbmFtZS9hc3NldHMvY3NzL2ZvbnQuY3NzJyxcbiAgICAgICAgICAvLyAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDMwMCcsXG4gICAgICAgICAgLy8gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGVncmV5YStTYW5zOjQwMCwxMDAnLFxuICAgICAgICAgIC8vICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWxlZ3JleWErU2FucytTQzo0MDAsMzAwLDEwMCdcbiAgICAgICAgICBdXG4gICAgICB9LFxuICAgICAgYWN0aXZlOiBmdW5jdGlvbigpIHsgXG4gICAgICAgICAgXG4gICAgICAgICAgbG9nKCd3ZWJGb250ISEhIScpO1xuICAgICAgICAgIGdiLmluLmNvbmYud2ViRm9udExvYWRlZCA9IHRydWU7XG5cbiAgICAgIH0gXG4gICAgfTtcblxuICAgIHZhciBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7ICAgXG4gICAgbG9hZGVyLndlYkZvbnQoY29uZmlnKTtcblxuICB9XG5cbiAgb25FbmQoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Mb2FkTWdyLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTG9hZGVyXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB0aGlzLmNudCA9IDA7XG5cbiAgfVxuXG4gIGpzb24oc3JjLGNiKSB7XG5cbiAgICAkLmdldEpTT04oc3JjLCAoZGF0YSk9PntcblxuICAgICAgY2IoZGF0YSk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgaW1nKGxlbiwgcGF0aCwgbmFtZSwgY2I9KCk9Pnt9LCBjYjAyPSgpPT57fSl7XG5cbiAgICB2YXIgaSwgaW1nLCBudGgsIGNudCA9IDEsIGxpc3QgPSBbXTtcblxuICAgIGZvcihpID0gMTtpIDwgbGVuO2krKyl7XG4gICAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG50aCA9IGdiLmluLnUuYWRkMChpLC01KTtcbiAgICAgIHRoaXMubGlzdC5wdXNoKGltZyk7XG4gICAgICBpbWcub25sb2FkID0gKCk9PntcbiAgICAgICAgY2IwMigpO1xuICAgICAgICBjbnQrKztcbiAgICAgICAgaWYoY250ID09IGxlbikgY2IoKTtcbiAgICAgIH1cbiAgICAgIGltZy5zcmMgPSBwYXRoK25hbWUrbnRoK1wiLmpwZ1wiO1xuICAgIH1cblxuICB9XG5cbiAgLy8gY2IwMiBsb2Fk5a6M5LqG5pmCIOmDveW6pumDveW6pueUqOOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICBpbWdTZXJpYWxMb2FkKGxlbiwgcGF0aCwgbmFtZSwgY2I9KCk9Pnt9LGNiMDI9KCk9Pnt9KXtcblxuICAgIHZhciBpLCBpbWcsIG50aCwgY250ID0gMCwgbGlzdCA9IFtdO1xuXG4gICAgdmFyIGxvYWQgPSAoaSk9PntcbiAgICAgICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG50aCA9IGdiLmluLnUuYWRkMChpLC01KTtcbiAgICAgICAgdGhpcy5saXN0LnB1c2goaW1nKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XG4gICAgICAgICAgY2IwMigpO1xuICAgICAgICAgIGNvbXAoKTtcbiAgICAgICAgfVxuICAgICAgICBpbWcuc3JjID0gcGF0aCtuYW1lK250aCtcIi5qcGdcIjtcbiAgICB9O1xuXG4gICAgdmFyIGNvbXAgPSAoKT0+e1xuICAgICAgICBjbnQrKztcbiAgICAgICAgaWYoY250ID09IGxlbil7XG4gICAgICAgICAgY2IoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbG9hZChjbnQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGxvYWQoY250KTtcbiAgfVxuXG4gIGFqYXhJbWdMb2FkKGNiKXtcblxuICAgIHZhciBpbWdOdW0gPSAkKCdpbWcnKS5sZW5ndGg7XG4gICAgdmFyIGNudCA9IDA7XG5cbiAgICAkKCdpbWcnKS5lYWNoKGZ1bmN0aW9uKGksIGVsbSkge1xuXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XG4gICAgICAgICAgY250Kys7XG4gICAgICAgICAgaWYgKGNudD09aW1nTnVtLTEpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpbWcuc3JjID0gZWxtLnNyYztcblxuICAgIH0pO1xuXG4gIH1cblxuICB2aWRlbyhzcmMsIGNiPSgpPT57fSkge1xuXG4gICAgdmFyIGlzTG9hZCA9IGZhbHNlO1xuICAgIHRoaXMudmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG4gICAgdmFyIHR5cGUgPSB0aGlzLnN1cHBvcnRWaWRlb0V4dCh0aGlzLnZpZGVvKTtcbiAgICBpZiAodHlwZSA9PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLCAoKT0+e1xuXG4gICAgICBpZiAoIXRoaXMuaXNMb2FkKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWRlby5sb29wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWRlby5wbGF5KCk7XG4gICAgICAgIGNiKCk7XG4gICAgICB9XG5cbiAgICB9LGZhbHNlKTtcblxuICAgIC8vIOODreODvOODiVxuICAgIHRoaXMudmlkZW8uc3JjID0gc3JjO1xuXG4gIH1cblxuICB5b3V0dWJlSWZyYW1lU2NyaXB0KGNiKSB7XG5cbiAgICAvLyBJRnJhbWUgUGxheWVyIEFQSSDjga7oqq3jgb/ovrzjgb9cbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgdGFnLm9ubG9hZCA9ICgpPT57XG5cbiAgICAgIGNiKCk7XG5cbiAgICB9O1xuXG4gICAgLy8gdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xuICAgIHRhZy5zcmMgPSBcImh0dHA6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xuICAgIHZhciBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcblxuXG4gICAgLy8gWW91VHViZeWLleeUu1xuICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVSZWFkeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgICB3aW5kb3cuY29uc29sZS5sb2coJ3lvdXR1YmVyZWFkeScpO1xuXG5cbiAgICB9XG5cbiAgfVxuXG4gIHN1cHBvcnRWaWRlb0V4dCgpIHtcblxuICAgIHZhciBleHQgPSBcIlwiO1xuICAgIGlmICh0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vd2VibVwiKSA9PSBcInByb2JhYmx5XCIgfHwgdGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL3dlYm1cIikgPT0gXCJtYXliZVwiKSB7XG4gICAgICBleHQgPSBcIndlYm1cIjtcbiAgICB9IGVsc2UgaWYodGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL21wNFwiKSA9PSBcInByb2JhYmx5XCIgfHwgdGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL21wNFwiKSA9PSBcIm1heWJlXCIpIHtcbiAgICAgIGV4dCA9IFwibXA0XCI7XG4gICAgfSBlbHNlIGlmKHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby9vZ2dcIikgPT0gXCJwcm9iYWJseVwiIHx8IHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby9vZ2dcIikgPT0gXCJtYXliZVwiKSB7XG4gICAgICBleHQgPSBcIm9nZ1wiO1xuICAgIH1cblxuICAgIHJldHVybiBleHQ7XG5cbiAgfVxuXG4gIC8vV2ViRm9udOOBruODreODvOODgOODvOeuoeeQhlxuICB3ZWJGb250KGNvbmZpZykge1xuXG4gICAgLy8gd2ViIGZvbnQgbG9hZGVy55SoanPjga5hcHBlbmRcbiAgICB2YXIgd2YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB3Zi5zcmMgPSAoJ2h0dHBzOicgPT0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPyAnaHR0cHMnIDogJ2h0dHAnKSArXG4gICAgICAnOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvd2ViZm9udC8xL3dlYmZvbnQuanMnO1xuICAgIHdmLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICB3Zi5hc3luYyA9ICd0cnVlJztcbiAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdmLCBzKTtcblxuICAgIHZhciBhZ2FpbiA9ICgpPT57XG5cbiAgICAgIC8vIHl0LnBsYXllcuOBjGxvYWTjgZXjgozjgabjgYTjgarjgYTloLTlkIjjgpLogIPmha7jgZfjgaZcbiAgICAgIGlmKCh0eXBlb2YgV2ViRm9udCAhPT0gXCJ1bmRlZmluZWRcIikgJiYgV2ViRm9udCkge1xuXG4gICAgICAgICAgV2ViRm9udC5sb2FkKGNvbmZpZyk7XG5cbiAgICAgIH1lbHNle1xuXG4gICAgICAgICAgc2V0VGltZW91dChhZ2FpbiwgMTAwKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgYWdhaW4oKTsgICAgXG5cbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuXG4gICAgJCgnaHRtbCcpLmNzcygnb3BhY2l0eScsICcxJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cyhsZW4pIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbignbG9hZGVkJywgKGV2ZW50KT0+e1xuICAgICAgXG4gICAgICBzZWxmLmNudCsrO1xuICAgICAgaWYgKHNlbGYuY250ID09IGxlbikgb25Mb2FkZWQoKTtcblxuICAgIH0pO1xuICAgICAgXG4gIH0gXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Mb2FkZXIuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNlYzAxVmlkZW9cbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgWW91dHViZUZvclNlYzAxIGZyb20gJy4vWW91dHViZUZvclNlYzAxLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjMDFWaWRlbyB7XG5cbiAgY29uc3RydWN0b3IocGFyYW0pe1xuXG4gICAgLy8gc2VjMDF2aWRlb+eUqFxuICAgIGdiLmluLnJtLnRvdGFsKys7XG4gICAgaWYgKGdiLmluLnUuaXNTUCkgZ2IuaW4ucm0uY29tcGxldGVkKys7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyBjcmVhdGVcbiAgICB0aGlzLnZpZGVvID0gbmV3IFlvdXR1YmVGb3JTZWMwMSgnc2VjMDFWaWRlbycsIGdiLmluLmNvbmYueW91dHViZUlEMDEsIG51bGwpO1xuICAgIFxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9TZWMwMVZpZGVvLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBZb3V0dWJlRm9yU2VjMDFcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBGdWxsU2l6ZSBmcm9tICcuLi8uLi9NeUxpYnMvRGlzcGxheS9MYXlvdXQvRnVsbFNpemUuanMnO1xuaW1wb3J0IFRvcFRpbWUgZnJvbSAnLi4vLi4vRGlzcGxheS9VSS9Ub3BUaW1lLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWW91dHViZUZvclNlYzAxIHtcblxuICBjb25zdHJ1Y3RvcihpZCx2aWRlb0lELHZpZGVvTGlzdCkge1xuXG4gICAgdGhpcy5wbGF5ZXIgPSBudWxsO1xuXG4gICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLmlzU2Vla0xvY2sgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2Vla0xvY2swMiA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXR1cChpZCx2aWRlb0lELHZpZGVvTGlzdCk7XG5cbiAgfVxuXG4gIHNldHVwKGlkLHZpZGVvSUQsdmlkZW9MaXN0KSB7XG5cbiAgICAvLyB5dC5wbGF5ZXLvv73vv71sb2Fk77+977+977+977+9xqTvv73vv73KpO+/ve+/ve+/ve+/vc+k8r+8kV3vv73vv73vv73vv71cbiAgICBpZigodHlwZW9mIFlUICE9PSBcInVuZGVmaW5lZFwiKSAmJiBZVCAmJiBZVC5QbGF5ZXIpe1xuXG4gICAgICAgIC8vIGNyZWF0ZVxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBZVC5QbGF5ZXIoaWQsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIC8vIO+/vdel77+9YO+/ve+/vWDvv73Ot++/vVxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsIC8vIO+/vdel77+9YO+/ve+/vWDvv73OuN+k77+9XG4gICAgICAgICAgICB2aWRlb0lkOiB2aWRlb0lELCAvLyBZb3VUdWJl77+977+9SURcbiAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAnb25SZWFkeSc6IHRoaXMub25SZWFkeS5iaW5kKHRoaXMpLCAvLyDvv73Xpe+/vWDvv73vv71g77+9zpzKguSkrO+/vcek77+977+977+977+9yKTvv73vv73LjGfvv73vv71cbiAgICAgICAgICAgICAgJ29uU3RhdGVDaGFuZ2UnOiB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICAgICAgYXV0b3BsYXk6IDEsXG4gICAgICAgICAgICAgIGNvbnRyb2xzOiAwLFxuICAgICAgICAgICAgICBzaG93aW5mbzogMCxcbiAgICAgICAgICAgICAgYXV0b2hpZGU6IDEsXG4gICAgICAgICAgICAgIHJlbDogMCxcbiAgICAgICAgICAgICAgZW5hYmxlanNhcGk6IDEsXG4gICAgICAgICAgICAgIGl2X2xvYWRfcG9saWN5OiAzLFxuICAgICAgICAgICAgICBkaXNhYmxla2I6MSxcbiAgICAgICAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDEsXG4gICAgICAgICAgICAgIHN0YXJ0OiAyLFxuICAgICAgICAgICAgICBsb29wOiAxLFxuICAgICAgICAgICAgICAvLyBwbGF5bGlzdDogdmlkZW9MaXN0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxheW91dFxuICAgICAgICB2YXIgbCA9IG5ldyBGdWxsU2l6ZSgkKCcjYmdXcmFwJyksJCgnI3NlYzAxVmlkZW8nKSwwLCdGdWxsU2l6ZVNlYzAxVmlkZW8nKTtcbiAgICAgICAgbC50YXJnZXREZWZXID0gMTkyMDtcbiAgICAgICAgbC50YXJnZXREZWZIID0gMTA4MDtcbiAgICAgICAgbC5ydW4oKTtcblxuICAgIH1lbHNle1xuXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXR1cC5iaW5kKHRoaXMsaWQsdmlkZW9JRCx2aWRlb0xpc3QpLCAxMDApO1xuXG4gICAgfVxuXG5cbiAgfVxuXG4gIG9uUmVhZHkgKGUpIHtcblxuICAgIC8vIO+/vd+977+977+977+9yKTvv71cbiAgICBlLnRhcmdldC5zZXRQbGF5YmFja1F1YWxpdHkoJ2hpZ2hyZXMnKTtcblxuICAgIC8vIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgICAvLyBwbGF5XG4gICAgZ2IuaW4udGltZSA9IG5ldyBUb3BUaW1lKCk7XG4gICAgZ2IuaW4uc2VjMDFWaWRlby52aWRlby5wbGF5QnlOWVRpbWUoKTtcblxuICB9XG5cbiAgb25QbGF5ZXJTdGF0ZUNoYW5nZSAoZSkge1xuXG4gICAgdmFyIHN0YXR1cyA9IGUuZGF0YTtcblxuICAgIC8vIO+/ve+/ve+/ve+/ve+/vUvvv73LpO+/ve+/ve+/ve+/vcik77+9IDBcbiAgICBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkge1xuICAgICBcbiAgICAgICAgLy8g77+907vvv73vv73vv73vv73vv71cbiAgICAgICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIC8vIO+/ve+/ve+/ve+/ve+/vdCkzqTIpO+/vSAxXG4gICAgaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuUExBWUlORykge1xuXG4gICAgICBpZiAodGhpcy5pc0ZpcnN0KSB7XG4gICAgICAgIHRoaXMuaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICAgIH1cblxuICAgICAgLy8gZS50YXJnZXQucGF1c2VWaWRlbygpO1xuXG4gICAgfVxuXG4gICAgLy8gLy8gzaPWue+/vdCkzqTIpO+/vSAyXG4gICAgLy8gaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCfNo9a577+977+9Jyk7XG4gICAgLy8gfVxuXG4gICAgLy8gLy8g77+90KXDpdWl77+977+977+977+977+90KTOpMik77+9IDNcbiAgICAvLyBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkcpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ++/vdClw6XVpe+/ve+/ve+/ve+/ve+/ve+/vScpO1xuICAgIC8vIH1cblxuICAgIC8vIC8vIO+/vV7vv73vv73vv73vv73vv71n77+936TOpMik77+9IDUgNe+/ve+/vda577+93qTvv73IpO+/ve+/ve+/ve+/veukq++/vemhou+/ve+/ve+/ve+/ve+/vcek77+9cGxheVxuICAgIGlmIChzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLkNVRUQpIHtcblxuICAgICAgICB0aGlzLnBsYXlCeU5ZVGltZSgpO1xuXG4gICAgfVxuXG5cbiAgICAvLyBmb3Igc2FmYXJpIO+/vdWl77+977+977+977+966W177+977+977+977+977+92KTvv73vv73vv71cbiAgICBpZiAoZ2IuaW4udS5pc1NhZmFyaSgpICYmIHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HKSB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSArIDAuMSk7XG5cbiAgfVxuXG4gIHBsYXlCeU5ZVGltZSgpIHtcblxuICAgIHZhciBoID0gZ2IuaW4udGltZS5ueUg7XG5cbiAgICBpZiAoaCA+PSA1ICYmIGggPCAxMykge1xuXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8oMCk7XG5cbiAgICB9IGVsc2UgaWYgKGggPj0gMTMgJiYgaCA8IDE4KSB7XG5cbiAgICAgIHRoaXMucGxheWVyLnNlZWtUbygzNik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8oNjYpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG5cblxuICB9XG5cbiAgb25TZWVrKCkge1xuXG4gICAgdmFyIG5vdyA9IHRoaXMucGxheWVyLmdldEN1cnJlbnRUaW1lKCk7ICAgIFxuXG4gICAgaWYgKG5vdyA8IDEuMCkge1xuICAgICAgdGhpcy5pc1NlZWtMb2NrID0gZmFsc2U7XG4gICAgICB0aGlzLmlzU2Vla0xvY2swMiA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBpZiAobm93ID4gOTAgJiYgIXRoaXMuaXNTZWVrTG9jaykge1xuICAgIHRoaXMuaXNTZWVrTG9jayA9IHRydWU7XG5cbiAgICAgIFR3ZWVuTWF4LnRvKCQoJy5iZ092ZXJsYXlJbWcnKSwgMy4wLCB7XG4gICAgICAgICAgb3BhY2l0eTogMSwgXG4gICAgICAgICAgZWFzZTpQb3dlcjMuZWFzZUluT3V0LFxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIFxuICAgIGlmIChub3cgPiAxLjAgJiYgIXRoaXMuaXNTZWVrTG9jazAyKSB7XG4gICAgdGhpcy5pc1NlZWtMb2NrMDIgPSB0cnVlO1xuXG4gICAgICBUd2Vlbk1heC50bygkKCcuYmdPdmVybGF5SW1nJyksIDMuMCwge1xuICAgICAgICAgIG9wYWNpdHk6IDAsIFxuICAgICAgICAgIGVhc2U6UG93ZXIzLmVhc2VJbk91dCxcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnVwLmFkZCgnWW91dHViZUZvclNlYzAxJyx0aGlzLm9uU2Vlay5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAucmVtb3ZlKCdZb3V0dWJlRm9yU2VjMDEnKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1lvdXR1YmVGb3JTZWMwMS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRnVsbFNpemVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxTaXplIHtcblxuICBjb25zdHJ1Y3RvcigkV3JhcCwkVGFyZ2V0LG1vZGUsIG5hbWUpIHtcblxuICAgIHRoaXMuJHdyYXAgPSAkV3JhcDtcbiAgICB0aGlzLiR0YXJnZXQgPSAkVGFyZ2V0O1xuXG4gICAgdGhpcy5XID0gdGhpcy4kd3JhcC53aWR0aCgpO1xuICAgIHRoaXMuSCA9IHRoaXMuJHdyYXAuaGVpZ2h0KCk7XG4gICAgdGhpcy50YXJnZXRXO1xuICAgIHRoaXMudGFyZ2V0SDtcbiAgICB0aGlzLnRhcmdldERlZlc7XG4gICAgdGhpcy50YXJnZXREZWZIO1xuICAgIHRoaXMucmF0aW9XO1xuICAgIHRoaXMucmF0aW87XG4gICAgdGhpcy5tbDtcbiAgICB0aGlzLm10O1xuXG4gICAgdGhpcy5tb2RlID0gbW9kZSB8fCAwO1xuICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgJ2Z1bGxzaXplJztcblxuICAgIC8vIHRoaXMuaW5pdCgpO1xuICAgIC8vIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0U3R5bGUoKSB7XG5cbiAgICB0aGlzLiR3cmFwLmNzcyh7XG4gICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAgICB9KTtcbiAgICB0aGlzLiR0YXJnZXQuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuXG4gIH1cblxuICBnZXREZWYoKSB7XG5cbiAgICB0aGlzLnRhcmdldERlZlcgPSB0aGlzLiR0YXJnZXQuZ2V0KDApLmNsaWVudFdpZHRoIHx8IHRoaXMuJHRhcmdldC5nZXQoMCkud2lkdGggfHwgdGhpcy4kdGFyZ2V0LndpZHRoKCksXG4gICAgdGhpcy50YXJnZXREZWZIID0gdGhpcy4kdGFyZ2V0LmdldCgwKS5jbGllbnRIZWlnaHQgfHwgdGhpcy4kdGFyZ2V0LmdldCgwKS5oZWlnaHQgIHx8IHRoaXMuJHRhcmdldC5oZWlnaHQoKTtcblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcblxuICAgIHRoaXMuVyA9IHRoaXMuJHdyYXAud2lkdGgoKTtcbiAgICB0aGlzLkggPSB0aGlzLiR3cmFwLmhlaWdodCgpOyBcblxuICAgIHRoaXMucmF0aW9XID0gdGhpcy5IIC8gdGhpcy5XO1xuICAgIHRoaXMucmF0aW8gPSB0aGlzLnRhcmdldERlZkggLyB0aGlzLnRhcmdldERlZlcsXG5cbiAgICB0aGlzLm1sID0gLSAodGhpcy50YXJnZXREZWZXICogKHRoaXMuSCAvIHRoaXMudGFyZ2V0RGVmSCkpIC8gMjtcbiAgICB0aGlzLm10ID0gLSAodGhpcy50YXJnZXREZWZIICogKHRoaXMuVyAvIHRoaXMudGFyZ2V0RGVmVykpIC8gMjtcblxuICB9XG5cbiAgc2V0UG9zKCl7XG5cbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2NvdmVyJyB8fCB0aGlzLm1vZGUgPT0gMCkge1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gIOaeoOOBq+ODlOODg+OCv+ODquOBq+OBquOCi+OCiOOBhuOBqyBiYWNrZ3JvdW5kLXNpemUgY292ZXJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGlmICh0aGlzLnJhdGlvVyA+IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgIHZhciB3ID0gKHRoaXMuSCAvIHRoaXMudGFyZ2V0RGVmSCkgKiB0aGlzLnRhcmdldERlZlc7XG5cbiAgICAgICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgICAuY3NzKHsnaGVpZ2h0JzogdGhpcy5IfSlcbiAgICAgICAgICAgICAgLmNzcyh7J21hcmdpbi10b3AnOiAwLCdtYXJnaW4tbGVmdCc6IHRoaXMubWwsJ3RvcCc6MCwnbGVmdCc6JzUwJScsJ3dpZHRoJzp3fSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5yYXRpb1cgPD0gdGhpcy5yYXRpbykge1xuXG4gICAgICAgICAgICB2YXIgaCA9ICh0aGlzLlcgLyB0aGlzLnRhcmdldERlZlcpICogdGhpcy50YXJnZXREZWZIO1xuXG4gICAgICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgICAgLmNzcyh7J3dpZHRoJzogdGhpcy5XfSlcbiAgICAgICAgICAgICAgLmNzcyh7J21hcmdpbi10b3AnOiB0aGlzLm10LCdtYXJnaW4tbGVmdCc6IDAsJ3RvcCc6JzUwJScsJ2xlZnQnOjAsJ2hlaWdodCc6aH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ2NvbnRhaW4nIHx8IHRoaXMubW9kZSA9PSAxKXtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vICDmnqDlhoXjgavjg5Tjg4Pjgr/jg6rlj47jgb7jgovjgojjgYbjgasgYmFja2dyb3VuZC1zaXplIGNvbnRhaW5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGlmICh0aGlzLnJhdGlvVyA8IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAgIC5jc3MoeydoZWlnaHQnOiB0aGlzLkh9KVxuICAgICAgICAgICAgICAuY3NzKHsnbWFyZ2luLXRvcCc6IDAsJ21hcmdpbi1sZWZ0JzogdGhpcy5tbCwndG9wJzowLCdsZWZ0JzonNTAlJywnd2lkdGgnOidhdXRvJ30pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMucmF0aW9XID49IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAgIC5jc3Moeyd3aWR0aCc6IHRoaXMuV30pXG4gICAgICAgICAgICAgIC5jc3MoeydtYXJnaW4tdG9wJzogdGhpcy5tdCwnbWFyZ2luLWxlZnQnOiAwLCd0b3AnOic1MCUnLCdsZWZ0JzowLCdoZWlnaHQnOidhdXRvJ30pO1xuXG4gICAgICAgIH1cblxuICAgICAgfSBcblxuICB9XG5cbiAgaW5pdCgpIHtcblxuICAgIHRoaXMuZ2V0RGVmKCk7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgICB0aGlzLmdldFNpemUoKTtcbiAgICB0aGlzLnNldFBvcygpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCh0aGlzLm5hbWUsIHRoaXMucnVuLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9EaXNwbGF5L0xheW91dC9GdWxsU2l6ZS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgVG9wVGltZVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gNTAwcHjku6XkuIvjgavjgarjgaPjgZ/jgonooajnpLpcbi8vICAg5pmC6KiIY291bnRcbi8vICAgY2FudmFz6KGo56S6XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFRpbWUge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkKCcudGltZVdyYXAnKTtcbiAgICB0aGlzLiRoMDEgPSB0aGlzLiR0YXJnZXQuZmluZCgnLmgwMScpO1xuICAgIHRoaXMuJGgwMiA9IHRoaXMuJHRhcmdldC5maW5kKCcuaDAyJyk7XG4gICAgdGhpcy4kbTAxID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5tMDEnKTtcbiAgICB0aGlzLiRtMDIgPSB0aGlzLiR0YXJnZXQuZmluZCgnLm0wMicpO1xuXG4gICAgdGhpcy5ueUggPSAwO1xuXG4gICAgdGhpcy5pc0FsZXJ0ID0gKGdiLmluLnIud3MuaCA8IDUwMCk/IHRydWU6IGZhbHNlO1xuXG4gICAgdGhpcy5kaXMgPSAxNDsgLy/mmYLlt65cblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgZ2IuaW4udS50aW1lKCk7XG4gICAgdmFyIGggPSBnYi5pbi51LmhvdXIgLSB0aGlzLmRpcztcbiAgICBpZiAoaDwwKSBoID0gMjQgKyBoO1xuICAgIHRoaXMubnlIID0gaDtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgLy8g6ZaT5byV44GNXG4gICAgaWYgKGdiLmluLnVwLmNudCU2MCE9PTApIHJldHVybjtcblxuXG4gICAgZ2IuaW4udS50aW1lKCk7XG5cbiAgICB2YXIgaCA9IGdiLmluLnUuaG91ciAtIHRoaXMuZGlzO1xuICAgIGlmIChoPDApIGggPSAyNCArIGg7XG5cbiAgICB0aGlzLm55SCA9IGg7XG5cbiAgICBoID0gZ2IuaW4udS5hZGQwKGgpLnNwbGl0KCcnKTtcbiAgICB2YXIgbSA9IGdiLmluLnUuYWRkMChnYi5pbi51Lm1pbnV0ZSkuc3BsaXQoJycpO1xuICAgIHZhciBzID0gZ2IuaW4udS5hZGQwKGdiLmluLnUuc2Vjb25kKS5zcGxpdCgnJyk7XG5cbiAgICB0aGlzLiRoMDEudGV4dChoWzBdKVxuICAgIHRoaXMuJGgwMi50ZXh0KGhbMV0pXG4gICAgdGhpcy4kbTAxLnRleHQobVswXSlcbiAgICB0aGlzLiRtMDIudGV4dChtWzFdKVxuXG4gICAgLy8gdGhpcy4kaDAxLnRleHQoc1swXSlcbiAgICAvLyB0aGlzLiRoMDIudGV4dChzWzFdKVxuICAgIC8vIHRoaXMuJG0wMS50ZXh0KHNbMF0pO1xuICAgIC8vIHRoaXMuJG0wMi50ZXh0KHNbMV0pO1xuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgICBnYi5pbi51cC5hZGQoJ1RvcFRpbWUnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIOOCs+ODs+ODnuOBruihqOekuumdnuihqOekulxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OiAtMX0pO1xuXG4gICAgdGxcbiAgICAgIC5zZXQodGhpcy4kdGFyZ2V0LmZpbmQoJy5jb2xvbicpLCB7b3BhY2l0eTogMH0pXG4gICAgICAudG8odGhpcy4kdGFyZ2V0LmZpbmQoJy5jb2xvbicpLCAwLjUsIHtvcGFjaXR5OiAxLGVhc2U6IFBvd2VyMi5lYXNlSW5PdXR9KVxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSwgMC41LCB7b3BhY2l0eTogMCxlYXNlOiBQb3dlcjIuZWFzZUluT3V0fSlcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAucmVtb3ZlKCdUb3BUaW1lJyk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9VSS9Ub3BUaW1lLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOeSsOWig+WIpOWumuOCr+ODqeOCuSjjg4fjg5DjgqTjgrnjgIHjg5bjg6njgqbjgrYp44CB5ZCE5Yik5a6a44Oh44K944OD44OJ6Kmz57Sw44GvRGV2aWNlLmpz44KS5Y+C54WnXG4gKiBQcm9qZWN0OlxuICogRmlsZTogSnVkZ2VFbnZpcm9ubWVudFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1ZGdlRW52aXJvbm1lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiBcbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44OH44OQ44Kk44K55Yik5a6aXG4gICAgZ2IuaW4udS5pc0RldmljZVNQKCk7XG4gICAgZ2IuaW4udS5pc0RldmljZVRBQigpO1xuICAgIGdiLmluLnUuaXNEZXZpY2VNQigpO1xuICAgIGdiLmluLnUuaXNEZXZpY2VQQygpO1xuXG4gICAgLy8g44OW44Op44Km44K244OQ44O844K444On44Oz5Yik5a6aXG4gICAgZ2IuaW4udS5pc0lFVmVyc2lvbigpO1xuXG4gICAgLy8gcmVzcG9uc2l2ZSAvIHBvcnRyYWl0IC8gbGFuZHNjYXBlXG4gICAgZ2IuaW4udS5pc0RpcmVjdGlvbigpO1xuICAgIGdiLmluLnUuaXNSZXNwb25zaXZlKGdiLmluLmNvbmYuYnApO1xuICAgIGdiLmluLnIuYWRkKCdpc0RpcmVjdGlvbicsIGdiLmluLnUuaXNEaXJlY3Rpb24uYmluZChnYi5pbi51KSk7XG4gICAgZ2IuaW4uci5hZGQoJ2lzUmVzcG9uc2l2ZScsIGdiLmluLnUuaXNSZXNwb25zaXZlLmJpbmQoZ2IuaW4udSwgZ2IuaW4uY29uZi5icCkpO1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0p1ZGdlRW52aXJvbm1lbnQuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFJlc3BvbnNpdmVTd2l0Y2hJbWdcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmVTd2l0Y2hJbWcge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICB0aGlzLmlzUENMb2NrID0gKGdiLmluLnUuaXNSZXNQQyk/IGZhbHNlOiB0cnVlO1xuICAgIHRoaXMuaXNTUExvY2sgPSAoZ2IuaW4udS5pc1Jlc1NQKT8gZmFsc2U6IHRydWU7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkKCcucmVzcG9uc2l2ZUltZycpO1xuXG4gIH1cblxuICBydW4gKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODluODrOOCpOOCr+ODneOCpOODs+ODiOOCiOOCiuOCgnNw5YG0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKGdiLmluLnUuaXNSZXNTUCAmJiAhdGhpcy5pc1NQTG9jaykge1xuICAgICAgdGhpcy5pc1BDTG9jayA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1NQTG9jayA9IHRydWU7XG5cbiAgICAgIGxvZygxMSk7XG5cbiAgICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XG4gICAgICAgIHNyYyA9IGdiLmluLnUuc3RyUmVwbGFjZShzcmMsICdfcGMnLCAnX3NwJyk7XG4gICAgICAgICQodGhpcykub2ZmKCdsb2FkJyk7XG4gICAgICAgICQodGhpcykub24oJ2xvYWQnLCAoZXZlbnQpPT57XG5cbiAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc3BTaXplJykpIGdiLmluLnUuc2V0SW1nU1BTaXplKCQodGhpcykpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsc3JjKTtcblxuICAgICAgICAvLyAkKHRoaXMpLmF0dHIoJ3NyYycsc3JjKTtcbiAgICAgICAgLy8gaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NwU2l6ZScpKSBnYi5pbi51LnNldEltZ1NQU2l6ZSgkKHRoaXMpKTtcblxuICAgICAgfSk7XG5cbiAgICAgIC8vIHJlc3BvbnNpdmVpbWfjgYzjgaTjgYTjgabjgarjgYTjgoLjga7jgafjgIFzcFNpemXjgYzjgaTjgYTjgabjgovjgoLjga7jga8xLzJcbiAgICAgIGdiLmluLnUuc2V0SW1nU1BTaXplKCQoJy5zcFNpemUnKS5ub3QoJy5yZXNwb25zaXZlSW1nJykpO1xuXG4gICAgfSBcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4jjgojjgorjgoJwY+WBtFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChnYi5pbi51LmlzUmVzUEMgJiYgIXRoaXMuaXNQQ0xvY2spIHtcbiAgICAgIHRoaXMuaXNQQ0xvY2sgPSB0cnVlO1xuICAgICAgdGhpcy5pc1NQTG9jayA9IGZhbHNlO1xuXG4gICAgICBsb2coMjIpO1xuXG4gICAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuICAgICAgICBzcmMgPSBnYi5pbi51LnN0clJlcGxhY2Uoc3JjLCAnX3NwJywgJ19wYycpO1xuXG4gICAgICAgICQodGhpcykuYXR0cih7d2lkdGg6ICdhdXRvJyxoZWlnaHQ6ICdhdXRvJ30pO1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsc3JjKTtcblxuICAgICAgfSk7XG5cbiAgICAgIC8vIHJlc3BvbnNpdmVpbWfjgYzjgaTjgYTjgabjgarjgYTjgoLjga7jgafjgIFzcFNpemXjgYzjgaTjgYTjgabjgovjgoLjga7jga9hdXRv44GrXG4gICAgICAkKCcuc3BTaXplJykubm90KCcucmVzcG9uc2l2ZUltZycpLmF0dHIoe3dpZHRoOiAnYXV0bycsaGVpZ2h0OiAnYXV0byd9KTtcblxuICAgICAgLy8gc3Djga/jgarjgZzjgYtsb2Fk44Kk44OZ44Oz44OI44GM5ZG844Gw44KM44Gq44GE44Gu44Gn44CB44GT44Gj44Gh44Gn5Yem55CGXG4gICAgICAvLyBpZiAoZ2IuaW4udS5pc1NQKSAkKCcucmVzcG9uc2l2ZUltZycpLmF0dHIoe3dpZHRoOiAnYXV0bycsaGVpZ2h0OiAnYXV0byd9KTtcblxuICAgIH1cblxuICB9XG4gICAgICAgXG4gIHJlc3VtZSgpIHtcblxuICAgIC8vIGxvZygncmVzdW1lJyk7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5ydW4oKTtcblxuICAgIGdiLmluLnIucmVtb3ZlKCdyZXNwb25zaXZlU3dpdGNoSW1nJyk7XG4gICAgZ2IuaW4uci5hZGQoJ3Jlc3BvbnNpdmVTd2l0Y2hJbWcnLCB0aGlzLnJ1bi5iaW5kKHRoaXMpKTtcblxuICB9XG4gICAgICAgXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdyZXNwb25zaXZlU3dpdGNoSW1nJywgdGhpcy5ydW4uYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9fZXZlbnRzL1Jlc3BvbnNpdmVTd2l0Y2hJbWcuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU3dpcGVUcmFuc2l0aW9uIHNzc1xuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2lwZVRyYW5zaXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIGRvbVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoaXMuJHN0YXJ0V3JhcCA9ICQoJy5zZWN0aW9uMDEsIC5zZWN0aW9uMDIgLm5leHQsIC5zZWN0aW9uMDMgLmJveDA1Jyk7XG4gICAgLy8gdGhpcy4kc3RhcnRXcmFwID0gJCgnLnNlY3Rpb24wMicpO1xuICAgIHRoaXMuJHN0YXJ0V3JhcCA9ICQod2luZG93KTtcbiAgICB0aGlzLiRlbmRXcmFwID0gJCh3aW5kb3cpO1xuXG4gICAgdGhpcy5wYWdlTGlzdCA9IHtcbiAgICAgICd0b3AnOiAwLFxuICAgICAgJ21vdmllJzogMSxcbiAgICAgICdpbnRlcnZpZXcnOiAyLFxuICAgICAgJ2hpc3RvcnknOiAzLFxuICAgIH1cblxuICAgIC8vIHZhcmlhYmxlXG4gICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICB0aGlzLm9sZCA9IG51bGw7XG4gICAgdGhpcy5uZXh0ID0gMTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGVuID0gNDtcblxuICAgIHRoaXMuaXNMb2NrID0gZmFsc2U7XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB2YXJpYWJsZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gcG9zaXRpb25cbiAgICB0aGlzLnNYID0gMDt0aGlzLm1YID0gMDt0aGlzLmVYID0gMDsgLy9zdGFydFgsbW92ZVgsZW5kWFxuICAgIHRoaXMuZGlzID0gMDt0aGlzLm1pbkRpcyA9IDE1O1xuXG4gICAgLy8gdGltZVxuICAgIHRoaXMuc1Q9MDt0aGlzLmVUPTA7dGhpcy5taW5UID0gMzAwOyAvL3N0YXJ0VGltZSxlbGxhcHNlZFRpbWUsXG5cbiAgICB0aGlzLlcgPSBnYi5pbi5yLlcoKTtcblxuICAgIHRoaXMub25Ub3VjaExvbmcgPSAoKT0+e307XG4gICAgdGhpcy5vblRvdWNoU3RhcnRDQiA9ICgpPT57fTtcbiAgICB0aGlzLm9uVG91Y2hFbmRDQiA9ICgpPT57fTtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgb25Ub3VjaFN0YXJ0IChlKSB7XG5cbiAgICAvLyB0YXJnZXRYXG4gICAgdmFyIHkgPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgdGhpcy5zWSA9IHk7XG5cbiAgICB0aGlzLnN0ID0gZ2IuaW4ucy5zdDtcbiAgICB0aGlzLnNiID0gZ2IuaW4ucy5zYjtcbiAgICBsb2coJ3N5Jyx5KVxuXG4gIH1cblxuICBvblRvdWNoTW92ZSAoZSkge1xuXG4gICAgLy8gdGFyZ2V0WFxuICAgIHZhciB5ID0gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgIHRoaXMubVkgPSB5O1xuXG4gIH1cblxuICBvblRvdWNoRW5kIChlKSB7XG5cbiAgICBpZiAodGhpcy5pc0xvY2spIHJldHVybjsgICAgXG5cbiAgICB2YXIgeSA9IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICB0aGlzLmVZID0geTtcblxuICAgIHZhciBkaXMgPSB0aGlzLnNZIC0gdGhpcy5lWTtcbiAgICB2YXIgYWJzRGlzID0gTWF0aC5hYnMoZGlzKTtcblxuICAgIC8vIOacgOWwj+i3nembouOCiOOCiumVt+OBi+OBo+OBn+OCieOAgeWHpueQhlxuICAgIGlmKCB0aGlzLm1pbkRpcyA8IGFic0Rpcykge1xuXG4gICAgICAvLyDjg5rjg7zjgrjnlarlj7fjgpLlj5blvpdcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucGFnZUxpc3RbZ2IuaW4ucGpheC5pZF07XG5cbiAgICAgIGlmIChkaXMgPiAwKSB7XG5cbiAgICAgICAgdmFyIGggPSAkKCcuc2VjdGlvbicpLmhlaWdodCgpKmdiLmluLkxheW91dC5zaXplLnNjYWxlLnJhdGU7XG4gICAgICAgIGxvZyh0aGlzLnNiLGgtMTAsdGhpcy5zYiA8IGgtMTApO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQhPT0wICYmIHRoaXMuc2IgPCBoLTEwKSByZXR1cm47XG4gICAgICAgIC8vIGhpc3Rvcnnjg5rjg7zjgrjjga7loLTlkIjjga/lh6bnkIbjgZfjgarjgYRcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudD09MykgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ25leHQnKTtcblxuICAgICAgICAvLyDjgZfjgZ/jgbhcbiAgICAgICAgdmFyIHBhZ2VOYW1lID0gT2JqZWN0LmtleXModGhpcy5wYWdlTGlzdCkuZmlsdGVyKCAoa2V5KSA9PiB7IHJldHVybiB0aGlzLnBhZ2VMaXN0W2tleV0gPT09IHRoaXMuY3VycmVudCB9KVswXTtcbiAgICAgICAgJCgnLnBqYXhUb18nK3BhZ2VOYW1lKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGxvZyh0aGlzLnN0LHRoaXMuc3QgIT09IDApO1xuXG4gICAgICAgIGlmICh0aGlzLnN0ICE9PSAwKSByZXR1cm47XG5cbiAgICAgICAgLy8g5LiK44G4XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ3ByZXYnKTtcblxuICAgICAgICB2YXIgcGFnZU5hbWUgPSBPYmplY3Qua2V5cyh0aGlzLnBhZ2VMaXN0KS5maWx0ZXIoIChrZXkpID0+IHsgcmV0dXJuIHRoaXMucGFnZUxpc3Rba2V5XSA9PT0gdGhpcy5jdXJyZW50IH0pWzBdO1xuICAgICAgICAkKCcucGpheFRvXycrcGFnZU5hbWUpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cbiAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBibHVy6Kej6ZmkXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaXNOb3RUb3VjaCA9IHRydWU7XG5cbiAgICAvLyDjgrPjg7zjg6vjg5Djg4Pjgq9cbiAgICB0aGlzLm9uVG91Y2hFbmRDQigpO1xuXG4gIH1cblxuICBjYWxjdWxhdGVPcmRlcihkaXIpIHtcblxuICAgIHRoaXMub2xkID0gdGhpcy5jdXJyZW50O1xuXG4gICAgaWYgKGRpcj09J25leHQnKSB7XG5cbiAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgaWYgKHRoaXMuY3VycmVudD50aGlzLmxlbi0xKSB0aGlzLmN1cnJlbnQ9dGhpcy5sZW4tMTtcbiAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLmN1cnJlbnQtLTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQ8MCkgdGhpcy5jdXJyZW50PTA7ICBcbiAgICAgIHRoaXMubmV4dCA9IHRoaXMuY3VycmVudCsxO1xuICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50LTE7XG5cbiAgICB9ICAgICBcblxuICB9XG5cbiAgc2V0RXZlbnRzKCl7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiRzdGFydFdyYXAub24oJ3RvdWNoc3RhcnQuU3dpcGVUcmFuc2l0aW9uJywgKGUpPT57dGhpcy5vblRvdWNoU3RhcnQoZSk7fSk7XG4gICAgLy8gdGhpcy4kd3JhcC5vbigndG91Y2htb3ZlLlN3aXBlVHJhbnNpdGlvbicsIChlKT0+e3RoaXMub25Ub3VjaE1vdmUoZSk7fSk7XG4gICAgdGhpcy4kZW5kV3JhcC5vbigndG91Y2hlbmQuU3dpcGVUcmFuc2l0aW9uJywgKGUpPT57dGhpcy5vblRvdWNoRW5kKGUpO30pO1xuXG4gIH1cblxuICAgcmVtb3ZlRXZlbnRzKCl7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiRzdGFydFdyYXAub2ZmKCd0b3VjaHN0YXJ0LlN3aXBlVHJhbnNpdGlvbicpO1xuICAgIC8vIHRoaXMuJHdyYXAub2ZmKCd0b3VjaG1vdmUuU3dpcGVUcmFuc2l0aW9uJyk7XG4gICAgdGhpcy4kZW5kV3JhcC5vZmYoJ3RvdWNoZW5kLlN3aXBlVHJhbnNpdGlvbicpO1xuXG4gIH1cblxuXG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Td2lwZVRyYW5zaXRpb24uanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNjcm9sbFRyYW5zaXRpb25cbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRyYW5zaXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCR0YXJnZXQpIHtcblxuICAgIHRoaXMucGFnZUxpc3QgPSB7XG4gICAgICAndG9wJzogMCxcbiAgICAgICdtb3ZpZSc6IDEsXG4gICAgICAnaW50ZXJ2aWV3JzogMixcbiAgICAgICdoaXN0b3J5JzogMyxcbiAgICB9XG5cbiAgICAvLyB2YXJpYWJsZVxuICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgdGhpcy5vbGQgPSBudWxsO1xuICAgIHRoaXMubmV4dCA9IDE7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmxlbiA9IDQ7XG5cbiAgICB0aGlzLmlzU3dpdGNoID0gdHJ1ZTtcblxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIHN3aXRjaCgpIHtcblxuICAgIGlmICghZ2IuaW4udS5pc0lFKSB2YXIgdmFsID0gMzA7XG4gICAgZWxzZSB2YXIgdmFsID0gMDtcblxuICAgIC8vIGxvZyhnYi5pbi5wamF4LmlzUGpheExvY2ssdGhpcy5TVEFtb3VudCx0aGlzLmN1cnJlbnQsdGhpcy5pc1N3aXRjaCk7XG5cbiAgICAvLyBwamF4bG9ja+aZguOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChnYi5pbi5wamF4LmlzUGpheExvY2spIHJldHVybjtcblxuICAgIC8vIOODmuODvOOCuOeVquWPt+OCkuWPluW+l1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMucGFnZUxpc3RbZ2IuaW4ucGpheC5pZF07XG5cbiAgICAvL+ODm+OCpOODvOODq+OBjDDku6XkuIog44GL44GkIGN1cnJlbnTjgYzkuIDnlarmnIDliJ3jgafjgarjgYQg44GL44GkIHN3aXRjaOWPr+iDveeKtuaFi+OBp+OBguOCjOOBsFxuICAgIGlmICh0aGlzLlNUQW1vdW50ID4gdmFsICYmIHRoaXMuY3VycmVudCA+IDAgJiYgdGhpcy5pc1N3aXRjaCkge1xuXG4gICAgICAvLyBoaXN0b3J544Oa44O844K444Gu44Go44GN44Gv5LiK44K544Kv44Ot44O844Or44GX44Gm44KCaW50ZXJ2aWV3IGluZGV444Gr6aOb44Gw44GV44Gq44GEXG4gICAgICBpZiAoZ2IuaW4ucGpheC5pZD09J2hpc3RvcnknKSByZXR1cm47XG5cbiAgICAgIHRoaXMuaXNTd2l0Y2ggPSBmYWxzZTtcbiAgXG4gICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCdwcmV2Jyk7XG5cbiAgICAgIHZhciBwYWdlTmFtZSA9IE9iamVjdC5rZXlzKHRoaXMucGFnZUxpc3QpLmZpbHRlciggKGtleSkgPT4geyByZXR1cm4gdGhpcy5wYWdlTGlzdFtrZXldID09PSB0aGlzLmN1cnJlbnQgfSlbMF07XG5cbiAgICAgICQoJy5wamF4VG9fJytwYWdlTmFtZSkudHJpZ2dlcignY2xpY2snKTtcblxuXG4gICAgLy/jg5vjgqTjg7zjg6vjgYww5Lul5LiLIOOBi+OBpCBjdXJyZW5044GM5LiA55Wq5pyA5b6M44Gn44Gq44GEIOOBi+OBpCBzd2l0Y2jlj6/og73nirbmhYvjgafjgYLjgozjgbBcbiAgICB9IGVsc2UgaWYodGhpcy5TVEFtb3VudCA8IC12YWwgJiYgdGhpcy5jdXJyZW50IDwgdGhpcy5sZW4tMSAmJiB0aGlzLmlzU3dpdGNoKSB7XG5cbiAgICAgIHRoaXMuaXNTd2l0Y2ggPSBmYWxzZTtcbiAgICAgIFxuICAgICAgdGhpcy5jYWxjdWxhdGVPcmRlcignbmV4dCcpO1xuXG4gICAgICB2YXIgcGFnZU5hbWUgPSBPYmplY3Qua2V5cyh0aGlzLnBhZ2VMaXN0KS5maWx0ZXIoIChrZXkpID0+IHsgcmV0dXJuIHRoaXMucGFnZUxpc3Rba2V5XSA9PT0gdGhpcy5jdXJyZW50IH0pWzBdO1xuXG4gICAgICAkKCcucGpheFRvXycrcGFnZU5hbWUpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cbiAgICB9O1xuXG5cbiAgfVxuXG4gIGNhbGN1bGF0ZU9yZGVyKGRpcikge1xuXG4gICAgdGhpcy5vbGQgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICBpZiAoZGlyPT0nbmV4dCcpIHtcblxuICAgICAgdGhpcy5jdXJyZW50Kys7XG4gICAgICBpZiAodGhpcy5jdXJyZW50PnRoaXMubGVuLTEpIHRoaXMuY3VycmVudD10aGlzLmxlbi0xO1xuICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jdXJyZW50KzE7XG4gICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQtMTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuY3VycmVudC0tO1xuICAgICAgaWYgKHRoaXMuY3VycmVudDwwKSB0aGlzLmN1cnJlbnQ9MDsgIFxuICAgICAgdGhpcy5uZXh0ID0gdGhpcy5jdXJyZW50KzE7XG4gICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQtMTtcblxuICAgIH0gICAgIFxuXG4gIH1cblxuICBvbk1vdXNlV2hlZWwoZSwgZGVsdGEsIGRlbHRhWCwgZGVsdGFZKSB7XG5cbiAgICAvLyBtZW5144GM6ZaL44GE44Gm44GE44KL44Go44GN44Gv44K544Kv44Ot44O844Or6YG356e744GV44Gb44Gq44GEXG4gICAgaWYgKGdiLmluLm1lbnUuaXNPcGVuKSByZXR1cm47XG4gICAgLy8gcmVzIHNw44Gu44Go44GN44Gv5Yem55CG44GX44Gq44GEXG4gICAgaWYgKGdiLmluLnUuaXNSZXNTUCkgcmV0dXJuXG5cbiAgICB0aGlzLlNUQW1vdW50ID0gZ2IuaW4ucy5TVEFtb3VudDtcbiAgICBcbiAgICB0aGlzLnN3aXRjaCgpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cblxuICAgIGdiLmluLnMuYWRkKCdTY3JvbGxUcmFuc2l0aW9uJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKSk7XG5cblxuICB9XG4gIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU2Nyb2xsVHJhbnNpdGlvbi5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTbnNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IG1ldGFEYXRhIGZyb20gXCJqc29uLWxvYWRlciEuLi8uLi8uLi8uLi9lanMvaW5jL21ldGFEYXRhLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25zIHtcblxuICBjb25zdHJ1Y3RvcigkZmIsJHR3LCRsaW5lLCRtYWlsKXtcblxuICAgIHRoaXMuJGZiID0gJGZiO1xuICAgIHRoaXMuJHR3ID0gJHR3O1xuICAgIHRoaXMuJGxpbmUgPSAkbGluZTtcbiAgICB0aGlzLiRtYWlsID0gJG1haWw7XG5cbiAgICB0aGlzLmZiID0ge1xuICAgICAgJHRhcmdldDogJGZiLFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICB9XG5cbiAgICB0aGlzLnR3ID0ge1xuICAgICAgJHRhcmdldDogJHR3LFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICAgIGhhc2g6ICdoYXNoJyxcbiAgICB9XG5cbiAgICB0aGlzLmxpbmUgPSB7XG4gICAgICAkdGFyZ2V0OiAkbGluZSxcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc3dpdGNoTWV0YSgpIHtcblxuICAgIHZhciBwID0gZ2IuaW4ucGpheC5pZDtcbiAgICBpZiAocCA9PSAnaW50ZXJ2aWV3X2RldGFpbCcpIHtcblxuICAgICAgbG9nKCQoJy5zZWN0aW9uJykuaGFzQ2xhc3MoJ3NlY3Rpb24wM19kZXRhaWwwMScpKTtcbiAgICAgIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDEnKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMSc7XG4gICAgICBlbHNlIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDInKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMic7XG4gICAgICBlbHNlIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDMnKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMyc7XG4gIFxuICAgIH1cblxuICAgIC8vIHZhciBkID0gZ2IuaW4uY29uZi5tZXRhW3BdO1xuICAgIHZhciBkID0gbWV0YURhdGFbcF07XG5cbiAgICAkKCd0aXRsZScpLnRleHQoKTtcbiAgICAkKCcubWV0YURlcycpLmF0dHIoeydjb250ZW50JzogZC5kZXNjcmlwdGlvbn0pO1xuICAgICQoJy5tZXRhS2V5JykuYXR0cih7J2NvbnRlbnQnOiBkLmtleXdvcmR9KTtcblxuICAgICQoJy5mYlRpdCcpLmF0dHIoeydjb250ZW50JzogZC5mYi50aXR9KTtcbiAgICAkKCcuZmJEZXMnKS5hdHRyKHsnY29udGVudCc6IGQuZmIuZGVzfSk7XG4gICAgJCgnLmZiSW1nJykuYXR0cih7J2NvbnRlbnQnOiBkLmZiLmltZ30pO1xuICAgICQoJy5mYlVybCcpLmF0dHIoeydjb250ZW50JzogZC5mYi51cmx9KTtcblxuICAgICQoJy50d1RpdCcpLmF0dHIoeydjb250ZW50JzogZC50dy50aXR9KTtcbiAgICAkKCcudHdEZXMnKS5hdHRyKHsnY29udGVudCc6IGQudHcuZGVzfSk7XG4gICAgJCgnLnR3SW1nJykuYXR0cih7J2NvbnRlbnQnOiBkLnR3LmltZ30pO1xuICAgICQoJy50d1VybCcpLmF0dHIoeydjb250ZW50JzogZC50dy51cmx9KTtcblxuXG4gIH1cblxuICBzZXR0aW5nKCkge1xuXG4gICAgdGhpcy5mYiA9IHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuJGZiLFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICB9XG5cbiAgICB0aGlzLnR3ID0ge1xuICAgICAgJHRhcmdldDogdGhpcy4kdHcsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgaGFzaDogJ2hhc2gnLFxuICAgIH1cblxuICAgIHRoaXMubGluZSA9IHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuJGxpbmUsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgIH1cblxuICB9XG5cbiAgc2V0T2dJbWcoKSB7XG5cbiAgICAvLyAkKCcub2dJbWdfZmInKS5hdHRyKCdjb250ZW50JywgdGhpcy5mYi5pbWcpO1xuICAgIC8vICQoJy5vZ0ltZ190dycpLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnR3LmltZyk7XG5cbiAgfVxuXG4gIGp1bXBGQihlKSB7XG5cbiAgICAgIHRoaXMub3BlbldpbmRvdygnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JyArIHRoaXMuZmIudXJsKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuXG4gIGp1bXBUVyhlKSB7XG5cbiAgICB0aGlzLm9wZW5XaW5kb3coJ2h0dHA6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPScgKyB0aGlzLnR3LnVybCArICcmdGV4dD0nICsgdGhpcy50dy5kZXMpO1xuICAgIC8vIHRoaXMub3BlbldpbmRvdygnaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9JyArIHRoaXMudHcudXJsICsgJyZ0ZXh0PScgKyB0aGlzLnR3LnRleHQgKyAnJmhhc2h0YWdzPScgKyB0aGlzLnR3Lmhhc2gpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICBqdW1wTElORSgpIHtcblxuICAgICAgdGhpcy5vcGVuV2luZG93KCdodHRwOi8vbGluZS5tZS9SL21zZy90ZXh0Lz8nICsgdGhpcy5saW5lLnRpdCArICclMEEnICsgdGhpcy5saW5lLnVybCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU2VuZE1haWwoKSB7XG5cbiAgICB2YXIgYWRkcmVzcyA9ICcnO1xuICAgIHZhciBzdWIgPSAnJztcbiAgICB2YXIgYm9keSA9IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSsnXFxuJytsb2NhdGlvbi5ocmVmKTtcblxuICAgIGxvY2F0aW9uLmhyZWYgPSAnbWFpbHRvOicgKyBhZGRyZXNzICsgJz9zdWJqZWN0PScgKyBzdWIgKyAnJmJvZHk9JyArIGJvZHk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIG9wZW5XaW5kb3codXJsLCB3LCBoKSB7XG5cbiAgICAgIGlmKHcgPT09IHVuZGVmaW5lZCkgdyA9IDYwMDtcbiAgICAgIGlmKGggPT09IHVuZGVmaW5lZCkgaCA9IDYwMDtcblxuICAgICAgdmFyIGwgPSBOdW1iZXIoKHdpbmRvdy5zY3JlZW4ud2lkdGgtdykvMik7XG4gICAgICB2YXIgdCA9IE51bWJlcigod2luZG93LnNjcmVlbi5oZWlnaHQtaCkvMik7XG5cbiAgICAgIHdpbmRvdy5vcGVuKHVybCwnbmV3X3dpbmRvdycsXG4gICAgICAgICAgICAgICAgJ21lbnViYXI9bm8sJyArXG4gICAgICAgICAgICAgICAgJ3Rvb2xiYXI9bm8sJyArXG4gICAgICAgICAgICAgICAgJ3Jlc2l6YWJsZT15ZXMsJyArXG4gICAgICAgICAgICAgICAgJ3Njcm9sbGJhcnM9eWVzLCcgK1xuICAgICAgICAgICAgICAgICdoZWlnaHQ9JyArIGggKyAnLCcgK1xuICAgICAgICAgICAgICAgICd3aWR0aD0nICsgdyArICcsJyArXG4gICAgICAgICAgICAgICAgJ2xlZnQ9JyArIGwgKyAnLCcgK1xuICAgICAgICAgICAgICAgICd0b3A9JyArIHRcbiAgICAgICAgICAgICAgKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdGhpcy5mYi4kdGFyZ2V0Lm9uKCdjbGljaycsIHRoaXMuanVtcEZCLmJpbmQodGhpcykpO1xuICAgIHRoaXMudHcuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLmp1bXBUVy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmxpbmUuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLmp1bXBMSU5FLmJpbmQodGhpcykpO1xuICAgIGlmICh0aGlzLiRtYWlsKSB0aGlzLiRtYWlsLm9uKCdjbGljaycsICgpPT57dGhpcy5vblNlbmRNYWlsKCk7cmV0dXJuIGZhbHNlO30pO1xuXG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG5cbiAgICB0aGlzLmZiLiR0YXJnZXQub2ZmKCdjbGljaycpO1xuICAgIHRoaXMudHcuJHRhcmdldC5vZmYoJ2NsaWNrJyk7XG4gICAgdGhpcy5saW5lLiR0YXJnZXQub2ZmKCdjbGljaycpO1xuICAgIGlmICh0aGlzLiRtYWlsKSB0aGlzLiRtYWlsLm9mZignY2xpY2snKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1Nucy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3RpcHRpb25cIixcblx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFwib2dwSW1nUGF0aFwiOiBcIlwiLFxuXHRcInRvcFwiOiB7XG5cdFx0XCJkZXNjcmlwdGlvblwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwiZmJcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2Vic2l0ZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJsaW5lXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcInR3XCI6IHtcblx0XHRcdFwiY2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcblx0XHRcdFwiY3JlYXRvclwiOiBcIlwiLFxuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIlwiLFxuXHRcdFx0XCJ1cmxcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIlxuXHRcdH1cblx0fSxcblx0XCJtb3ZpZVwiOiB7XG5cdFx0XCJkZXNjcmlwdGlvblwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwiZmJcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2Vic2l0ZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJsaW5lXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcInR3XCI6IHtcblx0XHRcdFwiY2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcblx0XHRcdFwiY3JlYXRvclwiOiBcIlwiLFxuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIlwiLFxuXHRcdFx0XCJ1cmxcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIlxuXHRcdH1cblx0fSxcblx0XCJpbnRlcnZpZXdcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaW50ZXJ2aWV3RGV0YWlsMDFcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaW50ZXJ2aWV3RGV0YWlsMDJcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaW50ZXJ2aWV3RGV0YWlsMDNcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaGlzdG9yeVwiOiB7XG5cdFx0XCJkZXNjcmlwdGlvblwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwiZmJcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2Vic2l0ZVwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJrZXl3b3JkXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJsaW5lXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwidGl0bGVcIjogXCJcIixcblx0XHRcInR3XCI6IHtcblx0XHRcdFwiY2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcblx0XHRcdFwiY3JlYXRvclwiOiBcIlwiLFxuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInNpdGVOYW1lXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIlwiLFxuXHRcdFx0XCJ1cmxcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIlxuXHRcdH1cblx0fVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vanNvbi1sb2FkZXIhL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvZWpzL2luYy9tZXRhRGF0YS5qc29uXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIExheW91dFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IFNpemUgZnJvbSAnLi9TaXplL1NpemUuanMnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zdGlvbi9Qb3NpdGlvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAgIHRoaXMuc2l6ZSA9IG5ldyBTaXplKCk7IC8vIGFkanVzdCBzaXplXG5cbiAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oKTsgLy8gYWRqdXN0IHBvc2l0aW9uXG4gICAgICBcbiAgfVxuXG4gIHN0YXRpYyByZXNldCgpIHtcblxuICAgIC8vIHNjYWxl44Gn5aSn44GN44GP44GX44Gm44GE44KL6Zai5L+C5LiK44CB6auY44GV44KSMTAwJeOBq+OBl+OBpuOBr+OBhOOBkeOBquOBhFxuICAgIGlmIChnYi5pbi5wamF4LmlkID09ICdoaXN0b3J5JyB8fCBnYi5pbi5wamF4LmlkID09ICdpbnRlcnZpZXdfZGV0YWlsJykge1xuXG4gICAgICBUd2Vlbk1heC5zZXQoJCgnI2lubmVyJyksIHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nOicwIDAnXG4gICAgICB9KTtcbiAgICAgIFR3ZWVuTWF4LnNldCgkKCcjYmdXcmFwJyksIHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nOicwIDAnXG4gICAgICB9KTtcblxuICAgICAgVHdlZW5NYXguc2V0KCQoJyN3cmFwcGVyJyksIHtcbiAgICAgICAgJ292ZXJmbG93JzondmlzaWJsZScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIFR3ZWVuTWF4LnNldCgkKCcjaW5uZXIsICNiZ1dyYXAnKSwge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzonMCAwJyxcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgIH0pO1xuXG4gICAgICBUd2Vlbk1heC5zZXQoJCgnI3dyYXBwZXInKSwge1xuICAgICAgICAnb3ZlcmZsb3cnOid2aXNpYmxlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgIH0pO1xuXG4gICAgfVxuICAgIFxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG4gICAgICAgXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L0xheW91dC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU2l6ZVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IFNjYWxlIGZyb20gJy4vU2NhbGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaXplIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcbiAgICBcbiAgICAvLyBnYi5pbi51LnNldEltZ1NQU2l6ZSgkKCdpbWcnKSk7IC8vIGZvciBzcCBpbWdcblxuICAgIC8vIG5ldyBnYi5SZXNwb25zaXZlRm9udFNpemUoJCgnLmZvbnRSZXNwb25zaXZlJykpOyAvL+ODrOOCueODneODs+OCt+ODluaZguODleOCqeODs+ODiOOCteOCpOOCuuOBruWkieabtFxuXG4gICAgdGhpcy5zY2FsZSA9IG5ldyBTY2FsZSgpOyAvLyByZXNpemVcblxuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIC8vIGdiLmluLnUuc2V0SW1nU1BTaXplKCQoJ2ltZycpKTsgLy8gZm9yIHNwIGltZ1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5yLmFkZCh0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TaXplLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMYXlvdXRcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FsZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLlNQQmFzZVcgPSAzNzU7XG4gICAgdGhpcy5QQ0Jhc2VXID0gMTMwMDtcblxuICAgIHRoaXMucmF0ZSA9IDE7XG4gICAgdGhpcy5XID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLiR0YXJnZXRMaXN0ID0gW1xuICAgICAge1xuICAgICAgICAnJHRhcmdldCc6ICQoJy5tZW51SW5uZXInKSxcbiAgICAgICAgJ3NjYWxlJzogJ3NwT25seScgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAnJHRhcmdldCc6ICQoJy5zZWN0aW9uMDNfZGV0YWlsJyksXG4gICAgICAvLyAgICdzY2FsZSc6ICdib3RoJyAvLyBzcE9ubHkgcGNPbmx5IGJvdGhcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgICckdGFyZ2V0JzogJCgnLnNlY3Rpb24wNCcpLFxuICAgICAgLy8gICAnc2NhbGUnOiAnYm90aCcgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICAvLyB9LFxuICAgIF1cblxuICAgIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgXG4gIH1cblxuICBydW4oKSB7XG5cbiAgICB0aGlzLlcgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB0aGlzLmlXID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLnNjYWxlKCk7XG4gICAgdGhpcy53cmFwKCk7XG5cbiAgfVxuXG4gIC8vIOaLoeWkp1xuICBzY2FsZSgpIHtcblxuICAgIC8vIGJw44Gu5aC05ZCI44Guc2NhbGVcbiAgICBpZiAodGhpcy5pVyA8PSBnYi5pbi5jb25mLmJwKSB7XG5cbiAgICAgIC8vIHdpZHRo44GL44KJcmF0ZeOCkuioiOeul1xuICAgICAgLy8gdGhpcy5yYXRlID0gZ2IuaW4udS5mbG9hdEZvcm1hdCh0aGlzLlcgLyB0aGlzLlNQQmFzZVcgLCAyKTtcbiAgICAgIHRoaXMucmF0ZSA9IHRoaXMuVyAvIHRoaXMuU1BCYXNlVztcblxuICAgICAgLy8gc2NhbGXjgZnjgovjg6rjgrnjg4jjgpLjg6vjg7zjg5dcbiAgICAgICQuZWFjaCh0aGlzLiR0YXJnZXRMaXN0LCAoaW5kZXgsIHZhbCk9PntcblxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdib3RoJyB8fCB2YWwuc2NhbGUgPT0gJ3NwT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuU1BCYXNlVyxcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLnJhdGUsXG4gICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyB3aWR0aOOBi+OCiXJhdGXjgpLoqIjnrpdcbiAgICAgIC8vIHRoaXMucmF0ZSA9IGdiLmluLnUuZmxvYXRGb3JtYXQodGhpcy5XIC8gdGhpcy5QQ0Jhc2VXICwgMik7XG4gICAgICBpZiAodGhpcy5XID4gMTMwMCkgdGhpcy5XID0gMTMwMDtcbiAgICAgIHRoaXMucmF0ZSA9IHRoaXMuVyAvIHRoaXMuUENCYXNlVztcblxuICAgICAgLy8gc2NhbGXjgZnjgovjg6rjgrnjg4jjgpLjg6vjg7zjg5dcbiAgICAgICQuZWFjaCh0aGlzLiR0YXJnZXRMaXN0LCAoaW5kZXgsIHZhbCk9PntcblxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdib3RoJyB8fCB2YWwuc2NhbGUgPT0gJ3BjT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuUENCYXNlVyxcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLnJhdGUsXG4gICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g44GT44Gh44KJ44Gu5aC05ZCI44Gv44CBc2NhbGXjgpLmiLvjgZlcbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnc3BPbmx5Jykge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KHZhbC4kdGFyZ2V0LCB7XG4gICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgfSk7ICBcblxuICAgIH1cblxuICB9XG5cbiAgLy8gc2NhbGXjgZfjgZ/jgonjgIHlhYPjga7lpKfjgY3jgZXliIbkvZnnmb3jgYzjgafjgY3jgovjga7jgadvdmVyZmxvdyBoaWRkZW7jgafmtojjgZlcbiAgd3JhcCgpIHtcblxuXG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgdGhpcy5ydW4oKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQoJ3NjYWxlJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TY2FsZS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUG9zaXRpb25cbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOS4iuS4i+S4reWkruWvhOOBm1xuICAgIHRoaXMuc2V0Q2VudGVyKCk7XG5cbiAgfVxuXG4gIHNldENlbnRlcigpIHtcblxuICAgICQoJy5wb3NDZW50ZXInKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLmFkanVzdCgpO1xuICAgICAgXG4gICAgfSk7XG4gICAgJCgnLnBvc0NlbnRlclcnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLmFkanVzdFcoKTtcbiAgICAgIFxuICAgIH0pO1xuICAgICQoJy5wb3NDZW50ZXJIJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5hZGp1c3RIKCk7XG4gICAgICBcbiAgICB9KTtcblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICB0aGlzLnNldENlbnRlcigpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCgnc2V0Q2VudGVyJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9Qb3N0aW9uL1Bvc2l0aW9uLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTWFpblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRGlzcGxheVRvcCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUb3AuanMnO1xuLy8gaW1wb3J0IERpc3BsYXlNb3ZpZSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlNb3ZpZS5qcyc7XG4vLyBpbXBvcnQgRGlzcGxheUludGVydmlldyBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlJbnRlcnZpZXcuanMnO1xuLy8gaW1wb3J0IERpc3BsYXlJbnRlcnZpZXdEZXRhaWwgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5SW50ZXJ2aWV3RGV0YWlsLmpzJztcbi8vIGltcG9ydCBEaXNwbGF5SGlzdG9yeSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlIaXN0b3J5LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vcGFnZeODmuODvOOCuOWIpeOBrklE44KS5Y+W5b6XXG4gICAgdmFyIHBhZ2UgPSAkKCdib2R5JykuZGF0YSgnaWQnKTtcblxuXHRcdC8vcGFnZeOBrklE44GU44Go44Gr55m654Gr44GZ44KL44Kv44Op44K544Gu5oyv44KK5YiG44GRXG4gICAgc3dpdGNoIChwYWdlKSB7XG5cbiAgICAgIGNhc2UgJ3RvcCc6XG5cbiAgICAgICAgbmV3IERpc3BsYXlUb3AoKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgLy8gY2FzZSAnbW92aWUnOlxuICAgICAgLy9cbiAgICAgIC8vICAgbmV3IERpc3BsYXlNb3ZpZSgpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cdFx0XHQvL1xuICAgICAgLy8gY2FzZSAnaW50ZXJ2aWV3JzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SW50ZXJ2aWV3KCk7XG5cdFx0XHQvL1xuICAgICAgLy8gICBicmVhaztcblx0XHRcdC8vXG4gICAgICAvLyBjYXNlICdpbnRlcnZpZXdfZGV0YWlsJzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SW50ZXJ2aWV3RGV0YWlsKCk7XG5cdFx0XHQvL1xuICAgICAgLy8gICBicmVhaztcblx0XHRcdC8vXG4gICAgICAvLyBjYXNlICdoaXN0b3J5JzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SGlzdG9yeSgpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuICB9XG5cbiAgb25SZW5kZXIoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9NYWluLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBEaXNwbGF5XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IEVmZmVjdHMgZnJvbSAnLi9FZmZlY3RzL0VmZmVjdHMuanMnO1xuaW1wb3J0IFNjYWxlVG9wIGZyb20gJy4uL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGVUb3AuanMnO1xuaW1wb3J0IEhvdmVyRWZmZWN0U05TU1BGb290ZXIgZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5qcyc7XG5pbXBvcnQgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCBmcm9tICcuLi9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0Fycm93VG9wLmpzJztcbmltcG9ydCBUb3BUaW1lIGZyb20gJy4uL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9MYXlvdXQvUG9zdGlvbi9Qb3NpdGlvbi5qcyc7XG5cbi8vIGltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuLy8gaW1wb3J0IENhbnZhcyBmcm9tICcuLi9WaXN1YWwvQ2FudmFzLmpzJztcblxuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi9WaXN1YWwvQ2FudmFzXCI7XG5cbi8vIGltcG9ydCB2cyBmcm9tICcuL3Rlc3QuZnJhZyc7XG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5vbkltbWVkaWF0ZSgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIG9uSW1tZWRpYXRlKCkge1xuXG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICAvLyBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XG4gICAgLy8gZ2IuaW4uY2FudmFzLmluaXQoKTtcblxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDYW52YXMoe1xuICAgICAgb3V0cHV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViZ2wtb3V0cHV0JylcbiAgICB9KTtcblxuICAgIGdiLmluLmNhbnZhcy5pbml0KCk7XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBVSSAvIExheW91dFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHNwXG4gICAgLy8gZ2IuaW4uc2NhbGVUb3AgPSBuZXcgU2NhbGVUb3AoKTtcbiAgICAvLyBnYi5pbi5wb3MgPSBuZXcgUG9zaXRpb24oKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBFZmZlY3RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBzcFxuICAgIC8vIGdiLmluLnNsaWRlclRvcC5zZXRFdmVudHMoKTtcbiAgICAvLyBnYi5pbi5zbnNTUEhvdmVyRWYgPSBuZXcgSG92ZXJFZmZlY3RTTlNTUEZvb3RlcigkKCcjc2lkZUwnKSk7XG5cbiAgICAvLyBwY1xuICAgIC8vIG5ldyBIb3ZlckVmZmVjdFNWR0Fycm93VG9wKCQoJy5zZWN0aW9uMDEgLm5leHQnKSk7IC8vIOKGkiBUb3BPcGVuaW5n44G4XG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBVSSAvIExheW91dFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHNwXG4gICAgLy8gZ2IuaW4uc2NhbGVUb3AgPSBuZXcgU2NhbGVUb3AoKTtcbiAgICAvLyBnYi5pbi5wb3MgPSBuZXcgUG9zaXRpb24oKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBFZmZlY3RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBzcFxuICAgIC8vIGdiLmluLnNsaWRlclRvcC5zZXRFdmVudHMoKTtcbiAgICAvLyBnYi5pbi5zbnNTUEhvdmVyRWYgPSBuZXcgSG92ZXJFZmZlY3RTTlNTUEZvb3RlcigkKCcjc2lkZUwnKSk7XG5cbiAgICAvLyBwY1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRWZmZWN0c1xuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBTZWN0aW9uMDJCZyBmcm9tICcuLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50cy5qcyc7XG5pbXBvcnQgU2VjdGlvbjA0UHJvZHVjdCBmcm9tICcuLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9HbENvbnRlbnRzLmpzJztcbmltcG9ydCBQcm9maWxlciBmcm9tICcuL1Byb2ZpbGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0cyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmdsID0gbnVsbDtcbiAgICB0aGlzLmRvbSA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9ICcnO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuZGVidWcoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIGJnXG4gICAgLy8gZ2IuaW4uU2VjdGlvbjAyQmcgPSBuZXcgU2VjdGlvbjAyQmcoKTtcblxuICAgIC8vIHByb2R1Y3RcbiAgICAvLyBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0ID0gbmV3IFNlY3Rpb24wNFByb2R1Y3QoJCgnLnNlY3Rpb24wMycpKTtcblxuICB9XG5cbiAgZGVidWcoKSB7XG5cbiAgICAvLyBwcm9maWxlcuioreWumlxuICAgIC8vIG5ldyBQcm9maWxlcigpO1xuXG4gIH1cblxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9FZmZlY3RzLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IExvb3AgZnJvbSAnLi9DVkNvbnRlbnRzTG9vcC5qcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9DVkNvbnRlbnRzVGltZWxpbmUuanMnO1xuaW1wb3J0IENyZWF0ZUNhbnZhcyBmcm9tICcuL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5qcyc7XG5pbXBvcnQgRnVsbFNpemUgZnJvbSAnLi4vLi4vLi4vLi4vTXlMaWJzL0Rpc3BsYXkvTGF5b3V0L0Z1bGxTaXplLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1ZDb250ZW50cyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7IFxuICAgIC8vIHRoaXMuY3JlYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgICAvLyBsb29wXG4gICAgdGhpcy5sb29wID0gbmV3IExvb3AoKTtcbiAgICAvLyB0aW1lbGluZVxuICAgIHRoaXMudGltZWxpbmUgPSBuZXcgVGltZWxpbmUoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjga7jg63jg7zjg4lcbiAgICAvLyBnYi5pbi5sb2FkTWdyLnNlYzAySW1nKCk7XG4gICAgXG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICAgIC8vIGdiLmluLnJtLnRvdGFsICs9IDE7XG4gICAgLy8gY2FudmFz44Gu55Sf5oiQXG4gICAgLy8g44Os44OG44Kj44O844OK55So44GrMuWAjVxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDcmVhdGVDYW52YXMoJCgnI2JnV3JhcCAuc2VjMDJCZ0NhbnZhcycpLGdiLmluLmNvbmYuZGVmVyxnYi5pbi5jb25mLmRlZkgsKCk9PntcblxuICAgICAgdmFyIGwgPSBuZXcgRnVsbFNpemUoJCgnI2JnV3JhcCcpLCQoJy5zZWMwMkJnQ2FudmFzJyksMCwnRnVsbFNpemVTZWMwMkJnQ2FudmFzJyk7XG4gICAgICBsLnRhcmdldERlZlcgPSBnYi5pbi5jb25mLmRlZlc7XG4gICAgICBsLnRhcmdldERlZkggPSBnYi5pbi5jb25mLmRlZkg7XG4gICAgICBsLnJ1bigpO1xuXG4gICAgfSk7XG5cbiAgICAvLyB1aei/veWKoCjjgrPjg7Pjg4jjg63jg7zjg6njg7zjgIFwcm9maWxlcuOBquOBqSlcbiAgICAvLyB0aGlzLmFkZFVJKCk7XG5cblxuICB9XG5cbiAgYWRkVUkoKSB7XG5cbiAgICAvLyBwYXJhbXJ0ZXLoqr/mlbRcbiAgICAvLyBnYi5pbi5wYXJhbSA9IG5ldyBnYi5QYXJhbSgpO1xuXG4gIH1cblxuICBwbGF5KCkge1xuXG4gICAgdGhpcy5sb29wLnN0YXJ0KCk7XG4gICAgdGhpcy50aW1lbGluZS50bE1haW4ucGxheSgpO1xuXG4gIH1cblxuICBwYXVzZSgpIHtcblxuICAgIHRoaXMubG9vcC5wYXVzZSgpO1xuICAgIHRoaXMudGltZWxpbmUudGxNYWluLnBhdXNlKCk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5yLmFkZCgnY3ZDb250ZW50cycsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgLy8gZ2IuaW4uaGFzaC5vbkNoYW5nZUZ1bmNMaXN0LnB1c2godGhpcy5vblNlY3Rpb24wMi5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzTG9vcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1ZDb250ZW50c0xvb3Age1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc0Fsd2F5cyA9IHRydWU7XG4gICAgdGhpcy5pc1J1blN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy5pc0FkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlID0gJ2luaXRpYWwnO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmxvb3BMaXN0ID0gW107XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgaWYgKHRoaXMuaXNBbHdheXMpIHRoaXMucnVuQWx3YXlzKCk7XG4gICAgaWYgKHRoaXMuaXNSdW5TdGF0dXMpIHRoaXMucnVuU3RhdHVzKCk7XG4gICAgaWYgKHRoaXMuaXNBZGp1c3RQYXJhbSkgdGhpcy5ydW5BZGp1c3RQYXJhbSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5bi444Gr6KGM44GG5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgcnVuQWx3YXlzKCkge1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLmxvb3BMaXN0KSB0aGlzLmxvb3BMaXN0W2ldKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDlkITnirbmhYvjga7lh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1blN0YXR1cygpIHtcblxuICAgIGlmICh0aGlzLnN0YXRlID09ICdpbml0aWFsJykge1xuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YXJ0Jykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAxJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAyJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAzJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RhbmRieScpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzb21ldGltZXMnKSB7XG5cbiAgICAgIGlmICh0aGlzLnNvbWV0aW1lc1N0YXRlID09ICdsaW5lU2hhZG93Jykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc3BoZXJlJykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc2F0ZWxsaXRlJykge1xuXG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOODkeODqeODoeODvOOCv+iqv+aVtOeUqOWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnVuQWRqdXN0UGFyYW0oKSB7XG5cblxuXG4gIH1cblxuICBkcmF3KCkge1xuXG5cblxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIGlmICh0aGlzLmxvb3BTdGFydCkge1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmRyYXcoKTtcblxuICAgIC8vIGxvZygnc2VjdGlvbjAyJylcblxuICAgIH1cblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IHRydWU7XG5cbiAgfVxuXG4gIHBhdXNlKCkge1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSBmYWxzZTtcblxuICB9XG5cbiAgYWRkKGZ1bmMpIHtcblxuICAgIHRoaXMubG9vcExpc3QucHVzaChmdW5jKTtcbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGdiLmluLnVwLmFkZCgnc2VjdGlvbjAyQmcnLHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzTG9vcC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgQ1ZDb250ZW50c1RpbWVsaW5lXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyAgQ1ZDb250ZW50c1RpbWVsaW5lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMudGxNYWluID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44K/44Kk44Og44Op44Kk44Oz44KS5q2i44KB44Gm44GK44GPXG4gICAgdGhpcy50bE1haW4ucGF1c2UoKTtcblxuICAgIHRoaXMuYmVnaW5uaW5nKCk7XG4gICAgdGhpcy5zdGVwMDEoKTtcbiAgICB0aGlzLnN0ZXAwMigpO1xuICAgIHRoaXMuc3RlcDAzKCk7XG4gICAgdGhpcy5zdGFuZEJ5KCk7XG4gICAgdGhpcy5zb21ldGltZXMoKTtcblxuICB9XG5cbiAgYmVnaW5uaW5nKCkge1xuXG4gIH1cblxuICBzdGVwMDEoKSB7XG5cbiAgfVxuXG4gIHN0ZXAwMigpIHtcblxuXG4gIH1cblxuICBzdGVwMDMoKSB7XG5cbiAgICBcbiAgfVxuXG4gIHN0YW5kQnkoKSB7XG5cblxuICB9XG5cbiAgLy8g5pmC44CFXG4gIHNvbWV0aW1lcygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMudGxNYWluXG4gICAgICAuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgIH0sJys9MC4wJykgICAgXG5cbiAgfVxuXG4gIG9uUmVzaXpzZSgpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5yLmFkZCgnY3ZUaW1lbGluZScsIHRoaXMub25SZXNpenNlLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNUaW1lbGluZS5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDcmVhdGVDYW52YXNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMuanMnO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwLHcsaCxjYj0oKT0+e30pIHtcblxuICAgIHRoaXMuYyA9IG51bGw7XG4gICAgdGhpcy5jdyA9IDA7XG4gICAgdGhpcy5jaCA9IDA7XG4gICAgXG4gICAgdGhpcy5maWxsU3R5bGUgPSAnMCwwLDAnO1xuICAgIHRoaXMuJHdyYXAgPSAkd3JhcDtcblxuICAgIHRoaXMubG9vcExpc3QgPSBbXTtcblxuICAgIC8vIOacgOWIneOCquODluOCuOOCp+OCr+ODiOeUn+aIkOOBmeOCi+OBn+OCgeOBq2Jvb2xlYW4g44GC44GI44Gm6YCG44GrXG4gICAgdGhpcy5pc1Jlc2l6ZSA9IChnYi5pbi51LmlzUmVzUEMpPyBmYWxzZTogdHJ1ZTtcblxuICAgIHRoaXMuY2IgPSBjYjtcblxuICAgIHRoaXMudyA9IDI2MDtcbiAgICB0aGlzLmggPSAxNDY7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgICB0aGlzLnNldENhbnZhc1NpemUodyxoKTtcbiAgICB0aGlzLnRpbWVsaW5lKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkgeyAvL2NhbnZhcyBmaW5nZXIgcG9pbnRcblxuICAgIHRoaXMuYyA9IG5ldyBDYW52YXMoKTtcblxuICAgIC8vIHRoaXMuYWRkT2JqZWN0cygpO1xuICAgIHRoaXMub25SZXNpemUoKTtcbiAgICBcbiAgICB0aGlzLiR3cmFwLmFwcGVuZCh0aGlzLmMuY2FudmFzKTtcblxuICAgIHRoaXMuY2IoKTtcblxuICB9XG5cbiAgYWRkT2JqZWN0cyh2eCkgeyAvL2NhbnZhcyBmaW5nZXIgcG9pbnRcblxuICAgIHRoaXMubG9vcExpc3QgPSBbXTtcblxuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHZhciBvZmZzZXRGcmFtZSA9IDA7XG4gICAgdmFyIG9mZnNldFZ4ID0gMDtcblxuICAgIHRoaXMueE51bSA9IDg7XG4gICAgdGhpcy55TnVtID0gNjtcbiAgICB0aGlzLmxlbiA9IHRoaXMueE51bSAqIHRoaXMueU51bTtcblxuICAgIHRoaXMudGlsZUxpc3QgPSBbXTtcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcbiAgICAgIHZhciB0b3RhbCA9IGdiLmluLmNvbmYuc2VjMDJJbWdOdW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0b3RhbCA9IDE5O1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgIFxuICAgICAgdGhpcy50aWxlID0gbmV3IFBsYW5lKHRoaXMuYy5jdHgsdGhpcy5maWxsU3R5bGUpO1xuXG4gICAgICB2YXIgbnRoID0gaSAlIHRoaXMueE51bTsgXG4gICAgICBpZiAobnRoID09IDApIG9mZnNldCA9IC0gNTAwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKSAtIDI1MDtcbiAgICAgIGlmIChudGggPT0gMCkgb2Zmc2V0RnJhbWUgPSBNYXRoLmZsb29yKHRvdGFsICogTWF0aC5yYW5kb20oKSk7XG4gICAgICBpZiAobnRoID09IDApIG9mZnNldFZ4ID0gdnggKyBNYXRoLmZsb29yKHZ4ICogMiAqIE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICB2YXIgeCA9IG50aCAqIHRoaXMudyArIG9mZnNldDtcbiAgICAgIHZhciB5ID0gTWF0aC5mbG9vcihpIC8gdGhpcy54TnVtKSAqIHRoaXMuaDtcblxuICAgICAgdGhpcy50aWxlLnNldHVwKHgsIHksIHRoaXMudywgdGhpcy5oLCBvZmZzZXRGcmFtZSArIG50aCAqIDMsIG9mZnNldFZ4LCBvZmZzZXQpO1xuICAgICAgdGhpcy50aWxlTGlzdC5wdXNoKHRoaXMudGlsZSk7XG4gICAgICB0aGlzLmFkZCh0aGlzLnRpbGUubG9vcC5iaW5kKHRoaXMudGlsZSkpO1xuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgc2V0Q2FudmFzU2l6ZSh3LGgpIHtcblxuICAgIHRoaXMuY3cgPSB0aGlzLmMuY2FudmFzLndpZHRoID0gdztcbiAgICB0aGlzLmNoID0gdGhpcy5jLmNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gIH1cblxuICBsb29wKCkge1xuXG4gICAgLy8gdGhpcy5jLmN0eC5jbGVhclJlY3QoMCwwLHRoaXMuY3csdGhpcy5jaCk7XG4gICAgLy8gdGhpcy5jLmN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA4KSc7XG5cbiAgICB0aGlzLmMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNiknO1xuICAgIHRoaXMuYy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY3csdGhpcy5jaCk7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMubG9vcExpc3QpIHRoaXMubG9vcExpc3RbaV0oKTtcbiAgICBcbiAgfVxuXG4gIHRpbWVsaW5lKCkge1xuXG5cbiAgfVxuXG4gIGFkZChmdW5jKSB7XG5cbiAgICB0aGlzLmxvb3BMaXN0LnB1c2goZnVuYyk7XG4gICAgXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIGxvZyhnYi5pbi51LmlzUmVzU1AsZ2IuaW4udS5pc1Jlc1BDKTtcblxuICAgIGlmIChnYi5pbi51LmlzUmVzU1AgJiYgdGhpcy5pc1Jlc2l6ZSkge1xuICAgICAgdGhpcy5pc1Jlc2l6ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmFkZE9iamVjdHMoMC41KTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy50aWxlTGlzdFtpXS5jbnRTdG9wID0gdHJ1ZTtcblxuICAgICAgfTtcblxuICAgICAgbG9nKDExMTEpXG5cbiAgICB9IGVsc2UgaWYgKGdiLmluLnUuaXNSZXNQQyAmJiAhdGhpcy5pc1Jlc2l6ZSkge1xuICAgICAgdGhpcy5pc1Jlc2l6ZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuYWRkT2JqZWN0cygwLjUpO1xuXG4gICAgICAvLyDjgrnjg57jg5vjgaDjgaPjgZ/jgonjgIHluoPjgYTooajnpLrjgafjgoLjg5Xjg6zjg7zjg6Djga7li5XjgY3jgpLmraLjgoHjgotcbiAgICAgIGlmIChnYi5pbi51LmlzU1ApIHtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGlsZUxpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgIHRoaXMudGlsZUxpc3RbaV0uY250U3RvcCA9IHRydWU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm47XG5cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy50aWxlTGlzdFtpXS5jbnRTdG9wID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgfTtcblxuXG4gICAgICBsb2coMjIyMik7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLlNlYzAyQmcubG9vcC5hZGQodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIGdiLmluLnIuYWRkKCdDcmVhdGVDYW52YXMnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDYW52YXNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgdGhpcy53ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5oID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cblxuICBzZXR1cCAoKSB7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyBcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnc7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oO1xuICAgIFxuICB9XG5cbiAgdXBkYXRlICgpIHtcblxuICAgIFxuICB9XG5cbiAgZHJhdyAoKSB7XG5cbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvX2RldGFpbHMvQ2FudmFzLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBsYW5lXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5lIHtcblxuICBjb25zdHJ1Y3RvcihjdHgsc3Ryb2tlU3R5bGUpe1xuXG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgdGhpcy5vcCA9IHt2YWw6MX07XG5cbiAgICB0aGlzLmNudCA9IDA7XG5cbiAgICB0aGlzLmNudFN0b3AgPSBmYWxzZTtcblxuICAgIC8vIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuXG4gIH1cblxuICBzZXR1cCh4LCB5LCB3LCBoLCBmcmFtZVN0YXJ0LCB2eCwgb2Zmc2V0KSB7XG5cbiAgICB0aGlzLmltZ0xpc3QgPSBnYi5pbi5sb2FkU2VjMDJJbWcubGlzdDtcblxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLncgPSB3O1xuICAgIHRoaXMuaCA9IGg7XG5cbiAgICB0aGlzLnZ4ID0gdng7XG5cbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcblxuICAgIHRoaXMuY250ID0gZnJhbWVTdGFydCA7XG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuXG4gIH1cblxuICAvLyDpoILngrnjgafmj4/jgY9cbiAgdXBkYXRlKCkge1xuXG4gICAgdGhpcy54IC09IHRoaXMudng7XG4gICAgaWYgKHRoaXMueCA8IC10aGlzLncpIHRoaXMueCA9IGdiLmluLmNhbnZhcy5jdyAtIDEwO1xuXG4gIH1cblxuICBkcmF3KCkge1xuXG4gICAgaWYgKCF0aGlzLmNudFN0b3ApIHtcblxuICAgICAgLy8g6ZaT5byV44GNXG4gICAgICBpZiAoZ2IuaW4udXAuY250JTM9PTApIHRoaXMuY250Kys7XG4gICAgICBlbHNlIDtcblxuICAgIH07XG4gICAgLy8gdGhpcy5jbnQrKztcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcbiAgICAgIHZhciB0b3RhbCA9IGdiLmluLmNvbmYuc2VjMDJJbWdOdW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0b3RhbCA9IDE5O1xuICAgIH1cbiAgICBcbiAgICB2YXIgaW1nID0gdGhpcy5pbWdMaXN0W3RoaXMuY250JXRvdGFsXTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xuICAgIFxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL1BsYW5lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBHbENvbnRlbnRzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IExvb3AgZnJvbSAnLi9HbENvbnRlbnRzTG9vcC5qcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9HbENvbnRlbnRzVGltZWxpbmUuanMnO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vX2RldGFpbHMvUGxhbmUuanMnO1xuaW1wb3J0IFBhcmFtIGZyb20gJy4uLy4uL1BhcmFtLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xDb250ZW50cyB7XG5cbiAgY29uc3RydWN0b3IoJHdyYXAgPSAkKCdib2R5JykpIHtcblxuICAgIHRoaXMucmVuZGVyZXI7XG4gICAgdGhpcy5jYW1lcmE7XG4gICAgdGhpcy5zY2VuZTtcbiAgICB0aGlzLmxpZ2h0O1xuXG4gICAgdGhpcy5zdGF0ZSA9ICdpbml0aWFsJztcbiAgICB0aGlzLmFkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlTGluZVJvdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmlzQ29udHJvbCA9IGZhbHNlO1xuICAgIHRoaXMuY29udHJvbHM7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5jcmVhdGUoJHdyYXApO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gICAgLy8gbG9vcFxuICAgIHRoaXMubG9vcCA9IG5ldyBMb29wKCk7XG4gICAgLy8gdGltZWxpbmVcbiAgICB0aGlzLnRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIGNyZWF0ZSgkd3JhcCkge1xuXG4gICAgLy8gcmVuZGVyXG4gICAgZ2IuaW4ucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczogdHJ1ZX0pO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggZ2IuaW4uci5XKCksIGdiLmluLnIuSCgpICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwLjApO1xuICAgICR3cmFwLmFwcGVuZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggICk7XG4gICAgJCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpLmNzcyh7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxsZWZ0OiAwLFxuICAgICAgJ3otaW5kZXgnOiAxLFxuICAgIH0pO1xuXG4gICAgLy8gc2NlbmVcbiAgICBnYi5pbi5zY2VuZSA9IG5ldyBnYi5TY2VuZSgpO1xuICAgIHRoaXMuc2NlbmUgPSBnYi5pbi5zY2VuZS5zY2VuZTtcblxuICAgIC8vIGNhbWVyYVxuICAgIGdiLmluLmNhbWVyYSA9IG5ldyBnYi5DYW1lcmEoKTtcbiAgICB0aGlzLmNhbWVyYSA9IGdiLmluLmNhbWVyYS5jYW1lcmE7XG5cbiAgICAvLyBsaWdodFxuICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDMgKTtcbiAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnogPSAzO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI6L+95YqgXG4gICAgdGhpcy5hZGRPYmplY3RzKCk7XG5cbiAgICAvLyB1aei/veWKoCjjgrPjg7Pjg4jjg63jg7zjg6njg7zjgIFwcm9maWxlcuOBquOBqSlcbiAgICAvLyB0aGlzLmFkZFVJKCk7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjga7jg63jg7zjg4lcbiAgICBnYi5pbi5sb2FkTWdyLnNlY3Rpb24wNFByb2R1Y3RTaGFkZXIoKTtcblxuICB9XG5cbiAgYWRkT2JqZWN0cygpIHtcblxuICAgIHRoaXMucGxhbmUgPSBuZXcgUGxhbmUoKTtcblxuICB9XG5cbiAgYWRkVUkoKSB7XG5cbiAgICAvLyBjb250cm9sc1xuXG4gICAgaWYgKHRoaXMuaXNDb250cm9sKSB7XG5cbiAgICAgIGdiLmluLmNvbnRyb2xzID0gdGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5UcmFja2JhbGxDb250cm9scyh0aGlzLmNhbWVyYSk7XG4gICAgICB0aGlzLmNvbnRyb2xzLnpvb21TcGVlZCA9IDAuODtcbiAgICAgIHRoaXMuY29udHJvbHMucm90YXRlU3BlZWQgPSAzO1xuXG4gICAgfTtcblxuICAgIC8vIHByb2ZpbGVy6Kit5a6aXG4gICAgbmV3IGdiLlByb2ZpbGVyKCk7XG4gICAgLy8gcGFyYW1ydGVy6Kq/5pW0XG4gICAgZ2IuaW4ucGFyYW0gPSBuZXcgUGFyYW0oKTtcblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICB2YXIgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHZhciBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHcsIGgpO1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHcgLyBoO1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICB9XG5cbiAgb25TZWN0aW9uMDQoY3VyLHByZXYpIHtcblxuICAgIGlmIChjdXIgPT0gJ3Byb2R1Y3QnKSB7XG5cbiAgICAgIHRoaXMubG9vcC5zdGFydCgpO1xuICAgICAgdGhpcy50aW1lbGluZS50bE1haW4ucGxheSgpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5sb29wLnBhdXNlKCk7XG4gICAgICB0aGlzLnRpbWVsaW5lLnRsTWFpbi5wYXVzZSgpO1xuXG4gICAgfVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCh0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICAgIGdiLmluLmhhc2gub25DaGFuZ2VGdW5jTGlzdC5wdXNoKHRoaXMub25TZWN0aW9uMDQuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdvblNlY3Rpb24wNFByb2R1Y3RJbWcnLCAoKT0+e3RoaXMudGltZWxpbmUuc2V0dXAoKTt9KTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHMuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEdsQ29udGVudHNMb29wXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbENvbnRlbnRzTG9vcCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmlzQWx3YXlzID0gdHJ1ZTtcbiAgICB0aGlzLmlzUnVuU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLmlzQWRqdXN0UGFyYW0gPSB0cnVlO1xuICAgIHRoaXMuc3RhdGUgPSAnaW5pdGlhbCc7XG4gICAgdGhpcy5zb21ldGltZXNTdGF0ZSA9ICdpbml0aWFsJztcblxuICAgIHRoaXMubG9vcFN0YXJ0ID0gZmFsc2U7XG5cbiAgICB0aGlzLmxvb3BMaXN0ID0gW107XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBpZiAodGhpcy5pc0Fsd2F5cykgdGhpcy5ydW5BbHdheXMoKTtcbiAgICBpZiAodGhpcy5pc1J1blN0YXR1cykgdGhpcy5ydW5TdGF0dXMoKTtcbiAgICBpZiAodGhpcy5pc0FkanVzdFBhcmFtKSB0aGlzLnJ1bkFkanVzdFBhcmFtKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDluLjjgavooYzjgYblh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICBydW5BbHdheXMoKSB7XG5cbiAgICBpZiAoZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5pc0NvbnRyb2wpIGdiLmluLmNvbnRyb2xzLnVwZGF0ZSgpO1xuXG4gICAgLy8gY2FtZXJhXG4gICAgZ2IuaW4uY2FtZXJhLnVwZGF0ZUNvbnRyb2xsKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDlkITnirbmhYvjga7lh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1blN0YXR1cygpIHtcblxuICAgIGlmICh0aGlzLnN0YXRlID09ICdpbml0aWFsJykge1xuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YXJ0Jykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAxJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAyJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RlcDAzJykge1xuXG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc3RhbmRieScpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzb21ldGltZXMnKSB7XG5cbiAgICAgIGlmICh0aGlzLnNvbWV0aW1lc1N0YXRlID09ICdsaW5lU2hhZG93Jykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc3BoZXJlJykge1xuXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnc2F0ZWxsaXRlJykge1xuXG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOODkeODqeODoeODvOOCv+iqv+aVtOeUqOWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcnVuQWRqdXN0UGFyYW0oKSB7XG5cblxuXG4gIH1cblxuICBkcmF3KCkge1xuXG4gICAgZ2IuaW4ucmVuZGVyZXIucmVuZGVyKCBnYi5pbi5zY2VuZS5zY2VuZSwgZ2IuaW4uY2FtZXJhLmNhbWVyYSApO1xuICAgIC8vIGdiLmluLnBvc3Rwcm9jZXNzLmNvbXBvc2VyLnJlbmRlcigwLjEpO1xuXG4gIH1cblxuICBsb29wKCkge1xuXG4gICAgaWYgKHRoaXMubG9vcFN0YXJ0KSB7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuZHJhdygpO1xuXG4gICAgbG9nKCdzZWN0aW9uMDQnKVxuXG4gICAgfVxuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIHRoaXMubG9vcFN0YXJ0ID0gdHJ1ZTtcblxuICB9XG5cbiAgcGF1c2UoKSB7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IGZhbHNlO1xuXG4gIH1cblxuICBhZGQoZnVuYykge1xuXG4gICAgdGhpcy5sb29wTGlzdC5wdXNoKGZ1bmMpO1xuICAgIFxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZ2IuaW4udXAuYWRkKCdzZWN0aW9uMDRQcm9kdWN0Jyx0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9HbENvbnRlbnRzTG9vcC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgR2xDb250ZW50c1RpbWVsaW5lXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgU29tZVRpbWVzIGZyb20gJy4uLy4uLy4uLy4uL015TGlicy9FdmVudE1nci9Tb21ldGltZXNNZ3IuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbENvbnRlbnRzVGltZWxpbmUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy50bE1haW4gPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICAvLyB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgr/jgqTjg6Djg6njgqTjg7PjgpLmraLjgoHjgabjgYrjgY9cbiAgICB0aGlzLnRsTWFpbi5wYXVzZSgpO1xuICAgIFxuICAgIHRoaXMuYmVnaW5uaW5nKCk7XG4gICAgLy8gdGhpcy5zdGVwMDEoKTtcbiAgICAvLyB0aGlzLnN0ZXAwMigpO1xuICAgIC8vIHRoaXMuc3RlcDAzKCk7XG4gICAgLy8gdGhpcy5zdGFuZEJ5KCk7XG4gICAgdGhpcy5zb21ldGltZXMoKTsgICAgXG5cbiAgfVxuXG4gIGJlZ2lubmluZygpIHtcblxuICAgIHRoaXMudGxNYWluXG4gICAgICAvLyB6b29tIGluXG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnN0cmVuZ3RoLCAxLjMsIHtcbiAgICAgICAgdmFsdWU6IDUwMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgIG9uU3RhcnQ6ICgpPT4ge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5zdHJlbmd0aCwge3ZhbHVlOiA1MDB9KTtcblxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBjYW1lcmHnp7vli5VcbiAgICAgIC50byhnYi5pbi5jYW1lcmEuY2FtZXJhLnBvc2l0aW9uLCAxLjUsIHtcbiAgICAgICAgejogMjAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgfSwnLT0xLjMnKVxuXG4gICAgICAvLyBwbGFuZeenu+WLlVxuICAgICAgLnRvKGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUucG9zaXRpb24sIDEuNSwge1xuICAgICAgICB4OiAtMTAwLFxuICAgICAgICB5OiAyMDAsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0XG4gICAgICB9LCctPTEuNScpXG5cbiAgICAgIC8vIHpvb20gb3V0XG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnN0cmVuZ3RoLCAxLCB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJblxuICAgICAgfSwnLT0wLjQnKVxuXG4gICAgICAvLyBwbGFuZTAx44GMb3BhY2l0eeOBp+a2iOOBiOOCi1xuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy5vcGFjaXR5LCAxLCB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZUluT3V0XG4gICAgICB9LCctPTAuNycpXG5cbiAgICAgIC8vIHBsYW5lMDLjga5ibHVyIG91dFxuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5zdHJlbmd0aCwgMSwge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXRcbiAgICAgIH0sJy09MS4wJylcblxuICAgICAgLy8gcGxhbmUwMuOBjOWHuuOBpuadpeOCi1xuICAgICAgLnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5vcGFjaXR5LCAxLCB7XG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgfSwnLT0xLjAnKVxuXG4gICAgICAudG8oZ2IuaW4uY2FtZXJhLmNhbWVyYS5wb3NpdGlvbiwgMS41LCB7XG4gICAgICAgIHo6IDQwMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKT0+IHtcblxuICAgICAgICAgIC8vIG1hdGVyaWFs44Gu5aSJ5pu0XG5cbiAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMuZnJvbS52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbMV07XG4gICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1syXTtcblxuICAgICAgICAgIGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUwMi5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS5mcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnBsYW5lMDIuc2NhbGUueCA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUwMi5zY2FsZS55ID0gMTIwMC4wO1xuXG5cbiAgICAgICAgfVxuICAgICAgfSwnLT0xLjAnKVxuXG5cblxuICB9XG5cbiAgc3RlcDAxKCkge1xuXG5cbiAgfVxuXG4gIHN0ZXAwMigpIHtcblxuXG5cbiAgfVxuXG4gIHN0ZXAwMygpIHtcblxuXG5cbiAgfVxuXG4gIHN0YW5kQnkoKSB7XG5cblxuICB9XG5cbiAgLy8g5pmC44CFXG4gIHNvbWV0aW1lcygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMudGxNYWluXG4gICAgICAuYWRkKGZ1bmN0aW9uKCl7XG5cblxuICAgICAgICB2YXIgcyA9IG5ldyBTb21lVGltZXMoKTtcblxuICAgICAgICBzLmFkZChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgVHdlZW5NYXgudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnByb2dyZXNzLCAxLjMsIHtcbiAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKT0+e1xuXG4gICAgICAgICAgICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5mcm9tLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1szXTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIFxuICAgICAgICAgIFxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1s0XTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLmZyb20udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzVdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLnRvLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1sxXTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgIH0sIDIuMCwgMi4wKVxuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLmZyb20udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzJdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSwgMi4wLCAyLjApO1xuXG4gICAgICAgIHMuc3RhcnQoKTtcblxuICAgICAgfSwnKz0wLjAnKVxuICAgIFxuXG4gIH1cblxuICBvblJlc2l6c2UoKSB7XG5cbiAgfVxuXG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4uci5hZGQodGhpcy5vblJlc2l6c2UuYmluZCh0aGlzKSk7XG5cbiAgICAkKHdpbmRvdykub24oJ2NsaWNrJywoKT0+e1xuXG4gICAgICAvLyB0aGlzLnN0YXJ0KCk7XG5cbiAgICB9KTtcblxuICB9XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c1RpbWVsaW5lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTb21lVGltZXNcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbWVUaW1lcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLlNvbWVUaW1lcztcbiAgICB0aGlzLlRpbWVyID0gbnVsbDtcbiAgICB0aGlzLmNiTGlzdCA9IFtdO1xuICAgIHRoaXMubGVuID0gMDtcbiAgICB0aGlzLm9yZGVyID0gMDtcblxuICAgIHRoaXMubWluID0gW107XG4gICAgdGhpcy5tYXggPSBbXTtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgc3RhcnQobWluPTAsIG1heD0wKSB7XG5cbiAgICB0aGlzLmxhdGVyID0gZ2IuaW4udS5yYW5kb20obWluLG1heCkgKiAxMDAwO1xuICAgIHRoaXMuVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMucnVuLmJpbmQodGhpcyksdGhpcy5sYXRlcik7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIHRoaXMub3JkZXIgPSB0aGlzLm9yZGVyICUgdGhpcy5sZW47XG5cbiAgICB0aGlzLmxhdGVyID0gZ2IuaW4udS5yYW5kb20odGhpcy5taW5bdGhpcy5vcmRlcl0sdGhpcy5tYXhbdGhpcy5vcmRlcl0pICogMTAwMDtcblxuICAgIHRoaXMuY2JMaXN0W3RoaXMub3JkZXJdKCk7XG5cbiAgICB0aGlzLm9yZGVyKys7XG4gICAgdGhpcy5UaW1lciA9IHNldFRpbWVvdXQodGhpcy5ydW4uYmluZCh0aGlzKSx0aGlzLmxhdGVyKTtcblxuICB9XG5cbiAgc3RvcCgpIHtcblxuICAgIGxvZyh0aGlzLlRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5UaW1lcik7XG5cbiAgfVxuXG4gIGFkZChmdW5jLG1pbj04LG1heD0xMikge1xuXG4gICAgdGhpcy5taW4ucHVzaChtaW4pO1xuICAgIHRoaXMubWF4LnB1c2gobWF4KTtcblxuICAgIHRoaXMuY2JMaXN0LnB1c2goZnVuYyk7XG4gICAgdGhpcy5sZW4gPSB0aGlzLmNiTGlzdC5sZW5ndGg7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9Tb21ldGltZXNNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFBsYW5lXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbnVsbDtcbiAgICB0aGlzLm1hdGVyaWFsID0gbnVsbDtcblxuICAgIHRoaXMudmlkZW8gPSBudWxsO1xuICAgIHRoaXMucGxhbmUgPSBudWxsO1xuXG4gICAgdGhpcy5kZWZXVyA9IDE5MjA7XG4gICAgdGhpcy5kZWZISCA9IDEwODA7XG4gICAgdGhpcy5kZWZXID0gMzA1O1xuICAgIHRoaXMucmF0ZSA9IDA7XG4gICAgdGhpcy5yYXRlVyA9IDA7XG5cbiAgICB0aGlzLmxiID0gbnVsbDsgLy9sYXlvdXQgYmFja2dyb3VuZFxuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIGNyZWF0ZShjYikge1xuXG4gICAgdmFyIHRleHR1cmVzID0gdGhpcy50ZXh0dXJlcyAgPSBnYi5pbi5sb2FkTWdyLnRleHR1cmVzO1xuXG4gICAgdmFyIHcgPSB0ZXh0dXJlc1swXS5pbWFnZS53aWR0aCAvIHRleHR1cmVzWzBdLmltYWdlLndpZHRoO1xuICAgIHZhciBoID0gdGV4dHVyZXNbMF0uaW1hZ2UuaGVpZ2h0IC8gdGV4dHVyZXNbMF0uaW1hZ2Uud2lkdGg7XG5cbiAgICAvLyBwbGFuZTAxXG5cbiAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh3LCBoLCAxLCAxKTtcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3JtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0uZnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLnBsYW5lID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICB0aGlzLnBsYW5lLnNjYWxlLnggPSB0aGlzLnBsYW5lLnNjYWxlLnkgPSAyMDAwLjA7XG5cbiAgICAvLyBwbGFuZTAyXG5cbiAgICB2YXIgdyA9IHRleHR1cmVzWzFdLmltYWdlLndpZHRoIC8gdGV4dHVyZXNbMV0uaW1hZ2Uud2lkdGg7XG4gICAgdmFyIGggPSB0ZXh0dXJlc1sxXS5pbWFnZS5oZWlnaHQgLyB0ZXh0dXJlc1sxXS5pbWFnZS53aWR0aDtcblxuICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHcsIGgsIDEsIDEpO1xuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3JtczogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS52cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS5mcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHRoaXMucGxhbmUwMiA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgdGhpcy5wbGFuZTAyLnNjYWxlLnggPSB0aGlzLnBsYW5lMDIuc2NhbGUueSA9IDYwMC4wO1xuXG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSAxO1xuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy5vcGFjaXR5LnZhbHVlID0gMDtcblxuICAgIHRoaXMucGxhbmUwMi5wb3NpdGlvbi56ID0gLTE7XG5cbiAgICBnYi5pbi5zY2VuZS5zY2VuZS5hZGQoIHRoaXMucGxhbmUgKTtcbiAgICBnYi5pbi5zY2VuZS5zY2VuZS5hZGQoIHRoaXMucGxhbmUwMiApO1xuXG4gICAgLy8gdGhpcy5vblJlc2l6ZSgpO1xuICAgIC8vIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgICAvLyDjg4bjgq/jgrnjg4Hjg6PjgpJ1bmlmb3Jt5aSJ5pWw44Gr6L+95YqgXG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnRleHR1cmUudmFsdWUgPSB0ZXh0dXJlc1swXTtcbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMudGV4dHVyZTAxLnZhbHVlID0gdGV4dHVyZXNbMV07XG5cbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMudGV4dHVyZS52YWx1ZSA9IHRleHR1cmVzWzFdO1xuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3Jtcy50ZXh0dXJlMDEudmFsdWUgPSB0ZXh0dXJlc1sxXTtcblxuICAgIGNiKCk7XG5cbiAgfVxuXG4gIHNldFZpZGVvU2l6ZSgpIHtcblxuICAgIC8vIHZpZGVv44Gu44K744OD44OI44K144Kk44K6ICAgICAgICAgIFxuICAgIC8vIHRoaXMubGIgPSBuZXcgZ2IuTGF5b3V0QmFja2dyb3VuZCgkKCdib2R5JyksJCh0aGlzLnZpZGVvLnZpZGVvKSk7XG4gICAgLy8gdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0VHJhbnNwYXJlbnQodmFsKSB7XG5cbiAgICAvLyB0aGlzLnBsYW5lLm1hdGVyaWFsLm9wYWNpdHkgPSB2YWw7XG5cbiAgfVxuXG4gIHR3ZWVuVHJhbnNwYXJlbnQodGltZSx2YWwpIHtcblxuICAgIC8vIHZhciB0ID0gdGltZSB8fCAxLjA7XG4gICAgLy8gdmFyIHYgPSB2YWwudGFyZ2V0IHx8IDEuMDtcbiAgICAvLyB2YXIgZSA9IHZhbC5lYXNlIHx8IFBvd2VyMi5lYXNlT3V0O1xuXG4gICAgLy8gVHdlZW5NYXgudG8odGhpcy5wbGFuZS5tYXRlcmlhbCwgdCwge1xuICAgIC8vICAgb3BhY2l0eTogdixcbiAgICAvLyAgIGVhc2UgOiBlLFxuICAgIC8vIH0pO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cblxuXG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gICAgLy8gdmFyIHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAvLyB2YXIgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIC8vIHZhciByYXRlVyA9IHdpbmRvdy5pbm5lckhlaWdodCAvIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIC8vIHZhciByID0gdy9oO1xuXG4gICAgLy8gaWYgKHJhdGVXIDwgdGhpcy5yYXRlKSB7XG5cbiAgICAvLyAgIHRoaXMucGxhbmUuc2NhbGUuc2V0KHIqMC41OCxyKjAuNTgsciowLjU4KVxuXG4gICAgLy8gfSBlbHNlIHtcblxuICAgIC8vICAgLy8gbG9nKDIsc2NhbGVZKTtcblxuICAgIC8vICAgdGhpcy5wbGFuZS5zY2FsZS5zZXQoMSwxLDEpO1xuXG4gICAgLy8gfVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5ybS50b3RhbCArPSAxOyAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcbiAgICAkKHdpbmRvdykub24oJ29uU2VjdGlvbjA0UHJvZHVjdEltZycsIHRoaXMuY3JlYXRlLmJpbmQodGhpcywoKT0+e1xuICAgICAgLy9nYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICB9KSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9fZGV0YWlscy9QbGFuZS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGFyYW1cbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFtIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuZ3VpO1xuICAgIHRoaXMuanNvbiA9IHt9O1xuICAgIC8vIHRoaXMuYXBwTmFtZSA9IFwicGx1c01WXCI7XG5cbiAgICB2YXIgaXNGbGFnID0gdHJ1ZTtcblxuICAgIHRoaXMuY2xvY2sgPSB7XG4gICAgICBwcm9ncmVzczogMC41LFxuICAgIH1cblxuICAgIHRoaXMuem9vbWJsdXIgPSB7XG4gICAgICBzdHJlbmd0aDogNDYuMCxcbiAgICAgIHNpemU6IDg5LjAsXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2l0aW9uID0ge1xuICAgICAgcHJvZ3Jlc3M6IDAuMCxcbiAgICAgIHNpemU6IDAuMDQsXG4gICAgICB6b29tOiAzMCxcbiAgICAgIGNvbG9yU2VwYXJhdGlvbjogMC4zLFxuICAgICAgc3RyZW5ndGg6IDAuNixcbiAgICAgIHR3ZWVuOiAoKT0+e1xuXG4gICAgICAgIHZhciB2YWw7XG4gICAgICAgIGlmIChpc0ZsYWcpIHZhbCA9IDEuMDtcbiAgICAgICAgZWxzZSB2YWwgPSAwLjBcblxuICAgICAgICBpc0ZsYWcgPSAhaXNGbGFnO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLnBsYW5lMDIuc2hhZGVyLnVuaWZvcm1zLnByb2dyZXNzLCAyLjUsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5zZXR1cERhdGEoKTtcbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuXG4gIHNldHVwRGF0YSgpIHtcblxuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIGlmIChnYi5pbi5jb25mLlBBUkFNKSB7XG5cbiAgICB0aGlzLmd1aSA9IG5ldyBkYXQuR1VJKCk7XG4gICAgLy8gdGhpcy5ndWkgPSBuZXcgZGF0LkdVSSh7bG9hZDogdGhpcy5qc29ufSk7XG4gICAgdGhpcy5ndWkucmVtZW1iZXIodGhpcyk7XG4gICAgJChcIi5kZ1wiKS5jc3Moe3pJbmRleDo5OTk5OX0pO1xuXG4gICAgdmFyIGYxID0gdGhpcy5ndWkuYWRkRm9sZGVyKCd6b29tYmx1cicpO1xuICAgIGYxLmFkZCh0aGlzLnpvb21ibHVyLCAnc3RyZW5ndGgnLCAwLjAsIDIuMCkuc3RlcCgwLjAxKS5saXN0ZW4oKS5vbkNoYW5nZShmdW5jdGlvbih2YWwpe1xuXG4gICAgICBnYi5pbi5wbGFuZS5zaGFkZXJzWzJdLnVuaWZvcm1zLnN0cmVuZ3RoLnZhbHVlID0gdmFsO1xuICAgICAgbG9nKHZhbCk7XG5cbiAgICB9KTtcbiAgICBmMS5hZGQodGhpcy56b29tYmx1ciwgJ3NpemUnLCAwLjAsIDEwMC4wKS5zdGVwKDAuMSkubGlzdGVuKCkub25DaGFuZ2UoZnVuY3Rpb24odmFsKXtcblxuICAgICAgZ2IuaW4ucGxhbmUuc2hhZGVyLnVuaWZvcm1zLm5GcmFnLnZhbHVlID0gMSAvIHZhbDtcblxuICAgIH0pO1xuICAgIGYxLm9wZW4oKTtcblxuICAgIC8vIHRoaXMuZ3VpLmNsb3NlKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9QYXJhbS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUHJvZmlsZXJcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuU3RhdHM7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gaWYgKGdiLmluLmNvbmYuU1RBVFMpIHtcblxuICAgICAgdGhpcy5TdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgICAgdGhpcy5TdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgdGhpcy5TdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgICAgID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuU3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgICA9IFwiMHB4XCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuU3RhdHMuZG9tRWxlbWVudCk7XG4gICAgXG5cbiAgICAvLyB9O1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBpZih0aGlzLlN0YXRzKSB7XG4gICAgICB0aGlzLlN0YXRzLnVwZGF0ZSgpO1xuICAgIH1cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAuYWRkKCdwcm9maWxlcicsdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzL1Byb2ZpbGVyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMYXlvdXRcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FsZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLlNQQmFzZVcgPSAzNzU7XG4gICAgdGhpcy5QQ0Jhc2VXID0gMTMwMDtcblxuICAgIHRoaXMucmF0ZSA9IDE7XG4gICAgdGhpcy5XID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLiR0YXJnZXRMaXN0ID0gW1xuICAgICAge1xuICAgICAgICAnJHRhcmdldCc6ICQoJyNzaWRlTCwgI3NpZGVSLCAjbmF2JyksXG4gICAgICAgICdzY2FsZSc6ICdzcE9ubHknIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgJyR0YXJnZXQnOiAkKCcuc2VjdGlvbjAzX2RldGFpbCcpLFxuICAgICAgLy8gICAnc2NhbGUnOiAnYm90aCcgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAnJHRhcmdldCc6ICQoJy5zZWN0aW9uMDQnKSxcbiAgICAgIC8vICAgJ3NjYWxlJzogJ2JvdGgnIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgLy8gfSxcbiAgICBdXG5cbiAgICB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIFxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgdGhpcy5XID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5pVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdGhpcy5zY2FsZSgpO1xuICAgIHRoaXMud3JhcCgpO1xuXG4gIH1cblxuICAvLyDmi6HlpKdcbiAgc2NhbGUoKSB7XG5cbiAgICAvLyBicOOBruWgtOWQiOOBrnNjYWxlXG4gICAgaWYgKHRoaXMuaVcgPD0gZ2IuaW4uY29uZi5icCkge1xuXG4gICAgICAvLyB3aWR0aOOBi+OCiXJhdGXjgpLoqIjnrpdcbiAgICAgIC8vIHRoaXMucmF0ZSA9IGdiLmluLnUuZmxvYXRGb3JtYXQodGhpcy5XIC8gdGhpcy5TUEJhc2VXICwgMik7XG4gICAgICBpZiAodGhpcy5XID4gMzc1KSB0aGlzLlcgPSAzNzU7XG4gICAgICBpZiAodGhpcy5XIDwgMzIwKSB0aGlzLlcgPSAzMjA7XG4gICAgICBsb2codGhpcy5XKTtcbiAgICAgIHRoaXMucmF0ZSA9IHRoaXMuVyAvIHRoaXMuU1BCYXNlVztcblxuICAgICAgLy8gc2NhbGXjgZnjgovjg6rjgrnjg4jjgpLjg6vjg7zjg5dcbiAgICAgICQuZWFjaCh0aGlzLiR0YXJnZXRMaXN0LCAoaW5kZXgsIHZhbCk9PntcblxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdib3RoJyB8fCB2YWwuc2NhbGUgPT0gJ3NwT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgc2NhbGU6IHRoaXMucmF0ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gd2lkdGjjgYvjgolyYXRl44KS6KiI566XXG4gICAgICAvLyB0aGlzLnJhdGUgPSBnYi5pbi51LmZsb2F0Rm9ybWF0KHRoaXMuVyAvIHRoaXMuUENCYXNlVyAsIDIpO1xuICAgICAgaWYgKHRoaXMuVyA+IDEzMDApIHRoaXMuVyA9IDEzMDA7XG4gICAgICB0aGlzLnJhdGUgPSB0aGlzLlcgLyB0aGlzLlBDQmFzZVc7XG5cbiAgICAgIC8vIHNjYWxl44GZ44KL44Oq44K544OI44KS44Or44O844OXXG4gICAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnYm90aCcgfHwgdmFsLnNjYWxlID09ICdwY09ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLnJhdGUsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyDjgZPjgaHjgonjga7loLTlkIjjga/jgIFzY2FsZeOCkuaIu+OBmVxuICAgICAgICBpZiAodmFsLnNjYWxlID09ICdzcE9ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgfSk7ICBcblxuICAgIH1cblxuICB9XG5cbiAgLy8gc2NhbGXjgZfjgZ/jgonjgIHlhYPjga7lpKfjgY3jgZXliIbkvZnnmb3jgYzjgafjgY3jgovjga7jgadvdmVyZmxvdyBoaWRkZW7jgafmtojjgZlcbiAgd3JhcCgpIHtcblxuXG5cbiAgfVxuXG4gIHJlc2V0KCkge1xuXG4gICAgJC5lYWNoKHRoaXMuJHRhcmdldExpc3QsIChpbmRleCwgdmFsKT0+e1xuXG4gICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzonMCAwJyxcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfSk7XG5cblxuICAgIC8vIOOCpOODmeODs+ODiOino+mZpFxuICAgIGdiLmluLnIucmVtb3ZlKCdzY2FsZVRvcCcpO1xuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIHRoaXMucnVuKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdzY2FsZVRvcCcsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGVUb3AuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIEhvdmVyRWZmZWN0U05TU1BGb290ZXJcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdmVyRWZmZWN0U05TU1BGb290ZXIge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwLCAkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLiR3cmFwID0gJHdyYXA7XG4gICAgdGhpcy4kaW5uZXIgPSB0aGlzLiR3cmFwLmZpbmQoJy5pbm5lcicpO1xuICAgIHRoaXMuJHRhcmdldCA9IHRoaXMuJHdyYXAuZmluZCgnLnNucy5zcCAuaWNvblNoYXJlJyk7XG4gICAgdGhpcy4kYmFyID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5iYXInKTtcbiAgICB0aGlzLiRsaXN0ID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5saXN0Jyk7XG4gICAgdGhpcy4kaXRlbSA9IHRoaXMuJHdyYXAuZmluZCgnLnNucy5zcCAubGlzdCAuaXRlbScpO1xuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIHJlYWR5KCkge1xuXG4gICAgLy8gb3hcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kd3JhcCwge3dpZHRoOiAwfSlcblxuICAgIC8vIGJhclxuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRiYXIsIHt3aWR0aDogMH0pXG5cbiAgICAvLyBzbnNcbiAgICBUd2Vlbk1heC5zZXQodGhpcy4kaXRlbSwge3g6IC00MCwgb3BhY2l0eTogMH0pXG5cbiAgICB0aGlzLiRiYXIuc2hvdygpO1xuICAgIHRoaXMuJGxpc3Quc2hvdygpO1xuXG4gIH1cblxuICB0b2dnbGUoKSB7XG5cbiAgICBpZiAodGhpcy4kdGFyZ2V0Lmhhc0NsYXNzKCdvbicpKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgIHRoaXMub3BlbigpO1xuXG4gICAgfTtcblxuICAgIHRoaXMuJHRhcmdldC50b2dnbGVDbGFzcygnb24nKTtcblxuICB9XG5cbiAgb3BlbiAodGhhdCkge1xuXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJveCk7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJhcik7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGl0ZW0pO1xuXG4gICAgdGhpcy5yZWFkeSgpO1xuXG4gICAgLy8gYmFy44GM5Ly444Gz44KLXG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuXG4gICAgdGxcbiAgICAgIC8vIGJveOOBjOS8uOOBs+OCi1xuICAgICAgLnRvKHRoaXMuJHdyYXAsIDAuNCwge1xuICAgICAgICB3aWR0aDogMzMwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dFxuICAgICAgfSlcbiAgICAgIC50byh0aGlzLiRiYXIsIDAuMywge1xuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0LFxuICAgICAgfSwnLT0wLjInKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMCksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjInKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMSksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjI1JylcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDIpLCAwLjMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgzKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgIFxuICB9XG5cbiAgY2xvc2UgKHRoYXQpIHtcblxuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRib3gpO1xuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRiYXIpO1xuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0aGlzLiRpdGVtKTtcblxuICAgIC8vIGJhclxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGxcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDMpLCAwLjMsIHtcbiAgICAgICAgeDogLTQwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAgIH0pXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgyKSwgMC4zLCB7XG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMSksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMCksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgdGhpcy4kbGlzdC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kYmFyLCAwLjIsIHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0LFxuICAgICAgICBvbkNvbXBsZXRlOigpPT57XG4gICAgICAgICAgdGhpcy4kYmFyLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwnLT0wLjMnKVxuICAgICAgLnRvKHRoaXMuJHdyYXAsIDAuMywge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICB9LCctPTAuMycpXG5cbiAgfVxuXG4gIHJlc2V0KCkge1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuJHRhcmdldC5vZmYoJ2NsaWNrJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCkge1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldFxuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG5cbiAgICAvLyDjgrnjg57jg5vjga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIGlmICh0aGlzLmF1dG9UTCkge1xuICAgICAgdGhpcy5hdXRvVEwua2lsbCgpO1xuICAgICAgdGhpcy5hdXRvVEwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy50bDAyKSB0aGlzLnRsMDIua2lsbCgpO1xuICAgIHRoaXMudGwwMSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy50bDAxXG4gICAgICAgIC8vIOefouWNsOOCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCcuYXJyb3cucGMnKSwgMC40LCB7XG4gICAgICAgICAgc2NhbGVZOiAwLjY1LFxuICAgICAgICAgIHk6IDgsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAvLyDmloflrZfjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgnLnRleHQnKSwgMC40LCB7XG4gICAgICAgICAgeTogMzAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0sJy09MC4zNycpXG4gICAgICAgIFxuICB9XG5cbiAgb25MZWF2ZSAodGhhdCkge1xuXG4gICAgaWYgKHRoaXMudGwwMSkgdGhpcy50bDAxLmtpbGwoKTtcbiAgICB0aGlzLnRsMDIgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMudGwwMlxuICAgICAgLy8g5paH5a2X44KS5LiL44Gr5LiL44GS44KLXG4gICAgICAudG8oJCh0aGF0KS5maW5kKCcudGV4dCcpLCAwLjUsIHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMSxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dFxuICAgICAgfSlcbiAgICAgIC8vIOefouWNsOOCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgLnRvKCQodGhhdCkuZmluZCgnLmFycm93LnBjJyksIDAuNSwge1xuICAgICAgICBzY2FsZVk6IDEsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDEsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgIGlmICh0aGlzLmF1dG9UTCA9PSBudWxsKSB0aGlzLmF1dG9BcnJvdygpOyAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgICB9LCctPTAuNDUnKVxuXG4gIH1cblxuICBhdXRvQXJyb3coKSB7XG5cbiAgICB0aGlzLmF1dG9UTCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OiAtMX0pO1xuXG4gICAgdGhpcy5hdXRvVExcbiAgICAgIC50byh0aGlzLiR0YXJnZXQuZmluZCgnLmFycm93LnBjJyksIDAuNiwge1xuICAgICAgICB5OiA2MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZGVsYXk6IDUuMCxcbiAgICAgICAgc2NhbGVZOiAwLjMsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0pXG4gICAgICAuc2V0KHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwge3NjYWxlWTogMSx5OiAtNjB9KVxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwgMC41LCB7XG4gICAgICAgIHNjYWxlWTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZGVsYXk6IDAuMyxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSlcblxuICB9XG5cbiAgc2V0dXBGaXJzdCgpIHtcblxuICAgIFR3ZWVuTWF4LnNldCgkKCcuc2VjdGlvbjAxIC5uZXh0IC50ZXh0JyksIHt5OiAtNjAsb3BhY2l0eTowLHo6IDEsfSk7XG4gICAgVHdlZW5NYXguc2V0KCQoJy5zZWN0aW9uMDEgLm5leHQgc3ZnJyksIHt5OiAtMzAsb3BhY2l0eTowLHo6IDEsfSk7XG5cbiAgfVxuXG4gIHJ1bkZpcnN0KCkge1xuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgLy8g5paH5a2X44KS5LiL44Gr5LiL44GS44KLXG4gICAgICB0bC50bygkKCcuc2VjdGlvbjAxIC5uZXh0IC50ZXh0JyksIDEuNSwge1xuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKCcuc2VjdGlvbjAxIC5uZXh0IHN2ZycpLCAxLjAsIHtcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgejogMSxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuODInKVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uRW50ZXIuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge3NlbGYub25MZWF2ZS5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvdGVyYWd1Y2hpdG9rdWljaGkvRG9jdW1lbnRzL19TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dUb3AuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDYW52YXNcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0VudHJ5LmpzJztcbi8vIGltcG9ydCBDYW1lcmEgZnJvbSAnLi9VdGlscy9DYW1lcmEuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLm91dHB1dCA9IG9wdHMub3V0cHV0IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuXHRcdHRoaXMuY3ViZSA9IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSA9IHRoaXMuX2NyZWF0ZUNhbWVyYS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIgPSB0aGlzLl9jcmVhdGVSZW5kZXJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlT2JqZWN0ID0gdGhpcy5fY3JlYXRlT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcmJpdENvbnRyb2xzID0gdGhpcy5fb3JiaXRDb250cm9scy5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLlVwZGF0ZSA9IHRoaXMuX1VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLm9yYml0Q29udHJvbHMoKTtcblxuXHRcdHRoaXMuY3JlYXRlT2JqZWN0KCk7XG5cbiAgICB0aGlzLlVwZGF0ZSgpO1xuXG4gICAgLy/jg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4jnmbrngatcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0sIGZhbHNlKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOOCq+ODoeODqeS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZUNhbWVyYSgpe1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gLTMwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSA0MDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMzA7XG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKHRoaXMuc2NlbmUucG9zaXRpb24pO1xuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZyh0aGlzLnNjZW5lKTtcbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlXG5cdFx0fSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIHRoaXMub3V0cHV0LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cblxuXG4gIH1cblxuXG5cbiAgLyoqXG4gICAq44CA44K344O844Oz5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICB9XG5cblx0LyoqXG5cdCAq44CAT2JqZWN05L2c5oiQXG5cdCAqL1xuXHRfY3JlYXRlT2JqZWN0KCl7XG5cbiAgICB2YXIgY3ViZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDQsIDQpO1xuICAgIHZhciBjdWJlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IDB4MDAwMDAwLFxuICAgICAgd2lyZWZyYW1lOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmN1YmUgPSBuZXcgVEhSRUUuTWVzaChjdWJlR2VvbWV0cnksIGN1YmVNYXRlcmlhbCk7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnggPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi55ID0gMztcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueiA9IDM7XG5cbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmN1YmUpO1xuXG5cdH1cblxuICAvKipcbiAgICrjgIDmm7TmlrBcbiAgICovXG4gIF9VcGRhdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICB0aGlzLlVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIC8vIHRoaXMuY29udHJvbHMudXBkYXRlKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K6XG4gICAqL1xuICBfb25SZXNpemUoKSB7XG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG5cdC8qKlxuICAgKiDjgqvjg6Hjg6njgrPjg7Pjg4jjg63jg7zjg6tcblx0ICovXG5cdF9vcmJpdENvbnRyb2xzKCl7XG5cdFx0dGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhKTtcblx0XHR0aGlzLmNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xuXHRcdHZhciBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuXG5cdFx0dmFyIGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcblx0XHR0aGlzLmNvbnRyb2xzLnVwZGF0ZShkZWx0YSk7XG4gIH1cblxuXHRzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3RlcmFndWNoaXRva3VpY2hpL0RvY3VtZW50cy9fU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9WaXN1YWwvQ2FudmFzLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRW50cnlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuLy8gd2luZG93LlRIUkVFID0gcmVxdWlyZSgnLi4vbGlicy90aHJlZS5taW4uanMnKTtcbnJlcXVpcmUoJy4uL2xpYnMvT3JiaXRDb250cm9scy5qcycpO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0LyoqXG5cdCAqIOWIneacn+WMllxuXHQgKi9cblx0aW5pdCgpe1xuXG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRW50cnkuanMiLCIvKipcbiAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG4gKi9cblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcblxuVEhSRUUuT3JiaXRDb250cm9scyA9IGZ1bmN0aW9uICggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXG5cdHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXG5cdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdHRoaXMubWluWm9vbSA9IDA7XG5cdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cblx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gSWYgc2V0LCBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIHRoZSBpbnRlcnZhbCBbIC0gTWF0aC5QSSwgTWF0aC5QSSBdLlxuXHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG5cdC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuXHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcblx0dGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcblxuXHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB6b29taW5nXG5cdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG5cdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHJvdGF0aW5nXG5cdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcblx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXG5cdHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcblx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuXHQvLyBJZiBhdXRvLXJvdGF0ZSBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuXHR0aGlzLmVuYWJsZUtleXMgPSB0cnVlO1xuXG5cdC8vIFRoZSBmb3VyIGFycm93IGtleXNcblx0dGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcblxuXHQvLyBNb3VzZSBidXR0b25zXG5cdHRoaXMubW91c2VCdXR0b25zID0geyBPUkJJVDogVEhSRUUuTU9VU0UuTEVGVCwgWk9PTTogVEhSRUUuTU9VU0UuTUlERExFLCBQQU46IFRIUkVFLk1PVVNFLlJJR0hUIH07XG5cblx0Ly8gZm9yIHJlc2V0XG5cdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblx0dGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cblx0Ly9cblx0Ly8gcHVibGljIG1ldGhvZHNcblx0Ly9cblxuXHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnBoaTtcblxuXHR9O1xuXG5cdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xuXG5cdH07XG5cblx0dGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHNjb3BlLnRhcmdldC5jb3B5KCBzY29wZS50YXJnZXQwICk7XG5cdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHNjb3BlLnBvc2l0aW9uMCApO1xuXHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cblx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9O1xuXG5cdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuXHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cblx0XHR2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG5cblx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblxuXHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cblx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblx0XHRcdHNwaGVyaWNhbC5zZXRGcm9tVmVjdG9yMyggb2Zmc2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRyb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuXHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KCBzY29wZS5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSApICk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucGhpID0gTWF0aC5tYXgoIHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpICkgKTtcblxuXHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heCggc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKCBzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cyApICk7XG5cblx0XHRcdC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuXHRcdFx0c2NvcGUudGFyZ2V0LmFkZCggcGFuT2Zmc2V0ICk7XG5cblx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKCBzcGhlcmljYWwgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG5cdFx0XHRwb3NpdGlvbi5jb3B5KCBzY29wZS50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG5cdFx0XHRzY29wZS5vYmplY3QubG9va0F0KCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY2FsZSA9IDE7XG5cdFx0XHRwYW5PZmZzZXQuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdC8vIHVwZGF0ZSBjb25kaXRpb24gaXM6XG5cdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcblx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuXG5cdFx0XHRpZiAoIHpvb21DaGFuZ2VkIHx8XG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggc2NvcGUub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgfHxcblx0XHRcdFx0OCAqICggMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApO1xuXHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cblxuXHR9O1xuXG5cdC8vXG5cdC8vIGludGVybmFsc1xuXHQvL1xuXG5cdHZhciBzY29wZSA9IHRoaXM7XG5cblx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXHR2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuXHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cblx0dmFyIFNUQVRFID0geyBOT05FIDogLSAxLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xuXG5cdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0dmFyIEVQUyA9IDAuMDAwMDAxO1xuXG5cdC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG5cdHZhciBzcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cdHZhciBzcGhlcmljYWxEZWx0YSA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblxuXHR2YXIgc2NhbGUgPSAxO1xuXHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0dmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVMZWZ0KCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVVcCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG5cblx0fVxuXG5cdHZhciBwYW5MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDAgKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR2YXIgcGFuVXAgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDEgKTsgLy8gZ2V0IFkgY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG5cdHZhciBwYW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuXHRcdFx0XHQvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cblx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG5cdFx0XHRcdC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcblx0XHRcdFx0cGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcblx0XHRcdFx0cGFuTGVmdCggZGVsdGFYICogKCBzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudFdpZHRoLCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCBkZWx0YVkgKiAoIHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0ZnVuY3Rpb24gZG9sbHlJbiggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkb2xseU91dCggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUm90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Eb2xseScgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVEb2xseScgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlV2hlZWwnICk7XG5cblx0XHRpZiAoIGV2ZW50LmRlbHRhWSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuZGVsdGFZID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xuXG5cdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRwYW4oIDAsIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcblx0XHRcdFx0cGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdHBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG5cdFx0XHRcdHBhbiggLSBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0UGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZURvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBoYW5kbGVycyAtIEZTTTogbGlzdGVuIGZvciBldmVudHMgYW5kIHJlc2V0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZU1vdXNlVXAoIGV2ZW50ICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSB8fCAoIHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUgKSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApOyAvLyBub3Qgc3VyZSB3aHkgdGhlc2UgYXJlIGhlcmUuLi5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVLZXlzID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlS2V5RG93biggZXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOlx0Ly8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZVRvdWNoRW5kKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Db250ZXh0TWVudSggZXZlbnQgKSB7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdH1cblxuXHQvL1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG5cblx0dGhpcy51cGRhdGUoKTtcblxufTtcblxuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRIUkVFLk9yYml0Q29udHJvbHM7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBUSFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xuXG5cdGNlbnRlcjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5jZW50ZXIgaGFzIGJlZW4gcmVuYW1lZCB0byAudGFyZ2V0JyApO1xuXHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0O1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdG5vWm9vbToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVab29tO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9Sb3RhdGU6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVJvdGF0ZTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUm90YXRlID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUGFuOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVQYW47XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVBhbiA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub0tleXM6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlS2V5cztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVLZXlzID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdHN0YXRpY01vdmluZyA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlRGFtcGluZztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVEYW1waW5nID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdGR5bmFtaWNEYW1waW5nRmFjdG9yIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYW1waW5nRmFjdG9yO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuXG5cdFx0fVxuXG5cdH1cblxufSApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy90ZXJhZ3VjaGl0b2t1aWNoaS9Eb2N1bWVudHMvX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiXSwic291cmNlUm9vdCI6IiJ9