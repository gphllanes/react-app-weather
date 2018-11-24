import React from 'react';
import Location from '../Location/Location';
import WeatherData from '../WeatherData/WeatherData';

const WeatherLocation = () => (
	<div>
		<Location city={'Toledo'}></Location>
		<WeatherData></WeatherData>
	</div>
);

export default WeatherLocation;