import React from 'react'
import './SponserSection.css'
import Slider from "react-slick";

const SponserSection = () => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
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
        <section className="container-fluid section-sponser">
            <h2 className="text-center main-sponser-heading">Our Partners</h2>
            <Slider className="customer-logos slider" {...settings}>
                <div className="slide"><img src="./images/adidas.png" alt="logo" /></div>
                <div className="slide"><img src="./images/facebook.png" alt="logo" /></div>
                <div className="slide"><img src="./images/google.png" alt="logo" /></div>
                <div className="slide"><img src="./images/instagram.png" alt="logo" /></div>
                <div className="slide"><img src="./images/nike.png" alt="logo" /></div>
                <div className="slide"><img src="./images/twitter.png" alt="logo" /></div>
                <div className="slide"><img src="./images/uber.png" alt="logo" /></div>
                <div className="slide"><img src="./images/youtube.png" alt="logo" /></div>
            </Slider>
        </section>

    )
}

export default SponserSection