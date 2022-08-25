import { Link } from "react-router-dom";
import axios from "axios";

function WeatherBar() {
  axios.get("/weatherupdate").then((response) => {
    console.log("response from server: ", response);
  });
  
  return (
    <div className="d-flex">
      <div>
        
      </div>
    </div>
  );
}

export default WeatherBar;