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

// import WebGLinit from './WebGLinit.js';
// import Canvas from '../Visual/Canvas.js';


import Canvas from "../Visual/Canvas";

// import vs from './test.frag';


'use strict';

export default class DisplayTop {

  constructor(){

    this.onImmediate();
    this.setEvents();

  }

  onImmediate() {


    // アニメーションループスタート
    // gb.in.up.loop();
    
  }

  onLoad() {

    // gb.in.canvas = new Canvas();
    // gb.in.canvas.init();

    gb.in.canvas = new Canvas({
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

  static run() {

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

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}