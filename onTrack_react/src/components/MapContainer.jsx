import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapkey = 'AIzaSyCh2j8eK3Hl0IKuSS9DOmXUixpRTEc7gsk'

const MapContainer = () => {

  const mapStyles = {
    height: "50vh",
    width: "100%",
    display: "flex"
  };

  const defaultCenter = {
    lat: 32.4228638826,
    lng: -99.8391523672
  }

  const [currentPosition, setCurrentPosition] = useState(null);

  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  return (
    <LoadScript
      googleMapsApiKey={mapkey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition || defaultCenter}>
      </GoogleMap>
    </LoadScript>
  )
}
export default MapContainer;