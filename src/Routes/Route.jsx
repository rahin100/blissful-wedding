import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import SingleService from "../Pages/SingleService";
import Testimonials from "../Pages/Testimonials";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/public/Services.json')

            },
            {
                path:"/testimonials",
                element:<Testimonials></Testimonials>,
                
                
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/weddingEvents/:id",
                element:<SingleService></SingleService>,
                loader: () => fetch('/public/Services.json')

            }
          
        ]

    }
])
export default routes