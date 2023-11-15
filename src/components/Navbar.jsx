import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {
    
const cartLength = useSelector((state)=>state.cart.length)
// console.log(cartLength);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">E-LOGO</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items:{cartLength}</span>
      </div>
    </div>
  );
};

export default Navbar;
