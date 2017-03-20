/**
 * fileOverview:
 * Project:
 * File: Common
 * Date:
 * Author:
 */

import Conf from '../Conf.es6';
import Util from '../MyLibs/Util.es6';
import Func from '../MyLibs/Func.es6';

import ReadyMgr from '../MyLibs/EventMgr/ReadyMgr.es6';
import UpdateMgr from '../MyLibs/EventMgr/UpdateMgr.es6';
import ResizeMgr from '../MyLibs/EventMgr/ResizeMgr.es6';
import ScrollMgr from '../MyLibs/EventMgr/ScrollMgr.es6';
import MouseMgr from '../MyLibs/EventMgr/MouseMgr.es6';
import LoadMgr from '../Func/LoadMgr.es6';

// import Pjax from '../Func/Pjax.es6';
import JudgeEnvironment from '../Func/JudgeEnvironment.es6';
import ResponsiveSwitchImg from '../Func/_events/ResponsiveSwitchImg.es6';
import SwipeTransition from '../Func/SwipeTransition.es6';

// import Menu from '../Display/UI/_compornents/Menu.es6';
// import Nav from '../Display/UI/Nav.es6';
import Alert from '../Display/UI/Alert.es6';
import SideR from '../Display/UI/SideR.es6';
import Time from '../Func/Time.es6';
import ScrollTransition from '../Func/ScrollTransition.es6';
import PageTop from '../Display/UI/_parts/PageTop.es6';
import Sec01Video from '../Display/UI/Sec01Video.es6';
import Sns from '../Func/Sns.es6';
import SliderTop from '../Display/UI/SliderTop.es6';


import Layout from '../Display/Layout/Layout.es6';

import DisplayOpening from '../Display/DisplayOpening.es6';
import Section02Bg from '../Display/Effects/03_effects/Section02Bg/CVContents.es6';
import PageTransitionEffect from '../Display/Effects/03_effects/PageTransition/PageTransitionController.es6';
import HoverEffectSVG from '../Display/Effects/03_effects/HoverEffectSVG.es6';
import HoverEffectSVGLogo from '../Display/Effects/03_effects/HoverEffectSVGLogo.es6';
import HoverEffectMenuBtn from '../Display/Effects/03_effects/HoverEffectMenuBtn.es6';
import HoverEffectSVGArrow from '../Display/Effects/03_effects/HoverEffectSVGArrow.es6';
import HoverEffectSNSPCFooter from '../Display/Effects/03_effects/HoverEffectSNSPCFooter.es6';
import HoverEffectSVGArrowSideR from '../Display/Effects/03_effects/HoverEffectSVGArrowSideR.es6';
// import HoverEffectMenuItem from '../Display/Effects/03_effects/HoverEffectMenuItem.es6';


export default class Common {

  constructor() {

    this.onImmediate();
    this.setEvents();

  }

  onImmediate() {

    // ------------------------------------------------------------
    //  初期値の設定・データの配置
    //  util関数の初期化
    //  イベントマネージャーの設置
    // ------------------------------------------------------------
    gb.in.conf = new Conf();
    gb.in.u = new Util();
    gb.in.f = new Func();
    gb.in.up = new UpdateMgr();
    gb.in.r = new ResizeMgr();    
    gb.in.s = new ScrollMgr();
    gb.in.m = new MouseMgr();
    gb.in.rm = new ReadyMgr();
    gb.in.loadMgr = new LoadMgr();
    gb.in.sct = new ScrollTransition();

    // ------------------------------------------------------------
    //
    //  その他
    //
    // ------------------------------------------------------------
    // pjaxの設定
    // gb.in.pjax = new Pjax();

    // ------------------------------------------------------------
    //  Layout
    // ------------------------------------------------------------
    gb.in.Layout = new Layout();


    // 準備完了後の処理
    gb.in.rm.onCompletedFunc = ()=>{new DisplayOpening();}

  }

  onReady() {

    // ------------------------------------------------------------
    //  デバイス・ブラウザ判定
    //  スマホの向き判定
    //  ページ情報取得
    // ------------------------------------------------------------
    gb.in.je = new JudgeEnvironment();
    gb.in.resImg = new ResponsiveSwitchImg();
    gb.in.sns = new Sns($('.fbShare'),$('.twShare'),$('.lineShare'),$('.onMail'))
    gb.in.swt = new SwipeTransition();

    gb.in.f.checkCssBlend();

    // ------------------------------------------------------------
    //  UI
    // ------------------------------------------------------------
    // gb.in.menu = new Menu();
    // gb.in.nav = new Nav();
    // gb.in.sideR = new SideR();
    // gb.in.alert = new Alert();
    // gb.in.pagetop = new PageTop();

    // bg
    gb.in.sliderTop = new SliderTop($('#bgWrap .sec01'));

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    gb.in.pageTransitionEffect = new PageTransitionEffect($('#pageTransitionLayer'));
    gb.in.sec01Video = new Sec01Video();
    gb.in.Sec02Bg = new Section02Bg();

    gb.in.he01 = new HoverEffectSVG($('.SVGHover'),'#fff','#000');
    gb.in.he02 = new HoverEffectSVG($('.SVGHoverW'),'#81d8d0','#fff');
    gb.in.he03 = new HoverEffectSVG($('.SVGHoverW02'),'#81d8d0','#000');
    gb.in.he04 = new HoverEffectSVGLogo($('#header .logo, #header .subTit'));
    // gb.in.he05 = new HoverEffectMenuItem($('#menu .menuList .item'));
    gb.in.he06 = new HoverEffectSVGArrowSideR($('#sideR .next'));
    // gb.in.he07 = new HoverEffectMenuBtn($('.menuBtn01'));
    gb.in.he08 = new HoverEffectSNSPCFooter($('#sideL .sns.sp'));

    // logo 出す
    // TweenMax.to($('#header .logo'), 2.2, {opacity: 1, ease: Power2.easeInOut})

    gb.in.loadMgr.start();

  }

  onLoad() {

    // ------------------------------------------------------------
    //
    //  Func
    //
    // ------------------------------------------------------------


    // ------------------------------------------------------------
    //
    //  Layout
    //
    // ------------------------------------------------------------

    // ------------------------------------------------------------
    //
    //  Dispaly
    //
    // ------------------------------------------------------------

    // ------------------------------------------------------------
    //
    //  Motion
    //
    // ------------------------------------------------------------

  }

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
    $(window).on('load', this.onLoad.bind(this));

  }

}