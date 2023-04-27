import React from 'react'
import './EventPageAbout.css'

const EventPageAbout = () => {
    return (
        <>
            <div className="container event-page-about-main">

                <div className="event-page-about-heading">
                    <hr />
                    <h2>About The Event</h2>
                </div>

                <div className="row justify-content-center event-page-about-para">

                    <div className="col-11 col-lg-6 col-md-6  para-1">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi quaerat ut atque voluptatibus culpa ab consequatur autem dolorem molestias?</p>

                    </div>

                    <div className="col-11 col-lg-6 col-md-6  para-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam animi deserunt illum rerum vel expedita sapiente enim quidem voluptatum quas?</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EventPageAbout