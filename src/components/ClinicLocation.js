import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "../styles/App.css";

export default function ClinicLocation() {
  const MapPage = () => {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyB-y43V7LruX8tnn_j_nGRWjp0eRGaJpt8"
    });

    const position = { lat: -15.715105056762695, lng: -47.88364791870117 };

    return (
      <div className="map">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={position}
            zoom={14}
          >
            <Marker
              position={position}
              options={{
                label: {
                  text: "Posição Teste",
                  className: "map-marker",
                },
              }}
            />
          </GoogleMap>
        ) : <></>}
      </div>
    );
  };

  return <MapPage />;
}
