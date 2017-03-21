//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
import Effects from './Effects/Effects.es6';
import ScaleTop from '../Display/Layout/Size/ScaleTop.es6';
import HoverEffectSNSSPFooter from '../Display/Effects/03_effects/HoverEffectSNSSPFooter.es6';
import HoverEffectSVGArrowTop from '../Display/Effects/03_effects/HoverEffectSVGArrowTop.es6';
import TopTime from '../Display/UI/TopTime.es6';
import Position from './Layout/Postion/Position.es6';
import WebGLinit from './WebGLinit.es6';

'use strict';

export default class DisplayTop {

  constructor(){

    this.onImmediate();
    this.setEvents();

  }

  onImmediate() {


    // アニメーションループスタート
    gb.in.up.loop();
    
  }

  onLoad() {

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

  static run() {

		window.console.log('static_Run');

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------
    // sp
    gb.in.scaleTop = new ScaleTop();
    gb.in.pos = new Position();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------

    // sp
    gb.in.sliderTop.setEvents();
    gb.in.snsSPHoverEf = new HoverEffectSNSSPFooter($('#sideL'));

    // pc
    this.ht = new HoverEffectSVGArrowTop($('.section01 .next'));
    this.ht.autoArrow();
    gb.in.time = new TopTime();
    if (gb.in.sec01Video.video) gb.in.sec01Video.video.playByNYTime(); // sp用にも gb.in.sec01Videoが存在するかどうか判定
    if (gb.in.sec01Video.video) gb.in.sec01Video.video.setEvents(); // sp用にも gb.in.sec01Videoが存在するかどうか判定


  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}