import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const signupHandler = async () => {
    console.log("user Signed up")
    console.log({name,email,password})
    const user = ({name,email,password})
    try {
      const response = await axios.post("URL", user);
      console.log(response)
      alert("user Signed up successfully...")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='signup-body'>
        <h1>Welcome to Online Shopping</h1>
      <div className="signup-wrapper">

        <div className="signup-form-group">
          <h2>Signup</h2>

            <div className="form-group">
              <input type="text" class="form-control" name='name' placeholder="Name" autoFocus required
              value={name} onChange={(e)=> setName(e.target.value)}/>
              <label className='form-label' for='username'>Name *</label>
            </div>

          <div className="form-group">
            <input type="text" class="form-control" name='email *' placeholder="Email" required
            value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <label className='form-label' for='email'>Email *</label>
          </div>

          <div className="form-group">
            <input type="password" class="form-control" name='password' placeholder="Password" required
            value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <label className='form-label' for="password">Password *</label>
          </div>

            <div className="form-group">
             <input type="password" class="form-control" name='confirmpassword' placeholder="ConfirmPassword" required
             value={confirmpassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
              <label className='form-label' for="confirmpassword">Confirm Password *</label>
              {
                password && confirmpassword ? 
                password === confirmpassword ? 
                <p style={{color:"#1bab6e", fontSize:"12px", margin:"-7.5px 0px" , padding:"0px",marginTop:"-15px"}}>* Password Matched</p> 
                : <p style={{color:"red", fontSize:"12px", margin:"-7.5px 0px", padding:"0px",marginTop:"-15px"}}>* Password Not Matched</p> 
                : ("")
              }
            </div>

          <div  className="signup-btn">
            <button type='submit'>Signup</button>
            <p>Already have an account ? <a>Login</a></p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Signup;