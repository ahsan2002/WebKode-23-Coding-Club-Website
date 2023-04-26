import React from 'react'
import './GrowthSection.css';
import Fade from 'react-reveal/Fade';

const index = () => {
    return (
        <>
            <section className="container main-hero-container">
                <div className="row">
                <Fade left>
                    <div className='col-10 col-lg-7 col-md-7 d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first mx-auto'>

                        <div className='circle-first'>
                            <div className='inner-circle'>
                                <span className='inner-circle-no'>20+</span>
                                <p className='inner-circle-text' style={{ paddingRight: "10px" }}>Compitions</p>
                            </div>
                        </div>
                        <div className='circle-second'>
                            <div className='inner-circle'>
                                <span className='inner-circle-no'>10+</span>
                                <p className='inner-circle-text'>Universites</p>
                            </div>
                        </div>
                        <div className='circle-third'>
                            <div className='inner-circle'>
                                <span className='inner-circle-no'>15+</span>
                                <p className='inner-circle-text'>Events</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                    {/*  --------------- main header right side--------------  */}
                    <Fade right>
                    <div className='col-12 col-lg-5 col-md-5 col-sm-6 d-flex justify-content-center flex-column align-items-start order-lg-first order-last mx-auto'>
                        <h1 className="display-3">
                            Over 20+ Competitions<br />
                            from 7+ Universities

                        </h1>
                        <p className="main-hero-para">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                            qs quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                            officiis tempora recusandae voluptate quam
                        </p>
                        <h3>Get early access for you</h3>
                        <button className='my-btn-G'>Register</button>
                    </div>
                    </Fade>

                </div>
            </section>
        </>
    )
}

export default index