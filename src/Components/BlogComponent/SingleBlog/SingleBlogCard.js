import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const SingleBlogCard = ({ authorName, authorImg, blogCategory, blogDate, blogImg, blogHeading, blogAbout, blogParaOne, blogParaTwo, blogParaThree, blogParaFour }) => {
    return (
        <><div className='main-single-blog'>
            <div className='single-blog-first-div'>
                <img className='single-blog-author-img' src={authorImg} alt="ff" />
                <h3 className='single-blog-author-name' >{authorName}</h3>
            </div>
            <div className='single-blog-second-div'>
                <p className='single-blog-category'>{blogCategory}</p>
                <p className='single-blog-date'>- {blogDate}</p>
            </div>
            <div className='single-blog-third-div'>
                <h2 className='single-blog-heading'>{blogHeading}</h2>
                <p className='single-blog-about'>{blogAbout}</p>
                <img className='single-blog-img' src={blogImg} alt="ff" />
                <p className='single-blog-para'>{blogParaOne}</p>
                <p className='single-blog-para'>{blogParaTwo}</p>
                <p className='single-blog-para'>{blogParaThree}</p>
                <p className='single-blog-para'>{blogParaFour}</p>
                <hr className='single-blog-hr' />
            </div>
            <div className='single-blog-fourth-div'>
                <h3>Share</h3>
                <div className='single-blog-icon-div'>
                    <NavLink className={'single-blog-icon'} to={'#'}><BsFacebook /></NavLink>
                    <NavLink className={'single-blog-icon'} to={'#'}><BsLinkedin /></NavLink>
                    <NavLink className={'single-blog-icon'} to={'#'}><BsTwitter /></NavLink>
                    <NavLink className={'single-blog-icon'} to={'#'}><TbWorld /></NavLink>
                </div>
            </div>
        </div>

        </>
    )
}

export default SingleBlogCard