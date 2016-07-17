import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const CoreLayout = (props) => (
  <div className="core-layout-root">
    <header>
      <h1 className="core-heading">Ecomm Products</h1>
    </header>
    {props.children}
    <footer></footer>
  </div>
)

CoreLayout.propTypes = {
  heading: PropTypes.string
}

export default CoreLayout
