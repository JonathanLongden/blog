import React, { Component } from 'react';
import {  Nav, NavItem} from 'react-bootstrap';
import { LinkContainer,  } from 'react-router-bootstrap';



class SignOutHeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //user: props.SuperUser.user
    }
  }

  render() {
    return (
      <Nav className="pull-right" bsStyle="pills" >
        <LinkContainer to="/SignOut">
          <NavItem eventKey={2}>SignOut</NavItem>
        </LinkContainer>
      </Nav>
);
  }
}

export default SignOutHeaderNav;
