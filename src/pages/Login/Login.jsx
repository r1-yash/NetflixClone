import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
  const [signState, setSignState] = useState("Sign In")

  return (
    <div className='login'>
      <div>
      <img src={logo} className='login-logo'></img>
      <form className='login-form'>
        <h1>{signState}</h1>
        {signState==="Sign Up"?<input type='text' placeholder='Your name'></input>:<></>
}
        <input type='email' placeholder='Email'></input>
        <input type='password' placeholder='Password'></input>
        <button>{signState}</button>
        <div className='form-help'>
          <div className='remember'>
          <input type='checkbox'></input>
          <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
        <div className='form-switch'>
          {signState === "Sign In" ?<p>New to Netflix ? <span onClick={() => {
            setSignState("Sign Up")
          }}>Sign Up Now</span></p>:<p>Already have account? <span>Sign In Now</span></p>
}
      </div>
      </form>
      </div>
    </div>
  )
}

export default Login