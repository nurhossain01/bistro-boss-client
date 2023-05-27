import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFoods from "../Pages/Order/OrderFoods/OrderFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


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
  }
])