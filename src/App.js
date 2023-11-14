import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QuizApp from './pages/QuizApp';
import HomePage from './pages/HomePage';
import Header from './pages/Header'; // Header 컴포넌트를 import합니다.
import Activity from './pages/Activity'; // Activity 컴포넌트를 import합니다.
import Activity1 from './pages/Activity/1'; // Activity 컴포넌트를 import합니다.
import Activity2 from './pages/Activity/2';
import Activity3 from './pages/Activity/3';
import Activity4 from './pages/Activity/4';
import Crime from './pages/crime';
import Member from './pages/PersonPage';
import GuestbookList from './pages/GuestbookList';
import styles from './pages/style/HomePage.module.css';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        {/* 홈페이지 경로 설정 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/crime" element={<Crime />} />

        {/* "/map" 경로 설정 */}
        <Route path="/quiz" element={<QuizApp />} />
        <Route path="/member" element={<Member />} />

        {/* 방명록 기능 구현 (Spring) */}
        <Route path="/get" element={<GuestbookList />} />

        {/* 더 많은 라우트들을 필요에 따라 여기에 추가... */}
        <Route path="/activity" element={<Activity />} />
        <Route path="/activity/1" element={<Activity1 />} />
        <Route path="/activity/2" element={<Activity2 />} />
        <Route path="/activity/3" element={<Activity3 />} />
        <Route path="/activity/4" element={<Activity4 />} /> {/* Activity 라우트를 추가합니다. */}
      </Routes>
    </Router>
    <footer className={styles.footer}>
        <div className={styles['footer-content']}>
          <p>© 2023 Shinbad adventures All rights reserved</p>
          {/* Add any additional footer content here */}
        </div>
      </footer>
    </>
  );
}

export default App;
