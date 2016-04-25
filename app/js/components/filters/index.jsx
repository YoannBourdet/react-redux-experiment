import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FiltersActions from '../../actions/filters';
import * as CategoriesActions from '../../actions/categories';

import AutoComplete from 'material-ui/AutoComplete';
import CheckboxList from './CheckboxList';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: {
    filters: bindActionCreators(FiltersActions, dispatch),
    categories: bindActionCreators(CategoriesActions, dispatch),
  },
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Filters extends Component {
  state = {
    dataSource: [],
    filter: null,
  };

  handleUpdateInput = (value) => {
    const { actions } = this.props;
    actions.filters.add('filter', value);
  };

  handleUpdateCheckbox = (value) => {
    const { actions } = this.props;
    actions.categories.fetch(value);
  };

  render() {
    return (
      <div className="filters">
        <AutoComplete
          dataSource={this.state.dataSource}
          filter={AutoComplete.fuzzyFilter}
          floatingLabelText="Type t, fuzzy search"
          fullWidth
          onUpdateInput={this.handleUpdateInput.bind(this)}
        />
        <CheckboxList
          items={[
            { label: 'characters', value: 'characters' },
            { label: 'comics', value: 'comics' },
            { label: 'creators', value: 'creators' },
            { label: 'events', value: 'events' },
            { label: 'series', value: 'series' },
            { label: 'stories', value: 'stories' },
          ]}
          onRequest={this.handleUpdateCheckbox.bind(this)}
        />
      </div>
    );
  }
}
