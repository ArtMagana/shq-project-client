import React, { Component } from 'react';
import axios from 'axios';

class EditProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: this.props.theProduct.name,
        specification: this.props.theProduct.specification,
        measure: this.props.theProduct.measure,
        presentation: this.props.theProduct.presentation,
        packing: this.props.theProduct.packing,
        dimensions: this.props.theProduct.dimensions,
        currency: this.props.theProduct.currency,
        iva: this.props.theProduct.iva,
        igi: this.props.theProduct.igi
    }
  }


  handleFormSubmit = (event) => {
    const name = this.state.name;
    const specification = this.state.specification;
    const measure = this.state.measure;
    const presentation = this.state.presentation;
    const packing = this.state.packing;
    const dimensions = this.state.dimensions;
    const currency = this.state.currency;
    const iva = this.state.iva;
    const igi = this.state.igi;

    event.preventDefault();

    axios.put(`http://localhost:5000/api/products/${this.props.theProduct._id}`, {
      name,
      specification,
      measure,
      presentation,
      packing,
      dimensions,
      currency,
      iva,
      igi,
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
  handleChangeSpec = (event) => {
    this.setState({
      specification:event.target.value
    })
  }
  handleChangeMeasure = (event) => {
    this.setState({
      measure:event.target.value
    })
  }
  handleChangePres = (event) => {
    this.setState({
      presentation:event.target.value
    })
  }
  handleChangePack = (event) => {
    this.setState({
      packing:event.target.value
    })
  }
  handleChangeDim = (event) => {
    this.setState({
      dimensions:event.target.value
    })
  }
  handleChangeCurr = (event) => {
    this.setState({
      currency:event.target.value
    })
  }
  handleChangeIVA = (event) => {
    this.setState({
      iva:event.target.value
    })
  }
  handleChangeIGI = (event) => {
    this.setState({
      igi:event.target.value
    })
  }


  render(){
    return (
      <div>
        <hr />
        <h3>Edit product information</h3>
        <div className='container'>
          <form onSubmit={this.handleFormSubmit}>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Name:</label>
              <div className='col-sm-4'>
                <input type='text' className='form-control' name='name' placeholder='Product name' value={this.state.name} onChange={e => this.handleChangeName(e)}/>
              </div>   
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Specification:</label>
              <div className='col-sm-6'>
                <input type='text' className='form-control' name='specification' placeholder='Product Description' value={this.state.specification} onChange={e => this.handleChangeSpec(e)}/>
              </div>   
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Measure:</label>
              <div className='col-sm-2'>
                <input type='text' className='form-control' name='measure' placeholder='Unit (u)' value={this.state.measure} onChange={e => this.handleChangeMeasure(e)}/>
              </div>   
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Package:</label>
              <div className='col-sm-2'>
                <input type='text' className='form-control' name='packing' placeholder='Pack (p)' value={this.state.packing} onChange={e => this.handleChangePack(e)}/>
              </div>   
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Presentation:</label>
              <div className='col-sm-2'>
                <input type='number' className='form-control' name='presentation' placeholder='u / p' value={this.state.presentation} onChange={e => this.handleChangePres(e)}/>
              </div>   
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Dimensions:</label>
              <div className='col-sm-2'>
                <input type='number' className='form-control' name='dimensions' placeholder='cm3' value={this.state.dimensions} onChange={e => this.handleChangeDim(e)}/>
              </div>   
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Currency:</label>
              <div className='col-sm-2'>
                <input type='text' className='form-control' name='currency' placeholder='Currency' value={this.state.currency} onChange={e => this.handleChangeCurr(e)}/>
              </div>   
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>IVA:</label>
              <div className='col-sm-2'>
                <input type='number' className='form-control' name='iva' placeholder='IVA' value={this.state.iva} onChange={e => this.handleChangeIVA(e)}/>
              </div>   
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>IGI:</label>
              <div className='col-sm-2'>
                <input type='number' className='form-control' name='igi' placeholder='IGI' value={this.state.igi} onChange={e => this.handleChangeIGI(e)}/>
              </div>   
            </div>

            <input type="submit" className='btn btn-primary' value="Edit" />
          </form>
        </div>
      </div>
    )
  }
}

export default EditProduct;
