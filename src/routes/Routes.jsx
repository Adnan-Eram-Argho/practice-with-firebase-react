import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboadLauouts from "../layouts/DashboadLauouts";
import PrivateRoutes from "./PrivateRoutes";
import AllDashboardProduct from "../components/Dashboard/AllDashboardProduct";
import BaseDashboard from "../components/Dashboard/BaseDashboard";
import ErrorElement from "../components/Shared/ErrorElement";
import AddProducts from "../components/Dashboard/AddProducts";
import EditProducts from "../components/Dashboard/EditProducts";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorElement/>,
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
      </PrivateRoutes>,
      errorElement:<ErrorElement/>,
      children:[
        {
          index:true,
          element:<BaseDashboard/>
        },
        {
          path:"all-products",
          element:<AllDashboardProduct/>
        },
        {
          path:"add-products",
          element:<AddProducts/>
        },
        {
          path:"edit-products/:id",
          element:<EditProducts/>
        },
      ]
    }
  ]);

export default router;