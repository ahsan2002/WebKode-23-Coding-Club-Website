import React from 'react'
import Header from '../Components/Navbar/Header'
import Footer from '../Components/Footer/Index'

const index = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default index