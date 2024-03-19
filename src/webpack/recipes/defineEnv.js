const webpack = require('webpack');
const { merge } = require('webpack-merge');

const defineEnv = (nodeEnv, additionalDefinitions) => config =>
  merge(config, {
    mode: nodeEnv,
    plugins: [
      new webpack.DefinePlugin({
        ...(additionalDefinitions || {}),
        'process.env.NODE_ENV': JSON.stringify(nodeEnv),
        'process.env.BROWSER': JSON.stringify(true),
      }),
    ],
  });

module.exports = defineEnv;
