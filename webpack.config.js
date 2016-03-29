const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globalConfig = require('./global.config');
const onProduction = process.env.NODE_ENV === 'production' ? true : false;

// array of plugins for dev environment
const pluginsForDev = [
  new HtmlWebpackPlugin({
    template: globalConfig.staticPage.pathToTemplate,
    inject: 'body',
    title: globalConfig.staticPage.title,
    metas: {
      keywords: globalConfig.staticPage.metas.keywords,
      description: globalConfig.staticPage.metas.description,
    },
    container: {
      id: globalConfig.staticPage.container.id,
      role: globalConfig.staticPage.container.role,
    },
  }),
  new webpack.HotModuleReplacementPlugin(),
];

// array of plugins to add for Prod environment
const pluginsForProd = [
  new ExtractTextPlugin('styles.css'),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
      unused: true,
      dead_code: true,
      drop_console: true,
    },
  }),
];

module.exports = {
  context: path.join(__dirname, '/'),
  devtool: 'eval',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:' + globalConfig.server.port,
      'webpack/hot/dev-server',
      './app/js/entry.js',
    ],
  },
  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.html'],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'file?name=[path][name].[ext]',
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    }],
  },
  plugins: onProduction ? pluginsForDev.concat(pluginsForProd) : pluginsForDev,
};
