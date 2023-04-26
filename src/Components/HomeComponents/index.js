import React from 'react'
import Layout from '../../Layout'
import Main from './MainPage/Main'
import GrowthSection from './GrowthSection'
import Competions from './Competitions/Competions'
import AboutSection from './AboutSection/AboutSection'
import Contact from './ContactComponent/Contact'
import SponserSection from './SponserSection/SponserSection'
const index = () => {
    return (
        <>
            <Layout>
                <Main />
                <GrowthSection />
                <AboutSection />
                <Competions/>
                <SponserSection />
                <Contact/>

            </Layout>
        </>
    )}

export default index;