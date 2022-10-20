import React from 'react';
// import axios from 'axios';
import { Link} from "react-router-dom";

import "./Card.css";

function Card({data}) {

  // const { ids } = useParams();
  // const [data,setData] = useState([])

  // const url = `https://dummyjson.com/products/category/${ids}`
  // useEffect(() => {
  //   axios.get(url)
  //   .then((res) => setData(res.data.products))
  //   .catch(err => console.log(err))
  // },[])

  return (
    <div className="cards">

      { data ? data.map((product) => (

        <Link to={`/category/product/${product.id}`} className="card" key={product.id}>
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
