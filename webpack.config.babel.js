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
      // 'webpack-dev-server/client?http://localhost:' + server.port,
      // 'webpack/hot/dev-server',
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
  plugins: onProduction ? pluginsForDev.push(...pluginsForProd) : pluginsForDev,
};
