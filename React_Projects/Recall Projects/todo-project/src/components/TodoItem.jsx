import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <>
      <div className="container">
        <div className="row cus-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="sumbit"
              className="btn btn-danger cus-btn"
              onClick={() => deleteItem(todoName)}
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
