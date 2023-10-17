import React from 'react';
import { useParams } from 'react-router-dom';
import PersonCard from './PersonCard';
import Taehwan from '../img/profile1.jpeg'
import Ayoung from '../img/profile2.jpeg'
import Sungmin from '../img/profile3.jpeg'
import Haewon from '../img/profile4.jpeg'
import Youkyung from '../img/profile5.jpeg'
import Youbin from '../img/profile6.jpeg'
import Jieun from '../img/profile7.jpeg'
import Haelin from '../img/profile8.jpeg'
import './style/a.module.css';


const rainbowColors = ['#99ccff'];

const people = [
  {
    profileImage: Taehwan,
    name: '박태환',
    school: '단국대학교',
    major: '미디어커뮤니케이션',
    role: 'ENFJ',
    intro: '너! 내 도..도도독! 5개월 간 신밧드의 모험과 함께 해주세요!',
    instagramUrl: 'https://www.instagram.com/projectinnerx/'
  },
  {
    profileImage: Ayoung,
    name: '고아영',
    school: '성균관대학교',
    major: '시스템경영공학과',
    role: 'ENFP',
    intro: '언제나 즐거운 모험을 할 거야!',
    instagramUrl: 'https://www.instagram.com/a___ong_/'
  },
  {
    profileImage: Sungmin,
    name: '김성민',
    school: '단국대학교',
    major: '컴퓨터공학과',
    role: 'ISTJ',
    intro: '안녕하세요 신한과 사귀는 남자입니다',
    instagramUrl: 'https://instagram.com/ksungmin00'
  },
  {
    profileImage: Haewon,
    name: '선혜원',
    school: '한양대학교 ERICA',
    major: '경영학과',
    role: 'ESTJ',
    intro: '신밧드의 팀원들과 재밌는 여정을 떠나면서 하고 싶었던 활동을 잘 완수할 테니 기대해주세요! 신대홍 화이팅~!',
    instagramUrl: 'https://www.instagram.com/hyeone.2/'
  },
  {
    profileImage: Youkyung,
    name: '이유경',
    school: '동국대학교',
    major: '사회복지학과',
    role: 'ESTJ',
    intro: '신밧드의 청춘 모험기를 보여 드리겠습니다!',
    instagramUrl: 'https://www.instagram.com/dbrudxdia/'
  },
  {
    profileImage: Youbin,
    name: '전유빈',
    school: '중앙대학교',
    major: '경영학과',
    role: 'ENTJ',
    intro: '쏠밧드와 함께할 새로운 모험, 가보자고!!',
    instagramUrl: 'https://www.instagram.com/bean._.vibe/'
  },
  {
    profileImage: Jieun,
    name: '채지은',
    school: '아주대학교',
    major: '불어불문학과',
    role: 'INTP',
    intro: '신밧드의 모험은 나한테 맡기라구~ 퐈이팅!!',
    instagramUrl: 'https://www.instagram.com/c_author_/'
  },
  {
    profileImage: Haelin,
    name: '홍혜린',
    school: '경희대학교',
    major: 'Hospitality 경영학과',
    role: 'ISTJ',
    intro: '막내가 모험 계획을 알차게 짜보겠습니다!',
    instagramUrl: 'https://instagram.com/hxxlin_yy/'
  },
  // ... 추가 인물 정보
];

function PersonPage() {
    return (
      <div className='home-page'>
        <h2>Shinbad's Member</h2>
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
