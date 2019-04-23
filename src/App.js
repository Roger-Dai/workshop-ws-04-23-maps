import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <h1>Hello Google Maps</h1>
      </div>
    ) 
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCwOLP5P_hRzjqK5SrdZNviwXf3QyCJJBg'
})(MapContainer);