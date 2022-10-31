import { BsLaptop } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { SiPcgamingwiki } from "react-icons/si";
import { useEffect } from "react";
const Categories = ({changeHandler}) => {

  useEffect(()=> {
  
  }, [])
  return (
    <section className=" text-gray-700 mx-auto dark:text-gray-200 flex justify-center  w-[80%] sm:w-[250px]">
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
{
  /* <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3>
<ul class="grid gap-6 w-full md:grid-cols-2">
    <li>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required="">
        <label for="hosting-small" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
                <div class="w-full text-lg font-semibold">0-50 MB</div>
                <div class="w-full">Good for small websites</div>
            </div>
            <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer">
        <label for="hosting-big" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="block">
                <div class="w-full text-lg font-semibold">500-1000 MB</div>
                <div class="w-full">Good for large websites</div>
            </div>
            <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>
    </li>
</ul> */
}

{
  /* <section className=" text-gray-700 mx-auto dark:text-gray-200 flex justify-center  w-[80%] sm:w-[250px]">
<NavLink to={"laptops"} className={(navData)=> navData.isActive ? 'text-rose-600 scale-110 duration-300' : ""}>
  <div className="lg:w-[120px] lg:h-[100px] w-[150px]  h-[100px] sm:w-[100px] sm:h-[80px] bg-white/30 rounded-lg m-2 flex flex-col justify-center items-center ">
    <BsLaptop className="text-[30px] mb-3  sm:text-[20px] " />
    <span className="lg:text-[12px] italic lg:font-bold ">Laptops</span>
  </div>
</NavLink>
<NavLink to={"mobiles"} className={(navData)=> navData.isActive ? 'text-rose-600 scale-110 duration-300' : ""} >
  <div className="lg:w-[120px] lg:h-[100px] w-[150px]  h-[100px] sm:w-[100px] sm:h-[80px] bg-white/30 rounded-lg m-2 flex flex-col justify-center items-center ">
    <ImMobile className="text-[30px] mb-3  sm:text-[20px] " />
    <span className="lg:text-[12px] italic lg:font-bold ">Mobiles</span>
  </div>
</NavLink>
<NavLink to={"cases"} className={(navData)=> navData.isActive ? 'text-rose-600 scale-110 duration-300' : ""}>
  <div className="lg:w-[120px] lg:h-[100px] w-[150px]  h-[100px] sm:w-[100px] sm:h-[80px] bg-white/30 rounded-lg m-2 flex flex-col justify-center items-center ">
    <SiPcgamingwiki className="text-[30px] sm:text-[20px] mb-3" />
    <span className="lg:text-[12px] italic lg:font-bold ">Assembled Cases</span>
  </div>
</NavLink>
</section> */
}
