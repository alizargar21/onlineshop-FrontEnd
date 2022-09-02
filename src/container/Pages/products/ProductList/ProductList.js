import "./productList.css";


import LaptopsProd from "../../../../components/Products/LaptopProd";
import SearchSort from "../../../../components/Search and sort/Search&Sort";
import LayoutTwo from "../../../Layout/LayoutTwo";

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
