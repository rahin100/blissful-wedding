/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServicesCard = ({ weddingEvent }) => {
  // eslint-disable-next-line no-unused-vars
  const {id, name, image, price, short_description, button_text } = weddingEvent;

  return (
    <div>
      <div>
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src={image} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                {name}
              </p>
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                {price}
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              {short_description}
            </p>
          </div>
          <div className="p-6 pt-0">
            
            <Link to={`/weddingEvents/${id}`}>
            <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block w-full text-white text-[16px] font-semibold" type="button">{button_text}</button>
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
