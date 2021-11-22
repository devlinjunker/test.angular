const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
module.exports = {
    entry: {
      main: './app/aot-bootstrap.ts'
    },
    output: {
      path: path.resolve('./dist/aot'),
      filename: "[name].[chunkhash].js"
    },
    resolve: {
      extensions: ['.js', '.ts'],
      modules: [
        path.resolve('./app'),
        path.resolve('./node_modules')
      ]
    },
    module: {
      rules: [
        {
          test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
          loader: '@ngtools/webpack'
        },
        {
          test: /\.html$/,
          include: path.resolve('./app'),
          loader: 'html-loader'
        }
      ]
    },
    plugins: [
      new webpack.optimize.SplitChunksPlugin({
        name: ['app', 'vendor', 'polyfills']
      }),
      // AOT Plugin 
      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: path.resolve('app/app.module#AppModule'),
        mainPath: './app/aot-bootstrap.ts'
      }),
      new HtmlWebpackPlugin({
        template: 'app/index.ejs',
        inject: 'head'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'ENV': JSON.stringify(ENV)
        }
      }),
      new CopyWebpackPlugin({
        patterns: [
          // TODO: test images
          // {
          //   from: 'images',
          //   to: 'images',
          // },
          {
            from: 'conf',
            to: 'conf',
          },
        ],
      }),
    ],
    optimization: {
      minimize: true
    }
};