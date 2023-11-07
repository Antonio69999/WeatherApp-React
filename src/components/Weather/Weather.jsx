import Days from "../Days/Days";
import "./Weather.css";

// Import all icons
import sun from "../../assets/icons/sun.svg";
import cloudysun from "../../assets/icons/cloudy-sun.svg";
import cloudy from "../../assets/icons/cloudy.svg";
import rainy from "../../assets/icons/rainy.svg";
import snowy from "../../assets/icons/snowy.svg";
import storm from "../../assets/icons/storm.svg";
import thunder from "../../assets/icons/thunder.svg";
import windy from "../../assets/icons/windy.svg";

function Weather({ city, temp, wind, windDegree, image }) {
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
            <span className="card-title">{city}</span>
            <p>
              <img src={image} alt={image} />
            </p>
            <span className="temperature">{temp}°C</span>
            <div className="wind">
              Vent {wind} km/h ({windDegree}°)
            </div>
          </div>
          <Days handleClickDay={handleClickDay} />
        </div>
      </div>
    </div>
  );
}

export default Weather;
