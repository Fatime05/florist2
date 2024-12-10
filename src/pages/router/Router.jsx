import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../cart/Cart'
import Home from '../home/Home'
import { Wishlist } from '../wishlist/Wishlist'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router