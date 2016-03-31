/* eslint no-console: 0 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const globalConfig = require('./global.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
  proxy: {
    '*': 'http://developer.marvel.com',
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
}).listen(globalConfig.server.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Listening at http://localhost:%s', globalConfig.server.port);
});
