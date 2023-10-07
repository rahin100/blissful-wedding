const AboutUs = () => {
  return (
    <div className=" h mt-8">
    <h2 className="text-center text-6xl font-bold text-white bg-black">About Us</h2>
    <hr />

    <div className="flex">
        <div className="col-span-2">
        <p>
            BlissfulTie Wedding Planners, we specialize in turning your dream wedding into a reality.
            With years of experience and a passion for creating unforgettable moments, our dedicated team
            is committed to making your special day truly magical.
          </p>
          <p>
            Our mission is to design and execute weddings that reflect your unique love story.
            From intimate gatherings to grand celebrations, we handle every detail with care and precision.
          </p>
          <p>
            Let us be a part of your journey and transform your vision into a beautiful reality.
            We look forward to making your wedding day a cherished memory for a lifetime.
          </p>
        </div>
        <div className="col-span-2">
            <img className="h-[500px]" src="/src/assets/edward-cisneros-3_h6-1NPDGw-unsplash.jpg" alt="" />
        </div>
    </div>
      
    </div>
  );
};

export default AboutUs;
