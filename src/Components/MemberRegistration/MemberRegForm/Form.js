import React, { useState } from 'react'
import './Form.css';
import Slide from 'react-reveal'
import { convertToBase64 } from '../../../helper/convertToBase64';
import { useFormik } from 'formik';
import { MemberRegistrationSchema } from '../../../ValidationSchema/MemberRegistration';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const [file, setFile] = useState()
    const onUploadPicHandler = async (e) => {
        const base64 = await convertToBase64(e.target.files[0]) // convert this img to base64 so we can store this image into database
        setFile(base64)
    }


    const MemberInitialValues = {
        profileImage: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        university: '',
        discipline: '',
        shortbio: '',
    }

    const memberFormik = useFormik({
        initialValues: MemberInitialValues,
        validationSchema: MemberRegistrationSchema,

        onSubmit: async (values, { resetForm }) => {
            console.log('testing')
            console.log("values: ", values);
            values = Object.assign(values, { profileImage: file || " " })
            await axios.post('http://localhost:8080/api/team', values)

                .then(response => {
                    console.log("response: ", response.data);
                    resetForm();
                    toast.success(`${response.data.msg}`)
                })
                .catch((err) => {
                    toast.error(`${err.response.data.error}`)
                    console.log("error: ", err);
                })
        },
    }

    );
    console.log(memberFormik.errors)

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
                theme="dark"
            />
            <Slide right>
                <section className="member-section">
                    <div className="row mx-auto">
                        <div className="col-12 col-lg-12 col-md-12 member_reg_leftside mx-auto">
                            <form onSubmit={memberFormik.handleSubmit}>
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                        <label htmlFor="member-img" className='rotateY'>
                                            <img className='member_img' accept=".png, .jpg, .jpeg" src={file || "/images/person.png"} alt="" />
                                        </label>
                                        <input
                                            className='image_choose d-none'
                                            name='profileImage' id='member-img'
                                            type="file"
                                            onChange={onUploadPicHandler} />
                                    </div>
                                        {
                                            (memberFormik.touched.profileImage && Boolean(memberFormik.errors.profileImage)) ?
                                                <span style={{ color: "red" }}>{memberFormik.errors.profileImage}</span>
                                                :
                                                null
                                        }
                                    <div className="col-12 col-lg-6 ">
                                        <input type="text"
                                            name="firstname"
                                            id="firstname"
                                            placeholder='First Name'
                                            autoComplete="off"
                                            className='my_input'
                                            value={memberFormik.values.firstname}
                                            onChange={memberFormik.handleChange}
                                        />
                                        <span class="separator"> </span>
                                        {
                                            (memberFormik.touched.firstname && Boolean(memberFormik.errors.firstname)) ?
                                                <span style={{ color: "red" }}>{memberFormik.errors.firstname}</span>
                                                :
                                                null
                                        }
                                    </div>
                                    <div className="col-12 col-lg-6 ">
                                        <input type="text"
                                            name="lastname"
                                            id="lastname"
                                            placeholder='Last Name'
                                            className='my_input'
                                            value={memberFormik.values.lastname}
                                            onChange={memberFormik.handleChange}
                                        />
                                        <span class="separator"> </span>
                                        {
                                            (memberFormik.touched.lastname && Boolean(memberFormik.errors.lastname)) ?
                                                <span style={{ color: "red" }}>{memberFormik.errors.lastname}</span>
                                                :
                                                null
                                        }
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-lg-6 ">
                                        <input type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Email'
                                            autoComplete="off"
                                            className='my_input'
                                            value={memberFormik.values.email}
                                            onChange={memberFormik.handleChange}
                                        />
                                        <span class="separator"> </span>
                                        {
                                            (memberFormik.touched.email && Boolean(memberFormik.errors.email)) ?
                                                <span style={{ color: "red" }}>{memberFormik.errors.email}</span>
                                                :
                                                null
                                        }
                                    </div>
                                    <div className="col-12 col-lg-6 ">
                                        <input type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder='Phone Number'
                                            autoComplete="off"
                                            className='my_input'
                                            value={memberFormik.values.phone}
                                            onChange={memberFormik.handleChange}
                                        />
                                        <span class="separator"> </span>
                                        {
                                            (memberFormik.touched.phone && Boolean(memberFormik.errors.phone)) ?
                                                <span style={{ color: "red" }}>{memberFormik.errors.phone}</span>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-12 ">
                                        <input type="text"
                                            name="university"
                                            id="university"
                                            placeholder='Enter your University name'
                                            autoComplete="off"
                                            className='my_input'
                                            value={memberFormik.values.university}
                                            onChange={memberFormik.handleChange}
                                        />
                                        <span class="separator"> </span>
                                        {
                                            (memberFormik.touched.university && Boolean(memberFormik.errors.university)) ?
                                                <span style={{ color: "red" }}>{memberFormik.errors.university}</span>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-12 ">
                                        <input type="text"
                                            name="discipline"
                                            id="discipline"
                                            placeholder='Enter your Discipline'
                                            autoComplete="off"
                                            className='my_input'
                                            value={memberFormik.values.discipline}
                                            onChange={memberFormik.handleChange}
                                        />
                                        <span class="separator"> </span>
                                        {
                                            (memberFormik.touched.discipline && Boolean(memberFormik.errors.discipline)) ?
                                                <span style={{ color: "red" }}>{memberFormik.errors.discipline}</span>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-12">
                                        <textarea type="text"
                                            name="shortbio"
                                            id="shortbio"
                                            placeholder='Enter your Short Bio'
                                            className='my_input'
                                            value={memberFormik.values.shortbio}
                                            onChange={memberFormik.handleChange}
                                        />
                                        <span class="separator"> </span>
                                        {
                                            (memberFormik.touched.shortbio && Boolean(memberFormik.errors.shortbio)) ?
                                                <span style={{ color: "red" }}>{memberFormik.errors.shortbio}</span>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                                <div class="form-check form-checkbox-style" style={{ textAlign: "left" }}>
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        color='purple'
                                        required={true} />
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