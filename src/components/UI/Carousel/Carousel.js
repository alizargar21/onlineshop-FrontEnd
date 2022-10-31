import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import {GrNext , GrPrevious} from "react-icons/gr"
const Carousel = ({ responsive, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  useEffect(()=>{
    if(activeIndex === 9 ){
      setActiveIndex(0)
    }
  },[])
  return (
    <div className="w-full center">
    
        <button onClick={slidePrev} className="w-[30px] center h-[25px] rounded-full bg-gray-300 dark:bg-white/70 ">
          <GrPrevious  />
        </button>
    
      <div className="w-[90%] sm:w-[82%] center">
        <AliceCarousel
          disableDotsControls
          disableButtonsControls
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          autoPlay
       
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={1000}
      
          infinite
          touchTracking={false}
        />
      </div>
    
        <button onClick={slideNext} className="w-[30px] h-[25px] rounded-full center  bg-gray-300 dark:bg-white/70" ><GrNext  /></button>

    </div>
  );
};

export default Carousel;
