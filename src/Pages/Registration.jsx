import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  

  const handleRegister = (e) => {
    
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name, photo);

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]).{6,}$/.test(password)
    ) {
      toast.error(
        "Must have 6 character, Have one capital letter , have one special character"
      );
    } else {
      if (email) {
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
            e.currentTarget.reset()
            

          })
          .catch((error) => {
                console.log(error);
          }); 
      }
    }

    //createUser
    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
      <div>
        <div className="bg-black">
          <Navbar />
        </div>
        <div className="lg:flex justify-center items-center w-[100%]">
          <div className="lg:w-[50%]">
            <div className="hero min-h-screen lg:bg-base-200">
              <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Register Here!</h1>
                </div>
                
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                  <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input
                        type="text"
                        name="photo"
                        placeholder="photo URL"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
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
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-[14px] font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <Link
                        to={"/login"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        <button className="btn btn-active btn-link">
                          Login
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
          {/* add humans */}
          <section className="lg:w-[50%]">
            <div>
              <img
                className="w-[100%] h-[70vh]"
                src="https://i.ibb.co/3pgXq8F/registration.png"
                alt=""
              />
            </div>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Registration;


