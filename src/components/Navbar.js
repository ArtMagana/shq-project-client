// navbar/Navbar.js
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from './auth/auth-service'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    })
  }

  render(){
    if(this.state.loggedInUser){
      return(
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <ul className="nav">
              <li className="nav-item nav-link"><Link className="list-group-item list-group-item-action" to='/'>Welcome: {this.state.loggedInUser.username}</Link></li>
              <li className="nav-item nav-link"><Link className="list-group-item list-group-item-action" to='/products'>Products</Link></li>
              <li className='nav-item nav-link'><Link to='/'><button className='btn btn-primary' onClick={() => this.logoutUser()}>Logout</button></Link></li>
            </ul>
          </div>
        </div> 
      </div>
      )
    } else {
      return (

      <div className='container-fluid'>
            <ul className="nav justify-content-center">
              <li className="nav-item nav-link"><Link className="list-group-item list-group-item-action" to='/'>shq</Link></li>
              <li className="nav-item nav-link"><Link className="list-group-item list-group-item-action" to='/'>Login</Link></li>
              <li className="nav-item nav-link"><Link className="list-group-item list-group-item-action" to='/signup'>Signup</Link></li>
            </ul>
      </div>
      )
    }
  }
}

export default Navbar;
