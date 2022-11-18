
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/AuthSlice/AuthSlice";
const ProfilePage = () => {
 const navigate =  useNavigate()
 const dispatch = useDispatch() 
 const {isLogin  , user} = useSelector(state => state.auth)
  const logoutHandle = ()=> {
    dispatch(logout())
    navigate("/")
  }
  
  return (
    <Layout>
   {isLogin &&    <div className="w-full flex justify-around my-10">
        <section className="w-[45%]">
          <h4 className="text-center text-3xl text-gray-800 dark:text-gray-300">Information</h4>
          <div className=" p-5 flex flex-col justify-between items-center border text-gray-800 dark:text-gray-300">
            <div className="flex justify-between w-full">
              <p>user name : </p>
              <p>{user.name}</p>
            </div>
            <div className="flex justify-between w-full">
              <p>MyEmail : </p>
              <p>{user.email}</p>
            </div>
            <div className="flex justify-between w-full">
              <p>TEL: </p>
              <p>{user.phoneNumber}</p>
            </div>
            <button className="btn-primary" onClick={()=>logoutHandle()}>Logout</button>
          </div>
        </section>
      </div>}
    </Layout>
  );
};

export default ProfilePage;
