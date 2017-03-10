//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
import Effects from './Effects/Effects.es6';
import Layout from '../Display/Layout/LayoutInterviewDetail.es6';
import PageScroll from '../Display/UI/_parts/PageScroll.es6';
import HoverEffectSNSPCDetails from '../Display/Effects/03_effects/HoverEffectSNSPCDetails.es6';
import HoverEffectDetailsBtm from '../Display/Effects/03_effects/HoverEffectDetailsBtm.es6';
import HoverEffectPageTop from '../Display/Effects/03_effects/HoverEffectPageTop.es6';
import HeaderColor from '../Display/UI/HeaderColor.es6';

import InertiaScroll01 from '../Display/UI/InertiaScroll01.es6';
import InertiaScroll02 from '../Display/UI/InertiaScroll02.es6';
import InertiaScroll03 from '../Display/UI/InertiaScroll03.es6';

export default class DisplayTop {

  constructor(){

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
    Layout.run();

    // bg
    $('.sec03BgCanvas').removeClass('interview01 interview02 interview03'); // remove
    if ($('.section').hasClass('section03_detail01')) { // add
      $('.sec03BgCanvas').addClass('interview01')
    } else if ($('.section').hasClass('section03_detail02')) {
      $('.sec03BgCanvas').addClass('interview02')
    } else if ($('.section').hasClass('section03_detail03')) {
      $('.sec03BgCanvas').addClass('interview03')
    }

    gb.in.headerColor = new HeaderColor();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    new HoverEffectSNSPCDetails();
    new HoverEffectPageTop($('.pageTop'))
    new HoverEffectDetailsBtm($('.block04 .box01'));
    new HoverEffectDetailsBtm($('.block04 .box02'));
    new HoverEffectDetailsBtm($('.block04 .box03'));

    if ($('.section').hasClass('section03_detail01')) { // add
      gb.in.inertia01 = new InertiaScroll01();
    } else if ($('.section').hasClass('section03_detail02')) {
      gb.in.inertia02 = new InertiaScroll02();
    } else if ($('.section').hasClass('section03_detail03')) {
      gb.in.inertia03 = new InertiaScroll03();
    }

  }

  static run() {

    // ------------------------------------------------------------
    //  UI
    // ------------------------------------------------------------
    Layout.run();

    // bg
    $('.sec03BgCanvas').removeClass('interview01 interview02 interview03'); // remove
    if ($('.section').hasClass('section03_detail01')) { // add
      $('.sec03BgCanvas').addClass('interview01')
    } else if ($('.section').hasClass('section03_detail02')) {
      $('.sec03BgCanvas').addClass('interview02')
    } else if ($('.section').hasClass('section03_detail03')) {
      $('.sec03BgCanvas').addClass('interview03')
    }

    gb.in.headerColor = new HeaderColor();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    new HoverEffectSNSPCDetails();
    new HoverEffectPageTop($('.pageTop'))
    new HoverEffectDetailsBtm($('.block04 .box01'));
    new HoverEffectDetailsBtm($('.block04 .box02'));
    new HoverEffectDetailsBtm($('.block04 .box03'));

    if ($('.section').hasClass('section03_detail01')) { // add
      gb.in.inertia01 = new InertiaScroll01();
    } else if ($('.section').hasClass('section03_detail02')) {
      gb.in.inertia02 = new InertiaScroll02();
    } else if ($('.section').hasClass('section03_detail03')) {
      gb.in.inertia03 = new InertiaScroll03();
    }

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}