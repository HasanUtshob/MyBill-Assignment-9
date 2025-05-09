import React from "react";

const forgetPassword = () => {
  //   const handleReset = () => {};
  return (
    <div className="w-10/12  mx-auto flex items-center justify-center">
      <div className="card bg-base-100 w-full mt-[200px]  max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="font-bold text-2xl text-center">Forget Password</h1>
        <div className="card-body">
          <form className="fieldset">
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
