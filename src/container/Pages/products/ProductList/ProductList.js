import "./productList.css";


import LaptopsProd from "../../../../components/Products/LaptopProd";
import SearchSort from "../../../../components/Search and sort/Search&Sort";
import LayoutTwo from "../../../Layout/LayoutTwo";
import { useLocation, useParams } from "react-router-dom";
const ProductList = () => {

  return (
    <LayoutTwo>
    <div className="container">
      
      <div className="productList">
        <LaptopsProd />
      </div>
      <SearchSort />
    </div>
    </LayoutTwo>
  );
};

export default ProductList;
