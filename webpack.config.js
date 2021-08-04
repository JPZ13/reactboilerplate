const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const nodeEnv = process.env.NODE_ENV
const isProd = nodeEnv === 'production'
const isDeployed = isProd || nodeEnv === 'staging'

const webpackMode = isDeployed ? 'production' : 'development'

const config = {
  mode: webpackMode,
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      common: path.resolve(__dirname, './src/components/common'),
      state: path.resolve(__dirname, './src/state'),
      utils: path.resolve(__dirname, './src/utils'),
      types: path.resolve(__dirname, './src/types'),
      assets: path.resolve(__dirname, './assets'),
    },
    modules: [
      path.resolve(__dirname, './src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './assets/index.html',
      filename: './index.html',
    }),
  ],
}

if (!isDeployed) {
  config.entry.unshift('webpack-hot-middleware/client')
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
