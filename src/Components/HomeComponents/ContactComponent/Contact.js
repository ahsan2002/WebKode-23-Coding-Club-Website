import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <section className="contactus-section">
                <div className="container">
                    <h1 style={{textAlign:'center',marginBottom:'40px'}}>Contact Us</h1>
                    <div className="row mx-auto">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row mx-auto">
                                <div className="col-12 col-lg-5 contact-leftside">
                                    <h1 className="main-heading fw-bold">
                                        Connect With Our <br /> Sales Team.
                                    </h1>
                                    <p className="main-work-para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Deserunt eaque alias similique.
                                    </p>
                                    <figure>
                                        <img
                                            src="./Images/coding.png"
                                            alt="contatUsImg"
                                            className="img-fluid"
                                        />
                                    </figure>
                                </div>
                                <div className="col-12 col-lg-7 contact-rightside">
                                    <form >
                                        <div className="row">
                                            <div className="col-12 col-lg-6 my_input">
                                                <input type="text"
                                                    name="firstName"
                                                    id=""
                                                    placeholder='FirstName'

                                                    className='form-control'
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 my_input">
                                                <input type="text"
                                                    name="lastName"
                                                    id=""
                                                    placeholder='LastName'
                                                    className='form-control'
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-lg-6 my_input">
                                                <input type="email"
                                                    name="email"
                                                    id=""
                                                    placeholder='Email'
                                                 className='form-control'
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 my_input">
                                                <input type="text"
                                                    name="phone"
                                                    id=""
                                                    placeholder='Phone Number'
                                                 className='form-control'
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-12 my_input">
                                                <input type="text"
                                                    name="address"
                                                    id=""
                                                    placeholder='Add Address'
                                                   className='form-control'
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-12">
                                                <input type="text"
                                                    name="message"
                                                    id=""
                                                    placeholder='Enter your Message'
                                                   className='form-control'
                                                />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"                     />
                                            <label class="form-check-label" className='main-work-para'>
                                                I agree that the thapatechnicalpay may contact me at the
                                                email address or phone number above
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-style w-100 mt-5">
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