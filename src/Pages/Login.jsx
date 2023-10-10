import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";




const Login = () => {

  

  const { signIn, googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
  
    signIn(email, password)
    .then((result) => {
      console.log(result.user);
      e.currentTarget.reset();
      navigate(location?.state ? location.state : '/');
    })
    .catch((err) => {
      console.log(err.message);
    });
  };
  

  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="lg:flex justify-center items-center w-full">
        <div className="lg:w-1/2">
          <div className="hero min-h-screen lg:bg-base-200">
            <div className="hero-content flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <Link to="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </Link>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                  <p className="text-[14px] font-light text-gray-500 dark:text-gray-400">
                    Do not have an account yet?{" "}
                    <Link
                      to="/registration"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <button className="btn btn-active btn-link">
                        Register
                      </button>
                    </Link>
                  </p>
                  <div>
                    <p className="text-[14px] font-light text-gray-500 dark:text-gray-400">
                      Continue With
                      <button
                        onClick={() => handleSocialLogin(googleLogin)}
                        className="btn btn-primary btn-sm ml-[10px]"
                      >
                        Google
                      </button>
                    </p>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Add humans */}
        <section className="lg:w-[50%]">
          <div>
            <img
              className="w-full h-[70vh]"
              src="https://i.ibb.co/3dP8y2F/login.png"
              alt=""
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
