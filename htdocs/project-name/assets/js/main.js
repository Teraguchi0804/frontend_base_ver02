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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 111);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Position
//
//--------------------------------------------------

class Position {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {

    // 上下中央寄せ
    this.setCenter();
  }

  setCenter() {

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

  onResize() {

    this.setCenter();
  }

  setEvents() {

    gb.in.r.add('setCenter', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Position;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__03_effects_Section02Bg_CVContents_es6__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__03_effects_Section04Product_GlContents_es6__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Profiler_es6__ = __webpack_require__(57);
//--------------------------------------------------
//
//  Effects
//
//--------------------------------------------------




class Effects {

  constructor() {

    this.gl = null;
    this.dom = null;
    this.state = '';

    this.setup();
    this.debug();
    this.setEvents();
  }

  setup() {

    // bg
    // gb.in.Section02Bg = new Section02Bg();

    // product
    // gb.in.Section04Product = new Section04Product($('.section03'));

  }

  debug() {

    // profiler設定
    // new Profiler();

  }

  setEvents() {}

}
/* unused harmony export default */


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ------------------------------------------------------------
//
//  DomMotionLibs
//
// ------------------------------------------------------------

class DomMotionLibs {

  constructor(src) {

    this.src = src;

    this.first = true;
  }

  blur(opt) {

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
      onUpdate: function (p) {
        var b = p.target.blur;
        TweenMax.set(param.$target, {
          '-webkit-filter': 'blur(' + b + 'px)',
          'filter': 'blur(' + b + 'px)'
        });
      },
      onUpdateParams: ["{self}"]
    });
  }

  bright(opt) {

    var def = {
      $target: null,
      dur: 1,
      delay: 0,
      grayscale: 0, grayscaleTarget: 100,
      brightness: 100, brightnessTarget: 1000,
      opacity: 0, opacityTarget: 1,
      ease: Power3.easeIn,
      onComplete: function () {}
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
      onUpdate: function (p) {
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
      onComplete: function () {
        param.onComplete();
      }
      // },'-='+param.dur-3.0);
    }, '-=1.8');
  }

  shake(opt) {

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
      onUpdate: function () {

        var x = (Math.random() * 2 - 1) * param.mag;
        var y = (Math.random() * 2 - 1) * param.mag;

        TweenMax.set(param.$target, { x: x, y: y });
      },
      onComplete: function () {

        TweenMax.set(param.$target, { x: 0, y: 0 });
      }
    });
  }

  afterImg(opt) {

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

  scaleSlow(opt) {

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
      onComplete: function () {
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

  scaleElastic(opt) {

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
  gum(opt) {

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
  dooon(opt) {

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
      onUpdate: function () {

        // ゆれ
        var x = (Math.random() * 2 - 1) * 5;
        var y = (Math.random() * 2 - 1) * 5;

        void 0;

        TweenMax.set(param.wrap, { x: x, y: y });
      },
      onComplete: function () {

        TweenMax.set(param.wrap, { x: 0, y: 0 });
      }
    }).to(param.target, 0.4, {
      scale: 1,
      opacity: 1,
      ease: Power4.easeOut
    }, '-=0.75');
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DomMotionLibs;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectSNSSPFooter
//
//--------------------------------------------------

class HoverEffectSNSSPFooter {

  constructor($wrap, $target) {

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

  setup() {}

  ready() {

    // ox
    TweenMax.set(this.$wrap, { width: 0 });

    // bar
    TweenMax.set(this.$bar, { width: 0 });

    // sns
    TweenMax.set(this.$item, { x: -40, opacity: 0 });

    this.$bar.show();
    this.$list.show();
  }

  toggle() {

    if (this.$target.hasClass('on')) {
      this.isOpen = false;

      this.close();
    } else {
      this.isOpen = true;

      this.open();
    };

    this.$target.toggleClass('on');
  }

  open(that) {

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

  close(that) {

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
      onComplete: () => {
        this.$list.hide();
      }
    }, '-=0.25').to(this.$bar, 0.2, {
      width: 0,
      ease: Power2.easeOut,
      onComplete: () => {
        this.$bar.hide();
      }
    }, '-=0.3').to(this.$wrap, 0.3, {
      width: 0,
      ease: Power3.easeOut
    }, '-=0.3');
  }

  reset() {

    this.close();
    this.$target.off('click');
  }

  setEvents() {

    var self = this;

    this.$target.on('click', this.toggle.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectSNSSPFooter;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  PageScroll
//
//--------------------------------------------------

class PageScroll {

  constructor($target) {

    this.cb = function () {};
    this.onComplete = function () {};

    this.setEvents();
    this.ready();
  }

  ready() {}

  pagetop() {

    var self = this;

    // スクロール
    TweenMax.to($('body,html'), 0.8, {
      scrollTop: 0,
      ease: Power3.easeOut,
      onComplete: () => {
        this.onComplete();
      }
    });

    this.cb();

    return false;
  }

  pageScrollTo(that) {

    // 差分取得
    var dif = 0;
    if ($(that).data('diff')) dif = $(that).data('diff');

    var $target = $($(that).attr("href"));
    var pos = $target.offset().top;
    pos = pos - dif;

    TweenMax.to($('body,html'), 0.9, { scrollTop: pos, ease: Expo.easeOut });

    log(1234);
  }

  pageScrollTo02(that) {

    // 差分取得
    var dif = 0;
    if ($(that).data('diff')) dif = $(that).data('diff');

    var $target = $($(that).data("link"));
    var pos = $target.offset().top;
    pos = pos - dif;

    TweenMax.to($('body,html'), 0.9, { scrollTop: pos, ease: Expo.easeOut });
  }

  setEvents() {

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PageScroll;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  FullSize
//
//--------------------------------------------------

class FullSize {

  constructor($Wrap, $Target, mode, name) {

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

  setStyle() {

    this.$wrap.css({
      'overflow': 'hidden'
    });
    this.$target.css('position', 'absolute');
  }

  getDef() {

    this.targetDefW = this.$target.get(0).clientWidth || this.$target.get(0).width || this.$target.width(), this.targetDefH = this.$target.get(0).clientHeight || this.$target.get(0).height || this.$target.height();
  }

  getSize() {

    this.W = this.$wrap.width();
    this.H = this.$wrap.height();

    this.ratioW = this.H / this.W;
    this.ratio = this.targetDefH / this.targetDefW, this.ml = -(this.targetDefW * (this.H / this.targetDefH)) / 2;
    this.mt = -(this.targetDefH * (this.W / this.targetDefW)) / 2;
  }

  setPos() {

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

  init() {

    this.getDef();
  }

  run() {

    this.setStyle();
    this.getSize();
    this.setPos();
  }

  setEvents() {

    gb.in.r.add(this.name, this.run.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = FullSize;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Effects_Effects_es6__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display_Layout_Size_ScaleTop_es6__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Display_Effects_03_effects_HoverEffectSVGArrowTop_es6__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Display_UI_TopTime_es6__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layout_Postion_Position_es6__ = __webpack_require__(0);
//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------







class DisplayTop {

  constructor() {

    this.onImmediate();
    this.setEvents();
  }

  onImmediate() {

    // ループスタート
    gb.in.up.loop();
  }

  onLoad() {

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------
    // sp
    gb.in.scaleTop = new __WEBPACK_IMPORTED_MODULE_1__Display_Layout_Size_ScaleTop_es6__["a" /* default */]();
    gb.in.pos = new __WEBPACK_IMPORTED_MODULE_5__Layout_Postion_Position_es6__["a" /* default */]();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------

    // sp
    gb.in.sliderTop.setEvents();
    gb.in.snsSPHoverEf = new __WEBPACK_IMPORTED_MODULE_2__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__["a" /* default */]($('#sideL'));

    // pc
    // new HoverEffectSVGArrowTop($('.section01 .next')); // → TopOpeningへ
  }

  static run() {

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------
    // sp
    gb.in.scaleTop = new __WEBPACK_IMPORTED_MODULE_1__Display_Layout_Size_ScaleTop_es6__["a" /* default */]();
    gb.in.pos = new __WEBPACK_IMPORTED_MODULE_5__Layout_Postion_Position_es6__["a" /* default */]();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------

    // sp
    gb.in.sliderTop.setEvents();
    gb.in.snsSPHoverEf = new __WEBPACK_IMPORTED_MODULE_2__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__["a" /* default */]($('#sideL'));

    // pc
    this.ht = new __WEBPACK_IMPORTED_MODULE_3__Display_Effects_03_effects_HoverEffectSVGArrowTop_es6__["a" /* default */]($('.section01 .next'));
    this.ht.autoArrow();
    gb.in.time = new __WEBPACK_IMPORTED_MODULE_4__Display_UI_TopTime_es6__["a" /* default */]();
    if (gb.in.sec01Video.video) gb.in.sec01Video.video.playByNYTime(); // sp用にも gb.in.sec01Videoが存在するかどうか判定
    if (gb.in.sec01Video.video) gb.in.sec01Video.video.setEvents(); // sp用にも gb.in.sec01Videoが存在するかどうか判定

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayTop;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectSVGArrowSideR
//
//--------------------------------------------------

class HoverEffectSVGArrowSideR {

  constructor($target) {

    this.$target = $target;

    // motion
    this.tl = new TimelineMax();

    this.setup();
    // this.autoArrow();

    this.isHover = false;

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();
  }

  setup() {}

  run() {}

  onEnter(that) {

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

  onLeave(that) {

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

  setEvents() {

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectSVGArrowSideR;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectSVG
//
//--------------------------------------------------

class HoverEffectSVG {

  constructor($target, hoverColor, defColor) {

    this.$target = $target;
    this.hoverColor = hoverColor || '#fff';
    this.defColor = defColor || '#000';

    // motion
    this.tl = new TimelineMax();

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();
  }

  setup() {}

  run() {}

  onEnter(that) {

    if (gb.in.u.isResSP) return;

    var tl = new TimelineMax();

    tl.to($(that).find('path'), 0.4, {
      fill: this.hoverColor,
      ease: Power4.easeOut
    });
  }

  onLeave(that) {

    if (gb.in.u.isResSP) return;

    var tl = new TimelineMax();

    tl.to($(that).find('path'), 0.4, {
      fill: this.defColor,
      ease: Power4.easeIn
    });
  }

  setEvents() {

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

  removeEvents() {

    var self = this;

    this.$target.each(function (index, el) {

      $(this).off('mouseenter');
      $(this).off('mouseleave');
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectSVG;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectSVGArrowTop
//
//--------------------------------------------------

class HoverEffectSVGArrowTop {

  constructor($target) {

    this.$target = $target;

    // motion
    this.tl = new TimelineMax();

    this.setup();

    this.isHover = false;

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();
  }

  setup() {}

  run() {}

  onEnter(that) {

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

  onLeave(that) {

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
      onComplete: () => {

        if (this.autoTL == null) this.autoArrow();
      }
    }, '-=0.45');
  }

  autoArrow() {

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

  setupFirst() {

    TweenMax.set($('.section01 .next .text'), { y: -60, opacity: 0, z: 1 });
    TweenMax.set($('.section01 .next svg'), { y: -30, opacity: 0, z: 1 });
  }

  runFirst() {

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

  setEvents() {

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectSVGArrowTop;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CVContentsLoop_es6__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CVContentsTimeline_es6__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_CreateCanvas_es6__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MyLibs_Display_Layout_FullSize_es6__ = __webpack_require__(5);
//--------------------------------------------------
//
//  CVContents
//
//--------------------------------------------------





class CVContents {

  constructor() {

    this.setup();
    // this.create();
    this.setEvents();
    // loop
    this.loop = new __WEBPACK_IMPORTED_MODULE_0__CVContentsLoop_es6__["a" /* default */]();
    // timeline
    this.timeline = new __WEBPACK_IMPORTED_MODULE_1__CVContentsTimeline_es6__["a" /* default */]();
  }

  setup() {

    // リソースのロード
    // gb.in.loadMgr.sec02Img();


  }

  create() {

    // gb.in.rm.total += 1;
    // canvasの生成
    // レティーナ用に2倍
    gb.in.canvas = new __WEBPACK_IMPORTED_MODULE_2__details_CreateCanvas_es6__["a" /* default */]($('#bgWrap .sec02BgCanvas'), gb.in.conf.defW, gb.in.conf.defH, () => {

      var l = new __WEBPACK_IMPORTED_MODULE_3__MyLibs_Display_Layout_FullSize_es6__["a" /* default */]($('#bgWrap'), $('.sec02BgCanvas'), 0, 'FullSizeSec02BgCanvas');
      l.targetDefW = gb.in.conf.defW;
      l.targetDefH = gb.in.conf.defH;
      l.run();
    });

    // ui追加(コントローラー、profilerなど)
    // this.addUI();

  }

  addUI() {

    // paramrter調整
    // gb.in.param = new gb.Param();

  }

  play() {

    this.loop.start();
    this.timeline.tlMain.play();
  }

  pause() {

    this.loop.pause();
    this.timeline.tlMain.pause();
  }

  onResize() {}

  setEvents() {

    // gb.in.r.add('cvContents', this.onResize.bind(this));
    // gb.in.hash.onChangeFuncList.push(this.onSection02.bind(this));

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = CVContents;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Size_Size_es6__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__ = __webpack_require__(0);
//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------




class Layout {

  constructor() {

    this.setEvents();
  }

  setup() {

    this.size = new __WEBPACK_IMPORTED_MODULE_0__Size_Size_es6__["a" /* default */](); // adjust size

    this.position = new __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__["a" /* default */](); // adjust position
  }

  static reset() {

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

  setEvents() {}

  onLoad() {

    this.setup();
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Layout;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Layout // historyも兼用
//
//--------------------------------------------------
class Scale {

  constructor() {

    this.SPBaseW = 375;
    this.PCBaseW = 1300;

    this.rate = 1;
    this.W = window.innerWidth;

    this.setup();
    this.run(); //インスタンス時に実行
    this.setEvents();
  }

  setup() {}

  run() {

    this.W = $(window).width();
    this.iW = window.innerWidth;

    this.scale();
    this.wrap();
  }

  // 拡大
  scale() {

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
  wrap() {

    log($('#inner').innerHeight(), this.rate);

    TweenMax.set($('#wrapper'), {
      'overflow': 'hidden',
      // width: $('#inner').innerWidth() * this.rate,
      height: $('#inner').innerHeight() * this.rate
    });
  }

  static reset() {

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

  onResize() {

    this.run();
  }

  setEvents() {

    gb.in.r.add('scaleInterviewDetail', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scale;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScaleInterviewDetail_es6__ = __webpack_require__(12);
//--------------------------------------------------
//
//  Size
//
//--------------------------------------------------



class Size {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {

    // gb.in.u.setImgSPSize($('img')); // for sp img

    // new gb.ResponsiveFontSize($('.fontResponsive')); //レスポンシブ時フォントサイズの変更

    this.scale = new __WEBPACK_IMPORTED_MODULE_0__ScaleInterviewDetail_es6__["a" /* default */](); // resize

  }

  onResize() {

    // gb.in.u.setImgSPSize($('img')); // for sp img

  }

  setEvents() {

    // gb.in.r.add(this.onResize.bind(this));

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Size;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HeaderColor
//
//--------------------------------------------------

class HeaderColor {

  constructor(param) {

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

  setup() {}

  run() {

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

  setColor() {

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

  removeColor() {

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

  onResize() {

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

  setEvents() {

    gb.in.s.add('HeaderColor', this.run.bind(this));
    gb.in.r.add('HeaderColor', this.onResize.bind(this));
  }

  removeEvents() {

    this.removeColor();
    gb.in.s.remove('HeaderColor');
    gb.in.r.remove('HeaderColor');
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeaderColor;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__YoutubeForSec01_es6__ = __webpack_require__(82);
//--------------------------------------------------
//
//  Sec01Video
//
//--------------------------------------------------


class Sec01Video {

  constructor(param) {

    // sec01video用
    gb.in.rm.total++;
    if (gb.in.u.isSP) gb.in.rm.completed++;

    if (gb.in.u.isPC) this.setup();
    this.setEvents();
  }

  setup() {

    // create
    this.video = new __WEBPACK_IMPORTED_MODULE_0__YoutubeForSec01_es6__["a" /* default */]('sec01Video', gb.in.conf.youtubeID01, null);
  }

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sec01Video;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  TopTime
//
//--------------------------------------------------

// 500px以下になったら表示
//   時計count
//   canvas表示

class TopTime {

  constructor() {

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

  setup() {

    gb.in.u.time();
    var h = gb.in.u.hour - this.dis;
    if (h < 0) h = 24 + h;
    this.nyH = h;
  }

  update() {

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

  run() {

    gb.in.up.add('TopTime', this.update.bind(this));

    // コンマの表示非表示
    var tl = new TimelineMax({ repeat: -1 });

    tl.set(this.$target.find('.colon'), { opacity: 0 }).to(this.$target.find('.colon'), 0.5, { opacity: 1, ease: Power2.easeInOut }).to(this.$target.find('.colon'), 0.5, { opacity: 0, ease: Power2.easeInOut });
  }

  setEvents() {}

  removeEvents() {

    gb.in.up.remove('TopTime');
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = TopTime;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  PageTop
//
//--------------------------------------------------

class PageTop {

  constructor() {

    this.setEvents();
    this.ready();
  }

  ready() {}

  pagetop() {

    // スクロール
    TweenMax.to($('body,html'), 0.8, {
      scrollTop: 0,
      ease: Power3.easeOut,
      onComplete: () => {}
    });
  }

  setEvents() {

    var self = this;

    $('.toTop').on('click', this.pagetop.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PageTop;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Move2D
//
//--------------------------------------------------

class Move2D {

  constructor($target) {

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

  setup() {

    this.baseX = gb.in.r.ws.w / 2;
    this.baseY = gb.in.r.ws.h / 2;
    this.mx = this.baseX;
    this.my = this.baseY;
  }

  onMove(e) {

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

  loop() {

    if (gb.in.u.isSP || gb.in.u.isResSP) return;

    this.target.x += (this.gx - this.target.x) * this.easing;
    this.target.y += (this.gy - this.target.y) * this.easing;

    TweenMax.set(this.target.$, {
      left: this.target.x,
      top: this.target.y
    });
  }

  onResize() {

    this.baseX = gb.in.r.ws.w / 2;
    this.baseY = gb.in.r.ws.h / 2;
  }

  setEvents() {

    gb.in.m.add('Move2D', this.onMove.bind(this));
    gb.in.up.add('Move2D', this.loop.bind(this));
    gb.in.r.add('Move2D', this.onResize.bind(this));
  }

  removeEvents() {

    gb.in.m.remove('Move2D');
    gb.in.up.remove('Move2D');
    gb.in.r.remove('Move2D');

    TweenMax.set(this.target.$, {
      left: this.defX,
      top: this.defY
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Move2D;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Loader
//
//--------------------------------------------------

class Loader {

  constructor() {

    this.list = [];
    this.cnt = 0;
  }

  json(src, cb) {

    $.getJSON(src, data => {

      cb(data);
    });
  }

  img(len, path, name, cb = () => {}, cb02 = () => {}) {

    var i,
        img,
        nth,
        cnt = 1,
        list = [];

    for (i = 1; i < len; i++) {
      img = new Image();
      nth = gb.in.u.add0(i, -5);
      this.list.push(img);
      img.onload = () => {
        cb02();
        cnt++;
        if (cnt == len) cb();
      };
      img.src = path + name + nth + ".jpg";
    }
  }

  // cb02 load完了時 都度都度用コールバック関数
  imgSerialLoad(len, path, name, cb = () => {}, cb02 = () => {}) {

    var i,
        img,
        nth,
        cnt = 0,
        list = [];

    var load = i => {
      img = new Image();
      nth = gb.in.u.add0(i, -5);
      this.list.push(img);
      img.onload = () => {
        cb02();
        comp();
      };
      img.src = path + name + nth + ".jpg";
    };

    var comp = () => {
      cnt++;
      if (cnt == len) {
        cb();
      } else {
        load(cnt);
      }
    };

    load(cnt);
  }

  ajaxImgLoad(cb) {

    var imgNum = $('img').length;
    var cnt = 0;

    $('img').each(function (i, elm) {

      var img = new Image();
      img.onload = () => {
        cnt++;
        if (cnt == imgNum - 1) {
          cb();
        };
      };
      img.src = elm.src;
    });
  }

  video(src, cb = () => {}) {

    var isLoad = false;
    this.video = document.createElement('video');

    var type = this.supportVideoExt(this.video);
    if (type == "") {
      return;
    }

    this.video.addEventListener("canplay", () => {

      if (!this.isLoad) {
        this.isLoad = true;
        this.video.loop = true;
        this.video.play();
        cb();
      }
    }, false);

    // ロード
    this.video.src = src;
  }

  youtubeIframeScript(cb) {

    // IFrame Player API の読み込み
    var tag = document.createElement('script');
    tag.onload = () => {

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

  supportVideoExt() {

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

  webFont(config) {

    // web font loader用jsのappend
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);

    var again = () => {

      // yt.playerがloadされていない場合を考慮して
      if (typeof WebFont !== "undefined" && WebFont) {

        WebFont.load(config);
      } else {

        setTimeout(again, 100);
      }
    };

    again();
  }

  onLoaded() {

    $('html').css('opacity', '1');
  }

  setEvents(len) {

    var self = this;

    $(window).on('loaded', event => {

      self.cnt++;
      if (self.cnt == len) onLoaded();
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Loader;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ------------------------------------------------------------
//
//  Sns
//
// ------------------------------------------------------------

// import metaData from "json-loader!../../../../ejs/inc/metaData.json";

class Sns {

  constructor($fb, $tw, $line, $mail) {

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

  switchMeta() {

    var p = gb.in.pjax.id;
    if (p == 'interview_detail') {

      log($('.section').hasClass('section03_detail01'));
      if ($('.section').hasClass('section03_detail01')) p = 'interviewDetail01';else if ($('.section').hasClass('section03_detail02')) p = 'interviewDetail02';else if ($('.section').hasClass('section03_detail03')) p = 'interviewDetail03';
    }

    // var d = gb.in.conf.meta[p];
    var d = metaData[p];

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

  setting() {

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

  setOgImg() {

    // $('.ogImg_fb').attr('content', this.fb.img);
    // $('.ogImg_tw').attr('content', this.tw.img);

  }

  jumpFB(e) {

    this.openWindow('https://www.facebook.com/sharer/sharer.php?u=' + this.fb.url);

    return false;
  }

  jumpTW(e) {

    this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + this.tw.des);
    // this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + this.tw.text + '&hashtags=' + this.tw.hash);

    return false;
  }

  jumpLINE() {

    this.openWindow('http://line.me/R/msg/text/?' + this.line.tit + '%0A' + this.line.url);

    return false;
  }

  onSendMail() {

    var address = '';
    var sub = '';
    var body = encodeURIComponent($('title').html() + '\n' + location.href);

    location.href = 'mailto:' + address + '?subject=' + sub + '&body=' + body;

    return false;
  }

  openWindow(url, w, h) {

    if (w === undefined) w = 600;
    if (h === undefined) h = 600;

    var l = Number((window.screen.width - w) / 2);
    var t = Number((window.screen.height - h) / 2);

    window.open(url, 'new_window', 'menubar=no,' + 'toolbar=no,' + 'resizable=yes,' + 'scrollbars=yes,' + 'height=' + h + ',' + 'width=' + w + ',' + 'left=' + l + ',' + 'top=' + t);
  }

  setEvents() {

    this.fb.$target.on('click', this.jumpFB.bind(this));
    this.tw.$target.on('click', this.jumpTW.bind(this));
    this.line.$target.on('click', this.jumpLINE.bind(this));
    if (this.$mail) this.$mail.on('click', () => {
      this.onSendMail();return false;
    });
  }

  removeEvents() {

    this.fb.$target.off('click');
    this.tw.$target.off('click');
    this.line.$target.off('click');
    if (this.$mail) this.$mail.off('click');
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sns;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  FullSize
//
//--------------------------------------------------

class FullSize {

  constructor($Wrap, $Target, mode) {

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

  setStyle() {

    this.$wrap.css({
      'overflow': 'hidden'
    });
    this.$target.css('position', 'absolute');
  }

  getDef() {

    this.targetDefW = this.$target.get(0).clientWidth || this.$target.get(0).width || this.$target.width(), this.targetDefH = this.$target.get(0).clientHeight || this.$target.get(0).height || this.$target.height();
  }

  getSize() {

    this.W = this.$wrap.width();
    this.H = this.$wrap.height();

    this.ratioW = this.H / this.W;
    this.ratio = this.targetDefH / this.targetDefW, this.ml = -(this.targetDefW * (this.H / this.targetDefH)) / 2;
    this.mt = -(this.targetDefH * (this.W / this.targetDefW)) / 2;
  }

  setPos() {

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

  init() {

    this.getDef();
  }

  run() {

    this.setStyle();
    this.getSize();
    this.setPos();
  }

  onResize() {

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

  setEvents() {

    gb.in.r.add('fullSizeByScaleInterviewIndex', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = FullSize;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Conf_es6__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyLibs_Util_es6__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MyLibs_Func_es6__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MyLibs_EventMgr_ReadyMgr_es6__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MyLibs_EventMgr_UpdateMgr_es6__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MyLibs_EventMgr_ResizeMgr_es6__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MyLibs_EventMgr_ScrollMgr_es6__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MyLibs_EventMgr_MouseMgr_es6__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Func_LoadMgr_es6__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Func_Pjax_es6__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Func_JudgeEnvironment_es6__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Func_events_ResponsiveSwitchImg_es6__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Func_SwipeTransition_es6__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Display_UI_compornents_Menu_es6__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Display_UI_Alert_es6__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Display_UI_SideR_es6__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Func_Time_es6__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Func_ScrollTransition_es6__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Display_UI_parts_PageTop_es6__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Display_UI_Sec01Video_es6__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Func_Sns_es6__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Display_UI_SliderTop_es6__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Display_UI_Nav_es6__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Display_Layout_Layout_es6__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Display_DisplayOpening_es6__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Display_Effects_03_effects_Section02Bg_CVContents_es6__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Display_Effects_03_effects_PageTransition_PageTransitionController_es6__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Display_Effects_03_effects_HoverEffectSVG_es6__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Display_Effects_03_effects_HoverEffectSVGLogo_es6__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Display_Effects_03_effects_HoverEffectMenuBtn_es6__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Display_Effects_03_effects_HoverEffectSVGArrow_es6__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Display_Effects_03_effects_HoverEffectSNSPCFooter_es6__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Display_Effects_03_effects_HoverEffectSVGArrowSideR_es6__ = __webpack_require__(40);






































// import HoverEffectMenuItem from '../Display/Effects/03_effects/HoverEffectMenuItem.es6';

//--------------------------------------------------
//
//  main
//
//--------------------------------------------------
class Common {

  constructor() {

    this.onImmediate();
    this.setEvents();
  }

  onImmediate() {

    // ------------------------------------------------------------
    //  初期値の設定・データの配置
    //  util関数の初期化
    //  イベントマネージャーの設置
    // ------------------------------------------------------------
    gb.in.conf = new __WEBPACK_IMPORTED_MODULE_0__Conf_es6__["a" /* default */]();
    gb.in.u = new __WEBPACK_IMPORTED_MODULE_1__MyLibs_Util_es6__["a" /* default */]();
    gb.in.f = new __WEBPACK_IMPORTED_MODULE_2__MyLibs_Func_es6__["a" /* default */]();
    gb.in.up = new __WEBPACK_IMPORTED_MODULE_4__MyLibs_EventMgr_UpdateMgr_es6__["a" /* default */]();
    gb.in.r = new __WEBPACK_IMPORTED_MODULE_5__MyLibs_EventMgr_ResizeMgr_es6__["a" /* default */]();
    gb.in.s = new __WEBPACK_IMPORTED_MODULE_6__MyLibs_EventMgr_ScrollMgr_es6__["a" /* default */]();
    gb.in.m = new __WEBPACK_IMPORTED_MODULE_7__MyLibs_EventMgr_MouseMgr_es6__["a" /* default */]();
    gb.in.rm = new __WEBPACK_IMPORTED_MODULE_3__MyLibs_EventMgr_ReadyMgr_es6__["a" /* default */]();
    gb.in.loadMgr = new __WEBPACK_IMPORTED_MODULE_8__Func_LoadMgr_es6__["a" /* default */]();
    gb.in.sct = new __WEBPACK_IMPORTED_MODULE_17__Func_ScrollTransition_es6__["a" /* default */]();

    // ------------------------------------------------------------
    //
    //  その他
    //
    // ------------------------------------------------------------
    // pjaxの設定
    gb.in.pjax = new __WEBPACK_IMPORTED_MODULE_9__Func_Pjax_es6__["a" /* default */]();

    // ------------------------------------------------------------
    //  Layout
    // ------------------------------------------------------------
    gb.in.Layout = new __WEBPACK_IMPORTED_MODULE_23__Display_Layout_Layout_es6__["a" /* default */]();

    // 準備完了後の処理
    gb.in.rm.onCompletedFunc = () => {
      new __WEBPACK_IMPORTED_MODULE_24__Display_DisplayOpening_es6__["a" /* default */]();
    };
  }

  onReady() {

    // ------------------------------------------------------------
    //  デバイス・ブラウザ判定
    //  スマホの向き判定
    //  ページ情報取得
    // ------------------------------------------------------------
    gb.in.je = new __WEBPACK_IMPORTED_MODULE_10__Func_JudgeEnvironment_es6__["a" /* default */]();
    gb.in.resImg = new __WEBPACK_IMPORTED_MODULE_11__Func_events_ResponsiveSwitchImg_es6__["a" /* default */]();
    gb.in.sns = new __WEBPACK_IMPORTED_MODULE_20__Func_Sns_es6__["a" /* default */]($('.fbShare'), $('.twShare'), $('.lineShare'), $('.onMail'));
    gb.in.swt = new __WEBPACK_IMPORTED_MODULE_12__Func_SwipeTransition_es6__["a" /* default */]();

    gb.in.f.checkCssBlend();

    // ------------------------------------------------------------
    //  UI
    // ------------------------------------------------------------
    gb.in.menu = new __WEBPACK_IMPORTED_MODULE_13__Display_UI_compornents_Menu_es6__["a" /* default */]();
    gb.in.nav = new __WEBPACK_IMPORTED_MODULE_22__Display_UI_Nav_es6__["a" /* default */]();
    gb.in.sideR = new __WEBPACK_IMPORTED_MODULE_15__Display_UI_SideR_es6__["a" /* default */]();
    gb.in.alert = new __WEBPACK_IMPORTED_MODULE_14__Display_UI_Alert_es6__["a" /* default */]();
    gb.in.pagetop = new __WEBPACK_IMPORTED_MODULE_18__Display_UI_parts_PageTop_es6__["a" /* default */]();

    // bg
    gb.in.sliderTop = new __WEBPACK_IMPORTED_MODULE_21__Display_UI_SliderTop_es6__["a" /* default */]($('#bgWrap .sec01'));

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    gb.in.pageTransitionEffect = new __WEBPACK_IMPORTED_MODULE_26__Display_Effects_03_effects_PageTransition_PageTransitionController_es6__["a" /* default */]($('#pageTransitionLayer'));
    gb.in.sec01Video = new __WEBPACK_IMPORTED_MODULE_19__Display_UI_Sec01Video_es6__["a" /* default */]();
    gb.in.Sec02Bg = new __WEBPACK_IMPORTED_MODULE_25__Display_Effects_03_effects_Section02Bg_CVContents_es6__["a" /* default */]();

    gb.in.he01 = new __WEBPACK_IMPORTED_MODULE_27__Display_Effects_03_effects_HoverEffectSVG_es6__["a" /* default */]($('.SVGHover'), '#fff', '#000');
    gb.in.he02 = new __WEBPACK_IMPORTED_MODULE_27__Display_Effects_03_effects_HoverEffectSVG_es6__["a" /* default */]($('.SVGHoverW'), '#81d8d0', '#fff');
    gb.in.he03 = new __WEBPACK_IMPORTED_MODULE_27__Display_Effects_03_effects_HoverEffectSVG_es6__["a" /* default */]($('.SVGHoverW02'), '#81d8d0', '#000');
    gb.in.he04 = new __WEBPACK_IMPORTED_MODULE_28__Display_Effects_03_effects_HoverEffectSVGLogo_es6__["a" /* default */]($('#header .logo, #header .subTit'));
    // gb.in.he05 = new HoverEffectMenuItem($('#menu .menuList .item'));
    gb.in.he06 = new __WEBPACK_IMPORTED_MODULE_32__Display_Effects_03_effects_HoverEffectSVGArrowSideR_es6__["a" /* default */]($('#sideR .next'));
    // gb.in.he07 = new HoverEffectMenuBtn($('.menuBtn01'));
    gb.in.he08 = new __WEBPACK_IMPORTED_MODULE_31__Display_Effects_03_effects_HoverEffectSNSPCFooter_es6__["a" /* default */]($('#sideL .sns.sp'));

    // logo 出す
    // TweenMax.to($('#header .logo'), 2.2, {opacity: 1, ease: Power2.easeInOut})

    gb.in.loadMgr.start();
  }

  onLoad() {

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

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Common;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Display_DisplayTop_es6__ = __webpack_require__(6);
//--------------------------------------------------
//
//  main
//
//--------------------------------------------------


// import DisplayMovie from '../Display/DisplayMovie.es6';
// import DisplayInterview from '../Display/DisplayInterview.es6';
// import DisplayInterviewDetail from '../Display/DisplayInterviewDetail.es6';
// import DisplayHistory from '../Display/DisplayHistory.es6';

class Main {

  constructor() {

    this.onImmediate();
    this.setEvents();
  }

  onImmediate() {}

  onReady() {

    //pageページ別のIDを取得
    var page = $('body').data('id');

    //pageのIDごとに発火するクラスの振り分け
    switch (page) {

      case 'top':

        new __WEBPACK_IMPORTED_MODULE_0__Display_DisplayTop_es6__["a" /* default */]();

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

  onLoad() {}

  onRender() {}

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Main;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Data_Sound_es6__ = __webpack_require__(25);
// ------------------------------------------------------------
//
//  Config
//
// ------------------------------------------------------------



class Conf {

  constructor() {

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
    this.soundData = new __WEBPACK_IMPORTED_MODULE_0__Data_Sound_es6__["a" /* default */]();

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

  switchMode() {

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Conf;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ------------------------------------------------------------
//
//  Data
//
// ------------------------------------------------------------

class SoundData {

  constructor() {

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

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SoundData;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Effects_Effects_es6__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyLibs_Display_Layout_FullSizeByScaleInterviewIndex_es6__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Display_Layout_LayoutHistory_es6__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Display_UI_Slider_es6__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Display_UI_parts_PageScroll_es6__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Display_Effects_03_effects_HoverEffectHistoryAnchor_es6__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Display_Effects_03_effects_HoverEffectPageTop_es6__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__UI_history_YearMgr_es6__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Display_UI_HeaderColor_es6__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Display_UI_InertiaScroll04_es6__ = __webpack_require__(74);
//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------













class DisplayTop {

  constructor() {

    this.onImmediate();
    this.setEvents();
  }

  onImmediate() {

    // ループスタート
    gb.in.up.loop();
  }

  onLoad() {

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------
    // 高さを合わせた後に、レイアウト
    __WEBPACK_IMPORTED_MODULE_2__Display_Layout_LayoutHistory_es6__["a" /* default */].run();

    new __WEBPACK_IMPORTED_MODULE_3__Display_UI_Slider_es6__["a" /* default */]();

    gb.in.headerColor = new __WEBPACK_IMPORTED_MODULE_9__Display_UI_HeaderColor_es6__["a" /* default */]();

    new __WEBPACK_IMPORTED_MODULE_8__UI_history_YearMgr_es6__["a" /* default */]();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------

    gb.in.snsSPHoverEf = new __WEBPACK_IMPORTED_MODULE_5__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__["a" /* default */]($('.snsWrap'));
    new __WEBPACK_IMPORTED_MODULE_7__Display_Effects_03_effects_HoverEffectPageTop_es6__["a" /* default */]($('.pageTop'));
    new __WEBPACK_IMPORTED_MODULE_6__Display_Effects_03_effects_HoverEffectHistoryAnchor_es6__["a" /* default */]($('.block01 .textWrap02 .item'));

    gb.in.inertia04 = new __WEBPACK_IMPORTED_MODULE_10__Display_UI_InertiaScroll04_es6__["a" /* default */]();
  }

  static run() {

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------

    // 高さを合わせた後に、レイアウト
    __WEBPACK_IMPORTED_MODULE_2__Display_Layout_LayoutHistory_es6__["a" /* default */].run();

    new __WEBPACK_IMPORTED_MODULE_3__Display_UI_Slider_es6__["a" /* default */]();

    gb.in.headerColor = new __WEBPACK_IMPORTED_MODULE_9__Display_UI_HeaderColor_es6__["a" /* default */]();

    new __WEBPACK_IMPORTED_MODULE_8__UI_history_YearMgr_es6__["a" /* default */]();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    gb.in.snsSPHoverEf = new __WEBPACK_IMPORTED_MODULE_5__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__["a" /* default */]($('.snsWrap'));
    new __WEBPACK_IMPORTED_MODULE_7__Display_Effects_03_effects_HoverEffectPageTop_es6__["a" /* default */]($('.pageTop'));
    new __WEBPACK_IMPORTED_MODULE_6__Display_Effects_03_effects_HoverEffectHistoryAnchor_es6__["a" /* default */]($('.block01 .textWrap02 .item'));

    gb.in.inertia04 = new __WEBPACK_IMPORTED_MODULE_10__Display_UI_InertiaScroll04_es6__["a" /* default */]();
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayTop;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Effects_Effects_es6__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display_Layout_LayoutInterview_es6__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Display_UI_interview_Move3D_es6__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Display_UI_history_Move2D_es6__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Display_UI_interview_InterviewTopEf_es6__ = __webpack_require__(93);
//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------







class DisplayTop {

  constructor() {

    this.onImmediate();
    this.setEvents();
  }

  onImmediate() {

    // ループスタート
    gb.in.up.loop();
  }

  onLoad() {

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------
    __WEBPACK_IMPORTED_MODULE_1__Display_Layout_LayoutInterview_es6__["a" /* default */].run();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    // sp
    gb.in.snsSPHoverEf = new __WEBPACK_IMPORTED_MODULE_2__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__["a" /* default */]($('.snsWrap'));

    // pc
    new __WEBPACK_IMPORTED_MODULE_5__Display_UI_interview_InterviewTopEf_es6__["a" /* default */]();

    // $('.move3D').each(function(index, el) {

    //     new Move3D($(this));

    // });
    // $('.move2D').each(function(index, el) {

    //     new Move2D($(this));

    // });
  }

  static run() {

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------
    __WEBPACK_IMPORTED_MODULE_1__Display_Layout_LayoutInterview_es6__["a" /* default */].run();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    // sp
    gb.in.snsSPHoverEf = new __WEBPACK_IMPORTED_MODULE_2__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__["a" /* default */]($('.snsWrap'));

    // pc
    new __WEBPACK_IMPORTED_MODULE_5__Display_UI_interview_InterviewTopEf_es6__["a" /* default */]();

    // $('.move3D').each(function(index, el) {

    //     new Move3D($(this));

    // });
    // $('.move2D').each(function(index, el) {

    //     new Move2D($(this));

    // });
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayTop;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Effects_Effects_es6__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display_Layout_LayoutInterviewDetail_es6__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Display_UI_parts_PageScroll_es6__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Display_Effects_03_effects_HoverEffectSNSPCDetails_es6__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Display_Effects_03_effects_HoverEffectDetailsBtm_es6__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Display_Effects_03_effects_HoverEffectPageTop_es6__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Display_UI_HeaderColor_es6__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Display_UI_InertiaScroll01_es6__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Display_UI_InertiaScroll02_es6__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Display_UI_InertiaScroll03_es6__ = __webpack_require__(73);
//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------












class DisplayTop {

  constructor() {

    this.onImmediate();
    this.setEvents();
  }

  onImmediate() {

    // ループスタート
    gb.in.up.loop();
  }

  onLoad() {

    // ------------------------------------------------------------
    //  UI
    // ------------------------------------------------------------
    __WEBPACK_IMPORTED_MODULE_1__Display_Layout_LayoutInterviewDetail_es6__["a" /* default */].run();

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

    gb.in.headerColor = new __WEBPACK_IMPORTED_MODULE_6__Display_UI_HeaderColor_es6__["a" /* default */]();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    new __WEBPACK_IMPORTED_MODULE_3__Display_Effects_03_effects_HoverEffectSNSPCDetails_es6__["a" /* default */]();
    new __WEBPACK_IMPORTED_MODULE_5__Display_Effects_03_effects_HoverEffectPageTop_es6__["a" /* default */]($('.pageTop'));
    new __WEBPACK_IMPORTED_MODULE_4__Display_Effects_03_effects_HoverEffectDetailsBtm_es6__["a" /* default */]($('.block04 .box01'));
    new __WEBPACK_IMPORTED_MODULE_4__Display_Effects_03_effects_HoverEffectDetailsBtm_es6__["a" /* default */]($('.block04 .box02'));
    new __WEBPACK_IMPORTED_MODULE_4__Display_Effects_03_effects_HoverEffectDetailsBtm_es6__["a" /* default */]($('.block04 .box03'));

    if ($('.section').hasClass('section03_detail01')) {
      // add
      gb.in.inertia01 = new __WEBPACK_IMPORTED_MODULE_7__Display_UI_InertiaScroll01_es6__["a" /* default */]();
    } else if ($('.section').hasClass('section03_detail02')) {
      gb.in.inertia02 = new __WEBPACK_IMPORTED_MODULE_8__Display_UI_InertiaScroll02_es6__["a" /* default */]();
    } else if ($('.section').hasClass('section03_detail03')) {
      gb.in.inertia03 = new __WEBPACK_IMPORTED_MODULE_9__Display_UI_InertiaScroll03_es6__["a" /* default */]();
    }
  }

  static run() {

    // ------------------------------------------------------------
    //  UI
    // ------------------------------------------------------------
    __WEBPACK_IMPORTED_MODULE_1__Display_Layout_LayoutInterviewDetail_es6__["a" /* default */].run();

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

    gb.in.headerColor = new __WEBPACK_IMPORTED_MODULE_6__Display_UI_HeaderColor_es6__["a" /* default */]();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    new __WEBPACK_IMPORTED_MODULE_3__Display_Effects_03_effects_HoverEffectSNSPCDetails_es6__["a" /* default */]();
    new __WEBPACK_IMPORTED_MODULE_5__Display_Effects_03_effects_HoverEffectPageTop_es6__["a" /* default */]($('.pageTop'));
    new __WEBPACK_IMPORTED_MODULE_4__Display_Effects_03_effects_HoverEffectDetailsBtm_es6__["a" /* default */]($('.block04 .box01'));
    new __WEBPACK_IMPORTED_MODULE_4__Display_Effects_03_effects_HoverEffectDetailsBtm_es6__["a" /* default */]($('.block04 .box02'));
    new __WEBPACK_IMPORTED_MODULE_4__Display_Effects_03_effects_HoverEffectDetailsBtm_es6__["a" /* default */]($('.block04 .box03'));

    if ($('.section').hasClass('section03_detail01')) {
      // add
      gb.in.inertia01 = new __WEBPACK_IMPORTED_MODULE_7__Display_UI_InertiaScroll01_es6__["a" /* default */]();
    } else if ($('.section').hasClass('section03_detail02')) {
      gb.in.inertia02 = new __WEBPACK_IMPORTED_MODULE_8__Display_UI_InertiaScroll02_es6__["a" /* default */]();
    } else if ($('.section').hasClass('section03_detail03')) {
      gb.in.inertia03 = new __WEBPACK_IMPORTED_MODULE_9__Display_UI_InertiaScroll03_es6__["a" /* default */]();
    }
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayTop;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Effects_Effects_es6__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UI_BgVideoTile_es6__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UI_Sec02Video_es6__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Display_Layout_LayoutMovie_es6__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Display_Effects_03_effects_HoverEffectMoviePlay_es6__ = __webpack_require__(36);
//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------







class DisplayTop {

  constructor() {

    this.onImmediate();
    this.setEvents();
  }

  onImmediate() {

    // Sec02Video(); youtube頭出しまで
    gb.in.rm.total++;

    // ループスタート
    gb.in.up.loop();
  }

  onLoad() {

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------
    // 高さを合わせた後に、レイアウト
    __WEBPACK_IMPORTED_MODULE_3__Display_Layout_LayoutMovie_es6__["a" /* default */].run();

    gb.in.sec02Video = new __WEBPACK_IMPORTED_MODULE_2__UI_Sec02Video_es6__["a" /* default */]();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------

    // sp
    gb.in.snsSPHoverEf = new __WEBPACK_IMPORTED_MODULE_4__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__["a" /* default */]($('.snsWrap'));

    // pc
    new __WEBPACK_IMPORTED_MODULE_5__Display_Effects_03_effects_HoverEffectMoviePlay_es6__["a" /* default */]($('.play .bg'));
  }

  static run() {

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------
    // 高さを合わせた後に、レイアウト
    __WEBPACK_IMPORTED_MODULE_3__Display_Layout_LayoutMovie_es6__["a" /* default */].run();

    gb.in.sec02Video = new __WEBPACK_IMPORTED_MODULE_2__UI_Sec02Video_es6__["a" /* default */]();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------

    // sp
    gb.in.snsSPHoverEf = new __WEBPACK_IMPORTED_MODULE_4__Display_Effects_03_effects_HoverEffectSNSSPFooter_es6__["a" /* default */]($('.snsWrap'));

    // pc
    new __WEBPACK_IMPORTED_MODULE_5__Display_Effects_03_effects_HoverEffectMoviePlay_es6__["a" /* default */]($('.play .bg'));

    // common
    // 既にリソースのロード,canvasのsetupされているのでplayのみ
    gb.in.Sec02Bg.play();
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayTop;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  DisplayOpening
//
//--------------------------------------------------

class DisplayOpening {

  constructor() {

    this.setup();
    this.showPage();
    this.effect();
  }

  setup() {

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

  showPage() {

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

  effect() {

    // 時計エフェクトで表示   
    gb.in.pageTransitionEffect.openingEffect();
  }

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayOpening;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DisplayTop_es6__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DisplayMovie_es6__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DisplayInterview_es6__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DisplayInterviewDetail_es6__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DisplayHistory_es6__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layout_Size_ScaleInterviewDetail_es6__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Layout_Layout_es6__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Effects_03_effects_HoverEffectSVG_es6__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__UI_parts_PageTop_es6__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Func_Sns_es6__ = __webpack_require__(20);
//--------------------------------------------------
//
//  DisplayPjaxPage
//
//--------------------------------------------------











class DisplayPjaxPage {

  constructor() {

    this.setup();
  }

  setup() {}

  static outPageBeforeEf(url) {

    // sideLを消す 早めの段階で
    var nextUrl = gb.in.pjax.getLink(url);
    if (nextUrl == 'top' || nextUrl == 'interview_detail') {
      // sideL
      var tl02 = new TimelineMax();
      tl02.to($('#sideL .sns.sp'), 0.4, {
        opacity: 0,
        onComplete: () => {
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

  static outPageAfterEf() {

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
    __WEBPACK_IMPORTED_MODULE_5__Layout_Size_ScaleInterviewDetail_es6__["a" /* default */].reset();
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

  static inPageBeforeImgLoaded() {

    __WEBPACK_IMPORTED_MODULE_6__Layout_Layout_es6__["a" /* default */].reset();

    gb.in.resImg.resume();

    // ホバーの設定
    gb.in.he01 = new __WEBPACK_IMPORTED_MODULE_7__Effects_03_effects_HoverEffectSVG_es6__["a" /* default */]($('.SVGHover'), '#fff', '#000');
    gb.in.he02 = new __WEBPACK_IMPORTED_MODULE_7__Effects_03_effects_HoverEffectSVG_es6__["a" /* default */]($('.SVGHoverW'), '#81d8d0', '#fff');
    gb.in.he03 = new __WEBPACK_IMPORTED_MODULE_7__Effects_03_effects_HoverEffectSVG_es6__["a" /* default */]($('.SVGHoverW02'), '#81d8d0', '#000');

    // sns機能の設定
    gb.in.sns = new __WEBPACK_IMPORTED_MODULE_9__Func_Sns_es6__["a" /* default */]($('.fbShare'), $('.twShare'), $('.lineShare'), $('.onMail'));
    gb.in.sns.switchMeta();
    gb.in.sns.setting();

    // 背景色の変更
    if (gb.in.pjax.id == 'interview_detail' || gb.in.pjax.id == 'history') $('html').css('background-color', '#fff');else $('html').css('background-color', '#000');
  }

  static inPageAfterImgLoaded() {

    // スクロールトランジションを可能に
    gb.in.sct.isSwitch = true;

    setTimeout(() => {
      // sideR変更
      gb.in.sideR.inNum();
      gb.in.sideR.inPageName();
      gb.in.sideR.inNext();
      gb.in.nav.inPage();
    }, 600);

    // 共通でイベント設定
    new __WEBPACK_IMPORTED_MODULE_8__UI_parts_PageTop_es6__["a" /* default */]();

    switch (gb.in.pjax.id) {

      case 'top':

        __WEBPACK_IMPORTED_MODULE_0__DisplayTop_es6__["a" /* default */].run();
        gb.in.menu.switchActive(0);

        // スマホだったらside消す
        if (gb.in.u.isResSP) {

          var tl02 = new TimelineMax();
          tl02.to($('#sideL .sns.sp, #sideR .indicator'), 1.2, {
            opacity: 1
          });
        };

        setTimeout(() => {
          gb.in.pageTransitionEffect.inEffect();
        }, 800);

        break;

      case 'movie':

        __WEBPACK_IMPORTED_MODULE_1__DisplayMovie_es6__["a" /* default */].run();
        gb.in.menu.switchActive(1);

        var tl02 = new TimelineMax();
        tl02.set($('#sideL .sns.sp'), { display: 'block' }).to($('#sideL .sns.sp'), 1.2, { opacity: 1 });

        gb.in.pageTransitionEffect.inEffect();

        break;

      case 'interview':

        __WEBPACK_IMPORTED_MODULE_2__DisplayInterview_es6__["a" /* default */].run();
        gb.in.menu.switchActive(2);

        // myminute 出す
        var tl02 = new TimelineMax();
        tl02.set($('#sideL .sns.sp'), { display: 'block' }).to($('#sideL .sns.sp'), 1.2, { opacity: 1 });

        gb.in.pageTransitionEffect.inEffect();

        break;

      case 'interview_detail':

        __WEBPACK_IMPORTED_MODULE_3__DisplayInterviewDetail_es6__["a" /* default */].run();
        gb.in.menu.switchActive(-1);

        setTimeout(() => {
          gb.in.pageTransitionEffect.inEffect();
        }, 100);

        break;

      case 'history':

        __WEBPACK_IMPORTED_MODULE_4__DisplayHistory_es6__["a" /* default */].run();
        gb.in.menu.switchActive(3);

        var tl02 = new TimelineMax();
        tl02.set($('#sideL .sns.sp'), { display: 'block' }).to($('#sideL .sns.sp'), 1.2, { opacity: 1 });

        gb.in.pageTransitionEffect.inEffect();

        break;

    }
  }

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = DisplayPjaxPage;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectBack
//
//--------------------------------------------------

class HoverEffectBack {

  constructor($target) {

    this.$target = $target;

    // motion
    this.tl = new TimelineMax();

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();
  }

  setup() {}

  run() {}

  onEnter(that) {

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

  onLeave(that) {

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

  setEvents() {

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

  removeEvents() {

    var self = this;

    this.$target.each(function (index, el) {

      $(this).off('mouseenter');
      $(this).off('mouseleave');
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectBack;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectDetailsBtm
//
//--------------------------------------------------

class HoverEffectDetailsBtm {

  constructor($wrap) {

    this.$wrap = $wrap;

    // motion
    this.tl = new TimelineMax();

    this.setEvents();
  }

  setup() {}

  run() {}

  onEnter(that) {

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

  onLeave(that) {

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

  setEvents() {

    var self = this;

    this.$wrap.on('mouseenter', function (e) {
      self.onEnter.call(self, this);
    });
    this.$wrap.on('mouseleave', function (e) {
      self.onLeave.call(self, this);
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectDetailsBtm;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectHistoryEffect
//
//--------------------------------------------------

class HoverEffectHistoryEffect {

  constructor($target) {

    this.$target = $target;

    // motion
    this.tl = new TimelineMax();

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();
  }

  setup() {}

  run() {}

  onEnter(that) {

    if (gb.in.u.isResSP) return;

    $(that).addClass('isHover');
  }

  onLeave(that) {

    if (gb.in.u.isResSP) return;

    $(that).removeClass('isHover');
  }

  setEvents() {

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

  removeEvents() {

    var self = this;

    this.$target.each(function (index, el) {

      $(this).off('mouseenter');
      $(this).off('mouseleave');
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectHistoryEffect;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectMenuBtn
//
//--------------------------------------------------

class HoverEffectMenuBtn {

  constructor($target) {

    this.$target = $target;

    // motion
    this.tl = new TimelineMax();

    this.setEvents();
  }

  setup() {}

  run() {}

  onEnter(that) {

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

  onLeave(that) {

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

  setEvents() {

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

}
/* unused harmony export default */


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectMoviePlay
//
//--------------------------------------------------

class HoverEffectMoviePlay {

  constructor($target) {

    this.$target = $target;

    // motion
    this.tl = new TimelineMax();

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();
  }

  setup() {}

  run() {}

  onEnter(that) {

    if (gb.in.u.isResSP) return;

    var tl = new TimelineMax();

    tl.set($(that), { opacity: 1 }).to($(that), 1.0, {
      opacity: 0,
      ease: Power4.easeOut
    });
  }

  onLeave(that) {

    if (gb.in.u.isResSP) return;

    var tl = new TimelineMax();

    // tl
    //   .set($(that),{opacity: 0})
  }

  setEvents() {

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

  removeEvents() {

    var self = this;

    this.$target.each(function (index, el) {

      $(this).off('mouseenter');
      $(this).off('mouseleave');
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectMoviePlay;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectSNSPCDetails
//
//--------------------------------------------------

class HoverEffectSNSPCDetails {

  constructor($wrap, $target) {

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

  setup() {}

  ready() {

    // bar
    TweenMax.set(this.$bb, { height: 0 });
    TweenMax.set(this.$br, { width: 0 });

    // sns
    TweenMax.set(this.$item, { x: 30, opacity: 0 });

    this.$box.show();
  }

  run() {}

  onEnter(that) {

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

  onLeave(that) {

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
      onComplete: () => {
        this.$box.hide();
      }
    }, '-=0.2');
  }

  setEvents() {

    var self = this;

    this.$icon.on('mouseenter', function (e) {
      self.onEnter.call(self, this);
    });
    this.$icon.add(this.$box).on('mouseleave', function (e) {
      self.onLeave.call(self, this);
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectSNSPCDetails;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectSNSPCFooter
//
//--------------------------------------------------

class HoverEffectSNSPCFooter {

  constructor($wrap, $target) {

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

  setup() {}

  ready() {

    // bar
    TweenMax.set(this.$bar, { width: 0 });

    // sns
    TweenMax.set(this.$item, { x: -40, opacity: 0 });

    this.$bar.show();
    this.$list.show();
  }

  run() {}

  onEnter(that) {

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

  onLeave(that) {

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
      onComplete: () => {
        this.$list.hide();
      }
    }, '-=0.25').to(this.$bar, 0.2, {
      width: 0,
      ease: Power2.easeInOut,
      onComplete: () => {
        this.$bar.hide();
      }
    }, '-=0.2');

    // ホバーエリアを拡大
    TweenMax.to(this.$inner, 0.3, { width: 14 });
  }

  setEvents() {

    var self = this;

    this.$inner.on('mouseenter', function (e) {
      self.onEnter.call(self, this);
    });
    this.$inner.on('mouseleave', function (e) {
      self.onLeave.call(self, this);
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectSNSPCFooter;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectSVGArrow
//
//--------------------------------------------------

class HoverEffectSVGArrow {

  constructor($target) {

    this.$target = $target;

    // motion
    this.tl = new TimelineMax();

    this.setup();

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();
  }

  setup() {

    TweenMax.set(this.$target.find('path'), { drawSVG: '0% 100%', fill: 'none', stroke: '#000' });
  }

  run() {}

  onEnter(that) {

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

  onLeave(that) {

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

  setEvents() {

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

}
/* unused harmony export default */


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectSVGArrowSideR
//
//--------------------------------------------------

class HoverEffectSVGArrowSideR {

  constructor($target) {

    this.$target = $target;

    // motion
    this.tl = new TimelineMax();

    this.setup();
    // this.autoArrow();

    this.isHover = false;

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();
  }

  setup() {}

  run() {}

  onEnter(that) {

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

  onLeave(that) {

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

  setEvents() {

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectSVGArrowSideR;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectSVGLogo
//
//--------------------------------------------------

class HoverEffectSVGLogo {

  constructor($target) {

    this.$target = $target;

    // motion
    this.tl = new TimelineMax();

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();
  }

  setup() {}

  run() {}

  onEnter(that) {

    if (gb.in.u.isResSP) return;

    var tl = new TimelineMax();

    tl.to($(that), 0.5, {
      opacity: 0.3,
      ease: Power4.easeOut
    });
  }

  onLeave(that) {

    if (gb.in.u.isResSP) return;

    var tl = new TimelineMax();

    tl.to($(that), 0.5, {
      opacity: 1,
      ease: Power3.easeOut
    });
  }

  setEvents() {

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

  removeEvents() {

    var self = this;

    this.$target.each(function (index, el) {

      $(this).off('mouseenter');
      $(this).off('mouseleave');
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectSVGLogo;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverEffectSliderArrow
//
//--------------------------------------------------

class HoverEffectSliderArrow {

  constructor($target, str) {

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

  setup() {}

  run() {}

  onEnter(that) {

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

  onLeave(that) {

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

  setEvents() {

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverEffectSliderArrow;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point_es6__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TopOpening_es6__ = __webpack_require__(55);
//--------------------------------------------------
//
//  PageTransitionEffect
//
//--------------------------------------------------




class PageTransitionEffect {

  constructor($wrap) {

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
    this.cb = () => {};

    this.setup();
    this.setEvents();
  }

  setup() {

    // canvas要素追加
    this.renderer = PIXI.autoDetectRenderer(gb.in.r.ws.w, gb.in.r.ws.h, { antialias: true, transparent: true });
    this.$wrap.append(this.renderer.view);

    // create the root of the scene graph
    this.stage = new PIXI.Container();
    this.stage.interactive = true;

    this.addObject();
  }

  addObject() {

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

  updateTime() {

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

  update() {

    this.updateTime();
  }

  draw() {

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

  openingEffect() {

    var tlMain = new TimelineMax();

    // this.setParamInEf();

    tlMain
    // 線が伸びる
    .add(() => {

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
    .add(() => {

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
    .add(() => {

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
      .to(this.sHand, 1.6, {
        alpha: 0,
        ease: Power4.easeInOut
      });

      // ぐわ
      tl02
      // color
      .to(this, 1.8, {
        startRad04: Math.PI * 2 / 3 * 1,
        startRad05: Math.PI * 2 / 3 * 2,
        startRad06: Math.PI * 2 / 3 * 3,
        ease: Expo.easeInOut,
        onStart: () => {

          // 各UI表示
          this.to = new __WEBPACK_IMPORTED_MODULE_1__TopOpening_es6__["a" /* default */]();
          if (gb.in.pjax.id == 'top') this.to.runTop();else this.to.runOther();
        },
        onComplete: () => {

          this.$wrap.hide(); // ページ遷移エフェクトレイヤーを隠す
          this.isStart = false; // ループを止める 

          gb.in.pjax.isPjaxLock = false;
        }
      });
    }, '+=3.0');
  }

  inEffect() {

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
      onComplete: () => {
        this.$wrap.hide(); // ページ遷移エフェクトレイヤーを隠す
        this.isStart = false; // ループを止める         
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

  outEffect() {

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
      onComplete: () => {

        this.cb();
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

  setParamOutEf() {

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

  setParamInEf() {

    this.startRad04 = Math.PI * 2 / 3 * 0;
    this.startRad05 = Math.PI * 2 / 3 * 1;
    this.startRad06 = Math.PI * 2 / 3 * 2;
    this.endRad04 = Math.PI * 2 / 3 * 1; // pixi.jsは何か描画しないとマスクされない？ 少数の値を入れている
    this.endRad05 = Math.PI * 2 / 3 * 2;
    this.endRad06 = Math.PI * 2 / 3 * 3;
  }

  loop() {

    if (this.isStart) {

      this.update();
      this.draw();
    };
  }

  drawCircle(rad) {

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

  getSHandLength(targetRad) {

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

  drawCircle01(startRad, endRad) {

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

  drawCircle02(startRad, endRad) {

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

  drawCircle03(startRad, endRad) {

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

  drawCircle04(startRad, endRad) {

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

  drawCircle05(startRad, endRad) {

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

  drawCircle06(startRad, endRad) {

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

  onResize() {

    this.renderer.width = gb.in.r.ws.w;
    this.renderer.height = gb.in.r.ws.h;

    this.renderer.resize(gb.in.r.ws.w, gb.in.r.ws.h);

    this.sRadius = this.targetRadius = Math.sqrt(gb.in.r.ws.w * gb.in.r.ws.w + gb.in.r.ws.h * gb.in.r.ws.h);
  }

  setEvents() {

    gb.in.r.add('PageTransitionEffect', this.onResize.bind(this));
    gb.in.up.add('PageTransitionEffect', this.loop.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PageTransitionEffect;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageTransition_es6__ = __webpack_require__(43);
//--------------------------------------------------
//
//  PageTransitionController
//
//--------------------------------------------------



class PageTransitionController {

  constructor($wrap) {

    this.cb = () => {};

    this.$wrap = $wrap;
    this.setup($wrap);
    this.setEvents();
  }

  setup($wrap) {

    this.effect = new __WEBPACK_IMPORTED_MODULE_0__PageTransition_es6__["a" /* default */]($wrap);
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

  openingEffect() {

    this.$wrap.show();
    this.effect.isStart = true;
    this.effect.openingEffect();
  }

  inEffect() {

    this.$wrap.show();
    this.effect.isStart = true;
    this.effect.inEffect();
  }

  outEffect() {

    this.effect.cb = this.cb;
    this.$wrap.show();
    this.effect.isStart = true;
    this.effect.outEffect();
  }

  pause() {

    this.$wrap.hide();
    this.effect.isStart = false;
    // this.effect.timeline();
  }

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PageTransitionController;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ------------------------------------------------------------
//
//  Point
//
// ------------------------------------------------------------

class Point {

  constructor(x, y) {

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

  create() {}

  update() {}

  draw() {}

  loop() {}

}
/* unused harmony export default */


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  CVContentsLoop
//
//--------------------------------------------------

class CVContentsLoop {

  constructor() {

    this.isAlways = true;
    this.isRunStatus = true;
    this.isAdjustParam = true;
    this.state = 'initial';
    this.sometimesState = 'initial';

    this.loopList = [];

    this.loopStart = false;

    this.setEvents();
  }

  update() {

    if (this.isAlways) this.runAlways();
    if (this.isRunStatus) this.runStatus();
    if (this.isAdjustParam) this.runAdjustParam();
  }

  // ------------------------------------------------------------
  // 常に行う処理
  // ------------------------------------------------------------    
  runAlways() {

    for (var i in this.loopList) this.loopList[i]();
  }

  // ------------------------------------------------------------
  // 各状態の処理
  // ------------------------------------------------------------
  runStatus() {

    if (this.state == 'initial') {} else if (this.state == 'start') {} else if (this.state == 'step01') {} else if (this.state == 'step02') {} else if (this.state == 'step03') {} else if (this.state == 'standby') {} else if (this.state == 'sometimes') {

      if (this.sometimesState == 'lineShadow') {} else if (this.sometimesState == 'sphere') {} else if (this.sometimesState == 'satellite') {}
    }
  }

  // ------------------------------------------------------------
  // パラメータ調整用処理
  // ------------------------------------------------------------
  runAdjustParam() {}

  draw() {}

  loop() {

    if (this.loopStart) {

      this.update();
      this.draw();

      // log('section02')
    }
  }

  start() {

    this.loopStart = true;
  }

  pause() {

    this.loopStart = false;
  }

  add(func) {

    this.loopList.push(func);
  }

  setEvents() {

    var self = this;

    gb.in.up.add('section02Bg', this.loop.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = CVContentsLoop;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  CVContentsTimeline
//
//--------------------------------------------------

class CVContentsTimeline {

  constructor() {

    this.tlMain = new TimelineMax();
    this.setup();
    this.setEvents();
  }

  setup() {

    // タイムラインを止めておく
    this.tlMain.pause();

    this.beginning();
    this.step01();
    this.step02();
    this.step03();
    this.standBy();
    this.sometimes();
  }

  beginning() {}

  step01() {}

  step02() {}

  step03() {}

  standBy() {}

  // 時々
  sometimes() {

    var self = this;

    this.tlMain.add(function () {}, '+=0.0');
  }

  onResizse() {}

  setEvents() {

    // gb.in.r.add('cvTimeline', this.onResizse.bind(this));

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = CVContentsTimeline;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ------------------------------------------------------------
//
//  Canvas
//
// ------------------------------------------------------------

class Canvas {

  constructor() {

    this.canvas = null;
    this.ctx = null;
    this.w = $(window).width();
    this.h = $(window).height();

    this.setup();
  }

  setup() {

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.w;
    this.canvas.height = this.h;
  }

  update() {}

  draw() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Canvas;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Canvas_es6__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Plane_es6__ = __webpack_require__(50);
// ------------------------------------------------------------
//
//  CreateCanvas
//
// ------------------------------------------------------------



class CreateCanvas {

  constructor($wrap, w, h, cb = () => {}) {

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

  setup() {
    //canvas finger point

    this.c = new __WEBPACK_IMPORTED_MODULE_0__Canvas_es6__["a" /* default */]();

    // this.addObjects();
    this.onResize();

    this.$wrap.append(this.c.canvas);

    this.cb();
  }

  addObjects(vx) {
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

      this.tile = new __WEBPACK_IMPORTED_MODULE_1__Plane_es6__["a" /* default */](this.c.ctx, this.fillStyle);

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

  setCanvasSize(w, h) {

    this.cw = this.c.canvas.width = w;
    this.ch = this.c.canvas.height = h;
  }

  loop() {

    // this.c.ctx.clearRect(0,0,this.cw,this.ch);
    // this.c.ctx.fillStyle = 'rgba(255,255,255,0.08)';

    this.c.ctx.fillStyle = 'rgba(255,255,255,0.6)';
    this.c.ctx.fillRect(0, 0, this.cw, this.ch);

    for (var i in this.loopList) this.loopList[i]();
  }

  timeline() {}

  add(func) {

    this.loopList.push(func);
  }

  onResize() {

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

  setEvents() {

    gb.in.Sec02Bg.loop.add(this.loop.bind(this));
    gb.in.r.add('CreateCanvas', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = CreateCanvas;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ------------------------------------------------------------
//
//  Plane
//
// ------------------------------------------------------------

class Plane {

  constructor(ctx, strokeStyle) {

    this.ctx = ctx;

    this.strokeStyle = strokeStyle;
    this.op = { val: 1 };

    this.cnt = 0;

    this.cntStop = false;

    // this.setup();
    this.create();
  }

  setup(x, y, w, h, frameStart, vx, offset) {

    this.imgList = gb.in.loadSec02Img.list;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.vx = vx;

    this.offset = offset;

    this.cnt = frameStart;
  }

  create() {}

  // 頂点で描く
  update() {

    this.x -= this.vx;
    if (this.x < -this.w) this.x = gb.in.canvas.cw - 10;
  }

  draw() {

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

  loop() {

    this.update();
    this.draw();
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Plane;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GlContentsLoop_es6__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GlContentsTimeline_es6__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_Plane_es6__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Param_es6__ = __webpack_require__(56);
//--------------------------------------------------
//
//  GlContents
//
//--------------------------------------------------





class GlContents {

  constructor($wrap = $('body')) {

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
    this.loop = new __WEBPACK_IMPORTED_MODULE_0__GlContentsLoop_es6__["a" /* default */]();
    // timeline
    this.timeline = new __WEBPACK_IMPORTED_MODULE_1__GlContentsTimeline_es6__["a" /* default */]();
  }

  setup() {}

  create($wrap) {

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

  addObjects() {

    this.plane = new __WEBPACK_IMPORTED_MODULE_2__details_Plane_es6__["a" /* default */]();
  }

  addUI() {

    // controls

    if (this.isControl) {

      gb.in.controls = this.controls = new THREE.TrackballControls(this.camera);
      this.controls.zoomSpeed = 0.8;
      this.controls.rotateSpeed = 3;
    };

    // profiler設定
    new gb.Profiler();
    // paramrter調整
    gb.in.param = new __WEBPACK_IMPORTED_MODULE_3__Param_es6__["a" /* default */]();
  }

  onResize() {

    var w = window.innerWidth;
    var h = window.innerHeight;

    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  onSection04(cur, prev) {

    if (cur == 'product') {

      this.loop.start();
      this.timeline.tlMain.play();
    } else {

      this.loop.pause();
      this.timeline.tlMain.pause();
    }
  }

  setEvents() {

    gb.in.r.add(this.onResize.bind(this));
    gb.in.hash.onChangeFuncList.push(this.onSection04.bind(this));
    $(window).on('onSection04ProductImg', () => {
      this.timeline.setup();
    });
  }

}
/* unused harmony export default */


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  GlContentsLoop
//
//--------------------------------------------------

class GlContentsLoop {

  constructor() {

    this.isAlways = true;
    this.isRunStatus = true;
    this.isAdjustParam = true;
    this.state = 'initial';
    this.sometimesState = 'initial';

    this.loopStart = false;

    this.loopList = [];

    this.setEvents();
  }

  update() {

    if (this.isAlways) this.runAlways();
    if (this.isRunStatus) this.runStatus();
    if (this.isAdjustParam) this.runAdjustParam();
  }

  // ------------------------------------------------------------
  // 常に行う処理
  // ------------------------------------------------------------    
  runAlways() {

    if (gb.in.Section04Product.isControl) gb.in.controls.update();

    // camera
    gb.in.camera.updateControll();
  }

  // ------------------------------------------------------------
  // 各状態の処理
  // ------------------------------------------------------------
  runStatus() {

    if (this.state == 'initial') {} else if (this.state == 'start') {} else if (this.state == 'step01') {} else if (this.state == 'step02') {} else if (this.state == 'step03') {} else if (this.state == 'standby') {} else if (this.state == 'sometimes') {

      if (this.sometimesState == 'lineShadow') {} else if (this.sometimesState == 'sphere') {} else if (this.sometimesState == 'satellite') {}
    }
  }

  // ------------------------------------------------------------
  // パラメータ調整用処理
  // ------------------------------------------------------------
  runAdjustParam() {}

  draw() {

    gb.in.renderer.render(gb.in.scene.scene, gb.in.camera.camera);
    // gb.in.postprocess.composer.render(0.1);
  }

  loop() {

    if (this.loopStart) {

      this.update();
      this.draw();

      log('section04');
    }
  }

  start() {

    this.loopStart = true;
  }

  pause() {

    this.loopStart = false;
  }

  add(func) {

    this.loopList.push(func);
  }

  setEvents() {

    var self = this;

    gb.in.up.add('section04Product', this.loop.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = GlContentsLoop;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyLibs_EventMgr_SometimesMgr_es6__ = __webpack_require__(107);
//--------------------------------------------------
//
//  GlContentsTimeline
//
//--------------------------------------------------



class GlContentsTimeline {

  constructor() {

    this.tlMain = new TimelineMax();
    // this.setup();
    this.setEvents();
  }

  setup() {

    // タイムラインを止めておく
    this.tlMain.pause();

    this.beginning();
    // this.step01();
    // this.step02();
    // this.step03();
    // this.standBy();
    this.sometimes();
  }

  beginning() {

    this.tlMain
    // zoom in
    .to(gb.in.loadMgr.shaders[0].uniforms.strength, 1.3, {
      value: 500,
      ease: Expo.easeInOut,
      onStart: () => {

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
      onComplete: () => {

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

  step01() {}

  step02() {}

  step03() {}

  standBy() {}

  // 時々
  sometimes() {

    var self = this;

    this.tlMain.add(function () {

      var s = new __WEBPACK_IMPORTED_MODULE_0__MyLibs_EventMgr_SometimesMgr_es6__["a" /* default */]();

      s.add(function () {

        TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
          value: 1,
          ease: Expo.easeInOut,
          onComplete: () => {

            gb.in.loadMgr.shaders[2].uniforms.from.value = gb.in.Section04Product.plane.textures[3];
          }

        });
      }, 2.0, 2.0);

      s.add(function () {

        TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
          value: 0,
          ease: Expo.easeInOut,
          onComplete: () => {

            gb.in.loadMgr.shaders[2].uniforms.to.value = gb.in.Section04Product.plane.textures[4];
          }

        });
      }, 2.0, 2.0);

      s.add(function () {

        TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
          value: 1,
          ease: Expo.easeInOut,
          onComplete: () => {

            gb.in.loadMgr.shaders[2].uniforms.from.value = gb.in.Section04Product.plane.textures[5];
          }

        });
      }, 2.0, 2.0);

      s.add(function () {

        TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
          value: 0,
          ease: Expo.easeInOut,
          onComplete: () => {

            gb.in.loadMgr.shaders[2].uniforms.to.value = gb.in.Section04Product.plane.textures[1];
          }

        });
      }, 2.0, 2.0);

      s.add(function () {

        TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
          value: 1,
          ease: Expo.easeInOut,
          onComplete: () => {

            gb.in.loadMgr.shaders[2].uniforms.from.value = gb.in.Section04Product.plane.textures[2];
          }

        });
      }, 2.0, 2.0);

      s.start();
    }, '+=0.0');
  }

  onResizse() {}

  setEvents() {

    gb.in.r.add(this.onResizse.bind(this));

    $(window).on('click', () => {

      // this.start();

    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = GlContentsTimeline;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Plane
//
//--------------------------------------------------

class Plane {

  constructor() {

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

  setup() {}

  create(cb) {

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

  setVideoSize() {

    // videoのセットサイズ          
    // this.lb = new gb.LayoutBackground($('body'),$(this.video.video));
    // this.setEvents();

  }

  setTransparent(val) {

    // this.plane.material.opacity = val;

  }

  tweenTransparent(time, val) {

    // var t = time || 1.0;
    // var v = val.target || 1.0;
    // var e = val.ease || Power2.easeOut;

    // TweenMax.to(this.plane.material, t, {
    //   opacity: v,
    //   ease : e,
    // });

  }

  update() {}

  onResize() {

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

  setEvents() {

    // gb.in.rm.total += 1; // load数のtotalを計算
    $(window).on('onSection04ProductImg', this.create.bind(this, () => {
      //gb.in.rm.completed++;
    }));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Plane;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Motion_DomMotionLibs_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HoverEffectSVGArrowTop_es6__ = __webpack_require__(9);
//--------------------------------------------------
//
//  TopOpening
//
//--------------------------------------------------




class TopOpening {

  constructor() {

    this.tlMain = new TimelineMax();

    this.setup();
    // this.run();
    this.setEvents();
  }

  setup() {

    this.libs = new __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Motion_DomMotionLibs_js__["a" /* default */]();
    this.ht = new __WEBPACK_IMPORTED_MODULE_1__HoverEffectSVGArrowTop_es6__["a" /* default */]($('.section01 .next'));
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

  runTop() {

    // 右上から順に

    this.tlMain.add(() => {

      TweenMax.to($('.menuBtn01'), 1, { opacity: 1, ease: Power2.easeOut });

      this.$navItem.each((index, el) => {

        var opt = { $target: $(el), dur: 1, delay: 0.1 * index, blur: 10, blurTarget: 0, ease: Power2.easeOut };
        this.libs.blur(opt);

        TweenMax.to($(el), 1, { y: 0, opacity: 1, z: 1, ease: Power2.easeOut, delay: 0.1 * index });
      });
    }, '+=1.2').add(() => {

      var opt = { $target: this.$sideR, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);

      TweenMax.to(this.$sideR, 1, { x: 0, opacity: 1, ease: Power2.easeOut });
    }, '+=0.6').add(() => {

      var opt = { $target: this.$footerText, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);

      TweenMax.to(this.$footerText, 1, { y: 0, opacity: 1, ease: Power2.easeOut });
    }, '+=0.13').add(() => {

      var opt = { $target: this.$copy, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);

      TweenMax.to(this.$copy, 1, { y: 0, opacity: 1, ease: Power2.easeOut });
    }, '+=0.13').add(() => {

      var opt = { $target: this.$time, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);

      TweenMax.to(this.$time, 1, { y: 0, opacity: 1, ease: Power2.easeOut });
    }, '+=0.13').add(() => {

      var opt = { $target: this.$sideL, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);

      TweenMax.to(this.$sideL, 1, { x: 0, opacity: 1, ease: Power2.easeOut });
    }, '+=0.13').add(() => {

      var opt = { $target: this.$tit01, dur: 2.0, delay: 0, blur: 20, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);
      var opt = { $target: this.$tit02, dur: 1.9, delay: 0.1, blur: 20, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);
      var opt = { $target: this.$tit03, dur: 1.8, delay: 0.2, blur: 20, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);

      TweenMax.to(this.$tit01, 2.0, { y: 0, opacity: 1, ease: Power2.easeOut, delay: 0 });
      TweenMax.to(this.$tit02, 1.9, { y: 0, opacity: 1, ease: Power2.easeOut, delay: 0.1 });
      TweenMax.to(this.$tit03, 1.8, { y: 0, opacity: 1, ease: Power2.easeOut, delay: 0.2 });
    }, '+=0.13').add(() => {

      this.ht.runFirst();
      this.ht.autoArrow();
    }, '+=1.12');
  }

  runOther() {

    this.tlMain.add(() => {

      TweenMax.to($('.menuBtn01'), 1, { opacity: 1, ease: Power2.easeOut });

      this.$navItem.each((index, el) => {

        var opt = { $target: $(el), dur: 1, delay: 0.1 * index, blur: 10, blurTarget: 0, ease: Power2.easeOut };
        this.libs.blur(opt);

        TweenMax.to($(el), 1, { y: 0, opacity: 1, z: 1, ease: Power2.easeOut, delay: 0.1 * index });
      });
    }, '+=1.2').add(() => {

      var opt = { $target: this.$sideR, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);

      TweenMax.to(this.$sideR, 1, { x: 0, opacity: 1, ease: Power2.easeOut });
    }, '+=0.6').add(() => {

      var opt = { $target: this.$sideL, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);

      TweenMax.to(this.$sideL, 1, { x: 0, opacity: 1, ease: Power2.easeOut });
    }, '+=0.13')

    // フッター等は表示されないが、初期状態に戻しておく
    .add(() => {

      var opt = { $target: this.$footerText, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);

      TweenMax.to(this.$footerText, 1, { y: 0, opacity: 1, ease: Power2.easeOut });
    }).add(() => {

      var opt = { $target: this.$copy, dur: 1, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
      this.libs.blur(opt);

      TweenMax.to(this.$copy, 1, { y: 0, opacity: 1, ease: Power2.easeOut });
    });
  }

  onResize() {}

  onLoop() {}

  setEvents() {

    gb.in.r.add('Opening', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = TopOpening;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Param
//
//--------------------------------------------------

class Param {

  constructor() {

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
      tween: () => {

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

  setupData() {}

  setup() {

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

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Param;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Profiler
//
//--------------------------------------------------

class Profiler {

  constructor() {

    this.Stats;
    this.setup();
    this.setEvents();
  }

  setup() {

    // if (gb.in.conf.STATS) {

    this.Stats = new Stats();
    this.Stats.domElement.style.position = "fixed";
    this.Stats.domElement.style.left = "0px";
    this.Stats.domElement.style.top = "0px";
    document.body.appendChild(this.Stats.domElement);

    // };
  }

  update() {

    if (this.Stats) {
      this.Stats.update();
    }
  }

  setEvents() {

    gb.in.up.add('profiler', this.update.bind(this));
  }

}
/* unused harmony export default */


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Size_SizeInterviewDetail_es6__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__ = __webpack_require__(0);
//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------




class Layout {

  constructor() {

    this.setEvents();
  }

  setup() {

    // メインビジュアルの高さを合わせる
    var w = () => {
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

    this.size = new __WEBPACK_IMPORTED_MODULE_0__Size_SizeInterviewDetail_es6__["a" /* default */](); // adjust size
    this.position = new __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__["a" /* default */](); // adjust position
  }

  static run() {

    // メインビジュアルの高さを合わせる
    var w = () => {
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

    this.size = new __WEBPACK_IMPORTED_MODULE_0__Size_SizeInterviewDetail_es6__["a" /* default */](); // adjust size
    this.position = new __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__["a" /* default */](); // adjust position
  }

  setEvents() {}

  onLoad() {

    this.setup();
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Layout;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Size_SizeInterview_es6__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__ = __webpack_require__(0);
//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------




class Layout {

  constructor() {

    this.setEvents();
  }

  setup() {

    this.size = new __WEBPACK_IMPORTED_MODULE_0__Size_SizeInterview_es6__["a" /* default */](); // adjust size
    this.position = new __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__["a" /* default */](); // adjust position
  }

  static run() {

    this.size = new __WEBPACK_IMPORTED_MODULE_0__Size_SizeInterview_es6__["a" /* default */](); // adjust size
    this.position = new __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__["a" /* default */](); // adjust position
  }

  setEvents() {}

  onLoad() {

    this.setup();
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Layout;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Size_SizeInterviewDetail_es6__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__ = __webpack_require__(0);
//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------




class Layout {

  constructor() {

    this.setEvents();
  }

  setup() {

    this.size = new __WEBPACK_IMPORTED_MODULE_0__Size_SizeInterviewDetail_es6__["a" /* default */](); // adjust size

    this.position = new __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__["a" /* default */](); // adjust position
  }

  static run() {

    this.size = new __WEBPACK_IMPORTED_MODULE_0__Size_SizeInterviewDetail_es6__["a" /* default */](); // adjust size

    this.position = new __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__["a" /* default */](); // adjust position
  }

  setEvents() {}

  onLoad() {

    this.setup();
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Layout;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Size_SizeMovie_es6__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__ = __webpack_require__(0);
//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------




class Layout {

  constructor() {

    this.setEvents();
  }

  setup() {

    // sp
    // 背景の高さを合わせる
    var h = () => {

      var H = $('.section02').height();
      if (gb.in.u.isResSP) $('#bgWrap').css('height', H);else $('#bgWrap').css('height', '100%');
    };
    h();
    gb.in.r.add('h', h);

    this.size = new __WEBPACK_IMPORTED_MODULE_0__Size_SizeMovie_es6__["a" /* default */](); // adjust size
    this.position = new __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__["a" /* default */](); // adjust position
  }

  static run() {

    // sp
    // 背景の高さを合わせる
    var h = () => {

      var H = $('.section02').height();
      if (gb.in.u.isResSP) $('#bgWrap').css('height', H);else $('#bgWrap').css('height', '100%');
    };
    h();
    gb.in.r.add('h', h);

    this.size = new __WEBPACK_IMPORTED_MODULE_0__Size_SizeMovie_es6__["a" /* default */](); // adjust size
    this.position = new __WEBPACK_IMPORTED_MODULE_1__Postion_Position_es6__["a" /* default */](); // adjust position
  }

  static reset() {

    this.size.scale.reset();
  }

  setEvents() {}

  onLoad() {

    this.setup();
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Layout;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------
class Scale {

  constructor() {

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

  setup() {}

  run() {

    this.W = $(window).width();
    this.iW = window.innerWidth;

    this.scale();
    this.wrap();
  }

  // 拡大
  scale() {

    // bpの場合のscale
    if (this.iW <= gb.in.conf.bp) {

      // widthからrateを計算
      // this.rate = gb.in.u.floatFormat(this.W / this.SPBaseW , 2);
      this.rate = this.W / this.SPBaseW;

      // scaleするリストをループ
      $.each(this.$targetList, (index, val) => {

        if (val.scale == 'both' || val.scale == 'spOnly') {

          TweenMax.set(val.$target, {
            width: this.SPBaseW,
            scale: this.rate,
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
      $.each(this.$targetList, (index, val) => {

        if (val.scale == 'both' || val.scale == 'pcOnly') {

          TweenMax.set(val.$target, {
            width: this.PCBaseW,
            scale: this.rate,
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
  wrap() {}

  onResize() {

    this.run();
  }

  setEvents() {

    gb.in.r.add('scale', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scale;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------
class Scale {

  constructor() {

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

  setup() {}

  run() {

    this.W = $(window).width();
    this.iW = window.innerWidth;

    this.scale();
    this.wrap();
  }

  // 拡大
  scale() {

    // bpの場合のscale
    if (this.iW <= gb.in.conf.bp) {

      // widthからrateを計算
      // this.rate = gb.in.u.floatFormat(this.W / this.SPBaseW , 2);
      this.rate = this.W / this.SPBaseW;

      // scaleするリストをループ
      $.each(this.$targetList, (index, val) => {

        if (val.scale == 'both' || val.scale == 'spOnly') {

          TweenMax.set(val.$target, {
            width: this.SPBaseW,
            scale: this.rate,
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
      $.each(this.$targetList, (index, val) => {

        if (val.scale == 'both' || val.scale == 'pcOnly') {

          TweenMax.set(val.$target, {
            width: this.PCBaseW,
            scale: this.rate,
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
  wrap() {}

  onResize() {

    this.run();
  }

  setEvents() {

    gb.in.r.add('scaleInterview', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scale;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Layout // historyも兼用
//
//--------------------------------------------------
class Scale {

  constructor() {

    this.SPBaseW = 375;
    this.PCBaseW = 1300;

    this.rate = 1;
    this.W = window.innerWidth;

    this.setup();
    this.run(); //インスタンス時に実行
    this.setEvents();
  }

  setup() {}

  run() {

    this.W = $(window).width();
    this.iW = window.innerWidth;

    this.scale();
    this.wrap();
  }

  // 拡大
  scale() {

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
  wrap() {

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

  static reset() {

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

  onResize() {

    this.run();
  }

  setEvents() {

    gb.in.r.add('scaleMovie', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scale;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------
class Scale {

  constructor() {

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

  setup() {}

  run() {

    this.W = $(window).width();
    this.iW = window.innerWidth;

    this.scale();
    this.wrap();
  }

  // 拡大
  scale() {

    // bpの場合のscale
    if (this.iW <= gb.in.conf.bp) {

      // widthからrateを計算
      // this.rate = gb.in.u.floatFormat(this.W / this.SPBaseW , 2);
      if (this.W > 375) this.W = 375;
      if (this.W < 320) this.W = 320;
      log(this.W);
      this.rate = this.W / this.SPBaseW;

      // scaleするリストをループ
      $.each(this.$targetList, (index, val) => {

        if (val.scale == 'both' || val.scale == 'spOnly') {

          TweenMax.set(val.$target, {
            scale: this.rate
          });
        };
      });
    } else {

      // widthからrateを計算
      // this.rate = gb.in.u.floatFormat(this.W / this.PCBaseW , 2);
      if (this.W > 1300) this.W = 1300;
      this.rate = this.W / this.PCBaseW;

      // scaleするリストをループ
      $.each(this.$targetList, (index, val) => {

        if (val.scale == 'both' || val.scale == 'pcOnly') {

          TweenMax.set(val.$target, {
            scale: this.rate
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
  wrap() {}

  reset() {

    $.each(this.$targetList, (index, val) => {

      TweenMax.set(val.$target, {
        scale: 1,
        'transform-origin': '0 0',
        '-webkit-transform-origin': '0 0'
      });
    });

    // イベント解除
    gb.in.r.remove('scaleTop');
  }

  onResize() {

    this.run();
  }

  setEvents() {

    gb.in.r.add('scaleTop', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scale;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scale_es6__ = __webpack_require__(62);
//--------------------------------------------------
//
//  Size
//
//--------------------------------------------------



class Size {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {

    // gb.in.u.setImgSPSize($('img')); // for sp img

    // new gb.ResponsiveFontSize($('.fontResponsive')); //レスポンシブ時フォントサイズの変更

    this.scale = new __WEBPACK_IMPORTED_MODULE_0__Scale_es6__["a" /* default */](); // resize

  }

  onResize() {

    // gb.in.u.setImgSPSize($('img')); // for sp img

  }

  setEvents() {

    // gb.in.r.add(this.onResize.bind(this));

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Size;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScaleInterview_es6__ = __webpack_require__(63);
//--------------------------------------------------
//
//  Size
//
//--------------------------------------------------



class Size {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {

    // gb.in.u.setImgSPSize($('img')); // for sp img

    // new gb.ResponsiveFontSize($('.fontResponsive')); //レスポンシブ時フォントサイズの変更

    this.scale = new __WEBPACK_IMPORTED_MODULE_0__ScaleInterview_es6__["a" /* default */](); // resize

  }

  onResize() {

    // gb.in.u.setImgSPSize($('img')); // for sp img

  }

  setEvents() {

    // gb.in.r.add(this.onResize.bind(this));

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Size;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScaleMovie_es6__ = __webpack_require__(64);
//--------------------------------------------------
//
//  Size
//
//--------------------------------------------------



class Size {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {

    // gb.in.u.setImgSPSize($('img')); // for sp img

    // new gb.ResponsiveFontSize($('.fontResponsive')); //レスポンシブ時フォントサイズの変更

    this.scale = new __WEBPACK_IMPORTED_MODULE_0__ScaleMovie_es6__["a" /* default */](); // resize

  }

  onResize() {

    // gb.in.u.setImgSPSize($('img')); // for sp img

  }

  setEvents() {

    // gb.in.r.add(this.onResize.bind(this));

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Size;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Alert
//
//--------------------------------------------------

// 500px以下になったら表示
//   時計count
//   canvas表示

class Alert {

  constructor() {

    this.$target = $('#alert');
    this.$h01 = this.$target.find('.h01');
    this.$h02 = this.$target.find('.h02');
    this.$m01 = this.$target.find('.m01');
    this.$m02 = this.$target.find('.m02');

    this.isAlert = gb.in.r.ws.h < 500 ? true : false;

    this.setup();
    if (gb.in.u.isPC) this.setEvents();
  }

  setup() {}

  update() {

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

  run() {}

  onResize() {

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

  setEvents() {

    gb.in.r.add('alert', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Alert;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  BgVideoTile
//
//--------------------------------------------------

class BgVideoTile {

  constructor(param) {

    this.setup();
    this.setEvents();
  }

  setup() {

    var id = 'UAWcs5H-qgQ';

    $('.videoTile').each(function (index, el) {

      var i = gb.in.u.add0(index + 1);
      // if (index > 8) return;

      gb.in.youtube.createIframe('videoTile' + i, id);
    });
  }

  setEvents() {}

}
/* unused harmony export default */


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Motion_DomMotionLibs_js__ = __webpack_require__(2);
//--------------------------------------------------
//
//  InertiaScroll sss
//
//--------------------------------------------------



class InertiaScroll {

  constructor() {

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

    setTimeout(() => {

      if (gb.in.u.isResSP) return;

      $(window).scrollTop(0);
      TweenMax.set(this.$wrapper, { y: 0 });
      this.setup();
      this.ready();
      // this.onResize();
      this.setEvents();
    }, 100);
  }

  setup() {

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

  ready() {

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

    this.libs = new __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Motion_DomMotionLibs_js__["a" /* default */]();

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

  run() {

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

  showContents() {

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

  onResize() {

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

  onBlur() {

    gb.in.s.STAmount = 0;
  }

  reset() {

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

  resetInertia() {

    this.$wrapper.removeClass('is-fixed');
    TweenMax.set(this.$wrapper, { y: 0, x: 0 });
    $('body').css('height', '100%');
  }

  setEvents() {

    gb.in.up.add('InertiaScroll', this.run.bind(this));
    gb.in.r.add('InertiaScroll', this.onResize.bind(this));
    // $(window).on('blur', this.onBlur.bind(this));

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = InertiaScroll;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Motion_DomMotionLibs_js__ = __webpack_require__(2);
//--------------------------------------------------
//
//  InertiaScroll sss
//
//--------------------------------------------------



class InertiaScroll {

  constructor() {

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

    setTimeout(() => {

      if (gb.in.u.isResSP) return;

      $(window).scrollTop(0);
      TweenMax.set(this.$wrapper, { y: 0 });
      this.setup();
      this.ready();
      // this.onResize();
      this.setEvents();
    }, 100);
  }

  setup() {

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

  ready() {

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

    this.libs = new __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Motion_DomMotionLibs_js__["a" /* default */]();

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

  run() {

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

  showContents() {

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

  onResize() {

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

  onBlur() {

    gb.in.s.STAmount = 0;
  }

  reset() {

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

  resetInertia() {

    this.$wrapper.removeClass('is-fixed');
    TweenMax.set(this.$wrapper, { y: 0, x: 0 });
    $('body').css('height', '100%');
  }

  setEvents() {

    gb.in.up.add('InertiaScroll', this.run.bind(this));
    gb.in.r.add('InertiaScroll', this.onResize.bind(this));
    // $(window).on('blur', this.onBlur.bind(this));

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = InertiaScroll;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Motion_DomMotionLibs_js__ = __webpack_require__(2);
//--------------------------------------------------
//
//  InertiaScroll sss
//
//--------------------------------------------------



class InertiaScroll {

  constructor() {

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

    setTimeout(() => {

      if (gb.in.u.isResSP) return;

      $(window).scrollTop(0);
      TweenMax.set(this.$wrapper, { y: 0 });
      this.setup();
      this.ready();
      // this.onResize();
      this.setEvents();
    }, 100);
  }

  setup() {

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

  ready() {

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

    this.libs = new __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Motion_DomMotionLibs_js__["a" /* default */]();

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

  run() {

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

  showContents() {

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

  onResize() {

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

  onBlur() {

    gb.in.s.STAmount = 0;
  }

  reset() {

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

  resetInertia() {

    this.$wrapper.removeClass('is-fixed');
    TweenMax.set(this.$wrapper, { y: 0, x: 0 });
    $('body').css('height', '100%');
  }

  setEvents() {

    gb.in.up.add('InertiaScroll', this.run.bind(this));
    gb.in.r.add('InertiaScroll', this.onResize.bind(this));
    // $(window).on('blur', this.onBlur.bind(this));

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = InertiaScroll;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Motion_DomMotionLibs_js__ = __webpack_require__(2);
//--------------------------------------------------
//
//  InertiaScroll sss
//
//--------------------------------------------------



class InertiaScroll {

  constructor() {

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

    setTimeout(() => {

      if (gb.in.u.isResSP) return;

      $(window).scrollTop(0);
      TweenMax.set(this.$wrapper, { y: 0 });
      this.setup();
      this.ready();
      // this.onResize();
      this.setEvents();
    }, 100);
  }

  setup() {

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

  ready() {

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

    this.libs = new __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Motion_DomMotionLibs_js__["a" /* default */]();

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

  run() {

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

  showContents() {

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
      }, '-=0.5').add(() => {

        var opt = { $target: this.$text03, dur: 1.6, delay: 0, blur: 10, blurTarget: 0, ease: Power2.easeOut };
        this.libs.blur(opt);

        TweenMax.to(this.$text03, 1.6, { y: 0, z: 1, opacity: 1, ease: Power2.easeOut });
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

  numContents() {

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

  onScroll() {

    this.numContents();
  }

  onResize() {

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

  onBlur() {

    gb.in.s.STAmount = 0;
  }

  reset() {

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

  resetInertia() {

    this.$wrapper.removeClass('is-fixed');
    TweenMax.set(this.$wrapper, { y: 0, x: 0 });
    $('body').css('height', '100%');
  }

  setEvents() {

    gb.in.up.add('InertiaScroll', this.run.bind(this));
    gb.in.r.add('InertiaScroll', this.onResize.bind(this));
    gb.in.s.add('InertiaScroll', this.onScroll.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = InertiaScroll;


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Nav
//
//--------------------------------------------------

class Nav {

  constructor(param) {

    this.isLock = gb.in.u.isResSP ? false : true;

    this.setup();
    this.setEvents();
  }

  setup() {}

  run() {}

  // ページから離れるとき
  outPage() {

    if (gb.in.u.isResPC) {

      // nav barも
      TweenMax.to($('#nav .bar'), 0.75, { x: 120, ease: Expo.easeInOut });
    }
  }

  inPage() {

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

  onResize() {

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

  setEvents() {

    gb.in.r.add('Nav', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Nav;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__YoutubeForSec02_es6__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compornents_StaffCredit_es6__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compornents_MenuBtnClose_es6__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parts_VolumeBar_es6__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Sec02VideoSPModal_es6__ = __webpack_require__(77);
//--------------------------------------------------
//
//  Sec02Video
//
//--------------------------------------------------







class Sec02Video {

  constructor(id, videoID) {

    this.isPlaying = false;
    this.defZindex = 0;

    this.isResize = gb.in.u.isResPC ? true : false;

    this.setup(id, videoID);
    this.setEvents();
  }

  setup() {

    // video UI���󥹥��󥹻�
    // pc�ΤȤ��ȡ�sp�ΤȤ��������������䤨��
    if (gb.in.u.isPC) {
      this.video = new __WEBPACK_IMPORTED_MODULE_0__YoutubeForSec02_es6__["a" /* default */]('sec02Video', gb.in.conf.youtubeID02);
    } else {
      this.video = new __WEBPACK_IMPORTED_MODULE_0__YoutubeForSec02_es6__["a" /* default */]('sec02VideoForSP', gb.in.conf.youtubeID02);
      new __WEBPACK_IMPORTED_MODULE_4__Sec02VideoSPModal_es6__["a" /* default */]($('.play'), $('.sec02VideoForSPWrap'), $('.sec02VideoForSPWrap'));
    }

    // staff creditUI ���󥹥��󥹻�
    this.staffCredit = new __WEBPACK_IMPORTED_MODULE_1__compornents_StaffCredit_es6__["a" /* default */]($('.videoUI .credit'), $('.videoUI .menuBtn'), $('.videoUI .creditWrap'));
    this.menuBtn = new __WEBPACK_IMPORTED_MODULE_2__compornents_MenuBtnClose_es6__["a" /* default */]($('.videoUI .menuBtn'), '02');

    gb.in.volumeBar = new __WEBPACK_IMPORTED_MODULE_3__parts_VolumeBar_es6__["a" /* default */]();
  }

  onPlay() {

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

  onStop() {

    if (!this.isPlaying) return;
    this.isPlaying = false;

    // UI wrap����ʾ
    $('.videoUI').hide();

    // myminute ����
    TweenMax.to($('#header .subTit'), 0.6, { // header subTit �L��
      y: -60,
      opacity: 0,
      ease: Power3.easeOut,
      onComplete: () => {
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
      onComplete: () => {
        TweenMax.set($('#sec02VideoWrap'), { width: '0%' });
      }
    });

    gb.in.Sec02Bg.play();
  }

  onResize() {

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

  removeEvents() {

    // play�ܥ�����Ѻ������
    $('.section02 .play').off('click');
    // �ӻ�stop�ܥ��� ���٥���
    $('.section02 .stopWrap').off('click');
    gb.in.r.remove('sec02Video');

    gb.in.up.remove('Sec02Video');
    gb.in.up.remove('Sec02VideoMouse');

    this.video.removeEvents();
  }

  setEvents() {

    // play�ܥ�����Ѻ������
    $('.section02 .play').on('click', this.onPlay.bind(this));

    // �ӻ�stop�ܥ��� ���٥���
    $('.section02 .stopWrap').on('click', this.onStop.bind(this));

    gb.in.r.add('sec02Video', this.onResize.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sec02Video;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Modal
//
//--------------------------------------------------

class Modal {

  constructor($btn, $close, $contents) {

    this.$btn = $btn;
    this.$close = $close;
    this.$contents = $contents;

    this.setEvents();
    this.setup();
  }

  setup() {}

  toggle() {

    if (this.$btn.hasClass('on')) {

      this.hide();
    } else {

      this.show();
    };

    this.$btn.toggleClass('on');
  }

  show() {

    var H = $('.section02').height();
    this.$contents.css('height', H);
    this.$contents.find('.inner').css('height', gb.in.r.ws.h / gb.in.Layout.size.scale.rate);

    // ??????ʾ
    this.$contents.show();

    this.$contents.find('#sec02VideoForSP').adjustH();
  }

  hide() {

    // ?????????
    this.$contents.hide();

    if (gb.in.sec02Video.video.isFirstTouch) {
      gb.in.sec02Video.video.player.pauseVideo();
    }

    log(gb.in.sec02Video.video.status, window.YT.PlayerState.PLAYING, gb.in.sec02Video.video.status == window.YT.PlayerState.PLAYING, gb.in.sec02Video.video.isFirstTouch);
  }

  onResize() {}

  setEvents() {

    this.$btn.on('click', this.show.bind(this));
    this.$close.on('click', this.hide.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Modal;


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Effects_03_effects_HoverEffectBack_es6__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parts_PageScroll_es6__ = __webpack_require__(4);
//--------------------------------------------------
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




class SideR {

  constructor(param) {

    this.cur = -1;
    this.$cur = $('#sideR .indicator .current');

    this.$pageName = $('#sideR .tit');

    this.$next = $('#sideR .next');
    this.$back = $('#sideR .back');

    this.setup();
    this.setEvents();
  }

  setup() {

    new __WEBPACK_IMPORTED_MODULE_0__Effects_03_effects_HoverEffectBack_es6__["a" /* default */]($('#sideR .back'));
  }

  run() {

    this.changeCur();
    this.changePageName();
    this.changeNext();
  }

  // ページから離れるとき
  outNum() {

    if (gb.in.u.isResSP) return;

    TweenMax.to(this.$cur, 0.9, { top: -20, opacity: 0,
      ease: Power4.easeOut,
      onComplete: () => {
        TweenMax.set(this.$cur, { top: 10, opacity: 0 });
      }
    });
  }

  // ページへ入るとき
  inNum() {

    if (gb.in.u.isResSP) return;

    this.changeNum();
  }

  changeNum() {

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
  outPageName() {

    TweenMax.to(this.$pageName, 0.9, { x: 100, rotationZ: -90, opacity: 0, ease: Power3.easeOut });
  }

  // ページへ入るとき
  inPageName() {

    this.changePageName();
  }

  changePageName() {

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
  outNext() {

    TweenMax.to(this.$next, 0.9, { x: 100, opacity: 0, ease: Power3.easeOut }); //sideR next
    TweenMax.to(this.$back, 0.9, { x: 120, opacity: 0, ease: Power3.easeOut }); //sideR back

    TweenMax.to($('#sideL .sns.pc'), 0.9, { left: -10, opacity: 0, ease: Power3.easeOut }); // sideL sns pc
  }

  // ページへ入るとき
  inNext() {

    this.changeNext();
  }

  changeNext() {

    var id = gb.in.pjax.id;

    switch (id) {

      case 'top':

        this.$next.hide();
        TweenMax.to($('#sideL .sns.pc'), 0.6, { left: 40, opacity: 1, delay: 1.3, ease: Power3.easeOut });

        TweenMax.to($('#header .subTit'), 0.6, { // header subTit 隠す
          y: -60,
          opacity: 0,
          ease: Power3.easeOut,
          onComplete: () => {
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
          onComplete: () => {
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

        new __WEBPACK_IMPORTED_MODULE_1__parts_PageScroll_es6__["a" /* default */]();

        break;

      case 'history':

        this.$next.find('.text').text('SCROLL');
        this.$next.parent().attr({ 'href': '#contentsStart' });
        this.$next.show();

        TweenMax.set($('#header .subTit'), { 'display': 'block' }); // header subTit
        TweenMax.to($('#header .subTit'), 0.6, { y: 0, opacity: 1, ease: Power3.easeOut }); // header subTit

        new __WEBPACK_IMPORTED_MODULE_1__parts_PageScroll_es6__["a" /* default */]();

        break;

    }

    TweenMax.to(this.$next, 0.6, { x: 0, opacity: 1, ease: Power3.easeOut });
  }

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SideR;


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SwipeForSlider_es6__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Effects_03_effects_HoverEffectSliderArrow_es6__ = __webpack_require__(42);
//--------------------------------------------------
//
//  Slider
//
//--------------------------------------------------




class Slider {

  constructor($target) {

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

  setup() {

    // this.switchDetails();

    this.s = new __WEBPACK_IMPORTED_MODULE_0__SwipeForSlider_es6__["a" /* default */]();
    this.s.onNext = this.right.bind(this);
    this.s.onPrev = this.left.bind(this);

    new __WEBPACK_IMPORTED_MODULE_1__Effects_03_effects_HoverEffectSliderArrow_es6__["a" /* default */]($('.arrowWrap .arrowR.pc'), 'right');
    this.al = new __WEBPACK_IMPORTED_MODULE_1__Effects_03_effects_HoverEffectSliderArrow_es6__["a" /* default */]($('.arrowWrap .arrowL.pc'), 'left');
    this.al.onEnter($('.arrowWrap .arrowL.pc'));
    this.al.onLeave($('.arrowWrap .arrowL.pc'));
  }

  // 右へ
  right() {

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
  left() {

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
  rightByIndicator() {

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
  leftByIndicator() {

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

  swicthArrow() {

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

  switchDetails() {

    var t = this.textList[this.current];
    var p = this.priceList[this.current];

    this.$text.html(t);
    this.$price.text(p);
  }

  switchIndicator(prev) {

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

  calculateOrder(dir) {

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

  autoSwicth() {

    if (!this.isAutoStop) this.right();

    setTimeout(() => {

      this.autoSwicth();
    }, 5000);
  }

  onIndicator(that) {

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

  onEnter() {

    this.isAutoStop = true;
  }

  onLeave() {

    this.isAutoStop = false;
  }

  setEvents() {

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slider;


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Slider sss
//
//--------------------------------------------------

class Slider {

  constructor($wrap) {

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

  setup() {}

  // this.switchDetails();

  // this.s = new Swipe();
  // this.s.onNext = this.right.bind(this);
  // this.s.onPrev = this.left.bind(this);

  // 右へ
  right() {

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
  left() {

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

  swicthArrow() {

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

  switchDetails() {

    var t = this.textList[this.current];
    var p = this.priceList[this.current];

    this.$text.html(t);
    this.$price.text(p);
  }

  switchIndicator() {

    this.$indicator.removeClass('isActive').eq(this.current).addClass('isActive');
  }

  calculateOrder(dir) {

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

  autoSwicth() {

    this.right();

    this.Timer = setTimeout(() => {

      this.autoSwicth();
    }, 5000);
  }

  setEvents() {

    // this.$arrowL.on('click', this.left.bind(this));
    // this.$arrowR.on('click', this.right.bind(this));
    this.autoSwicth();
  }

  removeEvents() {

    clearTimeout(this.Timer);
    this.right();
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slider;


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ------------------------------------------------------------
//
//  SwipeForSlider sss
//
// ------------------------------------------------------------

class SwipeForSlider {

  constructor() {

    this.$wrap = $('.sliderWrap');

    // ---------------
    //  variable
    // ---------------

    // position
    this.sX = 0;this.mX = 0;this.eX = 0; //startX,moveX,endX
    this.dis = 0;this.minDis = 50;

    // time
    this.sT = 0;this.eT = 0;this.minT = 300; //startTime,ellapsedTime,

    this.onNext = () => {};
    this.onPrev = () => {};

    this.setup();
    this.setEvents();
  }

  setup() {}

  onTouchStart(e) {

    // targetX
    this.sX = e.originalEvent.changedTouches[0].pageX;
  }

  onTouchMove(e) {

    this.dis = this.sX - e.originalEvent.changedTouches[0].pageX;

    if (this.minDis < Math.abs(this.dis)) gb.in.u.setPrevent();
  }

  onTouchEnd(e) {

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

  setEvents() {

    var self = this;

    this.$wrap.on('touchstart.Swipe', e => {
      this.onTouchStart(e);
    });
    this.$wrap.on('touchmove.Swipe', e => {
      this.onTouchMove(e);
    });
    this.$wrap.on('touchend.Swipe', e => {
      this.onTouchEnd(e);
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SwipeForSlider;


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Layout_FullSize_es6__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display_UI_TopTime_es6__ = __webpack_require__(16);
//--------------------------------------------------
//
//  YoutubeForSec01
//
//--------------------------------------------------




class YoutubeForSec01 {

  constructor(id, videoID, videoList) {

    this.player = null;

    this.isFirst = true;
    this.isSeekLock = false;
    this.isSeekLock02 = false;

    this.setup(id, videoID, videoList);
  }

  setup(id, videoID, videoList) {

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
      var l = new __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Layout_FullSize_es6__["a" /* default */]($('#bgWrap'), $('#sec01Video'), 0, 'FullSizeSec01Video');
      l.targetDefW = 1920;
      l.targetDefH = 1080;
      l.run();
    } else {

      setTimeout(this.setup.bind(this, id, videoID, videoList), 100);
    }
  }

  onReady(e) {

    // �߽����Ȥ�
    e.target.setPlaybackQuality('highres');

    // this.player.playVideo();
    this.setEvents();

    // play
    gb.in.time = new __WEBPACK_IMPORTED_MODULE_1__Display_UI_TopTime_es6__["a" /* default */]();
    gb.in.sec01Video.video.playByNYTime();
  }

  onPlayerStateChange(e) {

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

  playByNYTime() {

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

  onSeek() {

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

  setEvents() {

    gb.in.up.add('YoutubeForSec01', this.onSeek.bind(this));
  }

  removeEvents() {

    gb.in.up.remove('YoutubeForSec01');
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = YoutubeForSec01;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Layout_FullSize_es6__ = __webpack_require__(5);
//--------------------------------------------------
//
//  YoutubeForSec02
//
//--------------------------------------------------



class YoutubeForSec02 {

  constructor(id, videoID) {

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

  setup(id, videoID) {

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

    var l = new __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Layout_FullSize_es6__["a" /* default */]($('#bgWrap'), $('#sec02Video'), 0, 'FullSizeSec02Video');
    l.targetDefW = 1920;
    l.targetDefH = 1080;
    l.run();
  }

  tweenVolume(e, dur = 0.6, ease = Power2.easeInOut) {

    // �����Ϥ��¤�

    var val = 0;

    if (this.isMute) val = this.volume.def;else val = 0;

    TweenMax.to(this.volume, dur, {
      val: val,
      ease: ease,
      onUpdate: e => {

        var v = e.target.val;
        this.player.setVolume(v);
      },
      onUpdateParams: ["{self}"]
    });

    // UI����
    if (this.isMute) gb.in.volumeBar.on();else gb.in.volumeBar.off();

    // mute�ե饰����
    this.isMute = !this.isMute;
  }

  seek() {

    // if (this.status !== window.YT.PlayerState.PLAYING) return;

    var now = this.player.getCurrentTime();
    var rate = now / this.dur;
    var goal = gb.in.r.ws.w * rate;

    this.cur += (goal - this.cur) * 0.1;

    // TweenMax.set($('.videoUI .indicator'), {width: gb.in.r.ws.w * rate});
    TweenMax.set($('.videoUI .indicator'), { width: this.cur });
  }

  mouse() {

    var gx = gb.in.m.x + 30;
    var gy = gb.in.m.y + -30;

    this.mx += (gx - this.mx) * this.easing;
    this.my += (gy - this.my) * this.easing;

    TweenMax.set($('.ui_close'), { x: this.mx, y: this.my });
  }

  onReady() {

    // this.player.playVideo();
    // this.player.pauseVideo();

    gb.in.rm.completed++;

    this.volume.def = this.player.getVolume();
    this.volume.val = this.volume.def;
    this.dur = this.player.getDuration();
  }

  onPlayerStateChange(e) {

    this.status = e.data;
    // �����K�ˤ����Ȥ�
    if (this.status == window.YT.PlayerState.ENDED) {
      void 0;
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

  onMouseMoveStart() {

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

  onMouseMoveEnd(flag = false) {

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

  showStop() {

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

  hideStop() {

    TweenMax.killTweensOf($('.ui_stop'));

    if (!this.isPlay) {

      TweenMax.to($('.ui_play'), 0.6, {
        opacity: 0,
        ease: Power3.easeOut,
        onComplete: () => {
          $('.ui_play').hide();
        }
      });
    } else {

      TweenMax.to($('.ui_stop'), 1, {
        opacity: 0,
        ease: Power3.easeOut,
        onComplete: () => {
          $('.ui_stop').hide();
        }
      });
    }
  }

  btnToPlay() {

    if (this.isClickLock) return;
    this.isClickLock = true;

    this.isPlay = false;

    var tl = new TimelineMax();

    // �ܥ������䤨��
    TweenMax.to($('.ui_stop'), 0.5, {
      opacity: 0,
      scale: 1.5,
      ease: Power3.easeOut,
      onComplete: () => {
        $('.ui_stop').hide();
        this.isClickLock02 = false;
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

  btnToStop() {

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
      onComplete: () => {
        $('.ui_play').hide();
        this.isClickLock = false;
      }
    });

    // �ӻ��򥹥��`��
    this.player.playVideo();
  }

  removeEvents() {

    gb.in.m.remove('onMouseMoveStart');
    gb.in.m.remove('onMouseMoveEn');

    // �����֤Ȥ᤿�ꡢС����������
    $('.volume').off('click');

    // play�ܥ������Ф��椨
    $('.ui_stop').off('click');
    $('.ui_play').off('click');

    $('.bgOverlay').off('click');
  }

  setEvents() {

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = YoutubeForSec02;


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuBtn_es6__ = __webpack_require__(85);
//--------------------------------------------------
//
//  Menu
//
//--------------------------------------------------



class Menu {

  constructor($btn, $close, $contents) {

    gb.in.menuBtn01 = new __WEBPACK_IMPORTED_MODULE_0__MenuBtn_es6__["a" /* default */]($('#header'), '01');

    this.$btn = $('.menuBtn01');
    // this.$close = $close;
    this.$menu = $('#menu');

    this.W = $(window).width(), this.H = $(window).height();

    this.isLock = gb.in.u.isResPC ? true : false;

    this.isOpen = false;

    this.setEvents();
    this.setup();
  }

  setup() {

    // スクロールで動ける範囲
    this.cur = 0;
    this.min = 0;
    this.max = 0;
  }

  toggle() {

    if (this.$btn.hasClass('on')) {
      this.isOpen = false;

      this.close();
    } else {
      this.isOpen = true;

      this.open();
    };

    this.$btn.toggleClass('on');
  }

  open() {

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
        onComplete: () => {}
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
        onComplete: () => {

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

  close() {

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
        onComplete: () => {

          // menu非表示
          TweenMax.set(this.$menu, {
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
        onComplete: () => {
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
        onComplete: () => {

          // menu非表示
          TweenMax.set(this.$menu, {
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

  onResize() {

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

  onWheel(e, delta, deltaX, deltaY) {

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

  reset() {

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

  switchActive(num) {

    $('#menu .menuList .item').removeClass('isActive');

    if (num == -1) return;
    $('#menu .menuList .item').eq(num).addClass('isActive');
  }

  setEvents() {

    var self = this;

    this.$btn.on('click', this.toggle.bind(this));
    // this.$close.on('click', this.close.call(self);});

    gb.in.r.add('menu', this.onResize.bind(this));

    // マウスホイールで移動
    this.$menu.on('mousewheel', function (e, delta, deltaX, deltaY) {
      self.onWheel.call(self, e, delta, deltaX, deltaY);
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  MenuBtn
//
//--------------------------------------------------

class MenuBtn {

  constructor($wrap, id, closeFlag = false) {

    this.$wrap = $wrap;
    this.id = id;

    this.closeFlag = closeFlag;

    this.isStop = true;
    this.isOpen = false;

    this.onClose = () => {};

    this.setup();
  }

  setup(param) {

    if (!this.closeFlag) {

      this.dom = '<div class="icon-animation type-4 menuBtn' + this.id + '">' + '<span class="top"></span>' + '<span class="middle"></span>' + '<span class="bottom"></span>' + '</div>';
    } else {

      this.dom = '<div class="icon-animation type-4 menuBtn' + this.id + ' is-open">' + '<span class="top"></span>' + '<span class="middle"></span>' + '<span class="bottom"></span>' + '</div>';
    }

    this.$wrap.append(this.dom);
    this.$target = $('.menuBtn' + this.id);

    this.setEvents();
  }

  toggle() {

    // if (this.isStop) return;

    // 閉じる
    this.$target.toggleClass('is-open');

    // 開いていたらコールバック処理
    if (this.isOpen) this.onClose();

    // flag変更
    this.isOpen = !this.isOpen;
  }

  close() {

    // 閉じる
    this.$target.removeClass('is-open');

    // flag変更
    this.isOpen = false;
  }

  setEvents() {

    this.$target.on('click', this.toggle.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuBtn;


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  MenuBtnClose
//
//--------------------------------------------------

class MenuBtnClose {

  constructor($wrap, id) {

    this.$wrap = $wrap;
    this.id = id;

    this.isStop = true;
    this.isOpen = false;

    this.onClose = () => {};

    this.setup();
  }

  setup(param) {

    this.dom = '<div class="icon-animation type-4 menuBtn' + this.id + ' is-open">' + '<span class="top"></span>' + '<span class="middle"></span>' + '<span class="bottom"></span>' + '</div>';

    this.$wrap.append(this.dom);
    this.$target = $('.menuBtn' + this.id);

    this.setEvents();
  }

  run() {}

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuBtnClose;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  StaffCredit
//
//--------------------------------------------------
class StaffCredit {

  constructor($btn, $close, $contents) {

    this.$btn = $btn;
    this.$close = $close;
    this.$contents = $contents;

    this.setEvents();
    this.setup();
  }

  setup() {}

  toggle() {

    if (this.$btn.hasClass('on')) {

      this.close();
    } else {

      this.open();
    };

    this.$btn.toggleClass('on');
  }

  open() {

    $('#sideR').css('z-index', 3);

    // モーダル表示
    this.$contents.show();

    gb.in.sec02Video.video.player.pauseVideo();
    gb.in.sec02Video.isPlaying = false;
    TweenMax.to($('.ui_close'), 0.3, { opacity: 0 });
  }

  close() {

    $('#sideR').css('z-index', 7);

    // モーダル非表示
    this.$contents.hide();

    gb.in.sec02Video.video.player.playVideo();
    gb.in.sec02Video.isPlaying = true;
    TweenMax.to($('.ui_close'), 0.3, { opacity: 1 });
  }

  onResize() {

    // this.getWindowSize();

  }

  setEvents() {

    this.$btn.on('click', this.open.bind(this));
    this.$close.on('click', this.close.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = StaffCredit;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  VolumeBar
//
//--------------------------------------------------

class VolumeBar {

  constructor() {

    this.$target = $('.volume .bar');

    this.setup();
    this.setEvents();
  }

  setup() {}

  on() {

    this.$target.each(function (index, el) {

      // 2にセット
      TweenMax.set($(this), {
        height: 2,
        ease: Power3.easeInOut
      });

      // 動き
      TweenMax.delayedCall(0.12 * index, () => {

        var tl = new TimelineMax({ repeat: -1 });

        tl.to($(this), 0.8, {
          height: 18,
          ease: Power2.easeInOut
        }).to($(this), 0.7, {
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

  off() {

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

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = VolumeBar;


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Year
//
//--------------------------------------------------

class Year {

  constructor($target, showST, hideST, startDate, targetDate, right) {

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

  setup() {

    if (this.right == 'right') {

      TweenMax.set(this.$target, { opacity: 0, x: 200, y: 100 });
    } else {

      TweenMax.set(this.$target, { opacity: 0, x: -200, y: 100 });
    }
  }

  run() {}

  onScroll() {

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
      .add(() => {

        var tl = new TimelineMax();

        tl.to(this.$target, 3.0, {
          opacity: 1,
          x: 0,
          y: 0,
          ease: Power4.easeOut
        });
      })
      // count up
      .add(() => {

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

  setEvents() {

    gb.in.s.add('Countup', this.onScroll.bind(this));
  }

}
/* unused harmony export default */


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  YearBig
//
//--------------------------------------------------

class YearBig {

  constructor($target, showST, hideST, startDate, targetDate, right) {

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

  setup() {

    // TweenMax.set(this.$target, {opacity: 0,x: -200,y: 100});

  }

  run() {}

  onScroll() {

    // log(gb.in.s.sb);
    // log(gb.in.s.st);

    if (gb.in.u.isResSP) {

      if (gb.in.s.sb > this.showST && !this.isShow) {
        this.isShow = true;

        var tl = new TimelineMax();

        tl.add(() => {

          var tl = new TimelineMax();

          tl.to($('.yearMid'), 3.0, {
            opacity: 1,
            ease: Power4.easeOut
          });
        }, '+=0.0')
        // },'+=1.5')
        // count up
        .add(() => {

          TweenMax.to(this, 3, {
            startDate: this.targetDate,
            ease: Power2.easeOut,
            onUpdate: () => {

              var d = Math.floor(this.startDate);
              this.$target.text(d);
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
        .add(() => {

          // gb.in.u.disableScroll();

          // var $target = $('.year04');
          // var adjust = 67 / gb.in.Layout.size.scale.rate;
          // var pos = $target.offset().top + ($target.height()/2) / gb.in.Layout.size.scale.rate - gb.in.r.ws.h/2 / gb.in.Layout.size.scale.rate + adjust;
          // TweenMax.to($('body,html'), 1.5, {scrollTop: pos,ease: Expo.easeOut});

        })
        // 横からふわっと
        .add(() => {

          var tl = new TimelineMax();

          tl.to($('.yearMid'), 3.0, {
            opacity: 1,
            ease: Power4.easeOut
          });
        }, '+=0.0')
        // },'+=1.5')
        // count up
        .add(() => {

          TweenMax.to(this, 3, {
            startDate: this.targetDate,
            ease: Power2.easeOut,
            onUpdate: () => {

              var d = Math.floor(this.startDate);
              this.$target.text(d);
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

  setEvents() {

    gb.in.s.add('YearBig', this.onScroll.bind(this));
  }

  removeEvents() {

    gb.in.s.remove('YearBig');
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = YearBig;


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Year_es6__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__YearBig_es6__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Move2D_es6__ = __webpack_require__(18);
//--------------------------------------------------
//
//  YearMgr
//
//--------------------------------------------------





class YearMgr {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {

    // スクロールトップに
    setTimeout(() => {

      $(window).scrollTop(0);

      // new Year($('.year01'),1200,2200,2016,1940,'left')
      // new Year($('.year02'),2500,0,2016,1980,'right')
      // new Year($('.year03'),4987,0,1940,2016,'left')

      if (gb.in.u.isResSP) new __WEBPACK_IMPORTED_MODULE_1__YearBig_es6__["a" /* default */]($('.year04 span'), 2740 * gb.in.Layout.size.scale.rate, 0, 1914, 2016);else new __WEBPACK_IMPORTED_MODULE_1__YearBig_es6__["a" /* default */]($('.year04 span'), 3100 * gb.in.Layout.size.scale.rate, 0, 1914, 2016);

      // Move2D
      gb.in.move2DList = [];
      $('.move2D').each(function (index, el) {

        gb.in.move2DList.push(new __WEBPACK_IMPORTED_MODULE_2__Move2D_es6__["a" /* default */]($(this)));
      });
    }, 500);

    // big yearの位置調整
    var yearW = () => {

      var w = $('.year04 span').width() * gb.in.Layout.size.scale.rate;
      $('.year04').css('padding-left', (gb.in.r.ws.w - w) / 2 / gb.in.Layout.size.scale.rate);
    };
    yearW();
    gb.in.r.add('yearW', yearW);
  }

  run() {}

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = YearMgr;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  HoverCardItem
//
//--------------------------------------------------

class HoverCardItem {

  constructor($target) {

    this.$target = $target;

    this.$targets = $('#bgWrap .sec03 .block .item');

    // motion
    this.tl = new TimelineMax();

    this.tlOnLeave = new TimelineMax();

    this.rectBgOp = gb.in.u.isIE ? 0.35 : 1;

    this.setup();
    this.setEvents();
  }

  setup() {

    TweenMax.set(this.$target.find('.titWrap02 .innerWrap'), { width: 3, height: 0 });
    TweenMax.set(this.$target.find('.titWrap02 .readWrap'), { width: 3, height: 0 });
    TweenMax.set(this.$target.find('.titWrap02 .position, .titWrap02 .name, .titWrap02 span'), { opacity: 0, x: -20 });
    // TweenMax.set(this.$target.find('.titWrap02 .read path,.titWrap02 .read rect'), {drawSVG: '0% 100%',fill: 'none',stroke: '#fff'});
    TweenMax.set(this.$target.find('.titWrap02 .read svg'), { opacity: 0, x: -20 });
  }

  onRunReady($that) {

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

  onEnter(that) {

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
      onStart: () => {
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

  onLeave(that) {

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
      onStart: () => {

        TweenMax.set(this.$target, { 'z-index': 1 });

        // // �ۥЩ`�����Ƥ������Ϥϡ������ǄI����ֹ����
        if (gb.in.interviewCardHover) {

          log(1);

          this.tlLeave.pause();

          var tl03 = new TimelineMax();

          tl03.to($(that).find('.titWrap02 .innerWrap'), 0.2, {
            width: 3,
            ease: Power4.easeOut
          }).to($(that).find('.titWrap02 .innerWrap'), 0.2, {
            height: 0,
            ease: Power4.easeOut,
            onComplete: () => {
              this.setup();
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
          .to(this.$targets, 0.5, {
            scale: 1,
            ease: Power4.easeOut
          })
          // overlay���Ȥ�
          .to(this.$targets.find('.overlay'), 0.5, {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            ease: Power4.easeOut
          }, '-=0.5')
          // box�ڤ�tit������
          .to(this.$targets.find('.titWrap'), 0.5, {
            opacity: 1,
            y: 0,
            ease: Power4.easeOut
          }, '-=0.5')
          // rectbg����
          .to(this.$targets.find('.rectBg'), 0.5, {
            opacity: this.rectBgOp,
            ease: Power4.easeOut,
            onComplete: () => {
              this.setup();
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

  setEvents() {

    var self = this;

    this.$target.on('mouseenter', function (e) {
      self.onEnter.call(self, this);
    });
    this.$target.on('mouseleave', function (e) {
      self.onLeave.call(self, this);
    });
  }

  removeEvents() {

    this.$target.off('mouseenter');
    this.$target.off('mouseleave');
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = HoverCardItem;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Layout_FullSizeByScaleInterviewIndex_es6__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HoverCardItem_es6__ = __webpack_require__(92);
//--------------------------------------------------
//
//  InterviewTopEf
//
//--------------------------------------------------




class InterviewTopEf {

  constructor($target) {

    this.$target = $target;

    gb.in.interviewCardHover = this.isHover = false;

    this.setup();
    this.setEvents();
  }

  setup() {

    // layout
    // topの中央コンテンツを上下中央で小さくする
    var l = new __WEBPACK_IMPORTED_MODULE_0__MyLibs_Display_Layout_FullSizeByScaleInterviewIndex_es6__["a" /* default */]($('#bgWrap'), $('#bgWrap .sec03 .blockWrap'), 1);
    l.targetDefW = gb.in.conf.W;
    l.targetDefH = gb.in.conf.H;
    l.run();
    l.onResize();

    // effects
    new __WEBPACK_IMPORTED_MODULE_1__HoverCardItem_es6__["a" /* default */]($('#bgWrap .sec03 .block .item').eq(0));
    new __WEBPACK_IMPORTED_MODULE_1__HoverCardItem_es6__["a" /* default */]($('#bgWrap .sec03 .block .item').eq(1));
    new __WEBPACK_IMPORTED_MODULE_1__HoverCardItem_es6__["a" /* default */]($('#bgWrap .sec03 .block .item').eq(2));
    // new HoverCardItem($('#bgWrap .sec03 .block .item').eq(1))
  }

  onEnter() {

    log('enter');
  }

  onLeave() {

    log('leave');
  }

  setEvents() {

    $('#bgWrap .sec03 .block').on('mouseenter', this.onEnter.bind(this));
    $('#bgWrap .sec03 .block').on('mouseleave', this.onLeave.bind(this));
  }

  removeEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = InterviewTopEf;


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Move3D
//
//--------------------------------------------------

class Move3D {

  constructor($target) {

    this.$target = $target;

    this.setup();
    this.setEvents();

    log('move');
  }

  setup() {}

  run() {}

  onMove() {

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

  setEvents() {

    gb.in.m.add('Move3D', this.onMove.bind(this));
  }

}
/* unused harmony export default */


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  JudgeEnvironment
//
//--------------------------------------------------

class JudgeEnvironment {

  constructor() {

    this.setup();
    this.setEvents();
  }

  setup() {

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

  onReady() {

    this.setup();
  }

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = JudgeEnvironment;


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Loader_es6__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display_UI_Sec01Video_es6__ = __webpack_require__(15);
//--------------------------------------------------
//
//  LoadMgr
//
//--------------------------------------------------




class LoadMgr {

  constructor() {}

  start() {

    // その他
    // ソーシャルスクリプトなど
    // this.snsScript();

    // this.loadYoutubeScript();

    // section02で使う大量の画像をロード // web workerなども使って
    // this.sec02Img();

    // this.webFont();

  }

  loadYoutubeScript() {

    var loader = new __WEBPACK_IMPORTED_MODULE_0__Loader_es6__["a" /* default */]();

    var len = 1;
    gb.in.rm.total += len; // load数のtotalを計算
    if (gb.in.u.isSP) gb.in.rm.completed++;

    var cb = () => {

      gb.in.rm.completed++;
    };

    loader.youtubeIframeScript(cb);
  }

  sec02Img() {

    // bgVideoTile用の連番画像の読み込み
    gb.in.loadSec02Img = this.loader = new __WEBPACK_IMPORTED_MODULE_0__Loader_es6__["a" /* default */]();

    if (gb.in.u.isPC) {
      var len = gb.in.conf.sec02ImgNum;
      gb.in.rm.total += len; // load数のtotalを計算
      var path = '/project-name/assets/resource/img/movie/bgImg/';
    } else {
      var len = 19;
      gb.in.rm.total += len; // load数のtotalを計算
      var path = '/project-name/assets/resource/img/movie/bgImgSP/';
    }

    var cb = () => {
      // gb.in.Sec02Bg.create();
    };
    var cb02 = () => {
      gb.in.rm.completed++;
    };

    // this.loader.imgSerialLoad(len,path,'tfny_',cb,cb02);
    this.loader.img(len + 1, path, 'tfny_', cb, cb02);
  }

  section04ProductShader() {

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

    var shaderSerialLoad = (len, cb) => {

      var shader,
          cnt = 0;

      var load = i => {
        shader = new shaderLoadList[i](comp);
        shaders.push(shader);
      };

      var comp = function () {
        cnt++;
        gb.in.rm.completed++;
        if (cnt == len) cb(shaders);else load(cnt);
      };

      load(cnt);
    };

    shaderSerialLoad(shaderLoadList.length, shaders => {

      this.shaders = shaders;
      this.section04ProductImg();
    });
  }

  section04ProductImg() {

    var textureList = ['/project-name/assets/resource/img/product/tiffany_hand1.jpg', '/project-name/assets/resource/img/product/brown.png', '/project-name/assets/resource/img/product/blue.png', '/project-name/assets/resource/img/product/white.png', '/project-name/assets/resource/img/product/tiffanyblue.png', '/project-name/assets/resource/img/product/pink.png'];
    this.textures = [];

    var len = textureList.length;
    gb.in.rm.total += len; // load数のtotalを計算

    var textureSerialLoad = (len, cb) => {

      var texture,
          cnt = 0;

      var load = i => {
        texture = THREE.ImageUtils.loadTexture(textureList[i], null, comp);
        this.textures.push(texture);
      };

      var comp = function () {
        cnt++;
        gb.in.rm.completed++;
        if (cnt == len) cb();else load(cnt);
      };

      load(cnt);
    };

    textureSerialLoad(textureList.length, () => {
      $(window).trigger('onSection04ProductImg');
    });
  }

  webFont() {

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
      active: function () {

        log('webFont!!!!');
        gb.in.conf.webFontLoaded = true;
      }
    };

    var loader = new __WEBPACK_IMPORTED_MODULE_0__Loader_es6__["a" /* default */]();
    loader.webFont(config);
  }

  onEnd() {}

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoadMgr;


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Func_Loader_es6__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display_DisplayPjaxPage_es6__ = __webpack_require__(31);
//--------------------------------------------------
//
//  pjax sss
//
//--------------------------------------------------




class Pjax {

  constructor() {

    this.id = null;
    this.e = null;
    // this.nextLink = null;
    // this.prevLink = this.getLink();

    this.isPjaxLock = true;

    this.setEvents();
  }

  setup() {

    this.id = $('.section').data('id');

    // 背景色の変更
    if (this.id == 'interview_detail' || this.id == 'history') $('html').css('background-color', '#fff');else $('html').css('background-color', '#000');
  }

  getLink(url) {

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

  setID() {

    this.id = $('.section').data('id');

    // bodyのpageクラスを削除
    $('body').removeClass('top movie interview interview_detail history');

    // 新しいページのクラスをつける
    $('body').addClass(this.id);
  }

  onClick(e) {

    var href = $(e.currentTarget).attr('href');
    this.e = e;
    this.nextLink = href;

    $(document).trigger('fetch');
  }

  onStart(e, that) {

    if (this.isPjaxLock) return;
    this.isPjaxLock = true;

    // クリック無効
    e.preventDefault();
    var href = $(that).attr('href');

    log('fecth');

    __WEBPACK_IMPORTED_MODULE_1__Display_DisplayPjaxPage_es6__["a" /* default */].outPageBeforeEf(href);

    // ページ遷移エフェクト コールバック登録
    gb.in.pageTransitionEffect.cb = () => {

      __WEBPACK_IMPORTED_MODULE_1__Display_DisplayPjaxPage_es6__["a" /* default */].outPageAfterEf();

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

  onEnd() {

    log('End');
    this.setID();

    __WEBPACK_IMPORTED_MODULE_1__Display_DisplayPjaxPage_es6__["a" /* default */].inPageBeforeImgLoaded();

    // 動画のロード確認
    var l = new __WEBPACK_IMPORTED_MODULE_0__Func_Loader_es6__["a" /* default */]();
    l.ajaxImgLoad(() => {
      //画像が完全にロードされたらページ表示処理を始める

      __WEBPACK_IMPORTED_MODULE_1__Display_DisplayPjaxPage_es6__["a" /* default */].inPageAfterImgLoaded();
    });
  }

  onSend() {}

  onComplete() {}

  onPopState(e) {

    if (this.isPjaxLock) return;
    this.isPjaxLock = true;

    var href = e.target.baseURI;

    log('fecth');

    __WEBPACK_IMPORTED_MODULE_1__Display_DisplayPjaxPage_es6__["a" /* default */].outPageBeforeEf(href);

    // ページ遷移エフェクト開始
    gb.in.pageTransitionEffect.cb = () => {

      __WEBPACK_IMPORTED_MODULE_1__Display_DisplayPjaxPage_es6__["a" /* default */].outPageAfterEf();

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

  onReady() {

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
    $(document).on('pjax:popstate', e => {
      this.onPopState(e);
    });
  }

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pjax;


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  ReadyPercent
//
//--------------------------------------------------

class ReadyPercent {

  constructor() {

    this.$loading = $('#loading');
    this.$bar = $('.loadingBar');
    this.$percent = $('.loadingPercent');

    this.isLock = false;
    this.setTimeoutLock = false;

    this.setEvents();
  }

  update() {

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

      setTimeout(() => {

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

  remove() {

    TweenMax.to(this.$loading, 2.8, {
      scale: 1.2,
      opacity: 0,
      ease: Power3.easeInOut,
      onComplete: () => {
        this.$loading.remove();
      }
    });
  }

  setEvents() {

    gb.in.up.add('readyPercent', this.update.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ReadyPercent;


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  ScrollTransition
//
//--------------------------------------------------

class ScrollTransition {

  constructor($target) {

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

  setup() {}

  switch() {

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

      var pageName = Object.keys(this.pageList).filter(key => {
        return this.pageList[key] === this.current;
      })[0];

      $('.pjaxTo_' + pageName).trigger('click');

      //ホイールが0以下 かつ currentが一番最後でない かつ switch可能状態であれば
    } else if (this.STAmount < -val && this.current < this.len - 1 && this.isSwitch) {

      this.isSwitch = false;

      this.calculateOrder('next');

      var pageName = Object.keys(this.pageList).filter(key => {
        return this.pageList[key] === this.current;
      })[0];

      $('.pjaxTo_' + pageName).trigger('click');
    };
  }

  calculateOrder(dir) {

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

  onMouseWheel(e, delta, deltaX, deltaY) {

    // menuが開いているときはスクロール遷移させない
    if (gb.in.menu.isOpen) return;
    // res spのときは処理しない
    if (gb.in.u.isResSP) return;

    this.STAmount = gb.in.s.STAmount;

    this.switch();
  }

  setEvents() {

    gb.in.s.add('ScrollTransition', this.onMouseWheel.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScrollTransition;


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ------------------------------------------------------------
//
//  SwipeTransition sss
//
// ------------------------------------------------------------

class SwipeTransition {

  constructor() {

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

    this.onTouchLong = () => {};
    this.onTouchStartCB = () => {};
    this.onTouchEndCB = () => {};

    this.setup();
    this.setEvents();
  }

  setup() {}

  onTouchStart(e) {

    // targetX
    var y = e.originalEvent.changedTouches[0].pageY;
    this.sY = y;

    this.st = gb.in.s.st;
    this.sb = gb.in.s.sb;
    log('sy', y);
  }

  onTouchMove(e) {

    // targetX
    var y = e.originalEvent.changedTouches[0].pageY;
    this.mY = y;
  }

  onTouchEnd(e) {

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
        var pageName = Object.keys(this.pageList).filter(key => {
          return this.pageList[key] === this.current;
        })[0];
        $('.pjaxTo_' + pageName).trigger('click');
      } else {

        log(this.st, this.st !== 0);

        if (this.st !== 0) return;

        // 上へ
        this.calculateOrder('prev');

        var pageName = Object.keys(this.pageList).filter(key => {
          return this.pageList[key] === this.current;
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

  calculateOrder(dir) {

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

  setEvents() {

    var self = this;

    this.$startWrap.on('touchstart.SwipeTransition', e => {
      this.onTouchStart(e);
    });
    // this.$wrap.on('touchmove.SwipeTransition', (e)=>{this.onTouchMove(e);});
    this.$endWrap.on('touchend.SwipeTransition', e => {
      this.onTouchEnd(e);
    });
  }

  removeEvents() {

    var self = this;

    this.$startWrap.off('touchstart.SwipeTransition');
    // this.$wrap.off('touchmove.SwipeTransition');
    this.$endWrap.off('touchend.SwipeTransition');
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SwipeTransition;


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  Time
//
//--------------------------------------------------

class Time {

  constructor() {

    this.isState = '';
    this.stateList = ['morning', 'afternoon', 'night'];

    this.setup();
    this.setEvents();

    this.judgeState();
  }

  setup() {

    log(gb.in.u.date());
  }

  update() {

    gb.in.u.time();

    log(gb.in.u.hour, gb.in.u.minute, gb.in.u.second);
  }

  getNow() {}

  // ニューヨーク時間の取得
  getNowAtNY() {

    gb.in.u.time();
    var hour = gb.in.u.hour;
    var dis = 13; // ニューヨークとの時差

    hour = hour - dis;
    if (hour < 0) hour = 24 + hour;

    return hour;
  }

  // 朝夕夜判定
  judgeState() {

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

  setEvents() {

    // gb.in.up.add(this.update.bind(this));

  }

}
/* unused harmony export default */


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  ResponsiveSwitchImg
//
//--------------------------------------------------

class ResponsiveSwitchImg {

  constructor() {

    this.setup();
    this.run();
    this.setEvents();
  }

  setup() {

    this.isPCLock = gb.in.u.isResPC ? false : true;
    this.isSPLock = gb.in.u.isResSP ? false : true;

    this.$target = $('.responsiveImg');
  }

  run() {

    // ------------------------------------------------------------
    //  ブレイクポイントよりもsp側
    // ------------------------------------------------------------
    if (gb.in.u.isResSP && !this.isSPLock) {
      this.isPCLock = false;
      this.isSPLock = true;

      log(11);

      this.$target.each(function (index, el) {

        var src = $(this).attr('src');
        src = gb.in.u.strReplace(src, '_pc', '_sp');
        $(this).off('load');
        $(this).on('load', event => {

          if ($(this).hasClass('spSize')) gb.in.u.setImgSPSize($(this));
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

  resume() {

    log('resume');

    this.setup();
    this.run();

    gb.in.r.remove('responsiveSwitchImg');
    gb.in.r.add('responsiveSwitchImg', this.run.bind(this));
  }

  setEvents() {

    gb.in.r.add('responsiveSwitchImg', this.run.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ResponsiveSwitchImg;


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  MouseMgr
//
//--------------------------------------------------

class MouseMgr {

  constructor($target = $(document)) {

    this.$target = $target;

    this.x = 0;
    this.y = 0;

    this.cx = 0;
    this.cy = 0;

    this.mouseMoveList = [{ name: 'def', func: () => {} }];
    this.mouseMoveStartList = [{ name: 'def', func: () => {} }];
    this.mouseMoveEndList = [{ name: 'def', func: () => {} }];

    this.isStart = true;
    this.Timer = null;
    this.endTime = 10;

    this.setup();
    this.setEvents();
  }

  setup() {

    this.add('onEnd', this.onEnd.bind(this));
  }

  onTouchmove(e) {

    // e.preventDefault();

    this.x = e.originalEvent.changedTouches[0].pageX;
    this.y = e.originalEvent.changedTouches[0].pageY;
  }

  onMousemove(e) {

    // log(this.mouseMoveList);

    if (this.isStart) {
      this.isStart = false;

      // 最初だけの処理
      // log('moveStart');

      for (var i in this.mouseMoveStartList) this.mouseMoveStartList[i].func();
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

    for (var i in this.mouseMoveList) this.mouseMoveList[i].func();
  }

  onEnd(e) {

    if (this.Timer) clearTimeout(this.Timer);
    this.Timer = setTimeout(() => {
      this.isStart = true;

      // log('moveEnd');

      for (var i in this.mouseMoveEndList) this.mouseMoveEndList[i].func();
    }, this.endTime);
  }

  add(name, func) {

    var obj = { name: name, func: func };

    this.mouseMoveList.push(obj);
  }

  addStart(name, func) {

    var obj = { name: name, func: func };

    this.mouseMoveStartList.push(obj);
  }

  addEnd(name, func) {

    var obj = { name: name, func: func };

    this.mouseMoveEndList.push(obj);
  }

  remove(name) {

    MouseMgr.arrRemove(this.mouseMoveList, name);
  }

  // ------------------------------------------------------------
  //
  //  静的メンバ
  //
  // ------------------------------------------------------------
  static arrRemove(arr, name) {

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

  removeEvents() {

    this.$target.off("touchmove.MouseMgr");
    this.$target.off("mousemove.MouseMgr");
  }

  setEvents() {

    this.$target.on("touchmove.MouseMgr", e => {
      this.onTouchmove(e);
    });
    this.$target.on("mousemove.MouseMgr", e => {
      this.onMousemove(e);
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MouseMgr;


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Func_ReadyPercent_es6__ = __webpack_require__(98);
//--------------------------------------------------
//
//  ReadyMgr
//
//--------------------------------------------------



class ReadyMgr {

  constructor() {

    this.completed = 0;
    this.total = 0;
    this.current = 0;

    this.onCompletedFunc = () => {};

    this.setEvents();
  }

  setup() {

    this.readyPercent = new __WEBPACK_IMPORTED_MODULE_0__Func_ReadyPercent_es6__["a" /* default */]();
  }

  onComplete() {

    // update処理をやめる
    gb.in.up.remove('readyPercent', this.readyPercent.update.bind(this));

    // 準備完了後の処理
    this.onCompletedFunc();
  }

  onReady() {

    this.setup();
  }

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ReadyMgr;


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  ResizeMgr
//
//--------------------------------------------------

class ResizeMgr {

  constructor() {

    this.resizeList = [];
    this.ws = { w: 0, h: 0, oldW: -1, oldH: -1 };

    this.setup();
  }

  setup() {

    var self = this;

    $(window).on('resize', function (e) {
      self.onResize.call(self, e);
    });
    this.getWindowSize();
  }

  onResize(e) {

    this.getWindowSize();

    for (var i in this.resizeList) this.resizeList[i].func();
  }

  W() {

    return this.ws.w;
  }

  H() {

    return this.ws.h;
  }

  getWindowSize() {

    var w = window.innerWidth,
        h = window.innerHeight;

    this.ws.oldW = this.ws.w;
    this.ws.oldH = this.ws.h;
    this.ws.w = w;
    this.ws.h = h;
  }

  add(name, func) {

    var obj = { name: name, func: func };

    this.resizeList.push(obj);
  }

  remove(name) {

    ResizeMgr.arrRemove(this.resizeList, name);
  }

  // ------------------------------------------------------------
  //
  //  静的メンバ
  //
  // ------------------------------------------------------------
  static arrRemove(arr, name) {

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ResizeMgr;


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  ScrollMgr
//
//--------------------------------------------------

class ScrollMgr {

  constructor() {

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

  setup() {

    var self = this;

    this.getWindowSize();
    this.add('end', this.end.bind(this));
  }

  add(name, func) {

    var obj = { name: name, func: func };

    this.scrollList.push(obj);
  }

  remove(name) {

    ScrollMgr.arrRemove(this.scrollList, name);
  }

  remove(target) {

    ScrollMgr.arrRemove(this.scrollList, target);
  }

  onResize(e) {

    this.getWindowSize();
  }

  onScroll(e) {

    if (this.isStart) {
      this.isStart = false;
      // log('resizeStart');
      // 最初だけの処理
    };

    this.st = $(window).scrollTop();
    this.sb = this.st + this.h;

    for (var i in this.scrollList) this.scrollList[i].func();
  }

  onMouseWheel(e, delta, deltaX, deltaY) {

    this.STAmount = deltaY;
    if (gb.in.u.isWin()) this.STAmount *= 60;
    if (gb.in.u.isFF() && !gb.in.u.isWin()) this.STAmount *= 60;
    // if (Math.abs(this.STAmount) > 10) this.STAmount *= 0.4;
    this.offset += this.STAmount;

    for (var i in this.scrollList) this.scrollList[i].func();
  }

  getWindowSize() {

    this.w = window.innerWidth;
    this.h = window.innerHeight;
  }

  end(e) {

    var self = this;

    if (this.Timer) clearTimeout(this.Timer);
    this.Timer = setTimeout(function () {
      self.isStart = true;
      // log('resizeEnd');

      for (var i in self.scrollEndList) self.scrollEndList[i]();
    }, 200);
  }

  addFixedObjectScroll($target) {

    this.scrollList.push(function () {

      $target.css("left", -$(window).scrollLeft());
    });
  }

  onReady() {

    this.setup();

    $(window).on('resize', e => {
      this.onResize(e);
    });
    $(window).on('scroll', e => {
      this.onScroll(e);
    });
    $(document).on('mousewheel', (e, delta, deltaX, deltaY) => {
      this.onMouseWheel(e, delta, deltaX, deltaY);
    });
  }

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
  }

  // ------------------------------------------------------------
  //
  //  静的メンバ
  //
  // ------------------------------------------------------------
  static arrRemove(arr, name) {

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScrollMgr;


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  SomeTimes
//
//--------------------------------------------------

class SomeTimes {

  constructor() {

    this.SomeTimes;
    this.Timer = null;
    this.cbList = [];
    this.len = 0;
    this.order = 0;

    this.min = [];
    this.max = [];

    this.setup();
  }

  setup() {}

  start(min = 0, max = 0) {

    this.later = gb.in.u.random(min, max) * 1000;
    this.Timer = setTimeout(this.run.bind(this), this.later);
  }

  run() {

    this.order = this.order % this.len;

    this.later = gb.in.u.random(this.min[this.order], this.max[this.order]) * 1000;

    this.cbList[this.order]();

    this.order++;
    this.Timer = setTimeout(this.run.bind(this), this.later);
  }

  stop() {

    log(this.Timer);
    clearTimeout(this.Timer);
  }

  add(func, min = 8, max = 12) {

    this.min.push(min);
    this.max.push(max);

    this.cbList.push(func);
    this.len = this.cbList.length;
  }

  setEvents() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SomeTimes;


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------
//
//  updateManager
//
//--------------------------------------------------

class UpdateMgr {

  constructor() {

    this.cnt = 0;
    this.updateList = [];
    this.len = 0;
    this.Timer = null;
    this.isStop = false;
  }

  setup() {}

  update() {

    for (var i in this.updateList) this.updateList[i].func();
  }

  loop() {

    this.update();
    this.cnt++;

    this.Timer = requestAnimationFrame(this.loop.bind(this));
    if (this.isStop) cancelAnimationFrame(this.Timer);
  }

  stop() {

    this.isStop = true;
  }

  resume() {

    this.isStop = false;
    this.loop();
  }

  add(name, func) {

    var obj = { name: name, func: func };

    this.updateList.push(obj);
  }

  remove(name) {

    var target = { name: name, func: () => {} };

    UpdateMgr.arrRemove(this.updateList, target);
  }

  // ------------------------------------------------------------
  //
  //  静的メンバ
  //
  // ------------------------------------------------------------
  static arrRemove(arr, target) {

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = UpdateMgr;


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ------------------------------------------------------------
//
//  Func
//
// ------------------------------------------------------------

class Func {

  constructor() {

    this.blank();
    this.debugger();
    this.requestAnimationFrame();
    this.expandjQuery();
  }

  blank() {

    $(() => {
      $('.blank').attr('target', '_blank');
    });
  }

  debugger() {

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

  prepend(param) {

    $('body').prepend(param);
  }

  requestAnimationFrame() {

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

  expandjQuery() {

    jQuery.fn.extend({
      w: 0,
      h: 0,
      adjust: function () {
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
      adjustW: function () {
        var w = $(this).innerWidth();
        var h = $(this).innerHeight();
        $(this).css({
          'position': 'absolute',
          'left': '50%',
          'margin-left': '-' + w / 2 + 'px'
        });
      },
      adjustH: function () {
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

  checkCssBlend() {

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

  notSaveImg() {

    // ------------------------------------------------------------
    //
    //  pc
    //
    // ------------------------------------------------------------

    if (gb.in.u.isPC) {

      $(() => {
        $("img").on("contextmenu", () => {
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
      $("img").on("touchstart", () => {
        timer = setTimeout(() => {
          void 0;
        }, 500);
        return false;
      });
      $("img").on("touchend", () => {
        clearTimeout(timer);
        return false;
      });
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Func;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ------------------------------------------------------------
//
//  Util
//
// ------------------------------------------------------------

class Util {

  constructor() {

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
  random(min, max) {

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
  random2(min1, max1, min2, max2) {

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
  hit(range) {

    return this.random(0, range - 1) === 0;
  }

  // 0から範囲内でランダムな整数を取得
  // -----------------------------------
  // @val : 範囲(int)
  // return : ランダムな整数(int)
  // -----------------------------------
  range(val) {

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
  map(num, resMin, resMax, baseMin, baseMax) {

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
  decimal(num, n) {
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

  clamp(numerator, denominator, val) {

    return val * (numerator / denominator);
  }

  degree(radians) {

    return radians * 180 / Math.PI; //1ラジアンが何度か
  }

  // to radians
  radian(angle) {

    return angle * Math.PI / 180; //1度何ラジアンか
  }

  dist(p1, p2) {

    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  ascend(arr) {

    arr.sort(function (a, b) {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
    // var a = [5,3,9,1,10]
    // 結果:10,9,5,3,1
  }

  descend(arr) {

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

  constrain(value, min, max) {

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
  arrRand(arr) {

    return arr[this.random(0, arr.length - 1)];
  }

  // 配列をランダムに並べ替え
  // -----------------------------------
  // @arr : 配列(Array)
  // -----------------------------------
  shuffle(ary) {

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
  randomArr(len) {

    var arr = new Array();

    for (var i = 0; i < len; i++) arr.push(i);

    arr = this.shuffleAry(arr);

    return arr;
  }

  // nullを削除した配列を返す
  // -----------------------------------
  // @arr : 配列(Array)
  // return : null削除した配列(Array)
  // -----------------------------------
  sliceNull(arr) {

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
  sort(arr, para, desc) {
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

  getKey(list, value) {
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
  unique() {

    return new Date().getTime();
  }

  // **jquary使用
  // ボタンモード変更
  // trueならカーソルがポインターの形に
  // falseならデフォルトのカーソルに
  // -----------------------------------
  // @flg : 適用するかどうか(boolean)
  // -----------------------------------
  buttonMode(flg) {

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

  isDeviceSP() {

    var media = ["iphone", "ipod", "ipad", "android", "dream", "cupcake", "blackberry9500", "blackberry9530", "blackberry9520", "blackberry9550", "blackberry9800", "webos", "incognito", "webmate"];
    var pattern = new RegExp(media.join("|"), "i");

    var b = pattern.test(this.ua);
    if (b) $('body').addClass('isDeviceSP');

    this.isSP = b;
  }
  isDeviceTAB() {

    var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("touch") != -1 || this.ua.indexOf("ipad") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") == -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("tablet") != -1 || this.ua.indexOf("kindle") != -1 || this.ua.indexOf("silk") != -1 || this.ua.indexOf("playbook") != -1;
    if (b) $('body').addClass('isDeviceTAB');

    this.isTAB = b;
  }

  isDeviceMB() {

    var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("phone") != -1 || this.ua.indexOf("iphone") != -1 || this.ua.indexOf("ipod") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("blackberry") != -1;
    if (b) $('body').addClass('isDeviceMB');

    this.isMB = b;
  }

  isDevicePC() {

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
  isSmt() {

    return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;
  }

  // タブレット端末かどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isTablet() {

    return this.isIpad() || this.isAndroid() && navigator.userAgent.indexOf('Mobile') === -1;
  }

  // iPad判定
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIpad() {

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
  isAndroid() {

    var u;
    u = navigator.userAgent;
    return u.indexOf('BlackBerry') > 0 || u.indexOf('Android') > 0 || u.indexOf('Windows Phone') > 0;
  }

  isiPhone() {
    var pattern = new RegExp("iphone", "i");
    return pattern.test(this.ua);
  }

  // iOS判定
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIos() {

    return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0;
  }

  // PS3判定
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isPs3() {

    var u;
    u = navigator.userAgent;
    return u.indexOf('PLAYSTATION 3') > 0;
  }

  // VITA判定
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isVita() {

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
  isIe() {

    var ua;
    ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;
  }

  // WINかどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isWin() {

    return navigator.platform.indexOf("Win") !== -1;
  }

  // googleChromeかどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isChrome() {

    return navigator.userAgent.indexOf('Chrome') > 0;
  }

  // FireFoxかどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isFF() {

    return window.navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  }

  isSafari() {

    if (this.ua.indexOf("chrome") != -1) return false;
    if (this.ua.indexOf("lunascape") != -1) return false;
    var pattern = new RegExp("safari", "i");
    return pattern.test(this.ua);
  }

  isOpera() {

    var pattern = new RegExp("opera", "i");
    return pattern.test(this.ua);
  }

  // iOSのsafari以外かどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIOSUiView() {

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
  isIe8Under() {

    var msie;
    msie = navigator.appVersion.toLowerCase();
    msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
    return msie <= 8 && msie !== 0;
  }

  // IE9以下かどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIe9Under() {

    var msie;
    msie = navigator.appVersion.toLowerCase();
    msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
    return msie <= 9 && msie !== 0;
  }

  // IE10以下かどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIe10Under() {

    var msie;
    msie = navigator.appVersion.toLowerCase();
    msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
    return msie <= 10 && msie !== 0;
  }

  // IE11以下かどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIe11Under() {

    var b = this.isIe10Under() || this.ua.indexOf("trident") != -1;
    return b;
    // return true;
  }

  // edgeかどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isEdge() {

    log(this.ua.indexOf("AppleWebkit"), this.ua.indexOf("Edge"), this.ua, this.appV);
    var b = this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1;
    return b;
    // return true;
  }

  isIEVersion() {

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

  isAndroidVersion() {

    if (this.ua.indexOf("android") > 0) {

      var version = parseFloat(this.ua.slice(this.ua.indexOf("android") + 8));
      return version;
    }
  }

  isiphoneVersion() {

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
  isDirection() {

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
  isResponsive(bp) {

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

  getParam() {

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
  hash() {

    return location.hash.replace("#", "");
  }

  // cookie取得
  // -----------------------------------
  // @key : パラメータ名
  // -----------------------------------
  getCookie(key) {

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
  setCookie(key, val) {

    return document.cookie = key + "=" + val;
  }

  isPCSP() {

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
  getHexColor(r, g, b) {
    var str;
    str = (r << 16 | g << 8 | b).toString(16);
    return "#" + new Array(7 - str.length).join("0") + str;
  }

  // ------------------------------------------------------------
  //
  //  String
  //
  // ------------------------------------------------------------

  isContain(str, contain) {

    // strの中に,containが存在したら
    if (str.indexOf(contain) != -1) {
      return true;
    }

    return false;
  }

  // 0埋めで2桁にする関数
  add0(str, num = -2) {

    return ("000000000000" + str).substr(num);
  }

  floatFormat(number, n) {

    var _pow = Math.pow(10, n);
    return Math.round(number * _pow) / _pow;
  }

  // 値段表記
  // -----------------------------------
  price(num) {

    return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }

  // 文字列を反転
  // -----------------------------------
  // @str : 文字列(String)
  // return : 文字列(String)
  // -----------------------------------
  strReverse(str) {

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
  replaceAll(val, org, dest) {

    return val.split(org).join(dest);
  }

  strReplace(str, before, after) {

    var r = new RegExp(before, 'g');

    return str.replace(r, after);
  }

  // ------------------------------------------------------------
  //
  //  Date
  //
  // ------------------------------------------------------------

  getNow() {

    this.now = new Date();
  }

  start() {

    this.startTime = this.now.getTime();
  }

  elapsed() {

    this.elapsedTime = this.now.getTime() - this.startTime;
  }

  m() {

    return Math.floor(this.elapsedTime + 100 / 60);
  }

  s() {

    return Math.floor(this.elapsedTime / 1000);
  }

  ms() {

    return this.elapsedTime;
  }

  time() {

    this.getNow();

    this.hour = this.now.getHours(); // 時
    this.minute = this.now.getMinutes(); // 分
    this.second = this.now.getSeconds();
    this.millSecond = this.now.getMilliseconds();
  }

  date() {

    return this.now.getDate();
  }

  months() {

    var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    return this.now.getMonth() + 1;
  }

  year() {

    return this.now.getFullYear();
  }

  day() {

    // 曜日 (日本語)
    var weekDayJP = ["日", "月", "火", "水", "木", "金", "土"];
    var wDJ = weekDayJP[this.now.getDay()];

    // 曜日 (英語)
    var weekDayEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var wDE = weekDayEN[this.now.getDay()];
  }

  // 数日後のDateオブジェクト取得
  // -----------------------------------
  afterDay(date, num) {

    return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);
  }

  // ------------------------------------------------------------
  //
  //  Data type check
  //
  // ------------------------------------------------------------

  isObject(value, ignoreArray) {
    return typeof value === 'object' && value !== null;
  }

  isNumber(value) {
    return typeof value === 'number';
  }

  isString(value) {
    return typeof value === 'string';
  }

  isFunction(value) {
    return typeof value === 'function';
  }

  isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  isNull(value) {
    return value === null;
  }

  isUndefined(value) {
    return typeof value === 'undefined';
  }

  // ------------------------------------------------------------
  //
  //  other
  //
  // ------------------------------------------------------------
  setImgSPSize($target) {

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
  setPrevent() {

    var self = this;

    $(window).on('touchmove.noControl', function (e) {
      e.preventDefault();
    });
  }

  removePrevent() {

    $(window).off('touchmove.noControl');
  }

  // ------------------------------------------------------------
  //  host,protcol
  // ------------------------------------------------------------
  protocol() {

    return location.protocol;
  }

  host() {

    return location.hostname;
    // return location.host
  }

  port() {

    return location.port;
  }

  path() {

    return location.pathname;
  }

  preventDefault(e) {

    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  preventDefaultForScrollKeys(e) {

    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  disableScroll() {

    if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove = this.preventDefault; // mobile
    document.onkeydown = this.preventDefaultForScrollKeys;
  }

  enableScroll() {

    if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Util;


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Page_Common_es6__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Page_Main_es6__ = __webpack_require__(23);
// ------------------------------------------------------------
//
//  Top
//
// ------------------------------------------------------------


// import DisplayTop from './Display/DisplayTop.es6';

(() => {

  // globalオブジェクト
  if (window.gb === undefined) window.gb = {};
  window.gb.in = {}; //instance

  gb.in.common = new __WEBPACK_IMPORTED_MODULE_0__Page_Common_es6__["a" /* default */]();
  // gb.in.displayTop = new DisplayTop();
  gb.in.main = new __WEBPACK_IMPORTED_MODULE_1__Page_Main_es6__["a" /* default */]();
})();

/***/ })
/******/ ]);