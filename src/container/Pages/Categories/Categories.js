import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";


const Categories = () => {
  return (
    <Layout>
      <div className="w-full  h-full pb-5">
        <h1 className=" dark:text-gray-100 lg:text-3xl text-4xl text-gray-800 text-center font-thin pt-5">
       Categories
        </h1>
        <section className="grid  md:grid-cols-1 grid-cols-2 gap-5 justify-items-center  mx-auto  w-[70%]  my-10  ">
          <Link to='/laptops'>
          <div className="  relative w-[100%]  hover:scale-105 transition-all duration-500">
            <div className="hover:opacity-100 opacity-0 transition-all duration-500  absolute w-full h-full  bg-black/20 rounded-md ">
              <h3 className=" text-gray-100 mx-5">Laptops</h3>
            </div>
            <img
              src="images/categories/category laptops 3.jpg"
              className="  rounded-md  cursor-pointer duration-150  object-cover"
              alt="laptops"
            />
          </div>
          </Link>
          <Link to='/mobiles'>
          <div className="   relative w-[100%] h-[100%] hover:scale-105 transition-all duration-500 ">
            <div className="hover:opacity-100 opacity-0 transition-all duration-500  absolute w-full h-full  bg-black/20 rounded-md">
              <h3 className="lg:text-2xl text-gray-100 mx-5">Smart Phones</h3>
            </div>
            <img
              src="images/categories/category mobile 1.png"
              className=" h-[100%] rounded-md  cursor-pointer duration-150 object-cover "
              alt=""
            />
          </div>
          </Link>
          <Link to='/cases'>
          <div className="   relative w-[100%]  hover:scale-105 transition-all duration-500">
            <div className="hover:opacity-100 opacity-0 transition-all duration-500  absolute w-full h-full  bg-black/20 rounded-md">
              <h3 className=" text-gray-100 mx-5">Cases</h3>
            </div>
            <img
              src="images/categories/casesssca.png"
              className=" rounded-md  cursor-pointer duration-150  object-cover"
              alt=""
            />
          </div>
          </Link>
          
          <div className="   hover:scale-105 transition-all duration-500 h-[100%] justify-self-center bg-white  rounded-md">
            <img
              src="images/categories/soon.png"
              className="mx-auto w-[50%]    rounded-md   duration-150 "
              alt=""
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Categories;
