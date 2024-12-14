import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../../utils/getToken";

const AuthRoute = ({ children }) => {
  //get the token
  const token = getToken();

  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthRoute;
