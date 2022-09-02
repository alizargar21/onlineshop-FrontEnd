import { Link } from "react-router-dom";
const CartSummery = ({ cart, total, auth }) => {
  const originalPrice = cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    : 0;

  const totalCartItems = cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity, 0)
    : 0;
  return (
    <div className="cartSummeryContainer">
      <h2>Cart Summery</h2>

      <aside className="cartSummery">
        <div className="cartInfoContainer">
          <div className="cartItems">
            <p>
              Item
              {cart.length !== 0 && ` x ${totalCartItems}`}
            </p>
            <p>{`$ ${originalPrice}`}</p>
          </div>

          <div className="sumTotalCart">
            <p>Total discount</p>
            <p>{originalPrice - total}</p>
          </div>
        </div>
        <div className="sumTotalCart">
          <p>amount payable</p>
          <p>{`$ ${total}`}</p>
        </div>
        {cart.length ? (
          <Link to={auth ? "/checkout" : "/login?redirect=checkout"}>
            <button className="btn checkOutBtn">go to check out</button>
          </Link>
        ) : (
          <Link to="/productspage">
            {" "}
            <button className="btn checkOutBtn">Go To Shopping</button>
          </Link>
        )}
      </aside>
    </div>
  );
};

export default CartSummery;
