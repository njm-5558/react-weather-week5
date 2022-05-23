import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
   const [ready, setReady] = useState(false);
  const[weatherData, setWeatherData]=useState({});
  const[city, setCity]=useState(props.defaultCity);

function handleResponse(response){
  setWeatherData({
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date(response.data.dt*1000),
    description: response.data.weather[0].description,
    iconUrl:`http://openweathermap.org/img/wn/${response.data.Weather[0].icon}@2x.png`
  });
  setReady(true);
}

if (ready){
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100 mt-1 "
              />
            </div>
          </div>
        </form>
        < WeatherInfo data={weatherData}/>
      </div>
    );
}else {let apiKey = "54722218557f3b10aefdc56813c49314";

let apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`
axios.get(apiurl).then(handleResponse);
return"Loading..";
}}