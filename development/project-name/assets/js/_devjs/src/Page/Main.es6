//--------------------------------------------------
//
//  main
//
//--------------------------------------------------

import DisplayTop from '../Display/DisplayTop.es6';
// import DisplayMovie from '../Display/DisplayMovie.es6';
// import DisplayInterview from '../Display/DisplayInterview.es6';
// import DisplayInterviewDetail from '../Display/DisplayInterviewDetail.es6';
// import DisplayHistory from '../Display/DisplayHistory.es6';

export default class Main {

  constructor() {

    this.onImmediate();
    this.setEvents();

  }

  onImmediate() {

    
  }

  onReady() {

    //pageページ別のIDを取得
    var page = $('body').data('id');

		//pageのIDごとに発火するクラスの振り分け
    switch (page) {

      case 'top':

        new DisplayTop();

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

  onLoad() {

    
  }

  onRender() {


  }

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
    $(window).on('load', this.onLoad.bind(this));        

  }

}