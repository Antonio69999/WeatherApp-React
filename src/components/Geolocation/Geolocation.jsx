import React, { Component } from "react";

class Geolocation extends Component {
  componentDidMount() {
    this.getLocation();
  }

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  getWeather = async (lat, lon) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Weather data:", data);
      } else {
        console.error("Failed to fetch weather data.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  getLocation = () => {
    this.getPosition()
      .then((position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude); // Use position.coords.latitude and position.coords.longitude
      })
      .catch((err) => console.error(err));
  };

  render() {
    return <div>Geolocation</div>;
  }
}

export default Geolocation;
