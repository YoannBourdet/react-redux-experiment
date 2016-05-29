/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentsList from './ContentsList';
import Pagination from './Pagination';

import * as FiltersActions from '../../actions/filters';
import * as CategoriesActions from '../../actions/categories';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: {
    categories: bindActionCreators(CategoriesActions, dispatch),
    filters: bindActionCreators(FiltersActions, dispatch),
  },
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Contents extends Component {
  state = {
    disabledPagination: false,
  }

  handleUpdateContent = (parameters) => {
    this.setState({ disabledPagination: !this.state.disabledPagination });
    const { category, offset } = parameters;
    const { actions, filters } = this.props;

    const query = !filters.contents ?
      { offset } :
      { offset, nameStartsWith: filters.contents };

    actions.categories.fetch(category, query).then(() => {
      this.setState({ disabledPagination: !this.state.disabledPagination });
    });
  };

  render() {
    const { categories: { category, data } } = this.props;
    const list = !data ? null :
      <ContentsList
        category={category}
        items={data.results}
      />;

    const pagination = !category && !data ? null :
      <Pagination
        category={category}
        disabled={this.state.disabledPagination}
        items={~~(data.total / data.limit)}
        limit={data.limit}
        onRequest={::this.handleUpdateContent}
      />;

    const results = !data ? 0 : data.total;

    return (
      <div className="cp-wrapper">
        <span>{results} results found</span>
        {list}
        {pagination}
      </div>
    );
  }
}
