import Layout from "../../../Layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ListContainer from "../../../../components/UI/ListContainer/ListContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  getAsyncProducts,
  getProductsByCategories,
} from "../../../../features/ProductsSlice/ProductsSlice";

const ProductListContainer = () => {
  const {products , loading}= useSelector(state => state.products)
  const location = useLocation();
  const [originalValue, setOriginalValue] = useState(null);
  const [renderValue, setRenderValue] = useState(null);

  const getProduct = () => {
      if (products !== null) {
          const laptops = products.filter((item) => item.category === "laptops");
          const mobiles = products.filter((item) => item.category === "mobiles");
          const cases = products.filter((item) => item.category === "cases");
      
          switch (location.pathname) {
              case "/laptops":
        
                return setOriginalValue(laptops), setRenderValue(laptops);
              case "/mobiles":
                return setOriginalValue(mobiles), setRenderValue(mobiles);
              case "/cases":
                return setOriginalValue(cases), setRenderValue(cases);
              default:
                return setOriginalValue(products);
            }
          }
        };
  useEffect(() => {
  
  
    getProduct();
      }, []);


  return (
    <Layout>
      {loading ? (
        <p>loading</p>
      ) : (
        <ListContainer
          loading={loading}
          originalValue={originalValue}
          renderValue={renderValue}
          setRenderValue={setRenderValue}
        ></ListContainer>
      )}
    </Layout>
  );
};

export default ProductListContainer;
