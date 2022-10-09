import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';

function Login() {
  const [showSignup,setshowSignup] = useState(true);
  const toggleHandler = () => {
    setshowSignup(!showSignup)
  }

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const signupHandler = async () => {
    console.log("user Signed up")
    console.log({username,email,password})
    const user = ({username,email,password})
    try {
      const response = await axios.post("URL", user);
      console.log(response)
      alert("user Signed up successfully...")
    } catch (error) {
      console.log(error)
    }
  }
  const loginHandler = async() => {
    console.log("user logged in")
    console.log({username,password})
    const user = ({username,password})
    try {
      const response = await axios.post("URL", user);
      console.log(response)
      alert("user Logged in successfully...")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login-body'>
        <h1>Welcome to Online Shopping</h1>
      <div className="login-wrapper">

        <div className="login-form-group">
          <h2>{showSignup ? "Signup" : "Login"}</h2>

            <div className="form-group">
              <input type="text" class="form-control" name='username' placeholder="Username" autoFocus required
              value={username} onChange={(e)=> setUsername(e.target.value)}
              />
              <label className='form-label' for='username'>Username *</label>
            </div>
          {
            showSignup && 
          <div className="form-group">
            <input type="text" class="form-control" name='email *' placeholder="Email" required
            value={email} onChange={(e)=> setEmail(e.target.value)}
            />
            <label className='form-label' for='email'>Email *</label>
          </div>
          }

          <div className="form-group">
            <input type="password" class="form-control" name='password' placeholder="Password" required
            value={password} onChange={(e)=> setPassword(e.target.value)}
            />
            <label className='form-label' for="password">Password *</label>
          </div>
          {
            showSignup && 
            <div className="form-group">
             <input type="password" class="form-control" name='confirmpassword' placeholder="ConfirmPassword" required
             value={confirmpassword} onChange={(e)=> setConfirmPassword(e.target.value)}
             />
              <label className='form-label' for="confirmpassword">Confirm Password *</label>
              {
                password && confirmpassword ? 
                password === confirmpassword ? 
                <p style={{color:"#1bab6e", fontSize:"12px", margin:"-7.5px 0px", padding:"0px"}}>* Password Matched</p> 
                : <p style={{color:"red", fontSize:"12px", margin:"-7.5px 0px", padding:"0px"}}>* Password Not Matched</p> 
                : ("")
              }
            </div>
          }
          <div  className="login-btn">
            {showSignup ? <button type='submit' onClick={signupHandler}>Signup</button>
            : <button type='submit' onClick={loginHandler}>Login</button>}

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