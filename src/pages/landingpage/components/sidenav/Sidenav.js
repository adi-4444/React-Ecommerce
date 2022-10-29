import './Sidenav.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Sidenav = () => {
   const [data,setData] = useState([])

   useEffect(() => {
     axios.get("https://dummyjson.com/products/categories")
     .then((res) =>  setData(res.data))
     .catch(err => console.log(err))
 },[])
  return (
    <div className='sidenav-wrapper'>
      {
         data && data.map((data,index) => (
               <div className='category-list'>
                    <Link key={index} to={`/categories/${data}`}><h4>{data}</h4></Link>
               </div>
         ))
      }
    </div>
  )
}

export default Sidenav;