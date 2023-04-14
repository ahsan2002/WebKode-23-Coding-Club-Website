import React from 'react'
import Layout from '../../Layout'
import Main from './MainPage/Main'
import GrowthSection from './GrowthSection'
import AboutSection from './AboutSection/AboutSection'
const index = () => {
    return (
        <>
            <Layout>
                <Main />
                <GrowthSection />
                <AboutSection />
            </Layout>
        </>
    )
}

export default index