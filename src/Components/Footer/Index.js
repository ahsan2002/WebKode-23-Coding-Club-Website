import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'

const Index = () => {
    return (
        <>
            <div className="container-fluid footer">
                <div className="row bg-dark justify-content-evenly text-white pt-4 pb-5">
                    <div className="col-lg-3 col-mg-3 col-10 pt-5">
                        {/* <!-- <h1 className="justify-content-center align-items-center d-flex">STF</h1> --> */}
                        <div className="d-flex justify-content-center align-items-center">
                            <img className=" " src={"./images/logo.png"} alt=""
                                width="55%" height="55%" />
                        </div>
                        <h3 className="footer-h3 justify-content-center align-items-center d-flex  pb-3"> Our Mission! </h3>
                        <p style={{ fontSize: "1.6rem", fontWeight: "600" }}>first Nedian youth charity organization who serve for Reward and nation</p>
                        <p className="pera-top"
                            style={{ fontSize: "1.4rem", fontWeight: "300", textAlign: "justify" }}>The legal definition of a charitable
                            organization (and of charity) varies between countries and in some instances regions of the country. The
                            regulation, the tax treatment, and the way in which charity law affects charitable organizations also vary.
                        </p>
                        <div className="justify-content-center align-items-center d-flex">
                            <button type="button" className=" my-btn-F btn  px-4"
                                style={{ borderRadius: "30px" }}>Register</button>
                        </div>
                    </div>
                    <div className=" secondCol col-lg-3 col-mg-3 col-10 pt-4 mt-3">
                        <h3 className="footer-h3 justify-content-center align-items-center d-flex py-3">Important Links</h3>
                        <div className="link-div" style={{ fontWeight: "300" }}>
                            <div className='link-inner-div'>

                                <NavLink className="link-light text-decoration-none" href="#">Home</NavLink>
                                <NavLink className="link-light text-decoration-none" href="#">About Us</NavLink>
                                <NavLink className="link-light text-decoration-none" href="#">Blogs</NavLink>
                                <NavLink className="link-light text-decoration-none" href="#">Events</NavLink>
                                <NavLink className="link-light text-decoration-none" href="#">Gallery</NavLink>
                                <NavLink className="link-light text-decoration-none" href="#">Team</NavLink>
                                <NavLink className="link-light text-decoration-none" href="#">Contact US</NavLink>
                            </div>
                        </div>
                        <h3 className="footer-h3 justify-content-center align-items-center d-flex py-3 pt-5">Support On</h3>
                        <div className="justify-content-center align-items-center d-flex"
                            style={{ fontSize: "2rem", gap: "1rem" }}>
                            <i className="footer-icon bi bi-facebook mx-3 pb-4 pt-2"></i>
                            <i className="footer-icon bi bi-twitter mx-3 pb-4 pt-2"></i>
                            <i className="footer-icon bi bi-instagram mx-3 pb-4 pt-2"></i>
                            <i className="footer-icon bi bi-whatsapp mx-3 pb-4 pt-2"></i>
                            <i className="footer-icon bi bi-envelope mx-3 pb-4 pt-2"></i>
                        </div>
                        <div className="justify-content-center align-items-center d-flex">
                            <button
                                type="button"
                                className="my-btn-F btn px-4"
                                style={{ borderRadius: "30px" }}
                            >Join US
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-mg-3 col-10 pt-4 mt-3">
                        <h3 className="footer-h3 justify-content-center align-items-center d-flex py-3">Contact Us</h3>
                        <div className='thirdCol-inner-div'>
                            <i className="bi bi-telephone pe-2"></i> 0315-8951125<br />
                            <i className="bi bi-envelope pe-2"></i> daniyalshiekh166@gmail.com<br />
                            <i className="bi bi-globe pe-2"></i> STForce.surge.sh<br />
                            <i className="bi bi-geo-alt pe-2"></i> Main University Rd, NED University Of Engineering & Technology, Karachi,
                            Karachi City, Sindh 75270
                            <iframe className="d-flex my-4 mx-auto"
                                title='Address'
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14472.265542248591!2d67.1148314!3d24.9298083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf864ed97b4a8ec0e!2sNED%20University%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2s!4v1633876559237!5m2!1sen!2s"
                                width="90%" height="230" style={{ borderRadius: "16px", border: "0" }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index