import React, { PropTypes } from 'react'
import productData from '../../fixtures/productData.js'

const ProductDetail = (props) => {
  const product = productData.filter(
    (p) => ( p.slug === props.params.productSlug ))[0]

  return (
    <div className="product-detail-root">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <ul>
        {product.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductDetail
