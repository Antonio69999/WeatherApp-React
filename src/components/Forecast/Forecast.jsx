import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./Forcast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Forecast({ data }) {
  const forecastData = data.forecast?.forecastday || [];

  const dayInAWeek = new Date().getDay();
  const forcastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  // console.log(forcastDays);

  return (
      <div className="row">
        {forecastData.slice(0, 5).map((item, index) => (
          <div className="col s12 m6" key={index}>
            <div className="weather card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{forcastDays[index]}</span>
                <p>
                  <img
                    src={item.day.condition.icon}
                    alt={item.day.condition.icon}
                  />
                </p>
                <span className="temperature">
                  Min temp : {Math.round(item.day.maxtemp_c)}°C Max temp :
                  {Math.round(item.day.mintemp_c)}°C
                </span>
                <div className="wind">
                  Wind Speed {item.day.maxwind_kph} km/h
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Forecast;
