import React, {useState} from "react";
import axios from "axios";
import"./Weather.css";
import FormattedDate from "./FormattedDate.js";

export default function Weather (){
const [weatherData, setWeatherData]= useState({ready: false});
function handleResponse(response){
    console.log(response.data);
setWeatherData({
    ready:true,
    temperature: response.data.main.temp,
    description:response.data.weather[0].description,
    wind: response.data.wind.speed,
    date: new Date(response.data.dt * 1000),
    humidity:response.data.main.humidity,
    city: response.data.name,
    iconUrl:`https://ssl.gstatic.com/onebox/weather/64/cloudy.png`,
    
});
}

if (weatherData.ready){
return (
    <div className="Weather">
<form> 
    <div className="row">
    <div className="col-9">
    <input type="Search" 
    placeholder="Enter a City..." 
    className="form-control"
    autoFocus="on"/>
 </div>
 <div className="col-3">
     <input type="Submit" value="Search" className="btn btn-primary" />
    </div>
    </div>
    </form>
<h1>{weatherData.city}</h1>
<ul>
<li><FormattedDate date={weatherData.date}/></li>
<li className="text-capitalize">{weatherData.description}</li></ul>
<div className="row mt-3">
    <div className="col-6">
 
        <img src={weatherData.iconUrl}
        alt={weatherData.description}
        className="float-left"></img>

   <div className="float-left">
    <span className="temperature">{Math.round(weatherData.temperature)}</span>
    <span className="unit">ºC</span>
     </div>
     </div>
<div className="col-6">
    <ul>
    <li>Humidity: {weatherData.humidity}% </li>
   <li>Wind: {weatherData.wind} km/hr </li></ul>
</div>
    </div>
    </div>);
} else {
const apiKey=`19e46ed21fd5be02cd8dd3836eaacd85`;
let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "loading..";
}
}