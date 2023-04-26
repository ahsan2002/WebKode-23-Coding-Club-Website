import React from 'react'
import { NavLink } from 'react-router-dom'

const RecentCard = () => {
    return (
        <div className='main-recent-card-div'>
            <div className='recent-card'>
                <div className='recent-post--img'>

                    <img src="/images/recent-card-1.jpeg" alt="" />
                </div>
                <div className='recent-card-content'>
                    <NavLink className={'recent-link'} to={'#'}>
                        <h3>From life was you fish...</h3>
                    </NavLink>
                    <p>January 12, 2019</p>
                </div>
            </div>
        </div>
    )
}

export default RecentCard