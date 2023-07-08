import React from 'react'
import './EventCard.css';
import { NavLink } from 'react-router-dom'
import { IoLocationSharp, IoTodaySharp } from "react-icons/io5";
import Slide from 'react-reveal'

const EventCard = ({ id, direction, imgFirst, imgSecond, imgClass, heading, para, eventDate, loc }) => {


    return (

        <>
            <Slide left>
                <NavLink to={`/events/event-detail/${id}`} className="row event-main-card-row" style={{ flexDirection: direction }}>
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
                                    <IoLocationSharp size={27} />
                                    <div>
                                        <h4 className=' event-h4'>Location</h4>
                                        <h5>{loc}</h5>
                                    </div>
                                </div>
                                <div>
                                    <IoTodaySharp size={27} />
                                    <div>
                                        <h4 className=' event-h4'>Date</h4>
                                        <h5>{eventDate}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </Slide>
        </>


    )
}

export default EventCard