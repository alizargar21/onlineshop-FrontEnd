import Layout from "../../Layout/Layout";
import "./cartpage.css";
import { BsTrash } from "react-icons/bs";
import { useCartActions, useCart } from "../../../Provider/CartProvider";
import LayoutTwo from "../../Layout/LayoutTwo";
import { useEffect } from "react";
import { useAuth } from "../../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const CartPage = () => {
  const navigate = useNavigate()
  const dispatch = useCartActions();
  const { cart, total } = useCart();
  const auth = useAuth();



  const incrementHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const decrementHandler = (item) => {
    console.log("Clicked");
    dispatch({ type: "DECREMENT_AT_CART", payload: item });
  };
  return (
    <>
      <LayoutTwo>
        <div className="cartContainer">
          <section className="w100">
            <h2>Cart items</h2>
            {cart.map((item) => (
              <div className="cartInventory" key={item.id}>
                <article className="cartItem">
                  <div className="imageItem">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="descItem">
                    <h3>{item.name}</h3>
                    <p>{item.attributes.map((i) => i.Processor)}</p>
                  </div>
                  <div className="controlsItem">
                    <button
                      className="trash"
                      onClick={() => decrementHandler(item)}
                    >
                      <BsTrash />
                    </button>
                    {/* <button className="decrement"><FaMinusSquare /></button> */}
                    <span className="qtySpan">{item.quantity}</span>
                    <button
                      className="increment"
                      onClick={() => incrementHandler(item)}
                    >
                      +
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </section>
          <div className="cartSummeryContainer">
            <h2>Cart Summery</h2>

            <aside className="cartSummery">
              <div className="cartInfoContainer">
                <div className="cartItems">
                  <p>prices</p>
                  <p>$1900</p>
                </div>
                <div className="cartItems">
                  <p>Mobile</p>
                  <p>$75900</p>
                </div>
              </div>

              <div className="sumTotalCart">
                <p>Total Price</p>
                <p>$ 78958000</p>
              </div>
              <Link to={auth ? "/checkout":"/login?redirect=checkout"}>
                <button
                  className="btn checkOutBtn"
                  
                >
                  go to check out
                </button>
              </Link>
            </aside>
          </div>
        </div>
      </LayoutTwo>
    </>
  );
};

export default CartPage;
