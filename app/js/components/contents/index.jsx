import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
    const { categories } = this.props;
    return null;
  }
}
