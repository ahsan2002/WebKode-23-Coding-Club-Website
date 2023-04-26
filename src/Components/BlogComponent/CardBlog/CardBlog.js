import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
import './Card.css';
import Slide from 'react-reveal/Slide';

const CardBlog = ({
    id, authorName, authorDesignation, authorImg, blogCategory, blogDate, blogImg, blogHeading, blogAbout
}) => {
    return (
        <>
            <Slide left>
                <NavLink className='blog-card-div' to={`/blogs/blog-detail/${id}`}>
                    <div className='blog-card-img-div card-data--img'>
                        <img className=' img-fluid' src={blogImg} alt="" />
                    </div>
                    <div className='blog-card-content'>
                        <div className='category-date-div'>
                            <p className='blog-category'>{blogCategory}</p>
                            <p className='blog-date'>{blogDate}</p>
                        </div>
                        <div className='blog-card-inner-content'>
                            <div className='blog-info'>
                                <h3 className='blog-heading'>{blogHeading}</h3>
                                <p className='blog-para'>{blogAbout}</p>
                            </div>
                            <div className='author-div'>
                                <img className='author-img' src={authorImg} alt="" />
                                <div className='author-info'>
                                    <h3 className='author-name'>{authorName}</h3>
                                    <p className='author-designation'>{authorDesignation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </Slide>
        </>
    )
}

export default CardBlog