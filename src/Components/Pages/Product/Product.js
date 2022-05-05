import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AllFunctions from "../../../Hooks/AllFunctions";
import FindData from "../../../Hooks/FindData";
import "./Product.css";

const Product = (props) => {
  const { items, fromHome } = props;
  const { _id, name, description, price, img, supplierName, quantity } = items;
  const [DecreaseByOne, IncreaseByOne] = AllFunctions();
  const navigate = useNavigate();

  const [bike, setBike] = useState([]);
  const [show, setShow] = useState(false);
  const [findData, setFindData] = FindData();

  useEffect(() => {
    fetch(`http://localhost:5000/inventory`)
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, []);

  const newPath = (id) => {
    navigate(`/inventory/${id}`);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // updating an user quanttit
  const confirm = (id) => {
    const url = `http://localhost:5000/inventory/${id}`;
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
    <div className="p-5">
      <h2 className=" pe-5 text-danger text-center ">{name}</h2>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={img} className="img-fluid" alt="bike images" />
          </div>

          <div className="contentBx">
            <span className="text-start text-danger ">{description}</span>

            <h6>Price : {price}</h6>
            <div className="align-content-center align-items-center justify-content-between d-flex">
              <h6>Brand :{supplierName}</h6>

              <h6>Quantity: {quantity}</h6>
            </div>

            {fromHome !== undefined ? (
              <>
                <button onClick={() => newPath(_id)} className="">
                  Update
                </button>
              </>
            ) : (
              <>
                <button onClick={() => newPath(_id)} className=" my-3">
                  Update
                </button>
                <button onClick={() => Delete(_id)} className="">
                  Delete Item
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className=" text-center "></div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yowza</Modal.Title>
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
{
  /* <div className="container">
  <div className="card">
    <h5 className="my-3 text-start">
      <span className="item-span">{name}</span>
    </h5>
    <div className="imgBx">
      <img src={img} className="img-fluid" alt="car images" />
    </div>
    <div className="contentBx">
      <p className="text-start fs-5">{description}</p>
      <h5 className="text-start">
        Price: <span className="item-span">{price}</span>
      </h5>
      <h5 className="text-start">
        Supplier Name: <span className="item-span">{supplierName}</span>
      </h5>
      <h5 className="text-start">
        Quantity: <span className="item-span">{quantity}</span>
      </h5>
      {fromHome !== undefined ? (
        <>
          <button onClick={() => newPath(_id)} className="button-33">
            Update
          </button>
        </>
      ) : (
        <>
          <button onClick={() => newPath(_id)} className="button-33 my-3">
            Update
          </button>
          <button onClick={() => Delete(_id)} className="button-33">
            Delete Item
          </button>
        </>
      )}
    </div>
  </div>
</div>; */
}
