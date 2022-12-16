import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Productpage.css'
import Loading from '../../../../common/Loading/Loading'

const Producpage = () => {
  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`
  
  useEffect(() => {
    axios.get(url)
    .then((res) => setData(res.data),setIsLoading(false))
    .catch(err => console.log(err))
  },[url])

  return (
    <>
    { isLoading ? <Loading /> :
    <div className='product-wrapper'>
        <div className="product-page">
           <div className="product-img">
              <img className='image' src={data.thumbnail} alt='imageLoadng...'/>
           </div>

        <div className="product-details">
            <p className='category'>{data.category}</p>
            <h2 className='title'>{data.title}</h2>
            <p className='brand'>{data.brand}</p>
            <p className='description'>{data.description}</p>
            <p className='discount'>Discount : {Math.floor(data.discountPercentage)} %</p>
            <p className='rating'>Rating : {data.rating}/5</p>
            <h4 className='original-price'>₹ { Math.floor((81.44 * data.price) + (((81.44 * data.price)/100)*data.discountPercentage)) }.00</h4>
            <h3 className='price'>₹ { Math.floor(81.44 * data.price)}.00</h3>
            <button className='btn-buy'>Buy</button><button className='btn-addtocart'>Add to Cart</button>
        </div>
  
      </div>

    </div>
    }
    </>
  )
}

export default Producpage