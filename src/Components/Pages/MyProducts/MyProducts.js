import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

import axiosPrivate from "../../../Api/AxiosPrivate";
import { signOut } from "firebase/auth";

import Product from "../Product/Product";

const MyProducts = () => {
  const [myBikes, setMyBikes] = useState([]);
  const [data, setData] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getMtItems = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/mybikes?email=${email}`;
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
  }, [user, myBikes]);
  console.log(myBikes);
  return (
    <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {myBikes.map((items) => (
        <Product key={items._id} items={items}></Product>
      ))}
    </div>
  );
};

export default MyProducts;
