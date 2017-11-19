import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      details: {}
    }
  }


  render() {
    return (
      <div>
        <br/>
         <h1>Comming Soon Features</h1>
         <li>Area for Visters to Post</li>
         <li>Area for Monsters</li>
      </div>
    );
  }
}

export default Main;
