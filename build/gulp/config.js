// config
var PROJECT_ROOT = '../../';

var DEV = 'development/project-name/';
var RELEASE = 'release/';
var BUILD = 'build/';

var DEVPATH = {
  root : PROJECT_ROOT + DEV,
  ejs : PROJECT_ROOT + DEV + 'assets/ejs/',
  css  : PROJECT_ROOT + DEV + 'assets/css/',
  scss  : PROJECT_ROOT + DEV + 'assets/css/_scss/',
  js    : PROJECT_ROOT + DEV + 'assets/js/',
  devjs    : PROJECT_ROOT + DEV + 'assets/js/_devjs/',
  resource : PROJECT_ROOT + DEV + 'assets/resource/',
}

var RELEASEPATH = {
  root : PROJECT_ROOT + RELEASE,
  css  : PROJECT_ROOT + RELEASE + 'assets/css/',
  js    : PROJECT_ROOT + RELEASE + 'assets/js/',
  resource : PROJECT_ROOT + RELEASE + 'assets/resource/',
}

var OTHERPATH = {
  gulp : PROJECT_ROOT + BUILD + 'gulp/',
  webpack : PROJECT_ROOT + BUILD + 'webpack/',
  // webpack : { 
  //   src: DEVPATH.js + 'main.js',
  //   entry: {
  //     main: DEVPATH.js + 'main.js',
  //     lib: DEVPATH.js + 'lib/**.*.js',
  //   },
  //   output: {
  //     filename: '[name].js',
  //   },
  //   resolve: {
  //     extensions: ['', '.js']
  //   },
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({name:'lib',filename:'lib.js'})
    // ],
  // },
  styleguide  : PROJECT_ROOT + '_styleguide/',
  jsDoc_src : PROJECT_ROOT + 'assets/js/',
  jsDoc_dist : PROJECT_ROOT + '_jsDoc/',
}

var PATH = {
    root: PROJECT_ROOT,
    dev: DEVPATH,
    release: RELEASEPATH,
    other: OTHERPATH,
};

module.exports = PATH;