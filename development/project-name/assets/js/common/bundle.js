//--------------------------------------------------
//
//  AudioMgr
//
//--------------------------------------------------

(function(){

  var gb = jp.co.onepieace;

  function AudioMgr(src) {

    this.src = src;

    this.gainNode = null;
    this.context = null;
    this.buffer = null;
    this.analyser = null;
    this.audio = null;

    this.constructor();

  }

  AudioMgr.prototype = {

    constructor :function(){ 

      var audio,type;


      window.AudioContext = window.AudioContext || window.webkitAudioContext;

      try {
          this.context = new AudioContext();
      } catch (error) {
          window.alert(error.message);
          return;
      }

      if (this.src) this.loadAudio(this.src);

    },

    loadAudio :function(src){

        var self = this;

        var req = new XMLHttpRequest();
        req.open("GET", src, true);
        req.responseType = "arraybuffer";

        req.onload = function () {
            
            var res = req.response;
            self.context.decodeAudioData(res, function (buf) {

                self.buffer = buf;
                self.play();

            });

        }
        req.send();

    },

    audioLoaded :function() {

      // this.canplay = true;
      this.play();

    },

    // 1秒待った後、オーディオバッファの3秒経過した位置から、10秒間再生します。
    play :function(delay, offset, duration){ 

      var delay = delay || 0,
          offset = offset || 0,
          duration = duration || this.getDuration();

      this.gainNode = this.context.createGain();
      this.audio = this.context.createBufferSource();

      this.audio.start = this.audio.start || this.audio.noteOn;
      this.audio.stop  = this.audio.stop  || this.audio.noteOff;

      this.audio.buffer = this.buffer;
      this.audio.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);

      this.audio.start(delay,offset,duration);

    },

    pause :function(){ 

      this.context.suspend();

    },

    resume :function(){ 

      this.context.resume();

    },

    updateCurrentTime :function(delay, offset, duration){ 

      var delay = delay || 0,
          offset = offset || 0,
          duration = duration || this.getDuration();

      this.audio.stop();
      this.play(delay, offset, duration);

    },

    getDuration :function(){ 

      return this.buffer.duration;

    },

    setLoop :function(boolean){ 

      this.audio.loop = boolean;

    },

    setRate :function(val){ 

      // デフォルトが1
      // this.audio.playbackRate = val;

    },

    tweenVolume :function(val,dur,ease){ 

      // 0.0（無音）～ 1.0（最大）

      var dur = dur || 0.5,
          ease = ease || Power4.easeIn; 

      TweenMax.to(this.gainNode.gain, dur, {value:val, ease: ease});

    },

    muted :function(boolean){ 

      // this.audio.muted = boolean;

    },

  }

  // 公開api
  gb.AudioMgr = AudioMgr;

  
})();
//--------------------------------------------------
//
//  updateManager
//
//--------------------------------------------------

(function(){

  var gb = jp.co.plusMV;

  function EventMgr() {

    this.cbs = {}; //callbacks

  }

  EventMgr.prototype = {

    on: function(name, cb){
      
      if (!this.cbs[name]) this.cbs[name] = [];

      this.cbs[name].push(cb);   

    },

    trigger: function(name){
      
      var cbs = this.cbs[name];
      if (!cbs) return;
      
      for (var i in cbs) cbs[i]();

    },

  };

  // 公開api
  gb.EventMgr = EventMgr;
  
})();
//--------------------------------------------------
//
//  Size
//
//--------------------------------------------------

// ウィンドウ幅に合わせて対象オブジェクトの拡縮
// -----------------------------------
// win(obj)  : ウィンドウサイズ
    // win.def
    // win.min
    // win.max
    // win.hflag
// $obj(jqueryObj) : 対象jqueryオブジェクト
// list(array) : 対象プロパティ
// notobj(セレクタstr) : 対象jqueryオブジェクト
// notList(array) : 非対象にするプロパティ
// flag(obj) : フラグ
    // innerFlag(str) : widthでpaddingを含めるか含めないか 
    // defFlag(boolean) : デフォルトのプロパティを含めるか含めないか

// return : このクラス
// -----------------------------------
(function(){

  var gb = jp.co.mie;

  function SizeAdjust(win,$obj,list,notObj,notList,flag){

    // ----------------
    //  対象jqueryオブジェクト  
    // ----------------
    if (!notObj) {
      this.$target = $obj;
    } else {
      this.$target = $obj.not(notObj);  
    }

    // ----------------
    //  対象プロパティリスト
    // ----------------
    this.flag = flag;
    if (this.flag === undefined || this.flag.innerFlag === undefined) this.innerFlag = '';
    if (this.flag === undefined || this.flag.defFlag === undefined) this.defFlag = false;
    if (this.defFlag) {
      this.defList = [
        'width','height',
        'top','right','bottom','left',
        'margin-top','margin-right','margin-bottom','margin-left',
        'padding-top','padding-right','padding-bottom','padding-left',

        'background-size'
      ];
    } else {
      this.defList = [];
    }

    // デフォルトのプロパティリストと連結
    this.list = this.defList.concat(list);
    // 重複削除
    this.list = this.list.filter(function (x, i, self) {
              return self.indexOf(x) === i;
           });

    // 非対象プロパティリストを外す
    this.notList = notList || [];

    // 対象から外す
    for (var i = 0; i < this.notList.length; i++) {
      for(j=0; j<this.list.length; j++){
          if(this.list[j] == this.notList[i]){
              this.list.splice(j--, 1);
          }
      }
    }

    this.tempList = [];
    this.len = this.list.length;

    // ----------------
    //  ウィンドウ幅の設定
    // ----------------
    this.win = win;
    this.defW = win.def;
    this.maxW = win.max;
    this.minW = win.min;

    if (!win.hFlag) this.W = window.innerWidth;
    else this.W = window.innerHeight - 88;
    this.rate = this.W / this.defW;

    this.setup();
    this.setEvents();

  }

  SizeAdjust.prototype = {

    setup: function () {

      var self = this;

      this.$target.each(function(index) {

        self.tempList[index] = [];

        for (var i = 0; i < self.len; i++) {

          var css = $(this).css(self.list[i]);
          if (css !== '0px' && css !== 'auto') {

            // padding部分含めるか、含めないか
            if (self.innerFlag == 'inner' && self.list[i] == 'width') {
              var val = parseInt($(this).innerWidth());
            } else {
              var val = parseInt(css);
            }

            $(this).data(self.list[i],val);
            self.tempList[index].push(self.list[i]);
          };

        };

      });

    },

    update: function () {

      if (!this.win.hFlag) this.W = window.innerWidth;
      else this.W = window.innerHeight;

      if (this.W > this.maxW) this.W = this.maxW;
      if (this.W < this.minW) this.W = this.minW;

      this.rate = this.W / this.defW;

    },

    setVal: function () {

      var self = this

      this.$target.each(function(index) {

        var len = self.tempList[index].length;

        for (var i = 0; i < len; i++) {

          $(this).css(self.tempList[index][i],$(this).data(self.tempList[index][i]) * self.rate);  

        };

      });

    },

    run: function () {

      this.update();
      this.setVal();

    },

    setEvents: function() {

      // gb.in.r.add(this.run.bind(this));

    },

  }
  // 公開api
  gb.SizeAdjust = SizeAdjust;

}());



//--------------------------------------------------
//
//  USAGE
//
//--------------------------------------------------
// (function(){

//   var gb = jp.co.mie;

//   function ApplySizeDeviceTop() {

//     this.r = [];
//     this.rh = [];

//     this.setupPort();
//     this.setupLand();

//   };

//   ApplySizeDeviceTop.prototype = {

//     setupPort: function () {

//      // portrait時
//      var win = {
//              def: 375,
//              min: 320,
//              max: 375,
//            };
//      if (!$('body').hasClass('pjaxTransition')) {
//        var sizeList = [
//          // basic
//          {obj:$('img'),list:[],win:win,notObj:'.logoImg',inner:'',notList:[]},
//          {obj:$('.fzLiquid'),list:['font-size','letter-spacing'],win:win,notObj:'',inner:'',notList:['width','height']},

//          // topvisual
//          {obj:$('#topVisual'),list:[],win:win,notObj:'',inner:'inner',notList:[]},
//          {obj:$('#topVisual .tit'),list:[],win:win,notObj:'',inner:'',notList:['height']},
//          {obj:$('#topVisual .text'),list:[],win:win,notObj:'',inner:'',notList:['width','height']},
//          {obj:$('#topVisualWrap .barL'),list:[],win:win,notObj:'',inner:'',notList:['width']},
//          {obj:$('#topVisualWrap .ui__menu_btn'),list:[],win:win,notObj:'',inner:'',notList:['background-size']},

//          // header
//          {obj:$('#header .logoImg'),list:[],win:win,notObj:'',inner:'',notList:[]},
//          {obj:$('#header .barL'),list:[],win:win,notObj:'',inner:'',notList:['height']},
//          {obj:$('#header .page'),list:['font-size'],win:win,notObj:'',inner:'',notList:[]},
         
//          // menu
//          {obj:$('.ui__menu .item'),list:[],win:win,notObj:'',inner:'',notList:['width']},  
//          {obj:$('.ui__menu .ui__menu_btn_c'),list:[],win:win,notObj:'',inner:'',notList:['top']},  
//          {obj:$('.ui__menu'),list:[],win:{def: 375,min: 320,max: 10000},notObj:'',inner:'',notList:['width','height','padding-top','padding-bottom']},
//        ]
//       } else {
//         var sizeList = [
//           // basic
//           {obj:$('img'),list:[],win:win,notObj:'.logoImg',inner:'',notList:[]},
//           {obj:$('.fzLiquid'),list:['font-size','letter-spacing'],win:win,notObj:'',inner:'',notList:['width','height']},

//           // topvisual
//           {obj:$('#topVisual'),list:[],win:win,notObj:'',inner:'inner',notList:[]},
//           {obj:$('#topVisual .tit'),list:[],win:win,notObj:'',inner:'',notList:['height']},
//           {obj:$('#topVisual .text'),list:[],win:win,notObj:'',inner:'',notList:['width','height']},
//           {obj:$('#topVisualWrap .barL'),list:[],win:win,notObj:'',inner:'',notList:['width']},
//           {obj:$('#topVisualWrap .ui__menu_btn'),list:[],win:win,notObj:'',inner:'',notList:['background-size']},

//           // menu
//           {obj:$('.ui__menu .item'),list:[],win:win,notObj:'',inner:'',notList:['width']},  
//           {obj:$('.ui__menu .ui__menu_btn_c'),list:[],win:win,notObj:'',inner:'',notList:['top']},  
//           {obj:$('.ui__menu'),list:[],win:{def: 375,min: 320,max: 10000},notObj:'',inner:'',notList:['width','height','padding-top','padding-bottom']},
//         ]
//       }
       
//      for (var i = 0; i < sizeList.length; i++) {
//        var list = sizeList[i];
//        var Re = new gb.Size(list.obj,list.list,list.win,list.notObj,list.inner,list.notList);
//        Re.getDef();
//        this.r.push(Re);
//      };

//     },

//     setupLand: function () {
      
//       // landscape時
//       var win = {
//               def: 375,
//               min: 0,
//               max: 375,
//               hFlag: true,
//             };

//       if (!$('body').hasClass('pjaxTransition')) {
//         var sizeListH = [
//           // basic
//           {obj:$('img'),list:[],win:win,notObj:'.logoImg',inner:'',notList:[]},
//           {obj:$('.fzLiquid'),list:['font-size','letter-spacing'],win:win,notObj:'',inner:'',notList:['width']},

//           // topvisual
//           {obj:$('#topVisual'),list:[],win:win,notObj:'',inner:'inner',notList:[]},
//           {obj:$('#topVisual .tit'),list:[],win:win,notObj:'',inner:'',notList:[]},
//           {obj:$('#topVisual .text'),list:[],win:win,notObj:'',inner:'',notList:['width']},

//           // header
//           // {obj:$('#header .barL'),list:[],win:win,notObj:'',inner:'',notList:['height','top']},
//           // {obj:$('#header .page'),list:['font-size','letter-spacing'],win:win,notObj:'',inner:'',notList:['top']},

//           // menu
//           {obj:$('.ui__menu .item'),list:[],win:win,notObj:'',inner:'',notList:['width']},  
//           {obj:$('.ui__menu .ui__menu_btn_c'),list:[],win:win,notObj:'',inner:'',notList:['top']},  
//           {obj:$('.ui__menu'),list:[],win:{def: 375,min: 320,max: 10000},notObj:'',inner:'',notList:['width','height','padding-top','padding-bottom']},
//         ]
//       } else {
//         var sizeListH = [
//           // basic
//           {obj:$('img'),list:[],win:win,notObj:'.logoImg',inner:'',notList:[]},
//           {obj:$('.fzLiquid'),list:['font-size','letter-spacing'],win:win,notObj:'',inner:'',notList:['width']},

//           // topvisual
//           {obj:$('#topVisual'),list:[],win:win,notObj:'',inner:'inner',notList:[]},
//           {obj:$('#topVisual .tit'),list:[],win:win,notObj:'',inner:'',notList:[]},
//           {obj:$('#topVisual .text'),list:[],win:win,notObj:'',inner:'',notList:['width']},

//           // menu
//           {obj:$('.ui__menu .item'),list:[],win:win,notObj:'',inner:'',notList:['width']},  
//           {obj:$('.ui__menu .ui__menu_btn_c'),list:[],win:win,notObj:'',inner:'',notList:['top']},  
//           {obj:$('.ui__menu'),list:[],win:{def: 375,min: 320,max: 10000},notObj:'',inner:'',notList:['width','height','padding-top','padding-bottom']},
//         ]
//       }
        
//       for (var i = 0; i < sizeListH.length; i++) {
//         var list = sizeListH[i];
//         var Re = new gb.Size(list.obj,list.list,list.win,list.notObj,list.inner,list.notList);
//         this.rh.push(Re);
//       };

//     },

//     resizePort: function () {

//       // size
//       for (var i = 0; i < this.r.length; i++) {
//         this.r[i].onResize();
//       };

//     },
      
//     resizeLand: function () {

//       // size
//       for (var i = 0; i < this.rh.length; i++) {
//         this.rh[i].onResize();
//       };

//     },

//   }

//   gb.ApplySizeDeviceTop = ApplySizeDeviceTop;

// }());
// ------------------------------------------------------------
//
//  DomMotionLibs
//
// ------------------------------------------------------------

export default class DomMotionLibs {

  constructor(src) {

    this.src = src;

    this.first = true;

  }

  blur(opt){ 

    var def = {
            $target: null,
            dur: 1,
            delay: 0,
            blur: 0,blurTarget: 100,
            ease: Power3.easeIn
          };
    var param = $.extend(def,opt);
    var tl = new TimelineMax();      

    tl
      .to(param, param.dur, {
        blur: param.blurTarget,
        ease: param.ease,
        delay: param.delay,
        onUpdate: function(p) {
          var b = p.target.blur;
          TweenMax.set(param.$target, {
            '-webkit-filter': 'blur(' + b + 'px)',
            'filter': 'blur(' + b + 'px)',
          });
        },
        onUpdateParams: ["{self}"]
      })
    
  }

  bright(opt){

    var def = {
            $target: null,
            dur: 1,
            delay: 0,
            grayscale: 0,grayscaleTarget: 100,
            brightness: 100,brightnessTarget: 1000,
            opacity: 0,opacityTarget: 1,
            ease: Power3.easeIn,
            onComplete: function(){}
          };
    var param = $.extend(def,opt);
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
        onUpdate: function(p) {
          var g = p.target.grayscale;
          var b = p.target.brightness;
          TweenMax.set(param.$target, {
            '-webkit-filter': 'brightness(' + b + '%) grayscale(' + g + '%)',
            'filter': 'brightness(' + b + '%) grayscale(' + g + '%)',
          });
        },
        onUpdateParams: ["{self}"],
      })
      .to(param.$target, param.dur, {
        opacity: param.opacityTarget,
        ease: param.ease,
        onComplete: function(){
          param.onComplete();
        }
      // },'-='+param.dur-3.0);
      },'-=1.8');

  }

  shake(opt){

    var def = {
            $target: null,
            dur: 1,
            delay: 0,
            mag: 10,
            ease: Power3.easeIn,
          };
    var param = $.extend(def,opt);
    var tl = new TimelineMax();      

    tl
      .to({}, param.dur, {
        delay: param.delay,
        ease: param.ease,
        onUpdate: function(){

          var x = (Math.random()*2-1) * param.mag;
          var y = (Math.random()*2-1) * param.mag;

          TweenMax.set(param.$target, {x:x,y:y});

        },
        onComplete: function(){

          TweenMax.set(param.$target, {x:0,y:0});

        },
      });

  }

  afterImg(opt){

    var def = {
            target: null,
            $wrap: $('body'),
            dur: 1,
            delay: 0,
            num: 3,
            lag: 0.05,
            scale: 1,
            opacity: 1,
            ease: Power3.easeIn,
          };
    var param = $.extend(def,opt);
    var tl = new TimelineMax();
    var self = this;

    tl
      .add(function(){

        if (self.first) {
          self.first = false;

          // 画像複製
          for (var i = 0; i < param.num; i++) {
            var dom = $(param.target).clone();
            param.$wrap.append(dom);
          };
          
          // 画像スタイルset
          TweenMax.set($(param.target), {'transform-origin':'50% 50%','position':'absolute',scale:1.3});

        }

        // motion
        $(param.target).each(function(index, el) {
            
            TweenMax.to($(this), param.dur, {
              scale: param.scale,
              opacity: param.opacity,
              delay: param.lag * index,
              ease: param.ease,
            });

        });

      })

  }

  scaleSlow(opt){

    var def = {
            target: null,
            $wrap: $('body'),
            dur: 1,
            dur02: 7,
            dur03: 1.3,
            delay: 0,
            scale: 1,scaleTarget: 1.3,
            opacity: 0,opacityTarget: 1,
            ease: Power3.easeIn,
          };
    var param = $.extend(def,opt);
    var tl = new TimelineMax();
    var self = this;

    tl
      .to($(param.target), 0.01, {
        scale: param.scale,
        opacity: param.opacity,
        onComplete: function() {
          TweenMax.to($(param.target), param.dur02, {
            scale: param.scaleTarget,
            ease: Power0.easeNone,
          });
          TweenMax.to($(param.target), param.dur03, {
            opacity: param.opacityTarget,
            ease: param.ease,
          });
        }
      })

  }

  scaleElastic(opt){

    var def = {
            target: null,
            dur: 1,
            scaleX: 2,scaleY: 0,scaleTarget: 1,
            opacity: 0,
            ease: Elastic.easeOut.config(1, 0.3)
          };
    var param = $.extend(def,opt);
    var tl = new TimelineMax();
    var self = this;

    tl
      .fromTo(param.target, param.dur, {
        scaleX: param.scaleX,
        scaleY: param.scaleY,
      },
      {
        scale: param.scaleTarget,
        ease: Elastic.easeOut.config(1, 0.3),
      });

  }

  // ゴム
  gum(opt){

    var def = {
            target: null,
            dur: 1,
            scaleX: 2,scaleY: 0,scaleTarget: 1,
            opacity: 0,
            ease: Elastic.easeOut.config(1, 0.3)
          };
    var param = $.extend(def,opt);
    var tl = new TimelineMax({repeat:-1,repeatDelay: 1});
    var self = this;

    tl
      .to(param.target,0.3, {
        scaleY:1.4,
        scaleX : 0.7,
        ease: Power2.easeOut
      })
     .to(param.target,0.25, {
        scaleY:0.7,
        scaleX : 1.3,
        ease: Power2.easeOut
      })
     .to(param.target,0.2, {
        scaleY:1.3,
        scaleX : 0.8,
        ease: Power2.easeOut
      })
     .to(param.target,0.2, {
        scaleY:0.8,
        scaleX : 1.2,
        ease: Power2.easeOut
      })
     .to(param.target,0.2, {
        scaleY:1.1,
        scaleX : 0.9,
        ease: Power2.easeOut
      })
     .to(param.target,0.13, {
        scaleY:0.9,
        scaleX : 1.1,
        ease: Power2.easeOut
      })
     .to(param.target,0.13, {
        scaleY: 1,
        scaleX : 1,
        ease: Power2.easeOut
      })


  }

  // ゴム
  dooon(opt){

    var def = {
            target: null,
            wrap: null,
            dur: 1,
            scaleX: 2,scaleY: 0,scaleTarget: 1,
            opacity: 0,
            ease: Elastic.easeOut.config(1, 0.3)
          };
    var param = $.extend(def,opt);
    var tl = new TimelineMax();
    var self = this;

    // logo ちょっとscale,opacityで出て、そのあと揺れて、小さくなる
    tl
      .fromTo(param.target, 3, {
        scale: 1.5,
        opacity: 0,
      },{
        scale: 1.45,
        opacity: 0.4,
        ease: Power3.easeIn,
      })

    tl
      .to({}, 0.7, {
        ease: Power4.easeIn,
        onUpdate: function(){

          // ゆれ
          var x = (Math.random()*2-1) * 5;
          var y = (Math.random()*2-1) * 5;

          console.log(param.wrap);

          TweenMax.set(param.wrap, {x:x,y:y});

        },
        onComplete: function(){

          TweenMax.set(param.wrap, {x:0,y:0});

        }
      })
      .to(param.target, 0.4, {
        scale: 1,
        opacity: 1,
        ease: Power4.easeOut,
      },'-=0.75')


  }

}
//--------------------------------------------------
//
//  LoadCnt
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function LoadCnt(len) {

    this.cnt = 0;
    this.len = len || 0;

    this.onComplete = function(){};

  }

  LoadCnt.prototype = {

    add: function () {

      this.cnt++;
      if (this.cnt == this.len) this.run();

    },

    run: function () {

      var self = this;

      TweenMax.set($('#wrapper'), {opacity: 1})
      TweenMax.to($('#loading'), 0.8, {
        opacity: 0,
        ease: Power2.easeOut,
        delay: 0.7,
        onComplete: function() {
          $('#loading').hide();
          self.onComplete();
        }
      })

    },

    setEvents: function () {

    },

  }

  gb.LoadCnt = LoadCnt;

})();
//--------------------------------------------------
//
//  Keyboard
//
//--------------------------------------------------

(function(){

  var gb = jp.co.onepieace;


  function Keyboard() {

    // var key_code = e.keyCode;
    // // Shiftキーの押下状態
    // var shift_key = e.shiftKey;
    // // Ctrlキーの押下状態
    // var ctrl_key = e.ctrlKey;
    // // Altキーの押下状態
    // var alt_key = e.altKey;


    this.setEvents();

  }

  Keyboard.prototype = {

    // ------------------------------------------------------------
    //  a オブジェクト追加
    // ------------------------------------------------------------
    add: function(e) {

      if(e.keyCode == 65 || e.keyCode == 97) {

        addParticles([Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)]);
      
      }

    },

    // ------------------------------------------------------------
    //  shift + r オブジェクト削除
    // ------------------------------------------------------------
    remove: function(e) {

      if((e.keyCode == 82 && e.shiftKey) || e.keyCode == 114 && e.shiftKey) {

        removeParticles();
      
      }

    },

    // ------------------------------------------------------------
    //  b 開始
    // ------------------------------------------------------------
    begin: function(e) {

      if(e.keyCode == 66 || e.keyCode == 98) {

        // initVisual();
        // gb.um.setup();
        // gb.um.loop();
      
      }

    },

    // ------------------------------------------------------------
    //  s 停止
    // ------------------------------------------------------------
    stop: function(e) {

      if(e.keyCode == 83 || e.keyCode == 115) {

        gb.p.stop();
        gb.s.pause();    
      
      }

    },

    // ------------------------------------------------------------
    //  r 再開
    // ------------------------------------------------------------
    resume: function(e) {

      if(e.keyCode == 82 || e.keyCode == 114) {

        gb.p.reStart();
        gb.p.loop();
        gb.s.resume();    
      
      }

    },

    // ------------------------------------------------------------
    //  f 全画面 
    // ------------------------------------------------------------
    full: function(e) {

      if(e.keyCode == 70 || e.keyCode == 102) {
        
        var f = document.body;

        if (f.requestFullScreen) {
          f.requestFullScreen();
        } else if(f.webkitRequestFullScreen) {
          f.webkitRequestFullScreen();
        } else if(f.mozkitRequestFullScreen) {
          f.mozkitRequestFullScreen();
        }

      }

    },

    // ------------------------------------------------------------
    //  c 全画面解除 
    // ------------------------------------------------------------
    cancelFull: function(e) {

      if(e.keyCode == 67 || e.keyCode == 99) {

        var c = document;            
        
        if (c.cancelFullScreen) {
          c.cancelFullScreen();
        } else if(c.webkitCancelFullScreen) {
          c.webkitCancelFullScreen();
        } else if(c.mozkitCancelFullScreen) {
          c.mozkitCancelFullScreen();
        } else {
          c.exitFullScreen();
        }

      }

    },

    // ------------------------------------------------------------
    //  検索 enter
    // ------------------------------------------------------------
    enter: function(e) {

      if(e.keyCode == 13 && gb.in.conf.isOpening == 'end') {
      gb.in.conf.isOpening = null;

        $(window).trigger('openingEnd');

      }

    },

    // ------------------------------------------------------------
    //  →
    // ------------------------------------------------------------
    arrowRight: function() {

      if(e.keyCode == 39) {

        var num = cur+1;
        num = num%videoList.length;
        onSwitch('',num);

      }

    },

    // ------------------------------------------------------------
    //  ←
    // ------------------------------------------------------------
    arrowLeft: function() {

      if(e.keyCode == 37) {

        var num = cur-1;
        if (num<0) num=videoList.length-1;
        onSwitch('',num);

      }

    },

    // ------------------------------------------------------------
    //  ↑
    // ------------------------------------------------------------
    arrowUp: function() {

      if(e.keyCode == 38) {

      }

    },

    // ------------------------------------------------------------
    //  ↓
    // ------------------------------------------------------------
    arrowDown: function() {

      if(e.keyCode == 40) {

      }

    },
    
    glslEffect: function(e) {

      // ------------------------------------------------------------
      //  1
      // ------------------------------------------------------------
      if(e.keyCode == 49) {
        _composerNum = 0;
      }
      // ------------------------------------------------------------
      //  2
      // ------------------------------------------------------------
      if(e.keyCode == 50) {
        _composerNum = 1;
      }
      // ------------------------------------------------------------
      //  3
      // ------------------------------------------------------------
      if(e.keyCode == 51) {
        _composerNum = 2;
      }
      // ------------------------------------------------------------
      //  4
      // ------------------------------------------------------------
      if(e.keyCode == 52) {
        _composerNum = 3;
      }
      // ------------------------------------------------------------
      //  5
      // ------------------------------------------------------------
      if(e.keyCode == 53) {
        _composerNum = 4;
      }

    },

    onKey: function(e) {

      this.full(e);
      this.cancelFull(e);
      this.enter(e);
      // this.begin(e);
      // this.stop(e);
      // this.resume(e);
      // this.glslEffect(e);
      // this.add(e);
      // this.remove(e);

    },

    setEvents: function() {

      var self = this;

      $(document).on('keydown', function(e){self.onKey.call(self,e);});

    }

  }

  gb.Keyboard = Keyboard;

})();
//--------------------------------------------------
//
//  LazyLoad
//
//--------------------------------------------------

;(function(){

  var gb = jp.co.sjPlus;

  function LazyLoad($target) {

    

    this.setEvents();

  }

  LazyLoad.prototype = {

    img: function (URL,cb) {

      // google api呼び出し
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = URL;
      // コールバック
      script.onload = cb
      document.body.appendChild(script);

    },

    iframe: function ($target) {

      var $target = $('.iframe');
      var src = $target.data('src');
      $target.attr('src', src);

    },

    link: function (URL,cb) {

      // google api呼び出し
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = URL;
      // コールバック
      script.onload = cb
      document.body.appendChild(script);

    },


    // ------------------------------------------------------------
    //  google api呼び出し
    //  や snsのscriptなど
    // ------------------------------------------------------------
    script: function (URL,cb) {

      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = URL;
      // コールバック
      script.onload = cb
      document.body.appendChild(script);

    },

    // 使い方
    // require_onload( ['aaa.js', 'bbb.js', 'ccc.js', 'test.css'] );

    // function require_onload( arg ) {
    //     if (is_array(arg)){
    //         var element = [];
    //         for(var i=0; i<arg.length; i++){
    //             if ( arg[i].match(/\.css$/) ){
    //                 add_child_css(arg[i]);
    //             }
    //             else if ( arg[i].match(/\.js$/) ){
    //                 add_child_js(arg[i]);
    //             }
    //             else{ alert('check url : ' + arg[i]) }
    //         }
    //     }
    //     else{
    //         if ( arg.match(/\.css$/) ){
    //             add_child_css(arg);
    //         }
    //         else if ( arg.match(/\.js$/) ){
    //             add_child_js(arg);
    //         }
    //         else{ alert('check url : ' + arg[i]) }
    //     }
    // }

    // function add_child_js(src){
    //     var element = document.createElement("script");
    //     element.src = src;
    //     document.body.appendChild(element);
    // }

    // function add_child_css(src){
    //     var css_element = document.createElement('link');
    //     css_element.type = 'text/css';
    //     css_element.rel  = 'stylesheet';
    //     css_element.href = src;
    //     document.body.appendChild(css_element);
    // }

    // function is_array(obj) {
    //     return Object.prototype.toString.call(obj) === '[object Array]';
    // }

    setEvents: function () {



    },

  }

  gb.LazyLoad = LazyLoad;

})();
//--------------------------------------------------
//
//  ReceiveSerial
//
//--------------------------------------------------

(function(){

  var gb = jp.co.onepieace;

  function ReceiveSerial() {
    
    //websocket接続
    this.ws = new WebSocket('ws://localhost:8784');

    this.setEvents();
    this.ready();

  }

  ReceiveSerial.prototype = {

    ready: function () {


    },

    pushed: function () {

      // alert('pushed!!!!');

    },

    hide: function () {


    },

    setEvents: function () {

      var self = this;

      // イベント受け取り
      this.ws.onmessage = function(e){

        log(e);
        log(e.data);
        self.pushed();

      };

      // $('#btn_on').click(function(){
      //     ws.send('y');
      // });
      // $('#btn_off').click(function(){
      //     ws.send('n');
      // });

    },

    run: function () {


    }

  }

  gb.ReceiveSerial = ReceiveSerial;

})();
//--------------------------------------------------
//
//  Ajax
//
//--------------------------------------------------

(function(){

  function Ajax(APIURL) {

    this.APIURL = APIURL;

    this.successFunc = null;
    this.errorFunc = null;
    this.status = '';    

  }

  Ajax.prototype = {

    run: function (param) {

      var self = this;

      $.ajax(this.APIURL, param)
      .then(
        function(data){self.successFunc.call(self,data)}, // success
        function(data){self.errorFunc.call(self,data)} // error
      );

    },

    setEvents: function () {

    },

  }

  gb.Ajax = Ajax;

})();
//--------------------------------------------------
//
//  GetData
//
//--------------------------------------------------             

(function(){

  var gb = jp.co.mie;

  function GetData(APIURL) {

    this.APIURL = APIURL;

    // 独自param
    this.page_no = 0;
    this.count = 10;
    this.category_slug = '';
    this.tag_slug = '';
    this.area_slug = '';
    this.author_name = '';
    this.id = -1;

    this.onSuccess = function(){};
    this.onError = function(){};
    this.status = '';

    this.setEvents();

  }

  GetData.prototype = {

    setupTopArticle: function() {

      // param
      this.param = {
                      url: this.APIURL,
                      type: 'get',
                      dataType: 'json',
                      data: {
                        'page_no': this.page_no,
                        'count': this.count,
                        'category_slug': this.category_slug,
                        'tag_slug': this.tag_slug,
                        'area_slug': this.area_slug,
                        'author_name': this.author_name,
                        'search_word': this.search_word,
                      },
                      timeout: 5000,
                      cache:false
                    };

    },

    setupAboutChara: function() {

      // param
      this.param = {
                      url: this.APIURL,
                      type: 'get',
                      dataType: 'json',
                      data: {
                        'id': this.id,
                      },
                      timeout: 5000,
                      cache:false
                    };

    },

    run: function () {

      var self = this;

      log(this.param);

      $.ajax(this.param)
       .then(
        function(data){self.onSuccess.call(self,data)}, // success
        function(data){self.onError.call(self,data)} // error
       );

    },

    setEvents: function () {


    },

  }

  gb.GetData = GetData;

})();
//--------------------------------------------------
//
//  GetDataAboutChara
//
//--------------------------------------------------
// {
// area: "四日市市",
// name: "こにゅうどうくん",
// image: "http://www.mie30.jp/wp/wp-content/uploads/2016/09/20130228_34_19_file.jpg",
// born: "平成9年の市制100周年記念事業開催時に、広く事業をPRするために誕生。その後、市制111周年の際もマスコットキャラクターとして活躍し、本市をPRする存在になっています。",
// url: "http://www5.city.yokkaichi.mie.jp/menu78573.html",
// introduction: "大四日市まつりの呼び物の山車「大入道」をモデルに、誰からも親しまれるようなキャラクターとしています。"
// }

(function(){

  var gb = jp.co.mie;

  function GetDataAboutChara() {

    this.APIURL = '/getCharacterData.php'

    this.cb = function(){};

    this.setup();

  }

  GetDataAboutChara.prototype = {

    setup: function () {

      var self = this;
      this.$target = $('.modal');
      
      // api wrapperのインスタンス化
      this.gd = new gb.GetData(this.APIURL);

      // ajax成功時の処理
      this.gd.onSuccess = function(data) {

        // image
        self.$target.find('.block01 img').attr('src', data.image);

        // name
        self.$target.find('.block01 .tit').html(data.name);

        // area
        self.$target.find('.block01 .text').html(data.area);

        // introduction
        self.$target.find('.block02 .text').html(data.introduction);

        // born
        self.$target.find('.block03 .text').html(data.born);

        // url
        self.$target.find('.block04 a').html(data.url).attr('href', data.url);

        // コールバック実行
        self.cb();

      }

    },

    run: function() {

      // パラメータのセット
      this.gd.setupAboutChara();

      // get ajax実行
      this.gd.run();

    },

  }

  gb.GetDataAboutChara = GetDataAboutChara;

})();
//--------------------------------------------------
//
//  GetDataListArticle s
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function GetDataListArticle() {

    this.$target = $('.section01 .btnWrap');
    this.APIURL = '/getNextPosts.php'
    this.page_no = 0;

    this.categroyNameList = {
      eat: 'たべる', 
      play: 'あそぶ',
      work: 'はたらく',
      live: 'くらす',
      common: 'あるある',
      feature: '特集'
    }
    this.pcCur = -1;
    
    this.setup();
    this.setEvents();

  }

  GetDataListArticle.prototype = {


    setup: function () {

      var self = this;
      
      this.gd = new gb.GetData(this.APIURL);

      this.gd.page_no = 1;
      this.gd.count = 16 ;
      this.gd.category_slug = window.getDataSlug.category_slug;
      this.gd.tag_slug = window.getDataSlug.tag_slug;
      this.gd.area_slug = window.getDataSlug.area_slug;
      this.gd.author_name = window.getDataSlug.author_name;
      this.gd.search_word = window.getDataSlug.search_word;

      // ajax成功時の処理
      this.gd.onSuccess = function(data) {

        self.gd.page_no = data.next_page_no

        // 0だったら、ロードするコンテンツ無し処理
        if (self.gd.page_no == 0) self.onEnd();

        var posts = data.posts_data;
        var html = '';

        $.each(posts, function(index, p) {

          html += '<!-- article -->' +
                   '<div class="article getDataArticle getDataArticle' + self.gd.page_no + '">' +
                   '<a href="'+p.post_url+'">' +
            
                     '<!-- categoryParts -->' +
                     '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
            
                     '<!-- img -->' +
                     '<div class="flex scaleImg" style="background-image: url('+p.thumbnail_image+'"></div>' +
            
                     '<!-- titleWrap -->' +
                     '<div class="titleWrap">' +
                       '<h3 class="fontResponsive">'+p.title+'</h3>' +
                       '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                     '</div>' +
            
                   '</a>' +
                   '</div>';
          
        });

        $('.section01 .articleWrap').append(html);

        // ふわっと表示させる
        var ga = new gb.ShowContents($('.section01 .articleWrap .getDataArticle' + self.gd.page_no));
        ga.runAll();

        // ie対策
        if ($('body').hasClass('ie')) new gb.ForIE();
 
        // layout 画像がloadされるのを待ってlayout処理
        $('.section01 .articleWrap img').on('load', function() {new gb.Section02ArticleHeightSP($('.articleWrap .article'));});

      }

    },

    run: function() {

      // パラメータのセット
      this.gd.category_slug = window.getDataSlug.category_slug;
      this.gd.tag_slug = window.getDataSlug.tag_slug;
      this.gd.area_slug = window.getDataSlug.area_slug;
      this.gd.author_name = window.getDataSlug.author_name;
      this.gd.search_word = window.getDataSlug.search_word;

      this.gd.setupTopArticle();

      // get ajax実行
      this.gd.run();

    },

    onEnd: function() {

      $('.section01 .btnWrap').hide();

    },

    setEvents: function () {

      this.$target.on('click', this.run.bind(this));

    },

  }

  gb.GetDataListArticle = GetDataListArticle;

})();
//--------------------------------------------------
//
//  GetDataListArticleForArea s
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function GetDataListArticleForArea() {

    this.$target = $('.getAreaArticle');
    this.APIURL = '/getNextPosts.php'
    this.page_no = 0;

    this.categroyNameList = {
      eat: 'たべる', 
      play: 'あそぶ',
      work: 'はたらく',
      live: 'くらす',
      common: 'あるある',
      feature: '特集'
    }
    this.pcCur = -1;
    
    this.setup();
    this.setEvents();

  }

  GetDataListArticleForArea.prototype = {


    setup: function () {

      var self = this;
      
      this.gd = new gb.GetData(this.APIURL);

      this.gd.page_no = 0;
      this.gd.count = 16 ;

      // ajax成功時の処理
      this.gd.onSuccess = function(data) {

        self.gd.page_no = data.next_page_no

        // 0だったら、ロードするコンテンツ無し処理
        if (self.gd.page_no == 0) self.onEnd();
        else self.onNotEnd();

        var posts = data.posts_data;
        var html = '';

        $.each(posts, function(index, p) {

          html += '<!-- article -->' +
                   '<div class="article getDataArticle getDataArticle' + self.gd.page_no + '">' +
                   '<a href="'+p.post_url+'">' +
            
                     '<!-- categoryParts -->' +
                     '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
            
                     '<!-- img -->' +
                     '<div class="flex scaleImg" style="background-image: url('+p.thumbnail_image+')"></div>' +
            
                     '<!-- titleWrap -->' +
                     '<div class="titleWrap">' +
                       '<h3 class="fontResponsive">'+p.title+'</h3>' +
                       '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                     '</div>' +
            
                   '</a>' +
                   '</div>';
          
        });

        // リフレッシュなので、articleWrap内のhtmlを削除
        $('.section01 .articleWrap').html('');

        // append
        $('.section01 .articleWrap').append(html);

        // ふわっと表示させる
        var ga = new gb.ShowContents($('.section01 .articleWrap .getDataArticle' + self.gd.page_no));
        ga.runAll();

        // ie対策
        if ($('body').hasClass('ie')) new gb.ForIE();
 
        // layout 画像がloadされるのを待ってlayout処理
        $('.section01 .articleWrap img').on('load', function() {new gb.Section02ArticleHeightSP($('.articleWrap .article'));});

      }

    },

    run: function() {

      // パラメータのセット
      this.gd.setupTopArticle();

      // get ajax実行
      this.gd.run();

    },

    onEnd: function() {

      $('.section01 .btnWrap').hide();

    },

    onNotEnd: function() {

      $('.section01 .btnWrap').show();

    },

    onChange: function(that) {

      var value = $(that).val();
      var areaName = $(".areaBlockWrap option:selected").text();

      // 最初のページを表示するようにする
      this.gd.page_no = 0;
      // もっと見るボタン取得ページ数を最初にする
      gb.in.GDLA.gd.page_no = 1;

      // // パラメータのセット
      window.getDataSlug.area_slug = this.gd.area_slug = value;

      // エリア以外のパラメータ
      this.gd.category_slug = window.getDataSlug.category_slug;
      this.gd.tag_slug = window.getDataSlug.tag_slug;

      // 名称の変更
      $('.selectArea span').text(areaName);

      // // 実行
      this.run();

    },

    setEvents: function () {

      var self = this;

      this.$target.on('change', function() {self.onChange.call(self, this);});

    },

  }

  gb.GetDataListArticleForArea = GetDataListArticleForArea;

})();
//--------------------------------------------------
//
//  GetDataTopArticle s
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function GetDataTopArticle() {

    this.$spTarget = $('.section02 .more.sp');
    this.$pcTarget = $('.section02 .more.pc');
    this.APIURL = '/getNextPosts.php'
    this.page_no = 0;

    this.categroyNameList = {
      eat: 'たべる',
      play: 'あそぶ',
      work: 'はたらく',
      live: 'くらす',
      common: 'あるある',
      feature: '特集'
    }
    this.pcCur = -1;
    this.len = 14;
    
    this.setupSP();
    this.setupPC();
    this.setEvents();

  }

  GetDataTopArticle.prototype = {


    setupSP: function () {

      var self = this;
      
      this.gdSP = new gb.GetData(this.APIURL);

      this.gdSP.page_no = 1;
      this.gdSP.count = 14;

      // ajax成功時の処理
      this.gdSP.onSuccess = function(data) {

        self.gdSP.page_no = data.next_page_no

        // 0だったら、ロードするコンテンツ無し処理
        if (self.gdSP.page_no == 0) self.onEnd();

        var posts = data.posts_data;
        var html = '';

        $.each(posts, function(index, p) {

          html += '<!-- article -->' +
                   '<div class="article getDataArticle getDataArticle' + self.gdSP.page_no + '">' +
                   '<a href="'+p.post_url+'">' +
            
                     '<!-- categoryParts -->' +
                     '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
            
                     '<!-- img -->' +
                     '<div class="flex" style="background-image: url('+p.thumbnail_image+')"></div>' +
            
                     '<!-- titleWrap -->' +
                     '<div class="titleWrap">' +
                       '<h3>'+p.title+'</h3>' +
                       '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                     '</div>' +
            
                   '</a>' +
                   '</div>';
          
        });

        $('.section02 .articleWrap').append(html);

        // ふわっと表示させる
        var ga = new gb.ShowContents($('.section02 .articleWrap .getDataArticle' + self.gdSP.page_no));
        ga.runAll();
 
        // layout 画像がloadされるのを待ってlayout処理
        $('.section02 .articleWrap img').on('load', function() {new gb.Section02ArticleHeightSP($('.section02 .articleWrap .article'));});

      }

    },

    setupPC: function () {

      var self = this;
      
      this.gdPC = new gb.GetData(this.APIURL);

      this.gdPC.page_no = 1;
      this.gdPC.count = 14;

      // ajax成功時の処理
      this.gdPC.onSuccess = function(data) {

        self.gdPC.page_no = data.next_page_no

        // 0だったら、ロードするコンテンツ無し処理
        if (self.gdPC.page_no == 0) self.onEnd();

        var posts = data.posts_data;
        // 上段左
        self.htmlBigArticle01 = '';
        // 上段右
        self.htmlBigArticle02 = '';
        self.htmlSmallArticleTop = '';
        self.htmlSmallArticleMid = '';
        self.htmlSmallArticleBtm = '';

        $.each(posts, function(index, p) {

          self.pcCur++;
          self.pcCur = self.pcCur % self.len;

          // 上段左ブロック
          if (self.pcCur == 0) {
          
            self.htmlBigArticle01 += '<!-- article -->' +
                                '<div class="article getDataArticle getDataArticle' + self.gdPC.page_no + '">' +
                                '<a href="'+p.post_url+'">' +

                                  '<!-- categoryParts -->' +
                                  '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
                                   
                                  '<!-- img -->' +
                                  '<div class="flex">' +
                                  '<div class="scaleImg" style="background-image: url('+p.thumbnail_image+')"></div>' +
                                  '</div>' +

                                  '<!-- titleWrap -->' +
                                  '<div class="titleWrap">' +
                                    '<h3 class="fontResponsive">'+p.title+'</h3>' +
                                    '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                                  '</div>' +

                                '</a>' +
                                '</div>';

          };

          // 下段右ブロック
          if (self.pcCur == 13) {
          
            self.htmlBigArticle02 += '<!-- article -->' +
                                '<div class="article getDataArticle getDataArticle' + self.gdPC.page_no + '">' +
                                '<a href="'+p.post_url+'">' +

                                  '<!-- categoryParts -->' +
                                  '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
                                   
                                  '<!-- img -->' +
                                  '<div class="flex">' +
                                  '<div class="scaleImg" style="background-image: url('+p.thumbnail_image+')"></div>' +
                                  '</div>' +

                                  '<!-- titleWrap -->' +
                                  '<div class="titleWrap">' +
                                    '<h3 class="fontResponsive">'+p.title+'</h3>' +
                                    '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                                  '</div>' +

                                '</a>' +
                                '</div>';

          };

          // 上段右ブロック
          if (self.pcCur >= 1 && self.pcCur <= 4) {
          
            self.htmlSmallArticleTop += '<!-- article -->' +
                                        '<div class="article item getDataArticle getDataArticle' + self.gdPC.page_no + '">' +
                                        '<a href="'+p.post_url+'">' +

                                          '<!-- categoryParts -->' +
                                          '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
                                           
                                          '<!-- img -->' +
                                          '<div class="flex scaleImg" style="background-image: url('+p.thumbnail_image+')"></div>' +

                                          '<!-- titleWrap -->' +
                                          '<div class="titleWrap">' +
                                            '<h3 class="fontResponsive">'+p.title+'</h3>' +
                                            '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                                          '</div>' +

                                        '</a>' +
                                        '</div>';

          };

          // 中段ブロック
          if (self.pcCur >= 5 && self.pcCur <= 8) {
          
            self.htmlSmallArticleMid += '<!-- article -->' +
                                        '<div class="article item getDataArticle getDataArticle' + self.gdPC.page_no + '">' +
                                        '<a href="'+p.post_url+'">' +

                                          '<!-- categoryParts -->' +
                                          '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
                                           
                                          '<!-- img -->' +
                                          '<div class="flex scaleImg" style="background-image: url('+p.thumbnail_image+')"></div>' +

                                          '<!-- titleWrap -->' +
                                          '<div class="titleWrap">' +
                                            '<h3 class="fontResponsive">'+p.title+'</h3>' +
                                            '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                                          '</div>' +

                                        '</a>' +
                                        '</div>';

          };

          // 下段左ブロック
          if (self.pcCur >= 9 && self.pcCur <= 12) {
          
            self.htmlSmallArticleBtm += '<!-- article -->' +
                                        '<div class="article item getDataArticle getDataArticle' + self.gdPC.page_no + '">' +
                                        '<a href="'+p.post_url+'">' +

                                          '<!-- categoryParts -->' +
                                          '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
                                           
                                          '<!-- img -->' +
                                          '<div class="flex scaleImg" style="background-image: url('+p.thumbnail_image+')"></div>' +

                                          '<!-- titleWrap -->' +
                                          '<div class="titleWrap">' +
                                            '<h3 class="fontResponsive">'+p.title+'</h3>' +
                                            '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                                          '</div>' +

                                        '</a>' +
                                        '</div>';

          };

          
        });

        // htmlの生成
        self.createHtmlPC();
        
        // append
        $('.section02 .articleWrap_pc').append(self.htmlPC);

        // ふわっと表示させる
        var ga = new gb.ShowContents($('.section02 .articleWrap_pc .getDataArticle' + self.gdPC.page_no));
        ga.runAll();

        // ie対策
        if ($('body').hasClass('ie')) new gb.ForIE();

        // layout 画像がloadされるのを待ってlayout処理
        $('.section02 .articleWrap_pc img').on('load', function() {new gb.Section02ArticleHeightPC();});

      }

    },

    createHtmlPC: function() {

      this.htmlPCTop =  '<!-- ***********' + 
                        '//  block上段' + 
                        '// *********** -->' + 
                        '<div class="blockTop fBoth">' + 

                          '<!-- 左ブロック -->' + 
                          '<div class="block item">' + 

                            this.htmlBigArticle01 + 

                          '</div>' + 

                          '<!-- 右ブロック -->' + 
                          '<div class="block item fList">' + 

                            this.htmlSmallArticleTop + 

                          '</div>' + 

                        '</div>';

      this.htmlPCMid =  '<!-- ***********' + 
                        '//  block中段' + 
                        '// *********** -->' + 
                        '<div class="blockMid fList">' + 

                          this.htmlSmallArticleMid + 

                        '</div>';

      this.htmlPCBtm =  '<!-- ***********' + 
                        '//  block下段' + 
                        '// *********** -->' + 
                        '<div class="blockBottom fBoth">' + 

                          '<!-- 左ブロック -->' + 
                          '<div class="block item fList">' + 

                            this.htmlSmallArticleBtm + 

                          '</div>' + 

                          '<!-- 右ブロック -->' + 
                          '<div class="block item">' + 

                            this.htmlBigArticle02 + 

                          '</div>' + 

                        '</div>';

      this.htmlPC = this.htmlPCTop + this.htmlPCMid + this.htmlPCBtm;

    },

    runSP: function() {

      // パラメータのセット
      this.gdSP.setupTopArticle();

      // get ajax実行
      this.gdSP.run();

    },

    runPC: function() {

      // パラメータのセット
      this.gdPC.setupTopArticle();

      // get ajax実行
      this.gdPC.run();

    },

    onEnd: function() {

      $('.section02 .btnWrap').hide();

    },

    setEvents: function () {

      this.$spTarget.on('click', this.runSP.bind(this));
      this.$pcTarget.on('click', this.runPC.bind(this));

    },

  }

  gb.GetDataTopArticle = GetDataTopArticle;

})();
//--------------------------------------------------
//
//  pjax
//
//--------------------------------------------------

(function(){

  function Pjax(param) {

    this.param = param;

    this.id = null;
    this.e = null;
    this.nextLink = null;
    this.prevLink = this.getLink();

    this.setup();
    this.setEvents();

  }

  Pjax.prototype = {

    setup: function () {

      gb.pjax = {count:0};
      gb.Timer = null;

      this.display = new gb.DisplayPjax();

    },

    getLink: function () {

      var url = location.href;

      if (url.indexOf('about') !== -1) {
        return '/sp/about';
      } else if (url.indexOf('project') !== -1){
        return '/sp/project';
      } else if (url.indexOf('technology') !== -1){
        return '/sp/technology';
      } else if (url.indexOf('contact') !== -1){
        return '/sp/contact';
      } else if (url.indexOf('detail') !== -1){
        return '/sp/detail';
      } else {
        return '/sp/';
      }

    },

    offEvent: function () {

      $(document).off('ready');
      $(window).off('render load resize');
      $(window).off('touchstart.swipeContents touchmove.swipeContents touchend.swipeContents');
      $(window).off('touchstart.nextLink click.nextLink');
      $(window).off('loadingEnd textEnd');
      $('a.pjax').off('click.nextLink'); 
      $('.pjaxClick').off('click.nextLink'); 
      $('.detailLink').off('click.detail');
      $('.ui__menu_btnC').off('click.detailClose');
      $('.detail .ui__menu_btn_c').off('click.detailClose');

    },

    setID: function () {

      this.id = $('.pjaxWrap').data('id');
      $('body').attr('id', this.id);

    },

    onReady: function () {

      $.pjax(this.param);
        
    },

    onClick: function (e) {

      var href = $(e.currentTarget).attr('href');
      this.e = e;
      this.nextLink = href;

      $(document).trigger('fetch');

    },

    onPjaxFetch: function (e) {


    },

    onFetch: function () {

      // イベント解除
      this.offEvent();      

      // ロック解除
      gb.in.menu.isLock = false;

      this.display.disappearHeader();
      this.display.disappearMenu();
      this.display.disappearContents();
        
    },

    onRender: function () {

      var self = this;

      this.setID();

      this.display.readyRender();
      this.display.appearHeader();
      this.display.appearContents();

      $('a.pjax').on('click.nextLink', function(e){self.onClick.call(self,e)});
      $('a.pjaxClick').on('click.nextLink', function(e){self.onClick.call(self,e)});

      this.prevLink = this.nextLink; 
    },

    setEvents: function () {

      var self = this;

      this.onReady();

      $(document).on('pjax:fetch', function(){self.onPjaxFetch.call(self)});
      $(document).on('fetch', function(){self.onFetch.call(self)});
      $(window).on('pjax:load', function(){self.onRender.call(self)});
      $('a.pjax').on('click.nextLink', function(e){self.onClick.call(self,e)});
      $('a.pjaxClick').on('click.nextLink', function(e){self.onClick.call(self,e)});

    },

  }

  gb.Pjax = Pjax;

})();
//--------------------------------------------------
//
//  NoTransition
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function NoTransition($target) {

    this.$target = $target;

    this.isPCLock = false;
    this.isSPLock = false;

    this.Timer = null;

    this.run();
    this.setEvents();

  }

  NoTransition.prototype = {

    run: function () {

      // ------------------------------------------------------------
      //  ブレイクポイントよりもsp側
      // ------------------------------------------------------------
      if (gb.in.u.isResSP && !this.isSPLock) {
        this.isPCLock = false;
        this.isSPLock = true;

        $('html').addClass('noTransition');

        clearTimeout(this.Timer);
        this.Timer = setTimeout(function(){
          $('html').removeClass('noTransition');
        },200);

      } 

      // ------------------------------------------------------------
      //  ブレイクポイントよりもpc側
      // ------------------------------------------------------------
      if (gb.in.u.isResPC && !this.isPCLock) {
        this.isPCLock = true;
        this.isSPLock = false;

        $('html').addClass('noTransition');

        clearTimeout(this.Timer);
        this.Timer = setTimeout(function(){
          $('html').removeClass('noTransition');
        },200);

      }

    },

    setEvents: function () {

      gb.in.r.add(this.run.bind(this));
    },

  }

  gb.NoTransition = NoTransition;

})();
//--------------------------------------------------
//
//  ResponsiveFontSize
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function ResponsiveFontSize($target) {

    this.$target = $target;

    this.isPCLock = false;
    this.isSPLock = false;

    this.run();
    this.setEvents();

  }

  ResponsiveFontSize.prototype = {

    run: function () {

      this.once(); 
      this.do(); 

    },

    once: function() {

      // ------------------------------------------------------------
      //  ブレイクポイントよりもsp側
      // ------------------------------------------------------------
      if (gb.in.u.isResSP && !this.isSPLock) {
        this.isPCLock = false;
        this.isSPLock = true;

        this.$target.attr('style', '');

      } 

      // ------------------------------------------------------------
      //  ブレイクポイントよりもpc側
      // ------------------------------------------------------------
      if (gb.in.u.isResPC && !this.isPCLock) {
        this.isPCLock = true;
        this.isSPLock = false;

        this.$target.attr('style', '');

        var win = {def: 1080,min: 769,max: 1080};
        this.size = new gb.SizeAdjust(win,this.$target,['font-size']);

      }

    },

    do: function() {

      if (gb.in.u.isResPC) {

        this.size.run();

      } else {



      }

      


    },

    setEvents: function () {

      gb.in.r.add(this.run.bind(this));

    },

  }

  gb.ResponsiveFontSize = ResponsiveFontSize;

})();
//--------------------------------------------------
//
//  SPSensor
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function SPSensor() {

    this.orientation = {};
    // X軸 -90〜90 0:水平 -90または90:垂直
    this.beta = 0;
    // Y軸 -90〜90 0:水平 -90または90:垂直
    this.gamma = 0;
    // Z軸  0〜360 0:北 90:西 180:南 270:東
    this.alpha = 0;

    this.accelerateGx = 0;
    this.accelerateGy = 0;
    this.accelerateGz = 0;

    this.rotationRateBeta = 0;
    this.rotationRateGamma = 0;
    this.rotationRateAlpha = 0;

    this.accelerationX = 0;
    this.accelerationY = 0;
    this.accelerationZ = 0;

    this.setEvents();

  }

  SPSensor.prototype = {

    onDeviceOrientation:function(e) {

      this.beta = e.beta;
      this.gamma = e.gamma;
      this.alpha = e.alpha;

      this.orientation.beta = this.beta;
      this.orientation.gamma = this.gamma;
      this.orientation.alpha = this.alpha;

      gb.socket.emit('orientation', {orientation:this.orientation});

    },

    onDeviceMotion:function(e) {

      this.accelerateGx = e.accelerationIncludingGravity.x
      this.accelerateGy = e.accelerationIncludingGravity.y
      this.accelerateGz = e.accelerationIncludingGravity.z

      this.rotationRateBeta = e.rotationRate.beta
      this.rotationRateGamma = e.rotationRate.gamma
      this.rotationRateAlpha = e.rotationRate.alpha

      this.accelerationX = e.acceleration.x;
      this.accelerationY = e.acceleration.y;
      this.accelerationZ = e.acceleration.z;

      // log(this.accelerateGx,this.accelerateGy,this.accelerateGz);
      // log(this.rotationRateBeta,this.rotationRateGamma,this.rotationRateAlpha);
      // log(this.accelerationX);

    },

    // 方角(deviceorientationを使って)
    getCompassHeading: function (alpha, beta, gamma) {
      // var degtorad = Math.PI / 180;
     
      // var _x = beta ? beta * degtorad : 0;
      // var _y = gamma ? gamma * degtorad : 0;
      // var _z = alpha ? alpha * degtorad : 0;
     
      // var cY = Math.cos(_y);
      // var cZ = Math.cos(_z);
      // var sX = Math.sin(_x);
      // var sY = Math.sin(_y);
      // var sZ = Math.sin(_z);
     
      // var Vx = -cZ * sY - sZ * sX * cY;
      // var Vy = -sZ * sY + cZ * sX * cY;
     
      // var compassHeading = Math.atan(Vx / Vy);
     
      // if (Vy < 0) {
      //   compassHeading += Math.PI;
      // }
      // else if (Vx < 0) {
      //   compassHeading += 2 * Math.PI;
      // }
     
      // return compassHeading * ( 180 / Math.PI );
    },

    vibrate: function(){

      navigator.vibrate(300);

    },
          
    geoLoaction: function(){

      // geolocationのインスタンスと処理をこの中で

    },

    // 照度が変化
    onDeviceLight: function(e) {

      // var lux = event.value;

    },

    // 照度が変化
    onDeviceProximity: function(e) {

      // // センサーの検知範囲に物体がある
      // if (!e.value) {

      // // センサーの検知範囲に物体はない
      // } else {

      // }

    },

         
    setEvents:function() {

      var self = this;

      window.addEventListener('deviceorientation', function(e){self.onDeviceOrientation.call(self,e)});
      // window.addEventListener('devicemotion', function(e){self.onDeviceMotion.call(self,e)});
      // // 照明センサー(firefoxのみ)
      // window.addEventListener("devicelight", this.onDeviceLight.bind(this));
      // // 近接センサー(firefoxのみ)
      // window.addEventListener("deviceproximity", this.onDeviceProximity.bind(this));

    },

  }

  // 公開api
  gb.SPSensor = SPSensor;

})();
// ------------------------------------------------------------
//
//  Swipe
//
// ------------------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function Swipe() {

    this.sY = 0;this.eX = 0; //startX,endX
    this.dis = 0;this.minDis = 50;

    this.setEvents();

  }

  Swipe.prototype = {

    touchStartPos: function (e) {

      this.sY = e.originalEvent.changedTouches[0].pageY;

    },

    touchMovePos: function (e) {

      
    },

    touchEndPos: function (e) {

      this.dis = this.sY - e.originalEvent.changedTouches[0].pageY;
      $(window).trigger('end.swipe');

      // // 移動量を初期化
      this.dis = 0;

    },

    setEvents: function(){

      var self = this;

      $(window).on('touchstart', function(e){self.touchStartPos.call(self,e)});
      $(window).on('touchmove', function(e){self.touchMovePos.call(self,e)});
      $(window).on('touchend', function(e){self.touchEndPos.call(self,e)});

    },
   
  }

  gb.Swipe = Swipe;
    
})();
// ------------------------------------------------------------
//
//  FormMgr
//
// ------------------------------------------------------------

(function(){

  ;

  function FormMgr($sendBtn) {
      
      this.$sendBtn = $sendBtn;
      this.APIURL = '/api/form.php';

      this.status = 'input'; // check,thanks

      this.inputList = [];
      this.isCheck = false;
      this.ajax = null;

      this.setup();
      this.create();
      this.getVal();
      this.setEvents();

  }

  FormMgr.prototype = {

    setup: function() {

      this.ajax = new gb.Ajax(this.APIURL);
      this.ajax.successFunc = this.success;
      this.ajax.errorFunc = this.error;

    },

    create: function() {

      var self = this;

      $('.formItem').each(function(index, el) {

        var input = new gb.Inputitem($(this));
        self.inputList.push(input);
        
      });

    },

    getVal: function () {

      for (var i = 0; i < this.inputList.length; i++) {
        var input = this.inputList[i];
        input.getVal();        
      };

    },

    validate: function () {

      if (this.filledCheck() && this.isCheck) {
        
        this.sendOK();      

      } else {

        // アクティブにしない
        $('#contact .linkBox').addClass('is-not-active');
        this.$sendBtn.off('click');

      }

    },

    filledCheck: function () {

      var isFilled = true;
      $.each(this.inputList, function (index, input) {
          isFilled = input.filled && isFilled;
      });

      return isFilled; 

    },

    sendOK: function () {

      $('#contact .linkBox').removeClass('is-not-active');
      this.$sendBtn.off('click');
      this.$sendBtn.on('click', this.sendMail.bind(this));

    },

    sendMail: function () {

      this.removeAllError();

      var param = {
                    data: { 
                      "name": this.inputList[0].val,
                      "company": this.inputList[1].val,
                      "mail": this.inputList[2].val,
                      "inquiry": this.inputList[3].val
                    },
                    dataType: "json",
                    type: "POST"
                  }
      this.ajax.run(param);

    },

    success: function (data) {

      if (data.data.name) {
        $(".errorText01").append(data.data.name);
        $(".errorText01").prev().addClass('error');
      }
      if (data.data.company) {
        $(".errorText02").append(data.data.company);
        $(".errorText02").prev().addClass('error');
      }
      if (data.data.mail) {
        $(".errorText03").append(data.data.mail);
        $(".errorText03").prev().addClass('error');
      }
      if (data.data.inquiry) {
        $(".errorText04").append(data.data.inquiry);
        $(".errorText04").prev().addClass('error');
      }

      if (data.status == '200') {

        var tl = new TimelineMax();

        tl
          .to($('#form'), 0.8, {
            'opacity': 0,
            y: -50,
            ease: Power3.easeOut,
            onComplete: function(){
              $('#form').hide();

              TweenMax.set($('#thank'), {
                'opacity': 0,
                y: 50,
                'display': 'block',
              });
              $(window).trigger('resize');

            }
          })
          .to($('#thank'), 0.8,  {
            onStart: function(){

            },
            'opacity': 1,
            y: 0,
            ease: Power3.easeOut,
          });

        // TweenMax.set($('#form'), {'display': 'none'});
        // TweenMax.set($('#thank'), {'display': 'block'});
        
      
      };

    },

    error: function (data) {

      alert('errorが発生しました。ブラウザをリロードして再度お試し下さい');

    },

    onTouch: function(self) {

      $(this).toggleClass('is-active');
      var src = $('.checkbox img').attr('src');

      // チェックされているかどうか判定
      if ($(this).hasClass('is-active')) {
        self.isCheck = true;        
        src = strReplace(src, '_off', '_on')
        
      } else {
        self.isCheck = false;
        src = strReplace(src, '_on', '_off')

      }

      // 画像設定
      $('.checkbox img').attr('src',src);

      // sendボタンをアクティブにするかどうか判定
      self.validate();


      function strReplace (str, before, after) {

        var r = new RegExp( before, 'g');

        return str.replace( r , after );

      }

    },

    removeError: function () {

      if ($(this).next().hasClass('errorText')) {
        $(this).next().html('');
      };
      if ($(this).hasClass('error')) {
        $(this).removeClass('error');
      };

    },

    removeAllError: function () {

      if ($('.formItem').next().hasClass('errorText')) {
        $('.formItem').next().html('');
      };
      if ($('.formItem').hasClass('error')) {
        $('.formItem').removeClass('error');
      };

    },

    setEvents: function () {

      var self = this;

      $('.formItem').on('click', function(){self.removeError.call(this,self);});
      $('.formItem').on('blur keydown keyup keypress', this.validate.bind(this,self));
      $('.checkbox').on('touchstart', function(){self.onTouch.call(this,self);});

    },

  }

  gb.FormMgr = FormMgr;

})();
// ------------------------------------------------------------
//
//  Inputitem
//
// ------------------------------------------------------------

(function(){

  ;

  function Inputitem($input) {

    this.$input = $input;
    this.val = null;    
    this.type = '';
    this.filled = false;

    this.setEvents();

  };

  Inputitem.prototype = {

    getVal: function () {

      this.val = this.$input.val();

    },

    filledCheck: function () {

      if (this.val !== '') this.filled = true;
      else this.filled = false;
      
    },

    onChange: function () {

      this.getVal();  
      this.filledCheck();

    },

    setEvents: function () {
      
      this.$input.on('blur keydown keyup keypress', this.onChange.bind(this));

    },

  }

  gb.Inputitem = Inputitem;

})();
//--------------------------------------------------
//
//  pjax
//
//--------------------------------------------------

(function(){

  function Inquiry($target) {

    this.$target = $target;
    this.APIURL = '/api/form.php';

    this.name = $('.formName').val();
    this.company = $('.formCompany').val();
    this.mail = $('.formAdress').val();
    this.contents = $('.formInquiry').val();
    this.isCheck = false;

    this.setEvents();


    log(1);

  }

  Inquiry.prototype = {

    getVal: function () {

      this.name = $('.formName').val();
      this.company = $('.formCompany').val();
      this.mail = $('.formAdress').val();
      this.contents = $('.formInquiry').val();

    },

    inputCheck: function () {

      this.getVal();

      // 全部空じゃなかったら
      if (
          this.name !== '' && 
          this.company !== '' && 
          this.mail !== '' && 
          this.contents !== '' &&
          this.isCheck
          ) {

        this.sendOK();

      } else {
        // アクティブにしない
        $('#contact .linkBox').addClass('is-not-active');
        this.$target.off('click');
      }

    },

    sendOK: function () {

      $('#contact .linkBox').removeClass('is-not-active');
      this.$target.off('click');
      this.$target.on('click', this.sendMail.bind(this));

    },

    sendMail: function () {

      this.getVal();
      this.removeAllError();

      $.ajax(this.APIURL, {
        data: { 
          'name': this.name,
          'company': this.company,
          'mail': this.mail,
          'inquiry': this.contents
        },
        dataType: 'json',
        type: 'POST'
      })
      
      .then(
        // success
        function (data) {

          if (data.data.name) {
            $('.errorText01').append(data.data.name);
            $('.errorText01').prev().addClass('error');
          }
          if (data.data.company) {
            $('.errorText02').append(data.data.company);
            $('.errorText02').prev().addClass('error');
          }
          if (data.data.mail) {
            $('.errorText03').append(data.data.mail);
            $('.errorText03').prev().addClass('error');
          }
          if (data.data.inquiry) {
            $('.errorText04').append(data.data.inquiry);
            $('.errorText04').prev().addClass('error');
          }

          if (data.status == '200') {

            var tl = new TimelineMax();

            tl
              .to($('#form'), 0.8, {
                'opacity': 0,
                y: -50,
                ease: Power3.easeOut,
                onComplete: function(){
                  $('#form').hide();

                  TweenMax.set($('#thank'), {
                    'opacity': 0,
                    y: 50,
                    'display': 'block',
                  });
                  $(window).trigger('resize');

                }
              })
              .to($('#thank'), 0.8,  {
                onStart: function(){

                },
                'opacity': 1,
                y: 0,
                ease: Power3.easeOut,
              });

            // TweenMax.set($('#form'), {'display': 'none'});
            // TweenMax.set($('#thank'), {'display': 'block'});
            
          
          };

        },
        // errorssss
        function (jqXHR) {
          alert('errorが発生しました。ブラウザをリロードして再度お試し下さい');
        }
      );

    },

    onTouch: function() {

      $(this).toggleClass('is-active');
      var src = $('.checkbox img').attr('src');

      // チェックされているかどうか判定
      if ($(this).hasClass('is-active')) {
        gb.in.inquiry.isCheck = true;        
        src = strReplace(src, '_off', '_on')
        
      } else {
        gb.in.inquiry.isCheck = false;
        src = strReplace(src, '_on', '_off')

      }

      // 画像設定
      $('.checkbox img').attr('src',src);

      // sendボタンをアクティブにするかどうか判定
      gb.in.inquiry.inputCheck();


      function strReplace (str, before, after) {

        var r = new RegExp( before, 'g');

        return str.replace( r , after );

      }

    },

    removeError: function () {

      if ($(this).next().hasClass('errorText')) {
        $(this).next().html('');
      };
      if ($(this).hasClass('error')) {
        $(this).removeClass('error');
      };

    },

    removeAllError: function () {

      if ($('.formItem').next().hasClass('errorText')) {
        $('.formItem').next().html('');
      };
      if ($('.formItem').hasClass('error')) {
        $('.formItem').removeClass('error');
      };

    },

    setEvents: function () {

      var self = this;

      $('.formItem').on('click', function(){self.removeError.call(this);});
      $('.formItem').on('blur keydown keypress keyup', this.inputCheck.bind(this));
      $('.checkbox').on('touchstart', function(){self.onTouch.call(this);});

    },

  }

  gb.Inquiry = Inquiry;

})();
// ------------------------------------------------------------
//
//  SocketPC
//
// ------------------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function SocketPC() {

    this.roomID = null;

    this.cnt = 0;
    this.Timer = null;
    this.dis = 0;

    jp.co.plusMV.orientation = {};
    jp.co.plusMV.orientation.beta = 0;
    jp.co.plusMV.orientation.gamma = 0;
    jp.co.plusMV.orientation.alpha = 0;

    this.pairing();
    this.setEvents();
    this.setup();

  }

  SocketPC.prototype = {

    setup: function(){

      new gb.SocketPCOnScroll();
      new gb.SocketPCOnContact();

    },

    // ------------------------------------------------------------
    //
    //  ページ読み込み時サーバー側にイベント発行 / q発行のため
    //
    // ------------------------------------------------------------
    pairing: function(){

      gb.socket.emit('pairingPC', {});

    },

    // ------------------------------------------------------------
    //
    //  pcの現在ページをspに伝達
    //
    // ------------------------------------------------------------
    pageID: function(){

      var id = $('body').attr('id');
      gb.socket.emit('pageID', {id:id,roomID:this.roomID});

    },

    // ------------------------------------------------------------
    //
    //  QRコード生成
    //
    // ------------------------------------------------------------
    onGenerateQR: function(data){

      log(data);
      this.roomID = data.id;

      // ------------------------------------------------------------
      //  端末が特定台数以上だと、台数制限ページヘ
      // ------------------------------------------------------------
      // if (data.cntD > 3) {
      //   alert('台数制限ページ');
      //   return;
      // };

    
      // ------------------------------------------------------------
      //  qrコード生成
      // ------------------------------------------------------------
      // ドメイン判定
      var url = location.href;

      if (gb.in.u.isContain(url,'localhost')) {
        var domain = 'http://172.16.1.15:3030/';
      } else {
        var domain = gb.in.u.protocol()+'//'+gb.in.u.host()+':'+gb.in.u.port()+'/';
      }

      // qr生成
      $(".box__qr").MyQRCode({
          size:'174x174',
          content: domain + "sp/controller/index.html?q=" + data.id,
      });

    },

    // ------------------------------------------------------------
    //
    //  ペアリング成功
    //
    // ------------------------------------------------------------
    onSuccessPairing: function(){

      // step2を消す
      $('.device_select .step--num02').trigger('successPairing');
      // スマホモード
      common.gb.isSPOperateMode = true;
      // スマホモード用のclass付加
      $('html').addClass('is-connect');
      // スマホコントローラーcanvas開始
      gb.in.SPCLoop.loop();
      // ページ情報をspに
      this.pageID();

    },

    // ------------------------------------------------------------
    //
    //  Exit
    //
    // ------------------------------------------------------------
    onExit: function(){

      location.reload();

    },

    // ------------------------------------------------------------
    //  指押すととメニュー開く
    // ------------------------------------------------------------
    onStart: function () {

      // デバイス選択モードが終わっていたら
      if ($('.device_select').hasClass('is-end')) {

          common.gb.menu._open();
          
      };

    },

    onEnd: function () {

      // ------------------------------------------------------------
      // ページ遷移
      // ------------------------------------------------------------
      if(gb.url == 'undefined') {

        // ------------------------------------------------------------
        //  メニュー閉じる
        // ------------------------------------------------------------
        // デバイス選択モードが終わっていたら
        if ($('.device_select').hasClass('is-end')) common.gb.menu._close();

      } else {

        clearTimeout(this.Timer);
        this.Timer = setTimeout(function(){

          // ------------------------------------------------------------
          //  メニュー閉じる
          // ------------------------------------------------------------
          common.gb.menu._close();

          // ------------------------------------------------------------
          //  device select時 topでなければ次の処理をしない
          // ------------------------------------------------------------
          if (!$('.device_select').hasClass('is-end') && gb.url !== '/pc/') return;

          switch (gb.url){
            case '/pc/':
              $.pjax.click($('.pjaxTop'));
              break;
            case '/pc/project':
              $.pjax.click($('.pjaxProject'));
              break;
            case '/pc/detail':
              if ($('body').attr('id')=='page_project' || $('body').attr('id')=='page_project_detail') {
                $.pjax.click($('.pjaxDetail'));
              }
              if ($('body').attr('id')=='page_technology') {
                $('.pjaxDetail').trigger('click');  
              };
              break;
            case '/pc/detail/close':
              if ($('body').attr('id')=='page_project_detail') {
                $.pjax.click($('.pjaxProject'));
              }

              if ($('body').attr('id')=='page_technology') {
                $('.pjaxDetail').trigger('click');  
              };
              break;
            case '/pc/about':
              $.pjax.click($('.pjaxAbout'));
              break;
            case '/pc/technology':
              $.pjax.click($('.pjaxTechnology'));
              break;
            case '/pc/contact':
              $.pjax.click($('.pjaxContact'));
              break;
            case 'playVideo':
              
              log(jp.co.plusMV.in.YI.player);
              if (jp.co.plusMV.in.YI.player) {
                jp.co.plusMV.in.YI.player.playVideo();
                TweenMax.to($('.playBox'),1,{
                  opacity:0,
                  ease:Power3.easeInOut
                })
              }

              break;
          } 

        },300);

      }
      
    },

    onSelectAgain: function() {

      $('.device_select').show();
      TweenMax.set($('.device_select'), {scale: 1,'visibility':'visible'});
      TweenMax.to($('.device_select'), 1, {
        opacity: 1,
        ease: Power2.easeOut
      });

    },

    onOrientation: function(data) {

      jp.co.plusMV.orientation.beta = data.orientation.beta;
      jp.co.plusMV.orientation.gamma = data.orientation.gamma;
      jp.co.plusMV.orientation.alpha = data.orientation.alpha;
 
    },

    setEvents: function(){

      var self = this;

      gb.socket.on('generateQR', function(data){ self.onGenerateQR.call(self,data);});
      gb.socket.on('successParing', function(data){ self.onSuccessPairing.call(self,data);});
      gb.socket.on('exitPC', function(data){ self.onExit.call(self,data);});
      $(window).on('start', this.onStart.bind(this));
      $(window).on('end', this.onEnd.bind(this));
      $('.devide_controller').on('click', this.onSelectAgain.bind(this));
      gb.socket.on('orientation', function(data){self.onOrientation.call(self,data);});

    },

  }

  gb.SocketPC = SocketPC;

})();
// ------------------------------------------------------------
//
//  SocketPCOnContact
//
// ------------------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function SocketPCOnContact() {

    this.setup();
    this.setEvents();

  }

  SocketPCOnContact.prototype = {

    setup: function(){

    },

    onKey: function(data) {

      $('.formName').val(data.text01);
      $('.formCompany').val(data.text02);
      $('.formAddress').val(data.text03);
      $('.formInquiry').val(data.text04);

      gb.in.inquiry.inputCheck();
      gb.in.inquiry.removeAllError();

    },

    onContactCheck: function(data) {

      gb.in.inquiry.onTouch.call($('.checkbox'));

    },

    onContactSuccess: function(data) {

      var obj = {};
      obj.data = data.data.data;
      obj.status = data.data.status;
      gb.in.inquiry.sendSuccess(obj);

    },

    onContactError: function() {

      log('error');
      gb.in.inquiry.sendError();

    },

    setEvents: function(){

      var self = this;

      gb.socket.on('key', function(data){self.onKey.call(self,data);});
      gb.socket.on('contactCheck', function(data){self.onContactCheck.call(self,data);});
      gb.socket.on('contact_success_sp', function(data){self.onContactSuccess.call(self,data);});
      gb.socket.on('contact_error_sp', function(data){self.onContactError.call(self,data);});

    },

  }

  gb.SocketPCOnContact = SocketPCOnContact;

})();
// ------------------------------------------------------------
//
//  SocketPCOnScroll
//
// ------------------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function SocketPCOnScroll() {

    this.cnt = 0;
    this.Timer = null;
    this.dis = 0;

    this.setup();
    this.setEvents();

  }

  SocketPCOnScroll.prototype = {

    setup: function(){


    },

    onScrollMove: function () {

      this.dis = gb.start.y - gb.y;
      
      // 値の微調整
      if ($('body').attr('id') == 'page_about') this.dis *= 3;
      else this.dis *= 4;


      // projectページの場合は、スクロールをキャンセル
      if ($('body').attr('id') == 'page_project') return;
      // aboutページの場合は、section04部分だけスクロール

      if ($('body').attr('id') == 'page_about'){


        if (common.gb.aboutScroll.isScrollOKForSP) {
          TweenMax.to($('.section04'),0.5,{
            scrollTop: '+=' + this.dis,
            ease: Power2.easeOut
          });
        };

      // その他は通常html,body
      } else {

        if (gb.ua.isFirefox) {
          TweenMax.to($('body,html'),0.5,{
            scrollTop: '+=' + this.dis,
            ease: Power2.easeOut
          });
        } else {
          TweenMax.to($('html,body'),0.5,{
            scrollTop: '+=' + this.dis,
            ease: Power2.easeOut
          });
        }

      }

      // ------------------------------------------------------------
      // project detailページスクロール
      // ------------------------------------------------------------
      if ($('body').attr('id') == 'page_project_detail') {

        var st = $('body').scrollTop();
        if (st>=0) $(window).trigger('projectDetailTween');

        log(common.gb.projectDetail.isYoutubeLock);
        // youtubeiframe読み込み済みなら
        if (!common.gb.projectDetail.isYoutubeLock) {
          var state = jp.co.plusMV.in.YI.player.getPlayerState();
          if (state==1) {
            jp.co.plusMV.in.YI.player.pauseVideo();
            TweenMax.to($('.playBox'),1,{
              opacity: 1,
              ease:Power3.easeInOut
            })
          }
        };

      };

    },

    onScrollEnd: function () {

      // ------------------------------------------------------------
      // aboutページスクロール
      // ------------------------------------------------------------

      if ($('body').attr('id') == 'page_about') {

        if (this.dis>10) {

          if (common.gb.aboutScroll.current!==3) common.gb.aboutScroll.up();

        } else if (this.dis<-10){

          if (common.gb.aboutScroll.current!==3) common.gb.aboutScroll.down();
          if (common.gb.aboutScroll.current==3 && common.gb.aboutScroll.st==0) common.gb.aboutScroll.down(); 

        }  

      };

      // ------------------------------------------------------------
      // projectページスクロール
      // ------------------------------------------------------------

      if ($('body').attr('id') == 'page_project'  && !$('.main_menu__container').hasClass('menuOpen')) {

        if (this.dis>10) {

          if (!common.gb.projectScroll.props.isAnimate) common.gb.projectScroll._slideDown();

        } else if (this.dis<-10){

          if (!common.gb.projectScroll.props.isAnimate) common.gb.projectScroll._slideUp();

        }  

      };

      // ------------------------------------------------------------
      // project detailページスクロール
      // ------------------------------------------------------------
      if ($('body').attr('id') == 'page_project_detail') {

        // 動画の高さの3/4以上がviewport内に入っていたら
        if ($('.block__movie').get(0) == undefined) return;
        var mh = $('.block__movie').height(); //movie height
        var mSt = $('.block__movie').offset().top;
        var mSb = mSt + mh;
        var mh = $('.block__movie').height();
        var h = $(window).height()
        var st = $(window).scrollTop()
        var sb = st + h;

        // 上から && 下から
        if (mSt+mh*3/4 < sb && mSb - mh*3/4 > st) {

          if (gb.ua.isFirefox) {
            TweenMax.to($('body,html'), 0.7, {
              scrollTop: mSt - (h-mh)/2,
              ease: Power3.easeOut,
              delay: 0.3
            });
          } else {
            TweenMax.to($('html,body'), 0.7, {
              scrollTop: mSt - (h-mh)/2,
              ease: Power3.easeOut,
              delay: 0.3
            });

          }

        };

      };

      // ------------------------------------------------------------
      // technologyページスクロール
      // ------------------------------------------------------------
      if ($('body').attr('id') == 'page_technology') {

        if ($('.block--case_study .item_detail').hasClass('is-active')) {

          if (this.dis>10) {

            common.gb.technology.modal._playMovieTween();

          } else if (this.dis<-10){

            common.gb.technology.modal._pauseMovieTween();
            common.gb.technology.player.pauseVideo();

          }  

        } else {

          if (this.dis>10) {

            common.gb.technologyScroll._slideDown();

          } else if (this.dis<-10){

            common.gb.technologyScroll._slideUp();

          }

        }

      };

    },

    setEvents: function(){

      var self = this;

      $(window).on('scrollMove', this.onScrollMove.bind(this));
      $(window).on('scrollEnd', this.onScrollEnd.bind(this));

    },

  }

  gb.SocketPCOnScroll = SocketPCOnScroll;

})();
// ------------------------------------------------------------
//
//  SocketPCSP
//
// ------------------------------------------------------------

(function(){

  var gb = jp.co.sjPlus;
  gb.start = {};
  gb.start.y = 0;

  function SocketPCSP() {


    this.setEvents();

  }

  SocketPCSP.prototype = {

    onStart: function() {

      $(window).trigger('start');

    },

    onMove: function(data) {

      var x = (data.x) * ($('.touchArea').width() / data.w);
      var y = (data.y) * ($('.touchArea').height() / data.h);

      if (gb.ua.devicePC) {
        gb.x = x / data.scale;
        gb.y = y / data.scale;
      } else {
        gb.x = x;
        gb.y = y;
      }

      $(window).trigger('move');

    },

    onTouch: function(data) {

      gb.tArr = data.arr;
      $(window).trigger('touch');

    },

    onTouchNew: function(data) {

      gb.curNum = data.curNum;
      $(window).trigger('touchNew');

    },

    onRightMark: function(data) {

      gb.url = data.url;
      $(window).trigger('rightMark');

    },

    onEnd: function(data) {

      gb.url = data.url;
      gb.touchedList = data.touchedList;
      $(window).trigger('end'); 

    },

    onScrollStart: function(data) {

      var y = data.y * ($('.touchArea').height() / data.h);
      gb.start.y = y;

      $(window).trigger('scrollStart');

    },

    onScrollMove: function(data) {

      var x = data.x * ($('.touchArea').width() / data.w);
      var y = data.y * ($('.touchArea').height() / data.h);
      gb.x = x;
      gb.y = y;

      $(window).trigger('scrollMove');

    },

    onScrollEnd: function(data) {

      $(window).trigger('scrollEnd');

    },

    onPageID: function(data) {

      gb.pageID = data.id;

    },

    onDeviceSelect: function(data) {

      gb.deviceSelect = data.status;

    },

    setEvents: function() {

      var self = this;

      gb.socket.on('start', function(data){self.onStart.call(self,data);});
      gb.socket.on('move', function(data){self.onMove.call(self,data);});
      gb.socket.on('touch', function(data){self.onTouch.call(self,data);});
      gb.socket.on('touchNew', function(data){self.onTouchNew.call(self,data);});
      gb.socket.on('rightMark', function(data){self.onRightMark.call(self,data);});
      gb.socket.on('end', function(data){self.onEnd.call(self,data);});
      gb.socket.on('scrollStart', function(data){self.onScrollStart.call(self,data);});
      gb.socket.on('scrollMove', function(data){self.onScrollMove.call(self,data);});
      gb.socket.on('scrollEnd', function(data){self.onScrollEnd.call(self,data);});
      gb.socket.on('pageID', function(data){self.onPageID.call(self,data);});
      gb.socket.on('deviceSelect', function(data){self.onDeviceSelect.call(self,data);});

    },

  }
  
  gb.SocketPCSP = SocketPCSP;

})();
// ------------------------------------------------------------
//
//  SocketSP
//
// ------------------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function SocketSP() {

    this.$target = null;
    this.$canvasArea = null;
    this.$scrollArea = null;

    this.state = '';
      // scroll スクロール状態
      // draw 線描く状態
    this.tAry = []; //touch array
    this.curNum = -1;
    this.startNum = -1;
    this.endNum = 0;
    this.url = 'undefined';
    this.preUrl = '';
    this.touchedList = [];

    this.circlePos = gb.data;
    this.maxDis = 45;
    this.len = this.circlePos.length;

    this.urlList = {
      // '0345': '/pc/',
      '13457': '/pc/',
      '02346': '/pc/project',
      '1345': '/pc/detail',
      // '678': '/pc/detail',
      '246': '/pc/detail/close',
      '01235678': '/pc/about',
      '03458': '/pc/technology',
      '0124': '/pc/contact',
      '1457': 'playVideo',
    };

    this.W = null;this.H = null;
    this.w = null;this.h = null;
    this.x = null;this.y = null;
    this.scale = 1;

    this.isStop = false;
    this.scTimer = null; //scroll画像用timer
    this.animate = null;

    this.pairing();
    this.setEvents();
    // this.ready();

  }

  SocketSP.prototype = {

    pairing: function() {

      var url = location.href;
      var query = url.split('?')[1];
      var roomID = query.split('=')[1];

      gb.socket.emit('pairingSP', {roomID:roomID});
      gb.roomID = roomID;

    },

    ready: function() {

      this.$target = $('.touchArea');
      this.W = window.innerWidth;
      this.H = window.innerHeight;
      this.w = this.$target.width();
      this.h = this.$target.height();

      this.scale = parseInt($('.line').attr('width')) / parseInt($('.line').css('width'));
      log(parseInt($('.line').attr('width')),parseInt($('.line').css('width')));

    },

    // ------------------------------------------------------------
    //  指で触り始めた時
    // ------------------------------------------------------------
    onStart: function(e){

      if (this.isStop) return;

      gb.socket.emit('start', {});

      this.tAry = [];
      this.startNum = -1;
      this.curNum = -1;
      this.preUrl = '';
      this.touchedList = [];

      if (this.scTimer) clearTimeout(this.scTimer);
      TweenMax.killTweensOf(this.animate);
      this.animate = TweenMax.to($('.scrollArea'), 0.5, {
          opacity: 0,
          onComplete: function() {
            $('.scrollArea').hide();
          }
        });

    },

    // ------------------------------------------------------------
    // 指でなぞっている時
    // ------------------------------------------------------------
    onMove: function(e){

      if (this.isStop) return;

      this.x = -1 * $('.touchArea').offset().left + e.originalEvent.changedTouches[0].pageX; 
      this.y = -1 * $('.touchArea').offset().top + e.originalEvent.changedTouches[0].pageY;

      var data = { 
                    x: this.x * this.scale,
                    y: this.y * this.scale,
                    w: this.w,
                    h: this.h,
                    scale: this.scale
                  };
      gb.socket.emit('move', data);

      this.onTouch();

    },

    // ------------------------------------------------------------
    // 指で、丸に触れた際
    // ------------------------------------------------------------
    onTouch: function(){

      var tPos = {x: this.x * this.scale,y: this.y * this.scale,} //touch postion

      for (var i = 0; i < this.len; i++) {

        if (gb.in.u.dist(this.circlePos[i],tPos)<this.maxDis && this.curNum !== i) {

          if (this.startNum == -1) this.startNum = i;
          this.curNum = i;
          if (!this.checkRepeat()) gb.socket.emit('touchNew', { curNum: this.curNum});
          this.tAry.push(i);

          gb.socket.emit('touch', { arr: this.tAry});

        };

      };

      this.onRightMark();


    },

    // ------------------------------------------------------------
    //  重複してないかどうか確認
    // ------------------------------------------------------------
    checkRepeat: function() {

      for (var j = 0; j < this.touchedList.length; j++) {
        if (this.touchedList[j] == this.curNum) return true;
      };

      return false;

    },

    // ------------------------------------------------------------
    // 正しいマークを書いたかどうか確かめる
    // ------------------------------------------------------------
    onRightMark: function(){

      var arr = [];
      // ソート
      arr = gb.in.u.descend(this.tAry);
      // 重複削除
      arr = gb.in.u.removeRepeat(arr);
      this.touchedList = arr;

      // 連結して文字列化 → リンク取得
      var order = arr.join('');
      this.url = this.urlList[order]
      if (this.url == undefined) this.url = 'undefined';

      // デバイス選択時は特定の図形でしか光らせない
      if (gb.deviceSelect=='yet') {

        if (order !== '0345') return;

      };


      // markがaboutとcontactの時
      if (this.url == '/pc/about' || this.url == '/pc/contact') {
        
        // 最初のタッチと最後のタッチが同じかどうか かつ 全ての番号が触れられている場合
        // 正しいマークですよイベント発行
        if ((this.startNum == this.curNum) && (this.url !== 'undefined')) {

          if (this.preUrl == this.url) return;
          gb.socket.emit('rightMark', {url:this.url});
          this.preUrl = this.url;

        };

      // detailとcloseの時
      } else if ((this.url == '/pc/detail' || this.url == '/pc/detail/close')) {

        var id = gb.pageID;
        if (id == 'page_project' || id == 'page_project_detail' || id == 'page_technology') {

          if (this.preUrl == this.url) return;
          gb.socket.emit('rightMark', {url:this.url});
          this.preUrl = this.url;

        };

      // それ以外の時
      } else if ((this.url !== 'undefined')) {

        if (this.preUrl == this.url) return;
        gb.socket.emit('rightMark', {url:this.url});
        this.preUrl = this.url;

      }


    },

    onEnd: function(e){

      var self = this;

      if (this.url == 'undefined') {

        this.scTimer = setTimeout(function(){

          self.tweenScrollAreaHide();
          
        },1000);

      } else {

        this.isStop = true;

        clearTimeout(this.scTimer);
        this.scTimer = setTimeout(function(){

          self.tweenScrollAreaHide();
          // end処理
          self.isStop = false;
          
        },1000);

      }

      gb.socket.emit('end', {url: this.url,touchedList: this.touchedList});
      this.url = 'undefined';

    },

    tweenScrollAreaHide: function() {

      // scrollarea appear
      $('.scrollArea').css('display', 'block');
      TweenMax.killTweensOf(this.animate);
      this.animate = TweenMax.to($('.scrollArea'), 0.5, {opacity: 1});

    },

    onPrevent: function (e){
      // デフォルトの動作を止める
      e.preventDefault();
      e.stopPropagation();

    },

    onResize: function (e){
      
      this.W = window.innerWidth;
      this.H = window.innerHeight;
      this.w = this.$target.width();
      this.h = this.$target.height();

      this.scale = parseInt($('.line').attr('width')) / parseInt($('.line').css('width'));

    },

    onStartScrollArea: function(e){

      e.stopPropagation();
      e.preventDefault();

      // 一旦タッチポイントを消す
      this.tAry = [];
      this.touchedList = [];

      this.h = $('.touchArea').height();
      this.y = -1 * $('.touchArea').offset().top + e.originalEvent.changedTouches[0].pageY;

      gb.socket.emit('scrollStart', {y: this.y,h: this.h});
      
      return false;

    },

    onMoveScrollArea: function (e){

      e.stopPropagation();
      e.preventDefault();

      this.x = -1 * $('.touchArea').offset().left + e.originalEvent.changedTouches[0].pageX; 
      this.y = -1 * $('.touchArea').offset().top + e.originalEvent.changedTouches[0].pageY;

      gb.socket.emit('scrollMove', { x: this.x, y: this.y, w: this.w, h: this.h });
      
      return false;

    },

    onEndScrollArea: function (e){

      e.stopPropagation();
      e.preventDefault();

      gb.socket.emit('scrollEnd', {});
      
      return false;

    },

    onSetSPControllerEvents: function (e){

      var self = this;
      this.$canvasArea = $('.canvasArea');
      this.$scrollArea = $('.scrollArea');
      
      // タッチ座標をサーバーに渡す
      this.$scrollArea.on('touchstart', function(e){self.onStartScrollArea.call(self,e);});
      this.$scrollArea.on('touchmove', function(e){self.onMoveScrollArea.call(self,e);});
      this.$scrollArea.on('touchend', function(e){self.onEndScrollArea.call(self,e);});
      this.$canvasArea.on('touchstart', function(e){self.onStart.call(self,e);});
      this.$canvasArea.on('touchstart touchmove', function(e){self.onMove.call(self,e);});
      this.$canvasArea.on('touchend', function(e){self.onEnd.call(self,e);});
      gb.in.u.setPrevent();

      // contact
      $('.formName').on("keyup keydown keypress", function(e){self.onInput.call(self,e);});
      $('.formCompany').on("keyup keydown keypress", function(e){self.onInput.call(self,e);});
      $('.formAddress').on("keyup keydown keypress", function(e){self.onInput.call(self,e);});
      $('.formInquiry').on("keyup keydown keypress", function(e){self.onInput.call(self,e);});
      $('.checkbox').on('touchstart', function(){self.onCheck.call(this);});

    },

    onInput: function (e){

      var text01 = $('.formName').val();
      var text02 = $('.formCompany').val();
      var text03 = $('.formAddress').val();
      var text04 = $('.formInquiry').val();

      gb.socket.emit('key', {text01:text01,text02:text02,text03:text03,text04:text04});

    },

    onCheck: function (e){

      gb.socket.emit('contactCheck', {});

    },

    onContactSuccess: function(data) {

      var obj = {};
      obj.data = data.data.data;
      obj.status = data.data.status;
      gb.in.inquiry.sendSuccess(obj);

    },

    onContactError: function() {

      log('error');
      gb.in.inquiry.sendError();

    },

    onPageID: function(data) {

      var id = data.id;
      log(id,data.pjax);
      if (id == 'page_contact' && data.pjax) {
        gb.in.modal.open();

        TweenMax.set($('#form'), {opacity: 1,display: 'block',y: 0});
        TweenMax.set($('#thank'), {opacity: 0,display: 'none',y: 0});
        gb.in.u.removePrevent();
      }

    },

    setEvents: function () {

      var self = this;

      $(window).on('resize', function(e){self.onResize.call(self,e);});
      $(window).on('layoutEnd', function(e){self.ready.call(self,e);});
      gb.socket.on('successParing', this.onSetSPControllerEvents.bind(this));
      gb.socket.on('contact_success_pc', function(data){self.onContactSuccess.call(self,data);});
      gb.socket.on('contact_error_pc', function(data){self.onContactError.call(self,data);});
      gb.socket.on('pageID', function(data){self.onPageID.call(self,data);});
      log(1);

    },

  }

  gb.SocketSP = SocketSP;

})();
//--------------------------------------------------
//
//  BgLine
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function BgLine() {

    this.$target = $('.lineWrap .line');
    this.cur = 0;
    this.next = 1;
    this.imgZIndex = 10000;

    this.isFlag = true;

    this.setup();
    this.setEvents();

  }

  BgLine.prototype = {

    setup: function() {


    },

    run: function() {

      if (gb.in.up.cnt % 10 !== 0) return;

      if (this.isFlag) {

        TweenMax.set(this.$target.eq(0), {x: '-50%', opacity: 0, scale: 1 + (Math.random() * 2 - 1) * 0.03})
        TweenMax.set(this.$target.eq(1), {x: '-50%', opacity: 1, scale: 1 + (Math.random() * 2 - 1) * 0.03})

      } else {

        TweenMax.set(this.$target.eq(0), {x: '-50%', opacity: 1, scale: 1 + (Math.random() * 2 - 1) * 0.03})
        TweenMax.set(this.$target.eq(1), {x: '-50%', opacity: 0, scale: 1 + (Math.random() * 2 - 1) * 0.03})

      }

      this.isFlag = !this.isFlag;
      
    },

    setEvents: function() {

      gb.in.up.add(this.run.bind(this));

    },

  }

  gb.BgLine = BgLine;

})();
//--------------------------------------------------
//
//  BgSVGMotion
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function BgSVGMotion($target) {

    this.$target = $target;

    this.tlMain = new TimelineMax();

    this.setup();
    this.setEvents();

  }

  BgSVGMotion.prototype = {

    setup: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------      
      // this.$svg02 = $('.svg_ise01_02');
      // this.$svg03 = $('.svg_ise01_03');
      // this.$svg04 = $('.svg_ise01_04');
      // this.$svg05 = $('.svg_ise01_05');
      // this.$svg06 = $('.svg_ise02_01');

      this.runReady();

      // ------------------------------------------------------------
      // スクロール値の設定
      // ------------------------------------------------------------

      this.stInfo = {isLock: false,st: 0}
      // this.stInfoStep02 = {isLock: false,st: 0}
      // this.stInfoStep03 = {isLock: false,st: 0}

      this.getST();

    },

    getST: function() {

      this.stInfo.st = this.$target.offset().top + this.$target.height() * 2;

      // this.stInfoStep02.st = this.$svg01.offset().top + this.$svg01.height()/2;
      // this.stInfoStep03.st = this.$svg01.offset().top + this.$svg01.height()/2;

    },

    runReady: function() {

      // TweenMax.killTweensOf(this.$titImg);
      TweenMax.killTweensOf(this.$target.find('path'));

      TweenMax.to(this.$target.find('path'), 0.4, {drawSVG:0,fill: 'none',stroke: '#737270'});
      // TweenMax.set(this.$target.find('path'), {drawSVG:0,fill: 'none',stroke: 'red'});

    },

    run: function(sb) {

      // 特定のスクロールトップ値を超えた時に一度だけ処理をする
      if (this.stInfo.isLock && this.stInfo.st > sb) {
        this.runReady();
        this.stInfo.isLock = false;
      }
      if (!this.stInfo.isLock && this.stInfo.st < sb) this.stInfo.isLock = true;
      else return


      this.tlMain.kill();
      this.tlMain
        // svgの描画
        .to(this.$target.find('path'), 5.0, {
          drawSVG: '100%', 
          ease:Power2.easeInOut,
        })
        .to(this.$target.find('path'), 1.5, {
          fill: '#737270',
          stroke: 'none',
          ease:Power2.easeInOut,
        },'-=4.0')

    },

    onScroll: function() {

      var sb = gb.in.s.sb;

      this.getST();

      this.run(sb);

    },

    setEvents: function() {

      gb.in.s.add(this.onScroll.bind(this))

    },

  }

  // 公開api
  gb.BgSVGMotion = BgSVGMotion;
  
})();
//--------------------------------------------------
//
//  Cv2dMotion
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie

  function Cv2dMotion() {

    this.tlMain = new TimelineMax();


    this.setup();
    this.run();
    this.setEvents();

  }

  Cv2dMotion.prototype = {

    setup: function() {

      gb.in.dmLibs = new gb.Cv2dMotionLibs();

    },

    run: function() {

      // 最初
      gb.in.opening = new gb.Opening();
      
      gb.in.section01 = new gb.Section01();
      gb.in.section02 = new gb.Section02();
      gb.in.section03 = new gb.Section03();
      gb.in.section04 = new gb.Section04();
      gb.in.section05 = new gb.Section05();

    },

    setEvents: function() {

      // hover
      new gb.HoverShare();
      // hover
      gb.in.applyBtn = new gb.ApplyBtn();
      // click
      new gb.QAAccordion();


    },

  }

  // 公開api
  gb.Cv2dMotion = Cv2dMotion;
  
})();
//--------------------------------------------------
//
//  DomMotion
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie

  function DomMotion() {

    this.tlMain = new TimelineMax();


    this.setup();
    this.run();
    this.setEvents();

  }

  DomMotion.prototype = {

    setup: function() {

      gb.in.dmLibs = new gb.DomMotionLibs();

    },

    run: function() {

      // 最初
      gb.in.opening = new gb.Opening();
      
      gb.in.section01 = new gb.Section01();
      gb.in.section02 = new gb.Section02();
      gb.in.section03 = new gb.Section03();
      gb.in.section04 = new gb.Section04();
      gb.in.section05 = new gb.Section05();

    },

    setEvents: function() {

      // hover
      new gb.HoverShare();
      // hover
      gb.in.applyBtn = new gb.ApplyBtn();
      // click
      new gb.QAAccordion();


    },

  }

  // 公開api
  gb.DomMotion = DomMotion;
  
})();
//--------------------------------------------------
//
//  EditorTitMorph
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function EditorTitMorph($target) {

    this.$targets = $target.find('.tit .svg_chiefEditor');
    this.$targetDef = $target.find('.tit .svg_chiefEditorDef');
    this.$target01 = $target.find('.tit .svg_chiefEditor01');
    this.$target02 = $target.find('.tit .svg_chiefEditor02');
    this.$target03 = $target.find('.tit .svg_chiefEditor03');
    this.$target04 = $target.find('.tit .svg_chiefEditor04');
    this.$target05 = $target.find('.tit .svg_chiefEditor05');
    this.$target06 = $target.find('.tit .svg_chiefEditor06');

    this.$targetPathDef = this.$targetDef.find('path');
    this.$targetPath01 = this.$target01.find('path');
    this.$targetPath02 = this.$target02.find('path');
    this.$targetPath03 = this.$target03.find('path');
    this.$targetPath04 = this.$target04.find('path');
    this.$targetPath05 = this.$target05.find('path');
    this.$targetPath06 = this.$target06.find('path');

    this.$targetPathList = [
      this.$targetPath01,
      this.$targetPath02,
      this.$targetPath03,
      this.$targetPath04,
      this.$targetPath05,
      this.$targetPath06
    ]

    this.lenList = [
      this.$targetPath01.length,
      this.$targetPath02.length,
      this.$targetPath03.length,
      this.$targetPath04.length,
      this.$targetPath05.length,
      this.$targetPath06.length
    ]

    this.$basis = this.$targetDef;

    this.cur = 0;
    this.next = 1;

    this.setup();
    this.start();
    this.setEvents();

  }

  EditorTitMorph.prototype = {

    setup: function() {

      this.$basis.attr('class', function(index, classNames) {return classNames + ' svg01';});

      this.s = new gb.SomeTimes(0,0);

    },

    start: function() {

      var self = this;
      this.s.add(function(){

        self.runFade.call(self,self.cur,self.next);

        self.cur++;
        self.cur = self.cur % 6;
        self.next++;
        self.next = self.next % 6;

      },3,3);
      this.s.start();

    },

    run: function() {

      var tl = new TimelineMax();
      var self = this;

      this.$targetPathDef.each(function(index, el) {

        // 余ったやつは消す
        if (self.lenList[self.next] < index + 1) {

          TweenMax
            .to($(this), 1, {
              opacity: 0
            })

        } else {

          // 各pathへクラスの付加
          var cls = self.$targetPathList[self.next].eq(index).attr('class'); //class
          $(this)
            .removeAttr('class')
            .attr('class', cls);

          // // モーフィング
          TweenMax
            .to($(this), 1.2, {
              morphSVG:{
                shape: self.$targetPathList[self.next].eq(index),
                // shapeIndex: 10
              },
              opacity: 1,
              ease: Power4.easeOut,
            })

        }
        
      });

      // svg全体のスタイルのためのクラス付加
      var removeAttr = ' svg0' + (this.cur + 1);
      var addAttr = ' svg0' + (this.next + 1);

      this.$basis
        .attr('class', function(index, classNames) {return classNames.replace(removeAttr, '');})
        .attr('class', function(index, classNames) {return classNames + addAttr;});

    },

    runFade: function(cur,next) {

      var tl = new TimelineMax();
      var self = this;

      // 現在のをフェードアウト
      TweenMax
        .to(this.$targets.eq(cur), 1.2, {
          opacity: 0,
          ease: Power2.easeOut,
        })

      // 次のをフェードイン
      TweenMax
        .to(this.$targets.eq(next), 1.2, {
          opacity: 1,
          ease: Power2.easeOut,
        })

    },

    setEvents: function() {

      var self = this;

      // gb.in.r.add(function(){

      //   // pcの横幅のときのみ
      //   if (gb.in.u.isResPC) self.run();        

      // })

    },


  }

  gb.EditorTitMorph = EditorTitMorph;

})();
//--------------------------------------------------
//
//  GlMotion
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie

  function GlMotion() {

    this.tlMain = new TimelineMax();


    this.setup();
    this.run();
    this.setEvents();

  }

  GlMotion.prototype = {

    setup: function() {

      gb.in.dmLibs = new gb.GlMotionLibs();

    },

    run: function() {

      // 最初
      gb.in.opening = new gb.Opening();
      
      gb.in.section01 = new gb.Section01();
      gb.in.section02 = new gb.Section02();
      gb.in.section03 = new gb.Section03();
      gb.in.section04 = new gb.Section04();
      gb.in.section05 = new gb.Section05();

    },

    setEvents: function() {

      // hover
      new gb.HoverShare();
      // hover
      gb.in.applyBtn = new gb.ApplyBtn();
      // click
      new gb.QAAccordion();


    },

  }

  // 公開api
  gb.GlMotion = GlMotion;
  
})();
//--------------------------------------------------
//
//  HoverEffects01
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function HoverEffects01($target) {

    this.$target = $target

    // motion
    this.tl = new TimelineMax();

    this.setEvents();

  }

  HoverEffects01.prototype = {

    setup: function() {

    },

    run: function() {

    },

    onEnter : function(that) {

      TweenMax.to($(that), 0.4, {
        color: '#fff',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('.bg'), 0.4, {
        height: '100%',
        ease: Power4.easeOut
      })
      
    },

    onLeave : function(that) {

      TweenMax.to($(that), 0.4, {
        color: '#000',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('.bg'), 0.4, {
        height: '0%',
        ease: Power4.easeOut
      })

    },

    setEvents: function() {

      var self = this;

      this.$target.on('mouseenter', function(e) {self.onEnter.call(self,this)});
      this.$target.on('mouseleave', function(e) {self.onLeave.call(self,this)});

    },

  }

  gb.HoverEffects01 = HoverEffects01;

})();
//--------------------------------------------------
//
//  HoverEffects02
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function HoverEffects02($target) {

    this.$target = $target

    // motion
    this.tl = new TimelineMax();

    this.setup();
    this.setEvents();

  }

  HoverEffects02.prototype = {

    setup: function() {

    },

    run: function() {

    },

    onEnter : function(that) {

      TweenMax.to($(that).find('a'), 0.4, {
        color: '#fff',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('.bg'), 0.4, {
        height: '100%',
        ease: Power4.easeOut
      })
      
    },

    onLeave : function(that) {

      TweenMax.to($(that).find('a'), 0.4, {
        color: '#000',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('.bg'), 0.4, {
        height: '0%',
        ease: Power4.easeOut
      })

    },

    setEvents: function() {

      var self = this;

      this.$target.on('mouseenter', function(e) {self.onEnter.call(self,this)});
      this.$target.on('mouseleave', function(e) {self.onLeave.call(self,this)});

      // iosで遷移したあと、戻るでホバー状態が戻らないバグ対応 強制的にリロード
      window.onpageshow = function(event) {

        if (event.persisted) {window.location.reload();}
                  
      };

    },

  }

  gb.HoverEffects02 = HoverEffects02;

})();
// ------------------------------------------------------------
//
//  HoverSwitchImg
//
// ------------------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function HoverSwitchImg($wrap, selector) {

    this.$wrap = $wrap;
    this.selector = selector;

    this.run();
    this.setEvents();

  }

  HoverSwitchImg.prototype = {

    run: function () {


    },

    onEnter: function(that) {

      var $target = $(that).find(this.selector);

      var src = $target.attr('src');
      src = gb.in.u.strReplace(src, '_off', '_on');
      $target.attr('src',src);

    },

    onLeave: function(that) {

      var $target = $(that).find(this.selector);

      var src = $target.attr('src');
      src = gb.in.u.strReplace(src, '_on', '_off');
      $target.attr('src',src);

    },

    setEvents: function () {

      var self = this;

      this.$wrap.each(function(index, el) {

        $(this).on('mouseenter', self.onEnter.bind(self,this));
        $(this).on('mouseleave', self.onLeave.bind(self,this));
        
      });

      

    },

  }

  gb.HoverSwitchImg = HoverSwitchImg;

})();
//--------------------------------------------------
//
//  MainVisualZoom
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function MainVisualZoom() {

    this.$target = $('.section01 .mainVisual');
    this.cur = 0;
    this.next = 1;
    this.imgZIndex = 10000;
    // this.img02ZIndex = 10000;

    this.setup();
    this.run();
    this.setEvents();

  }

  MainVisualZoom.prototype = {

    setup: function() {

      TweenMax.set(this.$target.eq(0), {'z-index': this.imgZIndex})
      TweenMax.set(this.$target.eq(1), {'z-index': this.imgZIndex})

    },

    run: function() {

      var tl01 = new TimelineMax();
      var tl02 = new TimelineMax();
      var self = this;

      tl01
        .set(this.$target.eq(0), {scale: 1})
        .to(this.$target.eq(0),15, {
          scale: 1.2,
          ease: Power0.easeNone,
        })
        .to(this.$target.eq(0), 4, {
          opacity: 0,
          ease: Power2.easeOut,
          onStart: function() {
            self.imgZIndex--;
            TweenMax.set(self.$target.eq(1), {scale: 1,opacity: 1,'z-index': self.imgZIndex})
            tl02.play(0);
          }
        },'-=4.0')

      tl02
        .set(this.$target.eq(1), {scale: 1})
        .to(this.$target.eq(1),15, {
          scale: 1.2,
          ease: Power0.easeNone,
        })
        .to(this.$target.eq(1), 4, {
          opacity: 0,
          ease: Power2.easeOut,
          onStart: function() {
            self.imgZIndex--;
            TweenMax.set(self.$target.eq(0), {scale: 1,opacity: 1,'z-index': self.imgZIndex})
            tl01.play(0);
          }
        },'-=4.0')

      tl01.stop();
      tl02.play();

    },

    getFront: function() {

      if (this.isFront == 'tl01') ;

    },

    calcurateOrder: function() {

      // this.cur++
      // this.cur = this.cur % 2;
      // this.next++;
      // this.next = this.next % 2;

    },

    onResize: function() {

      TweenMax.set(this.$target.eq(0), {y: '-50%'})
      TweenMax.set(this.$target.eq(1), {y: '-50%'})

    },

    setEvents: function() {

      gb.in.r.add(this.onResize.bind(this));


    },


  }

  gb.MainVisualZoom = MainVisualZoom;

})();
//--------------------------------------------------
//
//  ShowContents
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function ShowContents($contents) {

    this.$contents = $contents

    this.topList = [];

    this.setup();
    this.setEvents();

  }

  ShowContents.prototype = {

    setup: function() {

      var self = this;

      // コンテンツ消す
      TweenMax.set(this.$contents, {
        y: 100,
        opacity: 0,
      });

      this.$contents.each(function(index, el) {

        var obj = {val: $(this).offset().top,isLock: false}

        self.topList.push(obj);
        
      });

      // 帯を消す
      TweenMax.set(this.$contents.find('.categoryParts'), {
        x: -20,
        y: 20,
        rotationZ: -45,
        opacity: 0,
      });

    },

    run: function(index) {

      var self = this;

      var tl = new TimelineMax();

      tl
        // コンテンツ
        .to(this.$contents.eq(index), 0.8, {
          y: 0,
          z: 1,
          opacity: 1,
          delay: 0.08 * index,
          ease: Power2.easeOut
        })
        // 帯
        .to(this.$contents.eq(index).find('.categoryParts'), 0.8, {
          x: 0,
          y: 0,
          rotationZ: -45,
          opacity: 1,
          ease: Power2.easeOut
        },'-=0.0')

    },

    runAll: function() {

      var self = this;

      $.each(this.topList, function(index, obj) {

          self.run(index);

      });

    },

    start: function() {

      this.isInViewport($(window).scrollTop() + $(window).height());
      
    },

    isInViewport: function(sb) {

      var self = this;

      $.each(this.topList, function(index, obj) {

        if (sb > obj.val && !obj.isLock) {
          obj.isLock = true;
          self.run(index);
        }

      });

    },

    onScroll: function() {

      var sb = gb.in.s.sb;

      this.isInViewport(sb);

    },

    setEvents: function() {

      gb.in.s.add(this.onScroll.bind(this))

    },


  }

  gb.ShowContents = ShowContents;

})();
//--------------------------------------------------
//
//  GNav
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function GNav() {

    this.isOnce = true;
    this.isLock = false;
    this.defPdList = [40,40,40,40,40,40,40,20];

    this.fixedPdList = [40,40,40,40,40,40,40,20];
    this.unFixedPdList = [40,40,40,40,40,40,40,20];

    this.baseW = 1100;

    this.page = $('body').attr('id');

    // motion
    this.tl = new TimelineMax();

    this.setEvents();
    this.setup();
    this.onResize();
    this.onScroll();

  }

  GNav.prototype = {

    setup: function() {

      if (gb.in.u.isResSP) return

      if (gb.in.u.isResPC && !this.isOnce) return;
      this.isOnce = false;

      this.targetST = $('.gNav_pc').offset().top;

      var st = $(window).scrollTop();
      if (st > this.targetST) {
        this.isFixed = true;
      } else if (st <= this.targetST) {
        this.isFixed = false;
      }

    },

    fixed: function() {

      var self = this;

      this.isFixed = true;

       // トップページ以外はpaddingに imgWrapにpaddingかmarginをつけることで、ガクッとならないように
      if (this.page == 'top') $('.section01 .imgWrap').css('margin-bottom', 90);
      else $('.imgWrap').css('padding-bottom', 90);

      $('.gNav_pc').addClass('fixed');

      TweenMax.to($('.logo_gNav'), 0.5, {
        opacity: 1,
        ease: Power3.easeOut,
        onComplete: function() {
          $('.logo_gNav').css('z-index', '3');
        }
      })
      TweenMax.to($('.category_pc'), 0.4, {
        'padding-left': '213px',
        ease: Power3.easeOut
      })

      $('.category_pc .item .inner').each(function(index, el) {
        TweenMax.to($(this), 0.4, {
          'padding-right': self.fixedPdList[index],
          'padding-left': self.fixedPdList[index],
          ease: Power3.easeOut,
        })
      });

    },

    unFixed: function() {

      var self = this;

      this.isFixed = false;

       // トップページ以外はpaddingに imgWrapにpaddingかmarginをつけることで、ガクッとならないように
      if (this.page == 'top') $('.section01 .imgWrap').css('margin-bottom', 0);
      else $('.imgWrap').css('padding-bottom', 0);

      $('.gNav_pc').removeClass('fixed');

      TweenMax.to($('.logo_gNav'), 0.5, {
        opacity: 0,
        ease: Power3.easeOut,
        onComplete: function() {
          $('.logo_gNav').css('z-index', '1');
        }
      })
      TweenMax.to($('.category_pc'), 0.4, {
        'padding-left': 0,
        ease: Power3.easeOut
      })

      $('.category_pc .item .inner').each(function(index, el) {

        if (index==$('.category_pc .item').length-1) {

          TweenMax.to($(this), 0.4, {
            'padding-right': self.unFixedPdList[index],
            'padding-left': self.unFixedPdList[index],
            ease: Power3.easeOut,
            onComplete: function() {
              self.isLock = false;
            }
          })

        } else {

          TweenMax.to($(this), 0.8, {
            'padding-right': self.unFixedPdList[index],
            'padding-left': self.unFixedPdList[index],
            ease: Power3.easeOut
          })

        }

      });
        
    },

    reset: function() {

       // トップページ以外はpaddingに imgWrapにpaddingかmarginをつけることで、ガクッとならないように
      if (this.page == 'top') $('.section01 .imgWrap').css('margin-bottom', 0);
      else $('.imgWrap').css('padding-bottom', 0);

    },

    onScroll : function() {

      // sp状態だったら実行しない
      if (gb.in.u.isResSP) {
        this.reset();
        return
      }

      var st = $(window).scrollTop();

      if (st > this.targetST && !this.isLock) {
        this.isLock = true;
        this.fixed();
      } else if (st <= this.targetST && this.isLock) {
        this.isLock = false;
        this.unFixed();
      }

    },

    onResize : function() {

      var self = this;

      var w = gb.in.r.W();
      if (w > this.baseW) w = this.baseW;
      var rate = w / this.baseW;

      if (gb.in.u.isResSP) return;

      $('.category_pc .item .inner').each(function(index, el) {

        if (self.isFixed) {

          var pd = 20;

          pd *= rate;
          pd *= rate;
          pd *= rate;
          pd *= rate;
          pd *= rate;

        } else {

          var pd = self.defPdList[index]

          pd *= rate;
          pd *= rate;
          pd *= rate;

        }

        TweenMax.set($(this), {
          'padding-right': pd,
          'padding-left': pd,
        })

        var pd = 20;
        pd *= rate;
        pd *= rate;
        pd *= rate;
        pd *= rate;
        pd *= rate;

        self.fixedPdList[index] = pd;

        var pd = self.defPdList[index]
        pd *= rate;
        pd *= rate;
        pd *= rate;

        self.unFixedPdList[index] = pd;

      })

    },

    onEnter : function(that) {

      TweenMax.to($(that).find('path'), 0.4, {
        fill: '#fff',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('span'), 0.4, {
        color: '#fff',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('.bg'), 0.4, {
        height: '100%',
        ease: Power4.easeOut
      })
      
    },

    onLeave : function(that) {

      TweenMax.to($(that).find('path'), 0.4, {
        fill: '#51ab11',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('span'), 0.4, {
        color: '#000',
        ease: Power4.easeOut
      })
      
      TweenMax.to($(that).find('.bg'), 0.4, {
        height: '0%',
        ease: Power4.easeOut
      })

    },

    setEvents: function() {

      var self = this;

      $(window).on('scroll.GNav', this.onScroll.bind(this));
      $('.gNav_pc .category_pc .item').on('mouseenter', function(e) {self.onEnter.call(self,this)});
      $('.gNav_pc .category_pc .item').on('mouseleave', function(e) {self.onLeave.call(self,this)});
      gb.in.r.add(this.setup.bind(this));
      gb.in.r.add(this.onResize.bind(this));

    },

    removeEvents: function() {

      $(window).off('scroll.GNav');

    },

  }

  gb.GNav = GNav;

})();
//--------------------------------------------------
//
//  GoogleMap
//
//--------------------------------------------------
(function(){

  function GoogleMap(address,$object,opt) {

    this.target = $object;

    this.map;
    this.geo;
    this.address = address;

    // param
    this.latlng = new google.maps.LatLng(35.6701962,139.7173436);
    this.opts = {
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: this.latlng
    };
    this.opts = $.extend(this.opts,opt);
    this.req = {};

    this.run();

  }

  // メソッド追加
  GoogleMap.prototype = {

    run: function(e) {

      var self = this;

      this.map = new google.maps.Map(this.target, this.opts);
      this.geo = new google.maps.Geocoder();
      this.req = {address: this.address};

      this.geo.geocode(this.req, function(result, status){

          // setGoogleMap
          if (status != google.maps.GeocoderStatus.OK) {
            console.log('error');
            return;
          }

          var latlng = result[0].geometry.location;

          self.map.setCenter(latlng);

          var markerOpt = {
              position: latlng,
              map: self.map,
              draggable: true
          };
          var marker = new google.maps.Marker(markerOpt);

          // イベント設定
          google.maps.event.addDomListener(window, 'resize', function(){
            self.map.panTo(latlng);
          });

      });

    }

  }

  gb.GoogleMap = GoogleMap;

})();
//--------------------------------------------------
//
//  modal (detail)
//
//--------------------------------------------------
(function(){

  function Modal($btn,$close) {

    this.$btn = $btn;
    this.$close = $close;
    this.$menu = $('.detail');

    this.dur = 2000,
    this.ease = 'easeOutQuad';

    this.W = $(window).width(),
    this.H = $(window).height();

    this.scrollY = 0;

    this.setEvents();
    this.setup();

  }

  Modal.prototype = {

    setup: function() {

      this.html = '<div class="overlay"></div>';
      $('body').append(this.html);

    },

    toggle: function() {

      if (this.$btn.hasClass('on')) {

        this.close();

      } else {

        this.open();

      };

      $btn.toggleClass('on');

    },

    open: function() {

      // gb.Vimeo($('#player'),$('.playBox'));

      // 背景固定
      this.scrollY = $('.contentsWrap').scrollTop(); 

      $('.pjaxWrap').css( {
        position: 'fixed',
        width: '100%',
        top: -1 * this.scrollY
      } );

      // モーダル表示
      this.$menu.show();
      
    },

    close: function() {

      // 背景固定解除
      $('.pjaxWrap').attr( { style: '' } ).css({opacity: 1});
      $( '.bodyInner, .contentsWrap' ).scrollTop(this.scrollY);

      // モーダル非表示
      this.$menu.hide();

    },

    getWindowSize: function() {

      W = $(window).width();
      H = $(window).height();

    },

    onResize : function() {

      this.getWindowSize();

    },

    setEvents: function() {

      var self = this;

      this.$btn.on('click', function(){self.open.call(self);});
      this.$close.on('click', function(){self.close.call(self);});

    },

  }

  gb.Modal = Modal;

})();
//--------------------------------------------------
//
//  QAAccordion (common motion)
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function QAAccordion() {

    this.ready();
    this.run();
    this.setEvents();

  }

  QAAccordion.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      // sliderの準備
      // ------------------------------------------------------------
    },

    run: function() {

      $('.accordion .item').each(function(index, el) {

        new gb.QAAccordionItem($(this));
        
      });

    },

    setEvents: function() {

    },

  }

  // 公開api
  gb.QAAccordion = QAAccordion;
  
})();
//--------------------------------------------------
//
//  QAAccordionItem (common motion)
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function QAAccordionItem($target) {

    this.$target = $target;
    this.isOpen = false;

    this.h = 0;

    this.ready();
    this.setEvents();

  }

  QAAccordionItem.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------
      this.$arrow = this.$target.find('.arrow');
      this.$detail = this.$target.find('.itemDetail');

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      // sliderの準備
      // ------------------------------------------------------------
      this.h = this.$detail.height();
      TweenMax.set(this.$detail, {overflow: 'hidden',height: 0});

    },

    toggle: function() {


      if (this.isOpen) {

        this.hide();

      } else {

        this.show();

      }

    },

    show: function() {

      // arrow
      this.$arrow.addClass('isActive');

      // detail
      TweenMax.to(this.$detail, 0.5, {
        height: this.h,
        ease: Power4.easeOut,
        onComplete: function(){
          gb.in.layout.size.scale.run();
        }
      });

      this.isOpen = true;

    },

    hide: function() {

      var self = this;

      // arrow
      this.$arrow.removeClass('isActive');

      // detail
      TweenMax.to(this.$detail, 0.5, {
        height: 0,
        ease: Power4.easeOut,
        onComplete: function(){
          gb.in.layout.size.scale.run();
        }
      });


      this.isOpen = false;

    },

    setEvents: function() {

      this.$target.on('click', this.toggle.bind(this));

    },

  }

  // 公開api
  gb.QAAccordionItem = QAAccordionItem;
  
})();
//--------------------------------------------------
//
//  ScrollBar
//
//--------------------------------------------------

// スクロールバーも動く

(function(){

  var gb = jp.co.mie

  function ScrollBar($bar, $area, $hidden, $contents) {

    this.$bar = $bar;
    this.$area = $area;
    this.$contents = $hidden;
    this.$inner = $contents;


    this.target = 0;
    this.cur = 0;

    this.range = 0;
    this.max = 0
    this.min = 0;

    this.sY = 0;
    this.isDown = false;

    this.barPos = 0;
    this.barAreaRange = 0
    this.barAreaMax = 0
    this.barAreaMin = 0;

    this.rate = 0;

    // インスタンス化を阻止
    this.isActive = true;

    this.setup();
    this.setEvents();

  }

  ScrollBar.prototype = {

    setup: function() {

      // ------------------------------------------------------------
      //  コンテンツの範囲
      // ------------------------------------------------------------
      this.min = this.range = this.$contents.height() - this.$inner.height();
      this.range = -1 * this.range;
      

      // ------------------------------------------------------------
      //  スクロールバーの動けるの範囲
      // ------------------------------------------------------------
      this.barAreaRange = this.$area.height() - this.$bar.height();
      this.barAreaMax = this.barAreaRange;

      // ------------------------------------------------------------
      // sliderの準備
      // ------------------------------------------------------------


      // ------------------------------------------------------------
      // コンテンツが一つの場合は、スクローバーを非表示 about
      // ------------------------------------------------------------
      if (this.$inner.find('.box').length < 2) this.$area.hide();

      // ------------------------------------------------------------
      // コンテンツが短い場合は、透明度を上げて、使えないように top
      // ------------------------------------------------------------
      if (this.min>=0) {
        this.$bar.css('opacity', '0.3');
        this.isActive = false;
      };


    },

    onDown: function(e) {

      if (e.offsetX==undefined) { // this works for Firefox
         this.y = e.pageY - this.$target.offset().top;
       } else { // works in Google Chrome
         this.y = e.pageY;
       }

      this.sY = this.y;

    },

    onDownBar: function(e) {

      this.isDown = true;

    },

    onMove: function(e) {

      if (!this.isDown) return

      if (e.offsetY==undefined) { // this works for Firefox
         this.y = e.pageY - this.$target.offset().top;
      } else { // works in Google Chrome
         this.y = e.pageY;
      }

      var dis = this.y - this.sY;
      this.cur = dis;
      var barPos = this.barPos + dis;

      if (barPos < this.barAreaMin) barPos = this.barAreaMin;
      if (barPos > this.barAreaMax) barPos = this.barAreaMax;

      var rate = barPos / this.barAreaRange;

      if (this.cur < this.min) this.cur = this.min;
      if (this.cur > this.max) this.cur = this.max;

      TweenMax.to(this.$inner, 0.8, {
        y:  - this.range * rate,
        ease: Power2.easeOut
      })
      TweenMax.set(this.$bar, {
        y: barPos,
      })

    },

    onUp: function(e) {

      this.isDown = false;

    },

    onWheel: function(e,delta,deltaX,deltaY) {

      if (deltaY < 0) {

        this.cur -= 10;
        if (this.cur < this.min) this.cur = this.min;

        TweenMax.to(this.$inner, 0.8, {
          y: this.cur,
          ease: Power2.easeOut
        })

      } else {

        this.cur += 10;
        if (this.cur > this.max) this.cur = this.max;

        TweenMax.to(this.$inner, 0.8, {
          y: this.cur,
          ease: Power2.easeOut
        })

      }


      this.rate = Math.abs(this.cur/this.range);

      TweenMax.to(this.$bar, 0.8, {
        y: this.barAreaRange * this.rate,
        ease: Power2.easeOut
      })
      TweenMax.to(this, 0.8,{
        barPos: this.barAreaRange * this.rate,
      })

      e.preventDefault();

    },

    onEnter: function() {

      // gb.in.u.disableScroll();

      // log('enter');

    },

    onResize: function() {

      this.min = this.range = this.$contents.height() - this.$inner.height();

    },

    setEvents: function() {

      if (!this.isActive) return;

      var self = this;

      this.$bar.on('mousedown', function(e){self.onDownBar.call(self,e)});
      $(window).on('mousedown', function(e){self.onDown.call(self,e)});
      $(window).on('mousemove', function(e){self.onMove.call(self,e)});
      $(window).on('mouseup', function(e){self.onUp.call(self,e)});
      this.$contents.on('mousewheel', function(e,delta,deltaX,deltaY){self.onWheel.call(self,e,delta,deltaX,deltaY)});
      $('.detailBlock').on('mouseover', this.onEnter.bind(this));
      gb.in.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.ScrollBar = ScrollBar;
  
})();
//--------------------------------------------------
//
//  Slider
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function Slider() {

    this.current = 0;
    this.next = 1;
    this.len = null;

    this.ready();
    this.setEvents();

  }

  Slider.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------
      this.$img = $('.slider img');

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      TweenMax.set(this.$img.eq(1), {display:'none'});
      TweenMax.set(this.$img.eq(2), {display:'none'});

      // ------------------------------------------------------------
      // sliderの準備
      // ------------------------------------------------------------
      TweenMax.set(this.$img.eq(1), {opacity:0});
      TweenMax.set(this.$img.eq(2), {opacity:0});

      this.len = this.$img.length;

    },

    run: function() {

      TweenMax.set(this.$img.eq(1), {display:'block'});
      TweenMax.set(this.$img.eq(2), {display:'block'});

      // 今の画像を消す
      this.disappear();

      // 次のの画像を表示
      this.appear();

      // 番号計算
      this.calculateOrder();

      // 何秒後かにこれを繰り返す
      setTimeout(this.run.bind(this),4000);

    },

    appear: function() {

      TweenMax.to(this.$img.eq(this.next), 3, {opacity: 1,ease: Power3.easeOut});

    },

    disappear: function() {

      var self = this;

      TweenMax.to(this.$img.eq(this.current), 3, {
        opacity: 0,
        ease: Power3.easeOut,
        onComplete: function() {

          self.onComplete();

        }
      });

    },

    calculateOrder: function() {

      this.current++;
      if (this.current>this.len-1) this.current=0;
      
      this.next = this.current+1;
      if (this.next>this.len-1) this.next=0;

    },

    onComplete: function() {

      TweenMax.set(this.$img.eq(this.next), {'z-index':2,'opacity':0});
      for (var i = 0; i < this.len; i++) {
        if (i==this.next) continue;
        TweenMax.set(this.$img.eq(i), {'z-index':1});
      };

    },

    onResize: function() {


    },

    setEvents: function() {

      gb.in.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.Slider = Slider;
  
})();
//--------------------------------------------------
//
//  TabAbout
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie

  function TabAbout($contents) {

    this.$contents = $contents;

    this.cur = 0;
    this.isOnce = true;

    this.setup();
    this.setEvents();

  }

  TabAbout.prototype = {

    setup: function() {

      if (gb.in.u.isResSP) return

      if (gb.in.u.isResPC && !this.isOnce) return;
      this.isOnce = false;

      this.$contents.each(function(index, el) {

        $bar = $(this).show().find('.scrollBody');
        $area = $(this).show().find('.scrollArea');
        $hidden = $(this).find('.innerHidden');
        $contents = $(this).find('.innerContents');

        new gb.ScrollBar($bar, $area, $hidden, $contents); //スクロールバー
        
      });

      this.run(0);

    },

    run: function(num) {

      var self = this;

      $('.charaWrap_pc .area .item')
        .removeClass('isActive')
        .eq(num).addClass('isActive');

      // コンテンツ表示・非表示
      this.$contents.each(function(index, el) {

        if (index == num) $(this).show();
        else $(this).hide();
        
      });

      this.cur = num;

    },

    onClick: function(e) {

      var num = $('.charaWrap_pc .area .item').index($(e.currentTarget));

      this.run(num);

    },

    onEnter: function(e) {

      var num = $('.charaWrap_pc .area .item').index($(e.currentTarget));
      $('.charaWrap_pc .area .item')
        .removeClass('isActive')
        .eq(this.cur).addClass('isActive')
        .end().eq(num).addClass('isActive');

    },

    onLeave: function() {

      $('.charaWrap_pc .area .item')
        .removeClass('isActive')
        .eq(this.cur).addClass('isActive');

    },

    setEvents: function() {

      var self = this;

      gb.in.r.add(this.setup.bind(this));
      $('.charaWrap_pc .area .item').on('click', function(e) {self.onClick.call(self,e)});
      $('.charaWrap_pc .area .item').on('mouseenter', function(e) {self.onEnter.call(self,e)});
      $('.charaWrap_pc .area .item').on('mouseleave', function(e) {self.onLeave.call(self,e)});
    

    },

  }

  // 公開api
  gb.TabAbout = TabAbout;
  
})();
//--------------------------------------------------
//
//  TabSection04
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie

  function TabSection04($contents) {

    this.$contents = $contents;

    this.cur = 0;
    this.isOnce = true;

    this.setup();
    this.setEvents();

  }

  TabSection04.prototype = {

    setup: function() {

      if (gb.in.u.isResSP) return

      if (gb.in.u.isResPC && !this.isOnce) return;
      this.isOnce = false;

      this.$contents.each(function(index, el) {

        $bar = $(this).show().find('.scrollBody');
        $area = $(this).show().find('.scrollArea');
        $hidden = $(this);
        $contents = $(this).find('.inner');

        new gb.ScrollBar($bar, $area, $hidden, $contents); //スクロールバー
        
      });

      this.run(0);

    },

    run: function(num) {

      var self = this;

      $('.infoWrap_pc .area .item')
        .removeClass('isActive')
        .eq(num).addClass('isActive');

      // コンテンツ表示・非表示
      this.$contents.each(function(index, el) {

        if (index == num) $(this).show();
        else $(this).hide();
        
      });

      this.cur = num;

    },

    onClick: function(e) {

      var num = $('.infoWrap_pc .area .item').index($(e.currentTarget));

      this.run(num);

    },

    onEnter: function(e) {

      var num = $('.infoWrap_pc .area .item').index($(e.currentTarget));
      $('.infoWrap_pc .area .item')
        .removeClass('isActive')
        .eq(this.cur).addClass('isActive')
        .end().eq(num).addClass('isActive');

    },

    onLeave: function() {

      $('.infoWrap_pc .area .item')
        .removeClass('isActive')
        .eq(this.cur).addClass('isActive');

    },

    onClickSelectArea: function(that) {

      var num = $(that).data('num');

      this.run(num);

      log(that);

    },

    setEvents: function() {

      var self = this;

      $('.infoWrap_pc .area .item').on('click', function(e) {self.onClick.call(self,e)});
      $('.link_svg').on('click', function(){
        self.onClickSelectArea.call(self,this)
        return false;
      });
      gb.in.r.add(this.setup.bind(this));

      $('.infoWrap_pc .area .item').on('mouseenter', function(e) {self.onEnter.call(self,e)});
      $('.infoWrap_pc .area .item').on('mouseleave', function(e) {self.onLeave.call(self,e)});
    

    },

  }

  // 公開api
  gb.TabSection04 = TabSection04;
  
})();
//--------------------------------------------------
//
//  ApplyBtn
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function ApplyBtn() {

    this.ready();
    this.setEvents();

  }

  ApplyBtn.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------
      this.$btnAppMid = $('.applicationMid');
      this.$btnAppNew = $('.applicationNew');
      this.$midBg = $('.midBg');
      this.$newBg = $('.newBg');

      this.rDef01 = parseInt(this.$btnAppMid.css('right'));
      this.rDef02 = parseInt(this.$btnAppNew.css('right'));
      this.tDef01 = parseInt(this.$btnAppMid.css('top'));
      this.tDef02 = parseInt(this.$btnAppNew.css('top'));


      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      // sliderの準備
      // ------------------------------------------------------------

      this.onResize();

    },

    onMousemove: function(e) {

      var mx = e.pageX - $(window).scrollLeft(),my = e.pageY - $(window).scrollTop();
      var midX = this.$btnAppMid.offset().left - $(window).scrollLeft() + this.$btnAppMid.width()/2;
      var midY = this.$btnAppMid.offset().top - $(window).scrollTop() + this.$btnAppMid.height()/2;
      var newX = this.$btnAppNew.offset().left - $(window).scrollLeft() + this.$btnAppNew.width()/2;
      var newY = this.$btnAppNew.offset().top - $(window).scrollTop() + this.$btnAppNew.width()/2;

      var radMid = Math.atan2(mx-midX,my-midY)
      var radNew = Math.atan2(mx-newX,my-newY)

      var angMid = 360 - gb.in.u.degree(radMid)+180;
      var angNew = 360 - gb.in.u.degree(radNew)+180;

      TweenMax.set(this.$midBg, {rotationZ: angMid});
      TweenMax.set(this.$newBg, {rotationZ: angNew});


      // for 下側へのshadow

      // var radius = 800;

       // x = ((mx - midX) / radius).toFixed(3) - 0,
      // y = Math.sin(Math.acos(x)).toFixed(3) - 0;

      // TweenMax.set(this.$midBg, {
      //   'box-shadow': 10 * -x + 'px ' + 10 * y + 'px 3px rgba(0,0,0,1)'
      // });
      // this.$midBg.css('box-shadow', 10 * -x + 'px ' + 10 * y + 'px 3px rgba(0,0,0,1)');


    },

    onEnter: function(that) {

      var tl = new TimelineMax();

      tl
        .to($(that), 0.3, {scale: 1.2 * this.rate ,ease: Power3.easeOut})
        .to($(that), 0.8, {
          scale: 1 * this.rate,
          ease: Elastic.easeOut.config(1.2, 0.3),
        },'-=0.1')

    },

    onLeave: function() {


    },

    someTimesMid: function() {

      var tl = new TimelineMax();

      tl
        .to(this.$btnAppMid, 0.4, {scale: 1.2 * this.rate,ease: Power3.easeIn})
        .to(this.$btnAppMid, 0.8, {
          scale: 1 * this.rate,
          ease: Elastic.easeOut.config(1.2, 0.3),
        })

      setTimeout(this.someTimesMid.bind(this),10000);

    },

    someTimesNew: function() {

      var tl = new TimelineMax();

      tl
        .to(this.$btnAppNew, 0.4, {scale: 1.2 * this.rate,ease: Power3.easeIn})
        .to(this.$btnAppNew, 0.8, {
          scale: 1 * this.rate,
          ease: Elastic.easeOut.config(1.2, 0.3),
        })

      setTimeout(this.someTimesNew.bind(this),10000);

    },

    onResize: function() {

      this.rate = gb.in.layout.size.scale.rate;
      if (this.rate > 1) this.rate=1;

      TweenMax.set($('.applicationNew, .applicationMid'), {
        scale: this.rate,
        z: 1,
        'transform-origin':'50% 50%',
        '-webkit-transform-origin':'50% 50%'
      });

      TweenMax.set($('.applicationMid'), {
        top: this.tDef01 * this.rate,
        right: this.rDef01 * this.rate,
      });

      TweenMax.set($('.applicationNew'), {
        top: this.tDef02 * this.rate,
        right: this.rDef02 * this.rate,
      });

    },

    onResizeInit: function() {

      this.rate = gb.in.layout.size.scale.rate;

      TweenMax.set($('.applicationMid'), {
        top: this.tDef01 * this.rate,
        right: this.rDef01 * this.rate,
      });

      TweenMax.set($('.applicationNew'), {
        top: this.tDef02 * this.rate,
        right: this.rDef02 * this.rate,
      });

    },

    setEvents: function() {

      var self = this;

      $(window).on('mousemove', function(e){self.onMousemove.call(self,e)});
      this.$btnAppMid.add(this.$btnAppNew).on('mouseenter', function(e){self.onEnter.call(self,this)});

      gb.in.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.ApplyBtn = ApplyBtn;
  
})();
//--------------------------------------------------
//
//  HoverShare (common motion)
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function HoverShare() {

    this.isOpen = false;

    this.ready();
    this.setEvents();

  }

  HoverShare.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------
      this.$wrap = $('.shareWrap');
      this.$target = this.$wrap.find('.row');
      this.$img = $('.share');

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------
      TweenMax.set(this.$target, {display:'none'});

      // ------------------------------------------------------------
      // 画像の事前load
      // ------------------------------------------------------------
      var src = this.$img.attr('src');
      src = gb.in.u.strReplace(src,'_off','_on');
      $('<img>').attr('src', src);

    },

    switchImg: function() {

      var src = this.$img.attr('src');

      if (this.isOpen) src = gb.in.u.strReplace(src,'_on','_off');
      else src = gb.in.u.strReplace(src,'_off','_on');

      this.$img.attr('src',src);

    },

    appear: function() {

      TweenMax.set(this.$target, {display:'block'});
      TweenMax.to(this.$target, 0.3, {
        opacity:1
      });

      this.switchImg();
      this.isOpen = true;

    },

    disappear: function() {

      var self = this;

      TweenMax.set(this.$target, {display:'block'});
      TweenMax.to(this.$target, 0.3, {
        opacity: 0,
        onComplete: function(){
          TweenMax.set(self.$target, {display:'none'});
        }
      });

      this.switchImg();
      this.isOpen = false;

    },

    setEvents: function() {

      this.$wrap.on('mouseenter', this.appear.bind(this));
      this.$wrap.on('mouseleave', this.disappear.bind(this));

    },

  }

  // 公開api
  gb.HoverShare = HoverShare;
  
})();
//--------------------------------------------------
//
//  MenuAccordion (common motion)
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function MenuAccordion($target) {

    this.$target = $target;

    this.ready();
    this.run();
    this.setEvents();

  }

  MenuAccordion.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      // sliderの準備
      // ------------------------------------------------------------
    },

    run: function() {

      this.$target.each(function(index, el) {

        new gb.MenuAccordionItem($(this));
        
      });

    },

    setEvents: function() {

    },

  }

  // 公開api
  gb.MenuAccordion = MenuAccordion;
  
})();
//--------------------------------------------------
//
//  MenuAccordionItem (common motion)
//
//--------------------------------------------------

(function(){

  var gb = jp.co.preco

  function MenuAccordionItem($target) {

    this.$target = $target;
    this.isOpen = false;

    this.h = 0;

    this.ready();
    this.setEvents();

  }

  MenuAccordionItem.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------
      this.$detail = this.$target.next();

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      // accordionの準備
      // ------------------------------------------------------------
      this.h = this.$detail.height();
      TweenMax.set(this.$detail, {overflow: 'hidden',height: 0});

      gb.in.layout.size.scale.run();

    },

    toggle: function() {

      if (this.isOpen) {

        this.hide();

      } else {

        this.show();

      }

    },

    show: function() {

      // arrow
      this.$target.addClass('on');

      // detail
      TweenMax.to(this.$detail, 0.5, {
        height: this.h,
        ease: Power4.easeOut,
        onComplete: function(){
          gb.in.layout.size.scale.run();
        }
      });

      this.isOpen = true;

    },

    hide: function() {

      var self = this;

      // arrow
      this.$target.removeClass('on');

      // detail
      TweenMax.to(this.$detail, 0.5, {
        height: 0,
        ease: Power4.easeOut,
        onComplete: function(){
          gb.in.layout.size.scale.run();
        }
      });


      this.isOpen = false;

    },

    setEvents: function() {

      this.$target.on('click', this.toggle.bind(this));

    },

  }

  // 公開api
  gb.MenuAccordionItem = MenuAccordionItem;
  
})();
//--------------------------------------------------
//
//  MenuHover
//
//--------------------------------------------------
(function(){

  var gb = jp.co.preco;

  function MenuHover($target) {

    this.$target = $target;
    this.len = this.$target.length;

    // motion
    this.tl = new TimelineMax();

    this.setEvents();
    this.setup();
    this.run();

  }

  MenuHover.prototype = {

    setup: function() {

    },

    run: function() {


    },

    onEnter: function(that) {

      var self = this;

      var num = this.$target.index($(that));

      this.$target.each(function(index, el) {

        // ホバーされたものは、opacity 1のまま
        if (index == num) return;

        TweenMax.to($(this), 0.6, {opacity: 0.4, ease: Power3.easeOut});
        
      });

    },

    onLeave: function() {

      this.$target.each(function(index, el) {

        TweenMax.to($(this), 0.6, {opacity: 1, ease: Power3.easeOut});
        
      });

    },

    setEvents: function() {

      var self = this;

      this.$target.on('mouseenter', function(e) {self.onEnter.call(self,this)});
      this.$target.on('mouseleave', function(e) {self.onLeave.call(self,this)});

    },

  }

  gb.MenuHover = MenuHover;

})();
// ------------------------------------------------------------
//
//  MoreBtn
//
// ------------------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function MoreBtn($target) {

    this.$target = $target;

    this.run();
    this.setEvents();

  }

  MoreBtn.prototype = {

    run: function () {


    },

    onDown: function() {

      var self = this;

      var src = this.$target.attr('src');
      src = gb.in.u.strReplace(src, '_off', '_on');

      this.$target.on('load', function(event) {
        self.$target.css('top', 4);
      });
      this.$target.attr('src',src);

      

    },

    onUp: function() {

      var self = this;

      var src = this.$target.attr('src');
      src = gb.in.u.strReplace(src, '_on', '_off');
      this.$target.attr('src',src);

      this.$target.on('load', function(event) {
        self.$target.css('top', 0);
      });

    },

    onClick: function() {



    },

    setEvents: function () {

      // this.$target.on('mouseup', this.onUp.bind(this));
      this.$target.on('mouseenter', this.onDown.bind(this));
      this.$target.on('mouseleave', this.onUp.bind(this));
      this.$target.on('click', this.onClick.bind(this));

    },

  }

  gb.MoreBtn = MoreBtn;

})();
//--------------------------------------------------
//
//  Section02ArticleHeightPC
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function Section02ArticleHeightPC() {

    this.$blockTop = $('.section02 .blockTop');
    this.$blockBtm = $('.section02 .blockBottom');

    this.margin = 24;

    this.setup();
    this.run();
    this.setEvents();

  }

  Section02ArticleHeightPC.prototype = {

    setup: function() {


    },

    run: function() {
      
      var self = this;

      this.$blockTop.each(function(index, el) {

        var h = $(this).find('.block').eq(1).height() - self.margin;
        $(this).find('.block').eq(0).find('.article').css({height: h});
        
      });

      this.$blockBtm.each(function(index, el) {

        var h = $(this).find('.block').eq(0).height() - self.margin;
        $(this).find('.block').eq(1).find('.article').css({height: h});
        
      });

    },

    setEvents: function() {

      var self = this;

      gb.in.r.add(function(){

        // pcの横幅のときのみ
        if (gb.in.u.isResPC) self.run();        

      })

    },


  }

  gb.Section02ArticleHeightPC = Section02ArticleHeightPC;

})();
//--------------------------------------------------
//
//  Section02ArticleHeightSP
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function Section02ArticleHeightSP($target) {

    this.$target = $target;
    this.defW = 320;
    this.defH = 180;
    this.minW = 320;
    this.curW = gb.in.r.W();

    this.setup();
    if (gb.in.u.isResSP) this.run();
    this.setEvents();

  }

  Section02ArticleHeightSP.prototype = {

    setup: function(param) {


    },

    run: function(param) {

      var rate = this.curW / this.defW;
      var h = this.defH * rate;

      this.$target.css({height: h});

    },

    setEvents: function() {

      var self = this;

      gb.in.r.add(function(){

        self.curW = gb.in.r.W();
        // スマホの横幅のときのみ かつ 最低幅320
        if (gb.in.u.isResSP && self.minW <= self.curW) self.run();


      })

    },


  }

  gb.Section02ArticleHeightSP = Section02ArticleHeightSP;

})();
// ------------------------------------------------------------
//
//  swipe position
//
// ------------------------------------------------------------

(function(){

  ;

  function SwipeContents() {

    this.sX = null;
    this.eX = null; //startX,endX
        
    this.dis = 0;
    this.minDis = 10;
    this.isLock = false;

    this.isShow = false;

    this.setPrevent();
    this.setEvents();
    this.ready();

  }

  SwipeContents.prototype = {

    ready: function(){

      // スワイプ準備
      TweenMax.set($('#contents'), {'display': 'none','opacity':0,y: 300});

    },

    show: function() {

      var self = this;
      if (this.isLock) return;

      TweenMax.set($('#contents'), {'display': 'block'});
      TweenMax.to($('#contents'), 0.6, {
          y: 0,
          opacity: 1,
          ease: Power3.easeOut,
          onComplete: function() {

            self.isShow = true;
            self.removePrevent();

            TweenMax.to($('#topVisualWrap #topVisual, #topVisualWrap .barL'), 0.5, {opacity: 0});

          }
        });

      $('body').addClass('swipeContentsShow');

      // aboutページならgoogle map表示
      if ($('body').attr('id') == 'about') gb.in.google = new gb.GoogleMap('東京都港区南青山2-20-4',$('.map')[0]);

    },

    hide: function() {

      var self = this;
      if (this.isLock) return;

      TweenMax.to($('#topVisualWrap #topVisual, #topVisualWrap .barL'), 0.5, {opacity: 1});

      TweenMax.to($('#contents'), 0.6, {
          y: 300,
          opacity: 0,
          ease: Power3.easeOut,
          onComplete: function() {
            TweenMax.set($('#contents'), {'display': 'none','opacity':0,y: 300});
            self.isShow = false;
            self.setPrevent();

          }
        });

      $('body').removeClass('swipeContentsShow');

    },

    setPrevent: function() {

      var self = this;

      $(window).on('touchmove.noScroll', function(e){
        e.preventDefault();
      });

    },

    removePrevent: function() {

      $(window).off('touchmove.noScroll');

    },

    onTouchStart: function (e) {

      this.sX = e.originalEvent.changedTouches[0].pageY;

    },

    onTouchMove: function (e) {

      
    },

    onTouchEnd: function (e) {

      this.dis = this.sX - e.originalEvent.changedTouches[0].pageY;

      // 表示処理
      if( this.minDis < Math.abs(this.dis) && this.dis > 0 && !this.isShow) this.show();

      // 非表示処理
      var st = $('.wrapper').scrollTop();
      if( this.minDis < Math.abs(this.dis) && this.dis < 0 && st <= 0 && this.isShow) this.hide();

      // // 移動量を初期化
      this.dis = 0;

    },


    onScroll: function (e) {

      // var st = $('.wrapper').scrollTop();
      // log(st);

      // if( st < -10 && this.isShow) this.hide();

    },

    setEvents: function(){

      var self = this;

      $(window).on('touchstart.swipeContents', function(e){self.onTouchStart.call(self,e);});
      $(window).on('touchmove.swipeContents', function(e){self.onTouchMove.call(self,e);});
      $(window).on('touchend.swipeContents', function(e){self.onTouchEnd.call(self,e);});

    },
    
  }

  gb.SwipeContents = SwipeContents;
    
})();
//--------------------------------------------------
//
//  Transition
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function TransitionDetailProject(){

    this.isLock = false;
    this.next = false;
    this.isDetail = false;
    this.setEvents();

  }

  TransitionDetailProject.prototype = {

    ready: function () {

    },

    getDetail: function(src,next) {

      var self = this;

      $.get(src, function(data){self.onGetDetail.call(self,data,next);});

    },

    switchPageText: function(page,next) {

      if (!next) {

        // page変更
        TweenMax.to($('#header .page'), 0.7, {
            x: -20,
            opacity: 0,
            delay: 0.2,
            ease: Power3.easeOut,
            onComplete: function() {
              var t = page;
              $('#header .page').text(t.toUpperCase());

              TweenMax.to($('#header .page'), 0.7, {
                  x: 0,
                  opacity: 1,
                  ease: Power3.easeOut,
                });
            }
          });

      };

    },

    onGetDetail: function(data,next) {

      var self = this;
      // ------------------------------------------------------------
      //  ready
      // ------------------------------------------------------------
      if (!next) {
        $('.detail')
          .addClass('nextDetail')
          .css('z-index', '2')
          .append(data);
      }else{
        $('.nextDetail')
          .addClass('curDetail')
          .removeClass('nextDetail');
        var d = $('.curDetail').clone();
        d.addClass('nextDetail')
         .removeClass('curDetail')
         .css('z-index', '2')
         .scrollTop(0)
         .html('')
         .append(data)
        $('body').append(d);

      }

      // 現在のコンテンツ
      TweenMax.set($('.nextDetail').find('.content'), {x: $(window).width()});

      // ------------------------------------------------------------
      //  layout
      // ------------------------------------------------------------
      // size
      gb.setImgSPSize($('.nextDetail img'));
      // layout
      var p = new gb.PosCenter();
      $(window).on('resize', function(){p.onResize();});
      p.run();

      // ------------------------------------------------------------
      //  motion
      // ------------------------------------------------------------      
      if (!next) {

        var tl = new TimelineMax();

        tl.to($('#contents'), 0.6, {
            x: -$(window).width(),
            ease: Power3.easeInOut,
            delay: 0.2,
          })
          .to($('.nextDetail').find('.content'), 0.8, {
            x: 0,
            ease: Power3.easeInOut,
          },'-=0.8')
          .fromTo($('.ui__menu_btnC'), 0.5, {
            'display':'block',
            opacity: 0,
          },{
            opacity: 1,
            ease: Power3.easeInOut,
            onComplete: function(){
              self.isLock = false;
              gb.in.youtube.createIframe();
            }
          });

      } else {

        var tl = new TimelineMax();

        tl.to($('.curDetail'), 0.6, {
            x: -$(window).width(),
            ease: Power3.easeInOut,
            delay: 0.2,
          })
          .to($('.nextDetail').find('.content'), 0.8, {
            x: 0,
            ease: Power3.easeInOut,
            onComplete: function() {
              $('.curDetail').remove();
              self.isLock = false;
              gb.in.youtube.createIframe();
            }
          },'-=0.8');
      }


      // ------------------------------------------------------------
      // event再設定
      // ------------------------------------------------------------
      $('.nextDetail .detailLink').on('click.detail', function(){self.onTouch.call(self,this,true);return false;});
      $('.ui__menu_btnC').on('click.detailClose', function(e){self.onTouchClose.call(self,e);return false;});

    },
    
    onTouch: function(that,next) {

      if (this.isLock) return;
      this.isLock = true;
      this.isDetail = true;

      gb.in.sc.isLock = true;

      this.switchPageText('detail',next);

      // detailの取得
      var src = $(that).data('url');
      this.getDetail(src,next);

      // hashのセット
      var hash = $(that).data('hash');
      gb.in.util.setHash(hash);

      // ログ
      gb.in.log.send02(location.href);

    },
    
    onTouchClose: function(e) {

      if (this.isLock) return;
      this.isLock = true;
      var self = this;

      this.switchPageText('project',false);

      // detail内コンテンツの削除
      var tl = new TimelineMax();

      tl.to($('.nextDetail').find('.content'), 0.6, {
          x: $(window).width(),
          ease: Power3.easeInOut,
          delay: 0.2,
        })
        .to($('#contents'), 0.8, {
          x: 0,
          ease: Power3.easeInOut,
        },'-=0.8')
        .to($('.ui__menu_btnC'), 0.5, {
          'display':'block',
          opacity: 0,
          onComplete: function(){
            $('.nextDetail')
              .css('z-index', '-1')
              .html('');

            gb.in.sc.isLock = false;
            self.isLock = false;
            self.isDetail = false;
          }
        });

        // ハッシュの削除
        gb.in.util.setHash('');

    },

    onResize: function(){

      if (this.isDetail) {

        TweenMax.set($('#contents'), {x: -$(window).width()});
        
      }

    },

    setEvents: function(){

      var self = this;

      $('.detailLink').on('click.detail', function(){self.onTouch.call(self,this);return false;});
      $(window).on('resize', function(e){self.onResize.call(self,e);return false;});

    }

  }
  // 公開api
  gb.TransitionDetailProject = TransitionDetailProject;

}());
//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function TransitionDetailTechnology(){

    this.isLock = false;
    this.next = false;
    this.isDetail = false;
    this.setEvents();

  }

  TransitionDetailTechnology.prototype = {

    ready: function () {

    },

    getDetail: function(src,next) {

      var self = this;

      $.get(src, function(data){self.onGetDetail.call(self,data,next);});

    },

    switchPageText: function(page,next) {

      if (!next) {

        // page変更
        TweenMax.to($('#header .page'), 0.7, {
            x: -20,
            opacity: 0,
            delay: 0.2,
            ease: Power3.easeOut,
            onComplete: function() {
              var t = page;
              $('#header .page').text(t.toUpperCase());

              TweenMax.to($('#header .page'), 0.7, {
                  x: 0,
                  opacity: 1,
                  ease: Power3.easeOut,
                });
            }
          });

      };

    },

    onGetDetail: function(data,next) {

      var self = this;
      // ------------------------------------------------------------
      //  ready
      // ------------------------------------------------------------
      if (!next) {
        $('.detail')
          .addClass('target')
          .css('z-index', '2')
          .append(data);
      }else{
        var d = $('.target').clone();
            d.addClass('temp')
             .removeClass('target')
             .css('z-index', '1'); 
        $('.target')
          .html('')
          .css('z-index', '2')
          .append(data);
        $('body')
          .append(d);
        var st = $('.target').scrollTop();
        $('.target').scrollTop(0);
        $('.temp').scrollTop(st);
      }

      // 現在のコンテンツ
      TweenMax.set($('.target'), {x: $(window).width()});
      var h = $('.detail .scrollArea').height();
      if (h<=$(window).height()) $('.detail .scrollArea').css('height', '100%');;

      // ------------------------------------------------------------
      //  layout
      // ------------------------------------------------------------
      // size
      gb.setImgSPSize($('.target img'));      
      // layout
      var p = new gb.PosCenter();
      $(window).on('resize', function(){p.onResize();});
      p.run();

      // ------------------------------------------------------------
      //  motion
      // ------------------------------------------------------------      
      if (!next) {
      var tl = new TimelineMax();

      tl.to($('#contents'), 0.6, {
          x: -$(window).width(),
          ease: Power3.easeInOut,
          delay: 0.2,
        })
        .to($('.target'), 0.8, {
          x: 0,
          ease: Power3.easeInOut,
          onComplete: function(){
            self.isLock = false;
            gb.in.youtube.createIframe();
          }
        },'-=0.8');
      } else {
        var tl = new TimelineMax();

        tl.to($('.temp'), 0.6, {
            x: -$(window).width(),
            ease: Power3.easeInOut,
            delay: 0.2,
          })
          .to($('.target'), 0.8, {
            x: 0,
            ease: Power3.easeInOut,
            onComplete: function() {
              $('.temp').remove();
              self.isLock = false;
              gb.in.youtube.createIframe();
            }
          },'-=0.8');
      }

      // ------------------------------------------------------------
      // event再設定
      // ------------------------------------------------------------
      $('.target .detailLink').on('click.detail', function(e){self.onTouch.call(self,e,true);return false;});
      $('.detail .ui__menu_btn_c').on('click.detailClose', function(e){self.onTouchClose.call(self,e);return false;});

    },
    
    onTouch: function(e,next) {

      if (this.isLock) return;
      this.isLock = true;
      this.isDetail = true;

      gb.in.sc.isLock = true;

      this.switchPageText('detail',next);

      // detailの取得
      var src = $(e.currentTarget).data('url');
      this.getDetail(src,next);

    },
    
    onTouchClose: function(e) {

      if (this.isLock) return;
      this.isLock = true;
      var self = this;

      this.switchPageText('technology',false);

      // detail内コンテンツの削除
      var tl = new TimelineMax();

      tl.to($('.target'), 0.6, {
          x: $(window).width(),
          ease: Power3.easeInOut,
          delay: 0.2,
        })
        .to($('#contents'), 0.8, {
          x: 0,
          ease: Power3.easeInOut,
          onComplete: function(){
            $('.target')
              .css('z-index', '-1')
              .html('');

            gb.in.sc.isLock = false;
            self.isLock = false;
            self.isDetail = false;
          }
        },'-=0.8');

    },

    onResize: function(){

      if (this.isDetail) {

        TweenMax.set($('#contents'), {x: -$(window).width()})
        $('.detail .scrollArea').css('height', 'auto');
        var h = $('.detail .scrollArea').height();
        if (h<=$(window).height()) $('.detail .scrollArea').css('height', '100%');

      }

    },

    setEvents: function(){

      var self = this;

      $('.detailLink').on('click.detail', function(e){self.onTouch.call(self,e);return false;});
      $(window).on('resize', function(e){self.onResize.call(self,e);return false;});

    }

  }
  // 公開api
  gb.TransitionDetailTechnology = TransitionDetailTechnology;

}());
//--------------------------------------------------
//
//  vimeo
//
//--------------------------------------------------
(function(){

  function Vimeo($obj,$btn) {

    var iframe = $obj[0];
    this.player = $f(iframe);

    this.$btn = $btn;

    this.setEvents();
    this.ready();

  }

  Vimeo.prototype = {

    ready: function() {


    },

    onPause: function () {

    },

    onFinish: function () {

    },

    onPlayProgress: function (data) {

    },

    setEvents: function() {

      var self = this;

      this.player.addEvent('ready', function() {          
          self.player.addEvent('pause', self.onPause);
          self.player.addEvent('finish', self.onFinish);
          self.player.addEvent('playProgress', self.onPlayProgress);
      });

      this.$btn.on('click', function() {
          self.player.api('play');
      });

    },

  }

  gb.Vimeo = Vimeo;

})();
//--------------------------------------------------
//
//  Bg
//
//--------------------------------------------------

(function(){

  

  function Bg() {

    this.Bg;
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

  }

  Bg.prototype = {

    setup: function() {

      var self = this;

      var rtc = new gb.WebRTC();
      rtc.getStream()
        .then(function(){

          gb.in.video = self.video = new gb.Video(rtc.videoSrc);
          gb.in.video.cb = self.create.bind(self);
          self.video.setup();

        })

    },

    create: function() {

      // videoをテクスチャとして使う
      texture = new THREE.VideoTexture(gb.in.video.video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;

      // ie11の場合
      // ctx = canvas.getContext('2d');
      // ctx.fillStyle = '#000000';
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      // // 生成したcanvasをtextureとしてTHREE.Textureオブジェクトを生成
      // texture = new THREE.Texture(canvas);

      // videoのサイズ設定
      gb.in.rate = this.rate = gb.in.video.h/gb.in.video.w;
      this.defW = 305;var h = this.defW * this.rate;

      this.geometry = new THREE.PlaneGeometry( this.defW, h, 32 );
      this.material = new THREE.MeshBasicMaterial( {map: texture, transparent: true} );
      // this.material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true} );

      this.plane = new THREE.Mesh( this.geometry, this.material );
      gb.in.scene.scene.add( this.plane );

      // 透明度設定
      this.plane.position.z = -1;
      // this.plane.material.opacity = 0.195;
      this.plane.material.opacity = 1;

      $(window).trigger('videoLoaded');


      this.onResize();
      this.setEvents();

      

    },

    setVideoSize: function() {

      // videoのセットサイズ          
      this.lb = new gb.LayoutBackground($('body'),$(this.video.video));
      this.setEvents();

    },

    setTransparent: function(val) {

      this.plane.material.opacity = val;

    },

    tweenTransparent: function(time,val) {

      var t = time || 1.0;
      var v = val.target || 1.0;
      var e = val.ease || Power2.easeOut;

      TweenMax.to(this.plane.material, t, {
        opacity: v,
        ease : e,
      });

    },

    update: function() {




    },

    onResize: function() {

      var w = window.innerWidth;
      var h = window.innerHeight;

      var rateW = window.innerHeight / window.innerWidth;
      var r = w/h;

      if (rateW < this.rate) {

        this.plane.scale.set(r*0.58,r*0.58,r*0.58)

      } else {

        // log(2,scaleY);

        this.plane.scale.set(1,1,1);

      }

    },

    setEvents: function() {

      if (!gb.in.u.isIe11Under()) {

        gb.in.r.add(this.onResize.bind(this));

      } else {

        gb.in.r.add(this.lb.run.bind(this.lb));

      }
      

    },

  }

  // 公開api
  gb.Bg = Bg;
  
})();
//--------------------------------------------------
//
//  BufferDot
//
//--------------------------------------------------

(function(){

  

  function BufferDot() {

    this.Dot;
    this.geometry = null;
    this.material = null;

    this.particleData = [];

    this.num = 360;

    this.setup();
    this.create();

  }

  BufferDot.prototype = {

    setup: function() {


    },

    create: function() {

      this.group = new THREE.Object3D();
      var pos = gb.in.line.Line01.geometry.attributes.position.array;

      for (var i = 0; i < this.num; i++) {

        // dot        
        var dot = new gb.BufferDotParts();
        dot = dot.dot;

        dot.position.x = pos[i*3+0];
        dot.position.y = pos[i*3+1];
        dot.position.z = 0;

        this.particleData.push({
                          x: pos[i*3+0],y: pos[i*3+1],z:0,
                          scale:0.4+Math.random()*0.5,
                          radian:gb.in.u.radian(Math.random()*360),
                          vZRadian: gb.in.u.radian(89),
                          // vZRadian: gb.in.u.radian(0),
                        });

        this.group.add(dot);

      };

      this.Dot = this.group;
      gb.in.scene.scene.add(this.group);

    },

    setTransparent: function(val) {

      for (var i = 0; i < this.num; i++) {

        this.group.children[i].material.opacity = val;

      };

    },

    setSize: function(val) {

      var pos = gb.in.line.Line01.geometry.attributes.position.array;

      for (var i = 0; i < this.num; i++) {

        this.group.children[i].scale.set(val,val,val);

        this.group.children[i].position.x = pos[i*3+0];
        this.group.children[i].position.y = pos[i*3+1];

      };

    },

    tweenTransparent: function(val) {

      for (var i = 0; i < this.num; i++) {

        TweenMax.to(this.group.children[i].material, 6, {
          opacity: val,
          delay: 0.003 * i,
          ease : Power3.easeOut,
        });

        var p = this.particleData[i];

        TweenMax.to(p, 3, {
          vZRadian: gb.in.u.radian(0),
          delay: 0.002 * i,
          ease : Power2.easeOut,
        });

      };

    },

    tweenTransparent2: function(val,time) {

      for (var i = 0; i < this.num; i++) {

        TweenMax.to(this.group.children[i].material, time, {
          opacity: val,
          ease : Power2.easeOut,
        });

      };

    },

    changeColors: function(r,g,b){

      // colors
      var color = new THREE.Color('rgb('+r+','+g+','+b+')');

      for (var i = 0; i < this.num; i++) {

        this.group.children[i].material.color.r = color.r;
        this.group.children[i].material.color.g = color.g;
        this.group.children[i].material.color.b = color.b;

        // this.group.children[i].material.needsUpdate = true;
      };

    },

    // lineオブジェクト自体の回転
    updateRotate: function() {

      // var rotateX = gb.in.u.radian(gb.in.up.cnt/1);
      // var rotateY = gb.in.u.radian(gb.in.up.cnt/1);
      var rotateZ = gb.in.u.radian(gb.in.up.cnt/25);

      var rotateX = 0;
      var rotateY = 0;
      // var rotateZ = 0;

      this.Dot.rotation.set(rotateX, rotateY, rotateZ);

    },

    // lineオブジェクト自体の回転
    updateScaleWavy: function() {

      var vRadian = gb.in.u.radian(gb.in.up.cnt*1);

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];
        var scale = Math.sin(p.radian + vRadian) * p.scale;

        // scale
        this.Dot.children[i].scale.set(scale * gb.in.param.dot_size,scale * gb.in.param.dot_size,scale * gb.in.param.dot_size);

        // wavy
        this.Dot.children[i].position.x = p.x + (Math.sin(p.radian + vRadian) * 0.7) + (Math.sin(p.radian + vRadian) * 0.7);
        this.Dot.children[i].position.y = p.y + (Math.cos(p.radian + vRadian) * 0.7) + (Math.cos(p.radian + vRadian) * 0.7);
        this.Dot.children[i].position.z = p.z + (Math.tan(p.vZRadian*1) * 100);

      };

    },

    update: function() {


      this.updateRotate();
      this.updateScaleWavy();

    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferDot = BufferDot;
  
})();
//--------------------------------------------------
//
//  BufferDotParts
//
//--------------------------------------------------

(function(){

  

  function BufferDotParts() {

    this.dot;
    this.geometry = null;
    this.material = null;

    this.radius = 1;
    this.segment = 32;

    this.r = 33;
    this.g = 33;
    this.b = 33;

    this.color = new THREE.Color('rgb('+this.r+','+this.g+','+this.b+')');
    this.transparent = true;

    this.setup();
    this.create();

  }

  BufferDotParts.prototype = {

    setup: function() {


    },

    create: function() {

      // dot
      this.geometry = new THREE.CircleGeometry( this.radius, this.segment );
      this.material = new THREE.MeshBasicMaterial({color: this.color,transparent: this.transparent});
      this.dot = new THREE.Mesh( this.geometry, this.material );

    },

    setTransparent: function(val) {


    },

    setSize: function(val) {


    },

    tweenTransparent: function(val) {


    },

    tweenTransparent2: function(val,time) {


    },

    changeColors: function(r,g,b){



    },

    // lineオブジェクト自体の回転
    updateScaleWavy: function() {

      // var vRadian = gb.in.u.radian(gb.in.up.cnt*2);

      // for (var i = 0; i < this.num; i++) {

      //   var p = this.particleData[i];
      //   var scale = Math.sin(p.radian + vRadian) * p.scale;

      //   // scale
      //   this.Dot.children[i].scale.set(scale,scale,scale);

      //   // wavy
      //   this.Dot.children[i].position.x = p.x + (Math.sin(p.radian + vRadian) * 3) + (Math.sin(p.radian + vRadian) * 3);
      //   this.Dot.children[i].position.y = p.y + (Math.cos(p.radian + vRadian) * 3) + (Math.cos(p.radian + vRadian) * 3);
      //   this.Dot.children[i].position.z = p.z + (Math.tan(p.vZRadian*1) * 100);

      // };

    },

    update: function() {


    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferDotParts = BufferDotParts;
  
})();
//--------------------------------------------------
//
//  Line
//
//--------------------------------------------------

(function(){

  

  function BufferLine() {

    this.Line01;
    this.Line02;
    this.Line03;
    this.Line04;
    this.Line05;
    this.geometry = null;
    this.material = null;

    this.positions = [];
    this.colors = [];
    this.num = 720;
    this.cnt = 0;

    this.easing = 0.03;
    this.vRadius = 5;
    this.zoff=0;

    this.timer01=null;
    this.timer02=null;
    this.timer03=null;
    this.timer04=null;
    this.timer05=null;

    this.particleData = [];

    this.setup();
    this.create();

  }

  BufferLine.prototype = {

    setup: function() {


    },

    create: function() {

      this.geometry = new THREE.BufferGeometry();
      this.material01 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material02 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material03 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material04 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material05 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });

      this.setVertex();

      this.Line01 = new THREE.Line( this.geometry, this.material01);
      this.Line02 = this.Line01.clone();
      this.Line03 = this.Line01.clone();
      this.Line04 = this.Line01.clone();
      this.Line05 = this.Line01.clone();

      this.Line02.material = this.material02
      this.Line03.material = this.material03
      this.Line04.material = this.material04
      this.Line05.material = this.material05

      gb.in.scene.scene.add(this.Line01);
      gb.in.scene.scene.add(this.Line02);
      gb.in.scene.scene.add(this.Line03);
      gb.in.scene.scene.add(this.Line04);
      gb.in.scene.scene.add(this.Line05);

      this.Line01.position.z = -90;
      this.Line02.position.z = -90;
      this.Line03.position.z = -90;
      this.Line04.position.z = -90;
      this.Line05.position.z = -90;

      this.Line01.material.opacity = 0.0;
      this.Line02.material.opacity = 0.0;
      this.Line03.material.opacity = 0.0;
      this.Line04.material.opacity = 0.0;
      this.Line05.material.opacity = 0.0;

    },

    setVertex: function() {

      this.positions = new Float32Array( this.num * 3 );
      this.colors = new Float32Array( this.num * 3 );

      var x,y;
      var w = gb.in.r.W(), h = gb.in.r.H();
      var radius,radiusOut,radiusIn,radian,step

      for (var i = 0; i < this.num; i++) {

        c = 0.65;
        // r = 0.05;

        if (i<this.num/2) r = 0.05;
        else r = 0.03 + 0.01 * Math.random();
        
        // radiusOut = Math.min(w, h) * (c + r);
        // radiusIn  = Math.min(w, h) * (c - r);
        radiusOut = 1000 * (c + r);
        radiusIn  = 1000 * (c - r);

        radius = (i%2 == 0)? radiusOut: radiusIn;
        step = 3 + Math.random() * 5;
        radian = gb.in.u.radian(i + step);
        x = Math.sin(radian) * radius * 0.1 * 1;
        y = Math.cos(radian) * radius * 0.1 * 1;

        this.particleData.push({
                          radian:radian,vradian:step,radius:radius,step:step,
                          x: x,y: y,z: 0,
                          // rad: gb.in.u.random(0,360), rad2: gb.in.u.random(0,360),vRad: gb.in.u.radian(gb.in.u.random(1, 2)),r:3,
                          // rad: gb.in.u.radian(360*i/this.num), rad2: gb.in.u.radian(360*100*i/this.num),vRad: gb.in.u.radian(gb.in.u.random(1, 2)),r:3,
                          rad: gb.in.u.radian(360*360*i/this.num), rad2: gb.in.u.radian(360*i/this.num),vRad: gb.in.u.radian(Math.random()*3),r:3,
                          rotateX: 0,rotateY: 0,rotateZ: 0,
                          noise: (new gb.PerlinNoise(i*1000))
                        });

        // positions
        this.positions[ i * 3 ] = this.particleData[i].x;
        this.positions[ i * 3 + 1 ] = this.particleData[i].y;
        this.positions[ i * 3 + 2 ] = this.particleData[i].z;

        var color = new THREE.Color('rgb('+155+','+155+','+155+')');

        // colors
        this.colors[ i * 3 ] = color.r;
        this.colors[ i * 3 + 1 ] = color.g;
        this.colors[ i * 3 + 2 ] = color.b;

      };

      this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
      this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );

    },

    changeColors: function(r,g,b){

      for (var i = 0; i < this.num; i++) {

        // colors
        var color = new THREE.Color('rgb('+r+','+g+','+b+')');
        this.colors[ i * 3 ] = color.r;
        this.colors[ i * 3 + 1 ] = color.g;
        this.colors[ i * 3 + 2 ] = color.b;

      };

      // log(color.r);

      // this.Line01.geometry.attributes.color.dynamic = true;
      // this.Line02.geometry.attributes.color.dynamic = true;
      // this.Line03.geometry.attributes.color.dynamic = true;
      // this.Line04.geometry.attributes.color.dynamic = true;
      // this.Line05.geometry.attributes.color.dynamic = true;

      this.Line01.geometry.attributes.color.needsUpdate = true;
      this.Line02.geometry.attributes.color.needsUpdate = true;
      this.Line03.geometry.attributes.color.needsUpdate = true;
      this.Line04.geometry.attributes.color.needsUpdate = true;
      this.Line05.geometry.attributes.color.needsUpdate = true;


    },

    changeRadius: function(val){

      var x,y;

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        x = p.x * val;
        y = p.y * val;

        // positions
        this.positions[ i * 3 ] = x;
        this.positions[ i * 3 + 1 ] = y;
        this.positions[ i * 3 + 2 ] = 0;

      };

      this.Line01.geometry.attributes.position.needsUpdate = true;
      this.Line02.geometry.attributes.position.needsUpdate = true;
      this.Line03.geometry.attributes.position.needsUpdate = true;
      this.Line04.geometry.attributes.position.needsUpdate = true;
      this.Line05.geometry.attributes.position.needsUpdate = true;

      // this.Line01.position.z = val-5000;
      // this.Line02.position.z = val-5000;
      // this.Line03.position.z = val-5000;
      // this.Line04.position.z = val-5000;
      // this.Line05.position.z = val-5000;


    },

    changeLineWidth: function(val){

      this.Line01.material.lineWdith = val;
      this.Line02.material.lineWdith = val;
      this.Line03.material.lineWdith = val;
      this.Line04.material.lineWdith = val;
      this.Line05.material.lineWdith = val;

      this.Line01.material.needsUpdate = true;
      this.Line02.material.needsUpdate = true;
      this.Line03.material.needsUpdate = true;
      this.Line04.material.needsUpdate = true;
      this.Line05.material.needsUpdate = true;

      this.Line01.material.name = 'test';

      log(this.Line01);

    },

    // lineオブジェクト自体の回転
    updateRotate: function() {

      // var rotateX = gb.in.u.radian(gb.in.up.cnt/1);
      // var rotateY = gb.in.u.radian(gb.in.up.cnt/1);
      // this.cnt++;
      var rotateZ = gb.in.u.radian(gb.in.up.cnt/25);

      // var rotateX = 0;
      // var rotateY = 0;
      // var rotateZ = 0;

      this.Line01.rotation.z = rotateZ;
      this.Line02.rotation.z = rotateZ;
      this.Line03.rotation.z = rotateZ;
      this.Line04.rotation.z = rotateZ;
      this.Line05.rotation.z = rotateZ;

    },

    // lineオブジェクト自体の回転
    showRotate: function() {

      var self = this;

      var tlMain = new TimelineMax();

      var tl01 = new TimelineMax();
      var tl02 = new TimelineMax();
      var tl03 = new TimelineMax();
      var tl04 = new TimelineMax();
      var tl05 = new TimelineMax();

      var r01 = gb.in.u.random(1,2);
      var r02 = gb.in.u.random(1,2);
      var r03 = gb.in.u.random(1,2);
      var r04 = gb.in.u.random(1,2);
      var r05 = gb.in.u.random(1,2);

      // tl01
      //   .to(this.Line01.rotation, 2 + 6 * Math.random(), {
      //     x: gb.in.u.radian(360*r01),
      //     y: gb.in.u.radian(360*r01),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl02
      //   .to(this.Line02.rotation, 2 + 6 * Math.random(), {
      //     x: gb.in.u.radian(360*r02),
      //     y: gb.in.u.radian(360*r02),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl03
      //   .to(this.Line03.rotation, 2 + 6 * Math.random(), {
      //     x: gb.in.u.radian(360*r03),
      //     y: gb.in.u.radian(360*r03),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl04
      //   .to(this.Line04.rotation, 2 + 6 * Math.random(), {
      //     x: gb.in.u.radian(360*r04),
      //     y: gb.in.u.radian(360*r04),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl05
      //   .to(this.Line05.rotation, 2 + 6 * Math.random(), {
      //     x: gb.in.u.radian(360*r05),
      //     y: gb.in.u.radian(360*r05),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })

      tlMain
        // ------------------------------------------------------------
        // fadein
        // ------------------------------------------------------------
        // .to(this.Line01.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line01.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=0.0')
        // .to(this.Line02.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line02.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')
        // .to(this.Line03.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line03.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')
        // .to(this.Line04.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line04.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')
        // .to(this.Line05.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line05.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')

        // ------------------------------------------------------------
        // rotate
        // ------------------------------------------------------------
        .to(this.Line01.rotation, 2.0, {
          x: gb.in.u.radian(360*gb.in.u.random(2,2)),
          y: 0,
          z: 0,
          delay: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line01.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   

          }
        })
        .to(this.Line02.rotation, 2.0, {
          x: 0,
          y: gb.in.u.radian(360*gb.in.u.random(2,2)),
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line02.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   
            
          }
        },'-=1.7')
        .to(this.Line03.rotation, 2.0, {
          x: gb.in.u.radian(-360*gb.in.u.random(2,2)),
          y: 0,
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line03.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   
            
          }
        },'-=1.7')
        .to(this.Line04.rotation, 2.0, {
          x: 0,
          y: gb.in.u.radian(-360*gb.in.u.random(2,2)),
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line04.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   
            
          }
        },'-=1.7')
        .to(this.Line05.rotation, 2.0, {
          x: gb.in.u.radian(360*gb.in.u.random(2,2)),
          y: gb.in.u.radian(360*gb.in.u.random(2,2)),
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line05.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   

          },
          onComplete: function(){

            gb.in.gl.stateLineRotate = true;
          }
        },'-=1.7')
        .add(function(){
          TweenMax.to(gb.in.line.Line01.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.in.line.Line02.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.in.line.Line03.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.in.line.Line04.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.in.line.Line05.position, 1.2, {z: 0,ease: Power4.easeInOut,onComplete:function(){}});
        },'-=0.6')

    },

    sometimesRotate: function() {

      var self = this;

      var paramList = [
        {
          x: gb.in.u.radian(360),
          y: 0,
          z: 0,
          ease: Back.easeOut.config(1.4),
        },
        {
          x: 0,
          y: gb.in.u.radian(360),
          z: 0,
          ease: Back.easeOut.config(1.4),
        },
        {
          x: gb.in.u.radian(360),
          y: gb.in.u.radian(360),
          z: 0,
          ease: Back.easeOut.config(1.4),
        },
      ]

      this.timer01 = setTimeout(rotate01,4000 * Math.random());
      this.timer02 = setTimeout(rotate02,4000 * Math.random());
      this.timer03 = setTimeout(rotate03,4000 * Math.random());
      this.timer04 = setTimeout(rotate04,4000 * Math.random());
      this.timer05 = setTimeout(rotate05,4000 * Math.random());

      function rotate01() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.in.line.Line01.rotation, 4, paramList[i])

        self.timer01=setTimeout(rotate01,5000 + 2000 * Math.random());

      }
      function rotate02() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.in.line.Line02.rotation, 4, paramList[i])

        self.timer02=setTimeout(rotate02,5000 + 2000 * Math.random());
      }
      function rotate03() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.in.line.Line03.rotation, 4, paramList[i])

        self.timer03=setTimeout(rotate03,5000 + 2000 * Math.random());
      }
      function rotate04() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.in.line.Line04.rotation, 4, paramList[i])

        self.timer04=setTimeout(rotate04,5000 + 2000 * Math.random());
      }
      function rotate05() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.in.line.Line05.rotation, 4, paramList[i])

        self.timer05=setTimeout(rotate05,5000 + 2000 * Math.random());
      }

    },

    clearRotate: function() {

      var self = this;

      clearTimeout(this.timer01);
      clearTimeout(this.timer02);
      clearTimeout(this.timer03);
      clearTimeout(this.timer04);
      clearTimeout(this.timer05);

    },

    createCircleCanvas: function() {
        var canvas = document.createElement('canvas');
        var SIZE = 20;
        var HALF = SIZE / 2;
        var CENTER = SIZE / 2;
        canvas.width = SIZE;
        canvas.height = SIZE;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,SIZE,SIZE);
        ctx.lineWidth = 0;
        ctx.beginPath();
        ctx.arc(CENTER, CENTER, HALF, 0, 2 * Math.PI, false);
        var grad = ctx.createRadialGradient(CENTER, CENTER, 0, CENTER, CENTER, HALF);

        var h = Math.floor(191 + Math.random()*90);
        var s = Math.floor(40 + Math.random()*60);
        var b = Math.floor(60 + Math.random()*40);

        grad.addColorStop(0,'hsla('+h+','+s+'%,'+b+'%,1)');
        grad.addColorStop(0.6,'hsla(0,0%,0%,0)');

        // grad.addColorStop(0,'rgba(255,0,0,1)');
        // grad.addColorStop(0.6,'rgba(0,0,0,0)');
        // ctx.fillStyle = 'rgba(255,0,0,1)';
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.closePath();
        // return canvas.toDataURL("image/png");
        return canvas;
    },

    montecarlo: function () {
      
      while (true) {  

        var r1 = Math.random(); 
        var probability = Math.pow(1.0 - r1,8);  
      
        var r2 = Math.random(); 
        if (r2 < probability) { 
          return r1;
        }
      }

    },

    tweenTransparent: function(time,val) {

      var t = time || 1.0;
      var v = (val.target!==undefined)? val.target : 1.0;
      var e = val.ease || Power2.easeOut;

      TweenMax.to(this.Line01.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line02.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line03.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line04.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line05.material, t, {
        opacity: v,
        ease : e,
      });

    },

    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferLine = BufferLine;
  
})();
//--------------------------------------------------
//
//  BufferLineParts
//
//--------------------------------------------------

(function(){

  

  function BufferLineParts() {

    this.Line;
    this.geometry = null;
    this.material = null;

    this.points = [
      {x:0,y:0,z:0}, //startPoint
      {x:0,y:0,z:0}, //endPoint
    ]

    this.positions = [];
    this.colors = [];
    this.num = 2;


    this.setup();
    this.create();

  }

  BufferLineParts.prototype = {

    setup: function() {


    },

    create: function() {

    },

    setVertex: function() {



    },

    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferLineParts = BufferLineParts;
  
})();
//--------------------------------------------------
//
//  BufferParticle
//
//--------------------------------------------------

(function(){

  

  function BufferParticle() {

    this.Line;
    this.geometry = null;
    this.material = null;

    this.positions = [];
    this.colors = [];
    this.num = 7000;

    this.easing = 0.03;
    this.vRadius = 5;
    this.zoff=0;

    this.particleData = [];

    this.setup();
    this.create();
    this.setEvents();
    this.onResize();

  }

  BufferParticle.prototype = {

    setup: function() {


    },

    create: function() {

      log(gb.in.param.particle_size);

      // geomety,material準備
      this.geometry = new THREE.BufferGeometry();
      this.material = new THREE.PointsMaterial( {
        vertexColors: THREE.VertexColors,
        size: gb.in.param.particle_size,
        transparent: true,
        // blending: THREE.AdditiveBlending,
        sizeAttenuation: false,
      } );

      // gemetryの頂点セット
      this.setVertex();

      // オブジェクト生成
      this.Particle = gb.in.Particle = new THREE.Points( this.geometry, this.material);
      this.Particle.position.z = 0;
      this.Particle.material.opacity = 1;
      // オブエジェクトシーンに追加

    },

    setVertex: function() {

      this.positions = new Float32Array( this.num * 3 );
      this.colors = new Float32Array( this.num * 3 );

      var x,y;
      var w = gb.in.r.W(), h = gb.in.r.H();
      var radius=0,radiusOut=0,radiusIn=0,radian=0,step=0

      for (var i = 0; i < this.num; i++) {

        var param = {
          x: gb.in.u.range(40)*0.5*Math.random(),y: gb.in.u.range(40)*0.5*Math.random(),z: 0,
          radian:gb.in.u.radian(Math.random()*360),vradian:step,radius:radius,
          rad: gb.in.u.radian(360*360*i/this.num), rad2: gb.in.u.radian(360*i/this.num),vRad: gb.in.u.radian(1.0 + Math.random()*0.5),r: 35,
          rotateX: 0,rotateY: 0,rotateZ: 0,
          noise: (new gb.PerlinNoise(i*1000)),
          stepX:0, stepY: 0,
        }

        var p = new gb.BufferParticleParts(param);
        this.particleData.push(p);

        // positions
        this.positions[ i * 3 ] = this.particleData[i].x;
        this.positions[ i * 3 + 1 ] = this.particleData[i].y;
        this.positions[ i * 3 + 2 ] = this.particleData[i].z;


        // colors
        var h = Math.floor(191 + Math.random()*gb.in.param.particle_h);
        var s = Math.floor(40 + Math.random()*gb.in.param.particle_s);
        var b = Math.floor(70 + Math.random()*gb.in.param.particle_b);

        var color = new THREE.Color('hsl('+h+','+s+'%,'+b+'%)');
        this.colors[ i * 3 ] = color.r;
        this.colors[ i * 3 + 1 ] = color.g;
        this.colors[ i * 3 + 2 ] = color.b;

      };

      this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
      this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );

    },

    // 回転の速度と、半径のupdate
    setupUpdateCircle: function() {

      var x,y;
      var w = gb.in.r.W(), h = gb.in.r.H();
      var radius=0,radiusOut=0,radiusIn=0,radian=0,step=0;

      for (var i = 0; i < this.num; i++) {

        c = 0.65;
        if (i<this.num/2) r = 0.05;
        else r = 0.03 + 0.01 * Math.random();
        
        radiusOut = Math.min(w, h) * (c + r);
        radiusIn  = Math.min(w, h) * (c - r);

        radius = (i%2 == 0)? radiusOut: radiusIn;
        step = 3 + Math.random() * 5;
        radian = gb.in.u.radian(i + step);
        x = Math.sin(radian) * radius;
        y = Math.cos(radian) * radius;

        this.particleData[i].x = x;
        this.particleData[i].y = y;
        this.particleData[i].radian = radian;
        this.particleData[i].vradian = step;
        this.particleData[i].radius = radius;

      };

    },

    // 回転の速度と、半径のupdate
    updateCircle: function() {

      // this.updateRadius();

      var sin = gb.in.u.sin(100);

      for (var i = 0; i < this.num; i++) {

        // 回転の速度
        // var radian = this.particleData[i].radian;
        var radian = this.particleData[i].radian += this.particleData[i].vradian*0.002;
        // 半径

        // var radius = this.particleData[i].radius += this.particleData[i].vradian*this.vRadius;
        var radius = this.particleData[i].radius = this.particleData[i].vradian * sin;
        radius *= 6;
        // var radius = this.particleData[i].radius;

        this.positions[i*3+0] = Math.sin(radian) * radius;
        this.positions[i*3+1] = Math.cos(radian) * radius;

      };

      this.geometry.attributes.position.needsUpdate = true;

    },

    // 速度ランダムで円形上に回転
    updateCircleSize: function() {

      var size= (gb.in.noise.getPerlin()+1)*10;
      this.Particle.material.size = size;


      this.geometry.attributes.position.needsUpdate = true;
    },

    // 球体状を回転 random
    updateSphere: function() {

      var vRadian = gb.in.u.radian(gb.in.up.cnt*2.6);

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        p.sphere(vRadian);

        this.positions[i*3+0] = p.x;
        this.positions[i*3+1] = p.y;
        this.positions[i*3+2] = p.z;

        // log(i,p.x);

      };

      this.geometry.attributes.position.needsUpdate = true;

    },

    // ランダムウォーク
    updateRandomWalk: function() {

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        var stepx = gb.in.u.range(1);
        var stepy = gb.in.u.range(1);
        
        // var stepsize = this.montecarlo()*10;
        var stepsize = this.montecarlo()*Math.random();
        stepx *= stepsize;
        stepy *= stepsize;

        p.x += stepx;
        p.y += stepy;
        p.z = 0;

        this.positions[i*3+0] = p.x;
        this.positions[i*3+1] = p.y;
        this.positions[i*3+2] = p.z;

      };

      this.geometry.attributes.position.needsUpdate = true;

    },

    // 衛星
    setupSatellite: function() {

      this.satellitePos = gb.in.line.Line01.geometry.attributes.position.array;
      this.satelliteNum = Math.ceil(this.num / this.satellitePos.length);

    },

    // 衛星
    updateSatellite: function() {

      var vRadian = gb.in.u.radian(gb.in.up.cnt*2.6);

      for (var i = 0; i < this.satelliteNum; i++) {

        for (var j = 0; j < this.satellitePos.length; j++) {

          var nth = i*this.satellitePos.length+j;
          if (nth>this.num-1) continue;

          var p = this.particleData[nth];
          var gx = this.satellitePos[j*3+0];
          var gy = this.satellitePos[j*3+1];
          var gz = 0;
          var wavy = p.wavy(gx,gy,gz,vRadian);

          this.positions[nth*3+0] = p.x + wavy.x;
          this.positions[nth*3+1] = p.y + wavy.y;
          this.positions[nth*3+2] = p.z + wavy.z;

        };
        
      };

      this.geometry.attributes.position.needsUpdate = true;

    },

    // 半径の大きさを変える
    updateRadius: function() {

      if (this.vRadius < 1.01) {

        this.vRadiusTarget = 5;

      }

      if (this.vRadius > 4.99) {

        this.vRadiusTarget = 0;
        

      }

      this.vRadius += (this.vRadiusTarget - this.vRadius) * this.easing;

      // var step = gb.in.u.map(gb.in.noise.getPerlin(),-1,1,-2,2);

      this.geometry.attributes.position.needsUpdate = true;

    },

    // オブジェクト自体の回転
    updateRotate: function() {

      var rotateX = gb.in.u.radian(gb.in.up.cnt/1);
      // var rotateY = gb.in.u.radian(gb.in.up.cnt/1);
      // var rotateZ = gb.in.u.radian(gb.in.up.cnt/1);
      var rotateY = 0;
      var rotateZ = 0;

      this.Particle.rotation.set(rotateX, rotateY, rotateZ);

      this.geometry.attributes.position.needsUpdate = true;

    },

    setupUpdateLineShadow: function() {

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        p.x = gb.in.u.range(40)*0.5*Math.random();
        p.y = gb.in.u.range(40)*0.5*Math.random();
        p.z = 0;

        this.positions[i*3+0] = p.x;
        this.positions[i*3+1] = p.y;
        this.positions[i*3+2] = p.z;

      }

    },

    resetUpdateLineShadow: function(i) {

      var p = this.particleData[i];

      p.x = gb.in.u.range(100)*Math.random();
      p.y = gb.in.u.range(70)*Math.random();
      p.z = 0;

      this.positions[i*3+0] = p.x;
      this.positions[i*3+1] = p.y;
      this.positions[i*3+2] = p.z;

    },

    // ぐにゃぐにゃ
    updateLineShadow: function() {

      var vRadian = gb.in.u.radian(gb.in.up.cnt*2);
      
      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        p.softThread(vRadian,this.zoff);
        if (p.boundary()) this.resetUpdateLineShadow(i);

        // if (i < this.num/4) {

        //   this.positions[i*3+0] = p.x;
        //   this.positions[i*3+1] = -70;
        //   this.positions[i*3+2] = p.z;

        // };
 
        // if (i > this.num/4 && i < this.num/4*2 ) {

        //   this.positions[i*3+0] = p.defRight * gb.in.camera.valForParticle;
        //   this.positions[i*3+1] = p.y;
        //   this.positions[i*3+2] = p.z;

        // };
 
        // if (i > this.num/4*2 && i < this.num/4*3 ) {

        //   this.positions[i*3+0] = p.x;
        //   this.positions[i*3+1] = 70;
        //   this.positions[i*3+2] = p.z;

        // };
 
        // if (i > this.num/4*3 && i < this.num ) {

        //   this.positions[i*3+0] = p.defLeft * gb.in.camera.valForParticle;
        //   this.positions[i*3+1] = p.y;
        //   this.positions[i*3+2] = p.z;

        // };


        this.positions[i*3+0] = p.x;
        this.positions[i*3+1] = p.y;
        this.positions[i*3+2] = p.z;

      }

      this.zoff += 0.002;

      this.geometry.attributes.position.needsUpdate = true;

    },

    montecarlo: function () {
      
      while (true) {  

        var r1 = Math.random(); 
        var probability = Math.pow(1.0 - r1,8);  
      
        var r2 = Math.random(); 
        if (r2 < probability) { 
          return r1;
        }
      }

    },

    toScreenPosition: function (obj) {
        var vector = new THREE.Vector3();

        var widthHalf = 0.5*gb.in.gl.renderer.context.canvas.width;
        var heightHalf = 0.5*gb.in.gl.renderer.context.canvas.height;

        obj.updateMatrixWorld();
        vector.setFromMatrixPosition(obj.matrixWorld);
        vector.project(gb.in.camera.camera);

        vector.x = ( vector.x * widthHalf ) + widthHalf;
        vector.y = - ( vector.y * heightHalf ) + heightHalf;

        return { 
            x: vector.x,
            y: vector.y
        };

    },

    tweenTransparent: function(time,val) {

      var t = time || 1.0;
      var v = (val.target!==undefined)? val.target : 1.0;
      var e = val.ease || Power2.easeOut;

      TweenMax.to(this.Particle.material, t, {
        opacity: v,
        ease : e,
      });

    },

    update: function() {


      // this.updateCircleSize();
      // this.updateSphere();
      // this.updateSphere02();
      // this.updateRandomWalk();
      // this.updateRotate();
      


    },

    onResize: function() {

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];
        p.right = p.defRight * gb.in.camera.valForParticle;
        p.left = p.defLeft * gb.in.camera.valForParticle;

      }

    },

    setEvents: function() {

      gb.in.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.BufferParticle = BufferParticle;
  
})();
//--------------------------------------------------
//
//  BufferParticleParts
//
//--------------------------------------------------

(function(){

  

  function BufferParticleParts(param) {

    this.x = param.x || 0;
    this.y = param.y || 0;
    this.z = param.z || 0;

    this.defx = gb.in.u.range(100)*Math.random();
    this.defy = gb.in.u.range(70)*Math.random();
    this.defz = 0;

    this.vx = 0;
    this.vy = 0;
    this.vz = 0;

    // circle用
    this.radian = param.radian || 0;
    this.vradian = param.vradian || 0;
    this.radius = param.radius || 0

    // sphere用
    this.rad = param.rad || 0;
    this.rad2 = param.rad2 || 0;
    this.vRad = param.vRad || 0;
    this.r = param.r || 0;

    this.minDis = 3;

    this.rotateX = param.rotateX || 0;
    this.rotateY = param.rotateY || 0;
    this.rotateZ = param.rotateZ || 0;

    this.noise = param.noise || 0;
    this.stepX = param.stepX || 0;
    this.stepY = param.stepY || 0;

    this.step = 5 + Math.random() * 8;

    this.top = -70;
    this.right = 130;
    this.bottom = 70;
    this.left = -130;

    this.defRight = 130;
    this.defLeft = -130;

    this.isEasingStop = false;

  }

  BufferParticleParts.prototype = {

    wavy: function(gx,gy,gz,vRadian) {

      var step = this.noise.getPerlin() * 4;

      var obj = {
        x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
        y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
        z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
      }

      this.x += (gx - this.x) * 0.08;
      this.y += (gy - this.y) * 0.08;
      this.z += (gz - this.z) * 0.08;

      return obj;

    },

    softThread: function(vRadian,zoff) {

      var angle = Math.PI * 6 * this.noise.getPerlinCustom(Math.abs(this.x / 1300), Math.abs(this.y / 1300),zoff);
      this.vx = Math.cos(angle) * this.step * 0.1;
      this.vy = Math.sin(angle) * this.step * 0.1;
      this.vz = (Math.cos(this.radian + vRadian) * 3) + (Math.cos(this.radian + vRadian) * 3);
      
      // if (!this.isEasingStop) {
      //   this.x += (this.defx - this.x) * 0.08;
      //   this.y += (this.defy - this.y) * 0.08;
      //   this.z += (this.defz - this.z) * 0.08;
      //   if ((Math.abs(this.defx - this.x) < 0.01) && (Math.abs(this.defy - this.y) < 0.01) && (Math.abs(this.defz - this.z) < 0.01)) {
      //     this.isEasingStop=true;
      //   };
      // }

      this.x += this.vx;
      this.y += this.vy;

      // wavy
      var step = this.noise.getPerlin() * 0.1;
      var wavy = {
        x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
        y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
        z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
      }
      
      this.x += wavy.x;
      this.y += wavy.y;

    },

    repulse: function() {

      // var dis = gb.in.u.dist()
      // if (this.minDis) {};

    },

    boundary: function() {

      if (this.x > this.right || this.x < this.left || this.y > this.bottom || this.y < this.top) {
        return true;
      }

      return false;

    },

    sphere: function(vRadian) {

      // spehre
      this.rad += this.vRad;
      this.rad2 += this.vRad;

      // this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * this.r;
      // this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * this.r;
      // this.gz = Math.sin(this.rad) * this.r;
      this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * gb.in.param.particle_radius;
      this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * gb.in.param.particle_radius;
      this.gz = Math.sin(this.rad) * gb.in.param.particle_radius;

      // wavy
      var step = this.noise.getPerlin() * 0.3;
      var wavy = {
        x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
        y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
        z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
      }

      this.x += (this.gx - this.x) * 0.08 + wavy.x;
      this.y += (this.gy - this.y) * 0.08 + wavy.y;
      this.z += (this.gz - this.z) * 0.08 + wavy.z;

    },

  }

  // 公開api
  gb.BufferParticleParts = BufferParticleParts;
  
})();
//--------------------------------------------------
//
//  Cube
//
//--------------------------------------------------

(function(){

  

  // function Cube() {

  //   this.cube;
  //   this.material = null;

  //   this.setup();

  // }

  // Cube.prototype = {

  //   setup: function() {

  //     // ------------------------------------------------------------
  //     //  shader
  //     // ------------------------------------------------------------
  //     // this.shader = new gb.Plasma(this.create.bind(this));
  //     // this.shader = new gb.Clock(this.create.bind(this));
  //     // this.shader = new gb.Color(this.create.bind(this));

  //     // this.create();

  //     var shaderLoadList = [
  //                        gb.Clock,
  //                        gb.Color,
  //                        gb.Plasma,
  //                        gb.Sepia
  //                      ]
  //     var shaders = [];

  //     var shaderSerialLoad = (len, cb)=>{

  //         var shader,cnt=0;

  //         var load = (i)=>{
  //           shader = new shaderLoadList[i](comp);
  //           shaders.push(shader);
  //         };

  //         var comp = function(){
  //           cnt++;
  //           if(cnt == len) cb(shaders);
  //           else load(cnt);
  //         };

  //         load(cnt);

  //     }

  //     shaderSerialLoad(shaderLoadList.length,(shaders)=>{

  //       this.shader = shaders[3];

  //       log(shaders);
  //       this.create();

  //     })

  //   },

  //   create: function() {

  //     // ------------------------------------------------------------
  //     //  cube
  //     // ------------------------------------------------------------
  //     var geometry = new THREE.CubeGeometry(300, 300, 300);
  //     for (var i=0,len=geometry.faces.length; i<len; i++) {
  //         geometry.faces[i].color.setHSL(0,0.5,0.5);
  //     }
  //     // this.material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors } );

  //     this.material = new THREE.ShaderMaterial( {
  //                           uniforms: this.shader.uniforms,
  //                           vertexShader: this.shader.vs,
  //                           fragmentShader: this.shader.fs
  //                         });


  //     this.cube = new THREE.Mesh( geometry, this.material);

  //     this.cube.rotation.z = Math.PI / 8;

  //     gb.in.scene.scene.add(this.cube);

  //     log(this.cube);

  //     // axis
  //     // var axis = new THREE.AxisHelper(1000);
  //     // axis.position.set(0,0,0);


  //     // gb.in.scene.add(axis);

  //   },

  //   update: function() {

  //     // size

  //     // color
  //     // this.material.color.setRGB(gb.in.param.h,gb.in.param.s,gb.in.param.l);

  //   },


  //   setEvents: function() {


  //   },

  // }

  // // 公開api
  // gb.Cube = Cube;
  
})();
//--------------------------------------------------
//
//  Dot
//
//--------------------------------------------------

(function(){

  

  function Dot() {

    this.Dot;
    this.geometry = null;
    this.material = null;

    this.num = 720;

    this.setup();

  }

  Dot.prototype = {

    setup: function() {

      this.group = new THREE.Object3D();
      var pos = gb.in.Line.geometry.vertices;

      for (var i = 0; i < this.num; i++) {

        // dot
        var geometry = new THREE.CircleGeometry( 3, 32 );
        var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var circle = new THREE.Mesh( geometry, material );

        circle.position.x = pos[i].x;
        circle.position.y = pos[i].y;

        this.group.add(circle);

      };

      gb.in.scene.scene.add(this.group);

    },

    update: function() {




    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.Dot = Dot;
  
})();
//--------------------------------------------------
//
//  Line
//
//--------------------------------------------------

(function(){

  

  function Line() {

    this.Line;
    this.geometry = null;
    this.material = null;

    this.num = 720;

    this.setup();

  }

  Line.prototype = {

    setup: function() {

      // cube
      this.geometry = new THREE.Geometry();
      this.material = new THREE.LineBasicMaterial( { linewidth: 0.5, color: 0x000000 } );

      this.setVertex();


      this.Line = gb.in.Line = new THREE.Line( this.geometry, this.material);




      gb.in.scene.add(this.Line);

    },

    setVertex: function() {

      var x,y;
      var w = gb.in.r.W(), h = gb.in.r.H();
      var radius,radiusOut,radiusIn,radian,step

      for (var i = 0; i < this.num; i++) {

        c = 0.65;
        // r = 0.05;

        if (i<this.num/2) r = 0.05;
        else r = 0.03 + 0.01 * Math.random();
        
        radiusOut = Math.min(w, h) * (c + r);
        radiusIn  = Math.min(w, h) * (c - r);

        radius = (i%2 == 0)? radiusOut: radiusIn;
        step = 3 + Math.random() * 5;
        radian = gb.in.u.radian(i + step);
        x = Math.sin(radian) * radius;
        y = Math.cos(radian) * radius;


        this.geometry.vertices.push(new THREE.Vector3(x, y, 0));

      };      

    },

    update: function() {




    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.Line = Line;
  
})();
//--------------------------------------------------
//
//  Shader
//
//--------------------------------------------------

(function(){

  

  function Shader() {

    this.mesh;
    this.geometry = null;
    this.material = null;

    this.shader = null;

    this.setup();
    // this.setupForWebCamara(); //独自shader
    this.setEvents();

  }

  Shader.prototype = {

    setup: function() {

      // this.shader = new gb.Shape(this.create.bind(this));
      // this.shader = new gb.Plasma(this.create.bind(this));
      this.shader = new gb.Color(this.create.bind(this));

    },

    create: function() {

      // this.geometry = new THREE.PlaneBufferGeometry( 2, 2 );
      this.geometry = new THREE.BoxGeometry(10, 10, 10);
      this.material = new THREE.ShaderMaterial( {
                            uniforms: this.shader.uniforms,
                            vertexShader: this.shader.vs,
                            fragmentShader: this.shader.fs
                          });

      this.mesh = new THREE.Mesh( this.geometry, this.material );
      gb.in.scene.scene.add(this.mesh);

    },

    setupForWebCamara: function() {

      var self = this;

      var rtc = new gb.WebRTC();
      rtc.getStream()
        .then(function(){

          gb.in.video = self.video = new gb.Video(rtc.videoSrc);
          gb.in.video.cb = self.createForWebCamara.bind(self);
          self.video.setup();

        })

    },

    createForWebCamara: function() {

      // videoをテクスチャとして使う
      texture = new THREE.VideoTexture(gb.in.video.video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;

      // ie11の場合
      // ctx = canvas.getContext('2d');
      // ctx.fillStyle = '#000000';
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      // // 生成したcanvasをtextureとしてTHREE.Textureオブジェクトを生成
      // texture = new THREE.Texture(canvas);

      this.shader = new gb.WebCamera(this.create.bind(this),texture);

      // videoのサイズ設定
      this.geometry = new THREE.PlaneBufferGeometry( 2, 2 );
      this.material = new THREE.ShaderMaterial( {
                            uniforms: this.shader.uniforms,
                            vertexShader: this.shader.vs,
                            fragmentShader: this.shader.fs
                          });

      this.mesh = new THREE.Mesh( this.geometry, this.material );
      gb.in.scene.scene.add(this.mesh);

      $(window).trigger('videoLoaded');

    },


    update: function() {

      this.shader.uniforms.t.value += 0.01;

    },

    onResize: function() {

      this.shader.setResolution();

    },

    setEvents: function() {

      gb.in.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.Shader = Shader;
  
})();
// ------------------------------------------------------------
//
//  CVGrid
//
// ------------------------------------------------------------

(function(){

  

  function CVGrid(ctx,strokeStyle) {

    this.ctx = ctx;

    this.space = 10;
    this.ROW = 40;
    this.COL = 30;
    this.particleList = [];

    this.pmx = 0; //previous mouse x
    this.pmy = 0; //previous mouse y

    this.cx = gb.in.r.W()/2; //center x
    this.cy = gb.in.r.H()/2; //center y

    this.strokeStyle = strokeStyle;
    this.op = {val:1};

    this.setup();
    this.create();

  }



  CVGrid.prototype = {

    setup: function() {

      this.w = gb.in.r.W();
      this.h = gb.in.r.H();

    },

    create: function() {

      // 縦横に並べる
      for (var i = 0; i < this.ROW; i++) {
        for (var j = 0; j < this.COL; j++) {

          var ofsx = (this.w - this.space * (this.ROW - 1)) / 2; //右辺はwから真ん中のスペース分を引いて、左辺と右辺の余白の計算
          var ofsy = (this.h - this.space * (this.COL - 1)) / 2;

          var p = new gb.Point(
                                this.space * i + ofsx,
                                this.space * j + ofsy
                              );

          this.particleList.push(p);
        }
      }

    },

    update: function() {

      for (var i = 0; i < this.particleList.length; i++) {
        this.particleList[i].updateSpring();
      }

    },

    draw: function() {

      for (var i = 0; i < this.particleList.length; i++) {
        this.particleList[i].drawSpringLine(this.ctx);
      }
      for (var i = 0; i < this.particleList.length; i++) {
        this.particleList[i].drawSpringCircle(this.ctx);
      }

    },

    loop: function () {

      this.update();
      this.draw();
      
    },

  }

  gb.CVGrid = CVGrid;

})();
// ------------------------------------------------------------
//
//  CVLine
//
// ------------------------------------------------------------

(function(){

  

  function CVLine(ctx,strokeStyle) {

    this.ctx = ctx;

    this.len = 20;
    this.vertices = [];

    this.pmx = 0; //previous mouse x
    this.pmy = 0; //previous mouse y

    this.cx = gb.in.r.W()/2; //center x
    this.cy = gb.in.r.H()/2; //center y

    this.strokeStyle = strokeStyle;
    this.op = {val:1};

    this.setup();
    this.create();

  }

  CVLine.prototype = {

    setupVerticesCircle: function() {

      for (var i = 0; i < this.len; i++) {

        var x = this.cx + Math.cos(Math.PI*2/this.len * i) * 100;
        var y = this.cy + Math.sin(Math.PI*2/this.len * i) * 100;

        var point = new gb.Point(x,y);

        this.vertices.push(point);
      };

    },

    setupVerticesRandom: function() {

      for (var i = 0; i < this.len; i++) {

        // ランダム配置
        var point = {x:gb.in.r.W()*Math.random(),y:gb.in.r.H()*Math.random()};
        this.vertices.push(point);

      };

    },

    setup: function () {

      // this.ctx.lineCap = "round"; //round,sqare
      // this.ctx.lineJoin = "round"; //bevel,round,miter

      this.setupVerticesCircle();
      
    },

    create: function () {


    },

    // マウスの位置で描く
    // update: function () {

    //   this.ctx.lineCap = "round"; //round,sqare
    //   this.ctx.lineJoin = "round"; //bevel,round,miter
    //   this.ctx.strokeStyle = 'rgba('+this.strokeStyle+','+this.op.val+')';


    //   this.ctx.lineWidth = 4;
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(this.pmx, this.pmy);
    //   this.ctx.lineTo(gb.in.m.x, gb.in.m.y);

    //   // 2次ベジェ曲線
    //   // this.ctx.quadraticCurveTo(gb.in.m.x-20, gb.in.m.y-20, gb.in.m.x, gb.in.m.y)
    //   // 3次べせ曲線
    //   // this.ctx.bezierCurveTo(gb.in.m.x-200, gb.in.m.y-200, gb.in.m.x+100, gb.in.m.y+100, gb.in.m.x, gb.in.m.y)

    //   // blur
    //   // this.ctx.shadowBlur = 1.5;
    //   // this.ctx.shadowColor = "#fff";
    //   // this.ctx.shadowOffsetX = 0;
    //   // this.ctx.shadowOffsetY = 0;

    //   this.pmx = gb.in.m.x;
    //   this.pmy = gb.in.m.y;

    // },

    // 頂点で描く
    update: function () {

      this.ctx.lineCap = "round"; //round,sqare
      this.ctx.lineJoin = "round"; //bevel,round,miter
      this.ctx.strokeStyle = 'hsla(' + (gb.in.up.cnt/10)%360 + ', ' + 70 + '%, ' + 50 + '%,'+this.op.val+')';

      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.moveTo(this.vertices[0].x, this.vertices[0].y);

      for (var i = 0; i < this.len; i++) {

        var p = this.vertices[i];
        p.update();
        this.ctx.lineTo(p.x, p.y);
        // if (i!==0) this.ctx.quadraticCurveTo(p.x, p.y, this.vertices[i-1].x, this.vertices[i-1].y)
        // this.ctx.bezierCurveTo(gb.in.m.x-200, gb.in.m.y-200, gb.in.m.x+100, gb.in.m.y+100, gb.in.m.x, gb.in.m.y)

      };

      this.ctx.closePath();

    },

    draw: function () {

      this.ctx.stroke();
      
    },

    loop: function (start,goal,delay,ease,dur) {

      this.update();
      this.draw();
      
    },

  }

  gb.CVLine = CVLine;

})();
// ------------------------------------------------------------
//
//  CVParticleSystem
//
// ------------------------------------------------------------

(function(){

  

  function CVParticleSystem(ctx,strokeStyle) {

    this.ctx = ctx;

    this.len = 20;
    this.particleList = [];

    this.pmx = 0; //previous mouse x
    this.pmy = 0; //previous mouse y

    this.cx = gb.in.r.W()/2; //center x
    this.cy = gb.in.r.H()/2; //center y

    this.strokeStyle = strokeStyle;
    this.op = {val:1};

    // this.setup();
    // this.create();

  }

  CVParticleSystem.prototype = {

    add: function() {

      var p = new gb.Point(gb.in.m.x, gb.in.m.y);
      p.setupParticle();

      this.particleList.push(p);

    },

    update: function() {

      var list = [];

      for (var i = 0; i < this.particleList.length; i++) {
        this.particleList[i].updateParticle();

        if (!this.particleList[i].isRemove) {
          list.push(this.particleList[i]);
        }
      }

      this.particleList = list;

    },

    // パーティクルの描画
    draw: function() {

      this.ctx.save();
      this.ctx.globalCompositeOperation = "lighter";

      for (var i = 0; i < this.particleList.length; i++) {
        this.particleList[i].drawParticle(this.ctx);
      }

      this.ctx.restore();

    },

    loop: function () {

      this.add();
      this.update();
      this.draw();
      
    },

  }

  gb.CVParticleSystem = CVParticleSystem;

})();
// ------------------------------------------------------------
//
//  CVText
//
// ------------------------------------------------------------

(function(){

  

  function CVText(ctx,fillStyle) {

    this.ctx = ctx;

    this.fillStyle = fillStyle;
    this.op = {val:1};

    this.setup();
    this.create();

  }

  CVText.prototype = {

    setup: function () {

      this.ctx.font = "10px";
      // this.ctx.font = "18px 'ＭＳ Ｐゴシック'";
        
    },

    create: function () {


    },

    update: function () {

      var x = gb.in.m.x + 20;
      var y = gb.in.m.y - 20;

      this.ctx.fillStyle = 'rgba('+this.fillStyle+','+this.op.val+')';
      this.ctx.fillText('x:'+gb.in.m.x+' y:'+gb.in.m.y, x, y);
      
    },

    draw: function () {

      this.ctx.stroke();
      
    },

    loop: function () {

      this.update();
      this.draw();
      
    },

    clear: function() {


    },

  }

  gb.CVText = CVText;

})();
// ------------------------------------------------------------
//
//  Circle
//
// ------------------------------------------------------------

(function(){

  function Circle(ctx,fillStyle) {

    this.ctx = ctx;

    this.r = 10;
    this.fillStyle = fillStyle;
    this.op = {val:1};

    this.cList = [];
    this.imgList = [];
    this.imgSrcList = [
      '/project-name/assets/resource/img/01.png',
      '/project-name/assets/resource/img/02.png',
      '/project-name/assets/resource/img/03.png',
      '/project-name/assets/resource/img/04.png',
      '/project-name/assets/resource/img/05.png',
      '/project-name/assets/resource/img/06.png',
      '/project-name/assets/resource/img/07.png',
      '/project-name/assets/resource/img/08_color1.png',
      '/project-name/assets/resource/img/08_color2.png',
    ];
    this.total = 40;

    this.H = gb.in.r.H();

    this.setup();
    this.create();

  }

  Circle.prototype = {

    setup: function () {

      // 画像の読み込み
      for (var i = 0; i < this.imgSrcList.length; i++) {

        var img = new Image();
            img.src = this.imgSrcList[i];

        this.imgList.push(img);

      };

      for (var i = 0; i < this.total; i++) {

        var x = this.r * i - this.r/2;
        
        var c = new gb.Point(x, Math.random()*this.H);
        c.vy = 2;
        c.ay = 0.1;
        var num = i%this.imgSrcList.length;
        c.img = this.imgList[num];

        this.cList.push(c);

      };    

      
    },

    create: function () {


    },

    update: function () {

      for(var i = 0; i < this.total; i++){

        // update
        var c = this.cList[i];
        c.vy += c.ay;
        c.y += c.vy; 

        // draw        
        // this.ctx.fillStyle = 'hsla('+ ((i*3)%360) + ', 80%, 50%,'+this.op.val+')';
        // this.ctx.beginPath();
        // this.ctx.arc(c.x, c.y, this.r, 0, Math.PI*2, false);
        // this.ctx.fill();
        // this.ctx.closePath();

        this.ctx.drawImage(c.img, c.x, c.y, 100, 100);
        
        // edge
        if(c.y > this.H){
          c.y = -100 + -Math.random() * this.H/4;
          c.vy = 0;
        }

      }
      
    },

    draw: function () {

    },

    loop: function () {

      this.update();
      this.draw();
      
    },

    clear: function() {


    },

  }

  gb.Circle = Circle;

})();
// ------------------------------------------------------------
//
//  CircleBlack
//
// ------------------------------------------------------------

(function(){

  

  function CircleBlack(mode) {

    if (mode == 'swipeTransitionMenu') {

      this.$wrap = $('.swipeTransitionMenu');
      this.strokeStyle02 = 'rgba(0,0,0,1)';
      this.strokeStyle01 = 'rgba(255,255,255,1)';

    } else {

      this.$wrap = $('.swipeTransitionFirst');

      if (gb.ua.devicePC) {
        this.strokeStyle02 = 'rgba(0,0,0,1)';
        this.strokeStyle01 = 'rgba(255,255,255,1)';        
      } else {
        this.strokeStyle01 = 'rgba(0,0,0,1)';
        this.strokeStyle02 = 'rgba(255,255,255,1)';        
      }

    }

    this.canvasList = [];

    this.points = gb.data;
    this.len = this.points.length;

    this.setTimer = null;

    if (gb.ua.devicePC) {

      this.bg = 172;
      this.bgC = this.bg/2;//bg center
      this.radius = 32/4; // retina
      this.pos = this.bg/4;

    } else {

      this.bg = 172;
      this.bgC = this.bg/2; //bg center
      this.radius = 28/4; // retina
      this.pos = this.bg/4;

    }

    this.setEvents();
    this.ready();

  }

  CircleBlack.prototype = {

    ready: function () {

      for (var i = 0; i < this.len; i++) {

        var c = new gb.CreateCanvasCircleBlack(i,this.strokeStyle01,this.strokeStyle02);

        this.$wrap.find('.canvasArea').append(c.canvas);
        this.canvasList.push(c);

      };

      this.$wrap.find('.canvasArea canvas').not('.line, .glow, .fingerP').addClass('black');

    },

    update: function () {

      
    },

    drawTouched: function (num) {

      this.canvasList[num].drawTouched();
      
    },

    drawTouchEnd: function (num) {

      this.canvasList[num].drawTouchEnd();
      
    },

    onEnd: function() {

      var self = this;

      if (gb.url == 'undefined') {

        for (var i = 0; i < gb.touchedList.length; i++) {

          var num = gb.touchedList[i];
          self.drawTouchEnd(num);

        };

      } else {

        clearTimeout(this.setTimer);
        this.setTimer = setTimeout(function(){
          for (var i = 0; i < gb.touchedList.length; i++) {

            var num = gb.touchedList[i];
            self.drawTouchEnd(num);

          };
        },1000);


      }

    },

    onTouchNew: function() {

      this.drawTouched(gb.curNum);

    },

    setEvents: function () {

      $(window).on('end', this.onEnd.bind(this));
      $(window).on('touchNew', this.onTouchNew.bind(this));

    },

  }

  gb.CircleBlack = CircleBlack;

})();
// ------------------------------------------------------------
//
//  CircleBlackParts
//
// ------------------------------------------------------------

(function(){

  

  function CircleBlackParts(ctx,style01,style02) {

    this.canvas = null;
    this.ctx = ctx;

    this.strokeStyle01 = style01;
    this.strokeStyle02 = style02;

    this.loopTouch = new gb.UpdateMgr();

    this.pi = {val:0,val2:0};
    this.piReset = {val:0};

    if (gb.ua.devicePC) {

      this.bg = 172;
      this.bgC = this.bg/2;//bg center
      this.radius = 32/4; // retina
      this.pos = this.bg/4;

    } else {

      this.bg = 172;
      this.bgC = this.bg/2; //bg center
      this.radius = 28/4; // retina
      this.pos = this.bg/4;

    }

    this.isLock = true;

    this.setup();
    this.create();

  }

  CircleBlackParts.prototype = {

    setup: function () {

      this.loopTouch.addTlSub(this.drawCircleDouble.bind(this));

    },

    create: function () {


    },

    drawFirst: function () {

      this.clear();

      this.ctx.fillStyle = this.strokeStyle01;
      this.ctx.beginPath();
      this.ctx.arc(this.pos, this.pos, this.radius, 0, Math.PI*2, false);

      this.drawFill();
      
    },

    drawTouched: function () {

      this.pi = {val:0,val2:0};
      var tl = new TimelineMax();
      this.isLock = true;

      // loop
      this.loopTouch.resume()

      this.tweenCircle(Math.PI*2);
      
    },

    drawTouchEnd: function () {

      this.isLock = false;
      this.tweenCircle(0,this.drawReset);
      
    },

    drawReset: function () {

      if (this.isLock) return;

      var self = this;
      this.piReset = {val:0};
      var loopReset = new gb.UpdateMgr();
      loopReset.addTlSub(this.drawCircleSingle.bind(this));      

      this.loopTouch.stop();
      loopReset.resume();

      TweenMax.to(this.piReset, 0.4, {
          val: Math.PI*2,
          onComplete: function() {
            loopReset.stop();
          }
        });
      
    },

    tweenCircle: function (val,cb) {

      var self = this;
      var tl = new TimelineMax();

      tl.to(this.pi, 0.3, {
          val: val,
          onComplete: function() {
          }
        })
        .to(this.pi, 0.4, {
          val2: val,
          onComplete: function() {
            if (cb) cb.call(self);
          }
        },'-=0.2');
      
    },

    drawCircleDouble: function () {

      this.clear();

      // circle1
      this.ctx.strokeStyle = this.strokeStyle01;
      this.ctx.lineWidth = this.radius*2;
      this.ctx.beginPath();
      this.ctx.arc(this.pos, this.pos, this.radius, 0, this.pi.val, false);
      this.drawStroke();

      // circle2
      this.ctx.strokeStyle = this.strokeStyle02;
      this.ctx.lineWidth = this.radius*1;
      this.ctx.beginPath();
      this.ctx.arc(this.pos, this.pos, this.radius/2, 0, this.pi.val2, false);
      this.drawStroke();
      
    },

    drawCircleSingle: function () {

      this.clear();

      this.ctx.strokeStyle = this.strokeStyle01;
      this.ctx.lineWidth = this.radius*1;
      this.ctx.beginPath();
      this.ctx.arc(this.pos, this.pos, this.radius/2, 0, this.piReset.val, false);

      this.drawStroke();

    },

    update: function () {

      
    },

    drawFill: function () {

      this.ctx.fill();
          
    },

    drawStroke: function () {

      this.ctx.stroke();
          
    },

    clear : function() {

      this.ctx.clearRect(0,0,this.bgC,this.bgC);

    },

  }

  gb.CircleBlackParts = CircleBlackParts;

})();
// ------------------------------------------------------------
//
//  CircleGray
//
// ------------------------------------------------------------
(function(){

  

  function CircleGray(mode) {

    this.circles = [];
    this.mode = mode;
    if (mode == 'swipeTransitionMenu') gb.cgLoadCntMenu = 0;
    else gb.cgLoadCnt = 0;

    this.points = gb.data;
    this.len = this.points.length;

    this.setTimer = null;

    this.ready();
    this.setEvents();

  }

  CircleGray.prototype = {

    ready: function() {
      
      for (var i = 0; i < this.len; i++) {

        var c = new gb.CircleGrayParts(this.mode,i);
        this.circles.push(c);

      };

    },

    disappear: function(num) {

      this.circles[num].disappear();

    },

    appear: function() {

      for (var i = 0; i < this.len; i++) {

        this.circles[i].appear();

      };

    },

    onEnd: function() {

      var self = this;

      if (gb.url == 'undefined') {

        this.appear();

      } else {

        clearTimeout(this.setTimer);
        this.setTimer = setTimeout(function(){

          self.appear();

        },1000);

      }

    },

    onTouchNew: function () {

      this.disappear(gb.curNum);

    },

    setEvents: function() {

      $(window).on('end', this.onEnd.bind(this));
      $(window).on('touchNew', this.onTouchNew.bind(this));

    },

  }

  gb.CircleGray = CircleGray;

})();
// ------------------------------------------------------------
//
//  CircleGrayParts
//
// ------------------------------------------------------------
(function(){

  

  function CircleGrayParts(mode,cnt) {

    if (mode == 'swipeTransitionMenu') this.$wrap = $('.swipeTransitionMenu');
    else this.$wrap = $('.swipeTransitionFirst');
    if (gb.ua.devicePC) this.src = '/project-name/assets/resource/img/controller/bg_gray_pc.png';
    else this.src = '/project-name/assets/resource/img/controller/bg_gray.png';

    this.$c;

    this.points = gb.data;
    this.len = this.points.length;
    this.cnt = cnt;
    this.mode = mode;
    this.setTimer = null;

    this.ready();

  }

  CircleGrayParts.prototype = {

    ready: function() {

      var self = this;
      
      this.$c = $('<img>');
      this.$c.on('load', function(event) {

        self.layout();

        if (self.mode == 'swipeTransitionMenu') gb.cgLoadCntMenu++;
        else gb.cgLoadCnt++;

        self.onLoadComplete();     

      });
      this.$c.attr({src: this.src});
      this.$c.addClass('gray');
      this.$wrap.find('.canvasArea').append(this.$c);

    },

    layout: function () {

      if (gb.ua.devicePC) {

        var l = this.points[this.cnt].x;
        var t = this.points[this.cnt].y;
        
        this.$c.css({
          position: 'absolute',
          width: 86,
          height: 86,
          left: l,
          top: t,
          'margin-left': -86/2,
          'margin-top': -86/2,
          top: t,
        });

      } else {

        var l = this.points[this.cnt].x;
        var t = this.points[this.cnt].y;
        
        this.$c.css({
          position: 'absolute',
          width: this.$c.width()/2,
          height: this.$c.height()/2,
          left: l,
          top: t,
          'margin-left': -this.$c.width()/4,
          'margin-top': -this.$c.height()/4,
          top: t,
        });

      }

    },

    disappear: function() {

      TweenMax.to(this.$c, 0.5, {
          opacity: 0,
          scale: 1.5
        });

    },

    appear: function() {

      TweenMax.to(this.$c, 0.4, {
          opacity: 1,
          scale: 1
        });

    },

    onLoadComplete: function(num) {

      if (gb.cgLoadCnt == this.len) $(window).trigger('layout');

    },

  }

  gb.CircleGrayParts = CircleGrayParts;

})();
// ------------------------------------------------------------
//
//  CreateCanvasCircleBlack
//
// ------------------------------------------------------------

(function(){

  

  function CreateCanvasCircleBlack(cnt,style01,style02) {

    this.canvas = null;
    this.ctx = null;
    this.cb = null; // circleBlack

    this.cnt = cnt;
    this.points = gb.data;

    this.strokeStyle01 = style01;
    this.strokeStyle02 = style02;

    if (gb.ua.devicePC) {

      this.bg = 172;
      this.bgC = this.bg/2;//bg center
      this.radius = 32/4; // retina
      this.pos = this.bg/4;

    } else {

      this.bg = 172;
      this.bgC = this.bg/2; //bg center
      this.radius = 28/4; // retina
      this.pos = this.bg/4;

    }

    this.ready();
    this.layout();
    this.addObjects();
    this.drawFirst();

  }

  CreateCanvasCircleBlack.prototype = {

    ready: function () {

      this.canvas = document.createElement('canvas'); 
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = this.bgC;
      this.canvas.height = this.bgC;
      
    },

    layout: function () {

      var l = this.points[this.cnt].x;
      var t = this.points[this.cnt].y;
      
      $(this.canvas).css({
        position: 'absolute',
        left: l,
        top: t,
        'margin-left': -this.canvas.width/2,
        'margin-top': -this.canvas.height/2,
      });

    },

    addObjects: function () {

      this.cb = new gb.CircleBlackParts(this.ctx,this.strokeStyle01,this.strokeStyle02);

    },

    drawFirst: function () {

      this.cb.drawFirst();
      
    },

    drawTouched: function () {

      this.cb.drawTouched();

    },

    drawTouchEnd: function () {

      this.cb.drawTouchEnd();
      
    },

    update: function () {

      
    },

  }

  gb.CreateCanvasCircleBlack = CreateCanvasCircleBlack;

})();
// ------------------------------------------------------------
//
//  canvas 全体
//
// ------------------------------------------------------------

(function(){

  

  function DrawLine(mode) {

    this.c = null;
    this.cFirst = null;
    this.cw = 0;
    this.ch = 0;

    this.line = null;
    this.lineFirst = null;
    this.lineList = [];
    this.points = gb.data;

    this.Timer = null;
    this.urgeIntervalTimer = null;
    this.urgeOutTimer = null;

    this.isFirstTouch = true;

    if (mode == 'swipeTransitionMenu') {
      this.$wrap = $('.swipeTransitionMenu');
      this.strokeStyle = '255,255,255';
    } else {
      this.$wrap = $('.swipeTransitionFirst');
      if (gb.ua.devicePC) {
        this.strokeStyle = '255,255,255';  
      } else {
        this.strokeStyle = '0,0,0';    
      }
    }

    this.setup();
    if (gb.ua.devicePC) this.setCanvasSize();
    this.setEvents();

  }

  DrawLine.prototype = {

    setup: function () {

      this.c = new gb.CreateCanvas();
      this.cFirst = new gb.CreateCanvas();

      this.addObjects();
      
      this.$wrap.find('.canvasArea').append(this.c.canvas);
      $(this.c.canvas).addClass('line');

      this.$wrap.find('.canvasArea').append(this.cFirst.canvas);
      $(this.cFirst.canvas).addClass('line lineFirst');

    },

    addObjects: function () { //canvas finger point

      this.line = new gb.Line(this.c.ctx,this.strokeStyle);
      this.c.add(this.line.loop.bind(this.line));

      this.lineFirst = new gb.Line(this.cFirst.ctx,this.strokeStyle);
      this.cFirst.add(this.lineFirst.loop.bind(this.lineFirst));

    },

    setCanvasSize: function () {

      this.cw = this.c.canvas.width = this.cFirst.canvas.width = this.$wrap.find('.touchArea').width();
      this.ch = this.c.canvas.height = this.cFirst.canvas.height = this.$wrap.find('.touchArea').height();

    },

    loop: function () {

      // this.c.loop();

    },

    onStart: function (e) {

      this.c.clear();
      this.lineList = [];
      this.line.pt = {
          start:{
            x: 0,
            y: 0
          },
          val:{
            x: 0,
            y: 0
          },
          goal:{
            x: 0,
            y: 0
          },
      };

    },

    onEnd: function (e) {

      var self = this;

      if (gb.url == 'undefined') {

        // canvasの線だけ透明にする方法が無いから、domを透明に
        this.disappear();

      } else {

        clearTimeout(this.setTimer);
        this.setTimer = setTimeout(function(){

          self.disappear();
          
        },1000);

      }

    },

    disappear: function(dur) {

      var self = this;
      var d = dur || 0.5;

      TweenMax.to($(this.c.canvas), d, {
          opacity: 0,
          onComplete: function() {
            self.c.clear();
            TweenMax.set($(self.c.canvas), {opacity: 1});
          }
        });
    },

    disappearFirst: function(dur,status) {

      var self = this;
      var d = dur || 0.5;

      TweenMax.to($(this.cFirst.canvas), d, {
          opacity: 0,
          ease:Power2.easeOut,
          onComplete: function() {
            self.cFirst.clear();
            TweenMax.set($(self.cFirst.canvas), {opacity: 1});
            if (status=='remove') {
              $(self.cFirst.canvas).remove();
            } else {
              self.urgeDraw();
            }
          }
        });
    },

    onTouch: function (e) {

      // ユーザーがタッチするとループを解除
      if (this.isFirstTouch) {
        this.isFirstTouch = false;
        clearTimeout(this.urgeOutTimer);
        clearInterval(this.urgeIntervalTimer);
        this.disappearFirst(0.01,'remove');
      };

      this.lineList = gb.tArr;

      var l = this.lineList.length;
      if (l<2) return;

      var s = this.lineList[l-2]
      var g = this.lineList[l-1];
      var d = 0;

      this.line.loop(this.points[s],this.points[g],d);

    },

    onDeviceSelect: function (e) {

      var self = this;

      setTimeout(this.urgeDraw.bind(this),1000);

    },

    urgeDraw: function() {

      var self = this;

      // 線を描く
      this.lineFirst.loop(this.points[3],this.points[4],0,Power0.easeNone,0.15);
      this.lineFirst.loop(this.points[4],this.points[5],0.15,Power0.easeNone,0.15);
      this.lineFirst.loop(this.points[5],this.points[1],0.3,Power0.easeNone,0.15);
      this.lineFirst.loop(this.points[1],this.points[4],0.45,Power0.easeNone,0.15);
      this.lineFirst.loop(this.points[4],this.points[7],0.6,Power0.easeNone,0.15);

      // 点滅

      // 消す
      clearTimeout(this.urgeOutTimer);
      this.urgeOutTimer = setTimeout(function(){
        self.disappearFirst();
      },2500);

    },

    setEvents: function () {

      $(window).on('start scrollStart', this.onStart.bind(this));
      $(window).on('touch', this.onTouch.bind(this));
      $(window).on('end', this.onEnd.bind(this));
      $('.device_select .step--num02').on('successPairing', this.onDeviceSelect.bind(this));

    },

  }

  gb.DrawLine = DrawLine;

})();
// ------------------------------------------------------------
//
//  canvas 全体
//
// ------------------------------------------------------------

(function(){

  

  function FingerPos() {

    this.c = null;
    this.cw = 0;
    this.ch = 0;

    this.circle = null;
    
    this.fillStyle = '0,0,0';
    this.$wrap = $('.swipeTransitionFirst');

    this.setup();
    this.setCanvasSize();
    this.setEvents();
    this.timeline();

  }

  FingerPos.prototype = {

    setup: function () { //canvas finger point

      this.c = new gb.CreateCanvas();

      this.addObjects();
      
      this.$wrap.find('.canvasArea').append(this.c.canvas);
      $(this.c.canvas).addClass('fingerP');

      TweenMax.set($(this.c.canvas),{scale:1.17});

    },

    addObjects: function () { //canvas finger point

      this.circle = new gb.Circle(this.c.ctx,this.fillStyle);
      this.c.add(this.circle.loop.bind(this.circle));

    },

    setCanvasSize: function () {

      this.cw = this.c.canvas.width = this.$wrap.find('.touchArea').width();
      this.ch = this.c.canvas.height = this.$wrap.find('.touchArea').height();

    },

    loop: function () {

      this.c.loop();

    },

    timeline: function () {


    },

    onStart: function (e) {

      this.c.clear();
      TweenMax.to(this.circle.op, 0.5, {val: 0.3});

    },

    onEnd: function (e) {

      TweenMax.to(this.circle.op, 0.5, {val: 0});

    },

    setEvents: function () {

      $(window).on('start scrollStart', this.onStart.bind(this));
      $(window).on('end scrollEnd', this.onEnd.bind(this));
      gb.in.SPCLoop.addTlMain(this.loop.bind(this));

    },

  }

  gb.FingerPos = FingerPos;

})();
// ------------------------------------------------------------
//
//  ParticlePurple
//
// ------------------------------------------------------------

(function(){

  

  function ParticlePurple(mode) {

    if (mode == 'swipeTransitionMenu') this.$wrap = $('.swipeTransitionMenu');
    else this.$wrap = $('.swipeTransitionFirst');

    this.cw = null;
    this.ch = null;

    this.num = 9;
    this.pList = [];
    this.bgColor = "rgba(0,0,0,.1)";
    this.pos = {
          x:0,
          y:0,
        };

    this.touchedList = [];
    this.isBgDraw = false; //true 背景描く false描かない

    this.points = gb.data,
    this.len = this.points.length;

    var urlList = {
      '13457': '/pc/',
      '02346': '/pc/project',
      // '012': '/pc/detail',
      '345': '/pc/detail',
      // '678': '/pc/detail',
      '246': '/pc/detail/close',
      '01235678': '/pc/about',
      '03458': '/pc/technology',
      '0124': '/pc/contact',
    }

    this.scTimer = null;
    this.loopTimer = null;
    this.animate = null;

    this.setup();
    if (gb.ua.devicePC) this.setCanvasSize();
    this.setEvents();

  }

  ParticlePurple.prototype = {

    setup: function () {

      this.c = new gb.CreateCanvas();

      this.addObjects();
      
      this.$wrap.find('.canvasArea').append(this.c.canvas);
      $(this.c.canvas).addClass('glow');

    },

    addObjects: function () { 

      for (var i = 0; i < this.num; i++) {

        var x = this.points[i].x,y = this.points[i].y;
        var p = new gb.Spiral(x,y,this.c.ctx,this.cw,this.ch);

        p.setup();
        this.pList.push(p);

      };

    },

    setCanvasSize: function () {

      this.cw = this.c.canvas.width = this.$wrap.find('.touchArea').width();
      this.ch = this.c.canvas.height = this.$wrap.find('.touchArea').height();

    },

    update: function () {

      for (var i = 0; i < this.touchedList.length; i++) {
        var num = this.touchedList[i]
        var p = this.pList[num];
        p.update();
      };

    },

    draw: function () {

      if (!this.isBgDraw) this.c.clear();

      for (var i = 0; i < this.touchedList.length; i++) {
        var num = this.touchedList[i]
        var p = this.pList[num];
        p.draw();
      };

    },

    loop: function () {

      this.update();
      this.draw();

    },

    onStart: function (e) {

      this.isBgDraw = true;
      this.touchedList = [];
      this.c.clear();
      clearTimeout(this.scTimer);

    },

    onMove: function (e) {


    },

    onEnd: function (e) {

      var self = this;

      if (gb.url == 'undefined') {

        // 背景描かない
        this.isBgDraw = false;

      } else {

        clearTimeout(self.scTimer);
        self.scTimer = setTimeout(function(){

          // 背景描かない
          self.isBgDraw = false;

        },1000);

      }

    },

    onTouch: function (e) {

      // ソート
      this.touchedList = gb.in.u.descend(gb.tArr);
      // 重複削除
      this.touchedList = gb.in.u.removeRepeat(this.touchedList);

    },

    onRightMark: function (e) {

      TweenMax.fromTo($('.onRightMark'), 0.8, {
          backgroundColor: 'rgba(255,255,255,0.4)',
        },{
          backgroundColor: 'rgba(255,255,255,0)',
        });            

    },

    setEvents: function () {

      $(window).on('start scrollStart', this.onStart.bind(this));
      $(window).on('move', this.onMove.bind(this));
      $(window).on('touch', this.onTouch.bind(this));
      $(window).on('rightMark', this.onRightMark.bind(this));
      $(window).on('end', this.onEnd.bind(this));
      gb.in.SPCLoop.addTlMain(this.loop.bind(this));

    },

  }

  gb.ParticlePurple = ParticlePurple;

})();
// ------------------------------------------------------------
//
//  Point
//
// ------------------------------------------------------------

(function(){

  function Point(x,y) {

    this.x = x || 0; //previous mouse x
    this.y = y || 0; //previous mouse y
    this.vx = 0; //center x
    this.vy = 0; //center y

    this.defX = x || 0;
    this.defY = y || 0;

    this.px = 0; //previous mouse x
    this.py = 0; //previous mouse y

    this.radius = 0;    // 半径
    this.color = null;  // 色
    this.isRemove = false;// 消去フラグ

    // this.GRAVITY = 0.4;
    this.GRAVITY = 0;
    this.SPRING = 0.08;  // バネ係数
    this.FRICTION = 0.97;  // 摩擦係数
    this.MAX_DIS = 100;  // ボールがマウスに反応する最大距離

    this.top = 0;
    this.right = gb.in.r.W();
    this.bottom = gb.in.r.H();
    this.left = 0;

  }

  Point.prototype = {


    create: function () {


    },

    update: function () {


    },

    draw: function () {

      
      
    },

    loop: function () {

    },


  }

  gb.Point = Point;

})();
//--------------------------------------------------
//
//  Bg
//
//--------------------------------------------------

(function(){

  

  function Bg() {

    this.Bg;
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

  }

  Bg.prototype = {

    setup: function() {

      var self = this;

      var rtc = new gb.WebRTC();
      rtc.getStream()
        .then(function(){

          gb.in.video = self.video = new gb.Video(rtc.videoSrc);
          gb.in.video.cb = self.create.bind(self);
          self.video.setup();

        })

    },

    create: function() {

      // videoをテクスチャとして使う
      texture = new THREE.VideoTexture(gb.in.video.video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;

      // ie11の場合
      // ctx = canvas.getContext('2d');
      // ctx.fillStyle = '#000000';
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      // // 生成したcanvasをtextureとしてTHREE.Textureオブジェクトを生成
      // texture = new THREE.Texture(canvas);

      // videoのサイズ設定
      gb.in.rate = this.rate = gb.in.video.h/gb.in.video.w;
      this.defW = 305;var h = this.defW * this.rate;

      this.geometry = new THREE.PlaneGeometry( this.defW, h, 32 );
      this.material = new THREE.MeshBasicMaterial( {map: texture, transparent: true} );
      // this.material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true} );

      this.plane = new THREE.Mesh( this.geometry, this.material );
      gb.in.scene.scene.add( this.plane );

      // 透明度設定
      this.plane.position.z = -1;
      // this.plane.material.opacity = 0.195;
      this.plane.material.opacity = 1;

      $(window).trigger('videoLoaded');


      this.onResize();
      this.setEvents();

      

    },

    setVideoSize: function() {

      // videoのセットサイズ          
      this.lb = new gb.LayoutBackground($('body'),$(this.video.video));
      this.setEvents();

    },

    setTransparent: function(val) {

      this.plane.material.opacity = val;

    },

    tweenTransparent: function(time,val) {

      var t = time || 1.0;
      var v = val.target || 1.0;
      var e = val.ease || Power2.easeOut;

      TweenMax.to(this.plane.material, t, {
        opacity: v,
        ease : e,
      });

    },

    update: function() {




    },

    onResize: function() {

      var w = window.innerWidth;
      var h = window.innerHeight;

      var rateW = window.innerHeight / window.innerWidth;
      var r = w/h;

      if (rateW < this.rate) {

        this.plane.scale.set(r*0.58,r*0.58,r*0.58)

      } else {

        // log(2,scaleY);

        this.plane.scale.set(1,1,1);

      }

    },

    setEvents: function() {

      if (!gb.in.u.isIe11Under()) {

        gb.in.r.add(this.onResize.bind(this));

      } else {

        gb.in.r.add(this.lb.run.bind(this.lb));

      }
      

    },

  }

  // 公開api
  gb.Bg = Bg;
  
})();
//--------------------------------------------------
//
//  BufferDot
//
//--------------------------------------------------

(function(){

  

  function BufferDot() {

    this.Dot;
    this.geometry = null;
    this.material = null;

    this.particleData = [];

    this.num = 360;

    this.setup();
    this.create();

  }

  BufferDot.prototype = {

    setup: function() {


    },

    create: function() {

      this.group = new THREE.Object3D();
      var pos = gb.in.line.Line01.geometry.attributes.position.array;

      for (var i = 0; i < this.num; i++) {

        // dot        
        var dot = new gb.BufferDotParts();
        dot = dot.dot;

        dot.position.x = pos[i*3+0];
        dot.position.y = pos[i*3+1];
        dot.position.z = 0;

        this.particleData.push({
                          x: pos[i*3+0],y: pos[i*3+1],z:0,
                          scale:0.4+Math.random()*0.5,
                          radian:gb.in.u.radian(Math.random()*360),
                          vZRadian: gb.in.u.radian(89),
                          // vZRadian: gb.in.u.radian(0),
                        });

        this.group.add(dot);

      };

      this.Dot = this.group;
      gb.in.scene.scene.add(this.group);

    },

    setTransparent: function(val) {

      for (var i = 0; i < this.num; i++) {

        this.group.children[i].material.opacity = val;

      };

    },

    setSize: function(val) {

      var pos = gb.in.line.Line01.geometry.attributes.position.array;

      for (var i = 0; i < this.num; i++) {

        this.group.children[i].scale.set(val,val,val);

        this.group.children[i].position.x = pos[i*3+0];
        this.group.children[i].position.y = pos[i*3+1];

      };

    },

    tweenTransparent: function(val) {

      for (var i = 0; i < this.num; i++) {

        TweenMax.to(this.group.children[i].material, 6, {
          opacity: val,
          delay: 0.003 * i,
          ease : Power3.easeOut,
        });

        var p = this.particleData[i];

        TweenMax.to(p, 3, {
          vZRadian: gb.in.u.radian(0),
          delay: 0.002 * i,
          ease : Power2.easeOut,
        });

      };

    },

    tweenTransparent2: function(val,time) {

      for (var i = 0; i < this.num; i++) {

        TweenMax.to(this.group.children[i].material, time, {
          opacity: val,
          ease : Power2.easeOut,
        });

      };

    },

    changeColors: function(r,g,b){

      // colors
      var color = new THREE.Color('rgb('+r+','+g+','+b+')');

      for (var i = 0; i < this.num; i++) {

        this.group.children[i].material.color.r = color.r;
        this.group.children[i].material.color.g = color.g;
        this.group.children[i].material.color.b = color.b;

        // this.group.children[i].material.needsUpdate = true;
      };

    },

    // lineオブジェクト自体の回転
    updateRotate: function() {

      // var rotateX = gb.in.u.radian(gb.in.up.cnt/1);
      // var rotateY = gb.in.u.radian(gb.in.up.cnt/1);
      var rotateZ = gb.in.u.radian(gb.in.up.cnt/25);

      var rotateX = 0;
      var rotateY = 0;
      // var rotateZ = 0;

      this.Dot.rotation.set(rotateX, rotateY, rotateZ);

    },

    // lineオブジェクト自体の回転
    updateScaleWavy: function() {

      var vRadian = gb.in.u.radian(gb.in.up.cnt*1);

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];
        var scale = Math.sin(p.radian + vRadian) * p.scale;

        // scale
        this.Dot.children[i].scale.set(scale * gb.in.param.dot_size,scale * gb.in.param.dot_size,scale * gb.in.param.dot_size);

        // wavy
        this.Dot.children[i].position.x = p.x + (Math.sin(p.radian + vRadian) * 0.7) + (Math.sin(p.radian + vRadian) * 0.7);
        this.Dot.children[i].position.y = p.y + (Math.cos(p.radian + vRadian) * 0.7) + (Math.cos(p.radian + vRadian) * 0.7);
        this.Dot.children[i].position.z = p.z + (Math.tan(p.vZRadian*1) * 100);

      };

    },

    update: function() {


      this.updateRotate();
      this.updateScaleWavy();

    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferDot = BufferDot;
  
})();
//--------------------------------------------------
//
//  BufferDotParts
//
//--------------------------------------------------

(function(){

  

  function BufferDotParts() {

    this.dot;
    this.geometry = null;
    this.material = null;

    this.radius = 1;
    this.segment = 32;

    this.r = 33;
    this.g = 33;
    this.b = 33;

    this.color = new THREE.Color('rgb('+this.r+','+this.g+','+this.b+')');
    this.transparent = true;

    this.setup();
    this.create();

  }

  BufferDotParts.prototype = {

    setup: function() {


    },

    create: function() {

      // dot
      this.geometry = new THREE.CircleGeometry( this.radius, this.segment );
      this.material = new THREE.MeshBasicMaterial({color: this.color,transparent: this.transparent});
      this.dot = new THREE.Mesh( this.geometry, this.material );

    },

    setTransparent: function(val) {


    },

    setSize: function(val) {


    },

    tweenTransparent: function(val) {


    },

    tweenTransparent2: function(val,time) {


    },

    changeColors: function(r,g,b){



    },

    // lineオブジェクト自体の回転
    updateScaleWavy: function() {

      // var vRadian = gb.in.u.radian(gb.in.up.cnt*2);

      // for (var i = 0; i < this.num; i++) {

      //   var p = this.particleData[i];
      //   var scale = Math.sin(p.radian + vRadian) * p.scale;

      //   // scale
      //   this.Dot.children[i].scale.set(scale,scale,scale);

      //   // wavy
      //   this.Dot.children[i].position.x = p.x + (Math.sin(p.radian + vRadian) * 3) + (Math.sin(p.radian + vRadian) * 3);
      //   this.Dot.children[i].position.y = p.y + (Math.cos(p.radian + vRadian) * 3) + (Math.cos(p.radian + vRadian) * 3);
      //   this.Dot.children[i].position.z = p.z + (Math.tan(p.vZRadian*1) * 100);

      // };

    },

    update: function() {


    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferDotParts = BufferDotParts;
  
})();
//--------------------------------------------------
//
//  Line
//
//--------------------------------------------------

(function(){

  

  function BufferLine() {

    this.Line01;
    this.Line02;
    this.Line03;
    this.Line04;
    this.Line05;
    this.geometry = null;
    this.material = null;

    this.positions = [];
    this.colors = [];
    this.num = 720;
    this.cnt = 0;

    this.easing = 0.03;
    this.vRadius = 5;
    this.zoff=0;

    this.timer01=null;
    this.timer02=null;
    this.timer03=null;
    this.timer04=null;
    this.timer05=null;

    this.particleData = [];

    this.setup();
    this.create();

  }

  BufferLine.prototype = {

    setup: function() {


    },

    create: function() {

      this.geometry = new THREE.BufferGeometry();
      this.material01 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material02 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material03 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material04 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });
      this.material05 = new THREE.LineBasicMaterial({
                                vertexColors: THREE.VertexColors,
                                transparent: true,
                                linewidth: 0.01,
                              });

      this.setVertex();

      this.Line01 = new THREE.Line( this.geometry, this.material01);
      this.Line02 = this.Line01.clone();
      this.Line03 = this.Line01.clone();
      this.Line04 = this.Line01.clone();
      this.Line05 = this.Line01.clone();

      this.Line02.material = this.material02
      this.Line03.material = this.material03
      this.Line04.material = this.material04
      this.Line05.material = this.material05

      gb.in.scene.scene.add(this.Line01);
      gb.in.scene.scene.add(this.Line02);
      gb.in.scene.scene.add(this.Line03);
      gb.in.scene.scene.add(this.Line04);
      gb.in.scene.scene.add(this.Line05);

      this.Line01.position.z = -90;
      this.Line02.position.z = -90;
      this.Line03.position.z = -90;
      this.Line04.position.z = -90;
      this.Line05.position.z = -90;

      this.Line01.material.opacity = 0.0;
      this.Line02.material.opacity = 0.0;
      this.Line03.material.opacity = 0.0;
      this.Line04.material.opacity = 0.0;
      this.Line05.material.opacity = 0.0;

    },

    setVertex: function() {

      this.positions = new Float32Array( this.num * 3 );
      this.colors = new Float32Array( this.num * 3 );

      var x,y;
      var w = gb.in.r.W(), h = gb.in.r.H();
      var radius,radiusOut,radiusIn,radian,step

      for (var i = 0; i < this.num; i++) {

        c = 0.65;
        // r = 0.05;

        if (i<this.num/2) r = 0.05;
        else r = 0.03 + 0.01 * Math.random();
        
        // radiusOut = Math.min(w, h) * (c + r);
        // radiusIn  = Math.min(w, h) * (c - r);
        radiusOut = 1000 * (c + r);
        radiusIn  = 1000 * (c - r);

        radius = (i%2 == 0)? radiusOut: radiusIn;
        step = 3 + Math.random() * 5;
        radian = gb.in.u.radian(i + step);
        x = Math.sin(radian) * radius * 0.1 * 1;
        y = Math.cos(radian) * radius * 0.1 * 1;

        this.particleData.push({
                          radian:radian,vradian:step,radius:radius,step:step,
                          x: x,y: y,z: 0,
                          // rad: gb.in.u.random(0,360), rad2: gb.in.u.random(0,360),vRad: gb.in.u.radian(gb.in.u.random(1, 2)),r:3,
                          // rad: gb.in.u.radian(360*i/this.num), rad2: gb.in.u.radian(360*100*i/this.num),vRad: gb.in.u.radian(gb.in.u.random(1, 2)),r:3,
                          rad: gb.in.u.radian(360*360*i/this.num), rad2: gb.in.u.radian(360*i/this.num),vRad: gb.in.u.radian(Math.random()*3),r:3,
                          rotateX: 0,rotateY: 0,rotateZ: 0,
                          noise: (new gb.PerlinNoise(i*1000))
                        });

        // positions
        this.positions[ i * 3 ] = this.particleData[i].x;
        this.positions[ i * 3 + 1 ] = this.particleData[i].y;
        this.positions[ i * 3 + 2 ] = this.particleData[i].z;

        var color = new THREE.Color('rgb('+155+','+155+','+155+')');

        // colors
        this.colors[ i * 3 ] = color.r;
        this.colors[ i * 3 + 1 ] = color.g;
        this.colors[ i * 3 + 2 ] = color.b;

      };

      this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
      this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );

    },

    changeColors: function(r,g,b){

      for (var i = 0; i < this.num; i++) {

        // colors
        var color = new THREE.Color('rgb('+r+','+g+','+b+')');
        this.colors[ i * 3 ] = color.r;
        this.colors[ i * 3 + 1 ] = color.g;
        this.colors[ i * 3 + 2 ] = color.b;

      };

      // log(color.r);

      // this.Line01.geometry.attributes.color.dynamic = true;
      // this.Line02.geometry.attributes.color.dynamic = true;
      // this.Line03.geometry.attributes.color.dynamic = true;
      // this.Line04.geometry.attributes.color.dynamic = true;
      // this.Line05.geometry.attributes.color.dynamic = true;

      this.Line01.geometry.attributes.color.needsUpdate = true;
      this.Line02.geometry.attributes.color.needsUpdate = true;
      this.Line03.geometry.attributes.color.needsUpdate = true;
      this.Line04.geometry.attributes.color.needsUpdate = true;
      this.Line05.geometry.attributes.color.needsUpdate = true;


    },

    changeRadius: function(val){

      var x,y;

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        x = p.x * val;
        y = p.y * val;

        // positions
        this.positions[ i * 3 ] = x;
        this.positions[ i * 3 + 1 ] = y;
        this.positions[ i * 3 + 2 ] = 0;

      };

      this.Line01.geometry.attributes.position.needsUpdate = true;
      this.Line02.geometry.attributes.position.needsUpdate = true;
      this.Line03.geometry.attributes.position.needsUpdate = true;
      this.Line04.geometry.attributes.position.needsUpdate = true;
      this.Line05.geometry.attributes.position.needsUpdate = true;

      // this.Line01.position.z = val-5000;
      // this.Line02.position.z = val-5000;
      // this.Line03.position.z = val-5000;
      // this.Line04.position.z = val-5000;
      // this.Line05.position.z = val-5000;


    },

    changeLineWidth: function(val){

      this.Line01.material.lineWdith = val;
      this.Line02.material.lineWdith = val;
      this.Line03.material.lineWdith = val;
      this.Line04.material.lineWdith = val;
      this.Line05.material.lineWdith = val;

      this.Line01.material.needsUpdate = true;
      this.Line02.material.needsUpdate = true;
      this.Line03.material.needsUpdate = true;
      this.Line04.material.needsUpdate = true;
      this.Line05.material.needsUpdate = true;

      this.Line01.material.name = 'test';

      log(this.Line01);

    },

    // lineオブジェクト自体の回転
    updateRotate: function() {

      // var rotateX = gb.in.u.radian(gb.in.up.cnt/1);
      // var rotateY = gb.in.u.radian(gb.in.up.cnt/1);
      // this.cnt++;
      var rotateZ = gb.in.u.radian(gb.in.up.cnt/25);

      // var rotateX = 0;
      // var rotateY = 0;
      // var rotateZ = 0;

      this.Line01.rotation.z = rotateZ;
      this.Line02.rotation.z = rotateZ;
      this.Line03.rotation.z = rotateZ;
      this.Line04.rotation.z = rotateZ;
      this.Line05.rotation.z = rotateZ;

    },

    // lineオブジェクト自体の回転
    showRotate: function() {

      var self = this;

      var tlMain = new TimelineMax();

      var tl01 = new TimelineMax();
      var tl02 = new TimelineMax();
      var tl03 = new TimelineMax();
      var tl04 = new TimelineMax();
      var tl05 = new TimelineMax();

      var r01 = gb.in.u.random(1,2);
      var r02 = gb.in.u.random(1,2);
      var r03 = gb.in.u.random(1,2);
      var r04 = gb.in.u.random(1,2);
      var r05 = gb.in.u.random(1,2);

      // tl01
      //   .to(this.Line01.rotation, 2 + 6 * Math.random(), {
      //     x: gb.in.u.radian(360*r01),
      //     y: gb.in.u.radian(360*r01),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl02
      //   .to(this.Line02.rotation, 2 + 6 * Math.random(), {
      //     x: gb.in.u.radian(360*r02),
      //     y: gb.in.u.radian(360*r02),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl03
      //   .to(this.Line03.rotation, 2 + 6 * Math.random(), {
      //     x: gb.in.u.radian(360*r03),
      //     y: gb.in.u.radian(360*r03),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl04
      //   .to(this.Line04.rotation, 2 + 6 * Math.random(), {
      //     x: gb.in.u.radian(360*r04),
      //     y: gb.in.u.radian(360*r04),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })
      // tl05
      //   .to(this.Line05.rotation, 2 + 6 * Math.random(), {
      //     x: gb.in.u.radian(360*r05),
      //     y: gb.in.u.radian(360*r05),
      //     z: 0,
      //     repeat: -1,
      //     ease: Power0.easeNone,
      //   })

      tlMain
        // ------------------------------------------------------------
        // fadein
        // ------------------------------------------------------------
        // .to(this.Line01.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line01.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=0.0')
        // .to(this.Line02.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line02.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')
        // .to(this.Line03.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line03.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')
        // .to(this.Line04.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line04.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')
        // .to(this.Line05.position, 3, {
        //   z: -90,
        //   eaes: Power2.easeInOut,
        //   onStart: function(){

        //     TweenMax.to(self.Line05.material, 3, {
        //         opacity: 0.1,
        //         ease:Power2.easeInOut
        //       },'-=0')
            
        //   },
        // },'-=2.7')

        // ------------------------------------------------------------
        // rotate
        // ------------------------------------------------------------
        .to(this.Line01.rotation, 2.0, {
          x: gb.in.u.radian(360*gb.in.u.random(2,2)),
          y: 0,
          z: 0,
          delay: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line01.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   

          }
        })
        .to(this.Line02.rotation, 2.0, {
          x: 0,
          y: gb.in.u.radian(360*gb.in.u.random(2,2)),
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line02.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   
            
          }
        },'-=1.7')
        .to(this.Line03.rotation, 2.0, {
          x: gb.in.u.radian(-360*gb.in.u.random(2,2)),
          y: 0,
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line03.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   
            
          }
        },'-=1.7')
        .to(this.Line04.rotation, 2.0, {
          x: 0,
          y: gb.in.u.radian(-360*gb.in.u.random(2,2)),
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line04.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   
            
          }
        },'-=1.7')
        .to(this.Line05.rotation, 2.0, {
          x: gb.in.u.radian(360*gb.in.u.random(2,2)),
          y: gb.in.u.radian(360*gb.in.u.random(2,2)),
          z: 0,
          ease: Back.easeOut.config(1.2),
          onStart: function(){

            TweenMax.to(self.Line05.material, 0.7, {
                opacity: 0.1,
                ease:Power2.easeInOut
              },'-=0')   

          },
          onComplete: function(){

            gb.in.gl.stateLineRotate = true;
          }
        },'-=1.7')
        .add(function(){
          TweenMax.to(gb.in.line.Line01.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.in.line.Line02.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.in.line.Line03.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.in.line.Line04.position, 1.2, {z: 0,ease: Power4.easeInOut});
          TweenMax.to(gb.in.line.Line05.position, 1.2, {z: 0,ease: Power4.easeInOut,onComplete:function(){}});
        },'-=0.6')

    },

    sometimesRotate: function() {

      var self = this;

      var paramList = [
        {
          x: gb.in.u.radian(360),
          y: 0,
          z: 0,
          ease: Back.easeOut.config(1.4),
        },
        {
          x: 0,
          y: gb.in.u.radian(360),
          z: 0,
          ease: Back.easeOut.config(1.4),
        },
        {
          x: gb.in.u.radian(360),
          y: gb.in.u.radian(360),
          z: 0,
          ease: Back.easeOut.config(1.4),
        },
      ]

      this.timer01 = setTimeout(rotate01,4000 * Math.random());
      this.timer02 = setTimeout(rotate02,4000 * Math.random());
      this.timer03 = setTimeout(rotate03,4000 * Math.random());
      this.timer04 = setTimeout(rotate04,4000 * Math.random());
      this.timer05 = setTimeout(rotate05,4000 * Math.random());

      function rotate01() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.in.line.Line01.rotation, 4, paramList[i])

        self.timer01=setTimeout(rotate01,5000 + 2000 * Math.random());

      }
      function rotate02() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.in.line.Line02.rotation, 4, paramList[i])

        self.timer02=setTimeout(rotate02,5000 + 2000 * Math.random());
      }
      function rotate03() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.in.line.Line03.rotation, 4, paramList[i])

        self.timer03=setTimeout(rotate03,5000 + 2000 * Math.random());
      }
      function rotate04() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.in.line.Line04.rotation, 4, paramList[i])

        self.timer04=setTimeout(rotate04,5000 + 2000 * Math.random());
      }
      function rotate05() {

        var i = Math.floor(Math.random()*3);

        TweenMax.to(gb.in.line.Line05.rotation, 4, paramList[i])

        self.timer05=setTimeout(rotate05,5000 + 2000 * Math.random());
      }

    },

    clearRotate: function() {

      var self = this;

      clearTimeout(this.timer01);
      clearTimeout(this.timer02);
      clearTimeout(this.timer03);
      clearTimeout(this.timer04);
      clearTimeout(this.timer05);

    },

    createCircleCanvas: function() {
        var canvas = document.createElement('canvas');
        var SIZE = 20;
        var HALF = SIZE / 2;
        var CENTER = SIZE / 2;
        canvas.width = SIZE;
        canvas.height = SIZE;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,SIZE,SIZE);
        ctx.lineWidth = 0;
        ctx.beginPath();
        ctx.arc(CENTER, CENTER, HALF, 0, 2 * Math.PI, false);
        var grad = ctx.createRadialGradient(CENTER, CENTER, 0, CENTER, CENTER, HALF);

        var h = Math.floor(191 + Math.random()*90);
        var s = Math.floor(40 + Math.random()*60);
        var b = Math.floor(60 + Math.random()*40);

        grad.addColorStop(0,'hsla('+h+','+s+'%,'+b+'%,1)');
        grad.addColorStop(0.6,'hsla(0,0%,0%,0)');

        // grad.addColorStop(0,'rgba(255,0,0,1)');
        // grad.addColorStop(0.6,'rgba(0,0,0,0)');
        // ctx.fillStyle = 'rgba(255,0,0,1)';
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.closePath();
        // return canvas.toDataURL("image/png");
        return canvas;
    },

    montecarlo: function () {
      
      while (true) {  

        var r1 = Math.random(); 
        var probability = Math.pow(1.0 - r1,8);  
      
        var r2 = Math.random(); 
        if (r2 < probability) { 
          return r1;
        }
      }

    },

    tweenTransparent: function(time,val) {

      var t = time || 1.0;
      var v = (val.target!==undefined)? val.target : 1.0;
      var e = val.ease || Power2.easeOut;

      TweenMax.to(this.Line01.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line02.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line03.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line04.material, t, {
        opacity: v,
        ease : e,
      });
      TweenMax.to(this.Line05.material, t, {
        opacity: v,
        ease : e,
      });

    },

    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferLine = BufferLine;
  
})();
//--------------------------------------------------
//
//  BufferLineParts
//
//--------------------------------------------------

(function(){

  

  function BufferLineParts() {

    this.Line;
    this.geometry = null;
    this.material = null;

    this.points = [
      {x:0,y:0,z:0}, //startPoint
      {x:0,y:0,z:0}, //endPoint
    ]

    this.positions = [];
    this.colors = [];
    this.num = 2;


    this.setup();
    this.create();

  }

  BufferLineParts.prototype = {

    setup: function() {


    },

    create: function() {

    },

    setVertex: function() {



    },

    setEvents: function() {


    },

  }

  // 公開api
  gb.BufferLineParts = BufferLineParts;
  
})();
//--------------------------------------------------
//
//  BufferParticle
//
//--------------------------------------------------

(function(){

  

  function BufferParticle() {

    this.Line;
    this.geometry = null;
    this.material = null;

    this.positions = [];
    this.colors = [];
    this.num = 7000;

    this.easing = 0.03;
    this.vRadius = 5;
    this.zoff=0;

    this.particleData = [];

    this.setup();
    this.create();
    this.setEvents();
    this.onResize();

  }

  BufferParticle.prototype = {

    setup: function() {


    },

    create: function() {

      log(gb.in.param.particle_size);

      // geomety,material準備
      this.geometry = new THREE.BufferGeometry();
      this.material = new THREE.PointsMaterial( {
        vertexColors: THREE.VertexColors,
        size: gb.in.param.particle_size,
        transparent: true,
        // blending: THREE.AdditiveBlending,
        sizeAttenuation: false,
      } );

      // gemetryの頂点セット
      this.setVertex();

      // オブジェクト生成
      this.Particle = gb.in.Particle = new THREE.Points( this.geometry, this.material);
      this.Particle.position.z = 0;
      this.Particle.material.opacity = 1;
      // オブエジェクトシーンに追加

    },

    setVertex: function() {

      this.positions = new Float32Array( this.num * 3 );
      this.colors = new Float32Array( this.num * 3 );

      var x,y;
      var w = gb.in.r.W(), h = gb.in.r.H();
      var radius=0,radiusOut=0,radiusIn=0,radian=0,step=0

      for (var i = 0; i < this.num; i++) {

        var param = {
          x: gb.in.u.range(40)*0.5*Math.random(),y: gb.in.u.range(40)*0.5*Math.random(),z: 0,
          radian:gb.in.u.radian(Math.random()*360),vradian:step,radius:radius,
          rad: gb.in.u.radian(360*360*i/this.num), rad2: gb.in.u.radian(360*i/this.num),vRad: gb.in.u.radian(1.0 + Math.random()*0.5),r: 35,
          rotateX: 0,rotateY: 0,rotateZ: 0,
          noise: (new gb.PerlinNoise(i*1000)),
          stepX:0, stepY: 0,
        }

        var p = new gb.BufferParticleParts(param);
        this.particleData.push(p);

        // positions
        this.positions[ i * 3 ] = this.particleData[i].x;
        this.positions[ i * 3 + 1 ] = this.particleData[i].y;
        this.positions[ i * 3 + 2 ] = this.particleData[i].z;


        // colors
        var h = Math.floor(191 + Math.random()*gb.in.param.particle_h);
        var s = Math.floor(40 + Math.random()*gb.in.param.particle_s);
        var b = Math.floor(70 + Math.random()*gb.in.param.particle_b);

        var color = new THREE.Color('hsl('+h+','+s+'%,'+b+'%)');
        this.colors[ i * 3 ] = color.r;
        this.colors[ i * 3 + 1 ] = color.g;
        this.colors[ i * 3 + 2 ] = color.b;

      };

      this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
      this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );

    },

    // 回転の速度と、半径のupdate
    setupUpdateCircle: function() {

      var x,y;
      var w = gb.in.r.W(), h = gb.in.r.H();
      var radius=0,radiusOut=0,radiusIn=0,radian=0,step=0;

      for (var i = 0; i < this.num; i++) {

        c = 0.65;
        if (i<this.num/2) r = 0.05;
        else r = 0.03 + 0.01 * Math.random();
        
        radiusOut = Math.min(w, h) * (c + r);
        radiusIn  = Math.min(w, h) * (c - r);

        radius = (i%2 == 0)? radiusOut: radiusIn;
        step = 3 + Math.random() * 5;
        radian = gb.in.u.radian(i + step);
        x = Math.sin(radian) * radius;
        y = Math.cos(radian) * radius;

        this.particleData[i].x = x;
        this.particleData[i].y = y;
        this.particleData[i].radian = radian;
        this.particleData[i].vradian = step;
        this.particleData[i].radius = radius;

      };

    },

    // 回転の速度と、半径のupdate
    updateCircle: function() {

      // this.updateRadius();

      var sin = gb.in.u.sin(100);

      for (var i = 0; i < this.num; i++) {

        // 回転の速度
        // var radian = this.particleData[i].radian;
        var radian = this.particleData[i].radian += this.particleData[i].vradian*0.002;
        // 半径

        // var radius = this.particleData[i].radius += this.particleData[i].vradian*this.vRadius;
        var radius = this.particleData[i].radius = this.particleData[i].vradian * sin;
        radius *= 6;
        // var radius = this.particleData[i].radius;

        this.positions[i*3+0] = Math.sin(radian) * radius;
        this.positions[i*3+1] = Math.cos(radian) * radius;

      };

      this.geometry.attributes.position.needsUpdate = true;

    },

    // 速度ランダムで円形上に回転
    updateCircleSize: function() {

      var size= (gb.in.noise.getPerlin()+1)*10;
      this.Particle.material.size = size;


      this.geometry.attributes.position.needsUpdate = true;
    },

    // 球体状を回転 random
    updateSphere: function() {

      var vRadian = gb.in.u.radian(gb.in.up.cnt*2.6);

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        p.sphere(vRadian);

        this.positions[i*3+0] = p.x;
        this.positions[i*3+1] = p.y;
        this.positions[i*3+2] = p.z;

        // log(i,p.x);

      };

      this.geometry.attributes.position.needsUpdate = true;

    },

    // ランダムウォーク
    updateRandomWalk: function() {

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        var stepx = gb.in.u.range(1);
        var stepy = gb.in.u.range(1);
        
        // var stepsize = this.montecarlo()*10;
        var stepsize = this.montecarlo()*Math.random();
        stepx *= stepsize;
        stepy *= stepsize;

        p.x += stepx;
        p.y += stepy;
        p.z = 0;

        this.positions[i*3+0] = p.x;
        this.positions[i*3+1] = p.y;
        this.positions[i*3+2] = p.z;

      };

      this.geometry.attributes.position.needsUpdate = true;

    },

    // 衛星
    setupSatellite: function() {

      this.satellitePos = gb.in.line.Line01.geometry.attributes.position.array;
      this.satelliteNum = Math.ceil(this.num / this.satellitePos.length);

    },

    // 衛星
    updateSatellite: function() {

      var vRadian = gb.in.u.radian(gb.in.up.cnt*2.6);

      for (var i = 0; i < this.satelliteNum; i++) {

        for (var j = 0; j < this.satellitePos.length; j++) {

          var nth = i*this.satellitePos.length+j;
          if (nth>this.num-1) continue;

          var p = this.particleData[nth];
          var gx = this.satellitePos[j*3+0];
          var gy = this.satellitePos[j*3+1];
          var gz = 0;
          var wavy = p.wavy(gx,gy,gz,vRadian);

          this.positions[nth*3+0] = p.x + wavy.x;
          this.positions[nth*3+1] = p.y + wavy.y;
          this.positions[nth*3+2] = p.z + wavy.z;

        };
        
      };

      this.geometry.attributes.position.needsUpdate = true;

    },

    // 半径の大きさを変える
    updateRadius: function() {

      if (this.vRadius < 1.01) {

        this.vRadiusTarget = 5;

      }

      if (this.vRadius > 4.99) {

        this.vRadiusTarget = 0;
        

      }

      this.vRadius += (this.vRadiusTarget - this.vRadius) * this.easing;

      // var step = gb.in.u.map(gb.in.noise.getPerlin(),-1,1,-2,2);

      this.geometry.attributes.position.needsUpdate = true;

    },

    // オブジェクト自体の回転
    updateRotate: function() {

      var rotateX = gb.in.u.radian(gb.in.up.cnt/1);
      // var rotateY = gb.in.u.radian(gb.in.up.cnt/1);
      // var rotateZ = gb.in.u.radian(gb.in.up.cnt/1);
      var rotateY = 0;
      var rotateZ = 0;

      this.Particle.rotation.set(rotateX, rotateY, rotateZ);

      this.geometry.attributes.position.needsUpdate = true;

    },

    setupUpdateLineShadow: function() {

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        p.x = gb.in.u.range(40)*0.5*Math.random();
        p.y = gb.in.u.range(40)*0.5*Math.random();
        p.z = 0;

        this.positions[i*3+0] = p.x;
        this.positions[i*3+1] = p.y;
        this.positions[i*3+2] = p.z;

      }

    },

    resetUpdateLineShadow: function(i) {

      var p = this.particleData[i];

      p.x = gb.in.u.range(100)*Math.random();
      p.y = gb.in.u.range(70)*Math.random();
      p.z = 0;

      this.positions[i*3+0] = p.x;
      this.positions[i*3+1] = p.y;
      this.positions[i*3+2] = p.z;

    },

    // ぐにゃぐにゃ
    updateLineShadow: function() {

      var vRadian = gb.in.u.radian(gb.in.up.cnt*2);
      
      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];

        p.softThread(vRadian,this.zoff);
        if (p.boundary()) this.resetUpdateLineShadow(i);

        // if (i < this.num/4) {

        //   this.positions[i*3+0] = p.x;
        //   this.positions[i*3+1] = -70;
        //   this.positions[i*3+2] = p.z;

        // };
 
        // if (i > this.num/4 && i < this.num/4*2 ) {

        //   this.positions[i*3+0] = p.defRight * gb.in.camera.valForParticle;
        //   this.positions[i*3+1] = p.y;
        //   this.positions[i*3+2] = p.z;

        // };
 
        // if (i > this.num/4*2 && i < this.num/4*3 ) {

        //   this.positions[i*3+0] = p.x;
        //   this.positions[i*3+1] = 70;
        //   this.positions[i*3+2] = p.z;

        // };
 
        // if (i > this.num/4*3 && i < this.num ) {

        //   this.positions[i*3+0] = p.defLeft * gb.in.camera.valForParticle;
        //   this.positions[i*3+1] = p.y;
        //   this.positions[i*3+2] = p.z;

        // };


        this.positions[i*3+0] = p.x;
        this.positions[i*3+1] = p.y;
        this.positions[i*3+2] = p.z;

      }

      this.zoff += 0.002;

      this.geometry.attributes.position.needsUpdate = true;

    },

    montecarlo: function () {
      
      while (true) {  

        var r1 = Math.random(); 
        var probability = Math.pow(1.0 - r1,8);  
      
        var r2 = Math.random(); 
        if (r2 < probability) { 
          return r1;
        }
      }

    },

    toScreenPosition: function (obj) {
        var vector = new THREE.Vector3();

        var widthHalf = 0.5*gb.in.gl.renderer.context.canvas.width;
        var heightHalf = 0.5*gb.in.gl.renderer.context.canvas.height;

        obj.updateMatrixWorld();
        vector.setFromMatrixPosition(obj.matrixWorld);
        vector.project(gb.in.camera.camera);

        vector.x = ( vector.x * widthHalf ) + widthHalf;
        vector.y = - ( vector.y * heightHalf ) + heightHalf;

        return { 
            x: vector.x,
            y: vector.y
        };

    },

    tweenTransparent: function(time,val) {

      var t = time || 1.0;
      var v = (val.target!==undefined)? val.target : 1.0;
      var e = val.ease || Power2.easeOut;

      TweenMax.to(this.Particle.material, t, {
        opacity: v,
        ease : e,
      });

    },

    update: function() {


      // this.updateCircleSize();
      // this.updateSphere();
      // this.updateSphere02();
      // this.updateRandomWalk();
      // this.updateRotate();
      


    },

    onResize: function() {

      for (var i = 0; i < this.num; i++) {

        var p = this.particleData[i];
        p.right = p.defRight * gb.in.camera.valForParticle;
        p.left = p.defLeft * gb.in.camera.valForParticle;

      }

    },

    setEvents: function() {

      gb.in.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.BufferParticle = BufferParticle;
  
})();
//--------------------------------------------------
//
//  BufferParticleParts
//
//--------------------------------------------------

(function(){

  

  function BufferParticleParts(param) {

    this.x = param.x || 0;
    this.y = param.y || 0;
    this.z = param.z || 0;

    this.defx = gb.in.u.range(100)*Math.random();
    this.defy = gb.in.u.range(70)*Math.random();
    this.defz = 0;

    this.vx = 0;
    this.vy = 0;
    this.vz = 0;

    // circle用
    this.radian = param.radian || 0;
    this.vradian = param.vradian || 0;
    this.radius = param.radius || 0

    // sphere用
    this.rad = param.rad || 0;
    this.rad2 = param.rad2 || 0;
    this.vRad = param.vRad || 0;
    this.r = param.r || 0;

    this.minDis = 3;

    this.rotateX = param.rotateX || 0;
    this.rotateY = param.rotateY || 0;
    this.rotateZ = param.rotateZ || 0;

    this.noise = param.noise || 0;
    this.stepX = param.stepX || 0;
    this.stepY = param.stepY || 0;

    this.step = 5 + Math.random() * 8;

    this.top = -70;
    this.right = 130;
    this.bottom = 70;
    this.left = -130;

    this.defRight = 130;
    this.defLeft = -130;

    this.isEasingStop = false;

  }

  BufferParticleParts.prototype = {

    wavy: function(gx,gy,gz,vRadian) {

      var step = this.noise.getPerlin() * 4;

      var obj = {
        x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
        y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
        z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
      }

      this.x += (gx - this.x) * 0.08;
      this.y += (gy - this.y) * 0.08;
      this.z += (gz - this.z) * 0.08;

      return obj;

    },

    softThread: function(vRadian,zoff) {

      var angle = Math.PI * 6 * this.noise.getPerlinCustom(Math.abs(this.x / 1300), Math.abs(this.y / 1300),zoff);
      this.vx = Math.cos(angle) * this.step * 0.1;
      this.vy = Math.sin(angle) * this.step * 0.1;
      this.vz = (Math.cos(this.radian + vRadian) * 3) + (Math.cos(this.radian + vRadian) * 3);
      
      // if (!this.isEasingStop) {
      //   this.x += (this.defx - this.x) * 0.08;
      //   this.y += (this.defy - this.y) * 0.08;
      //   this.z += (this.defz - this.z) * 0.08;
      //   if ((Math.abs(this.defx - this.x) < 0.01) && (Math.abs(this.defy - this.y) < 0.01) && (Math.abs(this.defz - this.z) < 0.01)) {
      //     this.isEasingStop=true;
      //   };
      // }

      this.x += this.vx;
      this.y += this.vy;

      // wavy
      var step = this.noise.getPerlin() * 0.1;
      var wavy = {
        x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
        y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
        z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
      }
      
      this.x += wavy.x;
      this.y += wavy.y;

    },

    repulse: function() {

      // var dis = gb.in.u.dist()
      // if (this.minDis) {};

    },

    boundary: function() {

      if (this.x > this.right || this.x < this.left || this.y > this.bottom || this.y < this.top) {
        return true;
      }

      return false;

    },

    sphere: function(vRadian) {

      // spehre
      this.rad += this.vRad;
      this.rad2 += this.vRad;

      // this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * this.r;
      // this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * this.r;
      // this.gz = Math.sin(this.rad) * this.r;
      this.gx = Math.cos(this.rad) * Math.cos(this.rad2) * gb.in.param.particle_radius;
      this.gy = Math.cos(this.rad) * Math.sin(this.rad2) * gb.in.param.particle_radius;
      this.gz = Math.sin(this.rad) * gb.in.param.particle_radius;

      // wavy
      var step = this.noise.getPerlin() * 0.3;
      var wavy = {
        x: (Math.sin(this.radian + vRadian) * step) + (Math.sin(this.radian + vRadian) * step),
        y: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
        z: (Math.cos(this.radian + vRadian) * step) + (Math.cos(this.radian + vRadian) * step),
      }

      this.x += (this.gx - this.x) * 0.08 + wavy.x;
      this.y += (this.gy - this.y) * 0.08 + wavy.y;
      this.z += (this.gz - this.z) * 0.08 + wavy.z;

    },

  }

  // 公開api
  gb.BufferParticleParts = BufferParticleParts;
  
})();
//--------------------------------------------------
//
//  Cube
//
//-------------------------------

(function(){

  

  function Camera() {

    this.camera;

    this.fov    = 80;
    this.aspect = gb.in.r.W() / gb.in.r.H();
    this.near   = 1;
    this.far    = 10000;

    this.defAspect = 1080/1920;
    this.winAspect = gb.in.r.H()/gb.in.r.W();
    this.val = this.winAspect / this.defAspect;
    this.valForParticle = this.defAspect / this.winAspect;

    this.setup();
    this.create();
    // this.createForShader();
    // this.createOrthographic();
    this.setEvents();
    this.onResize();

  }

  Camera.prototype = {

    setup: function() {


    },

    create: function() {

      this.camera = new THREE.PerspectiveCamera( this.fov, this.aspect, this.near, this.far );
      this.camera.position.z = 800;
      // this.camera.position.y = 400;

    },

    createForShader: function() {

      this.camera = new THREE.Camera();
      this.camera.position.z = 1;

    },

    createOrthographic: function() {

      var w = gb.in.renderer.domElement.width;
      var h = gb.in.renderer.domElement.height;

      this.camera = new THREE.OrthographicCamera( w/-2, w/2, h/2, h/-2, 1, 1000 );
      this.camera.position.z = 1;

    },

    updateControll: function() {

      // this.camera.position.x += ( - gb.in.m.cx * 0.01 * this.val - this.camera.position.x ) * 0.08;
      // this.camera.position.y += ( - gb.in.m.cy * 0.01 * this.val - this.camera.position.y ) * 0.08;
      this.camera.lookAt( gb.in.scene.scene.position );

    },

    // オブジェクト
    tweenPos: function(time,target) {

      var tX = target.x || 0;
      var tY = target.y || 0;
      var tZ = target.z || 0;
      var delay = target.delay || 0;
      var e = target.ease || Power2.easeOut;

      var t = time || 1.0;

      TweenMax.to(this.camera.position, t, {
        x: tX,
        y: tY,
        z: tZ,
        delay: delay,
        ease: e,
      });

    },

    update: function() {


    },

    onResize: function() {

      this.winAspect = gb.in.r.H()/gb.in.r.W();
      this.val = (this.winAspect / this.defAspect) * 0.4;
      this.valForParticle = (this.defAspect / this.winAspect) * 1;

    },

    setEvents: function() {

      gb.in.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.Camera = Camera;
  
})();
//--------------------------------------------------
//
//  Cube
//
//--------------------------------------------------

(function(){

  

  // function Cube() {

  //   this.cube;
  //   this.material = null;

  //   this.setup();

  // }

  // Cube.prototype = {

  //   setup: function() {

  //     // ------------------------------------------------------------
  //     //  shader
  //     // ------------------------------------------------------------
  //     // this.shader = new gb.Plasma(this.create.bind(this));
  //     // this.shader = new gb.Clock(this.create.bind(this));
  //     // this.shader = new gb.Color(this.create.bind(this));

  //     // this.create();

  //     var shaderLoadList = [
  //                        gb.Clock,
  //                        gb.Color,
  //                        gb.Plasma,
  //                        gb.Sepia
  //                      ]
  //     var shaders = [];

  //     var shaderSerialLoad = (len, cb)=>{

  //         var shader,cnt=0;

  //         var load = (i)=>{
  //           shader = new shaderLoadList[i](comp);
  //           shaders.push(shader);
  //         };

  //         var comp = function(){
  //           cnt++;
  //           if(cnt == len) cb(shaders);
  //           else load(cnt);
  //         };

  //         load(cnt);

  //     }

  //     shaderSerialLoad(shaderLoadList.length,(shaders)=>{

  //       this.shader = shaders[3];

  //       log(shaders);
  //       this.create();

  //     })

  //   },

  //   create: function() {

  //     // ------------------------------------------------------------
  //     //  cube
  //     // ------------------------------------------------------------
  //     var geometry = new THREE.CubeGeometry(300, 300, 300);
  //     for (var i=0,len=geometry.faces.length; i<len; i++) {
  //         geometry.faces[i].color.setHSL(0,0.5,0.5);
  //     }
  //     // this.material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors } );

  //     this.material = new THREE.ShaderMaterial( {
  //                           uniforms: this.shader.uniforms,
  //                           vertexShader: this.shader.vs,
  //                           fragmentShader: this.shader.fs
  //                         });


  //     this.cube = new THREE.Mesh( geometry, this.material);

  //     this.cube.rotation.z = Math.PI / 8;

  //     gb.in.scene.scene.add(this.cube);

  //     log(this.cube);

  //     // axis
  //     // var axis = new THREE.AxisHelper(1000);
  //     // axis.position.set(0,0,0);


  //     // gb.in.scene.add(axis);

  //   },

  //   update: function() {

  //     // size

  //     // color
  //     // this.material.color.setRGB(gb.in.param.h,gb.in.param.s,gb.in.param.l);

  //   },


  //   setEvents: function() {


  //   },

  // }

  // // 公開api
  // gb.Cube = Cube;
  
})();
//--------------------------------------------------
//
//  Dot
//
//--------------------------------------------------

(function(){

  

  function Dot() {

    this.Dot;
    this.geometry = null;
    this.material = null;

    this.num = 720;

    this.setup();

  }

  Dot.prototype = {

    setup: function() {

      this.group = new THREE.Object3D();
      var pos = gb.in.Line.geometry.vertices;

      for (var i = 0; i < this.num; i++) {

        // dot
        var geometry = new THREE.CircleGeometry( 3, 32 );
        var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        var circle = new THREE.Mesh( geometry, material );

        circle.position.x = pos[i].x;
        circle.position.y = pos[i].y;

        this.group.add(circle);

      };

      gb.in.scene.scene.add(this.group);

    },

    update: function() {




    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.Dot = Dot;
  
})();
//--------------------------------------------------
//
//  Line
//
//--------------------------------------------------

(function(){

  

  function Line() {

    this.Line;
    this.geometry = null;
    this.material = null;

    this.num = 720;

    this.setup();

  }

  Line.prototype = {

    setup: function() {

      // cube
      this.geometry = new THREE.Geometry();
      this.material = new THREE.LineBasicMaterial( { linewidth: 0.5, color: 0x000000 } );

      this.setVertex();


      this.Line = gb.in.Line = new THREE.Line( this.geometry, this.material);




      gb.in.scene.add(this.Line);

    },

    setVertex: function() {

      var x,y;
      var w = gb.in.r.W(), h = gb.in.r.H();
      var radius,radiusOut,radiusIn,radian,step

      for (var i = 0; i < this.num; i++) {

        c = 0.65;
        // r = 0.05;

        if (i<this.num/2) r = 0.05;
        else r = 0.03 + 0.01 * Math.random();
        
        radiusOut = Math.min(w, h) * (c + r);
        radiusIn  = Math.min(w, h) * (c - r);

        radius = (i%2 == 0)? radiusOut: radiusIn;
        step = 3 + Math.random() * 5;
        radian = gb.in.u.radian(i + step);
        x = Math.sin(radian) * radius;
        y = Math.cos(radian) * radius;


        this.geometry.vertices.push(new THREE.Vector3(x, y, 0));

      };      

    },

    update: function() {




    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.Line = Line;
  
})();
//--------------------------------------------------
//
//  Cube
//
//--------------------------------------------------

(function(){

  

  function Scene() {

    this.scene;

    this.setup();
    this.create();

  }

  Scene.prototype = {

    setup: function() {


    },

    create: function() {

      this.scene = new THREE.Scene();

    },

    updateRotate: function() {

      var rotateX = gb.in.u.radian(gb.in.up.cnt/1);
      var rotateY = gb.in.u.radian(gb.in.up.cnt/1);
      var rotateZ = gb.in.u.radian(gb.in.up.cnt/1);
      // var rotateY = 0;
      // var rotateZ = 0;

      this.scene.rotation.set(rotateX, rotateY, rotateZ);

    },

    // オブジェクト
    tweenPos: function(time,target) {


    },

    update: function() {


    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.Scene = Scene;
  
})();
//--------------------------------------------------
//
//  Shader
//
//--------------------------------------------------

(function(){

  

  function Shader() {

    this.mesh;
    this.geometry = null;
    this.material = null;

    this.shader = null;

    this.setup();
    // this.setupForWebCamara(); //独自shader
    this.setEvents();

  }

  Shader.prototype = {

    setup: function() {

      // this.shader = new gb.Shape(this.create.bind(this));
      // this.shader = new gb.Plasma(this.create.bind(this));
      this.shader = new gb.Color(this.create.bind(this));

    },

    create: function() {

      // this.geometry = new THREE.PlaneBufferGeometry( 2, 2 );
      this.geometry = new THREE.BoxGeometry(10, 10, 10);
      this.material = new THREE.ShaderMaterial( {
                            uniforms: this.shader.uniforms,
                            vertexShader: this.shader.vs,
                            fragmentShader: this.shader.fs
                          });

      this.mesh = new THREE.Mesh( this.geometry, this.material );
      gb.in.scene.scene.add(this.mesh);

    },

    setupForWebCamara: function() {

      var self = this;

      var rtc = new gb.WebRTC();
      rtc.getStream()
        .then(function(){

          gb.in.video = self.video = new gb.Video(rtc.videoSrc);
          gb.in.video.cb = self.createForWebCamara.bind(self);
          self.video.setup();

        })

    },

    createForWebCamara: function() {

      // videoをテクスチャとして使う
      texture = new THREE.VideoTexture(gb.in.video.video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;

      // ie11の場合
      // ctx = canvas.getContext('2d');
      // ctx.fillStyle = '#000000';
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      // // 生成したcanvasをtextureとしてTHREE.Textureオブジェクトを生成
      // texture = new THREE.Texture(canvas);

      this.shader = new gb.WebCamera(this.create.bind(this),texture);

      // videoのサイズ設定
      this.geometry = new THREE.PlaneBufferGeometry( 2, 2 );
      this.material = new THREE.ShaderMaterial( {
                            uniforms: this.shader.uniforms,
                            vertexShader: this.shader.vs,
                            fragmentShader: this.shader.fs
                          });

      this.mesh = new THREE.Mesh( this.geometry, this.material );
      gb.in.scene.scene.add(this.mesh);

      $(window).trigger('videoLoaded');

    },


    update: function() {

      this.shader.uniforms.t.value += 0.01;

    },

    onResize: function() {

      this.shader.setResolution();

    },

    setEvents: function() {

      gb.in.r.add(this.onResize.bind(this));

    },

  }

  // 公開api
  gb.Shader = Shader;
  
})();
//--------------------------------------------------
//
//  Transition
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function TransitionDetailProject(){

    this.isLock = false;
    this.next = false;
    this.isDetail = false;
    this.setEvents();

  }

  TransitionDetailProject.prototype = {

    ready: function () {

    },

    getDetail: function(src,next) {

      var self = this;

      $.get(src, function(data){self.onGetDetail.call(self,data,next);});

    },

    switchPageText: function(page,next) {

      if (!next) {

        // page変更
        TweenMax.to($('#header .page'), 0.7, {
            x: -20,
            opacity: 0,
            delay: 0.2,
            ease: Power3.easeOut,
            onComplete: function() {
              var t = page;
              $('#header .page').text(t.toUpperCase());

              TweenMax.to($('#header .page'), 0.7, {
                  x: 0,
                  opacity: 1,
                  ease: Power3.easeOut,
                });
            }
          });

      };

    },

    onGetDetail: function(data,next) {

      var self = this;
      // ------------------------------------------------------------
      //  ready
      // ------------------------------------------------------------
      if (!next) {
        $('.detail')
          .addClass('nextDetail')
          .css('z-index', '2')
          .append(data);
      }else{
        $('.nextDetail')
          .addClass('curDetail')
          .removeClass('nextDetail');
        var d = $('.curDetail').clone();
        d.addClass('nextDetail')
         .removeClass('curDetail')
         .css('z-index', '2')
         .scrollTop(0)
         .html('')
         .append(data)
        $('body').append(d);

      }

      // 現在のコンテンツ
      TweenMax.set($('.nextDetail').find('.content'), {x: $(window).width()});

      // ------------------------------------------------------------
      //  layout
      // ------------------------------------------------------------
      // size
      gb.setImgSPSize($('.nextDetail img'));
      // layout
      var p = new gb.PosCenter();
      $(window).on('resize', function(){p.onResize();});
      p.run();

      // ------------------------------------------------------------
      //  motion
      // ------------------------------------------------------------      
      if (!next) {

        var tl = new TimelineMax();

        tl.to($('#contents'), 0.6, {
            x: -$(window).width(),
            ease: Power3.easeInOut,
            delay: 0.2,
          })
          .to($('.nextDetail').find('.content'), 0.8, {
            x: 0,
            ease: Power3.easeInOut,
          },'-=0.8')
          .fromTo($('.ui__menu_btnC'), 0.5, {
            'display':'block',
            opacity: 0,
          },{
            opacity: 1,
            ease: Power3.easeInOut,
            onComplete: function(){
              self.isLock = false;
            }
          });

      } else {

        var tl = new TimelineMax();

        tl.to($('.curDetail'), 0.6, {
            x: -$(window).width(),
            ease: Power3.easeInOut,
            delay: 0.2,
          })
          .to($('.nextDetail').find('.content'), 0.8, {
            x: 0,
            ease: Power3.easeInOut,
            onComplete: function() {
              $('.curDetail').remove();
              self.isLock = false;
            }
          },'-=0.8');
      }


      // ------------------------------------------------------------
      // event再設定
      // ------------------------------------------------------------
      $('.nextDetail .detailLink').on('click.detail', function(e){self.onTouch.call(self,e,true);return false;});
      $('.ui__menu_btnC').on('click.detailClose', function(e){self.onTouchClose.call(self,e);return false;});

    },
    
    onTouch: function(e,next) {

      if (this.isLock) return;
      this.isLock = true;
      this.isDetail = true;

      gb.in.sc.isLock = true;

      this.switchPageText('detail',next);

      // detailの取得
      var src = $(e.currentTarget).data('url');
      this.getDetail(src,next);

    },
    
    onTouchClose: function(e) {

      if (this.isLock) return;
      this.isLock = true;
      var self = this;

      this.switchPageText('project',false);

      // detail内コンテンツの削除
      var tl = new TimelineMax();

      tl.to($('.nextDetail').find('.content'), 0.6, {
          x: $(window).width(),
          ease: Power3.easeInOut,
          delay: 0.2,
        })
        .to($('#contents'), 0.8, {
          x: 0,
          ease: Power3.easeInOut,
        },'-=0.8')
        .to($('.ui__menu_btnC'), 0.5, {
          'display':'block',
          opacity: 0,
          onComplete: function(){
            $('.nextDetail')
              .css('z-index', '-1')
              .html('');

            gb.in.sc.isLock = false;
            self.isLock = false;
            self.isDetail = false;
          }
        });

    },

    onResize: function(){

      if (this.isDetail) {

        TweenMax.set($('#contents'), {x: -$(window).width()});
        
      }

    },

    setEvents: function(){

      var self = this;

      $('.detailLink').on('click.detail', function(e){self.onTouch.call(self,e);return false;});
      $(window).on('resize', function(e){self.onResize.call(self,e);return false;});

    }

  }
  // 公開api
  gb.TransitionDetailProject = TransitionDetailProject;

}());
//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function TransitionDetailTechnology(){

    this.isLock = false;
    this.next = false;
    this.isDetail = false;
    this.setEvents();

  }

  TransitionDetailTechnology.prototype = {

    ready: function () {

    },

    getDetail: function(src,next) {

      var self = this;

      $.get(src, function(data){self.onGetDetail.call(self,data,next);});

    },

    switchPageText: function(page,next) {

      if (!next) {

        // page変更
        TweenMax.to($('#header .page'), 0.7, {
            x: -20,
            opacity: 0,
            delay: 0.2,
            ease: Power3.easeOut,
            onComplete: function() {
              var t = page;
              $('#header .page').text(t.toUpperCase());

              TweenMax.to($('#header .page'), 0.7, {
                  x: 0,
                  opacity: 1,
                  ease: Power3.easeOut,
                });
            }
          });

      };

    },

    onGetDetail: function(data,next) {

      var self = this;
      // ------------------------------------------------------------
      //  ready
      // ------------------------------------------------------------
      if (!next) {
        $('.detail')
          .addClass('target')
          .css('z-index', '2')
          .append(data);
      }else{
        var d = $('.target').clone();
            d.addClass('temp')
             .removeClass('target')
             .css('z-index', '1'); 
        $('.target')
          .html('')
          .css('z-index', '2')
          .append(data);
        $('body')
          .append(d);
        var st = $('.target').scrollTop();
        $('.target').scrollTop(0);
        $('.temp').scrollTop(st);
      }

      // 現在のコンテンツ
      TweenMax.set($('.target'), {x: $(window).width()});
      var h = $('.detail .scrollArea').height();
      if (h<=$(window).height()) $('.detail .scrollArea').css('height', '100%');;

      // ------------------------------------------------------------
      //  layout
      // ------------------------------------------------------------
      // size
      gb.setImgSPSize($('.target img'));      
      // layout
      var p = new gb.PosCenter();
      $(window).on('resize', function(){p.onResize();});
      p.run();

      // ------------------------------------------------------------
      //  motion
      // ------------------------------------------------------------      
      if (!next) {
      var tl = new TimelineMax();

      tl.to($('#contents'), 0.6, {
          x: -$(window).width(),
          ease: Power3.easeInOut,
          delay: 0.2,
        })
        .to($('.target'), 0.8, {
          x: 0,
          ease: Power3.easeInOut,
          onComplete: function(){
            self.isLock = false;
            gb.in.youtube.createIframe();
          }
        },'-=0.8');
      } else {
        var tl = new TimelineMax();

        tl.to($('.temp'), 0.6, {
            x: -$(window).width(),
            ease: Power3.easeInOut,
            delay: 0.2,
          })
          .to($('.target'), 0.8, {
            x: 0,
            ease: Power3.easeInOut,
            onComplete: function() {
              $('.temp').remove();
              self.isLock = false;
              gb.in.youtube.createIframe();
            }
          },'-=0.8');
      }

      // ------------------------------------------------------------
      // event再設定
      // ------------------------------------------------------------
      $('.target .detailLink').on('click.detail', function(e){self.onTouch.call(self,e,true);return false;});
      $('.detail .ui__menu_btn_c').on('click.detailClose', function(e){self.onTouchClose.call(self,e);return false;});

    },
    
    onTouch: function(e,next) {

      if (this.isLock) return;
      this.isLock = true;
      this.isDetail = true;

      gb.in.sc.isLock = true;

      this.switchPageText('detail',next);

      // detailの取得
      var src = $(e.currentTarget).data('url');
      this.getDetail(src,next);

    },
    
    onTouchClose: function(e) {

      if (this.isLock) return;
      this.isLock = true;
      var self = this;

      this.switchPageText('technology',false);

      // detail内コンテンツの削除
      var tl = new TimelineMax();

      tl.to($('.target'), 0.6, {
          x: $(window).width(),
          ease: Power3.easeInOut,
          delay: 0.2,
        })
        .to($('#contents'), 0.8, {
          x: 0,
          ease: Power3.easeInOut,
          onComplete: function(){
            $('.target')
              .css('z-index', '-1')
              .html('');

            gb.in.sc.isLock = false;
            self.isLock = false;
            self.isDetail = false;
          }
        },'-=0.8');

    },

    onResize: function(){

      if (this.isDetail) {

        TweenMax.set($('#contents'), {x: -$(window).width()})
        $('.detail .scrollArea').css('height', 'auto');
        var h = $('.detail .scrollArea').height();
        if (h<=$(window).height()) $('.detail .scrollArea').css('height', '100%');

      }

    },

    setEvents: function(){

      var self = this;

      $('.detailLink').on('click.detail', function(e){self.onTouch.call(self,e);return false;});
      $(window).on('resize', function(e){self.onResize.call(self,e);return false;});

    }

  }
  // 公開api
  gb.TransitionDetailTechnology = TransitionDetailTechnology;

}());
//--------------------------------------------------
//
//  Opening
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function Opening() {

    this.tlMain = new TimelineMax();

    this.ready();
    this.run();
    this.setEvents();

  }

  Opening.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------

      this.$btnAppMid = $('.applicationMid');
      this.$btnAppNew = $('.applicationNew');
      this.$svg01 = $('.section01 h2 svg path');
      this.$slider = $('.slider');
      this.$menu = $('#menu');
      this.$mText01 = this.$menu.find('.box02 .item').eq(0);
      this.$mText02 = this.$menu.find('.box02 .item').eq(1);
      this.$mText03 = this.$menu.find('.box02 .item').eq(2);
      this.$mText04 = this.$menu.find('.box02 .item').eq(3);
      this.$mText05 = this.$menu.find('.box03 p');
      this.$mText06 = this.$menu.find('.box03 .share');
      this.$hImg = $('.section01 .block h2 img');
      this.$text01 = $('.section01 .block .text01');
      this.$text02 = $('.section01 .block .text02');
      this.$bg = $('.section01 .block .bg');
      this.$border = $('.section01 .border');
      this.$arrow = $('.section01 .border .arrowWrap');

      this.p = Snap.select(".border .path01");
      this.paths = {
        target : this.p.attr('d'),
        def : $('.border .path01').data('def'),
      };

      this.$section = $('.section').not('.section01').add('#footer');

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      TweenMax.set(this.$btnAppMid, {opacity:0});
      TweenMax.set(this.$btnAppNew, {opacity:0});
      TweenMax.set(this.$slider.find('img').eq(0), {opacity:0});
      TweenMax.set(this.$menu, {opacity:0});
      TweenMax.set(this.$mText01, {opacity:0});
      TweenMax.set(this.$mText02, {opacity:0});
      TweenMax.set(this.$mText03, {opacity:0});
      TweenMax.set(this.$mText04, {opacity:0});
      TweenMax.set(this.$mText05, {opacity:0});
      TweenMax.set(this.$mText06, {opacity:0});
      TweenMax.set(this.$hImg, {opacity:0});
      TweenMax.set(this.$text01, {opacity:0});
      TweenMax.set(this.$text02, {opacity:0});
      TweenMax.set(this.$bg, {opacity:0});
      // TweenMax.set(this.$border, {opacity:0});
      TweenMax.set(this.$arrow, {opacity:0});
      TweenMax.set(this.$section, {opacity:0});

      // cssでのopacityからjsでのopacityに
      TweenMax.set($('html'), {opacity:1});

      // ------------------------------------------------------------
      // section01の準備
      // ------------------------------------------------------------
      TweenMax.set(this.$btnAppMid, {scale:0});
      TweenMax.set(this.$btnAppNew, {scale:0});
      TweenMax.set(this.$svg01, {drawSVG:0, fill:'none',stroke:'#009a59'});
      TweenMax.set(this.$text01, {y: 50});
      TweenMax.set(this.$text02, {y: 50});
      TweenMax.set(this.$bg, {width: 0,left: '50%'});
      TweenMax.set(this.$menu, {y:-100});
      TweenMax.set(this.$mText01, {y: -15});
      TweenMax.set(this.$mText02, {y: -15});
      TweenMax.set(this.$mText03, {y: -15});
      TweenMax.set(this.$mText04, {y: -15});
      TweenMax.set(this.$mText05, {y: -15});
      TweenMax.set(this.$mText06, {y: -15});
      TweenMax.set(this.$arrow, {top: -10});

      this.p
        .animate( {'path': this.paths.def}, 0, mina.elastic );

      // ------------------------------------------------------------
      // スクロール上部
      // ------------------------------------------------------------

    },

    run: function() {

      this.step01();
      this.step02();
      this.step03();
      this.step04();
      this.step05();
      this.step06();

    },

    // svg線画
    step01: function() {

      var self = this;

      this.tlMain
        .to(this.$hImg, 1, {
          opacity: 1, 
          ease:Power2.easeOut,
          delay: 1,
          onStart: function(){
            $(window).scrollTop(0);
            TweenMax.set(self.$section, {opacity:1});
          }
        })
        .to(this.$svg01.eq(0), 1, {
          drawSVG: '100%', 
          ease:Power2.easeOut,
        })
        .to(this.$svg01.eq(1), 1, {
          drawSVG: '100%', 
          ease:Power2.easeOut
        },'-=0.8')
        .to(this.$svg01.eq(2), 1, {
          drawSVG: '100%', 
          ease:Power2.easeOut
        },'-=0.8')
        .to(this.$svg01.eq(4), 1, {
          drawSVG: '100%', 
          ease:Power2.easeOut
        },'-=0.8')
        .to(this.$svg01.eq(3), 1.5, {
          drawSVG: '100%', 
          ease:Power2.easeOut
        },'-=0.8')
        .to(this.$svg01, 0.7, {
          fill: '#009a59', 
          ease:Power2.easeOut
        },'-=0.3');

    },

    // テキスト したからふわっと出てく
    step02: function() {

      this.tlMain
        .to(this.$text01, 0.5, {
          y: 0,
          opacity: 1,
          ease:Power1.easeOut
        },'-=0.7')
        .to(this.$text02, 0.5, {
          y: 0,
          opacity: 1,
          ease:Power1.easeOut
        },'-=0.52')

    },

    // ちょっと遅れて、背景画像白から浮き出る
    step03: function() {

      var self = this;
      
      this.tlMain
        .add(function(){
          
          var opt = {
            $target: self.$slider.find('img').eq(0),
            grayscale: 100,grayscaleTarget: 0,
            brightness: 10000,brightnessTarget: 100,
            opacity: 0,opacityTarget: 1,
            dur: 3.0,
            ease: Power4.easeOut,
          }

          gb.in.dmLibs.bright(opt);

        },'-=1.3')

    },

    // ほぼ同時で背景白展開
    step04: function() {

      this.tlMain
        .to(this.$bg, 0.7, {
          width: '100%',
          left: '0%',
          opacity: 1,
          ease:Power2.easeOut
        },'+=0.9')

    },

    // メニュー上から出てくる
    //     テキスト連続
    step05: function() {

      var self = this;

      this.tlMain
        .to(this.$menu, 1.2, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut
        },'-=0.8')
        .to(this.$mText01, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText01, {x:0,y:0,z:1});
          }
        },'-=0.5')
        .to(this.$mText02, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText02, {x:0,y:0,z:1});
          }
        },'-=0.5')
        .to(this.$mText03, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText03, {x:0,y:0,z:1});
          }
        },'-=0.5')
        .to(this.$mText04, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText04, {x:0,y:0,z:1});
          }
        },'-=0.5')
        .to(this.$mText05, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText05, {x:0,y:0,z:1});
          }
        },'-=0.5')
        .to(this.$mText06, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText06, {x:0,y:0,z:1});
          }
        },'-=0.5')
     

    },

    //  応募ボタン ぴょんと
    // 下へのやじるし ぴょんと
    step06: function() {

      var self = this;

      this.tlMain
        .to(this.$btnAppMid, 1.2, {
          scale: 1,
          opacity: 1,
          ease: Elastic.easeOut.config(1, 0.5),
          onComplete: function(){
            TweenMax.set(self.$btnAppMid, {x:0,y:0,z:1});       
          }
        },'-=0.5')
        .to(this.$btnAppNew, 1.2, {
          scale: 1,
          opacity: 1,
          ease: Elastic.easeOut.config(1, 0.5),
          onComplete: function(){
            TweenMax.set(self.$btnAppNew, {x:0,y:0,z:1});       
          }
        },'-=1.1')
        .add(function(){

          self.p
          .stop()
          .animate( {'path':self.paths.target}, 1500, mina.elastic );

          TweenMax.to(self.$arrow, 0.5, {
            top: 0,
            opacity: 1,
            delay: 0.3,
            onComplete: function(){
              self.onComplete();
            }
          });

        },'-=0.8')


    },

    onComplete: function() {

      gb.in.section01.switchImg();
      // setTimeout(gb.in.section01.switchImg.bind(gb.in.section01),5000)

      gb.in.applyBtn.someTimesMid();
      gb.in.applyBtn.someTimesNew();

    },

    onMousemove: function() {


    },

    setEvents: function() {


    },

  }

  // 公開api
  gb.Opening = Opening;
  
})();
//--------------------------------------------------
//
//  Color
//
//--------------------------------------------------

(function(){

  

  function Color(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Color.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Color.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Color.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Color = Color;
  
})();
//--------------------------------------------------
//
//  Mosaic
//
//--------------------------------------------------

(function(){

  

  function Mosaic(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      tDiffuse: {type: "t", value: null},
      texture: {type: "t", value: null},
      vScreenSize: {type: "v2", value: new THREE.Vector2(0.0, 0.0)},
      fMosaicScale: {type: "f", value: 30.0},
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Mosaic.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          // log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Mosaic.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Mosaic.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Mosaic = Mosaic;
  
})();
//--------------------------------------------------
//
//  Plasma
//
//--------------------------------------------------

(function(){

  

  function Plasma(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 }, // time
      r: { type: "v2", value: new THREE.Vector2() }, //resolution
      tDiffuse: {type: "t", value: null},
      texture: {type: "t", value: null},
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Plasma.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Plasma.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Plasma.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Plasma = Plasma;
  
})();
//--------------------------------------------------
//
//  Sepia
//
//--------------------------------------------------

(function(){

  

  function Sepia(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      tDiffuse: {type: "t", value: null},
      texture: {type: "t", value: null}
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Sepia.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          // log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Sepia.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Sepia.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Sepia = Sepia;
  
})();
//--------------------------------------------------
//
//  Shape
//
//--------------------------------------------------

(function(){

  

  function Shape(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() } // resolution
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Shape.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Shape.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Shape.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Shape = Shape;
  
})();
//--------------------------------------------------
//
//  Transition01
//
//--------------------------------------------------

(function(){

  

  function Transition01(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      progress: { type: "f", value: 0.5 },　// progress
      from: { type: "t", value: null },
      to: { type: "t", value: null },
       
      size: { type: "f", value: 0.04 },
      zoom: { type: "f", value: 30 },
      colorSeparation: { type: "f", value: 0.3 },
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Transition01.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Transition01.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Transition01.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Transition01 = Transition01;
  
})();
//--------------------------------------------------
//
//  Transition02
//
//--------------------------------------------------

(function(){

  

  function Transition02(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      progress: { type: "f", value: 0.0 },　// progress
      from: { type: "t", value: null },
      to: { type: "t", value: null },
       
      strength: { type: "f", value: 0.6 },
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    // this.setResolution();
    this.getShaderSrc();
    
  }

  Transition02.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          // log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Effects/_Shader/Transition02.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Effects/_Shader/Transition02.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Transition02 = Transition02;
  
})();
//--------------------------------------------------
//
//  Transition03
//
//--------------------------------------------------

(function(){

  

  function Transition03(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      progress: { type: "f", value: 0.5 },　// progress
      from: { type: "t", value: null },
      to: { type: "t", value: null },
       
      // strength: { type: "f", value: 0.4 },
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Transition03.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Transition03.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Transition03.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Transition03 = Transition03;
  
})();
//--------------------------------------------------
//
//  Transition04
//
//--------------------------------------------------

(function(){

  

  function Transition04(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      progress: { type: "f", value: 0.5 },　// progress
      from: { type: "t", value: null },
      to: { type: "t", value: null },
       
      // strength: { type: "f", value: 0.4 },
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Transition04.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Transition04.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Transition04.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Transition04 = Transition04;
  
})();
//--------------------------------------------------
//
//  Transition05
//
//--------------------------------------------------

(function(){

  

  function Transition05(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      progress: { type: "f", value: 0.5 },　// progress
      from: { type: "t", value: null },
      to: { type: "t", value: null },
       
      size: { type: "f", value: 0.2 },
       
      // strength: { type: "f", value: 0.4 },
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Transition05.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Transition05.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Transition05.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Transition05 = Transition05;
  
})();
//--------------------------------------------------
//
//  WebCamera
//
//--------------------------------------------------

(function(){

  

  function WebCamera(cb,texture) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      texture: { type: "t", value: texture }      
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  WebCamera.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/WebCamera.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/WebCamera.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.WebCamera = WebCamera;
  
})();
//--------------------------------------------------
//
//  ZoomBlur
//
//--------------------------------------------------

(function(){

  

  function ZoomBlur(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      tDiffuse: { type: "t", value: null },
      strength:   { type: "f", value: 0 },
      nFrag:   { type: "f", value: 1.0 / 89.0 },
      texture: {type: "t", value: null},
      texture01: {type: "t", value: null},
      opacity: {type: "f", value: 1.0},
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    // this.setResolution();
    this.getShaderSrc();
    
  }

  ZoomBlur.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          // log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Effects/_Shader/ZoomBlur.vs', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Effects/_Shader/ZoomBlur.fs', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.ZoomBlur = ZoomBlur;
  
})();
// ------------------------------------------------------------
//
//  Spiral
//
// ------------------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Spiral(x,y,ctx,cw,ch,mode) {

    this.x = x || 0;
    this.y = y || 0;
    this.ctx = ctx;
    this.cw = cw;
    this.ch = ch;
    this.num = 80
    this.pList = [];
    this.bgColor = "rgba(0,0,0,.3)",
    this.pos = {
          x:0,
          y:0,
        };
    this.isClick = true;

    this.mode = mode || 'circle';
    this.setTimer = null;

    if (this.mode !== 'line') this.setEvents();

  }

  Spiral.prototype = {

    setup: function() {

      for (var i = 0; i < this.num; i++) {
        var p = new gb.Vec2(0,0,2*Math.PI * Math.random(),360 * Math.random());
        this.pList.push(p);
      };

    },

    update: function() {

      if (this.isClick) {

      for (var i = 0; i < this.pList.length; i++) {

        var p = this.pList[i];

        if (p.isRemove) {
            
            this.pList.splice(i,1)
            var p = new gb.Vec2(0,0,2*Math.PI * Math.random(),360 * Math.random());
            this.pList.push(p);

        };

        p.update(i,this.num,this.x,this.y,this.mode);
        // p.update(i,num,pos.x,pos.y);
        
      };

      } else {

        for (var i = 0; i < this.pList.length; i++) {

          var p = this.pList[i];

          p.burst(i,this.num,this.x,this.y,this.mode);
          
        };

      } 

    },

    draw: function() {

      for (var i = 0; i < this.pList.length; i++) {

        var p = this.pList[i];
        p.draw(this.ctx,this.isClick);

      };

    },

    onStart: function() {

      this.isClick = true;

    },

    onEnd: function() {

      var self = this;

      var gb = jp.co.sjPlus;   

      if (gb.url == 'undefined') {

        self.isClick = false;  

      } else {

        clearTimeout(this.setTimer);
        this.setTimer = setTimeout(function(){
          self.isClick = false;  
        },1000);

      }

    },

    setEvents: function() {

      var self = this;

      $(window).on('start', function(){
        self.onStart.call(self);
      });
      $(window).on('end', function(){
        self.onEnd.call(self);
      });

    },

  };

  gb.Spiral = Spiral;

})();
// ------------------------------------------------------------
//
//  Vec2
//
// ------------------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Vec2(x, y, rad, hue){

    this.x = x || 0;
    this.y = y || 0;
    this.vx = 0;
    this.vy = 0;

    this.r = 1 + 0.5*Math.random();
    this.freq = 0;
    this.radius = 0;
    this.rad = rad;
    this.hue = hue;
    this.h = 191 + Math.random()*90;
    this.s = 40 + Math.random()*60;
    this.b = 60 + Math.random()*40;

    this.life = 0;

    this.isRemove = false;

  }

  // プロパティとメソッド
  Vec2.prototype = {

    update: function (index,num,mx,my,mode) {

        // this.radius += 0.5;
        if (index<30) index = 30 + Math.random()*70;
        // this.radius += 0.8 * index/num;
        this.radius += 1.2 * index/num;
        this.freq += 0.8 * index/(num*5);

        this.x = mx + Math.cos(this.freq+this.rad) * this.radius;
        this.y = my + Math.sin(this.freq+this.rad) * this.radius;

        if (mode == 'line') {
          if (this.life > 5) {
              this.isRemove = true;
          };        
        } else {
          if (this.life > 30) {
              this.isRemove = true;
          };
        }
        this.life = this.radius;

    },

    burst: function (index,num,mx,my) {

        if (index<30) index = 30 + Math.random()*70;
        this.radius += 0.8 * index/num * 1;
        this.freq += 0.8 * index/(num*5) * 2;

        this.x = mx + Math.cos(this.freq+this.rad) * this.radius;
        this.y = my + Math.sin(this.freq+this.rad) * this.radius;

        if (this.life > 60) {
            this.isRemove = true;
        };
        this.life = this.radius * 1;

    },

    draw: function (ctx,isClick) {

        if (isClick) {
          ctx.fillStyle = "hsla("+this.h+", "+this.s+"%,"+this.b+"%,"+(1-this.life/30)+")";  
        } else {
          ctx.fillStyle = "hsla("+this.h+", "+this.s+"%,"+this.b+"%,"+(1-this.life/60)+")";  
        }
        // ctx.fillStyle = "hsla("+this.hue+", 99%,50%,"+(1-this.life/100)+")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();

    },

  };

  gb.Vec2 = Vec2;

})();
//--------------------------------------------------
//
//  PageTopFixed
//
//--------------------------------------------------

// ①スクロールダウン-非表示
// ②スクロールストップ＆スクロールアップ：下からイーズイン

(function(){

  var gb = jp.co.preco;

  function PageTopFixed() {

    this.$target = $('.pageTopWrap');

    this.Timer = null;

    this.isLock = false;

    this.setup();
    this.setEvents();

  }

  PageTopFixed.prototype = {

    setup: function() {

      this.hide();

    },

    show: function() {

      TweenMax.to(this.$target, 0.8, {
        y: 0,
        z: 2,
        ease: Power2.easeOut
      })

    },

    hide: function() {

      TweenMax.to(this.$target, 0.8, {
        y: 180,
        z: 2,
        ease: Power2.easeOut
      })

    },

    onEnd: function() {

      var self = this;

      // スワイプダウン
      if (gb.in.swipe.dis < 0) {

        this.show();

      // スワイプアップ
      } else {

        this.hide();        

      }

      if (self.Timer) clearTimeout(self.Timer);
      self.Timer = setTimeout(function() {

        if ($(window).scrollTop()==0) return;
        self.show();

      }, 1000);

    },

    onEnter: function() {

      this.isLock = true;

    },

    onLeave: function() {

      this.isLock = false;

    },

    setEvents: function () {

      var self = this;

      // for SP
      $(window).on('end.swipe', this.onEnd.bind(this));

    },

  }

  gb.PageTopFixed = PageTopFixed;

})();