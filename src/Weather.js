import React, { useEffect, useState } from "react";
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=23c2fc831bf09a305c5257b045225388";
function Weather(props) {
  const [weather, setWeather] = useState({});
  const [weatherMain, setWeatherMain] = useState({});
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeatherMain(data.main);
        setWeather(data);
      });
  }, []);
  console.log(weather.main);
  return (
    <section className="">
      <h1>Weather App</h1>
      <h1>{weather.name}</h1>
      <p>{weather.visibility}</p>
      <p>{weatherMain.temp}</p>
      {/* {weatherMain.map((wm) => {
        const { temp } = weatherMain;
        return <p>{temp}</p>;
      })} */}
    </section>
  );
}

export default Weather;
