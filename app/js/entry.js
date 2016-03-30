const globalConfig = require('../../global.config');
/* styles */
import '../scss/main';
/* App */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <App
    items={[
      {name: 'john'},
      {name: 'harry'},
      {name: 'yoann'},
      {name: 'larry'},
      {name: 'kevin'},
      {name: 'bob'},
      {name: 'bobby'},
      {name: 'jah'},
      {name: 'michael'},
      {name: 'jennifer'},
      {name: 'shawn'},
      {name: 'danny'},
      {name: 'brian'},
      {name: 'clide'},
      {name: 'foxy'},
    ]}
  />,
  document.getElementById(globalConfig.staticPage.container.id)
);
