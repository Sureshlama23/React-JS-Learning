import { useDispatch } from "react-redux";
import styles from "./Buttons.module.css";
import { useRef } from "react";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Button = () => {
  const dispatch = useDispatch();
  const numberElement = useRef();

  // Increament number
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  // Decrement number
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  // Addition number
  const handleAddition = () => {
    dispatch(counterActions.add(Number(numberElement.current.value)));
    numberElement.current.value = "";
  };

  // Subtract number
  const handleSubstract = () => {
    dispatch(counterActions.subtract(Number(numberElement.current.value)));
    numberElement.current.value = "";
  };
  // PrivacyMessage number
  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <div>
        <button
          type="button"
          className={` ${styles.cusBtn} btn btn-primary btn-lg px-4 gap-3`}
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className={` ${styles.cusBtn} btn btn-success btn-lg px-4`}
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className={` ${styles.cusBtn} btn btn-warning btn-lg px-4`}
          onClick={handlePrivacy}
        >
          Privacy
        </button>
      </div>

      <div>
        <input
          type="input"
          className={styles.cusBtn}
          placeholder="Enter Add Number..."
          ref={numberElement}
        />
        <button
          type="button"
          className={` ${styles.cusBtn} btn btn-success btn-lg px-4`}
          onClick={handleAddition}
        >
          Add
        </button>
        <button
          type="button"
          className={` ${styles.cusBtn} btn btn-danger btn-lg px-4`}
          onClick={handleSubstract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Button;
