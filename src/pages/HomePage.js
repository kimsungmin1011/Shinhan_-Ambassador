import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import styles from './style/HomePage.module.css';
import image1 from '../img/hangul.jpg';
// import image6 from '../img/ok.jpg';
import image3 from '../img/seoul.jpg';
import image7 from '../img/win.jpeg';
import image8 from '../img/undong.jpeg';
import image9 from '../img/game.jpeg';
import image2 from '../img/mount.jpg';
import image4 from '../img/ETA.jpeg';
import image0 from '../img/invite.jpg';
import image88 from '../img/11win.jpeg';
import image5 from '../img/Gangnam.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [image88,image8,image9,image1, image7,image2, image3, image4, image0];


function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  // 타이핑 효과를 위한 상태
  const titleText = "✨펼쳐라 펼쳐라🗺️ 신한의 모험담📸✨";
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (charIndex < titleText.length) {
      const typingTimer = setTimeout(() => {
        setTypedText(typedText + titleText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 200);  // 타이핑 속도를 조절합니다

      return () => {
        clearTimeout(typingTimer);
      };
    } else {
      // 타이핑이 완료된 후 커서를 지웁니다.
      setShowCursor(false);
    }
  }, [typedText, charIndex]);


  return (
    <div className={styles['home-page']}>
      <div style={{ height: '10px' }}></div> {/* 원하는 픽셀값으로 조절 */}
      <div className={styles.carousel}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} className={styles.homePageImg} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
        <br /><br /><br />
      </div>

      <div className={styles['text-content']}>
        <h2 className={`${styles.title}`}>
          {typedText}{showCursor && "|"}
        </h2>

        <div className={styles.content}>
          <img src={image5} className={styles.homePageImg1} />
          <p>안녕하세요. 신한은행 대학생 홍보대사 39기 서경강 4팀 '신밧드의 모험'입니다!</p>
          <p>우리의 모험에 함께 하지 않을래?👀</p>
          <p>"대학생활의 소중한 경험을 신한은행과 함께!"</p>
        </div>
        <div className={styles.actions}>
          {/* ... 작업 버튼 (수정, 삭제 등) */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;