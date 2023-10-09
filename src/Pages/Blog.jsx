import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Blog = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>

      <div className="mb-[100px]">
        <img
          className="h-[500px] object-cover w-full"
          src="https://i.ibb.co/JRYPjDv/blogbg.jpg"
          alt=""
        />
      </div>

      {/* 1st row  */}
      <div className="mt-[100px] mb-[80px]">
        <h2 className="text-5xl font-bold mb-[10px]">
          The most common mistakes when managing personal finances
        </h2>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="" src="https://i.ibb.co/2gwJb2Z/blog1.jpg" alt="" />
          </figure>
          <div className="card-body">
            <p className="text-[16px] font-medium">
              The ability to manage money competently is especially valuable
              quality in the conditions of financial crisis, when the purchasing
              power of the population is shrinking, inflation is rising, and
              currency exchange rates are completely unpredictable. Below are
              the common mistakes related to money affairs along with financial
              planning advice to help manage your own finances properly.
            </p>
            <div className="card-actions justify-end ">
              <button
                className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block w-full text-white text-[16px] font-semibold"
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* second row  */}
      <div className="mt-[100px] mb-[80px]">
        <h2 className="text-5xl font-bold mb-[10px]">
          Methods of the recruitment
        </h2>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="" src="https://i.ibb.co/x2j0xBD/blog2.jpg" alt="" />
          </figure>
          <div className="card-body">
            <p className="text-[16px] font-medium">
              Search of staff is not an easy task. According to the departmental
              heads of personnel management words, in order to find a personnel
              who will correspond to the relevant customer needs and
              requirements, it is necessary to carry out a great job
            </p>
            <div className="card-actions justify-end ">
              <button
                className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block w-full text-white text-[16px] font-semibold"
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd row  */}
      <div className="mt-[100px] mb-[80px]">
        <h2 className="text-5xl font-bold mb-[10px]">
          Overalls with logo as a method of advertising
        </h2>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="" src="https://i.ibb.co/R9NynP7/blog3.jpg" alt="" />
          </figure>
          <div className="card-body">
            <p className="text-[16px] font-medium">
              Overalls bearing the companys logo are related to economy and
              practicality. A preference of corporate style involves a
              significant increase of costs for development of design solutions,
              customized tailoring, selection of necessary materials and so on.
            </p>
            <div className="card-actions justify-end ">
              <button
                className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block w-full text-white text-[16px] font-semibold"
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Blog;
