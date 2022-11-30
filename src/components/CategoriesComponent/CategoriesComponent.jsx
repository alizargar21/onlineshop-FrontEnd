import { BsLaptop } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { SiPcgamingwiki } from "react-icons/si";
import { useEffect } from "react";
const Categories = ({changeHandler}) => {

  useEffect(()=> {
  
  }, [])
  return (
    <section className=" text-primary mx-auto dark:text-primary-dark flex justify-center  w-[80%] sm:w-[250px]">
      < ul className="grid grid-cols-4 md:grid-cols-2 gap-2  ">
        <li  className="shadow-xl rounded-lg  ">
          <input
            type="radio"
            name="category"
            value="all"
            id="all"
            onChange={(e) => changeHandler(e)}
            className="hidden peer"
          />
          <label
            htmlFor="all"
            className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-rose-500 peer-checked:border-rose-600 peer-checked:text-rose-600 hover:text-rose-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <BsLaptop className="mr-3 text-[30px]  " />
            <span className="lg:text-[12px] italic lg:font-bold truncate">All Products</span>
          </label>
        </li>
        
        <li className="shadow-xl rounded-lg  " >
          <input
            type="radio"
            name="category"
            value="laptops"
            id="laptops"
            onChange={(e) => changeHandler(e)}
            className="hidden peer"
          />
          <label
            htmlFor="laptops"
            className=" inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-rose-500 peer-checked:border-rose-600 peer-checked:text-rose-600 hover:text-rose-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <BsLaptop className=" mr-3  text-[30px] " />
            <span className="lg:text-[12px] italic lg:font-bold ">Laptops</span>
          </label>
        </li>
        <li className="shadow-xl rounded-lg  " >
          <input
            type="radio"
            name="category"
            value="mobiles"
            id="mobiles"
            onChange={(e) => changeHandler(e)}
            className="hidden peer"
          />
          <label
            htmlFor="mobiles"
            className=" inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-rose-500 peer-checked:border-rose-600 peer-checked:text-rose-600 hover:text-rose-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <ImMobile  className=  "mr-3  text-[30px] "/>
            <span className="lg:text-[12px] italic lg:font-bold ">Mobiles</span>
          </label>
        </li>
        <li className="shadow-xl rounded-lg  " >
          <input
            type="radio"
            name="category"
            value="cases"
            id="cases"
            onChange={(e) => changeHandler(e)}
            className="hidden peer"
          />
          <label
            htmlFor="cases"
            className=" inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-rose-500 peer-checked:border-rose-600 peer-checked:text-rose-600 hover:text-rose-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <SiPcgamingwiki  className=  " mr-3 text-[30px] "/>
            <span className="lg:text-[12px] italic lg:font-bold ">Cases</span>
          </label>
        </li>
      </ul>
    </section>
  );
};

export default Categories;

