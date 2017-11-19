import React, { Component } from 'react';
import { Nav, NavItem  } from 'react-bootstrap';
import { LinkContainer,  } from 'react-router-bootstrap';



class LoginHeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //user: props.SuperUser.user
    }
  }

  render() {
    return (
      <Nav className="pull-right" bsStyle="pills" >
        <LinkContainer to="/login">
          <NavItem eventKey={2}>Login</NavItem>
        </LinkContainer>
      </Nav>
);
  }
}

export default LoginHeaderNav;
