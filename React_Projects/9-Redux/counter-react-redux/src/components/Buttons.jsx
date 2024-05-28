import { useDispatch } from "react-redux";
import styles from "./Buttons.module.css";
import { useRef } from "react";

const Button = () => {
  const dispatch = useDispatch();
  const numberElement = useRef();

  // Increament number
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  // Decrement number
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  // Addition number
  const handleAddition = () => {
    const number = numberElement.current.value;
    dispatch({
      type: "ADDITION",
      payload: { number: number },
    });
    numberElement.current.value = "";
  };

  // Subtract number
  const handleSubstract = () => {
    const number = numberElement.current.value;
    dispatch({
      type: "SUBSTRACT",
      payload: { number: number },
    });
    numberElement.current.value = "";
  };
  // PrivacyMessage number
  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY" });
    console.log("privacy");
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
          className={` ${styles.cusBtn} btn btn-success btn-lg px-4`}
          onClick={handleSubstract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Button;
