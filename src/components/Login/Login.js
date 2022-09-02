import Input from "../../common/Input.jsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./login.module.css";
import LayoutTwo from "../../container/Layout/LayoutTwo";
import { loginUser } from "../../services/loginService.js";
import { useEffect, useState } from "react";
import { useAuth, useAuthActions } from "../../Provider/AuthProvider.js";
import { useQuery } from "../../hooks/useQuery.js";

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
  const query = useQuery()
  const redirect = query.get("redirect") || "/"
  const [error, setError] = useState(null);
  const auth = useAuth()
  const setAuth = useAuthActions();
  const navigate = useNavigate()

  useEffect(()=>{
    if(auth){navigate(redirect)}
    console.log(redirect)
  },[auth,redirect])
  const onSubmit = async (values) => {
    const { email, password } = values;
    const userData = {
      email,
      password,
    };

    try {
      const { data } = await loginUser(userData);
      console.log(data);
      toast.success("You Now Logged In" , {theme:'dark'});
      setAuth(data);
      navigate(redirect ==="/" ? "/":`/${redirect}`)
    } catch (error) {
      toast.error(error.response.data.message , {theme:"dark"})
      setError(error.response.data.message);
      setAuth(null)
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
    <LayoutTwo>
      <section className={styles.containerSignup}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.headerForm}>Login</div>
          <div className={styles.justify}>
            <Input formik={formik} name="email" label="Email" type="email" />

            <Input formik={formik} name="password" label="Password" />

            <button className={styles.btn} type="submit">
              Login
            </button>
          </div>

          <div className={styles.signIn}>
            <Link to={`/signup?redirect=${redirect}`}>
              <p>Not Sign Up yet ?</p>
            </Link>
          </div>
        </form>
      </section>
    </LayoutTwo>
  );
};
export default Login;
