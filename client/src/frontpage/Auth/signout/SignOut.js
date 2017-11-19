import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Header';
import { Form, FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';


class SignOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:props.SuperUser.user,
      accessToken: props.SuperUser.accessToken
		}
		this.LogOut = this.LogOut.bind(this);
  }

  LogOut(event) {
    event.preventDefault(); // prevent browser-standard of reloading page on form submit
    let token = this.state.accessToken;
    axios.post('/api/Users/logout?access_token=' + token)
    .then((response) => {
      this.props.onLogin("", "", "");
      this.props.history.push("/");
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
        <Form inline onSubmit={ this.LogOut }>
          <FormGroup>
            <Button type="submit">
              Sign Out
            </Button>
          </FormGroup>
        </Form>
        </div>
      </div>
    );
  }
}

export default SignOut;
