import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Gallery = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="mb-[100px]">
        <img
          className="h-[500px] object-cover lg:w-full"
          src="https://i.ibb.co/4FcG5qY/gallerybg.jpg"
          alt=""
        />
      </div>

      <p className="lg:text-5xl text-2xl  lg:w-[900px] md:w-[500px] w-[250px]  mx-auto mb-[70px]">
        The choices surrounding your wedding day are endless and sometimes
        overwhelming. 
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-100vw  mb-[100px]">
        <img src="https://i.ibb.co/9HwBpB1/g1.jpg" alt="" />
        <img
          className="lg:h-[366px]"
          src="https://i.ibb.co/HxB0yv4/g2.jpg"
          alt=""
        />
        <img
          className="h-[366px]"
          src="https://i.ibb.co/MgtxBPH/g3.jpg"
          alt=""
        />
        <img src="https://i.ibb.co/WvKyhQD/g4.jpg" alt="" />
        <img src="https://i.ibb.co/71XmQ6K/g5.jpg" alt="" />
        <img src="https://i.ibb.co/zGxjCmL/g6.jpg" alt="" />
        <img src="https://i.ibb.co/WKyTSX3/g7.jpg" alt="" />
        <img src="https://i.ibb.co/c6fMd5V/g8.jpg" alt="" />
        <img src="https://i.ibb.co/DQytJZ7/g9.jpg" alt="" />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Gallery;
