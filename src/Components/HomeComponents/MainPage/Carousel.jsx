import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { NavLink } from 'react-router-dom';

// const images =

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "images/carousel/img1.png",
        "images/carousel/img2.jpg",
        "images/carousel/img3.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [slides.length]);

    return (
        <div className="carousel">
            {slides.map((slide, index) => (
                <div>

                    {/* Carousel SLides */}
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''} `}
                        style={{
                            backgroundImage: `url(${slide}`,
                        }}
                    >
                    </div>

                    <div className={`carousel-content-container ${index === currentSlide ? 'active' : ''}`}>
                        <div className="carousel-content">
                            <h1 className='title' > WELCOME TO
                                <span
                                    style={{
                                        color: "linear-gradient(to right, #004e92, #000428)",
                                    }}
                                    className='title'
                                > KODERZ KLUB</span></h1>
                            <div className='subHeading'>Innovation | Inspiration | Impact</div>

                            <div className="carousel-button-container">
                                <NavLink to='/contact-us'>
                                    <div className="justify-content-center align-items-center d-flex">
                                        <button type="button" className="my-btn-carousel btn  px-4"
                                            style={{ borderRadius: "7px" }}>Register</button>
                                    </div>
                                </NavLink>
                                <NavLink to='/member-registration'>
                                    <div className="justify-content-center align-items-center d-flex">
                                        <button
                                            type="button"
                                            className="my-btn-carousel btn px-4"
                                            style={{ borderRadius: "7px" }}
                                        >Join Us
                                        </button>
                                    </div>
                                </NavLink>
                            </div>
                        </div>


                    </div>

                </div>
            ))}
        </div>
    );
};

export default Carousel;
