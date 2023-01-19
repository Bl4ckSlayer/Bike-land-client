import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

import axiosPrivate from "../../../Api/AxiosPrivate";
import { signOut } from "firebase/auth";

import Product from "../Product/Product";

const MyProducts = () => {
  const [myBikes, setMyBikes] = useState([]);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getMtItems = async () => {
      const email = user?.email;
      const url = `https://bikeland-server.vercel.app/mybikes?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setMyBikes(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getMtItems();
  }, [user, myBikes, navigate]);

  const gotoAddInventory = () => {
    navigate("/addInventory");
  };
  return (
    <div className="container">
      {myBikes.length === 0 && (
        <>
          <p className="text-center  text-danger fw-bolder fs-2  w-50 mx-auto">
            You haven't added any Products
          </p>
          <div className="text-center">
            <button onClick={() => gotoAddInventory()} className="button-51 ">
              Add Products
            </button>
          </div>

          {/* <img className='img-fluid d-flex mx-auto' src={emptyCartPic} width='1000px' alt="" /> */}
        </>
      )}
      <div
        className="button-85 w-50 text-center d-block mx-auto m-4"
        style={{ cursor: "default" }}
      >
        <h1
          className=" fw-bolder  mx-auto d-block text-center"
          style={{ fontSize: "1.1rem" }}
        >
          My Products
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
        {/* {myBikes.length === 0 && <Loading></Loading>} */}
        {myBikes.map((items) => (
          <Product key={items._id} items={items}></Product>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
