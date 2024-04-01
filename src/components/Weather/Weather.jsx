import { useEffect, useState } from "react";
import './weather.css'
import temperatureImg from '../../assets/img/icone_temperature.png';
import conditionImg from '../../assets/img/icone_condition.png';
import windImg from '../../assets/img/icone_wind.png';
import humidityImg from '../../assets/img/icone_humidity.png';
import pressureImg from '../../assets/img/icone_pressure.png';
import uvImg from '../../assets/img/icone_uv.png';
import cloudImg from '../../assets/img/icone_cloud.png';
import vidibilityImg from '../../assets/img/icone_visibility.png';
import WeatherParameter from "../WeatherParameter/WeatherParameter";

function Weather({city}) {
    const [citySearched, setCitySearched] = useState(city);

    useEffect(() => {
      setCitySearched(city);
    }, [city])

    return (
      <div className="weather">
        <h1>Weather: {citySearched}</h1>

        <div className="weather-parameters">
          <WeatherParameter imgPath={temperatureImg} label={"Temperature"} value={"10°C"} ></WeatherParameter>
          <WeatherParameter imgPath={conditionImg} label={"Condition"} value={"Clear"} ></WeatherParameter>
          <WeatherParameter imgPath={windImg} label={"Wind speed"} value={"29.9km/h"} ></WeatherParameter>
          <WeatherParameter imgPath={humidityImg} label={"Humidity"} value={"32%"} ></WeatherParameter>
          <WeatherParameter imgPath={pressureImg} label={"Pressure"} value={"1017 / 30.04 in"} ></WeatherParameter>
          <WeatherParameter imgPath={uvImg} label={"UV index"} value={"1"} ></WeatherParameter>
          <WeatherParameter imgPath={cloudImg} label={"Cloud cover"} value={"0"} ></WeatherParameter>
          <WeatherParameter imgPath={vidibilityImg} label={"Visibility"} value={"16"} ></WeatherParameter>
        </div>
      </div>
    );
  }
  
  export default Weather;
  