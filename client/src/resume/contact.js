import React, { Component } from 'react';
//import { Col, Row, Grid} from 'react-bootstrap';

class Contact extends Component {
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
        <div className="card-panel green">
          <span className="white-text ">
            <p>Jonathan Longden</p>
            <p>400 N Kennedy</p>
            <p>Belgrade, MT 59714</p>
            <p>Cell Phone: (605) 300-0046</p>
            <p>longden.jonathanedgar@gmail.com</p>
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;

