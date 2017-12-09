import React, { Component } from 'react';
//import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import Header from './components/frontpage/Header';
import Main from './components/frontpage/Main';


// App.js only delegates the different routes
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      user: props.SuperUser,
    }
	}

	render() {
      return (
      <div>
        <div>
          <Header SuperUser = {this.state.user}/>
        </div>
        <br/>
        <div>
          <Main />
        </div>
      </div>
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

export default App;
