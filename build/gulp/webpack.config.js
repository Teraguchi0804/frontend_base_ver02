const path = require('path');
const fallbackDirPath = path.join(__dirname, 'node_modules');
const PATH = require('./config');

module.exports = {
    entry: {
      // "main": "../../dev/assets/devjs/src/es6/main.js",
      "main": PATH.dev.devjs + "src/Top.es6",
      // "page01": PATH.dev.devjs + "src/Page01.js",
    },
    output: {
        // path: "../../dev/assets/js/",
        filename: "[name].js"
    },
    module: {
			  rules: [
            // { test: /\.css$/, loader: "style!css" },
            {
              test: [/\.js$/,/\.es6$/],
              exclude: /(node_modules|bower_components)/,
							use: 'babel-loader', // 'babel-loader' is also a legal name to reference
							// options: {
              //   // presets: ["babel-preset-es2015", "babel-preset-es2016", "babel-preset-es2017"].map(require.resolve)
              //   presets: ["babel-preset-es2015", "babel-preset-es2016", "babel-preset-es2017"]
              // }
            }
        ]
    },
    // resolveLoader: {
		// resolveLoader: {
    // 	moduleExtensions: ["-loader"]
    // },
    // resolve: {
			// // moduleExtensions: ["-loader"],
    //   // root: path.join(__dirname, 'node_modules')
			// // fallback: fallbackDirPath
			// modules: [
			// 	path.join(__dirname, "./"),
			// 	 "node_modules"
			// 	]
    // },
    // devtool: 'source-map',
    devtool: 'inline-source-map',
};
