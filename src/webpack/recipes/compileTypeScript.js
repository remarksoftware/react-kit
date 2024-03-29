const { merge } = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const compileTypeScript =
  ({ forkTypeChecking, compilerOptions }) =>
  config =>
    merge(config, {
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  compilerOptions,
                },
              },
            ].filter(Boolean),
          },
        ],
      },
      plugins: [
        forkTypeChecking ? new ForkTsCheckerWebpackPlugin() : void 0,
      ].filter(Boolean),
    });

module.exports = compileTypeScript;
