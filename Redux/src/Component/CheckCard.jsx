import { useDispatch } from "react-redux";
import { deleteItem } from "./Redux/Action";
import "./Card.css";

const CheckCard = ({ id, Product, price, city }) => {
  const dispatch = useDispatch();
  const DeleteHandler = () => {
    // dispatch({
    //   type: "DELETE_ITEMS",
    //   payload: {
    //     id: id,
    //   },
    // });

    dispatch(deleteItem({ id: id }));
  };
  return (
    <div className="card">
      <h2>{`Product : ${Product}`}</h2>
      <p>{`price : ${price}`}</p>
      <p>{`City : ${city}`}</p>
      <button onClick={DeleteHandler}>Delete ITEM</button>
    </div>
  );
};

export default CheckCard;
