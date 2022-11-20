import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice/AuthSlice";
import FavoriteReducer from "./FavoriteSlice/FavoriteSlice";
import ProductReducer from "./ProductsSlice/ProductsSlice";
import CartReducer from "./CartSlice/CartSlice"
const LOCAL_STORAGE_FAVORITE_KEY = "Favorite_List";
const LOCAL_STORAGE_AUTH_KEY = "Auth";

const store = configureStore({
  reducer: {
    products: ProductReducer,
    auth: AuthReducer,
    favorite: FavoriteReducer,
    cart : CartReducer
  },
});

store.subscribe(()=>{
 const rootState = store.getState()
 localStorage.setItem(LOCAL_STORAGE_FAVORITE_KEY , JSON.stringify(rootState.favorite.favoriteList))
 localStorage.setItem(LOCAL_STORAGE_AUTH_KEY , JSON.stringify(rootState.auth.user))
})
export  const getFavoriteDataFromLocalStorage = ()=> {
  try {
   const persistFavoriteList = localStorage.getItem(LOCAL_STORAGE_FAVORITE_KEY) || null
   if(persistFavoriteList){
    return JSON.parse(persistFavoriteList)
   }
  } catch (error) {
  console.log(error)    
  }
}
export  const getAuthenticationDataFromLocalStorage = ()=> {
  try {
   const persistAuthentication = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY) 
   console.log(persistAuthentication)
   if(persistAuthentication !== undefined || null ){
    return JSON.parse(persistAuthentication)
   }
  } catch (error) {
  console.log(error)    
  }
}
export default store;
