import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Categories.css'
import { useParams } from 'react-router-dom'
import Card from './Card'
import Loading from '../../../../common/Loading/Loading'


const Categories = () => {

   const [data,setData] = useState([])
   const {id} = useParams();
   const [isLoading,setIsLoading] = useState(true)

   useEffect(() => {
      setTimeout(() => {
         axios.get(`https://dummyjson.com/products/category/${id}`)
         .then((res) =>  setData(res.data.products),setIsLoading(false))
         .catch(err => console.log(err),setIsLoading(false))
      },700)
   },[id])
  

  return (
      <div className='category'>
      {
         isLoading ? <Loading /> : <Card data={data}/>
      }
      </div>

  )
}

export default Categories;