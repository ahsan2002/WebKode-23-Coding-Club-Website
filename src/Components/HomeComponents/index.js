import React from 'react'
import Header from '../Navbar/Header'
import Main from './MainPage/Main'
import About from './AboutComponent/About'
import Competions from './Competitions/Competions'
const index = () => {
    return (
        <>
            <Header />
            <Main/>
            {/* <About/> */}
            <Competions/>
        </>
    )
}

export default index