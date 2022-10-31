const SearchBar = ({searchHandler , value}) => {
  return (
    <div className="">
      <label htmlFor="search">Search :</label>
      <input
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchBar;
