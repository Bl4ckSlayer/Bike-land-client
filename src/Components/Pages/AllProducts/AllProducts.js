import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FindData from "../../../Hooks/FindData";
import Artical from "../Artical/Artical";
import MyCard from "../MyCard/MyCard";
import Product from "../Product/Product";

const AllProducts = () => {
  const navigate = useNavigate();
  const [findData, setFindData] = FindData();
  let fromHome = 1;
  const goToManageInventory = () => {
    navigate("/manageinventory");
  };
  return (
    <div className="container">
      <h1 className="text-primary text-center mt-5"> Products</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  mb-5">
        {findData.slice(0, 6).map((items) => (
          <Product key={items._id} items={items} fromHome={fromHome}></Product>
        ))}
      </div>
      <div className="text-center mb-5">
        <Button
          onClick={() => goToManageInventory()}
          className="button-51 mt-5"
        >
          Manage Inventory
        </Button>
      </div>
      <MyCard></MyCard>
      <Artical></Artical>
    </div>
  );
};

export default AllProducts;
