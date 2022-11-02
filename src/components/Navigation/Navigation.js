import { useCart } from "../../Provider/CartProvider";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { BsPersonCircle, BsCart3 } from "react-icons/bs";
import { useAuth } from "../../Provider/AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme, useThemeActions } from "../../Provider/ThemeProvider";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/AuthSlice/AuthSlice";
import { useQuery } from "../../hooks/useQuery";
export const navItems = [
  { to: "/", name: "Home" },
  { to: "/products", name: "Products" },
  { to: "/cart", name: "Cart" },
  { to: "/myFavorite", name: "Favorite List" },
  { to: "/blogs", name: "Blogs" },
  { to: "", name: "" },
];

const Navigation = () => {
  const { isLogin , user} = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const query = useQuery()
  const redirect = query.get("redirect") || "/"
  const logoutHandler = ()=>{
    dispatch(logout())
    navigate(redirect)
    setNav(false)

  }
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const theme = useTheme();
  const setTheme = useThemeActions();
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("Theme", theme);
  };
 
  console.log(isLogin);
  const { cart } = useCart();
  
  return (
    <nav className="flex justify-between items-center w-full h-[60px] ">
      <ul className="flex justify-center items-center text-gray-800 dark:text-white text-sm">
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
            <div
              onClick={() => setNav(!nav)}
              className="flex flex-col relative"
            >
              <AiOutlineClose
                size={20}
                className="text-gray-800 dark:text-gray-200 z-30  hidden md:flex absolute right-4 top-5 cursor-pointer "
              />
            </div>
            <div className="relative">
              <button
                type="button"
                className=" text-2xl dark:text-gray-200 text-gray-800 absolute top-12 right-3.5 hover:text-yellow-400 duration-300"
                onClick={handleThemeSwitch}
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
            </div>

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
                    )}
                  </NavLink>
                </li>
              ))}
              <li>
                {isLogin ? (
                  <div className="w-full">
                    <button
                      type="button"
                      className="center cursor-pointer"
                      onClick={() => logoutHandler()}
                    >
                      
                      <BiLogOut className="center ml-2 text-xl" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <NavLink to={"/login"}>
                  <div className="center w-full  hover:text-green-600 duration-300">
                   <button className="cursor-pointer center"> <BiLogIn className="text-xl" /> <span>Login</span></button>
                  </div>
                  </NavLink>
                )}
              </li>
              {/* <NavLink
                className="mx-[10px] my-[20px] text-sm list-none sm:flex "
                to={isLogin && "/login"}
              >
                <li className="text-gray-800 dark:text-gray-300 hover:text-rose-600">
                  {isLogin ? (
                    <div className="w-full">
                      <button type="button" className="center" onClick={()=>dispatch(logout())}> <BiLogOut className="center ml-2 text-xl" />Logout</button>
                    </div>
                  ) : (
                    <div className="center w-full  hover:text-green-600 duration-300">
                      <BiLogIn className="text-xl"/> <span>Login</span>
                    </div>
                  )}
                </li>
              </NavLink> */}
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
      <div className="sm:w-[40%] lg:mr-2 md:w-[20%] w-[15%]">
        <ul className=" w-[150px] h-full flex justify-around items-center text-sm">
          <NavLink to={isLogin ? "/profile" : "/signup"}>
            <li>
              {isLogin ? (
                <BsPersonCircle className="text-[30px] dark:text-gray-200  text-gray-800 md:absolute md:top-4 md:right-8 sm:text-[28px] sm:top-2.5" />
              ) : (
                <p className="hover:text-green-600 dark:hover:text-green-600 duration-300 dark:text-gray-200  text-gray-800 center">
                  <BiLogIn className="text-[22px]" />
                  <span className="center">Signup | Login</span>
                </p>
              )}
            </li>
          </NavLink>
          <li>
            <button
              type="button"
              className=" text-xl dark:text-gray-200 text-gray-800 md:hidden"
              onClick={handleThemeSwitch}
            >
              {theme === "dark" || null ? <FiSun /> : <FiMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
