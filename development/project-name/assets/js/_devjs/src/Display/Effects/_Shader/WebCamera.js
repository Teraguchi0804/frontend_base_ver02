//--------------------------------------------------
//
//  WebCamera
//
//--------------------------------------------------

(function(){

  

  function WebCamera(cb,texture) {

    this.uniforms = {
      t: { type: "f", value: 1.0 },　// time
      r: { type: "v2", value: new THREE.Vector2() }, // resolution
      texture: { type: "t", value: texture }      
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  WebCamera.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/WebCamera.vert', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/WebCamera.frag', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.WebCamera = WebCamera;
  
})();