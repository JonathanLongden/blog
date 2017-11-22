import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Header';
import { Form, FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:props.SuperUser.user,
			username: "",
			password: "",
		}
		this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  /**
   * Gets called when user submits form via "Login" button
   * using the JS native onSubmit form event handler
   */
  login(event) {
    event.preventDefault(); // prevent browser-standard of reloading page on form submit

    // POST API request to login user
    axios.post('/api/Users/login', {
			username: this.state.username,
      password: this.state.password,
      Validatepassword: ''
		})
    .then((response) => { // successful api call

      /* Use the method of the parent component "App" which has been passed down
       * via the onLogin property (this.props)
       */
      //console.log(response);
      var token = response.data.id;
      var userId = response.data.userId;

      // API GET request => get beer by Id
      axios.get('/api/Users/'+userId+'?access_token=' + token)
      .then((response) => {
        //console.log(response);
        this.props.onLogin(token, response.data.username, userId);
      })
      .catch((error) => {
        console.log(error);
      });


    })
    .catch((error) => {
    	console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div>
          <Header SuperUser = {this.state}/>
        </div>
        <div>
        <Form inline onSubmit={ this.login }>
          <FormGroup controlId="inlineUsername">
              <ControlLabel>Username:</ControlLabel>
              <FormControl name="username" type="text" onChange={ this.handleInputChange }/>
          </FormGroup>
          <br/>
          <FormGroup controlId="inlinePassword">
            <ControlLabel>Password:</ControlLabel>
            <FormControl name="password" type="password" onChange={ this.handleInputChange }/>
          </FormGroup>
          <br/>
          <br/>
          <FormGroup controlId="inlinePassword">
            <ControlLabel>Validate Password:</ControlLabel>
            <FormControl name="Validatepassword" type="Validatepassword" onChange={ this.handleInputChange }/>
          </FormGroup>
          <br/>
          <FormGroup controlId="inlineSubmit">
            <Button type="submit">
              Sign Up
            </Button>
          </FormGroup>
        </Form>
        </div>
      </div>
    );
  }
}



// <Form onSubmit={ this.login } >
// <label>
//   Username:
//   <input name="username" type="text" onChange={ this.handleInputChange }/>
// </label>
// <label>
//   Password:
//   <input name="password" type="password" onChange={ this.handleInputChange }/>
// </label>
// <button>Login</button>
// </Form>

export default SignUp;
