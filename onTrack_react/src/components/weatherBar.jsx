import { Link } from "react-router-dom";
import axios from "axios";

function WeatherBar() {
  axios.get("/weatherupdate").then((response) => {
    console.log("response from server: ", response);
  });
  let weather = []
  // for (item in response.data.success) {
  //   console.log(item)
  // }
  return (
    <div>
      <div>
        hi
      </div>
    </div>
  );
}

export default WeatherBar;