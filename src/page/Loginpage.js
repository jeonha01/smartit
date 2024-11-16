import React from 'react';
import { useState } from 'react';
import './Loginpage.css'; // CSS 파일 분리
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const Loginpage = ({ setAuthenticate }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState(''); // 아이디 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const id = '1234'
  const pw = '5678'

  const isFormFilled = username.trim() !== '' || password.trim() !== ''; // 입력 여부 확인

  const LoginUser = (event) => {
    event.preventDefault();
    if (username == id && password == pw) {
      setAuthenticate(true)
      navigate('/')
    } else {
      Swal.fire({
        text: "아이디 또는 비밀번호를 잘못 입력하셨습니다.",
        customClass: {
          popup: 'swal-popup',
          confirmButton: 'swal-button',
          title: 'swal-title', // 텍스트 스타일 지정
          content: 'swal-content', // 텍스트 가운데 배치용
        },
        buttonsStyling: false, // 버튼 스타일을 커스터마이징할 때 필수
        confirmButtonText: '확인', // 버튼 텍스트 설정
        allowOutsideClick: false, // 외부 클릭으로 닫힘 방지
        allowEscapeKey: false, // ESC 키로 닫힘 방지
      });
    }

  }

  return (
    <div className="login-container">
      <h1 className="login-title">환영합니다! 아이디와 비밀번호를 입력해 주세요.</h1>
      <form className="login-form" onSubmit={(event) => LoginUser(event)}>
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