import React, { Component } from 'react';
import Header from '../frontpage/Header';
import { Link } from 'react-router-dom';


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
      <Link to="/p5giphyapi"><h2>Giphy API P5</h2></Link>
      <Link to="/p5motion"><h2>P5 Motion Picture "Repeats"</h2></Link>
      <Link to="/p5packman"><h2>Pack Man P5" --Coming Soon</h2></Link>
      <Link to="/p5tanks"><h2>Tanks Atari P5" --Coming Soon</h2></Link>
      <Link to="/example"><h2>Example from the Web of p5</h2></Link>

      <br />
      </div>
    </div>


    )
  }
}

export default P5List;

