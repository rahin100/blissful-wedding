/* eslint-disable react/prop-types */

const SingleServiceCard = ({ weddingEvent }) => {
  const eventItemsArray = [];
  const eventItems = JSON.parse(localStorage.getItem("eventItem"));
  console.log(eventItems);

  if (!eventItems) {
    eventItemsArray.push(weddingEvent);
    localStorage.setItem("eventItem", JSON.stringify(eventItemsArray));
  } else {
    eventItemsArray.push(...eventItems, weddingEvent);
    localStorage.setItem("eventItem", JSON.stringify(eventItemsArray));
  }
  // eslint-disable-next-line no-unused-vars
  const { id, name, image, price, short_description, button_text } =
    weddingEvent;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 shadow-xl">
        <div className="hero-content w-[75vw] flex-col lg:flex-row">
          <img className=""
            src={image}
          />
          <div>
            <h1 className="text-5xl font-bold text-start">{name}</h1>
            <p className="py-6 text-start">
              {short_description}
            </p>
            <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block  text-white text-[16px] font-semibold" type="button">{button_text}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceCard;
