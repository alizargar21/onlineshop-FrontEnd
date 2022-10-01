const CartReducer = (state, action) => {
  let aP = action.payload;
  console.log(aP)
  const offPrice = aP.price - (aP.price * aP.discount) /100
  
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = state.cart.findIndex(
        (item) => item.id === aP.id && item.selectedColor === aP.selectedColor
      );
      if (updatedItemIndex < 0 ) {
          updatedCart.push({ ...action.payload, quantity: 1 , selectedColor: aP.selectedColor , createdAt : aP.id + Date.now()});
        } else {
          const updatedItem = { ...state.cart[updatedItemIndex] };
          updatedItem.quantity++
          updatedCart.selectedColor = aP.selectedColor
          updatedCart[updatedItemIndex] = updatedItem
      }
      return {...state , cart:updatedCart , total: state.total + offPrice };

    };
    case "DECREMENT_AT_CART":{
 
      const updatedCart = [...state.cart];
      const updatedItemIndex = state.cart.findIndex(
        (item) => item.id === aP.id && item.selectedColor === aP.selectedColor
      );
      const updatedItem = {...state.cart[updatedItemIndex]};
      if(updatedItem.quantity === 1 && updatedItem.selectedColor === aP.selectedColor){
        const filteredItems = updatedCart.filter((item)=> item.createdAt !== aP.createdAt )
        return {...state , cart:filteredItems , total: state.total - offPrice}
      }else if (updatedItem.quantity !== 1 && updatedItem.selectedColor === aP.selectedColor){
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
