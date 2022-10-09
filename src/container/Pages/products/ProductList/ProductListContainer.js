import Products from "../../../../components/Products/Products";
import SearchSort from "../../../../components/Search and sort/Search&Sort";
import Layout from "../../../Layout/Layout";
import data from "../../../../data/db.json";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ListContainer from "../../../../components/UI/ListContainer/ListContainer";

let {
  products: { laptop, mobile, cases },
} = data;

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



  return (
    <Layout>
      <ListContainer  originalValue={originalValue} renderValue={renderValue} setRenderValue={setRenderValue}>
      </ListContainer>
    </Layout>
  );
};

export default ProductListContainer;
