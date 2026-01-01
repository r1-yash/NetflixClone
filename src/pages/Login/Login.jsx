import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
  return (
    <div className='login'>
       <img src={logo} className='login-logo'></img>
      <form className='login-form'>
        <input type='text' placeholder='Your name'></input>
        <input type='email' placeholder='Email'></input>
        <input type='password' placeholder='Password'></input>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default Login