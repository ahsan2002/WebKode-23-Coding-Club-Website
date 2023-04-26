import React from 'react'
import Header from '../Components/Navbar/Header'
import Footer from '../Components/Footer/Index'
import BottomToTop from '../Components/BottomToTop/BottomToTop'

const index = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <BottomToTop />
            <Footer />
        </>
    )
}

export default index