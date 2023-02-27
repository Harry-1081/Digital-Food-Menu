import './Login.css';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStates } from '../../States';

function Login() {

  // UseStates
  const { setEmail, setPassword, logincheck, mailerror2, pwerror2,googleLogin } = useStates();
  return (
    <>
      <div className='login-page'>
        <div className='login-box'>

          <div className='login-div'>
            <span className='login-text'><b>Sign in with</b></span>
          </div>

          <div className='mail-div'>
            <span className='mail-text'>Email</span>
            <input className='mail-in' type='mail' placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}></input>
              {mailerror2 && <span className='mailerror1-text'><b>{mailerror2}</b></span>}
          </div>

          <div className='pw-div'>
            <span className='pw-text'>Password</span>
            <input className='pw-in' type='password' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}></input>
              {pwerror2 && <span className='pwerror1-text'><b>{pwerror2}</b></span>}
          </div>

          <div className='loginbtn-div'>
            <button className='login-btn' onClick={logincheck}>Sign In</button>
          </div>

          <div className='google-div'>
            <button onClick={googleLogin} className='google-btn'><FaGoogle /> - Sign-in with Google</button>
          </div>

          <div className='signuplink-div'>
            <span className='signuplink-txt1'>Not a member ?</span>
            <Link to='/signup'>
              <span className='signuplink-txt2'><u>Sign up now</u></span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;