import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductsSlice/ProductsSlice";

const store = configureStore({
  reducer: {
    products : ProductReducer,
    
  },
});

export default store