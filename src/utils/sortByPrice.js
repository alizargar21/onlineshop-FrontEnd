export const sortByExpensive = (a , b) =>{
  return  b.price - a.price
}
export const sortByInexpensive = (a , b) =>{
  return  a.price - b.price
}
export const sortByPopularity = (a,b) => {
  return b.rate - a.rate
}
export const searchBy = ( value)=>{
  return (item)=>{Object.values(item.name).toLowerCase().includes(value)}
}