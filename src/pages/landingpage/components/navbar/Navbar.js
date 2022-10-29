import React from 'react'
import './Navbar.css'
import { BiSearchAlt,BiUserCircle } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="header-container">
      <div className="navbar">

        <div className="logo-div">
          <a href='/'>Ecommerce</a>
        </div>

        <div className="searchbar-div">
          <BiSearchAlt size={25} color="#1bab6e"/>
          <input type="text" placeholder="Search"/>
        </div>

        <div className="login">
          <Link to="/login">Login</Link>
        </div>

        <div className="user-avatar">
          <BiUserCircle size={28} color="#1bab6e"/>
          <span>Hi,User</span>
        </div>

        <div className="cart">
          <CgShoppingCart size={20} color="white"/>
          <Link to={"/cart"}>cart</Link>
        </div>

      </div>
    </div>
  )
}
export default Navbar;

