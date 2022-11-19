import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import Login from "../../../components/Login/Login";
import Layout from "../../Layout/Layout";

const Authentication = () => {
  const { auth, isLogin } = useSelector((state) => state.auth);
useEffect(()=> {

} , [])

  return (
    <Layout>
      <section className="min-h-[400px]">
        <div className="center font-extrabold text-3xl font-Roboto text-gray-600">
          <NavLink
            className={ ({ isActive }) =>
              isActive ? "text-blue-600  " : "text-current"
            }
            to={"login"}
          >
            <button type="" className="mx-3 ">Login</button>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-600  " : "text-current"
            }
            to={"signup"}
          >
            <button type="">SignUp</button>
          </NavLink>
        </div>
        <Outlet />
      </section>
    </Layout>
  );
};

export default Authentication;
