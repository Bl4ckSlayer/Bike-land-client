import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AllFunctions from "../../../Hooks/AllFunctions";

import "./SingleInventory.css";

const SingleInventory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bike, setBike] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, [bike]);

  const [DecreaseByOne, IncreaseByOne] = AllFunctions();
  const { name, description, price, img, supplierName, quantity } = bike;

  const EventSubmit = (event) => {
    event.preventDefault();
    const number = parseInt(event.target.number.value);
    console.log(typeof number, typeof bike.quantity);
    IncreaseByOne(bike, number);
    event.target.reset();
  };

  const goToManageInventory = () => {
    navigate("/manageinventory");
  };
  return (
    <div className="p-5 container">
      <div className="row align-content-center align-items-center justify-content-center">
        <Row className="g-4 col-lg-6 col-md-12 col-sm-12 order-2 ">
          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>Price : {price}</Card.Title>
                <Card.Title>Quantity : {quantity}</Card.Title>
                <Card.Title>Brand : {supplierName}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {quantity <= 0 ? (
                  <button
                    disabled
                    className="button-51 text-danger mx-auto w-50"
                  >
                    Stockout
                  </button>
                ) : (
                  <button
                    onClick={() => DecreaseByOne(bike)}
                    className="button-33 mx-auto w-50"
                  >
                    Delivered
                  </button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="card h-50  col-lg-6 col-md-12 col-sm-12  ">
          <div className="">
            <h2 className="form-title mb-5 text-center">Restock Inventory</h2>

            <form onSubmit={EventSubmit}>
              <div className="input-group">
                <label htmlFor="number">Restock </label>
                <input type="number" name="number" required />
              </div>
              <div className="text-center">
                <button className="button-33 my-5 w-50 " type="submit">
                  ReStock
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button
          onClick={() => goToManageInventory()}
          className="button-51 mt-5"
        >
          Manage Inventory
        </Button>
      </div>
    </div>
  );
};

export default SingleInventory;
