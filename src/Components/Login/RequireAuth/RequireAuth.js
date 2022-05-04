import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import VerifyEmail from "../VerifyEmail/VerifyEmail";

// import UserEmailVerification from "../../Pages/UserEmailVerification/UserEmailVerification";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0].providerId === "password" && !user.emailVerified) {
    return <VerifyEmail></VerifyEmail>;
  }
  return children;
};

export default RequireAuth;
