import { Link } from "react-router-dom";
import MapComponent from "../components/mapContainer";
// import { MapContainer, TileLayer, useMap } from "react-leaflet";
// import { Marker, Popup } from "react-leaflet";

// function MyComponent() {
//   const map = useMap();
//   console.log("map center:", map.getCenter());
//   return null;
// }


function Trips() {
  return (
    <div>
      <Link className="text-white" to={"/createtrip"}>
        Create trip
      </Link>
      <div className="mapBox">
      <MapComponent/>
      </div>
      <div>
        hi
      </div>
    </div>
  );
}

export default Trips;


