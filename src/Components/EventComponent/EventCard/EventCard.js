import React from 'react'
import './EventCard.css';
import { IoLocationSharp, IoTodaySharp, IoMailSharp } from "react-icons/io5";

const EventCard = () => {
  return (
    <>
        <div className="event_card_main">

            <div className="event_card_img">
                    <img src="./images/Solutions.jpg" alt="" />
            </div>

            <div className="event_card_desc">
                        <h2>Web Kode'23</h2>
                        <p>The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
                        <div className="event_icon">

                            <div>
                                <IoLocationSharp size={25}/>
                                <h5>NED-UET</h5>
                            </div>

                            <div>
                                <IoTodaySharp size={25}/>
                                <h5>Jun 20,2023</h5>
                            </div>

                        </div>
            </div>

        </div>
    </>
  )
}

export default EventCard