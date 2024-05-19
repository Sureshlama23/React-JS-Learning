import css from "./Item.module.css";

function Item({ singleFoodItem, handlingOnClick }) {
  
  return (
    <li className="list-group">
      <span className="list-group-item">
        {singleFoodItem}
        <button
          className={`${css.button} btn btn-info`}
          onClick={handlingOnClick}
        >
          Buy
        </button>
      </span>
    </li>
  );
}

export default Item;
