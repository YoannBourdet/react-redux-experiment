import React, { Component, PropTypes } from 'react';

export default class Pagination extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    handleSelect: PropTypes.func,
    pageNumber: PropTypes.number,
    selected: PropTypes.bool,
  };

  handleSelect(eventKey) {
    const { handleSelect } = this.props;
    if(handleSelect) {
      handleSelect(eventKey);
    }
  }

  render() {
    const { children, pageNumber, selected } = this.props;
    return (
      <li
        className={selected ? 'selected' : null}
        onClick={this.handleSelect.bind(this, pageNumber)}
      >
        {children}
      </li>
    );
  }
}
