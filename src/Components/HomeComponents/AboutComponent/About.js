import React from 'react'
import { useState ,useEffect} from 'react';
import './About.css';

const About = () => {

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
        <>
            <div className="main1">

                <div className="myimg1">
                    <img src="/Images/about.png" alt="" />
                </div>

                    <div className="menu-tab">
                        <div  onClick={() => filterItem('about')}> <h2>About Us</h2> </div>
                        <div  onClick={() => filterItem('mission')}><h2>Our Mission</h2></div>
                        <div  onClick={() => filterItem('vision')}><h2>Our Vision</h2></div>
                    </div>
                <div className="content">


                     {
                        item.map((elem) => {
                            const { heading, description } = elem;
                            return (
                                <>
                                    <div className="card" >
                                        <div className="card-body">
                                            <h5 className="card-title">{heading}</h5>
                                            <p className="card-text">{description}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    } 

                </div>

            </div>
        </>
    )
}

export default About;