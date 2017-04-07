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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTgyYjY5OGIxMTgyYmYxZDA2ZTIiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1RvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9Db21tb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvbmYuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0RhdGEvU291bmQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9VdGlsLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRnVuYy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1JlYWR5UGVyY2VudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Jlc2l6ZU1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Njcm9sbE1nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL01vdXNlTWdyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0xvYWRNZ3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvWW91dHViZUZvclNlYzAxLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRGlzcGxheS9MYXlvdXQvRnVsbFNpemUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvVUkvVG9wVGltZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9KdWRnZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL19ldmVudHMvUmVzcG9uc2l2ZVN3aXRjaEltZy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Td2lwZVRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU2Nyb2xsVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9TbnMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9lanMvaW5jL21ldGFEYXRhLmpzb24iLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TaXplLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9TaXplL1NjYWxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9Qb3N0aW9uL1Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9QYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzL0VmZmVjdHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNMb29wLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvX2RldGFpbHMvQ2FudmFzLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9HbENvbnRlbnRzLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHNMb29wLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHNUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1NvbWV0aW1lc01nci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9fZGV0YWlscy9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzL1BhcmFtLmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvUHJvZmlsZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2NhbGVUb3AuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U05TU1BGb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U1ZHQXJyb3dUb3AuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1Zpc3VhbC9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0VudHJ5LmpzIiwid2VicGFjazovLy8vVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL2xpYnMvT3JiaXRDb250cm9scy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJnYiIsInVuZGVmaW5lZCIsImluIiwiY29tbW9uIiwibWFpbiIsIkNvbW1vbiIsIm9uSW1tZWRpYXRlIiwic2V0RXZlbnRzIiwiY29uZiIsInUiLCJmIiwiJCIsImRvY3VtZW50Iiwib24iLCJvblJlYWR5IiwiYmluZCIsIm9uTG9hZCIsIkNvbmYiLCJSRUxFQVNFIiwiRkxHIiwiTE9HIiwiUEFSQU0iLCJTVEFUUyIsImRlZlciLCJkZWZIIiwiVyIsIkgiLCJzcFciLCJzcEgiLCJicCIsIm1vZGUiLCJrZXlzIiwic3dpdGNoTW9kZSIsInNvdW5kRGF0YSIsInNlYzAySW1nTnVtIiwieW91dHViZUlEMDEiLCJ5b3V0dWJlSUQwMiIsIndlYkZvbnRMb2FkZWQiLCJpIiwia2V5IiwibGVuIiwicGFyYW0iLCJyZWYiLCJyZWYxIiwidmFsdWUiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJzcGxpdCIsImxlbmd0aCIsImoiLCJvYmoiLCJrIiwidmFsIiwiU291bmREYXRhIiwiVXRpbCIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJhcHBWIiwiYXBwVmVyc2lvbiIsImlzUmVzU1AiLCJpc1Jlc1BDIiwiaXNQQyIsImlzU1AiLCJpc1RBQiIsImlzTUIiLCJpc0lFIiwiaXNTZXRTUFNpemUiLCJzdGFydFRpbWUiLCJlbGFwc2VkVGltZSIsIm5vdyIsIkRhdGUiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtaW4xIiwibWF4MSIsIm1pbjIiLCJtYXgyIiwiaGl0IiwicmFuZ2UiLCJudW0iLCJyZXNNaW4iLCJyZXNNYXgiLCJiYXNlTWluIiwiYmFzZU1heCIsInAiLCJuIiwicG9zIiwiU3RyaW5nIiwiaW5kZXhPZiIsInN1YnN0ciIsIm51bWVyYXRvciIsImRlbm9taW5hdG9yIiwicmFkaWFucyIsIlBJIiwiYW5nbGUiLCJwMSIsInAyIiwic3FydCIsInBvdyIsIngiLCJ5IiwiYXJyIiwic29ydCIsImEiLCJiIiwiYXJ5Iiwic2xpY2UiLCJ0IiwiQXJyYXkiLCJwdXNoIiwic2h1ZmZsZUFyeSIsImwiLCJsZW4xIiwibmV3QXJyIiwicGFyYSIsImRlc2MiLCJsaXN0IiwicmV0dXJuS2V5IiwiZ2V0VGltZSIsImZsZyIsImNzcyIsIm1lZGlhIiwicGF0dGVybiIsIlJlZ0V4cCIsImpvaW4iLCJ0ZXN0IiwiYWRkQ2xhc3MiLCJpc0lwYWQiLCJpc0FuZHJvaWQiLCJwbGF0Zm9ybSIsImlzSW9zIiwibXNpZSIsInBhcnNlSW50IiwibWF0Y2giLCJpc0llMTBVbmRlciIsImxvZyIsImlzSUUxMSIsInJlbW92ZUNsYXNzIiwidmVyc2lvbiIsInBhcnNlRmxvYXQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ1cmwiLCJocmVmIiwicGFyYW1JdGVtcyIsInBhcmFtSXRlbSIsImhhc2giLCJjb29raWUiLCJpc0NvbnRhaW4iLCJyIiwiZyIsInN0ciIsInRvU3RyaW5nIiwiY29udGFpbiIsIm51bWJlciIsIl9wb3ciLCJyb3VuZCIsInJlcyIsIm9yZyIsImRlc3QiLCJiZWZvcmUiLCJhZnRlciIsImdldE5vdyIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWlsbFNlY29uZCIsImdldE1pbGxpc2Vjb25kcyIsImdldERhdGUiLCJtb250aGRheXMiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwid2Vla0RheUpQIiwid0RKIiwiZ2V0RGF5Iiwid2Vla0RheUVOIiwid0RFIiwiZGF0ZSIsIk51bWJlciIsImlnbm9yZUFycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIiR0YXJnZXQiLCIkaW1nIiwiZWFjaCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJhdHRyIiwidHJpZ2dlciIsInNlbGYiLCJlIiwicHJldmVudERlZmF1bHQiLCJvZmYiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsImtleUNvZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsIm9udG91Y2htb3ZlIiwib25rZXlkb3duIiwicHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZ1bmMiLCJibGFuayIsImRlYnVnZ2VyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZXhwYW5kalF1ZXJ5IiwibWV0aG9kcyIsImNvbnNvbGUiLCJtIiwicHJlcGVuZCIsIkZQUyIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiY2xlYXJUaW1lb3V0IiwialF1ZXJ5IiwiZm4iLCJleHRlbmQiLCJhZGp1c3QiLCJhZGp1c3RXIiwiYWRqdXN0SCIsIkNTUyIsInN1cHBvcnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidiIsImlzQW5kcm9pZFZlcnNpb24iLCJhbGVydCIsIlJlYWR5TWdyIiwiY29tcGxldGVkIiwidG90YWwiLCJjdXJyZW50Iiwib25Db21wbGV0ZWRGdW5jIiwicmVhZHlQZXJjZW50IiwidXAiLCJyZW1vdmUiLCJ1cGRhdGUiLCJzZXR1cCIsIlJlYWR5UGVyY2VudCIsIiRsb2FkaW5nIiwiJGJhciIsIiRwZXJjZW50IiwiaXNMb2NrIiwic2V0VGltZW91dExvY2siLCJ0YXJnZXQiLCJybSIsInRleHQiLCJvbkNvbXBsZXRlIiwiVHdlZW5NYXgiLCJ0byIsInNjYWxlIiwib3BhY2l0eSIsImVhc2UiLCJQb3dlcjMiLCJlYXNlSW5PdXQiLCJVcGRhdGVNZ3IiLCJjbnQiLCJ1cGRhdGVMaXN0IiwiVGltZXIiLCJpc1N0b3AiLCJuYW1lIiwiZnVuYyIsImFyclJlbW92ZSIsImxvb3AiLCJjaGVjayIsInNwbGljZSIsIlJlc2l6ZU1nciIsInJlc2l6ZUxpc3QiLCJ3cyIsIm9sZFciLCJvbGRIIiwib25SZXNpemUiLCJnZXRXaW5kb3dTaXplIiwiU2Nyb2xsTWdyIiwic2Nyb2xsTGlzdCIsInNjcm9sbEVuZExpc3QiLCJzdCIsInNiIiwic3YiLCJTVEFtb3VudCIsIm9mZnNldCIsImlzU3RhcnQiLCJlbmQiLCJzY3JvbGxUb3AiLCJkZWx0YSIsImRlbHRhWCIsImRlbHRhWSIsImlzV2luIiwiaXNGRiIsInNjcm9sbExlZnQiLCJvblNjcm9sbCIsIm9uTW91c2VXaGVlbCIsIk1vdXNlTWdyIiwiY3giLCJjeSIsIm1vdXNlTW92ZUxpc3QiLCJtb3VzZU1vdmVTdGFydExpc3QiLCJtb3VzZU1vdmVFbmRMaXN0IiwiZW5kVGltZSIsIm9uRW5kIiwib3JpZ2luYWxFdmVudCIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIm9mZnNldFgiLCJsZWZ0IiwidG9wIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNobW92ZSIsIm9uTW91c2Vtb3ZlIiwiTG9hZE1nciIsImxvYWRlciIsImNiIiwieW91dHViZUlmcmFtZVNjcmlwdCIsImxvYWRTZWMwMkltZyIsInBhdGgiLCJjYjAyIiwiaW1nIiwic2hhZGVycyIsInNoYWRlckxvYWRMaXN0IiwiWm9vbUJsdXIiLCJUcmFuc2l0aW9uMDIiLCJzaGFkZXJTZXJpYWxMb2FkIiwic2hhZGVyIiwibG9hZCIsImNvbXAiLCJzZWN0aW9uMDRQcm9kdWN0SW1nIiwidGV4dHVyZUxpc3QiLCJ0ZXh0dXJlcyIsInRleHR1cmVTZXJpYWxMb2FkIiwidGV4dHVyZSIsIlRIUkVFIiwiSW1hZ2VVdGlscyIsImxvYWRUZXh0dXJlIiwiY29uZmlnIiwiY3VzdG9tIiwiZmFtaWxpZXMiLCJ1cmxzIiwiYWN0aXZlIiwid2ViRm9udCIsIkxvYWRlciIsInNyYyIsImdldEpTT04iLCJkYXRhIiwibnRoIiwiSW1hZ2UiLCJhZGQwIiwib25sb2FkIiwiaW1nTnVtIiwiZWxtIiwiaXNMb2FkIiwidmlkZW8iLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInN1cHBvcnRWaWRlb0V4dCIsInBsYXkiLCJ0YWciLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm9uWW91VHViZUlmcmFtZVJlYWR5IiwiZXh0IiwiY2FuUGxheVR5cGUiLCJ3ZiIsImFzeW5jIiwicyIsImFnYWluIiwiV2ViRm9udCIsIm9uTG9hZGVkIiwiU2VjMDFWaWRlbyIsIllvdXR1YmVGb3JTZWMwMSIsImlkIiwidmlkZW9JRCIsInZpZGVvTGlzdCIsInBsYXllciIsImlzRmlyc3QiLCJpc1NlZWtMb2NrIiwiaXNTZWVrTG9jazAyIiwiWVQiLCJQbGF5ZXIiLCJ2aWRlb0lkIiwiZXZlbnRzIiwib25QbGF5ZXJTdGF0ZUNoYW5nZSIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwic2hvd2luZm8iLCJhdXRvaGlkZSIsInJlbCIsImVuYWJsZWpzYXBpIiwiaXZfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJtb2Rlc3RicmFuZGluZyIsInN0YXJ0IiwidGFyZ2V0RGVmVyIsInRhcmdldERlZkgiLCJydW4iLCJzZXRQbGF5YmFja1F1YWxpdHkiLCJ0aW1lIiwic2VjMDFWaWRlbyIsInBsYXlCeU5ZVGltZSIsInN0YXR1cyIsIlBsYXllclN0YXRlIiwiRU5ERUQiLCJwbGF5VmlkZW8iLCJQTEFZSU5HIiwiQ1VFRCIsImlzU2FmYXJpIiwiQlVGRkVSSU5HIiwic2Vla1RvIiwiZ2V0Q3VycmVudFRpbWUiLCJueUgiLCJvblNlZWsiLCJGdWxsU2l6ZSIsIiRXcmFwIiwiJFRhcmdldCIsIiR3cmFwIiwidGFyZ2V0VyIsInRhcmdldEgiLCJyYXRpb1ciLCJyYXRpbyIsIm1sIiwibXQiLCJnZXQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldERlZiIsInNldFN0eWxlIiwiZ2V0U2l6ZSIsInNldFBvcyIsIlRvcFRpbWUiLCIkaDAxIiwiZmluZCIsIiRoMDIiLCIkbTAxIiwiJG0wMiIsImlzQWxlcnQiLCJkaXMiLCJ0bCIsIlRpbWVsaW5lTWF4IiwicmVwZWF0Iiwic2V0IiwiUG93ZXIyIiwiSnVkZ2VFbnZpcm9ubWVudCIsImlzRGV2aWNlU1AiLCJpc0RldmljZVRBQiIsImlzRGV2aWNlTUIiLCJpc0RldmljZVBDIiwiaXNJRVZlcnNpb24iLCJpc0RpcmVjdGlvbiIsImlzUmVzcG9uc2l2ZSIsIlJlc3BvbnNpdmVTd2l0Y2hJbWciLCJpc1BDTG9jayIsImlzU1BMb2NrIiwiaW5kZXgiLCJlbCIsInN0clJlcGxhY2UiLCJoYXNDbGFzcyIsInNldEltZ1NQU2l6ZSIsIm5vdCIsIlN3aXBlVHJhbnNpdGlvbiIsIiRzdGFydFdyYXAiLCIkZW5kV3JhcCIsInBhZ2VMaXN0Iiwib2xkIiwibmV4dCIsInByZXYiLCJzWCIsIm1YIiwiZVgiLCJtaW5EaXMiLCJzVCIsImVUIiwibWluVCIsIm9uVG91Y2hMb25nIiwib25Ub3VjaFN0YXJ0Q0IiLCJvblRvdWNoRW5kQ0IiLCJzWSIsIm1ZIiwiZVkiLCJhYnNEaXMiLCJhYnMiLCJwamF4IiwiTGF5b3V0Iiwic2l6ZSIsInJhdGUiLCJjYWxjdWxhdGVPcmRlciIsInBhZ2VOYW1lIiwiZmlsdGVyIiwiaXNOb3RUb3VjaCIsImRpciIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJTY3JvbGxUcmFuc2l0aW9uIiwiaXNTd2l0Y2giLCJpc1BqYXhMb2NrIiwibWVudSIsImlzT3BlbiIsInN3aXRjaCIsIlNucyIsIiRmYiIsIiR0dyIsIiRsaW5lIiwiJG1haWwiLCJmYiIsInRpdCIsImVuY29kZVVSSUNvbXBvbmVudCIsImh0bWwiLCJkZXMiLCJ0dyIsImxpbmUiLCJkIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkIiwib3BlbldpbmRvdyIsImFkZHJlc3MiLCJzdWIiLCJib2R5Iiwic2NyZWVuIiwib3BlbiIsImp1bXBGQiIsImp1bXBUVyIsImp1bXBMSU5FIiwib25TZW5kTWFpbCIsInBvc2l0aW9uIiwiU2l6ZSIsIlNjYWxlIiwiU1BCYXNlVyIsIlBDQmFzZVciLCIkdGFyZ2V0TGlzdCIsImlXIiwid3JhcCIsIlBvc2l0aW9uIiwic2V0Q2VudGVyIiwiTWFpbiIsInBhZ2UiLCJEaXNwbGF5VG9wIiwiY2FudmFzIiwib3V0cHV0IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0IiwiRWZmZWN0cyIsImdsIiwiZG9tIiwic3RhdGUiLCJkZWJ1ZyIsIkNWQ29udGVudHMiLCJ0aW1lbGluZSIsInRsTWFpbiIsInBhdXNlIiwiQ1ZDb250ZW50c0xvb3AiLCJpc0Fsd2F5cyIsImlzUnVuU3RhdHVzIiwiaXNBZGp1c3RQYXJhbSIsInNvbWV0aW1lc1N0YXRlIiwibG9vcExpc3QiLCJsb29wU3RhcnQiLCJydW5BbHdheXMiLCJydW5TdGF0dXMiLCJydW5BZGp1c3RQYXJhbSIsImRyYXciLCJDVkNvbnRlbnRzVGltZWxpbmUiLCJiZWdpbm5pbmciLCJzdGVwMDEiLCJzdGVwMDIiLCJzdGVwMDMiLCJzdGFuZEJ5Iiwic29tZXRpbWVzIiwiQ3JlYXRlQ2FudmFzIiwiYyIsImN3IiwiY2giLCJmaWxsU3R5bGUiLCJpc1Jlc2l6ZSIsInNldENhbnZhc1NpemUiLCJhcHBlbmQiLCJ2eCIsIm9mZnNldEZyYW1lIiwib2Zmc2V0VngiLCJ4TnVtIiwieU51bSIsInRpbGVMaXN0IiwidGlsZSIsImN0eCIsImZpbGxSZWN0IiwiYWRkT2JqZWN0cyIsImNudFN0b3AiLCJTZWMwMkJnIiwiQ2FudmFzIiwiZ2V0Q29udGV4dCIsIlBsYW5lIiwic3Ryb2tlU3R5bGUiLCJvcCIsImNyZWF0ZSIsImZyYW1lU3RhcnQiLCJpbWdMaXN0IiwiZHJhd0ltYWdlIiwiR2xDb250ZW50cyIsInJlbmRlcmVyIiwiY2FtZXJhIiwic2NlbmUiLCJsaWdodCIsImFkanVzdFBhcmFtIiwic3RhdGVMaW5lUm90YXRlIiwiaXNDb250cm9sIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiZG9tRWxlbWVudCIsIlNjZW5lIiwiQ2FtZXJhIiwiRGlyZWN0aW9uYWxMaWdodCIsInoiLCJsb2FkTWdyIiwic2VjdGlvbjA0UHJvZHVjdFNoYWRlciIsInBsYW5lIiwiVHJhY2tiYWxsQ29udHJvbHMiLCJ6b29tU3BlZWQiLCJyb3RhdGVTcGVlZCIsIlByb2ZpbGVyIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImN1ciIsIm9uQ2hhbmdlRnVuY0xpc3QiLCJvblNlY3Rpb24wNCIsIkdsQ29udGVudHNMb29wIiwiU2VjdGlvbjA0UHJvZHVjdCIsInVwZGF0ZUNvbnRyb2xsIiwicmVuZGVyIiwiR2xDb250ZW50c1RpbWVsaW5lIiwidW5pZm9ybXMiLCJzdHJlbmd0aCIsIkV4cG8iLCJvblN0YXJ0IiwiZWFzZUluIiwiZWFzZU91dCIsImZyb20iLCJwbGFuZTAyIiwibWF0ZXJpYWwiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsInZzIiwiZnJhZ21lbnRTaGFkZXIiLCJmcyIsInRyYW5zcGFyZW50IiwicHJvZ3Jlc3MiLCJvblJlc2l6c2UiLCJTb21lVGltZXMiLCJjYkxpc3QiLCJvcmRlciIsImxhdGVyIiwiZ2VvbWV0cnkiLCJkZWZXVyIsImRlZkhIIiwicmF0ZVciLCJsYiIsImltYWdlIiwiUGxhbmVHZW9tZXRyeSIsIk1lc2giLCJ0ZXh0dXJlMDEiLCJQYXJhbSIsImd1aSIsImpzb24iLCJpc0ZsYWciLCJjbG9jayIsInpvb21ibHVyIiwidHJhbnNpdGlvbiIsInpvb20iLCJjb2xvclNlcGFyYXRpb24iLCJ0d2VlbiIsIlBvd2VyNCIsInNldHVwRGF0YSIsImRhdCIsIkdVSSIsInJlbWVtYmVyIiwiekluZGV4IiwiZjEiLCJhZGRGb2xkZXIiLCJzdGVwIiwibGlzdGVuIiwib25DaGFuZ2UiLCJuRnJhZyIsIlN0YXRzIiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsIkhvdmVyRWZmZWN0U05TU1BGb290ZXIiLCIkaW5uZXIiLCIkbGlzdCIsIiRpdGVtIiwic2hvdyIsImNsb3NlIiwidG9nZ2xlQ2xhc3MiLCJ0aGF0Iiwia2lsbFR3ZWVuc09mIiwiJGJveCIsInJlYWR5IiwiZXEiLCJoaWRlIiwidG9nZ2xlIiwiSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCIsImlzSG92ZXIiLCJhdXRvVEwiLCJraWxsIiwidGwwMiIsInRsMDEiLCJzY2FsZVkiLCJhdXRvQXJyb3ciLCJkZWxheSIsIm9uRW50ZXIiLCJvbkxlYXZlIiwib3B0cyIsImN1YmUiLCJjcmVhdGVDYW1lcmEiLCJfY3JlYXRlQ2FtZXJhIiwiY3JlYXRlUmVuZGVyZXIiLCJfY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVTY2VuZSIsIl9jcmVhdGVTY2VuZSIsImNyZWF0ZU9iamVjdCIsIl9jcmVhdGVPYmplY3QiLCJvcmJpdENvbnRyb2xzIiwiX29yYml0Q29udHJvbHMiLCJfb25SZXNpemUiLCJVcGRhdGUiLCJfVXBkYXRlIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJsb29rQXQiLCJWZWN0b3IzIiwiYWxwaGEiLCJzdGVuY2lsIiwiZGVwdGgiLCJwcmVtdWx0aXBsaWVkQWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImN1YmVHZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwiY3ViZU1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsIndpcmVmcmFtZSIsIk9yYml0Q29udHJvbHMiLCJhdXRvUm90YXRlIiwiQ2xvY2siLCJnZXREZWx0YSIsInJlcXVpcmUiLCJFbnRyeSIsIm9iamVjdCIsImVuYWJsZWQiLCJtaW5EaXN0YW5jZSIsIm1heERpc3RhbmNlIiwiSW5maW5pdHkiLCJtaW5ab29tIiwibWF4Wm9vbSIsIm1pblBvbGFyQW5nbGUiLCJtYXhQb2xhckFuZ2xlIiwibWluQXppbXV0aEFuZ2xlIiwibWF4QXppbXV0aEFuZ2xlIiwiZW5hYmxlRGFtcGluZyIsImRhbXBpbmdGYWN0b3IiLCJlbmFibGVab29tIiwiZW5hYmxlUm90YXRlIiwiZW5hYmxlUGFuIiwia2V5UGFuU3BlZWQiLCJhdXRvUm90YXRlU3BlZWQiLCJlbmFibGVLZXlzIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJCT1RUT00iLCJtb3VzZUJ1dHRvbnMiLCJPUkJJVCIsIk1PVVNFIiwiWk9PTSIsIk1JRERMRSIsIlBBTiIsInRhcmdldDAiLCJjbG9uZSIsInBvc2l0aW9uMCIsInpvb20wIiwiZ2V0UG9sYXJBbmdsZSIsInNwaGVyaWNhbCIsInBoaSIsImdldEF6aW11dGhhbEFuZ2xlIiwidGhldGEiLCJyZXNldCIsInNjb3BlIiwiY29weSIsImRpc3BhdGNoRXZlbnQiLCJjaGFuZ2VFdmVudCIsIlNUQVRFIiwiTk9ORSIsInF1YXQiLCJRdWF0ZXJuaW9uIiwic2V0RnJvbVVuaXRWZWN0b3JzIiwicXVhdEludmVyc2UiLCJpbnZlcnNlIiwibGFzdFBvc2l0aW9uIiwibGFzdFF1YXRlcm5pb24iLCJhcHBseVF1YXRlcm5pb24iLCJzZXRGcm9tVmVjdG9yMyIsInJvdGF0ZUxlZnQiLCJnZXRBdXRvUm90YXRpb25BbmdsZSIsInNwaGVyaWNhbERlbHRhIiwibWFrZVNhZmUiLCJyYWRpdXMiLCJwYW5PZmZzZXQiLCJzZXRGcm9tU3BoZXJpY2FsIiwiem9vbUNoYW5nZWQiLCJkaXN0YW5jZVRvU3F1YXJlZCIsIkVQUyIsImRvdCIsInF1YXRlcm5pb24iLCJkaXNwb3NlIiwib25Db250ZXh0TWVudSIsIm9uTW91c2VEb3duIiwib25Ub3VjaE1vdmUiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm9uS2V5RG93biIsInN0YXJ0RXZlbnQiLCJlbmRFdmVudCIsIlJPVEFURSIsIkRPTExZIiwiVE9VQ0hfUk9UQVRFIiwiVE9VQ0hfRE9MTFkiLCJUT1VDSF9QQU4iLCJTcGhlcmljYWwiLCJyb3RhdGVTdGFydCIsIlZlY3RvcjIiLCJyb3RhdGVFbmQiLCJyb3RhdGVEZWx0YSIsInBhblN0YXJ0IiwicGFuRW5kIiwicGFuRGVsdGEiLCJkb2xseVN0YXJ0IiwiZG9sbHlFbmQiLCJkb2xseURlbHRhIiwiZ2V0Wm9vbVNjYWxlIiwicm90YXRlVXAiLCJwYW5MZWZ0IiwiZGlzdGFuY2UiLCJvYmplY3RNYXRyaXgiLCJzZXRGcm9tTWF0cml4Q29sdW1uIiwibXVsdGlwbHlTY2FsYXIiLCJwYW5VcCIsInBhbiIsImVsZW1lbnQiLCJ0YXJnZXREaXN0YW5jZSIsInRhbiIsImZvdiIsIm1hdHJpeCIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInJpZ2h0IiwiYm90dG9tIiwid2FybiIsImRvbGx5SW4iLCJkb2xseVNjYWxlIiwiZG9sbHlPdXQiLCJoYW5kbGVNb3VzZURvd25Sb3RhdGUiLCJoYW5kbGVNb3VzZURvd25Eb2xseSIsImhhbmRsZU1vdXNlRG93blBhbiIsImhhbmRsZU1vdXNlTW92ZVJvdGF0ZSIsInN1YlZlY3RvcnMiLCJoYW5kbGVNb3VzZU1vdmVEb2xseSIsImhhbmRsZU1vdXNlTW92ZVBhbiIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZVdoZWVsIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZVRvdWNoU3RhcnRSb3RhdGUiLCJ0b3VjaGVzIiwiaGFuZGxlVG91Y2hTdGFydERvbGx5IiwiZHgiLCJkeSIsImhhbmRsZVRvdWNoU3RhcnRQYW4iLCJoYW5kbGVUb3VjaE1vdmVSb3RhdGUiLCJoYW5kbGVUb3VjaE1vdmVEb2xseSIsImhhbmRsZVRvdWNoTW92ZVBhbiIsImhhbmRsZVRvdWNoRW5kIiwiYnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiRXZlbnREaXNwYXRjaGVyIiwiY29uc3RydWN0b3IiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiY2VudGVyIiwibm9ab29tIiwibm9Sb3RhdGUiLCJub1BhbiIsIm5vS2V5cyIsInN0YXRpY01vdmluZyIsImR5bmFtaWNEYW1waW5nRmFjdG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDOUJBOzs7O0FBQ0E7Ozs7OztBQVRBOzs7Ozs7OztBQVdBLEVBQUMsWUFBSTs7QUFFSDtBQUNBLE9BQUlBLE9BQU9DLEVBQVAsS0FBWUMsU0FBaEIsRUFBMkJGLE9BQU9DLEVBQVAsR0FBWSxFQUFaO0FBQzNCRCxVQUFPQyxFQUFQLENBQVVFLEVBQVYsR0FBZSxFQUFmLENBSkcsQ0FJZ0I7O0FBRW5CRixNQUFHRSxFQUFILENBQU1DLE1BQU4sR0FBZSxzQkFBZjtBQUNBSCxNQUFHRSxFQUFILENBQU1FLElBQU4sR0FBYSxvQkFBYjtBQUVELEVBVEQsSTs7Ozs7Ozs7Ozs7O3NqQkNYQTs7Ozs7Ozs7QUFtQkE7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBekJBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7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QVIsQ0FBYywwRkFBZDtBQUNBLFdBQU8sS0FBS2hHLGFBQVo7QUFFQSxJQVBxQjs7QUFTdEI5VCxRQUFLLGFBQVd2YSxLQUFYLEVBQW1COztBQUV2QnFMLFlBQVFncEIsSUFBUixDQUFjLDBGQUFkO0FBQ0EsU0FBS2hHLGFBQUwsR0FBcUJydUIsS0FBckI7QUFFQTs7QUFkcUI7O0FBekdnQyxFQUF4RCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ODJiNjk4YjExODJiZjFkMDZlMiIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRvcFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29tbW9uIGZyb20gJy4vUGFnZS9Db21tb24uanMnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9QYWdlL01haW4uanMnO1xuXG4oKCk9PntcblxuICAvLyBnbG9iYWzjgqrjg5bjgrjjgqfjgq/jg4hcbiAgaWYgKHdpbmRvdy5nYj09PXVuZGVmaW5lZCkgd2luZG93LmdiID0ge307XG4gIHdpbmRvdy5nYi5pbiA9IHt9OyAvL2luc3RhbmNlXG5cbiAgZ2IuaW4uY29tbW9uID0gbmV3IENvbW1vbigpO1xuICBnYi5pbi5tYWluID0gbmV3IE1haW4oKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb25mIGZyb20gJy4uL0NvbmYuanMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vTXlMaWJzL1V0aWwuanMnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vTXlMaWJzL0Z1bmMuanMnO1xuXG5pbXBvcnQgUmVhZHlNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzJztcbmltcG9ydCBVcGRhdGVNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyc7XG5pbXBvcnQgUmVzaXplTWdyIGZyb20gJy4uL015TGlicy9FdmVudE1nci9SZXNpemVNZ3IuanMnO1xuaW1wb3J0IFNjcm9sbE1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvU2Nyb2xsTWdyLmpzJztcbmltcG9ydCBNb3VzZU1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvTW91c2VNZ3IuanMnO1xuaW1wb3J0IExvYWRNZ3IgZnJvbSAnLi4vRnVuYy9Mb2FkTWdyLmpzJztcblxuLy8gaW1wb3J0IFBqYXggZnJvbSAnLi4vRnVuYy9QamF4LmpzJztcbmltcG9ydCBKdWRnZUVudmlyb25tZW50IGZyb20gJy4uL0Z1bmMvSnVkZ2VFbnZpcm9ubWVudC5qcyc7XG5pbXBvcnQgUmVzcG9uc2l2ZVN3aXRjaEltZyBmcm9tICcuLi9GdW5jL19ldmVudHMvUmVzcG9uc2l2ZVN3aXRjaEltZy5qcyc7XG5pbXBvcnQgU3dpcGVUcmFuc2l0aW9uIGZyb20gJy4uL0Z1bmMvU3dpcGVUcmFuc2l0aW9uLmpzJztcblxuLy8gaW1wb3J0IE1lbnUgZnJvbSAnLi4vRGlzcGxheS9VSS9fY29tcG9ybmVudHMvTWVudS5qcyc7XG4vLyBpbXBvcnQgTmF2IGZyb20gJy4uL0Rpc3BsYXkvVUkvTmF2LmpzJztcbi8vIGltcG9ydCBBbGVydCBmcm9tICcuLi9EaXNwbGF5L1VJL0FsZXJ0LmpzJztcbi8vIGltcG9ydCBTaWRlUiBmcm9tICcuLi9EaXNwbGF5L1VJL1NpZGVSLmpzJztcbi8vIGltcG9ydCBUaW1lIGZyb20gJy4uL0Z1bmMvVGltZS5qcyc7XG5pbXBvcnQgU2Nyb2xsVHJhbnNpdGlvbiBmcm9tICcuLi9GdW5jL1Njcm9sbFRyYW5zaXRpb24uanMnO1xuLy8gaW1wb3J0IFBhZ2VUb3AgZnJvbSAnLi4vRGlzcGxheS9VSS9fcGFydHMvUGFnZVRvcC5qcyc7XG4vLyBpbXBvcnQgU2VjMDFWaWRlbyBmcm9tICcuLi9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMnO1xuaW1wb3J0IFNucyBmcm9tICcuLi9GdW5jL1Nucy5qcyc7XG4vLyBpbXBvcnQgU2xpZGVyVG9wIGZyb20gJy4uL0Rpc3BsYXkvVUkvU2xpZGVyVG9wLmpzJztcblxuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0Rpc3BsYXkvTGF5b3V0L0xheW91dC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDliJ3mnJ/lgKTjga7oqK3lrprjg7vjg4fjg7zjgr/jga7phY3nva5cbiAgICAvLyAgdXRpbOmWouaVsOOBruWIneacn+WMllxuICAgIC8vICDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcbiAgICAvLyBnYi5pbi51cCA9IG5ldyBVcGRhdGVNZ3IoKTtcbiAgICAvLyBnYi5pbi5yID0gbmV3IFJlc2l6ZU1ncigpO1xuICAgIC8vIGdiLmluLnMgPSBuZXcgU2Nyb2xsTWdyKCk7XG4gICAgLy8gZ2IuaW4ubSA9IG5ldyBNb3VzZU1ncigpO1xuICAgIC8vIGdiLmluLnJtID0gbmV3IFJlYWR5TWdyKCk7XG4gICAgLy8gZ2IuaW4ubG9hZE1nciA9IG5ldyBMb2FkTWdyKCk7XG4gICAgLy8gZ2IuaW4uc2N0ID0gbmV3IFNjcm9sbFRyYW5zaXRpb24oKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIOOBneOBruS7llxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gcGpheOOBruioreWumlxuICAgIC8vIGdiLmluLnBqYXggPSBuZXcgUGpheCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIExheW91dFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIGdiLmluLkxheW91dCA9IG5ldyBMYXlvdXQoKTtcblxuXG4gICAgLy8g5rqW5YKZ5a6M5LqG5b6M44Gu5Yem55CGXG4gICAgLy8gZ2IuaW4ucm0ub25Db21wbGV0ZWRGdW5jID0gKCk9PntuZXcgRGlzcGxheU9wZW5pbmcoKTt9XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OH44OQ44Kk44K544O744OW44Op44Km44K25Yik5a6aXG4gICAgLy8gIOOCueODnuODm+OBruWQkeOBjeWIpOWumlxuICAgIC8vICDjg5rjg7zjgrjmg4XloLHlj5blvpdcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBnYi5pbi5qZSA9IG5ldyBKdWRnZUVudmlyb25tZW50KCk7XG4gICAgLy8gZ2IuaW4ucmVzSW1nID0gbmV3IFJlc3BvbnNpdmVTd2l0Y2hJbWcoKTtcbiAgICAvLyBnYi5pbi5zbnMgPSBuZXcgU25zKCQoJy5mYlNoYXJlJyksJCgnLnR3U2hhcmUnKSwkKCcubGluZVNoYXJlJyksJCgnLm9uTWFpbCcpKVxuICAgIC8vIGdiLmluLnN3dCA9IG5ldyBTd2lwZVRyYW5zaXRpb24oKTtcblxuICAgIC8vIGdiLmluLmYuY2hlY2tDc3NCbGVuZCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIFVJXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gZ2IuaW4ubWVudSA9IG5ldyBNZW51KCk7XG4gICAgLy8gZ2IuaW4ubmF2ID0gbmV3IE5hdigpO1xuICAgIC8vIGdiLmluLnNpZGVSID0gbmV3IFNpZGVSKCk7XG4gICAgLy8gZ2IuaW4uYWxlcnQgPSBuZXcgQWxlcnQoKTtcbiAgICAvLyBnYi5pbi5wYWdldG9wID0gbmV3IFBhZ2VUb3AoKTtcblxuICAgIC8vIGJnXG4gICAgLy8gZ2IuaW4uc2xpZGVyVG9wID0gbmV3IFNsaWRlclRvcCgkKCcjYmdXcmFwIC5zZWMwMScpKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBFZmZlY3RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gZ2IuaW4ucGFnZVRyYW5zaXRpb25FZmZlY3QgPSBuZXcgUGFnZVRyYW5zaXRpb25FZmZlY3QoJCgnI3BhZ2VUcmFuc2l0aW9uTGF5ZXInKSk7XG4gICAgLy8gZ2IuaW4uc2VjMDFWaWRlbyA9IG5ldyBTZWMwMVZpZGVvKCk7XG4gICAgLy8gZ2IuaW4uU2VjMDJCZyA9IG5ldyBTZWN0aW9uMDJCZygpO1xuXG4gICAgLy8gZ2IuaW4uaGUwMSA9IG5ldyBIb3ZlckVmZmVjdFNWRygkKCcuU1ZHSG92ZXInKSwnI2ZmZicsJyMwMDAnKTtcbiAgICAvLyBnYi5pbi5oZTAyID0gbmV3IEhvdmVyRWZmZWN0U1ZHKCQoJy5TVkdIb3ZlclcnKSwnIzgxZDhkMCcsJyNmZmYnKTtcbiAgICAvLyBnYi5pbi5oZTAzID0gbmV3IEhvdmVyRWZmZWN0U1ZHKCQoJy5TVkdIb3ZlclcwMicpLCcjODFkOGQwJywnIzAwMCcpO1xuICAgIC8vIGdiLmluLmhlMDQgPSBuZXcgSG92ZXJFZmZlY3RTVkdMb2dvKCQoJyNoZWFkZXIgLmxvZ28sICNoZWFkZXIgLnN1YlRpdCcpKTtcbiAgICAvLyBnYi5pbi5oZTA1ID0gbmV3IEhvdmVyRWZmZWN0TWVudUl0ZW0oJCgnI21lbnUgLm1lbnVMaXN0IC5pdGVtJykpO1xuICAgIC8vIGdiLmluLmhlMDYgPSBuZXcgSG92ZXJFZmZlY3RTVkdBcnJvd1NpZGVSKCQoJyNzaWRlUiAubmV4dCcpKTtcbiAgICAvLyBnYi5pbi5oZTA3ID0gbmV3IEhvdmVyRWZmZWN0TWVudUJ0bigkKCcubWVudUJ0bjAxJykpO1xuICAgIC8vIGdiLmluLmhlMDggPSBuZXcgSG92ZXJFZmZlY3RTTlNQQ0Zvb3RlcigkKCcjc2lkZUwgLnNucy5zcCcpKTtcblxuICAgIC8vIGxvZ28g5Ye644GZXG4gICAgLy8gVHdlZW5NYXgudG8oJCgnI2hlYWRlciAubG9nbycpLCAyLjIsIHtvcGFjaXR5OiAxLCBlYXNlOiBQb3dlcjIuZWFzZUluT3V0fSlcblxuICAgIC8vIGdiLmluLmxvYWRNZ3Iuc3RhcnQoKTtcblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgRnVuY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIExheW91dFxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBEaXNwYWx5XG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIE1vdGlvblxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvUGFnZS9Db21tb24uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb25mXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBTb3VuZERhdGEgZnJvbSAnLi9EYXRhL1NvdW5kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5pys55Wq44OV44Op44KwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICAgIHRoaXMuUkVMRUFTRSA9IHRydWU7XG4gICAgLy8gdGhpcy5SRUxFQVNFID0gZmFsc2U7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OV44Op44Kw6Zai6YCjXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5GTEcgPSB7XG4gICAgICBMT0c6dHJ1ZSwgIC8vIOODreOCsOWHuuWKm1xuICAgICAgUEFSQU06dHJ1ZSwgLy8g44OR44Op44Oh44O844K/44OB44Kn44OD44KvXG4gICAgICBTVEFUUzp0cnVlICAvLyBTdGF0c+ihqOekulxuICAgIH07XG4gICAgaWYgKCF0aGlzLlJFTEVBU0UpIHtcbiAgICAgIHRoaXMuRkxHID0ge1xuICAgICAgICBMT0c6ZmFsc2UsXG4gICAgICAgIFBBUkFNOmZhbHNlLFxuICAgICAgICBTVEFUUzpmYWxzZSBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOWfuuacrCB3aWR0aCBoZWlnaHRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmRlZlcgPSAxMzAwO1xuICAgIHRoaXMuZGVmSCA9IDg1MDtcblxuICAgIHRoaXMuVyA9IDEyMDA7XG4gICAgdGhpcy5IID0gNzUwO1xuXG4gICAgdGhpcy5zcFcgPSAzNzU7XG4gICAgdGhpcy5zcEggPSA2Njc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OW44Os44Kk44Kv44Od44Kk44Oz44OIXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5icCA9IDc2ODtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBtb2RlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLmtleXMgPSBbXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdtb3ZpZScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydtb3JuaW5nJywnYWZ0ZXJub29uJywnbmlnaHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdkYXRhJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ2RhdGEwMScsJ2RhdGEwMicsJ2RhdGEwMyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ3Byb2R1Y3QnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnMDEnXSxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMuc3dpdGNoTW9kZSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNvdW5kIGRhdGFcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNvdW5kRGF0YSA9IG5ldyBTb3VuZERhdGEoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzZWMwMiBiZyBJbWcgTnVtXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZWMwMkltZ051bSA9IDM5NjtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB5b3V0dWJlIElEXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy55b3V0dWJlSUQwMSA9ICd4VzJvTnBOcktkMCc7XG4gICAgdGhpcy55b3V0dWJlSUQwMiA9ICd0MldlUlJkQUZlSSc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgd2ViIGZvbnQgbG9hZGVkXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy53ZWJGb250TG9hZGVkID0gZmFsc2U7XG5cbiAgfVxuXG5cbiAgc3dpdGNoTW9kZSgpe1xuXG4gICAgdmFyIGksIGtleSwgbGVuLCBwYXJhbSwgcmVmLCByZWYxLCB2YWx1ZTtcblxuICAgIHJlZiA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHBhcmFtID0gcmVmW2ldO1xuICAgICAgcmVmMSA9IHBhcmFtLnNwbGl0KCc9JyksIGtleSA9IHJlZjFbMF0sIHZhbHVlID0gcmVmMVsxXTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmtleXMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICB2YXIgb2JqID0gdGhpcy5rZXlzW2pdO1xuXG4gICAgICAgIC8vIOODkeODqeODoeODvOOCv+OBjOOCreODvOOBqOS4gOe3kuOBoOOBo+OBn+OCiVxuICAgICAgICBpZiAob2JqLmtleSA9PT0ga2V5KSB7XG5cbiAgICAgICAgICAvLyDlkITlgKTjgajmr5TovINcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IG9iai52YWx1ZS5sZW5ndGg7IGsrKykge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqLnZhbHVlW2tdO1xuXG4gICAgICAgICAgICAvLyDjgq3jg7zjgpJ0aGlzLmtleXPjga5rZXnjgavjgIF2YWx1ZeOCkuavlOi8g+OBl+OBpuWQjOWApOOBoOOBo+OBn+OCguOBruOBq1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gdmFsdWUpIHRoaXNbb2JqLmtleV0gPSB2YWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9O1xuXG5cbiAgICAgICAgfTtcblxuICAgICAgICBcbiAgICAgIH07XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvbmYuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRGF0YVxuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZERhdGEge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gdGhpcy5BVEFSSTAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2F0YXJpL0F0YXJpXzA0Lndhdic7XG4gICAgLy8gdGhpcy5BVEFSSTAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2F0YXJpL0F0YXJpXzA1Lndhdic7XG5cbiAgICAvLyB0aGlzLkJBTjAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CYS1uXzAxLndhdic7XG4gICAgLy8gdGhpcy5CQU4wMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmEtbl8wMi53YXYnO1xuICAgIC8vIHRoaXMuQkFOMDMgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDMud2F2JztcbiAgICAvLyB0aGlzLkJBTjA0ID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CYS1uXzA0Lndhdic7XG5cbiAgICAvLyB0aGlzLkRPTjAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CaWdfRG9uXzAxLndhdic7XG4gICAgLy8gdGhpcy5ET04wMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmlnX0Rvbl8wMi53YXYnO1xuICAgIC8vIHRoaXMuRE9OMDMgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JpZ19Eb25fMDMud2F2JztcbiAgICAvLyB0aGlzLkRPTjA0ID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Eb25fMDQud2F2JztcblxuICAgIC8vIHRoaXMuRE9ETjAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Eb2Rvbl8wMS53YXYnO1xuICAgIC8vIHRoaXMuRE9ETjAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Eb2Rvbl8wMi53YXYnO1xuXG4gICAgLy8gdGhpcy5Hb2dvZ28wMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vR29nb2dvXzAxLndhdic7XG4gICAgLy8gdGhpcy5Hb2dvZ28wMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vR29nb2dvXzAyLndhdic7XG5cbiAgICAvLyB0aGlzLklLQVJJID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2lrYXJpL0lrYXJpXzAxLndhdic7XG5cbiAgICAvLyB0aGlzLlJPVUxFVFRFMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvcm91bGV0dGUvUm91bGV0dGVfMDEud2F2JztcbiAgICAvLyB0aGlzLlJPVUxFVFRFMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvcm91bGV0dGUvUm91bGV0dGVfMDIud2F2JztcbiAgICAvLyB0aGlzLlJPVUxFVFRFMDMgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvcm91bGV0dGUvUm91bGV0dGVfMDMud2F2JztcblxuICAgIC8vIHRoaXMuU0VBID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL3NlYS9TZWEma2Ftb21lXzAxLndhdic7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0RhdGEvU291bmQuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy51YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7IC8vdXNlcmFnZW50XG4gICAgdGhpcy5hcHBWID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7IC8vYXBwVmVyc2lvblxuICAgIHRoaXMuaXNSZXNTUCA9IG51bGw7IC8vIHJlc3BvbnNpdmUgc3BcbiAgICB0aGlzLmlzUmVzUEMgPSBudWxsOyAvLyByZXNwb25zaXZlIHBjXG5cbiAgICB0aGlzLmlzUEMgPSBudWxsO1xuICAgIHRoaXMuaXNTUCA9IG51bGw7XG4gICAgdGhpcy5pc1RBQiA9IG51bGw7XG4gICAgdGhpcy5pc01CID0gbnVsbDtcblxuICAgIHRoaXMuaXNJRSA9IG51bGw7XG5cbiAgICB0aGlzLmlzU2V0U1BTaXplID0gZmFsc2U7XG5cblxuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbnVsbDtcbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWF0aFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBcbiAgLy8g44Op44Oz44OA44Og44Gq5pW05pWw44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBtaW4gOiDmnIDlsI/lgKQoaW50KVxuICAvLyBAbWF4IDog5pyA5aSn5YCkKGludClcbiAgLy8gcmV0dXJuIDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tKG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSkgLSBtaW4pICsgbWluKSk7XG5cbiAgfVxuICAgICAgXG4gIC8vIOODqeODs+ODgOODoOOBquaVtOaVsOOCkjLjgaTjga7nr4Tlm7LjgYvjgonlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG1pbjEgOiDmnIDlsI/lgKQxKGludClcbiAgLy8gQG1heDEgOiDmnIDlpKflgKQxKGludClcbiAgLy8gQG1pbjIgOiDmnIDlsI/lgKQyKGludClcbiAgLy8gQG1heDIgOiDmnIDlpKflgKQyKGludClcbiAgLy8gcmV0dXJuIDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tMihtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gICAgXG4gICAgaWYgKHRoaXMuaGl0KDIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMSwgbWF4MSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4yLCBtYXgyKTtcbiAgICB9XG5cbiAgfVxuICAgICAgXG4gIC8vIDEvQHJhbmdl44Gu56K6546H44GndHJ1ZeOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAcmFuZ2UgOiDmr43mlbAoaW50KVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhpdChyYW5nZSkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKDAsIHJhbmdlIC0gMSkgPT09IDA7XG5cbiAgfVxuICBcbiAgLy8gMOOBi+OCieevhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVtOaVsOOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsIDog56+E5ZuyKGludClcbiAgLy8gcmV0dXJuIDog44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZ2UodmFsKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oLXZhbCwgdmFsKTtcblxuICB9XG4gIFxuICAvLyDlgKTjgpLjg57jg4Pjg5Tjg7PjgrBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOODnuODg+ODlOODs+OCsOOBmeOCi+WApChOdW1iZXIpXG4gIC8vIEByZXNNaW4gOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAcmVzTWF4IDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNaW4gOiDlhYPjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1heCA6IOWFg+OBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIHJldHVybiA6IOODnuODg+ODlOODs+OCsOOBleOCjOOBn+WApChOdW1iZXIpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1hcChudW0sIHJlc01pbiwgcmVzTWF4LCBiYXNlTWluLCBiYXNlTWF4KSB7XG5cbiAgICB2YXIgcDtcbiAgICBpZiAobnVtIDwgYmFzZU1pbikge1xuICAgICAgcmV0dXJuIHJlc01pbjtcbiAgICB9XG4gICAgaWYgKG51bSA+IGJhc2VNYXgpIHtcbiAgICAgIHJldHVybiByZXNNYXg7XG4gICAgfVxuICAgIHAgPSAocmVzTWF4IC0gcmVzTWluKSAvIChiYXNlTWF4IC0gYmFzZU1pbik7XG5cbiAgICByZXR1cm4gKChudW0gLSBiYXNlTWluKSAqIHApICsgcmVzTWluO1xuXG4gIH0gICAgXG4gIFxuICAvLyDmlbDlgKTjgavlsI/mlbDngrnnrKxAbuS9jeOBvuOBp+OCkuOBpOOBkeOBn+aWh+Wtl+WIl+OCkui/lOOBmVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog5YCkKE51bWJlcilcbiAgLy8gQG4gOiDlsI/mlbDngrnjga7kvY0oaW50KVxuICAvLyByZXR1cm4gOiDlpInmj5vjgZXjgozjgZ/lgKQoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWNpbWFsKG51bSwgbikge1xuICAgIHZhciBpLCBwb3M7XG4gICAgbnVtID0gU3RyaW5nKG51bSk7XG4gICAgcG9zID0gbnVtLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtLnNwbGl0KFwiLlwiKVswXTtcbiAgICB9XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIG51bSArPSBcIi5cIjtcbiAgICAgIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIG51bSArPSBcIjBcIjtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gICAgbnVtID0gbnVtLnN1YnN0cigwLCBwb3MpICsgbnVtLnN1YnN0cihwb3MsIG4gKyAxKTtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgY2xhbXAobnVtZXJhdG9yLGRlbm9taW5hdG9yLHZhbCkge1xuXG4gICAgcmV0dXJuIHZhbCAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG5cbiAgfVxuXG4gIGRlZ3JlZShyYWRpYW5zKSB7XG5cbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7IC8vMeODqeOCuOOCouODs+OBjOS9leW6puOBi1xuXG4gIH1cblxuICAvLyB0byByYWRpYW5zXG4gIHJhZGlhbihhbmdsZSkgeyBcblxuICAgIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7IC8vMeW6puS9leODqeOCuOOCouODs+OBi1xuXG4gIH1cblxuICBkaXN0KHAxLCBwMikge1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xuXG4gIH1cblxuICBhc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxMCw5LDUsMywxXG5cbiAgfVxuXG4gIGRlc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEsMyw1LDksMTBcblxuICB9XG5cbiAgLy8gbWFwKHZhbHVlLCBtaW4wMSwgbWF4MDEsIG1pbjAyLCBtYXgwMikge1xuXG4gIC8vICAgdmFyIGRpczAxID0gbWF4MDEgLSBtaW4wMTtcbiAgLy8gICB2YXIgZGlzMDIgPSBtYXgwMiAtIG1pbjAyXG5cbiAgLy8gICB2YXIgcmF0ZSA9IGRpczAyIC8gZGlzMDE7XG5cbiAgLy8gICB2YWx1ZSA9IHZhbHVlICogcmF0ZTtcblxuICAvLyAgIHJldHVybiB2YWx1ZTtcbiAgLy8gfVxuXG4gIGNvbnN0cmFpbih2YWx1ZSwgbWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KHZhbHVlLCBtaW4pKTtcblxuICAgIC8vIGlmICh2YWx1ZSA8PSBsb3cpIHZhbHVlID0gbG93O1xuICAgIC8vIGlmICh2YWx1ZSA+PSBoaWdoKSB2YWx1ZSA9IGhpZ2g7ICAgICBcbiAgICAvLyByZXR1cm4gdmFsdWU7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgQXJyYXlcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8g6YWN5YiX5YaF44Gu44Op44Oz44OA44Og44Gq5YCk44KS44Gy44Go44Gk5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJdcbiAgLy8gcmV0dXJuIDog6YWN5YiX5YaF44Gu5YCkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFyclJhbmQoYXJyKSB7XG5cbiAgICByZXR1cm4gYXJyW3RoaXMucmFuZG9tKDAsIGFyci5sZW5ndGggLSAxKV07XG5cbiAgfSAgICBcbiAgICBcbiAgLy8g6YWN5YiX44KS44Op44Oz44OA44Og44Gr5Lim44G55pu/44GIXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJcoQXJyYXkpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNodWZmbGUoYXJ5KSB7XG5cbiAgICB2YXIgYXJyID0gW107XG4gICAgYXJyID0gYXJ5LnNsaWNlKCk7XG4gICAgdmFyIGkgPSBhcnIubGVuZ3RoO1xuICAgIHdoaWxlKGkpe1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaSk7XG4gICAgICB2YXIgdCA9IGFyclstLWldO1xuICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgYXJyW2pdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbiAgLy8g44Op44Oz44OA44Og44Gq5pWw5YCk44KS5L2c44KLXG4gIHJhbmRvbUFyciAobGVuKSB7XG5cbiAgICB2YXIgYXJyID0gbmV3IEFycmF5O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgYXJyLnB1c2goaSk7XG5cbiAgICBhcnIgPSB0aGlzLnNodWZmbGVBcnkoYXJyKTtcblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG4gIC8vIG51bGzjgpLliYrpmaTjgZfjgZ/phY3liJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGFyciA6IOmFjeWIlyhBcnJheSlcbiAgLy8gcmV0dXJuIDogbnVsbOWJiumZpOOBl+OBn+mFjeWIlyhBcnJheSlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2xpY2VOdWxsKGFycikge1xuXG4gICAgdmFyIGksIGwsIGxlbjEsIG5ld0FyciwgdmFsO1xuICAgIG5ld0FyciA9IFtdO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGlmICh2YWwgIT09IG51bGwpIHtcbiAgICAgICAgbmV3QXJyLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycjtcblxuICB9ICAgIFxuICBcbiAgLy8g6YWN5YiX5YaF44Gu44OR44Op44Oh44O844K/44KS5q+U6LyD44GX44Gm44K944O844OIXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJcoQXJyYXkpXG4gIC8vIEBwYXJhIDog44OR44Op44Oh44O844K/44O85ZCNXG4gIC8vIEBkZXNjIDog6ZmN6aCG44GL44Gp44GG44GLKGJvb2xlYW4pIOODh+ODleOCqeODq+ODiOOBr+aYh+mghlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzb3J0KGFyciwgcGFyYSwgZGVzYykge1xuICAgIGlmIChkZXNjID09PSB2b2lkIDApIHtcbiAgICAgIGRlc2MgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRlc2MpIHtcbiAgICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiW3BhcmFdIC0gYVtwYXJhXTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYVtwYXJhXSAtIGJbcGFyYV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRLZXkobGlzdCx2YWx1ZSkge1xuICAgICAgdmFyIHJldHVybktleSA9IFtdO1xuICAgICAgZm9yKHZhciBrZXkgaW4gbGlzdCl7XG4gICAgICAgICAgaWYgKGxpc3Rba2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm5LZXkucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5LZXk7XG4gIH1cblxuICAvLyDjg6bjg4vjg7zjgq9JROOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1bmlxdWUoKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgfVxuICBcbiAgLy8gKipqcXVhcnnkvb/nlKhcbiAgLy8g44Oc44K/44Oz44Oi44O844OJ5aSJ5pu0XG4gIC8vIHRydWXjgarjgonjgqvjg7zjgr3jg6vjgYzjg53jgqTjg7Pjgr/jg7zjga7lvaLjgatcbiAgLy8gZmFsc2Xjgarjgonjg4fjg5Xjgqnjg6vjg4jjga7jgqvjg7zjgr3jg6vjgatcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGZsZyA6IOmBqeeUqOOBmeOCi+OBi+OBqeOBhuOBiyhib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBidXR0b25Nb2RlKGZsZykge1xuXG4gICAgaWYgKGZsZykge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBkZXZpY2VcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNEZXZpY2VTUCgpe1xuXG4gICAgdmFyIG1lZGlhID0gW1wiaXBob25lXCIsXCJpcG9kXCIsXCJpcGFkXCIsXCJhbmRyb2lkXCIsXCJkcmVhbVwiLFwiY3VwY2FrZVwiLFwiYmxhY2tiZXJyeTk1MDBcIixcImJsYWNrYmVycnk5NTMwXCIsXCJibGFja2JlcnJ5OTUyMFwiLFwiYmxhY2tiZXJyeTk1NTBcIixcImJsYWNrYmVycnk5ODAwXCIsXCJ3ZWJvc1wiLFwiaW5jb2duaXRvXCIsXCJ3ZWJtYXRlXCJdO1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChtZWRpYS5qb2luKFwifFwiKSxcImlcIik7XG5cbiAgICB2YXIgYiA9IHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcbiAgICBpZiAoYikgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZVNQJyk7XG5cbiAgICB0aGlzLmlzU1AgPSBiO1xuXG4gIH1cbiAgaXNEZXZpY2VUQUIoKXtcblxuICAgIHZhciBiID0gKHRoaXMudWEuaW5kZXhPZihcIndpbmRvd3NcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwidG91Y2hcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJpcGFkXCIpICE9IC0xXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgPT0gLTEpXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiZmlyZWZveFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJ0YWJsZXRcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJraW5kbGVcIikgIT0gLTFcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcInNpbGtcIikgIT0gLTFcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcInBsYXlib29rXCIpICE9IC0xO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlVEFCJyk7XG5cbiAgICB0aGlzLmlzVEFCID0gYjtcblxuICB9XG5cbiAgaXNEZXZpY2VNQigpe1xuXG4gICAgdmFyIGIgPSAodGhpcy51YS5pbmRleE9mKFwid2luZG93c1wiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJwaG9uZVwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImlwaG9uZVwiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiaXBvZFwiKSAhPSAtMVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwibW9iaWxlXCIpICE9IC0xKVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImZpcmVmb3hcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwibW9iaWxlXCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiYmxhY2tiZXJyeVwiKSAhPSAtMTtcbiAgICBpZiAoYikgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZU1CJyk7XG5cbiAgICB0aGlzLmlzTUIgPSBiO1xuXG4gIH1cblxuICBpc0RldmljZVBDKCl7XG5cbiAgICBpZiAoISh0aGlzLmlzU1AgfHwgdGhpcy5pc1RBQiB8fCB0aGlzLmlzTUIpKSB7XG4gICAgICBcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VQQycpO1xuICAgICAgdGhpcy5pc1BDID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcblxuICAgIH1cblxuICAgIHRoaXMuaXNQQyA9IGZhbHNlO1xuXG4gIH1cblxuICAvLyDjgrnjg57jg5XjgqnliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1NtdCgpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUG9kJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMDtcblxuICB9XG5cbiAgLy8g44K/44OW44Os44OD44OI56uv5pyr44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNUYWJsZXQoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5pc0lwYWQoKSB8fCAodGhpcy5pc0FuZHJvaWQoKSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01vYmlsZScpID09PSAtMSk7XG5cbiAgfVxuXG4gIC8vIGlQYWTliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0lwYWQoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwO1xuXG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgT1NcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gQW5kcm9pZOWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzQW5kcm9pZCgpIHtcblxuICAgIHZhciB1O1xuICAgIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHJldHVybiB1LmluZGV4T2YoJ0JsYWNrQmVycnknKSA+IDAgfHwgdS5pbmRleE9mKCdBbmRyb2lkJykgPiAwIHx8IHUuaW5kZXhPZignV2luZG93cyBQaG9uZScpID4gMDtcblxuICB9XG5cbiAgaXNpUGhvbmUoKXtcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJpcGhvbmVcIixcImlcIik7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcbiAgfVxuXG4gIC8vIGlPU+WIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSW9zKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDA7XG5cbiAgfVxuXG4gIC8vIFBTM+WIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzUHMzKCkge1xuXG4gICAgdmFyIHU7XG4gICAgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgcmV0dXJuIHUuaW5kZXhPZignUExBWVNUQVRJT04gMycpID4gMDtcblxuICB9XG4gICAgXG4gIC8vIFZJVEHliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1ZpdGEoKSB7XG5cbiAgICB2YXIgdTtcbiAgICB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICByZXR1cm4gdS5pbmRleE9mKCdQbGF5U3RhdGlvbiBWaXRhJykgPiAwO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIGJyb3dzZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElF44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZSgpIHtcblxuICAgIHZhciB1YTtcbiAgICB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ21zaWUnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZigndHJpZGVudC83JykgIT09IC0xO1xuXG4gIH1cblxuICAvLyBXSU7jgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1dpbigpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZihcIldpblwiKSAhPT0gLTE7XG5cbiAgfVxuXG4gIC8vIGdvb2dsZUNocm9tZeOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzQ2hyb21lKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAwO1xuXG4gIH0gICAgXG4gIFxuICAvLyBGaXJlRm9444GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNGRigpIHtcblxuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG5cbiAgfVxuXG4gIGlzU2FmYXJpKCl7XG5cbiAgICBpZih0aGlzLnVhLmluZGV4T2YoXCJjaHJvbWVcIikgIT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBpZih0aGlzLnVhLmluZGV4T2YoXCJsdW5hc2NhcGVcIikgIT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJzYWZhcmlcIixcImlcIik7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcblxuICB9XG5cbiAgaXNPcGVyYSgpe1xuXG4gICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJvcGVyYVwiLFwiaVwiKTtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG5cbiAgfVxuXG4gIC8vIGlPU+OBrnNhZmFyaeS7peWkluOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSU9TVWlWaWV3KCkge1xuXG4gICAgdmFyIGE7XG4gICAgYSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuICh0aGlzLmlzSW9zKCkgJiYgYS5pbmRleE9mKCdzYWZhcmknKSA9PT0gLTEpIHx8ICh0aGlzLmlzSW9zKCkgJiYgYS5pbmRleE9mKCdjcmlvcycpID4gMCkgfHwgKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ2dzYScpID4gMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgdmVyc2lvblxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSUU45Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZThVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDggJiYgbXNpZSAhPT0gMDtcblxuICB9XG4gICAgXG4gIC8vIElFOeS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWU5VW5kZXIoKSB7XG5cbiAgICB2YXIgbXNpZTtcbiAgICBtc2llID0gbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICBtc2llID0gbXNpZS5pbmRleE9mKCdtc2llJykgPiAtMSA/IHBhcnNlSW50KG1zaWUucmVwbGFjZSgvLiptc2llWyBdLywgJycpLm1hdGNoKC9eWzAtOV0rLykpIDogMDtcbiAgICByZXR1cm4gbXNpZSA8PSA5ICYmIG1zaWUgIT09IDA7XG5cbiAgfVxuXG4gIC8vIElFMTDku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llMTBVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDEwICYmIG1zaWUgIT09IDA7XG5cbiAgfVxuXG4gIC8vIElFMTHku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llMTFVbmRlcigpIHtcblxuICAgIHZhciBiID0gdGhpcy5pc0llMTBVbmRlcigpIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJ0cmlkZW50XCIpICE9IC0xKTtcbiAgICByZXR1cm4gYjtcbiAgICAvLyByZXR1cm4gdHJ1ZTtcblxuICB9XG5cbiAgLy8gZWRnZeOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRWRnZSgpIHtcblxuICAgIGxvZyh0aGlzLnVhLmluZGV4T2YoXCJBcHBsZVdlYmtpdFwiKSx0aGlzLnVhLmluZGV4T2YoXCJFZGdlXCIpLHRoaXMudWEsdGhpcy5hcHBWKTtcbiAgICB2YXIgYiA9ICh0aGlzLnVhLmluZGV4T2YoXCJhcHBsZXdlYmtpdFwiKSA+PSAwICYmIHRoaXMudWEuaW5kZXhPZihcImVkZ2VcIikgIT0gLTEpO1xuICAgIHJldHVybiBiO1xuICAgIC8vIHJldHVybiB0cnVlO1xuXG4gIH1cblxuICBpc0lFVmVyc2lvbigpe1xuXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdpZScpO1xuICAgIHRoaXMuaXNJRSA9IHRydWU7XG4gICAgICBcbiAgICBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDEwLlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTEwJyk7XG4gICAgICByZXR1cm4gJ2llMTAnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDkuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llOScpO1xuICAgICAgcmV0dXJuICdpZTknO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDguXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llOCcpOyAgXG4gICAgICByZXR1cm4gJ2llOCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgNy5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU3Jyk7XG4gICAgICByZXR1cm4gJ2llNyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgNi5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU2Jyk7XG4gICAgICByZXR1cm4gJ2llNic7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcInRyaWRlbnRcIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWUxMScpO1xuICAgICAgdGhpcy5pc0lFMTEgPSB0cnVlO1xuICAgICAgcmV0dXJuICdpZTExJztcbiAgICB9IGVsc2UgaWYgKHRoaXMudWEuaW5kZXhPZihcImFwcGxld2Via2l0XCIpID49IDAgJiYgdGhpcy51YS5pbmRleE9mKFwiZWRnZVwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc0VkZ2UnKTtcbiAgICAgIHJldHVybiAnZWRnZSc7XG4gICAgfVxuXG5cbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2llJyk7XG4gICAgdGhpcy5pc0lFID0gZmFsc2U7XG5cbiAgfVxuXG4gIGlzQW5kcm9pZFZlcnNpb24oKSB7XG5cbiAgICBpZiggdGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSA+IDAgKSB7XG5cbiAgICAgICAgdmFyIHZlcnNpb24gPSBwYXJzZUZsb2F0KHRoaXMudWEuc2xpY2UodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSs4KSk7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgICAgICBcbiAgICB9XG5cbiAgfVxuXG4gIGlzaXBob25lVmVyc2lvbigpIHtcblxuICAgIGlmKCB0aGlzLnVhLmluZGV4T2YoXCJpUGhvbmUgT1NcIikgPiAwICkge1xuXG4gICAgICAgIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdCh0aGlzLnVhLnNsaWNlKHRoaXMudWEuaW5kZXhPZihcImlQaG9uZSBPU1wiKSsxMCkpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbjtcblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBwb3J0cmFpdCAvIGxhbmRzY2FwZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNEaXJlY3Rpb24gKCkge1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChIID4gVykge1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgIH1lbHNle1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICByZXNwb25zaXZlIOaoquW5heOCkuimi+OCi1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNSZXNwb25zaXZlIChicCkge1xuXG4gICAgaWYgKGJwPT11bmRlZmluZWQpIGJwPTM3NTtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoVyA+IGJwKSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IHRydWU7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IHRydWU7XG4gICAgICB0aGlzLmlzUmVzUEMgPSBmYWxzZTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgVVJMXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIOOCr+OCqOODquaKnOOBjeWHuuOBl1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAa2V5IDog5oqc44GN5Ye644GZ44OR44Op44Oh44O844K/5ZCNKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZ2V0UXVlcnkoa2V5KSB7XG5cbiAgLy8gICB2YXIgcXMsIHJlZ2V4O1xuICAvLyAgIGtleSA9IGtleS5yZXBsYWNlKC9b4oKsW10vLCBcIuKCrOKCrOKCrFtcIikucmVwbGFjZSgvW+KCrF1dLywgXCLigqzigqzigqxdXCIpO1xuICAvLyAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIlvigqzigqw/Jl1cIiArIGtleSArIFwiPShbXiYjXSopXCIpO1xuICAvLyAgIHFzID0gcmVnZXguZXhlYyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIC8vICAgaWYgKHFzID09PSBudWxsKSB7XG4gIC8vICAgICByZXR1cm4gXCJcIjtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgcmV0dXJuIHFzWzFdO1xuICAvLyAgIH1cblxuICAvLyB9XG5cbiAgZ2V0UGFyYW0oKSB7XG5cbiAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZjtcbiAgICB2YXIgcGFyYW0gPSB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICBpZiAocGFyYW09PXVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgcGFyYW1JdGVtcyA9IHBhcmFtLnNwbGl0KCcmJyk7XG4gICAgdmFyIGxpc3QgPSB7fTtcbiAgXG4gICAgZm9yKCB2YXIgaSA9IDA7IGk8cGFyYW1JdGVtcy5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgIHBhcmFtSXRlbSA9IHBhcmFtSXRlbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgbGlzdFtwYXJhbUl0ZW1bMF1dID0gcGFyYW1JdGVtWzFdO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG5cbiAgfVxuICBcbiAgLy8g44OP44OD44K344Ol5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IGxvY2F0aW9uLmhhc2jjga4j44KS5YmK6Zmk44GX44Gf44KE44GkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhhc2goKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcblxuICB9XG5cbiAgLy8gY29va2ll5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBrZXkgOiDjg5Hjg6njg6Hjg7zjgr/lkI1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0Q29va2llKGtleSkge1xuXG4gICAgdmFyIGEsIGFyciwgaSwgbCwgbGVuMSwgdmFsO1xuICAgIGlmIChkb2N1bWVudC5jb29raWUgPT09IHZvaWQgMCB8fCBkb2N1bWVudC5jb29raWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcbiAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGFyci5sZW5ndGg7IGwgPCBsZW4xOyBpID0gKytsKSB7XG4gICAgICB2YWwgPSBhcnJbaV07XG4gICAgICBhID0gdmFsLnNwbGl0KFwiPVwiKTtcbiAgICAgIGlmIChhWzBdID09PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGFbMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG4gIH0gICAgICBcblxuICAvLyBjb29raWXoqK3lrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAvLyBAdmFsIDog5YCkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldENvb2tpZShrZXksIHZhbCkge1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgdmFsO1xuXG4gIH1cbiAgXG4gIGlzUENTUCgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuXG4gICAgaWYgKCF0aGlzLmlzUEMgJiYgIXRoaXMuaXNUQUIgJiYgKHVybC5pbmRleE9mKCdwYycpICE9IC0xKSkge1xuXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc1BDICYmIHVybC5pbmRleE9mKCdwYycpID09IC0xKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbi9wYy8nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc1RBQiAmJiB1cmwuaW5kZXhPZigncGMnKSA9PSAtMSkge1xuXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4vcGMvJztcbiAgICBcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaXNDb250YWluKHVybCwncm91bGV0dGUnKSkgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuJztcbiAgICBpZiAodGhpcy5pc0NvbnRhaW4odXJsLCd0b3BpY3MnKSkgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuJztcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb2xvclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyByZ2LjgYvjgolIRVjjgqvjg6njg7zlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHIgOiAwfjI1NVxuICAvLyBAZyA6IDB+MjU1XG4gIC8vIEBiIDogMH4yNTVcbiAgLy8gcmV0dXJuIDogZXggXCIjRkZGRkZGXCJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SGV4Q29sb3IocixnLGIpIHtcbiAgICAgIHZhciBzdHI7XG4gICAgICBzdHIgPSAociA8PCAxNiB8IGcgPDwgOCB8IGIpLnRvU3RyaW5nKDE2KTtcbiAgICAgIHJldHVybiBcIiNcIiArIG5ldyBBcnJheSg3IC0gc3RyLmxlbmd0aCkuam9pbihcIjBcIikgKyBzdHI7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFN0cmluZ1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0NvbnRhaW4oc3RyLGNvbnRhaW4pIHtcblxuICAgIC8vIHN0cuOBruS4reOBqyxjb250YWlu44GM5a2Y5Zyo44GX44Gf44KJXG4gICAgaWYgKCBzdHIuaW5kZXhPZihjb250YWluKSAhPSAtMSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgLy8gMOWfi+OCgeOBpzLmoYHjgavjgZnjgovplqLmlbBcbiAgYWRkMChzdHIsbnVtPS0yKXtcbiAgICBcbiAgICByZXR1cm4gKCBcIjAwMDAwMDAwMDAwMFwiICsgc3RyICkuc3Vic3RyKCBudW0gKTtcblxuICB9XG5cbiAgZmxvYXRGb3JtYXQoIG51bWJlciwgbiApIHtcblxuICAgIHZhciBfcG93ID0gTWF0aC5wb3coIDEwICwgbiApIDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCggbnVtYmVyICogX3BvdyApIC8gX3BvdyA7XG5cbiAgfVxuICAgIFxuICAvLyDlgKTmrrXooajoqJhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJpY2UobnVtKSB7XG5cbiAgICByZXR1cm4gU3RyaW5nKG51bSkucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoPyFcXGQpKS9nLCAnJDEsJyk7XG5cbiAgfVxuXG4gIC8vIOaWh+Wtl+WIl+OCkuWPjei7olxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAc3RyIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gcmV0dXJuIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RyUmV2ZXJzZShzdHIpIHtcblxuICAgIHZhciBpLCBsZW4sIHJlcztcbiAgICByZXMgPSBcIlwiO1xuICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgaSA9IDE7XG4gICAgd2hpbGUgKGkgPD0gbGVuKSB7XG4gICAgICByZXMgKz0gc3RyLnN1YnN0cigtaSwgMSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG5cbiAgfVxuICBcbiAgLy8g5paH5a2X5YiX44Gu5YWo572u5o+bXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgIDog5paH5a2X5YiXXG4gIC8vIEBvZWcgIDog572u5o+b5YmN44Gu5paH5a2X5YiXXG4gIC8vIEBkZXN0IDog572u5o+b5b6M44Gu5paH5a2X5YiXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcGxhY2VBbGwodmFsLCBvcmcsIGRlc3QpIHtcblxuICAgIHJldHVybiB2YWwuc3BsaXQob3JnKS5qb2luKGRlc3QpO1xuXG4gIH0gICAgXG4gIFxuICBzdHJSZXBsYWNlKHN0ciwgYmVmb3JlLCBhZnRlcikge1xuXG4gICAgdmFyIHIgPSBuZXcgUmVnRXhwKCBiZWZvcmUsICdnJyk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoIHIgLCBhZnRlciApO1xuXG4gIH0gICAgXG4gIFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0Tm93KCkge1xuXG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpO1xuXG4gIH1cblxuICBlbGFwc2VkKCkge1xuXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lO1xuXG4gIH1cblxuICBtKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoIHRoaXMuZWxhcHNlZFRpbWUgKyAxMDAgLyA2MCApO1xuXG4gIH1cblxuICBzKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5lbGFwc2VkVGltZSAvIDEwMDApO1xuXG4gIH1cblxuICBtcygpIHtcblxuICAgIHJldHVybiB0aGlzLmVsYXBzZWRUaW1lO1xuICAgIFxuICB9XG5cbiAgdGltZSgpIHtcblxuICAgIHRoaXMuZ2V0Tm93KCk7XG5cbiAgICB0aGlzLmhvdXIgPSB0aGlzLm5vdy5nZXRIb3VycygpOyAgICAgICAgICAvLyDmmYJcbiAgICB0aGlzLm1pbnV0ZSA9IHRoaXMubm93LmdldE1pbnV0ZXMoKTsgICAgICAvLyDliIZcbiAgICB0aGlzLnNlY29uZCA9IHRoaXMubm93LmdldFNlY29uZHMoKTtcbiAgICB0aGlzLm1pbGxTZWNvbmQgPSB0aGlzLm5vdy5nZXRNaWxsaXNlY29uZHMoKTtcblxuICB9XG5cbiAgZGF0ZSgpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXREYXRlKCk7XG5cbiAgfVxuXG4gIG1vbnRocygpIHtcblxuICAgIHZhciBtb250aGRheXMgPSBuZXcgQXJyYXkoMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMSk7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0TW9udGgoKSArIDE7XG5cbiAgfVxuXG4gIHllYXIoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RnVsbFllYXIoKTtcblxuICB9XG5cbiAgZGF5KCkge1xuXG4gICAgLy8g5puc5pelICjml6XmnKzoqp4pXG4gICAgdmFyIHdlZWtEYXlKUCA9IFtcIuaXpVwiLFwi5pyIXCIsXCLngatcIixcIuawtFwiLFwi5pyoXCIsXCLph5FcIixcIuWcn1wiXSA7XG4gICAgdmFyIHdESiA9IHdlZWtEYXlKUFt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gICAgLy8g5puc5pelICjoi7Hoqp4pXG4gICAgdmFyIHdlZWtEYXlFTiA9IFtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSA7XG4gICAgdmFyIHdERSA9IHdlZWtEYXlFTlt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gIH1cbiAgXG4gIC8vIOaVsOaXpeW+jOOBrkRhdGXjgqrjg5bjgrjjgqfjgq/jg4jlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWZ0ZXJEYXkoZGF0ZSwgbnVtKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBOdW1iZXIobnVtKSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGEgdHlwZSBjaGVja1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc09iamVjdCh2YWx1ZSwgaWdub3JlQXJyYXkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuICB9XG5cbiAgaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9XG5cbiAgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgaXNOdWxsKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gIH1cblxuICBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIG90aGVyXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRJbWdTUFNpemUgKCR0YXJnZXQpe1xuXG4gICAgLy8gcmVzcG9uc2l2ZSBzcOOBruOBqOOBjeWHpueQhlxuICAgIGlmICghdGhpcy5pc1Jlc1NQKSByZXR1cm47XG4gICAgLy8g5LiA5bqm44Gg44GR5Yem55CGXG4gICAgLy8gaWYgKHRoaXMuaXNTZXRTUFNpemUpIHJldHVybjtcbiAgICAvLyB0aGlzLmlzU2V0U1BTaXplID0gdHJ1ZTtcblxuICAgIHZhciAkaW1nID0gJHRhcmdldCxcbiAgICAgICAgbGVuID0gJGltZy5sZW5ndGg7XG5cbiAgICAkaW1nLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgIHZhciB3ID0gTWF0aC5mbG9vcigkKHRoaXMpLndpZHRoKCkgLyAyKSxcbiAgICAgICAgICAgIGggPSBNYXRoLmZsb29yKCQodGhpcykuaGVpZ2h0KCkgLyAyKTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgJ3dpZHRoJzogdyxcbiAgICAgICAgICAgICdoZWlnaHQnOiBoLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobGVuID09IGkgKyAxKSAkKHdpbmRvdykudHJpZ2dlcignc2V0U3BaaWVFbmQnKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIOOCueODnuODm+aTjeS9nOeEoeWKuVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0UHJldmVudCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbigndG91Y2htb3ZlLm5vQ29udHJvbCcsIGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt9KTtcblxuICB9XG5cbiAgcmVtb3ZlUHJldmVudCgpIHtcblxuICAgICQod2luZG93KS5vZmYoJ3RvdWNobW92ZS5ub0NvbnRyb2wnKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICBob3N0LHByb3Rjb2xcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByb3RvY29sKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sO1xuXG4gIH1cbiAgICBcbiAgaG9zdCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAvLyByZXR1cm4gbG9jYXRpb24uaG9zdFxuXG4gIH1cblxuICBwb3J0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBvcnQ7XG5cbiAgfVxuICAgICAgICBcbiAgcGF0aCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHQoZSkge1xuXG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuXG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgZGlzYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbndoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG9sZGVyIGJyb3dzZXJzLCBJRVxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSAgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2JpbGVcbiAgICBkb2N1bWVudC5vbmtleWRvd24gID0gdGhpcy5wcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XG5cbiAgfVxuXG4gIGVuYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub253aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL1V0aWwuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBGdW5jXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5ibGFuaygpO1xuICAgIHRoaXMuZGVidWdnZXIoKTtcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuICAgIHRoaXMuZXhwYW5kalF1ZXJ5KCk7XG5cbiAgfVxuXG4gIGJsYW5rKCkge1xuXG4gICAgJCgoKT0+eyQoJy5ibGFuaycpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTt9KTtcblxuICB9XG5cbiAgZGVidWdnZXIoKSB7XG5cbiAgICAvLyDjg4fjg5Djg4PjgrDjg6Ljg7zjg4nliIfmm79cbiAgICB2YXIgUkVMRUFTRSA9IGdiLmluLmNvbmYuUkVMRUFTRTtcblxuICAgIC8vIOe9ruaPm+WvvuixoeOBruODoeOCveODg+ODieOCkumFjeWIl+OBqOOBl+OBpuS/neaMgeOBmeOCi1xuICAgIHZhciBtZXRob2RzID0gW1xuICAgICAgJ2xvZycsXG4gICAgICAnZGVidWcnLFxuICAgICAgJ2luZm8nLFxuICAgICAgJ3dhcm4nLFxuICAgICAgJ2Vycm9yJyxcbiAgICAgICdkaXInLFxuICAgICAgJ3RyYWNlJyxcbiAgICAgICdhc3NlcnQnLFxuICAgICAgJ2RpcnhtbCcsXG4gICAgICAnZ3JvdXAnLFxuICAgICAgJ2dyb3VwRW5kJyxcbiAgICAgICd0aW1lJyxcbiAgICAgICd0aW1lRW5kJyxcbiAgICAgICdjb3VudCcsXG4gICAgICAncHJvZmlsZScsXG4gICAgICAncHJvZmlsZUVuZCdcbiAgICBdO1xuXG4gICAgLy8gY29uc29sZeOBjOS9v+OBiOOBquOBhOWgtOWQiOOBr+epuuOBruOCquODluOCuOOCp+OCr+ODiOOCkuioreWumuOBl+OBpuOBiuOBj1xuICAgIGlmKCB0eXBlb2Ygd2luZG93LmNvbnNvbGUgPT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgIHdpbmRvdy5jb25zb2xlID0ge307XG4gICAgfVxuXG4gICAgLy8g5ZCE44Oh44K944OD44OJ44KSd2luZG9344G455u05o6l6L+95Yqg44GX44Gm6KGM44GPXG4gICAgZm9yKCB2YXIgaSBpbiBtZXRob2RzICl7XG4gICAgICAoZnVuY3Rpb24oIG0gKXtcblxuICAgICAgIC8vIGNvbnNvbGXjgavjgYLjgovvvJ/jg4fjg5Djg4PjgrDjg6Ljg7zjg4njga/mnInlirnvvJ9jb25zb2xl44Gu44KC44Gu44Gv6Zai5pWw77yfXG4gICAgICAgaWYoIGNvbnNvbGVbbV0gJiYgIVJFTEVBU0UgJiYgdHlwZW9mIGNvbnNvbGVbbV0gPT09IFwiZnVuY3Rpb25cIiApe1xuICAgICAgICB3aW5kb3dbbV0gPSBjb25zb2xlW21dLmJpbmQoY29uc29sZSk7XG4gICAgICAgfSBlbHNlIHvjgIAvLyBkZWJ1Z01vZGXjgYxmYWxzZSzjgoLjgZfjgY/jga/oqbLlvZPjg6Hjgr3jg4Pjg4njgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/jgIHnqbrjga7jg6Hjgr3jg4Pjg4njgpLnlKjmhI/jgZnjgotcbiAgICAgICAgd2luZG93W21dID0gZnVuY3Rpb24oKXt9O1xuICAgICAgIH1cblxuICAgICAgfSkoIG1ldGhvZHNbaV0gKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByZXBlbmQocGFyYW0pIHtcblxuICAgICQoJ2JvZHknKS5wcmVwZW5kKHBhcmFtKTtcblxuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuXG4gICAgdmFyIEZQUyA9IDEwMDAvNjA7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyBjaHJvbWXjgoTmnIDmlrDjga5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyDlj6TjgYRmaXJlZm9455SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIC8vIHNhZmFyaTbku6XliY3jgIFpT1M2IHNhZmFyaeeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIEZQUyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggdGltZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OyAgICAgIFxuXG4gIH1cblxuICBleHBhbmRqUXVlcnkoKSB7XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgIHc6MCwgXG4gICAgICBoOjAsIFxuICAgICAgYWRqdXN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdFc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdEg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgY2hlY2tDc3NCbGVuZCgpIHtcblxuICAgIGlmICgnQ1NTJyBpbiB3aW5kb3cgJiYgJ3N1cHBvcnRzJyBpbiB3aW5kb3cuQ1NTKSB7XG4gICAgICBpZiAoIXdpbmRvdy5DU1Muc3VwcG9ydHMoJ21peC1ibGVuZC1tb2RlJywgJ3NvZnQtbGlnaHQnKSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2coZ2IuaW4udS5pc0lFKTtcblxuICAgIGlmIChnYi5pbi51LmlzSUUpIHtcbiAgICAgIFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICBcbiAgICB9O1xuXG4gIH1cblxuICBub3RTYXZlSW1nKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgcGNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuXG4gICAgICAkKCgpPT57XG4gICAgICAgICQoXCJpbWdcIikub24oXCJjb250ZXh0bWVudVwiLCgpPT57XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgc3AgYW5kcm9pZFxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdmFyIHYgPSBnYi5pbi51LmlzQW5kcm9pZFZlcnNpb24oKTtcblxuICAgIGlmICh2PT11bmRlZmluZWQpIHJldHVybjtcbiAgICBpZiAodjw1KSB7XG5cbiAgICAgIHZhciB0aW1lcjtcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaHN0YXJ0XCIsKCk9PntcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgYWxlcnQoXCLnlLvlg4/jga/kv53lrZjjgafjgY3jgb7jgZvjgpNcIilcbiAgICAgICAgfSw1MDApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hlbmRcIiwoKT0+e1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSAgICAgIFxuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRnVuYy5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUmVhZHlNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBSZWFkeVBlcmNlbnQgZnJvbSAnLi4vLi4vRnVuYy9SZWFkeVBlcmNlbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkeU1nciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmNvbXBsZXRlZCA9IDA7XG4gICAgdGhpcy50b3RhbCA9IDA7XG4gICAgdGhpcy5jdXJyZW50ID0gMDtcblxuXG4gICAgdGhpcy5vbkNvbXBsZXRlZEZ1bmMgPSAoKT0+e307XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIHRoaXMucmVhZHlQZXJjZW50ID0gbmV3IFJlYWR5UGVyY2VudCgpO1xuXG4gIH1cblxuICBvbkNvbXBsZXRlKCkge1xuXG4gICAgLy8gdXBkYXRl5Yem55CG44KS44KE44KB44KLXG4gICAgZ2IuaW4udXAucmVtb3ZlKCdyZWFkeVBlcmNlbnQnLCB0aGlzLnJlYWR5UGVyY2VudC51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyDmupblgpnlrozkuoblvozjga7lh6bnkIZcbiAgICB0aGlzLm9uQ29tcGxldGVkRnVuYygpO1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvUmVhZHlNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFJlYWR5UGVyY2VudFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHlQZXJjZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuJGxvYWRpbmcgPSAkKCcjbG9hZGluZycpO1xuICAgIHRoaXMuJGJhciA9ICQoJy5sb2FkaW5nQmFyJyk7XG4gICAgdGhpcy4kcGVyY2VudCA9ICQoJy5sb2FkaW5nUGVyY2VudCcpO1xuXG4gICAgdGhpcy5pc0xvY2sgPSBmYWxzZTtcbiAgICB0aGlzLnNldFRpbWVvdXRMb2NrID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBpZiAoIWdiLmluLmNvbmYud2ViRm9udExvYWRlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHRhcmdldCA9IChnYi5pbi5ybS5jb21wbGV0ZWQgLyBnYi5pbi5ybS50b3RhbCkgKiAxMDA7XG5cbiAgICBnYi5pbi5ybS5jdXJyZW50ICs9ICh0YXJnZXQgLSBnYi5pbi5ybS5jdXJyZW50KSAqIDAuMTtcbiAgICAvLyB0aGlzLiRiYXIuY3NzKHsgd2lkdGg6IGdiLmluLnJtLmN1cnJlbnQgKyAnJScgfSk7IC8vcGVyY2VudCDkvLjjgbDjgZlcbiAgICB0aGlzLiRwZXJjZW50LnRleHQoIE1hdGguZmxvb3IoZ2IuaW4ucm0uY3VycmVudCkgKyAnJScpO1xuXG4gICAgLy8g57WC5LqG5Yem55CGXG4gICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgPj0gMTAwICYmICF0aGlzLmlzTG9jaykge1xuICAgICAgdGhpcy5pc0xvY2sgPSB0cnVlO1xuICAgICAgZ2IuaW4ucm0ub25Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8vIGN1cnJlbnQg44GMIDk5Ljkg44KI44KK5aSn44GN44GR44KM44GwIDEwMCDjgajopovjgarjgZfjgabntYLkuoblh6bnkIbjgbhcbiAgICBpZiAoZ2IuaW4ucm0uY3VycmVudCA+IDk5LjkpIHtcbiAgICAgIGdiLmluLnJtLmN1cnJlbnQgPSAxMDA7XG4gICAgfVxuXG4gICAgLy8gaWUxMeOBryw5OeOBq+OBquOBo+OBpuOAgTXnp5LntYzjgaPjgabjgoIxMDDjgafjgarjgZHjgozjgbDjgIHlvLfliLbnmoTjgavjgIHooajnpLpcbiAgICAvLyDjgZ3jga7pmpvjgIFjb21wbGV0ZeOBl+OBpueEoeOBkeOCjOOBsOiDjOaZr+OBr+mdmeatoueUu+OBq1xuICAgIC8vIGlmIChnYi5pbi51LmlzSUUxMSkge1xuXG4gICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgPiA5OSAmJiAhdGhpcy5zZXRUaW1lb3V0TG9jaykge1xuICAgIHRoaXMuc2V0VGltZW91dExvY2sgPSB0cnVlO1xuXG4gICAgbG9nKCc5OSEhISEnKTtcbiAgICAgIC8vIGdiLmluLnJtLmN1cnJlbnQgPSA5OTtcblxuICAgICAgc2V0VGltZW91dCgoKT0+e1xuXG4gICAgICAgIGxvZygnNSEhIScpXG5cbiAgICAgICAgaWYgKGdiLmluLnJtLmN1cnJlbnQgIT09IDEwMCkge1xuXG4gICAgICAgICAgZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgICAgICAgJCgnLmJnT3ZlcmxheUltZycpLmFkZENsYXNzKCdpc0FjdGl2ZScpO1xuXG4gICAgICAgICAgbG9nKCflr77lv5zvvIHvvIEnKVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gICAgICB9LDUwMDApO1xuXG4gICAgfTtcblxuICAgIC8vIH07XG5cbiAgfVxuXG4gIHJlbW92ZSgpIHtcblxuXG4gICAgVHdlZW5NYXhcbiAgICAgIC50byh0aGlzLiRsb2FkaW5nLCAyLjgsIHtcbiAgICAgICAgc2NhbGU6IDEuMixcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTooKT0+e1xuICAgICAgICAgIHRoaXMuJGxvYWRpbmcucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pICAgIFxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi51cC5hZGQoJ3JlYWR5UGVyY2VudCcsdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1JlYWR5UGVyY2VudC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDnlLvpnaLmm7TmlrDjgq/jg6njgrlcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVcGRhdGVNZ3JcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVNZ3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy/mm7TmlrDlm57mlbBcbiAgICB0aGlzLmNudCA9IDA7XG5cbiAgICAvL+avjuODleODrOODvOODoOWun+ihjOOBleOBm+OCi+mWouaVsOOCkuS/neaMgVxuICAgIHRoaXMudXBkYXRlTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5sZW4gPSAwO1xuICAgIHRoaXMuVGltZXIgPSBudWxsO1xuICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAg5a6f6KGM44GX44Gf44GE6Zai5pWw44KS55m76YyyXG4gICAqICBmdW5jIDog6Zai5pWwXG4gICAqL1xuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMudXBkYXRlTGlzdC5wdXNoKG9iaik7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAg5a6f6KGM44GX44Gf44GE6Zai5pWw44KS5YmK6ZmkXG4gICAqICBmdW5jIDog6Zai5pWwXG4gICAqL1xuICByZW1vdmUobmFtZSkge1xuXG4gICAgdmFyIHRhcmdldCA9IHtuYW1lOm5hbWUsZnVuYzooKT0+e319O1xuXG4gICAgVXBkYXRlTWdyLmFyclJlbW92ZSh0aGlzLnVwZGF0ZUxpc3QsIHRhcmdldCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAg5pu05pawKOeZu+mMsuOBleOCjOOBn+mWouaVsOOBrue3j+aVsOWIhuWun+ihjOOBmeOCiylcbiAgICovXG4gIHVwZGF0ZSgpIHtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy51cGRhdGVMaXN0KSB0aGlzLnVwZGF0ZUxpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDmm7TmlrDjga7lrp/ooYzplqLmlbDjga7lhoXlrrlcbiAgICovXG4gIGxvb3AoKSB7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuY250Kys7XG5cbiAgICB0aGlzLlRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICBpZiAodGhpcy5pc1N0b3ApIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuVGltZXIpO1xuICAgIFxuXG4gIH1cblxuICAvKipcbiAgICrjgIDmm7TmlrDlgZzmraJcbiAgICovXG4gIHN0b3AoKSB7XG5cbiAgICB0aGlzLmlzU3RvcCA9IHRydWU7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOabtOaWsOWGjemWi1xuICAgKi9cbiAgcmVzdW1lKCkge1xuXG4gICAgdGhpcy5pc1N0b3AgPSBmYWxzZTtcbiAgICB0aGlzLmxvb3AoKTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA6Z2Z55qE44Oh44Oz44OQ6Zai5pWwXG4gICAqL1xuICBzdGF0aWMgYXJyUmVtb3ZlKGFyciAsIHRhcmdldCkge1xuXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGNoZWNrO1xuICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgY2hlY2sgPSBhcnJbIGkgXTtcblxuICAgICAgaWYoIGNoZWNrLm5hbWUgPT0gdGFyZ2V0Lm5hbWUpe1xuICAgICAgICBhcnIuc3BsaWNlKCBpICwgMSApIDtcbiAgICAgICAgaS0tO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvVXBkYXRlTWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBSZXNpemVNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc2l6ZU1nciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnJlc2l6ZUxpc3QgPSBbXTtcbiAgICB0aGlzLndzID0ge3c6MCwgaDowLCBvbGRXOi0xLCBvbGRIOi0xfTtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKGUpe3NlbGYub25SZXNpemUuY2FsbChzZWxmLGUpO30pO1xuICAgIHRoaXMuZ2V0V2luZG93U2l6ZSgpO1xuXG4gIH1cblxuICBvblJlc2l6ZShlKSB7XG5cbiAgICB0aGlzLmdldFdpbmRvd1NpemUoKTtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5yZXNpemVMaXN0KSB0aGlzLnJlc2l6ZUxpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBXKCkge1xuXG4gICAgICByZXR1cm4gdGhpcy53cy53O1xuICAgIFxuICB9XG4gIFxuICBIKCkge1xuXG4gICAgICByZXR1cm4gdGhpcy53cy5oO1xuICBcbiAgfVxuXG4gIGdldFdpbmRvd1NpemUoKXtcblxuICAgIHZhciB3ID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLndzLm9sZFcgPSB0aGlzLndzLnc7XG4gICAgdGhpcy53cy5vbGRIID0gdGhpcy53cy5oO1xuICAgIHRoaXMud3MudyA9IHc7XG4gICAgdGhpcy53cy5oID0gaDtcblxuICB9XG5cbiAgYWRkKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLnJlc2l6ZUxpc3QucHVzaChvYmopO1xuICAgIFxuICB9XG5cbiAgcmVtb3ZlKG5hbWUpIHtcblxuICAgIFJlc2l6ZU1nci5hcnJSZW1vdmUodGhpcy5yZXNpemVMaXN0LCBuYW1lKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICDpnZnnmoTjg6Hjg7Pjg5BcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0YXRpYyBhcnJSZW1vdmUoYXJyICwgbmFtZSkge1xuXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgdmFyIGNoZWNrO1xuICAgIGZvciggdmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgY2hlY2sgPSBhcnJbIGkgXTtcblxuICAgICAgaWYoIGNoZWNrLm5hbWUgPT0gbmFtZSl7XG4gICAgICAgIGFyci5zcGxpY2UoIGkgLCAxICkgO1xuICAgICAgICBpLS07XG4gICAgICAgIGxlbi0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9SZXNpemVNZ3IuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFNjcm9sbE1nclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsTWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2Nyb2xsTGlzdCA9IFtdO1xuICAgIHRoaXMuc2Nyb2xsRW5kTGlzdCA9IFtdO1xuICAgIHRoaXMudyA9IDA7dGhpcy5oID0gMDtcbiAgICB0aGlzLnN0ID0gMDsgLy8g54++5Zyo44Guc2Nyb2xsIHRvcFxuICAgIHRoaXMuc2IgPSAwOyAvLyDnj77lnKjjga5zY3JvbGwgYm90dG9tXG4gICAgdGhpcy5zdiA9IDA7IC8vIOePvuWcqOOBruOCueOCr+ODreODvOODq+mHj1xuXG4gICAgdGhpcy5TVEFtb3VudCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuXG4gICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5nZXRXaW5kb3dTaXplKCk7XG4gICAgdGhpcy5hZGQoJ2VuZCcsdGhpcy5lbmQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG4gIGFkZChuYW1lLCBmdW5jKSB7XG5cbiAgICB2YXIgb2JqID0ge25hbWU6bmFtZSxmdW5jOmZ1bmN9O1xuXG4gICAgdGhpcy5zY3JvbGxMaXN0LnB1c2gob2JqKTtcbiAgICBcbiAgfVxuXG4gIHJlbW92ZShuYW1lKSB7XG5cbiAgICBTY3JvbGxNZ3IuYXJyUmVtb3ZlKHRoaXMuc2Nyb2xsTGlzdCwgbmFtZSk7XG5cbiAgfVxuXG4gIHJlbW92ZSh0YXJnZXQpIHtcblxuICAgIFNjcm9sbE1nci5hcnJSZW1vdmUodGhpcy5zY3JvbGxMaXN0LCB0YXJnZXQpO1xuXG4gIH1cblxuICBvblJlc2l6ZShlKSB7XG5cbiAgICB0aGlzLmdldFdpbmRvd1NpemUoKTtcblxuICB9XG5cbiAgb25TY3JvbGwoZSkge1xuXG4gICAgaWYgKHRoaXMuaXNTdGFydCkge1xuICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG4gICAgICAvLyBsb2coJ3Jlc2l6ZVN0YXJ0Jyk7XG4gICAgICAvLyDmnIDliJ3jgaDjgZHjga7lh6bnkIZcbiAgICB9O1xuXG4gICAgdGhpcy5zdCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB0aGlzLnNiID0gdGhpcy5zdCArIHRoaXMuaDtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zY3JvbGxMaXN0KSB0aGlzLnNjcm9sbExpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBvbk1vdXNlV2hlZWwoZSxkZWx0YSxkZWx0YVgsZGVsdGFZKSB7XG5cbiAgICB0aGlzLlNUQW1vdW50ID0gZGVsdGFZO1xuICAgIGlmIChnYi5pbi51LmlzV2luKCkpIHRoaXMuU1RBbW91bnQgKj0gNjA7XG4gICAgaWYgKGdiLmluLnUuaXNGRigpICYmICFnYi5pbi51LmlzV2luKCkpIHRoaXMuU1RBbW91bnQgKj0gNjA7XG4gICAgLy8gaWYgKE1hdGguYWJzKHRoaXMuU1RBbW91bnQpID4gMTApIHRoaXMuU1RBbW91bnQgKj0gMC40O1xuICAgIHRoaXMub2Zmc2V0ICs9IHRoaXMuU1RBbW91bnQ7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2Nyb2xsTGlzdCkgdGhpcy5zY3JvbGxMaXN0W2ldLmZ1bmMoKTtcblxuICB9XG5cbiAgZ2V0V2luZG93U2l6ZSgpe1xuXG4gICAgdGhpcy53ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIH1cblxuICBlbmQoZSkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLlRpbWVyKTtcbiAgICB0aGlzLlRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuaXNTdGFydCA9IHRydWU7XG4gICAgICAvLyBsb2coJ3Jlc2l6ZUVuZCcpO1xuXG4gICAgICBmb3IgKHZhciBpIGluIHNlbGYuc2Nyb2xsRW5kTGlzdCkgc2VsZi5zY3JvbGxFbmRMaXN0W2ldKCk7XG5cbiAgICB9LCAyMDApO1xuXG4gIH1cblxuICBhZGRGaXhlZE9iamVjdFNjcm9sbCgkdGFyZ2V0KSB7XG5cbiAgICB0aGlzLnNjcm9sbExpc3QucHVzaChmdW5jdGlvbigpe1xuXG4gICAgICAkdGFyZ2V0LmNzcyhcImxlZnRcIiwgLSQod2luZG93KS5zY3JvbGxMZWZ0KCkpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIChlKT0+e3RoaXMub25SZXNpemUoZSk7fSk7XG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCAoZSk9Pnt0aGlzLm9uU2Nyb2xsKGUpO30pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZXdoZWVsJywgKGUsZGVsdGEsZGVsdGFYLGRlbHRhWSk9Pnt0aGlzLm9uTW91c2VXaGVlbChlLGRlbHRhLGRlbHRhWCxkZWx0YVkpO30pO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIOmdmeeahOODoeODs+ODkFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGljIGFyclJlbW92ZShhcnIgLCBuYW1lKSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSBuYW1lKXtcbiAgICAgICAgYXJyLnNwbGljZSggaSAsIDEgKSA7XG4gICAgICAgIGktLTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL0V2ZW50TWdyL1Njcm9sbE1nci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTW91c2VNZ3Jcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlTWdyIHtcblxuICBjb25zdHJ1Y3RvcigkdGFyZ2V0ID0gJChkb2N1bWVudCkpIHtcblxuICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXQ7XG5cbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG5cbiAgICB0aGlzLmN4ID0gMDtcbiAgICB0aGlzLmN5ID0gMDtcblxuICAgIHRoaXMubW91c2VNb3ZlTGlzdCA9IFt7bmFtZTonZGVmJyxmdW5jOigpPT57fX1dO1xuICAgIHRoaXMubW91c2VNb3ZlU3RhcnRMaXN0ID0gW3tuYW1lOidkZWYnLGZ1bmM6KCk9Pnt9fV07XG4gICAgdGhpcy5tb3VzZU1vdmVFbmRMaXN0ID0gW3tuYW1lOidkZWYnLGZ1bmM6KCk9Pnt9fV07XG5cbiAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xuICAgIHRoaXMuVGltZXIgPSBudWxsO1xuICAgIHRoaXMuZW5kVGltZSA9IDEwO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgdGhpcy5hZGQoJ29uRW5kJywgdGhpcy5vbkVuZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgb25Ub3VjaG1vdmUoZSkge1xuXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy54ID0gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYOyBcbiAgICB0aGlzLnkgPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgfVxuXG4gIG9uTW91c2Vtb3ZlKGUpIHtcblxuICAgIC8vIGxvZyh0aGlzLm1vdXNlTW92ZUxpc3QpO1xuXG4gICAgaWYgKHRoaXMuaXNTdGFydCkge1xuICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG5cbiAgICAgIC8vIOacgOWIneOBoOOBkeOBruWHpueQhlxuICAgICAgLy8gbG9nKCdtb3ZlU3RhcnQnKTtcblxuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLm1vdXNlTW92ZVN0YXJ0TGlzdCkgdGhpcy5tb3VzZU1vdmVTdGFydExpc3RbaV0uZnVuYygpO1xuXG4gICAgfTtcblxuICAgIGlmIChlLm9mZnNldFg9PXVuZGVmaW5lZCkgeyAvLyB0aGlzIHdvcmtzIGZvciBGaXJlZm94XG4gICAgICAgdGhpcy54ID0gZS5wYWdlWCAtIHRoaXMuJHRhcmdldC5vZmZzZXQoKS5sZWZ0O1xuICAgICAgIHRoaXMueSA9IGUucGFnZVkgLSB0aGlzLiR0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAgICB9IGVsc2UgeyAvLyB3b3JrcyBpbiBHb29nbGUgQ2hyb21lXG4gICAgICAgdGhpcy54ID0gZS5wYWdlWCAtICQod2luZG93KS5zY3JvbGxMZWZ0KCk7XG4gICAgICAgdGhpcy55ID0gZS5wYWdlWSAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgfVxuXG4gICAgdGhpcy5jeCA9ICggZS5jbGllbnRYIC0gZ2IuaW4uci5XKCkvMiApO1xuICAgIHRoaXMuY3kgPSAoIGUuY2xpZW50WSAtIGdiLmluLnIuSCgpLzIgKTtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5tb3VzZU1vdmVMaXN0KSB0aGlzLm1vdXNlTW92ZUxpc3RbaV0uZnVuYygpO1xuXG4gIH1cblxuICBvbkVuZChlKSB7XG5cbiAgICBpZiAodGhpcy5UaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuVGltZXIpO1xuICAgIHRoaXMuVGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xuXG4gICAgICAvLyBsb2coJ21vdmVFbmQnKTtcblxuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLm1vdXNlTW92ZUVuZExpc3QpIHRoaXMubW91c2VNb3ZlRW5kTGlzdFtpXS5mdW5jKCk7XG5cbiAgICB9LCB0aGlzLmVuZFRpbWUpO1xuXG4gIH1cblxuICBhZGQobmFtZSwgZnVuYykge1xuXG4gICAgdmFyIG9iaiA9IHtuYW1lOm5hbWUsZnVuYzpmdW5jfTtcblxuICAgIHRoaXMubW91c2VNb3ZlTGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cbiBcbiAgYWRkU3RhcnQgKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLm1vdXNlTW92ZVN0YXJ0TGlzdC5wdXNoKG9iaik7XG4gICAgXG4gIH1cblxuICBhZGRFbmQgKG5hbWUsIGZ1bmMpIHtcblxuICAgIHZhciBvYmogPSB7bmFtZTpuYW1lLGZ1bmM6ZnVuY307XG5cbiAgICB0aGlzLm1vdXNlTW92ZUVuZExpc3QucHVzaChvYmopO1xuICAgIFxuICB9XG5cbiAgcmVtb3ZlKG5hbWUpIHtcblxuICAgIE1vdXNlTWdyLmFyclJlbW92ZSh0aGlzLm1vdXNlTW92ZUxpc3QsIG5hbWUpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIOmdmeeahOODoeODs+ODkFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RhdGljIGFyclJlbW92ZShhcnIgLCBuYW1lKSB7XG5cbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICB2YXIgY2hlY2s7XG4gICAgZm9yKCB2YXIgaSA9IDAgOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBjaGVjayA9IGFyclsgaSBdO1xuXG4gICAgICBpZiggY2hlY2submFtZSA9PSBuYW1lKXtcbiAgICAgICAgYXJyLnNwbGljZSggaSAsIDEgKSA7XG4gICAgICAgIGktLTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCl7XG5cbiAgICB0aGlzLiR0YXJnZXQub2ZmKFwidG91Y2htb3ZlLk1vdXNlTWdyXCIpO1xuICAgIHRoaXMuJHRhcmdldC5vZmYoXCJtb3VzZW1vdmUuTW91c2VNZ3JcIik7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpe1xuXG4gICAgdGhpcy4kdGFyZ2V0Lm9uKFwidG91Y2htb3ZlLk1vdXNlTWdyXCIsIChlKT0+e3RoaXMub25Ub3VjaG1vdmUoZSk7fSk7XG4gICAgdGhpcy4kdGFyZ2V0Lm9uKFwibW91c2Vtb3ZlLk1vdXNlTWdyXCIsIChlKT0+e3RoaXMub25Nb3VzZW1vdmUoZSk7fSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9FdmVudE1nci9Nb3VzZU1nci5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IExvYWRNZ3JcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlci5qcyc7XG5pbXBvcnQgU2VjMDFWaWRlbyBmcm9tICcuLi9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkTWdyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICAvLyDjgZ3jga7ku5ZcbiAgICAvLyDjgr3jg7zjgrfjg6Pjg6vjgrnjgq/jg6rjg5fjg4jjgarjgalcbiAgICAvLyB0aGlzLnNuc1NjcmlwdCgpO1xuXG4gICAgLy8gdGhpcy5sb2FkWW91dHViZVNjcmlwdCgpO1xuXG4gICAgLy8gc2VjdGlvbjAy44Gn5L2/44GG5aSn6YeP44Gu55S75YOP44KS44Ot44O844OJIC8vIHdlYiB3b3JrZXLjgarjganjgoLkvb/jgaPjgaZcbiAgICAvLyB0aGlzLnNlYzAySW1nKCk7XG5cbiAgICAvLyB0aGlzLndlYkZvbnQoKTtcblxuICB9XG5cbiAgbG9hZFlvdXR1YmVTY3JpcHQoKSB7XG5cbiAgICB2YXIgbG9hZGVyID0gbmV3IExvYWRlcigpO1xuXG4gICAgdmFyIGxlbiA9IDE7XG4gICAgZ2IuaW4ucm0udG90YWwgKz0gbGVuOyAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcbiAgICBpZiAoZ2IuaW4udS5pc1NQKSBnYi5pbi5ybS5jb21wbGV0ZWQrKztcblxuICAgIHZhciBjYiA9ICgpPT57XG5cbiAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuXG4gICAgfVxuXG4gICAgbG9hZGVyLnlvdXR1YmVJZnJhbWVTY3JpcHQoY2IpO1xuXG4gIH1cblxuICBzZWMwMkltZygpIHtcblxuICAgIC8vIGJnVmlkZW9UaWxl55So44Gu6YCj55Wq55S75YOP44Gu6Kqt44G/6L6844G/XG4gICAgZ2IuaW4ubG9hZFNlYzAySW1nID0gdGhpcy5sb2FkZXIgPSBuZXcgTG9hZGVyKCk7XG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG4gICAgICB2YXIgbGVuID0gZ2IuaW4uY29uZi5zZWMwMkltZ051bTtcbiAgICAgIGdiLmluLnJtLnRvdGFsICs9IGxlbjvjgIAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcbiAgICAgIHZhciBwYXRoID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9tb3ZpZS9iZ0ltZy8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGVuID0gMTk7XG4gICAgICBnYi5pbi5ybS50b3RhbCArPSBsZW4744CALy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG4gICAgICB2YXIgcGF0aCA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvbW92aWUvYmdJbWdTUC8nO1xuICAgIH1cblxuICAgIHZhciBjYiA9ICgpPT57XG4gICAgICAvLyBnYi5pbi5TZWMwMkJnLmNyZWF0ZSgpO1xuICAgIH1cbiAgICB2YXIgY2IwMiA9ICgpPT57XG4gICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICB9XG5cbiAgICAvLyB0aGlzLmxvYWRlci5pbWdTZXJpYWxMb2FkKGxlbixwYXRoLCd0Zm55XycsY2IsY2IwMik7XG4gICAgdGhpcy5sb2FkZXIuaW1nKGxlbisxLHBhdGgsJ3RmbnlfJyxjYixjYjAyKTtcblxuICB9XG5cbiAgc2VjdGlvbjA0UHJvZHVjdFNoYWRlcigpIHtcblxuICAgIHZhciBzaGFkZXJzID0gW107XG4gICAgdmFyIHNoYWRlckxvYWRMaXN0ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAvLyBnYi5DbG9jayxcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGdiLlBsYXNtYSxcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2IuU2VwaWEsXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGdiLk1vc2FpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgZ2IuWm9vbUJsdXIsXG4gICAgICAgICAgICAgICAgICAgICAgIGdiLlpvb21CbHVyLFxuICAgICAgICAgICAgICAgICAgICAgICBnYi5UcmFuc2l0aW9uMDIsXG4gICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgdmFyIGxlbiA9IHNoYWRlckxvYWRMaXN0Lmxlbmd0aDtcbiAgICBnYi5pbi5ybS50b3RhbCArPSBsZW47IC8vIGxvYWTmlbDjga50b3RhbOOCkuioiOeul1xuXG4gICAgdmFyIHNoYWRlclNlcmlhbExvYWQgPSAobGVuLCBjYik9PntcblxuICAgICAgICB2YXIgc2hhZGVyLGNudD0wO1xuXG4gICAgICAgIHZhciBsb2FkID0gKGkpPT57XG4gICAgICAgICAgc2hhZGVyID0gbmV3IHNoYWRlckxvYWRMaXN0W2ldKGNvbXApO1xuICAgICAgICAgIHNoYWRlcnMucHVzaChzaGFkZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjb21wID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICBjbnQrKztcbiAgICAgICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICAgICAgICBpZihjbnQgPT0gbGVuKSBjYihzaGFkZXJzKTtcbiAgICAgICAgICBlbHNlIGxvYWQoY250KTtcbiAgICAgICAgfTtcblxuICAgICAgICBsb2FkKGNudCk7XG5cbiAgICB9XG5cbiAgICBzaGFkZXJTZXJpYWxMb2FkKHNoYWRlckxvYWRMaXN0Lmxlbmd0aCwoc2hhZGVycyk9PntcblxuICAgICAgdGhpcy5zaGFkZXJzID0gc2hhZGVycztcbiAgICAgIHRoaXMuc2VjdGlvbjA0UHJvZHVjdEltZygpO1xuXG4gICAgfSlcblxuICB9XG5cbiAgc2VjdGlvbjA0UHJvZHVjdEltZygpIHtcblxuICAgIHZhciB0ZXh0dXJlTGlzdCA9IFtcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC90aWZmYW55X2hhbmQxLmpwZycsXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3QvYnJvd24ucG5nJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC9ibHVlLnBuZycsXG4gICAgICAnL3Byb2plY3QtbmFtZS9hc3NldHMvcmVzb3VyY2UvaW1nL3Byb2R1Y3Qvd2hpdGUucG5nJyxcbiAgICAgICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9yZXNvdXJjZS9pbWcvcHJvZHVjdC90aWZmYW55Ymx1ZS5wbmcnLFxuICAgICAgJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3Jlc291cmNlL2ltZy9wcm9kdWN0L3BpbmsucG5nJyxcbiAgICBdOyAgICAgIFxuICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcblxuICAgIHZhciBsZW4gPSB0ZXh0dXJlTGlzdC5sZW5ndGg7XG4gICAgZ2IuaW4ucm0udG90YWwgKz0gbGVuOyAvLyBsb2Fk5pWw44GudG90YWzjgpLoqIjnrpdcblxuICAgIHZhciB0ZXh0dXJlU2VyaWFsTG9hZCA9IChsZW4sIGNiKT0+e1xuXG4gICAgICB2YXIgdGV4dHVyZSxjbnQ9MDtcblxuICAgICAgdmFyIGxvYWQgPSAoaSk9PntcbiAgICAgICAgdGV4dHVyZSA9IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUodGV4dHVyZUxpc3RbaV0sIG51bGwgLGNvbXApO1xuICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2godGV4dHVyZSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY29tcCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNudCsrO1xuICAgICAgICBnYi5pbi5ybS5jb21wbGV0ZWQrKztcbiAgICAgICAgaWYoY250ID09IGxlbikgY2IoKTtcbiAgICAgICAgZWxzZSBsb2FkKGNudCk7XG4gICAgICB9O1xuXG4gICAgICBsb2FkKGNudCk7XG5cbiAgICB9XG5cbiAgICB0ZXh0dXJlU2VyaWFsTG9hZCh0ZXh0dXJlTGlzdC5sZW5ndGgsICgpPT57JCh3aW5kb3cpLnRyaWdnZXIoJ29uU2VjdGlvbjA0UHJvZHVjdEltZycpO30pO1xuXG4gIH1cblxuICB3ZWJGb250KCkge1xuXG4gICAgLy8gd2ViIGZvbnQgbG9hZGVy55SocGFyYW1cbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgY3VzdG9tOiB7XG4gICAgICAgIGZhbWlsaWVzOiBbXG4gICAgICAgICAgJ0Nvcm1vcmFudCcsXG4gICAgICAgICAgJ1JvYm90byBDb25kZW5zZWQnXG4gICAgICAgICAgLy8gJ05vdG8gU2FucyBKYXBhbmVzZScsXG4gICAgICAgICAgLy8gJ1JvYm90bycsXG4gICAgICAgICAgLy8gJ0FsZWdyZXlhIFNhbnMnLFxuICAgICAgICAgIC8vICdBbGVncmV5YSBTYW5zIFNDJ1xuICAgICAgICAgIF0sXG4gICAgICAgIHVybHM6IFtcbiAgICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvcm1vcmFudDo1MDAsNTAwaXxSb2JvdG8rQ29uZGVuc2VkJ1xuICAgICAgICAgIC8vICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9jc3MvZm9udC5jc3MnLFxuICAgICAgICAgIC8vICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsMzAwJyxcbiAgICAgICAgICAvLyAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZWdyZXlhK1NhbnM6NDAwLDEwMCcsXG4gICAgICAgICAgLy8gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGVncmV5YStTYW5zK1NDOjQwMCwzMDAsMTAwJ1xuICAgICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBhY3RpdmU6IGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgICBcbiAgICAgICAgICBsb2coJ3dlYkZvbnQhISEhJyk7XG4gICAgICAgICAgZ2IuaW4uY29uZi53ZWJGb250TG9hZGVkID0gdHJ1ZTtcblxuICAgICAgfSBcbiAgICB9O1xuXG4gICAgdmFyIGxvYWRlciA9IG5ldyBMb2FkZXIoKTsgICBcbiAgICBsb2FkZXIud2ViRm9udChjb25maWcpO1xuXG4gIH1cblxuICBvbkVuZCgpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cblxuICAgIFxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9Mb2FkTWdyLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTG9hZGVyXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB0aGlzLmNudCA9IDA7XG5cbiAgfVxuXG4gIGpzb24oc3JjLGNiKSB7XG5cbiAgICAkLmdldEpTT04oc3JjLCAoZGF0YSk9PntcblxuICAgICAgY2IoZGF0YSk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgaW1nKGxlbiwgcGF0aCwgbmFtZSwgY2I9KCk9Pnt9LCBjYjAyPSgpPT57fSl7XG5cbiAgICB2YXIgaSwgaW1nLCBudGgsIGNudCA9IDEsIGxpc3QgPSBbXTtcblxuICAgIGZvcihpID0gMTtpIDwgbGVuO2krKyl7XG4gICAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG50aCA9IGdiLmluLnUuYWRkMChpLC01KTtcbiAgICAgIHRoaXMubGlzdC5wdXNoKGltZyk7XG4gICAgICBpbWcub25sb2FkID0gKCk9PntcbiAgICAgICAgY2IwMigpO1xuICAgICAgICBjbnQrKztcbiAgICAgICAgaWYoY250ID09IGxlbikgY2IoKTtcbiAgICAgIH1cbiAgICAgIGltZy5zcmMgPSBwYXRoK25hbWUrbnRoK1wiLmpwZ1wiO1xuICAgIH1cblxuICB9XG5cbiAgLy8gY2IwMiBsb2Fk5a6M5LqG5pmCIOmDveW6pumDveW6pueUqOOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICBpbWdTZXJpYWxMb2FkKGxlbiwgcGF0aCwgbmFtZSwgY2I9KCk9Pnt9LGNiMDI9KCk9Pnt9KXtcblxuICAgIHZhciBpLCBpbWcsIG50aCwgY250ID0gMCwgbGlzdCA9IFtdO1xuXG4gICAgdmFyIGxvYWQgPSAoaSk9PntcbiAgICAgICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG50aCA9IGdiLmluLnUuYWRkMChpLC01KTtcbiAgICAgICAgdGhpcy5saXN0LnB1c2goaW1nKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XG4gICAgICAgICAgY2IwMigpO1xuICAgICAgICAgIGNvbXAoKTtcbiAgICAgICAgfVxuICAgICAgICBpbWcuc3JjID0gcGF0aCtuYW1lK250aCtcIi5qcGdcIjtcbiAgICB9O1xuXG4gICAgdmFyIGNvbXAgPSAoKT0+e1xuICAgICAgICBjbnQrKztcbiAgICAgICAgaWYoY250ID09IGxlbil7XG4gICAgICAgICAgY2IoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbG9hZChjbnQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGxvYWQoY250KTtcbiAgfVxuXG4gIGFqYXhJbWdMb2FkKGNiKXtcblxuICAgIHZhciBpbWdOdW0gPSAkKCdpbWcnKS5sZW5ndGg7XG4gICAgdmFyIGNudCA9IDA7XG5cbiAgICAkKCdpbWcnKS5lYWNoKGZ1bmN0aW9uKGksIGVsbSkge1xuXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XG4gICAgICAgICAgY250Kys7XG4gICAgICAgICAgaWYgKGNudD09aW1nTnVtLTEpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpbWcuc3JjID0gZWxtLnNyYztcblxuICAgIH0pO1xuXG4gIH1cblxuICB2aWRlbyhzcmMsIGNiPSgpPT57fSkge1xuXG4gICAgdmFyIGlzTG9hZCA9IGZhbHNlO1xuICAgIHRoaXMudmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG4gICAgdmFyIHR5cGUgPSB0aGlzLnN1cHBvcnRWaWRlb0V4dCh0aGlzLnZpZGVvKTtcbiAgICBpZiAodHlwZSA9PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLCAoKT0+e1xuXG4gICAgICBpZiAoIXRoaXMuaXNMb2FkKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWRlby5sb29wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWRlby5wbGF5KCk7XG4gICAgICAgIGNiKCk7XG4gICAgICB9XG5cbiAgICB9LGZhbHNlKTtcblxuICAgIC8vIOODreODvOODiVxuICAgIHRoaXMudmlkZW8uc3JjID0gc3JjO1xuXG4gIH1cblxuICB5b3V0dWJlSWZyYW1lU2NyaXB0KGNiKSB7XG5cbiAgICAvLyBJRnJhbWUgUGxheWVyIEFQSSDjga7oqq3jgb/ovrzjgb9cbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgdGFnLm9ubG9hZCA9ICgpPT57XG5cbiAgICAgIGNiKCk7XG5cbiAgICB9O1xuXG4gICAgLy8gdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xuICAgIHRhZy5zcmMgPSBcImh0dHA6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xuICAgIHZhciBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcblxuXG4gICAgLy8gWW91VHViZeWLleeUu1xuICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVSZWFkeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgICB3aW5kb3cuY29uc29sZS5sb2coJ3lvdXR1YmVyZWFkeScpO1xuXG5cbiAgICB9XG5cbiAgfVxuXG4gIHN1cHBvcnRWaWRlb0V4dCgpIHtcblxuICAgIHZhciBleHQgPSBcIlwiO1xuICAgIGlmICh0aGlzLnZpZGVvLmNhblBsYXlUeXBlKFwidmlkZW8vd2VibVwiKSA9PSBcInByb2JhYmx5XCIgfHwgdGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL3dlYm1cIikgPT0gXCJtYXliZVwiKSB7XG4gICAgICBleHQgPSBcIndlYm1cIjtcbiAgICB9IGVsc2UgaWYodGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL21wNFwiKSA9PSBcInByb2JhYmx5XCIgfHwgdGhpcy52aWRlby5jYW5QbGF5VHlwZShcInZpZGVvL21wNFwiKSA9PSBcIm1heWJlXCIpIHtcbiAgICAgIGV4dCA9IFwibXA0XCI7XG4gICAgfSBlbHNlIGlmKHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby9vZ2dcIikgPT0gXCJwcm9iYWJseVwiIHx8IHRoaXMudmlkZW8uY2FuUGxheVR5cGUoXCJ2aWRlby9vZ2dcIikgPT0gXCJtYXliZVwiKSB7XG4gICAgICBleHQgPSBcIm9nZ1wiO1xuICAgIH1cblxuICAgIHJldHVybiBleHQ7XG5cbiAgfVxuXG4gIC8vV2ViRm9udOOBruODreODvOODgOODvOeuoeeQhlxuICB3ZWJGb250KGNvbmZpZykge1xuXG4gICAgLy8gd2ViIGZvbnQgbG9hZGVy55SoanPjga5hcHBlbmRcbiAgICB2YXIgd2YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB3Zi5zcmMgPSAoJ2h0dHBzOicgPT0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPyAnaHR0cHMnIDogJ2h0dHAnKSArXG4gICAgICAnOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvd2ViZm9udC8xL3dlYmZvbnQuanMnO1xuICAgIHdmLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICB3Zi5hc3luYyA9ICd0cnVlJztcbiAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdmLCBzKTtcblxuICAgIHZhciBhZ2FpbiA9ICgpPT57XG5cbiAgICAgIC8vIHl0LnBsYXllcuOBjGxvYWTjgZXjgozjgabjgYTjgarjgYTloLTlkIjjgpLogIPmha7jgZfjgaZcbiAgICAgIGlmKCh0eXBlb2YgV2ViRm9udCAhPT0gXCJ1bmRlZmluZWRcIikgJiYgV2ViRm9udCkge1xuXG4gICAgICAgICAgV2ViRm9udC5sb2FkKGNvbmZpZyk7XG5cbiAgICAgIH1lbHNle1xuXG4gICAgICAgICAgc2V0VGltZW91dChhZ2FpbiwgMTAwKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgYWdhaW4oKTsgICAgXG5cbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuXG4gICAgJCgnaHRtbCcpLmNzcygnb3BhY2l0eScsICcxJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cyhsZW4pIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbignbG9hZGVkJywgKGV2ZW50KT0+e1xuICAgICAgXG4gICAgICBzZWxmLmNudCsrO1xuICAgICAgaWYgKHNlbGYuY250ID09IGxlbikgb25Mb2FkZWQoKTtcblxuICAgIH0pO1xuICAgICAgXG4gIH0gXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvTG9hZGVyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTZWMwMVZpZGVvXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFlvdXR1YmVGb3JTZWMwMSBmcm9tICcuL1lvdXR1YmVGb3JTZWMwMS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYzAxVmlkZW8ge1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtKXtcblxuICAgIC8vIHNlYzAxdmlkZW/nlKhcbiAgICBnYi5pbi5ybS50b3RhbCsrO1xuICAgIGlmIChnYi5pbi51LmlzU1ApIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuXG4gICAgaWYgKGdiLmluLnUuaXNQQykgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gY3JlYXRlXG4gICAgdGhpcy52aWRlbyA9IG5ldyBZb3V0dWJlRm9yU2VjMDEoJ3NlYzAxVmlkZW8nLCBnYi5pbi5jb25mLnlvdXR1YmVJRDAxLCBudWxsKTtcbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFlvdXR1YmVGb3JTZWMwMVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IEZ1bGxTaXplIGZyb20gJy4uLy4uL015TGlicy9EaXNwbGF5L0xheW91dC9GdWxsU2l6ZS5qcyc7XG5pbXBvcnQgVG9wVGltZSBmcm9tICcuLi8uLi9EaXNwbGF5L1VJL1RvcFRpbWUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZb3V0dWJlRm9yU2VjMDEge1xuXG4gIGNvbnN0cnVjdG9yKGlkLHZpZGVvSUQsdmlkZW9MaXN0KSB7XG5cbiAgICB0aGlzLnBsYXllciA9IG51bGw7XG5cbiAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xuICAgIHRoaXMuaXNTZWVrTG9jayA9IGZhbHNlO1xuICAgIHRoaXMuaXNTZWVrTG9jazAyID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldHVwKGlkLHZpZGVvSUQsdmlkZW9MaXN0KTtcblxuICB9XG5cbiAgc2V0dXAoaWQsdmlkZW9JRCx2aWRlb0xpc3QpIHtcblxuICAgIC8vIHl0LnBsYXllcu+/ve+/vWxvYWTvv73vv73vv73vv73GpO+/ve+/vcqk77+977+977+977+9z6Tyv7yRXe+/ve+/ve+/ve+/vVxuICAgIGlmKCh0eXBlb2YgWVQgIT09IFwidW5kZWZpbmVkXCIpICYmIFlUICYmIFlULlBsYXllcil7XG5cbiAgICAgICAgLy8gY3JlYXRlXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFlULlBsYXllcihpZCwge1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgLy8g77+916Xvv71g77+977+9YO+/vc6377+9XG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJywgLy8g77+916Xvv71g77+977+9YO+/vc6436Tvv71cbiAgICAgICAgICAgIHZpZGVvSWQ6IHZpZGVvSUQsIC8vIFlvdVR1YmXvv73vv71JRFxuICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICdvblJlYWR5JzogdGhpcy5vblJlYWR5LmJpbmQodGhpcyksIC8vIO+/vdel77+9YO+/ve+/vWDvv73OnMqC5KSs77+9x6Tvv73vv73vv73vv73IpO+/ve+/vcuMZ++/ve+/vVxuICAgICAgICAgICAgICAnb25TdGF0ZUNoYW5nZSc6IHRoaXMub25QbGF5ZXJTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgICBhdXRvcGxheTogMSxcbiAgICAgICAgICAgICAgY29udHJvbHM6IDAsXG4gICAgICAgICAgICAgIHNob3dpbmZvOiAwLFxuICAgICAgICAgICAgICBhdXRvaGlkZTogMSxcbiAgICAgICAgICAgICAgcmVsOiAwLFxuICAgICAgICAgICAgICBlbmFibGVqc2FwaTogMSxcbiAgICAgICAgICAgICAgaXZfbG9hZF9wb2xpY3k6IDMsXG4gICAgICAgICAgICAgIGRpc2FibGVrYjoxLFxuICAgICAgICAgICAgICBtb2Rlc3RicmFuZGluZzogMSxcbiAgICAgICAgICAgICAgc3RhcnQ6IDIsXG4gICAgICAgICAgICAgIGxvb3A6IDEsXG4gICAgICAgICAgICAgIC8vIHBsYXlsaXN0OiB2aWRlb0xpc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGF5b3V0XG4gICAgICAgIHZhciBsID0gbmV3IEZ1bGxTaXplKCQoJyNiZ1dyYXAnKSwkKCcjc2VjMDFWaWRlbycpLDAsJ0Z1bGxTaXplU2VjMDFWaWRlbycpO1xuICAgICAgICBsLnRhcmdldERlZlcgPSAxOTIwO1xuICAgICAgICBsLnRhcmdldERlZkggPSAxMDgwO1xuICAgICAgICBsLnJ1bigpO1xuXG4gICAgfWVsc2V7XG5cbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnNldHVwLmJpbmQodGhpcyxpZCx2aWRlb0lELHZpZGVvTGlzdCksIDEwMCk7XG5cbiAgICB9XG5cblxuICB9XG5cbiAgb25SZWFkeSAoZSkge1xuXG4gICAgLy8g77+9373vv73vv73vv73IpO+/vVxuICAgIGUudGFyZ2V0LnNldFBsYXliYWNrUXVhbGl0eSgnaGlnaHJlcycpO1xuXG4gICAgLy8gdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICAgIC8vIHBsYXlcbiAgICBnYi5pbi50aW1lID0gbmV3IFRvcFRpbWUoKTtcbiAgICBnYi5pbi5zZWMwMVZpZGVvLnZpZGVvLnBsYXlCeU5ZVGltZSgpO1xuXG4gIH1cblxuICBvblBsYXllclN0YXRlQ2hhbmdlIChlKSB7XG5cbiAgICB2YXIgc3RhdHVzID0gZS5kYXRhO1xuXG4gICAgLy8g77+977+977+977+977+9S++/vcuk77+977+977+977+9yKTvv70gMFxuICAgIGlmIChzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLkVOREVEKSB7XG4gICAgIFxuICAgICAgICAvLyDvv73Tu++/ve+/ve+/ve+/ve+/vVxuICAgICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gLy8g77+977+977+977+977+90KTOpMik77+9IDFcbiAgICBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XG5cbiAgICAgIGlmICh0aGlzLmlzRmlyc3QpIHtcbiAgICAgICAgdGhpcy5pc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgIGdiLmluLnJtLmNvbXBsZXRlZCsrO1xuICAgICAgfVxuXG4gICAgICAvLyBlLnRhcmdldC5wYXVzZVZpZGVvKCk7XG5cbiAgICB9XG5cbiAgICAvLyAvLyDNo9a577+90KTOpMik77+9IDJcbiAgICAvLyBpZiAoc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ82j1rnvv73vv70nKTtcbiAgICAvLyB9XG5cbiAgICAvLyAvLyDvv73QpcOl1aXvv73vv73vv73vv73vv73QpM6kyKTvv70gM1xuICAgIC8vIGlmIChzdGF0dXMgPT0gd2luZG93LllULlBsYXllclN0YXRlLkJVRkZFUklORykge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygn77+90KXDpdWl77+977+977+977+977+977+9Jyk7XG4gICAgLy8gfVxuXG4gICAgLy8gLy8g77+9Xu+/ve+/ve+/ve+/ve+/vWfvv73fpM6kyKTvv70gNSA177+977+91rnvv73epO+/vcik77+977+977+977+966Sr77+96aGi77+977+977+977+977+9x6Tvv71wbGF5XG4gICAgaWYgKHN0YXR1cyA9PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuQ1VFRCkge1xuXG4gICAgICAgIHRoaXMucGxheUJ5TllUaW1lKCk7XG5cbiAgICB9XG5cblxuICAgIC8vIGZvciBzYWZhcmkg77+91aXvv73vv73vv73vv73rpbXvv73vv73vv73vv73vv73YpO+/ve+/ve+/vVxuICAgIGlmIChnYi5pbi51LmlzU2FmYXJpKCkgJiYgc3RhdHVzID09IHdpbmRvdy5ZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkcpIHRoaXMucGxheWVyLnNlZWtUbyh0aGlzLnBsYXllci5nZXRDdXJyZW50VGltZSgpICsgMC4xKTtcblxuICB9XG5cbiAgcGxheUJ5TllUaW1lKCkge1xuXG4gICAgdmFyIGggPSBnYi5pbi50aW1lLm55SDtcblxuICAgIGlmIChoID49IDUgJiYgaCA8IDEzKSB7XG5cbiAgICAgIHRoaXMucGxheWVyLnNlZWtUbygwKTtcblxuICAgIH0gZWxzZSBpZiAoaCA+PSAxMyAmJiBoIDwgMTgpIHtcblxuICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKDM2KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMucGxheWVyLnNlZWtUbyg2Nik7XG5cbiAgICB9XG5cbiAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcblxuXG4gIH1cblxuICBvblNlZWsoKSB7XG5cbiAgICB2YXIgbm93ID0gdGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKTsgICAgXG5cbiAgICBpZiAobm93IDwgMS4wKSB7XG4gICAgICB0aGlzLmlzU2Vla0xvY2sgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTZWVrTG9jazAyID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGlmIChub3cgPiA5MCAmJiAhdGhpcy5pc1NlZWtMb2NrKSB7XG4gICAgdGhpcy5pc1NlZWtMb2NrID0gdHJ1ZTtcblxuICAgICAgVHdlZW5NYXgudG8oJCgnLmJnT3ZlcmxheUltZycpLCAzLjAsIHtcbiAgICAgICAgICBvcGFjaXR5OiAxLCBcbiAgICAgICAgICBlYXNlOlBvd2VyMy5lYXNlSW5PdXQsXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgXG4gICAgaWYgKG5vdyA+IDEuMCAmJiAhdGhpcy5pc1NlZWtMb2NrMDIpIHtcbiAgICB0aGlzLmlzU2Vla0xvY2swMiA9IHRydWU7XG5cbiAgICAgIFR3ZWVuTWF4LnRvKCQoJy5iZ092ZXJsYXlJbWcnKSwgMy4wLCB7XG4gICAgICAgICAgb3BhY2l0eTogMCwgXG4gICAgICAgICAgZWFzZTpQb3dlcjMuZWFzZUluT3V0LFxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIFxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAuYWRkKCdZb3V0dWJlRm9yU2VjMDEnLHRoaXMub25TZWVrLmJpbmQodGhpcykpO1xuXG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG5cbiAgICBnYi5pbi51cC5yZW1vdmUoJ1lvdXR1YmVGb3JTZWMwMScpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1lvdXR1YmVGb3JTZWMwMS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRnVsbFNpemVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxTaXplIHtcblxuICBjb25zdHJ1Y3RvcigkV3JhcCwkVGFyZ2V0LG1vZGUsIG5hbWUpIHtcblxuICAgIHRoaXMuJHdyYXAgPSAkV3JhcDtcbiAgICB0aGlzLiR0YXJnZXQgPSAkVGFyZ2V0O1xuXG4gICAgdGhpcy5XID0gdGhpcy4kd3JhcC53aWR0aCgpO1xuICAgIHRoaXMuSCA9IHRoaXMuJHdyYXAuaGVpZ2h0KCk7XG4gICAgdGhpcy50YXJnZXRXO1xuICAgIHRoaXMudGFyZ2V0SDtcbiAgICB0aGlzLnRhcmdldERlZlc7XG4gICAgdGhpcy50YXJnZXREZWZIO1xuICAgIHRoaXMucmF0aW9XO1xuICAgIHRoaXMucmF0aW87XG4gICAgdGhpcy5tbDtcbiAgICB0aGlzLm10O1xuXG4gICAgdGhpcy5tb2RlID0gbW9kZSB8fCAwO1xuICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgJ2Z1bGxzaXplJztcblxuICAgIC8vIHRoaXMuaW5pdCgpO1xuICAgIC8vIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0U3R5bGUoKSB7XG5cbiAgICB0aGlzLiR3cmFwLmNzcyh7XG4gICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAgICB9KTtcbiAgICB0aGlzLiR0YXJnZXQuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuXG4gIH1cblxuICBnZXREZWYoKSB7XG5cbiAgICB0aGlzLnRhcmdldERlZlcgPSB0aGlzLiR0YXJnZXQuZ2V0KDApLmNsaWVudFdpZHRoIHx8IHRoaXMuJHRhcmdldC5nZXQoMCkud2lkdGggfHwgdGhpcy4kdGFyZ2V0LndpZHRoKCksXG4gICAgdGhpcy50YXJnZXREZWZIID0gdGhpcy4kdGFyZ2V0LmdldCgwKS5jbGllbnRIZWlnaHQgfHwgdGhpcy4kdGFyZ2V0LmdldCgwKS5oZWlnaHQgIHx8IHRoaXMuJHRhcmdldC5oZWlnaHQoKTtcblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcblxuICAgIHRoaXMuVyA9IHRoaXMuJHdyYXAud2lkdGgoKTtcbiAgICB0aGlzLkggPSB0aGlzLiR3cmFwLmhlaWdodCgpOyBcblxuICAgIHRoaXMucmF0aW9XID0gdGhpcy5IIC8gdGhpcy5XO1xuICAgIHRoaXMucmF0aW8gPSB0aGlzLnRhcmdldERlZkggLyB0aGlzLnRhcmdldERlZlcsXG5cbiAgICB0aGlzLm1sID0gLSAodGhpcy50YXJnZXREZWZXICogKHRoaXMuSCAvIHRoaXMudGFyZ2V0RGVmSCkpIC8gMjtcbiAgICB0aGlzLm10ID0gLSAodGhpcy50YXJnZXREZWZIICogKHRoaXMuVyAvIHRoaXMudGFyZ2V0RGVmVykpIC8gMjtcblxuICB9XG5cbiAgc2V0UG9zKCl7XG5cbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2NvdmVyJyB8fCB0aGlzLm1vZGUgPT0gMCkge1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gIOaeoOOBq+ODlOODg+OCv+ODquOBq+OBquOCi+OCiOOBhuOBqyBiYWNrZ3JvdW5kLXNpemUgY292ZXJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGlmICh0aGlzLnJhdGlvVyA+IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgIHZhciB3ID0gKHRoaXMuSCAvIHRoaXMudGFyZ2V0RGVmSCkgKiB0aGlzLnRhcmdldERlZlc7XG5cbiAgICAgICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgICAuY3NzKHsnaGVpZ2h0JzogdGhpcy5IfSlcbiAgICAgICAgICAgICAgLmNzcyh7J21hcmdpbi10b3AnOiAwLCdtYXJnaW4tbGVmdCc6IHRoaXMubWwsJ3RvcCc6MCwnbGVmdCc6JzUwJScsJ3dpZHRoJzp3fSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5yYXRpb1cgPD0gdGhpcy5yYXRpbykge1xuXG4gICAgICAgICAgICB2YXIgaCA9ICh0aGlzLlcgLyB0aGlzLnRhcmdldERlZlcpICogdGhpcy50YXJnZXREZWZIO1xuXG4gICAgICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgICAgLmNzcyh7J3dpZHRoJzogdGhpcy5XfSlcbiAgICAgICAgICAgICAgLmNzcyh7J21hcmdpbi10b3AnOiB0aGlzLm10LCdtYXJnaW4tbGVmdCc6IDAsJ3RvcCc6JzUwJScsJ2xlZnQnOjAsJ2hlaWdodCc6aH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ2NvbnRhaW4nIHx8IHRoaXMubW9kZSA9PSAxKXtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vICDmnqDlhoXjgavjg5Tjg4Pjgr/jg6rlj47jgb7jgovjgojjgYbjgasgYmFja2dyb3VuZC1zaXplIGNvbnRhaW5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGlmICh0aGlzLnJhdGlvVyA8IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAgIC5jc3MoeydoZWlnaHQnOiB0aGlzLkh9KVxuICAgICAgICAgICAgICAuY3NzKHsnbWFyZ2luLXRvcCc6IDAsJ21hcmdpbi1sZWZ0JzogdGhpcy5tbCwndG9wJzowLCdsZWZ0JzonNTAlJywnd2lkdGgnOidhdXRvJ30pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMucmF0aW9XID49IHRoaXMucmF0aW8pIHtcblxuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAgIC5jc3Moeyd3aWR0aCc6IHRoaXMuV30pXG4gICAgICAgICAgICAgIC5jc3MoeydtYXJnaW4tdG9wJzogdGhpcy5tdCwnbWFyZ2luLWxlZnQnOiAwLCd0b3AnOic1MCUnLCdsZWZ0JzowLCdoZWlnaHQnOidhdXRvJ30pO1xuXG4gICAgICAgIH1cblxuICAgICAgfSBcblxuICB9XG5cbiAgaW5pdCgpIHtcblxuICAgIHRoaXMuZ2V0RGVmKCk7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgICB0aGlzLmdldFNpemUoKTtcbiAgICB0aGlzLnNldFBvcygpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCh0aGlzLm5hbWUsIHRoaXMucnVuLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRGlzcGxheS9MYXlvdXQvRnVsbFNpemUuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFRvcFRpbWVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIDUwMHB45Lul5LiL44Gr44Gq44Gj44Gf44KJ6KGo56S6XG4vLyAgIOaZguioiGNvdW50XG4vLyAgIGNhbnZhc+ihqOekulxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BUaW1lIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJCgnLnRpbWVXcmFwJyk7XG4gICAgdGhpcy4kaDAxID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5oMDEnKTtcbiAgICB0aGlzLiRoMDIgPSB0aGlzLiR0YXJnZXQuZmluZCgnLmgwMicpO1xuICAgIHRoaXMuJG0wMSA9IHRoaXMuJHRhcmdldC5maW5kKCcubTAxJyk7XG4gICAgdGhpcy4kbTAyID0gdGhpcy4kdGFyZ2V0LmZpbmQoJy5tMDInKTtcblxuICAgIHRoaXMubnlIID0gMDtcblxuICAgIHRoaXMuaXNBbGVydCA9IChnYi5pbi5yLndzLmggPCA1MDApPyB0cnVlOiBmYWxzZTtcblxuICAgIHRoaXMuZGlzID0gMTQ7IC8v5pmC5beuXG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5ydW4oKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIGdiLmluLnUudGltZSgpO1xuICAgIHZhciBoID0gZ2IuaW4udS5ob3VyIC0gdGhpcy5kaXM7XG4gICAgaWYgKGg8MCkgaCA9IDI0ICsgaDtcbiAgICB0aGlzLm55SCA9IGg7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIC8vIOmWk+W8leOBjVxuICAgIGlmIChnYi5pbi51cC5jbnQlNjAhPT0wKSByZXR1cm47XG5cblxuICAgIGdiLmluLnUudGltZSgpO1xuXG4gICAgdmFyIGggPSBnYi5pbi51LmhvdXIgLSB0aGlzLmRpcztcbiAgICBpZiAoaDwwKSBoID0gMjQgKyBoO1xuXG4gICAgdGhpcy5ueUggPSBoO1xuXG4gICAgaCA9IGdiLmluLnUuYWRkMChoKS5zcGxpdCgnJyk7XG4gICAgdmFyIG0gPSBnYi5pbi51LmFkZDAoZ2IuaW4udS5taW51dGUpLnNwbGl0KCcnKTtcbiAgICB2YXIgcyA9IGdiLmluLnUuYWRkMChnYi5pbi51LnNlY29uZCkuc3BsaXQoJycpO1xuXG4gICAgdGhpcy4kaDAxLnRleHQoaFswXSlcbiAgICB0aGlzLiRoMDIudGV4dChoWzFdKVxuICAgIHRoaXMuJG0wMS50ZXh0KG1bMF0pXG4gICAgdGhpcy4kbTAyLnRleHQobVsxXSlcblxuICAgIC8vIHRoaXMuJGgwMS50ZXh0KHNbMF0pXG4gICAgLy8gdGhpcy4kaDAyLnRleHQoc1sxXSlcbiAgICAvLyB0aGlzLiRtMDEudGV4dChzWzBdKTtcbiAgICAvLyB0aGlzLiRtMDIudGV4dChzWzFdKTtcblxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgZ2IuaW4udXAuYWRkKCdUb3BUaW1lJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyDjgrPjg7Pjg57jga7ooajnpLrpnZ7ooajnpLpcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoe3JlcGVhdDogLTF9KTtcblxuICAgIHRsXG4gICAgICAuc2V0KHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSwge29wYWNpdHk6IDB9KVxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuY29sb24nKSwgMC41LCB7b3BhY2l0eTogMSxlYXNlOiBQb3dlcjIuZWFzZUluT3V0fSlcbiAgICAgIC50byh0aGlzLiR0YXJnZXQuZmluZCgnLmNvbG9uJyksIDAuNSwge29wYWNpdHk6IDAsZWFzZTogUG93ZXIyLmVhc2VJbk91dH0pXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG5cbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcblxuICAgIGdiLmluLnVwLnJlbW92ZSgnVG9wVGltZScpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L1VJL1RvcFRpbWUuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog55Kw5aKD5Yik5a6a44Kv44Op44K5KOODh+ODkOOCpOOCueOAgeODluODqeOCpuOCtinjgIHlkITliKTlrprjg6Hjgr3jg4Pjg4noqbPntLDjga9EZXZpY2UuanPjgpLlj4LnhadcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBKdWRnZUVudmlyb25tZW50XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVkZ2VFbnZpcm9ubWVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuIFxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjg4fjg5DjgqTjgrnliKTlrppcbiAgICBnYi5pbi51LmlzRGV2aWNlU1AoKTtcbiAgICBnYi5pbi51LmlzRGV2aWNlVEFCKCk7XG4gICAgZ2IuaW4udS5pc0RldmljZU1CKCk7XG4gICAgZ2IuaW4udS5pc0RldmljZVBDKCk7XG5cbiAgICAvLyDjg5bjg6njgqbjgrbjg5Djg7zjgrjjg6fjg7PliKTlrppcbiAgICBnYi5pbi51LmlzSUVWZXJzaW9uKCk7XG5cbiAgICAvLyByZXNwb25zaXZlIC8gcG9ydHJhaXQgLyBsYW5kc2NhcGVcbiAgICBnYi5pbi51LmlzRGlyZWN0aW9uKCk7XG4gICAgZ2IuaW4udS5pc1Jlc3BvbnNpdmUoZ2IuaW4uY29uZi5icCk7XG4gICAgZ2IuaW4uci5hZGQoJ2lzRGlyZWN0aW9uJywgZ2IuaW4udS5pc0RpcmVjdGlvbi5iaW5kKGdiLmluLnUpKTtcbiAgICBnYi5pbi5yLmFkZCgnaXNSZXNwb25zaXZlJywgZ2IuaW4udS5pc1Jlc3BvbnNpdmUuYmluZChnYi5pbi51LCBnYi5pbi5jb25mLmJwKSk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG5cbiAgfVxuICAgICAgIFxuICBzZXRFdmVudHMoKSB7XG5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL0p1ZGdlRW52aXJvbm1lbnQuanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFJlc3BvbnNpdmVTd2l0Y2hJbWdcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmVTd2l0Y2hJbWcge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMucnVuKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICB0aGlzLmlzUENMb2NrID0gKGdiLmluLnUuaXNSZXNQQyk/IGZhbHNlOiB0cnVlO1xuICAgIHRoaXMuaXNTUExvY2sgPSAoZ2IuaW4udS5pc1Jlc1NQKT8gZmFsc2U6IHRydWU7XG5cbiAgICB0aGlzLiR0YXJnZXQgPSAkKCcucmVzcG9uc2l2ZUltZycpO1xuXG4gIH1cblxuICBydW4gKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODluODrOOCpOOCr+ODneOCpOODs+ODiOOCiOOCiuOCgnNw5YG0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKGdiLmluLnUuaXNSZXNTUCAmJiAhdGhpcy5pc1NQTG9jaykge1xuICAgICAgdGhpcy5pc1BDTG9jayA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1NQTG9jayA9IHRydWU7XG5cbiAgICAgIGxvZygxMSk7XG5cbiAgICAgIHRoaXMuJHRhcmdldC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XG4gICAgICAgIHNyYyA9IGdiLmluLnUuc3RyUmVwbGFjZShzcmMsICdfcGMnLCAnX3NwJyk7XG4gICAgICAgICQodGhpcykub2ZmKCdsb2FkJyk7XG4gICAgICAgICQodGhpcykub24oJ2xvYWQnLCAoZXZlbnQpPT57XG5cbiAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc3BTaXplJykpIGdiLmluLnUuc2V0SW1nU1BTaXplKCQodGhpcykpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsc3JjKTtcblxuICAgICAgICAvLyAkKHRoaXMpLmF0dHIoJ3NyYycsc3JjKTtcbiAgICAgICAgLy8gaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NwU2l6ZScpKSBnYi5pbi51LnNldEltZ1NQU2l6ZSgkKHRoaXMpKTtcblxuICAgICAgfSk7XG5cbiAgICAgIC8vIHJlc3BvbnNpdmVpbWfjgYzjgaTjgYTjgabjgarjgYTjgoLjga7jgafjgIFzcFNpemXjgYzjgaTjgYTjgabjgovjgoLjga7jga8xLzJcbiAgICAgIGdiLmluLnUuc2V0SW1nU1BTaXplKCQoJy5zcFNpemUnKS5ub3QoJy5yZXNwb25zaXZlSW1nJykpO1xuXG4gICAgfSBcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4jjgojjgorjgoJwY+WBtFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmIChnYi5pbi51LmlzUmVzUEMgJiYgIXRoaXMuaXNQQ0xvY2spIHtcbiAgICAgIHRoaXMuaXNQQ0xvY2sgPSB0cnVlO1xuICAgICAgdGhpcy5pc1NQTG9jayA9IGZhbHNlO1xuXG4gICAgICBsb2coMjIpO1xuXG4gICAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuICAgICAgICBzcmMgPSBnYi5pbi51LnN0clJlcGxhY2Uoc3JjLCAnX3NwJywgJ19wYycpO1xuXG4gICAgICAgICQodGhpcykuYXR0cih7d2lkdGg6ICdhdXRvJyxoZWlnaHQ6ICdhdXRvJ30pO1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsc3JjKTtcblxuICAgICAgfSk7XG5cbiAgICAgIC8vIHJlc3BvbnNpdmVpbWfjgYzjgaTjgYTjgabjgarjgYTjgoLjga7jgafjgIFzcFNpemXjgYzjgaTjgYTjgabjgovjgoLjga7jga9hdXRv44GrXG4gICAgICAkKCcuc3BTaXplJykubm90KCcucmVzcG9uc2l2ZUltZycpLmF0dHIoe3dpZHRoOiAnYXV0bycsaGVpZ2h0OiAnYXV0byd9KTtcblxuICAgICAgLy8gc3Djga/jgarjgZzjgYtsb2Fk44Kk44OZ44Oz44OI44GM5ZG844Gw44KM44Gq44GE44Gu44Gn44CB44GT44Gj44Gh44Gn5Yem55CGXG4gICAgICAvLyBpZiAoZ2IuaW4udS5pc1NQKSAkKCcucmVzcG9uc2l2ZUltZycpLmF0dHIoe3dpZHRoOiAnYXV0bycsaGVpZ2h0OiAnYXV0byd9KTtcblxuICAgIH1cblxuICB9XG4gICAgICAgXG4gIHJlc3VtZSgpIHtcblxuICAgIC8vIGxvZygncmVzdW1lJyk7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5ydW4oKTtcblxuICAgIGdiLmluLnIucmVtb3ZlKCdyZXNwb25zaXZlU3dpdGNoSW1nJyk7XG4gICAgZ2IuaW4uci5hZGQoJ3Jlc3BvbnNpdmVTd2l0Y2hJbWcnLCB0aGlzLnJ1bi5iaW5kKHRoaXMpKTtcblxuICB9XG4gICAgICAgXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdyZXNwb25zaXZlU3dpdGNoSW1nJywgdGhpcy5ydW4uYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvX2V2ZW50cy9SZXNwb25zaXZlU3dpdGNoSW1nLmpzIiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFN3aXBlVHJhbnNpdGlvbiBzc3Ncbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVUcmFuc2l0aW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBkb21cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB0aGlzLiRzdGFydFdyYXAgPSAkKCcuc2VjdGlvbjAxLCAuc2VjdGlvbjAyIC5uZXh0LCAuc2VjdGlvbjAzIC5ib3gwNScpO1xuICAgIC8vIHRoaXMuJHN0YXJ0V3JhcCA9ICQoJy5zZWN0aW9uMDInKTtcbiAgICB0aGlzLiRzdGFydFdyYXAgPSAkKHdpbmRvdyk7XG4gICAgdGhpcy4kZW5kV3JhcCA9ICQod2luZG93KTtcblxuICAgIHRoaXMucGFnZUxpc3QgPSB7XG4gICAgICAndG9wJzogMCxcbiAgICAgICdtb3ZpZSc6IDEsXG4gICAgICAnaW50ZXJ2aWV3JzogMixcbiAgICAgICdoaXN0b3J5JzogMyxcbiAgICB9XG5cbiAgICAvLyB2YXJpYWJsZVxuICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgdGhpcy5vbGQgPSBudWxsO1xuICAgIHRoaXMubmV4dCA9IDE7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmxlbiA9IDQ7XG5cbiAgICB0aGlzLmlzTG9jayA9IGZhbHNlO1xuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgdmFyaWFibGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIHBvc2l0aW9uXG4gICAgdGhpcy5zWCA9IDA7dGhpcy5tWCA9IDA7dGhpcy5lWCA9IDA7IC8vc3RhcnRYLG1vdmVYLGVuZFhcbiAgICB0aGlzLmRpcyA9IDA7dGhpcy5taW5EaXMgPSAxNTtcblxuICAgIC8vIHRpbWVcbiAgICB0aGlzLnNUPTA7dGhpcy5lVD0wO3RoaXMubWluVCA9IDMwMDsgLy9zdGFydFRpbWUsZWxsYXBzZWRUaW1lLFxuXG4gICAgdGhpcy5XID0gZ2IuaW4uci5XKCk7XG5cbiAgICB0aGlzLm9uVG91Y2hMb25nID0gKCk9Pnt9O1xuICAgIHRoaXMub25Ub3VjaFN0YXJ0Q0IgPSAoKT0+e307XG4gICAgdGhpcy5vblRvdWNoRW5kQ0IgPSAoKT0+e307XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIG9uVG91Y2hTdGFydCAoZSkge1xuXG4gICAgLy8gdGFyZ2V0WFxuICAgIHZhciB5ID0gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgIHRoaXMuc1kgPSB5O1xuXG4gICAgdGhpcy5zdCA9IGdiLmluLnMuc3Q7XG4gICAgdGhpcy5zYiA9IGdiLmluLnMuc2I7XG4gICAgbG9nKCdzeScseSlcblxuICB9XG5cbiAgb25Ub3VjaE1vdmUgKGUpIHtcblxuICAgIC8vIHRhcmdldFhcbiAgICB2YXIgeSA9IGUub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICB0aGlzLm1ZID0geTtcblxuICB9XG5cbiAgb25Ub3VjaEVuZCAoZSkge1xuXG4gICAgaWYgKHRoaXMuaXNMb2NrKSByZXR1cm47ICAgIFxuXG4gICAgdmFyIHkgPSBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgdGhpcy5lWSA9IHk7XG5cbiAgICB2YXIgZGlzID0gdGhpcy5zWSAtIHRoaXMuZVk7XG4gICAgdmFyIGFic0RpcyA9IE1hdGguYWJzKGRpcyk7XG5cbiAgICAvLyDmnIDlsI/ot53pm6LjgojjgorplbfjgYvjgaPjgZ/jgonjgIHlh6bnkIZcbiAgICBpZiggdGhpcy5taW5EaXMgPCBhYnNEaXMpIHtcblxuICAgICAgLy8g44Oa44O844K455Wq5Y+344KS5Y+W5b6XXG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnBhZ2VMaXN0W2diLmluLnBqYXguaWRdO1xuXG4gICAgICBpZiAoZGlzID4gMCkge1xuXG4gICAgICAgIHZhciBoID0gJCgnLnNlY3Rpb24nKS5oZWlnaHQoKSpnYi5pbi5MYXlvdXQuc2l6ZS5zY2FsZS5yYXRlO1xuICAgICAgICBsb2codGhpcy5zYixoLTEwLHRoaXMuc2IgPCBoLTEwKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50IT09MCAmJiB0aGlzLnNiIDwgaC0xMCkgcmV0dXJuO1xuICAgICAgICAvLyBoaXN0b3J544Oa44O844K444Gu5aC05ZCI44Gv5Yem55CG44GX44Gq44GEXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQ9PTMpIHJldHVybjtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCduZXh0Jyk7XG5cbiAgICAgICAgLy8g44GX44Gf44G4XG4gICAgICAgIHZhciBwYWdlTmFtZSA9IE9iamVjdC5rZXlzKHRoaXMucGFnZUxpc3QpLmZpbHRlciggKGtleSkgPT4geyByZXR1cm4gdGhpcy5wYWdlTGlzdFtrZXldID09PSB0aGlzLmN1cnJlbnQgfSlbMF07XG4gICAgICAgICQoJy5wamF4VG9fJytwYWdlTmFtZSkudHJpZ2dlcignY2xpY2snKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBsb2codGhpcy5zdCx0aGlzLnN0ICE9PSAwKTtcblxuICAgICAgICBpZiAodGhpcy5zdCAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIOS4iuOBuFxuICAgICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCdwcmV2Jyk7XG5cbiAgICAgICAgdmFyIHBhZ2VOYW1lID0gT2JqZWN0LmtleXModGhpcy5wYWdlTGlzdCkuZmlsdGVyKCAoa2V5KSA9PiB7IHJldHVybiB0aGlzLnBhZ2VMaXN0W2tleV0gPT09IHRoaXMuY3VycmVudCB9KVswXTtcbiAgICAgICAgJCgnLnBqYXhUb18nK3BhZ2VOYW1lKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICB9XG5cblxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgYmx1cuino+mZpFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmlzTm90VG91Y2ggPSB0cnVlO1xuXG4gICAgLy8g44Kz44O844Or44OQ44OD44KvXG4gICAgdGhpcy5vblRvdWNoRW5kQ0IoKTtcblxuICB9XG5cbiAgY2FsY3VsYXRlT3JkZXIoZGlyKSB7XG5cbiAgICB0aGlzLm9sZCA9IHRoaXMuY3VycmVudDtcblxuICAgIGlmIChkaXI9PSduZXh0Jykge1xuXG4gICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQ+dGhpcy5sZW4tMSkgdGhpcy5jdXJyZW50PXRoaXMubGVuLTE7XG4gICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5jdXJyZW50LS07XG4gICAgICBpZiAodGhpcy5jdXJyZW50PDApIHRoaXMuY3VycmVudD0wOyAgXG4gICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgfSAgICAgXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpe1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kc3RhcnRXcmFwLm9uKCd0b3VjaHN0YXJ0LlN3aXBlVHJhbnNpdGlvbicsIChlKT0+e3RoaXMub25Ub3VjaFN0YXJ0KGUpO30pO1xuICAgIC8vIHRoaXMuJHdyYXAub24oJ3RvdWNobW92ZS5Td2lwZVRyYW5zaXRpb24nLCAoZSk9Pnt0aGlzLm9uVG91Y2hNb3ZlKGUpO30pO1xuICAgIHRoaXMuJGVuZFdyYXAub24oJ3RvdWNoZW5kLlN3aXBlVHJhbnNpdGlvbicsIChlKT0+e3RoaXMub25Ub3VjaEVuZChlKTt9KTtcblxuICB9XG5cbiAgIHJlbW92ZUV2ZW50cygpe1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kc3RhcnRXcmFwLm9mZigndG91Y2hzdGFydC5Td2lwZVRyYW5zaXRpb24nKTtcbiAgICAvLyB0aGlzLiR3cmFwLm9mZigndG91Y2htb3ZlLlN3aXBlVHJhbnNpdGlvbicpO1xuICAgIHRoaXMuJGVuZFdyYXAub2ZmKCd0b3VjaGVuZC5Td2lwZVRyYW5zaXRpb24nKTtcblxuICB9XG5cblxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9GdW5jL1N3aXBlVHJhbnNpdGlvbi5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU2Nyb2xsVHJhbnNpdGlvblxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVHJhbnNpdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCkge1xuXG4gICAgdGhpcy5wYWdlTGlzdCA9IHtcbiAgICAgICd0b3AnOiAwLFxuICAgICAgJ21vdmllJzogMSxcbiAgICAgICdpbnRlcnZpZXcnOiAyLFxuICAgICAgJ2hpc3RvcnknOiAzLFxuICAgIH1cblxuICAgIC8vIHZhcmlhYmxlXG4gICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICB0aGlzLm9sZCA9IG51bGw7XG4gICAgdGhpcy5uZXh0ID0gMTtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGVuID0gNDtcblxuICAgIHRoaXMuaXNTd2l0Y2ggPSB0cnVlO1xuXG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgc3dpdGNoKCkge1xuXG4gICAgaWYgKCFnYi5pbi51LmlzSUUpIHZhciB2YWwgPSAzMDtcbiAgICBlbHNlIHZhciB2YWwgPSAwO1xuXG4gICAgLy8gbG9nKGdiLmluLnBqYXguaXNQamF4TG9jayx0aGlzLlNUQW1vdW50LHRoaXMuY3VycmVudCx0aGlzLmlzU3dpdGNoKTtcblxuICAgIC8vIHBqYXhsb2Nr5pmC44Gv5Yem55CG44GX44Gq44GEXG4gICAgaWYgKGdiLmluLnBqYXguaXNQamF4TG9jaykgcmV0dXJuO1xuXG4gICAgLy8g44Oa44O844K455Wq5Y+344KS5Y+W5b6XXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wYWdlTGlzdFtnYi5pbi5wamF4LmlkXTtcblxuICAgIC8v44Ob44Kk44O844Or44GMMOS7peS4iiDjgYvjgaQgY3VycmVudOOBjOS4gOeVquacgOWIneOBp+OBquOBhCDjgYvjgaQgc3dpdGNo5Y+v6IO954q25oWL44Gn44GC44KM44GwXG4gICAgaWYgKHRoaXMuU1RBbW91bnQgPiB2YWwgJiYgdGhpcy5jdXJyZW50ID4gMCAmJiB0aGlzLmlzU3dpdGNoKSB7XG5cbiAgICAgIC8vIGhpc3Rvcnnjg5rjg7zjgrjjga7jgajjgY3jga/kuIrjgrnjgq/jg63jg7zjg6vjgZfjgabjgoJpbnRlcnZpZXcgaW5kZXjjgavpo5vjgbDjgZXjgarjgYRcbiAgICAgIGlmIChnYi5pbi5wamF4LmlkPT0naGlzdG9yeScpIHJldHVybjtcblxuICAgICAgdGhpcy5pc1N3aXRjaCA9IGZhbHNlO1xuICBcbiAgICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoJ3ByZXYnKTtcblxuICAgICAgdmFyIHBhZ2VOYW1lID0gT2JqZWN0LmtleXModGhpcy5wYWdlTGlzdCkuZmlsdGVyKCAoa2V5KSA9PiB7IHJldHVybiB0aGlzLnBhZ2VMaXN0W2tleV0gPT09IHRoaXMuY3VycmVudCB9KVswXTtcblxuICAgICAgJCgnLnBqYXhUb18nK3BhZ2VOYW1lKS50cmlnZ2VyKCdjbGljaycpO1xuXG5cbiAgICAvL+ODm+OCpOODvOODq+OBjDDku6XkuIsg44GL44GkIGN1cnJlbnTjgYzkuIDnlarmnIDlvozjgafjgarjgYQg44GL44GkIHN3aXRjaOWPr+iDveeKtuaFi+OBp+OBguOCjOOBsFxuICAgIH0gZWxzZSBpZih0aGlzLlNUQW1vdW50IDwgLXZhbCAmJiB0aGlzLmN1cnJlbnQgPCB0aGlzLmxlbi0xICYmIHRoaXMuaXNTd2l0Y2gpIHtcblxuICAgICAgdGhpcy5pc1N3aXRjaCA9IGZhbHNlO1xuICAgICAgXG4gICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCduZXh0Jyk7XG5cbiAgICAgIHZhciBwYWdlTmFtZSA9IE9iamVjdC5rZXlzKHRoaXMucGFnZUxpc3QpLmZpbHRlciggKGtleSkgPT4geyByZXR1cm4gdGhpcy5wYWdlTGlzdFtrZXldID09PSB0aGlzLmN1cnJlbnQgfSlbMF07XG5cbiAgICAgICQoJy5wamF4VG9fJytwYWdlTmFtZSkudHJpZ2dlcignY2xpY2snKTtcblxuICAgIH07XG5cblxuICB9XG5cbiAgY2FsY3VsYXRlT3JkZXIoZGlyKSB7XG5cbiAgICB0aGlzLm9sZCA9IHRoaXMuY3VycmVudDtcblxuICAgIGlmIChkaXI9PSduZXh0Jykge1xuXG4gICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQ+dGhpcy5sZW4tMSkgdGhpcy5jdXJyZW50PXRoaXMubGVuLTE7XG4gICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5jdXJyZW50LS07XG4gICAgICBpZiAodGhpcy5jdXJyZW50PDApIHRoaXMuY3VycmVudD0wOyAgXG4gICAgICB0aGlzLm5leHQgPSB0aGlzLmN1cnJlbnQrMTtcbiAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudC0xO1xuXG4gICAgfSAgICAgXG5cbiAgfVxuXG4gIG9uTW91c2VXaGVlbChlLCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpIHtcblxuICAgIC8vIG1lbnXjgYzplovjgYTjgabjgYTjgovjgajjgY3jga/jgrnjgq/jg63jg7zjg6vpgbfnp7vjgZXjgZvjgarjgYRcbiAgICBpZiAoZ2IuaW4ubWVudS5pc09wZW4pIHJldHVybjtcbiAgICAvLyByZXMgc3Djga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1Jlc1NQKSByZXR1cm5cblxuICAgIHRoaXMuU1RBbW91bnQgPSBnYi5pbi5zLlNUQW1vdW50O1xuICAgIFxuICAgIHRoaXMuc3dpdGNoKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gICAgZ2IuaW4ucy5hZGQoJ1Njcm9sbFRyYW5zaXRpb24nLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpKTtcblxuXG4gIH1cbiAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Z1bmMvU2Nyb2xsVHJhbnNpdGlvbi5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTbnNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IG1ldGFEYXRhIGZyb20gXCJqc29uLWxvYWRlciEuLi8uLi8uLi8uLi9lanMvaW5jL21ldGFEYXRhLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25zIHtcblxuICBjb25zdHJ1Y3RvcigkZmIsJHR3LCRsaW5lLCRtYWlsKXtcblxuICAgIHRoaXMuJGZiID0gJGZiO1xuICAgIHRoaXMuJHR3ID0gJHR3O1xuICAgIHRoaXMuJGxpbmUgPSAkbGluZTtcbiAgICB0aGlzLiRtYWlsID0gJG1haWw7XG5cbiAgICB0aGlzLmZiID0ge1xuICAgICAgJHRhcmdldDogJGZiLFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICB9XG5cbiAgICB0aGlzLnR3ID0ge1xuICAgICAgJHRhcmdldDogJHR3LFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICAgIGhhc2g6ICdoYXNoJyxcbiAgICB9XG5cbiAgICB0aGlzLmxpbmUgPSB7XG4gICAgICAkdGFyZ2V0OiAkbGluZSxcbiAgICAgIHRpdDogZW5jb2RlVVJJQ29tcG9uZW50KCQoJ3RpdGxlJykuaHRtbCgpKSxcbiAgICAgIGRlczogZW5jb2RlVVJJQ29tcG9uZW50KCQoJy5mYkRlcycpLmF0dHIoJ2NvbnRlbnQnKSksIC8vIGRlc2N0aXB0aW9uXG4gICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc3dpdGNoTWV0YSgpIHtcblxuICAgIHZhciBwID0gZ2IuaW4ucGpheC5pZDtcbiAgICBpZiAocCA9PSAnaW50ZXJ2aWV3X2RldGFpbCcpIHtcblxuICAgICAgbG9nKCQoJy5zZWN0aW9uJykuaGFzQ2xhc3MoJ3NlY3Rpb24wM19kZXRhaWwwMScpKTtcbiAgICAgIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDEnKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMSc7XG4gICAgICBlbHNlIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDInKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMic7XG4gICAgICBlbHNlIGlmICgkKCcuc2VjdGlvbicpLmhhc0NsYXNzKCdzZWN0aW9uMDNfZGV0YWlsMDMnKSkgcCA9ICdpbnRlcnZpZXdEZXRhaWwwMyc7XG4gIFxuICAgIH1cblxuICAgIC8vIHZhciBkID0gZ2IuaW4uY29uZi5tZXRhW3BdO1xuICAgIHZhciBkID0gbWV0YURhdGFbcF07XG5cbiAgICAkKCd0aXRsZScpLnRleHQoKTtcbiAgICAkKCcubWV0YURlcycpLmF0dHIoeydjb250ZW50JzogZC5kZXNjcmlwdGlvbn0pO1xuICAgICQoJy5tZXRhS2V5JykuYXR0cih7J2NvbnRlbnQnOiBkLmtleXdvcmR9KTtcblxuICAgICQoJy5mYlRpdCcpLmF0dHIoeydjb250ZW50JzogZC5mYi50aXR9KTtcbiAgICAkKCcuZmJEZXMnKS5hdHRyKHsnY29udGVudCc6IGQuZmIuZGVzfSk7XG4gICAgJCgnLmZiSW1nJykuYXR0cih7J2NvbnRlbnQnOiBkLmZiLmltZ30pO1xuICAgICQoJy5mYlVybCcpLmF0dHIoeydjb250ZW50JzogZC5mYi51cmx9KTtcblxuICAgICQoJy50d1RpdCcpLmF0dHIoeydjb250ZW50JzogZC50dy50aXR9KTtcbiAgICAkKCcudHdEZXMnKS5hdHRyKHsnY29udGVudCc6IGQudHcuZGVzfSk7XG4gICAgJCgnLnR3SW1nJykuYXR0cih7J2NvbnRlbnQnOiBkLnR3LmltZ30pO1xuICAgICQoJy50d1VybCcpLmF0dHIoeydjb250ZW50JzogZC50dy51cmx9KTtcblxuXG4gIH1cblxuICBzZXR0aW5nKCkge1xuXG4gICAgdGhpcy5mYiA9IHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuJGZiLFxuICAgICAgdGl0OiBlbmNvZGVVUklDb21wb25lbnQoJCgndGl0bGUnKS5odG1sKCkpLFxuICAgICAgZGVzOiBlbmNvZGVVUklDb21wb25lbnQoJCgnLmZiRGVzJykuYXR0cignY29udGVudCcpKSwgLy8gZGVzY3RpcHRpb25cbiAgICAgIHVybDogbG9jYXRpb24uaHJlZixcbiAgICB9XG5cbiAgICB0aGlzLnR3ID0ge1xuICAgICAgJHRhcmdldDogdGhpcy4kdHcsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgaGFzaDogJ2hhc2gnLFxuICAgIH1cblxuICAgIHRoaXMubGluZSA9IHtcbiAgICAgICR0YXJnZXQ6IHRoaXMuJGxpbmUsXG4gICAgICB0aXQ6IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSksXG4gICAgICBkZXM6IGVuY29kZVVSSUNvbXBvbmVudCgkKCcuZmJEZXMnKS5hdHRyKCdjb250ZW50JykpLCAvLyBkZXNjdGlwdGlvblxuICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgIH1cblxuICB9XG5cbiAgc2V0T2dJbWcoKSB7XG5cbiAgICAvLyAkKCcub2dJbWdfZmInKS5hdHRyKCdjb250ZW50JywgdGhpcy5mYi5pbWcpO1xuICAgIC8vICQoJy5vZ0ltZ190dycpLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLnR3LmltZyk7XG5cbiAgfVxuXG4gIGp1bXBGQihlKSB7XG5cbiAgICAgIHRoaXMub3BlbldpbmRvdygnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JyArIHRoaXMuZmIudXJsKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuXG4gIGp1bXBUVyhlKSB7XG5cbiAgICB0aGlzLm9wZW5XaW5kb3coJ2h0dHA6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPScgKyB0aGlzLnR3LnVybCArICcmdGV4dD0nICsgdGhpcy50dy5kZXMpO1xuICAgIC8vIHRoaXMub3BlbldpbmRvdygnaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9JyArIHRoaXMudHcudXJsICsgJyZ0ZXh0PScgKyB0aGlzLnR3LnRleHQgKyAnJmhhc2h0YWdzPScgKyB0aGlzLnR3Lmhhc2gpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICBqdW1wTElORSgpIHtcblxuICAgICAgdGhpcy5vcGVuV2luZG93KCdodHRwOi8vbGluZS5tZS9SL21zZy90ZXh0Lz8nICsgdGhpcy5saW5lLnRpdCArICclMEEnICsgdGhpcy5saW5lLnVybCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU2VuZE1haWwoKSB7XG5cbiAgICB2YXIgYWRkcmVzcyA9ICcnO1xuICAgIHZhciBzdWIgPSAnJztcbiAgICB2YXIgYm9keSA9IGVuY29kZVVSSUNvbXBvbmVudCgkKCd0aXRsZScpLmh0bWwoKSsnXFxuJytsb2NhdGlvbi5ocmVmKTtcblxuICAgIGxvY2F0aW9uLmhyZWYgPSAnbWFpbHRvOicgKyBhZGRyZXNzICsgJz9zdWJqZWN0PScgKyBzdWIgKyAnJmJvZHk9JyArIGJvZHk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIG9wZW5XaW5kb3codXJsLCB3LCBoKSB7XG5cbiAgICAgIGlmKHcgPT09IHVuZGVmaW5lZCkgdyA9IDYwMDtcbiAgICAgIGlmKGggPT09IHVuZGVmaW5lZCkgaCA9IDYwMDtcblxuICAgICAgdmFyIGwgPSBOdW1iZXIoKHdpbmRvdy5zY3JlZW4ud2lkdGgtdykvMik7XG4gICAgICB2YXIgdCA9IE51bWJlcigod2luZG93LnNjcmVlbi5oZWlnaHQtaCkvMik7XG5cbiAgICAgIHdpbmRvdy5vcGVuKHVybCwnbmV3X3dpbmRvdycsXG4gICAgICAgICAgICAgICAgJ21lbnViYXI9bm8sJyArXG4gICAgICAgICAgICAgICAgJ3Rvb2xiYXI9bm8sJyArXG4gICAgICAgICAgICAgICAgJ3Jlc2l6YWJsZT15ZXMsJyArXG4gICAgICAgICAgICAgICAgJ3Njcm9sbGJhcnM9eWVzLCcgK1xuICAgICAgICAgICAgICAgICdoZWlnaHQ9JyArIGggKyAnLCcgK1xuICAgICAgICAgICAgICAgICd3aWR0aD0nICsgdyArICcsJyArXG4gICAgICAgICAgICAgICAgJ2xlZnQ9JyArIGwgKyAnLCcgK1xuICAgICAgICAgICAgICAgICd0b3A9JyArIHRcbiAgICAgICAgICAgICAgKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdGhpcy5mYi4kdGFyZ2V0Lm9uKCdjbGljaycsIHRoaXMuanVtcEZCLmJpbmQodGhpcykpO1xuICAgIHRoaXMudHcuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLmp1bXBUVy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmxpbmUuJHRhcmdldC5vbignY2xpY2snLCB0aGlzLmp1bXBMSU5FLmJpbmQodGhpcykpO1xuICAgIGlmICh0aGlzLiRtYWlsKSB0aGlzLiRtYWlsLm9uKCdjbGljaycsICgpPT57dGhpcy5vblNlbmRNYWlsKCk7cmV0dXJuIGZhbHNlO30pO1xuXG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG5cbiAgICB0aGlzLmZiLiR0YXJnZXQub2ZmKCdjbGljaycpO1xuICAgIHRoaXMudHcuJHRhcmdldC5vZmYoJ2NsaWNrJyk7XG4gICAgdGhpcy5saW5lLiR0YXJnZXQub2ZmKCdjbGljaycpO1xuICAgIGlmICh0aGlzLiRtYWlsKSB0aGlzLiRtYWlsLm9mZignY2xpY2snKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRnVuYy9TbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZXNjcmlwdGlvblwiOiBcImRlc2N0aXB0aW9uXCIsXG5cdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcIm9ncEltZ1BhdGhcIjogXCJcIixcblx0XCJ0b3BcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwibW92aWVcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH0sXG5cdFwiaW50ZXJ2aWV3XCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAxXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAyXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImludGVydmlld0RldGFpbDAzXCI6IHtcblx0XHRcImRlc2NyaXB0aW9uXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XCJmYlwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3ZWJzaXRlXCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcImtleXdvcmRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImxpbmVcIjoge1xuXHRcdFx0XCJkZXNcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwiaW1nXCI6IFwiXCIsXG5cdFx0XHRcInRpdFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJcIlxuXHRcdH0sXG5cdFx0XCJ0aXRsZVwiOiBcIlwiLFxuXHRcdFwidHdcIjoge1xuXHRcdFx0XCJjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuXHRcdFx0XCJjcmVhdG9yXCI6IFwiXCIsXG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwic2l0ZU5hbWVcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwiXCIsXG5cdFx0XHRcInVybFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiXG5cdFx0fVxuXHR9LFxuXHRcImhpc3RvcnlcIjoge1xuXHRcdFwiZGVzY3JpcHRpb25cIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcImZiXCI6IHtcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCLjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7zjg4Djg5/jg7xcIixcblx0XHRcdFwidHlwZVwiOiBcIndlYnNpdGVcIixcblx0XHRcdFwidXJsXCI6IFwiXCJcblx0XHR9LFxuXHRcdFwia2V5d29yZFwiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFwibGluZVwiOiB7XG5cdFx0XHRcImRlc1wiOiBcIuODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvOODgOODn+ODvFwiLFxuXHRcdFx0XCJpbWdcIjogXCJcIixcblx0XHRcdFwidGl0XCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcInVybFwiOiBcIlwiXG5cdFx0fSxcblx0XHRcInRpdGxlXCI6IFwiXCIsXG5cdFx0XCJ0d1wiOiB7XG5cdFx0XHRcImNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG5cdFx0XHRcImNyZWF0b3JcIjogXCJcIixcblx0XHRcdFwiZGVzXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCIsXG5cdFx0XHRcImltZ1wiOiBcIlwiLFxuXHRcdFx0XCJzaXRlTmFtZVwiOiBcIlwiLFxuXHRcdFx0XCJ0aXRcIjogXCJcIixcblx0XHRcdFwidXJsXCI6IFwi44OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O844OA44Of44O8XCJcblx0XHR9XG5cdH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2pzb24tbG9hZGVyIS9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9lanMvaW5jL21ldGFEYXRhLmpzb25cbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTGF5b3V0XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgU2l6ZSBmcm9tICcuL1NpemUvU2l6ZS5qcyc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9Qb3N0aW9uL1Bvc2l0aW9uLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgICAgdGhpcy5zaXplID0gbmV3IFNpemUoKTsgLy8gYWRqdXN0IHNpemVcblxuICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbigpOyAvLyBhZGp1c3QgcG9zaXRpb25cbiAgICAgIFxuICB9XG5cbiAgc3RhdGljIHJlc2V0KCkge1xuXG4gICAgLy8gc2NhbGXjgaflpKfjgY3jgY/jgZfjgabjgYTjgovplqLkv4LkuIrjgIHpq5jjgZXjgpIxMDAl44Gr44GX44Gm44Gv44GE44GR44Gq44GEXG4gICAgaWYgKGdiLmluLnBqYXguaWQgPT0gJ2hpc3RvcnknIHx8IGdiLmluLnBqYXguaWQgPT0gJ2ludGVydmlld19kZXRhaWwnKSB7XG5cbiAgICAgIFR3ZWVuTWF4LnNldCgkKCcjaW5uZXInKSwge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzonMCAwJyxcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgIH0pO1xuICAgICAgVHdlZW5NYXguc2V0KCQoJyNiZ1dyYXAnKSwge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzonMCAwJyxcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgIH0pO1xuXG4gICAgICBUd2Vlbk1heC5zZXQoJCgnI3dyYXBwZXInKSwge1xuICAgICAgICAnb3ZlcmZsb3cnOid2aXNpYmxlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgVHdlZW5NYXguc2V0KCQoJyNpbm5lciwgI2JnV3JhcCcpLCB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzonMCAwJ1xuICAgICAgfSk7XG5cbiAgICAgIFR3ZWVuTWF4LnNldCgkKCcjd3JhcHBlcicpLCB7XG4gICAgICAgICdvdmVyZmxvdyc6J3Zpc2libGUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgfSk7XG5cbiAgICB9XG4gICAgXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gIH1cbiAgICAgICBcbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L0xheW91dC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgU2l6ZVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IFNjYWxlIGZyb20gJy4vU2NhbGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaXplIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcbiAgICBcbiAgICAvLyBnYi5pbi51LnNldEltZ1NQU2l6ZSgkKCdpbWcnKSk7IC8vIGZvciBzcCBpbWdcblxuICAgIC8vIG5ldyBnYi5SZXNwb25zaXZlRm9udFNpemUoJCgnLmZvbnRSZXNwb25zaXZlJykpOyAvL+ODrOOCueODneODs+OCt+ODluaZguODleOCqeODs+ODiOOCteOCpOOCuuOBruWkieabtFxuXG4gICAgdGhpcy5zY2FsZSA9IG5ldyBTY2FsZSgpOyAvLyByZXNpemVcblxuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIC8vIGdiLmluLnUuc2V0SW1nU1BTaXplKCQoJ2ltZycpKTsgLy8gZm9yIHNwIGltZ1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5yLmFkZCh0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvTGF5b3V0L1NpemUvU2l6ZS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTGF5b3V0XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5TUEJhc2VXID0gMzc1O1xuICAgIHRoaXMuUENCYXNlVyA9IDEzMDA7XG5cbiAgICB0aGlzLnJhdGUgPSAxO1xuICAgIHRoaXMuVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdGhpcy4kdGFyZ2V0TGlzdCA9IFtcbiAgICAgIHtcbiAgICAgICAgJyR0YXJnZXQnOiAkKCcubWVudUlubmVyJyksXG4gICAgICAgICdzY2FsZSc6ICdzcE9ubHknIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgJyR0YXJnZXQnOiAkKCcuc2VjdGlvbjAzX2RldGFpbCcpLFxuICAgICAgLy8gICAnc2NhbGUnOiAnYm90aCcgLy8gc3BPbmx5IHBjT25seSBib3RoXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAnJHRhcmdldCc6ICQoJy5zZWN0aW9uMDQnKSxcbiAgICAgIC8vICAgJ3NjYWxlJzogJ2JvdGgnIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgLy8gfSxcbiAgICBdXG5cbiAgICB0aGlzLnJ1bigpO1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIFxuICB9XG5cbiAgcnVuKCkge1xuXG4gICAgdGhpcy5XID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5pVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdGhpcy5zY2FsZSgpO1xuICAgIHRoaXMud3JhcCgpO1xuXG4gIH1cblxuICAvLyDmi6HlpKdcbiAgc2NhbGUoKSB7XG5cbiAgICAvLyBicOOBruWgtOWQiOOBrnNjYWxlXG4gICAgaWYgKHRoaXMuaVcgPD0gZ2IuaW4uY29uZi5icCkge1xuXG4gICAgICAvLyB3aWR0aOOBi+OCiXJhdGXjgpLoqIjnrpdcbiAgICAgIC8vIHRoaXMucmF0ZSA9IGdiLmluLnUuZmxvYXRGb3JtYXQodGhpcy5XIC8gdGhpcy5TUEJhc2VXICwgMik7XG4gICAgICB0aGlzLnJhdGUgPSB0aGlzLlcgLyB0aGlzLlNQQmFzZVc7XG5cbiAgICAgIC8vIHNjYWxl44GZ44KL44Oq44K544OI44KS44Or44O844OXXG4gICAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnYm90aCcgfHwgdmFsLnNjYWxlID09ICdzcE9ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLlNQQmFzZVcsXG4gICAgICAgICAgICBzY2FsZTogdGhpcy5yYXRlLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gd2lkdGjjgYvjgolyYXRl44KS6KiI566XXG4gICAgICAvLyB0aGlzLnJhdGUgPSBnYi5pbi51LmZsb2F0Rm9ybWF0KHRoaXMuVyAvIHRoaXMuUENCYXNlVyAsIDIpO1xuICAgICAgaWYgKHRoaXMuVyA+IDEzMDApIHRoaXMuVyA9IDEzMDA7XG4gICAgICB0aGlzLnJhdGUgPSB0aGlzLlcgLyB0aGlzLlBDQmFzZVc7XG5cbiAgICAgIC8vIHNjYWxl44GZ44KL44Oq44K544OI44KS44Or44O844OXXG4gICAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnYm90aCcgfHwgdmFsLnNjYWxlID09ICdwY09ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLlBDQmFzZVcsXG4gICAgICAgICAgICBzY2FsZTogdGhpcy5yYXRlLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOOBk+OBoeOCieOBruWgtOWQiOOBr+OAgXNjYWxl44KS5oi744GZXG4gICAgICAgIGlmICh2YWwuc2NhbGUgPT0gJ3NwT25seScpIHtcblxuICAgICAgICAgIFR3ZWVuTWF4LnNldCh2YWwuJHRhcmdldCwge1xuICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOicwIDAnLFxuICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6JzAgMCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgIH0pOyAgXG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIHNjYWxl44GX44Gf44KJ44CB5YWD44Gu5aSn44GN44GV5YiG5L2Z55m944GM44Gn44GN44KL44Gu44Gnb3ZlcmZsb3cgaGlkZGVu44Gn5raI44GZXG4gIHdyYXAoKSB7XG5cblxuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIHRoaXMucnVuKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdzY2FsZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9TaXplL1NjYWxlLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQb3NpdGlvblxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g5LiK5LiL5Lit5aSu5a+E44GbXG4gICAgdGhpcy5zZXRDZW50ZXIoKTtcblxuICB9XG5cbiAgc2V0Q2VudGVyKCkge1xuXG4gICAgJCgnLnBvc0NlbnRlcicpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykuYWRqdXN0KCk7XG4gICAgICBcbiAgICB9KTtcbiAgICAkKCcucG9zQ2VudGVyVycpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cbiAgICAgICQodGhpcykuYWRqdXN0VygpO1xuICAgICAgXG4gICAgfSk7XG4gICAgJCgnLnBvc0NlbnRlckgnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXG4gICAgICAkKHRoaXMpLmFkanVzdEgoKTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIHRoaXMuc2V0Q2VudGVyKCk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLnIuYWRkKCdzZXRDZW50ZXInLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0xheW91dC9Qb3N0aW9uL1Bvc2l0aW9uLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTWFpblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRGlzcGxheVRvcCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUb3AuanMnO1xuLy8gaW1wb3J0IERpc3BsYXlNb3ZpZSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlNb3ZpZS5qcyc7XG4vLyBpbXBvcnQgRGlzcGxheUludGVydmlldyBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlJbnRlcnZpZXcuanMnO1xuLy8gaW1wb3J0IERpc3BsYXlJbnRlcnZpZXdEZXRhaWwgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5SW50ZXJ2aWV3RGV0YWlsLmpzJztcbi8vIGltcG9ydCBEaXNwbGF5SGlzdG9yeSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlIaXN0b3J5LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vcGFnZeODmuODvOOCuOWIpeOBrklE44KS5Y+W5b6XXG4gICAgdmFyIHBhZ2UgPSAkKCdib2R5JykuZGF0YSgnaWQnKTtcblxuXHRcdC8vcGFnZeOBrklE44GU44Go44Gr55m654Gr44GZ44KL44Kv44Op44K544Gu5oyv44KK5YiG44GRXG4gICAgc3dpdGNoIChwYWdlKSB7XG5cbiAgICAgIGNhc2UgJ3RvcCc6XG5cbiAgICAgICAgbmV3IERpc3BsYXlUb3AoKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgLy8gY2FzZSAnbW92aWUnOlxuICAgICAgLy9cbiAgICAgIC8vICAgbmV3IERpc3BsYXlNb3ZpZSgpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cdFx0XHQvL1xuICAgICAgLy8gY2FzZSAnaW50ZXJ2aWV3JzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SW50ZXJ2aWV3KCk7XG5cdFx0XHQvL1xuICAgICAgLy8gICBicmVhaztcblx0XHRcdC8vXG4gICAgICAvLyBjYXNlICdpbnRlcnZpZXdfZGV0YWlsJzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SW50ZXJ2aWV3RGV0YWlsKCk7XG5cdFx0XHQvL1xuICAgICAgLy8gICBicmVhaztcblx0XHRcdC8vXG4gICAgICAvLyBjYXNlICdoaXN0b3J5JzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SGlzdG9yeSgpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuICB9XG5cbiAgb25SZW5kZXIoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1BhZ2UvTWFpbi5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgRGlzcGxheVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBFZmZlY3RzIGZyb20gJy4vRWZmZWN0cy9FZmZlY3RzLmpzJztcbmltcG9ydCBTY2FsZVRvcCBmcm9tICcuLi9EaXNwbGF5L0xheW91dC9TaXplL1NjYWxlVG9wLmpzJztcbmltcG9ydCBIb3ZlckVmZmVjdFNOU1NQRm9vdGVyIGZyb20gJy4uL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL0hvdmVyRWZmZWN0U05TU1BGb290ZXIuanMnO1xuaW1wb3J0IEhvdmVyRWZmZWN0U1ZHQXJyb3dUb3AgZnJvbSAnLi4vRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTVkdBcnJvd1RvcC5qcyc7XG5pbXBvcnQgVG9wVGltZSBmcm9tICcuLi9EaXNwbGF5L1VJL1RvcFRpbWUuanMnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vTGF5b3V0L1Bvc3Rpb24vUG9zaXRpb24uanMnO1xuXG4vLyBpbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcbi8vIGltcG9ydCBDYW52YXMgZnJvbSAnLi4vVmlzdWFsL0NhbnZhcy5qcyc7XG5cblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vVmlzdWFsL0NhbnZhc1wiO1xuXG4vLyBpbXBvcnQgdnMgZnJvbSAnLi90ZXN0LmZyYWcnO1xuXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuXG4gICAgLy8g44Ki44OL44Oh44O844K344On44Oz44Or44O844OX44K544K/44O844OIXG4gICAgLy8gZ2IuaW4udXAubG9vcCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgLy8gZ2IuaW4uY2FudmFzID0gbmV3IENhbnZhcygpO1xuICAgIC8vIGdiLmluLmNhbnZhcy5pbml0KCk7XG5cbiAgICBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKHtcbiAgICAgIG91dHB1dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpXG4gICAgfSk7XG5cbiAgICBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgVUkgLyBMYXlvdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBzcFxuICAgIC8vIGdiLmluLnNjYWxlVG9wID0gbmV3IFNjYWxlVG9wKCk7XG4gICAgLy8gZ2IuaW4ucG9zID0gbmV3IFBvc2l0aW9uKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgRWZmZWN0c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gc3BcbiAgICAvLyBnYi5pbi5zbGlkZXJUb3Auc2V0RXZlbnRzKCk7XG4gICAgLy8gZ2IuaW4uc25zU1BIb3ZlckVmID0gbmV3IEhvdmVyRWZmZWN0U05TU1BGb290ZXIoJCgnI3NpZGVMJykpO1xuXG4gICAgLy8gcGNcbiAgICAvLyBuZXcgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCgkKCcuc2VjdGlvbjAxIC5uZXh0JykpOyAvLyDihpIgVG9wT3BlbmluZ+OBuFxuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG5cdFx0Ly8gd2luZG93LmNvbnNvbGUubG9nKCdzdGF0aWNfUnVuJyk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgVUkgLyBMYXlvdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBzcFxuICAgIC8vIGdiLmluLnNjYWxlVG9wID0gbmV3IFNjYWxlVG9wKCk7XG4gICAgLy8gZ2IuaW4ucG9zID0gbmV3IFBvc2l0aW9uKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgRWZmZWN0c1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gc3BcbiAgICAvLyBnYi5pbi5zbGlkZXJUb3Auc2V0RXZlbnRzKCk7XG4gICAgLy8gZ2IuaW4uc25zU1BIb3ZlckVmID0gbmV3IEhvdmVyRWZmZWN0U05TU1BGb290ZXIoJCgnI3NpZGVMJykpO1xuXG4gICAgLy8gcGNcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBFZmZlY3RzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFNlY3Rpb24wMkJnIGZyb20gJy4vMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9DVkNvbnRlbnRzLmpzJztcbmltcG9ydCBTZWN0aW9uMDRQcm9kdWN0IGZyb20gJy4vMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHMuanMnO1xuaW1wb3J0IFByb2ZpbGVyIGZyb20gJy4vUHJvZmlsZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZmZlY3RzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgIHRoaXMuZG9tID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0gJyc7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5kZWJ1ZygpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gYmdcbiAgICAvLyBnYi5pbi5TZWN0aW9uMDJCZyA9IG5ldyBTZWN0aW9uMDJCZygpO1xuXG4gICAgLy8gcHJvZHVjdFxuICAgIC8vIGdiLmluLlNlY3Rpb24wNFByb2R1Y3QgPSBuZXcgU2VjdGlvbjA0UHJvZHVjdCgkKCcuc2VjdGlvbjAzJykpO1xuXG4gIH1cblxuICBkZWJ1ZygpIHtcblxuICAgIC8vIHByb2ZpbGVy6Kit5a6aXG4gICAgLy8gbmV3IFByb2ZpbGVyKCk7XG5cbiAgfVxuXG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9FZmZlY3RzLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IExvb3AgZnJvbSAnLi9DVkNvbnRlbnRzTG9vcC5qcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9DVkNvbnRlbnRzVGltZWxpbmUuanMnO1xuaW1wb3J0IENyZWF0ZUNhbnZhcyBmcm9tICcuL19kZXRhaWxzL0NyZWF0ZUNhbnZhcy5qcyc7XG5pbXBvcnQgRnVsbFNpemUgZnJvbSAnLi4vLi4vLi4vLi4vTXlMaWJzL0Rpc3BsYXkvTGF5b3V0L0Z1bGxTaXplLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1ZDb250ZW50cyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7IFxuICAgIC8vIHRoaXMuY3JlYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgICAvLyBsb29wXG4gICAgdGhpcy5sb29wID0gbmV3IExvb3AoKTtcbiAgICAvLyB0aW1lbGluZVxuICAgIHRoaXMudGltZWxpbmUgPSBuZXcgVGltZWxpbmUoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjga7jg63jg7zjg4lcbiAgICAvLyBnYi5pbi5sb2FkTWdyLnNlYzAySW1nKCk7XG4gICAgXG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICAgIC8vIGdiLmluLnJtLnRvdGFsICs9IDE7XG4gICAgLy8gY2FudmFz44Gu55Sf5oiQXG4gICAgLy8g44Os44OG44Kj44O844OK55So44GrMuWAjVxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDcmVhdGVDYW52YXMoJCgnI2JnV3JhcCAuc2VjMDJCZ0NhbnZhcycpLGdiLmluLmNvbmYuZGVmVyxnYi5pbi5jb25mLmRlZkgsKCk9PntcblxuICAgICAgdmFyIGwgPSBuZXcgRnVsbFNpemUoJCgnI2JnV3JhcCcpLCQoJy5zZWMwMkJnQ2FudmFzJyksMCwnRnVsbFNpemVTZWMwMkJnQ2FudmFzJyk7XG4gICAgICBsLnRhcmdldERlZlcgPSBnYi5pbi5jb25mLmRlZlc7XG4gICAgICBsLnRhcmdldERlZkggPSBnYi5pbi5jb25mLmRlZkg7XG4gICAgICBsLnJ1bigpO1xuXG4gICAgfSk7XG5cbiAgICAvLyB1aei/veWKoCjjgrPjg7Pjg4jjg63jg7zjg6njg7zjgIFwcm9maWxlcuOBquOBqSlcbiAgICAvLyB0aGlzLmFkZFVJKCk7XG5cblxuICB9XG5cbiAgYWRkVUkoKSB7XG5cbiAgICAvLyBwYXJhbXJ0ZXLoqr/mlbRcbiAgICAvLyBnYi5pbi5wYXJhbSA9IG5ldyBnYi5QYXJhbSgpO1xuXG4gIH1cblxuICBwbGF5KCkge1xuXG4gICAgdGhpcy5sb29wLnN0YXJ0KCk7XG4gICAgdGhpcy50aW1lbGluZS50bE1haW4ucGxheSgpO1xuXG4gIH1cblxuICBwYXVzZSgpIHtcblxuICAgIHRoaXMubG9vcC5wYXVzZSgpO1xuICAgIHRoaXMudGltZWxpbmUudGxNYWluLnBhdXNlKCk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAvLyBnYi5pbi5yLmFkZCgnY3ZDb250ZW50cycsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgLy8gZ2IuaW4uaGFzaC5vbkNoYW5nZUZ1bmNMaXN0LnB1c2godGhpcy5vblNlY3Rpb24wMi5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjAyQmcvQ1ZDb250ZW50cy5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgQ1ZDb250ZW50c0xvb3Bcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENWQ29udGVudHNMb29wIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuaXNBbHdheXMgPSB0cnVlO1xuICAgIHRoaXMuaXNSdW5TdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMuaXNBZGp1c3RQYXJhbSA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZSA9ICdpbml0aWFsJztcbiAgICB0aGlzLnNvbWV0aW1lc1N0YXRlID0gJ2luaXRpYWwnO1xuXG4gICAgdGhpcy5sb29wTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIGlmICh0aGlzLmlzQWx3YXlzKSB0aGlzLnJ1bkFsd2F5cygpO1xuICAgIGlmICh0aGlzLmlzUnVuU3RhdHVzKSB0aGlzLnJ1blN0YXR1cygpO1xuICAgIGlmICh0aGlzLmlzQWRqdXN0UGFyYW0pIHRoaXMucnVuQWRqdXN0UGFyYW0oKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIOW4uOOBq+ihjOOBhuWHpueQhlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gIHJ1bkFsd2F5cygpIHtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5sb29wTGlzdCkgdGhpcy5sb29wTGlzdFtpXSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5ZCE54q25oWL44Gu5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBydW5TdGF0dXMoKSB7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PSAnaW5pdGlhbCcpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzdGFydCcpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMScpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMicpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMycpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YW5kYnknKSB7XG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc29tZXRpbWVzJykge1xuXG4gICAgICBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnbGluZVNoYWRvdycpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NwaGVyZScpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NhdGVsbGl0ZScpIHtcblxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDjg5Hjg6njg6Hjg7zjgr/oqr/mlbTnlKjlh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bkFkanVzdFBhcmFtKCkge1xuXG5cblxuICB9XG5cbiAgZHJhdygpIHtcblxuXG5cbiAgfVxuXG4gIGxvb3AoKSB7XG5cbiAgICBpZiAodGhpcy5sb29wU3RhcnQpIHtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5kcmF3KCk7XG5cbiAgICAvLyBsb2coJ3NlY3Rpb24wMicpXG5cbiAgICB9XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSB0cnVlO1xuXG4gIH1cblxuICBwYXVzZSgpIHtcblxuICAgIHRoaXMubG9vcFN0YXJ0ID0gZmFsc2U7XG5cbiAgfVxuXG4gIGFkZChmdW5jKSB7XG5cbiAgICB0aGlzLmxvb3BMaXN0LnB1c2goZnVuYyk7XG4gICAgXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBnYi5pbi51cC5hZGQoJ3NlY3Rpb24wMkJnJyx0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNMb29wLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDVkNvbnRlbnRzVGltZWxpbmVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBDVkNvbnRlbnRzVGltZWxpbmUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy50bE1haW4gPSBuZXcgVGltZWxpbmVNYXgoKTtcbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgr/jgqTjg6Djg6njgqTjg7PjgpLmraLjgoHjgabjgYrjgY9cbiAgICB0aGlzLnRsTWFpbi5wYXVzZSgpO1xuXG4gICAgdGhpcy5iZWdpbm5pbmcoKTtcbiAgICB0aGlzLnN0ZXAwMSgpO1xuICAgIHRoaXMuc3RlcDAyKCk7XG4gICAgdGhpcy5zdGVwMDMoKTtcbiAgICB0aGlzLnN0YW5kQnkoKTtcbiAgICB0aGlzLnNvbWV0aW1lcygpO1xuXG4gIH1cblxuICBiZWdpbm5pbmcoKSB7XG5cbiAgfVxuXG4gIHN0ZXAwMSgpIHtcblxuICB9XG5cbiAgc3RlcDAyKCkge1xuXG5cbiAgfVxuXG4gIHN0ZXAwMygpIHtcblxuICAgIFxuICB9XG5cbiAgc3RhbmRCeSgpIHtcblxuXG4gIH1cblxuICAvLyDmmYLjgIVcbiAgc29tZXRpbWVzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy50bE1haW5cbiAgICAgIC5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgfSwnKz0wLjAnKSAgICBcblxuICB9XG5cbiAgb25SZXNpenNlKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIC8vIGdiLmluLnIuYWRkKCdjdlRpbWVsaW5lJywgdGhpcy5vblJlc2l6c2UuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL0NWQ29udGVudHNUaW1lbGluZS5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBDcmVhdGVDYW52YXNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMuanMnO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKCR3cmFwLHcsaCxjYj0oKT0+e30pIHtcblxuICAgIHRoaXMuYyA9IG51bGw7XG4gICAgdGhpcy5jdyA9IDA7XG4gICAgdGhpcy5jaCA9IDA7XG4gICAgXG4gICAgdGhpcy5maWxsU3R5bGUgPSAnMCwwLDAnO1xuICAgIHRoaXMuJHdyYXAgPSAkd3JhcDtcblxuICAgIHRoaXMubG9vcExpc3QgPSBbXTtcblxuICAgIC8vIOacgOWIneOCquODluOCuOOCp+OCr+ODiOeUn+aIkOOBmeOCi+OBn+OCgeOBq2Jvb2xlYW4g44GC44GI44Gm6YCG44GrXG4gICAgdGhpcy5pc1Jlc2l6ZSA9IChnYi5pbi51LmlzUmVzUEMpPyBmYWxzZTogdHJ1ZTtcblxuICAgIHRoaXMuY2IgPSBjYjtcblxuICAgIHRoaXMudyA9IDI2MDtcbiAgICB0aGlzLmggPSAxNDY7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgICB0aGlzLnNldENhbnZhc1NpemUodyxoKTtcbiAgICB0aGlzLnRpbWVsaW5lKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkgeyAvL2NhbnZhcyBmaW5nZXIgcG9pbnRcblxuICAgIHRoaXMuYyA9IG5ldyBDYW52YXMoKTtcblxuICAgIC8vIHRoaXMuYWRkT2JqZWN0cygpO1xuICAgIHRoaXMub25SZXNpemUoKTtcbiAgICBcbiAgICB0aGlzLiR3cmFwLmFwcGVuZCh0aGlzLmMuY2FudmFzKTtcblxuICAgIHRoaXMuY2IoKTtcblxuICB9XG5cbiAgYWRkT2JqZWN0cyh2eCkgeyAvL2NhbnZhcyBmaW5nZXIgcG9pbnRcblxuICAgIHRoaXMubG9vcExpc3QgPSBbXTtcblxuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHZhciBvZmZzZXRGcmFtZSA9IDA7XG4gICAgdmFyIG9mZnNldFZ4ID0gMDtcblxuICAgIHRoaXMueE51bSA9IDg7XG4gICAgdGhpcy55TnVtID0gNjtcbiAgICB0aGlzLmxlbiA9IHRoaXMueE51bSAqIHRoaXMueU51bTtcblxuICAgIHRoaXMudGlsZUxpc3QgPSBbXTtcblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcbiAgICAgIHZhciB0b3RhbCA9IGdiLmluLmNvbmYuc2VjMDJJbWdOdW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0b3RhbCA9IDE5O1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgIFxuICAgICAgdGhpcy50aWxlID0gbmV3IFBsYW5lKHRoaXMuYy5jdHgsdGhpcy5maWxsU3R5bGUpO1xuXG4gICAgICB2YXIgbnRoID0gaSAlIHRoaXMueE51bTsgXG4gICAgICBpZiAobnRoID09IDApIG9mZnNldCA9IC0gNTAwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKSAtIDI1MDtcbiAgICAgIGlmIChudGggPT0gMCkgb2Zmc2V0RnJhbWUgPSBNYXRoLmZsb29yKHRvdGFsICogTWF0aC5yYW5kb20oKSk7XG4gICAgICBpZiAobnRoID09IDApIG9mZnNldFZ4ID0gdnggKyBNYXRoLmZsb29yKHZ4ICogMiAqIE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICB2YXIgeCA9IG50aCAqIHRoaXMudyArIG9mZnNldDtcbiAgICAgIHZhciB5ID0gTWF0aC5mbG9vcihpIC8gdGhpcy54TnVtKSAqIHRoaXMuaDtcblxuICAgICAgdGhpcy50aWxlLnNldHVwKHgsIHksIHRoaXMudywgdGhpcy5oLCBvZmZzZXRGcmFtZSArIG50aCAqIDMsIG9mZnNldFZ4LCBvZmZzZXQpO1xuICAgICAgdGhpcy50aWxlTGlzdC5wdXNoKHRoaXMudGlsZSk7XG4gICAgICB0aGlzLmFkZCh0aGlzLnRpbGUubG9vcC5iaW5kKHRoaXMudGlsZSkpO1xuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgc2V0Q2FudmFzU2l6ZSh3LGgpIHtcblxuICAgIHRoaXMuY3cgPSB0aGlzLmMuY2FudmFzLndpZHRoID0gdztcbiAgICB0aGlzLmNoID0gdGhpcy5jLmNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gIH1cblxuICBsb29wKCkge1xuXG4gICAgLy8gdGhpcy5jLmN0eC5jbGVhclJlY3QoMCwwLHRoaXMuY3csdGhpcy5jaCk7XG4gICAgLy8gdGhpcy5jLmN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA4KSc7XG5cbiAgICB0aGlzLmMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNiknO1xuICAgIHRoaXMuYy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY3csdGhpcy5jaCk7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMubG9vcExpc3QpIHRoaXMubG9vcExpc3RbaV0oKTtcbiAgICBcbiAgfVxuXG4gIHRpbWVsaW5lKCkge1xuXG5cbiAgfVxuXG4gIGFkZChmdW5jKSB7XG5cbiAgICB0aGlzLmxvb3BMaXN0LnB1c2goZnVuYyk7XG4gICAgXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIGxvZyhnYi5pbi51LmlzUmVzU1AsZ2IuaW4udS5pc1Jlc1BDKTtcblxuICAgIGlmIChnYi5pbi51LmlzUmVzU1AgJiYgdGhpcy5pc1Jlc2l6ZSkge1xuICAgICAgdGhpcy5pc1Jlc2l6ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmFkZE9iamVjdHMoMC41KTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy50aWxlTGlzdFtpXS5jbnRTdG9wID0gdHJ1ZTtcblxuICAgICAgfTtcblxuICAgICAgbG9nKDExMTEpXG5cbiAgICB9IGVsc2UgaWYgKGdiLmluLnUuaXNSZXNQQyAmJiAhdGhpcy5pc1Jlc2l6ZSkge1xuICAgICAgdGhpcy5pc1Jlc2l6ZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuYWRkT2JqZWN0cygwLjUpO1xuXG4gICAgICAvLyDjgrnjg57jg5vjgaDjgaPjgZ/jgonjgIHluoPjgYTooajnpLrjgafjgoLjg5Xjg6zjg7zjg6Djga7li5XjgY3jgpLmraLjgoHjgotcbiAgICAgIGlmIChnYi5pbi51LmlzU1ApIHtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGlsZUxpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgIHRoaXMudGlsZUxpc3RbaV0uY250U3RvcCA9IHRydWU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm47XG5cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy50aWxlTGlzdFtpXS5jbnRTdG9wID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgfTtcblxuXG4gICAgICBsb2coMjIyMik7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIGdiLmluLlNlYzAyQmcubG9vcC5hZGQodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIGdiLmluLnIuYWRkKCdDcmVhdGVDYW52YXMnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DcmVhdGVDYW52YXMuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgQ2FudmFzXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgdGhpcy5jdHggPSBudWxsO1xuICAgIHRoaXMudyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIHRoaXMuaCA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXAgKCkge1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgXG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53O1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaDtcbiAgICBcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG5cbiAgICBcbiAgfVxuXG4gIGRyYXcgKCkge1xuXG4gICAgXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDJCZy9fZGV0YWlscy9DYW52YXMuanMiLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUGxhbmVcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmUge1xuXG4gIGNvbnN0cnVjdG9yKGN0eCxzdHJva2VTdHlsZSl7XG5cbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICB0aGlzLm9wID0ge3ZhbDoxfTtcblxuICAgIHRoaXMuY250ID0gMDtcblxuICAgIHRoaXMuY250U3RvcCA9IGZhbHNlO1xuXG4gICAgLy8gdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuY3JlYXRlKCk7XG5cbiAgfVxuXG4gIHNldHVwKHgsIHksIHcsIGgsIGZyYW1lU3RhcnQsIHZ4LCBvZmZzZXQpIHtcblxuICAgIHRoaXMuaW1nTGlzdCA9IGdiLmluLmxvYWRTZWMwMkltZy5saXN0O1xuXG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudyA9IHc7XG4gICAgdGhpcy5oID0gaDtcblxuICAgIHRoaXMudnggPSB2eDtcblxuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuXG4gICAgdGhpcy5jbnQgPSBmcmFtZVN0YXJ0IDtcblxuICB9XG5cbiAgY3JlYXRlKCkge1xuXG5cbiAgfVxuXG4gIC8vIOmggueCueOBp+aPj+OBj1xuICB1cGRhdGUoKSB7XG5cbiAgICB0aGlzLnggLT0gdGhpcy52eDtcbiAgICBpZiAodGhpcy54IDwgLXRoaXMudykgdGhpcy54ID0gZ2IuaW4uY2FudmFzLmN3IC0gMTA7XG5cbiAgfVxuXG4gIGRyYXcoKSB7XG5cbiAgICBpZiAoIXRoaXMuY250U3RvcCkge1xuXG4gICAgICAvLyDplpPlvJXjgY1cbiAgICAgIGlmIChnYi5pbi51cC5jbnQlMz09MCkgdGhpcy5jbnQrKztcbiAgICAgIGVsc2UgO1xuXG4gICAgfTtcbiAgICAvLyB0aGlzLmNudCsrO1xuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuICAgICAgdmFyIHRvdGFsID0gZ2IuaW4uY29uZi5zZWMwMkltZ051bTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRvdGFsID0gMTk7XG4gICAgfVxuICAgIFxuICAgIHZhciBpbWcgPSB0aGlzLmltZ0xpc3RbdGhpcy5jbnQldG90YWxdO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCk7XG4gICAgXG4gIH1cblxuICBsb29wKCkge1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmRyYXcoKTtcbiAgICBcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wMkJnL19kZXRhaWxzL1BsYW5lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBHbENvbnRlbnRzXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IExvb3AgZnJvbSAnLi9HbENvbnRlbnRzTG9vcC5qcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9HbENvbnRlbnRzVGltZWxpbmUuanMnO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vX2RldGFpbHMvUGxhbmUuanMnO1xuaW1wb3J0IFBhcmFtIGZyb20gJy4uLy4uL1BhcmFtLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xDb250ZW50cyB7XG5cbiAgY29uc3RydWN0b3IoJHdyYXAgPSAkKCdib2R5JykpIHtcblxuICAgIHRoaXMucmVuZGVyZXI7XG4gICAgdGhpcy5jYW1lcmE7XG4gICAgdGhpcy5zY2VuZTtcbiAgICB0aGlzLmxpZ2h0O1xuXG4gICAgdGhpcy5zdGF0ZSA9ICdpbml0aWFsJztcbiAgICB0aGlzLmFkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlTGluZVJvdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmlzQ29udHJvbCA9IGZhbHNlO1xuICAgIHRoaXMuY29udHJvbHM7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5jcmVhdGUoJHdyYXApO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gICAgLy8gbG9vcFxuICAgIHRoaXMubG9vcCA9IG5ldyBMb29wKCk7XG4gICAgLy8gdGltZWxpbmVcbiAgICB0aGlzLnRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG5cbiAgfVxuXG4gIGNyZWF0ZSgkd3JhcCkge1xuXG4gICAgLy8gcmVuZGVyXG4gICAgZ2IuaW4ucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczogdHJ1ZX0pO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggZ2IuaW4uci5XKCksIGdiLmluLnIuSCgpICk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwLjApO1xuICAgICR3cmFwLmFwcGVuZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggICk7XG4gICAgJCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpLmNzcyh7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxsZWZ0OiAwLFxuICAgICAgJ3otaW5kZXgnOiAxLFxuICAgIH0pO1xuXG4gICAgLy8gc2NlbmVcbiAgICBnYi5pbi5zY2VuZSA9IG5ldyBnYi5TY2VuZSgpO1xuICAgIHRoaXMuc2NlbmUgPSBnYi5pbi5zY2VuZS5zY2VuZTtcblxuICAgIC8vIGNhbWVyYVxuICAgIGdiLmluLmNhbWVyYSA9IG5ldyBnYi5DYW1lcmEoKTtcbiAgICB0aGlzLmNhbWVyYSA9IGdiLmluLmNhbWVyYS5jYW1lcmE7XG5cbiAgICAvLyBsaWdodFxuICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDMgKTtcbiAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnogPSAzO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI6L+95YqgXG4gICAgdGhpcy5hZGRPYmplY3RzKCk7XG5cbiAgICAvLyB1aei/veWKoCjjgrPjg7Pjg4jjg63jg7zjg6njg7zjgIFwcm9maWxlcuOBquOBqSlcbiAgICAvLyB0aGlzLmFkZFVJKCk7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjga7jg63jg7zjg4lcbiAgICBnYi5pbi5sb2FkTWdyLnNlY3Rpb24wNFByb2R1Y3RTaGFkZXIoKTtcblxuICB9XG5cbiAgYWRkT2JqZWN0cygpIHtcblxuICAgIHRoaXMucGxhbmUgPSBuZXcgUGxhbmUoKTtcblxuICB9XG5cbiAgYWRkVUkoKSB7XG5cbiAgICAvLyBjb250cm9sc1xuXG4gICAgaWYgKHRoaXMuaXNDb250cm9sKSB7XG5cbiAgICAgIGdiLmluLmNvbnRyb2xzID0gdGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5UcmFja2JhbGxDb250cm9scyh0aGlzLmNhbWVyYSk7XG4gICAgICB0aGlzLmNvbnRyb2xzLnpvb21TcGVlZCA9IDAuODtcbiAgICAgIHRoaXMuY29udHJvbHMucm90YXRlU3BlZWQgPSAzO1xuXG4gICAgfTtcblxuICAgIC8vIHByb2ZpbGVy6Kit5a6aXG4gICAgbmV3IGdiLlByb2ZpbGVyKCk7XG4gICAgLy8gcGFyYW1ydGVy6Kq/5pW0XG4gICAgZ2IuaW4ucGFyYW0gPSBuZXcgUGFyYW0oKTtcblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICB2YXIgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHZhciBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHcsIGgpO1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHcgLyBoO1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICB9XG5cbiAgb25TZWN0aW9uMDQoY3VyLHByZXYpIHtcblxuICAgIGlmIChjdXIgPT0gJ3Byb2R1Y3QnKSB7XG5cbiAgICAgIHRoaXMubG9vcC5zdGFydCgpO1xuICAgICAgdGhpcy50aW1lbGluZS50bE1haW4ucGxheSgpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5sb29wLnBhdXNlKCk7XG4gICAgICB0aGlzLnRpbWVsaW5lLnRsTWFpbi5wYXVzZSgpO1xuXG4gICAgfVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCh0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICAgIGdiLmluLmhhc2gub25DaGFuZ2VGdW5jTGlzdC5wdXNoKHRoaXMub25TZWN0aW9uMDQuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdvblNlY3Rpb24wNFByb2R1Y3RJbWcnLCAoKT0+e3RoaXMudGltZWxpbmUuc2V0dXAoKTt9KTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvU2VjdGlvbjA0UHJvZHVjdC9HbENvbnRlbnRzLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBHbENvbnRlbnRzTG9vcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xDb250ZW50c0xvb3Age1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc0Fsd2F5cyA9IHRydWU7XG4gICAgdGhpcy5pc1J1blN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy5pc0FkanVzdFBhcmFtID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlID0gJ2luaXRpYWwnO1xuICAgIHRoaXMuc29tZXRpbWVzU3RhdGUgPSAnaW5pdGlhbCc7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IGZhbHNlO1xuXG4gICAgdGhpcy5sb29wTGlzdCA9IFtdO1xuXG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgaWYgKHRoaXMuaXNBbHdheXMpIHRoaXMucnVuQWx3YXlzKCk7XG4gICAgaWYgKHRoaXMuaXNSdW5TdGF0dXMpIHRoaXMucnVuU3RhdHVzKCk7XG4gICAgaWYgKHRoaXMuaXNBZGp1c3RQYXJhbSkgdGhpcy5ydW5BZGp1c3RQYXJhbSgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5bi444Gr6KGM44GG5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgcnVuQWx3YXlzKCkge1xuXG4gICAgaWYgKGdiLmluLlNlY3Rpb24wNFByb2R1Y3QuaXNDb250cm9sKSBnYi5pbi5jb250cm9scy51cGRhdGUoKTtcblxuICAgIC8vIGNhbWVyYVxuICAgIGdiLmluLmNhbWVyYS51cGRhdGVDb250cm9sbCgpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8g5ZCE54q25oWL44Gu5Yem55CGXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBydW5TdGF0dXMoKSB7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PSAnaW5pdGlhbCcpIHtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09ICdzdGFydCcpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMScpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMicpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0ZXAwMycpIHtcblxuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gJ3N0YW5kYnknKSB7XG5cblxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSAnc29tZXRpbWVzJykge1xuXG4gICAgICBpZiAodGhpcy5zb21ldGltZXNTdGF0ZSA9PSAnbGluZVNoYWRvdycpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NwaGVyZScpIHtcblxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc29tZXRpbWVzU3RhdGUgPT0gJ3NhdGVsbGl0ZScpIHtcblxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyDjg5Hjg6njg6Hjg7zjgr/oqr/mlbTnlKjlh6bnkIZcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJ1bkFkanVzdFBhcmFtKCkge1xuXG5cblxuICB9XG5cbiAgZHJhdygpIHtcblxuICAgIGdiLmluLnJlbmRlcmVyLnJlbmRlciggZ2IuaW4uc2NlbmUuc2NlbmUsIGdiLmluLmNhbWVyYS5jYW1lcmEgKTtcbiAgICAvLyBnYi5pbi5wb3N0cHJvY2Vzcy5jb21wb3Nlci5yZW5kZXIoMC4xKTtcblxuICB9XG5cbiAgbG9vcCgpIHtcblxuICAgIGlmICh0aGlzLmxvb3BTdGFydCkge1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmRyYXcoKTtcblxuICAgIGxvZygnc2VjdGlvbjA0JylcblxuICAgIH1cblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLmxvb3BTdGFydCA9IHRydWU7XG5cbiAgfVxuXG4gIHBhdXNlKCkge1xuXG4gICAgdGhpcy5sb29wU3RhcnQgPSBmYWxzZTtcblxuICB9XG5cbiAgYWRkKGZ1bmMpIHtcblxuICAgIHRoaXMubG9vcExpc3QucHVzaChmdW5jKTtcbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGdiLmluLnVwLmFkZCgnc2VjdGlvbjA0UHJvZHVjdCcsdGhpcy5sb29wLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L0dsQ29udGVudHNMb29wLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBHbENvbnRlbnRzVGltZWxpbmVcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCBTb21lVGltZXMgZnJvbSAnLi4vLi4vLi4vLi4vTXlMaWJzL0V2ZW50TWdyL1NvbWV0aW1lc01nci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsQ29udGVudHNUaW1lbGluZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnRsTWFpbiA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIC8vIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCv+OCpOODoOODqeOCpOODs+OCkuatouOCgeOBpuOBiuOBj1xuICAgIHRoaXMudGxNYWluLnBhdXNlKCk7XG4gICAgXG4gICAgdGhpcy5iZWdpbm5pbmcoKTtcbiAgICAvLyB0aGlzLnN0ZXAwMSgpO1xuICAgIC8vIHRoaXMuc3RlcDAyKCk7XG4gICAgLy8gdGhpcy5zdGVwMDMoKTtcbiAgICAvLyB0aGlzLnN0YW5kQnkoKTtcbiAgICB0aGlzLnNvbWV0aW1lcygpOyAgICBcblxuICB9XG5cbiAgYmVnaW5uaW5nKCkge1xuXG4gICAgdGhpcy50bE1haW5cbiAgICAgIC8vIHpvb20gaW5cbiAgICAgIC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMuc3RyZW5ndGgsIDEuMywge1xuICAgICAgICB2YWx1ZTogNTAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgb25TdGFydDogKCk9PiB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQoZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLnN0cmVuZ3RoLCB7dmFsdWU6IDUwMH0pO1xuXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIGNhbWVyYeenu+WLlVxuICAgICAgLnRvKGdiLmluLmNhbWVyYS5jYW1lcmEucG9zaXRpb24sIDEuNSwge1xuICAgICAgICB6OiAyMDAsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0XG4gICAgICB9LCctPTEuMycpXG5cbiAgICAgIC8vIHBsYW5l56e75YuVXG4gICAgICAudG8oZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS5wbGFuZS5wb3NpdGlvbiwgMS41LCB7XG4gICAgICAgIHg6IC0xMDAsXG4gICAgICAgIHk6IDIwMCxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXRcbiAgICAgIH0sJy09MS41JylcblxuICAgICAgLy8gem9vbSBvdXRcbiAgICAgIC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMuc3RyZW5ndGgsIDEsIHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluXG4gICAgICB9LCctPTAuNCcpXG5cbiAgICAgIC8vIHBsYW5lMDHjgYxvcGFjaXR544Gn5raI44GI44KLXG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLm9wYWNpdHksIDEsIHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlSW5PdXRcbiAgICAgIH0sJy09MC43JylcblxuICAgICAgLy8gcGxhbmUwMuOBrmJsdXIgb3V0XG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLnN0cmVuZ3RoLCAxLCB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dFxuICAgICAgfSwnLT0xLjAnKVxuXG4gICAgICAvLyBwbGFuZTAy44GM5Ye644Gm5p2l44KLXG4gICAgICAudG8oZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLm9wYWNpdHksIDEsIHtcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0XG4gICAgICB9LCctPTEuMCcpXG5cbiAgICAgIC50byhnYi5pbi5jYW1lcmEuY2FtZXJhLnBvc2l0aW9uLCAxLjUsIHtcbiAgICAgICAgejogNDAwLFxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VPdXQsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpPT4ge1xuXG4gICAgICAgICAgLy8gbWF0ZXJpYWzjga7lpInmm7RcblxuICAgICAgICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5mcm9tLnZhbHVlID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS50ZXh0dXJlc1sxXTtcbiAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMudG8udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzJdO1xuXG4gICAgICAgICAgZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS5wbGFuZTAyLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3JtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS52cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLmZzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUucGxhbmUwMi5zY2FsZS54ID0gZ2IuaW4uU2VjdGlvbjA0UHJvZHVjdC5wbGFuZS5wbGFuZTAyLnNjYWxlLnkgPSAxMjAwLjA7XG5cblxuICAgICAgICB9XG4gICAgICB9LCctPTEuMCcpXG5cblxuXG4gIH1cblxuICBzdGVwMDEoKSB7XG5cblxuICB9XG5cbiAgc3RlcDAyKCkge1xuXG5cblxuICB9XG5cbiAgc3RlcDAzKCkge1xuXG5cblxuICB9XG5cbiAgc3RhbmRCeSgpIHtcblxuXG4gIH1cblxuICAvLyDmmYLjgIVcbiAgc29tZXRpbWVzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy50bE1haW5cbiAgICAgIC5hZGQoZnVuY3Rpb24oKXtcblxuXG4gICAgICAgIHZhciBzID0gbmV3IFNvbWVUaW1lcygpO1xuXG4gICAgICAgIHMuYWRkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBUd2Vlbk1heC50byhnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMucHJvZ3Jlc3MsIDEuMywge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBlYXNlOiBFeHBvLmVhc2VJbk91dCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpPT57XG5cbiAgICAgICAgICAgICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzJdLnVuaWZvcm1zLmZyb20udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzNdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgXG4gICAgICAgICAgXG5cbiAgICAgICAgfSwgMi4wLCAyLjApXG5cbiAgICAgICAgcy5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5wcm9ncmVzcywgMS4zLCB7XG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMudG8udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzRdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSwgMi4wLCAyLjApXG5cbiAgICAgICAgcy5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5wcm9ncmVzcywgMS4zLCB7XG4gICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMuZnJvbS52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbNV07XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSwgMi4wLCAyLjApXG5cbiAgICAgICAgcy5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5wcm9ncmVzcywgMS4zLCB7XG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMudG8udmFsdWUgPSBnYi5pbi5TZWN0aW9uMDRQcm9kdWN0LnBsYW5lLnRleHR1cmVzWzFdO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSwgMi4wLCAyLjApXG5cbiAgICAgICAgcy5hZGQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgIFR3ZWVuTWF4LnRvKGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1syXS51bmlmb3Jtcy5wcm9ncmVzcywgMS4zLCB7XG4gICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgICAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMl0udW5pZm9ybXMuZnJvbS52YWx1ZSA9IGdiLmluLlNlY3Rpb24wNFByb2R1Y3QucGxhbmUudGV4dHVyZXNbMl07XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG5cblxuICAgICAgICB9LCAyLjAsIDIuMCk7XG5cbiAgICAgICAgcy5zdGFydCgpO1xuXG4gICAgICB9LCcrPTAuMCcpXG4gICAgXG5cbiAgfVxuXG4gIG9uUmVzaXpzZSgpIHtcblxuICB9XG5cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCh0aGlzLm9uUmVzaXpzZS5iaW5kKHRoaXMpKTtcblxuICAgICQod2luZG93KS5vbignY2xpY2snLCgpPT57XG5cbiAgICAgIC8vIHRoaXMuc3RhcnQoKTtcblxuICAgIH0pO1xuXG4gIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy8wM19lZmZlY3RzL1NlY3Rpb24wNFByb2R1Y3QvR2xDb250ZW50c1RpbWVsaW5lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBTb21lVGltZXNcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbWVUaW1lcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLlNvbWVUaW1lcztcbiAgICB0aGlzLlRpbWVyID0gbnVsbDtcbiAgICB0aGlzLmNiTGlzdCA9IFtdO1xuICAgIHRoaXMubGVuID0gMDtcbiAgICB0aGlzLm9yZGVyID0gMDtcblxuICAgIHRoaXMubWluID0gW107XG4gICAgdGhpcy5tYXggPSBbXTtcblxuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cblxuICB9XG5cbiAgc3RhcnQobWluPTAsIG1heD0wKSB7XG5cbiAgICB0aGlzLmxhdGVyID0gZ2IuaW4udS5yYW5kb20obWluLG1heCkgKiAxMDAwO1xuICAgIHRoaXMuVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMucnVuLmJpbmQodGhpcyksdGhpcy5sYXRlcik7XG5cbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIHRoaXMub3JkZXIgPSB0aGlzLm9yZGVyICUgdGhpcy5sZW47XG5cbiAgICB0aGlzLmxhdGVyID0gZ2IuaW4udS5yYW5kb20odGhpcy5taW5bdGhpcy5vcmRlcl0sdGhpcy5tYXhbdGhpcy5vcmRlcl0pICogMTAwMDtcblxuICAgIHRoaXMuY2JMaXN0W3RoaXMub3JkZXJdKCk7XG5cbiAgICB0aGlzLm9yZGVyKys7XG4gICAgdGhpcy5UaW1lciA9IHNldFRpbWVvdXQodGhpcy5ydW4uYmluZCh0aGlzKSx0aGlzLmxhdGVyKTtcblxuICB9XG5cbiAgc3RvcCgpIHtcblxuICAgIGxvZyh0aGlzLlRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5UaW1lcik7XG5cbiAgfVxuXG4gIGFkZChmdW5jLG1pbj04LG1heD0xMikge1xuXG4gICAgdGhpcy5taW4ucHVzaChtaW4pO1xuICAgIHRoaXMubWF4LnB1c2gobWF4KTtcblxuICAgIHRoaXMuY2JMaXN0LnB1c2goZnVuYyk7XG4gICAgdGhpcy5sZW4gPSB0aGlzLmNiTGlzdC5sZW5ndGg7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRXZlbnRNZ3IvU29tZXRpbWVzTWdyLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQbGFuZVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG51bGw7XG4gICAgdGhpcy5tYXRlcmlhbCA9IG51bGw7XG5cbiAgICB0aGlzLnZpZGVvID0gbnVsbDtcbiAgICB0aGlzLnBsYW5lID0gbnVsbDtcblxuICAgIHRoaXMuZGVmV1cgPSAxOTIwO1xuICAgIHRoaXMuZGVmSEggPSAxMDgwO1xuICAgIHRoaXMuZGVmVyA9IDMwNTtcbiAgICB0aGlzLnJhdGUgPSAwO1xuICAgIHRoaXMucmF0ZVcgPSAwO1xuXG4gICAgdGhpcy5sYiA9IG51bGw7IC8vbGF5b3V0IGJhY2tncm91bmRcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBjcmVhdGUoY2IpIHtcblxuICAgIHZhciB0ZXh0dXJlcyA9IHRoaXMudGV4dHVyZXMgID0gZ2IuaW4ubG9hZE1nci50ZXh0dXJlcztcblxuICAgIHZhciB3ID0gdGV4dHVyZXNbMF0uaW1hZ2Uud2lkdGggLyB0ZXh0dXJlc1swXS5pbWFnZS53aWR0aDtcbiAgICB2YXIgaCA9IHRleHR1cmVzWzBdLmltYWdlLmhlaWdodCAvIHRleHR1cmVzWzBdLmltYWdlLndpZHRoO1xuXG4gICAgLy8gcGxhbmUwMVxuXG4gICAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodywgaCwgMSwgMSk7XG4gICAgdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMF0udW5pZm9ybXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnZzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLmZzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgdGhpcy5wbGFuZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgdGhpcy5wbGFuZS5zY2FsZS54ID0gdGhpcy5wbGFuZS5zY2FsZS55ID0gMjAwMC4wO1xuXG4gICAgLy8gcGxhbmUwMlxuXG4gICAgdmFyIHcgPSB0ZXh0dXJlc1sxXS5pbWFnZS53aWR0aCAvIHRleHR1cmVzWzFdLmltYWdlLndpZHRoO1xuICAgIHZhciBoID0gdGV4dHVyZXNbMV0uaW1hZ2UuaGVpZ2h0IC8gdGV4dHVyZXNbMV0uaW1hZ2Uud2lkdGg7XG5cbiAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh3LCBoLCAxLCAxKTtcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1sxXS51bmlmb3JtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0uZnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICB0aGlzLnBsYW5lMDIgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIHRoaXMucGxhbmUwMi5zY2FsZS54ID0gdGhpcy5wbGFuZTAyLnNjYWxlLnkgPSA2MDAuMDtcblxuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy5vcGFjaXR5LnZhbHVlID0gMTtcbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMub3BhY2l0eS52YWx1ZSA9IDA7XG5cbiAgICB0aGlzLnBsYW5lMDIucG9zaXRpb24ueiA9IC0xO1xuXG4gICAgZ2IuaW4uc2NlbmUuc2NlbmUuYWRkKCB0aGlzLnBsYW5lICk7XG4gICAgZ2IuaW4uc2NlbmUuc2NlbmUuYWRkKCB0aGlzLnBsYW5lMDIgKTtcblxuICAgIC8vIHRoaXMub25SZXNpemUoKTtcbiAgICAvLyB0aGlzLnNldEV2ZW50cygpO1xuXG4gICAgLy8g44OG44Kv44K544OB44Oj44KSdW5pZm9ybeWkieaVsOOBq+i/veWKoFxuICAgIGdiLmluLmxvYWRNZ3Iuc2hhZGVyc1swXS51bmlmb3Jtcy50ZXh0dXJlLnZhbHVlID0gdGV4dHVyZXNbMF07XG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzBdLnVuaWZvcm1zLnRleHR1cmUwMS52YWx1ZSA9IHRleHR1cmVzWzFdO1xuXG4gICAgZ2IuaW4ubG9hZE1nci5zaGFkZXJzWzFdLnVuaWZvcm1zLnRleHR1cmUudmFsdWUgPSB0ZXh0dXJlc1sxXTtcbiAgICBnYi5pbi5sb2FkTWdyLnNoYWRlcnNbMV0udW5pZm9ybXMudGV4dHVyZTAxLnZhbHVlID0gdGV4dHVyZXNbMV07XG5cbiAgICBjYigpO1xuXG4gIH1cblxuICBzZXRWaWRlb1NpemUoKSB7XG5cbiAgICAvLyB2aWRlb+OBruOCu+ODg+ODiOOCteOCpOOCuiAgICAgICAgICBcbiAgICAvLyB0aGlzLmxiID0gbmV3IGdiLkxheW91dEJhY2tncm91bmQoJCgnYm9keScpLCQodGhpcy52aWRlby52aWRlbykpO1xuICAgIC8vIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldFRyYW5zcGFyZW50KHZhbCkge1xuXG4gICAgLy8gdGhpcy5wbGFuZS5tYXRlcmlhbC5vcGFjaXR5ID0gdmFsO1xuXG4gIH1cblxuICB0d2VlblRyYW5zcGFyZW50KHRpbWUsdmFsKSB7XG5cbiAgICAvLyB2YXIgdCA9IHRpbWUgfHwgMS4wO1xuICAgIC8vIHZhciB2ID0gdmFsLnRhcmdldCB8fCAxLjA7XG4gICAgLy8gdmFyIGUgPSB2YWwuZWFzZSB8fCBQb3dlcjIuZWFzZU91dDtcblxuICAgIC8vIFR3ZWVuTWF4LnRvKHRoaXMucGxhbmUubWF0ZXJpYWwsIHQsIHtcbiAgICAvLyAgIG9wYWNpdHk6IHYsXG4gICAgLy8gICBlYXNlIDogZSxcbiAgICAvLyB9KTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG5cblxuXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcblxuICAgIC8vIHZhciB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgLy8gdmFyIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAvLyB2YXIgcmF0ZVcgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAvLyB2YXIgciA9IHcvaDtcblxuICAgIC8vIGlmIChyYXRlVyA8IHRoaXMucmF0ZSkge1xuXG4gICAgLy8gICB0aGlzLnBsYW5lLnNjYWxlLnNldChyKjAuNTgsciowLjU4LHIqMC41OClcblxuICAgIC8vIH0gZWxzZSB7XG5cbiAgICAvLyAgIC8vIGxvZygyLHNjYWxlWSk7XG5cbiAgICAvLyAgIHRoaXMucGxhbmUuc2NhbGUuc2V0KDEsMSwxKTtcblxuICAgIC8vIH1cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgLy8gZ2IuaW4ucm0udG90YWwgKz0gMTsgLy8gbG9hZOaVsOOBrnRvdGFs44KS6KiI566XXG4gICAgJCh3aW5kb3cpLm9uKCdvblNlY3Rpb24wNFByb2R1Y3RJbWcnLCB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMsKCk9PntcbiAgICAgIC8vZ2IuaW4ucm0uY29tcGxldGVkKys7XG4gICAgfSkpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9TZWN0aW9uMDRQcm9kdWN0L19kZXRhaWxzL1BsYW5lLmpzIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQYXJhbVxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYW0ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5ndWk7XG4gICAgdGhpcy5qc29uID0ge307XG4gICAgLy8gdGhpcy5hcHBOYW1lID0gXCJwbHVzTVZcIjtcblxuICAgIHZhciBpc0ZsYWcgPSB0cnVlO1xuXG4gICAgdGhpcy5jbG9jayA9IHtcbiAgICAgIHByb2dyZXNzOiAwLjUsXG4gICAgfVxuXG4gICAgdGhpcy56b29tYmx1ciA9IHtcbiAgICAgIHN0cmVuZ3RoOiA0Ni4wLFxuICAgICAgc2l6ZTogODkuMCxcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zaXRpb24gPSB7XG4gICAgICBwcm9ncmVzczogMC4wLFxuICAgICAgc2l6ZTogMC4wNCxcbiAgICAgIHpvb206IDMwLFxuICAgICAgY29sb3JTZXBhcmF0aW9uOiAwLjMsXG4gICAgICBzdHJlbmd0aDogMC42LFxuICAgICAgdHdlZW46ICgpPT57XG5cbiAgICAgICAgdmFyIHZhbDtcbiAgICAgICAgaWYgKGlzRmxhZykgdmFsID0gMS4wO1xuICAgICAgICBlbHNlIHZhbCA9IDAuMFxuXG4gICAgICAgIGlzRmxhZyA9ICFpc0ZsYWc7XG5cbiAgICAgICAgVHdlZW5NYXgudG8oZ2IuaW4ucGxhbmUwMi5zaGFkZXIudW5pZm9ybXMucHJvZ3Jlc3MsIDIuNSwge1xuICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgICAgfSlcblxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLnNldHVwRGF0YSgpO1xuICAgIHRoaXMuc2V0dXAoKTtcblxuICB9XG5cbiAgc2V0dXBEYXRhKCkge1xuXG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gaWYgKGdiLmluLmNvbmYuUEFSQU0pIHtcblxuICAgIHRoaXMuZ3VpID0gbmV3IGRhdC5HVUkoKTtcbiAgICAvLyB0aGlzLmd1aSA9IG5ldyBkYXQuR1VJKHtsb2FkOiB0aGlzLmpzb259KTtcbiAgICB0aGlzLmd1aS5yZW1lbWJlcih0aGlzKTtcbiAgICAkKFwiLmRnXCIpLmNzcyh7ekluZGV4Ojk5OTk5fSk7XG5cbiAgICB2YXIgZjEgPSB0aGlzLmd1aS5hZGRGb2xkZXIoJ3pvb21ibHVyJyk7XG4gICAgZjEuYWRkKHRoaXMuem9vbWJsdXIsICdzdHJlbmd0aCcsIDAuMCwgMi4wKS5zdGVwKDAuMDEpLmxpc3RlbigpLm9uQ2hhbmdlKGZ1bmN0aW9uKHZhbCl7XG5cbiAgICAgIGdiLmluLnBsYW5lLnNoYWRlcnNbMl0udW5pZm9ybXMuc3RyZW5ndGgudmFsdWUgPSB2YWw7XG4gICAgICBsb2codmFsKTtcblxuICAgIH0pO1xuICAgIGYxLmFkZCh0aGlzLnpvb21ibHVyLCAnc2l6ZScsIDAuMCwgMTAwLjApLnN0ZXAoMC4xKS5saXN0ZW4oKS5vbkNoYW5nZShmdW5jdGlvbih2YWwpe1xuXG4gICAgICBnYi5pbi5wbGFuZS5zaGFkZXIudW5pZm9ybXMubkZyYWcudmFsdWUgPSAxIC8gdmFsO1xuXG4gICAgfSk7XG4gICAgZjEub3BlbigpO1xuXG4gICAgLy8gdGhpcy5ndWkuY2xvc2UoKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9QYXJhbS5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUHJvZmlsZXJcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuU3RhdHM7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8gaWYgKGdiLmluLmNvbmYuU1RBVFMpIHtcblxuICAgICAgdGhpcy5TdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgICAgdGhpcy5TdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgdGhpcy5TdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgICAgID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuU3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgICA9IFwiMHB4XCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuU3RhdHMuZG9tRWxlbWVudCk7XG4gICAgXG5cbiAgICAvLyB9O1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBpZih0aGlzLlN0YXRzKSB7XG4gICAgICB0aGlzLlN0YXRzLnVwZGF0ZSgpO1xuICAgIH1cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgZ2IuaW4udXAuYWRkKCdwcm9maWxlcicsdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9UZXJhTWFjL0RvY3VtZW50cy8wMF9TdG9jay8xMF9iYXNlL2Zyb250ZW5kX2Jhc2VfdmVyMDIvZGV2ZWxvcG1lbnQvcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRWZmZWN0cy9Qcm9maWxlci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTGF5b3V0XG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5TUEJhc2VXID0gMzc1O1xuICAgIHRoaXMuUENCYXNlVyA9IDEzMDA7XG5cbiAgICB0aGlzLnJhdGUgPSAxO1xuICAgIHRoaXMuVyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgdGhpcy4kdGFyZ2V0TGlzdCA9IFtcbiAgICAgIHtcbiAgICAgICAgJyR0YXJnZXQnOiAkKCcjc2lkZUwsICNzaWRlUiwgI25hdicpLFxuICAgICAgICAnc2NhbGUnOiAnc3BPbmx5JyAvLyBzcE9ubHkgcGNPbmx5IGJvdGhcbiAgICAgIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgICckdGFyZ2V0JzogJCgnLnNlY3Rpb24wM19kZXRhaWwnKSxcbiAgICAgIC8vICAgJ3NjYWxlJzogJ2JvdGgnIC8vIHNwT25seSBwY09ubHkgYm90aFxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgJyR0YXJnZXQnOiAkKCcuc2VjdGlvbjA0JyksXG4gICAgICAvLyAgICdzY2FsZSc6ICdib3RoJyAvLyBzcE9ubHkgcGNPbmx5IGJvdGhcbiAgICAgIC8vIH0sXG4gICAgXVxuXG4gICAgdGhpcy5ydW4oKTtcbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICBcbiAgfVxuXG4gIHJ1bigpIHtcblxuICAgIHRoaXMuVyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIHRoaXMuaVcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIHRoaXMuc2NhbGUoKTtcbiAgICB0aGlzLndyYXAoKTtcblxuICB9XG5cbiAgLy8g5ouh5aSnXG4gIHNjYWxlKCkge1xuXG4gICAgLy8gYnDjga7loLTlkIjjga5zY2FsZVxuICAgIGlmICh0aGlzLmlXIDw9IGdiLmluLmNvbmYuYnApIHtcblxuICAgICAgLy8gd2lkdGjjgYvjgolyYXRl44KS6KiI566XXG4gICAgICAvLyB0aGlzLnJhdGUgPSBnYi5pbi51LmZsb2F0Rm9ybWF0KHRoaXMuVyAvIHRoaXMuU1BCYXNlVyAsIDIpO1xuICAgICAgaWYgKHRoaXMuVyA+IDM3NSkgdGhpcy5XID0gMzc1O1xuICAgICAgaWYgKHRoaXMuVyA8IDMyMCkgdGhpcy5XID0gMzIwO1xuICAgICAgbG9nKHRoaXMuVyk7XG4gICAgICB0aGlzLnJhdGUgPSB0aGlzLlcgLyB0aGlzLlNQQmFzZVc7XG5cbiAgICAgIC8vIHNjYWxl44GZ44KL44Oq44K544OI44KS44Or44O844OXXG4gICAgICAkLmVhY2godGhpcy4kdGFyZ2V0TGlzdCwgKGluZGV4LCB2YWwpPT57XG5cbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnYm90aCcgfHwgdmFsLnNjYWxlID09ICdzcE9ubHknKSB7XG5cbiAgICAgICAgICBUd2Vlbk1heC5zZXQodmFsLiR0YXJnZXQsIHtcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLnJhdGUsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIHdpZHRo44GL44KJcmF0ZeOCkuioiOeul1xuICAgICAgLy8gdGhpcy5yYXRlID0gZ2IuaW4udS5mbG9hdEZvcm1hdCh0aGlzLlcgLyB0aGlzLlBDQmFzZVcgLCAyKTtcbiAgICAgIGlmICh0aGlzLlcgPiAxMzAwKSB0aGlzLlcgPSAxMzAwO1xuICAgICAgdGhpcy5yYXRlID0gdGhpcy5XIC8gdGhpcy5QQ0Jhc2VXO1xuXG4gICAgICAvLyBzY2FsZeOBmeOCi+ODquOCueODiOOCkuODq+ODvOODl1xuICAgICAgJC5lYWNoKHRoaXMuJHRhcmdldExpc3QsIChpbmRleCwgdmFsKT0+e1xuXG4gICAgICAgIGlmICh2YWwuc2NhbGUgPT0gJ2JvdGgnIHx8IHZhbC5zY2FsZSA9PSAncGNPbmx5Jykge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KHZhbC4kdGFyZ2V0LCB7XG4gICAgICAgICAgICBzY2FsZTogdGhpcy5yYXRlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g44GT44Gh44KJ44Gu5aC05ZCI44Gv44CBc2NhbGXjgpLmiLvjgZlcbiAgICAgICAgaWYgKHZhbC5zY2FsZSA9PSAnc3BPbmx5Jykge1xuXG4gICAgICAgICAgVHdlZW5NYXguc2V0KHZhbC4kdGFyZ2V0LCB7XG4gICAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgIH0pOyAgXG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIHNjYWxl44GX44Gf44KJ44CB5YWD44Gu5aSn44GN44GV5YiG5L2Z55m944GM44Gn44GN44KL44Gu44Gnb3ZlcmZsb3cgaGlkZGVu44Gn5raI44GZXG4gIHdyYXAoKSB7XG5cblxuXG4gIH1cblxuICByZXNldCgpIHtcblxuICAgICQuZWFjaCh0aGlzLiR0YXJnZXRMaXN0LCAoaW5kZXgsIHZhbCk9PntcblxuICAgICAgVHdlZW5NYXguc2V0KHZhbC4kdGFyZ2V0LCB7XG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6JzAgMCcsXG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nOicwIDAnXG4gICAgICB9KTtcbiAgICAgIFxuICAgIH0pO1xuXG5cbiAgICAvLyDjgqTjg5njg7Pjg4jop6PpmaRcbiAgICBnYi5pbi5yLnJlbW92ZSgnc2NhbGVUb3AnKTtcblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG5cbiAgICB0aGlzLnJ1bigpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICBnYi5pbi5yLmFkZCgnc2NhbGVUb3AnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICAgIFxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9MYXlvdXQvU2l6ZS9TY2FsZVRvcC5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RTTlNTUEZvb3RlclxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RTTlNTUEZvb3RlciB7XG5cbiAgY29uc3RydWN0b3IoJHdyYXAsICR0YXJnZXQpIHtcblxuICAgIHRoaXMuJHdyYXAgPSAkd3JhcDtcbiAgICB0aGlzLiRpbm5lciA9IHRoaXMuJHdyYXAuZmluZCgnLmlubmVyJyk7XG4gICAgdGhpcy4kdGFyZ2V0ID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5pY29uU2hhcmUnKTtcbiAgICB0aGlzLiRiYXIgPSB0aGlzLiR3cmFwLmZpbmQoJy5zbnMuc3AgLmJhcicpO1xuICAgIHRoaXMuJGxpc3QgPSB0aGlzLiR3cmFwLmZpbmQoJy5zbnMuc3AgLmxpc3QnKTtcbiAgICB0aGlzLiRpdGVtID0gdGhpcy4kd3JhcC5maW5kKCcuc25zLnNwIC5saXN0IC5pdGVtJyk7XG5cbiAgICAvLyBtb3Rpb25cbiAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgcmVhZHkoKSB7XG5cbiAgICAvLyBveFxuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiR3cmFwLCB7d2lkdGg6IDB9KVxuXG4gICAgLy8gYmFyXG4gICAgVHdlZW5NYXguc2V0KHRoaXMuJGJhciwge3dpZHRoOiAwfSlcblxuICAgIC8vIHNuc1xuICAgIFR3ZWVuTWF4LnNldCh0aGlzLiRpdGVtLCB7eDogLTQwLCBvcGFjaXR5OiAwfSlcblxuICAgIHRoaXMuJGJhci5zaG93KCk7XG4gICAgdGhpcy4kbGlzdC5zaG93KCk7XG5cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcblxuICAgIGlmICh0aGlzLiR0YXJnZXQuaGFzQ2xhc3MoJ29uJykpIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmNsb3NlKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgICAgdGhpcy5vcGVuKCk7XG5cbiAgICB9O1xuXG4gICAgdGhpcy4kdGFyZ2V0LnRvZ2dsZUNsYXNzKCdvbicpO1xuXG4gIH1cblxuICBvcGVuICh0aGF0KSB7XG5cbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kYm94KTtcbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kYmFyKTtcbiAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2YodGhpcy4kaXRlbSk7XG5cbiAgICB0aGlzLnJlYWR5KCk7XG5cbiAgICAvLyBiYXLjgYzkvLjjgbPjgotcblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG5cbiAgICB0bFxuICAgICAgLy8gYm9444GM5Ly444Gz44KLXG4gICAgICAudG8odGhpcy4kd3JhcCwgMC40LCB7XG4gICAgICAgIHdpZHRoOiAzMzAsXG4gICAgICAgIGVhc2U6IFBvd2VyMy5lYXNlT3V0XG4gICAgICB9KVxuICAgICAgLnRvKHRoaXMuJGJhciwgMC4zLCB7XG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICB9LCctPTAuMicpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgwKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMicpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgxKSwgMC4zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICB9LCctPTAuMjUnKVxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMiksIDAuMywge1xuICAgICAgICB4OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSwnLT0wLjI1JylcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDMpLCAwLjMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yNScpXG4gICAgXG4gIH1cblxuICBjbG9zZSAodGhhdCkge1xuXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJveCk7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGJhcik7XG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRoaXMuJGl0ZW0pO1xuXG4gICAgLy8gYmFyXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICB0bFxuICAgICAgLnRvKHRoaXMuJGl0ZW0uZXEoMyksIDAuMywge1xuICAgICAgICB4OiAtNDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0LFxuICAgICAgfSlcbiAgICAgIC50byh0aGlzLiRpdGVtLmVxKDIpLCAwLjMsIHtcbiAgICAgICAgeDogLTQwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgxKSwgMC4zLCB7XG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0sJy09MC4yNScpXG4gICAgICAudG8odGhpcy4kaXRlbS5lcSgwKSwgMC4zLCB7XG4gICAgICAgIHg6IC00MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXG4gICAgICAgIG9uQ29tcGxldGU6KCk9PntcbiAgICAgICAgICB0aGlzLiRsaXN0LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwnLT0wLjI1JylcbiAgICAgIC50byh0aGlzLiRiYXIsIDAuMiwge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VPdXQsXG4gICAgICAgIG9uQ29tcGxldGU6KCk9PntcbiAgICAgICAgICB0aGlzLiRiYXIuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCctPTAuMycpXG4gICAgICAudG8odGhpcy4kd3JhcCwgMC4zLCB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcbiAgICAgIH0sJy09MC4zJylcblxuICB9XG5cbiAgcmVzZXQoKSB7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy4kdGFyZ2V0Lm9mZignY2xpY2snKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGFyZ2V0Lm9uKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuIFxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9FZmZlY3RzLzAzX2VmZmVjdHMvSG92ZXJFZmZlY3RTTlNTUEZvb3Rlci5qcyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG92ZXJFZmZlY3RTVkdBcnJvd1RvcCB7XG5cbiAgY29uc3RydWN0b3IoJHRhcmdldCkge1xuXG4gICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldFxuXG4gICAgLy8gbW90aW9uXG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuXG4gICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG5cbiAgICAvLyDjgrnjg57jg5vjga7jgajjgY3jga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuXG4gIH1cblxuICBydW4oKSB7XG5cbiAgfVxuXG4gIG9uRW50ZXIgKHRoYXQpIHtcblxuICAgIGlmICh0aGlzLmF1dG9UTCkge1xuICAgICAgdGhpcy5hdXRvVEwua2lsbCgpO1xuICAgICAgdGhpcy5hdXRvVEwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy50bDAyKSB0aGlzLnRsMDIua2lsbCgpO1xuICAgIHRoaXMudGwwMSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgdGhpcy50bDAxXG4gICAgICAgIC8vIOefouWNsOOCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgICAudG8oJCh0aGF0KS5maW5kKCcuYXJyb3cucGMnKSwgMC40LCB7XG4gICAgICAgICAgc2NhbGVZOiAwLjY1LFxuICAgICAgICAgIHk6IDgsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgICB9KVxuICAgICAgICAvLyDmloflrZfjgpLkuIvjgavkuIvjgZLjgotcbiAgICAgICAgLnRvKCQodGhhdCkuZmluZCgnLnRleHQnKSwgMC40LCB7XG4gICAgICAgICAgeTogMzAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG4gICAgICAgIH0sJy09MC4zNycpXG4gICAgICAgIFxuICB9XG5cbiAgb25MZWF2ZSAodGhhdCkge1xuXG4gICAgaWYgKHRoaXMudGwwMSkgdGhpcy50bDAxLmtpbGwoKTtcbiAgICB0aGlzLnRsMDIgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuICAgIHRoaXMudGwwMlxuICAgICAgLy8g5paH5a2X44KS5LiL44Gr5LiL44GS44KLXG4gICAgICAudG8oJCh0aGF0KS5maW5kKCcudGV4dCcpLCAwLjUsIHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMSxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dFxuICAgICAgfSlcbiAgICAgIC8vIOefouWNsOOCkuS4i+OBq+S4i+OBkuOCi1xuICAgICAgLnRvKCQodGhhdCkuZmluZCgnLmFycm93LnBjJyksIDAuNSwge1xuICAgICAgICBzY2FsZVk6IDEsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDEsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgZWFzZTogUG93ZXIyLmVhc2VJbk91dCxcbiAgICAgICAgb25Db21wbGV0ZTogKCk9PntcblxuICAgICAgICAgIGlmICh0aGlzLmF1dG9UTCA9PSBudWxsKSB0aGlzLmF1dG9BcnJvdygpOyAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgICB9LCctPTAuNDUnKVxuXG4gIH1cblxuICBhdXRvQXJyb3coKSB7XG5cbiAgICB0aGlzLmF1dG9UTCA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OiAtMX0pO1xuXG4gICAgdGhpcy5hdXRvVExcbiAgICAgIC50byh0aGlzLiR0YXJnZXQuZmluZCgnLmFycm93LnBjJyksIDAuNiwge1xuICAgICAgICB5OiA2MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZGVsYXk6IDUuMCxcbiAgICAgICAgc2NhbGVZOiAwLjMsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSAxMDAlJyxcbiAgICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXRcbiAgICAgIH0pXG4gICAgICAuc2V0KHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwge3NjYWxlWTogMSx5OiAtNjB9KVxuICAgICAgLnRvKHRoaXMuJHRhcmdldC5maW5kKCcuYXJyb3cucGMnKSwgMC41LCB7XG4gICAgICAgIHNjYWxlWTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgZGVsYXk6IDAuMyxcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDEwMCUnLFxuICAgICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dFxuICAgICAgfSlcblxuICB9XG5cbiAgc2V0dXBGaXJzdCgpIHtcblxuICAgIFR3ZWVuTWF4LnNldCgkKCcuc2VjdGlvbjAxIC5uZXh0IC50ZXh0JyksIHt5OiAtNjAsb3BhY2l0eTowLHo6IDEsfSk7XG4gICAgVHdlZW5NYXguc2V0KCQoJy5zZWN0aW9uMDEgLm5leHQgc3ZnJyksIHt5OiAtMzAsb3BhY2l0eTowLHo6IDEsfSk7XG5cbiAgfVxuXG4gIHJ1bkZpcnN0KCkge1xuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbiAgICAgICAgLy8g5paH5a2X44KS5LiL44Gr5LiL44GS44KLXG4gICAgICB0bC50bygkKCcuc2VjdGlvbjAxIC5uZXh0IC50ZXh0JyksIDEuNSwge1xuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB6OiAxLFxuICAgICAgICAgIGVhc2U6IFBvd2VyMi5lYXNlT3V0XG4gICAgICAgIH0pXG4gICAgICAgIC50bygkKCcuc2VjdGlvbjAxIC5uZXh0IHN2ZycpLCAxLjAsIHtcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgejogMSxcbiAgICAgICAgICBlYXNlOiBQb3dlcjIuZWFzZU91dFxuICAgICAgICB9LCctPTAuODInKVxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLiR0YXJnZXQuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblxuICAgICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtzZWxmLm9uRW50ZXIuY2FsbChzZWxmLHRoaXMpfSk7XG4gICAgICAkKHRoaXMpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge3NlbGYub25MZWF2ZS5jYWxsKHNlbGYsdGhpcyl9KTtcbiAgICAgIFxuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0VmZmVjdHMvMDNfZWZmZWN0cy9Ib3ZlckVmZmVjdFNWR0Fycm93VG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ2FudmFzXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9FbnRyeS5qcyc7XG4vLyBpbXBvcnQgQ2FtZXJhIGZyb20gJy4vVXRpbHMvQ2FtZXJhLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5vdXRwdXQgPSBvcHRzLm91dHB1dCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblx0XHR0aGlzLmN1YmUgPSBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEgPSB0aGlzLl9jcmVhdGVDYW1lcmEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyID0gdGhpcy5fY3JlYXRlUmVuZGVyZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdCA9IHRoaXMuX2NyZWF0ZU9iamVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3JiaXRDb250cm9scyA9IHRoaXMuX29yYml0Q29udHJvbHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5vcmJpdENvbnRyb2xzKCk7XG5cblx0XHR0aGlzLmNyZWF0ZU9iamVjdCgpO1xuXG4gICAgdGhpcy5VcGRhdGUoKTtcblxuICAgIC8v44Oq44K144Kk44K644Kk44OZ44Oz44OI55m654GrXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjgqvjg6Hjg6nkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVDYW1lcmEoKXtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IC0zMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gNDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDMwO1xuXG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKHRoaXMuc2NlbmUucG9zaXRpb24pO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7zkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVSZW5kZXJlcigpe1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzICAgICAgICAgIDogZmFsc2UsXG4gICAgICBzdGVuY2lsICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlcHRoICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBmYWxzZVxuXHRcdH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLm91dHB1dC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gIH1cblxuXG5cbiAgLyoqXG4gICAq44CA44K344O844Oz5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICB9XG5cblx0LyoqXG5cdCAq44CAT2JqZWN05L2c5oiQXG5cdCAqL1xuXHRfY3JlYXRlT2JqZWN0KCl7XG5cbiAgICB2YXIgY3ViZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDQsIDQpO1xuICAgIHZhciBjdWJlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IDB4MDAwMDAwLFxuICAgICAgd2lyZWZyYW1lOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmN1YmUgPSBuZXcgVEhSRUUuTWVzaChjdWJlR2VvbWV0cnksIGN1YmVNYXRlcmlhbCk7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnggPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi55ID0gMztcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueiA9IDM7XG5cbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmN1YmUpO1xuXG5cdH1cblxuICAvKipcbiAgICrjgIDmm7TmlrBcbiAgICovXG4gIF9VcGRhdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICB0aGlzLlVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIC8vIHRoaXMuY29udHJvbHMudXBkYXRlKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K6XG4gICAqL1xuICBfb25SZXNpemUoKSB7XG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG5cdC8qKlxuICAgKiDjgqvjg6Hjg6njgrPjg7Pjg4jjg63jg7zjg6tcblx0ICovXG5cdF9vcmJpdENvbnRyb2xzKCl7XG5cdFx0dGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhKTtcblx0XHR0aGlzLmNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xuXHRcdHZhciBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuXG5cdFx0dmFyIGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcblx0XHR0aGlzLmNvbnRyb2xzLnVwZGF0ZShkZWx0YSk7XG4gIH1cblxuXHRzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvVmlzdWFsL0NhbnZhcy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEVudHJ5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbi8vIHdpbmRvdy5USFJFRSA9IHJlcXVpcmUoJy4uL2xpYnMvdGhyZWUubWluLmpzJyk7XG5yZXF1aXJlKCcuLi9saWJzL09yYml0Q29udHJvbHMuanMnKTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiDliJ3mnJ/ljJZcblx0ICovXG5cdGluaXQoKXtcblxuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvVGVyYU1hYy9Eb2N1bWVudHMvMDBfU3RvY2svMTBfYmFzZS9mcm9udGVuZF9iYXNlX3ZlcjAyL2RldmVsb3BtZW50L3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9FbnRyeS5qcyIsIi8qKlxuICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb21cbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcbiAqIEBhdXRob3IgZXJpY2g2NjYgLyBodHRwOi8vZXJpY2hhaW5lcy5jb21cbiAqL1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5USFJFRS5PcmJpdENvbnRyb2xzID0gZnVuY3Rpb24gKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cblx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cblx0dGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcblx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcblx0dGhpcy5taW5ab29tID0gMDtcblx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG5cdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIGRhbXBpbmcgKGluZXJ0aWEpXG5cdC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAwLjI1O1xuXG5cdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0dGhpcy5lbmFibGVab29tID0gdHJ1ZTtcblx0dGhpcy56b29tU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xuXHR0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xuXHR0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG5cdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcblx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXG5cdHRoaXMuZW5hYmxlS2V5cyA9IHRydWU7XG5cblx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHR0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG5cdC8vIE1vdXNlIGJ1dHRvbnNcblx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuXHQvLyBmb3IgcmVzZXRcblx0dGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcblx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuXHQvL1xuXHQvLyBwdWJsaWMgbWV0aG9kc1xuXHQvL1xuXG5cdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xuXG5cdH07XG5cblx0dGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwudGhldGE7XG5cblx0fTtcblxuXHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0c2NvcGUudGFyZ2V0LmNvcHkoIHNjb3BlLnRhcmdldDAgKTtcblx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weSggc2NvcGUucG9zaXRpb24wICk7XG5cdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcblxuXHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH07XG5cblx0Ly8gdGhpcyBtZXRob2QgaXMgZXhwb3NlZCwgYnV0IHBlcmhhcHMgaXQgd291bGQgYmUgYmV0dGVyIGlmIHdlIGNhbiBtYWtlIGl0IHByaXZhdGUuLi5cblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0Ly8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cdFx0dmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG5cdFx0dmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuXHRcdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlICgpIHtcblxuXHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuXHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKCBvZmZzZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XG5cdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoIHNjb3BlLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heEF6aW11dGhBbmdsZSwgc3BoZXJpY2FsLnRoZXRhICkgKTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heCggc2NvcGUubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkgKSApO1xuXG5cdFx0XHRzcGhlcmljYWwubWFrZVNhZmUoKTtcblxuXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xuXG5cdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyA9IE1hdGgubWF4KCBzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHNjb3BlLm1heERpc3RhbmNlLCBzcGhlcmljYWwucmFkaXVzICkgKTtcblxuXHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0XHRzY29wZS50YXJnZXQuYWRkKCBwYW5PZmZzZXQgKTtcblxuXHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoIHNwaGVyaWNhbCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cblx0XHRcdHBvc2l0aW9uLmNvcHkoIHNjb3BlLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cblx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjYWxlID0gMTtcblx0XHRcdHBhbk9mZnNldC5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcblx0XHRcdC8vIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xuXHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cblx0XHRcdGlmICggem9vbUNoYW5nZWQgfHxcblx0XHRcdFx0bGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCBzY29wZS5vYmplY3QucG9zaXRpb24gKSA+IEVQUyB8fFxuXHRcdFx0XHQ4ICogKCAxIC0gbGFzdFF1YXRlcm5pb24uZG90KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApICkgPiBFUFMgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRsYXN0UG9zaXRpb24uY29weSggc2NvcGUub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRcdGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdC8vc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzcG9zZScgfSApOyAvLyBzaG91bGQgdGhpcyBiZSBhZGRlZCBoZXJlP1xuXG5cdH07XG5cblx0Ly9cblx0Ly8gaW50ZXJuYWxzXG5cdC8vXG5cblx0dmFyIHNjb3BlID0gdGhpcztcblxuXHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5cdHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG5cdHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuXHR2YXIgU1RBVEUgPSB7IE5PTkUgOiAtIDEsIFJPVEFURSA6IDAsIERPTExZIDogMSwgUEFOIDogMiwgVE9VQ0hfUk9UQVRFIDogMywgVE9VQ0hfRE9MTFkgOiA0LCBUT1VDSF9QQU4gOiA1IH07XG5cblx0dmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcblx0dmFyIHNwaGVyaWNhbCA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblx0dmFyIHNwaGVyaWNhbERlbHRhID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXG5cdHZhciBzY2FsZSA9IDE7XG5cdHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHR2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuXHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuXHRcdHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgLT0gYW5nbGU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZVVwKCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcblxuXHR9XG5cblx0dmFyIHBhbkxlZnQgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMCApOyAvLyBnZXQgWCBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHZhciBwYW5VcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwKCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMSApOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHQvLyBkZWx0YVggYW5kIGRlbHRhWSBhcmUgaW4gcGl4ZWxzOyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0dmFyIHBhbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIHBlcnNwZWN0aXZlXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblx0XHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG5cdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cblx0XHRcdFx0Ly8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuXHRcdFx0XHRwYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xuXHRcdFx0XHRwYW5MZWZ0KCBkZWx0YVggKiAoIHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0ICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIGRlbHRhWSAqICggc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20gKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgbm9yIHBlcnNwZWN0aXZlXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHRmdW5jdGlvbiBkb2xseUluKCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRvbGx5T3V0KCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGNhbGxiYWNrcyAtIHVwZGF0ZSB0aGUgb2JqZWN0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Sb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93bkRvbGx5JyApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25QYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VVcCcgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VXaGVlbCcgKTtcblxuXHRcdGlmICggZXZlbnQuZGVsdGFZIDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5kZWx0YVkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZUtleURvd24nICk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdHBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuXHRcdFx0XHRwYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuTEVGVDpcblx0XHRcdFx0cGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0cGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0RG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlRG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hFbmQnICk7XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlTW91c2VVcCggZXZlbnQgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8ICggc3RhdGUgIT09IFNUQVRFLk5PTkUgJiYgc3RhdGUgIT09IFNUQVRFLlJPVEFURSApICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7IC8vIG5vdCBzdXJlIHdoeSB0aGVzZSBhcmUgaGVyZS4uLlxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVLZXlEb3duKCBldmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlVG91Y2hFbmQoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KCBldmVudCApIHtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0fVxuXG5cdC8vXG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHQvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcblxuXHR0aGlzLnVwZGF0ZSgpO1xuXG59O1xuXG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKTtcblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVEhSRUUuT3JiaXRDb250cm9scztcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XG5cblx0Y2VudGVyOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnICk7XG5cdFx0XHRyZXR1cm4gdGhpcy50YXJnZXQ7XG5cblx0XHR9XG5cblx0fSxcblxuXHQvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0bm9ab29tOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVpvb207XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlWm9vbSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1JvdGF0ZToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUm90YXRlO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVSb3RhdGUgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9QYW46IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVBhbjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUGFuID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vS2V5czoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVLZXlzO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZUtleXMgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0c3RhdGljTW92aW5nIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVEYW1waW5nO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0ZHluYW1pY0RhbXBpbmdGYWN0b3IgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiB0aGlzLmRhbXBpbmdGYWN0b3I7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gdmFsdWU7XG5cblx0XHR9XG5cblx0fVxuXG59ICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL1RlcmFNYWMvRG9jdW1lbnRzLzAwX1N0b2NrLzEwX2Jhc2UvZnJvbnRlbmRfYmFzZV92ZXIwMi9kZXZlbG9wbWVudC9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiXSwic291cmNlUm9vdCI6IiJ9