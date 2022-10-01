import { useContext, createContext, useState, useEffect, useReducer } from "react";
import FavoriteReducer from "../reducer/FavoriteReducer";

const FavoriteContext = createContext();
const FavoriteContextDispatcher = createContext();

export const LOCAL_STORAGE_FAVORITE_KEY = "Theme";
const initialState = {
    favoriteItems : []
}
const FavoriteProvider = ({ children }) => {
  const [favorite, dispatch] = useReducer(FavoriteReducer ,initialState);
  //component did mount ///

  useEffect(() => {
    
  }, []);
  useEffect(() => {
  }, []);


  return (
    <FavoriteContext.Provider value={favorite}>
      <FavoriteContextDispatcher.Provider value={dispatch}>
        {children}
      </FavoriteContextDispatcher.Provider>
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;

export const useFavorite = () => useContext(FavoriteContext);
export const useFavoriteActions = () => useContext(FavoriteContextDispatcher);
