import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
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
    <div className="container">
      <div className="container">
        <ul>
          <li className="booking-card" style={{ height: "45rem" }}>
            <img src={img} className="img-fluid " alt="" />
            <div className="book-container m-1">
              <div className="content  ">
                {fromHome !== undefined ? (
                  <>
                    <button
                      onClick={() => newPath(_id)}
                      className=" btn  text-center "
                    >
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => newPath(_id)}
                      className=" btn  text-center "
                    >
                      Update
                    </button>
                    <button
                      onClick={() => Delete(_id)}
                      className="btn text-center "
                    >
                      Delete Item
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="informations-container">
              <h2 className="title">{name}</h2>

              <p className="price">Price :{price}</p>
              <div className="more-information">
                <div className="info-and-date-container">
                  <div className="box info">
                    <p>Quantity : {quantity}</p>
                  </div>
                  <div className="box date">
                    <p>Brand : {supplierName}</p>
                  </div>
                </div>
                <p className="disclaimer ">{description}</p>
              </div>
            </div>
          </li>
        </ul>
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
{
  //    <div className="container">
  //   <div className="card">
  //     <h5 className="my-3 text-start">
  //       <span className="item-span">{name}</span>
  //     </h5>
  //     <div className="imgBx">
  //       <img src={img} className="img-fluid" alt="car images" />
  //     </div>
  //     <div className="contentBx">
  //       <p className="text-start fs-5">{description}</p>
  //       <h5 className="text-start">
  //         Price: <span className="item-span">{price}</span>
  //       </h5>
  //       <h5 className="text-start">
  //         Supplier Name: <span className="item-span">{supplierName}</span>
  //       </h5>
  //       <h5 className="text-start">
  //         Quantity: <span className="item-span">{quantity}</span>
  //       </h5>
  //       {fromHome !== undefined ? (
  //         <>
  //           <button onClick={() => newPath(_id)} className="button-33">
  //             Update
  //           </button>
  //         </>
  //       ) : (
  //         <>
  //           <button onClick={() => newPath(_id)} className="button-33 my-3">
  //             Update
  //           </button>
  //           <button onClick={() => Delete(_id)} className="button-33">
  //             Delete Item
  //           </button>
  //         </>
  //       )}
  //     </div>
  //   </div>
  // </div>;
}
