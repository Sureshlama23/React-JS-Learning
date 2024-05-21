import { useContext } from "react";
import styles from "./ErrorMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const ErrorMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.length === 0 && (
        <h1 className={styles.errorMessage}>Enjoy your day</h1>
      )}
    </>
  );
};

export default ErrorMessage;
