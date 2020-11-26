import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";


export default function WeatherInfo (props){
    return ( <div className="WeatherInfo">
<h1>{props.data.city}</h1>
<ul><li><FormattedDate date={props.data.date}/></li>
<li className="text-capitalize">{props.data.description}</li></ul>
<div className="row mt-3">
    <div className="col-6">
        <img className="icon" src={props.data.iconUrl}
        alt={props.data.description}></img>
 <div><WeatherTemperature celsius={props.data.temperature} /></div>
     </div>

<div className="col-6">
    <ul>
    <li>Humidity: {props.data.humidity}% </li>
   <li>Wind: {props.data.wind} km/hr </li></ul>
</div>
    </div>
    </div>
    );
    
}
