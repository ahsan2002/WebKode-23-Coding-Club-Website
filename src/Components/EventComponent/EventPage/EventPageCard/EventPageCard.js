import React from 'react'
import './EventPageCard.css'
import { BiMicrophone } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import Fade from 'react-reveal/Fade'

const EventPageCard = () => {
    const data = [
        {
          id: 1,
          heading: '9 Speakers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante.',
          img:<BiMicrophone size={40} />
        },
        {
          id: 1,
          heading: '8 Hrs Marathon',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante.',
          img:<IoRocketOutline size={40} />
        },
        {
          id: 1,
          heading: 'Early Bird',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante.',
          img:<AiOutlineClockCircle size={40} />
        },
      ]
    return (
        <>
              <Fade right>
            <div className="event-page-card-main">

            {
              data.map((h => {
                return (

                  <div class="event-page-card">
                    <div className="icon">
                      {h.img}
                    </div>

                    <div class="event-page-card-card-content">
                      <h2>
                        {h.heading}
                      </h2>
                      <p>
                        {h.description}
                      </p>
                    </div>

                  </div>
                )
              }))
            }
            </div>
                  </Fade>
        </>
    )
}

export default EventPageCard