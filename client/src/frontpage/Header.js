import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer,  } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import LoginOrLogOut from './LoginOrLogOut';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.SuperUser.user
    }
  }

  render() {
    return (<div>
      <Navbar fluid  collapseOnSelect  >
        <Navbar.Header className="pull-left nopadding">
          <Navbar.Brand>
            <Link to="/"><h2>Jon's Blog</h2></Link>
          </Navbar.Brand>
        </Navbar.Header>

        <Navbar.Collapse className="pull-left">
          <Navbar.Text>
              Welcome! {"  " + this.state.user}
          </Navbar.Text>
        </Navbar.Collapse>
        <LoginOrLogOut SuperUser = {this.state.user}/>
        <Nav className="pull-right" bsStyle="pills" >
        <LinkContainer to="/resume">
          <NavItem eventKey={2}>Resume</NavItem>
        </LinkContainer>
          <NavDropdown eventKey={3} title="My Work" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>P5</MenuItem>
            <MenuItem eventKey={3.2}>Pokemon Api</MenuItem>
            <MenuItem eventKey={3.3}>Future</MenuItem>
          </NavDropdown>
        </Nav>
    </Navbar>
      </div>);
  }
}

export default Header;
//<LinkContainer to="/login">
// <NavItem eventKey={2}>Login</NavItem>
// </LinkContainer>
