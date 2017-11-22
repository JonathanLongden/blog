import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './frontpage/Auth/login/Login';
import SignUp from './frontpage/Auth/signup/Signup';
import SignOut from './frontpage/Auth/signout/SignOut';
import Resume from './resume/resume';
import P5List from './p5/p5list';

class WebRoute extends Component {
	constructor(Prop) {
		super(Prop);
		this.state = {
      user: "",
      userId: "",
			accessToken: ""
		}
    this.setAccessToken = this.setAccessToken.bind(this);
    //console.log(this.state);
	}

	setAccessToken(newAccessToken, userFound, userId) {
		this.setState({
      accessToken: newAccessToken,
      user: userFound,
      userId: userId
    })
  }

	render() {
      return (
        <BrowserRouter>
        <Switch>
          {/*
           In order to pass along properties to the component for a route needs to be attached
             via the an anonymous render function.
         */}
          <Route exact path="/" render={ ({ match, history }) => <App match={ match } history={ history } SuperUser = {this.state}/>} />
          <Route exact path="/login" render={ ({ match, history }) => <Login match={ match } history={ history } SuperUser = {this.state} onLogin={ this.setAccessToken }/>} />
          <Route exact path="/resume" render={ ({ match, history }) => <Resume match={ match } history={ history } SuperUser = {this.state}/>} />
          <Route exact path="/Signup" render={ ({ match, history }) => <SignUp match={ match } history={ history } SuperUser = {this.state}/>} onLogin={ this.setAccessToken }/>
          <Route exact path="/Signout" render={ ({ match, history }) => <SignOut match={ match } history={ history } SuperUser = {this.state} onLogin={ this.setAccessToken }/>} />
          <Route exact path="/p5List" render={ ({ match, history }) => <P5List match={ match } history={ history } SuperUser = {this.state} />} />
        </Switch>
      </BrowserRouter>
      );
    }
}

// <BrowserRouter>
// <Switch>
//   {/*
//     In order to pass along properties to the component for a route needs to be attached
//     via the an anonymous render function.
//   */}
//   <Route exact path="/" render={ ({ match, history }) => <PostsList match={ match } history={ history } accessToken={ this.state.accessToken }/>} />
//   <Route exact path="/posts/:id" render={ ({ match, history }) => <PostsDetails match={ match } history={ history } accessToken={ this.state.accessToken }/>} />
//   <Route exact path="/posts/update/:id" render={ ({ match, history }) => <PostsUpdate match={ match } history={ history } accessToken={ this.state.accessToken }/>} />
// </Switch>
// </BrowserRouter>
// { /*
// Pass down setAccessToken method to the child component "Login" via "onLogin" property
// */}

export default WebRoute;
