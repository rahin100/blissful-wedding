import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";



const MainLayout = () => {
    return (
        <div className="lg:px-10 md:px-7 px-5">
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default MainLayout;