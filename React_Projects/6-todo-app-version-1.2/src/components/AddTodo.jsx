import { useState } from "react";
import css from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState("");
  const handleText = (event) => {
    settodoName(event.target.value);
  };

  
  // ------------------------
  const [dateValue, setDateValue] = useState("");
  const handleDate = (event) => {
    setDateValue(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dateValue);
    settodoName("");
    setDateValue("");
  };
  return (
    <div className="container">
      <div className="row cus-row">
        <div className="col-6">
          <input
            className={css.inputWidth}
            type="text"
            placeholder={"Enter Todo Task"}
            onChange={(event) => handleText(event)}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            className={css.inputWidth}
            type="date"
            onChange={(event) => handleDate(event)}
            value={dateValue}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success cus-btn"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
