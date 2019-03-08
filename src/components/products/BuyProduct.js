import React, { Component } from 'react';
// import axios from 'axios';

class BuyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.theProduct.code,
      name: this.props.theProduct.name,
      specification: this.props.theProduct.specification,
      measure: this.props.theProduct.measure,
      presentation: this.props.theProduct.presentation,
      packing: this.props.theProduct.packing,
      dimensions: this.props.theProduct.dimensions,
      currency: this.props.theProduct.currency,
      igi: this.props.theProduct.igi,
      iva: this.props.theProduct.iva,
      quantity: this.props.theProduct.quantity,
      cost: this.props.theProduct.cost
    }
  }
  render(){
    return(
      <div className='container-fuid'></div>
    )
  }
}

export default BuyProduct