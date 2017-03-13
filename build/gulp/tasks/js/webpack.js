import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import es2015 from 'babel-preset-es2015';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
// import webpack from 'gulp-webpack';
import sourcemaps from "gulp-sourcemaps";
import PATH from '../../config';

const webpackConfig = require('../../webpack.config.js');

gulp.task('webpack', ()=>{

  gulp
    // .src(PATH.dev.devjs + 'src/es6/main.js')
    .src(PATH.dev.devjs + 'src/**/*.js')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    // .pipe(webpackStream(require('../../webpack.config.js'),webpack))
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(PATH.dev.js));
    
  // gulp
  //   .src(PATH.dev.devjs + 'src/**/*.js')
  //   .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  //   .pipe(webpack(require('../../webpackCommon.config.js')))
  //   .pipe(gulp.dest(PATH.dev.js + 'common/'));

});


// gulp.src(config.webpack.src)

//   .pipe(webpack({entry: config.webpack.entry, output: config.webpack.output}))
//   .pipe(gulpif(config.js.uglify, uglify()))
//   .pipe(gulp.dest(config.js.dest));

// });
