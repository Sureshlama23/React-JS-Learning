import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const ToddoItems = ({ todoItems }) => {
  return (
    <div className={style.itemContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default ToddoItems;
