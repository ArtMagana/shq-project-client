// auth/Login.js

import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';



class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
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
      <div className='container-fluid'>
        <div className='row'>
        <form className='col' onSubmit={this.handleFormSubmit}>
            <label>Username:</label>
            <input type="text" name="username" placeholder="Enter your username" className="form-control mb-2" value={this.state.username} onChange={ e => this.handleChange(e)}/>

            <label>Password:</label>
            <input type="text" name="password" placeholder="Enter your password" className="form-control mb-2" value={this.state.password} onChange={ e => this.handleChange(e)}/>

            <button type='submit' className='btn btn-primary mb-2'>Enter</button>
        </form>
        </div>
        
        <div className='row'>
          <div className='col'>
          <p>Don't have an account yet?<Link to={"/signup"}> Signup</Link></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
