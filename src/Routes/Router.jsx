import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddServices from "../Pages/AddReview/AddServices";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/AllServices/ServiceDetails";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            { path: "*", element: <ErrorPage /> },
            {
                path: "/", element: <Home />
            },
            {
                path: "/all-foods", element: <AllServices />,
                loader: async () => fetch("https://assignment-11-two.vercel.app/services")
            },
            {
                path: "/login", element: <Login />
            },
            {
                path: "/register", element: <Register />
            },
            {
                path: "/foods/:id", element: <ServiceDetails />, loader: async ({ params }) => {
                    return fetch(`https://assignment-11-two.vercel.app/services/${params.id}`)
                }
            },
            {
                path: "/myreviews", element: <RequireAuth>
                    <MyReviews />
                </RequireAuth>
            },
            {
                path: "/add-food", element: <RequireAuth>
                    <AddServices />
                </RequireAuth>
            },
            {
                path: "/blogs", element: <Blog />, loader: () => {
                    return fetch("https://assignment-11-two.vercel.app/blogs")
                }
            }
        ]
    }
])