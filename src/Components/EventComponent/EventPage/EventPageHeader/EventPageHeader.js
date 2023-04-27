import React from 'react'
import EventCountDown from './EventCountDown'
import './EventPageHeader.css'
import EventPageForm from '../EventPageForm/EventPageForm'

const EventPageHeader = () => {
    return (
        <>
            <div className='container'>
                <div className="row event-page-header-div">
                    <div className=" d-flex flex-column justify-content-center col-10 col-lg-4 col-md-4 mx-auto" style={{ gap: "5px" }}>
                        <h2 className='event-page-header-h2'>Event Calendar</h2>
                        <p className='event-page-header-para'>The Tech Events featured in this list take place throughout the year and cover a wide range of different industries.</p>
                    </div>
                    <div className="d-flex justify-content-center col-10 col-lg-4 col-md-4 mx-auto">
                        <EventCountDown />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-8 col-lg-3 col-md-3'>
                        <div className='event-page-nav'>
                            <h2 className='event-page-nav-h2' data-bs-toggle="modal" data-bs-target="#registerModal">Register</h2>
                        </div>
                    </div>
                </div>
            </div>
            <EventPageForm />
        </>
    )
}

export default EventPageHeader