import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import "../styles/WeatherApp.css";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "london") {
    try {
      const req = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=173976480d4e46fba26144654232002&q=${city}&aqi=no`
      );
      const json = await req.json();
      setWeather(json);
      console.log(json);
    } catch (error) {
      console.log("error");
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="weather-app-container">
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo className="test" weather={weather} />
    </div>
  );
}
