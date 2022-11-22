import {BsBagCheck} from "react-icons/bs"

const Payment = ({steps}) => {
 
  return (
       <section className="dark:bg-black/20 bg-white/90 w-[80%] min-h-[400px] center flex-col mx-auto my-5 rounded-lg">
        <i className="text-[80px] md:text-[50px] text-green-600">{<BsBagCheck />}</i>
        <h3 className="text-[20px] md:text-[14px] mt-10 text-gray-800 dark:text-gray-300 font-Roboto text-center">Congratulations. Your order has been registered </h3>
    </section>
  );
};

export default Payment;
