import React from 'react'
import Layout from '../../../Layout/index'
import EventPageHeader from './EventPageHeader/EventPageHeader'
import EventPageAbout from './EventPageAbout/EventPageAbout'
import EventPageCard from './EventPageCard/EventPageCard'
import EventPageInfo from './EventPageInfo/EventPageInfo'

const EventPage = () => {
    return (
        <Layout>
            <EventPageHeader />
            <EventPageAbout />
            <EventPageCard />
            <EventPageInfo/>
        </Layout>

    )
}
export default EventPage;