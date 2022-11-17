import Input from "../../common/Input.jsx";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery.js";
import { useDispatch, useSelector } from "react-redux";
import { asyncSigninUser } from "../../features/AuthSlice/AuthSlice.js";
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
  // terms: false,
};
const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  phoneNumber: Yup.string()
    .required("Phone Number is Required")
    .matches(/^[0-9]{11}/, "Invalid Phone Number"),
  password: Yup.string().required("Password is Required"),
  passwordConfirm: Yup.string()
    .required("Password is Required")
    .oneOf([Yup.ref("password"), null], "Password Must Match"),
  // terms: Yup.boolean()
  //   .required("the terms and conditions must accepted")
  //   .oneOf([true], "the terms and conditions must accepted."),
});

const SignUp = () => {
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate(redirect);
    }
    console.log(redirect);
  }, [auth, redirect]);
  const onSubmit = async (values) => {
    const { name, email, terms, password, phoneNumber, passwordConfirm } =
      values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
      passwordConfirm,
    };

    try {
      dispatch(asyncSigninUser(userData));
      toast.success("Sign Up Successful");
      navigate(redirect === "/" ? "/" : `/${redirect}`);
      toast.info("You now login");
    } catch (error) {
      toast.error(error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validateOnBlur: true,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <section className=" center flex-col ">
      <form
        className="w-[30%] my-10 md:min-w-[50%] shadow-2xl sm:min-w-[80%] h-[80%] flex justify-start items-center flex-col  bg-white dark:bg-gray-700 dark:text-gray-200 text-gray-800 rounded-lg  "
        onSubmit={formik.handleSubmit}
      >
        <div className="bg-green-500 center  w-full h-10 text-gray-200 rounded-tl-lg rounded-tr-lg ">
          Sign Up
        </div>
        <div className="w-[80%] flex flex-col items-start justify-center">
          <Input formik={formik} name="name" label="Name" />
          <Input formik={formik} name="email" label="Email" type="email" />
          <Input
            formik={formik}
            name="phoneNumber"
            label="Phone Number"
            type="tel"
          />
          <Input
            formik={formik}
            name="password"
            label="Password"
            type="password"
          />
          <Input
            formik={formik}
            name="passwordConfirm"
            label="Password Confirm"
            type="password"
          />

          <button
            className={
              !formik.isValid
                ? "w-full bg-gray-500 text-gray-300 rounded-md cursor-not-allowed text-sm py-1 my-5"
                : "w-full bg-green-500 text-white rounded-md  text-sm py-1 my-2    "
            }
            disabled={!formik.isValid}
            type="submit"
          >
            SIGN UP
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
