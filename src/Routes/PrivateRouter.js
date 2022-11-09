import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvier/UserContext";
import loader from "../Assets/loader.gif";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // loader
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <img src={loader} alt="" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  // navigate to login
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
