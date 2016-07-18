import React, { PropTypes } from 'react'
import productData from '../../fixtures/productData.js'
import { Link } from 'react-router'

const ProductList = (props) => {
  return (
    <div className="product-list-root">
      <ul className="product-list">
        {productData.map(
          (product, i) => (
            <li key={i} className="product-summary">
              <h2><Link to={`/${product.slug}`}>{product.name}</Link></h2>
              <p>{product.description}</p>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default ProductList
