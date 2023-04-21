import React from 'react'
import './SideBarMember.css'
import { BsPencilSquare } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <>
            <div className="sidebar-member">
                <div className='member-sidebar-div'>
                    <BsPencilSquare className='member-sidebar-icon' />
                    <h2 className='member-sidebar-heading'>Member Registration</h2>
                    <p className='member-sidebar-para'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <NavLink to='/team'
                    ><button className='my-sidebar-member-btn'>Our Team</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Sidebar