import React, {useState} from "react";
import axios from "axios";
import"./Weather.css";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";


export default function Weather (props){
const [weatherData, setWeatherData]= useState({ready: false});
const [city, setCity] =useState(props.defaultCity);
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
    icon: response.data.weather[0].icon,     
    
});
}

function search(){
const apiKey=`19e46ed21fd5be02cd8dd3836eaacd85`;
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}
function handleSubmit (event){
event.preventDefault();
search();

}
function handleCityChange(event){
setCity(event.target.value);
}
if (weatherData.ready){
return (
    <div className="Weather">
<form onSubmit={handleSubmit}> 
 
    <div className="row">
    <div className="col-9">
    <input type="Search" 
    placeholder="Enter a City..." 
    className="form-control"
    autoFocus="on"
    onChange={handleCityChange}/>
 </div>
 <div className="col-3">
     <input type="Submit" value="Search" className="btn btn-primary" />
    </div>
    </div>
    </form>
       <WeatherInfo data={weatherData} />
       <WeatherForecast city={weatherData.city}/>
    </div>);} else {search();
     return "loading..";}
}