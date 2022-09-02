const CartReducer = (state, action) => {
  let aP = action.payload;
  console.log(aP)
  const offPrice = aP.price - (aP.price * aP.discount) /100
  
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
 
      );
      if (updatedItemIndex < 0 ) {
          updatedCart.push({ ...action.payload, quantity: 1 , selectedColor: action.payload.selectedColor});
        } else {
          const updatedItem = { ...state.cart[updatedItemIndex] };
          updatedItem.quantity++
          updatedCart.selectedColor = action.payload.selectedColor
          updatedCart[updatedItemIndex] = updatedItem
      }
      return {...state , cart:updatedCart , total: state.total + offPrice };
      console.log(state.cart);
    };
    case "DECREMENT_AT_CART":{
 
      const updatedCart = [...state.cart];
      const updatedItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = {...state.cart[updatedItemIndex]};
      if(updatedItem.quantity === 1){
        const filteredItems = updatedCart.filter((item)=>item.id !== action.payload.id)
        return {...state , cart:filteredItems , total: state.total - offPrice}
      }else {
        updatedItem.quantity--
        updatedCart[updatedItemIndex] = updatedItem
        
        return {...state , cart: updatedCart,  total: state.total - offPrice}
      }
    }

    
    default:
      return state;
  }
};

export default CartReducer;
