import React, { useState, useEffect } from "react";

function Geolocation() {
  const [weatherData, setWeatherData] = useState(null);

  const getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getWeather = async (lat, lon) => {
    const apiKey = '58c00ef5c6b64e00a2f102507230611';
console.log(lat, lon);
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data); // Store weather data in state
      } else {
        console.error("Failed to fetch weather data.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getPosition()
      .then((position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="row">
      <div className="col s12 m6 push-m3">
        <div className="weather card blue-grey darken-1">
          <div className="card-content white-text">
            {weatherData && (
              <div>
                <span className="card-title">{weatherData.location.name}</span>
                <p>
                  <img
                    src={weatherData.current.condition.icon}
                    alt={weatherData.current.condition.icon}
                  />
                </p>
                <span className="temperature">
                  {weatherData.current.temp_c}°C
                </span>
                <div className="wind">
                  Wind speed {weatherData.current.wind_kph} km/h (
                  {weatherData.current.wind_degree}°)
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Geolocation;
