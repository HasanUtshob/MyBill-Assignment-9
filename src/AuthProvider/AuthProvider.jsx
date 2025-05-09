import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase_init";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [balance, setbalance] = useState(10000);
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [login, setlogin] = useState(true);

  const Provider = new GoogleAuthProvider();

  const GoogleLogin = () => {
    return signInWithPopup(auth, Provider);
  };

  const Signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("SignOut SuccessFully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const UpdateUser = (UpdateData) => {
    return updateProfile(auth.currentUser, UpdateData);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setuser(CurrentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    balance,
    setbalance,
    user,
    setuser,
    loading,
    setLoading,
    Login,
    Signup,
    logOut,
    login,
    setlogin,
    GoogleLogin,
    UpdateUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
