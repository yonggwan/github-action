import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          안녕하세요
          나를 고치고, 푸시하면
          git workflow 에 의해
          <code>.github/workflows/cicd.yaml</code> 의 설정을 토대로
          Job을 실행하여...
          Github runner에의해 빌드 및 aws s3 버킷으로 빌드파일을 업로드합니다 짜잔.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
