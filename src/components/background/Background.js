const Background = () => {
    return (   <div className="z-20 relative font-Oswald ">
    <div className="absolute top-[20%] left-[10%]  ">
      <h1 className="text-white text-6xl md:text-3xl lg:text-5xl sm:text-xl">
        The <span className="text-red-500">Best</span>
      </h1>
      <h1 className="text-red-500 text-7xl md:text-3xl lg:text-5xl sm:text-xl">
        Divices <span className="text-white ">For You</span>
      </h1>
    </div>
    <div>
      <h3 className="text-white font-Oswald absolute py-2 top-[50%] left-[23%] text-6xl 2xl:left-[20%] lg:left-[22%]  lg:text-5xl md:text-4xl sm:text-2xl">
        UP TO
        <br />
        <span className="px-5 text-8xl text-red-500 lg:text-6xl md:text-4xl sm:text-2xl">
          50% OFF
        </span>
      </h3>
    </div>
    <img
      src="/images/banners tiny/main-banner-org.jpg"
      alt="landing"
      className="w-full h-auto object-cover"
    />
  </div>  );
}
 
export default Background;