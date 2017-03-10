//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
import Effects from './Effects/Effects.es6';
import FullSizeByScaleInterviewIndex from '../MyLibs/Display/Layout/FullSizeByScaleInterviewIndex.es6';
import Layout from '../Display/Layout/LayoutHistory.es6';
import Slider from '../Display/UI/Slider.es6';
import PageScroll from '../Display/UI/_parts/PageScroll.es6';
import HoverEffectSNSSPFooter from '../Display/Effects/03_effects/HoverEffectSNSSPFooter.es6';
import HoverEffectHistoryAnchor from '../Display/Effects/03_effects/HoverEffectHistoryAnchor.es6';
import HoverEffectPageTop from '../Display/Effects/03_effects/HoverEffectPageTop.es6';
import YearMgr from './UI/history/YearMgr.es6';
import HeaderColor from '../Display/UI/HeaderColor.es6';

import InertiaScroll04 from '../Display/UI/InertiaScroll04.es6';

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
    //  UI / Layout
    // ------------------------------------------------------------
    // 高さを合わせた後に、レイアウト
    Layout.run();

    new Slider();

    gb.in.headerColor = new HeaderColor();

    new YearMgr();
        
    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    
    gb.in.snsSPHoverEf = new HoverEffectSNSSPFooter($('.snsWrap'));
    new HoverEffectPageTop($('.pageTop'))
    new HoverEffectHistoryAnchor($('.block01 .textWrap02 .item'));

    gb.in.inertia04 = new InertiaScroll04();

  }

  static run() {

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------

    // 高さを合わせた後に、レイアウト
    Layout.run();

    new Slider();

    gb.in.headerColor = new HeaderColor();

    new YearMgr();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    gb.in.snsSPHoverEf = new HoverEffectSNSSPFooter($('.snsWrap'));
    new HoverEffectPageTop($('.pageTop'))
    new HoverEffectHistoryAnchor($('.block01 .textWrap02 .item'));

    gb.in.inertia04 = new InertiaScroll04();

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}