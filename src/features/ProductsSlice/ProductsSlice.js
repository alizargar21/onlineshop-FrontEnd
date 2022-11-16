import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../services/httpServices";
import {
  sortByInexpensive,
  sortByExpensive,
  sortByPopularity,
} from "../../utils/sortByPrice";
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
export const getAsyncProductById = createAsyncThunk(
  "products/getAsyncProductById",
  async (payload, { rejectWithValue }) => {
    console.log(payload)
    try {
      const {data} = await http.get(`/products/${payload}`);
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
export const getAsyncOffersProducts = createAsyncThunk("products/getAsyncOffersProducts" , async(_ , {rejectWithValue})=>{
  try {
    const {data} = await http.get("/products")
    const offersProducts = data.filter(item => item.discount > 0)
    return offersProducts
  } catch (error) {
    return rejectWithValue([],error)
  }
})
export const getAsyncProductsByCategories = createAsyncThunk(
  "products/getAsyncProductsByCategory",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await http.get("/products");
if(payload === "all"){
  return data
} else {
  const filteredByCategory = data.filter(
    (item) => item.category === payload
  );
  return filteredByCategory;
}
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  products: [],
  filteredProducts : [],
  product: {},
  error: null,
  loading: false,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

    sortBy: (state, action) => {
      switch (action.payload) {
        case "all": {
        return {...state , products: [...state.products]}
        }
        case "expensive":
          if(state.filteredProducts.length === 0){
          state =   {...state , products: state.products.sort(sortByExpensive)}
          } else {
            state = {...state , filteredProducts: state.filteredProducts.sort(sortByExpensive)}
          }
break;
        case "inexpensive":
          if(state.filteredProducts.length === 0){
            state.products = state.products.sort(sortByInexpensive);
          } else {
            state.products = state.filteredProducts.sort(sortByInexpensive)
          }
      break;    
        case "popularity":
          if(state.filteredProducts.length === 0){
            state.products = state.products.sort(sortByPopularity);
          } else {
            state.products = state.filteredProducts.sort(sortByPopularity)
          }
          default : return state
      }
    },
    search : (state , action)=> {
      console.log(action.payload)
      if(action.payload === ""){
        return {
          ...state ,  filteredProducts : []
        }
      }else {
            const filteredProducts = state.products.filter((item)=>{
                return   Object.values(item.name + item.brand).join("").toLowerCase().includes(action.payload.toLowerCase())
                })  
            return {
          ...state , filteredProducts: filteredProducts  ,error : filteredProducts.length === 0 ? "NO MATCH RESULT ..." : null
        }
      }
    }
  },
  extraReducers: {
    [getAsyncProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        products: action.payload,
        filteredProducts : [],
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
    [getAsyncProductsByCategories.fulfilled]: (state, action) => {
      return {
        ...state,
        products: action.payload,
        filteredProducts : [],
        loading: false,
        error: null,
      };
    },
    [getAsyncProductsByCategories.rejected]: (state, action) => {
      return { ...state, products: [], loading: false, error: action.error };
    },
    [getAsyncProductsByCategories.pending]: (state, action) => {
      return { ...state, products: [], loading: true, error: null };
    },
    [getAsyncOffersProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        products: action.payload,
        filteredProducts : [],
        loading: false,
        error: null,
      };
    },
    [getAsyncOffersProducts.rejected]: (state, action) => {
      return { ...state, products: [], loading: false, error: action.error };
    },
    [getAsyncOffersProducts.pending]: (state, action) => {
      return { ...state, products: [], loading: true, error: null };
    },
    [getAsyncProductById.fulfilled]: (state, action) => {
      return {
        ...state,
        product: action.payload,
        filteredProducts : [],
        loading: false,
        error: null,
      };
    },
    [getAsyncProductById.rejected]: (state, action) => {
      return { ...state, product: {}, loading: false, error: action.error };
    },
    [getAsyncProductById.pending]: (state, action) => {
      return { ...state, product: {}, loading: true, error: null };
    },
  },
});

export const { search, sortBy } = ProductsSlice.actions;
export default ProductsSlice.reducer;
