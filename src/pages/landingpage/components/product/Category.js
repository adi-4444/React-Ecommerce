import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Category.css'
import {Link, useParams } from 'react-router-dom'
// import Card from './Card'

const Category = () => {

   const [data,setData] = useState([])
   const {id} = useParams();

   useEffect(() => {
     axios.get(`https://dummyjson.com/products/category/${id}`)
     .then((res) =>  setData(res.data))
     .catch(err => console.log(err))
 },[id])

  return (
      // <>
      //    <div className='category'>
      //     {
      //       data && data.map(data => (
      //             <div className='category-list'>
      //                <Card data={data}/>
      //             </div>
      //       ))
      //    }
      //    </div>

      // </>
      <div className="cards">

      { data ? data.map((product) => {
         return (

        <Link to={`/category/product/${product.id}`} className="card" key={product.id}>
          <div key={product.id}>
             <div className="card-images">
                 <img className="card-img" src={product.thumbnail} alt='img...'/>
             </div>
             <div className="card-title">
                 <p>{product.title}</p>
             </div>
             <div className="card-price">
                 <p>₹ {product.price }</p>
                 <button className="addtocart-btn">Add To Cart</button>
             </div>
             </div>
           </Link>
      )}) : ("")
      }
    </div>
  )
}

export default Category;