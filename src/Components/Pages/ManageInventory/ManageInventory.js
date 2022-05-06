import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FindData from "../../../Hooks/FindData";

import Product from "../Product/Product";

const ManageInventory = () => {
  const [findData, setFindData] = FindData();

  const navigate = useNavigate();

  const gotoMyItem = () => {
    navigate("/addInventory");
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4 mt-4">All Products</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
        {findData.map((items) => (
          <Product key={items._id} items={items}></Product>
        ))}
      </div>
      <div className="text-center">
        <button onClick={() => gotoMyItem()} className="button-51 my-5  w-50 ">
          Add New Item
        </button>
      </div>
    </div>
  );
};

export default ManageInventory;
