import { useState } from "react";
import "../styles/WeatherForm.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="p-2 rounded-l-md focus:outline-none"
        type="text"
        onChange={onChange}
      ></input>
      <button className="p-2 input-button rounded-r-md">Search</button>
    </form>
  );
}
