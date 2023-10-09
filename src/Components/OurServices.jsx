/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";



/* eslint-disable react/no-unescaped-entities */
const OurServices = () => {
    const weddingEvents = useLoaderData()
    console.log(weddingEvents)
    
  return (
    <div className="">
        <h2 className="text-4xl lg:text-6xl font-bold mb-7">Our Services</h2>
    </div>
  );
};

export default OurServices;
