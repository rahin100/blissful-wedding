import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import "./CSS/App.css"

const Home = () => {
  
  
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <div className="banner-container">
      <Banner />
      </div>
      
      <div className="aboutUs-container">
      <AboutUs />
      </div>
      
    </div>
  );
};

export default Home;
