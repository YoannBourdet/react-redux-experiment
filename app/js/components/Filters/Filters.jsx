/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CategoriesActions from '../../actions/categories';

import FiltersCheckboxes from './FiltersCheckboxes';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: {
    categories: bindActionCreators(CategoriesActions, dispatch),
  },
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Filters extends Component {

  handleUpdateCheckbox = (category) => {
    const { actions } = this.props;
    actions.categories.fetch(category);
  };

  render() {
    return (
      <div className="filters cp-wrapper">
        <FiltersCheckboxes
          items={[
            { label: 'characters', value: 'characters' },
            { label: 'comics', value: 'comics' },
            { label: 'creators', value: 'creators' },
            { label: 'events', value: 'events' },
            { label: 'series', value: 'series' },
            { label: 'stories', value: 'stories' },
          ]}
          onRequest={::this.handleUpdateCheckbox}
        />
      </div>
    );
  }
}
