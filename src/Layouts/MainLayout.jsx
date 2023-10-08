import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="px-10">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;