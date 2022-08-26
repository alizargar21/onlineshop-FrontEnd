import { BsStarFill, BsHeartFill, BsTagFill } from "react-icons/bs";
import "../../container/Pages/products/ProductList/productList.css";
import data from "../../data/db.json";
import { useCartActions } from "../../Provider/CartProvider";
import { useLocation } from "react-router-dom";
let {
  products: { laptop, mobile, cases },
} = data;

const LaptopsProd = () => {
  const dispatch = useCartActions();
  const location = useLocation();
  console.log(location.pathname)
  let dataForMap ;
  const getProduct = () => {
    switch (location.pathname) {
      case "/laptops" : return dataForMap = laptop;
      case "/mobiles" : return dataForMap = mobile;
      case "/cases" : return dataForMap = cases;
      default : return dataForMap = laptop
    }
    return dataForMap
  }
  getProduct()

  const addToCartHandler = (item) => {
    console.log("clicked");
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <>
      {dataForMap.map((item) => (
        <article key={item.id}>
          <div className="product">
            <div className="topBar"></div>
            <div className="colorsAndLike">
              <div className="colors">
                <a href="">
                  <span className={`color`}></span>
                </a>
              </div>

              <button className="like">
                <BsHeartFill />
              </button>
            </div>
            <img src={item.image} className="image"></img>
            <div className="description">
              <h4>{item.name}</h4>
              <p className="price">{item.price}</p>
              <div className="discountDiv">
                <BsTagFill />
                <p className="offPrice">{item.offPrice}</p>
              </div>
            </div>
            <div className="ecart">
              <div className="rate">
                <BsStarFill />
                {item.rate}
              </div>
              <button className="btn" onClick={() => addToCartHandler(item)}>
                Add To Cart
              </button>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default LaptopsProd;
