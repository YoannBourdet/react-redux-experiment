import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentsList from './ContentsList';
import Pagination from './Pagination';

import * as CategoriesActions from '../../actions/categories';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: {
    categories: bindActionCreators(CategoriesActions, dispatch),
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
    const { actions } = this.props;
    actions.categories.fetch(category, Object.assign({}, {
      offset,
    })).then(() => {
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

    return (
      <div className="cp-wrapper">
        {list}
        {pagination}
      </div>
    );
  }
}
