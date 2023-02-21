import "../styles/WeatherMainInfo.css";

export default function WeatherMainInfo({ weather }) {
  return (
    <div className="flex gap-10 text-lg query text-white">
      {weather && (
        <div className="text-xl h1-container flex-col ">
          <h1 className="opacity-90 text-2xl weather-heading">
            {weather.location.name}, {weather.location.region},{" "}
            {weather.location.country}
          </h1>
          <div className="data-container flex-col font-normal">
            <h3>{weather.current.condition.text}</h3>
            <p>Temperature: {weather.current.temp_c} C</p>
            <p>Feels like: {weather.current.feelslike_c} C</p>
            <p>Wind speed: {weather.current.wind_kph} km/h</p>
          </div>
        </div>
      )}
      <div>
        <div className="iframe">
          <iframe
            title="iframe"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!1f10!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx&z=2`}
            width="450"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="frame"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
