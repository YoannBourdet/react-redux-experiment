/* eslint no-console: 0 */
import webpack from 'webpack';
import express from 'express';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './webpack.config.babel';
import { server } from './global.config.babel';

const compiler = webpack(config);
const app = express();

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

app.listen(server.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Listening at http://localhost:%s', server.port);
});
