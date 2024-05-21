import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const ErrorMessage = () => {
  const { TodoItems } = useContext(TodoItemsContext);
  return TodoItems.length === 0 && <h3>Enjoy Your Day</h3>;
};

export default ErrorMessage;
