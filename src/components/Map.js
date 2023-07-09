import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import GoogleMap from "google-map-react";

// import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"

// const key = "AIzaSyDO4464aGgMxUrWV5zoXKGtN5-Gni_NI8g";

const key = "AIzaSyBePutf8tgFBptjVly4MA0n-HEwT346rQI";

const DEFAULT_LAT = 10.8035158;
const DEFAULT_LNG = 106.7126599;

// const proxyServer = 'https://cors-anywhere.herokuapp.com/corsdemo/';

const AnyReactComponent = ({ text }) => (
  <div style={{ color: "red", fontSize: 20 }}>{text}</div>
);

const Map = () => {
  const [geoLocation, setGeoLocation] = useState({
    latitude: "",
    longitude: "",
  });
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setGeoLocation({ latitude, longitude });
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  //   useEffect(() => {
  //     const {latitude, longitude} = geoLocation;
  //     fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=100&type=restaurant&key=${key}`)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ places: data.results }));
  //   }, [geoLocation]);

  const defaultProps = {
    center: {
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
    },
    zoom: 16,
  };

  const _onClick = ({ x, y, lat, lng, event }) =>
    console.log(x, y, lat, lng, event);

  //   const _onChildClick = (key, childProps) => {
  //     console.log("🚀 ~ file: Map.js:44 ~ onChildClick ~ childProps:", childProps)
  //     console.log("🚀 ~ file: Map.js:44 ~ onChildClick ~ key:", key)
  //   };

  const _onBoundsChange = (
    center,
    zoom /* , bounds, marginBounds */
  ) => {
    console.log("🚀 ~ file: Map.js:56 ~ Map ~ zoom:", zoom);
    console.log("🚀 ~ file: Map.js:56 ~ Map ~ center:", center);
  };

  const _onChildMouseEnter = (key /*, childProps */) => {
    console.log("🚀 ~ file: Map.js:62 ~ Map ~ key:", key);
  };

  return (
    <div style={{ width: "100%", borderRadius: 150, borderWidth: 10, borderColor: 'gray', margin: 20}}>
      <div style={{ width: "50%", display: "inline-block", height: "100vh" }}>
        <div style={{padding: 20}}>
            <table border={1} style={{borderCollapse: 'collapse', width: '100%'}}>
                <thead>
                    <tr>
                        <td>
                            Tên quán ăn
                        </td>
                        <td>
                            Địa điểm
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Quán 1
                        </td>
                        <td>
                            22 Ung văn kiêm, phường 17, quận bình thạnh, thành phố hồ chí minh
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Quán 2
                        </td>
                        <td>
                            128 Nguyễn gia trí, phường 17, quận bình thạnh, thành phố hồ chí minh
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
      </div>
      <div style={{ width: "50%", height: "100vh", display: "inline-block" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: key }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          initialCenter={{
            lat: geoLocation.latitude,
            lng: geoLocation.longitude,
          }}
          onClick={_onClick}
          onBoundsChange={_onBoundsChange}
          onChildMouseEnter={_onChildMouseEnter}
        >
          <AnyReactComponent
            lat={DEFAULT_LAT}
            lng={DEFAULT_LNG}
            text="Dirox"
          />
        </GoogleMap>
      </div>

      {/* <div style={{ height: "100vh", width: "50%" }}>    
      <GoogleMap
        bootstrapURLKeys={{ key: key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        initialCenter={{
          lat: geoLocation.latitude,
          lng: geoLocation.longitude
        }}
        onClick={_onClick}         
        onBoundsChange={_onBoundsChange}
        onChildMouseEnter={_onChildMouseEnter}
      >
        <AnyReactComponent
          lat={DEFAULT_LAT}
          lng={DEFAULT_LNG}
          text="Dirox"
        />
      </GoogleMap>
    </div> */}
    </div>
  );
};

export default Map;
