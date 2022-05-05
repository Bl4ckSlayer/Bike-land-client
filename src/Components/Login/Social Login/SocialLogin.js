import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
// import useToken from '../../../Hooks/UseToken';
import googleLogo from "../../../Images/social/google.png";
import githubLogo from "../../../Images/social/github.png";

const SocialLogin = () => {
  let errorMsg;
  let errorMsg1;

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error) {
    errorMsg = <p className="text-danger">{error?.message}</p>;
    errorMsg1 = "";
  } else {
    errorMsg1 = <p className="text-danger">{error1?.message}</p>;
    errorMsg = "";
  }

  if (user || user1) {
    // navigate("/home");
    navigate(from, { replace: true });
  }
  // if (error || error1) {

  //       toast(`${error?.message} ${error1?.message}`)

  // }

  return (
    <div>
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="button-51 d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={googleLogo} alt="" />
          <span className="px-2">Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="button-51 d-block mx-auto"
        >
          <img style={{ width: "30px" }} src={githubLogo} alt="" />
          <span className="px-2">Sign In</span>
        </button>
        {errorMsg}
        {errorMsg1}
      </div>

      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-danger w-50"></div>
        <p className="mt-2 px-2 fs-3">Or</p>
        <div style={{ height: "1px" }} className="bg-danger w-50"></div>
      </div>
    </div>
  );
};

export default SocialLogin;
