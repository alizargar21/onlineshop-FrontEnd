import "./cartpage.css";
import styles from "../products/SingleProduct/singleProduct.module.css";
import { BsTrash } from "react-icons/bs";
import { useCartActions, useCart } from "../../../Provider/CartProvider";
import LayoutTwo from "../../Layout/LayoutTwo";
import { useEffect, useRef } from "react";
import { useAuth } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import CartSummery from "../../../components/CartSummery/CartSummery";
const CartPage = () => {
  const dispatch = useCartActions();
  const { cart, total } = useCart();
  const auth = useAuth();
  
  useEffect(() => {
    console.log(cart)
  }, [cart, total]);
  const incrementHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const decrementHandler = (item) => {
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
                  <Link to={`/product/${item.id}`}>
                    <div className="imageItem">
                      <img src={item.image} alt="" />
                    </div>
                  </Link>
                  <div className="descItem">
                    <h3>{item.name}</h3>
                    <p>{item.attributes.map((i) => i.Processor)}</p>
                    {/* <span className="selectedColor" style={{backgroundColor:item.selectedColor}}></span> */}
                    {item.selectedColor.map(c=> (<span className="selectedColor" style={{backgroundColor:item.selectedColor}}></span> ))}
                  </div>
                  <div className="controlOption">
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
                    
                  </div>
                </article>
              </div>
            ))}
          </section>
          <CartSummery total={total} cart={cart} auth={auth} />
        </div>
      </LayoutTwo>
    </>
  );
};

export default CartPage;
