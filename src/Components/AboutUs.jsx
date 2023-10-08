/* eslint-disable react/no-unescaped-entities */
const AboutUs = () => {
  return (
    <div className="mt-[100px] bg-">
      <h2 className="text-6xl font-bold mb-7">About Us</h2>
      <div className="flex justify-center w-full gap-7">
        <div className="w-[50%]">
          <p className="text-[18px] font-medium text-justify mb-5">
            BlissfulTie Wedding Planners, we are a passionate team of
            experienced professionals dedicated to making your dream wedding a
            reality. With over a decade of expertise in the wedding industry,
            our commitment is to ensure that your special day is nothing short
            of unforgettable.
          </p>
          <p className="text-[18px] font-medium text-justify mb-5">
            We understand that every love story is unique, and that's why we
            take a personalized approach to wedding planning. From selecting the
            perfect venue and designing stunning decor to curating a delectable
            menu and managing every detail, we are here to bring your vision to
            life.
          </p>
          <p className="text-[18px] font-medium text-justify mb-5">
            Our mission is to create a stress-free and magical wedding
            experience for you. We pride ourselves on our attention to detail,
            creativity, and commitment to exceeding your expectations. Your
            wedding day is a reflection of your love story, and we consider it
            an honor to be a part of that journey. Whether you envision an
            intimate destination wedding or a grand celebration, we have the
            expertise to make it happen. With us, you'll have a dedicated team
            by your side, ensuring that every aspect of your wedding day is
            flawlessly executed.
          </p>
          <p className="text-[18px] font-medium text-justify">
            Let us handle the logistics while you savor every moment of your
            special day. At BlissfulTie Wedding Planners, we believe in the
            power of love and the beauty of a well-planned wedding. Contact us
            today, and let's embark on this exciting journey together, creating
            memories that will last a lifetime."
          </p>
        </div>
        <div className="w-[50%]">
          <img
            className="shadow-2xl rounded-2xl h-[65vh]"
            src="/src/assets/aboutus.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
