//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------

import Size from './Size/SizeInterviewDetail.es6';
import Position from './Postion/Position.es6';

export default class Layout {

  constructor() {
    
    this.setEvents();

  }

  setup() {

    this.size = new Size(); // adjust size

    this.position = new Position(); // adjust position
      
  }

  static run() {

    this.size = new Size(); // adjust size

    this.position = new Position(); // adjust position

  }

  setEvents() {

      
  }

  onLoad() {

    this.setup();

  }
       
  setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}