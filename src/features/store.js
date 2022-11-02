import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice/AuthSlice"
import ProductReducer from "./ProductsSlice/ProductsSlice";

const store = configureStore({
  reducer: {
    products : ProductReducer,
    auth : AuthReducer
  },
});

export default store