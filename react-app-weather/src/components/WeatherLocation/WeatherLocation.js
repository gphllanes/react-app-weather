import React from 'react';
import Location from './Location/Location';
import WeatherData from './WeatherData/WeatherData';
import './WeatherLocation.css';
import { SUN } from './../../constants/weathers';

const data = {
	temperature : 5,
	weatherState : SUN,
	humidity : 50,
	wind : '10 m/s'
}

const WeatherLocation = () => (
	<div className="weatherLocationCont">
		<Location city={'Toledo'}></Location>
		<WeatherData data={data}></WeatherData>
	</div>
);

// WeatherLocation.propTypes = {
// };

export default WeatherLocation;