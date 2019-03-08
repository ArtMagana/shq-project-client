import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'

import ProductList from './ProductList'
 
const keysToFilter = ['name']
 
class SearchProduct extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
    const filteredProducts = ProductList.filter(createFilter(this.state.searchTerm, keysToFilter))
 
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredProducts.map(product => {
          return (
            <div className="mail" key={product.id}>
              <div className="from">{product.name}</div>
            </div>
          )
        })}
      </div>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default SearchProduct