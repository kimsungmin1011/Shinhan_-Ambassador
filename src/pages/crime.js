import React from 'react';
import { Link } from 'react-router-dom';
import fishing from '../img/crime.png';
import styles from './style/HomePage.module.css';

function HomePage() {
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
      <img src={fishing} className={styles.crimeImg} />
        <h2 className={styles.leftAlign}>⚠️ 긴급 경고: 사회초년생 대상 알바 사기 증가</h2>
        <p>최근, 사회초년생들을 대상으로 한 알바 사기 범죄가 급증하고 있습니다. 이러한 범죄는 심각한 경제적, 정신적 피해를 야기하며, 누구나 피해자가 될 수 있습니다.</p><br />
        <h2 className={styles.leftAlign}>🔍 범죄 사례:</h2>
        <p>쇼핑몰 후기 알바: 제품을 사용해보지 않고 무단으로 쇼핑몰 후기를 남기는 알바</p>
        <p>취업 사기: 정식으로 등록된 회사가 아닌 곳에 취업을 하는 행위</p>
        <p>환전 사기 알바: 환전 금액을 전달하라는 식의 현금 조달 임무</p><br />
        <h2 className={styles.leftAlign}>🛑 예방 방법:</h2>
        <p>1. 과도한 선금 요구 대응: 알바 시작 전 과도한 선금이나 등록비를 요구할 경우, 즉시 의심하십시오.</p>
        <p>2. 개인 정보 보호: 알바 지원 과정에서 과도한 개인 정보를 요구할 경우, 즉시 거절하십시오.</p>
        <p>3. 알바 사기 관련 문자 주의: 고수익 알바 제안과 관련된 문자를 받았을 때는 무조건 거절하십시오.</p><br />
        <h2 className={styles.leftAlign}>🆘 대처 방법:</h2>
        <p>1. 금융감독원, 알바몬 등을 이용하여 해당 기업이 믿을만한지 확인하기</p>
        <p>2. 알바 사기를 당하면 그 즉시 경찰이나 고용노동부 고용보험 콜센터(1350)에 신고하기</p>
        {/* 다른 홈페이지 관련 내용들... */}
      </div>
      
    </div>
  );
}

export default HomePage;
