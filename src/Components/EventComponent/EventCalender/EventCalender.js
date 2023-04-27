import React, { useState } from 'react'
import './EventCalender.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>

            <Calendar onChange={onChange} value={value} />

        </>
    )
}

export default EventCalender