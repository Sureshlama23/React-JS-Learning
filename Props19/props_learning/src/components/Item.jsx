import css from "./Item.module.css";

function Item({ singleFoodItem, bought, handlingOnClick }) {
  return (
    <li className="list-group">
      <span
        className={` ${css.itemText} list-group-item ${bought && "active"}`}
      >
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
