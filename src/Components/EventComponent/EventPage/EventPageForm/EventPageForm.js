import React from 'react'
import './EventPageForm.css'
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const EventPageForm = ({heading}) => {
    console.log('test',heading)
    const[category,setcategory]=useState()
    return (
        <>
            <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="registerModal" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title">{heading} Registration</h2>
                            <IoClose className="modal-btn-close" data-bs-dismiss="modal" />
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-11 col-md-11 mx-auto">
                                        <form action='https://formspree.io/f/mdovpvnj' method='POST'>

                                            <div className="row" style={{ padding: "1.5rem 0rem" }}>
                                                <div className="d-flex justify-content-center align-items-center col-12 col-lg-6" style={{ gap: "10px" }}>
                                                    <input class="form-check-input radio-class" type="radio" name="teamcategory" id="teamcategory1" value="Solo"  onChange={()=>{
                                                        setcategory('Solo')
                                                    }} />
                                                    <label class="form-check-label event-register-radio-label" for="teamcategory1">As Solo</label>
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center col-12 col-lg-6" style={{ gap: "4px" }}>
                                                    <input class="form-check-input radio-class" type="radio" name="teamcategory" id="teamcategory2" value="Team"  onChange={()=>{
                                                        setcategory('Team')
                                                    }}/>
                                                    <label class="form-check-label event-register-radio-label" for="teamcategory2">As Team</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="teamname"
                                                        id=""
                                                        placeholder='Team Name'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='event-register-input'
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                </div>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="email"
                                                        name="email"
                                                        id=""
                                                        placeholder='Email'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='event-register-input'
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                </div>
                                                
                                            </div>
                                            <div className="row">
                                            <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="phone"
                                                        id=""
                                                        placeholder='Phone Number'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='event-register-input'
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                </div>
                                            <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="couponcode"
                                                        id=""
                                                        placeholder='Coupon Code'
                                                        className='event-register-input'
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                </div>
                                                
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <h4>Member 1</h4>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="name"
                                                        id=""
                                                        placeholder='Name'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='event-register-input'
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                </div>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="dis/university"
                                                        id=""
                                                        placeholder='Discipline/University'
                                                        className='event-register-input'
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <h4>Member 2</h4>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="name"
                                                        disabled={category == 'Solo' ? true : false}
                                                        id=""
                                                        placeholder='Name'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='event-register-input'
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                </div>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="dis/university"
                                                        disabled={category == 'Solo' ? true : false}
                                                        id=""
                                                        placeholder='Discipline/University'
                                                        className='event-register-input'
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <h4>Member 3</h4>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="name"
                                                        disabled={category == 'Solo' ? true : false}
                                                        id=""
                                                        placeholder='Name'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='event-register-input'
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                </div>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="dis/university"
                                                        disabled={category == 'Solo' ? true : false}
                                                        id=""
                                                        placeholder='Discipline/University'
                                                        className='event-register-input'
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="event-register-btn"
                                                data-bs-dismiss="modal">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventPageForm