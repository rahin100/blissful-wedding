const AboutUs = () => {
  return (
    <div className="">
      <div className="mt-8 lg:mt-20 ">
        <h2 className="text-4xl lg:text-6xl font-bold mb-5 lg:mb-7">
          About Us
        </h2>
        <div className="flex flex-col lg:flex-row justify-center w-full gap-5 lg:gap-7">
          <div className="lg:w-[50%]">
            <p className="text-lg lg:text-xl font-medium text-justify mb-3 lg:mb-5">
              BlissfulTie Wedding Planners, we are a passionate team of
              experienced professionals dedicated to making your dream wedding a
              reality. With over a decade of expertise in the wedding industry,
              our commitment is to ensure that your special day is nothing short
              of unforgettable.
            </p>
            <p className="text-lg lg:text-xl font-medium text-justify mb-3 lg:mb-5">
              We understand that every love story is unique, and thats why we
              take a personalized approach to wedding planning. From selecting
              the perfect venue and designing stunning decor to curating a
              delectable menu and managing every detail, we are here to bring
              your vision to life.
            </p>
            <p className="text-lg lg:text-xl font-medium text-justify mb-3 lg:mb-5">
              Our mission is to create a stress-free and magical wedding
              experience for you. We pride ourselves on our attention to detail,
              creativity, and commitment to exceeding your expectations. Your
              wedding day is a reflection of your love story, and we consider it
              an honor to be a part of that journey. Whether you envision an
              intimate destination wedding or a grand celebration, we have the
              expertise to make it happen. With us, you will have a dedicated
              team by your side, ensuring that every aspect of your wedding day
              is flawlessly executed.
            </p>
          </div>
          <div className="lg:w-[50%]">
            <img
              className="shadow-2xl rounded-2xl h-[40vh] lg:h-[65vh] mx-auto"
              src="https://i.ibb.co/ThBDF5G/aboutus.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
