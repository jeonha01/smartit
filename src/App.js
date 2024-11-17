import { useState } from 'react';
import './App.css';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Mainpage from './page/Mainpage';
import Loadingpage from './page/Loadingpage';
import Loginpage from './page/Loginpage';
import Navbar from './component/Navbar';

function App() {
  const [authenticate, setAuthenticate] = useState(false)
  const PrivateRoute = () => {
    return authenticate == true ? <Navigate to="/loading" /> : <Navigate to="/login" />
  }

  const location = useLocation()
  return (
    <div>
      <Routes>
        <Route path='/' element={<PrivateRoute />} />
        <Route path='/login' element={<Loginpage setAuthenticate={setAuthenticate} />} />
        <Route path='/loading' element={<Loadingpage />} />
        <Route path="/main" element={<Mainpage />} />
      </Routes>
      {/* 메인페이지에서만 Navbar를 렌더링 */}
      {location.pathname === '/main' && <Navbar />}
    </div>
  );
}

export default App;
