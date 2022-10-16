import { useState } from "react";


const SearchSort = ({originalValue , setRenderValue}) => {
  
const [value , setValue] = useState("")
const [error , setError] = useState("")

const handleSearch = (e) => {
  let searchValue = e.target.value;
  console.log(e.target.value);
  setValue(searchValue)
  if (searchValue !== "") {
    const filteredProducts = originalValue.filter((p) => {

     return p.name.toLowerCase().includes(searchValue.toLowerCase()) 
      // return p.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setRenderValue(filteredProducts) 
  } else {

    setRenderValue(originalValue);
  }
};
  return (
    <section className=" 2xl:sticky 2xl:top-24 md:static text-[12px] md:w-[90%] md:h-[150px] w-[230px] h-[450px] md:mx-auto  m-5 rounded-lg p-5 bg-gray-300 dark:bg-black/30">
      <div className="w-[80%] mx-auto ">
      <input
          onChange={(e)=>handleSearch(e)}
          type="text"
          value={value}
          name=""
          placeholder="Search"
     
          className="w-full py-1 px-3 rounded-lg bg-white/30  dark:bg-white/10 dark:text-gray-200 ring-2 ring-gray-400 outline-none"
        />
        {/* <span>{ error}</span> */}
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
