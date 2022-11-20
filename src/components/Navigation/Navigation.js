import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsPersonCircle, BsCartCheck } from "react-icons/bs";
import { logout } from "../../features/AuthSlice/AuthSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme, useThemeActions } from "../../Provider/ThemeProvider";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "../../hooks/useQuery";
import PopOver from "../Popover/PopOver";
export const navItems = [
  { to: "/", name: "Home" },
  { to: "/products", name: "Products" },
  { to: "/myFavorite", name: "Favorite List" },
  { to: "/blogs", name: "Blogs" },
  { to: "", name: "" },
];
const popupCartStyles =
"absolute top-7 -right-20 bg-gray-300 dark:bg-slate-800 rounded-lg max-h-[300px] ";
const popupProfileStyles =
"lg:w-[30%]  sm:w-[60%] md:w-[50%] xl:w-[25%] absolute top-12 2xl:right-28 lg:right-4 dark:bg-gray-800 rounded-lg p-4  bg-gray-300 sm:text-[12px] font-bold font-Roboto";
const Navigation = () => {
  const { isLogin, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const logoutHandler = () => {
    dispatch(logout());
    navigate(redirect);
    setNav(false);
  };
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const theme = useTheme();
  const setTheme = useThemeActions();
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("Theme", theme);
  };
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
          <GiHamburgerMenu className="dark:text-white text-gray-800 hidden sm:flex md:flex z-30 md:text-lg" />
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
                className=" text-2xl dark:text-gray-200 text-gray-800 absolute top-12 right-3.5 hover:text-yellow-400 dark:hover:text-yellow-400 duration-300"
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
                  <NavLink to={"/authentication/login"}>
                    <div className="center w-full  hover:text-green-600 duration-300">
                      <button className="cursor-pointer center">
                        <BiLogIn className="text-xl" /> <span>Login</span>
                      </button>
                    </div>
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className={
              nav
                ? "w-full h-screen fixed left-0 top-0  bg-black/80 duration-100 z-20"
                : "w-full h-screen fixed left-[-100%] top-0  duration-50"
            }
          ></div>
        </div>
      </ul>
      <div className="sm:w-[20%] lg:mr-12 mr-12 md:w-[20%] w-[20%] ">
        <ul className=" w-[200px] md:w-[150px]  h-full flex justify-between items-center text-sm md:justify-around ">
          <NavLink
            to={"/cart"}
            className={({ isActive }) =>
              isActive ? "text-rose-600 dark:text-rose-600 " : "text-gray-800 dark:text-gray-300"
            }
          >
            <li className="relative">
              <PopOver
                headerTitle={"Cart"}
                title={
                  <>
                    <BsCartCheck className="text-[24px]  md:text-[21px] sm:text-[18px] relative " />
                    {cart.length !== 0 && (
                      <span className="w-[20px] h-[20px] md:w-[16px] md:h-[16px] md:-right-2 md:-top-2 sm:text-[12px] sm:w-[15px] sm:h-[15px] sm:-right-1 text-sm flex  justify-center items-center  bg-rose-600  text-white rounded-full absolute -top-1/4 -right-4 z-10">
                        {cart.length}
                      </span>
                    )}
                  </>
                }
                stylesPopup={popupCartStyles}
                content={
                  <div className="bg-gray-200 dark:bg-slate-700 center rounded-b-lg dark:text-gray-300 text-gray-700">
                    {cart.length === 0 ? (
                      <div className="w-[180px] h-[200px] flex justify-around    items-center flex-col ">
                        <img
                          src="/images/emptyCart.png"
                          className="w-[130px] h-[100px]"
                          alt="empty cart"
                        />
                        <p className="">Cart Is Empty</p>
                        <Link to={"/products"}>
                          <button type="button" className="btn-primary">
                            Go To Shopping
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div className="center flex-col w-[150px]      mt-3 mb-0  cursor-default  ">
                         < div className="center justify-around w-full pb-2">
                            <p>Total Items </p> 
                            <span className="w-6 h-6 bg-rose-600 center rounded-lg text-gray-100">{cart.length}</span>
                          </div>
                      </div>
                    )}
                  </div>
                }
              />
            </li>
          </NavLink>
          <NavLink to={!isLogin && "/authentication/login"}  >
            <li>
              {isLogin ? (
                <PopOver
                  headerTitle={"Profile Information"}
                  title={
                    <BsPersonCircle className="text-[30px] dark:text-gray-200  text-gray-800 md:absolute md:top-4 md:right-8 sm:text-[28px] sm:top-2.5"
                    
                    />
                  }
                  stylesPopup={popupProfileStyles}
                  content={
                    <div className="">
                      <section className="w-[100%] h-full">
            
                        <div className=" px-5 py-3 flex flex-col bg-gray-100 dark:bg-slate-600 justify-between items-center border rounded-lg  text-gray-800 dark:text-gray-300">
                          <div className="flex justify-between w-full">
                            <p>Username : </p>
                            <p>{user.name}</p>
                          </div>
                          <div className="flex justify-between w-full">
                            <p>Email : </p>
                            <p>{user.email}</p>
                          </div>
                          <div className="flex justify-between w-full">
                            <p>Tel : </p>
                            <p>{user.phoneNumber}</p>
                          </div>
                          <button
                            className="btn-primary mt-3"
                            onClick={() => logoutHandler()}
                          >
                            Logout
                          </button>
                        </div>
                      </section>
                    </div>
                  }
                />
              ) : (
                <p className="hover:text-green-600 dark:hover:text-green-600 duration-300 dark:text-gray-200  text-gray-800 center">
                  <BiLogIn className="text-[22px]" />
                  <span className="center sm:text-[12px] truncate">
                    Signup | Login
                  </span>
                </p>
              )}
            </li>
          </NavLink>

          <li>
            <button
              type="button"
              className=" text-[25px] dark:text-gray-200 text-gray-800 md:hidden dark:hover:text-yellow-500 duration-300 hover:text-yellow-500"
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
