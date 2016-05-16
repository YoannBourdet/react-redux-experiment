import React, { Component, PropTypes } from 'react';
import PaginationButton from './PaginationButton';

export default class Pagination extends Component {

  static propTypes = {
    activatedPage: PropTypes.number,
    items: PropTypes.number,
    maxButtons: PropTypes.number,
  };

  static defaultProps = {
    items: 20,
    activatedPage: 1,
    maxButtons: 5,
  }

  state = {
    activatedPage: this.props.activatedPage,
  }

  handleSelect(eventKey) {
    this.setState({ activatedPage: eventKey });
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

      if (
        i === 1 ||
        i >= startPages && i <= endPages ||
        i === items
      ) {
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

    return calculatedItems;
  }

  render() {
    return (
      <ul className="cp-pagination">
        {this.renderItems()}
      </ul>
    );
  }
}
