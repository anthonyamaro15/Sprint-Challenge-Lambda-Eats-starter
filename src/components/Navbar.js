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
        <NavLink to="/Help" activeClassName="active">
          Help
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
