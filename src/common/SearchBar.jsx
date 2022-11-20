import { BsSearch } from "react-icons/bs";
const SearchBar = ({ searchHandler, value }) => {
  return (
    <div className="text-gray-800  italic center md:w-[80%] dark:text-gray-300">
      <label htmlFor="search">
        <BsSearch className="text-xl mx-2 dark:text-gray-200" />
      </label>
      <input
        className="w-[80%] placeholder:italic px-3 py-[3px] rounded-lg md:w-full ring-1 outline-none focus:w-full duration-300 dark:bg-gray-600 dark:placeholder:text-gray-300 "
        type="text"
        name="search"
        placeholder="type..."
        id="search"
        value={value}
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchBar;
