import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./VerifyEmail.css";
import verify from "../../../Images/Verify.jpg";
const VerifyEmail = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="container d-lg-flex justify-content-center align-items-center">
      <div>
        <div>
          <p className="fs-3 ">
            Hi <span className="ver-email p-2">{user?.displayName}.</span>
            We just need to verify your email address before you can access .
            Verify your email
            <span className="ver-email p-2">{user?.email}</span>
            <br />
            Click the Button to verify <br /> Thanks! – Bike Land
          </p>
        </div>
        <div className="text-center">
          <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
            <button className=" button-51">Click</button>
          </a>
        </div>
      </div>
      <div>
        <img className="img-fluid w-75" src={verify} alt="" />
      </div>
    </div>
  );
};

export default VerifyEmail;
