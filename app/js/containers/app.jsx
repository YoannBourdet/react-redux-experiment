import React, { Component } from 'react';

import { Header } from '../components/Header/';
import { Filters } from '../components/Filters/';
import { Contents } from '../components/Contents/';

import MyRawTheme from '../theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme(MyRawTheme);

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <Header />
          <Filters />
          <Contents />
        </div>
      </MuiThemeProvider>
    );
  }
}
