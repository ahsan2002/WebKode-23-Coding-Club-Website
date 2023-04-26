import React from 'react'
import './SingleBlog.css'
import SearchBarBlog from '../SearchBarBlog/SearchBarBlog'
import Category from '../Cateogy/Category'
import RecentPost from '../RecentPost/RecentPost'
import TagCloud from '../TagCloud/TagCloud'
import Layout from '../../../Layout/index'
import SingleBlogCard from './SingleBlogCard'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { blogData } from '../../../Api/blogData'

const SingleBlog = () => {

    const [singleBlogdata, setSingleBlogdata] = useState()

    const { id } = useParams()

    const getSingleBlog = () => {
        const data = blogData.find((blog) => {
            return blog.id === id
        })
        setSingleBlogdata(data)
    }
    useEffect(() => {
        getSingleBlog(id)
    }, [])

    return (
        <>
            <Layout>
                <div className='ss'>
                    <div className='container'>
                        <div className="row">
                            <div className="blog-topper-div col-11 col-lg-12 col-md-12 mx-auto">
                                <h2>Blog Details</h2>
                            </div>
                        </div>
                    </div>
                    <div className='main-blog-page'>
                        <div className='container' >
                            <div className="row">
                                <div className="single-blog-col col-11 col-lg-8 col-md-8 mx-auto">
                                    <SingleBlogCard {...singleBlogdata} />
                                    <form className='mt-5' action='https://formspree.io/f/mdovpvnj' method='POST'>
                                        <h3 className='single-card-heading mb-4'>Leave Comment</h3>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 ">
                                                <input type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder='Name'
                                                    autoComplete="off"
                                                    required={true}
                                                    className='single-card-input'
                                                />
                                                <span className="single-card-separator"> </span>
                                            </div>
                                            <div className="col-12 col-lg-6 ">
                                                <input type="email"
                                                    name="email"
                                                    id=""
                                                    placeholder='Email'
                                                    autoComplete="off"
                                                    required={true}
                                                    className='single-card-input'
                                                />
                                                <span className="single-card-separator"> </span>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-12 ">
                                                <textarea
                                                    className='single-card-textarea'
                                                    placeholder='Write Comment'
                                                    name="comment"
                                                    id="comment"></textarea>
                                                <span className="single-card-separator"> </span>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="single-card-mybtn">
                                            Comment
                                        </button>
                                    </form>
                                </div>
                                <div className="blog-right-col col-11 col-lg-4 col-md-4 mx-auto">
                                    <SearchBarBlog />
                                    <Category />
                                    <RecentPost />
                                    <TagCloud />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default SingleBlog