import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch/sketch';
import sketch2 from './sketch/sketch2';

class Main extends Component {
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
        <br/>
        <h1>Comming Soon Features</h1>
        <li>Area for Visters to Post</li>
        <li>Area for Monsters</li>
        <br />
        <div>
          <P5Wrapper sketch={this.state.stateSketch} rotation={this.state.rotation}/>
          <input type="range" value={this.state.rotation}  min="0"  max="360" step="1" onInput={this.rotationChange.bind(this)}/>
          <button onClick={this.pressEvent.bind(this)}>Change Sketch</button>
        </div>
      </div>
    );
  }
}

export default Main;

// constructor(props) {
//   super(props);
//   this.state = {
//     rotation: 150,
//     stateSketch: sketch,
//   };
// }

// rotationChange(e){
//   this.setState({rotation:e.target.value});
// }

// pressEvent(){
//   this.state.stateSketch === sketch ? this.setState({stateSketch:sketch2}) : this.setState({stateSketch:sketch});
// }

// render () {
//   return (
//     <div>
//       <P5Wrapper sketch={this.state.stateSketch} rotation={this.state.rotation}/>
//       <input type="range" value={this.state.rotation}  min="0"  max="360" step="1" onInput={this.rotationChange.bind(this)}/>
//       <button onClick={this.pressEvent.bind(this)}>Change Sketch</button>
//     </div>
//   );
// }
