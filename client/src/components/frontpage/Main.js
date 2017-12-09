import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import WeatherIcons from 'react-weathericons';
import '../css/weather-icons-wind.css';
import '../css/weather-icons.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <br/>
        <h1>Comming Soon Features</h1>
        <li>Area for Visters to Post</li>
        <li>Area for Monsters</li>
        <br />
        <div>

        </div>
        <i className="wi wi-night-sleet"></i>
      </div>
    );
  }
}

export default Main;

//        <WeatherIcons className="wi wi-night-sleet"  />
