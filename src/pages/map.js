import React from 'react';
import './style/ImageDisplay.css'; // 수정된 부분

// 이미지들 import
import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpg';
import image4 from '../img/4.jpg';
import image5 from '../img/5.jpg';
import image6 from '../img/6.jpg';
import image7 from '../img/7.jpg';
import image8 from '../img/8.jpg';
import image9 from '../img/9.jpg';
import image10 from '../img/10.jpg';
import image11 from '../img/11.jpg';
import image12 from '../img/12.jpg';
import image13 from '../img/13.jpg';
import image14 from '../img/14.jpg';

const ImageDisplay = () => {
  // 이미지들을 배열에 저장
  const images = [
    image1, image2, image3, image4, image5, 
    image6, image7, image8, image9, image10, 
    image11, image12, image13, image14
  ];

  return (
    <div className="image-display">
      <h1 className="title">쏠박사님을 아세요? (Prod. 신밧드)</h1>
      <div className="post-info">
        <span className="author">작성자: 쏠박사님</span>
        <span className="date">작성일: 2023-09-22</span>
      </div>
      <div className="content">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="image" />
        ))}
      </div>
    </div>
  );
}

export default ImageDisplay;
