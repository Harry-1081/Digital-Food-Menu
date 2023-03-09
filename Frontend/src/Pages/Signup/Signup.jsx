import './Signup.css';
// import { auth } from '../../firebase'
// import { useState } from 'react';
import { useStates } from '../../States';

function Signup() {

  const { setEmail,setPassword,setConfirmpw,pwerror,passMatch,setUsername } 
  = useStates();

  return (
    <>
      <div className='signup-page'>
          <div className='signup-box'>

            <div className='signup-div'>
              <span className='signup-text'><b>Sign up</b></span>
            </div>

            <form onSubmit={passMatch}>

            <div className='username-div'>
              <span className='username-text'>Username</span>
              <input className='username-in' type='text' placeholder='Username' required
              onChange={(e) => setUsername(e.target.value)}></input>
            </div>

            <div className='mail2-div'>
              <span className='mail2-text'>Email</span>
              <input className='mail2-in' type='email' placeholder='Email' required
                onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className='pw2-div'>

              <span className='pw2-text1'>Password</span>
              <input className='pw2-in1' type='password' placeholder='Password' required
                onChange={(e) => setPassword(e.target.value)}></input>
              {pwerror && <span className='pwerror-text'><b>{pwerror}</b></span>}

              <span className='pw2-text2'>Confirm Password</span>
              <input className='pw2-in2' type='password' placeholder='Confirm Password' required
                onChange={(e) => setConfirmpw(e.target.value)}></input>
            </div>

            <div className='signupbtn-div'>
              <button className='signup-btn' >Sign up</button>
            </div>

                </form>
          </div>
      </div>
    </>
  );
}

export default Signup;