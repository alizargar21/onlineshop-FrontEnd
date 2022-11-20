import Stepper from "../../../components/TableCheckout/Stepper";
import { useState } from "react";
import TableCheckout from "../../../components/TableCheckout/TableCheckOut";
import Layout from "../../Layout/Layout";
import { useSelector } from "react-redux";
import Login from "../../../components/Login/Login";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ShippingInfo from "../../../components/TableCheckout/ShippingInfo";
import Payment from "../../../components/TableCheckout/Payment";
const initState = [
  { label: "Authentication", isAuth: false, userInfo: {} },
  { label: "Check Order", isCartChecked: false, cartInfo: {} },
  { label: "Shipping Info", isShippingChecked: false, shippingInfo: {} },
  { label: "Payment", value: false, paymentInfo: {} },
]
const CheckOut = () => {
  const [steps, setSteps] = useState(initState);

  const days = [
    { label: "Sunday", value: 1 },
    { label: "Monday", value: 2 },
    { label: "Tuesday", value: 3 },
    { label: "Wednesday", value: 4 },
    { label: "ThursDay", value: 5 },
    { label: "Friday", value: 6 },
    { label: "Saturday", value: 7 },
  ];
  const time = [
    { label: "9AM at 11AM", value: 1 },
    { label: "11AM at 14PM", value: 2 },
    { label: "14PM at 18PM", value: 3 },
    { label: "18PM at 22PM", value: 4 },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const { user, isLogin } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const cartCheckHandler = () => {
    setCurrentStep(3);
    steps[1].isCartChecked = true;
    steps[1].cartInfo = cart;
    console.log(steps);
  };
  const shippingInfoHandler = (e) => {
    steps[2].shippingInfo = e;
    steps[2].isShippingChecked = true;
    setCurrentStep(4);
  };

  useEffect(() => {
     if(isLogin){
      steps[0].isAuth = isLogin;
      steps[0].userInfo = user;
      setCurrentStep(2);
     }
     if(!isLogin){
      steps[0].isAuth = isLogin;
      steps[0].userInfo = {};
      steps[1].isCartChecked = false
      steps[2].isShippingChecked = false
      setCurrentStep(1);
     }
    if (steps[1].isCartChecked) {
      setCurrentStep(3);
    }
    console.log(steps);
    console.log(currentStep);
  }, [isLogin]);
  return (
    <Layout>
      <section className="min-h-[300px]">
        <Stepper
          steps={steps}
          complete={complete}
          currentStep={currentStep}
          setComplete={setComplete}
          setCurrentStep={setCurrentStep}
        />
        {!isLogin  && <Login />}
        {isLogin && currentStep === 2 && cart.length === 0 ? (
          <div className="flex flex-col items-center w-[30%] h-10 mx-auto my-8 text-xl italic text-gray-600 md:text-[12px] min-h-[400px] dark:text-gray-300">
            <Link to={"/products"}>
              <p>Cart Is Empty...</p>
              <p>Go to Products</p>
            </Link>
          </div>
        ) : currentStep === 2 ? (
          <TableCheckout
            setCurrentStep={setCurrentStep}
            cartCheckHandler={cartCheckHandler}
          />
        ) : isLogin &&
          currentStep === 3 ? (
            <ShippingInfo
              shippingInfoHandler={shippingInfoHandler}
              days={days}
              time={time}
              cart={cart}
            />
          ) : isLogin && currentStep === 4 ? (<Payment />) : complete && <p>worked</p> }
      </section>
    </Layout>
  );
};

export default CheckOut;
