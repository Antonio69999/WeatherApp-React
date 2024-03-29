import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Search from "./components/Search/Search";
import Forecast from "./components/Forecast/Forecast";
import Geolocation from "./components/Geolocation/Geolocation";

function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  console.log(import.meta.env.VITE_SOME_KEY);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const apiUrlCurrentWeather = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;
    const apiUrlForecast = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=3`;

    // Fetch current weather
    fetch(apiUrlCurrentWeather)
      .then((response) => response.json())
      .then((currentWeatherResponse) => {
        console.log("Current:", currentWeatherResponse);
        setCurrentWeather({
          city: searchData.label,
          ...currentWeatherResponse,
        });
      })
      .catch((err) => console.log(err));

    // Fetch forecast
    fetch(apiUrlForecast)
      .then((response) => response.json())
      .then((forecastResponse) => {
        console.log("Forcast:", forecastResponse);

        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Header />
      <Search onSearchChange={handleOnSearchChange} />
      <Weather data={currentWeather} />
      {forecastWeather && <Forecast data={forecastWeather} />}
      <Geolocation></Geolocation>
    </div>
  );
}

export default App;
