import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
  return (
    <div className='login'>
       <img src={logo} className='login-logo'></img>
      <form className='login-form'>
        <h1>Sign up</h1>
        <input type='text' placeholder='Your name'></input>
        <input type='email' placeholder='Email'></input>
        <input type='password' placeholder='Password'></input>
        <button>Sign up</button>
        <div className='form-help'>
          <div className='remember'>
          <input type='checkbox'></input>
          <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
      </form>
      <div className='form-switch'>

      </div>
    </div>
  )
}

export default Login