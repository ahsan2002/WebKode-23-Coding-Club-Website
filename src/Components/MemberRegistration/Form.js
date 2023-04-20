import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row mx-auto">
                                <div className="col-12 col-lg-7 member_reg_leftside">
                                    <form action='https://formspree.io/f/mdovpvnj' method='POST'>
                                        <div className="row">
                                            <div style={{ textAlign: 'center',marginBottom:'20px'}}>
                                                <img className='member_img' src="/Images/person.png" alt="" />
                                                <br />
                                                <input className='image_choose' type="file" />
                                            </div>
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
                                                    name="university"
                                                    id=""
                                                    placeholder='Enter your University name'
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
                                                    name="discipline"
                                                    id=""
                                                    placeholder='Enter your Discipline'
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
                                                    name="shortbio"
                                                    id=""
                                                    placeholder='Enter your Short Bio'
                                                    className='my_input'
                                                />
                                                <span class="separator"> </span>
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style" style={{ textAlign: "left" }}>
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                color='purple' />
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
                                <div className="col-12 col-lg-5 member_reg_rightside">
                                    <h3 className="main-heading fw-bold" >
                                        Connect With Our <br />  Team.
                                    </h3>
                                    <p className="main-work-para">
                                        We provide complete support to your queries.
                                    </p>
                                    <figure >
                                        <img
                                            src="./Images/member.png"
                                            alt="contatUsImg"
                                            className="img-fluid"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form