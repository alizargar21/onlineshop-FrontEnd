import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { GrNext, GrPrevious } from "react-icons/gr";

import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = ({ responsive, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  useEffect(() => {
    if (activeIndex === 9) {
      setActiveIndex(0);
    }
  }, []);

  return (
    <div className="w-full center h-full">
        <button
          onClick={slidePrev}
          className="w-[50px] md:w-[100px] h-full rounded-sm center  bg-black/20 dark:bg-black/20 z-10"
        >
          <GrPrevious />
        </button>
      <div className="w-[90%] sm:w-[75%] center">
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
        <button
          onClick={slideNext}
          className="w-[50px]  md:w-[100px] h-full rounded-sm center  bg-black/20 dark:bg-black/20 z-10"
        >
          <GrNext />
        </button>
    </div>
  );
};

export default Carousel;
