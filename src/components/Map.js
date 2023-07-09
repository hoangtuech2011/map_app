import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import GoogleMap from "google-map-react";
import EditIcon from "./icons/edit";
import DeleteIcon from "./icons/delete";
import SearchIcon from "./icons/search";

// import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"

// const key = "AIzaSyDO4464aGgMxUrWV5zoXKGtN5-Gni_NI8g";

const key = "AIzaSyBePutf8tgFBptjVly4MA0n-HEwT346rQI";

const DEFAULT_LAT = 10.8035158;
const DEFAULT_LNG = 106.7126599;

// const proxyServer = 'https://cors-anywhere.herokuapp.com/corsdemo/';

const listRestaurant = [
  {
    id: 1,
    storeName: "Cơm Gà Xối Mỡ/ Fired Chicken Rice",
    description: "Cơm gà ngon bổ rẻ",
    location:
      "69/44 Đ. D2, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam",
  },
  {
    id: 2,
    storeName: "LALA Sky Lounge",
    description: "Đồ uống ngon, view đẹp, cuối tuần có nhạc sống",
    location:
      "69/2/29 Nguyễn Gia Trí, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam",
  },
  {
    id: 3,
    storeName: "Nha Nam Books Coffee",
    description: "View Đẹp, Có sách và vô cùng yên tĩnh",
    location:
      "24A Đường D5, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh 700000, Vietnam",
  },
  {
    id: 4,
    storeName: "Chay Mầm Xanh",
    description: "Đồ ăn ngon",
    location:
      "46 Nguyễn Gia Trí, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam",
  },
  {
    id: 5,
    storeName: "Hồng Trà Ngô Gia Nguyễn Gia Trí",
    description: "Rẻ và ngon",
    location:
      "1 Nguyễn Gia Trí, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam",
  },
];

const AnyReactComponent = ({ text }) => (
  <div style={{ color: "red", fontSize: 20 }}>{text}</div>
);

export const SearchComponent = ({ placeholder }) => {
  return (
    <div
      style={{
        float: "left",
        width: 200,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#fff",
        flexDirection: "row",
        borderWidth: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          paddingTop: 5,
          paddingLeft: 10,
        }}
      >
        <SearchIcon />
      </div>
      <div style={{ display: "inline-block" }}>
        <input
          style={{ borderWidth: 0, marginLeft: 15, marginTop: 5 }}
          type="text"
          id="name"
          name="name"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

const Map = () => {
  const [geoLocation, setGeoLocation] = useState({
    latitude: "",
    longitude: "",
  });

  const [restaurants, setRestaurant] = useState(listRestaurant);
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
    <div
      style={{
        width: "100%",
        borderRadius: 20,
        borderWidth: 10,
        backgroundColor: "#F7F7F7",
        margin: 20,
      }}
    >
      <div
        style={{
          width: "50%",
          display: "inline-block",
          height: "100vh",
          verticalAlign: "top",
        }}
      >
        <div style={{ padding: 20 }}>
          <SearchComponent placeholder="Search Store" />

          <table
            border={0}
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <thead>
              <tr
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: "#9E9E9E",
                  borderBottomStyle: "solid",
                  textAlign: "left",
                  borderOpacity: 0.5,
                  height: 40,
                }}
              >
                <td style={{ fontWeight: "bold", marginBottom: 10 }}>
                  Store Name
                </td>
                <td style={{ fontWeight: "bold" }}>Description</td>
                <td style={{ fontWeight: "bold" }}>Location</td>
                <td style={{ fontWeight: "bold" }}>Action</td>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((item) => {
                return (
                  <tr
                    style={{
                      borderBottomWidth: 0.5,
                      borderBottomColor: "#9E9E9E",
                      borderBottomStyle: "solid",
                      textAlign: "left",
                      borderOpacity: 0.5,
                    }}
                  >
                    <td style={{ paddingBottom: 8, paddingTop: 8 }}>
                      {item.storeName}
                    </td>
                    <td>{item.description}</td>
                    <td>{item.location}</td>
                    <td>
                      <EditIcon />
                      <DeleteIcon />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div style={{ float: "right", marginTop: 30 }}>
            <span
              style={{
                backgroundColor: "#006FFD",
                padding: 10,
                color: "#fff",
                borderRadius: 10,
              }}
              type="button"
            >
              Add Store
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "48%",
          height: "100vh",
          display: "inline-block",
        }}
      >
        <div
          style={{ height: "5vh", marginTop: 20, marginBottom: 10 }}
        >
          <SearchComponent placeholder="Search Location" />
        </div>
        <div style={{ height: "90vh" }}>
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
