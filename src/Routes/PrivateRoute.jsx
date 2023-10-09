/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (!user?.email) {
    return <Navigate
    to="/login"
    state={{ from: location.pathname }}
  />
  }

  // Redirect the user to the login page with the previous location as state
  return children
};

export default PrivateRoute;
