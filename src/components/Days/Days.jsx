import "./Days.css";

function Days({ handleClickDay }) {
  return (
    <div className="card-action">
      <a href="#" className="clickedDays" onClick={handleClickDay}>
        Monday
      </a>
      <a href="#" onClick={handleClickDay}>
        Tusday
      </a>
      <a href="#" onClick={handleClickDay}>
        Wednesday
      </a>
      <a href="#" onClick={handleClickDay}>
        Thursday
      </a>
      <a href="#" onClick={handleClickDay}>
        Friday
      </a>
      <a href="#" onClick={handleClickDay}>
        Saturday
      </a>
      <a href="#" onClick={handleClickDay}>
        Sunday
      </a>
    </div>
  );
}

export default Days;
