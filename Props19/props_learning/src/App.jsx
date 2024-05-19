import ErrorMessage from "./components/errorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodInput from "./components/FoodInput";
import Container from "./components/Container";
import "./App.css";

function App() {
  let foodItems = ["dhal", "curd", "green veg", "roti", "corn"];
  let handlingOnChange = (event) => {
    return console.log(`${event.target.value} is change value`);
  };
  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <FoodInput handlingOnChange={handlingOnChange}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni cumque
          temporibus, ducimus dolorum possimus laudantium voluptatibus non
          aspernatur. Temporibus ad aliquam mollitia exercitationem, quaerat nam
          obcaecati odit veniam deleniti placeat!
        </p>
      </Container> */}
    </>
  );
}

export default App;
