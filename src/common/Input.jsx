import styles from "./input.module.css";
const Input = ({ label, formik, name, type = "text" }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="my-2 text-sm">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        className={
          formik.errors[name] ?  "w-full py-1 my-1 px-5 rounded-md bg-gray-100 text-sm focus:px-3 text-gray-800 focus:bg-white focus:text-gray-800  outline-blue-500  ring-[1px]" : "outline-blue-500  ring-[1px] text-md  px-3 py-1 rounded-md  text-gray-800 text-[14px]" 
        }
        type={type}
        placeholder={name}
        id={name}
        name={name}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="my-0 mx-auto text-sm text-red-500 text-center  font-semibold">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
