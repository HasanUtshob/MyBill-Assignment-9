import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase_init";
import { Bounce, toast, ToastContainer } from "react-toastify";
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
        toast.success("LogOut SuccessFul", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
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
    forgetPassword,
  };
  <ToastContainer></ToastContainer>;
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
