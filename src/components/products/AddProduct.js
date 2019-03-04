import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
  constructor(props){
      super(props);
      this.state = {
        code: '',
        name: '',
        specification: '',
        measure: '',
        presentation: '',
        packing: '',
        dimensions: '',
        currency: '',
        cost: '',
        iva: '',
        igi: '',
        quantity: ''
      };
    }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const specification = this.state.specification;
    const measure = this.state.measure;
    const packing = this.state.packing;
    const code = this.state.code;
    const quantity = this.state.quantity;
    const cost = this.state.cost;
    const currency = this.state.currency;
    const iva = this.state.iva;
    const igi = this.state.igi;
    const presentation = this.state.presentation;
    const dimensions = this.state.dimensions;
    axios.post("http://localhost:5000/api/products", {
      name,
      specification,
      measure,
      packing,
      code,
      quantity,
      cost,
      currency,
      iva,
      igi,
      presentation,
      dimensions
    }, {withCredentials:true})
    .then( () => {
        this.props.getData();
        this.setState({
        code: '',
        name: '',
        specification: '',
        measure: '',
        presentation: '',
        packing: '',
        dimensions: '',
        currency: '',
        cost: '',
        iva: '',
        igi: '',
        quantity: ''
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
        <form className='form-group' onSubmit={this.handleFormSubmit}>
        <div>
          <div className='form-row'>
            <div className='col-1'>
              <input type='text' className='form-control' name='code' placeholder='Code' value={this.state.code} onChange={ e => this.handleChange(e)}/>
            </div>
            <div className='col-2'>
              <input type='text' className='form-control' name='name' placeholder='Product Name' value={this.state.name} onChange={ e => this.handleChange(e)}/>
            </div>
            <div className='col-4'>
              <input type='text' className='form-control' name='specification' placeholder='Product Specification' value={this.state.specification} onChange={ e => this.handleChange(e)}/>
            </div>
            
            <fieldset disabled>
              <div class="form-group">
                <input type="number" id="disabledTextInput" name='quantity' class="form-control" placeholder="Quantity" value={this.state.quantity} onChange={ e => this.handleChange(e)}/>
              </div>
            </fieldset>
            <fieldset disabled>
              <div class="form-group">
                <input type="number" id="disabledTextInput" name='cost' class="form-control" placeholder="$ Unitary Cost" value={this.state.cost} onChange={ e => this.handleChange(e)}/>
              </div>
            </fieldset>
        </div>

        <div className='form-row'>
            <div className='col-1'>
              <input type='text' className='form-control' name='measure' placeholder='Unit (u)' value={this.state.measure} onChange={ e => this.handleChange(e)}/>
            </div>
            <div className='col-1'>
              <input type='text' className='form-control' name='packing' placeholder='Pack (p)' value={this.state.packing} onChange={ e => this.handleChange(e)}/>
            </div>
            <div className='col-1'>
              <input type='number' className='form-control' name='presentation' placeholder='u / p' value={this.state.presentation} onChange={ e => this.handleChange(e)}/>
            </div>
            <div className='col-1'>
              <input type='number' className='form-control' name='dimensions' placeholder='cm3' value={this.state.dimensions} onChange={ e => this.handleChange(e)}/>
            </div>
            <div className='col-1'>
              <input type='text' className='form-control' name='currency' placeholder='Currency' value={this.state.currency} onChange={ e => this.handleChange(e)}/>
            </div>
            <div className='col-1'>
              <input type='number' className='form-control' name='iva' placeholder='IVA' value={this.state.iva} onChange={ e => this.handleChange(e)}/>
            </div>
            <div className='col-1'>
              <input type='number' className='form-control' name='igi' placeholder='IGI' value={this.state.igi} onChange={ e => this.handleChange(e)}/>
            </div>
            
            <input type="submit" className='btn btn-primary' value="Add" />
            </div>
        </div>
        </form>
    )
  }
}

export default AddProduct;
