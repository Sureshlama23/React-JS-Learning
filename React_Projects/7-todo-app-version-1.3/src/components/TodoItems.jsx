import { useContext } from "react";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const ToddoItems = () => {
  const { todoItems, onDeleteItem } = useContext(TodoItemsContext);

  return (
    <div className={style.itemContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteItem={onDeleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default ToddoItems;
