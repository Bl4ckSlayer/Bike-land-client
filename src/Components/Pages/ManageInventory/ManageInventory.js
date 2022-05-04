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
    <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {findData.map((items) => (
          <Product key={items._id} items={items}></Product>
        ))}
      </div>
      <button onClick={() => gotoMyItem()} className="button-2 my-5 button-33">
        Add New Item
      </button>
    </div>
  );
};

export default ManageInventory;
