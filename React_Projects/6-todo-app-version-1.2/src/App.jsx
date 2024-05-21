import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessge";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItem] = useState([]);
  const addNewItem = (textValue, dateValue) => {
    if (textValue && dateValue) {
      setTodoItem((currentValue) => [
        ...currentValue,
        { name: textValue, dueDate: dateValue },
      ]);
    }
  };

  const deleteItem = (toDeleteItem) => {
    const newTodoItem = todoItems.filter((item) => item.name !== toDeleteItem);
    setTodoItem(newTodoItem);
  };
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <Container>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <ErrorMessage></ErrorMessage>
        <TodoItems></TodoItems>
      </Container>
    </TodoItemsContext.Provider>
  );
}

export default App;
