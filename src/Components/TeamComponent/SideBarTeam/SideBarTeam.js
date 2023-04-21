import React from 'react'
import './SideBarTeam.css'
import { IoIosPeople } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
      <div className="sidebar-team">
        <div className='team-sidebar-div'>
          <IoIosPeople className='team-sidebar-icon' />
          <h2 className='team-sidebar-heading'>Our Team</h2>
          <p className='team-sidebar-para'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <NavLink to='/member-registration'
          ><button className='my-sidebar-btn'>Join Us</button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Sidebar