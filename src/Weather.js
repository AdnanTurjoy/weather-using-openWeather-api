import React, { useEffect, useState } from "react";
import { MdModeNight, MdWbSunny, MdFacebook } from "react-icons/md";
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=23c2fc831bf09a305c5257b045225388";
function Weather(props) {
  const [weathers, setWeathers] = useState([{}]);
  const [isDay, setIsDay] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        `${search}` +
        "&appid=23c2fc831bf09a305c5257b045225388"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.weather[0].main);
        setWeathers(data);
        getDay(data.weather[0].icon);
      });
  };
  const getDay = (day) => {
    day = [...day];
    if (day[2] === "d") {
      setIsDay("day");
    } else if (day[2] === "n") {
      setIsDay("night");
    } else {
      setIsDay("");
    }
  };
  const getKelvinToDegree = (temp) => {
    return Math.round(temp - 273);
  };
  const getIcon = (icon) => {
    return "http://openweathermap.org/img/wn/" + `${icon}` + "@2x.png";
  };

  return (
    <section className="container">
      <form onSubmit={handleSearch} className="col-md-4 m-auto py-5">
        <div className="input-group mb-3">
          <input
            // style={{ color: "black" }}
            type="text"
            name="search"
            id="search"
            placeholder="search city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-danger">
              Search
            </button>
          </div>
        </div>
      </form>
      {/* <h1>{isDay.localeCompare("night")}</h1> */}
      {isDay &&
        (isDay === "day" ? (
          <MdWbSunny style={{ width: "80px", height: "80px" }} />
        ) : (
          <MdModeNight style={{ width: "80px", height: "80px" }} />
        ))}

      <div className="weather-status text-white text-center">
        {" "}
        <h1>{weathers.name}</h1>
        <p>{weathers.sys && weathers.sys.country}</p>
        {weathers.weather && weathers.weather[0] && (
          <img src={getIcon(weathers.weather[0].icon)} alt="" />
        )}
        {weathers.main && (
          <div>
            <h3 className="display-2">
              <span>{getKelvinToDegree(weathers.main.temp)}</span>
              &deg;C
            </h3>
            <h1>humidity: {weathers.main.humidity}</h1>
          </div>
        )}
        {weathers.weather && weathers.weather[0] && (
          <h1>{weathers.weather[0].main}</h1>
        )}
      </div>
      <div className="icon-bar">
        <a href="https://www.facebook.com/adnan.turjoy.9" className="facebook">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="https://github.com/AdnanTurjoy" className="twitter">
          <i class="fa fa-github"></i>
        </a>
      
        <a href="https://www.linkedin.com/in/adnan005/" className="linkedin">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="#" className="youtube">
          <i class="fa fa-youtube"></i>
        </a>
      </div>
    </section>
  );
}

export default Weather;
