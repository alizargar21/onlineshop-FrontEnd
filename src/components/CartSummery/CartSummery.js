import { Link } from "react-router-dom";
const CartSummery = ({ cart, total, auth }) => {
  const originalPrice = cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    : 0;

  const totalCartItems = cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity, 0)
    : 0;
  return (
    <div className=" min-w-[25%] flex flex-col items-center  my-7 md:w-[300px] md:mx-auto sm:w-[230px]">
      <h2>Cart Summery</h2>

      <aside className="w-full 2xl:sticky top-24 md:static bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg flex flex-col justify-between my-2 p-3 min-h-[250px]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-around ">
            <div className="flex justify-between items-center text-md">
              <p>
                Item
                {cart.length !== 0 && ` x ${totalCartItems}`}
              </p>
              <p>{`$ ${originalPrice}`}</p>
            </div>
            <div className="flex justify-between text-green-600 items-center my-3">
              <p>Total discount</p>
              <p>$ {originalPrice - total}</p>
            </div>
            <div className="flex justify-between items-center border-t my-10">
              <p>amount payable</p>
              <p className="text-2xl">{`$ ${total}`}</p>
            </div>
          </div>
        </div>
          <div className="">
            {cart.length ? (
              <Link to={auth ? "/checkout" : "/login?redirect=checkout"}>
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
