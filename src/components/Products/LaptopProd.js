import { BsStarFill, BsHeartFill, BsTagFill } from "react-icons/bs";
import "../../container/Pages/products/ProductList/productList.css";
import data from "../../data/db.json";

import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
let {
  products: { laptop, mobile, cases },
} = data;

const LaptopsProd = () => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.pathname);
  let dataForMap;
  const getProduct = () => {
    switch (location.pathname) {
      case "/laptops":
        return (dataForMap = laptop);
      case "/mobiles":
        return (dataForMap = mobile);
      case "/cases":
        return (dataForMap = cases);
      default:
        return (dataForMap = laptop);
    }
  };
  getProduct();

  return (
    <>
      {dataForMap.map((item) => (
        <article key={item.id}>
          <div className="product">
            <div className="topBar"></div>
            <div className="colorsAndLike">
              <div className="colors">
                <Link to={`/product/${item.id}`}>
                  {item.colors.map((c, index) => (
                    <span
                      key={index}
                      style={{ backgroundColor: c }}
                      className={`color`}
                    ></span>
                  ))}
                </Link>
              </div>

              <button className="like">
                <BsHeartFill />
              </button>
            </div>
            <Link className="goToProd" to={`/product/${item.id}`}>
              <img src={item.image} className="image"></img>
            </Link>
            <div className="description">
              <h4>{item.name}</h4>
              <p className={item.discount !== 0 ? "offPrice":"price"}>{`$${item.price}`}</p>
              {item.discount ? (
                <div className="discountDiv">
                  <BsTagFill />
                  <p className="discount">
                    {`$ ${item.price - (item.price * item.discount) / 100}`}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="ecart">
              <div className="rate">
                <BsStarFill />
                {item.rate}
              </div>

              <button
                className="btn"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                Check Product
              </button>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default LaptopsProd;
