import React, { useState, useEffect } from "react";
import { compass, displayTemp } from "./helpers/helpers";
import moment from "moment";
import axios from "axios";

const ALT_KEY = "330a3c4b8036f80b7b7545b90ce54a86";

const Weather = () => {
  const [weather, setWeather] = useState(null),
    [lat, setLat] = useState(null),
    [lon, setLon] = useState(null),
    [temp, setTemp] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    getData(lat, lon);
  }, [lat, lon]);

  const getData = async (lat, lon) => {
    const weatherData = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ALT_KEY}`
    );
    setWeather(weatherData.data);
  };

  const renderCard = () => {
    const maxTemp = weather.main.temp_max,
      minTemp = weather.main.temp_min,
      actTemp = weather.main.temp,
      sunrise = moment(weather.sys.sunrise * 1000).format("LT"),
      sunset = moment(weather.sys.sunset * 1000).format("LT"),
      uMeasure = temp ? "C" : "F",
      weatherDescription =
        weather.weather[0].description.charAt(0).toUpperCase() +
        weather.weather[0].description.slice(1),
      cardStyle = {
        display: "flex",
        flexDirection: "column",
      },
      divStyle = { margin: "auto" },
      windStyle = {
        position: "absolute",
        top: "50px",
        left: "50px",
        borderLeft: "2px solid black",
        height: "40px",
        width: "20px",
        zIndex: "2",
        transform: `rotate(${weather.wind.deg - 180}deg)`,
        transformOrigin: "top left",
      };

    return (
      <div style={cardStyle}>
        <h3 style={divStyle}>{`Current Weather in`}</h3>
        <h3 style={divStyle}>{`${weather.name}`}</h3>
        <h1 style={divStyle}>{`${displayTemp(temp, actTemp)}°${uMeasure}`}</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>{`Min ${displayTemp(temp, minTemp)}°${uMeasure}`}</div>
          <div>{`Max ${displayTemp(temp, maxTemp)}°${uMeasure}`}</div>
        </div>
        <div className="guageContainer" style={divStyle}>
          <div className="circle">
            <div className="center" style={windStyle} />
          </div>
        </div>
        <div style={divStyle}>
          <b>{`${compass(weather.wind.deg)} at ${weather.wind.speed}mph`}</b>
        </div>
        <div style={divStyle}>{weatherDescription}</div>
        <div style={divStyle}>{`Humidity: ${weather.main.humidity}%`}</div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            Sunrise:
            <div>{sunrise}</div>
          </div>
          <div>
            Sunset:
            <div>{sunset}</div>
          </div>
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
