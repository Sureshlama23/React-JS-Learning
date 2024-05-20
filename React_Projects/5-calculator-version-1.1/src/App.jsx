import style from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const onClick = (buttonName) => {
    console.log(buttonName);
    if (buttonName === "c") {
      setDisplayValue("");
    } else if (buttonName === "=") {
      const result = eval(displayValue);
      setDisplayValue(result);
    } else {
      const newDisplayValue = displayValue + buttonName;
      setDisplayValue(newDisplayValue);
    }
  };
  return (
    <div>
      <h1> Calculator Project</h1>
      <div className={style.calculator}>
        <Display toDisplayValue={displayValue}></Display>
        <ButtonsContainer handleOnClick={onClick}></ButtonsContainer>
      </div>
    </div>
  );
}

export default App;
