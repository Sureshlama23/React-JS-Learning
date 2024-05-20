import { MdOutlineDelete } from "react-icons/md";

const TodoItem = ({ todoName, todoDate, onDeleteItem }) => {
  return (
    <div className="container">
      <div className="row cus-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger cus-btn"
            onClick={() => onDeleteItem(todoName)}
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
