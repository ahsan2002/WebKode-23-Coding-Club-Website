import React from 'react'
import './RecentPost.css'
import RecentCard from './RecentCard'

const RecentPost = () => {
    return (
        <div className='main-recentpost'>
            <h3 className='recentpost-heading'>Recent Post</h3>
            <RecentCard />
        </div>
    )
}

export default RecentPost