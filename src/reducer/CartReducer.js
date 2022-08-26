const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
          updatedCart.push({ ...action.payload, quantity: 1 });
        } else {
          const updatedItem = { ...state.cart[updatedItemIndex] };
          updatedItem.quantity++
          updatedCart[updatedItemIndex] = updatedItem
      }
      console.log(state.cart);
      return {...state , cart:updatedCart , total: state.total + action.payload.offPrice};
    };
    case "DECREMENT_AT_CART":{
      const updatedCart = [...state.cart];
      const updatedItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = {...state.cart[updatedItemIndex]};
      if(updatedItem.quantity === 1){
        const filteredItems = updatedCart.filter((item)=>item.id !== action.payload.id)
        return {...state , cart:filteredItems}
      }else {
        updatedItem.quantity--
        updatedCart[updatedItemIndex] = updatedItem
        
        return {...state , cart: updatedCart,  total: state.total - parseInt(action.payload.offPrice)}
      }
    }
    default:
      return state;
  }
};

export default CartReducer;
