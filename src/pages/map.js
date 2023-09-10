/*global kakao */
import React, { useEffect } from "react";
import { markerdata } from "./markerData";
import image1 from '../img/ok.jpg';

const images = {
  image1: image1,
  // ... 다른 이미지 매핑 ...
};

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.534272313844, 126.97534763076),
      level: 8,
    };

    const map = new kakao.maps.Map(container, options);

    let currentInfowindow = null; // 현재 열린 InfoWindow를 추적하기 위한 변수

    markerdata.forEach((el) => {
      let markerPosition = new kakao.maps.LatLng(el.lat, el.lng);

      const marker = new kakao.maps.Marker({
        map: map,
        position: markerPosition,
        title: el.title,
      });

      const imageSrc = images[el.imageId];

      let infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;">
        <h4>${el.title}</h4>
        <img src="${imageSrc}" alt="${el.title}" style="width: 150px;"/>
        </div>`
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        // 이미 열린 InfoWindow가 있는 경우
        if (currentInfowindow) {
          currentInfowindow.close();
          currentInfowindow = null;
        } else {
          infowindow.open(map, marker);
          currentInfowindow = infowindow;
        }
      });
    });
  };


  return (
    <div>
      <h2>4조 다녀감ㅋ</h2>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <div id="map" style={{ width: "80vw", height: "80vh" }}></div>
      </div>
    </div>
  );
}

