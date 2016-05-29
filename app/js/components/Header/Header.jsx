/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FiltersActions from '../../actions/filters';
import * as CategoriesActions from '../../actions/categories';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: {
    categories: bindActionCreators(CategoriesActions, dispatch),
    filters: bindActionCreators(FiltersActions, dispatch),
  },
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends Component {

  handleButtonLeft() {}

  handleUpdateInput = (e) => {
    const value = e.target.value;
    const { actions, categories: { category } } = this.props;
    actions.filters.add('contents', value);

    const query = !value ? {} : {
      nameStartsWith: value,
    };

    actions.categories.fetch(category, query);
  };

  render() {
    return (
      <AppBar
        onLeftIconButtonTouchTap={::this.handleButtonLeft}
        style={{
          backgroundColor: 'black',
        }}
        title="Marvel World"
        titleStyle={{
          color: 'rgb(244, 67, 54)',
          fontWeight: 'bold',
        }}
      >
        <TextField
          hintStyle={{
            color: 'rgba(255, 255, 255, 0.298039)',
            fontStyle: 'italic',
          }}
          hintText="Search by name"
          inputStyle={{
            color: 'rgb(255, 255, 255)',
          }}
          onChange={::this.handleUpdateInput}
          style={{
            width: '45%',
            marginTop: '7px',
          }}
          type="text"
        />
      </AppBar>
    );
  }
}
