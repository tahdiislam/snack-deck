import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const UserContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user with email and password
  const createUserEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // create user with provider
  const providerSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // log in user with email and password
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update user profile
  const userProfileUpdate = (details) => {
    return updateProfile(auth.currentUser, details);
  };

  // log out user
  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("access-token");
    return signOut(auth);
  };

  // load current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    createUserEmailPass,
    loading,
    setLoading,
    logInUser,
    logOut,
    providerSignIn,
    userProfileUpdate,
  };
  return (
    <div>
      <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    </div>
  );
};

export default AuthProvider;
