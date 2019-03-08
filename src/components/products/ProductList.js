import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddProduct from './AddProduct';

class ProductList extends Component {
  constructor(){
      super();
      this.state = { listOfProducts: [] };
  }

  getAllProducts = () =>{
    axios.get(`http://localhost:5000/api/products`, {withCredentials:true})
    .then(responseFromApi => {
      this.setState({
        listOfProducts: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllProducts();
  }

  render(){
    return(
    <div>
      <div>
        <AddProduct getData={() => this.getAllProducts()}/>
      </div>
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Code</th>
              <th scope='col'>Product Name</th>
              <th scope='col'>Product Specification</th>
              <th scope='col'>Measure</th>
              <th scope='col'>Presentation</th>
              <th scope='col'>Package</th>
              <th scope='col'>Dimensions</th>
              <th scope='col'>Currency</th>
              <th scope='col'>IGI</th>
              <th scope='col'>IVA</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Cost</th>
            </tr>
          </thead>
          <tbody>
        {this.state.listOfProducts.map((product, index) => {
          return (
            <tr key={product._id}>
            <td>{product.code}</td>
            <th scope='row'><Link to={`/products/${product._id}`}>{product.name}</Link></th>
            <td>{product.specification}</td>
            <td>{product.measure}</td>
            <td>{product.presentation}</td>
            <td>{product.packing}</td>
            <td>{product.dimensions}</td>
            <td>{product.currency}</td>
            <td>{product.igi}</td>
            <td>{product.iva}</td>
            <td>{product.quantity}</td>
            <td>{product.cost}</td>
            </tr>
          )})
          }
          </tbody>
        </table>
      </div>
      

    </div>
    )
  }
}

export default ProductList;
