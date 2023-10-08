
import Navbar from "../Components/Navbar";


const Testimonials = () => {
    return (
        <div>
            <div className="bg-black">
            <Navbar/>
            </div>
            <div className="">
               <div style={{
                height: '400px',
                backgroundImage:`URL("/src/assets/weddingTest.jpg")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
               }}>

               </div>
            </div>

        </div>
    );
};

export default Testimonials;