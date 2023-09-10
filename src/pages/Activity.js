import React from 'react';
import { Link } from 'react-router-dom';
import './style/Activity.css';

const Activity = () => {
  // 예시 데이터
  const posts = [
    { id: 1, title: '9월달 활동', content: '9월 활동 우수팀 선정!', image: 'https://via.placeholder.com/150' },
    { id: 2, title: '10월달 활동', content: '10월 활동 우수팀 선정!', image: 'https://via.placeholder.com/150' },
    { id: 3, title: '11월달 활동', content: '11월 활동 우수팀 선정!', image: 'https://via.placeholder.com/150' },
    { id: 4, title: '12월달 활동', content: '12월 활동 우수팀 선정!', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <h2>게시물 확인</h2>
      <div className="post-container">
        {posts.map((post) => (
          <Link to={`/activity/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="post-box">
              <img src={post.image} alt={post.title} className="post-image" />
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Activity;
