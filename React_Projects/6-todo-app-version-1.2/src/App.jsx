import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessge";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItem] = useState([]);
  const handleNewItem = (textValue, dateValue) => {
    if (textValue && dateValue) {
      let newTodoItem = [...todoItems, { name: textValue, dueDate: dateValue }];
      setTodoItem(newTodoItem);
    }
  };

  const handleDeleteItem = (toDeleteItem) => {
    const newTodoItem = todoItems.filter((item) => item.name !== toDeleteItem);
    setTodoItem(newTodoItem);
  };
  return (
    <Container>
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <ErrorMessage checkItems={todoItems}></ErrorMessage>
      <TodoItems
        todoItems={todoItems}
        onDeleteItem={handleDeleteItem}
      ></TodoItems>
    </Container>
  );
}

export default App;
