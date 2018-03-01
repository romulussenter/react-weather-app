import React from 'react';
import PropTypes from 'prop-types';

import {convertTimestamp} from './utils'


const CurrentWeather = prop => {
    return(
        <section>
            <ul>
                <li>Time:{convertTimestamp(prop.time)}</li>
                <li>Summary:{prop.summary}</li>
                <li>Icon: {prop.image}</li>
                <li>Temperature: {prop.temperature}</li>
                

            </ul>
        </section>
    );
}

CurrentWeather.PropTypes ={
    time:PropTypes.number.isRequired,
    summary:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired,
    temperature:PropTypes.number.isRequired
}

export default CurrentWeather;