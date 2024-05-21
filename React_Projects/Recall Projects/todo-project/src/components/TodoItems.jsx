import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItmes = () => {
  const { TodoItems } = useContext(TodoItemsContext);
  return (
    <div className={styles.itemContainer}>
      {TodoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItmes;
