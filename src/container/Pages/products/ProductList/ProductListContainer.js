import Layout from "../../../Layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ListContainer from "../../../../components/UI/ListContainer/ListContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  getAsyncProducts,
  getAsyncProductsByCategories,
} from "../../../../features/ProductsSlice/ProductsSlice";

const ProductListContainer = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if(location.pathname === "/products"){
        console.log("worked");
    }
    dispatch(
      getAsyncProductsByCategories(
        location.pathname.slice(10, location.pathname.length)
      )
    );
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <ListContainer
          loading={loading}
          renderValue={products}
    
        ></ListContainer>
      )}
    </>
  );
};

export default ProductListContainer;
