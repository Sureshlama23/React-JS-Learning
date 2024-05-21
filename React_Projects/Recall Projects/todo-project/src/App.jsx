import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItmes from "./components/TodoItems";
import ErrorMessage from "./components/Message";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [TodoItems, setTodoItems] = useState([]);

  const addNewItem = (todoItem, dueDate) => {
    if (todoItem && dueDate) {
      setTodoItems((currentValue) => [
        ...currentValue,
        { name: todoItem, dueDate: dueDate },
      ]);
    }
  };
  const deleteItem = (todoName) => {
    const newTodoItemList = TodoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItemList);
  };

  return (
    <TodoItemsContext.Provider value={{ TodoItems, addNewItem, deleteItem }}>
      <Container>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <ErrorMessage></ErrorMessage>
        <TodoItmes></TodoItmes>
      </Container>
    </TodoItemsContext.Provider>
  );
}

export default App;
