import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import axios from 'axios'
import Card from '../product/Card';
import Navbar from '../Navbar/Navbar';
import SubNav from '../Navbar/Subnav';



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
      <Card data={data}/>
    </>

  )
}

export default Main;


