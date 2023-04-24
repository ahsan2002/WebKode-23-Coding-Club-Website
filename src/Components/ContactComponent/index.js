import React from 'react'
import Layout from '../../Layout/index';
import ContactCard from './ContactCards/ContactCard';
import Contact from '../.././Components/HomeComponents/ContactComponent/Contact'


const index = () => {
    return (
        <Layout>
                <ContactCard/>
                <Contact heading="false"/>

        </Layout>
    )
}

export default index