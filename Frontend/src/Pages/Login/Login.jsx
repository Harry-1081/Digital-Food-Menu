import './Login.css';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStates } from '../../States';
import { TextField } from '@mui/material';

function Login() {

  // UseStates
  const { setEmail, setPassword, logincheck, googleLogin } = useStates();
  return (
    <>
      <div className='login-page'>
        <div className='login-box'>

          <div className='login-div'>
            <span className='login-text'><b>Sign in with</b></span>
          </div>

          <form onSubmit={logincheck}>
          <div className='mail-div'>
          <TextField  className='mail-in' type='email' label="Email" variant="standard" required
              onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className='pw-div'>
          <TextField className='pw-in' type='password' label="Password" variant="standard" required
              onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className='loginbtn-div'>
            <button className='login-btn'>Sign In</button>
          </div>
          </form>

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