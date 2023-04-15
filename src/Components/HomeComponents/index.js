import React from 'react'
import Layout from '../../Layout'
import Main from './MainPage/Main'
import GrowthSection from './GrowthSection'
import AboutSection from './AboutSection/AboutSection'
import SponserSection from './SponserSection/SponserSection'
const index = () => {
    return (
        <>
            <Layout>
                <Main />
                <GrowthSection />
                <AboutSection />
                <SponserSection />
            </Layout>
        </>
    )
}

export default index