import Layout from "../../Layout/Layout";

import SortBar from "../../../components/Search and sort/SortBar";
import { useDispatch, useSelector } from "react-redux";
import ListContainer from "../../../components/UI/ListContainer/ListContainer";
import { useEffect, useState } from "react";
import CategoriesComponent from "../../../components/CategoriesComponent/CategoriesComponent";
import {
  getAsyncProductById,
  getAsyncProducts,
  getAsyncProductsByCategories,
} from "../../../features/ProductsSlice/ProductsSlice";
const ProductsAndCategories = () => {
  const [categoryValue, setCategoryValue] = useState("all");
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const value = e.target.value;
    setCategoryValue(value)
    if (value === "all") {
      dispatch(getAsyncProducts());
    } else {
      dispatch(getAsyncProductsByCategories(e.target.value));
    }
  };
  const { products, loading, error, filteredProducts } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getAsyncProducts());
    
  }, []);
  return (
    <Layout>
      <CategoriesComponent changeHandler={changeHandler}  />
      <section className="my-10">
        <SortBar error={error} categoryValue={categoryValue}/>
        {!loading && (
          <ListContainer
            renderValue={
              filteredProducts.length === 0 ? products : filteredProducts
            }
          />
        )}
      </section>
    </Layout>
  );
};

export default ProductsAndCategories;
