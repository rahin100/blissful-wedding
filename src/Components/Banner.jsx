const Banner = () => {
  return (
    <div className="relative" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <div className="carousel w-full absolute top-[-85px] -z-10">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full h-[100vh] absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute lg:left-[10%] md:left-[10%] left-[3%] top-[50%] transform translate-y-[-50%] z-10">
            <h1 className="text-white text-2xl lg:text-6xl font-extrabold mb-3 lg:mb-10">
              AN
            </h1>
            <h1 className="text-white text-3xl lg:text-7xl font-extrabold mb-3 lg:mb-10">
              UNFORGETTABLE
            </h1>
            <h1 className="text-white text-5xl lg:text-8xl font-extrabold">
              EVENT BEGINS HERE.
            </h1>
          </div>
          <video
            className="w-full h-[100vh] object-cover"
            autoPlay
            muted
            loop
            poster="https://i.ibb.co/2g5238M/poster-image.jpg"
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

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-full h-[100vh] absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute lg:left-[10%] md:left-[15%] left-[5%] top-[50%] transform translate-y-[-50%] z-10">
            <h1 className="text-white text-4xl lg:text-7xl font-extrabold mb-2 lg:mb-4">
              Enjoy Your
            </h1>
            <h1 className="text-white text-5xl lg:text-8xl font-extrabold mb-2 lg:mb-4">
              Celebration.
            </h1>
          </div>
          <img
            src="https://i.ibb.co/7JLWH0G/bg-2.jpg"
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

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <div className="w-full h-[100vh] absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute lg:left-[10%] md:left-[15%] left-[5%] top-[50%] transform translate-y-[-50%] z-10">
            <h1 className="text-white text-4xl lg:text-6xl font-extrabold mb-2 lg:mb-4">
              Your Bridal Cortege
            </h1>
            <h1 className="text-white text-5xl lg:text-7xl font-extrabold mb-2 lg:mb-4">
              Where Dreams Meet Elegance.
            </h1>
          </div>
          <img
            src="https://i.ibb.co/mq3Xj1Z/bg-3.jpg"
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

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <div className="w-full h-[100vh] absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute lg:left-[10%] md:left-[15%] left-[5%] top-[50%] transform translate-y-[-50%] z-10">
            <h1 className="text-white text-3xl lg:text-6xl font-extrabold mb-2 lg:mb-4">
              Elevate Your Love Story
            </h1>
            <h1 className="text-white text-4xl lg:text-7xl font-extrabold mb-2 lg:mb-4">
              Our Wedding Venues Make Magic Happen.
            </h1>
          </div>
          <img
            src="https://i.ibb.co/ZWkP8cY/bg-1.jpg"
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
