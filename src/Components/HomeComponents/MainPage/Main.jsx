import React from 'react';
import './Main.css'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Carousel from './Carousel';

const Main = () => {
  return (
    <>
      <div id='frontPage'
      style={{
        maxHeight: "100dvh",
      }}
    >
      <Carousel />
    </div>
    </>
  )
}

export default Main;