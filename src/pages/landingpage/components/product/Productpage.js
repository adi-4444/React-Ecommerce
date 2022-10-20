import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Productpage.css'

const Producpage = () => {
  const [data,setData] = useState([])

  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`
  
  useEffect(() => {
    axios.get(url)
    .then((res) => setData(res.data.products))
    .catch(err => console.log(err))
  },[url])


  return (
    <>
    <h1>params : {id}</h1>
    {
      data && data.map(product => (
        <div className="product-page" key={product.id}>
           <div className="product-img">
              <img className='image' src={product.thumbnail} alt='img...'/>
           </div>
        <div className="product-details">
            <p className='category'>{product.category}</p>
            <h2 className='title'>{product.title}</h2>
            <p className='brand'>{product.brand}</p>
            <p className='description'>{product.description}</p>
            <p className='discount'>Discount : {Math.floor(product.discountPercentage)} %</p>
            <p className='rating'>Rating : {product.rating}/5</p>
            <h4 className='original-price'>₹ { Math.floor((81.44 * product.price) + (((81.44 * product.price)/100)*product.discountPercentage)) }</h4>
            <h3 className='price'>₹ { Math.floor(81.44 * product.price)}</h3>
            <button className='btn-buy'>Buy</button><button className='btn-addtocart'>Add to Cart</button>
        </div>
  
      </div>
      ))
    }
    </>
  )
}

export default Producpage