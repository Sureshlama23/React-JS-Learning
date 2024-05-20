import style from "./Display.module.css";

const Display = ({ toDisplayValue }) => {
  return <input type="text" className={style.display} value={toDisplayValue} readOnly/>;
};

export default Display;
