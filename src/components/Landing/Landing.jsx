import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { useDispatch, useSelector } from "react-redux";

import "swiper/css";

import "swiper/css/pagination";
import { useWindowDimensions } from "../../hooks/useWinowDimensions";


const Landing = () => {
 const screen = useWindowDimensions()
 

  const items = [
    
    <div   >
        <img src={screen.width >=1024  ? "/images/banners tiny/1.jpg" : "/images/banners tiny/banner lg/1.png"} className="w-full h-[400px] sm:h-[250px]" alt="" />
    </div>,
    <div   >
      <img src={screen.width >=1024  ? "/images/banners tiny/2.jpg" : "/images/banners tiny/banner lg/2.png"} className="w-full h-[400px] sm:h-[250px]" alt="" />
    </div>,
    <div   >
      <img src={screen.width >=1024  ? "/images/banners tiny/3.jpg" : "/images/banners tiny/banner lg/3.png"} className="w-full h-[400px] sm:h-[250px]" alt="" />
    </div>,
    <div   >
      <img src={screen.width >=1024  ? "/images/banners tiny/4.jpg" : "/images/banners tiny/banner lg/4.png"} className="w-full h-[400px] sm:h-[250px]" alt="" />
    </div>,
    <div   >
      <img src={screen.width >=1024  ? "/images/banners tiny/5.jpg" : "/images/banners tiny/banner lg/5.png"} className="w-full h-[400px] sm:h-[250px]" alt="" />
    </div>,
    <div   >
      <img src={screen.width >=1024  ? "/images/banners tiny/6.jpg" : "/images/banners tiny/banner lg/6.png"} className="w-full h-[400px] sm:h-[250px]" alt="" />
    </div>,
  ];

  return (
<Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {items.map((item , index) => <SwiperSlide key={index}>{item}</SwiperSlide>)}
    </Swiper>
  );
};

export default Landing;
