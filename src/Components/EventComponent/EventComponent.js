import React from 'react'
import Layout from '../../Layout/index'
import './EventComponent.css'
import EventCard from './EventCard/EventCard'
import EventHeader from './EventHeader/EventHeader'
import { eventData } from '../../Api/eventData'

const index = () => {
    return (
        <Layout>
            <EventHeader />
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-10 col-lg-4 col-md-4'>
                        <div className='event-nav'>
                            <h2 className='event-nav-h2'>Previous</h2>
                            <h2 className='event-nav-h2'>Ongoing</h2>
                            <h2 className='event-nav-h2'>Upcoming</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                {
                    eventData.map((event, i) => {
                        return (
                            <div className="row" style={{ flexDirection: event.direction }}>
                                <EventCard {...event} key={i} />
                            </div>
                        )
                    })
                }
            </div>

        </Layout>
    )
}

export default index