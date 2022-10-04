import React from 'react'
import Card from './Card';
import './Main.css'

function Main() {
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
        <Card />
      </div>
    </div>
  )
}

export default Main;