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

  handleUpdateContent = (parameters) => {
    const { category, offset } = parameters;
    const { actions } = this.props;
    actions.categories.fetch(category, Object.assign({}, {
      offset,
    }));
  };

  render() {
    const { categories: { category, results } } = this.props;
    const list = !results ? null :
      <ContentsList
        category={category}
        items={results}
      />;

    const pagination = !category ? null :
      <Pagination
        category={category}
        items={20}
        limit={20}
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
