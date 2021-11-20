const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './app/app-bootstrap.ts'
  },
  output: {
    path: path.resolve('./dist'),
    filename: "[name].[chunkhash].js"
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],

    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              experimentalWatchApi: true, // TODO: test this - allows --watch to work?
            }
          }
        ]
      },
      {
        test: /\.html$/,
        include: path.resolve('./app'),
        loader: 'html-loader?attrs=false&interpolate'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.ejs',
      inject: 'head'
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
    runtimeChunk: false
  }
}