import React, { useState } from 'react'
import './Form.css';
import Slide from 'react-reveal'
import { convertToBase64 } from '../../../helper/convertToBase64';
import { useFormik } from 'formik';
import { MemberRegistrationSchema } from '../../../ValidationSchema/MemberRegistration';

const Form = () => {

    const [file, setFile] = useState()
    const onUploadPicHandler = async (e) => {
        const base64 = await convertToBase64(e.target.files[0]) // convert this img to base64 so we can store this image into database
        setFile(base64)
    }


    const MemberInitialValues= {
        firstname: '',
        lastname: '',
        memberemail: '',
        memberPhone:'',
        university:'',
        discipline:'',
        shortbio:'',
    }

    const memberFormik = useFormik({
        initialValues:MemberInitialValues,
        validationSchema:MemberRegistrationSchema,
          
        onSubmit: (values) => {
            console.log('testing')
            console.log("values: ", values);
        },
    }
    
    );
    console.log(memberFormik.errors)

    return (
        <>
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
                                            name='member-img' id='member-img'
                                            type="file"
                                            required={true}
                                            onChange={onUploadPicHandler} />
                                    </div>
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
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-lg-6 ">
                                        <input type="email"
                                            name="memberemail"
                                            id="memberemail"
                                            placeholder='Email'
                                            autoComplete="off"
                                            className='my_input'
                                            value={memberFormik.values.memberemail}
                                            onChange={memberFormik.handleChange}
                                        />
                                        <span class="separator"> </span>
                                    </div>
                                    <div className="col-12 col-lg-6 ">
                                        <input type="text"
                                            name="memberPhone"
                                            id="memberPhone"
                                            placeholder='Phone Number'
                                            autoComplete="off"
                                            className='my_input'
                                            value={memberFormik.values.memberPhone}
                                            onChange={memberFormik.handleChange}
                                        />
                                        <span class="separator"> </span>
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
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-12">
                                        <input type="text"
                                            name="shortbio"
                                            id="shortbio"
                                            placeholder='Enter your Short Bio'
                                            className='my_input'
                                            value={memberFormik.values.shortbio}
                                            onChange={memberFormik.handleChange}
                                        />
                                        <span class="separator"> </span>
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