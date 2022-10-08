import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login-body'>
        <h1>Welcome to Online Shopping</h1>
      <div className="login-wrapper">

        <div className="login-form-group">
          <h2>Login</h2>
          <div className="username form-group">
            <input type="text" class="form-control" name='username' placeholder="username" autoFocus required/>
            <label class="form-label" for='username'>Username</label>
          </div>

          <div className="password form-group">
            <input type="password" class="form-control" name='password' placeholder="password" required/>
            <label class="form-label" for="password">Password</label>
          </div>
          <div className="login-btn">
            <button>Login</button>
            <p>Don't have an account ? <a href='/'>Sign Up</a></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login;