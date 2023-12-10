import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './pages/Header'; // Header 컴포넌트를 import합니다.
import Activity from './pages/Activity'; // Activity 컴포넌트를 import합니다.
import Activity1 from './pages/Activity/1'; // Activity 컴포넌트를 import합니다.
import Activity2 from './pages/Activity/2';
import Activity3 from './pages/Activity/3';
import Activity4 from './pages/Activity/4';
import Write from './pages/write';
import Tree from './pages/tree';
import Crime from './pages/crime';
import Member from './pages/PersonPage';
import FMList from './pages/FMList';
import MoliList from './pages/MoliList';
import NewschoolList from './pages/NewschoolList';
import ShinbadList from './pages/ShinbadList';
import MenuList from './pages/MenuList';
import ShiningList from './pages/ShiningList';
import ShinhwaList from './pages/ShinhwaList';
import ShinarioList from './pages/ShinarioList';
import ShinaeList from './pages/ShinaeList';
import SwithList from './pages/SwithList';
import Sis1List from './pages/Sis1List';
import CrimeList from './pages/CrimeList';
import styles from './pages/style/HomePage.module.css';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-XDS9C62ZZV";

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
    <Router>
      <Header />
      <Routes>
        {/* 홈페이지 경로 설정 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/crime" element={<Crime />} />

        {/* "/map" 경로 설정 */}
        <Route path="/member" element={<Member />} />

        {/* 방명록 기능 구현 (Spring) */}
        <Route path="/get" element={<FMList />} />
        <Route path="/get2" element={<MoliList />} />
        <Route path="/get3" element={<NewschoolList />} />
        <Route path="/get4" element={<ShinbadList />} />
        <Route path="/get5" element={<MenuList />} />
        <Route path="/get6" element={<ShiningList />} />
        <Route path="/get7" element={<ShinhwaList />} />
        <Route path="/get8" element={<ShinarioList />} />
        <Route path="/get9" element={<ShinaeList />} />
        <Route path="/get10" element={<SwithList />} />
        <Route path="/get11" element={<Sis1List />} />
        <Route path="/get12" element={<CrimeList />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/write" element={<Write />} />

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