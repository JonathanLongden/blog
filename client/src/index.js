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


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Webroute />,
   document.getElementById('root')
);
registerServiceWorker();

