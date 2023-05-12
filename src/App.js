import React from 'react';
import {Routes,Route} from "react-router-dom";
// import axios from "axios"

import "./App.css"
import { Home,ProductListing,ProductDetail,Cart, Wishlist, SignUp, Login, Checkout, Error } from './pages/Pages';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productlisting' element={<ProductListing/>}/>
        <Route path='/productdetail' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
