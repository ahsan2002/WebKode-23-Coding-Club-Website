import React from 'react'
import './EventCard.css';
import { IoLocationSharp, IoTodaySharp, IoMailSharp } from "react-icons/io5";

const EventCard = () => {

    const Data = [
        {
            img: './images/Solutions.jpg',
            heading:'Web Kode 23',
            para:'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
            loc: 'ned',
            datee: '20 jun 2023',
            direction:'row'
        },
        {
            img: './images/Solutions.jpg',
            heading:'Web Kode 23',
            para:'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
            loc: 'ned',
            datee: '20 jun 2023',
            direction:'row-reverse'
        },
        {
            img: './images/Solutions.jpg',
            heading:'Web Kode 23',
            para:'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
            loc: 'ned',
            datee: '20 jun 2023',
            direction:'row'
        },
        
    ]


    return (
        <>
        {
            Data.map((elem)=>{
                return(

                
            <div className="event_card_main" style={{flexDirection:`${elem.direction}`}}>

                <div className="event_card_img">
                    <img src={elem.img} alt="" />
                </div>

                <div className="event_card_desc">
                    <h2>{elem.heading}</h2>
                    <p>{elem.para}</p>
                    <div className="event_icon">

                        <div>
                            <IoLocationSharp size={25} />
                            <h5>{elem.loc}</h5>
                        </div>

                        <div>
                            <IoTodaySharp size={25} />
                            <h5>{elem.datee}</h5>
                        </div>

                    </div>
                </div>

            </div>
                )
            })
        }
        </>
    )
}

export default EventCard