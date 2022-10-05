import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import './Main.css'



function Main() {
  const [data,setData] = useState([])


  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100")
    .then((res) => setData(res.data.products))
  },[])
  console.log(data)

  return (
    <div className="main-container">
      <div className="category-nav">
        <ul className='categories'>
          <li>Top Offers</li>
          <li>Mobiles</li>
          <li>Laptops</li>
          <li>Electronics</li>
          <li>Fasions</li>
          <li>Furniture</li>
          <li>Appliances</li>
          <li>Grocery</li>
          <li>Travel</li>
        </ul>
      </div>
      <div className="product-card">
        <Card data={data}/>
      </div>
    </div>
  )
}

export default Main;