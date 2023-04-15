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
            description: "Founded in 2016, the AI CLUB is a derivative of the research centre for Artificial intelligence at NEDUET. Established by a group of undergraduate students of NED University, the club is all about artificial intelligence. Integrating several teams having a diverse set of skills, the AI club brings together all the ideas and individuals passionate about AI technology. We hold ourselves true to the promise of enlightening the young enthusiasts and encouraging emerging startups. The AI club organizes various events including; seminars, workshops, and boot camps featuring researchers and innovators shedding light upon topics such as Machine Learning, Deep Learning, data analysis, entrepreneurship, and robotic automation etc. "
        },

        {
            id: 2,
            heading: "Mentoring and training the young AI innovators ",
            category: "mission",
            description: 'The AI club was founded to serve the primary motive of providing opportunities and a networking medium for students, in the domain of artificial intelligence. From the fundamentals of the technology to kick starting an AI-based business, we strive to provide everything that an ambitious undergrad needs '
        },
        {
            id: 3,
            heading: "Preparing the future generations of Pakistan for the eminent AI REVOLUTION",
            category: "vision",
            description: 'At AI club we ideate a harmonious and opulent world made possible with the use of AI technologies. Artificial intelligence will revolutionize every industry as we know it. AI club imagines a future where innovations in AI technologies will enhance the well being and state of life in Pakistan. The road to embracing artificial intelligence is long, but to achieve greatness one has to walk alone. AI club has laid the foundation of what will be a society of like-minded innovators, students, teachers and leaders. '
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