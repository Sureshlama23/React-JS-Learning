import style from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div>
      <h1> Calculator Project</h1>
      <div className={style.calculator}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </div>
  );
}

export default App;
