/* eslint-disable react/no-unescaped-entities */
const GetInTouch = () => {
  return (
    <div>
      <div className="bg-base-200 h-[500px] w-[100%] flex justify-center items-center rounded-xl">
        <div className="w-[50%]">
          <img
            className="rounded-br-[100%]"
            src="https://i.ibb.co/SdfSTkm/getintouch.jpg"
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <h2 className="text-7xl font-bold mb-7 text-center">GET IN TOUCH</h2>
          <p className="text-[16px] text-center font-medium">
            We don’t just plan an event, we create an experience. Let’s talk
            about making your dream event happen!
          </p>

          <div>
            <button
              className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block text-white text-[16px] font-semibold mx-auto mt-10"
              type="button"
            >
              LET'S CHAT ⟶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
