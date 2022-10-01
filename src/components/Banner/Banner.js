import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import React from "react";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <div >
    <img src={require("../../images/banners tiny/main-banner-org.jpg")} className='z-10' />
  </div>
  
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
        animationDuration={1500}
        animationType="fadeout"
        infinite
        touchTracking={true}
    
        
      />
    </div>
  );
};

export default BannerComponent;
