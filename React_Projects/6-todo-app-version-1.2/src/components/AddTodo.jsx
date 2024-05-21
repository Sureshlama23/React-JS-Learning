import { useState, useRef } from "react";
import css from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoItemElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoItemElement.current.value;
    const dateValue = dueDateElement.current.value;
    todoItemElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dateValue);
  };
  return (
    <div className="container">
      <form className="row cus-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={css.inputWidth}
            type="text"
            placeholder={"Enter Todo Task"}
            ref={todoItemElement}
          />
        </div>
        <div className="col-4">
          <input className={css.inputWidth} type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success cus-btn">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
