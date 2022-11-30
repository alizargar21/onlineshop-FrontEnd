import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BsTwitter, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full relative bottom-0 min-h-[400px] bg-slate-300 dark:bg-gray-900 text-primary dark:text-primary-dark/70 flex flex-col justify-around items-center py-5 ">
      <div className="grid grid-cols-3 w-full  md:grid-cols-2 justify-items-center sm:grid-cols-1">
        <div className="w-[150px] h-[150px] my-3">
          <h3 className="text-lg font-semibold sm: ">Online Shop Map</h3>
          <ul className="ml-2 ">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Sale In Online Shop</Link>
            </li>
            <li>
              <Link to="/">Career Opportunities</Link>
            </li>
          </ul>
        </div>
        <div className="w-[160px] h-[120px] my-3 ">
          <h3 className="text-lg font-semibold ">Customer Services</h3>
          <ul className="ml-2 ">
            <li>
              <Link to="/">Common Questions</Link>
            </li>
            <li>
              <Link to="/">Return Procedures</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="w-[150px] h-[150px] my-3">
          <h3 className="text-lg font-semibold ">Shopping Guide</h3>
          <ul className="ml-2 ">
            <li>
              <Link to="/">How To Place An Order?</Link>
            </li>
            <li>
              <Link to="/">Order Submission Procedure</Link>
            </li>
            <li>
              <Link to="/">Payment Methods</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row-reverse w-[90%] justify-around sm:grid sm:justify-items-center my-5">
        <div className="flex flex-col text-2xl sm:my-5">
          <h3 className="text-center">Be With Us !</h3>
          <ul className="flex ml-7 sm:ml-0 text-2xl my-4">
            <Link to="/">
              <BsTwitter className="mx-1 sm:mx-2 hover:text-gray-600 dark:hover:text-gray-200" />
            </Link>
            <Link to="/">
              <FaTelegramPlane className="mx-1 sm:mx-2 hover:text-gray-600 dark:hover:text-gray-200" />
            </Link>
            <Link to="/">
              <FaLinkedinIn className="mx-1 sm:mx-2 hover:text-gray-600 dark:hover:text-gray-200" />
            </Link>
            <Link to="/">
              <BsWhatsapp className="mx-1 sm:mx-2 hover:text-gray-600 dark:hover:text-gray-200" />
            </Link>
            <Link to="/">
              <BsInstagram className="mx-1 sm:mx-2 hover:text-gray-600 dark:hover:text-gray-200" />
            </Link>
          </ul>
        </div>
        <div className="flex flex-col  justify-start relative sm:justify-items-center sm:grid">
          <h2 className="sm:text-center my-2">
            Stay up to date with the latest discounts by emailing us
          </h2>
          <form className="w-[90%] relative ">
            <input
              type="email"
              name="email"
              className="rounded-lg py-2 px-4 my-2 bg-gray-200 dark:bg-gray-600 placeholder:text-[15px] placeholder:text-gray-500 dark:placeholder:text-gray-300 w-full outline-none"
              placeholder="Please Enter Your Email"
            />
            <button
              type="button"
              className="absolute top-2 text-gray-300 hover:bg-rose-600 duration-200 right-0 bg-rose-700 px-4 py-2 rounded-br-lg"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="font-semibold my-4">
        Design & Develop By Ali Zargar {"<3"}
      </div>
    </footer>
  );
};

export default Footer;
