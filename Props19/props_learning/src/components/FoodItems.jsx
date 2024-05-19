import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          singleFoodItem={item}
          handlingOnClick={() => console.log(`${item} being Purchased`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
