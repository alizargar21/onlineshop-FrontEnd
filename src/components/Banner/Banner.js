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
    <img src="/images/banners tiny/2.jpg" className='z-10' />
    <img src="/images/banners tiny/1.jpg" alt="" />

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
