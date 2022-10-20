import Layout from "../../../Layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ListContainer from "../../../../components/UI/ListContainer/ListContainer";
import useFetch from "../../../../hooks/useFetch";

const ProductListContainer = () => {
  const { data, error, loading } = useFetch("/products");
  const location = useLocation();
  const [originalValue, setOriginalValue] = useState(null);
  const [renderValue, setRenderValue] = useState(null);

  const getProduct = () => {
    if (data !== null) {
      const laptops = data.filter((item) => item.category === "laptops");
      const mobiles = data.filter((item) => item.category === "mobiles");
      const cases = data.filter((item) => item.category === "cases");
      switch (location.pathname) {
        case "/laptops":
          console.log(laptops);
          console.log(mobiles);
          console.log(cases);

          return setOriginalValue(laptops), setRenderValue(laptops);
        case "/mobiles":
          return setOriginalValue(mobiles), setRenderValue(mobiles);
        case "/cases":
          return setOriginalValue(cases), setRenderValue(cases);
        default:
          return setOriginalValue(data);
      }
    }
  };
  useEffect(() => {
    console.log("render ProductList");
    console.log(data)
    getProduct();
  }, [data]);

  return (
    <Layout>
      
      <ListContainer
        error={error}
        loading={loading}
        originalValue={originalValue}
        renderValue={renderValue}
        setRenderValue={setRenderValue}
      ></ListContainer>
    </Layout>
  );
};

export default ProductListContainer;
