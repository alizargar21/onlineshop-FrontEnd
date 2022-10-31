import { useEffect, useState, useRef, Suspense } from "react";
import Carousel from "../UI/Carousel/Carousel";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../common/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";


const OfferBox = ({ products, loading }) => {
  const [offerData, setOfferData] = useState([]);

  const navigate = useNavigate()
  const createOfferData = (products) => {
    const data = [...products]
    const dataSorted = data.sort((a, b) => {
      if (a.discount > b.discount) {
        return -1;
      } else if (a.discount < b.discount) {
        return 1;
      } else {
        return 0;
      }
    });
    const productsOffer = dataSorted.slice(0, 10);
    setOfferData(productsOffer);
  };
  useEffect(() => {
    createOfferData(products);
  }, [products]);
  const items = offerData.map((item) => (
    <div className="center top-4 " key={item._id}>
      <Link to={`/products/${item._id}`}>
        <div className="center w-[160px] mx-3 h-[170px]  rounded-lg bg-gray-200 dark:bg-white/70 relative">
          <img
            src={item.image}
            alt=""
            className="w-[150px] hover:scale-105 duration-300"
          />
          <span className="absolute top-2.5 right-1   bg-rose-500 rounded-full text-gray-200 w-[35px] center rounded-tr-none">
            %{item.discount}
          </span>
        </div>
      </Link>
    </div>
  ));
  const responsive = {
    540: { items: 1 },
    680: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  // =====================================================================

  return (
    <section>
      <div className="bg-black/30 backdrop:blur-md w-[90%] h-[230px] mx-auto my-5 rounded-lg center sm:w-full sm:rounded-none">
        <div className="relative w-[20%] md:w-[40%] h-[180px]  center mx-2 sm:w-[35%]">
          <h2 className="absolute top-[20%] font-bold text-rose-600 text-2xl left-[20%]">
            Special Offers
          </h2>
          <img
            src="/images/offerbox.png"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full mx-2 bg-rose-500 h-[90%] rounded-lg  overflow-hidden center sm:w-[60%]">
          {loading && <Spinner />}
          <Carousel responsive={responsive} items={items} />
        </div>
      </div>
    </section>
  );
};

export default OfferBox;
