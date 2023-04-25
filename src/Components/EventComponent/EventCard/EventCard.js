import React from 'react'
import './EventCard.css';
import { IoLocationSharp, IoTodaySharp, IoMailSharp } from "react-icons/io5";

const EventCard = ({ imgFirst, imgSecond, imgClass, heading, para, eventDate, loc }) => {


    return (

        <>
            <div className='event-left-col col-10 col-lg-4 col-md-4 mx-auto'>
                <div className="event_card_img">
                    <img className='event_card_main_img' src={imgFirst} alt="" />
                    <img className={imgClass} src={imgSecond} alt="" />
                </div>
            </div>
            <div className='event-right-col col-10 col-lg-4 col-md-4 mx-auto'>
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