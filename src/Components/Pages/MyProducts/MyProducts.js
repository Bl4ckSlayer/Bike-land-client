import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

import axiosPrivate from "../../../Api/AxiosPrivate";
import { signOut } from "firebase/auth";

import Product from "../Product/Product";
import Loading from "../../Login/Loading/Loading";

const MyProducts = () => {
  const [myBikes, setMyBikes] = useState([]);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getMtItems = async () => {
      const email = user?.email;
      const url = `https://limitless-castle-10450.herokuapp.com/mybikes?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setMyBikes(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getMtItems();
  }, [user, myBikes, navigate]);
  console.log(myBikes);
  return (
    <div>
      <div className="button-85 w-50 text-center d-block mx-auto m-4 ">
        <h1
          className=" fw-bolder  mx-auto d-block text-center  "
          style={{ fontSize: "1.2rem" }}
        >
          My Products
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-center justify-content-center">
        {myBikes.length === 0 && <Loading></Loading>}
        {myBikes.map((items) => (
          <Product key={items._id} items={items}></Product>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
