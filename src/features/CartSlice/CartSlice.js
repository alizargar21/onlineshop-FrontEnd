import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let aP = action.payload;

      console.log(Object.values(aP.selectedColor));
      //  console.log(aP)
      const offPrice = aP.price - (aP.price * aP.discount) / 100;
      const updatedItemIndex = state.cart.findIndex(
        (item) =>
          item._id === aP._id &&
          Object.values(item.selectedColor)[0] ===
            Object.values(aP.selectedColor)[0]
      );
      console.log(updatedItemIndex);
      if (updatedItemIndex < 0) {
        const newItem = {
          ...aP,
          quantity: 1,
          selectedColor: aP.selectedColor,
          createdAt: aP._id + Date.now(),
        };
        state.cart.push(newItem);
        state.total = state.total + offPrice;
      } else {
        const updatedItem = { ...state.cart[updatedItemIndex] };
        updatedItem.quantity++;
        state.cart[updatedItemIndex] = updatedItem;

        state.total = state.total + offPrice;
      }
    },
    decrementAtCart: (state, action) => {
      let aP = action.payload;
      const offPrice = aP.price - (aP.price * aP.discount) / 100;

      
      const updatedItemIndex = state.cart.findIndex(
        (item) =>
        item._id === aP._id &&
        Object.values(item.selectedColor)[0] ===
        Object.values(aP.selectedColor)[0]
        );
        const updatedItem = { ...state.cart[updatedItemIndex] };
        if (
        updatedItem.quantity === 1 &&
        Object.values(updatedItem.selectedColor)[0] ===
          Object.values(aP.selectedColor)[0]
      ) {
        const filteredItems = state.cart.filter(item => item.createdAt !== aP.createdAt)
        state.cart = filteredItems
        state.total = state.total - offPrice;

      } else if (updatedItem.quantity !== 1 && Object.values(updatedItem.selectedColor)[0] ===
      Object.values(aP.selectedColor)[0]){
        updatedItem.quantity--
        state.cart[updatedItemIndex] = updatedItem
        state.total = state.total - offPrice;

      }
    },
  },
});

export const { addToCart , decrementAtCart } = CartSlice.actions;
export default CartSlice.reducer;

// Object.values(item.selectedColor) === Object.values(aP.selectedColor)
