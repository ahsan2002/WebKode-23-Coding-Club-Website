import React from 'react'
import './EventPageForm.css'
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { TeamRegistrationSchema } from '../../../../ValidationSchema/TeamRegistration';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventPageForm = ({ heading }) => {
    const [category, setcategory] = useState(false)

    const TeamInitialValues = {
        regtype: '',
        teamname: '',
        email: '',
        couponcode: '',
        phone: '',
        memberonename: '',
        membertwoname: '',
        memberthreename: '',
        memberoneuni: '',
        membertwouni: '',
        memberthreeuni: '',
    }

    const myFormik = useFormik({
        initialValues: TeamInitialValues,
        validationSchema: TeamRegistrationSchema,

        onSubmit: async (values, { resetForm }) => {
            console.log(values)

            await axios.post('http://localhost:8080/api/registeration', values)
                .then(response => {
                    console.log("response: ", response.data);
                    resetForm();
                    toast.success(`${response.data.msg}`)


                })
                .catch(err => {
                    toast.error(`${err.response.data.error}`)
                    console.log("error: ", err);
                })

        },
    }

    );
    console.log(myFormik.errors)


    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

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
                                        <form onSubmit={myFormik.handleSubmit} method='POST' >

                                            <div className="row" style={{ padding: "1.5rem 0rem" }}>
                                                <div className="d-flex justify-content-center align-items-center col-12 col-lg-6" style={{ gap: "10px" }}>
                                                    <input class="form-check-input radio-class" type="radio" name="regtype" value="Solo" onClick={
                                                        () => {

                                                            setcategory(false)
                                                        }
                                                    }
                                                        onChange={
                                                            myFormik.handleChange

                                                        }
                                                    />
                                                    <label class="form-check-label event-register-radio-label" for="regtype">As Solo</label>

                                                </div>
                                                <div className="d-flex justify-content-center align-items-center col-12 col-lg-6" style={{ gap: "4px" }}>
                                                    <input class="form-check-input radio-class" type="radio" name="regtype" value="Team" onClick={
                                                        () => {
                                                            setcategory(true)
                                                        }
                                                    }
                                                        onChange={myFormik.handleChange
                                                        }
                                                    />
                                                    <label class="form-check-label event-register-radio-label" for="teamcategory">As Team</label>
                                                </div>
                                                {
                                                    (myFormik.touched.regtype && Boolean(myFormik.errors.regtype)) ?
                                                        <span style={{ color: "red" }}>{myFormik.errors.regtype}</span>
                                                        :
                                                        null
                                                }
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="teamname"
                                                        id="teamname"
                                                        placeholder='Team Name'
                                                        autocomplete="off"
                                                        className='event-register-input'
                                                        value={myFormik.values.teamname}
                                                        onChange={myFormik.handleChange}
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                    {
                                                        (myFormik.touched.teamname && Boolean(myFormik.errors.teamname)) ?
                                                            <span style={{ color: "red" }}>{myFormik.errors.teamname}</span>
                                                            :
                                                            null
                                                    }
                                                </div>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="email"
                                                        name="email"
                                                        id="email"
                                                        placeholder='Email'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='event-register-input'
                                                        value={myFormik.values.email}
                                                        onChange={myFormik.handleChange}
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                    {
                                                        (myFormik.touched.email && Boolean(myFormik.errors.email)) ?
                                                            <span style={{ color: "red" }}>{myFormik.errors.email}</span>
                                                            :
                                                            null
                                                    }
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="phone"
                                                        id="phone"
                                                        placeholder='Phone Number'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='event-register-input'
                                                        value={myFormik.values.phone}
                                                        onChange={myFormik.handleChange}
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                    {
                                                        (myFormik.touched.phone && Boolean(myFormik.errors.phone)) ?
                                                            <span style={{ color: "red" }}>{myFormik.errors.phone}</span>
                                                            :
                                                            null
                                                    }
                                                </div>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="couponcode"
                                                        id="couponcode"
                                                        placeholder='Coupon Code'
                                                        className='event-register-input'
                                                        value={myFormik.values.couponcode}
                                                        onChange={myFormik.handleChange}
                                                    />
                                                    <span class="event-register-separator"> </span>
                                                </div>

                                            </div>
                                            <br />
                                            <div className="row">
                                                <h4>Member 1</h4>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="memberonename"
                                                        id="memberonename"
                                                        placeholder='Name'
                                                        autocomplete="off"
                                                        required='true'
                                                        className='event-register-input'
                                                        value={myFormik.values.memberonename}
                                                        onChange={myFormik.handleChange}

                                                    />
                                                    <span class="event-register-separator"> </span>
                                                    {
                                                        (myFormik.touched.memberonename && Boolean(myFormik.errors.memberonename)) ?
                                                            <span style={{ color: "red" }}>{myFormik.errors.memberonename}</span>
                                                            :
                                                            null
                                                    }
                                                </div>
                                                <div className="col-12 col-lg-6 ">
                                                    <input type="text"
                                                        name="memberoneuni"
                                                        id="memberoneuni"
                                                        placeholder='Discipline/University'
                                                        className='event-register-input'
                                                        value={myFormik.values.memberoneuni}
                                                        onChange={myFormik.handleChange}

                                                    />
                                                    <span class="event-register-separator"> </span>
                                                    {
                                                        (myFormik.touched.memberoneuni && Boolean(myFormik.errors.memberoneuni)) ?
                                                            <span style={{ color: "red" }}>{myFormik.errors.memberoneuni}</span>
                                                            :
                                                            null
                                                    }
                                                </div>
                                            </div>
                                            {
                                                category && (
                                                    <>
                                                        <div className="row">
                                                            <h4>Member 2</h4>
                                                            <div className="col-12 col-lg-6 ">
                                                                <input type="text"
                                                                    name="membertwoname"
                                                                    id="membertwoname"
                                                                    placeholder='Name'
                                                                    autocomplete="off"
                                                                    required='true'
                                                                    className='event-register-input'
                                                                    value={myFormik.values.membertwoname}
                                                                    onChange={myFormik.handleChange}
                                                                />
                                                                <span class="event-register-separator"> </span>
                                                            </div>
                                                            <div className="col-12 col-lg-6 ">
                                                                <input type="text"
                                                                    name="membertwouni"
                                                                    id="membertwouni"
                                                                    placeholder='Discipline/University'
                                                                    className='event-register-input'
                                                                    value={myFormik.values.membertwouni}
                                                                    onChange={myFormik.handleChange}
                                                                />
                                                                <span class="event-register-separator"> </span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <h4>Member 3</h4>
                                                            <div className="col-12 col-lg-6 ">
                                                                <input type="text"
                                                                    name="memberthreename"
                                                                    id="memberthreename"
                                                                    placeholder='Name'
                                                                    autocomplete="off"
                                                                    required='true'
                                                                    className='event-register-input'
                                                                    value={myFormik.values.memberthreename}
                                                                    onChange={myFormik.handleChange}
                                                                />
                                                                <span class="event-register-separator"> </span>
                                                            </div>
                                                            <div className="col-12 col-lg-6 ">
                                                                <input type="text"
                                                                    name="memberthreeuni"
                                                                    id="memberthreeuni"
                                                                    placeholder='Discipline/University'
                                                                    className='event-register-input'
                                                                    value={myFormik.values.memberthreeuni}
                                                                    onChange={myFormik.handleChange}
                                                                />
                                                                <span class="event-register-separator"> </span>
                                                            </div>
                                                        </div>
                                                    </>
                                                )

                                            }
                                            <button
                                                type="submit"
                                                className="event-register-btn"
                                                // data-bs-dismiss={dismissModal}
                                            >
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