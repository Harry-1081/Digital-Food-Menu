import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { States } from './States';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import AdminHome from './Admin/AdminHome';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='router'>
      <BrowserRouter>
        <States>
          <Routes>

            <Route
              path='/home'
              element=
              {
                <>
                  <Navbar />
                  <Home />
                </>
              }
            />

            <Route
              path='/admin/home'
              element=
              {
                <>
                  <Navbar />
                  <AdminHome />
                </>
              }
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
