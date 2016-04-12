/* eslint no-console: 0 */
const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = require('express')();
const proxy = require('express-http-proxy');

const config = require('./webpack.config');
const globalConfig = require('./global.config');

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
      colors: true,
    },
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
}));

app.use(webpackHotMiddleware(compiler));

app.use('/proxy', proxy('www.google.com', {
  filter: function(req, res) {
    console.log('filter', res);
    return req.method == 'GET';
  },
  forwardPath: function(req, res) {
    console.log('path', res);
    return require('url').parse(req.url).path;
  }
}));

app.listen(globalConfig.server.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Listening at http://localhost:%s', globalConfig.server.port);
});
