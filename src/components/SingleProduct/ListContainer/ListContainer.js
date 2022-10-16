import { useEffect } from "react";
import Spinner from "../../../common/Spinner/Spinner";
import Products from "../../Products/Products";
import SearchSort from "../../Search and sort/Search&Sort";
import Loading from "../Loading/Loading";

const ListContainer = ({
  originalValue,
  renderValue,
  setRenderValue,
  searchValue,
  setSearchValue,
  loading
}) => {
  useEffect(() => {
    console.log("render as List Container");
  }, []);
  return (
    <div className="w-full py-5 h-auto flex justify-between md:flex-col-reverse ">
      <div className="md:w-[90%]   mx-auto w-[65%] grid gap-2 grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
        {loading && <Spinner />}
        {renderValue && <Products data={renderValue}></Products>}
      </div>
      {renderValue && (
        <SearchSort
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          renderValue={renderValue}
          originalValue={originalValue}
          setRenderValue={setRenderValue}
        />
      )}
    </div>
  );
};

export default ListContainer;
