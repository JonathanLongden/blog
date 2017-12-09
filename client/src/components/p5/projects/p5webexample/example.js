import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch/sketch';
import sketch2 from './sketch/sketch2';
import { Link } from 'react-router-dom';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: 150,
      stateSketch: sketch
    }
  }

  rotationChange(e){
		this.setState({rotation:e.target.value});
	}

	pressEvent(){
		this.state.stateSketch === sketch ? this.setState({stateSketch:sketch2}) : this.setState({stateSketch:sketch});
	}

  render() {
    return (
      <div>
        <h1>This Demonstration was Copied from this website below</h1>
        <br />
        <h3>https://www.npmjs.com/package/react-p5-wrapper</h3>
        <br />
        <br />
        <br />
        <div>
          <P5Wrapper sketch={this.state.stateSketch} rotation={this.state.rotation}/>
            <input type="range" value={this.state.rotation}  min="0"  max="360" step="1" onInput={this.rotationChange.bind(this)}/>
            <button onClick={this.pressEvent.bind(this)}>Change Sketch</button>
        </div>
        <Link to="/p5List"><h2>Back to P5 List</h2></Link>
      </div>
    );
  }
}

export default Example;

