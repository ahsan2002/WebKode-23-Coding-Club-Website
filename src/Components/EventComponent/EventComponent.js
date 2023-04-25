import React from 'react'
import Layout from '../../Layout/index'
import './EventComponent.css'
import EventCalender from './EventCalender/EventCalender'
import EventCard from './EventCard/EventCard'

const index = () => {
    return (
        <Layout>
            <div className='container'>
                <div className="row event-topper-div">
                    <div className=" d-flex flex-column justify-content-center col-10 col-lg-4 col-md-4 mx-auto">
                        <h2 className='Event-topper-h2'>Event</h2>
                        <p>The Tech Events featured in this list take place throughout the year and cover a wide range of different industries.</p>
                    </div>
                    <div className="d-flex justify-content-center col-10 col-lg-4 col-md-4 mx-auto">
                        <EventCalender />
                    </div>
                </div>
            </div>
            <EventCard/>
        </Layout>
    )
}

export default index