import React from "react";
import { getRole } from "../../utils/getRole";

export default function AuthorizationRoute({ children }) {
  //get the token
  const role = getRole();

  if (role === "admin") {
    return children;
  } else if (role === "user") {
    return <Navigate to="/" />;
  }
}
