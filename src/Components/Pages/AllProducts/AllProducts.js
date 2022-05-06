import React, { useEffect, useState } from "react";
import FindData from "../../../Hooks/FindData";
import MyCard from "../MyCard/MyCard";
import Product from "../Product/Product";

const AllProducts = () => {
  const [findData, setFindData] = FindData();
  let fromHome = 1;
  console.log(findData);
  return (
    <div className="container">
      <h1 className="text-primary text-center mt-5"> Products</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  mb-5">
        {findData.slice(0, 6).map((items) => (
          <Product key={items._id} items={items} fromHome={fromHome}></Product>
        ))}
      </div>
      <MyCard></MyCard>
    </div>
  );
};

export default AllProducts;
