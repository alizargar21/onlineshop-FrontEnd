import { useEffect } from "react";
import { useState } from "react";

import Select from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import ProductsSlice, { sortBy } from "../../features/ProductsSlice/ProductsSlice";

const SearchSort = ({ originalValue, setRenderValue, renderValue }) => {
 const {products} = useSelector(state => state.products)
  const [helpState, setHelpState] = useState([]);
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState("");
  const [brands, setBrands] = useState([]);
  const [sort, setSort] = useState("");
  const getValueForSelectOption = () => {
    const brands = originalValue.map((item) => item.brand);
    const uniqueBrands = [...new Set(brands)];
    setBrands(uniqueBrands);
  };
  useEffect(() => {
    getValueForSelectOption();
    
    
  }, [renderValue]);
  const sortPriceOptions = [
    { value: "", label: "Sort By Price" },
    { value: "expensive", label: "Expensive" },
    { value: "inexpensive", label: "Inexpensive" },
  ];

  const selectBrandHandler = (e) => {
    if (e.target.value === "") {
      setHelpState(originalValue);
      setRenderValue(originalValue);
    } else {
      const [caseName] = brands.filter((item) => item === e.target.value);
      const render = originalValue.filter((item) => item.brand === caseName);
      setHelpState(render);
      setRenderValue(render);
    }
  };
  const handleSearch = (e) => {
    let searchValue = e.target.value;
    console.log(e.target.value);
    setSearchValue(searchValue);
    if (searchValue !== "") {
      const filteredProducts = renderValue.filter((p) => {
        return Object.values(p.brand + p.name)
          .join("")
          .toLowerCase()
          .includes(searchValue);
      });
      setRenderValue(filteredProducts);
    } else {
      setRenderValue(originalValue);
    }
    console.log(renderValue);
  };
  const sortHandler = (selectedOption)=> {
    console.log(selectedOption);
    setSort(selectedOption)
    console.log(products);
    dispatch(sortBy(sort))
    setRenderValue(products)
  }
  // const sortHandler = (e) => {
  //   const value = e.target.value
  //   if(value === ""){
  //     if(helpState.length){

  //       setRenderValue(helpState)
  //     }
  //     setRenderValue(originalValue)
  //   }
  //   if(value === "expensive"){
  //     const sortedValue = helpState.length ? [...helpState].sort((a,b)=> b.price - a.price) : [...originalValue].sort((a,b)=> b.price - a.price)
      
  //     setRenderValue(sortedValue)
  //   }
  //   if(value === "inexpensive"){
  //     const sortedValue = [...originalValue].sort((a,b)=> a.price - b.price)
  //     setRenderValue(sortedValue)
  //   }
    

  // };

  return (
    <section className=" 2xl:sticky 2xl:top-[90px] md:static text-[12px] md:w-[90%] md:h-[150px] w-[230px] h-[450px] md:mx-auto  m-5 rounded-lg p-5 bg-gray-300 dark:bg-black/30">
      <div className="w-[80%] mx-auto ">
        <input
          onChange={(e) => handleSearch(e)}
          type="text"
          value={searchValue}
          name=""
          placeholder="Search"
          className="w-full py-1 px-3 rounded-lg bg-white/30  dark:bg-white/10 dark:text-gray-200 ring-2 ring-gray-400 outline-none"
        />
      </div>
      <div className="w-[80%] mx-auto">
        <Select options={brands} onChange={selectBrandHandler} />
      </div>
      <div className="mx-auto w-[80%]">
        <Select value={sort} options={sortPriceOptions} onChange={sortHandler} />
      </div>
    </section>
  );
};

export default SearchSort;
