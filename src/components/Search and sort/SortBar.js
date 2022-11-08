import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { BsSortUp } from "react-icons/bs";

import {
  getAsyncProductsByCategories,
  search,
  sortBy,
} from "../../features/ProductsSlice/ProductsSlice";
import SearchBar from "../../common/SearchBar";
const SortBar = ({ categoryValue, error }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const location = useLocation()
  useEffect(() => {
    setSearchValue("");
  }, [categoryValue]);
  const sortPriceOptions = [
    { value: "all", label: "All" },
    { value: "expensive", label: "Expensive" },
    { value: "inexpensive", label: "Inexpensive" },
    { value: "popularity", label: "Popularity" },
  ];

  const searchHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value === "" && location.pathname === "/products") {
      dispatch(getAsyncProductsByCategories(categoryValue));
    } else {
      dispatch(search(value));
    }
  };
  const sortHandler = (e) => {
    const value = e.target.value;

    dispatch(sortBy(value));
  };
  return (
    <section className="w-[90%] flex justify-between mx-auto flex-row-reverse md:flex-col md:justify-center md:items-center">
      <div className="flex items-center flex-row-reverse md:w-full justify-start md:flex-col w-[40%]">
        <SearchBar searchHandler={searchHandler} value={searchValue} />
        <p className="mx-5 font-Oswald font-bold text-rose-500">{error}</p>
      </div>
      <ul className=" center text-gray-700 dark:text-gray-200 md:text-sm sm:flex-wrap">
        <BsSortUp className="text-[20px] mx-3" />
        Sort By
        {sortPriceOptions.map((item, index) => (
          <li key={index} className="inline my-[10px]">
            <button
              className=" mx-2  focus:text-rose-600 focus-within:scale-110 duration-200"
              type="button"
              value={item.value}
              onClick={(e) => sortHandler(e)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SortBar;
