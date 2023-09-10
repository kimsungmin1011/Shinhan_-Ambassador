import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import styles from './style/HomePage.module.css';
import image1 from '../img/newjeans1.png';
import image4 from '../img/ok.jpg';
import image3 from '../img/seoul.jpg';
import image2 from '../img/moneybus.jpg';
import image0 from '../img/1.jpg';
import image5 from '../img/Gangnam.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [image0, image1, image2, image3, image4];


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
          <img src={image5} className={styles.homePageImg1}/>
          <p>안녕하세요. 신한은행 대학생 홍보대사 39기 서경강 4팀 '신밧드의 모험'입니다!</p>
          <p>우리의 모험에 함께 하지 않을래?👀</p>
          <p>1982년, 새로운 대한민국 금융을 향한 염원으로 신한의 역사가 시작되었습니다. 오직 고객을 기준으로 삼아 우리 사회와 함께 성장하며 금융산업 전반에 새로운 바람을 일으켰습니다. 그리고 2001년 국내 최초의 민간금융지주회사 설립을
            통해 한 단계 도약하며 금융업 발전에 힘을 더했습니다. 임직원 모두가 끊임 없이 도전하고 혁신한 결과, 글로벌 200여 채널과 15개 그룹사를 갖춘 종합금융그룹으로 성장했습니다. 신한이 일궈온 꾸준한 성장에는 고객님과 우리 사회의
            관심과 응원이 있었습니다. 함께해 주신 모든 분들께 깊이 감사드립니다.
            이제 우리의 존재 이유를 다시 한번 깊이 성찰하고, 이해관계자 모두와 함께하는 지속가능한 성장을 만들어 가고자 합니다. 신한이 존재하는 이유는
            '고객 자긍심'입니다. 대체할 수 없는 든든한 이웃이 되고 고객중심의 금융
            혁신을 주도해 나가며, '신한'이라는 이름이 고객의 자랑이 될 수 있도록 혼신의 힘을 다할 것입니다. 이러한 다짐이 선언에 그치지 않도록 스스로를 더욱 엄격한 기준으로 바라보며, 철저한 자기 검증도 수행하겠습니다.
            신한의 창업과 성장의 역사 속에는 새로운 금융을 향한 간절함이 담겨있습니다. 15개 그룹사 삼만여 임직원 모두 한마음 되어, 고객의 자긍심이 되는 '一流신한', '百年신한'의 꿈을 향해 힘차게 나아가겠습니다. 신한과 함께 걷는 모든 분들의 소중한 일상에 기쁨과 행복이 가득하시기를 기원합니다. 감사합니다.</p>
        </div>
        <div className={styles.actions}>
          {/* ... 작업 버튼 (수정, 삭제 등) */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;