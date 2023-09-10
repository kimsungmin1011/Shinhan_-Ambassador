import React from 'react';
import styles from './style/ImageDisplay.css';

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
    <div className="image-container">
      <h2>쏠박사님을 아세요? (Prod. 신밧드)
      </h2>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
}

export default ImageDisplay;




