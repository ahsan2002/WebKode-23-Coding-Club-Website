import React, { useState, useEffect } from 'react'
import './AboutSection.css'

const AboutSection = () => {

    useEffect(() => {
        filterItem('about')
    }, [])


    const Menu = [
        {
            id: 1,
            heading: "Pioneers of a highly ambitious AI society for the Pakistani youth",
            category: "about",
            description: "Founded in 2021, the AI CLUB is a derivative of the research centre for Artificial intelligence at NEDUET. Established by a group of undergraduate students of NED University, the club is all about artificial intelligence. Integrating several teams having a diverse set of skills, the AI club brings together all the ideas and individuals passionate about AI technology. We hold ourselves true to the promise of enlightening the young enthusiasts and encouraging emerging startups. The AI club organizes various events including; seminars, workshops, and boot camps featuring researchers and innovators shedding light upon topics such as Machine Learning, Deep Learning, data analysis, entrepreneurship, and robotic automation etc. "
        },

        {
            id: 2,
            heading: "Mentoring and training the young AI innovators ",
            category: "mission",
            description: 'We are a community of coding enthusiasts who are passionate about coding and love to share our knowledge with others. Our mission is to create a platform where people can come together to learn, grow, and compete in coding competitions. We believe that by providing a supportive and collaborative environment, we can help people of all skill levels improve their coding skills and achieve their goals. Our team of experienced programmers and designers are dedicated to creating high-quality competitions and resources that will help you take your coding skills to the next level. '
        },
        {
            id: 3,
            heading: "Preparing the future generations of Pakistan for the eminent AI REVOLUTION",
            category: "vision",
            description: 'Our vision is to become the go-to destination for coding enthusiasts around the world. We want to create a platform that is accessible to everyone, regardless of their skill level or background. We believe that by fostering a sense of community and providing high-quality coding competitions and resources, we can help people achieve their full potential and make a positive impact in the world. Our goal is to inspire and empower the next generation of coders and innovators, and we are committed to helping you achieve your dreams. '
        },
    ]
    const [item, setitem] = useState(Menu);

    const filterItem = (myitem) => {
        const updateditem = Menu.filter((elem) => {
            return elem.category === myitem;

        });
        setitem(updateditem);
    }
    return (
        <section className="container-fluid main-about-container"
            style={{ paddingLeft: "0px" }}>
            <div className="row about-row" >
                <div className='col-12 col-lg-6 col-md-6 d-flex justify-content-center align-items-center order-md-first order-sm-first mx-auto'
                    style={{ paddingLeft: "0px" }}>
                    <div className="about-img-div">
                        <img src="/images/about.png" alt="" />
                    </div>
                </div>
                {/*  --------------- main header right side--------------  */}
                <div className='col-12 col-lg-6 col-md-6 col-sm-6 d-flex flex-column justify-content-center  align-items-center order-lg-first order-last mx-auto
                about-right-col'>

                    <div className="menu-tab">
                        <h2 onClick={() => filterItem('about')} className='menu-tab-h2'>About Us</h2>
                        <h2 onClick={() => filterItem('mission')} className='menu-tab-h2'>Our Mission</h2>
                        <h2 onClick={() => filterItem('vision')} className='menu-tab-h2'>Our Vision</h2>
                    </div>

                    {
                        item.map((elem) => {
                            const { heading, description } = elem;
                            return (
                                <>
                                    <div className='menu-tab-div'>
                                        <h1 className="main-about-heading">
                                            {heading}
                                        </h1>
                                        <p className="main-about-para">
                                            {description}
                                        </p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default AboutSection