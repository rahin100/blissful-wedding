import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSignOut = () => {
    logOut()
    .then(()=>{
      navigate('/')
    })
    .catch();
  };

  const navLink = (
    <ul className="flex space-x-6">
      <li className="text-[18px] font-semibold text-white">
        <NavLink
          to="/"
          className="text-white"
          activeclassname="text-primary-600" 
        >
          Home
        </NavLink>
      </li>
      <li className="text-[18px] font-semibold text-white">
        <NavLink
          to="/team"
          className="text-white"
          activeclassname="text-primary-600" 
        >
          Team
        </NavLink>
      </li>
      <li className="text-[18px] font-semibold text-white">
        <NavLink
          to="/testimonials"
          className="text-white"
          activeclassname="text-primary-600" 
        >
          Testimonial
        </NavLink>
      </li>
      {user && (
        <>
          <li className="text-[18px] font-semibold text-white">
            <NavLink
              to="/blog"
              className="text-white"
              activeclassname="text-primary-600" 
            >
              Blog
            </NavLink>
          </li>
          <li className="text-[18px] font-semibold text-white">
            <NavLink
              to="/gallery"
              className="text-white"
              activeclassname="text-primary-600" 
            >
              Gallery
            </NavLink>
          </li>
        </>
      )}
      <li className="text-[18px] font-semibold text-white">
        <NavLink
          to="/login"
          className="text-white"
          activeclassname="text-primary-600" 
        >
          Login
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div>
      <div
        className="navbar bg-transparent shadow-lg p-4 z-20"
        data-aos="fade-down"
      >
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
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
              >
                <li>
                  <a>{user.displayName}</a>
                </li>
                <li>
                  <a onClick={handleSignOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://i.ibb.co/s5zPXPr/accoung-img.jpg"
                      alt="User Avatar"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Login</a>
                  </li>
                </ul>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
