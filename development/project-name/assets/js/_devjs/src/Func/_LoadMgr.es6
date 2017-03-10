//--------------------------------------------------
//
//  LoadMgr
//
//--------------------------------------------------

import LoadResource from './LoadResource.es6';

export default class LoadMgr {

  constructor() {

    this.section01BgVideo();
    this.section02Youtube();

  }

  // section01の背景動画
  section01BgVideo() {

    var loader = new LoadResource();

    var len = 1;
    // gb.in.rm.total += len; // load数のtotalを計算

    // var src = '/project-name/assets/resource/video/tiffany.mp4';
    // var src = '/project-name/assets/resource/video/morning.mov';
    var cb = ()=>{
      // gb.in.rm.completed++;

      $('body').append(loader.video);
      loader.video.play();
      $(loader.video).css({
        'position': 'absolute',
        'left': 0,
        'top': 0,
        'width': '100%',
        'height': '100%',
      });
      
    }

    // loader.video(src,cb);
    
  }

  section02BgImg() {

    // bgVideoTile用の連番画像の読み込み
    gb.in.loader = this.loader = new LoadResource();

    var len = 930;
    // gb.in.rm.total += len;　// load数のtotalを計算

    var path = '/project-name/assets/resource/img/movie/bgVideoTile/jpg_480/';
    var cb = ()=>{
      // gb.in.Section02Bg.create();
    }
    var cb02 = ()=>{
      // gb.in.rm.completed++;
    }

    // this.loader.imgSerialLoad(len,path,'tfny_',cb,cb02);
    this.loader.img(len,path,'tfny_',cb,cb02);

  }

  section02Youtube() {

    var loader = new LoadResource();

    var len = 1;
    gb.in.rm.total += len; // load数のtotalを計算

    var cb = ()=>{
      gb.in.rm.completed++;
    }

    loader.youtubeIframeScript(cb);

  }

  section04ProductShader() {

    var shaders = [];
    var shaderLoadList = [
                       // gb.Clock,
                       // gb.Color,
                       // gb.Plasma,
                       // gb.Sepia,
                       // gb.Mosaic,
                       gb.ZoomBlur,
                       gb.ZoomBlur,
                       gb.Transition02,
                     ];

    var len = shaderLoadList.length;
    gb.in.rm.total += len; // load数のtotalを計算

    var shaderSerialLoad = (len, cb)=>{

        var shader,cnt=0;

        var load = (i)=>{
          shader = new shaderLoadList[i](comp);
          shaders.push(shader);
        };

        var comp = function(){
          cnt++;
          gb.in.rm.completed++;
          if(cnt == len) cb(shaders);
          else load(cnt);
        };

        load(cnt);

    }

    shaderSerialLoad(shaderLoadList.length,(shaders)=>{

      this.shaders = shaders;
      this.section04ProductImg();

    })

  }

  section04ProductImg() {

    var textureList = [
      '/project-name/assets/resource/img/product/tiffany_hand1.jpg',
      '/project-name/assets/resource/img/product/brown.png',
      '/project-name/assets/resource/img/product/blue.png',
      '/project-name/assets/resource/img/product/white.png',
      '/project-name/assets/resource/img/product/tiffanyblue.png',
      '/project-name/assets/resource/img/product/pink.png',
    ];      
    this.textures = [];

    var len = textureList.length;
    gb.in.rm.total += len; // load数のtotalを計算

    var textureSerialLoad = (len, cb)=>{

      var texture,cnt=0;

      var load = (i)=>{
        texture = THREE.ImageUtils.loadTexture(textureList[i], null ,comp);
        this.textures.push(texture);
      };

      var comp = function(){
        cnt++;
        gb.in.rm.completed++;
        if(cnt == len) cb();
        else load(cnt);
      };

      load(cnt);

    }

    textureSerialLoad(textureList.length, ()=>{$(window).trigger('onSection04ProductImg');});

  }

  onEnd() {


  }

  setEvents() {

    gb.in.up.add('loadResource',this.update.bind(this));
    
  }

}