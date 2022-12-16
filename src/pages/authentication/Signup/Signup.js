import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');


  let data = JSON.stringify({
    'name':name,
    'email':email,
    'password':confirmpassword
  })
  
  const config = {
    method: 'post',
    url : 'http://restapi.adequateshop.com/api/authaccount/registration',
    headers : {
      'Content-Type': 'application/json',
    },
    data : data
  }

  const signupHandler = () => {
    console.log(data)
    axios(config)
    .then(res => console.log(JSON.stringify(res)))
    .catch(err => console.log(err))
  }
 
 
  return (
    <div className='signup-body'>
        <h1>Welcome to Online Shopping</h1>
      <div className="signup-wrapper">

        <div className="signup-form-group">
          <h2>Signup</h2>

            <div className="form-group">
              <input type="text" className='form-control' name='name' placeholder="Name" autoFocus required
              value={name} onChange={(e)=> setName(e.target.value)}/>
              <label className='form-label'>Name *</label>
            </div>

          <div className="form-group">
            <input type="text" className='form-control' name='email *' placeholder="Email" required
            value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <label className='form-label'>Email *</label>
          </div>

          <div className="form-group">
            <input type="password" className='form-control' name='password' placeholder="Password" required
            value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <label className='form-label'>Password *</label>
          </div>

            <div className="form-group">
             <input type="password" className='form-control' name='confirmpassword' placeholder="ConfirmPassword" required
             value={confirmpassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
              <label className='form-label'>Confirm Password *</label>
              {
                password && confirmpassword ? 
                password === confirmpassword ? 
                <p style={{color:"#1bab6e", fontSize:"12px", margin:"-7.5px 0px" , padding:"0px",marginTop:"-15px"}}>* Password Matched</p> 
                : <p style={{color:"red", fontSize:"12px", margin:"-7.5px 0px", padding:"0px",marginTop:"-15px"}}>* Password Not Matched</p> 
                : ("")
              }
            </div>

          <div  className="signup-btn">
            <button type='submit' onClick={signupHandler}>Signup</button>
            <p>Already have an account ? <Link to="/login">Login</Link></p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Signup;