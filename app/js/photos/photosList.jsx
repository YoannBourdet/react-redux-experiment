import React, { Component } from 'react';
import $ from 'jquery';
import Photo from './photo';

export default class PhotosList extends Component {
 constructor() {
   super();
   this.state = {list: []};
 }
 componentDidMount() {
   this.getPhotosList();
 }
 getPhotosList() {
   $.ajax({
     url: this.props.url,
     dataType: 'json',
   }).done(function(data) {
     this.setState({list: data});
   }.bind(this));
 }
 render() {
   const photos = this.state.list.map((item, index) => {
     if (index < 10) {
       return <Photo key={index} url={item.url} thumbnailUrl={item.thumbnailUrl} title={item.title}/>;
     }
   });
   return (
     <div className="wrapper">
       {photos}
     </div>
   );
 }
}

PhotosList.propTypes = {
  url: React.PropTypes.string.isRequired,
};
