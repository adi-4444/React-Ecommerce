import React from 'react'
import './Navbar.css'
import { BiSearchAlt,BiUserCircle } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';


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
          <p>Login</p>
        </div>

        <div className="user-avatar">
          <BiUserCircle size={28} color="#1bab6e"/>
          <span>Hi,User</span>
        </div>

        <div className="cart">
          <CgShoppingCart size={20} color="white"/>
          <p>cart</p>
        </div>

      </div>
    </div>
  )
}
export default Navbar;
