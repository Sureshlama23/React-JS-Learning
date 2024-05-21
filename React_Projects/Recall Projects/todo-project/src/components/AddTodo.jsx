import { BiMessageAdd } from "react-icons/bi";
import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo = () => {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoItemElement = useRef();
  const duedateElement = useRef();

  const handleNewTodoTask = () => {
    const todoItem = todoItemElement.current.value;
    const dueDate = duedateElement.current.value;

    todoItemElement.current.value = "";
    duedateElement.current.value = "";
    addNewItem(todoItem, dueDate);
  };
  return (
    <div className="container">
      <div className="row cus-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Test Here"
            className={styles.inputWidth}
            ref={todoItemElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles.inputWidth}
            ref={duedateElement}
          />
        </div>
        <div className="col-2">
          <button
            type="sumbit"
            className="btn btn-primary cus-btn"
            onClick={handleNewTodoTask}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
