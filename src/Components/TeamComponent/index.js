import React from 'react'
import TeamCard from './TeamCard/TeamCard';
import Layout from '../../Layout/index';
import './Team.css';
import Sidebar from './SideBar/Sidebar';

const index = () => {
    return (
        <>
            <Layout>
            <div style={{display:'flex'}}>
                    <Sidebar />

                <div className="team_main" >
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