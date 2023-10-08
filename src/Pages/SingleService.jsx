import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import SingleServiceCard from "./SingleServiceCard";


const SingleService = () => {
    const [weddingEvent, setWeddingEvent] = useState({})

    const {id} = useParams()
    console.log(id)

    const weddingEvents = useLoaderData()
    // console.log(weddingEvents)

    useEffect(()=>{

        const findWeddingEvent =weddingEvents.find?.((weddingEvent) => weddingEvent.id == id)
        setWeddingEvent(findWeddingEvent)

        console.log(findWeddingEvent)


    },[id,weddingEvents])
 
    console.log(weddingEvent)

    return (
        <div>
             <div className="bg-black">
            <Navbar/>
            </div>
            <SingleServiceCard weddingEvent={weddingEvent}></SingleServiceCard>
        </div>
    );
};

export default SingleService;