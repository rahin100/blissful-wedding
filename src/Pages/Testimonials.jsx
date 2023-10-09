import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Testimonials = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="">
        <div>
          <img
            className="h-[500px] object-cover w-full"
            src="https://i.ibb.co/dfdnTkz/wedding-Test.jpg"
            alt=""
          />
          <p className="text-4xl text-center mt-[50px] w-[700px] mx-auto mb-[100px]">
            We have been delighted to recieve many letters of thanks from
            couples who have chosen us for their unique wedding venue.
          </p>
        </div>
        {/* 1st row  */}
        <div className="flex justify-center items center mb-[100px]">
            <div className="flex-1">
                <img className="w-[600px] h-[380px]" src="https://i.ibb.co/XsbCzJ0/test1.jpg" alt="" />
            </div>
            <div className="flex-1 w-[600px] mx-auto">
                <p className="text-4xl font-medium mb-[15px]">We found that the staff very friendly and accommodating from the time wedding was booked till all wedding party had checked out. Food was exceptional and everyone had such praise for it. All our needs were met and top table were treated superbly.</p>

                <p className="text-3xl font-extrabold">Anna & Kevin</p>
            </div>
        </div>


        {/* 2nd row  */}
        <div className="flex justify-center items center mb-[100px]">
            <div className="flex-1">
                <img className="w-[600px] h-[380px]" src="https://i.ibb.co/JpLz7Qq/test2.jpg" alt="" />
            </div>
            <div className="flex-1 w-[600px] mx-auto">
                <p className="text-4xl font-medium mb-[15px]">This was my 2nd and my husbands third wedding. So we aspired to something more unorthodox and unusual this time. We were extra excited when our good mutual friends referred us to James. He did a magnificent job!</p>

                <p className="text-3xl font-extrabold">Wanda & Eric</p>
            </div>
        </div>

        {/* 3rd row  */}
        <div className="flex justify-center items center mb-[100px]">
            <div className="flex-1">
                <img className="w-[600px] h-[380px]" src="https://i.ibb.co/6wpX6hz/test3.jpg" alt="" />
            </div>
            <div className="flex-1 w-[600px] mx-auto">
                <p className="text-4xl font-medium mb-[15px]">Wedding complete. Thanks for all your assistance and quick responses to any questions or suggestions. Our wedding coordination was a breeze with your website. I would definitely recommend your service to anyone getting married.</p>

                <p className="text-3xl font-extrabold">Veronica & Garry</p>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Testimonials;
