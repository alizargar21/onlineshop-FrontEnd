const Select = ({items , onChange}) => {
    return (      
          <select
    onChange={onChange}
    className="w-full py-1 px-3 rounded-lg mt-8 md:mt-2 bg-gray-100 placeholder-gray-800 dark:bg-gray-600 dark:text-gray-200"
  >
    <option value="">Sort By Brand</option>
    {items !== null &&
      items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      )) }
  </select> 
   );
}
 
export default Select;