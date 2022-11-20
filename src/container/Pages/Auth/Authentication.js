
import {  NavLink, Outlet } from "react-router-dom";
import Layout from "../../Layout/Layout";

const Authentication = () => {
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
