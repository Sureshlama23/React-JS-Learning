import styles from "./FoodInput.module.css";

const FoodInput = ({ handlingOnChange}) => {
  return (
    <input
      type="text"
      placeholder="Search Food Here."
      className={styles.foodInput}
      onChange={handlingOnChange}
    />
  );
};

export default FoodInput;
