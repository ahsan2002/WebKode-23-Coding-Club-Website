import React from 'react'
import { NavLink } from 'react-router-dom';
import { blogData } from '../../../Api/blogData';

const RecentCard = () => {
    return (
        <div className='main-recent-card-div'>
            
        
        {
            blogData.map((h)=>{
                return(
                    <div className='recent-card'>
                <div className='recent-post--img'>

                    <img src="/images/recent-card-1.jpeg" alt="" />
                </div>
                <div className='recent-card-content'>
                    <NavLink className={'recent-link'} to={'#'}>
                        <h3>{h.blogSmallHeading}</h3>
                    </NavLink>
                    <p>{h.blogDate}</p>
                </div>
            </div>
                )

            })

        }
        </div>
    )
}

export default RecentCard