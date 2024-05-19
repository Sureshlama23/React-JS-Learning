import style from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  let buttonsName = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style.buttonsContainer}>
      {buttonsName.map((buttonName) => (
        <button className={style.button}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
