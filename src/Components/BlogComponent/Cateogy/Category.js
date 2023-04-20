import React from 'react'
import './Category.css'
import { NavLink } from 'react-router-dom'

const Category = () => {
    return (
        <div className='main-category'>
            <h3 className='category-heading'>Category</h3>
            <ul className='category-ul'>
                <li className='category-li'>
                    <NavLink className='category-link d-flex justify-content-between' to={'/blog'}>
                        <p>Technology</p>
                        <p>(37)</p>
                    </NavLink>
                </li>
                <li className='category-li'>
                    <NavLink className='category-link d-flex justify-content-between' to={'/blog'}>
                        <p>Technology</p>
                        <p>(37)</p>
                    </NavLink>
                </li>
                <li className='category-li'>
                    <NavLink className='category-link d-flex justify-content-between' to={'/blog'}>
                        <p>Technology</p>
                        <p>(37)</p>
                    </NavLink>
                </li>
                <li className='category-li'>
                    <NavLink className='category-link d-flex justify-content-between' to={'/blog'}>
                        <p>Technology</p>
                        <p>(37)</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Category