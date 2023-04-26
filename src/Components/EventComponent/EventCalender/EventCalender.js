import React, { useState } from 'react'
import './EventCalender.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <div>
                <Calendar onChange={onChange} value={[Date(2023, 5, 4), new Date(2023, 5, 9)]} />
            </div>
        </>
    )
}

export default EventCalender