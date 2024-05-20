import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [acitveItem, setActiveItem] = useState([]);

  let buyButtonClick = (event, item) => {
    let newActiveItem = [...acitveItem, item];
    setActiveItem(newActiveItem);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          singleFoodItem={item}
          bought={acitveItem.includes(item)}   
          handlingOnClick={(event) => buyButtonClick(event, item)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
