import React from 'react'
import Layout from '../../Layout'
import Main from './MainPage/Main'
import GrowthSection from './GrowthSection'
import Competions from './Competitions/Competions'
const index = () => {
    return (
        <>
            <Layout>
                <Main />
                <GrowthSection />
                <Competions/>

            </Layout>
        </>
    )
}

export default index