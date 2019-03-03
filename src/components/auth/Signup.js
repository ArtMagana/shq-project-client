// auth/Signup.js

import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';



class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.service = new AuthService();
  }

handleFormSubmit = (event) => {
  event.preventDefault();
  const username = this.state.username;
  const password = this.state.password;

  this.service.signup(username, password)
  .then( response => {
      this.setState({
          username: "",
          password: "",
      });
      this.props.getUser(response)
  })
  .catch( error => console.log(error) )
}

handleChange = (event) => {
  const {name, value} = event.target;
  this.setState({[name]: value});
}

render(){
  return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className='form-row align-items-center'>
            <div className='col-auto'>
            <label for="inlineFormInput">Username:</label>
            <input type="text" name="username" placeholder="Enter your username" className="form-control mb-2" id="inlineFormInput" value={this.state.username} onChange={ e => this.handleChange(e)}/>
            </div>

            <div className='col-auto'>
            <label for="inlineFormInput">Password:</label>
            <input type="text" name="password" placeholder="Enter your password" className="form-control mb-2" id="inlineFormInput" value={this.state.password} onChange={ e => this.handleChange(e)}/>
            </div>

            <div className='col-auto'>
            <button type='submit' className='btn btn-primary mb-2'>Signup</button>
            </div>
          </div>
        </form>

        <p>Already have an account?
          <Link to={"/"}> Login</Link>
        </p>
     </div>
    )
  }
}

export default Signup;
