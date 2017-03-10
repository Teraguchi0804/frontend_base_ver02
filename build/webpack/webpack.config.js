var path = require('path');
var es2015 = require('babel-preset-es2015');

module.exports = {
    entry: "../../dev/assets/devjs/src/es6/main.js",
    output: {
        path: "../../dev/assets/js/",
        filename: "main.js"
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ['es2015']
              }
            }
        ]
    },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
};
