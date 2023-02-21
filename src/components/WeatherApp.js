import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import "../styles/WeatherApp.css";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

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
      if (req.ok) {
        const json = await req.json();
        setWeather(json);
        setError("");
      } else {
        setError(`Could not load weather information for ${city}.`);
      }
    } catch (error) {
      setError("Could not load weather information.");
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    setError("");
    loadInfo(city);
  }

  return (
    <div className="weather-app-container">
      <WeatherForm onChangeCity={handleChangeCity} />
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <WeatherMainInfo className="test" weather={weather} />
      )}
    </div>
  );
}
