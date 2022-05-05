import React from "react";
import AllProducts from "../AllProducts/AllProducts";
import BikeLinks from "../AllProducts/BikeLinks/BikeLinks";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BikeLinks></BikeLinks>
      <AllProducts></AllProducts>
    </div>
  );
};

export default Home;
