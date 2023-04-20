import React from 'react'
import './Card.css'

const CardBlog = () => {
    return (
        <>
            <div className='blog-card-div'>
                <div className='blog-card-img-div'>
                    <img className=' img-fluid' src="./images/blog-1.jpeg" alt="" />
                </div>
                <div className='blog-card-content'>
                    <div className='category-date-div'>
                        <p className='blog-category'>Business, Travel</p>
                        <p className='blog-date'>— July 2, 2020</p>
                    </div>
                    <div className='blog-card-inner-content'>
                        <div className='blog-info'>
                            <h3 className='blog-heading'>Your most unhappy customers are your greatest source of learning.</h3>
                            <p className='blog-para'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className='author-div'>
                            <img className='author-img' src="./images/person-1.jpeg" alt="" />
                            <div className='author-info'>
                                <h3 className='author-name'>Sergy Campbell</h3>
                                <p className='author-designation'>CEO and Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardBlog