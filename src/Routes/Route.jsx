import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/services",
                element:<Services></Services>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
          
        ]

    }
])
export default routes