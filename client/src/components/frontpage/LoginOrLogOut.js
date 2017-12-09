import React, { Component } from 'react';
import  LoginHeadernav from './Auth/login/LoginHeaderNav';
import  SignOutHeaderNav from './Auth/signout/SignOutHeaderNav';

class LoginHeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.SuperUser
    }
  }

  render() {
    let Login = this.state.user;
    if(Login === ''){
      return (<LoginHeadernav />);
    }else{
      return (<SignOutHeaderNav />);
    }
  }
}

export default LoginHeaderNav;
