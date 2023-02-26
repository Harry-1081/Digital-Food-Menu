import './signup.css';
// import { auth } from '../../firebase'
// import { useState } from 'react';
import { useStates } from '../../States';

function Signup() {

  const { setEmail,setPassword,setConfirmpw,pwerror,passMatch,unerror,mailerror,setUsername,cpwerror } 
  = useStates();

  return (
    <>
      <div className='signup-page'>
          <div className='signup-box'>

            <div className='signup-div'>
              <span className='signup-text'><b>Sign up</b></span>
            </div>

            <div className='username-div'>
              <span className='username-text'>Username</span>
              <input className='username-in' type='text' placeholder='Username' required
              onChange={(e) => setUsername(e.target.value)}></input>
              {unerror && <span className='unerror-text'><b>{unerror}</b></span>}
            </div>

            <div className='mail2-div'>
              <span className='mail2-text'>Email</span>
              <input className='mail2-in' type='mail' placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}></input>
              {mailerror && <span className='mailerror-text'><b>{mailerror}</b></span>}
            </div>

            <div className='pw2-div'>

              <span className='pw2-text1'>Password</span>
              <input className='pw2-in1' type='password' placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}></input>
              {pwerror && <span className='pwerror-text'><b>{pwerror}</b></span>}

              <span className='pw2-text2'>Confirm Password</span>
              <input className='pw2-in2' type='password' placeholder='Confirm Password'
                onChange={(e) => setConfirmpw(e.target.value)}></input>
              {cpwerror && <span className='cpwerror-text'><b>{cpwerror}</b></span>}
            </div>

            <div className='signupbtn-div'>
              <button className='signup-btn' onClick={passMatch}>Sign up</button>
            </div>

          </div>
      </div>
    </>
  );
}

export default Signup;