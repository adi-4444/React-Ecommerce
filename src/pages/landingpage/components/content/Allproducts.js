import React,{useState, useEffect} from 'react'
import Card from './Card'
import axios from 'axios'
import Loading from '../../../../common/Loading/Loading'

const Allproducts = () => {
   const [data,setData] = useState([])
   const [isLoading,setIsLoading] = useState(true)
 
   useEffect(() => {
    setTimeout(() => {
      axios.get("https://dummyjson.com/products?limit=100")
      .then((res) => setData(res.data.products),setIsLoading(false))
      .catch(err => console.log(err))
    },700)
   },[])

 
  return (
    <div>

      {
        isLoading ? <Loading /> : <Card data={data}/> 
      }
      
    </div>
  )
}

export default Allproducts;