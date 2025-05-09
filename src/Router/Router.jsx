import { createBrowserRouter } from "react-router";
import Home from "../Home";
import HomeMainLayOut from "../Component/HomeMainLayOut";
import Paybill from "../Component/Paybill";
import MyProfile from "../Component/MyProfile";
import SingleBills from "../Component/SingleBills";
import BillsData from "../../public/Data.json";
import TransactionHistory from "../Component/TransactionHistory";
import Login from "../Component/Login";
import Registration from "../Component/Registration";
import PrivateRoute from "../AuthProvider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        index: true,
        Component: HomeMainLayOut,
      },
      {
        path: "/paybill",
        element: (
          <PrivateRoute>
            <Paybill></Paybill>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <h1>Loading.....</h1>,
        loader: () => fetch("/Data.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/singlebills/:id",
        loader: () => BillsData,
        element: (
          <PrivateRoute>
            <SingleBills></SingleBills>
          </PrivateRoute>
        ),
      },
      {
        path: "/transactionhistory/:id",
        loader: () => BillsData,
        element: (
          <PrivateRoute>
            <TransactionHistory></TransactionHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/reg",
        Component: Registration,
      },
    ],
  },
]);

export default router;
