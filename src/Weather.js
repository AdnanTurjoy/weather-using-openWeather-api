import React, { useEffect, useState } from "react";
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=23c2fc831bf09a305c5257b045225388";
function Weather(props) {
  const [weathers, setWeathers] = useState([{}]);

  const [search, setSearch] = useState("");
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.weather[0].main);
  //       setWeathers(data);
  //     });
  // }, []);
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
      });
  };
  const getKelvinToDegree = (temp) => {
    return Math.round(temp - 273);
  };
  const getIcon = (icon) => {
    return "http://openweathermap.org/img/wn/" + `${icon}` + "@2x.png";
  };
  // const kelvin = 293;            weathers.main.temp
  // // convert kelvin to celsius
  // const celsius = kelvin - 273;
  // console.log(`The temperature is ${celsius} degrees Celsius.`);
  return (
    <section className="container">
      <form onSubmit={handleSearch} className="col-md-4 m-auto py-5">
        <div className="input-group mb-3">
          <input
            type="text"
            name="search"
            id="search"
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
    </section>
  );
}

export default Weather;
