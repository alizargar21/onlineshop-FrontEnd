import { createSlice } from "@reduxjs/toolkit";
const LOCAL_STORAGE_FAVORITE_KEY = "Favorite_List";

const initialState = {
  favoriteList: []
};

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setInitialValue: (state, action) => {
      return {...state ,favoriteList : action.payload}
    },
    addToFavoriteList: (state, action) => {
      const index = state.favoriteList.findIndex(
        (item) => item._id === action.payload._id
      );
      if (index < 0) {
        state.favoriteList.push(action.payload);
        // localStorage.setItem(
        //   LOCAL_STORAGE_FAVORITE_KEY,
        //   JSON.stringify(state.favoriteList)
        // );
      }
      if (index >= 0) {
        state.favoriteList.splice(index, 1);
        // localStorage.setItem(
        //   LOCAL_STORAGE_FAVORITE_KEY,
        //   JSON.stringify(state.favoriteList)
        // );
      }
    },
  },
});
export const { addToFavoriteList , setInitialValue} = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
