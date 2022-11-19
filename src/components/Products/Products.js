import { BsStarFill, BsHeartFill, BsHeart, BsShare } from "react-icons/bs";
import { useWindowDimensions } from "../../hooks/useWinowDimensions";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoriteList } from "../../features/FavoriteSlice/FavoriteSlice";
const Products = ({ data }) => {
  const {favoriteList} = useSelector(state => state.favorite)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const screen = useWindowDimensions();
  useEffect(()=>{
  
  },[])
  if (screen.width >= 479 && data !== null) {
    return (
      <>
        {data.map((item) => (
          <article key={item._id}>
            <div className="bg-white/40 dark:bg-black/30 dark:text-gray-200 flex h-full flex-col items-center rounded-md ">
              <div className="w-full h-12 "></div>
              <div className="flex items-center w-[80%] justify-between">
                <div className="flex w-24 h-10 items-start relative">
                  <Link to={`/products/${item._id}`}>
                    {item.colors.map((c, index) => (
                      <span
                        key={index}
                        style={{ backgroundColor: Object.values(c) }}
                        className="w-3 h-3 flex my-1 border-[0.2px] dark:border-white border-black rounded-full"
                      ></span>
                    ))}
                  </Link>
                  
                </div>
                <div className="center">
                  <button type="button">
                    <BsShare className="mx-2" />
                  </button>
                  <button className="text-rose-500 text-[22px]">
                    {favoriteList.findIndex(
                      (favItem) => favItem._id === item._id
                    ) > -1 || null ? (
                      <BsHeartFill onClick={() => dispatch(addToFavoriteList(item))} />
                    ) : (
                      <BsHeart onClick={() => dispatch(addToFavoriteList(item))} />
                    )}
                  </button>
                </div>
              </div>
              <Link
                className="flex justify-center relative items-center "
                to={`/products/${item._id}`}
              > 
                <div className="absolute left-1 md:-left-2 dark:text-gray-400 text-gray-700 -rotate-90 text-xs md:text-xl italic">
                    {item.brand}
                  </div>
                <img
                  src={item.image}
                  className="w-[70%] pt-4 hover:scale-105 transition-transform duration-300 "
                ></img>
              </Link>
              <div className="center flex-col">
                <h4 className="text-xl md:text-2xl text-center ">{item.name}</h4>
                <div className="center font-Roboto">
                  <p
                    className={
                      item.discount !== 0
                        ? "line-through text-red-700 center text-xl "
                        : "text-3xl mt-3 center"
                    }
                  >
                    {`$${item.price}`}
                  </p>
                  {item.discount !== 0 && (
                    <span className="text-xs center w-6 h-5 bg-red-600 text-white rounded-full rounded-tr-none mx-2">
                      %{item.discount}
                    </span>
                  )}
                </div>
                {item.discount ? (
                  <div className="mx-auto center font-Roboto">
                    <p className="text-2xl text-green-600 dark:text-green-500 ">
                      {`$ ${item.price - (item.price * item.discount) / 100}`}
                    </p>
                  </div>
                ) : null}
              </div>
              <div className="flex w-full h-[15%] items-center justify-around pb-4">
                <div className="flex justify-between items-center  ">
                  <BsStarFill className="text-yellow-400 mr-2" />
                  {item.rate}
                </div>

                <button
                  className="btn-primary"
                  onClick={() => navigate(`/products/${item._id}`)}
                >
                  More Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </>
    );
  } else if ( data !== null){
    return (
      <>
        {data.map((item) => (
          <article
            key={item._id}
            className="w-full min-h-[190px] bg-gray-100 dark:bg-black/25 text-gray-800 dark:text-gray-200 flex flex-row-reverse justify-between items-center px-2 mx-auto rounded-lg relative"
          >
            <Link
              className=" flex-col w-[70%] center my-1"
              to={`/products/${item._id}`}
            >
              <div>
                {item.discount !== 0 && (
                  <div className="bg-red-500 text-white w-10 h-10 rounded-full rounded-tr-none center absolute top-0 right-0">
                    <span>%{item.discount}</span>
                  </div>
                )}

                <img
                  src={item.image}
                  alt=""
                  className="max-w-[95%] hover:scale-105 duration-300"
                />
                <div className="center">
                  {item.colors.map((c, index) => (
                    <span
                      key={index}
                      style={{ backgroundColor: Object.values(c) }}
                      className="w-3 h-3 flex m-1 border-[0.2px] border-black dark:border-white/50 rounded-full "
                    ></span>
                  ))}
                </div>
              </div>
            </Link>
            <div className="w-full flex flex-col justify-around items-center h-full">
              <h3 className="text-xl font-sans font-semibold ml-1">
                {item.name}
              </h3>
              <div className="absolute left-2 top-1 text-gray-700 italic dark:text-gray-200  text-xs ">
                    {item.brand}
                  </div>
              <div className="flex  items-center w-[80%] justify-between">
                <div>
                  <div>
                    {item.discount === 0 ? (
                      <p className="text-2xl">${item.price}</p>
                    ) : (
                      <p className="line-through opacity-50 ">${item.price}</p>
                    )}
                  </div>
                  <div>
                    {item.discount !== 0 && (
                      <p className="text-green-600 dark:text-green-400 text-2xl">
                        ${item.price - (item.price * item.discount) / 100}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-end h-full w-[40%]">
                  <button className=" mx-2 text-rose-500 text-2xl">
                    {favoriteList.findIndex(
                      (favItem) => favItem._id === item._id
                    ) > -1 || null ? (
                      <BsHeartFill onClick={() => dispatch(addToFavoriteList(item))} />
                    ) : (
                      <BsHeart onClick={() => dispatch(addToFavoriteList(item))} />
                    )}
                  </button>

                  <div className="center  ">
                    <BsStarFill className="text-yellow-400 mr-2 text-2xl" />
                    {item.rate}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </>
    );
  }
};

export default Products;
