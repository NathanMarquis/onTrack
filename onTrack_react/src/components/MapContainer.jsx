import { Map, Marker, PolyLine, GoogleApiWrapper } from "google-maps-react";
import React, {Component} from 'react';

export class MapContainer extends Component {
  render() {
    style = {
      width: '100%',
      height: '100%'
    };

    onMapClicked = () => {
      //handle click events
    };


    return (
    <Map 
      google={this.props.google}
      style={this.style}
      initialCenter={{
        lat: 40.854885,
        lng: -88.081807
      }}
      zoom={15}
      onClick={this.onMapClicked}>
    </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCh2j8eK3Hl0IKuSS9DOmXUixpRTEc7gsk'
})(MapContainer);
