import CountdownTimer from "../../CountdownTimer/CountDownTimer";

const SpecialOfferBox = ({ image, description, title , discount}) => {
    const THREE_DAYS_IN_MS = 1 * 12 * 35 * 56 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <article className="w-[45%]  h-[230px] lg:my-2 lg:w-[70%] md:w-[90%] md:h-auto  center justify-between sm:w-full sm:rounded-none  text-gray-200 font-Oswald dark:text-gray-200 bg-gradient-to-tr dark:from-zinc-900 dark:via-zinc-700  dark:to-gray-500 from-rose-500 via-rose-400  to-rose-400 rounded-xl mx-5">
      <div>
        <img src={image} alt="" className="w-[200px] hover:scale-105 ml-2 lg:ml-5  sm:ml-2 duration-300" />
      </div>
      <div className="flex items-center justify-between flex-col w-[55%] h-full p-3 ">
        <h3 className="text-xl lg:text-2xl sm:text-lg font-bold    ">
          {title}
        </h3>
        <p className="text-sm lg:text-xl sm:text-sm my-4 "> <span className="text-4xl text-red-600 "> %{discount} </span> Discount For Today</p>
        <CountdownTimer targetDate={dateTimeAfterThreeDays}  />
      </div>

  
    </article>
  );
};

export default SpecialOfferBox;
