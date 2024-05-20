import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  let todoItems = [
    {
      name: "Buy a Computer",
      dueDate: "2/5/2024",
    },
    {
      name: "Learn React JS",
      dueDate: "While not master",
    },
    {
      name: "Buy a Car",
      dueDate: "3/5/2024",
    },
    {
      name: "Like my video",
      dueDate: "Right Now",
    },
  ];
  return (
    <center className="center-container">
      <AppName></AppName>
      <br />
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
