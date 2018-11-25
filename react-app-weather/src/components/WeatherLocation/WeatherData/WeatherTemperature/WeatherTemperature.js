import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
	CLOUD,
	CLOUDY,
	SUN,
	RAIN ,
	SNOW,
	WINDY,
} from '../../../../constants/weathers';
import '../WeatherData.css'

const icons = {
	[SUN]: "day-sunny",
	[SNOW]: "show",
	[CLOUD]: "cloud",
	[CLOUDY]: "cloudy",
	[RAIN] : "rain",
	[WINDY]: "windy"
};

const getWeatherIcon = (weatherState) => {
	const icon = icons[weatherState];
	const sizeIcon = "4x";
	if(icon) {
		return <WeatherIcons className={"wicon"} name={icon} size={sizeIcon}/>;
	} else {
		return <WeatherIcons className={"wicon"} name={"day-sunny"} size={sizeIcon}/>;
	}
};

const WeatherTemperature = ({temperature, weatherState}) => (
	<div className="weatherTemperatureContainer">
		{
			getWeatherIcon(weatherState)
		}
		<span className="temperature">{`${temperature}`}</span>
		<span className="temperatureType">{` Cº`}</span>
	</div>
);

//Validacion de entrada
WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;