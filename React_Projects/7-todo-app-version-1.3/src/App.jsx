import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessge";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <Container>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <ErrorMessage></ErrorMessage>
        <TodoItems></TodoItems>
      </Container>
    </TodoItemsContextProvider>
  );
}

export default App;
