import { useState } from "react";
import style from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ handleOnClick }) => {
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
        <button
          key={buttonName}
          className={style.button}
          onClick={() => handleOnClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
