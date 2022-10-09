import { useCart } from "../../Provider/CartProvider";
import { GrClose } from "react-icons/gr";
import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { BsPersonCircle , BsCart3} from "react-icons/bs";
import { useAuth } from "../../Provider/AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import {FiSun , FiMoon} from "react-icons/fi"
import { useTheme, useThemeActions } from "../../Provider/ThemeProvider";

export const navItems = [
  { to: "/", name: "Home" },
  { to: "/categories", name: "Categories" },
  { to: "/cart", name: "Cart" },
  { to: "/myFavorite", name: "Favorite List" },
  { to: "/blogs", name: "Blogs" },
  { to: "", name: "" },
];

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const theme = useTheme()
  const setTheme = useThemeActions()
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("Theme" , theme)
  };
  const { cart } = useCart();
  const auth = useAuth();
  return (
    <nav className="flex justify-between items-center w-full h-[60px] ">
      <ul className="flex justify-center items-center text-gray-800 dark:text-white">
        <div className="md:hidden   ">
          <a href="/">
            <img
              src="/images/logo/logo.png"
              alt="logo"
              className="w-[50px] h-auto "
            />
          </a>
        </div>
        <div onClick={() => setNav(!nav)}>
          <GiHamburgerMenu
            size={30}
            className="dark:text-white text-gray-800 hidden sm:flex md:flex z-30"
          />
        </div>
        {navItems.map((item, index) => (
          <li
            className="mx-4 relative text-md list-none sm:hidden md:hidden"
            key={index}
          >
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-rose-600  " : "text-current"
              }
            >
              {item.name}
              {item.name === "Cart" && cart.length !== 0 && (
                <span className="w-[20px] h-[20px]  text-sm flex  justify-center items-center  bg-rose-600 text-white rounded-full absolute -top-1 -right-5">
                  {cart.length}
                </span>
              )}
            </NavLink>
          </li>
        ))}
        {/* mobile Menu */}
        {/* overlay */}
        <div>
          <div
            className={
              nav
                ? "w-[200px] h-screen fixed left-0 top-0 bg-gray-200 dark:bg-gray-800 z-50 duration-300"
                : "w-[200px] h-screen fixed left-[-100%] top-0   duration-300"
            }
          >
            <div onClick={() => setNav(!nav)} className="flex flex-col relative">
              <GrClose
                size={20}
                className=" text-gray-200 z-30  hidden md:flex absolute right-4 top-5 cursor-pointer "
              />
                    
            </div>
            <div className="relative">
            <button
                type="button"
                className=" text-2xl dark:text-gray-200 text-gray-800 absolute top-12 right-3.5"
                onClick={handleThemeSwitch}
              >
                {theme === "dark" ? <FiSun />  : <FiMoon />}
              </button>
            </div>
            {/* <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300 p-3">Online Shop</h2> */}
            <ul className="w-40 mx-auto flex flex-col items-start text-gray-800 dark:text-gray-200 mt-3">
              {navItems.map((item, index) => (
                <li
                  className="mx-[10px] my-[5px] text-md list-none sm:flex hover:text-rose-600 relative"
                  key={index}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? "text-rose-600  " : "text-current"
                    }
                  >
                    {item.name}
                    {item.name === "Cart" && cart.length !== 0 && (
                      <span className="w-[20px] h-[20px]  text-sm flex  justify-center items-center  bg-rose-600 text-white rounded-full absolute -top-1 -right-5">
                        {cart.length}
                      </span>
                    ) }
                  </NavLink>
                </li>
              ))}
              <NavLink
                className="mx-[10px] my-[20px] text-lg list-none sm:flex "
                to={auth ? "/profile" : "/signup"}
              >
                <li className="text-gray-800 dark:text-gray-300 hover:text-rose-600">
                  {auth ? "Login" : "Signup"}
                </li>
              </NavLink>
              <li >
            </li>
            </ul>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className={
              nav
                ? "w-full h-screen fixed left-0 top-0  bg-black/80 duration-100"
                : "w-full h-screen fixed left-[-100%] top-0  duration-50"
            }
          ></div>
        </div>
      </ul>
      <div className="w-[10%]">
        <ul className=" w-[100px] h-full flex justify-around items-center">
          <NavLink to={auth ? "/profile" : "/signup"}>
            <li >
              {auth ? (
                <BsPersonCircle  className="text-[30px] dark:text-gray-200  text-gray-800"/>
              ) : (
                <p className=" dark:text-gray-200  text-gray-800">Signup</p>
              )}
            </li>
          </NavLink>
            <li >
              <button
                type="button"
                className=" text-xl dark:text-gray-200 text-gray-800 md:hidden"
                onClick={handleThemeSwitch}
              >
                {theme === "dark" || null? <FiSun /> : <FiMoon />}
              </button>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

