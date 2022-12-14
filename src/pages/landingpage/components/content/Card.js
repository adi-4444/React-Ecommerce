import React from 'react';
import {Link} from "react-router-dom";
import "./Card.css";

function Card({data}) {
  
  return (
    <div className="cards">

      { data ? data.map((product) => (

        <Link to={`/productpage/${product.id}`} className="card" key={product.id}>
          <div>
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
      )) : ("")
      }
    </div>
  );
}
export default Card;
