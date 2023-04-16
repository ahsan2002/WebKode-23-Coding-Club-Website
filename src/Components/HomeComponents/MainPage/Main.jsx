import React from 'react';
import './Main.css'

const Main = () => {
  return (
    <>
        <div className="main">

            <div className="intro">
                <h1>Koder's Club</h1>
                <p>Official Community of The Department of <br/> Computer Science & Information Technology, NEDUET</p>

                <button className='my-btn'>Join Us</button>
            </div>

            <div className="myimg">
                <img  src="https://preview.colorlib.com/theme/edumark/img/banner/edu_ilastration.png.webp" alt="" />
            </div>

        </div>
    </>
  )
}

export default Main;