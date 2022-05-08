import React from "react";
import FindData from "../../../Hooks/FindData";
import Loading from "../../Login/Loading/Loading";
import AllProducts from "../AllProducts/AllProducts";
import BikeLinks from "../AllProducts/BikeLinks/BikeLinks";
import Banner from "../Banner/Banner";

const Home = () => {
  const [findData, setFindData] = FindData();
  return (
    <div>
      {findData.length === 0 && <Loading></Loading>}
      <Banner></Banner>
      <BikeLinks></BikeLinks>
      <AllProducts></AllProducts>
    </div>
  );
};

export default Home;
