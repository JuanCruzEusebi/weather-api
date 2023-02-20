import { useState } from "react"
import WeatherForm from "./WeatherForm"

export default function WeatherApp() {

    const [weather, setWeather] = useState(null)

    async function loadInfo(city = 'london') {
        try {
            const req = await fetch(`http://api.weatherapi.com/v1/current.json?key=173976480d4e46fba26144654232002&q=${city}&aqi=no`)
            const json = await req.json();
            setWeather(json)
            console.log(json);
        } catch (error) {
            console.log('error')
        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
        </div>
    )
}