import styles from "./FoodInput.module.css";

const FoodInput = ({ handlleOnKeyDown}) => {
  return (
    <input
      type="text"
      placeholder="Search Food Here."
      className={styles.foodInput}
      onKeyDown={handlleOnKeyDown}
    />
  );
};

export default FoodInput;
