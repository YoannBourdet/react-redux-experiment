import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FiltersActions from '../actions';

import AutoComplete from 'material-ui/AutoComplete';
import MyRawTheme from '../theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme(MyRawTheme);

const mapStateToProps = (state) => ({ filters: state.filter });

const mapDispatchToProps = (dispatch) => ({
  actions: {
    filters: bindActionCreators(FiltersActions, dispatch),
  },
});


class App extends Component {

  state = {
    dataSource: [],
  };

  handleRequest() {
    console.log('request ready');
  }

  handleUpdate() {
    console.log('update ready');
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AutoComplete
            dataSource={this.state.dataSource}
            filter={AutoComplete.fuzzyFilter}
            floatingLabelText="Type t, fuzzy search"
            fullWidth
            onNewRequest={this.handleRequest.bind(this)}
            onUpdateInput={this.handleUpdate.bind(this)}
          />
          <br/>
          <AutoComplete
            dataSource={this.state.dataSource}
            filter={AutoComplete.caseInsensitiveFilter}
            floatingLabelText="Type r, case insensitive"
            fullWidth
            onNewRequest={this.handleRequest.bind(this)}
            onUpdateInput={this.handleUpdate.bind(this)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
