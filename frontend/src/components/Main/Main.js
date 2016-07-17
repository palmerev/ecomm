import React, { PropTypes } from 'react'
import productData from '../../fixtures/productData.js'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      viewAs: "buyer",
      products:
    }
    this.onCustomerTypeSelect = this.onCustomerTypeSelect.bind(this)
  }

  onCustomerTypeSelect(e) {
    this.setState({ viewAs: e.target.id })
  }

  render() {
    return (
      <div className="main-root">
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
      </div>
    )
  }

}

export default Main
