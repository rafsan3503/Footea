import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState("");
  //   set loading
  const [loading, setLoading] = useState(true);

  //   get user from firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //   create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   update user
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };

  // log out
  const logOut = () => {
    localStorage.removeItem("access-token");
    return signOut(auth);
  };

  //   google log in
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // twitter log in
  const twitterLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  const githubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    googleLogIn,
    twitterLogIn,
    githubLogIn,
    updateUser,
    userLogIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
