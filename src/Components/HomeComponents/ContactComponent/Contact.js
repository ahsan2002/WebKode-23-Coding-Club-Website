import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <section className="contactus-section">
                <div className="container">
                    <h2 className='mainheading'>Contact Us</h2>
                    <div className="row mx-auto">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row mx-auto">
                                <div className="col-12 col-lg-5 contact-leftside">
                                    <h3 className="main-heading fw-bold" >
                                        Connect With Our <br />  Team.
                                    </h3>
                                    <p className="main-work-para">
                                        We provide complete support to your queries.
                                    </p>
                                    <figure style={{marginTop:'25px'}}>
                                        <img
                                            src="https://pixabay.com/get/g15bbf2070984b15b7be3679f2692d1173940043b23e132e7c3a71e38e5cd1b155b17d1e7e76856db1c30d574021afa6cb0b78bd591b02ec34ab3df1f1116fd8e3802f04a36fd8f1296ab5e2418f094eb_640.png"
                                            alt="contatUsImg"
                                            className="img-fluid"
                                        />
                                    </figure>
                                </div>
                                <div className="col-12 col-lg-7 contact-rightside">
                                    <form action='https://formspree.io/f/mdovpvnj'  method='POST'>
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
                                        <div class="form-check form-checkbox-style" style={{textAlign:"left"}}>
                                            <input
                                                class="form-check-input"
                                                type="checkbox"                     />
                                            <label class="form-check-label" className='main-work-para'>
                                                I agree that the Koder's Club  may contact me at the
                                                email address or phone number above
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className="mybtn">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Contact