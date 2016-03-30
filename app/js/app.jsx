import React, {Component, PropTypes} from 'react';
// import PhotosList from './photos/photosList';

export default class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  handleClick() {}

  render() {
    const {items} = this.props;
    const first = items.slice(0, 3);
    const last = items.slice(3);
    return (
      <div className="app">
        <div className="row" onClick={this.handleClick}>
          {first.map((item, i) =>
            <div key={i}>
              <span>{item.name}</span>
            </div>
          )}
        </div>
        <div className="row">
          {last.map((item, i) =>
            <div key={i}>
              <span>{item.name}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
