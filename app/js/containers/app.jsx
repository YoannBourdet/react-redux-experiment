import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FiltersActions from '../actions/filters';

import AutoComplete from 'material-ui/AutoComplete';
import MyRawTheme from '../theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme(MyRawTheme);

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: {
    filters: bindActionCreators(FiltersActions, dispatch),
  },
});

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {

  state = {
    dataSource: [],
    filter: null,
  };

  handleUpdateInput = (value) => {
    const { actions } = this.props;
    actions.filters.add('filter', value);
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AutoComplete
            dataSource={this.state.dataSource}
            filter={AutoComplete.fuzzyFilter}
            floatingLabelText="Type t, fuzzy search"
            fullWidth
            onUpdateInput={this.handleUpdateInput.bind(this)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
