import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function WeatherBar() {
  const [weather, setWeather] = useState([]);
  let weatherOutput = [];
  useEffect(() => {
    axios.get("/weatherupdate").then((response) => {
      console.log("response from server: ", response);
      // Getting only daytime weather forecasts
      let weatherData = response.data.success;
      for (let i = 0; i < weatherData.length; i++) {
        if (weatherData[i].isDaytime) {
          weatherOutput.push(weatherData[i]);
        }
      }
      setWeather(weatherOutput);
    });
  }, []);
  useEffect(()=> {

  })
  // let weatherList = weather.map((item, index) => {
  //   console.log(item);
  //   return (
  //     <div>
  //       <p>{item["name"]}</p>
  //       <p>{item.shortforecast}</p>
  //     </div>
  //   );
  // });
  // console.log("weatherOutput ", weatherOutput);

  return (
    <div>
      <p>Hello everyone</p>
      {weather.map((item, index) => {
        return (
        <div>
          <p>{item["name"]}</p>
          <p>{item.shortforecast}</p>
        </div>
        )
      })}
    </div>
  );
}

export default WeatherBar;
