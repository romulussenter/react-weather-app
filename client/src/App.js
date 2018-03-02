import React, { Component } from 'react';
import './App.css';

import { getWeather } from './services/weather';
import { isBlankObject} from './utils';
import CurrentWeather from './CurrentWeather';

class App extends Component {
  constructor(){
    super();
    this.state={
    lat:0,
    lon:0,
    currentWeather: [],
    error: null,
    };
  

  this.handleLat = this.handleLat.bind(this)
  this.handlelon = this.handleLon.bind(this)
  this.buttonSubmit = this.buttonSubmit.bind(this)
}

handleLat(e){
  this.setState({
    lat: +e.target.value
  })
}

handleLon(e){
  this.setState({
    lon: +e.target.value
  })
}


  buttonSubmit(e){
    e.preventDefault();
    console.log('YAY you can see me.');
    getWeather(this.state.lat, this.state.lon)
    .then(response => {
      const currentWeather = response.data.currently;
      console.log(currentWeather);
      this.setState({
        currentWeather: currentWeather
      });
      console.log(currentWeather);
    })
    .catch(error =>{
      console.log(error);
      this.setState({
        error:"This stuff does not work"
      });
    });
  }

  

  render() {
    const currentWeather =this.state.currentWeather;
    const currentWeatherMap = 
  <CurrentWeather
  time = {currentWeather.time}
  summary ={currentWeather.summary}
  icon = {currentWeather.icon}
  temperature = {currentWeather.temperature} /> 

    return (
  <div className='head'>
   <h1>Updated Weather App</h1>
      <p>You can search for the weather of your city.</p>
     <form onSubmit={(e) =>this.buttonSubmit(e)}> 
       
       <label>Lat
       <input type='number'
       min='-90'
       max='90'
       onChange={(e) =>this.handleLat(e)}
       value={this.state.lat}
       required />
       </label>
      

       <label> Lon
       <input type='number'
       min='-180'
       max='180'
       onChange={(e) =>this.handleLon(e)}
       value={this.state.lon}
       required/>
       </label>
       
     
       
       
       
       
       <button onClick={this.buttonSubmit}>Submit Here</button>
       {isBlankObject(this.state.currentWeather) ? "" : currentWeatherMap}
       <p><button onclick="geoFindMe()">Show my location</button></p>
       <div id="out"></div>
      </form>
    </div>



    )}
  }
export default App;
