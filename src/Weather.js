import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(props){
   const [ready, setReady] = useState(false);
  const[weatherData, setWeatherData]=useState({});

function handleResponse(response){
  setWeatherData({
    city: response.data.name,
    date: "wednesday 07:00",
    description: response.data.weather[0].description,
    iconUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAw1BMVEX///8ate3/wQZGwO//vgD/vAAAsuwAsOz/ugD/78z//vr/8ND/+OgAtPP/+u7/673/y0n/2of/137z+/7/9eD/0Wb/5a7/7cT/yTD/35n/3ZL/xS3/8tf/xjX/zFD/1nnn9v3H6fn/03Cw4Pfb8fthxvH/ykD/4qH/wh//zVia1/V0zPIruedguc+GvLquvpjcwVjawWOI0vTAwX8AtPpSuNV6usCjv5+0v4zLwHXqwkfwwjSUvatvu8dIueDTwG3N1rfp0k6rAAAEZklEQVR4nO2Za3uiOBSATUwAsYI3bK3YSiuUsU4747Rz2Z3b//9Vm4CooJITINt9dvJ+5OmTvpxzODmJrZZGo9FoNBqNRqMpZ+xFk7d2cCKC6VtbXBKMSfTGEi6TwFd/nkSnA5NwXEeVgt23rMgGSDxYFnUVSUwoK8JB/lmXF6aXfzZmXnimSGLKJDDNB9r2KMGFJHk8OrgQsqbw+eLF1265Dxf5Bx3uSm7VOLRaA25Bj4ozj93ncYgvyv+qOg4GvKNjcdMHVQ6s7Fmk6bVAgmdjpqgiEjxq9UXrT6iFfYUOLdvvit9x3FVWEP9ZbP/SnUxc981e3fEHUYwJB5N45rnjf13hYhCRpDFmEBp7lyq/iSPGtzRnsMWaq5ixnMm0e+LpkJxS4ND5iX7KVhF02VJuKMXDYtF1InpGIUnLsJAT251TSqpbpFsRzrfg6bkoZMGIcvus/y5Z5K6eBFv25uDl7srCsOUgha6Vxqe6BEtHarFfFeKA413w7XepQ410tOxrmt+9byEOjKyO7JvkJfonylsC546SfTqmQAc8y+piYrEGUn/e7A6nmUMH6nAwf3WGD422MGcOdWAWqo6GA3AgOGpOHr6gQRRCoWbS9aQkMFWxvTuWlMPRMakRBnKBUDL1y3waKQqOoz6OJSWOzmrVGQWrxzZCponW75+eP8hYzJr5Shf3ocFACYbR6/XWTx/hoagzymSMNigT2NMzXj9BJRromqtjgzQiL6+waNT/SAN0WiHV+HwFkdhV5tjlSO/nm/MKSVLWkBLNrhYn2+OJ4ChdpF3uwIKBAJURb1fbPZA5H42EDoyXL1AJO+u1RCIhIAeWkq8iiezy7C4bmCUCEYIcmMW3cgeS/VP7us85OsGUIKjJQ/4qlxhKvHmewAQ79H6WS1S+uFqAFbhFaXGSytuoRDK4xd8lEnHVG4ullAPqPZVI9KsG4lFOAqHznZNMKzqM4FW5DcX385Gomo2VbCAQ+rFeo/XriXmn8mAVSjugZOjh887P51yVWlVHmoV8IA5seuvnJsryXrYkCry87oJBLqtKSH8bx9H4tXWofjXTrunAKySdM+a7a5Kx5BloVF+CWfDPhGbJuIhkByqpfeOsBbrC1m7O5qdoGkPH7uV92EAcOL3PeDdmp3dWmAh/JOEEoWHWLcod5u/9wtuLFSqe/kdhcwYMI9wvbW/v+4Ttc1lyxKhmERys7nv8hzPRZhY0a8AlNofr2+58Lro7GjUchsSi8D+EZQmb7+UwF6L/mqfudnES434k49BEkzxFO1zBPSQGfDkM09xANWrvm2UeaAmTUKcAt2hkyyqxaEMyslQrUWhbZwgUSyADEArVkWAdQyyhuCaA+VDUq/YSjwAJlX0ikQjFDuo6powE8JKsugSkJlSHwgzECi34XV1FQA5s+1BoYQLaRELjc+4eUFmmLFQVp9FegCX4lZ0KDRO0hx4EY4VMo1nMNrQe9iQ/uDVHuAnkwqDRaDQajUaj0fwv+AfXUE5tkItLgQAAAABJRU5ErkJggg==",

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
                className="fbtn btn-primary w-100 mt-1 "
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date} </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="{weatherData.iconUrl}"
              alt={weatherData.description}
            />
            <span className="temperature">6</span>
            <span className="unit">C</span>
          </div>
          <div className="col-6">
            <ul>
              <li> Percipitation: 14%</li>
              <li>Humidity: 45%</li>
              <li>Wind:13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}else {let apiKey= "9ad3289ae537afdc9ca8bb1537561c5f";

let apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`
axios.get(apiurl).then(handleResponse);
}}