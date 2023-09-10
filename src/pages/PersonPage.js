import React from 'react';
import { useParams } from 'react-router-dom';
import PersonCard from './PersonCard';
import Sungmin from '../img/김성민_사진.jpg'
import './style/a.css';

const rainbowColors = ['#99ccff'];

const people = [
  {
    profileImage: Sungmin,
    name: '박태환',
    school: '단국대학교',
    major: '미디어커뮤니케이션',
    role: '팀장',
    intro: '',
    instagramUrl: 'https://www.instagram.com/projectinnerx/'
  },
  {
    profileImage: Sungmin,
    name: '고아영',
    school: '성균관대학교',
    major: '시스템경영공학과',
    role: '',
    intro: '',
    instagramUrl: 'https://www.instagram.com/a___ong_/'
  },
  {
    profileImage: Sungmin,
    name: '김성민',
    school: '단국대학교',
    major: '컴퓨터공학과',
    role: '',
    intro: '',
    instagramUrl: 'https://instagram.com/ksungmin00'
  },
  {
    profileImage: Sungmin,
    name: '선혜원',
    school: '한양대학교 ERICA',
    major: '경영학과',
    role: '',
    intro: '',
    instagramUrl: 'https://www.instagram.com/hyeone.2/'
  },
  {
    profileImage: Sungmin,
    name: '이유경',
    school: '동국대학교',
    major: '사회복지학과',
    role: '',
    intro: '',
    instagramUrl: 'https://www.instagram.com/dbrudxdia/'
  },
  {
    profileImage: Sungmin,
    name: '전유빈',
    school: '중앙대학교',
    major: '경영학과',
    role: '',
    intro: '',
    instagramUrl: 'https://www.instagram.com/bean._.vibe/'
  },
  {
    profileImage: Sungmin,
    name: '채지은',
    school: '아주대학교',
    major: '불어불문학과',
    role: '',
    intro: '',
    instagramUrl: 'https://www.instagram.com/c_author_/'
  },
  {
    profileImage: Sungmin,
    name: '홍혜린',
    school: '경희대학교',
    major: '철학과',
    role: '',
    intro: '',
    instagramUrl: 'https://instagram.com/hxxlin_yy/'
  },
  // ... 추가 인물 정보
];

function PersonPage() {
    return (
      <div className='home-page'>
        <h1>4조의 주역들</h1>
        <div className="person-grid">
          {people.map((person, index) => {
            const color = rainbowColors[index % rainbowColors.length];
            return <PersonCard key={index} {...person} color={color} />;
          })}
        </div>
      </div>
    );
}
  

export default PersonPage;
