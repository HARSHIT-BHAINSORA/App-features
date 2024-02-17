import React from "react";
import { useSelector } from "react-redux";
import "./Body.css";
import CheckCard from "./CheckCard";

function Orders() {
  const items = useSelector((state) => state.cart.item);
  console.log(items);
  return (
    <div className="body-card">
      {items.map((it) => (
        <CheckCard key={it.id} {...it} />
      ))}
    </div>
  );
}

export default Orders;
