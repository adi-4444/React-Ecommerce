import React,{useState, useEffect} from 'react'
import './LandingPage.css'
import axios from 'axios'
import Card from './components/product/Card';
import Navbar from './components/navbar/Navbar';
import Login from '../authentication/Login/Login'
import Signup from '../authentication/Signup/Signup';
import {Routes, Route} from 'react-router-dom'
// import Loading from '../Loading/Loading'
// import Productpage from './components/product/Productpage';
import Sidenav from './components/sidenav/Sidenav';

function Main() {

  const [data,setData] = useState([])
  // const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
      axios.get("https://dummyjson.com/products?limit=100")
      .then((res) => setData(res.data.products))
      .catch(err => console.log(err))
  },[])


  return (
    <>
      <Navbar />
      <Sidenav />
        <Routes>
          <Route path='/' element={<Card data={data}/>} />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup />} />
          <Route path='/category/:id' element={<Card data={data}/>} />
        </Routes>
    </>

  )
}

export default Main;


