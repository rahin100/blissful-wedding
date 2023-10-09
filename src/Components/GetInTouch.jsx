const GetInTouch = () => {
  return (
    <div className="static" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="bg-white lg:h-[500px] md:h-[700px] w-full lg:w-[100%] flex flex-col lg:flex-row justify-center items-center rounded-xl">
        <div className="lg:w-[50%]">
          <img
            className="rounded-br-[100%] w-full object-fill"
            src="https://i.ibb.co/SdfSTkm/getintouch.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-[50%] p-5">
          <h2 className="text-4xl lg:text-7xl font-bold mb-3 lg:mb-7 text-center lg:text-left">
            GET IN TOUCH
          </h2>
          <p className="text-lg lg:text-xl text-center lg:text-left font-medium">
            We don’t just plan an event, we create an experience. Let’s talk
            about making your dream event happen!
          </p>

          <div className="mt-5 text-center lg:text-left">
            <button
              className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block text-white text-lg lg:text-xl font-semibold mx-auto lg:mx-0"
              type="button"
            >
              LETS CHAT ⟶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
