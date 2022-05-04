import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import FindData from "../../../Hooks/FindData";
import axiosPrivate from '../../../Api/AxiosPrivate';
import { signOut } from "firebase/auth";
const MyProducts = () => {
  
  const [myItems, setMyItems] = useState([]);
  const [data, setData] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {

    const getMtItems = async () => {
        const email = user?.email;
        const url = `http://localhost:5000/myItems?email=${email}`;
        try {
            const { data } = await axiosPrivate.get(url);
            setMyItems(data);
        }
        catch (error) {
            console.log(error.message);
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth);
                navigate('/login');
            }
        }
    }
    getMtItems();

}, [user, myItems])
  return <div>hi</div>;
};

export default MyProducts;
