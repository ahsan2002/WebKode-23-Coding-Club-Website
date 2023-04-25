import React from 'react'
import './EventCard.css';
import { IoLocationSharp, IoTodaySharp, IoMailSharp } from "react-icons/io5";

const EventCard = ({ img, heading, para, eventDate, loc }) => {


    return (

        <>
            <div className='event-left-col col-10 col-lg-6 col-md-6 mx-auto'>
                <div className="event_card_img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='event-right-col col-10 col-lg-5 col-md-5 mx-auto'>
                <div className="event_card_desc">
                    <h2>{heading}</h2>
                    <p>{para}</p>
                    <div className="event_icon">
                        <div>
                            <IoLocationSharp size={25} />
                            <h5>{loc}</h5>
                        </div>
                        <div>
                            <IoTodaySharp size={25} />
                            <h5>{eventDate}</h5>
                        </div>

                    </div>
                </div>
            </div>
        </>


    )
}

export default EventCard