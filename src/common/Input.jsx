import styles from "./input.module.css";
const Input = ({ label, formik, name, type = "text" }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={
          formik.errors[name] ?  styles.inputError : styles.input 
        }
        type={type}
        placeholder={name}
        id={name}
        name={name}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className={styles.error}>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
