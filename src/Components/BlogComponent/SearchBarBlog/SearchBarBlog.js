import React from 'react'
import './SearchBarBlog.css'
import { IoSearchSharp } from "react-icons/io5";

const SearchBarBlog = () => {
    return (
        <>
            <div className='main-search-blog'>
                <form action="">
                    <div className='position-relative mb-4'>
                        <IoSearchSharp className='search-icon' />
                        <input
                            className=' input-search '
                            type="text"
                            name="search-blog"
                            id="search"
                            placeholder='Search Keyword' />
                    </div>
                    <button className='btn-search-blog' type="submit">Search</button>

                </form>
            </div>
        </>
    )
}

export default SearchBarBlog