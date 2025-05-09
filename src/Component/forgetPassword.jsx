import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const forgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    forgetPassword(email)
      .then(() => {
        alert("Password Sent Your Email SuccessFully");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(errorCode);
      });
  };
  return (
    <div className="w-10/12  mx-auto flex items-center justify-center">
      <div className="card bg-base-100 w-full mt-[200px]  max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="font-bold text-2xl text-center">Forget Password</h1>
        <div className="card-body">
          <form onSubmit={handleReset} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Your Email"
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Reset Your Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default forgetPassword;
