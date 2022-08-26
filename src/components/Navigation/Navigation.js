import "./navigation.css";
import { useCart } from "../../Provider/CartProvider";
import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { LOCAL_STORAGE_AUTH_KEY, useAuth } from "../../Provider/AuthProvider";
const productsLink = [
  { to: "/laptops", name: "laptops" },
  { to: "/mobiles", name: "mobiles" },
  { to: "/cases", name: "cases" },
];
const navItems = [
  { to: "/", name: "Home" },
  { to: "/productspage", name: "products", subMenu: productsLink },
  { to: "/cart", name: "Cart" },
  { to: "/blogs", name: "Blogs" },
  { to: "", name: "" },{ to: "/aboutus", name: "About us ..." },
];
const navOption = [
  { to: "/signup", name: "Sign Up" },
  { to: "/aboutus", name: "About us ..." },
];

const Navigation = () => {
  const { cart } = useCart();
  const auth = useAuth()
  // const [state, setState] = useState(null);
  useEffect(() => {



    console.log(navOption);
  }, []);


  return (
    <>
      <nav className="navBar">
        <div>
          <ul className="nav">
            {navItems.map((item, index) => (
              <li className="navList" key={index}>
                  <NavLink to={item.to}  className={({isActive}) => isActive ? "activeLink" : "link"} >
                  {item.name}
                  {item.name === "Cart" && cart.length ? (
                    <span className="badgeCart">{cart.length}</span>
                  ) : null}
              </NavLink>
                </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="nav">
            <NavLink className="navList" to={auth ?    "/profile" :"/signup"  }>
                    <li className="link">{auth ? <BsPersonCircle className="profileIcon"/> : "Signup"}</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
