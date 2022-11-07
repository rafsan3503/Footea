import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";

const auth = getAuth();
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState("mahmud");
  const [loading, setLoading] = useState(true);
  const authInfo = { user, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
