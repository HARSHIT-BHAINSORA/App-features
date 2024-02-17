import { useDispatch } from "react-redux";
import "./Card.css";
import { addItem } from "./Redux/Action";

const Card = ({ id, Product, price, city }) => {
  const dispatch = useDispatch();
  const addHandler = () => {
    // dispatch({
    //   type: "ADD_ITEMS",
    //   payload: {
    //     id: id,
    //     Product: Product,
    //     price: price,
    //     city: city,
    //   },
    // });

    dispatch(addItem({ id: id, Product: Product, price: price, city: city }));
  };

  return (
    <div className="card">
      <h2>{`Product : ${Product}`}</h2>
      <p>{`price : ${price}`}</p>
      <p>{`city : ${city}`}</p>
      <button onClick={addHandler}>Add ITEM</button>
    </div>
  );
};

export default Card;
