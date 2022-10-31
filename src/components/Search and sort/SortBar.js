import { useEffect } from "react";
import { useTransition } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { BsSortUp } from "react-icons/bs";
import Select from "react-select";
import SelectBrand from "../../common/SelectComponent/SelectBrand";
import {
  getAsyncProductsByCategories,
  search,
  sortBy,
} from "../../features/ProductsSlice/ProductsSlice";
import SearchBar from "../../common/SearchBar";
const SortBar = ({categoryValue , error}) => {
  // const { products, loading } = useSelector((state) => state.products);
  const location = useLocation();
  const [brandValue, setBrandValue] = useState();
  const [sortValue, setSortValue] = useState("");

  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  // const getDataForBrands = () => {
  //   const brands = products.map((item) => item.brand);
  //   const uniqueBrands = [...new Set(brands)];
  //   const brandOptions = uniqueBrands.forEach((item) => ({
  //     value: item,
  //     label: item,
  //   }));
  //   console.log(brandOptions);
  //   console.log(uniqueBrands);
  //   setBrandValue(brandOptions);
  // };
  useEffect(() => {
    setSearchValue("")
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
    if (value === "") {
      dispatch(getAsyncProductsByCategories(categoryValue));
    } else {
      dispatch(search(value));
    }
  };
  const selectBrandHandler = () => {};
  const sortHandler = (e) => {
    const value = e.target.value;
    setSortValue(value);
    dispatch(sortBy(value));
  };
  return (
    <section className="w-[90%] flex justify-start mx-auto flex-col">
      <div className="flex items-center">
      <SearchBar searchHandler={searchHandler} value={searchValue} />
        <p className="mx-5 font-Oswald font-bold text-rose-500">{error}</p>
      </div>
      <ul className=" center">
        <BsSortUp className="text-[20px] mx-3" />
        Sort By
        {sortPriceOptions.map((item, index) => (
          <li key={index} className="inline my-[10px]">
            <button
              className="dark:text-gray-200 mx-2  "
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

{
  /* <div>
<div className="w-[80%] mx-auto ">
  <input
    onChange={(e) => searchHandler(e)}
    type="text"
    value={searchValue}
    name=""
    placeholder="Search"
    className="w-full py-1 px-3 rounded-lg bg-white/30  dark:bg-white/10 dark:text-gray-200 ring-2 ring-gray-400 outline-none"
  />
</div>
<div className="w-[80%] mx-auto">
  {!loading && (
    <Select options={brandValue} onChange={selectBrandHandler} value={brandValue} />
  )}
</div>
<div className="mx-auto w-[80%]">
  <Select
    placeholder={"Sort By ..."}
      value={sortValue}
    options={sortPriceOptions}
    onChange={sortHandler}
  />
</div>
</div> */
}
