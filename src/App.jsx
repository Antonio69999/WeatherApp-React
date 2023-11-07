import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Search from "./components/Search/Search";

function App() {
  // const baseUri = process.env.REACT_APP_WEATHER_BASE_URI;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [city, setCity] = useState(["Lyon"]);
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState([]);
  const [wind, setWind] = useState([]);
  const [windDegree, setWindDegree] = useState([]);
  const [image, setImage] = useState([]);
  const [forcast, setForcast] = useState(null);

  useEffect(() => {
    const fetchWeatherData = () => {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setCity(data.location.name);
          setTemp(data.current.temp_c);
          setWind(data.current.wind_kph);
          setWindDegree(data.current.wind_degree);
          setImage(data.current.condition.icon);
        });
    };
    fetchWeatherData();
  }, [city, temp, wind, windDegree, image]);

  // console.log(data.location.name);

  const handleOnSearchChange = (searchData)  => {
    console.log(searchData);
  }

  return (
    <div className="App">
      <Header />
      <Search onSearchChange={handleOnSearchChange}></Search>
      {typeof data.location != "undefined" ? (
        <Weather
          city={city}
          temp={temp}
          wind={wind}
          windDegree={windDegree}
          image={image}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
