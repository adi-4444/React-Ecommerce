import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Loading from '../Loading/Loading'

import "./Card.css";

function Card() {

  const { ids } = useParams();
  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  const url = `https://dummyjson.com/products/category/${ids}`
  useEffect(() => {
    axios.get(url)
    .then((res) => setData(res.data.products),setIsLoading(false))
    .catch(err => console.log(err))
  },[])

  return (
    <div className="cards">
         {
            isLoading && <div className='loading-center'><Loading /></div>
         } 
      { data ? data.map((product) => (

        <Link to={`/category/product/${product.id}`} className="card" key={product.id}>
             <div className="card-images">
                 <img className="card-img" src={product.thumbnail}/>
             </div>

             <div className="card-title">
                 <p>{product.title}</p>
             </div>
             <div className="card-price">
                 <p>₹ {product.price }</p>
                 <button className="addtocart-btn">Add To Cart</button>
             </div>

          </Link>
      )) : ("")
      }
    </div>
  );
}
export default Card;
