import React from 'react';
import './Main.css'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Main = () => {
  return (
    <>
      <div className="main">

        <Fade right>
          <div className="intro">
            <h1>Koderz Club</h1>
            <p>Official Community of The Department of <br /> Computer Science & Information Technology, NEDUET</p>
            <Fade bottom>

              <NavLink to='/member-registration'
              ><button className='my-btn'>Join Us</button>
              </NavLink>
            </Fade>
          </div>
        </Fade>


        <Fade left>

          <div className="myimg">
            <img src="./images/main-home-img-1.png" alt="" />
          </div>
        </Fade>

      </div>
      <div>
        <img src="./images/main-home-bg.png" alt="" />
      </div>
    </>
  )
}

export default Main;