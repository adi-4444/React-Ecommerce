import React from "react";
import "./Card.css";

function Card({data}) {
  return (
    <div className="cards">
      { data ? data.map((product) => (
          <div className="card" key={product.id}>
             <div className="card-images">
                 <img className="card-img" src={product.images[0]}/>
             </div>
       
             <div className="card-title">
                 <p>{product.title}</p>
             </div>
             <div className="card-price">
                 <p>₹ {product.price }</p>
                 <button className="addtocart-btn">Add To Cart</button>
             </div>
          </div>
      )) : ("")
      }
    </div>
  );
}
export default Card;
