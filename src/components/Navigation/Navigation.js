import "./navigation.css";
import { useCart } from "../../Provider/CartProvider";
import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useAuth } from "../../Provider/AuthProvider";
import BurgerMenu from "../HumburgerMenu/BurgerMenu";
import ModalMenu from "../UI/ModalMenu";
import { useWindowDimensions } from "../../hooks/useWinowDimensions";
import { useModalActions } from "../../Provider/ModalNavProvider";
import Backdrop from "../UI/BackDrop";
const productsLink = [
  { to: "/laptops", name: "laptops" },
  { to: "/mobiles", name: "mobiles" },
  { to: "/cases", name: "cases" },
];
export const navItems = [
  { to: "/", name: "Home" },
  { to: "/productspage", name: "products", subMenu: productsLink },
  { to: "/cart", name: "Cart" },
  { to: "/blogs", name: "Blogs" },
  { to: "", name: "" },
];

const Navigation = () => {
const dispatch = useModalActions()
  const { cart } = useCart();
  const auth = useAuth();
  const { width } = useWindowDimensions();
  return (
    <>
      <nav className="navBar">
        <div>
          <ul className="nav">
        
         
            {navItems.map((item, index) => (
              <li className="navList" key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "link"
                  }
                >
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
            <NavLink
              className="navListProfile"
              to={auth ? "/profile" : "/signup"}
            >
              <li className="link">
                {auth ? <BsPersonCircle className="profileIcon" /> : "Signup"}
              </li>
            </NavLink>
            {width <= 550 && <BurgerMenu /> }
            
          </ul>
        </div>
      </nav>
      

    </>
  );
};

export default Navigation;
