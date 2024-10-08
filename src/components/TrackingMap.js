import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './TrackingMap.css';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function TrackingMap() {
  return (
    <div className="TrackingMap">
      <h2>Tracking Map</h2>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default TrackingMap;
