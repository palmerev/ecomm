import React, { PropTypes } from 'react'
import productData from '../../fixtures/productData.js'
import ProductList from '../ProductList/ProductList.js'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      viewAs: "buyer",
      products: productData
    }
    this.onCustomerTypeSelect = this.onCustomerTypeSelect.bind(this)
  }

  onCustomerTypeSelect(e) {
    this.setState({ viewAs: e.target.id })
  }

  render() {
    return (
      <div className="main-root">
      <header>
        <h1 className="core-heading">Ecomm Products</h1>
      </header>
        <span>View as:</span>
        <form className="customer-type-form">
          <input onClick={this.onCustomerTypeSelect}
           id="buyer" type="radio" name="customer-type" />
          <label htmlFor="buyer">Buyer</label>
          <input onClick={this.onCustomerTypeSelect}
           id="seller" type="radio" name="customer-type" />
          <label htmlFor="seller">Seller</label>
        </form>
        <h2>Viewing as: {this.state.viewAs}</h2>
        {this.props.children}
        <footer></footer>
      </div>
    )
  }

}

export default Main
