import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1></h1>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/pizza" activeClassName="active">
          Order
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
