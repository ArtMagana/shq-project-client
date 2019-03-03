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
        <div>
          { this.state.listOfProducts.map((product, index) => {
            return (
              <div key={product._id}>
                <table className='table table-bordered table-hover dt-responsive'>
                  <tr>
                    <th>Product Name</th>
                    <th>Product Specification</th>
                    <th>Measure</th>
                    <th>Package</th>
                  </tr>
                    <td><Link to={`/products/${product._id}`}>{product.name}</Link></td>
                    <td>{product.specification}</td>
                    <td>{product.measure}</td>
                    <td>{product.packing}</td>
                </table>
              </div>
            )})
          }
        </div>

      </div>
    )
  }
}

export default ProductList;
