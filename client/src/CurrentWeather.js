import React from 'react';
import PropTypes from 'prop-types';

import {convertTimestamp} from './utils'


const CurrentWeather = prop => {
    return(
        <section>
            <ul>
            <li className='temp'>Temperature: {prop.temperature}</li> 
                <li className='su'>Summary:{prop.summary}</li>
                <li hidden >Icon: {prop.image}</li>
                <li  className='tim'>Time:{convertTimestamp(prop.time)}</li>
                

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