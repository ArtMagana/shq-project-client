import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
  constructor(props){
      super(props);
      this.state = { name: "", specification: "" };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const specification = this.state.specification;
    axios.post("http://localhost:5000/api/products", { name, specification }, {withCredentials:true})
    .then( () => {
        this.props.getData();
        this.setState({name: "", specification: ""});
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
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Specification:</label>
          <textarea name="specification" value={this.state.specification} onChange={ e => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProduct;
