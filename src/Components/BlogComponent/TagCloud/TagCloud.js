import React from 'react'
import './TagCloud.css'
import { NavLink } from 'react-router-dom'

const TagCloud = () => {
    return (
        <>
            <div className='main-tag-clouds'>
                <h3 className='tag-clouds-heading'>Tag Clouds</h3>
                <ul>
                    <li>
                        <NavLink className='tag-cloud-link' to={'/blog'}>project</NavLink>
                    </li>
                    <li>
                        <NavLink className='tag-cloud-link' to={'/blog'}>web</NavLink>
                    </li>
                    <li>
                        <NavLink className='tag-cloud-link' to={'/blog'}>DevOps</NavLink>
                    </li>
                    <li>
                        <NavLink className='tag-cloud-link' to={'/blog'}>MERN</NavLink>
                    </li>
                    <li>
                        <NavLink className='tag-cloud-link' to={'/blog'}>Data Science</NavLink>
                    </li>
                    <li>
                        <NavLink className='tag-cloud-link' to={'/blog'}>PHP</NavLink>
                    </li>
                    <li>
                        <NavLink className='tag-cloud-link' to={'/blog'}>AST .NET</NavLink>
                    </li>
                    <li>
                        <NavLink className='tag-cloud-link' to={'/blog'}>Cyber Secuirty</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TagCloud