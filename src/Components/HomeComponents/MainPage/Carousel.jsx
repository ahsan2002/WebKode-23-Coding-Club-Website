import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { NavLink } from 'react-router-dom';
import Slide from 'react-reveal'

// const images =

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "images/carousel/img1.jpg",
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
                    <Slide top>
                            <h1 className='title' > WELCOME TO
                                <span
                                    style={{
                                        color: "linear-gradient(to right, #004e92, #000428)",
                                    }}
                                    className='title'
                                > KODERZ KLUB</span></h1>
                            <div className='subHeading'>Innovation | Inspiration | Impact</div>
                            </Slide>
                            
                            <Slide bottom>
                            <div className="carousel-button-container">
                                <NavLink to='/events'>
                                <button className='my-btn-C'>Register</button>
                                </NavLink>
                                <NavLink to='/member-registration'>
                                <button className='my-btn-C'>Join Us</button>
                                </NavLink>
                            </div>
                            </Slide>
                        </div>
                        


                    </div>

                </div>
            ))}
        </div>
    );
};

export default Carousel;
