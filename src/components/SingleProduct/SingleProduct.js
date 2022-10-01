
import { useParams } from "react-router-dom";
import data from "../../data/db.json";
import { useEffect, useRef, useState } from "react";
import LayoutTwo from "../../container/Layout/LayoutTwo";
import { useCart, useCartActions } from "../../Provider/CartProvider";
import { BsHeartFill, BsStarFill , BsHeart} from "react-icons/bs";
import { toast } from "react-toastify";

const { products } = data;
const SingleProduct = () => {
const [chooseColor , setChooseColor] = useState(false)
  const params = useParams();

  const dispatch = useCartActions();
  const cart = useCart();
  const allProducts = [
    ...products.laptop,
    ...products.mobile,
    ...products.cases,
  ];
  const selectedColors = ""

  const selectedProduct = allProducts.find(
    (item) => item.id.toString() === params.id
  );
 
  useEffect(() => {

    console.log(cart);
  }, []);
  const handleAddToCart = () => {
    toast.success("Added To Cart" )
    dispatch({ type: "ADD_TO_CART", payload: selectedProduct });
  };
  const handleSelectColor = (value) => {
    setChooseColor(true)
    console.log(value)
    
    selectedProduct.selectedColor = value;
    console.log(selectedProduct.selectedColor)
  };
  return (
    <LayoutTwo>
      <section className="w-[90%] h-auto mx-auto flex justify-between  my-12  md:flex-col">
        <aside className="flex flex-col w-[40%] text-gray-800 dark:text-gray-200  bg-white dark:bg-slate-600 items-center h-[80%]  rounded-md my-2 p-4 md:w-[90%] md:h-[70%] sm:min-h-[500px] mx-auto">
          <h2 className="text-xl mt-2 sm:text-lg ">{selectedProduct.name}</h2>
          <div className="w-full h-full center">
            <img
              src={selectedProduct.image}
              className="w-[70%] mx-auto h-[90%] md:h-[80%] md:w-[80%] sm:w-[100%] sm:h-full hover:scale-105 duration-300"
            />
          </div>
          <div
            className={
              selectedProduct.discount !== 0
                ? "font-bold text-3xl xl:text-3xl flex justify-evenly w-full items-center"
                : "font-bold text-3xl xl:text-3xl w-full center"
            }
          >
            <div className="center">
              {selectedProduct.discount === 0 ? (
                <p>$ {selectedProduct.price}</p>
              ) : (
                <>
                <p className="line-through opacity-80 ">
                  $ {selectedProduct.price}
                </p>
                <span className="text-xs center w-5 h-5 bg-red-600 text-white rounded-full rounded-tr-none mx-2">%{selectedProduct.discount}</span>
                </>
              )}
            </div>
            <div>
              {selectedProduct.discount !== 0 && (
                <p className="text-green-500 ">
                  $ {selectedProduct.price -
                    (selectedProduct.price * selectedProduct.discount) / 100}
                </p>
              )}
            </div>
          </div>
          <div className="flex  w-full  sm:flex flex-col">
            <div className="w-full h-[90px] center">
              <p> Colors :</p>
              {selectedProduct.colors.map((item, index) => (
                <div
                  key={index}
                  className="border-gray-900  py-3"
                  onChange={() => handleSelectColor(item)}
                >
                  <input
                    type="radio"
                    name="color"
                    className="chooseColor  checked:w-7 checked:h-7 duration-300 m-1"
                    style={{ backgroundColor: item }}
                    value={item}
                  />
                </div>
              ))}
              <div className="center">
                <BsStarFill className="mx-1 text-yellow-400" />
                {selectedProduct.rate}
                <button type="">
                  <BsHeart className="text-red-500  ml-4 text-xl " />
                </button>
              </div>
            </div>
            <div className=" center  sm:mx-auto w-full  ">
              <button
                className="btn-primary w-full md:w-[70%] sm:w-full"
                disabled={selectedProduct.selectedColor === undefined}
                onClick={() => handleAddToCart(data)}
              >
                {chooseColor ? "Add To Cart" : "Select Color"}
              </button>
            </div>
          </div>
        </aside>
        <article className="center flex-col justify-start w-[60%] md:w-full text-gray-800 dark:text-gray-200">
          <h3 className="my-3 text-center text-3xl">{selectedProduct.name}</h3>

          <div className="w-full">
            <div className="center flex-col divide-y divide-gray-800 dark:divide-gray-200">
              {selectedProduct.attributes.map((item, index) => (
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
    </LayoutTwo>
  );
};

export default SingleProduct;
