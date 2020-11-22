import React from "react";
import"./Weather.css";

export default function Weather (){
    return (
    <div className="Weather">
<form> 
    <div className="row">
    <div className="col-9">
    <input type="Search" placeholder="Enter a City..." className="form-control"/>
 </div>
 <div className="col-3">
     <input type="Submit" value="Search" className="btn btn-primary" />
    </div>
    </div>
    </form>
<h1>New York</h1>
<ul>
<li>Sunday, 8:00 AM</li>
<li>Cloudy</li></ul>
<div className="row">
    <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
        alt="Cloudy"></img>
   
    6ºC
     </div>
<div className="col-6">
    <ul><li>Precipitation: 1% </li>
    <li>Humidity: 64% </li>
   <li>Wind: 21 km/hr </li></ul>
</div>
    </div>
    </div>);
}