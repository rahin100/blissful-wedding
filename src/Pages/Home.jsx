import { useLoaderData } from "react-router-dom";
import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import "./CSS/App.css";

import OurServices from "../Components/OurServices";
import ServicesCard from "../Components/ServicesCard";
import GetInTouch from "../Components/GetInTouch";
import Footer from "../Components/Footer";


const Home = () => {
  const weddingEvents = useLoaderData();
  // console.log(weddingEvents);

  return (
    <div className="app-container">
      <div className="navbar-container">
      <Navbar></Navbar>
      </div>
      <div className="banner-container">
        <Banner />
      </div>

      <div className="aboutUs-container">
        <AboutUs />
      </div>

      <div className="ourServices-container">
        <OurServices></OurServices>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 shadow-xl">
          {weddingEvents?.map((weddingEvent) => (
            <ServicesCard
              key={weddingEvent.id}
              weddingEvent={weddingEvent}
            ></ServicesCard>
          ))}
        </div>
      </div>

      <div className="getInTouch-container">
         <GetInTouch/>
      </div>

      <div className="footer-container">
        <Footer></Footer>
      </div>



        


    </div>
  );
};

export default Home;
