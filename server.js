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
  headers: { 'Access-Control-Allow-Origin': '*' },
}).listen(globalConfig.server.port, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }
  console.info('Listening at http://localhost:%s', globalConfig.server.port);
});
