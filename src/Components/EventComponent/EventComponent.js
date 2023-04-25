import React from 'react'
import Layout from '../../Layout/index'
import './EventComponent.css'
import EventCalender from './EventCalender/EventCalender'
import EventCard from './EventCard/EventCard'


const EventCardData = [
    {
        img: './images/Solutions.jpg',
        heading: 'Web Kode 23',
        para: 'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
        loc: 'ned',
        eventDate: '20 jun 2023',
        direction: 'row'
    },
    {
        img: './images/Solutions.jpg',
        heading: 'Web Kode 23',
        para: 'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
        loc: 'ned',
        eventDate: '20 jun 2023',
        direction: 'row-reverse'
    },
    {
        img: './images/Solutions.jpg',
        heading: 'Web Kode 23',
        para: 'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
        loc: 'ned',
        eventDate: '20 jun 2023',
        direction: 'row'
    },

]


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
            <div className='container'>
                {
                    EventCardData.map((event, i) => {
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