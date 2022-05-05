import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import { Button, Form } from "react-bootstrap";
import SocialLogin from "../Social Login/SocialLogin";
import Loading from "../Loading/Loading";

// import useToken from "../../../Hooks/UseToken";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  let from = location.state?.from?.pathname || "/";
  let errorElement = <></>;

  const eventSetEmail = (event) => {
    setEmail(event.target.value);
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // const [token] = useToken(user);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const EventSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email !== "") {
      await sendPasswordResetEmail(email);
      toast("Email Sent");
    } else {
      toast.error("please enter your email address", {
        theme: "colored",
      });
    }
  };
  if (error) {
    errorElement = (
      <div className="my-3">
        <p className="text-danger"> {error?.message}</p>
      </div>
    );
  }
  return (
    <div className="row container">
      <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-sm-2 order-md-2 order-lg-1">
        {/* <img className="wave img-fluid" src={carPng} alt="svg car image" /> */}
      </div>
      <div className="col-lg-6 col-md-12 order-1 col-sm-12 order-sm-1 order-md-1 order-lg-2">
        <div className="form-container">
          <div>
            <h2 className="form-title mb-5 text-center">Login</h2>
            <SocialLogin></SocialLogin>
            <Form onSubmit={EventSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button
                className="button-51"
                variant=" w-50 d-block mx-auto  fw-bolder"
                type="submit"
              >
                Login
              </Button>
            </Form>
            {errorElement}
            <p className="mt-3">
              New to Bike Land?
              <Link
                to="/signup"
                className="btn btn-link text-primary pe-auto text-decoration-none"
              >
                Please Register
              </Link>
            </p>
            <p>
              Forget Password?
              <button
                className="btn btn-link text-primary pe-auto text-decoration-none"
                onClick={resetPassword}
              >
                Reset Password
              </button>
            </p>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
