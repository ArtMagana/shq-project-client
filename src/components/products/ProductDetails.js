
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
        <button className='btn btn-primary' onClick={() => this.deleteProduct(this.state._id)}>Delete Product</button>
      </div>
    )
  }
}

render(){
  return(
    <div className='container-fluid'>
      <Link to={'/products'}>Back to products</Link>
      <hr/>
      <div className='row'>
        <div className='col-6'>
          {this.ownershipCheck(this.state)}
        </div>
        <div className='col-6'>
          <ul className='list-group'>
            <li className='list-group-item list-group-item-action'>{this.state.code}</li>
            <li className='list-group-item list-group-item-action'>{this.state.name}</li>
            <li className='list-group-item list-group-item-action'>{this.state.specification}</li>
            <li className='list-group-item list-group-item-action'>{this.state.measure}</li>
            <li className='list-group-item list-group-item-action'>{this.state.presentation}</li>
            <li className='list-group-item list-group-item-action'>{this.state.packing}</li>
            <li className='list-group-item list-group-item-action'>{this.state.dimensions}</li>
            <li className='list-group-item list-group-item-action'>{this.state.currency}</li>
            <li className='list-group-item list-group-item-action'>{this.state.iva}</li>
            <li className='list-group-item list-group-item-action'>{this.state.igi}</li>
            <li className='list-group-item list-group-item-action'>{this.state.cost}</li>
            <li className='list-group-item list-group-item-action'>{this.state.quantity}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
}

export default ProductDetails;
