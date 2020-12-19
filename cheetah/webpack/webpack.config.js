const path = require('path');
const alias = require('./aliases');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextPlugin('portal.css');

// const LOGO_PATH = path.resolve(__dirname, '../src/assets/png/sun.png');

const htmlPlugin = new HtmlWebPackPlugin({
  //   template: './src/index.html',
  filename: './index.html'
  // favicon: LOGO_PATH,
});

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.webpack.js',
      '.web.js',
      '.json',
      '.png'
    ],
    modules: ['node_modules'],
    alias
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg|png|svg|ico)$/,
        use: 'file-loader?name=./images/[hash].[ext]'
      },
      {
        test: /\.scss$/,
        use: extractSASS.extract({
          fallback: ['style-loader'], // translates CSS into CommonJS
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]',
                sourceMap: true,
                minimize: true,
                camelCase: true
              }
            },
            'sass-loader'
          ] // compiles sass to CSS
        })
      }
    ]
  },
  plugins: [extractSASS, htmlPlugin],
  devServer: {
    port: 9500
  }
};
