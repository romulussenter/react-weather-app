import React from 'react';
import PropTypes from 'prop-types';


const CurrentWeather = prop => {
    return(
        <section>
            <ul>
                <li>Time: {convertTimestamp(prop.time)}</li>
                <li>Summary:{prop.summary}</li>
                <li>Icon: <img src={images(prop.image)} alt={prop.icon}/></li>
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