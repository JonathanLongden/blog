import React, { Component } from 'react';
import Header from '../frontpage/Header';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
//import P5Wrapper from 'react-p5-wrapper';
// import sketch from './sketch/sketch';
// import sketch2 from './sketch/sketch2';

class P5List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: 150,
      // stateSketch: sketch
      user: props.SuperUser.user,
      Work: "TREC",
      Education: "Montana Code School",
      Activities: "Cross Country Skiiing",
      Hobbies: "Family"
    }
  }


  render() {
    return (
      <div>
      <div>
      <Header SuperUser = {this.state}/>
      </div>
      <div>
      <br/>
      <h1>List of P5 Projects</h1>
      <li>Giphy API P5</li>
      <li>P5 Motion Picture "Repeats"</li>
      <li>Pack Man P5" --Coming Soon</li>
      <li>Tanks Atari P5" --Coming Soon</li>
      <br />
      </div>
    </div>


    )
  }
}

export default P5List;

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
