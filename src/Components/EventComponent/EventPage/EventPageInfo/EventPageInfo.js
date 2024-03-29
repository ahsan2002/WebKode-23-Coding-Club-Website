import React from "react";
import "../EventPageInfo/EventPageInfo.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import { IoLocationOutline, IoTicketOutline } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import Fade from 'react-reveal/Fade';


const EventPageInfo = ({ loc }) => {
  const data = [
    { id: 1, icon: <AiTwotoneCalendar size={36} color="#1a2238" />, name: "DATE", para: "12-14 May 2023" },
    {
      id: 2,
      icon: <IoLocationOutline size={36} color="#1a2238" />,
      name: "LOCATION",
      para: loc,
    },
    { id: 3, icon: <IoIosPerson size={36} color="#1a2238" />, name: "SPEAKERS", para: "Natalie James" },
    { id: 4, icon: <IoTicketOutline size={36} color="#1a2238" />, name: "TICKET", para: "$65 early bird" },
  ];
  return (
    <>
    <Fade right>
      <div className="event-page-info">
        {data.map((elem, i) => (
          <div className="event-page-info-data">

            {elem.icon}
            <div>
              <h4 className="event-page-info-h4">{elem.name}</h4>
              <p className="event-page-info-p">{elem.para}</p>
            </div>

          </div>
        ))}
      </div>
      </Fade>
    </>
  );
};

export default EventPageInfo;
