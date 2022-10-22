import { BsTrash, BsHeartFill, BsHeart } from "react-icons/bs";
import { useCartActions, useCart } from "../../../Provider/CartProvider";
import Layout from "../../Layout/Layout";
import { useEffect, useRef } from "react";
import { useAuth } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillCheckCircle,
} from "react-icons/ai";
import CartSummery from "../../../components/CartSummery/CartSummery";
import { toast } from "react-toastify";
import BackArrowComponent from "../../../common/BackArrow/BackArrow";
const CartPage = () => {
  const dispatch = useCartActions();
  const { cart, total } = useCart();
  const auth = useAuth();

  useEffect(() => {
    cart.length === 0 && toast.info("Cart Is Empty");
    console.log(cart);
  }, [cart]);
  const incrementHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const decrementHandler = (item) => {
    dispatch({ type: "DECREMENT_AT_CART", payload: item });
  };
  return (
    <Layout>
      
      <div className="w-[90%] min-h-screen bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex justify-around mx-auto  md:flex-col">
        {cart.length === 0 ? (
          <Link
            to={`/categories`}
            className="flex justify-start items-center flex-col my-5"
          >
            <h2 className="text-2xl">Cart Is Empty</h2>
            <p>Go To Shopping</p>
          </Link>
        ) : (
          <section className="w-[60%] md:mx-auto md:w-[80%] ">
            <h2 className="text-2xl font-semibold text-center my-4">
              Cart Items
            </h2>
            {cart.map((item, index) => (
              <div
                className="w-full min-h-[170px] md:min-w-[400px] md:mx-auto sm:min-w-[250px] sm:min-h-[] bg-gray-100 dark:bg-black/40 rounded-lg flex justify-around items-center my-3 p-2"
                key={index}
              >
                <article className="flex w-full justify-between items-center sm:flex-col sm:min-h-auto  sm:justify-around">
                  <Link to={`/product/${item.id}`} className="center">
                    <div className="w-[100px] xl:w-[110px] h-[80%] mr-5 center md:ml-3 md:w-[150px] sm:w-[80%] ">
                      <img src={item.image} alt="" />
                    </div>
                  </Link>
                  <div className="w-[50%] center flex-col mx-3 sm:w-full">
                    <h3 className="text-[18px] font-thin text-center">
                      {item.name}
                    </h3>
                    <div className="w-full flex justify-around items-center">
                      <div>
                        {item.supports.map((s, index) => (
                          <p
                            className="text-sm center justify-start md:text-xs"
                            key={index}
                          >
                            <span>
                              <AiFillCheckCircle className="text-green-500 " />
                            </span>
                            <p className="ml-1">{s}</p>
                          </p>
                        ))}
                        <p className="flex justify-start items-center ml-3 md:ml-1">
                          Color :
                          <p
                            className="w-5 h-5 border border-black mx-2 center rounded-full"
                            style={{ backgroundColor: Object.values(item.selectedColor) }}
                          ></p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto  center flex-col text-gray-800 dark:text-gray-300">
                    <div className="center  px-2 rounded-lg   min-w-[85px] h-[30px] ">
                      <div className="w-[33%] center">
                        <button onClick={() => decrementHandler(item)}>
                          {item.quantity === 1 ? (
                            <BsTrash className="center text-red-600 text-lg" />
                          ) : (
                            <AiFillMinusCircle className="center text-xl" />
                          )}
                        </button>
                      </div>
                      <div className=" w-[33%]  center text-xl">
                        <span>{item.quantity}</span>
                      </div>

                      <div className="center text-xl w-[33%]">
                        <button onClick={() => incrementHandler(item)}>
                          <AiFillPlusCircle />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </section>
        )}

        {cart.length !== 0 && (
          <CartSummery total={total} cart={cart} auth={auth} />
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
