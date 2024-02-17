import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const item_cnt = useSelector((state) => state.cart.item?.length);
  return (
    <div className="Header">
      <h1>Hello</h1>
      <div className="list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <Link className="cart" to="/orders">
            <li>{`Cart (${item_cnt})`}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
