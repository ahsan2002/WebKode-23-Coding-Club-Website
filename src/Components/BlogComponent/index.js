import React from 'react'

import './BlogComponent.css'
import Layout from '../../Layout/index'
import CardBlog from './CardBlog/CardBlog'
import Category from './Cateogy/Category'

const index = () => {
    return (
        <Layout>
            <div className='ss'>
                <div className="regmain">
                    {/* <h2>Blogs</h2> */}
                    <img src="./images/logo.png" alt="" />
                </div>
                <div className='main-blog-page'>
                    <div className='container' >
                        <div className="row">
                            <div class="blog-col col-10 col-lg-8 col-md-8 mx-auto">
                                <CardBlog />
                                <CardBlog />
                                <CardBlog />
                            </div>
                            <div class="blog-right-col col-10 col-lg-4 col-md-4 mx-auto">
                                <div>
                                    <Category />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default index