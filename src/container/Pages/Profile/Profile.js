import { useAuth } from "../../../Provider/AuthProvider";
import Layout from "../../Layout/Layout";

const ProfilePage = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <Layout>
      <div className="w-full flex justify-around my-10">
        <section className="w-[45%]">
          <h4 className="text-center text-3xl text-gray-800 dark:text-gray-300">Information</h4>
          <div className=" p-5 flex flex-col justify-between items-center border text-gray-800 dark:text-gray-300">
            <div className="flex justify-between w-full">
              <p>user name : </p>
              <p>{auth.name}</p>
            </div>
            <div className="flex justify-between w-full">
              <p>MyEmail : </p>
              <p>{auth.email}</p>
            </div>
            <div className="flex justify-between w-full">
              <p>TEL: </p>
              <p>{auth.phoneNumber}</p>
            </div>
            <button className="btn-primary">Edit Profile</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProfilePage;
