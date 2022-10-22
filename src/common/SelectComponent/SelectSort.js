const SelectSort = ({ onChange, options }) => {
  return (
    <select
      onChange={onChange}
      className="w-full py-1 px-3 md:mt-2 rounded-lg mt-8 bg-gray-100 placeholder-gray-800 dark:bg-gray-600 dark:text-gray-200"
    >
      {options && options.map((item , index) => (
        <option key={index} value={item.value}>{item.label}</option>
      ))}
    </select>
  );
};

export default SelectSort;
