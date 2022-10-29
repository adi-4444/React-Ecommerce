import React from 'react'
import './LandingPage.css'
import {Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar/Navbar';
import Login from '../authentication/Login/Login'
import Signup from '../authentication/Signup/Signup';
import Sidenav from './components/sidenav/Sidenav';
import Allproducts from './components/content/Allproducts';
import Categories from './components/content/Categories';
import Producpage from './components/content/Productpage';
import Cart from './components/cart/Cart';


function Main() {

  return (
    <>
      <Navbar />
      <Sidenav />
        <Routes>
          <Route path='/' element={<Allproducts/>} />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup />} />
          <Route path='/categories/:id' element={<Categories />} />
          <Route path='/productpage/:id' element={<Producpage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </>

  )
}

export default Main;


