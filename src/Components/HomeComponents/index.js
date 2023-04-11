import React from 'react'
import Layout from '../../Layout'
import Main from './MainPage/Main'
import GrowthSection from './GrowthSection'
const index = () => {
    return (
        <>
            <Layout>
                <Main />
                <GrowthSection />
            </Layout>
        </>
    )
}

export default index