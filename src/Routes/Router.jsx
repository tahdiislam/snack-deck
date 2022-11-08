import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        {
            path: "/", element: <Home/>
        },
        {
            path: "/services", element: <AllServices/>
        },
        {
            path: "/login", element: <Login/>
        },
        {
            path: "/register", element: <Register/>
        },
    ]}
])