import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
  constructor(props){
      super(props);
      this.state = {
        name: '',
        specification: '',
        measure: '',
        packing: ''
      };
    }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const specification = this.state.specification;
    const measure = this.state.measure;
    const packing = this.state.packing;
    axios.post("http://localhost:5000/api/products", {
      name,
      specification,
      measure,
      packing
    }, {withCredentials:true})
    .then( () => {
        this.props.getData();
        this.setState({
          name: '',
          specification: '',
          measure: '',
          packing: ''
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
        <form className='form-group' onSubmit={this.handleFormSubmit}>
          <div className='form-row'>
            <div className='col'>
              <label for="formGroupExampleInput">Name:</label>
              <input type='text' className='form-control-sm' name='name' placeholder='Product' value={this.state.name} onChange={ e => this.handleChange(e)}/>
              <label for="formGroupExampleInput">Specification:</label>
              <input type='text' className='form-control-sm' name='specification' placeholder='Description' value={this.state.specification} onChange={ e => this.handleChange(e)} />
              <label for="formGroupExampleInput">Measure:</label>
              <input type='text' className='form-control-sm' name='measure' placeholder='Unit' value={this.state.measure} onChange={ e => this.handleChange(e)} />
              <label for="formGroupExampleInput">Packing:</label>
              <input type='text' className='form-control-sm' name='packing' placeholder='Packing type' value={this.state.packing} onChange={ e => this.handleChange(e)} />

              <input type="submit" className='btn btn-primary' value="Add" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddProduct;
