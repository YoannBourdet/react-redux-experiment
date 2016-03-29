import React, { Component } from 'react';

export default class HelloMessage extends Component {
  render() {
    return <div>Hello buddy, my name is {this.props.name}.</div>;
  }
}

HelloMessage.propTypes = {
  name: React.PropTypes.string.isRequired,
};
