import React from 'react'
import './MemberReg.css'
import Layout from '../../Layout/index'
import Form from './Form';
import Fade from 'react-reveal/Fade';


const MemberReg = () => {
  return (
    <>
      <Layout>
      <Fade top>
        <div className="regmain">
          <h2>Member Registration</h2>
        </div>
      </Fade>
        <Form/>
      </Layout>
    </>
  )
}

export default MemberReg