import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Home from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path='*' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
