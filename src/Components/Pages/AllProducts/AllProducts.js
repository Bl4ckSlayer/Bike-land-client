import React, { useEffect, useState } from "react";
import FindData from "../../../Hooks/FindData";
import Product from "../Product/Product";

const AllProducts = () => {
  const [findData, setFindData] = FindData();
  let fromHome = 1;
  console.log(findData);
  return (
    <div className="container">
      <h1 className="text-primary text-center mt-5"> My Services</h1>
      <div className="row">
        {findData.slice(0, 6).map((items) => (
          <Product key={items._id} items={items} fromHome={fromHome}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
