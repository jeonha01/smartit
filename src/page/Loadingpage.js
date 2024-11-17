import React, { useState, useEffect } from 'react';
import './Loadingpage.css';

const Loadingpage = () => {
  const [isRunning, setIsRunning] = useState(false);  // 검사 시작/중지 상태
  const [progress, setProgress] = useState(0);  // 진행률 (0 ~ 100)

  // 진행 상태가 변화하는 효과
  useEffect(() => {
    let interval;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 1, 100));  // 1씩 증가
      }, 6000);  // 6초마다 1% 증가
    } else if (!isRunning) {
      clearInterval(interval);  // 검사 중지 시 진행 중지
    }
    return () => clearInterval(interval);  // 컴포넌트가 언마운트될 때 인터벌 클리어
  }, [isRunning, progress]);

  const handleStart = () => {
    setIsRunning(true);
    setProgress(0);  // 검사 시작 시 0부터 시작
  };

  const handleStop = () => {
    setIsRunning(false);  // 검사 중지
  };

  return (
    <div className="loading-page">
      <h1>인바디 검사</h1>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <span className="progress-text">{progress}%</span>
      </div>
      <div className="buttons">
        <button className="start-btn" onClick={handleStart} disabled={isRunning}>
          검사 시작
        </button>
        <button className="stop-btn" onClick={handleStop} disabled={!isRunning}>
          검사 중지
        </button>
      </div>
    </div>
  );
};

export default Loadingpage;
