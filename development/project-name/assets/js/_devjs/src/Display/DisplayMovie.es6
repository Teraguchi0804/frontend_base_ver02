//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
import Effects from './Effects/Effects.es6';
import BgVideoTile from './UI/BgVideoTile.es6';
import Sec02Video from './UI/Sec02Video.es6';
import Layout from '../Display/Layout/LayoutMovie.es6';
import HoverEffectSNSSPFooter from '../Display/Effects/03_effects/HoverEffectSNSSPFooter.es6';
import HoverEffectMoviePlay from '../Display/Effects/03_effects/HoverEffectMoviePlay.es6';

export default class DisplayTop {

  constructor(){

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
    Layout.run();

    gb.in.sec02Video = new Sec02Video();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------

    // sp
    gb.in.snsSPHoverEf = new HoverEffectSNSSPFooter($('.snsWrap'));

    // pc
    new HoverEffectMoviePlay($('.play .bg'));
    

  }

  static run() {

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------
    // 高さを合わせた後に、レイアウト
    Layout.run();

    gb.in.sec02Video = new Sec02Video();


    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    
    // sp
    gb.in.snsSPHoverEf = new HoverEffectSNSSPFooter($('.snsWrap'));

    // pc
    new HoverEffectMoviePlay($('.play .bg'));

    // common
    // 既にリソースのロード,canvasのsetupされているのでplayのみ
    gb.in.Sec02Bg.play();


  }

  setEvents(){

    $(window).on('load', this.onLoad.bind(this));

  }

}