import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route } from 'react-router-dom'; //, Switch, Route, Router
import Webroute from './WebRoute';
//Bootstraps
//1. npm install --save react-bootstrap bootstrap@3
//2. npm install bootstrap@4.0.0-alpha.6 --save //Don't do This Crap
//3. Include the Packages Below...
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


// import App from './App';
// import Login from './frontpage/login/Login';
// import Resume from './resume/resume';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Webroute />,
   document.getElementById('root')
);
registerServiceWorker();

//exact path in <Route exact path="/" component={App}> route to whole new page

// BrowserRouter>
// <div>
//   <Route exact path="/" component={App}/>
//   <Route path="/login" component={Login}/>
//   <Route path="/resume" component={Resume}/>
// </div>
// </BrowserRouter>

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
