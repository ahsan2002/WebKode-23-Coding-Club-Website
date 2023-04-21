import React from 'react'
import './SponserSection.css'
import Slider from "react-slick";
import Bounce from 'react-reveal/Bounce';

const SponserSection = () => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                setting: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 520,
                setting: {
                    slidesToShow: 3,
                },
            },
        ],
    };
    return (
        <>


            <section className="container-fluid section-sponser">
                <h2 className="text-center main-sponser-heading">Our Sponsers</h2>
                <Slider className="customer-logos slider" {...settings}>
                    <Bounce top>
                        <div className="slide"><img src="./images/octdaily.png" alt="logo" /></div>
                    </Bounce>
                    <Bounce top>

                        <div className="slide"><img src="./images/ned.png" alt="logo" /></div>
                    </Bounce>
                    <Bounce top>

                        <div className="slide"><img src="./images/google.png" alt="logo" /></div>
                    </Bounce>
                    <Bounce top>

                        <div className="slide"><img src="./images/instagram.png" alt="logo" /></div>
                    </Bounce>

                    <Bounce right>

                        <div className="slide"><img src="./images/nike.png" alt="logo" /></div>
                    </Bounce>
                    <Bounce right>

                        <div className="slide"><img src="./images/twitter.png" alt="logo" /></div>
                    </Bounce>
                    <Bounce right>

                        <div className="slide"><img src="./images/uber.png" alt="logo" /></div>
                    </Bounce>
                    <Bounce right>

                        <div className="slide"><img src="./images/youtube.png" alt="logo" /></div>
                    </Bounce>
                </Slider>
            </section>
        </>

    )
}

export default SponserSection