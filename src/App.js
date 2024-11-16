import { useState } from 'react';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Mainpage from './page/Mainpage';
import Loadingpage from './page/Loadingpage';
import Loginpage from './page/Loginpage';

function App() {
  const [authenticate, setAuthenticate] = useState(false)
  const PrivateRoute = () => {
    return authenticate == true ? <Mainpage /> : <Navigate to="/login" />
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<PrivateRoute />} />
        <Route path='/login' element={<Loginpage setAuthenticate={setAuthenticate}/>} />
        <Route path='/loading' element={<Loadingpage />} />
      </Routes>
    </div>
  );
}

export default App;
