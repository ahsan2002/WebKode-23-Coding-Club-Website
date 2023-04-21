import React from 'react'
import TeamCard from './TeamCard/TeamCard';
import Layout from '../../Layout/index';
import './Team.css';
import SideBarTeam from './SideBarTeam/SideBarTeam';

const index = () => {
    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div class="team-left-col col-11 col-lg-4 col-md-4 mx-auto">
                            <SideBarTeam />
                        </div>
                        <div class="team-right-col col-11 col-lg-8 col-md-8 mx-auto">
                            <TeamCard />
                            <TeamCard />
                            <TeamCard />
                            <TeamCard />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default index