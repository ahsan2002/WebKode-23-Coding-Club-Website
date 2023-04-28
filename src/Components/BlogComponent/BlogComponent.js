import React from 'react'
import './BlogComponent.css'
import Layout from '../../Layout/index'
import CardBlog from './CardBlog/CardBlog'
import Category from './Cateogy/Category'
import RecentPost from './RecentPost/RecentPost'
import SearchBarBlog from './SearchBarBlog/SearchBarBlog'
import TagCloud from './TagCloud/TagCloud'
import { blogData } from '../../Api/blogData'

const BlogComponent = () => {
    return (
        <Layout>
            <div className='ss'>

                <div className='container'>
                    <div className="row">
                        <div className="blog-topper-div col-11 col-lg-12 col-md-12 mx-auto">
                            <h2>Blogs</h2>
                        </div>
                    </div>
                </div>
                <div className='main-blog-page'>
                    <div className='container' >
                        <div className="row">
                            <div class="blog-col col-10 col-lg-8 col-md-8 mx-auto">
                                {
                                    blogData.map((blog, i) => {
                                        return (
                                            <CardBlog {...blog} key={i} />
                                        )
                                    })
                                }
                            </div>
                            <div class="blog-right-col col-11 col-lg-4 col-md-4 mx-auto">
                                <SearchBarBlog />
                                <Category />
                                <RecentPost  />
                                <TagCloud />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BlogComponent