import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { States } from './States';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import AdminHome from './components/Admin/Admin';
import AddProduct from './components/Admin/AddProduct';

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
              path='/admin/home'
              element={<AdminHome/>}
            />

            <Route
              path='/admin/add'
              element={<AddProduct/>}
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
