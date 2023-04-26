import React from 'react'
import './SideBarTeam.css'
import { IoIosPeople } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import Slide from 'react-reveal'


const Sidebar = () => {
  return (
    <>
    <Slide left>
      <div className="sidebar-team">
        <div className='team-sidebar-div'>
          <IoIosPeople className='team-sidebar-icon' />
          <h2 className='team-sidebar-heading'>Our Team</h2>
          <p className='team-sidebar-para'>The Club Coding team consists of passionate and skilled individuals with expertise in software development, front-end development, full-stack development, and data analysis/machine learning. They work together to give the most of their knowledge and experience to others</p>
          <NavLink to='/member-registration'
          ><button className='my-sidebar-btn'>Join Us</button>
          </NavLink>
        </div>
      </div>
      </Slide>
    </>
  )
}

export default Sidebar