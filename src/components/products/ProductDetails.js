
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditProduct from './EditProduct';

class ProductDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSingleProduct();
  }

  getSingleProduct = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/products/${params.id}`, {withCredentials:true})
    .then( responseFromApi =>{
      const theProduct = responseFromApi.data;
      this.setState(theProduct);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderEditForm = () => {
    if(!this.state.name){
      this.getSingleProduct();
    } else {
    //                                                    {...props} => so we can have 'this.props.history' in Edit.js
    //                                                                                          ^
    //                                                                                          |
      return <EditProduct theProduct={this.state} getTheProduct={this.getSingleProduct} {...this.props} />
    }
  }

// DELETE Product:
  deleteProduct = (id) => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/products/${params.id}`, {withCredentials:true})
    .then( responseFromApi =>{
        this.props.history.push('/products');      
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  ownershipCheck = (product) => {
  if (this.props.loggedInUser && product.owner === this.props.loggedInUser._id) {
    return (
      <div>
        <div>{this.renderEditForm()} </div>
        <button onClick={() => this.deleteProduct(this.state._id)}>Delete product</button>
      </div>
    )
  } 
}

render(){
  return(
    <div>
      <h1>{this.state.name}</h1>
      <p>{this.state.specification}</p>
      <div >
        {this.ownershipCheck(this.state)}
      </div>
      <Link to={'/products'}>Back to products</Link>
    </div>
  )
}
}

export default ProductDetails;