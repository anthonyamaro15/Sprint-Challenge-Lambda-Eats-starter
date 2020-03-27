import React from "react";
import SingleCard from "./SingleCard";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="img"></div>
      <NavLink to="/pizza">
        <SingleCard />
      </NavLink>
    </div>
  );
};

export default Home;

//  <nav>
//    <NavLink to="/pizza">Order Now!</NavLink>
//  </nav>;
