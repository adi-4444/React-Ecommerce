import React from "react";
import "./Card.css";

function Card() {
  return (
    <div>

      <div className="card">

        <div className="card-img">
          <p>image</p>
        </div>

        <div className="card-title">
          <p>Titlesdfssdfsdf</p>
        </div>

        <div className="card-price">
          <p>₹ 999.00</p>
          <button className="addtocart-btn">Add To Cart</button>
        </div>

      </div>

    </div>
  );
}

export default Card;
