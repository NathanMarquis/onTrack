import { Link } from "react-router-dom";
import MapComponent from "../components/mapContainer";
import WeatherBar from "../components/weatherBar";

function Trips() {
  return (
    <div>
      <div className="mapBox">
      <MapComponent/>
      </div>
      <div>
        <WeatherBar/>
      </div>
    </div>
  );
}

export default Trips;


