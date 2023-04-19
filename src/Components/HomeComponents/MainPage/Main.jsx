import React from 'react';
import './Main.css'
import { NavLink } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <div className="main">

        <div className="intro">
          <h1>Koderz Club</h1>
          <p>Official Community of The Department of <br /> Computer Science & Information Technology, NEDUET</p>
          <NavLink to='/member-registration'
          ><button className='my-btn'>Join Us</button>
          </NavLink>
        </div>

        <div className="myimg">
          <img src="https://preview.colorlib.com/theme/edumark/img/banner/edu_ilastration.png.webp" alt="" />
        </div>

      </div>
    </>
  )
}

export default Main;