import React from 'react';
import { useState } from 'react';
import './Loginpage.css'; // CSS 파일 분리

const Loginpage = () => {
  const [username, setUsername] = useState(''); // 아이디 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태

  const isFormFilled = username.trim() !== '' || password.trim() !== ''; // 입력 여부 확인

  return (
    <div className="login-container">
      <h1 className="login-title">환영합니다! 아이디와 비밀번호를 입력해 주세요.</h1>
      <form className="login-form">
        <input type="text" placeholder="아이디" className="login-input" value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="비밀번호" className="login-input" value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className={`login-button ${isFormFilled ? 'active' : 'disabled'}`}
          disabled={!isFormFilled} // 비활성화 상태 설정
        >로그인</button>
      </form>
    </div>
  );
};

export default Loginpage;