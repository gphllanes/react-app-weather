import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo/WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature/WeatherTemperature';
import { SUN } from './../../../constants/weathers';

const WeatherData = () => (
	<div>
		<WeatherTemperature
			temperature={20}
			weatherState={SUN}
		/>
		<WeatherExtraInfo humidity={80} wind={"10m/s"} />
	</div>
);

export default WeatherData;