import React from 'react'
import './login.css'
const Login = () => {
  return (
     <div className='login-page'>

         <div className='login-page-card'>
            <div className='card-header-form'>Login</div>
            <div className='form-input-fields'>
                <input className='form-input' type='email' placeholder='Enter Email Id' />
                <input className='form-input' type='password' placeholder='Your Password' />
                <div className='form-btn' >Login</div>
            </div>
            <div className='forgot-password-link'>Forgot Password ?</div>
         </div> 

         <div className='signup-page-card'>
            <div className='card-header-form'>Register</div>
            <div className='form-input-fields'>
                <input className='form-input' type='text' placeholder='Enter your name' />
                <input className='form-input' type='email' placeholder='Enter your mail id' />
                <input className='form-input' type='password' placeholder='Your Password' />
                <input className='form-input' type='text' placeholder='Enter your registration number' />
                <div className='form-btn' >Register</div>
            </div>
         </div> 
     </div>
  )
}

export default Login