import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFoods from "../Pages/Order/OrderFoods/OrderFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCarts from "../Pages/Dashboard/MyCarts/MyCarts";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddItem from "../Pages/AddItem/AddItem";
import AdminRoute from "../PrivateRoute/AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/menu',
        element: <Menu/>
      },
      {
        path:'/order/:category',
        element: <OrderFoods/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'myCart',
        element: <MyCarts></MyCarts>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      }
    ]
  }
])