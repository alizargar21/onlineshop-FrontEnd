import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./banner.css";
import React from "react";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <img src={require("../../images/1 (1).jpg")} className="image2" />,
  <img src={require("../../images/1 (2).jpg")} className="image2" />,
  <img src={require("../../images/1 (3).jpg")} className="image2" />,
  <img src={require("../../images/1 (4).jpg")} className="image2" />,
  <img src={require("../../images/1 (5).jpg")} className="image2" />,
];

const BannerComponent = () => {
  return (
    <div className="bannerContainer">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
    
        disableButtonsControls
      />
    </div>
  );
};

export default BannerComponent;
