import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const loginHandler = async() => {
    console.log("user logged in")
    console.log({email,password})
    const user = {email,password}
    var config = {
      method: 'post',
      url: 'http://restapi.adequateshop.com/api/authaccount/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      user
    };
    try {
      const response = await axios.post(config);
      console.log(response)
      alert("user Logged in successfully...")
    } catch (error) {
      if(!error.response) {
        console.log("No Service Response");
      } else if (error.response?.status == 400) {
        console.log("Missing Username or Password");
      }else if (error.response?.status == 401) {
        console.log("Unauthorised");
      }else {
        console.log('Login failed');
      }
    }
  }

  return (
    <div className='login-body'>
        <h1>Welcome to Online Shopping</h1>
      <div className="login-wrapper">

        <div className="login-form-group">
          <h2>Login</h2>

          <div className="form-group">
            <input type="email" className='form-control' name='email *' placeholder="Email" autoFocus required
            value={email} onChange={(e)=> setEmail(e.target.value)}
            />
            <label className='form-label'>Email *</label>
          </div>

          <div className="form-group">
            <input type="password" className='form-control' name='password' placeholder="Password" required
            value={password} onChange={(e)=> setPassword(e.target.value)}
            />
            <label className='form-label'>Password *</label>
          </div>
  
          <div  className="login-btn">
            <button type='submit' onClick={loginHandler}>Login</button>
            <p> Don't have an account ? <a>Signup</a></p> 
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login;