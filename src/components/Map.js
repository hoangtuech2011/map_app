import React, { useCallback, useEffect, useMemo, useState } from "react";
import GoogleMap from "google-map-react";

// import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"

// const key = "AIzaSyDO4464aGgMxUrWV5zoXKGtN5-Gni_NI8g";

const key = 'AIzaSyBePutf8tgFBptjVly4MA0n-HEwT346rQI';

const DEFAULT_LAT = 10.8035158;
const DEFAULT_LNG = 106.7126599;



const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Map = () => {

  const [geoLocation, setGeoLocation] = useState({latitude: '', longitude: ''});
  console.log("🚀 ~ file: Map.js:17 ~ Map ~ geoLocation:", geoLocation);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const {latitude, longitude} = position.coords;
        setGeoLocation({latitude, longitude})
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
  
    } else {
      console.log("Not Available");
    }
  }, []);
  const defaultProps = {
    center: {
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
    },
    zoom: 16,
  };

  const  onChildClick = useCallback((key, childProps) => {
    console.log("🚀 ~ file: Map.js:44 ~ onChildClick ~ childProps:", childProps)
    console.log("🚀 ~ file: Map.js:44 ~ onChildClick ~ key:", key)    
  }, [])


  return (
    <div style={{ height: "100vh", width: "100%" }}>

    
      <GoogleMap
        bootstrapURLKeys={{ key: key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        initialCenter={{
          lat: geoLocation.latitude,
          lng: geoLocation.longitude
        }}
        onChildClick={onChildClick}
      >
        <AnyReactComponent
          lat={DEFAULT_LAT}
          lng={DEFAULT_LNG}
          text="My Marker"
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
