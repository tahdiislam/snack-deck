import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/AllServices/ServiceDetails";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        {
            path: "/", element: <Home/>
        },
        {
            path: "/services", element: <AllServices/>,
            loader: async () => fetch("http://localhost:5000/services")
        },
        {
            path: "/login", element: <Login/>
        },
        {
            path: "/register", element: <Register/>
        },
        {
            path: "/foods/:id", element: <ServiceDetails/>, loader: async({params}) => {
                return fetch(`http://localhost:5000/services/${params.id}`)
            }
        },
        {
            path: "/myreviews", element: <RequireAuth>
                <MyReviews/>
            </RequireAuth>
        }
    ]}
])