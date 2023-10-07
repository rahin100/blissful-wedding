

const Banner = () => {
  return (
    <div className="relative">
      <div className="carousel w-full absolute top-[-85px] -z-10">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full h-[100vh] absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute left-[10%] top-[50%] transform translate-y-[-50%] z-10">
            <h1 className="text-white text-6xl font-extrabold mb-[10px]">AN</h1>
            <h1 className="text-white text-7xl font-extrabold mb-[10px]">
              UNFORGETTABLE
            </h1>
            <h1 className="text-white text-8xl font-extrabold">
              EVENT BEGINS HERE.
            </h1>
          </div>
          <video
            className="w-full h-[100vh] object-cover"
            autoPlay
            muted
            loop
            poster="poster-image.jpg"
          >
            <source src="/src/assets/bg-5.mp4" type="video/mp4" />
          </video>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[50%]">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-full h-[100vh] absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute left-[10%] top-[50%] transform translate-y-[-50%] z-10">
            <h1 className="text-white text-7xl font-extrabold mb-[20px]">
              Enjoy Your
            </h1>
            <h1 className="text-white text-8xl font-extrabold">Celebration.</h1>
          </div>
          <img
            src="/src/assets/bg-2.jpg"
            className="w-full h-[100vh]"
            alt="Slide 2"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[50%]">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="w-full h-[100vh] absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute left-[10%] top-[50%] transform translate-y-[-50%] z-10">
            <h1 className="text-white text-6xl font-extrabold mb-[20px]">
              Your Bridal Cortege
            </h1>
            <h1 className="text-white text-7xl font-extrabold">
              Where Dreams Meet Elegance.
            </h1>
          </div>
          <img
            src="/src/assets/bg-3.jpg"
            className="w-full h-[100vh]"
            alt="Slide 3"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[50%]">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="w-full h-[100vh] absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute left-[10%] top-[50%] transform translate-y-[-50%] z-10">
            <h1 className="text-white text-6xl font-extrabold mb-[20px]">
              Elevate Your Love Story
            </h1>
            <h1 className="text-white text-7xl font-extrabold">
              Our Wedding Venues Make Magic Happen.
            </h1>
          </div>
          <img
            src="/src/assets/bg-1.jpg"
            className="w-full h-[100vh]"
            alt="Slide 4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[50%]">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
