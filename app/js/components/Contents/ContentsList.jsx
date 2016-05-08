import React, { Component, PropTypes } from 'react';

import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class ContentsList extends Component {

  static propTypes = {
    category: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    onRequest: PropTypes.func,
  };

  renderListItems() {
    const { category, items } = this.props;

    switch (category) {
      case 'characters':
        return items.map((item, idx) =>
          <ListItem
            insetChildren
            key={idx}
            leftAvatar={
              <Avatar
                size={50}
                src={`${item.thumbnail.path}/portrait_small.${item.thumbnail.extension}`}
              />}
            primaryText={item.name}
          />
        );
      case 'creators':
        return items.map((item, idx) =>
          <ListItem
            insetChildren
            key={idx}
            primaryText={item.firstName}
            secondaryText={item.lastName}
          />
        );
      case 'comics':
      case 'events':
      case 'series':
        return items.map((item, idx) =>
          <ListItem
            insetChildren
            key={idx}
            leftAvatar={
              <Avatar
                size={50}
                src={`${item.thumbnail.path}/portrait_small.${item.thumbnail.extension}`}
              />}
            primaryText={item.title}
          />
        );
      case 'stories':
        return items.map((item, idx) =>
          <ListItem
            insetChildren
            key={idx}
            primaryText={item.title}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const { items } = this.props;
    const list = items.length === 0 ? null : (
      <List>
        {this.renderListItems()}
      </List>
    );

    return list;
  }
}
