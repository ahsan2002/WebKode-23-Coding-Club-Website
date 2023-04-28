import React from 'react'
import Layout from '../../../Layout/index'
import EventPageHeader from './EventPageHeader/EventPageHeader'
import EventPageAbout from './EventPageAbout/EventPageAbout'
import EventPageCard from './EventPageCard/EventPageCard'
import EventPageInfo from './EventPageInfo/EventPageInfo'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { eventData } from '../../../Api/eventData'

const EventPage = () => {

    const [singleEventdata, setSingleEventdata] = useState()

    const { id } = useParams()

    const getSingleEvent = (id) => {
        const data = eventData.find((event) => {
            return event.id === id
        })
        setSingleEventdata(data)
    }
    useEffect(() => {
        getSingleEvent(id)
    }, [])
    return (
        <Layout>
            <EventPageHeader {...singleEventdata} />
            <EventPageAbout />
            <EventPageCard />
            <EventPageInfo {...singleEventdata} />
        </Layout>

    )
}
export default EventPage;