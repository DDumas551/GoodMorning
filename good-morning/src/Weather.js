import React, { useState, useEffect } from "react";
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

  const renderCard = () => {
    console.log(weather);
    const fOrC = temp
      ? (weather.main.temp - 273).toFixed(0)
      : ((weather.main.temp - 273) * (9 / 5) + 32).toFixed(0);
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{`${fOrC}°${temp ? "C" : "F"}`}</h1>
        <div>{weather.weather[0].main}</div>
        <div>{`${weather.name}, ${weather.sys.country}`}</div>
        <div>{`Humidity: ${weather.main.humidity}%`}</div>
        <div>{`Current Temp: ${fOrC}°${temp ? "C" : "F"}`}</div>
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
