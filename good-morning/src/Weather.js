import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

const ALT_KEY = "330a3c4b8036f80b7b7545b90ce54a86";

const Weather = () => {
  const [weather, setWeather] = useState(null),
    [lat, setLat] = useState(null),
    [lon, setLon] = useState(null),
    [temp, setTemp] = useState(true);

  useEffect(() => {
    console.log("Get Location");
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    getData(lat, lon);
  }, [lat, lon]);

  const getData = async (lat, lon) => {
    console.log("Get Data");
    const weatherData = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ALT_KEY}`
    );
    setWeather(weatherData.data);
  };

  const divStyle = { margin: "auto" };

  const renderCard = () => {
    const maxTemp = weather.main.temp_max;
    const minTemp = weather.main.temp_min;
    const actTemp = weather.main.temp;
    const sunrise = moment(weather.sys.sunrise).format('LT');
    console.log(sunrise)

    const displayTemp = (val) => {
      if (temp) {
        return (val - 273).toFixed(0);
      } else {
        return ((val - 273) * (9 / 5) + 32).toFixed(0);
      }
    };
    console.log(weather);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={divStyle}>{`${displayTemp(actTemp)}°${
          temp ? "C" : "F"
        }`}</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>{`Min ${displayTemp(minTemp)}°`}</div>
          <div>{`Max ${displayTemp(maxTemp)}°`}</div>
        </div>
        <div style={divStyle}>{weather.weather[0].main} Skies</div>
        <div style={divStyle}>{`${weather.name}, ${weather.sys.country}`}</div>
        <div style={divStyle}>{`Humidity: ${weather.main.humidity}%`}</div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>{`Sunrise: ${weather.sys.sunrise}`}</div>
          <div>{`Sunset: ${weather.sys.sunset}`}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="ui card" onClick={() => setTemp(!temp)}>
      {weather && renderCard()}
    </div>
  );
};

export default Weather;
