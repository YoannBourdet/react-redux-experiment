import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/checkbox';

export default class CheckboxList extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    onRequest: PropTypes.func.isRequired,
  };

  state = {
    itemChecked: 'characters',
  };

  isChecked(label) {
    return this.state.itemChecked === label;
  }

  handleCheck(label) {
    this.setState({ itemChecked: label });
    this.props.onRequest(label);
  }

  render() {
    const { items } = this.props;
    const list = items.map((item, index) =>
      <Checkbox
        defaultChecked={this.isChecked(item.label)}
        defaultValue={item.value}
        key={index}
        label={item.label}
        onCheck={this.handleCheck.bind(this, item.label)}
      />
    );

    return(
      <div>
        {list}
      </div>
    );
  }
}
