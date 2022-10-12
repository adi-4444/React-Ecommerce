import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import axios from 'axios'
import Card from '../product/Card';
import Navbar from '../Navbar/Navbar';
import SubNav from '../Navbar/Subnav';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';
import {Routes, Route} from 'react-router-dom'


function Main() {
  
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100")
    .then((res) => setData(res.data.products))
  },[])

  return (
    <>
      <Navbar />
      <SubNav />
        <Routes>
          <Route path='/' element={ <Card data={data}/> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup />} />
        </Routes>
    </>

  )
}

export default Main;


