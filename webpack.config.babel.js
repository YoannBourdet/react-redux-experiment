import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { staticPage } from './global.config.babel';

const onProduction = process.env.NODE_ENV === 'production';

// array of plugins for dev environment
const pluginsForDev = [
  new HtmlWebpackPlugin({
    template: staticPage.pathToTemplate,
    inject: 'body',
    title: staticPage.title,
    metas: {
      keywords: staticPage.metas.keywords,
      description: staticPage.metas.description,
    },
    container: {
      id: staticPage.container.id,
      role: staticPage.container.role,
    },
  }),
  new webpack.HotModuleReplacementPlugin(),
];

// array of plugins to add for Prod environment
/* eslint camelcase: 0 */
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

/* eslint max-len: 0 */
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
  context: path.join(__dirname, '/'),
  devtool: 'eval',
  entry: {
    app: [`./app/js/entry.jsx`, hotMiddlewareScript],
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
      loaders: ['babel'],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'file?name=[path][name].[ext]',
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    }, {
      test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
      loader: 'url?limit=10000',
    }, {
      test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
      loader: 'file',
    }],
  },
  plugins: onProduction ? pluginsForDev.push(...pluginsForProd) : pluginsForDev,
};
