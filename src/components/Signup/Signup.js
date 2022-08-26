import Input from "../../common/Input.jsx";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import LayoutTwo from "../../container/Layout/LayoutTwo";
import signupUser from "../../services/signUpService.js";
import { useAuth, useAuthActions } from "../../Provider/AuthProvider.js";
import {useQuery} from "../../hooks/useQuery.js";
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
 const auth = useAuth()
  const query = useQuery()
  const redirect = query.get("redirect") || "/"
  console.log(query.get("redirect"))
  const [error, setError] = useState(null);
  const setAuth = useAuthActions();
  const navigate = useNavigate();
  useEffect(()=>{
    if(auth){navigate(redirect)}
  } , [auth,redirect])
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
      const { data } = await signupUser(userData);
      console.log(data);
      toast.success("Sign Up Successful");
      setAuth(data);
      navigate(`/checkout?redirect=${redirect}`)
      toast.info("You now login");
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      toast.error(error.response.data.message , {theme:"dark"})
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
    <LayoutTwo>
      <section className={styles.containerSignup}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.headerForm}>Sign Up</div>
          <div className={styles.justify}>
            <Input formik={formik} name="name" label="Name" />
            <Input formik={formik} name="email" label="Email" type="email" />
            <Input
              formik={formik}
              name="phoneNumber"
              label="Phone Number"
              type="tel"
            />
            <Input formik={formik} name="password" label="Password" />
            <Input
              formik={formik}
              name="passwordConfirm"
              label="Password Confirm"
            />
 
            <button
              className={!formik.isValid ? styles.btnDisabled: styles.btn}
              disabled={!formik.isValid}
              type="submit"
            >
              SIGN UP
            </button>
            <div className={styles.signIn}>
              <Link to="/login">
                <p>Already have an account?</p>
              </Link>
            </div>
          </div>
        </form>
      </section>
    </LayoutTwo>
  );
};

export default SignUp;
