import React from 'react';
import Location from './Location/Location';
import WeatherData from './WeatherData/WeatherData';
// import PropTypes from 'prop-types';

const WeatherLocation = () => (
	<div>
		<Location city={'Toledo'}></Location>
		<WeatherData></WeatherData>
	</div>
);

// WeatherLocation.propTypes = {
// };

export default WeatherLocation;