function AddTodo() {
  return (
    <div className="container">
      <div className="row cus-row">
        <div className="col-6">
          <input type="text" value={"Enter Todo App"} />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success cus-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
