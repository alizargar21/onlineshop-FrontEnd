import { useEffect, useState, useRef } from "react";
import Carousel from "../UI/Carousel/Carousel";
import data from "../../data/db.json";
import { Link } from "react-router-dom";


const {
  products: { laptop, mobile, cases },
} = data;
const OfferBox = () => {
  const [sortedProducts, setSortedProducts] = useState([]);
  const allProducts = [...laptop, ...mobile, ...cases];
  // const btnRef = useRef(null)

  const dataSorted = allProducts.sort((a, b) => {
    if (a.discount > b.discount) {
      return -1;
    } else if (a.discount < b.discount) {
      return 1;
    } else {
      return 0;
    }
  });
  const products = dataSorted.slice(0, 10);
  useEffect(() => {
    console.log(items);
    setSortedProducts(dataSorted);
  }, []);
  const items = products.map((item) => (
    <div className="center top-4 " key={item.id}>
      <Link to={`/product/${item.id}`}>
        <div className="center w-[160px] mx-3 h-[170px] border rounded-lg bg-gray-200  relative">
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
      <h2 className="text-3xl text-center text-rose-600 font-extrabold my-3 dark:text-rose-500">
        Amazing Offers{" "}
      </h2>
      <div className="bg-gray-400 backdrop:blur-md w-[90%] h-[230px] mx-auto my-5 rounded-lg center sm:w-full sm:rounded-none">
        <div className="relative w-[20%] md:w-[40%] h-[180px]  center mx-2 sm:w-[35%]">
          <h2 className="absolute top-[20%] font-bold text-rose-600 text-xl">
            Special Offers
          </h2>
          <img
            src="/images/offerbox.png"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full mx-2 bg-rose-500 h-[90%] rounded-lg  overflow-hidden center sm:w-[60%]">
          <Carousel responsive={responsive} items={items} />
        </div>
      </div>
    </section>
  );
};

export default OfferBox;
