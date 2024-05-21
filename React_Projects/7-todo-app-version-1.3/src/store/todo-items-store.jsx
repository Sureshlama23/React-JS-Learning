import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// -------------------------------------------------------///
const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.textValue, dueDate: action.payload.dateValue },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.toDeleteItem
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (textValue, dateValue) => {
    if (textValue && dateValue) {
      const newItemAction = {
        type: "NEW_ITEM",
        payload: { textValue, dateValue },
      };
      dispatchTodoItems(newItemAction);
    }
  };

  const deleteItem = (toDeleteItem) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { toDeleteItem },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
