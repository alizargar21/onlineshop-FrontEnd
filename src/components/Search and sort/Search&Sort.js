import { useState } from "react";


const SearchSort = ({handleSearch}) => {
  
  



  return (
    <section className=" 2xl:sticky 2xl:top-24 md:static text-[12px] md:w-[90%] md:h-[150px] w-[230px] h-[450px] md:mx-auto  m-5 rounded-lg p-5 bg-gray-300 dark:bg-gray-700">
      <div className="w-[80%] mx-auto ">
      <input
          onChange={(e)=>handleSearch(e)}
          type="text"
          
          name=""
          placeholder="Search"
          id="search"
          className="w-full py-1 px-3 rounded-lg bg-gray-100  dark:bg-gray-600 dark:text-gray-200 ring-2 ring-gray-400 outline-none"
        />
      </div>
      <div className="w-[80%] mx-auto">
        <select className="w-full py-1 px-3 rounded-lg mt-8 md:mt-2 bg-gray-100 placeholder-gray-800 dark:bg-gray-600 dark:text-gray-200">
          <option className="" value="">
            Select a category
          </option>
          <option className="h-[100px]" value="laptop">
            Laptop
          </option>
          <option value="mobiles">Mobiles</option>
        </select>
      </div>
      <div className="mx-auto w-[80%]">
        <select className="w-full py-1 px-3 md:mt-2 rounded-lg mt-8 bg-gray-100 placeholder-gray-800 dark:bg-gray-600 dark:text-gray-200">
          <option value="newest">Sort By Newest</option>
          <option value="expensive">Sort By Expensive</option>
          <option value="inexpensive">Sort By Inexpensive</option>
        </select>
      </div>
    </section>
  );
};

export default SearchSort;
