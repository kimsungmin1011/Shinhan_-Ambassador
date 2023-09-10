import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // CSS 스타일을 적용하기 위한 import

function HomePage() {
  return (
    <div className="home-page">
      {/* 글의 제목 */}
      <h1 className="title">10월달 활동입니다</h1>

      {/* 작성자와 작성일 */}
      <div className="post-info">
        <span className="author">작성자: 김성민</span>
        <span className="date">작성일: 2023-09-04</span>
      </div>

      {/* 글의 본문 */}
      <div className="content">
        <p>10월에 진행한 활동들에 대해 이야기하려고 합니다. 다음과 같은 일들이 있었습니다:</p>
        {/* 다른 홈페이지 관련 내용들... */}
      </div>
      
    </div>
  );
}

export default HomePage;
