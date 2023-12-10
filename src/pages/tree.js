import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/tree.css';
import TreeImage from '../img/tree.jpg';
import Nick from '../img/nick.png';
import Fm from '../img/fm.png';
import Moli from '../img/moli.png';
import Newschool from '../img/newschool.png';
import Menu from '../img/menu.png';
import Shinhwa from '../img/shinhwa.png';
import Shinrio from '../img/shinario.png';
import Shining from '../img/shining.png';
import sis1 from '../img/sis1.png';
import Shinae from '../img/shinae.png';
import Swith from '../img/swith.png';
import Crimeshin from '../img/crimeshin.png';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

// Tree data
const treeData = [
  { name: "신한FM", url: "/get", image: TreeImage, nickimage: Fm },
  { name: "몰리고", url: "/get2", image: TreeImage, nickimage: Moli },
  { name: "뉴스쿨", url: "/get3", image: TreeImage, nickimage: Newschool },
  { name: "신밧드", url: "/get4", image: TreeImage, nickimage: Nick },
  { name: "신메뉴", url: "/get5", image: TreeImage, nickimage: Menu },
  { name: "샤이닝", url: "/get6", image: TreeImage, nickimage: Shining },
  { name: "신화", url: "/get7", image: TreeImage, nickimage: Shinhwa },
  { name: "시나리오", url: "/get8", image: TreeImage, nickimage: Shinrio },
  { name: "신아이", url: "/get9", image: TreeImage, nickimage: Shinae },
  { name: "스윗", url: "/get10", image: TreeImage, nickimage: Swith },
  { name: "신입사원", url: "/get11", image: TreeImage, nickimage: sis1 },
  { name: "크라임씬", url: "/get12", image: TreeImage, nickimage: Crimeshin }
];

// 별을 생성하는 함수
const createStars = (count) => {
  return Array(count).fill('*');
};

// Tree 컴포넌트
const Tree = ({ name, url, image, nickimage, messageCount }) => {
  return (
    <div className="tree" onClick={() => window.location.href = url}>
      <img src={image} alt={name} className="tree-image" />
      <div className="star-container">
        {createStars(messageCount).map((star, index) => (
          <span key={index} className="star">{star}</span>
        ))}
      </div>
      <img src={nickimage} alt={`${name} nick`} className="nick-image" />
      <div className="tree-details">
        {/* 여기에 추가적인 세부 정보를 넣을 수 있습니다 */}
      </div>
    </div>
  );
};

// TreesContainer component
const TreesContainer = ({ messageCounts }) => (
  <div className="trees-container">
    {treeData.map((tree, index) => (
      <Tree
        key={index}
        name={tree.name}
        url={tree.url}
        image={tree.image}
        nickimage={tree.nickimage}
        messageCount={messageCounts[index]} // Pass message count as a prop
      />
    ))}
  </div>
);

// ... (previous imports and code)

function App() {
  const navigate = useNavigate(); // useNavigate 사용
    const [messageCounts, setMessageCounts] = useState(Array(treeData.length).fill(0));
    const handleWriteButtonClick = () => {
      navigate('/write'); // useNavigate를 이용한 경로 이동
  };  
  useEffect(() => {
    // 모든 팀에 대한 데이터를 가져오는 함수
    const fetchData = async () => {
      try {
        const newMessageCounts = [...messageCounts]; // 기존 messageCounts의 복사본 생성
  
        // treeData의 각 팀을 순회
        for (let i = 0; i < treeData.length; i++) {
          const teamName = treeData[i].name;
          const response = await axios.get(`http://localhost:8080/guestbook/${teamName}`);
          newMessageCounts[i] = response.data.length; // 각 팀의 메시지 수 업데이트
        }
  
        setMessageCounts(newMessageCounts); // 새 메시지 수로 상태 업데이트
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생: ', error);
        alert('통신에 문제가 발생했습니다. DM으로 문의 바랍니다.');
      }
    };
  
    fetchData();
  }, []); // 마운트 시 한 번만 실행되도록 의존성 배열을 비워둠
  
    return (
      <div className="App">
        <TreesContainer messageCounts={messageCounts} />
        <button className="write-button" onClick={handleWriteButtonClick}>메시지 작성</button>
      </div>
    );
  }
  
  export default App;
  