import React from 'react'
import './EventHeader.css'
import EventCalender from '../EventCalender/EventCalender'

const EventHeader = () => {
    return (
        <>
            <div className='container'>
                <div className="row event-topper-div">
                    <div className=" d-flex flex-column justify-content-center col-10 col-lg-4 col-md-4 mx-auto">
                        <h2 className='Event-topper-h2'>Event</h2>
                        <p className='event-topper-para'>The Tech Events featured in this list take place throughout the year and cover a wide range of different industries.</p>
                    </div>
                    <div className="d-flex justify-content-end col-10 col-lg-5 col-md-5 mx-auto">
                        <EventCalender />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventHeader