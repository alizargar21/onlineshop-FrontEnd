import { useEffect } from "react";
import Spinner from "../../../common/Spinner/Spinner";
import Products from "../../Products/Products";


const ListContainer = ({ renderValue, loading }) => {
  useEffect(() => {
    console.log("render as List Container");
  }, []);
  return (
    <div className="w-full py-5 h-auto flex justify-between md:flex-col-reverse ">
      <div className="md:w-[90%]   mx-auto w-[65%] grid gap-2 grid-cols-4 xl:grid-cols-4 xl:w-[90%] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {loading && <Spinner />}
        {renderValue && <Products data={renderValue}></Products>}
      </div>
   
    </div>
  );
};

export default ListContainer;
