import React from 'react'
import './ContactCard.css';
import { IoLocationSharp, IoPhonePortrait, IoMailSharp } from "react-icons/io5";
import Fade  from 'react-reveal/Fade'

const ContactCard = () => {

    const data = [
        {
            img: <IoLocationSharp size={50} />,
            heading: 'Address',
            description: "CSIT Department,Main University Rd, NED University Of Engineering & Technology, Karachi"

        },
        {
            img: <IoPhonePortrait size={50} />,
            heading: 'Phone',
            description: "0318-2936379"

        },
        {
            img: <IoMailSharp size={50} />,
            heading: 'Email Address',
            description: "koder_club@gmail.com"

        }
    ]
    return (
        <>
             <Fade top>
            <div className="contact_card_main">
                {
                    data.map((elem) => {
                        return (
                            <div class="card-contact">
                                {elem.img}
                                <h2>
                                    {elem.heading}
                                </h2>
                                <p>
                                    {elem.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>

             </Fade>
        </>
    )
}

export default ContactCard;