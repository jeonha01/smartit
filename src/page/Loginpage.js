import React from 'react';
import './Loginpage.css'; // CSS 파일 분리

const Loginpage = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back!</h1>
      <form className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Loginpage;