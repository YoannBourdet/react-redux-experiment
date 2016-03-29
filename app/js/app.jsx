import React, { Component } from 'react';
import PhotosList from './photos/photosList';

export default class App extends Component {
 render() {
   return (
     <div className="app">
       <PhotosList url="http://jsonplaceholder.typicode.com/photos"/>
     </div>
   );
 }
}
