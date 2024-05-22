import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboadLauouts from "../layouts/DashboadLauouts";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:"about",
          element:<About/>,
        },
        {
          path:'product',
          element:<Product/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        }
      ]
    },
    {
      path:"/dashboard",
    
      element:<PrivateRoutes>
        <DashboadLauouts/>
      </PrivateRoutes>
    }
  ]);

export default router;