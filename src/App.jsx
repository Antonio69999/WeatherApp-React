import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Search from "./components/Search/Search";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const apiUrlCurrentWeather = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=3&aqi=no&alerts=no`;

    fetch(apiUrlCurrentWeather)
      .then((response) => response.json())
      .then((weatherResponse) => {
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Header />
      <Search onSearchChange={handleOnSearchChange} />
      <Weather data={currentWeather} />
    </div>
  );
}

export default App;
