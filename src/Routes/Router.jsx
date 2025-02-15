import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import MainMenu from "../Pages/Menu/MainMenu/MainMenu";
import OrderFood from "../Pages/FoodOrder/OrderFood/OrderFood";
import Login from "../Pages/Security/Login/Login";
import Register from "../Pages/Security/Register/Register";
import Secret from "../Pages/Shared/Secret";
import PrivateRoute from "./PrivateRote";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <MainMenu></MainMenu>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
       
        // {
        //   path: "/order",
        //   element: <OrderFood></OrderFood>
        // },
        {
          path: "/order/:category",
          element: <OrderFood></OrderFood>
        },
        {
          path: "/secret",
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
      ]
    },
    {
      path:"dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "cart",
          element:<Cart></Cart>
        },

        // admin routes:
        {
          path: "users",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "addItems",
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: "updateItem/:id",
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: "manageItems",
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
      ]
    }
  ]);