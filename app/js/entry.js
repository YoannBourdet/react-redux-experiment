const globalConfig = require('../../global.config');
/* styles */
import '../scss/main';
/* App */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App/>, document.getElementById(globalConfig.staticPage.container.id));
