import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import CoreLayout from './src/components/CoreLayout/CoreLayout.js'
import Main from './src/components/Main/Main.js'
import ProductDetail from './src/components/ProductDetail/ProductDetail.js'
import ProductList from './src/components/ProductList/ProductList.js'

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={ProductList} />
      <Route path=":productSlug" component={ProductDetail} />
    </Route>
  </Router>),
  document.getElementById('app-container'))
