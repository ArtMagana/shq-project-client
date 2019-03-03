
import React, { Component } from 'react';
import axios from 'axios';

class EditProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: this.props.theProduct.name,
        specification: this.props.theProduct.specification,
        measure: this.props.theProduct.measure
    }
  }


  handleFormSubmit = (event) => {
    const name = this.state.name;
    const specification = this.state.specification;
    const measure = this.state.measure;

    event.preventDefault();

    axios.put(`http://localhost:5000/api/products/${this.props.theProduct._id}`, {
      name,
      specification,
      measure
    }, {withCredentials:true})
    .then( () => {
        this.props.getTheProduct();
        // after submitting the form, redirect to '/products'
        this.props.history.push('/products');
    })
    .catch( error => console.log(error) )
  }

  handleChangeName = (event) => {
    this.setState({
      name:event.target.value
    })
  }

  handleChangeDesc = (event) => {
    this.setState({
      specification:event.target.value
    })
  }
  handleChangeMeasure = (event) => {
    this.setState({
      measure:event.target.value
    })
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Edit Product</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type='text' name='name' value={this.state.name} onChange={e => this.handleChangeName(e)}/>
          <label>Specification:</label>
          <input type='text' name='specification' value={this.state.specification} onChange={e => this.handleChangeDesc(e)} />
          <label>Measurement:</label>
          <input type='text' name='measure' value={this.state.measure} onChange={e => this.handleChangeMeasure(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProduct;
