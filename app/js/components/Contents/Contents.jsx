import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentsList from './ContentsList';
import Pagination from '../Commons/Pagination';

import * as CategoriesActions from '../../actions/categories';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: {
    categories: bindActionCreators(CategoriesActions, dispatch),
  },
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Contents extends Component {

  render() {
    console.log(this.props);
    const { categories: { category, results } } = this.props;
    const list = !results ? null :
      <ContentsList
        category={category}
        items={results}
      />;

    return (
      <div className="cp-wrapper">
        {list}
        <Pagination
          items={20}
        />
      </div>
    );
  }
}
