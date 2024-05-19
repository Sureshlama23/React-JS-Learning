import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let foodItems = [];
  let foodItems = ["Dhal", "Green Vegtables", "Salad", "Milk", "Corn"];
  return (
    //  use React Fragement like this
    // <React.Fragment>
    //   <h1>HealthY Food </h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">Roti</li>
    //     <li class="list-group-item">Milk</li>
    //     <li class="list-group-item">Honey</li>
    //     <li class="list-group-item">Salad</li>
    //     <li class="list-group-item">Green Vegetables</li>
    //   </ul>
    // </React.Fragment>

    //  or --------->>>>>>
    // <>
    //   <h1>HealthY Food </h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">Roti</li>
    //     <li class="list-group-item">Milk</li>
    //     <li class="list-group-item">Honey</li>
    //     <li class="list-group-item">Salad</li>
    //     <li class="list-group-item">Green Vegetables</li>
    //   </ul>
    // </>

    // Using Map()------->>>>>>>>>
    // <>
    //   <h1>HealthY Food </h1>
    //   <ul className="list-group">
    //     {foodItems.map((item) => (
    //       <li className="list-group-item">{item}</li>
    //     ))}
    //   </ul>
    // </>

    // Using Map()-------with id=>>>>>>>>>
    // <>
    //   <h1>HealthY Food </h1>
    //   <ul className="list-group">
    //     {foodItems.map((item) => (
    //       <li key={item} className="list-group-item">
    //         {item}
    //       </li>
    //     ))}
    //   </ul>
    // </>

    // if else condition
    <>
      <h1>HealthY Food </h1>

      {/* {foodItems.length === 0 ? <h3>Food is empty</h3> : null} */}
      {/* or */}
      {foodItems.length ===0 && <h3>Food is empty</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
