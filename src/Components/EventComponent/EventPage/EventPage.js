import React from 'react'
import Layout from '../../../Layout/index'
import EventPageHeader from './EventPageHeader/EventPageHeader'
import EventPageAbout from './EventPageAbout/EventPageAbout'
import EventPageCard from './EventPageCard/EventPageCard'

const EventPage = () => {
    return (
        <Layout>
            <EventPageHeader />
            <EventPageAbout />
            <EventPageCard />
        </Layout>

    )
}
export default EventPage;