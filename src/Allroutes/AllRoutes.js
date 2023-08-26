import {Routes, Route} from 'react-router-dom';

import React from 'react'
import Home from '../Pages/Home/Home';
import Product from '../Pages/Product/Product';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
    </Routes>
  )
}

export default AllRoutes