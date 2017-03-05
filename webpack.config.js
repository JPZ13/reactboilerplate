const webpack = require('webpack');
const path = require('path');
const loader = require('babel-loader');

const BUILD_DIR = path.resolve(__dirname, 'client/src/public');
const APP_DIR = path.resolve(__dirname, 'client/src');

const getPlugins = function() {
  let plugins = [];

  // do this push stuff in case we have to 
  // configure more plugins for production or
  // development
  plugins.push( new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
  }));
  return plugins;
};

const config = {
  entry: APP_DIR + '/index.jsx',
  devtool: 'source-map',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'cheerio':
    'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        exclude: /node_modules/,
      }
    ],
  },
  plugins: getPlugins(),
  watch: true
};

module.exports = config;
