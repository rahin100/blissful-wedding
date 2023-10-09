import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import SingleService from "../Pages/SingleService";
import Testimonials from "../Pages/Testimonials";
import Registration from "../Pages/Registration";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import Gallery from "../Pages/Gallery";
import Team from "../Pages/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/public/Services.json')
      
      },
      {
        path: "/testimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/team",
        element: <Team/>,
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
      },
      {
        path: "/gallery",
        element: <PrivateRoute><Gallery/></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/weddingEvents/:id",
        element: 
          <PrivateRoute>
            <SingleService></SingleService>
          </PrivateRoute>,
          loader: () => fetch('/public/Services.json')
      },
    ]
  },
]);

export default router;
