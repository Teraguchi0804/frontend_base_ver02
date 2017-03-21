// ------------------------------------------------------------
//
//  Top
//
// ------------------------------------------------------------
import Common from './Page/Common.js';
import Main from './Page/Main.js';
// import DisplayTop from './Display/DisplayTop.es6';

(()=>{

  // globalオブジェクト
  if (window.gb===undefined) window.gb = {};
  window.gb.in = {}; //instance

  gb.in.common = new Common();
  // gb.in.displayTop = new DisplayTop();
  gb.in.main = new Main();

})();