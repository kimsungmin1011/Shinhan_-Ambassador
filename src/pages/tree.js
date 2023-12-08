import React from 'react';
import './style/tree.css';
import TreeImage from '../img/tree.jpg';
import Nick from '../img/nick.png';

// 트리 데이터
const treeData = [
    { name: "신한FM", url: "/get", image: TreeImage, nickimage: Nick },
    { name: "몰리고", url: "/get2", image: TreeImage, nickimage: Nick  },
    { name: "뉴스쿨", url: "/get3", image: TreeImage, nickimage: Nick  },
    { name: "신밧드", url: "/get4", image: TreeImage, nickimage: Nick  },
    { name: "신메뉴", url: "/get5", image: TreeImage, nickimage: Nick  },
    { name: "샤이닝", url: "/get6", image: TreeImage, nickimage: Nick  },
    { name: "신화", url: "/get7", image: TreeImage, nickimage: Nick  },
    { name: "시나리오", url: "/get8", image: TreeImage, nickimage: Nick  },
    { name: "신아이", url: "/get9", image: TreeImage, nickimage: Nick  },
    { name: "스윗", url: "/get10", image: TreeImage, nickimage: Nick  },
    { name: "신입사원", url: "/get11", image: TreeImage, nickimage: Nick  },
    { name: "크라임씬", url: "/get12", image: TreeImage, nickimage: Nick  }
  ];
  

  const Tree = ({ name, url, image, nickimage }) => (
    <div className="tree" onClick={() => window.location.href = url}>
      <img src={image} alt={name} />
      <img src={nickimage} alt={name} className="nick-image" /> {/* 이미지로 대체 */}
    </div>
  );
  

// 트리 컨테이너
const TreesContainer = () => (
    <div className="trees-container">
      {treeData.map((tree, index) => (
        <Tree key={index} name={tree.name} url={tree.url} image={tree.image} nickimage={tree.nickimage} />
      ))}
    </div>
  );

// 앱의 메인 컴포넌트
function App() {
  return (
    <div className="App">
      <TreesContainer />
    </div>
  );
}

export default App;
