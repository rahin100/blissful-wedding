import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // eslint-disable-next-line no-unused-vars
  const handleSignOut = (e) => {
    logOut()
     .then()
     .catch();
  };

  const navLink = (
    <>
      <li className="text-[18px] font-semibold text-white">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="text-[18px] font-semibold text-white">
        <Link to={"/testimonials"}>Testimonials</Link>
      </li>
      <li className="text-[18px] font-semibold text-white">
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li className="text-[18px] font-semibold text-white">
        <Link to={"/gallery"}>Gallery</Link>
      </li>
      <li className="text-[18px] font-semibold text-white">
        <Link to={"/login"}>Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-transparent shadow-lg p-4 z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <img
            className="w-[250px]"
            src="https://svgshare.com/i/yJ7.svg"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown flex justify-center items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src=" https://i.ibb.co/s5zPXPr/accoung-img.jpg" />
              </div>
            </label>
            {user ? (
              <button onClick={handleSignOut} className="btn">
                Log Out
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="btn">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
