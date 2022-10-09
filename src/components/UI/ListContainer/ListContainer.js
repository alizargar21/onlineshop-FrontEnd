import Products from "../../Products/Products";
import SearchSort from "../../Search and sort/Search&Sort";

const ListContainer = ({ originalValue , renderValue , setRenderValue }) => {
  return (
    <div className="w-full py-5 h-auto flex justify-between md:flex-col-reverse ">
       
      <div className="md:w-[90%]   mx-auto w-[65%] grid gap-2 grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1"> 
      { originalValue ? <Products data={renderValue} /> : <p className="text-gray-800 dark:text-gray-200">Loading...</p>}
        </div>
        
      <SearchSort originalValue={originalValue} setRenderValue={setRenderValue} />
    </div>
  );
};

export default ListContainer;
