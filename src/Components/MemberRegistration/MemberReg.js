import React from 'react'
import './MemberReg.css'
import Layout from '../../Layout/index'
import Form from './Form';
import SideBarMember from './SideBarMember/SideBarMember'


const MemberReg = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            <div class="member-left-col col-11 col-lg-4 col-md-4 mx-auto">
              <SideBarMember />
            </div>
            <div class="member-right-col col-11 col-lg-8 col-md-8 mx-auto">
              <Form />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default MemberReg