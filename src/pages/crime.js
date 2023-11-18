import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fishing from '../img/crime.png';
import styles from './style/HomePage.module.css';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-XDS9C62ZZV";

function HomePage() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="home-page">
      {/* 글의 제목 */}
      <h1 className="title">당신은 낚였습니다!</h1>

      {/* 작성자와 작성일 */}
      <div className="post-info">
        <span className="author">작성자: 김성민</span>
        <span className="date">작성일: 2023-11-05</span>
      </div>

      {/* 글의 본문 */}
      <div className="content">
      <img src={fishing} className={styles.homePageImg} />
        <p>보이스피싱, 즉 전화금융사기는 현대 사회에서 누구도 예외일 수 없는 심각한 범죄 행위입니다.</p>
        <p>이는 단순한 사기 행위를 넘어서서 피해자의 재산은 물론 심리적 안정까지 극심하게 위협하는 범죄로, 고도로 계획되고 치밀하게 실행되기 때문에, 특히 인터넷과 모바일 기기 사용이 일상화된 오늘날 더욱 그 위험이 증가하고 있습니다.</p>
        {/* 다른 홈페이지 관련 내용들... */}
      </div>
      
    </div>
  );
}

export default HomePage;
