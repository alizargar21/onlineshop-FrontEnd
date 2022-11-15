import { useEffect, useRef, useState } from "react";
import { BsHeartFill, BsStarFill, BsHeart, BsShare } from "react-icons/bs";
import { toast } from "react-toastify";
import { addToFavoriteList } from "../../features/FavoriteSlice/FavoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/CartSlice/CartSlice";
const SingleProduct = ({ selectedProduct }) => {
  const [chooseColor, setChooseColor] = useState(false);
  const [cartItem , setCartItem ] = useState({})
  const { favoriteList } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(selectedProduct.selectedColor);
  }, []);
  const handleAddToCart = () => {
    console.log("worked")
    dispatch(addToCart(cartItem));
    toast.success("Added To Cart");
  };
  const handleSelectColor = (value) => {
    setChooseColor(true);
    const item = {...selectedProduct , selectedColor : value}
    setCartItem(item)
    console.log(item)
  };
  return (
    <>
      { (
        <section className="w-[90%] h-auto mx-auto flex justify-between  my-12  md:flex-col">
          <aside className="flex flex-col 2xl:sticky top-20 md:static w-[40%] text-gray-800 dark:text-gray-200  bg-white/60 dark:bg-black/30 items-center h-[80%]  rounded-md my-2 p-4 md:w-[90%] md:h-[70%] sm:min-h-[500px] mx-auto">
            <h2 className="text-xl mt-2 sm:text-lg ">{selectedProduct.name}</h2>
            <div className="w-full h-full center">
              <img
                src={selectedProduct.image}
                className="w-[70%] mx-auto h-[90%] md:h-[80%] md:w-[80%] sm:w-[80%] sm:h-full hover:scale-105 duration-300"
              />
            </div>
            <div
              className={
                selectedProduct.discount !== 0
                  ? " text-3xl xl:text-3xl flex justify-evenly w-full items-center font-Roboto"
                  : "font-bold text-3xl xl:text-3xl w-full center font-Roboto"
              }
            >
              <div className="center ">
                {selectedProduct.discount === 0 ? (
                  <p className="mt-2">$ {selectedProduct.price}</p>
                ) : (
                  <>
                    <p className="line-through opacity-80">
                      $ {selectedProduct.price}
                    </p>
                    <span className="text-xs center w-7 h-5 bg-red-600 text-white rounded-full rounded-tr-none mx-2">
                      %{selectedProduct.discount}
                    </span>
                  </>
                )}
              </div>
              <div>
                {selectedProduct.discount !== 0 && (
                  <p className="text-green-500 ">
                    $
                    {selectedProduct.price -
                      (selectedProduct.price * selectedProduct.discount) / 100}
                  </p>
                )}
              </div>
            </div>
            <div className="flex  w-full  sm:flex flex-col">
              <div className="w-full h-[90px] center">
                <p> Colors </p>
                {selectedProduct &&
                  selectedProduct.colors.map((item, index) => (
                    <div
                      key={index}
                      className="border-gray-900  py-3"
                      onChange={() => handleSelectColor(item)}
                    >
                      <input
                        type="radio"
                        name="color"
                        className="chooseColor dark:border dark:border-white checked:w-7 checked:h-7 duration-300 m-1 cursor-pointer"
                        style={{ backgroundColor: Object.values(item) }}
                        value={item}
                      />
                    </div>
                  ))}
                <div className="center">
                  <BsStarFill className="mx-1 text-yellow-400" />
                  {selectedProduct.rate}
                  <button type="button" className="text-red-500  ml-4 text-xl ">
                    {favoriteList.findIndex(
                      (favItem) => favItem._id === selectedProduct._id
                    ) > -1 || null ? (
                      <BsHeartFill
                        onClick={() =>
                          dispatch(addToFavoriteList(selectedProduct))
                        }
                      />
                    ) : (
                      <BsHeart
                        onClick={() =>
                          dispatch(addToFavoriteList(selectedProduct))
                        }
                      />
                    )}
                  </button>
                  <button>
                    <BsShare className="mx-3" />
                  </button>
                </div>
              </div>
              <div className=" center  sm:mx-auto w-full  ">
                <button
                  className="btn-primary w-full md:w-[70%] sm:w-full"
                  disabled={chooseColor === false}
                  onClick={handleAddToCart}
                >
                  {chooseColor ? "Add To Cart" : "Select Color"}
                </button>
              </div>
            </div>
          </aside>
          <article className="center flex-col justify-start w-[60%] md:w-full text-gray-800 dark:text-gray-200">
            <h3 className="my-3 text-center text-3xl">
              {selectedProduct.name}
            </h3>

            <div className="w-full">
              <div className="center flex-col divide-y divide-gray-800 dark:divide-gray-200">
                {selectedProduct &&
                  selectedProduct.attributes.map((item, index) => (
                    <div
                      className="w-[90%] flex justify-between font-mono"
                      key={index}
                    >
                      <p className="">{Object.keys(item)} :</p>
                      <p className="">{Object.values(item)}</p>
                    </div>
                  ))}
              </div>
            </div>
            <article className="w-[90%] mx-auto my-5 text-justify text-gray-800 dark:text-gray-200">
              <h2 className="text-center text-3xl my-6">Introduction</h2>
              <p>{selectedProduct.introduction}</p>
            </article>
          </article>
        </section>
      )}
    </>
  );
};

export default SingleProduct;

// {(
//   <section className="w-[90%] h-auto mx-auto flex justify-between  my-12  md:flex-col">
//     <aside className="flex flex-col 2xl:sticky top-20 md:static w-[40%] text-gray-800 dark:text-gray-200  bg-white/60 dark:bg-black/30 items-center h-[80%]  rounded-md my-2 p-4 md:w-[90%] md:h-[70%] sm:min-h-[500px] mx-auto">
//       <h2 className="text-xl mt-2 sm:text-lg ">{product.name}</h2>
//       <div className="w-full h-full center">
//         <img
//           src={product.image}
//           className="w-[70%] mx-auto h-[90%] md:h-[80%] md:w-[80%] sm:w-[80%] sm:h-full hover:scale-105 duration-300"
//         />
//       </div>
//       <div
//         className={
//           product.discount !== 0
//             ? " text-3xl xl:text-3xl flex justify-evenly w-full items-center font-Roboto"
//             : "font-bold text-3xl xl:text-3xl w-full center font-Roboto"
//         }
//       >
//         <div className="center ">
//           {product.discount === 0 ? (
//             <p className="mt-2">$ {product.price}</p>
//           ) : (
//             <>
//               <p className="line-through opacity-80">
//                 $ {product.price}
//               </p>
//               <span className="text-xs center w-7 h-5 bg-red-600 text-white rounded-full rounded-tr-none mx-2">
//                 %{product.discount}
//               </span>
//             </>
//           )}
//         </div>
//         <div>
//           {product.discount !== 0 && (
//             <p className="text-green-500 ">

//               {product.price -
//                 (product.price * product.discount) / 100}
//             </p>
//           )}
//         </div>
//       </div>
//       <div className="flex  w-full  sm:flex flex-col">
//         <div className="w-full h-[90px] center">
//           <p> Colors :</p>
//           {product.colors.map((item, index) => (
//             <div
//               key={index}
//               className="border-gray-900  py-3"
//               onChange={() => handleSelectColor(item)}
//             >
//               <input
//                 type="radio"
//                 name="color"
//                 className="chooseColor dark:border dark:border-white checked:w-7 checked:h-7 duration-300 m-1 cursor-pointer"
//                 style={{ backgroundColor: Object.values(item) }}
//                 value={item}
//               />
//             </div>
//           ))}
//           <div className="center">
//             <BsStarFill className="mx-1 text-yellow-400" />
//             {product.rate}
//             <button type="button" className="text-red-500  ml-4 text-xl ">
//               {favoriteList.findIndex(
//                 (favItem) => favItem._id === product._id
//               ) > -1 || null ? (
//                 <BsHeartFill
//                   onClick={() =>
//                     dispatch(addToFavoriteList(product))
//                   }
//                 />
//               ) : (
//                 <BsHeart
//                   onClick={() =>
//                     dispatch(addToFavoriteList(product))
//                   }
//                 />
//               )}
//             </button>
//             <button>
//               <BsShare className="mx-3" />
//             </button>
//           </div>
//         </div>
//         <div className=" center  sm:mx-auto w-full  ">
//           <button
//             className="btn-primary w-full md:w-[70%] sm:w-full"
//             disabled={product.selectedColor === undefined}
//             onClick={() => handleAddToCart()}
//           >
//             {chooseColor ? "Add To Cart" : "Select Color"}
//           </button>
//         </div>
//       </div>
//     </aside>
//     <article className="center flex-col justify-start w-[60%] md:w-full text-gray-800 dark:text-gray-200">
//       <h3 className="my-3 text-center text-3xl">
//         {product.name}
//       </h3>

//       <div className="w-full">
//         <div className="center flex-col divide-y divide-gray-800 dark:divide-gray-200">
//           {product.attributes.map((item, index) => (
//             <div
//               className="w-[90%] flex justify-between font-mono"
//               key={index}
//             >
//               <p className="">{Object.keys(item)} :</p>
//               <p className="">{Object.values(item)}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <article className="w-[90%] mx-auto my-5 text-justify text-gray-800 dark:text-gray-200">
//         <h2 className="text-center text-3xl my-6">Introduction</h2>
//         <p>{product.introduction}</p>
//       </article>
//     </article>
//   </section>
// ) }
