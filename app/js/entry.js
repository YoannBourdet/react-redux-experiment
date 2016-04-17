import { staticPage } from '../../global.config.babel';
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
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './containers/app';

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById(staticPage.container.id)
);
