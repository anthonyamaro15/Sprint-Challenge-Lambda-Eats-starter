import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Content from "./content";
import Home from "./Home";

const HomePage = () => {
  //   const [data, setData] = useState([]);
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/pizza">
        <Content />
      </Route>
    </div>
  );
};

export default HomePage;
