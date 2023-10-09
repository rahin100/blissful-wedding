import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Team = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>

      <div className="mb-[100px]">
        <img
          className="h-[500px] object-cover w-full"
          src="https://i.ibb.co/vjt1RCC/teambg.jpg"
          alt=""
        />
      </div>

      
      <h2 className="text-3xl lg:text-6xl font-bold mb-7 text-center">Our Team</h2>
      <div className="mb-[100px] grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
      
        {/* 1st row  */}
        <div className="relative flex flex-col w-full lg:w-96 bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img
              src="https://i.ibb.co/Pc683Qj/team1.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-xl lg:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
               John Cassius
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base lg:text-lg font-medium leading-relaxed text-transparent antialiased">
              CEO / Co-Founder
            </p>
            <p>
              This man is our chief. He knows everything about wedding
              planning thanks to the really stunning career in the industry.
            </p>
          </div>
          <div>
          <button
                className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block w-full text-white text-[16px] lg:text-lg font-semibold"
                type="button"
              >
                Read More
              </button>
          </div>
        </div>


        {/* 2nd row  */}
        <div className="relative flex flex-col w-full lg:w-96 bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img
              src="https://i.ibb.co/0CP9ddm/team2.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-xl lg:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Natalie Paisley
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base lg:text-lg font-medium leading-relaxed text-transparent antialiased">
            SPECIALIST
            </p>
            <p>
            Natalie Paisley is a wedding expert who does her job with pure elegance to make your wedding day unforgettable.
            </p>
          </div>
          <div>
          <button
                className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block w-full text-white text-[16px] lg:text-lg font-semibold"
                type="button"
              >
                Read More
              </button>
          </div>
        </div>

        {/* 3rd row  */}
        <div className="relative flex flex-col w-full lg:w-96 bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img
              src="https://i.ibb.co/fxpvQPy/team3.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-xl lg:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Maud Howard
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base lg:text-lg font-medium leading-relaxed text-transparent antialiased">
            ORGANIZER
            </p>
            <p>
            Maud is an experienced organizer with more than 20 ceremonies held under her belt, each designed according to her worldview.
            </p>
          </div>
          <div>
          <button
                className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block w-full text-white text-[16px] lg:text-lg font-semibold"
                type="button"
              >
                Read More
              </button>
          </div>
        </div>

        {/* 4th row  */}
        <div className="relative flex flex-col w-full lg:w-96 bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img
              src="https://i.ibb.co/K0yG7Jq/team4.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-xl lg:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Jimmy Loren
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base lg:text-lg font-medium leading-relaxed text-transparent antialiased">
            PHOTOGRAPHER
            </p>
            <p>
            Jimmy Loren is an experienced photographer with more than 20 ceremonies held under his belt, each shot according to his worldview.
            </p>
          </div>
          <div>
          <button
                className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block w-full text-white text-[16px] lg:text-lg font-semibold"
                type="button"
              >
                Read More
              </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Team;
