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
              <th scope='col'>Product Name</th>
              <th scope='col'>Product Specification</th>
              <th scope='col'>Measure</th>
              <th scope='col'>Package</th>
            </tr>
          </thead>
          <tbody>
        {this.state.listOfProducts.map((product, index) => {
          return (
            <tr>
            <th scope='row' key={product._id}><Link to={`/products/${product._id}`}>{product.name}</Link></th>
            <td>{product.specification}</td>
            <td>{product.measure}</td>
            <td>{product.packing}</td>
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
