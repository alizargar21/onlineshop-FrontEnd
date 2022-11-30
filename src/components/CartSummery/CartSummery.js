import { Link } from "react-router-dom";
import { calculateTotalItem, calculateTotalAmountPayable , calculateTotalDiscount , calculateTotalOriginalPrice} from "../../utils/Calculate";
const CartSummery = ({ cart, total, isLogin }) => {
  const totalCartItems = calculateTotalItem(cart)
  const totalAmountPayable = calculateTotalAmountPayable(cart)
  const totalPrice = calculateTotalOriginalPrice(cart)
  const totalDiscount = calculateTotalDiscount(cart)
  return (
    <div className=" min-w-[30%] flex flex-col items-center  my-7 md:w-[300px] md:mx-auto sm:w-[230px]">
      <h2>Cart Summery</h2>

      <aside className="w-full 2xl:sticky top-24 md:static bg-gray-100 dark:bg-black/40 text-primary dark:text-primary-dark rounded-lg flex flex-col justify-between my-2 p-3 min-h-[250px]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-around ">
            <div className="flex justify-between items-center text-md">
              <p>
                Item
                {cart.length !== 0 && ` x ${totalCartItems}`}
              </p>
              <p>$ {totalPrice.toFixed(0)}</p>
            </div>
            <div className="flex justify-between text-green-600 items-center my-3">
              <p>Total discount</p>
              <p>$ {totalDiscount.toFixed(1)}</p>
            </div>
            <div className="flex justify-between items-center border-t my-10">
              <p>amount payable</p>
              <p className="text-2xl">{`$ ${totalAmountPayable.toFixed(1)}`}</p>
            </div>
          </div>
        </div>
        <div className="">
          {cart.length ? (
            <Link to={"/checkout"}>
              <button className="btn-primary w-full">Go To CheckOut</button>
            </Link>
          ) : (
            <Link to="/categories">
              <button className="btn-primary w-full">Go To Shopping</button>
            </Link>
          )}
        </div>
      </aside>
    </div>
  );
};

export default CartSummery;
