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
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfProducts.map((product, index) => {
            return (
              <div key={product._id}>
                <Link to={`/products/${product._id}`}>
                  <h3>{product.name}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >{product.specification} </p>
              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddProduct getData={() => this.getAllProducts()}/>
        </div>
      </div>
    )
  }
}

export default ProductList;