import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./nav.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navber = () => {
  // console.log(balance);
  const { balance, setbalance, user, logOut, login, setlogin } =
    use(AuthContext);

  const handleLogout = () => {
    logOut();
    setlogin(false);
  };
  // console.log(user);
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/paybill">PayBill</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar justify-between bg-base-100 shadow-lg rounded-2xl">
        <div className="flex">
          <a className="btn btn-ghost text-xl">MyBill</a>
        </div>
        <div>
          <ul className="flex gap-4 Navmenu ">{link}</ul>
        </div>
        <div className="flex-none">
          {user && user.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user && user.photoURL}
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <div>
                  <p className="font-bold text-center">
                    $<span>{balance}</span>{" "}
                  </p>
                </div>
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navber;
