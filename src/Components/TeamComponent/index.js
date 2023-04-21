import React from 'react'
import TeamCard from './TeamCard/TeamCard';
import Layout from '../../Layout/index';
import './Team.css';
import Sidebar from './SideBar/Sidebar';

const index = () => {
    return (
        <>
            <Layout>
                <div className="regmain">
                    <h2>Our Team</h2>
                </div>
                <div className="team_main" >
                    <Sidebar />
                    <div className="cards_main" style={{display:'flex'}}>
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />

                </div>
                    </div>
            </Layout>
        </>
    )
}

export default index