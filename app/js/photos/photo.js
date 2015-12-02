import React, { Component } from 'react';

export default class Photo extends Component {
  render() {
    return (
      <div {...this.props} className="photo">
        <img src={this.props.thumbnailUrl}/>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

Photo.propTypes = {
  url: React.PropTypes.string.isRequired,
  thumbnailUrl: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};
