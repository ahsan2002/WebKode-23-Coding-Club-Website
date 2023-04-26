import React, { useState } from 'react'
import './EventCalender.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <div>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    )
}

export default EventCalender