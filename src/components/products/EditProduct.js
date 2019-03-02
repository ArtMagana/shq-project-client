
import React, { Component } from 'react';
import axios from 'axios';

class EditProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: this.props.theProduct.name, 
        specification: this.props.theProduct.specification
    }
  }

    
  handleFormSubmit = (event) => {
    const name = this.state.name;
    const specification = this.state.specification;

    event.preventDefault();

    axios.put(`http://localhost:5000/api/products/${this.props.theProduct._id}`, { name, specification }, {withCredentials:true})
    .then( () => {
        this.props.getTheProduct();
        // after submitting the form, redirect to '/products'
        this.props.history.push('/products');    
    })
    .catch( error => console.log(error) )
  }

  handleChangeTitle = (event) => {  
    this.setState({
      title:event.target.value
    })
  }

  handleChangeDesc = (event) => {  
    this.setState({
      specification:event.target.value
    })
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChangeTitle(e)}/>
          <label>Specification:</label>
          <textarea name="specification" value={this.state.specification} onChange={e => this.handleChangeDesc(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProduct;