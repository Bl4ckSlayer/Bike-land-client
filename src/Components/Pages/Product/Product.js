import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import FindData from "../../../Hooks/FindData";
import "./Product.css";

const Product = (props) => {
  const { items, fromHome } = props;
  const { _id, name, description, price, img, supplierName, quantity } = items;
  const navigate = useNavigate();

  const [bike, setBike] = useState([]);
  const [show, setShow] = useState(false);
  const [findData, setFindData] = FindData();

  useEffect(() => {
    fetch(`https://server-assignment-11-bl4ckslayer.vercel.app/inventory`)
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, []);

  const newPath = (id) => {
    navigate(`/inventory/${id}`);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // updating an user quantity
  const confirm = (id) => {
    const url = `https://server-assignment-11-bl4ckslayer.vercel.app/inventory/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = findData.filter((item) => item._id !== id);
          setFindData(remaining);
        }
      });
  };

  const Delete = (id) => {
    console.log(id);
    handleShow();
  };
  return (
    <div className="container ">
      <div className="profile-card-4 text-center">
        <img src={img} className="img-fluid  " alt="" />
        <div className="profile-content">
          <div className=" d-lg-flex">
            {fromHome !== undefined ? (
              <>
                <button
                  onClick={() => newPath(_id)}
                  className=" button-28 btn2 text-center "
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => newPath(_id)}
                  className=" button-28 btn2 w-50 m-2  text-center "
                >
                  Update
                </button>
                <button
                  onClick={() => Delete(_id)}
                  className="button-28 btn1 w-50 m-2 text-center "
                >
                  Delete Item
                </button>
              </>
            )}
          </div>
          <div className="profile-overview">
            <h4>{name}</h4>
          </div>
          <div className="profile-description">{description}</div>
          <div className="row">
            <div className="col-xs-4">
              <div className="profile-overview">
                <p>Supplier</p>
                <h4>{supplierName}</h4>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="profile-overview">
                <p>Price</p>
                <h4>{price}</h4>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="profile-overview">
                <p>Quantity</p>
                <h4>{quantity}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure You Want To Delete {name}?</Modal.Body>
        <Modal.Footer>
          <button
            className="button-33"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="button-33"
            variant="primary"
            onClick={() => confirm(_id)}
          >
            Proceed
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Product;
