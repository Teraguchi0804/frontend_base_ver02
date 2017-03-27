//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
import Effects from './Effects/Effects.js';
import ScaleTop from '../Display/Layout/Size/ScaleTop.js';
import HoverEffectSNSSPFooter from '../Display/Effects/03_effects/HoverEffectSNSSPFooter.js';
import HoverEffectSVGArrowTop from '../Display/Effects/03_effects/HoverEffectSVGArrowTop.js';
import TopTime from '../Display/UI/TopTime.js';
import Position from './Layout/Postion/Position.js';
import WebGLinit from './WebGLinit.js';

import vs from './test.frag';


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

		// window.console.log('static_Run');

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