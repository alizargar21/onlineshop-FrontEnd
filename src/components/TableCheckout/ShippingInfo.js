import { Container } from "postcss";
import { useEffect } from "react";
import { useState } from "react";

import Select from "react-select";

const ShippingInfo = ({ time, days, cart, shippingInfoHandler }) => {
  const [date, setDate] = useState(0);
  const [timeShipping, setTimeShipping] = useState(0);

  const setDateHandler = (selectOption) => {
    setDate(selectOption);
  };
  const setTimeHandler = (selectOption) => {
    setTimeShipping(selectOption);
  };
  return (
    <section className="w-[80%] min-h-[300px] mb-20 dark:bg-black/25 bg-gray-50 rounded-lg mx-auto border  py-2 px-3 flex flex-col justify-center items-center mt-3">
      <div className="flex justify-center items-start w-[95%] flex-wrap m-2">
        {cart.map((item , index) => (
          <div
            key={index}
            className=" border-gray-300 rounded-lg p-2 m-2 relative bg-black/10 dark:bg-gray-700"
          >
            <img className="w-[100px]" src={item.image} />
            <span className="absolute w-5 h-5  bg-gray-200 center rounded-full bottom-1 right-2">
              {item.quantity}
            </span>
            <p className="font-Oswald dark:text-gray-200 text-gray-600">
              {Object.keys(item.selectedColor)}
            </p>
          </div>
        ))}
      </div>
      <div className="w-[80%]  bg-green-20mx-auto  py-2 px-3 center md:flex-col ">


        <Select
          options={days}
          className="text-[12px] w-[150px]  my-10 mx-auto   md:my-[10px] "
          onChange={setDateHandler}
          placeholder={"Select Date"}
        />

        <Select
          options={time}
          className="text-[12px] w-[150px]  my-10 mx-auto   md:my-[10px]"
          onChange={setTimeHandler}
          placeholder={"Select Time"}
        />
        <button
          type="button"
          className="bg-green-500 rounded-lg p-1 text-gray-100 font-Roboto md:my-2 px-2 cursor-pointer"
          disabled={timeShipping === 0 && date === 0}
          onClick={() => shippingInfoHandler({date :date , timeShipping: timeShipping})}
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default ShippingInfo;
