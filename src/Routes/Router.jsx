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
      ]
    },
  ]);