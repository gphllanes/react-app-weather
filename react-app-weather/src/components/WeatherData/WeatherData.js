import React from 'react';
import WeatherExtraInfo from '../WeatherExtraInfo/WeatherExtraInfo';
import WeatherTemperature from '../WeatherTemperature/WeatherTemperature';

const WeatherData = () => (
	<div>
		<WeatherTemperature/>
		<WeatherExtraInfo humidity={80} wind={"10m/s"} />
	</div>
);

export default WeatherData;