
export const calculateTotalItem = (cart) => {
    

  return   cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity, 0)
    : 0;
}

export const calculateTotalOriginalPrice = (cart) => {
    return  cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    : 0;
}
export const calculateTotalAmountPayable = (cart) => {
    return  cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity * (cur.price  - (cur.price * cur.discount) / 100), 0)
    : 0;
}

export const calculateTotalDiscount = (cart) => {
  return cart.length ? cart.reduce((acc , cur)=> acc + cur.quantity * ( (cur.price * cur.discount) / 100),   0) : 0
}