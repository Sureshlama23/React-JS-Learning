import ErrorMessage from "./components/errorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodInput from "./components/FoodInput";
import Container from "./components/Container";
import "./App.css";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItem] = useState([]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newFoodItemList = [...foodItems, newFoodItem];
      setFoodItem(newFoodItemList);
    }
  };
  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <FoodInput handlleOnKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
