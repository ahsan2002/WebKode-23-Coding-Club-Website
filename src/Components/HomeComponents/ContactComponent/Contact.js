import {React,useEffect} from 'react'
import './Contact.css'
import Slide from 'react-reveal'

const Contact = ({heading='true'}) => {
    
    
    return (
        <>
            <section className="contactus-section">
                <div className="container">
                {
                    heading === 'true' &&  <h2 className='mainheading'>Contact Us</h2>
                }
                    <div className="row mx-auto">
                        <div className="col-12 col-lg-12 mx-auto">
                            <div className="row mx-auto" style={{ justifyContent: "space-evenly" }}>
                                <Slide left >
                                    <div className="col-12 col-lg-4 contact-leftside">
                                        <h3 className="main-heading fw-bold" >
                                            Connect With Our <br />  Team.
                                        </h3>
                                        <p className="main-work-para">
                                            We provide complete support to your queries.
                                        </p>
                                        <figure >
                                            <img
                                                src="./images/contact.png"
                                                alt="contatUsImg"
                                                className="img-fluid"
                                            />
                                        </figure>
                                    </div>
                                </Slide>
                                <Slide right>
                                    <div className="col-12 col-lg-6 contact-rightside">
                                        <form action='https://formspree.io/f/mdovpvnj' method='POST'>
                                            <div className="row">
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="firstName"
                                                        id=""
                                                        placeholder='First Name'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='my_input'
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="lastName"
                                                        id=""
                                                        placeholder='Last Name'
                                                        className='my_input'
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="email"
                                                        name="email"
                                                        id=""
                                                        placeholder='Email'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='my_input'
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="phone"
                                                        id=""
                                                        placeholder='Phone Number'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='my_input'
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-12 ">
                                                    <input type="text"
                                                        name="address"
                                                        id=""
                                                        placeholder='Add Address'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='my_input'
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-12">
                                                    <input type="text"
                                                        name="message"
                                                        id=""
                                                        placeholder='Enter your Message'
                                                        className='my_input'
                                                    />
                                                    <span class="separator"> </span>
                                                </div>
                                            </div>
                                            <div class="form-check form-checkbox-style" style={{ textAlign: "left" }}>
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox" />
                                                <label class="form-check-label" className='main-work-para'>
                                                    I agree that the Koder's Club  may contact me at the
                                                    email address or phone number above
                                                </label>
                                            </div>
                                            <button
                                                type="submit"
                                                className="mybtn-contact">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact