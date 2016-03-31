const globalConfig = require('../../global.config');
import injectTapEventPlugin from 'react-tap-event-plugin';
/* Needed for onTouchTap
 * Can go away when react 1.0 release
 * Check this repo:
 * https://github.com/zilverline/react-tap-event-plugin
 */
injectTapEventPlugin();
/* styles */
import '../scss/main';
/* App */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';

ReactDOM.render(
  <App/>,
  document.getElementById(globalConfig.staticPage.container.id)
);
