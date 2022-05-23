import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
   const [ready, setReady] = useState(false);
  const[weatherData, setWeatherData]=useState({});


function handleResponse(response){
  setWeatherData({
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    iconUrl:
      "data:image/png;base64,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",
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