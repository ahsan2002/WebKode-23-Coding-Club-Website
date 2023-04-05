import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar.js'
import './Navbar.css'

const Header = () => {
    return (
        <header>
            <NavLink to={'/'}>
                <img className='logo' src="/images/logo.png" alt="" />
            </NavLink>
            <Navbar />
        </header>
    )
}

export default Header