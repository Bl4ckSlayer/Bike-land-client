import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Signup.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../Social Login/SocialLogin";
import useToken from "../../../Hooks/UseToken";
import Loading from "../Loading/Loading";

const Signup = () => {
  let errorMsg;
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [errorMessage, setErrorMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const checkAgree = () => {
    if (agree === false) setAgree(true);
    else setAgree(false);
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  const eventSubmit = async (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    setErrorMessage("");
    console.log(name, email, password, confirmPassword);
    if (agree) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    } else {
      setErrorMessage("Please Agree Terms & Conditions");
    }
  };

  if (error) {
    errorMsg = <p>{error?.message}</p>;
  }
  return (
    <div className="d-lg-flex container align-items-center">
      <div className=" ms-3">
        <img
          className=" img-fluid w-75"
          src="https://cdn.templates.unlayer.com/assets/1636450033923-19197947.png"
          alt="signup"
        />
      </div>
      <div className="col-lg-6 col-md-12 order-1 col-sm-12 order-sm-1 order-md-1 order-lg-2">
        <div className="form-container">
          <div>
            <h2 className="form-title mb-5 text-center">Sign Up</h2>
            <SocialLogin></SocialLogin>
            <form onSubmit={eventSubmit}>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input ref={nameRef} type="name" name="name" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input ref={emailRef} type="email" name="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input ref={passwordRef} type="password" name="password" />
              </div>
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  ref={confirmPasswordRef}
                  type="password"
                  name="confirm-password"
                  required
                />
              </div>
              <input
                onClick={checkAgree}
                className="mb-3"
                type="checkbox"
                name="terms"
                id=""
              />
              <label
                className={`ps-2 ${agree ? "text-success" : "text-danger"}`}
                htmlFor="terms"
              >
                Accepct terms and conditions
              </label>
              <button
                className="button-51"
                type="submit"
                required
                value="Signup"
              >
                SignUp
              </button>
            </form>
            <h6 className="text-danger my-3"> {errorMsg}</h6>
            <h6 className="text-danger my-3"> {errorMessage}</h6>
            <ToastContainer />
            <p className="my-3 fs-5">
              Already have an account?
              <Link className="form-link" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
