import React from "react";
import Days from "../Days/Days"

function Weather({ data }) {
  if (!data) {
    return null; // Return nothing if data is not available yet
  }

  function handleClickDay(e) {
    console.log(e.target);
    document.querySelector(".clickedDays").classList.remove("clickedDays");
    e.target.classList.add("clickedDays");
  }

  return (
    <div className="row">
      <div className="col s12 m6 push-m3">
        <div className="weather card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{data.location.name}</span>
            <p>
              <img
                src={data.current.condition.icon}
                alt={data.current.condition.icon}
              />
            </p>
            <span className="temperature">{data.current.temp_c}°C</span>
            <div className="wind">
              Vent {data.current.wind_kph} km/h ({data.current.wind_degree}°)
            </div>
          </div>
          <Days handleClickDay={handleClickDay} />
        </div>
      </div>
    </div>
  );
}

export default Weather;
