import { useState } from 'react';
import './App.css';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Mainpage from './page/Mainpage';
import Loadingpage from './page/Loadingpage';
import Loginpage from './page/Loginpage';
import Navbar from './component/Navbar';

function App() {
  // const [authenticate, setAuthenticate] = useState(false)
  // const PrivateRoute = () => {
  //   return authenticate == true ? <Mainpage /> : <Navigate to="/login" />
  // }

  const location = useLocation()
  return (
    <div>
      <Routes>
        <Route path='/a' element={<Mainpage />} />
        {/* <Route path='/login' element={<Loginpage setAuthenticate={setAuthenticate} />} /> */}
        <Route path='/' element={<Loadingpage />} />
      </Routes>
      {/* 메인페이지에서만 Navbar를 렌더링 */}
      {/* {location.pathname === '/' && <Navbar />} */}
    </div>
  );
}

export default App;
