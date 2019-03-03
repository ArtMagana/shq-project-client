import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
  constructor(props){
      super(props);
      this.state = {
        name: '',
        specification: '',
        measure: ''
      };
    }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const specification = this.state.specification;
    const measure = this.state.measure;
    axios.post("http://localhost:5000/api/products", {
      name,
      specification,
      measure
    }, {withCredentials:true})
    .then( () => {
        this.props.getData();
        this.setState({
          name: '',
          specification: '',
          measure: ''
        });
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
          <input type='text' name='name' value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Specification:</label>
          <input type='text' name='specification' value={this.state.specification} onChange={ e => this.handleChange(e)} />
          <label>Measure:</label>
          <input type='text' name='measure' value={this.state.measure} onChange={ e => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProduct;
