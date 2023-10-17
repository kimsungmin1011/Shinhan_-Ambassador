import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import logo from '../img/신대홍.png';
import Shinbad from '../img/Shinbad.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  }

  // 추가된 함수: 메뉴 항목을 클릭했을 때 호출됩니다.
  const closeMenuAndNavigate = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className="header">
      <img src={logo} alt="로고" />
      <Link to="/" onClick={closeMenuAndNavigate}>
        <img src={Shinbad} alt="신밧드" />
      </Link>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={isMenuOpen ? 'open' : 'closed'}>
        <ul>
          <li><Link to="/" onClick={closeMenuAndNavigate}>홈</Link></li>
          <li><Link to="/activity" onClick={closeMenuAndNavigate}>우리의 여정</Link></li>
          <li><Link to="/member" onClick={closeMenuAndNavigate}>라인업 소개</Link></li>
          <li><Link to="/quiz" onClick={closeMenuAndNavigate}>신밧드 퀴즈!</Link></li>
        </ul>
      </nav>
    </div>
  );
}


export default Header;
