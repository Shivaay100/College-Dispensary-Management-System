import React,{useState} from 'react'
import './login.css'
const Login = () => {
  const [loginField, setLoginField] = useState({email: "", password: ""});
  const [registerField, setRegisterField] = useState({name: "", email: "", password: "", regNumber: ""});

  const handleOnChange=(event,key,card)=>{
    if(card === "login") {
      setLoginField({...loginField, [key]: event.target.value});
    } else {
      setRegisterField({...registerField, [key]: event.target.value});
    }
  }
  console.log( loginField);
  console.log(registerField); 

  return (
     <div className='login-page'>

         <div className='login-page-card'>
            <div className='card-header-form'>Login</div>
            <div className='form-input-fields'>
                <input className='form-input' type='email' placeholder='Enter Email Id' value={loginField.email} onChange={(e) => handleOnChange(e, "email", "login")} />
                <input className='form-input' type='password' placeholder='Your Password' value={loginField.password} onChange={(e) => handleOnChange(e, "password", "login")} />
                <div className='form-btn' >Login</div>
            </div>
            <div className='forgot-password-link'>Forgot Password ?</div>
         </div> 

         <div className='signup-page-card'>
            <div className='card-header-form'>Register</div>
            <div className='form-input-fields'>
                <input className='form-input' type='text' placeholder='Enter your name' value={registerField.name} onChange={(e) => handleOnChange(e, "name", "register")} />
                <input className='form-input' type='email' placeholder='Enter your mail id' value={registerField.email} onChange={(e) => handleOnChange(e, "email", "register")} />
                <input className='form-input' type='password' placeholder='Your Password' value={registerField.password} onChange={(e) => handleOnChange(e, "password", "register")} />
                <input className='form-input' type='text' placeholder='Enter your registration number' value={registerField.regNumber} onChange={(e) => handleOnChange(e, "regNumber", "register")} />
                <div className='form-btn' >Register</div>
            </div>
         </div> 
     </div>
  )
}

export default Login