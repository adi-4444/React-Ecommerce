import React, { useState } from 'react'
import './Login.css'

function Login() {
  const [showSignup,setshowSignup] = useState(true);
  const toggleHandler = () => {
    setshowSignup(!showSignup)
  }

  return (
    <div className='login-body'>
        <h1>Welcome to Online Shopping</h1>
      <div className="login-wrapper">

        <div className="login-form-group">
          <h2>{showSignup ? "Signup" : "Login"}</h2>
          <div className="form-group">
            <input type="text" class="form-control" name='email' placeholder="Email" autoFocus required/>
            <label className='form-label' for='email'>Email</label>
          </div>
          {
            showSignup && 
            <div className="form-group">
              <input type="text" class="form-control" name='name' placeholder="Name" required/>
              <label className='form-label' for='name'>Name</label>
            </div>
          }

          <div className="form-group">
            <input type="password" class="form-control" name='password' placeholder="Password" required/>
            <label className='form-label' for="password">Password</label>
          </div>
          {
            showSignup && 
            <div className="form-group">
             <input type="password" class="form-control" name='confirmpassword' placeholder="ConfirmPassword" required/>
              <label className='form-label' for="confirmpassword">Confirm Password</label>
            </div>
          }
          <div className="login-btn">
            <button>{showSignup ?  "Signup": "Login"}</button>
            {
              showSignup ? <p>Already have an account ? <a onClick={toggleHandler}>Login</a></p>
              :
              <p> Don't have an account ? <a onClick={toggleHandler}>Signup</a></p>
            }
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login;