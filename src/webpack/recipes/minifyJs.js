const webpack = require('webpack');
const { merge } = require('webpack-merge');

const minifyJs = () => config =>
  merge(config, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          screw_ie8: true,
          warnings: false
        },
        mangle: {
          screw_ie8: true
        },
        output: {
          comments: false,
          screw_ie8: true
        }
      })
    ]
  });

module.exports = minifyJs;
