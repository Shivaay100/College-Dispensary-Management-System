import React, { useState } from 'react'
import './login.css'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ForgotModal from '../../components/FogotModal/forgotModal'
const Login = (props) => {

  const navigate = useNavigate();

  const [forgotPassword, setForgotPassword] = useState(false);
  const [loginField, setLoginField] = useState({ email: "", password: "" });
  const [registerField, setRegisterField] = useState({ name: "", email: "", password: "", regNumber: "" });


   const handleForgotModal = () => {
        setForgotPassword(prev => !prev)
    }

  const handleOnChange = (event, key, card) => {
    if (card === "login") {
      setLoginField({ ...loginField, [key]: event.target.value });
    } else {
      setRegisterField({ ...registerField, [key]: event.target.value });
    }
  }
  console.log(loginField);
  console.log(registerField);

  const handleLogin = async () => {
    if (loginField.email.trim() === "" || loginField.password.trim() === "") return toast.error("Please enter the credentials");
    props.showLoader();

    await axios.post("http://localhost:4000/api/auth/login", loginField, { withCredentials: true }).then((response) => {
      console.log(response)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("isLogin", true);
      props.handleLogin(true);
      if (response.data.user.role === "student") {
        navigate(`/student/${response.data.user._id}`)
      } else {
        navigate("/admin/dashboard")
      }
    }).catch((err) => {
      console.log(err);
      toast.error(err?.response?.data?.error);
    }).finally(() => {
      props.hideLoader();
    })
  }

  const handleRegister = async () => {
    if (registerField.name.trim() === "" || registerField.email.trim() === "" || registerField.password.trim() === "" || registerField.regNumber.trim() === "") return toast.error("Please enter the credentials");
    if (registerField.name.length < 3) return toast.error("Name should be at least 3 characters long")
    props.showLoader();
    await axios.post("http://localhost:4000/api/auth/register", registerField).then((response) => {
      toast.success("Registration successful")
      // setRegisterField({ name: "", email: "", password: "", regNumber: "" })
    }).catch((err) => {
      toast.error(err?.response?.data?.error);
    }).finally(() => {
      props.hideLoader();
    })
  }

  return (
    <div className='login-page'>

      <div className='login-page-card'>
        <div className='card-header-form'>Login</div>
        <div className='form-input-fields'>
          <input className='form-input' type='email' placeholder='Enter Email Id' value={loginField.email} onChange={(e) => handleOnChange(e, "email", "login")} />
          <input className='form-input' type='password' placeholder='Your Password' value={loginField.password} onChange={(e) => handleOnChange(e, "password", "login")} />
          <div className='form-btn' onClick={handleLogin} >Login</div>
        </div>
        <div className='forgot-password-link' onClick={handleForgotModal}>
          Forgot Password ?
        </div>
      </div>

      <div className='signup-page-card'>
        <div className='card-header-form'>Register</div>
        <div className='form-input-fields'>
          <input className='form-input' type='text' placeholder='Enter your name' value={registerField.name} onChange={(e) => handleOnChange(e, "name", "register")} />
          <input className='form-input' type='email' placeholder='Enter your mail id' value={registerField.email} onChange={(e) => handleOnChange(e, "email", "register")} />
          <input className='form-input' type='password' placeholder='Your Password' value={registerField.password} onChange={(e) => handleOnChange(e, "password", "register")} />
          <input className='form-input' type='text' placeholder='Enter your registration number' value={registerField.regNumber} onChange={(e) => handleOnChange(e, "regNumber", "register")} />
          <div className='form-btn' onClick={handleRegister} >Register</div>
        </div>
      </div>

      <ToastContainer />
       {
                forgotPassword && <ForgotModal showLoader={props.showLoader} hideLoader={props.hideLoader} closeModal={handleForgotModal} />
            }

    </div>
  )
}

export default Login