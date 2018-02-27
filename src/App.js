import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
    lat:0,
    lon:0,
    };
  

  this.buttonSubmit = this.buttonSubmit(this)
}


  buttonSubmit(){
    console.log('YAY you can see me.');
  }

  

  render() {
    return (
  <div>
   <h1>Updated Weather App</h1>
      <p>You can search for the weather of your city.</p>
     <form> 
       
       <label>Lat
       <input type='number'
       min='-90'
       max='90'></input>
       </label>
      

       <label> Lon
       <input type='number'
       min='-180'
       max='180'></input>
       </label>
       
     
       
       
       
       
       <button>Submit Here</button>
      </form>
    </div>



    )}
  }
export default App;
