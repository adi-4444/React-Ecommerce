import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import axios from 'axios'
import Card from '../product/Card';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';
import Productpage from '../product/Productpage';
import {Routes, Route} from 'react-router-dom'
import Loading from '../Loading/Loading'
import Category from '../product/Category';

function Main() {

  // const [data,setData] = useState([])
  // const [isLoading,setIsLoading] = useState(true)

  // useEffect(() => {
  //     axios.get("https://dummyjson.com/products?limit=100")
  //     .then((res) => setData(res.data.products),setIsLoading(false))
  //     console.log(data)
  //     .catch(err => console.log(err))
  // },[])


  return (
    <>
      <Navbar />
          {/* {
            isLoading && <div className='loading-center'><Loading /></div>
            
          } */}
        <Routes>
          <Route path='/' element={<Category/>} />
          <Route path='/category/:ids' element={ <Card/> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup />} />
          <Route path='/category/product/:id' element={<Productpage />} />
        </Routes>
    </>

  )
}

export default Main;


