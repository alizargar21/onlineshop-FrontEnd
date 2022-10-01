import ProductList from "../../../../components/Products/ProductList";
import SearchSort from "../../../../components/Search and sort/Search&Sort";
import LayoutTwo from "../../../Layout/LayoutTwo";
import data from "../../../../data/db.json";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

let {
  products: { laptop, mobile, cases },
} = data;
let products;

const ProductListContainer = () => {
  const location = useLocation();
  const [originalValue, setOriginalValue] = useState(null);

  const [renderValue, setRenderValue] = useState(null);
  const allProducts = [...laptop, ...mobile, ...cases];
  const getProduct = async () => {
    switch (location.pathname) {
      case "/laptops":
        return setOriginalValue(laptop), setRenderValue(laptop);
      case "/mobiles":
        return setOriginalValue(mobile), setRenderValue(mobile);
      case "/cases":
        return setOriginalValue(cases), setRenderValue(cases);
      default:
        return setOriginalValue(allProducts);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleSearch = (e) => {
    let searchValue = e.target.value;
    console.log(e.target.value);
    if (searchValue !== "") {
      const filteredProducts = originalValue.filter((p) => {
        return p.name.toLowerCase().includes(searchValue.toLowerCase());
      });

      setRenderValue(filteredProducts);
    } else {
      setRenderValue(originalValue);
    }
  };

  return (
    <LayoutTwo>
      <div className="w-full py-5 h-auto flex justify-between md:flex-col-reverse ">
        <div className="md:w-[90%]   mx-auto w-[65%] grid gap-2 grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 ">
          {renderValue ? (
            <ProductList data={renderValue} />
          ) : (
            <p className="text-gray-800 dark:text-gray-200">Loading...</p>
          )}
        </div>
        <SearchSort handleSearch={handleSearch} />
      </div>
    </LayoutTwo>
  );
};

export default ProductListContainer;
