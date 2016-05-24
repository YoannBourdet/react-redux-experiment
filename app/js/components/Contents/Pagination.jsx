import React, { Component, PropTypes } from 'react';
import PaginationButton from './PaginationButton';

export default class Pagination extends Component {

  static propTypes = {
    activatedPage: PropTypes.number,
    disabled: PropTypes.bool,
    category: PropTypes.string.isRequired,
    items: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    maxButtons: PropTypes.number,
    onRequest: PropTypes.func,
  };

  static defaultProps = {
    activatedPage: 1,
    maxButtons: 7,
  }

  state = {
    activatedPage: this.props.activatedPage,
  }

  handleSelect(eventKey) {
    if (!this.props.disabled) {
      const { category, limit, onRequest } = this.props;
      const offset = (eventKey * limit) - limit;
      this.setState({ activatedPage: eventKey });
      if(onRequest) {
        onRequest({ category, offset });
      }
    }
  }

  renderItems() {
    const { items, maxButtons } = this.props;
    const calculatedItems = [];
    const rangeBefore = this.state.activatedPage - parseInt(maxButtons / 2);
    const rangeAfter = this.state.activatedPage + parseInt(maxButtons / 2);

    let startPages = rangeBefore < 1 ? 1 : rangeBefore;
    let endPages = rangeAfter > items ? items : rangeAfter;

    if (startPages === 1) {
      endPages = maxButtons;
    }

    if(endPages === items) {
      startPages = items - maxButtons + 1;
    }

    for(let i = 1; i <= items; i++) {
      if (i > startPages && i < endPages) {
        const element = (<span>{i}</span>);

        calculatedItems.push(
          <PaginationButton
            children={element}
            handleSelect={this.handleSelect.bind(this)}
            key={i}
            pageNumber={i}
            selected={this.state.activatedPage === i}
          />
        );
      }
    }

    if (endPages !== maxButtons) {
      calculatedItems.unshift(
        <PaginationButton
          children={<span>...</span>}
          key={0}
        />
      );
    }

    if (startPages !== items - maxButtons + 1) {
      calculatedItems.push(
        <PaginationButton
          children={<span>...</span>}
          key={items + 1}
        />
      );
    }

    return calculatedItems;
  }

  renderFirstLastButton(num) {
    const element = (<span>{num}</span>);
    return (
      <PaginationButton
        children={element}
        handleSelect={this.handleSelect.bind(this)}
        pageNumber={num}
        selected={this.state.activatedPage === num}
      />
    );
  }

  renderGoToButton(icon, key) {
    const element = (<i className={`fa fa-${icon}`}></i>);
    return (
      <PaginationButton
        children={element}
        handleSelect={this.handleSelect.bind(this, key)}
      />
    );
  }

  render() {
    const { items } = this.props;
    const first = 1;
    const last = items;
    return (
      <ul className="cp-pagination">
        {this.renderGoToButton('angle-double-left', first)}
        {this.renderGoToButton(
          'angle-left',
          this.state.activatedPage <= first ?
          first :
          this.state.activatedPage - 1
        )}
        {this.renderFirstLastButton(first)}
        {this.renderItems()}
        {this.renderFirstLastButton(last)}
        {this.renderGoToButton(
          'angle-right',
          this.state.activatedPage >= items ?
          items :
          this.state.activatedPage + 1
        )}
        {this.renderGoToButton('angle-double-right', last)}
      </ul>
    );
  }
}
