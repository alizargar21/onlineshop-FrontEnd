import Input from "../../common/Input.jsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdWavingHand } from "react-icons/md";
import Layout from "../../container/Layout/Layout";
import { loginUser } from "../../services/loginService.js";
import { useEffect, useState } from "react";
import { useAuth, useAuthActions } from "../../Provider/AuthProvider.js";
import { useQuery } from "../../hooks/useQuery.js";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoginUser } from "../../features/AuthSlice/AuthSlice.js";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const Login = () => {
  const {isLogin} = useSelector(state =>state.auth)
  const dispatch = useDispatch()
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate(redirect);
    }
    console.log(redirect);
  }, [isLogin, redirect]);
  const onSubmit = async (values) => {
    const { email, password } = values;
    const userData = {
      email,
      password,
    };

    try {
    dispatch(asyncLoginUser(userData))
      toast.success("You Now Logged In", { theme: "dark" });
      
      navigate(redirect === "/" ? "/" : `/${redirect}`);
    } catch (error) {
      toast.error(error.response.data.message, { theme: "colored" });    
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: false,
    enableReinitialize: false,
  });
  return (
    <Layout>
      <section className="center w-full my-10">
        <form
          onSubmit={formik.handleSubmit}
          className="w-[30%] shadow-2xl md:min-w-[50%] sm:min-w-[80%] h-[80%] flex justify-start items-center flex-col mt-1 dark:bg-gray-700 dark:text-gray-200 bg-gray-100 text-gray-800 rounded-lg  my-3"
        >
          <div className="bg-blue-600 w-full center rounded-tr-lg rounded-tl-lg h-[40px] text-gray-300 ">
            Login
          </div>
      
            <p className="center mt-4 ">
              Hey
              <span className="text-yellow-500 ml-2">
                <MdWavingHand />
              </span>
            </p>
            
          
          <div className="flex flex-col mx-2   items-center">
            <div className="w-[80%] text-xs bg-gray-300 dark:text-gray-800 p-2 rounded-lg mt-2">
              <span>
                Besides registering, you can also test the template with test
                account information(email: test@info.com - Password: 123456)
              </span>
            </div>
          </div>
          <div className="w-[80%] flex flex-col justify-center items-start mt-5">
            <Input formik={formik} name="email" label="Email" type="email" />

            <Input formik={formik} name="password" label="Password" />

            <button
              className="btn-primary w-full hover:bg-blue-500 mt-4 bg-blue-600"
              type="submit"
              disabled={!formik.isValid}
            >
              Login
            </button>
          </div>

          <div className="my-8 text-blue-600 dark:text-gray-300">
            <Link to={`/signup?redirect=${redirect}`}>
              <p >Not Sign Up yet ? <span className="text-xs decoration-stone-400 decoration-dotted ">
              Click here
                </span> </p>
            </Link>
          </div>
        </form>
      </section>
    </Layout>
  );
};
export default Login;
