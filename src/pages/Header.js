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

  return (
    <div className="header">
      <img src={logo} alt="로고" />
      <Link to="/">
        <img src={Shinbad} alt="신밧드" />
      </Link>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={isMenuOpen ? 'open' : 'closed'}>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/activity">우리의 여정</Link></li>
          <li><Link to="/member">라인업 소개</Link></li>
          <li><Link to="/map">4조가 다녀간 곳</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;