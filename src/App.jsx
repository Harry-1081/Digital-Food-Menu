import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { States } from './States';
import Login from './components/Login/login';
import Signup from './components/signup/signup';
import Home from './components/Home/home';

function App() {
  return (
    <div className='router'>
      <BrowserRouter>
        <States>
          <Routes>

            <Route
              path='/home'
              element={<Home />}
            />
            
            <Route
              path="/"
              element={<Login />}
            />

            <Route
              path="/signup"
              element={<Signup />}
            />

          </Routes>
        </States>
      </BrowserRouter>
    </div>
  );
}

export default App;
