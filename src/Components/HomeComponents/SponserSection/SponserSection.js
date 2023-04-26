import React from 'react'
import './SponserSection.css'
import Slider from "react-slick";
import Slide from 'react-reveal';

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
                    <Slide left>
                        <div className="slide"><img src="./images/octdaily.png" alt="logo" /></div>
                    </Slide>
                    <Slide left>
                        <div className="slide"><img src="./images/ned.png" alt="logo" /></div>
                    </Slide>
                    <Slide left>
                        <div className="slide"><img src="./images/google.png" alt="logo" /></div>
                    </Slide>
                    <Slide left>
                        <div className="slide"><img src="./images/instagram.png" alt="logo" /></div>
                    </Slide>

                    <Slide right>
                        <div className="slide"><img src="./images/nike.png" alt="logo" /></div>
                    </Slide>
                    <Slide right>
                        <div className="slide"><img src="./images/twitter.png" alt="logo" /></div>
                    </Slide>
                    <Slide right>
                        <div className="slide"><img src="./images/uber.png" alt="logo" /></div>
                    </Slide>
                    <Slide right>
                        <div className="slide"><img src="./images/youtube.png" alt="logo" /></div>
                    </Slide>
                </Slider>
            </section>
        </>

    )
}

export default SponserSection