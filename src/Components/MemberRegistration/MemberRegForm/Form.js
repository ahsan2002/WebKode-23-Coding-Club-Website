import React from 'react'
import './Form.css';
import Slide from 'react-reveal'

const Form = () => {
    return (
        <>
 <Slide right>
            <section className="member-section">
                <div className="row mx-auto">
                    <div className="col-12 col-lg-12 col-md-12 member_reg_leftside mx-auto">
                        <form action='https://formspree.io/f/moqzyzal' method='POST'>
                            <div className="row">
                                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <label htmlFor="member-img" className='rotateY'>
                                        <img className='member_img' src="/Images/person.png" alt="" />
                                    </label>
                                    <input className='image_choose d-none' name='member-img' id='member-img' type="file" />
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
                </div>
            </section>
            </Slide>
        </>
    )
}

export default Form