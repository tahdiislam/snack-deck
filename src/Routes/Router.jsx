import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        {
            path: "/", element: <Home/>
        },
        {
            path: "/services", element: <AllServices/>
        }
    ]}
])