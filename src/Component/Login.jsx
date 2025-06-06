import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Login = () => {
  const { setuser, Login, GoogleLogin, toastifySuccess } =
    useContext(AuthContext);
  const [error, seterror] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const errorMessages = {
    "auth/user-not-found": "এই ইমেইল দিয়ে কোনো একাউন্ট নেই।",
    "auth/wrong-password": "পাসওয়ার্ড ভুল হয়েছে।",
    "auth/invalid-email": "ইমেইল ঠিকভাবে লিখুন।",
    "auth/missing-password": "পাসওয়ার্ড দিন।",
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    Login(email, password)
      .then((res) => {
        setuser(res.user);
        alert("Login Successful");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const friendlyMassage =
          errorMessages[errorCode] ?? "Something Went Wrong. Please Try again";
        seterror(friendlyMassage);
      });
  };

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((res) => {
        setuser(res.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="w-10/12 mx-auto">
      <section className="bg-base-300">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-[442px]">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-block btn-info"
            >
              <FcGoogle size={20} />
              Login With Google
            </button>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to="/forgetPassword"
                    className="text-sm font-medium text-white hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                {error && <p className="text-red-500 text-xs"> {error} </p>}
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-base-100 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/reg"
                    className="font-medium text-white hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
