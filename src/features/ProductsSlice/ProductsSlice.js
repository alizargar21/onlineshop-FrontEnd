import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../services/httpServices";

export const getAsyncProducts = createAsyncThunk(
  "products/getAsyncProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get("/products");

      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  products: [],
  error: null,
  loading: false,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortBy: (state, action) => {
      if (action.payload.value === "") {
        return state;
      }
      if (action.payload.value === "inexpensive") {
        const sortedProducts = state.products.sort((a, b) => b.price - a.price);
        return { ...state , products: sortedProducts };
      } else {
        const sortedProducts = state.products.sort((a, b) => a.price - b.price);
        return {...state ,  products: sortedProducts };
      }
    }
  },
  extraReducers: {
    [getAsyncProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    },
    [getAsyncProducts.pending]: (state, action) => {
      return { ...state, products: [], loading: true, error: null };
    },
    [getAsyncProducts.rejected]: (state, action) => {
      return { ...state, products: [], loading: false, error: action.payload };
    },
  },
});

export const { sortBy } = ProductsSlice.actions;
export default ProductsSlice.reducer;
