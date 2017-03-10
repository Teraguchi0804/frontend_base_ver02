//--------------------------------------------------
//
//  Effects
//
//--------------------------------------------------
import Section02Bg from './03_effects/Section02Bg/CVContents.es6';
import Section04Product from './03_effects/Section04Product/GlContents.es6';
import Profiler from './Profiler.es6';

export default class Effects {

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


  setEvents() {


  }

}