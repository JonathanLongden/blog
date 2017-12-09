import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { Link } from 'react-router-dom';
import sketchgiphy from './sketch/sketchgiphy';

class P5giphy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphy: sketchgiphy
    }
  }


  render() {
    return (
      <div>
        <h1>This Project was Created by Montana Code School</h1>
        <br />
        <br />
        <br />
        <div>
          <P5Wrapper sketch={this.state.giphy} />
        </div>
        <Link to="/p5List"><h2>Back to P5 List</h2></Link>
      </div>
    );
  }
}

export default P5giphy;
